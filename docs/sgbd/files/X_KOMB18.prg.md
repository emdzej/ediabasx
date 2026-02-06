# X_KOMB18.prg

## General

|  |  |
| --- | --- |
| File | X_KOMB18.prg |
| Type | PRG |
| Jobs | 50 |
| Tables | 93 |
| Origin | BMW UX-EE-2 Doll |
| Revision | 2.007 |
| Author | Bertrand UX-EE-2 Schneider, Dräxlmaier UX-EE-1 Rätscher, Dräxlm |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorrad Instrumentenkombi K18MIU |  |  |
| ORIGIN | string | BMW UX-EE-2 Doll |  |  |
| REVISION | string | 2.007 |  |  |
| AUTHOR | string | Bertrand UX-EE-2 Schneider, Dräxlmaier UX-EE-1 Rätscher, Dräxlm |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.60 |  |  |
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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

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

### STEUERN_GWSZ_OFFSET_SETZEN

JobHeaderFormat 0xD114 GWSZ_RESET

_No arguments._

### STATUS_EWS4_SK

Dieser Job dient zum (Gegen-)Lesen der Secretkeys / ISNs (vor einem anschließenden Verriegeln Kommando) JobHeaderFormat 0xC002 STATUS_EWS4_SK_CAS

_No arguments._

### STATUS_FAHRGESTELLNUMMER

Lesen der Fahrgestellnummer JobHeaderFormat 0xF190 FAHRGESTELLNUMMER_LANG

_No arguments._

### STATUS_SCHLUESSEL_TRSP

Liefert den Status des momentan in der Ringspule befindlichen Schlüssels. Der Job liefert den Status des zuletzt gefundenen Transponders in der Ringspule. Die Daten sind max. 300 ms alt und entprellt (bei dauerhaft vorhandenem Transponder, keine flackernden Results). Ist der Schlüssel unbekannt und bereits gelocked, so werden nur die immer lesbaren Informationen ausgegeben. JobHeaderFormat 0xDC7E STATUS_SCHLUESSEL_TRSP

_No arguments._

### STATUS_SCHLUESSELDATEN

Den Status eines Schlüssel laut Transpondertabelle ausgeben. Anmerkung: Die Informationen sind unabhängig von einem evtl. gerade vorhandenen Transponder in der Ringspule bzw. einem erkannten ID-Geber. JobHeaderFormat 0xAC5A STATUS_SCHLUESSELDATEN

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Das Argument enthält die Kennzahl für die Auswahl des zu lesenden Schlüssels, Telestart-Handsender oder der Fond-Fernbedienung. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION. |

### STEUERN_CAS_ANLIEFERZUSTAND

Versetzt das CAS in den Anlieferzustand (Montage-Modi, Codierung, VIN, Tansponder-Tabelle, EWS4_CLIENT_SK, ...) Falls Rücksetzen unzulässig: ERROR_ECU_CONDITIONS_NOT_CORRECT. Anmerkung: Nach dem Rücksetzen müssen alle im verriegelten Zustand geschützten W JobHeaderFormat 0xAC50 STEUERN_CAS_ANLIEFERZUSTAND

| Name | Type | Description |
| --- | --- | --- |
| EWS4_TRSP_SK | string | Das (optionale) Argument enthält den geheimen EWS4_TRSP_SK. Die Jobdauer ist immer die gleiche (kleiner 5 Sekunden). Hinweise: - Wenn das CAS nicht verriegelt ist, so kann der Aufruf auch ohne Parameter erfolgen. - 16-Byte hex-Wert als String in dem folgenden Format: '0x01,0x02,0x03' oder '01 02 03'. |

### STEUERN_CAS_INIT_LOC_DATE

Konfigurationd des CAS setzen. Die Konfiguration ist nach dem Verriegeln des EWS4_SK bzw. EWS4_TRSP_SK nicht mehr änderbar (ERROR_ECU_CONDITIONS_NOT_CORRECT). Werden unzulässige Daten übergeben, so erfolgt ein ERROR_DATA. JobHeaderFormat 0xDC7B CAS_INIT_LOC_DATE

| Name | Type | Description |
| --- | --- | --- |
| INIT_DAY | unsigned char | Argument Tag CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 1-31. |
| INIT_MONTH | unsigned char | Argument Monat CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 1-12. |
| INIT_YEAR | unsigned int | Argument Jahr CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 2000-9999. |
| INIT_LOCATION | string | Das Argument enthält den Ort der Schlüssel-Initialisierung. Hinweise: - Format: 4 Zeichen ASCII - Beispiele: 0240 = Werk 2.4, 0220 = Werk 2.2, 0100 = Werk München, EDGF = Ersatzteilplatz Dingolfing |
| INIT_STATION | string | Das Argument enthält die BMW-spezifische Kennung der Anlernstation (4 Zeichen ASCII, z.B. Anlagennummer, Kennung für Nacharbeit, ...). Hinweise: - Format: 4 Zeichen ASCII, z.B. Anlagennummer, Kennung für Nacharbeit - Beispiele: DC22, DA21, DN01, ... |

### STEUERN_EWS4

Dieser Job dient zum Setzen der Secretkeys und zum anschließenden Verriegeln. JobHeaderFormat 0xC001 STEUERN_EWS4_CAS

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Das Argument dient zur Auswahl der auszuführenden Aktion. Hinweise: - 'WRITE_DMEDDE_SK' SecretKey des EWS4-Servers zur Anbindung einer EWS4-DME/DDE soll geschrieben werden. Argument ist der DMEDDE-SecretKey. - 'LOCK_DMEDDE_SK' EGS_ISN und EWS4_DMEDDE_SK soll verriegelt werden. Kein Argument. - 'WRITE_TRSP_SK' SecretKey des EWS4-Clients zur Anbindung der Transponder-Schlüssel soll geschrieben werden. Argument ist der TRSP-SecretKey. - 'LOCK_TRSP_SK' SecretKey des EWS4-Clients zur Anbindung der Transponder-Schlüssel soll verriegelt werden. Kein Argument. - 'LOCK_EWS4' SecretKeys der EWS4-Clients zur Anbindung der Transponder-Schlüssel und SecretKey des EWS4-Servers zur Anbindung einer EWS4-DME/DDE sollen beide verriegelt werden. Argument DATA enthält 0x00. - 'UNLOCK_DMEDDE_SK' NUR ENTWICKLUNG! Argument DATA muss EWS4_DMEDDE_SK enthalten, der bereits im CAS gespeichert ist! - 'UNLOCK_TRSP_SK' NUR ENTWICKLUNG! Argument DATA muss TRSP_SK  enthalten, der bereits im CAS gespeichert ist! |
| DATA | string | Das Argument enthält den zu schreibenden SecretKey - 16-Byte Daten (SecretKey), falls MODE = WRITE_DMEDDE_SK/WRITE_TRSP_SK oder UNLOCK_DMEDDE_SK/UNLOCK_TRSP_SK - Keine Daten nötig, falls MODE = LOCK_TRSP_SK/LOCK_DMEDDE_SK/LOCK_EWS4 - Folgende Formate müssen unterstützt werden: "01 23 45 67 89 AB CD EF 01 23 45 67 89 AB CD EF" und "0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF,0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF". |

### STEUERN_FAHRGESTELLNUMMER

Schreiben der Fahrgestellnummer JobHeaderFormat 0xF190 FAHRGESTELLNUMMER_LANG

| Name | Type | Description |
| --- | --- | --- |
| FGNR17 | string | 17-stellige Fahrgestellnummer. Zum Zurücksetzenim Steuergerät wird das Argument '00000000000000000' verwendet. Hinweise: - Nur Werte von '0' - '9' und/oder Großbuchstaben 'A' - 'Z' verwenden - Der Argumentwert '00000000000000000' wird SGBD-intern in 0xFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF gewandelt, bevor er an das CAS gesendet wird. |

### STEUERN_SCHLUESSEL_INIT

Job zum Anstoßen der Schlüssel-Initialisierung. Nur zulässig, solange EWS4_TRSP_SK noch nicht verriegelt. JobHeaderFormat 0xAC52 STEUERN_SCHLUESSEL_INIT

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Argument zur Auswahl der Schlüssel-Position in der Transponder-Tabelle an der der Schlüssel oder der Telestarthandsender oder die FFB angelernt werden soll. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION. |
| KEY_ID | string | Das Argument enthält die zu schreibende ID des Schlüssels. Hinweise: - 4-Byte hex-Wert. - Alle Werte ausser 'FF FF FF FF' - Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01,0x23,0x45,0x67'. |
| KEY_TYPE | unsigned char | Das Argument enthält den zu schreibenden Typ des Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_KEYTYPE. |
| INIT_MODE | unsigned char | Festlegen des Anlernmodus (optional). Hinweise: - 1= Normal anlernen und Schlüssel verriegeln (default). - 0= Normal anlernen, aber Schlüssel nicht verriegeln. |

### STEUERN_SCHLUESSEL_SPERRE

Job zum Sperren und wieder freigeben von Schlüsseln. Der Job ist nur zulässig, wenn sich gerade ein gültiger Schlüssel an der Transponder-Spule befindet. Der aktuelle Schlüssel an der Transponder-Spule kann nicht gesperrt oder freigegeben werden. JobHeaderFormat 0xDC73 STEUERN_SCHLUESSEL_SPERRE

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Auswahl des Schlüssels in der Transponder-Tabelle. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION. - Es sind nur die Werte 0-9 zulässig. |
| SCHL_SPERRE | unsigned char | Auswahl der Aktion Sperren oder Freigeben des gewählten Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSELSPERRE. - Es sind nur die Werte 0 oder 1 zulässig. |

### STEUERN_SCHLUESSELDATEN

Schlüssel-Daten in CAS schreiben (z.B. für Ersatz-Steuergerät oder Nacharbeit). Nur zulässig solange EWS4_TRSP_SK nicht verriegelt. JobHeaderFormat 0xDC80 STEUERN_SCHLUESSELDATEN

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Das Argument zur Auswahl der Position in der  Transponder-Tabelle an der der Schlüssel oder der  Telestart-Handsender oder die Fond-Fernbedienung angelernt werden soll. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION. |
| KEY_ID | string | Das Argument enthält die zu schreibende ID des Schlüssels. Hinweise: - 4-Byte hex-Wert. - Alle Werte ausser 'FF FF FF FF' - Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01,0x23,0x45,0x67'. |
| KEY_TYPE | unsigned char | Das Argument enthält den zu schreibenden Typ des Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_KEYTYPE. |
| KEY_DISABLED | unsigned char | Zum Schlüssel sperren/entsperren. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSELSPERRE. - Es sind nur die Werte 0 und 1 zulässig. |

### STATUS_GWSZ_ANZEIGE

JobHeaderFormat 0xD122 GWSZ_ANZEIGE_WERT

_No arguments._

### STEUERN_GWSZ_OFFSET

JobHeaderFormat 0xD114 STEUERN_GWSZ_RESET

_No arguments._

### STATUS_CAS_ANLIEFERZUSTAND

Dieser Job liefert den aktuellen Fortschritt des Rücksetzen nach STEUERN_CAS_ANLIEFERZUSTAND. JobHeaderFormat 0xDC7D STATUS_CAS_ANLIEFERZUSTAND

_No arguments._

### STATUS_CAS_FREQ_TYPE

Konfiguration des CAS bzgl. Schlüssel-Initialisierung auslesen. JobHeaderFormat 0xDC79 CAS_FREQ_TYPE

_No arguments._

### STATUS_CAS_INIT_LOC_DATE

Konfiguration des CAS bzgl. Schlüssel-Initialisierung auslesen. JobHeaderFormat 0xDC7B CAS_INIT_LOC_DATE

_No arguments._

### STATUS_EWS

Liefert den aktuellen Status der EWS-SecretKeys ISNs und den Status bzgl. KeyID KeyPIN JobHeaderFormat 0xC000 STATUS_EWS

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

### ARG_0XB00F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZIELPOSITION | + | - | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Zielposition in Prozent vom Gesamtbereich. Anschlag unten = 0%, Anschlag oben = 100% |

### ARG_0XB06B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOMATIKLAUF_SPERRE_EIN | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 1 = Automatiklaufsperre ein 2 = Automatiklaufsperre aus |

### ARG_0XDC54_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAENDLER_NUMMER | TEXT | - | string[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die 5-stellige Händlernummer. Im Werk ist dieser Wert = 00000. |
| ERSTZULASSUNGSDATUM_TAG | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 31.0 | Das Argument enthält den Tag des Erstzulassungsdatums. Im Werk: dieser Wert = Tag der Schlüssel-Initialisierung. |
| ERSTZULASSUNGSDATUM_MONAT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | Das Argument enthält den Monat des Erstzulassungsdatums.  Im Werk: dieser Wert = Monat der Schlüssel-Initialisierung. |
| ERSTZULASSUNGSDATUM_JAHR | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 2000.0 | 9999.0 | Das Argument enthält das Jahr des Erstzulassungsdatums.  Im Werk ist dieser Wert = Jahr der Schlüssel-Initialisierung. Wertebereich 2000 - 9999. |

### ARG_0XE010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HUPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Horn; 1=EIN, 0=AUS |

### ARG_0XE119_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GWSZ_SCHREIBEN | km | - | signed long | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | GWSZ im Kombi auf neuen Wert setzen |

### ARG_0XE12B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KOMBI_STUNDE_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 23.0 | Stunde |
| KOMBI_MINUTE_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 59.0 | Minute |
| KOMBI_SEKUNDE_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 59.0 | Sekunde |
| KOMBI_TAG_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 31.0 | Tag |
| KOMBI_MONAT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | Monat |
| KOMBI_JAHR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Jahr |

### ARG_0XE12C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SERVICE_TAG | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Tag, an dem der nächste Service fällig ist |
| SERVICE_MONAT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Monat, an dem der nächste Service fällig ist |
| SERVICE_JAHR | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Jahr, an dem der nächste Service fällig ist |

### ARG_0XE12D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESTWEG | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Setzen des Wegstreckenintervalles bis zur nächsten Seviceanzeige |

### ARG_0XE1B2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Wert Ausgang |

### ARG_0XE1B3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLINKER_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Blinker links 0 = aus, 1 = ein |
| BLINKER_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Blinker rechts 0 = aus, 1 = ein |

### ARG_0XE1B4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Wert Ausgang |

### ARG_0XE1B7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABBLENDLICHT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Steuern Abblendlicht: 1 = ein, 0 = aus |

### ARG_0XE1B8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FERNLICHT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Steuern Fernlicht: 1 = ein, 0 = aus |

### ARG_0XE1B9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_FAHRER | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Steuern PWM Fahrer 0..100% |
| PWM_BEIFAHRER | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Steuern PWM Beifahrer 0..100% |

### ARG_0XE1BA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Steuern PWM Griffheizung 0..100% |

### ARG_0XE1BB_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODUS | 0-n | high | unsigned char | - | TAB_MR_TWW_MODE | - | - | - | - | - | Tag oder Nacht Modus |
| WARNSTUFE_LINKS | 0-n | high | unsigned char | - | TAB_MR_TWW_ARG | - | - | - | - | - | Warnstufe linke Seite |
| WARNSTUFE_RECHTS | 0-n | high | unsigned char | - | TAB_MR_TWW_ARG | - | - | - | - | - | Warnstufe rechte Seite |

### ARG_0XE1BC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_POS_TFL | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM Wert Positionslicht oder Tagfahrlicht |

### ARG_0XE1BD_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTROLLLEUCHTE | 0-n | high | unsigned char | - | TAB_MR_KONTROLLLEUCHTE_K18 | - | - | - | - | - | Aktive Kontrollleuchte |
| EIN_AUS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = aus, 1 = ein |

### ARG_0XE1BE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESCHWINDIGKEIT | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert Geschwindigkeit |

### ARG_0XF190_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FGNR17 | TEXT | - | string[17] | - | - | 1.0 | 1.0 | 0.0 | - | - | 17-stellige Fahrgestellnummer |

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
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x026000 | Energiesparmode aktiv | 0 |
| 0xB7F600 | Abblendlicht Kurzschluss nach GND | 0 |
| 0xB7F601 | Abblendlicht Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F602 | Blinker hinten links Kurzschluss nach GND | 0 |
| 0xB7F603 | Blinker hinten links Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F604 | Blinker hinten rechts Kurzschluss nach GND | 0 |
| 0xB7F605 | Blinker hinten rechts Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F606 | Blinker vorne links Kurzschluss nach GND | 0 |
| 0xB7F607 | Blinker vorne links Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F608 | Blinker vorne rechts Kurzschluss nach GND | 0 |
| 0xB7F609 | Blinker vorne rechts Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F60A | Bremslicht Kurzschluss nach GND | 0 |
| 0xB7F60B | Bremslicht Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F60C | Fernlicht Kurzschluss nach GND | 0 |
| 0xB7F60D | Fernlicht Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F60E | Griffheizung Kurzschluss nach GND | 0 |
| 0xB7F60F | Griffheizung Leitungsunterbrechung oder Kurzschluss nach UBatt | 0 |
| 0xB7F612 | Horn Kurzschluss nach GND | 0 |
| 0xB7F613 | Horn Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F614 | Windschild Automatiklauf gesperrt | 0 |
| 0xB7F615 | INFO Taster: Kurzschluss nach GND | 0 |
| 0xB7F616 | Kilometerstand  manipuliert | 0 |
| 0xB7F617 | Klemme 15 Hardware unplausibel | 1 |
| 0xB7F618 | Kurzschluss zwischen Taster Blinker links und rechts | 0 |
| 0xB7F619 | Kurzschluss zwischen Taster Windschild hochfahren und Windschild herunterfahren | 0 |
| 0xB7F61A | Rücklicht Kurzschluss nach GND | 0 |
| 0xB7F61B | Rücklicht Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F61C | Schalter Sitzheizung Beifahrer: Kurzschluss zwischen Stufe1 und Stufe2 | 0 |
| 0xB7F61D | SideViewAssist LED linke Seite Kurzschluss oder Leitungsunterbrechung | 0 |
| 0xB7F61F | SideViewAssist LED rechte Seite Kurzschluss oder Leitungsunterbrechung | 0 |
| 0xB7F621 | Sitzheizung Beifahrer Kurzschluss nach GND | 0 |
| 0xB7F622 | Sitzheizung Beifahrer Leitungsunterbrechung oder Kurzschluss nach UBatt | 0 |
| 0xB7F623 | Sitzheizung Fahrer Kurzschluss nach GND | 0 |
| 0xB7F624 | Sitzheizung Fahrer Leitungsunterbrechung oder Kurzschluss nach UBatt | 0 |
| 0xB7F625 | Standlicht oder Tagfahrlicht Kurzschluss nach GND | 0 |
| 0xB7F626 | Standlicht oder Tagfahrlicht Leitungsunterbrechung oder Kurzschluss nach UBatt | 0 |
| 0xB7F629 | Tankgeber Kurzschluss nach GND | 0 |
| 0xB7F62A | Tankgeber Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F62B | Taster Blinker links: Kurzschluss nach GND | 0 |
| 0xB7F62C | Taster Blinker rechts: Kurzschluss nach GND | 0 |
| 0xB7F62D | Taster Blinker Reset: Kurzschluss nach GND | 0 |
| 0xB7F62E | Taster Griffheizung: Kurzschluss nach GND | 0 |
| 0xB7F62F | Taster Hupe: Kurzschluss nach GND | 0 |
| 0xB7F630 | Taster Sitzheizung Fahrer: Kurzschluss nach GND | 0 |
| 0xB7F631 | Taster Tagfahrlicht: Kurzschluss nach GND | 0 |
| 0xB7F632 | Taster Windschild herunterfahren: Kurzschluss nach GND | 0 |
| 0xB7F633 | Taster Windschild hochfahren: Kurzschluss nach GND | 0 |
| 0xB7F634 | Temperatursensor Kurzschluss nach GND | 0 |
| 0xB7F635 | Temperatursensor Kurzschluss nach UBatt oder Leitungsunterbrechung | 0 |
| 0xB7F636 | TRIP Taster: Kurzschluss nach GND | 0 |
| 0xB7F638 | Ueberspannung Batterie | 1 |
| 0xB7F639 | Unterspannung Batterie | 1 |
| 0xB7F63B | Warnblinker Taster: Kurzschluss nach GND | 0 |
| 0xB7F63E | Hardwarefehler Steuergeraet | 0 |
| 0xB7F63F | Softwarefehler Steuergeraet | 0 |
| 0xB7F640 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0xB7F641 | Codierung: Signatur für Daten ungültig | 0 |
| 0xB7F642 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0xB7F643 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0xB7F644 | NVM_E_CONTROL_FAILED | 0 |
| 0xB7F645 | NVM_E_ERASE_FAILED | 0 |
| 0xB7F646 | NVM_E_READ_ALL_FAILED | 0 |
| 0xB7F647 | NVM_E_READ_FAILED | 0 |
| 0xB7F648 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0xB7F649 | NVM_E_WRITE_FAILED | 0 |
| 0xB7F64A | NVM_E_WRONG_CONFIG_ID | 0 |
| 0xB7F64B | DMEDDE_SK Fehler | 0 |
| 0xB7F64C | EWS4 Fehler | 0 |
| 0xB7F64D | Odometer Fehler | 0 |
| 0xB7F64E | Schlüssel deaktiviert | 0 |
| 0xB7F64F | Transponder antwortet nicht | 0 |
| 0xB7F650 | TRSP_SK Fehler | 0 |
| 0xB7F651 | Unbekannter Schlüssel | 0 |
| 0xB7F652 | Ungültiger Schlüssel | 0 |
| 0xB7F653 | Windschild EEPROM Fehler | 0 |
| 0xB7F654 | Windschild Encoderfehler | 0 |
| 0xB7F655 | Windschild Überstrom | 0 |
| 0xB7F656 | Windschild Übertemperatur | 0 |
| 0xB7F658 | Produktionsmode aktiv | 0 |
| 0xB7F659 | Weckleitung Kurzschluss nach UBatt | 0 |
| 0xB7F65A | Weckleitung Kurzschluss nach GND | 0 |
| 0xE1045F | CAN Bus Off | 1 |
| 0xE11422 | CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11424 | CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11428 | CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1142A | CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11432 | CAN DWA Nachricht Status_DWA_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1143C | CAN RDC Nachricht Status_RDC_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11440 | CAN DME Nachricht Wegstrecke_Redundant_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11442 | CAN ABS-BCO Nachricht Wegstrecke_Relativ_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11480 | CAN DME Nachricht Temperatur_Ansaugluft_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1148B | CAN TWW Nachricht Status_Totwinkelbereich_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

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
| 0xB7F63C | SEK Ueberspannung Batterie | 1 |
| 0xB7F63D | SEK Unterspannung Batterie | 1 |
| 0xB7F657 | Fehlerhafte EWS4 Anfrage von DME empfangen | 1 |
| 0xE11423 | SEK_CAN ABSBCO Nachricht Geschwindigkeit_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11425 | SEK_CAN DME Nachricht Klemmenstatus_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11429 | SEK_CAN DME Nachricht Motordaten_1_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE1142B | SEK_CAN DME Nachricht Motordaten_2_Motorrad_2010: Zeitüberschreitung | 1 |
| 0xE11433 | SEK_CAN DWA Nachricht Status_DWA_Motorrad_20100 - Zeitüberschreitung | 1 |
| 0xE11443 | SEK_CAN ABS-BCO Nachricht Wegstrecke_Relativ_Motorrad_2010 - Zeitüberschreitung | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### PROG_DEP_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | correctResult |
| 2 | incorrectResult |
| 3 | incorrectResult error SWE - HWE |
| 4 | incorrectResult error SWE - SWE |
| 255 | reserved |

### RDTCI_LEV_DOP

| WERT | TEXT |
| --- | --- |
| 2 | reportDTCByStatusMask |
| 4 | reportDTCsnapshotRecordByDTCnumber |
| 6 | reportDTCextendedDataRecordByDTCnumber |
| 7 | reportNumberOfDTCbySeverityMaskRecord |
| 8 | reportDTCbySeverityMaskRecord |
| 9 | reportSeverityInformationOfDTC |
| 10 | reportSupportedDTC |
| 18 | reportNumberOfEmissionsRelatedOBDDTCByStatusMask |
| 19 | reportEmissionsRelatedOBDDTCByStatusMask |

### RES_0XB004_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_MR_ROUTINE | - | - | - | Aktueller Zustand Routine |

### RES_0XB00A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALIBRIERUNG | - | - | + | 0-n | high | unsigned char | - | TAB_MR_KALIBRIERUNG | - | - | - | Status Kalibrierung |

### RES_0XB00F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WINDSCHILD | - | - | + | 0-n | high | unsigned char | - | TAB_MR_WINDSCHILD_K18 | - | - | - | Aktueller Zustand Windschild |
| STAT_POSITION_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position in Prozent vom Gesamtbereich. Anschlag unten = 0%, Anschlag oben = 100% |

### RES_0XB06B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOMATIKLAUF_SPERRE | + | - | + | 0/1 | high | unsigned char | - | - | - | - | - | 1 = Automatiklaufsperre ein 0 =  Automatiklaufsperre aus |

### RES_0XD10D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABSOLUT_GWSZ_RAM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert den absoluten Gesamtwegstreckenzähler aus dem RAM. |
| STAT_ABSOLUT_GWSZ_EEP_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert den absoluten Gesamtwegstreckenzähler aus dem EEPROM. |

### RES_0XDC54_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAENDLER_NUMMER_TEXT | TEXT | - | string[5] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die 5-stellige Händlernummer. Im Werk wird dieser Wert auf 00000. |
| STAT_ERSTZULASSUNGSDATUM_TAG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Tag des Erstzulassungsdatums. Im Werk wird dieser Wert auf den Tag der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_MONAT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Monat des Erstzulassungsdatums.  Im Werk wird dieser Wert auf den Monat der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_JAHR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Jahr des Erstzulassungsdatums.  Im Werk wird dieser Wert auf das Jahr der Schlüssel-Initialisierung gesetzt. Wertebereich: 2000-9999. |

### RES_0XE010_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horn; 1=EIN, 0=AUS |

### RES_0XE0A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSSENTEMP_ROH_WERT | mV | - | unsigned char | - | - | 19.6 | 1.0 | 0.0 | Auslesen des Rohwertes Spannung Aussentemperaturfühler |
| STAT_AUSSENTEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Außentemperatursensor in Grad Celsius |

### RES_0XE119_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GWSZ_WERT | km | - | signed long | - | - | 1.0 | 1.0 | 0.0 | aktueller GWSZ-Wert |

### RES_0XE12B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMBI_STUNDE_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktuellen Stunde |
| STAT_KOMBI_MINUTE_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktuellen Minute |
| STAT_KOMBI_SEKUNDE_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe der aktuellen Sekunde |
| STAT_KOMBI_TAG_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Tag |
| STAT_KOMBI_MONAT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Monat |
| STAT_KOMBI_JAHR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des aktuellen Jahr |

### RES_0XE12C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SERVICE_TAG_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Tag, an dem der nächste Service fällig ist |
| STAT_SERVICE_MONAT_WERT | - | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Monat, an dem der nächste Service fällig ist |
| STAT_SERVICE_JAHR_WERT | - | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Jahr, an dem der nächste Service fällig ist |

### RES_0XE12D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESTWEG_WERT | km | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | verbleibendes Wegstreckenintervall bis wegabhängiger Service als überfällig angezeigt wird |

### RES_0XE1A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_BLINKER_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | Status Taster: 0 = aus, 1 = ein |
| STAT_TASTER_BLINKER_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | Status Taster: 0 = aus, 1 = ein |
| STAT_TASTER_BLINKER_RESET | 0/1 | high | unsigned char | - | - | - | - | - | Status Taster: 0 = aus, 1 = ein |

### RES_0XE1AE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HOCH | 0/1 | high | unsigned char | - | - | - | - | - | Status Taster Windschild hoch: 0 = aus, 1 = ein |
| STAT_TASTER_RUNTER | 0/1 | high | unsigned char | - | - | - | - | - | Status Taster Windschild runter: 0 = aus, 1 = ein |

### RES_0XE1B0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_STUFE1 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter: 0 = aus, 1 = ein |
| STAT_SCHALTER_STUFE2 | 0/1 | high | unsigned char | - | - | - | - | - | Status Schalter: 0 = aus, 1 = ein |

### RES_0XE1B1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_U_TANKGEBER_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Spannung Tankgeber |
| STAT_U_PLATINE_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Spannung Platine |
| STAT_T_PLATINE_WERT | °C | high | unsigned int | - | - | 1.0 | 1.0 | -40.0 | Status Temperatur Platine |
| STAT_U_T_LUFT_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status Spannung Temperatursensor Umgebungsluft |

### RES_0XE1B2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Wert Ausgang |

### RES_0XE1B3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLINKER_VL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status analog Blinker vorne links |
| STAT_BLINKER_VR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status analog Blinker vorne rechts |
| STAT_BLINKER_HL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status analog Blinker hinten links |
| STAT_BLINKER_HR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Status analog Blinker hinten rechts |

### RES_0XE1B4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Wert Ausgang |

### RES_0XE1B7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABBLENDLICHT | 0/1 | high | unsigned char | - | - | - | - | - | Status Abblendlicht: 1 = ein, 0 = aus |

### RES_0XE1B8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FERNLICHT | 0/1 | high | unsigned char | - | - | - | - | - | Status Fernlicht: 1 = ein, 0 = aus |

### RES_0XE1B9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_FAHRER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status PWM Fahrer 0..100% |
| STAT_PWM_BEIFAHRER_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status PWM Beifahrer 0..100% |

### RES_0XE1BA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status PWM Griffheizung 0..100% |

### RES_0XE1BB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODUS | 0-n | high | unsigned char | - | - | - | - | - | Tag oder Nacht Modus |
| STAT_WARNSTUFE_LINKS | 0-n | high | unsigned char | - | - | - | - | - | Warnstufe linke Seite |
| STAT_WARNSTUFE_RECHTS | 0-n | high | unsigned char | - | - | - | - | - | Warnstufe rechte Seite |
| STAT_LED_LINKS_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Wert LED linke Seite |
| STAT_LED_RECHTS_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Wert LED rechte Seite |

### RES_0XE1BC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PWM_POS_TFL_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM Wert Positionslicht oder Tagfahrlicht |

### RES_0XE1BF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BLINKER_VL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Blinker vorne links |
| STAT_BLINKER_VR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Blinker vorne rechts |
| STAT_BLINKER_HL_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Blinker hinten links |
| STAT_BLINKER_HR_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Blinker hinten rechts |
| STAT_STANDLICHT_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Standlicht |
| STAT_RUECKLICHT_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Rücklicht |
| STAT_SITZHEIZUNG_FAHRER_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Sitzheizung Fahrer |
| STAT_SITZHEIZUNG_BEIFAHRER_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Sitzheizung Beifahrer |
| STAT_FERNLICHT_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Fernlicht |
| STAT_ABBLENDLICHT_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Abblendlicht |
| STAT_GRIFFHEIZUNG_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Griffheizung |
| STAT_HORN_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Horn |
| STAT_BREMSLICHT_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Strommessung Bremslicht |

### RES_0XF190_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FGNR17_TEXT | TEXT | - | string[17] | - | - | 1.0 | 1.0 | 0.0 | 17-Stellige Fahrgestellnummer |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SELBSTTEST_DISPLAY | 0xB004 | - | Display Selbsttest | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB004_R |
| KALIBRIERUNG_WINDSCHILD_MR | 0xB00A | - | Routine für Windschild Kalibrierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xB00A_R |
| WINDSCHILD_MR | 0xB00F | - | Steuerung Windschild über Positionsangabe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB00F_R | RES_0xB00F_R |
| WINDSCHILD_AUTOMATIKLAUF_SPERRE_MR | 0xB06B | - | Sperrt Windschild Automatiklauf | - | - | - | - | - | - | - | - | - | 31 | ARG_0xB06B_R | RES_0xB06B_R |
| GWSZ_ABSOLUT_WERT | 0xD10D | - | Aboluter Gesamtwegstreckenzähler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD10D_D |
| GWSZ_RESET | 0xD114 | STAT_GWSZ_OFFSET_WERT | Rueckgabe des Anzeigeoffset des GWSZ. | km | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GWSZ_ANZEIGE_WERT | 0xD122 | STAT_GWSZ_ANZEIGE_WERT | Aufruf liefert den angezeigten Gesamtwegstreckenzähler | km | - | - | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| KEY_VALID_NR_AKTUELL | 0xDAB4 | STAT_KEY_VAILD_NR_AKTUELL | Das Result enthält die Nummer (gemäß Transpondertabelle) des aktuell gültigen Schlüssel. Werte: 0-19 Schlüsselnummer, 255 momentan kein gültiger Schlüssel. | 0-n | - | - | unsigned char | TAB_CAS_SCHLUESSEL_POSITION | - | - | - | - | 22 | - | - |
| HO_INFO | 0xDC54 | - | Auslesen und Setzen der folgenden im CAS gespeicherten Daten für die Handelsorganisation: - Händlernummer - Erstzulassungsdatum Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN mit Argument HO_INFO. - Die Händlernummer wird vom Werk mit '00000' und das Erstzulasungsdatum mit dem Datum der Schlüssel-Initialisierung belegt. Diese Informationen sind Teil der CBS-Daten und werden auch in den Schlüssel übertragen. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC54_D | RES_0xDC54_D |
| HUPE_MR | 0xE010 | - | Hupe | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE010_D | RES_0xE010_D |
| KL_15_HW_DIGITAL_MR | 0xE013 | STAT_KL_15_HW_DIGITAL_EIN | Status Klemme 15 Hardware digital | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| AUSSENTEMPERATUR_MR | 0xE0A0 | - | Aussentemperaturfühler | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE0A0_D |
| PRODUKTIONSMODE_MR | 0xE0FF | - | Produktionsmode interne Vorgabe RDZ MDZ | - | - | - | - | - | - | - | - | - | 2F | - | - |
| WEGSTRECKENEINHEIT_MR | 0xE117 | STAT_EINHEIT | Im Kombi dargestellte Wegstreckeneinheit: 0 = km, 1 = Meilen | 0/1 | - | high | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GWSZ_MR | 0xE119 | - | Gesamtwegstreckenzähler Motorrad | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE119_D | RES_0xE119_D |
| WECKLEITUNG_DIGITAL_MR | 0xE11C | STAT_WECKLEITUNG_DIGITAL_EIN | aktueller Zustand der  Weckleitung | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| GESCHWINDIGKEIT_ANZEIGE_MR | 0xE126 | STAT_GESCHWINDIGKEIT_WERT | aktuell im Kombi angezeigte Geschwindigkeit | km/h | - | - | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| UHRZEIT_DATUM_MR | 0xE12B | - | Uhrzeit und Datum im Kombi | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12B_D | RES_0xE12B_D |
| SERVICE_DATUM_MR | 0xE12C | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Zeit | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12C_D | RES_0xE12C_D |
| SERVICE_RESTWEG_MR | 0xE12D | - | Auslesen und Schreiben der bis zum nächsten fälligen Service verbleibende Weg | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE12D_D | RES_0xE12D_D |
| BATTERIESPANNUNG_MR | 0xE142 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| EINGANG_TRIP_MR | 0xE19F | STAT_TASTER | Status Taster: 0 = aus, 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| EINGANG_INFO_MR | 0xE1A0 | STAT_TASTER | Status Taster: 0 = aus, 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| EINGANG_BLINKER_MR | 0xE1A1 | - | Taster Blinker Motorrad | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE1A1_D |
| EINGANG_WARNBLINKER_MR | 0xE1A9 | STAT_TASTER | Status Taster: 0 = aus, 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| EINGANG_FERNLICHT_MR | 0xE1AA | STAT_TASTER | Status Taster: 0 = aus, 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| EINGANG_TAGFAHRLICHT_MR | 0xE1AB | STAT_TASTER | Status Taster: 0 = aus, 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| EINGANG_GRIFFHEIZUNG_MR | 0xE1AC | STAT_TASTER | Status Taster: 0 = aus, 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| EINGANG_HUPE_MR | 0xE1AD | STAT_TASTER | Status Taster: 0 = aus, 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| EINGANG_WINDSCHILD_MR | 0xE1AE | - | Taster Windschild Motorrad | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE1AE_D |
| EINGANG_SITZHEIZUNG_FAHRER_MR | 0xE1AF | STAT_TASTER | Status Taster: 0 = aus, 1 = ein | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| EINGANG_SITZHEIZUNG_BEIFAHRER_MR | 0xE1B0 | - | Schalter Sitzheizung Beifahrer Motorrad | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE1B0_D |
| EINGANG_ANALOG_K18 | 0xE1B1 | - | Analoge Eingänge Kombi K18MUE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE1B1_D |
| AUSGANG_BREMSLICHT_MR | 0xE1B2 | - | Ausgang Bremslicht Motorrad | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1B2_D | RES_0xE1B2_D |
| AUSGANG_BLINKER_MR | 0xE1B3 | - | Ausgang Blinker Motorrad | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1B3_D | RES_0xE1B3_D |
| AUSGANG_RUECKLICHT_MR | 0xE1B4 | - | Ausgang Rücklicht Motorrad | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1B4_D | RES_0xE1B4_D |
| AUSGANG_ABBLENDLICHT_MR | 0xE1B7 | - | Digitaler Ausgang (ein/aus) für Abblendlicht | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1B7_D | RES_0xE1B7_D |
| AUSGANG_FERNLICHT_MR | 0xE1B8 | - | Digitaler Ausgang (ein/aus) für Fernlicht | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1B8_D | RES_0xE1B8_D |
| AUSGANG_SITZHEIZUNG_MR | 0xE1B9 | - | PWM Ausgang für Sitzheizung Fahrer und Beifahrer | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1B9_D | RES_0xE1B9_D |
| AUSGANG_GRIFFHEIZUNG_MR | 0xE1BA | - | PWM Ausgang für Griffheizung links und rechts | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1BA_D | RES_0xE1BA_D |
| AUSGANG_LED_SVA_MR | 0xE1BB | - | Ausgang LED SideViewAssist | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1BB_D | RES_0xE1BB_D |
| AUSGANG_STANDLICHT_TFL_MR | 0xE1BC | - | PWM gesteuerter Ausgang Standlicht oder Tagfahrlicht links und rechts | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xE1BC_D | RES_0xE1BC_D |
| AUSGANG_KONTROLLLEUCHTEN_MR | 0xE1BD | - | Ansteuerung Kombi Kontrollleuchten | - | - | - | - | - | - | - | - | - | 2F | ARG_0xE1BD_D | - |
| AUSGANG_GESCHWINDIGKEITSANZEIGE_MR | 0xE1BE | - | Ansteuerung Geschwindigkeitsanzeige | - | - | - | - | - | - | - | - | - | 2F | ARG_0xE1BE_D | - |
| AUSGANG_ANALOG_K18 | 0xE1BF | - | Strommessung analoge Ausgänge | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE1BF_D |
| VIN | 0xF190 | - | Fahrgestellnummer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xF190_D | RES_0xF190_D |

### SVK_VERSION_DOP

| WERT | TEXT |
| --- | --- |
| 0 | reserved |
| 1 | SVKVersion_01 |

### TAB_IM_ADEV_VALID

| WERT | TEXT |
| --- | --- |
| 0 | Authentisierungs-Device 0 |
| 1 | Authentisierungs-Device 1 |
| 19 | Authentisierungs-Device 19 |
| 255 | unbekannt / ungültig |

### TAB_MR_KALIBRIERUNG

| WERT | TEXT |
| --- | --- |
| 0xFD | Kalibrierung Position unten |
| 0xFE | Kalibrierung Position oben |
| 0x00 | Kalibrierung erfolgreich abgeschlossen |
| 0x07 | Kalibrierung kann nicht ausgeführt werden |
| 0x01 | Kalibrierung gestartet |
| 0x02 | Kalibrierung bereits durchgeführt |
| 0x03 | Kalibrierung nicht durchgeführt |
| 0xFF | Kalibrierungsfehler |

### TAB_MR_KONTROLLLEUCHTE

| WERT | TEXT |
| --- | --- |
| 0x01 | Blinker links |
| 0x02 | Blinker rechts |
| 0x03 | ABS |
| 0x04 | Warnleuchte rot |
| 0x05 | Fernlicht |
| 0x06 | Tagfahrlicht |
| 0x07 | Reservelampe |
| 0x08 | MIL |
| 0x09 | DWA |
| 0x0A | Warnleuchte gelb |
| 0xFE | Alle Kontrollleuchten |

### TAB_MR_KONTROLLLEUCHTE_K18

| WERT | TEXT |
| --- | --- |
| 0x01 | Blinker links |
| 0x02 | Blinker rechts |
| 0x03 | ABS |
| 0x04 | Warnleuchte rot |
| 0x05 | Fernlicht |
| 0x06 | Tagfahrlicht |
| 0x07 | Reservelampe |
| 0x08 | MIL |
| 0x09 | DWA |
| 0x0A | Warnleuchte gelb |
| 0x0C | ASC |
| 0xFE | Alle Kontrollleuchten |

### TAB_MR_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Routine läuft |
| 0x01 | Routine abgebrochen |
| 0x02 | Routine beendet |
| 0xFF | unbekannt |

### TAB_MR_TWW_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Warnung |
| 0x01 | Warnung Stufe 1 |
| 0x02 | Warnung Stufe 2 |
| 0x03 | Signal ungültig |

### TAB_MR_TWW_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Tagmodus |
| 0x01 | Nachtmodus |

### TAB_MR_TWW_MODE_RES

| WERT | TEXT |
| --- | --- |
| 0x00 | Tagmodus |
| 0x01 | Nachtmodus |
| 0xFF | Wert ungültig |

### TAB_MR_TWW_RES

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Warnung |
| 0x01 | Warnung Stufe 1 |
| 0x02 | Warnung Stufe 2 |
| 0x03 | Signal ungültig |
| 0xFF | Wert ungültig |

### TAB_MR_WINDSCHILD_K18

| WERT | TEXT |
| --- | --- |
| 0x00 | Windschild wird verfahren |
| 0x01 | Zielposition erreicht |
| 0x02 | Verfahren abgebrochen |
| 0xFF | Status unbekannt |

### TAB_STEUERN_EWS4_MODE

| WERT | NAME | TEXT | DATA_LENGTH |
| --- | --- | --- | --- |
| 0x01 | LOCK_EWS4 | LOCK DMEDDE-Sk & Trsp-Sk | 0 |
| 0x02 | WRITE_DMEDDE_SK | Write DME/DDE-Sk | 16 |
| 0x03 | WRITE_TRSP_SK | Write Trsp-Sk | 16 |
| 0x04 | LOCK_DMEDDE_SK | Lock DME/DDE-Sk | 0 |
| 0x05 | LOCK_TRSP_SK | Lock Trsp-Sk | 0 |
| 0x06 | UNLOCK_DMEDDE_SK | UnLock DME/DDE-Sk | 16 |
| 0x07 | UNLOCK_TRSP_SK | UnLock Trsp-Sk | 16 |
| 0x10 | UNLOCK_CLEAR_DMEDDE_SK | Clear DME/DDE-Sk | 16 |
| 0x11 | UNLOCK_CLEAR_TRSP_SK | Clear Trsp-Sk | 16 |
| 0xFF | UNKNOWN_MODE | UNKNOWN_MODE | 0 |

### TAB_CAS_KEYTYPE

| WERT | TEXT |
| --- | --- |
| 0 | Umlaufschlüssel |
| 2 | Geldbörsen-Schlüssel |
| 3 | Drivers-Key |
| 5 | ID-Geber |

### TAB_CAS_SCHLUESSELSPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Schlüssel nicht gesperrt oder unbekannt |
| 1 | Schlüssel gesperrt |
| 2 | Schlüssel temporär gesperrt wegen CA-Funktion |
| 255 | ungültig |

### TAB_CAS_TRSP_INITSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | IS_INVALID: Ungültiger Wert (TRSP wird gelesen) |
| 1 | IS_CPLT: Schlüssel ist initialisiert (STATUS_SCHLUESSELDATEN result STAT_INIT_DONE ist 1 => in ECU gespeichert) |
| 2 | IS_KEYAUTH: Schlüssel wird authentisiert |
| 3 | IS_KEYCFG_NO_VALID: Konfiguration nicht gültig |
| 4 | IS_KEYCFG_VERIFY: Konfiguration wird verifiziert |
| 5 | IS_KEYCFG_RD: Konfiguration wird gelesen |
| 6 | IS_KEYCFG_VALID: Konfiguration gültig |
| 7 | IS_KEYCFG_LOCK: Konfiguration wird verriegelt |
| 8 | IS_KEYCFG_CHECK: Konfiguration wird geprüft |
| 9 | IS_KEYCFG_RESTART: Neustart Konfiguration |
| 10 | IS_KEYCFG_PREP:Konfiguration wird vorbereitet |
| 11 | IS_SEL_ADD: Page 1 wird geschrieben |
| 12 | IS_UDATA_1: Page 2 wird geschrieben |
| 13 | IS_UDATA_2: Page 8 wird geschrieben |
| 14 | IS_ENCRYPT: Page 4 wird geschrieben |
| 15 | IS_PA_ENCRYPT: Page 5 wird geschrieben |
| 16 | IS_MUTHUAL: Muthual Key wird geschrieben |
| 17 | IS_ISSUER: Issuer Key wird geschrieben |
| 18 | IS_UDATA_3: Page 9 wird geschrieben |
| 19 | IS_UDATA_4: Page 10 wird geschrieben |
| 20 | IS_UDATA_5: Page 11 wird geschrieben |
| 21 | IS_UDATA_6: Page 12 wird geschrieben |
| 22 | IS_UDATA_7: Page 13 wird geschrieben |
| 23 | IS_UDATA_8: Page 14 wird geschrieben |
| 24 | IS_UDATA_9: Page 15 wird geschrieben |
| 25 | IS_UDATA_10: Page 18 wird geschrieben |
| 26 | IS_CFG_WD: Transponder Konfiguration WORD wird geschrieben |
| 255 | IS_NOT_INIT: Schlüssel ist nicht an diesem SG angelernt |

### TAB_CAS_SCHLUESSELDATEN_INITSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | IS_INVALID: Ungültiger Wert |
| 1 | IS_CPLT: Schlüssel ist initialisiert |
| 2 | IS_KEYCFG_WR_DFLASH: Schreibe Schlüsseldaten ins DFlahs des SGs |
| 3 | IS_KEYCFG_WR_TRSP: Schreibe Schlüsseldaten in den Transponder. Detailierten Status sh. STATUS_SCHLUESSEL_TRSP result STAT_INIT_DONE. |
| 255 | IS_DEFAULT: Default Wert / Anlieferzustand |

### TAB_CAS_SCHLUESSEL_POSITION

| WERT | TEXT |
| --- | --- |
| 0 | Schlüssel 0 |
| 1 | Schlüssel 1 |
| 2 | Schlüssel 2 |
| 3 | Schlüssel 3 |
| 4 | Schlüssel 4 |
| 5 | Schlüssel 5 |
| 6 | Schlüssel 6 |
| 7 | Schlüssel 7 |
| 8 | Schlüssel 8 |
| 9 | Schlüssel 9 |
| 10 | Schlüssel 10 |
| 11 | Schlüssel 11 |
| 12 | Schlüssel 12 |
| 13 | Schlüssel 13 |
| 14 | Schlüssel 14 |
| 15 | Schlüssel 15 |
| 16 | Schlüssel 16 |
| 17 | Schlüssel 17 |
| 18 | Schlüssel 18 |
| 19 | Schlüssel 19 |
| 100 | Telestart-Handsender der THS 1 |
| 101 | Telestart-Handsender der THS 2 |
| 200 | Fond-Fernbedienung |
| 252 | EMV-Testmodus - Verhindert die Schlüsselsuche und schaltet das LF-Feld ein |
| 253 | EMV-Testmodus - Verhindert die Schlüsselsuche und schaltet das LF-Feld aus |
| 254 | Sonderfunktion SG wach halten |
| 255 | unbekannt |

### TAB_CAS_TRSP_TYPE

| WERT | TEXT |
| --- | --- |
| 1 | HT2 |
| 2 | HTPro |
| 3 | TI DST80 |
| 4 | TI CRAID |
| 255 | unbekannt |

### TAB_CAS_TRSP_ERROR

| WERT | TEXT |
| --- | --- |
| 0 | IERR_OK - Kein Fehler |
| 1 | IERR_NO_TRSP - Kein Transponder gefunden |
| 2 | IERR_TRSP_COM - Fehler Transponderkommunikation |
| 4 | IERR _AUTH - Authentisierung fehlerhaft |
| 5 | IERR_ID_INVALID - ID des Transponders in der Ringspule stimmt nicht mit dem Argument KEY_ID in STEUERN_SCHLUESSEL_INIT überein. |
| 6 | IERR_ID_BUSY - ID ist bereits an anderer Position der Schlüsseltabelle gespeichert |
| 7 | IERR_TRSP_CFG - Transponder ist verriegelt |
| 10 | IERR_BS_ANT - Fehler Ringantenne |
| 11 | IERR_REPAIR - Teilweise initialisierter Schlüssel konnte nicht zurückgesetzt werden |
| 12 | IERR_CFG_MODE - Fehlerhafte Konfiguration im CFG mode des Transponders |
| 14 | IERR_LOCK_CFG - Fehler beim Verriegeln des Transponders |
| 16 | IERR_JOB_PARAM - ungueltiger Parameter des Jobs STEUERN_SCHLUESSEL_INIT |
| 18 | IERR_WR_SEL_ADD - Fehler beim Schreiben der Page 1 |
| 19 | IERR_WR_UDATA1 - Fehler beim Schreiben der Page 2 |
| 20 | IERR_WR_ENCRYPT - Fehler beim Schreiben der Page 4 (Authentication Key) |
| 21 | IERR_WR_PA_ENCRYPT - Fehler beim Schreiben der Page 5 (Passive Entry Encryption Key) |
| 22 | IERR_WR_MUTUAL - Fehler beim Schreiben der Page 7 (Muthual Authentication Key) |
| 23 | IERR_WR_ISSUER - Fehler beim Schreiben der Page 6 (Issuer Key) |
| 24 | IERR_WR_UDATA2 - Fehler beim Schreiben der Page 8 |
| 25 | IERR_WR_UDATA3 - Fehler beim Schreiben der Page 9 |
| 26 | IERR_WR_UDATA4 - Fehler beim Schreiben der Page 10 |
| 27 | IERR_WR_UDATA5 - Fehler beim Schreiben der Page 11 |
| 28 | IERR_WR_UDATA6 - Fehler beim Schreiben der Page 12 |
| 29 | IERR_WR_UDATA7 - Fehler beim Schreiben der Page 13 |
| 30 | IERR_WR_UDATA8 - Fehler beim Schreiben der Page 14 |
| 31 | IERR_WR_UDATA9 - Fehler beim Schreiben der Page 15 |
| 32 | IERR_WR_UDATA10 - Fehler beim Schreiben der Page 18 |
| 33 | IERR_WR_CFG_WD - Fehler beim Schreiben der Konfigurations-Page |
| 34 | IERR_RD_SEL_ADD - Fehler beim Lesen der Page 1 |
| 35 | IERR_RD_UDATA1 - Fehler beim Lesen der Page 2 |
| 36 | IERR_RD_UDATA2 - Fehler beim Lesen der Page 8 |
| 37 | IERR_RD_UDATA3 - Fehler beim Lesen der Page 9 |
| 38 | IERR_RD_UDATA4 - Fehler beim Lesen der Page 10 |
| 39 | IERR_RD_UDATA5 - Fehler beim Lesen der Page 11 |
| 40 | IERR_RD_UDATA6 - Fehler beim Lesen der Page 12 |
| 41 | IERR_RD_UDATA7 - Fehler beim Lesen der Page 13 |
| 42 | IERR_RD_UDATA8 - Fehler beim Lesen der Page 14 |
| 43 | IERR_RD_UDATA9 - Fehler beim Lesen der Page 15 |
| 44 | IERR_RD_UDATA10 - Fehler beim Lesen der Page 18 |
| 45 | IERR_RD_ENCRYPT - Fehler beim Lesen der Page 4 (Authentication Key) |
| 46 | IERR_RD_PA_ENCRYPT - Fehler beim Lesen der Page 5 (Passive Entry Encryption Key) |
| 47 | IERR_RD_MUTUAL - Fehler beim Lesen der Page 7 (Muthual Authentication Key) |
| 48 | IERR_RD_ISSUER - Fehler beim Lesen der Page 6 (Issuer Key) |
| 49 | IERR_RD_CFG_WD - Fehler beim Lesen der Konfigurations-Page |
| 50 | IERR_LK_SEL_ADD - Fehler beim Verriegeln der Page 1 |
| 51 | IERR_LK_UDATA1 - Fehler beim Verriegeln der Page 2 |
| 52 | IERR_LK_UDATA2 - Fehler beim Verriegeln der Page 8 |
| 53 | IERR_LK_UDATA3 - Fehler beim Verriegeln der Page 9 |
| 54 | IERR_LK_UDATA4 - Fehler beim Verriegeln der Page 10 |
| 55 | IERR_LK_UDATA5 - Fehler beim Verriegeln der Page 11 |
| 56 | IERR_LK_UDATA6 - Fehler beim Verriegeln der Page 12 |
| 57 | IERR_LK_UDATA7 - Fehler beim Verriegeln der Page 13 |
| 58 | IERR_LK_UDATA8 - Fehler beim Verriegeln der Page 14 |
| 59 | IERR_LK_UDATA9 - Fehler beim Verriegeln der Page 15 |
| 60 | IERR_LK_UDATA10 - Fehler beim Verriegeln der Page 18 |
| 61 | IERR_LK_ENCRYPT - Fehler beim Verriegeln der Page 4 (Authentication Key) |
| 62 | IERR_LK_PA_ENCRYPT - Fehler beim Verriegeln der Page 5 (Passive Entry Encryption Key) |
| 63 | IERR_LK_MUTUAL - Fehler beim Verriegeln der Page 7 (Muthual Authentication Key) |
| 64 | IERR_LK_ISSUER - Fehler beim Verriegeln der Page 6 (Issuer Key) |
| 65 | IERR_LK_CFG_WD - Fehler beim Verriegeln der Konfigurations-Page |
| 66 | IERR_INVALID_CONFIG_WORD - Fehler Transponderkonfiguration ungültig |
| 68 | IERR_INVALID_MLC_CS - Checksumme mechanischer Schließcode ungültig |
| 255 | Unbekannter Fehlerstatus |

### TAB_CAS_FREQ

| WERT | TEXT |
| --- | --- |
| 0 | Keine Frequenz |
| 1 | Reserviert |
| 2 | Reserviert |
| 3 | 315 MHz LowPower |
| 4 | 315 MHz |
| 5 | 433 MHz |
| 6 | 868 MHz |
| 7 | 433 Mhz (KOREA) |
| 8 | Reserviert (GHZ) |
| 15 | Ungültige Frequenz |
| 255 | Ungültige Frequenz / Kein zweiter Empfänger |

### TAB_CAS_FBD_BATTERIEZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Batterie sehr schlecht |
| 1 | Batterie schlecht |
| 2 | Batterie schlecht bis mittel |
| 3 | Batterie mittel |
| 4 | Batterie mittel bis gut |
| 5 | Batterie gut |
| 6 | Batterie sehr gut |
| 10 | Batterie schwach - Kommunikation ohne Authentisierung |
| 11 | Batterie gut - Kommunikation ohne Authentisierung |
| 255 | unbekannt bzw. nicht relevant |

### TAB_CAS_TRSP_KEY_CONFIG_SUPPLIER

| WERT | TEXT |
| --- | --- |
| 0 | Schlüsselkonfiguration ist nicht ok, Schlüssel ist nicht anlernbar |
| 1 | Schlüsselkonfiguration ist ok, Schlüssel ist anlernbar |
| 2 | kein HitagPro-Schlüssel |
| 255 | unbekannt/ungültig |

### TAB_CAS_TRSP_VERRIEGELUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Anlieferzustand |
| 1 | Verriegelt |
| 2 | Teilweise Verriegelt - Zwischenzustand |
| 3 | Fehlerhafte Konfiguration- Initialisierung nicht möglich |
| 4 | Kein normaler Anlieferzustand - Komplett unverriegelt |
| 255 | unbekannter Transpondertyp |

### TAB_TRSP_KEY_DATA_CONSISTENT

| WERT | TEXT |
| --- | --- |
| 0 | Transponder Daten nicht konsistent oder nur teilweise gelesen |
| 1 | Transponder Daten konsistent und vollständig gelesen |
| 255 | Unbekannt |
