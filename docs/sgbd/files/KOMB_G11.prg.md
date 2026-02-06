# KOMB_G11.prg

## General

|  |  |
| --- | --- |
| File | KOMB_G11.prg |
| Type | PRG |
| Jobs | 54 |
| Tables | 178 |
| Origin | BMW EI-72 Cogiel |
| Revision | 14.001 |
| Author | BERTRANDT-INGENIEURBUERO-GMBH EE-263 Diek |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Kombinstrument |  |  |
| ORIGIN | string | BMW EI-72 Cogiel |  |  |
| REVISION | string | 14.001 |  |  |
| AUTHOR | string | BERTRANDT-INGENIEURBUERO-GMBH EE-263 Diek |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.84 |  |  |
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

### CBS_INFO

Ausgabe der CBS-Version

_No arguments._

### CBS_DATEN_LESEN

CBS Daten auslesen (fuer CBS-Version 5) UDS: $22 ReadDataByIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| CBS_K | string | Filter über CBS_K Identifier |

### CBS_INTERNE_DATEN_LESEN

CBS Daten auslesen (fuer CBS-Version 5) UDS  : $22   ReadDataByIdentifier UDS  : $1003 Data Identifier Modus  : Default

_No arguments._

### CBS_RESET

CBS Daten Zuruecksetzen (fuer CBS-Version 6) Fahrzeug muss in einem der folgenden Zustaende sein:) - Pruefen_Analyse_Diagnose - Fahrbereitschaft_herstellen - Fahren - Fahrbereitschaft_beenden UDS: $2E WriteDataByIdentifier Modus  : Default Musterparametersatz fuer Bremsbelagverschleiss Vorder/Hinterachse br_v,100,1,0,0,0,1,0,0 br_h,100,1,0,0,0,1,0,0 jedoch mit 'Strich_Punkt' getrennt (nicht mit Komma!)

| Name | Type | Description |
| --- | --- | --- |
| CBS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, Sic, Sic_v, TUV, AU, Ueb, Efk Werte externe Umfaenge: Oel, NOx_a, Br_v, Br_h Defaultwert: 0x00 (ungueltig) |
| CBS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, keine Aenderung: 0xFFh (255 dez) Defaultwert: 100 (0x64h) Bremsflüssigkeit: 150 (0x96h) erlaubt |
| CBS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, Erhoehung der Anzahl um +1: 31 Defaultwert: 31 |
| CBS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter, keine Aenderung: 0x0F Defaultwert: 0x0F |
| CBS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2062: 0-62 Schalter, keine Aenderung: 0x3F (63 dez) Defaultwert: 0x3F (63 dez) |
| RMM_CBS_WERT | int | Restlaufleistung in km oder % (siehe Argument Einheit) Schalter, keine Aenderung: 0x8000 Defaultwert: 0x8000 |
| ST_UN_CBS_RSTG | int | Einheit Restlaufleistung 0x00 -> % 0x01 -> km*10 0x0F -> d.c. Defaultwert: 0x0F |
| FRC_INTM_WAY_CBS_MESS | int | Prognose Wegintervall Umrechnung 1-254*1000km Schalter, setzt auf Defaultwert zurueck: 0x00 Schalter, keine Aenderung: 0xFF Defaultwert: 0xFF |
| FRC_INTM_T_CBS_MESS | int | Prognose Zeitintervall 1-254 Monate 0 zurücksetzen Schalter, keine Aenderung: 0xFF Defaultwert: 0xFF |
| CHOV_CBS_CBR_VIEW | int | Sichtbarkeit CBx Umfang) Defaultwert 0, Service nicht anzeigen: 0x00 |
| RES_BYTE | int | Reserve Byte (noch unbenutzt) Defaultwert: 0x00 |

### CBS_RESET_DETAIL_LESEN

Lesen der CBx-Daten aus einem CBx-Steuergerät UDS: $22 ReadDataByIdentifier Modus  : Default

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

### STATUS_VCM_BACKUP_FAHRZEUGAUFTRAG_LESEN

Der Job dient zum Auslesen des redundant im KOMBI gespeicherten Fahrzeugauftrags. Hinweise: Das FEM/BDC ist das Master-SG für den Fahrzeugauftrag. Es werden nur die uninterpretierten Rohdaten des VCM-Backup aus dem KOMBI EEPROM geliefert JobHeaderFormat 0x3F1C und 0x3F1D FAHRZEUGAUFTRAG

_No arguments._

### STATUS_VCM_BACKUP_ISTUFE_LESEN

Liefert die im EEPROM abgelegte I-Stufe jeweils für Werk, HO und HO-Backup. JobHeaderFormat 0x100B STATUS_ISTUFE

_No arguments._

### _STATUS_READDATABYIDENTIFIER

JobHeaderFormat Freies Telegramm fuers ReadDataByIdentifier Service Entwicklungsjob

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | BYTE 0: DID !MSB-Byte als Hexzahl |
| BYTE1 | int | BYTE 1: DID !LSB-Byte als Hexzahl |

### STATUS_IP_CONFIGURATION

Reads out the actual ipconfig of the Ethernet interface of the HeadUnit.

_No arguments._

### STATUS_ETH_SIGNAL_QUALITY

Returns the signal quality of all external ports of the ECU UDS   : $22 ReadDataByIdentifier $1801 ETH_SIGNAL_QUALITY

_No arguments._

### _STATUS_EXEA_DATEN_GEN31_GEN4

JobHeaderFormat 0x22   STATUS_LESEN 0x5600 Safety Reset Error Reason 0x5601 Req. to read ICOM tel. 0x5603 Read int. ECC CRC Error 0x5604 Read fatal Exeptiondata AC 0x5611 Read AC Exeptions 0x5612 Read GC Exeptions

_No arguments._

### STATUS_JOB_GEN40_STATUS_CODING

STATUS_JOB_GEN40_STATUS_CODING

_No arguments._

### STEUERN_UHRZEIT_DATUM

Uhrzeit und Datum stellen Für Service- und Testzwecke Daten werden vom PC bzw. Tester uebernommen JobHeaderFormat 0xD113 STEUERN_UHRZEIT_DATUM

_No arguments._

### STEUERN_GWSZ_OFFSET_SETZEN

JobHeaderFormat 0xD114 GWSZ_RESET

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

### STATUS_HU_CC_DATENSAETZE_LESEN

0xA10A HU_CC_DATENSAETZE

| Name | Type | Description |
| --- | --- | --- |
| CCM_SYSZEIT | long | Parameter 1: CCM_SYSZEIT (1 Byte) 0-32h: Zeit in 30min-Schritten |
| CCM_GWSZ | long | Parameter 2: CCM_GWSZ (1 Byte) 0-64h: Kilometer in 1km |

### STEUERN_CC_MELDUNG_TRIGGERN

Mit dieser Routine kann jede definierte CCM getriggert werden. Für eine dauerhafte CCM-Anzeige muss die Diagnoseanforderung zyklisch, in der angegebenen Zykluszeit wiederholt werden (analog zur CAN-Anforderung). $31 RoutineControl $01 StartRoutine $F012

| Name | Type | Description |
| --- | --- | --- |
| CC_HIGH | unsigned char | CC-Nummer High Byte Format 0x00 |
| CC_LOW | unsigned char | CC-Nummer Low Byte Format 0x00 |
| SENDEZYKLUS | unsigned char | Sendezyklus Format 0x00 |
| CC_STATUS_BLINKEN | unsigned char | Sendezyklus 0x00  Rücksetzen 0x01  Setzen / kein Blinken 0x11  Setzen / langsames Blinken 0x21  Setzen / schnelles Blinken |
| TEXT | binary | Text |

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
| 0x5E80 | Stromverteiler hinten | 1 |
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
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
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

### CBSKENNUNG

| NR | CBS_K | CBS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Motoroel |
| 0x02 | Br_v | Bremsbelaege vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x05 | Bsi | Service Inclusive |
| 0x06 | Br_h | Bremsbelaege hinten |
| 0x07 | Pf | Partikelfilter |
| 0x07 | Dpf | Partikelfilter |
| 0x07 | Opf | Partikelfilter |
| 0x08 | Soh | State of Health |
| 0x0A | Zuend | Zuendkerzen/Gluehkerzen |
| 0x0D | NOx_a | NOx-Additiv |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x15 | Efk | Einfahrkontrolle |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |
| 0x23 | Oel_a | Getriebeoel (Automatik) |
| 0x31 | Reif | Reifenalter |
| 0x32 | Kup | Kupplung |
| 0x33 | Gdf | Gasdruckdämpfer Frontklappe bei aktivem Fußgängerschutz |
| 0x34 | Verb | Verbandskasten |
| 0x35 | Tir_f | Tire Fit |
| 0x36 | Kat | Katalysator |
| 0x37 | Sto | Stossdaempfer |
| 0x64 | Sic_v | Sichtpruefung/Fahrzeug-Check verknuepft |
| 0xE0 | Cbs_e | CBS Evalboard |
| 0xE1 | Cbr_e | CBR Evalboard |
| 0xFF | rda | Anlieferzustand |

### TAB_ECU_NAME

| ADR | NAME |
| --- | --- |
| 0x12 | DME/DDE |
| 0x13 | DME/DDE_Slave |
| 0x29 | DSC |
| 0x60 | KOMBI |
| 0xFF | unbekannt |

### TAB_CBS_EINHEITEN

| WERT | TEXT |
| --- | --- |
| 0x00 | % |
| 0x01 | Weg |
| 0x02 | Tage |
| 0x0F | Signal ungültig |
| 0xFF | nicht erlaubt |

### TAB_CBS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Status ok |
| 0x10 | Messung basiert auf Ersatzwerten |
| 0x20 | Baukasten Client |
| 0x40 | CBS Daten manipuliert |
| 0x50 | Baukasten Client und CBS Daten manipuliert |
| 0xF0 | Signal ungültig |
| 0xFF | nicht erlaubt |

### TAB_CBS_MONAT

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht relevant |
| 0x01 | Januar |
| 0x02 | Februar |
| 0x03 | März |
| 0x04 | April |
| 0x05 | Mai |
| 0x06 | Juni |
| 0x07 | Juli |
| 0x08 | August |
| 0x09 | September |
| 0x0A | Oktober |
| 0x0B | November |
| 0x0C | Dezember |
| 0x0E | Neues Steuergerät |
| 0x0F | Wert ungültig, Datum nicht verfügbar |
| 0xFF | nicht erlaubt |

### TAB_RUECK_GRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Verhinderungsgründe |
| 0x01 | ungültiger km-Stand |
| 0x02 | ungültiges Borddatum |
| 0x03 | ungültige Codierung |
| 0x04 | SG nicht initialisiert oder im falschen Zustand |
| 0x05 | Fahrzeug im fahrenden Zustand |
| 0x06 | Reset beim CBR nicht erlaubt |
| 0x07 | Reset bei aktivem Ersatzwert nicht erlaubt |
| 0x08 | Fahrzeug im Zustand Wohnen |
| 0xFE | keine Angabe |
| 0xFF | ungültig |

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

### ARG_0X2551_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINGABE_ART | 0-n | high | unsigned char | - | TAB_EINGABE_ART | - | - | - | - | - | wie die Zeit eingegeben wird |
| JAHR | y | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 2000.0 | 22500.0 | 2000 - 2255 |
| MONAT | mth | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | 1 - 12 |
| TAG | d | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 31.0 | 0 - 31 |
| STUNDE | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 23.0 | 0- 23 |
| MINUTE | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 59.0 | 0 - 59 |
| SEKUNDE | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 59.0 | 0 - 59 |

### ARG_0X4010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TWSZ | km | high | unsigned long | - | - | 10.0 | 1.0 | 0.0 | - | - | 0x00000000 =  Nur ein Rücksetzen auf 0km möglich. Eine Vorgabe auf einen bestimmten Wert nicht zulässig. |

### ARG_0X4012_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STEUERN_VERBRAUCHSKORREKTURFAKTOR | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 750.0 | 1250.0 | Wertebereich 750d - 1250d, alle anderen Werte werden verworfen und der Auftrag negativ beantwortet. |

### ARG_0X4400_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HW_HAUPTINDEX | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei grösseren Änderungen soll der HI geändert weden |
| HW_UNTERINDEX | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bei kleineren Änderungen soll der UI geändert weden |

### ARG_0X4802_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACTIVATION | 0/1 | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00 = OFF; 0x01 = ON; |

### ARG_0X4808_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITION | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Bildposition in Mikroschritten |

### ARG_0XA102_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BILD | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 0: 0x00: Ohne Muster, es wird ein Testbild gemäß Farbvorgabe vorgegeben. 0x01-0x3F: Kombitestbilder anzeigen (BMW) 0x40-0x7F: Headup-Display Testbilder anzeigen (BMW) 0x80-0xBF: Kombitestbilder anzeigen (Lieferant) 0xC0-0xFF: Headup-Display Testbilder anzeigen (Lieferant) |
| ROT | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 1: 0x00- 0xFF (rot) |
| GRUEN | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 2: 0x00- 0xFF (grün) |
| BLAU | + | - | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Byte 3: 0x00- 0xFF (blau) |

### ARG_0XA103_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | - | unsigned char | - | TAB_WARPING_AKTION | 1.0 | 1.0 | 0.0 | - | - | 0x00 = abbrechen Warping ohne Speichern der Veränderungen und zurück zur normalen Ansicht 0x01 = anzeigen Warpingbild mit Ansicht des Rechteck ohne Parametersatz  0x02 = Warpingbild mit Ansicht des Rechteck mit der Veränderung durch die Werte in den Argumenten 0x03 = beenden von Warping mit Speichern der Daten und zurück zur normalen Ansicht |
| MODE | + | - | 0-n | - | unsigned char | - | TAB_WARPING | 1.0 | 1.0 | 0.0 | - | - | 0x00 : keine Änderung 0x01 : Trapez 0x02 : Rhombus 0x03 : Kissen-Tonne 0x04 : Smile 0x05 : Höhe 0x06 : Breite 0x08 : H-Shift |
| RICHTUNG | + | - | 0-n | - | unsigned char | - | TAB_WARPING_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | 00h : keine Änderung 01h : hoch 02h : runter 03h : links 04h : rechts |
| DELTA | + | - | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert der Veränderung der Verstellung in Pixel. |

### ARG_0XA105_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION_BLINKER | + | - | 0-n | - | signed char | - | TAB_KOMBI_BLINKER | 1.0 | 1.0 | 0.0 | - | - | Argumente siehe Tabelle TAB_KOMBI_BLINKER |

### ARG_0XA106_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WARPLISTE | + | - | 0-n | - | unsigned char | - | TAB_WARPLISTE | - | - | - | - | - | Es sind zwei Kennlinien möglich: 1. CAF - Codierdaten 2. Service - im Service nachjustierte Kennlinie |

### ARG_0XA107_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODUS | + | - | 0-n | - | unsigned char | - | TAB_HUD_BILDPOSITION | - | - | - | - | - | Gibt an, ob nach dem Beenden der Routine die Bildposition beibehalten werden soll:  0x01 = ShortPeriod - Motor fährt nach Beenden in Ausgangsstellung zurück, 0x02 = Continuation - Motor behält Position bei, 0x03 = Bildrotation Rotation wird nur in der Baureihe L6 bei gleichzeitigem Verbau eines RGR Head-Up Displays unterstützt |
| HOEHE_RICHTUNG | + | - | 0-n | - | unsigned char | - | TAB_HUD_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Höhenverstellung:   0x01 = hoch,   0x02 = runter Bildrotation:   0x01 = rechtsdrehend,   0x02 = linksdrehend |
| SCHRITTZAHL | + | - | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Anzahl der Schritte für die Höhenverstellung bzw. Bildrotation. |

### ARG_0XAA00_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WIEDERHOLUNGEN | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Anzahl der Wiederholungen des Showroom Modes |
| VARIANTE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Variante des Showroom Mode: 00h = AG-Varinate 01h = MGmbH-Variante |

### ARG_0XD08D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KEY | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00 = speichern auf aktuellen Schlüssel 0x01 = speichern auf alle Schlüssel |
| POSITION | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0 Anschlag unten 100 Anschlag oben |

### ARG_0XD08E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KEY | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = speichern auf aktuellen Schlüssel 1 = speichern auf alle Schlüssel |
| POSITION | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | -10.0 | 10.0 | -10 Anschlag links 0 mitte +10 Anschlag rechts |

### ARG_0XD090_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTIVIERUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00 =HUD deaktivieren 0x01 =HUD aktivieren |

### ARG_0XD10A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KM_LEISTUNG | km | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 254.0 | Angenommene, durchschnittliche Jahreskilometerleistung für die CBS-Berechnungen (in 1000 km). |

### ARG_0XD115_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESCHWINDIGKEIT_ACC | km/h | - | unsigned int | - | - | 10.0 | 1.0 | 0.0 | 0.0 | 400.0 | vorzugebende Geschwindigkeit für ACC-Zeiger in km/h |

### ARG_0XD117_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | 1/min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 10000.0 | Vorgeben der Drehzahlmesserstellung in 1/min |

### ARG_0XD11A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESCHWINDIGKEIT | km/h | - | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Setze Tacho auf beliebige Geschwindigkeit. Eingabe in km/h |

### ARG_0XD11B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KL_ID | 0-n | - | unsigned char | - | TAB_KAMMERLEUCHTEN | - | - | - | - | - | 0 : alle KL aus; 1 - 254 : einzelne KL; 255 : KL nach Farbe; Farbe muss angegeben werden |
| FARBE | 0-n | - | unsigned char | - | TAB_FARBE_KOMBILEUCHTEN | - | - | - | - | - | ROT = Rote Leuchten im Kombi ansteuern GELB = Gelbe Leuchten im Kombi ansteuern ORANGE = Orange Leuchten im Kombi ansteuern GRUEN = Gruene Leuchten im Kombi ansteuern BLAU = Blau Leuchten im Kombi ansteuern |

### ARG_0XD11E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TANKINHALT | % | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Tankinhalt in % vorgeben |

### ARG_0XD120_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CBS_AKTIVIERUNG | 0-n | high | unsigned char | - | LISTE_SERVICES | - | - | - | - | - | CBS Aktivierung HU, AU, Einf. Kontr., Uebergabe |
| CBS_AKTIVIERUNG_2 | 0-n | high | unsigned char | - | LISTE_SERVICES_2 | - | - | - | - | - | CBS Aktivierung BSI |
| RESERVE2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reservebyte |
| RESERVE3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reservebyte |

### ARG_0XD125_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EWIGER_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | Ewiger Durchschnittsverbrauch in 0,01 [L/100km] |
| 10000KM_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | 10.000 km Durchschnittsverbrauch in 0,01 [L/100km] |
| 33KM_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | - | - | 33 km Durchschnittsverbrauch in 0,01 [L/100km] |

### ARG_0XD128_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EWIGER_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | Ewiger Durchschnittsverbrauch in 0,1 [kWh/100km] |
| 10000KM_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | 10.000 km Durchschnittsverbrauch in 0,1 [kWh/100km] |
| 33KM_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 10.0 | 1.0 | 0.0 | - | - | 33 km Durchschnittsverbrauch in 0,1 [kWh/100km] |

### ARG_0XD12E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T_ID_FUNKTION_BEDIENUNG_TIMER | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| T_ID_BEDIENUNG_TIMER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 - 8). |
| T_BEDIENUNG_TIMER_STUNDE | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bedienung_Timer_Stunde (OP_TIM_HR) |
| T_BEDIENUNG_TIMER_MINUTEN | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bedienung_Timer_Minute (OP_TIM_MN) |
| T_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| T_BEDIENUNG_AUSWAHL_WOCHENTAG | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |

### ARG_0XD1DB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TEMPERATUR | % | high | unsigned int | - | - | 2.0 | 1.0 | 0.0 | 0.0 | 100.0 | Motortemperatur in %: 0% = Kalt, 100% = Heiß |

### ARG_0XDA0C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_PORT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe des Port, der verwendet werden soll: 0x01 = Hintergrund-LEDs, servicerelevant 0x02 = LED Strom, nur für Entwicklung 0x03 = Displayheizung, nur für Entwicklung |
| PWM_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | 1 - 10000 entspricht  0,01% = Lichtleistung max. abgesenkt,  100% = volle Lichtleistung |

### ARG_0XF120_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INTERFACE | + | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00 = IKE; 0x01 = HUD; |

### BF_BLOCK_01_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_01_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_01_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_02_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_02_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_02_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_03_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_03_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_03_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_04_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_04_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_04_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_05_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_05_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_05_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_06_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_06_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_06_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_07_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_07_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_07_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_08_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_08_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_08_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_09_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_09_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_09_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLOCK_10_STERNE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_10_STERNE_BESCHLEUNIGUNG | 0-n | high | unsigned char | 0x07 | TAB_STERNE_BESCHLEUNIGUNG | - | - | - | Sterne für Beschleunigung |
| STAT_BLOCK_10_STERNE_BREMSEN | 0-n | high | unsigned char | 0x38 | TAB_STERNE_BREMSEN | - | - | - | Sterne für Bremsen |

### BF_BLS_VERZOEGERUNG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLS_VERZOEGERUNG | 0-n | high | unsigned char | 0x03 | TAB_BLS_VERZOEGERUNG | - | - | - | Status_BLS / Verzögerung   xxxx xx11b |

### BF_CBS_AKTIVIERUNG

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AU | 0-n | high | unsigned char | 0x03 | TAB_CBS_STATUS_AKTIVIERUNG | - | - | - | Status Aktvierung AU |
| STAT_HU | 0-n | high | unsigned char | 0x0C | TAB_CBS_STATUS_AKTIVIERUNG | - | - | - | Status Aktivierung HU |
| STAT_UEBERGABE | 0-n | high | unsigned char | 0x30 | TAB_CBS_STATUS_AKTIVIERUNG | - | - | - | Status Aktivierung Übergabedurchsicht |
| STAT_EINFAHR | 0-n | high | unsigned char | 0xC0 | TAB_CBS_STATUS_AKTIVIERUNG | - | - | - | Status Aktivierung Einfahrkontrolle |

### BF_CBS_AKTIVIERUNG_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BSI | 0-n | high | unsigned char | 0x03 | TAB_CBS_STATUS_AKTIVIERUNG | - | - | - | Status Aktivierung BSI |

### BF_ECO_MODE_AUSTRITT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSTRITT | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Austritt |
| STAT_LAST | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Last |
| STAT_GESCHWINDIGKEIT | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Geschwindigkeit |
| STAT_VERZOEGERUNG | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Verzögerung |
| STAT_GANGWAHL | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Gangwahl |
| STAT_GWS | 0/1 | high | unsigned char | 0x20 | - | - | - | - | GWS |
| STAT_KUP | 0/1 | high | unsigned char | 0x40 | - | - | - | - | KUP |
| STAT_VZA | 0/1 | high | unsigned char | 0x80 | - | - | - | - | VZA |

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
| 0x026000 | Energiesparmode aktiv | 0 |
| 0x026008 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x026009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02600A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02600B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02600D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x02FF60 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0xB7F60F | KOMBI: Gesamtwegstrecke kann nicht restauriert werden | 0 |
| 0xB7F643 | KOMBI: Fotodiode in der Instrumentenkombination hat einen Kurzschluss zur Versorgungsspannung | 0 |
| 0xB7F644 | KOMBI: Taste Tageswegstreckenzähler hat einen Kurzschluss nach Masse oder zur Versorgungsspannung | 0 |
| 0xB7F654 | Außentemperatursensor hat einen Kurzschluss nach Masse | 0 |
| 0xB7F655 | Außentemperatursensor hat einen Kurzschluss zur Versorgungsspannung | 0 |
| 0xB7F660 | KOMBI: Gesamtwegstrecke des Fahrzeuges kann nicht restauriert werden | 0 |
| 0xB7F661 | KOMBI: Gesamtwegstrecke fehlerhaft | 0 |
| 0xB7F662 | Kombi SG: Redundanz-Gesamtkilometerstand kann nicht restauriert werden | 1 |
| 0xB7F664 | KOMBI: Abgleich der Fahrgestellnummer fehlerhaft | 1 |
| 0xB7F666 | KOMBI: CBS-Daten können nicht restauriert werden | 1 |
| 0xB7F676 | KOMBI: Überspannung erkannt | 1 |
| 0xB7F685 | KOMBI: Unterspannung erkannt | 1 |
| 0xB7F690 | KOMBI: Fehlerhafte Prüfsumme in den Redundanzdaten | 1 |
| 0xB7F694 | KOMBI: Displayhinterleuchtung, Kurzschluss zur Versorgungsspannung | 0 |
| 0xB7F695 | KOMBI: Displayhinterleuchtung, Kurzschluss nach Masse | 0 |
| 0xB7F6A3 | KOMBI: Kombi-Spannungsversorgung Kl. 30 ausgefallen | 1 |
| 0xB7F6A4 | KOMBI: Kombi-Spannungsversorgung Kl. 30B ausgefallen | 1 |
| 0xB7F6C4 | KOMBI: Unbekannte EEPROM Version | 0 |
| 0xB7F6C6 | Kombi: Kilometerbereich beschreibbar | 0 |
| 0xB7F6E0 | HUD: Temperatursensor im HUD fehlerhaft | 0 |
| 0xB7F6E1 | HUD: Versorgungsspannung unterhalb minimalem Wert | 0 |
| 0xB7F6E3 | HUD: Fehler in der Kommunikation (HUD antwortet nicht) | 0 |
| 0xB7F6E4 | HUD: Fehler in der Displayhinterleuchtung | 0 |
| 0xB7F6E6 | HUD: Spiegel-Motor ausgefallen | 0 |
| 0xB7F6E7 | HUD: Fehler in den Warpingdaten | 0 |
| 0xB7F6E9 | HUD: Temperaturbedingte Abschaltung der Hinterleuchtung | 0 |
| 0xB7F6EA | HUD: Unterspannung | 0 |
| 0xB7F6EC | HUD: Fehlerhafte Bilddaten vom Kombi empfangen | 0 |
| 0xB7F70B | Tankgeber unplausibel | 1 |
| 0xE1040A | FA-CAN Control Module Bus OFF | 0 |
| 0xE10600 | Ethernet: Kommunikationsfehler (Link-Abbruch) | 1 |
| 0xE10602 | Ethernet: Link-Qualität niedrig | 1 |
| 0xE10603 | Ethernet: Kommunikationsfehler (Link-Abbruch) durch Steuergeräte-Reset | 1 |
| 0xE10604 | Ethernet: Unerwarteter Link aufgebaut | 1 |
| 0xE10BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xE11420 | KOMBI: ServiceCall kann nicht ausgeführt werden | 1 |
| 0xE11421 | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (OEL) ist ausgefallen | 1 |
| 0xE11422 | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (OEL), Signalfehler | 1 |
| 0xE11454 | Botschaft (Rohdaten Tankfüllstand,0x349) fehlt,Empfänger KOMBI, Sender JBE/REM/BDC | 1 |
| 0xE11455 | Botschaft (Zentralverriegelung und Klappenzustand, 0x2FC) fehlt, Empfänger KOMBI, Sender CAS/FEM/BDC | 1 |
| 0xE11456 | Botschaft (Bedienung Lenkstocktaster, 0x1EE) fehlt, Empfänger KOMBI, Sender SZL/FEM/BDC | 1 |
| 0xE11457 | Botschaft (Dimmung, 0x202) fehlt, Empfänger KOMBI, Sender FRM/FEM/BDC | 1 |
| 0xE11458 | Botschaft (Blinken, 0x1F6) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE11459 | Botschaft (Lampenzustand, 0x21A) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE1145A | Botschaft (Kennzahl Umrechnung Geschwindigkeit, 0x3CB) fehlt, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE1145B | Botschaft (Status Gurtschlosskontakt Sitzbelegung,0x297) fehlt, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE1145C | Botschaft (Anzeige Drehzahl Antriebsstrang, 0x0F3) fehlt, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE1145E | Botschaft (Daten Antriebsstrang, 0x3F9) fehlt, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE11460 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) fehlt, Empfänger KOMBI, Sender EGS  DKG | 1 |
| 0xE11461 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) Prüfsumme falsch, Empfänger KOMBI, Sender EGS, DKG | 1 |
| 0xE11462 | Botschaft (Daten Anzeige Getriebestrang, 0x3FD) nicht aktuell, Empfänger KOMBI, Sender EGS  DKG | 1 |
| 0xE11464 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) fehlt, Empfänger KOMBI, Sender ICM/DSC | 1 |
| 0xE11465 | CAN-Kommunikationsfehler | 1 |
| 0xE11466 | Botschaft (Geschwindigkeit Fahrzeug, 0x1A1) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE11467 | Botschaft (Winkel Fahrpedal, 0x0D9) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE1146F | Botschaft (Status Stabilisierung DSC, 0x173) fehlt, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11474 | Botschaft (Anzeige Check-Control Bypass EMF, 0x36F) fehlt, Empfänger KOMBI, Sender EMF | 1 |
| 0xE11475 | Botschaft (Anzeige Check-Control Bypass EMF, 0x36F) Prüfsumme falsch, Empfänger KOMBI, Sender EMF | 1 |
| 0xE11476 | Botschaft (Anzeige Check-Control Bypass EMF, 0x36F) nicht aktuell, Empfänger KOMBI, Sender EMF | 1 |
| 0xE11477 | Botschaft (Anzeige Drehzahl Antriebsstrang, 0x0F3) Prüfsumme falsch,Empfänger KOMBI ,Sender DME DDE | 1 |
| 0xE11478 | Botschaft (Anzeige DrehzahlAntriebsstrang, 0x0F3) nicht aktuell, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE1147A | Botschaft (Status Verbrauch Kraftstoff Motor, 0x2C4) fehlt, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE11490 | Botschaft (Anzeige Check-Control Bypass, 0x36E) fehlt, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11491 | Botschaft (Anzeige Check-Control Bypass, 0x36E) Prüfsumme falsch, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11492 | Botschaft (Anzeige Check-Control Bypass, 0x36E) nicht aktuell, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11498 | Botschaft (Status Motor-Start-Stopp-Automatik, 0x30B) fehlt, Empfänger KOMBI,Sender DME  DDE | 1 |
| 0xE1149B | Botschaft (Wegstrecke Fahrzeug, 0x2BB) fehlt, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE1149C | Botschaft (Wegstrecke Fahrzeug, 0x2BB) Prüfsumme falsch, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE1149D | Botschaft (Wegstrecke Fahrzeug, 0x2BB) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE1149E | Botschaft (Erkennung Verkehrszeichen, 0x287) fehlt, Empfänger KOMBI, Sender KAFAS | 1 |
| 0xE114A3 | Botschaft (Status Gurtschlosskontakt Sitzbelegung, 0x297) Prüfsumme falsch, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE114A4 | Botschaft (Status Gurtschlosskontakt Sitzbelegung,0x297) nicht aktuell, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE114A5 | Botschaft (Coach-Door Begrenzung Geschwindigkeit, 0x36C) fehlt, Empfänger KOMBI, Sender CDM | 1 |
| 0xE114A6 | Botschaft (Status Helligkeit Umgebung, 0x2A5) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE114A7 | Botschaft (Coach-Door Begrenzung Geschwindigkeit, 0x36C) nicht aktuell, Empfänger KOMBI, Sender CDM | 1 |
| 0xE114A8 | Botschaft (Status Fernlichtassistent, 0x36A) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE114A9 | Botschaft (Status Fahrlicht, 0x314) fehlt, Empfänger KOMBI, Sender JBE/BDC | 1 |
| 0xE114AA | Botschaft (Fahrzeugzustand, 0x3A0) fehlt, Empfänger KOMBI, Sender JBE/FEM/BDC | 1 |
| 0xE114AC | Botschaft (Status Sitzlehnenverriegelung Beifahrer, 0x34D) fehlt, Empfänger KOMBI,  Sender SMBF | 1 |
| 0xE114AE | Botschaft (Status Sitzlehnenverriegelung Beifahrer,0x34D) nicht aktuell, Empfänger KOMBI, Sender SMBF | 1 |
| 0xE114B0 | Botschaft (Status Sitzlehnenverriegelung Fahrer, 0x34B) fehlt, Empfänger KOMBI, Sender SMFA | 1 |
| 0xE114B2 | Botschaft (Status Sitzlehnenverriegelung Fahrer, 0x34B) nicht aktuell, Empfänger KOMBI, Sender SMFA | 1 |
| 0xE114B8 | Botschaft (Anzeige Checkcontrol Fahrdynamik Koordiniert, 0x2A7) fehlt, Empfänger KOMBI, Sender DSC / ICMQL | 1 |
| 0xE114B9 | Botschaft (Anzeige Checkcontrol Fahrdynamik Koordiniert, 0x2A7) Prüfsumme falsch, Empfänger KOMBI, Sender DSC / ICMQL | 1 |
| 0xE114BA | Botschaft (Anzeige Checkcontrol Fahrdynamik Koordiniert, 0x2A7) nicht aktuell, Empfänger KOMBI, Sender DSC / ICMQL | 1 |
| 0xE114BD | Botschaft (Daten Antriebsstrang 2, 0x3F9) nicht aktuell, Empfänger KOMBI, Sender DME  DDE | 1 |
| 0xE114BE | Schnittstelle EGS (Daten Anzeige Getriebestrang, 0x3FD); Signal ungültig | 1 |
| 0xE114C0 | Botschaft (Status Rückwärtsgang, 0x3B0) fehlt, Empfänger KOMBI, Sender FRM/BDC | 1 |
| 0xE114C8 | Botschaft (Status Notruf, 0x2C3) fehlt, Empfänger KOMBI, Sender Telematic-ECU | 1 |
| 0xE114CA | Botschaft (Status Notruf, 0x2C3) nicht aktuell, Empfänger KOMBI, Sender Telematic-ECU | 1 |
| 0xE114CB | Botschaft (Alive Zentrales Gateway-Modul, 0x0C0) fehlt, Empfänger KOMBI, Sender ZGM | 1 |
| 0xE114CD | Botschaft (Alive Zentrales Gateway-Modul, 0x0C0) nicht aktuell, Empfänger KOMBI, Sender ZGM | 1 |
| 0xE114CE | Botschaft (Drehmoment Kurbelwelle 1, 0x0A5) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE114D0 | Botschaft (Status M-Drive 2, 0x42E) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE114D2 | Botschaft (Status M-Drive 2, 0x42E) nicht aktuell, Empfänger KOMBI, Sender DME | 1 |
| 0xE114D4 | Botschaft (Status Cabrio Dach, 0x342) fehlt, Empfänger KOMBI, Sender CVM/CTM | 1 |
| 0xE114D6 | Botschaft (Status Cabrio Dach, 0x342) nicht aktuell, Empfänger KOMBI, Sender CVM/CTM | 1 |
| 0xE114D8 | Botschaft (Anzeige Zustand Hybrid, 0x3AD) fehlt, Empfänger KOMBI, Sender EME/AE | 1 |
| 0xE114D9 | Botschaft (Status Kontakt Handbremse, 0x34F) fehlt, Empfänger KOMBI, Sender FEM/BDC | 1 |
| 0xE114DB | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (BBV) ist ausgefallen | 1 |
| 0xE114DC | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (BBH) ist ausgefallen | 1 |
| 0xE114E0 | Botschaft (Status Reifen, 0x369) fehlt, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE114E1 | Botschaft (Status Reifen, 0x369) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/DSC | 1 |
| 0xE114E2 | Botschaft (Status Heckspoiler BN2020, 0x26B) fehlt, Empfänger KOMBI, Sender HKFM_HS | 1 |
| 0xE114E3 | Botschaft (Status Heckspoiler BN2020, 0x26B) nicht aktuell, Empfänger KOMBI, Sender HKFM_HS | 1 |
| 0xE114E7 | Botschaft (Zustand Fahrzeug, 0x3C) fehlt, Empfänger KOMBI, Sender ZGW | 1 |
| 0xE114E8 | Botschaft (Anzeige Check-Control Fahrerassistenzsystem, 0x30D) fehlt, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114E9 | Botschaft (Anzeige Check-Control Fahrerassistenzsystem, 0x30D) Prüfsumme falsch, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114EA | Botschaft (Anzeige Check-Control Fahrerassistenzsystem, 0x30D) nicht aktuell, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114EB | Botschaft (Anzeige Check-Control Parkassistent, 0x30C) fehlt, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114EC | Botschaft (Anzeige Check-Control Parkassistent, 0x30C) Prüfsumme falsch, Empfänger KOMBI, Sender ICM_QL/SAS | 1 |
| 0xE114ED | Botschaft (Anzeige Check-Control Parkassistent, 0x30C) nicht aktuell, Empfänger KOMBI , Sender ICM_QL/SAS | 1 |
| 0xE11502 | Botschaft (Status Parkassistent, 0x378) fehlt, Empfänger KOMBI, Sender PMA | 1 |
| 0xE11503 | Botschaft (Status Parkassistent, 0x378) nicht aktuell, Empfänger KOMBI, Sender PMA | 1 |
| 0xE11504 | Botschaft (Neigung Fahrbahn, 0x163) fehlt, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11505 | Botschaft (Anzeige Checkcontrol Bypass 02, 0x329) fehlt, Empfänger KOMBI, Sender AAG | 1 |
| 0xE11506 | Botschaft (Anzeige Checkcontrol Bypass 02, 0x329) Prüfsumme falsch, Empfänger KOMBI, Sender AAG | 1 |
| 0xE11507 | Botschaft (Anzeige Checkcontrol Bypass 02, 0x329) nicht aktuell, Empfänger KOMBI, Sender AAG | 1 |
| 0xE11508 | Botschaft (Ladestatus, 0x3E9) fehlt, Empfänger KOMBI, Sender AE/EME | 1 |
| 0xE11509 | Botschaft (Ladestatus 2, 0x2FA) fehlt, Empfänger KOMBI, Sender AE / EME | 1 |
| 0xE1150A | Botschaft (Systemstatus Elektrisches Fahrzeug Antrieb, 0x308) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE1150B | Botschaft (Daten Reichweitenberechnung, 0x32B) fehlt, Empfänger KOMBI, Sender AE / EME | 1 |
| 0xE1150C | Botschaft (Daten Reichweitenberechnung 2, 0x201) fehlt, Empfänger KOMBI, Sender AE / EME | 1 |
| 0xE1150D | Botschaft (Status Ladeschnittstelle, 0x3B4) fehlt, Empfänger KOMBI, Sender LIM | 1 |
| 0xE11510 | Botschaft (Status Klima Standfunktionen, 0x2F0) fehlt, Empfänger KOMBI, Sender IHKA | 1 |
| 0xE11513 | Botschaft (Fahrerlebnis Modus, 0x3D8) fehlt, Empfänger KOMBI, Sender BDC | 1 |
| 0xE11516 | Botschaft (Status Fahrzeug Klang , 0x37F) fehlt, Empfänger KOMBI, Sender VSG | 1 |
| 0xE11517 | Botschaft (Status Fahrzeug Klang, 0x37F) nicht aktuell, Empfänger KOMBI, Sender VSG | 1 |
| 0xE11518 | Botschaft (Steuerung Anzeige M-Systeme, 0x0DE) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE11524 | Botschaft (Anzeige Vorausschau, 0x2EC) fehlt, Empfänger KOMBI, Sender DSC, SAS | 1 |
| 0xE11525 | Botschaft (Anzeige Fahrerassistenzsystem Längsführung, 0x1C3) nicht aktuell, Empfänger KOMBI, Sender DSC, SAS | 1 |
| 0xE11526 | Botschaft (Anzeige Fahrerassistenzsystem Längsführung, 0x1C3) Prüfsumme falsch, Empfänger KOMBI, Sender DSC, SAS | 1 |
| 0xE11527 | Botschaft (Anzeige Fahrerassistenzsystem Längsführung, 0x1C3) fehlt, Empfänger KOMBI, Sender DSC, SAS | 1 |
| 0xE11528 | Botschaft (Anzeige Checkcontrol ARS, 0x293) nicht aktuell, Empfänger KOMBI, Sender VDP | 1 |
| 0xE11529 | Botschaft (Anzeige Checkcontrol ARS, 0x293) Prüfsumme falsch, Empfänger KOMBI, Sender VDP | 1 |
| 0xE11530 | Botschaft (Anzeige Checkcontrol ARS, 0x293) fehlt, Empfänger KOMBI, Sender VDP | 1 |
| 0xE11531 | Botschaft (Anzeige Checkcontrol EHC, 0x296) nicht aktuell, Empfänger KOMBI, Sender VDP | 1 |
| 0xE11532 | Botschaft (Anzeige Checkcontrol EHC, 0x296) Prüfsumme falsch, Empfänger KOMBI, Sender VDP | 1 |
| 0xE11533 | Botschaft (Anzeige Checkcontrol EHC, 0x296) fehlt, Empfänger KOMBI, Sender VDP | 1 |
| 0xE11534 | Botschaft (Anzeige Checkcontrol EPS, 0x294) nicht aktuell, Empfänger KOMBI, Sender EPS | 1 |
| 0xE11535 | Botschaft (Anzeige Checkcontrol EPS, 0x294) Prüfsumme falsch, Empfänger KOMBI, Sender EPS | 1 |
| 0xE11536 | Botschaft (Anzeige Checkcontrol EPS, 0x294) fehlt, Empfänger KOMBI, Sender EPS | 1 |
| 0xE11537 | Botschaft (Anzeige Checkcontrol VDC, 0x28E) nicht aktuell, Empfänger KOMBI, Sender VDP | 1 |
| 0xE11538 | Botschaft (Anzeige Checkcontrol VDC, 0x28E) Prüfsumme falsch, Empfänger KOMBI, Sender VDP | 1 |
| 0xE11539 | Botschaft (Anzeige Checkcontrol VDC, 0x28E) fehlt, Empfänger KOMBI, Sender VDP | 1 |
| 0xE11540 | Botschaft (Status Aktivierung High-Speed-Fahrzeugzugang, 0x2F4) fehlt, Empfänger KOMBI, Sender ZGW | 1 |
| 0xE11541 | Botschaft (Status Verbrennungsmotor, 0x32) fehlt, Empfänger KOMBI, Sender DME | 1 |
| 0xE11543 | Botschaft (Status Crash, 0xAB) fehlt, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE11544 | Botschaft (Status Crash, 0xAB) nicht aktuell, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE11545 | Botschaft (Anforderung Klimaanlage 1, 0x200) fehlt, Empfänger KOMBI, Sender IHKA | 1 |
| 0xE11546 | Botschaft (Radmoment Antrieb 1, 0x8F) fehlt, Empfänger KOMBI, Sender DME1 | 1 |
| 0xE11550 | Botschaft (Anzeige Checkcontrol Getriebe, 0x1A0) fehlt, Empfänger KOMBI, Sender EGS_EL/EGS_HY | 1 |
| 0xE11551 | Botschaft (Anzeige Checkcontrol Getriebe, 0x1A0) nicht aktuell, Empfänger KOMBI, Sender EGS_EL/EGS_HY | 1 |
| 0xE11552 | Botschaft (Anzeige Checkcontrol Getriebe, 0x1A0) Prüfsumme falsch, Empfänger KOMBI, Sender EGS_EL/EGS_HY | 1 |
| 0xE11553 | Botschaft (Anzeige Checkcontrol Zentralfunktionen, 0x319) fehlt, Empfänger KOMBI, Sender BDC2015 | 1 |
| 0xE11554 | Botschaft (Anzeige Checkcontrol Zentralfunktionen, 0x319) nicht aktuell, Empfänger KOMBI, Sender BDC2015 | 1 |
| 0xE11555 | Botschaft (Anzeige Checkcontrol Zentralfunktionen, 0x319) Prüfsumme falsch, Empfänger KOMBI, Sender BDC2015 | 1 |
| 0xE11556 | Botschaft (Ist Drehzahl Rad ungesichert, 0x254) fehlt, Empfänger KOMBI, Sender DSC_Modul | 1 |
| 0xE11557 | Botschaft (GPS Uhrzeit CAN, 0x40F) fehlt, Empfänger KOMBI, Sender ATM | 1 |
| 0xE11558 | Botschaft (Anzeige leistung Antrieb, 0x2AE) fehlt, Empfänger KOMBI, Sender DME1 | 1 |
| 0xE11560 | Botschaft (Anforderung Warnbremskoordinator Akustik, 0x102) fehlt, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11561 | Botschaft (Anforderung Warnbremskoordinator Akustik, 0x102) nicht aktuell, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11562 | Botschaft (Anforderung Warnbremskoordinator Akustik, 0x102) Prüfsumme falsch, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11563 | Botschaft (Anforderung Warnbremskoordinator Anzeige, 0x105) fehlt, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11564 | Botschaft (Anforderung Warnbremskoordinator Anzeige, 0x105) nicht aktuell, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11565 | Botschaft (Anforderung Warnbremskoordinator Anzeige, 0x105) Prüfsumme falsch, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11566 | Botschaft (Anzeige Checkcontrol Bypass 03, 0x3A8) fehlt, Empfänger KOMBI, Sender CTM, CVM | 1 |
| 0xE11567 | Botschaft (Anzeige Checkcontrol Bypass 03, 0x3A8) nicht aktuell, Empfänger KOMBI, Sender CTM, CVM | 1 |
| 0xE11568 | Botschaft (Anzeige Checkcontrol Bypass 03, 0x3A8) Prüfsumme falsch, Empfänger KOMBI, Sender CTM, CVM | 1 |
| 0xE11569 | Botschaft (Anzeige Daten Hochvoltspeicher, 0x1C8) fehlt, Empfänger KOMBI, Sender EME | 1 |
| 0xE11570 | Botschaft (Anzeige Vorausschau 2, 0x2F3) fehlt, Empfänger KOMBI, Sender DSC, SAS | 1 |
| 0xE11573 | Botschaft (Anzeige Fahrerassistenzsystem Querführung, 0x203) fehlt, Empfänger KOMBI, Sender SAS | 1 |
| 0xE11574 | Botschaft (Anzeige Fahrerassistenzsystem Querführung, 0x203) nicht aktuell, Empfänger KOMBI, Sender SAS | 1 |
| 0xE11575 | Botschaft (Anzeige Fahrerassistenzsystem Querführung, 0x203) Prüfsumme falsch, Empfänger KOMBI, Sender SAS | 1 |
| 0xE11576 | Botschaft (Status Individualisierung Koordinator Fahrverhalten Fahrerlebnis, 0x31B) fehlt, Empfänger KOMBI, Sender DSC | 1 |
| 0xE11577 | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (DPF) ist ausgefallen | 1 |
| 0xE11578 | Botschaft (Status Induktiv Laden, 0xFC) fehlt, Empfänger KOMBI, Sender CPM | 1 |
| 0xE11579 | Botschaft (Status M-Systeme, 0x384) fehlt, Empfänger Kombi, Sender DSC | 1 |
| 0xE1157A | Botschaft (Zustand Fahrzeug, 0x3C) nicht aktuell, Empfänger KOMBI, Sender ZGW | 1 |
| 0xE1157B | Botschaft (Zustand Fahrzeug, 0x3C) Prüfsumme falsch, Empfänger KOMBI, Sender ZGW | 1 |
| 0xE1157C | Botschaft (Status Zustand Sitz Fahrer, 0x274) fehlt, Empfänger KOMBI, Sender SMFH | 1 |
| 0xE1157D | Botschaft (Status Zustand Sitz Fahrer, 0x274) nicht aktuell, Empfänger KOMBI, Sender SMFH | 1 |
| 0xE1157E | Botschaft (Status Zustand Sitz Beifahrer, 0x275) fehlt, Empfänger KOMBI, Sender SMBFH | 1 |
| 0xE1157F | Botschaft (Status Zustand Sitz Beifahrer, 0x275) nicht aktuell, Empfänger KOMBI, Sender SMBFH | 1 |
| 0xE11580 | Botschaft (Status Anzeige Gurtwarnung, 0x3C0) fehlt, Empfänger KOMBI, Sender ACSM | 1 |
| 0xE11581 | Botschaft (Gong Player Verfügbarkeit, 0x26C) fehlt, Empfänger KOMBI, Sender BIS, RAM | 1 |
| 0xE11582 | Botschaft (Gong Player Verfügbarkeit, 0x26C) nicht aktuell, Empfänger KOMBI, Sender BIS, RAM | 1 |
| 0xE11583 | Botschaft (Anforderung Nothalt, 0x15d) fehlt, Empfänger KOMBI, Sender SAS2018 | 1 |
| 0xE11584 | Botschaft (Steuerung Funktionen Blinken, 0xCA) fehlt, Empfänger KOMBI, Sender BDC_Body | 1 |
| 0xE11585 | Botschaft (Anzeige Checkcontrol Antriebsfunktionen, 0x194) fehlt, Empfänger KOMBI, Sender DME1 | 1 |
| 0xE11586 | Botschaft (Anzeige Checkkontrol Antriebsfunktionen, 0x194) Prüfsumme falsch, Empfänger KOMBI, Sender DME1 | 1 |
| 0xE11587 | Botschaft (Anzeige Checkkontrol Antriebsfunktionen, 0x194) nicht aktuell, Empfänger KOMBI, Sender DME1 | 1 |
| 0xE11588 | Botschaft (Status Bedienung Licht Außen, 0x1AE) fehlt, Empfänger KOMBI, Sender BDC_Body | 1 |
| 0xE11590 | Botschaft (Anzeige Schalter Fahrdynamik Technik Erleben, 0x426) fehlt, Empfänger KOMBI, Sender DME1 | 1 |
| 0xE11591 | Botschaft (Steuerung Kontrolleuchten, 0x224) fehlt, Empfänger KOMBI, Sender BDC_Body | 1 |
| 0xE11592 | Botschaft (Anzeige Fahrerassistenzsystem Längsführung 2, 0x1DD) fehlt, Empfänger KOMBI, Sender DSC_IB_VIP, SAS2018 | 1 |
| 0xE11593 | Botschaft (GPS Datum CAN, 0x40E) fehlt, Empfänger KOMBI, Sender ATM | 1 |
| 0xE11597 | Botschaft (Steuerung Konfiguration FAS 5, 0x385) fehlt, Empfänger KOMBI, Sender BDC_Body | 1 |
| 0xE12C00 | Tankfüllstandssensor links: Kurzschluss nach Masse | 1 |
| 0xE12C01 | Tankfüllstandssensor links: Kurzschluss zur Versorgungsspannung | 1 |
| 0xE12C02 | Tankfüllstandssensor rechts: Kurzschluss nach Masse | 1 |
| 0xE12C03 | Tankfüllstandssensor rechts: Kurzschluss zur Versorgungsspannung | 1 |
| 0xE12C10 | Schnittstelle EGS  DKG (Daten Anzeige Getriebestrang, 0x3FD): Signal ungültig | 1 |
| 0xE12C11 | Schnittstelle ICM/DSC (Geschwindigkeit Fahrzeug, 0x1A1): Signal ungültig | 1 |
| 0xE12C14 | Schnittstelle DME DDE (Anzeige Drehzahl Antriebsstrang, 0x0F3): Signal ungültig | 1 |
| 0xE12C15 | Schnittstelle FEM/BDC (Blinken, 0x1F6): Signal ungültig | 1 |
| 0xE12C16 | Schnittstelle FRM/BDC (Dimmung, 0x202): Signal ungültig | 1 |
| 0xE12C17 | Schnittstelle ICM_QL/DSC (Kennzahl Umrechnung Geschwindigkeit, 0x3CB): Signal ungültig | 1 |
| 0xE12C19 | Schnittstelle ACSM (Status Gurtschlosskontakt Sitzbelegung, 0x297): Signal ungültig | 1 |
| 0xE12C1A | Schnittstelle CAS/FEM/BDC (Zentralverriegelung und Klappenzustand, 0x2FC): Signal ungültig | 1 |
| 0xE12C1C | Schnittstelle DME  DDE (Daten Antriebsstrang 2, 0x3F9): Signal ungültig | 1 |
| 0xE12C1F | Schnittstelle ICM_QL/DSC (Wegstrecke Fahrzeug,0x2BB): Signal ungültig | 1 |
| 0xE12C20 | Schnittstelle KAFAS (Erkennung Verkehrszeichen, 0x287): Signal ungültig | 1 |
| 0xE12C21 | Schnittstelle DME, DDE (Status Verbrauch Kraftstoff Motor, 0x2C4): Signal ungültig | 1 |
| 0xE12C22 | Schnittstelle FEM/BDC (Status Fernlichtassistent, 0x36A): Signal ungültig | 1 |
| 0xE12C24 | Schnittstelle FEM/BDC (Status Fahrlicht, 0x314): Signal ungültig | 1 |
| 0xE12C25 | Schnittstelle SMBF (Status Sitzlehnenverriegelung Beifahrer, 0x34D): Signal ungültig | 1 |
| 0xE12C26 | Schnittstelle SMFA (Status Sitzlehnenverriegelung Fahrer, 0x34B): Signal ungültig | 1 |
| 0xE12C27 | Schnittstelle DME (Drehmoment Kurbelwelle 1, 0x0A5): Signal ungültig | 1 |
| 0xE12C28 | Schnittstelle FRM/BDC (Status Rückwärtsgang, 0x3B0): Signal ungültig | 1 |
| 0xE12C2A | Schnittstelle DME DDE (Anzeige Drehzahl Antriebsstrang, 0x0F3): Signal ungültig | 1 |
| 0xE12C2C | Schnittstelle EME/AE (Anzeige Zustand Hybrid, 0x3AD): Signal ungültig | 1 |
| 0xE12C32 | Schnittstelle FEM/BDC (Status Helligkeit Umgebung, 0x2A5): Signal ungültig | 1 |
| 0xE12C33 | Schnittstelle FEM/BDC (Status Kontakt Handbremse, 0x34F): Signal ungültig | 1 |
| 0xE12C35 | Schnittstelle SZL/FEM/BDC (Bedienung Lenkstocktaster, 0x1EE): Signal ungültig | 1 |
| 0xE12C36 | Schnittstelle DME (Status M-Drive 2, 0x42E): Signal ungültig | 1 |
| 0xE12C38 | Schnittstelle DME (Winkel Fahrpedal, 0x0D9): Signal ungültig | 1 |
| 0xE12C39 | Schnittstelle DSC (Status Stabilisierung DSC, 0x173): Signal ungültig | 1 |
| 0xE12C3B | Schnittstelle DME DDE (Status Motor-Start-Stopp-Automatik, 0x30B): Signal ungültig | 1 |
| 0xE12C3C | Schnittstelle DME, DDE (Status Verbrauch Kraftstoff Motor, 0x2C4): Signal ungültig | 1 |
| 0xE12C3D | Schnittstelle DSC (Meldung vom CBS-Teilnehmer BBV): Signal ungültig | 1 |
| 0xE12C3E | Schnittstelle DSC (Meldung vom CBS-Teilnehmer BBH): Signal ungültig | 1 |
| 0xE12C46 | Schnittstelle SM_FA (Memoryverstellung, 0x20B): Signal ungültig | 1 |
| 0xE12C47 | Schnittstelle ZGW (Zustand Fahrzeug, 0x3C): Signal ungültig | 1 |
| 0xE12C4C | Schnittstelle PMA (Status Parkassistent, 0x378): Signal ungültig | 1 |
| 0xE12C4D | Schnittstelle DSC (Neigung Fahrbahn, 0x163): Signal ungültig | 1 |
| 0xE12C4E | Schnittstelle AE / EME (Ladestatus, 0x3E9): Signal ungültig | 1 |
| 0xE12C4F | Schnittstelle AE / EME (Ladestatus 2, 0x2FA): Signal ungültig | 1 |
| 0xE12C50 | Schnittstelle DME (Systemstatus Elektrisches Fahrzeug Antrieb, 0x308): Signal ungültig | 1 |
| 0xE12C51 | Schnittstelle AE / EME (Daten Reichweitenberechnung, 0x32B): Signal ungültig | 1 |
| 0xE12C52 | Schnittstelle AE / EME (Daten Reichweitenberechnung 2, 0x201): Signal ungültig | 1 |
| 0xE12C56 | Schnittstelle IHKA (Status Klima Standfunktionen, 0x2F0): Signal ungültig | 1 |
| 0xE12C57 | Schnittstelle BDC (Fahrerlebnis Modus, 0x3D8): Signal ungültig | 1 |
| 0xE12C60 | Schnittstelle VSG (Status Fahrzeug Klang, 0x37F): Signal ungültig | 1 |
| 0xE12C61 | Schnittstelle DME (Steuerung Anzeige M-Systeme, 0x0DE): Signal ungültig | 1 |
| 0xE12C62 | Schnittstelle DME (Steuerung Shiftlights, 0x0DF): Signal ungültig | 1 |
| 0xE12C64 | Schnittstelle DSC, SAS (Anzeige Vorausschau, 0x2EC): Signal ungültig | 1 |
| 0xE12C65 | Schnittstelle DSC, SAS (Anzeige Fahrerassistenzsystem Längsführung, 0x1C3): Signal ungültig | 1 |
| 0xE12C66 | Schnittstelle ZGW (Status Aktivierung High-Speed-Fahrzeugzugang, 0x2F4): Signal ungültig | 1 |
| 0xE12C67 | Schnittstelle DME (Status Verbrennungsmotor, 0x32): Signal ungültig | 1 |
| 0xE12C70 | Schnittstelle IHKA (Anforderung Klimaanlage 1, 0x200): Signal ungültig | 1 |
| 0xE12C71 | Schnittstelle DME1 (Radmoment Antrieb 1, 0x8F): Signal ungültig | 1 |
| 0xE12C72 | Schnittstelle MOSTSIM (Bedienung Komfiguration Kombi 4, 0x41B): Signal ungültig | 1 |
| 0xE12C73 | Schnittstelle EntryNavEvo/NBTevo (Bedienung Individualisierung Koordinator Anzeige Fahrerlebnis, 0x370): Signal ungültig | 1 |
| 0xE12C74 | Schnittstelle MOSTSIM (Bedienung HUD 3, 0x321): Signal ungültig | 1 |
| 0xE12C75 | Schnittstelle DSC_Modul (Ist Drehzahl Rad ungesichert, 0x254): Signal ungültig | 1 |
| 0xE12C76 | Schnittstelle EGS  DKG (Daten Anzeige Getriebestrang, 0x3FD): Signal ungültig | 1 |
| 0xE12C77 | Schnittstelle DME1 (Anzeige Leistung Antrieb, 0x2AE): Signal ungültig | 1 |
| 0xE12C78 | Schnittstelle EGS  DKG (Daten Anzeige Getriebestrang, 0x3FD): Signal ungültig | 1 |
| 0xE12C79 | Schnittstelle DME DDE (Anzeige Drehzahl Antriebsstrang, 0x0F3): Signal ungültig | 1 |
| 0xE12C80 | Schnittstelle DSC (Anforderung Warnbremskoordinator Akustik, 0x102) Signal ungültig | 1 |
| 0xE12C81 | Schnittstelle DSC (Anforderung Warnbremskoordinator Anzeige, 0x105) Signal ungültig | 1 |
| 0xE12C82 | Schnittstelle EME (Anzeige Daten Hochvoltspeicher, 0x1C8): Signal ungültig | 1 |
| 0xE12C83 | Schnittstelle DSC, SAS (Anzeige Vorausschau 2, 0x2F3): Signal ungültig | 1 |
| 0xE12C84 | Schnittstelle EntryNavEvo, NBTevo (Steuerung Fahrstil 2, 0x355): Signal ungültig | 1 |
| 0xE12C85 | Schnittstelle SAS (Anzeige Fahrerassistenzsystem Querführung, 0x203): Signal ungültig | 1 |
| 0xE12C86 | Schnittstelle JBE, FEM, BDC (Fahrzeugzustand, 0x3A0): Signal ungültig | 1 |
| 0xE12C87 | Schnittstelle DSC (Status Individualisierung Koordinator Fahrverhalten Fahrerlebnis, 0x31B): Signal ungültig | 1 |
| 0xE12C88 | Fehlerhafte CCM | 1 |
| 0xE12C90 | Schnittstelle DSC, SAS (Anzeige Vorausschau, 0x2EC): Signal ungültig | 1 |
| 0xE12C91 | Schnittstelle AE / EME (Daten Reichweitenberechnung 2, 0x201): Signal ungültig | 1 |
| 0xE12C92 | Schnittstelle EME/AE (Anzeige Zustand Hybrid, 0x3AD): Signal ungültig | 1 |
| 0xE12C96 | Schnittstelle DME, DDE (Status Verbrauch Kraftstoff Motor, 0x2C4): Signal ungültig | 1 |
| 0xE12C97 | Botschaft Bedarfsorientierter Service, Meldung vom CBS-Teilnehmer (DPF): Signal ungültig | 1 |
| 0xE12C99 | Schnittstelle CPM (Status Induktiv Laden, 0xFC): Signal ungültig | 1 |
| 0xE12C9B | Schnittstelle DME DDE (Anzeige Drehzahl Antriebsstrang, 0x0F3): Signal ungültig | 1 |
| 0xE12C9D | Schnittstelle BDC (Fahrerlebnis Modus, 0x3D8): Signal ungültig | 1 |
| 0xE12C9E | Schnittstelle DSC (Status M-Systeme, 0x384): Signal ungültig | 1 |
| 0xE12CA0 | Schnittstelle ACSM (Status Anzeige Gurtwarnung, 0x3C0): Signal ungültig | 1 |
| 0xE12CA1 | Schnittstelle BIS, RAM (Gong Player Verfügbarkeit, 0x26C): Signal ungültig | 1 |
| 0xE12CA2 | Schnittstelle SAS2018 (Anforderung Nothalt, 0x15d): Signal ungültig | 1 |
| 0xE12CA3 | Schnitttstelle BDC_Body (Steuerung Funktionen Blinken, 0xCA): Signal ungültig | 1 |
| 0xE12CA5 | Schnittstelle SAS (Anzeige Fahrerassistenzsystem Querführung, 0x203): Signal ungültig | 1 |
| 0xE12CA6 | Schnittstelle BIS, RAM (Status Gong, 0x16f): Signal ungültig | 1 |
| 0xE12CA7 | Schnittstelle SAS (Anzeige Fahrerassistenzsystem Querführung, 0x203): Signal ungültig | 1 |
| 0xE12CA8 | Schnittstelle BDC_Body (Status Bedienung Licht Außen, 0x1AE): Signal ungültig | 1 |
| 0xE12CAA | Schnittstelle DME1 (Anzeige Schalter Fahrdynamik Technik Erleben, 0x426): Signal ungültig | 1 |
| 0xE12CAF | Schnittstelle BDC_Body (Steuerung Kontrolleuchten, 0x224): Signal ungültig | 1 |
| 0xE12CB0 | Schnittstelle DSC_IB_VIP, SAS2018 (Anzeige Fahrerassistenzsystem Längsführung 2, 0x1DD): Signal ungültig | 1 |
| 0xE12CB7 | Schnittstelle BDC_Body (Steuerung Komfiguration FAS 5, 0x385): Signal ungültig | 1 |
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
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1752 | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x1757 | Signalqualität | TEXT | High | 8 | - | 1.0 | 1.0 | 0.0 |
| 0x175A | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
| 0x175B | Sub-Tabelle | 0-n | - | 0xFFFF | - | - | - | - |
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

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xB7F60C | Kombi: Personal Profile Konfigurationsfehler | 0 |
| 0xB7F640 | KOMBI: Displaytemperatursensor in der Instrumentenkombination hat einen Kurzschluss nach Masse | 0 |
| 0xB7F641 | KOMBI: Displaytemperatursensor in der Instrumentenkombination hat einen Kurzschluss zur Versorgungsspannung | 0 |
| 0xB7F663 | KOMBI: Redundante Daten aus dem Partnersteuergerät übernommen | 1 |
| 0xB7F665 | KOMBI: Redundante Daten im Partnersteuergerät abgelegt | 1 |
| 0xB7F667 | KOMBI: Ablage der Systemzeit fehlerhaft | 0 |
| 0xB7F668 | KOMBI: Systemzeit wurde zurückgesetzt | 1 |
| 0xB7F669 | Kombi: Infofehler 1 | 0 |
| 0xB7F66A | Kombi: Infofehler 2 | 0 |
| 0xB7F66B | Kombi: Infofehler 3 | 0 |
| 0xB7F66C | Kombi: Infofehler 4 | 0 |
| 0xB7F66D | Kombi: Infofehler 5 | 0 |
| 0xB7F66E | Kombi: Infofehler 6 | 0 |
| 0xB7F66F | Kombi: Infofehler 7 | 0 |
| 0xB7F670 | Kombi: Infofehler 8 | 0 |
| 0xB7F671 | Kombi: Infofehler 9 | 0 |
| 0xB7F672 | Kombi: Infofehler 10 | 0 |
| 0xB7F678 | Kombi: Temperaturbedingte Reduzierung der Displayhinterleuchtung | 1 |
| 0xB7F67C | Kombi: CAN-Eingangspuffer, Datenverlust | 0 |
| 0xB7F67F | Kombi: EEPROM Adressfehler | 0 |
| 0xB7F680 | Kombi: EEPROM Bereichsfehler | 0 |
| 0xB7F681 | Kombi: Speicherauslastung, Schwelle 1 erreicht | 0 |
| 0xB7F682 | Kombi: Speicherauslastung, Schwelle 2 erreicht | 0 |
| 0xB7F6A1 | KOMBI: Standzeitabschaltung erreicht | 1 |
| 0xB7F6A5 | KOMBI: Spannungsüberwachung im Kombi ausgefallen | 0 |
| 0xB7F6B6 | KOMBI: Fehler in der Spannungsversorgung der Elektronikeinheit | 0 |
| 0xB7F6B7 | KOMBI: Fehler in der Spannungsversorgung der Anzeigeeinheit | 0 |
| 0xB7F6C7 | Ein undefinierter Wert wurde in der CAF gefunden. | 0 |
| 0xB7F6D2 | Ein undefinierter Wert wurde vom CAN-Bus empfangen. | 0 |
| 0xB7F6D4 | Kombi HMI interner Fehler, Zustandsautomat Event Queue Overflow | 0 |
| 0xB7F6D7 | Kombi HMI interner Fehler, kein Timer verfügbar | 0 |
| 0xB7F6D9 | Kombi HMI interner Fehler, Zustandsautomat Contradiction | 0 |
| 0xB7F6DA | Kombi HMI interner Fehler, Zustandsautomat Signal Queue Overflow | 0 |
| 0xB7F6DB | Kombi HMI interner Fehler, Scheduler ist voll | 0 |
| 0xB7F6DC | Kombi HMI interner Fehler, kein Filter verfügbar | 0 |
| 0xB7F6DD | Kombi HMI interner Fehler, Zustandsautomat, Event Verarbeitungsfehler | 0 |
| 0xB7F6E5 | HUD: Checksummenfehler in den Flashdaten | 0 |
| 0xB7F6E8 | HUD: Temperaturbedingte Helligkeitsreduzierung | 0 |
| 0xB7F6EB | HUD: Variante unbekannt | 0 |
| 0xB7F6EF | HUD: Ueberspannung am HUD | 0 |
| 0xB7F700 | Kombi: Vergleich Tankinhalt - kumulierter Verbrauch | 1 |
| 0xB7F70E | Kombi: Interner SW-Fehler (CAN_E_TIMEOUT) | 1 |
| 0xB7F70F | Kombi: Interner SW-Fehler (CANIF_E_FULL_TX_BUFFER) | 1 |
| 0xB7F711 | Kombi: Interner SW-Fehler (CANNM_E_CANIF_TRANSMIT_ERROR) | 1 |
| 0xB7F712 | Kombi: Interner SW-Fehler (CANNM_E_INIT_FAILED) | 1 |
| 0xB7F714 | Kombi: Interner SW-Fehler (CANNM_E_TX_PATH_FAILED) | 1 |
| 0xB7F719 | Kombi: Interner SW-Fehler (ECUM_E_RAM_CHECKED_FAILED) | 1 |
| 0xB7F71B | Kombi: Interner SW-Fehler (MCU_E_CLOCK_FAILURE) | 1 |
| 0xB7F71C | Kombi: Interner SW-Fehler (NVM_E_INTEGRITY_FAILED) | 1 |
| 0xB7F71D | Kombi: Interner SW-Fehler (NVM_E_REQ_FAILED) | 1 |
| 0xB7F720 | Kombi: Interner SW-Fehler (WDG_12_IA_E_DISABLE_REJECTED) | 1 |
| 0xB7F721 | Kombi: Interner SW-Fehler (WDG_12_IA_E_MODE_SWITCH_FAILED) | 1 |
| 0xB7F723 | Kombi: Interner SW-Fehler (WDGM_E_SET_MODE) | 1 |
| 0xB7F725 | Kombi: Interner SW-Fehler (CANSM_E_MODE_CHANGE_NETWORK_0) | 1 |
| 0xB7F727 | Kombi: Interner SW-Fehler (CANSM_E_SETTRCVMODE_NETWORK_0) | 1 |
| 0xB7F730 | Kombi HMI interner Fehler, Zustandsautomat, Zustandsübergangsfehler | 0 |
| 0xB7F731 | Kombi HMI interner Fehler, generischer Fehler | 0 |
| 0xB7F732 | Kombi HMI interner Fehler, Grafik, generischer Fehler | 0 |
| 0xB7F733 | Kombi HMI interner Fehler, Grafik, Clipping Fehler | 0 |
| 0xB7F734 | Kombi HMI interner Fehler, ASIL, Prüffehler | 0 |
| 0xB7F73A | Kombi HMI interner Fehler, Debug Assert | 0 |
| 0xB7F73B | Kombi HMI interner Fehler, Navi Item Pool, Generischer Fehler | 0 |
| 0xB7F73C | Kombi HMI interner Fehler, Navi Item Pool, Puffer ist voll | 0 |
| 0xB7F73D | Kombi HMI interner Fehler, Navi Item Pool, zu viele Knotenpunkte | 0 |
| 0xB7F73E | Kombi HMI interner Fehler, Navi Item Pool, ungültiger Verweis | 0 |
| 0xB7F744 | Kombi: Keine APIX Kommunikation | 1 |
| 0xB7F745 | Kombi: Temperatursensorwert ausserhalb des gültigen Bereichs | 1 |
| 0xB7F746 | Kombi: Temperatursensorwert ausserhalb des gültigen Bereichs | 1 |
| 0xB7F747 | Kombi: Helligkeitssensorwert ausserhalb des gültigen Bereichs | 1 |
| 0xB7F749 | Kombi: Checksumme eines Flash-Datenblocks ist fehlerhaft | 1 |
| 0xB7F751 | Kombi: gefilterte Backlight-Temperatur >= Abschaltschwelle | 1 |
| 0xB7F752 | Kombi: gefilterte Versorgungsspannung überhalb des gültigen Bereichs | 1 |
| 0xB7F753 | Kombi: gefilterte Versorgungsspannung unterhalb des gültigen Bereichs | 1 |
| 0xB7F755 | Kombi:  DFE-Ausprägungs-ID ist unbekannt | 1 |
| 0xB7F756 | Kombi: External Vsync error | 1 |
| 0xB7F757 | CBS-Reset erkannt | 0 |
| 0xB7F758 | Fehler in der SW-Funktion (FSCSM) | 0 |
| 0xB7F761 | Kombi: Interner SW-Fehler (NVM_E_LOSS_OF_REDUNDANCY) | 0 |
| 0xB7F762 | Kombi: Interner SW-Fehler (NVM_E_QUEUE_OVERFLOW) | 0 |
| 0xB7F764 | Kombi: Interner SW-Fehler (NVM_E_VERIFY_FAILED) | 0 |
| 0xB7F765 | Kombi: Interner SW-Fehler (NVM_E_WRITE_PROTECTED) | 0 |
| 0xB7F767 | Kombi: Interner SW-Fehler (ECUM_E_CONFIGURATION_DATA_INCONSISTENT) | 0 |
| 0xB7F768 | Kombi: Interner SW-Fehler (ECUM_E_IMPROPER_CALLER) | 0 |
| 0xB7F770 | Kombi: Interner SW-Fehler (WDGM_E_IMPROPER_CALLER) | 0 |
| 0xB7F771 | Kombi: Interner SW-Fehler (WDGM_E_MONITORING) | 0 |
| 0xB7F773 | Kombi: Interner SW-Fehler (SPI_E_HARDWARE_ERROR) | 0 |
| 0xB7F774 | Kombi: Interner SW-Fehler (EEP_E_COMPARE_FAILED) | 0 |
| 0xB7F775 | Kombi: Interner SW-Fehler (EEP_E_ERASE_FAILED) | 0 |
| 0xB7F776 | Kombi: Interner SW-Fehler (EEP_E_READ_FAILED) | 0 |
| 0xB7F777 | Kombi: Interner SW-Fehler (EEP_E_WRITE_FAILED) | 0 |
| 0xB7F778 | Kombi: Ausfall Kontrolleuchte | 0 |
| 0xB7F779 | Kombi: Kilometerstand unplausibel | 0 |
| 0xB7F780 | KSS_RESET | 0 |
| 0xB7F781 | GSS_RESET | 0 |
| 0xB7F782 | GSS_ALIVE | 0 |
| 0xB7F783 | Indigo2 Watchdog | 0 |
| 0xB7F784 | IPC_TIMEOUT | 0 |
| 0xB7F785 | IPC_ALIVE | 0 |
| 0xB7F786 | IPC_CRC | 0 |
| 0xB7F787 | GPU Temperatur ungueltig | 0 |
| 0xB7F788 | GPU Temperaturgrenze ueberschritten | 0 |
| 0xB7F789 | Kombi: Kennung unplausibel | 0 |
| 0xB7F791 | EEPROM Emulation Flash Driver (EEFLS_E_COMPARE_FAILED) | 0 |
| 0xB7F792 | EEPROM Emulation Flash Driver (EEFLS_E_ECC_ERROR_CORRECTION) | 0 |
| 0xB7F793 | EEPROM Emulation Flash Driver (EEFLS_E_ECC_ERROR_DETECTION) | 0 |
| 0xB7F794 | EEPROM Emulation Flash Driver (EEFLS_E_ERASE_FAILED) | 0 |
| 0xB7F795 | EEPROM Emulation Flash Driver (EEFLS_E_READ_FAILED) | 0 |
| 0xB7F796 | EEPROM Emulation Flash Driver (EEFLS_E_UNEXPECTED_FLASH_ID) | 0 |
| 0xB7F797 | EEPROM Emulation Flash Driver (EEFLS_E_WRITE_FAILED) | 0 |
| 0xB7F798 | Flash EEPROM Emulation (FEE_E_FREE_PAGES_AVAILABLE) | 0 |
| 0xB7F79A | Kombi: mit dem Ausblenden der elektrischen Reichweite | 0 |
| 0xB7F79B | Kombi: ARH Communication Failure | 0 |
| 0xB7F79C | CRC Kommunikationsfehler auf die interne Ganganzeige IPC Nachrichten | 0 |
| 0xB7F79D | ALIVE Kommunikationsfehler auf die interne Ganganzeige IPC Nachrichten | 0 |
| 0xB7F79E | CRC Kommunikationsfehler auf die interne CCM IPC Nachrichten | 0 |
| 0xB7F79F | ALIVE Kommunikationsfehler auf die interne CCM IPC Nachrichten | 0 |
| 0xB7F7A1 | Kombi: Vergleich Tankgeber - Verbrauchssignal | 1 |
| 0xB7F7A2 | Display Alive Fehler (HW Signal vom Display zum M4 Controller, mit Timer vermessen) | 0 |
| 0xB7F7A3 | Spannungsfehler 5Vg | 0 |
| 0xB7F7A4 | Spannungsfehler  Display Versorgung | 0 |
| 0xB7F7A5 | ROHM Safety relevantes Schieberegister Init Test Fehler | 0 |
| 0xB7F7A6 | ROHM Safety relevantes Schieberegister LED Open Test Fehler | 0 |
| 0xB7F7A7 | ROHM Safety relevantes Schieberegister Fehler im RUN erkannt | 0 |
| 0xB7F7A8 | Sammel - Fehler auf dem Graphics Core: DCU Register Fehler, Layer Enable Fehler, AluTest | 0 |
| 0xB7F7A9 | Interne Fehler AUtomotive Coretest (Coretest, Register Bus exception, MPU violation) | 0 |
| 0xB7F7AA | Watchdog Fehler | 0 |
| 0xB7F7AB | Frontend Off (= Kombi ausgeschaltet) bei wiederholten Safety Errors derselben Sorte | 0 |
| 0xB7F7AC | Register Test Halo | 0 |
| 0xB7F7BE | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7BF | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C0 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C1 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C2 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C3 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C4 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C5 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C6 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C7 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C8 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7C9 | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7CA | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7CB | to be determined by HMI Framework and BMW | 0 |
| 0xB7F7D6 | Kombi: Safety Flex-ECC Parity Error | 0 |
| 0xE10601 | Ethernet: CRC Fehler | 1 |
| 0xE114BE | Schnittstelle EGS (Daten Anzeige Getriebestrang, 0x3FD); Signal ungültig | 1 |
| 0xE12C2D | Schnittstelle HU (Bedienung Bordcomputer, 0x2B8): Signal fehlerhaft | 1 |
| 0xE12C2E | Schnittstelle HU (Bedienung UhrzeitDatum 0x39E): Signal fehlerhaft | 1 |
| 0xE12C2F | Schnittstelle HU (Quittierung Anforderung Kombi, 0x172): Signal fehlerhaft | 1 |
| 0xE12C30 | Schnittstelle HU (Status Service Call TeleX, 0x30F): Signal fehlerhaft | 1 |
| 0xE12C31 | Schnittstelle HU (Termin Condition Based Service, 0x35A): Signal fehlerhaft | 1 |
| 0xE12C3C | Schnittstelle DME, DDE (Status Verbrauch Kraftstoff Motor, 0x2C4): Signal ungültig | 1 |
| 0xE12C46 | Schnittstelle SM_FA (Memoryverstellung, 0x20B): Signal ungültig | 1 |
| 0xE12C62 | Schnittstelle DME (Steuerung Shiftlights, 0x0DF): Signal ungültig | 1 |
| 0xE12C72 | Schnittstelle MOSTSIM (Bedienung Komfiguration Kombi 4, 0x41B): Signal ungültig | 1 |
| 0xE12C73 | Schnittstelle EntryNavEvo/NBTevo (Bedienung Individualisierung Koordinator Anzeige Fahrerlebnis, 0x370): Signal ungültig | 1 |
| 0xE12C74 | Schnittstelle MOSTSIM (Bedienung HUD 3, 0x321): Signal ungültig | 1 |
| 0xE12C89 | Schnittstelle LIM (Status Ladeschnittstelle, 0x3B4): Signal ungültig | 1 |
| 0xE12C94 | Schnittstelle EntryNavEvo/NBTevo (Bedienung Einheiten, 0x291): Signal ungültig | 1 |
| 0xE12C98 | CCM nicht aktiv codiert | 1 |
| 0xE12C9F | Schnittstelle ZGW (STG Domäne Fahrwerk , 0xB4): Signal ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0031 | PORT_00_CRC_ERROR_COUNT | 0-n | High | 0x0000000F | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0032 | PORT_01_CRC_ERROR_COUNT | 0-n | High | 0x000000F0 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0033 | PORT_02_CRC_ERROR_COUNT | 0-n | High | 0x00000F00 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0034 | PORT_03_CRC_ERROR_COUNT | 0-n | High | 0x0000F000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0035 | PORT_04_CRC_ERROR_COUNT | 0-n | High | 0x000F0000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0036 | PORT_05_CRC_ERROR_COUNT | 0-n | High | 0x00F00000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0037 | PORT_06_CRC_ERROR_COUNT | 0-n | High | 0x0F000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x0038 | PORT_07_CRC_ERROR_COUNT | 0-n | High | 0xF0000000 | PORT_CRC_ERROR_COUNT_4B_TAB | - | - | - |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x1754 | Sub-Tabelle | 0-n | - | 0xFFFFFFFF | - | - | - | - |
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

### LISTE_SERVICES

| WERT | TEXT |
| --- | --- |
| 0x00 | alles aus |
| 0xD7 | HU und Übergabe ein |
| 0xFD | AU ein |
| 0x7F | Einfahrkontrolle ein |
| 0xF7 | HU ein |
| 0xDF | Übergabe ein |
| 0xC3 | HU und Übergabe aus |
| 0xFC | AU aus |
| 0x3F | Einfahrkontrolle aus |
| 0xF3 | HU aus |
| 0xCF | Übergabe aus |
| 0x55 | alles ein |
| 0xFF | keine Änderung |

### LISTE_SERVICES_2

| WERT | TEXT |
| --- | --- |
| 0x00 | Alles aus |
| 0xFD | BSI ein |
| 0xFC | BSI aus |
| 0x55 | alles ein |
| 0xFF | keine Änderung |

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

### RES_0X104C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PHY_TEST_MODE | + | - | - | 0-n | high | unsigned char | - | ETH_PHY_TEST_MODE_STATE | - | - | - | Gibt an, ob das Schalten des PHY in den gewünschten Modus erfolgreich war. |

### RES_0X1802_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NUM_OF_PORTS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der physikalischen Ports.  |
| - | Bit | high | BITFIELD | - | BF_PHY_LINK_STATE_BTFLD | - | - | - | Linkstatus aller Port. |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X2520_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AIRBAG_GURTWARNUNG_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F1, F2 |
| STAT_OBD_ABS_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F3, F4_1 |
| STAT_ABWL_ABWL_US_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F4_2, F4_3 |
| STAT_DTC_MDM_DSC_ESC_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F5_1, F5_2 |
| STAT_EMF_US_EMF_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F6_1, F6_2 |
| STAT_AUTO_H_AFS_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F6_3, F8 |
| STAT_ACC_RDC_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F9, F10 |
| STAT_ABS_DSC_OFF_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F13, F14 |
| STAT_RBS_RBS_US_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F15, F16 |
| STAT_STA_LADE_KL_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F17, F18 |
| STAT_FAHRBEREIT_MOTOR_UEBERHITZT_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F19, F20 |
| STAT_LADEKABEL_SYSTEMFEHLER_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F21, F22 |
| STAT_ELEKTR_RESERVEWARN_AUSSENSOUND_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F23, F24 |
| STAT_TLC_WBK_SYMBOL | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | F25, F26 |
| STAT_RESERVE_1_TEXT | TEXT | high | string[5] | - | - | 1.0 | 1.0 | 0.0 | Reserve 1 |
| STAT_STANDLICHT_FERNLICHT | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | Standlicht, Fernlicht |
| STAT_NEBELSCHLUSSLEUCHTE_NEBELSCHEINWERFER | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | Nebelschlussleuchte, Nebelscheinwerfer |
| STAT_FERNLICHT_ASSISTENT | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | Fernlichtassistent |
| STAT_BLINKER_RECHTS_LINKS | 0-n | high | unsigned char | - | TAB_SCHRIFTZUG_SYMBOLFARBE | - | - | - | Blinker rechts, Blinker links |
| STAT_RESERVE_2_TEXT | TEXT | high | string[9] | - | - | 1.0 | 1.0 | 0.0 | Reserve 2 |

### RES_0X3006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANK_BLOCK_1_DATA | DATA | high | data[75] | - | - | 1.0 | 1.0 | 0.0 | Block 3006 Tank aus dem CAF lesen |
| STAT_TANK_VOLUMEN_WERT | l | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ausgabe des maximalen Tankvolumens |
| STAT_TANK_BLOCK_2_DATA | DATA | high | data[52] | - | - | 1.0 | 1.0 | 0.0 | Block 3006 Tank aus dem CAF lesen (Rest) |

### RES_0X4006_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RAM_DATEN_SCHREIBEN | - | - | + | 0-n | high | unsigned char | - | STATUS_RAM_DATEN_SCHREIBEN_TAB | - | - | - | Status RAM_DATEN_SCHREIBEN |

### RES_0X4010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TWSZ_WERT | km | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | Liefert den angezeigten TWSZ zurück |

### RES_0X4012_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBRAUCHSKORREKTURFAKTOR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Liefert den Verbrauchskorrekturfaktor zurück |

### RES_0X401D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NVM_ID_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | NVM-ID |
| STAT_NVM_ID_2_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | NVM-ID 2 |

### RES_0X4060_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_BACKLIGHT_SENSOR_ROH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Backlight-Sensor: ADC Raw value |
| STAT_TEMP_BACKLIGHT_SENSOR_PHYSICAL_WERT | °C | high | unsigned int | - | - | 1.0 | 10.0 | -100.0 | Backlight-Sensor: Physical value (n/10 - 100) °C |
| STAT_TEMP_PCB1_SENSOR_ROH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | PCB1-Sensor: ADC Raw value |
| STAT_TEMP_PCB1_SENSOR_PHYSICAL_WERT | °C | high | unsigned int | - | - | 1.0 | 10.0 | -100.0 | PCB1-Sensor: Physical value (n/10 - 100) °C |
| STAT_TEMP_PCB2_SENSOR_ROH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | PCB2-Sensor: ADC Raw value |
| STAT_TEMP_PCB2_SENSOR_PHYSICAL_WERT | °C | high | unsigned int | - | - | 1.0 | 10.0 | -100.0 | PCB2-Sensor: Physical value (n/10 - 100) °C |

### RES_0X4230_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUETZSTELLE1_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 1.Stuetzstelle |
| STAT_STUETZSTELLE2_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 2.Stuetzstelle |
| STAT_STUETZSTELLE3_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 3.Stuetzstelle |
| STAT_STUETZSTELLE4_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 4.Stuetzstelle |
| STAT_STUETZSTELLE5_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 5.Stuetzstelle |
| STAT_STUETZSTELLE6_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 6.Stuetzstelle |
| STAT_STUETZSTELLE7_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 7.Stuetzstelle |
| STAT_STUETZSTELLE8_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 8.Stuetzstelle |
| STAT_STUETZSTELLE9_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 9.Stuetzstelle |
| STAT_STUETZSTELLE10_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 10.Stuetzstelle |
| STAT_STUETZSTELLE11_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 11.Stuetzstelle |

### RES_0X4231_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STUETZSTELLE1_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 1.Stuetzstelle |
| STAT_STUETZSTELLE2_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 2.Stuetzstelle |
| STAT_STUETZSTELLE3_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 3.Stuetzstelle |
| STAT_STUETZSTELLE4_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 4.Stuetzstelle |
| STAT_STUETZSTELLE5_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 5.Stuetzstelle |
| STAT_STUETZSTELLE6_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 6.Stuetzstelle |
| STAT_STUETZSTELLE7_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 7.Stuetzstelle |
| STAT_STUETZSTELLE8_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 8.Stuetzstelle |
| STAT_STUETZSTELLE9_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 9.Stuetzstelle |
| STAT_STUETZSTELLE10_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 10.Stuetzstelle |
| STAT_STUETZSTELLE11_WERT | l/km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 11.Stuetzstelle |

### RES_0X4232_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LERNFAKTOR1_ECO_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Lernfaktor1 ECO |
| STAT_LERNFAKTOR2_ECO_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Lernfaktor2 ECO |
| STAT_LERNFAKTOR3_ECO_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Lernfaktor3 ECO |
| STAT_LERNFAKTOR4_ECO_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Lernfaktor4 ECO |
| STAT_LERNFAKTOR1_NORMAL_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Lernfaktor1 Normal |
| STAT_LERNFAKTOR2_NORMAL_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Lernfaktor2 Normal |
| STAT_LERNFAKTOR3_NORMAL_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Lernfaktor3 Normal |
| STAT_LERNFAKTOR4_NORMAL_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Lernfaktor4 Normal |

### RES_0X4233_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DELTA_RATIO_ECO_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Delta_ratio_ECO |
| STAT_VB_INTERPOLIERT_ECO_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Verbr_interpoliert_ECO |
| STAT_DELTA_RATIO_NORMAL_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Delta_ratio_NORMAL |
| STAT_VB_INTERPOLIERT_NORMAL_WERT | l/100km | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Verbr_interpoliert_NORMAL |

### RES_0X4234_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBR_CHARAK_WIRKUNG_VM_1_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_2_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_3_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_4_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_5_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_6_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_7_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_8_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_9_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_10_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |
| STAT_VERBR_CHARAK_WIRKUNG_VM_11_WERT | Wh/l | high | unsigned int | - | - | 1000.0 | 100.0 | 0.0 | in 0,01 [kwh/Liter] |

### RES_0X4235_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBRAUCHSWERT_1_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_2_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_3_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_4_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_5_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_6_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_7_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_8_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_9_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_10_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |
| STAT_VERBRAUCHSWERT_11_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Verbrauchswert |

### RES_0X4236_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LERNFAKTOR_VM_WERT | Wh/l | high | motorola double | - | - | 1000.0 | 100.0 | 0.0 | Lernfaktoren Wirkungsgrad VM in [0,01 kWh/Liter] |
| STAT_LERNFAKTOR_EV_WERT | - | high | motorola double | - | - | 1.0 | 100.0 | 0.0 | Lernfaktoren Wirkungsgrad VM in [0,01 kWh/Liter] |

### RES_0X4237_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DELTA_RATIO_ETA_VM_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Delta_Ratio_Eta_VM |
| STAT_ETA_INTERPOLIERT_VM_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eta_interpoliert_VM |
| STAT_DELTA_RATIO_ETA_EV_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Delta_Ratio_Eta_EV |
| STAT_ETA_INTERPOLIERT_EV_WERT | - | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eta_interpoliert_EV |

### RES_0X4400_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAUPTINDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bei größeren Änderungen soll der HI geändert werden |
| STAT_UNTERINDEX_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bei kleineren Änderungen soll der Unterindex geändert werden |

### RES_0X4800_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUD_OPERATION_HOURS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_OPERATION_MINUTES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_LED_OPERATION_HOURS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_LED_OPERATION_MINUTES_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_LED_REPEAT_TIME_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_TEMP_THRESHOLD_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_TEMP_THRESHOLD_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_TEMP_THRESHOLD_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_TEMP_THRESHOLD_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_TEMP1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_TEMP2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_TEMP3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_TEMP4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_TEMP5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_LOGTIME_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_DIM_THRESHOLD_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_DIM_THRESHOLD_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_DIM_THRESHOLD_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_DIM_THRESHOLD_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_1_DIM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_1_DIM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_1_DIM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_1_DIM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_1_DIM5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_2_DIM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_2_DIM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_2_DIM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_2_DIM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_2_DIM5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_3_DIM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_3_DIM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_3_DIM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_3_DIM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_3_DIM5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_4_DIM1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_4_DIM2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_4_DIM3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_4_DIM4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ZONE_4_DIM5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_HEIGHT_ADJUSTMENT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ROTATION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ACTIVATION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - |
| STAT_HUD_ENVIRONMENTAL_COND_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - |

### RES_0X4808_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Bildposition in Mikroschritten |

### RES_0X5000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FUBI_01_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_01_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_02_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_02_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_03_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_03_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_04_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_04_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_05_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_05_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_06_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_06_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_07_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_07_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_07_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_07_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_08_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_08_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_09_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_09_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_09_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_09_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_10_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_11_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_12_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_13_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_14_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_15_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_16_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_17_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_18_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_19_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_20_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_21_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_22_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_23_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_24_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_25_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_26_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_27_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_27_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_27_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_27_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_28_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_28_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_28_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_28_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_29_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_29_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_29_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_29_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_30_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_30_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_31_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_31_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_31_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_31_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_32_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_32_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_32_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_32_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_33_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_33_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_33_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_33_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_34_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_34_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_34_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_34_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_35_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_35_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_35_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_35_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_36_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_36_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_36_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_36_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_37_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_37_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_37_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_37_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_38_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_38_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_38_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_38_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_39_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_39_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_39_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_39_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |
| STAT_FUBI_40_ID | 0-n | high | unsigned char | - | TAB_FUBI_ID | - | - | - | Werte |
| STAT_FUBI_SW_HV_40_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Haupt-Version  ID |
| STAT_FUBI_SW_UV_40_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Unter-Version  ID |
| STAT_FUBI_SW_PV_40_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SW Patch-Version  ID |

### RES_0XA103_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSTELLGRENZE_EIN | + | - | - | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00 = Verstellgrenze nicht erreicht 0x01 = Verstellgrenze erreicht |

### RES_0XA106_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARPING_NR | + | - | - | 0-n | - | unsigned char | - | TAB_WARPING_KENNLINIEN | 1.0 | 1.0 | 0.0 | Status der gewählten Kennlinie. 0x00=Liste gewählt 0xFE=Liste konnte nicht verwendet werden |

### RES_0XD08D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KEY | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Arguments KEY |
| STAT_POSITION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Arguments Position |

### RES_0XD08E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KEY | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Arguments KEY |
| STAT_POSITION_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Arguments Position |

### RES_0XD10A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KM_LEISTUNG_WERT | km | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angenommene, durchschnittliche Jahreskilometerleistung für die CBS-Berechnungen (in 1000 km pro Jahr). |

### RES_0XD10D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABSOLUT_GWSZ_RAM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert den absoluten Gesamtwegstreckenzähler aus dem RAM. |
| STAT_ABSOLUT_GWSZ_EEP_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert den absoluten Gesamtwegstreckenzähler aus dem EEPROM. |

### RES_0XD111_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELECTRIC_RANGE_CURRENT_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | STAT_ELECTRIC_RANGE_CURRENT [0,1 km] |
| STAT_ELECTRIC_RANGE_MAXIMUM_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | STAT_ELECTRIC_RANGE_MAXIMUM (actual  maximum, depends on battery deterioration  etc.)  [0,1 km] |
| STAT_FUEL_RANGE_CURRENT_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | STAT_FUEL_RANGE_CURRENT [0,1 km]  (0xFFFF if no REX is available) |
| STAT_FUEL_RANGE_MAXIMUM_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | STAT_FUEL_RANGE_MAXIMUM (actual  maximum, depends on average consumption etc.)  [0,1 km] (0xFFFF if no REX is available) |
| STAT_RANGE_CONSUMPTION_ELECTRIC_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | STAT_RANGE_CONSUMPTION_ELECTRIC [kWh/100km], (only for vehicles without STARTWETESPEICHER, 0xFFFF if not used) |
| STAT_NEBENVERBRAUCHERLEISTUNG_WERT | kW | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | STAT_NEBENVERBRAUCHERLEISTUNG_WERT  [0,01 kW], (only for vehicles without STARTWERTESPEICHER, 0xFFFF if not used) |

### RES_0XD112_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_A_TEMP_ANZEIGE_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Anzeigewert Außentemperatur |
| STAT_A_TEMP_ROHWERT_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Rohwert Außentemperatur |

### RES_0XD113_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMBI_STUNDE_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktuellen Stunde. |
| STAT_KOMBI_MINUTE_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktuellen Minute. |
| STAT_KOMBI_SEKUNDE_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktuellen Sekunde. |
| STAT_KOMBI_TAG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Tag. |
| STAT_KOMBI_MONAT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Monat. |
| STAT_KOMBI_JAHR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Jahr. |
| STAT_KOMBI_ZEIT_FORMAT | 0-n | - | unsigned char | - | TAB_KOMBI_FORMAT_UHRZEIT | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Anzeigeformat. |

### RES_0XD115_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_ACC_WERT | km/h | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | gesetzte Geschwindigkeit fuer ACC-Zeiger in km/h |

### RES_0XD117_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERT | 1/min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | vorgegebene Drehzahlmesserstellung in 1/min |

### RES_0XD11A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESCHWINDIGKEIT_WERT | km/h | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | gesetzte Geschwindigkeit in km/h |

### RES_0XD11E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKINHALT_WERT | % | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | vorgegebener Tankinhalt in % |

### RES_0XD11F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANKKAMMER_RECHTS_WERT | l | - | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Inhalt rechte Tankkammer in Liter |
| STAT_TANKKAMMER_LINKS_WERT | l | - | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Inhalt linke Tankkammer in Liter |
| STAT_SUMMENWERT_WERT | l | - | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Ungedämpfte Summe der Literwerte der Tank-Hebelgeber rechts und links in Liter |
| STAT_GEDAEMPFT_ANZ_WERT | l | - | unsigned int | - | - | 1.0 | 128.0 | 0.0 | Zahlenwert gedämpfter Summenwert aus Hebelgeber links und rechts in Liter |
| STAT_TANKPHASE | 0-n | - | unsigned char | - | TAB_KOMBI_TANKPHASE | 1.0 | 1.0 | 0.0 | Tankphase:  1= i.O;  2= mind. 1 Hebelgeber n.i.O.; 3= wie 2 und zusaetzlich kein Verbrauchssignal |

### RES_0XD120_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_CBS_AKTIVIERUNG | - | - | - | CBS Aktivierung |
| - | Bit | high | BITFIELD | - | BF_CBS_AKTIVIERUNG_2 | - | - | - | CBS Aktivierung |
| STAT_RESERVE2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reservebyte |
| STAT_RESERVE3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reservebyte |

### RES_0XD121_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_T1_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T1_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T1_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T1_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T1_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T1_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T2_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T2_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T2_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T2_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T2_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T2_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T3_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T3_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T3_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T3_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T3_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T3_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T4_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T4_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T4_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T4_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T4_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T4_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T5_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T5_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T5_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T5_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T5_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T5_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T6_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T6_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T6_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T6_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T6_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T6_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |
| STAT_T7_ID_FUNKTION_BEDIENUNG_TIMER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ID_Funktion_Bedienung_Timer (ID_FN_OP_TIM) Information über EventID (Standheizen, Standlüften oder Standheizen/-lüften) |
| STAT_T7_ID_BEDIENUNG_TIMER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | ID_Bedienung_Timer (ID_OP_TIM) Nummer des gerade verstellten Timers (1 oder 2) |
| STAT_T7_BEDIENUNG_TIMER_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Stunde (OP_TIM_HR) |
| STAT_T7_BEDIENUNG_TIMER_MINUTEN_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Minute (OP_TIM_MN) |
| STAT_T7_BEDIENUNG_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer (OP_TIM) ==> Byte 5 (Bit 0,1) Laden_Abfahrt_Zeit_Auswahl (CHGNG_DPRT_T_SLCTN) ==> Byte 5 (Bit 2,3) Klima_Abfahrt_Zeit_Auswahl (AIC_DPRT_T_SLCTN) ==> Byte 5 (Bit 4,5) Status_Timer_Variante (ST_TIM_VAR) ==> Byte 6 (Bit 0,1, 2) |
| STAT_T7_BEDIENUNG_AUSWAHL_WOCHENTAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Bedienung_Timer_Auswahl_Wochentag (OP_TIM_SLCTN_WDAY) |

### RES_0XD125_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWIGER_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Ewiger Durchschnittsverbrauch in 0,01 [L/100km] |
| STAT_10000KM_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 10.000 km Durchschnittsverbrauch in 0,01 [L/100km] |
| STAT_33KM_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 33 km Durchschnittsverbrauch in 0,01 [L/100km] |

### RES_0XD126_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BC_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Bordcomputer Durchschnittsverbrauch in 0,01 [l/100km] |
| STAT_BC_DSG_L_KM_WERT | km/h | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Bordcomputer Durchschnittsgeschwindigkeit in 0,01 [km/h] |
| STAT_BC_MVERB_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Bordcomputer Momentanverbrauch in 0,01 [l/100km] |
| STAT_BC_RW_L_KM_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Bordcomputer Reichweite in 0,1 [km] |

### RES_0XD127_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RBC_DSV_L_KM_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Reisebordcomputer Durchschnittsverbrauch in 0,01 [l/100km] |
| STAT_RBC_DSG_L_KM_WERT | km/h | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Reisebordcomputer Durchschnittsgeschwindigkeit in 0,01 [km/h] |
| STAT_RBC_ABFAHRT_L_KM_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Abfahrtszeit in [hh,mm] |
| STAT_RBC_DAUER_L_KM_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Dauer in [hh,mm] |
| STAT_RBC_STRECKE_L_KM_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Strecke in 1 [km] |

### RES_0XD128_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EWIGER_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Ewiger Durchschnittsverbrauch in 0,1 [kWh/100km] |
| STAT_10000KM_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 10.000 km Durchschnittsverbrauch in 0,1 [kWh/100km] |
| STAT_33KM_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | 33 km Durchschnittsverbrauch in 0,1 [kWh/100km] |

### RES_0XD129_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BC_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Bordcomputer Durchschnittsverbrauch in 0,1 [KWh/100km] |
| STAT_BC_DSG_KWH_KM_WERT | km/h | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Bordcomputer Durchschnittsgeschwindigkeit in 0,01 [km/h] |
| STAT_BC_MVERB_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Bordcomputer Momentanverbrauch in 0,1 [KWh/100km] |
| STAT_BC_RW_KWH_KM_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Bordcomputer Reichweite in 0,1 [km] |

### RES_0XD12A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RBC_DSV_KWH_KM_WERT | kWh/100km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Reisebordcomputer Durchschnittsverbrauch in 0,1 [KWh/100km] |
| STAT_RBC_DSG_KWH_KM_WERT | km/h | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Reisebordcomputer Durchschnittsgeschwindigkeit in 0,01 [km/h] |
| STAT_RBC_ABFAHRT_KWH_KM_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Abfahrtszeit in [hh,mm] |
| STAT_RBC_DAUER_KWH_KM_TEXT | TEXT | high | string[2] | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Dauer in [hh,mm] |
| STAT_RBC_STRECKE_KWH_KM_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reisebordcomputer Strecke in 1 [km] |

### RES_0XD12C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SEKUNDENZAEHLER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Sekundenzähler [1 Sekunde] |
| STAT_GWSZ_TEXT | TEXT | high | string[3] | - | - | 1.0 | 1.0 | 0.0 | GWSZ [1 km] |
| STAT_TAG_WERT | d | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Datum (Tag) zum Zeitpunkt der CC-Abfrage |
| STAT_MONAT_WERT | mth | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Datum (Monat) zum Zeitpunkt der CC-Abfrage |
| STAT_JAHR_WERT | y | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Datum (Jahr) zum Zeitpunkt der CC-Abfrage, wobei hier das Offset auf das Jahr 2000 ausgegeben wird |

### RES_0XD12D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CC_ID_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_1_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 1 in km |
| STAT_SEKUNDENZAEHLER_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 1 |
| STAT_HAEUFIGKEIT_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 1 |
| STAT_CC_ID_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_2_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 2 in km |
| STAT_SEKUNDENZAEHLER_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 2 |
| STAT_HAEUFIGKEIT_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 2 |
| STAT_CC_ID_3_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_3_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 3 in km |
| STAT_SEKUNDENZAEHLER_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 3 |
| STAT_HAEUFIGKEIT_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 3 |
| STAT_CC_ID_4_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_4_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 4 in km |
| STAT_SEKUNDENZAEHLER_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 4 |
| STAT_HAEUFIGKEIT_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 4 |
| STAT_CC_ID_5_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_5_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 5 in km |
| STAT_SEKUNDENZAEHLER_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 5 |
| STAT_HAEUFIGKEIT_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 5 |
| STAT_CC_ID_6_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_6_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 6 in km |
| STAT_SEKUNDENZAEHLER_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 6 |
| STAT_HAEUFIGKEIT_6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 6 |
| STAT_CC_ID_7_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_7_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 7 in km |
| STAT_SEKUNDENZAEHLER_7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 7 |
| STAT_HAEUFIGKEIT_7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 7 |
| STAT_CC_ID_8_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_8_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 8 in km |
| STAT_SEKUNDENZAEHLER_8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 8 |
| STAT_HAEUFIGKEIT_8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 8 |
| STAT_CC_ID_9_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_9_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 9 in km |
| STAT_SEKUNDENZAEHLER_9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 9 |
| STAT_HAEUFIGKEIT_9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 9 |
| STAT_CC_ID_10_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_10_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 10 in km |
| STAT_SEKUNDENZAEHLER_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 10 |
| STAT_HAEUFIGKEIT_10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 10 |
| STAT_CC_ID_11_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_11_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 11 in km |
| STAT_SEKUNDENZAEHLER_11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 11 |
| STAT_HAEUFIGKEIT_11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 11 |
| STAT_CC_ID_12_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_12_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 12 in km |
| STAT_SEKUNDENZAEHLER_12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 12 |
| STAT_HAEUFIGKEIT_12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 12 |
| STAT_CC_ID_13_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_13_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 13 in km |
| STAT_SEKUNDENZAEHLER_13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 13 |
| STAT_HAEUFIGKEIT_13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 13 |
| STAT_CC_ID_14_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_14_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 14 in km |
| STAT_SEKUNDENZAEHLER_14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 14 |
| STAT_HAEUFIGKEIT_14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 14 |
| STAT_CC_ID_15_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_15_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 15 in km |
| STAT_SEKUNDENZAEHLER_15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 15 |
| STAT_HAEUFIGKEIT_15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 15 |
| STAT_CC_ID_16_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_16_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 16 in km |
| STAT_SEKUNDENZAEHLER_16_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 16 |
| STAT_HAEUFIGKEIT_16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 16 |
| STAT_CC_ID_17_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_17_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 17 in km |
| STAT_SEKUNDENZAEHLER_17_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 17 |
| STAT_HAEUFIGKEIT_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 17 |
| STAT_CC_ID_18_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_18_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 18 in km |
| STAT_SEKUNDENZAEHLER_18_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 18 |
| STAT_HAEUFIGKEIT_18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 18 |
| STAT_CC_ID_19_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_19_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 19 in km |
| STAT_SEKUNDENZAEHLER_19_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 19 |
| STAT_HAEUFIGKEIT_19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 19 |
| STAT_CC_ID_20_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_20_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 20 in km |
| STAT_SEKUNDENZAEHLER_20_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 20 |
| STAT_HAEUFIGKEIT_20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 20 |
| STAT_CC_ID_21_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_21_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 21 in km |
| STAT_SEKUNDENZAEHLER_21_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 21 |
| STAT_HAEUFIGKEIT_21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 21 |
| STAT_CC_ID_22_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_22_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 22 in km |
| STAT_SEKUNDENZAEHLER_22_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 22 |
| STAT_HAEUFIGKEIT_22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 22 |
| STAT_CC_ID_23_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_23_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 23 in km |
| STAT_SEKUNDENZAEHLER_23_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 23 |
| STAT_HAEUFIGKEIT_23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 23 |
| STAT_CC_ID_24_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_24_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 24 in km |
| STAT_SEKUNDENZAEHLER_24_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 24 |
| STAT_HAEUFIGKEIT_24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 24 |
| STAT_CC_ID_25_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Enthält die ID der zurückgemeldeten CC Meldung |
| STAT_GWSZ_25_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Enthält den Gesamtwegstreckenzähler, zum Zeitpunkt des Abspeicherns der CC Meldung 25 in km |
| STAT_SEKUNDENZAEHLER_25_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Enthält die Relativzeit zum Zeitpunkt des Abspeicherns der CC ID 25 |
| STAT_HAEUFIGKEIT_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Enthält die Häufigkeit des Auftrettens des CCM 25 |

### RES_0XD12F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLOCK_01_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_01_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_01_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_01_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_01_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_01_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_01_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_01_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_01_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_01_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_01_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_01_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_01_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_01_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_01_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_01_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_02_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_02_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_02_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_02_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_02_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_02_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_02_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_02_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_02_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_02_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_02_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_02_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_02_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_02_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_02_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_02_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_03_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_03_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_03_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_03_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_03_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_03_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_03_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_03_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_03_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_03_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_03_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_03_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_03_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_03_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_03_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_03_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_04_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_04_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_04_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_04_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_04_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_04_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_04_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_04_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_04_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_04_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_04_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_04_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_04_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_04_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_04_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_04_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_05_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_05_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_05_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_05_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_05_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_05_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_05_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_05_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_05_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_05_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_05_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_05_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_05_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_05_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_05_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_05_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_06_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_06_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_06_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_06_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_06_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_06_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_06_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_06_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_06_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_06_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_06_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_06_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_06_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_06_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_06_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_06_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_07_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_07_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_07_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_07_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_07_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_07_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_07_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_07_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_07_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_07_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_07_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_07_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_07_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_07_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_07_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_07_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_08_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_08_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_08_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_08_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_08_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_08_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_08_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_08_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_08_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_08_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_08_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_08_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_08_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_08_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_08_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_08_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_09_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_09_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_09_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_09_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_09_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_09_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_09_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_09_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_09_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_09_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_09_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_09_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_09_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_09_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_09_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_09_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |
| STAT_BLOCK_10_SEGMENT_ID_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Segment ID |
| STAT_BLOCK_10_TAG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Tag |
| STAT_BLOCK_10_MONAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Monat |
| STAT_BLOCK_10_JAHR_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 2000.0 | Jahr |
| STAT_BLOCK_10_STUNDE_WERT | h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Stunde |
| STAT_BLOCK_10_MINUTE_WERT | min | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Minute |
| STAT_BLOCK_10_MILE_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Mile |
| STAT_BLOCK_10_A_TEMP_WERT | °C | high | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatur [-40 bis +50°C] |
| STAT_BLOCK_10_AKT_DAUER_ECO_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO [0-100%] |
| STAT_BLOCK_10_AKT_DAUER_ECOPLUS_SPORT_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Akt.-Dauer ECO+  oder Sport [0-100%] |
| STAT_BLOCK_10_SOC_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | SOC [0-100%] in 0,5 % Schritten |
| STAT_BLOCK_10_VERBRAUCH_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Elektrischer Verbrauch absolut und komfort |
| STAT_BLOCK_10_REKUPERATION_WERT | kWh | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rekuperation [0-255 kWh] |
| STAT_BLOCK_10_EFAHREN_VS_VERBRENNER_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Anteil E-Fahren vs. Verbrenner [0-100%] |
| STAT_BLOCK_10_VERBRAUCHTER_KRAFTSTOFF_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Verbrauchter Kraftstoff [0-102,2 L] |
| - | Bit | high | BITFIELD | - | BF_BLOCK_10_STERNE | - | - | - | Bitfield 1: Sterne für Beschleunigung, Sterne für Bremsen |

### RES_0XD1D0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PRW_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Potentielle Reichweite (PRW) |
| STAT_CRW_WERT | km | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Comfort- Mode Reichweite (CRW) |
| STAT_BCRW_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | BC- Reichweite in 0,1 km |
| STAT_GRW_WERT | km | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | Gewonnene Reichweite (GRW) |
| STAT_GK_WERT | µl | high | unsigned long | - | - | 1.0 | 10.0 | 0.0 | gewonnener Kraftstoff (GK) |

### RES_0XD1D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKKUM_ABS_VERBR_ERH_WERT | µl | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | akkumulierte absolute Verbrauchserhöhung |
| STAT_VERBR_ERH_VERZOEGERUNG_WERT | µl | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verbrauchserhöhung durch Verzögerung |
| STAT_VERBR_ERH_MSA_WERT | µl | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Verbrauchserhöhung durch MSA |
| STAT_V_REF_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | V ref |
| STAT_V_IST_WERT | km/h | high | unsigned int | - | - | 1.0 | 10.0 | 0.0 | V ist |
| STAT_FWP_AKT_WERT | % | high | unsigned int | - | - | 1.0 | 40.0 | 0.0 | FWP akt |
| - | Bit | high | BITFIELD | - | BF_BLS_VERZOEGERUNG | - | - | - | Status_BLS / Verzögerung |

### RES_0XD1D2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PI_PROZ_VERBR_ERH_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI prozentuale Verbrauchserhöhung |
| STAT_PI_VERBR_ERH_GW_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Gangwahl |
| STAT_PI_VERBR_ERH_GESCHW_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Geschwindigkeit |
| STAT_PI_VERBR_ERH_BESCHL_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Beschleunigung |
| STAT_PI_VERBR_ERH_KOMF_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PI Verbrauchserhöhung durch Komfort |

### RES_0XD1D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MV_AKT_WERT | l/100km | high | unsigned long | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch aktuell |
| STAT_MV_REF_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref (V ist) |
| STAT_MV_REF_30_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref 30 |
| STAT_MV_REF_70_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref 70 |
| STAT_MV_REF_100_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref 100 |
| STAT_MV_REF_MAX_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref Max |
| STAT_MV_REF_GESAMT_WERT | l/100km | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Mehrverbrauch Ref Gesamt |

### RES_0XD1D4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | Bit | high | BITFIELD | - | BF_ECO_MODE_AUSTRITT | - | - | - | ECO- Mode Austritt |
| STAT_ECO_TIPP_ANZ | 0-n | high | unsigned char | - | TAB_ECO_TIPP_ANZ | - | - | - | ECO Tipp Anzeige |

### RES_0XD1DB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WERT | % | high | unsigned int | - | - | 0.5 | 1.0 | 0.0 | Motortemperatur in %: 0% = Kalt, 100% = Heiß |

### RES_0XDA0C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PORT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Angabe des ausgewählten Port. |

### RES_0XDA43_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUD_AD_TEMP_BL_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur LED |
| STAT_HUD_AD_KL30_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Spannung Klemme 30 |
| STAT_HUD_LED_DRV_CUR_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED Strom |
| STAT_HUD_LED_DRV_SPG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | LED Spannung |
| STAT_HUD_LED_DRV_FET1_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FET Spannung Kette 1 |
| STAT_HUD_LED_DRV_FET2_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | FET Spannung Kette 2 |
| STAT_HUD_LED_DRV_OV_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Überspannung |
| STAT_HUD_LED_DRV_FAULT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fehler LED Treiber |
| STAT_HUD_LED_PWM_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM |
| STAT_HUD_LED_PWM_INV_WERT | % | high | unsigned int | - | - | 1.0 | 100.0 | 0.0 | PWM invertiert |
| STAT_HUD_SMC_FLAGS_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SMC Status Flags |
| STAT_RESERVE1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve 1 |
| STAT_RESERVE2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve 2 |
| STAT_RESERVE3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve 3 |
| STAT_RESERVE4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve 4 |

### RES_0XDA44_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SW_VERSION_MAIN_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer der HUD SW im Kombi (Main) |
| STAT_SW_VERSION_MINOR_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer der HUD SW im Kombi (Minor) |
| STAT_SW_VERSION_PATCH_WERT | HEX | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer der HUD SW im Kombi (Patch) |

### RES_0XDA46_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_VERBAUORT_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verbauort |
| STAT_SENSOR_BMW_TEILE_NR_WERT | HEX | high | unsigned long | - | - | - | - | - | BMW Sachnummer |
| STAT_SENSOR_HERSTELLER_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Herstellernummer |
| STAT_SENSOR_SERIEN_NR_WERT | HEX | high | unsigned long | - | - | - | - | - | Seriennummer |
| STAT_SENSOR_PROD_DATUM_YEAR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsdatum Jahr |
| STAT_SENSOR_PROD_DATUM_MONTH_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsdatum Monat |
| STAT_SENSOR_PROD_DATUM_DAY_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Produktionsdatum Tag |
| STAT_SENSOR_HW_VERSION_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | HW Versionsnummer |
| STAT_SENSOR_OPTIK_VERSION_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Optikversionsnummer |
| STAT_SENSOR_MECHANIK_VERSION_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mechanikversionsnummer |
| STAT_SENSOR_FLASH_VERSION_NR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Flashversionsnummer |

### RES_0XF120_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERFACE | + | - | - | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0x00 = IKE; 0x01 = HUD |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SELBSTTEST | 0x0F04 | - | Selbsttest | - | - | - | - | - | - | - | - | - | 31 | - | - |
| START_SYSTIME | 0x1005 | - | Start des Systemzeitzaehlers Muss nur vom Kombi umgesetzt werden! | - | - | - | - | - | - | - | - | - | 31 | - | - |
| ETH_PHY_SWITCH_ENGINE_RESET | 0x1044 | - | Wird verwendet, um einen PHY oder Switch/es zurückzusetzen und optional im Zustand Reset zu halten. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x1044_R |
| ETH_CABLE_DIAG | 0x1046 | - | Startet die Kabeldiagnose des PHYs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1046_R | RES_0x1046_R |
| ETH_PHY_IDENTIFIER | 0x1047 | - | Gibt den eindeutigen PHY-Identifier zurück. Dieser wird durch den 24 Bit langen Organizationally Unique Identifier (OUI), die 6 Bit lange Manufacturer's Model Number sowie die 4 Bit lange Revision Number gebildet. Die Werte sind standardisiert und stets in Register 2 und 3 des PHYs enthalten. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1047_R | RES_0x1047_R |
| ETH_PHY_LOOPBACK_TEST | 0x1048 | - | Versetzt den gegebenen PHY in den Loopback-Modus und überprüft die Sendefähigkeit des PHYs. Der Test kann im internen und externen Loopback-Modus ausgeführt werden. Im internen Loopback wird nur die digitale Empfangs- und Sendelogik des PHYs überprüft. Im externen Loopback-Modus wird auch der analoge Transceiver Anteil getestet.  D. h. der externe Looback-Test sichert alle Komponenten bis zur Filterbeschaltung (exklusiv) ab.  Für den internen Test gelten keine besonderen Voraussetzungen. Für den externen Test muss der PHY  - als Master konfiguriert sein - sowie entweder terminiert (A) - oder mit einem Ziel-PHY verbunden sein (B).  Für B muss sichergestelt sein, dass der PHY auf Gegenseit deaktiviert bzw. in Reset gehalten wird. Sendet der PHY auf der Gegenseite einen Link-Pulse aus, kann der Test nicht durchgeführt werden, da der zu testende PHY keinen (internen) Link aufbauen kann. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1048_R | RES_0x1048_R |
| ETH_ENABLE_TEST_MODE | 0x104C | - | Schaltet den PHY in den Testmode | - | - | - | - | - | - | - | - | - | 31 | ARG_0x104C_R | RES_0x104C_R |
| SYSTEMZEIT | 0x1701 | STAT_SYSTEMZEIT_WERT | Systemzeit | s | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VERSORGUNGSSPANNUNG | 0x170C | STAT_VERSORGUNGSSPANNUNG_WERT | Versorgungsspannung am Steuergerät | mV | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_SYSTIME | 0x1725 | STAT_SEKUNDEN_SEIT_INIT_WERT | Systemzeit | s | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_GET_NUMBER_OF_PORTS | 0x1800 | STAT_NUM_PORTS_WERT | Anzahl der Ports | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ETH_PHY_LINK_STATE | 0x1802 | - | Gibt den aktuellen Link-Status aller physikalisch vorhandenen Ports zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x1802_D |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| STATUS_KONTROLLLEUCHTEN | 0x2520 | - | Gibt den Status der Kontrollleuchten-Ansteuerung zurück | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2520_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| UTC_OUT | 0x2551 | - | Weltzeit UTC oder Ortszeit des Werks, wie sie vom UTC-Client im Zentralsteuergerät fortgeschrieben wird. Einmalig im Werk soll der DID mit Service 0x2E zum Schreiben benutzt werden können, danach überwiegend mit Service 0x22 zum Auslesen von UTC als Zeitstempel oder um in PDM-Results für TeleX integriert zu werden. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x2551_D | - |
| RAM_DATEN_SCHREIBEN | 0x4006 | - | Dient dazu während der Inbetriebnahme angelernte applikative Daten in den nichtflüchtigen Speicher zu sichern. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0x4006_R |
| KOMBI_TESTBITMAP_HUD | 0xA102 | - | Testbitmap im Kombi oder Headup-Display darstellen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA102_R | - |
| STEUERN_WARPING | 0xA103 | - | Einstellung der Bildverzerrung am HUD. Referenzpunkt der Veränderung ist immer die linke obere Ecke. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA103_R | RES_0xA103_R |
| SELBSTTEST_HUD | 0xA104 | - | Starten und stoppen des Funktionstests des HUD. Funktionen Höhenverstellung, Bildrotation und Hinterleuchtung mit stufenweisem Absenken werden angesteuert. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| KOMBI_BLINKER | 0xA105 | - | Blinker ansteuern, für Service-und Testzwecke. Es müssen immer beide Argumente übergeben werden. Nach Aufruf dieses Jobs kann der Vorgabemodus durch 0x00 beendet werden. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA105_R | - |
| KOMBI_HUD_WARPLISTE | 0xA106 | - | Der Job wählt eine der 3 Warpingkennlinien für HUD aus. Über den Parameter wird die Kennlinie ausgewählt. Es sind drei Kennlinien möglich: 1. CAF - Codierdaten 2. Werksmesstechnik - Mit einer Kamera vermessene Kennlinie 3. Service - im Service nachjustierte Kennlinie  Diese Kennlinien werden benötigt, um die Scheibenkrümmung im HUD auszugleichen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA106_R | RES_0xA106_R |
| STEUERN_HUD_BILDPOSITION_RELATIV | 0xA107 | - | Routine zum Steuern der Bildposition (Höhe) relativ zur aktuellen Position. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA107_R | - |
| HUD_SHOWMODE | 0xAA00 | - | startet HUD Anzeigesequenz | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA00_R | - |
| HUD_LOGBUCH_RESET | 0xAA01 | - | Logbuchdaten auf 0 zurücksetzen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| HUD_BILDHOEHE | 0xD08D | - | Steuerung Bildhöhe | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD08D_D | RES_0xD08D_D |
| HUD_BILDROTATION | 0xD08E | - | Steuerung Bildrotation | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD08E_D | RES_0xD08E_D |
| HUD_AKTIVIERUNG | 0xD090 | - | HUD ein oder ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD090_D | - |
| DREHZAHL_WERT | 0xD106 | STAT_DREHZAHL_WERT | Ausgabe der im Kombi angezeigten Motordrehzahl in 1/min. | 1/min | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TACHO_WERT | 0xD107 | STAT_GESCHWINDIGKEIT_WERT | Effektiver Geschwindigkeitswert Veff ohne Kombitoleranz. | km/h | GESCHWINDIGKEIT | - | unsigned int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| CBS_KM_PRO_JAHR | 0xD10A | - | Angenommene, durchschnittliche Jahreskilometerleistung für die CBS-Berechnungen (in 1000 km pro Jahr). | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD10A_D | RES_0xD10A_D |
| GWSZ_ABSOLUT_WERT | 0xD10D | - | Aboluter Gesamtwegstreckenzähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD10D_D |
| LSS_TASTE | 0xD10E | STAT_KOMBI_LSS_TASTE_GEDRUECKT | Ausgabe des Status des Lenkstockschalters und der Kombitaste: Status der Taste im Kombi. | 0-n | - | - | unsigned char | TAB_KOMBI_LSS | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMBI_REICHWEITE_BEV_PHEV | 0xD111 | - | Reichweitenanzeige aus Kombiinstrument | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD111_D |
| A_TEMP_WERT | 0xD112 | - | Liefert die Außentemperatur in Grad Celsius. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD112_D |
| KOMBI_UHRZEIT_DATUM | 0xD113 | - | Aufruf liefert die Uhrzeit und das Datum zurück. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD113_D |
| GWSZ_RESET | 0xD114 | STAT_GWSZ_OFFSET_WERT | Rueckgabe des Anzeigeoffset des GWSZ. | km | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMBI_ACC_ZEIGER | 0xD115 | - | ACC-Zeiger in km/h. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD115_D | RES_0xD115_D |
| KOMBI_DREHZAHL | 0xD117 | - | Vorgabe der Drehzahl für Drehzahlmesser-Zeiger in U/min, oder Ausschalten des Vorgabemodus. Der Service ist nur erlaubt in Extended (Diagnose) Session. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD117_D | RES_0xD117_D |
| KOMBI_TACHO | 0xD11A | - | Die Funktion setzt den Tacho auf eine beliebige Geschwindigkeit. Eingabe in km/h. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD11A_D | RES_0xD11A_D |
| KOMBI_LEUCHTEN | 0xD11B | - | Leuchten im Kombi ansteuern. Für Service- und Testzwecke | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD11B_D | - |
| KOMBI_TANKANZEIGE | 0xD11E | - | Vorgabe des Tankinhalt. Eingabe in %. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD11E_D | RES_0xD11E_D |
| TANKINHALT | 0xD11F | - | Rückgabe der Literwerte der Tank-Hebelgeber 1 und 2, Summenwert ungedämpft und gedämpft sowie Tankphase. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD11F_D |
| CBS_SERVICE_AKTIVIERUNG | 0xD120 | - | CBS Aktivierung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD120_D | RES_0xD120_D |
| TIMER_KLIMATISIERUNG | 0xD121 | - | Eingestellter Timer für Klimatisierung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD121_D |
| GWSZ_ANZEIGE_WERT | 0xD122 | STAT_GWSZ_ANZEIGE_WERT | Aufruf liefert den angezeigten Gesamtwegstreckenzähler | km | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KOMBI_BC_DSV_L_KM | 0xD125 | - | Durchschnittsverbräuche | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD125_D | RES_0xD125_D |
| KOMBI_BC_BCW_L_KM | 0xD126 | - | Bordcomputerwerte lesen (schreiben nicht möglich) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD126_D |
| KOMBI_BC_RBC_L_KM | 0xD127 | - | Reise-Bordcomputerwerte lesen (schreiben nicht möglich) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD127_D |
| KOMBI_BC_DSV_KWH_KM | 0xD128 | - | Durchschnittsverbräuche | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD128_D | RES_0xD128_D |
| KOMBI_BC_BCW_KWH_KM | 0xD129 | - | Bordcomputerwerte lesen (schreiben nicht möglich) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD129_D |
| KOMBI_BC_RBC_KWH_KM | 0xD12A | - | Reise-Bordcomputerwerte lesen (schreiben nicht möglich) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD12A_D |
| ZEITSTEMPEL_HU_ABFRAGEN | 0xD12C | - | Zeitstempel Abfrage HU-relevanter Daten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD12C_D |
| BMW_CC_DATENSAETZE | 0xD12D | - | Lesen aller CC-Meldungs-Datensätze | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD12D_D |
| KLIMA_TIMER_SCHREIBEN | 0xD12E | - | Schreibt neue Werte in den Timer für Klima | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD12E_D | - |
| SEGMENTDATEN_SPEICHER | 0xD12F | - | Segmentdatenspeicher | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD12F_D |
| REICHWEITE_GEWONNENER_KRAFTSTOFF | 0xD1D0 | - | Reichweite und gewonnener Kraftstoff | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D0_D |
| VERBRAUCHSERHOEHUNG_ALPHA | 0xD1D1 | - | Verbrauchserhöhung alpha | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D1_D |
| VERBRAUCHSERHOEHUNG_PI | 0xD1D2 | - | Verbrauchserhöhung PI | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D2_D |
| MEHRVERBRAUCH_MV_REF | 0xD1D3 | - | Mehrverbrauch MVref | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D3_D |
| ECO_MODE_AUSTRITT | 0xD1D4 | - | ECO- Mode Austritt | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1D4_D |
| MOTORTEMPERATUR_KOMBI | 0xD1DB | - | Motortemperatur | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD1DB_D | RES_0xD1DB_D |
| BUS_IN_MOTORTEMPERATUR | 0xD1DC | STAT_BUS_IN_TEMPERATUR_WERT | Motortemperatur über BUS in Prozent | % | - | High | unsigned char | - | 0.5 | 1.0 | 0.0 | - | 22 | - | - |
| KOMBI_HUD_AKTIVE_WARPLISTE | 0xDA00 | STAT_WARPLISTE_AKTIV | Abfrage, welche WARPLISTE momentan aktiv ist. Status siehe Tabelle:  TAB_WARPLISTE  | 0-n | - | - | unsigned char | TAB_WARPLISTE | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_HUD_BILDPOSITION_SCHRITTE | 0xDA0A | STAT_HUD_BILDPOSITION_SCHRITTE_WERT | Position des Motors für die Bildpostition in Schritten | Schritte | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_HUD_HELLIGKEIT | 0xDA0C | - | Steuern der Helligkeit vom Head-Up-Display. | - | - | - | - | - | - | - | - | - | 2F | ARG_0xDA0C_D | RES_0xDA0C_D |
| STATUS_HUD_BILDROTATION_SCHRITTE | 0xDA0F | STAT_HUD_BILDROTATION_SCHRITTE_WERT | Position des Motors für die Bildrotation in Schritten im HUD | - | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HUD_PORTS_LESEN | 0xDA43 | - | interne Messwerte lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA43_D |
| HUD_SW_VERSION_LESEN | 0xDA44 | - | HUD SW Version lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA44_D |
| HUD_SENSOREN_IDENT_LESEN_ERWEITERT | 0xDA46 | - | Identifikation Daten lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA46_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| _TANK_VOLUMEN_LESEN | 0x3006 | - | Block 3006 (Tank) lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x3006_D |
| _TWSZ | 0x4010 | - | Tageswegstreckenzähler | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4010_D | RES_0x4010_D |
| _KORREKTURFAKTOR_VERBRAUCH | 0x4012 | - | Verbrauchskorrekturfaktor | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4012_D | RES_0x4012_D |
| _DISTANZ_2 | 0x401C | STAT_DISTANZ_2_WERT | Mit diesem Service wird die Distanz 2 gelesen. | km | - | High | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _NVM_ID | 0x401D | - | NVM-ID | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401D_D |
| _RDA_FGN_KOPIE | 0x401F | STAT_RDA_FGN_KOPIE_TEXT | Hier wird die FGN-Kopie in ASCII gelesen. | TEXT | - | High | string[7] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _DFE_TEMPERATUR_SENSOR | 0x4060 | - | Temperatursensorwerte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4060_D |
| VERBRAUCH_CHARAKTERISTIK_ECO | 0x4230 | - | Verbrauchscharakteristik ECO | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4230_D |
| VERBRAUCH_CHARAKTERISTIK_NORMAL | 0x4231 | - | Verbrauchscharakteristik Normal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4231_D |
| VERBRAUCH_CHARAKTERISTIK_LERNFAKTOR | 0x4232 | - | Verbrauchscharakteristik Lernfaktor Eco/Normal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4232_D |
| VERBRAUCH_CHARAKTERISTIK_FAKTOR | 0x4233 | - | Verbrauchscharakteristik Faktor Eco/Normal | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4233_D |
| _VERBRAUCHS_CHARAKTERISTIK_WIRKUNG_VM | 0x4234 | - | Verbrauchscharakteristik Wirkungsgrad VM lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4234_D |
| _VERBRAUCHS_CHARAKTERISTIK_WIRKUNG_EV | 0x4235 | - | Verbrauchscharakteristik Wirkungsgrad EV lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4235_D |
| _VERBRAUCHS_CHARAKTERISTIK_LERNFAKTOR_VM_EV | 0x4236 | - | Verbrauchscharakteristik Lernfaktor Wirkungsgrad VM / EV lesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4236_D |
| _VERBRAUCH_CHARAKTERISTIK_WIRKUNGSGRAD_EV | 0x4237 | - | Verbrauchscharakteristik Wirkungsgrad EV lesen in 0,01 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4237_D |
| _HW_AENDERUNGSINDEX | 0x4400 | - | Damit soll der Index gelesen/geschrieben werden, der kleine Änderungen an der Kombi-HW dokumentiert, die keinen Einfluss auf die BMW- Freigabeprozesse haben. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4400_D | RES_0x4400_D |
| HUD_LOGBUCH | 0x4800 | - | HUD_LOGBUCH | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4800_D |
| HUD_SYSTEMDATENEINBLENDUNG | 0x4802 | - | HUD_SYSTEMDATENEINBLENDUNG | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4802_D | - |
| HUD_PROCESS_VERSION_READ | 0x4805 | STAT_AL_NUMMER_WERT | - | - | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HUD_BILDPOSITION_MIKROSCHRITTE | 0x4808 | - | HUD_BILDPOSITION_MIKROSCHRITTE | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4808_D | RES_0x4808_D |
| _FUBI_VERSIONSLISTE | 0x5000 | - | FuBi-Versionsliste | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5000_D |
| CC_MELDUNGSSPEICHER_LOESCHEN | 0xF010 | - | CC-Meldungsspeicher (Historyspeicher) löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| VERBRAUCHSCHARAKTERISTIK_BERECHNUNG_ZURUECKSETZEN | 0xF014 | - | Die Berechnung der Verbrauchscharakteristik wird neu gestartet und die Lernwerte auf die Default-Werte zurückgesetzt | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FLASHDATEN_APIX_DOWNLOAD | 0xF120 | - | FLASHDATEN_APIX_DOWNLOAD | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF120_R | RES_0xF120_R |

### STATUS_RAM_DATEN_SCHREIBEN_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Schreiben erfolgreich |
| 0x01 | Schreiben  fehlgeschlagen |
| 0x02 | Schreiben läuft |
| 0x03 | Schreiben noch nicht angestoßen (Routine nicht gestartet) |

### TAB_BLS_VERZOEGERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Bremsung |
| 0x01 | Bremskreis 1 aktiv |
| 0x02 | Bremskreis 2 aktiv |
| 0x03 | Nicht definiert |

### TAB_CBS_STATUS_AKTIVIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Inaktiv |
| 0x01 | Aktiv |
| 0x02 | Keine Änderung |
| 0x03 | Keine Änderung |
| 0x04 | Aktiv |
| 0x08 | Keine Änderung |
| 0x0C | Keine Änderung |
| 0x10 | Aktiv |
| 0x20 | Keine Änderung |
| 0x30 | Keine Änderung |
| 0x40 | Aktiv |
| 0x80 | Keine Änderung |
| 0xC0 | Keine Änderung |

### TAB_ECO_TIPP_ANZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Tipp |
| 0x01 | Langsamer beschleunigen |
| 0x02 | Geschwindigkeit reduzieren |
| 0x03 | Vorrausschauender Bremsen |
| 0x04 | Empfohlenen Gang wählen |
| 0x05 | Gangwahlschalter in D-Mode bewegen |
| 0x06 | Im Stand Leerlauf einlegen Kupplung schließen |
| 0x07 | Im Stand Bremse betätigen |
| 0x08 | Vom Gas gehen wegen Geschwindigkeitsbegrenzung |
| 0x09 | Vom Gas gehen wegen Geschwindigkeitsbegrenzung, Einheit km/h |
| 0x0A | Vom Gas gehen wegen Geschwindigkeitsbegrenzung, Einheit mph |
| 0x0B | Vom Gas gehen wegen Straßenverlauf |
| 0x0C | Vom Gas gehen wegen Kreisverkehr |
| 0x0D | Vom Gas gehen wegen Kreisverkehr, Linksverkehr |
| 0x0E | Vom Gas gehen wegen Kreisverkehr, Rechtsverkehr |
| 0x0F | Vom Gas gehen wegen Abbiegemöglichkeit |
| 0x10 | Infotafel bei Aktivierung ECO-Tipps in MMI |
| 0x11 | Fenster schließen wegen hohe Geschwindigkeit |
| 0x12 | Fenster schließen wegen Klimaanlage an |
| 0x3F | Signal ungültig |

### TAB_EINGABE_ART

| WERT | TEXT |
| --- | --- |
| 0x0 | keine Angabe |
| 0x1 | Ortszeit Werk (per Diagnose gesetzt, keine UTC-Zeit) |
| 0x2 | UTC basiert (von GPS abgeleitet) |

### TAB_FARBE_KOMBILEUCHTEN

| WERT | TEXT |
| --- | --- |
| 0x01 | GRUEN |
| 0x02 | GELB |
| 0x03 | ROT |
| 0x04 | ORANGE |
| 0x05 | WEISS |
| 0x06 | BLAU |

### TAB_FUBI_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Modul |
| 0x01 | Atemp |
| 0x02 | BC |
| 0x03 | CBS |
| 0x04 | CC |
| 0x05 | DIMM_BI |
| 0x06 | DIMM_CID |
| 0x07 | DIMM_RIP |
| 0x08 | ERM |
| 0x09 | ERM_UDS |
| 0x0A | LDM |
| 0x0B | MMQ |
| 0x0C | ODO |
| 0x0D | RDA |
| 0x0E | ECI |
| 0x0F | TNK |
| 0x10 | C2C GW |
| 0x11 | SWBus |
| 0x12 | V-Mon |
| 0x13 | CD-Bus |
| 0x14 | WRP |
| 0x15 | ERM_CFG |
| 0x16 | DEM_CFG |
| 0x17 | FES_V |
| 0x18 | KLB |
| 0x19 | Gear |
| 0x1A | UCV |
| 0x1B | DFE-Treiber |
| 0x1C | HUD-Treiber |
| 0x32 | CAN-NK |
| 0x33 | CC-DB |
| 0x64 | HMI |
| 0xFF | Ungültigen Wert |

### TAB_HUD_BILDPOSITION

| WERT | TEXT |
| --- | --- |
| 0x01 | ShortPeriod |
| 0x02 | Continuation |
| 0x03 | Bildrotation |

### TAB_HUD_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x01 | hoch bzw. rechtsdrehend |
| 0x02 | runter bzw. linksdrehend |

### TAB_KAMMERLEUCHTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | alle KL aus |
| 0x01 | F1 |
| 0x02 | F2 |
| 0x03 | F3 |
| 0x04 | F4_1 |
| 0x05 | F4_2 |
| 0x06 | F4_3 |
| 0x07 | F5_1 |
| 0x08 | F5_2 |
| 0x09 | F6_1 |
| 0x0A | F6_2 |
| 0x0B | F6_3 |
| 0x0C | F8 |
| 0x0D | F9 |
| 0x0E | F10 |
| 0x0F | F13 |
| 0x10 | F14 |
| 0x11 | F15 |
| 0x12 | F16 |
| 0x13 | F17 |
| 0x14 | F18 |
| 0x15 | F19 |
| 0x16 | F20 |
| 0x17 | F21 |
| 0x18 | F22 |
| 0x19 | F23 |
| 0x1A | F24 |
| 0x1B | F25 |
| 0x28 | Standlicht |
| 0x29 | Fernlicht |
| 0x2A | Nebelschlussleuchte |
| 0x2B | Nebelscheinwerfer |
| 0x2C | Fernlichtassistent |
| 0x2E | Blinker rechts |
| 0x2F | Blinker links |
| 0xFF | alle KL (für die Farbansteuerung) |

### TAB_KOMBI_BLINKER

| WERT | TEXT |
| --- | --- |
| 0x00 | Vorgabe beenden (AUS) |
| 0x11 | Nomalblinken links |
| 0x12 | Nomalblinken rechts |
| 0x13 | Nomalblinken links und rechts |
| 0x21 | Defektblinken links |
| 0x22 | Defektblinken rechts |
| 0x23 | Defektblinken rechts und links |
| 0x31 | Doppelblinken links |
| 0x32 | Doppelblinken rechts |
| 0x33 | Doppelblinken rechts und links |
| 0x41 | Blinker statisch links EIN |
| 0x42 | Blinker statisch rechts EIN |
| 0x43 | Blinker statisch links und rechts EIN |

### TAB_KOMBI_FORMAT_UHRZEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | 24h, dd.mm.yyyy |
| 0x01 | 12h, dd.mm.yyyy |
| 0x08 | keine Vorgabe Uhrzeitformat (beibehalten), dd.mm.yyyy |
| 0x10 | 24h, mm/dd/yyyy |
| 0x11 | 12h, mm/dd/yyyy |
| 0x18 | keine Vorgabe Uhrzeitformat (beibehalten),  mm/dd/yyyy |
| 0x80 | Datumsformat beibehalten, 24h |
| 0x81 | Datumsformat beibehalten, 12h |
| 0x88 | keine Vorgabe Uhrzeitformat (beibehalten), allgemein |

### TAB_KOMBI_LSS

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x40 | Kombitaste |
| 0x80 | Lenkstock-Taste (LSS) |
| 0xC0 | Lenkstock- und Kombitaste gedrückt |

### TAB_KOMBI_TANKPHASE

| WERT | TEXT |
| --- | --- |
| 0x01 | i.O |
| 0x02 | mind. 1 Hebelgeber n.i.O |
| 0x03 | mind. 1 Hebelgeber n.i.O und zusätzlich kein Verbrauchssignal |

### TAB_SCHRIFTZUG_SYMBOLFARBE

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x10 | aus, gruen |
| 0x20 | aus, gelb |
| 0x30 | aus, rot |
| 0x40 | aus, orange |
| 0x50 | aus, weiss |
| 0x60 | aus, blau |
| 0x01 | gruen, aus |
| 0x11 | gruen, gruen |
| 0x21 | gruen, gelb |
| 0x31 | gruen, rot |
| 0x41 | gruen, orange |
| 0x51 | gruen, weiss |
| 0x61 | gruen, blau |
| 0x02 | gelb, aus |
| 0x12 | gelb, gruen |
| 0x22 | gelb, gelb |
| 0x32 | gelb, rot |
| 0x42 | gelb, orange |
| 0x52 | gelb, weiss |
| 0x62 | gelb, blau |
| 0x03 | rot, aus |
| 0x13 | rot, gruen |
| 0x23 | rot, gelb |
| 0x33 | rot, rot |
| 0x43 | rot, orange |
| 0x53 | rot, weiss |
| 0x63 | rot, blau |
| 0x04 | orange, aus |
| 0x14 | orange, gruen |
| 0x24 | orange, gelb |
| 0x34 | orange, rot |
| 0x44 | orange, orange |
| 0x54 | orange, weiss |
| 0x64 | orange, blau |
| 0x05 | weiss, aus |
| 0x15 | weiss, gruen |
| 0x25 | weiss, gelb |
| 0x35 | weiss, rot |
| 0x45 | weiss, orange |
| 0x55 | weiss, weiss |
| 0x65 | weiss, blau |
| 0x06 | blau, aus |
| 0x16 | blau, gruen |
| 0x26 | blau, gelb |
| 0x36 | blau, rot |
| 0x46 | blau, orange |
| 0x56 | blau,weiss  |
| 0x66 | blau, blau |
| 0xFF | Wert ungültig |

### TAB_STERNE_BESCHLEUNIGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 Sterne |
| 0x01 | 1 Stern |
| 0x02 | 2 Sterne |
| 0x03 | 3 Sterne |
| 0x04 | 4 Sterne |
| 0x05 | 5 Sterne |

### TAB_STERNE_BREMSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 Sterne |
| 0x08 | 1 Stern |
| 0x10 | 2 Sterne |
| 0x18 | 3 Sterne |
| 0x20 | 4 Sterne |
| 0x28 | 5 Sterne |

### TAB_WARPING

| WERT | TEXT |
| --- | --- |
| 0x00 | KEINE_AENDERUNG |
| 0x01 | TRAPEZ |
| 0x02 | RHOMBUS |
| 0x03 | KISSEN |
| 0x04 | SMILE |
| 0x05 | HOEHE |
| 0x06 | BREITE |
| 0x08 | H_SHIFT |

### TAB_WARPING_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | ABBRECHEN |
| 0x01 | ANZEIGEN |
| 0x02 | VERAENDERN |
| 0x03 | SPEICHERN |

### TAB_WARPING_KENNLINIEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kennlinie gewählt |
| 0xFE | Kennlinie konnte nicht verwendet werden |

### TAB_WARPING_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | KEINE_AENDERUNG |
| 0x01 | HOCH |
| 0x02 | RUNTER |
| 0x03 | LINKS |
| 0x04 | RECHTS |

### TAB_WARPLISTE

| WERT | TEXT |
| --- | --- |
| 0x01 | CAF |
| 0x03 | Service |
| 0xFF | Wert ungültig |

### TAB_0X1752

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0001 | 0x0002 | 0x0003 | 0x0004 | 0x0005 | 0x0006 | 0x0007 | 0x0008 | 0x0009 | 0x000A | 0x000B | 0x000C | 0x000D | 0x000E | 0x000F | 0x0010 |

### TAB_0X1754

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 | 0x0037 | 0x0038 |

### TAB_0X175A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0011 | 0x0012 | 0x0013 | 0x0014 | 0x0015 | 0x0016 | 0x0017 | 0x0018 | 0x0019 | 0x001A | 0x001B | 0x001C | 0x001D | 0x001E | 0x001F | 0x0020 |

### TAB_0X175B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0021 | 0x0022 | 0x0023 | 0x0024 | 0x0025 | 0x0026 | 0x0027 | 0x0028 | 0x0029 | 0x002A | 0x002B | 0x002C | 0x002D | 0x002E | 0x002F | 0x0030 |

### UNEXPECTED_LINK_UP_STATUS_TAB

| WERT | TEXT |
| --- | --- |
| 0 | für unbelegte Ports kein Link-up festgestellt bzw. Link auf Port zulässig |
| 1 | Link-up auf eigentlich unbelegtem Port festgestellt |
