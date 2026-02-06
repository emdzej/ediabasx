# ihka01.prg

## General

|  |  |
| --- | --- |
| File | ihka01.prg |
| Type | PRG |
| Jobs | 65 |
| Tables | 158 |
| Origin | BMW EI511 Linnemann |
| Revision | 11.001 |
| Author | Preh 1713 Holzheimer |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Klimaautomatik |  |  |
| ORIGIN | string | BMW EI511 Linnemann |  |  |
| REVISION | string | 11.001 |  |  |
| AUTHOR | string | Preh 1713 Holzheimer |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.47 |  |  |
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

### _FBM_VERSION

UDS  : $22   ReadDataByIdentifier UDS  : $400C FBM Version Modus: Default

_No arguments._

### _HARDWARE_VARIANTE

UDS  : $22   ReadDataByIdentifier UDS  : $4010 HARDWARE_VARIANTE Modus: Default

_No arguments._

### STATUS_SHZH_IDENT

BMW Zusammenbaunummer auslesen

_No arguments._

### STATUS_SHZH_HARDWARESTERNNUMMER

BMW Hardwaresternnummer auslesen

_No arguments._

### STATUS_SHZH_SERIENNUMMER

Heizgerätenummer auslesen

_No arguments._

### STATUS_SHZH_BETRIEBSZUSTAND

Statusinformation Betriebszustand

_No arguments._

### STATUS_SHZH_BETRIEBSDATEN

Betriebsdaten (Betriebsdauer, Brenndauer und Einschaltzähler) auslesen

_No arguments._

### STATUS_SHZH_HGV

Status Heizgeraeteverriegelung auslesen

_No arguments._

### STEUERN_SHZH_HGV_RESET

Heizgeräteverriegelung reset

_No arguments._

### STATUS_SHZH_KONFIGURATION

Konfiguration lesen

_No arguments._

### SHZH_KONFIGURATION_SCHREIBEN

Konfiguration schreiben

| Name | Type | Description |
| --- | --- | --- |
| STAT_UNTERSPANNUNGSABSCHALTSCHWELLE_MILLIVOLT | int | Status Unterspannungsabschaltschwelle in [mV] |
| STAT_ZEITKRITERIUM_UNTERSPANNUNG_SEKUNDEN | int | Status Zeitkriterium in [s] für Unterspannung |

### STEUERN_SHZH_TESTABBRUCH

Testabbruch

_No arguments._

### STATUS_SHZH_TESTLAUF

Testlauf (vom Prüfbetrieb) auslesen

_No arguments._

### STEUERN_SHZH_TESTLAUF

Steuern Testlauf

| Name | Type | Description |
| --- | --- | --- |
| AKTION | int | Testlauf 0 = Testlauf abbrechen 1 = Testlauf starten |

### STEUERN_SHZH_KOMPONENTEN

Komponententest

| Name | Type | Description |
| --- | --- | --- |
| SHZH_UMWAELZPUMPE | int | Steuert die Umwaelzpumpe 0=AUS 1=EIN max. Zeit: 254s |
| SHZH_KRAFTSTOFFVORWAERMUNG | int | Steuert die Kraftstoffvorwaermung 0=AUS 1=EIN max. Zeit: 10s |
| SHZH_DOSIERPUMPE | int | Steuert die Dosierpumpe 0=AUS 1=EIN max. Zeit: 10s |
| SHZH_BRENNLUFTGEBLAESE | int | Steuert die Brennluftgeblaese 0=AUS 1=EIN max. Zeit: 60s |
| SHZH_GLUESTIFT | int | Steuert den Glühstift 0=AUS 1=EIN max. Zeit: 60s |
| SHZH_UMSCHALTVENTIL | int | 0=AUS 1=EIN max. Zeit: 254s |
| ZEIT | int | UP  max.254s KV  max.10s DP  max.10s BLG max.60s GS  max.60s USV max.254s |

### STATUS_SHZH

Der Job gibt den Status der Flammenerkennung, Gluehelement,Umwaelzpumpe, Dosierpumpe Gluestift, Brennluftgeblaese, Umschaltventil

_No arguments._

### STATUS_SHZH_BETRIEBSMODUS

Betriebsmodus lesen

_No arguments._

### STATUS_SHZH_BETRIEBSSPANNUNG

Der Job gibt die Betriebsspannung am SHZH zurueck

_No arguments._

### STATUS_SHZH_FUNKTIONSZUSTAND

Funktionszustand lesen

_No arguments._

### STEUERN_SHZH_LEITUNGSBEFUELLUNG

Leitungsbefuellung

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Dauer Leitungsbefüllung in sec max 240Sec |

### STEUERN_SHZH_STEUERGERAET_RESET

Reset des Steuergerätes

_No arguments._

### STEUERN_HWAP

Beschreibung Es muessen immer alle vier Argumente für die HWAP Identifier von 0-255 bzw. 0x00-0xFF uebergeben werden. Die Version wird automatisch mit 0xFF besetzt UDS  : $2E   WriteDataByIdentifier UDS  : $4002 STEUERN_HWAP Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | HWAP Identifier[1] Wert hex |
| BYTE2 | int | HWAP Identifier[2] Wert hex |
| BYTE3 | int | HWAP Identifier[3] Wert hex |
| BYTE4 | int | HWAP Identifier[4] Wert hex |

### STATUS_FLASHBAR_XDT

UDS  : $23 ReadMemoryByAdress UDS  : $x12010401 READ FPROT Register Modus: Default

_No arguments._

### STATUS_FLASHBAR_XEQ

UDS  : $23 ReadMemoryByAdress UDS  : $x12010801 READ FPROT Register Modus: Default

_No arguments._

### STATUS_FASTA_BLOCK

Aktueller Wert des FASTA-Blocks

| Name | Type | Description |
| --- | --- | --- |
| STAT_FASTA_BLOCK_ARG | string | Nummer des FASTA-Blocks (0-FF) table FastaBlockTab Blocknumber,Blockname Wenn keine Eingabe: default = 0x00 |

### STATUS_FASTA_BLOCK2

Aktueller Wert des FASTA-Blocks

| Name | Type | Description |
| --- | --- | --- |
| STAT_FASTA_BLOCK_ARG | string | Nummer des FASTA-Blocks (0-FF) table FastaBlockTab Blocknumber,Blockname Wenn keine Eingabe: default = 0x00 |

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
| 0x000001 | Reinshagen => Delphi |
| 0x000002 | Kostal |
| 0x000003 | Hella |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako |
| 0x000008 | Bosch |
| 0x000009 | Loewe => Lear |
| 0x000010 | VDO |
| 0x000011 | Valeo |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine |
| 0x000018 | Continental Teves |
| 0x000019 | Elektromatik Suedafrika |
| 0x000020 | Becker |
| 0x000021 | Preh |
| 0x000022 | Alps |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi PHI |
| 0x000028 | DODUCO => BERU |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer |
| 0x000033 | Jatco |
| 0x000034 | Fuba |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE |
| 0x000041 | Megamos |
| 0x000042 | TRW |
| 0x000043 | Wabco |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC (Hella Electronics Corporation) |
| 0x000046 | Gemel |
| 0x000047 | ZF |
| 0x000048 | GMPT |
| 0x000049 | Harman Kardon |
| 0x000050 | Remes |
| 0x000051 | ZF Lenksysteme |
| 0x000052 | Magneti Marelli |
| 0x000053 | Borg Instruments |
| 0x000054 | GETRAG |
| 0x000055 | BHTC (Behr Hella Thermocontrol) |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon |
| 0x000058 | Autoliv |
| 0x000059 | Haberl |
| 0x000060 | Magna Steyr |
| 0x000061 | Marquardt |
| 0x000062 | AB-Elektronik |
| 0x000063 | Siemens VDO Borg |
| 0x000064 | Hirschmann Electronics |
| 0x000065 | Hoerbiger Electronics |
| 0x000066 | Thyssen Krupp Automotive Mechatronics |
| 0x000067 | Gentex GmbH |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steering Europe |
| 0x000071 | NSI B.V |
| 0x000072 | AISIN AW CO.LTD |
| 0x000073 | Shorlock |
| 0x000074 | Schrader |
| 0x000075 | BERU Electronics GmbH |
| 0x000076 | CEL |
| 0x000077 | Audio Mobil |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | AKsys GmbH |
| 0x000086 | META System |
| 0x000087 | Hülsbeck & Fürst GmbH & Co KG |
| 0x000088 | Mann & Hummel Automotive GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.A. |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp. |
| 0x000094 | KÜSTER Automotive Control |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental Automotive |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls |
| 0x00009A | Takata- Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN-Driveline |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | PEIKER acustics GmbH |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | ADC Automotive Distance Control Systems GmbH |
| 0x0000A5 | Funkwerk Dabendorf GmbH |
| 0x0000A6 | Lame |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Wanyu |
| 0x0000A9 | Thyssen Krupp Presta |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA |
| 0x0000AF | Alfmeier |
| 0x0000B0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0x0000B1 | Omron Automotive Electronics Europe Group |
| 0x0000B2 | ASK |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive World Headquarters |
| 0x0000B6 | Hans Widmaier |
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
| 0x0000BB | BMW - Fahrzeugsimulator |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin |
| 0x0000BE | Schaeffler Technologies |
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
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
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
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
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
| 0x0007 | Volvo Cars (Ford Group) |
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
| 0x005B | VOLVO Technology Schweden |
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
| 0x007B | Bury GmbH & Co. KG |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
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
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x0099 | Thomson Linear Motion |
| 0x009C | Methode Electronics, Inc |
| 0x0101 | Huber Automotive AG |
| 0x009D | Danlaw, Inc. |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x009F | Fujikoki Corporation |
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
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
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

### ARG_0XA111

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LIN_DEVICE_ADDRESS | + | - | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Adresse LIN-Bus-Teilnehmer. default = 0x20 |

### ARG_0XA114

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREQUENZ | + | - | Hz | high | unsigned char | - | - | 20.0 | 1.0 | 0.0 | 0.0 | 12.7 | Frequenz der Dosierpumpe in Hertz |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer der Ansteuerung |

### ARG_0XA115

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEISTUNG | + | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Leistung der Wasserpumpe in Prozent |
| ZEIT | + | + | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer der Ansteuerung |

### ARG_0XA116

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAKTUNG | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Taktung des Umschaltventils |
| ZEIT | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Dauer der Ansteuerung |

### ARG_0XD592

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_FBM_TASTEN | 1.0 | 1.0 | 0.0 | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Normalbetrieb, 1 = Berührung simulieren |

### ARG_0XD593

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_FBM_TASTEN | 1.0 | 1.0 | 0.0 | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: FBM_1, FBM_2, FBM_3, FBM_4, FBM_5, FBM_6, FBM_7, FBM_8; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SGBD-Autor durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### ARG_0XD596

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_SL_TASTEN | 1.0 | 1.0 | 0.0 | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: SL_L_VORNE, SL_R_VORNE, SL_L_HINTEN, SL_R_HINTEN; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT |

### ARG_0XD5A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_SH_TASTEN | 1.0 | 1.0 | 0.0 | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: SH_L_VORN, SH_R_VORN, SH_L_HINTEN, SH_R_HINTEN; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = NICHT GEDRUECKT, 1 = GEDRUECKT |

### ARG_0XD86E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLAPPE | 0-n | - | int | - | TAB_KLAPPEN_VORN | - | - | - | - | - | Zu verwendende Text für die Tabelle zur Ansteuerung der Motoren: ENTFROSTUNG, BEL_LI_AUSSEN, BEL_LI_MITTE, BEL_LI, BELUEFTUNG, BEL_RE, BEL_RE_MITTE, BEL_RE_AUSSEN, FUSS_LI, FUSS_GES_LI, FUSS_GES_RE, FUSS_RE, FUSSRAUM, SCHICHT_LI, SCHICHT_RE, SCHICHTUNG, FL_STAU, UMLUFT, FUSS_FOND_LI, FUSS_FOND, FUSS_FOND_RE, SCHICHT_FOND_LI, SCHICHT_FOND_RE, SCHICHT_FOND, TEMP_LUFTMENGE_FOND, KNIE_LI, KNIE_RE. Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument KLAPPE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| KLAPPENOEFFNUNG | % | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Gibt an, wie weit die Klappe geöffnet werden soll: 0 ... 100%,  0%=Geschlossen, 100%=Offen |

### ARG_0XD86F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_TASTEN_KLIMA | 1.0 | 1.0 | 0.0 | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: LV_RE, LV_LI, LV_MITTE, AUTO_RE, AUTO_LI, AUTO_MITTE, GBL_PLUS_RE, GBL_MINUS_RE, GBL_PLUS_LI, GBL_MINUS_LI, GBL_PLUS_MITTE, GBL_MINUS_MITTE, MAX_AC, KLIMA, UML_AUC, ALL, DEFROST, HHS; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### ARG_0XD875

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ORT | 0-n | - | int | - | TAB_SOLLTEMP | 1.0 | 1.0 | 0.0 | - | - | STOP (Abbruch der Ansteuerung), TEMP_LINKS (Vorgabe Temperatur links), TEMP_RECHTS (Vorgabe Temperatur rechts), TEMP_MITTE (Vorgabe Temperatur mitte) |
| TEMPERATUR | °C | - | int | - | - | 1.0 | 1.0 | 0.0 | 16.0 | 28.0 | Vorgabe der einzustellenden Temperatur in 1-er Schritten: Bereich 16 - 28 |

### ARG_0XD877

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Gibt an, auf wieviel Prozent die Gebläseendstufe angesteuert werden soll. |

### ARG_0XD87E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEDS | 0-n | - | int | - | TAB_LED_KLIMA_VORN | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche LEDs angesteuert werden sollen: ALLE (default), AUTO, MAX_AC |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Gibt an, ob die LED ein- oder ausgeschaltet werden soll: 0 = AUS, 1 = EIN |

### ARG_0XD89A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MUSTER | 0-n | - | int | - | TAB_BITMUSTER | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welches Bitmuster angesteuert werden soll: BITMUSTER1 bis BITMUSTERn Informationen in der diskreten Wertetabelle |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Bitmuster: 0 = AUS, 1 = EIN |

### ARG_0XD89F

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UNTERSPANNUNGSABSCHALTSCHWELLE_MILLIVOLT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Status Unterspannungsabschaltschwelle in [mV] |
| ZEITKRITERIUM_UNTERSPANNUNG_SEKUNDEN | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Status Zeitkriterium in [s] für Unterspannung |

### ARG_0XD8A0

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PTC | 0-n | - | int | - | TAB_PTC_MODUL | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welches PTC-Modul angesteuert werden soll: EINZELNER (default); LINKS; RECHTS |
| SOLLWERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Vorgabe des Sollwertes für die Ansteuerung: 0 ... 100% |

### ARG_0XD8B5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTE | 0-n | - | int | - | TAB_TASTEN_AUDIO | 1.0 | 1.0 | 0.0 | - | - | Zu verwendende Texte für die Tabelle zur Ansteuerung der Tasten: EIN_AUS, MODE, TP, EJECT, SUCHLAUF_LI, SUCHLAUF_RE; Die Umsetzung der Namen in eine Nummer findet in der Tabelle des Argument TASTE statt. Die Zuordnung der Nummer wird durch den SW-Entwickler durchgeführt. |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = nicht gedrückt, 1 = gedrückt |

### ARG_0XD8BF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vorgabe der Drehzahl in Prozent. |

### ARG_0XD8C3

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DREHZAHL | % | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | - | - | Vorgabe der Drehzahl in Prozent. |

### ARG_0XD8C6

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reset Kältemittelverdichter: 0 = kein Reset 1 = Reset durchführen |

### ARG_0XD8C7

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKS_ANFORDERUNG | 0-n | high | unsigned char | - | TAB_AKS_EKMV | 1.0 | 1.0 | 0.0 | - | - | Isolationprüfung: 0x00 = kein aktiver Kurzschluss 0x01 = aktiver Kurzschluss Low-Side 0x02 = aktiver Kurzschluss High-Side |

### ARG_0XD907

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTION | 0-n | - | int | - | TAB_STEUERN_PATT | 1.0 | 1.0 | 0.0 | - | - | Gibt an, welche Funktion ausgeführt werden soll:  0 = AUS (Funktion ausschalten),  1 = STANDBY (Standby-Betrieb),  2 = STANDBETRIEB (Ozonisierung) |

### ARG_0XD918

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINLAUFSCHUTZ | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzt den Einlaufschutz für den Klimakompressor: 0 = Einlaufschutz ausschalten 1 = Einlaufschutz einschalten |

### ARG_0XD927

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 = Ansteuerungen werden nicht beendet 1 = Ansteuerung werden beendet |

### ARG_0XD978

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CURRENT_STEPPER_ADDRESS | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Aktuelle Adresse des zu programmierenden Klappenmotors. Default 0x3F |
| NEW_STEPPER_ADDRESS | - | - | char | - | - | 1.0 | 1.0 | 0.0 | - | - | Neue Adresse des zu programmierenden Klappenmotors. Default 0x3F |
| DIRECTION | 0-n | - | char | - | TAB_LAUFRICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Laufrichtung des zu programmierenden Klappenmotors. 0x00 = Laufrichtung im Uhrzeigersinn für steigenden Schrittzahlen, 0x01 = Laufrichtung gegen Uhrzeigersinn, 0xFF = Laufrichtung gemäß aktueller Programmierung. Default = 0xFF |
| SAFETY_ENABLE | 0-n | - | char | - | TAB_NOTLAUF | 1.0 | 1.0 | 0.0 | - | - | Notlaufaktivierung des zu programmierenden Klappenmotors. 0x00 = Notlauf aktiviert, 0x01 = Notlauf deaktiviert, 0xFF = Notlauf gemäß aktueller Programmierung. Default = 0xFF |
| SAFETY_DIRECTION | 0-n | - | char | - | TAB_NOTLAUF_ENDPOS | 1.0 | 1.0 | 0.0 | - | - | Notlaufendposition des zu programmierenden Klappenmotors. 0x00 = Zu niedrigen Schrittzahlen, 0x01 = Zu hohen Schrittzahlen, 0xFF = Notlaufendposition gemäß aktueller Programmierung. Default = 0xFF |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Fertigungsmode: HHS, Gebläse, MAG, PTC, Standheizung, Standlüften, PATT, ZWP+WV, Hybrid-Umfänge deaktiviert |
| 0x01 | Spezieller Energiesparmode | Fertigungsmode: HHS, Gebläse, MAG, PTC, Standheizung, Standlüften, PATT, ZWP+WV, Hybrid-Umfänge deaktiviert |
| 0x02 | ECOS-Mode | Fertigungsmode: PATT, Hybrid-Umfänge deaktiviert |
| 0x03 | MOST-Mode | Fertigungsmode: HHS, Gebläse, MAG, PTC, Standheizung, Standlüften, PATT, ZWP+WV, Hybrid-Umfänge deaktiviert |
| 0x04 | Betriebsmode 4 | Fertigungsmode: HHS, Gebläse, PTC, Standlüften, Hybrid-Umfänge deaktiviert |
| 0x05 | Betriebsmode 5 | Fertigungsmode: HHS, Gebläse, PTC, Hybrid-Umfänge deaktiviert |
| 0x06 | Rollenmode | keine Deaktivierung |
| 0x07 | Betriebsmode 7 | keine Deaktivierung |
| 0x08 | Betriebsmode 8 | keine Deaktivierung |
| 0x09 | Betriebsmode 9 | keine Deaktivierung |
| 0x0A | Betriebsmode 10 | keine Deaktivierung |
| 0x0B | Betriebsmode 11 | keine Deaktivierung |
| 0x0C | Betriebsmode 12 | keine Deaktivierung |
| 0x0D | Betriebsmode 13 | keine Deaktivierung |
| 0x0E | Betriebsmode 14 | keine Deaktivierung |
| 0x0F | Betriebsmode 15 | keine Deaktivierung |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x027800 | Energiesparmode aktiv | 1 |
| 0x02FF78 | Debug Funktion Applikation | 1 |
| 0x801100 | BDC Drucksensor Kältemittel: Plausibilität | 0 |
| 0x801101 | BDC Drucksensor Kältemittel: Oberhalb des gültigen Wertebereiches | 0 |
| 0x801102 | BDC Drucksensor Kältemittel: Unterhalb des gültigen Wertebereiches | 0 |
| 0x801103 | BDC Drucksensor Kältemittel: Kurzschluss nach Masse | 0 |
| 0x801104 | BDC Drucksensor Kältemittel: Kurzschluss nach Plus | 0 |
| 0x801180 | Motor Entfrostung: Intitialisierungsfehler | 0 |
| 0x801181 | Motor Entfrostung:  interner Motorfehler | 0 |
| 0x801182 | Motor Entfrostung:  Blockierung | 0 |
| 0x801183 | Motor Belüftung links außen: Intitialisierungsfehler | 0 |
| 0x801184 | Motor Belüftung links außen: interner Motorfehler | 0 |
| 0x801185 | Motor Belüftung links außen: Blockierung | 0 |
| 0x801186 | Motor Belüftung links mitte: Intitialisierungsfehler | 0 |
| 0x801187 | Motor Belüftung links mitte: interner Motorfehler | 0 |
| 0x801188 | Motor Belüftung links mitte: Blockierung | 0 |
| 0x801189 | Motor Belüftung rechts mitte: Intitialisierungsfehler | 0 |
| 0x80118A | Motor Belüftung rechts mitte: interner Motorfehler | 0 |
| 0x80118B | Motor Belüftung rechts mitte: Blockierung | 0 |
| 0x80118C | Motor Belüftung rechts außen: Intitialisierungsfehler | 0 |
| 0x80118D | Motor Belüftung rechts außen: interner Motorfehler | 0 |
| 0x80118E | Motor Belüftung rechts außen: Blockierung | 0 |
| 0x80118F | Motor Fußraum vorn links: Intitialisierungsfehler | 0 |
| 0x801190 | Motor Fußraum vorn links: interner Motorfehler | 0 |
| 0x801191 | Motor Fußraum vorn links: Blockierung | 0 |
| 0x801192 | Motor Fußraum vorn rechts:  Intitialisierungsfehler | 0 |
| 0x801193 | Motor Fußraum vorn rechts:  interner Motorfehler | 0 |
| 0x801194 | Motor Fußraum vorn rechts:  Blockierung | 0 |
| 0x801195 | Motor Fußraum hinten links: Intitialisierungsfehler | 0 |
| 0x801196 | Motor Fußraum hinten links: interner Motorfehler | 0 |
| 0x801197 | Motor Fußraum hinten links: Blockierung | 0 |
| 0x801198 | Motor Fußraum hinten rechts: Intitialisierungsfehler | 0 |
| 0x801199 | Motor Fußraum hinten rechts: interner Motorfehler | 0 |
| 0x80119A | Motor Fußraum hinten rechts: Blockierung | 0 |
| 0x80119B | Motor Schichtung vorn links:  Intitialisierungsfehler | 0 |
| 0x80119C | Motor Schichtung vorn links:  interner Motorfehler | 0 |
| 0x80119D | Motor Schichtung vorn links:  Blockierung | 0 |
| 0x80119E | Motor Schichtung vorn rechts: Intitialisierungsfehler | 0 |
| 0x80119F | Motor Schichtung vorn rechts: interner Motorfehler | 0 |
| 0x8011A0 | Motor Schichtung vorn rechts: Blockierung | 0 |
| 0x8011A1 | Motor Schichtung hinten links: Intitialisierungsfehler | 0 |
| 0x8011A2 | Motor Schichtung hinten links: interner Motorfehler | 0 |
| 0x8011A3 | Motor Schichtung hinten links: Blockierung | 0 |
| 0x8011A4 | Motor Schichtung hinten rechts:  Intitialisierungsfehler | 0 |
| 0x8011A5 | Motor Schichtung hinten rechts:  interner Motorfehler | 0 |
| 0x8011A6 | Motor Schichtung hinten rechts:  Blockierung | 0 |
| 0x8011A7 | Motor Frischluft/Staudruck:  Intitialisierungsfehler | 0 |
| 0x8011A8 | Motor Frischluft/Staudruck:  interner Motorfehler | 0 |
| 0x8011A9 | Motor Frischluft/Staudruck:  Blockierung | 0 |
| 0x8011AA | Motor Umluft: Intitialisierungsfehler | 0 |
| 0x8011AB | Motor Umluft: interner Motorfehler | 0 |
| 0x8011AC | Motor Umluft: Blockierung | 0 |
| 0x8011AD | Fühler Innentemperatur:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011AE | Fühler Innentemperatur:  Kurzschluß nach Minus | 0 |
| 0x8011AF | Verdampfertemperaturfühler:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B0 | Verdampfertemperaturfühler:  Kurzschluß nach Minus | 0 |
| 0x8011B1 | Fühler Wärmetauscher links:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B2 | Fühler Wärmetauscher links:  Kurzschluß nach Minus | 0 |
| 0x8011B3 | Fühler Wärmetauscher rechts:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B4 | Fühler Wärmetauscher rechts:  Kurzschluß nach Minus | 0 |
| 0x8011B5 | Fühler Belüftungstemperatur links:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B6 | Fühler Belüftungstemperatur links:  Kurzschluß nach Minus | 0 |
| 0x8011B7 | Fühler Belüftungstemperatur rechts:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011B8 | Fühler Belüftungstemperatur rechts:  Kurzschluß nach Minus | 0 |
| 0x8011B9 | Schichtungspotentiometer links:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011BA | Schichtungspotentiometer links:  Kurzschluß nach Minus | 0 |
| 0x8011BB | Schichtungspotentiometer rechts:  Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011BC | Schichtungspotentiometer rechts:  Kurzschluß nach Minus | 0 |
| 0x8011BD | DC/DC Konverter Monitor: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011BF | Externe 5 Volt Messung: Spannung über 8 Volt | 0 |
| 0x8011C0 | Externe 5 Volt Messung: Spannung unter 2 Volt | 0 |
| 0x8011C1 | FBM-Taste 1:  Taste klemmt | 0 |
| 0x8011C2 | FBM-Taste 2: Taste klemmt | 0 |
| 0x8011C3 | FBM-Taste 3:  Taste klemmt | 0 |
| 0x8011C4 | FBM-Taste 4: Taste klemmt | 0 |
| 0x8011C5 | FBM-Taste 5:  Taste klemmt | 0 |
| 0x8011C6 | FBM-Taste 6:  Taste klemmt | 0 |
| 0x8011C7 | FBM-Taste 7: Taste klemmt | 0 |
| 0x8011C8 | FBM-Taste 8- Taste klemmt | 0 |
| 0x8011C9 | Eject-Taste:  Taste klemmt | 0 |
| 0x8011CA | MODE-Taste:  Taste klemmt | 0 |
| 0x8011CB | TP, AM/FM, TRF-Taste:  Taste klemmt | 0 |
| 0x8011CC | Wippe links-Taste:  Taste klemmt | 0 |
| 0x8011CD | Wippe rechts-Taste:  Taste klemmt | 0 |
| 0x8011CE | ON/OFF-Lautstaerke-Regler: Taste klemmt | 0 |
| 0x8011CF | FBM nicht angeschlossen | 0 |
| 0x8011D0 | Standheizgerät, Glühstift: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011D1 | Standheizgerät, Glühstift: Kurzschluß nach Masse | 0 |
| 0x8011D2 | Standheizgerät, Glühstift: Referenzwiderstand nicht erreicht | 0 |
| 0x8011D3 | Standheizgerät, Brennluftgebläse: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011D4 | Standheizgerät, Brennluftgebläse: Kurzschluß nach Masse | 0 |
| 0x8011D5 | Standheizgerät, Brennluftgebläse: Blockierschutz | 0 |
| 0x8011D6 | Standheizgerät, Brennluftgebläse: Schwergängigkeit | 0 |
| 0x8011D7 | Standheizgerät, Wasserpumpe: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011D8 | Standheizgerät, Wasserpumpe: Kurzschluß nach Masse | 0 |
| 0x8011D9 | Standheizgerät, Umschaltventil: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011DA | Standheizgerät, Umschaltventil: Kurzschluß nach Masse | 0 |
| 0x8011DB | Standheizgerät, Dosierpumpe: Kurschluß nach Plus oder Unterbrechung | 0 |
| 0x8011DC | Standheizgerät, Dosierpumpe: Kurzschluß nach Masse | 0 |
| 0x8011DD | Standheizgerät, Temperatursensor: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011DE | Standheizgerät, Temperatursensor: Kurzschluß nach Masse | 0 |
| 0x8011DF | Standheizgerät: Überspannung erkannt | 1 |
| 0x8011E0 | Standheizgerät: Unterspannung erkannt | 1 |
| 0x8011E1 | Standheizgerät: Überhitzung (Heizgerät verriegelt) | 0 |
| 0x8011E2 | Standheizgerät: Heizgerät verriegelt | 0 |
| 0x8011E3 | Standheizgerät: Steuergerät defekt (RAM,ROM,SW) | 0 |
| 0x8011E4 | Standheizgerät: EOL Checksummenfehler | 0 |
| 0x8011E5 | Standheizgerät, Überhitzungssensor: Signal oberhalb Schwelle | 0 |
| 0x8011E6 | Standheizgerät: Flammabbruch | 0 |
| 0x8011E7 | Standheizgerät: Flammabbruch - wiederholter Abbruch im Heizzyklus | 0 |
| 0x8011E8 | Standheizgerät: Flamme - kein Start | 0 |
| 0x8011E9 | Standheizgerät: Flamme-Start-Kein Start: Keine Flamme im Testbetrieb | 0 |
| 0x8011EA | Standheizgerät: Kraftstoffvorwärmung-Unterbrechung/ Kurzschluß nach Plus | 0 |
| 0x8011EB | Standheizgerät: Kraftstoffvorwärmung-Kurzschluß nach Masse | 0 |
| 0x8011EC | Standheizgerät: LIN-Kommunikation - Bit Error | 1 |
| 0x8011ED | Standheizgerät: LIN-Kommunikation-Baudratedetection fehlgeschlagen | 0 |
| 0x8011EE | Standheizgerät: LIN-Kommunikation-LIN-Time out (-> Notlauf:Abschaltung) | 0 |
| 0x8011EF | Standheizgerät: LIN-Kommunikation - Signal mit Ungültigkeitssignatur | 1 |
| 0x8011F0 | Standheizgerät: Überschreitung der max. Heizzeitvorgabe | 1 |
| 0x8011F1 | Standheizgerät: System-Fehler-Not-Aus wurde angefordert, qualmen möglich | 0 |
| 0x8011F2 | Standheizgerät: Absperrventil-Unterbrechung / Kurzschluß nach Plus | 0 |
| 0x8011F3 | Standheizgerät: Absperrventil-Kurzschluß nach Masse | 0 |
| 0x8011F4 | Standheizgerät: Systembedingte Abschaltung - Verbraucherabschaltung | 1 |
| 0x8011F5 | Standheizgerät: Systembedingte Abschaltung - Tankreserve erreicht | 1 |
| 0x8011F6 | PTC-Modul: Kurzschluß Heizstrang | 0 |
| 0x8011F7 | PTC-Modul: Unterbrechung Heizstrang | 0 |
| 0x8011F8 | PTC-Modul: Übertemperatur an Leiterplatte | 0 |
| 0x8011F9 | PTC-Modul: Interner Komponentenfehler | 0 |
| 0x8011FA | PTC-Modul: Unterspannung | 1 |
| 0x8011FB | PTC-Modul: Überspannung | 1 |
| 0x8011FC | PATT-Modul, Signaleitung; Kurzschluß nach Plus | 0 |
| 0x8011FD | PATT-Modul, Signaleitung: Kurzschluß nach Minus oder Unterbrechung | 0 |
| 0x8011FE | PATT-Modul reagiert nicht oder nicht angeschlossen. (fehlendes Alive-Signal) | 0 |
| 0x8011FF | PATT- irreversible Modulfehler | 0 |
| 0x801200 | PattVersorgung: Kurzschluß gegen Masse | 0 |
| 0x801201 | Patt-Modul: reversibler Fehler | 1 |
| 0x801202 | Gebläseendstufe: Defekte Freilaufdiode | 0 |
| 0x801203 | Gebläseendstufe: Blockierter Motor | 1 |
| 0x801204 | Gebläseendstufe: Kurzschluß im Lastkreis | 0 |
| 0x801205 | Gebläseendstufe: Übertemperatur an Leiterplatte | 1 |
| 0x801206 | Gebläseendstufe: Unter-/Überspannung | 1 |
| 0x801207 | Gebläseendstufe: Unterbrechung im Lastkreis | 0 |
| 0x801208 | Gebläseendstufe: Überlast am Gebläsemotor | 0 |
| 0x801209 | LIN-Bus Versorgung: Kurzschluß gegen Masse | 0 |
| 0x80120A | Autoadressierung (LIN): Autoadressierung fehlgeschlagen | 0 |
| 0x80120B | Innenfühlergebläse: Motor blockiert | 0 |
| 0x80120C | Interner Steuergerätefehler | 1 |
| 0x80120D | Unterspannung erkannt | 1 |
| 0x80120E | Überspannung erkannt | 1 |
| 0x80120F | keine Kommunikation über AC_LIN1 möglich | 1 |
| 0x801210 | keine Kommunikation über AC_LIN2 möglich | 1 |
| 0x801211 | Steuergerät wurde nach dem Flashen nicht codiert | 1 |
| 0x801212 | Die während einer Codierdatentransaktion gesendeten Daten sind unplausibel | 0 |
| 0x801213 | Signatur über Nettocodierdaten ist ungültig | 0 |
| 0x801214 | Steuergerät ist nicht für das Fahrzeugcodiert, in welchen es verbaut ist | 0 |
| 0x801215 | Fehler während der Codierdatentransaktion aufgetreten | 0 |
| 0x801216 | eKMV: Abschaltung wegen Unterspannung HV-Versorgung | 1 |
| 0x801217 | eKMV: Abschaltung wegen Überspannung HV-Versorgung | 1 |
| 0x801219 | eKMV: Leistungsreduzierung wegen Übertemperatur Umrichter | 1 |
| 0x801222 | Kompressor: Abschaltung wegen fehlender DME-Freigabe | 1 |
| 0x801223 | Kompressor: Abschaltung wegen funktionsbedingter Randbedingungen | 1 |
| 0x801224 | Kompressor: Abschaltung wegen Überdruck im Kältemittelkreislauf | 0 |
| 0x801225 | Kompressor: Abschaltung wegen Unterdruck im Kältemittelkreislauf | 0 |
| 0x80123A | Audio Versorgung; Abschaltung wegen Überspannung | 0 |
| 0x80123B | Audio Versorgung; Abschaltung wegen Unterspannung | 0 |
| 0x80123C | Leiterplatte: Hardware Variante kann nicht erkannt werden | 0 |
| 0x801247 | Standkühlen: Abbruch wegen Fehler EKK | 1 |
| 0x801248 | Standkühlen/Erhaltungskühlen: Abbruch / Verhinderung wegen Niedervolt-Powermanagement (Verbraucherabschaltung) | 1 |
| 0x801249 | Standkühlen: Abbruch wegen Hochvoltpowermanagement (HVPM) | 1 |
| 0x80124A | Standkühlen: Standkühlen konnte nicht gestartet wegen Hochvoltpowermanagement (HVPM) | 1 |
| 0x80124B | Standkühlen: Abbruch wegen ungültigem Drucksensorsignal | 1 |
| 0x80124C | Standkühlen: Abbruch wegen Kältemittelabsperrventil | 1 |
| 0x80124D | eKMV: Abschaltung wegen Fehler im Kältemittelabsperrventil Klima | 1 |
| 0x80124E | eKMV: Abschaltung wegen Fehler im Kältemittelabsperrventil Hochvoltspeicher | 1 |
| 0x801251 | eKMV: Abschaltung wegen Anlaufprobleme | 0 |
| 0x801252 | eKMV: interner Komponentenfehler | 0 |
| 0x801253 | eKMV: Leistungsreduzierung vom Kühl- oder Heizbetrieb durch Powermanagement | 1 |
| 0x801254 | eKMV: Leistungsreduzierung der Standklimatisierung durch Powermanagement | 1 |
| 0x801255 | eKK: HV-Versorgung Unter- oder Überspannung | 1 |
| 0x801256 | Standheizgerät: Fremdlicht (Wendel defekt/unterbrochen) oder Glühstift defekt | 0 |
| 0x801257 | Fühler Innentemperatur (unbelüftet, solarkompensiert): Defekt erkannt | 0 |
| 0x801269 | Standheizgerät: Unzureichender Kühlmitteldurchfluss  (Heizwasserkreislauf) | 0 |
| 0x80126A | Standheizgerät: Falsches Heizgerät (Kraftstoffvariante) verbaut | 0 |
| 0x80126B | Standheizgerät: Interner Fehler (Sensoren, Aktoren, Elektronik) | 0 |
| 0x8012C0 | eKMV: HV-Spannungssensor 2 - Kurzschluss nach Minus | 0 |
| 0x8012C1 | eKMV: HV-Spannungssensor 2 - Kurzschluss nach Plus | 0 |
| 0x8012C3 | eKMV: HV-Spannungssensor 2 - oberhalb des spezifizierten Betriebsbereich | 0 |
| 0x8012C4 | eKMV: HV-Spannungssensor 2 - unterhalb des spezifizierten Betriebsbereich | 0 |
| 0x8012C5 | eKMV: HV-Spannungssensor 2 - Plausibilitätsfehler | 0 |
| 0x801380 | EDH: interner EDH-Fehler | 0 |
| 0x801381 | EDH: LIN-Timeout | 1 |
| 0x801382 | EDH: OBD HV-Spannungssensor über Betriebsbereich | 1 |
| 0x801383 | EDH: OBD HV-Spannungssensor unter Betriebsbereich | 1 |
| 0x801384 | EDH: Systemfehler - Kühlmittelfluss | 0 |
| 0x801385 | EDH: OBD Temperaturfühler Platine über Betriebsbereich | 0 |
| 0x801386 | EDH: OBD Temperaturfühler Kühlmittel über Betriebsbereich | 0 |
| 0x801387 | EDH: Degradation | 0 |
| 0x801388 | EDH: OBD Temperaturfühler Platine Kurzschluss zu Masse / Leitung unterbrochen | 0 |
| 0x801389 | EDH: OBD Temperaturfühler Kühlmittel Kurzschluss zu Masse | 0 |
| 0x80138A | EDH: OBD Temperaturfühler Kühlmittel Kurzschluss zu Batterie / Leitung unterbrochen | 0 |
| 0x80138B | EDH: Verriegelung | 0 |
| 0x80138C | EDH: OBD Temperaturfühler Platine unter Betriebsbereich | 0 |
| 0x80138D | EDH: OBD Temperaturfühler Kühlmittel unter Betriebsbereich | 0 |
| 0x80138E | EDH: Niederspannungsfehler/unplausible Prozessorkommunikation | 0 |
| 0x80138F | EDH: Systemfehler - unzulässige Heizanforderung | 0 |
| 0x801390 | EDH: OBD Temperaturfühler Platine Kurzschluss zu Batterie | 0 |
| 0x8013C0 | eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Masse | 0 |
| 0x8013C1 | eKMV: OBD Temperatursensor Platine 1 Kurzschluss zu Batterie | 0 |
| 0x8013C3 | eKMV: OBD Temperatursensor Platine 1 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013C4 | eKMV: OBD Temperatursensor Platine 1 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013C5 | eKMV: OBD Temperatursensor Platine 1 Plausibilität | 0 |
| 0x8013C6 | eKMV: OBD Temperatursensor Platine 2 Kurzschluss zu Masse | 0 |
| 0x8013C7 | eKMV: OBD Temperatursensor Platine 2 Kurzschluss zu Batterie | 0 |
| 0x8013C9 | eKMV: OBD Temperatursensor Platine 2 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013CA | eKMV: OBD Temperatursensor Platine 2 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013CC | eKMV: OBD HV-Spannungssensor Kurzschluss zu Masse / Leitungsunterbrechung | 0 |
| 0x8013CD | eKMV: OBD HV-Spannungssensor Kurzschluss zu Batterie | 0 |
| 0x8013CF | eKMV: OBD HV-Spannungssensor Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013D0 | eKMV: OBD HV-Spannungssensor Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013D1 | eKMV: OBD HV-Spannungssensor Plausibilität | 0 |
| 0x8013D2 | eKMV: OBD Spannung am Motortreiber Kurzschluss nach Masse / Leitungsunterbrechung | 0 |
| 0x8013D3 | eKMV: OBD Spannung am Motortreiber Kurzschluss nach Batterie | 0 |
| 0x8013D5 | eKMV: OBD Spannung am Motortreiber Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013D6 | eKMV: OBD Spannung am Motortreiber Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013D8 | eKMV: OBD Stromsensor Phase 1 Kurzschluss zu Masse / Leitungsunterbrechung | 0 |
| 0x8013D9 | eKMV: OBD Stromsensor Phase 1 Kurzschluss zu Batterie | 0 |
| 0x8013DB | eKMV: OBD Stromsensor Phase 1 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013DC | eKMV: OBD Stromsensor Phase 1 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013DD | eKMV: OBD Stromsensor Phase 1 Plausibilität | 0 |
| 0x8013DE | eKMV: OBD Stromsensor Phase 2 Kurzschluss zu Masse / Leitungsunterbrechung | 0 |
| 0x8013DF | eKMV: OBD Stromsensor Phase 2 Kurzschluss zu Batterie | 0 |
| 0x8013E1 | eKMV: OBD Stromsensor Phase 2 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013E2 | eKMV: OBD Stromsensor Phase 2 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013E3 | eKMV: OBD Stromsensor Phase 2 Plausibilität | 0 |
| 0x8013E4 | eKMV: OBD Stromsensor Phase 3 Kurzschluss zu Masse / Leitungsunterbrechung | 0 |
| 0x8013E5 | eKMV: OBD Stromsensor Phase 3 Kurzschluss zu Batterie | 0 |
| 0x8013E7 | eKMV: OBD Stromsensor Phase 3 Oberhalb des gültigen Wertebereiches | 0 |
| 0x8013E8 | eKMV: OBD Stromsensor Phase 3 Unterhalb des gültigen Wertebereiches | 0 |
| 0x8013E9 | eKMV: OBD Stromsensor Phase 3 Plausibilität | 0 |
| 0x8013EA | eKMV: OBD Speicherfehler RAM | 0 |
| 0x8013EB | eKMV: OBD Speicherfehler ROM | 0 |
| 0x8013EC | eKMV: OBD Speicherfehler EEPROM | 0 |
| 0x8013ED | eKMV: OBD Softwarefehler Laufzeitüberwachung | 0 |
| 0x8013EE | eKMV: OBD Softwarefehler Watchdog | 0 |
| 0x8013EF | eKMV: OBD Fehler Micro-Controller-Peripherie | 0 |
| 0x8013F6 | Funktionsprüfung eKMV (OBD) | 0 |
| 0x8013FA | Micro-Controller Peripherie Fehler (IHKA) | 0 |
| 0x8013FC | ROM/Flash Speicher Fehler (IHKA) | 0 |
| 0x8013FD | EEPROM Speicher Fehler (IHKA) | 0 |
| 0x8013FE | Software Laufzeitfehler (IHKA) | 0 |
| 0x8013FF | Software Watchdogfehler (IHKA) | 0 |
| 0xE7040B | K-CAN Bus: Defekt erkannt | 0 |
| 0xE70414 | K-CAN: Control Module Bus OFF | 0 |
| 0xE7041E | IuK-CAN Control Module Bus OFF | 0 |
| 0xE70BFF | Debug Funktion Netzwerk | 1 |
| 0xE70C1E | AC-LIN-1: Motor Entfrostung antwortet nicht, Bus Error Slave 1 | 0 |
| 0xE70C1F | AC-LIN-1: Motor Belüftung links außen antwortet nicht, Bus Error Slave 2 | 0 |
| 0xE70C20 | AC-LIN-1: Motor Belüftung links mitte antwortet nicht, Bus Error Slave 3 | 0 |
| 0xE70C21 | AC-LIN-1: Motor Belüftung rechts mitte antwortet nicht, Bus Error Slave 4 | 0 |
| 0xE70C22 | AC-LIN-1: Motor Belüftung rechts außen antwortet nicht, Bus Error Slave 5 | 0 |
| 0xE70C23 | AC-LIN-1: Motor Fußraum vorn links antwortet nicht, Bus Error Slave 6 | 0 |
| 0xE70C24 | AC-LIN-1: Motor Fußraum vorn rechts antwortet nicht, Bus Error Slave 7 | 0 |
| 0xE70C25 | AC-LIN-1: Motor Fußraum hinten links antwortet nicht, Bus Error Slave 8 | 0 |
| 0xE70C26 | AC-LIN-1: Motor Fußraum hinten rechts antwortet nicht, Bus Error Slave 9 | 0 |
| 0xE70C27 | AC-LIN-1: Motor Schichtung vorn links antwortet nicht, Bus Error Slave 11 | 0 |
| 0xE70C28 | AC-LIN-1: Motor Schichtung vorn rechts antwortet nicht, Bus Error Slave 12 | 0 |
| 0xE70C29 | AC-LIN-1: Motor Schichtung hinten links antwortet nicht, Bus Error Slave 13 | 0 |
| 0xE70C2A | AC-LIN-1: Motor Schichtung hinten rechts antwortet nicht, Bus Error Slave 14 | 0 |
| 0xE70C2B | AC-LIN-1: Motor Frischluft/Staudruck antwortet nicht, Bus Error Slave 15 | 0 |
| 0xE70C2C | AC-LIN-1: Motor Umluft antwortet nicht, Bus Error Slave 16 | 0 |
| 0xE70C2D | AC-LIN-1: Gebläseendstufe antwortet nicht, Bus Error Gebläseendstufe | 0 |
| 0xE70C2E | AC-LIN-2: PTC-Modul antwortet nicht, Bus Error PTC-Modul | 0 |
| 0xE70C2F | AC-LIN-2: SHZH antwortet nicht, Bus Error SHZH | 0 |
| 0xE70C30 | AC-LIN: eKMV antwortet nicht | 0 |
| 0xE70C31 | AC-LIN-2: eKK LIN BUS Kommunikation gestört | 0 |
| 0xE70C3A | AC-LIN: EDH antwortet nicht | 0 |
| 0xE70C3B | AC-LIN: eKMV antwortet nicht | 0 |
| 0xE71400 | Botschaft (0x2CA, Außentemperatur): Ausfall | 1 |
| 0xE71401 | Botschaft (0x202, Dimmung): Ausfall | 1 |
| 0xE71402 | Botschaft (0x3F9, Daten Antriebsstrang 2): Ausfall | 1 |
| 0xE71403 | Botschaft (0x330, Kilometerstand/Reichweite): Ausfall | 1 |
| 0xE71404 | Botschaft (0x12F, Klemmen): Ausfall | 1 |
| 0xE71405 | Botschaft (0x393, LCD Helligkeit Regelung): Ausfall | 1 |
| 0xE71406 | Botschaft (0x3B3, Powermanagement Verbrauchersteuerung): Ausfall | 1 |
| 0xE71407 | Botschaft (0x3D3, Status Solarsensor): Ausfall | 1 |
| 0xE71408 | Botschaft (0x22A, Status BFS): Ausfall | 1 |
| 0xE71409 | Botschaft (0x2D2 Status Druck Kältekreislauf): Ausfall | 1 |
| 0xE7140A | Botschaft (0x232, Status FAS): Ausfall | 1 |
| 0xE7140B | Botschaft (0x2D1, Status Beschlag Scheibe V): Ausfall | 1 |
| 0xE7140C | Botschaft (0x23E, Status Klima Fond): Ausfall | 1 |
| 0xE7140D | Botschaft (0x2D3, Status Schichtung Fond): Ausfall | 1 |
| 0xE7140E | Botschaft (0x2D0, Status Sensor AUC): Ausfall | 1 |
| 0xE7140F | Botschaft (0x3FA, Status Soll Klima Fond): Ausfall | 1 |
| 0xE71410 | Botschaft (0x2D6, Status Ventil Klimakompressor): Ausfall | 1 |
| 0xE71411 | Botschaft (0x2CF, Status Zusatzwasserpumpe): Ausfall | 1 |
| 0xE71412 | Botschaft (0x2C2, Temperatur Ist Fond): Ausfall | 1 |
| 0xE71413 | Botschaft (0x0A5, Drehmoment Kurbelwelle 1): Ausfall | 1 |
| 0xE71414 | Botschaft (0x1A1, Geschwindigkeit Fahrzeug): Ausfall | 1 |
| 0xE71415 | Botschaft (0x3FB, Daten Antriebsstrang 1): Ausfall | 1 |
| 0xE71416 | Botschaft (0x1B9, Wärmemanagement Motorsteuerung: Ausfall | 1 |
| 0xE71417 | Signal (Temperatur_Außen in 0x2CA): ungültig empfangen | 1 |
| 0xE71418 | Signal (Steuerung_Beleuchtung_Schalter in 0x202): ungültig empfangen | 1 |
| 0xE71419 | Signal (Status_Antrieb_Fahrzeug in 0x3F9): ungültig empfangen | 1 |
| 0xE7141A | Signal (Temperatur_Motor_Antrieb in 0x3F9): ungültig empfangen | 1 |
| 0xE7141B | Signal (Status_Klemme in 0x12F): ungültig empfangen | 1 |
| 0xE7141C | Signal (Status_Solarsensor_BF in 0x3D3): ungültig empfangen | 1 |
| 0xE7141D | Signal (Status_Solarsensor_FA in 0x3D3): ungültig empfangen | 1 |
| 0xE7141E | Signal (Status_Sitzheizung_BF in 0x22A): ungültig empfangen | 1 |
| 0xE7141F | Signal (Status_Sitzklima_BF in 0x22A): ungültig empfangen | 1 |
| 0xE71420 | Signal (Daten_Drucksensor_Kältekreislauf in 0x2D2): ungültig empfangen | 1 |
| 0xE71421 | Signal (Status_Sitzheizung_FA in 0x232): ungültig empfangen | 1 |
| 0xE71422 | Signal (Status_Sitzklima_FA in 0x232): ungültig empfangen | 1 |
| 0xE71423 | Signal (Daten_Beschlag_Scheibe_V in 0x2D1): ungültig empfangen | 1 |
| 0xE71424 | Signal (Status_AC_Fond in 0x23E): ungültig empfangen | 1 |
| 0xE71425 | Signal (Bedienung_Schichtung_FAH in 0x23E): ungültig empfangen | 1 |
| 0xE71426 | Signal (Bedienung_Schichtung_BFH in 0x23E): ungültig empfangen | 1 |
| 0xE71427 | Signal (Daten_Schichtung_Fond_Klima in 0x2D3): ungültig empfangen | 1 |
| 0xE71428 | Signal (Status_Schichtung_Fond_Klima in 0x2D3): ungültig empfangen | 1 |
| 0xE71429 | Signal (Daten_Sensor_AUC in 0x2D0): ungültig empfangen | 1 |
| 0xE7142A | Signal (Temperatur_Soll_BFH in 0x3FA): ungültig empfangen | 1 |
| 0xE7142B | Signal (Temperatur_Soll_FAH in 0x3FA): ungültig empfangen | 1 |
| 0xE7142C | Signal (Status_Klima_Kompressor_Kupplung in 0x2D6): ungültig empfangen | 1 |
| 0xE7142D | Signal (Status_Zusatzwasserpumpe in 0x2CF): ungültig empfangen | 1 |
| 0xE7142E | Signal (Temperatur_Belüftung_FAH in 0x2C2): ungültig empfangen | 1 |
| 0xE7142F | Signal (Temperatur_Belüftung_BFH in 0x2C2): ungültig empfangen | 1 |
| 0xE71430 | Signal (Temperatur_Innen_Fond in 0x2C2): ungültig empfangen | 1 |
| 0xE71431 | Signal (Ist_Drehzahl_Motor_Kurbelwelle in 0x0A5): ungültig empfangen | 1 |
| 0xE71432 | Signal (Geschwindigkeit_Fahrzeug_Schwerpunkt in 0x1A1): ungültig empfangen | 1 |
| 0xE71433 | Signal (Ziel_LCD_Leuchtdichte in 0x393): ungültig empfangen | 1 |
| 0xE71434 | Signal (Dämpfung_LCD_Leuchtdichte in 0x393): ungültig empfangen | 1 |
| 0xE71435 | Signal (Steuerung_Leistung_Verbraucher in 0x3B3): ungültig empfangen | 1 |
| 0xE71436 | Signal (Steuerung_Standverbraucher in 0x3B3): ungültig empfangen | 1 |
| 0xE71437 | Signal (Steuerung_Leistung_Sonderverbraucher in 0x3B3): ungültig empfangen | 1 |
| 0xE71438 | Signal Status_Wärmestrom_DME  in 0x1B9): ungültig empfangen | 1 |
| 0xE71439 | Botschaft (0x3A0, Fahrzeugzustand): Ausfall | 1 |
| 0xE7143A | Botschaft (0x38C, Steuerung Klimakompressor): Ausfall | 1 |
| 0xE7143B | Signal (Freigabe_Klimakompressor in 0x38C): ungültig empfangen | 1 |
| 0xE7143C | Signal (Leistung_Klimakompressor_Maximal in 0x38C): ungültig empfangen | 1 |
| 0xE7143D | Botschaft (0x1FA, Status Hochvoltspeicher 1): Ausfall | 1 |
| 0xE7143E | Signal (Ist_Temperatur_Wärmetauscher_Hochvoltspeicher  in 0x1FA): ungültig empfangen | 1 |
| 0xE7143F | Signal (Anforderung_Kühlung_Hochvoltspeicher in 0x1FA): ungültig empfangen | 1 |
| 0xE71440 | Botschaft (0x389, Status Ventil Hochvoltbatterie-Kühlung): Ausfall | 1 |
| 0xE71441 | Signal (Status_Kälteabsperrventil_Klima in 0x389): ungültig empfangen | 1 |
| 0xE71448 | Botschaft (0x30B, Status Motor Start Auto): Ausfall | 1 |
| 0xE71449 | Signal (Status_Funktion_MSA in 0x30B): ungültig empfangen | 1 |
| 0xE7144A | Botschaft (0x1B2, Status Klima Kälteabsperrventile): Ausfall | 1 |
| 0xE7144B | Signal (Status_Kälteabsperrventil_Front in 0x1B2): ungültig empfangen | 1 |
| 0xE7144C | Signal (Status_Kälteabsperrventil_Fond in 0x1B2): ungültig empfangen | 1 |
| 0xE7144D | Signal (Daten_Temperatur_Scheibe_V in 0x2D1): ungültig empfangen | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5000 | AUSSEN_TEMPERATUR | °C | - | unsigned char | - | 1 | 2 | -40 |
| 0x5001 | KUEHLMITTEL_TEMPERATUR | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x5002 | FUELLSTAND_TANK | Liter | - | unsigned char | - | 1 | 1 | 0 |
| 0x5003 | DRUCKSENSOR_WERT | bar | - | unsigned char | - | 1 | 2 | 0 |
| 0x5005 | DREHZAHL | U/min | - | unsigned char | - | 50 | 1 | 0 |
| 0x5008 | UIF_SENSOR_NR | Nummer | - | unsigned char | - | 1 | 1 | 0 |
| 0x5009 | UIF_FEHLERART | Art | - | unsigned char | - | 1 | 1 | 0 |
| 0x6000 | AUSSEN_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6001 | KUEHLMITTEL_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6003 | TANKINHALT_LINKS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6004 | TANKINHALT_RECHTS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6005 | STANDHEIZUNG_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6006 | BATTERIESPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x780000 | Fehler beim Eeprom Schreiben | 0 |
| 0x780001 | Fehler beim Eeprom  Lesen | 0 |
| 0x780002 | Fehler im Eeprom Control Bereich | 0 |
| 0x780003 | Fehler beim Eeprom Löschen | 0 |
| 0x780004 | Fehler beim Eeprom komplett schreiben | 0 |
| 0x780005 | Fehler beim Eeprom komplett lesen | 0 |
| 0x780006 | Fehler in der Konfigurations-ID des Eeprom | 0 |
| 0x780007 | Botschaft (Sekundenzähler Zeitbotschaft): Ausfall | 1 |
| 0x780008 | Diagnose Master Queue gelöscht | 1 |
| 0x780009 | Diagnose Master Queue voll | 1 |
| 0x78000A | CSM Error Event | 1 |
| 0x78000B | Reset wg. Überschreitung der Tasklaufzeit | 0 |
| 0x78000C | Spannungsreglerabschaltung fehlgeschlagen | 0 |
| 0x78000D | der externe Watchdog hat einen Reset ausgelöst | 0 |
| 0x78000E | es wurde ein Reset wg. des SWI-Interrupts ausgeführt | 0 |
| 0x78000F | es wurde ein Reset wg. des XIRQ-Interrupts ausgeführt | 0 |
| 0x780010 | es wurde ein Reset wg. eines ungültigen OP-Codes ausgeführt | 0 |
| 0x780011 | es wurde ein Reset wg. eines COP-Failure-Interrupts ausgeführt | 0 |
| 0x780012 | es wurde ein Reset wg. des Clock monitor Interrupts ausgeführt | 0 |
| 0x780013 | es wurde ein Reset wg. des CRG PLL lock-Interrupts ausgeführt | 0 |
| 0x780014 | es wurde ein Reset wg. des CRG self-clock mode-Interrupts ausgeführt | 0 |
| 0x780015 | es wurde ein Reset wg. eines nicht erwarteten Interrupts ausgeführt | 0 |
| 0x780016 | das Betriebssystem hat einen Reset wg. eines erkannten Fehlers ausgelöst | 0 |
| 0x780017 | eKK: unzulässige Treiberspannung | 0 |
| 0x780018 | eKK: Temperatursensor Kurzschluß | 0 |
| 0x780019 | eKK: Temperatursensor offen | 0 |
| 0x78001A | eKK: Überstrom | 0 |
| 0x78001B | eKK: Start fehlgeschlagen | 0 |
| 0x780020 | NM-Timeout Timer has abnormally expired outside of the Ready Sleep State | 0 |
| 0x780021 | Fehler im Eeprom Control Bereich | 0 |
| 0x780022 | NVM_E_INTEGRITY_FAILED | 0 |
| 0x780023 | Transmit buffers full | 0 |
| 0x780024 | CAN Interface is in STOPPED mode | 0 |
| 0x780025 | NM initialization has failed  | 0 |
| 0x780026 | Call of CanIf function CanIf_Transmit has failed  | 0 |
| 0x780027 | Another error occurred during a reception or a transmission | 0 |
| 0x780028 | NM transmission path has failed  | 0 |
| 0x780029 | bei der jeweiligen Aktion in der FLS wurden Fehler erkannt | 0 |
| 0x78002A | Flash write failed (HW) | 0 |
| 0x78002B | Flash read failed (HW) | 0 |
| 0x78002C | bei der jeweiligen Aktion in der FLS wurden Fehler erkannt | 0 |
| 0x78002D | MCU_E_CLOCK_FAILURE | 0 |
| 0x78002E | MCU_E_LOCK_FAILURE | 0 |
| 0x78002F | Disabling of watchdog not allowed | 0 |
| 0x780030 | Switching between watchdog modes failed. | 0 |
| 0x780031 | Watchdog drivers mode switch has failed | 0 |
| 0x780032 | Timeout caused by hardware error | 0 |
| 0x780033 | FEE_E_WRITE_FAILED | 0 |
| 0x780034 | Botschaft Fahrzeugzustand (0x3A0): Ausfall | 1 |
| 0x780035 | Start transmission has failed | 0 |
| 0x780036 | Stop transmission has failed | 0 |
| 0x780037 | The service EcuM_KillAllRUNRequests was issued | 0 |
| 0x780038 | Reception of NM messages in “No Communication” mode | 0 |
| 0x780039 | error event occurs when PIA Client has problems reading from or writing to NVRAM | 0 |
| 0x78003A | Alive-supervision has failed and a watchdog reset will occur | 0 |
| 0x78003B | Access to FlexRay CC event id | 0 |
| 0x78003C | Job List Execution lost synchronicity to the FlexRay Global Time | 0 |
| 0x78003D | No/incorrect communication to transceiver. | 0 |
| 0x78003E | sending of a service message failed | 0 |
| 0x78003F | MCU_E_QUARTZ_FAILURE | 0 |
| 0x780040 | MCU_E_LCLOCK_0_FAILURE | 0 |
| 0x780041 | MCU_E_HCLOCK_0_FAILURE | 0 |
| 0x780042 | MCU_E_LOCK_0_FAILURE | 0 |
| 0x780043 | MCU_E_RCCLOCK_0_FAILURE | 0 |
| 0x780044 | MCU_E_LCLOCK_1_FAILURE | 0 |
| 0x780045 | MCU_E_HCLOCK_1_FAILURE | 0 |
| 0x780046 | MCU_E_RCCLOCK_1_FAILURE | 0 |
| 0x780047 | MCU_E_LOCK_1_FAILURE | 0 |
| 0x780048 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0x780049 | MCU_E_TIMEOUT_OSC_STABILITY | 0 |
| 0x78004A | WDG_E_MISS_TRIGGER | 0 |
| 0x78004B | MCU_E_RC_MEASURE | 0 |
| 0x78004C | FLS_E_UNEXPECTED_FLASH_ID | 0 |
| 0x78004D | CANNM_E_NETWORK_TIMEOUT | 0 |
| 0x78004F | FEE_E_CACHE_READ | 0 |
| 0x780050 | FEE_E_GC_ERASE | 0 |
| 0x780051 | FEE_E_GC_READ | 0 |
| 0x780052 | FEE_E_GC_WRITE | 0 |
| 0x780053 | FEE_E_INIT | 0 |
| 0x780054 | FEE_E_INVALIDATE | 0 |
| 0x780055 | FEE_E_READ | 0 |
| 0x780056 | FEE_E_WRITE_CYCLES_EXHAUSTED | 0 |
| 0x780057 | FLS_E_OPER | 0 |
| 0x780058 | FLS_E_PROTECTION_FAILED | 0 |
| 0x780059 | FEE_E_WRITE | 0 |
| 0x78005A | LINIF_DUMMY_SLAVE_SH_ZH | 0 |
| 0x78005B | LINIF_DUMMY_SLAVE_EKK_LIN | 0 |
| 0x78005C | LINIF_DUMMY_SLAVE_EAC | 0 |
| 0x78005D | LIN frame error detected | 0 |
| 0x78005E | If a slave did not answer on a node configuration request | 0 |
| 0x78005F | LINSM_E_CONFIRMATION_TIMEOUT | 0 |
| 0x780060 | SPI_E_RECEIVE_BUFFER_ERROR | 0 |
| 0x780061 | Disabling of watchdog not allowed (e.g. in safety relevant systems) | 0 |
| 0x780063 | eKMV: Alive-Counter-Fehler | 0 |
| 0x8011D0 | Standheizgerät, Glühstift: Kurzschuß nach  Plus oder Unterbrechung | 0 |
| 0x8011D1 | Standheizgerät, Glühstift: Kurzschluß nach Masse | 0 |
| 0x8011D2 | Standheizgerät, Glühstift/Flammwächter: Referenzwiderstand nicht erreicht | 0 |
| 0x8011D3 | Standheizgerät, Brennluftgebläse: Kurzschluss nach Plus oder Unterbrechung | 0 |
| 0x8011D4 | Standheizgerät, Brennluftgebläse: Kurzschluß nach Masse | 0 |
| 0x8011DD | Standheizgerät, Temperatursensor: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x8011DE | Standheizgerät, Temperatursensor: Kurzschluß nach Masse | 0 |
| 0x8011E3 | Standheizgerät: Steuergerät defekt (RAM, ROM, SW) | 0 |
| 0x8011E5 | Standheizgerät, Überhitzungssensor/Temperatursicherung: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801256 | Standheizgerät, Glühstift/Flammwächter: Fremdlicht (Wendel defekt/unterbrochen) | 0 |
| 0x801265 | Standheizgerät, Flammwächter: Kurzschluß nach Plus oder Unterbrechung | 0 |
| 0x801266 | Standheizgerät, Flammwächter: Kurzschluß nach Masse | 0 |
| 0x801267 | Standheizgerät, Überhitzungssensor/Temperatursicherung: Kurzschluß nach Masse | 0 |
| 0x801268 | Standheizgerät: Erneute Flammbildung erfolgreich | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x5000 | AUSSEN_TEMPERATUR | °C | - | unsigned char | - | 1 | 2 | -40 |
| 0x5001 | KUEHLMITTEL_TEMPERATUR | °C | - | unsigned char | - | 1 | 1 | -48 |
| 0x5002 | FUELLSTAND_TANK | Liter | - | unsigned char | - | 1 | 1 | 0 |
| 0x5006 | ERROR_REASON | Nummer | - | unsigned char | - | 1 | 1 | 0 |
| 0x5007 | ERROR_PAR | Nummer | - | unsigned char | - | 1 | 1 | 0 |
| 0x6000 | AUSSEN_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x6001 | KUEHLMITTEL_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -48.0 |
| 0x6003 | TANKINHALT_LINKS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6004 | TANKINHALT_RECHTS | l | High | unsigned char | - | 1.0 | 2.0 | 0.0 |
| 0x6005 | STANDHEIZUNG_TEMPERATUR | °C | High | unsigned char | - | 1.0 | 1.0 | -40.0 |
| 0x6006 | BATTERIESPANNUNG | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 1 | ERROR_HARDWAREVERSION |
| 2 | ERROR_SOFTWAREVERSION |
| 3 | ERROR_STATUS_SHZH |
| 4 | ERROR_SIGNAL_UNGUELTIG |
| 5 | ERROR_VARIANTE |
| 6 | UNDEFINIERTE_WERTEBEREICH |
| 7 | ERROR_TESTLAUF |
| 8 | ERROR_SIGNAL_INVALID |
| 9 | ERROR_STATUS_TESTBETRIEB |
| 10 | ERROR_WASSERTEMPERATUR_UNGUELTIG |
| 11 | ERROR_PWM_BRENNLUFTGEBLAESE |
| 12 | ERROR_PWM_GLUEHSTIFT_UNGUELTIG |
| 13 | ERROR_PWM_GLUEHSTIFT |
| 14 | ERROR_PWM_KRAFTSTOFFVORWAERMUNG_UNGUELTIG |
| 15 | ERROR_PWM_KRAFTSTOFFVORWAERMUNG |
| 16 | ERROR_BETRIEBSMODUS |
| 17 | ERROR_PWM_BRENNLUFTGEBLAESE_UNGUELTIG |
| 18 | ERROR_FUNKTIONSZUSTAND |
| 0xXY | ERROR_UNKNOWN |

### RES_0X2541

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALID_TEXT | TEXT | high | string[16] | - | - | 1.0 | 1.0 | 0.0 | Cal-ID auslesen (hier muss die Cal-ID wie bei Mode $09 (PID $04) ausgegeben werden). |
| STAT_CVN_WERT | HEX | high | unsigned long | - | - | - | - | - | CVN auslesen (hier muss die CVN wie bei Mode $09 (PID $06) ausgegeben werden) |

### RES_0XA111

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENCE_WERT | + | - | - | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Referenznummer Klappenmotors |
| STAT_SUPPLIER_WERT | + | - | - | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Lieferantennummer Klappenmotors |
| STAT_ASIC_WERT | + | - | - | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle ASIC-Nummer Klappenmotors |

### RES_0XA113

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZGERAETEVERRIEGLUNG | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Zustand Heizgeräteverriegelung = 0 = nicht aktiv. Zustand Heizgeräteverriegelung = 1 = aktiv. |

### RES_0XA11B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EDH_VERRIEGELUNG_AKTIV | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Zustand der Verriegelung (aktiv = 1/nicht aktiv = 0. |
| STAT_EDH_VERRIEGELUNG_ZAEHLER_WERT | - | - | + | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der bisher aufgetretenen Schutzverriegelungen an. |

### RES_0XA880

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZH_TESTLAUF_NR | - | - | + | 0-n | high | unsigned char | - | TAB_SH_TESTLAUF | - | - | - | Ausgabe des Ergebnisses des Testlaufs vom Standheizgerät: siehe Tabelle TAB_SH_TESTLAUF |

### RES_0XD15F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE1_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE2_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_STUFE3_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_RECHTS_NR | 0-n | - | int | - | TAB_SH_SL_LED | 1.0 | 1.0 | 0.0 | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD160

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE1_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE2_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_STUFE3_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZHEIZUNG_VORNE_LINKS_NR | 0-n | - | int | - | TAB_SH_SL_LED | 1.0 | 1.0 | 0.0 | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD167

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZLUEFTUNG_VORNE_RECHTS_STUFE1_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_RECHTS_STUFE2_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_RECHTS_STUFE3_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_RECHTS_NR | 0-n | - | int | - | TAB_SH_SL_LED | 1.0 | 1.0 | 0.0 | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD168

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_SITZLUEFTUNG_VORNE_LINKS_STUFE1_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_LINKS_STUFE2_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_LINKS_STUFE3_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_SITZLUEFTUNG_VORNE_LINKS_NR | 0-n | - | int | - | TAB_SH_SL_LED | 1.0 | 1.0 | 0.0 | 0 = LEDs aus, 1 = eine LED ein, 2 = zwei LEDs ein, 3 = drei LEDs ein, 255 = LEDs nicht vorhanden |

### RES_0XD866

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_ZUSATZWASSERPUMPE | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_KLIMA_DISPLAY_EINHEIT_NR | 0-n | - | int | - | TAB_TEMP_EINHEIT | 1.0 | 1.0 | 0.0 | 0 = Celsius,  1 = Fahrenheit |
| STAT_KLIMA_VARIANTE_NR | 0-n | - | int | - | TAB_KLIMAVARIANTE | 1.0 | 1.0 | 0.0 | Klimavariante:  0 = 2-zonig 1 = 2,5-zonig 2 = 4-zonig 3 = 1-zonig |
| STAT_VORHANDEN_EMOTORWASSERPUMPE | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_KOMPRESSORKUPPLUNG | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_PTC_VORN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_UMWAELZPUMPE | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |

### RES_0XD88E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHRITTMOTOR_BLOCKIERUNG_WERT | Fehler | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Blockierung Schrittmotor |
| STAT_SCHRITTMOTOR_ANTWORT_FEHLT_WERT | Fehler | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler Antwort Schrittmotor |
| STAT_SCHRITTMOTOR_INTERNER_FEHLER_WERT | Fehler | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des zuletzt angesteuerten Schrittmotors: Fehlerzähler interner Motorfehler |

### RES_0XD89D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_OUT_WASSERVENTIL_LI_PWM_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert Wasserventil links in Prozent |
| STAT_BUS_OUT_WASSERVENTIL_RE_PWM_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert Wasserventil rechts in Prozent |

### RES_0XD89F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SH_VARIANTE_NR | 0-n | high | unsigned char | - | TAB_SH_KRAFTSTOFFART | 1.0 | 1.0 | 0.0 | Ausgabe der Kraftstoffart des Standheizgerätes: 0x01 Benzin  0x02 Diesel  0x04 RME  0xFF ungültig |
| STAT_UMWAELZPUMPE_VORHANDEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt aus, ob eine Umwälzpumpe direkt am Standheizgerät angschlossen ist: 0 = nicht vorhanden, 1 = vorhanden |
| STAT_UMSCHALTVENTIL_VORHANDEN | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob ein Umschaltventil direkt am Standheizgerät angeschlossen ist: 0 = nicht vorhanden, 1 = vorhanden |

### RES_0XD8B3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SKIP_LINKS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Skip-Taste links: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |
| STAT_SKIP_RECHTS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Skip-Taste rechts: 0 = Taste nicht gedrückt, 1 = Taste gedrückt |

### RES_0XD8BD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EKK_LEISTUNG_WERT | KW | - | int | - | - | 1.0 | 100.0 | 0.0 | Ausgabe der Leistung in KW auf 2 Nachkommastellen genau. Vom SG wird der Wert mit Faktor 100 geliefert und in der SGBD durch 100 dividiert. z.B.: 923 entspricht 9,23 KW. |
| STAT_EKK_STROM_WERT | A | - | char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Stroms der Hochspannung. |
| STAT_EKK_HOCHSPANNUNG_WERT | V | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Hochspannung in Volt. |
| STAT_EKK_NIEDERSPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Ausgabe der Niederspannung in Volt auf eine Nachkommastelle genau. Der Wert wird vom Steuergerät mit dem Faktor 10 geliefert und in der SGBD durch 10 diviert. z.B.: 123 entspricht 12,3 V. |
| STAT_EKK_TEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Ausgabe der Temperatur in Grad Celsius. Das Steuergerät liefert den Wert mit Offset 40. SGBD subtrahiert 40. |
| STAT_EKK_ABSCHALTGRUND_NR | 0-n | - | unsigned char | - | TAB_EKK_ABSCHALTGRUND | 1.0 | 1.0 | 0.0 | Ausgabe des Grunds der Abschaltung des elektrischen Klimakompressors. |
| STAT_EKK_SPANNUNGSBEREICH_NR | 0-n | - | unsigned char | - | TAB_EKK_SPANNUNGSBEREICH | 1.0 | 1.0 | 0.0 | Ausgabe des Status der Niedervoltspannung. |
| STAT_EKK_LEISTUNGSBEGRENZUNG_NR | 0-n | - | unsigned char | - | TAB_EKK_LEISTUNGSBEGRENZUNG | 1.0 | 1.0 | 0.0 | Ausgabe des Grundes der Leistungsbegrenzung. |
| STAT_EKK_BETRIEBSSTATUS_NR | 0-n | - | unsigned char | - | TAB_EKK_BETRIEBSSTATUS | 1.0 | 1.0 | 0.0 | Ausgabe des Betriebsstatus des elektrischen  Klimakompressors. |

### RES_0XD8BF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EKK_DREHZAHL_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Drehzahl in % |

### RES_0XD8C3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EKMV_DREHZAHL_SOLL_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Soll-Drehzahl in % |
| STAT_EKMV_DREHZAHL_IST_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ist-Drehzahl in % |

### RES_0XD8C4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DREHZAHL_WERT | % | high | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Ausgabe der Ist-Drehzahl |
| STAT_LEISTUNG_WERT | kW | high | unsigned char | - | - | 1.0 | 25.0 | 0.0 | Ausgabe der Leistung in KW auf 2 Nachkommastellen genau. Vom SG wird der Wert mit Faktor 25 geliefert und in der SGBD durch 25 dividiert. |
| STAT_STROM_DC_WERT | A | high | unsigned char | - | - | 1.0 | 4.0 | 0.0 | Ausgabe des Stroms der Hochspannung. |
| STAT_HOCHSPANNUNG_WERT | V | high | unsigned char | - | - | 2.0 | 1.0 | 0.0 | Ausgabe der Hochspannung in Volt. |
| STAT_TEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -50.0 | Ausgabe der Temperatur in Grad Celsius. Das Steuergerät liefert den Wert mit Offset 50. SGBD subtrahiert 50. |
| STAT_STROM_AC_WERT | A | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Stroms. |

### RES_0XD8C5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UEBERTEMPERATUR_EIN | 0/1 | high | unsigned int | 0x0001 | - | 1.0 | 1.0 | 0.0 | Begrenzung wegen Übertemperatur, 1 = aktiv |
| STAT_UEBERSTROM_EIN | 0/1 | high | unsigned int | 0x0002 | - | 1.0 | 1.0 | 0.0 | Begrenzung wegen Überstrom, 1 = aktiv |
| STAT_UNTER_UEBERSPANNUNG_EIN | 0/1 | high | unsigned int | 0x0004 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Über-/Unterspannung, 1 = aktiv |
| STAT_ABSCHALTUNG_UEBERTEMP_EIN | 0/1 | high | unsigned int | 0x0008 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen kritischer Übertemperatur, 1 = aktiv |
| STAT_ABSCHALTUNG_DREHMOMENT_EIN | 0/1 | high | unsigned int | 0x0010 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Drehmomentüberschreitung, 1 = aktiv |
| STAT_ABSCHALTUNG_KOMMFEHLER_EIN | 0/1 | high | unsigned int | 0x0020 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen LIN-Kommuniaktionsfehler, 1 = aktiv |
| STAT_ABSCHALTUNG_VERSORGUNGSFEHLER_EIN | 0/1 | high | unsigned int | 0x0040 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen externem Versorgungsfehler, 1 = aktiv |
| STAT_ABSCHALTUNG_INVFEHLER_EIN | 0/1 | high | unsigned int | 0x0080 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Fehler Inverterversorgung, 1 = aktiv |
| STAT_ABSCHALTUNG_SENSORIK_EIN | 0/1 | high | unsigned int | 0x0100 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Fehler in Sensorik: Temperatur- oder Phasenstromsensor defekt, 1 = aktiv |
| STAT_ABSCHALTUNG_KURZSCHLUSS_EIN | 0/1 | high | unsigned int | 0x0200 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Kurzschluss, 1 = aktiv |
| STAT_ABSCHALTUNG_ANLAUFFEHLER_EIN | 0/1 | high | unsigned int | 0x0400 | - | 1.0 | 1.0 | 0.0 | Abschaltung wegen Anlauffehler, 1 = aktiv |
| STAT_BETRIEB_NR | 0-n | high | unsigned int | 0x3800 | TAB_BETRIEBSSTATUS_EKMVGEN20 | 1.0 | 1.0 | 0.0 | Status zum Betrieb |
| STAT_KOMMUNIKATION | 0/1 | high | unsigned int | 0x4000 | - | 1.0 | 1.0 | 0.0 | Status der Kommunikation, 0 = kein Fehler, 1 = Fehler aktiv |
| STAT_KOMMUNIKATION_2 | 0/1 | high | unsigned int | 0x8000 | - | 1.0 | 1.0 | 0.0 | Status der Kommunikation 2, 0 = kein Fehler, 1 = Fehler aktiv |

### RES_0XD8C7

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AKS_EKMV | 0-n | high | unsigned char | - | TAB_AKS_EKMV | 1.0 | 1.0 | 0.0 | Ergebnis der Isolationsprüfung: 0 = kein aktiver Kurzschluss 1 = aktiver Kurzschluss Low-Side 2 = aktiver Kurzschluss High-Side |

### RES_0XD8CC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZH_FUNKTIONSZUSTANDS_NR | 0-n | high | unsigned char | - | TAB_SH_FUNKTIONSZUSTAND | - | - | - | Funktionszustands des Standheizgerätes: siehe Tabelle TAB_SH_FUNKTIONSZUSTAND |
| STAT_WIDERSTAND_GLUEHSTIFT_WERT | mOhm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Widerstand Glühstift: 0xFFFF = Signal ungültig |
| STAT_BETRIEBSSPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 10000.0 | 0.0 | Betriebsspannung: 0xFF = Signal ungültig |
| STAT_WASSERTEMPERATUR_WERT | °C | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Wassertemperatur: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_PWM_GLUEHSTIFT_WERT | % | high | unsigned char | - | - | 0.5 | 1.0 | 0.0 | PWM Glühstift: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_FREQUENZ_DOSIERPUMPE_WERT | Hz | high | unsigned char | - | - | 0.05 | 1.0 | 0.0 | Frequenz Dosierpumpe: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_DREHZAHL_BRENNLUFTGEBLAESE_WERT | 1/min | high | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Drehzahl Brennluftgebläse: 0xFE = Fehler 0xFF = Signal ungültig |
| STAT_SHZH_BETRIEBSZUSTAND_NR | 0-n | high | unsigned char | - | TAB_SH_BETRIEBSZUSTAND | - | - | - | Betriebszustände Standheizgerät: siehe Tabelle TAB_SH_BETRIEBSZUSTAND |
| STAT_WASSERPUMPE_WERT | % | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Falls die Pumpe an der Standheizung angebracht ist, wird der aktuelle Zustand der Wasserpumpe angezeigt. 0 % = Pumpe ausgeschaltet ... 100 % = Pumpe eingeschaltet (maximal) 130 % =  nicht verbaut  140 % = Fehler 150 % = Signal ungültig |
| STAT_UMSCHALTVENTIL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hierin ist der aktuelle Zustand des Umschaltventils (Magnetventils) ablesbar. Dies ist jedoch nur möglich, falls ein Magnetventil an der Standheizung angebracht und codiert ist. Falls das Ventil nicht an der SHZH verbaut ist, wird  nicht verbaut  gemeldet. 0 %: Grosser Kreislauf 100 %: Kleiner Kreislauf (Standheizbetrieb) 253 %:  nicht verbaut  254 %: Fehler 255 %: Signal ungültig |
| STAT_HEIZLEISTUNG_WERT | % | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Status der Heizleistung des Heizgeräts.  0 %: Heizung aus ... 100 %: Heizung ein (maximum) 140 %: Fehler 150 %: Signal ungültig |

### RES_0XD8CD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMPERATUR_WASSERAUSTRITT_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | Temperatur des Heizwassers am Wasseraustritt des elektrischen Durchlauferhitzers. |
| STAT_STROM_WERT | A | high | unsigned int | - | - | 0.2 | 1.0 | 0.0 | Stromaufnahme (hochvoltseitig) des elektrischen Durchlauferhitzers. |
| STAT_HOCHVOLTSPANNUNG_WERT | V | high | unsigned int | - | - | 2.0 | 1.0 | 0.0 | Hochvoltspannung gemessen am elektrischen Durchlauferhitzers. |
| STAT_ZAEHLER_VERRIEGELUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verriegelungszähler des elektrischen Durchlauferhitzers. |

### RES_0XD913

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIPPE_VORN_LINKS_PLUS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |
| STAT_WIPPE_VORN_LINKS_MINUS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |

### RES_0XD915

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_VORN_LUFTVERTEILUNG_LINKS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |
| STAT_TASTE_VORN_LUFTVERTEILUNG_RECHTS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |

### RES_0XD918

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINLAUFSCHUTZ_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Status Einlaufschutz: 0 = Einlaufschutz abgeschlossen 1 = Einlaufschutz noch gesetzt |

### RES_0XD91A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_LUFTVERTEILUNG_LINKS_NR | 0-n | - | int | - | TAB_LUFTVERTEILUNG | 1.0 | 1.0 | 0.0 | 1=UNTEN; 2=MITTE; 3=MITTE_UNTEN; 5=OBEN_UNTEN (Nur Fahrer); 8=AUTO; 32=INDIVIDUAL; 40=SONDERPROGRAMM; 255=UNGUELTIG (BASIS); |
| STAT_KLIMA_VORN_LUFTVERTEILUNG_RECHTS_NR | 0-n | - | int | - | TAB_LUFTVERTEILUNG | 1.0 | 1.0 | 0.0 | 1=UNTEN; 2=MITTE; 3=MITTE_UNTEN; 5=OBEN_UNTEN (Nur Fahrer); 8=AUTO; 32=INDIVIDUAL; 40=SONDERPROGRAMM; 255=UNGUELTIG (BASIS); |

### RES_0XD91C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_GEBLAESESTUFE_ANZ_LI_WERT | Stufe | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Anzeige der aktuellen Gebläsestufe links. |
| STAT_KLIMA_VORN_GEBLAESESTUFE_ANZ_RE_WERT | Stufe | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Anzeige der aktuellen Gebläsestufe rechts. |

### RES_0XD923

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LED_VORN_AUTO_LINKS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |
| STAT_LED_VORN_AUTO_RECHTS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | LED: 0 = AUS, 1 = EIN |

### RES_0XD929

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_KLAPPEN_PRG_LINKS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet |
| STAT_KLIMA_VORN_KLAPPEN_PRG_RECHTS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Status Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet |

### RES_0XD935

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_PRG_GEBL_AUTO_LI_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Automatikprogramm-Gebläse: 0 = AUS, 1 = EIN |
| STAT_KLIMA_VORN_PRG_GEBL_AUTO_RE_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Automatikprogramm-Gebläse: 0 = AUS, 1 = EIN |

### RES_0XD937

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORN_PRG_KLIMASTIL_LINKS_WERT | Stufe | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Soft-Intense-Einstellung links in Stufen: 1 - 7 |
| STAT_KLIMA_VORN_PRG_KLIMASTIL_RECHTS_WERT | Stufe | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der Soft-Intense-Einstellung rechts in Stufen: 1 - 7 |

### RES_0XD93B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_VORN_AUTO_LINKS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |
| STAT_TASTE_VORN_AUTO_RECHTS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |

### RES_0XD93E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIPPE_VORN_RECHTS_PLUS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |
| STAT_WIPPE_VORN_RECHTS_MINUS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |

### RES_0XD941

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_DEFROST_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_DEFROST_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0...100 |

### RES_0XD942

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0..100% (127 = gelesener Wert ungültig, 255=Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0 ... 100 % |

### RES_0XD943

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD944

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0...100 |

### RES_0XD945

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_LI_AUSSEN_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_LI_AUSSEN_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0...100 |

### RES_0XD946

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_BELUEFTUNG_RE_AUSSEN_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_BELUEFTUNG_RE_AUSSEN_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert der Klappenstellung: 0...100 |

### RES_0XD947

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FUSSRAUM_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FUSSRAUM_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD948

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FUSSRAUM_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_ISTPOS_FUSSRAUM_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FUSSRAUM_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |
| STAT_KLP_SOLLPOS_FUSSRAUM_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD949

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHTUNG_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHTUNG_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FRISCHLUFT_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FRISCHLUFT_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_UMLUFT_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_UMLUFT_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FUSS_FOND_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FUSS_FOND_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD94F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_FUSS_FOND_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_ISTPOS_FUSS_FOND_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_FUSS_FOND_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |
| STAT_KLP_SOLLPOS_FUSS_FOND_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD951

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHT_FOND_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHT_FOND_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD952

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLP_ISTPOS_SCHICHT_FOND_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_ISTPOS_SCHICHT_FOND_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Istwert Klappenöffnung; 0...100  (127 = gelesener Wert ungültig, 255 = Klappe nicht vorhanden) |
| STAT_KLP_SOLLPOS_SCHICHT_FOND_LI_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |
| STAT_KLP_SOLLPOS_SCHICHT_FOND_RE_WERT | % | - | int | - | - | 1.0 | 1.0 | 0.0 | Sollwert Klappenstellung: 0...100 |

### RES_0XD953

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERLAUF_NR | 0-n | - | int | - | TAB_STATUS_KALIBRIERLAUF | 1.0 | 1.0 | 0.0 | 0 = in diesem Klemmenzyklus noch nicht gestartet, 1 = Kalibrierlauf läuft gerade, 2 = Kalibrierlauf abgeschlossen |
| STAT_KALIBRIERLAUF_ERGEBNIS | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0 = Kalibrierlauf abgeschlossen NIO, 1 = Kalibierlauf abgeschlossen IO und Daten gespeichert; Das Ergebnis bezieht sich auf den zuletzt durchgeführten Kalibrierlauf. Das Ergebnis darf nur im Anschluss eines vollständig durchlaufenen Kalibrierlaufs abgespeichert werden. |
| STAT_MOTOR_1_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_2_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_3_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_4_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_5_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_6_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_7_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_8_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_9_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_10_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_11_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_12_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_13_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_14_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_15_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_16_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_17_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_18_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_19_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |
| STAT_MOTOR_20_NR | 0-n | - | int | - | TAB_KALIB_ERG | 1.0 | 1.0 | 0.0 | 0 = Kalibrierung NIO, 1 = Kalibrierung IO, 2 = Klappe nicht verbaut |

### RES_0XD95A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VORHANDEN_WASSERVENTIL_MONO | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |
| STAT_VORHANDEN_WASSERVENTIL_DUO | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=nicht vorhanden, 1=vorhanden |

### RES_0XD95F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WIPPE_VORN_PLUS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |
| STAT_WIPPE_VORN_MINUS_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | 0=Taste nicht betätigt, 1=Taste betätigt |

### RES_0XD962

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_SOLARSENSOR_LINKS_WERT | W/m² | - | int | - | - | 1.0 | 1.0 | 0.0 | Solarsensor |
| STAT_BUS_IN_SOLARSENSOR_RECHTS_WERT | W/m² | - | int | - | - | 1.0 | 1.0 | 0.0 | Solarsensor |

### RES_0XD977

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMA_VORNE_SOLLTEMP_LINKS_WERT | °C | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der eingestellten Sollwert-Temperatur links. |
| STAT_KLIMA_VORNE_SOLLTEMP_RECHTS_WERT | °C | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe der eingestellten Sollwert-Temperatur rechts. |

### RES_0XD97B

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE1_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 1 |
| STAT_SLAVE2_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 2 |
| STAT_SLAVE3_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 3 |
| STAT_SLAVE4_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 4 |
| STAT_SLAVE5_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 5 |
| STAT_SLAVE6_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 6 |
| STAT_SLAVE7_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 7 |
| STAT_SLAVE8_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 8 |
| STAT_SLAVE9_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 9 |
| STAT_SLAVE10_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 10 |
| STAT_SLAVE11_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 11 |
| STAT_SLAVE12_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 12 |
| STAT_SLAVE13_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 13 |
| STAT_SLAVE14_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 14 |
| STAT_SLAVE15_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 15 |
| STAT_SLAVE16_ADR_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe Adresse Slave 16 |
| STAT_MOT_0X3F_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | Verfügbarkeit des Slaves mit der Adresse 0x3F (63 dez): 0x00 = Slave mit Adresse 0x3F verbaut, 0xFF = Slave mit Adresse 0x3F nicht verbaut |
| STAT_FEHLERSTATUS_WERT | - | - | int | - | - | 1.0 | 1.0 | 0.0 | 0 = kein Fehler, 255 = unbekannter Fehler |

### RES_0XD97F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENDLAGESCHALTER_SCHICHTUNG_LI_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des Endlageschalters an der Schichtungsklappe Seitengrill links: 0 = AUS, 1 = EIN |
| STAT_ENDLAGESCHALTER_SCHICHTUNG_LI_MITTE_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des Endlageschalters an der Schichtungsklappe Mittelgrill links: 0 = AUS, 1 = EIN |
| STAT_ENDLAGESCHALTER_SCHICHTUNG_RE_MITTE_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des Endlageschalters an der Schichtungsklappe Mittelgrill rechts: 0 = AUS, 1 = EIN |
| STAT_ENDLAGESCHALTER_SCHICHTUNG_RE_EIN | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Status des Endlageschalters an der Schichtungsklappe Seitengrill rechts: 0 = AUS, 1 = EIN |

### RES_0XD980

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERSTELLBEREICH_KLAPPE1_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE2_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE3_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE4_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE5_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE6_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE7_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE8_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE9_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE10_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE11_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE12_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE13_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE14_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE15_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE16_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE17_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE18_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE19_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |
| STAT_VERSTELLBEREICH_KLAPPE20_WERT | Inkremente | - | int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Verstellbereiches in Inkrementen. |

### RES_0XD983

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PTC_MODUL_SPANNUNG_WERT | V | - | int | - | - | 1.0 | 10.0 | 0.0 | Ausgabe der Spannung am PTC-Modul auf 10-tel Volt genau. |
| STAT_PTC_MODUL_STROM_WERT | A | - | int | - | - | 1.0 | 1.0 | 0.0 | Ausgabe des Gesamtstroms der Heizwendel im PTC-Modul auf 1 Ampere genau. |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_CALCVN | 0x2541 | - | Cal-ID (Calibration-ID) und CVN(Calibration Verification Number) auslesen. (OBD-Umfänge)   Byte-Layout: 20 Byte lang 00-15 = STAT_CALID_WERT 16-19 = STAT_CVN_EINH als Hex  unit32 im Intel Format | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2541 |
| KLAPPENMOTOR_IDENT | 0xA111 | - | Auslesen der herstellerspezifischen Daten eines  Klappenmotors. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA111 | RES_0xA111 |
| SHZH_STEUERGERAET_RESET | 0xA112 | - | Ausführen eines Resets im Steuergerät des Standheizgerätes. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHZH_VERRIEGELUNG | 0xA113 | - | Setzen- und Rücksetzen der Produktions- und Überhitzungsverriegeung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA113 |
| SHZH_KT_DOSIERPUMPE | 0xA114 | - | Ansteuerung der Dosierpumpe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA114 | - |
| SHZH_KT_WASSERPUMPE | 0xA115 | - | Ansteuerung der Wasserpumpe am Standheizgerät | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA115 | - |
| SHZH_KT_UMSCHALTVENTIL | 0xA116 | - | Ansteuerung des Umschaltventils | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA116 | - |
| SHZH_PRUEFBETRIEB | 0xA119 | - | Prüfbetrieb Standheizung. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SHZH_NORMALBETRIEB | 0xA11A | - | Normalbetrieb Standheizung. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| EDH_VERRIEGELUNG | 0xA11B | - | Steuern der Schutzverriegelung des eDH. | - | AC-Lin-Signal eDH: Fehler_Status_Verriegelung_eDH_LIN - ERR_ST_LOKG_eDH_LIN = 1 | - | - | - | - | - | - | - | 31 | - | RES_0xA11B |
| SHZH_TESTLAUF | 0xA880 | - | Testlauf Standheizgerät. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA880 |
| TASTER_FBM_1_SENS_EIN | 0xD144 | STAT_TASTER_FBM_1_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_2_SENS_EIN | 0xD152 | STAT_TASTER_FBM_2_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_3_SENS_EIN | 0xD153 | STAT_TASTER_FBM_3_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_1_EIN | 0xD155 | STAT_TASTER_FBM_1_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_2_EIN | 0xD156 | STAT_TASTER_FBM_2_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_3_EIN | 0xD157 | STAT_TASTER_FBM_3_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_4_EIN | 0xD158 | STAT_TASTER_FBM_4_EIN | 0 = Taste nicht betätigt; 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_5_EIN | 0xD159 | STAT_TASTER_FBM_5_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_6_EIN | 0xD15A | STAT_TASTER_FBM_6_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_7_EIN | 0xD15B | STAT_TASTER_FBM_7_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_8_EIN | 0xD15C | STAT_TASTER_FBM_8_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_LINKS | 0xD15D | STAT_TASTER_SITZHEIZUNG_VORNE_LINKS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_RECHTS | 0xD15E | STAT_TASTER_SITZHEIZUNG_VORNE_RECHTS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_LED_RECHTS | 0xD15F | - | Status LED-Anzeige Sitzheizung vorne rechts | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD15F |
| SITZHEIZUNG_VORNE_LED_LINKS | 0xD160 | - | Status LED-Anzeige Sitzheizung vorne links | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD160 |
| SITZLUEFTUNG_VORNE_TASTER_LINKS | 0xD165 | STAT_TASTER_SITZLUEFTUNG_VORNE_LINKS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZLUEFTUNG_VORNE_TASTER_RECHTS | 0xD166 | STAT_TASTER_SITZLUEFTUNG_VORNE_RECHTS_EIN | 0 = Taste nicht betätigt, 1 = Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZLUEFTUNG_VORNE_LED_RECHTS | 0xD167 | - | Ausgabe des Status der LEDs für die Anzeige der Einstellung der Sitzbelüftung vorn rechts. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD167 |
| SITZLUEFTUNG_VORNE_LED_LINKS | 0xD168 | - | Ausgabe des Status der LEDs für die Anzeige der Einstellung der Sitzbelüftung vorn links. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD168 |
| TASTER_FBM_4_SENS_EIN | 0xD16D | STAT_TASTER_FBM_4_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_5_SENS_EIN | 0xD16E | STAT_TASTER_FBM_5_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_6_SENS_EIN | 0xD16F | STAT_TASTER_FBM_6_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_7_SENS_EIN | 0xD590 | STAT_TASTER_FBM_7_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTER_FBM_8_SENS_EIN | 0xD591 | STAT_TASTER_FBM_8_SENS_EIN | 0 = Taste nicht berührt, 1 = Taste berührt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_FBM_SENS_TASTEN | 0xD592 | - | FBM-Sensorik | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD592 | - |
| STEUERN_FBM_TASTEN | 0xD593 | - | Simulation der Betätigung der FBM-Tasten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD593 | - |
| STEUERN_SL_TASTEN | 0xD596 | - | Simulation der Betätigung der Tasten für die Sitzlüftung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD596 | - |
| FBM_TASTEN_VORHANDEN_WERT | 0xD599 | STAT_FBM_TASTEN_VORHANDEN_WERT | Gibt aus, wieviele FBM-Tasten verbaut sind: 0 = keine FBM-Tasten verbaut, 1 = 1 Taste verbaut, 2 = 2 Tasten verbaut, N = n Tasten verbaut | Tasten | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_SH_TASTEN | 0xD5A0 | - | Simulation der Betätigung der Tasten für die Sitzheizung. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD5A0 | - |
| TEMP_INNEN_UNGEDAEMPFT_WERT | 0xD85B | STAT_TEMP_INNEN_UNGEDAEMPFT_WERT | Temperaturfühler Innen ungedämpft | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_INNEN_GEDAEMPFT_WERT | 0xD85D | STAT_TEMP_INNEN_GEDAEMPFT_WERT | Temperaturfühler Innen gedämpft | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_WT_RE_WERT | 0xD85E | STAT_TEMP_WT_RE_WERT | Temperatur Wärmetauscher rechts | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| POTI_SCHICHTUNG_LINKS_WERT | 0xD85F | STAT_POTI_SCHICHTUNG_LINKS_WERT | Potentiometer Schichtung Belüftung links: 0 ... 100% | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KONFIGURATION_KLIMA_VORN | 0xD866 | - | Konfiguration der Klimaanlage vorn | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD866 |
| VORHANDEN_PATT | 0xD869 | STAT_VORHANDEN_PATT | Automatische Selbstreinigung 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_KLAPPENMOTOR_VORN | 0xD86E | - | Aufruf für Ansteuerung der einzelnen Schrittmotore auf beliebige Öffnung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD86E | - |
| STEUERN_KLIMA_TASTEN_VORN | 0xD86F | - | Tasten Klimabedienfeld | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD86F | - |
| STEUERN_BEDIENUNG_TEMP | 0xD875 | - | Simuliert die Einstellung der Temperatur am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD875 | - |
| STEUERN_GEBLAESE | 0xD877 | - | Ansteuern der Gebläseendstufe. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD877 | - |
| STEUERN_LEDS_TESTEN | 0xD87E | - | Aufruf zur Testansteuerung von LED-Gruppen | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD87E | - |
| STEUERN_MOTOREN_KALIBRIERLAUF | 0xD88D | - | Kalibrierung der Schrittmotore. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| SCHRITTMOTOR_FEHLER | 0xD88E | - | Abfrage der Schrittmotor-Fehler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD88E |
| STEUERN_SELBSTTEST_SCHRITTMOTOREN | 0xD88F | - | Aufruf startet den Selbsttest der Schrittmotoren. Alle Motore werden auf 50% angefahren und anschließend geprüft, ob die Position ereicht worden ist. Das Ergebnis kann mit dem Service SELBSTTEST_SCHRITTMOTOREN abgefragt werden. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| STEUERN_DISPLAY_TESTEN | 0xD89A | - | Steuert das Display mit Bitmustern an. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD89A | - |
| BUS_OUT_WASSERVENTIL_PWM_WERT | 0xD89D | - | Bussignal Duo Wasserventil | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD89D |
| SHZH_KONFIGURATION | 0xD89F | - | Ausgabe der Konfiguration des Standheizgerätes. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD89F | RES_0xD89F |
| STEUERN_PTC_MODULE_VORN | 0xD8A0 | - | Job zur Aktivierung des PTC-Moduls vorne ohne die erforderlichen Randbedingungen, wie z.B. Energiemanagement, Energieverteilungsalgoritmus. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8A0 | - |
| POTI_SCHICHTUNG_RECHTS_WERT | 0xD8A1 | STAT_POTI_SCHICHTUNG_RECHTS_WERT | Potentiometer Schichtung Belüftung rechts: 0 ... 100% | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOLARSENSOR_VORHANDEN | 0xD8AB | STAT_VORHANDEN_SOLARSENSOR_EIN | Solarsensor: 0 = nicht vorhanden / codiert; 1 = vorhanden / codiert | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUC_SENSOR_VORHANDEN | 0xD8AC | STAT_VORHANDEN_AUC_SENSOR | AUC-Sensor: 0 = nicht vorhanden; 1 = vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_TASTE_MODE_EIN | 0xD8B0 | STAT_TASTE_MODE_EIN | Ausgabe Status MODE-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_TASTE_EJECT_EIN | 0xD8B1 | STAT_TASTE_EJECT_EIN | Ausgabe Status EJECT-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_TASTE_TP_AM_FM_TRF_EIN | 0xD8B2 | STAT_TASTE_TP_AM_FM_TRF_EIN | Ausgabe Status TP/AM/FM/TRF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUDIO_SKIP_EIN | 0xD8B3 | - | Auflisten Status Skip-Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8B3 |
| AUDIO_TASTE_ON_OFF_EIN | 0xD8B4 | STAT_TASTE_ON_OFF_EIN | Ausgabe Status ON/OFF-Taste: 0 = Taste nicht gedrückt, 1 = Taste gedrückt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_AUDIO_TASTEN | 0xD8B5 | - | Job zur Simulation der Betätigung der Audiotasten. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8B5 | - |
| STATUS_EKK_LIN | 0xD8BD | - | Ausgabe der Stati vom elektrischen Klimakompressor. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8BD |
| EKK_DREHZAHL | 0xD8BF | - | Ausgabe oder Vorgabe der Drehzahl vom elektrischen Klimakompressor  in Prozent. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8BF | RES_0xD8BF |
| EKK_DREHZAHLERHOEHUNG | 0xD8C2 | STAT_EKK_DREHZAHLERHOEHUNG_EIN | Drehzahlerhöhung EKK 0=AUS, 1=EIN | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EKMV_DREHZAHL_GEN20 | 0xD8C3 | - | Drehzahl Kältemitteldichter | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD8C3 | RES_0xD8C3 |
| EKMV_ANALOGWERTE_GEN20 | 0xD8C4 | - | Analogwertewerte von Kältemittelverdichter Gen. 2.0 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8C4 |
| EKMV_BETRIEBSZUSTAND_GEN20 | 0xD8C5 | - | Betriebszustände von Kältemittelverdichter Gen. 2.0 | bit | - | - | BITFIELD | RES_0xD8C5 | - | - | - | - | 22 | - | - |
| EKMV_RESET_GEN20 | 0xD8C6 | - | Reset Kältemittelverdichter Gen. 2.0 | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD8C6 | - |
| EKMV_AKS_GEN20 | 0xD8C7 | - | Isolationsprüfung eKMV | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD8C7 | RES_0xD8C7 |
| SHZH_STATUS | 0xD8CC | - | Status Standheizgerät | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8CC |
| EDH_STATUS | 0xD8CD | - | Statuswerte elektrischer Durchlauferhitzer | - | AC-LIN-Signal eDH:  Status_Temperatur_Ausgang_eDH_LIN - ST_TEMP_OUT_eDH_LIN | - | - | - | - | - | - | - | 22 | - | RES_0xD8CD |
| BUS_IN_KUEHLMITTELTEMPERATUR | 0xD8D4 | STAT_BUS_IN_KUEHLMITTEL_MOTOR_TEMP_WERT | Kühlmitteltemperatur Motor | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SOLLWERT_PTC_MODUL_VORN | 0xD902 | STAT_SOLLWERT_PTC_WERT | Sollwert in Prozent 0 - 100 % | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_OUT_ZUSATZWASSERPUMPE_EIN | 0xD904 | STAT_BUS_OUT_ZUSATZWASSERPUMPE_EIN | Zusatzwasserpumpenstatus: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TIMER_EINLAUFSCHUTZ | 0xD905 | STAT_TIMER_EINLAUFSCHUTZ_WERT | Restzeit des Einlaufschutzes in Sekunden | s | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_PATT | 0xD907 | - | Aktivierung PATT (ohne Randbedingungen) | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD907 | - |
| VORHANDEN_FONDKLIMA | 0xD90A | STAT_VORHANDEN_FONDKLIMA | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_HECKKLIMA | 0xD90B | STAT_VORHANDEN_HECKKLIMA | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_HHS_EIN | 0xD90C | STAT_TASTE_VORN_HHS_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_AUTO_EIN | 0xD90D | STAT_TASTE_VORN_AUTO_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZHEIZUNG_VORNE_TASTER_VORHANDEN | 0xD90E | STAT_VORHANDEN_SITZHEIZUNG_TASTER_VORNE | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SITZLUEFTUNG_VORN_TASTER_VORHANDEN | 0xD90F | STAT_VORHANDEN_SITZLUEFTUNG_TASTER_VORNE | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_KLIMA_AC_EIN | 0xD910 | STAT_TASTE_VORN_KLIMA_AC_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_MAX_AC_EIN | 0xD911 | STAT_TASTE_VORN_MAX_AC_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_STANDHEIZUNG | 0xD912 | STAT_VORHANDEN_STANDHEIZUNG | 0=nicht vorhanden 1=vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WIPPE_VORN_LINKS_PLUS_MINUS | 0xD913 | - | Auflisten des Status der Tasten am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD913 |
| TASTE_VORN_LUFTVERTEILUNG_EIN | 0xD914 | STAT_TASTE_VORN_LUFTVERTEILUNG_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_LUFTVERTEILUNG_LI_RE_EIN | 0xD915 | - | Auflistung des Status der Tasten am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD915 |
| STATUS_PATT | 0xD917 | STAT_PATT_FUNKTION_NR | Funktionszustände PATT:  0 = WARTENAUFPATTBETRIEB,   1 = VORBEREITUNGOZONISIERUNG,   2 = OZONISIERUNGBETRIEB,   3 = ABBAUBETRIEB,   4 = AUSBLASBETRIEB  5 = PATTZYKLUSABGESCHLOSSEN,   6 = KLAPPENPOSITIONSLAUF | 0-n | - | - | int | TAB_PATT_FUNKTION | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| EINLAUFSCHUTZ_KOMPRESSOR | 0xD918 | - | Ausgabe des Status des Einlaufschutzes für den Klimakompressor oder schreiben des  neuen Status. Erst nach vollständigem Einlauf  wird dieser Status zurückgesetzt. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD918 | RES_0xD918 |
| KLIMA_VORN_LUFTVERTEILUNG | 0xD919 | STAT_KLIMA_VORN_LUFTVERTEILUNG_NR | 1=UNTEN; 2=MITTE; 3=MITTE_UNTEN; 5=OBEN_UNTEN (Nur Fahrer); 8=AUTO; 32=INDIVIDUAL; 40=SONDERPROGRAMM; 255=UNGUELTIG (BASIS); | 0-n | - | - | int | TAB_LUFTVERTEILUNG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_LUFTVERTEILUNG_LI_RE | 0xD91A | - | Ausgabe des Status der Luftverteilung vorne. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD91A |
| KLIMA_VORN_GEBLAESESTUFE_ANZ_LI_RE | 0xD91C | - | Ausgabe des Werts der Gebläsestufenanzeige für links und rechts im Display des Bedienteils. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD91C |
| BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | 0xD91D | STAT_BUS_OUT_KLIMAKOMPRESSOR_PWM_WERT | Signal für die Anforderung der Kompressorleistung in PWM | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_KLIMA_EIN | 0xD91E | STAT_LED_VORN_KLIMA_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_UMLUFT_EIN | 0xD91F | STAT_LED_VORN_UMLUFT_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_HHS_EIN | 0xD920 | STAT_LED_VORN_HHS_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_DEFROST_EIN | 0xD921 | STAT_LED_VORN_DEFROST_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_AUTO_MITTE_EIN | 0xD922 | STAT_LED_VORN_AUTO_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_AUTO_LI_RE_EIN | 0xD923 | - | Ausgabe des Status der LEDs an den AUTO-Tasten (zwei Tasten für links und rechts. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD923 |
| LED_VORN_MAX_AC_EIN | 0xD924 | STAT_LED_VORN_MAX_AC_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_AUC_EIN | 0xD925 | STAT_LED_VORN_AUC_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LED_VORN_ALL_EIN | 0xD926 | STAT_LED_VORN_ALL_EIN | LED: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STEUERN_DIAGNOSE_ENDE | 0xD927 | - | Beendet alle mit Diagnose gestarteten Ansteuerungen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD927 | - |
| KLIMA_VORN_KLAPPEN_PRG_MITTE | 0xD928 | STAT_KLIMA_VORN_KLAPPEN_PRG_MITTE | Automatik-Klappenprogramm: 0 = AUS = Manuelle Einstellung, 1 = EIN = AUTO eingeschaltet | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_KLAPPEN_PRG_LI_RE_EIN | 0xD929 | - | Ausgabe des Status des Klappenprogramms am Bedienteil. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD929 |
| KLIMA_VORN_OFF_EIN | 0xD92C | STAT_KLIMA_VORN_OFF_EIN | Klima: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_DEFROST_EIN | 0xD92D | STAT_KLIMA_VORN_PRG_DEFROST_EIN | Defrost-Programm: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_MAX_AC_EIN | 0xD92E | STAT_KLIMA_VORN_PRG_MAX_AC_EIN | Programm maximal Kühlen: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_ALL_EIN | 0xD92F | STAT_TASTE_VORN_ALL_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_AUC_EIN | 0xD930 | STAT_KLIMA_VORN_PRG_AUC_EIN | Automatische Umluft Control: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_UMLUFT_EIN | 0xD931 | STAT_KLIMA_VORN_PRG_UMLUFT_EIN | Programm Umluft: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_HHS_EIN | 0xD932 | STAT_KLIMA_VORN_PRG_HHS_EIN | Heckscheibenheizung: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_REST_EIN | 0xD933 | STAT_KLIMA_VORN_PRG_REST_EIN | Programm Restwärme: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_AC_EIN | 0xD934 | STAT_KLIMA_VORN_PRG_AC_EIN | Klimaprogramm: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_GEBL_AUTO_LI_RE_EIN | 0xD935 | - | Ausgabe, ob die Gebläsesteuerung auf Automatikprogramm eingestellt ist. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD935 |
| KLIMA_VORN_PRG_KLIMASTIL_LI_RE | 0xD937 | - | Ausgabe der Soft-Intense Einstellungen am Bedienteil links und rechts in Stufen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD937 |
| KLIMA_VORN_PRG_STANDHEIZEN_EIN | 0xD938 | STAT_KLIMA_VORN_PRG_STANDHEIZEN_EIN | Programm Standheizung: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_VORN_PRG_STANDLUEFTEN_EIN | 0xD939 | STAT_KLIMA_VORN_PRG_STANDLUEFTEN_EIN | Programm Standlüften: 0 = AUS, 1 = EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_DEFROST_EIN | 0xD93A | STAT_TASTE_VORN_DEFROST_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TASTE_VORN_AUTO_LI_RE_EIN | 0xD93B | - | Auflisten des Status der Tasten am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD93B |
| TASTE_VORN_UMLUFT_AUC_EIN | 0xD93C | STAT_TASTE_VORN_UMLUFT_AUC_EIN | 0=Taste nicht betätigt, 1=Taste betätigt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WIPPE_VORN_RECHTS_PLUS_MINUS | 0xD93E | - | Auflisten des Status der Tasten am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD93E |
| KLIMA_VORN_GEBLAESELEISTUNG_WERT | 0xD93F | STAT_KLIMA_VORN_GEBLAESELEISTUNG_WERT | Gebläseleistung der Gebläseendstufe IHKA in %. | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLP_POS_DEFROST_WERT | 0xD941 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD941 |
| KLP_POS_BELUEFTUNG_WERT | 0xD942 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD942 |
| KLP_POS_BELUEFTUNG_LI_WERT | 0xD943 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD943 |
| KLP_POS_BELUEFTUNG_RE_WERT | 0xD944 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD944 |
| KLP_POS_BELUEFTUNG_LI_AUSSEN_WERT | 0xD945 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD945 |
| KLP_POS_BELUEFTUNG_RE_AUSSEN_WERT | 0xD946 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD946 |
| KLP_POS_FUSSRAUM_WERT | 0xD947 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD947 |
| KLP_POS_FUSSRAUM_LI_RE_WERT | 0xD948 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD948 |
| KLP_POS_SCHICHTUNG_WERT | 0xD949 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD949 |
| KLP_POS_SCHICHTUNG_LI_WERT | 0xD94A | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94A |
| KLP_POS_SCHICHTUNG_RE_WERT | 0xD94B | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94B |
| KLP_POS_FRISCHLUFT_WERT | 0xD94C | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94C |
| KLP_POS_UMLUFT_WERT | 0xD94D | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94D |
| KLP_POS_FUSS_FOND_WERT | 0xD94E | - | Auslese des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94E |
| KLP_POS_FUSS_FOND_LI_RE_WERT | 0xD94F | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD94F |
| KLP_POS_SCHICHT_FOND_WERT | 0xD951 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD951 |
| KLP_POS_SCHICHT_FOND_LI_RE_WERT | 0xD952 | - | Auslesen des Soll- und Ist-Werts der Klappenposition des Klappenmotors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD952 |
| MOTOR_KALIBRIERLAUF | 0xD953 | - | Abfrage des aktuellen Status des Kalibrierlaufs der Klappenmotoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD953 |
| SELBSTTEST_SCHRITTMOTORE | 0xD954 | STAT_SELBSTTEST_SCHRITTMOTORE_NR | Status Schrittmotorenselbsttests: 0 = nicht gestartet/nicht angefordert, 1 = Test läuft gerade, 2 = Test erfolgreich abgeschlossen, 3 = Test nicht erfolgreich abgeschlossen | 0-n | - | - | int | TAB_STATUS_SELBSTTEST | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_BELUEFTUNG_LINKS_WERT | 0xD957 | STAT_TEMP_BELUEFTUNG_LINKS_WERT | Temperatur Belüftungsklappe links | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| TEMP_BELUEFTUNG_RECHTS_WERT | 0xD958 | STAT_TEMP_BELUEFTUNG_RECHTS_WERT | Temperatur Belüftungsklappe rechts | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DRUCKSENSOR_VORHANDEN | 0xD959 | STAT_DRUCKSENSOR_VORHANDEN | Gibt aus, ob ein Drucksensor für R134A verbaut ist: 0 = nicht vorhanden, 1 = vorhanden | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_WASSERVENTIL | 0xD95A | - | Wasserventil vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95A |
| TEMP_VERDAMPFER_WERT | 0xD95C | STAT_TEMP_VERDAMPFER_WERT | Temperaturfühler | °C | - | - | int | - | 1.0 | 5.0 | -10.0 | - | 22 | - | - |
| TEMP_WT_LI_WERT | 0xD95D | STAT_TEMP_WT_LI_WERT | Temperatur Wärmetauscher links | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| WIPPE_VORN_PLUS_MINUS | 0xD95F | - | Auflisten des Status der Tasten der Gebläsewippe am Klimabedienteil. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD95F |
| BUS_IN_KOMPRESSORFREIGABE | 0xD960 | STAT_BUS_IN_KOMPRESSORFREIGABE_EIN | Klimakompressorfreigabe von der Motorelektronik: 0 = nicht freigegeben, 1 = Freigabe erteilt | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_SOLARSENSOR_WERT | 0xD962 | - | BUS-Signal Solarsensor | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD962 |
| BUS_IN_AUC_SENSOR_WERT | 0xD964 | STAT_BUS_IN_AUC_SENSOR_WERT | Belastungsstufe vom AUC-Sensor | Stufe | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_BESCHLAGSENSOR_WERT | 0xD966 | STAT_BUS_IN_BESCHLAGSENSOR_WERT | PMW-Signal Beschlagssensor | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_KAELTEMITTELDRUCK_WERT | 0xD968 | STAT_BUS_IN_R134A_DRUCK_WERT | Kältemitteldruck für R134A | bar | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| BUS_IN_TEMP_AUSSEN_WERT | 0xD96B | STAT_BUS_IN_TEMP_AUSSEN_WERT | Außentemperatur | °C | - | - | int | - | 1.0 | 2.0 | -40.0 | - | 22 | - | - |
| BESCHLAGSENSOR_VORHANDEN | 0xD96D | STAT_VORHANDEN_BESCHLAGSENSOR | 0: Beschlagsensor nicht vorhanden / codiert   1: Beschlagsensor vorhanden / codiert | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HEIZWENDEL_PTC_MODUL_VORN | 0xD976 | STAT_PTC_HEIZWENDEL_VORN_WERT | Ausgabe der Anzahl defekter Heizwendel: 0 = Alle in Ordnung,  1 = 1 Wendel defekt, 2 = 2 Wendel defekt usw. | - | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KLIMA_TEMPERATUR_SOLLWERT | 0xD977 | - | Ausgabe der eingestellten Sollwert-Temperatur (links und rechts) der Klimaanlage. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD977 |
| STEUERN_EINZELADRESSIERUNG | 0xD978 | - | Adressvergabe an einzelnen Motor. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD978 | - |
| KLIMA_LIN_1_ADRESSEN | 0xD97B | - | Lesen aller ansprechbaren LIN-Adressen des LIN-Bus-System. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD97B |
| STEUERN_RESET_LIN | 0xD97C | - | Rücksetzen des LIN-Bus mit Wegschalten der LIN-Versorgungsspannung. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| ENDLAGESCHALTER_SCHICHTUNG_LI_RE | 0xD97F | - | Ausgabe des Status der Endlageschalter an der Schichtungsklappe. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD97F |
| KLAPPEN_VERSTELLBEREICH | 0xD980 | - | Auslesen des Verstellbereichs der einzelnen Klappen als Inkremente, die über den Eichlauf ermittelt werden konnten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD980 |
| STEUERN_AUTOADR_KLAPPENMOTOREN | 0xD981 | - | Startet die Autoadressierung zur Vergabe der Motoradressen im System anhand der Reihenfolge der Anschlüsse am Kabelbaum. | - | - | - | - | - | - | - | - | - | 2F | - | - |
| VERSORGUNG_PTC_MODUL | 0xD983 | - | Ausgabe der Stromaufnahme (Summe aller Heizwendel)  und Versorgungsspannung des PTC-Moduls. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD983 |
| TEMP_LEITERPLATTE_PTC_MODUL | 0xD984 | STAT_PTC_MODUL_LTP_TEMP_WERT | Ausgabe der Temperatur auf der Leiterplatte des  PTC-Moduls. | °C | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| VORHANDEN_EKK | 0xD9A4 | STAT_VORHANDEN_EKK | Elektrischer Kältemittelverdichter: 0=nicht vorhanden 1=Kältemittelverdichter Gen1.5 vorhanden 2=Kältemittelverdichter Gen2.0 vorhanden | 0-n | - | high | int | TAB_KMV_HYBRID_GENERATION | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SPANNUNG_KLEMME_30F_WERT | 0xDADB | STAT_SPANNUNG_KLEMME_30F_WERT | Spannungswert am Steuergerät an Klemme 30F (auf eine Nachkommastelle genau) | V | - | - | int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_R_EIN | 0xDAFD | STAT_STATUS_KLEMME_R_EIN | Status Klemme R im Steuergerät: 0=AUS, 1=EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_15_EIN | 0xDAFE | STAT_STATUS_KLEMME_15_EIN | Status Klemme 15 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| STATUS_KLEMME_50_EIN | 0xDB10 | STAT_STATUS_KLEMME_50_EIN | Status Klemme 50 im Steuergerät: 0=AUS; 1=EIN | 0/1 | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DIMMUNG_58G_PWM_WERT | 0xDB11 | STAT_DIMMUNG_58G_PWM_WERT | Liefert den PWM-Wert der Dimmung von Klemme 58G:  0% max. Dimmung - 100% max. Helligkeit,  0xFF bedeutet ungültig und  0xFE bedeutet Tag: so keine Information über die Helligkeit! | % | - | - | int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FASTA_DATEN_LESEN | 0x4005 | STAT_FASTA_DATEN_LESEN_WERT | - | - | - | - | string[163] | - | - | - | - | 0x78 | 22 | - | - |
| FASTA_DATEN_LESEN2 | 0x4014 | STAT_FASTA_DATEN_LESEN2_WERT | - | - | - | - | string[71] | - | - | - | - | 0x78 | 22 | - | - |

### TAB_AKS_EKMV

| WERT | TEXT |
| --- | --- |
| 0x00 | kein aktiver Kurzschluss |
| 0x01 | aktiver Kurzschluss Low-Side |
| 0x02 | aktiver Kurzschluss High-Side |

### TAB_BETRIEBSSTATUS_EKMVGEN20

| WERT | TEXT |
| --- | --- |
| 0x0000 | eKMV aus |
| 0x0800 | eKMV ein |
| 0x1000 | eKMV in Degradation |
| 0x1800 | eKMV Stopp |
| 0x2000 | eKMV Shutdown |
| 0x2800 | eKMV im Aufstart |
| 0x3000 | eKMV Reset nicht möglich |
| 0x3800 | ungültig |

### TAB_BITMUSTER

| WERT | TEXT |
| --- | --- |
| 0x00 | BITMUSTER_1 |
| 0x01 | BITMUSTER_2 |
| 0x02 | BITMUSTER_3 |
| 0x03 | BITMUSTER_4 |
| 0x04 | BITMUSTER_5 |
| 0x05 | BITMUSTER_6 |
| 0x06 | BITMUSTER_7 |
| 0x07 | BITMUSTER_8 |

### TAB_EKK_ABSCHALTGRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | Betrieb |
| 0x01 | Unterspannung HV |
| 0x02 | Überspannung HV |
| 0x03 | Start fehlgeschlagen |
| 0x04 | Übertemperatur Inverter |
| 0x05 | Fehler Kommunikation |
| 0x06 | Ungültige Sollwertdrehzahl |
| 0x07 | Übertemperaturwarnung |
| 0x08 | Kurzschluß |
| 0x09 | Permanent Stop |
| 0x10 | Temperatursensor offen |
| 0x11 | Temperatursensor kurzgeschlossen |
| 0x20 | Überstrom während Betrieb |
| 0x21 | Schutzfunktion 2 aktiv: Treiberspannungsüberwachung |
| 0x3F | Signal ungültig |

### TAB_EKK_BETRIEBSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | eKK aus |
| 0x01 | eKK Aufstart |
| 0x02 | eKK ein |
| 0x03 | Signal ungültig |

### TAB_EKK_LEISTUNGSBEGRENZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Volle Leistung |
| 0x01 | Reduzierte Leistung wegen Überstrom |
| 0x02 | Reduzierte Leistung wegen Überspannung |
| 0x03 | Signal ungültig |

### TAB_EKK_SPANNUNGSBEREICH

| WERT | TEXT |
| --- | --- |
| 0x00 | Spannung unbekannt |
| 0x01 | Spannung innerhalb des zulässigen Bereichs |
| 0x02 | Spannung unterhalb des zulässigen Bereichs |
| 0x03 | Spannung überhalb des zulässigen Bereichs |
| 0x04 | Reserviert |
| 0x05 | Reserviert |
| 0x06 | Reserviert |
| 0x07 | Signal ungültig |

### TAB_FBM_TASTEN

| WERT | TEXT | BEMERKUNG | TEXT_EN |
| --- | --- | --- | --- |
| 0x00 | FBM_8 | - | - |
| 0x01 | FBM_7 | - | - |
| 0x02 | FBM_6 | - | - |
| 0x03 | FBM_5 | - | - |
| 0x04 | FBM_4 | - | - |
| 0x05 | FBM_3 | - | - |
| 0x06 | FBM_2 | - | - |
| 0x07 | FBM_1 | - | - |

### TAB_KALIB_ERG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kalibrierung NIO |
| 0x0001 | Kalibrierung IO |
| 0x0002 | Klappe nicht verbaut |

### TAB_KLAPPEN_VORN

| WERT | TEXT |
| --- | --- |
| 0x00 | ENTFROSTUNG |
| 0x01 | BEL_LI_AUSSEN |
| 0x02 | BEL_LI_MITTE |
| 0x03 | BEL_RE_MITTE |
| 0x04 | BEL_RE_AUSSEN |
| 0x05 | FUSS_LI |
| 0x06 | FUSS_RE |
| 0x07 | SCHICHT_LI |
| 0x08 | SCHICHT_RE |
| 0x09 | FL_STAU |
| 0x0A | UMLUFT |
| 0x0B | FUSS_FOND_LI |
| 0x0C | FUSS_FOND_RE |
| 0x0D | SCHICHT_FOND_LI |
| 0x0E | SCHICHT_FOND_RE |
| 0x05 | FUSS_GES_LI |
| 0x0E | SCHICHT_FOND |
| 0x08 | SCHICHTUNG |
| 0x05 | FUSSRAUM |
| 0x04 | BEL_RE |
| 0x04 | BELUEFTUNG |
| 0x01 | BEL_LI |
| 0x0E | TEMP_LUFTMENGE_FOND |
| 0x06 | FUSS_GES_RE |

### TAB_KLIMAVARIANTE

| WERT | TEXT |
| --- | --- |
| 0x0000 | 2-zonig |
| 0x0001 | 2,5-zonig |
| 0x0002 | 4-zonig |
| 0x0003 | 1-zonig |

### TAB_KMV_HYBRID_GENERATION

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | Kältemittelverdichter Gen1.5 vorhanden |
| 0x02 | Kältemittelverdichter Gen2.0 vorhanden |

### TAB_LAUFRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | UHRZEIGERSINN |
| 0x01 | GEGEN_UHRZEIGERSINN |
| 0xFF | DEFAULT |

### TAB_LED_KLIMA_VORN

| WERT | TEXT |
| --- | --- |
| 0x00 | ALLE |
| 0x01 | AUTO_LI |
| 0x02 | ALL |
| 0x03 | MAX_AC |
| 0x04 | DEFROST |
| 0x05 | AC |
| 0x06 | HHS |
| 0x07 | AUC |
| 0x08 | UMLUFT |
| 0x09 | AUTO_RE |
| 0x0A | SITZHEIZUNG_LI_STUFE1 |
| 0x0B | SITZHEIZUNG_LI_STUFE2 |
| 0x0C | SITZHEIZUNG_LI_STUFE3 |
| 0x0D | SITZLÜFTUNG_LI_STUFE1 |
| 0x0E | SITZLÜFTUNG_LI_STUFE2 |
| 0x0F | SITZLÜFTUNG_LI_STUFE3 |
| 0x10 | SITZHEIZUNG_RE_STUFE1 |
| 0x11 | SITZHEIZUNG_RE_STUFE2 |
| 0x12 | SITZHEIZUNG_RE_STUFE3 |
| 0x13 | SITZLÜFTUNG_RE_STUFE1 |
| 0x14 | SITZLÜFTUNG_RE_STUFE2 |
| 0x15 | SITZLÜFTUNG_RE_STUFE3 |
| 0xFF | ExternControlaus |

### TAB_LUFTVERTEILUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Null |
| 0x0001 | Unten |
| 0x0002 | Mitte |
| 0x0003 | Mitte und Unten |
| 0x0005 | Oben und Unten (nur Fahrer) |
| 0x0007 | Oben und Mitte und Unten |
| 0x0008 | Automatik |
| 0x0020 | Individual |
| 0x0028 | Sonderprogramm |
| 0x0029 | Max. AC |
| 0x002A | Entfrostung |
| 0x002B | Aus |
| 0x003F | Ungültig (Basis) |

### TAB_NOTLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | AKTIVIERT |
| 0x01 | DEAKTIVIERT |
| 0xFF | DEFAULT |

### TAB_NOTLAUF_ENDPOS

| WERT | TEXT |
| --- | --- |
| 0x00 | ZU_NIEDRIGEN_SCHRITTZAHLEN |
| 0x01 | ZU_HOHEN_SCHRITTZAHLEN |
| 0xFF | DEFAULT |

### TAB_PATT_FUNKTION

| WERT | TEXT |
| --- | --- |
| 0x0000 | Warten auf PATT-Betrieb |
| 0x0001 | Vorbereitung Ozonisierung |
| 0x0002 | Ozonisierungsbetrieb |
| 0x0003 | Abbaubetrieb |
| 0x0004 | Ausblasbetrieb |
| 0x0005 | PATT-Zyklus abgeschlossen |
| 0x0006 | Klappenpositionslauf |

### TAB_PTC_MODUL

| WERT | TEXT |
| --- | --- |
| 0x00 | EINZELNER |
| 0x01 | LINKS |
| 0x02 | RECHTS |

### TAB_SH_BETRIEBSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS-Bereit |
| 0x01 | AUS-Nachlauf |
| 0x02 | AUS-Störungsnachlauf_Gemeldet |
| 0x03 | AUS-Störungsnachlauf-Quittiert |
| 0x04 | EIN-Start |
| 0x05 | EIN-Regelpause |
| 0x06 | EIN-Heizgerät aktiv |
| 0x08 | AUS-Heizgeräteverriegelung |
| 0x09 | EIN-Nachlauf-Regelpause |
| 0x0F | Signal ungültig |

### TAB_SH_FUNKTIONSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausbrennen |
| 0x01 | Abschaltung |
| 0x02 | Ausbrennen TRS |
| 0x03 | Ausbrennrampe |
| 0x04 | Auszustand |
| 0x05 | Brennbetrieb Teillast |
| 0x06 | Brennbetrieb Volllast |
| 0x07 | Brennstofffördern |
| 0x08 | Brennermotorstart (Losreissen) |
| 0x09 | Brennstoffunterbrechung |
| 0x0A | Diagnosezustand |
| 0x0B | Dosierpumpenunterbrechung |
| 0x0C | EMK-Messung |
| 0x0D | Entprellen |
| 0x0E | EXIT |
| 0x0F | Flammwächterabfrage |
| 0x10 | Flammwächterkühlung |
| 0x11 | Flammwächter Messphase |
| 0x12 | Flammabfrage bei ZUE |
| 0x13 | Gebläseanlauf |
| 0x14 | Glühstiftrampe |
| 0x15 | Heizgeräteverriegelung |
| 0x16 | Initialisierung |
| 0x17 | Kraftstoffblasenüberbrückung |
| 0x18 | Kaltgebläseanlauf |
| 0x19 | Kaltstartanreicherung |
| 0x1A | Kühlung |
| 0x1B | LastwechselTeil-/Volllast |
| 0x1C | Lüften |
| 0x1D | LastwechselVoll-/Teillast |
| 0x1E | NeueInitialisierung |
| 0x1F | Regelbetrieb |
| 0x20 | Regelpause |
| 0x21 | Sanftanlauf |
| 0x22 | Sicherheitszeit |
| 0x23 | Spülen |
| 0x24 | Start |
| 0x25 | Stabilisierung |
| 0x26 | Startrampe |
| 0x27 | Stromlos |
| 0x28 | Störverriegelung |
| 0x29 | Störverriegelung TRS |
| 0x2A | Stabilisierungszeit |
| 0x2B | Übergang Regelbetrieb |
| 0x2C | Entscheidungsknoten |
| 0x2D | Vorfördern |
| 0x2E | Vorglühen |
| 0x2F | Vorglühen Leistungsregelung |
| 0x30 | VerzögerungvorAbregeln |
| 0x31 | Zähgebläseanlauf |
| 0x32 | Zuglühen |
| 0x33 | Zündpause |
| 0x34 | Zündung |
| 0x35 | Zwischenglühen |
| 0x36 | Applikationsüberwachung |
| 0x37 | Heizgeräteverriegelungsabspeicherung |
| 0x38 | Heizgeräteentriegelung |
| 0x39 | Heizleistungsregelung |
| 0x3A | Umwälzpumpenregelung |
| 0x3B | InitialisierungµP |
| 0x3C | Fremdlichtabfrage |
| 0x3D | Vorlauf |
| 0x3E | Vorzündung |
| 0x3F | Flammzündung |
| 0x40 | Flammstabilisierung |
| 0x41 | Brennbetrieb Standheizen |
| 0x42 | Brennbetrieb Zuheizen |
| 0x43 | Brennstörung Standheizen |
| 0x44 | Brennstörung Zuheizen |
| 0x45 | AusNachlauf |
| 0x46 | Regelpause Nachlauf |
| 0x47 | Störnachlauf |
| 0x48 | Zeitlicher Störnachlauf |
| 0x49 | StörverriegelungUmwälzpumpe |
| 0x4A | Regelpause Standheizen |
| 0x4B | Regelpause Zuheizen |
| 0x4C | RegelpauseZuheizenmitUmwälzpumpe |
| 0x4D | Umwälzpumpe ohne Heizfunktion |
| 0x4E | WarteschleifeÜberspannung |
| 0x4F | Fehlerspeicher aktualisieren |
| 0x50 | Warteschleife |
| 0x51 | Komponententest |
| 0x52 | Boostbetrieb |
| 0x53 | Abkühlen |
| 0x54 | Heizgeräteverriegelung permanent |
| 0x55 | Gebläseunterbrechung |
| 0x56 | Brennermotor losreissen |
| 0x57 | Temperaturabfrage |
| 0x58 | Vorlauf Unterspannung |
| 0x59 | Unfallabfrage |
| 0x5A | Störnachlauf Magnetventil |
| 0x5B | Fehlerspeicher aktualisieren Magnetventil |
| 0x5C | Zeitlicher Störnachlauf Magnetventil |
| 0x5D | Startversuch |
| 0x5E | Vorlaufverlängerung |
| 0x5F | Brennbetrieb |
| 0x60 | zeitlicher Störnachlauf bei Unterspannung |
| 0x61 | Fehlerspeicher aktualisieren beim Ausschalten |
| 0x62 | Rampe Vollast |
| 0x63 | TRS-Kühlung |
| 0x64 | Restwärmenutzung |
| 0x65 | ADR-Zustand aktiviert |
| 0x66 | Bereit |
| 0x67 | Brennerregeneration  |
| 0x68 | Initialisierung_Prozess  |
| 0x69 | Sleep_Mode  |
| 0x6A | Fortsetzung Brennstofffördern  |
| 0x6B | Fortsetzung Stabilisierung, Kaltstart  |
| 0x6C | Fortsetzung Stabilisierung, Warmstart  |
| 0x6D | Nachlauframpe  |
| 0x6E | Restwärmenutzung  |
| 0x6F | Stabilisierung, Kaltstart  |
| 0x70 | PROCESSOR OFF  |
| 0x71 | WAIT STATE  |
| 0x72 | Fortsetzung Stabilisierung  |
| 0x73 | MOTOR CHECK  |
| 0x74 | FLAME MONITOR COOLING  |
| 0x75 | PRE-GLOWING1  |
| 0x76 | PRE-GLOWING2  |
| 0x77 | PRE-GLOWING2 Partial Load Start  |
| 0x78 | FLAME MONITOR CALIBRATION START |
| 0x79 | START1  |
| 0x7A | START2  |
| 0x7B | START3  |
| 0x7C | START4  |
| 0x7D | START5  |
| 0x7E | START6  |
| 0x7F | GLOW PLUG RAMP  |
| 0x80 | FLAME MONITOR MEASURUEMENT1 |
| 0x81 | FLAME MONITOR MEASURUEMENT2 |
| 0x82 | START1 Partial Load Start  |
| 0x83 | START2 Partial Load Start  |
| 0x84 | START3 Partial Load Start  |
| 0x85 | START4 Partial Load Start  |
| 0x86 | START5 Partial Load Start  |
| 0x87 | START6 Partial Load Start  |
| 0x88 | GLOW PLUG RAMP Partial Load Start |
| 0x89 | FLAME MONITOR MEASUREMENT1 Partial Load |
| 0x8A | FLAME MONITOR MEASUREMENT2 Partial Load |
| 0x8B | FULL LOAD  |
| 0x8C | RAMP DOWN  |
| 0x8D | PARTIAL LOAD  |
| 0x8E | RAMP UP  |
| 0x8F | PAUSE  |
| 0x90 | BURN-OUT Full Load  |
| 0x91 | BURN-OUT Partial Load  |
| 0x92 | BURN-OUT Start  |
| 0x93 | BURN-OUT Partial Load Start  |
| 0x94 | BURN-OUT Overheating  |
| 0x95 | COOL1  |
| 0x96 | FLAME MONITOR CALIBRATION  |
| 0x97 | COOL2  |
| 0x98 | BOOST  |
| 0x99 | CONTINUOUS COOLANT TEMPERATURE CONTROL |
| 0x9A | CONTINUOUS COOLANT TEMPERATURE CONTROL-HOLD |
| 0xA0 | Stabilisierung, Warmstart  |
| 0xA1 | Startrampe, Kaltstart  |
| 0xA2 | Startrampe, Warmstart  |
| 0xA3 | Test Restwärmenutzung  |

### TAB_SH_KRAFTSTOFFART

| WERT | TEXT |
| --- | --- |
| 0x01 | Benzin |
| 0x02 | Diesel |
| 0x03 | RME |
| 0xFF | ungültig |

### TAB_SH_SL_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine LED an |
| 0x01 | Eine LED an |
| 0x02 | Zwei LEDs an |
| 0x03 | Drei LEDs an |
| 0xFF | Keine LEDs angeschlossen |

### TAB_SH_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | SH_L_VORN |
| 0x01 | SH_R_VORN |

### TAB_SH_TESTLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Testlauf niO beendet oder Testlauf noch nicht gestartet |
| 0x01 | Testlauf iO beendet |
| 0x02 | Testbetrieb aktiv |
| 0xFF | ungültig |

### TAB_SL_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | SL_L_VORNE |
| 0x01 | SL_R_VORNE |

### TAB_SOLLTEMP

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | TEMP_LINKS |
| 0x02 | TEMP_RECHTS |

### TAB_STATUS_KALIBRIERLAUF

| WERT | TEXT |
| --- | --- |
| 0x0000 | in diesem Klemmenzyklus noch nicht gestartet |
| 0x0001 | Kalibrierlauf läuft gerade |
| 0x0002 | Kalibrierlauf abgeschlossen |

### TAB_STATUS_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x0000 | nicht gestartet/nicht angefordert |
| 0x0001 | Test läuft gerade |
| 0x0002 | Test erfolgreich abgeschlossen |
| 0x0003 | Test nicht erfolgreich abgeschlossen |

### TAB_STEUERN_PATT

| WERT | TEXT |
| --- | --- |
| 0x0000 | AUS |
| 0x0001 | STANDBY |
| 0x0002 | STANDBETRIEB |

### TAB_TASTEN_AUDIO

| WERT | TEXT |
| --- | --- |
| 0x00 | MODE |
| 0x01 | EJECT |
| 0x02 | SUCHLAUF_LI |
| 0x03 | SUCHLAUF_RE |
| 0x04 | EIN_AUS |
| 0x05 | TP |

### TAB_TASTEN_KLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | LV_RE |
| 0x01 | AUTO_RE |
| 0x02 | GBL_PLUS_RE |
| 0x03 | GBL_MINUS_RE |
| 0x04 | MAX_AC |
| 0x05 | KLIMA |
| 0x06 | UML_AUC |
| 0x07 | ALL |
| 0x08 | DEFROST |
| 0x09 | HHS |
| 0x0A | GBL_PLUS_LI |
| 0x0B | GBL_MINUS_LI |
| 0x0C | AUTO_LI |
| 0x0D | LV_LI |
| 0x0D | LV_MITTE |
| 0x0C | AUTO_MITTE |
| 0x0A | GBL_PLUS_MITTE |
| 0x0B | GBL_MINUS_MITTE |

### TAB_TEMP_EINHEIT

| WERT | TEXT |
| --- | --- |
| 0x0000 | Celsius |
| 0x0001 | Fahrenheit |

### TAB_FUNKTIONSZUSTAND

| NUMMER | ABKUERZUNG | TEXT |
| --- | --- | --- |
| 0x00 | ABR | Ausbrennen |
| 0x01 | ABSCH | Abschaltung |
| 0x02 | ABT | Ausbrennen TRS |
| 0x03 | AKÜ | Ausbrennrampe |
| 0x04 | AUS | Auszustand |
| 0x05 | BBTL | Brennbetrieb Teillast |
| 0x06 | BBVL | Brennbetrieb Volllast |
| 0x07 | BFÖ | Brennstofffördern |
| 0x08 | BMS | Brennermotorstart (Losreissen) |
| 0x09 | BU | Brennstoffunterbr |
| 0x0A | DIAG | Diagnosezustand |
| 0x0B | DPU | Dosierpumpenunterbrechung |
| 0x0C | EMK | EMK-Messung |
| 0x0D | EPR | Entprellen |
| 0x0E | EXIT | EXIT |
| 0x0F | FLA | Flammwächterabfrage |
| 0x10 | FLK | Flammwächterkühlung |
| 0x11 | FLM | Flammwächter Messphase |
| 0x12 | FLZ | Flammabfrage bei ZUE |
| 0x13 | GA | Gebläseanlauf |
| 0x14 | GSR | Glühstiftrampe |
| 0x15 | HGV | Heizgeräteverriegelung |
| 0x16 | INIT | Initialisierung |
| 0x17 | KBÜ | Kraftstoffblasenüberbrückung |
| 0x18 | KGA | Kaltgebläseanlauf |
| 0x19 | KSA | Kaltstartanreicherung |
| 0x1A | KÜG | Kühlung |
| 0x1B | LTV | Lastwechsel Teil-/ Volllast |
| 0x1C | LÜE | Lüften |
| 0x1D | LVT | Lastwechsel Voll-/ Teillast |
| 0x1E | Neu INIT | Neue Initialisierung |
| 0x1F | RB | Regelbetrieb |
| 0x20 | RP | Regelpause |
| 0x21 | SAN | Sanftanlauf |
| 0x22 | SIZ | Sicherheitszeit |
| 0x23 | SPÜ | Spülen |
| 0x24 | STA | Start |
| 0x25 | STAB | Stabilisierung |
| 0x26 | STR | Startrampe |
| 0x27 | Stromlos | Stromlos |
| 0x28 | STV | Störverriegelung |
| 0x29 | STV_TRS | Störverriegelung TRS |
| 0x2A | STZ | Stabilisierungszeit |
| 0x2B | ÜRB | Übergang Regelbetrieb |
| 0x2C | USA | Entscheidungsknoten |
| 0x2D | VFÖ | Vorfördern |
| 0x2E | VGL | Vorglühen |
| 0x2F | VGLP | Vorglühen Leistungsregelung |
| 0x30 | VZG | Verzögerung vor Abregeln |
| 0x31 | ZGA | Zähgebläseanlauf |
| 0x32 | ZGL | Zuglühen |
| 0x33 | ZP | Zündpause |
| 0x34 | ZUE | Zündung |
| 0x35 | ZWGL | Zwischenglühen |
| 0x36 | APP | Applikationsüberwachung |
| 0x37 | HGA | Heizgeräteverriegelungsabspeicherung |
| 0x38 | HGE | Heizgeräteentriegelung |
| 0x39 | HLR | Heizleistungsregelung |
| 0x3A | UPR | Umwälzpumpenregelung |
| 0x3B | µP-\| | Initialisierung µP |
| 0x3C | FL | Fremdlichtabfrage |
| 0x3D | VL | Vorlauf |
| 0x3E | VZ | Vorzündung |
| 0x3F | FZ | Flammzündung |
| 0x40 | FS | Flammstabilisierung |
| 0x41 | BBS | Brennbetrieb Standheizen |
| 0x42 | BBZ | Brennbetrieb Zuheizen |
| 0x43 | BSS | Brennstörung Standheizen |
| 0x44 | BSZ | Brennstörung Zuheizen |
| 0x45 | AN | Aus Nachlauf |
| 0x46 | RPN | Regelpause Nachlauf |
| 0x47 | SN | Störnachlauf |
| 0x48 | ZSN | Zeitlicher Störnachlauf |
| 0x49 | STVU | Störverriegelung Umwälzpumpe |
| 0x4A | RPS | Regelpause Standheizen |
| 0x4B | RPZ | Regelpause Zuheizen |
| 0x4C | RPZU | Regelpause Zuheizen mit Umwälzpumpe |
| 0x4D | UP | Umwälzpumpe ohne Heizfunktion |
| 0x4E | WSUE | Warteschleife Überspannung |
| 0x4F | FSA | Fehlerspeicher aktualisieren |
| 0x50 | WS | Warteschleife |
| 0x51 | KOMP | Komponententest |
| 0x52 | BOOST | Boostbetrieb |
| 0x53 | ABK | Abkühlen |
| 0x54 | HGVP | Heizgeräteverriegelung permanent |
| 0x55 | GBU | Gebläseunterbrechung |
| 0x56 | LOS | Brennermotor losreissen |
| 0x57 | TA | Temperaturabfrage |
| 0x58 | VUS | Vorlauf Unterspannung |
| 0x59 | UNF | Unfallabfrage |
| 0x5A | SNMV | Störnachlauf Magnetventil |
| 0x5B | FSAMV | Fehlerspeicher aktualisieren Magnetventil |
| 0x5C | ZSNMV | Zeitlicher Störnachlauf Magnetventil |
| 0x5D | SV | Startversuch |
| 0x5E | VLV | Vorlaufverlängerung |
| 0x5F | BB | Brennbetrieb |
| 0x60 | ZSNUS | zeitlicher Störnachlauf bei Unterspannung |
| 0x61 | FSAA | Fehlerspeicher aktualisieren beim Ausschalten |
| 0x62 | RAVL | Rampe Vollast |

### TAB_KRAFTSTOFFART

| VARIANTE | TEXT |
| --- | --- |
| 0x01 | Benzin |
| 0x02 | Diesel |
| 0x04 | RME |
| 0xFF | ungültig |

### TAB_TESTLAUF

| TESTLAUFCODE | TEXT |
| --- | --- |
| 0x00 | Testlauf niO |
| 0x01 | Testlauf iO |
| 0xFF | ungültig |

### IOSTATUSTAB

| IOSTATUS | TEXT |
| --- | --- |
| 0x00 | NEIN |
| 0x01 | JA |
| 0x03 | ungültig (aktiver Fehler) |

### FEHLERCODETABELLE

| FEHLERCODE | FEHLERORT | FEHLERART |
| --- | --- | --- |
| 0x8A | SHZH Glühstift | SHZH Glühstift Unterbrechung / Kurzschluss nach Plus |
| 0x0A | SHZH Glühstift | SHZH Glühstift Kurzschluß nach Masse |
| 0x22 | SHZH Glühstift | SHZH Glühstift Referenzwiderstand nicht erreicht |
| 0x99 | SHZH Glühstift | SHZH Glühstift defekt |
| 0x05 | SHZH Glühstift | SHZH Glühstift hat als Brennraumsensor vor dem Brennbetrieb eine Flamme erkannt Fremdlicht (Wendel defekt/unterbrochen) |
| 0x89 | SHZH Brennluftgebläse | SHZH Brennluftgebläse Unterbrechung / Kurzschluss nach Plus |
| 0x09 | SHZH Brennluftgebläse | SHZH Brennluftgebläse Unterbrechung / Kurzschluss nach Masse |
| 0x15 | SHZH Brennluftgebläse | SHZH Brennluftgebläse Blockierschutz hat angesprochen (EMK) |
| 0x95 | SHZH Brennluftgebläse | SHZH Brennluftgebläse Schwergängigkeitserkennung hat angesprochen (EMK) |
| 0x8B | SHZH Wasserpumpe | SHZH Wasserpumpe Unterbrechung / Kurzschluss nach Plus |
| 0x0B | SHZH Wasserpumpe | SHZH Wasserpumpe Kurzschluß nach Masse |
| 0x90 | SHZH Umschaltventil | SHZH Umschaltventil Unterbrechung / Kurzschluss nach Plus |
| 0x10 | SHZH Umschaltventil | SHZH Umschaltventil  Kurzschluß nach Masse |
| 0x88 | SHZH Dosierpumpe | SHZH Dosierpumpe Unterbrechung / Kurzschluss nach Plus |
| 0x08 | SHZH Dosierpumpe | SHZH Dosierpumpe Kurzschluß nach Masse |
| 0x94 | SHZH Wassertemperatursensor | SHZH Wassertemperatursensor Unterbrechung / Kurzschluss nach Plus |
| 0x14 | SHZH Wassertemperatursensor | SHZH Wassertemperatursensor Kurzschluß nach Masse |
| 0x04 | SHZH Unter-/Überspannung | SHZH Unter-/Überspannung Die Spannung war länger als die eingestellte Maximalzeit in Überspannung |
| 0x84 | SHZH Unter-/Überspannung | SHZH Unter-/Überspannung Die Spannung war länger als die eingestellte Maximalzeit in. Unterspannung |
| 0x06 | SHZH Gerät | SHZH Gerät Überhitzung ist aufgetreten |
| 0x07 | SHZH Gerät | SHZH Gerät Heizgerät verriegelt |
| 0x01 | SHZH Gerät | SHZH Gerät Masse-Anbindung fehlerhaft |
| 0x81 | SHZH Gerät | SHZH Gerät EOL-Checksummenfehler |
| 0xAB | SHZH Überhitzungssensor | SHZH Überhitzungssensor Unterbrechung / Kurzschluss nach Plus |
| 0x03 | SHZH Flamme-Start | SHZH Flamme-Start Flammabbruch |
| 0x83 | SHZH Flamme-Start | SHZH Flamme-Start Flammabbruch: wiederholter Abbruch im Heizzyklus |
| 0x02 | SHZH Flamme-Start | SHZH Flamme-Start Kein Start: keine Flamme im Normalbetrieb |
| 0x82 | SHZH Flamme-Start | SHZH Flamme-Start Kein Start: keine Flamme im Testbetrieb |
| 0xA5 | SHZH Kraftstoffvorwärmung | SHZH Kraftstoffvorwärmung Unterbrechung / Kurzschluss nach Plus |
| 0x25 | SHZH Kraftstoffvorwärmung | SHZH Kraftstoffvorwärmung Kurzschluß nach Masse |
| 0x60 | SHZH LIN-Kommunikationsfehler | SHZH LIN-Kommunikationsfehler Bit Error bzw. falsche Checksumme |
| 0x61 | SHZH LIN-Kommunikationsfehler | SHZH LIN-Kommunikationsfehler Bauratedetection fehlgeschlagen |
| 0x62 | SHZH LIN-Kommunikationsfehler | SHZH LIN-Kommunikationsfehler LIN-Timeout (-> Notlauf: Abschaltung) |
| 0x63 | SHZH LIN-Kommunikationsfehler | SHZH LIN-Kommunikationsfehler Signal mit Ungültigkeitssignatur, ungültiger Wertebereich oder Nachricht mit ungültigen Signalkombinationen hat bis zum Ungültigkeits Timeout angestanden |
| 0x70 | SHZH System-Fehler | SHZH System-Fehler Überschreitung der Heizzeitvorgabe |
| 0x71 | SHZH System-Fehler | SHZH System-Fehler Notaus (ohne Nachlauf) wurde angefordert, qualmen möglich |
| 0x29 | SHZH System-Fehler | SHZH System-Fehler Leitungsbefüllung nicht erfolgt |

### TAB_BETRIEBSZUSTAND

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | AUS-Bereit | Heizgerät AUS und in Bereitschaft |
| 0x01 | AUS-Nachlauf | Heizgerät befindet sich im Nachlauf (Wasserpumpe ist anzusteuern). |
| 0x02 | AUS-Störungsnachlauf_Gemeldet | Heizgerät hat sich aufgrund eines Fehlers oder wegen Notaus abgeschaltet. Im Heizgerät findet ein Störungsnachlauf statt; Wasserpumpe ist deshalb von der IHKA anzusteuern. Störung muß von der IHKA mittels AUS-Kommando quittiert werden. |
| 0x03 | AUS-Störungsnachlauf-Quittiert | Folgezustand zu >>AUS-Störungsnachlauf-Gemeldet<< nach erfolgter Quittung durch die IHKA. Störungsnachlauf findet weiterhin statt; Wasserpumpe ist deshalb von der IHKA anzusteuern. Nach Ende des Störungsnachlaufs geht das Heizgerät selbständig in den Zustand >>AUS-Bereit<< |
| 0x04 | EIN-Start | Heizgerät aktiv |
| 0x05 | EIN-Regelpause | Regelpause |
| 0x06 | EIN-Teillast | Teillastbetrieb |
| 0x07 | EIN-Vollast | Vollastbetrieb |
| 0x08 | AUS-Heizgeräteverriegelung | Heizgerät ist verriegelt, Entriegelung notwendig. |
| 0x09 | Nachlauf-Regelpause | Nachlauf der in den Zustand Regelpause führt. |
| 0x0F | Signal ungültig | Ungültigkeitssignatur |

### STATUS_WASSERPUMPE

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | AUS |  |
| 0x01 | EIN |  |
| 0x02 | Nicht verbaut |  |
| 0x03 | Signal ungültig | Ungültigkeitssignatur |

### TAB_BETRIEBSMODUS

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | Keine Auswahl | Keine Betriebsart ausgewählt, SHZH schaltet nicht ein. |
| 0x01 | Standheizen | Heizgerät arbeitet als Standheizer;Heizzeitvorgabe wird berücksichtigt |
| 0x02 | Zuheizen/Pseudozuheizen | Heizgerät arbeitet als Zuheizer (auch Pseudozuheizer); die Heizzeitvorgabe wird nicht berücksichtigt. |
| 0x03 | Signal ungültig | Ungültigkeitssignatur |

### STATUS_KRAFTSTOFFVORWAERMUNG

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | AUS | Kraftstoffvorwaermung ist aus |
| 0x01 | EIN | Kraftstoffvorwaermung ist aktiv |
| 0x03 | Signal ungültig | Ungültigkeitssignatur |

### STATUS_DOSIERPUMPE

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | AUS | Dosierpumpe ist aus |
| 0x01 | EIN | Dosierpumpe wird angesteuert |
| 0x03 | Signal ungültig | Ungültigkeitssignatur |

### STATUS_BRENNLUFTGEBLAESE

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | AUS | Brennluftgeblaese ist aus |
| 0x01 | EIN | Brennluftgeblaese wird angesteuert |
| 0x03 | Signal ungültig | Ungültigkeitssignatur |

### STATUS_GLUEHSTIFT

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | AUS | Gluehstift ist aus |
| 0x01 | EIN | Gluehstift wird angesteuert |
| 0x03 | Signal ungültig | Ungültigkeitssignatur |

### STATUS_UMSCHALTVENTIL

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | AUS | Grosser Kries (Motor) =unbestromt=0% |
| 0x01 | 10% Taktung |  |
| 0x02 | 20% Taktung |  |
| 0x03 | 30% Taktung |  |
| 0x04 | 40% Taktung |  |
| 0x05 | 50% Taktung |  |
| 0x06 | 60% Taktung |  |
| 0x07 | 70% Taktung |  |
| 0x08 | 80% Taktung |  |
| 0x09 | 90% Taktung | 90% auf SH Kreislauf, Rest Motorkreislauf |
| 0x0A | EIN | Ventil steht auf SH Kreislauf=bestromt=100% |
| 0x0B | Nicht verbaut |  |
| 0x0F | Signal ungueltig | Ungültigkeitssignatur |

### STATUS_TESTBETRIEB

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | AUS | Testbetrieb nicht aktiv |
| 0x01 | EIN | Testbetrieb aktiv |
| 0x03 | Signal ungültig | Ungültigkeitssignatur |

### STATUS_FEHLER

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | kein Fehler |  |
| 0x01 | Fehler aktiv |  |
| 0x02 | Fehler Statusänderung |  |
| 0x03 | Signal ungültig | Ungültigkeitssignatur |

### STATUS_COMERROR

| CODE | NAME | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 |  | Die Kommunikation verläuft fehlerfrei |
| 0x01 |  | In der vorherigen Nachricht wurde ein Fehler festgestellt |

### FASTATAB

| FASTABLOCK | TEXT | EINHEIT |
| --- | --- | --- |
| EINS | GESAMTBETRIEBSDAUER_SEKUNDEN | SEKUNDEN |
| ZWEI | GESAMTBETRIEBSDAUER_STUNDEN | STUNDEN |
| DREI | ANZAHL_RESETS | ANZAHL |
| VIER | AUTOKLIMASTILL_SEKUNDEN | SEKUNDEN |
| FUENF | AUTOKLIMASTILL_STUNDEN | STUNDEN |
| SECHS | AUTOKLIMASTIL2_SEKUNDEN | SEKUNDEN |
| SIEBEN | AUTOKLIMASTIL2_STUNDEN | STUNDEN |
| ACHT | AUTOKLIMASTIL3_SEKUNDEN | SEKUNDEN |
| NEUN | AUTOKLIMASTIL3_STUNDEN | STUNDEN |
| ZEHN | AUTOKLIMASTIL4_SEKUNDEN | SEKUNDEN |
| 1EINS | AUTOKLIMASTIL4_STUNDEN | STUNDEN |
| 1ZWEI | AUTOKLIMASTIL5_SEKUNDEN | SEKUNDEN |
| 1DREI | AUTOKLIMASTIL5_STUNDEN | STUNDEN |
| 1VIER | KLIMABETRIEB_SEKUNDEN | SEKUNDEN |
| 1FUENF | KLIMABETRIEB_STUNDEN | STUNDEN |
| 1SECHS | AUCBETRIEB_SEKUNDEN | SEKUNDEN |
| 1SIEBEN | AUCBETRIEB_STUNDEN | STUNDEN |
| 1ACHT | OFFFUNKTION_SEKUNDEN | SEKUNDEN |
| 1NEUN | OFFFUNKTION_STUNDEN | STUNDEN |
| 2NULL | STANDLUEFTEN_SEKUNDEN | SEKUNDEN |
| 2EINS | STANDLUEFTEN_STUNDEN | STUNDEN |
| 2ZWEI | MAXAC_AUS_AUTOMATIK-BETRIEB | ANZAHL |
| 2DREI | DEFROST_AKTIVE_AUS_VOLLAUTOMATIK-BETRIEB | ANZAHL |
| 2VIER | KOMPRESSOR-TASTE | ANZAHL |
| 2FUENF | ALL-TASTE | ANZAHL |
| 2SECHS | AUC_TASTE_AUS_AUC-BETRIEB | ANZAHL |
| 2SIEBEN | TEMPERATURSTELLER_FAHRER | ANZAHL |
| 2ACHT | TEMPERATURSTELLER_BEIFAHRER | ANZAHL |
| 2NEUN | MITTLERE_T_SOLL_BEI_AT_GROESSER_10_GRAD_FAHRER | GRAD_CELCIUS/20 |
| 3NULL | MITTLERE_T_SOLL_BEI_AT_GROESSER_10_GRAD_BEIFAHRER | GRAD_CELCIUS/20 |
| 3EINS | MITTLERE_T_SOLL_BEI_AT_KLEINER_10_GRAD_FAHRER | GRAD_CELCIUS/20 |
| 3ZWEI | MITTLERE_T_SOLL_BEI_AT_KLEINER_10_GRAD_BEIFAHRER | GRAD_CELCIUS/20 |
| 3DREI | RESTWAERME_AKTIVIERT | ANZAHL |
| 3VIER | BATTERIEKUEHLUNG_OHNE_KLIMAANFORDERUNG_SEKUNDEN | 15_SEKUNDEN |
| 3FUENF | BATTERIEKUEHLUNG_OHNE_KLIMAANFORDERUNG_STUNDEN | STUNDEN |
| 3SECHS | ANZAHL_AKTIVIERUNG_STANDKUEHLEN_ERHALTUNGSKUEHLEN | ANZAHL |
| 3SIEBEN | ANZAHL_DEAKTIVIERUNG_STANDKUEHLEN_ERHALTUNGSKUEHLEN | ANZAHL |
| 3ACHT | BETRIEBSSEKUNDEN_EKMV_BEI_KLEMME15_EIN_UND_MOTOR_AUS | SEKUNDEN |
| 3NEUN | BETRIEBSSTUNDEN_EKMV_BEI_KLEMME15_EIN_UND_MOTOR_AUS | STUNDEN |
| 4NULL | ANZAHL_AKTIVIERUNGSVERSUCHE_STANDHEIZUNG_DIREKTBETRIEB | ANZAHL |
| 4EINS | ANZAHL_AKTIVIERUNGSVERSUCHE_STANDHEIZUNG_TELESTART | ANZAHL |
| 4ZWEI | ANZAHL_AKTIVIERUNGSVERSUCHE_STANDHEIZUNG_TIMER | ANZAHL |
| 4DREI | ANZAHL_AKTIVIERUNGSVERSUCHE_STANDLUEFTEN_DIREKTBETRIEB | ANZAHL |
| 4VIER | ANZAHL_AKTIVIERUNGSVERSUCHE_STANDLUEFTEN_TELESTART | ANZAHL |
| 4FUENF | ANZAHL_AKTIVIERUNGSVERSUCHE_STANDLUEFTEN_TIMER | ANZAHL |
| 4SECHS | ANZAHL_AKTIVIERUNGSVERSUCHE_SH_SL_START_STANDHEIZUNG | ANZAHL |
| 4SIEBEN | ANZAHL_AKTIVIERUNGSVERSUCHE_SH_SL_START_STANDLUEFTUNG | ANZAHL |
| 4ACHT | ANZAHL_STANDHEIZVORGAENGE_KLEINER_10_MIN | ANZAHL |
| 4NEUN | ANZAHL_STANDHEIZVORGAENGE_ZWISCHEN_10_20_MIN | ANZAHL |
| 5NULL | ANZAHL_STANDHEIZVORGAENGE_GROESSER_20_MIN | ANZAHL |
| 5EINS | ANZAHL_PSEUDOZUHEIZVORGAENGE | ANZAHL |
| 5ZWEI | ANZAHL_FAHRTEN_MOTOR_STARTET_LAEUFT | ANZAHL |
| 5DREI | ANZAHL_ZUHEIZVORGAENGE_KLEINER_3_MIN | ANZAHL |
| 5VIER | ANZAHL_ZUHEIZVORGAENGE_ZWISCHEN_3_7_MIN | ANZAHL |
| 5FUENF | ANZAHL_ZUHEIZVORGAENGE_GROESSER_7_MIN | ANZAHL |
| 5SECHS | FAHRSTRECKE_ZWISCHEN_STANDHEIZVORGAENGE | ANZAHL |
| 5SIEBEN | BETRIEBSSEKUNDEN_STANDHEIZEN | SEKUNDEN |
| 5ACHT | BETRIEBSSTUNDEN_STANDHEIZEN | STUNDEN |
| 5NEUN | VERHINDERER_SH_DURCH_POWERMANAGEMENT | ANZAHL |
| 6NULL | ANZAHL_AKTIVIERUNGEN_STANDKUEHLEN | ANZAHL |
| 6EINS | ANZAHL_AKTIVIERUNGEN_ERHALTUNGSKUEHLEN | ANZAHL |
| 6ZWEI | ANZAHL_START_STANDHEIZGERAET_AT_UNTER_-10_GRAD | ANZAHL |
| 6DREI | ANZAHL_START_STANDHEIZGERAET_AT_ZWISCHEN_-10_0_GRAD | ANZAHL |
| 6VIER | ANZAHL_ABBRUECHE_STANDHEIZUNG_AT_UNTER_-10_GRAD | ANZAHL |
| 6FUENF | ANZAHL_ABBRUECHE_STANDHEIZUNG_AT_ZWISCHEN_-10_0_GRAD | ANZAHL |
| 6SECHS | ANZAHL_RESETS_BEI_AKTIVER_STANDHEIZUNG | ANZAHL |
