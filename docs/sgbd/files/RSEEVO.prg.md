# RSEEVO.prg

## General

|  |  |
| --- | --- |
| File | RSEEVO.prg |
| Type | PRG |
| Jobs | 79 |
| Tables | 208 |
| Origin | BMW EI-60 Hr.Weber |
| Revision | 9.000 |
| Author | TelemotiveAG EI-60 Hr.Ramdedovic, TelemotiveAG EI-60 Hr.Schmidt |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Rear Seat Entertainment NBT Evolution RSEevo |  |  |
| ORIGIN | string | BMW EI-60 Hr.Weber |  |  |
| REVISION | string | 9.000 |  |  |
| AUTHOR | string | TelemotiveAG EI-60 Hr.Ramdedovic, TelemotiveAG EI-60 Hr.Schmidt |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.62 |  |  |
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

### STATUS_VERSION_MOST_CONTROLLER

Return Version of MOST Controller

_No arguments._

### STATUS_VERSORGUNGSSPANNUNG

Betriebsspannung am SG. Darstellung mit Millivolt-Auflösung.

_No arguments._

### STATUS_WAKEUP_STATUS

Gibt an, ob das SG den MOST-Ring geweckt hat oder geweckt wurde.

_No arguments._

### STATUS_ABILITY_TO_WAKE

Gibt an ob SG Most Ring wecken darf

_No arguments._

### STATUS_AVERAGE_MESSAGE_RECEPTION_RATE

Liest die mittlere Nachrichtenabnahmerate des SGs während dieses Gerät geflasht wird, also in der ProgramminSession Auslesbar muss der Status jederzeit sein

_No arguments._

### STATUS_FOT_TEMPERATUR

Temperatur am FOT

_No arguments._

### STEUERN_SENSOR_TEMP

Simulates the temperature of a definite sensor.

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be simulated |
| ARG_TEMPERATURE | int | Temperature that must be simulated |
| ARG_DURATION | unsigned int | Duration of the temperature simulation |

### STEUERN_WATCHDOG_TRIGGER_STOP

Unterbindet das regelmäßige Rücksetzen des Applikations-Watchdogs nach ARG_TIME_WATCHDOG Sekunden. Wenn ARG_TIME_WATCHDOG nicht angegeben wird, wird der Wert 0 benutzt.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned int | Beschreibung: z.B. ARG_TIME_WATCHDOG = 4 bedeutet Abschalten des Watchdog-Triggers nach 4 Sekunden. nur positiven Zahlen und die 0. Skalierung: 1 entspricht 1 Sekunde |

### STATUS_SENSOR_TEMP

Returns the temperature of the desired sensor (no matter if the temperature is currently being simulated or not).

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be returned |

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)] 35up: LH Diagnosemaster V11 oder höher pre35up: LH Diagnosemaster V6 - V9

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

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

### DIAG_SESSION_LESEN

Aktive Diagnose-Session auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F186 ActiveDiagnosticSession Modus: Default

_No arguments._

### FLASH_TP_LESEN

Flash Timing Parameter auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2504 FlashTimingParameter Modus: Default

_No arguments._

### PROG_ZAEHLER_LESEN

Programmierzaehler lesen UDS  : $22   ReadDataByIdentifier UDS  : $2502 ProgrammingCounter Modus: Default

_No arguments._

### PROG_MAX_LESEN

Anzahl der maximal möglichen Programmiervorgänge auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2503 ProgrammingCounter Modus: Default

_No arguments._

### STATUS_HIGHSYNC_CONNECTION_TABLE_EXT

This Job reads out the HighSyncConnectionTable or all implemented connection-IDs.

| Name | Type | Description |
| --- | --- | --- |
| ARG_CONNECTION_TABLE_TYPE | unsigned char | Switches between the actual active connection or all impemented connections in the system. 0x00 active connection, 0x01 all implemented connections, 0xFF Not defined |

### STATUS_SEARCH_FBLOCK

FBlockID.InstID searched in Current Registry

| Name | Type | Description |
| --- | --- | --- |
| ARG_FBLOCKID | unsigned char | FBlockID.InstID searched in Registry |
| ARG_INSTID | unsigned char | FBlockID.InstID searched in Registry |

### _RSE_HWVARIANTE_NAME

Variante

_No arguments._

### _STEUERN_BACKUP_PERSISTENCY

Backup der Persistenzdaten aus der HU erstellen

_No arguments._

### _STEUERN_DELETE_PERSISTENCY_INTEL

Löschen der Persistenzdaten des Intel

_No arguments._

### _STEUERN_DELETE_PERSISTENCY_JACINTO

Löschen der Persistenzdaten des Jacinto

_No arguments._

### _STEUERN_RESTORE_PERSISTENCY

Persistenzdaten aus Backup in die HU einspielen

_No arguments._

### STATUS_SOFTWARENAME

Reads out the flashed Buildname

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

### STATUS_AKTIVIERUNGSLEITUNG

Returns the state of the activation line

_No arguments._

### STATUS_GATEWAY_WAKEUP_SOURCE

Liefert die Quelle/Ursache zurück, die zum Wecken des       Gateway-Steuergeräts geführt hat.

_No arguments._

### STATUS_GATEWAY_MOST_DEVICE_COUNT

Information über den Gateway-Dispatcher Anzahl der vom Dispatcher erkannten MOST-Teilnehmer im Ring

_No arguments._

### STATUS_ETH_IP_CONFIG_MAC_REPAIR

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1045

| Name | Type | Description |
| --- | --- | --- |
| INTERNAL_EXTERNAL_ADDRESS | unsigned char | Identifies the network interface and its corresponding IP address (internal, external, all, further, optional application specific address) for which the IP configuration shall be returned and for which an optional gratuitous ARP shall be triggered. 1 byte uint8 {0= request internal IP address, 1= request external IP address (assigned by tester, cf. [100]) 0xff = request all IP-addresses, else = further, application specific IP address} |
| TRIGGER_GRATUITOUS_ARP | unsigned char | Defines whether the ECU shall send out a gratuitous ARP for the requested network interface. The gratuitous ARP shall be sent as soon as possible after being triggered. 1 byte uint8 {1= send gratuitous ARP for the requested network interface,  else = do not send gratuitous ARP} |

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

### STATUS_WAKEUP_ABSTIME

7 bytes Zeitpunkt, zu dem das SG den Weckbefehl gegeben hat Bytes werden als Datum interpretiert Beispiel: '20060508131210' in der Reihenfolge YYYYMMDDHHMMSS. Falls das SG nie geweckt hat wird '00000000000000' zurückgegeben

_No arguments._

### STATUS_MOSTDIAG_DELAY

Verzögerungszeit, bis der Job steuern_zentrale_registry_sollkonfiguration wieder gestartet werden kann

_No arguments._

### STATUS_IP_CONFIGURATION

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

_No arguments._

### STATUS_ATC_VERSION

Reads out the capability of the ATC diagnosis

_No arguments._

### STATUS_HW_VARIANTE

Liefert die HW-Variante der Headunit

_No arguments._

### STATUS_HWVARIANTE_NAME

Variante

_No arguments._

### STEUERN_NWM_CONFIG_NOTOK

Sends a Config.NotOk on the MOST Bus

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

### STEUERN_ETH_WRITE_PHY_REGISTER

Writes an arbitrary PHY, MAC or switch register. UDS   : $31 RoutineControl $01 StartRoutine $104D

| Name | Type | Description |
| --- | --- | --- |
| INPUTDATA | binary | 1st byte REG_WRITE_PROTECT, uint8: To avoid misuse or an inadvertent write of registers, REG_WRITE_PROTECT must be set to 0xEE in order to execute the job. The job execution shall be aborted if the parameter REG_WRITE_PROTECT is != 0xEE. --------- followed by 1 byte: REG_WRITE_RANGE: Number of registers that shall be written to (enumeration starts at 1). (uint8,  0= no write, 1-255= write 1 to 255 registers ) --------- followed by:  REG_ADDR[] - each entry 4byte uint32. Addresses that shall be written to. If the number of provided addresses is not equal to REG_WRITE_RANGE, the job execution shall be aborted. Each address must be converted to a unique PHY, MAC or switch register address. The conversion shall be handled individually by each ECU. The used mapping scheme shall take into account all available PHYs, MACs and switches the ECU is equipped with and that are visible externally, i.e., via an connector. --------- followed by 1 byte: REG_WRITE_RANGE: Number of registers that shall be written to (enumeration starts at 1). (uint8,  0= no write, 1-255= write 1 to 255 registers) --------- followed by:  REG_WRITE_LENGTH[] - each entry 1 byte uint8. Entry n in REG_WRITE_LENGTH[] specifies how many bytes shall be written to the register address defined by entry n in REG_ADDR[]. Enumeration shall start at 1. If the number of entries is not equal to REG_WRITE_RANGE, the job execution shall be aborted. --------- followed by 1 byte: REG_WRITE_RANGE: Number of registers that shall be written to (enumeration starts at 1). (uint8,  0= no write, 1-255= write 1 to 255 registers) --------- followed by:  REG_WRITE_DATA[] - each entry 8 bytes uint64. Entry n in REG_WRITE_DATA[] provides the data that shall be written to the register address defined by entry n in REG_ADDR[]. The amount of bytes (starting with the least significant byte) that are actually written are defined by entry n in REG_WRITE_LENGTH[]. If the number of entries is not equal to REG_WRITE_RANGE, the job execution shall be aborted. Enumeration shall start at 1. |

### STEUERN_ZENTRALE_REGISTRY_SOLLKONFIGURATION

Die aktuelle Registry wird als Default Registry gespeichert

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
| 0x2300 | Aussenspiegel Beifahrer | - |
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
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
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
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
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
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
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
| 0x5AFF | unbekannter Verbauort | - |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Fahrertür vorne oben | 1 |
| 0x5E06 | Innenbeleuchtung Fahrertür vorne Mitte | 1 |
| 0x5E07 | Innenbeleuchtung Fahrertür vorne unten | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Fahrertür hinten oben | 1 |
| 0x5E0A | Innenbeleuchtung Fahrertür hinten unten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Beifahrertür vorne oben | 1 |
| 0x5E0D | Innenbeleuchtung Beifahrertür vorne Mitte | 1 |
| 0x5E0E | Innenbeleuchtung Beifahrertür vorne unten | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Beifahrertür hinten oben | 1 |
| 0x5E11 | Innenbeleuchtung Beifahrertür hinten unten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung I-Tafel Fahrer oben | 1 |
| 0x5E14 | Innenbeleuchtung I-Tafel Fahrer unten | 1 |
| 0x5E15 | Innenbeleuchtung I-Tafel oben Mitte | 1 |
| 0x5E16 | Innenbeleuchtung I-Tafel unten Mitte | 1 |
| 0x5E17 | Innenbeleuchtung I-Tafel oben Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung I-Tafel unten Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
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
| 0x7700 | Booster | 1 |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
| 0x7A00 | Beschleunigungssensor vorne links | 1 |
| 0x7A08 | Beschleunigungssensor vorne rechts | 1 |
| 0x7A10 | Beschleunigungssensor hinten links | 1 |
| 0x7A18 | Beschleunigungssensor hinten rechts | 1 |
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
| 0x0016 | Renesas Technology Europe GmbH - Mitsubishi |
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
| 0x0028 | Renesas Technology Europe Ltd  - Hitachi |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroën |
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
| 0x0065 | INTEVA Products, LLC |
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
| 0x013A | ISSI – Integrated Silicon Solution Inc |
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

### TFBLOCKIDTEXTE

| WERT | TEXT |
| --- | --- |
| 0x01 | NetBlock |
| 0x02 | NetworkMaster |
| 0x03 | ConnectionMaster |
| 0x04 | PowerMaster |
| 0x05 | Vehicle |
| 0x06 | Diagnosis |
| 0x07 | VideoSwitch |
| 0x0F | EnhancedTestability |
| 0x10 | MMI |
| 0x11 | SVS |
| 0x14 | BCStatistic |
| 0x15 | ControlElements |
| 0x20 | AudioMaster |
| 0x22 | AudioAmplifier / AudioAmplifier_HU |
| 0x23 | HeadPhoneAmplifier |
| 0x24 | AuxiliaryInput |
| 0x26 | MicrophoneInput |
| 0x2E | AudioSinkRouter |
| 0x2F | AudioSourceRouter |
| 0x30 | AudioTapePlayer |
| 0x31 | AudioDiskPlayer |
| 0x32 | MultiMediaPlayer |
| 0x40 | AmFmTuner |
| 0x41 | TMCTuner |
| 0x42 | TVTuner |
| 0x43 | DABTuner |
| 0x44 | SatRadio |
| 0x50 | Telephone |
| 0x51 | GeneralPhoneBook / MobileOffice |
| 0x52 | Navigation / NavigationStd |
| 0x54 | Bluetooth |
| 0x6F | Monitor |
| 0x70 | PDC |
| 0x71 | Climate |
| 0x74 | EBA/Services |
| 0x80 | MMI_Terminal |
| 0x81 | Kombi_Terminal |
| 0x82 | HUD_Terminal |
| 0x90 | Telematik |
| 0x91 | InternalAudioSource |
| 0x92 | InternalAudioSink |
| 0xA0 | WLAN |
| 0xA1 | Kleer |
| 0xAB | TollCollect |
| 0xBE | Browser |
| 0xC0 | CANDevices |
| 0xC1 | MPEG-TS_Decoder |
| 0xC9 | Services |
| 0xCA | KombiMiscFKts |
| 0xCB | BordComputer |
| 0xCC | ADASInterface |
| 0xCD | NavigationInfo |
| 0xCE | iSpeech |
| 0xCF | HMIControl |
| 0xD0 | Security |
| 0xD1 | SystemFunction |
| 0xD2 | MultiMediaServer |
| 0xD3 | MassStorageControl |
| 0xD4 | SWUpdate |
| 0xD5 | VirtualControlElements |
| 0xD6 | Vehicle2 |
| 0xD7 | VideoConnectionMaster |
| 0xD8 | VideoSink |
| 0xD9 | EarlyVideoControl |
| 0xDA | MapControl |
| 0xDB | Titelematics |
| 0xDC | DataComIP |
| 0xDD | DUMM |
| 0xDE | TelematikTCU / jetzt TelematicAssist |
| 0xDF | TeleX |
| 0xE0 | KombiInterface |
| 0xE1 | HUDInterface |
| 0xE2 | Camera |
| 0xE3 | MOSTFileSystem |
| 0xE4 | XFCD / Jingle / SoundApplications |
| 0xE5 | CentralControlUnit / CentralControlSystem |
| 0xE6 | TripMemory |
| 0xE7 | RemoteApplication |
| 0xE8 | VideoOutSettings |
| 0xE9 | SoundSignalService |
| 0xEA | PDC |
| 0xEB | DebugApplication |
| 0xED | PIM |
| 0xEE | DataCommunication |
| 0xFF | Nicht definiert |

### TWAKEUPSTATUS

| WERT | TEXT | TEXT2 |
| --- | --- | --- |
| 0 | not initialised | off |
| 1 | SG will be waked up | on |
| 2 | SG are waked up | critical |

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

### ARG_0X400B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | high | unsigned char | - | TAB_CID_TESTPICTURE_EXTENDED | - | - | - | - | - | Selection of extended test picture ID  table  TCIDTestpictureExtended 0x00 Stop displaying test picture and return to Video Mode 0x01 Black picture 0x02 Blue picture 0x03 Red picture 0x04 Green picture 0x05 No-Signal-Screen 0x06 White L63 0x07 Yellow 0x08 Cyan 0x09 Magenta 0x0A Grey L5 0x0B Grey L9 0x0C Grey L13 0x0D Grey L17 0x0E Grey L21 0x0F Grey L25 0x10 Grey L29 0x11 Grey L34 0x12 Grey L38 0x13 Grey L42 0x14 Grey L46 0x15 Grey L50 0x16 Grey L54 0x17 Grey L58 0x18 Color Bar 0x19 Horizontal Flicker Check 0x1A Vertical Flicker Check 0x1B 32 Grey Steps 0x1C 32 Grey Steps for RED 0x1D 32 Grey Steps for GREEN 0x1E 32 Grey Steps for BLUE 0xFF Not defined |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RGB_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Video mode  0x00 stop displaying test picture and return to video mode 0x01 Display requested test picture in corresponding RGB color  |
| ARG_RGB_VALUE | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Desired RGB color in data   format 0x00RRGGBB  (RR=Red, GG=Green, BB=Blue) Range: [0x00000000¿0x00FFFFFF] 0xFFFFFFFF Not defined |

### ARG_0X400D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TEMP_COUNTERS01 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 01 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS02 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 02 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS03 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 03 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS04 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 04 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |

### ARG_0X4015_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Selection of extended test picture ID  table  TCIDTestpictureExtended 0x00 Stop displaying test picture and return to Video Mode 0x01 Black picture 0x02 Blue picture 0x03 Red picture 0x04 Green picture 0x05 No-Signal-Screen 0x06 White L63 0x07 Yellow 0x08 Cyan 0x09 Magenta 0x0A Grey L5 0x0B Grey L9 0x0C Grey L13 0x0D Grey L17 0x0E Grey L21 0x0F Grey L25 0x10 Grey L29 0x11 Grey L34 0x12 Grey L38 0x13 Grey L42 0x14 Grey L46 0x15 Grey L50 0x16 Grey L54 0x17 Grey L58 0x18 Color Bar 0x19 Horizontal Flicker Check 0x1A Vertical Flicker Check 0x1B 32 Grey Steps 0x1C 32 Grey Steps for RED 0x1D 32 Grey Steps for GREEN 0x1E 32 Grey Steps for BLUE 0xFF Not defined |

### ARG_0X4016_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_RGB_MODE | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Video mode  0x00 stop displaying test picture and return to video mode 0x01 Display requested test picture in corresponding RGB color  |
| ARG_RGB_VALUE | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Desired RGB color in data   format 0x00RRGGBB  (RR=Red, GG=Green, BB=Blue) Range: [0x00000000¿0x00FFFFFF] 0xFFFFFFFF Not defined |

### ARG_0X4018_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TEMP_COUNTERS01 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 01 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS02 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 02 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS03 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 03 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| ARG_TEMP_COUNTERS04 | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Temperature counter 04 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |

### ARG_0XA006_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DRIVE | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | gibt an, auf welchem Laufwerk der  Eject ausgeführt werden soll. Default 4 Tabelle TLaufwerk |

### ARG_0XA007_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DRIVE | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | gibt an, auf welchem Laufwerk der  Eject ausgeführt werden soll. Default: 4 Tabelle TLaufwerk |

### ARG_0XA01A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | 1.0 | 1.0 | 0.0 | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | 0-n | - | unsigned int | - | TVideoAusgang | 1.0 | 1.0 | 0.0 | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA01C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Legt die Videoquelle fest, von der aus das Signal verteilt wird. Tabelle TVideoQuelle |
| ARG_SENKEN | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Tabelle TVideoSenke |
| ARG_TIMEOUT | + | - | - | - | unsigned char | 255 | - | 1.0 | 1.0 | 0.0 | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die die Videoverbindung aufrecht erhalten wird. Default: 255  Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis der Job erneut mit Parameter 0 aufgerufen wird oder das Steuergerät neu startet (Aufwachen, Reset, &) |

### ARG_0XA01D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Wertet das Signal von einer oder mehreren Quellen aus. Legt die Videoquelle fest, von der aus das Signal auf die Senke geroutet wird: Tabelle TVideoQuelle bzw. TEingangVideoSwitch |

### ARG_0XA01E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Routinen, die getestet werden sollen. Tabelle TVerbauRoutine |

### ARG_0XA022_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | + | - | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | - | - | Routinen, die getestet werden sollen. Die Tabelle TSelbsttestRoutine wird in der SGBD von der Entwicklung bzw. vom Zulieferer befüllt und gepflegt |

### ARG_0XA024_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MENU | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Einstellen eines MMI Menüs. |
| ARG_MENU_ITEM | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Markieren eines Menüeintrages |
| ARG_MENU_RSE_RIGHT | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | ID des Menüs der zweiten MMI, z.B. RSE rechter Bildschirm. |
| ARG_MENUE_ITEM_RSE_RIGHT | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | ID eines Eintrages im Menü der zweiten MMI, z.B. RSE rechter Bildschirm =0000 bei Verwendung des Jobs in Headunit |

### ARG_0XA02E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TYPE | + | - | 0-n | - | unsigned char | - | TAB_TypeUSBDevice | 1.0 | 1.0 | 0.0 | - | - | - |

### ARG_0XA037_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TRACK | + | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. |

### ARG_0XA03C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 30.0 | legt die Dauer in Sekunden fest, die der Lüfter auf Maximum läuft. |

### ARG_0XA0A0_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KLEER_DEVICE_ID_TEXT | + | - | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | - | - | UID of the to-be-associated KLEER device from e.g. barcode  12 digits ascii-hex-code |

### ARG_0XA0AD_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CLASS | + | - | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | - | - | - | - | - | Klasse des Gerätes das gelöscht werden soll (Klassen der Geräte die gelöscht werden sollen) Werte aus Tabelle TAB_KleerDevices |

### ARG_0XD0A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KLEER_DEVICE_ID_TEXT | TEXT | high | string[12] | - | - | 1.0 | 1.0 | 0.0 | - | - | UID of the to-be-associated KLEER device from e.g. barcode  12 digits ascii-hex-code |
| ARG_KLEER_DEVICE_CLASS | 0-n | high | unsigned char | - | TAB_KLEERDEVICES | - | - | - | - | - | Art des zu verbindenden KLEER Geräts |

### ARG_0XD0AB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | - | unsigned char | - | TAB_TESTBILD_CID | 1.0 | 1.0 | 0.0 | 0.0 | - | Ausgabe des Testbild unabhängig von Signalen der HU. Kann auch ohne HU ausgegeben werden:  Mögliche Werte: 0 = NORMALES_BILD, 1 = SCHWARZES_BILD, 2 = BLAUES_BILD,  3 = ROTES_BILD, 4 = GRUENES_BILD, 5 = NO_SIGNAL |

### ARG_0XD0AC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VALUE | % | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe des PWM-Wert, mit welchem die Hintergrundbeleuchtung angesteuert werden soll: 0 = dunkel, 100 = hell |

### ARG_0XD0AD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_STOP | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Pflicht Argument von Service 0x2E. 1 = Stop Diagnose-Ansteuerungen. |

### ARG_0XD0B5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ein-/Ausschalten des Display per Diagnose mit Hintergrundbeleuchtung: 0 = AUS, 1 = EIN |

### ARG_0XD0BB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KLEER_ACTIVATION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Aktiviert / deaktiviert das KLEER Modul. Werte aus der Tabelle TAB_OnOff |

### ARG_0XD5C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TESTBILD | 0-n | - | unsigned char | - | TAB_TESTBILD_CID | 1.0 | 1.0 | 0.0 | 0.0 | - | Ausgabe des Testbild unabhängig von Signalen der HU. Kann auch ohne HU ausgegeben werden:  Mögliche Werte: 0 = NORMALES_BILD, 1 = SCHWARZES_BILD, 2 = BLAUES_BILD,  3 = ROTES_BILD, 4 = GRUENES_BILD, 5 = NO_SIGNAL |

### ARG_0XD5C2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | - | - | Ein- und Ausschalten des Display per Diagnose mit Hintergrundbeleuchtung: 0 = AUS, 1 = EIN |

### ARG_0XD5C4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_VALUE | % | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe des PWM-Wert, mit welchem die Hintergrundbeleuchtung angesteuert werden soll: 0 = dunkel, 100 = hell |

### ARG_0XD5C9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_STOP | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Pflicht Argument von Service 0x2E. 1 = Stop Diagnose-Ansteuerungen. |

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

### BOOTLOADER_ODER_APPLIKATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation |
| 0x01 | Bootloader |

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

### CONTROLLER

| WERT | TEXT |
| --- | --- |
| 0x01 | Vehicle Controller |
| 0x02 | Entertainment Controller |
| 0x03 | IO Controller |
| 0xFF | unknown |

### CPU

| WERT | TEXT |
| --- | --- |
| 0x00 | Vehicle Controller |
| 0x01 | Entertainment Controller |

### CSM_ERROR_CODE

| WERT | TEXT |
| --- | --- |
| 0x01 | ERC_CSM_INVALID_ENCRYPTED_ID_AND_KEY |
| 0x02 | ERC_CSM_INVALID_SG_ID |
| 0x03 | ERC_CSM_INVALID_SIGNATURE_OVER_RND |
| 0x04 | ERC_CSM_SWE_INVALID |
| 0x11 | ERC_ZSG_NO_RESPONSE_FROM_MSM |
| 0x12 | ERC_ZSG_INVALID_B2VSEC_AUTHENTICATION |
| 0xFE | ERC_CSM_UNEXPECTED_ERROR |
| 0xFF | ERC_CSM_UNEXPECTED_RESPONSE |

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
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x022600 | Energiesparmode aktiv | 0 |
| 0x022608 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x022609 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02260A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02260B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02260C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02FF26 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xB7FC02 | Rechtes Display: Hardware-Error: Ausfall Temperatursensor | 1 |
| 0xB7FC03 | Rechtes Display: Hardware-Error: Ausfall UmgebungshelligkeitsSensor | 1 |
| 0xB7FC08 | Video Eingang 1: kein Video- oder Sync-Signal vorhanden | 1 |
| 0xB7FC09 | Video Eingang 2: kein Video- oder Sync-Signal vorhanden | 1 |
| 0xB7FC0D | Rechtes Display: Hardware-Error: Fehler Betriebsspannungsmesspfad | 1 |
| 0xB7FC0E | Rechtes Display: Hardware-Error: Ausfall CID-Kommunikation | 1 |
| 0xB7FC0F | Rechtes Display: Hardware-Error: Ausfall Backlight-LEDs | 1 |
| 0xB7FC10 | Rechtes Display: Hardware-Error: Checksummenfehler CID-Flashdaten | 1 |
| 0xB7FC11 | Rechtes Display: Übertemperatur: Helligkeitsreduzierung Backlight | 1 |
| 0xB7FC12 | Rechtes Display: Übertemperatur: Abschaltung Backlight | 1 |
| 0xB7FC13 | Rechtes Display: Überspannung Vcc | 1 |
| 0xB7FC14 | Rechtes Display: Unterspannung Vcc | 1 |
| 0xB7FC15 | Rechtes Display: Configuration-Error: CID-Variante nicht kompatibel | 1 |
| 0xB7FC16 | Laufwerk Hardwarefehler | 0 |
| 0xB7FC17 | Rechtes Display: Bilddaten ungültig oder fehlerhaft | 1 |
| 0xB7FC18 | Laufwerk Mediumfehler | 1 |
| 0xB7FC19 | ATC Test negativ: Laufwerk defekt | 0 |
| 0xB7FC1E | Lüfter Fehler | 0 |
| 0xB7FC1F | Linkes Display: Hardware-Error: Ausfall Temperatursensor | 1 |
| 0xB7FC20 | Interner Temperaturfehler | 0 |
| 0xB7FC22 | Linkes Display: Hardware-Error: Ausfall UmgebungshelligkeitsSensor | 1 |
| 0xB7FC23 | Externe Unterspannung | 1 |
| 0xB7FC24 | Externe Überspannung | 1 |
| 0xB7FC26 | Codierungsfehler Arbeitsbereich | 0 |
| 0xB7FC27 | Codierungsfehler Master Bereich | 0 |
| 0xB7FC2C | Linkes Display: Hardware-Error: Fehler Betriebsspannungsmesspfad | 1 |
| 0xB7FC2D | Hauptplatine Hardware Fehler | 0 |
| 0xB7FC2E | Flash File System fehlerhaft | 0 |
| 0xB7FC34 | Linkes Display: Hardware-Error: Ausfall CID-Kommunikation | 1 |
| 0xB7FC35 | Linkes Display: Hardware-Error: Ausfall Backlight-LEDs | 1 |
| 0xB7FC36 | Linkes Display: Hardware-Error: Checksummenfehler CID-Flashdaten | 1 |
| 0xB7FC37 | Linkes Display: Übertemperatur: Helligkeitsreduzierung Backlight | 1 |
| 0xB7FC38 | Linkes Display: Übertemperatur: Abschaltung Backlight | 1 |
| 0xB7FC39 | Linkes Display: Überspannung Vcc | 1 |
| 0xB7FC3A | Linkes Display: Unterspannung Vcc | 1 |
| 0xB7FC3B | Linkes Display: Configuration-Error: CID-Variante nicht kompatibel | 1 |
| 0xB7FC3C | Linkes Display: Bilddaten ungültig oder fehlerhaft | 1 |
| 0xB7FC40 | Rechtes KLEER Modul: Selbstdiagnose fehlerhaft | 0 |
| 0xB7FC41 | Linkes KLEER Modul: Selbstdiagnose fehlerhaft | 0 |
| 0xB7FC42 | Der Taster des linken Displays ist verklemmt. | 1 |
| 0xB7FC43 | Der Taster des rechten Displays ist verklemmt. | 1 |
| 0xB7FC44 | KLEER Modul deaktiviert | 0 |
| 0xB7FC46 | Eine kritische Recovery funktion wurde aktiviert | 1 |
| 0xB7FC47 | USB-VBUS Verbindung RSE zur USB Benutzer Schnittstelle: Kurzschluss nach Masse | 0 |
| 0xB7FC48 | Telnet/SSH Mode aktiv | 0 |
| 0xB7FCA1 | Error memory content corrupted | 0 |
| 0xB7FCA2 | HDCP: Authentifizierung fehlgeschlagen | 1 |
| 0xB7FCFF | UWB Dummy RSE | 0 |
| 0xD2843F | MOST: Empfänger hat Nachricht nicht abgenommen | 1 |
| 0xD28440 | Reset | 0 |
| 0xD28441 | MOST: Ringbruch | 1 |
| 0xD28442 | Abschaltung Übertemperatur | 1 |
| 0xD28443 | MOST-Steuergerät: Abschaltung Übertemperatur | 1 |
| 0xD28444 | MOST: Ring wacht nicht auf | 1 |
| 0xD28445 | MOST: Reset | 0 |
| 0xD28600 | Ethernet: Kommunikationsfehler (Link-Abbruch) | 1 |
| 0xD28602 | Ethernet: Link-Qualität niedrig | 1 |
| 0xD28603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 |
| 0xD28604 | Ethernet: Unerwarteter Link aufgebaut | 1 |
| 0xD28BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Gueltigkeit | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | Klemme R | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | Klemme 15 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | Klemme 50 | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | Entertainment Mode | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | Telefon Mode | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0008 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0009 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000A | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000B | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000C | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000D | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000E | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000F | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0010 | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0011 | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0012 | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0013 | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0014 | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0015 | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0016 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0017 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0018 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0019 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001A | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001B | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001C | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001D | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001E | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001F | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0020 | PORT_08_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0021 | PORT_09_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0022 | PORT_10_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0023 | PORT_11_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0024 | PORT_12_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0025 | PORT_13_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0026 | PORT_14_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0027 | PORT_15_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0028 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0029 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0030 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0031 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0032 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0033 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0034 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0035 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0036 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0037 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0038 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0039 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003A | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003B | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003C | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003D | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003E | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003F | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0040 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0041 | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0042 | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0043 | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0044 | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0045 | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0046 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0047 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x1707 | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1708 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170A | FOTTemp Celsius | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x170B | Node Position Register | HEX | High | unsigned char | - | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x170D | MemMirror | Text | High | 74 | - | - | - | - |
| 0x170E | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1719 | AbilityToWake | 0-n | High | 0xFF | TAB_ABILITY_TO_WAKE_DOP | - | - | - |
| 0x171E | MOSTMesErrorCodeInfo | Text | High | 8 | - | - | - | - |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x172D | MOSTMesOpType | Text | High | 9 | - | - | - | - |
| 0x1740 | FBlock- Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1741 | Instanz-Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | Text | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1755 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1756 | Signalqualität | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x1757 | Signalqualität | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1758 | Signalqualität | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1759 | CABLE_DIAG_STATE | 0-n | High | 0xFF | CABLE_DIAG_STATE_TAB | - | - | - |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x4200 | AmpTemp | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4201 | GyroTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4202 | CPUTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4203 | HDD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4204 | DVD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4205 | Audioquelle | Text | High | 3 | - | - | - | - |
| 0x4206 | SMART Daten | Text | Low | 28 | - | - | - | - |
| 0x4207 | SMART Daten | Text | High | 28 | - | - | - | - |
| 0x4208 | Secondary DTC ID | Text | High | 3 | - | - | - | - |
| 0x4209 | AMFM Tuner SW Version | Text | High | 3 | - | - | - | - |
| 0x420A | DAB Tuner SW Version | Text | High | 3 | - | - | - | - |
| 0x420B | Audio Label | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420C | MemoryAddress für Coding Error Work Domain | HEX | High | signed long | - | - | - | - |
| 0x420D | PIA Process | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420E | PIA Medium | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420F | PIA Profilname | Text | High | 12 | - | 1.0 | 1.0 | 0.0 |
| 0x4210 | PIA IStufenbezeichner | Text | High | 4 | - | - | - | - |
| 0x4211 | PIA Version | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4212 | PIA ErrorID | 0-n | High | 0xFF | PIA_ERROR_ID | - | - | - |
| 0x4213 | PIA LowMemory | Text | High | 8 | - | - | - | - |
| 0x4214 | PIA Profilnummer | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4215 | PIA Profilcompare | Text | High | 2 | - | - | - | - |
| 0x4216 | PIA FunctionID | Text | High | 2 | - | - | - | - |
| 0x4217 | PIA configuration attributes | Text | High | 4 | - | - | - | - |
| 0x4218 | PIA configuration attributes compare | Text | High | 8 | - | - | - | - |
| 0x4219 | PIA Profilnumbers function and master | Text | High | 2 | - | - | - | - |
| 0x4220 | FB Defect Error | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4221 | FB Software Error | HEX | High | unsigned char | - | - | - | - |
| 0x4222 | Interne 5V Spannung | mV | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4223 | Grund des Luefterfehlers | 0-n | High | 0xFF | LUEFTER_FEHLER | - | - | - |
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4225 | VideoSink | 0-n | High | 0xFF | VIDEO_SINK | - | - | - |
| 0x4226 | Video Watchdog info | Text | High | 4 | - | - | - | - |
| 0x4227 | Media Type | 0-n | High | 0xFF | MEDIA_TYPE | - | - | - |
| 0x4228 | Address | Text | High | 8 | - | - | - | - |
| 0x4229 | ATC Test CD ID | Text | High | 13 | - | 1.0 | 1.0 | 0.0 |
| 0x422A | Quality Level ATC CD | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422B | Amp Gyro CPU HDD DVD CD NVIDIA NTC Temp | Text | High | 8 | - | - | - | - |
| 0x422C | PDC Internal Error | 0-n | High | 0xFF | PDC_INTERNAL_ERROR | - | - | - |
| 0x422D | MileageErrorCause | 0-n | High | 0xFF | MILAGE_ERROR_CAUSE | - | - | - |
| 0x422E | Asleep Reason | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422F | Map Material | 0-n | High | 0xFF | MAP_MATERIAL_REASON | - | - | - |
| 0x4230 | Videoswitch FB Instance IDs | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4231 | Interner Spannungs Sensor | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4232 | Fahrzeugzustand | HEX | High | unsigned char | - | - | - | - |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4234 | Reason for mounting the NAND writable | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4235 | Systemzeit in Sekunden seit Startup bis zur Unterspannung | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4236 | Bootloader oder Applikation | 0-n | High | 0xFF | BOOTLOADER_ODER_APPLIKATION | - | - | - |
| 0x4237 | CSM Error Code | 0-n | High | 0xFF | CSM_ERROR_CODE | - | - | - |
| 0x4239 | APPLICATION_ID | HEX | High | signed long | - | - | - | - |
| 0x423A | Counter | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4240 | CPU | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4245 | AMP_GYRO_CPU/OMAP5_HDD_DVD/BD_GPU_FOT_TEMP | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x4246 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4247 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x4249 | PROCESS_NAME | Text | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424A | INSTRUCTION_POINTER | Text | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x424B | SIGNAL | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x424C | CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424D | THREAD_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x424E | CPU_HIGHRUNNER | Text | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424F | SIGNATUR_FALIURE_REASON | 0-n | High | 0xFF | TAB_SIGNATUR_FALIURE_REASON | - | - | - |
| 0x4250 | WAKEUPREASON | 0-n | High | 0xFF | TAB_WAKEUPREASON | - | - | - |
| 0x4252 | TEMPERATURE_FOT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4255 | FILE_PATH | Text | High | 50 | - | 1.0 | 1.0 | 0.0 |
| 0x4257 | GPS_HW_DEFECT | 0-n | High | 0xFF | GPS_HW_DEFECT | - | - | - |
| 0x4258 | YAW_VELOCITY_VEHICLE | 0-n | High | 0xFF | YAW_VELOCITY_VEHICLE | - | - | - |
| 0x4259 | PERSONAL_DATAS_ON_PD_ERR | 0-n | High | 0xFFFFFFFF | PERSONAL_DATAS_ON_PD_ERR | - | - | - |
| 0x425A | HDCP_CONNECTION_FAILURE_CAUSE | 0-n | High | 0xFF | HDCP_CONNECTION_FAILURE_CAUSE | - | - | - |
| 0x4260 | PERSONAL_DATAS_OFF_PD_ERR | 0-n | High | 0xFF | PERSONAL_DATAS_OFF_PD_ERR | - | - | - |
| 0x4261 | PMADATA_WDGMSTATUS_PMA_WDGMMODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4262 | PMADATA_WDGMSTATUS_PMA_WDGMSUPERVISED_ENTITYSTATUS | Text | High | 5 | - | 1.0 | 1.0 | 0.0 |
| 0x4263 | G_RIP_DATA_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4264 | G_RIP_DATA_TASK_ID | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4265 | G_RIP_DATA_DELTA_TICKS | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4266 | ERROR_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x4267 | Vehicle Controller | 0-n | High | 0xFF | CONTROLLER | - | - | - |
| 0x4268 | ADDITIONAL_INFORMATION | Text | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x426C | CRASH_ID | Text | Low | 8 | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### GPS_HW_DEFECT

| WERT | TEXT |
| --- | --- |
| 0x00 | ATM |
| 0x01 | GPS Empfänger |

### HDCP_CONNECTION_FAILURE_CAUSE

| WERT | TEXT |
| --- | --- |
| 0x01 | Displayfehler |
| 0x02 | Sperrliste |
| 0x03 | HDMI/MHL Gerätefehler |
| 0x04 | Miracast Gerätefehler |

### HD_MALFUNC_RUNTIME_ERRCODE

| WERT | TEXT |
| --- | --- |
| 0x01 | HDD is unavailable |
| 0x02 | HDD access failed |
| 0x04 | HDD partition table is not valid |
| 0x05 | HDD partition table is not valid + HDD is unavailable |
| 0x06 | HDD partition table is not valid + HDD access failed |

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
| 0x100600 | Ursache Laufwerkfehler | 0 |
| 0x100601 | Ursache Laufwerkinitialisierungsfehler | 0 |
| 0x100602 | Ursache Lad-  Auswurffehler | 0 |
| 0x100902 | Ursache Videodecoder Fehler | 0 |
| 0x100A00 | Persistenzbereich Flash konnte nicht  gemountet werden | 0 |
| 0x100B00 | Ursache FBlock NWM nicht vorhanden | 0 |
| 0x100C05 | Reset: Ursache CHILD_DIED | 0 |
| 0x100C06 | Reset: Ursache THREAD_WATCHDOG | 0 |
| 0x100D00 | Fehler konnte nach maximaler Anzahl an Versuchen nicht gesendet werden | 0 |
| 0x100E00 | Software Fehler für den Fehler Tracking Mechanismus | 0 |
| 0x100F00 | Ursache Medium Detektierungsfehler | 1 |
| 0x101742 | Eine Recovery funktion wurde aktiviert | 0 |
| 0x10174B | INIC Sync - kurzzeitige Kommunikationsstörung | 0 |
| 0x10174C | INIC Reattach | 0 |
| 0x10174D | INIC Communication Failed (NoCom) | 0 |
| 0x10174E | INIC Bist PCode | 0 |
| 0x10174F | INIC Bist Mem Content | 0 |
| 0x10FFFF | UWB Dummy | 0 |
| 0x930000 | Timing-Master: kann Kanal nicht reservieren; Resource Allocation Table (RAT) ist voll | 1 |
| 0x930001 | Versorgungsspannung: Mindestwert unterschritten | 1 |
| 0x930002 | Sender-Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 1 | 0 |
| 0x930003 | Sender-Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 2 | 0 |
| 0x930005 | Diagnosemaster-Client: Telegramm Systemzeit nicht fristgerecht erkannt | 1 |
| 0x930006 | MOST: Licht geht unerwartet aus | 0 |
| 0x930007 | MOST: Synchronisation (Phase Locked Loop) arbeitet nicht korrekt | 0 |
| 0x930008 | Systemzustand OK nicht fristgerecht erkannt | 0 |
| 0x930009 | FBlock mit Methode SenderHandle: Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x93000A | FBlock mit Methode: Lebenszeichen kommt nicht fristgerecht | 1 |
| 0x930011 | MOST: Ringbruch | 1 |
| 0xD28601 | Ethernet: CRC Fehler | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Gueltigkeit | 0/1 | High | 0x01 | - | - | - | - |
| 0x0002 | Klemme R | 0/1 | High | 0x02 | - | - | - | - |
| 0x0003 | Klemme 15 | 0/1 | High | 0x04 | - | - | - | - |
| 0x0004 | Klemme 50 | 0/1 | High | 0x08 | - | - | - | - |
| 0x0005 | Entertainment Mode | 0/1 | High | 0x10 | - | - | - | - |
| 0x0006 | Telefon Mode | 0/1 | High | 0x20 | - | - | - | - |
| 0x0007 | PORT_LINK_OFF_STATUS_00 | 0-n | High | 0x0001 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0008 | PORT_LINK_OFF_STATUS_01 | 0-n | High | 0x0002 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0009 | PORT_LINK_OFF_STATUS_02 | 0-n | High | 0x0004 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000A | PORT_LINK_OFF_STATUS_03 | 0-n | High | 0x0008 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000B | PORT_LINK_OFF_STATUS_04 | 0-n | High | 0x0010 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000C | PORT_LINK_OFF_STATUS_05 | 0-n | High | 0x0020 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000D | PORT_LINK_OFF_STATUS_06 | 0-n | High | 0x0040 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000E | PORT_LINK_OFF_STATUS_07 | 0-n | High | 0x0080 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x000F | PORT_LINK_OFF_STATUS_08 | 0-n | High | 0x0100 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0010 | PORT_LINK_OFF_STATUS_09 | 0-n | High | 0x0200 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0011 | PORT_LINK_OFF_STATUS_10 | 0-n | High | 0x0400 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0012 | PORT_LINK_OFF_STATUS_11 | 0-n | High | 0x0800 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0013 | PORT_LINK_OFF_STATUS_12 | 0-n | High | 0x1000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0014 | PORT_LINK_OFF_STATUS_13 | 0-n | High | 0x2000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0015 | PORT_LINK_OFF_STATUS_14 | 0-n | High | 0x4000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0016 | PORT_LINK_OFF_STATUS_15 | 0-n | High | 0x8000 | PORT_LINK_STATUS_TAB | - | - | - |
| 0x0017 | PORT_CRC_ERROR_COUNT | 0-n | High | 0xFF | PORT_CRC_ERROR_COUNT_1B_TAB | - | - | - |
| 0x0018 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0019 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001A | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001B | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001C | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001D | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001E | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x001F | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0020 | PORT_08_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0021 | PORT_09_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0022 | PORT_10_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0023 | PORT_11_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0024 | PORT_12_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0025 | PORT_13_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0026 | PORT_14_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0027 | PORT_15_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0028 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_00 | 0-n | High | 0x0001 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0029 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_01 | 0-n | High | 0x0002 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002A | DETECTED_UNEXPECTED_LINK_STATUS_PORT_02 | 0-n | High | 0x0004 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002B | DETECTED_UNEXPECTED_LINK_STATUS_PORT_03 | 0-n | High | 0x0008 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002C | DETECTED_UNEXPECTED_LINK_STATUS_PORT_04 | 0-n | High | 0x0010 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002D | DETECTED_UNEXPECTED_LINK_STATUS_PORT_05 | 0-n | High | 0x0020 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002E | DETECTED_UNEXPECTED_LINK_STATUS_PORT_06 | 0-n | High | 0x0040 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x002F | DETECTED_UNEXPECTED_LINK_STATUS_PORT_07 | 0-n | High | 0x0080 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0030 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_08 | 0-n | High | 0x0100 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0031 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_09 | 0-n | High | 0x0200 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0032 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_10 | 0-n | High | 0x0400 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0033 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_11 | 0-n | High | 0x0800 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0034 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_12 | 0-n | High | 0x1000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0035 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_13 | 0-n | High | 0x2000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0036 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_14 | 0-n | High | 0x4000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0037 | DETECTED_UNEXPECTED_LINK_STATUS_PORT_15 | 0-n | High | 0x8000 | UNEXPECTED_LINK_UP_STATUS_TAB | - | - | - |
| 0x0038 | LINK_RESET_STATUS_00 | 0-n | High | 0x0001 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0039 | LINK_RESET_STATUS_01 | 0-n | High | 0x0002 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003A | LINK_RESET_STATUS_02 | 0-n | High | 0x0004 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003B | LINK_RESET_STATUS_03 | 0-n | High | 0x0008 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003C | LINK_RESET_STATUS_04 | 0-n | High | 0x0010 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003D | LINK_RESET_STATUS_05 | 0-n | High | 0x0020 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003E | LINK_RESET_STATUS_06 | 0-n | High | 0x0040 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x003F | LINK_RESET_STATUS_07 | 0-n | High | 0x0080 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0040 | LINK_RESET_STATUS_08 | 0-n | High | 0x0100 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0041 | LINK_RESET_STATUS_09 | 0-n | High | 0x0200 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0042 | LINK_RESET_STATUS_10 | 0-n | High | 0x0400 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0043 | LINK_RESET_STATUS_11 | 0-n | High | 0x0800 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0044 | LINK_RESET_STATUS_12 | 0-n | High | 0x1000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0045 | LINK_RESET_STATUS_13 | 0-n | High | 0x2000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0046 | LINK_RESET_STATUS_14 | 0-n | High | 0x4000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x0047 | LINK_RESET_STATUS_15 | 0-n | High | 0x8000 | LINK_RESET_STATUS_TAB | - | - | - |
| 0x1707 | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1708 | Sub-Tabelle | 0/1 | - | 0xFF | - | - | - | - |
| 0x1709 | MOSTMesHeader | Text | High | 6 | - | - | - | - |
| 0x170A | FOTTemp Celsius | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x170B | Node Position Register | HEX | High | unsigned char | - | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x170D | MemMirror | Text | High | 74 | - | - | - | - |
| 0x170E | Steuergeraeteadresse | HEX | High | unsigned char | - | - | - | - |
| 0x1719 | AbilityToWake | 0-n | High | 0xFF | TAB_ABILITY_TO_WAKE_DOP | - | - | - |
| 0x171E | MOSTMesErrorCodeInfo | Text | High | 8 | - | - | - | - |
| 0x1721 | ID fuer Reset-Ursache | 0-n | High | 0xFF | TAB_RESET_REASON_DOP | - | - | - |
| 0x172D | MOSTMesOpType | Text | High | 9 | - | - | - | - |
| 0x1740 | FBlock- Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1741 | Instanz-Identifier | HEX | High | unsigned char | - | - | - | - |
| 0x1742 | SWT_FEHLERWERT | HEX | High | unsigned char | - | - | - | - |
| 0x1743 | SWT_VIN | Text | High | 7 | - | 1.0 | 1.0 | 0.0 |
| 0x1744 | SWT_ID | HEX | High | signed long | - | - | - | - |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1753 | Sub-Tabelle | 0-n | - | 0xFF | - | - | - | - |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1755 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
| 0x1756 | Signalqualität | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x1757 | Signalqualität | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1758 | Signalqualität | Text | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x1759 | CABLE_DIAG_STATE | 0-n | High | 0xFF | CABLE_DIAG_STATE_TAB | - | - | - |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x4200 | AmpTemp | °C | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4201 | GyroTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4202 | CPUTemp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4203 | HDD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4204 | DVD Temp | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x4205 | Audioquelle | Text | High | 3 | - | - | - | - |
| 0x4206 | SMART Daten | Text | Low | 28 | - | - | - | - |
| 0x4207 | SMART Daten | Text | High | 28 | - | - | - | - |
| 0x4208 | Secondary DTC ID | Text | High | 3 | - | - | - | - |
| 0x4209 | AMFM Tuner SW Version | Text | High | 3 | - | - | - | - |
| 0x420A | DAB Tuner SW Version | Text | High | 3 | - | - | - | - |
| 0x420B | Audio Label | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420C | MemoryAddress für Coding Error Work Domain | HEX | High | signed long | - | - | - | - |
| 0x420D | PIA Process | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420E | PIA Medium | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x420F | PIA Profilname | Text | High | 12 | - | 1.0 | 1.0 | 0.0 |
| 0x4210 | PIA IStufenbezeichner | Text | High | 4 | - | - | - | - |
| 0x4211 | PIA Version | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4212 | PIA ErrorID | 0-n | High | 0xFF | PIA_ERROR_ID | - | - | - |
| 0x4213 | PIA LowMemory | Text | High | 8 | - | - | - | - |
| 0x4214 | PIA Profilnummer | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4215 | PIA Profilcompare | Text | High | 2 | - | - | - | - |
| 0x4216 | PIA FunctionID | Text | High | 2 | - | - | - | - |
| 0x4217 | PIA configuration attributes | Text | High | 4 | - | - | - | - |
| 0x4218 | PIA configuration attributes compare | Text | High | 8 | - | - | - | - |
| 0x4219 | PIA Profilnumbers function and master | Text | High | 2 | - | - | - | - |
| 0x4220 | FB Defect Error | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4221 | FB Software Error | HEX | High | unsigned char | - | - | - | - |
| 0x4222 | Interne 5V Spannung | mV | High | signed int | - | 1.0 | 1.0 | 0.0 |
| 0x4223 | Grund des Luefterfehlers | 0-n | High | 0xFF | LUEFTER_FEHLER | - | - | - |
| 0x4224 | Videoquelle | 0-n | High | 0xFF | VIDEO_SOURCE | - | - | - |
| 0x4225 | VideoSink | 0-n | High | 0xFF | VIDEO_SINK | - | - | - |
| 0x4226 | Video Watchdog info | Text | High | 4 | - | - | - | - |
| 0x4227 | Media Type | 0-n | High | 0xFF | MEDIA_TYPE | - | - | - |
| 0x4228 | Address | Text | High | 8 | - | - | - | - |
| 0x4229 | ATC Test CD ID | Text | High | 13 | - | 1.0 | 1.0 | 0.0 |
| 0x422A | Quality Level ATC CD | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422B | Amp Gyro CPU HDD DVD CD NVIDIA NTC Temp | Text | High | 8 | - | - | - | - |
| 0x422C | PDC Internal Error | 0-n | High | 0xFF | PDC_INTERNAL_ERROR | - | - | - |
| 0x422D | MileageErrorCause | 0-n | High | 0xFF | MILAGE_ERROR_CAUSE | - | - | - |
| 0x422E | Asleep Reason | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x422F | Map Material | 0-n | High | 0xFF | MAP_MATERIAL_REASON | - | - | - |
| 0x4230 | Videoswitch FB Instance IDs | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4231 | Interner Spannungs Sensor | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4232 | Fahrzeugzustand | HEX | High | unsigned char | - | - | - | - |
| 0x4233 | Communication Failure to Tuner HW | 0-n | High | 0xFF | TUNER_HW_COMMUNICATION_FAILURE_REASON | - | - | - |
| 0x4234 | Reason for mounting the NAND writable | HEX | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4235 | Systemzeit in Sekunden seit Startup bis zur Unterspannung | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4236 | Bootloader oder Applikation | 0-n | High | 0xFF | BOOTLOADER_ODER_APPLIKATION | - | - | - |
| 0x4237 | CSM Error Code | 0-n | High | 0xFF | CSM_ERROR_CODE | - | - | - |
| 0x4239 | APPLICATION_ID | HEX | High | signed long | - | - | - | - |
| 0x423A | Counter | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4240 | CPU | 0-n | High | 0xFF | CPU | - | - | - |
| 0x4245 | AMP_GYRO_CPU/OMAP5_HDD_DVD/BD_GPU_FOT_TEMP | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x4246 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4247 | SMART_DATEN | Text | High | 29 | - | - | - | - |
| 0x4248 | RECOVERY_STEPS | 0-n | High | 0xFF | TAB_RECOVERY_STEPS | - | - | - |
| 0x4249 | PROCESS_NAME | Text | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424A | INSTRUCTION_POINTER | Text | High | 10 | - | 1.0 | 1.0 | 0.0 |
| 0x424B | SIGNAL | Text | High | 1 | - | 1.0 | 1.0 | 0.0 |
| 0x424C | CODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x424D | THREAD_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x424E | CPU_HIGHRUNNER | Text | High | 64 | - | 1.0 | 1.0 | 0.0 |
| 0x424F | SIGNATUR_FALIURE_REASON | 0-n | High | 0xFF | TAB_SIGNATUR_FALIURE_REASON | - | - | - |
| 0x4250 | WAKEUPREASON | 0-n | High | 0xFF | TAB_WAKEUPREASON | - | - | - |
| 0x4251 | HD_MALFUNC_RUNTIME_ERRCODE | 0-n | High | 0xFF | HD_MALFUNC_RUNTIME_ERRCODE | - | - | - |
| 0x4252 | TEMPERATURE_FOT | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4253 | POWER_SEQUENCE_ERROR | 0-n | High | 0xFF | POWER_SEQUENCE_ERROR | - | - | - |
| 0x4254 | FIS_FAILURE_REASON | Text | High | 40 | - | - | - | - |
| 0x4255 | FILE_PATH | Text | High | 50 | - | 1.0 | 1.0 | 0.0 |
| 0x4256 | ERROR_CODE_LM | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4257 | GPS_HW_DEFECT | 0-n | High | 0xFF | GPS_HW_DEFECT | - | - | - |
| 0x4258 | YAW_VELOCITY_VEHICLE | 0-n | High | 0xFF | YAW_VELOCITY_VEHICLE | - | - | - |
| 0x4259 | PERSONAL_DATAS_ON_PD_ERR | 0-n | High | 0xFFFFFFFF | PERSONAL_DATAS_ON_PD_ERR | - | - | - |
| 0x4260 | PERSONAL_DATAS_OFF_PD_ERR | 0-n | High | 0xFF | PERSONAL_DATAS_OFF_PD_ERR | - | - | - |
| 0x4261 | PMADATA_WDGMSTATUS_PMA_WDGMMODE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4262 | PMADATA_WDGMSTATUS_PMA_WDGMSUPERVISED_ENTITYSTATUS | Text | High | 5 | - | 1.0 | 1.0 | 0.0 |
| 0x4263 | G_RIP_DATA_REASON | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4264 | G_RIP_DATA_TASK_ID | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4265 | G_RIP_DATA_DELTA_TICKS | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 |
| 0x4266 | ERROR_CODE | HEX | High | unsigned char | - | - | - | - |
| 0x4268 | ADDITIONAL_INFORMATION | Text | High | 2 | - | 1.0 | 1.0 | 0.0 |
| 0x426C | CRASH_ID | Text | Low | 8 | - | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xX1 | ERROR_NO_SVK |
| 0xXY | ERROR_UNKNOWN |

### LINK_RESET_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0x0 | Linkverlust aufgrund SG-externen Ereignisses |
| 0x1 | Linkverlust aufgrund SG-interen Ereignisses |

### LUEFTER_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x01 | Lüfter dreht sich gar nicht |
| 0x02 | Lüfter dreht sich, aber nicht mit der erwarteten Geschwindigkeit |

### MAP_MATERIAL_REASON

| WERT | TEXT |
| --- | --- |
| 0x01 | map material memory area empty |
| 0x02 | map material memory area filled out with other data |
| 0x03 | map material corrupt (can be repaired by updating the map material) |

### MEDIA_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Unknown |
| 0x01 | CD-R |
| 0x02 | CD-RW |
| 0x03 | DVD-R |
| 0x04 | DVD-RW |

### MILAGE_ERROR_CAUSE

| WERT | TEXT |
| --- | --- |
| 0x01 | Nichtmonotone Mileage (Combi prüfen) |
| 0x02 | Timeout (MOST Ring prüfen) |

### PDC_INTERNAL_ERROR

| WERT | TEXT |
| --- | --- |
| 0x01 | Wave Player |
| 0x02 | Audio Management |

### PERSONAL_DATAS_OFF_PD_ERR

| WERT | TEXT |
| --- | --- |
| 0x00000001 | Nachrichtenliste |
| 0x00000002 | Login-Daten (USSO last user) |
| 0x00000004 | BON Cache |
| 0x00000008 | BIN Cache |
| 0x00000010 | Internet Favoriten |
| 0x00000020 | Cookies |
| 0x00000040 | Fahrtenbuch |

### PERSONAL_DATAS_ON_PD_ERR

| WERT | TEXT |
| --- | --- |
| 0x00000001 | Bluetooth Device Liste |
| 0x00000002 | Phonebook |
| 0x00000004 | Kalender |
| 0x00000008 | Notizen |
| 0x00000010 | Sprachnotizen |
| 0x00000020 | Aufgaben |
| 0x00000040 | contact book |
| 0x00000080 | Letzte Suchbegriffe Sonderziele |
| 0x00000100 | Heruntergeladene Routen |
| 0x00000200 | Letzte Ziele |
| 0x00000400 | Settings Sonderziele |
| 0x00000800 | QDB |
| 0x00001000 | Entertainment-Server |
| 0x00002000 | BT Geräte Audio Streaming |
| 0x00004000 | Online Entertainment (Login Daten) |
| 0x00008000 | Musiksammlung |
| 0x00010000 | WLAN Daten |
| 0x00020000 | FBM Daten |
| 0x00040000 | Bordcomputer |
| 0x00080000 | HMI Cache (A4A) |
| 0x00100000 | Message Dictation Daten |
| 0x00200000 | PIA Profile |
| 0x80000000 | reserviert bis |

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

### PIA_ERROR_ID

| WERT | TEXT |
| --- | --- |
| 0x01 | no system function can fblock |
| 0x02 | unknown export error |
| 0x03 | no valid crypto key |
| 0x04 | mem allocation error |
| 0x05 | zlib initialization error |
| 0x06 | csm random init error |
| 0x07 | csm encrypt init error |
| 0x08 | csm encrypt update error |
| 0x09 | csm encrypt finalize error |
| 0x0A | csm mac init error |
| 0x0b | csm mac update error |
| 0x0C | csm mac finalize error |
| 0x0E | csm decrypt init error |
| 0x0F | csm decrypt update error |
| 0x10 | csm decrypt finalize error |
| 0x11 | unknown process error |

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

### PORT_LINK_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | kein Link-off festgestellt |
| 1 | Link-off festgestellt |

### POWER_SEQUENCE_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | CDCE (Clock generator) |
| 0x01 | Power-Good |

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
| 0x00 | ECU mehrmals programmierbar |
| 0x01 | ECU mindestens einmal vollstaendig programmierbar |
| 0x02 | ECU nicht mehr programmierbar |
| 0xff | ungültig |

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

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMB_SENSOR_WERT | lx | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient brightness of the local CID sensor (Lux). Range: [0x0000¿0x03E8] 0¿1000 Lux 0xFFFF invalid or sensor not implemented |
| STAT_BL_TEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Currently measured temperature of the backlight temperature sensor. Range: [0xD8¿0x78] -40°C bis  120°C 0x80 -128°C  Sensor Failure |
| STAT_VCC_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vcc voltage of the CID in steps of 1/10 V Range: [0x0000¿0xFFFE]  0xFFFF invalid |
| STAT_BACKLIGT_DRIVER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Error status output pins of the backlight LED. Range: [0x00¿0x03] 0xFF invalid |
| STAT_INT_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Contents of the Indigo register ¿IntStatus' Range: [0x0000¿0xFFFF] |

### RES_0X400D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_THRESHOLDS01_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 01 in 0¿100°C |
| STAT_TEMP_THRESHOLDS02_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 02 in 0¿100°C |
| STAT_TEMP_THRESHOLDS03_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 03 in 0¿100°C |
| STAT_TEMP_THRESHOLDS04_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 04 in 0¿100°C |
| STAT_TEMP_COUNTERS01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 01 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 02 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 03 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 04 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |

### RES_0X400E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAJOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Major SW version of the CID |
| STAT_MINOR_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minor SW version of the CID |
| STAT_PATCH_VERSION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Patch version of the CID |

### RES_0X400F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_POWER_MODE | 0-n | high | unsigned char | - | TAB_StatusCIDPowerMode | - | - | - | Indicates if the CID is enabled by the head unit power mode |
| STAT_ERROR_FLAGS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates which internal error are active.Range: [0x0000¿0xFFFF] |
| STAT_MAIN_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDMainState | - | - | - | Main state of the CID state machine |
| STAT_OPERATION_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDOperationState | - | - | - | Operation state of the CID state machine |
| STAT_INIT_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDInitState | - | - | - | Initialization (startup) state of the CID state machine |
| STAT_COM_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDComState | - | - | - | State of the communication stack |
| STAT_SCHEDULE_ID | 0-n | high | unsigned char | - | TAB_STATUSCIDSCHEDULEID | - | - | - | Schedule ID of communication stack. Range: [0x00¿0x04] 0xFF invalid |
| STAT_FADE_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDFadeState | - | - | - | Fading state of the dimming module |
| STAT_FLASH_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDFlashState | - | - | - | Flash reading state of the GDC module |
| STAT_FLASH_DATA_CHANGED | 0-n | high | unsigned char | - | TAB_StatusCIDFlashDataChange | - | - | - | Indicates if the flash data of the connected CID has been changed and must be saved by the head unit |
| STAT_DISPLAY_VOLTAGE | 0-n | high | unsigned char | - | TCIDOnOffAction | - | - | - | Activation state of the display power supply |
| STAT_DISPLAY_ENABLE | 0-n | high | unsigned char | - | TCIDOnOffAction | - | - | - | Activation state of the complete CID (also contained in Status Monitor) |
| STAT_DISPLAY_READY | 0-n | high | unsigned char | - | TAB_CIDDisplayReady | - | - | - | Indicated if CID is ready to display or not (also contained in Status Monitor) |

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
| STAT_DIM_FADE_TIME_T0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Death time before fading starts (resolution 100ms). Range: [0x00¿0xFF] |
| STAT_DIM_FADE_TIME_T1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time to fade to current luminous density (resolution 100ms). Range: [0x00¿0x3F] |
| STAT_DIM_FADE_TIME_T2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Time to fade out (resolution 100ms). Range: [0x00¿0x3F] |
| STAT_DIM_FADE_EXPO_T1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  Fade in ramp curve exponent. 0=linear, 1=square, ... Range: [0x00¿0x04]  |
| STAT_DIM_FADE_EXPO_T2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 |  Fade out ramp curve exponent. 0=linear, 1=square, ... Range: [0x00¿0x04]  |
| STAT_DIM_FILT_CHANGE_SENSITIVITY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Adjusts the reaction on  strong signal changes depending on the time the input value is stable. 0 = no adjustment (old filter algorithm) 1-65535 = number of dim cycles the input value has to be stable Range: [0x0000¿0xFFFF] |
| STAT_DIM_MIN_OFFSET_BRIG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Lower border of the brightness offset regulation range |
| STAT_ENDIANESS_ADAPTED_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Indicates if the endianess of the coding data block has been adapted or not |
| STAT_PADDING_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Padding for further use |

### RES_0X4011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Value of the location in the car |
| STAT_PART_NR_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Value of the BMW part number. Byte 0¿1=0 Byte 2¿5=BMW Teilenummer |
| STAT_SUPPLIER_NR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Value of the supplier part number |
| STAT_SERIAL_NUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Value of the serial number. |
| STAT_PRODUCTION_YEAR_WERT | HEX | high | unsigned char | - | - | - | - | - | Year of production of the CID |
| STAT_PRODUCTION_MONTH_WERT | HEX | high | unsigned char | - | - | - | - | - | Month of production of the CID |
| STAT_PRODUCTION_DAY_WERT | HEX | high | unsigned char | - | - | - | - | - | Day of production of the CID |
| STAT_HARDWARE_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hardware version of the CID |
| STAT_DISPLAY_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Display version of the CID |
| STAT_MECHANICAL_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mechanical version of the CID |
| STAT_FLASH_DATA_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Flash data version of the CID |

### RES_0X4014_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AMB_SENSOR_WERT | lx | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Ambient brightness of the local CID sensor (Lux). Range: [0x0000¿0x03E8] 0¿1000 Lux 0xFFFF invalid or sensor not implemented |
| STAT_BL_TEMP_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Currently measured temperature of the backlight temperature sensor. Range: [0xD8¿0x78] -40°C bis  120°C 0x80 -128°C  Sensor Failure |
| STAT_VCC_VOLTAGE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Vcc voltage of the CID in steps of 1/10 V Range: [0x0000¿0xFFFE]  0xFFFF invalid |
| STAT_BACKLIGT_DRIVER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Error status output pins of the backlight LED. Range: [0x00¿0x03] 0xFF invalid |
| STAT_INT_STATUS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Contents of the Indigo register ¿IntStatus' Range: [0x0000¿0xFFFF] |

### RES_0X4017_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_THRESHOLDS01_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 01 in 0¿100°C |
| STAT_TEMP_THRESHOLDS02_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 02 in 0¿100°C |
| STAT_TEMP_THRESHOLDS03_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 03 in 0¿100°C |
| STAT_TEMP_THRESHOLDS04_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Temperature threshold 04 in 0¿100°C |
| STAT_TEMP_COUNTERS01_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 01 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS02_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 02 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS03_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 03 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |
| STAT_TEMP_COUNTERS04_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Temperature counter 04 of the CID. Range: [0x00¿0x64] 0...100°C 0xFF invalid value |

### RES_0X4019_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_POWER_MODE | 0-n | high | unsigned char | - | TAB_StatusCIDPowerMode | 1.0 | 1.0 | 0.0 | Indicates if the CID is enabled by the head unit power mode |
| STAT_ERROR_FLAGS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Indicates which internal error are active.Range: [0x0000¿0xFFFF] |
| STAT_MAIN_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDMainState | 1.0 | 1.0 | 0.0 | Main state of the CID state machine |
| STAT_OPERATION_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDOperationState | 1.0 | 1.0 | 0.0 | Operation state of the CID state machine |
| STAT_INIT_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDInitState | 1.0 | 1.0 | 0.0 | Initialization (startup) state of the CID state machine |
| STAT_COM_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDComState | 1.0 | 1.0 | 0.0 | State of the communication stack |
| STAT_SCHEDULE_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Schedule ID of communication stack. Range: [0x00¿0x04] 0xFF invalid |
| STAT_FADE_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDFadeState | 1.0 | 1.0 | 0.0 | Fading state of the dimming module |
| STAT_FLASH_STATE | 0-n | high | unsigned char | - | TAB_StatusCIDFlashState | 1.0 | 1.0 | 0.0 | Flash reading state of the GDC module |
| STAT_FLASH_DATA_CHANGED | 0-n | high | unsigned char | - | TAB_StatusCIDFlashDataChange | 1.0 | 1.0 | 0.0 | Indicates if the flash data of the connected CID has been changed and must be saved by the head unit |
| STAT_DISPLAY_VOLTAGE | 0-n | high | unsigned char | - | TCIDOnOffAction | 1.0 | 1.0 | 0.0 | Activation state of the display power supply |
| STAT_DISPLAY_ENABLE | 0-n | high | unsigned char | - | TCIDOnOffAction | 1.0 | 1.0 | 0.0 | Activation state of the complete CID (also contained in Status Monitor) |
| STAT_DISPLAY_READY | 0-n | high | unsigned char | - | TAB_CIDDisplayReady | 1.0 | 1.0 | 0.0 | Indicated if CID is ready to display or not (also contained in Status Monitor) |

### RES_0X401A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Value of the location in the car |
| STAT_PART_NR_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Value of the BMW part number. Byte 0¿1=0 Byte 2¿5=BMW Teilenummer |
| STAT_SUPPLIER_NR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Value of the supplier part number |
| STAT_SERIAL_NUMBER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Value of the serial number. |
| STAT_PRODUCTION_YEAR_WERT | HEX | high | unsigned char | - | - | - | - | - | Year of production of the CID |
| STAT_PRODUCTION_MONTH_WERT | HEX | high | unsigned char | - | - | - | - | - | Month of production of the CID |
| STAT_PRODUCTION_DAY_WERT | HEX | high | unsigned char | - | - | - | - | - | Day of production of the CID |
| STAT_HARDWARE_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Hardware version of the CID |
| STAT_DISPLAY_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Display version of the CID |
| STAT_MECHANICAL_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mechanical version of the CID |
| STAT_FLASH_DATA_VERSION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Flash data version of the CID |

### RES_0XA01C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HERSTELLUNG_VIDEOVERBINDUNG | - | - | + | 0-n | - | unsigned char | - | THerstellungStatus | 1.0 | 1.0 | 0.0 | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. |
| STAT_HERSTELLUNG_FEHLER | - | - | + | 0-n | - | unsigned char | - | THerstellungFehler | 1.0 | 1.0 | 0.0 | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. - Wenn STAT_HERSTELLUNG_VIDEOVERBINDUNG den Wert 0,1 oder 2 aufweist. |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Ausgewählte Quelle: Tabelle TVideoQuelle |
| STAT_SENKEN | - | - | + | 0-n | - | unsigned int | - | TVideoSenke | 1.0 | 1.0 | 0.0 | Ausgwählte Senke: Bitkombination: Tabelle TVideoSenke |

### RES_0XA01D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt nach Tabelle TVideoQuelle bzw. TEingangVideoSwitch an, welche Quelle(n) getestet wurde(n). |
| STAT_TEST_VIDEOEINGANG | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Quelle(n) wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_SIGNALE_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, wie vielen Fehler während des Test gefunden wurden. |
| STAT_FEHLER_1_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. X ist kleiner gleich der Anzahl der auf das Steuergerät schaltbaren Quellen. Für den Videoswitch und die Monitore sind die schaltbaren Quellen gleich der Anzahl der Eingänge. Bei N theoretisch verbaubaren und schaltbaren Quellen muss dieses Result N-mal implementiert werden. Beispiel falls es nur möglichen Quellen gäbe: STAT_FEHLER_1_ FEHLERART, STAT_FEHLER_2_ FEHLERART |
| STAT_FEHLER_1_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_1_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | ertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_2_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_3_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_4_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_5_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_6_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_7_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_8_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_8_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_9_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_9_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_10_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_10_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_11_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_11_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_12_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_12_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_13_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_13_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_14_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_14_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_15_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_15_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | 1.0 | 1.0 | 0.0 | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_16_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | 1.0 | 1.0 | 0.0 | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_16_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | 1.0 | 1.0 | 0.0 | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |

### RES_0XA01E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | high | unsigned long | - | TVerbauRoutine | - | - | - | Ausgeführte Testroutine(n). |
| STAT_TEST_VERBAU | - | - | + | 0-n | high | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des Verbautests wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |

### RES_0XA022_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | Routine(n), die getestet wurde(n). Tabelle  TSelbsttestRoutine |
| STAT_SELBSTTEST | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des Tests wieder. |

### RES_0XA024_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MENU_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID des Menüs. |
| STAT_MENUE_ITEM_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID des Eintrages im Menü |
| STAT_MENU_RSE_RIGHT_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID des Menü der zweiten MMI, z.B. RSE rechter Bildschirm. |
| STAT_MENUE_ITEM_RSE_RIGHT_WERT | - | - | + | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID des Eintrages im Menü der zweiten MMI, z.B. RSE rechter Bildschirm |

### RES_0XA02E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_1_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Lieferanten ID USB Stick 1 |
| STAT_1_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Produkt ID USB Stick 1 |
| STAT_1_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Class-ID USB Stick 1 |
| STAT_1_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Subclass-ID USB Stick 1 |
| STAT_1_KM_FIRST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Connect von USB Stick 1 |
| STAT_1_KM_FIRST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Disconnect von USB Stick 1 |
| STAT_1_KM_LAST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Connect von USB Stick 1 |
| STAT_1_KM_LAST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Diconnect von USB Stick 1 |
| STAT_1_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Connections USB Stick 1 |
| STAT_1_CONNECT_STATE | + | - | - | 0-n | - | unsigned char | - | TUsbConnectionState | 1.0 | 1.0 | 0.0 | Aktueller Zustand Connection USB Stick 1 |
| STAT_1_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TUsbInterface | 1.0 | 1.0 | 0.0 | Benutzter Port USB Stick 1 0: USB Interface 1: Snap In Adapter |
| STAT_2_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Lieferanten ID USB Stick 2 |
| STAT_2_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Produkt ID USB Stick 2 |
| STAT_2_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Class-ID USB Stick 2 |
| STAT_2_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Subclass-ID USB Stick 2 |
| STAT_2_KM_FIRST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Connect von USB Stick 2 |
| STAT_2_KM_FIRST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Disconnect von USB Stick 2 |
| STAT_2_KM_LAST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Connect von USB Stick 2 |
| STAT_2_KM_LAST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Diconnect von USB Stick 2 |
| STAT_2_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Connections USB Stick 2 |
| STAT_2_CONNECT_STATE | + | - | - | 0-n | - | unsigned char | - | TUsbConnectionState | 1.0 | 1.0 | 0.0 | Aktueller Zustand Connection USB Stick 2 |
| STAT_2_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TUsbInterface | 1.0 | 1.0 | 0.0 | Benutzter Port USB Stick 2 0: USB Interface 1: Snap In Adapter |
| STAT_3_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Lieferanten ID USB Stick 3 |
| STAT_3_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Produkt ID USB Stick 3 |
| STAT_3_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Class-ID USB Stick 3 |
| STAT_3_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Subclass-ID USB Stick 3 |
| STAT_3_KM_FIRST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Connect von USB Stick 3 |
| STAT_3_KM_FIRST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Disconnect von USB Stick 3 |
| STAT_3_KM_LAST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Connect von USB Stick 3 |
| STAT_3_KM_LAST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Diconnect von USB Stick 3 |
| STAT_3_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Connections USB Stick 3 |
| STAT_3_CONNECT_STATE | + | - | - | 0-n | - | unsigned char | - | TUsbConnectionState | 1.0 | 1.0 | 0.0 | Aktueller Zustand Connection USB Stick 3 |
| STAT_3_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TUsbInterface | 1.0 | 1.0 | 0.0 | Benutzter Port USB Stick 3 0: USB Interface 1: Snap In Adapter |
| STAT_4_VENDORID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Lieferanten ID USB Stick 4 |
| STAT_4_PRODUCTID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Produkt ID USB Stick 4 |
| STAT_4_CLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Class-ID USB Stick 4 |
| STAT_4_SUBCLASSID_WERT | + | - | - | HEX | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Subclass-ID USB Stick 4 |
| STAT_4_KM_FIRST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Connect von USB Stick 4 |
| STAT_4_KM_FIRST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim ersten Disconnect von USB Stick 4 |
| STAT_4_KM_LAST_CONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Connect von USB Stick 4 |
| STAT_4_KM_LAST_DISCONNECT_WERT | + | - | - | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand beim letzten Diconnect von USB Stick 4 |
| STAT_4_CONNECTIONS_WERT | + | - | - | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Connections USB Stick 4 |
| STAT_4_CONNECT_STATE | + | - | - | 0-n | - | unsigned char | - | TUsbConnectionState | 1.0 | 1.0 | 0.0 | Aktueller Zustand Connection USB Stick 4 |
| STAT_4_USED_PORT | + | - | - | 0-n | - | unsigned char | - | TUsbInterface | 1.0 | 1.0 | 0.0 | Benutzter Port USB Stick 4 0: USB Interface 1: Snap In Adapter |

### RES_0XA03C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TLuefterStatus | 1.0 | 1.0 | 0.0 | Status des Lüfters. |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | Hz | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Frequenz des Lüfters in Hz. (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### RES_0XA04D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INITIALISATION_COUNTER_REGION_CODE_DVD_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert ÄnderugszählerDVDLändercode |

### RES_0XA0A1_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLEER_ASSOCIATION_MODE | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status des Verbindungsprozess |

### RES_0XA0B0_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TELNET_ZUGANG | - | - | + | 0-n | high | unsigned char | - | TAB_ONOFF | - | - | - | Status des Telnetzugangs der HU oder des RSE. |

### RES_0XA0D9_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INITIALISATION_COUNTER_REGION_CODE_BLURAY_WERT | - | - | + | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Wert ÄnderugszählerBDLändercode |

### RES_0XD00A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MEMORYSPACE_FLASH_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Flashspeicher in kByte |
| STAT_FREE_MEMORYSPACE_FLASH_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | freier Flashspeicher |
| STAT_FREE_MEMORYSPACE_FLASH_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | freier Flashspeicher in % |
| STAT_MEMORYSPACE_RAM_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RAM Speicher in kByte |
| STAT_FREE_MEMORYSPACE_RAM_KBYTE_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | freier RAM Speicher in kByte |
| STAT_FREE_MEMORYSPACE_RAM_PERCENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | freier RAM Speicher in % |

### RES_0XD00C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUTE_LAUFWERKE | 0-n | - | unsigned int | - | TLaufwerk | - | - | - | Liest aus, welche Laufwerke verbaut sind. |
| STAT_VENDORID_TAPE_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_TAPE_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_TAPE_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_CD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_CD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_CD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_DVD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_DVD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_DVD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_BLURAY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Vendor ID of the Blu-ray drive |
| STAT_PRODUCTID_BLURAY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Product ID of the Blu-ray drive |
| STAT_FIRMWARE_BLURAY_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Firmware version of the Blu-ray drive |
| STAT_VENDORID_MD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_MD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_MD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_HDD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_HDD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_HDD_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_USB_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_USB_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_USB_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_FLASHSPEICHER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_FLASHSPEICHER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_FLASHSPEICHER_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |

### RES_0XD026_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_FOT_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Fibre Optical Transceivers (FOT). Bereich: -127,&,127 |
| STAT_TEMP_ENDSTU_WERT | °C | - | signed int | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur der Endstufe. Bereich: -32767,&, 32767 |
| STAT_TEMP_GYRO_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Gyro. Bereich: -127,&,127 |
| STAT_TEMP_MOD_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des Moduls (normalerweise prozessornah). Bereich: -127,&,127 |
| STAT_TEMP_HDD_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des HDD-Laufwerks. Bereich: -127,&,127 |
| STAT_TEMP_DVD_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | liefert die Temperatur des DVD-Laufwerks. Bereich: -127,&,127 |

### RES_0XD02C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISC_IDENT_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Disk Identifier für das beinhaltete Medium |
| STAT_DIGITAL_PLAYBACK_QUALITY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Quality of the digital recording: Range: 0-15 0-1: medium not readable (drive not ok) 2-8: Distortion / mute audible points (drive not ok) 9-14: Medium readable, no audible distortion (drive ok) 15: Medium quality 100%, such as BLER 0 (drive ok) |

### RES_0XD03F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HMI_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle HMI Version als String wie im Entwicklermenü angezeigt |
| STAT_SVS_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle SVS Version als String wie im Entwicklermenü angezeigt |
| STAT_TEXT_VERSION_TEXT | TEXT | - | string | - | - | 1.0 | 1.0 | 0.0 | Akuelle TEXT Version als String wie im Entwicklermenü angezeigt |

### RES_0XD092_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TIME_AFTER_START_UP_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Werte von 0-255 [s], die angeben, wie viel Zeit seit dem Hochstarten (Aufwecken) vergangen ist |
| STAT_TIME_AFTER_POWER_DOWN_AVAILABLE_WERT | s | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Werte von 0-127 [s], die angeben, wie viel Zeit vergangen ist, seit dem intern der Staus erreicht wurde, sofort einen Powerdown auszuführen. -1 bedeutet 'noch nicht erreicht' |
| STAT_TIME_AFTER_FULLY_OPERATIONAL_WERT | s | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Werte von 0-127 [s], die angeben, wie viel Zeit vergangen ist, seit dem intern der Staus 'vollständig aufgestartet' erreicht wurde. -1 bedeutet 'noch nicht erreicht' |

### RES_0XD0A0_D

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

### RES_0XD0B2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISPLAY_AKTIVIERUNG | 0-n | - | unsigned char | - | TStatusDisplayActivationMode | 1.0 | 1.0 | 0.0 | Display-Aktivierung [uint8, 0x0..0xF]  (Signal ENB_DISP von Head Unit) |
| STAT_OFFSET_HELLIGKEIT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Offset Helligkeit [sint8, -127..+127 = -100..+100%, 128 = Ungültig, Fehlerwert]  (Signal OFFS_BRIG_FRT von Head Unit) |
| STAT_DIMMRAD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dimmrad-Stellung [uint8, 0..254 = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal CTR_ILUM_SW) |
| STAT_HELLIGKEIT_KOMBI_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Helligkeitswert I-Kombi-Helligkeits-Sensor [uint8, 0..254  = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal DSTN_LCD_LUM) |
| STAT_DAEMPFUNG_LCD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dämpfung LCD Leuchtdichte [uint8, 0..240 = schnell..langsam, 241..254 = sprunghaft, 255 = FF = Ungültig, Fehlerwert], Geschwindigkeit der Helligkeitsregelung. (Signal DMPNG_LCD_LUM) |

### RES_0XD0B4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_PART_NR_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | BMW Teilenummer |

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
| STAT_ERROR_DURING_PLAYBACK_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Dateien, die Probleme bei der Wiedergabe verursachten |
| STAT_PLAYBACK_TIME_CD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | playback time for using the CD drive |
| STAT_PLAYBACK_TIME_DVD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | playback time for using the DVD drive |
| STAT_PLAYBACK_TIME_BLURAY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Playback time while using the Blu-ray drive in hours |
| STAT_INSERT_EJECT_COUNT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | counter for insert or eject a medium into a CD/ DVD drive |

### RES_0XD227_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REED_SWITCH_LEFT | 0-n | high | unsigned char | - | TAB_REED_SWITCH | - | - | - | Status des linken RR Flap CID Reed Schalters |
| STAT_REED_SWITCH_RIGHT | 0-n | high | unsigned char | - | TAB_REED_SWITCH | - | - | - | Status des rechten RR Flap CID Schalters |

### RES_0XD5CF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISPLAY_AKTIVIERUNG | 0-n | - | unsigned char | - | TStatusDisplayActivationMode | 1.0 | 1.0 | 0.0 | Display-Aktivierung [uint8, 0x0..0xF]  (Signal ENB_DISP von Head Unit) |
| STAT_OFFSET_HELLIGKEIT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Offset Helligkeit [sint8, -127..+127 = -100..+100%, 128 = Ungültig, Fehlerwert]  (Signal OFFS_BRIG_FRT von Head Unit) |
| STAT_DIMMRAD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dimmrad-Stellung [uint8, 0..254 = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal CTR_ILUM_SW) |
| STAT_HELLIGKEIT_KOMBI_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Helligkeitswert I-Kombi-Helligkeits-Sensor [uint8, 0..254  = 0-100%, 255 = FF = Ungültig, Fehlerwert]  (Signal DSTN_LCD_LUM) |
| STAT_DAEMPFUNG_LCD_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Dämpfung LCD Leuchtdichte [uint8, 0..240 = schnell..langsam, 241..254 = sprunghaft, 255 = FF = Ungültig, Fehlerwert], Geschwindigkeit der Helligkeitsregelung. (Signal DMPNG_LCD_LUM) |

### RES_0XD5D4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CID_LOCATION_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CID Location |
| STAT_PART_NR_DATA | DATA | - | data[6] | - | - | 1.0 | 1.0 | 0.0 | BMW Teilenummer |

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
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| STEUERN_LINEAR | 0xA004 | - | Zurücksetzen der Fader und Lautstärke auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_EJECT | 0xA006 | - | Steuern des Auswurfs der Medien aus den Laufwerken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA006_R | - |
| STEUERN_EMERGENCY_EJECT | 0xA007 | - | Notauswurf | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA007_R | - |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A_R | - |
| VIDEOVERBINDUNG | 0xA01C | - | Steuern, Stoppen und Abfragen einer Videoverbindung . | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01C_R | RES_0xA01C_R |
| TEST_VIDEOEINGANG | 0xA01D | - | Testet die Videoeingänge durch Analyse der dort anliegenden Signale | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01D_R | RES_0xA01D_R |
| TEST_VERBAU | 0xA01E | - | Startet die Verbauprüfung der externen Anschlüsse. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01E_R | RES_0xA01E_R |
| SELBSTTEST | 0xA022 | - | Selbsttests des Steuergerätes Sie sollen einen evtl. notwendigen Tausch von Software/Hardware erkennen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA022_R | RES_0xA022_R |
| MENU | 0xA024 | - | Einstellen eines MMI Menüs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA024_R | RES_0xA024_R |
| STATUS_USB_STACK_INFO_FOR_DEVICE | 0xA02E | - | - | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA02E_R | RES_0xA02E_R |
| STEUERN_TRACK_NUMBER | 0xA037 | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA037_R | - |
| LUEFTER | 0xA03C | - | Steuerung und Status des Lüfters. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C_R | RES_0xA03C_R |
| INITIALISATION_COUNTER_REGION_CODE_DVD | 0xA04D | - | Wert des Änderungszähles für den DVD Ländercode | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA04D_R |
| KLEER_DELETE_ASSOCIATED_DEVICES_BY_ID | 0xA0A0 | - | Löscht ein verbundenes Gerät anhand seiner UID | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0A0_R | - |
| KLEER_ASSOCIATION_MODE | 0xA0A1 | - | Aktiviert/ Deaktiviert den Verbindungsmodus des KLEER Moduls; Gibt den Status über den Verbindungsmodus zurück | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0A1_R |
| KLEER_DELETE_ASSOCIATED_DEVICES_BY_CLASS | 0xA0AD | - | Löscht verbundenen Geräte anhand ihrer Klasse | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA0AD_R | - |
| TELNET_ZUGANG_AUS | 0xA0B0 | - | Der Job deaktiviert den Telnet Zugang in HU oder RSE. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0B0_R |
| INITIALISATION_COUNTER_REGION_CODE_BLURAY | 0xA0D9 | - | Wert des Änderungszählers für den BD Ländercode | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA0D9_R |
| STATUS_MEMORY_USAGE | 0xD00A | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00A_D |
| STATUS_LESEN_LAUFWERK | 0xD00C | - | Liest aus, welche Laufwerke verbaut sind. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00C_D |
| SER_NR_DOM_LESEN | 0xD019 | STAT_SER_NR_DOM_TEXT | Ließt die Seriennummer mit 14 Zeichen (DIN ISO 10 486) | TEXT | - | - | string[14] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LOGISTIC_NR | 0xD020 | STAT_LOGISTIC_NR_TEXT | Auslesen der Logistik-Nummer. ACHTUNG: RESULT wird von _WERT auf _TEXT gewandelt! | TEXT | - | - | string[7] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_ANALOG_TEMPERATUR | 0xD026 | - | Abfrage der Temperaturen des Steuergerätes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD026_D |
| STATUS_CD_MD_CDC | 0xD02C | - | Liest den Identifier des Mediums und das Qualitätslevel der digitalen Aufnahme aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD02C_D |
| STATUS_HMI_VERSION | 0xD03F | - | HMI Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD03F_D |
| STATUS_TIME_AFTER_STARTUP | 0xD092 | - | Gibt die Zeiten an, die nach verschiedenen System-Aufstart-punkten vergangen sind | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD092_D |
| KLEER_ASSOCIATE_DEVICES | 0xD0A0 | - | Schreibt die UID und den Typ mit dem zu verbindenden KLEER Gerät in das KLEER Modul; Gibt das aktuell verbundene KLEER Gerät zurück | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0A0_D | RES_0xD0A0_D |
| CID_TESTBILD_RECHTS | 0xD0AB | - | Startet/Stoppt Anzeige von Testbildern | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0AB_D | - |
| CID_BACKLIGHT_RECHTS | 0xD0AC | - | Setzen des CID Hintergrundbeleuchtung PWM levels | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0AC_D | - |
| CID_STEUERN_ENDE_RECHTS | 0xD0AD | - | Beendet alle Diagnose-sessions durch rücksetzen aller parameter, welche durch vorherige Diagnose-requests verändert wurden. Die CID geht in den  Video Mode  zurück. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0AD_D | - |
| CID_PHOTOSENSOR_RECHTS | 0xD0AE | STAT_PHOTOSENSOR_CID_WERT | Analogwert Fototransistor im CID | lux | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_TEMP_BACKLIGHT_RECHTS | 0xD0AF | STAT_TEMP_BACKLIGHT_WERT | Temperatur Hintergrundbeleuchtung | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_SOLLWERT_RECHTS | 0xD0B0 | STAT_HELLIGKEIT_SOLL_WERT | Soll-Helligkeitswert vom Dimm-Modul | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_ISTWERT_RECHTS | 0xD0B1 | STAT_HELLIGKEIT_IST_WERT | Ist-Helligkeitswert | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_EINGANGSWERTE_LESEN_RECHTS | 0xD0B2 | - | gibt alle eingegebenen Werte aus,welche von externen ECU`s über das HU Auto-Netzwerk interface oder dem HU selber an das CID-SW übergeben wurden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0B2_D |
| CID_VERBINDUNG_RECHTS | 0xD0B3 | STAT_CID_VERBINDUNG | Status der CID-Verbindung: 0 = CID-Verbindung in Ordnung, Bild wird angezeigt 1 = Keine Aktivierung der Bildausgabe 2 = Anzeigegerät nicht anzeigebereit 3 = Keine Kommunikation mit Anzeigegerät 4 = Bilddaten ungültig 255 = Ungültigkeitswert (Default nach RESET) | 0-n | - | - | unsigned char | TAB_CID_VERBINDUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_DETAIL_INFORMATIONEN_RECHTS | 0xD0B4 | - | gibt die Logistikinformationen zurück CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0B4_D |
| CID_STEUERN_RECHTS | 0xD0B5 | - | schaltet CID Display und Hintergrundlicht ein und aus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0B5_D | - |
| KLEER_ACTIVATION | 0xD0BB | - | Dieser Job aktiviert / deaktiviert das KLEER Modul. ; Dieser Job gibt den Aktivierungsstatus des Kleer Moduls zurück. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD0BB_D | RES_0xD0BB_D |
| MEDIA_STATISTIK | 0xD0D1 | - | Returns the CD/ DVD media statistic | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D1_D |
| STATUS_DRIVE | 0xD0E2 | STAT_MEDIUM_INSERTED | Information if and what type of medium is inserted into drive as integer | 0-n | - | - | unsigned char | TAB_INSERTEDMEDIUM | - | - | - | - | 22 | - | - |
| REED_SWITCHES | 0xD227 | - | Status des RSE Flap CID Reed Sensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD227_D |
| CID_TESTBILD | 0xD5C1 | - | Ansteuerung der Testbild-Ausgabe vom CID. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C1_D | - |
| CID_STEUERN | 0xD5C2 | - | Ein- und Ausschalten des CID per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C2_D | - |
| CID_BACKLIGHT | 0xD5C4 | - | Ansteuerung der Hintergrundbeleuchtung des CIDs per Diagnose. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C4_D | - |
| CID_STEUERN_ENDE | 0xD5C9 | - | Beendet alle Ansteuerungen im CID, die mit Diagnose  gestartet worden sind. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5C9_D | - |
| CID_PHOTOSENSOR | 0xD5CB | STAT_PHOTOSENSOR_CID_WERT | Analogwert Fototransistor im CID | lx | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_TEMP_BACKLIGHT | 0xD5CC | STAT_TEMP_BACKLIGHT_WERT | Temperatur Hintergrundbeleuchtung | °C | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_SOLLWERT | 0xD5CD | STAT_HELLIGKEIT_SOLL_WERT | Soll-Helligkeitswert vom Dimm-Modul | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_HELLIGKEIT_ISTWERT | 0xD5CE | STAT_HELLIGKEIT_IST_WERT | Ist-Helligkeitswert | % | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_EINGANGSWERTE_LESEN | 0xD5CF | - | Ausgabe der aktuellen Eingangswerte des CID. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5CF_D |
| CID_VERBINDUNG | 0xD5D0 | STAT_CID_VERBINDUNG | Status der CID-Verbindung: 0 = CID-Verbindung in Ordnung, Bild wird angezeigt 1 = Keine Aktivierung der Bildausgabe 2 = Anzeigegerät nicht anzeigebereit 3 = Keine Kommunikation mit Anzeigegerät 4 = Bilddaten ungültig 255 = Ungültigkeitswert (Default nach RESET) | 0-n | - | - | unsigned char | TAB_CID_VERBINDUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| CID_DETAIL_INFORMATIONEN | 0xD5D4 | - | Logistikinformationen CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5D4_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| STATUS_SENSOR_WERTE | 0x400A | - | Returns all filtered internal sensor values | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| STEUERN_TESTBILD_ERWEITERT | 0x400B | - | Starts / stops displaying of test pictures. This service extends the diagnostic service ¿STEUERN_TESTBILD¿ by providing more test pictures. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400B_D | - |
| STEUERN_RGB_SCREEN | 0x400C | - | Starts and stops displaying test pictures. In contrast to the service STEUERN_TESTBILD_CID this job allows to set the desired colour of the test pic-ture by passing the RGB values. The CID returns into ¿Video Mode¿. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400C_D | - |
| TEMPERATUPROFIL | 0x400D | - | The temperature counter and the corresponding temperature thresholds | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x400D_D | RES_0x400D_D |
| STATUS_CID_SW_VERSION | 0x400E | - | Returns the current CID-SW version. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400E_D |
| STATUS_INTERNAL_STATES | 0x400F | - | Returns important internal state variables of the CID software bus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400F_D |
| CID_CODIERDATEN | 0x4010 | - | Overwrites / Reads CID coding data in RAM temporarily | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4010_D |
| STATUS_CID_DETAIL_INFORMATION_EXTENDED | 0x4011 | - | Returns the extended logistic information of the currently connected CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4011_D |
| STATUS_SENSOR_WERTE_RECHTS | 0x4014 | - | Returns all filtered internal sensor values | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4014_D |
| STEUERN_TESTBILD_ERWEITERT_RECHTS | 0x4015 | - | Starts / stops displaying of test pictures. This service extends the diagnostic service ¿STEUERN_TESTBILD_RECHTS¿ by providing more test pictures. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4015_D | - |
| STEUERN_RGB_SCREEN_RECHTS | 0x4016 | - | Starts and stops displaying test pictures. In contrast to the service STEUERN_TESTBILD_CID this job allows to set the desired colour of the test pic-ture by passing the RGB values. The CID returns into ¿Video Mode¿. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4016_D | - |
| STATUS_TEMPERATURPROFIL_RECHTS | 0x4017 | - | Returns the temperature counter and the corresponding temperature thresholds | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4017_D |
| STEUERN_TEMPERATURPROFIL_RECHTS | 0x4018 | - | Returns the temperature counter and the corresponding temperature thresholds | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4018_D | - |
| STATUS_INTERNAL_STATES_RECHTS | 0x4019 | - | Returns important internal state variables of the CID software bus | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4019_D |
| STATUS_CID_DETAIL_INFORMATION_EXTENDED_RECHTS | 0x401A | - | Returns the extended logistic information of the currently connected CID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401A_D |

### TAB_0X1708

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 |

### TAB_0X1753

| UW_ANZ | UW1_NR |
| --- | --- |
| 1 | 0x0017 |

### TAB_0X1754

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F |

### TAB_0X1755

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0020 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0038 | 0x0039 | 0x003A | 0x003B | 0x003C | 0x003D | 0x003E | 0x003F | 0x0040 | 0x0041 | 0x0042 | 0x0043 | 0x0044 | 0x0045 | 0x0046 | 0x0047 |

### TAB_ABILITY_TO_WAKE_DOP

| WERT | TEXT |
| --- | --- |
| 0 | off |
| 1 | on |
| 2 | critical |

### TAB_BATTERYSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verfügbar |
| 0x01 | Zwischen 0% und 20 % |
| 0x02 | Zwischen 20% und 40 % |
| 0x03 | Zwischen 40% und 60 % |
| 0x04 | Zwischen 60% und 80 % |
| 0x05 | Zwischen 80% und 100 % |
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

### TAB_CID_VERBINDUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | CID-Verbindung in Ordnung, Bild wird angezeigt |
| 0x01 | Keine Aktivierung der Bildausgabe |
| 0x02 | Anzeigegerät nicht anzeigebereit |
| 0x03 | Keine Kommunikation mit Anzeigegerät |
| 0x04 | Bilddaten ungültig |
| 0xFF | Ungültigkeitswert |

### TAB_CONNECTION_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verbunden |
| 0x01 | verbunden |
| 0xFF | nicht definiert |

### TAB_CONNECTION_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Connection completed-demuted |
| 0x01 | Connection completed-stillmuted |
| 0x02 | Allocated and connected, but no Source Activity |
| 0x03 | Partly built up |
| 0x04 | Connection in memory |
| 0x05 | Connection paused |
| 0x10 | Connection implemented |
| 0xFF | Not defined |

### TAB_INSERTEDMEDIUM

| WERT | TEXT |
| --- | --- |
| 0x00 | No medium inserted |
| 0x01 | Medium recognition in progress |
| 0x02 | CD medium inserted |
| 0x03 | DVD medium inserted |
| 0x04 | Flash memory medium inserted |
| 0x05 | Blu-ray medium inserted |
| 0xF0 | Medium ejected, but not removed |
| 0xF1 | Medium blocked |
| 0xFF | Not defined |

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

### TAB_LEFTORRIGHT

| WERT | TEXT |
| --- | --- |
| 0x00 | keinem |
| 0x01 | rechten |
| 0x02 | linken |
| 0xFF | nicht definiert |

### TAB_ONOFF

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | NICHT DEFINIERT |

### TAB_RECOVERY_STEPS

| WERT | TEXT |
| --- | --- |
| 0x00 | Restart Process |
| 0x01 | Restart Gesamtsystem |
| 0x02 | Löschen von KISU Updates |
| 0x03 | Reset zur letzten iStufe |
| 0x04 | Löschen der Persistenz |
| 0x05 | Aktivieren des  Sub-System Mode |

### TAB_REED_SWITCH

| WERT | TEXT |
| --- | --- |
| 0x00 | Reed-Schalter geöffnet (schaltet CID aus) |
| 0x01 | Reed-Schalter geschlossen (schaltet CID an) |

### TAB_RESET_REASON_DOP

| WERT | TEXT |
| --- | --- |
| 255 | keine Ursache fuer Reset bekannt |

### TAB_SIGNATUR_FALIURE_REASON

| WERT | TEXT |
| --- | --- |
| 0x00 | Hash Control |
| 0x01 | Link manager |
| 0x02 | Navigation |

### TAB_STATUSCIDSCHEDULEID

| WERT | TEXT |
| --- | --- |
| 0x00 | CIDCOM_SCHEDULE_READ_FLASH |
| 0x01 | CIDCOM_SCHEDULE_SYNC |
| 0x02 | CIDCOM_SCHEDULE_CHECK_COM |
| 0x03 | CIDCOM_SCHEDULE_READ_SENSORS |
| 0x04 | CIDCOM_SCHEDULE_ON |

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

### TAB_TYPEUSBDEVICE

| WERT | TEXT |
| --- | --- |
| 0x01 | USB Stick |
| 0x02 | IPOD |
| 0x03 | MTP Player |
| 0x04 | UNKNOWN |
| 0xFF | nicht definiert |

### TAB_WAKEUPREASON

| WERT | TEXT |
| --- | --- |
| 0x01 | CAN |
| 0x02 | MOST |
| 0x03 | IPC |
| 0x04 | INTERN |
| 0x05 | RESET/SWITCH TO POWER |
| 0x06 | SG-specific |
| 0xFF | not defined |

### TAUSGANGVIDEOSWITCH

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein VideoSwitch vorhanden bzw. verwendet |
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

### TCIDONOFFACTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Off |
| 0x01 | On |
| 0xFF | not defined |

### TEINGANGVIDEOSWITCH

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein VideoSwitch vorhanden bzw. verwendet |
| 0x0001 | Eingang 1 |
| 0x0002 | Eingang 2 |
| 0x0004 | Eingang 3 |
| 0x0008 | Eingang 4 |
| 0x0010 | Eingang 5 |
| 0x0020 | Eingang 6 |
| 0x0040 | Eingang 7 |
| 0x0080 | Eingang 8 |
| 0x0100 | Eingang 9 |
| 0xFFFF | Nicht definiert |

### TFBASEINGANG

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Eingänge |
| 0x00000001 | FBAS-Eingang 1 |
| 0x00000002 | FBAS-Eingang 2 |
| 0x00000004 | FBAS-Eingang 3 |
| 0x00000008 | FBAS-Eingang 4 |
| 0x00000010 | FBAS-Eingang 5 |
| 0x00000020 | FBAS-Eingang 6 |
| 0x00000040 | FBAS-Eingang 7 |
| 0x00000080 | FBAS-Eingang 8 |
| 0x00000100 | FBAS-Eingang 9 |
| 0xFFFFFFFF | nicht definiert |

### THERSTELLUNGFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Physikalischer Fehler |
| 0xFF | Nicht definiert |

### THERSTELLUNGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anfrage gestellt |
| 0x01 | Herstellung läuft |
| 0x02 | Herstellung beendet ohne Fehler |
| 0x03 | Herstellung beendet mit Fehler |
| 0x04 | Herstellung unterbrochen durch User-Interaktion |
| 0xFF | Nicht definiert |

### THWEINHEIT

| WERT | TEXT |
| --- | --- |
| 0xFF | Nicht definiert |

### THWLIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x00 | Harman Becker |
| 0x01 | Continental |
| 0x02 | Visteon |
| 0x03 | Alpine |
| 0x04 | Lear |
| 0x05 | Fuba |
| 0x06 | Hirschmann Car Communication |
| 0x07 | Magneti Marelli |
| 0xFF | Nicht definiert |

### TLAUFWERK

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein Laufwerk |
| 0x0001 | Kassette |
| 0x0002 | CD |
| 0x0004 | DVD |
| 0x0008 | MD |
| 0x0010 | HDD |
| 0x0012 | CD und HDD |
| 0x0014 | DVD und HDD |
| 0x0020 | USB |
| 0x0022 | CD und USB |
| 0x0024 | DVD und USB |
| 0x0032 | CD, HDD und USB |
| 0x0034 | DVD, HDD und USB |
| 0x0040 | Flash Speicher |
| 0x0042 | CD und Flash Speicher |
| 0x0044 | DVD und Flash Speicher |
| 0x0050 | HDD und Flash Speicher |
| 0x0054 | DVD, HDD und Flash Speicher |
| 0x0062 | CD, USB und Flash Speicher |
| 0x0064 | DVD, USB und Flash Speicher |
| 0x0080 | Blu-Ray |
| 0x0090 | Blu-Ray und HDD |
| 0x00A0 | Blu-Ray und USB |
| 0x00B0 | Blu-Ray, HDD und USB |
| 0x00C0 | Blu-Ray und Flash Speicher |
| 0x00D0 | Blu-Ray, HDD und Flash Speicher |
| 0x00E0 | Blu-Ray, USB und Flash Speicher |
| 0xFFFF | Nicht definiert |

### TLUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter läuft, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter läuft mit der erwarteteten Drehzahl |
| 0xFE | Lüfter läuft mit unbekannter Drehzahl |
| 0xFF | Nicht definiert |

### TSELBSTTESTROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0xFFFFFFFF | Nicht definiert |

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

### TSTATUSDISPLAYACTIVATIONMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CID aus |
| 0x01 | CID an |
| 0xFF | nicht definiert |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### TUNER_HW_COMMUNICATION_FAILURE_REASON

| WERT | TEXT |
| --- | --- |
| 0x01 | No communication to the tuner module possible |
| 0x02 | wrong firmware version |

### TUSBCONNECTIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht angeschlossen |
| 0x01 | angeschlossen |
| 0xFF | nicht definiert |

### TUSBINTERFACE

| WERT | TEXT |
| --- | --- |
| 0x00 | USB Interface |
| 0x01 | Snap In Adapter |
| 0xFF | nicht definiert |

### TVERBAUROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0x00000001 | Verbindung Head-Unit zum Diversity |
| 0x00000002 | Verbindung Diversity zu den Antennen |
| 0x00000004 | Verbindung Head-Unit zum DAB L-Band Antennenfuß |
| 0x00000008 | Verbindung Head-Unit zum DAB Band III Antennenfuß |
| 0x00000010 | Verbindung Head-Unit zum GPS-Antennenfuß |
| 0x00000020 | Verbindung Head-Unit zum Aux-In Box |
| 0x00000040 | Lautsprecherausgangsleitungen (Stereo System) |
| 0x00000080 | Ausgangsleitungen zum HiFi Verstärker |
| 0x00000100 | RAD ON Leitung |
| 0x00000200 | Verbindung Head-Unit zum Mikrofon 1 |
| 0x00000400 | Verbindung Head-Unit zum Mikrofon 2 |
| 0x00000800 | Verbindung Head-Unit zum VICS FM Antennenfuß |
| 0x00001000 | Verbindung Head-Unit zum VICS Beacon Antennenfuß |
| 0x00002000 | Verbindung Head-Unit zum ETC-Spiegel |
| 0x00004000 | Ethernet-Verbindung Head-Unit zum ZGW_FEM |
| 0x00008000 | Ethernet-Verbindung Head-Unit zum RSE High |
| 0x00010000 | Verbindung Head-Unit zur USB Kunden-Schnittstelle |
| 0x00020000 | Verbindungen zu IR-Sendeeinheit |
| 0x00040000 | Verbindung Head-Unit zum SDARS Antennenfuß |
| 0x00080000 | Verbindung Head-Unit zur Bluetooth Antenne |
| 0x00100000 | Ethernet-Verbindung Head-Unit zur Combox |
| 0x00200000 | Ethernet-Verbindung RSE High zur Combox |
| 0x00400000 | Verbindung Headunit zum WLAN Antennenfuß |
| 0x00800000 | USB Verbindung Headunit zum TCB |
| 0x01000000 | RSE Verbindung zum I / O-Taster links |
| 0x02000000 | RSE Verbindung zum I / O-Taster rechts |
| 0x04000000 | Verbindung Headunit zum USB Interface 2 (USB2) |
| 0x08000000 | Connection Headunit to ITS (Intelligent Transport System ) |
| 0xFFFFFFFF | Nicht definiert |

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

### TVIDEOQUELLE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Quellen |
| 0x00000001 | MMC |
| 0x00000002 | NiVi |
| 0x00000004 | RFK |
| 0x00000008 | TV |
| 0x00000010 | TopView |
| 0x00000020 | Entertainmentserver |
| 0x00000040 | Headunit |
| 0x00000080 | RearSeatEntertainment |
| 0x00000100 | SideView |
| 0x00000200 | AUX1 |
| 0x00000400 | AUX2 |
| 0x00000800 | AUX3 |
| 0x00001000 | AUX4 |
| 0x00002000 | KAFAS |
| 0xFFFFFFFF | Nicht definiert |

### TVIDEOSENKE

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Bildschirme |
| 0x0001 | Bildschirm Headunit |
| 0x0002 | Linker oder einziger Bildschirm RearSeatEntertainment |
| 0x0004 | Rechter  Bildschirm RearSeatEntertainment |
| 0xFFFF | Nicht definiert |
| 0x0008 | MMI4 (IPCE) |
| 0x0010 | MMI5 (HU Out) |
| 0x0020 | MMI6 (reserved) |

### TVIDEOEINGANGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Video- oder Sync-Signal vorhanden |
| 0x01 | Signal außerhalb der Toleranz |
| 0x02 | Verbindung konnte nicht hergestellt werden |
| 0xFF | Nicht definiert |

### UNEXPECTED_LINK_UP_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | für unbelegte Ports kein Link-up festgestellt bzw. Link auf Port zulässig |
| 1 | Link-up auf eigentlich unbelegtem Port festgestellt |

### VIDEO_SINK

| WERT | TEXT |
| --- | --- |
| 0x00 | none |
| 0x01 | MMI1 (HU MMI) |
| 0x02 | MMI2 (RSE MMI) |
| 0x03 | MMI3 (RSE MMI2 - right screen) |
| 0x04 | MMI4 (IPCE) |
| 0x05 | MMI5 (reserved) |

### VIDEO_SOURCE

| WERT | TEXT |
| --- | --- |
| 0x01 | SVC |
| 0x02 | TVC |
| 0x03 | RVC |
| 0x04 | NVC |
| 0x05 | MMC |
| 0x06 | Entertainment Server |
| 0x07 | TV |
| 0x08 | HU (iinternal video playback from CD, DVD, HDD, USB, MOST |
| 0x09 | AUX1 (auxilary video input port) |
| 0x0A | reserved (Y/C AUX1 composite video input, e.g. BMW M components or external navigation) |
| 0x0B | reserved (RGB orYUV AUX1 component video input, e.g. BMW M components or external navigation) |
| 0x0C | RSE (internal video playback from CD, DVD, HDD, USB, MOST) |
| 0x0D | AUX2 (auxilary video port - integrated RSE) |
| 0x0E | AUX3 (auxilary video port - integrated RSE - right screen) |
| 0x0F | AUX4 (auxiliary video input port) |
| 0x10 | reserved (Y/C AUX4 composite video input, e.g. BMW M components or Y/C TV sources) |
| 0x11 | reserved (RGB or YUV AUX4 component video input, e.g. BMW M components) |
| 0x12 | KAFAS |
| 0x13 | CD_DVD |
| 0x14 | HDD |
| 0x15 | IBA |
| 0x16 | USB |
| 0x17 | Browser |
| 0x18 | WLAN |
| 0x19 | BT |
| 0x1A | DMB |
| 0x20 | CD_DVD_RSE |
| 0x21 | IBA_RSE |
| 0x22 | USB_RSE |

### YAW_VELOCITY_VEHICLE

| WERT | TEXT |
| --- | --- |
| 0x00 | Giergeschwindigkeit roh: nicht plausibel |
| 0x01 | Giergeschwindigkeit roh: nicht vorhanden |
| 0x02 | Giergeschwindigkeit: nicht plausibel |
| 0x03 | Giergeschwindigkeit: nicht vorhanden |

### STAT_WAKEUPSOURCE

| NR | TEXT |
| --- | --- |
| 1 | Weckursache = CAN |
| 2 | Weckursache = MOST |
| 3 | Weckursache = IPC |
| 4 | Weckursache = Intern |
| 5 | Weckursache = Reset |

### TATCVERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | no ATC diagnosis possible |
| 0x01 | ATC diagnosis with track 12 measurement |
| 0x02 | ATC diagnosis with jitter measurement |
| 0xFF | Nicht definiert |

### THWVAR_FUNCTION

| WERT | TEXT |
| --- | --- |
| 0x00010000 | IBOC |
| 0x00020000 | DAB |
| 0x00040000 | Video-in |
| 0x00080000 | SDARS |
| 0x00100000 | Telefon |
| 0x00200000 | I-Speech |
| 0x00400000 | CD-Laufwerk |
| 0x00800000 | MSA |
| 0x01000000 | als Japan-Variante |
| 0x02000000 | als China/Korea-Variante |
| 0x04000000 | CD-Laufwerk |
| 0x08000000 | Media-USB |
| 0xFFFFFFFF | Nicht definiert |

### THWVAR_DEVICE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Headunit Stufe 1 (Radio Business) |
| 0x00000001 | Headunit Stufe 2 (Radio Professional) |
| 0x00000002 | Headunit Stufe 3 (Navigation Business) |
| 0x00000004 | Headunit Stufe 4 (Navigation Professional) |
| 0x00000008 | RearSeatEntertainment Mid |
| 0x00000010 | RearSeatEntertainment High |
| 0x00000020 | TV-Modul DVB-T |
| 0x00000040 | TV-Modul DVB-T RSE |
| 0x00000080 | TV-Modul ISDB-T |
| 0x000000A0 | TV-Modul China |
| 0x00000100 | VideoSwitch Mid |
| 0x00000200 | VideoSwitch High |
| 0xFFFFFFFF | Nicht definiert |

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
| 000036C9 | EntryEvoMed ECE 03F9  (DAB,MOST,WLAN,2MICIN,USB2,BT,Video,OABR) | EntryEvo |
| 000036CA | EntryEvoMed ECE 03FB  (DAB,MOST,WLAN,2MICIN,USB2,BT,Video,OABR,CD) | EntryEvo |
| 000036CB | EntryEvoNav ECE 0782  (USB1,BT,Video,HW_NAV,OABR,CD) | EntryEvo |
| 000036CC | EntryEvoNav ECE 07FF  (DAB,MOST,WLAN,HW_NAV,2MICIN,USB1,BT,Video,OABR,CD) | EntryEvo |
| 000036CD | EntryEvoMed US 1382  (SDARS,IBOC,USB1,BT,Video,OABR,CD) | EntryEvo |
| 000036CE | EntryEvoMed US 13F8  (SDARS,IBOC,USB2,MOST,WLAN,BT,Video,OABR) | EntryEvo |
| 000036CF | EntryEvoMed US 13FA  (SDARS,IBOC,USB2,MOST,WLAN,2MICIN,BT,Video,OABR) | EntryEvo |
| 00003A05 | EntryEvoMed US 17FA  (SDARS,IBOC,USB2,HW_NAV,MOST,WLAN,2MICIN,BT,Video,OABR) | EntryEvo |
| 00003A06 | EntryEvoMed US 17FC  (SDARS,IBOC,USB2,HW_NAV,MOST,WLAN,2MICIN,BT,Video,OABR) | EntryEvo |
| 0xFFFFFFFF | unknown | unknown |

### DEVUDS_SWNAME

| WERT | NAME |
| --- | --- |
| 00000DED | Codierdaten NBT/ENTRYNAV |
| 00000E69 | Codierdaten NBT RSE |
| 00001275 | NBT Bootloader |
| 00001276 | NBT FLSL Powercontroller |
| 00001279 | NBT Media |
| 0000127A | NBT Core |
| 0000127B | NBT Navi |
| 0000127C | NBT Connectivity |
| 0000127D | NBT Speech |
| 00002219 | NBT TTS2 (orig. Speech Common) |
| 0000127E | NBT TTS |
| 0000127F | NBT SSS |
| 00001280 | NBT BMW HMI |
| 00001FAB | NBT RR HMI |
| 00001FA5 | NBT Mini HMI |
| 00001FA1 | NBT MCV HMI |
| 00001281 | NBT EQ |
| 00001282 | NBT Gateway Table |
| 00001277 | NBT IBA BMW Texte und Grafiken ECE |
| 00001278 | NBT IBA BMW Animationen und MP3 |
| 00001597 | NBT IBA BMW Texte und Grafiken US, JAP, ASIA |
| 00001F8A | NBT IBA RR Texte und Grafiken ECE |
| 00001F89 | NBT IBA RR Animationen und MP3 |
| 00001F8B | NBT IBA RR Texte und Grafiken US, JAP, ASIA |
| 00001F98 | NBT IBA Mini Texte und Grafiken ECE |
| 00001F97 | NBT IBA Mini Animationen und MP3 |
| 00001F9A | NBT IBA Mini Texte und Grafiken US, JAP, ASIA |
| 00001F9F | NBT IBA MCV Texte und Grafiken ECE |
| 00001F9E | NBT IBA MCV Animationen und MP3 |
| 00001FA0 | NBT IBA MCV Texte und Grafiken US, JAP, ASIA |
| 000014B0 | NBT KISU Media |
| 000014B1 | NBT KISU Connectivity |
| 000014B2 | NBT KISU Core |
| 000014B3 | NBT KISU HMI |
| 000014BA | NBT Map Oceania |
| 000014BB | NBT Map ME |
| 000014BC | NBT Map NAF |
| 000014BD | NBT Map SA |
| 000014BE | NBT Map SEA |
| 000014BF | NBT Map SAM |
| 000014B4 | NBT Map China |
| 000014B5 | NBT Map Taiwan |
| 000014B6 | NBT Map Korea |
| 000014B7 | NBT Map Japan |
| 000014B8 | NBT Map US |
| 000014B9 | NBT Map ECE |
| 000014C0 | NBT Map India |
| 000014C1 | NBT Map Israel |
| 000002E8 | Gracenote Datenbank (CIC!) |
| 000014C2 | NBT Gracenote (alt) |
| 00001A03 | NBT Gracenotes DB Rest of the World |
| 00001A04 | NBT Gracenotes DB EU |
| 00001A05 | NBT Gracenotes DB US |
| 00001A06 | NBT Gracenotes DB China-Korea |
| 00001A07 | NBT Gracenotes DB Japan |
| 00001E6B | NBT Core_Media_Connectivity_Nav |
| 00001283 | NBT RSE Bootloader |
| 00001284 | NBT RSE FLSL Powercontroller |
| 00001285 | NBT RSE Media |
| 00001286 | NBT RSE Core |
| 00001287 | NBT RSE Navi |
| 00001288 | NBT RSE Connecivity |
| 00001289 | NBT RSE HMI |
| 00001E76 | NBT RSE Core_Media_Connectivity_Nav |
| 00001159 | ENTRYNAV Bootloader FADO (testsig.) |
| 00001ABA | ENTRYNAV Bootloader FADO (scharfsig.) |
| 00001A2B | ENTRYNAV FLSL TEGRA (testsig.) |
| 0000246E | ENTRYNAV FLSL TEGRA (scharfsig.) |
| 0000125D | ENTRYNAV HMI FADO (testsig.) |
| 0000245B | ENTRYNAV HMI FADO (scharfsig.) |
| 0000115A | ENTRYNAV Gateway FADO (testsig.) |
| 0000245C | ENTRYNAV Gateway FADO (scharfsig.) |
| 0000115B | ENTRYNAV Vehiclecontroller FADO (testsig.) |
| 0000245D | ENTRYNAV Vehiclecontroller FADO (scharfsig.) |
| 0000115C | ENTRYNAV Maincontroller FADO (testsig.) |
| 0000245E | ENTRYNAV Maincontroller FADO (scharfsig.) |
| 00001FCB | ENTRYNAV EQ ExtFlash (testsig.) |
| 0000245F | ENTRYNAV EQ ExtFlash (scharfsig.) |
| 00001FCC | ENTRYNAV MP3 ExtFlash (testsig.) |
| 00002460 | ENTRYNAV MP3 ExtFlash (scharfsig.) |
| 00001FCD | ENTRYNAV WAVE ExtFlash (testsig.) |
| 00002461 | ENTRYNAV WAVE ExtFlash (scharfsig.) |
| 00001FCE | ENTRYNAV GW Tables ExtFlash (testsig.) |
| 00002462 | ENTRYNAV GW Tables ExtFlash (scharfsig.) |
| 0000224E | ENTRYNAV Ikon Pattern ExtFlash (testsig.) |
| 00002250 | ENTRYNAV Ikon Pattern ExtFlash (scharfsig.) |
| 00002463 | ENTRYNAV Ikon Pattern ExtFlash (scharfsig.) |
| 0000224F | ENTRYNAV Tegra Logistics ExtFlash (testsig.) |
| 00002251 | ENTRYNAV Tegra Logistics ExtFlash (scharfsig.) |
| 00002464 | ENTRYNAV Tegra Logistics ExtFlash (scharfsig.) |
| 0000177A | ENTRYNAV MAINTKERN Tegra (testsig.) |
| 0000246C | ENTRYNAV MAINTKERN Tegra (scharfsig.) |
| 00001E6C | ENTRYNAV Early Video File System Tegra (testsign.) |
| 00002465 | ENTRYNAV Early Video File System Tegra (scharfsign.) |
| 00001E6D | ENTRYNAV Application File System Tegra (testsign.) |
| 00002466 | ENTRYNAV Application File System Tegra (scharfsign.) |
| 00002261 | ENTRYNAV VAR Tegra (testsign.) |
| 0000225E | ENTRYNAV VAR Tegra (scharfsign.) |
| 00002262 | ENTRYNAV HMI Tegra (testsign.) |
| 0000225F | ENTRYNAV HMI Tegra (scharfsign.) |
| 00001F59 | ENTRYNAV FW IBOC Tegra (testsign.) |
| 00002467 | ENTRYNAV FW IBOC Tegra (scharfsign.) |
| 00001F5B | ENTRYNAV FW SDARS Tegra (testsign.) |
| 00002469 | ENTRYNAV FW SDARS Tegra (scharfsign.) |
| 00001F5A | ENTRYNAV FW DAB Tegra (testsign.) |
| 00002468 | ENTRYNAV FW DAB Tegra (scharfsign.) |
| 0000177B | ENTRYNAV APPKERN (depricated) |
| 00001E6E | ENTRYNAV ISPEECH (testsign.) |
| 0000246B | ENTRYNAV ISPEECH (scharfsign.) |
| 000022C3 | ENTRYNAV ISPEECH MediaVar. (testsign.) |
| 000022C4 | ENTRYNAV ISPEECH MediaVar. (scharfsign.) |
| 0000177C | ENTRYNAV IBADATA (testsig.) |
| 0000246A | ENTRYNAV IBADATA (scharfsig.) |
| 00001DE0 | ENAV Map Oceania |
| 00001DE1 | ENAV Map ME |
| 00001DE2 | ENAV Map NAF |
| 00001DE3 | ENAV Map SA |
| 00001DE4 | ENAV Map SEA |
| 00001DE5 | ENAV Map SAM |
| 00001DDD | ENAV Map China |
| 00001DDE | ENAV Map US |
| 00001DDF | ENAV Map ECE |
| 00001DE6 | ENAV Map India |
| 00001DE7 | ENAV Map Israel |
| 000024AC | ENAV Map Twaiwan |
| 00002472 | ENAV Map Argentina |
| 00002471 | ENAV Map Turkey |
| 00001EF5 | NBTevo Bootloader (tests.) |
| 00001FFD | NBTevo Bootloader (scharfs.) |
| 00002196 | NBTevo FLSL Powercontroller (tests.) |
| 00002708 | NBTevo FLSL Powercontroller (scharfs.) |
| 00001EF6 | NBTevo/EntryEvo CAFD |
| 0000218D | NBTevo Core_Media_Connectivity_Nav (tests.) |
| 000021BA | NBTevo Speech Common (tests.) |
| 000021BB | NBTevo Speech Asia (tests.) |
| 000021BC | NBTevo Speech US (tests.) |
| 000021BD | NBTevo Speech ECE (tests.) |
| 00002190 | NBTevo TTS (tests.) |
| 00002191 | NBTevo SSS (tests.) |
| 00002198 | NBTevo HMI Common (tests.) |
| 000021C7 | NBTevo HMI Common OL (depricated) |
| 000021C3 | NBTevo BMW HMI (tests.) |
| 00001FA6 | NBTevo RR HMI (tests.) |
| 00001F99 | NBTevo Mini HMI (tests.) |
| 00001FA2 | NBTevo MCV HMI (tests.) |
| 0000271A | NBTevo Core_Media_Connectivity_Nav (scharfs.) |
| 00002727 | NBTevo Speech Common (scharfs.) |
| 0000271B | NBTevo Speech (scharfs.) |
| 00002721 | NBTevo Speech Asia (scharfs.) |
| 00002722 | NBTevo Speech US (scharfs.) |
| 00002723 | NBTevo Speech ECE (scharfs.) |
| 0000271C | NBTevo TTS (scharfs.) |
| 0000271D | NBTevo SSS (scharfs.) |
| 00002720 | NBTevo HMI Common (scharfs.) |
| 00002719 | NBTevo BMW HMI (scharfs.) |
| 00002718 | NBTevo RR HMI (scharfs.) |
| 00002716 | NBTevo Mini HMI (scharfs.) |
| 00002717 | NBTevo MCV HMI (scharfs.) |
| 00002192 | NBTevo EQ (tests.) |
| 000021C6 | NBTevo Gateway Table OL (depricated) |
| 00002193 | NBTevo Gateway Table (testsig.) |
| 0000271E | NBTevo EQ (scharfs.) |
| 0000271F | NBTevo Gateway Table (scharfs.) |
| 000021B0 | NBTevo IBA BMW Texte und Grafiken ECE (testsig.) |
| 000021B2 | NBTevo IBA BMW Animationen und MP3 (testsig.) |
| 000021B1 | NBTevo IBA BMW Texte und Grafiken US, JAP, ASIA (testsig.) |
| 0000270D | NBTevo IBA BMW Texte und Grafiken ECE (scharfs.) |
| 0000270C | NBTevo IBA BMW Animationen und MP3 (scharfs.) |
| 00002712 | NBTevo IBA BMW Texte und Grafiken US, JAP, ASIA (scharfs.) |
| 00001FA8 | NBTevo IBA RR Texte und Grafiken ECE (testsig.) |
| 00001FA7 | NBTevo IBA RR Animationen und MP3 (testsig.) |
| 00001FA9 | NBTevo IBA RR Texte und Grafiken US, JAP, ASIA (testsig.) |
| 00002710 | NBTevo IBA RR Texte und Grafiken ECE (scharfs.) |
| 0000270B | NBTevo IBA RR Animationen und MP3 (scharfs.) |
| 00002714 | NBTevo IBA RR Texte und Grafiken US, JAP, ASIA (scharfs.) |
| 00001F9C | NBTevo IBA Mini Texte und Grafiken ECE (testsig.) |
| 00001F9B | NBTevo IBA Mini Animationen und MP3 (testsig.) |
| 00001F9D | NBTevo IBA Mini Texte und Grafiken US, JAP, ASIA (testsig.) |
| 0000270E | NBTevo IBA Mini Texte und Grafiken ECE (scharfs.) |
| 00002709 | NBTevo IBA Mini Animationen und MP3 (scharfs.) |
| 00002711 | NBTevo IBA Mini Texte und Grafiken US, JAP, ASIA (scharfs.) |
| 00001FA4 | NBTevo IBA MCV Texte und Grafiken ECE (testsig.) |
| 00001FA3 | NBTevo IBA MCV Animationen und MP3 (testsig.) |
| 00001FAA | NBTevo IBA MCV Texte und Grafiken US, JAP, ASIA (testsig.) |
| 0000270F | NBTevo IBA MCV Texte und Grafiken ECE (scharfs.) |
| 0000270A | NBTevo IBA MCV Animationen und MP3 (scharfs.) |
| 00002713 | NBTevo IBA MCV Texte und Grafiken US, JAP, ASIA (scharfs.) |
| 000025D8 | NBTevo Gracenotes DB RoW |
| 000025D9 | NBTevo Gracenotes DB EU |
| 000025DA | NBTevo Gracenotes DB US |
| 000025DB | NBTevo Gracenotes DB China-Korea |
| 000025DC | NBTevo Gracenotes DB Japan |
| 0000249E | NBTevo Map Oceania |
| 0000249F | NBTevo Map ME |
| 000024A1 | NBTevo Map NAF |
| 000024A0 | NBTevo Map SA |
| 000024A2 | NBTevo Map SEA |
| 000024A3 | NBT Map SAM |
| 000024A4 | NBTevo Map China |
| 000024A5 | NBTevo Map Taiwan |
| 000024AB | NBTevo Map Korea |
| 000024A6 | NBTevo Map Japan |
| 000024A7 | NBTevo Map US |
| 000024A8 | NBTevo Map ECE |
| 000024A9 | NBTevo Map India |
| 000024AA | NBTevo Map Israel |
| 00002354 | NBTevo Map Argentina |
| 00002355 | NBTevo Map Turkey |
| 00001EF8 | NBTevo RSE Bootloader (tests.) |
| 0000200F | NBTevo RSE Bootloader (scharfs.) |
| 00001EFA | NBTevo RSE CAFD |
| 0000218B | NBTevo RSE FLSL Powercontroller (tests.) |
| 00002704 | NBTevo RSE FLSL Powercontroller (scharfs.) |
| 00002183 | NBTevo RSE Core_Media_Connectivity_Nav (tests.) |
| 00002189 | NBTevo RSE HMI BMW (testsig.) |
| 0000218A | NBTevo RSE HMI RR (testsig.) |
| 00002180 | NBTevo RSE HMI Common (testsig.) |
| 00002181 | NBTevo RSE HMI Common (testsig.) |
| 00002734 | NBTevo RSE Core_Media_Connectivity_Nav (scharfs.)) |
| 00002736 | NBTevo RSE HMI BMW (scharfs.) |
| 00002737 | NBTevo RSE HMI RR (scharfs.) |
| 00002732 | NBTevo RSE HMI Common (scharfs.) |
| 00002733 | NBTevo RSE HMI (scharfs.) |
| 00002BF6 | EntryEvo Bootloader (tests.) |
| 00002BF7 | EntryEvo SWFL System (tests.) |
| 00002BF8 | EntryEvo SWFL RL78 (tests.) |
| 00002BF9 | EntryEvo SWFL SiriusXM (tests.) |
| 00002BFA | EntryEvo SWFL DAB (tests.) |
| 00002BFB | EntryEvo SWFL DiRaNa (tests.) |
| 00002BFC | EntryEvo SWFL EQ (tests.) |
| 00002BFD | EntryEvo SWFL GWT (tests.) |
| 00002BFE | EntryEvo SWFL HMI/ISpeech (tests.) |
| 00002C01 | EntryEvo SWFL ISpeech language 1 (tests.) |
| 00002C02 | EntryEvo SWFL ISpeech language 2 (tests.) |
| 00002C03 | EntryEvo SWFL ISpeech language 3 (tests.) |
| 00002C04 | EntryEvo SWFL ISpeech language 4 (tests.) |
| 00002C05 | EntryEvo SWFL HMI Graphic (tests.) |
| 00002C06 | EntryEvo SWFL HMI Text (tests.) |
| 00002C07 | EntryEvo SWFL Navigation (tests.) |
| 00002BFF | EntryEvo IBAD 1 (tests.) |
| 00002C00 | EntryEvo IBAD 2 (tests.) |
| 0xFFFFFFFF | unknown |

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
| 001.003.001 | 15-03 D5.1 ENAV HW Harman (SOP HW) |
| 004.003.001 | 14-07 D5.1 ENAV HW Magneti (SOP HW) |
| 001.003.002 | 15-11 D5.2 ENAV HW Harman (SOP HW) |
| 004.003.002 | 15-11 D5.2 ENAV HW Magneti (SOP HW) |
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
