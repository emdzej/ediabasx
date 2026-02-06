# RSE_MGU.prg

## General

|  |  |
| --- | --- |
| File | RSE_MGU.prg |
| Type | PRG |
| Jobs | 57 |
| Tables | 192 |
| Origin | BMW EI-60 Viertel |
| Revision | 5.000 |
| Author | MAGNA-TELEMOTIVE-GMBH EE-624 Fruhstorfer |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Rear Seat Entertainment - Media Graphics Unit |  |  |
| ORIGIN | string | BMW EI-60 Viertel |  |  |
| REVISION | string | 5.000 |  |  |
| AUTHOR | string | MAGNA-TELEMOTIVE-GMBH EE-624 Fruhstorfer |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.988 |  |  |
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

### ECU_UID_LESEN

Auslesen der ECU-UID UDS   : $22   ReadDataByIdentifier UDS   : $8000 Sub-Parameter ECU-UID

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

### STATUS_SOFTWARENAME

Reads out the flashed Buildname

_No arguments._

### STATUS_EMMC_REGISTER_EXT_CSD

Returns the eMMC register extended device specific data which contain information about the device capabilities and selected modes. Introduced in standard v4.0

_No arguments._

### STATUS_EMMC_ERASE_COUNT

Returns the erase count (request CMD56 0x07) of the eMMC

_No arguments._

### STATUS_EMMC_BADBLOCK_COUNT

Returns the erase count (request CMD56 0x00) of the eMMC

_No arguments._

### STATUS_MMI_STATISTIK_LINKS

Lesen der MMI Statistik gzip Datei (RSE LINKS)

_No arguments._

### STATUS_MMI_STATISTIK_RECHTS

Lesen der MMI Statistik gzip Datei (RSE RECHTS)

_No arguments._

### STATUS_ATC_VERSION

Reads out the capability of the ATC diagnosis

_No arguments._

### STATUS_HWVARIANTE_NAME

Variante

_No arguments._

### STEUERN_CID_CODIERDATEN

Overwrites CID coding data in RAM. The original coding values are restored after reset.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DIM_CURVE_X1 | unsigned int | Value dim curve X1 |
| ARG_DIM_CURVE_X2 | unsigned int | Value dim curve X2 |
| ARG_DIM_CURVE_X3 | unsigned int | Value dim curve X3 |
| ARG_DIM_CURVE_Y1 | unsigned int | Value dim curve Y1 |
| ARG_DIM_CURVE_Y2 | unsigned int | Value dim curve Y2 |
| ARG_DIM_CURVE_Y3 | unsigned int | Value dim curve Y3 |
| ARG_DIM_TOLERANCE_ALPHA | unsigned char | Value dim tolerance alpha |
| ARG_DIM_TOLERANCE_ABS | unsigned char | Value dim tolerance abs |
| ARG_DIM_DIFF_GAIN | unsigned char | Value dim diff gain |
| ARG_DIM_DIFF_THRESHOLD | unsigned char | Value dim diff threshold |
| ARG_DIM_DIFF_BIAS | unsigned char | Value dim diff bias |
| ARG_DIM_DIFF_MAX | unsigned char | Value dim diff max |
| ARG_DIM_DIFF_MIN | unsigned char | Value dim diff min |
| ARG_DIM_UP_MIN | unsigned char | Value dim up min |
| ARG_DIM_DOWN_MIN | unsigned char | Value dim down min |
| ARG_DIM_MAX_OFFSET_BRIG | unsigned char | Value dim max offset brig |
| ARG_DIM_FADE_TIME_T0 | unsigned char | Value dim fade time T0 |
| ARG_DIM_FADE_TIME_T1 | unsigned char | Value dim fade time T1 |
| ARG_DIM_FADE_TIME_T2 | unsigned char | Value dim fade time T2 |
| ARG_DIM_FADE_EXPO_T1 | unsigned char | Value dim fade Expo T1 |
| ARG_DIM_FADE_EXPO_T2 | unsigned char | Value dim fade expo T2 |
| ARG_DIM_FILT_CHANGE_SENSITIVITY | unsigned int | Value dim filt change sensitvity |
| ARG_DIM_MIN_OFFSET_BRIG | unsigned char | Lower border of the brightness offset regulation range |
| ARG_ENDIANESS_ADAPTED | unsigned char | Indicates if the endianess of the coding data block has been adapted or not |
| ARG_PADDING | unsigned char | Padding for further use |

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

### STATUS_ETH_EXTENDED_ARL_TABLE

Returns the ARL table of all switch ports of the ECU. UDS   : $31 RoutineControl $01 StartRoutine $104E

_No arguments._

### STATUS_CERTIFICATE_MANAGEMENT_READOUT_STATUS

This job reads out the status of the certificate management extensive check

_No arguments._

### STATUS_APIX_PRBS_CHECK

The result value will be provided by APIX-Driver and contains PRBS counter value from CID

_No arguments._

### STATUS_APIX_PRBS_CHECK_RECHTS

The result value will be provided by APIX-Driver and contains PRBS counter value from CID

_No arguments._

### STEUERN_INTEL_DEBUG_TOKEN

Intel Debug Token

| Name | Type | Description |
| --- | --- | --- |
| ARG_INTEL_DEBUG_TOKEN | string | Debug Token |
| ARG_TRIGGER_KEYSTORE_REINT | unsigned char | 01 = Nein oder 00 = Ja, FF = Ungueltig |
| ARG_IMAGE_TYPE | unsigned char | 00 = Appl, 01 = Bootloder 02 = RSU.. |

### DIAGTUNNELLING_UDS

complete tunneling of UDS telegrams

| Name | Type | Description |
| --- | --- | --- |
| ARG_UDS | string | Haupt UDS stream ab ServiceID bsp.:21D02A |

### STEUERN_CID_GENERISCH_RECHTS

Sends commands to the CID module

| Name | Type | Description |
| --- | --- | --- |
| ARG_CID_GENERISCH | string | cmd string 'llllccccdd...' llll - len of the following cccc - 2 Bytes internal CID command code dd...- n bytes data in the request |
| STAT_CID_GENERISCH | string | result string |

### STEUERN_CID_GENERISCH

Sends commands to the CID module

| Name | Type | Description |
| --- | --- | --- |
| ARG_CID_GENERISCH | string | cmd string 'llllccccdd...' llll - len of the following cccc - 2 Bytes internal CID command code dd...- n bytes data in the request |
| STAT_CID_GENERISCH | string | result string |

### STEUERN_SOMEIP_TELEGRAM

This service writes the desired SOMEIP Config via a JSON file

| Name | Type | Description |
| --- | --- | --- |
| ARG_SOMEIP_TELEGRAM | binary | The parameter ARG_SOMEIP_TELEGRAM has n times the following structure 1 Byte SERVICE ID 1 Byte IS_INSTANCE_ID 1 Byte PORT 1 Byte IS_RELIABLE, 0x00 = False, 0x01 = True 1 Byte ENABLE_MAGIC_COOKIES, 0x00 = False, 0x01 = True |

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

### ARG_0X1032_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_STATE | + | - | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | - | - | Steuerung der TAS-Nutzung |

### ARG_0X1033_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_REQUEST | + | - | 0-n | high | unsigned int | - | TASU_REQUEST_TAB | - | - | - | - | - | auszuführendes Kommando |

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

### ARG_0X400B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | high | unsigned char | - | TAB_CID_TESTPICTURE_EXTENDED | - | - | - | - | - | Selection of extended test picture ID. The following Test picture IDs are not possible with Indigo2: 0x18 Color Bar 0x19 Horizontal Flicker Check 0x1A Vertical Flicker Check 0x1B 32 Grey Steps 0x1C 32 Grey Steps for RED 0x1D 32 Grey Steps for GREEN 0x1E 32 Grey Steps for BLUE |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RGB_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Video mode 0x00: Stop displaying test picture and return to video mode 0x01: Display requested test picture in corresponding RGB color |
| ARG_RGB_VALUE | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Desired RGB color in data format 0x00RRGGBB (RR=Red, GG=Green, BB=Blue) Range: [0x00000000-0x00FFFFFF] |

### ARG_0X400D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TEMP_COUNTERS01 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 01 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS02 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 02 of the CID. Range: [0x00 - 0x64] 0- 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS03 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 03 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS04 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 04 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |

### ARG_0X4015_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | high | unsigned char | - | TAB_CID_TESTPICTURE_EXTENDED | - | - | - | - | - | Auswahl erweiterter Testbild ID |

### ARG_0X4016_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RGB_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Video mode 0x00 stop displaying test picture and return to video mode 0x01 Display requested test picture in corresponding RGB color |
| ARG_RGB_VALUE | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Desired RGB color in data format 0x00RRGGBB  (RR=Red, GG=Green, BB=Blue) Range: [0x00000000 0x00FFFFFF] 0xFFFFFFFF Not defined |

### ARG_0X4018_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TEMP_COUNTERS01 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 01 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS02 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 02 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS03 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 03 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS04 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 04 of the CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF invalid value |

### ARG_0XA01E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | HEX | high | unsigned long | - | - | - | - | - | - | - | siehe Beschreibung auf englisch |

### ARG_0XA037_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TRACK | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | wählt die CD/DVD-Tracknummer die abgespielt werden soll |

### ARG_0XA03C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer in Sekunden, für die der Lüfter bei angefragter Drehzahl rotiert |
| ARG_RPM | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Umdrehungen pro Minute (ARG_RPM X 100 = RPM) |

### ARG_0XA0CA_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer in Sekunden, für die der Lüfter bei angefragter Drehzahl rotiert |

### ARG_0XA0DF_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PRBS_MODE | + | - | 0-n | high | unsigned char | - | TAB_PRBS_MODE | - | - | - | - | - | PRBS Zeitmodus |
| ARG_TIME_VALUE | + | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Im Falle eines flexiblen Zeitwert übergibt dieser Parameter den Zeitwert. Bereich: [0x00000000; 0xFFFFFFFF] Sekunden |

### ARG_0XA0FD_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEBUG_TOKEN | + | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | - | - | Debug Token, um den Debug Mode zu aktivieren. |

### ARG_0XA10C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_PRBS_MODE | + | - | 0-n | high | unsigned char | - | TAB_PRBS_MODE | - | - | - | - | - | PRBS Zeitmodus |
| ARG_TIME_VALUE | + | - | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Im Falle eines flexiblen Zeitwert übergibt dieser Parameter den Zeitwert. Bereich: [0x00000000; 0xFFFFFFFF] Sekunden |

### ARG_0XD0A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KLEER_DEVICE_ID | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | - | - | UID von dem zu assoziierten KLEER Gerät von z.B. Strichcode 12 Stellen ascii-hex-Code |
| ARG_KLEER_DEVICE_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | - | - | - | - | - | Art des zu verbindenden KLEER Geräts |

### ARG_0XD0AB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | - | unsigned char | - | TAB_TESTBILD_CID | - | - | - | - | - | Ausgabe des Testbild unabhängig von Signalen der HU |

### ARG_0XD0AC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VALUE | % | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe des PWM-Wert, mit welchem die Hintergrundbeleuchtung angesteuert werden soll: 0 = dunkel, 100 = hell |

### ARG_0XD0AD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_STOP | 0/1 | - | unsigned char | - | - | - | - | - | - | - | ist ein dummy Argument und ist immer 1 1 = Stop Diagnoseansteuerungen |

### ARG_0XD0B5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | - | - | - | - | - | Ein-/Ausschalten des Display per Diagnose mit Hintergrundbeleuchtung: 0 = AUS, 1 = EIN |

### ARG_0XD0BB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KLEER_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Aktiviert / deaktiviert das KLEER Modul. Werte aus der Tabelle TAB_OnOff |

### ARG_0XD226_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_EJECT | 0-n | - | unsigned char | - | TAB_ODD_EJECT | - | - | - | - | - | gibt an, welcher Eject ausgeführt werden soll |

### ARG_0XD25B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TOUCHINDICATOR | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | um Touch/Proximity Indikator zu aktivieren/ deaktivieren |

### ARG_0XD5C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | - | unsigned char | - | TAB_TESTBILD_CID | - | - | - | - | - | Ausgabe des Testbild unabhängig von Signalen der HU |

### ARG_0XD5C2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Ein- und Ausschalten des Display per Diagnose mit Hintergrundbeleuchtung |

### ARG_0XD5C4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VALUE | % | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Angabe des PWM-Wert, mit welchem die Hintergrundbeleuchtung angesteuert werden soll: 0% = dunkel, 100% = hell |

### ARG_0XD5C9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_STOP | 0/1 | - | unsigned char | - | - | - | - | - | - | - | is ein dummy Argument und es ist immer 1 1 = Stopp Diagnoseansteuerungen |

### ARG_0XD7BF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TOUCHINDICATOR | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | um Touch/Proximity Indikator zu aktivieren/ deaktivieren |

### ARG_0XF011_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KLEER_DEVICE_ID_TEXT | + | - | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | - | - | UID of the to-be-associated KLEER device from e.g. barcode  12 digits ascii-hex-code |

### ARG_0XF012_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CLASS | + | - | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | - | - | - | - | - | Klasse des Gerätes das gelöscht werden soll (Klassen der Geräte die gelöscht werden sollen) Werte aus Tabelle TAB_KleerDevices |

### ARG_0XF020_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SENSOR | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Nummer des Temperatur Sensors (1-5). |
| ARG_TEMP | + | - | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | simulierte Temperatur in °C |
| ARG_DURATION | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Simulationsdauer in Sekunden |

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

### CPU

| WERT | TEXT |
| --- | --- |
| 0x00 | Vehicle Controller |
| 0x01 | Entertainment Controller |

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
| 0x022600 | Energiesparmode aktiv | 0 | - |
| 0x022603 | Externe SWT-Prüfbedingung nicht erfüllt | 1 | - |
| 0x022604 | Interne SWT-Prüfung fehlgeschlagen | 0 | - |
| 0x022608 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x022609 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02260A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02260B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02260C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x022660 | RSU_CLIENT_HW_FEHLER | 0 | - |
| 0x022670 | IPSEC_NICHT_INITIALISIERT | 0 | - |
| 0x022671 | IPSEC_NICHT_VERRIEGELT | 0 | - |
| 0x022672 | IPSEC_FEHLER_AUFGETRETEN | 0 | - |
| 0x022680 | ZERTIFIKATE_UND_BINDINGS_TYP1_WERK_NICHT_BEREIT | 0 | - |
| 0x022681 | ONLINE_ZERTIFIKATE_UND_BINDINGS_TYP2_NICHT_BEREIT | 0 | - |
| 0x02FF26 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0xB7FC02 | CID rechts, Hardware Fehler: Ausfall Temperatursensor | 1 | - |
| 0xB7FC03 | CID rechts, Hardware Fehler: Ausfall UmgebungshelligkeitsSensor | 1 | - |
| 0xB7FC06 | CID links, Hardware Fehler: Touch Sensor Error | 1 | - |
| 0xB7FC07 | CID rechts, Hardware Fehler: Touch Sensor Error | 1 | - |
| 0xB7FC0D | CID rechts, Hardware Fehler: Fehler Betriebsspannungsmesspfad | 1 | - |
| 0xB7FC0E | CID rechts, Hardware Fehler: Ausfall CID-Kommunikation | 1 | - |
| 0xB7FC0F | CID rechts, Hardware Fehler: Ausfall Backlight-LEDs | 1 | - |
| 0xB7FC10 | CID rechts, Hardware Fehler: Checksummenfehler CID-Flashdaten | 1 | - |
| 0xB7FC11 | CID rechts, Übertemperatur: Helligkeitsreduzierung Backlight | 1 | - |
| 0xB7FC12 | CID rechts, Übertemperatur: Abschaltung Backlight | 1 | - |
| 0xB7FC13 | CID rechts: Überspannung Vcc | 1 | - |
| 0xB7FC14 | CID rechts: Unterspannung Vcc | 1 | - |
| 0xB7FC15 | CID rechts, Konfigurationsfehler: CID-Variante nicht kompatibel | 1 | - |
| 0xB7FC16 | ODD: Laufwerk defekt | 0 | - |
| 0xB7FC17 | CID rechts, Bilddaten Fehler: ungültig oder fehlerhaft | 1 | - |
| 0xB7FC18 | ODD: Datenträger Fehler | 1 | - |
| 0xB7FC1B | Modus: Externes Tracing aktiv | 0 | - |
| 0xB7FC1F | CID links, Hardware Fehler: Ausfall Temperatursensor | 1 | - |
| 0xB7FC20 | Spannungstemperaturmanagement: Interner Temperaturfehler | 0 | - |
| 0xB7FC22 | CID links, Hardware Fehler: Ausfall UmgebungshelligkeitsSensor | 1 | - |
| 0xB7FC23 | Spannungstemperaturmanagement: Externe Unterspannung | 1 | - |
| 0xB7FC24 | Spannungstemperaturmanagement: Externe Überspannung | 1 | - |
| 0xB7FC28 | Zertifikatsmanager: Backend-Zertifikate fehlerhaft | 1 | - |
| 0xB7FC2C | CID links, Hardware Fehler: Fehler Betriebsspannungsmesspfad | 1 | - |
| 0xB7FC2E | System: Flash File System fehlerhaft | 0 | - |
| 0xB7FC34 | CID links, Hardware Fehler: Ausfall CID-Kommunikation | 1 | - |
| 0xB7FC35 | CID links, Hardware Fehler: Ausfall Backlight-LEDs | 1 | - |
| 0xB7FC36 | CID links, Hardware Fehler: Checksummenfehler CID-Flashdaten | 1 | - |
| 0xB7FC37 | CID links, Übertemperatur: Helligkeitsreduzierung Backlight | 1 | - |
| 0xB7FC38 | CID links, Übertemperatur: Abschaltung Backlight | 1 | - |
| 0xB7FC39 | CID links: Überspannung Vcc | 1 | - |
| 0xB7FC3A | CID links: Unterspannung Vcc | 1 | - |
| 0xB7FC3B | CID links, Konfigurationsfehler: CID-Variante nicht kompatibel | 1 | - |
| 0xB7FC3C | CID links, Bilddaten Fehler: ungültig oder fehlerhaft | 1 | - |
| 0xB7FC40 | KLEER Modul rechts: Selbstdiagnose fehlgeschlagen | 0 | - |
| 0xB7FC41 | KLEER Modul links: Selbstdiagnose fehlgeschlagen | 0 | - |
| 0xB7FC42 | IO Taster links: Taste klemmt | 1 | - |
| 0xB7FC43 | IO Taster rechts: Taste klemmt | 1 | - |
| 0xB7FC44 | Modus: KLEER Modul deaktiviert | 0 | - |
| 0xB7FC46 | System: Kritische Recovery Funktion aktiviert | 1 | - |
| 0xB7FC47 | Bedienblende, USB: VBUS Kurzschluss | 0 | - |
| 0xB7FC48 | Modus: Debugging aktiv | 0 | - |
| 0xB7FC49 | HDCP: HDCP_schwerer Fehler | 1 | - |
| 0xB7FC4A | Security: Secure Time Backend Certificate Not Valid | 0 | - |
| 0xB7FC4B | Modus: SecureBoot deaktiviert | 0 | - |
| 0xB7FC4C | Zertifikatsmanager: ungültige Zertifikatssperrliste | 1 | - |
| 0xB7FCFC | Reset: Watchdog im I/O-Controller löst Fehler-Reset aus | 1 | - |
| 0xD28600 | Ethernet: physikalischer Fehler (link off) | 1 | - |
| 0xD28602 | Ethernet: Link-Qualität niedrig | 1 | - |
| 0xD28603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 | - |
| 0xD28BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
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
| 0x0011 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0012 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0013 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0014 | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0015 | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0016 | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0017 | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0018 | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0019 | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x001A | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x001B | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x001C | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x001D | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x001E | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x001F | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0020 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0021 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | - | - | - | - |
| 0x0022 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | - | - | - | - |
| 0x0023 | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | - | - | - | - |
| 0x0024 | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | - | - | - | - |
| 0x0025 | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | - | - | - | - |
| 0x0026 | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | - | - | - | - |
| 0x0027 | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | - | - | - | - |
| 0x0028 | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | - | - | - | - |
| 0x0029 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | - | - | - | - |
| 0x002A | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | - | - | - | - |
| 0x002B | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | - | - | - | - |
| 0x002C | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | - | - | - | - |
| 0x002D | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | - | - | - | - |
| 0x002E | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | - | - | - | - |
| 0x002F | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | - | - | - | - |
| 0x0030 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | - | - | - | - |
| 0x0032 | IPSEC_ATM02_STATUS | 0-n | High | 0x03 | TAB_DEFINITION_STATUS_ATM02 | - | - | - |
| 0x0033 | IPSEC_KOMBI_STATUS | 0-n | High | 0x0C | TAB_DEFINITION_STATUS_KOMBI | - | - | - |
| 0x0034 | IPSEC_MGU_STATUS | 0-n | High | 0x30 | TAB_DEFINITION_STATUS_MGU | - | - | - |
| 0x0035 | IPSEC_RSE_STATUS | 0-n | High | 0xC0 | TAB_DEFINITION_STATUS_RSE | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1756 | Signalqualität | TEXT | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1770 | STATUS_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1771 | STATUS_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1772 | STATUS_OTHER_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1773 | STATUS_ONLINE_CERTIFICATES | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1774 | STATUS_ONLINE_BINDINGS | 0-n | High | 0xFF | TAB_STATUS_BYTE_ENUM | - | - | - |
| 0x1775 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x25A1 | RSU_STEP_RETURNCODE | 0-n | High | 0xFF | TAB_RSU_RETURN_CODE | - | - | - |
| 0x4208 | Secondary DTC ID | TEXT | High | 4 | - | 1.0 | 1.0 | 0.0 |
| 0x421A | APPLICATION_NAME | TEXT | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x4228 | Dateipfad | TEXT | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x4245 | SENSOR_TEMP_1 | - | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS_MGU | - | - | - |
| 0x4266 | ERROR_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x4268 | ADDITIONAL_INFORMATION | TEXT | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x426E | HDCP_LINK | 0-n | High | 0xFF | _HDCP_LINK | - | - | - |
| 0x4272 | INTERNAL_ IOC_RESETS | HEX | High | unsigned char | - | - | - | - |
| 0x4273 | USER_ID | TEXT | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HDCP_CONNECTION_FAILURE_CAUSE

| WERT | TEXT |
| --- | --- |
| 0x01 | Displayfehler |
| 0x02 | Sperrliste |
| 0x03 | HDMI/MHL Gerätefehler |
| 0x04 | Miracast Gerätefehler |

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
| 0x022630 | Security Artifact Manipulation | 0 | - |
| 0x022631 | SW Manipulation | 0 | - |
| 0x022632 | Application Data Manipulation | 0 | - |
| 0x022634 | General Manipulation | 0 | - |
| 0x100000 | RSU_CLIENT_ABLAUFFEHLER_OFT | 0 | - |
| 0x100001 | RSU_CLIENT_ABLAUFFEHLER | 0 | - |
| 0x100005 | HDCP: HDCP_AKE Fehler | 0 | - |
| 0x100600 | ODD: SATA Initialisierungsfehler | 0 | - |
| 0x100601 | ODD: Initialisierung fehlgeschlagen | 0 | - |
| 0x100602 | ODD: Lademechanismus defekt | 0 | - |
| 0x100C01 | System: Crash | 0 | - |
| 0x100F00 | ODD: Medienerkennung fehlgeschlagen | 1 | - |
| 0x101795 | System: Software Konsistenzprüfung fehlgeschlagen | 0 | - |
| 0x1017A1 | Zertifikatsmanager: falscher Hub | 1 | - |
| 0x1017A2 | Zertifikatsmanager: ungültiges Signatur-Zertifikat oder Signatur | 1 | - |
| 0x1017A3 | Zertifikatsmanager: ungültiges Backend SubCA Zertifikat | 1 | - |
| 0x1017A4 | Zertifikatsmanager: ungültiges Backend Service Zertifikat | 1 | - |
| 0x1017A6 | Zertifikatsmanager: ungültige Daten vom Backend erhalten | 1 | - |
| 0x1017A7 | Security: Secure Time Not Obtained Within 20 Minutes | 0 | - |
| 0x802630 | Fehler der Fahrzeug-Security | 0 | - |
| 0xD28601 | Ethernet: CRC Fehler | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0031 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1760 | FSCSM_ERRORCODE | 0-n | High | 0xFF | FSCSM_ERRORCODE_TAB | - | - | - |
| 0x1761 | FILE_MANIPULATED | TEXT | High | 18 | - | 1.0 | 1.0 | 0.0 |
| 0x25A1 | RSU_STEP_RETURNCODE | 0-n | High | 0xFF | TAB_RSU_RETURN_CODE | - | - | - |
| 0x25A2 | RSU_HTTP_STATUSCODE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x421A | APPLICATION_NAME | TEXT | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x4227 | Media Typ | 0-n | High | 0xFF | MEDIA_TYPE | - | - | - |
| 0x4228 | Dateipfad | TEXT | High | 255 | - | 1.0 | 1.0 | 0.0 |
| 0x4240 | ECUID | 0-n | High | 0xFF | CPU | - | - | - |
| 0x426C | CRASH_ID | TEXT | High | 16 | - | 1.0 | 1.0 | 0.0 |
| 0x426E | HDCP_LINK | 0-n | High | 0xFF | _HDCP_LINK | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_00 |
| 0xXY | ERROR_UNKNOWN |

### MEDIA_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unknown |
| 0x01 | CD |
| 0x02 | DVD |
| 0x03 | BD |
| 0xFF | Wert ungültig |

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
| 0x44 | RSUSession |
| 0x4F | developmentSession |
| 0xFF | Wert ungültig |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ECU mehrmals programmierbar |
| 0x01 | ECU mindestens einmal vollstaendig programmierbar |
| 0x02 | ECU nicht mehr programmierbar |
| 0xff | ungültig |

### RES_0X1032_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASU_STATE | - | - | + | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | Steuerung der TAS-Nutzung |

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

### RES_0X10AB_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WORSTCASECHECKTIME_IN_S_WERT | + | - | - | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Worst Case Laufzeit in Sekunden |

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

### RES_0X25A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Version |
| STAT_PREPROCESSING_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | PreprocessingTime Maximale Dauer für RSU-Preprocessing. |
| STAT_OPEN_FILETRANSFER_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | OpenFiletransferTime Maximum Time for RSU-OpenFiletransfer |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime Maximale Dauer für RSU- CheckMemory. |
| STAT_CHECK_PROGRAMMING_DEPENDENCIES_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckProgrammingDependenciesTime |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Maximale Dauer für RSU-Reset inkl. Installation nichtredundanter SW-Anteile am Zielspeicherort. |
| STAT_ACTIVATION_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ActivationInstallationTime Maximale Dauer für Schritt Activation. Hinweis: Dieser Parameter wird ab Version 1.30 nicht ausge-wertet. |

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMB_SENSOR_WERT | lx | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient brightness of the local CID sensor (Lux).  Range: [0x0000 - 0x03E] 0 - 1000 Lux |
| STAT_BL_TEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Currently measured temperature of the backlight temperature sensor. Range: [0xD8 - 0x78] -40°C to 120°C 0x80 to 128°C  Sensor Failure |
| STAT_VCC_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vcc voltage of the CID in steps of 1/10 V Range: [0x0000 - 0xFFFE]  0xFFFF invalid |
| STAT_BACKLIGHT_DRIVER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Error status output pins of the backlight LED. Range: [0x00 - 0x03] 0xFF invalid |
| STAT_INT_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Contents of the Indigo register 'IntStatus' Range: [0x0000 - 0xFFFF] |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Major SW version of the CID |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minor SW version of the CID |
| STAT_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch version of the CID |

### RES_0X400F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_POWER_MODE | 0-n | high | unsigned char | - | TAB_STATUSCIDPOWERMODE | - | - | - | Indicates if the CID is enabled by the head unit power mode |
| STAT_ERROR_FLAGS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates which internal error are active.Range: [0x0000 - 0xFFFF] |
| STAT_MAIN_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDMAINSTATE | - | - | - | Main state of the CID state machine |
| STAT_OPERATION_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDOPERATIONSTATE | - | - | - | Operation state of the CID state machine |
| STAT_INIT_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDINITSTATE | - | - | - | Initialization (startup) state of the CID state machine |
| STAT_COM_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDCOMSTATE | - | - | - | State of the communication stack |
| STAT_SCHEDULE_ID | 0-n | high | unsigned char | - | TAB_STATUSCIDSCHEDULEID | - | - | - | Schedule ID of communication stack. Range: [0x00 - 0x04] 0xFF invalid |
| STAT_FADE_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDFADESTATE | - | - | - | Fading state of the dimming module |
| STAT_FLASH_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDFLASHSTATE | - | - | - | Flash reading state of the GDC module |
| STAT_FLASH_DATA_CHANGED | 0-n | high | unsigned char | - | TAB_STATUSCIDFLASHDATACHANGE | - | - | - | Indicates if the flash data of the connected CID has been changed and must be saved by the head unit |
| STAT_DISPLAY_VOLTAGE | 0-n | high | unsigned char | - | TCIDONOFFACTION | - | - | - | Activation state of the display power supply |
| STAT_DISPLAY_ENABLE | 0-n | high | unsigned char | - | TCIDONOFFACTION | - | - | - | Activation state of the complete CID (also contained in Status Monitor) |
| STAT_DISPLAY_READY | 0-n | high | unsigned char | - | TAB_CIDDISPLAYREADY | - | - | - | Indicated if CID is ready to display or not (also contained in Status Monitor) |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIM_CURVE_X1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point X1 of the dimming curve. |
| STAT_DIM_CURVE_X2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point X2 of the dimming curve. |
| STAT_DIM_CURVE_X3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point X3 of the dimming curve. |
| STAT_DIM_CURVE_Y1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point Y1 of the dimming curve. |
| STAT_DIM_CURVE_Y2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point Y2 of the dimming curve. |
| STAT_DIM_CURVE_Y3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Curve point Y3 of the dimming curve. |
| STAT_DIM_TOLERANCE_ALPHA_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Width of dimming module tolerance band (dynamic part) |
| STAT_DIM_TOLERANCE_ABS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Width of dimming module tolerance band (static part) |
| STAT_DIM_DIFF_GAIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Amplification factor for brightness deviation |
| STAT_DIM_DIFF_THRESHOLD_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Threshold for luminous density deviation |
| STAT_DIM_DIFF_BIAS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Decay constant for dynamic damping |
| STAT_DIM_DIFF_MAX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Maximum time constant for local photo sensor filtering |
| STAT_DIM_DIFF_MIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimum time constant for local photo sensor filtering |
| STAT_DIM_UP_MIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimum time constant of dark to bright regulation |
| STAT_DIM_DOWN_MIN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minimum time constant of bright to dark regulation |
| STAT_DIM_MAX_OFFSET_BRIG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Upper border of the brightness offset regulation range |
| STAT_DIM_FADE_TIME_T0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Death time before fading starts (resolution 100ms). Range: [0x00-0xFF] |
| STAT_DIM_FADE_TIME_T1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time to fade to current luminous density (resolution 100ms). Range: [0x00-0x3F] |
| STAT_DIM_FADE_TIME_T2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time to fade out (resolution 100ms). Range: [0x00-0x3F] |
| STAT_DIM_FADE_EXPO_T1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fade in ramp curve exponent. 0=linear, 1=square, ... Range: [0x00-0x04] |
| STAT_DIM_FADE_EXPO_T2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fade out ramp curve exponent. 0=linear, 1=square, ... Range: [0x00-0x04] |
| STAT_DIM_FILT_CHANGE_SENSITIVITY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adjusts the reaction on  strong signal changes depending on the time the input value is stable. 0 = no adjustment (old filter algorithm) 1-65535 = number of dim cycles the input value has to be stable Range: [0x0000-0xFFFF] |
| STAT_DIM_MIN_OFFSET_BRIG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lower border of the brightness offset regulation range |
| STAT_ENDIANESS_ADAPTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates if the endianess of the coding data block has been adapted or not |
| STAT_PADDING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Padding for further use |

### RES_0X4011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Value of the location in the car |
| STAT_PART_NR_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Value of the BMW part number. Byte 0...6= BMW Teilenummer |
| STAT_SUPPLIER_NR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Value of the supplier part number |
| STAT_SERIAL_NUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Value of the serial number. |
| STAT_PRODUCTION_YEAR_WERT | HEX | high | unsigned char | - | - | - | - | - | Year of production of the CID |
| STAT_PRODUCTION_MONTH_WERT | HEX | high | unsigned char | - | - | - | - | - | Month of production of the CID |
| STAT_PRODUCTION_DAY_WERT | HEX | high | unsigned char | - | - | - | - | - | Day of production of the CID |
| STAT_HARDWARE_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hardware version of the CID |
| STAT_DISPLAY_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Display version of the CID |
| STAT_MECHANICAL_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mechanical version of the CID |
| STAT_FLASH_DATA_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Flash data version of the CID |
| STAT_SCALER_FIRMWARE_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Scaler firmware Version |
| STAT_SCALER_CONFIGURATION_DATA_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten der Scaler-Konfiguration  |
| STAT_TOUCH_FIRMWARE_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Touch-Firmware |
| STAT_TOUCH_CONFIGURATION_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Touch-Konfiguration |
| STAT_PROXIMITY_FIRMWARE_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Proximity-Firmware |
| STAT_PROXIMITY_CONFIGURATION_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Proximity-Konfiguration |

### RES_0X4014_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMB_SENSOR_WERT | lx | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Umgebungshelligkeit des lokalen CID-Sensor (Lux). Range: [0x0000 - 0x03E8] 0 - 1000 Lux 0xFFFF invalide oder Sensor nicht implementiert |
| STAT_BL_TEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | aktuell gemessene Temperatur vom Temperatursensor der Hintergrundbeleuchtung. Range: [0xD8- 0x78] -40°C - 120°C 0x80; -128°C  Sensorfehler |
| STAT_VCC_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vcc vom CID in Schritten von 1/10 V Range: [0x0000 - 0xFFFE]  0xFFFF ungültig |
| STAT_DISPLAY_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Displayspannung in Schritten von 1/10 V Range: [0x0000 - 0xFFFE] 0xFFFF ungültig |
| STAT_BACKLIGT_DRIVER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehlerstatus-Ausgangspins der Hintergrundbeleuchtung LED. Range: [0x00 - 0x03] 0xFF ungültig |
| STAT_INT_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Inhalt des Indigo Register 'IntStatus' Range: [0x0000 - 0xFFFF] |

### RES_0X4017_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_THRESHOLDS01_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperaturschwelle 01 in 0 - 100°C |
| STAT_TEMP_THRESHOLDS02_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperaturschwelle 02 in 0 - 100°C |
| STAT_TEMP_THRESHOLDS03_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperaturschwelle 03 in 0 - 100°C |
| STAT_TEMP_THRESHOLDS04_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperaturschwelle 04 in 0 - 100°C |
| STAT_TEMP_COUNTERS01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler 01 vom CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF ungültiger Wert |
| STAT_TEMP_COUNTERS02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler 02 vom CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF ungültiger Wert |
| STAT_TEMP_COUNTERS03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler 03 vom CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF ungültiger Wert |
| STAT_TEMP_COUNTERS04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperaturzähler 04 vom CID. Range: [0x00 - 0x64] 0 - 100°C 0xFF ungültiger Wert |

### RES_0X4019_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_POWER_MODE | 0-n | high | unsigned char | - | TAB_STATUSCIDPOWERMODE | - | - | - | Indicates if the CID is enabled by the head unit power mode |
| STAT_ERROR_FLAGS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates which internal error are active.Range: [0x0000- 0xFFFF] |
| STAT_MAIN_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDMAINSTATE | - | - | - | Main state of the CID state machine |
| STAT_OPERATION_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDOPERATIONSTATE | - | - | - | Operation state of the CID state machine |
| STAT_INIT_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDINITSTATE | - | - | - | Initialization (startup) state of the CID state machine |
| STAT_COM_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDCOMSTATE | - | - | - | State of the communication stack |
| STAT_SCHEDULE_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schedule ID of communication stack. Range: [0x00 - 0x04] 0xFF invalid |
| STAT_FADE_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDFADESTATE | - | - | - | Fading state of the dimming module |
| STAT_FLASH_STATE | 0-n | high | unsigned char | - | TAB_STATUSCIDFLASHSTATE | - | - | - | Flash reading state of the GDC module |
| STAT_FLASH_DATA_CHANGED | 0-n | high | unsigned char | - | TAB_STATUSCIDFLASHDATACHANGE | - | - | - | Indicates if the flash data of the connected CID has been changed and must be saved by the head unit |
| STAT_DISPLAY_VOLTAGE | 0-n | high | unsigned char | - | TCIDONOFFACTION | - | - | - | Activation state of the display power supply |
| STAT_DISPLAY_ENABLE | 0-n | high | unsigned char | - | TCIDONOFFACTION | - | - | - | Activation state of the complete CID (also contained in Status Monitor) |
| STAT_DISPLAY_READY | 0-n | high | unsigned char | - | TAB_CIDDISPLAYREADY | - | - | - | Indicated if CID is ready to display or not (also contained in Status Monitor) |

### RES_0X401A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Value of the location in the car |
| STAT_PART_NR_TEXT | TEXT | high | string[7] | - | - | 1.0 | 1.0 | 0.0 | Value of the BMW alphanumeric part number Values will be passed in ASCII format. Must be converted in SGBD. Byte 0...6= BMW Teilenummer |
| STAT_SUPPLIER_NR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Value of the supplier part number |
| STAT_SERIAL_NUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Value of the serial number. |
| STAT_PRODUCTION_YEAR_WERT | HEX | high | unsigned char | - | - | - | - | - | Year of production of the CID |
| STAT_PRODUCTION_MONTH_WERT | HEX | high | unsigned char | - | - | - | - | - | Month of production of the CID |
| STAT_PRODUCTION_DAY_WERT | HEX | high | unsigned char | - | - | - | - | - | Day of production of the CID |
| STAT_HARDWARE_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hardware version of the CID |
| STAT_DISPLAY_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Display version of the CID |
| STAT_MECHANICAL_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mechanical version of the CID |
| STAT_FLASH_DATA_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Flash data version of the CID |
| STAT_SCALER_FIRMWARE_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Scaler firmware Version |
| STAT_SCALER_CONFIGURATION_DATA_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Daten der Scaler Version |
| STAT_TOUCH_FIRMWARE_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Touch-Firmware |
| STAT_TOUCH_CONFIGURATION_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Touch-Konfiguration |
| STAT_PROXIMITY_FIRMWARE_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Touch-Firmware |
| STAT_PROXIMITY_CONFIGURATION_VERSION_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Version der Proximity-Konfiguration |

### RES_0X4024_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISPLAY_AKTIVIERUNG | 0-n | - | unsigned char | - | TStatusDisplayActivationMode | - | - | - | Display-Aktivierung [uint8, 0x0 - 0xF]  (Signal ENB_DISP von Head Unit) |
| STAT_OFFSET_HELLIGKEIT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Offset Helligkeit [sint8, -127 bis +127 = -100 bis +100%, 128 = Ungültig, Fehlerwert]  (Signal OFFS_BRIG_FRT von Head Unit) |
| STAT_DIMMRAD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dimmrad-Stellung [uint8, 0 - 254 = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal CTR_ILUM_SW) |
| STAT_HELLIGKEIT_KOMBI_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Helligkeitswert I-Kombi-Helligkeits-Sensor [uint8, 0 - 254  = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal DSTN_LCD_LUM) |
| STAT_DAEMPFUNG_LCD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dämpfung LCD Leuchtdichte [uint8, 0 - 240 = schnell bis langsam, 241- 254 = sprunghaft, 255 = FF = Ungültig, Fehlerwert], Geschwindigkeit der Helligkeitsregelung (Signal DMPNG_LCD_LUM) |

### RES_0X4025_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert Verbauort im Fahrzeug |
| STAT_PART_NR_TEXT | TEXT | - | string[7] | - | - | 1.0 | 1.0 | 0.0 | BMW Teilenummer |

### RES_0X4030_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISPLAY_AKTIVIERUNG | 0-n | - | unsigned char | - | TStatusDisplayActivationMode | - | - | - | Display-Aktivierung [uint8, 0x0 - 0xF]  (Signal ENB_DISP von Head Unit) |
| STAT_OFFSET_HELLIGKEIT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Offset Helligkeit [sint8, -127 bis +127 = -100 bis +100%, 128 = Ungültig, Fehlerwert]  (Signal OFFS_BRIG_FRT von Head Unit) |
| STAT_DIMMRAD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dimmrad-Stellung [uint8, 0 - 254 = 0-100%, 255 = FF = unvalid, Fehlerwert]  (Signal CTR_ILUM_SW) |
| STAT_HELLIGKEIT_KOMBI_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Helligkeitswert I-Kombi-Helligkeits-Sensor [uint8, 0 - 254  = 0-100%, 255 = FF = unvalid, Fehlerwert]  (Signal DSTN_LCD_LUM) |
| STAT_DAEMPFUNG_LCD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dämpfung LCD Leuchtdichte [uint8, 0 - 240 = schnell - langsam, 241 - 254 = sprunghaft, 255 = FF = Ungültig, Fehlerwert], Geschwindigkeit der Helligkeitsregelung. (Signal DMPNG_LCD_LUM) |

### RES_0X4031_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CID Verbauort |
| STAT_PART_NR_TEXT | TEXT | - | string[7] | - | - | 1.0 | 1.0 | 0.0 | BMW Teilenummer Byte 0...6=BMW Teilenummer |

### RES_0X404A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POWERON_MINUTES_WERT | HEX | high | unsigned long | - | - | - | - | - | Power on in Minuten seit der Production der ECU. |
| STAT_LIFECYCLES_WERT | HEX | high | unsigned long | - | - | - | - | - | Lifecycles seit der Production der ECU. |

### RES_0X406B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_THRESHOLDS01_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 01 in 0-100°C |
| STAT_TEMP_THRESHOLDS02_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 02 in 0-100°C |
| STAT_TEMP_THRESHOLDS03_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 03 in 0-100°C |
| STAT_TEMP_THRESHOLDS04_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 04 in 0-100°C |
| STAT_TEMP_COUNTERS01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 01 of the CID. Range: [0x00-0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 02 of the CID. Range: [0x00-0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 03 of the CID. Range: [0x00-0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 04 of the CID. Range: [0x00-0x64] 0...100°C 0xFF invalid value |

### RES_0XA01E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TAB_VERBAUROUTINE | - | - | - | ausgeführte Testroutine(n) |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TAB_TESTSTATUS | - | - | - | gibt den Status des Verbautests wieder Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt |

### RES_0XA03C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | aktuelle Drehzahl des Lüfters in RPM. (RPM = STAT_LUEFTER_DREHZAHL_WERT * 100). (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### RES_0XA082_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_DATABASES | - | - | + | 0-n | high | unsigned char | - | TAB_PROCESS_STATUS | - | - | - | Ergebnis des Prozesses |

### RES_0XA0CA_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TAB_LUEFTERSTATUS | - | - | - | Status des Lüfters |

### RES_0XA0FD_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_CODE_WERT | + | + | + | HEX | high | unsigned char | - | - | - | - | - | Fehlercode |
| STAT_SECURITY_DEBUG_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status des Zugangs zur seriellen Schnittstelle |

### RES_0XA665_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEC_SYSTEM_TIME_TEXT | - | - | + | TEXT | high | string[18] | - | - | 1.0 | 1.0 | 0.0 | Linux System Zeit vom Backend |
| STAT_COUNTER_LAST_SYNC_WERT | - | - | + | HEX | high | unsigned long | - | - | - | - | - | Zähler letzte Syncronisation. |
| STAT_QUALITY_INDICATOR | - | - | + | 0-n | high | unsigned char | - | TAB_SECTIMEQUALITY | - | - | - | Secure Time Qualitätsmerkmal |
| STAT_QUERY_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_SECTIMEQUERYSTATUS | - | - | - | Status der letzten Anfrage |
| STAT_SEC_TIME_URL_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Verwendete URL für die Secure Time Backend Anfrage. |

### RES_0XA66F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SECURE_BOOT_STATE | + | - | - | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Rückgabe des SECURE_BOOT_STATE EIN wenn Secure Boot freigegeben ist. Rückgabe des SECURE_BOOT_STATE AUS wenn Secure Boot nicht freigegeben ist. |

### RES_0XA670_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ID um den Intel Debug Token via B2B zu generieren. |

### RES_0XA671_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ID zum generieren des BMW Debug Token via B2B. |

### RES_0XD00C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUTE_LAUFWERKE | 0-n | - | unsigned char | - | TAB_LAUFWERK | - | - | - | liest aus, welches Laufwerk verbaut ist |
| STAT_VENDORID_ODD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | gibt die VENDORID des optischen Laufwerks aus |
| STAT_PRODUCTID_ODD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | gibt die PRODUCTID des optischen Laufwerks aus |
| STAT_FIRMWARE_ODD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | gibt die Firmware-Version des optischen Laufwerks aus |

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

### RES_0XD02C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISC_IDENT_TEXT | TEXT | - | string[13] | - | - | 1.0 | 1.0 | 0.0 | Disk Identifier für das beinhaltete Medium |
| STAT_DIGITAL_PLAYBACK_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Qualität der digitalen Aufnahme:  0-1: Medium nicht lesbar (drive not ok) 2-8: Verzerrung / Stumm Stellen hörbar (drive not ok) 9-14: Medium lesbar, keine Verzerrung hörbar (drive ok) 15: Medium Qualität 100%, z.B. BLER 0 (drive ok) |

### RES_0XD0BB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLEER_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Aktiviert / deaktiviert das KLEER Modul. Werte aus der Tabelle TAB_OnOff |

### RES_0XD0D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTER_MEDIA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Medien des internen CD / DVD-Laufwerks |
| STAT_COUNTER_AUDIO_CDS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Audio-CDs (CDDA) des internen CD / DVD-Laufwerks |
| STAT_COUNTER_CD_ROM_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Audio-CD-ROMs (CD-R/-RW, DVD-R/-RW / + R / + RW ...) des internen CD / DVD-Laufwerks |
| STAT_COUNTER_DVD_VIDEO_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der eingelegten Video-DVDs des internen CD / DVD-Laufwerks |
| STAT_COUNTER_BLURAY_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Number of inserted Blu-ray-disks of the internal Blu-ray drive |
| STAT_RECOGNIZED_AUDIO_CDS_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Audio-CDs die von der Gracenote DB erkannt wurden |
| STAT_PLAYBACK_TIME_CD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | playback time for using the CD drive |
| STAT_PLAYBACK_TIME_DVD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | playback time for using the DVD drive |
| STAT_PLAYBACK_TIME_BLURAY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Playback time while using the Blu-ray drive in hours |

### RES_0XD0EC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLEER_DEVICE_1_UID_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | UID des verbundenen KLEER Geräts 12 digits hex-code |
| STAT_KLEER_DEVICE_1_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | - | - | - | Typ des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_1_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Name des KLEER Geräts |
| STAT_KLEER_DEVICE_1_BATTERY | 0-n | high | unsigned char | - | TAB_BATTERYSTATE | 1.0 | 1.0 | 0.0 | Batteriestatus des KLEER Geräts |
| STAT_KLEER_DEVICE_1_AUDIO_CHANNEL | 0-n | high | unsigned char | - | TAB_LEFTORRIGHT | - | - | - | Gibt an mit welchem Modul das KLEER Gerät verbunden worden ist. Werte aus Tabelle TAB_LeftOrRight |
| STAT_KLEER_DEVICE_1_CONNECTION_STATE | 0-n | high | unsigned char | - | TAB_CONNECTION_STATE | - | - | - | Verbindungsstatus des KLEER-Gerätes Werte aus Tabelle TAB_ CONNECTION_STATE |
| STAT_KLEER_DEVICE_2_UID_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | UID des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_2_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | 1.0 | 1.0 | 0.0 | Typ des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_2_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Name des KLEER Geräts |
| STAT_KLEER_DEVICE_2_BATTERY | 0-n | high | unsigned char | - | TAB_BATTERYSTATE | 1.0 | 1.0 | 0.0 | Batteriestatus des KLEER Geräts |
| STAT_KLEER_DEVICE_2_AUDIO_CHANNEL | 0-n | high | unsigned char | - | TAB_LEFTORRIGHT | - | - | - | Gibt an mit welchem Modul das KLEER Gerät verbunden worden ist. Werte aus Tabelle TAB_LeftOrRight |
| STAT_KLEER_DEVICE_2_CONNECTION_STATE | 0-n | high | unsigned char | - | TAB_CONNECTION_STATE | - | - | - | Verbindungsstatus des KLEER-Gerätes Werte aus Tabelle TAB_ CONNECTION_STATE |
| STAT_KLEER_DEVICE_3_UID_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | UID des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_3_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | 1.0 | 1.0 | 0.0 | Typ des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_3_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Name des KLEER Geräts |
| STAT_KLEER_DEVICE_3_BATTERY | 0-n | high | unsigned char | - | TAB_BATTERYSTATE | 1.0 | 1.0 | 0.0 | Batteriestatus des KLEER Geräts |
| STAT_KLEER_DEVICE_3_AUDIO_CHANNEL | 0-n | high | unsigned char | - | TAB_LEFTORRIGHT | - | - | - | Gibt an mit welchem Modul das KLEER Gerät verbunden worden ist. Werte aus Tabelle TAB_LeftOrRight |
| STAT_KLEER_DEVICE_3_CONNECTION_STATE | 0-n | high | unsigned char | - | TAB_CONNECTION_STATE | - | - | - | Verbindungsstatus des KLEER-Gerätes Werte aus Tabelle TAB_ CONNECTION_STATE |
| STAT_KLEER_DEVICE_4_UID_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | UID des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_4_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | - | - | - | Typ des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_4_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Name des KLEER Geräts |
| STAT_KLEER_DEVICE_4_BATTERY | 0-n | high | unsigned char | - | TAB_BATTERYSTATE | 1.0 | 1.0 | 0.0 | Batteriestatus des KLEER Geräts |
| STAT_KLEER_DEVICE_4_AUDIO_CHANNEL | 0-n | high | unsigned char | - | TAB_LEFTORRIGHT | - | - | - | Gibt an mit welchem Modul das KLEER Gerät verbunden worden ist. Werte aus Tabelle TAB_LeftOrRight |
| STAT_KLEER_DEVICE_4_CONNECTION_STATE | 0-n | high | unsigned char | - | TAB_CONNECTION_STATE | - | - | - | Verbindungsstatus des KLEER-Gerätes Werte aus Tabelle TAB_ CONNECTION_STATE |
| STAT_KLEER_DEVICE_5_UID_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | UID des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_5_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | 1.0 | 1.0 | 0.0 | Typ des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_5_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Name des KLEER Geräts |
| STAT_KLEER_DEVICE_5_BATTERY | 0-n | high | unsigned char | - | TAB_BATTERYSTATE | 1.0 | 1.0 | 0.0 | Batteriestatus des KLEER Geräts |
| STAT_KLEER_DEVICE_5_AUDIO_CHANNEL | 0-n | high | unsigned char | - | TAB_LEFTORRIGHT | - | - | - | Gibt an mit welchem Modul das KLEER Gerät verbunden worden ist. Werte aus Tabelle TAB_LeftOrRight |
| STAT_KLEER_DEVICE_5_CONNECTION_STATE | 0-n | high | unsigned char | - | TAB_CONNECTION_STATE | - | - | - | Verbindungsstatus des KLEER-Gerätes Werte aus Tabelle TAB_ CONNECTION_STATE |
| STAT_KLEER_DEVICE_6_UID_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | UID des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_6_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | 1.0 | 1.0 | 0.0 | Typ des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_6_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Name des KLEER Geräts |
| STAT_KLEER_DEVICE_6_BATTERY | 0-n | high | unsigned char | - | TAB_BATTERYSTATE | 1.0 | 1.0 | 0.0 | Batteriestatus des KLEER Geräts |
| STAT_KLEER_DEVICE_6_AUDIO_CHANNEL | 0-n | high | unsigned char | - | TAB_LEFTORRIGHT | - | - | - | Gibt an mit welchem Modul das KLEER Gerät verbunden worden ist. Werte aus Tabelle TAB_LeftOrRight |
| STAT_KLEER_DEVICE_6_CONNECTION_STATE | 0-n | high | unsigned char | - | TAB_CONNECTION_STATE | - | - | - | Verbindungsstatus des KLEER-Gerätes Werte aus Tabelle TAB_ CONNECTION_STATE |
| STAT_KLEER_DEVICE_7_UID_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | UID des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_7_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | 1.0 | 1.0 | 0.0 | Typ des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_7_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Name des KLEER Geräts |
| STAT_KLEER_DEVICE_7_BATTERY | 0-n | high | unsigned char | - | TAB_BATTERYSTATE | 1.0 | 1.0 | 0.0 | Batteriestatus des KLEER Geräts |
| STAT_KLEER_DEVICE_7_AUDIO_CHANNEL | 0-n | high | unsigned char | - | TAB_LEFTORRIGHT | - | - | - | Gibt an mit welchem Modul das KLEER Gerät verbunden worden ist. Werte aus Tabelle TAB_LeftOrRight |
| STAT_KLEER_DEVICE_7_CONNECTION_STATE | 0-n | high | unsigned char | - | TAB_CONNECTION_STATE | - | - | - | Verbindungsstatus des KLEER-Gerätes Werte aus Tabelle TAB_ CONNECTION_STATE |
| STAT_KLEER_DEVICE_8_UID_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | UID des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_8_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | 1.0 | 1.0 | 0.0 | Typ des verbundenen KLEER Geräts |
| STAT_KLEER_DEVICE_8_NAME_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Name des KLEER Geräts |
| STAT_KLEER_DEVICE_8_BATTERY | 0-n | high | unsigned char | - | TAB_BATTERYSTATE | 1.0 | 1.0 | 0.0 | Batteriestatus des KLEER Geräts |
| STAT_KLEER_DEVICE_8_AUDIO_CHANNEL | 0-n | high | unsigned char | - | TAB_LEFTORRIGHT | - | - | - | Gibt an mit welchem Modul das KLEER Gerät verbunden worden ist. Werte aus Tabelle TAB_LeftOrRight |
| STAT_KLEER_DEVICE_8_CONNECTION_STATE | 0-n | high | unsigned char | - | TAB_CONNECTION_STATE | - | - | - | Verbindungsstatus des KLEER-Gerätes Werte aus Tabelle TAB_ CONNECTION_STATE |

### RES_0XD27E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGISTER1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 1 |
| STAT_REGISTER2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 2 |
| STAT_REGISTER3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 3 |
| STAT_REGISTER4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 4 |
| STAT_REGISTER5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 5 |
| STAT_REGISTER6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 6 |
| STAT_REGISTER7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 7 |
| STAT_REGISTER8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 8 |
| STAT_REGISTER9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 9 |
| STAT_REGISTER10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 10 |
| STAT_REGISTER11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 11 |
| STAT_REGISTER12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 12 |
| STAT_REGISTER13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 13 |
| STAT_REGISTER14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 14 |
| STAT_REGISTER15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 15 |
| STAT_REGISTER16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 16 |
| STAT_REGISTER17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 17 |
| STAT_REGISTER18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 18 |
| STAT_REGISTER19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 19 |
| STAT_REGISTER20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register20 |
| STAT_REGISTER21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 21 |
| STAT_REGISTER22_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 22 |
| STAT_REGISTER23_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 23 |
| STAT_REGISTER24_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 24 |
| STAT_REGISTER25_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 25 |
| STAT_REGISTER26_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 26 |
| STAT_REGISTER27_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 27 |
| STAT_REGISTER28_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 28 |
| STAT_REGISTER29_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 29 |
| STAT_REGISTER30_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 30 |
| STAT_REGISTER31_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 31 |
| STAT_REGISTER32_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 32 |

### RES_0XDA91_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGISTER1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 1 |
| STAT_REGISTER2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 2 |
| STAT_REGISTER3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 3 |
| STAT_REGISTER4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 4 |
| STAT_REGISTER5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 5 |
| STAT_REGISTER6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 6 |
| STAT_REGISTER7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 7 |
| STAT_REGISTER8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 8 |
| STAT_REGISTER9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 9 |
| STAT_REGISTER10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 10 |
| STAT_REGISTER11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 11 |
| STAT_REGISTER12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 12 |
| STAT_REGISTER13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 13 |
| STAT_REGISTER14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 14 |
| STAT_REGISTER15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 15 |
| STAT_REGISTER16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 16 |
| STAT_REGISTER17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 17 |
| STAT_REGISTER18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 18 |
| STAT_REGISTER19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 19 |
| STAT_REGISTER20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register20 |
| STAT_REGISTER21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 21 |
| STAT_REGISTER22_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 22 |
| STAT_REGISTER23_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 23 |
| STAT_REGISTER24_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 24 |
| STAT_REGISTER25_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 25 |
| STAT_REGISTER26_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 26 |
| STAT_REGISTER27_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 27 |
| STAT_REGISTER28_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 28 |
| STAT_REGISTER29_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 29 |
| STAT_REGISTER30_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 30 |
| STAT_REGISTER31_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 31 |
| STAT_REGISTER32_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | aktueller Wert vom Register 32 |

### RES_0XF005_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INITIALISATION_COUNTER_REGION_CODE_DVD_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert Änderungszähler vom DVD Ländercode |
| STAT_INITIALISATION_COUNTER_REGION_CODE_BD_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert Änderungszähler vom DVD Ländercode |

### RES_0XF00F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLEER_ASSOCIATION_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status des Verbindungsprozess |

### RES_0XF01C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EXPORT_CORE_DUMPS | - | - | + | 0-n | high | unsigned char | - | TAB_PROCESS_STATUS | - | - | - | Status der exportiertenl core dumps |

### RES_0XF020_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BOARD_TEMP_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | gemessene Temperatur vom Board in Grad Celsius |
| STAT_SIMULATION_DURATION_1_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibende Simulationsdauer in Sekunden |
| STAT_CPU_TEMP_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | gemessene Temperatur von der CPU in Grad Celsius |
| STAT_SIMULATION_DURATION_2_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibende Simulationsdauer in Sekunden |
| STAT_HDD_TEMP_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | gemessene Temperatur von der HDD in Grad Celsius |
| STAT_SIMULATION_DURATION_3_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibende Simulationsdauer in Sekunden |
| STAT_OPTICAL_DISC_DRIVE_TEMP_WERT | - | - | + | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | gemessene Temperatur vom optischen Laufwerk in Grad Celsius |
| STAT_SIMULATION_DURATION_4_WERT | - | - | + | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibende Simulationsdauer in Sekunden |

### RES_0XFD5C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ETHERNET_WAKEUP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | EthernetWakeUpCounter |
| STAT_STARTUP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | StartupCounter |
| STAT_OPERATING_TIME_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | OperatingTimeCounter |
| STAT_RESET_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ResetCounter |
| STAT_FAN_STEP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | FanStepCounter |
| STAT_USB_PLUGIN_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | USBPlugInCounter |
| STAT_OPTICAL_LASER_DIOD_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | OpticalLaserDiodCounter |
| STAT_OPTICAL_INSERT_EJECT_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | OpticalInsertInjectCounter |
| STAT_BDROM_HIGH_POWER_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | BDROMHighPowerCounter |
| STAT_HDD_START_STOP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HDDStartStopCounter |
| STAT_HDD_SECTOR_RETRY_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HDDSectorRetryCounter |
| STAT_HDD_SEEK_ERROR_RATE_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HDDSeekErrorRateCounter |
| STAT_HDD_POWER_CYCLE_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | HDDPowerCycleCounter |
| STAT_RESERVE_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ReserveCounter |
| STAT_TEST_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | TestCounter |
| STAT_FRONT_KEY_WAKE_UP_COUNTER_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | FrontKeyWakeUpCounter |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXTERNAL_HSFZ | 0x1023 | - | DOORS-ID: FZHS_5992 | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1023_R | - |
| RESET_AKTIVIERUNGSLEITUNG | 0x1024 | - | Reset_Aktivierungsleitung DOORS-ID: FZHS_3798 | - | - | - | - | - | - | - | - | - | 31 | - | - |
| TASU_STEUERN_STATUS | 0x1032 | - | RID zum Steuern des TASU bzw. Abfragen von dessen Status. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1032_R | RES_0x1032_R |
| TAS_REQUEST | 0x1033 | - | Der RID wird verwendet, um ein Steuergerät zu veranlassen, einen Auftrag an den TAS zu schicken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1033_R | - |
| ETH_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_RESET_PORT_CONFIGURATION | 0x104A | - | Setzt die gespeicherte Portkonfiguration zurück. Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| CERTIFICATE_MANAGEMENT_START_CHECK | 0x10AB | - | Startet die detaillierte Überprüfung der steuergeräteindividuellen Zertifikate. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x10AB_R |
| IPSEC_START_KEY_EXCHANGE | 0x1111 | - | Startet den IPsec-Schlüsselaustausch. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1111_R |
| IPSEC_STOP_KEY_EXCHANGE | 0x1112 | - | Stoppt den IPsec-Schlüsselaustausch. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1112_R |
| IPSEC_LOCK_CONFIGURATION | 0x1113 | - | Verriegeln der IPsec-Konfiguration. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1113_R |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| ETH_LEARN_PORT_CONFIGURATION | 0x1803 | - | Gibt die gelernte Port-Konfiguration des SGs zurück.  Für ECUs mit mehr als 1 Port verpflichtend umzusetzen. Für ECUs mit 1 Port: Verpflichtend umzusetzen für SP2018 Steuergeräte, optional für SP2015 Steuergeräte. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1803_D |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RSU_FLASH_TIMING_PARAMTER | 0x25A0 | - | RSU_FLASH_TIMING_PARAMTER | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x25A0_D |
| SENSOR_WERTE | 0x400A | - | gefilterte interne Sensorwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| TESTBILD_ERWEITERT | 0x400B | - | Anzeige von Testbildern | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B_D | - |
| RGB_SCREEN | 0x400C | - | gewünschte Farbe des Bildes Test durch die RGB-Werte übergeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| TEMPERATURPROFIL_STEUERN | 0x400D | - | Temperaturschalter und die entsprechenden Temperaturgrenzwerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400D_D | - |
| CID_SW_VERSION | 0x400E | - | CID SW- Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E_D |
| INTERNAL_STATES | 0x400F | - | wichtiger interner Status vom CID SW Bus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400F_D |
| CID_CODIERDATEN | 0x4010 | - | Overwrites / Reads CID coding data in RAM temporarily | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| CID_DETAIL_INFORMATION_EXTENDED | 0x4011 | - | erweiterte logistische Information des CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011_D |
| SENSOR_WERTE_RECHTS | 0x4014 | - | gefilterte interne Sensorwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4014_D |
| TESTBILD_ERWEITERT_RECHTS | 0x4015 | - | Anzeige von Testbildern | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4015_D | - |
| RGB_SCREEN_RECHTS | 0x4016 | - | gewünschte Farbe des Testbildes durch die RGB-Werte übergeben | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4016_D | - |
| STATUS_TEMPERATURPROFIL_RECHTS | 0x4017 | - | Temperaturzähler und die entsprechenden Temperaturschwellen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4017_D |
| TEMPERATURPROFIL_RECHTS | 0x4018 | - | Temperaturzähler und die entsprechenden Temperaturgrenzwerte | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4018_D | - |
| INTERNAL_STATES_RECHTS | 0x4019 | - | liefert wichtige interne Zustandsgrößen der CID-Software | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4019_D |
| CID_DETAIL_INFORMATION_EXTENDED_RECHTS | 0x401A | - | erweiterte Logistikinformationen des aktuell verbundenen CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401A_D |
| CID_PHOTOSENSOR | 0x4020 | STAT_PHOTOSENSOR_CID_WERT | Analogwert Fototransistor im CID | lx | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_TEMP_BACKLIGHT | 0x4021 | STAT_TEMP_BACKLIGHT_WERT | Temperatur Hintergrundbeleuchtung | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_SOLLWERT | 0x4022 | STAT_HELLIGKEIT_SOLL_WERT | Soll-Helligkeitswert vom Dimm-Modul | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_ISTWERT | 0x4023 | STAT_HELLIGKEIT_IST_WERT | Ist-Helligkeitswert | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_EINGANGSWERTE_LESEN | 0x4024 | - | Returns all input values provided to the CID-SW from external ECUs via the HU car network interface or the HU itself.  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4024_D |
| CID_DETAIL_INFORMATION | 0x4025 | - | Returns the basic logistic information of the currently connected CID. This job is a mandatory diagnostic service of intelligent actors/sensors. The CID is rated as an intelligent actor/sensor. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4025_D |
| CID_PHOTOSENSOR_RECHTS | 0x402C | STAT_PHOTOSENSOR_CID_WERT | Analogwert Fototransistor im CID | lx | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_TEMP_BACKLIGHT_RECHTS | 0x402D | STAT_TEMP_BACKLIGHT_WERT | Temperatur Hintergrundbeleuchtung | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_SOLLWERT_RECHTS | 0x402E | STAT_HELLIGKEIT_SOLL_WERT | Soll-Helligkeitswert vom Dimm-Modul | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_ISTWERT_RECHTS | 0x402F | STAT_HELLIGKEIT_IST_WERT | Ist-Helligkeitswert | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_EINGANGSWERTE_LESEN_RECHTS | 0x4030 | - | Inputwerte der CID-SW | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4030_D |
| CID_DETAIL_INFORMATION_RECHTS | 0x4031 | - | Gibt die grundlegende logistische Informationen des aktuell verbundenen CID. Dieser Job ist ein Pflicht Diagnose-Service von intelligenten Aktoren / Sensoren. Das CID wird als intelligenter Sensor bewertet. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4031_D |
| POWERON | 0x404A | - | Power On und Lifecycles | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x404A_D |
| VERSORGUNGSSPANNUNG | 0x404B | STAT_MILLI_VOLT_WERT | Spannung in mV | mV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EMMC_REGISTER_CID | 0x404E | STAT_CID_REGISTER_DATA | Inhalt des Geräte-ID-Registers (CID-Register) des eMMC | DATA | - | High | data[16] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMPERATURPROFIL_STATUS | 0x406B | - | Rückgabe der entsprechenden Temperaturgrenzwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x406B_D |
| TEST_VERBAU | 0xA01E | - | Verbauprüfung der externen Anschlüsse | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01E_R | RES_0xA01E_R |
| TRACK_NUMBER | 0xA037 | - | CD/DVD-Tracknummer | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA037_R | - |
| LUEFTER_RPM | 0xA03C | - | Lüfter | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C_R | RES_0xA03C_R |
| FACTORY_RESET | 0xA082 | - | persönliche Telefoneinstellungen und API-Funktionen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA082_R |
| INTERNAL_TRACE_DISABLE_UNCONDITIONAL_TRACING | 0xA0BC | - | Legt das irreversible Flag für die Aktivierung der internen Ablaufverfolgung unter 255 km auf False. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LUEFTER | 0xA0CA | - | Lüftersteuerung | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0CA_R | RES_0xA0CA_R |
| APIX_PRBS_CHECK | 0xA0DF | - | PRBS Check in CID und HU | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0DF_R | - |
| SECURITY_DEBUG_MODE | 0xA0FD | - | Steuerung des Debug Mode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0FD_R | RES_0xA0FD_R |
| APIX_PRBS_CHECK_RECHTS | 0xA10C | - | Dieser Diagnosejob startet den PRBS (Pseudo-Random-Bit-Stream) Check in CID und HU | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA10C_R | - |
| SECURITY_GET_SECURE_TIME | 0xA665 | - | Secure Time from Backend | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA665_R |
| INTEL_KEYSTORE_INITIALIZE | 0xA66C | - | Reinitialisierung Intel Keystore  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| INTEL_DEBUG_TOKEN_DELETE | 0xA66E | - | Löschen des Intel Debug Token. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| INTEL_SECURE_BOOT | 0xA66F | - | Rückgabe des SECURE_BOOT_STATE  | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA66F_R |
| INTEL_DEBUG_TOKEN_ID | 0xA670 | - | ID um den Intel Debug Token zu generieren | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA670_R |
| SECURITY_DEBUG_MODE_ID | 0xA671 | - | ID zum generieren des BMW Debug Token. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA671_R |
| INITIALISIERUNG | 0xD004 | STAT_INITIALISIERUNG | Initialisierungsstatus | 0-n | - | - | unsigned char | TAB_INITIALISIERUNG | - | - | - | - | 22 | - | - |
| LESEN_LAUFWERK | 0xD00C | - | Verbau Laufwerke | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00C_D |
| APPLICATION | 0xD021 | - | Status aller freischaltbaren Applikationen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD021_D |
| CD_MD_CDC | 0xD02C | - | ID des Mediums und das Qualitätslevel der digitalen Aufnahme aus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD02C_D |
| TIME_AFTER_STARTUP | 0xD092 | STAT_TIME_AFTER_START_UP_WERT | Werte von 0-65535 [s], die angeben, wie viel Zeit seit dem Hochstarten (Aufwecken) vergangen ist | s | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLEER_ASSOCIATE_DEVICES | 0xD0A0 | - | Schreibt die UID und den Typ mit dem zu verbindenden KLEER Gerät in das KLEER Modul; Gibt das aktuell verbundene KLEER Gerät zurück | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0A0_D | - |
| CID_TESTBILD_RECHTS | 0xD0AB | - | Anzeige von RSE Testbildern | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0AB_D | - |
| CID_BACKLIGHT_RECHTS | 0xD0AC | - | CID Hintergrundbeleuchtung PWM level | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0AC_D | - |
| CID_STEUERN_ENDE_RECHTS | 0xD0AD | - | Beendet alle Diagnose-sessions durch Rücksetzen aller Parameter | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0AD_D | - |
| CID_STEUERN_RECHTS | 0xD0B5 | - | CID Display und Hintergrundlicht umschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0B5_D | - |
| KLEER_ACTIVATION | 0xD0BB | - | Aktivierungsstatus des Kleer Moduls | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0BB_D | RES_0xD0BB_D |
| MEDIA_STATISTIK | 0xD0D1 | - | CD/DVD Mediastatistik | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D1_D |
| DRIVE | 0xD0E2 | STAT_MEDIUM_INSERTED | Informationen, ob und welche Art von Datenträger im Laufwerk eingelegt ist. | 0-n | - | - | unsigned char | TAB_INSERTED_MEDIUM | - | - | - | - | 22 | - | - |
| KLEER_ASSOCIATED_DEVICES | 0xD0EC | - | gibt die derzeit zugeordneten KLEER Geräte zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0EC_D |
| EJECT | 0xD226 | - | wirft das Medium aus dem ausgewählten Laufwerk aus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD226_D | - |
| CID_TOUCHINDICATOR | 0xD25B | - | aktivieren/ deaktivieren des Touch/Proximity Indikators | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD25B_D | - |
| APIX_REGISTERS_TX | 0xD27E | - | Werte vom Konfigurationsregister und Statusregister der APIX-Geräte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD27E_D |
| CID_TESTBILD | 0xD5C1 | - | Testbild-Ausgabe vom CID | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C1_D | - |
| CID_STEUERN | 0xD5C2 | - | CID Display and CID Hintergrundbeleuchtung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C2_D | - |
| CID_BACKLIGHT | 0xD5C4 | - | Hintergrundbeleuchtung des CIDs | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C4_D | - |
| CID_STEUERN_ENDE | 0xD5C9 | - | CID Diagnosemode beenden | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C9_D | - |
| CID_TOUCHINDICATOR_RECHTS | 0xD7BF | - | Dieser Job startet den Touch/Proximity-Indikator in the CID | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD7BF_D | - |
| APIX_REGISTERS_TX_RECHTS | 0xDA91 | - | Dieser Diagnosejob stellt die aktuell verwendeten Werte vom Konfigurationsregister und Statusregister der APIX-Geräte zur Verfügung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA91_D |
| INITIALISATION_COUNTER_REGION_CODE | 0xF005 | - | region code | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF005_R |
| KLEER_ASSOCIATION_MODE | 0xF00F | - | Zuordnungsmodus der KLEER Module | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF00F_R |
| KLEER_DELETE_ASSOCIATED_DEVICE_BY_ID | 0xF011 | - | verbundenene Geräte mit festgelegter UID | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF011_R | - |
| KLEER_DELETE_ASSOCIATED_DEVICES_BY_CLASS | 0xF012 | - | verbundene Geräte definiert durch die Klasse | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF012_R | - |
| EXPORT_CORE_DUMPS | 0xF01C | - | Export der Core dumps | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF01C_R |
| SENSOR_TEMP | 0xF020 | - | Temperatur eines Sensors zu Simulations- und Testzwecken temporär auf beliebige Werte setzen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF020_R | RES_0xF020_R |
| SOMEIP_TELEGRAM_RESET | 0xF034 | - | Setzt das durch den Diag.-Job STEUERN_SOMEIOP_TELEGRAMM gesetztes someip Telegramm zurück.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| STATISTIC_COUNTERS | 0xFD5C | - | Statistikzähler | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xFD5C_R |

### TAB_APPLICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Sprachverarbeitung RoW |
| 0x01 | Navi Applikation RoW |
| 0x02 | Navi Karte |
| 0x03 | Log&Trace extern |
| 0x04 | CarPlay |
| 0x05 | Reinitialisation |
| 0x06 | Log&Trace intern |
| 0x07 | Touch Command |
| 0x08 | Navi Applikation Asien |
| 0x09 | IPSec ATM |
| 0x0A | IPSec Kombi |
| 0x0B | Sprachverarbeitung Asia |
| 0x0C | reserviert |
| 0x0D | reserviert |
| 0x0E | reserviert |
| 0x0F | reserviert |
| 0xFF | Wert ungültig |

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

### TAB_ATC_CAPABILITY

| WERT | TEXT |
| --- | --- |
| 0x00 | keine ATC Diagnose möglich |
| 0x01 | ATC Diagnose mit 12-Spur Messung |
| 0x02 | ATC Diagnose mit Jitter Messung |
| 0xFF | ungültiger Zustand |

### TAB_BATTERYSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verfügbar |
| 0x01 | Zwischen 0 und 20 Prozent |
| 0x02 | Zwischen 20 und 40 Prozent |
| 0x03 | Zwischen 40 und 60 Prozent |
| 0x04 | Zwischen 60 und 80 Prozent |
| 0x05 | Zwischen 80 und 100 Prozent |
| 0xFF | nicht definiert |

### TAB_CIDDISPLAYREADY

| WERT | TEXT |
| --- | --- |
| 0x00 | not ready |
| 0x01 | ready |
| 0xFF | not defined |

### TAB_CID_TESTPICTURE_EXTENDED

| WERT | TEXT |
| --- | --- |
| 0x01 | Black picture |
| 0x02 | Blue picture |
| 0x03 | Red picture |
| 0x04 | Green picture |
| 0x05 | No-Signal-Screen |
| 0x06 | White L64 |
| 0x07 | Yellow |
| 0x08 | Cyan |
| 0x09 | Magenta |
| 0x0A | Grey L6 |
| 0x0B | Grey L10 |
| 0x0C | Grey L14 |
| 0x0D | Grey L18 |
| 0x0E | Grey L22 |
| 0x0F | Grey L26 |
| 0x10 | Grey L30 |
| 0x11 | Grey L35 |
| 0x12 | Grey L39 |
| 0x13 | Grey L43 |
| 0x14 | Grey L47 |
| 0x15 | Grey L51 |
| 0x16 | Grey L55 |
| 0x17 | Grey L59 |
| 0x18 | Color Bar |
| 0x19 | Horizontal Flicker Check |
| 0x1A | Vertical Flicker Check |
| 0x1B | 32 Grey Steps |
| 0x1C | 32 Grey Steps for RED |
| 0x1D | 32 Grey Steps for GREEN |
| 0x1E | 32 Grey Steps for BLUE |
| 0xFF | Not defined |

### TAB_CONNECTION_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verbunden |
| 0x01 | verbunden |
| 0xFF | nicht definiert |

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

### TAB_FALSE_TRUE

| WERT | TEXT |
| --- | --- |
| 0x00 | false |
| 0x01 | true |

### TAB_INITIALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | IO initialisiert |
| 0xFF | nicht definiert |

### TAB_INSERTED_MEDIUM

| WERT | TEXT |
| --- | --- |
| 0x00 | No medium inserted |
| 0x01 | Medium recognition in progress |
| 0x02 | CD medium inserted |
| 0x03 | DVD medium inserted |
| 0x04 | Blu-ray medium inserted |
| 0xF0 | Medium ejected, but not removed |
| 0xF1 | Medium blocked |
| 0xFF | Not defined |

### TAB_JA_NEIN

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |
| 0xFF | Wert ungültig |

### TAB_KLEERDEVICES

| WERT | TEXT |
| --- | --- |
| 0x00 | unbekannt |
| 0x01 | Fernsteuerung |
| 0x02 | Kopfhörer |
| 0x04 | Headset |
| 0x03 | Fernsteuerung + Kopfhörer |
| 0x05 | Fernsteuerung + Headset |
| 0x06 | Kopfhörer + Headset |
| 0x07 | Fernsteuerung + Kopfhörer + Headset |
| 0xFF | nicht definiert |

### TAB_LAUFWERK

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Laufwerk |
| 0x01 | ODD |
| 0xFF | nicht definiert |

### TAB_LEFTORRIGHT

| WERT | TEXT |
| --- | --- |
| 0x00 | keinem |
| 0x01 | rechten |
| 0x02 | linken |
| 0xFF | nicht definiert |

### TAB_LUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter läuft, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter läuft mit der erwarteteten Drehzahl |
| 0xFF | nicht definiert |

### TAB_ODD_EJECT

| WERT | TEXT |
| --- | --- |
| 0x00 | ODD standard eject |
| 0x01 | ODD emergency eject |

### TAB_ONOFF

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | NICHT DEFINIERT |

### TAB_PRBS_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Default time value will be used (1 minute) |
| 0x01 | Flexible time value in seconds will be used |

### TAB_PROCESS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Prozess nicht gestartet |
| 0x01 | Prozess läuft |
| 0x02 | Prozess beendet ohne Fehler |
| 0x03 | Prozess beendet mit Fehler |
| 0xFF | nicht definiert |

### TAB_RECOVERY_STEPS_MGU

| WERT | TEXT |
| --- | --- |
| 0x00 | Loeschen der oeffentlichen applikativen Daten |
| 0x01 | Loeschen aller oeffentlichen Daten |
| 0x02 | Loeschen der persoenlichen applikativen Daten |
| 0x03 | Loeschen aller persoenlichen Daten |
| 0x04 | Reset zu den Werkseinstellungen |
| 0xFF | Wert ungültig |

### TAB_RSU_RETURN_CODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Erfolgreich |
| 0x01 | Zugriff auf Konfigurationstabelle nicht möglich |
| 0x02 | CheckProgrammingDependency Flags nicht vorhanden |
| 0x03 | Preprocessing Flag nicht vorhanden |
| 0x04 | Zugriff auf Schreibflags nicht möglich |
| 0x05 | Aktivierungsflag geschrieben und Reset verzögert |
| 0x06 | Zertifikat bereits benutzt |
| 0x07 | Zertifikat aktuell nicht gültig |
| 0x08 | Version des Zertifikats nicht unterstützt |
| 0x09 | Alte SWE unbekannt |
| 0x10 | Dateizugriff vom Master gesperrt |
| 0x11 | Dateiübertragung läuft noch |
| 0x12 | Preprocessing läuft |
| 0x13 | Fehler beim Speicherzugriff |
| 0x14 | Speicherinitialisierung fehlgeschlagen |
| 0x15 | Nicht genügend Speicher |
| 0x16 | Zugriff auf SWE nicht möglich |
| 0x17 | Keine konsistente SWE gefunden |
| 0x18 | Keine gültige neue SWE gefunden |
| 0x19 | Entschlüsselung der SWE fehlgeschlagen |
| 0x20 | Descriptor der neuen SWE unbekannt |
| 0x21 | Deltaalgorithmus der SWE fehlgeschlagen |
| 0x22 | Prüfung der SWE-Signatur fehlgeschlagen |
| 0x23 | Fehler in SWE-Signatur und Löschen fehlgeschlagen |
| 0x24 | Keine konsistente SWE gefunden und Löschen fehlgeschlagen |
| 0x25 | Signaturprüfung fehlgeschlagen |
| 0x26 | Protokollversion nicht unterstützt |
| 0x27 | Flags aus Signaturprüfung nicht vorhanden |
| 0x28 | Signaturprüfung des Zertifikats fehlgeschlagen |
| 0x29 | Falsche VIN |
| 0x30 | Verbindung zum Master nicht möglich |
| 0x31 | Übertragung vom Client abgebrochen |
| 0x32 | Übertragung vom Master abgebrochen |
| 0x33 | Fingerprint konnte nicht geschrieben werden |
| 0x34 | Reset, starte Download neu |
| 0x40 | CheckMemory läuft |
| 0x41 | CheckProgrammingDependencies läuft |
| 0xFF | Unbekannter Fehler |

### TAB_SECTIMEQUALITY

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Zeit verfügbar |
| 0x01 | Zeit unsicher |
| 0x02 | Zeit sicher |
| 0x03 | Zeit sicher und präzise |
| 0xFF | Wert ungültig |

### TAB_SECTIMEQUERYSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht gestartet |
| 0x01 | Läuft |
| 0x02 | Okay |
| 0x03 | Zertifikat Fehler |
| 0x04 | Keine Verbindung zum Backend |
| 0x05 | Verbindung zum Backend okay aber keine Zeit vorhanden. |
| 0xFF | Wert ungültig |

### TAB_STATUSCIDCOMSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDCOM_OK |
| 0x01 | CIDCOM_CRC_ERROR |
| 0x02 | CIDCOM_NO_SYNC |
| 0x03 | CIDCOM_NO_COM |
| 0xFF | not defined |

### TAB_STATUSCIDFADESTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDDIM_FADE_DISPLAY_OFF |
| 0x01 | CIDDIM_FADE_DISPLAY_T0 |
| 0x02 | CIDDIM_FADE_DISPLAY_T1 |
| 0x03 | CIDDIM_FADE_DISPLAY_ON |
| 0x04 | CIDDIM_FADE_DISPLAY_T2 |
| 0xFF | not defined |

### TAB_STATUSCIDFLASHDATACHANGE

| WERT | TEXT |
| --- | --- |
| 0x00 | not changed |
| 0x01 | changed |
| 0xFF | not defined |

### TAB_STATUSCIDFLASHSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDGDC_FLASH_IDLE |
| 0x01 | CIDGDC_FLASH_BUSY |
| 0x02 | CIDGDC_FLASH_READY |
| 0x03 | CIDGDC_FLASH_CRC_OK |
| 0x04 | CIDGDC_FLASH_CRC_NOK |
| 0xFF | not defined |

### TAB_STATUSCIDINITSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDMAIN_SYNC_INITSTATE |
| 0x01 | CIDMAIN_UNLOCK_INITSTATE |
| 0x02 | CIDMAIN_READ_BASICFLASHDATA_INITSTATE |
| 0x03 | CIDMAIN_READ_ALLFLASHDATA_INITSTATE |
| 0x04 | CIDMAIN_WAIT_FOR_TIMING_INITSTATE |
| 0xFF | not defined |

### TAB_STATUSCIDMAINSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDMAIN_STARTUP_STATE |
| 0x01 | CIDMAIN_CID_OFF_STATE |
| 0x02 | CIDMAIN_CID_ON_STATE |
| 0x03 | CIDMAIN_FLASHDATA_ERROR_STATE |
| 0x04 | CIDMAIN_COMM_FAIL_STATE |
| 0x05 | CIDMAIN_DIAGFLASH_STATE |
| 0xFF | not defined |

### TAB_STATUSCIDOPERATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDMAIN_VIDEO_OPSTATE |
| 0x01 | CIDMAIN_TESTPIC_OPSTATE |
| 0x02 | CIDMAIN_BLACK_PANEL_OPSTATE |
| 0x03 | CIDMAIN_DISPLAY_ON_OPSTATE |
| 0x04 | CIDMAIN_DISPLAY_OFF_OPSTATE |
| 0xFF | not defined |

### TAB_STATUSCIDPOWERMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | Standby |
| 0x02 | On |
| 0xFF | Invalid |

### TAB_STATUSCIDSCHEDULEID

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDCOM_SCHEDULE_READ_FLASH |
| 0x01 | CIDCOM_SCHEDULE_SYNC |
| 0x02 | CIDCOM_SCHEDULE_CHECK_COM |
| 0x03 | CIDCOM_SCHEDULE_READ_SENSORS |
| 0x04 | CIDCOM_SCHEDULE_ON |
| 0xFF | Wert ungültig |

### TAB_STATUS_BYTE_ENUM

| WERT | TEXT |
| --- | --- |
| 0x00 | Überprüfung erfolgreich. |
| 0x01 | Überprüfung noch nicht durchgeführt. |
| 0x02 | Ein Formatfehler ist aufgetreten. |
| 0x03 | Keine Daten zur Prüfung vorhanden. |
| 0x04 | Daten sind nicht vollständig. |
| 0x05 | Signaturprüfung fehlgeschlagen. |
| 0x06 | Bindings passen nicht zur VIN17. |
| 0x07 | Überprüfung läuft. |
| 0xFF | Ein unbekannter Fehler ist aufgetreten. |

### TAB_STATUS_ENTRY

| WERT | TEXT |
| --- | --- |
| 0x00 | nichtFinal && gültig |
| 0x01 | nichtFinal && nichtGültig |
| 0x02 | final && gültig |
| 0x03 | final && nichtGültig |
| 0xFF | Wert ungültig |

### TAB_STATUS_IPSEC

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | ERROR |
| 0x02 | OPERATION_ALREADY_RUNNING |
| 0x03 | FORBIDDEN |
| 0xFF | Wert ungültig |

### TAB_STATUS_MMI_STATISTIK

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler Zeitüberschreitung PreProcessing  |
| 0x02 | Fehler bei der Datenübertragung |
| 0x03 | Fehler Zeitüberschreitung PostProcessing |
| 0xFF | Wert ungültig |

### TAB_TESTBILD_CID

| WERT | TEXT |
| --- | --- |
| 0x00 | Normales Bild |
| 0x01 | Schwarzes Bild |
| 0x02 | Blaues Bild |
| 0x03 | Rotes Bild |
| 0x04 | Grünes Bild |
| 0x05 | No Signal Bild |
| 0xFF | Nicht definiert |

### TAB_TESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0xFF | Nicht definiert |

### TAB_VERBAUROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0x00001000 | Verbindung RSE zum linken CID |
| 0x00002000 | Verbindung RSE zum rechten CID |
| 0x01000000 | RSE Verbindung zum I / O-Taster links |
| 0x02000000 | RSE Verbindung zum I / O-Taster rechts |
| 0xFFFFFFFF | nicht definiert |

### TASU_REQUEST_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | <Kurzbeschreibung TAS-Auftrag 0> |
| 0x01 | <Kurzbeschreibung TAS-Auftrag 1> |
| 0x02 | <Kurzbeschreibung TAS-Auftrag 2> |

### TASU_STEUERN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Auftraege an den TAS nicht blockiert (Default bei Fehlen des Arguments) |
| 0x01 | Auftraege an den TAS temporaer bis zum naechsten Aufstart blockiert |
| 0x02 | Auftraege an den TAS persistent ueber den Aufstart hinaus blockiert |
| 0xFF | Wert ungültig |

### TCIDONOFFACTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | On |
| 0xFF | not defined |

### TSTATUSDISPLAYACTIVATIONMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CID aus |
| 0x01 | CID an |
| 0xFF | nicht definiert |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 |

### TAB_0X1753

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0031 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 |

### TAB_0X1775

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0032 | 0x0033 | 0x0034 | 0x0035 |

### UNEXPECTED_LINK_UP_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | für unbelegte Ports kein Link-up festgestellt bzw. Link auf Port zulässig |
| 1 | Link-up auf eigentlich unbelegtem Port festgestellt |

### _HDCP_LINK

| WERT | TEXT |
| --- | --- |
| 0x00 | APIX_MGU_CID |
| 0x01 | APIX_RSE_FOMO_L |
| 0x02 | APIX_RSE_FOMO_R |
| 0x03 | WIFI_MIRACAST |
| 0x04 | RSE_HDMI |
| 0x05 | ETH_MGU_RSE |
| 0x06 | ETH_RAM_MGU |
| 0xFF | Wert ungültig |

### TATCVERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | no ATC diagnosis possible |
| 0x01 | ATC diagnosis with track 12 measurement |
| 0x02 | ATC diagnosis with jitter measurement |
| 0xFF | Nicht definiert |

### DEVUDS_HWNAME

| WERT | NAME | HU |
| --- | --- | --- |
| 0x00000000 | unknown | unknown |
| 00000DF5 | NBT High ECE (B069) | NBT |
| 00000DF6 | NBT Full ECE (B067) (DAB) | NBT |
| 00000DF7 | NBT Full US (B073) | NBT |
| 00000DF8 | NBT Full Japan (B069) | NBT |
| 00000DF9 | NBT Basic ECE (only C1 sample!) | NBT |
| 00001018 | NBT High China/Asia (B116, HW=B069) | NBT |
| 00001019 | NBT High China local content (B107, HW=B069) | NBT |
| 0000101A | NBT Full Korea (B108, HW=B067) | NBT |
| 0000101B | NBT Full US Alpine (B???, HW=B073) | NBT |
| 00001294 | NBT Basic1 ECE (B113) | NBT |
| 00001295 | NBT Basic2 ECE (B068) | NBT |
| 00001296 | NBT Basic US Harman (B114) | NBT |
| 00001297 | NBT Basic Alpine (B115) | NBT |
| 00001A44 | NBT Basic2 ECE OL (B123, no drive) | NBT |
| 00001A45 | NBT Basic2 ECE DAB OL (B124, no drive) | NBT |
| 000018C2 | NBT Basic2 ECE DAB OL (B124, no drive) | NBT |
| 000018C3 | NBT Basic US OL (B125, no drive) | NBT |
| 00001A41 | NBT Basic2 China/Asia (B126, HW=B123) | NBT |
| 00001A43 | NBT Basic2 Korea (B127, HW=B124) | NBT |
| 00001A42 | NBT Basic2 Japan (B128) | NBT |
| 000022E3 | NBTevo ECE HIGH Rueko | NBTevo |
| 000022E4 | NBTevo ECE FULL Rueko | NBTevo |
| 000022E5 | NBTevo US FULL Rueko | NBTevo |
| 000022E6 | NBTevo ECE HIGH ASIA Alpine Rueko | NBTevo |
| 000022E7 | NBTevo ECE FULL KOREA Alpine Rueko | NBTevo |
| 000022E8 | NBTevo JAPAN Rueko | NBTevo |
| 000026B9 | NBTevo ECE HIGH 21 ID5 | NBTevo |
| 00002479 | NBTevo ECE FULL ID5 | NBTevo |
| 000026BB | NBTevo ECE FULL KOREA Alpine ID5 | NBTevo |
| 0000247B | NBTevo JAPAN ID5 | NBTevo |
| 00001EF3 | NBTevo ASIA 20 35up (no MOST, GPS, Video) | NBTevo |
| 00002C14 | NBTevo ECE 20 35up (no MOST, GPS, Video) | NBTevo |
| 000026BA | NBTevo ECE HIGH ASIA FULL Alpine 35up | NBTevo |
| 0000247A | NBTevo US FULL 35up | NBTevo |
| 00002FC2 | NBTevo ECE 10 ID5 Rueko (no GPS) | NBTevo |
| 00002FC3 | NBTevo ECE 11 ID5 Rueko  | NBTevo |
| 00002FC4 | NBTevo US 10 ID5 Rueko (no GPS) | NBTevo |
| 00002FC5 | NBTevo ASIA 10 ID5 Rueko (no GPS) | NBTevo |
| 00002AB8 | NBTevo ECE FULL KOREA OL ID5 Rueko | NBTevo |
| 00002AB9 | NBTevo JAPAN OL ID5 Rueko | NBTevo |
| 00003A09 | NBTevo ECE High OL ID5 Rueko | NBTevo |
| 00003A0A | NBTevo ECE Full OL ID5 Rueko | NBTevo |
| 00003A0B | NBTevo US OL ID5 Rueko | NBTevo |
| 00003A0C | NBTevo AsIA OL ID5 Rueko | NBTevo |
| 000031DC | NBTevo ECE HIGH OL ID4 Rueko | NBTevo |
| 000031DD | NBTevo ECE FULL OL ID4 Rueko | NBTevo |
| 000031DE | NBTevo US OL ID4 Rueko | NBTevo |
| 000031DF | NBTevo ASIA OL ID4 Rueko | NBTevo |
| 000031E0 | NBTevo ECE FULL KOREA OL ID4 Rueko | NBTevo |
| 000031E1 | NBTevo JAPAN OL ID4 Rueko | NBTevo |
| 00000E66 | NBT RSE BMW (B075) | NBT |
| 00000F5E | NBT RSE Rolls Royce (B109) | NBT |
| 00001EF7 | NBTevo RSE BMW (Bxxx) | RSEevo |
| 00001EFB | NBTevo RSE Rolls Royce (Bxxx) | RSEevo |
| 00001703 | ENTRYNAV_ECE 01FF04 (SKU23,DAB,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS ) | ENAV |
| 00001704 | ENTRYNAV_ECE 011F05 (SKU23,3USB,BT30,WLAN,2MIC,2CVBS) | ENAV |
| 00001705 | ENTRYNAV_ECE 010406 (SKU24,1USB,BT21,1MIC) | ENAV |
| 00001706 | ENTRYNAV_US 115F07 (SKU23,MOST,3USB,BT30,WLAN,2MIC,2CVBS,SDARS) | ENAV |
| 00001707 | ENTRYMEDIA_ECE 00FF08 (SKU25,DAB,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS ) | ENAV |
| 00001708 | ENTRYMEDIA_ECE 000409 (SKU5,1USB,BT21,1MIC) | ENAV |
| 00001709 | ENTRYMEDIA_US 10C510 (SKU5,CD,MOST,1USB,BT21,1MIC,1CVBS,SDARS) | ENAV |
| 000019F8 | ENTRYMEDIA_US 10DF12 (SKU25,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS,SDARS) | ENAV |
| 000019FB | ENTRYMEDIA_CHN LC 20DF27 (B137)(SKU25,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS) | ENAV |
| 000019FC | ENTRYNAV_CHN LC 21DF29 (B139)(SKU23,CD,MOST,3USB,BT30,WLAN,2MIC,2CVBS) | ENAV |
| 000019F7 | ENTRYMEDIA_ECE 00DF11 (SUK25,CD,MOST,3USB,WLAN,2MICIN,2CVBS) | ENAV |
| 000019F9 | ENTRYNAV_ECE 01E513 (SUK24,DAB,CD,MOST,USB,CVBS) | ENAV |
| 00002747 | ENTRYMED_ECE 008416 (SUK5,CD,USB,BT21) | ENAV |
| 00002748 | ENTRYMED_ECE 00C517 (SUK5,CD,MOST,USB,CVBS) | ENAV |
| 0000274D | ENTRYNAV_ECE 01C522 (SUK24,CD,MOST,USB,CVBS) | ENAV |
| 000019FA | ENTRYNAV_ECE 01DF14 (SKU23,CD,MOST,3USB,2CVBS,WLAN,2MICIN) | ENAV |
| 0000274C | ENTRYNAV_ECE 013F21 (SKU23,DAB,3USB,WLAN,2MICN,2CVBS) | ENAV |
| 0000274E | ENTRYNAV_ECE 01C423 (SKU24,CD,MOST,USB) | ENAV |
| 00002750 | ENTRYNAV_US 11DF25 (SKU23,SDARS,CD,MOST,3USB,WLAN,2MICIN,2CVBS) | ENAV |
| 0000274F | ENTRYNAV_US 110524 (SKU23,SDARS,USB,CVBS) | ENAV |
| 00002753 | ENTRYNAV_CHN LC 21D434 (B234)(SKU23,CD,MOST,3USB) | ENAV |
| 00002754 | ENTRYNAV_CHN LC 211432 (B235)(SKU23,MOST,3USB) | ENAV |
| 00002746 | ENTRYMED_ECE 006515 (SKU5,DAB,MOST,USB,CVBS) | ENAV |
| 00002749 | ENTRYMED_ECE 004518 (SKU5,MOST,USB,CVBS) | ENAV |
| 00002751 | ENTRYMED_ECE 008030 (SKU5,CD,USB) | ENAV |
| 0000274B | ENTRYMED_US 108520 (SKU5,CD,USB,CVBS) | ENAV |
| 0000274A | ENTRYMED_US 100519 (SKU5,USB,CVBS) | ENAV |
| 00002755 | ENTRYMED_CHN LC 20D433 (B232)(SKU25,CD,MOST,3USB) | ENAV |
| 00002752 | ENTRYMED_CHN LC 201431 (B233)(SKU25,3USB) | ENAV |
| 0000277C | EntryEvo Nav ECE Full (CD,DAB,GPS,Most,USB1,USB2,BT,WLAN,2xMicIn,Video,OABR,Ethernet) | EntryEvo |
| 0000277D | EntryEvo Nav US Full  (CD,SDARS,IBOC,GPS,Most,USB1,USB2,BT,WLAN,2xMicIn,Video,OABR,Ethernet) | EntryEvo |
| 00002F4F | EntryEvo Media ECE Full (USB1,BT,Video,OABR,Ethernet) | EntryEvo |
| 00002F50 | EntryEvo Media US Full  (SDARS,IBOC,USB1,BT,Video,OABR) | EntryEvo |
| 000036C8 | EntryEvoMed ECE 0380  (USB1,BT,Video,OABR) | EntryEvo |
| 000036C9 | EntryEvoMed ECE 03F9  (DAB MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000036CA | EntryEvoMed ECE 03FB  (DAB MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1 CD) | EntryEvo |
| 000036CB | EntryEvoNav ECE 0782  (CD CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000036CC | EntryEvoNav ECE 07FF  (DAB CD NAV_GPS MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000036CD | EntryEvoMed US 1382  (SDARS,IBOC,USB1,BT,Video,OABR,CD) | EntryEvo |
| 000036CE | EntryEvoMed US 13F8   (SDARS IBOC MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000036CF | EntryEvoMed US 13FA   (US SDARS IBOC CD MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 00003A05 | EntryEvoMed US 17FA  (SDARS,IBOC,USB2,HW_NAV,MOST,WLAN,2MICIN,BT,Video,OABR) | EntryEvo |
| 00003A06 | EntryEvoMed US 17FC  (SDARS,IBOC,USB2,HW_NAV,MOST,WLAN,2MICIN,BT,Video,OABR) | EntryEvo |
| 000040D5 | EntryEvoMed ECE 0302  (CD ETH OABR1 BT USB1) | EntryEvo |
| 000040EA | EntryEvoMed ECE 03F0  (USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000040E9 | EntryEvoMed ECE 0372  (USB2 WLAN 2MICIN ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000040E8 | EntryEvoMed ECE 038B  (DAB CD MOST CVBS1 ETH OABR1 BT USB1) | EntryEvo |
| 000040E7 | EntryEvoMed ECE 0200  (OABR1 BT USB1) | EntryEvo |
| 000040E6 | EntryEvoMed ECE 0100  (ETH BT USB1) | EntryEvo |
| 000040E5 | EntryEvoMed ECE 0102  (CD ETH BT USB1) | EntryEvo |
| 000040E4 | EntryEvoNav ECE 07F4  (NAV_GPS USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040E3 | EntryEvoNav ECE 0776  (CD NAV_GPS USB2 WLAN 2MICIN ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040E2 | EntryEvoNav ECE 07FD  (DAB NAV_GPS MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040E1 | EntryEvoMed US 1200   (SDARS IBOC OABR1 BT USB1) | EntryEvo |
| 000040E0 | EntryEvoNav US  17FC  (SDARS IBOC CD MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040DF | EntryEvoNav US  17FA  (US SDARS IBOC NAV_GPS MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040DE | EntryEvoMed CHI 2382  (CHI CD CVBS1 ETH OABR1 BT USB1) | EntryEvo |
| 000040DD | EntryEvoMed CHI 23F8  (CHI MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000040DC | EntryEvoMed CHI 23FA  (CHI CD MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 RAM-2GB BT USB1) | EntryEvo |
| 000040DB | EntryEvoMed CHI 2200  (CHI OABR1 BT USB1) | EntryEvo |
| 000040DA | EntryEvoMed CHI 2300  (CHI ETH OABR1 BT USB1) | EntryEvo |
| 000040D9 | EntryEvoNav CHI 2780  (CHI CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040D8 | EntryEvoNav CHI 2782  (CHI CD CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040D7 | EntryEvoNav CHI 27F8  (CHI MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 000040D6 | EntryEvoNav CHI 27FA  (CHI CD MOST USB2 WLAN 2MICIN CVBS1 ETH OABR1 HW_NAV RAM-2GB BT USB1) | EntryEvo |
| 00003E5F | MGU High (CPU high, 6GB RAM, 32GB eMMC, HDD, WLAN, GPS, USB2, USB3, OABR 5Port, CVBS) | MGU |
| 00003E68 | RSE MGU (CPU high, 8GB RAM, 32GB eMMC, BlueRay, Kleer, MHL, Videotelefoni) | RSE_MGU |
| 0xFFFFFFFF | unknown | unknown |

### DEVUDS_HWVERSION_NBT

| WERT | NAME |
| --- | --- |
| 001.004.004 | 12-07 NBT C2 HW Harman HW4  |
| 002.004.004 | 12-07 NBT C2 HW Alpine HW4  |
| 001.005.005 | 12-07 NBT D1 HW Harman HW5  |
| 002.005.005 | 12-07 NBT D1 HW Alpine HW5  |
| 001.006.006 | 12-07 NBT D2 HW Harman HW6  |
| 002.006.006 | 12-07 NBT D2 HW Alpine HW6  |
| 001.007.007 | 12-07 NBT D3 HW Harman HW7  |
| 002.007.007 | 12-07 NBT D3 HW Alpine HW7  |
| 001.008.008 | 13-03 NBT D3 HW Harman HW8  |
| 002.008.008 | 13-03 NBT D3 HW Alpine HW8  |
| 001.020.020 | 13-07 C1 NBT HW Harman HW20 |
| 002.020.020 | 13-07 C1 NBT HW Alpine HW20 |
| 001.021.021 | 13-07 D NBT HW Harman HW21 |
| 002.021.021 | 13-07 D NBT HW Alpine HW21 |
| 001.022.022 | 13-09 D NBT HW Harman HW22 |
| 002.022.022 | 13-09 D NBT HW Alpine HW22 |
| 001.031.031 | 14-09 D NBT HW Harman HW31 |
| 002.031.031 | 14-09 D NBT HW Alpine HW31 |
| 0xFFFFFFFF | unknown NBT HW |

### DEVUDS_HWVERSION_NBTEVO

| WERT | NAME |
| --- | --- |
| 001.001.001 | 14-11 B1 NBTevo HW Harman HW1.1 (FPGA) |
| 002.001.001 | 14-11 B1 NBTevo HW Alpine HW1.1 (FPGA) |
| 001.001.002 | 14-11 B3 NBTevo HW Harman HW1.2 (FPGA) |
| 002.001.002 | 14-11 B3 NBTevo HW Alpine HW1.2 (FPGA) |
| 001.001.003 | 14-11 B4 NBTevo HW Harman HW1.3 (FPGA) |
| 002.001.003 | 14-11 B4 NBTevo HW Alpine HW1.3 (FPGA) |
| 001.001.004 | 14-11 C1 NBTevo HW Harman HW1.4 (FPGA) |
| 002.001.004 | 14-11 C1 NBTevo HW Alpine HW1.4 (FPGA) |
| 001.001.005 | 14-11 D1 NBTevo HW Harman HW1.5 (FPGA) |
| 002.001.005 | 14-11 D1 NBTevo HW Alpine HW1.5 (FPGA) |
| 001.001.006 | 14-11 D1 NBTevo HW Harman HW1.6 (FPGA) |
| 002.001.006 | 14-11 D1 NBTevo HW Alpine HW1.6 (FPGA) |
| 001.002.001 | 15-07 D1 NBTevo HW Harman HW2.1 (ASIC) |
| 002.002.001 | 15-07 D1 NBTevo HW Alpine HW2.1 (ASIC) |
| 001.002.002 | 15-07 D1 NBTevo HW Harman HW2.2 (ASIC) |
| 002.002.002 | 15-07 D1 NBTevo HW Alpine HW2.2 (ASIC) |
| 001.002.003 | 15-07 D1 NBTevo HW Harman HW2.3 (ASIC) |
| 002.002.003 | 15-07 D1 NBTevo HW Alpine HW2.3 (ASIC) |
| 001.003.001 | 16-07 D1 NBTevo HW Harman HW3.1 (ASIC) |
| 002.003.001 | 16-07 D1 NBTevo HW Alpine HW3.1 (ASIC) |
| 0xFFFFFFFF | unknown NBTevo HW |

### DEVUDS_HWVERSION_RSEEVO

| WERT | NAME |
| --- | --- |
| 001.001.001 | 15-07 B1 RSEevo HW Harman HW1.1  |
| 001.001.002 | 15-07 B3 RSEevo HW Harman HW1.2  |
| 001.001.003 | 15-07 C1 RSEevo HW Harman HW1.3  |
| 001.001.004 | 15-07 D1 RSEevo HW Harman HW1.4  |
| 001.001.005 | 15-07 D1 RSEevo HW Harman HW1.5  |
| 001.001.006 | 15-07 D1 RSEevo HW Harman HW1.6  |
| 001.002.001 | 16-07 D1 RSEevo HW Harman HW2.1  |
| 0xFFFFFFFF | unknown NBTevo HW |

### DEVUDS_HWVERSION_ENAV

| WERT | NAME |
| --- | --- |
| 001.001.002 | 13-07 C1 ENAV HW Harman HW1.2  |
| 004.001.002 | 13-07 C1 ENAV HW Magneti HW1.2  |
| 001.001.003 | 13-07 C2.1/2 ENAV HW Harman HW1.3  |
| 004.001.003 | 13-07 C2.1/2 ENAV HW Magneti HW1.3  |
| 001.001.004 | 13-07 C3 ENAV HW Harman HW1.4  |
| 004.001.004 | 13-07 C3 ENAV HW Magneti HW1.4  |
| 001.001.005 | 13-07 D1 ENAV HW Harman HW1.5  |
| 004.001.005 | 13-07 D1 ENAV HW Magneti HW1.5  |
| 001.001.006 | 13-07 D2 ENAV HW Harman HW1.6  |
| 004.001.006 | 13-07 D2 ENAV HW Magneti HW1.6  |
| 001.001.007 | 13-07 D3 ENAV HW Harman HW1.7 (SOP HW) |
| 004.001.007 | 13-07 D3 ENAV HW Magneti HW1.7 (SOP HW) |
| 001.002.001 | 15-03 D4 ENAV HW Harman HW2.1 (SOP HW) |
| 004.002.001 | 15-03 D4 ENAV HW Magneti HW2.1 (SOP HW) |
| 001.003.001 | 15-11 D5.1 ENAV HW Harman (SOP HW) |
| 004.003.001 | 15-11 D5.1 ENAV HW Magneti (SOP HW) |
| 001.003.002 | 15-11 D5.2 ENAV HW Harman (SOP HW) |
| 004.003.002 | 15-11 D5.2 ENAV HW Magneti (SOP HW) |
| 001.003.003 | 15-11 D5.3 ENAV HW Harman (SOP HW) |
| 004.003.003 | 15-11 D5.3 ENAV HW Magneti (SOP HW) |
| 0xFFFFFFFF | unknown ENAV HW |

### DEVUDS_HWVERSION_ENTRYEVO

| WERT | NAME |
| --- | --- |
| 002.001.001 | 16-11 B1 EntryEvo HW Alpine HW1.1 |
| 002.001.002 | 16-11 B2 EntryEvo HW Alpine HW1.2 |
| 002.001.003 | 16-11 C1 EntryEvo HW Alpine HW1.3 |
| 002.001.004 | 16-11 D1 EntryEvo HW Alpine HW1.4 |
| 004.001.004 | 16-11 D1 EntryEvo HW Magneti HW1.4 |
| 0xFFFFFFFF | unknown ENAVevo HW |

### DEVUDS_HWVERSION_MGU

| WERT | NAME |
| --- | --- |
| 001.001.001 | 18-07 B1 MGU HW Harman HW1.1 |
| 0xFFFFFFFF | unknown MGU HW |

### DEVUDS_HWVERSION_RSE_MGU

| WERT | NAME |
| --- | --- |
| 001.001.001 | 18-11 B1 RSE MGU HW Harman HW1.1 |
| 0xFFFFFFFF | unknown RSE MGU HW |
