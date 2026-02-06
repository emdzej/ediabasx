# rseh01.prg

## General

|  |  |
| --- | --- |
| File | rseh01.prg |
| Type | PRG |
| Jobs | 81 |
| Tables | 105 |
| Origin | BMW EI-44 Hr.Mallinson |
| Revision | 1.038 |
| Author | HaysAG EI-44 Hr.Bubb, TelemotiveAG EI-44 Hr.Wilhelm |
| ECU Comment | RSE_HIGH [14] |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | RearSeatEntertainmentHigh_SGBD |  |  |
| ORIGIN | string | BMW EI-44 Hr.Mallinson |  |  |
| REVISION | string | 1.038 |  |  |
| AUTHOR | string | HaysAG EI-44 Hr.Bubb, TelemotiveAG EI-44 Hr.Wilhelm |  |  |
| COMMENT | string | RSE_HIGH [14] |  |  |
| PACKAGE | string | 1.14 |  |  |
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

_No arguments._

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

### STATUS_BLOCK_LESEN

Lesen eines dynamisch definierten Datenblockes UDS  : $2C DynamicallyDefineDataIdentifier $03 ClearDynamicallyDefinedDataIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $2C DynamicallyDefineDataIdentifier $01 DefineByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  UDS  : $22 ReadDataByIdentifier $F300-$F3FF DynamicallyDefinedDataIdentifier  $2C$02 DefineByMemoryAddress wird nicht unterstützt 'Composite data blocks' werden nur komplett unterstützt

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | long | Nummer des Blockes 0..255 |
| NEU_DEFINIEREN | string | Wenn 'JA' oder 'YES' wird der Block im SG gelöscht und neu ins SG geschrieben Wenn 'NEIN' oder 'NO' wird der Block im SG nicht gelöscht und nicht geschrieben Anschließend wird der Block gelesen |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige Result table SG_Funktionen ARG ID RESULTNAME erzeugt |

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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $04 report activated events

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

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

### DIAGTUNNELLING_UDS

complete tunneling of UDS telegrams

| Name | Type | Description |
| --- | --- | --- |
| ARG_UDS | string | Haupt UDS stream ab ServiceID bsp.:21D02A |

### STATUS_ROUTING_ENGINE

Inhalt der Routing Engine

_No arguments._

### STATUS_AVERAGE_MESSAGE_RECEPTION_RATE

Liest die mittlere Nachrichtenabnahmerate des SGs während dieses Gerät geflasht wird, also in der ProgramminSession Auslesbar muss der Status jederzeit sein

_No arguments._

### STATUS_FOT_TEMPERATUR

Gibt an ob SG Most Ring wecken darf

_No arguments._

### STATUS_ABILITY_TO_WAKE

Gibt an ob SG Most Ring wecken darf

_No arguments._

### STEUERN_ABILITY_TO_WAKE

Gibt an, ob das SG den MOST-Ring wecken darf.

| Name | Type | Description |
| --- | --- | --- |
| ARG_ABILITY_TO_WAKE | int | 0=off 1=on 2=critical |

### STATUS_MOST_3DB

xx Status der 3dB Leistungsabsenkung der MOST FOTs.

_No arguments._

### STEUERN_MOST_3DB

3dB Leistungsabsenkung der MOST FOTs

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

### STATUS_WAKEUP_ABSTIME

7 bytes Zeitpunkt, zu dem das SG den Weckbefehl gegeben hat Bytes werden als Datum interpretiert Beispiel: '20060508131210' in der Reihenfolge YYYYMMDDHHMMSS. Falls das SG nie geweckt hat wird '00000000000000' zurückgegeben

_No arguments._

### STEUERN_WATCHDOG_TRIGGER_STOP

Unterbindet das regelmäßige Rücksetzen des Applikations-Watchdogs nach ARG_TIME_WATCHDOG Sekunden. Wenn ARG_TIME_WATCHDOG nicht angegeben wird, wird der Wert 0 benutzt.

| Name | Type | Description |
| --- | --- | --- |
| ARG_TIME_WATCHDOG | unsigned int | Beschreibung: z.B. ARG_TIME_WATCHDOG = 4 bedeutet Abschalten des Watchdog-Triggers nach 4 Sekunden. nur positiven Zahlen und die 0. Skalierung: 1 entspricht 1 Sekunde |

### STEUERN_AUDIOKANAELE

Ansteuern eines AudioKanals

| Name | Type | Description |
| --- | --- | --- |
| ARG_KANAL | unsigned int | is the desired  BIT combination of the following 0x0000 Alle (normal mode) - default 0x0001 Kanal links vorne 0x0002 Kanal rechts vorne 0x0004 Center 0x0008 Seite links 0x0010 Seite rechts 0x0020 Kanal links hinten 0x0040 Kanal rechts hinten 0x0080 Kanal Subwoofer links 0x0100 Kanal Subwoofer rechts 0x0200 reserviert ... ... 0x1000 RSE: Linker Kopfhörer Links 0x2000 RSE: Linker Kopfhörer Rechts 0x4000 RSE: Rechter Kopfhörer Links 0x8000 RSE: Rechter Kopfhörer Rechts |

### STATUS_AUDIOKANAELE

Returns the status of the Audiokanaele

_No arguments._

### STEUERN_SINUSGENERATOR_EIN

Aktivieren des Sinusgenerators und Ausgabe auf allen ausgewählten Lautsprechern

| Name | Type | Description |
| --- | --- | --- |
| ARG_FREQUENZ | unsigned int | desired frequency in Hz |
| ARG_LEVEL | unsigned char | Volumelevel 0x00-0x3F |
| ARG_KANAL | unsigned int | Bit combination of desired speakers 0x0000 Alle (normal mode) - default 0x0001 Kanal links vorne 0x0002 Kanal rechts vorne 0x0004 Center 0x0008 Seite links 0x0010 Seite rechts 0x0020 Kanal links hinten 0x0040 Kanal rechts hinten 0x0080 Kanal Subwoofer links 0x0100 Kanal Subwoofer rechts 0x0200 reserviert ... ... 0x1000 RSE: Linker Kopfhörer Links 0x2000 RSE: Linker Kopfhörer Rechts 0x4000 RSE: Rechter Kopfhörer Links 0x8000 RSE: Rechter Kopfhörer Rechts |

### STEUERN_SINUSGENERATOR_AUS

Ausschalten des Sinusgenerators

_No arguments._

### STEUERN_VOLUMEAUDIO

Adjusts the volume of a definite audio signal

| Name | Type | Description |
| --- | --- | --- |
| ARG_LEVEL | char | Desired Volumelevel (Range 0 to 63) or OffsetEntertainment (Range -11 to 11) |
| ARG_AUDIO_SIGNAL | unsigned char | Adjusts the volume (only 0x00, 0x0B, 0x0C) or OffsetEntertainment (only 0x01 .. 0x0A) of a definite audio signal from table TAudioSignal |

### STATUS_VOLUMEAUDIO

Abfragen der Audio-Lautstaerke

| Name | Type | Description |
| --- | --- | --- |
| ARG_AUDIO_SIGNAL | unsigned char | Adjusts the volume of a definite audio signal from table TAudioSignal Default, 0x00 Entertainment |

### STEUERN_VOLUMEAUDIO_DEFAULT

Set Volumeaudio default

_No arguments._

### STEUERN_LINEAR

This job resets the tone controls such as bass treble, fader, balance, surround to the default values

_No arguments._

### STATUS_DRIVE_DVD

Status of DVD Drive

_No arguments._

### STATUS_LESEN_LAUFWERK

Reads out which drives the Head-Unit contains and the type and firmware of each drive.

_No arguments._

### STEUERN_TRACK_NUMBER

Sets the track number

| Name | Type | Description |
| --- | --- | --- |
| ARG_TRACK | int | Track number that must be set |

### STATUS_CD_MD_CDC

Reads out the disc identifier and the quality level of the digital playback

_No arguments._

### STEUERN_EJECT

Ejects the media of the selected drives.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DRIVE | int | Drives from which the media must be ejected Integer values from table TLaufwerk default DVD |

### STEUERN_EMERGENCY_EJECT

Ejects the media of the selected drives.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DRIVE | unsigned char | Drives from which the media must be 0x01 CD 0x02 DVD (default) |

### STATUS_TASTE

Auslesen, ob gerade eine Taste gedrueckt ist

_No arguments._

### STEUERN_NEXT_ENTSOURCE

Enables to switch to the next or to a specified entertainment source.

| Name | Type | Description |
| --- | --- | --- |
| ARG_ENTSOURCE | string | Entertainment source to be set Values from table TEntSource |

### STATUS_NEXT_ENTSOURCE

Gives back the status of actual entertainmentsource.

_No arguments._

### STEUERN_DEMUTE

Controls the mute status of the current entertainment source.

| Name | Type | Description |
| --- | --- | --- |
| ARG_DEMUTE | unsigned char | Desired state of radio, 0x00 off, 0x01 on |
| ARG_HEADPHONES | unsigned char | Only for RSE needed  (for HeadUnit this is always 0x00 0x00 not used / no operation (used by HeadUnit) 0x01 left Headphones 0x02 right Headphones 0x03 both Headphones |

### STATUS_DEMUTE

Returns the mute status of the current entertainment source.

_No arguments._

### SER_NR_DOM_LESEN

Reads the serial number with 14 digits (DIN ISO 10486)

_No arguments._

### STEUERN_LOGISTIC_NR

Stores the logistic number Lieferumfangsnummer = number that characterizes the Anliefervariante

| Name | Type | Description |
| --- | --- | --- |
| ARG_LOGISTIC_NUMBER | string | Logistic Number |

### STATUS_LOGISTIC_NR

Reads out the logistic number Lieferumfangsnummer = number that characterizes the Anliefervariante

_No arguments._

### STATUS_APPLICATION

Reads out applications stati if they are coded and their availability

_No arguments._

### STATUS_SOFTWARENAME

Reads out the flashed Buildname

_No arguments._

### STEUERN_NWM_CONFIG_NOTOK

Sends a Config.NotOk on the MOST Bus

_No arguments._

### STEUERN_SENSOR_TEMP

Simulates the temperature of a definite sensor.

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be simulated |
| ARG_TEMPERATURE | char | Temperature that must be simulated |
| ARG_DURATION | unsigned char | Duration of the temperature simulation |

### STATUS_SENSOR_TEMP

Returns the temperature of the desired sensor (no matter if the temperature is currently being simulated or not).

| Name | Type | Description |
| --- | --- | --- |
| ARG_SENSOR | unsigned char | Sensor for which the temperature must be returned |

### STATUS_ATC_VERSION

Reads out the capability of the ATC diagnosis

_No arguments._

### STATUS_HW_VARIANTE

Liefert die HW-Variante der Headunit

_No arguments._

### STEUERN_CERTIFY_LINK

Diagnosejob zum Beheben der RSE-Zertifikatsproblematik für 03_10 TCU Fahrzeuge

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
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
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
| 0x40 | unbekannte Fehlerart |
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
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
| 0xC0 | SWUP | Software-Update Package |
| 0xC1 | SWIP | Index Software-Update Package |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 3 |
| F_HLZ_VIEW | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | AmpTemp | Grad C | high | signed int | - | - | - | - |
| 0x4201 | GyroTemp | Grad C | - | signed char | - | - | - | - |
| 0x4202 | CPU Temp | Grad C | - | signed char | - | - | - | - |
| 0x4203 | HDD Temp | Grad C | - | signed char | - | - | - | - |
| 0x4204 | DVD Temp | Grad C | - | signed char | - | - | - | - |
| 0x4205 | Audioquelle | text | - | 3 | - | - | - | - |
| 0x4206 | SMART Attributes | text | - | 30 | - | - | - | - |
| 0x4207 | HDD ErrorCode | hex | - | unsigned char | - | - | - | - |
| 0x4208 | Allgemeine Secondary DTC ID | text | - | 3 | - | - | - | - |
| 0x4209 | AMFM Tuner SW Version | text | - | 3 | - | - | - | - |
| 0x420A | DAB Tuner SW Version | text | - | 3 | - | - | - | - |
| 0x420B | Audio Label | hex | - | unsigned char | - | - | - | - |
| 0x420C | Coding Inconsistency Address | hex | high | signed long | - | - | - | - |
| 0x420D | PIA Process | hex | - | unsigned char | - | - | - | - |
| 0x420E | PIA Medium | hex | - | unsigned char | - | - | - | - |
| 0x420F | PIA Profilname | text | - | 64 | - | - | - | - |
| 0x4210 | PIA IStufenbezeichner | text | - | 17 | - | - | - | - |
| 0x4211 | PIA Version | hex | - | unsigned char | - | - | - | - |
| 0x4212 | PIA Errortext | text | - | 30 | - | - | - | - |
| 0x4213 | PIA LowMemory | text | - | 8 | - | - | - | - |
| 0x4214 | PIA Profilnummer | hex | - | unsigned char | - | - | - | - |
| 0x4215 | PIA Profilcompare | text | - | 2 | - | - | - | - |
| 0x4216 | PIA FunctionID | text | - | 3 | - | - | - | - |
| 0x4217 | PIA configuration attributes | text | - | 4 | - | - | - | - |
| 0x4218 | PIA configuration attributes compare | text | - | 8 | - | - | - | - |
| 0x4219 | PIA Profilnumbers  function and master | text | - | 2 | - | - | - | - |
| 0x4220 | FB Defect Error | hex | - | unsigned char | - | - | - | - |
| 0x4221 | FB_Software_Error | hex | - | unsigned char | - | - | - | - |
| 0x4222 | Interne 5V Spannung | mVolt | high | signed int | - | - | - | - |
| 0x4223 | Grund des Lüfterfehlers | hex | - | unsigned char | - | - | - | - |
| 0x1707 | DiagAdr | hex | - | unsigned char | - | - | - | - |
| 0x1708 | Klemmenstatus | hex | - | unsigned char | - | - | - | - |
| 0x1709 | MOST Message Header | text | - | 6 | - | - | - | - |
| 0x170A | FOT Temp | Grad C | - | signed char | - | - | - | - |
| 0x170B | NPR | hex | - | unsigned char | - | - | - | - |
| 0x170C | UBat | mVolt | high | unsigned int | - | - | - | - |
| 0x170D | MemMirror | text | - | 74 | - | - | - | - |
| 0x1721 | ResetReason | hex | - | unsigned int | - | - | - | - |
| 0x4224 | Videoquelle | hex | - | unsigned char | - | - | - | - |
| 0x4225 | VideoSink | hex | - | unsigned char | - | - | - | - |
| 0x4226 | Video Watchdog info | hex | - | unsigned char | - | - | - | - |
| 0x4227 | Media Type | hex | - | unsigned char | - | - | - | - |
| 0x4228 | Address | text | - | 8 | - | - | - | - |
| 0x4229 | ATC Test CD ID | text | - | 8 | - | - | - | - |
| 0x422A | Quality Level ATC CD | hex | - | unsigned char | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | UBat | mVolt | high | unsigned int | - | - | - | - |
| 0x170B | NPR | hex | - | unsigned char | - | - | - | - |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUDIOKANAELE | 0xD003 | - | Verstellt und liest den aktuell eingestellten Lautsprecherkanal. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD003 | RES_0xD003 |
| DEMUTE | 0xD014 | - | Steuert und liest die Mute-Funktion aus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD014 | RES_0xD014 |
| ETHERNET_CONNECTION_STATE | 0xA029 | - | Steuerung der Aktivierung der Ethernet-Verbindungen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA029 | RES_0xA029 |
| EXTERNAL_ILLUMINATION | 0xD018 | STAT_EXTERNAL_ILLUMIONATION_WERT | Liefert den Wert der Beleuchtungsstärke des Displays | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| JITTERMESSUNG | 0xA078 | - | Starten / Stoppen der Jitter Auswertung der ATC CD | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA078 |
| LANGUAGE | 0xA025 | - | Liest und setzt die aktuelle MMI Sprache. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA025 | RES_0xA025 |
| LOGISTIC_NR | 0xD020 | - | Schreibt und liest die Logistik Nummer der Auslieferungsvariante. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD020 | RES_0xD020 |
| LUEFTER | 0xA03C | - | Steuerung und Status des Lüfters. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA03C | RES_0xA03C |
| MENU | 0xA024 | - | Einstellen eines MMI Menüs. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA024 | RES_0xA024 |
| NEXT_ENTSOURCE | 0xA00B | - | Steuerung Entertainmentquellen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA00B | RES_0xA00B |
| SELBSTTEST | 0xA022 | - | Selbsttests des Steuergerätes Sie sollen einen evtl. notwendigen Tausch von Software/Hardware erkennen. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA022 | RES_0xA022 |
| SER_NR_DOM_LESEN | 0xD019 | STAT_SER_NR_DOM_WERT | liest die 14stellige Car Radio Identification Number(CRIN). | - | - | - | string[14] | - | - | - | - | - | 22 | - | - |
| SIGNALAUSGABE | 0xA01A | - | Steuert die Videosignalausgabe eines Steuergerätes (Videoquelle). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01A | - |
| SINUSGENERATOR | 0xA001 | - | Gibt einen Sinuston auf einen oder mehrere Kanäle aus. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA001 | - |
| STATUS_ANALOG_TEMPERATUR | 0xD026 | - | Abfrage der Temperaturen des Steuergerätes. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD026 |
| STATUS_APPLICATION | 0xD021 | - | Abfrage des Status aller freischaltbaren Applikationen, z.B. Navigation. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD021 |
| STATUS_ATC_VERSION | 0xD049 | STAT_ATC | ATC Messmethode | 0-n | - | - | unsigned char | TAB_ATC_CAPABILITY | - | - | - | - | 22 | - | - |
| STATUS_CD_MD_CDC | 0xD02C | - | Liest den Identifier des Mediums und das Qualitätslevel der digitalen Aufnahme aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD02C |
| STATUS_COUNTER_REGION_CODE | 0xA04D | - | Auslesen des Werts Änderungszähler DVD Ländercode | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA04D |
| STATUS_DREHKNOPF | 0xD015 | STAT_DREHPOSITION_WERT | Abfrage des Drehknopfs. | - | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| STATUS_DRIVE_DVD | 0xD006 | STAT_MEDIUM_INSERTED | Liest aktuelle Werte des DVD-Laufwerks aus. | 0-n | - | - | unsigned char | TInsertedMedium | - | - | - | - | 22 | - | - |
| STATUS_HMI_VERSION | 0xD03F | - | HMI Software Version | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD03F |
| STATUS_HW_VARIANTE | 0xD04E | - | Liefert die HW-Variante der Headunit bzw. von TV/Video-Steuergeräten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD04E |
| STATUS_INITIALISIERUNG | 0xD004 | STAT_INITIALISIERUNG | Gibt den Gesamt-Initialisierungsstatus des Steuergerätes wieder. | 0-n | - | - | unsigned char | TInitialisierung | - | - | - | - | 22 | - | - |
| STATUS_IRSENDER_POWERSUPPLY | 0xD058 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD058 |
| STATUS_LESEN_LAUFWERK | 0xD00C | - | Liest aus, welche Laufwerke verbaut sind. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00C |
| STATUS_MEMORY_USAGE | 0xD00A | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD00A |
| STATUS_TASTE | 0xD013 | STAT_TASTE | Test aller Tasten außer der Functional Bookmarks und des Drehknopfs. | 0-n | - | - | unsigned char | TTaste | - | - | - | - | 22 | - | - |
| STATUS_VOLTAGES | 0xD025 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD025 |
| STATUS_VOLUMEAUDIO | 0xA039 | - | Liest die ausgewählte Lautstärke aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA039 | RES_0xA039 |
| STEUERN_CODIERUNG_MASTER_BEREICH | 0xA02A | - | Copy the content of the coding working domain into the very secured coding master domain. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_CODIERUNG_REFERENZ_CRC | 0xA02B | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_EJECT | 0xA006 | - | Steuern des Auswurfs der Medien aus den Laufwerken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA006 | - |
| STEUERN_EMERGENCY_EJECT | 0xA007 | - | Notauswurf | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA007 | - |
| STEUERN_INTERNAL_RESET | 0xA023 | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_LINEAR | 0xA004 | - | Zurücksetzen der Fader und Lautstärke auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_RESCUE_MODE | 0xA03B | - | not defined in diagnosis database | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_TRACK_NUMBER | 0xA037 | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA037 | - |
| STEUERN_VOLUMEAUDIO | 0xA036 | - | Verstellt die ausgewählte Lautstärke | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA036 | - |
| STEUERN_VOLUMEAUDIO_DEFAULT | 0xA002 | - | Zurücksetzen aller Lautstärkewerte auf Default-Werte | - | - | - | - | - | - | - | - | - | 31 | - | - |
| TEST_VERBAU | 0xA01E | - | Startet die Verbauprüfung der externen Anschlüsse. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01E | RES_0xA01E |
| TEST_VIDEOEINGANG | 0xA01D | - | Testet die Videoeingänge durch Analyse der dort anliegenden Signale | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01D | RES_0xA01D |
| VIDEOVERBINDUNG | 0xA01C | - | Steuern, Stoppen und Abfragen einer Videoverbindung . | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA01C | RES_0xA01C |

### RES_0XD003

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KANAL | 0-n | - | unsigned long | - | TAudioKanal | - | - | - | Kanalnummer |

### ARG_0XD003

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_KANAL | - | - | unsigned long | - | - | - | - | - | - | - | Kanalnummer |

### TAUDIOKANAL

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Kanäle |
| 0x00000001 | Links vorne (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000002 | Rechts vorne (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000004 | Center vorne (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000008 | Seite links (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000010 | Seite rechts (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000020 | Links hinten (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000040 | Rechts hinten (Standardkanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00000080 | Links vorne Bass (Erweiterter Kanal) |
| 0x00000100 | Rechts vorne Bass (Erweiterter Kanal) |
| 0x00000200 | Links hinten Bass (Erweiterter Kanal) |
| 0x00000400 | Rechts hinten Bass (Erweiterter Kanal) |
| 0x00000800 | Center hinten (Erweiterter Kanal, speziell Mitteltöner wenn getrennte Hoch/Mitteltöner) |
| 0x00001000 | Linker Kopfhörer links |
| 0x00002000 | Linker Kopfhörer rechts |
| 0x00004000 | Rechter Kopfhörer links |
| 0x00008000 | Rechter Kopfhörer rechts |
| 0x00010000 | Links vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00020000 | Rechts vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00040000 | Center vorne (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00080000 | Seite links (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00100000 | Seite rechts (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00200000 | Links hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00400000 | Rechts hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0x00800000 | Center hinten (Erweiterter Kanal, speziell Hochtöner wenn getrennte Hoch/Mitteltöner) |
| 0xFFFFFFFF | Nicht definiert |

### TINITIALISIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | IO initialisiert |
| 0xFF | NIO initialisiert |

### TINSERTEDMEDIUM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Medium eingelegt |
| 0x01 | Medium Erkennung wird durchgeführt |
| 0x02 | CD Medium ist eingelegt |
| 0x03 | DVD Medium ist eingelegt |
| 0x04 | Flashspeicher Medium ist eingelegt |
| 0xFF | Nicht definiert |

### RES_0XD00A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MEMORYSPACE_FLASH_KBYTE_WERT | - | - | unsigned long | - | - | - | - | - | - |
| STAT_FREE_MEMORYSPACE_FLASH_KBYTE_WERT | - | - | unsigned long | - | - | - | - | - | - |
| STAT_FREE_MEMORYSPACE_FLASH_PERCENT_WERT | % | - | unsigned char | - | - | - | - | - | - |
| STAT_MEMORYSPACE_RAM_KBYTE_WERT | - | - | unsigned long | - | - | - | - | - | - |
| STAT_FREE_MEMORYSPACE_RAM_KBYTE_WERT | - | - | unsigned long | - | - | - | - | - | - |
| STAT_FREE_MEMORYSPACE_RAM_PERCENT_WERT | % | - | unsigned char | - | - | - | - | - | - |

### RES_0XD00C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAUTE_LAUFWERKE | 0-n | - | unsigned int | - | TLaufwerk | - | - | - | Liest aus, welche Laufwerke verbaut sind. |
| STAT_VENDORID_TAPE_WERT | - | - | string | - | - | - | - | - | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_TAPE_WERT | - | - | string | - | - | - | - | - | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_TAPE_WERT | - | - | string | - | - | - | - | - | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_CD_WERT | - | - | string | - | - | - | - | - | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_CD_WERT | - | - | string | - | - | - | - | - | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_CD_WERT | - | - | string | - | - | - | - | - | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_DVD_WERT | - | - | string | - | - | - | - | - | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_DVD_WERT | - | - | string | - | - | - | - | - | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_DVD_WERT | - | - | string | - | - | - | - | - | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_MD_WERT | - | - | string | - | - | - | - | - | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_MD_WERT | - | - | string | - | - | - | - | - | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_MD_WERT | - | - | string | - | - | - | - | - | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_HDD_WERT | - | - | string | - | - | - | - | - | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_HDD_WERT | - | - | string | - | - | - | - | - | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_HDD_WERT | - | - | string | - | - | - | - | - | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_USB_WERT | - | - | string | - | - | - | - | - | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_USB_WERT | - | - | string | - | - | - | - | - | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_USB_WERT | - | - | string | - | - | - | - | - | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_VENDORID_FLASHSPEICHER_WERT | - | - | string | - | - | - | - | - | Gibt die VENDORID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_PRODUCTID_FLASHSPEICHER_WERT | - | - | string | - | - | - | - | - | Gibt die PRODUCTID des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |
| STAT_FIRMWARE_FLASHSPEICHER_WERT | - | - | string | - | - | - | - | - | Gibt die Firmware-Version des Laufwerks aus. ACHTUNG: Result wird dynamisch zu ..._TEXT statt _WERT. |

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
| 0x0062 | CD, USB und Flash Speicher |
| 0x0064 | DVD, USB und Flash Speicher |
| 0xFFFF | Nicht definiert |

### TTASTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Taste gedrückt |
| 0x01 | Auswurf CD |
| 0x02 | Auswurf DVD |
| 0x03 | Entertainment Knopf |
| 0x04 | Suchlauf abwärts - Skip links |
| 0x05 | Suchlauf aufwärts - Skip rechts |
| 0x10 | RSE Einschaltknopf links |
| 0x11 | RSE Einschaltknopf rechts |
| 0x12 | RSE Auswurf DVD |
| 0x13 | MIODE-Taste |
| 0xFF | Nicht definiert |

### RES_0XD014

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEMUTE_SOURCE1 | 0-n | - | unsigned char | - | TSourceDemuteStatus | - | - | - | Gibt den eingestellten Mute-Modus zurück: Für Source1 sind nur die Werte 0-3 gültig. |
| STAT_DEMUTE_SOURCE2 | 0-n | - | unsigned char | - | TSourceDemuteStatus | - | - | - | Gibt den eingestellten Mute-Modus zurück: Für Source2 sind nur die Werte 4-5 gültig. Bei Headunits wird hier 255 zurückgeliefert. |

### ARG_0XD014

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DEMUTE | 0-n | - | unsigned char | - | TDemuteStatus | - | - | - | - | - | - |
| ARG_HEADPHONES | 0-n | - | unsigned char | - | TDemuteSource | - | - | - | - | - | - |

### TSOURCEDEMUTESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Head-Unit aus |
| 0x01 | Head-Unit ein |
| 0x02 | RSE Kopfhörer links aus |
| 0x03 | RSE Kopfhörer links ein |
| 0x04 | RSE Kopfhörer rechts aus |
| 0x05 | RSE Kopfhörer rechts ein |
| 0xFF | Nicht definiert |

### TDEMUTESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Stummschaltung ein |
| 0x01 | Stummschaltung aus |
| 0xFF | Nicht definiert |

### TDEMUTESOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht benutzt(Default in Headunit) |
| 0x01 | Kopfhörer links |
| 0x02 | Kopfhörer rechts |
| 0x03 | Beide Kopfhörer |
| 0xFF | Nicht definiert |

### RES_0XD020

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOGISTIC_NR_WERT | - | - | string[7] | - | - | - | - | - | Auslesen der Logistik-Nummer. ACHTUNG: RESULT wird von _WERT auf _TEXT gewandelt! |

### ARG_0XD020

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LOGISTIC_NR | - | - | string[7] | - | - | - | - | - | - | - | die zu schreibende Logistiknummer |

### RES_0XD021

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_APPL_1 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_1 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_1 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_2 | 0-n | - | unsigned char | - | TApplication | - | - | - | Ausgabe für jede Applikation X: Name aus der Tabelle TApplication. |
| STAT_APPL_ENABLED_2 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_2 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_3 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_3 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_3 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_4 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_4 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_4 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_5 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_5 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_5 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | vgibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_6 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_6 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_6 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_7 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_7 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_7 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_8 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_8 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_8 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_9 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_9 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_9 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_10 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_10 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_10 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_11 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_11 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_11 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_12 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_12 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_12 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_13 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_13 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_13 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_14 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_14 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_14 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_15 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_15 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_15 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |
| STAT_APPL_16 | 0-n | - | unsigned char | - | TApplication | - | - | - | gibt für jede Applikation X deren Namen aus der Tabelle TApplication wieder. |
| STAT_APPL_ENABLED_16 | 0-n | - | unsigned char | - | TApplicationRunningStatus | - | - | - | gibt für jede Applikation X wieder, ob sie gerade läuft. |
| STAT_APPL_CODED_16 | 0-n | - | unsigned char | - | TApplicationActivationStatus | - | - | - | gibt für jede Applikation X wieder, ob sie aktiviert ist. |

### TAPPLICATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Sprachverarbeitung |
| 0x01 | Navi Applikation |
| 0x02 | Navi Karte |
| 0x03 | Online Browser |
| 0x04 | AudioPlayer |
| 0x05 | Telefon Applikation |
| 0x06 | SDARS |
| 0xFF | Nicht definiert |

### TAPPLICATIONRUNNINGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Applikation nicht gestartet |
| 0x01 | Applikation gestartet |
| 0xFF | Nicht definiert |

### TAPPLICATIONACTIVATIONSTATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Deaktiviert durch Codierung |
| 0x02 | Aktiviert durch Codierung |
| 0x04 | Deaktiviert durch SWT |
| 0x05 | Deaktiviert durch Codierung und  Deaktiviert durch SWT |
| 0x06 | Aktiviert durch Codierung und Deaktiviert durch SWT |
| 0x08 | Aktiviert durch SWT |
| 0x0A | Aktiviert durch Codierung und Aktiviert durch SWT |
| 0x10 | Teilweise Aktiviert durch SWT |
| 0x12 | Aktiviert durch Codierung und Teilweise Aktiviert durch SWT |
| 0x20 | SWT Freischaltcode eingespielt |
| 0x22 | Aktiviert durch Codierung und SWT Freischaltcode eingespielt |
| 0xFF | Nicht definiert |

### RES_0XD025

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_3.3V_SW1_WERT | V | - | unsigned int | - | - | - | - | - | - |
| STAT_3.3V_SW2_WERT | V | - | unsigned int | - | - | - | - | - | - |
| STAT_3V_SW_WERT | V | - | unsigned int | - | - | - | - | - | - |
| STAT_5V_SW_WERT | V | - | unsigned int | - | - | - | - | - | - |
| STAT_BATTERY_VOLTAGE_WERT | V | - | unsigned int | - | - | - | - | - | Numerische Ausgabe der Batteriespannung |
| STAT_SPG_BOARD_WERT | mV | - | unsigned int | - | - | - | - | - | - |
| STAT_SPG_FPGA_WERT | mV | - | unsigned int | - | - | - | - | - | - |
| STAT_SPG_SH3_WERT | mV | - | unsigned int | - | - | - | - | - | - |

### RES_0XD026

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TEMP_FOT_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des Fibre Optical Transceivers (FOT). Bereich: -127,&,127 |
| STAT_TEMP_ENDSTU_WERT | °C | - | int | - | - | - | - | - | liefert die Temperatur der Endstufe. Bereich: -32767,&, 32767 |
| STAT_TEMP_GYRO_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des Gyro. Bereich: -127,&,127 |
| STAT_TEMP_MOD_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des Moduls (normalerweise prozessornah). Bereich: -127,&,127 |
| STAT_TEMP_HDD_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des HDD-Laufwerks. Bereich: -127,&,127 |
| STAT_TEMP_DVD_WERT | °C | - | char | - | - | - | - | - | liefert die Temperatur des DVD-Laufwerks. Bereich: -127,&,127 |

### RES_0XD02C

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DISC_IDENT_WERT | - | - | string | - | - | - | - | - | Disk Identifier für das beinhaltete Medium. ACHTUNG: RÜCKGABE wird von _WERT zu _TEXT! |
| STAT_DIGITAL_PLAYBACK_QUALITY_WERT | - | - | unsigned char | - | - | - | - | - | Qualität der digitalen Aufnahme: Bereich: 0-15 0-1: Medium nicht lesbar (drive not ok) 2-8: Verzerrung / Stumm Stellen hörbar (drive not ok) 9-14: Medium lesbar, keine Verzerrung hörbar (drive ok) 15: Medium Qualität 100%, z.B. BLER 0 (drive ok) |

### RES_0XD03F

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HMI_VERSION_WERT | - | - | string | - | - | - | - | - | Akuelle HMI Version als String wie im Entwicklermenü angezeigt |
| STAT_SVS_VERSION_WERT | - | - | string | - | - | - | - | - | Akuelle SVS Version als String wie im Entwicklermenü angezeigt |
| STAT_TEXT_VERSION_WERT | - | - | string | - | - | - | - | - | Akuelle TEXT Version als String wie im Entwicklermenü angezeigt |

### TAB_ATC_CAPABILITY

| WERT | TEXT |
| --- | --- |
| 0x00 | keine ATC Diagnose möglich |
| 0x01 | ATC Diagnose mit 12-Spur Messung |
| 0x02 | ATC Diagnose mit Jitter Messung |
| 0xFF | ungültiger Zustand |

### RES_0XD04E

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_VARIANTE | 0-n | - | unsigned long | - | THwVariante | - | - | - | liefert nach Tabelle THwVariante(Bitkombination) eindeutig, welche Variante vorliegt.  Z.B. liefert ein CIC HIGH mit IBOC den Wert 0x10004 (=0x4+0x10000) |
| STAT_HW_VARIANTE_LIEFERANT | 0-n | - | unsigned char | - | THwLieferant | - | - | - | gibt den Lieferanten nach Tabelle THwLieferant aus. |
| STAT_HW_EINHEIT | 0-n | - | unsigned long | - | THwEinheit | - | - | - | liefert eine eindeutige ID der Hardwarevariante. Die Tabelle THwEinheit ist von der Entwicklung in der SGBD zu pflegen. 0xFFFFFFFF bedeutet  nicht definiert |

### THWVARIANTE

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
| 0x00010000 | mit Funktion IBOC |
| 0x00020000 | mit Funktion DAB |
| 0x00040000 | mit Funktion Video-in |
| 0x00080000 | mit Funktion SDARS |
| 0x00100000 | mit Funktion Telefon |
| 0x00200000 | mit Funktion I-Speech |
| 0x00400000 | (Headunit Stufe 1 (Radio Business)) mit Funktion CD-Laufwerk |
| 0x00800000 | mit Funktion MSA |
| 0x04000000 | mit Funktion CD-Laufwerk |
| 0xFFFFFFF1 | --- Bitkombinationen Headunit Stufe 1 (Radio Business) --- |
| 0x00410000 | Headunit Stufe 1 (Radio Business) mit Funktion IBOC und CD-Laufwerk |
| 0x00420000 | Headunit Stufe 1 (Radio Business) mit Funktion DAB und CD-Laufwerk |
| 0x00480000 | Headunit Stufe 1 (Radio Business) mit Funktion SDARS und CD-Laufwerk |
| 0x00490000 | Headunit Stufe 1 (Radio Business) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x00C00000 | Headunit Stufe 1 (Radio Business) mit Funktion MSA und CD-Laufwerk |
| 0x00C20000 | Headunit Stufe 1 (Radio Business) mit Funktion MSA, DAB und CD-Laufwerk |
| 0xFFFFFFF2 | --- Bitkombinationen Headunit Stufe 2 (Radio Professional) --- |
| 0x00400001 | Headunit Stufe 2 (Radio Professional) mit Funktion CD-Laufwerk |
| 0x04000001 | Headunit Stufe 2 (Radio Professional) mit Funktion CD-Laufwerk |
| 0x00010001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC |
| 0x00410001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und CD-Laufwerk |
| 0x04010001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und CD-Laufwerk |
| 0x00110001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und Telefon |
| 0x00510001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, Telefon und CD-Laufwerk |
| 0x04110001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, Telefon und CD-Laufwerk |
| 0x00090001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC und SDARS |
| 0x00490001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x04090001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x002D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In und I-Speech |
| 0x006D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, I-Speech und CD-Laufwerk |
| 0x040D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In und CD-Laufwerk |
| 0x042D0001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Video-In, I-Speech und CD-Laufwerk |
| 0x00590001 | Headunit Stufe 2 (Radio Professional) mit Funktion IBOC, SDARS, Telefon und CD-Laufwerk |
| 0x00500001 | Headunit Stufe 2 (Radio Professional) mit Funktion Telefon und CD-Laufwerk |
| 0x00240001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In und I-Speech |
| 0x00640001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, I-Speech und CD-Laufwerk |
| 0x00520001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB Telefon und CD-Laufwerk |
| 0x00360001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB, Video-In, Telefon und I-Speech |
| 0x00760001 | Headunit Stufe 2 (Radio Professional) mit Funktion DAB, Video-In, Telefon, I-Speech und CD-Laufwerk |
| 0x00340001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, Telefon und I-Speech |
| 0x00740001 | Headunit Stufe 2 (Radio Professional) mit Funktion Video-In, Telefon, I-Speech und CD-Laufwerk |
| 0x00C00001 | Headunit Stufe 2 (Radio Professional) mit Funktion MSA und CD-Laufwerk |
| 0x00D00001 | Headunit Stufe 2 (Radio Professional) mit Funktion MSA, Telefon und CD-Laufwerk |
| 0x00D20001 | Headunit Stufe 2 (Radio Professional) mit Funktion MSA, DAB, Telefon und CD-Laufwerk |
| 0xFFFFFFF3 | --- Bitkombinationen Headunit Stufe 3 (Navigation Business) --- |
| 0x00340002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon und I-Speech |
| 0x00740002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x04340002 | Headunit Stufe 3 (Navigation Business) mit Funktion Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x00360002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon und I-Speech |
| 0x00760002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x04360002 | Headunit Stufe 3 (Navigation Business) mit Funktion DAB, Video-in, Telefon, I-Speech und CD-Laufwerk |
| 0x00090002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC und SDARS |
| 0x00490002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x04090002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC, SDARS und CD-Laufwerk |
| 0x002D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, SDARS und I-Speech |
| 0x006D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, SDARS, I-Speech und CD-Laufwerk |
| 0x042D0002 | Headunit Stufe 3 (Navigation Business) mit Funktion IBOC,Video-In, SDARS, I-Speech und CD-Laufwerk |
| 0xFFFFFFF4 | --- Bitkombinationen Headunit Stufe 4 (Navigation Professional) --- |
| 0x00040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in |
| 0x00050004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC und Video-in |
| 0x00060004 | Headunit Stufe 4 (Navigation Professional) mit Funktion DAB und Video-in |
| 0x000D0004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC, SDARS und Video-in |
| 0x01040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in als Japan-Variante |
| 0x02040004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in als China/Korea-Variante |
| 0x00140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon |
| 0x00150004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC und Video-in und Telefon |
| 0x00160004 | Headunit Stufe 4 (Navigation Professional) mit Funktion DAB und Video-in und Telefon |
| 0x001D0004 | Headunit Stufe 4 (Navigation Professional) mit Funktion IBOC, SDARS und Video-in und Telefon |
| 0x01140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon als Japan-Variante |
| 0x02140004 | Headunit Stufe 4 (Navigation Professional) mit Funktion Video-in und Telefon als China/Korea-Variante |
| 0xFFFFFFF5 | --- Bitkombinationen RearSeatEntertainment Mid --- |
| 0x00040008 | RearSeatEntertainment Mid mit Funktion Video-in |
| 0x01000008 | RearSeatEntertainment Mid als Japan-Variante |
| 0x02000008 | RearSeatEntertainment Mid als China/Korea-Variante |
| 0x01040008 | RearSeatEntertainment Mid mit Funktion Video-in als Japan-Variante |
| 0x02040008 | RearSeatEntertainment Mid mit Funktion Video-in als China/Korea-Variante |
| 0xFFFFFFF6 | --- Bitkombinationen RearSeatEntertainment High --- |
| 0x00040010 | RearSeatEntertainment High mit Funktion Video-in |
| 0x01000010 | RearSeatEntertainment High als Japan-Variante |
| 0x02000010 | RearSeatEntertainment High als China/Korea-Variante |
| 0x01040010 | RearSeatEntertainment High mit Funktion Video-in als Japan-Variante |
| 0x02040010 | RearSeatEntertainment High mit Funktion Video-in als China/Korea-Variante |
| 0xFFFFFFFF | Nicht definiert |

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
| 0xFF | Nicht definiert |

### THWEINHEIT

| WERT | TEXT |
| --- | --- |
| 0xFF | Nicht definiert |

### RES_0XD058

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IRSENDER_1_POWERSUPPLY_WERT | mV | - | unsigned int | - | - | - | - | - | Betriebsspannung am SG (IR1) |
| STAT_IRSENDER_2_POWERSUPPLY_WERT | mV | - | unsigned int | - | - | - | - | - | Betriebsspannung am SG (IR2) |

### ARG_0XA001

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_FREQUENZ | + | - | Hz | - | unsigned int | - | - | - | - | - | 20.0 | 20000.0 | Frequenzeinstellung: 20..20 000 Hz |
| ARG_LEVEL | + | - | - | - | char | - | - | - | - | - | -96.0 | 127.0 | Bei Headunits: Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen.Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.  Bei Verstärkern: Integer,-96..0 [dB] |
| ARG_KANAL | + | - | - | - | unsigned long | - | - | - | - | - | - | - | bezeichnet den Kanal, auf dem ausgegeben werden soll. Tabelle TAudioKanal |

### ARG_0XA006

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DRIVE | + | - | - | - | unsigned int | - | - | - | - | - | - | - | gibt an, auf welchem Laufwerk der  Eject ausgeführt werden soll. Default 4 Tabelle TLaufwerk |

### ARG_0XA007

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DRIVE | + | - | - | - | unsigned int | - | - | - | - | - | - | - | gibt an, auf welchem Laufwerk der  Eject ausgeführt werden soll. Default: 4 Tabelle TLaufwerk |

### RES_0XA00B

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TEntSource | - | - | - | die eingestellte Entertainmentquelle |
| STAT_DESIRED_ENTSOURCE | - | - | + | 0-n | - | unsigned char | - | TEntSourceStatus | - | - | - | gibt zurück, ob die letzte einzustellende Entertainmentquelle verfügbar war. |

### ARG_0XA00B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ENTSOURCE | + | - | 0-n | - | unsigned char | - | TEntSource | - | - | - | - | - | die auszuwählende Entertainmentquelle |

### TENTSOURCESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entertainmentquelle war nicht verfügbar |
| 0x01 | Entertainmentquelle war verfügbar |
| 0x02 | Entertainmentquelle wird gesucht |
| 0xFF | Nicht definiert |

### TENTSOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | nächste |
| 0x01 | FM |
| 0x02 | AM |
| 0x03 | internes CD Laufwerk |
| 0x04 | CDC |
| 0x05 | internes MD Laufwerk |
| 0x06 | WB (Weatherband) |
| 0x07 | SDARS |
| 0x08 | unbenutzt (vorher IBOC) |
| 0x09 | AUX IN intern oder extern |
| 0x0A | internes DVD Laufwerk |
| 0x0B | TV |
| 0x0C | unbenutzt (vorher VIDEOTXT) |
| 0x0D | Reserviert für AV-AUX IN |
| 0x0E | DAB |
| 0x0F | TRF |
| 0x10 | RSE-DVD |
| 0x11 | RSE-AVIN-LEFT |
| 0x12 | RSE-AVIN-RIGHT |
| 0x13 | USB extern 1 (USB Audio der MULF2 High/ComBox) |
| 0x14 | USB extern 2 (USB Telefon der MULF2 High/ComBox) |
| 0x15 | RSE analog (Audio) |
| 0x16 | MMC |
| 0x17 | Mono analog IN |
| 0x18 | USB intern |
| 0x19 | Entertainment server |
| 0xFF | Entertainmentquelle nicht definiert |

### ARG_0XA01A

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SIGNALART | + | - | 0-n | - | unsigned char | - | TSignalArt | - | - | - | - | - | Art der Signalausgabe. |
| ARG_AUSGANG | + | + | 0-n | - | unsigned int | - | TVideoAusgang | - | - | - | - | - | Default: 0 Alle Ausgänge des Steuergerätes müssen einzeln und kombiniert anwählbar sein. |
| ARG_TIMEOUT | + | - | - | - | unsigned char | - | - | - | - | - | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die das Testbild ausgegeben wird. Default: 255 Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis: -der Job erneut mit Parameter 0 aufgerufen wird -das Steuergerät neu startet (Aufwachen, Reset, &) |

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

### RES_0XA01C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HERSTELLUNG_VIDEOVERBINDUNG | - | - | + | 0-n | - | unsigned char | - | THerstellungStatus | - | - | - | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. |
| STAT_HERSTELLUNG_FEHLER | - | - | + | 0-n | - | unsigned char | - | THerstellungFehler | - | - | - | Gibt 0 wieder, wenn: - Keine Videoverbindung angefordert wurde. - Nach dem Herunterfahren oder Neustart des Steuergerätes. - Die Verbindung wieder per Diagnose abgebaut bzw. auf regulären Betrieb zurückgeschaltet wurde. - Wenn STAT_HERSTELLUNG_VIDEOVERBINDUNG den Wert 0,1 oder 2 aufweist. |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Ausgewählte Quelle: Tabelle TVideoQuelle |
| STAT_SENKEN | - | - | + | 0-n | - | unsigned int | - | TVideoSenke | - | - | - | Ausgwählte Senke: Bitkombination: Tabelle TVideoSenke |

### ARG_0XA01C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Legt die Videoquelle fest, von der aus das Signal verteilt wird. Tabelle TVideoQuelle |
| ARG_SENKEN | + | - | - | - | unsigned int | - | - | - | - | - | - | - | Stellt eine Videoverbindung zwischen einer Quelle und mehreren Senken her. Tabelle TVideoSenke |
| ARG_TIMEOUT | + | - | - | - | unsigned char | 255 | - | - | - | - | - | - | Wertebereich: 0-30,255 0 schaltet wieder auf Normalbetrieb. 255 schaltet das Signal ohne einen TIMEOUT. Ansonsten legt dies Zahl die Sekunden fest, die die Videoverbindung aufrecht erhalten wird. Default: 255  Wird dieser Parameter nicht angegeben, erfolgt eine Ausgabe, bis der Job erneut mit Parameter 0 aufgerufen wird oder das Steuergerät neu startet (Aufwachen, Reset, &) |

### THERSTELLUNGSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anfrage gestellt |
| 0x01 | Herstellung läuft |
| 0x02 | Herstellung beendet ohne Fehler |
| 0x03 | Herstellung beendet mit Fehler |
| 0x04 | Herstellung unterbrochen durch User-Interaktion |
| 0xFF | Nicht definiert |

### THERSTELLUNGFEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Physikalischer Fehler |
| 0xFF | Nicht definiert |

### TVIDEOSENKE

| WERT | TEXT |
| --- | --- |
| 0x0000 | Alle Bildschirme |
| 0x0001 | Bildschirm Headunit |
| 0x0002 | Linker oder einziger Bildschirm RearSeatEntertainment |
| 0x0004 | Rechter  Bildschirm RearSeatEntertainment |
| 0xFFFF | Nicht definiert |

### RES_0XA01D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt nach Tabelle TVideoQuelle bzw. TEingangVideoSwitch an, welche Quelle(n) getestet wurde(n). |
| STAT_TEST_VIDEOEINGANG | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des gesamten Tests oder der entsprechenden Quelle(n) wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |
| STAT_ANZAHL_FEHLERHAFTE_SIGNALE_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 2 oder 3 meldet. Gibt wieder, wie vielen Fehler während des Test gefunden wurden. |
| STAT_FEHLER_1_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. X ist kleiner gleich der Anzahl der auf das Steuergerät schaltbaren Quellen. Für den Videoswitch und die Monitore sind die schaltbaren Quellen gleich der Anzahl der Eingänge. Bei N theoretisch verbaubaren und schaltbaren Quellen muss dieses Result N-mal implementiert werden. Beispiel falls es nur möglichen Quellen gäbe: STAT_FEHLER_1_ FEHLERART, STAT_FEHLER_2_ FEHLERART |
| STAT_FEHLER_1_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_1_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_1_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | ertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_2_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_2_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_2_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_3_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_3_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_3_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_4_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_4_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_4_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_5_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_5_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_5_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_6_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_6_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_6_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_7_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_7_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_7_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_8_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_8_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_8_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_9_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_9_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_9_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_10_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_10_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_10_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_11_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_11_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_11_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_12_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_12_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_12_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_13_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_13_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_13_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_14_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_14_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_14_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_15_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_15_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_15_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_QUELLE | - | - | + | 0-n | - | unsigned long | - | TVideoQuelle | - | - | - | Gibt die Videoquelle wieder, bei der der Fehler X auftrat. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_FEHLERART_SIGNAL | - | - | + | 0-n | - | unsigned char | - | TVideoeingangFehlerArt | - | - | - | Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. Wert Test: 0 kein Video- oder Sync-Signal vorhanden, 1 Signal außerhalb der Toleranz, & & 255 Nicht definiert. Gibt wieder, als Integer, welcher Art der X. Fehler war. |
| STAT_FEHLER_16_EINGANG | - | - | + | 0-n | - | unsigned long | - | TFBasEingang | - | - | - | Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet.  Gibt wieder, als Integer, auf welchem Eingang der X. Fehler gefunden wurde. |
| STAT_FEHLER_16_VIDEOSWITCH_EINGANG | - | - | + | 0-n | - | unsigned int | - | TEingangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Eingang des Videoswitches geroutet wurde. Dieses Result wird mit 65535 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |
| STAT_FEHLER_16_VIDEOSWITCH_AUSGANG | - | - | + | 0-n | - | unsigned int | - | TAusgangVideoSwitch | - | - | - | Wertet die durch STEUERN_TEST_VIDEOEINGANG ausgeführten Tests aus. Gibt an, welcher Ausgang des Videoswitches geroutet wurde. Dieses Result wird mit 255 belegt, wenn STAT_TEST_VIDEOEINGANG nicht den Wert 3 (Fehler) meldet. |

### ARG_0XA01D

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_QUELLE | + | - | - | - | unsigned long | - | - | - | - | - | 0.0 | - | Wertet das Signal von einer oder mehreren Quellen aus. Legt die Videoquelle fest, von der aus das Signal auf die Senke geroutet wird: Tabelle TVideoQuelle bzw. TEingangVideoSwitch |

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
| 0xFFFFFFFF | Nicht definiert |

### TVIDEOEINGANGFEHLERART

| WERT | TEXT |
| --- | --- |
| 0x00 | kein Video- oder Sync-Signal vorhanden |
| 0x01 | Signal außerhalb der Toleranz |
| 0x02 | Verbindung konnte nicht hergestellt werden |
| 0xFF | Nicht definiert |

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

### RES_0XA01E

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERBAU_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TVerbauRoutine | - | - | - | Ausgeführte Testroutine(n). |
| STAT_TEST_VERBAU | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des Verbautests wieder. Nach dem Herunterfahren oder Neustart des Steuergerätes wird der Status automatisch auf 0 zurückgesetzt. |

### ARG_0XA01E

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_VERBAU_ROUTINE | + | - | - | - | unsigned long | - | - | - | - | - | - | - | Routinen, die getestet werden sollen. Tabelle TVerbauRoutine |

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
| 0x00004000 | Ethernet-Verbindung Head-Unit zum ZGW oder OBD |
| 0x00008000 | Ethernet-Verbindung Head-Unit zum RSE High |
| 0x00010000 | Verbindung Head-Unit zur USB Kunden-Schnittstelle |
| 0x00020000 | Verbindungen zu IR-Sendeeinheit |
| 0x00040000 | Verbindung Head-Unit zum SDARS Antennenfuß |
| 0x00080000 | Verbindung Head-Unit zur Bluetooth Antenne |
| 0x00100000 | Ethernet-Verbindung Head-Unit zur Combox |
| 0x00200000 | Ethernet-Verbindung RSE High zur Combox |
| 0xFFFFFFFF | Nicht definiert |

### RES_0XA022

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_ROUTINE | - | - | + | 0-n | - | unsigned long | - | TSelbsttestRoutine | - | - | - | Routine(n), die getestet wurde(n). Tabelle  TSelbsttestRoutine |
| STAT_SELBSTTEST | - | - | + | 0-n | - | unsigned char | - | TTestStatus | - | - | - | Gibt den Status des Tests wieder. |

### ARG_0XA022

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_SELBSTTEST_ROUTINE | + | - | - | - | unsigned long | - | - | - | - | - | - | - | Routinen, die getestet werden sollen. Die Tabelle TSelbsttestRoutine wird in der SGBD von der Entwicklung bzw. vom Zulieferer befüllt und gepflegt. |

### TSELBSTTESTROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00000000 | Alle Routinen |
| 0xFFFFFFFF | Nicht definiert |

### TTESTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft |
| 0x02 | Test beendet ohne Fehler |
| 0x03 | Test beendet mit Fehlern |
| 0x04 | Test unterbrochen |
| 0xFF | Nicht definiert |

### RES_0XA024

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MENU_WERT | - | - | + | - | - | unsigned long | - | - | - | - | - | ID des Menüs. |
| STAT_MENU_RSE_RIGHT_WERT | - | - | + | - | - | unsigned long | - | - | - | - | - | ID des Menü der zweiten MMI, z.B. RSE rechter Bildschirm. |

### ARG_0XA024

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_MENU | + | - | - | - | unsigned long | - | - | - | - | - | - | - | Einstellen eines MMI Menüs. |
| ARG_MENU_RSE_RIGHT | + | - | - | - | unsigned long | - | - | - | - | - | - | - | ID des Menüs der zweiten MMI, z.B. RSE rechter Bildschirm. |

### RES_0XA025

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LANGUAGE | - | - | + | 0-n | - | unsigned char | - | TLanguage | - | - | - | Die derzeit eingestellte MMI Sprache. |

### ARG_0XA025

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LANGUAGE | + | - | 0-n | - | unsigned char | - | TLanguage | - | - | - | - | - | legt die Sprache fest. |

### TLANGUAGE

| WERT | TEXT |
| --- | --- |
| 0x00 | codierte Sprache |
| 0x01 | Deutsch |
| 0x02 | Englisch (UK) |
| 0x03 | Englisch (US) |
| 0x04 | Spanisch |
| 0x05 | Italienisch |
| 0x06 | Französisch |
| 0x07 | Flämisch |
| 0x08 | Niederländisch |
| 0x09 | Arabisch |
| 0x0A | Chinesisch Traditionell |
| 0x0B | Chinesisch Simpel |
| 0x0C | Koreanisch |
| 0x0D | Japanisch |
| 0x0E | Russisch |
| 0x0F | Portugisisch |
| 0x10 | Schwedisch |
| 0x11 | Griechisch |
| 0x12 | Türkisch |
| 0x13 | Polnisch |
| 0x14 | Ungarisch |
| 0x15 | Arabisch |
| 0xFE | Kein Sprachpaket aktiv |
| 0xFF | Nicht definiert |

### RES_0XA029

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FLASH_ETHERNET_CONNECTION_STATE | - | - | + | 0-n | - | unsigned char | - | TEthernetActivationState | - | - | - | Status der Ethernet-Verbindung (es darf nicht 0 gemeldet werden). Ist die Verbindung nicht für das Steuergerät vorgesehen, so wird 255 zurückgemeldet. |
| STAT_HU_RSE_ETHERNET_CONNECTION_STATE | - | - | + | 0-n | - | unsigned char | - | TEthernetActivationState | - | - | - | Status der Ethernet-Verbindung (es darf nicht 0 gemeldet werden). Ist die Verbindung nicht für das Steuergerät vorgesehen, so wird 255 zurückgemeldet. |
| STAT_HU_COMBOX_ETHERNET_CONNECTION_STATE | - | - | + | 0-n | - | unsigned char | - | TEthernetActivationState | - | - | - | Status der Ethernet-Verbindung (es darf nicht 0 gemeldet werden). Ist die Verbindung nicht für das Steuergerät vorgesehen, so wird 255 zurückgemeldet. |
| STAT_RSE_COMBOX_ETHERNET_CONNECTION_STATE | - | - | + | 0-n | - | unsigned char | - | TEthernetActivationState | - | - | - | Status der Ethernet-Verbindung (es darf nicht 0 gemeldet werden). Ist die Verbindung nicht für das Steuergerät vorgesehen, so wird 255 zurückgemeldet. |

### ARG_0XA029

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_ETHERNET_CONNECTION | + | - | 0-n | - | unsigned char | - | TEthernetConnection | - | - | - | - | - | definiert, welche Ethernet-Verbindungen gesteuert werden sollen. |
| ARG_ACTIVATION_STATE | + | - | 0-n | - | unsigned char | - | TEthernetActivationState | - | - | - | - | - | steuert die Ethernet-Verbindung. |

### TETHERNETCONNECTION

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle |
| 0x01 | Ethernet Verbindung für den Flash-Prozess |
| 0x02 | Ethernet Verbindung Headunit zum RSE |
| 0x03 | Ethernet Verbindung Headunit zur Combox |
| 0x04 | Ethernet Verbindung RSE zur Combox |
| 0xFF | Nicht definiert |

### TETHERNETACTIVATIONSTATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Deaktiviert |
| 0x01 | Aktiviert |
| 0xFF | Nicht definiert |

### ARG_0XA036

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_LEVEL | + | - | - | - | char | - | - | - | - | - | - | - | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAudioSignal | - | - | - | - | - | Gibt an, welche Lautstärke verstellt oder ausgelesen werden soll. Default: 0 |

### ARG_0XA037

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_TRACK | + | - | - | - | unsigned int | - | - | - | - | - | - | - | Wählt die CD/DVD-Tracknummer die abgespielt werden soll. |

### RES_0XA039

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEVEL_WERT | + | - | - | - | - | char | - | - | - | - | - | Bei Headunits:  Hex-Wert, von 0x00 lückenlos bis 0x7F, Nicht unterstützte Werte (Stereo: 0x3F) dürfen nicht zu Fehlermeldungen führen. Sondern die für das Lautsprechersystem nächstmöglich kleinere verfügbare Lautstärke wird eingestellt.   Bei manchen sekundären Lautstärken wie Navi-Out wird die Lautstärke relativ angegeben, z.B: [-11;11]  Bei Verstärkern: Integer, -96..0 [dB] |

### ARG_0XA039

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_AUDIO_SIGNAL | + | - | 0-n | - | unsigned char | - | TAudioSignal | - | - | - | - | - | Gibt an, welche Lautstärke ausgelesen werden soll. Default: 0 |

### TAUDIOSIGNAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Entertainment |
| 0x01 | Offset Verkehrsmeldungen |
| 0x02 | Offset Navigation |
| 0x03 | Telefon |
| 0x04 | Spracherkennung |
| 0x05 | PDC |
| 0x06 | Gong |
| 0x07 | AUX-IN |
| 0x10 | nur für RSE: Entertainment Kopfhörer linke Seite |
| 0x20 | nur für RSE: Entertainment Kopfhörer rechte Seite |
| 0xFF | Nicht definiert |

### RES_0XA03C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LUEFTER | - | - | + | 0-n | - | unsigned char | - | TLuefterStatus | - | - | - | Status des Lüfters. |
| STAT_LUEFTER_DREHZAHL_WERT | - | - | + | Hz | - | unsigned int | - | - | - | - | - | Aktuelle Frequenz des Lüfters in Hz. (Wenn nicht abfragbar, wird 0xFFFF zurückgegeben) |

### ARG_0XA03C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARG_DURATION | + | - | - | - | unsigned char | - | - | - | - | - | 0.0 | 30.0 | legt die Dauer in Sekunden fest, die der Lüfter auf Maximum läuft. |

### TLUEFTERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter steht |
| 0x01 | Lüfter läuft, aber nicht mit der erwarteteten Drehzahl |
| 0x02 | Lüfter läuft mit der erwarteteten Drehzahl |
| 0xFE | Lüfter läuft mit unbekannter Drehzahl |
| 0xFF | Nicht definiert |

### RES_0XA04D

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_COUNTER_REGION_CODE_WERT | - | - | + | - | - | unsigned char | - | - | - | - | - | Wert Änderugszähler DVD Ländercode |

### RES_0XA078

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_JITTER_1_WERT | - | - | + | - | - | unsigned int | - | - | - | - | - | Jitter Wert 1 |
| STAT_JITTER_2_WERT | - | - | + | - | - | unsigned int | - | - | - | - | - | Jitter Wert 2 |

### TFBLOCKIDTEXTE

| WERT | TEXT |
| --- | --- |
| 0x02 | NetworkMaster=0x02 |
| 0x03 | ConnectionMaster=0x03 |
| 0x04 | PowerMaster=0x04 |
| 0x05 | Vehicle=0x05 |
| 0x06 | Diagnose=0x06 |
| 0x07 | VideoSwitch=0x07 |
| 0x10 | ManMachineInterface=0x10 |
| 0x11 | Sprachverarbeitungssystem=0x11 |
| 0x14 | BCStatistic=0x14 |
| 0x15 | ControlElements=0x15 |
| 0x20 | AudioMaster=0x20 |
| 0x22 | AudioAmplifier=0x22 |
| 0x23 | HeadPhoneAmplifier=0x23 |
| 0x24 | AuxilliaryInput=0x24 |
| 0x26 | MicrophoneInput=0x26 |
| 0x2E | AudioSinkRouter=0x2E |
| 0x2F | AudioSourceRouter=0x2F |
| 0x30 | AudioTapePlayer=0x30 |
| 0x31 | AudioDiscPlayer=0x31 |
| 0x32 | MultiMediaChanger=0x32 |
| 0x40 | AM/FM Tuner=0x40 |
| 0x41 | TMC Tuner=0x41 |
| 0x42 | TVTuner=0x42 |
| 0x43 | DABTuner=0x43 |
| 0x44 | SatRadio=0x44 |
| 0x50 | Telephone=0x50 |
| 0x51 | GeneralPhoneBook=0x51 |
| 0x52 | Navigationssystem=0x52 |
| 0x54 | Bluetooth=0x54 |
| 0x64 | TripMemory=0x64 |
| 0x6F | Monitor=0x6F |
| 0x70 | ParkDistanceControl=0x70 |
| 0x71 | Climate=0x71 |
| 0x74 | EBA/Services=0x74 |
| 0x80 | MMI_Terminal=0x80 |
| 0x81 | KOMBI_Terminal=0x81 |
| 0x82 | HUD_Terminal=0x82 |
| 0x90 | Telematik=0x90 |
| 0x91 | InternalAudioSource=0x91 |
| 0x92 | InternalAudioSink=0x92 |
| 0xAB | TollCollect=0xAB |
| 0xBE | Browser=0xBE |
| 0xC0 | CANDevices=0xC0 |
| 0xC9 | Services=0xC9 |
| 0xCA | KombiMiscFkts=0xCA |
| 0xCB | Bordcomputer=0xCB |
| 0xCC | ADASInterface=0xCC |
| 0xCD | NavigationInfo=0xCD |
| 0xCE | iSpeech=0xCE |
| 0xCF | HMIControl=0xCF |
| 0xD0 | Security=0xD0 |
| 0xD1 | SystemFunction=0xD1 |
| 0xD2 | MultiMediaServer=0xD2 |
| 0xD3 | MassStorageControl=0xD3 |
| 0xD4 | SWUpdate=0xD4 |
| 0xD5 | VirtualControlElements=0xD5 |
| 0xD6 | Vehicle2=0xD6 |
| 0xD7 | VideoConnectionMaster=0xD7 |
| 0xD8 | VideoSink=0xD8 |
| 0xD9 | EarlyVideoControl=0xD9 |
| 0xDA | MapControl=0xDA |
| 0xDB | Telematics=0xDB |
| 0xDC | DataComIP=0xDC |
| 0xDD | DownloadUploadMessagingManager=0xDD |
| 0xDE | TelematicAssist=0xDE |
| 0xDF | TeleX=0xDF |
| 0xE0 | KombiInterface=0xE0 |
| 0xE1 | HUDInterface=0xE1 |
| 0xE2 | Camera=0xE2 |
| 0xE3 | MOSTFileSystem=0xE3 |
| 0xE4 | SoundApplications=0xE4 |
| 0xE5 | CentralControlUnit=0xE5 |
| 0xE6 | TripMemory=0xE6 |
| 0xE7 | RemoteApplication=0xE7 |
| 0xE8 | VideoOutSettings=0xE8 |
| 0xE9 | SoundSIgnalService=0xE9 |
| 0xEA | ParkDistanceControl=0xEA |
| 0xEB | DebugApplication=0xEB |
| 0xED | PersonalInformationManagement=0xED |
| 0xEE | DataCommunication=0xEE |
| 0xFF | Nicht definiert |

### TMOSTLIGHT

| WERT | TEXT |
| --- | --- |
| 0 | Lichtleistung abgesenkt |
| 1 | Volle Lichtleistung |

### TWAKEUPSTATUS

| WERT | TEXT | TEXT2 |
| --- | --- | --- |
| 0 | not initialised | off |
| 1 | SG will be waked up | on |
| 2 | SG are waked up | critical |

### TATCVERSION

| WERT | TEXT |
| --- | --- |
| 0x00 | no ATC diagnosis possible |
| 0x01 | ATC diagnosis with track 12 measurement |
| 0x02 | ATC diagnosis with jitter measurement |
| 0xFF | Nicht definiert |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xB7FC00 | Berechnungsfehler von dem Navigationsrechner | 1 |
| 0xB7FC01 | Daten empfangen von der Head-Unit: unplausibel | 1 |
| 0xB7FC04 | Verbindung RSE zum Infrarot Sender 1 (links): offene Leitung | 0 |
| 0xB7FC05 | Verbindung RSE zum Infrarot Sender 1 (links): Kurzschluss | 0 |
| 0xB7FC32 | Verbindung RSE zum Infrarot Sender 1 (links): unbekannter Zustand | 0 |
| 0xB7FC06 | Verbindung RSE zum Infrarot Sender 2 (rechts): offene Leitung | 0 |
| 0xB7FC07 | Verbindung RSE zum Infrarot Sender 2 (rechts): Kurzschluss | 0 |
| 0xB7FC33 | Verbindung RSE zum Infrarot Sender 2 (rechts): unbekannter Zustand | 0 |
| 0xB7FC08 | Video Eingang 1: kein Video- oder Sync-Signal vorhanden | 0 |
| 0xB7FC09 | Video Eingang 2: kein Video- oder Sync-Signal vorhanden | 0 |
| 0xB7FC31 | Video Eingang 3: kein Video- oder Sync-Signal vorhanden | 0 |
| 0xB7FC0A | Video Eingang 1: Signal außerhalb Toleranz | 0 |
| 0xB7FC0B | Video Eingang 2: Signal außerhalb Toleranz | 0 |
| 0xB7FC0C | Video Eingang 3: Signal außerhalb Toleranz | 0 |
| 0xB7FC16 | DVD Laufwerk Hardware Fehler | 0 |
| 0xB7FC18 | DVD Medium Fehler | 1 |
| 0xB7FC19 | ATC Test negativ: DVD Laufwerk defekt | 0 |
| 0xD28C01 | Ausfall von dem linken hinteren Bildschirm | 1 |
| 0xD28C02 | Ausfall von dem rechten hinteren Bildschirm | 1 |
| 0xB7FC1C | Blende: Kommunikationsfehler | 0 |
| 0xB7FC1D | Blende: Hardware Fehler | 0 |
| 0xB7FC1E | Lüfter Fehler | 0 |
| 0xB7FC1F | Interner Spannungsfehler | 0 |
| 0xB7FC20 | Interner Temperatursfehler | 0 |
| 0x022600 | Energiesparmode aktiv | 0 |
| 0xB7FC23 | Externe Unterspannung | 1 |
| 0xB7FC24 | Externe Überspannung | 1 |
| 0xD2843F | Empfängerknoten: hat Nachricht nicht abgenommen; Puffer voll | 0 |
| 0xD28440 | Überwachungsschaltung hat Reset ausgelöst | 0 |
| 0xD28442 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt kritische Schwelle | 0 |
| 0xD28444 | MOST: Ring wacht nicht auf | 0 |
| 0xD28445 | Host hat bei fatalem Fehler vom INIC einen Reset ausgelöst | 0 |
| 0xB7FC25 | Ethernet Verbindung RSE High zur Head-Unit: Link Status von dem Ethernet Treiber nicht ok | 0 |
| 0xB7FC30 | Ethernet Verbindung RSE High zur Com-Box: Link Status von dem Ethernet Treiber nicht ok | 0 |
| 0xB7FC26 | Codierungsfehler Arbeitsbereich | 0 |
| 0xB7FC27 | Codierunsfehler Master Bereich | 0 |
| 0xB7FC28 | Codierungsereignis nicht codiert | 0 |
| 0xB7FC29 | Codierungsereignis falsches Fahrzeug | 0 |
| 0xB7FC2A | Codierungsereignis Datenübertragung fehlgeschlagen | 0 |
| 0xB7FC2B | Codierungsereignis Signatur Fehler | 0 |
| 0xB7FC2D | Hauptplatine Hardware Fehler | 0 |
| 0xB7FC2E | Flash File System fehlerhaft | 0 |
| 0xB7FC2F | Software Fehler (SWE x) | 0 |
| 0x02FF26 | Dummy Applikation-DTC | 0 |
| 0xD28BFF | Dummy Netzwerk-DTC | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x100600 | Ursache DVD Laufwerk Fehler | 0 |
| 0x100601 | Ursache DVD Laufwerk Initianilisierungsfehler | 0 |
| 0x100602 | Ursache Lad- / Auswurffehler | 0 |
| 0x100F00 | Ursache Medium Detektierungsfehler | 1 |
| 0x100700 | Blende: Protokollfehler | 0 |
| 0x100701 | Blende: Alive Fehler | 0 |
| 0x100702 | Blende: Versionsfehler | 0 |
| 0x100703 | Blende: Softwarefehler | 0 |
| 0x930000 | Timing-Master: kann Kanal nicht reservieren; Ergebnistabelle (RAT) voll | 0 |
| 0x930001 | Versorgungsspannung: Mindestwert unterschritten | 0 |
| 0x930002 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 1 | 0 |
| 0x930003 | Sender- Empfängerbaustein (FOT): Temperatur übersteigt Schwelle 2 | 0 |
| 0x930004 | Diagnose-Master-Client: Datenzwischenablage im Active Response Handler übergelaufen | 0 |
| 0x930005 | Diagnose-Master-Client: Telegramm Systemzeit nicht fristgerecht erkannt | 0 |
| 0x930006 | MOST: Licht geht unerwartet aus | 0 |
| 0x930007 | MOST: Synchronisation (PLL) arbeitet nicht korrekt | 0 |
| 0x930008 | Systemzustand Ok nicht fristgerecht erkannt | 0 |
| 0x930009 | Funktionsblock (Methode mit Handle): Lebenszeichen kommt nicht fristgerecht | 0 |
| 0x93000A | Funktionsblock (Methode): Lebenszeichen kommt nicht fristgerecht | 0 |
| 0x930011 | MOST: Ringbruch | 0 |
| 0x930030 | Timing-Master: kann Audiokanal nicht reservieren; beschäftigt | 0 |
| 0x930033 | Empfängerknoten: hat Nachricht nicht abgenommen; Empfänger existiert nicht | 0 |
| 0x930034 | Empfängerknoten: hat Nachricht nicht abgenommen; fehlerhafte Check-Summe am Empfänger erkannt | 0 |
| 0x930035 | Übertragungsfehler im Hardware Abstraction Layer | 0 |
| 0x930036 | Empfängerknoten: Segmentierungsfehler in Nachricht erkannt | 0 |
| 0x930037 | Senderknoten: Segmentierungsfehler in Nachricht erkannt | 0 |
| 0x930038 | Empfängerknoten: Fehler in Nachrichtenwarteschlange erkannt | 0 |
| 0x930039 | Senderknoten: Fehler in Nachrichtenwarteschlange erkannt | 0 |
| 0x93003A | Empfängerknoten: Kommandointerpreter kennt Nachricht nicht | 0 |
| 0x93003B | Empfängerknoten: mindestens eine Nachricht (Group/Broadcast) nicht abgenommen | 0 |
| 0x93003C | MOST: Ring unerlaubt geweckt | 0 |
| 0x93003D | Senderknoten: adressierter Funktionsblock existiert nicht | 0 |
| 0x93003E | Senderknoten: falsche Parameter in Nachricht | 0 |
| 0x93003F | Senderknoten: Fehler in adressierter Funktion | 0 |
| 0x930040 | Senderknoten: Fehler in Segmentierung | 0 |
| 0x930041 | Funktionsblock: sendet keine Werte trotz Notifizierung | 0 |
| 0x930042 | Funktionsblock: Notifizierung abgelehnt; Spalte der Notifizierungstabelle voll | 0 |
| 0x930043 | Funktionsblock: Notifizierung abgelehnt; keine freien Zeilen in Notifizierungstabelle | 0 |
| 0x930044 | Funktionsblock: Notifizierung abgelehnt; gewünschte Funktion existiert nicht | 0 |
| 0x930045 | Funktionsblock: Notifizierung abgelehnt; Grund unbekannt | 0 |
| 0x930046 | Funktionsblock: Notifizierung abgelehnt; Funktionswert momentan nicht vorhanden | 0 |
| 0x930047 | Audiosenke: Audioeinstellungen nicht korrekt ausgeführt | 0 |
| 0x930048 | Audiosenke: Audioeinstellungen nicht fristgerecht ausgeführt | 0 |
| 0x930049 | Audioquelle: kann Kanal nicht reservieren; Ergebnistabelle (RAT) voll | 0 |
| 0x93004A | Audioquelle: kann nicht fristgerecht geschaltet werden | 0 |
| 0x100900 | Ursache V850 RAM Fehler | 0 |
| 0x100901 | Ursache E2P Checksum Fehler | 0 |
| 0x100902 | Ursache Videodecoder Fehler | 0 |
| 0x100903 | Ursache keine IPC Kommunikation möglich | 0 |
| 0x100C01 | Reset: Ursache ONOFF_ERROR | 0 |
| 0x100C02 | Reset: Ursache ONOFF_EMERGENCY_ERROR | 0 |
| 0x100C03 | Reset: Ursache HMI_DIED | 0 |
| 0x100C04 | Reset: Ursache ASN_NAVI_DIED | 0 |
| 0x100C05 | Reset: Ursache CHILD_DIED | 0 |
| 0x100C06 | Reset: Ursache THREAD_WATCHDOG | 0 |
| 0x100C07 | Reset: Ursache DSP_WATCHDOG | 0 |
| 0x100C08 | Reset: Ursache DSP_INIT_ERROR | 0 |
| 0x100C09 | Reset: Ursache LAYERMANAGER_DIED | 0 |
| 0x100E00 | Software Fehler für den Fehler Tracking Mechanismus | 0 |
| 0x100D00 | Fehler konnte nach maximaler Anzahl an Versuchen nicht gesendet werden | 0 |
| 0x100D01 | FZM-Botschaft Fehler | 0 |
| 0x101100 | ERC_CSM_UNEXPECTED_ERROR | 0 |
| 0x101101 | ERC_CSM_UNEXPECTED_RESPONSE | 0 |
| 0x101102 | ERC_CSM_INVALID_ENCRYPTED_ID_AND_KEY | 0 |
| 0x101103 | ERC_CSM_INVALID_SG_ID | 0 |
| 0x101104 | ERC_CSM_INVALID_SIGNATURE_OVER_RND | 0 |
| 0x101105 | ERC_CSM_SWE_INVALID | 0 |
| 0x101106 | ERC_ZSG_NO_RESPONSE_FROM_MSM | 0 |
| 0x101107 | ERC_ZSG_INVALID_B2VSEC_AUTHENTICATION | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

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
