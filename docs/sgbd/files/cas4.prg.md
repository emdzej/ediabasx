# cas4.prg

## General

|  |  |
| --- | --- |
| File | cas4.prg |
| Type | PRG |
| Jobs | 160 |
| Tables | 77 |
| Origin | BMW EI-73 Andreas Wojcik |
| Revision | 0.906 |
| Author | mPT Kögel GmbH Automotive Alfred Kögel, Conti Temic GmbH L/B2/EFB Dieter Karg |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CAS4 |  |  |
| ORIGIN | string | BMW EI-73 Andreas Wojcik |  |  |
| REVISION | string | 0.906 |  |  |
| AUTHOR | string | mPT Kögel GmbH Automotive Alfred Kögel, Conti Temic GmbH L/B2/EFB Dieter Karg |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.27 |  |  |
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

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) |

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

### _STATUS_CAS_INIT_KENNUNG

Jobbeschreibung:	Der Job dient zum Auslesen des CAS Zustands (Verriegelt/Entriegelt) bezüglich des Schlüsselanlernens Vorbedingungen:		keine Diagnose-Service:	UDS $22 DID $4001 Gültigkeit:			Ab F001-08-09-300 Kommentare:			JobHeaderFormat.Nicht in der Diagnose-Datenbank erfasst!

_No arguments._

### STATUS_ANALOG

Job zum Auslesen Analoger Spannungs-Werte am Steuergerät. JobHeaderFormat Aus Kompatibilitaetsgruenden nur fuer I300 Softwarestand verwenden! 0xF3A0 _STATUS_U_KL15N30B (KL15N, KL30B_1, KL30B_2, KL15WUP) 0xF3A1 _STATUS_U_KL15_KL50 (KL15_1, KL15_2, KL15_3, KL15_50, KL50, KL50MSA) 0xF3A2 _STATUS_U_POWERSUPPLY (TEMP, LF_DIAG, LF_STROM) 0xF3A3 _STATUS_U_ELV (KL30_ELV, KL31_ELV) 0xF3A4 _STATUS_U_HALL_TAGE (HALL_VERS13, HALL_VERS24)

_No arguments._

### STATUS_PM_HISTORIE

Der Job dient zum Auslesen des Powermanagement Historienspeicher des CAS. Der Historienspeicher gibt die Weckquelle, das zeitliche Auftreten (relativer Abstand zwischen 2 Weckereignissen) und die Häufigkeit von Weckereignissen wieder. JobHeaderFormat STATUS_PM_HISTORIE Diagnose-Service:	UDS $22 DID $4103

_No arguments._

### STATUS_PM_SCHLAFBEREITSCHAFT

Der Job dient zum Auslesen der Schlafbereitschaft des CAS und gibt den Status aller möglichen Einschlafverhinderer, d.h. Weckquellen (CAS-intern/extern) aus. JobHeaderFormat STATUS_PM_SCHLAFBEREITSCHAFT Diagnose-Service:	UDS $22 DID $4104

_No arguments._

### _STATUS_STARTCYC_CNT

Jobbeschreibung:	Der Job dient zum Auslesen des Startzykluszählers. Hinweis: Der Startzykluszähler zählt die Anzahl der erfolgreichen Motorstarts. Vorbedingungen:		keine Diagnose-Service:	UDS Diagnose-Service:	UDS $22 DID $4205 Gültigkeit:			Ab F001-08-09-300 Kommentare:			JobHeaderFormat.Nicht in der Diagnose-Datenbank erfasst!

_No arguments._

### _STEUERN_CAS_INIT_KENNUNG

Jobbeschreibung:	Der Job dient zum Verriegeln bzw. Entriegeln des CAS für das Schlüsselanlernen Vorbedingungen:		keine Diagnose-Service:	UDS $2E DID $4001 Gültigkeit:			Ab F001-08-09-300 Kommentare:			JobHeaderFormat.Nicht in der Diagnose-Datenbank erfasst!

| Name | Type | Description |
| --- | --- | --- |
| CAS_INIT | string | Beschreibung:		Das Argument dient zum Verriegeln des CAS hinsichtlich des Anlernens von Schlüsseln. Datenlänge: 		3 Byte Gültige Werte: 		0xAAAAAA = CAS für Schlüssel anlernen sperren Alle anderen Werte = CAS für Schlüssel anlernen freischalten Einheit:			hex |

### _STEUERN_STARTCYC_CNT

Jobbeschreibung:	Der Job dient zum Schreiben des Startzykluszählers. Hinweis: Der Startzykluszähler zählt die Anzahl der erfolgreichen Motorstarts. Vorbedingungen:		keine Diagnose-Service:	UDS Diagnose-Service:	UDS $2E DID $4205 Gültigkeit:			Ab F001-08-09-300 Kommentare:			JobHeaderFormat.Nicht in der Diagnose-Datenbank erfasst!

| Name | Type | Description |
| --- | --- | --- |
| STARTCYC_CNT | string | Beschreibung:		Das Argument enthält den zu setzten Wert für den Startzykluszählers. Datenlänge: 		4 Byte Gültige Werte: 		0x00000000 - 0xFFFFFFFF = Hexadezimaler Wert des Startzykluszählers Einheit:			hex |

### STATUS_CAS_ANLIEFERZUSTAND

Dieser Job liefert den aktuellen Fortschritt des Rücksetzen nach STEUERN_CAS_ANLIEFERZUSTAND. JobHeaderFormat STATUS_CAS_ANLIEFERZUSTAND Diagnose-Service:	UDS $22 DID $4003

_No arguments._

### STATUS_CAS_FREQ_TYPE

Konfiguration des CAS bzgl. Schlüssel-Initialisierung auslesen. JobHeaderFormat STATUS_CAS_FREQ_TYPE Diagnose-Service:	UDS $22 DID $4202

_No arguments._

### STATUS_CAS_INIT_LOC_DATE

Konfiguration des CAS bzgl. Schlüssel-Initialisierung auslesen. JobHeaderFormat STATUS_CAS_INIT_LOC_DATE Diagnose-Service:	UDS $22 DID $4203

_No arguments._

### STATUS_CAS_WUP

4-Byte FBD-Wakeup-Pattern lesen. JobHeaderFormat STATUS_CAS_WUP Diagnose-Service:	UDS $22 DID $4204

_No arguments._

### STATUS_DIGITAL

Job zum Auslesen digitaler Stati JobHeaderFormat 0xF3A5 _STATUS_DIG_INPUT_START_STOP (A_S_START, BLS_MSA) 0xF3A6 _STATUS_DIG_INPUT_HALL (HALL_SSTA, HALL_SSTB) 0xF3A8 _STATUS_DIG_INPUT_SCHALTER (CLT, MHK, HOTEL, MSA, TOEHKL) 0xF3A9 _STATUS_DIG_INPUT_BREMSE_KUPPL (BLTS, PN_KUPPL)

_No arguments._

### STATUS_EGS_ISN

Verriegelungs-Status für EGS-ISN im CAS lesen (wird für Getriebe-EWS genutzt) JobHeaderFormat STATUS_EGS_ISN Diagnose-Service:	UDS $22 DID $4300

_No arguments._

### STATUS_EWS

Liefert den aktuellen Status der EWS-SecretKeys ISNs und den Status bzgl. KeyID KeyPIN JobHeaderFormat STATUS_EWS_CAS Diagnose-Service:	UDS $22 DID $C000

_No arguments._

### STATUS_EWS4_SK

Dieser Job dient zum (Gegen-)Lesen der Secretkeys / ISNs (vor einem anschließenden Verriegeln Kommando) JobHeaderFormat STATUS_EWS4_SK_CAS Diagnose-Service:	UDS $22 DID $C002

_No arguments._

### STATUS_FAHRGESTELLNUMMER

Lesen der Fahrgestellnummer JobHeaderFormat STATUS_FAHRGESTELLNUMMER Diagnose-Service:	UDS $22 DID $F190

_No arguments._

### STATUS_SCHLUESSEL_TRSP

Liefert den Status des momentan in der Ringspule befindlichen Schlüssels. Der Job liefert den Status des zuletzt gefundenen Transponders in der Ringspule. Die Daten sind max. 300 ms alt und entprellt (bei dauerhaft vorhandenem Transponder, keine flackernden Results). Ist der Schlüssel unbekannt und bereits gelocked, so werden nur die immer lesbaren Informationen ausgegeben. JobHeaderFormat STATUS_SCHLUESSEL_TRSP Diagnose-Service:	UDS $22 DID $4200

_No arguments._

### STATUS_SCHLUESSELDATEN

Jobbeschreibung:	Dieser Job dient dazu den Status eines Schlüssel laut Transpondertabelle auszulesen. Anmerkung: Die Informationen sind unabhängig von einem evtl. gerade vorhandenen Transponder in der Ringspule bzw. einem erkannten ID-Geber. Vorbedingungen:		keine Diagnose-Service:	UDS Diagnose-Service:	UDS $22 DID $4210 Gültigkeit:			Ab F001-08-09-300 Kommentare:			Im JobHeaderFormat in der Diagnose-Datenbank angelegt

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | int | Beschreibung:		Das Argument zur Auswahl der Schlüssel-Position in der Transponder-Tabelle 0 - 9 Datenlänge: 		1 Byte Gültige Werte: 		0-9 = Transponder-Tabelle Einheit:			keine |

### STATUS_CAS_HW_GESCHWINDIGKEIT

Auslesen der vom CAS (über separate HW-Leitung vom DSC) erkannte Geschwindigkeit. JobHeaderFormat CAS_HW_GESCHWINDIGKEIT Diagnose-Service:	UDS $22 DID $DC51

_No arguments._

### STATUS_CAS_HW_VARIANTE

Hardware-Variante des CAS lesen. JobHeaderFormat CAS_HW_VARIANTE Diagnose-Service:	UDS $22 DID $DAB7

_No arguments._

### STATUS_ISTUFE

Liefert die im EEPROM abgelegte I-Stufe jeweils für Werk, HO und HO-Backup. JobHeaderFormat STATUS_ISTUFE Diagnose-Service:	UDS $22 DID $100B

_No arguments._

### STATUS_KILOMETERSTAND

Aufruf liefert den angezeigeten Gesamtwegstreckenzähler. Beim CAS den im EEPROM hinterlegten Wert. JobHeaderFormat STATUS_KILOMETERSTAND Diagnose-Service:	UDS $22 DID $1700

_No arguments._

### STEUERN_CAS_ANLIEFERZUSTAND

Versetzt das CAS in den Anlieferzustand (Montage-Modi, Codierung, VIN, Tansponder-Tabelle, EWS4_CLIENT_SK, ...) Falls Rücksetzen unzulässig: ERROR_ECU_CONDITIONS_NOT_CORRECT. Anmerkung: Nach dem Rücksetzen müssen alle im verriegelten Zustand geschützten W JobHeaderFormat STEUERN_CAS_ANLIEFERZUSTAND Diagnose-Service:	UDS $3101 DID $AC50($4003)

| Name | Type | Description |
| --- | --- | --- |
| EWS4_TRSP_SK | string | Falls SG verriegelt muss der geheime EWS4_TRSP_SK als Argument angegeben werden (optional). Der Job liefert immer Status 'OKAY' und dauert immer gleich lange (< 5 Sekunden). Der Erfolg des Rückstzens ist anschließend nur über die anderen Status-Jobs erkennbar. (Es müssen zuallererst die Secret-Keys gelöscht werden.) |

### STEUERN_CAS_FREQ_TYPE

Konfigurationd des CAS setzen. Die Konfiguration ist nach dem Verriegeln des EWS4_SK bzw. EWS4_TRSP_SK nicht mehr änderbar (ERROR_ECU_CONDITIONS_NOT_CORRECT). Werden unzulässige Daten übergeben, so erfolgt ein ERROR_DATA. JobHeaderFormat STEUERN_CAS_FREQ_TYPE Diagnose-Service:	UDS $2E DID $4202

| Name | Type | Description |
| --- | --- | --- |
| INIT_FREQ | unsigned char | Kennzahl Schlüssel-Frequenz (1 Byte) 0: Unbekannte oder keine Schlüssel-Frequenz 1 - n: Werte für Frequenzen: 6 -> 868MHz, 5 -> 433MHz, 4 -> 315MHz, 3 -> 315MHz LowPower (Japan/Korea). Dieser Wert ist nach dem Verriegeln des EWS4_TRSP_SK nicht mehr änderbar. |
| TRSP_TYPE | unsigned char | Optional: Art der verwendeten Transponder 1 = 'HT2' alt L2, 2 = 'HT3' neu L6 (default). |

### STEUERN_CAS_INIT_LOC_DATE

Konfigurationd des CAS setzen. Die Konfiguration ist nach dem Verriegeln des EWS4_SK bzw. EWS4_TRSP_SK nicht mehr änderbar (ERROR_ECU_CONDITIONS_NOT_CORRECT). Werden unzulässige Daten übergeben, so erfolgt ein ERROR_DATA. JobHeaderFormat STEUERN_CAS_INIT_LOC_DATE Diagnose-Service:	UDS $2E DID $4203

| Name | Type | Description |
| --- | --- | --- |
| INIT_DAY | unsigned int | Tag der CAS-/Schlüssel-Initialisierung 1 - 31 Dieser Wert ist nach dem Verriegeln des EWS4_TRSP_SK nicht mehr änderbar. |
| INIT_MONTH | unsigned int | Monat der CAS-/Schlüssel-Initialisierung 1 - 12 Dieser Wert ist nach dem Verriegeln des EWS4_TRSP_SK nicht mehr änderbar. |
| INIT_YEAR | unsigned int | Jahr der CAS-/Schlüssel-Initialisierung 2000 - 2999 Dieser Wert ist nach dem Verriegeln des EWS4_TRSP_SK nicht mehr änderbar. |
| INIT_LOCATION | string | Ort der Schlüssel-Initialisierung (4 Zeichen ASCII) 0240 = Werk 2.4, 0220 =Werk 2.2, 0100 =Werk München, ... Dieser Wert ist nach dem Verriegeln des EWS4_TRSP_SK nicht mehr änderbar. |
| INIT_STATION | string | BMW-Spezifisch (4 Zeichen ASCII, z.B. Anlagennummer, Kennung für Nacharbeit, ...). Dieser Wert ist nach dem Verriegeln des EWS4_TRSP_SK nicht mehr änderbar. |

### STEUERN_CAS_WUP

4-Byte FBD-Wakeup-Pattern schreiben. JobHeaderFormat STEUERN_CAS_WUP Diagnose-Service:	UDS $2E DID $4204

| Name | Type | Description |
| --- | --- | --- |
| FBD_WAKEUP | string | FBD-Wakeup-Pattern (4 Byte) Folgende Übergabe-Formate müssen unterstützt werden: "01 23 45 67" und "0x01,0x23,0x45,0x67" |

### STEUERN_EGS_ISN

EGS-ISN im CAS setzen (wird für Getriebe-EWS genutzt) JobHeaderFormat STEUERN_EGS_ISN Diagnose-Service:	UDS $2E DID $4300

| Name | Type | Description |
| --- | --- | --- |
| EGS_ISN | string | EGS-ISN (4 Byte) Folgende Übergabe-Formate müssen unterstützt werden: "01 23 45 67" und "0x01,0x23,0x45,0x67" |

### STEUERN_EWS4

Dieser Job dient zum Setzen der Secretkeys und zum anschließenden Verriegeln. JobHeaderFormat STEUERN_EWS4_CAS Diagnose-Service:	UDS $2E DID $C001

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | "WRITE_DMEDDE_SK" SecretKey des EWS4-Servers zur Anbindung einer EWS4-DME/DDE soll geschrieben werden. Argument ist der DMEDDE-SecretKey. "LOCK_DMEDDE_SK" EGS_ISN und EWS4_DMEDDE_SK soll verriegelt werden. Kein Argument. "WRITE_TRSP_SK" SecretKey des EWS4-Clients zur Anbindung der Transponder-Schlüssel soll geschrieben werden. Argument ist der TRSP-SecretKey. "LOCK_TRSP_SK" SecretKey des EWS4-Clients zur Anbindung der Transponder-Schlüssel soll verriegelt werden. Kein Argument. "LOCK_EWS4": SecretKeys der EWS4-Clients zur Anbindung der Transponder-Schlüssel und SecretKey des EWS4-Servers zur Anbindung einer EWS4-DME/DDE sollen beide verriegelt werden. Argument DATA enthält 0x00. "UNLOCK_DMEDDE_SK": NUR ENTWICKLUNG! Argument DATA muss EWS4_DMEDDE_SK enthalten, der bereits im CAS gespeichert ist! "UNLOCK_TRSP_SK": NUR ENTWICKLUNG! Argument DATA muss TRSP_SK  enthalten, der bereits im CAS gespeichert ist! |
| DATA | string | SecretKey, der geschrieben werden soll (16 Byte, Argument nur bei WRITE_xxx, kein Argument falls Mode LOCK_xxx) Folgende Formate müssen unterstützt werden: "01 23 45 67 89 AB CD EF 01 23 45 67 89 AB CD EF" und "0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF,0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF". (Implementierung analog CAS->STEUERN_SCHLUESSELDATEN: Argument IDENTIFIER) |

### STEUERN_FAHRGESTELLNUMMER

Schreiben der Fahrgestellnummer JobHeaderFormat STEUERN_FAHRGESTELLNUMMER Diagnose-Service:	UDS $2E DID $F190

| Name | Type | Description |
| --- | --- | --- |
| FGNR17 | string | 17-Stellige Fahrgestellnummer. Zum Zurücksetzen im Steuergerät wird das Argument '00000000000000000' verwendet. |

### STEUERN_SCHLUESSEL_INIT

Job zum Anstoßen der Schlüssel-Initialisierung. Nur zulässig, solange EWS4_TRSP_SK noch nicht verriegelt. JobHeaderFormat STEUERN_SCHLUESSEL_INIT Diagnose-Service:	UDS $3101 RID $AC52($4005)

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Schlüssel-Position in der Transponder-Tabelle 0 - 9, 100 THS1, 101 THS2. Folgende Sonderfunktionen sind noch möglich (ohne einen Anlernvorgang anzustossen): 255 stößt eine neue Schlüsselsuche über die Ringspule an. 254 verhindert nur das Einschlafen des CAS für die nächsten 10 Sekunden. |
| KEY_ID | string | ID des Schlüssels |
| KEY_TYPE | unsigned char | 0: Umlauf-Schlüssel 2: Geldbörsen-Schlüssel 3: Drivers-Key 4: Funk-Schlüssel 5: ID-Geber |
| INIT_MODE | unsigned char | Modus festlegen (optional). 1: Normal anlernen und Schlüssel verriegeln(default), 0: Schlüssel wird nicht verriegelt |

### STEUERN_SCHLUESSELDATEN

Schlüssel-Daten in CAS schreiben (z.B. für Ersatz-Steuergerät oder Nacharbeit). Nur zulässig solange EWS4_TRSP_SK nicht verriegelt. JobHeaderFormat STEUERN_SCHLUESSELDATEN Diagnose-Service:	UDS $2E DID $4210

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Schlüssel-Position in der Transponder-Tabelle 0 - 9, 100 THS1, 101 THS2, 200 RSE-Fernbedienung. |
| KEY_ID | string | ID des Schlüssels (Gleichzeitig wird KEY_INIT_DONE auf 1 gesetzt) 'FF FF FF FF' bei unbekannt. (Gleichzeitig wird KEY_INIT_DONE auf 0 gesetzt) Falls ID 'FF FF FF FF' und gleichzeitig KEY_TYPE nicht 15: ERROR_DATA |
| KEY_TYPE | unsigned char | 0: Umlauf-Schlüssel 2: Geldbörsen-Schlüssel 3: Drivers-Key 4: Funk-Schlüssel 5: ID-Geber 15: künftiger Ersatzschlüssel |
| KEY_DISABLED | unsigned char | 0: Schlüssel nicht gesperrt 1: Schlüssel gesperrt |

### STEUERN_PIA_NR

PIA-Nummer eines Schlüssels umdefinieren. JobHeaderFormat STEUERN_PIA_NR Diagnose-Service:	UDS $22 DID $DC5B

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Schlüssel-Position in der Transponder-Tabelle 0 - 9 |
| PIA_NR | unsigned char | 15 Keine personalisierung zugewiesen oder Schlüssel unbekannt 0 - 3: Schlüssel-Personalisierung in der Schlüssel-Tabelle Anmerkung: Die PIA-Nummer wird beim Anlernen automatisch vergeben, kann aber über Diagnose geändert werden. |

### STEUERN_SERVICE_SCHLUESSELDATEN_UPDATE

Dieser Job ermöglicht es einem folgende Aktionen anzustossen: Ermitteln der aktuellen Daten aus dem Fahrzeug, Übertragen der Daten in alle aktuell erkannten Schlüssel (inkrementell oder komplett). JobHeaderFormat STEUERN_SERVICE_SCHLUESSELDATEN_UPDATE Diagnose-Service:	UDS $3101 DID $4005

| Name | Type | Description |
| --- | --- | --- |
| UPDATE_MODUS | unsigned char | Legt den Update-Modus fest (welche Daten werden vom CAS aus dem Fahrzeug aktualisiert und wie werden sie übertragen). Folgende Modi sind möglich: 0->Vollständiges Update CAS-Speicher+Vollständiges Update Schlüssel, 1->Vollständiges Update CAS-Speicher+Inkrementelles Update Schlüssel, 2->Kein Update CAS-Speicher+Vollständiges Update Schlüssel, 3->Kein Update CAS-Speicher+Inkrementelles Update Schlüssel, 15->Vollständiges Update CAS-Speicher+Kein Update Schlüssel |

### STATUS_SERVICE_SCHLUESSELDATEN_LESEN

Dieser Job erlaubt es die Service-Schlüsseldaten blockweise aus dem CAS auszulesen. JobHeaderFormat STATUS_SERVICE_SCHLUESSELDATEN Diagnose-Service:	UDS $3101 DID $1006

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | unsigned int | Nummer des zu lesenden Service-Schlüsseldaten-Blocks. |

### _DIAGNOSE_MODE

UDS  : $10   DiagnosticSessionControl Mode einstellbar ueber das Argument

| Name | Type | Description |
| --- | --- | --- |
| SESSION | int | 0x01 = defaultSession 0x03 = extendedDiagnosticSession |

### _STATUS_IDENT_ISTUFE

Lesen Identifikation I-Stufe UDS  : $22   ReadDataByIdentifier $100B Modus: Default

_No arguments._

### _STATUS_KILOMETERSTAND

Lesen aktueller Kilometerstand UDS  : $22   ReadDataByIdentifier $1700 Modus: Default

_No arguments._

### _STATUS_ABS_TIME

Lesen aktuelle absolute Zeit UDS  : $22   ReadDataByIdentifier $1701 Modus: Default

_No arguments._

### _STATUS_DARH_DTC

Lesen Anzahl der abgelegten Fehler UDS  : $22   ReadDataByIdentifier $1704 Modus: Default

_No arguments._

### _STATUS_SC_VERSION

Lesen Standard Core Version UDS  : $22   ReadDataByIdentifier $1720 Modus: Default

_No arguments._

### _STATUS_SC_PACKAGE_ID

Lesen Standard Core Package Id UDS  : $22   ReadDataByIdentifier $1726 Modus: Default

_No arguments._

### _STATUS_MEM_SEG_TABLE

Lesen Memory segmentation table UDS  : $22   ReadDataByIdentifier $2501 Modus: Default

_No arguments._

### _STATUS_PROG_COUNTER

Lesen Programming counter Status UDS  : $22   ReadDataByIdentifier $2502 Modus: Default

_No arguments._

### _STATUS_PROG_COUNTER_MAX

Lesen Maximalwert des Programming Counters UDS  : $22   ReadDataByIdentifier $2503 Modus: Default

_No arguments._

### _STATUS_FLASH_TIM_PARA

Lesen Flash Timing Parameter UDS  : $22   ReadDataByIdentifier $2504 Modus: Default

_No arguments._

### _STATUS_MAX_BLOCK_LENGTH

Lesen maximale Blocklaenge UDS  : $22   ReadDataByIdentifier $2505 Modus: Default

_No arguments._

### _STATUS_FAHRZEUGAUFTRAG_TEIL_1

aktuelle 160 Byte Fahrzeugauftrag Teil1 UDS  : $22   ReadDataByIdentifier $3F1C Modus: Default

_No arguments._

### _STATUS_FAHRZEUGAUFTRAG_TEIL_2

aktuelle 160 Byte Fahrzeugauftrag Teil2 UDS  : $22   ReadDataByIdentifier $3F1C Modus: Default

_No arguments._

### _STATUS_CAS_VAR_KONFIG

aktueller Status "CAS, Varianten Konfiguration" UDS  : $22   ReadDataByIdentifier $4000 Modus: Default

_No arguments._

### _STATUS_TRSP_MECH_CODE

aktueller Status "Transponder MechCode" UDS  : $22   ReadDataByIdentifier $4201 Modus: Default

_No arguments._

### _STATUS_TRSP_FAHRZYKLUS

aktueller Status "Transponder Programmierdaten" UDS  : $22   ReadDataByIdentifier $4205 Modus: Default

_No arguments._

### _STATUS_FBD_EMPFANGSDATEN

aktuelle 18 Byte des FBD Empfangs UDS  : $22   ReadDataByIdentifier $4600 Modus: Default

_No arguments._

### _STATUS_ACT_DIAG_SESSION

Lesen active diagnose session UDS  : $22   ReadDataByIdentifier $F186 Modus: Default

_No arguments._

### _STATUS_SUPPLIER_NUMBER

Lesen ECU serial number UDS  : $22   ReadDataByIdentifier $F18A Modus: Default

_No arguments._

### _STATUS_ECU_MANUFACTURING_DATA

Lesen ECU serial number UDS  : $22   ReadDataByIdentifier $F18B Modus: Default

_No arguments._

### _STATUS_ECU_SERIAL_NUMBER

Lesen ECU serial number UDS  : $22   ReadDataByIdentifier $F18C Modus: Default

_No arguments._

### _STATUS_CAS4_AUSLIEFERUNGSSTAND

CAS4 Auslieferungsstand UDS  : $22   ReadDataByIdentifier $F300 Modus: Default Fuer CT Qualitaetssicherung benoetigt hierueber erfolgt die Identifikation des SW Stand der ECU

_No arguments._

### _STATUS_COMPILATION_DATE_TIME

aktuelle 21 Byte Ascii UDS  : $22   ReadDataByIdentifier $F317 Modus: Default Datum ist in ASCII hinterlegt, das Format ist von der Systemdatum und -zeit Variablen eines Windows PC abhaengig

_No arguments._

### _STATUS_ANT_LINKS_AUSSEN_HANDLE

aktueller Status "Antenne Links aussen Handle" UDS  : $22   ReadDataByIdentifier $F320 Modus: Default

_No arguments._

### _STATUS_ANT_RECHTS_AUSSEN_HANDLE

aktueller Status "Antenne Rechts aussen Handle" UDS  : $22   ReadDataByIdentifier $F321 Modus: Default

_No arguments._

### _STATUS_ANT_KOFFERR_AUSSEN_HANDLE

aktueller Status "Antenne Kofferraum aussen Handle" UDS  : $22   ReadDataByIdentifier $F322 Modus: Default

_No arguments._

### _STATUS_ANT_VORNE_INNEN_HANDLE

aktueller Status "Antenne vorne innen Handle" UDS  : $22   ReadDataByIdentifier $F323 Modus: Default

_No arguments._

### _STATUS_ANT_MITTE_INNEN_HANDLE

aktueller Status "Antenne vorne innen Handle" UDS  : $22   ReadDataByIdentifier $F324 Modus: Default

_No arguments._

### _STATUS_ANT_HUTABLAGE_HANDLE

aktueller Status "Antenne Hutablage Handle" UDS  : $22   ReadDataByIdentifier $F325 Modus: Default

_No arguments._

### _STATUS_ANT_KOFFERR_INNEN_LINKS_HANDLE

aktueller Status "Antenne Kofferraum innen links Handle" UDS  : $22   ReadDataByIdentifier $F326 Modus: Default

_No arguments._

### _STATUS_ANT_KOFFERR_INNEN_RECHTS_HANDLE

aktueller Status "Antenne Kofferraum innen rechts Handle" UDS  : $22   ReadDataByIdentifier $F327 Modus: Default

_No arguments._

### _STATUS_COMFORT_GO_ANT_KONFIG

aktueller Status "Comfort Go Antennen Konfiguration" UDS  : $22   ReadDataByIdentifier $F330 Modus: Default 

_No arguments._

### _STATUS_TAGE_ID

aktueller Status "Status TAGE Identifier" UDS  : $22   ReadDataByIdentifier $F331 Modus: Default BMW Teilenummer (6Byte String) fuer jede Tuer

_No arguments._

### _STATUS_ANTENNEN

aktueller Status "Status Antennen" UDS  : $22   ReadDataByIdentifier $F340 Modus: Default Liefert die Stati der bis zu 8 Antennen und einen globalen Status

_No arguments._

### _STATUS_TAGE

aktueller Status "Status Tueraussengriffelektronik" UDS  : $22   ReadDataByIdentifier $F341 Modus: Default

_No arguments._

### _STATUS_CA_TELEGRAMM

aktueller Status "Status CA Telegramm" UDS  : $22   ReadDataByIdentifier $F342 Modus: Default

_No arguments._

### _STATUS_ANT_STROEME

aktueller Status "Status Antennenstroeme" UDS  : $22   ReadDataByIdentifier $F343 Modus: Default Bei der zuletzt ausgefuehrten CA Aktion gemessener Antennenstrom fuer alle Antennen

_No arguments._

### _STATUS_SCHLUESSEL_INFO

aktueller Status "Status Schluesselinfo" UDS  : $22   ReadDataByIdentifier $F344 Modus: Default

_No arguments._

### _STATUS_CA_HANDLER

aktueller Status "Status CA Handler" UDS  : $22   ReadDataByIdentifier $F345 Modus: Default Interner CAH-Statusspeicher, nur zu Entwicklungszwecken

_No arguments._

### _STATUS_RES_FREQ

aktueller Status "Status Resonanz Frequenz" UDS  : $22   ReadDataByIdentifier $F346 Modus: Default Lesen der geschaetzten Resonanzfrequenzen

_No arguments._

### _STATUS_ANT_GUETE

aktueller Status "Status Guete Antenne" UDS  : $22   ReadDataByIdentifier $F347 Modus: Default Lesen der geschaetzten Gueten

_No arguments._

### _STATUS_LF_TREIBER

aktueller Status "Status LF Treiber" UDS  : $22   ReadDataByIdentifier $F348 Modus: Default Verhalten des LF-Treibers und des CAH

_No arguments._

### _STATUS_U_KL15N30B

aktueller Status analoge Spannungswerte Funktionsgruppe 15N30B UDS  : $22   ReadDataByIdentifier $F3A0 Modus: Default

_No arguments._

### _STATUS_U_KL15_KL50

aktueller Status analoge Spannungswerte Funktionsgruppe KL15 UDS  : $22   ReadDataByIdentifier $F3A1 Modus: Default

_No arguments._

### _STATUS_U_POWERSUPPLY

aktueller Status analoge Spannungswerte Funktionsgruppe Powersupply UDS  : $22   ReadDataByIdentifier $F3A2 Modus: Default

_No arguments._

### _STATUS_U_ELV

aktueller Status analoge Spannungswerte ELV Funktionsgruppe Powersupply UDS  : $22   ReadDataByIdentifier $F3A3 Modus: Default

_No arguments._

### _STATUS_U_HALL_TAGE

aktueller Status analoge Spannungswerte Hallsensoren und Tueraussengriffe Funktionsgruppe Powersupply UDS  : $22   ReadDataByIdentifier $F3A4 Modus: Default

_No arguments._

### _STATUS_DIG_INPUT_START_STOP

aktueller Status digitale Eingaenge Funktionsgruppen 15N30B und 15WUP UDS  : $22   ReadDataByIdentifier $F3A5 Modus: Default

_No arguments._

### _STATUS_DIG_INPUT_HALL

aktueller Status digitale Eingaenge Funktionsgruppen HALL UDS  : $22   ReadDataByIdentifier $F3A6 Modus: Default

_No arguments._

### _STATUS_DIG_INPUT_SCHALTER

aktueller Status digitale Eingaenge Funktionsgruppen Schalter UDS  : $22   ReadDataByIdentifier $F3A8 Modus: Default

_No arguments._

### _STATUS_DIG_INPUT_BREMSE_KUPPL

aktueller Status digitale Eingaenge Funktionsgruppen Bremse und Kupplung UDS  : $22   ReadDataByIdentifier $F3A9 Modus: Default

_No arguments._

### _STATUS_DIG_INPUT_KLEMMEN

aktueller Status digitale Eingaenge Funktionsgruppen 15N30B und 15WUP UDS  : $22   ReadDataByIdentifier $F3AB Modus: Default

_No arguments._

### _SA_REQUEST_SEED

Anfordern des SEED Codes von der ECU Es muessen immer alle 5 Argumente im angegebenen Wertebereich uebergeben werden. UDS  : $27   SecurityAccess SID $01   Sub Identifier "Request Seed" User-ID Byte[0] User-ID Byte[1] User-ID Byte[2] User-ID Byte[3] Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SUB_ID_RS | int | Bereich: 1-1 bzw. 0x01-0x01 |
| USER_ID0 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| USER_ID1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| USER_ID2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| USER_ID3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### _SA_SEND_KEY

Senden des Key Wertes an die ECU Es muessen immer alle Argumente im jeweils gueltigen Wertebereich uebergeben werden. UDS  : $27   SecurityAccess SID $02   Sub Identifier "Request Seed" $03   FixCode[68 Byte Array] Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| KEYVALUE | binary | Sub-ID "Send Key" und aus Seedwert berechneter Key 1Byte (Default 0x02) + 68 Bytes, Defaultwert 0x03 |

### _STEUERN_IDENT_ISTUFE

Beschreiben der I-Stufe Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $100B Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 23 |

### _STEUERN_FAHRZEUGAUFTRAG_TEIL_1

Beschreiben der Fahrzeugauftrag Teil1 Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $3F1C Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,2A,..,33,44" ======> Byte 0 - 159 |

### _STEUERN_FAHRZEUGAUFTRAG_TEIL_2

Beschreiben der Fahrzeugauftrag Teil2 Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $3F1D Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,2A,..,33,44" ======> Byte 0 - 159 |

### _STEUERN_CAS_VAR_KONFIG

Beschreiben der CAS Varianten Konfiguration Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $4000 CAS_VAR_KONFIG Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11, .. ,AA" ======> Byte 0 - 7 |

### _STEUERN_TRSP_MECH_CODE

Beschreiben des Transponder MechCode Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $4201 Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "00,11,..,AA" ======> Byte 0 - 4 |

### _STEUERN_TRSP_FAHRZYKLUS

Beschreiben des Transponder Fahrzykluszaehler Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $4205 Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZYKLUS | string | "FAHRZYKLUS": z.B. "00,00,11,00" ======> Byte 0 - 3 |

### _STEUERN_EWS4_SECKEY

Schreiben des EWS4 Secret Key 17 Byte Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $C001 Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 16 |

### _STEUERN_SVK_SUPPLIER

Schreiben der BMW Logistik Daten Zulieferer Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F102 Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,2A, .. ,AA"  Achtung, variable Datenlaenge ! Im Byte 3 wird die Anzahl der vorhandenen HW und SW Einheiten festgelegt Die danach eingegebenen Daten muessen exakt dieser Angabe entsprechen Byte 0 SVK Version Byte 1 Programming Dependencies Status Byte 2 Number of SVK Entries MSB Byte 3 Number of SVK Entries LSB  Byte  4-16 13 Byte Fingerprint Byte 17-24  8 Byte Daten HWE 0 Byte 25-32  8 Byte Daten SWE 0 Byte 33-40  8 Byte Daten SWE 1 (falls vorhanden) Byte 41-48  8 Byte Daten SWE 2 (falls vorhanden) Byte 49-56  8 Byte Daten SWE 3 (falls vorhanden) Byte 57-64  8 Byte Daten SWE 4 (falls vorhanden) Byte 65-72  8 Byte Daten SWE 5 (falls vorhanden) |

### _STEUERN_SVK_WERK

Schreiben der BMW Logistik Daten Werk Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F103 Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,2A, .. ,AA"  Achtung, variable Datenlaenge ! Im Byte 3 wird die Anzahl der vorhandenen HW und SW Einheiten festgelegt Die danach eingegebenen Daten muessen exakt dieser Angabe entsprechen Byte 0 SVK Version Byte 1 Programming Dependencies Status Byte 2 Number of SVK Entries MSB Byte 3 Number of SVK Entries LSB  Byte  4-16 13 Byte Fingerprint Byte 17-24  8 Byte Daten HWE 0 Byte 25-32  8 Byte Daten SWE 0 Byte 33-40  8 Byte Daten SWE 1 (falls vorhanden) Byte 41-48  8 Byte Daten SWE 2 (falls vorhanden) Byte 49-56  8 Byte Daten SWE 3 (falls vorhanden) Byte 57-64  8 Byte Daten SWE 4 (falls vorhanden) Byte 65-72  8 Byte Daten SWE 5 (falls vorhanden) |

### _STEUERN_ANT_LINKS_AUSSEN_HANDLE

Beschreiben des Antenne links Handle Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F320 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 32 |

### _STEUERN_ANT_RECHTS_AUSSEN_HANDLE

Beschreiben des Antenne rechts aussen Handle Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F321 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 32 |

### _STEUERN_ANT_KOFFERR_AUSSEN_HANDLE

Beschreiben des Antenne Kofferraum aussen Handle Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F322 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 32 |

### _STEUERN_ANT_VORNE_INNEN_HANDLE

Beschreiben des Antenne vorne innen Handle Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F323 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 32 |

### _STEUERN_ANT_MITTE_INNEN_HANDLE

Beschreiben des Antenne mitte innen Handle Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F324 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 32 |

### _STEUERN_ANT_HUTABLAGE_HANDLE

Beschreiben des Antenne Hutablage Handle Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F325 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 32 |

### _STEUERN_ANT_KOFFERR_INNEN_LINKS_HANDLE

Beschreiben des Antenne Kofferraum innen links Handle Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F326 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 32 |

### _STEUERN_ANT_KOFFERR_INNEN_RECHTS_HANDLE

Beschreiben des Antenne Kofferraum innen rechts Handle Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F327 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22, .. ,AA" ======> Byte 0 - 32 |

### _STEUERN_COMFORT_GO_ANT_KONFIG

Beschreiben der Comfort go Antennen Konfig Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F330 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22,33" ======> Byte 0 - 2 |

### _STEUERN_TAGE_ID

Beschreiben der Tueraussengriffelektronik Id Eingabe der Daten als Hexwert von 00..FF UDS  : $2E   WriteDataByIdentifier $F331 Data Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | "Daten": z.B. "11,22..FF" ======> Byte 0 - 23 |

### _STEUERN_TREIBERSTUFE_KL15_30

Ansteuerung der Klemme 15/30 Ausgangspins UDS  : $2F     I/O Control By Local Id $0201   Data Id

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_OPTION | int | 0 return Control to ECU 1 Reset 3 Set |
| DATEN | string | "Control States": z.B. "11,22" ======> Byte 0 - 1 ACHTUNG nur bei Control Option 3 (Set) eingeben! Byte0 Pinmaske (siehe Diagnosebeschreibung) Byte1 Zustandsmaske (siehe Diagnosebeschreibung) |

### _STEUERN_TREIBERSTUFE_KL15_50

Ansteuerung der Klemme 15/50 Ausgangspins UDS  : $2F     I/O Control By Local Id $0202   Data Id

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_OPTION | int | 0 return Control to ECU 1 Reset 3 Set |
| DATEN | string | "Control States": z.B. "11,22" ======> Byte 0 - 1 ACHTUNG nur bei Control Option 3 (Set) eingeben! Byte0 Pinmaske (siehe Diagnosebeschreibung) Byte1 Zustandsmaske (siehe Diagnosebeschreibung) |

### _STEUERN_BIMAG

Ansteuerung der BiMAG UDS  : $2F     I/O Control By Local Id $0203   Data Id

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_OPTION | int | 0 return Control to ECU 1 Reset 3 Set |
| DATEN | string | "Control States": z.B. "11,22" ======> Byte 0 - 1 ACHTUNG nur bei Control Option 3 (Set) eingeben! Byte0 Pinmaske (siehe Diagnosebeschreibung) Byte1 Zustandsmaske (siehe Diagnosebeschreibung) |

### _STEUERN_ELV

Ansteuerung ELV UDS  : $2F     I/O Control By Local Id $0204   Data Id

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_OPTION | int | 0 return Control to ECU 1 Reset 3 Set |
| DATEN | string | "Control States": z.B. "11,22" ======> Byte 0 - 1 ACHTUNG nur bei Control Option 3 (Set) eingeben! Byte0 Pinmaske (siehe Diagnosebeschreibung) Byte1 Zustandsmaske (siehe Diagnosebeschreibung) |

### _STEUERN_HALL

Ansteuerung HALL Sensoren UDS  : $2F     I/O Control By Local Id $0205   Data Id

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_OPTION | int | 0 return Control to ECU 1 Reset 3 Set |
| DATEN | string | "Control States": z.B. "11,22" ======> Byte 0 - 1 ACHTUNG nur bei Control Option 3 (Set) eingeben! Byte0 Pinmaske (siehe Diagnosebeschreibung) Byte1 Zustandsmaske (siehe Diagnosebeschreibung) |

### _STEUERN_LED_LF

Ansteuerung LED und LF UDS  : $2F     I/O Control By Local Id $0206   Data Id

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_OPTION | int | 0 return Control to ECU 1 Reset 3 Set |
| DATEN | string | "Control States": z.B. "11,22" ======> Byte 0 - 1 ACHTUNG nur bei Control Option 3 (Set) eingeben! Byte0 Pinmaske (siehe Diagnosebeschreibung) Byte1 Zustandsmaske (siehe Diagnosebeschreibung) |

### _STEUERN_ANT_STATUS_RESET

Antennenstatus ruecksetzen UDS  : $31       Routine Control $xxF801   Routine Id $F801 Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SERVICE_REQ | int | 1 Start routine 2 Stop routine 3 Request routine results |

### _STEUERN_SCHLUESSEL_SUCHE

Schluesselsuche, CA Handler versendet LF Telegramm UDS  : $31       Routine Control $xxF802   Routine Id $F802 Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SERVICE_REQ | int | 1 Start routine 2 Stop routine 3 Request routine results |
| ID_GEBER_NR | int | 0-7, die zu bevorzugende Schluesselnummer |
| GESPERRTE_SCHL_BYTE0 | int | Keine Schluesselsuche fuer ..., bitcodiert Bit0: Schluessel 8, Bit1: Schluessel 9 ... |
| GESPERRTE_SCHL_BYTE1 | int | Keine Schluesselsuche fuer ..., bitcodiert Bit0: Schluessel 0, Bit1: Schluessel 1 ... |
| SUCH_MODUS | int | 0-19, Suchmodus lt. Diagnosebeschreibung |

### _STEUERN_LF_HW_TEST

LF Hardware Selbsttest UDS  : $31       Routine Control $xxF803   Routine Id $F803 Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SERVICE_REQ | int | 1 Start routine |

### _STEUERN_LF_TEST_TELEGRAMM

Versendet LF Telegramm mit der im Parameter angegebenen Anzahl Bytes UDS  : $31       Routine Control $xxF804   Routine Id $F804 Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SERVICE_REQ | int | 1 Start routine |
| ANZ_BYTES | int | Testdatenanzahl |

### _STEUERN_RESET_DET

Ruecksetzen der Eintraege im Debugmodul "Development Error Tracer (DET)" UDS  : $31       Routine Control $xxF806   Routine Id $F806 Modus: Default

_No arguments._

### _DEVELOPMENT_JOB

Frei programmierbare Diagnosebotschaft, die ohne Vorfilterung auf dem CAN gesendet wird. Wird benoetigt fuer Diagnose Tests. Auch > 64 Byte Daten Adressierung unterstuetzt. Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DEVJOB_DATALEN | int | Anzahl der Nutzdaten |
| DEVJOB_DATA | binary | Frei programmierbarer Datenarray Alle fuer den Service benoetigten Bytes muessen programmiert werden |

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
| 0xFFFFFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler gespeichert |
| 0x44 | Fehler momentan vorhanden und bereits gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler momentan vorhanden und bereits gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler momentan vorhanden und bereits gespeichert |
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
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
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
| 0x40 | ECUEOL | ECUEndOfLineSession |
| 0x41 | ECUCODE | ECUCodingSession |
| 0x42 | ECUSWT | ECUSwtSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0xXY | -- | unbekannter Diagnose-Mode |

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor | - |
| 0x0200 | Elektrische Wasserpumpe | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
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
| 0x0F00 | Rearview Kamera hinten | - |
| 0x1000 | Topview Kamera Außenspiegel links | - |
| 0x1100 | Topview Kamera Außenspiegel rechts | - |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | - |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | - |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A00 | Schalterblock Sitzheizung hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2200 | Funkempfänger | 1 |
| 0x2300 | Funkempfänger 2 | 1 |
| 0x2400 | Türgriffelektronik Fahrer | - |
| 0x2500 | Türgriffelektronik Beifahrer | - |
| 0x2600 | Türgriffelektronik Fahrer hinten | - |
| 0x2700 | Türgriffelektronik Beifahrer hinten | - |
| 0x2800 | Telestart-Handsender 1 | - |
| 0x2900 | Telestart-Handsender 2 | - |
| 0x2A00 | RSE-Fernbedienung | - |
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
| 0x0003 | DaimlerChrysler |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis |
| 0x0014 | Microchip |
| 0x0015 | CRF |
| 0x0016 | Renesas Technology Europe GmbH |
| 0x0017 | Atmel |
| 0x0018 | Magnet Marelli |
| 0x0019 | NEC |
| 0x001A | Fujitsu |
| 0x001B | Opel |
| 0x001C | Infineon |
| 0x001D | AMI Semiconductor |
| 0x001E | Vector Informatik |
| 0x001F | Brose |
| 0x0020 | ZMD |
| 0x0021 | ihr |
| 0x0022 | Visteon |
| 0x0023 | ELMOS |
| 0x0024 | ON Semi |
| 0x0025 | Denso |
| 0x0026 | c&s |
| 0x0027 | Renault |
| 0x0028 | Renesas Technology Europe Limited |
| 0x0029 | Yazaki |
| 0x002A | Trinamic Microchips |
| 0x002B | Allegro Microsystems |
| 0x002C | Toyota |
| 0x002D | PSA Peugeot Citroën |
| 0x002E | Westsächsische Hochschule Zwickau |
| 0x002F | Micron AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt Ingenierbüro GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA Hueck & Co. |
| 0x0037 | Continental Temic microelectronic GmbH |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electric Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0xFFFF | unbekannter Hersteller |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler gespeichert |
| 0x44 | Fehler momentan vorhanden und bereits gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler momentan vorhanden und bereits gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler momentan vorhanden und bereits gespeichert |
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

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x002711 | Coding Event: not coded | 0 |
| 0x002712 | Coding Event: transaction failed | 0 |
| 0x002713 | Coding Event: signature error | 0 |
| 0x002714 | Coding Event: wrong vehicle | 0 |
| 0x002715 | Coding Event: invalid data | 0 |
| 0x024000 | Energiesparmode aktiv | 0 |
| 0x02FF40 | DM test appl | 0 |
| 0x240000 | VSM Event Opmode | 0 |
| 0x400401 | DM queue full | 0 |
| 0x400402 | DM queue deleted | 0 |
| 0x4003A0 | Ausfall CAN-ID 3A0 | 0 |
| 0x401001 | DM Event Zeitbotschaft Timeout | 0 |
| 0x402847 | PIA E Io Error | 0 |
| 0xD9045F | Body-CAN Bus | 0 |
| 0xD90468 | Body-CAN Control Module Bus OFF | 0 |
| 0xD90BFF | DM_TEST_COM Standardcore Diagnosemodul Testfehlerspeichereintrag | 0 |
| 0x93080C | Unterspannung | 0 |
| 0x93080D | Überspannung KL30L/KL30E | 0 |
| 0x930820 | CAS4-Versorgung KL30L / KL30E: Unterspannung | 0 |
| 0x930821 | Bremssignale BLSH: Kurzschluss Masse | 0 |
| 0x930822 | P-Signal PN_KUPPL: Kurzschluss Masse | 0 |
| 0x930823 | Kupplungssignal PN_KUPPL | 0 |
| 0x930824 | Bedientaster MSA | 0 |
| 0x930825 | Komfortstartleitung A_S_START: Kurzschluss Masse | 0 |
| 0x930826 | Fehler Motorstart bei Anlasserbetrieb: Kurzschluss Masse | 0 |
| 0x930827 | Geschwindigkeitssignal DFA_EMF | 0 |
| 0x930828 | Hallsensor SSTA | 0 |
| 0x930829 | Hallsensor SSTB | 0 |
| 0x93082A | Treiber 15WUP | 0 |
| 0x93082B | KL15WUP_RS | 0 |
| 0x93082C | Treiber KL30B1: Kurzschluss Masse | 0 |
| 0x93082D | Treiber KL30B2 | 0 |
| 0x93082E | Treiber KL30B3 | 0 |
| 0x93082F | Treiber KL15-1: Kurzschluss Masse | 0 |
| 0x930830 | Treiber KL15-2 | 0 |
| 0x930831 | Treiber KL15-3 | 0 |
| 0x930832 | Treiber KL15N: Kurzschluss Masse | 0 |
| 0x930833 | Treiber KL50L | 0 |
| 0x930834 | Treiber KL5MSA / KL50L_RS | 0 |
| 0x930835 | Treiber LED_SST | 0 |
| 0x930836 | Treiber LED_MSA | 0 |
| 0x930837 | Treiber VCC_HALL1 | 0 |
| 0x930838 | Treiber VC_HALL2 | 0 |
| 0x930839 | Fehler Freigabe CoProzessor | 0 |
| 0x93083A | Ungleiche CRC-Summe CoProzessor | 0 |
| 0x930841 | Bremssignale BLSH: Kurzschluss Batteriespannung | 0 |
| 0x930842 | Bremssgnale BLSL: Kurzschluss Batteriespannung | 0 |
| 0x930843 | Bremssignale BLSL: Kurzschluss Masse | 0 |
| 0x930846 | P-Signal PN_KUPPL: Kurzschluss Batteriespannung | 0 |
| 0x93084A | Komfortstartleitung A_S_START: Kurzschluss Masse | 0 |
| 0x930851 | Fehler Motorstart bei Anlasserbetrieb: Relaiskleber | 0 |
| 0x930852 | Fehler Motorstart bei Anlasserbetrieb: Motor dreht nicht | 0 |
| 0x930856 | Treiber KL30B1: Kurzschluss Batteriespannung | 0 |
| 0x930861 | Treiber KL15-1: Kurzschluss Batteriespannung | 0 |
| 0x930871 | Treiber KL15N: Kurzschluss Batteriespannung | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x40FF | Fehlerart | HEX | - | unsigned char | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x402001 | NVM E write failed | 0 |
| 0x402002 | NVM E read failed | 0 |
| 0x402003 | NVM E control failed | 0 |
| 0x402004 | NVM E erase failed | 0 |
| 0x402006 | NVM E write all failed | 0 |
| 0x402007 | NVM E read all failed | 0 |
| 0x402010 | NVM E wrong config id | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_SST | 0xDAB6 | STAT_TASTER_SST_AKTIV | Das Result enthält den aktuellen Zustand des Start-Stopp-Tasters | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| HO_INFO | 0xDC54 | - | Job zum Schreiben/Lesen der HändlerInformationen für die Handelsorganisation. Wird vom Werk mit Händlernummer 0 und dem Datum der Schlüssel-Initialisierung gesetzt. Diese Informationen sind Teil der CBS-Daten und werden auch in den Schlüssel übertragen. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDC54 | RES_0xDC54 |
| BUS_IN_ZV | 0xDAC1 | - | Vom Bus empfangener Status aller ZV-Antriebe. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAC1 |
| CAS_MONTAGEMODUS | 0xDAB9 | - | Statusabfrage des Montagemodus für ELV-Sperre und KL50-Sperre.  Im Anlieferzustand sind immer Alle Sperren Aktiv.  Die ELV-Sperre wird mit gültigem Geschwindigkeitssignal automatisch deaktiviert. Die KL50-Sperre muss explizit per Diagnose aufgehoben werden. Ist die ELV-Sperre aktiv, so ist auch zwingend die KL50-Sperre aktiv. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDAB9 | RES_0xDAB9 |
| TASTER_SICHERN_HECKKL | 0xDC68 | - | Taster Sichern an der HKL, Eingang am CAS. | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC68 | RES_0xDC68 |
| SCHALTER_KUPPL_PN | 0xDC63 | - | Kupplungsschalter oder PN-Signal vom EGS, 1 Taster gerückt, 0 Taster nicht gedrückt, 255 Signal ungültig / unplausibel | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC63 | RES_0xDC63 |
| SCHALTER_MOTORHAUBE | 0xDC65 | - | Motorhauben-Kontakt am CAS. | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC65 | RES_0xDC65 |
| A_S_START_LEITUNG | 0xDC62 | - | Eingang Start-Ende-Leitung von DME/DDE an CAS. 1 Spannung liegt an, 0 Spannung liegt nicht an, 2 nicht vorhanden, 255 ungültig/Fehler. | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC62 | RES_0xDC62 |
| BUS_IN_DME1 | 0xDABC | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal von DME1. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABC |
| STEUERN_KL15_ABSCHALTUNG | 0xAC51 | - | Setzen der Geschwindigkeit, bei der die Funktion KL15-Abschaltung wieder aktiviert (default) werden soll: 0 -> KL15-Abschaltung wieder aktivieren xx -> KL15-Abschaltung unterdrücken bis nächstes Mal über xx Kmh (xx = min. 1 Km/h bis max 50 Km/h) Mit Argument = 0 soll die KL-15-Abschaltung sofort wieder aktiviert werden können. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC51 | - |
| SPANNUNG_KLEMME_30E_WERT | 0xDADA | STAT_SPANNUNG_KLEMME_30E_WERT | Job zum Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| CA_TAGE_ER_LEITUNG | 0xDAB5 | - | CAS: Job zum Auslesen der analogen Spannungswerte der Entriegeln-Leitung zur TAGE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB5 |
| TASTER_MSA | 0xDC67 | - | MSA-Taster am CAS. | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC67 | RES_0xDC67 |
| BUS_IN_DATUM_ZEIT | 0xDABB | - | CAS: Aktuelles vom Kombi empfangenes Datum/Zeit | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABB |
| STATUS_KLEMMEN | 0xDC56 | STAT_KLEMMENSTATUS | Vom CAS aktuell gesendeter Klemmenstatus. In I-300 Job-Header, Später STATUS_LESEN. | 0-n | - | - | unsigned char | TAB_CAS_KLEMMENSTATUS | - | - | - | - | 22 | - | - |
| NACHLAUFZEIT_KLEMME_15N | 0xDB2D | STAT_NACHLAUFZEIT_KLEMME_15N_WERT | Nachlaufzeit der Klemme 15N über BUS-Nachrich in Sekunden: Interpretation siehe BN-DB | s | - | - | int | - | - | - | - | - | 22 | - | - |
| TASTER_CENTERLOCK | 0xDC64 | - | Taster Centerlock (ZV-Taster), 1 Taster gedrückt, 0 Taster nicht gedrückt, 255 Signal ungültig / unplausibel | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC64 | RES_0xDC64 |
| PIA_NR_AKTUELL | 0x0F27 | STAT_PIA_NR_AKTUELL | Aktuell vom CAS gesendete FBD-Personalisierungs-Nummer | 0-n | - | - | unsigned char | TAB_CAS_PIA_NUMMER | - | - | - | - | 22 | - | - |
| CAS_HW_GESCHWINDIGKEIT | 0xDC51 | STAT_HW_SPEED_STATUS | Auslesen der vom CAS (über separate HW-Leitung vom DSC) erkannte Geschwindigkeit. In I-300 Job-Header, Später STATUS_LESEN. | 0-n | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| HALL_START_STOP_TASTER | 0xDC60 | - | Hallsensor A und B des Start-Stop-Tasters am CAS. | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC60 | RES_0xDC60 |
| BUS_IN_FH | 0xDABF | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Status Fensterheber (je Tür FT,BFT,FTH,BFTH). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABF |
| BUS_IN_DSC | 0xDABD | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal vom DSC. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABD |
| KEY_VALID_NR_AKTUELL | 0xDAB4 | STAT_KEY_VAILD_NR_AKTUELL | Nummer des aktuell gültigen Schlüssels. | 0-n | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| NACHLAUFZEIT_KLEMME_30B | 0xDB2E | STAT_NACHLAUFZEIT_KLEMME_30B_WERT | Nachlaufzeit der Klemme 30B über BUS-Nachrich in Sekunden: Interpretation siehe BN-DB | s | - | - | int | - | - | - | - | - | 22 | - | - |
| CA_TAGE_STATUS | 0xDACA | - | Lesen der TAGE Sensorstati für jede Tür BFT, BFTH, FT, FTH. Das CAS gibt den zuletzt von der TAGE empfangenen Status für 5 Sekunden aus. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDACA |
| SPANNUNG_KLEMME_30L_WERT | 0xDADD | STAT_SPANNUNG_KLEMME_30L_WERT | Job zum Auslesen der Klemmensteuerung am Steuergerät. | Volt | - | - | int | - | - | 10 | - | - | 22 | - | - |
| SPANNUNG_HALL_VERS | 0xDAB0 | - | Spannung Hall-Sensor-Versorgung (Peak) Sensoren 1 und 3, 2 und 4 In I-300 Job-Header, Später STATUS_LESEN | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB0 |
| TASTER_HECKKL_INNEN | 0xDC69 | - | Heckklappentaster innen, Eingang am CAS. 1 Taster gerückt, 0 Taster nicht gedrückt, 2 Fahrzeug besitzt keinen Taster, 255 Signal ungültig / unplausibel | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC69 | RES_0xDC69 |
| SCHALTER_BREMSLICHT | 0xDC61 | - | Status Bremslichtschalter High- und Low-schaltend am CAS. | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC61 | RES_0xDC61 |
| STEUERN_ZV_MASTER | 0xAC57 | - | Dieser Job dient dazu per Diagnose die Zentralverriegelung anzusteuern. Hinweis: Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument STEUERN_ZV_MASTER. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC57 | RES_0xAC57 |
| SPANNUNG_KLEMMEN | 0xDAB3 | - | CAS: Job zum Auslesen Analoger Klemmen-Spannungs- und Stromwerte am Steuergerät. Für I-300 über Job-Header, Später über einzel-IDs pro Wert. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB3 |
| SCHALTER_HOTEL | 0xDC66 | - | Hotelschalter am CAS. | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC66 | RES_0xDC66 |
| EINGANG_MOST_WUP | 0xDC6A | - | Status Leitung MOST_WUP von TCU an CAS. 1 Spannung liegt an, 0 Ausgang abgeschaltet, 255 Signal ungültig / Fehler. | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC6A | RES_0xDC6A |

### TAB_STEUERN_EWS4_MODE

| WERT | NAME | TEXT | DATA_LENGTH |
| --- | --- | --- | --- |
| 0x01 | LOCK_EWS4 | LOCK DMEDDE-Sk & Trsp-Sk | 16 |
| 0x02 | WRITE_DMEDDE_SK | Write DME/DDE-Sk | 16 |
| 0x03 | WRITE_TRSP_SK | Write Trsp-Sk | 16 |
| 0x04 | LOCK_DMEDDE_SK | Lock DME/DDE-Sk | 16 |
| 0x05 | LOCK_TRSP_SK | Lock Trsp-Sk | 16 |
| 0x06 | UNLOCK_DMEDDE_SK | UnLock DME/DDE-Sk | 16 |
| 0x07 | UNLOCK_TRSP_SK | UnLock Trsp-Sk | 16 |
| 0xFF | UNKNOWN_MODE | UNKNOWN_MODE | 0 |

### RES_0XDAB6

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_SST_AKTIV |  |  |  |  |  | unsigned char | 0x01 |  |  |  |  | Das Result enthält den aktuellen Zustand des Start-Stopp-Tasters |

### TAB_WECKQUELLE

| WERT | NAME |
| --- | --- |
| 0 | Entwicklungsfunktion, reserviert |
| 1 | System wachhalten wegen Zündung an |
| 2 | Buswecken über K-CAN(L1..L4)/Body-CAN(L6) |
| 3 | Buswecken über LO-CAN(optional) |
| 4 | Buswecken über CAS-BUS(TAGE:L1..L4) |
| 5 | Taster Heckklappe öffnen innen (TOEHKI) |
| 6 | Motorhaubenkontakt (MHK) |
| 7 | Start Stopp Taster A (SSTA) |
| 8 | Start Stopp Taster B (SSTB) |
| 9 | Funkschlüssel-Einschub(EJECT) |
| 10 | Center Lock Taster (CLT) |
| 11 | Parkstellung Automatik Verriegelt (PLOCK) |
| 12 | FBD-Empfänger (L1..L4) |
| 13 | Wakeup-Signal von TCU (MOST_WUP) |
| 14 | Hotelschalter (HOTEL) |
| 15 | Bidirektionaler Funkempfänger (L6) |
| 16 | Kupplung (PN_KUPPL)(nur bei KL30B aktiv) |
| 17 | Bremse (BLTS)(nur bei KL30B aktiv) |
| 18 | Weckleitung (15WUP) |
| 19 | Reserviert |
| 20 | Taster Fahrertür (TAGE-FT-ER) |
| 21 | Taster Beifahrertür (TAGE-BFT-ER) |
| 22 | Taster Fahrertür hinten (TAGE-FTH-ER) |
| 23 | Taster Beifahrertür hinten (TAGE-BTH-ER) |
| 24 | Authentisierung Fahrertür (TAGE-FT-AUTH) |
| 25 | Authentisierung Beifahrertür (TAGE-BFT-AUTH) |
| 26 | Authentisierung Fahrer hinten (TAGE-FTH-AUTH) |
| 27 | Authentisierung Beifahrer hinten (TAGE-FTH-AUTH) |
| 28 | Kurzschluss KL30B (bei Busruhe) |
| 29 | Unterspannung (Zeitstempel sichern, kein WakeUp) |

### RES_0XDC54

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAENDLER_NUMMER_WERT | - | - | string[5] | - | - | - | - | - | Händlernummer (5-stellige Nummer). Im Werk wird dieser Wert auf 00000 |

### ARG_0XDC54

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAENDLER_NUMMER | - | - | string[5] | - | - | - | - | - | - | - | Händlernummer (5-stellige Nummer). Im Werk wird dieser Wert auf 00000 |
| ERSTZULASSUNGSDATUM_TAG | - | - | unsigned char | - | - | - | - | - | - | - | Tag des Erstzulassungsdatums. Im werk wird dieser Wert auf den Tag der Schlüssel-Initialisierung gesetzt. |
| ERSTZULASSUNGSDATUM_MONAT | - | - | unsigned char | - | - | - | - | - | - | - | Monat des Erstzulassungsdatums.  Im werk wird dieser Wert auf den Monat der Schlüssel-Initialisierung gesetzt. |
| ERSTZULASSUNGSDATUM_JAHR | - | - | unsigned int | - | - | - | - | - | - | - | Jahr des Erstzulassungsdatums. .  Im werk wird dieser Wert auf den Jahr der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_TAG_WERT | - | - | unsigned char | - | - | - | - | - | - | - | Tag des Erstzulassungsdatums. Im werk wird dieser Wert auf den Tag der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_MONAT_WERT | - | - | unsigned char | - | - | - | - | - | - | - | Monat des Erstzulassungsdatums.  Im werk wird dieser Wert auf den Monat der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_JAHR_WERT | - | - | unsigned int | - | - | - | - | - | - | - | Jahr des Erstzulassungsdatums. .  Im werk wird dieser Wert auf den Jahr der Schlüssel-Initialisierung gesetzt. |

### RES_0XDAC1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATUS_ZV_FT | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Status Zentralverriegelung Fahrertür. |
| STATUS_ZV_BFT | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Status Zentralverriegelung Beifahrertür. |
| STATUS_ZV_FTH | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Status Zentralverriegelung Fahrertür-Hinten. |
| STATUS_ZV_BFTH | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Status Zentralverriegelung Beifahrertür-Hinten. |
| STATUS_ZV_HECKKLAPPE | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Status Zentralverriegelung Heckklappe. |
| STATUS_ZV_HECKSCHEIBE | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Status Zentralverriegelung Heckscheibe. |

### TAB_CAS_ZV_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Entriegelt |
| 1 | Verriegelt |
| 2 | Gesichert |
| 128 | Klappe/Scheibe geschlossen |
| 129 | Klappe/Scheibe geöffnet |
| 130 | Klappe in Vorrast |
| 255 | ungültig |

### RES_0XDAB9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS | - | - | - | Die ELV-Sperre (ELV-Montagemodus) verhindert die Ansteuerung (Verriegeln/Entriegeln) der ELV während des Montage-Prozesses. Die ELV-Diagnosen (z.B. Status-Abfragen, ELV-Ident) sind zulässig. Die KL50-Sperre verhindert das Ansteuern des Anlassers während des Montage-Prozesses. Definierte Montagemodi: 0 Alle Montagemodi sind deaktiviert (ELV- und KL50-Ansteuerung wird durchgeführ), 1 Nur KL50-Montagemodus aktiv (kein Anlasser), 2 ELV- und KL50 Montage-Modus sind aktiv (keine ELV-Ansteuerung, kein Anlasser) |

### ARG_0XDAB9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS | - | - | - | - | - | Die ELV-Sperre (ELV-Montagemodus) verhindert die Ansteuerung (Verriegeln/Entriegeln) der ELV während des Montage-Prozesses. Die ELV-Diagnosen (z.B. Status-Abfragen, ELV-Ident) sind zulässig. Die KL50-Sperre verhindert das Ansteuern des Anlassers während des Montage-Prozesses. Definierte Montagemodi: 0 Alle Montagemodi sind deaktiviert (ELV- und KL50-Ansteuerung wird durchgeführ), 1 Nur KL50-Montagemodus aktiv (kein Anlasser), 2 ELV- und KL50 Montage-Modus sind aktiv (keine ELV-Ansteuerung, kein Anlasser) |

### TAB_CAS_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalbetrieb - Alle Montagemodi deaktiviert |
| 1 | KL50-Montagemodus - Anlassersperre aktiv |
| 2 | ELV_KL50-Montagemodus - Anlassersperre und keine Ansteuerung ELV |
| 255 | unbekannter Zustand |

### RES_0XDC68

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_SICHERN_HECKKL_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Taster Sichern an der HKL, Eingang am CAS. 1 Taster gedrückt, 0 Taster nicht gedrückt, 255 Signal ungültig / unplausibel |
| STAT_TASTER_SICHERN_HECKKL_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Taster Sichern an der HKL, Eingang am CAS. 1 Taster gedrückt, 0 Taster nicht gedrückt, 255 Signal ungültig / unplausibel |

### ARG_0XDC68

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_SICHERN_HECKKL | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Taster Sichern an der HKL, Eingang am CAS. 1 Taster gedrückt, 0 Taster nicht gedrückt. |

### RES_0XDC63

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_KUPPL_PN_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Kupplungsschalter oder PN-Signal vom EGS, 1 Taster gerückt, 0 Taster nicht gedrückt, 255 Signal ungültig / unplausibel |
| STAT_SCHALTER_KUPPL_PN_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Kupplungsschalter oder PN-Signal vom EGS, 1 Taster gerückt, 0 Taster nicht gedrückt, 255 Signal ungültig / unplausibel |

### ARG_0XDC63

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTER_KUPPL_PN | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Kupplungsschalter oder PN-Signal vom EGS, 1 Taster gerückt, 0 Taster nicht gedrückt. |

### RES_0XDC65

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_MOTORHAUBE_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Motorhauben-Kontakt, 1 aktiv (offen), 0 nicht aktiv (geschlossen), 2 Fahrzeug besitzt keinen Motorhaubenkontakt, 255 Signal ungültig / unplausibel |
| STAT_SCHALTER_MOTORHAUBE_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Motorhauben-Kontakt, 1 aktiv (offen), 0 nicht aktiv (geschlossen), 2 Fahrzeug besitzt keinen Motorhaubenkontakt, 255 Signal ungültig / unplausibel |

### ARG_0XDC65

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTER_MOTORHAUBE | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Status Motorhauben-Kontakt vorgrbrn, 1 aktiv (offen), 0 nicht aktiv (geschlossen). |

### RES_0XDC62

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINGANG_A_S_START_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Eingang Start-Ende-Leitung von DME/DDE, 1 Spannung liegt an, 0 Spannung liegt nicht an, 2 nicht vorhanden, 255 ungültig/Fehler. |
| STAT_EINGANG_A_S_START_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Eingang Start-Ende-Leitung von DME/DDE, 1 Spannung liegt an, 0 Spannung liegt nicht an, 2 nicht vorhanden, 255 ungültig/Fehler. |

### ARG_0XDC62

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINGANG_A_S_START | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Eingang Start-Ende-Leitung von DME/DDE, 1 Spannung liegt an, 0 Spannung liegt nicht an. |

### RES_0XDABC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GANG | 0-n | - | unsigned char | - | TAB_CAS_GANG | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Gang von DME1. 1 N neutral; 2 R rückwärts; 3 P Park; 5 Gang 1; 6 Gang 2; 7 Gang 3; 8 Gang 4; 9 Gang 5; 10 Gang 6; 11 Gang 7; 12 Gang 8; 255 ungültig / kein Signal |
| STAT_BUS_IN_MOTOR_LAEUFT | 0-n | - | unsigned char | - | TAB_CAS_MOTOR_STATUS | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Motor läuft von DME1. 0 Motor aus; 1 Motor startet; 2 Motor läuft: 255 ungültig / kein Signal |
| STAT_BUS_IN_MOTOR_FREIGABE | 0-n | - | unsigned char | - | TAB_CAS_MOTORSTART_FREIGABE | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Motor Freigabe von DME1. 0 Kein Motorstart; 1 Motorstart verzögert; 2 Motorstart zugelassen; 255 ungültig / kein Signal |
| STAT_BUS_IN_ANLASSER_SPERRE | 0-n | - | unsigned char | - | TAB_CAS_MOTOR_ANLASSERSPERRE | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Anlasser Sperre von DME1. 0 Kein Motorstart, Getriebe D / R; 1 Motorstart zulassen, Getriebe N; 2 Motorstart und -stop zulassen Getriebe in P; 255 ungültig / kein Signal |
| STAT_BUS_IN_KUPPLUNG | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Kupplung von DME1. 0 Kupplung nicht betätigt; 1 Kupplung betätigt; 255 ungültig / kein Signal / nicht verbaut |
| STAT_BUS_IN_DREHZAHL_WERT | U/min | - | unsigned int | - | - | - | 4 | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Drehzahl von DME1. Aktuelle Drehzahl; -1 ungültige Drehzahl |

### TAB_CAS_GANG

| WERT | TEXT |
| --- | --- |
| 1 | N - Kein Kraftschluss |
| 2 | R - Rückwärtsgang |
| 3 | P - Parkposition |
| 5 | 1. Gang |
| 6 | 2. Gang |
| 7 | 3. Gang |
| 8 | 4. Gang |
| 9 | 5. Gang |
| 10 | 6. Gang |
| 11 | 7. Gang |
| 12 | 8. Gang |
| 255 | ungültig |

### TAB_CAS_MOTOR_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Motor aus |
| 1 | Motor startet |
| 2 | Motor läuft |
| 255 | ungültig/unbekannt |

### TAB_CAS_MOTORSTART_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0 | Kein Motorstart |
| 1 | Motorstart/-stop verzögert |
| 2 | Motorstart zulassen |
| 255 | ungültig/unbekannt |

### TAB_CAS_MOTOR_ANLASSERSPERRE

| WERT | TEXT |
| --- | --- |
| 1 | Motorstart zulassen - Getriebe in N |
| 0 | Kein Motorstart, Pos. D/R |
| 2 | Motorstart zulassen, Motorstop zulassen - Getriebe in P |
| 255 | ungültig/unbekannt |

### ARG_0XAC51

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEAKTIVIERUNGSGESCHWINDIGKEIT | km/h | - | unsigned char | - | - | - | - | - | - | - | Gibt an bei welcher Geschindigkeit die Funktion KL15-Abschaltung wieder aktiviert (default) werden soll: 0 -> KL15-Abschaltung wieder aktivieren xx -> KL15-Abschaltung unterdrücken bis nächstes Mal über xx Kmh (xx = min. 1 Km/h bis max 50 Km/h) Mit Argument = 0 soll die KL-15-Abschaltung sofort wieder aktiviert werden können. |

### RES_0XDAB5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STROM_TAGE_ER_FT_WERT | A | - | unsigned int | - | - | - | 1000 | - | Strom der Entriegeln-Leitung zur TAGE Fahrertüre. Mittelwert über je 100 ms. |
| STAT_STROM_TAGE_ER_BFT_WERT | A | - | unsigned int | - | - | - | 1000 | - | Strom der Entriegeln-Leitung zur TAGE Beiahrertüre. Mittelwert über je 100 ms. |
| STAT_STROM_TAGE_ER_FTH_WERT | A | - | unsigned int | - | - | - | 1000 | - | Strom der Entriegeln-Leitung zur TAGE Fahrertüre hinten. Mittelwert über je 100 ms. |
| STAT_STROM_TAGE_ER_BFTH_WERT | A | - | unsigned int | - | - | - | 1000 | - | Strom der Entriegeln-Leitung zur TAGE Beiahrertüre hinten. Mittelwert über je 100 ms. |

### RES_0XDC67

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_MSA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Status MSA-Taster am CAS. 1 Taster gedrückt, 0 Taster nicht gedrückt, 2 Fahrzeug besitzt keinen Taster, 255 Signal ungültig / unplausibel |
| STAT_TASTER_MSA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Status MSA-Taster am CAS. 1 Taster gedrückt, 0 Taster nicht gedrückt, 2 Fahrzeug besitzt keinen Taster, 255 Signal ungültig / unplausibel |

### ARG_0XDC67

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_MSA | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Status MSA-Taster am CAS. 1 Taster gedrückt, 0 Taster nicht gedrückt. |

### RES_0XDABB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_ZEIT_STUNDEN | 0-n | - | unsigned char | - | - | - | - | - | Stunden: 0 - 23; 253 entspricht  -- ; 254 Keine Angabe: 255 Signal ungültig |
| STAT_BUS_IN_ZEIT_MINUTEN | 0-n | - | unsigned char | - | - | - | - | - | Minuten: 0 - 59; 253 entspricht  -- ; 254 Keine Angabe; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_TAG | 0-n | - | unsigned char | - | - | - | - | - | Tag: 1 - 31 |
| STAT_BUS_IN_DATUM_MONAT | 0-n | - | unsigned char | - | - | - | - | - | Monat: 1 - 12 |
| STAT_BUS_IN_DATUM_JAHR | 0-n | - | unsigned int | - | - | - | - | - | Jahr: 1 - 65534 |
| STAT_BUS_IN_ZEIT_RELATIV_WERT | - | - | unsigned long | - | - | - | - | - | Aktuelles Relative Zeit in Sekunden seit 01.01.2000, Sekuden: 0 - 4,2 Millarden |
| STAT_BUS_IN_ZEIT_TAGE_RELATIV_WERT | - | - | unsigned int | - | - | - | - | - | Aktuelles Relative gesehene Tage seit 01.01.2000; Tage: 1 entspricht 01.01.2000 |

### TAB_CAS_KLEMMENSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | INIT |
| 1 | Reserve |
| 2 | KL30 alle Klemmen aus |
| 3 | KL30F-Änderung |
| 4 | KL30F |
| 5 | KL30B-Änderung |
| 6 | KL30B |
| 7 | KLR-Änderung |
| 8 | KLR |
| 9 | KL15-Änderung |
| 10 | KL15 |
| 11 | KL50-Verzögerung |
| 12 | KL50-Änderung |
| 13 | KL50 |
| 14 | Fehler |
| 15 | Ungültig |

### RES_0XDC64

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_CENTERLOCK_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | HW Taster Centerlock, 1 Taster gerückt, 0 Taster nicht gedrückt, 255 Signal ungültig / unplausibel |
| STAT_TASTER_CENTERLOCK_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | HW Taster Centerlock, 1 Taster gerückt, 0 Taster nicht gedrückt, 255 Signal ungültig / unplausibel |

### ARG_0XDC64

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_CENTERLOCK | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Status Taster Centerlock vorgeben, 1 Taster gedrückt, 0 Taster nicht gedrückt. |

### TAB_CAS_PIA_NUMMER

| WERT | TEXT |
| --- | --- |
| 0 | Personalisierungskonfiguration 0 |
| 1 | Personalisierungskonfiguration 1 |
| 2 | Personalisierungskonfiguration 2 |
| 10 | Gast |
| 15 | ungültig |

### RES_0XDC60

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_SSTA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Status des SST Hall-Sensors A (entprellt), 0 nicht aktiv, 1 aktiv |
| STAT_HALL_SSTB_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Status des SST Hall-Sensors B (entprellt), 0 nicht aktiv, 1 aktiv |
| STAT_HALL_SSTA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Status des SST Hall-Sensors A (entprellt), 0 nicht aktiv, 1 aktiv |
| STAT_HALL_SSTB_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Status des SST Hall-Sensors B (entprellt), 0 nicht aktiv, 1 aktiv |

### ARG_0XDC60

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HALL_SSTA | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Vorgeben des Status von Hallsensor A. 0 nicht aktiv, 1 aktiv. |
| HALL_SSTB | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Vorgeben des Status von Hallsensor B. 0 nicht aktiv, 1 aktiv. |

### RES_0XDABF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_FH_FT | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | - | - | - | CAN-Signal Status Fensterheber Fahrertür, 0 Geschlossen; 1 Zwischenstellung; 2 Offen; 255 Signal ungültig / unplausibel |
| STAT_BUS_IN_FH_BFT | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | - | - | - | CAN-Signal Status Fensterheber Beifahrertür, 0 Geschlossen; 1 Zwischenstellung; 2 Offen; 255 Signal ungültig / unplausibel |
| STAT_BUS_IN_FH_FTH | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | - | - | - | CAN-Signal Status Fensterheber fahrertür hinten, 0 Geschlossen; 1 Zwischenstellung; 2 Offen; 255 Signal ungültig / unplausibel |
| STAT_BUS_IN_FH_BFTH | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | - | - | - | CAN-Signal Status Fensterheber Beifahrertür hinten, 0 Geschlossen; 1 Zwischenstellung; 2 Offen; 255 Signal ungültig / unplausibel |

### TAB_CAS_FH_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Geschlossen |
| 1 | Zwischenstellung |
| 2 | Offen |
| 255 | ungültig/unbekannt |

### RES_0XDABD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GESCHW_WERT | km/h | - | unsigned int | - | - | - | 64 | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Geschwindigkeit vom DSC. CAN-Signal Geschwindigkeit vom DSC |
| STAT_BUS_IN_GESCHW_STATUS | 0-n | - | unsigned char | - | TAB_CAS_GESCHW_STATUS | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Geschwindigkeit-Status vom DSC. 0 Fahrzeug steht; 1 Fahrzeug fährt vorwärts; 2 Fahrzeug fährt rückwärts; 3 Fahrzeug fährt; 4 Fahrzeug steht Hinterachse auf Rollenprüfstand; 7 ungültig / kein Signal |
| STAT_BUS_IN_BREMSPEDAL | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Auslesen der vom BUS empfangenen Stati. Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. CAN-Signal Status Bremspedal vom DSC. 0 Nicht betätigt; 1 Betätigt; 255 Signal ungültig / unplausibel (Hinweis: CAN-Signal Status_Bremsung_Fahrer, Auswertung der Bit-Kodierung Betätigung_Bremssystem_Fahrer + Gesamtsignal ungültig muss im CAS erfolgen). |

### TAB_CAS_GESCHW_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt vorwärts |
| 2 | Fahrzeug fährt rückwärts |
| 3 | Fahrzeug fährt |
| 4 | Fahrzeug steht, Hinterachse auf Rollenprüfstand erkannt |
| 7 | Signal ungültig |

### RES_0XDACA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGE_FT | 0-n | - | unsigned char | - | - | - | - | - | Status TAGE Fahrertüre, 0 Kein Status (keine Betätigung), 1 Zugsensor Betätigt (Hall); 2 Sichern Sensor Betätigt (Piezo UND VR-Kap-Sensor); 3 Entriegeln Sensor Betätigt (ER-Kap-Sensor) |
| STAT_TAGE_BFT | 0-n | - | unsigned char | - | - | - | - | - | Status TAGE Beifahrertüre, 0 Kein Status (keine Betätigung), 1 Zugsensor Betätigt (Hall); 2 Sichern Sensor Betätigt (Piezo UND VR-Kap-Sensor); 3 Entriegeln Sensor Betätigt (ER-Kap-Sensor) |
| STAT_TAGE_FTH | 0-n | - | unsigned char | - | - | - | - | - | Status TAGE Fahrertüre hinten, 0 Kein Status (keine Betätigung), 1 Zugsensor Betätigt (Hall); 2 Sichern Sensor Betätigt (Piezo UND VR-Kap-Sensor); 3 Entriegeln Sensor Betätigt (ER-Kap-Sensor) |
| STAT_TAGE_BFTH | 0-n | - | unsigned char | - | - | - | - | - | Status TAGE Beifahrertüre hinten, 0 Kein Status (keine Betätigung), 1 Zugsensor Betätigt (Hall); 2 Sichern Sensor Betätigt (Piezo UND VR-Kap-Sensor); 3 Entriegeln Sensor Betätigt (ER-Kap-Sensor) |

### RES_0XDAB0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_HALL_VERS13_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannung Hall-Sensor-Versorgung (Peak) Sensoren 1 und 3 |
| STAT_SPANNUNG_HALL_VERS24_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannung Hall-Sensor-Versorgung (Peak) Sensoren 2 und 4 |

### RES_0XDC69

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKKL_INNEN_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Heckklappentaster innen, Eingang am CAS. 1 Taster gerückt, 0 Taster nicht gedrückt, 2 Fahrzeug besitzt keinen Taster, 255 Signal ungültig / unplausibel. |
| STAT_TASTER_HECKKL_INNEN_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Heckklappentaster innen, Eingang am CAS. 1 Taster gerückt, 0 Taster nicht gedrückt, 2 Fahrzeug besitzt keinen Taster, 255 Signal ungültig / unplausibel. |

### ARG_0XDC69

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_HECKKL_INNEN | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Heckklappentaster innen, Eingang am CAS. 1 Taster gerückt, 0 Taster nicht gedrückt. |

### RES_0XDC61

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_BREMSL_HIGH_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | HW Taster Bremslichtschalter, 1 Taster gerückt, 0 Taster nicht gedrückt, 2 Taster nicht vorhanden (kein Automatik-Getriebe), 255 Signal ungültig / unplausibel |
| STAT_SCHALTER_BREMSL_LOW_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | HW Taster Bremslichtschalter (Test-Schalter), 1 Taster gerückt, 0 Taster nicht gedrückt, 2 Taster nicht vorhanden (kein Automatik-Getriebe), 255 Signal ungültig / unplausibel |
| STAT_SCHALTER_BREMSL_HIGH_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | HW Taster Bremslichtschalter, 1 Taster gerückt, 0 Taster nicht gedrückt, 2 Taster nicht vorhanden (kein Automatik-Getriebe), 255 Signal ungültig / unplausibel |
| STAT_SCHALTER_BREMSL_LOW_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | HW Taster Bremslichtschalter (Test-Schalter), 1 Taster gerückt, 0 Taster nicht gedrückt, 2 Taster nicht vorhanden (kein Automatik-Getriebe), 255 Signal ungültig / unplausibel |

### ARG_0XDC61

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTER_BREMSL_HIGH | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Status des High-schaltenden Bremslichtschalters vorgeben. 1 Taster gerückt, 0 Taster nicht gedrückt. |
| SCHALTER_BREMSL_LOW | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Status des Low-schaltenden Bremslichtschalters vorgeben. 1 Taster gerückt, 0 Taster nicht gedrückt. |

### RES_0XAC57

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_STATUS | + | + | + | 0-n | - | unsigned char | - | TAB_ZV_ZUSTAND | - | - | - | Aktuell gesendeter ZV-Status: 0 Unbekannter Status, 1 mindestens eine Tür entriegelt, 2 mindestens eine Tür verriegelt, 4 interner Status ist gesichert, 15 ungültig (Kombinationen siehe Tabelle TAB_ZV_ZUSTAND). |

### ARG_0XAC57

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_AKTION | 0-n | - | unsigned char | - | TAB_ZV_AKTION | - | - | - | - | - | Das Argument enthält die auszuführende ZV-Aktion. Mögliche Argumente sind: 0=keine Aktion, 1=Entriegeln, 2=Verriegeln, 3=Sichern, 4=Selektiv entriegeln, 5=logisch entriegeln. |

### TAB_ZV_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | keine Aktion |
| 1 | Entriegeln |
| 2 | Verriegeln |
| 3 | Sichern |
| 4 | Selektiv Entriegeln |
| 5 | logisch Entriegeln |
| 100 | Elektrisch öffnen ist aktiv |
| 255 | ungültig |

### TAB_ZV_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Status noch unbekannt |
| 1 | mindestens eine Tür entriegelt - keine Tür verriegelt oder gesichert |
| 2 | mindestens eine Tür verriegelt - keine Tür entriegelt |
| 3 | mindestens eine Tür entriegelt - mindestens eine Tür verriegelt |
| 4 | alle Türen gesichert |
| 5 | gesichert - mindestens eine Tür entriegelt |
| 6 | teilweise gesichert - Zwischenzustand oder Fehlerzustand |
| 7 | teilweise gesichert - Zwischenzustand oder Fehlerzustand |
| 15 | ungültig |

### RES_0XDAB3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KLEMME_30B_1_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 30B_1 Bei Alt-Baureihen entspricht dies Klemme R Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_30B_2_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 30B_2 Bei Alt-Baureihen entspricht dies Klemme R Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_30B_3_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 30B_3 Bei Alt-Baureihen entspricht dies Klemme R Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_15WUP_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 15_WUP Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_15N_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 15N Bei Alt-Baureihen entspricht dies KL30G Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_15_1_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 15_1 Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_15_2_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 15_2 Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_15_3_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 15_3 Bei CAS Ausgang |
| STAT_STROM_KLEMME_15_50_WERT | V | - | unsigned int | - | - | - | 1000 | - | Stromwert am Steuergerät an Klemme 15 und 50 Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_50_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 50 Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_50MSA_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am Steuergerät an Klemme 50MSA Bei CAS Ausgang |
| STAT_STROM_LF_WERT | A | - | unsigned int | - | - | - | 1000 | - | Stromwert am Steuergerät an LF (CA-Antennen) Bei CAS Ausgang |
| STAT_DIAG_LF_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannung am Steuergerät an LF (CA-Antennen) Bei CAS Ausgang |
| STAT_SPANNUNG_KLEMME_31ELV_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am CAS-Steuergerät an Klemme 30_ELV Ausgang am CAS |
| STAT_SPANNUNG_KLEMME_30ELV_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannungswert am CAS-Steuergerät an Klemme 30_ELV Ausgang am CAS |
| STAT_SPANNUNG_INNENTEMPERATUR_WERT | V | - | unsigned int | - | - | - | 1000 | - | Spannung am PTC/NTC im Steuergerät zur Ermittlung der Innentemperatur |

### RES_0XDC66

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_HOTEL_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Hotelschalter, 1 Hotelfunktion aktiv, 0 Hotelfunktion nicht aktiv, 2 Fahrzeug besitzt keinen Hotelschalter, 255 Signal ungültig / unplausibel |
| STAT_SCHALTER_HOTEL_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Hotelschalter, 1 Hotelfunktion aktiv, 0 Hotelfunktion nicht aktiv, 2 Fahrzeug besitzt keinen Hotelschalter, 255 Signal ungültig / unplausibel |

### ARG_0XDC66

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTER_HOTEL | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Hotelschalter, 1 Hotelfunktion aktiv, 0 Hotelfunktion nicht aktiv. |

### RES_0XDC6A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINGANG_MOST_WUP_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Status Leitung MOST_WUP von TCU an CAS. 1 Spannung liegt an, 0 Ausgang abgeschaltet, 255 Signal ungültig / Fehler. |
| STAT_EINGANG_MOST_WUP_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Status Leitung MOST_WUP von TCU an CAS. 1 Spannung liegt an, 0 Ausgang abgeschaltet, 255 Signal ungültig / Fehler. |

### ARG_0XDC6A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINGANG_MOST_WUP | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Status Leitung MOST_WUP von TCU an CAS. 1 Spannung liegt an, 0 Ausgang abgeschaltet. |

### TAB_CAS_DIGITAL_EINGANG

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv / nicht betätigt |
| 1 | aktiv / betätigt |
| 2 | nicht verbaut / Status nicht verfügbar |
| 255 | ungültig / Fehler erkannt |
