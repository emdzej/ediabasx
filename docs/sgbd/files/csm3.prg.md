# csm3.prg

## General

|  |  |
| --- | --- |
| File | csm3.prg |
| Type | PRG |
| Jobs | 57 |
| Tables | 62 |
| Origin | BMW EI-400 Lemkemeyer |
| Revision | 4.001 |
| Author | BMW UA-71 Subtil, BMW EI-400 Lemkemeyer, BMW EI-400 Anton |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CarSharing Modul 3.0 Sonderzubehör |  |  |
| ORIGIN | string | BMW EI-400 Lemkemeyer |  |  |
| REVISION | string | 4.001 |  |  |
| AUTHOR | string | BMW UA-71 Subtil, BMW EI-400 Lemkemeyer, BMW EI-400 Anton |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.45 |  |  |
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

### DIAG_SESSION_LESEN

Aktive Diagnose-Session auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F186 ActiveDiagnosticSession Modus: Default

_No arguments._

### FLASH_TP_LESEN

Flash Timing Parameter auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2504 FlashTimingParameter Modus: Default

_No arguments._

### _STATUS_VIRT_KEY

Der Job liefert Status des virtuellen Schlüssels. Das Passwort kann man nur bei nicht gesperrtem Zugriff auslesen.

_No arguments._

### _STATUS_SECU_SW

Software status.

_No arguments._

### _STATUS_NAD

Der Job liefert den Status der Verbindung zum BMW-Backend und die IMEI-Nummer

_No arguments._

### _STATUS_TEMPERATUR

Der Job liefert alle verfuegbaren Temperaturwerte

_No arguments._

### _STATUS_SIMKARTE

Der Job liefert den Status der Telefon SIM-Karte

_No arguments._

### _STATUS_INTERNER_SPANNUNGEN

Der Job liefert die verwendeten Versorgungsspannungen (Batteriespannung, Versorgungsspannung AC, SC, AE, etc)

_No arguments._

### _STATUS_CPU_LAST

Der Job liefert die Status der Mikrocontroller

_No arguments._

### _STATUS_NFC_INNENLESER

Der Job liefert die Kenngroessen eines NFC-Device

_No arguments._

### _STATUS_NAEHERUNGSSENSOR

Der Job liefert das Messverfahren, den Schwellwert, den Messwert des Naeherungssensor und ob durch Naeherungssensor geweckt wurde

_No arguments._

### _STATUS_BLUETOOTH_VERBINDUNG

Der Job liefert die aktivierten Bluetooth-Profile

_No arguments._

### _STATUS_USB

Der Job liefert die aktivierten Bluetooth-Profile

_No arguments._

### _STATUS_HELLIGKEITSSENSOR

Der Job liefert  die  aktuelle  Beleuchtungsstaerke  und  die  relative Beleuchtungsstaerke des Helligkeitssensors

_No arguments._

### _STATUS_KALIBRIERUNG_ANTENNE_NFC

Der Job liefert den Status der Kaliebrierung der Antenne von NFC auf der AE

_No arguments._

### _STATUS_LED_HELLIGKEIT_AE

Der Job liefert die absolute und die relative Helligkeit der LEDs auf der AE in Prozent

_No arguments._

### _STEUERN_VIRT_KEY

Schreiben eines unverschlüsselten virtuellen Schlüssels ins CSM. Bei EELock=1 ist Schreiben des virtuellen Schlüssels nur über das CAO-Objekt möglich.

| Name | Type | Description |
| --- | --- | --- |
| BDC_POSITION | unsigned char | Position im BDC (gültige Werte 18 / 19) |
| IDENTIFIER | string | Identifier |
| SECRET_KEY | string | Abgeleiteter VK-Sescret Key. |
| PASSWORT | string | Passwort. |

### _STEUERN_EE_LOCK

Sperrung der sicherheitskritischen Daten => EELock = 1.

| Name | Type | Description |
| --- | --- | --- |
| BEFEHL_EE | unsigned char | = 1 - sicherheitskritische Daten werden gesperrt. - die Schlüsselgenerierung wird gesperrt. - in RAM temporär gespeicherte symmetrische Schlüssel werden gelöscht. |
| SERIENNUMMER_CSE | string | UID  - Seriennummer von CSE |

### _STEUERN_WRITE_VIRT_KEY

Schreiben eines im CAO-Objekt verschlüsselten virtuellen Schlüssels ins CSM. Es handelt sich um einen Parallelweg zum GSM-Modem fürs CAO-Objekt.

| Name | Type | Description |
| --- | --- | --- |
| CAO_LEN | unsigned int | Länge des CAO-Objekts (max. 256 Byte) = 0 - CAO-Objekt wird aus einer Datei <caoFile> gelesen > 0 - CAO-Objekt wird direkt als Parameter CAO eingegeben |
| CAO | string | CAO Objekt CAO_LEN = 0 => Dateiname <caoFile> CAO_LEN > 0 => CAO-Objekt |

### _STEUERN_NAEHERUNGSSENSOR

Vorgabe des Messverfahren und des Schwellwert des Naeherungssensor

| Name | Type | Description |
| --- | --- | --- |
| MESSVERFAHREN | unsigned char | Vorgabe des Messverfahren des Naeherungssensor 0 = Phase (default), 1 = Amplitude |
| SCHWELLWERT | unsigned char | Vorgabe des Schwellwert des Naeherungssensor von 0 .. 15 |

### _STEUERN_BLUETOOTH_VERBINDUNG_UNPAIREN

die Bluetooth-Verbindung im AC zurücksetzen Anmerkung: Es erfolgt ein automatisches Pairing der Bluetooth-Verbindung

_No arguments._

### _STEUERN_WATCHDOG_TEST

Testet den Watchdog indem er ausgeloest wird

_No arguments._

### _STEUERN_VORGABE_RELATIVE_UMGEBUNGSHELLIGKEIT

Vorgabe der relativen Umgebungshelligkeit des Helligkeitssensors auf der AE für eine angegebene Zeit

| Name | Type | Description |
| --- | --- | --- |
| RELATIVE_UMGEBUNGSHELLIGKEIT | unsigned char | Vorgabe der relative Umgebungshelligkeit 0 - 100% |
| ANSTEUER_ZEIT | unsigned char | Zeitangabe der Diagnosevorgabe Auflösung 0.1 Sek |

### _STEUERN_MAX_UMGEBUNGS_HELLIGKEIT

Schreiben der max. Umgebungshelligkeit -> 100% relative Umgebungshelligkeit

| Name | Type | Description |
| --- | --- | --- |
| MAX_UMGEBUNGS_HELLIGKEIT | unsigned int | 0 .. 64000 |

### _STEUERN_KALIBRIERUNG_ANTENNE_NFC

Startet die Kaliebrierung der Antenne von NFC auf der AE

_No arguments._

### _STATUS_CRYPT_KEY

Der Job dient zum Auslesen der gerade generierten Schlüssel. Normalerwiese wird nach STEUERN_KEY_GEN ausgeführt.  Parameter: Kx - Key selection  Subfunktion 1: Start Subfunktion 3: Result lesen

| Name | Type | Description |
| --- | --- | --- |
| KEY_SELECTION | unsigned char | Kx -  Key selection K0   = 0x00 - alle Schlüssel im ASCII Format K1   = 0x01 - MasterKey K2   = 0x02 - reserviert für KeyID = 0x02 (BOOT_MAC_KEY) K3   = 0x03 - reserviert für KeyID = 0x03 (BOOT_MAC) K4   = 0x04 - AuthIMMOA - KeyID = 0x04 (KEY_1) K5   = 0x05 - EncCSMA_symm - KeyID = 0x05 (KEY_2) K6   = 0x06 - EncCSMB_symm - KeyID = 0x06 (KEY_3) K7   = 0x07 - reserviert für CSE KeyID = 0x07 (KEY_4) K8   = 0x08 - reserviert für CSE KeyID = 0x08 (KEY_5) K9   = 0x09 - reserviert für CSE KeyID = 0x09 (KEY_6) K10 = 0x0A - reserviert für CSE KeyID = 0x0A (KEY_7) K11 = 0x0B - reserviert für CSE KeyID = 0x0B (KEY_8) K12 = 0x0C - reserviert für CSE KeyID = 0x0C (KEY_9) K13 = 0x0D - reserviert für CSE KeyID = 0x0D (KEY_10) K14 = 0x0E - reserviert für EncCSMC_symm K15 = 0x0F - Session Key für KEY_DELETE K16 = 0x10 - SigCSMpub & SigCSMpriv K17 = 0x11 - EncCSMpub & EncCSMpriv |

### _STEUERN_KEY_GEN

Der Job startet Generierung aller Schlüssel nacheinander wenn: - alle Schlüssel gelöscht sind. - sicherheitskritische Daten nicht gelockt sind. alternativ: Der Job startet Generierung eines Schlüssels bzw. eines Schlüsselpaars, wichtig für spätere Generierung eines weiteren Schlüssels. Der generierte Schlüssel und sein Status wird per STATUS_CRYPT_KEY gelesen.

| Name | Type | Description |
| --- | --- | --- |
| KEY_SEL | unsigned char | 0x00 - alle Schlüssel  alternativ: 0x01 - Master ECU Key - Alle Schlüssel im CSE werden gelöscht - Zähler-Block CseKeyCnt  wird komplett gelöscht - Master ECU Key wird neu generiert und im CSE gespeichert 0x02 - reserviert 0x03 - reserviert 0x04 - reserviert 0x05 - EncCSMA_symm 0x06 - EncCSMB_symm 0x07 - reseviert für CSE KeyID=0x07 0x08 - reseviert für CSE KeyID=0x08 0x09 - reseviert für CSE KeyID=0x09 0x0A - reseviert für CSE KeyID=0x0A 0x0B - reseviert für CSE KeyID=0x0B 0x0C - reseviert für CSE KeyID=0x0C 0x0D - reseviert für CSE KeyID=0x0D 0x0E - EncCSMC_symm 0x0F - unbenutzt 0x10 - SigCSMpub & SigCSMpriv 0x11 - EncCSMpub & EncCSMpriv |

### _STEUERN_KEY_DELETE

Job Löschen aller SecretKeys und Aufhebung der EEPROM-Datensperre => EELock = 0. Alternativ wird der Vorgang durch ein Kommunikationsobjekt vom BE gestartet, mit Zufallsnummer ( session Key) vom CSM - in RAM.  Die Signatur wird aus folgendem 24Byte Datenblock berechnet: [0] - Befehl = 1 [1..15] - UID, 15Byte [16..23] - Session Key - dieser Key wird durch den Job _STATUS_CRYPT_KEY(K15) als Zufallszahl generiert. Falls die Daten bereits entsperrt sind, werden die SecretKeys ohne Signaturprüfung gelöscht. Für die Signaturprüfung wird einer von 10 BMW Signaturschlüsseln benutzt.

| Name | Type | Description |
| --- | --- | --- |
| BEFEHL_DELETE | unsigned char | = 1 - alle Secret Keys incl. CSE löschen und EEPROM Sperre aufheben |
| SERIENNUMMER_CSE | string | UID - CSE-Seriennummer |
| BMW_PUBKEY_NR | unsigned char | Nummer des BBE public Key 0 - bei EELock=0 1 - SigBMWpub_1 ... 10 - SigBMWpub_10 |
| SIGNATUR_BBE | string | Signatur vom BBE bei EELock = 0: Signatur = 0x00, 0x00,...,0x00 |

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

### ARG_0X1032_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_STATE | + | - | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | - | - | Steuerung der TAS-Nutzung |

### ARG_0X1033_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_REQUEST | + | - | 0-n | high | unsigned char | - | TASU_REQUEST_TAB | - | - | - | - | - | auszuführendes Kommando |

### ARG_0XA095_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GREEN_LED | + | - | 0-n | high | unsigned char | - | TAB_CSM_LED_STATUS | - | - | - | - | - | Auswahl der LED die angesteuert werden soll. Siehe Tabelle TBA_CSM_LED |
| GREEN_LED_LICHTLEISTUNG | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Legt die Leistung in % fest mit der die LEDs angesteuert werden. MIN = 0 MAX = 100 |
| YELLOW_LED | + | - | 0-n | high | unsigned char | - | TAB_CSM_LED_STATUS | - | - | - | - | - | Auswahl der LED die angesteuert werden soll. Siehe Tabelle TBA_CSM_LED |
| YELLOW_LED_LICHTLEISTUNG | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Legt die Leistung in % fest mit der die LEDs angesteuert werden. MIN = 0 MAX = 100 |
| RED_LED | + | - | 0-n | high | unsigned char | - | TAB_CSM_LED_STATUS | - | - | - | - | - | Auswahl der LED die angesteuert werden soll. Siehe Tabelle TBA_CSM_LED |
| RED_LED_LICHTLEISTUNG | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Legt die Leistung in % fest mit der die LEDs angesteuert werden. MIN = 0 MAX = 100 |
| ARG_TIME | + | - | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 255.0 | Dauer der Ansteuerung in Sekunden. 255 entspricht dabei keiner zeitlichen Begrenzung. |

### ARG_0XA096_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TEST_ROUTINE | + | - | 0-n | high | unsigned char | - | TAB_CSM_HW_TEST | - | - | - | - | - | Gibt an welche Hardware getestet werden soll. |

### ARG_0XD0DB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_CONTROLLER | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 3.0 | Auswahl des Controllers 0 = alle 1 = Außeneinheit 2 = Android Controller 3 = NAD |

### BF_ANGLERNT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANGELERNT_VIN | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Status Fahrgestellnummer angelernt. 0 = nicht angelernt 1 = angelernt |
| STAT_ANGELERT_SIM | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Status SIM angelernt. 0 = nicht angelernt 1 = angelernt |
| STAT_ANGELERNT_CARD1 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Status Karte 1 angelernt. 0 = nicht angelernt 1 = angelernt |
| STAT_ANGELERNT_CARD2 | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Status Karte 2 angelernt. 0 = nicht angelernt 1 = angelernt |
| STAT_ANGELERNT_CARD3 | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Status Karte 3 angelernt. 0 = nicht angelernt 1 = angelernt |
| STAT_ANGELERNT_CARD4 | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Status Karte 4 angelernt. 0 = nicht angelernt 1 = angelernt |
| STAT_ANGELERNT_CARD5 | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Status Karte 5 angelernt. 0 = nicht angelernt 1 = angelernt |

### BF_CSM_HW

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INTERNER_CSM_TEST | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Interner CSM Test |
| STAT_SIM_CARD | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Testet die SIM Karte |
| STAT_INTERNER_AE_TEST | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Interner Test der Ausseneinheit |
| STAT_USB_CONNECTION | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Testet die USB Verbindung |
| STAT_GSM_ANTENNE | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Testet die GSM Antenne |
| STAT_LIN_CONNECTION | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Testet die LIN Verbindung |
| STAT_BT_CONNECTION | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Testet die Bluetooth Verbindung |
| STAT_CAN_CONNECTION | 0/1 | high | unsigned char | 0x80 | - | - | - | - | Testet die CAN Verbindung |

### BF_NAD_STATUS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NAD_BETRIEBSZUSTAND | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Status Betriebszustand NAD 0 = sleep 1 = in Betrieb |
| STAT_NAD_ONLINE | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Status Onlineverbindung NAD 0 = inaktiv 1 = aktiv |

### BF_SYSTEMBEREITSCHAFT

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AC_SPANNUNGSVERSORGUNG | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Sapnnungsversorgung Android Controler 0 = aus 1 = ein |
| STAT_BOOTZUSTAND | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Bootzustand 0 = Bootvorgang aktiv 1 = Bootvorgang abgeschlossen |
| STAT_USB_VERBINDUNG | 0/1 | high | unsigned char | 0x04 | - | - | - | - | USB-Verbindung 0 = inaktiv 1 = aktiv |
| STAT_BT_VERBINDUNG_AKTIV | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Bluetoothverbindung aktiviert 0 = inaktiv 1 = aktiv |
| STAT_BT_PAIRING | 0/1 | high | unsigned char | 0x10 | - | - | - | - | Bluetooth-Verbindung gekoppelt 0 = nicht gekoppelt 1 = gekoppelt |
| STAT_SHUTDOWN_BEREIT | 0/1 | high | unsigned char | 0x20 | - | - | - | - | Shutdown-Bereitschaft 0 = inaktiv 1 = aktiv |
| STAT_SC_KOMMUNIKATION | 0/1 | high | unsigned char | 0x40 | - | - | - | - | Kommunikation Securety Controler 0 = inaktiv 1 = aktiv |

### BF_ZSG_EWS

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZSG_EWS_ERROR | 0-n | high | unsigned char | 0xF0 | TAB_EWS_FEHLER | - | - | - | Fehlercode vom ZSG ZSG_EWS_ERROR bbbb - - - - = 0 - kein Fehler = 1 - Sequenz-Fehler (Kommunikation-Fehler) = 2 - Authentisierungs-Fehler = 3 - Request-Fehler = 14 - allgemeiner = 15 - reserviert |
| STAT_ZSG_EWS_STATUS | 0-n | high | unsigned char | 0x01 | TAB_EWS_STATUS | - | - | - | ZSG_EWS_STATUS 0 - EWS im ZSG ist nicht freigegeben 1 - EWS im ZSG ist freigegeben |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

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
| 0x023200 | Energiesparmode aktiv | 0 |
| 0x02FF32 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x806601 | Interner Steuergerätefehler: Hardware | 0 |
| 0x806602 | Interner Steuergerätefehler: Software | 0 |
| 0x806603 | Ausseneinheit: Hardwarefehler | 0 |
| 0x806604 | Ausseneinheit: Softwarefehler | 0 |
| 0x806605 | GSM Antenne: Fehlfunktion | 0 |
| 0x806606 | Bluetooth Verbindung: Kommunikationsfehler | 0 |
| 0x806607 | USB Verbindung: Kommunikationsfehler | 0 |
| 0x806608 | LIN-Bus Ausseneinheit: Kommunikationsfehler | 0 |
| 0x806609 | LIN-Bus Ausseneinheit: Physikalischer Fehler | 0 |
| 0x806610 | Überspannung erkannt | 1 |
| 0x806611 | Unterspannung erkannt | 1 |
| 0x806622 | SIM-Karte Fehler | 0 |
| 0x806623 | SIM-Karte PIN | 0 |
| 0xD5845F | BODY-CAN Physikalischer Busfehler | 0 |
| 0xD58468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xD58BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD59401 | Botschaft (ZV und Klappenzustand, 0x2FC): Ausfall oder Signal ungültig | 1 |
| 0xD59402 | Botschaft (Navigation GPS 1, 0x34A): Ausfall oder Signal ungültig | 1 |
| 0xD59403 | Botschaft (Fahrzeugzustand, 0x3A0): Ausfall oder Signal ungültig | 1 |
| 0xD59404 | Botschaft (Nachlaufzeit Stromversorgung, 0x3BE): Ausfall oder Signal ungültig | 1 |
| 0xD59405 | Botschaft (Daten Antriebsstrang 2, 0x3F9): Ausfall oder Signal ungültig | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6000 | Versorgungsspannung | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x6001 | Steuergerätetemperatur | °C | High | signed char | - | 1.0 | 1.0 | 0.0 |
| 0x6002 | SIM Fehlerart | 0-n | High | 0xFF | TAB_SIM_FEHLERART | - | - | - |
| 0x6003 | SIM Status | 0-n | High | 0xFF | TAB_SIM_STATUS | - | - | - |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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
| 0x320001 | Kein Mobilfunkempfang | 0 |
| 0x320002 | SC Watchdog zugeschlagen | 0 |
| 0x320003 | AE HW Fehler | 0 |
| 0x320004 | Komponente vom Lifecycle ausgeschlossen | 0 |
| 0x320005 | Sekundaerer Anwendungs-Dummy DTC | 0 |
| 0x320006 | Sekundaerer Netzwerk-Dummy DTC | 0 |
| 0x321000 | OSEK OS ErrorHook Fehler | 0 |
| 0x321001 | OSEK OS Stack-Overflow Fehler | 0 |
| 0x321002 | OSEK OS Assertion | 0 |
| 0x321003 | OSEK OS Board Invalid | 0 |
| 0x322001 | NFC Transceiver HW Fehler | 0 |
| 0x322002 | SC HW Flash / RAM Fehler | 0 |
| 0x322200 | NFC Transceiver Communication Fehler | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x6101 | Runlevel of excluded lifecycle component | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6102 | Index in runlevel of excluded lifecycle component | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6103 | Lifecycle state of excluded component | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6104 | Lifecycle-Modus | 0-n | High | 0xFF | TAB_LIFECYCLE_MODE | - | - | - |
| 0x6200 | ErrorHook verursachender Task | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6201 | ErrorHook Callee | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6202 | ErrorHook Status | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6203 | Stack-Overflow verursachender Task | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6204 | Adresse der AssertionMessage | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6205 | Adresse des AssertionFile | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6206 | Adresse der AssertionZeile | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6207 | Board Invalid Stack Pointer | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6208 | Board Invalid SRR0 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6209 | Board Invalid Reason | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6300 | Anzahl Fehler AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6301 | Fehler 1 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6302 | Fehler 2 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6303 | Fehler 3 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6304 | Fehler 4 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6305 | Fehler 5 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6306 | Fehler 6 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6307 | Fehler 7 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6308 | Fehler 8 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x6309 | Fehler 9 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x630A | Fehler 10 AE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### KEY_DEL_TABELLE

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 - Alle Daten sind gelöscht und Zugriff freigegeben |
| 0x01 | 0x01 - Entsperrung EEPROM fehlgeschlagen |
| 0x02 | 0x02 - Löschen des virtuellen Schlüssels fehlgeschlagen |
| 0x03 | 0x03 - Löschen ECC Keys fehlgeschlagen |
| 0x04 | 0x04 - Löschen CSE Keys fehlgeschlagen |
| 0x05 | 0x05 - Löschen EEPROM symmetrischen Keys fehlgeschlagen |
| 0x06 | 0x06 - Fehlerhafte Parameter oder ungültige Signatur |
| 0xFF | 0xFF - Ungültig |

### KEY_STATUS_TABELLE

| WERT | TEXT |
| --- | --- |
| 0 | Gelöscht |
| 1 | Ungültig - Inkonsistenz zwischen pub / priv |
| 2 | Gültig |
| 255 | Anlieferzustand (Flash gelöscht) |

### RES_0X1032_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASU_STATE | - | - | + | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | Steuerung der TAS-Nutzung |

### RES_0XA095_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GREEN_LED | - | - | + | 0-n | high | unsigned char | - | TAB_CSM_LED_STATUS | - | - | - | LED die angesteuert wurde. Siehe Tabelle TBA_CSM_LED |
| STAT_GREEN_LED_LICHTLEISTUNG_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung in % mit der die LED angesteuert wurde. MIN = 0 MAX = 100 |
| STAT_YELLOW_LED | - | - | + | 0-n | high | unsigned char | - | TAB_CSM_LED_STATUS | - | - | - | LED die angesteuert wurde. Siehe Tabelle TBA_CSM_LED |
| STAT_YELLOW_LED_LICHTLEISTUNG_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung in % mit der die LED angesteuert wurde. MIN = 0 MAX = 100 |
| STAT_RED_LED | - | - | + | 0-n | high | unsigned char | - | TAB_CSM_LED_STATUS | - | - | - | LED die angesteuert wurde. Siehe Tabelle TBA_CSM_LED |
| STAT_RED_LED_LICHTLEISTUNG_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Leistung in % mit der die LED angesteuert wurde. MIN = 0 MAX = 100 |

### RES_0XA096_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| - | - | - | + | Bit | high | BITFIELD | - | BF_CSM_HW | - | - | - | Bitfield für Hardware Status |
| STAT_CSM_HW_TEST | - | - | + | 0-n | high | unsigned char | - | TAB_TESTSTATUS | - | - | - | Status des Hardware-Tests. |

### RES_0XD0D9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUCHUNG | 0-n | high | unsigned char | - | TAB_STAT_BUCHUNG | - | - | - | Status der Buchung des Fahrzeugs. |
| - | Bit | high | BITFIELD | - | BF_ANGLERNT | - | - | - | Bitfield für Anlernstatus |
| STAT_KLEMME | 0-n | high | unsigned char | - | TAB_STATUS_KLEMME | - | - | - | Klemmenstatus |
| - | Bit | high | BITFIELD | - | BF_SYSTEMBEREITSCHAFT | - | - | - | Bitfield für Systembereitschaft |
| - | Bit | high | BITFIELD | - | BF_NAD_STATUS | - | - | - | Bitfield für NAD Status |
| STAT_NAD_SIGNAL_WERT | dBm | high | char | - | - | 1.0 | 1.0 | 0.0 | Status Signalstärke Onlineverbindung NAB in dBm |

### RES_0XD0DC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SIMKARTE_VORHANDEN | 0/1 | high | unsigned char | - | - | - | - | - | SIM Karte vorhanden / 0 = nein / 1 = ja |
| STAT_SIMKARTE_AKTIVIERT | 0/1 | high | unsigned char | - | - | - | - | - | SIM Karte aktiviert / 0 = nein / 1 = ja |
| STAT_SIMKARTE_FEHLERHAFT | 0/1 | high | unsigned char | - | - | - | - | - | SIM Karte fehlerhaft / 0 = nein / 1 = ja |
| STAT_PIN_GESPERRT | 0/1 | high | unsigned char | - | - | - | - | - | SIM Karte PIN gesperrt / 0 = nein / 1 = ja |
| STAT_PIN_GUELTIG | 0/1 | high | unsigned char | - | - | - | - | - | SIM Karte PIN gueltig / 0 = nein / 1 = ja |
| STAT_ICC_ID_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | ICC-ID |
| STAT_IMEI_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | IMEI |

### RES_0XD1FF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SC_BL_PROCESSCLASS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Bootloader Prozessklasse SC |
| STAT_SC_BL_ID_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Bootloader ID SC |
| STAT_SC_BL_VERSIONSINFO_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Bootloader Versionsinfo SC |
| STAT_SC_APP_PROCESSCLASS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Applikation Prozessklasse SC |
| STAT_SC_APP_ID_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Applikation ID SC |
| STAT_SC_APP_VERSIONSINFO_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Applikation Versionsinfo SC |
| STAT_AE_BL_PROCESSCLASS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Bootloader Prozessklasse AE |
| STAT_AE_BL_ID_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Bootloader ID AE |
| STAT_AE_BL_VERSIONSINFO_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Bootloader Versionsinfo AE |
| STAT_AE_APP_PROCESSCLASS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Applikation Prozessklasse AE |
| STAT_AE_APP_ID_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Applikation ID AE |
| STAT_AE_APP_VERSIONSINFO_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Applikation Versionsinfo AE |
| STAT_NAD_BOOTLOADER_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Bootloader NAD |
| STAT_NAD_APPLIKATION_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Applikation NAD |
| STAT_AC_PLATFORM_TEXT | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Android Contoler Plattform |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_STEUERN_STATUS | 0x1032 | - | RID zum Steuern des TASU bzw. Abfragen von dessen Status. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1032_R | RES_0x1032_R |
| TAS_REQUEST | 0x1033 | - | Der RID wird verwendet, um ein Steuergerät zu veranlassen, einen Auftrag an den TAS zu schicken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1033_R | - |
| LED_ANZEIGE_AE | 0xA095 | - | Mit dem Diagnosejob wird der Betriebsmodus, die Helligkeit und die Ansteuerzeit der 3 LEDs auf der Außeneinheit vorgegeben. Im Status wird der Betriebsmode und die relative Stromansteuerung der LEDs ausgelesen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA095_R | RES_0xA095_R |
| CSM_HW_TEST | 0xA096 | - | Mit dem Diagnosejob wird die eine HW-Funktionsprüfung der internen und externen Komponenten vom CSM und der Außeneinheit durchgeführt. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA096_R | RES_0xA096_R |
| CSM_SYSTEM | 0xD0D9 | - | Mit dem Diagnosejob wird der Buchungsstatus und der Anlernstatus ausgelesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0D9_D |
| CSM_RESET_CONTROLLER | 0xD0DB | - | Mit dem Diagnosejob wird angegeben, welcher Mikrocontroller zurückgesetzt wird. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD0DB_D | - |
| CSM_SIM | 0xD0DC | - | Mit dem Diagnosejob wird der Status der Telefon SIM-Karte im CSM ausgelesen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0DC_D |
| SW_VERSION_CSM | 0xD1FF | - | Liest die SW Versionen des CSM aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1FF_D |

### TAB_AD_CARD

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 - Keine AD-Karte Vorhanden |
| 0x01 | 0x01 - AD Karte ist unbekannt |
| 0x02 | 0x02 - AD Karte ist authentisiert |
| 0x03 | 0x03 - AD Karte ist gesperrt |
| 0x04 | 0x04 - AD Karte wird vom Administrator blockiert |
| 0xFF | 0xFF - Ungültig |

### TAB_CRYPT_KEY_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 - gelöscht |
| 0x01 | 0x01 - ungültig - Inkonsistenz zwischen pub / priv |
| 0x02 | 0x02 - gültig |
| 0xFF | 0xFF - Anlieferzustand (Flash gelöscht) |

### TAB_CRYPT_KEY_STATE_ALLE

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 = Gelöscht, keine neuen Schlüssel generiert (seit PowerON) |
| 0x01 | 0x01 = Keys ungültig, fehlerhafte Schlüsselgenerierung |
| 0x02 | 0x02 = Schlüssel generiert und bereit zum Auslesen |
| 0x03 | 0x03 = kKeine Schlüsselgenerierung / Auslesen möglich - EELock=1 |
| 0x04 | 0x04 = Schlüssel generiert aber nicht lesbar |
| 0xFF | 0xFF = Anlieferzustand (Flash gelöscht) |

### TAB_CSM_HW_TEST

| WERT | TEXT |
| --- | --- |
| 0x01 | CSM intern |
| 0x02 | SIM Karte |
| 0x04 | AE intern |
| 0x08 | USB Verbindung |
| 0x10 | GSM Antenne |
| 0x20 | LIN Verbindung |
| 0x40 | Bluetooth Verbindung |
| 0x80 | CAN Verbindung |
| 0xFF | Alle |

### TAB_CSM_LED_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | LED aus |
| 0x01 | LED an/Dauerlicht |
| 0x02 | LED normal blinkend |
| 0x03 | LED schnell blinkend |
| 0x04 | LED blitzend |
| 0xFF | Ungültiger Wert |

### TAB_EE_LOCK_STATE

| WERT | TEXT |
| --- | --- |
| 0x01 | 0x01 = EEPROM und Schlüsselgenerierung nicht gesperrt |
| 0x02 | 0x02 = EEPROM und Schlüsselgenerierung gesperrt |
| 0xFF | 0xFF = Ungültig |

### TAB_EWS_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 = Kein Fehler |
| 0x01 | 0x01 = Sequenz-Fehler (Kommunikation-Fehler) |
| 0x02 | 0x02 = Authentisierungs-Fehler |
| 0x03 | 0x03 = Request-Fehler |
| 0x0E | 0x0E = Allgemeiner Fehler |
| 0x0F | 0x0F = Reserviert |

### TAB_EWS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 = EWS im ZSG ist nicht freigegeben |
| 0x01 | 0x01 = EWS im ZSG ist freigegeben |

### TAB_KEY_GEN_ERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 = Alle Schlüssel wurden fehlerfrei generiert |
| 0x01 | 0x01 = Generierung EncCSMC_symm |
| 0x02 | 0x02 = Generierung EncCSMB_symm |
| 0x03 | 0x03 = Generierung EncCSMA_symm |
| 0x04 | 0x04 = Generierung EncCSMpriv & EncCSMpub |
| 0x05 | 0x05 = Generierung SigCSMpriv & SigCSMpub |
| 0xF0 | 0xF0 = Generierung wurde gestartet - durch STEUERN_KEY_GEN |
| 0xFE | 0xFE = Generierung gesperrt ( EELock=1) |
| 0xFF | 0xFF = Signal ungültig |

### TAB_KEY_SELECTION

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 = Alle Schlüssel auslesen |
| 0x01 | 0x01 = MasterKey |
| 0x02 | 0x02 = Reserviert für KeyID = 0x02 (BOOT_MAC_KEY) |
| 0x03 | 0x03 = Reserviert für KeyID = 0x03 (BOOT_MAC) |
| 0x04 | 0x04 = AuthIMMOA - KeyID = 0x04 (KEY_1) |
| 0x05 | 0x05 = EncCSMA_symm - KeyID = 0x05 (KEY_2) |
| 0x06 | 0x06 = EncCSMB_symm - KeyID = 0x06 (KEY_3) |
| 0x07 | 0x07 = Reserviert für CSE KeyID = 0x07 (KEY_4) |
| 0x08 | 0x08 = Reserviert für CSE KeyID = 0x08 (KEY_5) |
| 0x09 | 0x09 = Reserviert für CSE KeyID = 0x09 (KEY_6) |
| 0x0A | 0x0A = Reserviert für CSE KeyID = 0x0A (KEY_7) |
| 0x0B | 0x0B = Reserviert für CSE KeyID = 0x0B (KEY_8) |
| 0x0C | 0x0C = Reserviert für CSE KeyID = 0x0C (KEY_9) |
| 0x0D | 0x0D = Reserviert für CSE KeyID = 0x0D (KEY_10) |
| 0x0E | 0x0E = Reserviert für EncCSMC_symm |
| 0x0F | 0x0F = Session Key Block für KEY_DELETE |
| 0x10 | 0x10 = SigCSMpub & SigCSMpriv |
| 0x11 | 0x11 = EncCSMpub & EncCSMpriv |
| 0xFF | 0xFF = Ungültig |

### TAB_LAETZTE_AKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 - Alle Anforderungen zurücknehmen |
| 0x01 | 0x01 - ZV entriegeln |
| 0x02 | 0x02 - ZV sichern |
| 0x03 | 0x03 - ZV verriegeln |
| 0x08 | 0x08 - EWS freigeben |
| 0x0F | 0x0F - Keine Anforderung (10sec nach der letzen Aktion) |
| 0xFF | 0xFF - Ungültig |

### TAB_LIFECYCLE_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Mode Application |
| 0x01 | Mode Flash |
| 0x02 | Mode Coding |
| 0xFF | Mode Invalid |

### TAB_SECLIB_ERRCODE

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 - Kein Fehler |
| 0x01 | 0x01 - Ungültiger Parameter cryptoDevice |
| 0x02 | 0x02 - Ungültiger Index eines BBE-Signaturschlüssels |
| 0x03 | 0x03 - Ungültiger externer ECC-Schlüssel |
| 0x04 | 0x04 - Ungültige Signaturlänge |
| 0x05 | 0x05 - Ungültige Datenlänge |
| 0x06 | 0x06 - Zu kleiner Output Buffer |
| 0x07 | 0x07 - Ungültige cryptoVersion oder ungültige hash-Funktion |
| 0x08 | 0x08 - ungültiger Virtual Key |
| 0x09 | 0x09 - ungültiger Session Key |
| 0xFF | 0xFF - Beschädigte EEPROM Daten oder CSM Schlüssel |

### TAB_SECLIB_LASTFUNC

| WERT | TEXT |
| --- | --- |
| 0x01 | 0x01 - SecLib_verifySignature |
| 0x02 | 0x02 - SecLib_signData |
| 0x03 | 0x03 - SecLib_encryptData |
| 0x04 | 0x04 - SecLib_decryptData |
| 0x05 | 0x05 - SecLib_statussessionKey |
| 0x06 | 0x06 - SecLib_deleteKeys |
| 0xFF | Wert ungültig |
| 0x07 | 0x07 - SecLib_WriteVirtKey |
| 0x08 | 0x08 - SecLib_hashData |
| 0xFF | 0xFF - Ungültig |

### TAB_SIM_FEHLERART

| WERT | TEXT |
| --- | --- |
| 0x01 | Kommunikation zur SIM fehlerhaft |
| 0x02 | SIM nicht vorhanden |
| 0xFF | ungültiger Wert |

### TAB_SIM_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Keine PIN eingegeben |
| 0x02 | Falsche PIN eingegeben |
| 0x03 | SIM nicht freigeschaltet |
| 0xFF | ungültiger Wert |

### TAB_STATUS_KLEMME

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Reserve |
| 0x02 | KL 30 |
| 0x03 | KL 30F - Änderung |
| 0x04 | KL 30F - Ein |
| 0x05 | KL 30B - Änderung |
| 0x06 | KL 30B - Ein |
| 0x07 | KL R - Änderung |
| 0x08 | KL R - Ein |
| 0x09 | KL 15 - Änderung |
| 0x0A | KL 15 - Ein |
| 0x0B | LL 15 - Verzögerung |
| 0x0C | KL 50 - Änderung |
| 0x0D | KL 50 - Ein |
| 0x0E | Fehler |
| 0x0F | Signal ungültig |
| 0xFF | Ungültiger Wert |

### TAB_STAT_BUCHUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | frei |
| 0x01 | reserviert |
| 0x02 | gebucht |
| 0x03 | gesperrt |
| 0xFF | ungültiger Wert |

### TAB_TAG_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 - Kein RFID TAG erkannt |
| 0x04 | 0x04 - RFID TAG ist ungültig |
| 0x05 | 0x05 - RFID TAG ist gültig |
| 0x06 | 0x06 - RFID TAG ist falsch konfiguriert (Plain Modus) |
| 0xFF | 0xFF - Ungültig |

### TAB_TESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0xFF | Nicht definiert |

### TASU_REQUEST_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | Auffinden des VCM: funktionale Anfrage  Identifikation VCM , Service 22, DID 3F19 |
| 0x01 | Anfrage CSM3 ans VCM SG: I-Stufe lesen: Service 22,  DID 100B |

### TASU_STEUERN_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Auftraege an den TAS nicht blockiert (Default bei Fehlen des Arguments) |
| 0x01 | Auftraege an den TAS temporaer bis zum naechsten Aufstart blockiert |
| 0x02 | Auftraege an den TAS persistent ueber den Aufstart hinaus blockiert |

### VK_KEY_STATUS_TABELLE

| WERT | TEXT |
| --- | --- |
| 0x00 | 0x00 = VK ist gelöscht |
| 0x01 | 0x01 = VK-SecretKey ist im CSE gespeichert |
| 0x02 | 0x02 = Ist komplett initialisiert  (im CSE und Flash-EEPROM) |
| 0x03 | 0x03 = Ungültiger VK-SecretKey im CSE |
| 0xFF | 0xFF = Anlieferzustand (Flash gelöscht) |
