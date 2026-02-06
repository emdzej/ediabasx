# cas4_2.prg

## General

|  |  |
| --- | --- |
| File | cas4_2.prg |
| Type | PRG |
| Jobs | 89 |
| Tables | 142 |
| Origin | BMW EI-641 Andreas_Wojcik |
| Revision | 5.068 |
| Author | mPT_Kögel_GmbH Automotive Alfred_Kögel, Conti_Temic_GmbH L_B2_E |
| ECU Comment | KW47/2013 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Car Access System |  |  |
| ORIGIN | string | BMW EI-641 Andreas_Wojcik |  |  |
| REVISION | string | 5.068 |  |  |
| AUTHOR | string | mPT_Kögel_GmbH Automotive Alfred_Kögel, Conti_Temic_GmbH L_B2_E |  |  |
| COMMENT | string | KW47/2013 |  |  |
| PACKAGE | string | 1.39 |  |  |
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

### STATUS_ISTUFE

Liefert die im EEPROM abgelegte I-Stufe jeweils für Werk, HO und HO-Backup. JobHeaderFormat 0x100B STATUS_ISTUFE

_No arguments._

### STATUS_KILOMETERSTAND

Aufruf liefert den angezeigeten Gesamtwegstreckenzähler. Beim CAS den im EEPROM hinterlegten Wert. JobHeaderFormat 0x1700 STATUS_KILOMETERSTAND

_No arguments._

### STATUS_CAS_HW_VARIANTE

Hardware-Variante des CAS lesen. JobHeaderFormat 0xDAB7 CAS_HW_VARIANTE

_No arguments._

### STATUS_KLEMMEN_VERHINDERER

Job zum Auslesen der internen Stati der Klemmensteuerungs-Statemachine für folgende Klemmenwechsel: Einschalten der KL15, Ausschalten der KL15, Einschalten der KL50 JobHeaderFormat 0xDABA STATUS_KLEMMEN_VERHINDERER

_No arguments._

### STATUS_ELV

Aktuellen Status der ELV aktiv auslesen. JobHeaderFormat 0xDAC3 STATUS_ELV

_No arguments._

### STATUS_ZV_HISTORIE

Historienspeicher für Zustandsänderungen und Aktionen des Zentralverriegelungs-Masters. JobHeaderFormat 0xDAC6 ZV_HISTORIE

_No arguments._

### STATUS_ZV_AKTUELL

Der Job dient zum Auslesen des aktuellen Status des Zentralverriegelungsmasters. JobHeaderFormat 0xDAC7 STATUS_ZV

_No arguments._

### STATUS_FBD_EMPFAENGER

Status des LIN-FBD-Empfängers JobHeaderFormat 0xDAC9 FBD_EMPFAENGER

_No arguments._

### STATUS_FAHRZEUGAUFTRAG

Der Job dient zum Auslesen des redundant im CAS gespeicherten Fahrzeugauftrags. Hinweise:Das ZGW ist das Master-SG für den Fahrzeugauftrag Es werden nur die uninterpretierten Rohdaten aus dem CAS EEPROM geliefert JobHeaderFormat 0xDC55 FAHRZEUGAUFTRAG

_No arguments._

### STATUS_KL15_ABSCHALTUNG

Job zum Lesen des Status der Funktion KLEMME15-Abschaltung. JobHeaderFormat 0xDC57 STATUS_KL15_ABSCHALTUNG

_No arguments._

### STATUS_PM_HISTORIE

Der Job dient zum Auslesen des Powermanagement Historienspeicher des CAS. Der Historienspeicher gibt die Weckquelle, das zeitliche Auftreten (relativer Abstand zwischen 2 Weckereignissen) und die Häufigkeit von Weckereignissen wieder. JobHeaderFormat 0xDC58 STATUS_PM_HISTORIE

_No arguments._

### STATUS_PM_SCHLAFBEREITSCHAFT

Der Job dient zum Auslesen der Schlafbereitschaft des CAS und gibt den Status aller möglichen Einschlafverhinderer, d.h. Weckquellen (CAS-intern/extern) aus. JobHeaderFormat 0xDC59 STATUS_PM_SCHLAFBEREITSCHAFT

_No arguments._

### STEUERN_PIA_NR

PIA-Nummer eines Schlüssels umdefinieren. JobHeaderFormat 0xDC5B STEUERN_PIA_NR

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Auswahl des Schlüssels in der Transponder-Tabelle. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITON. - Es sind nur die Werte 0 - 9 zulässig. |
| PIA_NR | unsigned char | Die zu setzende PIA-Nummer. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_PIA_NUMMER. |

### STATUS_KLEMMEN_HISTORIE

Der Job dient zum Auslesen des Klemmen-Historiespeichers des CAS. Der Historienspeicher gibt den eingenommenen Klemmenzustand, das Transitions-Ereignis (d.h. Anforderer bzw. Ursache für einen Klemmenwechsel) sowie den Zeitpunkt des Klemmenwechsels wieder. JobHeaderFormat 0xDC5C STATUS_KLEMMEN_HISTORIE

_No arguments._

### STATUS_RDU_RDL_INFO

Dieser Job dient dazu die Daten aller im Infospeicher des CAS abgespeicherten RDU- und RDL-Anforderungen auszulesen. Hinweise: RDU/RDL-Anforderungen  sowohl erfolgreiche als auch fehlgeschlagene - werden als einzelne Einträge im Infospeicher des CAS abgelegt. JobHeaderFormat 0xDC6B STATUS_RDU_RDL_INFO

_No arguments._

### STEUERN_SCHLUESSEL_SPERRE

Job zum Sperren und wieder freigeben von Schlüsseln. Der Job ist nur zulässig, wenn sich gerade ein gültiger Schlüssel an der Transponder-Spule befindet. Der aktuelle Schlüssel an der Transponder-Spule kann nicht gesperrt oder freigegeben werden. JobHeaderFormat 0xDC73 STEUERN_SCHLUESSEL_SPERRE

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Auswahl des Schlüssels in der Transponder-Tabelle. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION. - Es sind nur die Werte 0-9 zulässig. |
| SCHL_SPERRE | unsigned char | Auswahl der Aktion Sperren oder Freigeben des gewählten Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSELSPERRE. - Es sind nur die Werte 0 oder 1 zulässig. |

### STEUERN_EGS_ISN

EGS-ISN im CAS setzen (wird für Getriebe-EWS genutzt) Vorbedingung: DME-SecretKey (EWS4_DME_SK) nicht verriegelt JobHeaderFormat 0xDC76 EGS_ISN

| Name | Type | Description |
| --- | --- | --- |
| EGS_ISN | string | Das Argument enthält die zu schreibende EGS-ISN. Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01, 0x23, 0x45, 0x67'. |

### STATUS_EGS_ISN

Verriegelungs-Status für EGS-ISN im CAS lesen (wird für Getriebe-EWS genutzt) JobHeaderFormat 0xDC76 EGS_ISN

_No arguments._

### STATUS_CAS_WUP

4-Byte FBD-Wakeup-Pattern lesen. JobHeaderFormat 0xDC78 CAS_WUP

_No arguments._

### STEUERN_CAS_WUP

4-Byte FBD-Wakeup-Pattern schreiben. JobHeaderFormat 0xDC78 CAS_WUP

| Name | Type | Description |
| --- | --- | --- |
| FBD_WAKEUP | string | Das Argument enthält das zu schreibende FBD-Wakeup-Pattern. Hinweise: - Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01,0x23,0x45,0x67' der Schluessel. |

### STEUERN_CAS_FREQ_TYPE

Konfigurationd des CAS setzen. Die Konfiguration ist nach dem Verriegeln des EWS4_SK bzw. EWS4_TRSP_SK nicht mehr änderbar (ERROR_ECU_CONDITIONS_NOT_CORRECT). Werden unzulässige Daten übergeben, so erfolgt ein ERROR_DATA. JobHeaderFormat 0xDC79 CAS_FREQ_TYPE

| Name | Type | Description |
| --- | --- | --- |
| INIT_FREQ | unsigned char | Das Argument enthält die Kennzahl für Schlüssel-Frequenz. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FREQ. |
| TRSP_TYPE | unsigned char | Das Argument (optional) enthält die Art des verwendeten Transponder. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_TRSP_TYPE. - Wird dieses Argument nicht übergeben, so wird mit dem Wert 2 (=HTPro) gearbeitet. |

### STATUS_CAS_FREQ_TYPE

Konfiguration des CAS bzgl. Schlüssel-Initialisierung auslesen. JobHeaderFormat 0xDC79 CAS_FREQ_TYPE

_No arguments._

### STATUS_CAS_INIT_LOC_DATE

Konfiguration des CAS bzgl. Schlüssel-Initialisierung auslesen. JobHeaderFormat 0xDC7B CAS_INIT_LOC_DATE

_No arguments._

### STEUERN_CAS_INIT_LOC_DATE

Konfigurationd des CAS setzen. Die Konfiguration ist nach dem Verriegeln des EWS4_SK bzw. EWS4_TRSP_SK nicht mehr änderbar (ERROR_ECU_CONDITIONS_NOT_CORRECT). Werden unzulässige Daten übergeben, so erfolgt ein ERROR_DATA. JobHeaderFormat 0xDC7B CAS_INIT_LOC_DATE

| Name | Type | Description |
| --- | --- | --- |
| INIT_DAY | unsigned char | Argument Tag CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 1-31. |
| INIT_MONTH | unsigned char | Argument Monat CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 1-12. |
| INIT_YEAR | unsigned int | Argument Jahr CAS-/Schlüssel-Initialisierung. Hinweise: - Wertebereich 2000-9999. |
| INIT_LOCATION | string | Das Argument enthält den Ort der Schlüssel-Initialisierung. Hinweise: - Format: 4 Zeichen ASCII - Beispiele: 0240 = Werk 2.4, 0220 = Werk 2.2, 0100 = Werk München, EDGF = Ersatzteilplatz Dingolfing |
| INIT_STATION | string | Das Argument enthält die BMW-spezifische Kennung der Anlernstation (4 Zeichen ASCII, z.B. Anlagennummer, Kennung für Nacharbeit, ...). Hinweise: - Format: 4 Zeichen ASCII, z.B. Anlagennummer, Kennung für Nacharbeit - Beispiele: DC22, DA21, DN01, ... |

### STATUS_CAS_ANLIEFERZUSTAND

Dieser Job liefert den aktuellen Fortschritt des Rücksetzen nach STEUERN_CAS_ANLIEFERZUSTAND. JobHeaderFormat 0xDC7D STATUS_CAS_ANLIEFERZUSTAND

_No arguments._

### STATUS_SCHLUESSEL_TRSP

Liefert den Status des momentan in der Ringspule befindlichen Schlüssels. Der Job liefert den Status des zuletzt gefundenen Transponders in der Ringspule. Die Daten sind max. 300 ms alt und entprellt (bei dauerhaft vorhandenem Transponder, keine flackernden Results). Ist der Schlüssel unbekannt und bereits gelocked, so werden nur die immer lesbaren Informationen ausgegeben. JobHeaderFormat 0xDC7E STATUS_SCHLUESSEL_TRSP

_No arguments._

### STEUERN_SCHLUESSELDATEN

Schlüssel-Daten in CAS schreiben (z.B. für Ersatz-Steuergerät oder Nacharbeit). Nur zulässig solange EWS4_TRSP_SK nicht verriegelt. JobHeaderFormat 0xDC80 STEUERN_SCHLUESSELDATEN

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Das Argument zur Auswahl der Position in der  Transponder-Tabelle an der der Schlüssel oder der  Telestart-Handsender oder die Fond-Fernbedienung angelernt werden soll. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION. |
| KEY_ID | string | Das Argument enthält die zu schreibende ID des Schlüssels. Hinweise: - 4-Byte hex-Wert. - Alle Werte ausser 'FF FF FF FF' - Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01, 0x23, 0x45, 0x67'. |
| KEY_TYPE | unsigned char | Das Argument enthält den zu schreibenden Typ des Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_KEYTYPE. |
| KEY_DISABLED | unsigned char | Zum Schlüssel sperren/entsperren. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSELSPERRE. - Es sind nur die Werte 0 und 1 zulässig. |

### STATUS_STANDVERBRAUCHER_AKTUELL

Der Job dient zum Auslesen des aktuellen Status, ob aktive KL30B-Nachlaufzeitverlängerungsanforderungen durch Standverbraucher im aktuellen einem Ruhezyklus (Beginn: KL15 aus  Ende: Motorstart) vorliegen. JobHeaderFormat 0xDC81 STATUS_STANDVERBRAUCHER_AKTUELL

_No arguments._

### STATUS_STANDVERBRAUCHER_HISTORIE

Der Job dient zum Auslesen des Historienspeichers für KL30B-Nachlaufzeitverlängerungsanforderungen durch Standverbraucher. JobHeaderFormat 0xDC82 STATUS_STANDVERBRAUCHER_HISTORIE

_No arguments._

### STATUS_EWS4_SK

Dieser Job dient zum (Gegen-)Lesen der Secretkeys / ISNs (vor einem anschließenden Verriegeln Kommando) JobHeaderFormat 0xC002 STATUS_EWS4_SK_CAS

_No arguments._

### STATUS_EWS

Liefert den aktuellen Status der EWS-SecretKeys ISNs und den Status bzgl. KeyID KeyPIN JobHeaderFormat 0xC000 STATUS_EWS

_No arguments._

### STEUERN_FAHRGESTELLNUMMER

Schreiben der Fahrgestellnummer JobHeaderFormat 0xF190 FAHRGESTELLNUMMER_LANG

| Name | Type | Description |
| --- | --- | --- |
| FGNR17 | string | 17-stellige Fahrgestellnummer. Zum Zurücksetzenim Steuergerät wird das Argument '00000000000000000' verwendet. Hinweis: Der Argumentwert '00000000000000000' wird SGBD-intern in 0xFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF gewandelt, bevor er an das CAS gesendet wird. |

### STATUS_FAHRGESTELLNUMMER

Lesen der Fahrgestellnummer JobHeaderFormat 0xF190 FAHRGESTELLNUMMER_LANG

_No arguments._

### STEUERN_EWS4

Dieser Job dient zum Setzen der Secretkeys und zum anschließenden Verriegeln. JobHeaderFormat 0xC001 STEUERN_EWS4_CAS

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Das Argument dient zur Auswahl der auszuführenden Aktion. Hinweise: - 'WRITE_DMEDDE_SK' SecretKey des EWS4-Servers zur Anbindung einer EWS4-DME/DDE soll geschrieben werden. Argument ist der DMEDDE-SecretKey. - 'LOCK_DMEDDE_SK' und EGS_ISN soll verriegelt werden. Kein Argument. - 'WRITE_TRSP_SK' SecretKey des EWS4-Clients zur Anbindung der Transponder-Schlüssel soll geschrieben werden. Argument ist der TRSP-SecretKey. - 'LOCK_TRSP_SK' SecretKey des EWS4-Clients zur Anbindung der Transponder-Schlüssel soll verriegelt werden. Kein Argument. - LOCK_EWS4' SecretKeys der EWS4-Clients zur Anbindung der Transponder-Schlüssel und SecretKey des EWS4-Servers zur Anbindung einer EWS4-DME/DDE sollen beide verriegelt werden. Argument DATA enthält 0x00. - 'UNLOCK_TRSP_SK' NUR ENTWICKLUNG! Argument DATA muss TRSP_SK  enthalten, der bereits im CAS gespeichert ist! |
| DATA | string | SDas Argument enthält den zu schreibenden SecretKey - Keine Daten nötig, falls MODE = LOCK_TRSP_SK/LOCK_DMEDDE_SK/LOCK_EWS4 - Folgende Formate müssen unterstützt werden: "01 23 45 67 89 AB CD EF 01 23 45 67 89 AB CD EF" und "0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF,0x01,0x23,0x45,0x67,0x89,0xAB,0xCD,0xEF". |

### STEUERN_KLEMMEN

Ändert den aktuellen Klemmen-Zustand im CAS. Auch Ausschalten des Motors möglich! Nur im Werkstatt- oder Fertigungsmodus. JobHeaderFormat 0x1001 STEUERN_KLEMMEN

| Name | Type | Description |
| --- | --- | --- |
| CAS_KLEMMEN_STATUS_NEU | string | Das Argument gibt an in welchen Klemmenzustand geschaltet werden soll. Hinweise: - KL30F_EIN = Nur KL30F Ein, Alle anderen Klemmen aus - KL30B_EIN = KL30B Ein - KL30B_EIN_VERK = KL30B Ein mit verkürzter Nachlaufzeit von 15 sek - KLR_EIN = KLR Ein - KL15_EIN = KL15 Ein |

### STATUS_SERVICE_SCHLUESSELDATEN

Dieser Job dient zum blockweisen Auslesen der im CAS gespeicherten Service Schlüsseldaten. JobHeaderFormat 0x1006 STATUS_SERVICE_SCHLUESSELDATEN

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_NR | unsigned char | Das Argument gibt die Blocknummer des auszulesenen Blocks an. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SERVICE_SCHLUESSELDATEN_BLOCK_NR. |

### STEUERN_SERVICE_SCHLUESSELDATEN_UPDATE

Dieser Job ermöglicht es einem folgende Aktionen anzustossen: Ermitteln der aktuellen Daten aus dem Fahrzeug, Übertragen der Daten in alle aktuell erkannten Schlüssel (inkrementell oder komplett). JobHeaderFormat 0x4005 STEUERN_SERVICE_SCHLUESSELDATEN_UPDATE

| Name | Type | Description |
| --- | --- | --- |
| UPDATE_MODUS | unsigned char | Festlegen des Update-Modus (welche Daten werden vom CAS aus dem Fahrzeug aktualisiert und wie werden sie übertragen). Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SERVICE_SCHLUESSELDATEN_UPDATE_MODUS. |

### STATUS_ELV_FEHLERSPEICHER

JobHeaderFormat 0xAA72 STATUS_ELV_FEHLERSPEICHER Vorbedingungen sind: a) ELV-Fehlerzähler (Escape-Counter) ELV-Master < 7 und b) ELV-Fehlerzähler (Escape-Counter) ELV-SG < 7

_No arguments._

### STEUERN_CAS_ANLIEFERZUSTAND

Versetzt das CAS in den Anlieferzustand (Montage-Modi, Codierung, VIN, Tansponder-Tabelle, EWS4_CLIENT_SK, ...) Falls Rücksetzen unzulässig: ERROR_ECU_CONDITIONS_NOT_CORRECT. Anmerkung: Nach dem Rücksetzen müssen alle im verriegelten Zustand geschützten W JobHeaderFormat 0xAC50 STEUERN_CAS_ANLIEFERZUSTAND

| Name | Type | Description |
| --- | --- | --- |
| EWS4_TRSP_SK | string | Das (optionale) Argument enthält den geheimen EWS4_TRSP_SK. Die Jobdauer ist immer die gleiche (kleiner 5 Sekunden). Hinweise: - Wenn das CAS nicht verriegelt ist, so kann der Aufruf auch ohne Parameter erfolgen. - 16-Byte hex-Wert als String in dem folgenden Format: '0x01,0x02,0x03' oder '01,02,03' oder '0x01 0x02 0x03' oder '01 02 03'. |

### STEUERN_SCHLUESSEL_INIT

Job zum Anstoßen der Schlüssel-Initialisierung. Nur zulässig, solange EWS4_TRSP_SK noch nicht verriegelt. JobHeaderFormat 0xAC52 STEUERN_SCHLUESSEL_INIT

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Argument zur Auswahl der Schlüssel-Position in der Transponder-Tabelle an der der Schlüssel oder der Telestarthandsender oder die FFB angelernt werden soll. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION. |
| KEY_ID | string | Das Argument enthält die zu schreibende ID des Schlüssels. Hinweise: - 4-Byte hex-Wert. - Alle Werte ausser 'FF FF FF FF' - Folgende Übergabe-Formate müssen unterstützt werden: '01 23 45 67' und '0x01, 0x23, 0x45, 0x67'. |
| KEY_TYPE | unsigned char | Das Argument enthält den zu schreibenden Typ des Schlüssels. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_KEYTYPE. |
| INIT_MODE | unsigned char | Festlegen des Anlernmodus (optional). Hinweise: - 1= Normal anlernen und Schlüssel verriegeln (default). - 0= Normal anlernen, aber Schlüssel nicht verriegeln. |

### STEUERN_CA_KOMM_TEST

Kommunikation mit bestimmtem Schlüssel über bestimmte Antenne (IRV, IRH, FT, BFT, HA, KRLI, KRRE, SF) JobHeaderFormat 0xAC53 CA_KOMM_TEST

| Name | Type | Description |
| --- | --- | --- |
| SCHL_NUM | unsigned char | Das Argument dient zur Auswahl des Schlüssels mit dem kommuniziert werden soll. Hinweise: - 0-9 = Schlüsselposition Transponder-Tabelle - 15 = Beliebiger Schlüssel |
| CA_ANTENNE | unsigned char | Das Argument dient zur Auswahl der CA-Antenne über welche die Kommunikation in Richtung Schlüssel stattfinden soll. Hinweise: - 1= IRV (Innenraum vorn) - 2= IRH (Innenraum hinten) - 3= FT (Fahrertür/-seite) - 4= BFT (Beifahrertür/-seite) - 5= HA (Hut-Ablage) - 6= KRLI (Kofferraum links) - 7= KRRE (Kofferraum rechts) - 8= SF (Stoßfänger) - 9= IR (Innenraum IRV+IRH) |

### STEUERN_CA_BROADCAST

Broadcast Innenraum: Alle im Innenraum befindlichen bereits bekannten Schlüssel ermitteln (max. 8). Results sind die Schlüssel-Ids und die Schlüssel-Nummern (0-9). Die Results STAT_CA_SCHL_...x werden beginnend mit x=1 bis x=n (bei n gefunden Schlüsseln) aufgefüllt. Die Results STAT_CA_SCHL_...x für x > n werden mit '00 00 00 00' bzw. 15 belegt (kein Schlüssel gefunden). JobHeaderFormat 0xAC54 CA_BROADCAST

_No arguments._

### STEUERN_CA_ANTENNEN_TEST

CA-Antennen-Test durchführen und Fehler sofort in Fehlerspeicher eintragen. JobHeaderFormat 0xAC55 CA_ANTENNEN_TEST

_No arguments._

### STEUERN_HISTORIENSPEICHER

Dieser Job dient dazu per Diagnose neue Einträge in folgenden Historienspeichern des CAS zu sperren/entsperren: Powermanagement-Historienspeicher, Zentralverriegelungs-Historienspeicher, Klemmen-Historienspeicher, Standverbraucher-Historienspeicher. Kommentar: Der Job dient dazu den Inhalt eines Historienspeichers bei der Fehlersuche zu erhalten und das ungewollte Überschreiben durch neue Einträge zu unterbinden. JobHeaderFormat 0xAC56 STEUERN_HISTORIENSPEICHER

| Name | Type | Description |
| --- | --- | --- |
| SPERRE_PM_HISTORIE | unsigned char | Das Argument dient zur Auswahl der Aktion Sperren oder Freigeben des Powermanagement-Historienspeichers. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE. |
| SPERRE_ZV_HISTORIE | unsigned char | Das Argument dient zur Auswahl der Aktion Sperren oder Freigeben des Zentralverriegelungs-Historienspeichers. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |
| SPERRE_KLEMMEN_HISTORIE | unsigned char | Das Argument dient zur Auswahl der Aktion Sperren oder Freigeben des Klemmen-Historienspeichers. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |
| SPERRE_STANDVERBRAUCHER_HISTORIE | unsigned char | Das Argument dient zur Auswahl der Aktion Sperren oder Freigeben des Standverbraucher-Historienspeichers. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_HISTORIENSPEICHER_SPERRE |

### STATUS_FBD_TELEGRAMM

Status des letzten Empfangenes Funk-Telegramms (innerhalb der letzten 10 Sekunden). JobHeaderFormat 0xAC59 FBD_TELEGRAMM

| Name | Type | Description |
| --- | --- | --- |
| FBD_EMPFAENGER_EMPFANGSMODUS | unsigned char | Das Argument enthält den Empfangsmodus, der für die nächsten 10 Sekunden aktiviert werden soll. Hinweise: - 0= FBD-Empfänger in Empfangsmodus zum Durchlassen aller Telegramme (WUP inaktiv, d.h. alle Tastenbetätigung IDG, THS und FFB - auch fremde WUP werden durchgelassen, nur über Low-Speed 5kbit). Anmerkung: Sollte eine Anforderung z.B. zur Umschaltung auf High-Speed durch CA erfolgen, so wird der normale CA-Ablauf gestartet und dieser Modus automatisch durch das CAS beendet. - 1= FBD-Empfänger in Empfangsmodus normal (WUP aktiv, d.h. nur bekannte Telegramme durchlassen) und FBD-Empfänger ist dauerhaft an - 2= FBD-Empfänger in Empfangsmodus normal (WUP aktiv) und zusätzlich beliebige Init-Telegramme von THS und FFB werden durchlassen - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FBD_EMPFAENGER_EMPFANGSMODUS |

### STATUS_SCHLUESSELDATEN

Den Status eines Schlüssel laut Transpondertabelle ausgeben. Anmerkung: Die Informationen sind unabhängig von einem evtl. gerade vorhandenen Transponder in der Ringspule bzw. einem erkannten ID-Geber. JobHeaderFormat 0xAC5A STATUS_SCHLUESSELDATEN

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Das Argument enthält die Kennzahl für die Auswahl des zu lesenden Schlüssels, Telestart-Handsender oder der Fond-Fernbedienung. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_SCHLUESSEL_POSITION. |

### STATUS_WIPPE_CENTERLOCK

Auslesen Status Centerlock-Wipp-Schalter STATUS_WIPPE_CENTERLOCK 

_No arguments._

### STATUS_WIPPE_HECKKLAPPE

Auslesen Status HECKKLAPPE-Wipp-Schalter STATUS_WIPPE_HECKKLAPPE 

_No arguments._

### STEUERN_IO_CL_WIPPE

JobHeaderFormat 0xDC7C STEUERN_IO_CL_WIPPE

| Name | Type | Description |
| --- | --- | --- |
| ARG_CTRL_OPTION | unsigned char | . |
| ARG_WIPPE_CENTERLOCK_ENTRIEGELN | unsigned char | . |
| ARG_WIPPE_CENTERLOCK_VERRIEGELN | unsigned char | . |
| ARG_UNGUELTIG | unsigned char | . |

### STEUERN_IO_HK_WIPPE

JobHeaderFormat 0xDC7C STEUERN_IO_HK_WIPPE

| Name | Type | Description |
| --- | --- | --- |
| ARG_CTRL_OPTION | unsigned char | . |
| ARG_WIPPE_HECKKLAPPE_INNEN_OEFFNEN | unsigned char | . |
| ARG_WIPPE_HECKKLAPPE_INNEN_SCHLIESSEN | unsigned char | . |
| ARG_UNGUELTIG | unsigned char | . |

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
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
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

### ARG_0XAA7C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELV_AKTION | + | - | 0-n | - | unsigned char | - | TAB_CAS_ELV_AKTION | - | - | - | - | - | Das Argument enthält die durchzuführende ELV-Aktion. Hinweis: Bei Anstossen eines Herstelldaten-Updates werden nur die im CAS gespeicherten Werte aktualisiert. Das eigentliche Auslesen der Herstelldaten erfolgt über den Standardjob SENSOREN_IDENT. 0 = Entriegeln 1 = Verriegeln 2 = Nur für Entwicklungszwecke: Full-Cycle (Kompletter Zyklus Verriegeln + Entriegeln) 4 = Herstelldaten-Update (=Auslesen der Herstellerdaten aus der ELV und Aktualiserung der gespeicherten Werte im CAS) 5 = Fehlerzähler (Escape-Counter) löschen - ELV-Master + ELV-SG 6 = FullCycle-Merker löschen |

### ARG_0XAC51

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEAKTIVIERUNGSGESCHWINDIGKEIT | + | - | km/h | - | unsigned char | - | - | - | - | - | 0.0 | 50.0 | Das Argument gibt an bei welcher Geschindigkeit die Funktion KL15-Abschaltung wieder aktiviert werden soll. Hinweise: - Mit Argument = 0 soll die KL-15-Abschaltung sofort wieder aktiviert werden können. - Mit Argument = 1 - 50 wird die KL15-Abschaltung unterdrücken bis nächstes Mal Fahrzeuggeschwindigkeit über xx Kmh. |

### ARG_0XAC57

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_AKTION | + | - | 0-n | - | unsigned char | - | TAB_ZV_AKTION | - | - | - | - | - | Das Argument enthält die auszuführende ZV-Aktion.  Mögliche Argumente sind:  0=keine Aktion 1=Entriegeln 2=Verriegeln 4=Selektiv Entriegeln Fahrertür 5=Selektiv Entriegeln Heckklappe (ab L7) 6=Selektiv Entriegeln Heckscheibe (ab L7) |

### ARG_0XAC5B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | - | - | unsigned char | - | - | - | - | - | - | - | Das (optionale) Argument dient dazu die Transponderspule zu aktivieren oder deaktivieren. 0 = Transponderspule für 10 Sekunden aktivieren (default) 1 = Transponderspule sofort deaktivieren Hinweis: Wird das Argument nicht angegeben, so wird der Defaultwert 0 verwendet. |

### ARG_0XDAB9

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS | - | - | - | - | - | Das Argument ermöglicht die ELV-Sperre, KL50-Sperre oder den Präsentations-Modus zu aktivieren oder alle Sperren zu deaktivieren. Hinweise: - Zuordnung erfolgt über Tabelle TAB_CAS_MONTAGEMODUS. |

### ARG_0XDAC4

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAGE_FT_ER_SPERRE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Entriegeln-Leitung TAGE Fahrerseite vorne entsperrt oder gesperrt. 0 = Sperren; 1= Entsperren |
| TAGE_FT_DATA_SPERRE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Daten-Leitung TAGE Fahrerseite vorne entsperrt oder gesperrt. 0 = Sperren; 1= Entsperren |
| TAGE_BFT_ER_SPERRE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Entriegeln-Leitung TAGE Beifahrerseite vorne entsperrt oder gesperrt. 0 = Sperren; 1= Entsperren |
| TAGE_BFT_DATA_SPERRE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Daten-Leitung TAGE Beifahrerseite vorne entsperrt oder gesperrt. 0 = Sperren; 1= Entsperren |
| TAGE_FTH_ER_SPERRE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Entriegeln-Leitung TAGE Fahrerseite hinten entsperrt oder gesperrt. 0 = Sperren; 1= Entsperren |
| TAGE_FTH_DATA_SPERRE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Daten-Leitung TAGE Fahrerseite hinten entsperrt oder gesperrt. 0 = Sperren; 1= Entsperren |
| TAGE_BFTH_ER_SPERRE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Entriegeln-Leitung TAGE Beifahrerseite hinten entsperrt oder gesperrt. 0 = Sperren; 1= Entsperren |
| TAGE_BFTH_DATA_SPERRE | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Daten-Leitung TAGE Beifahrerseite hinten entsperrt oder gesperrt. 0 = Sperren; 1= Entsperren |

### ARG_0XDC54

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAENDLER_NUMMER | - | - | string[5] | - | - | - | - | - | - | - | Das Argument enthält die 5-stellige Händlernummer. Im Werk ist dieser Wert = 00000. |
| ERSTZULASSUNGSDATUM_TAG | - | - | unsigned char | - | - | - | - | - | 1.0 | 31.0 | Das Argument enthält den Tag des Erstzulassungsdatums. Im Werk: dieser Wert = Tag der Schlüssel-Initialisierung. |
| ERSTZULASSUNGSDATUM_MONAT | - | - | unsigned char | - | - | - | - | - | 1.0 | 12.0 | Das Argument enthält den Monat des Erstzulassungsdatums.  Im Werk: dieser Wert = Monat der Schlüssel-Initialisierung. |
| ERSTZULASSUNGSDATUM_JAHR | - | - | unsigned int | - | - | - | - | - | 2000.0 | 9999.0 | Das Argument enthält das Jahr des Erstzulassungsdatums.  Im Werk ist dieser Wert = Jahr der Schlüssel-Initialisierung. Wertebereich 2000 - 9999. |

### ARG_0XDC60

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HALL_SST | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand des Hallsensors SST A und B. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDC61

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTER_BREMSL | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand des Bremslichtschalters High-Schaltend und Low-Schaltend. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDC62

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINGANG_A_S_START | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG_PEGEL | - | - | - | - | - | Das Argument enthält den zu vorgebenden Zustand für den Eingang für die Signalisierung des Motorstartendes durch die Motorsteuerung. Hinweise: - Zuordnung gemäß Tabelle TAB_CAS_DIGITAL_EINGANG_PEGEL. |

### ARG_0XDC63

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTER_KUPPL_PN | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang des Kupplungsschalters (Manuelles Getriebe) oder PN-Signal (Automatikgetriebe vom EGS. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC64

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_CENTERLOCK | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Centerlock-Taster. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC65

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTER_MOTORHAUBE | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Motorhaubenkontakt-Schalter. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC66

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTER_HOTEL | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang HOTEL-Schalter. Hinweise: - Zurodnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG |

### ARG_0XDC67

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_MSA | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Taster der Motor-Start-Automatik. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC68

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_SICHERN_HECKKL | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Taster zum Zentralsichern der Heckklappe. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC69

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_HECKKL_INNEN | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Taster zum Entriegeln der Heckklappe Innen (TOEHKI). Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### ARG_0XDC6A

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINGANG_MOST_WUP | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG_PEGEL | - | - | - | - | - | Das Argument enthält den zu vorzugebenden Zustand des Weckeingangs MOST_WUP zum Wecken durch die TCU. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG_PEGEL |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | kein Betriebsmode |
| 0x01 | Spezieller Energiesparmode | Automatische Deaktivierung der KL15, Funkfernbedienung (Fzg. Öffnen, Fzg. Sichern), Centerlocktaster, TAGE vorne+hinten, (Fzg.-Zugang und Fzg.-Sichern) deaktiviert - Nachlaufzeit KL30B und aktive Zeit KL15R reduziert - Sofortiger Sprung nach Motor aus auf KL0  bei Langdruck und Kurzdruck |
| 0x02 | ECOS Mode | Automatische Deaktivierung der KL15 und Funkfernbedienung (Heckklappenöffner) deaktiviert |
| 0x03 | MOST-Mode | Automatische Deaktivierung der KL15, Funkfernbedienung (Fzg. Öffnen, Fzg. Sichern), Centerlocktaster, TAGE vorne+hinten, (Fzg.-Zugang und Fzg.-Sichern) deaktiviert - Nachlaufzeit KL30B und aktive Zeit KL15R reduziert - Sofortiger Sprung nach Motor aus auf KL0 bei Langdruck und Kurzdruck |
| 0x04 | Betriebsmode 4 | Automatische Deaktivierung der KL15 deaktiviert |
| 0x05 | Betriebsmode 5 | Automatische Deaktivierung der KL15 deaktiviert |
| 0x06 | Rollenmode | Automatische Deaktivierung der KL15 deaktiviert |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | ja |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x024000 | Energiesparmode aktiv | 1 |
| 0x02FF40 | Diagnose Master: Test DTC APPL | 1 |
| 0x930700 | Unterspannung KL30L/KL30E | 1 |
| 0x930701 | Überspannung KL30L/KL30E | 1 |
| 0x930704 | CAS4-Versorgung KL30L: Unterspannung | 1 |
| 0x930706 | CAS4-Versorgung KL30E: Unterspannung | 1 |
| 0x93070A | Interner HW-Fehler: SG-Tausch | 0 |
| 0x93070B | Interner SW-Fehler: Neue SW flashen | 0 |
| 0x93070C | SPI-Bus: Kommunikationsfehler zwischen Haupt- und Cocontroller | 0 |
| 0x93070D | Interner HW-Fehler: RAM-,ROM-,Watchdog-,Opcode-,Registerprüfungen im Haupt- oder Cocontroller fehlgeschlagen oder ELV-HW-Erkennung unplausibel | 0 |
| 0x930710 | Bremslichtschalter BLSL/BLSH: Kurzschluss BLSL nach Batteriespannung oder Kurzschluss BLSH nach Masse oder Leitungsunterbrechung BLSL/BLSH oder Bremslichtschalter nicht gesteckt | 0 |
| 0x930711 | Bremslichtschalter BLSL/BLSH: Kurzschluss BLSL nach Masse und/oder Kurzschluss BLSH nach Batteriespannung | 0 |
| 0x930712 | Bremslichtschalter BLSL/BLSH: Schalter hängt oder interner HW-Fehler | 0 |
| 0x930713 | Bremslichtschalter BLSL/BLSH: Plausibilisierungsfehler gegenüber CAN-Signal | 1 |
| 0x930714 | HW-Eingänge: Wecken durch toggelndes Signal  | 0 |
| 0x930719 | Kupplungssignal PN_KUPPL: Plausibilisierungsfehler gegenüber CAN-Signal | 0 |
| 0x93071A | Kupplungssignal PN_KUPPL: Kurzschluss Batteriespannung | 0 |
| 0x930725 | Komfortstartleitung A_S_START: Kurzschluss Masse | 0 |
| 0x930726 | Komfortstartleitung A_S_START: Plausibilisierungsfehler gegenüber CAN-Signal | 0 |
| 0x930729 | Geschwindigkeitssignal DFA_EMF: Kurzschluss Masse | 0 |
| 0x93072A | Geschwindigkeitssignal DFA_EMF: Kurzschluss Batteriespannung oder Leitungsunterbrechung | 0 |
| 0x93072B | Geschwindigkeitssignal DFA_EMF: Ungültiger Frequenzwert | 0 |
| 0x93072C | Geschwindigkeitssignal DFA_EMF: Unplausibel | 0 |
| 0x930730 | Treiber KL50L: Stromüberlast | 0 |
| 0x930732 | Fehler Motorstart bei Anlasserbetrieb: Relaiskleber | 0 |
| 0x930733 | Fehler Motorstart bei Anlasserbetrieb: Keine Drehzahl bei Ansteuerung | 1 |
| 0x930734 | Fehler Motorstart bei Anlasserbetrieb: Anlasserrelais defekt | 0 |
| 0x930740 | Treiber KL15WUP: Kurzschluss Masse | 0 |
| 0x930741 | Treiber KL15WUP: Kurzschluss Batteriespannung | 0 |
| 0x930742 | Treiber KL15WUP_RS: Kurzschluss Masse | 0 |
| 0x930743 | Treiber KL15WUP_RS: Kurzschluss Batteriespannung | 0 |
| 0x930745 | Treiber KL30B1: Kurzschluss Masse | 0 |
| 0x930746 | Treiber KL30B1: Kurzschluss Batteriespannung | 0 |
| 0x930749 | Treiber KL30B2: Kurzschluss Masse | 0 |
| 0x93074A | Treiber KL30B2: Kurzschluss Batteriespannung | 0 |
| 0x93074E | Treiber KL30B3: Kurzschluss Masse | 0 |
| 0x93074F | Treiber KL30B3: Kurzschluss Batteriespannung | 0 |
| 0x930750 | Treiber KL15: Kurzschluss Masse | 0 |
| 0x930751 | Treiber KL15: Kurzschluss Batteriespannung | 0 |
| 0x930753 | Treiber KL15-1: Kurzschluss Masse | 0 |
| 0x930754 | Treiber KL15-1: Kurzschluss Batteriespannung | 0 |
| 0x930757 | Treiber KL15-2: Kurzschluss Masse | 0 |
| 0x930758 | Treiber KL15-2: Kurzschluss Batteriespannung | 0 |
| 0x93075B | Treiber KL15-3: Kurzschluss Masse | 0 |
| 0x93075C | Treiber KL15-3: Kurzschluss Batteriespannung | 0 |
| 0x93075F | Treiber KL15N: Kurzschluss Masse | 0 |
| 0x930760 | Treiber KL15N: Kurzschluss Batteriespannung | 0 |
| 0x930769 | Deaktivierung Klemme 15: OSFG erreicht | 1 |
| 0x93076A | Deaktivierung Klemme 15: OSFG erreicht, jedoch Abschaltverhinderer aktiv | 1 |
| 0x93076B | Deaktivierung Klemme 30B: OSFG erreicht | 1 |
| 0x93076C | Deaktivierung Klemme 30B: OSFG erreicht, jedoch Abschaltverhinderer oder gesetzlicher Verbraucher aktiv | 1 |
| 0x930770 | Taster Center Lock (CLT): Dauerbetätigung | 0 |
| 0x930772 | Taster Entriegeln Hecklappe Innen(TOEHKI): Dauerbetätigung | 0 |
| 0x930773 | Taster Zentralsichern Heckklappe(TZSHK): Dauerbetätigung | 0 |
| 0x930776 | Schließzylinder: Dauersignal schließen | 1 |
| 0x930777 | Schließzylinder: Dauersignal öffnen | 1 |
| 0x930778 | FBD: Dauerbetätigung | 0 |
| 0x93077A | ZV-Befehl wurde von ausführendem SG nicht erfolgreich durchgeführt | 1 |
| 0x930780 | Antenne Stoßfänger (SF): Kurzschluss, offene Leitung oder defekt | 0 |
| 0x930784 | Antenne Innenraum vorn (IRV): Kurzschluss, offene Leitung oder defekt | 0 |
| 0x930788 | Antenne Fahrertür/-seite (FT): Kurzschluss, offene Leitung oder defekt | 0 |
| 0x93078C | Antenne Beifahrertür/-seite (BFT): Kurzschluss, offene Leitung oder defekt | 0 |
| 0x930790 | Antenne Innenraum hinten (IRH): Kurzschluss, offene Leitung oder defekt | 0 |
| 0x930794 | Antenne Hut-Ablage (HA): Kurzschluss, offene Leitung oder defekt | 0 |
| 0x930798 | Antenne Kofferraum links (KRLI): Kurzschluss, offene Leitung oder defekt | 0 |
| 0x93079C | Antenne Kofferraum rechts (KRRE): Kurzschluss, offene Leitung oder defekt | 0 |
| 0x9307A0 | TAGE Fahrertür/-seite (FT): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x9307A1 | TAGE Fahrertür/-seite (FT): Unzulässiger Stromwert auf Entriegeln-Leitung | 0 |
| 0x9307A2 | TAGE Fahrertür/-seite (FT): Plausibilisierung Entriegeln-Leitung gegen DATA-Leitung | 0 |
| 0x9307A3 | TAGE Fahrertür/-seite (FT): Dauerbetätigung | 0 |
| 0x9307A7 | TAGE Fahrertür/-seite hinten (FTH): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x9307A8 | TAGE Beifahrertür/-seite (BFT): Unzulässiger Stromwert auf  Entriegeln-Leitung | 0 |
| 0x9307A9 | TAGE Beifahrertür/-seite (BFT): Plausibilisierung Entriegeln-Leitung gegen DATA-Leitung | 0 |
| 0x9307AA | TAGE Beifahrertür/-seite (BFT): Dauerbetätigung | 0 |
| 0x9307AE | TAGE Beifahrertür/-seite (BFT): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x9307AF | TAGE Fahrertür/-seite hinten (FTH): Unzulässiger Stromwert auf Entriegeln-Leitung | 0 |
| 0x9307B0 | TAGE Fahrertür/-seite hinten (FTH): Plausibilisierung Entriegeln-Leitung gegen DATA-Leitung | 0 |
| 0x9307B1 | TAGE Fahrertür/-seite hinten (FTH): Dauerbetätigung | 0 |
| 0x9307B5 | TAGE Beifahrertür/-seite hinten (BFTH): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x9307B6 | TAGE Beifahrertür/-seite hinten (BFTH): Unzulässiger Stromwert auf  Entriegeln-Leitung | 0 |
| 0x9307B7 | TAGE Beifahrertür/-seite hinten (BFTH): Plausibilisierung Entriegeln-Leitung gegen DATA-Leitung | 0 |
| 0x9307B8 | TAGE Beifahrertür/-seite hinten (BFTH): Dauerbetätigung | 0 |
| 0x9307BA | Eine oder mehrere TAGE gesperrt wegen Spielschutz | 0 |
| 0x9307C0 | Hallsensor SSPA: Kurzschluss Masse | 0 |
| 0x9307C1 | Hallsensor SSPA: Kurzschluss Batteriespannung | 0 |
| 0x9307C2 | Start-Stopp-Taster SST: Fehlbetätigung (Schrägdruck) | 1 |
| 0x9307C4 | Hallsensor SSPB: Kurzschluss Masse | 0 |
| 0x9307C5 | Hallsensor SSPB: Kurzchluss Batteriespannung | 0 |
| 0x9307CB | Treiber VCC_HALL1: Kurzschluss Masse | 0 |
| 0x9307CC | Treiber VCC_HALL1: Kurzschluss Batteriespannung | 0 |
| 0x9307CD | Treiber VCC_HALL2: Kurzschluss Masse | 0 |
| 0x9307CE | Treiber VCC_HALL2: Kurzschluss Batteriespannung | 0 |
| 0x9307E0 | Transponderspule: Basestation oder Antenne | 0 |
| 0x9307E1 | Kryptodaten in einem Schlüssel | 1 |
| 0x9307E3 | Transponderspule: Fehler Ersatzschlüsselanlernen | 1 |
| 0x9307E5 | Transponderspule: Gesperrter Schlüssel gefunden | 1 |
| 0x9307E6 | Transponderspule: Fremdschlüssel nicht dem Fahrzeug zugehörig | 1 |
| 0x930800 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Schwerer HW-Fehler ?C | 0 |
| 0x930801 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Kurzschluss KL31_ELV_VR gegen Masse | 0 |
| 0x930802 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Sensorstatus nicht vertrauenswürdig | 0 |
| 0x930804 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Fehler H-Brücke | 0 |
| 0x930805 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - HW-Fehler Sensor | 0 |
| 0x930806 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Überlast Motorbrücke | 0 |
| 0x930807 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - ELV Spannungversorgung | 0 |
| 0x930808 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Fehler EEPROM | 0 |
| 0x930809 | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Authentisierungsfehler | 0 |
| 0x93080A | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Keine Motoraktivierung | 0 |
| 0x93080B | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - ELV-Master-Request abgelehnt (Timeout / doppelte Anfrage) | 0 |
| 0x93080C | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Timeout bei Motorentriegelung (Verspannte Lenksäule) | 0 |
| 0x93080D | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Timeout bei Motorverriegelung | 0 |
| 0x93080E | Elektrische Lenksäulenverriegelung (ELV): ELV-SG - Fehlerhafte Requestbotschaft vom ELV-Master | 0 |
| 0x930810 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Kurzschluss KL31_ELV_VR gegen Batteriespannung | 0 |
| 0x930811 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Kurzschluss KL31_ELV_VR gegen Masse | 0 |
| 0x930812 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Kurzschluss KL30_ELV gegen Batteriespannung | 0 |
| 0x930813 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Kurzschluss KL30_ELV gegen Masse | 0 |
| 0x930814 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Timeout bei Warten auf ELV-Statusbotschaft nach PowerOn des ELV-SG | 0 |
| 0x930816 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Timeout bei Warten auf den ELV-Statusbotschaft nach Request (Entriegeln) vom ELV -Master | 0 |
| 0x930817 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Timeout bei Warten auf ELV-Statusbotschaft nach Request (Verriegeln) vom ELV-Master | 0 |
| 0x930818 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Timeout bei Warten auf ELV-Statusbotschaft nach Anfrage-Abschaltung vom ELV -Master | 0 |
| 0x930819 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Fehlerhafter Roll-Counter in der Status-Botschaft vom ELV-SG | 0 |
| 0x93081A | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Fehlerhafter ELV-Status in der Status-Botschaft vom ELV-SG | 0 |
| 0x93081B | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Permanente Ansteuerung Lowside-ELV-Treiber (KL31_ELV_VR) | 0 |
| 0x93081C | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Permanente Ansteuerung Highside-ELV-Treiber (KL30_ELV) | 0 |
| 0x93081D | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Ausfall der Ansteuerung Lowside-ELV-Treiber (KL31_ELV_VR) | 0 |
| 0x93081E | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Ausfall der Ansteuerung Highside-ELV-Treiber (KL30_ELV) | 0 |
| 0x93081F | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Ansteuerungslogik Lowside-ELV-Treiber | 0 |
| 0x930830 | K-BUS: Physikalischer Busfehler | 0 |
| 0x930831 | DME K-Bus-Botschaft EWS4 fehlt | 1 |
| 0x930832 | K-BUS: Botschaftsfehler (falsche Checksumme) | 0 |
| 0x930836 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Ansteuerungslogik Highside-ELV-Treiber | 0 |
| 0x930840 | FBD-Empfänger 1: RAM/ROM/EEPROM-Speicher | 0 |
| 0x930841 | FBD-Empfänger 1: Falscher Typ verbaut: Frequenz oder LIN-Katalog nicht kompatibel | 0 |
| 0x930848 | FBD-Empfänger 2: RAM/ROM/EEPROM-Speicher | 0 |
| 0x930849 | FBD-Empfänger 2: Falscher Typ verbaut: Frequenz oder LIN-Katalog nicht kompatibel | 0 |
| 0x930890 | EWS: DME/DDE Sekret Key nicht geschrieben bzw. nicht verriegelt | 0 |
| 0x9308A0 | Telestarthandsender(THS): Unterspannung Batterie | 0 |
| 0x9308A7 | Fond-Fernbedienung (FFB): Unterspannung Batterie | 0 |
| 0x9308B0 | ID-Geber (IDG): Unterspannung Batterie | 0 |
| 0x9308E0 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x9308E1 | Codierung: Fehler während der Codierdaten-Transaktion aufgetreten | 0 |
| 0x9308E2 | Codierung: Signatur über Nettocodierdaten ist ungültig | 0 |
| 0x9308E3 | Codierung: Steuergerät ist nicht für das Fahrzeug codiert, in welchem es verbaut ist | 0 |
| 0x9308E4 | Codierung: Die während einer Codierdaten-Transaktion gesendeten Daten sind unplausibel | 0 |
| 0xD9045F | Body-CAN Bus | 0 |
| 0xD90468 | Body-CAN Control Module Bus OFF | 1 |
| 0xD90BFF | Diagnose Master: Test DTC COM | 0 |
| 0xD90D1E | LIN Bus Error FBD-Empfänger 1 | 0 |
| 0xD90D1F | LIN Bus Error FBD-Empfänger 2 | 0 |
| 0xD90D20 | LIN_X Bus Error Slave 3 | 0 |
| 0xD90D21 | LIN_X Bus Error Slave 4 | 0 |
| 0xD91400 | DME CAN-Botschaft EWS4: Fehlt oder ungültiger Inhalt | 1 |
| 0xD91410 | DME CAN-Botschaft Datenantriebsstrang: Fehlt oder CRC-Fehler | 1 |
| 0xD91411 | DME CAN-Botschaft Datenantriebsstrang: Alive | 1 |
| 0xD91420 | ICM CAN-Botschaft Geschwindigkeit Fahrzeug: Ausfall oder ungültige Signalinhalte (V_VEH_COG,ST_V_VEH_NSS, Alive, Qualifier, CRC) | 1 |
| 0xD91421 | ICM CAN-Botschaft Geschwindigkeit Fahrzeug: Qualifierwert | 1 |
| 0xD91422 | ICM CAN-Botschaft Geschwindigkeit Fahrzeug: Alive | 1 |
| 0xD91430 | Coach Door Modul (CDM): Funktionsstörung | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x40D0 | CAS Komponenten | 0-n | - | 0xFF | TAB_CAS_UW_CPU_KOMPONENTEN | - | - | - |
| 0x40D1 | ELV Fehler | - | - | unsigned char | - | - | - | - |
| 0x40D2 | ELV Status Fehler | 0-n | - | 0xFF | TAB_CAS_UW_ELV_STATUS_FEHLER | - | - | - |
| 0x40D3 | Botschaftsfehler | 0-n | - | 0xFF | TAB_CAS_UW_BOTSCHAFTSFEHLER | - | - | - |
| 0x40D4 | Botschaftsfehler_Datenantriebsstrang2 | 0-n | - | 0xFF | TAB_CAS_UW_BOTSCHAFTSFEHLER | - | - | - |
| 0x40D5 | TAGE Dauerbetätigung Ursache  | 0-n | - | 0xFF | TAB_CAS_UW_DAUERBETAETIGUNG_TAGE | - | - | - |
| 0x40E0 | Interner ELV-Status - Cocontroller | 0-n | - | 0xFF | TAB_CAS_UW_ELV_STATUS | - | - | - |
| 0x40E1 | Interner ELV-Status - Hauptcontroller | 0-n | - | 0xFF | TAB_CAS_UW_ELV_STATUS | - | - | - |
| 0x40E2 | Interner Status Fahrzeugstillstandserkennung - Cocontroller | 0-n | - | 0xFF | TAB_CAS_UW_STATUS_FAHRZEUGSTILLSTANDSERKENNUNG | - | - | - |
| 0x40E3 | Interner Status Fahrzeugstillstandserkennung - Hauptcontroller | 0-n | - | 0xFF | TAB_CAS_UW_STATUS_FAHRZEUGSTILLSTANDSERKENNUNG | - | - | - |
| 0x40E4 | Interner Status Motorstillstandserkennung - Cocontroller | 0-n | - | 0xFF | TAB_CAS_UW_STATUS_MOTORSTILLSTANDSERKENNUNG | - | - | - |
| 0x40E5 | Interner Status Motorstillstandserkennung - Hauptcontroller | 0-n | - | 0xFF | TAB_CAS_UW_STATUS_MOTORSTILLSTANDSERKENNUNG | - | - | - |
| 0x40F0 | Spannung KL30E | Volt | - | unsigned int | - | - | - | - |
| 0x40F1 | Spannung KL30L | Volt | - | unsigned int | - | - | 1000 | - |
| 0x40F2 | Spannung KL30_ELV | Volt | - | unsigned char | - | - | 10 | - |
| 0x40F3 | Spannung KL31_ELV_VR | Volt | - | unsigned char | - | - | 10 | - |
| 0x40F4 | ELV-Fehlerzähler (Escape-Counter) ELV-Master | - | - | unsigned char | - | - | - | - |
| 0x40F5 | ELV-Fehlerzähler (Escape-Counter) ELV-SG | - | - | unsigned char | - | - | - | - |
| 0x40F6 | Verbauort TAGE | 0-n | - | 0xFF | TAB_CAS_UW_VERBAUORT_TAGE | - | - | - |
| 0x40F7 | HW Eingang | 0-n | - | 0xFF | TAB_CAS_UW_HW_EINGANG | - | - | - |
| 0x40F8 | Zeitdauer KL15 | Minuten | - | unsigned char | - | - | - | - |
| 0x40FA | Schlüsselposition | 0-n | - | 0xFF | TAB_CAS_UW_SCHLUESSEL_POSITION | - | - | - |
| 0x40FB | Abschaltverhinderer Klemme 15 | 0-n | - | 0xFF | TAB_CAS_UW_ABSCHALTVERHINDERER_KL15 | - | - | - |
| 0x40FC | Abschaltverhinderer Klemme 30B | 0-n | - | 0xFF | TAB_CAS_UW_ABSCHALTVERHINDERER_KL30B | - | - | - |
| 0x40FD | Schlüsselposition | 0-n | - | 0xFF | TAB_CAS_UW_SCHLUESSEL_POSITION | - | - | - |
| 0x40FF | Fehlerart | HEX | - | unsigned char | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | ja |
| F_SEVERITY | nein |

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
| 0x930820 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Timeout bei Warten auf ELV-Herstellerdaten nach Request (Herstellerdatenanfrage) vom ELV -Master | 0 |
| 0x930821 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - PowerOff-Bit in der Status-Botschaft vom ELV-SG nicht gesetzt | 0 |
| 0x930822 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Wiederholstrategie Escape erfolgreich | 0 |
| 0x930823 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Wiederholstrategie Full-Cycle erfolgreich | 0 |
| 0x930824 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Wiederholstrategie Sequenzwiederholung erfolgreich | 0 |
| 0x930825 | Elektrische Lenksäulenverriegelung (ELV): ELV-Master - Wiederholstrategie Botschaft -Erneut-Senden erfolgreich | 0 |
| 0x930850 | Fehler Freigabe CoProzessor | 0 |
| 0x93085E | Interner SW-Fehler: Logik-Fehler in der Klemmensteuerungs-Statemachine | 0 |
| 0x930860 | DFZ: Authentisierung fehlgeschlagen, Sekret Key ungültig | 1 |
| 0x930861 | Fahrbereitschaft bei ZV sichern | 0 |
| 0x930862 | KL15 Abschaltung ueber Timeout | 0 |
| 0x930870 | Schlüsseldaten-Service: Kein Schlüssel am Transponder erkannt | 1 |
| 0x930880 | Remote Door Unlock(RDU): Erfolgreich durchgeführt | 1 |
| 0x930881 | Remote Door Unlock(RDU): Ungültige Anforderung über CAN | 1 |
| 0x930882 | Remote Door Unlock(RDU): Abbruch, da Fahrzeug fährt | 1 |
| 0x930883 | Remote Door Unlock(RDU): Abbruch aufgrund Motorstart oder Wiederholsperre ZV | 1 |
| 0x930884 | Remote Door Unlock(RDU): Abbruch aufgrund von Kodieroption die RDU verhindert | 1 |
| 0x930888 | Remote Door Lock(RDL) durchgeführt | 1 |
| 0x930889 | Remote Door Lock(RDL): Ungültige Anforderung über CAN | 1 |
| 0x93088A | Remote Door Lock(RDL): Abbruch, da Fahrzeug fährt | 1 |
| 0x93088B | Remote Door Lock(RDL): Abbbruch aufgrund Motorstart oder Wiederholsperre ZV oder Fahrertüre offen | 1 |
| 0x93088C | Remote Door Lock(RDL): Abbruch aufgrund von Kodieroption die RDL verhindert | 1 |
| 0x9308D0 | Diagnose Master: Zeitbotschaft Timeout | 1 |
| 0x9308D1 | Diagnose Master: Puffer für ausgehende Fehlermeldungen ist voll | 0 |
| 0x9308D2 | Diagnose Master: Fehler konnte nachmaximaler Anzahl an Versuchen nicht gesendet werden. | 0 |
| 0x9308D6 | PIA: IO Fehler | 0 |
| 0x9308E7 | EEPROM: Schreibfehler NVM_E_WRITE_FAILED | 0 |
| 0x9308E8 | EEPROM: Lesefehler NVM_E_READ_FAILED | 0 |
| 0x9308E9 | EEPROM: Ansteuerungsfehler NVM_E_CONTROL_FAILED | 0 |
| 0x9308EA | EEPROM: Löschfehler NVM_E_ERASE_FAILED | 0 |
| 0x9308EB | EEPROM: Schreibfehler NVM_E_WRITE_ALL_FAILED | 0 |
| 0x9308EC | EEPROM: Konfigurationsfehler NVM_E_WRONG_CONFIG_ID | 0 |
| 0x9308ED | EEPROM: Lesefehler NVM_E_READ_ALL_FAILED | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0XAA7C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELV_AUSFUEHRUNGSSTATUS | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_ELV_AUSFUEHRUNGSSTATUS | - | - | - | Das Ergebnis liefert bei der  Ausführung der angeforderten Aktion u.U. aufgetretene Fehler. Hinweis:  Es wird nur der erste aufgetretene Fehler zurückgeliefert. Zuordnung erfolgt gemäß Tabelle TAB_CAS_ELV_AUSFUEHRUNGSSTATUS |
| STAT_ELV_ZUSTAND | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_ELV_ZUSTAND | - | - | - | Das Ergebnis liefert den aktuellen Verriegelungs-/Entriegelungszustand der ELV. |
| STAT_FEHLERZAEHLER_ELV_MASTER_WERT | + | - | - | - | - | unsigned char | - | - | - | - | - | Das Ergebnis liefert den aktuellen Wert des ELV-Master-Escape-Fehlerzählers (Escape-Counter ELV-Master) 0 ... 254 = Wert des Fehlerzählers 255 = Ungültig/Unbekannt |
| STAT_FEHLERZAEHLER_ELV_SG_WERT | + | - | - | - | - | unsigned char | - | - | - | - | - | Das Ergebnis liefert den aktuellen Wert des ELV-SG-Escape-Fehlerzählers (Escape-Counter ELV-SG). 0 ... 254 = Wert des Fehlerzählers 255 = Ungültig/Unbekannt |
| STAT_FULLCYCLE_MERKER | + | - | - | 0-n | - | unsigned char | - | TAB_ELV_FULL_CYCLE_MERKER | - | - | - | Das Ergebnis gibt an, ob der Full-Cycle Merker (Flag) im CAS gesetzt ist oder nicht. 0 = Kein Full-Cycle-Merker gesetzt 1 = Full-Cycle-Merker gesetzt 255 = Ungültig/Unbekannt |

### RES_0XAC57

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_STATUS | + | - | - | 0-n | - | unsigned char | - | TAB_ZV_ZUSTAND | - | - | - | Das Ergebnis enthält den aktuell auf den Bus gesendeten Zentralverriegelungsstatus.  Hinweise: - Dieser wird als globaler ZV-Zustand auf den CAN-Bus gesendet (Signal ST_CLSY). - Die Zuordnung erfolgt gemäß Tabelle TAB_ZV_ZUSTAND. |

### RES_0XAC58

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FBD_EMPFAENGER_INIT | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_FBD_EMPFAENGER_INIT_STATUS | - | - | - | Ergebnis-Status der Routine. Gibt Aufschluß über evtl. aufgetretene Fehler. Hinweise: - Die Zuordnung erfolgt gemäß Tabelle TAB_CAS_FBD_EMPFAENGER_INIT_STATUS. |

### RES_0XDAB3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KLEMME_30B_1_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 30B_1. Bei Alt-Baureihen entspricht dies Klemme R am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_30B_2_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 30B_2. Bei Alt-Baureihen entspricht dies Klemme R am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_30B_3_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 30B_3. Bei Alt-Baureihen entspricht dies Klemme R am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_15WUP_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 15_WUP am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_15N_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 15_N am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_15_1_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 15_1 am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_15_2_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 15_2 am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_15_3_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 15_3 am CAS Ausgang. |
| STAT_STROM_KLEMME_15_50_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Stromwert an Klemme 15 und 50 am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_50_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 50  am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_50MSA_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 50_MSA am CAS Ausgang. |
| STAT_STROM_LF_WERT | A | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Stromwert an LF (CA-Antennen) am CAS Ausgang. |
| STAT_DIAG_LF_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert an LF (CA-Antennen) am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_31ELV_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 31ELV am CAS Ausgang. |
| STAT_SPANNUNG_KLEMME_30ELV_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert Klemme 30ELV am CAS Ausgang. |
| STAT_SPANNUNG_INNENTEMPERATUR_WERT | V | - | unsigned int | - | - | - | 1000.0 | - | Das Result enthält den Spannungswert am PTC/NTC im Steuergerät zur Ermittlung der Innentemperatur. |

### RES_0XDAB5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGE_ER_FT | 0-n | - | unsigned char | - | TAB_CAS_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Wert für den Status der Entriegeln-Leitung zur TAGE Fahrertüre. Hinweise: - Zuordnung über Tabelle TAB_CAS_CA_TAGE_ER_LEITUNG. |
| STAT_TAGE_ER_BFT | 0-n | - | unsigned char | - | TAB_CAS_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Wert für den Status der Entriegeln-Leitung zur TAGE Beifahrertüre. Hinweise: - Zuordnung über Tabelle TAB_CAS_CA_TAGE_ER_LEITUNG. |
| STAT_TAGE_ER_FTH | 0-n | - | unsigned char | - | TAB_CAS_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Wert für den Status der Entriegeln-Leitung zur TAGE Fahrertüre hinten. Hinweise: - Zuordnung über Tabelle TAB_CAS_CA_TAGE_ER_LEITUNG. |
| STAT_TAGE_ER_BFTH | 0-n | - | unsigned char | - | TAB_CAS_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Wert für den Status der Entriegeln-Leitung zur TAGE Beifahrertüre hinten. Hinweise: - Zuordnung über Tabelle TAB_CAS_CA_TAGE_ER_LEITUNG. |

### RES_0XDAB6

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | BESCHREIBUNG |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_SST_AKTIV | - | - | - | - | - | unsigned char | 0x01 | - | - | - | - | Das Result enthält den aktuellen Zustand des Start-Stopp-Tasters |

### RES_0XDAB9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS | - | - | - | Das Result enthält den Status der CAS Montagesperren ELV-Sperre, KL50-Sperre und Präsentations-Modus. Hinweise: - Zuordnung erfolgt über Tabelle TAB_CAS_MONTAGEMODUS |

### RES_0XDABB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_ZEIT_STUNDEN_WERT | - | - | unsigned char | - | - | - | - | - | Stunden: 0 - 23; 253 entspricht --; 254 Keine Angabe; 255 Signal ungültig |
| STAT_BUS_IN_ZEIT_MINUTEN_WERT | - | - | unsigned char | - | - | - | - | - | Minuten: 0 - 59; 253 entspricht --; 254 Keine Angabe; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_TAG_WERT | - | - | unsigned char | - | - | - | - | - | Tag: 0 - 31; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_MONAT_WERT | - | - | unsigned char | - | - | - | - | - | Monat: 1 - 12; 255 Signal ungültig |
| STAT_BUS_IN_DATUM_JAHR_WERT | - | - | unsigned int | - | - | - | - | - | Jahr: 2000 - 9999; 65535 Signal ungültig |
| STAT_BUS_IN_ZEIT_RELATIV_WERT | s | - | unsigned long | - | - | - | - | - | Aktuelle Relative Zeit in Sekunden seit 01.01.2000, Sekunden: 0 - 4,2 Millarden, 4294967295 ungültig |
| STAT_BUS_IN_ZEIT_TAGE_RELATIV_WERT | Tage | - | unsigned int | - | - | - | - | - | Aktuelle Relative Zeit in Tagen seit 01.01.2000; Tage: 1 entspricht 01.01.2000, 65535 entspricht ungültig. |

### RES_0XDABC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GANG | 0-n | - | unsigned char | - | TAB_CAS_GANG | - | - | - | Das Result enthält den aktuellen Wert für den Gang (über CAN empfangen). Hinweise:  - Der Wert wird aus CAN-Signal ST_GRSEL_DRV ermittelt. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_GANG. |
| STAT_BUS_IN_MOTOR_LAEUFT | 0-n | - | unsigned char | - | TAB_CAS_MOTOR_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für Motor läuft. Hinweise: - Der Wert wird ermittelt aus Bit 0 & 1 des CAN-Signals ST_DRV_VEH. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_MOTOR_STATUS |
| STAT_BUS_IN_MOTOR_FREIGABE | 0-n | - | unsigned char | - | TAB_CAS_MOTORSTART_FREIGABE | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Motor Freigabe. Hinweis: - Der Wert wird ermittelt aus CAN-Signal RLS_ENGSTA. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_MOTORSTART_FREIGABE |
| STAT_BUS_IN_ANLASSER_SPERRE | 0-n | - | unsigned char | - | TAB_CAS_MOTOR_ANLASSERSPERRE | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Anlassersperre. Hinweis: - Der Wert wird ermittelt aus CAN-Signal ST_ILK_STRT_DRV. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_MOTOR_ANLASSERSPERRE |
| STAT_BUS_IN_KUPPLUNG | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Kupplung. Hinweise: - Der Wert wird ermittelt aus CAN-Signal ST_SW_CLT_DRV. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. Nur die Werte 0, 1 und 255 werden zurückgeliefert. |
| STAT_BUS_IN_DREHZAHL_WERT | 1/min | - | unsigned int | - | - | - | 4.0 | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Drehzahl. Hinweise: - Der Wert wird ermittelt aus CAN-Signal AVL_RPM_ENG_CRSH. - Der Wert aus dem Telegramm wird von der SGBD durch 4 geteilt, da das Signal AVL_RPM_ENG_CRSH Viertel-Umdrehungs-genau ist. |

### RES_0XDABD

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_GESCHW_WERT | km/h | - | unsigned int | - | - | - | 64.0 | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Geschwindigkeit. Hinweise: - Der Wert wird ermittelt aus dem Signal V_VEH_COG. - Wertebereich 0-350, Ungültig 1023 - Der Rohwert wird von der SGBD durch 64 geteilt, da das Signal V_VEH_COG 64-tel-genau ist. |
| STAT_BUS_IN_GESCHW_STATUS | 0-n | - | unsigned char | - | TAB_CAS_GESCHW_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Geschwindigkeit als Status Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_GESCHW_STATUS - Der Wert wird ermittelt aus dem Signal DVCO_VEH. |
| STAT_BUS_IN_BREMSPEDAL | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für die Stellung des Bremspedals. Hinweise: - CAN-Signal Status_Bremsung_Fahrer (ST_BRG_DV), Auswertung der Bit-Kodierung Betätigung_Bremssystem_Fahrer + Gesamtsignal ungültig muss im CAS erfolgen. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDABF

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_FH_FT | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | - | - | - | CAN-Signal Status Fensterheber Fahrertür. Hinweise:  - Inhalt stammt aus CAN-Signal ST_PO_WRG_DRD. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FH_STATUS. |
| STAT_BUS_IN_FH_BFT | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | - | - | - | CAN-Signal Status Fensterheber Beifahrertür. Hinweise:  - Inhalt aus dem CAN-Signal ST_PO_WRG_PSD. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FH_STATUS. |
| STAT_BUS_IN_FH_FTH | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | - | - | - | CAN-Signal Status Fensterheber Fahrertür hinten. Hinweise:  - Inhalt aus dem CAN-Signal ST_PO_WRG_DVDR. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FH_STATUS. |
| STAT_BUS_IN_FH_BFTH | 0-n | - | unsigned char | - | TAB_CAS_FH_STATUS | - | - | - | CAN-Signal Status Fensterheber Beifahrertür hinten. Hinweise: - Inhalt aus dem CAN-Signal ST_PO_WRG_PSDR. - Zuordnung erfolgt gemäß Tabelle TAB_CAS_FH_STATUS. |

### RES_0XDAC1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_FT | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für den Status der ZV der Fahrertüre von der JBBF. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_ZV_STATUS - Inhalt aus dem CAN-Signal ST_CLSY_DRD_LCL |
| STAT_ZV_BFT | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für den Status der ZV der Beifahrertüre von der JBBF. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_ZV_STATUS - Inhalt aus dem CAN-Signal ST_CLSY_PSD_LCL |
| STAT_ZV_FTH | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für den Status der ZV der Fahrertüre hinten von der JBBF. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_ZV_STATUS - Inhalt aus dem CAN-Signal ST_CLSY_DVDR_LCL |
| STAT_ZV_BFTH | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für den Status der ZV der Beiahrertüre hinten von der JBBF. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_ZV_STATUS - Inhalt aus dem CAN-Signal ST_CLSY_PSDR_LCL |
| STAT_ZV_HECKKLAPPE | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für den Status der ZV der Heckklappe von der JBBF. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_ZV_STATUS - Inhalt aus dem CAN-Signal ST_CLSY_BTL_LCL |
| STAT_ZV_HECKSCHEIBE | 0-n | - | unsigned char | - | TAB_CAS_ZV_STATUS | - | - | - | Das Result enthält den aktuellen Wert (über CAN empfangen) für den Status der ZV der Heckscheibe von der JBBF. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_ZV_STATUS - Inhalt aus dem CAN-Signal ST_CLSY_RSCR_LCL |

### RES_0XDAC4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGE_FT_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | (Sperr-)Status der TAGE Entriegeln-Leitung der Fahrerseite vorne.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_FT_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | (Sperr-)Status der TAGE Daten-Leitung der Fahrerseite vorne.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_BFT_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | (Sperr-)Status der TAGE Entriegeln-Leitung der Beifahrerseite vorne.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_BFT_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | (Sperr-)Status der TAGE Daten-Leitung der Beifahrerseite vorne.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_FTH_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | (Sperr-)Status der TAGE Entriegeln-Leitung der Fahrerseite hinten.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_FTH_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | (Sperr-)Status der TAGE Daten-Leitung der Fahrerseite hinten.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_BFTH_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | (Sperr-)Status der TAGE Entriegeln-Leitung der Beifahrerseite hinten.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |
| STAT_TAGE_BFTH_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CAS_TAGE_SPERRSTATUS | - | - | - | (Sperr-)Status der TAGE Daten-Leitung der Beifahrerseite hinten.; 0 = Gesperrt; 1 = Freigegeben; 255 = Ungültig/Unbekannt |

### RES_0XDACA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGE_FT | 0-n | - | unsigned char | - | TAB_CAS_CA_TAGE_STATUS | - | - | - | Das Result enthält den Status der TAGE Fahrertüre. Hinweise: - Die Zuordnung erfolgt über Tabelle TAB_CAS_CA_TAGE_STATUS |
| STAT_TAGE_BFT | 0-n | - | unsigned char | - | TAB_CAS_CA_TAGE_STATUS | - | - | - | Das Result enthält den Status der TAGE Beifahrertüre. Hinweise: - Die Zuordnung erfolgt über Tabelle TAB_CAS_CA_TAGE_STATUS |
| STAT_TAGE_FTH | 0-n | - | unsigned char | - | TAB_CAS_CA_TAGE_STATUS | - | - | - | Das Result enthält den Status der TAGE Fahrertüre hinten. Hinweise: - Die Zuordnung erfolgt über Tabelle TAB_CAS_CA_TAGE_STATUS |
| STAT_TAGE_BFTH | 0-n | - | unsigned char | - | TAB_CAS_CA_TAGE_STATUS | - | - | - | Das Result enthält den Status der TAGE Beifahrertüre hinten. Hinweise: - Die Zuordnung erfolgt über Tabelle TAB_CAS_CA_TAGE_STATUS |

### RES_0XDC54

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAENDLER_NUMMER_WERT | - | - | string[5] | - | - | - | - | - | Das Result enthält die 5-stellige Händlernummer. Im Werk wird dieser Wert auf 00000. |
| STAT_ERSTZULASSUNGSDATUM_TAG_WERT | - | - | unsigned char | - | - | - | - | - | Das Result enthält den Tag des Erstzulassungsdatums. Im Werk wird dieser Wert auf den Tag der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_MONAT_WERT | - | - | unsigned char | - | - | - | - | - | Das Result enthält den Monat des Erstzulassungsdatums.  Im Werk wird dieser Wert auf den Monat der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_JAHR_WERT | - | - | unsigned int | - | - | - | - | - | Das Result enthält den Jahr des Erstzulassungsdatums.  Im Werk wird dieser Wert auf das Jahr der Schlüssel-Initialisierung gesetzt. Wertebereich: 2000-9999. |

### RES_0XDC60

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_SSTA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Hallsensors SST A. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG |
| STAT_HALL_SSTB_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Hallsensors SST B. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG |

### RES_0XDC61

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_BREMSL_HIGH_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Bremslichtschalters High-Schaltend. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. - Bremse gedrückt = betätigt (Wert 1) |
| STAT_SCHALTER_BREMSL_LOW_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Bremslichtschalters Low-Schaltend. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. - Bremse gedrückt = betätigt (Wert 1) |

### RES_0XDC62

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINGANG_A_S_START_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG_PEGEL | - | - | - | Das Result enthält den aktuellen Zustand des Eingangs für die Signalisierung des Motorstartendes durch die Motorsteuerung. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG_PEGEL. |

### RES_0XDC63

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_KUPPL_PN_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Kupplungsschalters (Manuelles Getriebe) oder PN-Signal (Automatikgetriebe) vom EGS. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC64

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_CENTERLOCK_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Eingangs Centerlock-Taster. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC65

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_MOTORHAUBE_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Eingangs Motorhaubenkontakt. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC66

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTER_HOTEL_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Eingangs HOTEL-Schalters. Hinweis: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC67

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_MSA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand für den Eingang Taster der Motor-Start-Automatik. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC68

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_SICHERN_HECKKL_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Eingangs für den Taster zum Zentralsichern der Heckklappe. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC69

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKKL_INNEN_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Eingangs für den Taster zum Entriegeln der Heckklappe Innen (TOEHKI). Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG. |

### RES_0XDC6A

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EINGANG_MOST_WUP_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_DIGITAL_EINGANG_PEGEL | - | - | - | Das Result enthält den aktuellen Zustand des Weckeingangs vom MOST_WUP zum Wecken durch die TCU. Hinweise: - Zuordnung erfolgt gemäß Tabelle TAB_CAS_DIGITAL_EINGANG_PEGEL |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIA_NR_AKTUELL | 0x0F27 | STAT_PIA_NR_AKTUELL | Aktuelle physikalische Schluesselnummer | 0-n | - | - | unsigned char | TAB_CAS_PIA_NUMMER | - | - | - | - | 22 | - | - |
| ELV_AKTION | 0xAA7C | - | Dieser Job dient dazu die ELV zum Verriegeln, Entriegeln oder einen Full-Cycle anzusteuern oder eine Statusabfrage (ELV-Status, Herstelldaten, Fehlerzähler) zu aktivieren. Desweiteren lassen sich mit diesem Job die ELV-Fehlerzähler und der FullCycle-Merker zurücksetzen.  Hinweise: - Bei Rücksetzen des FullCycle-Merker muss der ELV-Status im ELV-Master auf ungültig gesetzt werden. - Bei deaktiviertem ELV-Montagemodus gilt: es gelten die gleichen Vorbedingungen für die ELV-Ansteuerung wie bei normaler Ansteuerung (ID-Geber im Innenraum. DFZ-Authentisierung, Geschwindigkeit, Motorlauf, usw.) Gemäß ELV-System-LH. - Bei aktiviertem ELV-Montagemodus gilt: alle Ansteuerungen der ELV ausser Verriegeln sind ohne weitere Vorbedingung zulässig. Rücksetzen des FullCycle-Merkers nur bei gültigem Geschwindigkeitssignal v < 3km/h (codierbar) zulässig. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA7C | RES_0xAA7C |
| STEUERN_KL15_ABSCHALTUNG | 0xAC51 | - | Dieser Job dient dazu per Diagnose die Schwelle festzulegen, bei welcher Geschindigkeit die Funktion automatische KL15-Abschaltung wieder aktiviert (default) werden soll. Die KL-15-Abschaltung wird bis zur Überschreitung dieser Geschwindigkeits-Schwelle verhindert. Diese Abschalt-Verhinderung bleibt auch über RESET und Spannungs-Reset hinaus bestehen (Ablage im EEPROM). Hinweise: - Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ARG,STEUERN_KL15_ABSCHALTUNG,STR,Argumente | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC51 | - |
| STEUERN_ZV_MASTER | 0xAC57 | - | Ansteuerung der Zentralverriegelung per Diagnose Hinweise: - Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ARG,STEUERN_ZV_MASTER,STR,Argumente. - Ein Wechsel aus oder in den Zustand gesichert ist nicht möglich. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC57 | RES_0xAC57 |
| STEUERN_FBD_EMPFAENGER_INIT | 0xAC58 | - | Ansteuern der FBD-Initialisierung. Dabei werden folgende Aktivitäten durch das CAS angesteuert: 1. Prüfen LIN-Nachrichtenkatalog und SW-Version 2. Assign Frame-ID 3. Prüfen (und ggf. schreiben) WUP im FBD-Empfänger 4. Prüfen (und ggf. schreiben) WUP (=FFB-ID) der FFB (Fond-Fernbedienung) Hinweise: Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ARG,STEUERN_FBD_EMPFAENGER_INIT,STR,Argumente. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC58 |
| STEUERN_TRANSPONDERSPULE | 0xAC5B | - | Dieser Job dient Job zum Aktivieren der Transponderspule (für Schlüsselkommunikation) für 10 Sekunden oder sofortigem Deaktivieren der Transponderspule. Hinweis: Aktivieren der Transponderspule: Nach Ablauf der 10 Sekunden wird die Transponderspule automatisch wieder deaktiviert. Erfolgt ein erneuter Jobaufruf zur Aktivierung während der 10 Sekunden, dann wird der Timer wieder auf 10 Sekunden hochgesetzt ohne die Transponderspule dabei zu deaktivieren. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC5B | - |
| SPANNUNG_KLEMMEN | 0xDAB3 | - | Auslesen analoger Spannungs- und Strom-Werte an den CAS Ausgängen und Eingängen. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument SPANNUNG_KLEMMEN. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB3 |
| KEY_VALID_NR_AKTUELL | 0xDAB4 | STAT_KEY_VAILD_NR_AKTUELL | Auslesen der Nummer in der Transpondertabelle des CAS für den aktuell gültigen Schlüssel. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument KEY_VALID_NR_AKTUELL. | 0-n | - | - | unsigned char | TAB_CAS_SCHLUESSEL_POSITION | - | - | - | - | 22 | - | - |
| CA_TAGE_ER_LEITUNG | 0xDAB5 | - | Auslesen der jeweiligen Statuswerte der analogen Entriegeln-Leitungen von den Tür-Aussengriff-Elektroniken (TAGE) in den Türen FT, BFT, FTH, BFTH. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument CA_TAGE_ER_LEITUNG | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB5 |
| TASTER_SST | 0xDAB6 | STAT_TASTER_SST_AKTIV | Auslesen des Zustands des Start-Stop-Tasters. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument TASTER_SST | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| CAS_MONTAGEMODUS | 0xDAB9 | - | Statusabfrage und Setzen des Montagemodus für ELV-Sperre, KL50-Sperre und Präsentations-Modus. Die ELV-Sperre (ELV-Montagemodus) verhindert die Ansteuerung (Verriegeln/Entriegeln) der ELV während des Montage-Prozesses. Die ELV-Diagnosen (z.B. Status-Abfragen, ELV-Ident) sind zulässig. Die KL50-Sperre verhindert die Ansteuerung des Anlassers während des Montage-Prozesses. Der Präsentations-Modus dient zum Messen und deaktiviert einige Funktionen in der Klemmen-Steuerung (z.B. KL15-Abschaltung). Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument CAS_MONTAGEMODUS. - Im CAS Anlieferzustand sind immer alle Sperren Aktiv. - Die ELV-Sperre wird mit gültigem Geschwindigkeitssignal automatisch deaktiviert. - Die KL50-Sperre muss explizit per Diagnose aufgehoben werden. - Wenn die ELV-Sperre aktiv ist, so ist auch zwingend die KL50-Sperre aktiv. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDAB9 | RES_0xDAB9 |
| BUS_IN_DATUM_ZEIT | 0xDABB | - | Der Job dient zum Auslesen des aktuellen vom Kombi empfangenen Zeitstempels (Datum und Zeit). Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_DATUM_ZEIT - Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal in den entsprechenden Results zurückgegeben. - Die Daten stammen aus CAN-Nachricht UHRZEIT_DATUM und RELATIVZEIT | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABB |
| BUS_IN_DME1 | 0xDABC | - | Der Job dient zum Auslesen der über CAN empfangenen Werte von der Motorsteuerung (DME). Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_DME1. - Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. - Die Daten stammen aus den CAN-Nachrichten Daten Antriebsstrang 2 (DT_PT_2) und Drehmoment Kurbelwelle 1 (TORQ_CRSH_1) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABC |
| BUS_IN_DSC | 0xDABD | - | Der Job dient zum Auslesen der über CAN empfangenen Werte von der Digitalen Stabilitätskontrolle (DSC). Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_DSC. - Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. - Die Daten stammen aus CAN-Nachrichten ST_STAB_DSC und V_VEH | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABD |
| BUS_IN_FH | 0xDABF | - | Der Job dient zum Auslesen der über CAN empfangenen Werte für den Status der einzelnen Fensterheber (je Tür FT,BFT,FTH,BFTH). Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_FH. - Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal zurückgegeben. - Die Daten stammen aus CAN-Nachricht POSITION_FH_BFT, POSITION_FH_BFTH, POSITION_FH_FAT und POSITION_FH_FATH | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABF |
| BUS_IN_ZV | 0xDAC1 | - | Der Job dient zum Auslesen des über CAN empfangenen Wert für den Status der ZV von der JBBF. Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument BUS_IN_ZV. - Wird eine Botschaft innerhalb der erwarteten Zeit nicht empfangen (timeout), so wird der Status ungültig/kein Signal in den entsprechenden Results zurückgegeben. - Die Daten stammen aus CAN-Nachricht Status Zentralverriegelung (ST_CLSY_DO_LA) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAC1 |
| CA_TAGE_SPERRSTATUS | 0xDAC4 | - | Der Job dient zum Auslesen des (Sperr-)Status der TAGE, der angibt, ob die TAGE gesperrt (z.B. aufgrund Dauerbetätigung oder sporadischer unmotivierter Aktivierung) oder freigegeben sind. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDAC4 | RES_0xDAC4 |
| CA_TAGE_STATUS | 0xDACA | - | Auslesen des jeweiligen Sensorstatus der Tür-Aussengriff-Elektroniken (TAGE) in den Türen FT, BFT, FTH, BFTH. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument CA_TAGE_STATUS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDACA |
| SPANNUNG_KLEMME_30E_WERT | 0xDADA | STAT_SPANNUNG_KLEMME_30E_WERT | Auslesen des Spannungswerts der Klemme 30E. Hinweise: - Aufruf über Standardjob STATUS_LESEN mit Argument SPANNUNG_KLEMME_30E. | Volt | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| SPANNUNG_KLEMME_30L_WERT | 0xDADD | STAT_SPANNUNG_KLEMME_30L_WERT | Auslesen des Spannungswerts der Klemme 30L. Hinweise: - Aufruf über Standardjob STATUS_LESEN mit Argument SPANNUNG_KLEMME_30L. | Volt | - | - | int | - | - | 10.0 | - | - | 22 | - | - |
| NACHLAUFZEIT_KLEMME_15N | 0xDB2D | STAT_NACHLAUFZEIT_KLEMME_15N_WERT | Auslesen der im CAS über Bus versendeten Nachlaufzeit der Klemme 15N. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument NACHLAUFZEIT_KLEMME_15N. - Beim CAS-Steuergerät (Sender) wird der Wert des internen Timers im CAS ausgegeben und nicht der Wert der als CAN-Botschaft qualifiziert gesendet wird. | s | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| NACHLAUFZEIT_KLEMME_30B | 0xDB2E | STAT_NACHLAUFZEIT_KLEMME_30B_WERT | Auslesen der von CAS über Bus versendeten Nachlaufzeit der Klemme 30B. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument NACHLAUFZEIT_KLEMME_30B. - Beim CAS-Steuergerät (Sender) wird der Wert des internen Timers im CAS ausgegeben und nicht der Wert der als CAN-Botschaft qualifiziert gesendet wird. | s | - | - | unsigned int | - | - | - | - | - | 22 | - | - |
| HO_INFO | 0xDC54 | - | Auslesen und Setzen der folgenden im CAS gespeicherten Daten für die Handelsorganisation: - Händlernummer - Erstzulassungsdatum Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN mit Argument HO_INFO. - Die Händlernummer wird vom Werk mit 00000 und das Erstzulasungsdatum mit dem Datum der Schlüssel-Initialisierung belegt. Diese Informationen sind Teil der CBS-Daten und werden auch in den Schlüssel übertragen. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDC54 | RES_0xDC54 |
| STATUS_KLEMMEN | 0xDC56 | STAT_KLEMMENSTATUS | Auslesen des aktuellen Status der Klemmensteuerung am Steuergerät. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument STATUS_KLEMMEN | 0-n | - | high | unsigned char | TAB_CAS_KLEMMENSTATUS | - | - | - | - | 22 | - | - |
| HALL_START_STOP_TASTER | 0xDC60 | - | Dieser Job dient zum Auslesen und Setzen der Zustände der beiden Hallsensoren des Start-Stopp-Tasters. Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument HALL_START_STOP_TASTER - Signalnamen der digitalen CAS Eingänge sind IN_HALL1_SSTA und IN_HALL2_SSTB - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument HALL_START_STOP_TASTER und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuellen Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC60 | RES_0xDC60 |
| SCHALTER_BREMSLICHT | 0xDC61 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des Bremslichtschalters. Dieser ist aus Redundanzgründen  High- und Low-Schaltend als CAS Eingang vorhanden. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument SCHALTER_BREMSLICHT - Signalnamen der digitalen CAS Eingänge sind BLSL und BLSH - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument SCHALTER_BREMSLICHT und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC61 | RES_0xDC61 |
| EINGANG_A_S_START | 0xDC62 | - | Dieser Job dient zum Auslesen und Vorgeben des Zustands des Eingangs für die Signalisierung des Motorstartendes durch die Motorsteuerung. Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument EINGANG_A_S_START - Signalname des digitalen CAS Eingang ist A_S_START. - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument EINGANG_A_S_START und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuellen Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC62 | RES_0xDC62 |
| SCHALTER_KUPPL_PN | 0xDC63 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des Kupplungsschalters oder PN-Signal vom EGS. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument SCHALTER_KUPPL_PN - Signalname des digitalen CAS Eingang ist PN_KUPPL - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument SCHALTER_KUPPL_PN und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuellen Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC63 | RES_0xDC63 |
| TASTER_CENTERLOCK | 0xDC64 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs für den Centerlock-Taster. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_CENTERLOCK - Signalname des digitalen CAS Eingang ist CLT - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_CENTERLOCK und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC64 | RES_0xDC64 |
| SCHALTER_MOTORHAUBE | 0xDC65 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des Kontaktschalters für die Motorhaube. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument SCHALTER_MOTORHAUBE - Signalname des digitalen CAS Eingang ist MHK - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument SCHALTER_MOTORHAUBE und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC65 | RES_0xDC65 |
| SCHALTER_HOTEL | 0xDC66 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des Schalters für Hoteleinstellung der Zentralverriegelung. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument SCHALTER_HOTEL - Signalname des digitalen CAS Eingang ist HOTEL - Hotelfunktion aktiv = betätigt - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument SCHALTER_HOTEL und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC66 | RES_0xDC66 |
| TASTER_MSA | 0xDC67 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs für den Taster der Motor-Start-Automatik (MSA). Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_MSA - Signalname des digitalen CAS Eingang ist MSA - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_MSA und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC67 | RES_0xDC67 |
| TASTER_SICHERN_HECKKL | 0xDC68 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs für den Taster zum Zentralsichern der Heckklappe. Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_SICHERN_HECKKL - Signalname des digitalen CAS Eingang ist TZSHK. - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_SICHERN_HECKKL und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC68 | RES_0xDC68 |
| TASTER_HECKKL_INNEN | 0xDC69 | - | Dieser Job dient zum Auslesen und Setzen des Zustands des CAS-Eingangs Taster zum Entriegeln der Heckklappe Innen (TOEHKI). Hinweise: - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument TASTER_HECKKL_INNEN - Signalname des digitalen CAS Eingang ist TOEHKI - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument TASTER_HECKKL_INNEN und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0xDC69 | RES_0xDC69 |
| EINGANG_MOST_WUP | 0xDC6A | - | Dieser Job dient zum Auslesen und Setzen des Zustands des Weckeingangs MOST_WUP zum Wecken durch die TCU. Hinweise: Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN/STEUERN_IO mit Argument EINGANG_MOST_WUP - Signalname des digitalen CAS Eingang ist MOST_WUP - STEUERN: Aufruf des Jobs erfolgt über Standardjob STEUERN_IO mit Argument EINGANG_MOST_WUP und durchzuführender Aktion: RCTECU: Rückgabe der Kontrolle ans Steuergerät (returnControlToECU) RTD: Reset auf Defaultwert (resetToDefault) FCS: Aktuelle Zustand einfrieren (freezeCurrentState) STA: Setzen auf übergebenenen Vorgabewert (shortTermAdjustment) | - | - | - | - | - | - | - | - | - | 2F;22 | ARG_0xDC6A | RES_0xDC6A |

### TAB_CAS_CA_ANTENNEN_TEST

| WERT | TEXT |
| --- | --- |
| 0 | Fehler sind aufgetreten (einer oder mehrere) |
| 1 | Alle Antennen okay |
| 2 | CAS besitzt keine CA-Funktion |
| 255 | ungültig/unbekannt |

### TAB_CAS_CA_KOMM_TEST

| WERT | TEXT |
| --- | --- |
| 0 | Kommunikation nicht möglich |
| 1 | Kommunikation okay, inkl. Authentisierung |
| 2 | Antenne nicht vorhanden (Codierdaten) |
| 3 | Antenne nicht in Ordnung oder nicht gesteckt |
| 255 | ungültig/unbekannt |

### TAB_CAS_CA_SUCH_ORT

| WERT | TEXT |
| --- | --- |
| 0 | unbekannter Suchort/Empfangsort |
| 3 | Aussen Fahrertür |
| 4 | Aussen Beifahrertür |
| 5 | Aussen Kofferraum |
| 6 | Innenraum Kofferraum |
| 7 | Innernraum Vorne |
| 8 | Innenraum Hinten |
| 255 | ungültig bzw. es hat keine Erregung über LF stattgefunden |

### TAB_CAS_CA_TAGE_ER_LEITUNG

| WERT | TEXT |
| --- | --- |
| 0 | Tage nicht verbaut |
| 1 | Tage gezogen |
| 2 | Tage nicht gezogen |
| 3 | Kurzschluss |
| 255 | Ausserhalb zulässigem Bereich |

### TAB_CAS_CA_TAGE_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Kein Status - keine Betätigung |
| 1 | Zug-Sensor betätigt - Hall-Sensor |
| 2 | Sichern-Sensor betätigt - Piezo und VR-Kap-Sensor |
| 3 | Entriegeln-Sensor betätigt - ER-Kap-Sensor |
| 255 | ungültig/unbekannt |

### TAB_CAS_DIGITAL_EINGANG

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv / nicht betätigt |
| 1 | aktiv / betätigt |
| 2 | nicht verbaut / Status nicht verfügbar |
| 255 | ungültig / Fehler erkannt |

### TAB_CAS_DIGITAL_EINGANG_PEGEL

| WERT | TEXT |
| --- | --- |
| 0 | Low-Pegel |
| 1 | High-Pegel |
| 255 | ungültig / Fehler erkannt |

### TAB_CAS_ELV_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | Entriegeln |
| 1 | Verriegeln |
| 2 | Nur für Entwicklungszwecke: Full-Cycle (Kompletter Zyklus Verriegeln + Entriegeln) |
| 4 | Herstellerdaten-Update |
| 5 | Fehlerzähler löschen |
| 6 | FullCycle-Merker löschen |

### TAB_CAS_ELV_AUSFUEHRUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler aufgetreten |
| 1 | Keine ELV vorhanden |
| 2 | Kein gültiges Geschwindigkeitssignal |
| 3 | Fahrt erkannt |
| 4 | Motorsignal ungültig |
| 5 | Motorlauf (auch MSA-Betrieb) |
| 6 | KL15 aktiv |
| 7 | Kein gültiger Schlüssel |
| 8 | Keine Kommunikation mit ELV-SG, evtl. ELV-SG nicht angesteckt  |
| 9 | ELV Spielschutz aktiv |
| 10 | Unterspannung KL30L |
| 11 | Escape-Fehlerzähler Maxwert erreicht (CAS oder ELV) |
| 12 | Kurzschluss ELV Spannungsversorgung (KL30_ELV / KL31_ELV_VR) |
| 13 | Treiberfehler (Permanenten Aktivierung oder Ausfall der Ansteuerung von KL30_ELV / KL31_ELV_VR oder HW-Logikfehler) |
| 14 | Fehlerhafter ELV-Status |
| 15 | Fehlerhafter ELV-Roll-Counter |
| 16 | Interner HW-Fehler CAS (RAM/ROM/CPU usw.) erkannt |
| 100 | ELV-SG: Schwerer HW-Fehler µC |
| 101 | ELV-SG - Kurzschluss KL31_ELV_VR gegen Masse |
| 102 | ELV-SG - Sensorstatus nicht vertrauenswürdig |
| 103 | ELV-SG: Fehler H-Brücke |
| 104 | ELV-SG: Überlast Motorbrücke |
| 105 | ELV-SG: HW-Fehler Sensor |
| 106 | ELV-SG: Spannungversorgung |
| 107 | ELV-SG: Fehler EEPROM |
| 108 | ELV-SG: Authentisierungsfehler |
| 109 | ELV-SG: Keine Motoraktivierung |
| 110 | ELV-SG: Timeout bei Warten auf einen Request vom ELV-Master |
| 111 | ELV-SG: Timeout bei Motorentriegelung (Verspannte Lenksäule) |
| 112 | ELV-SG: Timeout bei Motorverriegelung |
| 113 | ELV-SG: Fehlerhafte Requestbotschaft vom ELV-Master |
| 255 | Unbekannter Fehler |

### TAB_CAS_ELV_INTERNE_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | CPU defekt |
| 1 | RAM defekt |
| 2 | ROM defekt |
| 3 | Lock Ground defekt |
| 4 | Motor Brücken Fehler |
| 7 | Unbeabsichtigtes Verriegeln |
| 8 | Unbeabsichtigtes Entriegeln |
| 10 | Sensor mismatch |
| 12 | Sensor defekt |
| 18 | Motorbrücke überlastet |
| 19 | Überspannung ECU Versorgung |
| 20 | Unterspannung ECU Versorgung |
| 21 | EEPROM Fehler |
| 22 | Ungültiges Kommando |
| 23 | Authentisierungsfehler |
| 24 | Keine Motoransteuerung |
| 26 | Kommando Timeout |
| 27 | Timeout bei Entriegelung (Verspannte Lenkung) |
| 28 | Timeout bei Verriegelung |
| 29 | Empfangsfehler |
| 30 | Sendefehler |
| 255 | Unbekannter Fehler |

### TAB_CAS_ELV_VORH

| WERT | TEXT |
| --- | --- |
| 0 | CAS mit ELV |
| 1 | CAS ohne ELV |
| 255 | unbekannt/ungültig |

### TAB_CAS_ELV_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0 | CAS/FEM mit ELV |
| 1 | CAS/FEM ohne ELV |
| 255 | Ungültig / Unbekannt |

### TAB_CAS_ELV_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Entriegelt |
| 1 | Verriegelt |
| 2 | ELV Zustand fehlerhaft / unplausibel |
| 16 | Entriegelt, nicht initialisiert |
| 17 | Verriegelt, nicht initialisiert |
| 32 | Entriegelt, falsche Initialisierung |
| 33 | Verriegelt, falsche Initialisierung |
| 254 | Statusabfrage ELV aufgrund aktuellem Fahrzeugzustand nicht zulässig |
| 255 | Ungültig / Unbekannt |

### TAB_CAS_FBD_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | keine Taste gedrückt |
| 1 | Entriegeln |
| 2 | Verriegeln |
| 3 | Kofferraum |
| 4 | Panik |
| 5 | Entriegeln Langdruck |
| 6 | Verriegeln Langdruck |
| 7 | Kofferraum Langdruck |
| 8 | Panik Langdruck |
| 20 | CA-Entriegeln |
| 21 | CA-Verriegeln |
| 22 | CA-Kofferraum |
| 23 | CG-Authentisierung |
| 100 | THS-Init |
| 101 | Standheizung An |
| 102 | Standheizung Aus |
| 103 | Fernstart An |
| 104 | Fernstart Aus |
| 200 | FFB-Init |
| 201 | FFB Taste Seitenauswahl Links |
| 202 | FFB Taste Seitenauswahl Rechts |
| 203 | FFB Taste Lautstärke Runterregeln |
| 204 | FFB Taste Lautstärke Hochregeln |
| 205 | FFB Taste Suchlauf abwärts |
| 206 | FFB Taste Suchlauf aufwärts |
| 207 | FFB Taste Option |
| 208 | FFB Taste Zurück |
| 209 | FFB Taste Menü |
| 210 | FFB Taste Bordmonitor System Pfeil oben |
| 211 | FFB Taste Bordmonitor System Pfeil rechts |
| 212 | FFB Taste Bordmonitor System Pfeil unten |
| 213 | FFB Taste Bordmonitor System Pfeil links |
| 214 | FFB Taste Drehrad nach oben (in Gegenuhrzeigerrichtung) |
| 215 | FFB Taste Drehrad nach unten (in Uhrzeigerrichtung) |
| 216 | FFB Taste Drucktaste in Drehrad Mitte |
| 255 | ungültig/unbekannt |

### TAB_CAS_FBD_BATTERIEZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Batteriespannung < 2.35 V |
| 1 | Batteriespannung < 2.44 V |
| 2 | Batteriespannung < 2.53 V |
| 6 | Batteriespannung volle Kapazitaet |
| 7 | Signal nicht vorhanden |
| 10 | Batterie schwach - Kommunikation ohne Authentisierung |
| 11 | Batterie gut - Kommunikation ohne Authentisierung |
| 255 | unbekannt bzw. nicht relevant |

### TAB_CAS_FBD_DATENRATE

| WERT | TEXT |
| --- | --- |
| 0 | Niedrige Datenrate: 5 kBit/s |
| 1 | Hohe Datenrate: 19.2 kBit/s |

### TAB_CAS_FBD_EMPFAENGER_EMPFANGSMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Alle Telegramme durchlassen |
| 1 | Nur bekannte Telegramme durchlassen |
| 2 | Nur bekannte und Init-Telegramme THS/FFB durchlassen |
| 255 | ungültig/unbekannt |

### TAB_CAS_FBD_EMPFAENGER_INIT_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Initialisierung erfolgreich |
| 1 | LIN-Nachrichtenkatalog oder SW-Version falsch |
| 3 | WUP Aktualisierung im FBD-Empfänger fehlgeschlagen |
| 4 | WUP Aktualisierung der Fond-Fernbedienung fehlgeschlagen |
| 5 | WUP Aktualisierung im FBD-Empfänger und der Fond-Fernbedienung fehlgeschlagen |
| 255 | unbekannter Status |

### TAB_CAS_FBD_EMPFAENGER_TYP

| WERT | TEXT |
| --- | --- |
| 1 | Spiegel |
| 2 | Diversity |
| 255 | unbekannt / nicht ermittelbar |

### TAB_CAS_FBD_SUPPLIER

| WERT | TEXT |
| --- | --- |
| 16 | SIEMENS |
| 32 | HUF |
| 255 | unbekannter Zulieferer |

### TAB_CAS_FH_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Geschlossen |
| 1 | Zwischenstellung |
| 2 | Offen |
| 255 | ungültig/unbekannt |

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
| 13 | 9. Gang |
| 255 | ungültig |

### TAB_CAS_GESCHW_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Fahrzeug steht |
| 1 | Fahrzeug fährt vorwärts |
| 2 | Fahrzeug fährt rückwärts |
| 3 | Fahrzeug fährt |
| 4 | Fahrzeug steht, Hinterachse auf Rollenprüfstand erkannt |
| 7 | Signal ungültig |

### TAB_CAS_HISTORIENSPEICHER_SPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Historienspeicher freigegeben |
| 1 | Historienspeicher  sperren |
| 2 | Löschen/Neu initialisieren |
| 255 | ungültig/unbekannt |

### TAB_CAS_HW_GESCHW_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Unplausibel bzgl. Frequenz |
| 1 | Stillstand |
| 2 | Rollt |
| 3 | Fahrt V1 |
| 4 | Fahrt V2 |
| 5 | Fahrt V3 |
| 255 | ungültig/unbekannt |

### TAB_CAS_KEYTYPE

| WERT | TEXT |
| --- | --- |
| 0 | Umlaufschlüssel |
| 2 | Geldbörsen-Schlüssel |
| 3 | Drivers-Key |
| 4 | Funk-Schlüssel |
| 5 | ID-Geber |
| 15 | Zukünftiger Ersatz-Schlüssel / Position nicht belegt |

### TAB_CAS_KEYVARIANT

| WERT | TEXT |
| --- | --- |
| 1 | F01, F02, F03, F04 |
| 2 | F01, F02, F03, F04 mit Anpassung CRC |
| 3 | F07, F10, F11, F12, F13, F25 |
| 4 | F07, F10, F11, F12, F13, F25 mit Anpassung CRC |
| 5 | RR04 |
| 6 | RR04 mit Anpassung CRC |
| 15 | unbekannt |
| 255 | Ungültig/Unbekannt |

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

### TAB_CAS_KLEMMENSTATUS_ARG

| WERT | TEXT |
| --- | --- |
| 4 | KL30F_EIN |
| 6 | KL30B_EIN |
| 8 | KLR_EIN |
| 10 | KL15_EIN |
| 16 | KL30B_EIN_VERK |
| 255 | ungültig |

### TAB_CAS_KLEMMENSTATUS_CRC

| WERT | TEXT |
| --- | --- |
| 10 | KL30F_EIN |
| 168 | KL30B_EIN |
| 42 | KL30B_EIN_VERK |
| 225 | KLR_EIN |
| 67 | KL15_EIN |
| 255 | ungültig |

### TAB_CAS_KLEMMEN_TRIGGER

| WERT | TEXT |
| --- | --- |
| 0 | Start-Stop-Taster (SST) |
| 1 | Telestart-Handsender (THS) |
| 2 | Motor-Start-Automatik (MSA) |
| 3 | Obere Startfähigkeitsgrenze (OSFG) erreicht |
| 4 | ZV sichern |
| 5 | Fahrertür auf/zu (KL15-Abschaltung) |
| 6 | Timeout  nach 16 min |
| 7 | Diagnoseanforderung |
| 8 | Relais-Kleber KL50 |
| 9 | Waschstrassen-Modus Timeout 30min/15min |
| 255 | ungültig/unbekannt |

### TAB_CAS_KLEMMEN_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0 | Kein Hinderungsgrund vorhanden |
| 1 | Aktuell kein gültiger Schlüssel erkannt |
| 2 | Kurzschluss HW-Ausgänge erkannt |
| 3 | Geschwindigkeit Fahren erkannt |
| 4 | Geschwindigkeit unplausibel erkannt: HW <-> CAN |
| 5 | Bremse nicht gedrückt |
| 6 | Bremssignal unplausibel: Low-Schaltend <-> High-Schaltend |
| 7 | Kupplung nicht gedrückt |
| 8 | Kupplungssignal unplausibel: HW <-> CAN |
| 9 | Einschaltverhinderung durch Motorsteuerung: Motorlauf erkannt/Kein Motorstart erlaubt über CAN |
| 10 | Kraftschluss erkannt (P oder N nicht eingelegt) |
| 11 | Wegfahrsperre nicht initialisiert: DMEDDE_SK nicht verriegelt |
| 12 | Wegfahrsperre nicht initialisiert: TRSP_SK nicht verriegelt |
| 13 | Montagemodus KL50 ist aktiv: Anlasseransteuerung deaktiviert |
| 14 | ELV ist nicht entriegelt: Keine Anlasseransteuerung |
| 15 | Keine Startfreigabe durch Klimasteuergerät: Motorfernstart nicht möglich |
| 255 | Unbekannt/Ungültig |

### TAB_CAS_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalbetrieb - Alle Montagemodi deaktiviert |
| 1 | KL50-Montagemodus - Anlassersperre aktiv |
| 2 | ELV_KL50-Montagemodus - Anlassersperre und keine Ansteuerung ELV |
| 3 | Präsentations-Modus |
| 255 | unbekannter Zustand |

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
| 0 | Kein Motorstart, Pos. D/R |
| 1 | Motorstart zulassen - Getriebe in N |
| 2 | Motorstart zulassen, Motorstop zulassen - Getriebe in P |
| 255 | ungültig/unbekannt |

### TAB_CAS_MOTOR_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Motor aus |
| 1 | Motor startet |
| 2 | Motor läuft |
| 255 | ungültig/unbekannt |

### TAB_CAS_PIA_NUMMER

| WERT | TEXT |
| --- | --- |
| 0 | Personalisierungskonfiguration 0 |
| 1 | Personalisierungskonfiguration 1 |
| 2 | Personalisierungskonfiguration 2 |
| 10 | Gast |
| 15 | Keine Personalisierung zugewiesen - unpersonalisiertes Profil |
| 255 | ungültig |

### TAB_CAS_PM_ID

| WERT | TEXT |
| --- | --- |
| 1 | System wach halten wegen Zündung an (KLR/KL15 aktiv) |
| 2 | Buswecken über Body-CAN |
| 3 | Buswecken über DME-CAN |
| 4 | Buswecken über CAS-Bus |
| 5 | LIN-BUS durch FBD-Empfänger |
| 6 | Transponder |
| 20 | Taster Fahrertür (TAGE-FT-ER) |
| 21 | Taster Beifahrertür (TAGE-BFT-ER) |
| 22 | Taster Heckklappe öffnen innen (TOEHKI) |
| 27 | Motorhaubenkontakt (MHK) |
| 30 | Kurzschluss KL30B (bei Busruhe) |
| 31 | Unterspannung (Zeitstempel sichern, kein WakeUp) |
| 32 | Start Stop Taster A (SSTA) |
| 33 | Start Stop Taster B (SSTB) |
| 34 | Funkschlüssel-Einschub (EJECT) |
| 35 | Center Lock Taster (CLT) |
| 36 | Parkstellung Automatik Verriegelt (PLOCK) |
| 43 | Weckleitung (15WUP) |
| 48 | FBD-Empfänger (L1...L4) |
| 49 | Wakeup-Signal von TCU (MOST_WUP) |
| 50 | Hotelschalter (HOTEL) |
| 55 | Taster Fahrertür hinten (TAGE-FTH-ER) |
| 56 | Taster Beifahrertür hinten (TAGE-BFTH-ER) |
| 57 | KapSensor Fahrertür (TAGE-FT-AUTH) |
| 58 | KapSensor Beifahrertür (TAGE-BFT-AUTH) |
| 59 | KapSensor Fahrer hinten (TAGE-FTH-AUTH) |
| 60 | KapSensor Beifahrer hinten (TAGE-BFTH-AUTH) |
| 61 | Bremse (BLTS) (nur bei KL30B aktiv) |
| 62 | Kupplung (PN_KUPPL) (nur bei KL30B aktiv) |
| 224 | COP über RAM_ACC-Interrupt |
| 225 | COP über CodeTrap Interrupt (ungültiger OPCODE) |
| 226 | COP über SWI-Interrupt (SWI-Befehl) |
| 227 | COP über LOCKIF-Interrupt (PLL nicht gelockt) |
| 228 | COP über SCM-Interrupt (Quarzfehler) |
| 229 | COP über Invalid ISR (mehrere ISR-Interrupts) |
| 230 | COP über WatchDog (COP-Interrupt) |
| 240 | PowerOn-Reset (System-Reset mit PORF-Flag) |
| 241 | Unterspannungs-Reset (System-Reset mit LVRF-Flag) |
| 242 | AddressTrap-Reset (System-Reset mit ILAF-Flag |
| 243 | Externer Reset (System-Reset ohne Flag) |
| 244 | ClockMonitor-Reset (CLMON-Reset) |
| 245 | Ungültiger Wert (Bei Initialisierung, falls NVM-Fehler) |
| 255 | Unbekannte ID |

### TAB_CAS_PM_INDEX

| WERT | DIA_WERT |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 22 |
| 6 | 27 |
| 7 | 32 |
| 8 | 33 |
| 9 | 34 |
| 10 | 35 |
| 11 | 36 |
| 12 | 48 |
| 13 | 49 |
| 14 | 50 |
| 15 | 5 |
| 16 | 62 |
| 17 | 61 |
| 18 | 43 |
| 19 | 6 |
| 20 | 20 |
| 21 | 21 |
| 22 | 55 |
| 23 | 56 |
| 24 | 57 |
| 25 | 58 |
| 26 | 59 |
| 27 | 60 |
| 28 | 30 |
| 29 | 31 |
| 30 | 224 |
| 31 | 225 |
| 32 | 226 |
| 33 | 227 |
| 34 | 228 |
| 35 | 229 |
| 36 | 230 |
| 37 | 240 |
| 38 | 241 |
| 39 | 242 |
| 40 | 243 |
| 41 | 244 |
| 42 | 245 |
| 255 | - |

### TAB_CAS_RDU_RDL_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | RDU: Erfolgreich durchgeführt |
| 1 | RDU: Ungültige Anforderung über CAN |
| 2 | RDU:  Abbruch, da Fahrzeug fährt |
| 3 | RDU: Abbbruch aufgrund Motorstart oder Wiederholsperre |
| 4 | RDU: Abbruch aufgrund von Kodieroption die RDU/RDL verhindert |
| 100 | RDL: Erfolgreich durchgeführt |
| 101 | RDL: Ungültige Anforderung über CAN |
| 102 | RDL:  Abbruch, da Fahrzeug fährt |
| 103 | RDL: Abbbruch aufgrund Motorstart oder Wiederholsperre oder FT offen |
| 104 | RDL: Abbruch aufgrund von Kodieroption die RDU/RDL verhindert |
| 255 | unbekannt/ungültig |

### TAB_CAS_SCHLUESSELSPERRE

| WERT | TEXT |
| --- | --- |
| 0 | Schlüssel nicht gesperrt oder unbekannt |
| 1 | Schlüssel gesperrt |
| 2 | Schlüssel temporär gesperrt wegen CA-Funktion |
| 255 | ungültig |

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
| 100 | Telestart-Handsender 1 |
| 101 | Telestart-Handsender 2 |
| 200 | Fond-Fernbedienung |
| 252 | EMV-Testmodus - Verhindert die Schlüsselsuche und schaltet das LF-Feld ein |
| 253 | EMV-Testmodus - Verhindert die Schlüsselsuche und schaltet das LF-Feld aus |
| 254 | Sonderfunktion SG wach halten |
| 255 | unbekannt |

### TAB_CAS_SERVICE_SCHLUESSELDATEN_BLOCK_NR

| WERT | TEXT |
| --- | --- |
| 1 | CBS-Block 1 |
| 2 | CBS-Block 2 |
| 3 | CBS-Block 3 |
| 4 | CBS-Block 4 |
| 5 | CBS-Block 5 |
| 6 | CBS-Block 6 |
| 7 | CBS-Block 7 |
| 8 | CBS-Block 8 |
| 9 | CBS-Block 9 |
| 10 | CBS-Block 10 |
| 11 | CBS-Block 11 |
| 12 | CBS-Block 12 |
| 13 | CBS-Block 13 |
| 14 | CBS-Block 14 |
| 15 | CBS-Block 15 |
| 16 | CBS-Block 16 |
| 255 | unbekannt |

### TAB_CAS_SERVICE_SCHLUESSELDATEN_UPDATE_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Vollständiges Update im CAS-Speicher / Vollständige Übertragung in Schlüssel |
| 1 | Vollständiges Update im CAS-Speicher / Inkrementelle Übertragung in Schlüssel |
| 2 | Kein Update im CAS-Speicher / Vollständige Übertragung in Schlüssel |
| 3 | Kein Update im CAS-Speicher / Inkrementelle Übertragung in Schlüssel |
| 14 | Update nur CBS-Umfänge im CAS-Speicher/Keine Übertragung in Schlüssel |
| 15 | Vollständiges Update im CAS-Speicher / Keine Übertragung in Schlüssel |

### TAB_CAS_STANDVERBRAUCHER

| WERT | TEXT |
| --- | --- |
| 0 | Keine Anforderung zur Nachlaufzeitverlängerung erfolgt |
| 1 | Anforderung zur Nachlaufzeitverlängerung ist erfolgt |
| 255 | ungültig/unbekannt |

### TAB_CAS_TAGE_SPERRSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Gesperrt |
| 0x01 | Freigegeben |
| 0xFF | Ungültig/Unbekannt |

### TAB_CAS_TRSP_ERROR

| WERT | TEXT |
| --- | --- |
| 0 | IERR_OK - Kein Fehler |
| 1 | IERR_NO_TRSP - Kein Transponder erkannt |
| 2 | IERR_TRSP_COM - Fehler Trsp-Kommunikation |
| 3 | IERR_POS_USED - Initialisierung: Trsp-Position ist bereits benutzt |
| 4 | IERR_DEFAULT_AUTH - Authentisierung mit Default-Daten fehlerhaft: nur HT2 |
| 5 | IERR_ID_INVALID - Initialisierung: Schluessel-ID falsch: Unterschiedlich zum Job-Parameter |
| 6 | IERR_ID_BUSY - ID ist bereits im CAS auf einer anderen Position abgespeichert |
| 7 | IERR_TRSP_CFG - Trsp-Konfiguration ist gesperrt |
| 8 | IERR_KEY_TYP - Initialisierung: Schluessel-Typ falsch |
| 9 | IERR_KEY_FREQ - Initialisierung: Schluessel-Frequenz falsch |
| 13 | IERR_BS_ANT - Defekte Basestationantenne: Ringspule |
| 14 | IERR_REPAIR - Teilinitialisierter Schl. konnte nicht zurueckgesetzt werden |
| 15 | IERR_CFG_MODE - fehlerhafte Konfiguration im CFG-Mode |
| 16 | IERR_WR_SEG5_0 - Schreibfehler Seg. 5, Block 0: BMW EOL Daten 0 |
| 17 | IERR_WR_SEG5_1 - Schreibfehler Seg. 5, Block 1:  BMW EOL Daten 1 |
| 18 | IERR_WR_SEG6_0 - Schreibfehler Seg. 6, Block 0: dynamische Daten |
| 19 | IERR_WR_SEG6_1 - Schreibfehler Seg. 6, Block 1 |
| 20 | IERR_WR_WUP - Schreibfehler Wakeup-Pattern |
| 21 | IERR_WR_FBD_CA - Schreibfehler FBD- oder CA-Daten: Segment 4 |
| 22 | IERR_CALC_TSI - Initialisierung des Transponder Sequence Increment TSI fehlerhaft |
| 23 | IERR_WR_TSI - Schreibfehler TSI |
| 24 | IERR_WR_ISK - Schreibfehler ISK |
| 25 | IERR_CHECK_CFG - fehlerhafte Validierung der Transponderkonfiguration - CM |
| 26 | IERR_LOCK_CFG - fehlerhaftes Sperren der Trsp-Daten |
| 27 | IERR_AUTH_INIT - fehlerhafte erste Authentisierung nach der Initialisierung |
| 28 | IERR_KEY_VALID - ein gültiger Schlüssel steckt, Initialisierung nicht möglich |
| 29 | IERR_JOB_PARAM - ungueltiger Parameter des Jobs STEUERN_SCHLUESSEL_INIT |
| 30 | IERR_WR_CHIPCD - Schreibfehler Chipcarddaten |
| 31 | IERR_AUTH_RAND - fehlerhafte Authent. denn der Zufallswert x_ews4  ist noch nicht generiert |
| 32 | IERR_TRSP_TYP - Initialisierung: Trsp-Typ falsch, HtPro/Ht2 entspricht nicht CAS-EEPROM |
| 33 | Ersatzschlüssel: fehlerhafte Schlüsseldaten - Config, Seg.5, Page 00 |
| 34 | Ersatzschlüssel: CAS Schlüsselposition wird bereits benutzt |
| 35 | Ersatzschlüssel: Schlüssel ist nicht authentisierbar |
| 36 | Fehlerhaftes Update von Sequence Counter |
| 37 | Fehlerhaftes Update des Wertes Ersatz_Init |
| 38 | IERR_READ_BATT_VOLT |
| 39 | Ungueltiger E5-Hashwert |
| 255 | Unbekannter Fehlerstatus |

### TAB_CAS_TRSP_INITSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | IS_INVALID: Ungültiger Wert |
| 1 | IS_CPLT: Schlüssel komplett angelernt |
| 20 | IS_INITST_VERIFY: Seg. 5, Block 0, Page 0 verifizieren |
| 24 | IS_INITST_WR: nur HitagPro; Schreiben CAS-Init = 1 ind den Schlüssel (Seg. 5, Block 0, Page 0) |
| 28 | IS_KEYAUTH: Schlüsselauthentisierung mit den neuen Kryptodaten |
| 44 | IS_KEYCFG_VERIFY: Schlüsselkonfiguration verifizieren |
| 48 | IS_KEYCFG_RD: Schlüsselkonfiguration aus Trsp lesen |
| 52 | IS_KEYCFG_VALID: Prüfen der Schlüsselkonfiguration (ob gesperrt und richtig konfiguriert) |
| 56 | IS_KEYCFG_LOCK: Schreiben und Sperren der neuen Konfiguration |
| 60 | IS_KEYCFG_CHECK: Prüfen der Schlüsselkonfiguration |
| 64 | IS_KEYCFG_RESTART:Restart bei einem Abbruch des CFG- Schreibens |
| 84 | IS_ISK_VERIFY: Secret Key und Sequence increment im Schlüssel verifizieren (nur HitagPro) |
| 88 | IS_ISK: Generierung und Schreiben  Secret Key und Sequence increment in den Schlüssel (nur HitagPro) |
| 92 | IS_ISK_SS: nur HitagPro; Select Segment 0 |
| 112 | IS_PW_WR: nur Hitag2; Generierung und Schreiben Passwort  - Page 3 -  in den Schlüssel |
| 116 | IS_SKH_WR: nur Hitag2; Generierung und Schreiben SercetKey high in den Schlüssel |
| 120 | IS_SKL_WR: nur Hitag2; Generierung und Schreiben SercetKey low in den Schlüssel |
| 124 | IS_SK_AUTH: nur Hitag2; Authentisierung mit default SecretKeys |
| 136 | IS_FCNT: Initialisierung Fahrzykluszähler |
| 140 | IS_FC_SCNT: Initialisierung  FBD- und CA- Sequence counter |
| 156 | IS_FBD_DATA: Initialisierung von FBD- Daten im Schlüssel: bei Hitag 2: FBD-SecretKeys, WUP-Nummer; bei HitagPro: WUP-Nummer |
| 216 | IS_BMWEOL_1: Schreiben von BMW-EOL-Daten, Block 1 in den Schlüssel |
| 220 | IS_BMWEOL_0: Schreiben von BMW-EOL-Daten, Block 0 in den Schlüssel |
| 240 | IS_KEYCFG_PREP: Schlüsseldaten sind vorbereitet, Transponder Reset |
| 244 | IS_CLEAR_KEYPOS: Vorbereitung der initialisierten Position im CAS: Löschen CAM-Nr, PIA-Nr, BLOCKED |
| 248 | IS_CHECK_KEYDATA: Prüfen der Schlüsseldaten: Frequenz, Typ |
| 252 | IS_CHECK_KEYCFG: Prüfen der Schlüsselkonfiguration |
| 255 | IS_CHECK_JOBPAR: Default Wert, Reserviert für Ersatzschlüssel. |

### TAB_CAS_TRSP_INIT_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | IS_INVALID: Ungültiger Wert |
| 1 | IS_CPLT: Schlüssel komplett angelernt |
| 20 | IS_INITST_VERIFY: Seg. 5, Block 0, Page 0 verifizieren |
| 24 | IS_INITST_WR: nur HitagPro; Schreiben  CAS-Init  = 1 ind den Schlüssel (Seg. 5, Block 0, Page 0) |
| 28 | IS_KEYAUTH: Schlüsselauthentisierung mit den neuen Kryptodaten |
| 44 | IS_KEYCFG_VERIFY: Schlüsselkonfiguration verifizieren |
| 48 | IS_KEYCFG_RD: Schlüsselkonfiguration aus Trsp lesen |
| 52 | IS_KEYCFG_VALID: Prüfen der Schlüsselkonfiguration (ob gesperrt und richtig konfiguriert)  |
| 56 | IS_KEYCFG_LOCK: Schreiben und Sperren der neuen Konfiguration |
| 60 | IS_KEYCFG_CHECK: Prüfen der Schlüsselkonfiguration |
| 64 | IS_KEYCFG_RESTART:Restart bei einem Abbruch des CFG- Schreibens |
| 84 | IS_ISK_VERIFY: nur HitagPro; Secret Key und Sequence increment im Schlüssel verifizieren |
| 88 | IS_ISK: nur HitagPro; Generierung und Schreiben  Secret Key und Sequence increment in den Schlüssel |
| 92 | IS_ISK_SS: nur HitagPro; Select Segment 0 |
| 112 | IS_PW_WR: nur Hitag2; Generierung und Schreiben Passwort  - Page 3 -  in den Schlüssel |
| 116 | IS_SKH_WR: nur Hitag2; Generierung und Schreiben SercetKey high in den Schlüssel |
| 120 | IS_SKL_WR: nur Hitag2; Generierung und Schreiben SercetKey low in den Schlüssel |
| 124 | IS_SK_AUTH: nur Hitag2; Authentisierung mit default SecretKeys |
| 136 | IS_FCNT: Initialisierung Fahrzykluszähler  |
| 140 | IS_FC_SCNT: Initialisierung  FBD- und CA- Sequence counter |
| 156 | IS_FBD_DATA: Initialisierung von FBD- Daten im Schlüssel: bei Hitag 2: FBD-SecretKeys, WUP-Nummer; bei HitagPro: WUP-Nummer |
| 216 | IS_BMWEOL_1: Schreiben von BMW-EOL-Daten, Block 1 in den Schlüssel |
| 220 | IS_BMWEOL_0: Schreiben von BMW-EOL-Daten, Block 0 in den Schlüssel |
| 240 | IS_KEYCFG_PREP: Schlüsseldaten sind vorbereitet, Transponder Reset |
| 244 | IS_CLEAR_KEYPOS: Vorbereitung der initialisierten Position im CAS: Löschen CAM-Nr, PIA-Nr, BLOCKED |
| 248 | IS_CHECK_KEYDATA: Prüfen der Schlüsseldaten: Frequenz, Typ  |
| 252 | IS_CHECK_KEYCFG: Prüfen der Schlüsselkonfiguration |
| 255 | IS_CHECK_JOBPAR: Default Wert oder Ersatzschlüssel. |

### TAB_CAS_TRSP_KEY_AUTH_DEFAULT

| WERT | TEXT |
| --- | --- |
| 0 | mit default-Daten ist fehlgeschlagen, Schlüssel ist nicht anlernbar |
| 1 | Autentisierung mit default-Daten war erfolgreich, Schlüssel ist anlernbar |
| 2 | Kein Hitag2-Schlüssel |
| 255 | unbekannt/ungültig |

### TAB_CAS_TRSP_KEY_CONFIG_SUPPLIER

| WERT | TEXT |
| --- | --- |
| 0 | Schlüsselkonfiguration ist nicht ok, Schlüssel ist nicht anlernbar |
| 1 | Schlüsselkonfiguration ist ok, Schlüssel ist anlernbar |
| 2 | kein HitagPro-Schlüssel |
| 255 | unbekannt/ungültig |

### TAB_CAS_TRSP_TYPE

| WERT | TEXT |
| --- | --- |
| 1 | HT2 |
| 2 | HTPro |
| 255 | unbekannt |

### TAB_CAS_TRSP_VERRIEGELUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0 | Anlieferzustand |
| 1 | Verriegelt |
| 2 | Teilweise Verriegelt - Zwischenzustand |
| 3 | Fehlerhafte Konfiguration- Initialisierung nicht möglich |
| 4 | Kein normaler Anlieferzustand - Komplett unverriegelt |
| 255 | unbekannter Transpondertyp |

### TAB_CAS_UW_ABSCHALTVERHINDERER_KL15

| WERT | UWTEXT |
| --- | --- |
| 0 | Fahrzeuggeschwindigkeit größer Stillstand |
| 1 | Getriebeposition N (Waschstrassenmodus) |
| 2 | Abblendlicht ein |
| 3 | Geschwindigkeit unplausibel (HW-Eingang und CAN-Signal liefern unplausible Geschwindigkeit) |
| 4 | Fremdladung bei Hybridfahrzeugen |
| 100 | Motor läuft (nur für autom. KL15-Abschaltung) |
| 101 | Fertigungsmode aktiv (nur für autom. KL15-Abschaltung) |
| 102 | Präsentationsmodus (CAS-Montagemode) aktiv (nur für autom. KL15-Abschaltung) |
| 103 | Autom. KL15-Abschaltung per Diagnose deaktiviert (nur für autom. KL15-Abschaltung) |
| 104 | Bremse betätigt (nur für autom. KL15-Abschaltung) |
| 105 | Kupplung betätigt (nur für autom. KL15-Abschaltung) |
| 106 | OBD-Kommunikation aktiv (nur für autom. KL15-Abschaltung) |
| 107 | Flashmodus (Energiesparmode) aktiv (nur für autom. KL15-Abschaltung) |
| 108 | Gurt Fahrer gesteckt (nur für autom. KL15-Abschaltung) |
| 254 | Kein Abschaltverhinderer aktiv |
| 255 | unbekannter Abschaltverhinderer |

### TAB_CAS_UW_ABSCHALTVERHINDERER_KL30B

| WERT | UWTEXT |
| --- | --- |
| 0 | Motor läuft |
| 1 | Fahrzeuggeschwindigkeit größer Stillstand |
| 2 | Zündung ein (KL15 ein) |
| 100 | Entertainmentfunktion |
| 101 | Remote Services |
| 102 | Restwärme |
| 103 | Standheizung /Standlüften |
| 104 | Nachlauf RSE |
| 105 | Remote Hupen |
| 106 | DWA |
| 107 | Rollüberwachung |
| 108 | Kühlmitteltemperaturanfrage durch Kombi |
| 109 | Einschlafverhinderer |
| 110 | Weckerproblem |
| 111 | Tankleckdiagnose |
| 112 | Batteriewächter |
| 113 | Nachlauf E-Lüfter |
| 114 | elektr. Wasserpumpe für Turbo Lagerstuhl |
| 115 | Standlüften |
| 116 | Fremdladeerkennung Hybrid |
| 117 | Follow-me-Home |
| 118 | Nachlauf der elektrischen Wasserpumpe für Hybrid |
| 254 | kein Abschaltverhinderer/Standverbraucher aktiv |
| 255 | unbekannter Abschaltverhinderer/Standverbraucher |

### TAB_CAS_UW_BOTSCHAFTSFEHLER

| WERT | UWTEXT |
| --- | --- |
| 1 | Alive ungültig |
| 2 | Qualifier ungültig |
| 3 | Alive und Qualifier ungültig |
| 4 | Signalwerte ungültig |
| 5 | Signalwerte und Alive ungültig |
| 6 | Signalwerte und Qualifier ungültig  |
| 7 | Signalwerte, Alive und Qualifier ungültig |
| 8 | CRC ungültig |
| 9 | Alive und CRC ungültig |
| 10 | Qualifier und CRC ungültig |
| 11 | CRC,Alive und Qualifier ungültig |
| 12 | Signalwerte und CRC ungültig |
| 13 | Alive, Signalwerte und CRC ungültig |
| 14 | Qualifier, Signalwerte und CRC ungültig |
| 15 | Alive, Qualifier, Signalwerte und CRC ungültig |
| 16 | Botschaftsausfall |
| 31 | Botschaftsausfall |
| 255 | Ungültig / Unbekannt |

### TAB_CAS_UW_CPU_KOMPONENTEN

| WERT | UWTEXT |
| --- | --- |
| 0 | RAM Hauptcontroller |
| 1 | ROM Hauptcontroller |
| 2 | EEPROM Hauptcontroller |
| 3 | Register Hauptcontroller |
| 4 | Opcode Hauptcontroller |
| 5 | Watchdog Hauptcontroller |
| 100 | RAM Cocontroller |
| 101 | ROM Cocontroller |
| 102 | EEPROM Cocontroller |
| 103 | Register Cocontroller |
| 104 | Opcode Cocontroller |
| 105 | Watchdog Cocontroller |
| 200 | ELV-HW-Erkennung unplausibel (HW-Bestückung =  ELV nicht verbaut  und HW-Ausprägung in der SVK =  ELV verbaut  |
| 201 | ELV-HW-Erkennung unplausibel (HW-Bestückung =  ELV verbaut  und HW-Ausprägung in der SVK =  ELV nicht verbaut ) |
| 255 | Ungültig / Unbekannt |

### TAB_CAS_UW_DAUERBETAETIGUNG_TAGE

| WERT | UWTEXT |
| --- | --- |
| 0 | Dauerbetätigung über Kap-Sensor/Piezo-Sensor (Data-Leitung) erkannt |
| 1 | Dauerbetätigung über Zugsensor (Entriegeln-Leitung) erkannt |
| 2 | Mehrfachfehler - Dauerbetätigung an mehreren TAGEn über Zugsensor oder Kap-Sensor/Piezo-Sensor erkannt |
| 255 | Ungültig / Unbekannt |

### TAB_CAS_UW_ELV_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0 | Entriegelt |
| 1 | Verriegelt |
| 2 | ELV Zustand fehlerhaft/unplausibel |
| 255 | ungueltig/unbekannt |

### TAB_CAS_UW_ELV_STATUS_FEHLER

| WERT | UWTEXT |
| --- | --- |
| 0 | Die letzten beiden Statusbotschaften einer ELV-Aktivierung sind ungleich  |
| 1 | Empfangener ELV-Status ungleich dem erwarteten Status |
| 2 | Signal ST_ELV und/oder ST_ELV_DIV ungültig |
| 3 | Unterschiedliche Werte in den Signalen ST_ELV und ST_ELV_DIV |
| 255 | Ungültig / Unbekannt |

### TAB_CAS_UW_HW_EINGANG

| WERT | UWTEXT |
| --- | --- |
| 0 | HW-Eingang MOST-WUP |
| 1 | Schalter Motorhaubenkontakt (MHK) |
| 2 | Taster Center Lock (CLT) |
| 3 | Taster Entriegeln Heckklappe Innen(TOEHKI) |
| 4 | Taster Zentralsichern Heckklappe(TZSHK) |
| 5 | Schalter HOTEL |
| 255 | unbekannt/ungültig |

### TAB_CAS_UW_SCHLUESSEL_POSITION

| WERT | UWTEXT |
| --- | --- |
| 0 | Schluessel 0 |
| 1 | Schluessel 1 |
| 2 | Schluessel 2 |
| 3 | Schluessel 3 |
| 4 | Schluessel 4 |
| 5 | Schluessel 5 |
| 6 | Schluessel 6 |
| 7 | Schluessel 7 |
| 8 | Schluessel 8 |
| 9 | Schluessel 9 |
| 255 | ungueltig/unbekannt |

### TAB_CAS_UW_STATUS_FAHRZEUGSTILLSTANDSERKENNUNG

| WERT | UWTEXT |
| --- | --- |
| 0 | Stillstand |
| 1 | Fahrt |
| 255 | unbekannt/ungueltig |

### TAB_CAS_UW_STATUS_MOTORSTILLSTANDSERKENNUNG

| WERT | UWTEXT |
| --- | --- |
| 0 | Motor steht |
| 1 | Motor laeuft |
| 255 | unbekannt/ungueltig |

### TAB_CAS_UW_VERBAUORT_TAGE

| WERT | UWTEXT |
| --- | --- |
| 1 | Fahrertür/-seite (FT) |
| 2 | Beifahrertür/-seite (BFT) |
| 4 | Fahrertür/-seite hinten (FTH) |
| 8 | Beifahrertür/-seite hinten (BFTH) |
| 255 | ungültig/unbekannt |

### TAB_CAS_ZV_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Entriegelt |
| 1 | Verriegelt |
| 2 | Gesichert |
| 3 | Crash-Mode |
| 128 | Klappe/Scheibe geschlossen |
| 129 | Klappe/Scheibe geöffnet |
| 130 | Klappe in Vorrast |
| 200 | Klappe in Vorraststellung |
| 201 | Klappe nicht in Vorraststellung |
| 255 | Ungültig/Unplausibel/Nicht verbaut |

### TAB_CA_SCHLUESSEL_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Schlüssel 0 |
| 0x01 | Schlüssel 1 |
| 0x02 | Schlüssel 2 |
| 0x03 | Schlüssel 3 |
| 0x04 | Schlüssel 4 |
| 0x05 | Schlüssel 5 |
| 0x06 | Schlüssel 6 |
| 0x07 | Schlüssel 7 |
| 0x08 | Schlüssel 8 |
| 0x09 | Schlüssel 9 |
| 0x0A | Schlüssel 10 |
| 0x0B | Schlüssel 11 |
| 0x0C | Schlüssel 12 |
| 0x0D | Schlüssel 13 |
| 0x0E | Schlüssel 14 |
| 0x0F | Schlüssel 15 |
| 0x10 | Schlüssel 16 |
| 0x11 | Schlüssel 17 |
| 0x12 | Schlüssel 18 |
| 0x13 | Schlüssel19 |
| 0xFF | keine Kommunikation möglich oder kein weiterer Schlüssel |

### TAB_ELV_FULL_CYCLE_MERKER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Full-Cycle-Merker gesetzt |
| 0x01 | Full-Cycle-Merker gesetzt |
| 0xFF | Ungültig/Unbekannt |

### TAB_EWS5_STATE

| WERT | TEXT |
| --- | --- |
| 0 | EWS5 steht nicht zur Verfügung |
| 1 | CAS im Zustand EWS5 aktiv und E5_KEY wurde aus dem EEPROM gelöscht. Normalbetrieb |
| 2 | CAS im Zustand „EWS5 aktiv“ und  E5_KEY ist im EEPROM abgelegt |
| 255 | CAS im Zustand „EWS5 nicht aktiv |

### TAB_STEUERN_EWS4_MODE

| WERT | NAME | TEXT | DATA_LENGTH |
| --- | --- | --- | --- |
| 0x01 | LOCK_EWS4 | LOCK DMEDDE-Sk & Trsp-Sk | 0 |
| 0x02 | WRITE_DMEDDE_SK | Write DME/DDE-Sk | 16 |
| 0x03 | WRITE_TRSP_SK | Write Trsp-Sk | 16 |
| 0x04 | LOCK_DMEDDE_SK | Lock DME/DDE-Sk | 0 |
| 0x05 | LOCK_TRSP_SK | Lock Trsp-Sk | 0 |
| 0x07 | UNLOCK_TRSP_SK | UnLock Trsp-Sk | 16 |
| 0x11 | WRITE_E5_KEY | Set EWS5-Key | 8 |
| 0xFF | UNKNOWN_MODE | UNKNOWN_MODE | 0 |

### TAB_TRSP_KEY_DATA_CONSISTENT

| WERT | TEXT |
| --- | --- |
| 0 | Schlüsseldaten sind nicht konsistent - nur teilweise ausgelesen |
| 1 | Schlüsseldaten sind konsistent - Vollständig ausgelesen |
| 255 | Unbekannt/Ungültig |

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

### TAB_ZV_URSACHE

| WERT | TEXT |
| --- | --- |
| 0 | keine Aktion |
| 1 | Fernbedienungstaste |
| 2 | ZV-Ansteuerung über Diagnose |
| 3 | Zentralverriegelungstaster - Centrelock |
| 4 | Geschwindigkeit grösser 16 kmh |
| 5 | Entriegeln bei KL15 aus |
| 6 | Verriegeln nach Timeout ohne Klappenkontaktänderung |
| 7 | CA-Anforderung Entriegeln |
| 8 | Crash-Entriegeln |
| 9 | RemoteDoorUnlock |
| 10 | RemoteDoorLock |
| 11 | CA-Anforderung Verriegeln |
| 12 | Schließzylinder FAT entriegeln |
| 13 | Schließzylinder FAT verriegeln |
| 14 | Zustandsänderung HKL |
| 15 | Zustandsänd. Türkontakt - Reversieren aufgrund mechanischer Asynchronität |
| 16 | Sicherheitsfahrzeug Entriegeln |
| 17 | Sicherheitsfahrzeug Verriegeln |
| 18 | Sicherheitsfahrzeug Selektiv Entriegeln |
| 20 | TAGE FT |
| 21 | TAGE BFT |
| 22 | TAGE FTH |
| 23 | TAGE BFTH |
| 24 | MANTRA - Manipulierter Transponder |
| 25 | Übergang von Zustand Sichern in Verriegelt durch KL15 ein |
| 26 | Übergang von Zustand Sichern in Verriegelt durch Schlüssel an der Transponderspule |
| 27 | CA-Anforderung Sichern |
| 28 | CA-Anforderung HK/HS |
| 29 | TOEHKI |
| 30 | TOEHKA oder TOEHS |
| FF | undefinierter Zustand |

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
| 255 | ungültig |
