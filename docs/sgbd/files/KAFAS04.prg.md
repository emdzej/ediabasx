# KAFAS04.prg

## General

|  |  |
| --- | --- |
| File | KAFAS04.prg |
| Type | PRG |
| Jobs | 42 |
| Tables | 327 |
| Origin | BMW EI-500 Sibilia |
| Revision | 8.000 |
| Author | EDAG-ENGINEERING-GMBH EV-313 Hertle |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kamerabasiertes Fahrerassistenzsystem Mid, High |  |  |
| ORIGIN | string | BMW EI-500 Sibilia |  |  |
| REVISION | string | 8.000 |  |  |
| AUTHOR | string | EDAG-ENGINEERING-GMBH EV-313 Hertle |  |  |
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

### _SUPPLIER_SPECIFIC_SESSION

ISO 14229 Service zu Steuerung verschiedener Betriebs-Sessions. Subfunction 0x61: Wechsel in die Supplier Specific Session.

_No arguments._

### STATUS_IP_CONFIGURATION

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

_No arguments._

### _STATUS_READ_PRODUCTION_DATA

Readout content of ProductionData using only UDS request and check if flashed Production Data is correct.

_No arguments._

### _STEUERN_HIL_MODE_EYEQ_INIT_DATA

Transmit special Init Data for EyeQ in HIL Mode

| Name | Type | Description |
| --- | --- | --- |
| INIT_PARAMS_VISION | binary | INIT_PARAMS_VISION |

### _STEUERN_WRITEPRODUCTIONDATA

Writes the whole production flash data

| Name | Type | Description |
| --- | --- | --- |
| PRODUCTION_DATA | binary | PRODUCTION_DATA |

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

### _GET_SADDLE_POINT_INFO

Read saddle point info

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT_SPECIFICATION | unsigned char | 1 Byte of Segment Specification |

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

### ADC_ERROR_REASON

| WERT | TEXT |
| --- | --- |
| 0x00 | No Error |
| 0x01 | Broken Wire |
| 0x02 | Mux Error |
| 0x03 | Converter Error |

### ARG_0X1023_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATION | + | - | 0-n | high | unsigned char | - | EXTERNAL_HSFZ_ACTIVATION_TAB | - | - | - | - | - | Aktiviert bzw. deaktiviert den externen HSFZ. |

### ARG_0X1047_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_INDEX | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Portindex Wertebereich: Port 0 - Port n-1 (bei insgesamt n Ports) |

### ARG_0X1090_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| APPLICATION_ID | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Applikations-ID für die der Log-Level Grenzwert geändert werden soll. Wenn dieser Parameter auf 0x00000000 gesetzt ist, wird der Log-Level Grenzwert für alle Kontext-IDs des SG geändert. |
| CONTEXT_ID | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Kontext-ID für die der Log-Level Grenzwert geändert werden soll. Parameter wird nur ausgewertet, wenn der Parameter Applikations-ID ungleich 0x00000000 ist. Wenn dieser Parameter auf 0x00000000 gesetzt ist, wird der neue Log-Level Grenzwert für alle Kontext-IDs der gegebenen Applikations-ID geändert.  |
| NEW_LOGLEVEL_THRESHOLD | + | - | 0-n | high | unsigned char | - | TAB_NEW_LOGLEVEL_THRESHOLD | - | - | - | - | - | Neuer LogLevel-Grenzwert |

### ARG_0X4001_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DYAWMAINCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Yaw Autofix Main |
| STAT_DPITCHMAINCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Pitch Autofix Main |
| STAT_DROLLMAINCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Roll Autofix Main |
| STAT_DYAWNARROWCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Yaw Autofix Narrow |
| STAT_DPITCHNARROWCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Pitch Autofix Narrow |
| STAT_DROLLNARROWCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Roll Autofix Narrow |
| STAT_DYAWFISHEYECAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Yaw Autofix Fisheye |
| STAT_DPITCHFISHEYECAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Pitch Autofix Fisheye |
| STAT_DROLLFISHEYECAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Roll Autofix Fisheye |

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DX_MAIN_CAM_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | DX Main Coding |
| STAT_DY_MAIN_CAM_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | DY Main Coding |
| STAT_DZ_MAIN_CAM_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | DZ Main Camera Height SPC |
| STAT_YAW_MAIN_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Yaw Main SPC |
| STAT_PITCH_MAIN_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Pitch Main SPC |
| STAT_ROLL_MAIN_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Roll Main SPC |
| STAT_YAW_NARROW_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Yaw Narrow SPC |
| STAT_PITCH_NARROW_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Pitch Narrow SPC |
| STAT_ROLL_NARROW_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Roll Narrow SPC |
| STAT_YAW_FISHEYE_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Yaw Fisheye SPC |
| STAT_PITCH_FISHEYE_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Pitch Fisheye SPC |
| STAT_ROLL_FISHEYE_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Roll Fisheye SPC |

### ARG_0X4005_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRINCIPAL_POINT_MAIN_X | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Translation to Main X |
| PRINCIPAL_POINT_MAIN_Y | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Translation to Main Y |
| PRINCIPAL_POINT_NARROW_X | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Translation to Narrow X  |
| PRINCIPAL_POINT_NARROW_Y | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Translation to Narrow Y |
| PRINCIPAL_POINT_FISHEYE_X | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Translation to Fisheye X |
| PRINCIPAL_POINT_FISHEYE_Y | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Translation to Fisheye Y |

### ARG_0X4006_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CENTRE_OF_DISTORTION_X_MAIN_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Center Of Distortion X Main |
| STAT_CENTRE_OF_DISTORTION_Y_MAIN_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Center Of Distortion Y Main |
| STAT_DISTORTION_COEFF_K1_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K1 Main |
| STAT_DISTORTION_COEFF_K2_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K2 Main |
| STAT_DISTORTION_COEFF_K3_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K3 Main |
| STAT_FOCAL_LENGTH_MAIN_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Focal Length Main |

### ARG_0X4007_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CENTRE_OF_DISTORTION_X_FISHEYE_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Center Of Distortion X Fisheye |
| STAT_CENTRE_OF_DISTORTION_Y_FISHEYE_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Center Of Distortion Y Fisheye |
| STAT_DISTORTION_COEFF_K1_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K1 Fisheye |
| STAT_DISTORTION_COEFF_K2_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K2 Fisheye |
| STAT_DISTORTION_COEFF_K3_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K3 Fisheye |
| STAT_FOCAL_LENGTH_FISHEYE_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Focal Length Fisheye |
| STAT_DPITCH_FISHEYE_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Delta Pitch Fisheye Relative To Main |
| STAT_DYAW_FISHEYE_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Delta Yaw Fisheye Relative To Main |
| STAT_DROLL_FISHEYE_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Delta Roll Fisheye Relative To Main |
| STAT_DISTORTION_COEFF_K4_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K4 Fisheye |
| STAT_DISTORTION_COEFF_K5_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K5 Fisheye |
| STAT_DISTORTION_COEFF_K6_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K6 Fisheye |
| STAT_DISTORTION_COEFF_K7_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K7 Fisheye |
| STAT_DISTORTION_COEFF_K8_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K8 Fisheye |
| STAT_DISTORTION_COEFF_K9_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K9 Fisheye |

### ARG_0X4008_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CENTRE_OF_DISTORTION_X_NARROW_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Center Of Distortion X Narrow |
| STAT_CENTRE_OF_DISTORTION_Y_NARROW_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Center Of Distortion Y Narrow |
| STAT_DISTORTION_COEFF_K1_NARROW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K1 Narrow |
| STAT_DISTORTION_COEFF_K2_NARROW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K2 Narrow |
| STAT_DISTORTION_COEFF_K3_NARROW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Distortion Coefficient K3 Narrow |
| STAT_FOCAL_LENGTH_NARROW_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Focal Length Narrow |
| STAT_DPITCH_NARROW_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Delta Pitch Narrow Relative To Main |
| STAT_DYAW_NARROW_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Delta Yaw Narrow Relative To Main |
| STAT_DROLL_NARROW_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Delta Roll Narrow Relative To Main |

### ARG_0X4036_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARNUNG | 0-n | high | unsigned char | - | TAB_WARNUNG_US | - | - | - | - | - | Löst eine Warnung der Funktion City Collision Mitigation aus. |
| HBA_PARAMETRIERUNG | 0-n | high | unsigned char | - | TAB_HBA_PARAMETRIERUNG_US | - | - | - | - | - | Setzen der HBA Empfindlichkeitsstufe. |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Legt die Dauer fest, wie lange die Subfunktionen von CCM angesteuert werden sollen. |
| FUNKTIONSVERFUEGBARKEIT | 0-n | high | unsigned char | - | TAB_QUALIFIER_US | - | - | - | - | - | Setzen des Qualifiers für die Funktion City Collision Mitigation. |
| BREMSVORKONDITIONIERUNG | 0-n | high | unsigned char | - | TAB_BREMSKONDITIONIERUNG_US | - | - | - | - | - | Trigger für Bremsvorkonditionierung |
| SYMBOL | 0-n | high | unsigned char | - | TAB_SYMBOL_US | - | - | - | - | - | Fordert die Symbolanzeige im Kombi an. |
| INTEGRITY | 0-n | high | unsigned char | - | TAB_INTEGRITY_US | - | - | - | - | - | Funktionssicherheitsintegrität des durch die Funktion angeforderten Bremswertes. |

### ARG_0X4038_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARNUNG | 0-n | high | unsigned char | - | TAB_WARNUNG_US | - | - | - | - | - | Löst eine Warnung des Fußgängerschutz Basis aus. |
| HBA_PARAMETRIERUNG | 0-n | high | unsigned char | - | TAB_HBA_PARAMETRIERUNG_US | - | - | - | - | - | Setzen der HBA Empfindlichkeitsstufe. |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Legt die Dauer fest, wie lange die Subfunktionen für Fußgängerschutz Basis angesteuert werden sollen. |
| FUNKTIONSVERFUEGBARKEIT | 0-n | high | unsigned char | - | TAB_QUALIFIER_US | - | - | - | - | - | Setzen des Qualifiers für den Fußgängerschutz Basis. |
| BREMSKONDITIONIERUNG | 0-n | high | unsigned char | - | TAB_BREMSKONDITIONIERUNG_US | - | - | - | - | - | Trigger für Bremsvorkonditionierung. |
| SYMBOL | 0-n | high | unsigned char | - | TAB_SYMBOL_US | - | - | - | - | - | Fordert die Symbolanzeige im Kombi an. |
| INTEGRITY | 0-n | high | unsigned char | - | TAB_INTEGRITY_US | - | - | - | - | - | Funktionssicherheitsintegrität des durch die Funktion angeforderten Bremswertes. |

### ARG_0X4039_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TYP | 0-n | high | unsigned char | - | TAB_TYP_CCMELDUNG | - | - | - | - | - | Typ der CC-Message |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Legt die Dauer fest, wie lange die Check Control Message angesteuert werden soll. |

### ARG_0X4045_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FINGERPRINT_DATA | DATA | high | data[13] | - | - | 1.0 | 1.0 | 0.0 | - | - | tbd |

### ARG_0X40A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ERROR_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Fehlernr., die zur Navigation gesendet werden soll (Signal ST_ERR_NO_RCVR_NAVI), Bereich: 0-255 |
| SYNC_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nr. der letzten erfolgr. Sync., die zur Navigation gesendet werden soll (Signal: ST_COU_NAVGRPH_SYNC), Bereich 0-255 |

### ARG_0X40B0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_SELECT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - Eingangsfehler, 2 - Logikfehler |
| ASSERTION_PASSED | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 - False, 1 - True |
| PRIORITY | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | interne ID laut UFM DTC Spezifikation |
| INTERNAL_ID | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | interne ID laut UFM DTC Spezifikation |
| DUMP_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszug 1 laut UFM DTC Spezifikation |
| DUMP_2 | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszug 1 laut UFM DTC Spezifikation |

### ARG_0X40B2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_SELECT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - Eingangsfehler, 2 - Logikfehler |
| ASSERTION_PASSED | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 - False, 1 - True |
| PRIORITY | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | interne ID laut UFM DTC Spezifikation |
| INTERNAL_ID | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | interne ID laut UFM DTC Spezifikation |
| DUMP_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszug 1 laut UFM DTC Spezifikation |
| DUMP_2 | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszug 2 laut UFM DTC Spezifikation |

### ARG_0X40B3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_SELECT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - Eingangsfehler, 2 - Logikfehler |
| ASSERTION_PASSED | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 - False, 1 - True |
| PRIORITY | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | interne ID laut UFM DTC Spezifikation |
| INTERNAL_ID | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | interne ID laut UFM DTC Spezifikation |
| DUMP_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszug 1 laut UFM DTC Spezifikation |
| DUMP_2 | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszug 2 laut UFM DTC Spezifikation |

### ARG_0X40B7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_SELECT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - Eingangsfehler, 2 - Logikfehler |
| ASSERTION_PASSED | 0/1 | high | signed char | - | - | - | - | - | - | - | 0 - False, 1 - True |
| PRIORITY | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | interne ID laut UFM DTC Spezifikation |
| INTERNAL_ID | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | interne ID laut UFM DTC Spezifikation |
| DUMP_1 | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszug 1 laut UFM DTC Spezifikation |
| DUMP_2 | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Auszug 2 laut UFM DTC Spezifikation |

### ARG_0X40C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ISO_COUNTRY_CODE_CHAR_1 | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | ISO Ländercode (char 1) |
| ISO_COUNTRY_CODE_CHAR_2 | TEXT | high | string[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | ISO Ländercode (char 2) |
| COUNTRY_MODE | HEX | high | unsigned char | - | - | - | - | - | - | - | Enum, der länderspezifisch die aktive WWA Use Case festlegt. |

### ARG_0X40C2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| QUALIFIER | 0-n | high | unsigned char | - | TAB_WWA_QUALIFIER | - | - | - | - | - | Qualifier |
| EXTENDED_QUALIFIER | 0-n | high | unsigned char | - | TAB_WWA_EXTENDED_QUALIFIER | - | - | - | - | - | Extended Qualifier |

### ARG_0X40C3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ON_OFF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | ON = 1  OFF = 0 |

### ARG_0X40C4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ON_OFF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | ON = 0x01  OFF = 0x00 |

### ARG_0X40C5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VEL_MIN | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | VEL_MIN [0...255] km/h |
| VEL_MAX | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | VEL_MAX [0 .. 255] km/h |

### ARG_0X40C6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ON_OFF | 0/1 | high | signed char | - | - | - | - | - | - | - | ON = 0x01  OFF = 0x00 |

### ARG_0X40C7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SIGNAL_ID | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | The signalId shall be mapped to an unique id in the software. For some signals (like SignInterface) it shall not be possible to replace with any value. In such cases the requests shall be accepted by the job, but no action shall be taken.  |
| SIGNAL_VALUE | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | In case the value supplied by the SignalValue parameter is outside the range of the value that can be stored in the signal (e.g. 0xFF for a 4 bit signal), then the max value shall be used.  In case the value supplied by the SignalId is outside of the valid range for Signals supported by the code, then the Diag job shall be rejected.   |

### ARG_0X40D1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERIALNUMBER | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | - | - | 23 Bytes (Digits) Serial Number: Bytes Description Value [Range] |

### ARG_0X40D2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERIAL_NUMBER | DATA | high | data[10] | - | - | 1.0 | 1.0 | 0.0 | - | - | 10 bytes of Serial Number |

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
| LAENDERCODE_STUFE | 0-n | high | unsigned char | - | STUFEN | - | - | - | - | - | Ländercodestufe |

### ARG_0X4108_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EVENT_DATA | 0-n | high | unsigned char | - | EVENT_DATA | - | - | - | - | - | Status Event Daten |
| OPERATIONMODE | 0-n | high | unsigned char | - | OPERATIONMODE | - | - | - | - | - | Typ Operationsmodus |

### ARG_0X4109_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATE_FR | 0/1 | high | unsigned char | - | - | - | - | - | - | - | aktiviert Fehlerreaktion 0=off; 1=on |

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
| FUNCTION_ON | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt die untere Schwelle für die geschwindigkeitsabhängige Aktivierung der Funktion. |
| FUNCTION_OFF | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt die obere Schwelle für die geschwindigkeitsabhängige Aktivierung der Funktion. |

### ARG_0X4115_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EHR_MODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=off; 1=on |

### ARG_0X4117_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EYEQ_STATE | 0-n | high | unsigned char | - | STAT_EYEQ_STATE | - | - | - | - | - | Sets the EyeQ in a specific state. |

### ARG_0X411B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRODUCTIONINTRINSICFISHEYE | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | - | - | ProductionIntrinsicFisheye |

### ARG_0X411C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRODUCTIONINTRINSICMAIN | DATA | high | data[40] | - | - | 1.0 | 1.0 | 0.0 | - | - | ProductionIntrinsicMain input argument |

### ARG_0X411D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRODUCTIONINTRINSICNARROW | DATA | high | data[52] | - | - | 1.0 | 1.0 | 0.0 | - | - | ProductionIntrinsicNarrow input argument |

### ARG_0X4129_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_SETBOUNDARYSCANMODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Transfers the System in BoundaryScan Mode to perform BoundaryScan Check. 0=PASSIVE 1=ACTIVE |

### ARG_0X41F4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TARGET_BOOT_UP_MODE | 0-n | high | unsigned char | - | TAB_STAT_TARGET_BOOT_UP_MODE | - | - | - | - | - | Target boot up mode |

### ARG_0X41F9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_NEXT_MANUAL_EXPOSURE | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Feste Belichtung (2 Bytes von 0 - 1079) |

### ARG_0X4200_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CALIBSTATE_IMPL | 0-n | high | unsigned int | - | TAB_CalibState_Impl | - | - | - | - | - | CalibState_Impl |

### ARG_0X4201_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WRITEAURIXSTATE | 0-n | high | unsigned char | - | UWB_STATUS_KAFAS_SYSTEM_STATE | - | - | - | - | - | WriteAurixState |

### ARG_0X4203_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATE_XCP | HEX | high | unsigned char | - | - | - | - | - | - | - | Argument to activate the XCP port |

### ARG_0X4205_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAMERAID | 0-n | high | unsigned char | - | TAB_CameraID | - | - | - | - | - | Camera ID  |
| RESULT | 0-n | high | unsigned char | - | TAB_Result | - | - | - | - | - | Result |

### ARG_0X4207_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BITMASK | HEX | high | unsigned char | - | - | - | - | - | - | - | Bitmask to close all dev. diagports |

### ARG_0XA37C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_KAFAS_KOMBI_ANZEIGE | - | - | - | - | - | AKTION siehe Tabelle TAB_KAFAS_KOMBI_ANZEIGE |
| DAUER | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Signalausgabe |

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

### ARG_0XD3BD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x01 = Reset wird durchgeführt |

### ARG_0XD3CD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerung KAFAS-Scheibenheizung: 0 = aus 1 = ein |
| ZEIT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung in Sekunden |

### ARG_0XE41E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNCTION_STATUS | 0-n | high | unsigned char | - | TAB_WWA_FCT_QUALIFIER | - | - | - | - | - | FUNCTION_STATUS |
| TIMING | ms | high | unsigned int | - | - | 1.0 | 1.0 | 1.0 | - | - | TIMING |

### ARG_0XE41F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARNUNG | 0-n | high | unsigned char | - | TAB_WWA_WARNUNG | - | - | - | - | - | Ausgabe Warntyp |
| DAUER_WARNUNG | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Ausgabe Zeit |
| WARNTYP | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = BN2018; 1 = BN2015; |
| DAUER_TEXTMELDUNG | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Ausgabe Zeit |

### ARG_0XE420_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTIONSVERFUEGBARKEIT | 0-n | high | unsigned char | - | FUNKTIONSVERFUEGBARKEIT | - | - | - | - | - | Gibt an in welchem Umfang die Funktion zur Verfügung steht. |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Warnung  |
| FUNKTIONSAUSPRAEGUNG | 0-n | high | unsigned char | - | TAB_VFW_Funktionsauspraegung | - | - | - | - | - | Gibt die Verfügbarkeit der Ampelwarnung an. |

### ARG_0XE421_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERTETABELLE_WARNTYP | 0-n | high | unsigned char | - | WARNARTEN_VFW | - | - | - | - | - | Werttabelle für Art der Warnung |
| LUFTSPIELREDUKTION | 0-n | high | unsigned char | - | LUFTSPIELREDUKTION | - | - | - | - | - | Art der Luftspielreduktion |
| EMPFINDLICHKEIT | 0-n | high | unsigned char | - | EMPFINDLICHKEIT | - | - | - | - | - | Empfindlichkeit des HBA |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Warnung  |

### ARG_0XE422_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERTETABELLE_WARNTYP | 0-n | high | unsigned char | - | WARNARTEN_VFW | - | - | - | - | - | Werttabelle für Art der Warnung |
| DAUER_IN_MS | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Warnung  |

### ARG_0XE46F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HEIGHT_DELTA_FRONT_AXLE | 0-n | high | unsigned char | - | TAB_CALIB_DELTA_HEIGHT | - | - | - | - | - | HEIGHT_DELTA_FRONT_AXLE |
| HEIGHT_DELTA_REAR_AXLE | 0-n | high | unsigned char | - | TAB_CALIB_DELTA_HEIGHT | - | - | - | - | - | HEIGHT_DELTA_REAR_AXLE |
| DUMMY | HEX | high | unsigned char | - | - | - | - | - | - | - | This value is only existing to have the same length for Read and Write.  |

### ARG_0XE471_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_DQ_DTC_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = Fasta Daten bezüglich DTC loeschen |

### ARG_0XE473_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_DQ_FS_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löscht die FASTA Werte bezüglich fail safes. 1=loeschen |

### ARG_0XE475_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_FLA_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = Fasta Fla loeschen |

### ARG_0XE477_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_LBD_LOESCHEN | 0/1 | high | signed char | - | - | - | - | - | - | - | 1 = FASTA-Daten löschen |

### ARG_0XE479_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FASTA_PPP_LOESCHEN | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 = FASTA Daten für PPP löschen |

### ARG_0XE47B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAFAS_SLI_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1: SLI löschen |

### ARG_0XE47D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _STEUERN_FASTA_VFW_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x01: VFW Fasta Daten löschen |

### ARG_0XE47F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WWA_FASTA_DATA_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 == DELETE FASTA DATA |

### ARG_0XE481_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CALIBCAM_FASTA_DATA_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x01 == Delete CALIBCAM FATA |

### ARG_0XF000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARAMETER | + | - | 0-n | high | unsigned char | - | TAB_SPTAC_PARAM | - | - | - | - | - | PARAMETER |

### ARG_0XF003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTRY_CODE | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Country Code für die Simulation. Jedes Byte repräsentiert einen ASCII Buchstaben (z.B. 44h 45h = DE) |

### ARG_0XF004_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAMERA_WERT | + | - | 0-n | high | unsigned char | - | TAB_CHOSE_STATUS | - | - | - | - | - | Choose Camera 1:= MainCam |

### ARG_0XF005_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_FAIL_SAFE_TYPE | + | - | 0-n | high | unsigned char | - | TAB_FAILSAFE_TYP | - | - | - | - | - | Failsafe-Typ, gibt Blindheitsursache (und Schlechtwetter) an. |
| SET_SEVERITY | + | - | 0-n | high | unsigned char | - | TAB_FAILSAFE_SEVERITY | - | - | - | - | - | Gibt für den gewählten Failsafe die Severity vor.  |

### ARG_0XF007_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | + | - | 0-n | high | unsigned int | - | TAB_ETH_PHY_MODE | - | - | - | - | - | Mode |
| PHYREGNUMSTORE | + | - | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | phyRegNumStore |

### ARG_0XF008_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | + | - | 0-n | high | unsigned int | - | TAB_PHY_CONFIG | - | - | - | - | - | MODE |

### ARG_0XF009_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SETETHERNETPHYECUMODE | + | - | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | SetEthernetPhyEcuMode |

### ARG_0XF00A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | + | - | 0-n | high | unsigned char | - | TAB_ETH_APP_MODE | - | - | - | - | - | MODE |

### ARG_0XF00D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESPONSEMODE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | RESPONSEMODE ON = 1 OFF = 0 |

### ARG_0XF010_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | + | - | 0-n | high | unsigned char | - | TAB_CTRL_DLT | - | - | - | - | - | MODE |

### ARG_0XF011_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | ACTIVE = 1 |

### ARG_0XF012_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | INACTIVE==0, ACTIVE == 1 |
| PARAM | + | - | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | PARAM |

### ARG_0XF013_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRACKS_INFO | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit0, Bit1 = Anzahl der Spuren, Bit3 = Nacht (falls Nacht: Bit gesetzt) |
| TRACK0_MAIN_CLASS | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | track0 main class |
| TRACK0_SUPP_CLASS | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | track0 supp class |
| TRACK0_ATTRIBUTES | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit0, Bit1 = Position auf der Spur;  Bit2 bis Bit7 = Eigenschaften der Spur |
| TRACK1_MAIN_CLASS | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | track1 Hauptklasse |
| TRACK1_SUPP_CLASS | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | track 1 Unterklasse |
| TRACK1_ATTRIBUTES | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit0..Bit1 = Position auf Spur Bit2..Bit7 = Eigenschaften der Spur |
| TRACK2_MAIN_CLASS | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | track 2 Hauptklasse |
| TRACK2_SUPP_CLASS | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | track 2 Unterklasse |
| TRACK2_ATTRIBUTES | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bit0..Bit1 = Position auf der Spur  Bit2..Bit7 = Eigenschaften der SPur |

### ARG_0XF014_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COUNTRYCODE_FIRSTCHAR | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | first char of country code according to iso 3166 alpha-2 |
| COUNTRYCODE_SECONDCHAR | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | second char of country code according to iso 3166 alpha 2 |

### ARG_0XF018_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POWER_MODE | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Power-Mode |

### ARG_0XF01C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAMERA_ID | + | - | 0-n | high | unsigned char | - | TAB_Camera_ID | - | - | - | - | - | Camera_ID |

### ARG_0XF01D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAMERA_ID | + | - | 0-n | high | unsigned char | - | TAB_Camera_ID | - | - | - | - | - | Camera_ID |

### ARG_0XF01E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PINNUMBER_0 | + | - | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | PINNUMBER_0 |
| PINNUMBER_1 | + | - | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | PINNUMBER_1 |
| PINNUMBER_2 | + | - | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | PINNUMBER_2 |
| PINNUMBER_3 | + | - | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | PINNUMBER_3 |
| PINNUMBER_4 | + | - | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | PINNUMBER_4 |

### ARG_0XF020_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | This job activates all cyclic frames & Triggers the event based frames in fixed periodicity. |

### ARG_0XF023_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RAW_IMAGE | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | 1 = Main 2 = Narrow 3 = Fisheye |

### ARG_0XF025_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ENCRYPTED_DEBUG_KEY | + | - | DATA | high | data[256] | - | - | 1.0 | 1.0 | 0.0 | - | - | ENCRYPTED_DEBUG_KEY |

### ARG_0XF027_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TYPE | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Ort des Speicherbereichs |

### ARG_0XF028_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TYPE | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Violation Type |

### ARG_0XF02A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TYPE | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | type of exception |

### ARG_0XF02D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TYPE | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | type of CPU exception |

### ARG_0XF02E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NUMBER_OF_RESETS | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | number of resets |

### ARG_0XF031_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASKID | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Identify which task should be affected |
| DELAY | + | - | HEX | high | unsigned long | - | - | - | - | - | - | - | delay of task in micro seconds; 0xFFFFFFFF shall result in an endless loop |

### ARG_0XF033_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEST_DATA | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Test data byte to be verified by ReceiveCanData |

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

### CODE_QU_FN_CCM_PPP

| WERT | TEXT |
| --- | --- |
| 0x2 | Funktion_Bereit |
| 0xA | Funktion_Aktiv |
| 0x3 | Funktion_Bereit_Degradiert |
| 0xB | Funktion_Aktiv_Degradiert |
| 0xE | Funktionsschnittstelle_ist_nicht verfuegbar |
| 0x6 | Funktion_meldet_Fehler |
| 0xF | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### EMPFINDLICHKEIT

| WERT | TEXT |
| --- | --- |
| 0x0 | Defaultparametersatz |
| 0x1 | leicht erhöhte Empfindlichkeit |
| 0x2 | erhöhte Empfindlichkeit |
| 0x3 | höchste Empfindlichkeit |
| 0xF | Signal ungültig |

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

### EVENT_ID_0X1536_VEHICLEINFORMATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrwerk |
| 0x01 | Range |
| 0x02 | RelativTimeBN2020 |
| 0x03 | DataPowerTrain2 |
| 0x04 | VehicleType |
| 0x05 | VehicleInformation_MAX |
| 0xFF | Wert ungültig |

### FAIL_SAFE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Not active |
| 0x01 | Active |
| 0x02 | Unknown |
| 0xFF | Wert ungültig |

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
| 0x025D00 | Energiesparmode aktiv | 0 | - |
| 0x025D03 | Externe SWT-Prüfbedingung nicht erfüllt | 1 | - |
| 0x025D04 | Interne SWT-Prüfung fehlgeschlagen | 0 | - |
| 0x025D08 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x025D09 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x025D0A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x025D0B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x025D0D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF5D | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x800A20 | Sensitivität verstellt | 1 | - |
| 0x800A21 | FLA_FSC_Missing | 0 | - |
| 0x800A22 | Interner Steuergerätefehler | 0 | - |
| 0x800A24 | Temporärer SW Fehler | 1 | - |
| 0x800A90 | EyeQ Application Parameter Fault | 0 | - |
| 0x800AB8 | Überspannung erkannt | 1 | - |
| 0x800AB9 | Unterspannung erkannt | 1 | - |
| 0x800ABA | Spannungsversorgung - Globale Überspannung extern | 1 | - |
| 0x800ABB | Spannungsversorgung - Globale Überspannung intern | 1 | - |
| 0x800ABC | Spannungsversorgung - Globale Unterspannung extern | 1 | - |
| 0x800ABD | Spannungsversorgung - Globale Unterspannung intern | 1 | - |
| 0x800ABE | KAFAS-Kamera: Sichtfeld dauerhaft gestört | 1 | - |
| 0x800ABF | KAFAS-Kamera: Sichtfeld kurzzeitig gestört | 1 | - |
| 0x800AC0 | KAFAS-Kamera: Abschaltung wegen Übertemperatur | 1 | - |
| 0x800AC1 | KAFAS-Kamera: Fehlverhalten aufgrund Untertemperatur | 1 | - |
| 0x800AC4 | Kamerakalibrierung fehlgeschlagen | 1 | - |
| 0x800AC5 | Scheibenheizung KAFAS: Kurzschluss nach Plus oder Unterbrechung | 0 | - |
| 0x800AC7 | Scheibenheizung KAFAS: Kurzschluss nach Minus | 0 | - |
| 0x800AC8 | Permanenter Kalibrierfehler | 0 | - |
| 0x800AD0 | Enabling Code mismatch | 0 | - |
| 0x800AD1 | Diagnostic Port Open | 0 | - |
| 0xE04602 | Ethernet: Link-Qualität niedrig | 1 | - |
| 0xE04603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 0 | - |
| 0xE04700 | Zeitbasis unsynchronisiert | 1 | - |
| 0xE04BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xE05411 | 0xE05411 - Botschaftsfehler - 0x9531 - 0x0001 - BMW.POWERTRAIN - AcceleratorPedal - Timeout | 1 | - |
| 0xE05412 | 0xE05412 - Botschaftsfehler - 0x5536 - 0x0001 - BMW.BODY - AirConditioningSystem - Timeout | 1 | - |
| 0xE05413 | 0xE05413 - Botschaftsfehler - 0x3531 - 0x0001 - BMW.DASS - ControlAndStatus - Timeout | 1 | - |
| 0xE05414 | 0xE05414 - Botschaftsfehler - 0x7531 - 0x0001 - BMW.CHASSIS - DrivingVector - Timeout | 1 | - |
| 0xE05415 | 0xE05415 - Botschaftsfehler - 0x1535 - 0x0001 - BMW.INFRASTRUCTURE - EnvironmentalInformation - Timeout | 1 | - |
| 0xE05416 | 0xE05416 - Botschaftsfehler - 0x5532 - 0x0001 - BMW.BODY - Light - Timeout | 1 | - |
| 0xE05417 | 0xE05417 - Botschaftsfehler - 0xF13D - 0x0001 - BMW.DASS - MainBeam2 - Timeout | 1 | - |
| 0xE05418 | 0xE05418 - Botschaftsfehler - 0x7533 - 0x0001 - BMW.CHASSIS - SpeedAcceleration - Timeout | 1 | - |
| 0xE0541A | 0xE0541A - Botschaftsfehler - 0x7532 - 0x0001 - BMW.CHASSIS - SteeringAngle - Timeout | 1 | - |
| 0xE0541B | 0xE0541B - Botschaftsfehler - 0x7530 - 0x0001 - BMW.CHASSIS - VehicleModel - Timeout | 1 | - |
| 0xE0541C | 0xE0541C - Botschaftsfehler - 0x7534 - 0x0001 - BMW.CHASSIS - VehicleStabilizationManagement - Timeout | 1 | - |
| 0xE0541D | 0xE0541D - Botschaftsfehler - 0x7536 - 0x0001 - BMW.CHASSIS - WheelTorqueECBA - Timeout | 1 | - |
| 0xE0541E | 0xE0541E - Botschaftsfehler - 0x1531 - 0x0001 - BMW.INFRASTRUCTURE - VehicleCondition - Timeout | 1 | - |
| 0xE0541F | 0xE0541F - Botschaftsfehler - 0x1536 - 0x0001 - BMW.INFRASTRUCTURE - VehicleInformation - Timeout | 1 | - |
| 0xE05420 | 0xE05420 - Botschaftsfehler - 0x3538 - 0x0001 - BMW.DASS - DriverAssistanceComfortAndSecurity - Timeout | 1 | - |
| 0xE05422 | 0xE05422 - Botschaftsfehler - 0x5531 - 0x0001 - BMW.BODY - Wiper - Timeout | 1 | - |
| 0xE05425 | 0xE05425 - Botschaftsfehler - 0x1506 - 0x0001 - BMW.INFRASTRUCTURE - StatusEnergy  - Timeout | 1 | - |
| 0xE05511 | 0xE05511 - Botschaftsfehler - 0x9531 - 0x0001 - BMW.POWERTRAIN - AcceleratorPedal - E2E-Absicherungsfehler | 1 | - |
| 0xE05514 | 0xE05514 - Botschaftsfehler - 0x7531 - 0x0001 - BMW.CHASSIS - DrivingVector - E2E-Absicherungsfehler | 1 | - |
| 0xE05516 | 0xE05516 - Botschaftsfehler - 0x5532 - 0x0001 - BMW.BODY - Light - E2E-Absicherungsfehler | 1 | - |
| 0xE05518 | 0xE05518 - Botschaftsfehler - 0x7533 - 0x0001 - BMW.CHASSIS - SpeedAcceleration - E2E-Absicherungsfehler | 1 | - |
| 0xE0551A | 0xE0551A - Botschaftsfehler - 0x7532 - 0x0001 - BMW.CHASSIS - SteeringAngle - E2E-Absicherungsfehler | 1 | - |
| 0xE0551B | 0xE0551B - Botschaftsfehler - 0x7530 - 0x0001 - BMW.CHASSIS - VehicleModel - E2E-Absicherungsfehler | 1 | - |
| 0xE0551C | 0xE0551C - Botschaftsfehler - 0x7534 - 0x0001 - BMW.CHASSIS - VehicleStabilizationManagement - E2E-Absicherungsfehler | 1 | - |
| 0xE0551E | 0xE0551E - Botschaftsfehler - 0x1531 - 0x0001 - BMW.INFRASTRUCTURE - VehicleCondition - E2E-Absicherungsfehler | 1 | - |
| 0xE05520 | 0xE05520 - Botschaftsfehler - 0x3538 - 0x0001 - BMW.DASS - DriverAssistanceComfortAndSecurity - E2E-Absicherungsfehler | 1 | - |
| 0xE05524 | 0xE05524 - Botschaftsfehler - 0xb50e - 0x0001 - BMW.INFOTAINMENT - FASuS - E2E-Absicherungsfehler | 1 | - |
| 0xE05610 | 0xE05610 - Signalfehler - 0xB531 - 0x0001 - BMW.INFOTAINMENT - ADASProtocol - Signal ungültig | 1 | - |
| 0xE05611 | 0xE05611 - Signalfehler - 0x9531 - 0x0001 - BMW.POWERTRAIN - AcceleratorPedal - Signal ungültig | 1 | - |
| 0xE05612 | 0xE05612 - Signalfehler - 0x5536 - 0x0001 - BMW.BODY - AirConditioningSystem - Signal ungültig | 1 | - |
| 0xE05613 | 0xE05613 - Signalfehler - 0x3531 - 0x0001 - BMW.DASS - ControlAndStatus - Signal ungültig | 1 | - |
| 0xE05614 | 0xE05614 - Signalfehler - 0x7531 - 0x0001 - BMW.CHASSIS - DrivingVector - Signal ungültig | 1 | - |
| 0xE05615 | 0xE05615 - Signalfehler - 0x1535 - 0x0001 - BMW.INFRASTRUCTURE - EnvironmentalInformation - Signal ungültig | 1 | - |
| 0xE05616 | 0xE05616 - Signalfehler - 0x5532 - 0x0001 - BMW.BODY - Light - Signal ungültig | 1 | - |
| 0xE05617 | 0xE05617 - Signalfehler - 0xF13D - 0x0001 - BMW.DASS - MainBeam2 - Signal ungültig | 1 | - |
| 0xE05618 | 0xE05618 - Signalfehler - 0x7533 - 0x0001 - BMW.CHASSIS - SpeedAcceleration - Signal ungültig | 1 | - |
| 0xE05619 | 0xE05619 - Signalfehler - 0xb534 - 0x0001 - BMW.INFOTAINMENT - DisplayStatus - Signal ungültig | 1 | - |
| 0xE0561A | 0xE0561A - Signalfehler - 0x7532 - 0x0001 - BMW.CHASSIS - SteeringAngle - Signal ungültig | 1 | - |
| 0xE0561B | 0xE0561B - Signalfehler - 0x7530 - 0x0001 - BMW.CHASSIS - VehicleModel - Signal ungültig | 1 | - |
| 0xE0561C | 0xE0561C - Signalfehler - 0x7534 - 0x0001 - BMW.CHASSIS - VehicleStabilizationManagement - Signal ungültig | 1 | - |
| 0xE0561D | 0xE0561D - Signalfehler - 0x7536 - 0x0001 - BMW.CHASSIS - WheelTorqueECBA - Signal ungültig | 1 | - |
| 0xE0561E | 0xE0561E - Signalfehler - 0x1531 - 0x0001 - BMW.INFRASTRUCTURE - VehicleCondition - Signal ungültig | 1 | - |
| 0xE0561F | 0xE0561F - Signalfehler - 0x1536 - 0x0001 - BMW.INFRASTRUCTURE - VehicleInformation - Signal ungültig | 1 | - |
| 0xE05620 | 0xE05620 - Signalfehler - 0x3538 - 0x0001 - BMW.DASS - DriverAssistanceComfortAndSecurity - Signal ungültig | 1 | - |
| 0xE05621 | 0xE05621 - Signalfehler - 0x5533 - 0x0001 - BMW.BODY - Environment - Signal ungültig | 1 | - |
| 0xE05622 | 0xE05622 - Signalfehler - 0x5531 - 0x0001 - BMW.BODY - Wiper - Signal ungültig | 1 | - |
| 0xE05623 | 0xE05623 - Signalfehler - 0x3549 - 0x0001 - BMW.DASS - ConfigurationFeedbackSteeringWheel - Signal ungültig | 1 | - |
| 0xE05624 | 0xE05624 - Signalfehler - 0xb50e - 0x0001 - BMW.INFOTAINMENT - FASuS - Signal ungültig | 1 | - |
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

### FUNKTIONSVERFUEGBARKEIT

| WERT | TEXT |
| --- | --- |
| 0x1 | Funktion bereit im Land nicht verfügbar |
| 0x2 | Funktion bereit |
| 0x3 | Funktion bereit - Degradiert |
| 0x6 | Funktion ist nicht verfügbar - Fehler KAFAS-Kamera |
| 0x9 | Funktion aktiv im Land nicht verfügbar |
| 0xA | Funktion aktiv |
| 0xB | Funktion aktiv - Degradiert |
| 0xE | Funktionsschnittstelle nicht verfuegbar |
| 0xF | Signal unbefuellt |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | IoHwAbEvt_ADC_ConverterDiagErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0002 | IoHwAbEvt_ADC_MultiplexerDiagErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0003 | IoHwAbEvt_ADC_BrokenWireDiagErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0004 | EyeQEvt_IoHwAb_ERROUTOpenCktErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0005 | EyeQEvt_IoHwAb_ERROUTShortedtoGndErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0006 | EyeQEvt_IoHwAb_ERROUTShortedHighErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0007 | EyeQEvt_DG_CatalogIDInvalidErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0008 | EyeQEvt_EyeQMgr_ERROUTOverTempErr | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0009 | EyeQEvt_DG_MsgTimeOutErr | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x000A | EyeQEvt_IPC_FrmSeqErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x000B | EyeQEvt_DG_RSDDVerErr | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x000C | EyeQEvt_DG_RSDPDVerErr | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x000D | EyeQEvt_DG_RSDSVerErr | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x000E | EyeQEvt_EyeQMgr_EyeQResetErr | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x000F | EyeQEvt_EyeQMgr_EyeQOpModeTransErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0010 | UWB_TYPE_ROBUSTNESS_E2E | 0/1 | High | 0x01 | - | - | - | - |
| 0x0011 | UWB_TYPE_ROBUSTNESS_INV | 0/1 | High | 0x02 | - | - | - | - |
| 0x0012 | UWB_TYPE_ROBUSTNESS_TO | 0/1 | High | 0x04 | - | - | - | - |
| 0x0013 | LINK_RESET_STATUS_00 | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0014 | LINK_RESET_STATUS_01 | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0015 | LINK_RESET_STATUS_02 | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0016 | LINK_RESET_STATUS_03 | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0017 | LINK_RESET_STATUS_04 | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0018 | LINK_RESET_STATUS_05 | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0019 | LINK_RESET_STATUS_06 | 0/1 | High | 0x0040 | - | - | - | - |
| 0x001A | LINK_RESET_STATUS_07 | 0/1 | High | 0x0080 | - | - | - | - |
| 0x001B | LINK_RESET_STATUS_08 | 0/1 | High | 0x0100 | - | - | - | - |
| 0x001C | LINK_RESET_STATUS_09 | 0/1 | High | 0x0200 | - | - | - | - |
| 0x001D | LINK_RESET_STATUS_10 | 0/1 | High | 0x0400 | - | - | - | - |
| 0x001E | LINK_RESET_STATUS_11 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x001F | LINK_RESET_STATUS_12 | 0/1 | High | 0x1000 | - | - | - | - |
| 0x0020 | LINK_RESET_STATUS_13 | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0021 | LINK_RESET_STATUS_14 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0022 | LINK_RESET_STATUS_15 | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0023 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0024 | IoHwAbEvt_PwrMgr_VBATTErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0025 | reserved | 0/1 | High | 0xFFFFFFFE | - | - | - | - |
| 0x0026 | SecurityEvt_EyeQSBS_Authentication | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0027 | ErrSecurityEvt_MCUJTAGLock_LockErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0028 | No Safe State Alert | 0/1 | High | 0x01 | - | - | - | - |
| 0x0029 | Safe State Alert All | 0/1 | High | 0x02 | - | - | - | - |
| 0x002A | AEB Safe State Alert | 0/1 | High | 0x04 | - | - | - | - |
| 0x002B | PedestrianDetection Safe State Alert | 0/1 | High | 0x08 | - | - | - | - |
| 0x002C | Vehicle Detection Safe State Alert | 0/1 | High | 0x10 | - | - | - | - |
| 0x002D | reserved | 0/1 | High | 0xE0 | - | - | - | - |
| 0x002E | IoHwAbEvt_BoardRevInvalidErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x002F | IoHwAbEvt_ADC_InitTestErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0030 | IoHwAbEvt_Heater_OpenCircuitErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0031 | IoHwAbEvt_Heater_ShortCircuitErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0032 | EyeQEvt_ThermalDiag_EyeQThermistorErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0033 | EyeQEvt_ThermalDiag_MainImagerThermistorErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0034 | EyeQEvt_ThermalDiag_FishEyeImagerThermistorErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0035 | EyeQEvt_ThermalDiag_NarrowImagerThermistorErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0036 | EyeQEvt_ThermalDiag_DDRThermistorErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0037 | EyeQEvt_ThermalDiag_AurixThermistorErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0038 | reserved | 0/1 | High | 0xFFFE0000 | - | - | - | - |
| 0x0039 | EyeQEvt_DG_InvalidRegionCodeErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x003A | reserved | 0/1 | High | 0xFFFFFFFE | - | - | - | - |
| 0x003B | EyeQEvt_NvM_SPTACInitParamsCrcErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x003C | EyeQEvt_NvM_SPInitParamsMainCrcErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x003D | EyeQEvt_NvM_SPInitParamsFisheyeCrcErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x003E | EyeQEvt_NvM_SPInitParamsNarrowCrcErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x003F | EyeQEvt_NvM_InitCodingParamsCrcErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0040 | EyeQEvt_NvM_SPCalibrationCrcErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0041 | EyeQEvt_NvM_RegionCodePrimaryCrcErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0042 | EyeQEvt_NvM_DriveSidePrimaryCrcErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0043 | EyeQEvt_NvM_CameraFocusedCrcErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0044 | EyeQEvt_NvM_EndModelPartNumberCrcErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0045 | EyeQEvt_NvM_SerialNumberCrcErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0046 | EyeQEvt_NvM_EFLCrcErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0047 | EyeQEvt_NvM_SerialNumberPCBCrCErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0048 | EyeQEvt_NvM_JulianDateCrCErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0049 | EyeQEvt_NvM_LastFSDataRcdPrimaryCrCErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x004A | EyeQEvt_NvM_DriveSideSecondaryCrcErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x004B | EyeQEvt_NvM_LastFSDataRcdSecondaryCrCErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x004C | EyeQEvt_NvM_SetNextBootModeCrCErr | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x004D | EyeQEvt_NvM_SetNextManualExposureValCrCErr | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x004E | EyeQEvt_NvM_RegionCodeSecondaryCrcErr | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x004F | reserved | 0/1 | High | 0xFFF00000 | - | - | - | - |
| 0x0050 | EyeQEvt_DG_SafetyMsgInputCrcMismatchErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0051 | EyeQEvt_DG_SafetyMsgOldEgoDataLatErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0052 | EyeQEvt_DG_SafetyMsgCodeCrcErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0053 | EyeQEvt_DG_SafetyMsgFCVsigFFIErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0054 | EyeQEvt_DG_EyeQSafetyMsgCRCErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0055 | EyeQEvt_DG_SafetyMsgAEBSignalCrcErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0056 | EyeQEvt_DG_SafetyMsgIntrnlInptSigStorgCrptErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0057 | reserved | 0/1 | High | 0xFFFFFE00 | - | - | - | - |
| 0x0058 | EyeQEvt_DG_SafetyBit31AebParamFFIErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0059 | EyeQEvt_DG_SafetyBit32InSigCorrErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x005A | EyeQEvt_FS_SevereMisAlignYawTimoutErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x005B | EyeQEvt_FS_OutOfFocusErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x005C | EyeQEvt_FS_SevereMisAlignPitchTimeoutErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x005D | reserved | 0/1 | High | 0xFFFFFFE0 | - | - | - | - |
| 0x005E | EyeQEvt_EyeQMgr_SysVerifiReqErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x005F | EyeQEvt_EyeQMgr_SysVerifiReqTRWErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0060 | EyeQEvt_DG_IPCEyeQCommDeadErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0061 | reserved | 0/1 | High | 0xFFFFFFFE | - | - | - | - |
| 0x0062 | EyeQEvt_DG_BootDiagMsgMissingErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0063 | EyeQEvt_DG_VehicleMsgTimeoutErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0064 | EyeQEvt_DG_SyncFrmIndexErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0065 | EyeQEvt_DG_MissingMsgErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0066 | EyeQEvt_DG_AppMsgVerErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0067 | EyeQEvt_DG_CmnMsgVerErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0068 | EyeQEvt_DG_EgoMotionSigVerErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0069 | EyeQEvt_DG_ExtBootMsgVerErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x006A | EyeQEvt_DG_FCWAEBMsgVerErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x006B | EyeQEvt_DG_GFHBHdrVerErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x006C | EyeQEvt_DG_HPPMsgVerErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x006D | EyeQEvt_DG_LBHdrVerErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x006E | EyeQEvt_DG_LDWVerErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x006F | EyeQEvt_DG_OSMHdrVerErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0070 | EyeQEvt_DG_ODSMsgVerErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0071 | EyeQEvt_DG_RSPHdrVerErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0072 | EyeQEvt_DG_SafetyMsgVerErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0073 | EyeQEvt_DG_SFROmniVerErr | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0074 | EyeQEvt_DG_SPCSigVerErr | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0075 | EyeQEvt_DG_SPCalibVerErr | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0076 | EyeQEvt_DG_SPTACSigVerErr | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0077 | EyeQEvt_DG_SLSVerErr | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x0078 | EyeQEvt_DG_TFLHdrVerErr | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0079 | EyeQEvt_DG_TSRHdrVerErr | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x007A | EyeQEvt_DG_VLHdrVerErr | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x007B | reserved | 0/1 | High | 0xFC000000 | - | - | - | - |
| 0x007C | EyeQEvt_IPC_RxBuffOverrunErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x007D | EyeQEvt_IPC_UnRecgnzdFrmErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x007E | EyeQEvt_IPC_UnKnwnAppIDErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x007F | EyeQEvt_IPC_ConsFrmNotRcvdErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0080 | EyeQEvt_IPC_FrmCrcErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0081 | EyeQEvt_IPC_IncompleteMultiFrmErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0082 | EyeQEvt_IPC_ImproperFrmSizeErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0083 | EyeQEvt_IPCDRV_BuffersMisalignmentErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0084 | EyeQEvt_IPCDRV_PartialByteErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0085 | EyeQEvt_IPC_InvalidMESPHdrErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0086 | reserved | 0/1 | High | 0xFFFFF800 | - | - | - | - |
| 0x0087 | EyeQEvt_NvM_TagIDErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0088 | EyeQEvt_NvM_SingleBlckReadErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0089 | EyeQEvt_NvM_VehicleCalParamsCrcErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x008A | EyeQEvt_NvM_SPCCalibrationPrimaryCrcErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x008B | EyeQEvt_NvM_SPCCalibrationSecondaryCrcErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x008C | EyeQEvt_NvM_SPCCalProcCtrlParamsCrcErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x008D | EyeQEvt_NvM_AutoFixCalPrimaryCrcErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x008E | EyeQEvt_NvM_AutoFixCalSecondaryCrcErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x008F | EyeQEvt_NvM_SPTACCalibrationCrcErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0090 | EyeQEvt_NvM_TACCalibrationCrcErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0091 | EyeQEvt_NvM_EyeQDataStatisticsCrcErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0092 | EyeQEvt_NvM_SFRInitParamsMainCrcErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0093 | EyeQEvt_NvM_SFRInitParamsNarrowCrcErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0094 | EyeQEvt_NvM_SFRInitParamsFishEyeCrcErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0095 | EyeQEvt_NvM_ThermalShutdownParamsCrcErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0096 | EyeQEvt_NvM_EyeQSysCfgCrcErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0097 | EyeQEvt_NvM_TAC2InitConfParamsCrcErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0098 | EyeQEvt_NvM_TACInitConfParamsCrcErr | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0099 | EyeQEvt_NvM_CamHwCalParamsCrcErr | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x009A | reserved | 0/1 | High | 0xFFF80000 | - | - | - | - |
| 0x009B | IoHwAbEvt_PwrMgr_1V0PwrErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x009C | IoHwAbEvt_PwrMgr_1V8DDRPwrErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x009D | IoHwAbEvt_PwrMgr_1V8PwrErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x009E | IoHwAbEvt_PwrMgr_ImagerPwrErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x009F | IoHwAbEvt_PwrMgr_3V3PwrErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x00A0 | IoHwAbEvt_PwrMgr_5V0PwrErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x00A1 | IoHwAbEvt_PwrMgr_1V1PwrErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x00A2 | IoHwAbEvt_PwrMgr_3V3MainPwrErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x00A3 | IoHwAbEvt_PwrMgr_3V3NarrowPwrErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x00A4 | IoHwAbEvt_PwrMgr_3V3FeyePwrErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x00A5 | reserved | 0/1 | High | 0xFFFFFC00 | - | - | - | - |
| 0x00A6 | EyeQEvt_DG_IPCMECompatibilityErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x00A7 | EyeQEvt_DG_IPCEyeQInitCalErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x00A8 | EyeQEvt_DG_EyeQStuckAtBISTErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x00A9 | EyeQEvt_DG_EyeQStuckAtPLLErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x00AA | EyeQEvt_DG_EyeQStuckAtPARITYErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x00AB | EyeQEvt_DG_DDRChipFailureErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x00AC | EyeQEvt_DG_FlashMemoryFailureErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x00AD | EyeQEvt_DG_AppDiag1VideoErrDMAprobErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x00AE | EyeQEvt_IPC_MespRspTimeoutErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x00AF | EyeQEvt_DG_ChallengeRepetitionErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x00B0 | EyeQEvt_DG_WrongChallengeResponseErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x00B1 | EyeQEvt_DG_MissingFirstChallengeResponseErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x00B2 | EyeQEvt_DG_FatalErrAppI2CVideoGrabFailErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x00B3 | reserved | 0/1 | High | 0xFF000000 | - | - | - | - |
| 0x00B4 | EyeQEvt_EyeQSUSD_DDRErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x00B5 | EyeQEvt_EyeQSUSD_SequenceErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x00B6 | EyeQEvt_EyeQSUSD_BISTErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x00B7 | EyeQEvt_EyeQSUSD_BootAuthenticationErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x00B8 | EyeQEvt_EyeQSUSD_DDRInitErr | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x00B9 | EyeQEvt_EyeQSUSD_AppAuthenticationErr | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x00BA | EyeQEvt_DG_FatalErrAppErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x00BB | EyeQEvt_DG_FatalErrAppFSErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x00BC | EyeQEvt_DG_FatalErrAppCalErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x00BD | EyeQEvt_DG_FatalErrAppInitFailErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x00BE | EyeQEvt_DG_FatalErrAppInitCameraInitErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x00BF | EyeQEvt_DG_FatalErrCamSelfResetErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x00C0 | EyeQEvt_DG_FatalErrAppPatternTestErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x00C1 | EyeQEvt_DG_FatalErrApplI2cTimeoutErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x00C2 | EyeQEvt_DG_FatalErrAppCamCCFT_CrcFailErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x00C3 | EyeQEvt_DG_FatalErrPLLCompErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x00C4 | EyeQEvt_DG_FatalErrPVGeneralErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x00C5 | EyeQEvt_DG_FatalErrPVverificationErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x00C6 | EyeQEvt_DG_FatalErrAppGVPUstateTerErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x00C7 | reserved | 0/1 | High | 0xFFFF8000 | - | - | - | - |
| 0x00C8 | EyeQEvt_EyeQMgr_ERROUTFatalErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x4009 | EXCEPTION_SYMPTOM | 0-n | High | 0xFF | TAB_EXCEPTION_SYMPTOM | - | - | - |
| 0x400A | ERROR_MODE_REASON | 0-n | High | 0xFF | TAB_ERROR_MODE_REASON | - | - | - |
| 0x400B | ETHERNET_STATUS | 0-n | High | 0xFFFFFFFF | TAB_ETHERNET_STATUS | - | - | - |
| 0x400C | CODING_PARAMETER | 0-n | High | 0xFFFF | TAB_CODING_PARAMETER | - | - | - |
| 0x4015 | UWB_DAYTIME_INDICATOR | 0-n | High | 0xFF | TAB_DAY_TIME_INDICATOR | - | - | - |
| 0x4016 | UWB_TRIGGER_FAIL_SAFE_TYP | 0-n | High | 0xFF | TAB_FAILSAFE_TYP | - | - | - |
| 0x4017 | UWB_TRIGGER_FAIL_SAFE_SERVERITY | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4018 | UWB_WEATHER_INDICATOR | 0-n | High | 0xFF | TAB_WEATHER_INDICATOR | - | - | - |
| 0x4019 | UWB_TEMP_OUTSIDE | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x401F | PROG_FLOW_ERR_TASK | 0-n | High | 0xFF | TAB_PROG_FLOW_ERR_TASK | - | - | - |
| 0x4021 | PROG_FLOW_ERR_INFO | 0-n | High | 0xFFFFFFFF | TAB_PROG_FLOW_ERR_INFO | - | - | - |
| 0x4028 | HEATER_TIME_ON | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4029 | HEATER_TIME_OFF | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x402A | HEATER_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x402B | HEATER_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x402C | NOTIFIER_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4030 | UWB_CALIB_TRW_FAILURE_CODE | 0-n | High | 0xFF | TAB_UWB_CALIB_TRW_FAILURE_CODE | - | - | - |
| 0x4031 | UWB_CALIB_DRIVEN_DISTANCE | m | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4032 | UWB_CALIB_PITCH_MAIN | ° | High | unsigned char | - | 1.0 | 10.0 | -10.0 |
| 0x4033 | UWB_CALIB_YAW_MAIN | ° | High | unsigned char | - | 1.0 | 10.0 | -10.0 |
| 0x4034 | UWB_CALIB_ROLL_MAIN | ° | High | unsigned char | - | 1.0 | 10.0 | -10.0 |
| 0x4035 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x403E | SESSION_IDENTIFIER | HEX | High | unsigned char | - | - | - | - |
| 0x4047 | TEMP_SENSOR_DDR_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4048 | TEMP_STATUS_VMP | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4049 | TEMP_STATUS_EYEQ_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x404A | TEMP_STATUS_IMG_DIE | 0-n | High | 0xFF | Temerature_EYEQ | - | - | - |
| 0x404B | TEMP_STATUS_AURIX_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x404C | TEMP_STATUS_PCB_EYEQ_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x404D | TEMP_STATUS_PCB_IMG | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x404F | UWB_ERROR_CODING_LOCATION | 0-n | High | 0xFF | TAB_UWB_Error_Coding_Location | - | - | - |
| 0x4050 | ERROR_ID_INPUT_EMELECTRONICHORIZON | HEX | High | unsigned char | - | - | - | - |
| 0x4051 | ERROR_DUMP_1_INPUT_EMELECTRONICHORIZON | HEX | High | unsigned long | - | - | - | - |
| 0x4052 | ERROR_DUMP_2_INPUT_EMELECTRONICHORIZON | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4053 | ERROR_ID_INPUT_GIVEWAYWARNER | HEX | High | unsigned char | - | - | - | - |
| 0x4054 | ERROR_DUMP_1_INPUT_GIVEWAYWARNER | HEX | High | unsigned long | - | - | - | - |
| 0x4055 | ERROR_DUMP_2_INPUT_GIVEWAYWARNER | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4056 | ERROR_ID_INPUT_TRAFFICSIGNFUSION | HEX | High | unsigned char | - | - | - | - |
| 0x4057 | ERROR_DUMP_1_INPUT_TRAFFICSIGNFUSION | HEX | High | unsigned long | - | - | - | - |
| 0x4058 | ERROR_DUMP_2_INPUT_TRAFFICSIGNFUSION | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4059 | ERROR_ID_INPUT_SLCONDITIONEVALUATOR | HEX | High | unsigned char | - | - | - | - |
| 0x405A | ERROR_DUMP_1_INPUT_SLCONDITIONEVALUATOR | HEX | High | unsigned long | - | - | - | - |
| 0x405B | ERROR_DUMP_2_INPUT_SLCONDITIONEVALUATOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x405C | ERROR_ID_INPUT_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned char | - | - | - | - |
| 0x405D | ERROR_DUMP_1_INPUT_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned long | - | - | - | - |
| 0x405E | ERROR_DUMP_2_INPUT_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4060 | UWB_REG_3_PHY_REVISION | HEX | High | unsigned int | - | - | - | - |
| 0x4061 | UWB_REG_17_EXTENDED_CONTROL | HEX | High | unsigned int | - | - | - | - |
| 0x4062 | UWB_REG_18_CONFIG_REG_1 | HEX | High | unsigned int | - | - | - | - |
| 0x4063 | UWB_REG_19_CONFIG_REG_2 | HEX | High | unsigned int | - | - | - | - |
| 0x4064 | UWB_REG_20_SYMBOL_ERR_CNT | HEX | High | unsigned int | - | - | - | - |
| 0x4065 | UWB_REG_21_INTERRUPT_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4066 | UWB_REG_23_COM_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4067 | UWB_REG_24_GEN_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4068 | UWB_REG_25_EXTENDED_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4069 | UWB_REG_26_LINK_FAILURE_CNT | HEX | High | unsigned int | - | - | - | - |
| 0x406A | UWB_TRW_ETH_INFO | HEX | High | unsigned long | - | - | - | - |
| 0x4070 | ERROR_ID_LOGIC_EMELECTRONICHORIZON | HEX | High | unsigned char | - | - | - | - |
| 0x4071 | ERROR_DUMP_1_LOGIC_EMELECTRONICHORIZON | HEX | High | unsigned long | - | - | - | - |
| 0x4072 | ERROR_DUMP_2_LOGIC_EMELECTRONICHORIZON | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4073 | ERROR_ID_LOGIC_GIVEWAYWARNER | HEX | High | unsigned char | - | - | - | - |
| 0x4074 | ERROR_DUMP_1_LOGIC_GIVEWAYWARNER | HEX | High | unsigned long | - | - | - | - |
| 0x4075 | ERROR_DUMP_2_LOGIC_GIVEWAYWARNER | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4076 | ERROR_ID_LOGIC_TRAFFICSIGNFUSION | HEX | High | unsigned char | - | - | - | - |
| 0x4077 | ERROR_DUMP_1_LOGIC_TRAFFICSIGNFUSION | HEX | High | unsigned long | - | - | - | - |
| 0x4078 | ERROR_DUMP_2_LOGIC_TRAFFICSIGNFUSION | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4079 | ERROR_ID_LOGIC_SLCONDITIONEVALUATOR | HEX | High | unsigned char | - | - | - | - |
| 0x407A | ERROR_DUMP_1_LOGIC_SLCONDITIONEVALUATOR | HEX | High | unsigned long | - | - | - | - |
| 0x407B | ERROR_DUMP_2_LOGIC_SLCONDITIONEVALUATOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x407C | ERROR_ID_LOGIC_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned char | - | - | - | - |
| 0x407D | ERROR_DUMP_1_LOGIC_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned long | - | - | - | - |
| 0x407E | ERROR_DUMP_2_LOGIC_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4080 | Etherner_RX_Controller_POS | HEX | High | unsigned char | - | - | - | - |
| 0x4081 | Etherner_RX_Stack_POS | HEX | High | unsigned int | - | - | - | - |
| 0x4082 | Etherner_RX_Controller_COUNT | HEX | High | unsigned char | - | - | - | - |
| 0x4083 | Etherner_RX_Stack_COUNT | HEX | High | unsigned int | - | - | - | - |
| 0x4090 | UWB_DIAGNOSTIC_PORT_XCP | 0/1 | High | 0x01 | - | - | - | - |
| 0x4091 | UWB_DIAGNOSTIC_PORT_JTAG | 0/1 | High | 0x01 | - | - | - | - |
| 0x4093 | E2E_SERVICE_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4094 | E2E_NOTIFIER_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4095 | INVALID_SERVICE_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4096 | INVALID_NOTIFIER_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4097 | TIMEOUT_SERVICE_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4098 | TIMEOUT_NOTIFIER_ID | HEX | High | unsigned int | - | - | - | - |
| 0x411A | EyeQ Coding Failed Reason | HEX | High | unsigned long | - | - | - | - |
| 0x41F0 | ADC_ERROR_REASON | 0-n | High | 0xFF | ADC_ERROR_REASON | - | - | - |
| 0x41F1 | ADC_ERROR_BROKEN_WIRE_1 | HEX | High | unsigned long | - | - | - | - |
| 0x41F2 | ADC_ERROR_BROKEN_WIRE_2 | HEX | High | unsigned long | - | - | - | - |
| 0x45A0 | UWB_HWEL_MAYOR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x45A1 | UWB_HWEL_MINOR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x45A2 | UWB_HWEL_PATCH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x45AA | UWB_AVAILABILITY_FCW_AEB_BRAKING | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45AB | UWB_NON_AVAILABILITY_REASON_FCW_AEB_BRAKING | HEX | High | unsigned long | - | - | - | - |
| 0x45AC | UWB_AVAILABILITY_FCW_AEB_WARNING | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45AD | UWB_NON_AVAILABILITY_REASON_FCW_AEB_WARNING | HEX | High | unsigned long | - | - | - | - |
| 0x45AE | UWB_SYSTEM_AVAILABILITIY_HLB | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45AF | UWB_NON_AVAILABILITIY_REASON_HLB | HEX | High | unsigned long | - | - | - | - |
| 0x45B0 | UWB_SYSTEM_AVAILABILITIY_RSP | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B1 | UWB_NON_AVAILABILITIY_REASON_RSP | HEX | High | unsigned long | - | - | - | - |
| 0x45B2 | UWB_SYSTEM_AVAILABILITIY_VLM | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B3 | UWB_NON_AVAILABILITIY_REASON_VLM | HEX | High | unsigned long | - | - | - | - |
| 0x45B4 | UWB_SYSTEM_AVAILABILITIY_LBD | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B5 | UWB_NON_AVAILABILTIY_REASON_LBD | HEX | High | unsigned long | - | - | - | - |
| 0x45B6 | UWB_SYSTEM_AVAILABILTIY_TLR_TFL | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B7 | UWB_NON_AVAILABILTIY_REASON_TLR_TFL | HEX | High | unsigned long | - | - | - | - |
| 0x45B8 | UWB_SYSTEM_AVAILABILTIY_TSR | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B9 | UWB_NON_AVAILABILTIY_REASON_TSR | HEX | High | unsigned long | - | - | - | - |
| 0x45BA | UWB_SYSTEM_AVAILABILTIY_FREESPACE | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45BB | UWB_NON_AVAILABILTIY_REASON_FREESPACE | HEX | High | unsigned long | - | - | - | - |
| 0x45BC | UWB_SYSTEM_AVAILABILTIY_EGOMOTION | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45BD | UWB_NON_AVAILABILITY_REASON_EGOMOTION | HEX | High | unsigned long | - | - | - | - |
| 0x45BE | DTC_REASON | 0-n | High | 0xFF | TAB_DTC_REASON | - | - | - |
| 0x45BF | UWB_SYSTEM_AVAILABILITY_OD | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45C0 | UWB_NON_AVAILABILITY_REASON_OD | HEX | High | unsigned long | - | - | - | - |
| 0x45C1 | UWB_FSC_VFW | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45C2 | ST_UDP | HEX | High | unsigned char | - | - | - | - |
| 0x45C3 | ST_CENG_DRV | HEX | High | unsigned char | - | - | - | - |
| 0x45C4 | ST_ENERG_GEN | 0-n | High | 0xFF | TABELLE_ENTLASTUNG_GENERATOR | - | - | - |
| 0x45C5 | Urspruenglicher_DTC | HEX | High | unsigned long | - | - | - | - |
| 0x45C6 | UWB_FSC_LDW | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45C7 | UWB_FSC_SLI | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45C8 | UWB_FSC_CCM | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45C9 | UWB_FSC_WWA | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45CA | NOTIFIER_SIGNAL_POSITION | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x45CB | INVALID_DETECTION_SOURCE | 0-n | High | 0xFF | TAB_INVALID_DETECTION_SOURCE | - | - | - |
| 0x45CC | TAB_UWB_FSC_FLA | HEX | High | unsigned char | - | - | - | - |
| 0x45CE | UWB_C_FLA_ON_OFF | 0-n | High | 0xFF | TAB_C_FLA_ON_OFF | - | - | - |
| 0x45CF | Event_ID_0x9531_Accelerator_Pedal | 0-n | High | 0xFF | TAB_UWB_NOTIFICATION_EVENT_ID_0x9531_ACCELERATOR_PEDAL | - | - | - |
| 0x45D0 | Transformer Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45D1 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45D2 | Event_ID_0x5536_AirConditioningSystem | 0-n | High | 0xFF | TAB_Event_ID_0x5536_AirConditioningSystem | - | - | - |
| 0x45D5 | Event_ID_0x3531_ControlAndStatus | 0-n | High | 0xFF | TAB_Event_ID_0x3531_ControlAndStatus | - | - | - |
| 0x45D8 | Event_ID_0x7531_DrivingVector | 0-n | High | 0xFF | TAB_Event_ID_0x7531_DrivingVector | - | - | - |
| 0x45D9 | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45DA | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45DB | Event_ID_0x1535_EnvironmentalInformation | 0-n | High | 0xFF | TAB_Event_ID_0x1535_EnvironmentalInformation | - | - | - |
| 0x45DE | Event_ID_0x5532_Light | 0-n | High | 0xFF | TAB_Event_ID_0x5532_Light | - | - | - |
| 0x45DF | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45E0 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45E1 | Event_ID_0xF13D_MainBeam2 | 0-n | High | 0xFF | TAB_Event_ID_0xF13D_MainBeam2 | - | - | - |
| 0x45E4 | Event_ID_0x7533_SpeedAcceleration | 0-n | High | 0xFF | TAB_Event_ID_0x7533_SpeedAcceleration | - | - | - |
| 0x45E5 | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45E6 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45E7 | Event_ID_0x7532_SteeringAngle | 0-n | High | 0xFF | TAB_Event_ID_0x7532_SteeringAngle | - | - | - |
| 0x45E8 | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45E9 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45EA | Event_ID_0x7530_VehicleModel | 0-n | High | 0xFF | TAB_Event_ID_0x7530_VehicleModel | - | - | - |
| 0x45EB | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45EC | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45ED | Event_ID_0x7534_VehicleStabilizationManagement | 0-n | High | 0xFF | TAB_Event_ID_0x7534_VehicleStabilizationManagement | - | - | - |
| 0x45EE | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45EF | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45F0 | Event_ID_0x7536_WheelTorqueECBA | 0-n | High | 0xFF | TAB_Event_ID_0x7536_WheelTorqueECBA | - | - | - |
| 0x45F3 | Event_ID_0x1531_VehicleCondition | 0-n | High | 0xFF | TAB_Event_ID_0x1531_VehicleCondition | - | - | - |
| 0x45F4 | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45F5 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45F6 | Event_ID_0x1536_VehicleInformation | 0-n | High | 0xFF | Event_ID_0x1536_VehicleInformation | - | - | - |
| 0x45F9 | Event_ID_0x3538_DriverAssistanceComfortAndSecurity | 0-n | High | 0xFF | TAB_Event_ID_0x3538_DriverAssistanceComfortAndSecurity | - | - | - |
| 0x45FA | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45FB | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45FC | Event_ID_0x5531_Wiper | 0-n | High | 0xFF | TAB_Event_ID_0x5531_Wiper | - | - | - |
| 0x4600 | TEMP_STATUS_AURIX_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4601 | TEMP_STATUS_DDR_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4602 | TEMP_STATUS_MAIN_IMG_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4603 | TEMP_STATUS_NARROW_IMG_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4604 | TEMP_STATUS_FISHEYE_IMG_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4605 | TEMP_STATUS_MAIN_IMG_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4606 | TEMP_STATUS_NARROW_IMG_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4607 | TEMP_STATUS_FISHEYE_IMG_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4609 | Event_ID_0xB50E_FASuS | 0-n | High | 0xFF | TAB_Event_ID_0xB50E_FASuS | - | - | - |
| 0x460A | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x460B | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x460C | Event_ID_0x1506_StatusEnergy | 0-n | High | 0xFF | TAB_Event_ID_0x1506_StatusEnergy | - | - | - |
| 0x460D | ETH_BUFFER_ERROR_ID | HEX | High | unsigned char | - | - | - | - |
| 0x460E | ETH_BUFFER_VALUE | HEX | High | unsigned long | - | - | - | - |
| 0x4610 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4611 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4612 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4613 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4614 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4615 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4616 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4617 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4618 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4619 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461A | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461B | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461C | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461D | SystemStatusInfo | 0-n | High | 0xFF | TAB_SystemStatusInfo | - | - | - |
| 0x461E | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461F | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4E46 | Error_Reason_pFGS_CCM | 0-n | High | 0xFF | TAB_Error_Reason_pFGS_CCM | - | - | - |
| 0x6000 | EXCEPTION_DEBUG_REGISTER_0 | HEX | High | unsigned long | - | - | - | - |
| 0x6001 | EXCEPTION_DEBUG_REGISTER_1 | HEX | High | unsigned long | - | - | - | - |
| 0x6002 | EXCEPTION_DEBUG_REGISTER_2 | HEX | High | unsigned long | - | - | - | - |
| 0x6003 | EXCEPTION_DEBUG_REGISTER_3 | HEX | High | unsigned long | - | - | - | - |
| 0x6004 | EXCEPTION_DEBUG_REGISTER_4 | HEX | High | unsigned long | - | - | - | - |
| 0x6005 | EXCEPTION_DEBUG_REGISTER_5 | HEX | High | unsigned long | - | - | - | - |
| 0x6F00 | Vehicle State | 0-n | Low | 0xFF | TAB_ST_CON_VEH | - | - | - |
| 0x6F02 | ECU Vbat | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6F03 | ECU Temp | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6F07 | VehicleSpeed | km/h | High | unsigned int | - | 0.1 | 1.0 | -100.0 |
| 0x6F09 | SystemCycleCounter | count | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6FFB | UWB_STATUS_KAFAS_SYSTEM_STATE | 0-n | High | 0xFF | UWB_STATUS_KAFAS_SYSTEM_STATE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| 0x0D0031 | ADC_ERROR | 0 | - |
| 0x5D0000 | Kalibriermodus Reset | 0 | - |
| 0x5D0020 | DEM_ERROR_GIVEWAYWARNER_INPUT_FAULT | 0 | - |
| 0x5D0021 | DEM_ERROR_GIVEWAYWARNER_LOGIC_FAULT | 0 | - |
| 0x5D0024 | DEM_ERROR_EM_ELECTRONIC_HORIZON_INPUT_FAULT | 0 | - |
| 0x5D0025 | DEM_ERROR_EM_ELECTRONIC_HORIZON_LOGIC_FAULT | 0 | - |
| 0x5D0028 | DEM_ERROR_EMTRAFFICSIGNFUSION_INPUT_FAULT | 0 | - |
| 0x5D0029 | DEM_ERROR_EMTRAFFICSIGNFUSION_LOGIC_FAULT | 0 | - |
| 0x5D002A | DEM_ERROR_EM_S_L_CONDITION_EVALUATOR_INPUT_FAULT | 0 | - |
| 0x5D002B | DEM_ERROR_EM_S_L_CONDITION_EVALUATOR_LOGIC_FAULT | 0 | - |
| 0x5D002C | DEM_ERROR_EM_ROAD_DESCRIPTION_LEGACY_CONSTRUCTOR_INPUT_FAULT | 0 | - |
| 0x5D002D | DEM_ERROR_EM_ROAD_DESCRIPTION_LEGACY_CONSTRUCTOR_LOGIC_FAULT | 0 | - |
| 0x5D0030 | ERROR_MODE | 0 | - |
| 0x5D0031 | ETHERNET_BUS_OFF | 0 | - |
| 0x5D0032 | XCP_E_RETRY_FAILED | 0 | - |
| 0x5D0033 | FLS_E_COMPARE_FAILED | 0 | - |
| 0x5D0034 | FLS_E_UNEXPECTED_FLASH_ID | 0 | - |
| 0x5D0035 | FEE_E_GC_INIT | 0 | - |
| 0x5D0036 | FEE_E_WRITE | 0 | - |
| 0x5D0037 | FEE_E_READ | 0 | - |
| 0x5D0038 | FEE_E_GC_READ | 0 | - |
| 0x5D0039 | FEE_E_GC_WRITE | 0 | - |
| 0x5D0040 | FEE_E_GC_ERASE | 0 | - |
| 0x5D0041 | FEE_E_INVALIDATE | 0 | - |
| 0x5D0042 | FEE_E_WRITE_CYCLES_EXHAUSTED | 0 | - |
| 0x5D0043 | FEE_E_GC_TRIG | 0 | - |
| 0x5D0044 | FEE_E_UNCONFIG_BLK_EXCEEDED | 0 | - |
| 0x5D0045 | MCU_E_ERAY_TIMEOUT | 0 | - |
| 0x5D0046 | ETH_E_ACCESS | 0 | - |
| 0x5D0047 | ETH_E_TIMEOUT | 0 | - |
| 0x5D0048 | ETH_E_FRAMESEQ | 0 | - |
| 0x5D0049 | ECUM_E_RAM_CHECK_FAILED | 0 | - |
| 0x5D0050 | FLS_E_ERASE_FAILED | 0 | - |
| 0x5D0051 | FLS_E_READ_FAILED | 0 | - |
| 0x5D0052 | FLS_E_WRITE_FAILED | 0 | - |
| 0x5D0053 | MCU_E_OSC_FAILURE | 0 | - |
| 0x5D0054 | MCU_E_CLOCK_FAILURE | 0 | - |
| 0x5D0060 | FCM_PWR_FAULTS | 0 | - |
| 0x5D0061 | FCM_EYEQ_FAULTS | 0 | - |
| 0x5D0062 | FCM_EYEQ_FAULTS_FE | 0 | - |
| 0x5D0063 | FCM_EYEQ_COMM_FAULTS_PHYS | 0 | - |
| 0x5D0064 | FCM_EYEQ_COMM_FAULTS_DG | 0 | - |
| 0x5D0065 | FCM_EYEQ_COMM_FAULTS_IPC | 0 | - |
| 0x5D0066 | FCM_NVM_FAULTS_G1 | 0 | - |
| 0x5D0067 | FCM_NVM_FAULTS_G2 | 0 | - |
| 0x5D0068 | FCM_SAFETY_FAULTS | 0 | - |
| 0x5D0069 | FCM_CALIB_FAULTS | 0 | - |
| 0x5D006A | FCM_HW_FAULTS | 0 | - |
| 0x5D006B | FCM_CONFIGURATION_FAULTS | 0 | - |
| 0x5D006C | FCM_BATT_FAULTS | 0 | - |
| 0x5D006D | FCM_EYEQ_CORE_DUMP_AVAILABLE | 0 | - |
| 0x5D011C | PROGRAM_FLOW_ERROR | 0 | - |
| 0x5D0122 | CANSM_E_BUS_OFF_2 | 0 | - |
| 0x5D0123 | CAN_E_TIMEOUT | 0 | - |
| 0x5D0125 | Windshield Heating Timeout Error | 0 | - |
| 0x5D0126 | HIL_MODE | 0 | - |
| 0x5D0131 | PAD: Timeout Error | 1 | - |
| 0x5D0132 | PAD: E2E Error | 1 | - |
| 0x5D0133 | PAD: Invalid Error | 1 | - |
| 0x5D0140 | Fehlerursache CCM PFGS Kategorie 1 | 1 | - |
| 0x5D0141 | Fehlerursache CCM PFGS Kategorie 2 | 1 | - |
| 0x5D0142 | Fehlerursache CCM PFGS Kategorie 3 | 1 | - |
| 0x5D0143 | Fehlerursache CCM PFGS | 1 | - |
| 0x5D0144 | Robustness Mode Active | 0 | - |
| 0x5D0145 | EXCEPTION_RESET_HOOK | 0 | - |
| 0x5D0146 | EXCEPTION_ERROR_HOOK | 0 | - |
| 0x5D0147 | Ethernet_Buffer_Error_Controller | 0 | - |
| 0x5D0148 | Ethernet_Buffer_Error_Stack | 0 | - |
| 0x5D0149 | Security - XCP Port wurde aktiviert | 0 | - |
| 0x800A00 | Eth_E_Rx_Frames_Lost | 0 | - |
| 0x800A01 | FLA_Misconfiguration | 0 | - |
| 0x800A6A | TEMPERATURE_SENSOR_FAILURE | 0 | - |
| 0x800A6B | Rel Calib misalignment FS active | 0 | - |
| 0x800A91 | DEV_XCP_URBAN_SAFETY_PARAM | 1 | - |
| 0x800A92 | OBJDET_CRC_ERROR | 0 | - |
| 0x800A93 | NVM_E_QUEUE_OVERFLOW | 0 | - |
| 0x800A94 | NVM_E_LOSS_OF_REDUNDANCY | 0 | - |
| 0x800A95 | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x800A96 | NVM_E_WRONG_BLOCK_ID | 0 | - |
| 0x800A97 | NVM_E_REQ_FAILED | 0 | - |
| 0x800A98 | NVM_E_WRITE_PROTECTED | 0 | - |
| 0x800A99 | NVM_E_VERIFY_FAILED | 0 | - |
| 0x800A9A | FCWAEB_CRC_ERROR | 0 | - |
| 0x800A9B | FCM_SECURITY_FAULTS | 1 | - |
| 0x800AB4 | Default Data Mode aktiv | 0 | - |
| 0x800AB5 | Inidcator that Engineering Trim Mode is active (Enables XCP trim value writing but disables MPU) | 1 | - |
| 0x805D30 | Fehler der Fahrzeug-Security | 0 | - |
| 0xE04601 | Ethernet: CRC Fehler | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | IoHwAbEvt_ADC_ConverterDiagErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0002 | IoHwAbEvt_ADC_MultiplexerDiagErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0003 | IoHwAbEvt_ADC_BrokenWireDiagErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0004 | EyeQEvt_IoHwAb_ERROUTOpenCktErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0005 | EyeQEvt_IoHwAb_ERROUTShortedtoGndErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0006 | EyeQEvt_IoHwAb_ERROUTShortedHighErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0007 | EyeQEvt_DG_CatalogIDInvalidErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0008 | EyeQEvt_EyeQMgr_ERROUTOverTempErr | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0009 | EyeQEvt_DG_MsgTimeOutErr | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x000A | EyeQEvt_IPC_FrmSeqErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x000B | EyeQEvt_DG_RSDDVerErr | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x000C | EyeQEvt_DG_RSDPDVerErr | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x000D | EyeQEvt_DG_RSDSVerErr | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x000E | EyeQEvt_EyeQMgr_EyeQResetErr | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x000F | EyeQEvt_EyeQMgr_EyeQOpModeTransErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0010 | UWB_TYPE_ROBUSTNESS_E2E | 0/1 | High | 0x01 | - | - | - | - |
| 0x0011 | UWB_TYPE_ROBUSTNESS_INV | 0/1 | High | 0x02 | - | - | - | - |
| 0x0012 | UWB_TYPE_ROBUSTNESS_TO | 0/1 | High | 0x04 | - | - | - | - |
| 0x0013 | LINK_RESET_STATUS_00 | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0014 | LINK_RESET_STATUS_01 | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0015 | LINK_RESET_STATUS_02 | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0016 | LINK_RESET_STATUS_03 | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0017 | LINK_RESET_STATUS_04 | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0018 | LINK_RESET_STATUS_05 | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0019 | LINK_RESET_STATUS_06 | 0/1 | High | 0x0040 | - | - | - | - |
| 0x001A | LINK_RESET_STATUS_07 | 0/1 | High | 0x0080 | - | - | - | - |
| 0x001B | LINK_RESET_STATUS_08 | 0/1 | High | 0x0100 | - | - | - | - |
| 0x001C | LINK_RESET_STATUS_09 | 0/1 | High | 0x0200 | - | - | - | - |
| 0x001D | LINK_RESET_STATUS_10 | 0/1 | High | 0x0400 | - | - | - | - |
| 0x001E | LINK_RESET_STATUS_11 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x001F | LINK_RESET_STATUS_12 | 0/1 | High | 0x1000 | - | - | - | - |
| 0x0020 | LINK_RESET_STATUS_13 | 0/1 | High | 0x2000 | - | - | - | - |
| 0x0021 | LINK_RESET_STATUS_14 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0022 | LINK_RESET_STATUS_15 | 0/1 | High | 0x8000 | - | - | - | - |
| 0x0023 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0024 | IoHwAbEvt_PwrMgr_VBATTErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0025 | reserved | 0/1 | High | 0xFFFFFFFE | - | - | - | - |
| 0x0026 | SecurityEvt_EyeQSBS_Authentication | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0027 | ErrSecurityEvt_MCUJTAGLock_LockErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0028 | No Safe State Alert | 0/1 | High | 0x01 | - | - | - | - |
| 0x0029 | Safe State Alert All | 0/1 | High | 0x02 | - | - | - | - |
| 0x002A | AEB Safe State Alert | 0/1 | High | 0x04 | - | - | - | - |
| 0x002B | PedestrianDetection Safe State Alert | 0/1 | High | 0x08 | - | - | - | - |
| 0x002C | Vehicle Detection Safe State Alert | 0/1 | High | 0x10 | - | - | - | - |
| 0x002D | reserved | 0/1 | High | 0xE0 | - | - | - | - |
| 0x002E | IoHwAbEvt_BoardRevInvalidErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x002F | IoHwAbEvt_ADC_InitTestErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0030 | IoHwAbEvt_Heater_OpenCircuitErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0031 | IoHwAbEvt_Heater_ShortCircuitErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0032 | EyeQEvt_ThermalDiag_EyeQThermistorErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0033 | EyeQEvt_ThermalDiag_MainImagerThermistorErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0034 | EyeQEvt_ThermalDiag_FishEyeImagerThermistorErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0035 | EyeQEvt_ThermalDiag_NarrowImagerThermistorErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0036 | EyeQEvt_ThermalDiag_DDRThermistorErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0037 | EyeQEvt_ThermalDiag_AurixThermistorErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0038 | reserved | 0/1 | High | 0xFFFE0000 | - | - | - | - |
| 0x0039 | EyeQEvt_DG_InvalidRegionCodeErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x003A | reserved | 0/1 | High | 0xFFFFFFFE | - | - | - | - |
| 0x003B | EyeQEvt_NvM_SPTACInitParamsCrcErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x003C | EyeQEvt_NvM_SPInitParamsMainCrcErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x003D | EyeQEvt_NvM_SPInitParamsFisheyeCrcErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x003E | EyeQEvt_NvM_SPInitParamsNarrowCrcErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x003F | EyeQEvt_NvM_InitCodingParamsCrcErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0040 | EyeQEvt_NvM_SPCalibrationCrcErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0041 | EyeQEvt_NvM_RegionCodePrimaryCrcErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0042 | EyeQEvt_NvM_DriveSidePrimaryCrcErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0043 | EyeQEvt_NvM_CameraFocusedCrcErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0044 | EyeQEvt_NvM_EndModelPartNumberCrcErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0045 | EyeQEvt_NvM_SerialNumberCrcErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0046 | EyeQEvt_NvM_EFLCrcErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0047 | EyeQEvt_NvM_SerialNumberPCBCrCErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0048 | EyeQEvt_NvM_JulianDateCrCErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0049 | EyeQEvt_NvM_LastFSDataRcdPrimaryCrCErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x004A | EyeQEvt_NvM_DriveSideSecondaryCrcErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x004B | EyeQEvt_NvM_LastFSDataRcdSecondaryCrCErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x004C | EyeQEvt_NvM_SetNextBootModeCrCErr | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x004D | EyeQEvt_NvM_SetNextManualExposureValCrCErr | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x004E | EyeQEvt_NvM_RegionCodeSecondaryCrcErr | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x004F | reserved | 0/1 | High | 0xFFF00000 | - | - | - | - |
| 0x0050 | EyeQEvt_DG_SafetyMsgInputCrcMismatchErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0051 | EyeQEvt_DG_SafetyMsgOldEgoDataLatErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0052 | EyeQEvt_DG_SafetyMsgCodeCrcErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0053 | EyeQEvt_DG_SafetyMsgFCVsigFFIErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0054 | EyeQEvt_DG_EyeQSafetyMsgCRCErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0055 | EyeQEvt_DG_SafetyMsgAEBSignalCrcErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0056 | EyeQEvt_DG_SafetyMsgIntrnlInptSigStorgCrptErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0057 | reserved | 0/1 | High | 0xFFFFFE00 | - | - | - | - |
| 0x0058 | EyeQEvt_DG_SafetyBit31AebParamFFIErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0059 | EyeQEvt_DG_SafetyBit32InSigCorrErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x005A | EyeQEvt_FS_SevereMisAlignYawTimoutErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x005B | EyeQEvt_FS_OutOfFocusErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x005C | EyeQEvt_FS_SevereMisAlignPitchTimeoutErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x005D | reserved | 0/1 | High | 0xFFFFFFE0 | - | - | - | - |
| 0x005E | EyeQEvt_EyeQMgr_SysVerifiReqErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x005F | EyeQEvt_EyeQMgr_SysVerifiReqTRWErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0060 | EyeQEvt_DG_IPCEyeQCommDeadErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0061 | reserved | 0/1 | High | 0xFFFFFFFE | - | - | - | - |
| 0x0062 | EyeQEvt_DG_BootDiagMsgMissingErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0063 | EyeQEvt_DG_VehicleMsgTimeoutErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0064 | EyeQEvt_DG_SyncFrmIndexErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0065 | EyeQEvt_DG_MissingMsgErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0066 | EyeQEvt_DG_AppMsgVerErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0067 | EyeQEvt_DG_CmnMsgVerErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0068 | EyeQEvt_DG_EgoMotionSigVerErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0069 | EyeQEvt_DG_ExtBootMsgVerErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x006A | EyeQEvt_DG_FCWAEBMsgVerErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x006B | EyeQEvt_DG_GFHBHdrVerErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x006C | EyeQEvt_DG_HPPMsgVerErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x006D | EyeQEvt_DG_LBHdrVerErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x006E | EyeQEvt_DG_LDWVerErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x006F | EyeQEvt_DG_OSMHdrVerErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0070 | EyeQEvt_DG_ODSMsgVerErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0071 | EyeQEvt_DG_RSPHdrVerErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0072 | EyeQEvt_DG_SafetyMsgVerErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0073 | EyeQEvt_DG_SFROmniVerErr | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0074 | EyeQEvt_DG_SPCSigVerErr | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0075 | EyeQEvt_DG_SPCalibVerErr | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0076 | EyeQEvt_DG_SPTACSigVerErr | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0077 | EyeQEvt_DG_SLSVerErr | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x0078 | EyeQEvt_DG_TFLHdrVerErr | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0079 | EyeQEvt_DG_TSRHdrVerErr | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x007A | EyeQEvt_DG_VLHdrVerErr | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x007B | reserved | 0/1 | High | 0xFC000000 | - | - | - | - |
| 0x007C | EyeQEvt_IPC_RxBuffOverrunErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x007D | EyeQEvt_IPC_UnRecgnzdFrmErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x007E | EyeQEvt_IPC_UnKnwnAppIDErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x007F | EyeQEvt_IPC_ConsFrmNotRcvdErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0080 | EyeQEvt_IPC_FrmCrcErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0081 | EyeQEvt_IPC_IncompleteMultiFrmErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0082 | EyeQEvt_IPC_ImproperFrmSizeErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0083 | EyeQEvt_IPCDRV_BuffersMisalignmentErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0084 | EyeQEvt_IPCDRV_PartialByteErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0085 | EyeQEvt_IPC_InvalidMESPHdrErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0086 | reserved | 0/1 | High | 0xFFFFF800 | - | - | - | - |
| 0x0087 | EyeQEvt_NvM_TagIDErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0088 | EyeQEvt_NvM_SingleBlckReadErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0089 | EyeQEvt_NvM_VehicleCalParamsCrcErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x008A | EyeQEvt_NvM_SPCCalibrationPrimaryCrcErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x008B | EyeQEvt_NvM_SPCCalibrationSecondaryCrcErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x008C | EyeQEvt_NvM_SPCCalProcCtrlParamsCrcErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x008D | EyeQEvt_NvM_AutoFixCalPrimaryCrcErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x008E | EyeQEvt_NvM_AutoFixCalSecondaryCrcErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x008F | EyeQEvt_NvM_SPTACCalibrationCrcErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0090 | EyeQEvt_NvM_TACCalibrationCrcErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0091 | EyeQEvt_NvM_EyeQDataStatisticsCrcErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x0092 | EyeQEvt_NvM_SFRInitParamsMainCrcErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x0093 | EyeQEvt_NvM_SFRInitParamsNarrowCrcErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x0094 | EyeQEvt_NvM_SFRInitParamsFishEyeCrcErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0095 | EyeQEvt_NvM_ThermalShutdownParamsCrcErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0096 | EyeQEvt_NvM_EyeQSysCfgCrcErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0097 | EyeQEvt_NvM_TAC2InitConfParamsCrcErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0098 | EyeQEvt_NvM_TACInitConfParamsCrcErr | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0099 | EyeQEvt_NvM_CamHwCalParamsCrcErr | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x009A | reserved | 0/1 | High | 0xFFF80000 | - | - | - | - |
| 0x009B | IoHwAbEvt_PwrMgr_1V0PwrErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x009C | IoHwAbEvt_PwrMgr_1V8DDRPwrErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x009D | IoHwAbEvt_PwrMgr_1V8PwrErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x009E | IoHwAbEvt_PwrMgr_ImagerPwrErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x009F | IoHwAbEvt_PwrMgr_3V3PwrErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x00A0 | IoHwAbEvt_PwrMgr_5V0PwrErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x00A1 | IoHwAbEvt_PwrMgr_1V1PwrErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x00A2 | IoHwAbEvt_PwrMgr_3V3MainPwrErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x00A3 | IoHwAbEvt_PwrMgr_3V3NarrowPwrErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x00A4 | IoHwAbEvt_PwrMgr_3V3FeyePwrErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x00A5 | reserved | 0/1 | High | 0xFFFFFC00 | - | - | - | - |
| 0x00A6 | EyeQEvt_DG_IPCMECompatibilityErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x00A7 | EyeQEvt_DG_IPCEyeQInitCalErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x00A8 | EyeQEvt_DG_EyeQStuckAtBISTErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x00A9 | EyeQEvt_DG_EyeQStuckAtPLLErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x00AA | EyeQEvt_DG_EyeQStuckAtPARITYErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x00AB | EyeQEvt_DG_DDRChipFailureErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x00AC | EyeQEvt_DG_FlashMemoryFailureErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x00AD | EyeQEvt_DG_AppDiag1VideoErrDMAprobErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x00AE | EyeQEvt_IPC_MespRspTimeoutErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x00AF | EyeQEvt_DG_ChallengeRepetitionErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x00B0 | EyeQEvt_DG_WrongChallengeResponseErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x00B1 | EyeQEvt_DG_MissingFirstChallengeResponseErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x00B2 | EyeQEvt_DG_FatalErrAppI2CVideoGrabFailErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x00B3 | reserved | 0/1 | High | 0xFF000000 | - | - | - | - |
| 0x00B4 | EyeQEvt_EyeQSUSD_DDRErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x00B5 | EyeQEvt_EyeQSUSD_SequenceErr | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x00B6 | EyeQEvt_EyeQSUSD_BISTErr | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x00B7 | EyeQEvt_EyeQSUSD_BootAuthenticationErr | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x00B8 | EyeQEvt_EyeQSUSD_DDRInitErr | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x00B9 | EyeQEvt_EyeQSUSD_AppAuthenticationErr | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x00BA | EyeQEvt_DG_FatalErrAppErr | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x00BB | EyeQEvt_DG_FatalErrAppFSErr | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x00BC | EyeQEvt_DG_FatalErrAppCalErr | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x00BD | EyeQEvt_DG_FatalErrAppInitFailErr | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x00BE | EyeQEvt_DG_FatalErrAppInitCameraInitErr | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x00BF | EyeQEvt_DG_FatalErrCamSelfResetErr | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x00C0 | EyeQEvt_DG_FatalErrAppPatternTestErr | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x00C1 | EyeQEvt_DG_FatalErrApplI2cTimeoutErr | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x00C2 | EyeQEvt_DG_FatalErrAppCamCCFT_CrcFailErr | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x00C3 | EyeQEvt_DG_FatalErrPLLCompErr | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x00C4 | EyeQEvt_DG_FatalErrPVGeneralErr | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x00C5 | EyeQEvt_DG_FatalErrPVverificationErr | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x00C6 | EyeQEvt_DG_FatalErrAppGVPUstateTerErr | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x00C7 | reserved | 0/1 | High | 0xFFFF8000 | - | - | - | - |
| 0x00C8 | EyeQEvt_EyeQMgr_ERROUTFatalErr | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x1700 | Kilometerstand | TEXT | High | 3 | - | - | - | - |
| 0x1701 | Systemzeit | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x4009 | EXCEPTION_SYMPTOM | 0-n | High | 0xFF | TAB_EXCEPTION_SYMPTOM | - | - | - |
| 0x400A | ERROR_MODE_REASON | 0-n | High | 0xFF | TAB_ERROR_MODE_REASON | - | - | - |
| 0x400B | ETHERNET_STATUS | 0-n | High | 0xFFFFFFFF | TAB_ETHERNET_STATUS | - | - | - |
| 0x400C | CODING_PARAMETER | 0-n | High | 0xFFFF | TAB_CODING_PARAMETER | - | - | - |
| 0x4015 | UWB_DAYTIME_INDICATOR | 0-n | High | 0xFF | TAB_DAY_TIME_INDICATOR | - | - | - |
| 0x4016 | UWB_TRIGGER_FAIL_SAFE_TYP | 0-n | High | 0xFF | TAB_FAILSAFE_TYP | - | - | - |
| 0x4017 | UWB_TRIGGER_FAIL_SAFE_SERVERITY | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4018 | UWB_WEATHER_INDICATOR | 0-n | High | 0xFF | TAB_WEATHER_INDICATOR | - | - | - |
| 0x4019 | UWB_TEMP_OUTSIDE | °C | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x401F | PROG_FLOW_ERR_TASK | 0-n | High | 0xFF | TAB_PROG_FLOW_ERR_TASK | - | - | - |
| 0x4021 | PROG_FLOW_ERR_INFO | 0-n | High | 0xFFFFFFFF | TAB_PROG_FLOW_ERR_INFO | - | - | - |
| 0x4028 | HEATER_TIME_ON | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4029 | HEATER_TIME_OFF | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x402A | HEATER_PWM | % | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x402B | HEATER_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x402C | NOTIFIER_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4030 | UWB_CALIB_TRW_FAILURE_CODE | 0-n | High | 0xFF | TAB_UWB_CALIB_TRW_FAILURE_CODE | - | - | - |
| 0x4031 | UWB_CALIB_DRIVEN_DISTANCE | m | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4032 | UWB_CALIB_PITCH_MAIN | ° | High | unsigned char | - | 1.0 | 10.0 | -10.0 |
| 0x4033 | UWB_CALIB_YAW_MAIN | ° | High | unsigned char | - | 1.0 | 10.0 | -10.0 |
| 0x4034 | UWB_CALIB_ROLL_MAIN | ° | High | unsigned char | - | 1.0 | 10.0 | -10.0 |
| 0x4035 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x403E | SESSION_IDENTIFIER | HEX | High | unsigned char | - | - | - | - |
| 0x4047 | TEMP_SENSOR_DDR_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4048 | TEMP_STATUS_VMP | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4049 | TEMP_STATUS_EYEQ_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x404A | TEMP_STATUS_IMG_DIE | 0-n | High | 0xFF | Temerature_EYEQ | - | - | - |
| 0x404B | TEMP_STATUS_AURIX_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x404C | TEMP_STATUS_PCB_EYEQ_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x404D | TEMP_STATUS_PCB_IMG | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x404F | UWB_ERROR_CODING_LOCATION | 0-n | High | 0xFF | TAB_UWB_Error_Coding_Location | - | - | - |
| 0x4050 | ERROR_ID_INPUT_EMELECTRONICHORIZON | HEX | High | unsigned char | - | - | - | - |
| 0x4051 | ERROR_DUMP_1_INPUT_EMELECTRONICHORIZON | HEX | High | unsigned long | - | - | - | - |
| 0x4052 | ERROR_DUMP_2_INPUT_EMELECTRONICHORIZON | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4053 | ERROR_ID_INPUT_GIVEWAYWARNER | HEX | High | unsigned char | - | - | - | - |
| 0x4054 | ERROR_DUMP_1_INPUT_GIVEWAYWARNER | HEX | High | unsigned long | - | - | - | - |
| 0x4055 | ERROR_DUMP_2_INPUT_GIVEWAYWARNER | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4056 | ERROR_ID_INPUT_TRAFFICSIGNFUSION | HEX | High | unsigned char | - | - | - | - |
| 0x4057 | ERROR_DUMP_1_INPUT_TRAFFICSIGNFUSION | HEX | High | unsigned long | - | - | - | - |
| 0x4058 | ERROR_DUMP_2_INPUT_TRAFFICSIGNFUSION | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4059 | ERROR_ID_INPUT_SLCONDITIONEVALUATOR | HEX | High | unsigned char | - | - | - | - |
| 0x405A | ERROR_DUMP_1_INPUT_SLCONDITIONEVALUATOR | HEX | High | unsigned long | - | - | - | - |
| 0x405B | ERROR_DUMP_2_INPUT_SLCONDITIONEVALUATOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x405C | ERROR_ID_INPUT_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned char | - | - | - | - |
| 0x405D | ERROR_DUMP_1_INPUT_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned long | - | - | - | - |
| 0x405E | ERROR_DUMP_2_INPUT_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4060 | UWB_REG_3_PHY_REVISION | HEX | High | unsigned int | - | - | - | - |
| 0x4061 | UWB_REG_17_EXTENDED_CONTROL | HEX | High | unsigned int | - | - | - | - |
| 0x4062 | UWB_REG_18_CONFIG_REG_1 | HEX | High | unsigned int | - | - | - | - |
| 0x4063 | UWB_REG_19_CONFIG_REG_2 | HEX | High | unsigned int | - | - | - | - |
| 0x4064 | UWB_REG_20_SYMBOL_ERR_CNT | HEX | High | unsigned int | - | - | - | - |
| 0x4065 | UWB_REG_21_INTERRUPT_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4066 | UWB_REG_23_COM_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4067 | UWB_REG_24_GEN_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4068 | UWB_REG_25_EXTENDED_STATUS | HEX | High | unsigned int | - | - | - | - |
| 0x4069 | UWB_REG_26_LINK_FAILURE_CNT | HEX | High | unsigned int | - | - | - | - |
| 0x406A | UWB_TRW_ETH_INFO | HEX | High | unsigned long | - | - | - | - |
| 0x4070 | ERROR_ID_LOGIC_EMELECTRONICHORIZON | HEX | High | unsigned char | - | - | - | - |
| 0x4071 | ERROR_DUMP_1_LOGIC_EMELECTRONICHORIZON | HEX | High | unsigned long | - | - | - | - |
| 0x4072 | ERROR_DUMP_2_LOGIC_EMELECTRONICHORIZON | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4073 | ERROR_ID_LOGIC_GIVEWAYWARNER | HEX | High | unsigned char | - | - | - | - |
| 0x4074 | ERROR_DUMP_1_LOGIC_GIVEWAYWARNER | HEX | High | unsigned long | - | - | - | - |
| 0x4075 | ERROR_DUMP_2_LOGIC_GIVEWAYWARNER | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4076 | ERROR_ID_LOGIC_TRAFFICSIGNFUSION | HEX | High | unsigned char | - | - | - | - |
| 0x4077 | ERROR_DUMP_1_LOGIC_TRAFFICSIGNFUSION | HEX | High | unsigned long | - | - | - | - |
| 0x4078 | ERROR_DUMP_2_LOGIC_TRAFFICSIGNFUSION | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4079 | ERROR_ID_LOGIC_SLCONDITIONEVALUATOR | HEX | High | unsigned char | - | - | - | - |
| 0x407A | ERROR_DUMP_1_LOGIC_SLCONDITIONEVALUATOR | HEX | High | unsigned long | - | - | - | - |
| 0x407B | ERROR_DUMP_2_LOGIC_SLCONDITIONEVALUATOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x407C | ERROR_ID_LOGIC_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned char | - | - | - | - |
| 0x407D | ERROR_DUMP_1_LOGIC_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | HEX | High | unsigned long | - | - | - | - |
| 0x407E | ERROR_DUMP_2_LOGIC_EMROADDESCRIPTIONLEGACYCONSTRUCTOR | - | High | motorola float | - | 1.0 | 1.0 | 0.0 |
| 0x4080 | Etherner_RX_Controller_POS | HEX | High | unsigned char | - | - | - | - |
| 0x4081 | Etherner_RX_Stack_POS | HEX | High | unsigned int | - | - | - | - |
| 0x4082 | Etherner_RX_Controller_COUNT | HEX | High | unsigned char | - | - | - | - |
| 0x4083 | Etherner_RX_Stack_COUNT | HEX | High | unsigned int | - | - | - | - |
| 0x4090 | UWB_DIAGNOSTIC_PORT_XCP | 0/1 | High | 0x01 | - | - | - | - |
| 0x4091 | UWB_DIAGNOSTIC_PORT_JTAG | 0/1 | High | 0x01 | - | - | - | - |
| 0x4093 | E2E_SERVICE_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4094 | E2E_NOTIFIER_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4095 | INVALID_SERVICE_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4096 | INVALID_NOTIFIER_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4097 | TIMEOUT_SERVICE_ID | HEX | High | unsigned int | - | - | - | - |
| 0x4098 | TIMEOUT_NOTIFIER_ID | HEX | High | unsigned int | - | - | - | - |
| 0x411A | EyeQ Coding Failed Reason | HEX | High | unsigned long | - | - | - | - |
| 0x41F0 | ADC_ERROR_REASON | 0-n | High | 0xFF | ADC_ERROR_REASON | - | - | - |
| 0x41F1 | ADC_ERROR_BROKEN_WIRE_1 | HEX | High | unsigned long | - | - | - | - |
| 0x41F2 | ADC_ERROR_BROKEN_WIRE_2 | HEX | High | unsigned long | - | - | - | - |
| 0x45A0 | UWB_HWEL_MAYOR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x45A1 | UWB_HWEL_MINOR | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x45A2 | UWB_HWEL_PATCH | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x45AA | UWB_AVAILABILITY_FCW_AEB_BRAKING | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45AB | UWB_NON_AVAILABILITY_REASON_FCW_AEB_BRAKING | HEX | High | unsigned long | - | - | - | - |
| 0x45AC | UWB_AVAILABILITY_FCW_AEB_WARNING | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45AD | UWB_NON_AVAILABILITY_REASON_FCW_AEB_WARNING | HEX | High | unsigned long | - | - | - | - |
| 0x45AE | UWB_SYSTEM_AVAILABILITIY_HLB | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45AF | UWB_NON_AVAILABILITIY_REASON_HLB | HEX | High | unsigned long | - | - | - | - |
| 0x45B0 | UWB_SYSTEM_AVAILABILITIY_RSP | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B1 | UWB_NON_AVAILABILITIY_REASON_RSP | HEX | High | unsigned long | - | - | - | - |
| 0x45B2 | UWB_SYSTEM_AVAILABILITIY_VLM | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B3 | UWB_NON_AVAILABILITIY_REASON_VLM | HEX | High | unsigned long | - | - | - | - |
| 0x45B4 | UWB_SYSTEM_AVAILABILITIY_LBD | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B5 | UWB_NON_AVAILABILTIY_REASON_LBD | HEX | High | unsigned long | - | - | - | - |
| 0x45B6 | UWB_SYSTEM_AVAILABILTIY_TLR_TFL | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B7 | UWB_NON_AVAILABILTIY_REASON_TLR_TFL | HEX | High | unsigned long | - | - | - | - |
| 0x45B8 | UWB_SYSTEM_AVAILABILTIY_TSR | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45B9 | UWB_NON_AVAILABILTIY_REASON_TSR | HEX | High | unsigned long | - | - | - | - |
| 0x45BA | UWB_SYSTEM_AVAILABILTIY_FREESPACE | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45BB | UWB_NON_AVAILABILTIY_REASON_FREESPACE | HEX | High | unsigned long | - | - | - | - |
| 0x45BC | UWB_SYSTEM_AVAILABILTIY_EGOMOTION | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45BD | UWB_NON_AVAILABILITY_REASON_EGOMOTION | HEX | High | unsigned long | - | - | - | - |
| 0x45BE | DTC_REASON | 0-n | High | 0xFF | TAB_DTC_REASON | - | - | - |
| 0x45BF | UWB_SYSTEM_AVAILABILITY_OD | 0-n | High | 0xFF | TAB_AVAILABILITY | - | - | - |
| 0x45C0 | UWB_NON_AVAILABILITY_REASON_OD | HEX | High | unsigned long | - | - | - | - |
| 0x45C1 | UWB_FSC_VFW | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45C2 | ST_UDP | HEX | High | unsigned char | - | - | - | - |
| 0x45C3 | ST_CENG_DRV | HEX | High | unsigned char | - | - | - | - |
| 0x45C4 | ST_ENERG_GEN | 0-n | High | 0xFF | TABELLE_ENTLASTUNG_GENERATOR | - | - | - |
| 0x45C5 | Urspruenglicher_DTC | HEX | High | unsigned long | - | - | - | - |
| 0x45C6 | UWB_FSC_LDW | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45C7 | UWB_FSC_SLI | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45C8 | UWB_FSC_CCM | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45C9 | UWB_FSC_WWA | 0-n | High | 0xFF | TAB_UWB_FSC_vorhanden | - | - | - |
| 0x45CA | NOTIFIER_SIGNAL_POSITION | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x45CB | INVALID_DETECTION_SOURCE | 0-n | High | 0xFF | TAB_INVALID_DETECTION_SOURCE | - | - | - |
| 0x45CC | TAB_UWB_FSC_FLA | HEX | High | unsigned char | - | - | - | - |
| 0x45CE | UWB_C_FLA_ON_OFF | 0-n | High | 0xFF | TAB_C_FLA_ON_OFF | - | - | - |
| 0x45CF | Event_ID_0x9531_Accelerator_Pedal | 0-n | High | 0xFF | TAB_UWB_NOTIFICATION_EVENT_ID_0x9531_ACCELERATOR_PEDAL | - | - | - |
| 0x45D0 | Transformer Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45D1 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45D2 | Event_ID_0x5536_AirConditioningSystem | 0-n | High | 0xFF | TAB_Event_ID_0x5536_AirConditioningSystem | - | - | - |
| 0x45D5 | Event_ID_0x3531_ControlAndStatus | 0-n | High | 0xFF | TAB_Event_ID_0x3531_ControlAndStatus | - | - | - |
| 0x45D8 | Event_ID_0x7531_DrivingVector | 0-n | High | 0xFF | TAB_Event_ID_0x7531_DrivingVector | - | - | - |
| 0x45D9 | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45DA | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45DB | Event_ID_0x1535_EnvironmentalInformation | 0-n | High | 0xFF | TAB_Event_ID_0x1535_EnvironmentalInformation | - | - | - |
| 0x45DE | Event_ID_0x5532_Light | 0-n | High | 0xFF | TAB_Event_ID_0x5532_Light | - | - | - |
| 0x45DF | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45E0 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45E1 | Event_ID_0xF13D_MainBeam2 | 0-n | High | 0xFF | TAB_Event_ID_0xF13D_MainBeam2 | - | - | - |
| 0x45E4 | Event_ID_0x7533_SpeedAcceleration | 0-n | High | 0xFF | TAB_Event_ID_0x7533_SpeedAcceleration | - | - | - |
| 0x45E5 | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45E6 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45E7 | Event_ID_0x7532_SteeringAngle | 0-n | High | 0xFF | TAB_Event_ID_0x7532_SteeringAngle | - | - | - |
| 0x45E8 | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45E9 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45EA | Event_ID_0x7530_VehicleModel | 0-n | High | 0xFF | TAB_Event_ID_0x7530_VehicleModel | - | - | - |
| 0x45EB | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45EC | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45ED | Event_ID_0x7534_VehicleStabilizationManagement | 0-n | High | 0xFF | TAB_Event_ID_0x7534_VehicleStabilizationManagement | - | - | - |
| 0x45EE | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45EF | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45F0 | Event_ID_0x7536_WheelTorqueECBA | 0-n | High | 0xFF | TAB_Event_ID_0x7536_WheelTorqueECBA | - | - | - |
| 0x45F3 | Event_ID_0x1531_VehicleCondition | 0-n | High | 0xFF | TAB_Event_ID_0x1531_VehicleCondition | - | - | - |
| 0x45F4 | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45F5 | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45F6 | Event_ID_0x1536_VehicleInformation | 0-n | High | 0xFF | Event_ID_0x1536_VehicleInformation | - | - | - |
| 0x45F9 | Event_ID_0x3538_DriverAssistanceComfortAndSecurity | 0-n | High | 0xFF | TAB_Event_ID_0x3538_DriverAssistanceComfortAndSecurity | - | - | - |
| 0x45FA | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x45FB | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x45FC | Event_ID_0x5531_Wiper | 0-n | High | 0xFF | TAB_Event_ID_0x5531_Wiper | - | - | - |
| 0x4600 | TEMP_STATUS_AURIX_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4601 | TEMP_STATUS_DDR_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4602 | TEMP_STATUS_MAIN_IMG_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4603 | TEMP_STATUS_NARROW_IMG_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4604 | TEMP_STATUS_FISHEYE_IMG_PCB | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4605 | TEMP_STATUS_MAIN_IMG_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4606 | TEMP_STATUS_NARROW_IMG_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4607 | TEMP_STATUS_FISHEYE_IMG_DIE | 0-n | High | 0xFF | Temperature_EYEQ | - | - | - |
| 0x4609 | Event_ID_0xB50E_FASuS | 0-n | High | 0xFF | TAB_Event_ID_0xB50E_FASuS | - | - | - |
| 0x460A | Transformer_Status | 0-n | High | 0xFF | TAB_Transformer_Status | - | - | - |
| 0x460B | Transformer_Value | 0-n | High | 0xFF | TAB_UWB_Transformer_Value | - | - | - |
| 0x460C | Event_ID_0x1506_StatusEnergy | 0-n | High | 0xFF | TAB_Event_ID_0x1506_StatusEnergy | - | - | - |
| 0x460D | ETH_BUFFER_ERROR_ID | HEX | High | unsigned char | - | - | - | - |
| 0x460E | ETH_BUFFER_VALUE | HEX | High | unsigned long | - | - | - | - |
| 0x4610 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4611 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4612 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4613 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4614 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4615 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4616 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4617 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4618 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4619 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461A | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461B | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461C | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461D | SystemStatusInfo | 0-n | High | 0xFF | TAB_SystemStatusInfo | - | - | - |
| 0x461E | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x461F | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4E46 | Error_Reason_pFGS_CCM | 0-n | High | 0xFF | TAB_Error_Reason_pFGS_CCM | - | - | - |
| 0x6000 | EXCEPTION_DEBUG_REGISTER_0 | HEX | High | unsigned long | - | - | - | - |
| 0x6001 | EXCEPTION_DEBUG_REGISTER_1 | HEX | High | unsigned long | - | - | - | - |
| 0x6002 | EXCEPTION_DEBUG_REGISTER_2 | HEX | High | unsigned long | - | - | - | - |
| 0x6003 | EXCEPTION_DEBUG_REGISTER_3 | HEX | High | unsigned long | - | - | - | - |
| 0x6004 | EXCEPTION_DEBUG_REGISTER_4 | HEX | High | unsigned long | - | - | - | - |
| 0x6005 | EXCEPTION_DEBUG_REGISTER_5 | HEX | High | unsigned long | - | - | - | - |
| 0x6F00 | Vehicle State | 0-n | Low | 0xFF | TAB_ST_CON_VEH | - | - | - |
| 0x6F02 | ECU Vbat | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6F03 | ECU Temp | °C | High | unsigned char | - | 1.0 | 1.0 | -50.0 |
| 0x6F07 | VehicleSpeed | km/h | High | unsigned int | - | 0.1 | 1.0 | -100.0 |
| 0x6F09 | SystemCycleCounter | count | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6FFB | UWB_STATUS_KAFAS_SYSTEM_STATE | 0-n | High | 0xFF | UWB_STATUS_KAFAS_SYSTEM_STATE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### LUFTSPIELREDUKTION

| WERT | TEXT |
| --- | --- |
| 0x1 | keine Luftspielreduktion der Bremsanlage |
| 0x2 | Luftspielreduktion der Bremsanlage angefordert |
| 0x3 | Signal ungültig |

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

### RES_0X1047_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OUI_DATA | + | - | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | 24 Bit OUI des PHYs. Die restlichen Bits sind auf 0 zu setzen. |
| STAT_MMN_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die 6 Bit lange MMN des Phys. Die übrigen Bits sollen auf 0 gesetzt werden. |
| STAT_REVISION_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 4 Bit lange Revisionsnummer des PHY. Die übrigen Bits sollen mit 0 belegt werden. |

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
| STAT_DYAWMAINCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Yaw Autofix Main |
| STAT_DPITCHMAINCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Pitch Autofix Main |
| STAT_DROLLMAINCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Roll Autofix Main |
| STAT_DYAWNARROWCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Yaw Autofix Narrow |
| STAT_DPITCHNARROWCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Pitch Autofix Narrow |
| STAT_DROLLNARROWCAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Roll Autofix Narrow |
| STAT_DYAWFISHEYECAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Yaw Autofix Fisheye |
| STAT_DPITCHFISHEYECAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Pitch Autofix Fisheye |
| STAT_DROLLFISHEYECAM_AUTOFIX_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Roll Autofix Fisheye |

### RES_0X4002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DX_MAIN_CAM_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | DX Main Coding |
| STAT_DY_MAIN_CAM_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | DY Main Coding |
| STAT_DZ_MAIN_CAM_WERT | m | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | DZ Main Camera Height SPC |
| STAT_YAW_MAIN_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Yaw Main SPC |
| STAT_PITCH_MAIN_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Pitch Main SPC |
| STAT_ROLL_MAIN_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Roll Main SPC |
| STAT_YAW_NARROW_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Yaw Narrow SPC |
| STAT_PITCH_NARROW_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Pitch Narrow SPC |
| STAT_ROLL_NARROW_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Roll Narrow SPC |
| STAT_YAW_FISHEYE_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Yaw Fisheye SPC |
| STAT_PITCH_FISHEYE_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Pitch Fisheye SPC |
| STAT_ROLL_FISHEYE_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Roll Fisheye SPC |

### RES_0X4003_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPC_MAIN | 0-n | high | unsigned char | - | TAB_SPC_STATUS | - | - | - | Status |
| STAT_SPC_MAIN_PROG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Progress |
| STAT_SPC_MAIN_DRIVINGDISTANCE_WERT | m | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Driving Distance  |
| STAT_SPC_MAIN_ELAPSEDTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Elapsed Time |

### RES_0X4004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAY_TIME_INDICATOR | 0-n | high | unsigned char | - | TAB_DAY_TIME_INDICATOR | - | - | - | Gibt den aktuell detektierten Lichtverhältnisse an (Tag,Nacht,Dämmerung) |
| STAT_SERV_FULL_BLOCKAGE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_PARTIAL_BLOCKAGE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_LOW_SUN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_SUN_RAY_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_BLURRED_IMAGE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_SPLASHES_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_FOGGY_LIGHTS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_HALOS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_SMEARED_SPOTS_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_SELF_GLARE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_OOF_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |
| STAT_SERV_RAIN_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Severity zum Failsafe/Schlechtwetter zurück. |
| STAT_SERV_SNOW_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Severity zum Failsafe/Schlechtwetter zurück. |
| STAT_SERV_FOG_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Severity zum Failsafe/Schlechtwetter zurück. |
| STAT_SERV_FROZEN_WINDSHIELD_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die jeweilige Serverity zum Failsafe zurück. Wenn 0, dann ist dieser Failsafe nicht gesetzt ! |

### RES_0X4005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRINCIPAL_POINT_MAIN_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Translation to Main X |
| STAT_PRINCIPAL_POINT_MAIN_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Translation to Main Y  |
| STAT_PRINCIPAL_POINT_NARROW_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Translation to Narrow X |
| STAT_PRINCIPAL_POINT_NARROW_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Translation to Narrow Y |
| STAT_PRINCIPAL_POINT_FISHEYE_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Translation to Fisheye Y |
| STAT_PRINCIPAL_POINT_FISHEYE_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Translation to Fisheye Z |

### RES_0X4006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CENTRE_OF_DISTORTION_X_MAIN_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Center Of Distortion X Main |
| STAT_CENTRE_OF_DISTORTION_Y_MAIN_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Center Of Distortion Y Main |
| STAT_DISTORTION_COEFF_K1_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K1 Main |
| STAT_DISTORTION_COEFF_K2_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K2 Main |
| STAT_DISTORTION_COEFF_K3_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K3 Main |
| STAT_FOCAL_LENGTH_MAIN_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Focal Length Main |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CENTRE_OF_DISTORTION_X_FISHEYE_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Center Of Distortion X Fisheye |
| STAT_CENTRE_OF_DISTORTION_Y_FISHEYE_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Center Of Distortion Y Fisheye |
| STAT_DISTORTION_COEFF_K1_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K1 Fisheye |
| STAT_DISTORTION_COEFF_K2_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K2 Fisheye |
| STAT_DISTORTION_COEFF_K3_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K3 Fisheye |
| STAT_FOCAL_LENGTH_FISHEYE_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Focal Length Fisheye |
| STAT_DPITCH_FISHEYE_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Delta Pitch Fisheye Relative To Main |
| STAT_DYAW_FISHEYE_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Delta Yaw Fisheye Relative To Main |
| STAT_DROLL_FISHEYE_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Delta Roll Fisheye Relative To Main |
| STAT_DISTORTION_COEFF_K4_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K4 Fisheye |
| STAT_DISTORTION_COEFF_K5_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K5 Fisheye |
| STAT_DISTORTION_COEFF_K6_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K6 Fisheye |
| STAT_DISTORTION_COEFF_K7_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K7 Fisheye |
| STAT_DISTORTION_COEFF_K8_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K8 Fisheye |
| STAT_DISTORTION_COEFF_K9_FISHEYE_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K9 Fisheye |

### RES_0X4008_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CENTRE_OF_DISTORTION_X_NARROW_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Center Of Distortion X Narrow |
| STAT_CENTRE_OF_DISTORTION_Y_NARROW_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Center Of Distortion Y Narrow |
| STAT_DISTORTION_COEFF_K1_NARROW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K1 Narrow |
| STAT_DISTORTION_COEFF_K2_NARROW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K2 Narrow |
| STAT_DISTORTION_COEFF_K3_NARROW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Distortion Coefficient K3 Narrow |
| STAT_FOCAL_LENGTH_NARROW_WERT | Pixel | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Focal Length Narrow |
| STAT_DPITCH_NARROW_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Delta Pitch Narrow Relative To Main |
| STAT_DYAW_NARROW_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Delta Yaw Narrow Relative To Main |
| STAT_DROLL_NARROW_TO_MAIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Delta Roll Narrow Relative To Main |

### RES_0X400D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUALIFIER_CCM | 0-n | high | unsigned char | - | CODE_QU_FN_CCM_PPP | - | - | - | Gibt den Wert der Funktionsverfügbarkeit für CCM wider. |
| STAT_QUALIFIER_PPP | 0-n | high | unsigned char | - | CODE_QU_FN_CCM_PPP | - | - | - | Gibt den Wert der Funktionsverfügbarkeit für PPP wider. |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VALUE0 | 0-n | high | unsigned int | - | - | - | - | - | VALUE0 |
| STAT_VALUE1 | 0-n | high | unsigned int | - | - | - | - | - | value1 |
| STAT_VALUE2 | 0-n | high | unsigned int | - | - | - | - | - | value2 |
| STAT_VALUE3 | 0-n | high | unsigned int | - | - | - | - | - | value3 |

### RES_0X400F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGSTORE1 | 0-n | high | unsigned int | - | - | - | - | - | REGSTORE1 |
| STAT_REGSTORE2 | 0-n | high | unsigned int | - | - | - | - | - | REGSTORE2 |
| STAT_REGSTORE3 | 0-n | high | unsigned int | - | - | - | - | - | REGSTORE3 |
| STAT_REGSTORE4 | 0-n | high | unsigned int | - | - | - | - | - | REGSTORE4 |
| STAT_REGSTORE5 | 0-n | high | unsigned int | - | - | - | - | - | REGSTORE5 |

### RES_0X40A2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_EXECUTION_DURATION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Letzte Ausführungsdauer |
| STAT_NUMBER_OF_EXECUTIONS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ausführungen |
| STAT_NUMBER_OF_INPUTFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Eingangsfehler |
| STAT_NUMBER_OF_LOGICFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Logikfehler |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversion |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversion |
| STAT_FIX_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fixversion |
| STAT_CALCULATION_ERROR | 0/1 | high | signed char | - | - | - | - | - | Berechnungsfehler  0 = False  1 = True |
| STAT_INPUT_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | Eingangsdaten empfangen  0 = False  1 = True |
| STAT_VALID_INPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | Eingangsdaten gültig |
| STAT_VALID_OUTPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | Ausgangsdaten gültig |
| STAT_CODING_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | Codierdaten empfangen  0 = False  1 = True |
| STAT_CODING_DATA_VALID | 0/1 | high | signed char | - | - | - | - | - | Codierdaten gültig  0 = False  1 = True |

### RES_0X40A4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_EXECUTION_DURATION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Letzte Ausführungsdauer |
| STAT_NUMBER_OF_EXECUTIONS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ausführungen |
| STAT_NUMBER_OF_INPUTFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Eingangsfehler |
| STAT_NUMBER_OF_LOGICFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Logikfehler |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversion |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversion |
| STAT_FIX_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fixversion |
| STAT_CALCULATION_ERROR | 0/1 | high | signed char | - | - | - | - | - | Berechnungsfehler  0 = False  1 = True |
| STAT_INPUT_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | Eingangsdaten empfangen  0 = False  1 = True |
| STAT_VALID_INPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | Eingangsdaten gültig |
| STAT_VALID_OUTPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | Ausgangsdaten gültig |
| STAT_CODING_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | Codierdaten empfangen  0 = False  1 = True |
| STAT_CODING_DATA_VALID | 0/1 | high | signed char | - | - | - | - | - | Codierdaten gültig  0 = False  1 = True |

### RES_0X40A5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LAST_EXECUTION_DURATION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Letzte Ausführungsdauer |
| STAT_NUMBER_OF_EXECUTIONS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Ausführungen |
| STAT_NUMBER_OF_INPUTFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Eingangsfehler |
| STAT_NUMBER_OF_LOGICFAULTS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Logikfehler |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hauptversion |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Unterversion |
| STAT_FIX_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fixversion |
| STAT_CALCULATION_ERROR | 0/1 | high | signed char | - | - | - | - | - | Berechnungsfehler  0 = False  1 = True |
| STAT_INPUT_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | Eingangsdaten empfangen  0 = False  1 = True |
| STAT_VALID_INPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | Eingangsdaten gültig |
| STAT_VALID_OUTPUT_DATA | 0-n | high | unsigned char | - | TAB_UFM_DATA | - | - | - | Ausgangsdaten gültig |
| STAT_CODING_DATA_RECEIVED | 0/1 | high | signed char | - | - | - | - | - | Codierdaten empfangen  0 = False  1 = True |
| STAT_CODING_DATA_VALID | 0/1 | high | signed char | - | - | - | - | - | Codierdaten gültig  0 = False  1 = True |

### RES_0X40D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERIALNUMBER_DATA | DATA | high | data[23] | - | - | 1.0 | 1.0 | 0.0 | 23 Bytes (Digits) Serial Number |

### RES_0X40D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VBATT_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | VBATT |
| STAT_SUPPLY_1V0_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SUPPLY_1V0 |
| STAT_SUPPLY_1V8_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SUPPLY_1V8 |
| STAT_SUPPLY_1V8_DDR_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SUPPLY_1V8_DDR |
| STAT_SUPPLY_3V3_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SUPPLY_3V3 |
| STAT_SENSE_HEATER_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SENSE_HEATER |
| STAT_SUPPLY_5V0_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SUPPLY_5V0 |
| STAT_SUPPLY_1V5_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | SUPPLY_1V5 |
| STAT_MAINCAM_3V3_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | MAINCAM_3V3 |
| STAT_NARROWCAM_3V3_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | NARROWCAM_3V3 |
| STAT_FISHEYECAM_3V3_WERT | V | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | FISHEYECAM_3v3 |

### RES_0X411B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRODUCTIONINTRINSICFISHEYE_DATA | DATA | high | data[100] | - | - | 1.0 | 1.0 | 0.0 | ProductionIntrinsicFisheye output |

### RES_0X411C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRODUCTIONINTRINSICMAIN_DATA | DATA | high | data[40] | - | - | 1.0 | 1.0 | 0.0 | ProductionIntrinsicMain output |

### RES_0X411D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRODUCTIONINTRINSICNARROW_DATA | DATA | high | data[52] | - | - | 1.0 | 1.0 | 0.0 | ProductionIntrinsicNarrow output |

### RES_0X41F3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MCU_INIT_COMPLETE | 0-n | high | unsigned char | - | TAB_STAT_MCU_INIT_COMPLETE | - | - | - | MCU init complete |
| STAT_EYEQ_INIT_COMPLETE | 0-n | high | unsigned char | - | TAB_STAT_EYEQ_INIT_COMPLETE | - | - | - | EyeQ init complete |
| STAT_TARGET_BOOT_UP_MODE | 0-n | high | unsigned char | - | TAB_STAT_TARGET_BOOT_UP_MODE | - | - | - | Target boot up mode |
| STAT_TARGET_MANUAL_EXPOSURE_VALUE_WERT | HEX | high | unsigned int | - | - | - | - | - | Target manual exposure value |

### RES_0X6FFC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BYTES_PER_SECOND_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | bytes per second |
| STAT_TOTAL_BYTES_WERT | Byte | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | total bytes |

### RES_0X6FFD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BYTE_PER_SECOND_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | bytes per second |
| STAT_TOTAL_BYTES_WERT | Byte | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | total bytes |

### RES_0X6FFE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TX_PACKAGES | 0-n | high | unsigned int | - | - | - | - | - | amount of queued mac tx packages  |
| STAT_RX_PACKAGES | 0-n | high | unsigned int | - | - | - | - | - | amount of queued rx mac packages |

### RES_0X6FFF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TX_PACKAGES | 0-n | high | unsigned int | - | - | - | - | - | Amount of lost TX Packages |
| STAT_RX_PACKAGES | 0-n | high | unsigned int | - | - | - | - | - | Amount of lost RX packages |

### RES_0XD341_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLA_ENTGEGENKOMMENDES_FAHRZEUG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob ein entgegenkommendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_VORAUSFAHRENDES_FAHRZEUG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob ein vorausfahrendes Fahrzeug erkannt worden ist:  0 = kein Fahrzeug erkannt,  1 = Fahrzeug erkannt |
| STAT_FLA_GESCHWINDIGKEITSLIMIT | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob die Geschwindigkeit unterhalb der Grenze erkannt worden ist:  0 = Geschwindigkeit oberhalb der Schwelle, Fernlicht wird eingeschaltet,  1 = Geschwindigkeit unterhalb der Schwelle, Fernlicht wird abgeschaltet |
| STAT_FLA_UMGEBUNGSHELLIGKEIT | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob Umgebungshelligkeit (Tag) erkannt worden ist:  0 = kein Helligkeit (Nacht) erkannt,  1 = Helligkeit (Tag) erkannt |
| STAT_FLA_ORTSCHAFTSERKENNUNG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob eine ausreichende Beleuchtung erkannt worden ist:  0 = keine ausreichende Beleuchtung erkannt,  1 = ausreichende Beleuchtung erkannt |
| STAT_FLA_NEBELERKENNUNG | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob Nebel erkannt worden ist:  0 = kein Nebel,  1 = Nebel erkannt |
| STAT_FLA_AUTOBAHNMODE | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob Autobahn erkannt worden ist:  0 = keine Autobahn,  1 = Autobahn erkannt |
| STAT_FLA_VERZOEGERUNGSZEIT | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob wegen einer Zeiterzögerung das Fernlicht nicht eingeschaltet wird:  0 = keine Zeitverzögerung,  1 = Zeitverzögerung |
| STAT_FLA_TUNNEL | 0/1 | high | unsigned char | - | - | - | - | - | Gibt aus, ob Tunnel erkannt worden ist: 0 = kein Tunnel erkannt 1 = Tunnel erkannt |
| STAT_FLA_BLOCKAGE | 0/1 | high | unsigned char | - | - | - | - | - | Gibt aus, ob eine Verschmutzung der Kamera erkannt worden ist:  0 = Verschmutzung nicht erkannt 1 = Verschmutzung erkannt |
| STAT_FLA_FAHRZEUGRICHTUNG | 0/1 | high | unsigned char | - | - | - | - | - | Gibt die erkannte Verkehrsrichtung aus:  0 = Rechtslenkerverkehr 1 = Linkslenkerverkehr |
| STAT_FLA_FAILSAFE | 0/1 | high | unsigned char | - | - | - | - | - | Gibt aus, ob sich die Kamera im Fail Save Mode befindet: 0 = normal mode, 1 = fail safe mode |

### RES_0XD374_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENABLE_CODE_LDW | 0-n | high | unsigned char | - | TAB_Status_Enabling_Code | - | - | - | STAT_ENABLE_CODE_LDW |
| STAT_ENABLE_CODE_SLI | 0-n | high | unsigned char | - | TAB_Status_Enabling_Code | - | - | - | STAT_ENABLE_CODE_SLI |
| STAT_ENABLE_CODE_CCM | 0-n | high | unsigned char | - | TAB_Status_Enabling_Code | - | - | - | STAT_ENABLE_CODE_CCM |
| STAT_ENABLE_CODE_WWA | 0-n | high | unsigned char | - | TAB_Status_Enabling_Code | - | - | - | STAT_ENABLE_CODE_WWA |
| STAT_ENABLE_CODE_VFW | 0-n | high | unsigned char | - | TAB_Status_Enabling_Code | - | - | - | STAT_ENABLE_CODE_VFW |

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
| STAT_DEFAULT_ZERO_WERT | HEX | high | unsigned int | - | - | - | - | - | Wird defaultmäßig mit 00 00 befüllt um für RDBI und WDBI bei 0xD3CD die gleiche Data Length zu erhalten. |

### RES_0XD6BC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAB_KALIB | 0-n | high | unsigned char | - | TAB_KALIB_STATUS | - | - | - | Satus der Kalibrierung |
| STAT_KALIB_FORTSCHRITT_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fortschritt der Initialkalibrierung |

### RES_0XE46F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIGHT_DELTA_FRONT_AXLE | 0-n | high | unsigned char | - | TAB_CALIB_DELTA_HEIGHT | - | - | - | Changed height at the vehicle front axle |
| STAT_HEIGHT_DELTA_REAR_AXLE | 0-n | high | unsigned char | - | TAB_CALIB_DELTA_HEIGHT | - | - | - | Changed Height at the vehicle rear axle. |
| STAT_RESULTING_HEIGHT_DELTA_CAMERA | 0-n | high | unsigned char | - | TAB_CALIB_DELTA_HEIGHT | - | - | - | Hands back the calculated and resulting delta height at the camera position. |

### RES_0XE470_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DTC_1_FULL_BLOCKAGE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: full blockage |
| STAT_DTC_1_PARTIAL_BLOCK_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: partial blockage |
| STAT_DTC_1_LOW_SUN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: low sun |
| STAT_DTC_1_SUN_RAY_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: sun ray |
| STAT_DTC_1_BLURRED_IMAGE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: blurred image |
| STAT_DTC_1_SPLASHES_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: splashes |
| STAT_DTC_1_FOGGY_LIGHTS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: foggy lights |
| STAT_DTC_1_HALOS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: halos |
| STAT_DTC_1_SMEARED_SPOT_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: smeared spots |
| STAT_DTC_1_SELF_GLARE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: self glare |
| STAT_DTC_1_OOF_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: out of focus |
| STAT_DTC_1_FROZEN_WINDSHIELD_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: frozen windshield |
| STAT_DTC_1_RAIN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: rain |
| STAT_DTC_1_SNOW_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: snow |
| STAT_DTC_1_FOG_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: fog |
| STAT_DTC_1_OOC_YAW_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: out of calibration - yaw |
| STAT_DTC_1_OOC_HORIZON_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: out of calibration - horizon |
| STAT_DTC_1_CALI_MISALIGNMENT_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld temp gestört) aufgrund Failsafe: calibration misalignment |
| STAT_DTC_2_FULL_BLOCKAGE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: full blockage |
| STAT_DTC_2_PARTIAL_BLOCK_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: partial blockage |
| STAT_DTC_2_LOW_SUN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: low sun |
| STAT_DTC_2_SUN_RAY_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: sun ray |
| STAT_DTC_2_BLURRED_IMAGE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: blurred image |
| STAT_DTC_2_SPLASHES_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: splashes |
| STAT_DTC_2_FOGGY_LIGHTS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: foggy lights |
| STAT_DTC_2_HALOS_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: halos |
| STAT_DTC_2_SMEARED_SPOT_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: smeared spots |
| STAT_DTC_2_SELF_GLARE_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: self glare |
| STAT_DTC_2_OOF_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: out of focus |
| STAT_DTC_2_FROZEN_WINDSHIELD_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: frozen windshield |
| STAT_DTC_2_RAIN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: rain |
| STAT_DTC_2_SNOW_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: snow |
| STAT_DTC_2_FOG_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: fog |
| STAT_DTC_2_OOC_YAW_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: out of calibration - yaw |
| STAT_DTC_2_OOC_HORIZON_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: out of calibration - horizon |
| STAT_DTC_2_CALI_MISALIGNMENT_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl DTCs (Kamerasichtfeld dauerhaft gestört) aufgrund Failsafe: calibration misalignment |

### RES_0XE472_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_FREE_VIEW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher kein Failsafe detektiert wurde. |
| STAT_TIME_FULL_BLOCKAGE_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_FULL_BLOCKAGE_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_FULL_BLOCKAGE_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_PARTIAL_BLOCKAGE_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_PARTIAL_BLOCKAGE_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_PARTIAL_BLOCKAGE_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_LOW_SUN_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_LOW_SUN_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_LOW_SUN_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SUN_RAY_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SUN_RAY_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SUN_RAY_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_BLURRED_IMAGE_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_BLURRED_IMAGE_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_BLURRED_IMAGE_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SPLASHES_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SPLASHES_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SPLASHES_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_FOGGY_LIGHTS_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_FOGGY_LIGHTS_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_FOGGY_LIGHTS_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_HALOS_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_HALOS_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_HALOS_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SMEARED_SPOT_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SMEARED_SPOT_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SMEARED_SPOT_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SELF_GLARE_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SELF_GLARE_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_SELF_GLARE_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_OOF_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_OOF_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_OOF_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_RAIN_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher die angegebene Wetterbedingung + Serverity anlag. |
| STAT_TIME_RAIN_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher die angegebene Wetterbedingung + Serverity anlag. |
| STAT_TIME_RAIN_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher die angegebene Wetterbedingung + Serverity anlag. |
| STAT_TIME_SNOW_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher die angegebene Wetterbedingung + Serverity anlag. |
| STAT_TIME_SNOW_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher die angegebene Wetterbedingung + Serverity anlag. |
| STAT_TIME_SNOW_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher die angegebene Wetterbedingung + Serverity anlag. |
| STAT_TIME_FOG_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher die angegebene Wetterbedingung + Serverity anlag. |
| STAT_TIME_FOG_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher die angegebene Wetterbedingung + Serverity anlag. |
| STAT_TIME_FOG_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher die angegebene Wetterbedingung + Serverity anlag. |
| STAT_TIME_FROZEN_WINDSHIELD_LOW_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_FROZEN_WINDSHIELD_MID_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |
| STAT_TIME_FROZEN_WINDSHIELD_HIGH_WERT | s | high | unsigned long | - | - | 5.0 | 1.0 | 0.0 | Kumulierte persistente Zeit in welcher der angegebene Failsafe + Serverity (LOW,MID,HIGH) anlag. |

### RES_0XE474_D

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

### RES_0XE476_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LBD_DRIV_TOTAL_ACT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktiviertem Lane Boundary Detection Algorithmus. |
| STAT_LBD_DRIV_LEFT_EGO_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken Ego-Fahrstreifenbegrenzung. |
| STAT_LBD_DRIV_RIGHT_EGO_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger rechten Ego-Fahrstreifenbegrenzung. |
| STAT_LBD_DRIV_LEFT_ADJACENT_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken Nachbarfahrstreifenbegrenzung. |
| STAT_LBD_DRIV_RIGHT_ADJACENT_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger rechten Nachbarfahrstreifenbegrenzung. |
| STAT_LBD_DRIV_LEFT_OR_RIGHT_EGO_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken oder rechten Ego-Fahrstreifenbegrenzung. |
| STAT_LBD_DRIV_LEFT_AND_RIGHT_EGO_AVAIL_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken und rechten Ego-Fahrstreifenbegrenzung. |
| STAT_LBD_DRIV_LEFT_OR_RIGHT_EGO_AVAIL_LESS_EQUAL_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken oder rechten Ego-Fahrstreifenbegrenzung im Geschwindigkeitsbereich 0-70 km/h. |
| STAT_LBD_DRIV_LEFT_AND_RIGHT_EGO_AVAIL_LESS_EQUAL_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken und rechten Ego-Fahrstreifenbegrenzung im Geschwindigkeitsbereich 0-70 km/h. |
| STAT_LBD_DRIV_LEFT_OR_RIGHT_EGO_GREATER_THAN_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken oder rechten Ego-Fahrstreifenbegrenzung im Geschwindigkeitsbereich größer 70 km/h. |
| STAT_LBD_DRIV_LEFT_AND_RIGHT_EGO_GREATER_THAN_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit gültiger linken und rechten Ego-Fahrstreifenbegrenzung im Geschwindigkeitsbereich größer 70 km/h. |
| STAT_LBD_DRIV_CS_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrende Kilometer mit detektierter Baustelle. |
| STAT_LBD_DRIV_TOTAL_ACT_LESS_EQUAL_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktiviertem Lane Boundary Detection Algorithmus im Geschwindigkeitsbereich 0-70 km/h |
| STAT_LBD_DRIV_TOTAL_ACT_GREATER_THAN_70_KMH_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit aktiviertem Lane Boundary Detection Algorithmus im Geschwindigkeitsbereich größer 70 km/h |
| STAT_LBD_DRIV_TOTAL_AVAILABLE_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit EventDataQualfier: Available |
| STAT_LBD_DRIV_TOTAL_AVAILABLE_REDUCED_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit EventDataQualfier Available Reduced |
| STAT_LBD_DRIV_TOTAL_NOT_AVAILABLE_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit EventDataQualfier Not Available |

### RES_0XE478_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PPP_KM_TOTAL_ACT_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit PPP Funktionsstatus `aktiv'. |
| STAT_PPP_KM_TOTAL_READY_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit PPP Funktionsstatus `bereit'. |
| STAT_PPP_KM_TOTAL_DEGR_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit PPP Funktionsstatus `degradiert'. |
| STAT_PPP_KM_TOTAL_DEGR_WARN_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit PPP Funktionsstatus `degradiert', keine Warnung und Bremsung möglich. |
| STAT_PPP_KM_TOTAL_DEGR_BRAKE_WERT | km | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Absolut gefahrene Kilometer mit PPP Funktionsstatus `degradiert', keine Bremsung möglich. |

### RES_0XE47A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLI_REP_URBAN_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durschnittlich Enfernung in welcher sich Schilder auf dem Straßentyp Urbanoder Residential Area wiederholen |
| STAT_SLI_REP_RURAL_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durschnittlich Enfernung in welcher sich Schilder auf dem Straßentyp Rural oder Highway wiederholen |
| STAT_SLI_REP_MOWAY_WERT | m | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Durschnittlich Enfernung in welcher sich Schilder auf dem Straßentyp Motorway wiederholen |

### RES_0XE47C_D

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

### RES_0XE47E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ADV_WARN_WRONGWAY | 0-n | high | unsigned int | - | - | - | - | - | STAT_ADV_WARN_WRONGWAY |
| STAT_ACUTE_WARN_WRONGWAY | 0-n | high | unsigned int | - | - | - | - | - | STAT_ACUTE_WARN_WRONGWAY |
| STAT_WARN_SITU_TYPE_1 | 0-n | high | unsigned int | - | - | - | - | - | STAT_WARN_SITU_TYPE_1 |
| STAT_WARN_SITU_TYPE_2 | 0-n | high | unsigned int | - | - | - | - | - | STAT_WARN_SITU_TYPE_2 |
| STAT_WARN_SITU_TYPE_3 | 0-n | high | unsigned int | - | - | - | - | - | STAT_WARN_SITU_TYPE_3 |
| STAT_WARN_SITU_TYPE_4 | 0-n | high | unsigned int | - | - | - | - | - | STAT_WARN_SITU_TYPE_4 |
| STAT_WARN_SITU_TYPE_5 | 0-n | high | unsigned int | - | - | - | - | - | STAT_WARN_SITU_TYPE_5 |
| STAT_WARNINGS_STANDBY | 0-n | high | unsigned int | - | - | - | - | - | STAT_WARNINGS_STANDBY |

### RES_0XE480_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DRIVINGDISTANCE_MAIN_WERT | m | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Driving Distance Main |
| STAT_DX_MAIN_CAM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | DX Main Cam Coding |
| STAT_DY_MAIN_CAM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | DY Main Cam Coding |
| STAT_DZ_MAIN_CAM_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | DZ Main Cam Height |
| STAT_PITCH_MAIN_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Pitch Main Cam SPC |
| STAT_YAW_MAIN_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Yaw Main Cam SPC |
| STAT_ROLL_MAIN_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Roll Main Cam SPC |
| STAT_PITCH_NARROW_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Pitch Narrow Cam SPC |
| STAT_YAW_NARROW_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Yaw NarrowCam SPC |
| STAT_ROLL_NARROW_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Roll Narrow Cam SPC |
| STAT_PITCH_FISHEYE_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Pitch Fisheye Cam SPC |
| STAT_YAW_FISHEYE_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Yaw Fisheye Cam SPC |
| STAT_ROLL_FISHEYE_CAM_SPC_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Roll Fisheye Cam SPC |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPTAC | + | - | + | 0-n | high | unsigned char | - | TABLE_SPTAC | - | - | - | Status of the SPTAC |
| STAT_CALIB_STAGE | + | - | + | 0-n | high | unsigned char | - | TAB_CALIB_STAGE | - | - | - | Calibration Stage |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET | - | - | + | 0-n | high | unsigned char | - | TAB_RESET_STATUS | - | - | - | Status Of Reset |

### RES_0XF003_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTRY_CODE_WERT | - | + | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabewert des Ländercodes |

### RES_0XF004_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPC_MAIN | - | - | + | 0-n | high | unsigned char | - | TAB_SPC_STATUS | - | - | - | Status |
| STAT_SPC_MAIN_PROG_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Progress |
| STAT_SPC_MAIN_DRIVINGDISTANCE_WERT | - | - | + | m | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Driving Distance  |
| STAT_SPC_MAIN_ELAPSEDTIME_WERT | - | - | + | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Elapsed Time |
| STAT_SPC_CALIBRATION | + | - | - | 0-n | high | unsigned char | - | TAB_SPC_STATUS | - | - | - | STAT_SPC_CALIBRATION |

### RES_0XF01C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GETSFRDATA_DATA | + | - | - | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | GetSfrData |

### RES_0XF01D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GETIMAGERREVISIONNUMBER_DATA | + | - | - | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | GetImagerRevisionNumber |

### RES_0XF023_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EXECUTION_WERT | - | - | + | HEX | high | unsigned char | - | - | - | - | - | 0 = IDLE 1 = RUNNING 2 = COMPLETED 3 = ERROR |

### RES_0XF024_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_RESULT_DATA | + | - | - | 0-n | high | unsigned char | - | TAB_ROUTINE_RESULT | - | - | - | ROUTINE_RESULT |
| STAT_SEED_DATA | + | - | - | DATA | high | data[256] | - | - | 1.0 | 1.0 | 0.0 | Response_SEED |

### RES_0XF025_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_RESULT_DATA | + | - | - | 0-n | high | unsigned char | - | TAB_ROUTINE_RESULT_LOCK_JTAG | - | - | - | ROUTINE_RESULT |

### RES_0XF026_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_RESULT_DATA | + | - | - | 0-n | high | unsigned char | - | TAB_ROUTINE_RESULT_LOCK_STATUS | - | - | - | ROUTINE_RESULT |
| STAT_ENCRYPTED_DEBUG_KEY_DATA | + | - | - | DATA | high | data[256] | - | - | 1.0 | 1.0 | 0.0 | ENCRYPTED_DEBUG_KEY |

### RES_0XF034_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINESTATUS_WERT | + | - | + | HEX | high | unsigned char | - | - | - | - | - | RoutineStatus |
| STAT_PROCESS_WERT | - | - | + | HEX | high | unsigned char | - | - | - | - | - | Process |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXTERNAL_HSFZ | 0x1023 | - | DOORS-ID: FZHS_5992 | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1023_R | - |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| DLT_SET_LOGLEVEL | 0x1090 | - | Diese Routine setzt den LogLevel des DLT-Subsystems in der ECU für das gegebene Applikations-ID/Kontext-ID Pärchen auf den gegebenen Wert. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1090_R | - |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| READ_SYNC_TIMING_INFORMATION | 0x1820 | STAT_DMCS_DATA | Auslesend der DMCS Debugwerte. | DATA | - | High | data[98] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUTOFIXPAR | 0x4001 | - | Lesen der extrinsischen Autokalibrierungsdeltas | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4001_D | RES_0x4001_D |
| EXTCALPAR | 0x4002 | - | Steuern der extrinsischen Autokalibrierungsparameter | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4002_D | RES_0x4002_D |
| SPC_DATA | 0x4003 | - | Lesen der Ergebnisse des Erstkalibriermodus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4003_D |
| STATUS_FAIL_SAFE | 0x4004 | - | STATUS_FAIL_SAFE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4004_D |
| STECALPAR | 0x4005 | - | Sets (forces) the passed stereo calibration parameters. The vector  (dyMain, dyMain, dzMain) is the(assumed) actual position of the narrow angle camera in the local coordinate system of the main camera,  The parameters droll, dpitch, and dyaw represent the (assumed) actual rotation of the narrow angle camera  around its (assumed) actual position in the local coordinate system of the main camera.  | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4005_D | RES_0x4005_D |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| INTRINSIC_MAIN | 0x4006 | - | Sets (forces) the passed intrinsic calibration parameters for the respective camera.  NOTE: At this point we do not yet have any information on the intrinsic camera model used by Mobileye. For now my best guess is that I can be mapped on a set of (at most) 15 floating point parameters  | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4006_D | RES_0x4006_D |
| INTRINSIC_FISHEYE | 0x4007 | - | Sets (forces) the passed intrinsic calibration parameters for the respective camera.  NOTE: At this point we do not yet have any information on the intrinsic camera model used by Mobileye. For now my best guess is that I can be mapped on a set of (at most) 15 floating point parameters  | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4007_D | RES_0x4007_D |
| INTRINSIC_NARROW | 0x4008 | - | Setzen der intrinsischen Kameradaten der Narrow Cam | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4008_D | RES_0x4008_D |
| _STATUS_QUALIFIER_CCM_PFGS | 0x400D | - | _STATUS_QUALIFIER_CCM_PFGS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400D_D |
| READETHERNETPHYDIAGNOSTIC | 0x400E | - | ReadEthernetPhyDiagnostic | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E_D |
| READETHERNETPHYREGISTERRESETSAFE | 0x400F | - | ReadEthernetPhyRegisterResetSafe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400F_D |
| _AUSGABE_CCM | 0x4036 | - | Dieser Job steuert die Subfunktionen von pFGS Basis an: HBA, Prefill, PreGen, PreRun, Warnung, sowie den Qualifier und das Integritätslevel | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4036_D | - |
| _AUSGABE_PFGS | 0x4038 | - | Dieser Job steuert die Subfunktionen von pFGS Basis an: HBA, Prefill, PreGen, PreRun, Warnung, sowie den Qualifier und das Integritätslevel | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4038_D | - |
| _AUSGABE_CC_MELDUNGEN_CCM_PFGS | 0x4039 | - | Dieser Job muss die CC-Meldungen der Fahrzeugwarnung und Fußgängerwarnung triggern.  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4039_D | - |
| _WRITE_SVK_SUPPLIER | 0x4045 | - | This DiagJob fill up Non Volatile Memory Block for SVK supplier with proper date and plant number.   | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4045_D | - |
| _READMOBILEYESWVERSION | 0x4046 | STAT_ME_VERSION_DATA | SW version should be returned in ME nomenclature to compare.with ME release document.  | DATA | - | High | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ASW_EXECUTION | 0x406B | STAT_ASW_EXECUTION | 0x00: Deactivated 0x01: Activated | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _READPRERUNSAFETLIBTESTRESULTS | 0x406E | STAT_RESULT_DATA | 144 Bytes of data | DATA | - | High | data[144] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _READRUNTIMESAFETLIBTESTRESULTS | 0x406F | STAT_RESULT_DATA | 6 Bytes of data | DATA | - | High | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _UFM_TRIGGER_RESYNC_REQUEST | 0x40A0 | - | Dieser Job erzwingt die Übertragung einer ADAS Resynchronisierungsbotschaft, welche das Navigationssystem zwingt die ADAS Struktur neu zu senden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40A0_D | - |
| _UFM_STATUS_ELECTRONICHORIZON | 0x40A2 | - | Liest die SW-Version und den aktuellen Gesundheitszustand der SWC aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A2_D |
| _UFM_STATUS_SLCONDITIONEVALUATOR | 0x40A4 | - | Liest die SW Version aus und den aktuellen Gesundheitsstatusder SWC. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A4_D |
| _UFM_STATUS_ROADDESCRIPTIONLEGACYCONSTRUCTOR | 0x40A5 | - | Reads out SW version and the current health state of the SWC. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40A5_D |
| _UFM_SETDTC_ELECTRONICHORIZON | 0x40B0 | - | Wechselt zwischen Sensoreingang und ungünstigsten Eingang. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B0_D | - |
| _UFM_SETDTC_SLCONDITIONEVALUATOR | 0x40B2 | - | Wechselt zwischen Sensoreingang und ungünstigsten Eingang. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B2_D | - |
| _UFM_SETDTC_ROADDESCRIPTIONLEGACYCONSTRUCTOR | 0x40B3 | - | Wechselt zwischen Sensoreingang und ungünstigsten Eingang. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B3_D | - |
| _SLI_SETDTC | 0x40B7 | - | Initiales Setzen eines sekundären DTCs | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40B7_D | - |
| _STEUERN_WWA_COUNTRY_MODE | 0x40C1 | - | setzt die Funktionsausprägung für den aktiven Klemmenzyklus (für das Land definiert durch den ISO-Ländercode [param1, param2]) auf den Wert definiert durch param3 | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40C1_D | - |
| _STEUERN_WWA_FAIL_SAFE | 0x40C2 | - | Versetzt die Funktion in den fail safe bzw. error state. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40C2_D | - |
| _STEUERN_WWA_FMM | 0x40C3 | - | (de)aktiviert das Fehlermanagement der Funktion WWA | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40C3_D | - |
| _STEUERN_WWA_IP_DEBUG_MODE | 0x40C4 | - | (de)aktiviert den IP Debug Mode der Funktion WWA | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40C4_D | - |
| _STEUERN_WWA_ACTIVATION_VEL_LIMITS | 0x40C5 | - | Setzt jeweils die untere und obere Schwelle für die geschwindigkeitsabhängige Aktivierung der Funktion auf param1 und param2 | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40C5_D | - |
| _STEUERN_WWA_EHR_MODE | 0x40C6 | - | Deaktiviert den EHR. Die Funktion verhält sich bei Deaktivierung wie offroad. Der Ländercode soll jedoch weiterhin verwendet und ausgewertet werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40C6_D | - |
| _VFW_ERROR_INJECTION | 0x40C7 | - | The signalId shall be mapped to an unique id in the software. For some signals (like SignInterface) it shall not be possible to replace with any value. In such cases the requests shall be accepted by the job, but no action shall be taken.  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40C7_D | - |
| _TRW_SERIAL_NUMBER | 0x40D1 | - | This diag job will write / read the 23 Digit serial number to the production flash.  | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x40D1_D | RES_0x40D1_D |
| _WRITE_PCB_SERIAL_NUMBER | 0x40D2 | - | WritePCBSerialNumber | - | - | - | - | - | - | - | - | - | 2E | ARG_0x40D2_D | - |
| _READ_POWER_SUPPLY | 0x40D3 | - | ReadPowerSupply | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x40D3_D |
| _RECEIVE_CAN_DATA | 0x40D4 | STAT_TEST_DATA_WERT | Test data byte which is initially provided by SendCanData | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _AUSGABE_VFW_PREFILL | 0x4103 | - | löst eine prefill-Anforderung beim DSC über die Ausgabe einer Nachricht an den WBK aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4103_D | - |
| _AUSGABE_VFW_HBA | 0x4104 | - | löst eine Absenkung der Eingriffsschwelle des Bremsassistenten über die Ausgabe einer Nachricht an den WBK aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4104_D | - |
| _AUSGABE_VFW_COUNTRY_CODE | 0x4106 | - | überschreibt für den aktiven Klemmenzyklus den von der Navigation verschickten ISO-Ländercode | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4106_D | - |
| _AUSGABE_VFW_COUNTRY_CODE_MODE | 0x4107 | - | setzt die Funktionsausprägung für den aktiven Klemmenzyklus für das Land definiert durch den ISO-Ländercode [param1, param2] auf den Wert definiert durch param3. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4107_D | - |
| _AUSGABE_VFW_FAIL_SAFE | 0x4108 | - | versetzt die Funktion in den fail safe bzw. error state | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4108_D | - |
| _AUSGABE_VFW_FMM | 0x4109 | - | (de)aktiviert das Fehlermanagement der Funktion VFW | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4109_D | - |
| _AUSGABE_VFW_IP_DEBUG_MODE | 0x4111 | - | Zeigt das dominante Bildverarbeitungsevent (worauf potentiell gewarnt werden würde) im Kombi an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4111_D | - |
| _AUSGABE_VFW_PREFILL_MODE | 0x4112 | - | (de)aktiviert die Möglichkeit der Funktion einen prefill auszulösen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4112_D | - |
| _AUSGABE_VFW_HBA_MODE | 0x4113 | - | (de)aktiviert die Möglichkeit der Funktion eine HBA Schwellwertanpassung vorzunehmen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4113_D | - |
| _AUSGABE_VFW_ACTIVATION_VEL_LIMITS | 0x4114 | - | setzt jeweils die untere und obere Schwelle für die geschwindigkeitsabhängige Aktivierung der Funktion auf param1 und param2 | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4114_D | - |
| _AUSGABE_VFW_EHR_MODE | 0x4115 | - | deaktiviert den EHR. Die Funktion verhält sich bei Deaktivierung wie offroad, der Ländercode soll jedoch weiterhin verwendet und ausgewertet werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4115_D | - |
| _WRITE_EYEQ_STATE | 0x4117 | - | Sets the EyeQ in a specific state. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4117_D | - |
| _READ_EYEQ4_UNIQUEID | 0x4118 | STAT_READ_EYEQ4_UNIQUEID_DATA | Returns internal serial number of the EyeQ4. | DATA | - | High | data[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _READ_EYEQ_STATE | 0x4119 | STAT_EYEQ_STATE | Table for actual EyeQ State | 0-n | - | High | unsigned char | STAT_EYEQ_STATE | - | - | - | - | 22 | - | - |
| _PRODUCTIONINTRINSICFISHEYE | 0x411B | - | ProductionIntrinsicFisheye | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x411B_D | RES_0x411B_D |
| _PRODUCTIONINTRINSICMAIN | 0x411C | - | ProductionIntrinsicMain | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x411C_D | RES_0x411C_D |
| _PRODUCTIONINTRINSICNARROW | 0x411D | - | ProductionIntrinsicNarrow | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x411D_D | RES_0x411D_D |
| _STEUERN_SETBOUNDARYSCANMODE | 0x4129 | - | Transfers the System in BoundaryScan Mode to perform BoundaryScan Check. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4129_D | - |
| _GET_BOOT_STATUS | 0x41F3 | - | Boot Status auslesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x41F3_D |
| _SET_NEXT_BOOT_MODE | 0x41F4 | - | Boot Mode einstellen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x41F4_D | - |
| _GET_SFR_DATA | 0x41F8 | STAT_GETSFRDATA_DATA | GetSfrData | DATA | - | High | data[52] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SET_NEXT_MANUAL_EXPOSURE | 0x41F9 | - | manuellen Belichtungswert einstellen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x41F9_D | - |
| _READ_MODULE_TEMPERATURES | 0x41FC | STAT_READMODULETEMPERATURES_DATA | Temperature readings from different Modules | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _READ_HEATER_CURRENT | 0x41FE | STAT_WINDSCREEN_HEATER_CURRENT_WERT | Byte 0 Windscreen heater current | HEX | - | High | unsigned int | - | - | - | - | - | 22 | - | - |
| _WRITECALIBSTATE | 0x4200 | - | WriteCalibState | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4200_D | - |
| _WRITEAURIXSTATE | 0x4201 | - | WriteAurixState | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4201_D | - |
| _READAURIXSTATE | 0x4202 | STAT_READAURIXSTATE | ReadAurixState | 0-n | - | High | unsigned int | UWB_STATUS_KAFAS_SYSTEM_STATE | - | - | - | - | 22 | - | - |
| _DIAGPORTACCESS | 0x4203 | - | This diagnostic Job shall only be useable during Development Session to De-/Activate the JTAG Port and the XCP Port. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4203_D | - |
| _WRITE_SFR_SCORING_RESULT | 0x4205 | - | Writes the SFR scoring result to the production flash  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4205_D | - |
| _CLOSE_ALL_DEV_DIAGPORTS | 0x4207 | - | Close All Development Diagports persistently | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4207_D | - |
| _ETH_NETWORK_LOAD_PACKAGES | 0x6FFC | - | _STATUS_ETH_NETWORK_LOAD_PACKAGES | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6FFC_D |
| _ETH_NETWORK_LOAD_TRAFFIC | 0x6FFD | - | ETH_SYS_DIAG_AND_152 provide the average and total amount of incoming and outgoing traffic (Byte/s and Byte) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6FFD_D |
| _ETH_QUEUED_PACKAGES | 0x6FFE | - | ETH_SYS_DIAG_AND_154 provide information abour queued MAC packages | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6FFE_D |
| _ETH_DROPPED_PACKAGE | 0x6FFF | - | ETH_SYS_DIAG_AND_153 provide information about dropped MAC packages | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6FFF_D |
| LDW_STEUERN_ANZEIGE_KOMBI | 0xA37C | - | Ansteuerung der Anzeige im Kombi. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xA37C_D | - |
| ABSCHALTGRUND_FERNLICHT | 0xD341 | - | Abschaltgründe für Fernlicht. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD341_D |
| KONFIGURATION_KAFAS | 0xD374 | - | Ausgabe der Ausstattung von KAFAS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD374_D |
| LDW_VIBRATION | 0xD399 | - | Status / Steuern TLC-Aktuator | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD399_D | - |
| DEMO_MODE_FLA | 0xD3A6 | - | Demo-Mode für Fernlichtassisten ein-/ausschalten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A6_D | - |
| STEUERN_ANZEIGE_KOMBI_SLI | 0xD3A9 | - | Ansteuerung der Anzeige für Verkehrzeichenerkennung im Kombi. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3A9_D | - |
| STEUERN_METHODE_SLI | 0xD3AB | - | Gibt vor, welche Methode bei der Speed-Limit-Info abgewendet werden soll. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3AB_D | - |
| EMPFEHLUNG_LD | 0xD3AD | - | Empfehlung der Light Detection (LD) für den stufenlosen Fernlichtassistenten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3AD_D |
| CALIB_RESET_WINDSHIELD_EXCHANGE | 0xD3BD | - | Autokalibrierung der KAFAS-Kamera | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3BD_D | - |
| KAFAS_SCHEIBENHEIZUNG | 0xD3CD | - | KAFAS-Scheibeheizung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD3CD_D | RES_0xD3CD_D |
| STAT_KALIB | 0xD6BC | - | Status Kalibrierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6BC_D |
| KAFAS_VARIANT | 0xD807 | STAT_KAFAS_VARIANT | Abfrage der KAFAS Variante, siehe Tabelle. | 0-n | - | High | unsigned char | TAB_KAFAS_VARIANT | - | - | - | - | 22 | - | - |
| WWA_QUALIFIER | 0xE41E | - | Setzt den Qualifier der Funktion WWA für die Zeitspanne definiert durch param2 auf den Wert definiert durch param1. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE41E_D | - |
| WWA_WARNUNG | 0xE41F | - | Löst eine Akut/Vorwarnung beim WBK aus. Gleichzeitig kann auch eine CCM getriggert werden. Jeweils für die parametrierte Zeitdauer. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE41F_D | - |
| AUSGABE_VFW_QUALIFIER | 0xE420 | - | Setzt den Qualifier der Funktion QU_FN_VFW für die Zeitspanne definiert durch param2 auf den Wert definiert durch param1 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE420_D | - |
| AUSGABE_VFW_WARNANFORDERUNG | 0xE421 | - | Löst eine Akut/Vorwarnung und/oder eine Bremsenvorkonditionierung beim WBK aus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE421_D | - |
| AUSGABE_VFW_WARNUNG | 0xE422 | - | Löst eine Akut/Vorwarnung beim WBK aus, ohne dabei eine Bremsenvorkonditionierung vorzunehmen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE422_D | - |
| CALIB_DELTA_HEIGHT | 0xE46F | - | CALIB_DELTA_HEIGHT | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE46F_D | RES_0xE46F_D |
| FASTA_DQ_DTC_DATA | 0xE470 | - | Über den JOB können persistente Informationen über DQ ausgelesen werden. Hier die Anzahl auslösender FailSafes getrennt für folgende DTC's: DTC1 =  0x800ABF Kamera Sichtfeld kurzzeitig gestört  DTC2  = 0x800ABE Kamera Sichtfeld dauerhaft gestört | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE470_D |
| FASTA_DQ_DTC_LOESCHEN | 0xE471 | - | Setzt alle DQ FASTA-Zähler auf ihre Initialwerte zurück. (DTC Häufigkeit) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE471_D | - |
| FASTA_DQ_FS_DATA | 0xE472 | - | Über den JOB können persistente Informationen über DQ ausgelesen werden.  - Vektor mit allen fail safes und Serverities und deren zeitliche Häufigkeit. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE472_D |
| FASTA_DQ_FS_LOESCHEN | 0xE473 | - | Setzt alle DQ FASTA-Zähler auf ihre Initialwerte zurück. (Fail safe Häufigkeiten) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE473_D | - |
| FASTA_FLA_DATA | 0xE474 | - | Liest die gespeicherten FASTA Werte der Funktion FLA aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE474_D |
| FASTA_FLA_LOESCHEN | 0xE475 | - | Setzt alle FLA FASTA-Zähler auf ihre Initialwerte zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE475_D | - |
| FASTA_LBD_DATA | 0xE476 | - | Liest die FASTA-Daten der Funktion LBD aus. (Verfügbarkeitsraten) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE476_D |
| FASTA_LBD_LOESCHEN | 0xE477 | - | Setzt alle LBD FASTA-Zähler auf ihre Initialwerte zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE477_D | - |
| FASTA_PPP_DATA | 0xE478 | - | Liest die FASTA-Daten der Funktion PPP aus. (präventiver Fußgängerschutz) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE478_D |
| FASTA_PPP_LOESCHEN | 0xE479 | - | Setzt alle PPP FASTA-Zähler auf ihre Initialwerte zurück.(Präventiver Fußgängerschutz). | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE479_D | - |
| FASTA_SLI_DATA | 0xE47A | - | Liest die FASTA-Daten der Funktion SLI aus. Beschreibung der Daten s.h. Ergebnisfeld. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE47A_D |
| FASTA_SLI_LOESCHEN | 0xE47B | - | Setzt alle SLI FASTA-Zähler auf ihre Initialwerte zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE47B_D | - |
| FASTA_VFW_DATA | 0xE47C | - | Liest die FASTA-Daten der Funktion VFW aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE47C_D |
| FASTA_VFW_LOESCHEN | 0xE47D | - | Setzt alle VFW FASTA-Zähler auf ihre Initialwerte zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE47D_D | - |
| FASTA_WWA_DATA | 0xE47E | - | Liest die FASTA Daten der Funktion WWA aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE47E_D |
| FASTA_WWA_LOESCHEN | 0xE47F | - | Setzt alle WWA FASTA-Daten auf ihre Initialwerte zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE47F_D | - |
| FASTA_CAMCALIB_DATA | 0xE480 | - | Liest die FASTA-Daten der Funktion CAMCALIB aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE480_D |
| FASTA_CALIBCAM_LOESCHEN | 0xE481 | - | Setzt alle CALIBCAM FASTA-Daten auf ihre Initialwerte zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE481_D | - |
| KONFIGURATION_KAFAS_FLA | 0xE482 | STAT_ENABLE_CODE_FLA | STAT_ENABLE_CODE_FLA | 0-n | - | High | unsigned char | TAB_Status_Enabling_Code_FLA | - | - | - | - | 22 | - | - |
| SPTAC | 0xF000 | - | target-based calibration intended for development phase | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000_R | RES_0xF000_R |
| RESETCAL | 0xF002 | - | Reset all extrinsic calibration parameters and restart SPC (extrinsic auto-calibration). | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF002_R |
| _SIM_COUNTRY_CODE | 0xF003 | - | Simulation des Country-Codes für SLI und NPI | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF003_R | RES_0xF003_R |
| SPC | 0xF004 | - | Status Abfrage des Jobs zum Starten des Erstkalibriermodus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF004_R | RES_0xF004_R |
| WRITE_FAIL_SAFE_DETAIL | 0xF005 | - | WRITE_FAIL_SAFE_DETAIL | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF005_R | - |
| SETETHERNETPHYTOSPECIALMODE | 0xF007 | - | SetEthernetPhyToSpecialMode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF007_R | - |
| SETETHERNETPHYCONFIG | 0xF008 | - | SetEthernetPhyConfig | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF008_R | - |
| SETETHERNETPHYECUMODE | 0xF009 | - | SetEthernetPhyEcuMode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF009_R | - |
| SETEHTERNETAPPLICATIONMODE | 0xF00A | - | SetEhternetApplicationMode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00A_R | - |
| STARTETHERNETPHYDIAGNOSTICS | 0xF00B | - | StartEthernetPhyDiagnostics | - | - | - | - | - | - | - | - | - | 31 | - | - |
| RESETETHERNETPHYDIAGNOSTICSTATUS | 0xF00C | - | ResetEthernetPhyDiagnosticStatus | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SETETHERNETFRAMERESPONSEMODE | 0xF00D | - | SetEthernetFrameResponseMode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00D_R | - |
| CONTROLDLT | 0xF010 | - | ControlDlt | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010_R | - |
| CONTROLLOGGERCOMMUNICATION | 0xF011 | - | ControlLoggerCommunication | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF011_R | - |
| _CONTROLHILMODE | 0xF012 | - | ControlHilMode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF012_R | - |
| _SIMULATE_SIGN_DETECTION_FOR_SLINPI | 0xF013 | - | Simuliert die Ergebnisse der Verkehrzeichenerkennung für die BMW / NPI Funktion, welche in der Black Box für Kafas4 läuft | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF013_R | - |
| FAKE_COUNTRY_CODE_FOR_CAMERA | 0xF014 | - | Override and/or fake the country code delivered by GPS for the KaFAS4 | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF014_R | - |
| _ECU_LOGISTICS | 0xF015 | - | This DiagJob is created to run additional CRC check of external memory. Fill up fields and Non Volatile Memory Block for Read Current SVK purpose. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _ENTER_LOW_POWER_MODE | 0xF018 | - | Energiesparmodus aktivieren | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF018_R | - |
| _EXIT_LOW_POWER_MODE | 0xF019 | - | Energiesparmodus verlassen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _WRITEINTRINSICCALIBPRODFLASH | 0xF01A | - | WriteIntrinsicCalibProdFlash | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _SET_DV_MODE | 0xF01B | - | Setzt den EyeQ in den DV Mode | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _GET_UNIQUE_IMAGER_ID | 0xF01C | - | Get unique imager ID. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF01C_R | RES_0xF01C_R |
| _GET_IMAGER_REVISION_NUMBER | 0xF01D | - | Read imager revision number. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF01D_R | RES_0xF01D_R |
| STARTTRWPRODMODE | 0xF01E | - | Starts TRW production mode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF01E_R | - |
| _ETH_OUTPUT_DATA_LOAD_TEST | 0xF020 | - | This job activates all cyclic frames & Triggers the event based frames in fixed periodicity. Test will have options to simulate the Bus Load with 1byte argument.  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF020_R | - |
| _STEUERN_HIL_MODE_EYEQ_RESET | 0xF021 | - | Eye Q Reset fuer HIL Mode | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _GET_EYEQ_IMAGE | 0xF023 | - | GetEyeQImage | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF023_R | RES_0xF023_R |
| _CREATE_JTAG_DEBUG_KEY | 0xF024 | - | CreateJTAGDebugKey | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF024_R |
| _LOCK_JTAG_PORT | 0xF025 | - | LockJTAGPort | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF025_R | RES_0xF025_R |
| _GET_JTAG_LOCK_STATUS | 0xF026 | - | GetJTAGLockStatus | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF026_R |
| _FORCE_MPU_EXCEPTION | 0xF027 | - | ForceMPUException | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF027_R | - |
| _FORCE_RUNTIME_VIOLATION | 0xF028 | - | ForceRuntimeViolation | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF028_R | - |
| _FORCE_FPU_EXCEPTION | 0xF02A | - | ForceFPUException | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF02A_R | - |
| _FORCE_WATCHDOG_SUPPRESSION | 0xF02B | - | ForceWatchdogSuppression | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _FORCE_UNAUTHORIZED_CPU_REGISTER_ACCESS | 0xF02C | - | ForceUnauthorizedCPURegisterAccess | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _FORCE_CPU_EXCEPTION | 0xF02D | - | ForceCPUException | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF02D_R | - |
| _FORCE_MULTIPLE_RESET | 0xF02E | - | ForceMultipleReset | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF02E_R | - |
| _FORCE_SMU_ERROR | 0xF02F | - | ForceSMUError | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _FORCE_RUNTIME_EXCEPTION | 0xF030 | - | ForceRuntimeException | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _INJECTDELAYQMTASK | 0xF031 | - | InjectDelayQmTask | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF031_R | - |
| _SEND_CAN_DATA | 0xF033 | - | SendCanData | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF033_R | - |
| _READ_MICRO_CORE_DUMP | 0xF034 | - | Micro Core Dump auslesen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF034_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| _STORE_APPLICATION_PARAMETERS | 0xF780 | - | Will trigger writing the Application Trim Parameters back to ROM Flash memory. | - | - | - | - | - | - | - | - | - | 31 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### STAT_EYEQ_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unknown |
| 0x01 | Pending |
| 0x03 | Boot |
| 0x85 | Pending DV |
| 0xAA | DV |
| 0x92 | Pending Vision |
| 0x02 | Vision |
| 0x82 | Pending SPC |
| 0x22 | SPC |
| 0x81 | Pending SPTAC |
| 0x21 | SPTAC |
| 0x80 | Pending TAC |
| 0x20 | TAC |
| 0xAB | Pending TAC2 |
| 0xAC | TAC2 |
| 0x83 | Pending SFR |
| 0xB0 | SFR |
| 0x89 | Pending SP |
| 0xAE | SP |
| 0xAF | Stereo |
| 0xFF | EyeQ OFF |

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

### TABELLE_ENTLASTUNG_GENERATOR

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
| 0x0E | Signal_nicht_verfuegbar |
| 0x0F | Signal ungültig |

### TABLE_SPTAC

| WERT | TEXT |
| --- | --- |
| 0 | NO_SPTAC_ERROR |
| 1 | UNKNOWN_SPTAC_ERROR |
| 2 | SWITCH_CLOSE_FAR_SPTAC_ERROR |
| 3 | SAME_CLOSE_FAR_SPTAC_ERROR |
| 4 | LINE_MISMATCH_SPTAC_ERROR |
| 5 | FAR_CLOSE_ROLL_SPTAC_ERROR |
| 6 | LINE_NOT_FOUND_SPTAC_ERROR |
| 7 | BAD_IMAGE_SPTAC_ERROR |
| 8 | WRONG_STAGE_ERROR |
| 9 | ROLL_OUT_OF_RANGE |
| 10 | FOE_OUT_OF_RANGE |
| 0xFF | Wert ungültig |

### TABLE_TAC2_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | UNDEFINED |
| 0x01 | SUCCESS |
| 0x02 | TARGET_NOT_FOUND |
| 0x03 | ROLL_ANGLE_TOO_LARGE |
| 0x04 | FOE_OUT_OF_TOLERANCE |
| 0x05 | PARAMS_LOAD_FAILED |
| 0x06 | BAD_PARAMS_DISTANCE |
| 0x07 | BAD_PARAMS_SQUARE_SIDE_SIZE |
| 0x08 | BAD_PARAMS_TARGET_YAW |
| 0x09 | BAD_PARAMS_TARGET_HORIZON |
| 0x0a | TOO_MANY_TARGETS |
| 0x0b | RUN_ERROR |
| 0xFF | Wert ungültig |

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

### TAB_AVAILABILITY

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion nicht verfügbar |
| 0x01 | Funktion verfügbar |
| 0xFF | Wert ungültig |

### TAB_BREMSKONDITIONIERUNG_US

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine_Ansteuerung_Generator, Keine_Ansteuerung_PreRun, Keine_Luftspielreduktion |
| 0x01 | Keine_Ansteuerung_Generator, Keine_Ansteuerung_PreRun, Luftspielreduktion |
| 0x02 | Keine_Ansteuerung_Generator, Ansteuerung_PreRun, Keine_Luftspielreduktion |
| 0x03 | Keine_Ansteuerung_Generator, Ansteuerung_PreRun, Luftspielreduktion |
| 0x04 | Ansteuerung_Generator, Keine_Ansteuerung_PreRun, Keine_Luftspielreduktion |
| 0x05 | Ansteuerung_Generator, Keine_Ansteuerung_PreRun, Luftspielreduktion |
| 0x06 | Ansteuerung_Generator, Ansteuerung_PreRun, Keine_Luftspielreduktion |
| 0x07 | Ansteuerung_Generator, Ansteuerung_PreRun, Luftspielreduktion |
| 0xD | Funktionsschnittstelle_ist_nicht_verfügbar |
| 0xE | Funktion_meldet_Fehler |
| 0xF | Signal_unbefuellt |

### TAB_CALIB_DELTA_HEIGHT

| WERT | TEXT |
| --- | --- |
| 0x00 | +40mm |
| 0x01 | +35mm |
| 0x02 | +30mm |
| 0x03 | +25mm |
| 0x04 | +20mm |
| 0x05 | +15mm |
| 0x06 | +10mm |
| 0x07 | +5mm |
| 0x08 | 0mm |
| 0x09 | -5mm |
| 0x0A | -10mm |
| 0x0B | -15mm |
| 0x0C | -20mm |
| 0x0D | -25mm |
| 0x0E | -30mm |
| 0x0F | -35mm |
| 0x10 | -40mm |
| 0x11 | -45mm |
| 0x12 | -50mm |
| 0x13 | -55mm |
| 0x14 | -60mm |
| 0x15 | -65mm |
| 0x16 | -70mm |
| 0x17 | -75mm |
| 0x18 | -80mm |
| 0x19 | -85mm |
| 0x1A | -90mm |
| 0x1B | -95mm |
| 0x1C | -100mm |
| 0x1D | -105mm |
| 0x1E | -110mm |
| 0xFF | Wert ungültig |

### TAB_CALIB_STAGE

| WERT | TEXT |
| --- | --- |
| 0x00 | INIT |
| 0x01 | CLOSE_TARGET_COMPLETE |
| 0x02 | FAR_TARGET_COMPLETE |
| 0x03 | RESULTS_READY |
| 0xFF | Wert ungültig |

### TAB_CHOSE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | MainCam |

### TAB_CODING_PARAMETER

| WERT | TEXT |
| --- | --- |
| 0x01 | XCP_ON |
| 0x02 | XCP_OFF |
| 0xFFFF | Wert ungültig |

### TAB_CTRL_DLT

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | Trace Only |
| 0x02 | Log Only |
| 0x03 | Trace and Log |

### TAB_C_FLA_ON_OFF

| WERT | TEXT |
| --- | --- |
| 0x00 | FLA OFF |
| 0x01 | FLA ON |
| 0x11 | FLA Prepared |
| 0xFF | Wert ungültig |

### TAB_CALIBSTATE_IMPL

| WERT | TEXT |
| --- | --- |
| 0x00 | CAMAPP_CALIB_STATE_UNDEFINED |
| 0x01 | CAMAPP_CALIB_STATE_CALIB_OK |
| 0x02 | CAMAPP_CALIB_STATE_SPC |
| 0x03 | CAMAPP_CALIB_STATE_TEMPORARY_NOK |
| 0x04 | CAMAPP_CALIB_STATE_SPC_FALLBACK |
| 0x05 | CAMAPP_CALIB_STATE_PERMANENT_CALIB_FAILURE |

### TAB_CAMERAID

| WERT | TEXT |
| --- | --- |
| 0x01 | main |
| 0x02 | narrow |
| 0x03 | fisheye |

### TAB_CAMERA_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | Main |
| 0x01 | Narrow |
| 0x02 | Fisheye |

### TAB_COMPONENT_TEMP

| WERT | TEXT |
| --- | --- |
| 0x00 | EyeQ MIPI temperature |
| 0x01 | EyeQ VMP temperature |
| 0x02 | Aurix Die temperature |
| 0x03 | Camera1 temperature value |
| 0x04 | Camera2 temperature value / (Default = 255) |
| 0x05 | Camera3 temperature value / (Default = 255) |
| 0x06 | PCB temperature sensor close to EyeQ |
| 0x07 | placeholder / (Default = 255) |
| 0x08 | placeholder / (Default = 255) |
| 0x09 | All Values Listed |

### TAB_DAY_TIME_INDICATOR

| WERT | TEXT |
| --- | --- |
| 0 | Nacht |
| 1 | Dämmerung |
| 2 | Tag |

### TAB_DTC_REASON

| WERT | TEXT |
| --- | --- |
| 0x0 | PTP_Message_Timeout |
| 0x1 | MAX_JUMP (correction value to the local clock is to high) |
| 0x2 | Nanoseconds (in PTP timestamp) higher than Maximum-Tick-Counter-Value  |
| 0xFF | Wert ungültig |

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

### TAB_ERROR_MODE_REASON

| WERT | TEXT |
| --- | --- |
| 0x00 | MM_ERROR_MODE_REASON_INVALID |
| 0x01 | MM_ERROR_MODE_REASON_1 |
| 0x02 | MM_ERROR_MODE_REASON_2 |
| 0x03 | MM_ERROR_MODE_REASON_3 |
| 0x04 | MM_ERROR_MODE_REASON_4 |
| 0x05 | MM_ERROR_MODE_REASON_5 |
| 0xFF | Wert ungültig |

### TAB_ETHERNET_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_ERROR |
| 0x01 | STARTUP |
| 0x02 | STARTUP_PHY_NOT_AVAILABLE |
| 0x03 | LINK_ABORT |
| 0x04 | LINK_ABORT_PHY_NOT_AVAILABLE |
| 0xFFFFFFFF | Wert ungültig |

### TAB_ETH_APP_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Normal |
| 0x01 | Test Mode 1 |
| 0x02 | Test Mode 2 |
| 0x03 | Test Mode 3 |
| 0x04 | Test Mode 4 |
| 0x05 | Test Mode 5 |

### TAB_ETH_PHY_MODE

| WERT | TEXT |
| --- | --- |
| 0x01 | TX_OFF |
| 0x02 | SCRAMBLER_OFF |

### TAB_EVENT_ID_0XB531_ADAS_PROTOCOLL

| WERT | TEXT |
| --- | --- |
| 0x00 | ADAS_MatchGraphNavigation  |
| 0x01 | ADAS_NavGraph2RouteOffset2 |
| 0x02 | ADAS_NavigationGraph |
| 0x03 | ADAS_NavigationGraphLane |
| 0x04 | ADAS_NavigationGraphMapData |
| 0x05 | ADAS_NavigationGraphSpeed |
| 0x06 | ADAS_NavigationSystemInformation |
| 0x07 | ADAS_SynchronisationNavigationGraph |
| 0x08 | ADAS_NavigationGPS1 |
| 0x09 | ADAS_NavigationGPS2 |
| 0x0A |  ADAS_MAX |
| 0xFF | Wert ungültig |

### TAB_EXCEPTION_SYMPTOM

| WERT | TEXT |
| --- | --- |
| 0x00 | EH_SYMPTOM_OK |
| 0x01 | EH_SYMPTOM_ERROR_FAULT |
| 0x02 | EH_SYMPTOM_PROTECTION_FAULT |
| 0x03 | EH_SYMPTOM_PANIC_FAULT |
| 0x04 | EH_SYMPTOM_SHUTDOWN_FAULT |
| 0x05 | EH_SYMPTOM_SAFETY_FAULT |
| 0x06 | EH_SYMPTOM_6 |
| 0x07 | EH_SYMPTOM_7 |
| 0x08 | EH_SYMPTOM_8 |
| 0x09 | EH_SYMPTOM_9 |
| 0xFF | Wert ungültig |

### TAB_ERROR_REASON_PFGS_CCM

| WERT | TEXT |
| --- | --- |
| 0x00 | Siehe primärer FS |
| 0x01 | CTR_IDC (0x5532. 0x8006) |
| 0x02 | ST_CON_STEA (0x7532. 0x8002) |
| 0x03 | CTR_OPTN_FWARN (0x3531. 0x8001) |
| 0x04 | QU_AVL_BRTORQ_SUM_DVCH (0x7536. 0x8002) |
| 0x05 | AVL_BRTORQ_SUM_DVCH (0x7536. 0x8002) |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X1506_STATUSENERGY

| WERT | TEXT |
| --- | --- |
| 0x00 | statusEnergyFZM  |
| 0x01 | VehicleState_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X1531_VEHICLECONDITION

| WERT | TEXT |
| --- | --- |
| 0x00 | VehicleCondition |
| 0x01 | VehicleCondition_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X1535_ENVIRONMENTALINFORMATION

| WERT | TEXT |
| --- | --- |
| 0x00 | ExteriorTemperature |
| 0x01 | UnitBN2020 |
| 0x02 | EnvironmentalInformation_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X3531_CONTROLANDSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | DisplayDriverAssistenceSystem |
| 0x01 | OperationElementBrakeAssistant |
| 0x02 | ControlAndStatus_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X3538_DRIVERASSISTANCECOMFORTANDSECURITY

| WERT | TEXT |
| --- | --- |
| 0x00 | ConditioningHeadwayObservation |
| 0x01 | FeedbackVibrationSteeringWheelDisplayExteriorMirror |
| 0x02 | StatusWarningAndBrakeCoordinator |
| 0x03 | ControlFunctionalSafetyDRS |
| 0x04 | DriverAssistanceComfortAndSecurity_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X5531_WIPER

| WERT | TEXT |
| --- | --- |
| 0x00 | RainSensorWiperSpeed |
| 0x01 | Wiper |
| 0x02 | WiperSteeringColumn |
| 0x03 | Wiper_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X5532_LIGHT

| WERT | TEXT |
| --- | --- |
| 0x00 | IndicatorSteeringColumn |
| 0x01 | LampExterior |
| 0x02 | LampExterior2 |
| 0x03 | LowBeam |
| 0x04 | StatusFunctionsIndicators |
| 0x05 | Light_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X5536_AIRCONDITIONINGSYSTEM

| WERT | TEXT |
| --- | --- |
| 0x00 | AirConditioningFront |
| 0x01 | AirConditioningFrontControlUnit |
| 0x02 | AirConditioningStatusAirConditioningInternalControlInfo |
| 0x03 | AirConditioningStatusParkHeating |
| 0x04 | AirConditioningSystem_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X7530_VEHICLEMODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | MassVehicle |
| 0x01 | OdometryVehicle1 |
| 0x02 | OdometryVehicle2 |
| 0x03 | OdometryVehicle3 |
| 0x04 | HeightLevelVehicle1 |
| 0x05 | StatusLevelControlSystemVehicle2_2 |
| 0x06 | LaneSlope |
| 0x07 | Trailer |
| 0x08 | VehicleModel_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X7531_DRIVINGVECTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | ActualVectorVehicleMove |
| 0x01 | DrivingVector_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X7532_STEERINGANGLE

| WERT | TEXT |
| --- | --- |
| 0x00 | ActualSteeringAngleDriver |
| 0x01 | SteeringAngleFrontAxleEffective |
| 0x02 | SteeringAngle_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X7533_SPEEDACCELERATION

| WERT | TEXT |
| --- | --- |
| 0x00 | LateralAccelerationCenterOfGravity |
| 0x01 | LongitudinalAccelerationCentreOfGravity |
| 0x02 | VehicleDynamicDataLongitudinalAndMassVehicle |
| 0x03 | VehicleSpeed2 |
| 0x04 | SpeedAccelerationVehicleSpeedAndDrivingCondition |
| 0x05 | YawSpeedVehicle |
| 0x06 | SpeedAcceleration_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X7534_VEHICLESTABILIZATIONMANAGEMENT

| WERT | TEXT |
| --- | --- |
| 0x00 | StabilizationManagement  |
| 0x01 | VehicleStabilizationManagement_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X7536_WHEELTORQUEECBA

| WERT | TEXT |
| --- | --- |
| 0x00 | ActualBrakingTorqueSum |
| 0x01 | WheelTorqueECBA_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0X9530_POWERTRAIN

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x8001 - StatusCombustionEngine  |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0XB50E_FASUS

| WERT | TEXT |
| --- | --- |
| 0x01 | controlConfigurationFAS |
| 0x02 | displayDriverAssistenceSystemLongitudinalGuidance |
| 0x03 | FASus_MAX |
| 0xFF | Wert ungültig |

### TAB_EVENT_ID_0XF13D_MAINBEAM2

| WERT | TEXT |
| --- | --- |
| 0x00 | MainBeamAssistant |
| 0x01 | Status2GlareFreeMainBeamAssistant |
| 0x02 | Status3GlareFreeMainBeamAssistant |
| 0x03 | StatusGlareFreeMainBeamAssistant2 |
| 0x04 | MainBeam_MAX |
| 0xFF | Wert ungültig |

### TAB_FAILSAFE_SEVERITY

| WERT | TEXT |
| --- | --- |
| 255 | Deactivate fail safe override |
| 0 | No blockage |
| 25 | Mild blockage |
| 75 | Noticeable blockage |
| 99 | Severe blockage |

### TAB_FAILSAFE_TYP

| WERT | TEXT |
| --- | --- |
| 1 | full blockage |
| 2 | partial blockage |
| 3 | low sun |
| 4 | sun ray |
| 5 | blurred image |
| 6 | splashes |
| 7 | foggy |
| 8 | halos |
| 9 | smeared spots |
| 10 | self glare |
| 11 | out of focus |
| 12 | frozen windshield |
| 101 | rain |
| 102 | snow |
| 103 | fog |
| 211 | Autofix_OOC_Yaw |
| 212 | Autofix_OOC_Horizon |
| 221 | TSR_OutOfCalib_yaw |
| 222 | TSR_OutOfCalib_pitch |
| 223 | TSR_OutOfCalib_Roll |
| 231 | Rel_Calib_Misalignment |
| 0xFF | Wert ungültig |

### TAB_FLA_EMPFEHLUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Keine Empfehlung |
| 0x0001 | Fernlicht AUS |
| 0x0002 | Fernlicht EIN |
| 0xFFFF | Ungültig |

### TAB_GEN

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Ansteuerung |
| 0x01 | Ansteuerung Generator |

### TAB_HBA_PARAMETRIERUNG_US

| WERT | TEXT |
| --- | --- |
| 0x00 | Defaultparametersatz DBC |
| 0x01 | Leicht erhöhte Empfindlichkeit |
| 0x02 | Erhöhte Empfindlichkeit |
| 0x03 | Höchste Empfindlichkeit |
| 0x04 | Empfindlichkeit für Zielbremsung 1 |
| 0x05 | Empfindlichkeit für Zielbremsung 2 |
| 0x06 | Empfindlichkeit für Zielbremsung 3 |

### TAB_INTEGRITY_US

| WERT | TEXT |
| --- | --- |
| 0x00 | ASIL-QM |
| 0x01 | ASIL-B |
| 0x03 | Signal_unbefuellt |

### TAB_INTERNAL_SUPPLY_VOLT_ERROR_INFO

| WERT | TEXT |
| --- | --- |
| 0x01 | ERROR_INT_SUPPLY_1 |
| 0x02 | ERROR_INT_SUPPLY_2 |
| 0x03 | ERROR_INT_SUPPLY_3 |
| 0x04 | ERROR_INT_SUPPLY_4 |
| 0x05 | ERROR_INT_SUPPLY_5 |
| 0x06 | ERROR_INT_SUPPLY_6 |
| 0x07 | ERROR_INT_SUPPLY_7 |
| 0x08 | ERROR_INT_SUPPLY_8 |
| 0xFF | Wert ungültig |

### TAB_INVALID_DETECTION_SOURCE

| WERT | TEXT |
| --- | --- |
| 0x01 | EHR |
| 0x02 | ADAS Integration |
| 0x03 | Cond.Eval |
| 0x04 | SLI |
| 0x05 | GWW |
| 0x06 | Reserved for other BB  |
| 0x07 | Reserved for other BB  |
| 0x08 | Reserved for other BB  |
| 0x09 | Reserved for other BB  |
| 0x0A | Reserved for other BB  |
| 0x0B | Reserved for other BB  |
| 0x0C | Reserved for other BB  |
| 0x0D | Reserved for other BB  |
| 0x0E | Reserved for other BB  |
| 0x0F | Reserved for other BB  |
| 0x10 | EME = Ego Motion Estimation |
| 0x11 | CC = Camera Calibration |
| 0x12 | CCM = City Collision Mitigation |
| 0x13 | DA = Driver Altertness Estimator |
| 0x14 | DQ = Detection Qualifiers |
| 0x15 | LBD = Lane Boundary Detection |
| 0x16 | LD = Light Detection |
| 0x17 | LDW = Lane Departure Warning |
| 0x18 | DSI = Drive State Interpretation (Part Of LDW) |
| 0x19 | ObsD = Obstacle Detection |
| 0x1A | OD = Object Detection |
| 0x1B | PPP = Preventive Pedestrian Protection |
| 0x1C | RSP = Road Surface Preview |
| 0x1D | TFL = Traffic Light Detection |
| 0x1E | TSR = Traffic Sign Recognition |
| 0x1F | VLM = Visual Landmarks |
| 0x20 | WSH = Windscreen Heating |
| 0x21 | RSD = Road Segment Data |
| 0x22 | AppComRxHandler |
| 0xFF | Wert ungültig |

### TAB_KAFAS_KOMBI_ANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion nicht aktiv - keine Anzeige |
| 0x01 | Funktion aktiv - warnbereit |
| 0x02 | Funktion aktiv - nicht warnbereit |
| 0x03 | Gruen 3 Hz blinkend |
| 0x04 | Gelb 3 Hz blinkend |
| 0xFF | Ungültiger Wert |

### TAB_KAFAS_VARIANT

| WERT | TEXT |
| --- | --- |
| 0x00 | KAFAS_HIGH |
| 0x01 | KAFAS_MID |
| 0xFF | Wert ungültig |

### TAB_KALIB_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Kalibrierung OK |
| 0x02 | Kalibrierung läuft (SPC) |
| 0x03 | Kalibrierung temporär nIO |
| 0x04 | Kalibriermodus Rückfall (SPC) |
| 0x05 | Permanenter Kalibrierfehler |
| 0xFF | Wert ungültig |

### TAB_METHODE_SLI

| WERT | TEXT |
| --- | --- |
| 0x00 | Nur kamerabasierte Erkennung der Verkehrszeichen aktivieren |
| 0x01 | Nur kartenbasierte Erkennung der Verkehrszeichen aktivieren |
| 0x02 | Fusionierte Erkennung aktivieren |
| 0xFF | Auf Standard zurücksetzen |

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

### TAB_PHY_CONFIG

| WERT | TEXT |
| --- | --- |
| 0x00 | Master |
| 0x01 | Slave |

### TAB_PREFILL

| WERT | TEXT |
| --- | --- |
| 0x01 | keine Luftspielreduktion der Bremsanlage |
| 0x02 | Luftspielreduktion der Bremsanlage angefordert |

### TAB_PRERUN

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Ansteuerung |
| 0x01 | Ansteuerung Prerun |

### TAB_PROG_FLOW_ERR_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | TSM_ERROR_SEQUENCE_START  |
| 0x01 | TSM_ERROR_SEQUENCE_END |
| 0x02 | TSM_ERROR_TIME_WIN_START |
| 0x03 | TSM_ERROR_TIME_WIN_END |
| 0x04 | TSM_ERROR_INHIB_TIME_CRC |
| 0xFFFFFFFF | Wert ungültig |

### TAB_PROG_FLOW_ERR_TASK

| WERT | TEXT |
| --- | --- |
| 0x01 | PFE_TASK_1 |
| 0x02 | PFE_TASK_2 |
| 0x03 | PFE_TASK_3 |
| 0x04 | PFE_TASK_4 |
| 0x05 | PFE_TASK_5 |
| 0x06 | PFE_TASK_6 |
| 0x07 | PFE_TASK_7 |
| 0x08 | PFE_TASK_8 |
| 0x09 | PFE_TASK_9 |
| 0x10 | PFE_TASK_10 |
| 0xFF | Wert ungültig |

### TAB_PWR_SUP_ASIC_FAULT_REASON

| WERT | TEXT |
| --- | --- |
| 0x01 | PWR_SUP_ASIC_FAULT_REASON_1 |
| 0x02 | PWR_SUP_ASIC_FAULT_REASON_2 |
| 0x03 | PWR_SUP_ASIC_FAULT_REASON_3 |
| 0x04 | PWR_SUP_ASIC_FAULT_REASON_4 |
| 0x05 | PWR_SUP_ASIC_FAULT_REASON_5 |
| 0xFF | Wert ungültig |

### TAB_QUALIFIER_US

| WERT | TEXT |
| --- | --- |
| 0x2 | Funktion_Bereit |
| 0x3 | Funktion_Bereit_Degradiert |
| 0xA | Funktion_Aktiv |
| 0xB | Funktion_Aktiv_Degradiert |
| 0xE | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0x6 | Funktion_meldet_Fehler |
| 0xF | Signal_unbefuellt |

### TAB_QUAL_US_CCM_PFGS

| WERT | TEXT |
| --- | --- |
| 0x02 | Funktion bereit |
| 0x06 | Fehler |
| 0x0A | Funktion aktiv |
| 0x0E | Funktion nicht verfuegbar |

### TAB_RESET_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | reset in progress |
| 1 | reset completed |
| 0xFF | Wert ungültig |

### TAB_ROUTINE_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | CorrectResult |
| 0x01 | ECU already locked |
| 0xFF | Wert ungültig |

### TAB_ROUTINE_RESULT_LOCK_JTAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Successfully locked |
| 0x01 | ECU already locked |
| 0x02 | Keys not valid or not available |
| 0x03 | Mismatch in keys |
| 0xFF | Wert ungültig |

### TAB_ROUTINE_RESULT_LOCK_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Successfully |
| 0x01 | ECU not locked |
| 0x02 | Stored key is corrupted |
| 0xFF | Wert ungültig |

### TAB_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | positive |
| 0x01 | negative |

### TAB_SPC_CALIBRATION

| WERT | TEXT |
| --- | --- |
| 0x01 | SPC_UNAVAILABLE |
| 0x02 | SPC_ERROR |
| 0x03 | SPC_OK |
| 0x04 | SPC_CAL |
| 0x05 | SPC_TIMEOUT |
| 0x06 | SPC_PAUSED |
| 0xFF | Wert ungültig |

### TAB_SPC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | SPC_UNAVAILABLE |
| 0x01 | SPC_ERROR_ON_MAIN |
| 0x02 | SPC_OK |
| 0x03 | SPC_CAL |
| 0x04 | SPC_TIMEOUT |
| 0x05 | SPC_PAUSED |
| 0x06 | SPC_ERROR_TRANSFORM_NARROW |
| 0x07 | SPC_ERROR_TRANSFORM_FISHEYE |
| 0x08 | SPC_ERROR_TRANSFORM_NARROW_FISHEYE |
| 0xFF | Wert ungültig |

### TAB_SPTAC_PARAM

| WERT | TEXT |
| --- | --- |
| 01 | Start_Close_Target |
| 02 | Start_Far_Target |
| 03 | Start_Close_Target_Main |
| 04 | Start_Far_Target_Main |
| 05 | Start_Close_Target_Narrow |
| 06 | Start_Far_Target_Narrow |
| 07 | Start_Close_Target_Wide |
| 08 | Start_Far_Target_Wide |

### TAB_STATUS_FAIL_SAFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Not active |
| 0x01 | Active |
| 0x11 | Unknown |
| 0xFF | Wert ungültig |

### TAB_STATUS_SCHEIBENHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Heizung ist aus |
| 0x01 | Heizung in an und funktioniert richtig |
| 0x02 | Fehler Kurzschluss |
| 0x03 | Fehler Unterbrechung |
| 0x04 | Interner Fehler |
| 0xFF | Ungültiger Wert |

### TAB_STAT_EYEQ_INIT_COMPLETE

| WERT | TEXT |
| --- | --- |
| 0x00 | incomplete |
| 0x01 | complete |
| 0x02 | error |
| 0xFF | Wert ungültig |

### TAB_STAT_MCU_INIT_COMPLETE

| WERT | TEXT |
| --- | --- |
| 0x00 | incomplete |
| 0x01 | complete |
| 0x02 | error |
| 0xFF | Wert ungültig |

### TAB_STAT_READMODULETEMPERATURES

| WERT | TEXT |
| --- | --- |
| 0x00 | PCB Temperature |
| 0x01 | Aurix Die Temperature |
| 0x02 | EyeQ Die Temperature |
| 0x03 | Main Imager Temperature |
| 0x04 | Fisheye Imager Temperature (Valid only for TriCAM) |
| 0x05 | Narrow Imager Temperature (Valid only for the TriCAM) |
| 0xFF | Wert ungültig |

### TAB_STAT_TARGET_BOOT_UP_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | ERROR |
| 0x01 | VISION |
| 0x02 | TAC |
| 0x03 | SPTAC |
| 0x04 | SPC |
| 0x05 | DV_APP_BURN |
| 0x06 | SFR |
| 0x07 | STEREO |
| 0x08 | SP |
| 0x09 | VISION_MANF |
| 0x0A | SFR_NARROW |
| 0x0B | SFR_FISHEYE |
| 0x0C | IDS  |
| 0xFF | Wert ungültig |

### TAB_ST_CON_VEH

| WERT | TEXT |
| --- | --- |
| 0x0 | reserviert |
| 0x1 | Parken BN niO |
| 0x2 | Parken BN iO |
| 0x3 | Standfunktionen Kunde nicht im FZG |
| 0x5 | Wohnen |
| 0x7 | Pruefen Analyse Diagnose |
| 0x8 | Fahrbereitschaft herstellen |
| 0xA | Fahren |
| 0xC | Fahrbereitschaft beenden |
| 0xD | reserviert |
| 0xE | reserviert |
| 0xF | Signal unbefuellt |

### TAB_SYMBOL_US

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine_Warnung |
| 0x01 | Person_mittig_nah |
| 0x0B | Fahrzeug |
| 0x3D | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0x3E | Funktion_meldet_Fehler |
| 0x3F | Signal_unbefuellt |

### TAB_SETMOBILEYEMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | SPCalib |
| 0x01 | SFR_Main |
| 0x02 | SFR_Narrow |
| 0x03 | SFR_Fisheye |

### TAB_STATUS_ENABLING_CODE

| WERT | TEXT |
| --- | --- |
| 0x00 | EC_Operational |
| 0x01 | EC_Developement |
| 0x02 | EC_Error_State |
| 0x03 | EC_Off |
| 0x04 | EC_NA |
| 0xFF | Wert ungültig |

### TAB_STATUS_ENABLING_CODE_FLA

| WERT | TEXT |
| --- | --- |
| 0x00 | EC_Operational |
| 0x01 | EC_Prepared |
| 0x02 | EC_Error_State |
| 0x03 | EC_Off |
| 0x04 | EC_NA |
| 0x05 | EC_Not_Needed |
| 0xFF | Invalid value |

### TAB_SYSTEMSTATUSINFO

| WERT | TEXT |
| --- | --- |
| 0x00 | C_EYEQDG_EYEQ_NO_ERRORCODE |
| 0x01 | C_EYEQDG_EYEQ_VIDEOMSG_TIMEOUT |
| 0x02 | C_EYEQDG_EYEQ_VEH_MSG_TIMEOUT |
| 0x03 | C_EYEQDG_APPLICATION_SHUTDOWN_REQUEST |
| 0x04 | C_EYEQDG_SWITCH_APPLICATION_MODE_TRANSITION |
| 0x05 | C_EYEQDG_APPLICATION_TURN_OFF_EYEQ_REQUEST |
| 0x10 | C_EYEQDG_EYEQ_CAM_INIT_ERR |
| 0x11 | C_EYEQDG_EYEQ_I2C_TIMEOUT_ERR |
| 0x12 | C_EYEQDG_EYEQ_FM_FATAL_ERR |
| 0x13 | C_EYEQDG_EYEQ_FFS_INTGT_FAILURE |
| 0x14 | C_EYEQDG_EYEQ_DDR_CHIP_FAILURE |
| 0x15 | C_EYEQDG_EYEQ_FLASH_MEM_FAILURE |
| 0x16 | C_EYEQDG_EYEQ_APP_ERR_FAULT |
| 0x17 | C_EYEQDG_EYEQ_APP_INIT_ERR_FAULT |
| 0x18 | C_EYEQDG_EYEQ_BOOT_MSG_MISSING |
| 0x19 | C_EYEQDG_EYEQ_BIST_FAILURE |
| 0x1A | C_EYEQDG_EYEQ_VIDEO_ERR |
| 0x1B | C_EYEQDG_EYEQ_CAL_ERROR |
| 0x1C | C_EYEQDG_EYEQ_CAM_SELF_RESET |
| 0x1D | C_EYEQDG_EYEQ_IPC_SET_INIT_CAL_ERR |
| 0x1E | C_EYEQDG_EYEQ_IPC_DTP_ERR |
| 0x1F | C_EYEQDG_EYEQ_IPC_DEAD |
| 0x20 | C_EYEQDG_EYEQ_SYS_VERIFI_REQ_ERROR |
| 0x21 | C_EYEQDG_EYEQ_SYS_VERIFI_REQ_TRW_ERROR |
| 0x22 | C_EYEQDG_EYEQ_MESSAGE_SIZE_MISMATCH |
| 0x23 | C_EYEQDG_EYEQ_CMN_VERSION_ERROR |
| 0x24 | C_EYEQDG_EYEQ_OSM_VERSION_ERROR |
| 0x25 | C_EYEQDG_EYEQ_SAFETY_MSG_CRC_ERROR |
| 0x26 | C_EYEQDG_EYEQ_HLB_VERSION_ERROR |
| 0x27 | C_EYEQDG_EYEQ_FCW_AEB_VERSION_ERROR |
| 0x28 | C_EYEQDG_EYEQ_TSR_VERSION_ERROR |
| 0x29 | C_EYEQDG_EYEQ_I2C_VIDEO_GRAB_FAILED |
| 0x2A | C_EYEQDG_EYEQ_PLL_FAILURE |
| 0x2B | C_EYEQDG_EYEQ_PARITY_FAILURE |
| 0x2E | C_EYEQDG_EYEQ_TRW_SAFETY_CODE_CRC |
| 0x2F | C_EYEQDG_EYEQ_TRW_SAFETY_IMG_GRAB_MISS |
| 0x30 | C_EYEQDG_EYEQ_TRW_SAFETY_FCV_SIG_FFI |
| 0x31 | C_EYEQDG_EYEQ_TRW_SAFETY_AEB_PARAM_FFI |
| 0x32 | C_EYEQDG_EYEQ_INCREMENT_SYNC_FRAME_ERROR |
| 0x33 | C_EYEQDG_EYEQ_PV_GENERAL_FAULT |
| 0x34 | C_EYEQDG_EYEQ_PV_VERIFICATION_FAULT |
| 0x35 | C_EYEQDG_EYEQ_PLL_COMPARISON_FAULT |
| 0x36 | C_EYEQDG_EYEQ_RSP_VERSION_ERROR |
| 0x37 | C_EYEQDG_EYEQ_LB_VERSION_ERROR |
| 0x38 | C_EYEQDG_EYEQ_TFL_VERSION_ERROR |
| 0x39 | C_EYEQDG_EYEQ_TRW_SAFETY_VERSION_ERROR |
| 0x3A | C_EYEQDG_EYEQ_VL_VERSION_ERROR |
| 0x3B | C_EYEQDG_EYEQ_LDWS_VERSION_ERROR |
| 0x3C | C_EYEQDG_EYEQ_EMS_VERSION_ERROR |
| 0x3D | C_IPCDRV_SPI_PARTIAL_BYTE_FAILURE |
| 0x3E | C_EYEQDG_EYEQ_ODS_VERSION_ERROR |
| 0x3F | C_IPCDRV_SPI_BUFFER_MISALIGNMENT_ERROR |
| 0x40 | C_EYEQDG_EYEQ_MISSING_MSG_ERROR |
| 0x41 | C_EYEQDG_EYEQ_SLS_VERSION_ERROR |
| 0x42 | C_EYEQDG_EYEQ_HPP_VERSION_ERROR |
| 0x43 | C_EYEQDG_EYEQ_CAM_PARAMS_CCFT_CRC_FAILED |
| 0x44 | C_EYEQDG_EYEQ_APP_GVPU_STATE_TERMINA |
| 0x45 | C_EYEQDG_EYEQ_EBOOT_VERSION_ERROR |
| 0x46 | C_EYEQDG_EYEQ_APPLMSG_VERSION_ERROR |
| 0x47 | C_EYEQDG_EYEQ_GFHB_VERSION_ERROR |
| 0x48 | C_EYEQDG_EYEQ_MSG_TIMEOUT_INDICATION |
| 0x49 | C_EYEQDG_EYEQ_MODE_TRANSITION_ERROR |
| 0x4A | C_EYEQDG_BOARD_REVISION_MISMATCH_ERROR |
| 0x50 | C_EYEQDG_EYEQ_THERMAL_SHUTDOWN |
| 0x51 | C_EYEQDG_EYEQ_GPIO_BOOT_EYEQ_OVER_TEMP |
| 0x52 | C_EYEQDG_EYEQ_GPIO16_EYEQ_WARMUP_STATE |
| 0x53 | C_EYEQDG_EYEQ_GPIO16_EYEQ_CORE_DUMP |
| 0x54 | C_EYEQDG_RESET_EYEQ_FAIL_ERR |
| 0x55 | C_EYEQDG_EYEQ_MCD_CORE_DUMP_END |
| 0x56 | C_EYEQDG_EYEQ_MCD_DATA_READ_ERR |
| 0x57 | C_EYEQDG_EYEQ_GPIO16_EYEQ_INIT_CORE_DUMP |
| 0x60 | C_EYEQDG_EYEQ_IPC_ME_COMPATIBILITY |
| 0x61 | C_EYEQDG_EYEQ_IPC_ME_RESP_TIMEOUT |
| 0x62 | C_EYEQDG_EYEQ_IPC_RX_FCS_FAILURE |
| 0x63 | C_EYEQDG_EYEQ_IPC_RX_UNREG_PROT |
| 0x64 | C_EYEQDG_EYEQ_IPC_RX_UNREG_ID |
| 0x65 | C_EYEQDG_EYEQ_IPC_RX_FIRST_FRAME_ERR |
| 0x66 | C_EYEQDG_EYEQ_IPC_RX_RX_OVERRUN |
| 0x67 | C_EYEQDG_EYEQ_IPC_RX_FRAME_SEQ_ERROR |
| 0x68 | C_EYEQDG_EYEQ_IPC_APPL_BUFF_OVF |
| 0x69 | C_EYEQDG_EYEQ_IPC_GEN_ERR |
| 0x6A | C_EYEQDG_EYEQ_IPC_DRV_BUFF_OVF |
| 0x70 | C_EYEQDG_EYEQ_POWER_1V0_ERROR |
| 0x71 | C_EYEQDG_EYEQ_POWER_1V1_ERROR |
| 0x72 | C_EYEQDG_EYEQ_POWER_IMAGER_ERROR |
| 0x73 | C_EYEQDG_EYEQ_POWER_1V8_ERROR |
| 0x74 | C_EYEQDG_EYEQ_POWER_1V8DDR_ERROR |
| 0x75 | C_EYEQDG_EYEQ_POWER_3V3_NORMAL_ERROR |
| 0x76 | C_IOHWAB_PWMGR_POWER_5V0_ERROR |
| 0x77 | C_EYEQDG_EYEQ_POWER_3V3MAIN_ERROR |
| 0x78 | C_EYEQDG_EYEQ_POWER_3V3NARROW_ERROR |
| 0x79 | C_EYEQDG_EYEQ_POWER_3V3FISHEYE_ERROR |
| 0x80 | C_EYEQDG_EYEQ_SFR_VERSION_ERROR |
| 0x81 | C_EYEQDG_EYEQ_SPC_VERSION_ERROR |
| 0x82 | C_EYEQDG_EYEQ_SP_VERSION_ERROR |
| 0x83 | C_EYEQDG_EYEQ_SPTAC_VERSION_ERROR |
| 0x84 | C_EYEQDG_EYEQ_SENS_MSG_TIMEOUT |
| 0x85 | C_EYEQDG_EYEQ_RSDD_VERSION_ERROR |
| 0x86 | C_EYEQDG_EYEQ_RSDPD_VERSION_ERROR |
| 0x87 | C_EYEQDG_EYEQ_RSDS_VERSION_ERROR |
| 0x90 | C_EYEQDG_NVM_ERROR |
| 0x91 | C_EYEQDG_EYEQ_IPC_RX_FRAME_HDR_ERROR |
| 0x92 | C_EYEQDG_EYEQ_IPC_RX_FRAME_CRC_ERROR |
| 0x93 | C_EYEQDG_EYEQ_IPC_CONS_FRAME_NOT_RXED |
| 0x94 | C_EYEQDG_EYEQ_IPC_RX_IMPROPER_FRAME_SIZE |
| 0xB0 | C_EYEQDG_EYEQ_SAFETY_BIT_SET |
| 0xB1 | C_EYEQDG_EYEQ_MISSING_FIRST_CNR_ERROR |
| 0xB2 | C_EYEQDG_EYEQ_CHALLENGE_ERROR |
| 0xB3 | C_EYEQDG_EYEQ_WRONG_CNR_ERROR |
| 0xB4 | C_EYEQDG_EYEQ_SAFETY13_EGO_DATA_ERR |
| 0xB5 | C_EYEQDG_EYEQ_SAFETY26_CODE_CRC_ERR |
| 0xB6 | C_EYEQDG_EYEQ_SAFETY27_FCV_SIG_FFI_ERR |
| 0xB7 | C_EYEQDG_EYEQ_SAFETY31_AEB_PARAM_FFI_ERR |
| 0xB8 | C_EYEQDG_EYEQ_SAFETY32_IN_SIG_CORR_ERR |
| 0xB9 | C_IOHWAB_PWMGR_VBAT_NORMAL_ERROR |
| 0xBA | C_IOHWAB_PWMGR_BOARDREV_INVALID_ERROR |
| 0xBB | C_EYEQDG_EYEQ_FAILSAFE_ACTIVE |
| 0xBC | C_EYEQDG_EYEQ_PITCH_MISMATCH |
| 0xBD | C_EYEQDG_EYEQ_DATA_PATH_CORRUPTION |
| 0xBE | C_EYEQDG_EYEQ_PED_CORRUPTED_OUTPUTS |
| 0xBF | C_EYEQDG_EYEQ_PED_OVERLAP_FAULT |
| 0xC0 | C_EYEQDG_EYEQ_PED_SANITY_FAULT |
| 0xC1 | C_EYEQDG_EYEQ_PED_PREDICTION_VALIDATION |
| 0xC2 | C_EYEQDG_EYEQ_VD_CORRUPTED_OUTPUTS |
| 0xC3 | C_EYEQDG_EYEQ_VD_OVERLAP_FAULT |
| 0xC4 | C_EYEQDG_EYEQ_VD_SANITY_FAULT |
| 0xC5 | C_EYEQDG_EYEQ_VD_PREDICTION_VALIDATION |
| 0xC6 | C_EYEQDG_EYEQ_VMP_SANITY_FAILED |
| 0xC7 | C_EYEQDG_EYEQ_DBS_OVERLAP_FAULT |
| 0xC8 | C_EYEQDG_EYEQ_MSG_TIMEOUT |
| 0xC9 | C_EYEQDG_EYEQ_INVALID_REGION_CODE |
| 0xCA | C_IOHWAB_PWMGR_VBAT_INIT_ERROR |
| 0xCB | C_IOHWAB_PWMGR_3V3_INIT_ERROR |
| 0xCC | C_EYEQDG_EYEQ_ERROUT_FATAL_ERROR |
| 0xCD | C_EYEQDS_FS_MISALIGN_YAW_TIMEOUT_ERROR |
| 0xCE | C_EYEQDS_FS_MISALIGN_PITCH_TIMEOUT_ERROR |
| 0xCF | C_EYEQDS_FS_OOF_ERROR |
| 0xD0 | C_EYEQDG_INVALID_VEHICLE_SIGNALS_ERROR |
| 0xD1 | C_EYEQ_SBS_AUTHENTICATION_FAILED_ERROR |
| 0xD2 | C_IOHWAB_ADCDIAG_CONVERTER_ERROR |
| 0xD3 | C_IOHWAB_ADCDIAG_BROKEN_WIRE_ERROR |
| 0xD4 | C_IOHWAB_ADCDIAG_MULTIPLEXER_ERROR |
| 0xD5 | C_EYEQDG_EYEQ_VD_OVERLAP_FAULT_IND |
| 0xD6 | C_EYEQDG_EYEQ_PED_OVERLAP_FAULT_IND |
| 0xD7 | C_EYEQDG_EYEQ_PED_PREDICTION_VALIDATION_IND |
| 0xD8 | C_EYEQDG_EYEQ_VD_PREDICTION_VALIDATION_IND |
| 0xD9 | C_EYEQDG_EYEQ_DBS_OVERLAP_FAULT_IND |
| 0xDA | C_EYEQDG_EYEQ_SAFETY27_FCV_SIG_FFI_ERR_IND |
| 0xDB | C_IOHWAB_DIODIAG_FATAL_ERROR |
| 0xDC | C_IOHWAB_DIODIAG_SHORT2GND_ERROR |
| 0xDD | C_IOHWAB_DIODIAG_SHORT2HIGH_ERROR |
| 0xDE | C_IOHWAB_DIODIAG_OVERTEMP_ERROR |
| 0xE0 | C_EYEQDG_BOOT_TIMEOUT_BIST |
| 0xE1 | C_EYEQDG_BOOT_TIMEOUT_BOOTAUTH |
| 0xE2 | C_EYEQDG_BOOT_TIMEOUT_RAMINIT |
| 0xE3 | C_EYEQDG_BOOT_TIMEOUT_APPAUTH |
| 0xE4 | C_EYEQDG_BOOT_TIMEOUT_DDRTEST |
| 0xE5 | C_EYEQDG_BOOT_SEQUENCE_ERROR_BIST |
| 0xE6 | C_EYEQDG_BOOT_SEQUENCE_ERROR_BOOTAUTH |
| 0xE7 | C_EYEQDG_BOOT_SEQUENCE_ERROR_RAMINIT |
| 0xE8 | C_EYEQDG_BOOT_SEQUENCE_ERROR_APPAUTH |
| 0xE9 | C_EYEQDG_BOOT_SEQUENCE_ERROR_DDRTEST |
| 0xEA | C_EYEQDG_BOOT_DDR_TEST_FIRST_FAILURE |
| 0xEB | C_EYEQDG_BOOT_DDR_TEST_FAILURE |
| 0xEC | C_EYEQDG_BOOT_PERM_DDR_TEST_FAILURE |
| 0xED | C_EYEQDG_BOOT_BOOT_AUTH_FAILURE |
| 0xEE | C_EYEQDG_BOOT_APP_AUTH_FAILURE |
| 0xEF | C_EYEQDG_BOOT_DDRTEST_INIT_FAILURE |
| 0xFE | C_EYEQDG_EYEQ_MCU_RESET_ERRORCODE |
| 0xFF | C_EYEQDG_EYEQ_ERRORCODE_UNAVAILABLE |

### TAB_TAC2_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | UNDEFINED |
| 1 | SUCCESS |
| 2 | TARGET_NOT_FOUND |
| 3 | ROLL_ANGLE_TOO_LARGE |
| 4 | FOE_OUT_OF_TOLERANCE |
| 5 | PARAMS_LOAD_FAILED |
| 6 | BAD_PARAMS_DISTANCE |
| 7 | BAD_PARAMS_SQUARE_SIDE_SIZE |
| 8 | BAD_PARAMS_TARGET_YAW |
| 9 | BAD_PARAMS_TARGET_HORIZON |
| 10 | TOO_MANY_TARGETS |
| 11 | RUN_ERROR |
| 0xFF | Wert ungültig |

### TAB_TYP_CCMELDUNG

| WERT | TEXT |
| --- | --- |
| 0 | Aus |
| 1 | Sende die CC-Meldung für schlechte Sicht CCM (ID 783d) |
| 2 | Sende die CC-Meldung für schlechte Sicht PPP (ID 851d) |
| 3 | Sende die CC-Meldungen für schlechte Sicht CCM und PPP gleichzeitig |
| 4 | Sende die CC-Meldung für die ausgefallene Funktion CCM (ID 595d) |
| 5 | Sende die CC-Meldung für die ausgefallene Funktion PPP (ID 849d) |
| 6 | Sende die CC-Meldungen für die ausgefallenen Funktionen CCM und PPP gleichzeitig |

### TAB_TRANSFORMER_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | HARD_ERROR |
| 0x02 | SOFT_ERROR |
| 0x03 | LIB_ERROR |
| 0xFF | Wert ungültig |

### TAB_UFM_DATA

| WERT | TEXT |
| --- | --- |
| 0x00 | gültig |
| 0x01 | ungültig |
| 0x02 | reduziert |
| 0xFF | Wert ungültig |

### TAB_UWB_CALIB_TRW_FAILURE_CODE

| WERT | TEXT |
| --- | --- |
| 0x00 | SPC_ERROR_ON_MAIN |
| 0x01 | SPC_TIMEOUT |
| 0x02 | SPC_ERROR_TRANSFORM_NARROW |
| 0x03 | SPC_ERROR_TRANSFORM_FISHEYE |
| 0x04 | SPC_ERROR_TRANSFORM_NARROW_FISHEYE |
| 0x05 | selfGlare |
| 0x06 | sunRay |
| 0x07 | splashes |
| 0x08 | blurImage |
| 0x09 | lowSun |
| 0x10 | smearedSpots |
| 0x11 | partialTransparentBlockage |
| 0x12 | outOfCalibration_yaw |
| 0x13 | outOfCalibration_horizon |
| 0x14 | Calibration_Misalignment |
| 0x15 | fullBlockage |
| 0x16 | smearedHalos |
| 0x17 | foggyLights |
| 0x18 | outOfFocus |
| 0x19 | frozenWindshield |
| 0x20 | rain |
| 0x21 | Height_Violation_TooLow |
| 0x22 | Height_Violation_TooHigh |
| 0xFF | Wert ungültig |

### TAB_UWB_ERROR_CODING_LOCATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Aurix + EyeQ |
| 0x01 | Aurix |
| 0x02 | EyeQ |
| 0xFF | Wert ungültig |

### TAB_UWB_FSC_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x0 | EC_Operational |
| 0x1 | EC_Development |
| 0x2 | EC_Error_State |
| 0x3 | EC_Off |
| 0x4 | EC_NA |
| 0xFF | Wert ungültig |

### TAB_UWB_NON_AVAILABILITY_REASON

| WERT | TEXT |
| --- | --- |
| 0x00 | selfGlare |
| 0x01 | sunRay |
| 0x02 | splashes |
| 0x03 | blurImage |
| 0x04 | lowSun |
| 0x05 | smearedSpots |
| 0x06 | partialTransparentBlockage |
| 0x07 | outOfCalibration_yaw |
| 0x08 | outOfCalibration_horizon |
| 0x09 | Calibration_Misaligned |
| 0x0A | fullBlockage |
| 0x0B | smearedHalos |
| 0x0C | foggyLights |
| 0x0D | outOfFocus |
| 0x0E | frozenWindshield |
| 0x0F | rain |
| 0x10 | snow |
| 0x11 | fog |
| 0xFF | Wert ungültig |

### TAB_UWB_NOTIFICATION_EVENT_ID_0X9531_ACCELERATOR_PEDAL

| WERT | TEXT |
| --- | --- |
| 0x00 | AngleAcceleratorPedal |
| 0x01 | AngleAcceleratorPedal_MAX |
| 0xFF | Wert ungültig |

### TAB_UWB_TRANSFORMER_VALUE

| WERT | TEXT |
| --- | --- |
| 0x00 | No Library Error |
| 0x01 | E2E_P0XSTATUS_NONEWDATA |
| 0x02 | E2E_P0XSTATUS_WRONGCRC |
| 0x03 | E2E_P0XSTATUS_SYNC |
| 0x08 | E2E_P0XSTATUS_REPEATED |
| 0x20 | E2E_P0XSTATUS_OKSOMELOST |
| 0x40 | E2E_P0XSTATUS_WRONGSEQUENCE |
| 0x80 | E2E_P0XSTATUS_DATAINVALID |
| 0xFF | Wert ungültig |

### TAB_VFW_FUNKTIONSAUSPRAEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | HIGH Ausprägung mit Warnung auf rote Ampeln |
| 0x01 | MID Ausprägung ohne Warnung auf rote Ampeln |
| 0x02 | Signal unbefüllt |

### TAB_VOLTAGE_VALUE

| WERT | TEXT |
| --- | --- |
| 0x00 | Value of 5V0_PSU |
| 0x01 | Value of  3V3_PSU |
| 0x02 | Value of  3V3_Imager_Main |
| 0x03 | Value of  3V3_Imager_Narrow |
| 0x04 | Value of  3V3_Imager_Fisheye |
| 0x05 | Value of  1V8_PSU |
| 0x06 | Value of  1V5_PSU |
| 0x07 | Value of  1V1_PSU |
| 0x08 | Value of  1V0_PSU |
| 0x09 | String with all enable values |

### TAB_WARNUNG_US

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine_Warnung |
| 0x01 | Vorwarnung |
| 0x02 | Akutwarnung |
| 0x03 | Signal_unbefuellt |

### TAB_WEATHER_INDICATOR

| WERT | TEXT |
| --- | --- |
| 0 | Kein Regen/Schneefall/Nebel |
| 1 | Regen |
| 2 | Schnee |
| 3 | Nebel |
| 0xFF | Wert ungültig |

### TAB_WWA_EXTENDED_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x00 | normal mode |
| 1 | mode 1 |
| 2 | mode 2 |
| 3 | mode 3 |
| 4 | mode 4 |
| 5 | mode 5 |
| 6 | mode 6 |
| 7 | mode 7 |
| 8 | mode 8 |
| 9 | mode 9 |
| 0x0a | blockage |

### TAB_WWA_FCT_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x1 | Funktion bereit, im Land nicht verfuegbar |
| 0x2 | Funktion bereit |
| 0x3 | Funktion bereit - Degradiert |
| 0x6 | Funktion meldet Fehler |
| 0x9 | Funktion aktiv im Land nicht verfügbar |
| 0xA | Funktion aktiv |
| 0xB | Funktion aktiv - Degradiert |
| 0xE | Funktionsschnittstelle ist nicht verfuegbar |
| 0xF | Signal unbefuellt |

### TAB_WWA_MODE

| WERT | TEXT |
| --- | --- |
| 00 | OFF |
| 01 | Mode 1 |
| 02 | Mode 2 |

### TAB_WWA_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x00 | Data Available |
| 0x01 | data available reduced |
| 0x02 | data not available |

### TAB_WWA_RESYNC_EHR

| WERT | TEXT |
| --- | --- |
| 00 | Dummy1 |
| 01 | Dummy2 |

### TAB_WWA_WARNUNG

| WERT | TEXT |
| --- | --- |
| 0x0 | keine Warnung |
| 0x7 | Akutwarnung Einfahrtverbotsschild |
| 0x8 | Vorwarnung Einfahrtverbotsschild |
| 0xD | Funktionsschnittstelle nicht verfuegbar |
| 0xE | Funktion meldet Fehler |
| 0xF | Signal unbefuellt |

### TAB_0X1753

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0023 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 | 0x0021 | 0x0022 |

### TAB_0X4035

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0010 | 0x0011 | 0x0012 |

### TAB_0X4610

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x009B | 0x009C | 0x009D | 0x009E | 0x009F | 0x00A0 | 0x00A1 | 0x00A2 | 0x00A3 | 0x00A4 | 0x00A5 |

### TAB_0X4611

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 25 | 0x00A6 | 0x00A7 | 0x00A8 | 0x00A9 | 0x00AA | 0x00AB | 0x00AC | 0x00AD | 0x00AE | 0x00AF | 0x00B0 | 0x00B1 | 0x00B2 | 0x00B3 | 0x00B4 | 0x00B5 | 0x00B6 | 0x00B7 | 0x00B8 | 0x00B9 | 0x000B | 0x000C | 0x000D | 0x0008 | 0x000E |

### TAB_0X4612

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x00BA | 0x00BB | 0x00BC | 0x00BD | 0x00BE | 0x00BF | 0x00C0 | 0x00C1 | 0x00C2 | 0x00C3 | 0x00C4 | 0x00C5 | 0x00C6 | 0x00C7 | 0x00C8 | 0x000F |

### TAB_0X4613

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0060 | 0x0061 |

### TAB_0X4614

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR | UW27_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 27 | 0x0062 | 0x0063 | 0x0064 | 0x0065 | 0x0066 | 0x0067 | 0x0068 | 0x0069 | 0x006A | 0x006B | 0x006C | 0x006D | 0x006E | 0x006F | 0x0070 | 0x0071 | 0x0072 | 0x0073 | 0x0074 | 0x0075 | 0x0076 | 0x0077 | 0x0078 | 0x0079 | 0x007A | 0x007B | 0x0009 |

### TAB_0X4615

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 0x007C | 0x007D | 0x007E | 0x007F | 0x0080 | 0x0081 | 0x0082 | 0x0083 | 0x0084 | 0x0085 | 0x0086 | 0x000A |

### TAB_0X4616

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | 0x0087 | 0x0088 | 0x0089 | 0x008A | 0x008B | 0x008C | 0x008D | 0x008E | 0x008F | 0x0090 | 0x0091 | 0x0092 | 0x0093 | 0x0094 | 0x0095 | 0x0096 | 0x0097 | 0x0098 | 0x0099 | 0x009A |

### TAB_0X4617

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | 0x003B | 0x003C | 0x003D | 0x003E | 0x003F | 0x0040 | 0x0041 | 0x0042 | 0x0043 | 0x0044 | 0x0045 | 0x0046 | 0x0047 | 0x0048 | 0x0049 | 0x004A | 0x004B | 0x004C | 0x004D | 0x004E | 0x004F |

### TAB_0X4618

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x0050 | 0x0051 | 0x0052 | 0x0053 | 0x0054 | 0x0055 | 0x0056 | 0x0057 | 0x0058 | 0x0059 |

### TAB_0X4619

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x005A | 0x005B | 0x005C | 0x005D | 0x005E | 0x005F |

### TAB_0X461A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 18 | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 |

### TAB_0X461B

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0039 | 0x003A |

### TAB_0X461C

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0024 | 0x0025 |

### TAB_0X461E

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0026 | 0x0027 |

### TAB_0X461F

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D |

### TEMERATURE_EYEQ

| WERT | TEXT |
| --- | --- |
| 0x0 | TEMP_MONITOR_STATUS_IN_RANGE |
| 0x1 | TEMP_MONITOR_STATUS_UNDERTEMP |
| 0x2 | TEMP_MONITOR_STATUS_OVERTEMP |
| 0x3 | TEMP_MONITOR_STATUS_ERROR |
| 0xFF | Wert ungültig |

### TEMPERATURE_EYEQ

| WERT | TEXT |
| --- | --- |
| 0x0 | TEMP_MONITOR_STATUS_IN_RANGE |
| 0x1 | TEMP_MONITOR_STATUS_UNDERTEMP |
| 0x2 | TEMP_MONITOR_STATUS_OVERTEMP |
| 0x3 | TEMP_MONITOR_STATUS_ERROR |
| 0xFF | Wert ungültig |

### UWB_STATUS_KAFAS_SYSTEM_STATE

| WERT | TEXT |
| --- | --- |
| 0x0 | AURIX_STATE_STANBY_AURIX_OFF |
| 0x1 | AURIX_STATE_INIT |
| 0x2 | AURIX_STATE_WINDSHIELD_HEATING |
| 0x3 | AURIX_STATE_STARTUP_EYEQ |
| 0x4 | AURIX_STATE_CALIB_EYEQ |
| 0x5 | AURIX_STATE_OPERATIONAL |
| 0x6 | AURIX_STATE_ERROR |
| 0x7 | AURIX_STATE_TEMPORAL_ERROR |
| 0x8 | AURIX_STATE_THERMAL_ERROR |
| 0x9 | AURIX_STATE_VOLTAGE_ERROR |
| 0xA | AURIX_STATE_FETRAFLA |
| 0xB | AURIX_STATE_DYNO_EOL_FACTORY |
| 0xC | AURIX_STATE_SHUTDOWN |
| 0xD | AURIX_STATE_CODING |
| 0xE | AURIX_STATE_TRWPRODUCTION |
| 0xF | AURIX_STATE_UNDEFINED |
| 0xFF | Wert_ungueltig |

### WARNARTEN_VFW

| WERT | TEXT |
| --- | --- |
| 0x0 | keine (Akut)Warnung |
| 0x1 | Akutwarnung rote Ampel |
| 0x2 | Akutwarnung Stoppschild |
| 0x3 | Akutwarnung Vorfahrt gewaehren Schild |
| 0x4 | Vorwarnung rote Ampel |
| 0x5 | Vorwarnung Stoppschild |
| 0x6 | Vorwarnung Vorfahrt gewaehren Schild |
| 0xD | Funktionsschnittstelle nicht verfuegbar |
| 0xE | Funktion meldet Fehler |
| 0xF | Signal unbefuellt |
