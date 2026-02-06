# ICAM2.prg

## General

|  |  |
| --- | --- |
| File | ICAM2.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 229 |
| Origin | BMW EI-500 King |
| Revision | 32.003 |
| Author | EDAG-ENGINEERING-GMBH EV-313 Strasser |
| ECU Comment | Testerstellung aus ZEDIS |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Surround View System / Rückfahrkamera Standalone |  |  |
| ORIGIN | string | BMW EI-500 King |  |  |
| REVISION | string | 32.003 |  |  |
| AUTHOR | string | EDAG-ENGINEERING-GMBH EV-313 Strasser |  |  |
| COMMENT | string | Testerstellung aus ZEDIS |  |  |
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

### STATUS_IP_CONFIGURATION

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

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

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_FUSION_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Mode of freespace fusion |

### ARG_0X4005_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SA2_STATUS_DEBUG_SCHREIBEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1:Debug ON 2: Debug: OFF |

### ARG_0X4007_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _SBA_STATUS_AUTOACTIVATION | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 1:SBA Auto Act ON 0: SBA Auto Act OFF |

### ARG_0X400A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_DEBUG_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Mode of debug fusion |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_ODOMETRY_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Mode of odometry fusion |

### ARG_0X400E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_TIMESYNC_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Mode of timesync |

### ARG_0X4014_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAMERA_ID | 0-n | high | unsigned char | - | TAB_CAMERAS | - | - | - | - | - | Camera selector for choosing a specific camera or all cameras on which the relevant job will be applied |

### ARG_0X4016_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLAGS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Mode Flags for Intrinsic Calibration Model |
| STAT_XI_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Generalized Projection Model Parameter |
| STAT_FOCAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Focal Length |
| STAT_SKEW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Skew Factor |
| STAT_ASPECT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Aspect Ratio |
| STAT_PPX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Principal Point (Horizontal Component) |
| STAT_PPY_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Principal Point  (Vertical Component) |
| STAT_DIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |

### ARG_0X4018_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLAGS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Mode Flags for Intrinsic Calibration Model |
| STAT_XI_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Generalized Projection Model Parameter |
| STAT_FOCAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Focal Length |
| STAT_SKEW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Skew Factor |
| STAT_ASPECT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Aspect Ratio |
| STAT_PPX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Principal Point (Horizontal Component) |
| STAT_PPY_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Principal Point  (Vertical Component) |
| STAT_DIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |

### ARG_0X4019_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLAGS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Mode Flags for Intrinsic Calibration Model |
| STAT_XI_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Generalized Projection Model Parameter |
| STAT_FOCAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Focal Length |
| STAT_SKEW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Skew Factor |
| STAT_ASPECT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Aspect Ratio |
| STAT_PPX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Principal Point (Horizontal Component) |
| STAT_PPY_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Principal Point  (Vertical Component) |
| STAT_DIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |

### ARG_0X401A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLAGS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Mode Flags for Intrinsic Calibration Model |
| STAT_XI_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Generalized Projection Model Parameter |
| STAT_FOCAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Focal Length |
| STAT_SKEW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Skew Factor |
| STAT_ASPECT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Aspect Ratio |
| STAT_PPX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Principal Point (Horizontal Component) |
| STAT_PPY_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Principal Point  (Vertical Component) |
| STAT_DIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for distortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | parameter array for undistortion model parameters. |

### ARG_0X4022_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAM_POS_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position X (center of imager)  |
| STAT_CAM_POS_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position Y (center of imager)  |
| STAT_CAM_POS_Z_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position Z (center of imager)  |
| STAT_START_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting YAW. READ / WRITE the starting YAW which should be the CAF value.  |
| STAT_START_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting ROLL. READ / WRITE the starting ROLL which should be the relevant CAF value.  |
| STAT_START_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting PITCH. READ / WRITE the starting PITCH which should be the relevant CAF value.  |
| STAT_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated PITCH. READ / WRITE the currently used PITCH calibration value.  |
| STAT_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated YAW. READ / WRITE the  currently used YAW calibration value.   |
| STAT_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated ROLL. READ / WRITE back currently used ROLL calibration value.  |

### ARG_0X4023_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAM_POS_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position X (center of imager)  |
| STAT_CAM_POS_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position Y (center of imager)  |
| STAT_CAM_POS_Z_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position Z (center of imager)  |
| STAT_START_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting YAW. READ / WRITE the starting YAW which should be the CAF value.  |
| STAT_START_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting ROLL. READ / WRITE the starting ROLL which should be the relevant CAF value.  |
| STAT_START_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting PITCH. READ / WRITE the starting PITCH which should be the relevant CAF value.  |
| STAT_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated PITCH. READ / WRITE the currently used PITCH calibration value.  |
| STAT_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated YAW. READ / WRITE the  currently used YAW calibration value.   |
| STAT_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated ROLL. READ / WRITE back currently used ROLL calibration value.  |

### ARG_0X4024_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAM_POS_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position X (center of imager)  |
| STAT_CAM_POS_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position Y (center of imager)  |
| STAT_CAM_POS_Z_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position Z (center of imager)  |
| STAT_START_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting YAW. READ / WRITE the starting YAW which should be the CAF value.  |
| STAT_START_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting ROLL. READ / WRITE the starting ROLL which should be the relevant CAF value.  |
| STAT_START_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting PITCH. READ / WRITE the starting PITCH which should be the relevant CAF value.  |
| STAT_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated PITCH. READ / WRITE the currently used PITCH calibration value.  |
| STAT_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated YAW. READ / WRITE the  currently used YAW calibration value.   |
| STAT_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated ROLL. READ / WRITE back currently used ROLL calibration value.  |

### ARG_0X4025_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAM_POS_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position X (center of imager) |
| STAT_CAM_POS_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position Y (center of imager) |
| STAT_CAM_POS_Z_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera Position Z (center of imager) |
| STAT_START_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting YAW. READ / WRITE the starting YAW which should be the CAF value. |
| STAT_START_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting ROLL.  READ / WRITE the starting ROLL which should be the CAF value. |
| STAT_START_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera starting PITCH. READ / WRITE the starting PITCH which should be the CAF value. |
| STAT_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated PITCH. READ/WRITE the currently used PITCH calibration value. |
| STAT_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated YAW. READ/WRITE the currently used YAW calibration value. |
| STAT_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | Camera calibrated ROLL. READ/WRITE the currently used ROLL calibration value. |

### ARG_0X4027_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAMERA_ID | 0-n | high | unsigned char | - | TAB_CAMERAS | - | - | - | - | - | The first input argument defines the camera where subsequently a register has to be overwritten. |
| REG | HEX | high | unsigned long | - | - | - | - | - | - | - | This defines the register address to be overwritten. |
| VAL | HEX | high | unsigned long | - | - | - | - | - | - | - | This defins the value VAL to be written onto register address REG. |

### ARG_0X4028_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BRIGHT_MAX | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | When the head unit is sending it's maximum value for brightness (100% on the HMI) it is mapped internally on the iCam 2 variable BRIGHT_MAX. The algorithm for adjusting brightness (B) on the iCam 2 ECU maps the Minimum, Maximum and Mid-Level of the head unit signal onto the parameters BRIGHT_MIN, BRIGHT_MAX and BRIGHT_MID |
| BRIGHT_MIN | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | When the head unit is sending it's minimum value for brightness (0% on the HMI) it is mapped internally on the iCam 2 variable BRIGHT_MIN. The algorithm for adjusting brightness (B) on the iCam 2 ECU maps the Minimum, Maximum and Mid-Level of the head unit signal onto the parameters BRIGHT_MIN, BRIGHT_MAX and BRIGHT_MID |
| BRIGHT_MID | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | When the head unit is sending it's mid-point value for brightness (50% on the HMI) it is mapped internally on the iCam 2 variable BRIGHT_MID. The algorithm for adjusting brightness (B) on the iCam 2 ECU maps the Minimum, Maximum and Mid-Level of the head unit signal onto the parameters BRIGHT_MIN, BRIGHT_MAX and BRIGHT_MID |
| CONTR_MAX | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | When the head unit is sending it's maximum value for contrast (100% on the HMI) it is mapped internally on the iCam 2 variable CONTR_MAX. The algorithm for adjusting CONTRAST (C) on the iCam 2 ECU maps the Minimum, Maximum and Mid-Level of the head unit signal onto the parameters CONTR_MIN, CONTR_MAX and CONTR_MID |
| CONTR_MIN | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | When the head unit is sending it's minimum value for contrast (0% on the HMI) it is mapped internally on the iCam 2 variable CONTR_MIN. The algorithm for adjusting CONTRAST (C) on the iCam 2 ECU maps the Minimum, Maximum and Mid-Level of the head unit signal onto the parameters CONTR_MIN, CONTR_MAX and CONTR_MID |
| CONTR_MID | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | - | - | When the head unit is sending it's mid-point value for contrast (50% on the HMI) it is mapped internally on the iCam 2 variable CONTR_MID. The algorithm for adjusting CONTRAST (C) on the iCam 2 ECU maps the Minimum, Maximum and Mid-Level of the head unit signal onto the parameters CONTR_MIN, CONTR_MAX and CONTR_MID |

### ARG_0X4029_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SA2_FASTA_DATA_RESET | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Reset of FASTA data confirmation |

### ARG_0X402B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SATURATION_LEVEL | HEX | high | unsigned char | - | - | - | - | - | - | - | This parameter defines the color saturation. 0% = desaturated (grayscale image, only Y) and 100% = maximum saturation allowed by the DSP. |

### ARG_0X4030_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAMERA_ID | 0-n | high | unsigned char | - | TAB_CAMERAS | - | - | - | - | - | Defnies the camer to be switched to RAW video mode. |
| MODE | 0/1 | high | unsigned char | - | - | - | - | - | - | - | The parameter MODE defines the video stream of the camera: 0 = standard output (i.e. with distortion correction of the ECU/camera) 1 = RAW video output (no distortion correction or overlays) |

### ARG_0X4031_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LL_MODE | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Order of entries in return value defined as: first entry = Rear, second = Left, third = Front, fourth = Right. Entries defined as in STEUERN job -->  0x00 = Low-Light mode off; 0x01 = Low-Light mode on.  |

### ARG_0X4032_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VAR_AWB_BLOCK | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | - | - | This variable contains the 25 bytes from the AP0101 AWB Variables List:  0xAC02 (2 Bytes) 0xAC06 (1 Byte) 0xAC07 (1 Byte) 0xAC08 (1 Byte) 0xAC09 (1 Byte) 0xAC0A (1 Byte) 0xAC0B (1 Byte) 0xAC0C (1 Byte) 0xAC0D (1 Byte) 0xAC16 (1 Byte) 0xAC24 (2 Bytes) 0xAC28 (2 Bytes) 0xAC2A (2 Bytes) 0xAC2C (2 Bytes) 0xAC2E (2 Bytes) 0xAC30 (2 Bytes) 0xAC32 (2 Bytes) |

### ARG_0X4033_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VAR_AWB_BLOCK | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | - | - | This variable contains the 25 bytes from the AP0101 AWB Variables List:  0xAC02 (2 Bytes) 0xAC06 (1 Byte) 0xAC07 (1 Byte) 0xAC08 (1 Byte) 0xAC09 (1 Byte) 0xAC0A (1 Byte) 0xAC0B (1 Byte) 0xAC0C (1 Byte) 0xAC0D (1 Byte) 0xAC16 (1 Byte) 0xAC24 (2 Bytes) 0xAC28 (2 Bytes) 0xAC2A (2 Bytes) 0xAC2C (2 Bytes) 0xAC2E (2 Bytes) 0xAC30 (2 Bytes) 0xAC32 (2 Bytes) |

### ARG_0X4034_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VAR_AWB_BLOCK | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | - | - | This variable contains the 25 bytes from the AP0101 AWB Variables List:  0xAC02 (2 Bytes) 0xAC06 (1 Byte) 0xAC07 (1 Byte) 0xAC08 (1 Byte) 0xAC09 (1 Byte) 0xAC0A (1 Byte) 0xAC0B (1 Byte) 0xAC0C (1 Byte) 0xAC0D (1 Byte) 0xAC16 (1 Byte) 0xAC24 (2 Bytes) 0xAC28 (2 Bytes) 0xAC2A (2 Bytes) 0xAC2C (2 Bytes) 0xAC2E (2 Bytes) 0xAC30 (2 Bytes) 0xAC32 (2 Bytes) |

### ARG_0X4035_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VAR_AWB_BLOCK | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | - | - | This variable contains the 25 bytes from the AP0101 AWB Variables List:  0xAC02 (2 Bytes) 0xAC06 (1 Byte) 0xAC07 (1 Byte) 0xAC08 (1 Byte) 0xAC09 (1 Byte) 0xAC0A (1 Byte) 0xAC0B (1 Byte) 0xAC0C (1 Byte) 0xAC0D (1 Byte) 0xAC16 (1 Byte) 0xAC24 (2 Bytes) 0xAC28 (2 Bytes) 0xAC2A (2 Bytes) 0xAC2C (2 Bytes) 0xAC2E (2 Bytes) 0xAC30 (2 Bytes) 0xAC32 (2 Bytes) |

### ARG_0X403F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAMERA_ID | 0-n | high | unsigned char | - | TAB_CAMERAS | - | - | - | - | - | Camera selector for choosing a specific camera or all cameras on which the relevant job will be applied |

### ARG_0X4040_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODE | 0-n | high | unsigned char | - | FlickerMitigationMode | - | - | - | - | - | Flicker Mitigation Mode |
| STAT_BRIGHTNESSTHR_HIGH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 200.0 | Upper Threshold Value |
| STAT_BRIGHTNESSTHR_LOW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 200.0 | Lower threshold Value |
| STAT_USSTHR_UP | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Upper USS Threshold value (cm) |
| STAT_USSTHR_DOWN | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Lower USS Threshold value (cm) |

### ARG_0X4041_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1000.0 | LED Frequency in Hz |
| STAT_DUTYCYCLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | LED Duty Cycle |
| STAT_NOMINALTARGET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Nominal Target |
| STAT_BULKDEFINITION_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Bulk Definition |
| STAT_HIGHLIGHTDEFINITION_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | highlight Definition |
| STAT_TONEMAP_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Tone Map |

### ARG_0X406A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IMAGEVIEW | 0-n | high | unsigned char | - | TAB_IMAGEVIEW | - | - | - | - | - | Übertragung des geforderten Drive Recorder Videostromes |

### ARG_0X4104_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POI_DATABASE | DATA | high | data[168] | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData char[167] |

### ARG_0X4107_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POI_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | ID for the to be deleted POI |

### ARG_0X4109_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POI_ID | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | WriteData |

### ARG_0X4120_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DURATION | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0-254: Time in second 255:     During the complete drive cycle |

### ARG_0X4121_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LASTPOS | DATA | high | data[11] | - | - | 1.0 | 1.0 | 0.0 | - | - | LAT, LON, HDG, ALT |

### ARG_0X4125_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_AUTO_ACTIV | 0/1 | high | unsigned char | - | - | - | - | - | - | - | WriteData |

### ARG_0X4127_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_QUAL_TOLERANCE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X4128_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAJOR_X0_MEMBPARAM | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| MAJOR_X1_MEMBPARAM | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| MAJOR_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X4129_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MINOR_X0_MEMBPARAM | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| MINOR_X1_MEMBPARAM | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| MINOR_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X412A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HEADING_X0_MEMBPARAM | ° | high | unsigned char | - | - | 1.0 | 1.5 | 0.0 | - | - | WriteData |
| HEADING_X1_MEMBPARAM | ° | high | unsigned char | - | - | 1.0 | 1.5 | 0.0 | - | - | WriteData |
| HEADING_X2_MEMBPARAM | ° | high | unsigned char | - | - | 1.0 | 1.5 | 0.0 | - | - | WriteData |
| HEADING_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X412B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPEED_X0_MEMBPARAM | km/h | high | unsigned int | - | - | 1.0 | 0.0156 | 0.0 | - | - | WriteData |
| SPEED_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X412C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACC_X0_MEMBPARAM | m/s² | high | unsigned int | - | - | 1.0 | 0.002 | 32500.0 | - | - | WriteData |
| ACC_X1_MEMBPARAM | m/s² | high | unsigned int | - | - | 1.0 | 0.002 | 32500.0 | - | - | WriteData |
| ACC_X2_MEMBPARAM | m/s² | high | unsigned int | - | - | 1.0 | 0.002 | 32500.0 | - | - | WriteData |
| ACC_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X412D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ALT_X0_MEMBPARAM | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| ALT_X1_MEMBPARAM | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| ALT_X2_MEMBPARAM | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |
| ALT_Y_MEMBPARAM | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

### ARG_0X4171_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SET_CANDEBUG | 0/1 | high | signed char | - | - | - | - | - | - | - | Setzen von CANDEBUG |

### ARG_0X4311_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ENABLE_POWER_DOWN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: nicht aktiv 0x01: aktiv |

### ARG_0X4474_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEMP_ABSCH | 0-n | high | unsigned char | - | TEMPERATUR_ABSCHALTUNG | - | - | - | - | - | Temperatur an- und Abschaltung |

### ARG_0X570D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODE_TESTBILD | 0-n | high | unsigned char | - | TESTBILD_RFK2 | - | - | - | - | - | Modus des Testbildes |

### ARG_0X5AC0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARGUMENT_START_STOP | 0/1 | high | unsigned char | - | - | - | - | - | - | - | test |

### ARG_0X68A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RFK_BETRIEBSMODUS | 0-n | high | unsigned char | - | RFK_MODE | - | - | - | - | - | Entwicklerjob für die Modusumschaltung |

### ARG_0XA01A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | 1.0 | 1.0 | 0.0 | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA0DB_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DTC_NR | + | - | HEX | high | unsigned long | - | - | - | - | - | - | - | Nummer des sekundären DTC der ausgelesen werden soll in Hexadezimalwerten. Verwendet werden von RCP aktuell die sekundären DTCs 00800C00 00800C01 00800C02 00800C03 Als Vorhalt vorhanden sind ausserdem die DTCs 00800C04-00800C09 |
| HISTORY_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | ID des History-Satzes der ausgelesen werden soll: 0 = erstes Fehlerauftreten 1 = letztes Fehlerauftreten |

### ARG_0XD38E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | high | unsigned char | - | TAB_KAMERA_ICAM | - | - | - | - | - | Gewählte Kamera für RESET von Kamerakalibrierdaten. Siehe TAB_KAMERA_ICAM |

### ARG_0XD3B4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAMERA | 0-n | - | unsigned char | - | TAB_KAMERA_TESTBILD | - | - | - | - | - | Gibt an, welche Kamera ein Testbild ausgeben soll:  siehe Tabelle TAB_KAMERA_TESTBILD |
| TESTBILD | 0-n | - | unsigned char | - | TAB_TRSVC_TESTBILD | - | - | - | - | - | 0 = Realbild,  1  = Testbild (Farbeverlauf und Text welche Kamera) |
| TIMEOUT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ausgabezeit für das Testbild in Sekunden fest. Default: 10, Bereich: 1-30, 0 = Normalbetrieb, 255 ohne Timeout. |

### ARG_0XD3E1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TRAJEKTORIEN_LOESCHEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: keine Aktion    1:Trajektorien löschen |

### ARG_0XD848_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ATC_MODE | 0-n | high | unsigned char | - | TAB_ATC_MODE | - | - | - | - | - | ATC Mode steuern |

### ARG_0XF002_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _COMMAND_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 Nothing 1 activation_rq  |
| _COMMAND_PARAMETER | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Write DATA |

### ARG_0XF003_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COMMAND_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | SBA Generic Command |
| COMMAND_PARAMETERS | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | SBA Command Paramaters |

### ARG_0XF004_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAMERA_ID | + | - | 0-n | high | unsigned char | - | TAB_CAMERAS | - | - | - | - | - | Selects the camera for which the reading job is applied. |
| REG | + | - | HEX | high | unsigned long | - | - | - | - | - | - | - | Selects the register address that has to be read out |

### ARG_0XF008_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID_OVERLAY | + | + | HEX | high | unsigned char | - | - | - | - | - | - | - | Aktivierung des Overlays mit dieser ID |

### ARG_0XF00C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| XVIEW3D_APPLICATION | + | - | 0-n | high | unsigned char | - | XVIEW3D_APPLICATION | - | - | - | - | - | Dieses Argument setzt den Applikationsmodus. Dadurch wird die  State Machine  temporär deaktiviert. |
| XVIEW3D_MODUS | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Modus analog zu XVIEW3D-Someip Service |
| XVIEW3D_PERSPECTIVE | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Perspektive analog zu xView3D Someip-Service |

### ARG_0XF00D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID_OVERLAY | + | - | HEX | high | unsigned char | - | - | - | - | - | - | - | Aktivierung des Overlays mit dieser ID |

### ARG_0XF00F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REGISTER | + | - | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Register |
| DATA | + | - | DATA | high | data[64] | - | - | 1.0 | 1.0 | 0.0 | - | - | Register Data |

### ARG_0XF010_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REGISTER | + | - | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Register |

### ARG_0XF101_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POI_DATA_LAT_WERT | - | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Latitude |
| STAT_POI_DATA_LON_WERT | - | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Longitude |
| STAT_POI_DATA_HDG_WERT | - | - | - | high | unsigned char | - | - | 1.5 | 1.0 | 0.0 | - | - | HDG |
| STAT_POI_DATA_ALT_WERT | - | - | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Altitude |
| STAT_POI_DATA_QUA_WERT | - | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Qualifier  0--- ---- ---1     Dead Reckoning kalibriert   0--- ---- --1-     GPS 2D Fix   0--- ---- -1--     GPS 3D Fix   0--- ---- 1---     Differential GPS   0--- ---1 ----     Onroad/Offroad   0--- 000- ----    Longitude Standard deviation error 0--- 111- ----  0000 ---- ----    Lateral Standard deviation error 0111 ---- ----    1111 1111 1111    Signal ungültig   1111 1111 1110    Signal nicht verfügbar |
| POI_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | POI Identifier |

### ARG_0XF102_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POI_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | POI Identifier |
| POI_DATA_LAT | + | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Latitude |
| POI_DATA_LON | + | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | - | - | Longitude |
| POI_DATA_HDG | + | - | - | high | unsigned char | - | - | 1.0 | 1.5 | 0.0 | - | - | HDG |
| POI_DATA_ALT | + | - | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Altitude |
| _POI_DATA_QUA | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Qualifier  0--- ---- ---1     Dead Reckoning kalibriert   0--- ---- --1-     GPS 2D Fix   0--- ---- -1--     GPS 3D Fix   0--- ---- 1---     Differential GPS   0--- ---1 ----     Onroad/Offroad   0--- 000- ----    Longitude Standard deviation error 0--- 111- ----  0000 ---- ----    Lateral Standard deviation error 0111 ---- ----    1111 1111 1111    Signal ungültig   1111 1111 1110    Signal nicht verfügbar |

### ARG_0XF103_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COMMAND_ID | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 nothing  1 activation_rq 2 AddPoi without Quality Check 3 PbaStartup 4 ¿ ¿ 255 |
| COMMAND_PARAMETER | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | WriteData |

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

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x020600 | Energiesparmode aktiv | 0 | - |
| 0x020608 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x020609 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02060A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02060B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02060C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02060D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF06 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x800B80 | Top View Kamera rechts: Kalibrierungs- oder Justagefehler erkannt | 0 | - |
| 0x800B81 | Top View Kamera links: Kalibrierungs- oder Justagefehler erkannt | 0 | - |
| 0x800B82 | Top View Kamera rechts: Verbindungsfehler | 0 | - |
| 0x800B83 | Top View Kamera links: Verbindungsfehler | 0 | - |
| 0x800B84 | Codierung - inkonsistente Codierdaten | 0 | - |
| 0x800B85 | 3D-Fahrzeug: Upload-Prozess fehlgeschlagen (Retry Count überschritten) | 0 | - |
| 0x800B86 | Rear View Kamera: Verbindungsfehler | 0 | - |
| 0x800B87 | Picture Freeze im Bild einer einzelnen Kamera | 0 | - |
| 0x800B88 | Picture Freeze im Ausgabebild | 0 | - |
| 0x800B89 | 3D-Fahrzeug: Modell und/oder Individualisierungsdatei nicht lesbar (beschädigt oder nicht verfügbar) | 0 | - |
| 0x800B8A | 3D-Fahrzeug: Upload-Prozess nie stattgefunden oder fehlgeschlagen | 0 | - |
| 0x800B8C | Top View Kamera rechts: max. zulässiger Strom überschritten | 0 | - |
| 0x800B8D | Top View Kamera links: max. zulässiger Strom überschritten | 0 | - |
| 0x800B90 | Rear View Kamera: max. zulässiger Strom überschritten | 0 | - |
| 0x800B91 | Top View Kamera links: Übertemperatur erkannt | 0 | - |
| 0x800B92 | Top View Kamera rechts: Übertemperatur erkannt | 0 | - |
| 0x800B95 | Rear View Kamera: Übertemperatur erkannt | 0 | - |
| 0x800B96 | Rear View Kamera: Kalibrierungs- oder Justagefehler erkannt | 0 | - |
| 0x800B99 | Interner Steuergerätefehler | 0 | - |
| 0x800B9A | Interner Steuergerätefehler | 0 | - |
| 0x800B9B | Ferngesteuertes Parken: Parkkameras Problem | 1 | - |
| 0x800B9D | Übertemperatur Steuergerät | 0 | - |
| 0x800B9E | Überspannung erkannt | 1 | - |
| 0x800B9F | Unterspannung erkannt | 1 | - |
| 0x800BA1 | Top View Kamera rechts: Interne Kamerafehler | 0 | - |
| 0x800BA2 | Top View Kamera links: Interne Kamerafehler | 0 | - |
| 0x800BA5 | Rear View Kamera: Interne Kamerafehler | 0 | - |
| 0x800BAB | Top View Kamera rechts: Sensor Blindheit erkannt | 1 | - |
| 0x800BAC | Top View Kamera links: Sensor Blindheit erkannt | 1 | - |
| 0x800BAF | Rear View Kamera: Sensor Blindheit erkannt | 1 | - |
| 0x800BB5 | Ferngesteuertes Parken: Parksensoren Problem | 1 | - |
| 0x800BB6 | Ferngesteuertes Parken: Fahrstufe Problem | 1 | - |
| 0x800BB7 | Ferngesteuertes Parken: UI Problem | 1 | - |
| 0x800BC6 | Ferngesteuertes Parken: Fehler Explorationsmodus | 1 | - |
| 0x800BC7 | Ferngesteuertes Parken: Environment Problem | 1 | - |
| 0x800BC8 | Ferngesteuertes Parken: Exterieur Problem | 1 | - |
| 0x800BC9 | Ferngesteuertes Parken: Fahrdynamik Problem | 1 | - |
| 0x800BCA | Ferngesteuertes Parken: HW/SW Problem | 0 | - |
| 0x800BCD | Ferngesteuertes Parken: FUSI Problem | 1 | - |
| 0x800BCF | Ferngesteuertes Parken: Fahrbereitschaft Problem | 1 | - |
| 0x800BD0 | Interner Softwarefehler | 1 | - |
| 0x800BD1 | Interner Softwarefehler | 1 | - |
| 0x800BD2 | RearView - Bitmaps nicht generiert | 0 | - |
| 0x800BD3 | Imaging subsystem error | 1 | - |
| 0x800BDD | Top View Kamera links: Kamera nicht angelernt | 0 | - |
| 0x800BDE | Top View Kamera rechts: Kamera nicht angelernt | 0 | - |
| 0x800BE1 | Rear View Kamera: Kamera nicht angelernt | 0 | - |
| 0x800BE2 | Front View Kamera: Verbindungsfehler | 0 | - |
| 0x800BE4 | Front View Kamera: Sensor Blindheit erkannt | 1 | - |
| 0x800BE5 | Front View Kamera: Kalibrierungs- oder Justagefehler erkannt | 0 | - |
| 0x800BE6 | Front View Kamera: Kamera nicht angelernt | 0 | - |
| 0x800BE8 | ICAM: Initialisierungsfehler Kalibrierung | 1 | - |
| 0x800BE9 | Front View Kamera: Interne Kamerafehler | 0 | - |
| 0x800BEA | Front View Kamera: max. zulässiger Strom überschritten | 0 | - |
| 0x800BEB | Front View Kamera: Übertemperatur erkannt | 0 | - |
| 0x800BED | Ferngesteuertes Parken: Fehler Zeitkriterium Erwartungswert | 1 | - |
| 0x800BEF | Ferngesteuertes Parken: FuSi Eingriff | 1 | - |
| 0x800BF9 | ICAM: Fehler Kameraparameter | 0 | - |
| 0x800BFC | Funktionsfehler FUSI | 0 | - |
| 0x800BFD | Zugriffsfehler FUSI | 0 | - |
| 0x800BFE | Kamerasoftware passt nicht zum Steuergerät | 0 | - |
| 0x800C14 | Ferngesteuertes Parken: Fehler Klemmenzustand oder Fahrbereitschaft | 1 | - |
| 0x800C15 | Ferngesteuertes Parken: Fehler Fahrstufe oder Parkbremse | 1 | - |
| 0x800C16 | Ferngesteuertes Parken: UI Problem | 1 | - |
| 0x800C17 | Ferngesteuertes Parken: Fahrdynamik Problem | 1 | - |
| 0x800C18 | Ferngesteuertes Parken: RSU aktiv | 1 | - |
| 0x800C19 | Ferngesteuertes Parken: Fehler Systemablauf | 1 | - |
| 0x800C1A | Ferngesteuertes Parken: Signalfehler | 1 | - |
| 0x800C1B | Ferngesteuertes Parken: interner Signalfehler | 0 | - |
| 0x800C1C | Ferngesteuertes Parken: Funktionsbereitschaft Problem | 1 | - |
| 0x800C1D | Ferngesteuertes Parken: Fehler Wiederaufnahme Parkvorgang | 1 | - |
| 0x800C1E | Ferngesteuertes Parken: Fehler Parkvorgang | 1 | - |
| 0x800C1F | Ferngesteuertes Parken: Parkangebot eingeschränkt | 1 | - |
| 0x800C20 | Ferngesteuertes Parken: Fehler Parkendposition | 1 | - |
| 0xCA8602 | Ethernet: Link-Qualität niedrig | 1 | - |
| 0xCA8603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 | - |
| 0xCA8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xCA8C01 | USS-CAN Control Module Bus OFF | 0 | - |
| 0xCA9401 | BOTSCHAFTSFEHLER_0x9531 _0x0001_BMW_POWERTRAIN_AcceleratorPedal_TIMEOUT | 1 | - |
| 0xCA9402 | Botschaftsfehler (Echo 06 Indirekt ID 710h ECH_06_IDIC_USS) - Timeout | 1 | - |
| 0xCA9403 | BOTSCHAFTSFEHLER_ 0x3531 _0x0001_BMW_DASS_ControlAndStatus_TIMEOUT | 1 | - |
| 0xCA9404 | Botschaftsfehler (Status USS Front ID 732h ST_USS_FS) - Timeout | 1 | - |
| 0xCA9405 | Botschaftsfehler (Status USS Rear ID 731h ST_USS_RS) - Timeout | 1 | - |
| 0xCA9406 | BOTSCHAFTSFEHLER_0x1531_0x0001_BMW_INFRASTRUCTURE_VehicleCondition_E2E_ABSICHERUNGSFEHLER | 1 | - |
| 0xCA9408 | BOTSCHAFTSFEHLER_ 0x3538 _0x0001_BMW_DASS_DriverAssistanceComfortAndSecurity_ TIMEOUT | 1 | - |
| 0xCA9409 | BOTSCHAFTSFEHLER_ 0x7531 _0x0001_BMW_CHASSIS_DrivingVector_TIMEOUT | 1 | - |
| 0xCA940A | BOTSCHAFTSFEHLER_0x7533 _0x0001_BMW_CHASSIS_SpeedAcceleration_ E2E_ABSICHERUNGSFEHLER | 1 | - |
| 0xCA940C | BOTSCHAFTSFEHLER_0x1535_0x0001_BMW_INFRASTRUCTURE_EnvironmentalInformation_TIMEOUT | 1 | - |
| 0xCA940D | SIGNALFEHLER_0x3005_0x0001_ StatusDriverAssistanceParkingLocal _SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA940F | BOTSCHAFTSFEHLER_0x5532_0x0001_BMW_BODY_Light_TIMEOUT | 1 | - |
| 0xCA9410 | BOTSCHAFTSFEHLER_0xd530_0x0001_BMW_DASS_NearField_TIMEOUT | 1 | - |
| 0xCA9411 | BOTSCHAFTSFEHLER_0x3532_0x0001_ BMW_DASS_ParkdistanceInformation_TIMEOUT | 1 | - |
| 0xCA9412 | BOTSCHAFTSFEHLER_0x5532_0x0001_BMW_BODY_Light_E2E_ABSICHERUNGSFEHLER | 1 | - |
| 0xCA9413 | SIGNALFEHLER_0x3007_0x0001_ RemoteParkingStatus _SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9414 | BOTSCHAFTSFEHLER_0x7535 _0x0001_BMW_CHASSIS_PotentialVector_TIMEOUT | 1 | - |
| 0xCA9415 | SIGNALFEHLER_0x3007_0x0002_ RemoteParkingStatus _SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9416 | BOTSCHAFTSFEHLER_0x7533 _0x0001_BMW_CHASSIS_SpeedAcceleration_TIMEOUT | 1 | - |
| 0xCA9417 | BOTSCHAFTSFEHLER_0x3002 _0x0001_BMW_DASS_RCP_StatusController_TIMEOUT | 1 | - |
| 0xCA9418 | SIGNALFEHLER_0x3007_0x0003_ RemoteParkingStatus _SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9419 | BOTSCHAFTSFEHLER_0x7532_0x0001_BMW_CHASSIS_SteeringAngle_TIMEOUT | 1 | - |
| 0xCA941A | BOTSCHAFTSFEHLER_0x1531_0x0001_BMW_INFRASTRUCTURE_VehicleCondition_TIMEOUT | 1 | - |
| 0xCA941B | BOTSCHAFTSFEHLER_0x1536_0x0001_BMW_INFRASTRUCTURE_VehicleInformation_TIMEOUT | 1 | - |
| 0xCA941C | BOTSCHAFTSFEHLER_0x7530 _0x0001_BMW_CHASSIS_VehicleModel_TIMEOUT | 1 | - |
| 0xCA941D | BOTSCHAFTSFEHLER_0x7534_0x0001_BMW_CHASSIS_VehicleStabilizationManagement_ TIMEOUT | 1 | - |
| 0xCA9423 | BOTSCHAFTSFEHLER_0x3531_0x0001_BMW_DASS_ControlAndStatus_E2E_ABSICHERUNGSFEHLER | 1 | - |
| 0xCA9424 | SIGNALFEHLER_0x3520_0x0001_ OperationRemote _SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9425 | SIGNALFEHLER_0x7534_0x0002_ VehicleStabilizationManagement _SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9426 | BOTSCHAFTSFEHLER_0x1536_BMW_DATAPOWERTRAIN2_E2E_ ABSICHERUNGSFEHLER | 1 | - |
| 0xCA9427 | BOTSCHAFTSFEHLER_0x3007_BMWSTATUSREMOTE_E2E_ ABSICHERUNGSFEHLER | 1 | - |
| 0xCA9428 | BOTSCHAFTSFEHLER_0x3520_BMW_OPERATIONREMOTEPARKING_E2E_ ABSICHERUNGSFEHLER | 1 | - |
| 0xCA9429 | BOTSCHAFTSFEHLER_0x3531_BMW_STATUSPARKINGASSISTANT_ E2E_ ABSICHERUNGSFEHLER | 1 | - |
| 0xCA942A | BOTSCHAFTSFEHLER_0x7533_BMW_VEHICLESPEED_E2E_ ABSICHERUNGSFEHLER | 1 | - |
| 0xCA942B | SIGNALFEHLER_0x5530_0x0003_BMW_BODY_ CentralLockingAndDoorLock_UNGÜLTIG | 1 | - |
| 0xCA942C | SIGNALFEHLER_0x5530_0x0005_BMW_BODY_ CabrioRoof _UNGÜLTIG | 1 | - |
| 0xCA9430 | BOTSCHAFTSFEHLER_0xd530_0x0001_BMW_DASS_NearField_E2E_ABSICHERUNGSFEHLER | 1 | - |
| 0xCA9437 | BOTSCHAFTSFEHLER_0x3002 _0x0001_BMW_DASS_RCP_StatusController_E2E_ABSICHERUNGSFEHLER | 1 | - |
| 0xCA943C | BOTSCHAFTSFEHLER_0x7530 _0x0001_BMW_CHASSIS_VehicleModel_E2E_ABSICHERUNGSFEHLER | 1 | - |
| 0xCA943D | BOTSCHAFTSFEHLER_0x7534 _0x0001_BMW_CHASSIS_VehicleStabilizationManagement_ E2E_ABSICHERUNGSFEHLER | 1 | - |
| 0xCA9440 | SIGNALFEHLER_0xB531_0x0001_BMW_INFOTAINMENT_ADASProtocol_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9441 | SIGNALFEHLER_0x9531 _0x0001_BMW_POWERTRAIN_AcceleratorPedal_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9442 | SIGNALFEHLER_0x3532_0x0001_BMW_DASS_ParkDistanceInformation_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9443 | SIGNALFEHLER_0x3531 _0x0001_BMW_DASS_ControlAndStatus_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9444 | SIGNALFEHLER_0x3003_0x0001_BMW_DASS_XView3D_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9445 | SIGNALFEHLER_0xb530 _0x0001_BMW_INFOTAINMENT_ControllerElements_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9447 | SIGNALFEHLER_0x5530_0x0001_BMW_BODY_DoorsWindowsRoofMirrors_UNGÜLTIG | 1 | - |
| 0xCA9448 | SIGNALFEHLER_0x3538 _0x0001_BMW_DASS_DriverAssistanceComfortAndSecurity_ SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9449 | SIGNALFEHLER_0x7531 _0x0001_BMW_CHASSIS_DrivingVector_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA944C | SIGNALFEHLER_0x1535 _0x0001_BMW_INFRASTRUCTURE_EnvironmentalInformation_  SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA944E | SIGNALFEHLER_0x5535 _0x0001_BMW_BODY_Key_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA944F | SIGNALFEHLER_0x5532_0x0001_BMW_BODY_Light_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9450 | SIGNALFEHLER_0xd530_0x0001_BMW_DASS_NearField_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9452 | SIGNALFEHLER_0x1532 _0x0001_BMW_INFRASTRUCTURE_Pia_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9454 | SIGNALFEHLER_0x7535 _0x0001_BMW_CHASSIS_PotentialVector_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9455 | SIGNALFEHLER_0x9530 _0x0001_BMW_POWERTRAIN_Powertrain_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9456 | SIGNALFEHLER_0x7533 _0x0001_BMW_CHASSIS_SpeedAcceleration_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9457 | SIGNALFEHLER_0x3002 _0x0001_BMW_DASS_RCP_StatusController_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9459 | SIGNALFEHLER_0x7532_0x0001_BMW_CHASSIS_SteeringAngle_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA945A | Botschaftsfehler (Echo 01 Direkt Ultraschallsensor, ID 705h ECH_01_DIC_USS) - Timeout | 1 | - |
| 0xCA945B | Botschaftsfehler (Echo 01 Indirekt Ultraschallsensor, ID 706h ECH_01_IDIC_USS) - Timeout | 1 | - |
| 0xCA945C | Botschaftsfehler (Echo 02 Direkt Ultraschallsensor, ID 707h ECH_02_DIC_USS) - Timeout | 1 | - |
| 0xCA945D | Botschaftsfehler (Echo 02 Indirekt Ultraschallsensor, ID 708h ECH_02_IDIC_USS) - Timeout | 1 | - |
| 0xCA945E | Botschaftsfehler (Echo 03 Direkt Ultraschallsensor, ID 709h ECH_03_DIC_USS) - Timeout | 1 | - |
| 0xCA945F | Botschaftsfehler (Echo 03 Indirekt Ultraschallsensor, ID 70Ah ECH_03_IDIC_USS) - Timeout | 1 | - |
| 0xCA9460 | Botschaftsfehler (Echo 04 Direkt Ultraschallsensor, ID 70Bh ECH_04_DIC_USS) - Timeout | 1 | - |
| 0xCA9461 | Botschaftsfehler (Echo 04 Indirekt Ultraschallsensor, ID 70Ch ECH_04_IDIC_USS) - Timeout | 1 | - |
| 0xCA9462 | Botschaftsfehler (Echo 05 Direkt Ultraschallsensor, ID 70Dh ECH_05_DIC_USS) - Timeout | 1 | - |
| 0xCA9463 | Botschaftsfehler (Echo 05 Indirekt Ultraschallsensor, ID 70Eh ECH_05_IDIC_USS) - Timeout | 1 | - |
| 0xCA9464 | Botschaftsfehler (Echo 06 Direkt Ultraschallsensor, ID 70Fh ECH_06_DIC_USS) - Timeout | 1 | - |
| 0xCA9471 | SIGNALFEHLER_0x1506_0x0001_BMW_INFRASTRUCTURE_StatusEnergy_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9472 | BOTSCHAFTSFEHLER_ 0x9530 _0x0001_BMW_POWERTRAIN_Powertrain_TIMEOUT | 1 | - |
| 0xCA947B | Botschaftsfehler (Objekt 01 Eigenschaft Ultraschallsensor, ID 717h OBJ_01_PROP_USS) - Timeout | 1 | - |
| 0xCA947C | Botschaftsfehler (Objekt 01 Position Ultraschallsensor, ID 716h OBJ_01_PO_USS) - Timeout | 1 | - |
| 0xCA947D | Botschaftsfehler (Objekt 02 Eigenschaft Ultraschallsensor, ID 719h OBJ_02_PROP_USS) - Timeout | 1 | - |
| 0xCA947E | Botschaftsfehler (Objekt 02 Position Ultraschallsensor, ID 718h OBJ_02_PO_USS) - Timeout | 1 | - |
| 0xCA947F | Botschaftsfehler (Objekt 03 Eigenschaft Ultraschallsensor, ID 71Bh OBJ_03_PROP_USS) - Timeout | 1 | - |
| 0xCA9480 | Botschaftsfehler (Objekt 03 Position Ultraschallsensor, ID 71Ah OBJ_03_PO_USS) - Timeout | 1 | - |
| 0xCA9481 | Botschaftsfehler (Objekt 04 Eigenschaft Ultraschallsensor, ID 71Dh OBJ_04_PROP_USS) - Timeout | 1 | - |
| 0xCA9482 | Botschaftsfehler (Objekt 04 Position Ultraschallsensor, ID 71Ch OBJ_04_PO_USS) - Timeout | 1 | - |
| 0xCA9483 | Botschaftsfehler (Objekt 05 Eigenschaft Ultraschallsensor, ID 71Fh OBJ_05_PROP_USS) - Timeout | 1 | - |
| 0xCA9484 | Botschaftsfehler (Objekt 05 Position Ultraschallsensor, ID 71Eh OBJ_05_PO_USS) - Timeout | 1 | - |
| 0xCA9485 | Botschaftsfehler (Objekt 06 Eigenschaft Ultraschallsensor, ID 721h OBJ_06_PROP_USS) - Timeout | 1 | - |
| 0xCA9486 | Botschaftsfehler (Objekt 06 Position Ultraschallsensor, ID 720h OBJ_06_PO_USS) - Timeout | 1 | - |
| 0xCA9487 | Botschaftsfehler (Objekt 07 Eigenschaft Ultraschallsensor, ID 723h OBJ_07_PROP_USS) - Timeout | 1 | - |
| 0xCA9488 | Botschaftsfehler (Objekt 07 Position Ultraschallsensor, ID 722h OBJ_07_PO_USS) - Timeout | 1 | - |
| 0xCA9489 | Botschaftsfehler (Objekt 08 Eigenschaft Ultraschallsensor, ID 725h OBJ_08_PROP_USS) - Timeout | 1 | - |
| 0xCA948A | Botschaftsfehler (Objekt 08 Position Ultraschallsensor, ID 724h OBJ_08_PO_USS) - Timeout | 1 | - |
| 0xCA948B | Botschaftsfehler (Objekt 09 Eigenschaft Ultraschallsensor, ID 727h OBJ_09_PROP_USS) - Timeout | 1 | - |
| 0xCA948C | Botschaftsfehler (Objekt 09 Position Ultraschallsensor, ID 726h OBJ_09_PO_USS) - Timeout | 1 | - |
| 0xCA948D | Botschaftsfehler (Objekt 10 Eigenschaft Ultraschallsensor, ID 729h OBJ_10_PROP_USS) - Timeout | 1 | - |
| 0xCA948E | Botschaftsfehler (Objekt 10 Position Ultraschallsensor, ID 728h OBJ_10_PO_USS) - Timeout | 1 | - |
| 0xCA948F | Botschaftsfehler (Objekt 11 Eigenschaft Ultraschallsensor, ID 72Bh OBJ_11_PROP_USS) - Timeout | 1 | - |
| 0xCA9490 | Botschaftsfehler (Objekt 11 Position Ultraschallsensor, ID 72Ah OBJ_11_PO_USS) - Timeout | 1 | - |
| 0xCA9491 | Botschaftsfehler (Objekt 12 Eigenschaft Ultraschallsensor, ID 72Dh OBJ_12_PROP_USS) - Timeout | 1 | - |
| 0xCA9492 | Botschaftsfehler (Objekt 12 Position Ultraschallsensor, ID 72Ch OBJ_12_PO_USS) - Timeout | 1 | - |
| 0xCA9498 | SIGNALFEHLER_0x1531_0x0001_BMW_INFRASTRUCTURE_VehicleCondition_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA9499 | SIGNALFEHLER_0x1536_0x0001_BMW_INFRASTRUCTURE_VehicleInformation_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA949A | SIGNALFEHLER_0x7530 _0x0001_BMW_CHASSIS_VehicleModel_SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA949B | SIGNALFEHLER_0x7534_0x0001_BMW_CHASSIS_VehicleStabilizationManagement_ SIGNAL_UNGÜLTIG | 1 | - |
| 0xCA949C | BOTSCHAFTSFEHLER_0x9530_0x0001_BMW_POWERTRAIN_E2E_ABSICHERUNGSFEHLER | 1 | - |
| 0xCA949D | BOTSCHAFTSFEHLER_0x9530_0x0001_BMW_POWERTRAIN_TIMEOUT | 1 | - |
| 0xCA949E | USS CAN: globaler Timeout | 1 | - |
| 0xCA94FA | SIGNALFEHLER_0x1502_0x0001_RSUINTERFACESIGNAL_UNGÜLTIG | 1 | - |
| 0xCA94FB | SIGNALFEHLER_0x3520_0x0001_OPERATIONREMOTE_TIMEOUT | 1 | - |
| 0xCA94FC | SIGNALFEHLER_0x5530_0x0001_BMW_Body_DoorsWindowsRoofMirrors_TIMEOUT | 1 | - |
| 0xCA9771 | BOTSCHAFTSFEHLER_ 0x5530 _0x0001_BMW_BODY_DoorsWindowsRoofMirrors_TIMEOUT | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

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
| 0x0022 | INTERNAL_CAM_ERROR_0 | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0023 | INTERNAL_CAM_ERROR_1 | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0024 | INTERNAL_CAM_ERROR_2 | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0025 | INTERNAL_CAM_ERROR_3 | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0026 | INTERNAL_CAM_ERROR_4 | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0027 | INTERNAL_CAM_ERROR_5 | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0028 | INTERNAL_CAM_ERROR_6 | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0029 | INTERNAL_CAM_ERROR_7 | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x002A | INTERNAL_CAM_ERROR_8 | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x002B | INTERNAL_CAM_ERROR_9 | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x002C | INTERNAL_CAM_ERROR_10 | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x002D | INTERNAL_CAM_ERROR_11 | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x002E | INTERNAL_CAM_ERROR_12 | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x002F | INTERNAL_CAM_ERROR_13 | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x0030 | INTERNAL_CAM_ERROR_14 | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0031 | INTERNAL_CAM_ERROR_15 | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0032 | INTERNAL_CAM_ERROR_16 | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0033 | INTERNAL_CAM_ERROR_17 | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0034 | INTERNAL_CAM_ERROR_18 | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0035 | INTERNAL_CAM_ERROR_19 | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0036 | INTERNAL_CAM_ERROR_20 | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0037 | INTERNAL_CAM_ERROR_21 | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x0038 | INTERNAL_CAM_ERROR_22 | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0039 | INTERNAL_CAM_ERROR_23 | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x003A | INTERNAL_CAM_ERROR_24 | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x003B | INTERNAL_CAM_ERROR_25 | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x003C | INTERNAL_CAM_ERROR_26 | 0/1 | High | 0x04000000 | - | - | - | - |
| 0x003D | INTERNAL_CAM_ERROR_27 | 0/1 | High | 0x08000000 | - | - | - | - |
| 0x003E | INTERNAL_CAM_ERROR_28 | 0/1 | High | 0x10000000 | - | - | - | - |
| 0x003F | INTERNAL_CAM_ERROR_29 | 0/1 | High | 0x20000000 | - | - | - | - |
| 0x0040 | INTERNAL_CAM_ERROR_30 | 0/1 | High | 0x40000000 | - | - | - | - |
| 0x0041 | INTERNAL_CAM_ERROR_0 | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0042 | INTERNAL_CAM_ERROR_1 | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0043 | INTERNAL_CAM_ERROR_2 | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0044 | INTERNAL_CAM_ERROR_3 | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0045 | INTERNAL_CAM_ERROR_4 | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0046 | INTERNAL_CAM_ERROR_5 | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0047 | INTERNAL_CAM_ERROR_6 | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0048 | INTERNAL_CAM_ERROR_7 | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0049 | INTERNAL_CAM_ERROR_8 | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x004A | INTERNAL_CAM_ERROR_9 | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x004B | INTERNAL_CAM_ERROR_10 | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x004C | INTERNAL_CAM_ERROR_11 | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x004D | INTERNAL_CAM_ERROR_12 | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x004E | INTERNAL_CAM_ERROR_13 | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x004F | INTERNAL_CAM_ERROR_14 | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x0050 | INTERNAL_CAM_ERROR_15 | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0051 | INTERNAL_CAM_ERROR_16 | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0052 | INTERNAL_CAM_ERROR_17 | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0053 | INTERNAL_CAM_ERROR_18 | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0054 | INTERNAL_CAM_ERROR_19 | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0055 | INTERNAL_CAM_ERROR_20 | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0056 | INTERNAL_CAM_ERROR_21 | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x0057 | INTERNAL_CAM_ERROR_22 | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0058 | INTERNAL_CAM_ERROR_23 | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x0059 | INTERNAL_CAM_ERROR_24 | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x005A | INTERNAL_CAM_ERROR_25 | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x005B | INTERNAL_CAM_ERROR_26 | 0/1 | High | 0x04000000 | - | - | - | - |
| 0x005C | INTERNAL_CAM_ERROR_27 | 0/1 | High | 0x08000000 | - | - | - | - |
| 0x005D | INTERNAL_CAM_ERROR_28 | 0/1 | High | 0x10000000 | - | - | - | - |
| 0x005E | INTERNAL_CAM_ERROR_29 | 0/1 | High | 0x20000000 | - | - | - | - |
| 0x005F | INTERNAL_CAM_ERROR_30 | 0/1 | High | 0x40000000 | - | - | - | - |
| 0x0060 | INTERNAL_CAM_ERROR_0 | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0061 | INTERNAL_CAM_ERROR_1 | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0062 | INTERNAL_CAM_ERROR_2 | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0063 | INTERNAL_CAM_ERROR_3 | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0064 | INTERNAL_CAM_ERROR_4 | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0065 | INTERNAL_CAM_ERROR_5 | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0066 | INTERNAL_CAM_ERROR_6 | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0067 | INTERNAL_CAM_ERROR_7 | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0068 | INTERNAL_CAM_ERROR_8 | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0069 | INTERNAL_CAM_ERROR_9 | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x006A | INTERNAL_CAM_ERROR_10 | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x006B | INTERNAL_CAM_ERROR_11 | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x006C | INTERNAL_CAM_ERROR_12 | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x006D | INTERNAL_CAM_ERROR_13 | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x006E | INTERNAL_CAM_ERROR_14 | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x006F | INTERNAL_CAM_ERROR_15 | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x0070 | INTERNAL_CAM_ERROR_16 | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0071 | INTERNAL_CAM_ERROR_17 | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0072 | INTERNAL_CAM_ERROR_18 | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0073 | INTERNAL_CAM_ERROR_19 | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0074 | INTERNAL_CAM_ERROR_20 | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0075 | INTERNAL_CAM_ERROR_21 | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x0076 | INTERNAL_CAM_ERROR_22 | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0077 | INTERNAL_CAM_ERROR_23 | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x0078 | INTERNAL_CAM_ERROR_24 | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x0079 | INTERNAL_CAM_ERROR_25 | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x007A | INTERNAL_CAM_ERROR_26 | 0/1 | High | 0x04000000 | - | - | - | - |
| 0x007B | INTERNAL_CAM_ERROR_27 | 0/1 | High | 0x08000000 | - | - | - | - |
| 0x007C | INTERNAL_CAM_ERROR_28 | 0/1 | High | 0x10000000 | - | - | - | - |
| 0x007D | INTERNAL_CAM_ERROR_29 | 0/1 | High | 0x20000000 | - | - | - | - |
| 0x007E | INTERNAL_CAM_ERROR_30 | 0/1 | High | 0x40000000 | - | - | - | - |
| 0x007F | INTERNAL_CAM_ERROR_0 | 0/1 | High | 0x00000001 | - | - | - | - |
| 0x0080 | INTERNAL_CAM_ERROR_1 | 0/1 | High | 0x00000002 | - | - | - | - |
| 0x0081 | INTERNAL_CAM_ERROR_2 | 0/1 | High | 0x00000004 | - | - | - | - |
| 0x0082 | INTERNAL_CAM_ERROR_3 | 0/1 | High | 0x00000008 | - | - | - | - |
| 0x0083 | INTERNAL_CAM_ERROR_4 | 0/1 | High | 0x00000010 | - | - | - | - |
| 0x0084 | INTERNAL_CAM_ERROR_5 | 0/1 | High | 0x00000020 | - | - | - | - |
| 0x0085 | INTERNAL_CAM_ERROR_6 | 0/1 | High | 0x00000040 | - | - | - | - |
| 0x0086 | INTERNAL_CAM_ERROR_7 | 0/1 | High | 0x00000080 | - | - | - | - |
| 0x0087 | INTERNAL_CAM_ERROR_8 | 0/1 | High | 0x00000100 | - | - | - | - |
| 0x0088 | INTERNAL_CAM_ERROR_9 | 0/1 | High | 0x00000200 | - | - | - | - |
| 0x0089 | INTERNAL_CAM_ERROR_10 | 0/1 | High | 0x00000400 | - | - | - | - |
| 0x008A | INTERNAL_CAM_ERROR_11 | 0/1 | High | 0x00000800 | - | - | - | - |
| 0x008B | INTERNAL_CAM_ERROR_12 | 0/1 | High | 0x00001000 | - | - | - | - |
| 0x008C | INTERNAL_CAM_ERROR_13 | 0/1 | High | 0x00002000 | - | - | - | - |
| 0x008D | INTERNAL_CAM_ERROR_14 | 0/1 | High | 0x00004000 | - | - | - | - |
| 0x008E | INTERNAL_CAM_ERROR_15 | 0/1 | High | 0x00008000 | - | - | - | - |
| 0x008F | INTERNAL_CAM_ERROR_16 | 0/1 | High | 0x00010000 | - | - | - | - |
| 0x0090 | INTERNAL_CAM_ERROR_17 | 0/1 | High | 0x00020000 | - | - | - | - |
| 0x0091 | INTERNAL_CAM_ERROR_18 | 0/1 | High | 0x00040000 | - | - | - | - |
| 0x0092 | INTERNAL_CAM_ERROR_19 | 0/1 | High | 0x00080000 | - | - | - | - |
| 0x0093 | INTERNAL_CAM_ERROR_20 | 0/1 | High | 0x00100000 | - | - | - | - |
| 0x0094 | INTERNAL_CAM_ERROR_21 | 0/1 | High | 0x00200000 | - | - | - | - |
| 0x0095 | INTERNAL_CAM_ERROR_22 | 0/1 | High | 0x00400000 | - | - | - | - |
| 0x0096 | INTERNAL_CAM_ERROR_23 | 0/1 | High | 0x00800000 | - | - | - | - |
| 0x0097 | INTERNAL_CAM_ERROR_24 | 0/1 | High | 0x01000000 | - | - | - | - |
| 0x0098 | INTERNAL_CAM_ERROR_25 | 0/1 | High | 0x02000000 | - | - | - | - |
| 0x0099 | INTERNAL_CAM_ERROR_26 | 0/1 | High | 0x04000000 | - | - | - | - |
| 0x009A | INTERNAL_CAM_ERROR_27 | 0/1 | High | 0x08000000 | - | - | - | - |
| 0x009B | INTERNAL_CAM_ERROR_28 | 0/1 | High | 0x10000000 | - | - | - | - |
| 0x009C | INTERNAL_CAM_ERROR_29 | 0/1 | High | 0x20000000 | - | - | - | - |
| 0x009D | INTERNAL_CAM_ERROR_30 | 0/1 | High | 0x40000000 | - | - | - | - |
| 0x009E | INTERNAL_ECU_ERROR | 0-n | High | 0x01 | - | - | - | - |
| 0x009F | ISW_STM8_CLKMON_ERROR_12H | 0-n | High | 0x02 | - | - | - | - |
| 0x00A0 | ISW_ZYNQ_CLKMON_ERROR_52H | 0-n | High | 0x04 | - | - | - | - |
| 0x00A1 | ISW_IMX6_CLKMON_ERROR_62H | 0-n | High | 0x08 | - | - | - | - |
| 0x00A2 | SWITCH_RESET | 0-n | High | 0x10 | - | - | - | - |
| 0x00A3 | CAMERA_0_REAR | 0/1 | High | 0x01 | - | - | - | - |
| 0x00A4 | CAMERA_1_LEFT | 0/1 | High | 0x02 | - | - | - | - |
| 0x00A5 | CAMERA_2_FRONT | 0/1 | High | 0x04 | - | - | - | - |
| 0x00A6 | CAMERA_3_RIGHT | 0/1 | High | 0x08 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175C | MESSAGEID | HEX | High | signed long | - | - | - | - |
| 0x4003 | INTERNAL_SW_ERROR | 0-n | High | 0xFF | TAB_INTERNAL_SW_ERROR | - | - | - |
| 0x4005 | Imaging_Subsystem_Error_List | 0-n | High | 0xFF | WT_Imaging_Subsystem_Err | - | - | - |
| 0x402C | CALIB_ERROR | 0-n | High | 0xFF | TAB_CALIB_ERROR | - | - | - |
| 0x402D | CALIB_ERROR | 0-n | High | 0xFF | TAB_CALIB_ERROR | - | - | - |
| 0x402E | CALIB_ERROR | 0-n | High | 0xFF | TAB_CALIB_ERROR | - | - | - |
| 0x402F | CALIB_ERROR | 0-n | High | 0xFF | TAB_CALIB_ERROR | - | - | - |
| 0x403A | KAMERAVERSORGUNG | 0-n | High | 0xFF | KAMERAVERSORGUNG | - | - | - |
| 0x403B | KAMERADATEN | 0-n | High | 0xFF | KAMERADATEN | - | - | - |
| 0x403C | KAMERA_ETH_LINES | 0-n | High | 0xFF | KAMERA_ETH_LINES | - | - | - |
| 0x4047 | TAB_FUSI | 0-n | High | 0xFFFF | TAB_FUSI | - | - | - |
| 0x404C | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x404D | DATA | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
| 0x404F | KAMERAVERSORGUNG | 0-n | High | 0xFF | KAMERAVERSORGUNG | - | - | - |
| 0x4050 | KAMERAVERSORGUNG | 0-n | High | 0xFF | KAMERAVERSORGUNG | - | - | - |
| 0x4051 | KAMERAVERSORGUNG | 0-n | High | 0xFF | KAMERAVERSORGUNG | - | - | - |
| 0x4052 | KAMERADATEN | 0-n | High | 0xFF | KAMERADATEN | - | - | - |
| 0x4053 | KAMERADATEN | 0-n | High | 0xFF | KAMERADATEN | - | - | - |
| 0x4054 | KAMERADATEN | 0-n | High | 0xFF | KAMERADATEN | - | - | - |
| 0x4055 | KAMERA_ETH_LINES | 0-n | High | 0xFF | KAMERA_ETH_LINES | - | - | - |
| 0x4056 | KAMERA_ETH_LINES | 0-n | High | 0xFF | KAMERA_ETH_LINES | - | - | - |
| 0x4057 | KAMERA_ETH_LINES | 0-n | High | 0xFF | KAMERA_ETH_LINES | - | - | - |
| 0x405A | MESSAGEID_INVALID | HEX | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x405C | CODE | 0-n | High | 0xFFFFFFFF | RCP_ERRORCODE_TAB | - | - | - |
| 0x405D | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x405E | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x405F | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4060 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x4062 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x4175 | RCP_FUSI_STATE | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
| 0x4400 | Interner Softwarefehler | 0-n | High | 0xFF | TAB_INT_SW_FEHLER | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### FLICKERMITIGATIONMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | HDR_OFF - LLM switched off, Vehicle has no PWM-LED taillights |
| 0x01 | LLM - Lowlight mode (based on brightness level) |
| 0x02 | USS_LLM - USS Controlled Low Light mode (based on brightness & USS) |

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
| 0x800900 | MONHW_CMP_ERR_E2E_0x3001 | 0 | - |
| 0x800901 | MONHW_CMP_ERR_E2E_0x3541 | 0 | - |
| 0x800902 | MONHW_MCHK_ERR_ROM | 0 | - |
| 0x800903 | MONHW_MCHK_ERR_RAM | 0 | - |
| 0x800904 | MONHW_MCHK_ERR_SAFETY_RAM | 0 | - |
| 0x800905 | MONHW_MCHK_ERR_SAFETY_ROM | 0 | - |
| 0x800906 | MONHW_SOPT_ERR | 0 | - |
| 0x800907 | MONHW_WDG_ERR_CLK_IMX6 | 0 | - |
| 0x800908 | MONHW_WDG_ERR_COM | 0 | - |
| 0x800909 | MONHW_WDG_ERR_COM_IMX6 | 0 | - |
| 0x80090A | MONHW_WDG_ERR_FCT | 0 | - |
| 0x80090B | MONHW_WDG_ERR_FCT_IMX6 | 0 | - |
| 0x80090C | MONHW_WDG_ERR_CLK | 0 | - |
| 0x80090D | MONHW_WDG_ERR_IWD | 0 | - |
| 0x80090E | MONHW_WDG_ERR_IWD_IMX6 | 0 | - |
| 0x80090F | MONHW_MMU_ERR_ACCESS_VIOLATION | 0 | - |
| 0x800980 | TEST | 0 | - |
| 0x800B8B | XVIEW_EXTRACTOR_DATA_OUTDATED | 0 | - |
| 0x800B8E | XVIEW_MEM_STACK_ERROR | 0 | - |
| 0x800B8F | XVIEW_CODING_INVALID | 0 | - |
| 0x800B93 | FLOW_FPGA_ERROR | 0 | - |
| 0x800B94 | FLOW_INPUT_DATA_ERROR | 0 | - |
| 0x800B97 | FLOW_ODOMETRY_ERROR | 0 | - |
| 0x800B98 | FLOW_CODING_ERROR | 0 | - |
| 0x800B99 | FLOW_INTERNAL_SW_ERROR | 0 | - |
| 0x800B9C | SFM_CODING_ERROR | 0 | - |
| 0x800BA0 | SFM_FPGA_ERROR | 0 | - |
| 0x800BA3 | SFM_INPUT_DATA_ERROR | 0 | - |
| 0x800BA4 | SFM_INTERNAL_SW_ERROR | 0 | - |
| 0x800BA6 | PBA Interner Fehler | 1 | - |
| 0x800BA7 | Time out Fehler bei Übertragung der POI Datenbank | 1 | - |
| 0x800BA8 | POI database size is different between host component application and navigation application | 1 | - |
| 0x800BAA | Internal voltage error | 0 | - |
| 0x800BAD | XVIEW_EXCEPTION | 0 | - |
| 0x800BAE | XVIEW_TEX_INPUT_ERROR | 0 | - |
| 0x800BB0 | XVIEW_TEX_FRAMERATE_ERROR | 0 | - |
| 0x800BB1 | XVIEW_MEM_OUT_OF | 0 | - |
| 0x800BB2 | XVIEW_TEXTURE_MASK_OUTDATED | 0 | - |
| 0x800BB3 | XVIEW_PROG_SEQUENCE_ERROR | 0 | - |
| 0x800BB4 | SBA Interner Fehler | 1 | - |
| 0x800BB8 | FS_US_DISTURBING_NOISE_REAR | 0 | - |
| 0x800BB9 | Zynq Reset due to Switch Reset | 0 | - |
| 0x800BBA | C2W_CALIB_RIGHTREAR_MAX_DEVIATION_IMCAL / C2W_CALIB_RIGHTREAR_MAX_TIME_TO_CALIBRATE_IMCAL | 0 | - |
| 0x800BBB | C2W_CALIB_LEFTREAR_MAX_DEVIATION_IMCAL / C2W_CALIB_LEFTREAR_MAX_TIME_TO_CALIBRATE_IMCAL | 0 | - |
| 0x800BBC | C2W_CALIB_REAR_MAX_DEVIATION_OCAL / C2W_CALIB_REAR_MAX_TIME_TO_CALIBRATE_OCAL | 0 | - |
| 0x800BBD | C2W_CALIB_RIGHTFRONT_MAX_DEVIATION_IMCAL / C2W_CALIB_RIGHTFRONT_MAX_TIME_TO_CALIBRATE_IMCAL | 0 | - |
| 0x800BBE | C2W_CALIB_FRONT_MAX_DEVIATION_OCAL / C2W_CALIB_FRONT_MAX_TIME_TO_CALIBRATE_OCAL | 0 | - |
| 0x800BBF | C2W_CALIB_LEFTFRONT_MAX_DEVIATION_IMCAL / C2W_CALIB_LEFTFRONT_MAX_TIME_TO_CALIBRATE_IMCAL | 0 | - |
| 0x800BC1 | Interner Steuergerätefehler: DSP SDRAM Defekt | 0 | - |
| 0x800BC2 | Interner Steuergerätefehler: Interner Spannungsfehler | 0 | - |
| 0x800BC3 | Interner Steuergerätefehler: Host Controller RAM Defekt | 0 | - |
| 0x800BC4 | Interner Steuergerätefehler: DSP Programmierfehler | 0 | - |
| 0x800BC5 | Interner Steuergerätefehler: Flash Module und DSP passen nicht zusammen | 0 | - |
| 0x800BCB | ISW_ETH_CONTROLLER_BUFFER_FULL_ERROR | 0 | - |
| 0x800BCC | DADDY_MEMPOOL_FULL_ERROR | 0 | - |
| 0x800BD1 | AXI bus error | 0 | - |
| 0x800BD2 | JPG decoder error | 0 | - |
| 0x800BD3 | i.mx6 interface error | 0 | - |
| 0x800BD4 | Algo error | 0 | - |
| 0x800BD5 | rx_qbar error | 0 | - |
| 0x800BD6 | Safety error | 0 | - |
| 0x800BD7 | Running SW checks | 0 | - |
| 0x800BD8 | FS_US_BLINDNESS_REAR | 0 | - |
| 0x800BD9 | FS_US_DISTURBING_NOISE_FRONT | 0 | - |
| 0x800BDA | FS_CODING_ERROR | 0 | - |
| 0x800BDB | FS_US_HW_DEFECT_FRONT | 0 | - |
| 0x800BDC | FS_US_HW_DEFECT_REAR | 0 | - |
| 0x800BDF | FS_US_BLINDNESS_FRONT | 0 | - |
| 0x800BE0 | RCP_FPL_OUTPUT_OUTOFRANGE | 0 | - |
| 0x800BE3 | SATCAM_RESTART_OCCURED | 0 | - |
| 0x800BE7 | Secondary FuSi DTC | 0 | - |
| 0x800BEE | DATA_ABORT_CORE_DUMP | 0 | - |
| 0x800BF0 | Transmission Buffer reservation failure | 0 | - |
| 0x800BF1 | Transmission failure | 0 | - |
| 0x800BF2 | Ready for Shutdown State des Systems not reached before the timeout | 0 | - |
| 0x800BF3 | Double Activation of Task | 0 | - |
| 0x800BF4 | Violation of task run time | 0 | - |
| 0x800BF5 | Watchdog | 0 | - |
| 0x800BF6 | Intrinsic_Calib_Error_Left | 0 | - |
| 0x800BF7 | Intrinsic_Calib_Error_Right | 0 | - |
| 0x800BF8 | Intrinsic_Calib_Error_Front | 0 | - |
| 0x800BF9 | Intrinsic_Calib_Error_Rear | 0 | - |
| 0x800BFA | Board overtemperature | 0 | - |
| 0x800BFB | Zynq shutdown caused by die overtemperature | 0 | - |
| 0x800C00 | Ferngesteuertes Parken: Bedienfehler | 0 | - |
| 0x800C01 | Ferngesteuertes Parken: Systemgrenze | 0 | - |
| 0x800C02 | Ferngesteuertes Parken: Fahrereingriff | 0 | - |
| 0x800C03 | Ferngesteuertes Parken: Umgebungsbedingungen | 0 | - |
| 0x800C04 | Ferngesteuertes Parken: Reserve | 0 | - |
| 0x800C05 | Ferngesteuertes Parken: Reserve | 0 | - |
| 0x800C06 | Ferngesteuertes Parken: Reserve | 0 | - |
| 0x800C07 | Ferngesteuertes Parken: Reserve | 0 | - |
| 0x800C08 | Ferngesteuertes Parken: Technischer Fehler | 0 | - |
| 0x800C09 | Ferngesteuertes Parken: FuSi Fehler | 0 | - |
| 0x800C0A | SatCam_FV_WATCHDOG_TEST | 0 | - |
| 0x800C0B | SatCam_RV_WATCHDOG_TEST | 0 | - |
| 0x800C0C | SatCam_TV_L_WATCHDOG_TEST | 0 | - |
| 0x800C0D | SatCam_TV_R_WATCHDOG_TEST | 0 | - |
| 0x800C0E | Four Cams Picture Freeze | 0 | - |
| 0x800C0F | Single Cam Picture Freeze | 0 | - |
| 0x800C10 | TVL CAMERA - EEPROM Error | 0 | - |
| 0x800C11 | TVR CAMERA - EEPROM Error | 0 | - |
| 0x800C12 | FV CAMERA - EEPROM Error | 0 | - |
| 0x800C13 | RV CAMERA - EEPROM Error | 0 | - |
| 0x800C21 | Ferngesteuertes Parken: Bedienfehler | 1 | - |
| 0x800C22 | Ferngesteuertes Parken: Systemgrenze | 1 | - |
| 0x800C23 | Ferngesteuertes Parken: Fahrereingriff | 1 | - |
| 0x800C24 | Ferngesteuertes Parken: Umgebungsbedingungen | 1 | - |
| 0x800C25 | Ferngesteuertes Parken: Fahrerübernahme | 1 | - |
| 0x800C26 | Ferngesteuertes Parken: UI Problem | 1 | - |
| 0xCA8600 | Ethernet: physikalischer Fehler (link off) | 1 | - |
| 0xCA8601 | Ethernet: CRC Fehler | 1 | - |
| 0xCA9400 | No GPS1 nor GPS2 message received during TIMEOUT_GPSDATA_RECEPTION seconds | 1 | - |
| 0xCA9991 | _DemConf_DemEventParameter_IM_EVENT_CODING_DATAMODE_ERROR | 0 | - |
| 0xCA9992 | _DemConf_DemEventParameter_IM_EVENT_CODING_NULLPOINTER_ERROR | 0 | - |
| 0xCA9993 | _DemConf_DemEventParameter_IM_EVENT_H264_BITRATE_OUTOFRANGE_ERROR | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

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
| 0x009E | INTERNAL_ECU_ERROR | 0-n | High | 0x01 | - | - | - | - |
| 0x009F | ISW_STM8_CLKMON_ERROR_12H | 0-n | High | 0x02 | - | - | - | - |
| 0x00A0 | ISW_ZYNQ_CLKMON_ERROR_52H | 0-n | High | 0x04 | - | - | - | - |
| 0x00A1 | ISW_IMX6_CLKMON_ERROR_62H | 0-n | High | 0x08 | - | - | - | - |
| 0x00A2 | SWITCH_RESET | 0-n | High | 0x10 | - | - | - | - |
| 0x00A3 | CAMERA_0_REAR | 0/1 | High | 0x01 | - | - | - | - |
| 0x00A4 | CAMERA_1_LEFT | 0/1 | High | 0x02 | - | - | - | - |
| 0x00A5 | CAMERA_2_FRONT | 0/1 | High | 0x04 | - | - | - | - |
| 0x00A6 | CAMERA_3_RIGHT | 0/1 | High | 0x08 | - | - | - | - |
| 0x00A7 | ISW_OVERVOLTAGE_1V0_24H | 0/1 | High | 0x0001 | - | - | - | - |
| 0x00A8 | ISW_OVERVOLTAGE_1V2_26H | 0/1 | High | 0x0002 | - | - | - | - |
| 0x00A9 | ISW_OVERVOLTAGE_1V3_25H | 0/1 | High | 0x0004 | - | - | - | - |
| 0x00AA | ISW_OVERVOLTAGE_1V8_28H | 0/1 | High | 0x0008 | - | - | - | - |
| 0x00AB | ISW_OVERVOLTAGE_2V5_29H | 0/1 | High | 0x0010 | - | - | - | - |
| 0x00AC | ISW_OVERVOLTAGE_3V3_2AH | 0/1 | High | 0x0020 | - | - | - | - |
| 0x00AD | ISW_UNDERVOLTAGE_1V0_34H | 0/1 | High | 0x0040 | - | - | - | - |
| 0x00AE | ISW_UNDERVOLTAGE_1V2_36H | 0/1 | High | 0x0080 | - | - | - | - |
| 0x00AF | ISW_UNDERVOLTAGE_1V3_35H | 0/1 | High | 0x0100 | - | - | - | - |
| 0x00B0 | ISW_UNDERVOLTAGE_1V8_38H | 0/1 | High | 0x0200 | - | - | - | - |
| 0x00B1 | ISW_UNDERVOLTAGE_2V5_39H | 0/1 | High | 0x0400 | - | - | - | - |
| 0x00B2 | ISW_UNDERVOLTAGE_3V3_3AH | 0/1 | High | 0x0800 | - | - | - | - |
| 0x00B3 | ISW_WRONG_POWER_SEQUENCE | 0/1 | High | 0x1000 | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x4047 | TAB_FUSI | 0-n | High | 0xFFFF | TAB_FUSI | - | - | - |
| 0x404C | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x404D | DATA | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
| 0x405C | CODE | 0-n | High | 0xFFFFFFFF | RCP_ERRORCODE_TAB | - | - | - |
| 0x4061 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x4062 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### KAMERADATEN

| WERT | TEXT |
| --- | --- |
| 0 | Physikalischer Link UP |
| 1 | Physikalischer Link DOWN |
| FF | nicht definiert |

### KAMERAVERSORGUNG

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | Kurzschluss der Versorgungsleitungen |
| 2 | Unterbrechung der Versorgungsleitungen  |
| FF | Undefiniert |

### KAMERA_ETH_LINES

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | Kurzschluss zwischen den Leitungen |
| 2 | Offene Leitungen |
| FF | nicht definiert |

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

### RCP_ERRORCODE_TAB

| WERT | TEXT |
| --- | --- |
| 0x90000001 | Display Schlüssel Batterie stark entladen. |
| 0x90000002 | Display Schlüssel Funkverbindung abgebrochen oder Verbindungsfehler. |
| 0x90000003 | Fehler bei der Schlüsselsuche. |
| 0x90000004 | Verschmutzung der Parksensoren vorne und hinten durch Dreck, Schnee oder Eis. |
| 0x90000005 | Verschmutzung der Parksensoren vorne durch Dreck, Schnee oder Eis. |
| 0x90000006 | Verschmutzung der Parksensoren hinten durch Dreck, Schnee oder Eis. |
| 0x90000007 | Defekt von Parksensoren vorne und hinten. |
| 0x90000008 | Defekt eines Parksensors vorne. |
| 0x90000009 | Defekt eines Parksensors hinten. |
| 0x90000010 | Verschmutzung der Frontkamera durch Dreck, Schnee oder Eis. |
| 0x90000011 | Verschmutzung der Kameras unten in den Außenspiegelgehäusen durch Dreck, Schnee oder Eis. |
| 0x90000012 | Defekt der Frontkamera. |
| 0x90000013 | Defekt der Kameras unten in den Außenspiegelgehäusen. |
| 0x90000014 | Hardware- bzw. Software-Problem im Fahrzeug. |
| 0x90000017 | Probleme mit Parkbremse, Parksperre, Stillstandsmanagement oder Bremskoordinator. |
| 0x90000018 | Sichern des Fahrzeugs gegen wegrollen nicht möglich. Defekt Parkbremse und Parksperre. Fehlerspeicher im DME/DDE, SAS, und EGS prüfen |
| 0x90000019 | Fehler beim Ändern der Fahrstufe. |
| 0x90000020 | Fehler beim Herstellen oder Lösen Kraftschluss Antriebsstrang. |
| 0x90000021 | Fehler beim An- bzw. Abklappen der Außenspiegel. |
| 0x90000022 | Fehler beim Ein- bzw. Ausschalten des Fahrlichts.  |
| 0x90000023 | Fehler Türkontakt Fahrertüre. |
| 0x90000024 | Fehler Türkontakt Beifahrertüre. |
| 0x90000025 | Fehler Türkontakt Fahrertüre hinten. |
| 0x90000026 | Fehler Türkontakt Beifahrertüre hinten. |
| 0x90000027 | Fehler Kontakt Heckklappe. |
| 0x90000028 | Fehler Kontakt Motorhaube. |
| 0x90000029 | Fehler Position Cabrio-Dach. |
| 0x90000030 | Fehler Kontakt Heckscheibe. |
| 0x90000032 | Fehler Fahrzeugzustand. |
| 0x90000033 | Fahrzeug im Betriebsmodus Werkstatt (Energiesparmode). |
| 0x90000034 | Fahrzeug auf dem Rollenprüfstand. |
| 0x90000035 | Fehler Signal Betriebsmodus Rollenprüfstand. |
| 0x90000036 | Fehler Signal Längsneigung Fahrbahn. |
| 0x90000037 | Fehler Signal Querneigung Fahrbahn. |
| 0x90000038 | Fehler SAS |
| 0x90000039 | Abbruch SAS Fahrdynamik (Längs- und Querdynamik). |
| 0x90000015 | Fehler Umfelderfassung Verfahrwegsbegrenzung. |
| 0x90000016 | Fehler Status Parksituationserkennung. |
| 0x91000001 | Funktionsaktivierung bei laufendem Motor. |
| 0x91000002 | Funktionsaktivierung ohne eingelegte Parksperre. |
| 0x91000003 | Konflikt mit anderer FAS-Funktion. |
| 0x91000004 | Parktaste losgelassen. |
| 0x91000005 | Keine Aktivität am Schlüssel länger als 30 Sekunden. |
| 0x91000006 | Keine Parklücke erkannt. |
| 0x91000007 | Funktionsaktivierung während der Fahrt. |
| 0x91000008 | Display Schlüssel außerhalb Nahbereich Fahrzeug. |
| 0x91000009 | Zweiter Schlüssel erkannt. |
| 0x9100000A | Display Schlüssel Position unbekannt. |
| 0x9100000B | Display Schlüssel im Innenraum. |
| 0x9100000C | Fahrertüre offen. |
| 0x9100000D | Beifahrertüre offen. |
| 0x9100000E | Fahrertüre hinten offen. |
| 0x9100000F | Beifahrertüre hinten offen. |
| 0x91000010 | Kofferraum offen. |
| 0x91000011 | Motorhaube offen. |
| 0x91000012 | Kofferraumscheibe offen. |
| 0x91000013 | Kabriodach weder offen noch geschlossen. |
| 0x91000014 | Systemgrenze Außentemperatur. |
| 0x91000015 | Systemgrenze Fahrbahnbeschaffenheit. |
| 0x91000016 | Systemgrenze Fahrbahnbeschaffenheit mit Regeleingriff. |
| 0x91000017 | Systemgrenze Stufe. |
| 0x91000018 | Systemgrenze Rückrollen wegen Fahrbahnneigung. |
| 0x91000019 | Systemgrenze Fahrbahnneigung. |
| 0x9100001A | Systemgrenze Anhänger. |
| 0x9100001B | Systemgrenze maximaler Verfahrweg. |
| 0x9100001C | Systemgrenze Parklückenbreite.  |
| 0x9100001D | Fahrereingriff Lenkung. |
| 0x9100001E | Fahrereingriff Gaspedal. |
| 0x9100001F | Fahrereingriff Bremspedal. |
| 0x91000020 | Fahrereingriff Getriebe über Getriebe Wählhebel. |
| 0x91000021 | Fahrereingriff Parkbremse feststellen. |
| 0x91000022 | Fahrereingriff Parkbremse lösen. |
| 0x91000023 | Fahrereingriff DSC Modus. |
| 0x91000024 | Fahrereingriff. |
| 0x91000025 | Fahrertüre geöffnet. |
| 0x91000026 | Beifahrertüre geöffnet. |
| 0x91000027 | Fahrertüre hinten geöffnet. |
| 0x91000028 | Beifahrertüre hinten geöffnet. |
| 0x91000029 | Kofferraum geöffnet. |
| 0x9100002A | Motorhaube geöffnet. |
| 0x9100002B | Kofferraumscheibe geöffnet. |
| 0x9100002C | Cabriodach weder geöffnet noch geschlossen  |
| 0x9100002D | Parksensoren vorne und hinten Störschall. |
| 0x9100002E | Parksensoren vorne Störschall. |
| 0x9100002F | Parksensoren hinten Störschall. |
| 0x91000030 | Fusi Monitor Fehler |
| 0x91000031 | RCP Abbruch wegen Unterspannung bei Motorstart |
| 0x91000032 | Fehler PWF Fahrzeugzustand |
| 0x91000036 | FuSi Eingriff |
| 0x91000037 | FuSi Zeitkriterium nicht eingehalten |
| 0x90000042 | Fehler Verfahrwegsbegrenzung. DTCs auf iCAM Bahnplanung prüfen |
| 0x90000043 | Fehler Bahnplanung. DTCs auf iCAM Bahnplanung prüfen |
| 0x90000044 | Fehler RCP-Steuerung AEM |
| 0x90000045 | Fehler Querführung |
| 0x90000046 | Fehler Längsführung |
| 0x90000047 | Incident_7 |
| 0x90000048 | Incident_8 |
| 0x90000049 | Incident_9 |
| 0x90000050 | Incident_10 |
| 0x90000200 | Timer 1 |
| 0x90000201 | Timer 2 |
| 0x90000202 | Timer 3 |
| 0x90000203 | Timer 4 |
| 0x90000204 | Timer 5 |
| 0x90000205 | Timer 6 |
| 0x90000206 | Timer 7 |
| 0x90000207 | Timer 8 |
| 0x90000208 | Timer 9 |
| 0x90000209 | Timer 10 |
| 0x90000210 | Timer 11 |
| 0x90000211 | Timer 12 |
| 0x90000212 | Timer 13 |
| 0x90000213 | Timer 14 |
| 0x90000214 | Timer 15 |
| 0x90000215 | Timer 16 |
| 0x90000216 | Timer 17 |
| 0x90000217 | Timer 18 |
| 0x90000218 | Timer 19 |
| 0x90000219 | Timer 20 |
| 0x90000220 | Timer 21 |
| 0x90000221 | Timer 22 |
| 0x90000222 | Timer 23 |
| 0x90000223 | Timer 24 |
| 0x90000224 | Timer 25 |
| 0x90000225 | Timer 26 |
| 0x90000226 | Timer 27 |
| 0x90000227 | Timer 28 |
| 0x90000228 | Timer 29 |
| 0x90000229 | Timer 30 |
| 0x90000230 | Timer 31 |
| 0x90000231 | Timer 32 |
| 0x90000232 | Timer 33 |
| 0x90000233 | Timer 34 |
| 0x90000234 | Timer 35 |
| 0x90000235 | Timer 36 |
| 0x90000236 | Timer 37 |
| 0x90000237 | Timer 38 |
| 0x90000238 | Timer 39 |
| 0x90000239 | Timer 40 |
| 0x90000240 | Timer 41 |
| 0x90000241 | Timer 42 |
| 0x90000242 | Timer 43 |
| 0x90000243 | Timer 44 |
| 0x90000244 | Timer 45 |
| 0x90000245 | Timer 46 |
| 0x90000246 | Timer 47 |
| 0x90000247 | Timer 48 |
| 0x90000248 | Timer 49 |
| 0x90000249 | Timer 50 |
| 0x90000031 | Fehler Fahrzeugzustand: Unerwarteter PWF |
| 0x90000051 | DSC Signalzustand unplausibel: Längsneigung |
| 0x90000052 | SAS Signalzustand unplausibel: Qualifier Parkmanöverassistent |
| 0x90000053 | SAS Signalzustand unplausibel: Qualifier Ferngesteurtes Parken Fahrdynamik |
| 0x90000070 | AAG: mindestens 1 Signalzustand unplausibel |
| 0x90000071 | ACSM: mindestens 1 Signalzustand unplausibel |
| 0x90000072 | BDC: mindestens 1 Signalzustand unplausibel |
| 0x90000073 | IHKA: mindestens 1 Signalzustand unplausibel |
| 0x90000074 | DME/DDE: mindestens 1 Signalzustand unplausibel |
| 0x90000075 | DSC/IB: mindestens 1 Signalzustand unplausibel |
| 0x90000076 | Kombi: mindestens 1 Signalzustand unplausibel |
| 0x90000077 | SAS: mindestens 1 Signalzustand unplausibel |
| 0x90000078 | USS: mindestens 1 Signalzustand unplausibel |
| 0x90000079 | MGU: mindestens 1 Signalzustand unplausibel |
| 0x90000080 | SG1: mindestens 1 Signalzustand unplausibel |
| 0x90000081 | SG2: mindestens 1 Signalzustand unplausibel |
| 0x90000082 | SG3: mindestens 1 Signalzustand unplausibel |
| 0x90000083 | SG4: mindestens 1 Signalzustand unplausibel |
| 0x90000084 | SG5: mindestens 1 Signalzustand unplausibel |
| 0x90000085 | SG6: mindestens 1 Signalzustand unplausibel |
| 0x90000086 | SG7: mindestens 1 Signalzustand unplausibel |
| 0x90000087 | SG8: mindestens 1 Signalzustand unplausibel |
| 0x90000100 | Verletzung Zeitkriterium im Zustand PreParking |
| 0x90000101 | Verletzung Zeitkriterium im Zustand PreDriving |
| 0x90000102 | Verletzung Zeitkriterium im Zustand Selection |
| 0x90000103 | Verletzung Zeitkriterium im Zustand Parking |
| 0x90000104 | Verletzung Zeitkriterium im Zustand PostDriving |
| 0x90000105 | Verletzung Zeitkriterium im Zustand PostParking |
| 0x90000151 | Interfaceproblem Bremssystem. SAS prüfen |
| 0x90000152 | Interfaceproblem Getriebe. SAS prüfen |
| 0x90000160 | Remote Software Update aktiv |
| 0x90000303 | Konflikt mit anderer FAS-Funktion |
| 0x90000318 | Systemgrenze Rückrollen. DME/DDE Fehlerspeicher prüfen |
| 0x90000400 | ASIL-Anteil meldet Fehler, siehe Netzwerk DTC |
| 0x91000033 | Parkkameras verschmutzt |
| 0x91000034 | Antriebstemperatur zu hoch |
| 0x91000035 | Antriebstemperatur zu niedrig |
| 0x9100003A | Verschmutzung der Parksensoren vorne und hinten |
| 0x9100003B | Verschmutzung der Parksensoren vorne |
| 0x9100003C | Verschmutzung der Parksensoren hinten |
| 0x91000040 | Systemgrenze Missionszeit |
| 0x91000041 | Systemgrenze Außentemperatur zu hoch |
| 0x91000042 | Systemgrenze Außentemperatur zu niedrig |
| 0x91000043 | Fahrereingriff SST |
| 0x91000044 | Fahrereingriff Lenkung |
| 0x91000045 | Parksensoren: Störschall in Fahrtrichtung |
| 0x91000046 | Fahrerübernahme Innenraum |
| 0x91000047 | Fahrerübernahme lokaler PMA |
| 0x91000048 | PMA Parktaste losgelassen |
| 0x91000060 | Parkmanöver-Assistent: Parkendposition Einparken nicht erreichbar |
| 0x91000061 | Parkmanöver-Assistent: Parkendposition Einparken nicht erreicht |
| 0x91000062 | Parkmanöver-Assistent: Parkendposition Ausparken nicht erreicht |
| 0x91000063 | Parkmanöver-Assistent: Wiederaufnahme Parkvorgang fehlgeschlagen |
| 0x91000064 | Parkmanöver-Assistent: Parkvorgang aufgrund Kollisionsgefahr fehlgeschlagen |
| 0x91000065 | Parkmanöver-Assistent: Parkvorgang aufgrund Steigung abgebrochen |
| 0x91000071 | Ferngesteuertes Parken: Displayschlüssel Ladezustand gering |
| 0x91000072 | Ferngesteuertes Parken: Displayschlüssel Ladezustand sehr gering |
| 0x91000104 | Keine Fahrerinterkation innerhalb Zeitlimit |
| 0x91000250 | Parklücke verloren. USS Fehlerspeicher prüfen |
| 0x91000251 | Teilfunktion Parken nicht verfügbar |
| 0x91000300 | Funktionsgrenze: SAS FuSi. SAS Fehlerspeicher prüfen |
| 0x91000301 | Maximale Funkverbindungszeit überschritten |
| 0x91000302 | Remote Engine Start aktiv  |
| 0x91000303 | Warnung Fahrbahnneigungsgrenze fast überschritten  |
| 0x91000304 | Parktaste innerhalb letzter 30s nicht gedrückt  |
| 0x91000305 | Fahrzeug bewegung während Aktivierung  |
| 0x91000306 | Energiebordnetz für Remotebetrieb nicht sichergestellt  |
| 0x91000307 | Fehler Unterspannungsflag  |
| 0x91000308 | Verletzung Zeitkriterium Disclaimer screen  |
| 0x91000309 | Verschmutzung vordere Kamera  |
| 0x91000310 | Verschmutzung hintere Kamera  |
| 0x91000311 | Verschmutzung linke Kamera |
| 0x91000312 | Verschmutzung rechte Kamera  |
| 0x91000313 | Verschmutzung mehrere Kameras |
| 0x91000320 | Unerwarteter Zustand SAS |
| 0x91000321 | MSA Aktiv |
| 0x90000401 | iCAM Bahnplanung und Verfahrwegsbegrenzung inaktiv |
| 0x90000402 | Fahrerübernahme fehlgeschlagen: Schlüssel nicht im Innenraum |
| 0x90000403 | Fahrerübernahme fehlgeschlagen: Fahrertür geöffnet |
| 0x90000404 | Fahrerübernahme fehlgeschlagen: Schlüssel nicht im Innenraum und Fahrertür geöffnet |
| 0x90000405 | RCP Deaktiviert. Fahrerübernahme verhindert. |
| 0x90000406 | RCP deaktiviert wegen offener Fahrertüre. |
| 0x90000407 | RCP deaktiviert wegen offener Beifahrertüre. |
| 0x90000408 | RCP deaktiviert wegen offener, hinterer Fahrertüre. |
| 0x90000409 | RCP deaktiviert wegen offener, hinterer Beifahrertüre. |
| 0x91000105 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isBonnetOpen |
| 0x91000106 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isActionTimeoutExceeded |
| 0x91000107 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isBootlid1Open |
| 0x91000108 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isCabrioRoofMoving |
| 0x91000109 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isCameraDirty |
| 0x91000110 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isDriverDoorFrontOpen |
| 0x91000111 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isDriverDoorRearOpen |
| 0x91000112 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isKeyInFarField |
| 0x91000113 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isKeyInside |
| 0x91000114 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isMaxDrivingDistanceExceeded |
| 0x91000115 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isMoreThanOneDoorOpen |
| 0x91000116 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isNoParkingSpotAvailable |
| 0x91000117 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isPassengerDoorFrontOpen |
| 0x91000118 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isPassengerDoorRearOpen |
| 0x91000119 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isRearScreenOpen |
| 0x91000120 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isRoadwayGradientFirstLimit |
| 0x91000121 | e Fahrerinterkation innerhalb Zeitlimit nach Incident_isRoadwayGradientNotOk |
| 0x91000122 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isSignalError |
| 0x91000123 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isSitaConfirmationExpired |
| 0x91000124 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isSitaCurrentlyNotPressed |
| 0x91000125 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isUssSensorBothDirty |
| 0x91000126 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isUssSensorDisturbed |
| 0x91000127 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isUssSensorFrontDirty |
| 0x91000128 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isUssSensorRearDirty |
| 0x91000129 | Keine Fahrerinterkation innerhalb Zeitlimit nach Incident_isWaitingForUserConfirmation |
| 0x91000130 | Timeout Incident 26 |
| 0x91000131 | Timeout Incident 27 |
| 0x91000132 | Timeout Incident 28 |
| 0x91000133 | Timeout Incident 29 |
| 0x91000134 | Timeout Incident 30 |
| 0x91000135 | Timeout Incident 31 |
| 0x91000136 | Timeout Incident 32 |
| 0x91000137 | Timeout Incident 33 |
| 0x91000138 | Timeout Incident 34 |
| 0x91000139 | Timeout Incident 35 |
| 0x91000140 | Timeout Incident 36 |
| 0xFFFFFFFF | Wert ungültig |

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

### RES_0X0104_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR | 0-n | high | unsigned char | - | - | - | - | - | Majorlevel |
| STAT_MINOR | 0-n | high | unsigned char | - | - | - | - | - | Minorlevel |
| STAT_PATCH | 0-n | high | unsigned char | - | - | - | - | - | Patchlevel |

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

### RES_0X2300_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESAMTZAHL_AKTIVIERUNGEN_XVIEW3D_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen |
| STAT_ANZAHL_AKTIVIERUNGEN_PDC_TASTER_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktivierungen durch den Fahrer via PDXC Taster |
| STAT_ANZAHL_AKTIVIERUNGEN_SVIEW_TASTER_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktivierungen durch SVIEW Taster |
| STAT_GESAMTLAUFZEIT_SYSTEM_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit der aktiven Funktion |
| STAT_GESAMTLAUFZEIT_SYSTEM_LOWLIGHT_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit AKTIV des Systems im Lowlight Modus |
| STAT_ANZAHL_AENDERUNGEN_HELLIGKEIT_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Änderungen HELLIGKEIT durch den Fahrer |
| STAT_ANZAHL_AENDERUNGEN_KONTRAST_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Änderungen KONTRAST durch den Fahrer |
| STAT_ANZAHL_FEHLERHAFTE_KAMERABILDER_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der fehlerhaften Kamerabilder |
| STAT_ANZAHL_BILDVERLUSTE_H264_AUSGABESTROM_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der verlorenen Bilder im Ausgabestrom ohne Bluescreen |
| STAT_ANZAHL_BLUESCREEN_H264_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der defekten Bilder (Bluescreen) |
| STAT_ANZAHL_HINDERNISMARKIERUNGEN_USS_DEGRADATION_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ANzahl der ausgefallenen Hindernismarkierungen aufgrund USS Degradation |
| STAT_ANZAHL_HINDERNISMARKIERUNG_AUFTRETEN_BV_DEG_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Auftreten Hindernismarkierung BV-Degradation |
| STAT_ANZAHL_AUFTRETEN_DEGRADATION_SCHUESSELDARSTELLUNG_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_VERWEILDAUER_MODUS_AUTOMATIC_CAMERA_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANZAHL_AKT_DEAKT_SOFTKEY_TRAJEKTORIEN_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANZAHL_AKT_DEAKT_SOFTKEY_HINDERNISMARKIERUNGEN_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANZAHL_FUSIVERLETZUNGEN_UEBER_LEBENSZEIT_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANZAHL_WECHSEL_MODUS_DURCH_FAHRER_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Wechsel des Modus durch den Faherer |

### RES_0X2301_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESAMTZAHL_AKTIVIERUNGEN_XVIEW3D_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen |
| STAT_ANZAHL_AKTIVIERUNGEN_PDC_TASTER_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktivierungen durch den Fahrer via PDXC Taster |
| STAT_ANZAHL_AKT_DEAKT_SVIEW_TASTER_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktivierungen und Deaktivierungen durch SVIEW Taster |
| STAT_GESAMTLAUFZEIT_SYSTEM_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit der aktiven Funktion |
| STAT_GESAMTLAUFZEIT_SYSTEM_LOWLIGHT_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtzeit AKTIV des Systems im Lowlight Modus |
| STAT_ANZAHL_AENDERUNGEN_HELLIGKEIT_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Änderungen HELLIGKEIT durch den Fahrer |
| STAT_ANZAHL_AENDERUNGEN_KONTRAST_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Änderungen KONTRAST durch den Fahrer |
| STAT_ANZAHL_FEHLERHAFTE_KAMERABILDER_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der fehlerhaften Kamerabilder |
| STAT_ANZAHL_BILDVERLUSTE_H264_AUSGABESTROM_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der verlorenen Bilder im Ausgabestrom ohne Bluescreen |
| STAT_ANZAHL_BLUESCREEN_H264_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der defekten Bilder (Bluescreen) |
| STAT_ANZAHL_HINDERNISMARKIERUNGEN_USS_DEGRADATION_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ANzahl der ausgefallenen Hindernismarkierungen aufgrund USS Degradation |
| STAT_ANZAHL_AUFTRETEN_DEGRADATION_SCHUESSELDARSTELLUNG_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_VERWEILDAUER_MODUS_AUTOMATIC_CAMERA_WERT | s | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANZAHL_AKT_DEAKT_SOFTKEY_TRAJEKTORIEN_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANZAHL_AKT_DEAKT_SOFTKEY_HINDERNISMARKIERUNGEN_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_ANZAHL_FUSIVERLETZUNGEN_UEBER_LEBENSZEIT_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_STAT_ANZAHL_FUSI_FEHLER_BILD_COUNTER_KAMERA_1_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_FUSI_FEHLER_BILD_COUNTER_KAMERA_1_WERT |
| STAT_STAT_ANZAHL_FUSI_FEHLER_BILD_COUNTER_KAMERA_2_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_ANZAHL_FUSI_FEHLER_BILD_COUNTER_KAMERA_2_WERT |
| STAT_STAT_ANZAHL_FUSI_FEHLER_BILD_COUNTER_KAMERA_3_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_FUSI_FEHLER_BILD_COUNTER_KAMERA_3_WERT |
| STAT_STAT_ANZAHL_FUSI_FEHLER_BILD_COUNTER_KAMERA_4_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_FUSI_FEHLER_BILD_COUNTER_KAMERA_4_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_AUTOMATIC_CAMERA_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_ANZAHL_AKTIVIERUNG_MODUS_AUTOMATIC_CAMERA_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_FIXED_CAMERA_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_AKTIVIERUNG_MODUS_FIXED_CAMERA_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_FREE_CAMERA_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_AKTIVIERUNG_MODUS_FREE_CAMERA_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_BIRDSEYE_VIEW_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_AKTIVIERUNG_MODUS_BIRDSEYE_VIEW_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_TRAILER_ZOOM_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_AKTIVIERUNG_MODUS_TRAILER_ZOOM_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_RCP_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_AKTIVIERUNG_MODUS_RCP_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_PMA_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_AKTIVIERUNG_MODUS_PMA_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_SIDEVIEW_FRONT_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_AKTIVIERUNG_MODUS_SIDEVIEW_FRONT_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_SIDEVIEW_REAR_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_AKTIVIERUNG_MODUS_SIDEVIEW_REAR_WERT |
| STAT_ANZAHL_AKTIVIERUNG_MODUS_CAR_WASH_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_AKTIVIERUNG_MODUS_CAR_WASH_WERT |
| STAT_ANZAHL_WARNUNGEN_RIM_WERT | - | low | unsigned long | - | - | 1.0 | 1.0 | 0.0 | STAT_STAT_ANZAHL_WARNUNGEN_RIM_WERT |
| STAT_ANZAHL_OVERHEATING_CAMERA_FRONT_WERT | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Überhitzungen (>115°C) der Kamera vorne |
| STAT_ANZAHL_OVERHEATING_CAMERA_REAR_WERT | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Überhitzungen (>115°C) der Kamera hinten |
| STAT_ANZAHL_OVERHEATING_CAMERA_LEFT_WERT | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Überhitzungen (>115°C) der Kamera links |
| STAT_ANZAHL_OVERHEATING_CAMERA_RIGHT_WERT | - | low | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Überhitzungen (>115°C) der Kamera rechts |

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
| STAT_MAJOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Major Version Number |
| STAT_MINOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minor Version Number |
| STAT_PATCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch Version Number |
| STAT_DATE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Release Datum (YYYYMMDD) |

### RES_0X4001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Major Version Number |
| STAT_MINOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minor Version Number |
| STAT_PATCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch Version Number  |
| STAT_DATE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Release Date (YYYYMMDD) |

### RES_0X4008_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Major Version Number |
| STAT_MINOR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minor Version Number |
| STAT_PATCH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch Version Number |
| STAT_DATE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Release Datum (YYYYMMDD) |

### RES_0X4016_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLAGS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Mode Flags for Intrinsic Calibration Model |
| STAT_XI_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Generalized Projection Model Parameter |
| STAT_FOCAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Focal Length |
| STAT_SKEW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Skew Factor |
| STAT_ASPECT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aspect Ratio |
| STAT_PPX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Principal Point (Horizontal Component) |
| STAT_PPY_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Principal Point  (Vertical Component) |
| STAT_DIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |

### RES_0X4018_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLAGS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Mode Flags for Intrinsic Calibration Model |
| STAT_XI_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Generalized Projection Model Parameter |
| STAT_FOCAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Focal Length |
| STAT_SKEW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Skew Factor |
| STAT_ASPECT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aspect Ratio |
| STAT_PPX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Principal Point (Horizontal Component) |
| STAT_PPY_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Principal Point  (Vertical Component) |
| STAT_DIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |

### RES_0X4019_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLAGS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Mode Flags for Intrinsic Calibration Model |
| STAT_XI_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Generalized Projection Model Parameter |
| STAT_FOCAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Focal Length |
| STAT_SKEW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Skew Factor |
| STAT_ASPECT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aspect Ratio |
| STAT_PPX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Principal Point (Horizontal Component) |
| STAT_PPY_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Principal Point  (Vertical Component) |
| STAT_DIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |

### RES_0X401A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLAGS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Mode Flags for Intrinsic Calibration Model |
| STAT_XI_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Generalized Projection Model Parameter |
| STAT_FOCAL_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Focal Length |
| STAT_SKEW_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Skew Factor |
| STAT_ASPECT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aspect Ratio |
| STAT_PPX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Principal Point (Horizontal Component) |
| STAT_PPY_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Principal Point  (Vertical Component) |
| STAT_DIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_DIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for distortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_0_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_1_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_2_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_3_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_4_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_5_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_6_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_7_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_8_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_9_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_10_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |
| STAT_UNDIST_PARAMS_VALUE_11_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | parameter array for undistortion model parameters. |

### RES_0X401E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB | 0-n | high | unsigned char | - | TAB_CALIB_STAT | - | - | - | Status der Kamerakalibrierung |
| STAT_PITCH_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehlerder der sich während der Berechnung des Nickwinkels ergab. |
| STAT_YAW_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der der sich während der Berechnung des Gierwinkels ergab. |
| STAT_ROLL_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehlerder der sich während der Berechnung des Rollwinkels ergab. |
| STAT_MODE | 0-n | high | unsigned char | - | TAB_STAT_MODE_CALIB | - | - | - | Modus: 0 = ATC Pausiert 1 = ATC Aktiv |

### RES_0X401F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB | 0-n | high | unsigned char | - | TAB_CALIB_STAT | - | - | - | Status der Kamerakalibrierung |
| STAT_PITCH_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehlerder der sich während der Berechnung des Nickwinkels ergab. |
| STAT_YAW_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der der sich während der Berechnung des Gierwinkels ergab. |
| STAT_ROLL_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehlerder der sich während der Berechnung des Rollwinkels ergab. |
| STAT_MODE | 0-n | high | unsigned char | - | TAB_STAT_MODE_CALIB | - | - | - | Modus: 0 = ATC Pausiert 1 = ATC Aktiv |

### RES_0X4020_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB | 0-n | high | unsigned char | - | TAB_CALIB_STAT | - | - | - | Status der Kamerakalibrierung |
| STAT_PITCH_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehlerder der sich während der Berechnung des Nickwinkels ergab. |
| STAT_YAW_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der der sich während der Berechnung des Gierwinkels ergab. |
| STAT_ROLL_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehlerder der sich während der Berechnung des Rollwinkels ergab. |
| STAT_MODE | 0-n | high | unsigned char | - | TAB_STAT_MODE_CALIB | - | - | - | Modus: 0 = ATC Pausiert 1 = ATC Aktiv |

### RES_0X4021_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB | 0-n | high | unsigned char | - | TAB_CALIB_STAT | - | - | - | Status der Kamerakalibrierung |
| STAT_PITCH_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehlerder der sich während der Berechnung des Nickwinkels ergab. |
| STAT_YAW_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der der sich während der Berechnung des Gierwinkels ergab. |
| STAT_ROLL_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehlerder der sich während der Berechnung des Rollwinkels ergab. |
| STAT_MODE | 0-n | high | unsigned char | - | TAB_STAT_MODE_CALIB | - | - | - | Modus: 0 = ATC Pausiert 1 = ATC Aktiv 128 = Busfehler |

### RES_0X4022_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAM_POS_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position X (center of imager)  |
| STAT_CAM_POS_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position Y (center of imager)  |
| STAT_CAM_POS_Z_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position Z (center of imager)  |
| STAT_START_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting YAW. READ / WRITE the starting YAW which should be the CAF value.  |
| STAT_START_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting ROLL. READ / WRITE the starting ROLL which should be the relevant CAF value.  |
| STAT_START_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting PITCH. READ / WRITE the starting PITCH which should be the relevant CAF value.  |
| STAT_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated PITCH. READ / WRITE the currently used PITCH calibration value.  |
| STAT_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated YAW. READ / WRITE the  currently used YAW calibration value.   |
| STAT_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated ROLL. READ / WRITE back currently used ROLL calibration value.  |

### RES_0X4023_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAM_POS_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position X (center of imager)  |
| STAT_CAM_POS_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position Y (center of imager)  |
| STAT_CAM_POS_Z_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position Z (center of imager)  |
| STAT_START_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting YAW. READ / WRITE the starting YAW which should be the CAF value.  |
| STAT_START_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting ROLL. READ / WRITE the starting ROLL which should be the relevant CAF value.  |
| STAT_START_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting PITCH. READ / WRITE the starting PITCH which should be the relevant CAF value.  |
| STAT_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated PITCH. READ / WRITE the currently used PITCH calibration value.  |
| STAT_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated YAW. READ / WRITE the  currently used YAW calibration value.   |
| STAT_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated ROLL. READ / WRITE back currently used ROLL calibration value.  |

### RES_0X4024_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAM_POS_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position X (center of imager)  |
| STAT_CAM_POS_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position Y (center of imager)  |
| STAT_CAM_POS_Z_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position Z (center of imager)  |
| STAT_START_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting YAW. READ / WRITE the starting YAW which should be the CAF value.  |
| STAT_START_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting ROLL. READ / WRITE the starting ROLL which should be the relevant CAF value.  |
| STAT_START_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting PITCH. READ / WRITE the starting PITCH which should be the relevant CAF value.  |
| STAT_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated PITCH. READ / WRITE the currently used PITCH calibration value.  |
| STAT_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated YAW. READ / WRITE the  currently used YAW calibration value.   |
| STAT_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated ROLL. READ / WRITE back currently used ROLL calibration value.  |

### RES_0X4025_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAM_POS_X_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position X (center of imager)  |
| STAT_CAM_POS_Y_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position Y (center of imager)  |
| STAT_CAM_POS_Z_WERT | mm | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera Position Z (center of imager)  |
| STAT_START_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting YAW. READ / WRITE the starting YAW which should be the CAF value.  |
| STAT_START_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting ROLL. READ / WRITE the starting ROLL which should be the relevant CAF value.  |
| STAT_START_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera starting PITCH. READ / WRITE the starting PITCH which should be the relevant CAF value.  |
| STAT_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated PITCH. READ / WRITE the currently used PITCH calibration value.  |
| STAT_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated YAW. READ / WRITE the  currently used YAW calibration value.   |
| STAT_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Camera calibrated ROLL. READ / WRITE back currently used ROLL calibration value.  |

### RES_0X4028_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BRIGHT_MAX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | This  variable refers to the maximum brightness level currently set at the iCam 2 ECU.   |
| STAT_BRIGHT_MIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | This  variable refers to the minimum brightness level currently set at the iCam 2 ECU.   |
| STAT_BRIGHT_MID_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | This  variable refers to the 50% brightness level currently set at the iCam 2 ECU.   |
| STAT_CONTR_MAX_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | This  variable refers to the maximum contrast level currently set at the iCam 2 ECU.   |
| STAT_CONTR_MIN_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | This  variable refers to the minimum contrast level currently set at the iCam 2 ECU.   |
| STAT_CONTR_MID_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | This  variable refers to the 50% contrast level currently set at the iCam 2 ECU.   |

### RES_0X402A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIFE_CYCLE_COUNT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl von Lifecycles. |
| STAT_PBA_ENABLE_COUNT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl von Lifecycles mit aktiver PBA. |
| STAT_SBA_ENABLE_COUNT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl von Lifecycles mit aktiver SBA. |
| STAT_PBA_ACT_COUNT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl von PBA-Aktivierungen. |
| STAT_SBA_ACT_COUNT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl von SBA-Aktivierungen. |
| STAT_PBA_ACT_WITH_SBA_ACT_COUNT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl von PBA-Aktivierungen mit gleichzeitiger SBA-Aktivierung. |
| STAT_SBA_ACT_WITH_TASTER_ACTION_COUNT_WERT | Counts | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl von SBA-Aktivierungen, die von einem SideView-Tasterdruck gefolgt sind. |

### RES_0X402B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT__WERT | HEX | high | unsigned char | - | - | - | - | - | This parameter can be mapped to the saturation level of the ECU video output. |

### RES_0X4031_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LL_MODE_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Order of entries in return value defined as in CAMERA_ID (first entry = Rear, second = Left, third = Front, fourth = Right). Entries defined as in STEUERN job -->  0x00 = Low-Light mode off; 0x01 = Low-Light mode on.  |

### RES_0X4032_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REAR_DATA | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | This variable contains the 25 bytes from the AP0101 AWB Variables List of the Rear Camera:  0xAC02 (2 Bytes) 0xAC06 (1 Byte) 0xAC07 (1 Byte) 0xAC08 (1 Byte) 0xAC09 (1 Byte) 0xAC0A (1 Byte) 0xAC0B (1 Byte) 0xAC0C (1 Byte) 0xAC0D (1 Byte) 0xAC16 (1 Byte) 0xAC24 (2 Bytes) 0xAC28 (2 Bytes) 0xAC2A (2 Bytes) 0xAC2C (2 Bytes) 0xAC2E (2 Bytes) 0xAC30 (2 Bytes) 0xAC32 (2 Bytes) |

### RES_0X4033_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONT_DATA | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | This variable contains the 25 bytes from the AP0101 AWB Variables List of the Front Camera:  0xAC02 (2 Bytes) 0xAC06 (1 Byte) 0xAC07 (1 Byte) 0xAC08 (1 Byte) 0xAC09 (1 Byte) 0xAC0A (1 Byte) 0xAC0B (1 Byte) 0xAC0C (1 Byte) 0xAC0D (1 Byte) 0xAC16 (1 Byte) 0xAC24 (2 Bytes) 0xAC28 (2 Bytes) 0xAC2A (2 Bytes) 0xAC2C (2 Bytes) 0xAC2E (2 Bytes) 0xAC30 (2 Bytes) 0xAC32 (2 Bytes) |

### RES_0X4034_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEFT_DATA | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | This variable contains the 25 bytes from the AP0101 AWB Variables List of the Mirror Left Camera:  0xAC02 (2 Bytes) 0xAC06 (1 Byte) 0xAC07 (1 Byte) 0xAC08 (1 Byte) 0xAC09 (1 Byte) 0xAC0A (1 Byte) 0xAC0B (1 Byte) 0xAC0C (1 Byte) 0xAC0D (1 Byte) 0xAC16 (1 Byte) 0xAC24 (2 Bytes) 0xAC28 (2 Bytes) 0xAC2A (2 Bytes) 0xAC2C (2 Bytes) 0xAC2E (2 Bytes) 0xAC30 (2 Bytes) 0xAC32 (2 Bytes) |

### RES_0X4035_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RIGHT_DATA | DATA | high | data[25] | - | - | 1.0 | 1.0 | 0.0 | This variable contains the 25 bytes from the AP0101 AWB Variables List of the Mirror Left Camera:  0xAC02 (2 Bytes) 0xAC06 (1 Byte) 0xAC07 (1 Byte) 0xAC08 (1 Byte) 0xAC09 (1 Byte) 0xAC0A (1 Byte) 0xAC0B (1 Byte) 0xAC0C (1 Byte) 0xAC0D (1 Byte) 0xAC16 (1 Byte) 0xAC24 (2 Bytes) 0xAC28 (2 Bytes) 0xAC2A (2 Bytes) 0xAC2C (2 Bytes) 0xAC2E (2 Bytes) 0xAC30 (2 Bytes) 0xAC32 (2 Bytes) |

### RES_0X4036_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EXECPTION_COUNT_DATA_ABORT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Anzahl Exceptions DataAbort |
| STAT_EXCEPTION_COUNT_PREFETCH_ABORT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Anzahl Exceptions PrefetchAbort  |
| STAT_EXCEPTION_COUNT_SPURIOUS_GIC_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Anzahl Exceptions SpuriousGIC  |
| STAT_EXCEPTION_COUNT_SUPERVISOR_CALL_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Anzahl Exceptions Supervisor Call |
| STAT_EXCEPTION_COUNT_UNDEFINED_INSTRUCTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Anzahl Exceptions Undefined Instruction |
| STAT_STACK_POINTER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Stack Pointer |
| STAT_SPSR_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | SPSR - Saved Status register     |
| STAT_PLACE_OF_EXCEPTION_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | place of exception r14 value |
| STAT_DFAR_IFAR_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | DFAR - for data abort /IFAR - for Prefetch abort |
| STAT_1MS_TASK_COUNTER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | 1ms Task Counter  |
| STAT_COREDUMP_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Coredump Version  |
| STAT_CORE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Core ID from Exception |
| STAT_DTC_EXCEPTION_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | DTC for Exception is set |
| STAT_DFSR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | StatusRegisterBits DFSR: B7 = CM B6 = EXT B5 = WnR B4-B0 =FS Value  IFSR: B6 = EXT B4-B0 = FS Value |
| STAT_R00_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R00 |
| STAT_R01_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R01 |
| STAT_R02_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R02 |
| STAT_R03_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R03 |
| STAT_R04_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R04 |
| STAT_R05_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R05 |
| STAT_R06_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R06 |
| STAT_R07_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R07 |
| STAT_R08_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R08 |
| STAT_R09_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R09 |
| STAT_R10_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R 10 |
| STAT_R11_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R11 |
| STAT_R12_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | R12 |

### RES_0X4040_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODE | 0-n | high | unsigned char | - | FlickerMitigationMode | - | - | - | Flicker Mitigation Mode |
| STAT_BRIGHTNESSTHR_HIGH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Upper Threshold Value |
| STAT_BRIGHTNESSTHR_LOW_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lower Threshold value |
| STAT_USSTHR_UP_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Upper USS Threshold value (cm) |
| STAT_USSTHR_DOWN_WERT | cm | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lower USS Threshold value (cm) |

### RES_0X4041_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_FREQ_WERT | Hz | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | LED Frequency in Hz |
| STAT_DUTYCYCLE_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED Duty Cycle |
| STAT_NOMINALTARGET_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Nominal Target |
| STAT_BULKDEFINITION_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bulk Definition |
| STAT_HIGHLIGHTDEFINITION_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | highlight Definition |
| STAT_TONEMAP_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tone Map |

### RES_0X4064_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RCP_REFERENZ_TAG_WERT | - | - | unsigned int | - | - | - | - | - | Rcp_Referenz_Tag |
| STAT_RCP_INTERVAL_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rcp_Interval_Status |
| STAT_INTERVAL_1_RCP_AKTIVIERUNG_INAKTIV_ZU_PPC_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Aktivierung_Inaktiv_Zu_Ppc |
| STAT_INTERVAL_1_RCP_AKTIVIERUNG_PPC_ZU_INIT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Aktivierung_Ppc_Zu_Init |
| STAT_INTERVAL_1_RCP_AKTIVIERUNG_INIT_ZU_FAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Aktivierung_Init_Zu_Fahren |
| STAT_INTERVAL_1_RCP_AKTIVIERUNG_FAHREN_ZU_DEAK_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Aktivierung_Fahren_Zu_Deak |
| STAT_INTERVAL_1_RCP_AKTIVIERUNG_VORWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Aktivierung_Vorwaerts_Gedrueckt |
| STAT_INTERVAL_1_RCP_AKTIVIERUNG_RUECKWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Aktivierung_Rueckwaerts_Gedrueckt |
| STAT_INTERVAL_1_RCP_VORGANG_NUR_VORWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Vorgang_Nur_Vorwaerts |
| STAT_INTERVAL_1_RCP_VORGANG_NUR_RUECKWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Vorgang_Nur_Rueckwaerts |
| STAT_INTERVAL_1_RCP_VORGANG_RANGIEREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Vorgang_Rangieren |
| STAT_INTERVAL_1_RCP_VORGANG_KEIN_VERFAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Vorgang_Kein_Verfahren |
| STAT_INTERVAL_1_RCP_VERFAHRWEG_MINDESTENS_DISTANZ1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Verfahrweg_Mindestens_Distanz1 |
| STAT_INTERVAL_1_RCP_VERFAHRWEG_MINDESTENS_DISTANZ2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Verfahrweg_Mindestens_Distanz2 |
| STAT_INTERVAL_1_RCP_VERFAHRWEG_MINDESTENS_DISTANZ3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Verfahrweg_Mindestens_Distanz3 |
| STAT_INTERVAL_1_RCP_VERFAHRWEG_MINDESTENS_DISTANZ4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Verfahrweg_Mindestens_Distanz4 |
| STAT_INTERVAL_1_RCP_VERFAHRWEG_MINDESTENS_DISTANZ5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Verfahrweg_Mindestens_Distanz5 |
| STAT_INTERVAL_1_RCP_VERFAHRWEG_MINDESTENS_DISTANZ6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Verfahrweg_Mindestens_Distanz6 |
| STAT_INTERVAL_1_RCP_MISSIONSZEIT_MINDESTENS_ZEIT1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Missionszeit_Mindestens_Zeit1 |
| STAT_INTERVAL_1_RCP_MISSIONSZEIT_MINDESTENS_ZEIT2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Missionszeit_Mindestens_Zeit2 |
| STAT_INTERVAL_1_RCP_MISSIONSZEIT_MINDESTENS_ZEIT3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Missionszeit_Mindestens_Zeit3 |
| STAT_INTERVAL_1_RCP_MISSIONSZEIT_MINDESTENS_ZEIT4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Missionszeit_Mindestens_Zeit4 |
| STAT_INTERVAL_1_RCP_MISSIONSZEIT_UEBERSCHRITTEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Missionszeit_Ueberschritten |
| STAT_INTERVAL_1_RCP_ABBR_PARKSENS_VERSCHMUTZT_V_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Parksensoren_Verschmutzt_Vorne_Und_Hinten |
| STAT_INTERVAL_1_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Vorne |
| STAT_INTERVAL_1_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Hinten |
| STAT_INTERVAL_1_RCP_ABBR_PARKSENS_DEFEKT_VORNE_UND_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Parksensoren_Defekt_Vorne_Und_Hinten |
| STAT_INTERVAL_1_RCP_ABBR_PARKSENS_DEFEKT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Parksensoren_Defekt_Nur_Vorne |
| STAT_INTERVAL_1_RCP_ABBR_PARKSENS_DEFEKT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Parksensoren_Defekt_Nur_Hinten |
| STAT_INTERVAL_1_RCP_ABBRUCH_WEGROLLENSYSTEM_PROBLEM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Wegrollensystem_Problem |
| STAT_INTERVAL_1_RCP_ABBR_GEGENWEGROLLEN_SICHERN_UNMOEGLICH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Gegen_Wegrollen_Sichern_Nicht_Moeglich |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHRSTUFE_AENDERN_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrstufe_Aendern_Fehler |
| STAT_INTERVAL_1_RCP_ABBR_KRAFTSCHLUS_ANTRIEBSSTRANG_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Kraftschluss_Antriebsstrang_Fehler |
| STAT_INTERVAL_1_RCP_ABBRUCH_DSK_BATTERIE_STARK_ENTLADEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Dsk_Batterie_Stark_Entladen |
| STAT_INTERVAL_1_RCP_ABBR_DSK_FUNKVERBINDUNG_ABBRUCH_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Dsk_Funkverbindung_Abbruch_Fehler |
| STAT_INTERVAL_1_RCP_ABBRUCH_SCHLUESSELSUCHE_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Schluesselsuche_Fehler |
| STAT_INTERVAL_1_RCP_ABBRUCH_VERFAHRWEGSBEGRENZUNG_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Verfahrwegsbegrenzung_Fehler |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHRDYNAMIK_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrdynamik_Fehler |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHRDYNAMIK_ABBRUCH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrdynamik_Abbruch |
| STAT_INTERVAL_1_RCP_ABBRUCH_HW_SW_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Hw_Sw_Fehler |
| STAT_INTERVAL_1_RCP_ABBRUCH_FUSI_EINGRIFF_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fusi_Eingriff |
| STAT_INTERVAL_1_RCP_ABBRUCH_FZG_ZUSTAND_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fzg_Zustand_Fehler |
| STAT_INTERVAL_1_RCP_ABBRUCH_WERKSTATTSMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Werkstattsmodus_Aktiv |
| STAT_INTERVAL_1_RCP_ABBRUCH_ROLLENMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Rollenmodus_Aktiv |
| STAT_INTERVAL_1_RCP_ABBRUCH_MOTOR_LAEUFT_BEI_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Motor_Laeuft_Be_Iaktivierung |
| STAT_INTERVAL_1_RCP_ABBRUCH_PARKTASTE_LOSGELASSEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Parktaste_Losgelassen |
| STAT_INTERVAL_1_RCP_ABBRUCH_DSK_KEINE_AKTIVITAET_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Dsk_Keine_Aktivitaet |
| STAT_INTERVAL_1_RCP_ABBRUCH_DSK_AUSSERHALB_NAHBEREICH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Dsk_Ausserhalb_Nahbereich |
| STAT_INTERVAL_1_RCP_ABBRUCH_ZWEITER_DSK_ERKANNT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Zweiter_Dsk_Erkannt |
| STAT_INTERVAL_1_RCP_ABBRUCH_DSK_IM_INNENRAUM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Dsk_Im_Innenraum |
| STAT_INTERVAL_1_RCP_ABBR_FTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Fahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_1_RCP_ABBR_BEIFTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Beifahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_1_RCP_ABBR_FTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_1_RCP_ABBR_BEIFTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_1_RCP_ABBR_HECKKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Heckklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_1_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Frontklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_1_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Heckscheibe_Offen_In_Aktivierung |
| STAT_INTERVAL_1_RCP_ABBR_CABRIODACH_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Cabriodach_Offen_In_Aktivierung |
| STAT_INTERVAL_1_RCP_ABBRUCH_AUSSENTEMPERATUR_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Aussentemperatur_Grenze |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHRZEUGREGELEINGRIFF_GRENZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Fahrzeugregeleingriff_Grenze |
| STAT_INTERVAL_1_RCP_ABBRUCH_STUFE_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Stufe_Grenze |
| STAT_INTERVAL_1_RCP_ABBRUCH_RUECKROLLEN_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Rueckrollen_Grenze |
| STAT_INTERVAL_1_RCP_ABBRUCH_NEIGUNG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Neigung_Grenze |
| STAT_INTERVAL_1_RCP_ABBRUCH_ANHAENGER_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Anhaenger_Grenze |
| STAT_INTERVAL_1_RCP_ABBRUCH_VERFAHRWEG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Verfahrweg_Grenze |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHREREINGRIFF_LENKRAD_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrereingriff_Lenkrad |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHREREINGRIFF_GASPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrereingriff_Gaspedal |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHREREINGRIFF_BREMSPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrereingriff_Bremspedal |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHREREINGRIFF_GWS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrereingriff_Gws |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHREREINGRIFF_EPB_FESTSTELLEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrereingriff_Epb_Feststellen |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHREREINGRIFF_EPB_LOESEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrereingriff_Epb_Loesen |
| STAT_INTERVAL_1_RCP_ABBRUCH_FAHREREINGRIFF_ALLGEMEIN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Abbruch_Fahrereingriff_Allgemein |
| STAT_INTERVAL_1_RCP_ABBR_FTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Fahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_1_RCP_ABBR_BEIFTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Beifahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_1_RCP_ABBR_FTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_1_RCP_ABBR_BEIFTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_1_RCP_ABBR_HECKKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Heckklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_1_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Frontklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_1_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Heckscheibe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_1_RCP_ABBR_CABRIODACH_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Cabriodach_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_1_RCP_ABBR_PARKSENS_STOERUNG_V_UND_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Parksensoren_Stoerung_Vorne_Und_Hinten |
| STAT_INTERVAL_1_RCP_ABBR_PARKSENS_STOERUNG_NUR_V_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Vorne |
| STAT_INTERVAL_1_RCP_ABBR_PARKSENS_STOERUNG_NUR_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_1_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Hinten |
| STAT_INTERVAL_1_RCP_RESERVED_1_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_1 |
| STAT_INTERVAL_1_RCP_RESERVED_2_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_2 |
| STAT_INTERVAL_1_RCP_RESERVED_3_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_3 |
| STAT_INTERVAL_1_RCP_RESERVED_4_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_4 |
| STAT_INTERVAL_1_RCP_RESERVED_5_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_5 |
| STAT_INTERVAL_1_RCP_RESERVED_6_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_6 |
| STAT_INTERVAL_1_RCP_RESERVED_7_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_7 |
| STAT_INTERVAL_1_RCP_RESERVED_8_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_8 |
| STAT_INTERVAL_1_RCP_RESERVED_9_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_9 |
| STAT_INTERVAL_1_RCP_RESERVED_10_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_10 |
| STAT_INTERVAL_1_RCP_RESERVED_11_WERT | - | - | unsigned int | - | - | - | - | - | Interval_1_Rcp_Reserved_11 |
| STAT_INTERVAL_1_RCP_AKTIVIERUNG_UNTERSPANNUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_1_RCP_AKTIVIERUNG_UNTERSPANNUNG  |
| STAT_INTERVAL_1_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_1_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_1_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_1_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2  |
| STAT_INTERVAL_1_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_1_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_1_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_1_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_1_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_1_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2 |
| STAT_INTERVAL_1_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_1_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_1_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_1_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4 |
| STAT_INTERVAL_2_RCP_AKTIVIERUNG_INAKTIV_ZU_PPC_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Aktivierung_Inaktiv_Zu_Ppc |
| STAT_INTERVAL_2_RCP_AKTIVIERUNG_PPC_ZU_INIT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Aktivierung_Ppc_Zu_Init |
| STAT_INTERVAL_2_RCP_AKTIVIERUNG_INIT_ZU_FAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Aktivierung_Init_Zu_Fahren |
| STAT_INTERVAL_2_RCP_AKTIVIERUNG_FAHREN_ZU_DEAK_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Aktivierung_Fahren_Zu_Deak |
| STAT_INTERVAL_2_RCP_AKTIVIERUNG_VORWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Aktivierung_Vorwaerts_Gedrueckt |
| STAT_INTERVAL_2_RCP_AKTIVIERUNG_RUECKWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Aktivierung_Rueckwaerts_Gedrueckt |
| STAT_INTERVAL_2_RCP_VORGANG_NUR_VORWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Vorgang_Nur_Vorwaerts |
| STAT_INTERVAL_2_RCP_VORGANG_NUR_RUECKWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Vorgang_Nur_Rueckwaerts |
| STAT_INTERVAL_2_RCP_VORGANG_RANGIEREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Vorgang_Rangieren |
| STAT_INTERVAL_2_RCP_VORGANG_KEIN_VERFAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Vorgang_Kein_Verfahren |
| STAT_INTERVAL_2_RCP_VERFAHRWEG_MINDESTENS_DISTANZ1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Verfahrweg_Mindestens_Distanz1 |
| STAT_INTERVAL_2_RCP_VERFAHRWEG_MINDESTENS_DISTANZ2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Verfahrweg_Mindestens_Distanz2 |
| STAT_INTERVAL_2_RCP_VERFAHRWEG_MINDESTENS_DISTANZ3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Verfahrweg_Mindestens_Distanz3 |
| STAT_INTERVAL_2_RCP_VERFAHRWEG_MINDESTENS_DISTANZ4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Verfahrweg_Mindestens_Distanz4 |
| STAT_INTERVAL_2_RCP_VERFAHRWEG_MINDESTENS_DISTANZ5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Verfahrweg_Mindestens_Distanz5 |
| STAT_INTERVAL_2_RCP_VERFAHRWEG_MINDESTENS_DISTANZ6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Verfahrweg_Mindestens_Distanz6 |
| STAT_INTERVAL_2_RCP_MISSIONSZEIT_MINDESTENS_ZEIT1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Missionszeit_Mindestens_Zeit1 |
| STAT_INTERVAL_2_RCP_MISSIONSZEIT_MINDESTENS_ZEIT2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Missionszeit_Mindestens_Zeit2 |
| STAT_INTERVAL_2_RCP_MISSIONSZEIT_MINDESTENS_ZEIT3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Missionszeit_Mindestens_Zeit3 |
| STAT_INTERVAL_2_RCP_MISSIONSZEIT_MINDESTENS_ZEIT4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Missionszeit_Mindestens_Zeit4 |
| STAT_INTERVAL_2_RCP_MISSIONSZEIT_UEBERSCHRITTEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Missionszeit_Ueberschritten |
| STAT_INTERVAL_2_RCP_ABBR_PARKSENS_VERSCHMUTZT_V_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Parksensoren_Verschmutzt_Vorne_Und_Hinten |
| STAT_INTERVAL_2_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Vorne |
| STAT_INTERVAL_2_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Hinten |
| STAT_INTERVAL_2_RCP_ABBR_PARKSENS_DEFEKT_VORNE_UND_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Parksensoren_Defekt_Vorne_Und_Hinten |
| STAT_INTERVAL_2_RCP_ABBR_PARKSENS_DEFEKT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Parksensoren_Defekt_Nur_Vorne |
| STAT_INTERVAL_2_RCP_ABBR_PARKSENS_DEFEKT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Parksensoren_Defekt_Nur_Hinten |
| STAT_INTERVAL_2_RCP_ABBRUCH_WEGROLLENSYSTEM_PROBLEM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Wegrollensystem_Problem |
| STAT_INTERVAL_2_RCP_ABBR_GEGENWEGROLLEN_SICHERN_UNMOEGLICH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Gegen_Wegrollen_Sichern_Nicht_Moeglich |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHRSTUFE_AENDERN_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrstufe_Aendern_Fehler |
| STAT_INTERVAL_2_RCP_ABBR_KRAFTSCHLUS_ANTRIEBSSTRANG_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Kraftschluss_Antriebsstrang_Fehler |
| STAT_INTERVAL_2_RCP_ABBRUCH_DSK_BATTERIE_STARK_ENTLADEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Dsk_Batterie_Stark_Entladen |
| STAT_INTERVAL_2_RCP_ABBR_DSK_FUNKVERBINDUNG_ABBRUCH_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Dsk_Funkverbindung_Abbruch_Fehler |
| STAT_INTERVAL_2_RCP_ABBRUCH_SCHLUESSELSUCHE_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Schluesselsuche_Fehler |
| STAT_INTERVAL_2_RCP_ABBRUCH_VERFAHRWEGSBEGRENZUNG_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Verfahrwegsbegrenzung_Fehler |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHRDYNAMIK_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrdynamik_Fehler |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHRDYNAMIK_ABBRUCH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrdynamik_Abbruch |
| STAT_INTERVAL_2_RCP_ABBRUCH_HW_SW_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Hw_Sw_Fehler |
| STAT_INTERVAL_2_RCP_ABBRUCH_FUSI_EINGRIFF_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fusi_Eingriff |
| STAT_INTERVAL_2_RCP_ABBRUCH_FZG_ZUSTAND_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fzg_Zustand_Fehler |
| STAT_INTERVAL_2_RCP_ABBRUCH_WERKSTATTSMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Werkstattsmodus_Aktiv |
| STAT_INTERVAL_2_RCP_ABBRUCH_ROLLENMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Rollenmodus_Aktiv |
| STAT_INTERVAL_2_RCP_ABBRUCH_MOTOR_LAEUFT_BEI_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Motor_Laeuft_Be_Iaktivierung |
| STAT_INTERVAL_2_RCP_ABBRUCH_PARKTASTE_LOSGELASSEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Parktaste_Losgelassen |
| STAT_INTERVAL_2_RCP_ABBRUCH_DSK_KEINE_AKTIVITAET_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Dsk_Keine_Aktivitaet |
| STAT_INTERVAL_2_RCP_ABBRUCH_DSK_AUSSERHALB_NAHBEREICH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Dsk_Ausserhalb_Nahbereich |
| STAT_INTERVAL_2_RCP_ABBRUCH_ZWEITER_DSK_ERKANNT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Zweiter_Dsk_Erkannt |
| STAT_INTERVAL_2_RCP_ABBRUCH_DSK_IM_INNENRAUM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Dsk_Im_Innenraum |
| STAT_INTERVAL_2_RCP_ABBR_FTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Fahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_2_RCP_ABBR_BEIFTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Beifahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_2_RCP_ABBR_FTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_2_RCP_ABBR_BEIFTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_2_RCP_ABBR_HECKKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Heckklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_2_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Frontklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_2_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Heckscheibe_Offen_In_Aktivierung |
| STAT_INTERVAL_2_RCP_ABBR_CABRIODACH_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Cabriodach_Offen_In_Aktivierung |
| STAT_INTERVAL_2_RCP_ABBRUCH_AUSSENTEMPERATUR_GRENZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Aussentemperatur_Grenze |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHRZEUGREGELEINGRIFF_GRENZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Fahrzeugregeleingriff_Grenze |
| STAT_INTERVAL_2_RCP_ABBRUCH_STUFE_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Stufe_Grenze |
| STAT_INTERVAL_2_RCP_ABBRUCH_RUECKROLLEN_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Rueckrollen_Grenze |
| STAT_INTERVAL_2_RCP_ABBRUCH_NEIGUNG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Neigung_Grenze |
| STAT_INTERVAL_2_RCP_ABBRUCH_ANHAENGER_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Anhaenger_Grenze |
| STAT_INTERVAL_2_RCP_ABBRUCH_VERFAHRWEG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Verfahrweg_Grenze |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHREREINGRIFF_LENKRAD_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrereingriff_Lenkrad |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHREREINGRIFF_GASPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrereingriff_Gaspedal |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHREREINGRIFF_BREMSPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrereingriff_Bremspedal |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHREREINGRIFF_GWS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrereingriff_Gws |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHREREINGRIFF_EPB_FESTSTELLEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrereingriff_Epb_Feststellen |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHREREINGRIFF_EPB_LOESEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrereingriff_Epb_Loesen |
| STAT_INTERVAL_2_RCP_ABBRUCH_FAHREREINGRIFF_ALLGEMEIN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Abbruch_Fahrereingriff_Allgemein |
| STAT_INTERVAL_2_RCP_ABBR_FTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Fahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_2_RCP_ABBR_BEIFTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Beifahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_2_RCP_ABBR_FTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_2_RCP_ABBR_BEIFTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_2_RCP_ABBR_HECKKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Heckklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_2_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Frontklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_2_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Heckscheibe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_2_RCP_ABBR_CABRIODACH_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Cabriodach_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_2_RCP_ABBR_PARKSENS_STOERUNG_V_UND_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Parksensoren_Stoerung_Vorne_Und_Hinten |
| STAT_INTERVAL_2_RCP_ABBR_PARKSENS_STOERUNG_NUR_V_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Vorne |
| STAT_INTERVAL_2_RCP_ABBR_PARKSENS_STOERUNG_NUR_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_2_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Hinten |
| STAT_INTERVAL_2_RCP_RESERVED_1_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_1 |
| STAT_INTERVAL_2_RCP_RESERVED_2_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_2 |
| STAT_INTERVAL_2_RCP_RESERVED_3_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_3 |
| STAT_INTERVAL_2_RCP_RESERVED_4_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_4 |
| STAT_INTERVAL_2_RCP_RESERVED_5_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_5 |
| STAT_INTERVAL_2_RCP_RESERVED_6_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_6 |
| STAT_INTERVAL_2_RCP_RESERVED_7_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_7 |
| STAT_INTERVAL_2_RCP_RESERVED_8_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_8 |
| STAT_INTERVAL_2_RCP_RESERVED_9_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_9 |
| STAT_INTERVAL_2_RCP_RESERVED_10_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_10 |
| STAT_INTERVAL_2_RCP_RESERVED_11_WERT | - | - | unsigned int | - | - | - | - | - | Interval_2_Rcp_Reserved_11 |
| STAT_INTERVAL_2_RCP_AKTIVIERUNG_UNTERSPANNUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_2_RCP_AKTIVIERUNG_UNTERSPANNUNG |
| STAT_INTERVAL_2_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_2_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_2_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_2_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2 |
| STAT_INTERVAL_2_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_2_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_2_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_2_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_2_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_2_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2 |
| STAT_INTERVAL_2_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_2_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_2_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_2_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4 |
| STAT_INTERVAL_3_RCP_AKTIVIERUNG_INAKTIV_ZU_PPC_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Aktivierung_Inaktiv_Zu_Ppc |
| STAT_INTERVAL_3_RCP_AKTIVIERUNG_PPC_ZU_INIT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Aktivierung_Ppc_Zu_Init |
| STAT_INTERVAL_3_RCP_AKTIVIERUNG_INIT_ZU_FAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Aktivierung_Init_Zu_Fahren |
| STAT_INTERVAL_3_RCP_AKTIVIERUNG_FAHREN_ZU_DEAK_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Aktivierung_Fahren_Zu_Deak |
| STAT_INTERVAL_3_RCP_AKTIVIERUNG_VORWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Aktivierung_Vorwaerts_Gedrueckt |
| STAT_INTERVAL_3_RCP_AKTIVIERUNG_RUECKWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Aktivierung_Rueckwaerts_Gedrueckt |
| STAT_INTERVAL_3_RCP_VORGANG_NUR_VORWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Vorgang_Nur_Vorwaerts |
| STAT_INTERVAL_3_RCP_VORGANG_NUR_RUECKWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Vorgang_Nur_Rueckwaerts |
| STAT_INTERVAL_3_RCP_VORGANG_RANGIEREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Vorgang_Rangieren |
| STAT_INTERVAL_3_RCP_VORGANG_KEIN_VERFAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Vorgang_Kein_Verfahren |
| STAT_INTERVAL_3_RCP_VERFAHRWEG_MINDESTENS_DISTANZ1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Verfahrweg_Mindestens_Distanz1 |
| STAT_INTERVAL_3_RCP_VERFAHRWEG_MINDESTENS_DISTANZ2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Verfahrweg_Mindestens_Distanz2 |
| STAT_INTERVAL_3_RCP_VERFAHRWEG_MINDESTENS_DISTANZ3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Verfahrweg_Mindestens_Distanz3 |
| STAT_INTERVAL_3_RCP_VERFAHRWEG_MINDESTENS_DISTANZ4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Verfahrweg_Mindestens_Distanz4 |
| STAT_INTERVAL_3_RCP_VERFAHRWEG_MINDESTENS_DISTANZ5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Verfahrweg_Mindestens_Distanz5 |
| STAT_INTERVAL_3_RCP_VERFAHRWEG_MINDESTENS_DISTANZ6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Verfahrweg_Mindestens_Distanz6 |
| STAT_INTERVAL_3_RCP_MISSIONSZEIT_MINDESTENS_ZEIT1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Missionszeit_Mindestens_Zeit1 |
| STAT_INTERVAL_3_RCP_MISSIONSZEIT_MINDESTENS_ZEIT2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Missionszeit_Mindestens_Zeit2 |
| STAT_INTERVAL_3_RCP_MISSIONSZEIT_MINDESTENS_ZEIT3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Missionszeit_Mindestens_Zeit3 |
| STAT_INTERVAL_3_RCP_MISSIONSZEIT_MINDESTENS_ZEIT4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Missionszeit_Mindestens_Zeit4 |
| STAT_INTERVAL_3_RCP_MISSIONSZEIT_UEBERSCHRITTEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Missionszeit_Ueberschritten |
| STAT_INTERVAL_3_RCP_ABBR_PARKSENS_VERSCHMUTZT_V_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Parksensoren_Verschmutzt_Vorne_Und_Hinten |
| STAT_INTERVAL_3_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Vorne |
| STAT_INTERVAL_3_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Hinten |
| STAT_INTERVAL_3_RCP_ABBR_PARKSENS_DEFEKT_VORNE_UND_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Parksensoren_Defekt_Vorne_Und_Hinten |
| STAT_INTERVAL_3_RCP_ABBR_PARKSENS_DEFEKT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Parksensoren_Defekt_Nur_Vorne |
| STAT_INTERVAL_3_RCP_ABBR_PARKSENS_DEFEKT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Parksensoren_Defekt_Nur_Hinten |
| STAT_INTERVAL_3_RCP_ABBRUCH_WEGROLLENSYSTEM_PROBLEM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Wegrollensystem_Problem |
| STAT_INTERVAL_3_RCP_ABBR_GEGENWEGROLLEN_SICHERN_UNMOEGLICH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Gegen_Wegrollen_Sichern_Nicht_Moeglich |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHRSTUFE_AENDERN_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrstufe_Aendern_Fehler |
| STAT_INTERVAL_3_RCP_ABBR_KRAFTSCHLUS_ANTRIEBSSTRANG_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Kraftschluss_Antriebsstrang_Fehler |
| STAT_INTERVAL_3_RCP_ABBRUCH_DSK_BATTERIE_STARK_ENTLADEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Dsk_Batterie_Stark_Entladen |
| STAT_INTERVAL_3_RCP_ABBR_DSK_FUNKVERBINDUNG_ABBRUCH_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Dsk_Funkverbindung_Abbruch_Fehler |
| STAT_INTERVAL_3_RCP_ABBRUCH_SCHLUESSELSUCHE_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Schluesselsuche_Fehler |
| STAT_INTERVAL_3_RCP_ABBRUCH_VERFAHRWEGSBEGRENZUNG_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Verfahrwegsbegrenzung_Fehler |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHRDYNAMIK_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrdynamik_Fehler |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHRDYNAMIK_ABBRUCH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrdynamik_Abbruch |
| STAT_INTERVAL_3_RCP_ABBRUCH_HW_SW_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Hw_Sw_Fehler |
| STAT_INTERVAL_3_RCP_ABBRUCH_FUSI_EINGRIFF_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fusi_Eingriff |
| STAT_INTERVAL_3_RCP_ABBRUCH_FZG_ZUSTAND_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fzg_Zustand_Fehler |
| STAT_INTERVAL_3_RCP_ABBRUCH_WERKSTATTSMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Werkstattsmodus_Aktiv |
| STAT_INTERVAL_3_RCP_ABBRUCH_ROLLENMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Rollenmodus_Aktiv |
| STAT_INTERVAL_3_RCP_ABBRUCH_MOTOR_LAEUFT_BEI_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Motor_Laeuft_Be_Iaktivierung |
| STAT_INTERVAL_3_RCP_ABBRUCH_PARKTASTE_LOSGELASSEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Parktaste_Losgelassen |
| STAT_INTERVAL_3_RCP_ABBRUCH_DSK_KEINE_AKTIVITAET_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Dsk_Keine_Aktivitaet |
| STAT_INTERVAL_3_RCP_ABBRUCH_DSK_AUSSERHALB_NAHBEREICH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Dsk_Ausserhalb_Nahbereich |
| STAT_INTERVAL_3_RCP_ABBRUCH_ZWEITER_DSK_ERKANNT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Zweiter_Dsk_Erkannt |
| STAT_INTERVAL_3_RCP_ABBRUCH_DSK_IM_INNENRAUM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Dsk_Im_Innenraum |
| STAT_INTERVAL_3_RCP_ABBR_FTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Fahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_3_RCP_ABBR_BEIFTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Beifahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_3_RCP_ABBR_FTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_3_RCP_ABBR_BEIFTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_3_RCP_ABBR_HECKKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Heckklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_3_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Frontklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_3_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Heckscheibe_Offen_In_Aktivierung |
| STAT_INTERVAL_3_RCP_ABBR_CABRIODACH_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Cabriodach_Offen_In_Aktivierung |
| STAT_INTERVAL_3_RCP_ABBRUCH_AUSSENTEMPERATUR_GRENZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Aussentemperatur_Grenze |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHRZEUGREGELEINGRIFF_GRENZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Fahrzeugregeleingriff_Grenze |
| STAT_INTERVAL_3_RCP_ABBRUCH_STUFE_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Stufe_Grenze |
| STAT_INTERVAL_3_RCP_ABBRUCH_RUECKROLLEN_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Rueckrollen_Grenze |
| STAT_INTERVAL_3_RCP_ABBRUCH_NEIGUNG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Neigung_Grenze |
| STAT_INTERVAL_3_RCP_ABBRUCH_ANHAENGER_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Anhaenger_Grenze |
| STAT_INTERVAL_3_RCP_ABBRUCH_VERFAHRWEG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Verfahrweg_Grenze |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHREREINGRIFF_LENKRAD_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrereingriff_Lenkrad |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHREREINGRIFF_GASPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrereingriff_Gaspedal |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHREREINGRIFF_BREMSPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrereingriff_Bremspedal |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHREREINGRIFF_GWS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrereingriff_Gws |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHREREINGRIFF_EPB_FESTSTELLEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrereingriff_Epb_Feststellen |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHREREINGRIFF_EPB_LOESEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrereingriff_Epb_Loesen |
| STAT_INTERVAL_3_RCP_ABBRUCH_FAHREREINGRIFF_ALLGEMEIN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Abbruch_Fahrereingriff_Allgemein |
| STAT_INTERVAL_3_RCP_ABBR_FTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Fahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_3_RCP_ABBR_BEIFTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Beifahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_3_RCP_ABBR_FTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_3_RCP_ABB_BEIFTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_3_RCP_ABBR_HECKKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Heckklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_3_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Frontklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_3_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Heckscheibe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_3_RCP_ABBR_CABRIODACH_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Cabriodach_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_3_RCP_ABBR_PARKSENS_STOERUNG_V_UND_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Parksensoren_Stoerung_Vorne_Und_Hinten |
| STAT_INTERVAL_3_RCP_ABBR_PARKSENS_STOERUNG_NUR_V_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Vorne |
| STAT_INTERVAL_3_RCP_ABBR_PARKSENS_STOERUNG_NUR_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_3_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Hinten |
| STAT_INTERVAL_3_RCP_RESERVED_1_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_1 |
| STAT_INTERVAL_3_RCP_RESERVED_2_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_2 |
| STAT_INTERVAL_3_RCP_RESERVED_3_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_3 |
| STAT_INTERVAL_3_RCP_RESERVED_4_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_4 |
| STAT_INTERVAL_3_RCP_RESERVED_5_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_5 |
| STAT_INTERVAL_3_RCP_RESERVED_6_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_6 |
| STAT_INTERVAL_3_RCP_RESERVED_7_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_7 |
| STAT_INTERVAL_3_RCP_RESERVED_8_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_8 |
| STAT_INTERVAL_3_RCP_RESERVED_9_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_9 |
| STAT_INTERVAL_3_RCP_RESERVED_10_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_10 |
| STAT_INTERVAL_3_RCP_RESERVED_11_WERT | - | - | unsigned int | - | - | - | - | - | Interval_3_Rcp_Reserved_11 |
| STAT_INTERVAL_3_RCP_AKTIVIERUNG_UNTERSPANNUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_3_RCP_AKTIVIERUNG_UNTERSPANNUNG |
| STAT_INTERVAL_3_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_3_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_3_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_3_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2 |
| STAT_INTERVAL_3_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_3_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_3_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_3_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_3_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_3_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2 |
| STAT_INTERVAL_3_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_3_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_3_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_3_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4 |
| STAT_INTERVAL_4_RCP_AKTIVIERUNG_INAKTIV_ZU_PPC_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Aktivierung_Inaktiv_Zu_Ppc |
| STAT_INTERVAL_4_RCP_AKTIVIERUNG_PPC_ZU_INIT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Aktivierung_Ppc_Zu_Init |
| STAT_INTERVAL_4_RCP_AKTIVIERUNG_INIT_ZU_FAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Aktivierung_Init_Zu_Fahren |
| STAT_INTERVAL_4_RCP_AKTIVIERUNG_FAHREN_ZU_DEAK_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Aktivierung_Fahren_Zu_Deak |
| STAT_INTERVAL_4_RCP_AKTIVIERUNG_VORWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Aktivierung_Vorwaerts_Gedrueckt |
| STAT_INTERVAL_4_RCP_AKTIVIERUNG_RUECKWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Aktivierung_Rueckwaerts_Gedrueckt |
| STAT_INTERVAL_4_RCP_VORGANG_NUR_VORWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Vorgang_Nur_Vorwaerts |
| STAT_INTERVAL_4_RCP_VORGANG_NUR_RUECKWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Vorgang_Nur_Rueckwaerts |
| STAT_INTERVAL_4_RCP_VORGANG_RANGIEREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Vorgang_Rangieren |
| STAT_INTERVAL_4_RCP_VORGANG_KEIN_VERFAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Vorgang_Kein_Verfahren |
| STAT_INTERVAL_4_RCP_VERFAHRWEG_MINDESTENS_DISTANZ1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Verfahrweg_Mindestens_Distanz1 |
| STAT_INTERVAL_4_RCP_VERFAHRWEG_MINDESTENS_DISTANZ2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Verfahrweg_Mindestens_Distanz2 |
| STAT_INTERVAL_4_RCP_VERFAHRWEG_MINDESTENS_DISTANZ3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Verfahrweg_Mindestens_Distanz3 |
| STAT_INTERVAL_4_RCP_VERFAHRWEG_MINDESTENS_DISTANZ4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Verfahrweg_Mindestens_Distanz4 |
| STAT_INTERVAL_4_RCP_VERFAHRWEG_MINDESTENS_DISTANZ5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Verfahrweg_Mindestens_Distanz5 |
| STAT_INTERVAL_4_RCP_VERFAHRWEG_MINDESTENS_DISTANZ6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Verfahrweg_Mindestens_Distanz6 |
| STAT_INTERVAL_4_RCP_MISSIONSZEIT_MINDESTENS_ZEIT1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Missionszeit_Mindestens_Zeit1 |
| STAT_INTERVAL_4_RCP_MISSIONSZEIT_MINDESTENS_ZEIT2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Missionszeit_Mindestens_Zeit2 |
| STAT_INTERVAL_4_RCP_MISSIONSZEIT_MINDESTENS_ZEIT3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Missionszeit_Mindestens_Zeit3 |
| STAT_INTERVAL_4_RCP_MISSIONSZEIT_MINDESTENS_ZEIT4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Missionszeit_Mindestens_Zeit4 |
| STAT_INTERVAL_4_RCP_MISSIONSZEIT_UEBERSCHRITTEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Missionszeit_Ueberschritten |
| STAT_INTERVAL_4_RCP_ABBR_PARKSENS_VERSCHMUTZT_V_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Parksensoren_Verschmutzt_Vorne_Und_Hinten |
| STAT_INTERVAL_4_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Vorne |
| STAT_INTERVAL_4_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Hinten |
| STAT_INTERVAL_4_RCP_ABBR_PARKSENS_DEFEKT_VORNE_UND_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Parksensoren_Defekt_Vorne_Und_Hinten |
| STAT_INTERVAL_4_RCP_ABBR_PARKSENS_DEFEKT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Parksensoren_Defekt_Nur_Vorne |
| STAT_INTERVAL_4_RCP_ABBR_PARKSENS_DEFEKT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Parksensoren_Defekt_Nur_Hinten |
| STAT_INTERVAL_4_RCP_ABBRUCH_WEGROLLENSYSTEM_PROBLEM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Wegrollensystem_Problem |
| STAT_INTERVAL_4_RCP_ABBR_GEGENWEGROLLEN_SICHERN_UNMOEGLICH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Gegen_Wegrollen_Sichern_Nicht_Moeglich |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHRSTUFE_AENDERN_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrstufe_Aendern_Fehler |
| STAT_INTERVAL_4_RCP_ABBR_KRAFTSCHLUS_ANTRIEBSSTRANG_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Kraftschluss_Antriebsstrang_Fehler |
| STAT_INTERVAL_4_RCP_ABBRUCH_DSK_BATTERIE_STARK_ENTLADEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Dsk_Batterie_Stark_Entladen |
| STAT_INTERVAL_4_RCP_ABBR_DSK_FUNKVERBINDUNG_ABBRUCH_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Dsk_Funkverbindung_Abbruch_Fehler |
| STAT_INTERVAL_4_RCP_ABBRUCH_SCHLUESSELSUCHE_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Schluesselsuche_Fehler |
| STAT_INTERVAL_4_RCP_ABBRUCH_VERFAHRWEGSBEGRENZUNG_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Verfahrwegsbegrenzung_Fehler |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHRDYNAMIK_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrdynamik_Fehler |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHRDYNAMIK_ABBRUCH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrdynamik_Abbruch |
| STAT_INTERVAL_4_RCP_ABBRUCH_HW_SW_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Hw_Sw_Fehler |
| STAT_INTERVAL_4_RCP_ABBRUCH_FUSI_EINGRIFF_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fusi_Eingriff |
| STAT_INTERVAL_4_RCP_ABBRUCH_FZG_ZUSTAND_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fzg_Zustand_Fehler |
| STAT_INTERVAL_4_RCP_ABBRUCH_WERKSTATTSMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Werkstattsmodus_Aktiv |
| STAT_INTERVAL_4_RCP_ABBRUCH_ROLLENMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Rollenmodus_Aktiv |
| STAT_INTERVAL_4_RCP_ABBRUCH_MOTOR_LAEUFT_BEI_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Motor_Laeuft_Be_Iaktivierung |
| STAT_INTERVAL_4_RCP_ABBRUCH_PARKTASTE_LOSGELASSEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Parktaste_Losgelassen |
| STAT_INTERVAL_4_RCP_ABBRUCH_DSK_KEINE_AKTIVITAET_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Dsk_Keine_Aktivitaet |
| STAT_INTERVAL_4_RCP_ABBRUCH_DSK_AUSSERHALB_NAHBEREICH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Dsk_Ausserhalb_Nahbereich |
| STAT_INTERVAL_4_RCP_ABBRUCH_ZWEITER_DSK_ERKANNT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Zweiter_Dsk_Erkannt |
| STAT_INTERVAL_4_RCP_ABBRUCH_DSK_IM_INNENRAUM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Dsk_Im_Innenraum |
| STAT_INTERVAL_4_RCP_ABBR_FTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Fahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_4_RCP_ABBR_BEIFTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Beifahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_4_RCP_ABBR_FTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_4_RCP_ABBR_BEIFTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_4_RCP_ABBR_HECKKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Heckklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_4_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Frontklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_4_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Heckscheibe_Offen_In_Aktivierung |
| STAT_INTERVAL_4_RCP_ABBR_CABRIODACH_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Cabriodach_Offen_In_Aktivierung |
| STAT_INTERVAL_4_RCP_ABBRUCH_AUSSENTEMPERATUR_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Aussentemperatur_Grenze |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHRZEUGREGELEINGRIFF_GRENZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Fahrzeugregeleingriff_Grenze |
| STAT_INTERVAL_4_RCP_ABBRUCH_STUFE_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Stufe_Grenze |
| STAT_INTERVAL_4_RCP_ABBRUCH_RUECKROLLEN_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Rueckrollen_Grenze |
| STAT_INTERVAL_4_RCP_ABBRUCH_NEIGUNG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Neigung_Grenze |
| STAT_INTERVAL_4_RCP_ABBRUCH_ANHAENGER_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Anhaenger_Grenze |
| STAT_INTERVAL_4_RCP_ABBRUCH_VERFAHRWEG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Verfahrweg_Grenze |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHREREINGRIFF_LENKRAD_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrereingriff_Lenkrad |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHREREINGRIFF_GASPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrereingriff_Gaspedal |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHREREINGRIFF_BREMSPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrereingriff_Bremspedal |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHREREINGRIFF_GWS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrereingriff_Gws |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHREREINGRIFF_EPB_FESTSTELLEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrereingriff_Epb_Feststellen |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHREREINGRIFF_EPB_LOESEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrereingriff_Epb_Loesen |
| STAT_INTERVAL_4_RCP_ABBRUCH_FAHREREINGRIFF_ALLGEMEIN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Abbruch_Fahrereingriff_Allgemein |
| STAT_INTERVAL_4_RCP_ABBR_FTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Fahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_4_RCP_ABBR_BEIFTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Beifahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_4_RCP_ABBR_FTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_4_RCP_ABBR_BEIFTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_4_RCP_ABBR_HECKKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Heckklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_4_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Frontklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_4_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Heckscheibe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_4_RCP_ABBR_CABRIODACH_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Cabriodach_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_4_RCP_ABBR_PARKSENS_STOERUNG_V_UND_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Parksensoren_Stoerung_Vorne_Und_Hinten |
| STAT_INTERVAL_4_RCP_ABBR_PARKSENS_STOERUNG_NUR_V_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Vorne |
| STAT_INTERVAL_4_RCP_ABBR_PARKSENS_STOERUNG_NUR_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_4_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Hinten |
| STAT_INTERVAL_4_RCP_RESERVED_1_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_1 |
| STAT_INTERVAL_4_RCP_RESERVED_2_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_2 |
| STAT_INTERVAL_4_RCP_RESERVED_3_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_3 |
| STAT_INTERVAL_4_RCP_RESERVED_4_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_4 |
| STAT_INTERVAL_4_RCP_RESERVED_5_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_5 |
| STAT_INTERVAL_4_RCP_RESERVED_6_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_6 |
| STAT_INTERVAL_4_RCP_RESERVED_7_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_7 |
| STAT_INTERVAL_4_RCP_RESERVED_8_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_8 |
| STAT_INTERVAL_4_RCP_RESERVED_9_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_9 |
| STAT_INTERVAL_4_RCP_RESERVED_10_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_10 |
| STAT_INTERVAL_4_RCP_RESERVED_11_WERT | - | - | unsigned int | - | - | - | - | - | Interval_4_Rcp_Reserved_11 |
| STAT_INTERVAL_4_RCP_AKTIVIERUNG_UNTERSPANNUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_4_RCP_AKTIVIERUNG_UNTERSPANNUNG |
| STAT_INTERVAL_4_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_4_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_4_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_4_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2 |
| STAT_INTERVAL_4_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_4_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_4_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_4_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_4_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_4_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2 |
| STAT_INTERVAL_4_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_4_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_4_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_4_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4 |
| STAT_INTERVAL_5_RCP_AKTIVIERUNG_INAKTIV_ZU_PPC_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Aktivierung_Inaktiv_Zu_Ppc |
| STAT_INTERVAL_5_RCP_AKTIVIERUNG_PPC_ZU_INIT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Aktivierung_Ppc_Zu_Init |
| STAT_INTERVAL_5_RCP_AKTIVIERUNG_INIT_ZU_FAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Aktivierung_Init_Zu_Fahren |
| STAT_INTERVAL_5_RCP_AKTIVIERUNG_FAHREN_ZU_DEAK_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Aktivierung_Fahren_Zu_Deak |
| STAT_INTERVAL_5_RCP_AKTIVIERUNG_VORWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Aktivierung_Vorwaerts_Gedrueckt |
| STAT_INTERVAL_5_RCP_AKTIVIERUNG_RUECKWAERTS_GEDRUECKT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Aktivierung_Rueckwaerts_Gedrueckt |
| STAT_INTERVAL_5_RCP_VORGANG_NUR_VORWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Vorgang_Nur_Vorwaerts |
| STAT_INTERVAL_5_RCP_VORGANG_NUR_RUECKWAERTS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Vorgang_Nur_Rueckwaerts |
| STAT_INTERVAL_5_RCP_VORGANG_RANGIEREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Vorgang_Rangieren |
| STAT_INTERVAL_5_RCP_VORGANG_KEIN_VERFAHREN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Vorgang_Kein_Verfahren |
| STAT_INTERVAL_5_RCP_VERFAHRWEG_MINDESTENS_DISTANZ1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Verfahrweg_Mindestens_Distanz1 |
| STAT_INTERVAL_5_RCP_VERFAHRWEG_MINDESTENS_DISTANZ2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Verfahrweg_Mindestens_Distanz2 |
| STAT_INTERVAL_5_RCP_VERFAHRWEG_MINDESTENS_DISTANZ3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Verfahrweg_Mindestens_Distanz3 |
| STAT_INTERVAL_5_RCP_VERFAHRWEG_MINDESTENS_DISTANZ4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Verfahrweg_Mindestens_Distanz4 |
| STAT_INTERVAL_5_RCP_VERFAHRWEG_MINDESTENS_DISTANZ5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Verfahrweg_Mindestens_Distanz5 |
| STAT_INTERVAL_5_RCP_VERFAHRWEG_MINDESTENS_DISTANZ6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Verfahrweg_Mindestens_Distanz6 |
| STAT_INTERVAL_5_RCP_MISSIONSZEIT_MINDESTENS_ZEIT1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Missionszeit_Mindestens_Zeit1 |
| STAT_INTERVAL_5_RCP_MISSIONSZEIT_MINDESTENS_ZEIT2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Missionszeit_Mindestens_Zeit2 |
| STAT_INTERVAL_5_RCP_MISSIONSZEIT_MINDESTENS_ZEIT3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Missionszeit_Mindestens_Zeit3 |
| STAT_INTERVAL_5_RCP_MISSIONSZEIT_MINDESTENS_ZEIT4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Missionszeit_Mindestens_Zeit4 |
| STAT_INTERVAL_5_RCP_MISSIONSZEIT_UEBERSCHRITTEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Missionszeit_Ueberschritten |
| STAT_INTERVAL_5_RCP_ABBR_PARKSENS_VERSCHMUTZT_V_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Parksensoren_Verschmutzt_Vorne_Und_Hinten |
| STAT_INTERVAL_5_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Vorne |
| STAT_INTERVAL_5_RCP_ABBR_PARKSENS_VERSCHMUTZT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Parksensoren_Verschmutzt_Nur_Hinten |
| STAT_INTERVAL_5_RCP_ABBR_PARKSENS_DEFEKT_VORNE_UND_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Parksensoren_Defekt_Vorne_Und_Hinten |
| STAT_INTERVAL_5_RCP_ABBR_PARKSENS_DEFEKT_NUR_VORNE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Parksensoren_Defekt_Nur_Vorne |
| STAT_INTERVAL_5_RCP_ABBR_PARKSENS_DEFEKT_NUR_HINTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Parksensoren_Defekt_Nur_Hinten |
| STAT_INTERVAL_5_RCP_ABBRUCH_WEGROLLENSYSTEM_PROBLEM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Wegrollensystem_Problem |
| STAT_INTERVAL_5_RCP_ABBR_GEGENWEGROLLEN_SICHERN_UNMOEGLICH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Gegen_Wegrollen_Sichern_Nicht_Moeglich |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHRSTUFE_AENDERN_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrstufe_Aendern_Fehler |
| STAT_INTERVAL_5_RCP_ABBR_KRAFTSCHLUS_ANTRIEBSSTRANG_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Kraftschluss_Antriebsstrang_Fehler |
| STAT_INTERVAL_5_RCP_ABBRUCH_DSK_BATTERIE_STARK_ENTLADEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Dsk_Batterie_Stark_Entladen |
| STAT_INTERVAL_5_RCP_ABBR_DSK_FUNKVERBINDUNG_ABBRUCH_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Dsk_Funkverbindung_Abbruch_Fehler |
| STAT_INTERVAL_5_RCP_ABBRUCH_SCHLUESSELSUCHE_FEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Schluesselsuche_Fehler |
| STAT_INTERVAL_5_RCP_ABBRUCH_VERFAHRWEGSBEGRENZUNG_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Verfahrwegsbegrenzung_Fehler |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHRDYNAMIK_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrdynamik_Fehler |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHRDYNAMIK_ABBRUCH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrdynamik_Abbruch |
| STAT_INTERVAL_5_RCP_ABBRUCH_HW_SW_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Hw_Sw_Fehler |
| STAT_INTERVAL_5_RCP_ABBRUCH_FUSI_EINGRIFF_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fusi_Eingriff |
| STAT_INTERVAL_5_RCP_ABBRUCH_FZG_ZUSTAND_FEHLER_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fzg_Zustand_Fehler |
| STAT_INTERVAL_5_RCP_ABBRUCH_WERKSTATTSMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Werkstattsmodus_Aktiv |
| STAT_INTERVAL_5_RCP_ABBRUCH_ROLLENMODUS_AKTIV_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Rollenmodus_Aktiv |
| STAT_INTERVAL_5_RCP_ABBRUCH_MOTOR_LAEUFT_BEI_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Motor_Laeuft_Be_Iaktivierung |
| STAT_INTERVAL_5_RCP_ABBRUCH_PARKTASTE_LOSGELASSEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Parktaste_Losgelassen |
| STAT_INTERVAL_5_RCP_ABBRUCH_DSK_KEINE_AKTIVITAET_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Dsk_Keine_Aktivitaet |
| STAT_INTERVAL_5_RCP_ABBRUCH_DSK_AUSSERHALB_NAHBEREICH_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Dsk_Ausserhalb_Nahbereich |
| STAT_INTERVAL_5_RCP_ABBRUCH_ZWEITER_DSK_ERKANNT_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Zweiter_Dsk_Erkannt |
| STAT_INTERVAL_5_RCP_ABBRUCH_DSK_IM_INNENRAUM_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Dsk_Im_Innenraum |
| STAT_INTERVAL_5_RCP_ABBR_FTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Fahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_5_RCP_ABBR_BEIFTUER_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Beifahrertuer_Offen_In_Aktivierung |
| STAT_INTERVAL_5_RCP_ABBR_FTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_5_RCP_ABB_BEIFTUER_H_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Aktivierung |
| STAT_INTERVAL_5_RCP_ABBR_HECKKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Heckklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_5_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Frontklappe_Offen_In_Aktivierung |
| STAT_INTERVAL_5_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Heckscheibe_Offen_In_Aktivierung |
| STAT_INTERVAL_5_RCP_ABB_CABRIODACH_OFFEN_IN_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Cabriodach_Offen_In_Aktivierung |
| STAT_INTERVAL_5_RCP_ABBRUCH_AUSSENTEMPERATUR_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Aussentemperatur_Grenze |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHRZEUGREGELEINGRIFF_GRENZE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Fahrzeugregeleingriff_Grenze |
| STAT_INTERVAL_5_RCP_ABBRUCH_STUFE_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Stufe_Grenze |
| STAT_INTERVAL_5_RCP_ABBRUCH_RUECKROLLEN_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Rueckrollen_Grenze |
| STAT_INTERVAL_5_RCP_ABBRUCH_NEIGUNG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Neigung_Grenze |
| STAT_INTERVAL_5_RCP_ABBRUCH_ANHAENGER_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Anhaenger_Grenze |
| STAT_INTERVAL_5_RCP_ABBRUCH_VERFAHRWEG_GRENZE_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Verfahrweg_Grenze |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHREREINGRIFF_LENKRAD_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrereingriff_Lenkrad |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHREREINGRIFF_GASPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrereingriff_Gaspedal |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHREREINGRIFF_BREMSPEDAL_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrereingriff_Bremspedal |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHREREINGRIFF_GWS_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrereingriff_Gws |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHREREINGRIFF_EPB_FESTSTELLEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrereingriff_Epb_Feststellen |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHREREINGRIFF_EPB_LOESEN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrereingriff_Epb_Loesen |
| STAT_INTERVAL_5_RCP_ABBRUCH_FAHREREINGRIFF_ALLGEMEIN_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Abbruch_Fahrereingriff_Allgemein |
| STAT_INTERVAL_5_RCP_ABBR_FTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Fahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_5_RCP_ABBR_BEIFTUER_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Beifahrertuer_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_5_RCP_ABBR_FTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Fahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_5_RCP_ABBR_BEIFTUER_H_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Beifahrertuer_Hinten_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_5_RCP_ABBR_HECKKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Heckklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_5_RCP_ABBR_FRONTKLAPPE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Frontklappe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_5_RCP_ABBR_HECKSCHEIBE_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Heckscheibe_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_5_RCP_ABBR_CABRIODACH_OFFEN_IN_FAHRBETRIEB_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Cabriodach_Offen_In_Fahrbetrieb |
| STAT_INTERVAL_5_RCP_ABBR_PARKSENS_STOERUNG_V_UND_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Parksensoren_Stoerung_Vorne_Und_Hinten |
| STAT_INTERVAL_5_RCP_ABBR_PARKSENS_STOERUNG_NUR_V_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Vorne |
| STAT_INTERVAL_5_RCP_ABBR_PARKSENS_STOERUNG_NUR_H_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Interval_5_Rcp_Abbruch_Parksensoren_Stoerung_Nur_Hinten |
| STAT_INTERVAL_5_RCP_RESERVED_1_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_1 |
| STAT_INTERVAL_5_RCP_RESERVED_2_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_2 |
| STAT_INTERVAL_5_RCP_RESERVED_3_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_3 |
| STAT_INTERVAL_5_RCP_RESERVED_4_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_4 |
| STAT_INTERVAL_5_RCP_RESERVED_5_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_5 |
| STAT_INTERVAL_5_RCP_RESERVED_6_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_6 |
| STAT_INTERVAL_5_RCP_RESERVED_7_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_7 |
| STAT_INTERVAL_5_RCP_RESERVED_8_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_8 |
| STAT_INTERVAL_5_RCP_RESERVED_9_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_9 |
| STAT_INTERVAL_5_RCP_RESERVED_10_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_10 |
| STAT_INTERVAL_5_RCP_RESERVED_11_WERT | - | - | unsigned int | - | - | - | - | - | Interval_5_Rcp_Reserved_11 |
| STAT_INTERVAL_5_RCP_AKTIVIERUNG_UNTERSPANNUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_5_RCP_AKTIVIERUNG_UNTERSPANNUNG |
| STAT_INTERVAL_5_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_5_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_5_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_5_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE2 |
| STAT_INTERVAL_5_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_5_RCP_NEIGUNG_AKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_5_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_5_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE1 |
| STAT_INTERVAL_5_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_5_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE2 |
| STAT_INTERVAL_5_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_5_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE3 |
| STAT_INTERVAL_5_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | INTERVAL_5_RCP_NEIGUNG_DEAKTIVIERUNG_SCHWELLE4 |

### RES_0X4066_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUMMER_OF_EXCEPTION_CALLS_DATAABORT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_NUMMER_OF_EXCEPTION_CALLS_PREFETCHABORT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_NUMMER_OF_EXCEPTION_CALLS_SPURIOUSGIC_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_NUMMER_OF_EXCEPTION_CALLS_CPU0_SVC_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_NUMMER_OF_EXCEPTION_CALLS_CPU0_UNDEFINST_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_R13_STACK_POINTER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_CPSR_CURRENTPROGRAMSTATUSREGISTER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_R14_LINK_REGISTER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_R15_PROGRAM_COUNTER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_1MS_TASKCOUNTER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_COREDUMP_VERSION_NUMBER_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_COREID_IN_WHICH_EXCEPTION_OCCURED_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_TC_FOR_EXCEPTION_IS_SET_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_DFSR_IFSR_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER1_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER1_1_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER2_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER3_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER4_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER5_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER6_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER7_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER8_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER9_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER10_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER11_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_REGISTER12_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_STACK_DATA | DATA | high | data[64] | - | - | 1.0 | 1.0 | 0.0 | --- |
| STAT_RESERVED_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | --- |

### RES_0X4069_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_MAJOR_WERT | HEX | high | unsigned char | - | - | - | - | - | Version Major |
| STAT_VERSION_MINOR_WERT | HEX | high | unsigned char | - | - | - | - | - | Version minor |
| STAT_VERSION_PATCH_WERT | HEX | high | unsigned char | - | - | - | - | - | VERSION PATCH |
| STAT_VERSION_SUFFIX_TEXT | TEXT | high | string[64] | - | - | 1.0 | 1.0 | 0.0 | Version suffix |
| STAT__BUILD_REVISION_DATA | DATA | high | data[20] | - | - | 1.0 | 1.0 | 0.0 | BUILD REVISION |
| STAT_BUILD_MODE_TEXT | TEXT | high | string[64] | - | - | 1.0 | 1.0 | 0.0 | BUILD MODE |
| STAT_BUILD_TIMESTAMP_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | BUILD TIMESTAMP |
| STAT_BUILD_USER_TEXT | TEXT | high | string[64] | - | - | 1.0 | 1.0 | 0.0 | BUILD USER |
| STAT_BUILD_MACHINE_TEXT | TEXT | high | string[64] | - | - | 1.0 | 1.0 | 0.0 | BUILD MACHINE |

### RES_0X412E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_X0_MEMBPARAM_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_MAJOR_X1_MEMBPARAM_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_MAJOR_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X412F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MINOR_X0_MEMBPARAM_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_MINOR_X1_MEMBPARAM_WERT | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_MINOR_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X4130_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEADING_X0_MEMBPARAM_WERT | ° | high | unsigned char | - | - | 1.5 | 1.0 | 0.0 | ReadData |
| STAT_HEADING_X1_MEMBPARAM_WERT | ° | high | unsigned char | - | - | 1.5 | 1.0 | 0.0 | ReadData |
| STAT_HEADING_X2_MEMBPARAM_WERT | ° | high | unsigned char | - | - | 1.5 | 1.0 | 0.0 | ReadData |
| STAT_HEADING_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X4131_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPEED_X0_MEMBPARAM_WERT | km/h | high | unsigned int | - | - | 0.0156 | 1.0 | 0.0 | ReadData |
| STAT_SPEED_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X4132_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ACC_X0_MEMBPARAM_WERT | m/s² | high | unsigned int | - | - | 0.002 | 1.0 | -65.0 | ReadData |
| STAT_ACC_X1_MEMBPARAM_WERT | m/s² | high | unsigned int | - | - | 0.002 | 1.0 | -65.0 | ReadData |
| STAT_ACC_X2_MEMBPARAM_WERT | m/s² | high | unsigned int | - | - | 0.002 | 1.0 | -65.0 | ReadData |
| STAT_ACC_Y_MEMBPARAM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X4133_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALT_X0_MEMBPARAM_1_WERT | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_ALT_X1_MEMBPARAM_1_WERT | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_ALT_X2_MEMBPARAM_1_WERT | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | ReadData |
| STAT_ALT_Y_MEMBPARAM_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RES_0X4174_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PBA_VERSION_MAIN_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read PBA Version  - main version  - sub version  - patch version  - Date (YYYYMMDD) |
| STAT_PBA_VERSION_SUB_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read PBA Version  - main version  - sub version  - patch version  - Date (YYYYMMDD) |
| STAT_PBA_VERSION_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Read PBA Version  - main version  - sub version  - patch version  - Date (YYYYMMDD) |
| STAT_PBA_VERSION_DATE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Read PBA Version  - main version  - sub version  - patch version  - Date (YYYYMMDD) |

### RES_0X4200_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESAMT_SYS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit System |
| STAT_GESAMT_SYS_TRAILERHITCHVIEW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit System im Modus TrailerHitchView |
| STAT_GESAMT_SYS_MOD_RV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit System im Modus RearView |
| STAT_GESAMT_SYS_MOD_KALIB_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit System im Modus Kalibrierung |
| STAT_GESAMT_SYS_LOW_POWER_MODE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtlaufzeit System im Low Power Mode |
| STAT_GESAMT_AKTIVI_RFK_VIEW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtanzahl Aktivierung RFK Views   |
| STAT_GESAMT_AKTIVI_TRAIL_HITCH_VIEW_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtanzahl Aktivierung TrailerHitchView  |
| STAT_GESAMT_AKTIVI_RV_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gesamtanzahl Aktivierung RearView |
| STAT_ANZ_STREAM_ABSCH_TEMP_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Streaming-Abschaltung wegen Temperatur |
| STAT_ANZ_NUTZUNG_RFK_VIEWS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nutzungdauer RFK Views zwischen 0 bis X Sekunden |
| STAT_ANZ_NUTZUNG_RFK_XY_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nutzungdauer RFK Views zwischen X bis Y Sekunden |
| STAT_ANZ_RFK_VIEWS_YZ_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Nutzungdauer RFK Views zwischen Y bis Z Sekunden |
| STAT_ANZ_VERAEND_AKTV_TRAJEKTORIE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Veränderungen De-/Akitivierung Trajektorienanzeige Anzahl absoluter Veränderungseingriffe |
| STAT_ANZ_VERAEND_AKTV_HINDERNIS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Veränderungen De-/Aktivierung Hindernismarkierung |
| STAT_ZAEHLER_EINSTELL_KONTRAST_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Counter für die Einstellung des Kontrastes |
| STAT_ZAEHLER_EINSTELL_HELLIG_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Counter für die Einstellung der Helligkeit |
| STAT_MITTELWERT_EINSTELL_KONTRAST_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Mittlere Kontrasteinstellung |
| STAT_MITTELWERT_EINTELL_HELLIGKEIT_WERT | - | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Mittlere Helligkeitseinstellung |
| STAT_KALIBRIERZEIT_ROLL_PAUSEN_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kalibrierzeit Roll (Erstkalibrierung) ohne Pausen durch Abschaltung |
| STAT_KALIBRIERZEIT_PITCH_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kalibrierzeit Pitch Yaw (Erstkalibrierung) ohne Pausen durch Abschaltung |
| STAT_KALIBRIERZEIT_YAW_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kalibrierzeit Yaw (Erstkalibrierung) ohne Pausen durch Abschaltung  |
| STAT_KILOMETER_BIS_KALIBRIERUNG_WERT | m | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Meter bis Kalibrierung abgeschlossen  (not calib -- full calib) |
| STAT_KLEMMENZYKLEN_FULL_CALIB_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Klemmenzyklen, die im Kalibrierstatus FULL_CALIB abgeschlossen wurden ( nach mind. 1km Fahrt) |
| STAT_KLEMMENZYKLEN_NOT_FULL_CALIB_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl von -klemmenzyklen, die nicht im Kalibrierstatus FULL_CALIB abgeschlossen wurden (nach mind. 1 km Fahrt) |
| STAT_KLEMMENZYKLEN_FIRST_CALIB_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl von Klemmenzyklen, bis zum ersten Mal FULL_CALIB erreicht wurde |
| STAT_TIMEOUT_COUNTER_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl von nicht rechtzeitig  abgeschlossenen Kalibrierzyklen |
| STAT_DEVIATION_COUNTER_WERT | count | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl von mit invalidem Ergebnis abgeschlossenen Kalibrierzyklen |
| STAT_AKTUELLE_EXTRI_ROLL_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Extrisinc Roll |
| STAT_AKTUELLE_EXTRI_PITCH_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Extrinsic Pitch |
| STAT_AKTUELLE_EXTRI_YAW_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Extrinsic Yaw |
| STAT_MIN_ROLL_WHEN_FULL_CALIB_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Minimaler Rollwinkel beim Abschluss eines Kalibrierzyklus |
| STAT_MAX_ROLL_WHEN_FULL_CALIB_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Rollwinkel beim Abschluss eines Kalibrierzyklus |
| STAT_MIN_PITCH_WHEN_FULL_CALIB_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Minimaler Pitchwinkel beim Abschluss eines Kalibrierzyklus |
| STAT_MAX_PITCH_WHEN_FULL_CALIB_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Pitchwinkel beim Abschluss eines Kalibrierzyklus |
| STAT_MIN_YAW_WHEN_FULL_CALIB_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Minimaler Yawwinkel beim Abschluss eines Kalibrierzyklus |
| STAT_MAX_YAW_WHEN_FULL_CALIB_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Maximaler Yawwinkel beim Abschluss eines Kalibrierzyklus |
| STAT_MIN_CALIB_DURATION_ROLL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Zeit bis Kalibrierung des Roll Winkels abgeschlossen ist |
| STAT_MAX_CALIB_DURATION_ROLL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Zeit bis Kalibrierung des Roll Winkels abgeschlossen ist |
| STAT_MEAN_CALIB_DURATION_ROLL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Mittlere Zeit bis Kalibrierung des Roll Winkels abgeschlossen ist |
| STAT_MIN_CALIB_DURATION_PITCH_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Zeit bis Kalibrierung des Pitch Winkel abgeschlossen ist |
| STAT_MAX_CALIB_DURATION_PITCH_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Zeit bis Kalibrierung des Pitch Winkels abgeschlossen ist |
| STAT_MEAN_CALIB_DURATION_PITCH_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Mittlere Zeit bis Kalibrierung des Pitch Winkels abgeschlossen ist |
| STAT_MIN_CALIB_DURATION_YAW_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Minimale Zeit bis Kalibrierung des YAW Winkels abgeshclossen ist |
| STAT_MAX_CALIB_DURATION_YAW_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Maximale Zeit bis Kalibrierung des Yaw Winkels abgeschlossen ist |
| STAT_MEAN_CALIB_DURATION_YAW_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Mittlere Zeit bis Kalibrierung des YAW Winkels abgeschlossen ist |
| STAT_BETRIEB_COMP_TEMP_40_RV_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T kleiner gleich 40°C im Betriebsmodus Rear View  |
| STAT_BETRIEB_COMP_TEMP_40_70_RV_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T größer 40°C und kleiner gleich 70°C im Betriebsmodus Rear View  |
| STAT_BETRIEB_COMP_TEMP_70_100_RV_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T größer 70°C und  kleiner gleich 100°C im Betriebsmodus Rear View  |
| STAT_BETRIEB_COMP_TEMP_100_130_RV_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T größer 100°C und  kleiner gleich 130°C im Betriebsmodus Rear View  |
| STAT_BETRIEB_COMP_TEMP_40_KALIB_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T kleiner gleich 40°C im Betriebsmodus Kalibrierung   |
| STAT_BETRIEB_COMP_TEMP_40_70_KALIB_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T größer  40°C und kleiner gleich 70°C im Betriebsmodus Kalibrierung   |
| STAT_BETRIEB_COMP_TEMP_70_100_KALIB_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T größer  70°C und kleiner gleich 100°C im Betriebsmodus Kalibrierung   |
| STAT_BETRIEB_COMP_TEMP_100_130_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T größer  100°C und kleiner gleich 130°C im Betriebsmodus Kalibrierung   |
| STAT_BETRIEB_COMP_TEMP_40_LM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T kleiner gleich 40°C im Betriebsmodus LowPowerMode |
| STAT_BETRIEB_COMP_TEMP_40_70_LM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T größer  40°C und kleiner gleich 70°C im Betriebsmodus LowPowerMode |
| STAT_BETRIEB_COMP_TEMP_70_100_LM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T größer  70°C und kleiner gleich 100°C im Betriebsmodus LowPowerMode |
| STAT_BETRIEB_COMP_TEMP_100_130_LM_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebsstunden im Companion-Chip-Temperaturbereich T größer  100°C und kleiner gleich 130°C im Betriebsmodus LowPowerMode |
| STAT_ANZ_FEHL_KAMERABILD_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl fehlerhaftes Kamerabild |
| STAT_ANZ_FUSI_FEHL_KAM_FREEZE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Fusi Fehler Kamera Freeze |
| STAT_ANZ_AUFT_HINDERN_DEGRAD_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Auftreten Hindernismarkierung-Degradation |
| STAT_ANZ_PIA_DEGR_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Auftreten PIA-Degradation |
| STAT_ANZ_TRAJECT_FAHRSCH_DEGRAD_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Auftreten Trajektorien/Fahrschlauch-Degradation |

### RES_0X4302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP1_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | T1 |
| STAT_TEMP2_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | T2 |
| STAT_TEMP3_WERT | °C | high | signed int | - | - | 1.0 | 1.0 | 0.0 | T3 |

### RES_0X5D25_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJORVERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Majorversion |
| STAT_MINORVERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minorversion |
| STAT_PATCHVERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patchversion |

### RES_0XA0D6_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERGEBNIS | - | - | + | 0-n | high | unsigned char | - | TABELLE_ERGEBNIS_EGOMODEL | - | - | - | Ergebnis |

### RES_0XA0DB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SYSTEMZEIT_WERT | + | - | - | s | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Systemzeit des abgefragten DTC (DTC_NR) mit der entsprechenden History (HISTORY_ID) |
| STAT_KILOMETERSTAND_TEXT | + | - | - | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand des abgefragten DTC (DTC_NR) mit der entsprechenden History (HISTORY_ID) |
| STAT_RCP_ERRORCODE | + | - | - | 0-n | high | unsigned long | - | TAB_RCP_ERRORCODE | - | - | - | Umweltbedingung RCP_ERROR_CODE des DTCs. Siehe Tabelle TAB_RCP_ERRORCODE |

### RES_0XA77A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BITMAPS | - | - | + | 0-n | high | unsigned char | - | TAB_BITMAPS | - | - | - | Ergebnis der Generierung |

### RES_0XD0F4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DOWNLOAD_DATUM_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Datum |
| STAT_DERIVAT_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Derivat |
| STAT_VERSION_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Version |

### RES_0XD37F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_RV_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | Rückfahrkamera: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_TV_L_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | TopView-Kamera links: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_TV_R_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | TopView-Kamera rechts: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_SV_L_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | SideView-Kamera links: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_SV_R_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | SideView-Kamera rechts: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_FV_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | FrontView-Kameras: 0=nicht vorhanden, 1=vorhanden |

### RES_0XD3A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOADR_RV | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen RearViewCam: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_TV_L | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen TopViewCam links: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_TV_R | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen TopViewCam rechts: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_SV_L | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen SideViewCam links: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_SV_R | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen SideViewCam rechts: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |
| STAT_AUTOADR_FV | 0/1 | - | unsigned char | - | - | - | - | - | Status Anlernen FrontViewCam rechts: 0 = Kamera nicht angelernt oder nicht verbaut 1 = Kamera angelernt |

### RES_0XD3D6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PART_NR_TEXT | TEXT | high | string[13] | - | - | 1.0 | 1.0 | 0.0 | Teilenummer vom Sensor: Format KK-SSSSSSS-AA |
| STAT_SENSOR_SW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BTLD_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand Bootloader vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_HW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Hardwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BMW_TEILENR_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | BMW-Teilenummer 10-stellig |
| STAT_SENSOR_HERSTELLER_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Hersteller Text im Format: 10 Zeichen |
| STAT_SENSOR_HERSTELLER_NR_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Hersteller Nummer im Format 0-1 (10-stellig) |
| STAT_SENSOR_PROD_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Produktions Datum im Format TTMMYYYY |

### RES_0XD3D7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PART_NR_TEXT | TEXT | high | string[13] | - | - | 1.0 | 1.0 | 0.0 | Teilenummer vom Sensor: Format KK-SSSSSSS-AA |
| STAT_SENSOR_SW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BTLD_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand Bootloader vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_HW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Hardwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BMW_TEILENR_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | BMW-Teilenummer 10-stellig |
| STAT_SENSOR_HERSTELLER_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Hersteller Text im Format: 10 Zeichen |
| STAT_SENSOR_HERSTELLER_NR_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Hersteller Nummer im Format 0-1 (10-stellig) |
| STAT_SENSOR_PROD_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Produktions Datum im Format TTMMYYYY |

### RES_0XD3D8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PART_NR_TEXT | TEXT | high | string[13] | - | - | 1.0 | 1.0 | 0.0 | Teilenummer vom Sensor: Format KK-SSSSSSS-AA |
| STAT_SENSOR_SW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BTLD_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand Bootloader vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_HW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Hardwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BMW_TEILENR_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | BMW-Teilenummer 10-stellig |
| STAT_SENSOR_HERSTELLER_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Hersteller Text im Format: 10 Zeichen |
| STAT_SENSOR_HERSTELLER_NR_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Hersteller Nummer im Format 0-1 (10-stellig) |
| STAT_SENSOR_PROD_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Produktions Datum im Format TTMMYYYY |

### RES_0XD3D9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_PART_NR_TEXT | TEXT | high | string[13] | - | - | 1.0 | 1.0 | 0.0 | Teilenummer vom Sensor: Format KK-SSSSSSS-AA |
| STAT_SENSOR_SW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BTLD_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Softwarestand Bootloader vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_HW_RELEASE_NR_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Hardwarestand vom Sensor: Format xx.yy.zz |
| STAT_SENSOR_BMW_TEILENR_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | BMW-Teilenummer 10-stellig |
| STAT_SENSOR_HERSTELLER_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Hersteller Text im Format: 10 Zeichen |
| STAT_SENSOR_HERSTELLER_NR_TEXT | TEXT | high | string[10] | - | - | 1.0 | 1.0 | 0.0 | Hersteller Nummer im Format 0-1 (10-stellig) |
| STAT_SENSOR_PROD_DATUM_TEXT | TEXT | high | string[8] | - | - | 1.0 | 1.0 | 0.0 | Produktions Datum im Format TTMMYYYY |

### RES_0XD3DD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_RV_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | Rückfahrkamera: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_TV_L_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | TopView-Kamera links: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_TV_R_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | TopView-Kamera rechts: 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_FV_KAMERA | 0/1 | - | unsigned char | - | - | - | - | - | FrontView-Kameras: 0=nicht vorhanden, 1=vorhanden |

### RES_0XD3F4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAMERA_SW_RV | 0-n | high | unsigned char | - | TAB_KAMERA_SW_CHECK | - | - | - | Gibt den Status des Kamera-SW-Check zurück  |
| STAT_KAMERA_SW_FV | 0-n | high | unsigned char | - | TAB_KAMERA_SW_CHECK | - | - | - | Gibt den Status des Kamera-SW-Check zurück  |
| STAT_KAMERA_SW_TVL | 0-n | high | unsigned char | - | TAB_KAMERA_SW_CHECK | - | - | - | Gibt den Status des Kamera-SW-Check zurück  |
| STAT_KAMERA_SW_TVR | 0-n | high | unsigned char | - | TAB_KAMERA_SW_CHECK | - | - | - | Gibt den Status des Kamera-SW-Check zurück  |

### RES_0XD672_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PROGRESS_WERT | % | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Fortschritt der Generierung in % |
| STAT_GENERAL | 0-n | high | unsigned char | - | TAB_STAT_BITMAPS | - | - | - | Status der Generierung von Bitmaps |

### RES_0XD6AC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB | 0-n | high | unsigned char | - | TAB_CALIB_STAT | - | - | - | Status der Kamerakalibrierung |
| STAT_PITCH_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Nickwinkels ergab. |
| STAT_YAW_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Gierwinkels ergab. |
| STAT_ROLL_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Rollwinkels ergab. |
| STAT_MODE | 0-n | high | unsigned char | - | STAT_MODE_LISTE | - | - | - | Modus: 0 = ATC Pausiert 1 = ATC aktiv 128 = Pausiert (Busfehler) |

### RES_0XD6F4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB | 0-n | high | unsigned char | - | TAB_CALIB_STAT | - | - | - | Status der Kamerakalibrierung |
| STAT_PITCH_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Nickwinkels ergab. |
| STAT_YAW_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Gierwinkels ergab. |
| STAT_ROLL_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Rollwinkels ergab. |
| STAT_MODE | 0-n | high | unsigned char | - | STAT_MODE_LISTE | - | - | - | Modus: 0 = ATC Pausiert 1 = ATC aktiv 128 = Pausiert (Busfehler) |

### RES_0XD6F5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB | 0-n | high | unsigned char | - | TAB_CALIB_STAT | - | - | - | Status der Kamerakalibrierung |
| STAT_PITCH_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Nickwinkels ergab. |
| STAT_YAW_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Gierwinkels ergab. |
| STAT_ROLL_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Rollwinkels ergab. |
| STAT_MODE | 0-n | high | unsigned char | - | STAT_MODE_LISTE | - | - | - | Modus: 0 = ATC Pausiert 1 = ATC aktiv 128 = Pausiert (Busfehler) |

### RES_0XD9FF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALIB | 0-n | high | unsigned char | - | TAB_CALIB_STAT | - | - | - | Status der Kamerakalibrierung |
| STAT_PITCH_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Nickwinkels ergab. |
| STAT_YAW_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Gierwinkels ergab. |
| STAT_ROLL_CONFIDENCE_WERT | ° | high | motorola float | - | - | 1.0 | 1.0 | 0.0 | Standartfehler der sich während der Berechnung des Rollwinkels ergab. |
| STAT_MODE | 0-n | high | unsigned char | - | STAT_MODE_LISTE | - | - | - | Modus: 0 = ATC Pausiert 1 = ATC aktiv 128 = Pausiert (Busfehler) |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMMAND_RESULT_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | CM Command Result |

### RES_0XF003_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMMAND_RESULT_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | SBA Command Result |

### RES_0XF004_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VAL_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | This is the value VAL returned by reading register REG from camera CAMERA_ID. |

### RES_0XF00C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_APPLICATION_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | Rückgabetype entspricht werten aus Argument. Argument == Rückgabetype --> Applikation erfolgreich umgeschalten. |
| STAT_MODUS_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | Wert des gesetzen Modus. |
| STAT_PERSPECTIVE_WERT | + | - | - | HEX | high | unsigned char | - | - | - | - | - | Wert der gesetzten Persektive. |

### RES_0XF010_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATA | + | - | - | DATA | high | data[64] | - | - | 1.0 | 1.0 | 0.0 | Register Data |

### RES_0XF103_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COMMAND_RESULT_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | ReadData |

### RFK_MODE

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrierung (kontinuierliche Kalibrierung ohne Wechsel in LowPower) |
| 1 | LowPower |
| 2 | Streaming (Kundenfunktion inkl. Overlays) |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BOOTMANAGER_VERSION | 0x0104 | - | SW-Version of Bootmanager | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x0104_D |
| ETH_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_PHY_LOOPBACK_TEST | 0x1048 | - | Versetzt den gegebenen PHY in den Loopback-Modus und überprüft die Sendefähigkeit des PHYs. Der Test kann im internen und externen Loopback-Modus ausgeführt werden. Im internen Loopback wird nur die digitale Empfangs- und Sendelogik des PHYs überprüft. Im externen Loopback-Modus wird auch der analoge Transceiver Anteil getestet.  D. h. der externe Looback-Test sichert alle Komponenten bis zur Filterbeschaltung (exklusiv) ab.  Für den internen Test gelten keine besonderen Voraussetzungen. Für den externen Test muss der PHY  - als Master konfiguriert sein - sowie entweder terminiert (A) - oder mit einem Ziel-PHY verbunden sein (B).  Für B muss sichergestelt sein, dass der PHY auf Gegenseit deaktiviert bzw. in Reset gehalten wird. Sendet der PHY auf der Gegenseite einen Link-Pulse aus, kann der Test nicht durchgeführt werden, da der zu testende PHY keinen (internen) Link aufbauen kann. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1048_R | RES_0x1048_R |
| ETH_GET_PORT_TX_RX_STATS | 0x1049 | - | Liest die Anzahl der verschickten und empfangenen Pakete, die Anzahl verworfenen Pakete und die Anzahl der übertragenen und empfangenen Bytes. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1049_R | RES_0x1049_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_RESET_PORT_TX_RX_STATS | 0x104B | - | Setzt die Receive- und Transmitzähler eines Switchs zurück. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| TV3D_FASTADATEN | 0x2300 | - | Diagnosejob zum Auslesen der TV3D Fastadaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2300_D |
| TV3D_FASTA_G30 | 0x2301 | - | Fastadaten für G30 SW Schiene ICAM2SVS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2301_D |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CM_VERSION_LESEN | 0x4000 | - | Abfragen der aktuelle CM SWC Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4000_D |
| _SBA_VERSION_LESEN | 0x4001 | - | Abfragen der aktuelle SBA SWC Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4001_D |
| _SET_FUSION_MODE | 0x4002 | - | Modus der Freiraumfusion einstellen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4002_D | - |
| _SA2_STATUS_DEBUG | 0x4004 | STAT_SA2_STATUS_DEBUG_LESEN | 1:Debug ON 0: Debug OFF | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _SA2_STEUERN_DEBUG | 0x4005 | - | Set the Debug Interface status | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4005_D | - |
| _SBA_AUTOACTAVATION_STATUS | 0x4006 | STAT_SBA_STATUS_AUTOACTIVATION_WERT | 1:SBA Auto Act ON 0: SBA Auto Act OFF | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SBA_AUTOACTIVATION_STEUERN | 0x4007 | - | Read the SBA function status | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4007_D | - |
| _GET_FUSION_VERSION | 0x4008 | - | Abfrage der Freiraum Fusion SWC Software Version  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4008_D |
| _GET_FUSION_MODE | 0x4009 | STAT_GET_FUSION_MODE_WERT | Mode of freespace fusion | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SET_DEBUG_MODE | 0x400A | - | Modus der Debug-Ausgabe einstellen  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400A_D | - |
| _GET_DEBUG_MODE | 0x400B | STAT_GET_DEBUG_MODE_WERT | Mode of debug fusion | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SET_ODOMETRY_MODE | 0x400C | - | Modus der Odometrie einstellen (zentral oder USS)  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| _GET_ODOMETRY_MODE | 0x400D | STAT_GET_ODOMETRY_MODE_WERT | Mode of odometry | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _SET_TIMESYNC_MODE | 0x400E | - | Modus der Zeitsynchronisierung einstellen  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400E_D | - |
| _GET_TIMESYNC_MODE | 0x400F | STAT_GET_TIMESYNC_MODE_WERT | Modus der Zeitsynchronisierung abfragen  | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _CALIB_RESET | 0x4014 | - | The Job resets all extrinsic parameters to its coded nominal values. All positions, orientations were set to the CAF coded ones. The counters and internal states were set back to its defaults. The calibration status must be set to  ¿not calibrated¿  in this case.    | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4014_D | - |
| _REAR_CAM_INTRINSIC | 0x4016 | - | The Jobs read the inverse and the normal polynoms coefficients of the camera model. At the moment Scaramuzza model is preferred.   | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4016_D | RES_0x4016_D |
| _LEFT_CAM_INTRINSIC | 0x4018 | - | The Jobs read the inverse and the normal polynoms coefficients of the camera model. At the moment Scaramuzza model is preferred.  | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4018_D | RES_0x4018_D |
| _FRONT_CAM_INTRINSIC | 0x4019 | - | The Jobs read the inverse and the normal polynoms coefficients of the camera model. At the moment Scaramuzza model is preferred.  | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4019_D | RES_0x4019_D |
| _RIGHT_CAM_INTRINSIC | 0x401A | - | The Jobs read the inverse and the normal polynoms coefficients of the camera model. At the moment Scaramuzza model is preferred.  | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401A_D | RES_0x401A_D |
| _REAR_CAM_CALIB_STATUS | 0x401E | - | Via that job the status of the current calibration status and modes are read.  (see TAB_CALIB_STAT)  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401E_D |
| _LEFT_CAM_CALIB_STATUS | 0x401F | - | Via that job the status of the current calibration status and modes are read.  (see TAB_CALIB_STAT)  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401F_D |
| _FRONT_CAM_CALIB_STATUS | 0x4020 | - | Via that job the status of the current calibration status and modes are read.  (see TAB_CALIB_STAT)  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4020_D |
| _RIGHT_CAM_CALIB_STATUS | 0x4021 | - | Via that job the status of the current calibration status and modes are read.  (see TAB_CALIB_STAT)  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4021_D |
| _REAR_CAM_EXTRINSIC | 0x4022 | - | This Job reads extrinsic parameters.   | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4022_D | RES_0x4022_D |
| _LEFT_CAM_EXTRINSIC | 0x4023 | - | This Job reads extrinsic parameters.   | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4023_D | RES_0x4023_D |
| _FRONT_CAM_EXTRINSIC | 0x4024 | - | This Job reads extrinsic parameters.   | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4024_D | RES_0x4024_D |
| _RIGHT_CAM_EXTRINSIC | 0x4025 | - | This Job reads extrinsic parameters.   | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4025_D | RES_0x4025_D |
| _IQ_WRITE_REGISTER | 0x4027 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4027_D | - |
| _IQ_CONTRAST_BRIGHTNESS | 0x4028 | - | - | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4028_D | RES_0x4028_D |
| SA2_FASTA_DATEN_LOESCHEN | 0x4029 | - | SA2 FASTA Daten löschen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4029_D | - |
| SA2_FASTA_DATEN_LESEN | 0x402A | - | SA2 FASTA Daten lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x402A_D |
| _IQ_COLOR_SATURATION | 0x402B | - | - | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x402B_D | RES_0x402B_D |
| _IQ_RAW_MODE | 0x4030 | - | - | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4030_D | - |
| _IQ_LOW_LIGHT_MODE | 0x4031 | - | This jobs allows to switch the camera into its dedicated low-light mode. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4031_D | RES_0x4031_D |
| _IQ_AWB_BLOCK_REAR | 0x4032 | - | - | - | AWB_Block | - | - | - | - | - | - | - | 2E;22 | ARG_0x4032_D | RES_0x4032_D |
| _IQ_AWB_BLOCK_FRONT | 0x4033 | - | This job reads and writes the AWB Variable List of the AP0101 | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4033_D | RES_0x4033_D |
| _IQ_AWB_BLOCK_LEFT | 0x4034 | - | This jobs reds and writes the AWB Variable List of the AP0101. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4034_D | RES_0x4034_D |
| _IQ_AWB_BLOCK_RIGHT | 0x4035 | - | - | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4035_D | RES_0x4035_D |
| _STATUS_SYSTEM_CORE_DUMP | 0x4036 | - | Liefert Dump Daten zu Systemabstürzen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4036_D |
| _DSA_RESET | 0x403F | - | The Job Reset the internal Information in the DSA MODUL. All bloackage informations and all other flasg (weather informations) will be cleared. This job will be used in SIL or online in the car for test proposes.   | - | - | - | - | - | - | - | - | - | 2E | ARG_0x403F_D | - |
| LED_FLICKERMITIGATIONMODE | 0x4040 | - | LED Flicker Mitigation | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4040_D | RES_0x4040_D |
| LED_FLICKERMITIGATIONMODE_IQ | 0x4041 | - | LED Flicker Mitigation | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4041_D | RES_0x4041_D |
| RCP_FASTA | 0x4064 | - | FASTA Daten für RCP | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4064_D |
| SYSTEM_CORE_DUMP_G30 | 0x4066 | - | CoreDump der SVS (gültig für G30 SW). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4066_D |
| _STATUS_RCP_CONTROL_VERSION_LESEN | 0x4069 | - | RCP -SM version lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4069_D |
| _SET_DRIVERECORDER_MOSAIKSTREAM | 0x406A | - | Übertragung des geforderten Drive Recorder Videostromes | - | - | - | - | - | - | - | - | - | 2E | ARG_0x406A_D | - |
| _STAT_DRIVERECORDER_MOSAIKSTREAM | 0x406B | STAT_IMAGEVIEW | Statusabfrage des angezeigten Drive Recorder Videostromes | 0-n | - | High | unsigned char | TAB_IMAGEVIEW | - | - | - | - | 22 | - | - |
| FUSI_FAULT_ENVIRONMENTAL_DATA | 0x409A | STAT_FUSI_FAULT_ENVIRONMENTAL_DATA_TEXT | Zusätzliche Daten zur Analyse von ausgelösten FUSI DTC's | TEXT | - | High | string[51] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_READ_POICOUNT | 0x4102 | STAT_POI_COUNT_WERT | ReadData | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_POI_IMPORT | 0x4104 | - | Write full POI data base (it means that all 12 possible POI data structures are written), it is done for the current key | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4104_D | - |
| _PBA_POI_EXPORT | 0x4105 | STAT_POI_DATABASE_DATA | ReadData char[167] | DATA | - | High | data[168] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_POI_LOESCHEN | 0x4107 | - | Delete a data slot of a POI for a given ID | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4107_D | - |
| _PBA_STORE_POI_FROM_BUS | 0x4109 | - | Permanent storage of a POI based on current nav data on CAN | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4109_D | - |
| _PBA_IGNORE_GPS | 0x4120 | - | Ignore the GPS information from CAN bus in order to test the car model | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4120_D | - |
| _PBA_LASTPOS_IMPORT | 0x4121 | - | Write last position data structure | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4121_D | - |
| _PBA_LASTPOS_EXPORT | 0x4122 | STAT_LASTPOS_DATA | LAT, LON, HDG, ALT | DATA | - | High | data[11] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_STATUS_AUTOACTIV | 0x4124 | STAT_AUTO_ACTIV | ReadData | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _PBA_SET_AUTOACTIV | 0x4125 | - | Set PBA function status | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4125_D | - |
| _PBA_STATUS_TOLERANCE_AUTOCALC | 0x4126 | STAT_TOLERANCE_AUTOCALC | ReadData | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _PBA_SET_MAP_QUAL_TOLERANCE | 0x4127 | - | Set qual tolerance scaling parameters | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4127_D | - |
| _PBA_MAJOR_MEMBPARAM_SCHREIBEN | 0x4128 | - | write ellipse major axis | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4128_D | - |
| _PBA_MINOR_MEMBPARAM_SCHREIBEN | 0x4129 | - | write ellipse minor axis | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4129_D | - |
| _PBA_HDG_MEMBPARAM_SCHREIBEN | 0x412A | - | Set the heading membership parameters | - | - | - | - | - | - | - | - | - | 2E | ARG_0x412A_D | - |
| _PBA_SPEED_MEMBPARAM_SCHREIBEN | 0x412B | - | Set the speed membership parameters | - | - | - | - | - | - | - | - | - | 2E | ARG_0x412B_D | - |
| _PBA_ACC_MEMBPARAM_SCHREIBEN | 0x412C | - | Set the acceleration membershop parameters | - | - | - | - | - | - | - | - | - | 2E | ARG_0x412C_D | - |
| _PBA_ALT_MEMBPARAM_SCHREIBEN | 0x412D | - | set the altitude membership parameter | - | - | - | - | - | - | - | - | - | 2E | ARG_0x412D_D | - |
| _PBA_MAJOR_MEMBPARAM_LESEN | 0x412E | - | read ellipse major axis | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412E_D |
| _PBA_MINOR_MEMBPARAM_LESEN | 0x412F | - | read ellipse minor axis | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x412F_D |
| _PBA_HDG_MEMBPARAM_LESEN | 0x4130 | - | read the heading membership parameters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4130_D |
| _PBA_SPEED_MEMBPARAM_LESEN | 0x4131 | - | read the speed membership parameters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4131_D |
| _PBA_ACC_MEMBPARAM_LESEN | 0x4132 | - | read the acceleration membershop parameters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4132_D |
| _PBA_ALT_MEMBPARAM_LESEN | 0x4133 | - | read the altitude membership parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4133_D |
| _PBA_ELLIPSE_MEMBVALUE_LESEN | 0x4134 | STAT_ELLIPSE_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_HDG_MEMBVALUE_LESEN | 0x4135 | STAT_HEADING_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_ALT_MEMBVALUE_LESEN | 0x4136 | STAT_ALT_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_SPEED_MEMBVALUE_LESEN | 0x4137 | STAT_SPEED_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_ACC_MEMBVALUE_LESEN | 0x4138 | STAT_ACC_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_ACTIVATION_MEMBVALUE_LESEN | 0x4139 | STAT_ACTIV_MEMBVALUE_DATA | ReadData | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_DIST2POI_LESEN | 0x413A | STAT_DIST2POI_WERT_DATA | Foreach 4 Bytes (unsigned long): 0 - (2^32 - 1) = m 2^32              = invalid | DATA | - | High | data[48] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_DEBUG_LESEN | 0x4170 | STAT_STATUS_CANDEBUG | Status CANDEBUG | 0/1 | - | High | signed char | - | - | - | - | - | 22 | - | - |
| _PBA_DEBUG_SCHREIBEN | 0x4171 | - | An/Abschaltung des CAN Debug Interface Default Status wird angezeigt und auf Disabled nach jedem Reset und Kaltstart gesetzt. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4171_D | - |
| _PBA_LASTPOS_FROM_BUS_SCHREIBEN | 0x4172 | STAT_SCHREIBEN_STATUS | ReadData | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _PBA_BEHAVIOR_MEMBVALUE_LESEN | 0x4173 | STAT_BEHAVIOR_MEMBVALUE_DATA | Read BEHAVIOR_MEMBVALUE unsigned char[12] | DATA | - | High | data[12] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _PBA_VERSION_LESEN | 0x4174 | - | PBA  software component Version lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4174_D |
| FASTA_ICAM2RFK | 0x4200 | - | Fastadaten ICAM2RFK | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4200_D |
| READ_TEMP | 0x4302 | - | test | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4302_D |
| BOSCH_POWER_DOWN | 0x4311 | - | Minimum power down Zeit auf 5 Sekunden reduzieren  | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4311_D | - |
| TEMP_ABSCH | 0x4474 | - | Temperaturabschaltung | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4474_D | - |
| _TESTBILD_KAMERA_RFK2 | 0x570D | - | Anzeige eines Testbildes | - | - | - | - | - | - | - | - | - | 2E | ARG_0x570D_D | - |
| _MODE_LOW_POWER | 0x5AC0 | - | test | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5AC0_D | - |
| BOOTMANAGER_VERSION_RFK | 0x5D25 | - | SW-Version of Bootmanager | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5D25_D |
| RFK_MODE | 0x68A0 | - | Manuelles Umschalten zwischen Kalibrierung, LowPower und Streaming | - | - | - | - | - | - | - | - | - | 2E | ARG_0x68A0_D | - |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A_R | - |
| DOWNLOAD_EGOMODEL | 0xA0D6 | - | Damit wird der Download vom Ego-Modell von der HU erzwungen. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0D6_R |
| RCP_SYSTEMGRENZE_KUNDENVERHALTEN_AUSLESEN | 0xA0DB | - | RCP Systemgrenzen und Kundenverhalten auslesen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0DB_R | RES_0xA0DB_R |
| GENERATE_BITMAPS | 0xA77A | - | Generierung Bitmaps | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA77A_R |
| STATUS_EGOMODEL | 0xD0F4 | - | Status des Downloads von Egomodel abfragen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0F4_D |
| AUSSTATTUNG_TRSVC | 0xD37F | - | Rückgabe des Verbaus der Top-/ Side-/ Front- und RearViewkameras. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD37F_D |
| STEUERN_KALIB_KAM_RESET | 0xD38E | - | RESET der Kamera-Kalibrierung in den Anlieferzustand. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD38E_D | - |
| AUTOADRESSIERUNG_KAMERAS | 0xD3A1 | - | Ausgabe Status Autoadressierung der Kameras. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3A1_D |
| TESTBILD_KAMERA | 0xD3B4 | - | Startet die Testbildausgabe in den Kameras. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3B4_D | - |
| ECU_VARIANT | 0xD3C0 | STAT_ECU_VARIANTE | Abfrage der ECU Variante. Ergebnisse siehe Tabelle TAB_ECU_VARIANT | 0-n | - | High | unsigned char | TAB_ECU_VARIANT | - | - | - | - | 22 | - | - |
| ECU_TEMPERATURE | 0xD3C1 | STAT_ECU_TEMPERATURE_WERT | Interne Temperatur der ECU | °C | - | High | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TV_RIGHT_CAMERA_SERIAL_NUMBER | 0xD3C2 | STAT_TV_RIGHT_CAMERA_SERIAL_NUMBER_DATA | Im Host gecachte Seriennummer Kamera TV_R | DATA | - | High | data[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TV_LEFT_CAMERA_SERIAL_NUMBER | 0xD3C3 | STAT_TV_LEFT_CAMERA_SERIAL_NUMBER_DATA | Im Host gecachte Seriennummer Kamera TV_L | DATA | - | High | data[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| REAR_CAMERA_SERIAL_NUMBER | 0xD3C6 | STAT_REAR_CAMERA_SERIAL_NUMBER_DATA | Im Host gecachte Seriennummer Kamera RV | DATA | - | High | data[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CURRENT_USER_BRIGHTNESS | 0xD3C7 | STAT_CURRENT_USER_BRIGHTNESS_DATA | Aktuelle Helligkeitseinstellungen TV, SV und RV. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CURRENT_USER_CONTRAST | 0xD3C8 | STAT_CURRENT_USER_CONTRAST_DATA | Aktuelle Kontrasteinstellungen TV, SV und RV. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FV_CAMERA_SERIAL_NUMBER | 0xD3D5 | STAT_FV_CAMERA_SERIAL_NUMBER_DATA | Im Host gecachte Seriennummer Kamera FV | DATA | - | High | data[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TVR_CAMERA_INFO | 0xD3D6 | - | Teilenummer, Software- und Hardwarenummer von TVR | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3D6_D |
| TVL_CAMERA_INFO | 0xD3D7 | - | Teilenummer, Software- und Hardwarenummer von TVL | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3D7_D |
| FV_CAMERA_INFO | 0xD3D8 | - | Teilenummer, Software- und Hardwarenummer von FV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3D8_D |
| RV_CAMERA_INFO | 0xD3D9 | - | Teilenummer, Software- und Hardwarenummer von RV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3D9_D |
| STATUS_KAMERA_LINK | 0xD3DD | - | Linkstatus der einzelne Kamera wird abgefragt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3DD_D |
| DELETE_BITMAPS | 0xD3E1 | - | -Alle generierten Trajektoren werden gelöscht - Zurücksetzten auf Ausgangszustand - Automatische Generierung ist danach per Default deaktiviert. Neuer Start nur per Diagnosejob oder Neukodierung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3E1_D | - |
| CHECK_KAMERA_SW | 0xD3F4 | - | liest den Status der Kamera SW aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3F4_D |
| STATUS_BITMAPS | 0xD672 | - | Statusabfrage Generierung Bitmaps | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD672_D |
| RIGHT_CAMERA_CALIB_STATUS | 0xD6AC | - | Via that job the status of the current calibration status and modes are read. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6AC_D |
| FRONT_CAMERA_CALIB_STATUS | 0xD6F4 | - | Via that job the status of the current calibration status and modes are read. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6F4_D |
| LEFT_CAMERA_CALIB_STATUS | 0xD6F5 | - | Via that job the status of the current calibration status and modes are read. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6F5_D |
| STEUERN_ATC_MODE | 0xD848 | - | Der Diagnosejob aktiviert/pausiert die automatische Kamerakalibrierung. Nach erneueten Powerup (Klemmewechsel) hat dieser Job kein Einfluss mehr auf das SG. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD848_D | - |
| REAR_CAMERA_CALIB_STATUS | 0xD9FF | - | Via that job the status of the current calibration status and modes are read. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD9FF_D |
| SPANNUNG_KLEMME_30_WERT | 0xDAD8 | STAT_SPANNUNG_KLEMME_30_WERT | Spannungswert am Steuergerät an Klemme 30 (auf eine Nachkommastelle genau) | V | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| _CM_REQ_COMMAND | 0xF002 | - | Generic Command CM.  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002_R | RES_0xF002_R |
| _SBA_REQ_COMMAND | 0xF003 | - | Generic Command SBA.  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF003_R | RES_0xF003_R |
| _IQ_READ_REGISTER | 0xF004 | - | This job allows for reading the value V of register R from camera C.  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF004_R | RES_0xF004_R |
| _XVIEW3D_HTTP | 0xF007 | - | HTTP Service Starten | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _XVIEW3D_OVERLAYS | 0xF008 | - | Overlays aktivieren. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF008_R | - |
| _XVIEW3D_SSH | 0xF009 | - | Start Serial-Debuginterface via Ethernet. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _XVIEW3D_APPLICATION | 0xF00C | - | Verändert die  Applikation  der xView3D-Anwendung. z.B. TV, SV, RV | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00C_R | RES_0xF00C_R |
| _XVIEW3D_CALIB_OVERLAY | 0xF00D | - | sfasdfs | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00D_R | - |
| _RCP_SET_DEBUG_MODE | 0xF00F | - | Sets the  debug mode settings | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00F_R | - |
| _RCP_GET_DEBUG_MODE | 0xF010 | - | Reads the debug mode settings | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF010_R | RES_0xF010_R |
| RCP_FASTA_LOESCHEN | 0xF012 | - | Setzt die Fastadaten von RCP zurück | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _PBA_POI_LESEN | 0xF101 | - | Read data slot for POI with given ID | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF101_R | - |
| _PBA_POI_SCHREIBEN | 0xF102 | - | Writes a data slot with phys values of POI with the a given POI-ID | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF102_R | - |
| _PBA_REQ_COMMAND | 0xF103 | - | Request auto activation, AddPoi within quality check, PbaStartup | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF103_R | RES_0xF103_R |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### STAT_MODE_LISTE

| WERT | TEXT |
| --- | --- |
| 0x00 | ATC Pausiert |
| 0x01 | ATC aktiv |
| 0x80 | ATC Pausiert (Busfehler) |
| 0xFF | Wert ungültig |

### TABELLE_ERGEBNIS_EGOMODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Download erfolgreich. |
| 0x01 | Download fehlgeschlagen. |
| 0x02 | Download läuft. |
| 0x03 | Download kann nicht gestartet werden. |
| 0xFF | Nicht definiert. |

### TAB_ATC_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | ATC ein |
| 0x01 | ATC aus (pause) |
| 0xFF | Wert ungültig |

### TAB_BITMAPS

| WERT | TEXT |
| --- | --- |
| 0x00 | erfolgreich |
| 0x01 | fehlgeschlagen |
| 0x02 | läuft(mit Status in %) |
| 0x03 | nicht gestartet |
| 0xFF | nicht definiert |

### TAB_CALIB_ERROR

| WERT | TEXT |
| --- | --- |
| 0 | Justagefehler |
| 1 | Kalibrierungsfehler |

### TAB_CALIB_STAT

| WERT | TEXT |
| --- | --- |
| 0 | Nicht kalibiriert |
| 1 | Nicht kalibriert aufgrund Timeout |
| 2 | Nicht kalibriert aufgrund Fangbereich verlassen |
| 3 | Kalibriert (Übernahme Kamera) |
| 4 | Kalibriert (initial) |
| 5 | Kalibriert (vollständig) |

### TAB_CAMERAS

| WERT | TEXT |
| --- | --- |
| 0 | Rear Camera |
| 1 | Left Camera |
| 2 | Front camera |
| 3 | Right camera |
| 4 | All cameras |

### TAB_ECU_VARIANT

| WERT | TEXT |
| --- | --- |
| 0x00 | ICAM_RFK |
| 0x01 | ICAM_SVS |
| 0x02 | ICAM2_SVS |
| 0x03 | ICAM2_RFK |
| 0xFF | Ungültiger Wert |

### TAB_FUSI

| WERT | TEXT |
| --- | --- |
| 0 | MONHW_WDG_ERR_IWD_IMX6 |
| 1 | MONHW_WDG_ERR_FCT_IMX6 |
| 2 | MONHW_WDG_ERR_COM_IMX6 |
| 3 | MONHW_WDG_ERR_IWD |
| 4 | MONHW_WDG_ERR_FCT |
| 5 | MONHW_WDG_ERR_COM |
| 6 | MONHW_WDG_ERR_CLK |
| 7 | MONHW_WDG_ERR_CLK_IMX6 |
| 8 | MONHW_CMP_ERR_E2E_0x3001 |
| 9 | MONHW_CMP_ERR_E2E_0x3541 |
| 10 | MONHW_MMU_ERR_ACCESS_VIOLATION |
| 11 | MONHW_MCHK_ERR_ROM |
| 12 | MONHW_MCHK_ERR_RAM |
| 13 | MONHW_MCHK_ERR_SAFETY_RAM |
| 14 | MONHW_MCHK_ERR_SAFETY_ROM |
| 15 | MONHW_SOPT_ERR |

### TAB_IMAGEVIEW

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | 1IMAGEVIEW_FRONT |
| 0x02 | 1IMAGEVIEW_REAR |
| 0x03 | 1IMAGEVIEW_LEFT |
| 0x04 | 1IMAGEVIEW_RIGHT |
| 0x05 | 2IMAGEVIEW_FRONTREAR |
| 0x06 | 2IMAGEVIEW_LEFTRIGHT |
| 0x07 | 4IMAGEVIEW |

### TAB_INTERNAL_ERROR_RFK

| WERT | TEXT |
| --- | --- |
| 0x00 | unbelegt |
| 0x01 | ISW_VOLTAGE1V2_OUT_OF_RANGE |
| 0x02 | ISW_VOLTAGE1V8_OUT_OF_RANGE |
| 0x03 | ISW_VOLTAGE2V8_OUT_OF_RANGE |
| 0x04 | ISW_PLANT_DATA_INCOMPATIBLE |
| 0x05 | FEE_E_LAYOUT_FAILED |
| 0x06 | FLS_E_COMPARE_FAILED |
| 0x07 | FLS_E_ERASE_FAILED |
| 0x08 | FLS_E_READ_FAILED |
| 0x09 | FLS_E_WRITE_FAILED |
| 0x0A | INTERNAL_ECU_ERROR |
| 0x0B | FUSI_RAM_TEST_ERROR |

### TAB_INTERNAL_SW_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | unbelegt |
| 0x01 | NO_RAM_TEST |
| 0x02 | BSWM_E_ACTION_FAILED |
| 0x03 | ECUM_E_CONFIGURATION_DATA_INCONSISTENT |
| 0x04 | PDUR_E_INIT_FAILED |
| 0x05 | PDUR_E_PDU_INSTANCE_LOST |
| 0x06 | RBA_QUADSPI_ILLEGAL_ACCESS_DET |
| 0x07 | RBA_QUADSPI_MODE_M_FAIL |
| 0x08 | RBA_QUADSPI_PROT_WR_ATTEMPT |
| 0x09 | RBA_QUADSPI_READ_REJECT |
| 0x0A | RBA_QUADSPI_SRAM_FULL |
| 0x0B | RBA_QUADSPI_UNDERFLOW_DET |
| 0x0C | RBA_QUADSPI_XFER_LEVEL_BREACH |
| 0x0D | WDGM_E_IMPROPER_CALLER |
| 0x0E | WDGM_E_MONITORING |
| 0x0F | WDGM_E_SET_MODE |
| 0x10 | IM_EVENT_CONFIGURATION_TASK_ACTIVATION_ERROR |
| 0x11 | IM_EVENT_LOW_LEVEL_INITIALIZATION_FAILED_ERROR |
| 0x12 | IM_EVENT_INITIALIZATION_FAILED_ERROR |
| 0x13 | IM_EVENT_CONFIGURATION_FAILED_ERROR |
| 0x14 | IM_EVENT_ISL_SYS_CLOSE_FAILED_ERROR |
| 0x15 | IM_EVENT_DPM_DISCONNECT_ALL_FAILED_ERROR |
| 0x16 | IM_EVENT_UNFISH_PARAMETER_SETTING_FAILED_ERROR |
| 0x17 | IM_EVENT_ISL_CONNECTION_FAILED_ERROR |
| 0x18 | IM_EVENT_VIDEO_CONFIGURATION_STATIC_FAILED_ERROR |
| 0x19 | IM_EVENT_H264_ENCODER_CONFIGURATION_FAILED_ERROR |
| 0x1A | IM_EVENT_ISL_DPM_CONNECTION_FAILED_ERROR |
| 0x1B | IM_EVENT_CONNECT_H264MEMORY_TO_ETHERNET_FAILED_ERROR |
| 0x1C | IM_EVENT_ISL_DPM_CONNECTION_FAILED_ERROR |
| 0x1D | IM_EVENT_CONNECT_H264MEMORY_TO_ETHERNET_FAILED_ERROR |
| 0x1E | IM_EVENT_ISL_STATE_TRANSITION_FAILED_ERROR |
| 0x01F | IM_EVENT_H264_ENCODER_FAILED_ERROR |
| 0x20 | IM_EVENT_VSI0_DMA_FAILED_ERROR |
| 0x21 | IM_EVENT_VSI1_DMA_FAILED_ERROR |
| 0x22 | IM_EVENT_OPTICAL_FLOW_FAILED_ERROR |
| 0x23 | IM_EVENT_DPM_FAILED_ERROR |
| 0x24 | IM_EVENT_START_STREAMING_FAILED_ERROR |
| 0x25 | IM_EVENT_START_STREAMING_REQUEST_FAILED_ERROR |
| 0x26 | IM_EVENT_DPM_START_FAILED_ERROR |
| 0x27 | IM_EVENT_DPM_START_FAILED_ERROR |
| 0x28 | IM_EVENT_ISL_SYS_START_STREAMING_FAILED_ERROR |
| 0x29 | IM_EVENT_STOP_STREAMING_REQUEST_FAILED_ERROR |
| 0x2A | IM_EVENT_DPM_STOP_FAILED_ERROR |
| 0x2B | IM_EVENT_INVALID_DATA_FROM_RVIEW_ERROR |
| 0x2C | IM_EVENT_OVERLAY_TRANSFORMATION_UPDATE_WHILE_STREAMING_ERROR |
| 0x2D | IM_EVENT_OVERLAY_TRANSFORMATION_UPDATE_WHILE_STOPPED_ERROR |
| 0xFF | Wert ungültig |

### TAB_INT_SW_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x01 | Text |
| 0x02 | Text |
| 0x03 | Text |
| 0x04 | Text |
| 0xFF | ungültiger Wert |

### TAB_KAMERA_ICAM

| WERT | TEXT |
| --- | --- |
| 0x00 | Rear View Kamera |
| 0x01 | Top View Kamera links |
| 0x02 | Front View Kamera |
| 0x03 | Top View Kamera rechts |
| 0x04 | Alle Kameras |

### TAB_KAMERA_SW_CHECK

| WERT | TEXT |
| --- | --- |
| 0x00 | Kamera SW Ok |
| 0x01 | Kamera SW passt nicht zum SG |
| 0xFF | ungültig |

### TAB_KAMERA_TESTBILD

| WERT | TEXT |
| --- | --- |
| 0x01 | RV |
| 0x02 | TV_L |
| 0x03 | TV_R |
| 0x04 | SV_L |
| 0x05 | SV_R |
| 0x06 | FV |

### TAB_RCP

| WERT | TEXT |
| --- | --- |
| 0 | BEDIENUNG & ANZEIGE |
| 1 | FAHREN & FAHRBEREITSCHAFT |
| 2 | SCHLÜSSEL |
| 3 | UMFELDERFASSUNG |
| 4 | FUNKTIONSBEDINGUNGEN |
| 0xFF | Wert ungültig |

### TAB_RCP_ABBRUCHGRUND

| WERT | TEXT |
| --- | --- |
| 0 | Test |
| 1 | Fahrereingriff Fahrertür |
| 2 | Fahrereingriff Beifahrertür |
| 3 | Fahrereingriff Kofferraum |
| 0xFFFF | Wert ungültig |

### TAB_RCP_ERRORCODE

| WERT | TEXT |
| --- | --- |
| 0x90000001 | Display Schlüssel Batterie stark entladen. |
| 0x90000002 | Display Schlüssel Funkverbindung abgebrochen oder Verbindungsfehler. |
| 0x90000003 | Fehler bei der Schlüsselsuche. |
| 0x90000004 | Verschmutzung der Parksensoren vorne und hinten durch Dreck, Schnee oder Eis. |
| 0x90000005 | Verschmutzung der Parksensoren vorne durch Dreck, Schnee oder Eis. |
| 0x90000006 | Verschmutzung der Parksensoren hinten durch Dreck, Schnee oder Eis. |
| 0x90000007 | Defekt von Parksensoren vorne und hinten. |
| 0x90000008 | Defekt eines Parksensors vorne. |
| 0x90000009 | Defekt eines Parksensors hinten. |
| 0x90000010 | Verschmutzung der Frontkamera durch Dreck, Schnee oder Eis. |
| 0x90000011 | Verschmutzung der Kameras unten in den Außenspiegelgehäusen durch Dreck, Schnee oder Eis. |
| 0x90000012 | Defekt der Frontkamera. |
| 0x90000013 | Defekt der Kameras unten in den Außenspiegelgehäusen. |
| 0x90000014 | Hardware- bzw. Software-Problem im Fahrzeug. |
| 0x90000017 | Probleme mit Parkbremse, Parksperre, Stillstandsmanagement oder Bremskoordinator. |
| 0x90000018 | Sichern des Fahrzeugs gegen wegrollen nicht möglich. Defekt Parkbremse und Parksperre. |
| 0x90000019 | Fehler beim Ändern der Fahrstufe. |
| 0x90000020 | Fehler beim Herstellen oder Lösen Kraftschluss Antriebsstrang. |
| 0x90000021 | Fehler beim An- bzw. Abklappen der Außenspiegel. |
| 0x90000022 | Fehler beim Ein- bzw. Ausschalten des Fahrlichts.  |
| 0x90000023 | Fehler Türkontakt Fahrertüre. |
| 0x90000024 | Fehler Türkontakt Beifahrertüre. |
| 0x90000025 | Fehler Türkontakt Fahrertüre hinten. |
| 0x90000026 | Fehler Türkontakt Beifahrertüre hinten. |
| 0x90000027 | Fehler Kontakt Heckklappe. |
| 0x90000028 | Fehler Kontakt Motorhaube. |
| 0x90000029 | Fehler Position Cabrio-Dach. |
| 0x90000030 | Fehler Kontakt Heckscheibe. |
| 0x90000032 | Fehler Fahrzeugzustand. |
| 0x90000033 | Fahrzeug im Betriebsmodus Werkstatt (Energiesparmode). |
| 0x90000034 | Fahrzeug auf dem Rollenprüfstand. |
| 0x90000035 | Fehler Signal Betriebsmodus Rollenprüfstand. |
| 0x90000036 | Fehler Signal Längsneigung Fahrbahn. |
| 0x90000037 | Fehler Signal Querneigung Fahrbahn. |
| 0x90000038 | Fehler SAS Fahrdynamik (Längs- und Querdynamik). |
| 0x90000039 | Abbruch SAS Fahrdynamik (Längs- und Querdynamik). |
| 0x90000015 | Fehler Umfelderfassung Verfahrwegsbegrenzung. |
| 0x90000016 | Fehler Status Parksituationserkennung. |
| 0x91000001 | Funktionsaktivierung bei laufendem Motor. |
| 0x91000002 | Funktionsaktivierung ohne eingelegte Parksperre. |
| 0x91000003 | Konflikt mit anderer FAS-Funktion. |
| 0x91000004 | Parktaste losgelassen. |
| 0x91000005 | Keine Aktivität am Schlüssel länger als 30 Sekunden. |
| 0x91000006 | Keine Parklücke erkannt. |
| 0x91000007 | Funktionsaktivierung während der Fahrt. |
| 0x91000008 | Display Schlüssel außerhalb Nahbereich Fahrzeug. |
| 0x91000009 | Zweiter Schlüssel erkannt. |
| 0x9100000A | Display Schlüssel Position unbekannt. |
| 0x9100000B | Display Schlüssel im Innenraum. |
| 0x9100000C | Fahrertüre offen. |
| 0x9100000D | Beifahrertüre offen. |
| 0x9100000E | Türe hinten links offen. |
| 0x9100000F | Türe hinten rechts offen. |
| 0x91000010 | Kofferraum offen. |
| 0x91000011 | Motorhaube offen. |
| 0x91000012 | Kofferraumscheibe offen. |
| 0x91000013 | Kabriodach weder offen noch geschlossen. |
| 0x91000014 | Systemgrenze Außentemperatur. |
| 0x91000015 | Systemgrenze Fahrbahnbeschaffenheit. |
| 0x91000016 | Systemgrenze Fahrbahnbeschaffenheit mit Regeleingriff. |
| 0x91000017 | Systemgrenze Stufe. |
| 0x91000018 | Systemgrenze Rückrollen wegen Fahrbahnneigung. |
| 0x91000019 | Systemgrenze Fahrbahnneigung. |
| 0x9100001A | Systemgrenze Anhänger. |
| 0x9100001B | Systemgrenze maximaler Verfahrweg. |
| 0x9100001C | Systemgrenze Parklückenbreite.  |
| 0x9100001D | Fahrereingriff Lenkung. |
| 0x9100001E | Fahrereingriff Gaspedal. |
| 0x9100001F | Fahrereingriff Bremspedal. |
| 0x91000020 | Fahrereingriff Getriebe über Getriebe Wählhebel. |
| 0x91000021 | Fahrereingriff Parkbremse feststellen. |
| 0x91000022 | Fahrereingriff Parkbremse lösen. |
| 0x91000023 | Fahrereingriff DSC Modus. |
| 0x91000024 | Fahrereingriff. |
| 0x91000025 | Fahrertüre geöffnet. |
| 0x91000026 | Beifahrertüre geöffnet. |
| 0x91000027 | Türe hinten links geöffnet. |
| 0x91000028 | Türe hinten rechts geöffnet. |
| 0x91000029 | Kofferraum geöffnet. |
| 0x9100002A | Motorhaube geöffnet. |
| 0x9100002B | Kofferraumscheibe geöffnet. |
| 0x9100002C | Kabriodach geöffnet oder geschlossen. |
| 0x9100002D | Parksensoren vorne und hinten Störschall. |
| 0x9100002E | Parksensoren vorne Störschall. |
| 0x9100002F | Parksensoren hinten Störschall. |
| 0xFFFFFFFF | Ungültiger Wert |

### TAB_STAT_BITMAPS

| WERT | TEXT |
| --- | --- |
| 0x00 | erfolgreich |
| 0x01 | fehlgeschlagen |
| 0x02 | läuft |
| 0x03 | pausiert |
| 0x04 | nicht gestartet |
| 0x05 | löschen läuft |
| 0x06 | löschen fehlgeschlagen |
| 0x07 | löschen erfolgreich |
| 0x08 | löschen angefordert |
| 0xFF | nicht definiert |

### TAB_STAT_MODE_CALIB

| WERT | TEXT |
| --- | --- |
| 0 | ATC pausiert |
| 1 | ATC aktiviert |
| 2 | ATC pausiert (LowLight) |
| 3 | ATC pausiert (Vmax) |
| 4 | ATC pausiert (DiagJob) |
| 5 | ATC pausiert (RCP) |
| 6 | ATC pausiert (Lenkwinkel) |
| 9 | ATC pausiert (RFK View) |
| 10 | ATC pausiert (by Coding) |
| 128 | fehlerhaftes Bussignal |
| 0xFF | Wert ungültig |

### TAB_TRSVC_TESTBILD

| WERT | TEXT |
| --- | --- |
| 0x00 | REALBILD |
| 0x01 | TESTBILD |

### TEMPERATUR_ABSCHALTUNG

| WERT | TEXT |
| --- | --- |
| 0 | TEMP_PROT_OFF |
| 1 | TEMP_PROT_ON |

### TESTBILD_RFK2

| WERT | TEXT |
| --- | --- |
| 0 | STOPP_STREAMING |
| 1 | ISL_COLORBARMODES_SENSOR_FADEGRAY |
| 2 | ISL_COLORBARMODES_RX_FADEGRAY |
| 3 | REALBILD_UNFISHED |
| 4 | REALBILD_FISHEYE |
| 5 | NORMALBETRIEB |

### TSIGNALART

| WERT | TEXT |
| --- | --- |
| 0x01 | Realbild |
| 0x02 | Testbild |
| 0x03 | Signal abschalten |
| 0x04 | Testbild mit Alive Counter (ACNT) |
| 0x05 | Testbild mit stehendem ACNT |
| 0x06 | Testbild mit leicht gestörtem ACNT |
| 0x07 | Testbild mit stark gestörtem ACNT |
| 0x08 | Testbild mit leicht springendem ACNT |
| 0x09 | Testbild mit stark springendem ACNT |

### TVIDEOAUSGANG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Ausgänge |
| 0x0001 | Ausgang 1 |
| 0x0002 | Ausgang 2 |
| 0x0004 | Ausgang 3 |
| 0x0008 | Ausgang 4 |
| 0x0010 | Ausgang 5 |
| 0x0020 | Ausgang 6 |
| 0x0040 | Ausgang 7 |
| 0x0080 | Ausgang 8 |
| 0x0100 | Ausgang 9 |
| 0xFFFF | Nicht definiert |

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

### TAB_0X404C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x00A3 | 0x00A4 | 0x00A5 | 0x00A6 |

### TAB_0X405D

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR | UW27_NR | UW28_NR | UW29_NR | UW30_NR | UW31_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 | 0x0039 | 0x003A | 0x003B | 0x003C | 0x003D | 0x003E | 0x003F | 0x0040 |

### TAB_0X405E

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR | UW27_NR | UW28_NR | UW29_NR | UW30_NR | UW31_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | 0x0060 | 0x0061 | 0x0062 | 0x0063 | 0x0064 | 0x0065 | 0x0066 | 0x0067 | 0x0068 | 0x0069 | 0x006A | 0x006B | 0x006C | 0x006D | 0x006E | 0x006F | 0x0070 | 0x0071 | 0x0072 | 0x0073 | 0x0074 | 0x0075 | 0x0076 | 0x0077 | 0x0078 | 0x0079 | 0x007A | 0x007B | 0x007C | 0x007D | 0x007E |

### TAB_0X405F

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR | UW27_NR | UW28_NR | UW29_NR | UW30_NR | UW31_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | 0x0041 | 0x0042 | 0x0043 | 0x0044 | 0x0045 | 0x0046 | 0x0047 | 0x0048 | 0x0049 | 0x004A | 0x004B | 0x004C | 0x004D | 0x004E | 0x004F | 0x0050 | 0x0051 | 0x0052 | 0x0053 | 0x0054 | 0x0055 | 0x0056 | 0x0057 | 0x0058 | 0x0059 | 0x005A | 0x005B | 0x005C | 0x005D | 0x005E | 0x005F |

### TAB_0X4060

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR | UW17_NR | UW18_NR | UW19_NR | UW20_NR | UW21_NR | UW22_NR | UW23_NR | UW24_NR | UW25_NR | UW26_NR | UW27_NR | UW28_NR | UW29_NR | UW30_NR | UW31_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | 0x007F | 0x0080 | 0x0081 | 0x0082 | 0x0083 | 0x0084 | 0x0085 | 0x0086 | 0x0087 | 0x0088 | 0x0089 | 0x008A | 0x008B | 0x008C | 0x008D | 0x008E | 0x008F | 0x0090 | 0x0091 | 0x0092 | 0x0093 | 0x0094 | 0x0095 | 0x0096 | 0x0097 | 0x0098 | 0x0099 | 0x009A | 0x009B | 0x009C | 0x009D |

### TAB_0X4061

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 13 | 0x00A7 | 0x00A8 | 0x00A9 | 0x00AA | 0x00AB | 0x00AC | 0x00AD | 0x00AE | 0x00AF | 0x00B0 | 0x00B1 | 0x00B2 | 0x00B3 |

### TAB_0X4062

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x009E | 0x009F | 0x00A0 | 0x00A1 | 0x00A2 |

### WT_IMAGING_SUBSYSTEM_ERR

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbelegt |
| 0x01 | IM_SUBSYS_OVERL_TERANSF_UWSE |
| 0xFF | Wert ungültig |

### XVIEW3D_APPLICATION

| WERT | TEXT |
| --- | --- |
| 0 | Application wird durch State Machine gesteuert. (Default) |
| 1 | TopView/RearView |
| 2 | SideView |
