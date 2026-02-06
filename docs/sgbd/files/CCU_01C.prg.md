# CCU_01C.prg

## General

|  |  |
| --- | --- |
| File | CCU_01C.prg |
| Type | PRG |
| Jobs | 40 |
| Tables | 267 |
| Origin | BMW EA-451 Bjoern_Cullmann |
| Revision | 0.003 |
| Author | BMW EA-402 Castellnou |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Combined Charger Unit, inkompatible Änderung |  |  |
| ORIGIN | string | BMW EA-451 Bjoern_Cullmann |  |  |
| REVISION | string | 0.003 |  |  |
| AUTHOR | string | BMW EA-402 Castellnou |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.989 |  |  |
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

### STEUERN_IO

Vorgeben eines Status UDS  : $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'RCTECU' = returnControlToECU 'RTD'    = resetToDefault 'FCS'    = freezeCurrentState 'STA'    = shortTermAdjustment optionales Argument Wenn nicht angegeben, dann kein InputOutputControlParameter im Request |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

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

### FS_LESEN_PERMANENT

permanente Fehler aus Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $15 ReportDTCWithPermanentStatus Modus: Default

_No arguments._

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

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

_No arguments._

### ECU_UID_LESEN

Auslesen der ECU-UID UDS   : $22   ReadDataByIdentifier UDS   : $8000 Sub-Parameter ECU-UID

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### STATUS_LCS_READ

Read Locking Configuration Switches UDS  : $22   ReadDataByIdentifier UDS  : $1104 Data Identifier Modus  : Default

_No arguments._

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

_No arguments._

### STEUERN_ETH_LEARN_PORT_CONFIGURATION

Stores the current link state (link up/link down) of all external ports of the ecu. The stored port configuration can then be used to detect missing, or additional ECUs during runtime. UDS   : $31 RoutineControl $01 StartRoutine $1040

_No arguments._

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

### STATUS_CERTIFICATE_MANAGEMENT_READOUT_STATUS

This job reads out the status of the certificate management extensive check

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
| 0x01 | ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | invalid |
| 0x04 | insync, ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | ms ECU overall, comparable |
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

### ARG_0X0F2B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FEATURE_ID | + | - | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Feature ID Byte 1: Type of Feature ID Byte 2-3: App-No or Transition-No |

### ARG_0X0F2D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FEATURE_ID | + | - | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Feature ID Byte 1: Type of Feature ID Byte 2-3: App-No or Transition-No |

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

### ARG_0X104F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NW_INTERFACE_INDEX | + | - | 0-n | high | unsigned char | - | TAB_NW_INTERFACE_INDEX | - | - | - | - | - | Index des Netzwerkinterfaces, für welches der aktuelle DHCP Status zurück gegeben werden soll. Die Nummerierungsreihenfolge muss der Reihenfolge von ETH_IP_CONFIGURATION (RID 0x1045) entsprechen. |

### ARG_0X1104_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LCS_NUMBER | 0-n | high | signed char | - | TAB_LCS_NUMBER | - | - | - | - | - | Locking Configuration Switch Number 0x02 - 0x63: reserviert für Systemfunktionen 0x64 - 0xFE: reserviert für individuelle Funktionen |
| LCS_VALUE | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Der neue Wert des LCS (Locking Configuration Switch). |

### ARG_0X1105_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NEW_COUNTER_VALUE | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert des Counters. |

### ARG_0XA153_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_BA_ELUE_LIN | + | - | 0-n | high | unsigned char | - | TAB_SW_BA_ELUE_LIN | - | - | - | - | - | Sollwert Betriebsmodus0: Drehzahlgeregelter Betrieb1: Autarke Luftdichtekompensation2: Autarker Luefterbetrieb3: Rekuperation4: Vorhalt 15: Vorhalt 26: Vorhalt 37: ungueltiger Wert |

### ARG_0XAE7A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LADEHISTOGRAMM_LOESCHEN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen des Histogramms und Zählers aller Ladevorgänge: 0 = Nein; 1 = Ja |

### ARG_0XAE7B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAEUFIGKEIT_LADEHISTORIE_LOESCHEN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen der Historie für die letzten 4 Ladevorgänge: 0 = Nein; 1 = Ja |

### ARG_0XDB47_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANFORDERUNG_AC_I_LIMIT_AMPERE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Anforderung für das Setzen der Stromgrenzen:  0 = Kein Setzen;  1 = Setzen; |
| AC_STROM_LIMIT_AMPERE | A | high | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 64.0 | Stromgrenze für AC-Laden |

### ARG_0XE407_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VORGABE_LADEN_ABK_AKUSTIKBEGRENZUNG | 0-n | high | unsigned char | - | TAB_LADEN_ABK_AKUSTIKBEGRENZUNG | - | - | - | - | - | Vorgabe Akustikbegrenzung beim externen Laden |

### ARG_0XE408_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VORGABE_LADEN_ABK_BATTERIESCHONUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Vorgabe Schonung der HV-Batterie beim externen Laden inaktiv. 0x01: Vorgabe Schonung der HV-Batterie beim externen Laden aktiv. |

### ARG_0XE409_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VORGABE_LADEN_ABK_LADESTROMBEGRENZUNG_AC_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 128.0 | Vorgabe Ladestrombegrenzung beim externen AC Laden für jede Phase. |
| VORGABE_LADEN_ABK_LADESTROMBEGRENZUNG_AC_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Ladestrombegrenzung für externes AC Laden nicht aktiv 0x01: Ladestrombegrenzung für externes AC Laden aktiv |

### ARG_0XE40A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VORGABE_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Günstig Laden nicht aktiviert (entspricht Sofortladen) 0x01: Günstig Laden aktiviert |
| VORGABE_LADEN_ABK_ABFAHRTSZEIT_VORKONDITIONIERUNG_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Vorkonditionierung nicht aktiviert 0x01: Vorkonditionierung aktiviert |
| VORGABE_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_START_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 23.0 | Beginn des Zeitfensters für günstiges Laden (Stundenanteil) einstellen. |
| VORGABE_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_START_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 59.0 | Beginn des Zeitfensters für günstiges Laden (Minutenanteil) einstellen. |
| VORGABE_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_ENDE_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 23.0 | Ende des Zeitfensters für günstiges Laden (Stundenanteil) einstellen. |
| VORGABE_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_ENDE_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 59.0 | Ende des Zeitfensters für günstiges Laden (Minutenanteil) einstellen. |

### ARG_0XE40B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VORGABE_LADEN_ABK_LADEZIEL_SOE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe Ladeziel auf SoE für externes Laden setzen. |
| VORGABE_LADEN_ABK_LADEZIEL_REICHWEITE_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65535.0 | Vorgabe Ladeziel auf Reichweite für externes Laden setzen. |

### ARG_0XE4DC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EFAN_STATISTICS_RESET | 0/1 | high | signed char | - | - | - | - | - | - | - | Rücksetzanforderung der Statistikfunktion: 0x00: zurücksetzten 0x01: nicht zurücksetzten |

### ARG_0XE528_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MONTAGEMODUS_ANSTEUERUNG | 0-n | high | unsigned char | - | TAB_MONTAGEMODUS | - | - | - | - | - | Ansteuerung des Montagemodus |

### ARG_0XE532_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANF_WERKSLADEMODUS_NR | 0-n | high | unsigned char | - | TAB_STATUS_LADEMODUS_WERK | - | - | - | - | - | Aktuelle Auswahl Lademodus Werk |
| STAT_ZIEL_SOC_WERKSLADEMODUS_WERT | % | high | unsigned int | - | - | 512.0 | 1.0 | 0.0 | 0.0 | 100.0 | Eingestellter SOC der HV-Batterie für Lademodus Werk |

### ARG_0XE537_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ASW_ZV_LADEKLAPPE_AC_CCS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuerwert des ZV-Stellers der Ladeklappe des AC bzw. CCS-Ladeanschlusses (0x00: Entriegelt; 0x01: Verriegelt) |

### ARG_0XE539_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_LADEKLAPPE_DC | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuerwert des ZV-Stellers der Ladeklappe des DC-Ladeanschlusses (0x00: Entriegelt; 0x01: Verriegelt) |

### ARG_0XE563_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_LADEDOSE_AC_CCS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuerwert des ZV-Stellers der Ladedose des AC bzw. CCS-Ladeanschlusses (0x00: Entriegelt; 0x01: Verriegelt) |

### ARG_0XE570_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSWORT | HEX | high | unsigned long | - | - | - | - | - | - | - | Passwort zur Ausführung des Servicejobs |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=nicht ansteuern, 1=ansteuern |

### ARG_0XE5AD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HV_SYSTEM_HERUNTERFAHREN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Herunterfahren HV System wird eingeleitet: 0 = Nicht herunterfahren; 1 = Herunterfahren |
| HV_SYSTEM_HOCHFAHREN_ERNEUT_VERSUCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Einleitung eines neuen Versuchs das HV-System hochzufahren, wenn HV-System fehlerbedingt heruntergefahren ist: 0 = Nicht hochfahren; 1 = Hochfahren |

### ARG_0XE5AE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAG_DCDC_VORGABEN | 0-n | high | unsigned char | - | TAB_DIAG_DCDC_VORGABEN | - | - | - | - | - | Übernahme der Vorgaben des Diagnosejobs für die Steuerung des DC/DC-Wandlers |
| SOLL_BETRIEBSART | 0-n | high | unsigned char | - | TAB_HVPM_SOLL_BETRIEBSART | - | - | - | - | - | Soll-Betriebsart |
| SOLL_SPANNUNG_12V | V | high | unsigned int | - | - | 64.0 | 1.0 | 0.0 | 10.5 | 15.5 | Soll-Spannung auf 12V Seite |
| MIN_SPANNUNG_HV | V | high | unsigned int | - | - | 64.0 | 1.0 | 0.0 | 100.0 | 400.0 | Minimal zulässige HV Spannung |
| HV_LEISTUNGSANFORDERUNG | W | high | signed int | - | - | 1.0 | 10.0 | 0.0 | 0.0 | 3200.0 | HV-Leistungsanforderung an den Leistungskoordinator |

### ARG_0XE5AF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_SOLL_UMDREHUNG_EWP_LSE | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 250.0 | Soll Umdrehungszahl der Pumpe min 0 max 250 |

### ARG_0XE5B2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_DREIWEGEVENTIL_HVS_KREISLAUF | % | high | signed int | - | - | 81.92 | 1.0 | 0.0 | 0.0 | 100.0 | Sollwert fuer das Dreiwegeventil HVS Kreislauf |

### ARG_0XE5D1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BELEUCHTUNG_LADEDOSE_AC_CCS | 0-n | high | unsigned char | - | TAB_BELEUCHTUNG_LADEDOSE | - | - | - | - | - | Ansteuerwert der Beleuchtung der Ladedose des AC bzw. CCS-Ladeanschlusses |

### ARG_0XE5D3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_LADEDOSE_DC | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuerwert des ZV-Stellers der Ladedose des DC-Ladeanschlusses (0x00: Entriegelt; 0x01: Verriegelt) |

### ARG_0XE5D4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BELEUCHTUNG_LADEDOSE_DC | 0-n | high | unsigned char | - | TAB_BELEUCHTUNG_LADEDOSE | - | - | - | - | - | Ansteuerwert der Beleuchtung der Ladedose des DC-Ladeanschlusses |

### ARG_0XE5DD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTO_P_DEACTIVATE | 0-n | high | unsigned char | - | TAB_AUTO_P_DEACTIVATE | - | - | - | - | - | Aktivieren/Deaktivieren von AUTO-P.  Siehe Tabelle TAB_AUTO_P_DEACTIVATE.  |

### ARG_0XE680_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_E_LUEFTER | % | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 100.0 | Sollwert des E-Luefters |

### ARG_0XE681_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_REL_E_LUEFTER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | Sollwert Relais Elektrischer Luefter |

### ARG_0XE683_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_SOLL_UMDREHUNG_EWP_HVS | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 250.0 | Soll Umdrehungszahl der Pumpe min 0 max 250 |

### ARG_0XE685_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_AKKS_1 | % | high | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Sollwertvorgabe Klappe 1 |

### ARG_0XE686_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_AKKS_2 | % | high | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Sollwertvorgabe Klappe 2 |

### ARP_DISCARD_TYPE_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Existierender ARP Eintrag (identifiziert durch DISCARDED_ARP_ENTRY) wurde durch einen neuen Eintrag ersetzt |
| 0x01 | neuer Eintrag (identifiziert durch DISCARDED_ARP_ENTRY) wurde verworfen |
| 0xFF | Wert ungültig |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HWMODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_DERATING_STATUS_DCDC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DERATING_STATUS_DCDC_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Vorhalt Bit 00 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Vorhalt Bit 01 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Vorhalt Bit 02 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Vorhalt Bit 03 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Temperatur Derating (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Vorhalt Bit 05 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Vorhalt Bit 06 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Vorhalt Bit 07 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Vorhalt Bit 08 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Vorhalt Bit 09 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Niedriger Wirkungsgrad (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Vorhalt Bit 11 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | Vorhalt Bit 12 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Vorhalt Bit 13 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | Vorhalt Bit 14 (0= nicht aktiv; 1 = aktiv).  |
| STAT_DERATING_STATUS_DCDC_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | Vorhalt Bit 15 (0= nicht aktiv; 1 = aktiv).  |

### BF_ERROR_STATUS_DCDC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_STATUS_DCDC_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Hardware Fehler (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Unterspannung HV (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Überspannung HV (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Überstrom HV (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Unterspannung LV (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Überspannung LV (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Überstrom LV (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Übertemperatur (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Kommunikationsfehler (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Sollbetriebsart nicht möglich (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Sollspannung nicht erreichbar (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Vorhalt Bit 11 (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | Vorhalt Bit 12 (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | Vorhalt Bit 13 (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | Vorhalt Bit 14 (0= nicht aktiv; 1 = aktiv).  |
| STAT_ERROR_STATUS_DCDC_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | Vorhalt Bit 15 (0= nicht aktiv; 1 = aktiv).  |

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

### BF_FEHLER_STATUS_DC_DC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_DC_DC_HV_UNTERSPANNUNG | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Bit 1: Abschaltung aufgrund zu geringer HV-Spannung: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_HV_UEBERSPANNUNG | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Bit 2: Abschaltung aufgrund zu hoher HV-Spannung: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_UEBERTEMPERATUR | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Bit 7: Abschaltung aufgrund zu hoher Temperatur: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_BAUTEILSCHUTZ | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Bit 0: Abschaltung durch Bauteilschutzfunktion: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_HV_UEBERSTROM | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Bit 3: Abschaltung aufgrund zu hohem HV-Strom: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_LV_UNTERSPANNUNG | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Bit 4: Abschaltung aufgrund zu niedrieger 12V-Spannung: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_LV_UEBERSPANNUNG | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Bit 5: Abschaltung aufgrund zu hoher 12V-Spannung:  0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_LV_UEBERSTROM | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Bit 6: Abschaltung aufgrund zu hohem 12V-Strom: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_KOMMUNIKATIONSFEHLER | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Bit 8: Abschaltung aufgrund eines Kommunikationsfehlers: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_BETRIEBSMODUS_NICHT_MOEGLICH | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Bit 9: Abschaltung da der Betriebsmodus nicht möglich ist: 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_LV_SPANNUNG_NICHT_ERREICHBAR | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Bit 10: Abschaltung aufgrund nicht erreichbarer 12V-Spannung. 0=Nicht aktiv; 1=Aktiv |
| STAT_ERROR_DC_DC_SONSTIGER_FEHLER | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Bit 11: Abschaltung aufgrund eines sonstigen Fehlers: 0=Nicht aktiv; 1=Aktiv |

### BF_GRUND_LADEUNTERBRECHUNG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_LADEUNTERBRECHUNG_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Bit 0: Gewalttrennung des Steckers (konduktiv) / Thermische Überlastung (Induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Bit 1: AC-Spannung fehlt oder Netzverbindung instabil: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Bit 2: Stecker nicht verriegelt (konduktiv) / AC-Überstrom (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT3 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Bit 3: DC-Unterspannung (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT4 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Bit 4: DC-Überspannung (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT5 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Bit 5: DC-Überstrom (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT6 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Bit 6: Lebendes Objekt erkannt (induktiv): 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_LADEUNTERBRECHUNG_BIT7 | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Bit 7: Kommunikation unterbrochen (induktiv): 0=Nicht aktiv; 1=Aktiv |

### BF_HV_START_FEHLER

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_HV_START_FEHLER_ISO_WARN | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | Isolationswarnung: 0 = Nicht aktiv; 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_ISO_FEHLER | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Isolationsfehler: 0 = Nicht aktiv; 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_EINFACHER_SCHUETZKLEBER | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Einfacher Schützkleber: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_DOPPELTER_SCHUETZKLEBER | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Doppelter Schützkleber: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_INTERLOCK_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | Interlock-Fehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_INTERLOCK_FEHLER | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | Interlock-Fehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_SERVICE_DISCONNECT | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | Service Disconnect abgesteckt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_KAT_6_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | HV-Batterie Kategorie-6-Fehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_KAT_6_FEHLER | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | HV-Batterie Kategorie-6-Fehler: 0 = Nicht aktiv, 1 = Aktiv  |
| STAT_BF_HV_START_FEHLER_KAT_7_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | HV-Batterie Kategorie-7-Fehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_KAT_7_FEHLER | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | HV-Batterie Kategorie-7-Fehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_HVB_KOMM_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | HV-Batterie Kommunikationsfehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_HVB_KOMM_FEHLER | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | HV-Batterie Kommunikationsfehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_LE_KOMM_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | Leistungselektronik Kommunikationsfehlerverdacht: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_LE_KOMM_FEHLER | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | Leistungselektronik Kommunikationsfehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_KLIMA_KOMM_FEHLER | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | Klimaanlage Kommunikationsfehler: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_ENTLADESCHUTZ | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | Entladeschutz aktiv: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_CRASH_SCHWERE_1 | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | Crash der Schwere 1 erkannt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_CRASH_SCHWERE_2 | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | Crash der Schwere 2 erkannt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_FLASH_ECU | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | Flashen der ECU erkannt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_HV_AUS | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | HV-System sicher heruntergefahren und spannungsfrei: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_NACHLAUF_KL30B | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | Nachlaufzeit der Klemme 30b kritisch: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_REQUEST_HV_POWERDOWN_JOB | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | Anforderung zum Herunterfahren des HV-Systems aufgrund von Diagnose-Job: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_REQUEST_HV_POWERDOWN | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | Anforderung zum Herunterfahren des HV-Systems aufgrund von Power-Down-Mode: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_HV_START_FEHLER_HV_BATTERIE_KAT1_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | HV-Batterie Kategorie-1-Fehlerverdacht: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_HV_START_FEHLER_HV_BATTERIE_KAT1_FEHLER | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | HV-Batterie Kategorie-1-Fehler: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_HV_START_FEHLER_HV_BATTERIE_KAT5_FEHLERVERDACHT | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | HV-Batterie Kategorie-5-Fehlerverdacht: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_HV_START_FEHLER_HV_BATTERIE_KAT5_FEHLER | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | HV-Batterie Kategorie-5-Fehler: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_HV_START_FEHLER_BATTERIELOSER_BETRIEB | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | Batterieloser Betrieb: 0=Nicht angefordert; 1=Angefordert |
| STAT_BF_HV_START_FEHLER_ABSCHALTUNG_FID | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | HV-System-Abschaltung per FID: 0=Nicht angefordert; 1=Angefordert |

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

### BF_STATUS_LSC_AUSWAHL_LADEN_MODUS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LSC_AUSWAHL_LADEN_MODUS_BIT0 | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 0 = Laden auf Abfahrtszeit aktiv; 1 = Immer_Sofort_Laden |
| STAT_LSC_AUSWAHL_LADEN_MODUS_BIT1 | 0/1 | high | unsigned char | 0x02 | - | - | - | - | 0 = Günstig Laden inaktiv; 1 = Günstig Laden aktiv (wenn Laden_auf_Abfahrtszeit aktiv; andernfalls in HMI nur vorausgewählt) |
| STAT_LSC_AUSWAHL_LADEN_MODUS_BIT2 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | 0 = Intelligent Laden inaktiv; 1 = Intelligent Laden aktiv, wenn Lademodus_auf_Abfahrtszeit aktiv; andernfalls in HMI nur vorausgewählt |

### BF_STAT_ISO_ERROR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_ISO_ERROR_DCDC_WANDLER | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | DCDC-12V-Wandler befindet sich im Buck-Mode: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_EMASCHINE_AKS | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Elektromaschine ist in AKS kommandiert: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_EMASCHINE_FREILAUF | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Elektromaschine ist in Freilauf kommandiert: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_LADEELEKTRONIK | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Ladeelektronik wurde als aktiv erkannt: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_EKMV | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | eKMV ist aktiv: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_EDH | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | eDH ist aktiv: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_HV_BATTERIE_ISOWARNUNG | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | HV-Batterie signalisiert eine Isolationswarnung: 0=Nicht aktiv; 1=Aktiv |
| STAT_BF_ISO_ERROR_HV_BATTERIE_ISOFEHLER | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | HV-Batterie signalisiert einen Isolationsfehler: 0=Nicht aktiv; 1=Aktiv |

### BF_STAT_VERSORGUNG_DC_DC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ST_DC_DC_12V_BN_VERSORGUNG | 0/1 | high | unsigned char | 0x01 | - | - | - | - | 12V-Bordnetz-Versorgung: 0=Nicht aktiv; 1=Aktiv |
| STAT_ST_DC_DC_WANDLER_AUSFALL | 0/1 | high | unsigned char | 0x02 | - | - | - | - | DC/DC-Wandler Ausfall: 0=Nicht aktiv; 1=Aktiv |
| STAT_ST_DC_DC_HV_VERFUEGBARKEIT | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Eingeschränkte HV-Energieverfügbarkeit / Anfrage Energiesparen: 0=Nicht aktiv; 1=Aktiv |
| STAT_ST_DC_DC_HV_LADEN | 0/1 | high | unsigned char | 0x08 | - | - | - | - | HV Laden: 0=Nicht aktiv; 1=Aktiv |

### BF_SYSTEMCHECK_AKKS_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKKS_1_COMDIAG_LIN_BIT_0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Status Kommunikationsdiagnose der AKKS1 LIN Botschaft (0= noch nicht durchgefuehrt oder Fehler erkannt, 1= beendet) |
| STAT_AKKS_1_COMDIAG_FRAME_BIT_1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Status Kommunikationsdiagnose auf AKKS1 Frame Fehler erkannt (0= noch nicht durchgefuehrt oder Fehler erkannt, 1= beendet) |
| STAT_AKKS_1_SPNG_INTERN_BIT_2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Spannungseigenfehler erkannt von AKKS1-LIN Steller (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_1_TEMP_INTERN_BIT_3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Temperatureigenfehler erkannt von AKKS1-LIN Steller (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_1_ELEKTRISCH_INTERN_BIT_4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Elektrischer Eigenfehler erkannt von AKKS1-LIN Steller (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_1_ANSCHLAGTST_ZU_BIT_5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Anschlagtest ZU (Anschlag nicht gefunden) bei AKKS1-LIN (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_1_ANSCHLAGTST_AUF_BIT_6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Anschlagtest AUF (Anschlag nicht gefunden) bei AKKS1-LIN (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_1_BLOCK_BIT_7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Verfahrbereichsprüfung (Blockiererkennung) bei der AKKS1-LIN (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_1_WERKSSYSTEMTEST_ENDE_BIT_8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | AKKS-Werkssystemtest durchgelaufen (0=nicht durchlaufen, 1 = durchlaufen) |
| STAT_AKKS_1_WERKSSYSTEMTEST_FUNKTION_BIT_9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | AKKS-Werkssystemtest Ergebnis (0=Fehler erkannt, 1 = kein Fehler erkannt) |

### BF_SYSTEMCHECK_AKKS_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKKS_2_COMDIAG_LIN_BIT_0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Status Kommunikationsdiagnose der AKKS2 LIN Botschaft (0= noch nicht durchgefuehrt oder Fehler erkannt, 1= beendet) |
| STAT_AKKS_2_COMDIAG_FRAME_BIT_1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Status Kommunikationsdiagnose auf AKKS2 Frame Fehler erkannt (0= noch nicht durchgefuehrt oder Fehler erkannt, 1= beendet) |
| STAT_AKKS_2_SPNG_INTERN_BIT_2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Spannungseigenfehler erkannt von AKKS2-LIN Steller (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_2_TEMP_INTERN_BIT_3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Temperatureigenfehler erkannt von AKKS2-LIN Steller (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_2_ELEKTRISCH_INTERN_BIT_4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Elektrischer Eigenfehler erkannt von AKKS2-LIN Steller (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_2_ANSCHLAGTST_ZU_BIT_5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Anschlagtest ZU (Anschlag nicht gefunden) bei AKKS2-LIN (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_2_ANSCHLAGTST_AUF_BIT_6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Anschlagtest AUF (Anschlag nicht gefunden) bei AKKS2-LIN (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_2_BLOCK_BIT_7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Verfahrbereichsprüfung (Blockiererkennung) bei der AKKS2-LIN (0=noch nicht durchgefuehrt oder Fehler erkannt; 1= beendet) |
| STAT_AKKS_2_WERKSSYSTEMTEST_ENDE_BIT_8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | AKKS-Werkssystemtest durchgelaufen (0=nicht durchlaufen, 1 = durchlaufen) |
| STAT_AKKS_2_WERKSSYSTEMTEST_FUNKTION_BIT_9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | AKKS-Werkssystemtest Ergebnis (0=Fehler erkannt, 1 = kein Fehler erkannt) |

### BF_UWB_DERATING_LADEMODUL_SLE_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIMITATION_CAUSE_SLE_1_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Temperatur |
| STAT_LIMITATION_CAUSE_SLE_1_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | reserved Bit 1 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | reserved Bit 2  |
| STAT_LIMITATION_CAUSE_SLE_1_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | reserved Bit 3 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | reserved Bit 4 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | reserved Bit 5 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | reserved Bit 6 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | reserved Bit 7 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | AC-Spannungsausfall |
| STAT_LIMITATION_CAUSE_SLE_1_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | reserved Bit 9 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | reserved Bit 10 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | reserved Bit 11    |
| STAT_LIMITATION_CAUSE_SLE_1_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | reserved Bit 12 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | reserved Bit 13 |
| STAT_LIMITATION_CAUSE_SLE_1_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | reserved Bit 14    |
| STAT_LIMITATION_CAUSE_SLE_1_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | reserved Bit 15 |

### BF_UWB_DERATING_LADEMODUL_SLE_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIMITATION_CAUSE_SLE_2_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Temperatur |
| STAT_LIMITATION_CAUSE_SLE_2_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | reserved Bit 1 |
| STAT_LIMITATION_CAUSE_SLE_2_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | reserved Bit 2  |
| STAT_LIMITATION_CAUSE_SLE_2_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | reserved Bit 3 |
| STAT_LIMITATION_CAUSE_SLE_2_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | reserved Bit 4   |
| STAT_LIMITATION_CAUSE_SLE_2_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | reserved Bit 5 |
| STAT_LIMITATION_CAUSE_SLE_2_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | reserved Bit 6  |
| STAT_LIMITATION_CAUSE_SLE_2_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | reserved Bit 7  |
| STAT_LIMITATION_CAUSE_SLE_2_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | AC-Spannungsausfall |
| STAT_LIMITATION_CAUSE_SLE_2_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | reserved Bit 9 |
| STAT_IMITATION_CAUSE_SLE_2_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | reserved Bit 10  |
| STAT_LIMITATION_CAUSE_SLE_2_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | reserved Bit 11 |
| STAT_LIMITATION_CAUSE_SLE_2_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | reserved Bit 12  |
| STAT_LIMITATION_CAUSE_SLE_2_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | reserved Bit 13 |
| STAT_LIMITATION_CAUSE_SLE_2_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | reserved Bit 14 |
| STAT_LIMITATION_CAUSE_SLE_2_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | reserved Bit 15 |

### BF_UWB_DERATING_LADEMODUL_SLE_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIMITATION_CAUSE_SLE_3_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Temperatur |
| STAT_LIMITATION_CAUSE_SLE_3_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | reserved Bit 1 |
| STAT_LIMITATION_CAUSE_SLE_3_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | reserved Bit 2 |
| STAT_LIMITATION_CAUSE_SLE_3_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | reserved Bit 3  |
| STAT_LIMITATION_CAUSE_SLE_3_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | reserved Bit 4  |
| STAT_LIMITATION_CAUSE_SLE_3_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | reserved Bit 5  |
| STAT_LIMITATION_CAUSE_SLE_3_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | reserved Bit 6  |
| STAT_LIMITATION_CAUSE_SLE_3_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | reserved Bit 7 |
| STAT_LIMITATION_CAUSE_SLE_3_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | AC-Spannungsausfall |
| STAT_LIMITATION_CAUSE_SLE_3_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | reserved Bit 9  |
| STAT_LIMITATION_CAUSE_SLE_3_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | reserved Bit 10  |
| STAT_LIMITATION_CAUSE_SLE_3_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | reserved Bit 11   |
| STAT_LIMITATION_CAUSE_SLE_3_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | reserved Bit 12  |
| STAT_LIMITATION_CAUSE_SLE_3_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | reserved Bit 13  |
| STAT_LIMITATION_CAUSE_SLE_3_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | reserved Bit 14   |
| STAT_LIMITATION_CAUSE_SLE_3_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | reserved Bit 15 |

### BF_UWB_FEHLERURSACHE_LADEMODUL_SLE_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_CAUSE_SLE_1_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Hardwarefehler (Sensorausfall, Leitungsbruch, Kurzschluss, etc.) |
| STAT_ERROR_CAUSE_SLE_1_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Unterspannung AC |
| STAT_ERROR_CAUSE_SLE_1_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Überspannung AC |
| STAT_ERROR_CAUSE_SLE_1_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Überstrom AC |
| STAT_ERROR_CAUSE_SLE_1_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Unterspannung DC |
| STAT_ERROR_CAUSE_SLE_1_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Überspannung DC |
| STAT_ERROR_CAUSE_SLE_1_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Überstrom DC |
| STAT_ERROR_CAUSE_SLE_1_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Übertemperatur |
| STAT_ERROR_CAUSE_SLE_1_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Kommunikationsausfall |
| STAT_ERROR_CAUSE_SLE_1_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Soll-Betriebsart nicht möglich |
| STAT_ERROR_CAUSE_SLE_1_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Wirkungsgrad zu niedrig |
| STAT_ERROR_CAUSE_SLE_1_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Sonstige Gründe (Netzfrequenz, Feldfehler etc.) |
| STAT_ERROR_CAUSE_SLE_1_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | FUSI N-Line |
| STAT_ERROR_CAUSE_SLE_1_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | FUSI Difference of AC-current larger than 2A |
| STAT_ERROR_CAUSE_SLE_1_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | reserved Bit 14 |
| STAT_ERROR_CAUSE_SLE_1_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | reserved Bit 15 |

### BF_UWB_FEHLERURSACHE_LADEMODUL_SLE_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_CAUSE_SLE_2_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Hardwarefehler (Sensorausfall, Leitungsbruch, Kurzschluss, etc.) |
| STAT_ERROR_CAUSE_SLE_2_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Unterspannung AC |
| STAT_ERROR_CAUSE_SLE_2_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Überspannung AC |
| STAT_ERROR_CAUSE_SLE_2_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Überstrom AC |
| STAT_ERROR_CAUSE_SLE_2_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Unterspannung DC |
| STAT_ERROR_CAUSE_SLE_2_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Überspannung DC |
| STAT_ERROR_CAUSE_SLE_2_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Überstrom DC |
| STAT_ERROR_CAUSE_SLE_2_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Übertemperatur |
| STAT_ERROR_CAUSE_SLE_2_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Kommunikationsausfall |
| STAT_ERROR_CAUSE_SLE_2_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Soll-Betriebsart nicht möglich |
| STAT_ERROR_CAUSE_SLE_2_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Wirkungsgrad zu niedrig |
| STAT_ERROR_CAUSE_SLE_2_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Sonstige Gründe (Netzfrequenz, Feldfehler etc.) |
| STAT_ERROR_CAUSE_SLE_2_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | FUSI N-Line |
| STAT_ERROR_CAUSE_SLE_2_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | FUSI Difference of AC-current larger than 2A |
| STAT_ERROR_CAUSE_SLE_2_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | reserved Bit 14 |
| STAT_ERROR_CAUSE_SLE_2_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | reserved Bit 15 |

### BF_UWB_FEHLERURSACHE_LADEMODUL_SLE_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_CAUSE_SLE_3_BIT0 | 0/1 | high | unsigned int | 0x0001 | - | - | - | - | Hardwarefehler (Sensorausfall, Leitungsbruch, Kurzschluss, etc.) |
| STAT_ERROR_CAUSE_SLE_3_BIT1 | 0/1 | high | unsigned int | 0x0002 | - | - | - | - | Unterspannung AC |
| STAT_ERROR_CAUSE_SLE_3_BIT2 | 0/1 | high | unsigned int | 0x0004 | - | - | - | - | Überspannung AC |
| STAT_ERROR_CAUSE_SLE_3_BIT3 | 0/1 | high | unsigned int | 0x0008 | - | - | - | - | Überstrom AC |
| STAT_ERROR_CAUSE_SLE_3_BIT4 | 0/1 | high | unsigned int | 0x0010 | - | - | - | - | Unterspannung DC |
| STAT_ERROR_CAUSE_SLE_3_BIT5 | 0/1 | high | unsigned int | 0x0020 | - | - | - | - | Überspannung DC |
| STAT_ERROR_CAUSE_SLE_3_BIT6 | 0/1 | high | unsigned int | 0x0040 | - | - | - | - | Überstrom DC |
| STAT_ERROR_CAUSE_SLE_3_BIT7 | 0/1 | high | unsigned int | 0x0080 | - | - | - | - | Übertemperatur |
| STAT_ERROR_CAUSE_SLE_3_BIT8 | 0/1 | high | unsigned int | 0x0100 | - | - | - | - | Kommunikationsausfall |
| STAT_ERROR_CAUSE_SLE_3_BIT9 | 0/1 | high | unsigned int | 0x0200 | - | - | - | - | Soll-Betriebsart nicht möglich |
| STAT_ERROR_CAUSE_SLE_3_BIT10 | 0/1 | high | unsigned int | 0x0400 | - | - | - | - | Wirkungsgrad zu niedrig |
| STAT_ERROR_CAUSE_SLE_3_BIT11 | 0/1 | high | unsigned int | 0x0800 | - | - | - | - | Sonstige Gründe (Netzfrequenz, Feldfehler etc.) |
| STAT_ERROR_CAUSE_SLE_3_BIT12 | 0/1 | high | unsigned int | 0x1000 | - | - | - | - | FUSI N-Line |
| STAT_ERROR_CAUSE_SLE_3_BIT13 | 0/1 | high | unsigned int | 0x2000 | - | - | - | - | FUSI Difference of AC-current larger than 2A |
| STAT_ERROR_CAUSE_SLE_3_BIT14 | 0/1 | high | unsigned int | 0x4000 | - | - | - | - | reserved Bit 14 |
| STAT_ERROR_CAUSE_SLE_3_BIT15 | 0/1 | high | unsigned int | 0x8000 | - | - | - | - | reserved Bit 15 |

### BF_VERHINDERUNG_SPANNUNGSFREIHEIT_ANZEIGE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_EKMV_SCHWELLE | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | Spannung des elektrischen Kältemittelverdichters über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_INVERTER | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | Spannung des Inverters der Leistungselektronik: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_INVERTER_SCHWELLE | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | Spannung des Inverters der Leistungselektronik über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_HVB | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | Spannung der HV-Batterie: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_HVB_SCHWELLE | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | Spannung der HV-Batterie über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_DCDC | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | HV-Spannung des HV DC/12V DC Wandlers: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SPANNUNG_DCDC_SCHWELLE | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | HV Spannung HV DC/12V DC Wandler über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_GESCHWINDIGKEIT | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | Fahrzeuggeschwindigkeit: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_GESCHWINDIGKEIT_SCHWELLE | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | Fahrzeuggeschwindigkeit über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_DREHZAHL_EM | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | Drehzahl der Elektromaschine: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_DREHZAHL_EM_SCHWELLE | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | Drehzahl der E-Maschine über Schwellenwert: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_LADESTECKER_STATUS | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | Ladestecker ist gesteckt oder Status Ladestecker ist unbekannt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_INTERLOCK_HVB_STATUS | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | Interlock Status der HV-Batterie: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_INTERLOCK_HVB_GESCHLOSSEN | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | Interlock der HV-Batterie geschlossen: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_INTERLOCK_LE_STATUS | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | Status HV Interlock ermittelt in der Leistungselektronik: 0 = Gültig, 1 = Ungültig  |
| STAT_BF_VERH_SPANN_FREI_ANZ_INTERLOCK_LE_GESCHLOSSEN | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | HV Interlock der Leistungselektronik geschlossen: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SERVICE_DISCONNECT | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | Status Service Disconnect: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SERVICE_DISCONNECT_GESTECKT | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | Service Disconnect ist gesteckt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SCHUETZE_HVB | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | Status der Schütze in der HV-Batterie: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SCHUETZE_HVB_GESCHLOSSEN | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | Schütze der HV-Batterie sind geschlossen: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_SCHUETZKLEBER_HVB | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | Status Schützkleber der HV-Batterie: 0 = Gültig, 1 = Ungültig |
| STAT_BF_VERH_SPANN_FREI_ANZ_SCHUETZE_HVB_VERKLEBT | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | Schütze der HV-Batterie sind verklebt: 0 = Nicht aktiv, 1 = Aktiv |
| STAT_BF_VERH_SPANN_FREI_ANZ_KLEMME_15 | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | Status der emulierten Klemme 15: 0 = Nicht aktiv, 1 = Aktiv |

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

### ETHERNET_COMMUNICATION_FAILURE_STATUS

| WERT | TEXT |
| --- | --- |
| 0xFF | Wert ungültig |

### ETH_DROPPED_FRAME_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Frame wurde in den MAC's Rx Puffer verworfen |
| 0x02 | Frame wurde in den MAC's Tx Puffer verworfen |
| 0x03 | Frame wurde in einen Rx Softwarepuffer verworfen (z.B. TCP/IP Stack oder low-level Treiber) |
| 0x04 | Frame wurde in einen Tx Softwarepuffer verworfen (z.B. TCP/IP Stack oder low-level Treiber) |
| 0x10 | Rx Frame wurde in eine unbekannte Layer/Ort verworfen |
| 0x11 | Tx Frame wurde in eine unbekannte Layer/Ort verworfen  |
| 0xFF | Wert ungültig |

### ETH_LEARN_PORT_CONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x0 | Lernen erfolgreich |
| 0x1 | Lernen nicht erfolgreich oder noch nicht gelernt |

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
| 0x06 | put PHY in tx mode = SEND_Z (transmission of zero code groups) |

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
| 0x023A00 | Energiesparmode aktiv | 0 | - |
| 0x023A08 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x023A09 | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x023A0A | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x023A24 | NVM_E_HARDWARE | 0 | - |
| 0x023A36 | SecOC: Freshness Value Synchronisation fehlgeschlagen | 0 | - |
| 0x023A40 | Spannungsversorgung - Lokale Unterspannung | 0 | - |
| 0x023A41 | Spannungsversorgung - Lokale Überspannung | 0 | - |
| 0x023A46 | Spannungsversorgung - Lokal - Unplausibel | 0 | - |
| 0x023A70 | IPSEC_NICHT_INITIALISIERT | 0 | - |
| 0x023A71 | IPSEC_NICHT_VERRIEGELT | 0 | - |
| 0x023A80 | ZERTIFIKATE_UND_BINDINGS_TYP1_WERK_NICHT_BEREIT | 0 | - |
| 0x023A81 | ONLINE_ZERTIFIKATE_UND_BINDINGS_TYP2_NICHT_BEREIT | 0 | - |
| 0x023A82 | Secure Feature Activation: Tokenprüfung fehlgeschlagen | 0 | - |
| 0x023A83 | Secure Feature Activation: Tokenprüfung läuft aktuell oder ungeprüfte Tokens sind gespeichert | 0 | - |
| 0x023A84 | Locking Configuration Switch: Einer oder mehrere Schalter nicht gesetzt. | 0 | - |
| 0x023A85 | Secure ECU Modes: ECU not in field mode. | 0 | - |
| 0x023A90 | SecOC: Keypackprüfung fehlgeschlagen | 0 | - |
| 0x023A91 | SecOC: Bypass aktiv - Sichere Onboard Kommunikation deaktivert | 0 | - |
| 0x02FF3A | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x030F87 | DC/DC-Wandler, HV-Stromsensor: Schwellwert überschritten | 0 | - |
| 0x030F89 | DC/DC-Wandler - HV-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x030F8C | DC/DC-Wandler - LV Spannungssensor - Oberer Schwellwert überschritten | 0 | - |
| 0x030F8D | DC/DC-Wandler - LV Spannungssensor - Unterer Schwellwert unterschritten | 0 | - |
| 0x030F8E | DC/DC-Wandler - LV-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x030F91 | DC/DC-Wandler, LV-Stromsensor: Schwellenwert überschritten | 0 | - |
| 0x030F93 | DC/DC-Wandler - LV-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x030F96 | DC/DC-Wandler - Temperatursensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x030F97 | DC/DC-Wandler - Temperatursensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x030F98 | DC/DC-Wandler - Temperatursensor - Plausibilitätsfehler | 0 | - |
| 0x030FA6 | DC/DC-Wandler - LV-Spannungssensor - Sollspannung nicht erreicht | 0 | - |
| 0x030FA7 | DC/DC-Wandler - LV-Stromsensor - Plausibilitätsfehler 02 | 0 | - |
| 0x030FA8 | DC/DC-Wandler - Bauteilschutz - Übertemperatur | 0 | - |
| 0x030FA9 | DC/DC-Wandler, Bauteilschutz: HV-Spannung | 0 | - |
| 0x030FAA | DC/DC-Wandler, Bauteilschutz: HV-Strom | 0 | - |
| 0x030FAB | DC/DC-Wandler, Bauteilschutz: LV-Spannung | 0 | - |
| 0x030FAC | DC/DC-Wandler, Bauteilschutz: LV-Strom | 0 | - |
| 0x030FB3 | DC/DC-Wandler - Wirkungsgrad unplausibel | 0 | - |
| 0x030FB6 | DC/DC-Wandler, Bauteilschutz: Kühlmitteltemperatur | 0 | - |
| 0x030FB7 | DC/DC-Wandler, Bauteilschutz: Ausgangsanschlüsse vertauscht | 0 | - |
| 0x030FB8 | DC/DC-Wandler, Bauteilschutz: LV-Spannung-Eigendiagnose | 0 | - |
| 0x0317F0 | eAntrieb, Hochvoltsystem: Spannungsfreiheit nicht hergestellt | 0 | - |
| 0x0317F1 | eAntrieb, Hochvoltsystem: Isolationsfehler erkannt | 0 | - |
| 0x0317F2 | eAntrieb, Hochvoltsystem: Isolationswarnung erkannt | 0 | - |
| 0x031807 | AC-Laden, Modul 2, Digitaler Signalprozessor: Interner Fehler | 0 | - |
| 0x03180E | AC-Laden, Modul 1, Digitaler Signalprozessor: Interner Fehler | 0 | - |
| 0x03181E | AC-Laden, Modul 1:  Wirkungsgrad Signal unplausibel | 0 | - |
| 0x0318B5 | AC-Laden, Modul 2: Wirkungsgrad Signal unplausibel | 0 | - |
| 0x0318DA | AC-Laden, Modul 3: Wirkungsgrad unplausibel | 0 | - |
| 0x0318DE | AC-Laden, Modul 3, Digitaler Signalprozessor: Interner Fehler | 0 | - |
| 0x031942 | AC-Laden, Modul 1, Bauteilschutz: Sammelfehler | 0 | - |
| 0x031944 | AC-Laden, Modul 1, Plausibilität: Solleistung nicht erreicht | 0 | - |
| 0x031945 | AC-Laden, Modul 1, Vorladen: Funktion fehlerhaft | 0 | - |
| 0x031946 | AC-Laden, Modul 1: Sensor Sammelfehler | 0 | - |
| 0x031947 | AC-Laden, Modul 2, Bauteilschutz: Sammelfehler | 0 | - |
| 0x031948 | AC-Laden, Modul 2, Plausibilität: Solleistung nicht erreicht | 0 | - |
| 0x031949 | AC-Laden, Modul 2, Vorladen: Funktion fehlerhaft | 0 | - |
| 0x03194A | Power Line Communication: Kommunikation zum Modem gestört | 0 | - |
| 0x03194B | Power Line Communication: Verbindungsstörung, Ladesäule | 0 | - |
| 0x03194C | Power Line Communication: Protokollfehler | 0 | - |
| 0x03194D | AC-Laden, Modul 2: Sensor Sammelfehler | 0 | - |
| 0x03194E | AC-Laden, Modul 3, Bauteilschutz: Sammelfehler | 0 | - |
| 0x03194F | AC-Laden, Modul 3, Plausibilität: Solleistung nicht erreicht | 0 | - |
| 0x031951 | AC-Laden, Modul 3, Vorladen: Funktion fehlerhaft | 0 | - |
| 0x031952 | AC-Laden, Modul 3: Sensor Sammelfehler | 0 | - |
| 0x031953 | AC-Laden, Bauteilschutz: AC-Überspannung | 0 | - |
| 0x031954 | AC-Laden, Bauteilschutz: AC-Unterspannung | 0 | - |
| 0x031955 | AC-Laden, Bauteilschutz: DC-Überspannung | 0 | - |
| 0x031956 | AC-Laden, Bauteilschutz: DC-Unterspannung | 0 | - |
| 0x031957 | AC-Laden, Bauteilschutz: Sammelfehler | 0 | - |
| 0x031958 | AC-Laden, Bauteilschutz: Temperatur | 0 | - |
| 0x031959 | AC-Laden, Bauteilschutz: HV-Sicherheit | 0 | - |
| 0x032140 | Ladedose AC oder Combo, Beleuchtung: Oberer Schwellenwert überschritten | 0 | - |
| 0x032141 | Ladedose AC oder Combo, Beleuchtung: Unterer Schwellenwert unterschritten | 0 | - |
| 0x032142 | Ladedose AC oder Combo, Kommunikationsausfall | 0 | - |
| 0x032143 | Ladedose AC oder Combo, Spannungsversorgung: Überspannung | 0 | - |
| 0x032144 | Ladedose AC oder Combo, Spannungsversorgung: Unterspannung | 0 | - |
| 0x032145 | Ladedose AC oder Combo, Temperatursensor N: Oberer Schwellenwert überschritten | 0 | - |
| 0x032146 | Ladedose AC oder Combo, Temperatursensor N: Signal unplausibel | 0 | - |
| 0x032147 | Ladedose AC oder Combo, Temperatursensor N: Unterer Schwellenwert unterschritten | 0 | - |
| 0x032148 | Ladedose AC oder Combo, Temperatursensor L2: Oberer Schwellenwert überschritten | 0 | - |
| 0x032149 | Ladedose AC oder Combo, Temperatursensor L2: Signal unplausibel | 0 | - |
| 0x03214A | Ladedose AC oder Combo, Temperatursensor L2: Unterer Schwellenwert unterschritten | 0 | - |
| 0x03214B | Ladedose AC oder Combo, Verriegelungsaktor: Oberer Schwellenwert überschritten | 0 | - |
| 0x03214C | Ladedose AC oder Combo, Verriegelungsaktor: Unterer Schwellenwert unterschritten | 0 | - |
| 0x03214D | Ladedose AC oder Combo, Verriegelungssensor: Oberer Schwellenwert überschritten | 0 | - |
| 0x03214E | Ladedose AC oder Combo, Verriegelungssensor: Unterer Schwellenwert unterschritten | 0 | - |
| 0x03215E | Ladedose DC, Beleuchtung: Oberer Schwellenwert überschritten | 0 | - |
| 0x03215F | Ladedose DC, Beleuchtung: Unterer Schwellenwert unterschritten | 0 | - |
| 0x032160 | Ladedose DC, Kommunikationsausfall | 0 | - |
| 0x032161 | Ladedose DC, Spannungsversorgung: Überspannung | 0 | - |
| 0x032162 | Ladedose DC, Spannungsversorgung: Unterspannung | 0 | - |
| 0x032163 | Ladedose DC oder Combo, Temperatursensor DC plus: Oberer Schwellenwert überschritten | 0 | - |
| 0x032164 | Ladedose DC oder Combo, Temperatursensor DC plus: Unterer Schwellenwert unterschritten | 0 | - |
| 0x032165 | Ladedose DC oder Combo, Temperatursensor DC minus: Oberer Schwellenwert überschritten | 0 | - |
| 0x032166 | Ladedose DC oder Combo, Temperatursensor DC minus: Unterer Schwellenwert unterschritten | 0 | - |
| 0x03216B | Ladeklappe AC oder Combo, Positionssensor: Oberer Schwellenwert überschritten | 0 | - |
| 0x03216C | Ladeklappe AC oder Combo, Positionssensor: Unterer Schwellenwert unterschritten | 0 | - |
| 0x03216D | Ladeklappe AC oder Combo, Verriegelungsaktor: Funktionsprüfung fehlgeschlagen | 0 | - |
| 0x03216E | Ladeklappe AC oder Combo, Verriegelungsaktor: Oberer Schwellenwert überschritten | 0 | - |
| 0x03216F | Ladeklappe AC oder Combo, Verriegelungsaktor: Unterer Schwellenwert unterschritten | 0 | - |
| 0x032170 | Ladeklappe DC, Positionssensor: Oberer Schwellenwert überschritten | 0 | - |
| 0x032171 | Ladeklappe DC, Positionssensor: Unterer Schwellenwert unterschritten | 0 | - |
| 0x032172 | Ladeklappe DC, Verriegelungsaktor: Funktionsprüfung fehlgeschlagen | 0 | - |
| 0x032173 | Ladeklappe DC, Verriegelungsaktor: Oberer Schwellenwert überschritten | 0 | - |
| 0x032174 | Ladeklappe DC, Verriegelungsaktor: Unterer Schwellenwert unterschritten | 0 | - |
| 0x032175 | AC-Laden, Schaltmatrix: Fehlfunktion | 0 | - |
| 0x032189 | Ladedose AC oder Combo, Temperatursensor L1: Oberer Schwellenwert überschritten | 0 | - |
| 0x03218A | Ladedose AC oder Combo, Temperatursensor L1: Unterer Schwellenwert unterschritten | 0 | - |
| 0x03218B | Ladedose AC oder Combo, Temperatursensor L1: Signal unplausibel | 0 | - |
| 0x03218C | Ladedose AC oder Combo, Temperatursensor L3: Oberer Schwellenwert überschritten | 0 | - |
| 0x03218D | Ladedose AC oder Combo, Temperatursensor L3: Unterer Schwellenwert unterschritten | 0 | - |
| 0x03218E | Ladedose AC oder Combo, Temperatursensor L3: Signal unplausibel | 0 | - |
| 0x03218F | Ladedose AC oder Combo, Verriegelungsaktor: Funktionsprüfung fehlgeschlagen | 0 | - |
| 0x032190 | Ladedose AC oder Combo, Verriegelungssensor: Signal unplausibel | 0 | - |
| 0x032191 | Ladedose DC oder Combo, Temperatursensor DC plus: Signal unplausibel | 0 | - |
| 0x032192 | Ladedose DC oder Combo, Temperatursensor DC minus: Signal unplausibel | 0 | - |
| 0x032193 | Ladedose AC oder Combo, Entriegelungstasters Typ 1 oder China: Dauerbetätigung | 0 | - |
| 0x032194 | Ladeklappe AC oder Combo, Positionssensor: Zustand unplausibel | 0 | - |
| 0x032196 | Ladeklappe DC, Positionssensor: Zustand unplausibel | 0 | - |
| 0x032198 | Ladeschnittstelle AC oder Combo, Ladesteckererkennung: ungültig | 0 | - |
| 0x032199 | Ladeschnittstelle AC, Ladebereitschaft mit Ladesäule: nicht herstellbar | 0 | - |
| 0x03219A | Ladeschnittstelle AC oder Combo, Ladesteuerungssignale der Ladesäule: ungültig | 0 | - |
| 0x03219B | Ladeschnittstelle DC, Ladesteuerungssignale der Ladesäule: ungültig | 0 | - |
| 0x03219C | Ladeschnittstelle DC, Ladefehler durch Ladesäule erkannt | 0 | - |
| 0x03219D | Ladeschnittstelle DC, Ladefehler durch Fahrzeug erkannt | 0 | - |
| 0x03219E | Ladeschnittstelle DC, Ladesteckererkennung: ungültig | 0 | - |
| 0x032C40 | Betriebsstrategie Antrieb, Turtle Mode: kritische Degradation vorhanden | 0 | - |
| 0x032C41 | Betriebsstrategie Antrieb, Turtle Mode: Hochvolt-Batterie-Ladezustand zu niedrig | 0 | - |
| 0x032C46 | Antrieb, Fahrbereitschaft: Fahrbereitschaft nicht möglich aufgrund steckendem Ladekabel | 0 | - |
| 0x032C47 | Antrieb, Fahrbereitschaft: Fahrbereitschaft nicht möglich: nach Anforderung durch den Kunden | 1 | - |
| 0x032C4C | Antrieb, Segel-Rekuperations-Assistent: Assistent nicht verfügbar aufgrund defektem Radar | 0 | - |
| 0x032C4F | Antrieb,  Segel-Rekuperations-Assistent: Assistent nicht verfügbar aufgrund blindem Radar | 0 | - |
| 0x032C50 | Antrieb, Segel-Rekuperations-Assistent: Assistent nicht verfügbar aufgrund blinder Kamera | 0 | - |
| 0x033DC0 | Shift-by-Wire, FuSi: Falsche Fahrtrichtung | 0 | - |
| 0x033DC1 | Shift-by-Wire, FuSi: Falsche Positionsanzeige erkannt | 0 | - |
| 0x033DC2 | Shift-by-Wire, FuSi: Kommando ungewolltes Auslegen der Parksperre | 0 | - |
| 0x033DC3 | Shift-by-Wire, FuSi: Kommando ungewolltes Einlegen der Parksperre | 0 | - |
| 0x033DC4 | Shift-by-Wire, FuSi: Ungewolltes Auslegen der Parksperre erkannt | 0 | - |
| 0x033DC5 | Shift-by-Wire: Auto-N Rollen falsche Fahrtrichtung | 0 | - |
| 0x033DC6 | Shift-by-Wire: Auto-P deaktiviert | 0 | - |
| 0x033DC7 | Shift-by-Wire: FAS-Signalfehler bei aktivem FAS | 0 | - |
| 0x033DC8 | Shift-by-Wire: Parksperrenfehler Diebstahlschutz | 0 | - |
| 0x033DC9 | Shift-by-Wire: Parksperrenfehler über Qualifier gemeldet | 0 | - |
| 0x033DCA | Shift-by-Wire: Parksperre nicht ausgelegt | 0 | - |
| 0x033DCB | Shift-by-Wire: P bei hoher Fahrzeuggeschwindigkeit | 0 | - |
| 0x033DCC | Shift-by-Wire: P bei niedriger Fahrzeuggeschwindigkeit | 0 | - |
| 0x033DCD | Shift-by-Wire: P nicht eingelegt | 0 | - |
| 0x033DCE | Shift-by-Wire: Raddrehzahlen nicht plausibel zur EM-Drehzahl | 0 | - |
| 0x033DCF | Shift-by-Wire: Ungewolltes Einlegen der Parksperre erkannt | 0 | - |
| 0x224040 | Aktive Kühlluftklappensteuerung 01 - Lageregelung - Dauerhafte Blockierung | 0 | - |
| 0x224041 | Aktive Kühlluftklappensteuerung 01 - Lageregelung - Dauerhafte Blockierung Umgebungstemperatur warm | 0 | - |
| 0x224042 | Aktive Kühlluftklappensteuerung 01 - Lageregelung - Anschlag offen nicht erkannt | 0 | - |
| 0x224043 | Aktive Kühlluftklappensteuerung 01 - Lageregelung - Anschlag geschlossen nicht erkannt | 0 | - |
| 0x224044 | Aktive Kühlluftklappensteuerung 01 - Lageregelung - Regelabweichung Umgebungstemperatur warm | 0 | - |
| 0x224045 | Aktive Kühlluftklappensteuerung 01 - Lageregelung - Regelabweichung | 0 | - |
| 0x224046 | Aktive Kühlluftklappensteuerung 02 - Lageregelung - Dauerhafte Blockierung | 0 | - |
| 0x224047 | Aktive Kühlluftklappensteuerung 02 - Lageregelung - Dauerhafte Blockierung Umgebungstemperatur warm | 0 | - |
| 0x224048 | Aktive Kühlluftklappensteuerung 02 - Lageregelung - Anschlag offen nicht erkannt | 0 | - |
| 0x224049 | Aktive Kühlluftklappensteuerung 02 - Lageregelung - Anschlag geschlossen nicht erkannt | 0 | - |
| 0x22404A | Aktive Kühlluftklappensteuerung 02 - Lageregelung - Regelabweichung Umgebungstemperatur warm | 0 | - |
| 0x22404B | Aktive Kühlluftklappensteuerung 02 - Lageregelung - Regelabweichung | 0 | - |
| 0x22404E | Aktive Kühlluftklappensteuerung 01 - Aktor - Spannungsversorgung gestört | 0 | - |
| 0x22404F | Aktive Kühlluftklappensteuerung 01 - Aktor - Übertemperatur | 0 | - |
| 0x224050 | Aktive Kühlluftklappensteuerung 01 - Aktor - elektrischer Fehler | 0 | - |
| 0x224051 | Aktive Kühlluftklappensteuerung 01 - Aktor - Istposition unplausibel | 0 | - |
| 0x224052 | Aktive Kühlluftklappensteuerung 02 - Aktor - Spannungsversorgung gestört | 0 | - |
| 0x224053 | Aktive Kühlluftklappensteuerung 02 - Aktor - Übertemperatur | 0 | - |
| 0x224054 | Aktive Kühlluftklappensteuerung 02 - Aktor - elektrischer Fehler | 0 | - |
| 0x224055 | Aktive Kühlluftklappensteuerung 02 - Aktor - Istposition unplausibel | 0 | - |
| 0x224058 | Aktive Kühlluftklappensteuerung 01 - Kommunikation - Botschaft LIN - Timeout | 0 | - |
| 0x224059 | Aktive Kühlluftklappensteuerung 01 - Kommunikation - Botschaft DOBD-MUX - Alive | 0 | - |
| 0x22405A | Aktive Kühlluftklappensteuerung 01 - Kommunikation - Botschaft DOBD MUX - Timeout | 0 | - |
| 0x22405B | Aktive Kühlluftklappensteuerung 01 - Kommunikation - LIN Knoten | 0 | - |
| 0x22405C | Aktive Kühlluftklappensteuerung 02 - Kommunikation - Botschaft LIN - Timeout | 0 | - |
| 0x22405D | Aktive Kühlluftklappensteuerung 02 - Kommunikation - Botschaft DOBD-MUX - Alive | 0 | - |
| 0x22405E | Aktive Kühlluftklappensteuerung 02 - Kommunikation - Botschaft DOBD MUX - Timeout | 0 | - |
| 0x22405F | Aktive Kühlluftklappensteuerung 02 - Kommunikation - LIN Knoten | 0 | - |
| 0x224060 | Aktive Kühlluftklappensteuerung 01 - DOBD - Interner Brückenfehler | 0 | - |
| 0x224061 | Aktive Kühlluftklappensteuerung 01 - DOBD - Überspannung | 0 | - |
| 0x224062 | Aktive Kühlluftklappensteuerung 01 - DOBD - Unterspannung | 0 | - |
| 0x224063 | Aktive Kühlluftklappensteuerung 01 - DOBD - Hallsensor | 0 | - |
| 0x224064 | Aktive Kühlluftklappensteuerung 01 - DOBD - Notlauf aktiv | 0 | - |
| 0x224065 | Aktive Kühlluftklappensteuerung 02 - DOBD - Interner Brückenfehler | 0 | - |
| 0x224066 | Aktive Kühlluftklappensteuerung 02 - DOBD - Überspannung | 0 | - |
| 0x224067 | Aktive Kühlluftklappensteuerung 02 - DOBD - Unterspannung | 0 | - |
| 0x224068 | Aktive Kühlluftklappensteuerung 02 - DOBD - Hallsensor | 0 | - |
| 0x224069 | Aktive Kühlluftklappensteuerung 02 - DOBD - Notlauf aktiv | 0 | - |
| 0x22408A | Dreiwegeventil-HVS - Bauteilschutz - Abschaltung wegen Übertemperatur | 0 | - |
| 0x22408B | Dreiwegeventil-HVS - Kurzschluss nach Masse | 0 | - |
| 0x22408C | Dreiwegeventil-HVS - Kurzschluss nach Plus | 0 | - |
| 0x22408D | Dreiwegeventil-HVS - offene Leitung | 0 | - |
| 0x2240C0 | Elektrolüfter - Stromerfassung - Oberer Schwellenwert überschritten | 0 | - |
| 0x2240C1 | Elektrolüfter - Stromerfassung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x2240C2 | Elektrolüfter - Temperaturerfassung - Oberer Schwellenwert überschritten | 0 | - |
| 0x2240C3 | Elektrolüfter - Temperaturerfassung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x2240C4 | Elektrolüfter - Spannungserfassung - Oberer Schwellenwert überschritten | 0 | - |
| 0x2240C5 | Elektrolüfter - Spannungserfassung - Unterer Schwellenwert unterschritten | 0 | - |
| 0x2240C6 | Elektrolüfter - Blockierung erkannt | 0 | - |
| 0x2240C7 | Elektrolüfter - Brückentreiber gestört | 0 | - |
| 0x2240C8 | Elektrolüfter - Phasenkurzschluss | 0 | - |
| 0x2240C9 | Elektrolüfter - Kommunikation - Kommunikation zu Master gestört | 0 | - |
| 0x2240CA | Elektrolüfter - Bauteilschutz - Degradation wegen Überstrom | 0 | - |
| 0x2240CB | Elektrolüfter-  Stromerfassung - Strom unplausibel | 0 | - |
| 0x2240CC | Elektrolüfter - Bauteilschutz - Abschaltung wegen Überstrom | 0 | - |
| 0x2240CD | Elektrolüfter - Betriebsmodus unplausibel | 0 | - |
| 0x2240CE | Elektrolüfter - Daten unplausibel | 0 | - |
| 0x2240CF | Elektrolüfter - Schwergängigkeit erkannt | 0 | - |
| 0x2240D0 | Elektrolüfter - Bauteilschutz - Degradation wegen Übertemperatur | 0 | - |
| 0x2240D1 | Elektrolüfter - Bauteilschutz - Abschaltung wegen Übertemperatur | 0 | - |
| 0x2240D2 | Elektrolüfter - Spannungserfassung - Spannung unplausibel | 0 | - |
| 0x2240D3 | Elektrolüfter - Sicherungsrelais - Ansteuerleitung - Leistungsunterbrechung | 0 | - |
| 0x2240D4 | Elektrolüfter - Sicherungsrelais - Ansteuerleitung - Kurzschluss nach Plus | 0 | - |
| 0x2240D5 | Elektrolüfter - Sicherungsrelais - Ansteuerleitung - Kurzschluss nach Masse | 0 | - |
| 0x2240D6 | Elektrolüfter - Ausfall trotz Ansteuerung | 0 | - |
| 0x2240D7 | Elektrolüfter - Spannungsversorgung - Last unplausibel | 0 | - |
| 0x2240D8 | Elektrolüfter - Drehzahlregelung - Regelungsabweichung | 0 | - |
| 0x224100 | Kühlmittelpumpe-Hochvoltspeicher - Bauteilschutz - Degradierung wegen Übertemperatur | 0 | - |
| 0x224101 | Kühlmittelpumpe-Hochvoltspeicher - Bauteilschutz - Abschaltung wegen Übertemperatur | 0 | - |
| 0x224102 | Kühlmittelpumpe-Hochvoltspeicher - Bauteilschutz - Degradierung wegen Überstrom | 0 | - |
| 0x224103 | Kühlmittelpumpe-Hochvoltspeicher - Bauteilschutz - Abschaltung wegen Überstrom | 0 | - |
| 0x224104 | Kühlmittelpumpe-Hochvoltspeicher - Bauteilschutz - Abschaltung wegen Blockierung | 0 | - |
| 0x224105 | Kühlmittelpumpe-Hochvoltspeicher - Spannungsversorgung - Über-/oder Unterspannung | 0 | - |
| 0x224106 | Kühlmittelpumpe-Hochvoltspeicher - Interner elektrischer Fehler | 0 | - |
| 0x224107 | Kühlsystem-Hochvoltspeicher - Bauteilschutz - Erkennung Kühlmittelverlust | 0 | - |
| 0x22410A | Kühlmittelpumpe-Leistungselektronik - Bauteilschutz - Degradierung wegen Übertemperatur | 0 | - |
| 0x22410B | Kühlmittelpumpe-Leistungselektronik - Bauteilschutz - Abschaltung wegen Übertemperatur | 0 | - |
| 0x22410C | Kühlmittelpumpe-Leistungselektronik - Bauteilschutz - Degradierung wegen Überstrom | 0 | - |
| 0x22410D | Kühlmittelpumpe-Leistungselektronik - Bauteilschutz - Abschaltung wegen Überstrom | 0 | - |
| 0x22410E | Kühlmittelpumpe-Leistungselektronik - Bauteilschutz - Abschaltung wegen Blockierung | 0 | - |
| 0x22410F | Kühlmittelpumpe-Leistungselektronik - Spannungsversorgung - Über-/oder Unterspannung | 0 | - |
| 0x224110 | Kühlmittelpumpe-Leistungselektronik - Interner elektrischer Fehler | 0 | - |
| 0x224111 | Kühlsystem-Leistungselektronik - Bauteilschutz - Erkennung Kühlmittelverlust | 0 | - |
| 0x224142 | eDH_HVS - HV-Spannungssensor - Spannung über Betriebsbereich | 0 | - |
| 0x224143 | eDH_HVS - HV-Spannungssensor unter Betriebsbereich | 0 | - |
| 0x224149 | eDH_HVS - Temperaturfühler Platine Kurzschluss zu Masse / Leitung unterbrochen | 0 | - |
| 0x22414A | eDH_HVS - Temperaturfühler Platine Kurzschluss zu Plus | 0 | - |
| 0x22414B | eDH_HVS - Temperaturfühler Platine über Betriebsbereich | 0 | - |
| 0x22414D | eDH_HVS - Temperaturfühler Kühlmittel Kurzschluss zu Masse | 0 | - |
| 0x22414E | eDH_HVS - Temperaturfühler Kühlmittel Kurzschluss zu Plus / Leitung unterbrochen | 0 | - |
| 0x22414F | eDH_HVS - Temperaturfühler Kühlmittel über Betriebsbereich | 0 | - |
| 0x224162 | eDH_HVS - interner Fehler | 0 | - |
| 0x224163 | eDH_HVS - Niederspannungsfehler/unplausible Prozessorkommunikation | 0 | - |
| 0x224164 | eDH_HVS - Degradation | 0 | - |
| 0x224165 | eDH_HVS - Systemfehler Fahrzeugseitig | 0 | - |
| 0x224166 | eDH_HVS - LIN-Timeout | 0 | - |
| 0x224180 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Pedalwerterfassung 1 - Kurzschluss nach Plus | 0 | - |
| 0x224181 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Pedalwerterfassung 1 - Kurzschluss nach Masse | 0 | - |
| 0x224182 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Pedalwerterfassung 2 - Kurzschluss nach Plus | 0 | - |
| 0x224183 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Pedalwerterfassung 2 - Kurzschluss nach Masse | 0 | - |
| 0x224184 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Versorgungsspannung - Pedalwerterfassung 1 - Überspannung | 0 | - |
| 0x224185 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Versorgungsspannung - Pedalwerterfassung 1 - Unterspannung | 0 | - |
| 0x224186 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Versorgungsspannung - Pedalwerterfassung 2 - Überspannung | 0 | - |
| 0x224187 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Versorgungsspannung - Pedalwerterfassung 2 - Unterspannung | 0 | - |
| 0x224188 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Pedalwerterfassung Sensor 1, Sensor 2 - Signale unplausibel | 0 | - |
| 0x224189 | Antrieb - Sicherheitsfunktion - Fahrpedalmodul - Pedalbetätigungserkennung - Fahrpedal und Bremse gleichzeitig aktiv | 0 | - |
| 0x2241C0 | Temperatursensor Kühleraustritt - Oberer Schwellenwert überschritten | 0 | - |
| 0x2241C1 | Temperatursensor Kühleraustritt - Unterer Schwellenwert unterschritten | 0 | - |
| 0x2241C4 | Temperatursensor Kühleraustritt - Gradient unplausibel | 0 | - |
| 0x2241C5 | Temperatursensor Kühleraustritt - Signal unplausibel | 0 | - |
| 0x224F40 | Absperrventil-HVS: Funktionsprüfung fehlgeschlagen | 0 | - |
| 0x224F41 | Kühlsystem: Kühlleistung, E-Maschine unplausibel | 0 | - |
| 0x224F42 | Kühlsystem: Kühlleistung Hochvoltspeicher unplausibel | 0 | - |
| 0x224F80 | Funktion AC-Laden eingeschränkt verfügbar | 0 | - |
| 0x224F81 | Funktion AC-Laden nicht verfügbar | 0 | - |
| 0x224F82 | Funktion DC-Laden eingeschränkt verfügbar | 0 | - |
| 0x224F83 | Funktion DC-Laden nicht verfügbar | 0 | - |
| 0x224F86 | Funktion Intelligent-Laden nicht verfügbar | 0 | - |
| 0x224F87 | Funktion Laden und Vorkonditionierung nicht verfügbar | 0 | - |
| 0x224F88 | Funktion: Fahrstufenwahl nicht verfügbar | 0 | - |
| 0x224F89 | Funktion: Beschleunigungsverhalten eingeschränkt verfügbar | 0 | - |
| 0x224F8A | Funktion: Beschleunigungsverhalten nicht verfügbar | 0 | - |
| 0x224F8B | Funktion: Powermode nicht verfügbar | 0 | - |
| 0x224F8C | Funktion: Verzögern nicht verfügbar | 0 | - |
| 0x224F8D | Funktion: Verzögern eingeschränkt verfügbar | 0 | - |
| 0x224F8E | Funktion: Fahrbereitschaft herstellen nicht verfügbar | 0 | - |
| 0x224F8F | Service Bedarf demnächst | 0 | - |
| 0x224F90 | Service Bedarf sofort | 0 | - |
| 0xBA0006 | Komponentenkühlung - Temperatursensor - Oberer Schwellenwert überschritten | 0 | - |
| 0xBA0007 | Komponentenkühlung - Temperatursensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0xBA0008 | Komponentenkühlung - Temperatursensor - Plausibilitätsfehler | 0 | - |
| 0xBA0009 | Komponentenkühlung - Temperatursensor - Plausibilitätsfehler 02 | 0 | - |
| 0xBA000A | Montagemode aktiv - Laden | 0 | - |
| 0xBA000B | DC-Stromsensor Summenstrom 01 - Oberer Schwellenwert überschritten | 0 | - |
| 0xBA000C | DC-Stromsensor Summenstrom 01 - Unterer Schwellenwert unterschritten | 0 | - |
| 0xBA000D | DC-Stromsensor Summenstrom 01 - Plausibilitätsfehler | 0 | - |
| 0xBA000E | DC-Stromsensor Summenstrom 02 - Plausibilitätsfehler | 0 | - |
| 0xBA0014 | Crash-Erkennung - KL30C unplausibel | 0 | - |
| 0xBA0017 | DC-Stromsensor Summenstrom 02 - Oberer Schwellenwert überschritten | 0 | - |
| 0xBA0018 | DC-Stromsensor Summenstrom 02 - Unterer Schwellenwert unterschritten | 0 | - |
| 0xBA0019 | Hochvolt-Leitung, E-Maschine, Leitungsschutz: zu hohe Temperatur | 0 | - |
| 0xBA001A | Hochvolt-Leitung, E-Maschine 2, Leitungsschutz: zu hohe Temperatur | 0 | - |
| 0xBA001B | Hochvolt-Leitung, DC-Ladedose, Leitungsschutz: zu hohe Temperatur | 0 | - |
| 0xBA001C | Hochvolt-Leitung, Ladesteuergerät, Leitungsschutz: zu hohe Temperatur | 0 | - |
| 0xD78528 | AE-CAN-FD Control Module Bus OFF | 0 | - |
| 0xD78600 | Ethernet: physikalischer Fehler (link off) | 1 | - |
| 0xD78602 | Ethernet: Link-Qualität niedrig | 1 | - |
| 0xD78603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 0 | - |
| 0xD78604 | Ethernet: Unerwarteter Link aufgebaut | 1 | - |
| 0xD78610 | Ethernet: unerwartete Link-Abbruch auf Port 0 | 1 | - |
| 0xD78618 | ETHERNET_COMMUNICATION_FAILURE | 1 | - |
| 0xD78BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xD79408 | Botschaft (Anforderung Drehzahl Vorderachse, ID: RQ_RPM_FTAX) fehlt | 1 | - |
| 0xD79409 | Botschaft (Anforderung Drehzahl Vorderachse, ID: RQ_RPM_FTAX) nicht aktuell | 1 | - |
| 0xD7940A | Botschaft (Anforderung Drehzahl Vorderachse, ID: RQ_RPM_FTAX) Prüfsumme falsch | 1 | - |
| 0xD79410 | Botschaft (Anforderung Klima Hybrid, ID: RQ_AIC_HYB) fehlt | 1 | - |
| 0xD79414 | Botschaft (Anforderung Klimaanlage, ID: RQ_AIC) fehlt | 1 | - |
| 0xD79418 | Botschaft (Anforderung Kraftschluss Funktion Segeln, ID: RQ_PENG_FN_SAIL) fehlt | 1 | - |
| 0xD79420 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) fehlt | 1 | - |
| 0xD79421 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) nicht aktuell | 1 | - |
| 0xD79422 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Rekuperation, ID: RQ_WMOM_PT_SUM_RECUP) Prüfsumme falsch | 1 | - |
| 0xD79424 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Soll Begrenzung FAS, ID: RQ_WMOM_PT_SUM_TAR_LIM_DRS) fehlt | 1 | - |
| 0xD79425 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Soll Begrenzung FAS, ID: RQ_WMOM_PT_SUM_TAR_LIM_DRS) nicht aktuell | 1 | - |
| 0xD79426 | Botschaft (Anforderung Radmoment Antriebsstrang Summe Soll Begrenzung FAS, ID: RQ_WMOM_PT_SUM_TAR_LIM_DRS) Prüfsumme falsch | 1 | - |
| 0xD7942C | Botschaft (Anfrage Leistung Funktionen Klima 1, ID: INQY_PWR_FNS_AIC_1) fehlt | 1 | - |
| 0xD79430 | Botschaft (Anfrage Leistung Funktionen Klima 2, ID: INQY_PWR_FNS_AIC_2) fehlt | 1 | - |
| 0xD79434 | Botschaft (Außentemperatur, ID: A_TEMP) fehlt | 1 | - |
| 0xD79438 | Botschaft (Bedienung Individualisierung Koordinator Antrieb Fahrerlebnis, ID: OP_IDLV_COOD_DRV_DXP) fehlt | 1 | - |
| 0xD7943C | Botschaft (Bedienung Konfiguration SOC Hold, ID: OP_SU_SOC_HLD) fehlt | 1 | - |
| 0xD79460 | Botschaft (Daten Hydraulikmodell Bremskraftmodell Unterdrucksensor, ID: DT_HYDM_BRKM_LPS) fehlt | 1 | - |
| 0xD79468 | Botschaft (Daten Vorderfahrzeug, ID: DT_FRVEH) fehlt | 1 | - |
| 0xD7946C | Botschaft (Daten elektrischer Durchlauferhitzer, ID: DT_EL_GEY) fehlt | 1 | - |
| 0xD79478 | Botschaft (Einheiten BN2020, ID: EINHEITEN_BN2020) fehlt | 1 | - |
| 0xD7948C | Botschaft (Fahrerlebnis Modus, ID: DXP_MOD) fehlt | 1 | - |
| 0xD79490 | Botschaft (Fahrgestellnummer, ID: FAHRGESTELLNUMMER) fehlt | 1 | - |
| 0xD79498 | Botschaft (Fahrzeugzustand, ID: FZZSTD) fehlt | 1 | - |
| 0xD7949C | Botschaft (Fehler_Status_eDH_HVS_LIN, ID: ERR_ST_eDH_HVS_LIN) fehlt | 1 | - |
| 0xD794A0 | Botschaft (Freigabe Kühlung Hochvoltspeicher, ID: RLS_COOL_HVSTO) fehlt | 1 | - |
| 0xD794A4 | Botschaft (Frontraumüberwachung FCM, ID: HDWOBS_FCM) fehlt | 1 | - |
| 0xD794A8 | Botschaft (GPS Rohdaten, ID: GPS_RWDT) fehlt | 1 | - |
| 0xD794AC | Botschaft (Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) fehlt | 1 | - |
| 0xD794AD | Botschaft (Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) nicht aktuell | 1 | - |
| 0xD794AE | Botschaft (Geschwindigkeit Fahrzeug 2, ID: V_VEH_2) Prüfsumme falsch | 1 | - |
| 0xD794B0 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) fehlt | 1 | - |
| 0xD794B1 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) nicht aktuell | 1 | - |
| 0xD794B2 | Botschaft (Geschwindigkeit Fahrzeug, ID: V_VEH) Prüfsumme falsch | 1 | - |
| 0xD794C0 | Botschaft (HighVoltageStorage100msNo1, ID: HighVoltageStorage100msNo1) fehlt | 1 | - |
| 0xD794C4 | Botschaft (HighVoltageStorage10msNo1, ID: HighVoltageStorage10msNo1) fehlt | 1 | - |
| 0xD794C8 | Botschaft (HighVoltageStorage10msNo2, ID: HighVoltageStorage10msNo2) fehlt | 1 | - |
| 0xD794C9 | Botschaft (HighVoltageStorage10msNo2, ID: HighVoltageStorage10msNo2) nicht aktuell | 1 | - |
| 0xD794CA | Botschaft (HighVoltageStorage10msNo2, ID: HighVoltageStorage10msNo2) Prüfsumme falsch | 1 | - |
| 0xD794CC | Botschaft (HighVoltageStorage200msNo1, ID: HighVoltageStorage200msNo1) fehlt | 1 | - |
| 0xD794CD | Botschaft (HighVoltageStorage200msNo1, ID: HighVoltageStorage200msNo1) nicht aktuell | 1 | - |
| 0xD794CE | Botschaft (HighVoltageStorage200msNo1, ID: HighVoltageStorage200msNo1) Prüfsumme falsch | 1 | - |
| 0xD794D0 | Botschaft (HighVoltageStorage200msNo2, ID: HighVoltageStorage200msNo2) fehlt | 1 | - |
| 0xD794E0 | Botschaft (Information Fahrzeug Antrieb, ID: INFO_VEH_DRV) fehlt | 1 | - |
| 0xD794E1 | Botschaft (Information Fahrzeug Antrieb, ID: INFO_VEH_DRV) nicht aktuell | 1 | - |
| 0xD794E2 | Botschaft (Information Fahrzeug Antrieb, ID: INFO_VEH_DRV) Prüfsumme falsch | 1 | - |
| 0xD794E4 | Botschaft (Information Spannung Zelle Hochvoltspeicher 10, ID: INFO_U_CELL_HVSTO_10) fehlt | 1 | - |
| 0xD794E8 | Botschaft (Information Spannung Zelle Hochvoltspeicher 11, ID: INFO_U_CELL_HVSTO_11) fehlt | 1 | - |
| 0xD794EC | Botschaft (Information Spannung Zelle Hochvoltspeicher 12, ID: INFO_U_CELL_HVSTO_12) fehlt | 1 | - |
| 0xD794F0 | Botschaft (Information Spannung Zelle Hochvoltspeicher 13, ID: INFO_U_CELL_HVSTO_13) fehlt | 1 | - |
| 0xD794F4 | Botschaft (Information Spannung Zelle Hochvoltspeicher 14, ID: INFO_U_CELL_HVSTO_14) fehlt | 1 | - |
| 0xD794F8 | Botschaft (Information Spannung Zelle Hochvoltspeicher 15, ID: INFO_U_CELL_HVSTO_15) fehlt | 1 | - |
| 0xD794FC | Botschaft (Information Spannung Zelle Hochvoltspeicher 16, ID: INFO_U_CELL_HVSTO_16) fehlt | 1 | - |
| 0xD79500 | Botschaft (Information Spannung Zelle Hochvoltspeicher 17, ID: INFO_U_CELL_HVSTO_17) fehlt | 1 | - |
| 0xD79504 | Botschaft (Information Spannung Zelle Hochvoltspeicher 18, ID: INFO_U_CELL_HVSTO_18) fehlt | 1 | - |
| 0xD79508 | Botschaft (Information Spannung Zelle Hochvoltspeicher 19, ID: INFO_U_CELL_HVSTO_19) fehlt | 1 | - |
| 0xD7950C | Botschaft (Information Spannung Zelle Hochvoltspeicher 1, ID: INFO_U_CELL_HVSTO_1) fehlt | 1 | - |
| 0xD79510 | Botschaft (Information Spannung Zelle Hochvoltspeicher 20, ID: INFO_U_CELL_HVSTO_20) fehlt | 1 | - |
| 0xD79514 | Botschaft (Information Spannung Zelle Hochvoltspeicher 21, ID: INFO_U_CELL_HVSTO_21) fehlt | 1 | - |
| 0xD79518 | Botschaft (Information Spannung Zelle Hochvoltspeicher 22, ID: INFO_U_CELL_HVSTO_22) fehlt | 1 | - |
| 0xD7951C | Botschaft (Information Spannung Zelle Hochvoltspeicher 23, ID: INFO_U_CELL_HVSTO_23) fehlt | 1 | - |
| 0xD79520 | Botschaft (Information Spannung Zelle Hochvoltspeicher 24, ID: INFO_U_CELL_HVSTO_24) fehlt | 1 | - |
| 0xD79524 | Botschaft (Information Spannung Zelle Hochvoltspeicher 25, ID: INFO_U_CELL_HVSTO_25) fehlt | 1 | - |
| 0xD79528 | Botschaft (Information Spannung Zelle Hochvoltspeicher 26, ID: INFO_U_CELL_HVSTO_26) fehlt | 1 | - |
| 0xD7952C | Botschaft (Information Spannung Zelle Hochvoltspeicher 27, ID: INFO_U_CELL_HVSTO_27) fehlt | 1 | - |
| 0xD79530 | Botschaft (Information Spannung Zelle Hochvoltspeicher 2, ID: INFO_U_CELL_HVSTO_2) fehlt | 1 | - |
| 0xD79534 | Botschaft (Information Spannung Zelle Hochvoltspeicher 3, ID: INFO_U_CELL_HVSTO_3) fehlt | 1 | - |
| 0xD79538 | Botschaft (Information Spannung Zelle Hochvoltspeicher 4, ID: INFO_U_CELL_HVSTO_4) fehlt | 1 | - |
| 0xD7953C | Botschaft (Information Spannung Zelle Hochvoltspeicher 5, ID: INFO_U_CELL_HVSTO_5) fehlt | 1 | - |
| 0xD79540 | Botschaft (Information Spannung Zelle Hochvoltspeicher 6, ID: INFO_U_CELL_HVSTO_6) fehlt | 1 | - |
| 0xD79544 | Botschaft (Information Spannung Zelle Hochvoltspeicher 7, ID: INFO_U_CELL_HVSTO_7) fehlt | 1 | - |
| 0xD79548 | Botschaft (Information Spannung Zelle Hochvoltspeicher 8, ID: INFO_U_CELL_HVSTO_8) fehlt | 1 | - |
| 0xD7954C | Botschaft (Information Spannung Zelle Hochvoltspeicher 9, ID: INFO_U_CELL_HVSTO_9) fehlt | 1 | - |
| 0xD79550 | Botschaft (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) fehlt | 1 | - |
| 0xD79551 | Botschaft (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) nicht aktuell | 1 | - |
| 0xD79552 | Botschaft (Ist Bremsmoment Summe, ID: AVL_BRTORQ_SUM) Prüfsumme falsch | 1 | - |
| 0xD79554 | Botschaft (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) fehlt | 1 | - |
| 0xD79555 | Botschaft (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) nicht aktuell | 1 | - |
| 0xD79556 | Botschaft (Ist Lenkwinkel Vorderachse, ID: AVL_STEA_FTAX) Prüfsumme falsch | 1 | - |
| 0xD79558 | Botschaft (Kilometerstand/Reichweite, ID: KILOMETERSTAND) fehlt | 1 | - |
| 0xD79560 | Botschaft (Konfiguration SCharge KEY, ID: SU_SCHRG_KEY) fehlt | 1 | - |
| 0xD79568 | Botschaft (Konfiguration Stellhebel Fahrdynamik Fahrerlebnis, ID: SU_CLE_DRDY_DXP) fehlt | 1 | - |
| 0xD79570 | Botschaft (Laden Parameter, ID: CHGNG_PRMTR) fehlt | 1 | - |
| 0xD79574 | Botschaft (Lenkwinkel Vorderachse Effektiv:, ID: TEA_FTAX_EFFV) fehlt | 1 | - |
| 0xD79578 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) fehlt | 1 | - |
| 0xD79579 | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) nicht aktuell | 1 | - |
| 0xD7957A | Botschaft (Längsbeschleunigung Schwerpunkt, ID: ACLNX_MASSCNTR) Prüfsumme falsch | 1 | - |
| 0xD79580 | Botschaft (Nachlaufzeit Stromversorgung BN2020, ID: FLLUPT_GPWSUP ) fehlt | 1 | - |
| 0xD79584 | Botschaft (Nav-Graph 2 Aktuelle Segment, ID: NAVGRPH_2_PRES_SEG) fehlt | 1 | - |
| 0xD79598 | Botschaft (Nav-Graph 2 Route Beschreibung, ID: NAVGRPH_2_RT_DESCR) fehlt | 1 | - |
| 0xD795A8 | Botschaft (Navigation System Information, ID: NAV_SYS_INF) fehlt | 1 | - |
| 0xD795BC | Botschaft (Neigung Fahrbahn, ID: TLT_RW) fehlt | 1 | - |
| 0xD795BD | Botschaft (Neigung Fahrbahn, ID: TLT_RW) nicht aktuell | 1 | - |
| 0xD795BE | Botschaft (Neigung Fahrbahn, ID: TLT_RW) Prüfsumme falsch | 1 | - |
| 0xD795C0 | Botschaft (Netzwerkmanagement-3 AE_CAN_FD, ID: NM3_AE_CAN_FD) fehlt | 1 | - |
| 0xD795C4 | Botschaft (PIA Daten Anfrage, ID: PIA_DT_INQY) fehlt | 1 | - |
| 0xD795C8 | Botschaft (PIA Daten Setzen, ID: PIA_DT_SET) fehlt | 1 | - |
| 0xD795CC | Botschaft (PIA Konfiguration, ID: PIA_SU) fehlt | 1 | - |
| 0xD795D0 | Botschaft (PIA Transaktion, ID: PIA_TRANA) fehlt | 1 | - |
| 0xD795D4 | Botschaft (PIA_Dienst, ID: PIA_SVC) fehlt | 1 | - |
| 0xD795DC | Botschaft (Powermanagement Niederspannung, ID: PWMG_LV) fehlt | 1 | - |
| 0xD795E0 | Botschaft (Prognose Fahrt Information, ID: FRC_RD_INFO) fehlt | 1 | - |
| 0xD795E4 | Botschaft (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) fehlt | 1 | - |
| 0xD795E5 | Botschaft (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) nicht aktuell | 1 | - |
| 0xD795E6 | Botschaft (Querbeschleunigung Schwerpunkt, ID: ACLNY_MASSCNTR) Prüfsumme falsch | 1 | - |
| 0xD795F4 | Botschaft (Regensensor-Wischergeschwindigkeit, ID: WISCHGESCHWINDIGKEIT) fehlt | 1 | - |
| 0xD795F8 | Botschaft (Relativzeit BN2020, ID: RELATIVZEIT) fehlt | 1 | - |
| 0xD795FC | Botschaft (Sicher Fahrgestellnummer, ID: SECU_FAHRGESTELLNUMMER) fehlt | 1 | - |
| 0xD79600 | Botschaft (Sicher Response, ID: SECU_RESP) fehlt | 1 | - |
| 0xD79604 | Botschaft (SlaveResp, ID: SlaveResp) fehlt | 1 | - |
| 0xD79608 | Botschaft (Soll Anzeige Vibration Warnung Fahrspurwechsel, ID: TAR_DISP_VIB_WARN_LNCH) fehlt | 1 | - |
| 0xD7960C | Botschaft (Soll Radmoment Antriebsstrang Stabilisierung, ID: TAR_WMOM_PT_STAB) fehlt | 1 | - |
| 0xD7960D | Botschaft (Soll Radmoment Antriebsstrang Stabilisierung, ID: TAR_WMOM_PT_STAB) nicht aktuell | 1 | - |
| 0xD7960E | Botschaft (Soll Radmoment Antriebsstrang Stabilisierung, ID: TAR_WMOM_PT_STAB) Prüfsumme falsch | 1 | - |
| 0xD79614 | Botschaft (Status Anhänger, ID: STAT_ANHAENGER) fehlt | 1 | - |
| 0xD79618 | Botschaft (Status Crash, ID: ST_CR) fehlt | 1 | - |
| 0xD79619 | Botschaft (Status Crash, ID: ST_CR) nicht aktuell | 1 | - |
| 0xD7961A | Botschaft (Status Crash, ID: ST_CR) Prüfsumme falsch | 1 | - |
| 0xD79620 | Botschaft (Status Funkschlüssel, ID: STAT_FUNKSCHLUESSEL) fehlt | 1 | - |
| 0xD79624 | Botschaft (Status Gang Rückwärts, ID: STAT_GANG_RUECKWAERTS) fehlt | 1 | - |
| 0xD79628 | Botschaft (Status Gangwahlschalter, ID: ST_GWS) fehlt | 1 | - |
| 0xD79629 | Botschaft (Status Gangwahlschalter, ID: ST_GWS) nicht aktuell | 1 | - |
| 0xD7962A | Botschaft (Status Gangwahlschalter, ID: ST_GWS) Prüfsumme falsch | 1 | - |
| 0xD7962C | Botschaft (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) fehlt | 1 | - |
| 0xD7962D | Botschaft (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) nicht aktuell | 1 | - |
| 0xD7962E | Botschaft (Status Gurt Kontakt Sitzbelegung, ID: ST_BLT_CT_SOCCU) Prüfsumme falsch | 1 | - |
| 0xD79630 | Botschaft (Status Hochvoltspeicher 1, ID: ST_HVSTO_1) fehlt | 1 | - |
| 0xD79638 | Botschaft (Status Klima Luftverteilung FA, ID: STAT_KLIMA_LUFT_FA) fehlt | 1 | - |
| 0xD7963C | Botschaft (Status RCP, ID: ST_RCPP) fehlt | 1 | - |
| 0xD7963D | Botschaft (Status RCP, ID: ST_RCP) nicht aktuell | 1 | - |
| 0xD7963E | Botschaft (Status RCP, ID: ST_RCP) Prüfsumme falsch | 1 | - |
| 0xD79640 | Botschaft (Status Reibwert Fahrdynamik, ID: ST_MUE_DRDY) fehlt | 1 | - |
| 0xD79641 | Botschaft (Status Reibwert Fahrdynamik, ID: ST_MUE_DRDY) nicht aktuell | 1 | - |
| 0xD79642 | Botschaft (Status Reibwert Fahrdynamik, ID: ST_MUE_DRDY) Prüfsumme falsch | 1 | - |
| 0xD79644 | Botschaft (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) fehlt | 1 | - |
| 0xD79645 | Botschaft (Status Stabilisierung DSC 2:, ID: T_STAB_DSC_2) nicht aktuell | 1 | - |
| 0xD79646 | Botschaft (Status Stabilisierung DSC 2, ID: ST_STAB_DSC_2) Prüfsumme falsch | 1 | - |
| 0xD79648 | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) fehlt | 1 | - |
| 0xD79649 | Botschaft (Status Stabilisierung DSC:, ID: ST_STAB_DSC) nicht aktuell | 1 | - |
| 0xD7964A | Botschaft (Status Stabilisierung DSC, ID: ST_STAB_DSC) Prüfsumme falsch | 1 | - |
| 0xD7964C | Botschaft (Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) fehlt | 1 | - |
| 0xD7964D | Botschaft (Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) nicht aktuell | 1 | - |
| 0xD7964E | Botschaft (Status Stillstandsfunktionen DSC, ID: ST_SSFN_DSC) Prüfsumme falsch | 1 | - |
| 0xD79654 | Botschaft (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) fehlt | 1 | - |
| 0xD79655 | Botschaft (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) nicht aktuell | 1 | - |
| 0xD79656 | Botschaft (Status Türsensoren Abgesichert, ID: STAT_DS_VRFD) Prüfsumme falsch | 1 | - |
| 0xD79658 | Botschaft (Status Ventil Hochvoltbatterie-Kühlung, ID: ST_VA_HVBTC) fehlt | 1 | - |
| 0xD7965C | Botschaft (StatusHighVoltageStorageIsolationMeasure, ID: StatusHighVoltageStorageIsolationMeasure) fehlt | 1 | - |
| 0xD7965D | Botschaft (StatusHighVoltageStorageIsolationMeasure, ID: StatusHighVoltageStorageIsolationMeasure) nicht aktuell | 1 | - |
| 0xD7965E | Botschaft (StatusHighVoltageStorageIsolationMeasure, ID: StatusHighVoltageStorageIsolationMeasure) Prüfsumme falsch | 1 | - |
| 0xD79660 | Botschaft (Status_AKKS_2_LIN, ID: ST_AKKS_2_LIN) fehlt | 1 | - |
| 0xD79664 | Botschaft (Status_AKKS_LIN, ID: ST_AKKS_LIN) fehlt | 1 | - |
| 0xD79668 | Botschaft (Status_Diagnose_OBD_16_Antriebsstrang_LIN_AKKS, ID: ST_DIAG_OBD_16_PT_LIN_AKKS) fehlt | 1 | - |
| 0xD7966C | Botschaft (Status_Diagnose_OBD_1_Antriebsstrang_eDH_HVS_LIN, ID: ST_DIAG_OBD_1_PT_eDH_HVS_LIN) fehlt | 1 | - |
| 0xD79670 | Botschaft (Status_Diagnose_OBD_20_Antriebsstrang_LIN_AKKS_2, ID: ST_DIAG_OBD_20_PT_LIN_AKKS_2) fehlt | 1 | - |
| 0xD79674 | Botschaft (Status_Diagnose_System_eDH_HVS_LIN, ID: ST_DIAG_SYS_eDH_HVS_LIN) fehlt | 1 | - |
| 0xD79678 | Botschaft (Status_EWP22_LIN, ID: ST_EWP22_LIN) fehlt | 1 | - |
| 0xD7967C | Botschaft (Status_EWP23_LIN, ID: ST_EWP23_LIN) fehlt | 1 | - |
| 0xD79680 | Botschaft (Status_Lüfter_1_LIN, ID: ST_FAN_1_LIN) fehlt | 1 | - |
| 0xD79684 | Botschaft (Status_eDH_HVS_LIN, ID: ST_eDH_HVS_LIN) fehlt | 1 | - |
| 0xD7968C | Botschaft (Steuerung Funktion Hospitality, ID: CTR_FN_HOSP) fehlt | 1 | - |
| 0xD79690 | Botschaft (Steuerung Ladeschnittstelle CSM, ID: CTR_CHGINTF_CSM) fehlt | 1 | - |
| 0xD79694 | Botschaft (Steuerung Zentralverriegelung, ID: CTR_ZV) fehlt | 1 | - |
| 0xD7969C | Botschaft (Tankinhalt/Reichweite, ID: TAC_RNG) fehlt | 1 | - |
| 0xD796A0 | Botschaft (Teleservice Call Status, ID: TS_CALL_ST) fehlt | 1 | - |
| 0xD796A4 | Botschaft (Temperatursensor Hochvoltspeicher 10, ID: TEMPSEN_HVSTO_10) fehlt | 1 | - |
| 0xD796A8 | Botschaft (Temperatursensor Hochvoltspeicher 11, ID: TEMPSEN_HVSTO_11) fehlt | 1 | - |
| 0xD796AC | Botschaft (Temperatursensor Hochvoltspeicher 12, ID: TEMPSEN_HVSTO_12) fehlt | 1 | - |
| 0xD796B0 | Botschaft (Temperatursensor Hochvoltspeicher 1, ID: TEMPSEN_HVSTO_1) fehlt | 1 | - |
| 0xD796B4 | Botschaft (Temperatursensor Hochvoltspeicher 2, ID: TEMPSEN_HVSTO_2) fehlt | 1 | - |
| 0xD796B8 | Botschaft (Temperatursensor Hochvoltspeicher 3, ID: TEMPSEN_HVSTO_3) fehlt | 1 | - |
| 0xD796BC | Botschaft (Temperatursensor Hochvoltspeicher 4, ID: TEMPSEN_HVSTO_4) fehlt | 1 | - |
| 0xD796C0 | Botschaft (Temperatursensor Hochvoltspeicher 5, ID: TEMPSEN_HVSTO_5) fehlt | 1 | - |
| 0xD796C4 | Botschaft (Temperatursensor Hochvoltspeicher 6, ID: TEMPSEN_HVSTO_6) fehlt | 1 | - |
| 0xD796C8 | Botschaft (Temperatursensor Hochvoltspeicher 7, ID: TEMPSEN_HVSTO_7) fehlt | 1 | - |
| 0xD796CC | Botschaft (Temperatursensor Hochvoltspeicher 8, ID: TEMPSEN_HVSTO_8) fehlt | 1 | - |
| 0xD796D0 | Botschaft (Temperatursensor Hochvoltspeicher 9, ID: TEMPSEN_HVSTO_9) fehlt | 1 | - |
| 0xD796D4 | Botschaft (TractionEMachineElectronic1Time100msNo1, ID: TractionEMachineElectronic1Time100msNo1) fehlt | 1 | - |
| 0xD796D8 | Botschaft (TractionEMachineElectronic1Time10msNo1, ID: TractionEMachineElectronic1Time10msNo1) fehlt | 1 | - |
| 0xD796D9 | Botschaft (TractionEMachineElectronic1Time10msNo1, ID: TractionEMachineElectronic1Time10msNo1) nicht aktuell | 1 | - |
| 0xD796DA | Botschaft (TractionEMachineElectronic1Time10msNo1,, ID: TractionEMachineElectronic1Time10msNo1) Prüfsumme falsch | 1 | - |
| 0xD796DC | Botschaft (TractionEMachineElectronic1Time10msNo2, ID: TractionEMachineElectronic1Time10msNo2) fehlt | 1 | - |
| 0xD796E0 | Botschaft (TractionEMachineElectronic2Time100msNo1, ID: TractionEMachineElectronic2Time100msNo1) fehlt | 1 | - |
| 0xD796E4 | Botschaft (TractionEMachineElectronic2Time10msNo, ID: TractionEMachineElectronic2Time10msNo1) fehlt | 1 | - |
| 0xD796E5 | Botschaft (TractionEMachineElectronic2Time10msNo1, ID: TractionEMachineElectronic2Time10msNo1) nicht aktuell | 1 | - |
| 0xD796E6 | Botschaft (TractionEMachineElectronic2Time10msNo1, ID: TractionEMachineElectronic2Time10msNo1) Prüfsumme falsch | 1 | - |
| 0xD796E8 | Botschaft (TractionEMachineElectronic2Time10msNo2, ID: TractionEMachineElectronic2Time10msNo2) fehlt | 1 | - |
| 0xD796EC | Botschaft (Uhrzeit/Datum, ID: UHRZEIT_DATUM) fehlt | 1 | - |
| 0xD796F0 | Botschaft (Verbraucherstatus, ID: ST_COS) fehlt | 1 | - |
| 0xD796F8 | Botschaft (Vorgabe Adaption Modus Fahrerlebnis, ID: SPEC_ADPT_MOD_DXP) fehlt | 1 | - |
| 0xD796FC | Botschaft (WirelessChargingUnit100msNo1, ID: WirelessChargingUnit100msNo1) fehlt | 1 | - |
| 0xD79700 | Botschaft (WirelessChargingUnit500msNo1, ID: WirelessChargingUnit500msNo1) fehlt | 1 | - |
| 0xD79704 | Botschaft (WirelessChargingUnit50msNo1, ID: WirelessChargingUnit50msNo1) fehlt | 1 | - |
| 0xD7970C | Botschaft (ZV und Klappenzustand, ID: STAT_ZV_KLAPPEN) fehlt | 1 | - |
| 0xD79710 | Botschaft (Zieladresse Nav-Graph_2, ID: DEST_ADRESS_NAVGRPH_2) fehlt | 1 | - |
| 0xD79714 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) fehlt | 1 | - |
| 0xD79715 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) nicht aktuell | 1 | - |
| 0xD79716 | Botschaft (Zustand Fahrzeug, ID: CON_VEH) Prüfsumme falsch | 1 | - |
| 0xD79724 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) fehlt | 1 | - |
| 0xD79725 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) nicht aktuell | 1 | - |
| 0xD79726 | Botschaft (Ist Drehzahl Rad, ID: AVL_RPM_WHL) Prüfsumme falsch | 1 | - |
| 0xD7973C | Botschaft (Bedienung Laden Strom Begrenzung 2, ID: OP_ST_CHGNG_I_LIM_2) fehlt | 1 | - |
| 0xD7973F | Botschaft (Bedienung Timer, ID: OP_TIMER) fehlt | 1 | - |
| 0xD79745 | Botschaft (EAPC Diagnose Response LD_AC_CCS, ID: EAPC_DIAG_RESP_LD_AC_CCS) fehlt | 1 | - |
| 0xD79748 | Botschaft (EAPC Diagnose Response LD_DC, ID: EAPC_DIAG_RESP_LD_DC) fehlt | 1 | - |
| 0xD7974B | Botschaft (EAPC Weckbotschaft LD_AC_CCS, ID: EAPC_WUPM_LD_AC_CCS) fehlt | 1 | - |
| 0xD7974E | Botschaft (EAPC Weckbotschaft LD_DC, ID: EAPC_WUPM_LD_DC) fehlt | 1 | - |
| 0xD79751 | Botschaft (EAPC_ Temperatur DC, ID: EAPC_Temperatur_DC) fehlt | 1 | - |
| 0xD79752 | Botschaft (EAPC_ Temperatur DC, ID: EAPC_Temperatur_DC) nicht aktuell | 1 | - |
| 0xD79753 | Botschaft (EAPC_ Temperatur DC, ID: EAPC_Temperatur_DC) Prüfsumme falsch | 1 | - |
| 0xD79754 | Botschaft (EAPC_CHDM_H108, ID: EAPC_CHDM_H108) fehlt | 1 | - |
| 0xD79757 | Botschaft (EAPC_CHDM_H109, ID: EAPC_CHDM_H109) fehlt | 1 | - |
| 0xD7975A | Botschaft (EAPC_CHDM_H118, ID: EAPC_CHDM_H118) fehlt | 1 | - |
| 0xD7975D | Botschaft (EAPC_Status_Ladeklappe_AC_CCS, ID: EAPC_Status_Ladeklappe_AC_CCS) fehlt | 1 | - |
| 0xD7975E | Botschaft (EAPC_Status_Ladeklappe_AC_CCS, ID: EAPC_Status_Ladeklappe_AC_CCS) nicht aktuell | 1 | - |
| 0xD7975F | Botschaft (EAPC_Status_Ladeklappe_AC_CCS, ID: EAPC_Status_Ladeklappe_AC_CCS) Prüfsumme falsch | 1 | - |
| 0xD79760 | Botschaft (EAPC_Status_Ladeklappe_DC, ID: EAPC_Status_Ladeklappe_DC) fehlt | 1 | - |
| 0xD79761 | Botschaft (EAPC_Status_Ladeklappe_DC, ID: EAPC_Status_Ladeklappe_DC) nicht aktuell | 1 | - |
| 0xD79762 | Botschaft (EAPC_Status_Ladeklappe_DC, ID: EAPC_Status_Ladeklappe_DC) Prüfsumme falsch | 1 | - |
| 0xD79763 | Botschaft (EAPC_Status_Ladestatusanzeige_AC_CCS, ID: EAPC_Status_Ladestatusanzeige_AC_CCS) fehlt | 1 | - |
| 0xD79766 | Botschaft (EAPC_Status_Ladestatusanzeige_DC, ID: EAPC_Status_Ladestatusanzeige_DC) fehlt | 1 | - |
| 0xD79769 | Botschaft (EAPC_Status_Ladesteckerverriegelung_AC_CCS, ID: EAPC_Status_Ladesteckerverriegelung_AC_CCS) fehlt | 1 | - |
| 0xD7976A | Botschaft (EAPC_Status_Ladesteckerverriegelung_AC_CCS, ID: EAPC_Status_Ladesteckerverriegelung_AC_CCS) nicht aktuell | 1 | - |
| 0xD7976B | Botschaft (EAPC_Status_Ladesteckerverriegelung_AC_CCS, ID: EAPC_Status_Ladesteckerverriegelung_AC_CCS) Prüfsumme falsch | 1 | - |
| 0xD7976C | Botschaft (EAPC_Temperatur AC, ID: EAPC_Temperatur_AC) fehlt | 1 | - |
| 0xD7976D | Botschaft (EAPC_Temperatur AC, ID: EAPC_Temperatur_AC) nicht aktuell | 1 | - |
| 0xD7976E | Botschaft (EAPC_Temperatur AC, ID: EAPC_Temperatur_AC) Prüfsumme falsch | 1 | - |
| 0xD7976F | Botschaft (EAPC_Temperatur DC_CCS, ID: EAPC_Temperatur_DC_CCS) fehlt | 1 | - |
| 0xD79770 | Botschaft (EAPC_Temperatur DC_CCS, ID: EAPC_Temperatur_DC_CCS) nicht aktuell | 1 | - |
| 0xD79771 | Botschaft (EAPC_Temperatur DC_CCS, ID: EAPC_Temperatur_DC_CCS) Prüfsumme falsch | 1 | - |
| 0xD79772 | Botschaft (PowerTrainGuidanceTargetLimit, ID: PowerTrainGuidanceTargetLimit) fehlt | 1 | - |
| 0xD79773 | Botschaft (PowerTrainGuidanceTargetLimit, ID: PowerTrainGuidanceTargetLimit) nicht aktuell | 1 | - |
| 0xD79774 | Botschaft (PowerTrainGuidanceTargetLimit, ID: PowerTrainGuidanceTargetLimit) Prüfsumme falsch | 1 | - |
| 0xD79778 | Botschaft (SecOcP2TestSecOcEA_HVS, ID: SecOcP2TestSecOcEA_HVS) fehlt | 1 | - |
| 0xD7977B | Botschaft (SecOcP2TestSecOcEA_TEE1, ID: SecOcP2TestSecOcEA_TEE1) fehlt | 1 | - |
| 0xD7977E | Botschaft (SecOcP2TestSecOcEA_TEE2, ID: SecOcP2TestSecOcEA_TEE2) fehlt | 1 | - |
| 0xD79781 | Botschaft (Status Hochvoltspeicher 2, ID: STAT_HVSTO_2) fehlt | 1 | - |
| 0xD79784 | Botschaft (Status1DV3Lin, ID: Status1DV3Lin) fehlt | 1 | - |
| 0xD79787 | Botschaft (Status2DV3Lin, ID: Status2DV3Lin) fehlt | 1 | - |
| 0xD7978A | Botschaft (StatusCrashIdentETractSys1, ID: StatusCrashIdentETractSys1) fehlt | 1 | - |
| 0xD7978B | Botschaft (StatusCrashIdentETractSys1, ID: StatusCrashIdentETractSys1) nicht aktuell | 1 | - |
| 0xD7978C | Botschaft (StatusCrashIdentETractSys1, ID: StatusCrashIdentETractSys1) Prüfsumme falsch | 1 | - |
| 0xD7978D | Botschaft (StatusCrashIdentETractSys2, ID: StatusCrashIdentETractSys2) fehlt | 1 | - |
| 0xD7978E | Botschaft (StatusCrashIdentETractSys2, ID: StatusCrashIdentETractSys2) nicht aktuell | 1 | - |
| 0xD7978F | Botschaft (StatusCrashIdentETractSys2, ID: StatusCrashIdentETractSys2) Prüfsumme falsch | 1 | - |
| 0xD79790 | Botschaft (StatusTempSS7Lin, ID: StatusTempSS7Lin) fehlt | 1 | - |
| 0xD79793 | Botschaft (StatusTempSS8Lin, ID: StatusTempSS8Lin) fehlt | 1 | - |
| 0xD79796 | Botschaft (StatusXPAD, ID: ST_XPAD) fehlt | 1 | - |
| 0xD7979C | Botschaft (TestSecOcEA_HVS, ID: TestSecOcEA_HVS) fehlt | 1 | - |
| 0xD7979F | Botschaft (TestSecOcEA_TEE1, ID: TestSecOcEA_TEE1) fehlt | 1 | - |
| 0xD797A2 | Botschaft (TestSecOcEA_TEE2, ID: TestSecOcEA_TEE2) fehlt | 1 | - |
| 0xD797A5 | Botschaft (Kilometerstand_2, ID: Kilometerstand_2) fehlt | 1 | - |
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
| 0x0001 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0002 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0003 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0004 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0005 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0006 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0007 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0008 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0009 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x000F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0010 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0011 | LINK_RESET_STATUS_00 | 0/1 | High | 0x0001 | - | - | - | - |
| 0x0012 | LINK_RESET_STATUS_01 | 0/1 | High | 0x0002 | - | - | - | - |
| 0x0013 | LINK_RESET_STATUS_02 | 0/1 | High | 0x0004 | - | - | - | - |
| 0x0014 | LINK_RESET_STATUS_03 | 0/1 | High | 0x0008 | - | - | - | - |
| 0x0015 | LINK_RESET_STATUS_04 | 0/1 | High | 0x0010 | - | - | - | - |
| 0x0016 | LINK_RESET_STATUS_05 | 0/1 | High | 0x0020 | - | - | - | - |
| 0x0017 | LINK_RESET_STATUS_06 | 0/1 | High | 0x0040 | - | - | - | - |
| 0x0018 | LINK_RESET_STATUS_07 | 0/1 | High | 0x0080 | - | - | - | - |
| 0x0019 | LINK_RESET_STATUS_08 | 0/1 | High | 0x0100 | - | - | - | - |
| 0x001A | LINK_RESET_STATUS_09 | 0/1 | High | 0x0200 | - | - | - | - |
| 0x001B | LINK_RESET_STATUS_10 | 0/1 | High | 0x0400 | - | - | - | - |
| 0x001C | LINK_RESET_STATUS_11 | 0/1 | High | 0x0800 | - | - | - | - |
| 0x001D | LINK_RESET_STATUS_12 | 0/1 | High | 0x1000 | - | - | - | - |
| 0x001E | LINK_RESET_STATUS_13 | 0/1 | High | 0x2000 | - | - | - | - |
| 0x001F | LINK_RESET_STATUS_14 | 0/1 | High | 0x4000 | - | - | - | - |
| 0x0020 | LINK_RESET_STATUS_15 | 0/1 | High | 0x8000 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1770 | STATUS_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1771 | STATUS_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1772 | STATUS_OTHER_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1773 | STATUS_ONLINE_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1774 | STATUS_ONLINE_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1805 | ETHERNET_COMMUNICATION_FAILURE_STATUS | 0-n | High | 0xFF | ETHERNET_COMMUNICATION_FAILURE_STATUS | - | - | - |
| 0x1821 | STATUS_SYMMETRIC_KEYS | 0-n | High | 0xFF | TAB_SYMMETRIC_KEYS | - | - | - |
| 0x1822 | FAILED_DATA_ID_ENTRY_1 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1823 | FAILED_DATA_ID_ENTRY_2 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1824 | FAILED_DATA_ID_ENTRY_3 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1825 | FAILED_DATA_ID_ENTRY_4 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1826 | FAILED_DATA_ID_ENTRY_5 | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x8003 | ECU_MODE | 0-n | High | 0xFF | TAB_ECU_MODE | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HWMODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | Erstmuster (Serie) |
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

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x030EC0 | HVPM - Laden - Ladekabel - Entriegelungsknopf | 1 | - |
| 0x030EC1 | HVPM - Laden - Ausfall Lademodul | 1 | - |
| 0x030EC2 | HVPM - Laden - Ladegerät - Degradation-Abbruch | 1 | - |
| 0x030EC3 | HVPM - Laden - Degradation Lademodul | 1 | - |
| 0x030EC4 | HVPM - Laden - Ladekabel - Keine Steckererkennung | 1 | - |
| 0x030EC5 | HVPM - Laden - Ladekabel - Pilot nicht vorhanden | 1 | - |
| 0x030EC6 | HVPM - Laden - Ausfall DC/DC-Wandler | 1 | - |
| 0x030EC7 | HVPM - Laden - Vollladen nicht möglich | 1 | - |
| 0x030EC8 | HVPM - Laden - Ladestörung da Wegfall AC-Spannung | 1 | - |
| 0x030EC9 | HVPM - Laden - AC-Spannung ohne Ladebereitschaft | 1 | - |
| 0x030ECA | HVPM - Laden - Kommunikationsausfall zur primären Energiequelle | 1 | - |
| 0x030ECB | HVPM - Laden - Kommunikationsausfall zum Lademodul | 1 | - |
| 0x030ECC | HVPM - Laden - VOKO-Fehler | 1 | - |
| 0x030ECD | HVPM - Laden - Ladefehler aufgrund Zustandsautomaten | 1 | - |
| 0x030ECE | HVPM - Laden - Störung | 1 | - |
| 0x030ECF | HVPM - Laden - Ladekabel - Verriegelung | 1 | - |
| 0x030ED0 | HVPM - Laden - Werksladen gesetzt | 1 | - |
| 0x030ED1 | HVPM - Laden - Klappe der Lade-Buchse offen | 1 | - |
| 0x030EDA | HVPM - Leistungskoordinator - zu geringe Leistungsaufnahme IHKA | 1 | - |
| 0x030EDB | HVPM - Leistungskoordinator - Leistungsfreigaben IHKA überschritten | 1 | - |
| 0x030EDC | HVPM - Leistungskoordinator - Leistungsfreigaben DC/DC überschritten | 1 | - |
| 0x030EDE | HVPM - Leistungskoordinator - Reduzierte Leistungsfreigabe DC/DC Wandler | 0 | - |
| 0x030EE1 | HVPM - Start - Abschaltgrund - Crash Schwere | 1 | - |
| 0x030EE2 | HVPM - Start - Abschaltgrund - Entladeschutzfunktion | 1 | - |
| 0x030EE6 | HVPM - Start - HV-Speicher - Einfacher Schützkleber | 1 | - |
| 0x030EE7 | HVPM - Start - HV-Speicher - Doppelter Schützkleber | 1 | - |
| 0x030EE8 | HVPM - Start - Signalausfall - Klimafunktionen | 1 | - |
| 0x030EE9 | HVPM - Start - Signalausfall - Antriebselektronik | 1 | - |
| 0x030EEA | HVPM - Start - Signalausfall  - Primären Energiequelle | 1 | - |
| 0x030EEB | HVPM - Start - HV-Bereitschaft nicht möglich trotz Anforderung | 1 | - |
| 0x030EEC | HVPM - Start - HV-System sicher abgeschaltet | 1 | - |
| 0x030EED | HVPM - Start - Powerdown-Fehler - Entladezeit-Überschreitung | 1 | - |
| 0x030EEE | HVPM - Start - Abschaltkategorien - Sofortiger befehlerbedinger Shutdown Hochvolt | 0 | - |
| 0x030EEF | HVPM - Start - Abschaltkategorien - Kontrollierter fehlerbedingter Shutdown Hochvolt | 0 | - |
| 0x030EF0 | HVPM - Start - Abschaltkategorien - Regulärer Shutdown | 0 | - |
| 0x030EF1 | HVPM - Start - Batterieloser Betrieb nicht verfügbar | 0 | - |
| 0x030EF2 | HVPM - Start - IHKA - VoKo | 0 | - |
| 0x030EF4 | HVPM - Start - HV-System sicher abgeschaltet - China | 1 | - |
| 0x030FB4 | DC/DC-Wandler, Derating | 0 | - |
| 0x031800 | AC-Laden - Modul 1 - AC-Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031802 | AC-Laden - Modul 1 - AC-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x031803 | AC-Laden - Modul 1 - AC-Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x03181F | AC-Laden - Modul 1 - DC-Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031830 | AC-Laden - Modul 1 - PFC-Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031832 | AC-Laden - Modul 1 - PFC-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x031833 | AC-Laden - Modul 1 - PFC-Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031836 | AC-Laden - Modul 1 - DC-Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031837 | AC-Laden - Modul 1 - DC-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x03183E | AC-Laden - Modul 2 - AC-Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x03183F | AC-Laden - Modul 2 - AC-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x031841 | AC-Laden - Modul 2 - AC-Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031845 | AC-Laden - Modul 1 - AC-Stromsensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031847 | AC-Laden - Modul 1 - AC-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x031848 | AC-Laden - Modul 1 - AC-Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x03184C | AC-Laden - Modul 2 - AC-Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031853 | AC-Laden - Modul 2 - AC-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x03185C | AC-Laden - Modul 2 - AC-Stromsensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031864 | AC-Laden - Modul 2 - DC-Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031865 | AC-Laden - Modul 1 - PFC-Temperatursensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031866 | AC-Laden - Modul 1 - PFC-Temperatursensor - Plausiblitätsfehler | 0 | - |
| 0x031867 | AC-Laden - Modul 1 - PFC-Temperatursensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x03186C | AC-Laden - Modul 2 - DC-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x03186D | AC-Laden - Modul 2 - DC-Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031875 | AC-Laden - Modul 2 - PFC-Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031876 | AC-Laden - Modul 2 - PFC-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x031887 | AC-Laden - Modul 2 - PFC-Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031888 | AC-Laden - Modul 2 - Temperatursensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031890 | AC-Laden - Modul 2 - Temperatursensor - Plausiblitätsfehler | 0 | - |
| 0x031899 | AC-Laden - Modul 2 - Temperatursensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03189A | AC-Laden - Modul 3 - AC-Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318A2 | AC-Laden - Modul 3 - AC-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x0318AB | AC-Laden - Modul 3 - AC-Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x0318CE | AC-Laden - Modul 3 - AC-Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318CF | AC-Laden - Modul 3 - AC-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x0318D4 | AC-Laden - Modul 3 - AC-Stromsensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x0318DB | AC-Laden - Modul 3 - DC-Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318DC | AC-Laden - Modul 3 - DC-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x0318DD | AC-Laden - Modul 3 - DC-Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x0318E0 | AC-Laden - Modul 1 - Bauteilschutz - AC-Überspannung | 0 | - |
| 0x0318E1 | AC-Laden - Modul 1 - Bauteilschutz - PFC-Überspannung | 0 | - |
| 0x0318E2 | AC-Laden - Modul 1 - Bauteilschutz - AC-Überstrom | 0 | - |
| 0x0318E3 | AC-Laden - Modul 1 - Bauteilschutz - AC-Unterspannung | 0 | - |
| 0x0318E4 | AC-Laden - Modul 1 - Bauteilschutz - PFC-Unterspannung | 0 | - |
| 0x0318E5 | AC-Laden - Modul 1 - Bauteilschutz - DC-Überspannung | 0 | - |
| 0x0318E6 | AC-Laden - Modul 1 - Bauteilschutz - DC-Überstrom | 0 | - |
| 0x0318E7 | AC-Laden - Modul 1 - Bauteilschutz - DC-Unterspannung | 0 | - |
| 0x0318E8 | AC-Laden - Modul 2 - Bauteilschutz - AC-Überspannung | 0 | - |
| 0x0318E9 | AC-Laden - Modul 2 - Bauteilschutz - AC-Überstrom | 0 | - |
| 0x0318EA | AC-Laden - Modul 2 - Bauteilschutz - AC-Unterspannung | 0 | - |
| 0x0318EB | AC-Laden - Modul 2 - Bauteilschutz - DC-Überspannung | 0 | - |
| 0x0318EC | AC-Laden - Modul 2 - Bauteilschutz - DC-Überstrom | 0 | - |
| 0x0318ED | AC-Laden - Modul 2 - Bauteilschutz - DC-Unterspannung | 0 | - |
| 0x0318EE | AC-Laden - Modul 2 - Bauteilschutz - PFC-Überspannung | 0 | - |
| 0x0318EF | AC-Laden - Modul 2 - Bauteilschutz - PFC-Unterspannung | 0 | - |
| 0x0318F0 | AC-Laden - Modul 3 - Bauteilschutz - AC-Überspannung | 0 | - |
| 0x0318F1 | AC-Laden - Modul 3 - Bauteilschutz - AC-Überstrom | 0 | - |
| 0x0318F2 | AC-Laden - Modul 3 - Bauteilschutz - AC-Unterspannung | 0 | - |
| 0x0318F3 | AC-Laden - Modul 3 - Bauteilschutz - DC-Überspannung | 0 | - |
| 0x0318F4 | AC-Laden - Modul 3 - Bauteilschutz - DC-Überstrom | 0 | - |
| 0x0318F5 | AC-Laden - Modul 3 - Bauteilschutz - DC-Unterspannung | 0 | - |
| 0x0318F6 | AC-Laden - Modul 3 - Bauteilschutz - PFC-Überspannung | 0 | - |
| 0x0318F7 | AC-Laden - Modul 3 - Bauteilschutz - PFC-Unterspannung | 0 | - |
| 0x0318FA | AC-Laden - Modul 3 - PFC-Spannungssensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318FB | AC-Laden - Modul 3 - PFC-Spannungssensor - Plausibilitätsfehler | 0 | - |
| 0x0318FD | AC-Laden - Modul 3 - PFC-Spannungssensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x0318FE | AC-Laden - Modul 3 - Temperatursensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x0318FF | AC-Laden - Modul 3 - Temperatursensor - Plausiblitätsfehler | 0 | - |
| 0x031901 | AC-Laden - Modul 3 - Temperatursensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031902 | AC-Laden - Modul 1 - Bauteilschutz - PFC-Temperatur | 0 | - |
| 0x031903 | AC-Laden - Modul 2 - Bauteilschutz - PFC-Temperatur | 0 | - |
| 0x031904 | AC-Laden - Modul 3 - Bauteilschutz - PFC-Temperatur | 0 | - |
| 0x031905 | AC-Laden - Modul 1 - DC-Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031906 | AC-Laden - Modul 1 - DC-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x031907 | AC-Laden - Modul 1 - DC-Stromsensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031908 | AC-Laden - Modul 2 - DC-Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031909 | AC-Laden - Modul 2 - DC-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x03190A | AC-Laden - Modul 2 - DC-Stromsensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03190B | AC-Laden - Modul 3 - DC-Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x03190C | AC-Laden - Modul 3 - DC-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x03190D | AC-Laden - Modul 3 - DC-Stromsensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031910 | AC-Laden - Komponentenschutz - N-Leitung-Stromsensor - Oberer Schwellenwert überschritten | 1 | - |
| 0x031911 | AC-Laden - Ungültige Leistungseinstellung LDK Modul - Einstellung führt zu Fehlern | 1 | - |
| 0x031912 | AC-Laden - Modul 1 - Komponentenschutz - Stromwert zw. 2 Leitungen - Oberer Schwellenwert überschritten | 0 | - |
| 0x031913 | AC-Laden - Modul 2 - Komponentenschutz - Stromwert zw. 2 Leitungen - Oberer Schwellenwert überschritten | 0 | - |
| 0x031914 | AC-Laden - Modul 3 - Komponentenschutz - Stromwert zw. 2 Leitungen - Oberer Schwellenwert überschritten | 0 | - |
| 0x03191B | AC-Laden - Modul 2 - PFC-Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x03191C | AC-Laden - Modul 2 - PFC-Stromsensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03191D | AC-Laden - Modul 2 - PFC-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x031921 | AC-Laden - Modul 3 - PFC-Stromsensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x031922 | AC-Laden - Modul 3 - PFC-Stromsensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x031923 | AC-Laden - Modul 3 - PFC-Stromsensor - Plausibilitätsfehler | 0 | - |
| 0x031927 | AC-Laden - Modul 1 - Bauteilschutz - PFC-Überstrom | 0 | - |
| 0x031928 | AC-Laden - Modul 2 - Bauteilschutz - PFC-Überstrom | 0 | - |
| 0x031929 | AC-Laden - Modul 3 - Bauteilschutz - PFC-Überstrom | 0 | - |
| 0x03192B | AC-Laden - Modul 1 - Bauteilschutz - AC Frequenz fehlerhaft | 0 | - |
| 0x03192C | AC-Laden - Modul 2 - Bauteilschutz - AC Frequenz fehlerhaft | 0 | - |
| 0x03192D | AC-Laden - Modul 1 - Passive Entladung - Fehlerhaft | 0 | - |
| 0x03192E | AC-Laden - Modul 2 - Passive Entladung - Fehlerhaft | 0 | - |
| 0x03192F | AC-Laden - Modul 3 - Passive Entladung - Fehlerhaft | 0 | - |
| 0x031938 | AC-Laden - Modul 3 - Bauteilschutz - AC Frequenz fehlerhaft | 0 | - |
| 0x03193C | AC-Laden - Modul 1 - LLC-Temperatursensor - Oberer Schwellenwert überschritten | 0 | - |
| 0x03193D | AC-Laden - Modul 1 - LLC-Temperatursensor - Unterer Schwellenwert unterschritten | 0 | - |
| 0x03193E | AC-Laden - Modul 1 - LLC-Temperatursensor - Plausiblitätsfehler | 0 | - |
| 0x031943 | AC-Laden, Bauteilschutz: KL30 Versorgung | 0 | - |
| 0x031950 | DC-Ladestation: Sammelfehler | 0 | - |
| 0x03195A | AC-Laden, Bauteilschutz: Kühlmitteltemperatur | 0 | - |
| 0x03195B | AC-Laden - Modul 1 - Bauteilschutz - LLC-Temperatur | 0 | - |
| 0x03195C | AC-Laden - Modul 2 - Bauteilschutz - LLC-Temperatur | 0 | - |
| 0x03195D | AC-Laden - Modul 3 - Bauteilschutz - LLC-Temperatur | 0 | - |
| 0x03195E | AC-Laden - Modul 1 - HW-Bauteilschutz | 0 | - |
| 0x03195F | AC-Laden - Modul 2 - HW-Bauteilschutz | 0 | - |
| 0x031960 | AC-Laden - Modul 3 - HW-Bauteilschutz | 0 | - |
| 0x031961 | AC-Laden - Modul 1 - Bauteilschutz - LLC Eingangsstrom | 0 | - |
| 0x031962 | AC-Laden - Modul 2 - Bauteilschutz - LLC Eingangsstrom | 0 | - |
| 0x031963 | AC-Laden - Modul 3 - Bauteilschutz - LLC Eingangsstrom | 0 | - |
| 0x032195 | Ladeklappe AC oder Combo, Verriegelungsaktor: Zustand unplausibel | 0 | - |
| 0x032197 | Ladeklappe DC, Verriegelungsaktor: Zustand unplausibel | 0 | - |
| 0x033DD0 | Shift-by-Wire: Anforderung Fahrbereitschaft Beenden bei v>30km/h | 0 | - |
| 0x033DD1 | Shift-by-Wire: Auto-P bei Fahrbereitschaftsverlust und Gurtdummy | 0 | - |
| 0x033DD2 | Shift-by-Wire: Auto-P wegen Fahrerabwesenheit | 0 | - |
| 0x033DD3 | Shift-by-Wire: Fahreranwesenheit unbekannt in D/R | 0 | - |
| 0x033DD4 | Shift-by-Wire: Fahrer nicht anwesend in N | 0 | - |
| 0x033DD5 | Shift-by-Wire: P-Anforderung durch Bremssystem in D/R | 0 | - |
| 0x033DD6 | Shift-by-Wire: P-Anforderung durch Bremssystem in N | 0 | - |
| 0x033DD7 | Shift-by-Wire: Parksperre ohne Fahrbereitschaft ausgelegt | 0 | - |
| 0x033DD8 | Shift-by-Wire: PWF-Wechsel von Fahren nach FBB ohne Fahrerwunsch | 0 | - |
| 0x033DD9 | Shift-by-Wire: Steuergerät in Fahrstufe ungleich P aufgestartet | 0 | - |
| 0x22404C | Aktive Kühlluftklappensteuerung 01 - Lageregelung - System vereist - Blockierung | 0 | - |
| 0x22404D | Aktive Kühlluftklappensteuerung 01 - Lageregelung - Positionsabweichungsfehler in allen Systemzuständen | 0 | - |
| 0x224056 | Aktive Kühlluftklappensteuerung 02 - Lageregelung - System vereist - Blockierung | 0 | - |
| 0x224057 | Aktive Kühlluftklappensteuerung 02 - Lageregelung - Positionsabweichungsfehler in allen Systemzuständen | 0 | - |
| 0x224F4B | Kühlsystem - Kühlungsnotlauf aktiv - Kühlleistung nicht eingeschränkt | 0 | - |
| 0x224F4C | Kühlsystem - Kühlungsnotlauf aktiv - Kühlleistung stark eingeschränkt | 0 | - |
| 0xBA0000 | DC/DC-Wandler - Bauteilschutz - HV Überspannung | 1 | - |
| 0xBA0001 | DC/DC-Wandler - Bauteilschutz - HV Unterspannung | 1 | - |
| 0xBA0002 | DC/DC-Wandler - Bauteilschutz - HV Überstrom | 1 | - |
| 0xBA0003 | DC/DC-Wandler - Bauteilschutz - LV Überspannung | 1 | - |
| 0xBA0004 | DC/DC-Wandler - Bauteilschutz - LV Unterspannung | 1 | - |
| 0xBA0005 | DC/DC-Wandler - Bauteilschutz - LV Überstrom | 1 | - |
| 0xBA001D | Hochvolt-Leitung, E-Maschine, Leitungsschutz, Degradation | 0 | - |
| 0xBA001E | Hochvolt-Leitung, E-Maschine 2, Leitungsschutz: Degradation | 0 | - |
| 0xBA001F | Hochvolt-Leitung, DC-Ladedose, Leitungsschutz: Degradation | 0 | - |
| 0xBA0020 | Hochvolt-Leitung, Ladesteuergerät, Leitungsschutz: Degradation | 0 | - |
| 0xBA02BE | UDPNM_E_TCPIP_TRANSMIT_ERROR | 0 | - |
| 0xBA02BF | IPSEC_FEHLER_AUFGETRETEN | 0 | - |
| 0xD78601 | Ethernet: CRC Fehler | 1 | - |
| 0xD78605 | Ethernet-Frameverlust | 1 | - |
| 0xD78606 | Ethernet ARP-Tabelleneintrag verworfen | 1 | - |
| 0xD78607 | IPv4-Adresskonflikt (duplizierte DHCP-Adresse erkannt) | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0021 | IPSEC_ATM02_STATUS | 0-n | High | 0x03 | TAB_DEFINITION_STATUS_ATM02 | - | - | - |
| 0x0022 | IPSEC_KOMBI_STATUS | 0-n | High | 0x0C | TAB_DEFINITION_STATUS_KOMBI | - | - | - |
| 0x0023 | IPSEC_MGU_STATUS | 0-n | High | 0x30 | TAB_DEFINITION_STATUS_MGU | - | - | - |
| 0x0024 | IPSEC_RSE_STATUS | 0-n | High | 0xC0 | TAB_DEFINITION_STATUS_RSE | - | - | - |
| 0x0025 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x175D | ETH_DROPPED_FRAME_STATUS | 0-n | High | 0xFF | ETH_DROPPED_FRAME_STATUS | - | - | - |
| 0x175E | ETH_DISCARDED_ARP_ENTRY | HEX | High | unsigned long | - | - | - | - |
| 0x175F | ARP_DISCARD_TYPE | 0-n | High | 0xFF | ARP_DISCARD_TYPE_TAB | - | - | - |
| 0x1775 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x17C0 | DUPLICATE_IP_ADDRESS | HEX | High | unsigned long | - | - | - | - |
| 0x17C1 | ETH_SOURCE_MAC_OF_DUPLICATE_IP_ADDRESS | TEXT | High | 6 | - | 1.0 | 1.0 | 0.0 |
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

### PROG_DEP_SP21_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | reserved |
| 0x01 | correctResult |
| 0x02 | incorrectResult |
| 0x03 | incorrectResult error SWE - HWE |
| 0x04 | incorrectResult error SWE - SWE |
| 0x05 | correctResult warning SWE - SWE |
| 0x06 | incorrect Result error Master i.O. - Slaves n.i.O. |
| 0xFF | reserved |

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

### RES_0X0F2C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SFA_VERSION_SOFTWARE_DATA | + | - | - | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Version number for the SFA software in the ECU |
| STAT_SFA_VERSION_TOKEN_DATA | + | - | - | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Version number for the accepted token format (see SFA_WRITE_TOKEN) which matches the version of the software |

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

### RES_0X104C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_TEST_MODE | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_TEST_MODE_STATE | - | - | - | Gibt an, ob das Schalten des PHY in den gewünschten Modus erfolgreich war. |

### RES_0X104F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DHCP_CLIENT_STATE | + | - | - | 0-n | high | unsigned char | - | DHCP_CLIENT_STATE_TAB | - | - | - | DHCP-Status des angefragten Netzwerk-Interfaces. |

### RES_0X1061_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FS_ENDE_WABL | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 0: Verriegelt (loeschen von Einzelfehlern und PDTCs wird unterbunden) 1: Entriegelt (loeschen von Einzelfehlern und PDTCs wird nicht unterbunden) |

### RES_0X10AB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WORSTCASECHECKTIME_IN_S_WERT | + | - | - | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Worst Case Laufzeit in Sekunden |

### RES_0X1106_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CURRENT_COUNTER_DATA | + | - | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Aktueller Counterwert. |

### RES_0X1111_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IPSEC | + | - | - | 0-n | high | unsigned char | - | TAB_STATUS_IPSEC | - | - | - | Gibt den Status des IPsec-Schlüsselaustausch wieder |

### RES_0X1112_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IPSEC | + | - | - | 0-n | high | unsigned char | - | TAB_STATUS_IPSEC | - | - | - | Gibt den Status des IPsec-Schlüsselaustausch wieder |

### RES_0X1113_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IPSEC | + | - | - | 0-n | high | unsigned char | - | TAB_STATUS_IPSEC | - | - | - | Gibt den Status des IPsec-Schlüsselaustausch wieder |

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

### RES_0X1820_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CORRECTED_SECOND_MEMBER_1_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). First entry is supposed to be the oldest. |
| STAT_CORRECTED_NANOSECOND_MEMBER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  First entry is supposed to be the oldest. |
| STAT_LOCAL_HARDWARE_COUNTER_1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  The first entry is supposed to be the oldest. |
| STAT_CORRECTED_SECOND_MEMBER_2_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). Next oldest entry. |
| STAT_CORRECTED_NANOSECOND_MEMBER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  Next oldest entry. |
| STAT_LOCAL_HARDWARE_COUNTER_2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  Next oldest entry. |
| STAT_CORRECTED_SECOND_MEMBER_3_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). Next oldest entry. |
| STAT_CORRECTED_NANOSECOND_MEMBER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  Next oldest entry. |
| STAT_LOCAL_HARDWARE_COUNTER_3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  Next oldest entry. |
| STAT_CORRECTED_SECOND_MEMBER_4_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). Next oldest entry. |
| STAT_CORRECTED_NANOSECOND_MEMBER_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  Next oldest entry. |
| STAT_LOCAL_HARDWARE_COUNTER_4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  Next oldest entry. |
| STAT_CORRECTED_SECOND_MEMBER_5_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). Next oldest entry. |
| STAT_CORRECTED_NANOSECOND_MEMBER_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  Next oldest entry. |
| STAT_LOCAL_HARDWARE_COUNTER_5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  Next oldest entry. |
| STAT_CORRECTED_SECOND_MEMBER_6_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). Next oldest entry. |
| STAT_CORRECTED_NANOSECOND_MEMBER_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  Next oldest entry. |
| STAT_LOCAL_HARDWARE_COUNTER_6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  Next oldest entry. |
| STAT_CORRECTED_SECOND_MEMBER_7_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). Next oldest entry. |
| STAT_CORRECTED_NANOSECOND_MEMBER_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  Next oldest entry. |
| STAT_LOCAL_HARDWARE_COUNTER_7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  Next oldest entry. |
| STAT_CORRECTED_SECOND_MEMBER_8_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). Next oldest entry. |
| STAT_CORRECTED_NANOSECOND_MEMBER_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  Next oldest entry. |
| STAT_LOCAL_HARDWARE_COUNTER_8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  Next oldest entry. |
| STAT_CORRECTED_SECOND_MEMBER_9_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). Next oldest entry. |
| STAT_CORRECTED_NANOSECOND_MEMBER_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  Next oldest entry. |
| STAT_LOCAL_HARDWARE_COUNTER_9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  Next oldest entry. |
| STAT_CORRECTED_SECOND_MEMBER_10_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | the lowest order Byte of the corrected second member indicating when the respective Sync message was sent (s(t1)). Depending on the deployed synchronization mechanism this information is either contained directly in the Sync message (DMCS on CAN/FlexRAx) or the corresponding follow-up message(DMCS/802.1AS on Ethernet). Last entry is supposed to be the youngest. |
| STAT_CORRECTED_NANOSECOND_MEMBER_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The corrected quarter-nanosecond-member contained in the corresponding follow-up message (ns(t1)).  Last entry is supposed to be the youngest. |
| STAT_LOCAL_HARDWARE_COUNTER_10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | The local (HW) counter value which is used to time-stamp the received sync message (T2).  Last entry is supposed to be the youngest. |
| STAT_LOCAL_HW_COUNTER_FREQUENCY_WERT | Hz | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Frequency [Hz] of the local (HW) counter.  |
| STAT_SCALING_FACTOR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Scaling factor of the local (HW) counter. |

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

### RES_0X400A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STATUS_INDICATOR | - | - | + | 0-n | high | unsigned char | - | TAB_STATUS_INDICATOR | - | - | - | Status der Aktiven Fehlermeldung 0x00: inactive 0x01: active |

### RES_0X8002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ECU_MODE_TYPE_SUBTYPE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | ECU Mode |
| STAT_ECU_MODE | 0-n | high | unsigned char | - | TAB_ECU_MODE | - | - | - | ECU-Mode |

### RES_0XA153_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETR_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_BETR_MODE | - | - | - | Rueckgabewert Betriebsmodes E-Luefter LIN 0: Tester inaktiv1: WMK-Anforderung zu hoch, Job nicht ausfuehrbar2: Fehler (Nachlauf, Montagemodus, Relaisfehler, LIN-Fehler)3: Ansteuerung Betriebsmodus aktiv 4: Betriebsmodus nicht unterstuetzt |
| STAT_IST_BA_ELUELIN_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Ist Betriebsart Luefter 1 LIN |

### RES_0XA166_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKKS_1_FS | - | - | + | 0-n | high | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | Funktionsstatus der Diagnosefunktion der ersten Klappe. |
| STAT_AKKS_1_SCHR_POSITION_SOLL_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollposition in Schritten erste Klappe |
| STAT_AKKS_1_SCHR_POSITION_IST_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Istposition in Schritten erste Klappe |
| STAT_AKKS_1_GRAD_POSITION_SOLL_WERT | - | - | + | - | high | unsigned int | - | - | 128.0 | 255.0 | 0.0 | Sollposition in Grad erste Klappe |
| STAT_AKKS_1_GRAD_POSITION_IST_WERT | - | - | + | - | high | unsigned int | - | - | 128.0 | 255.0 | 0.0 | Istposition in Grad erste Klappe |
| STAT_AKKS_1_DIAG_ALG_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Diagnosestatus allgemein der ersten Klappe |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SYSTEMCHECK_AKKS_1 | - | - | - | Diagnosestatus aktive erste Klappe |
| STAT_AKKS_1_FUNKTIONSZUSTAND_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller Status der ersten Klappe fuer Werkstatttester |
| STAT_AKKS_1_VARIANTE_WERT | - | - | + | HEX | high | unsigned char | - | - | - | - | - | Version für die AKKS 1 |

### RES_0XA167_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKKS_2_FS | - | - | + | 0-n | high | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | Funktionsstatus der Diagnosefunktion der zweiten Klappe |
| STAT_AKKS_2_SCHR_POSITION_SOLL_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Sollposition in Schritten zweite Klappe |
| STAT_AKKS_2_SCHR_POSITION_IST_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Istposition in Schritten zweite Klappe |
| STAT_AKKS_2_GRAD_POSITION_SOLL_WERT | - | - | + | - | high | unsigned int | - | - | 128.0 | 255.0 | 0.0 | Sollposition in Grad zweite Klappe |
| STAT_AKKS_2_GRAD_POSITION_IST_WERT | - | - | + | - | high | unsigned int | - | - | 128.0 | 255.0 | 0.0 | Istposition in Grad zweite Klappe |
| STAT_AKKS_2_DIAG_ALG_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Diagnosestatus allgemein der zweiten Klappe  |
| - | - | - | + | Bit | high | BITFIELD | - | BF_SYSTEMCHECK_AKKS_2 | - | - | - | Diagnosestatus aktive zweiten Klappe  |
| STAT_AKKS_2_FUNKTIONSZUSTAND_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller Status der zweiten Klappe fuer Werkstatttester |
| STAT_AKKS_2_VARIANTE_WERT | - | - | + | HEX | high | unsigned char | - | - | - | - | - | Version für die AKKS 2 |

### RES_0XA168_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WERK_AKKS_FS | - | - | + | 0-n | - | unsigned char | - | T_1BYTE_FS_DOP | - | - | - | Funktionsstatus des Werkssystemtests |

### RES_0XA1F1_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IST_HEIZLEISTUNG_EDH_HVS_WERT | + | + | + | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Heizleistung  (berechnet über Stromaufnahme und Spannung am eDH_HVS) |
| STAT_SOLL_HEIZLEISTUNG_EDH_HVS_WERT | + | + | + | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Heizleistung über LIN angefordert am eDH_HVS |
| STAT_REST_ZEITDAUER_WERT | + | + | + | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Zeitdauer bis Routine abgeschlossen ist |

### RES_0XAE78_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MESSUNG_ERFOLGREICH | - | - | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ERFOLGREICH | 1.0 | 1.0 | 0.0 | aktueller Zustand Isolationsmessung |
| STAT_MESSUNG_ISOLATIONSFEHLER | - | - | + | 0-n | high | unsigned char | - | TAB_ISOLATION_ISOLATIONSFEHLER | 1.0 | 1.0 | 0.0 | aktueller Zustand des Isolationsfehlers |

### RES_0XAE91_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_1BYTE_FS_DOP | - | - | - | Funktionsstatus des Entüftungsjobs |
| STAT_RESTZEIT_WERT | - | - | + | s | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Verbleibende Zeit bis der Entlüftungsjob abgeschlossen ist |

### RES_0XDB47_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERUNG_AC_STROM_LIMIT_AMPERE | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung für das Setzen der Stromgrenzen:  0 = Abgeschlossen;  1 = In Ausführung |
| STAT_AC_STROM_LIMIT_AMPERE_WERT | A | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Stromgrenze für AC-Laden |

### RES_0XDFD9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEVERFAHREN | 0-n | high | unsigned char | - | TAB_LADEVERFAHREN_HVPM | - | - | - | Art des Ladeverfahrens |
| STAT_LADESTATUS | 0-n | high | unsigned char | - | TAB_LADESTATUS | - | - | - | Statusinformation über den Ladezyklus |
| STAT_LADESTECKER | 0-n | high | unsigned char | - | TAB_LADESTECKER_HVPM | - | - | - | Status des Ladesteckers |
| STAT_HVB_SOC_DISP_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Display-SOC der HV-Batterie |
| STAT_LADEN_SPANNUNG_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Aktuelle AC-Ladespannung (AC-Laden) |
| STAT_LADEN_STROM_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | Maximaler AC-Ladestrom (AC-Laden) |
| STAT_STROMBEGRENZUNG_AC_LOW | 0-n | high | unsigned char | - | TAB_AC_LOW_I_LIMT_RESULT | - | - | - | Status der Strombegrenzung bei AC-Low-Laden |
| STAT_STROMBEGRENZUNG_AC_HIGH | 0-n | high | unsigned char | - | TAB_AC_HIGH_I_LIMIT_RESULT | - | - | - | Status der Strombegrenzung bei AC-High-Laden |
| STAT_LADEN_PROGNOSE_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Von der HV-Batterie prognostizierte Dauer bis zum Ladeende |
| STAT_LADEN_PROGNOSE_REST_WERT | min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Prognostizierte Restladedauer des HVPM: 0 - 65531 - Wertebereich; 65533 - Nicht verfügbar; 65532 - Initialisierung; 65534 - Fehler; 65535 - Signal ugültig |
| STAT_ENERGIEINHALT_IST_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Prognostizierter Energieinhalt der HV-Batterie in Abhängigkeit des Ladezustands und des Bordnetzverbrauches |
| STAT_ENERGIEINHALT_MAX_WERT | Ws | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher Energieinhalt der HV-Batterie |
| STAT_BEGINN_FENSTER_STD_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beginn des günstigen Ladefensters (AC-Laden) |
| STAT_BEGINN_FENSTER_MIN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Beginn des günstigen Ladefensters (AC-Laden) |
| STAT_ENDE_FENSTER_STD_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ende des günstigen Ladefensters (AC-Laden) |
| STAT_ENDE_FENSTER_MIN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ende des günstigen Ladefensters (AC-Laden) |
| STAT_LSC_TRIGGER_GRUND | 0-n | high | unsigned char | - | TAB_LSC_TRIGGER_HVPM | - | - | - | Status und Grund des LSC-Triggers |
| STAT_POLY_TIME_1_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 1. Stützpunktes |
| STAT_POLY_SOC_1_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 1. Stützpunktes |
| STAT_POLY_TIME_2_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 2. Stützpunktes |
| STAT_POLY_SOC_2_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 2. Stützpunktes |
| STAT_POLY_TIME_3_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 3. Stützpunktes |
| STAT_POLY_SOC_3_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 3. Stützpunktes |
| STAT_POLY_TIME_4_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 4. Stützpunktes |
| STAT_POLY_SOC_4_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 4. Stützpunktes |
| STAT_POLY_TIME_5_WERT | - | high | unsigned char | - | - | 1.0 | 100.0 | 0.0 | SOC-Unterstützpunkt: Normierte Zeit des 5. Stützpunktes |
| STAT_POLY_SOC_5_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | SOC-Unterstützpunkt: SOC des 5. Stützpunktes |
| STAT_LADEMODUS | 0-n | high | unsigned char | - | TAB_STATUS_LADEMODUS | - | - | - | Lademodus (konduktiv / induktiv) |
| STAT_POSITIONIERUNG | 0-n | high | unsigned char | - | TAB_STATUS_POSITIONIERUNG | - | - | - | Status Positionierung |
| - | Bit | high | BITFIELD | - | BF_GRUND_LADEUNTERBRECHUNG | - | - | - | Grund Ladeunterbrechung |
| STAT_HVB_SOC_IST_WERT | % | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ist-SOC der HV-Batterie |
| - | Bit | high | BITFIELD | - | BF_STATUS_LSC_AUSWAHL_LADEN_MODUS | - | - | - | Einstellung Lademodus Laden Abfahrtszeit |
| STAT_LSC_PROGNOSEMODE | 0-n | high | unsigned char | - | TAB_LSC_PROGNOSE_MODE | - | - | - | Aktueller LSC-Prognosemodus |
| STAT_LSC_VERSION | 0-n | high | unsigned char | - | TAB_STATUS_LSC_VERSION | - | - | - | LSC-Versionsnummer |
| STAT_AKT_PHASE_COUNT_AC_CHARGING | 0-n | high | unsigned char | - | TAB_AKTUELLE_PHASE_COUNT_AC_CHARGING | - | - | - | Anzahl der Phasen beim Laden |
| STAT_HV_BATTERY_SIZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximaler Brutto-Batterieinhalt vor Auslieferung an Kunden in Wh (nach SW-Regelung, nicht alternder und nicht von Temperatur abhängiger Wert) |
| STAT_ENERGIEDELTA_VOLL_WERT | kWh | high | unsigned int | - | - | 1.0 | 50.0 | 0.0 | Benötigte Energie zum Vollladen |
| STAT_LADEENDE_URSACHE | 0-n | high | unsigned char | - | TAB_URSACHE_LADEENDE | - | - | - | Ladeende Ursache (nur bei Ladeende gültig) |
| STAT_LSC_AUSWAHL_LADEN_SOFORT_MODUS | 0-n | high | unsigned char | - | TAB_HVPM_LSC_AUSWAHL_LADEN_SOFORT_MODUS | - | - | - | Einstellung Lademodus Sofortladen |
| STAT_LADEFENSTER1_AUSWAHL_NR | 0-n | high | unsigned char | - | TAB_LADEFENSTER1_AUSWAHL_NR | - | - | - | Auswahl des ersten günstigen Ladefensters (nur bei Zwei-Zeit-Wecker verfügbar) |
| STAT_LADEFENSTER2_AUSWAHL_NR | 0-n | high | unsigned char | - | TAB_STAT_LADEFENSTER2_AUSWAHL | - | - | - | Auswahl des zweiten günstigen Ladefensters |

### RES_0XE407_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEN_ABK_AKUSTIKBEGRENZUNG | 0-n | high | unsigned char | - | TAB_LADEN_ABK_AKUSTIKBEGRENZUNG | - | - | - | Akustikbegrenzung beim externen Laden |

### RES_0XE408_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEN_ABK_BATTERIESCHONUNG | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Schonung der HV Batterie beim externen Laden inaktiv. 0x01: Schonung der HV Batterie beim externen Laden aktiv. |

### RES_0XE409_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEN_ABK_LADESTROMBEGRENZUNG_AC_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Ladestrombegrenzung beim externen AC Laden für jede Phase. |
| STAT_LADEN_ABK_LADESTROMBEGRENZUNG_AC_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Ladestrombegrenzung für externes AC Laden nicht aktiv 0x01: Ladestrombegrenzung für externes AC Laden aktiv |

### RES_0XE40A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Günstig Laden nicht aktiviert (entspricht Sofortladen) 0x01: Günstig Laden aktiviert |
| STAT_LADEN_ABK_ABFAHRTSZEIT_VORKONDITIONIERUNG_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Vorkonditionierung nicht aktiviert 0x01: Vorkonditionierung aktiviert |
| STAT_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_START_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellter Beginn des Zeitfensters für günstiges Laden (Stundenanteil). |
| STAT_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_START_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellter Beginn des Zeitfensters für günstiges Laden (Minutenanteil). |
| STAT_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_ENDE_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ende des Zeitfensters für günstiges Laden (Stundenanteil). |
| STAT_LADEN_ABK_ABFAHRTSZEIT_GUENSTIG_LADEN_ENDE_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestelltes Ende des Zeitfensters für günstiges Laden (Minutenanteil). |

### RES_0XE40B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEN_ABK_LADEZIEL_SOE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladeziel auf SoE für externes Laden. |
| STAT_LADEN_ABK_LADEZIEL_REICHWEITE_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladeziel auf Reichweite für externes Laden. |

### RES_0XE40C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADEN_ABK_LADEANZEIGEN_ZEIT_GESTECKT_TAG_WERT | d | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt, wann das Ladekabel gesteckt wurde (Wochentag). |
| STAT_LADEN_ABK_LADEANZEIGEN_ZEIT_GESTECKT_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt, wann das Ladekabel gesteckt wurde (Stunde). |
| STAT_LADEN_ABK_LADEANZEIGEN_ZEIT_GESTECKT_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt, wann das Ladekabel gesteckt wurde (Minute). |
| STAT_LADEN_ABK_LADEANZEIGEN_ZEIT_LADESTART_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt für vorraussichtlichen Ladestart (Stunde). |
| STAT_LADEN_ABK_LADEANZEIGEN_ZEIT_LADESTART_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt für vorraussichtlichen Ladestart (Minute). |
| STAT_LADEN_ABK_LADEANZEIGEN_ZEIT_LADEENDE_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt für vorraussichtliches Ladeende (Stunde). |
| STAT_LADEN_ABK_LADEANZEIGEN_ZEIT_LADEENDE_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeitpunkt für vorraussichtliches Ladeende (Minute). |
| STAT_LADEN_ABK_LADEANZEIGEN_ZEIT_LADEENDE_AFZ_MODUS | 0-n | high | unsigned char | - | TAB_LADEN_ABK_LADEENDE_AFZ_ANZEIGEMODUS | - | - | - | Anzeigemodus für Abfahrtszeit. |
| STAT_LADEN_ABK_LADEANZEIGEN_ZEIT_LADEENDE_LEZ_MODUS | 0-n | high | unsigned char | - | TAB_LADEN_ABK_LADEENDE_LEZ_ANZEIGEMODUS | - | - | - | Anzeigemodus für den Ladeende-Zeitpunkt |
| STAT_LADEN_ABK_LADEANZEIGEN_STROMGRENZE_AC_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angezeigter Wert der AC Stromgrenze |
| STAT_LADEN_ABK_LADEANZEIGEN_AC_PHASENANZAHL | 0-n | high | unsigned char | - | TAB_LADEN_ABK_LADEANZEIGEN_AC_PHASEN | - | - | - | Anzeige der Phasenanzahl für das externe AC-Laden |
| STAT_LADEN_ABK_LADEANZEIGEN_LADELEISTUNG_WERT | W | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | Angezeigter Wert der Ladeleistung für externes AC-Laden |
| STAT_LADEN_ABK_LADEANZEIGEN_VERLAENGERUNG_LADEDAUER_MODUS | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Anzeige Verlängerung der Ladedauer nicht aktiv 0x01: Anzeige Verlängerung der Ladedauer aktiv |
| STAT_LADEN_ABK_LADEANZEIGEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzeige der Dauer der Ladeverlängerung |

### RES_0XE4C5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STACK_VERBRAUCH_CORE1_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Ermittelte maximaler Stack Verbrauch Core 1 |
| STAT_STACK_VERBRAUCH_CORE2_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Ermittelte maximaler Stack Verbrauch Core 2 |
| STAT_STACK_VERBRAUCH_CORE3_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Ermittelte maximaler Stack Verbrauch Core 3 |

### RES_0XE4C6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CPU_LOAD_AVG_CORE1_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Ermittelte durchschnittliche CPU Load Core 1 |
| STAT_CPU_LOAD_AVG_CORE2_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Ermittelte durchschnittliche CPU Load Core 1 |
| STAT_CPU_LOAD_AVG_CORE3_WERT | % | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Ermittelte durchschnittliche CPU Load Core 1 |

### RES_0XE4C7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VOLTAGE_LV_TARGET_DCDC_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Vorgabe Sollspannung DCDC |
| STAT_VOLTAGE_MIN_HV_TARGET_DCDC_WERT | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Vorgabe Minimale HV-Spannung DCDC |
| STAT_POWER_MAX_HV_TARGET_DCDC_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vorgabe Maximale HV Leistung DCDC |
| STAT_OPMODE_TARGET_DCDC | 0-n | high | unsigned char | - | TAB_OPMODE_DCDC | - | - | - | Vorgabe Sollbetriebsart DCDC |
| STAT_OPMODE_ACTUAL_DCDC | 0-n | high | unsigned char | - | TAB_OPMODE_DCDC | - | - | - | Istbetriebsart DCDC |
| STAT_VOLTAGE_HV_DCDC_WERT | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | HV Eingangsspannung DCDC |
| STAT_CURRENT_HV_DCDC_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | HV Eingangsstrom DCDC |
| STAT_VOLTAGE_LV_DCDC_WERT | V | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | LV Ausgangsspannung DCDC |
| STAT_CURRENT_LV_DCDC_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | LV Ausgangsstrom DCDC (Modul 1+2) |
| STAT_CURRENT_LV_LEG1_DCDC_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | LV Ausgangsstrom DCDC (1. Modul) |
| STAT_CURRENT_LV_LEG2_DCDC_WERT | A | high | signed int | - | - | 1.0 | 10.0 | 0.0 | LV Ausgangsstrom DCDC (2. Modul) |
| STAT_POWER_HV_DCDC_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | HV Eingangsleistung DCDC |
| - | Bit | high | BITFIELD | - | BF_ERROR_STATUS_DCDC | - | - | - | Fehlerursache DCDC. (DCDC Fehlerzustand als Einzelursache oder Kombination mehrerer Ursachen). |
| - | Bit | high | BITFIELD | - | BF_DERATING_STATUS_DCDC | - | - | - | Deratingstatus DCDC |
| STAT_TEMPERATURE_COOLANT_DCDC_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Kühlmitteltemperatur CCU |
| STAT_TEMPERATURE_BOARD_DCDC_LEG_1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Temperatur DCDC Arm1 |
| STAT_TEMPERATURE_BOARD_DCDC_LEG_2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Temperatur DCDC Arm 2 |
| STAT_EFFICIENCY_DCDC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad DCDC |
| STAT_UTILIZATION_DEGREE_DCDC_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslastung DCDC |
| STAT_CURRENT_LV_AVAILABLE_WERT | A | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Verfügbare Stromreserve DCDC |
| STAT_POWER_RELEASED_DCDC_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LV Ausgangsleistung DCDC |
| STAT_POWER_RESERVE_DCDC_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verfügbare Leistungsreserve DCDC |
| STAT_TOTAL_OPERATING_HOUR_COUNTER_WERT | h | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtbetriebsstunden  DCDC |

### RES_0XE4D5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATURE_PFC_SLE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur gemessen an der PFC Stufe des Modul 1 |
| STAT_TEMPERATURE_PFC_SLE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur gemessen an der PFC Stufe des Modul 2 |
| STAT_TEMPERATURE_PFC_SLE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur gemessen an der PFC Stufe des Modul 3 |
| STAT_TEMPERATURE_LLC_SLE1_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur gemessen an der LLC Stufe des Modul 1 |
| STAT_TEMPERATURE_LLC_SLE2_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur gemessen an der LLC Stufe des Modul 2 |
| STAT_TEMPERATURE_LLC_SLE3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur gemessen an der LLC Stufe des Modul 3 |
| STAT_TEMPERATURE_WATER_JACKET_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur Kühlmittel gemessen von der CCU |

### RES_0XE4D7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TARGET_OPERATING_STATE_SLE_1 | 0-n | high | unsigned char | - | TAB_UWB_BETRIEBSZUSTAND_LADEMODUL | - | - | - | Soll Betriebszustand Lademodul 1 |
| STAT_TARGET_OPERATING_STATE_SLE_2 | 0-n | high | unsigned char | - | TAB_UWB_BETRIEBSZUSTAND_LADEMODUL | - | - | - | Soll Betriebszustand Lademodul 2 |
| STAT_TARGET_OPERATING_STATE_SLE_3 | 0-n | high | unsigned char | - | TAB_UWB_BETRIEBSZUSTAND_LADEMODUL | - | - | - | Soll Betriebszustand Lademodul 3 |
| STAT_CURRENT_OPERATING_STATE_SLE_1 | 0-n | high | unsigned char | - | TAB_UWB_BETRIEBSZUSTAND_LADEMODUL | - | - | - | Ist Betriebszustand Lademodul 1 |
| STAT_CURRENT_OPERATING_STATE_SLE_2 | 0-n | high | unsigned char | - | TAB_UWB_BETRIEBSZUSTAND_LADEMODUL | - | - | - | Ist Betriebszustand Lademodul 2 |
| STAT_CURRENT_OPERATING_STATE_SLE_3 | 0-n | high | unsigned char | - | TAB_UWB_BETRIEBSZUSTAND_LADEMODUL | - | - | - | Ist Betriebszustand Lademodul 3 |
| STAT_CHARGING_DURATION_SLE_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtladedauer seit Ladestart für Lademodul 1 |
| STAT_CHARGING_DURATION_SLE_2_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtladedauer seit Ladestart für Lademodul 2 |
| STAT_CHARGING_DURATION_SLE_3_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtladedauer seit Ladestart für Lademodul 3 |
| STAT_TARGET_CHARGING_POWER_SLE_1_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vom LDK kommandierte Soll Leistung für das Lademodul 1 |
| STAT_TARGET_CHARGING_POWER_SLE_2_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vom LDK kommandierte Soll Leistung für das Lademodul 2 |
| STAT_TARGET_CHARGING_POWER_SLE_3_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vom LDK kommandierte Soll Leistung für das Lademodul 3 |
| STAT_HVAC_INPUT_POWER_SLE_1_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AC Eingangsleistung Lademodul 1 |
| STAT_HVAC_INPUT_POWER_SLE_2_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AC Eingangsleistung Lademodul 2 |
| STAT_HVAC_INPUT_POWER_SLE_3_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AC Eingangsleistung Lademodul 3 |
| STAT_HVDC_OUTPUT_POWER_SLE_1_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DC Ausgangsleistung Lademodul 1 |
| STAT_HVDC_OUTPUT_POWER_SLE_2_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DC Ausgangsleistung Lademodul 2 |
| STAT_HVDC_OUTPUT_POWER_SLE_3_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | DC Ausgangsleistung Lademodul 3 |
| STAT_HVDC_DERATING_POWER_MAX_SLE_1_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Derating Leistung Lademodul 1 |
| STAT_HVDC_DERATING_POWER_MAX_SLE_2_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Derating Leistung Lademodul 2 |
| STAT_HVDC_DERATING_POWER_MAX_SLE_3_WERT | W | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Derating Leistung Lademodul 3 |
| STAT_EFFICIENCY_OUT_SLE_1_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad Lademodul 1 |
| STAT_EFFICIENCY_OUT_SLE_2_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad Lademodul 2 |
| STAT_EFFICIENCY_OUT_SLE_3_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wirkungsgrad Lademodul 3 |
| STAT_TARGET_MAX_HVAC_CURRENT_SLE_1_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC Maximalstromvorgabe Lademodul 1 |
| STAT_TARGET_MAX_HVAC_CURRENT_SLE_2_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC Maximalstromvorgabe Lademodul 2 |
| STAT_TARGET_MAX_HVAC_CURRENT_SLE_3_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | AC Maximalstromvorgabe Lademodul 3 |
| STAT_TARGET_MAX_HVDC_CURRENT_SLE_1_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DC Maximalstromvrogabe Lademodul 1 |
| STAT_TARGET_MAX_HVDC_CURRENT_SLE_2_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DC Maximalstromvrogabe Lademodul 2 |
| STAT_TARGET_MAX_HVDC_CURRENT_SLE_3_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | DC Maximalstromvrogabe Lademodul 3 |
| STAT_HVAC_VOLTAGE_SLE_1_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AC Spannung Lademodul 1 |
| STAT_HVAC_VOLTAGE_SLE_2_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AC Spannung Lademodul 2 |
| STAT_HVAC_VOLTAGE_SLE_3_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AC Spannung Lademodul 3 |
| STAT_HVAC_FREQUENCY_L1_WERT | Hz | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AC Frequenz Lademodul 1 |
| STAT_HVAC_FREQUENCY_L2_WERT | A | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AC Frequenz Lademodul 2 |
| STAT_HVAC_FREQUENCY_L3_WERT | Hz | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AC Frequenz Lademodul 3 |
| STAT_HVAC_CURRENT_SLE_1_WERT | A | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktueller AC Strom Lademodul 1 |
| STAT_HVAC_CURRENT_SLE_2_WERT | A | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktueller AC Strom Lademodul 2 |
| STAT_HVAC_CURRENT_SLE_3_WERT | A | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Aktueller AC Strom Lademodul 3 |
| STAT_TARGET_SWITCH_MATRIX_ELEMENT | 0-n | high | unsigned char | - | TAB_SW_MATRIX_MODE | - | - | - | Kommandierter Sollzustand der AC Schaltmatrix |
| STAT_CURRENT_SWITCH_MATRIX_ELEMENT | 0-n | high | unsigned char | - | TAB_SW_MATRIX_MODE | - | - | - | Istzustand der Schaltmatrix |
| STAT_HVDC_VOLTAGE_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | HV DC Ausgangsspannung |
| STAT_HVDC_CURRENT_SLE_1_WERT | A | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | HC DC Ausgangsstrom Lademodul 1 |
| STAT_HVDC_CURRENT_SLE_2_WERT | A | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | HC DC Ausgangsstrom Lademodul 2 |
| STAT_HVDC_CURRENT_SLE_3_WERT | A | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | HC DC Ausgangsstrom Lademodul 3 |
| STAT_HVAC_MAX_AVAILABLE_CURRENT_SLE_1_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher AC Strom aus Lader Sicht |
| STAT_HVAC_MAX_AVAILABLE_CURRENT_SLE_2_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher AC Strom aus Lader Sicht |
| STAT_HVAC_MAX_AVAILABLE_CURRENT_SLE_3_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher AC Strom aus Lader Sicht |
| STAT_HVDC_MAX_AVAILABLE_CURRENT_SLE_1_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher DC Strom aus Lader Sicht |
| STAT_HVDC_MAX_AVAILABLE_CURRENT_SLE_2_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher DC Strom aus Lader Sicht |
| STAT_HVDC_MAX_AVAILABLE_CURRENT_SLE_3_WERT | A | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximal möglicher DC Strom aus Lader Sicht |
| STAT_CCCV | 0-n | high | unsigned char | - | TAB_CCCV_STATE | - | - | - | Aktueller Regelungsmode des Laders (CV/CC) |
| - | Bit | high | BITFIELD | - | BF_UWB_FEHLERURSACHE_LADEMODUL_SLE_1 | - | - | - | Fehlergrund Lademodul 1 |
| - | Bit | high | BITFIELD | - | BF_UWB_FEHLERURSACHE_LADEMODUL_SLE_2 | - | - | - | Fehlergrund Lademodul 2 |
| - | Bit | high | BITFIELD | - | BF_UWB_FEHLERURSACHE_LADEMODUL_SLE_3 | - | - | - | Fehlergrund Lademodul 3 |
| - | Bit | high | BITFIELD | - | BF_UWB_DERATING_LADEMODUL_SLE_1 | - | - | - | Limittierungsgrund Lademodul 1 |
| - | Bit | high | BITFIELD | - | BF_UWB_DERATING_LADEMODUL_SLE_2 | - | - | - | Limittierungsgrund Lademodul 2 |
| - | Bit | high | BITFIELD | - | BF_UWB_DERATING_LADEMODUL_SLE_3 | - | - | - | Limittierungsgrund Lademodul 3 |
| STAT_HVDC_DERATING_FACTOR_SLE_1_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Derating Faktor Lademodul 1 |
| STAT_HVDC_DERATING_FACTOR_SLE_2_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Derating Faktor Lademodul 2 |
| STAT_HVDC_DERATING_FACTOR_SLE_3_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Derating Faktor Lademodul 3 |
| STAT_CHARGER_TEMPERATURE_SLE_1_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur Lademodul 1 |
| STAT_CHARGER_TEMPERATURE_SLE_2_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur Lademodul 2 |
| STAT_CHARGER_TEMPERATURE_SLE_3_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -45.0 | Temperatur Lademodul 3 |

### RES_0XE4D8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SOLL_SCHALTMATRIX_POSITION | 0-n | high | unsigned char | - | TAB_SW_MATRIX_MODE | - | - | - | Sollpostion der Schaltmatrix: Offen (0) Einphasig (1) Dreiphasig (3) |
| STAT_IST_SCHALTMATRIX_POSITION | 0-n | high | unsigned char | - | TAB_SW_MATRIX_MODE | - | - | - | Istposition Schaltmatrix: Offen (0) Einphasig (1) Dreiphasig (3) |
| STAT_ZAEHLER_SCHALTVORGAENGE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der bisherigen Schaltvorgänge |
| STAT_AC_SPANNUNG_MODUL_1_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gemessene AC Spannung an Modul 1 |
| STAT_AC_SPANNUNG_MODUL_2_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gemessene AC Spannung an Modul 2 |
| STAT_AC_SPANNUNG_MODUL_3_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gemessene AC Spannung an Modul 3 |
| STAT_PHASEN_DIFFERENZ_INFO_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Phassendifferenz zwischen Phase 1 und 2 |
| STAT_PHASEN_DIFFERENZ_INFO_2_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Phassendifferenz zwischen Phase 1 und 3 |
| STAT_PHASEN_DIFFERENZ_INFO_3_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Phassendifferenz zwischen Phase 2 und 3 |
| STAT_PHASEN_DIFFERENZ_INFO_4_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Phassendifferenz zwischen Phase 3 und 1 |

### RES_0XE4D9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse5 |

### RES_0XE4DA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse6 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse7 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse8 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse9   |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse10 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse11 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse12 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse13 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse14 |
| STAT_DCDC_ZEIT_SPANNUNG1_STROM15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 1 und Stromklasse15 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse6 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse7 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse8 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse9   |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse10 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse11 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse12 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse13 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse14 |
| STAT_DCDC_ZEIT_SPANNUNG2_STROM15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 2 und Stromklasse15 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse6 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse7 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse8 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse9   |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse10 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse11 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse12 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse13 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse14 |
| STAT_DCDC_ZEIT_SPANNUNG3_STROM15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 3 und Stromklasse15 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse6 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse7 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse8 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse9   |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse10 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse11 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse12 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse13 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse14 |
| STAT_DCDC_ZEIT_SPANNUNG4_STROM15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 4 und Stromklasse15 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse6 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse7 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse8 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse9   |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse10 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse11 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse12 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse13 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse14 |
| STAT_DCDC_ZEIT_SPANNUNG5_STROM15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 5 und Stromklasse15 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse1 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse2 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse3 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse4 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse5 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse6 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse7 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse8 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse9   |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse10 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse11 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse12 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse13 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse14 |
| STAT_DCDC_ZEIT_SPANNUNG6_STROM15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | DCDC-Zeit in der Spannungsklasse 6 und Stromklasse15 |

### RES_0XE4DB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EFAN_RUNTIME_HV_CHARGE_1_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Laden 1 |
| STAT_EFAN_RUNTIME_HV_CHARGE_2_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Laden 2 |
| STAT_EFAN_RUNTIME_AC_OPER_1_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Standklima 1 |
| STAT_EFAN_RUNTIME_AC_OPER_2_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Standklima 2 |
| STAT_EFAN_RUNTIME_DRV_1_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Fahren 1 |
| STAT_EFAN_RUNTIME_DRV_2_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Fahren 2 |
| STAT_EFAN_RUNTIME_DRV_3_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Fahren 3 |
| STAT_EFAN_RUNTIME_DRV_4_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Fahren 4 |
| STAT_EFAN_RUNTIME_POSTDRV_1_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Nachlauf 1 |
| STAT_EFAN_RUNTIME_POSTDRV_2_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Nachlauf 2 |
| STAT_EFAN_RUNTIME_POSTDRV_3_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Nachlauf 3 |
| STAT_EFAN_RUNTIME_POSTDRV_4_WERT | h | - | unsigned long | - | - | 1.0 | 3600.0 | 0.0 | Dauer der E-Lüfteransteuerung im Nachlauf 4 |
| STAT_EFAN_COUNT_POSTDRV_OPRRNG_1_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Nachläufe im Bereich 1 |
| STAT_EFAN_COUNT_POSTDRV_OPRRNG_2_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Nachläufe im Bereich 2 |
| STAT_EFAN_COUNT_POSTDRV_OPRRNG_3_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Nachläufe im Bereich 3 |
| STAT_EFAN_COUNT_POSTDRV_OPRRNG_4_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Nachläufe im Bereich 4 |
| STAT_EFANRLY_COUNT_SWI_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Relaisschaltzyklen |
| STAT_EFAN_STAT_THD_1_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Statistikschwelle 1 |
| STAT_EFAN_STAT_THD_2_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Statistikschwelle 2 |
| STAT_EFAN_STAT_THD_3_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Statistikschwelle 3 |
| STAT_EFAN_STAT_THD_4_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Statistikschwelle 4 |
| STAT_EFAN_STAT_THD_5_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Statistikschwelle 5 |
| STAT_EFAN_STAT_THD_6_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Statistikschwelle 6 |
| STAT_EFAN_STAT_THD_7_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Statistikschwelle 7 |
| STAT_EFAN_STAT_THD_8_WERT | % | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Statistikschwelle 8 |

### RES_0XE528_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MONTAGEMODUS_AKTIV | 0-n | high | unsigned char | - | TAB_MONTAGEMODUS | - | - | - | Zustand des Montagemodus |

### RES_0XE52B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WASSERAUSTRITT_EDH_HVS_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | Temperatur Kühlmittel am Wasseraustritt des eDH_HVS |
| STAT_HVSTROM_EDH_HVS_WERT | A | high | unsigned int | - | - | 1.0 | 5.0 | 0.0 | HV-Stromaufnahme des eDH_HVS (interner Sensor) |
| STAT_HVSPANNUNG_EDH_HVS_WERT | V | high | unsigned int | - | - | 2.0 | 1.0 | 0.0 | HV-Spannung am eDH_HVS (interner Sensor) |
| STAT_ERR_NOD_EDH_HVS | 0-n | high | unsigned char | - | TAB_EDH_HVS_ERR_LIN | - | - | - | Sammelfehler des eDH_HVS |
| STAT_SOLL_LEISTUNG_EDH_HVS_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Soll Heizleistung des eDH_HVS |
| STAT_IST_LEISTUNG_EDH_HVS_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ist Heizleistung  (Berechnet über Stromaufnahme und Spannung am eDH_HVS) |
| STAT_LASTABWURF_EDH_HVS | 0-n | high | unsigned char | - | TAB_LASTABW_EDH_HVS | - | - | - | Signal Lastabwurf an eDH_HVS |
| STAT_SPANNUNG_PLAUSI_EDH_HVS_WERT | V | high | unsigned int | - | - | 2.0 | 1.0 | 0.0 | An den eDH gesendete HV-Spannung (zur Plausibilisierung des internen HV-Spannungssensors) |
| STAT_ERR_ST_COMM_MC_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_ERR_LIN | - | - | - | Kommunikationsfehler |
| STAT_ERR_ST_SEN_PCB_TEMP_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_SENS | - | - | - | Fehlerstatus des Temperatursensors auf der Leiterplatte |
| STAT_ERR_ST_SEN_COL_TEMP_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_SENS | - | - | - | Fehlerstatus des Temperatursensors im Kühlmittel |
| STAT_ERR_ST_LOKG_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_ERR_LIN | - | - | - | Fehlerstatus der  Entriegelung |
| STAT_ERR_ST_DGR_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_ERR_LIN | - | - | - | Degradation der Heizleistung für den aktuellen LIN-Wake-Zyklus. |
| STAT_ERR_ST_TEMP_COL_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_TEMP | - | - | - | Temperatur auf der Leiterplatte außerhalb Betriebsbereich |
| STAT_ERR_ST_TEMP_PCB_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_TEMP | - | - | - | Temperatur des Kühlmittels außerhalb Betriebsbereich |
| STAT_ERR_ST_SYS_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_ERR_LIN | - | - | - | Systemfehler Heizkreis (Fahrzeugseitig, HV-Betriebsspannung) |
| STAT_ERR_ST_UU_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_ERR_LIN | - | - | - | HV-Unterspannung |
| STAT_ERR_ST_OVL_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_ERR_LIN | - | - | - | HV-Überspannung |
| STAT_ERR_ST_INTL_EDH_HVS | 0-n | high | unsigned char | - | TAB_EDH_HVS_ERR_LIN | - | - | - | Interner Fehler: Lastkreis eDH (Überstrom, Kurzschluss) |
| STAT_ERR_ST_TMOUT_EDH_HVS_LIN | 0-n | high | unsigned char | - | TAB_EDH_HVS_ERR_LIN | - | - | - | LIN-Timeout: Totalausfall der Buskommunikation |

### RES_0XE52D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_THERM_AUSLASTUNG_HVS | 0-n | high | unsigned char | - | TAB_THER_EFF_HVS | - | - | - | Thermische Auslastung des HVS |
| STAT_SOLL_LEISTUNG_EDH_HVS_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vom eTmc angeforderte Heizleistung |
| STAT_IST_LEISTUNG_EDH_HVS_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Tatsächliche Heizleistung |
| STAT_HVPWR_BEREITG_LEISTUNG_HVS_HEIZEN_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Freigegebene Heizleistung für HVS heizen |
| STAT_HVPWR_BEREITG_LEISTUNG_ZUHEIZEN_WERT | W | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Freigegebene Heizleistung für IHKA zuheizen |
| STAT_AUSSENTEMPERATUR_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | Außentemperatur |
| STAT_TEMPERATUR_KUHELMITTEL_HVS_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | Kühlmitteltemperatur am HVS (Eingang) |

### RES_0XE532_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANF_WERKSLADEMODUS_NR | 0-n | high | unsigned char | - | TAB_STATUS_LADEMODUS_WERK | - | - | - | Aktuelle Auswahl Lademodus Werk |
| STAT_ZIEL_SOC_WERKSLADEMODUS_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Eingestellter SOC der HV-Batterie für Lademodus Werk |

### RES_0XE533_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HV_READY | 0/1 | high | unsigned char | - | - | - | - | - | Zustand HV-Ready (0 = Nicht hergestellt; 1 = Hergestellt) |
| STAT_EBN_FAHRBEREIT_NR | 0-n | high | unsigned char | - | TAB_FAHRBEREITSCHAFT_HV_SYSTEM | - | - | - | Status Fahrbereitschaft des HV-Systems |
| STAT_SPANNUNG_DC_HV_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Zwischenkreis-Spannung (gemessen an Leistungselektronik) |
| STAT_HDCAC_EREQ_NR | 0-n | high | unsigned char | - | TAB_HDCAC_EREQ | - | - | - | Anforderung Schließen der Schütze an SME |
| STAT_ANF_BZKOEM_NR | 0-n | high | unsigned char | - | TAB_ANF_BETRIEBSARTEN_KOORDINATOR_EM | - | - | - | Anforderung an EM-Betriebsartenkoordinator |
| STAT_ANF_ZK_ENTL | 0/1 | high | unsigned char | - | - | - | - | - | Anforderung Zwischenkreis-Entladung (0 = Nicht entladen, 1 = Entladen) |
| STAT_HVSTART_KOMM_NR | 0-n | high | unsigned char | - | TAB_HV_START_KOMM | - | - | - | Status des HV-Start-Zustandsautomaten |
| - | Bit | high | BITFIELD | - | BF_HV_START_FEHLER | - | - | - | Fehlerstatus des HV-Systems |
| STAT_ENTLADESCHUTZ_NR | 0-n | high | unsigned char | - | TAB_ENTLADESCHUTZ | - | - | - | Status des Entladeschutz-Zustandsautomaten |
| - | Bit | high | BITFIELD | - | BF_VERHINDERUNG_SPANNUNGSFREIHEIT_ANZEIGE | - | - | - | Verhinderungsgründe der Spannungsfreiheitsanzeige |
| STAT_AKTUELLE_ENERGIE_HV_BATTERIE_WERT | kWh | high | signed int | - | - | 1.0 | 50.0 | 0.0 | Aktuelle Energie der HV-Batterie |
| STAT_MAXIMALE_ENERGIE_HV_BATTERIE_WERT | kWh | high | signed int | - | - | 1.0 | 50.0 | 0.0 | Maximale Energie der HV-Batterie |
| - | Bit | high | BITFIELD | - | BF_STAT_ISO_ERROR | - | - | - | Statuswort des Isolationsfehlers |

### RES_0XE534_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSART_DCDC_KOMM | 0-n | high | unsigned char | - | TAB_HVPM_BA_DCDC_KOMM | - | - | - | Kommandierte Soll-Betriebsart |
| STAT_LEISTUNG_DCDC_KOMM_MAX_WERT | W | high | signed int | - | - | 10.0 | 1.0 | 0.0 | Kommandierte maximale HV-Leistungsaufnahme |
| STAT_SPANNUNG_DCDC_KOMM_HV_MIN_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Kommandierte minimale HV-Spannung |
| STAT_SPANNUNG_DCDC_KOMM_12V_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Kommandierte Soll-Spannung auf 12V Seite |
| STAT_BETRIEBSART_DCDC_IST | 0-n | high | unsigned char | - | TAB_HVPM_BA_DCDC_IST | - | - | - | Ist-Betriebsart |
| - | Bit | high | BITFIELD | - | BF_STAT_VERSORGUNG_DC_DC | - | - | - | Status der 12V-Bordnetz-Versorgung |
| - | Bit | high | BITFIELD | - | BF_FEHLER_STATUS_DC_DC | - | - | - | Fehler Status |
| STAT_AUSLASTUNG_DCDC_WERT | % | high | unsigned int | - | - | 1.0 | 512.0 | 0.0 | Auslastung |
| STAT_SPANNUNG_DCDC_HV_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Spannung auf HV Seite |
| STAT_STROM_DCDC_HV_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | Strom auf HV Seite |
| STAT_LEISTUNG_DCDC_HV_IST_WERT | W | high | signed int | - | - | 10.0 | 1.0 | 0.0 | Leistungsaufnahme auf HV-Seite |
| STAT_SPANNUNG_DCDC_12V_WERT | V | high | unsigned int | - | - | 1.0 | 64.0 | 0.0 | Spannung auf 12V Seite |
| STAT_STROM_DCDC_12V_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | Strom auf 12V Seite |
| STAT_LEISTUNG_DCDC_12V_IST_WERT | W | high | signed int | - | - | 10.0 | 1.0 | 0.0 | Leistungsabgabe auf 12V Seite |
| STAT_STROM_DCDC_12V_MAX_WERT | A | high | signed int | - | - | 1.0 | 32.0 | 0.0 | Maximaler Strom der durch den DC/DC-Wandler generiert werden kann |

### RES_0XE537_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_LADEKLAPPE_AC_CCS | 0/1 | high | unsigned char | - | - | - | - | - | Istwert des ZV-Stellers der Ladeklappe des AC bzw. CCS-Ladeanschlusses (0x00: Entriegelt; 0x01: Verriegelt) |

### RES_0XE538_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_LADEKLAPPE_AC_CCS | 0-n | high | unsigned char | - | TAB_POS_LADEKLAPPE_AC_CCS | - | - | - | Status des Positionssensors der Ladeklappe des AC bzw. CCS-Ladeanschlusses |
| STAT_ZV_AKTOR_LADEKLAPPE_AC_CCS | 0-n | high | unsigned char | - | TAB_ZV_LADEKLAPPE_AC_CCS | - | - | - | Status des ZV-Stellers der Ladeklappe des AC bzw. CCS-Ladeanschlusses |

### RES_0XE539_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_LADEKLAPPE_DC | 0/1 | high | unsigned char | - | - | - | - | - | Istwert des ZV-Stellers der Ladeklappe des DC-Ladeanschlusses (0x00: Entriegelt; 0x01: Verriegelt) |

### RES_0XE53A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_LADEKLAPPE_DC | 0-n | high | unsigned char | - | TAB_POS_LADEKLAPPE_DC | - | - | - | Status des Positionssensors der Ladeklappe des DC-Ladeanschlusses |
| STAT_ZV_AKTOR_LADEKLAPPE_DC | 0-n | high | unsigned char | - | TAB_ZV_LADEKLAPPE_DC | - | - | - | Status des ZV-Stellers der Ladeklappe des DC-Ladeanschlusses |

### RES_0XE53D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AC_IN_VOLTAGE_MAIN_ACCHARGING_M1_1_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M1 AC Input Voltage 1st Measurement RMS |
| STAT_AC_IN_VOLTAGE_MAIN_ACCHARGING_M1_2_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M1 AC Input Voltage 2nd Measurement RMS |
| STAT_AC_IN_VOLTAGE_MAIN_ACCHARGING_M2_1_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M2 AC Voltage 1st Measurement RMS |
| STAT_AC_IN_VOLTAGE_MAIN_ACCHARGING_M2_2_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M2 AC Input Voltage 2nd Measurement RMS |
| STAT_AC_IN_VOLTAGE_MAIN_ACCHARGING_M3_1_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M3 AC Input Voltage 1st Measurement RMS |
| STAT_AC_IN_VOLTAGE_MAIN_ACCHARGING_M3_2_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M3 AC Input Voltage 2nd Measurement RMS |
| STAT_PFC_IN_VOLTAGE_MAIN_ACCHARGING_M1_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M1 PFC Input Voltage Measurement |
| STAT_PFC_IN_VOLTAGE_MAIN_ACCHARGING_M2_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M2 PFC Input Voltage Measurement |
| STAT_PFC_IN_VOLTAGE_MAIN_ACCHARGING_M3_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M3 PFC Input Voltage Measurement |
| STAT_PFC_OUT_VOLTAGE_MAIN_ACCHARGING_M1_1_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M1 PFC Output Voltage 1st Measurement |
| STAT_PFC_OUT_VOLTAGE_MAIN_ACCHARGING_M1_2_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M1 PFC Output Voltage 2nd Measurement |
| STAT_PFC_OUT_VOLTAGE_MAIN_ACCHARGING_M2_1_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M2 PFC Output Voltage 1st Measurement |
| STAT_PFC_OUT_VOLTAGE_MAIN_ACCHARGING_M2_2_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M2 PFC Output Voltage 2nd Measurement |
| STAT_PFC_OUT_VOLTAGE_MAIN_ACCHARGING_M3_1_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M3 PFC Output Voltage 1st Measurement |
| STAT_PFC_OUT_VOLTAGE_MAIN_ACCHARGING_M3_2_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M3 PFC Output Voltage 2nd Measurement |
| STAT_DC_OUT_VOLTAGE_MAIN_ACCHARGING_M1_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M1 Output DC Voltage Measurement |
| STAT_DC_OUT_VOLTAGE_MAIN_ACCHARGING_M3_WERT | V | high | signed int | - | - | 1.0 | 10.0 | 0.0 | M3 Output DC Voltage Measurement |

### RES_0XE53E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AC_IN_CURRENT_MAIN_ACCHARGING_M1_1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M1 AC Input Current 1st Measurement |
| STAT_AC_IN_CURRENT_MAIN_ACCHARGING_M1_2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M1 AC Input Current 2nd Measurement |
| STAT_AC_IN_CURRENT_MAIN_ACCHARGING_M2_1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M2 AC Input Current 1st Measurement |
| STAT_AC_IN_CURRENT_MAIN_ACCHARGING_M2_2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M2 AC Input Current 2nd Measurement |
| STAT_AC_IN_CURRENT_MAIN_ACCHARGING_M3_1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M3 AC Input Current 1st Measurement |
| STAT_AC_IN_CURRENT_MAIN_ACCHARGING_M3_2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M3 AC Input Current 2nd Measurement |
| STAT_PFC1_CURRENT_MAIN_ACCHARGING_M1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M1 1st PFC Current Measurement |
| STAT_PFC2_CURRENT_MAIN_ACCHARGING_M1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M1 2nd PFC Current Measurement |
| STAT_PFC1_CURRENT_MAIN_ACCHARGING_M2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M2 1st PFC Current Measurement |
| STAT_PFC2_CURRENT_MAIN_ACCHARGING_M2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M2 2nd PFC Current Measurement |
| STAT_PFC1_CURRENT_MAIN_ACCHARGING_M3_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M3 1st PFC Current Measurement |
| STAT_PFC2_CURRENT_MAIN_ACCHARGING_M3_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M3 2nd PFC Current Measurement |
| STAT_LLC_CURRENT_MAIN_ACCHARGING_M1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M1 LLC Current Measurement |
| STAT_LLC_CURRENT_MAIN_ACCHARGING_M2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M2 LLC Current Measurement |
| STAT_LLC_CURRENT_MAIN_ACCHARGING_M3_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M3 LLC Current Measurement |
| STAT_DC_OUT_CURRENT_MAIN_ACCHARGING_M1_1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M1 DC Output Current 1st Measurement |
| STAT_DC_OUT_CURRENT_MAIN_ACCHARGING_M1_2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M1 DC Output Current 2nd Measurement |
| STAT_DC_OUT_CURRENT_MAIN_ACCHARGING_M2_1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M2 DC Output Current 1st Measurement |
| STAT_DC_OUT_CURRENT_MAIN_ACCHARGING_M2_2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M2 DC Output Current 2nd Measurement |
| STAT_DC_OUT_CURRENT_MAIN_ACCHARGING_M3_1_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M3 DC Output Current 1st Measurement |
| STAT_DC_OUT_CURRENT_MAIN_ACCHARGING_M3_2_WERT | A | high | signed int | - | - | 1.0 | 100.0 | 0.0 | M3 DC Output Current 2nd Measurement |

### RES_0XE563_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_LADEDOSE_AC_CCS | 0/1 | high | unsigned char | - | - | - | - | - | Istwert des ZV-Stellers der Ladedose des AC bzw. CCS-Ladeanschlusses (0x00: Entriegelt; 0x01: Verriegelt) |

### RES_0XE56F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISOWIDERSTAND_EXT_TRG_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter Isowiderstand vom Gesamtsystem im Nachlauf (geschlossene Schütze) |
| STAT_ISOWIDERSTAND_EXT_STD_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter Isowiderstand vom Gesamtsystem im Betrieb (geschlossene Schütze) |
| STAT_ISOWIDERSTAND_INT_WERT | kOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ermittelter interner Isowiderstand (offene Schütze); wird nur auf Anfrage per Service-Routine STEUERN_ISOLATION bei offenen Schützen gemessen |
| STAT_ISOWIDERSTAND_EXT_TRG_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Gesamtsystem im Nachlauf: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel |
| STAT_ISOWIDERSTAND_EXT_STD_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Gesamtsystem im Betrieb: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel |
| STAT_ISOWIDERSTAND_INT_PLAUS | 0/1 | high | unsigned char | - | - | - | - | - | Intern: 0 = Isolationswiderstand nicht plausibel, 1 = Isolationswiderstand plausibel; wird nur auf Anfrage per Service-Routine STEUERN_ISOLATION bei offenen Schützen gemessen |

### RES_0XE588_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HFK_LADESTECKER_EINGESTECKT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Einsteckvorgänge des Ladestecker |
| STAT_NETZ_ENTNOMMENE_ENERGIE_GESAMT_WERT | kWh | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamte entnommene Netzenergie |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_0_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn unter 10% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 11% und 20% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 21% und 30% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 31% und 40% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 41% und 50% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 51% und 60% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn zwischen 61% und 80% |
| STAT_HFK_HVB_SOC_BEREICH_LADEBEGINN_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladebeginn über 80% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende unter 35% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 36% und 48% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 49% und 60% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 61% und 70% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 71% und 80% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende zwischen 81% und 90% |
| STAT_HFK_HVB_SOC_BEREICH_LADEENDE_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ladezustand des HV-Speichers bei Ladeende über 90% |
| STAT_HFK_LADEENDE_URSACHE_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = unbekannt |
| STAT_HFK_LADEENDE_URSACHE_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Ziel erreicht |
| STAT_HFK_LADEENDE_URSACHE_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Ladestopp vom Fahrer angefordert |
| STAT_HFK_LADEENDE_URSACHE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Ladestecker abgezogen |
| STAT_HFK_LADEENDE_URSACHE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Netzausfall (auch 230V/110V-Stecker abgezogen) |
| STAT_HFK_LADEENDE_URSACHE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Fehler im HV-System |
| STAT_HFK_LADEENDE_URSACHE_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Häufigkeit Ladeendeursache = Vorhalt |

### RES_0XE5AF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASW_EWP_LSE_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ansteuerwert vom Tester zur Ansteuerung Elektrische Wasserpumpe Leistungselektronik  Kuehlung ueber LIN auslesen |

### RES_0XE5B1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWPLSE_SPANNUNG_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Spannung an der Pumpe |
| STAT_EWPLSE_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | aktuelle Stromaufnahme der Pumpe |
| STAT_EWPLSE_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | aktuelle Temperatur der Pumpe |
| STAT_EWPLSE_DREHZ_WERT | 1/min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktuelle Drehzahl der Pumpe |
| STAT_EWPLSE_DIAG_DREHZ_AKT | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status Drehzahlüberwachung el. Wasserpumpe aktiv  (Fehler Status: 0 = Drehzahlüberwachung / 1 = keine Drehzahlüberwachung) |
| STAT_EWPLSE_DIAG_UEBERTEMP_EL | 0-n | high | unsigned char | - | TAB_EWPLSE_DIAG_UEBERTEMP_EL | - | - | - | Fehler Status Übertemperatur Elektronik el. Wasserpumpe |
| STAT_EWPLSE_DIAG_UEBERSTROM | 0-n | high | unsigned char | - | TAB_EWPLSE_DIAG_UEBERSTROM | - | - | - | Fehler Status Überstrom Elektronik el. Wasserpumpe |
| STAT_EWPLSE_DIAG_TROCKENLAUF | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status Trockenlauf el. Wasserpumpe aktiv  (Fehler Status: 0 = kein Trockenlauf / 1 = Trockenlauf) |
| STAT_EWPLSE_DIAG_SPANNUNGSVER | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status falsche Versorgungsspannung el. Wasserpumpe erfüllt  (0 = Versorgungsspannung in Ordnung / 1 = Unter-/Überspannung) |
| STAT_EWPLSE_DIAG_PUMPENBLOCK | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status Blockierung el. Wasserpumpe aktiv  (0 = keine Blockierung / 1 = Blockierung) |
| STAT_EWPLSE_DIAG_ELEKTR | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status elektrischer Fehler  (0 = Kein interner Fehler erkannt / 1 = Unplausible Temperatur-, Spannung-, Strommessung erkannt) |

### RES_0XE5B2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASW_DREIWEGEVENTIL_HOCHVOLTSPEICHER_WERT | % | high | signed int | - | - | 1.0 | 81.92 | 0.0 | Ansteuerwert vom Tester zur Ansteuerung Dreiwegeventil Kühlkreis Hochvoltspeicher |

### RES_0XE5D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BELEUCHTUNG_LADEDOSE_AC_CCS | 0-n | high | unsigned char | - | TAB_BELEUCHTUNG_LADEDOSE | - | - | - | Istwert der Beleuchtung der Ladedose des AC bzw. CCS-Ladeanschlusses |

### RES_0XE5D2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESTECKER_LADEDOSE_AC_CCS | 0-n | high | unsigned char | - | TAB_LADESTECKER_LADEDOSE | - | - | - | Status des Ladesteckers der Ladedose des AC bzw. CCS-Ladeanschlusses |
| STAT_ZV_AKTOR_LADEDOSE_AC_CCS | 0-n | high | unsigned char | - | TAB_ZV_AKTOR_LADEDOSE_AC_CCS | - | - | - | Status des ZV-Aktors der Ladedose des AC bzw. CCS-Ladeanschlusses |
| STAT_ZV_SENSOR_LADEDOSE_AC_CCS | 0-n | high | unsigned char | - | TAB_ZV_SENSOR_LADEDOSE_AC_CCS | - | - | - | Status des ZV-Sensors der Ladedose des AC bzw. CCS-Ladeanschlusses |
| STAT_BELEUCHTUNG_LADEDOSE_AC_CCS | 0-n | high | unsigned char | - | TAB_BELEUCHTUNG_LADEDOSE | - | - | - | Status der Beleuchtung der Ladedose des AC bzw. CCS-Ladeanschlusses |

### RES_0XE5D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_LADEDOSE_DC | 0/1 | high | unsigned char | - | - | - | - | - | Istwert des ZV-Stellers der Ladedose des DC-Ladeanschlusses  (0x00: Entriegelt; 0x01: Verriegelt) |

### RES_0XE5D4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BELEUCHTUNG_LADEDOSE_DC | 0-n | high | unsigned char | - | TAB_BELEUCHTUNG_LADEDOSE | - | - | - | Istwert der Beleuchtung der Ladedose des DC-Ladeanschlusses |

### RES_0XE5D5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LADESTECKER_LADEDOSE_DC | 0-n | high | unsigned char | - | TAB_LADESTECKER_LADEDOSE | - | - | - | Status des Ladesteckers der Ladedose des DC-Ladeanschlusses |
| STAT_ZV_AKTOR_LADEDOSE_DC | 0-n | high | unsigned char | - | TAB_ZV_AKTOR_LADEDOSE_DC | - | - | - | Status des ZV-Aktors der Ladedose des DC-Ladeanschlusses |
| STAT_ZV_SENSOR_LADEDOSE_DC | 0-n | high | unsigned char | - | TAB_ZV_SENSOR_LADEDOSE_DC | - | - | - | Status des ZV-Sensors der Ladedose des DC-Ladeanschlusses |
| STAT_BELEUCHTUNG_LADEDOSE_DC | 0-n | high | unsigned char | - | TAB_BELEUCHTUNG_LADEDOSE | - | - | - | Status der Beleuchtung der Ladedose des DC-Ladeanschlusses |

### RES_0XE5DD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTO_P_DEACTIVATE | 0-n | high | unsigned char | - | TAB_STAT_AUTO_P_DEACTIVATE | - | - | - | Status von AUTO-P aktiv/nicht aktiv.Siehe Tabelle TAB_STAT_AUTO_P_DEACTIVATE. |

### RES_0XE5DE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SBW_CTR_PD_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler P-D |
| STAT_SBW_CTR_PR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler P-R |
| STAT_SBW_CTR_PN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler P-N |
| STAT_SBW_CTR_RD_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler R-D |
| STAT_SBW_CTR_RN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler R-N |
| STAT_SBW_CTR_RP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler R-P |
| STAT_SBW_CTR_ND_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler N-D |
| STAT_SBW_CTR_NR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler N-R |
| STAT_SBW_CTR_NP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler N-P |
| STAT_SBW_CTR_DR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler D-R |
| STAT_SBW_CTR_DN_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler D-N |
| STAT_SBW_CTR_DP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Schaltungszähler D-P |
| STAT_SBW_CTR_AUTON_ROLLING_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Auto-N Rollen falsche Fahrtrichtung |
| STAT_SBW_CTR_AUTOP_LEAVE_CAR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Auto-P Fahrerabwesenheit |
| STAT_SBW_CTR_BELT_DUMMY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Auto-P Fahrer unbekannt |
| STAT_SBW_CTR_CAR_WASH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Waschstraßenfunktion |
| STAT_SBW_CTR_DRIVING_READINESS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Verlust Fahrbereitschaft ohne Fahrerwunsch |
| STAT_SBW_CTR_P_OVER_5KMH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Ratschen Parksperre |
| STAT_SBW_CTR_PN_WITHOUT_FAHREN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler P-Auslegen ohne Fahrbereitschaft |
| STAT_SBW_CTR_BRSYS_HLP_D_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Bremshilferuf in D |
| STAT_SBW_CTR_BRSYS_HLP_R_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Bremshilferuf in R |
| STAT_SBW_CTR_BRSYS_HLP_N_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zähler Bremshilferuf in N |
| STAT_SBW_CTR_TIME_B_MODE_WERT | - | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | Zeitdauer in B-Modus |
| STAT_SBW_CTR_B_MODE_ACTIVATE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktivierungen B-Modus |
| STAT_SBW_CTR_B_MODE_DEACTIVATE_GWS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungen B-Modus durch GWS |
| STAT_SBW_CTR_B_MODE_DEACTIVATE_TARPO_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Deaktivierungen B-Modus durch Positionswechsel |

### RES_0XE680_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASW_ELUEFTER_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Istwert E-Lüfter |

### RES_0XE681_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASW_ELUEFTER_RELAIS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ist Stellgliedposition E-Lüfter-Relais |

### RES_0XE683_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASW_EWP_HVS_WERT | 1/min | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ansteuerwert vom Tester zur Ansteuerung Elektrische Wasserpumpe fuer HVS Kuehlung ueber LIN auslesen |

### RES_0XE685_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASW_AKKS_1_WERT | % | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ansteuerwert vom Tester zur Ansteuerung Aktive Kuehlklappe 1 über LIN auslesen |

### RES_0XE686_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ASW_AKKS_2_WERT | % | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Ansteuerwert vom Tester zur Ansteuerung Aktive Kuehlklappe 2 über LIN auslesen |

### RES_0XE820_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZULIEF_NUM_WERT | HEX | - | unsigned int | - | - | - | - | - | Zulieferer Nummer |
| STAT_FUNK_NUM_WERT | HEX | - | unsigned int | - | - | - | - | - | Funktions Nummer |
| STAT_VAR_LIN_WERT | HEX | - | unsigned char | - | - | - | - | - | Variante LIN-Luefter |
| STAT_PROD_TAG_WERT | HEX | - | unsigned char | - | - | - | - | - | Produktionsdatum Tag |
| STAT_PROD_MON_WERT | HEX | - | unsigned char | - | - | - | - | - | Produktionsdatum Monat |
| STAT_PROD_JHR_WERT | HEX | - | unsigned char | - | - | - | - | - | Produktionsdatum Jahr |
| STAT_SERIEN_NR_WERT | HEX | - | unsigned long | - | - | - | - | - | Seriennummer |
| STAT_SW_REF_WERT | HEX | - | unsigned int | - | - | - | - | - | Software Referenznummer |
| STAT_HW_REF_WERT | HEX | - | unsigned int | - | - | - | - | - | Hardware Referenznummer |
| STAT_STATUS_ELUE_LIN | 0-n | - | unsigned char | - | T_BMWFANLIN1_ST_READBYIDTSTR_UB_TEXTTABLE_DOP | - | - | - | Statusrueckmeldung Tester Auslesen Metadaten E-Luefter |
| STAT_SPNG_VERS_WERT | HEX | - | unsigned char | - | - | - | - | - | vorgesehene Versorgungsspannung fuer den Luefter 12V oder 48V |
| STAT_LEIST_KLASSE | 0-n | - | unsigned char | - | T_BMWFANLIN1_PWR_CLAS_UB_TEXTTABLE_DOP | - | - | - | Leistungsklasse Luefter |
| STAT_HERST_LUEFTER_WERT | HEX | - | unsigned char | - | - | - | - | - | Hersteller Luefterantrieb |
| STAT_WERK_LUEFTER_WERT | HEX | - | unsigned char | - | - | - | - | - | Produktionswerk Luefterantrieb |
| STAT_FAM_LUEFTER_WERT | HEX | - | unsigned char | - | - | - | - | - | Produktfamilie Luefterantrieb |

### RES_0XE822_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HVSEWP_SPANNUNG_WERT | V | high | unsigned int | - | - | 0.1 | 1.0 | 0.0 | Spannung an der Pumpe |
| STAT_HVSEWP_STROM_WERT | A | high | unsigned char | - | - | 1.0 | 5.0 | 0.0 | aktuelle Stromaufnahme der Pumpe |
| STAT_HVSEWP_TEMP_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | aktuelle Temperatur der Pumpe |
| STAT_HVSEWP_DREHZ_WERT | 1/min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | aktuelle Drehzahl der Pumpe |
| STAT_HVSEWP_DIAG_DREHZ_AKT | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status Drehzahlüberwachung el. Wasserpumpe aktiv  (Fehler Status: 0 = Drehzahlüberwachung / 1 = keine Drehzahlüberwachung) |
| STAT_HVSEWP_DIAG_UEBERTEMP_EL | 0-n | high | unsigned char | - | TAB_HVSEWP_DIAG_UEBERTEMP_EL | - | - | - | Fehler Status Übertemperatur Elektronik el. Wasserpumpe |
| STAT_HVSEWP_DIAG_UEBERSTROM | 0-n | high | unsigned char | - | TAB_HVSEWP_DIAG_UEBERSTROM | - | - | - | Fehler Status Überstrom Elektronik el. Wasserpumpe |
| STAT_HVSEWP_DIAG_TROCKENLAUF | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status Trockenlauf el. Wasserpumpe aktiv  (Fehler Status: 0 = kein Trockenlauf / 1 = Trockenlauf) |
| STAT_HVSEWP_DIAG_SPANNUNGSVER | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status falsche Versorgungsspannung el. Wasserpumpe erfüllt  (0 = Versorgungsspannung in Ordnung / 1 = Unter-/Überspannung) |
| STAT_HVSEWP_DIAG_PUMPENBLOCK | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status Blockierung el. Wasserpumpe aktiv  (0 = keine Blockierung / 1 = Blockierung) |
| STAT_HVSEWP_DIAG_ELEKTR | 0/1 | high | unsigned char | - | - | - | - | - | Fehler Status elektrischer Fehler  (0 = Kein interner Fehler erkannt / 1 = Unplausible Temperatur-, Spannung-, Strommessung erkannt) |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | signed char | - | - | - | - | - | 00: Default value for the first version 01-FE: Index of hardware modification FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SFA_CLEAR_FEATURE | 0x0F2B | - | Removing of a feature activation by deleting the corresponding Secure Token | - | - | - | - | - | - | - | - | - | 31 | ARG_0x0F2B_R | - |
| SFA_READ_VERSION | 0x0F2C | - | Read out of the SFA Version | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x0F2C_R |
| SFA_DELETE_TOKEN | 0x0F2D | - | This function ensures a deletion of a Token without deleting the token history | - | - | - | - | - | - | - | - | - | 31 | ARG_0x0F2D_R | - |
| SFA_VERIFY_TOKEN | 0x0F2E | - | This function triggers the import check as specified in SEC1865 of Secure Token in a control unit. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| ETH_GET_DHCP_STATUS | 0x104F | - | Lesen den aktuellen DHCP Status. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104F_R | RES_0x104F_R |
| FS_LOESCHEN_PERMANENT | 0x1060 | - | Job zum Löschen der Permanent-DTCs | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FEHLERSPEICHER_ENDE_WERKSABLAUF | 0x1061 | - | Löschen von Einzelfehlern und Permanent-DTCs unterbindet | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1061_R |
| CERTIFICATE_MANAGEMENT_START_CHECK | 0x10AB | - | Startet die detaillierte Überprüfung der steuergeräteindividuellen Zertifikate. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x10AB_R |
| FALLBACK_FIELD_MODE | 0x1100 | - | This function triggers the Mode change to Field Mode. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LCS | 0x1104 | - | Locking Configuration Switch | - | - | - | - | - | - | - | - | - | 2E | ARG_0x1104_D | - |
| SET_SECOC_COUNTER | 0x1105 | - | Setzt den Counterwert für eine spezifische SecOC dataID. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1105_R | - |
| GET_SECOC_COUNTER | 0x1106 | - | Liest den Counterwert für eine spezifische SecOC dataID aus. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1106_R |
| IPSEC_START_KEY_EXCHANGE | 0x1111 | - | Startet den IPsec-Schlüsselaustausch. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1111_R |
| IPSEC_STOP_KEY_EXCHANGE | 0x1112 | - | Stoppt den IPsec-Schlüsselaustausch. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1112_R |
| IPSEC_LOCK_CONFIGURATION | 0x1113 | - | Verriegeln der IPsec-Konfiguration. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1113_R |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| READ_SYNC_TIMING_INFORMATION | 0x1820 | - | read_sync-timing-information  DOORS-ID: DMCS_DBG_159 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1820_D |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| ACTIVE_ERROR_MESSAGE | 0x400A | - | DM: Persistentes aktivieren / deaktivieren / auslesen der aktiven Fehlermeldungen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x400A_R |
| LIST_MANIPULATION_IPSEC | 0x8001 | STAT_STATUS_IPSEC | Status | 0-n | - | High | unsigned char | TAB_DEFINITION_STATUS | - | - | - | - | 22 | - | - |
| ECUMODES_READ_MODE | 0x8002 | - | Auslesen des aktuellen ECU Modes | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x8002_D |
| ELUE_BETRIEBSMODE | 0xA153 | - | Vorgabe Betriebsmodus E-Luefter LIN - Starten / Stoppen / Auslesen Startvoraussetzungen: B_kl15 == TRUE. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA153_R | RES_0xA153_R |
| SYSTEMCHECK_AKKS_1 | 0xA166 | - | Aktives Kühlklappen Master-Master über LIN Klappe 1 | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA166_R |
| SYSTEMCHECK_AKKS_2 | 0xA167 | - | Aktives Kühlklappen Master-Master über LIN Klappe 2 | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA167_R |
| WERKSTEST_AKKS_RESET | 0xA168 | - | Werkstest AKKS zuruecksetzen !! Job faeng eigenstaendig neu an zu laufen!!! - Starten / Stoppen / Auslesen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA168_R |
| SYSTEMTEST_EDH_HVS | 0xA1F1 | - | Vorgabe Heizbetrieb eDH_HVS Starten/Stoppen/Auslesen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA1F1_R |
| ISOLATIONSTEST | 0xAE78 | - | Start/Stop/Ergebnis Isolationstest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE78_R |
| HVPM_LADEHISTOGRAMM_ZAEHLER_LOESCHEN | 0xAE7A | - | Löschen des Histogramms und Zählers aller Ladevorgänge | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE7A_R | - |
| HVPM_LOESCHEN_LADEHISTORIE | 0xAE7B | - | Löschen der Historie für die letzten 4 Ladevorgänge. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAE7B_R | - |
| PRODUCTION_RESTORE_VALUE | 0xAE90 | - | Wiederherstellung  der Werte im Auslieferungszustand vom NVRam-Speicher. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| KUEHLSYSTEM_ENTLUEFTUNG | 0xAE91 | - | Entlüftungsroutine für Kühlsystem | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAE91_R |
| HVPM_LADESTROM_EINSTELLUNG_AMPERE | 0xDB47 | - | Auslesen/Ändern der Ladestrombegrenzung (ABK2018) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDB47_D | RES_0xDB47_D |
| HVPM_LAST_STATE_CALL | 0xDFD9 | - | Lesen des Last-State-Calls (HVPM2015) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDFD9_D |
| LADEN_ABK_AKUSTIKBEGRENZUNG | 0xE407 | - | ABK Kundeneinstellung zur Akustikbegrenzung beim externen Laden | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE407_D | RES_0xE407_D |
| LADEN_ABK_BATTERIESCHONUNG | 0xE408 | - | ABK Kundeneinstellung zur Schonung der HV-Batterie beim externen Laden | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE408_D | RES_0xE408_D |
| LADEN_ABK_LADESTROMBEGRENZUNG_AC | 0xE409 | - | ABK Kundeneinstellung zur Ladestrombegrenzung beim externen AC Laden | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE409_D | RES_0xE409_D |
| LADEN_ABK_ABFAHRTSZEIT | 0xE40A | - | ABK Kundeneinstellung zur Abfahrtszeit beim externen Laden | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE40A_D | RES_0xE40A_D |
| LADEN_ABK_LADEZIEL | 0xE40B | - | ABK Kundeneinstellung zum Ladeziel beim externen Laden | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE40B_D | RES_0xE40B_D |
| LADEN_ABK_LADEANZEIGEN | 0xE40C | - | ABK Kundenanzeigen zum externen Laden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE40C_D |
| STACK_VERBRAUCH | 0xE4C5 | - | Maximaler Stackverbrauch je Core | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4C5_D |
| CPU_LOAD | 0xE4C6 | - | Durchschnittliche CPU Load je Core | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4C6_D |
| DIAG_STANDARD_DCDC | 0xE4C7 | - | Diagnosejob zum Auslesen aktueller Betriebsgrößen und des Status des DCDC Wandlers | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4C7_D |
| EFAN_POWERCLASS | 0xE4C9 | STAT_POWER_CLASS_EFAN_WERT | Leistungsklasse des E-Lüfters | W | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CHARGER_TEMPERATURE | 0xE4D5 | - | Aktuelle Temperaturen aller Lademodule | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4D5_D |
| CHARGER_STATUS | 0xE4D7 | - | Kommandierte Sollvorgaben und aktueller Zustand aller Lademodule | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4D7_D |
| LADER_SCHALTMATRIX | 0xE4D8 | - | Aktueller Zustand der Schaltmatrix | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4D8_D |
| HVPM_DCDC_HISTOGRAMM_LADEBETRIEB | 0xE4D9 | - | Auslesen des DCDC-Wandler Leistungshistogramm für den Ladebetrieb. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4D9_D |
| HVPM_DCDC_HISTOGRAMM_FAHRBETRIEB | 0xE4DA | - | Auslesen des DCDC-Wandler Leistungshistogramm für den Fahrbetrieb. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4DA_D |
| EFAN_STATISTICS | 0xE4DB | - | Auslesen der Statistikdaten E-Lüfter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4DB_D |
| EFAN_STATISTICS_RESET | 0xE4DC | - | Zurücksetzen der Statistikdaten E-Lüfter | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE4DC_D | - |
| I_TEMP_ELUEFTER_LIN | 0xE50A | STAT_I_TEMP_ELUEFTER_LIN_WERT | Ist-Temperatur E-Luefter LIN | °C | - | High | unsigned char | - | 1.0 | 1.0 | -55.0 | - | 22 | - | - |
| SPG_ELUEFTER_LIN | 0xE50B | STAT_SPG_ELUEFTER_LIN_WERT | Spannung E-Luefter LIN | V | - | High | unsigned char | - | 0.25 | 1.0 | 0.0 | - | 22 | - | - |
| ELUEFTER_LIN_STROM | 0xE50C | STAT_ELUEFTER_LIN_STROM_WERT | Strom E-Luefter LIN | A | - | High | unsigned char | - | 1.0 | 1.0 | -55.0 | - | 22 | - | - |
| MONTAGE_MODUS | 0xE528 | - | Ansteuerung, Deaktivierung und Auslesen des Status vom Montagemodus. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE528_D | RES_0xE528_D |
| EDH_HVS | 0xE52B | - | Elektrischer Durchlauferhitzer am Hochvoltspeicher | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE52B_D |
| BUS_EDH_HVS | 0xE52D | - | Signale eDH HVS Regelung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE52D_D |
| HVPM_CHARGING_MODE_PLANT | 0xE532 | - | Setzen und Auslesen des Werkslademodus (Laden auf vorgegebenen SOC - HVPM 2015) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE532_D | RES_0xE532_D |
| HVPM_HVSYSTEM | 0xE533 | - | Informationen zum Hochvolt System (HVPM 2015) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE533_D |
| HVPM_DCDC | 0xE534 | - | Rückgabewerte des HVPM für die Ansteuerung des DC/DC-Wandlers (HVPM 2015) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE534_D |
| HV_DC_SPANNUNG | 0xE536 | STAT_HVDC_SPANNUNG_WERT | HV-DC Spannung an der Ladeelektronik | V | - | High | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| ZV_LADEKLAPPE_AC_CCS | 0xE537 | - | Ansteuerung der ZV-Funktionen der Ladeklappe des AC bzw. CCS-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE537_D | RES_0xE537_D |
| LADEKLAPPE_AC_CCS | 0xE538 | - | Status der Ladeklappe des AC- bzw. CCS-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE538_D |
| ZV_LADEKLAPPE_DC | 0xE539 | - | Ansteuerung der ZV-Funktionen der Ladeklappe des DC-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE539_D | RES_0xE539_D |
| LADEKLAPPE_DC | 0xE53A | - | Status der Ladeklappe des DC-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE53A_D |
| PILOT_SIGNAL_VALUE | 0xE53C | STAT_PILOT_SIGNAL | Status Pilot Signal | 0-n | - | High | unsigned char | TAB_PILOT_AUSWERTUNG | - | - | - | - | 22 | - | - |
| CHARGER_VOLTAGES_VALUE | 0xE53D | - | Status aller von der Ladeelektronik gemessenen Spannungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE53D_D |
| CHARGER_CURRENTS_VALUE | 0xE53E | - | Status aller von der Ladeelektronik gemessenen Strömen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE53E_D |
| ZV_LADEDOSE_AC_CCS | 0xE563 | - | Ansteuerung der ZV-Funktionen der Ladedose des AC bzw. CCS-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE563_D | RES_0xE563_D |
| ISOLATIONSWIDERSTAND_AKTUELL | 0xE56F | - | Auslesen des aktuell anliegenden Isolationswiderstands | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE56F_D |
| RESET_ISOLATIONSWIDERSTANDMESSWERTE | 0xE570 | - | Zurücksetzen der Isolationswiderstandsmesswerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE570_D | - |
| HVPM_LADEHISTOGRAMM | 0xE588 | - | Auslesen des Ladehistogramms | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE588_D |
| HVPM_HVSYSTEM_OFF_RETRY | 0xE5AD | - | HV-System herunterfahren oder hochfahren  erneut versuchen (HVPM 2015) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5AD_D | - |
| HVPM_CONTROL_DCDC | 0xE5AE | - | Steuern des DC/DC Wandlers (HVPM 2015) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE5AE_D | - |
| WASSERPUMPE_LEISTUNGSELEKTRONIK | 0xE5AF | - | Elektrische Wasserpumpe Leistungselektronik = P1, 130W  | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE5AF_D | RES_0xE5AF_D |
| FAHRSTUFE | 0xE5B0 | STAT_POS_PRND_NR | aktuelle Ist-Position des Antriebsstrangs (PRND) | 0-n | Hym_Vetrgr_e_achvdtrnspos | High | unsigned char | TAB_AE_FAHRSTUFE | - | - | - | - | 22 | - | - |
| WASSERPUMPE_LSE | 0xE5B1 | - | Auslesen Pumpengrößen der elektrischen Wasserpumpe Leistungselektronik  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5B1_D |
| DREIWEGEVENTIL_HOCHVOLTSPEICHER | 0xE5B2 | - | Hochvoltspeicher Kühlkreislauf Dreiwegeventil - Ansteuerung starten und beenden | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE5B2_D | RES_0xE5B2_D |
| ASG_DREIWEGEVENTIL_HOCHVOLTSPEICHER | 0xE5B3 | STAT_ASG_DREIWEGEVENTIL_HOCHVOLTSPEICHER_WERT | Ausgangsstellgroesse vom Tester zur Ansteuerung von HVS Dreiwegeventil auslesen | % | - | High | signed int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| LED_LADEDOSE_AC_CCS | 0xE5D1 | - | Ansteuerung der Beleuchtung der Ladedose des AC bzw. CCS-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE5D1_D | RES_0xE5D1_D |
| LADEDOSE_AC_CCS | 0xE5D2 | - | Status der Ladedose des AC- bzw. CCS-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5D2_D |
| ZV_LADEDOSE_DC | 0xE5D3 | - | Ansteuerung der ZV-Funktionen der Ladedose des DC-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE5D3_D | RES_0xE5D3_D |
| LED_LADEDOSE_DC | 0xE5D4 | - | Ansteuerung der Beleuchtung der Ladedose des DC-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE5D4_D | RES_0xE5D4_D |
| LADEDOSE_DC | 0xE5D5 | - | Status der Ladedose des DC-Ladeanschlusses | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5D5_D |
| AUTOP_DEACTIVATE | 0xE5DD | - | - Auslesen des Auto-P Status. - Aktivieren/Deaktivieren von Auto-P.   | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xE5DD_D | RES_0xE5DD_D |
| COUNTER_SBW | 0xE5DE | - | Auslesen der Shift-by-Wire-Zähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE5DE_D |
| ELUEFTER_LIN_RELAIS | 0xE5E3 | STAT_ELUEFTER_LIN_RELAIS_WERT | Status Relais-Tester E-Luefter LIN | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ELUEFTER_LIN_DREH_TESTER | 0xE5E4 | STAT_ELUEFTER_LIN_DREH_TESTER_WERT | Status Drehzahl-Tester E-Luefter LIN | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ELUEFTER_LIN_BETRMOD_TESTER | 0xE5E5 | STAT_ELUEFTER_LIN_BETRMOD_TESTER_WERT | Status Betriebsmodus-Tester E-Luefter LIN | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ELUEFTER_LIN_DREHZ_TESTER | 0xE5E6 | STAT_ELUEFTER_LIN_DREHZ_TESTER_WERT | Drehzahl E-Luefter LIN | 1/min | - | High | unsigned char | - | 20.0 | 1.0 | 0.0 | - | 22 | - | - |
| ANSTEUERUNG_ELUEFTER | 0xE680 | - | Ansteuern und Auslesen des Ansteuerwerts (Istwert) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE680_D | RES_0xE680_D |
| ANSTEUERUNG_ELUEFTER_RELAIS | 0xE681 | - | Ansteuerwert vom Tester zur Ansteuerung E-Luefter-Relais auslesen | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE681_D | RES_0xE681_D |
| WASSERPUMPE_HOCHVOLTSPEICHER | 0xE683 | - | Elektrische Wasserpumpe HVS == P2, 80W | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE683_D | RES_0xE683_D |
| AKKS_1 | 0xE685 | - | Aktive Kuehlklappe 1 Master-Master über LIN - Ansteuerung starten und beenden   PIN: LIN | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE685_D | RES_0xE685_D |
| AKKS_2 | 0xE686 | - | Aktive Kuehlklappe 2 Master-Master über LIN - Ansteuerung starten und beenden   PIN: LIN  | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xE686_D | RES_0xE686_D |
| ASG_ELUEFTER | 0xE700 | STAT_ASG_ELUEFTER_WERT | Sollwert E-Lüfter | % | - | High | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| ASG_ELUEFTER_REL | 0xE701 | STAT_ASG_ELUEFTER_RELAIS_WERT | Stellgliedposition E-Lüfter-Relais | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ELUE_LIN_META | 0xE820 | - | Metadaten des Lin Luefters lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE820_D |
| WASSERPUMPE_HVS | 0xE822 | - | Auslesen Pumpengrößen der elektrischen Wasserpumpe Hochvoltspeicher  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE822_D |
| ASG_AKKS_1 | 0xE823 | STAT_ASG_AKKS_1_WERT | Ausgangsstellgroesse zur Ansteuerung Aktive Kuehlklappe 1 über LIN auslesen | - | RadSht_StpEng | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ASG_AKKS_2 | 0xE824 | STAT_ASG_AKKS_2_WERT | Ausgangsstellgroesse zur Ansteuerung Aktive Kuehlklappe 2 über LIN auslesen | - | RadSht_stepEngBotm | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| PLC_MIRROR | 0xF000 | - | Diese Routine aktiviert oder deaktiviert die PLC Traffic Spiegelung auf dem Ethernet Bus und gibt den aktuellen Status aus. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| PLC_RANDOM_TRAFFIC | 0xF001 | - | Diese Routine aktiviert oder deaktiviert eine Funktion zur Erzeugung von Zufallsdaten, die über die PLC Kanäle verschickt werden und gibt den aktuellen Status der Funktion zurück. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| PLC_VALIDATION | 0xF002 | - | Aktiviert oder deaktiviert die PLC Validierung während des SLAC Prozesses, um eine korrekte Wallbox für den Fall zu erkennen, dass die Signaldämpfung größer als 20dB ist. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_1BYTE_FS_DOP

| WERT | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet (ohne Ergebnis) |
| 7 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 8 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 255 | ungueltiger Wert |

### TAB_AC_HIGH_I_LIMIT_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Maximal |
| 0x01 | Reduziert |
| 0xFF | Wert ungültig |

### TAB_AC_LOW_I_LIMT_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Maximal |
| 0x01 | Reduziert |
| 0x02 | Minimal |
| 0xFF | Wert ungültig |

### TAB_AE_FAHRSTUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | ungültig |
| 0x02 | ungültig |
| 0x03 | ungültig |
| 0x04 | ungültig |
| 0x05 | D |
| 0x06 | N |
| 0x07 | R |
| 0x08 | P |
| 0x0F | ungültig |

### TAB_AKTUELLE_PHASE_COUNT_AC_CHARGING

| WERT | TEXT |
| --- | --- |
| 0x01 | 1-phasig |
| 0x02 | 3-phasig |
| 0x03 | kein Laden |
| 0xFF | Wert ungültig |

### TAB_ANF_BETRIEBSARTEN_KOORDINATOR_EM

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x02 | Anforderung einer Isolationsmessung |
| 0x03 | Nullstromanforderung |

### TAB_AUTO_P_DEACTIVATE

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Aktion |
| 0x01 | Auto-P aktivieren |
| 0x02 | Auto-P deaktivieren |

### TAB_BELEUCHTUNG_LADEDOSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ladeinitialisierung |
| 0x02 | Laden aktiv |
| 0x03 | Ladepause |
| 0x04 | Laden beendet |
| 0x05 | Lade Fehler |
| 0x06 | Suchbeleuchtung |
| 0x07 | Nicht verbaut |
| 0xFF | Werte ungültig |

### TAB_BETR_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Tester inaktiv |
| 0x01 | WMK-Anforderung zu hoch, Job nicht ausfuehrbar |
| 0x02 | Fehler (Nachlauf, Montagemodus, Relaisfehler, LIN-Fehler) |
| 0x03 | Ansteuerung Betriebsmodus aktiv |
| 0x04 | Betriebsmodus nicht unterstuetzt |
| 0xFF | Wert ungültig |

### TAB_CCCV_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | No CC/CV mode |
| 0x01 | Interrupt |
| 0x02 | CC mode |
| 0x03 | CV mode (DC Volt größer oder gleich als 95% und  kleiner als 100%) |
| 0x04 | CV mode (DC Volt größer als 100% und  kleiner oder gleich als 105%) |
| 0x05 | CV mode (DC Volt größer als 105%) |
| 0xFF | Wert ungültig |

### TAB_DEFINITION_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | IPsec ist ok. |
| 0x01 | Unbekannter Fehler bei IPsec. |
| 0x02 | Fehler beim IPsec Schlüsselaustausch. |
| 0x03 | IPsec-Partnersteuergerät nicht erreichbar. |
| 0xFF | Wert ungültig |

### TAB_DEFINITION_STATUS_ATM02

| WERT | TEXT |
| --- | --- |
| 0x00 | IPsec ist ok. |
| 0x01 | Unbekannter Fehler bei IPsec. |
| 0x02 | Fehler beim IPsec Schlüsselaustausch. |
| 0x03 | IPsec-Partnersteuergerät nicht erreichbar. |
| 0xFF | Wert ungültig |

### TAB_DEFINITION_STATUS_KOMBI

| WERT | TEXT |
| --- | --- |
| 0x00 | IPsec ist ok. |
| 0x04 | Unbekannter Fehler bei IPsec. |
| 0x08 | Fehler beim IPsec Schlüsselaustausch. |
| 0x0C | IPsec-Partnersteuergerät nicht erreichbar. |
| 0xFF | Wert ungültig |

### TAB_DEFINITION_STATUS_MGU

| WERT | TEXT |
| --- | --- |
| 0x00 | IPsec ist ok. |
| 0x10 | Unbekannter Fehler bei IPsec. |
| 0x20 | Fehler beim IPsec Schlüsselaustausch. |
| 0x30 | IPsec-Partnersteuergerät nicht erreichbar. |
| 0xFF | Wert ungültig |

### TAB_DEFINITION_STATUS_RSE

| WERT | TEXT |
| --- | --- |
| 0x00 | IPsec ist ok. |
| 0x40 | Unbekannter Fehler bei IPsec. |
| 0x80 | Fehler beim IPsec Schlüsselaustausch. |
| 0xC0 | IPsec-Partnersteuergerät nicht erreichbar. |
| 0xFF | Wert ungültig |

### TAB_DIAG_DCDC_VORGABEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine DC/DC Wandler Vorgaben übernehmen |
| 0x01 | SOLL Betriebsart übernehmen |
| 0x02 | SOLL Spannung 12V übernehmen |
| 0x03 | Mindest Spannung HV übernehmen |
| 0x04 | Leistungsanforderung übernehmen |
| 0x05 | Alle DC/DC Wandler Vorgaben übernehmen |

### TAB_ECU_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Plant Mode |
| 0x01 | Engineering Mode |
| 0x02 | Field Mode |
| 0xFF | Wert ungültig |

### TAB_EDH_HVS_ERR_LIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehler nicht aktiv |
| 0x01 | Fehler aktiv |
| 0x02 | Fehler Statusänderung |
| 0x03 | Signal unbefüllt |
| 0xFF | Wert ungültig |

### TAB_EDH_HVS_SENS

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehler nicht aktiv |
| 0x01 | Kurzschluss nach Plus oder Unterbrechung |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Signal unbefüllt |
| 0xFF | Wert ungültig |

### TAB_EDH_HVS_TEMP

| WERT | TEXT |
| --- | --- |
| 0x00 | Temperatur in Ordnung |
| 0x01 | Übertemperatur |
| 0x02 | Untertemperatur |
| 0x03 | Signal unbefüllt |
| 0xFF | Wert ungültig |

### TAB_ENTLADESCHUTZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Entladeschutz nicht aktiv - SOC okay |
| 0x01 | Entladeschutz nicht aktiv - SOC niedrig |
| 0x02 | Entladeschutz aktiv |

### TAB_EWPLSE_DIAG_UEBERSTROM

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Überstrom |
| 0x01 | Überstromabschaltung |
| 0x02 | Überstromabregelung |
| 0xFF | Wert ungültig |

### TAB_EWPLSE_DIAG_UEBERTEMP_EL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Übertemperatur |
| 0x01 | Übertemperatur |
| 0x02 | Abregeltemperatur |
| 0xFF | Wert ungültig |

### TAB_FAHRBEREITSCHAFT_HV_SYSTEM

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrbereitschaft freigegeben / HV ist nicht verfügbar |
| 0x01 | Fahrbereitschaft freigegeben / HV ist verfügbar |
| 0x02 | Fahrbereitschaft nicht freigegeben / HV ist verfügbar |
| 0x03 | Fahrbereitschaft nicht freigegeben / HV ist nicht verfügbar |

### TAB_HDCAC_EREQ

| WERT | TEXT |
| --- | --- |
| 0x00 | Öffnen |
| 0x01 | Schließen |
| 0x03 | Ungültig |

### TAB_HVPM_BA_DCDC_IST

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Standby Mode |
| 0x02 | Buck Mode |
| 0x03 | Fehler |
| 0x04 | Crash |

### TAB_HVPM_BA_DCDC_KOMM

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby Mode |
| 0x02 | Buck Mode |

### TAB_HVPM_LSC_AUSWAHL_LADEN_SOFORT_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Einmaliges Sofort-Laden inaktiv |
| 0x01 | Einmaliges Sofort-Laden aktiv |
| 0xFF | Wert ungültig |

### TAB_HVPM_SOLL_BETRIEBSART

| WERT | TEXT |
| --- | --- |
| 0x01 | Standby Mode |
| 0x02 | Buck Mode |

### TAB_HVSEWP_DIAG_UEBERSTROM

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Überstrom |
| 0x01 | Überstromabschaltung |
| 0x02 | Überstromabregelung |
| 0xFF | Wert ungültig |

### TAB_HVSEWP_DIAG_UEBERTEMP_EL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Übertemperatur |
| 0x01 | Übertemperatur |
| 0x02 | Abregeltemperatur |
| 0xFF | Wert ungültig |

### TAB_HV_START_KOMM

| WERT | TEXT |
| --- | --- |
| 0x00 | HV Initialisierung |
| 0x01 | HV Startup Request |
| 0x02 | HV Ready - HV Power on |
| 0x15 | HV Ready - HV Post Run |
| 0x1F | HV Isolationsmessung - Vorbereitung HV Isolationsmessung |
| 0x20 | HV Isolationsmessung - Start HV Isolationsmessung |
| 0x21 | HV Isolationsmessung - Laufende HV Isolationsmessung |
| 0x29 | Shutdown - Abschalten HV System |
| 0x2A | Shutdown - Öffnen der HV Schütze |
| 0x2B | Shutdown - Entladen HV Zwischenkreis |
| 0x2C | Shutdown - HV aus |
| 0x33 | Notabschaltung - Abschaltung HV |
| 0x34 | Notabschaltung - Öffnen der HV Schütze |
| 0x35 | Notabschaltung - Entladen HV Zwischenkreis |
| 0x36 | Notabschaltung - HV aus |
| 0x3D | Batterieloser Betrieb 1 - Abschalten HV System |
| 0x3E | Batterieloser Betrieb 1 - Regelung HV Spannung |
| 0x3F | Batterieloser Betrieb 1 - Öffnen der HV Schütze |
| 0x47 | Batterieloser Betrieb 2 - Freilauf |
| 0x48 | Batterieloser Betrieb 2 - Regelung HV Spannung Phase 1 |
| 0x49 | Batterieloser Betrieb 2 - Regelung HV Spannung Phase 2 |
| 0x08 | Batterieloser Betrieb - aktiviert |
| 0xFF | Wert ungültig |

### TAB_ISOLATION_ERFOLGREICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Isolationsmessung nicht erfolgreich |
| 0x01 | Isolationsmessung erfolgreich |
| 0x02 | Isolationsmessung läuft! |
| 0xFF | nicht definiert |

### TAB_ISOLATION_ISOLATIONSFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Isolationswarnung liegt vor |
| 0x02 | Isolationsfehler liegt vor |
| 0xFF | nicht definiert |

### TAB_LADEFENSTER1_AUSWAHL_NR

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ausgewählt |
| 0x01 | Ausgewählt |
| 0xFF | Wert ungültig |

### TAB_LADEN_ABK_AKUSTIKBEGRENZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Intelligente Akustikbegrenzung (Automatisch) |
| 0x01 | Keine Akustikbegrenzung (Laut) |
| 0x02 | Hohe Akustikbegrenzung (Leise) |
| 0xFF | Wert ungültig |

### TAB_LADEN_ABK_LADEANZEIGEN_AC_PHASEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anzeige der Phasen |
| 0x01 | Anzeige: Einphasiges Laden |
| 0x02 | Anzeige: Dreiphasiges Laden |
| 0xFF | Wert ungültig |

### TAB_LADEN_ABK_LADEENDE_AFZ_ANZEIGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Abfahrtszeit nicht anzeigen |
| 0x01 | Abfahrtszeit anzeigen, Ladeziel wird erreicht |
| 0x02 | Abfahrtszeit anzeigen, Ladeziel wird nicht erreicht |
| 0xFF | Wert ungültig |

### TAB_LADEN_ABK_LADEENDE_LEZ_ANZEIGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Ladeende-Zeit nicht anzeigen |
| 0x01 | Ladeende-Zeit anzeigen |
| 0xFF | Wert ungültig |

### TAB_LADESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Laden |
| 0x01 | Initialisierung |
| 0x02 | Laden aktiv |
| 0x03 | Ladepause |
| 0x04 | Laden beendet |
| 0x05 | Ladefehler |
| 0x0F | Signal ungültig |

### TAB_LADESTECKER_HVPM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladekabel angesteckt |
| 0x01 | Ladekabel angesteckt |
| 0x02 | Fehler |
| 0xFF | Wert ungültig |

### TAB_LADESTECKER_LADEDOSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Stecker nicht gesteckt |
| 0x01 | Stecker gesteckt |
| 0x02 | Stecker Erkennung Fehler |
| 0x03 | Nicht verbaut |
| 0xFF | Wert ungültig |

### TAB_LADEVERFAHREN_HVPM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Ladeverfahren |
| 0x01 | AC-Laden mit Typ 1-Stecker (Yazaki) |
| 0x02 | AC-Laden mit Typ 2-Stecker (Mennekes) |
| 0x03 | DC-Laden nach CHAdeMO-Protokoll |
| 0x04 | DC-Laden mit DC-Pins über Typ 1-Combo-Dose |
| 0x05 | AC-Laden China |
| 0x06 | AC-Laden über Typ 1-Combo-Dose |
| 0x07 | AC-Laden über Typ 2-Combo (Kern)-Ladedose |
| 0x08 | DC-Laden mit Kernpins über Typ 2-Combo (Kern)-Ladedose |
| 0x09 | DC-Laden mit DC-Pins über Typ 2-Combo (Kern)-Ladedose |
| 0xFD | Schnittstelle ist nicht verfügbar |
| 0xFE | Funktion meldet Fehler |
| 0xFF | Wert ungültig |

### TAB_LASTABW_EDH_HVS

| WERT | TEXT |
| --- | --- |
| 0x00 | Schnellabschaltung_inaktiv |
| 0x01 | Schnellabschaltung_aktiv |
| 0x03 | Signal unbefüllt |
| 0xFF | Wert ungültig |

### TAB_LCS_NUMBER

| WERT | TEXT |
| --- | --- |
| 0x00 | Service Pack functionality switch |
| 0x01 | SecOC by-pass switch |
| 0xFF | Wert ungültig |

### TAB_LSC_PROGNOSE_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalmode |
| 0x01 | Step-Mode |
| 0x02 | PLC-Mode |
| 0xFF | Wert ungültig |

### TAB_LSC_TRIGGER_HVPM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Trigger |
| 0x01 | Ladestart |
| 0x02 | Prognose-Update |
| 0x04 | Laden beendet |
| 0x05 | Laden abgebrochen - Externer Ladefehler |
| 0x06 | Ladepause |
| 0x09 | Laden abgebrochen - Interner Ladefehler |

### TAB_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Montagemodus beendet |
| 0x01 | Montagemodus aktiv |
| 0xFF | Wert ungültig |

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

### TAB_OPMODE_DCDC

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Standby |
| 0x02 | Buck |
| 0x03 | Error |
| 0x04 | Crash |
| 0xFF | Wert ungültig |

### TAB_PILOT_AUSWERTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Pilot Signal erkannt |
| 0x01 | Pilot Signal AC Laden, keine externe Ladebereitschaft |
| 0x02 | Pilot Signal AC Laden, externe Ladebereitschaft vorhanden |
| 0x03 | Pilot Signal Fehler |
| 0x04 | Pilot Signal HighLevelCommunication, keine externe Ladebereitschaft |
| 0x05 | Pilot Signal HighLevelCommunication, externe Ladebereitschaft vorhanden |
| 0x06 | Pilot Signal statisch |
| 0xFF | Werte ungültig |

### TAB_POS_LADEKLAPPE_AC_CCS

| WERT | TEXT |
| --- | --- |
| 0x00 | Offen |
| 0x01 | Geschlossen |
| 0x02 | Fehler |
| 0x03 | Nicht Verbaut  |
| 0xFF | Wert ungültig |

### TAB_POS_LADEKLAPPE_DC

| WERT | TEXT |
| --- | --- |
| 0x00 | Offen |
| 0x01 | Geschlossen |
| 0x02 | Fehler |
| 0x03 | Nicht verbaut |
| 0xFF | Wert ungültig |

### TAB_SFA_FEATURE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | INITIALLY_DISABLED |
| 0x01 | ENABLED |
| 0x02 | DISABLED |
| 0x03 | EXPIRED |
| 0xFF | INVALID_VALUE |

### TAB_SFA_FEATURE_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | all Feature IDs |
| 0x01 | System Functions Feature-ID-Type: 00 |
| 0x02 | Application Feature-ID-Type: 01-FF |

### TAB_SFA_VALIDATION_STATUS

| WERT | VALIDATION_K | TEXT |
| --- | --- | --- |
| 0x00 | E_OK | Check successful |
| 0x01 | E_UNCHECKED | Check did not run yet. |
| 0x02 | E_MALFORMED | Format not correct. Could not parse data. |
| 0x03 | E_EMPTY | Data is needed but was not written yet. |
| 0x04 | E_ERROR | An Error occured. |
| 0x05 | E_SECURITY_ERROR | Signature check failed. |
| 0x06 | E_WRONG_LINKTOID | Link-to-ID doesn't match. |
| 0x07 | E_CHECK_RUNNING | Check is still running. |
| 0x08 | E_TIMESTAMP | Timestamp of creation too old or equal |
| 0x09 | E_VERSION | Token Version not supported |
| 0x0A | E_FEATUREID | Feature ID not supported |
| 0xFF | E_OTHER | Other error occured. |

### TAB_SFA_VALIDITY_CONDITIONS

| WERT | TEXT |
| --- | --- |
| 0x01 | Unlimited |
| 0x02 | Expiration date |
| 0x03 | Time period |
| 0x04 | Days after activation |
| 0x05 | Start and end odometer reading |
| 0x06 | [km] after activation |
| 0x07 | Number of Executions |
| 0x80 | Local relative time |
| 0x81 | Number of driving cycles |
| 0x82 | Speed threshold |
| 0xFF | Wert ungültig |

### TAB_STATUS_BYTE_ENUM

| WERT | NAME | TEXT |
| --- | --- | --- |
| 0x00 | OK | Überprüfung erfolgreich. |
| 0x01 | UNCHECKED | Überprüfung noch nicht durchgeführt. |
| 0x02 | MALFORMED | Ein Formatfehler ist aufgetreten. |
| 0x03 | EMPTY | Keine Daten zur Prüfung vorhanden. |
| 0x04 | INCOMPLETE | Daten sind nicht vollständig. |
| 0x05 | SECURITY_ERROR | Signaturprüfung fehlgeschlagen. |
| 0x06 | WRONG_VIN17 | Bindings/Zertifikate passen nicht zur (ungeschützten) VIN17. |
| 0x07 | CHECK_RUNNING | Überprüfung läuft. |
| 0x08 | ISSUER_CERT_ERROR | Validierung des Zertifikats des Herausgebers fehlgeschlagen. |
| 0x09 | WRONG_ECU_UID | Validierung der ECU-UID fehlgeschlagen. |
| 0x0A | DECRYPTION_ERROR | Kein Decryption key gefunden. |
| 0x0B | OWN_CERT_NOT_PRESENT | Eigenes Zertifikat für Validierung nicht vorhanden. |
| 0x0C | OUTDATED | Veraltetes Item angegeben. |
| 0xFF | OTHER | Ein unbekannter Fehler ist aufgetreten. |

### TAB_STATUS_INDICATOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung temporär inaktiv |
| 0x01 | Aktive Fehlermeldung aktiv |
| 0x02 | Aktive Fehlermeldung abgeschalten |
| 0xFF | Wert ungültig |

### TAB_STATUS_IPSEC

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | ERROR |
| 0x02 | OPERATION_ALREADY_RUNNING |
| 0x03 | FORBIDDEN |
| 0xFF | Wert ungültig |

### TAB_STATUS_LADEMODUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Konduktiv Laden |
| 0x02 | Induktiv Laden |
| 0xFF | Wert ungültig |

### TAB_STATUS_LADEMODUS_WERK

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Lademodus Werk aktiv |
| 0x02 | Lademodus Werk nicht aktiv / Reguläres Laden aktiv |

### TAB_STATUS_LSC_VERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | Ist-SOC basiert |
| 0x01 | ABK-SOC-basiert |
| 0xFF | Wert ungültig |

### TAB_STATUS_POSITIONIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht positioniert |
| 0x01 | Teilpositioniert |
| 0x02 | Positioniert |
| 0xFF | Wert ungültig |

### TAB_STAT_AUTO_P_DEACTIVATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Auto-P aktiv |
| 0x01 | Auto-P inaktiv |
| 0x02 | ungültiger Wert |
| 0xFF | Wert ungültig |

### TAB_STAT_LADEFENSTER2_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ausgewählt |
| 0x01 | Ausgewählt |
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

### TAB_SW_BA_ELUE_LIN

| WERT | TEXT |
| --- | --- |
| 0x00 | Drehzahlgeregelter Betrieb |
| 0x01 | Autarke Luftdichtekompensation |
| 0x02 | Autarker Luefterbetrieb |
| 0x03 | Rekuperation |
| 0x04 | Vorhalt |
| 0x0F | Vorhalt |
| 0x1A | Vorhalt |
| 0x25 | ungueltiger Wert |

### TAB_SW_MATRIX_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Offen (0) |
| 0x01 | Einphasig (1) |
| 0x03 | Dreiphasig (3) |
| 0xFF | Wert ungültig |

### TAB_SYMMETRIC_KEYS

| WERT | TEXT |
| --- | --- |
| 0x00 | E_OK |
| 0x01 | E_UNCHECKED |
| 0x02 | E_MALFORMED |
| 0x03 | E_EMPTY |
| 0x04 | E_INCOMPLETE |
| 0x05 | E_SECURITY_ERROR |
| 0x06 | E_WRONG_VIN17 |
| 0x07 | E_CHECK_RUNNING |
| 0x08 | E_ISSUER_CERT_ERROR |
| 0x09 | E_WRONG_ECU_UID |
| 0x0A | E_DECRYPTION_ERROR |
| 0x0B | E_OWN_CERT_NOT_PRESENT |
| 0x0C | E_OUTDATED |
| 0xFF | E_OTHER |

### TAB_THER_EFF_HVS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine_Anforderung |
| 0x01 | Untertemperaturabschaltung |
| 0x02 | Leistungseinschraenkung_zu_kalt_Bereich |
| 0x03 | Waermer_Bereich |
| 0x04 | Unterer_Wohlfuehltemperaturbereich |
| 0x05 | Unterer_Idealtemperaturbereich |
| 0x06 | Oberer_Idealtemperaturbereich |
| 0x07 | Oberer_Wohlfuehltemperaturbereich |
| 0x08 | Kaelter_Bereich |
| 0x09 | Leistungseinschraenkung_zu_heiss_Bereich |
| 0x0A | Uebertemperaturabschaltung |
| 0x0B | Ungueltig |
| 0x0C | nicht belegt |
| 0x0D | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0x0E | Funktion_meldet_Fehler |
| 0x0F | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_URSACHE_LADEENDE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt / Diagnose nicht möglich |
| 0x01 | SOC Ziel erreicht |
| 0x02 | Ladestopp vom Kunden angefordert |
| 0x03 | Ladestecker abgezogen (wird nicht bedient) |
| 0x04 | Netzausfall |
| 0x05 | Fehler im Ladesystem |
| 0x06 | Fehler ausserhalb des Fahrzeugs |
| 0xFF | Wert ungültig |

### TAB_UWB_BETRIEBSZUSTAND_LADEMODUL

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Standby |
| 0x02 | Laden |
| 0x03 | Derating |
| 0x04 | Interrupt |
| 0x05 | Error |
| 0x06 | Crash |
| 0x07 | not used (7) |
| 0x08 | Charging initialization |
| 0x09 | Charging initialization completed |
| 0x0A | not used (10) |
| 0xFF | Wert ungültig |

### TAB_ZV_AKTOR_LADEDOSE_AC_CCS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | In Bewegung |
| 0x03 | Unbekannt |
| 0x04 | Fehler |
| 0x05 | Nicht Verbaut |
| 0xFF | Wert ungültig |

### TAB_ZV_AKTOR_LADEDOSE_DC

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | In Bewegung |
| 0x03 | Unbekannt |
| 0x04 | Fehler |
| 0x05 | Nicht Verbaut |
| 0xFF | Wert ungültig |

### TAB_ZV_LADEKLAPPE_AC_CCS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | In Bewegung |
| 0x03 | Zustand unbekannt |
| 0x04 | Fehler  |
| 0x05 | Nicht Verbaut |
| 0xFF | Wert ungültig |

### TAB_ZV_LADEKLAPPE_DC

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | In Bewegung |
| 0x03 | Zustand unbekannt |
| 0x04 | Fehler |
| 0x05 | Nicht verbaut |
| 0xFF | Wert ungültig |

### TAB_ZV_SENSOR_LADEDOSE_AC_CCS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | Fehler |
| 0x03 | Nicht verbaut |
| 0xFF | Wert ungültig |

### TAB_ZV_SENSOR_LADEDOSE_DC

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | Fehler |
| 0x03 | Nicht verbaut |
| 0xFF | Wert ungültig |

### T_1BYTE_FS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion noch nicht gestartet |
| 0x01 | Start-/Ansteuerbedingung nicht erfuellt |
| 0x02 | Uebergabeparameter nicht plausibel |
| 0x03 | Funktion wartet auf Freigabe |
| 0x04 | -- |
| 0x05 | Funktion laeuft |
| 0x06 | Funktion beendet (ohne Ergebnis) |
| 0x07 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 0x08 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 0x09 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 0xFF | ungueltiger Wert |

### T_BMWFANLIN1_PWR_CLAS_UB_TEXTTABLE_DOP

| WERT | TEXT |
| --- | --- |
| 0x06 | 300 W |
| 0x08 | 400 W |
| 0x12 | 600 W |
| 0x17 | 850 W |
| 0x20 | 1000 W |
| 0xFF | ungueltiger Wert |
| 0x13 | 600 W |

### T_BMWFANLIN1_ST_READBYIDTSTR_UB_TEXTTABLE_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehler |
| 0x01 | Metadaten i.O. |
| 0x02 | Metadaten n.i.O. |
| 0xFF | ungueltiger Wert |

### TAB_0X1753

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0025 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 |

### TAB_0X1775

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0021 | 0x0022 | 0x0023 | 0x0024 |

### UNEXPECTED_LINK_UP_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | für unbelegte Ports kein Link-up festgestellt bzw. Link auf Port zulässig |
| 1 | Link-up auf eigentlich unbelegtem Port festgestellt |

### TAB_BSR_LCS_NUMBER

| WERT | TEXT | VALUETABLE |
| --- | --- | --- |
| 0x00 | Service Pack functionality switch | TAB_SP_SWITCH |
| 0x01 | SecOC by-pass switch | TAB_SECOC_BYPASS |
| 0xFF | Invalid value | - |

### TAB_SP_SWITCH

| WERT | TEXT |
| --- | --- |
| 0x01 | SP2018 |
| 0x02 | SP2021 |
| 0xFF | Invalid value |

### TAB_SECOC_BYPASS

| WERT | TEXT |
| --- | --- |
| 0x01 | ON |
| 0x02 | OFF |
| 0xFF | Invalid value |
