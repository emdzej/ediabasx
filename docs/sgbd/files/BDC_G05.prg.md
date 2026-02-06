# BDC_G05.prg

## General

|  |  |
| --- | --- |
| File | BDC_G05.prg |
| Type | PRG |
| Jobs | 113 |
| Tables | 809 |
| Origin | BMW EE-420 Warneke,Sascha |
| Revision | 1.000 |
| Author | Visteon EE-420 Trifonov, Altran EE-421 Haase |
| ECU Comment | Teststand for 8.46.10 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Body Domain Controller BDC-03 ab SP18 |  |  |
| ORIGIN | string | BMW EE-420 Warneke,Sascha |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | Visteon EE-420 Trifonov, Altran EE-421 Haase |  |  |
| COMMENT | string | Teststand for 8.46.10 |  |  |
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

### CALID_CVN_LESEN

OBD Calibration ID, CVN Calibration verification number UDS  : $22   ReadDataByIdentifier UDS  : $2541 CAL-ID Calibration ID and CVN Calibration verification number

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### STATUS_SCHLUESSELSUCHE_HISTORIE

Der Job dient zum Auslesen des Historienspeichers für Schlüsselsuchen. Hinweise: - Der Job gibt für jeden Historieneintrag einen eigenen EDIABAS-Ergebnissatz zurück. - Anzahl der Einträge: 20 - Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste  0x2301 STATUS_SCHLUESSELSUCHE_HISTORIE

_No arguments._

### _STATUS_LICHT_KURZSCHLUSSCOUNTER_ABS

Kurzschluss-Counter des angegebenen Leuchtenausgangs _STATUS_LICHT_KURZSCHLUSSCOUNTER_ABS (0x4514)

_No arguments._

### _STATUS_LICHT_KL15_KURZSCHLUSS_WIEDERAKTIVIERUNG_COUNTER

Moegliche Anzahl der Wiederaktivierungen durch Klemme 15 Ein fuer jeden Lampenausgang. _STATUS_LICHT_KL15_KURZSCHLUSS_WIEDERAKTIVIERUNG_COUNTER (0x4516)

_No arguments._

### _STATUS_KEYINFO_DATEN_UPDATE

Auslesen der KeyInfo-Daten Alle Pages werden auf einmal ausgelesen JobHeaderFormat 0x5000 _STATUS_KEYINFO_DATEN_UPDATE

_No arguments._

### _STATUS_ALM_HISTORIE

Der ALM-Historie-Speicher kann manuell gestoppt werden, indem bei gedrückt gehaltener CLW-ER oder CLW-VR (SigClOpDrd) der SST betätigt. Diese Sperre wird mit ZV-Zustand gesichert wieder aufgehoben. Der ALM-Historie-Speicher wird beim SG Anlieferzustand gelöscht. 0x5100 _ALM_HISTORIE

_No arguments._

### _STEUERN_ALM_HISTORIE

Clear the Wakeup history memory (ALM-History-Ringspeicher).  0x5100 _ALM_HISTORIE

_No arguments._

### _STATUS_ALM_AWAKE

ALM-Awake-Status (Liste alles "RUN"- und "POST_RUN"-Requests und Einschlafverhinde  0x5102 _ALM_AWAKE

_No arguments._

### _STATUS_HW_OPTIONEN_CODIERUNG

Der Job zeigt die HW Optionen der mit der HW verfügbaren Funktionen.  0x5105 _HW_OPTIONEN_CODIERUNG

_No arguments._

### _STEUERN_HW_OPTIONEN_CODIERUNG

Schreiben der HW-Varianten Der Job wird nur einmalig in EOL beim Lieferant geschrieben JobHeaderFormat 0x5105 _STEUERN_HW_OPTIONEN_CODIERUNG

| Name | Type | Description |
| --- | --- | --- |
| HW_OPTIONEN | string | Hardware Optionen. Hinweise: - 00000001 (hex) = HW_OPTION_GW_STARCOUPLER_PORT12 - 00000002 (hex) = HW_OPTION_GW_STARCOUPLER_PORT34 - 00000004 (hex) = HW_OPTION_GW_STARCOUPLER_PORT56 - 00000008 (hex) = HW_OPTION_GW_STARCOUPLER_PORT78 - 00000010 (hex) = HW_OPTION_GW_B2CAN - 00000020 (hex) = HW_OPTION_GW_FASCAN - 00000040 (hex) = HW_OPTION_GW_FDCAN - 00000080 (hex) = HW_OPTION_GW_OABR_1_PORT - 00000100 (hex) = HW_OPTION_GW_OABR_2_PORT - 00000200 (hex) = HW_OPTION_GW_OABR_3_PORT - 00000400 (hex) = HW_OPTION_GW_OABR_4_PORT - 00000800 (hex) = HW_OPTION_GW_OABR_5_PORT - 00001000 (hex) = HW_OPTION_GW_OABR_6_PORT - 00002000 (hex) = HW_OPTION_GW_RESERVE_1 - 00004000 (hex) = HW_OPTION_GW_RESERVE_2 - 00008000 (hex) = HW_OPTION_GW_RESERVE_3 - 00010000 (hex) = HW_OPTION_BODY_AC_ECU_INTEGRATION - 00020000 (hex) = HW_OPTION_BODY_AC_HEATINGVALVE - 00040000 (hex) = HW_OPTION_BODY_PF_MOTORBRIDGE - 00080000 (hex) = HW_OPTION_BODY_HC_MIRRORHEATING - 00100000 (hex) = HW_OPTION_BODY_WW_REARWIPER_2 - 00200000 (hex) = HW_OPTION_BODY_WW_REARWIPER - 00400000 (hex) = HW_OPTION_BODY_WW_FRONTWIPER - 00800000 (hex) = HW_OPTION_BODY_SRA - 01000000 (hex) = HW_OPTION_BODY_LC_FUNCTIONAL_LED - 02000000 (hex) = HW_OPTION_BODY_LC_LWR - 04000000 (hex) = HW_OPTION_BODY_LC_WELCOME - 08000000 (hex) = HW_OPTION_BODY_LC_SIDEMARK - 10000000 (hex) = HW_OPTION_BODY_CA_DOOR_HANDLE - 20000000 (hex) = HW_OPTION_BODY_CA_ANTENNA_ENTRY - 40000000 (hex) = HW_OPTION_BODY_PF_LIN_KLMP - 80000000 (hex) = HW_OPTION_BODY_DEBUG |

### _STATUS_JTAG_ENCRYPTED

Liest das 64 Byte lange verschlüsselte JTAG Passwort aus.  0x510C _JTAG_ENCRYPTED

_No arguments._

### _STEUERN_JTAG_UNLOCK

Für Testzwecke, falls JTAG offen. Nur im BTLD wenn JTAG nicht gesperrt, EwsSk unlock und gelöscht ist  0x510D _JTAG_UNLOCK

| Name | Type | Description |
| --- | --- | --- |
| JTAG_PASSWORD | binary | Das Passwort muss 32 Bytes lang sein. Individueller Schlüssel (0xAA.... AA = Permanent Lock) |

### _STATUS_FUSI_SAFEMECH_INTERVENTION

Der Entwicklerjob dient dazu, ein vergangenes Eingreifen des FuSi Safe-Mechanismus anzuzeigen. Zweck: Support zum Test/Validierung der Safety Mechanismen  0x5121 _FUSI_SAFEMECH_INTERVENTION

_No arguments._

### _STEUERN_STEUERGERAETE_RESET_EXTERN_WATCHDOG

_STEUERN_STEUERGERAETE_RESET_EXTERN_WATCHDOG

| Name | Type | Description |
| --- | --- | --- |
| WD_TIME_NOTRIGGER | unsigned long | 0 ... 80 : Ohne Auswirkung 120 ... 800 initiert LIMP-Mode Starter, Fahrlicht, Blinker, Wischer 1200 ... 0xFFFFFFFF initiert LIMP-Mode uns HW-Reset des Haupt-Controller |

### STATUS_FH_THERMOMONITOR_AKTIV

STATUS_FH_THERMOMONITOR_AKTIV

_No arguments._

### STEUERN_FH_THERMOMONITOR_AKTIV

STEUERN_FH_THERMOMONITOR_AKTIV

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_DEV_FH_AUSWAHL HEX format (0xXX) |
| AKTION | string | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle: Zuordnung siehe Tabelle TAB_THERMOMONITOR_SETZEN |

### STATUS_FH_BEWERTUNG_KENNLINIEN

Auslesen der gespeicherten Kennlinien/Adaptionsdaten fuer den Einklemmschutz

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Auswahl der Baureihe F020,F021,F022,F023,F030,F031,F032,F033,F034,F036,F015,F016,I001,F056,F057,F045,I012,G011,G012,G030,G031 |
| ELEMENT | string | FA:  Fenster Fahrerseite BF:  Fenster Beifahrerseite FAH: Fenster Fahrerseite hinten BFH: Fenster Beifahrerseite hinten |

### _STEUERN_STEUERGERAETE_RESET_FAST

_STEUERN_STEUERGERAETE_RESET_FAST

_No arguments._

### _STATUS_SERVICESCHLUESSELDATEN_AKTUALISIERUNGSSTATUSBYTES

0xF001 _STATUS_SERVICESCHLUESSELDATEN_AKTUALISIERUNGSSTATUSBYTES

| Name | Type | Description |
| --- | --- | --- |
| TAB_INDEX | unsigned char | Das Argument zur Auswahl des Schlüssels (Position) gemäß Tabelle TAB_SCHLUESSEL_POSITION |

### STATUS_ANF_ZUSTAND_FZG

Der Job dient zum Auslesen des Historiespeichers für Fahrzeug-Zustandsanforderungen über die Dienstenachricht "Dynamische PDU Switch=157 (Anforderung Zustand Fahrzeug)". Die Dienstenachricht wird u.a. von der RCP-Funktion verwendet. JobHeaderFormat 0x170F STATUS_ANF_ZUSTAND_FZG

_No arguments._

### STATUS_STANDNUTZUNG_HISTORIE_10

Der Job dient zum Auslesen des Standnutzungshistorienspeichers. Es werden die 10 jüngsten (= aktuellsten) Historienspeicher-Datensätze von insgesamt 40 maximal verfügbaren zurückgegeben. Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste. Es werden immer 10 vollständige Datensätze ausgegeben. D.h. wurde ein Datensatz noch nicht geschrieben (z.B. neues Fahrzeug oder Historie per Diagnosejob gelöscht), dann werden in allen Results eines Historiendatensatzes die Defaultbelegung 0xFF ... 0xFF eingetragen (z.B. STAT_KILOMETERSTAND_WERT = FF FF FF). 0x2534 STATUS_STANDNUTZUNG_HISTORIE_10

_No arguments._

### STATUS_STANDNUTZUNG_HISTORIE_40

Der Job dient zum Auslesen des Standnutzungshistorienspeichers. Es werden alle 40 Historienspeicher-Datensätze zurückgegeben. Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste. Es werden immer 40 vollständige Datensätze ausgegeben. D.h. wurde ein Datensatz noch nicht geschrieben (z.B. neues Fahrzeug oder Historie per Diagnosejob gelöscht), dann werden in allen Results eines Historiendatensatzes die Defaultbelegung 0xFF ... 0xFF eingetragen (z.B. STAT_KILOMETERSTAND_WERT = FF FF FF FF). 0x2535 STATUS_STANDNUTZUNG_HISTORIE_40

_No arguments._

### STATUS_ELSV

Status ELSV UDS: $22 ReadDataByIdentifier

_No arguments._

### STATUS_ELSV_KLEMMENSPANNUNG

Status ELSV Spannung Der Aufruf gibt die aktuelle Klemmenspannung des ELSV SG in mV zurück. UDS: $22 ReadDataByIdentifier

_No arguments._

### STATUS_ELSV_STATISTIK

Status ELSV Statistikzaehler UDS: $22 (0xD087) ReadDataByIdentifier

_No arguments._

### STATUS_FAHRPROFIL

(0xD0F2)

_No arguments._

### STATUS_IM

0xD260 IM

_No arguments._

### STEUERN_IM_DATA

0xD261 IM_DATA

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Das Argument dient zur Auswahl der auszuführenden Aktion. |
| DATA1 | string | Das Argument  enthält die zu schreibenden Daten (Teil 1). |
| DATA2 | string | Das Argument  enthält die zu schreibenden Daten (Teil 2). |

### STEUERN_IM_OP

0xD262 IM_OP

| Name | Type | Description |
| --- | --- | --- |
| MODE1 | string | Das Argument dient zur Auswahl der auszuführenden Aktion. |
| MODE2 | string | Das Argument dient zur Bestätigung der auszuführenden Aktion. |

### STATUS_IM_CURRENT_TRSP

0xD263 IM_CURRENT_TRSP

_No arguments._

### STEUERN_IM_ADEV_DATA

0xD264 IM_ADEV_DATA

| Name | Type | Description |
| --- | --- | --- |
| TAB_POS | string | Das Argument enthält die Position des Authentisierungs-Devices in der ZSG-internen ADEV-Tabelle. |
| ID | string | Das Argument enthält die ID des Authentisierungs-Devices. Hinweis: Die TRSP-ID wird ggf. mit führenden  Nullen auf 6-Byte Länge ergänzt. Beispiel: '00 00 12 34 56 78' 6-byte binary Hinweise: Alle Werte ausser 'FF FF FF FF FF FF' = Gültige Authentisierungs-Device-ID. 'FF FF FF FF FF FF'= unbekannt Beispiel '12 34 AB EF 98 76' Ausgabe als 6-Byte hex-Wert. |
| TYPE | string | Das Argument enthält den Typ des Authentisierungs-Devices. |
| DISABLED | string | Das Argument enthält den Status, ob das Authentisierungs-Device gesperrt (disabled) ist. |

### STATUS_IM_ANLIEFERZUSTAND

0xD265 IM_ANLIEFERZUSTAND

_No arguments._

### STATUS_IM_FREQ_CONF

0xD266 IM_FREQ_CONF

_No arguments._

### STEUERN_IM_FREQ_CONF

0xD266 IM_FREQ_CONF

| Name | Type | Description |
| --- | --- | --- |
| INIT_FREQ | string | Das Argument enthält die Kennzahl für Funkfrequenz. |
| TRSP_GEN | string | Das Argument (optional) enthält die Art der verwendeten Transponder. Default ist HTPro Gen2 (35UP). Alle Werte ausser 2 und 8 werden wie 8 interpretiert (DEFAULT immer 35UP). Hinweis: Werte sind vorzusehen. In erster Implementierung wird intern fest mit den Default-Werten für 35UP gearbeitet. |
| HASHMODE | string | Das Argument (optional) enthält den Hashmode. Default ist 35UP_HASH. Alle Werte ausser 2 und 8 werden wie 8 interpretiert (DEFAULT immer 35UP). Werte sind vorzusehen. In erster Implementierung wird fest mit den Default-Werten für 35UP gearbeitet. |

### STATUS_IM_WUP

0xD267 IM_WUP

_No arguments._

### STEUERN_IM_WUP

0xD267 IM_WUP

| Name | Type | Description |
| --- | --- | --- |
| FBD_WAKEUP | string | Das Argument enthält das zu schreibende FBD-Wakeup-Pattern |

### STATUS_WCA_STATUS

0xD26B WCA_STATUS Der Job dient zum Auslesen des aktuellen Status der Wireless Charging Ablage.

_No arguments._

### STATUS_BATTERIEVORSCHAEDIGUNGSHISTORIE_LESEN

Der Job dient zum Auslesen des Historienspeichers für die Batterievorschädigunshistorie. JobHeaderFormat 0xD2DE BATTERIEVORSCHAEDIGUNGSHISTORIE_LESEN

_No arguments._

### STEUERN_THERMO_CUPHOLDER_LUEFTER

Steuern_THCH_Luefter_start 0x00 = Luefter aus 0x01 = Luefter an

| Name | Type | Description |
| --- | --- | --- |
| AKTION | char | Aktion fuer Thermocupholder-Luefter 0x00 = Luefter aus 0x01 = Luefter an |

### STATUS_THERMO_CUPHOLDER_SPANNUNG

Status_Thermo_Cupholder_Spannung Der Diagnosejob gibt die aktuelle Spannung des Thermocupholders zurueck UDS: 22 ReadDataByIdentifier

_No arguments._

### STATUS_ZV_HISTORIE

Historienspeicher für Zustandsänderungen und Aktionen des Zentralverriegelungs-Masters. JobHeaderFormat 0xDAC6 ZV_HISTORIE

_No arguments._

### STATUS_FBD_EMPFAENGER

Dieser Job dient zum Auslesen des Status des FBD-Empfängers 0xDAC9 FBD_EMPFAENGER

_No arguments._

### STATUS_ISV_STATISTIK

Status ISV Statistikzaehler UDS: $22 (0xDB42) ReadDataByIdentifier Dieser Job liefert den Zustand der Statistikzähler: - Relaiszustandswidersprüche: 30F1-Relais, 30F2-Relais, 30B1-Relais, 30B2-Relais, HHS-Relais, 30B5-Relais, 30B6-Relais, 30B7-Relais - Kurzschlusszähler Lastklemmentreiber: KL30B_DxE, KL30B_ACSM, KL15N

_No arguments._

### STEUERN_ISV_STATISTIK_RESET

ELSV_Denormierung_START UDS: $2E WriteDataByIdentifier

_No arguments._

### STATUS_KLEMMEN_HISTORIE

Der Job dient zum Auslesen des Klemmen-Historiespeichers des CAS. Der Historienspeicher gibt den eingenommenen Klemmenzustand, das Transitions-Ereignis (d.h. Anforderer bzw. Ursache für einen Klemmenwechsel) sowie den Zeitpunkt des Klemmenwechsels wieder. JobHeaderFormat 0xDC5C STATUS_KLEMMEN_HISTORIE

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

### STATUS_REMOTE_ENGINE_START_HISTORIE

Der Job dient zum Auslesen des Historiespeichers fur Remote-Engine-Start (RES) Anforderungen. JobHeaderFormat 0xE373 STATUS_REMOTE_ENGINE_START_HISTORIE

_No arguments._

### STATUS_CKT_HISTORIE

Der Job dient zum Auslesen des Historienspeichers für die CKT-Aktionen. Hinweise: - Der Job gibt für jeden Historieneintrag einen eigenen EDIABAS-Ergebnissatz zurück - Er dient zur Analyse von Feldproblemen und statistische Zwecken - Der erste zurückgelieferte Eintrag ist immer der aktuellste, der letzte zurückgelieferte Eintrag der älteste. (Maximal 50 Einträge) JobHeaderFormat 0xE398 CKT_HISTORIE.

_No arguments._

### STATUS_NIV_MODUL_SACHNR

STATUS_NIV_MODUL_SACHNR

_No arguments._

### STATUS_FAHRGESTELLNUMMER

Lesen der Fahrgestellnummer JobHeaderFormat 0xF190 FAHRGESTELLNUMMER_LANG

_No arguments._

### STEUERN_FAHRGESTELLNUMMER

Schreiben der Fahrgestellnummer JobHeaderFormat 0xF190 FAHRGESTELLNUMMER_LANG

| Name | Type | Description |
| --- | --- | --- |
| FGNR17 | string | 17-stellige Fahrgestellnummer. Zum Zurücksetzenim Steuergerät wird das Argument '00000000000000000' verwendet. Hinweis: Der Argumentwert '00000000000000000' wird SGBD-intern in 0xFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF gewandelt, bevor er an das CAS gesendet wird. |

### STEUERN_FENSTERHEBER_DENORMIEREN

STEUERN_FENSTERHEBER_DENORMIEREN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL |

### STEUERN_FH_DENORMIERUNGS_LOGGER_LOESCHEN

Löscht den Denormierlogger STEUERN_FH_DENORMIERUNGS_LOGGER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL Werttabelle (HEX format) |

### STATUS_FH_SCHLIESSZEIT_VORNE

Liest die Schliesszeit aus $22 60 08          Liest die Kennline der Fahreseite $22 60 09          Liest die Kennline der Beifahreseite

_No arguments._

### STEUERN_FENSTERHEBER_KENNLINIE_LOESCHEN

STEUERN_FENSTERHEBER_KENNLINIE_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL |

### STATUS_FH_SCHLIESSZEIT_HINTEN

Liest die Schliesszeit aus $22 60 0A          Liest die Kennline der Fahreseite hinten $22 60 0B          Liest die Kennline der Beifahreseite hinten

_No arguments._

### STATUS_FH_REVERSIER_LOGGER_LESEN

Auslesen der Reversierlogger pro Scheibe. Nicht unterstütze Elemente müßen entfernt werden  STATUS_FH_REVERSIER_LOGGER_LESEN

_No arguments._

### STEUERN_FH_MOTORSTOP_LOGGER_LOESCHEN

Löscht den Logger für Abbruch Motorlauf. Der DID muss aus dem SG-Spezifischen Bereich kommen. FH_MOTORSTOP_LOGGER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe tabelle TAB_FH_AUSWAHL Werttabelle (HEX format) |

### STEUERN_FENSTERHEBER

STEUERN_FENSTERHEBER

| Name | Type | Description |
| --- | --- | --- |
| SUBFUNCTION | unsigned char | Auswahl der Subfunktion, die aufgerufen werden soll: 1 - StartRoutine 2 - StopRoutine 3 - RequestRoutineResults |
| ELEMENT | string | Auswahl siehe Tabelle TAB_FH_AUSWAHL |
| RICHTUNG | unsigned char | 0: Öffnen 1: Schliessen |
| ZEIT | unsigned int | Übergebener Wert (in ms) wird auf 100ms Schritte abgerundet |

### STATUS_FH_MOTORSTOP_LOGGER_LESEN

Liest die aufgezeichneten Daten des Loggers für Abbruch Motorlauf Die letzten 10 Ereignisse werden für jeden Ort gespeichert.  STATUS_FH_MOTORSTOP_LOGGER_LESEN

_No arguments._

### STEUERN_FH_REVERSIER_LOGGER_LOESCHEN

Löscht den Reversierlogger FH_REVERSIER_LOGGER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | Zuordnung siehe Tabelle TAB_FH_AUSWAHL Werttabelle (HEX format) |

### STATUS_FH_DENORMIERUNGS_LOGGER_LESEN

Liest die aufgezeichneten Daten des Denormierungsloggers. Nicht unterstütze Elemente müßen entfernt werden  STATUS_FH_DENORMIERUNGS_LOGGER_LESEN

_No arguments._

### STATUS_EM_FE_MODE

Auslesen der Aktivierungsliste für den Fe-Mode.  0x5106 _EM_FE_MODE

_No arguments._

### STEUERN_EM_FE_MODE

Schreiben der Aktivierungsliste für den Fe-Mode. Die FeTraFla ID (hex) kann über die Spalte "WERT" in der Tabelle TAB_FeTraFla_ID ausgewählt werden Danach muss das Argument "WERT" durch den entsprechenden FE_MODE (0 oder 1) ersetzt werden

| Name | Type | Description |
| --- | --- | --- |
| FE_MODE | unsigned char | FE_MODE_INACTIVE = 0x00 FE_MODE_ACTIVE = 0x01 |
| ARGUMENT_FETRAFLA_ID_1 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_2 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_3 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_4 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |
| ARGUMENT_FETRAFLA_ID_5 | unsigned char | Tabelle TAB_FETRAFLA_ID WERT |

### STEUERN_LIN_QUERY

0x1009 STEUERN_LIN_QUERY

| Name | Type | Description |
| --- | --- | --- |
| VERBAUORT_ID | unsigned int | Auswahl siehe Tabelle VerbauortTabelle |
| LEN_UDS_REQUEST_LINSLAVE | unsigned int | Länge des UDS-Anfrage-Telegramms an den LIN-Slave |
| UDS_REQUEST_LINSLAVE | binary | Anfragetelegramm an LIN-Slave Folgende Übergabe-Formate müssen unterstützt werden: '0x01,0x02,0x03...' oder '01,02,03...' oder '0x01 0x02 0x03...' oder '01 02 03...' |

### STEUERN_ZUSTAND_FAHRZEUG

Mit diesem Job wird per Diagnose der aktuelle Fahrzeugzustand Parken-Wohnen-Fahren geändert. Siehe ARG_ZUSTAND_FAHRZEUG. Für Hinweise zur Umsetzung siehe im Anhang: UDS_31_01_1031_STEUERN_ZUSTAND_FAHRZEUG_HINWEISE.txt Relevanz: Umzusetzen vom PWF-Master. Alle Anforderungen zu Zustandswechseln über diesen Job werden im BDC-Fahrzeug-Zustand -Motorlauf als Standfunktion- sowie im Modus RSU (Remote Software Update) nicht durchgeführt. Jobresult:  Conditions not correct. JobHeaderFormat 0x1031 STEUERN_ZUSTAND_FAHRZEUG

| Name | Type | Description |
| --- | --- | --- |
| ARG_ZUSTAND_FAHRZEUG | string | Das Argument gibt an in welchen PWF Zustand geschaltet werden soll. Hinweise: - Zuordnung erfolgt gemäß Tabelle PWF_ZUSTAND_FAHRZEUG_ARG TEXT - PARKEN_BN_NIO - PARKEN_BN_IO - STANDFUNKTIONEN_KUNDE_NICHT_IM_FZG - WOHNEN - PRUEFEN_ANALYSE_DIAGNOSE - PARKEN_BN_IO_VERK - FAHRBEREITSCHAFT_BEENDEN |

### STATUS_ETH_ARP_TABLE

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1043

| Name | Type | Description |
| --- | --- | --- |
| INPUTDATA | binary | 1st byte, uint8: IP_VERSION_TAB Used IP version of the network interface for which the ARP table shall be returned. IP_VERSION_TAB = 0 if the entry uses IPv4, IP_VERSION_TAB = 1 if the entry uses IPv6. --------- followed by 16 bytes ARP_TABLE_FOR_IP_ADDRESS: IP address of the network interface for which the ARP table shall be returned. IP address starting with the first octet (e.g., byte[0]=0xC0, byte[1]=0xA8, byte[2]=0x00, byte[3]=0x01 for IP address 192.168.0.1) For IPv4: byte[0] - byte[3]=IPv4 address, byte[4-15]=0. For IPv6: byte[0-15]=IPv6 address. --------- |

### STATUS_ETH_IP_CONFIGURATION

Shall return the ARP table of a given network interface. The interface shall be identified by its IP address. UDS   : $31 RoutineControl $01 StartRoutine $1045

| Name | Type | Description |
| --- | --- | --- |
| INTERNAL_EXTERNAL_ADDRESS | unsigned char | Identifies the network interface and its corresponding IP address (internal, external, all, further, optional application specific address) for which the IP configuration shall be returned and for which an optional gratuitous ARP shall be triggered. 1 byte uint8 {0= request internal IP address, 1= request external IP address (assigned by tester, cf. [100]) 0xff = request all IP-addresses, else = further, application specific IP address} |
| TRIGGER_GRATUITOUS_ARP | unsigned char | Defines whether the ECU shall send out a gratuitous ARP for the requested network interface. The gratuitous ARP shall be sent as soon as possible after being triggered. 1 byte uint8 {1= send gratuitous ARP for the requested network interface,  else = do not send gratuitous ARP} |

### STEUERN_ELSV_NORMIEREN

ELSV_Normierung_start UDS: $31 01 StartRoutine UDS: $31 02 StopRoutine UDS: $31 03 RequestRoutineResults

| Name | Type | Description |
| --- | --- | --- |
| STEUERPARAMETER | string | Normierungs-Subfunktion Tabelle TAB_ROUTINE_PARAMETER_ARG |

### STEUERN_ELSV_DENORMIEREN

ELSV_Denormierung_START UDS: $31 01 StartRoutine

_No arguments._

### STEUERN_ELSV_RESET_ZAEHLER

Reset ELSV Zähler UDS: $31 01 StartRoutine

| Name | Type | Description |
| --- | --- | --- |
| COUNTER_RESET | char | Normierungsaktion aus Tabelle TAB_ELSV_RESET_COUNTER_ARG 0x00 = axial eingefahren 0x01 = axial ausgefahren 0x02 = vertikal oben 0x03 = vertikal unten 0x04 = axial beide 0x05 = vertikal beide 0x06 = alle Bloecke 0x07 = alle Statistikzaehler 0x08 = Bloecke und Statistik |

### STEUERN_THERMO_CUPHOLDER_LED

Steuern_Thermo_Cupholder_LED Steuern Routine der Thermocupholder LEDs (Corona, Heizen, Kühlen)

| Name | Type | Description |
| --- | --- | --- |
| THCH_SEITE | char | Auswahl der Seite 0x00 = rechte Seite 0x01 = linke Seite |
| CORONA_LED_FARBE | char | Ansteuerung der LED-Farbe 0x00 = OFF 0x01 = BLUE 0x02 = RED 0x03 = GREEN |
| PUBU_LED_KUEHLUNG | char | Ansteuerung der Button-LED (Kuehlung) 0x00 = LED aus 0x01 = LED an |
| PUBU_LED_HEIZUNG | char | Ansteuerung der Button-LED (Heizung) 0x00 = LED aus 0x01 = LED an |

### STATUS_IM_ADEV_DATA

0xA260 IM_ADEV_DATA

| Name | Type | Description |
| --- | --- | --- |
| TAB_POS | string | Das Argument enthält die Position des Authentisierungs-Devices in der ZSG-internen ADEV-Tabelle. |

### STEUERN_IM_TRSP_INIT

0xA261 IM_TRSP_INIT

| Name | Type | Description |
| --- | --- | --- |
| TAB_POS | string | Das Argument enthält die Position des Authentisierungs-Devices in der ZSG-internen ADEV-Tabelle. |
| ID | string | Das Argument enthält die ID des Authentisierungs-Devices. Hinweis: Die TRSP-ID wird ggf. mit führenden  Nullen auf 6-Byte Länge ergänzt. Beispiel: '00 00 12 34 56 78' Hinweise: Alle Werte ausser 'FF FF FF FF FF FF' = Gültige Authentisierungs-Device-ID. 'FF FF FF FF FF FF'= unbekannt Beispiel '12 34 AB EF 98 76' Ausgabe als 6-Byte hex-Wert. |
| INIT_MODE | string | Festlegen des Anlernmodus (optional). |

### STEUERN_IM_ANLIEFERZUSTAND_START

0xA262 IM_ANLIEFERZUSTAND_START

| Name | Type | Description |
| --- | --- | --- |
| RESET_MODE | string | Das Argument legt fest welche Inhalte im ZSG in den Anlieferzustand versetzt werden sollen. Die Wegfahrsperre-Daten werden immer gelöscht. |
| AUTH_DATA | string | Das (optionale) Argument enthält einen Authentisierungscode. |

### STATUS_NFC_READER_STATUS

0xA263 NFC_READER_STATUS Der Job dient zum Auslesen des Status eines NFC-Readers. Der anzusprechende Reader wird per Argument NFC_READER_SELECT ausgewählt. Wird kein Argument angegeben, so wird per Default der Reader Innen Vorne ausgewählt.

| Name | Type | Description |
| --- | --- | --- |
| NFC_READER_SELECT | string | Auswahl des abzufragenden NFC-Readers. Wird kein Argument angegeben, so wird per Default der Reader Innen Vorne ausgewählt. Zuordnung erfolgt gemäß Tabelle TAB_NFC_READER_ID |

### STEUERN_RSU_RESET_FAHRFREIGABESPERRE

Wenn bei der Funktion RSU (Remote Software Update) ein sicherheitsrelevanter Fehler auftritt, wird im BDC ein persistenter Status gesetzt, der die Fahrfreigabe verhindert. Nach einen manuellen Falsh durch die HO-BMW Werkstatt- BMW Pannenservice Mitarbeiter soll der persistente Status, durch diesen Diagnosejob zurückgesetzt werden können. JobHeaderFormat 0xA5F1 STEUERN_RSU_RESET_FAHRFREIGABESPERRE

| Name | Type | Description |
| --- | --- | --- |
| MANUELL_GEFLASHT | unsigned char | Antwort Ja oder Nein zu Frage "Wurde das Fahrzeug manuell geflasht?" Hinweise: - 0x00 = Fahrzeug nicht manuell geflasht - 0x01 = Fahrzeug manuell geflasht |
| GUELTIGE_FAHRZEUGKONFIGURATION | unsigned char | Antwort Ja oder Nein zu Frage "Besitzt das Fahrzeug eine fehlerfreie gültige Fahrzeugkonfiguration?" Hinweise: - 0x00 = Das Fahrzeug besitzt keine fehlerfreie gültige Fahrzeugkonfiguration - 0x01 = Das Fahrzeug besitzt eine fehlerfreie gültige Fahrzeugkonfiguration |

### STATUS_FBD_TELEGRAMM

0xAC59 STATUS_FBD_TELEGRAMM Status des letzten Empfangenes Funk-Telegramms Hinweis: innerhalb der letzten 10 Sekunden.

| Name | Type | Description |
| --- | --- | --- |
| FBD_EMPFAENGER_EMPFANGSMODUS | string | Das Argument enthält den Empfangsmodus, der aktiviert werden soll. Hinweise: - Explizites Zurückschalten in den Normal-Betrieb durch Argument NORMALMODUS. - Beim Einschlafen des ZSG wird automatisch ein Update des Modus durchgeführt. - Zuordnung erfolgt gemäß Tabelle TAB_FBD_POWERMODE_ARG |

### STATUS_FBD_FEHLER

0xAC5E FBD_FEHLER

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

### ARG_0X1001_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KLEMMEN_ZUSTAND_ARG | + | - | 0-n | - | unsigned char | - | TAB_KLEMMEN_ZUSTAND_ARG | - | - | - | - | - | Das Argument gibt an in welchen Klemmenzustand geschaltet werden soll. Siehe Table TAB_KLEMMEN_ZUSTAND_ARG.  Hinweise: - KL30F_EIN = Nur KL30F Ein, Alle anderen Klemmen aus - KL30B_EIN = KL30B Ein - KL30B_EIN_VERK = KL30B Ein mit verkürzter Nachlaufzeit von 15 Sekunden - KLR_EIN = KLR Ein - KL15_EIN = KL15 Ein |

### ARG_0X102F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MESSEMODUS | + | - | 0-n | high | unsigned char | - | PWF_MESSEMODUS | - | - | - | - | - | Das Argument gibt an in welchen Fahrzeugzustand  geschaltet werden soll. |

### ARG_0X1032_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_STATE | + | - | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | - | - | Steuerung der TAS-Nutzung |

### ARG_0X1033_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASU_REQUEST | + | - | 0-n | high | unsigned int | - | TASU_REQUEST_TAB | - | - | - | - | - | auszuführendes Kommando |

### ARG_0X2304_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Kein Reset Counter Spiegelheizung Aktivierungen wegen NSC 0x01: Reset Counter Spiegelheizung Aktivierungen wegen NSC |

### ARG_0X4506_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_LEUCHTEN_AUSGANG_DIGITAL_ARG | - | - | - | - | - | Element aus Lampenmapping. Übergeben werden kann sowohl die Ausgangs-ID (hex) als auch die Kurzbezeichnung des Ausgangs, (wie in ZSG_LC_35539 definiert), für den die Betriebsstundendauer zurückgesetzt werden soll. Bsp: 0x01 o. AL_L für Abblendlicht links 0x02 o. AL_R für Abblendlicht rechts ... 0x1C o. NSL_L für Nebelschlusslicht licht Zugelassene Werte siehe Tabelle TAB_AUSGANG_LEUCHTEN_RESET |

### ARG_0X4509_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12H_TIMER | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | 12h Timer |

### ARG_0X450A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DIAGCTRBLCAFSHOM_CURVERAD | m | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -2000.0 | 2000.0 | Vorgabe virtueller Kurvenradius |
| DIAGCTRBLCAFSHOM_VEL | km/h | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 250.0 | Vorgabe virtueller Ego-Geschwindigkeit |
| DIAGCTRBLCAFSHOM_STEA | ° | high | signed int | - | - | 100.0 | 1.0 | 0.0 | -90.0 | 90.0 | Vorgabe virtueller effektiver Lenkwinkel Vorderachse |

### ARG_0X4530_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM_WERT_1 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Das Argument enthält den ersten PWM Wert |
| PWM_WERT_2 | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Das Argument enthält den zweiten PWM Wert |
| ZYKLUS_ZEIT | 0-n | high | unsigned char | - | TAB_ZYKLUS_ZEIT | - | - | - | - | - | Das Argument enthält die Zykluszeit, also die Zeit zwischen dem Wechsel zwischen den beiden PWM Werten |
| MODUS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Das Argument enthält den Modus für das gleichzeitige Wechseln des PWM Wertes. 0 = Alle Lampen wechseln gleichzeitig den PWM Wert 1 = Die Lampen wechseln nicht gleichzeitig den PWM Wert |
| ZEIT | ms | high | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 65536.0 | Das Argument enthält die Zeitdauer in der die Licht Disco aktiv ist |
| BYTE_7 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserviert für zusätzliche Informationen |
| BYTE_8 | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Reserviert für zusätzliche Informationen |

### ARG_0X4532_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_LICHT_AUSGANG_DIGITAL_ARG | - | - | - | - | - | Das Argument enthält die ID des diskreten Leuchtenausgangs |

### ARG_0X4800_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_INNENLICHT | - | - | - | - | - | Element aus Tabelle TAB_INNENLICHT |
| AKTION | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Leuchtkraft in %, Wertebereich 0 - 100% |

### ARG_0X4804_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FUNKTIONS_MODI | 0-n | high | unsigned char | - | TAB_INNENLICHT_FUNKTIONSMODI | - | - | - | - | - | Auswahl über Liste INNENLICHT_FUNKTIONS-MODI (Tabelle) |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauerzeit der Ansteuerung |

### ARG_0X4F15_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Taster der Motor-Start-Automatik. 0: OFF; 1: ON |

### ARG_0X4F16_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand des Sensors SST A und B. 0= Aus;  1= Ein. |

### ARG_0X5010_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CA_HISTORIENSPEICHER_SPERRE_ARG | - | - | - | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen  - Löschen Siehe Table TAB_CA_HISTORIENSPEICHER_SPERRE_ARG |

### ARG_0X5020_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT_HECKKLAPPE | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG_ARG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang des Heckklappe Kontakt. Siehe Table TAB_CA_DIGITAL_EINGANG_ARG |

### ARG_0X5021_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT_HECKSCHEIBE | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG_ARG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang des Heckscheibe Kontakt. Siehe Table TAB_CA_DIGITAL_EINGANG_ARG |

### ARG_0X5022_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KONTAKT_VORRAST | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG_ARG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang des Soft Close Automatic vorrast Kontakt. Siehe Table TAB_CA_DIGITAL_EINGANG_ARG |

### ARG_0X5024_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_KONTAKT_TUER_HW_ARG | - | - | - | - | - | Simulation des Türkontakts Fahrertür vorne.  Siehe Table TAB_KONTAKT_TUER_HW_ARG |

### ARG_0X5025_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_KONTAKT_TUER_HW_ARG | - | - | - | - | - | Simulation des Türkontakts Fahrertür hinten.  Siehe Table TAB_KONTAKT_TUER_HW_ARG |

### ARG_0X5026_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_KONTAKT_TUER_HW_ARG | - | - | - | - | - | Simulation des Türkontakts Beifahrertür vorne.  Siehe Table TAB_KONTAKT_TUER_HW_ARG |

### ARG_0X5027_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_KONTAKT_TUER_HW_ARG | - | - | - | - | - | Simulation des Türkontakts Beifahrertür hinten.  Siehe Table TAB_KONTAKT_TUER_HW_ARG |

### ARG_0X5030_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_CENTERLOCK | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG_ARG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Centerlock-Taster. Siehe Table TAB_CA_DIGITAL_EINGANG_ARG |

### ARG_0X5031_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_FRONTKLAPPE | 0-n | high | unsigned char | - | TAB_CA_DIGITAL_EINGANG_ARG | - | - | - | - | - | Der Argument enthält den vorzugebenden Zustand für den Eingang des Frontklappe Tasters.  Siehe Table TAB_CA_DIGITAL_EINGANG_ARG |

### ARG_0X5032_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_HECKSCHEIBE | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG_ARG | - | - | - | - | - | Der Argument enthält den vorzugebenden Zustand für den Eingang des Heckscheibe Tasters. |

### ARG_0X5033_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_HECKKLAPPE_AUSSEN | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG_ARG | - | - | - | - | - | Der Argument enthält den vorzugebenden Zustand für den Eingang des Außenheckklappe Tasters. Siehe Table TAB_CA_DIGITAL_EINGANG_ARG |

### ARG_0X5034_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_OEFFNEN_HECKKLAPPE_INNEN | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG_ARG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Taster zum Entriegeln der Heckklappe Innen (TOEHKI). Siehe Table TAB_CA_DIGITAL_EINGANG_ARG |

### ARG_0X5035_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TASTER_SICHERN_HECKKL | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG_ARG | - | - | - | - | - | Das Argument enthält den vorzugebenden Zustand für den Eingang Taster zum Zentralsichern der Heckklappe. Siehe Table TAB_CA_DIGITAL_EINGANG_ARG |

### ARG_0X5036_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG | 0-n | high | unsigned char | - | TAB_HK_WIPPE | - | - | - | - | - | Richtung |
| ZEIT | ms | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit |

### ARG_0X5108_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ON_OFF | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | [0] = 1 (ON) / 0 (OFF) |
| ALM_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | - | - | - | - | - | ALM_ID |

### ARG_0X5116_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KEY_VERSION | HEX | high | unsigned char | - | - | - | - | - | - | - | Version des HSM Keys |
| KEY_DECRYPT | DATA | high | data[64] | - | - | 1.0 | 1.0 | 0.0 | - | - | Initialisierungsdaten HSM |

### ARG_0X5118_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| JTAG_HSM_TOKEN | DATA | high | data[197] | - | - | 1.0 | 1.0 | 0.0 | - | - | Token |

### ARG_0X5121_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Argument zum Löschen der FuSi Safe-Mechanismus Eingriff Flags. |

### ARG_0X5122_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EINGANG_AUSWAHL | 0-n | high | unsigned long | - | TAB_SAFETY_MICRO_ARG | - | - | - | - | - | Safety Micro Eingänge/Ausgänge |
| AKTIVIERUNG | 0/1 | high | unsigned long | - | - | - | - | - | - | - | 0= Deaktivieren; 1= Aktivieren |

### ARG_0X6004_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6005_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6006_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6007_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_DEV_FH_THERMOMONITOR_SETZEN | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der aktuell im Motortreiber verwendeten Thermoschwelle |

### ARG_0X6030_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE_GLOBAL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen der generellen Freigabe Freigabe nicht aktiv 0x00 Freigabe aktiv 0x01 |
| FREIGABE_PANIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Parameter für das Setzen des Panikmodus Panik-Freigabe nicht aktiv 0x00 Panik-Freigabe aktiv 0x01 |

### ARG_0X6031_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Kurzhubfunktion sperren 1: Kurzhub freischalten |

### ARG_0XA10D_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION_LINKS | + | - | 0-n | high | unsigned char | - | TAB_THCH_ARG | - | - | - | - | - | Steuerung des linken Thermo-Cupholders (Heizen oder Kühlen). |
| AKTION_RECHTS | + | - | 0-n | high | unsigned char | - | TAB_THCH_ARG | - | - | - | - | - | Steuerung des rechten Thermo-Cupholders (Heizen oder Kühlen). |

### ARG_0XA17B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_FH_AUSWAHL_ARG | - | - | - | - | - | Fensterheber Auswahl. Siehe Table TAB_FENSTERHEBER_AUSWAHL_ARG. |
| MODUS | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNEN_ARG | - | - | - | - | - | Einlernmodus. Siehe Table TAB_FH_SHD_ESH_EINLERNEN_ARG. |

### ARG_0XA17E_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle TAB_FH_AUSWAHL ACHTUNG ENTWICKLER: Nicht zutreffendes löschen!!! |
| POSITION | + | - | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert 0 für FH ist die Geschlossen-Position |

### ARG_0XA17F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_FH_AUSWAHL_ARG | - | - | - | - | - | Auswahl. Siehe Table TAB_FH_AUSWAHL_ARG |
| POSITION | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Angabe Position  0: geschlossen;  100: offen |

### ARG_0XA532_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABGLEICHWERT_C0_VO_WERT | + | - | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -255.0 | 255.0 | Messewert C0_vo |
| STAT_ABGLEICHWERT_C0_HI_WERT | + | - | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | -255.0 | 255.0 | Messewert C0_hi |

### ARG_0XA533_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_LEUCHTEN_AUSGANG_DIGITAL_ARG | - | - | - | - | - | Auswahl des Ausgangs |

### ARG_0XA539_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHALTER_KAMERA | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Verwendung der Grenzen aus Kamera Signale anstelle Diagnose Argumente |
| DISTANZ_ALLER_GRENZEN | + | - | m | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | Distanz zu allen folgenden Grenzen.  Gültiger Bereich: 0-100 |
| GRENZE_BEREICH_1_LINKS | + | - | ° | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -15.0 | 15.0 | Position der linken Grenze des 1 blendfreien Bereichs (Grad) |
| GRENZE_BEREICH_1_RECHTS | + | - | ° | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -15.0 | 15.0 | Position der rechtes Grenze des 1 blendfreien Bereichs (Grad) |
| GRENZE_BEREICH_2_LINKS | + | - | ° | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -15.0 | 15.0 | Position der linken Grenze des 2 blendfreien Bereichs (Grad) |
| GRENZE_BEREICH_2_RECHTS | + | - | ° | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -15.0 | 15.0 | Position der rechtes Grenze des 2 blendfreien Bereichs (Grad) |
| GRENZE_BEREICH_3_LINKS | + | - | ° | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -15.0 | 15.0 | Position der linken Grenze des 3 blendfreien Bereichs (Grad) |
| GRENZE_BEREICH_3_RECHTS | + | - | ° | high | signed int | - | - | 10.0 | 1.0 | 0.0 | -15.0 | 15.0 | Position der rechtes Grenze des 3 blendfreien Bereichs (Grad) |

### ARG_0XA5B0_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VERBAUORT_ID | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Auswahl siehe Tabelle VerbauortTabelle |

### ARG_0XA5C0_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| UPDATE_MODUS | + | - | 0-n | - | unsigned char | - | TAB_SDS_UPDATE_MODUS_ARG | - | - | - | - | - | Festlegen des Update-Modus (welche Daten werden vom Steuergerät aus dem Fahrzeug aktualisiert und wie werden sie übertragen). Siehe Tabelle TAB_SERVICE_SCHLUESSELDATEN_UPDATE_ARG |

### ARG_0XA5C1_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BLOCK_NR | + | - | 0-n | - | unsigned char | - | TAB_SERVICE_SCHLUESSELDATEN_BLOCK_ARG | - | - | - | - | - | Das Argument gibt die Blocknummer des auszulesenen Blocks an. Siehe Table TAB_SERVICE_SCHLUESSELDATEN_BLOCK_ARG |

### ARG_0XA610_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LEUCHTMITTEL | + | - | 0-n | high | unsigned char | - | TAB_LEUCHTEN_AUSGANG_DIGITAL_ARG | - | - | - | - | - | Auswahl Leuchtmittel |

### ARG_0XA621_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_ILE | + | - | 0-n | high | unsigned char | - | TAB_INNENLICHT_ILE_ARG | - | - | - | - | - | Auswahl ILE |

### ARG_0XAC51_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEAKTIVIERUNGSGESCHWINDIGKEIT | + | - | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 50.0 | Das Argument gibt an bei welcher Geschindigkeit die Funktion KL15-Abschaltung wieder aktiviert werden soll. Hinweise: - Mit Argument = 0 soll die KL-15-Abschaltung sofort wieder aktiviert werden können. - Mit Argument = 1 - 50 wird die KL15-Abschaltung unterdrücken bis nächstes Mal Fahrzeuggeschwindigkeit über xx Kmh. |

### ARG_0XAC53_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCHL_NUM | + | - | 0-n | - | unsigned char | - | TAB_IM_ADEV_POS_ARG | - | - | - | - | - | Das Argument dient zur Auswahl des Schlüssels mit dem kommuniziert werden soll. Hinweise: - 0-19 = Schlüsselposition Transponder-Tabelle - 255 = Beliebiger Schlüssel |
| CA_ANTENNE | + | - | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_ARG | - | - | - | - | - | Das Argument dient zur Auswahl der CA-Antenne über welche die Kommunikation in Richtung Schlüssel stattfinden soll. Siehe Table TAB_CA_ANTENNEN_ARG |

### ARG_0XAC57_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZV_AKTION | + | - | 0-n | - | unsigned char | - | TAB_ZV_AKTION_ARG | - | - | - | - | - | Das Argument enthält die auszuführende ZV-Aktion.  Siehe Table TAB_ZV_AKTION_ARG |

### ARG_0XAC60_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWF_ZUSTAND_VOR_EINSCHLAFEN | + | - | 0-n | high | unsigned char | - | TAB_PWF_ZUSTAND_VOR_WARTEZEIT_ARG | - | - | - | - | - | Das Argument gibt an, in welchen PWF Zustand vor Beginn der Wartezeit geschaltet werden soll. |

### ARG_0XAFFC_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SENSOR_VERBAUORT_NR | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | 2Byte Verbauortnummer des Sensors aus der Verbauorttabelle. |

### ARG_0XD071_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | - | - | - | - | - | 0: LED AUS 1: LED EIN für 1 Sekunde |

### ARG_0XD072_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ACHSE | 0-n | - | signed char | - | TAB_ELSV_ACHSE_ARG | - | - | - | - | - | 0: Stop;  1: Länge;  2: Höhe |
| RICHTUNG | 0/1 | - | signed char | - | - | - | - | - | - | - | 0: PLUS (ausfahren (hinten) / unten) 1: MINUS (einfahren (vorne) / oben). Argument nur relevant falls ACHSE = 1 oder 2. |

### ARG_0XD074_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Ansteuerungszeit des Lenkradheizung: 0= OFF;  1-255= ON |

### ARG_0XD084_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LAENGE | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0%: Vollständig eingefahren (bis Softstop); 100%: Vollständig ausgefahren (bis Softstop) |
| HOEHE | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0%: Vollständig oben (bis Softstop);  100%: Vollständig unten (bis Softstop) |

### ARG_0XD18C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed int | - | - | - | - | - | - | - | Simulation des Tasters:  0: Taster nicht betätigt;  1: Taster betätigt |

### ARG_0XD1CC_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SITZEXT_ORT | 0-n | high | unsigned char | - | TAB_SITZEXT_STANDORT_ARG | - | - | - | - | - | Verbauort: welcher LIN slave ist betroffen. Siehe Table TAB_SITZEXT_STANDORT_ARG |
| LED_TYP | 0-n | high | unsigned char | - | TAB_SEAT_EXT_LED_ARG | - | - | - | - | - | Welche LED soll angesteuert werden. Siehe Table TAB_SEAT_EXT_LED_ARG |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: LED OFF;   1: LED ON  |

### ARG_0XD210_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LADEMODUS | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: OFF; 1: ON |

### ARG_0XD211_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FERTIGUNGSMODUS | 0-n | high | unsigned char | - | TAB_SIA_FERTIGUNGSMODUS_ARG | - | - | - | - | - | 0: Aus;  1: An mit Ladefunktion;  2: An ohne Ladefunktion.  |

### ARG_0XD220_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Simulation Taster:  0: Taster nicht betätigt 1: Taster betätigt |

### ARG_0XD25D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0=Deaktivierung der Lichtsperre (Lichtfunktion freigegeben);  1=Aktivierung der Lichtsperre (Lichtunterdrückung ein) |

### ARG_0XD268_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAB_POS | 0-n | high | unsigned char | - | TAB_IM_ADEV_SMACC_POS_ARG | - | - | - | - | - | Das Argument enthält die Position des Authentisierungs-Devices in der ZSG-internen ADEV-Tabelle.  Siehe Table TAB_IM_ADEV_POS_ARG |
| ID | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die ID des Authentisierungs-Devices. Hinweis: Die TRSP-ID wird ggf. mit führenden  Nullen auf 6-Byte Länge ergänzt. Beispiel: '00 00 12 34 56 78'  6-byte binary Hinweise: Alle Werte ausser 'FF FF FF FF FF FF' = Gültige Authentisierungs-Device-ID. 'FF FF FF FF FF FF'= unbekannt Beispiel '12 34 AB EF 98 76' Ausgabe als 6-Byte hex-Wert. |
| TYP | 0-n | high | unsigned char | - | TAB_IM_ADEV_TYPE_ARG | - | - | - | - | - | Das Argument enthält den Typ des Authentisierungs-Devices.  Siehe Table TAB_IM_ADEV_TYPE_ARG |
| DATA | DATA | high | data[250] | - | - | 1.0 | 1.0 | 0.0 | - | - | Schreib die Daten. |

### ARG_0XD298_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | ms | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 2000.0 | Ansteuern der Hupedauer: 1-2000. 0 = Hupe aus. |

### ARG_0XD30A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ROLLO_HECK | 0-n | - | unsigned char | - | TAB_ROLLO_ARG | - | - | - | - | - | 0: keine Aktion;  1: Ansteuerung Heckrollo einschalten (Heckrollo verfährt bis Block. Erneute Ansteuerung führt zu Richtungswechsel);  2: Heckrollo ausfahren (Heckrollo verfährt bis Block);  3: Heckrollo einfahren (Heckrollo verfährt bis Block) Siehe Table TAB_ROLLO_ARG |

### ARG_0XD320_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | - | - | - | - | - | 1: Aktivieren Spiegel wird für 8s mit 60 % abgeblendet |

### ARG_0XD32D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WERT | 0-n | - | signed int | - | TAB_SPIEGEL_HEIZUNG_ARG | 1.0 | 1.0 | 0.0 | - | - | Heizleistung in Prozent. Auflösung Stufe zu Prozentwerten in Tabelle TAB_SPIEGEL_HEIZUNG |
| ZEIT | s | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 240.0 | Angabe der Zeit in Sekunden. Maximal 240 Sekunden |

### ARG_0XD32F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Ansteuerzeit. Innenspiegel wird mit 100 % abgeblendet. |

### ARG_0XD347_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SPIEGEL | 0-n | - | signed char | - | TAB_AUSSENSPIEGEL_AUSWAHL_ARG | - | - | - | - | - | Auswahl des Spiegels. Siehe Table TAB_AUSSENSPIEGEL_AUSWAHL_ARG |
| DIMMUNG | % | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0 - 100 % |
| AKTION | 0-n | - | signed char | - | TAB_AUSSENSPIEGEL_HC2_ARG | - | - | - | - | - | Art der Ansteuerung. Siehe Table TAB_AUSSENSPIEGEL_HC2_ARG |

### ARG_0XD350_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WASCHDUESENHEIZUNG_WERT | 0-n | high | unsigned char | - | TAB_WASCHDUESENHEIZUNG_ARG | - | - | - | - | - | PWM-Wert: 0 = 0%  1 = 25%  2 = 50%  3 = 75%  4 = 100%  |
| WASCHDUESENHEIZUNG_ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Zeit (0-240s) |

### ARG_0XD352_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Waschwasserpumpe hinten OFF 1: Waschwasserpumpe hinten ON |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit. Nur relevant wenn AKTION=1. |

### ARG_0XD355_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0: Ende Ansteuerung 1: Frontscheibenwischer in Park-Position |

### ARG_0XD35C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Waschwasserpumpe vorne OFF 1: Waschwasserpumpe vorne ON |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit. Nur relevant wenn AKTION=1.  |

### ARG_0XD35D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | unsigned char | - | TAB_WISCHER_LEVEL_ARG | - | - | - | - | - | Ansteuerung des Schebenwischer vorne niveaus bzw. Stufe.  Siehe Table TAB_WISCHER_LEVEL_ARG |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit. Nur relevant wenn AKTION=1. Wischer bleibt nach Ablauf der Zeit in Parkposition stehen. |

### ARG_0XD35F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Ausschalten Scheibenwischer hinten;  1: Einschalten Scheibenwischer hinten. |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit. Nur relevant bei AKTION=1. Wischer bleibt nach Ablauf der Zeit in Parkposition stehen. |

### ARG_0XD360_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Scheinwerferreinigungsanlage OFF  1: Scheinwerferreinigungsanlage ON |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit. Nur relevant bei AKTION=1 |

### ARG_0XD361_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | signed char | - | - | - | - | - | - | - | 0=LED AUS; 1=LED EIN. |

### ARG_0XD3E9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAUER | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 25.0 | Ansteuerdauer in Sekunden (0=AUS) |
| MUSTER | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Vibrationsmuster:  0 = keine Vibrationsausgabe 1 = Vibrationsausgabe |

### ARG_0XD3EF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CARGO_ANTIRUTSCHMATTE_MODE_ARG | - | - | - | - | - | Dieser Diagnosejob dient zum Steuern der Antirutschmatte. |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Für die Dauer der Diagnose soll eine Ansteuerzeit (Timeout) implementiert werden. Die Dauer des Timeouts soll vom Anwender einstellbar zwischen 1 und 30 Sekunden betragen. Der Timeout soll mit der Ansteuerung der Diagnose zurückgesetzt werden. Der Job wechselt nach dem Timeout automatisch wieder zur Kundenfunktion/Automatik. |

### ARG_0XD3F3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: Durchschleifen der Bus-Anforderung (keine Aktivierung per Diagnose); 1: Aktivierung der HOD-Elektronik (Überschreiben der Bus-Anforderung)  |

### ARG_0XD507_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Ausschalten der zweite Scheibenwischer hinten  1: Einschalten der zweite Scheibenwischer hinten |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuere Zeit. Nur relevant wenn AKTION=1. |

### ARG_0XD50C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: Entsperrt SIA Eject-Taste;  1: Sperrt SIA Eject-Taste. |

### ARG_0XD519_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Berechnungsformel des Helligkeitsoffsets laut LH (1109) |

### ARG_0XD542_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | signed int | - | TAB_LEUCHTEN_FUNKTION_ARG | - | - | - | - | - | Auswahl siehe table TAB_LEUCHTEN_FUNKTION_ARG |
| ZEIT | s | - | signed int | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 327.0 | Vorgabe der Aktivierungszeit in Sekunden. |

### ARG_0XD5E6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FAHRLICHTSITUATION_LINKS | 0-n | - | unsigned char | - | TAB_FAHRLICHTSITUATION_ARG | - | - | - | - | - | Vorgabe der Fahrlichtsituation links |
| FAHRLICHTSITUATION_RECHTS | 0-n | - | unsigned char | - | TAB_FAHRLICHTSITUATION_ARG | - | - | - | - | - | Vorgabe der Fahrlichtsituation rechts |

### ARG_0XD6C2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LED_TYP | 0-n | high | unsigned char | - | TAB_BEMIKO_FES_LED_ARG | - | - | - | - | - | Welche LED soll angesteuert werden. |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: LED aus, 1: LED ein  |

### ARG_0XD83A_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE_ARG | - | - | - | - | - | Auswahl Heizungsstufe 0-3. Siehe Table TAB_SITZHEIZUNG_STUFE_ARG. |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung . 0-255 Sekunden |

### ARG_0XD83B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE_ARG | - | - | - | - | - | Auswahl Heizungsstufe 0-3. Siehe Table TAB_SITZHEIZUNG_STUFE_ARG. |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung . 0-255 Sekunden |

### ARG_0XD83C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE_ARG | - | - | - | - | - | Auswahl Heizungsstufe 0-3. Siehe Table TAB_SITZHEIZUNG_STUFE_ARG. |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung . 0-255 Sekunden |

### ARG_0XD83D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE_ARG | - | - | - | - | - | Auswahl Heizungsstufe 0-3. Siehe Table TAB_SITZHEIZUNG_STUFE_ARG. |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung. 0-255 Sekunden |

### ARG_0XD8DA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Umschaltventil:  0 = auf;  1 = zu. |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit. |

### ARG_0XD903_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Zusatzwasserpumpe AUS; 1: Zusatzwasserpumpe EIN. |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 240.0 | Angabe der Ansteuerzeit. Nur relevant wenn AKTION=1. |

### ARG_0XD906_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PWM | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | PWM: 0-100 % |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit. Nur relevant wenn PWM ist höher als 0. |

### ARG_0XD970_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: Heckscheibenheizung aus 1: Heckscheibenheizung ein |
| ZEIT | s | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Angabe der Ansteuerzeit. Nur relevant wenn AKTION=1. |

### ARG_0XD971_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Magnetkupplung:  0 = auf;  1 = zu. |
| ZEIT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit. |

### ARG_0XDA4C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_HISTORIENSPEICHER_SPERRE_ARG | - | - | - | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: -Enable : Neue Historenspeichereinträge zulassen -Diasable: Keine neue Historenspeichereinträge zulassen Siehe Table TAB_HISTORIENSPEICHER_SPERRE_ARG |

### ARG_0XDA5E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NAD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 31.0 | NAD des RGB-LIN-Slaves |
| ZUSTAND | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: deaktivieren 1: aktivieren |
| HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | elektrische Helligkeit aller Grundfarben |
| HELLIGKEIT_ROT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit Rot |
| HELLIGKEIT_GRUEN | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit Grün |
| HELLIGKEIT_BLAU | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit Blau |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Aktivierungszeit in Sekunden 0...254s |

### ARG_0XDAB8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_HISTORIENSPEICHER_SPERRE_ARG | - | - | - | - | - | Das Argument gibt an  welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll: - Löschen - Entsperren: Neue Historenspeichereinträge zulassen - Sperren: Keine neue Historenspeichereinträge zulassen   0 = Freigeben 1 = Sperren 2 = Löschen/Neu initialisieren  Zuordnung erfolgt gemäß Tabelle TAB_HISTORIENSPEICHER_SPERRE_ARG |

### ARG_0XDAB9_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS_ARG | - | - | - | - | - | Das Argument ermöglicht die KL50-Sperre/Fahrbereitschafts-Sperre (NO_START) oder den Präsentations-Modus (PRESENTATION) zu aktivieren oder alle Sperren zu deaktivieren (NORMAL). Hinweise: 1. Zuordnung erfolgt über Tabelle TAB_CAS_MONTAGEMODUS_ARG.  2. Bei allen Werten ungleich 0,1,3 wird keine Aktion ausgeführt, d.h. der aktuell aktivierte Modus bleibt weiterhin bestehen. Ab SP2015 wird der Modus 2 (ELV-Sperre) nicht mehr unterstützt, der aktuell aktivierte Modus bleibt bestehen. |

### ARG_0XDAC4_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CA_TAGE_FT_ER_SPERRE | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob der CA-Taster oder die Entriegeln-Leitung der TAGE Fahrerseite vorne entsperrt oder gesperrt werden sollen. Siehe Table TAB_CA_TAGE_SPERRSTATUS_ARG |
| CA_TAGE_FT_DATA_SPERRE | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob die Daten-Leitung der TAGE Fahrerseite vorne entsperrt oder gesperrt werden sollen. Siehe Table TAB_CA_TAGE_SPERRSTATUS_ARG |
| CA_TAGE_BFT_ER_SPERRE | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob der CA-Taster oder die Entriegeln-Leitung der TAGE Beifahrerseite vorne entsperrt oder gesperrt werden sollen. Siehe Table TAB_CA_TAGE_SPERRSTATUS_ARG |
| CA_TAGE_BFT_DATA_SPERRE | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob die Daten-Leitung der TAGE Beifahrerseite vorne entsperrt oder gesperrt werden sollen. Siehe Table TAB_CA_TAGE_SPERRSTATUS_ARG |
| CA_TAGE_FTH_ER_SPERRE | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob der CA-Taster oder die Entriegeln-Leitung der TAGE Fahrerseite hinten entsperrt oder gesperrt werden sollen. Siehe Table TAB_CA_TAGE_SPERRSTATUS_ARG |
| CA_TAGE_FTH_DATA_SPERRE | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob die Daten-Leitung der TAGE Fahrerseite hinten entsperrt oder gesperrt werden sollen. Siehe Table TAB_CA_TAGE_SPERRSTATUS_ARG |
| CA_TAGE_BFTH_ER_SPERRE | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob der CA-Taster oder die Entriegeln-Leitung der TAGE Beifahrerseite hinten entsperrt oder gesperrt werden sollen. Siehe Table TAB_CA_TAGE_SPERRSTATUS_ARG |
| CA_TAGE_BFTH_DATA_SPERRE | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS_ARG | - | - | - | - | - | Das Argument gibt an, ob die Daten-Leitung der TAGE Beifahrerseite hinten entsperrt oder gesperrt werden sollen. Siehe Table TAB_CA_TAGE_SPERRSTATUS_ARG |

### ARG_0XDAEE_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_ZAEHLER | 0-n | high | unsigned char | - | TAB_BETRIEBSZEITZAEHLER | - | - | - | - | - | Auswahl des/der zu löschenden Betriebszeitzaehler. |

### ARG_0XDC54_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HAENDLER_NUMMER | TEXT | - | string[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | Das Argument enthält die 5-stellige Händlernummer. Im Werk ist dieser Wert = 00000. |
| ERSTZULASSUNGSDATUM_TAG | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 31.0 | Das Argument enthält den Tag des Erstzulassungsdatums. Im Werk: dieser Wert = Tag der Schlüssel-Initialisierung. |
| ERSTZULASSUNGSDATUM_MONAT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 12.0 | Das Argument enthält den Monat des Erstzulassungsdatums.  Im Werk: dieser Wert = Monat der Schlüssel-Initialisierung. |
| ERSTZULASSUNGSDATUM_JAHR | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 2000.0 | 9999.0 | Das Argument enthält das Jahr des Erstzulassungsdatums.  Im Werk ist dieser Wert = Jahr der Schlüssel-Initialisierung. Wertebereich 2000 - 9999. |

### ARG_0XDC5B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAB_INDEX | 0-n | - | unsigned char | - | TAB_IM_ADEV_POS_ARG | - | - | - | - | - | Auswahl des Schlüssels in der Transponder-Tabelle. Siehe Table TAB_IM_ADEV_POS_ARG. |
| PIA_NR | 0-n | - | unsigned char | - | TAB_IM_PIA_NUMMER_ARG | - | - | - | - | - | Die zu setzende PIA-Nummer. Siehe Table TAB_IM_PIA_NUMMER_ARG. |

### ARG_0XDC83_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SARAH | 0-n | high | unsigned char | - | TAB_SARAH_ZUSTAND_ARG | - | - | - | - | - | Zustand SARAH.  Siehe Table TAB_SARAH_ZUSTAND_ARG. |
| AUFFAHRWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Auffahrwarnung.   1=ON;  0=OFF. |
| AUFFAHRWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_SARAH_WARNZEITPUNKT_STUFE_ARG | - | - | - | - | - | Konfiguration Auffahrwarnzeitpunkt.  Siehe Tabelle TAB_SARAH_WARNZEITPUNKT_STUFE_ARG. |
| PERSONENWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Personenwarnung.   1=ON;  0=OFF. |
| GEZIELTES_ANLEUCHTEN | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Gezieltes Anleuchten.   1=ON;  0=OFF. |
| SPURVERLASSENSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Spurverlassenswarnung.   1=ON;  0=OFF. |
| SPURWECHSELWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Spurwechselwarnung.   1=ON;  0=OFF. |
| UEBERNAHME_GESCHWINDIGKEIT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Übernahme der erkannten Höchstgeschwindigkeit als neue Setzgeschwindigkeit für Tempomat und Limiter.   1=ON;  0=OFF. |
| OFFSET_GESCHWINDIGKEIT | km/h | high | signed char | - | - | 1.0 | 1.0 | 0.0 | - | - | Offset zur Höchstgeschwindigkeit bei Übernahme als neue Setzgeschwindigkeit für Tempomat und Limiter. |
| SEITENKOLLISIONSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Seitenkollisionswarnung.   1=ON;  0=OFF. |
| SPURVERLASSENSWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_SARAH_WARNZEITPUNKT_MODUS_ARG | - | - | - | - | - | Konfiguration Spurverlassenswarnzeitpunk.  Siehe Table TAB_SARAH_WARNZEITPUNKT_MODUS_ARG. |
| SPURWECHSELWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_SARAH_WARNZEITPUNKT_STUFE_ARG | - | - | - | - | - | Konfiguration Spurwechselwarnzeitpunkt.  Siehe Tabelle TAB_SARAH_WARNZEITPUNKT_STUFE_ARG. |
| VIBRATIONSSTAERKE | 0-n | high | unsigned char | - | TAB_LENKRAD_VIBRATION_STUFE_ARG | - | - | - | - | - | Konfiguration Vibrationsstärke des Lenkrades.  Siehe Table TAB_LENKRAD_VIBRATION_STUFE_ARG |
| SPURVERLASSENSLENKEINGRIFF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Spurverlassenslenkeingriff:  1=ON;  0=OFF. |
| SPURWECHSELLENKEINGRIFF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Spurwechsellenkeingriff.  1=ON;  0=OFF. |
| VORFAHRTSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Vorfahrtswarnung  1=ON;  0=OFF. |
| VORFAHRTSWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_SARAH_WARNZEITPUNKT_STUFE_ARG | - | - | - | - | - | Konfiguration Vorwarnzeitpunkt.  See Table TAB_SARAH_WARNZEITPUNKT_STUFE_ARG. |
| STAT_LENKRAD_LED | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Lenkradleuchte LED:  1= ON;  0= OFF. |
| STAT_GESCHWINDIGKEITSASSISTENT_MODUS | 0-n | high | unsigned char | - | TAB_GESCHWINDIGKEITSASSISTENT_MODUS_ARG | - | - | - | - | - | Konfiguration Geschwindigkeitsassistent Modus.  Siehe Table TAB_SARAH_SPURWECHSELASSISTENT_MODUS_ARG. |
| STAT_GESCHWINDIGKEITSASSISTENT_STRECKENVERLAUF | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Geschwindigkeitsassistent Streckenverlauf:  0= ON;  1= OFF. |
| STAT_SPURWECHSELASSISTENT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Spurwechselassistent:  1= ON;  0= OFF. |
| STAT_SPURWECHSELASSISTENT_MODUS | 0-n | high | unsigned char | - | TAB_SARAH_SPURWECHSELASSISTENT_MODUS_ARG | - | - | - | - | - | Konfiguration Spurwechselassistent Modus:  Siehe Table TAB_SARAH_SPURWECHSELASSISTENT_MODUS_ARG. |
| STAT_ENGSTELLENASSISTENT | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration Engstellenassistent:  1= ON;  0= OFF. |
| STAT_ENGSTELLENASSISTENT_BREITE | 0-n | high | unsigned char | - | TAB_SARAH_ENGSTELLENASSISTENT_BREITE_ARG | - | - | - | - | - | Konfiguration Engstellenassistent Breite.  Siehe Table TAB_SARAH_ENGSTELLENASSISTENT_BREITE_ARG. |
| STAT_ANFAHRVERHINDERUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Anfahrverhinderung:  1= ON;  0= OFF. |
| RESERVE_1 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_2 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_3 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_4 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |
| RESERVE_5 | HEX | high | unsigned char | - | - | - | - | - | - | - | Reserve |

### ARG_0XDC84_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | Simulation des Tasters:  1: Taster betätigt |

### ARG_0XDC85_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed char | - | TAB_SARAH_LED_ARG | - | - | - | - | - | Auswahl der LED-Farbe. Siehe Table TAB_SARAH_LED_ARG |

### ARG_0XE370_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAB_INDEX | 0-n | - | unsigned char | - | TAB_IM_ADEV_POS_ARG | - | - | - | - | - | Auswahl des Schlüssels in der Transponder-Tabelle.  Siehe Table TAB_IM_ADEV_POS_ARG |
| KEYLOCK_ACTION | 0-n | - | unsigned char | - | TAB_SCHLUESSELSPERRE_ARG | - | - | - | - | - | Das Argument dient zur Auswahl der Aktion zu freigeben, sperren oder löschen des gewählten Schlüssels.  Siehe Table TAB_SCHLUESSELSPERRE_ARG |

### ARG_0XE391_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MODUS | 0-n | high | unsigned char | - | TAB_SMO_STEUERN_ARG | - | - | - | - | - | Ansteuerung der SMO-reset |

### ARG_0XE392_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | high | unsigned char | - | TAB_CKT_DIAGNOSE_SPERRE_ARG | - | - | - | - | - | Argument zu sperren oder entsperren die CKT-Funktion. |

### ARG_0XE3A0_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RESET | 0-n | high | unsigned char | - | TAB_AKTUATOREN_KURZSCHLUSS_COUNTER | - | - | - | - | - | Zurücksetzen der Kurzschlusszähler von Aktuatoren. |

### ARG_0XE3B5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_LEUCHTEN_AUSGANG_DIGITAL_ARG | - | - | - | - | - | Auswahl des Ausgangs. Siehe table TAB_LEUCHTEN_DIGITAL_ARG |
| AKTION | 0/1 | - | unsigned char | - | - | - | - | - | - | - | 0: aus 1: ein |

### ARG_0XE3D1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NAD | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 31.0 | NAD des RGB-LIN-Slaves |
| ZUSTAND | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0: deaktivieren 1: aktivieren |
| HELLIGKEIT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | elektrische Helligkeit aller Grundfarben |
| HELLIGKEIT_ROT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit Rot |
| HELLIGKEIT_GRUEN | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit Grün |
| HELLIGKEIT_BLAU | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 255.0 | Helligkeit Blau |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Aktivierungszeit in Sekunden 0...254s |

### ARG_0XE3F1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITIONSVORGABE_FRONTWISCHER | 0-n | - | unsigned char | - | TAB_WISCHER_POSITION_ARG | - | - | - | - | - | Ansteuerung der Wischerposition. Siehe Table TAB_WISCHER_POSITION_ARG. |

### ARG_0XE3F2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITIONSVORGABE_HECKWISCHER | 0-n | high | unsigned char | - | TAB_WISCHER_POSITION_ARG | - | - | - | - | - | 0: Ende Ansteuerung 1: Heckscheibenwischer in Park-Position 2: Heckscheibenwischer in Service-Position 3: Heckscheibenwischer in Montage-Position |

### ARG_0XE430_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE_ARG | - | - | - | - | - | Angabe Sitzheizungsstufe 0-3. Siehe Table TAB_SITZHEIZUNG_STUFE_ARG |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung . 0-255 Sekunden |

### ARG_0XE431_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE_ARG | - | - | - | - | - | Angabe Sitzheizungsstufe 0-3. Siehe Table TAB_SITZHEIZUNG_STUFE_ARG |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung . 0-255 Sekunden |

### ARG_0XE432_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE_ARG | - | - | - | - | - | Angabe Sitzheizungsstufe 0-3. Siehe Table TAB_SITZHEIZUNG_STUFE_ARG |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung . 0-255 Sekunden |

### ARG_0XE433_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE_ARG | - | - | - | - | - | Angabe Sitzheizungsstufe 0-3. Siehe Table TAB_SITZHEIZUNG_STUFE_ARG |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Dauer der Ansteuerung . 0-255 Sekunden |

### ARG_0XE442_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ansteuerung des Heizungs/Kühlmittel-Absperrventil:   0=nicht bestromt; 1=bestromt. |
| ZEIT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Ansteuerzeit in Sekunden |

### ARG_0XE452_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL_SPIEGEL | 0-n | high | unsigned char | - | TAB_AUSSENSPIEGEL_ARG | - | - | - | - | - | Auswahl Außenspiegel Rechts/Links. Siehe Table TAB_AUSSENSPIEGEL_ARG |
| POS_HOR | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Horizontale Position.  Gültiges Wertebereich= 0-254.  Ungültig position=255. |
| POS_VERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Vertikale Position. Gültiges Wertebereich= 0-254.  Ungültig position=255. |

### ARG_0XE453_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSSENSPIEGEL_AUSWAHL | 0-n | high | unsigned char | - | TAB_AUSSENSPIEGEL_AUSWAHL_ARG | - | - | - | - | - | Auswahl welche Spiegel angesteuert wird. |
| RICHTUNG | 0-n | - | unsigned char | - | TAB_AUSSENSPIEGEL_RICHTUNG_ARG | - | - | - | - | - | Ansteuerung des angewählten Spiegels. |
| ZEIT | ms | - | unsigned char | - | - | 1.0 | 100.0 | 0.0 | 100.0 | - | Angabe der Zeit in 100ms-Schritten |

### ARG_0XE454_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEIKLAPPEN | 0-n | high | unsigned char | - | TAB_AUSSENSPIEGEL_BEIKLAPPEN_ARG | - | - | - | - | - | Steuern den klappen position Außenspiegel |

### ARG_0XE455_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MEM_POS | 0-n | - | unsigned char | - | TAB_SPIEGELMEM_POS_ARG | - | - | - | - | - | Angabe der Memoryposition (pos1, pos2, aktuelle) |
| POS_LINKS_HOR | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Spiegel links horizontale Position |
| POS_LINKS_VERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Spiegel links vertikale Position |
| POS_RECHTS_HOR | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Spiegel rechts horizontale Position |
| POS_RECHTS_VERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 254.0 | Spiegel rechts vertikale Position |

### ARG_0XE456_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MEM_POS | 0-n | - | unsigned char | - | TAB_SPIEGELMEM_POS_ARG | - | - | - | - | - | Angabe der Memoryposition 1-3.  1 und 2 entsprechen Taste 1 und 2.   3 entspricht Schlüsselposition. |

### ARG_0XE461_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG_ROLLO_BFH | 0-n | - | unsigned char | - | TAB_ROLLO_ARG | - | - | - | - | - | Ansteuerung den hintere Beifahrerseite Rollo. Siehe Table TAB_ROLLO_ARG |

### ARG_0XE462_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RICHTUNG_ROLLO_FAH | 0-n | - | unsigned char | - | TAB_ROLLO_ARG | - | - | - | - | - | Ansteuerung den hintere Fahrerseite Rollo. Siehe Table TAB_ROLLO_ARG |

### ARG_0XE468_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FES_MODUS | 0-n | high | unsigned char | - | TAB_FES_MODUS_ARG | - | - | - | - | - | Ansteuerung des FES Modus. Siehe Table TAB_FES_MODUS_ARG |

### ARG_0XF002_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | high | unsigned char | - | TAB_SDS_HISTORIENSPEICHER_ARG | - | - | - | - | - | Das Argument gibt an welche der folgenden Aktionen für den Historienspeicher durchgeführt werden soll.  Siehe Table TAB_SDS_HISTORIENSPEICHER_ARG. |

### ARG_0XF006_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| JTAG_LOCK_TYPE | + | - | 0-n | high | unsigned char | - | TAB_JTAG_LOCK_MODE | - | - | - | - | - | Verriegelungsmodus |

### ARG_0XF013_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PARAMETER_TYPE | + | - | Byte | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Typ des Parameters |

### ARG_0XF014_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANTENNA | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 8.0 | Antenne, über die gesucht werden soll. |
| CURRENT_WELCOME_LIGHT | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1000.0 | Strom für Welcome Light Zone |
| CURRENT_UNLOCK | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1000.0 | Strom für Entriegel Zone |
| CURRENT_WALK_AWAY_LOCKING | + | - | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 1000.0 | Strom für Walk Away Locking Zone |
| CURRENT_PREAUTHENTICATION | + | - | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1000.0 | Strom für Vorauthenisierungszone |

### ARG_0XF015_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANTENNA | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 1.0 | 8.0 | Antenne, über die gesucht werden soll |

### ARG_0XF030_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TAB_POS | + | - | 0-n | high | unsigned char | - | TAB_IM_ADEV_POS_ARG | - | - | - | - | - | Position des ADEVs in der ADEV-Tabelle |

### ARG_0XF104_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| POSITION | + | - | ° | high | signed int | - | - | 100.0 | 1.0 | 0.0 | -10.23 | 10.23 | Ansteuerung der LWR-Position. Reference point is the optical axis. |
| GESCHWINDIGKEIT | + | - | °/s | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | 0.0 | 12.0 | Geschwindigkeit der LWR |

### ARG_0XF305_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BREAKPOINTID | + | + | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | BreakpointId (0-3) |
| ADDRESS | + | - | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Address of function to measure |

### ARG_0XF307_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STACK_ID | + | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | - | - | Die Stack-IDs Informationen werden zurückgeben. |

### ARG_0XF30B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TYPE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Das Argument enthält den Typ der abzufragenden Aufstartzeit.  00 = Reset time; 01 = Wakeup time |

### ARG_0XF30C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LOGGER_PROTOCOL_PAYLOAD | + | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | A variable length payload that represents the various commands accepted by the Logger. The valid values are Logger protocol specific |

### ARG_0XF30F_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATE | + | - | 0-n | high | unsigned char | - | STATE_RTE_BUFFER | - | - | - | - | - | Das Argument enthält den gewünschten Zustand des Tracing-Verhaltens |
| MIRROR | + | - | 0-n | high | unsigned char | - | TAB_MIRROR_RTE_BUFFER | - | - | - | - | - | Das Argument enthält den gewünschten Wert des Mirroring-Ausgabeziels |

### ARG_0XF310_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0-n | high | unsigned int | - | TAB_BSW_SAFETY_MICRO | - | - | - | - | - | Kommando for Safety Micro |
| ADRESSE | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | Liefert die Adresse der Kommando. Der Argument ist gültig nur bei AKTION = 0xFE |

### ARG_0XF400_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| START_LIN_TRACING | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Einschalten der Lin Tracing: 1= Start;  0 = Stop. |

### ARG_0XF700_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PORT_MASK | + | - | 0-n | high | unsigned char | - | TAB_PORT_MASK | - | - | - | - | - | Port Mask |
| MIRRORING_STATE | + | - | 0-n | high | unsigned char | - | TAB_MIRRORING_STATE | - | - | - | - | - | Mirroring State |

### ARG_0XF701_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ENABLE | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: deactivate special flash timing mode 0x01: activate special flash timing mode |
| TIMEOUT | + | - | HEX | high | unsigned int | - | - | - | - | - | - | - | time, after which timing mode will automatically be resetted (in seconds) - valid values in case ENABLE is 0x01: 0x00 01 - 0xFF FF (meaning 1s - 65536s) - valid values in case ENABLE is 0x00: 0x00 00 |

### BE_AUDIO_TASTE

| WERT | TEXT |
| --- | --- |
| 0 | FBM_1 |
| 1 | FBM_2 |
| 2 | FBM_3 |
| 3 | FBM_4 |
| 4 | FBM_5 |
| 5 | FBM_6 |
| 6 | FBM_7 |
| 7 | FBM_8 |
| 8 | BUT_MOD |
| 9 | BUT_AM_FM_TRIF |
| 10 | BUT_Eject_DVD |
| 11 | BUT_SKP |
| 12 | ROCO_DIRRT |
| 13 | BUT_ON_OFF_ENTAI |
| 14 | ROCO_INCR |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BF_31_01_1036_ANFORDERER_NACHLAUFZEIT_0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERER_0X00_01_ENTERTAINMENTFUNKTION | 0-n | high | unsigned char | 0x01 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 0: Anforderer 0x00 01 Entertainmentfunktion |
| STAT_ANFORDERER_0X00_02_REMOTE_SERVICES | 0-n | high | unsigned char | 0x02 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 1: Anforderer 0x00 02 Remote Services |
| STAT_ANFORDERER_0X00_03_RESTWAERMEFUNKTION | 0-n | high | unsigned char | 0x04 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 2: Anforderer 0x00 03 Restwärmefunktion / Ausbrennen der Standheizung    |
| STAT_ANFORDERER_0X00_04_STANDHEIZUG_STANDLFTEN | 0-n | high | unsigned char | 0x08 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 3: Anforderer 0x00 04 Standheizung / Standlüften |
| STAT_ANFORDERER_0X00_05_N_HALTEPHASE | 0-n | high | unsigned char | 0x10 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 4: Anforderer 0x00 05 Verlängerung N-Haltephase, Getriebe nicht in Pos. P |
| STAT_ANFORDERER_0X00_06_BESTAETIGUNG_FESTSTELLBREMSE | 0-n | high | unsigned char | 0x20 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 5: Anforderer 0x00 06 Betätigung Feststellbremse |
| STAT_ANFORDERER_0X00_07_NACHLAUF_ZUSCHALTUNGRSE | 0-n | high | unsigned char | 0x40 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 6: Anforderer 0x00 07 Nachlauf / Zuschaltung RSE |
| STAT_ANFORDERER_0X00_08_REMOTE_HUPEN | 0-n | high | unsigned char | 0x80 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 7: Anforderer 0x00 08 Remote Hupen |

### BF_31_01_1036_ANFORDERER_NACHLAUFZEIT_1

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERER_0X00_19_KL_30B_CAR_SHARING | 0-n | high | unsigned char | 0x01 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 0: Anforderer 0x 00 19 Einschalten / Verlängerung Klemme 30B CarSharing |
| STAT_ANFORDERER_0X00_2B_DIEBSTAHLWARNANLAGE | 0-n | high | unsigned char | 0x02 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 1: Anforderer 0x 00 2B Diebstahlwarnanlage |
| STAT_ANFORDERER_0X00_2C_EMF_TASTER | 0-n | high | unsigned char | 0x04 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 2: Anforderer 0x 00 2C EMF-Taster |
| STAT_ANFORDERER_0X00_2D_ROLLBERWACHUNG | 0-n | high | unsigned char | 0x08 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 3: Anforderer 0x 00 2D Rollüberwachung |
| STAT_ANFORDERER_0X00_2E_ANFORDERUNG_AUSSENBELEUCHTUNG | 0-n | high | unsigned char | 0x10 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 4: Anforderer 0x 00 2E Anforderung Außenbeleuchtung |
| STAT_ANFORDERER_0X00_2F_UMLADEFUNKTION | 0-n | high | unsigned char | 0x20 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 5: Anforderer 0x 00 2F Umladefunktion |
| STAT_ANFORDERER_0X00_33_KL15WUP_SIGNAL | 0-n | high | unsigned char | 0x40 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 6: Anforderer 0x 00 33 KL15Wup-Signal |
| STAT_ANFORDERER_0X00_35_KUELMITTELTEMPERATURABFRAGE | 0-n | high | unsigned char | 0x80 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 7: Anforderer 0x 00 35 Kühlmitteltemperaturabfrage durch Kombi |

### BF_31_01_1036_ANFORDERER_NACHLAUFZEIT_2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERER_0X00_36_KOMBI_ANZEIGE | 0-n | high | unsigned char | 0x01 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 0: Anforderer 0x 00 36   Kombi-Anzeige |
| STAT_ANFORDERER_0X01_01_EINSCHLAFVERHINDERER | 0-n | high | unsigned char | 0x02 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 1: Anforderer 0x 01 01   Einschlafverhinderer |
| STAT_ANFORDERER_0X01_02_WECKERPROBLEM | 0-n | high | unsigned char | 0x04 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 2: Anforderer 0x 01 02   Weckerproblem |
| STAT_ANFORDERER_0X01_03_ABSCHALTUNG_KL30F_STANDZEIT | 0-n | high | unsigned char | 0x08 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 3: Anforderer 0x 01 03   Abschaltung KL30F Standzeit |
| STAT_ANFORDERER_0X01_04_ABSCHALTUNG_KL30F_CARSHARING | 0-n | high | unsigned char | 0x10 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 4: Anforderer 0x 01 04   Abschaltung KL30F CarSharing |
| STAT_ANFORDERER_0X01_10_OBD_DIAGNOSE | 0-n | high | unsigned char | 0x20 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 5: Anforderer 0x 01 10   OBD-Diagnose |
| STAT_ANFORDERER_0X01_11_NACHLAUF_WASSERPUMPE | 0-n | high | unsigned char | 0x40 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 6: Anforderer 0x 01 11   Nachlauf elektrische Wasserpumpe Motor |
| STAT_ANFORDERER_0X01_13_NACHLAUF_E_LUEFTER | 0-n | high | unsigned char | 0x80 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 7: Anforderer 0x 01 13   Nachlauf E-Lüfter |

### BF_31_01_1036_ANFORDERER_NACHLAUFZEIT_3

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERER_0X01_14_LAGERSTUHLKUELUNG_TURBO | 0-n | high | unsigned char | 0x01 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 0: Anforderer 0x 01 14   Nachlauf elektrische Zusatzwasserpumpe Lagerstuhlkühlung Turbo |
| STAT_ANFORDERER_0X01_15_WASSERPUMPE_HYBRID | 0-n | high | unsigned char | 0x02 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 1: Anforderer 0x 01 15   Nachlauf elektr. Wasserpumpe Hybrid (HEWP) |
| STAT_ANFORDERER_0X01_16_STANDLUEFTEN | 0-n | high | unsigned char | 0x04 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 2: Anforderer 0x 01 16   Standlüften |
| STAT_ANFORDERER_0X01_18_LADEFUNKTION_HYBRID_HVPM_LIM | 0-n | high | unsigned char | 0x08 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 3: Anforderer 0x 01 18   Fremdladeerkennung Hybrid / Ladefunktion HVPM / Ladefunktion LIM |
| STAT_ANFORDERER_0X01_19_BATTERIEWAECHTER_TSR | 0-n | high | unsigned char | 0x10 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 4: Anforderer 0x 01 19   Batteriewächter TSR |
| STAT_ANFORDERER_0X01_20_NIVEAUREGULIERUNG | 0-n | high | unsigned char | 0x20 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 5: Anforderer 0x 01 20   Niveauregulierung |
| STAT_ANFORDEDER_0X01_21_LUEFTUNG_KUEHLUNG | 0-n | high | unsigned char | 0x40 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 6: Anforderer 0x 01 21   Nachlauf Lüftung/Kühlung |
| STAT_ANFORDERER_0X01_30_ANHAENGERANSCHLUSS_AAG | 0-n | high | unsigned char | 0x80 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 7: Anforderer 0x 01 30   Anhängeranschluß AAG |

### BF_31_01_1036_ANFORDERER_NACHLAUFZEIT_4

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERER_0X01_30_ANFORDERUNG_INDUSTRIEKUNDE | 0-n | high | unsigned char | 0x01 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 0: Anforderer 0x 01 31   Anforderung Industriekunde |
| STAT_ANFORDERER_0X01_32_ANFORDERUNG_INDUSTRIEKUNDE_OSFG | 0-n | high | unsigned char | 0x02 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 1: Anforderer 0x 01 32   Anforderung Industriekunde OSFG |
| STAT_ANFORDERER_0X02_01_DOMAENENMASTER_VERBRENNUNGSMOTOR | 0-n | high | unsigned char | 0x04 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 2: Anforderer 0x 02 01   Domänenmaster  Verbrennungsmotor |
| STAT_ANFORDERER_0X02_02_DOMAENENMASTER_ELEKTOMOTOR | 0-n | high | unsigned char | 0x08 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 3: Anforderer 0x 02 02   Domänenmaster Elektromotor |
| STAT_ANFORDERER_0X02_03_DOMAENENMASTER_UNTERHALTUNG | 0-n | high | unsigned char | 0x10 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 4: Anforderer 0x 02 03   Domänenmaster Unterhaltung |
| STAT_ANFORDERER_0X02_04 | 0-n | high | unsigned char | 0x20 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 5: Anforderer 0x 02 04 |
| STAT_ANFORDERER_0X02_05 | 0-n | high | unsigned char | 0x40 | TAB_ANFORDERUNG_NACHLAUFZEIT | - | - | - | Bit 6: Anforderer 0x 02 05       |
| STAT_ANFORDERER_4_BIT7_RESERVE | 0-n | high | unsigned char | 0x80 | TAB_RESERVE_0 | - | - | - | Bit 7: Reserviert, immer 0 |

### BF_31_01_1036_ANFORDERER_NACHLAUFZEIT_5

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERER_5_BIT0_RESERVE | 0-n | high | unsigned char | 0x01 | TAB_RESERVE_0 | - | - | - | Bit 0: Reserviert, immer 0 |
| STAT_ANFORDERER_5_BIT1_RESERVE | 0-n | high | unsigned char | 0x02 | TAB_RESERVE_0 | - | - | - | Bit 1: Reserviert, immer 0 |
| STAT_ANFORDERER_5_BIT2_RESERVE | 0-n | high | unsigned char | 0x04 | TAB_RESERVE_0 | - | - | - | Bit 2: Reserviert, immer 0 |
| STAT_ANFORDERER_5_BIT3_RESERVE | 0-n | high | unsigned char | 0x08 | TAB_RESERVE_0 | - | - | - | Bit 3: Reserviert, immer 0 |
| STAT_ANFORDERER_5_BIT4_RESERVE | 0-n | high | unsigned char | 0x10 | TAB_RESERVE_0 | - | - | - | Bit 4: Reserviert, immer 0 |
| STAT_ANFORDERER_5_BIT5_RESERVE | 0-n | high | unsigned char | 0x20 | TAB_RESERVE_0 | - | - | - | Bit 5: Reserviert, immer 0 |
| STAT_ANFORDERER_5_BIT6_RESERVE | 0-n | high | unsigned char | 0x40 | TAB_RESERVE_0 | - | - | - | Bit 6: Reserviert, immer 0 |
| STAT_ANFORDERER_5_BIT7_RESERVE | 0-n | high | unsigned char | 0x80 | TAB_RESERVE_0 | - | - | - | Bit 7: Reserviert, immer 0 |

### BF_31_01_1036_KL30F_MONITOR

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESET_BUSWECKER | 0-n | high | unsigned char | 0x01 | TAB_AUFGETRETEN_NICHT_AUFGETRETEN | - | - | - | Bit 0: 30F Reset wegen Buswecker |
| STAT_RESET_RUHESTROM | 0-n | high | unsigned char | 0x02 | TAB_AUFGETRETEN_NICHT_AUFGETRETEN | - | - | - | Bit 1: 30F Reset wegen Ruhestrom |
| STAT_RESET_EINSCHLAFVERHINDERER | 0-n | high | unsigned char | 0x04 | TAB_AUFGETRETEN_NICHT_AUFGETRETEN | - | - | - | Bit 2: 30F Reset wegen Einschlafverhinderer |
| STAT_ABSCHALTUNG_BUSWECKER | 0-n | high | unsigned char | 0x08 | TAB_AUFGETRETEN_NICHT_AUFGETRETEN | - | - | - | Bit 3: 30F Abschaltung wegen Buswecker |
| STAT_ABSCHALTUNG_RUHESTROM | 0-n | high | unsigned char | 0x10 | TAB_AUFGETRETEN_NICHT_AUFGETRETEN | - | - | - | Bit 4: 30F Abschaltung wegen Ruhestrom |
| STAT_ABSCHALTUNG_EINSCHLAFVERHINDERER | 0-n | high | unsigned char | 0x20 | TAB_AUFGETRETEN_NICHT_AUFGETRETEN | - | - | - | Bit 5: 30F Abschaltung wegen Einschlafverhinderer |
| STAT_ABSCHALTUNG_USFG | 0-n | high | unsigned char | 0x40 | TAB_AUFGETRETEN_NICHT_AUFGETRETEN | - | - | - | Bit 6: 30F Abschaltung wegen USFG |
| STAT_KL30F_MONITOR_BIT7_RESERVE | 0-n | high | unsigned char | - | TAB_RESERVE_0 | - | - | - | Bit 7: Reserviert, immer 0 |

### BF_HW_OPTIONEN

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_OPTION_GW_STARCOUPLER_PORT12 | 0/1 | high | unsigned long | 0x00000001 | - | - | - | - | 0: keine 1: HW_OPTION_GW_STARCOUPLER_PORT12 |
| STAT_HW_OPTION_GW_STARCOUPLER_PORT34 | 0/1 | high | unsigned long | 0x00000002 | - | - | - | - | 0: keine 1: HW_OPTION_GW_STARCOUPLER_PORT34 |
| STAT_HW_OPTION_GW_STARCOUPLER_PORT56 | 0/1 | high | unsigned long | 0x00000004 | - | - | - | - | 0: keine 1: HW_OPTION_GW_STARCOUPLER_PORT56 |
| STAT_HW_OPTION_GW_STARCOUPLER_PORT78 | 0/1 | high | unsigned long | 0x00000008 | - | - | - | - | 0: keine 1: HW_OPTION_GW_STARCOUPLER_PORT78 |
| STAT_HW_OPTION_GW_B2CAN | 0/1 | high | unsigned long | 0x00000010 | - | - | - | - | 0: keine 1: HW_OPTION_GW_B2CAN |
| STAT_HW_OPTION_GW_FASCAN | 0/1 | high | unsigned long | 0x00000020 | - | - | - | - | 0: keine 1: HW_OPTION_GW_FASCAN |
| STAT_HW_OPTION_GW_FDCAN | 0/1 | high | unsigned long | 0x00000040 | - | - | - | - | 0: keine 1: HW_OPTION_GW_FDCAN |
| STAT_HW_OPTION_GW_OABR_1_PORT | 0/1 | high | unsigned long | 0x00000080 | - | - | - | - | 0: keine 1: HW_OPTION_GW_OABR_1_PORT |
| STAT_HW_OPTION_GW_OABR_2_PORT | 0/1 | high | unsigned long | 0x00000100 | - | - | - | - | 0: keine 1: HW_OPTION_GW_OABR_2_PORT |
| STAT_HW_OPTION_GW_OABR_3_PORT | 0/1 | high | unsigned long | 0x00000200 | - | - | - | - | 0: keine 1: HW_OPTION_GW_OABR_3_PORT |
| STAT_HW_OPTION_GW_OABR_4_PORT | 0/1 | high | unsigned long | 0x00000400 | - | - | - | - | 0: keine 1: HW_OPTION_GW_OABR_4_PORT |
| STAT_HW_OPTION_GW_OABR_5_PORT | 0/1 | high | unsigned long | 0x00000800 | - | - | - | - | 0: keine 1: HW_OPTION_GW_OABR_5_PORT |
| STAT_HW_OPTION_GW_OABR_6_PORT | 0/1 | high | unsigned long | 0x00001000 | - | - | - | - | 0: keine 1: HW_OPTION_GW_OABR_6_PORT |
| STAT_HW_OPTION_RESERVE_1 | 0/1 | high | unsigned long | 0x00002000 | - | - | - | - | Reserve, Wert 0 |
| STAT_HW_OPTION_RESERVE_2 | 0/1 | high | unsigned long | 0x00004000 | - | - | - | - | Reserve, Wert 0 |
| STAT_HW_OPTION_RESERVE_3 | 0/1 | high | unsigned long | 0x00008000 | - | - | - | - | Reserve, Wert 0 |
| STAT_HW_OPTION_BODY_AC_ECU_INTEGRATION | 0/1 | high | unsigned long | 0x00010000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_AC_ECU_INTEGRATION |
| STAT_HW_OPTION_BODY_AC_HEATINGVALVE | 0/1 | high | unsigned long | 0x00020000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_AC_HEATINGVALVE |
| STAT_HW_OPTION_BODY_PF_MOTORBRIDGE | 0/1 | high | unsigned long | 0x00040000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_PF_MOTORBRIDGE |
| STAT_HW_OPTION_BODY_HC_MIRRORHEATING | 0/1 | high | unsigned long | 0x00080000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_HC_MIRRORHEATING |
| STAT_HW_OPTION_BODY_WW_REARWIPER_2 | 0/1 | high | unsigned long | 0x00100000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_WW_REARWIPER_2 |
| STAT_HW_OPTION_BODY_WW_REARWIPER | 0/1 | high | unsigned long | 0x00200000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_WW_REARWIPER |
| STAT_HW_OPTION_BODY_WW_FRONTWIPER | 0/1 | high | unsigned long | 0x00400000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_WW_FRONTWIPER |
| STAT_HW_OPTION_BODY_WW_SRA | 0/1 | high | unsigned long | 0x00800000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_WW_SRA |
| STAT_HW_OPTION_BODY_LC_FUNCTIONAL_LED | 0/1 | high | unsigned long | 0x01000000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_LC_FUNCTIONAL_LED |
| STAT_HW_OPTION_BODY_LC_LWR | 0/1 | high | unsigned long | 0x02000000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_LC_LWR |
| STAT_HW_OPTION_BODY_LC_WELCOME | 0/1 | high | unsigned long | 0x04000000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_LC_WELCOME |
| STAT_HW_OPTION_BODY_LC_SIDEMARK | 0/1 | high | unsigned long | 0x08000000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_LC_SIDEMARK |
| STAT_HW_OPTION_BODY_CA_DOOR_HANDLE | 0/1 | high | unsigned long | 0x10000000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_CA_DOOR_HANDLE |
| STAT_HW_OPTION_BODY_CA_ANTENNA_ENTRY | 0/1 | high | unsigned long | 0x20000000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_CA_ANTENNA_ENTRY |
| STAT_HW_OPTION_BODY_PF_LIN_KLMP | 0/1 | high | unsigned long | 0x40000000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_PF_LIN_KLMP |
| STAT_HW_OPTION_BODY_DEBUG | 0/1 | high | unsigned long | 0x80000000 | - | - | - | - | 0: keine 1: HW_OPTION_BODY_DEBUG |

### BF_SAFETY_MICRO_STATI

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIMP_HOME | 0/1 | high | unsigned char | 0x01 | - | - | - | - | Status der LimpMode |
| STAT_RESET_PROTECTION | 0/1 | high | unsigned char | 0x02 | - | - | - | - | Reset oder nicht |
| STAT_KLEMME_15 | 0/1 | high | unsigned char | 0x04 | - | - | - | - | Status der Anzündung KL 15 |
| STAT_RESET | 0/1 | high | unsigned char | 0x08 | - | - | - | - | Reset der Safety Micro |

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

### FH_THERMOMONITOR_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Thermoschwelle aktiv (übersteuert) |
| 0x01 | Thermo 90 aktiv (übersteuert) |
| 0x02 | Thermo 100 aktiv (übersteuert) |
| 0x03 | Normalbetrieb Schwellen werden entsprechend dem Ergebnis der Berechnung gesetzt |
| 0x04 | Thermo 90 aktiv, nicht übersteuert |
| 0x05 | Thermo 100 aktiv, nicht übersteuert |
| 0xFF | Wert ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x024000 | Energiesparmode aktiv | 0 |
| 0x024008 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x024009 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 |
| 0x02400A | Codierung: Signatur der Codierdaten ungültig | 0 |
| 0x02400B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 |
| 0x02400C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 |
| 0x02400D | Codierung: Codierdaten nicht qualifiziert | 0 |
| 0x02FF40 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x030031 | FH FA: IFE Hardware-Fehler | 1 |
| 0x030032 | FH FA: Initialisierungsfehler | 1 |
| 0x030033 | FH FA: Interner Fehler | 1 |
| 0x030034 | IFE FA: Unerwarteter LIN-Slave | 0 |
| 0x030035 | IFE FA: Fehlender LIN-Slave | 0 |
| 0x0300B0 | FH BF: Lokaler Taster fehlerhaft | 1 |
| 0x0300B1 | FH BF: IFE Hardware Fehler | 1 |
| 0x0300B2 | FH BF: Initialisierungsfehler | 1 |
| 0x0300B3 | FH BF: Interner Fehler | 1 |
| 0x0300B4 | IFE BFT: Unerwarteter LIN-Slave | 0 |
| 0x0300B5 | IFE BFT: Fehlender LIN-Slave | 0 |
| 0x030130 | FH FAH: Lokaler Taster fehlerhaft | 1 |
| 0x030131 | FH FAH: IFE Hardware Fehler | 1 |
| 0x030132 | FH FAH: Initialisierungsfehler | 1 |
| 0x030133 | FH FAH: Interner Fehler | 1 |
| 0x030134 | IFE FATH: Unerwarteter LIN-Slave | 0 |
| 0x030135 | IFE FATH: Fehlender LIN-Slave | 0 |
| 0x0301B0 | FH BFH: Lokaler Taster fehlerhaft | 1 |
| 0x0301B1 | FH BFH: IFE Hardware-Fehler | 1 |
| 0x0301B2 | FH BFH: Initialisierungsfehler | 1 |
| 0x0301B3 | FH BFH: Interner Fehler | 1 |
| 0x0301B4 | IFE BFTH: Unerwarteter LIN-Slave | 0 |
| 0x0301B5 | IFE BFTH: Fehlender LIN-Slave | 0 |
| 0x030340 | Schaltzentrum Lenksäule (SZL) (LIN): Interner Hardware-Fehler | 0 |
| 0x030341 | Schaltzentrum Lenksäule (SZL), Lenkstock Blinker: Funktionsfehler | 0 |
| 0x030344 | Schaltzentrum Lenksäule (SZL), Lenkstock Wischer: Funktionsfehler | 0 |
| 0x030349 | Schaltzentrum Lenksäule (SZL) oder Lenkradelektronik (LRE), Lenkradheizung (LHZ): Taster hängt | 0 |
| 0x03034A | Schaltzentrum Lenksäule (SZL) oder Lenkradelektronik (LRE), Lenkradheizung (LHZ): Taster nicht verbaut oder LED Leitungsunterbrechung oder LHZ-Taster überbestückt | 0 |
| 0x03034B | Schaltzentrum Lenksäule (SZL), Lenkradheizung LED: Kurzschluss nach Masse | 0 |
| 0x03034C | Schaltzentrum Lenksäule, Hupe: Taster hängt | 0 |
| 0x03034D | Schaltzentrum Lenksäule (SZL) (LIN): Kommunikationsfehler | 0 |
| 0x030350 | Schaltzentrum Lenksäule (SZL) (LIN): Fehlender LIN-Slave | 0 |
| 0x030351 | Schaltzentrum Lenksäule (SZL) (LIN): Falsche Variante verbaut | 0 |
| 0x030352 | Schaltzentrum Lenksäule (SZL) (LIN): Alive-Zähler-Fehler | 0 |
| 0x03035A | Schaltzentrum Lenksäule (SZL) (LIN), elektrische Lenksäulenverstellung (eLSV), Taster: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x03035B | Schaltzentrum Lenksäule (SZL) (LIN), elektrische Lenksäulenverstellung (elSV): Taster hängt | 0 |
| 0x03035C | Schaltzentrum Lenksäule (SZL) (LIN), elektrische Lenksäulenverstellung (elSV), Taster: Kurzschluss nach Masse | 0 |
| 0x030360 | Hands-Off Detection (HOD)(LIN): Versorgungsspannung außer des gültigen Bereiches | 0 |
| 0x030361 | Hands-Off Detection (HOD)(LIN): Steuergerät defekt | 0 |
| 0x030362 | Hands-Off Detection (HOD)(LIN): Sensormatte defekt | 0 |
| 0x030363 | Hands-Off Detection (HOD)(LIN): Falsche Variante verbaut | 0 |
| 0x030364 | Hands-Off Detection (HOD)(LIN): Fehlender LIN-Slave | 0 |
| 0x030365 | Hands-Off Detection (HOD)(LIN): Unerwarteter LIN-Slave | 0 |
| 0x030401 | Multifunktions-Lenkrad (MFL): Interner Fehler | 0 |
| 0x030409 | Multifunktions-Lenkrad (MFL): Alive-Zaehler-Fehler | 0 |
| 0x030410 | Multifunktions-Lenkrad (MFL): Fehlender LIN-Slave | 0 |
| 0x030411 | Multifunktions-Lenkrad (MFL): Falsche Variante verbaut | 0 |
| 0x030412 | Multifunktions-Lenkrad (MFL): Unerwarteter LIN-Slave | 0 |
| 0x030480 | Lenkradelektronik (LRE), Lenkradheizung Last: interner Fehler | 0 |
| 0x030481 | Lenkradelektronik (LRE), Lenkradheizung NTC-Kontakt: Interner Fehler | 0 |
| 0x030482 | Lenkradelektronik (LRE), Lenkradheizung (LHZ): Kurzschluss | 0 |
| 0x030483 | Lenkradelektronik (LRE), Lenkradheizung (LHZ): Interner Fehler | 0 |
| 0x030484 | Lenkradelektronik (LRE), Lenkradvibration: Spannung ausserhalb gültigem Bereich | 0 |
| 0x030487 | Lenkradelektronik (LRE), Aktuator: Leitungsunterbrechung | 0 |
| 0x030488 | Lenkradelektronik (LRE), Aktuator: Kurzschluss nach Masse | 0 |
| 0x030489 | Lenkradelektronik (LRE), Aktuator: Blockiert | 0 |
| 0x030490 | Lenkradelektronik (LRE) (LIN): Fehlender LIN-Slave | 0 |
| 0x030491 | Lenkradelektronik (LRE) (LIN): Falsche Variante verbaut | 0 |
| 0x030492 | Lenkradelektronik (LRE) (LIN): Unerwarteter LIN-Slave | 0 |
| 0x030496 | Lenkradelektronik (LRE), M-Taster: Fehler M1 | 0 |
| 0x030497 | Lenkradelektronik (LRE), M-Taster: Fehler M2 | 0 |
| 0x0304C0 | ELSV (LIN), Motor axial: Kurzschluss nach Masse | 0 |
| 0x0304C1 | ELSV (LIN), Motor axial: Kurzschluss nach Plus | 0 |
| 0x0304C2 | ELSV (LIN), Motor axial: Kurzschluss im Motor oder in Zuleitung | 0 |
| 0x0304C3 | ELSV (LIN), Motor axial: Unterbrechung im Motoranschluss | 0 |
| 0x0304C4 | ELSV (LIN): Nicht normiert | 0 |
| 0x0304C5 | ELSV (LIN), Steuergeräte: Interner Fehler | 0 |
| 0x0304C7 | ELSV (LIN): Maximale Anzahl an Blockfahrten erreicht | 0 |
| 0x0304C8 | ELSV (LIN): Spannungsversorgung außerhalb des gültigen Bereiches | 0 |
| 0x0304CA | ELSV (LIN), Motor vertikal: Kurzschluss nach Masse | 0 |
| 0x0304CB | ELSV (LIN), Motor vertikal: Kurzschluss nach Plus | 0 |
| 0x0304CC | ELSV (LIN): Motor vertikal: Kurzschluss im Motor oder in Zuleitung | 0 |
| 0x0304CD | ELSV (LIN), Motor vertikal: Unterbrechung im Motoranschluss | 0 |
| 0x0304D1 | ELSV (LIN): Fehlender LIN Slave | 0 |
| 0x0304D2 | ELSV (LIN): Unerwarteter LIN Slave | 0 |
| 0x0304D3 | ELSV (LIN), Hallsensor axial: Kurzschluss nach Plus oder Masse | 0 |
| 0x0304D5 | ELSV (LIN), Hallsensor axial: Kurzschluss im Sensor oder Leitungsunterbrechung | 0 |
| 0x0304D6 | ELSV (LIN), Hallsensor axial: Thermoschutz | 0 |
| 0x0304D7 | ELSV (LIN), Hallsensor vertikal: Kurzschluss nach Plus oder Masse | 0 |
| 0x0304D9 | ELSV (LIN), Hallsensor vertikal: Kurzschluss im Sensor oder Leitungsunterbrechung | 0 |
| 0x0304DA | ELSV (LIN), Hallsensor vertikal: Thermoschutz | 0 |
| 0x804011 | Versorgungsunterspannung 8V5 | 0 |
| 0x804012 | Versorgungsüberspannung 16V5 | 0 |
| 0x804013 | Versorgungsspannung Klemme 30L1 fehlt | 0 |
| 0x804014 | Versorgungsspannung Klemme 30L2 fehlt | 0 |
| 0x804015 | Versorgungsspannung Klemme 30L3 fehlt | 0 |
| 0x804016 | Versorgungsspannung Klemme 30L4 fehlt | 0 |
| 0x80402F | Batterie Tiefentladen | 0 |
| 0x804033 | Spielschutz: Weckfähige Eingänge gesperrt | 1 |
| 0x804060 | ISV, Ansteuerleitung 30B5: Kurzschluss | 0 |
| 0x804062 | ISV, Versorgungsspannung Relais hinten: Kurzschluss möglich | 0 |
| 0x804063 | ISV, Ansteuerleitung 30B5: Leitungsunterbrechung | 0 |
| 0x804064 | ISV, Ansteuerleitung 30B6 oder 30B7, Ein- oder Abschalten: Leitungsunterbrechung | 0 |
| 0x804065 | ISV, Ansteuerleitung 30B6 oder 30B7, Ein- oder abschalten : Kurzschluss | 0 |
| 0x804066 | ISV: Lastklemmentreiber 30B_DxE/30B_ACSM/15N1_6, Dauerhafte Deaktiverung, Maximaler Anzahl Kurzschlüsse nach Masse erreicht | 0 |
| 0x804067 | ISV: Fehlendes/falsches Relaiskonfigurationsignal | 0 |
| 0x804068 | ISV: Interner SG-Fehler | 0 |
| 0x804069 | ISV, Kommunikationsfehler: CRC/Alive-Signal falsch oder Steuersignal unplausibel | 0 |
| 0x80406C | ISV, Diagnoseleitung DIAG_SV2-SV4(30B5, 30B6, 30B7): Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x80406D | ISV, Notbetriebleitung: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x80406E | ISV, Relais 15N: Zustandswiderspruch | 0 |
| 0x80406F | ISV, Relais 30B1: Zustandswiderspruch | 0 |
| 0x804070 | ISV, Relais 30B2: Zustandswiderspruch | 0 |
| 0x804071 | ISV, Relais Heckscheibenheizung: Zustandswiderspruch | 0 |
| 0x804072 | ISV, Relais 30B5: Zustandswiderspruch | 0 |
| 0x804073 | ISV, Relais 30B6: Zustandswiderspruch | 0 |
| 0x804074 | ISV, Relais 30B7: Zustandswiderspruch | 0 |
| 0x804075 | ISV, Relais 30F1: Zustandswiderspruch | 0 |
| 0x804076 | ISV, Relais 30F2: Zustandswiderspruch | 0 |
| 0x804077 | ISV: Überspannung erkannt | 1 |
| 0x804078 | ISV: Übertemperatur erkannt | 1 |
| 0x804079 | ISV: Unterspannung erkannt | 1 |
| 0x80407B | ISV, Versorgungsspannung 30B_DxE: Kurzschluss nach Masse oder Leitungsunterbechung | 0 |
| 0x80407D | Motorstart bei Anlasserbetrieb: Stromüberlast bei einrücken | 0 |
| 0x804081 | Herstellung Fahrbereitschaft: Fehlerhaft | 0 |
| 0x804082 | Anforderung Motorlauf als Standfunktion: Fehlerhaft | 0 |
| 0x804083 | Kupplungssignal (PN_KUPPL): Kurzschluss nach plus | 0 |
| 0x804084 | Kupplungssignal (PN_KUPPL): Plausibilität, CAN-Signal | 0 |
| 0x804086 | Treiber KL15WUP: Kurzschluss nach Plus | 0 |
| 0x804087 | Start-Stopp-Taster Sensor SSTB: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804088 | Start-Stopp-Taster Sensor SSTA: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804089 | Start-Stopp-Taster Sensor SSTA: Kurzschluss nach Masse | 0 |
| 0x80408A | Start-Stopp-Taster Sensor SSTB: Kurzschluss nach Masse | 0 |
| 0x80408B | Treiber KL15WUP: Kurzschluss nach Masse | 0 |
| 0x80408C | KL30F-Relais vorne, Interne Sicherung 1: Defekt | 0 |
| 0x804090 | Treiber KL15: Kurzschluss nach Masse | 0 |
| 0x804091 | Treiber KL15: Kurzschluss nach Plus | 0 |
| 0x804094 | KL30F-Relais vorne, Interne Sicherung 2: Defekt | 0 |
| 0x804095 | Motorstart bei Anlasserbetrieb: Stromüberlast nach 2,5 Sekunden | 0 |
| 0x804098 | Start-Stopp-Taster Sensor SSTA: Dauerbetätigung | 0 |
| 0x804099 | Start-Stopp-Taster Sensor SSTB: Dauerbetätigung | 0 |
| 0x80409C | Bremslichtschalter (BLS): Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80409D | Bremslichtschalter (BLS): Kurzschluss | 0 |
| 0x80409E | Bremslichtschalter (BLS): Dauerbetätigung | 0 |
| 0x80409F | Bremslichtschalter (BLS): Unplausibler Zustand | 0 |
| 0x8040A4 | Start-Stopp-Taster Sensor SSTA: Unplausibler Zustand | 0 |
| 0x8040A5 | Start-Stopp-Taster Sensor SSTB: Unplausibler Zustand | 0 |
| 0x8040A9 | Start-Stopp-Taster SST: Fehlbetätigung (Schrägdruck) | 1 |
| 0x8040AA | KL30F-Relais vorne, Interne Sicherung 3: Defekt | 0 |
| 0x8040AB | KL30F-Relais vorne, Interne Sicherung 4: Defekt | 0 |
| 0x8040AD | LED Suchbeleuchtung Start-Stopp-Taster: Kurzschluss nach Masse | 0 |
| 0x8040AE | LED Suchbeleuchtung Start-Stopp-Taster: Kurzschluss nach plus | 0 |
| 0x8040AF | Kodierung: Lampenmapping Innenlicht fehlgeschlagen | 0 |
| 0x8040B0 | Intelligenter Batteriesensor (IBS) Wakeup: Kurzschluss nach Masse | 0 |
| 0x8040B1 | Intelligenter Batteriesensor (IBS) Wakeup: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8040B2 | LED Funktionsbeleuchtung MSA: Kurzschluss nach Masse | 0 |
| 0x8040B3 | LED Funktionsbeleuchtung MSA: Kurzschluss nach Plus | 0 |
| 0x8040B5 | KL30F-Relais: Relaisfehler bei Einschalten | 0 |
| 0x8040B6 | Motorstart: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8040B7 | KL30F-Relais: Relaisfehler bei Ausschalten | 0 |
| 0x8040B8 | Treiber Ausgang: Maximale Anzahl Kurzschlüsse erreicht | 1 |
| 0x8040BF | Motorstart Einschalten: Kurzschluss nach Masse | 0 |
| 0x8040C0 | Motorstart Betrieb: Kurzschluss nach Masse | 0 |
| 0x8040C3 | KL30F: Anforderung Abschaltung wegen Ruhestromverletzung | 1 |
| 0x8040C6 | KL30F: Anforderung Reset wegen Ruhestromverletzung | 1 |
| 0x8040CD | PWF-Zustand Fahren: Fehlerhaftes Abstellen | 1 |
| 0x8040D0 | PWF Messemodus aktiv | 0 |
| 0x8040D2 | PWF-Zustand Aktivierung: Parken BN niO | 1 |
| 0x8040E0 | EWS: DME oder DDE Secret Key nicht geschrieben bzw. nicht verriegelt | 1 |
| 0x8040E2 | Hecktür links: Kurzschluss nach Masse | 1 |
| 0x8040E3 | Hecktür links: Leitungsunterbrechung | 1 |
| 0x8040E4 | Hecktür links: Kurzschluss nach Plus | 1 |
| 0x8040E5 | Hecktür rechts: Kurzschluss nach Masse | 1 |
| 0x8040E6 | Hecktür rechts: Leitungsunterbrechung | 1 |
| 0x8040E7 | Hecktür rechts: Kurzschluss nach Plus | 1 |
| 0x8040F0 | Transponderspule: Fehler Basestation | 0 |
| 0x8040F1 | Kryptodaten in einem Schlüssel | 1 |
| 0x8040F2 | Transponderspule: Fehler Ersatzschlüsselanlernen | 1 |
| 0x8040F3 | Transponderspule: Gesperrter Schlüssel gefunden | 1 |
| 0x8040F4 | Transponderspule: Fremdschlüssel nicht dem Fahrzeug zugehörig | 1 |
| 0x8040F5 | Transponderspule: Fehler Antenne | 0 |
| 0x8040F7 | JTAG, BDC-Body: Not locked | 0 |
| 0x804101 | Antenne Stoßfänger hinten (SFH): Kurzschluss | 0 |
| 0x804103 | Antenne Stoßfänger hinten (SFH): Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x804105 | Antenne Innenraum vorn (IRV): Kurzschluss | 0 |
| 0x804107 | Antenne Innenraum vorn (IRV): Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x804109 | Antenne Tür links: Kurzschluss | 0 |
| 0x80410B | Antenne Tür links: Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x80410D | Antenne Tür rechts: Kurzschluss | 0 |
| 0x80410F | Antenne Tür rechts: Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x804111 | Antenne Innenraum hinten (IRH): Kurzschluss | 0 |
| 0x804113 | Antenne Innenraum hinten (IRH): Antennenfehler Leitungsunterbrechung | 0 |
| 0x804117 | Antenne Außenraum vorne (ARV): Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x804119 | Antenne Kofferraum links (KRLI): Kurzschluss | 0 |
| 0x80411B | Antenne Kofferraum links (KRLI): Antennenfehler oder Leitungsunterbrechung | 0 |
| 0x804120 | TAGE Fahrertür/-seite (FT): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x804124 | TAGE Beifahrertür/-seite (BFT): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x804128 | TAGE Fahrertür/-seite hinten (FTH): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x80412C | TAGE Beifahrertür/-seite hinten (BFTH): Kurzschluss DATA-Leitung nach Masse | 0 |
| 0x804130 | TAGE: Eine oder mehrere gesperrt, da Spielschutz aktiv | 1 |
| 0x804131 | Taster Zentralsichern Heckklappe (TZSHK): Dauerbetätigung | 0 |
| 0x804133 | Antenne Außenraum vorne (ARV): Kurzschluss | 0 |
| 0x804134 | CKT: Diagnose Sperre aktiv | 0 |
| 0x804135 | Centerlock-Wippe, Beifahrertür: Defekt oder Leitungsfehler | 1 |
| 0x804136 | CKT: Deaktiviert | 1 |
| 0x804138 | Centerlock-Wippe, Beifahrertür: Dauerbetätigung | 1 |
| 0x804139 | ZV-Antrieb Heckklappe oder Splitdoor rechts: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80413A | ZV-Antrieb Heckklappe, Heckscheibe, Splitdoors oder Frontklappe: Dauerhafte Deaktivierung, maximaler Anzahl Kurzschlüsse nach Masse erreicht | 0 |
| 0x80413B | ZV-Antrieb untere Heckklappe, Heckscheibe, Splitdoor links oder Frontklappe: Klappenkontakt defekt oder Klappe klemmt | 0 |
| 0x80413C | ZV-Antrieb untere Heckklappe, Heckscheibe, Splitdoor links oder Frontklappe: Kurzschluss nach Masse | 0 |
| 0x80413D | ZV-Antrieb untere Heckklappe, Heckscheibe, Splitdoor links oder Frontklappe: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80413E | ZV-Antrieb Heckklappe oder Splitdoor rechts: Klappenkontakt defekt oder Klappe klemmt | 0 |
| 0x80413F | ZV-Antrieb Heckklappe oder Splitdoor rechts: Kurzschluss nach Masse | 0 |
| 0x804140 | Centerlock Taster (CLT): Dauerbetätigung | 0 |
| 0x804143 | Funkfernbedienung (FBD): Dauerbetätigung | 1 |
| 0x804145 | CA-Antennen: Schwingkreis nicht abgestimmt | 1 |
| 0x804146 | Taster Entriegeln Heckklappe Innen (TOEHKI): Dauerbetätigung | 0 |
| 0x804153 | Centerlock-Wippe, Fahrertür: Defekt oder Leitungsfehler | 1 |
| 0x804156 | Centerlock-Wippe, Fahrertür: Dauerbetätigung | 1 |
| 0x80415B | Motorhaubenkontakt (MHK): Defekt oder Leitungsfehler | 0 |
| 0x80415C | ZV-Relais Entriegeln (ZV_MER): Kurzschluss nach Plus oder Relaisfehler | 0 |
| 0x80415D | ZV-Relais Entriegeln (ZV_MER): Kurzschluss nach Masse | 0 |
| 0x80415E | ZV-Relais Selektives Verriegeln Fahrer (ZV_MVR_FA): Kurzschluss nach Plus oder Relaisfehler | 0 |
| 0x80415F | ZV-Relais Selektives Verriegeln Fahrer (ZV_MVR_FA): Kurzschluss nach Masse | 0 |
| 0x804160 | ZV-Relais Sichern (ZV_MVS): Kurzschluss nach Plus oder Relaisfehler | 0 |
| 0x804161 | ZV-Relais Sichern (ZV_MVS): Kurzschluss nach Masse | 0 |
| 0x804162 | ZV-Relais Verriegeln (ZV_MVR): Kurzschluss nach Plus oder Relaisfehler | 0 |
| 0x804163 | ZV-Relais Verriegeln (ZV_MVR): Kurzschluss nach Masse | 0 |
| 0x804164 | Türkontakt Beifahrertür: Leitungsunterbrechung oder defekt | 0 |
| 0x804166 | Türkontakt Beifahrertür hinten unten: Leitungsunterbrechung oder defekt | 0 |
| 0x804168 | Türkontakt Fahrertür: Leitungsunterbrechung oder defekt | 0 |
| 0x80416A | Türkontakt Fahrertür hinten unten: Leitungsunterbrechung oder defekt | 0 |
| 0x80416D | Motorhaubenkontakt (MHK): Offen bei Fahrt | 1 |
| 0x804176 | SMO: Interner Fehler | 0 |
| 0x804177 | SMO: Energiebordnetzfehler | 1 |
| 0x804178 | SMO, Parametrierung: Fehlerhaft | 0 |
| 0x804179 | SMO, Spielschutz: Aktiv bis zum naechsten Motorstart oder Fahrtende | 1 |
| 0x80417A | SMO, Spielschutz: Temporär aktiv | 1 |
| 0x80417B | SMO, Sensorelektrode oben: Fehler | 0 |
| 0x80417C | SMO, Sensorelektrode unten: Fehler | 0 |
| 0x80417E | ZV-Relais Sichern (ZV_MVS) oder Verriegeln Fahrertür (ZV_MVR_FA): Sicherung defekt | 0 |
| 0x80417F | ZV-Relais Verriegeln (ZV_MVR) oder Entriegeln (ZV_MER): Sicherung defekt | 0 |
| 0x804180 | Positionlicht links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804181 | Positionslicht rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804182 | Abblenlicht (AL) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804183 | Abblendlicht (AL) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804184 | Tagfahrlicht (TFL) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804185 | Tagfahrlicht (TFL) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804186 | Fernlicht (FL) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804187 | Fernlicht (FL) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x80418A | Fahrtrichtungsanzeiger vorn (FRA) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x80418B | Fahrtrichtungsanzeiger vorn (FRA) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x80418C | Fahrtrichtungsanzeiger zusätlich (FRA) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x80418D | Fahrtrichtungsanzeiger zusätlich (FRA) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x80418E | Seitenmarkierungslicht (SML) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x80418F | Seitenmarkierungslicht (SML) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804190 | Nebelscheinwerfer (NSW) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804191 | Nebelscheinwerfer (NSW) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804192 | Positionslicht links: Kurzschluss | 0 |
| 0x804193 | Positionslicht rechts: Kurzschluss | 0 |
| 0x804194 | Abblendlicht (AL) links: Kurzschluss | 0 |
| 0x804195 | Abblendlicht (AL) rechts: Kurzschluss | 0 |
| 0x804196 | Tagfahrlicht (TFL) links: Kurzschluss | 0 |
| 0x804197 | Tagfahrlicht (TFL) rechts: Kurzschluss | 0 |
| 0x80419A | Fernlicht (FL) links: Kurzschluss | 0 |
| 0x80419B | Fernlicht (FL) rechts: Kurzschluss | 0 |
| 0x80419C | Fahrtrichtungsanzeiger vorn (FRA) links: Kurzschluss | 0 |
| 0x80419D | Fahrtrichtungsanzeiger vorn (FRA) rechts: Kurzschluss | 0 |
| 0x80419E | Fahrtrichtungsanzeiger zusätlich (FRA) links: Kurzschluss | 0 |
| 0x80419F | Fahrtrichtungsanzeiger zusätzlich (FRA) rechts: Kurzschluss | 0 |
| 0x8041A0 | Seitenmarkierungslicht (SML) links: Kurzschluss | 0 |
| 0x8041A1 | Seitenmarkierungslicht (SML) rechts: Kurzschluss | 0 |
| 0x8041A2 | Nebelscheinwerfer (NSW) links: Kurzschluss | 0 |
| 0x8041A3 | Nebelscheinwerfer (NSW) rechts: Kurzschluss | 0 |
| 0x8041A5 | Licht Ausgänge: Anzahl zulässiger Kurzschlusszyklen überschritten | 0 |
| 0x8041AA | Parklicht: Abschaltung Parklicht, Tiefentladungsschutz der Batterie | 1 |
| 0x8041AB | Standlicht: Abschaltung Standlicht, Tiefentladungsschutz der Batterie | 1 |
| 0x8041B2 | Licht aktiv: Startfähigkeitsgrenze erreicht | 1 |
| 0x8041B4 | Leuchtweitenregulierung (LWR): Anhängererkennung ausgefallen | 1 |
| 0x8041B5 | Leuchtweitenregulierung (LWR): Gurtschlosserkennung ausgefallen | 1 |
| 0x8041B6 | Leuchtweitenregulierung (LWR): System ausgefallen | 0 |
| 0x8041B7 | Leuchtweitenregulierung (LWR): Spulenabriss an einem oder beiden Schrittmotoren | 0 |
| 0x8041B8 | Leuchtweitenregulierung (LWR): Kurzschluss innerhalb eines oder beider LWR-Motoren | 0 |
| 0x8041B9 | Leuchtweitenregulierung (LWR): Treiberfehler | 0 |
| 0x8041BF | Regenlichtsensor: Signal unplausibel | 1 |
| 0x8041C3 | Kodierung: Lampenmapping fehlgeschlagen | 0 |
| 0x8041C9 | Bedieneinheit Fahrerassistenzsysteme (LIN): Schalter hängt | 1 |
| 0x8041CB | Bedieneinheit Fahrerassistenzsysteme (LIN), SARAH: Funktionsbeleuchtung defekt | 0 |
| 0x8041D4 | Höhenstandssensoren hinten links oder rechts, Signal: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8041D5 | Höhenstandssensoren, vorne links oder rechts, Signal: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8041D8 | Höhenstandssensoren: Abgleich, Werte unplausibel | 0 |
| 0x8041D9 | Rückfahrlicht: Rückfahrlicht deaktiviert, Rückwärtsgang-Information unplausibel | 0 |
| 0x8041DA | Rücklicht-Steuergerät links, Blinkfunktion: Unplausibler Zustand | 0 |
| 0x8041DB | Rücklicht-Steuergerät rechts, Blinkfunktion: Unplausibler Zustand | 0 |
| 0x8041DC | Rücklicht-Steuergerät rechts, Bremslichtfunktion: Unplausibler Zustand | 0 |
| 0x8041DD | Rücklicht-Steuergerät links, Bremslichtfunktion: Unplausibler Zustand | 0 |
| 0x8041E0 | Warnblinken: Taster hängt | 0 |
| 0x8041E1 | FuSi Außenlicht deaktiviert per Codierung | 0 |
| 0x8041E2 | Lichtsperre Montage: Aktiv | 0 |
| 0x8041E3 | Spannungsschutzlicht: Spannungsschutzlicht aktiv, Überspannung | 1 |
| 0x804229 | Bedieneinheit Mittelkonsole (LIN): interner Fehler | 0 |
| 0x80422A | Bedieneinheit Mittelkonsole (LIN) NIV-Modul: interner Fehler | 0 |
| 0x80422B | Bedieneinheit Mittelkonsole (LIN) NIV-Modul: Taster hängt | 0 |
| 0x80422C | Bedieneinheit Mittelkonsole (LIN) NIV-Modul: Fehler Status Anzeige | 0 |
| 0x80422D | Bedieneinheit Mittelkonsole (LIN) NIV-Modul: Fehlender LIN-Slave | 0 |
| 0x80422E | Bedieneinheit Mittelkonsole (LIN) NIV-Modul: Unerwarteter LIN-Slave | 0 |
| 0x804230 | Bedieneinheit Mittelkonsole (LIN): Fehler Status Berührung | 0 |
| 0x804231 | Bedieneinheit Mittelkonsole (LIN): Fehler Status Anzeige | 0 |
| 0x804232 | Bedieneinheit Mittelkonsole (LIN): Taster hängt | 0 |
| 0x804243 | Außenspiegel links (LIN), Antrieb: defekt | 0 |
| 0x804244 | Außenspiegel links (LIN), Antrieb für Beiklappen: defekt | 0 |
| 0x804245 | Außenspiegel links (LIN), Potentiometer: defekt | 0 |
| 0x804246 | Außenspiegel links (LIN), Heizung oder Elektro-Chrome: Defekt | 0 |
| 0x804247 | Außenspiegel links (LIN), Antrieb: Endanschlag nicht erreicht | 0 |
| 0x804248 | Außenspiegel links (LIN), Fahrspurwechselwarnung: Defekt | 0 |
| 0x804253 | Außenspiegel rechts (LIN), Antrieb: defekt | 0 |
| 0x804254 | Außenspiegel rechts (LIN), Antrieb für Beiklappen: defekt | 0 |
| 0x804255 | Außenspiegel rechts (LIN), Potentiometer: defekt | 0 |
| 0x804256 | Außenspiegel rechts (LIN), Heizung oder Elektro-Chrome: Defekt | 0 |
| 0x804257 | Außenspiegel rechts (LIN), Antrieb: Endanschlag nicht erreicht | 0 |
| 0x804258 | Außenspiegel rechts (LIN), Fahrspurwechselwarnung: Defekt | 0 |
| 0x804260 | Außenspiegel links oder rechts: Überspannung | 1 |
| 0x804261 | Außenspiegel links or rechts: Unterspannung | 1 |
| 0x804262 | Außenspiegel links oder rechts (LIN), Beiklappen: Wiederholsperre aktiv | 1 |
| 0x804265 | Außenspiegel links oder rechts: Übertemperatur | 1 |
| 0x804270 | ISV, Ansteuerleitung 30B1: Kurzschluss | 0 |
| 0x804271 | ISV, Ansteuerleitung 30B1: Leitungsunterbrechung | 0 |
| 0x804272 | ISV, Ansteuerleitung 30B2: Kurzschluss | 0 |
| 0x804273 | ISV, Ansteuerleitung 30B2: Leitungsunterbrechung | 0 |
| 0x804274 | ISV, Ansteuerleitung 30F: Kurzschluss | 0 |
| 0x804275 | ISV, Ansteuerleitung 30F: Leitungsunterbrechung | 0 |
| 0x804276 | ISV, Heckscheibenheizung: Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804277 | ISV, Heckscheibenheizung: Kurzschluss nach Masse oder Sicherung defekt | 0 |
| 0x804278 | ISV, Versorgungsspannung 15N_1: Kurzschluss | 0 |
| 0x804279 | ISV, Versorgungsspannung 15N_2 und 15N_9: Kurzschluss | 0 |
| 0x80427A | ISV, Versorgungsspannung 15N_3, 15N_5 und 15N_7: Kurzschluss | 0 |
| 0x80427B | ISV, Versorgungsspannung 15N_4 und 15N_6: Kurzschluss | 0 |
| 0x80427C | ISV, Versorgungsspannung 15N_8: Kurzschluss | 0 |
| 0x80427D | ISV, Versorgungsspannung 15N_10 und 15N_11: Kurzschluss | 0 |
| 0x80427E | ISV, Versorgungsspannung 15N_12: Kurzschluss | 0 |
| 0x804280 | Frontwischer, Wischer langsam: Kurzschluss nach Masse | 0 |
| 0x804281 | Frontwischer, Wischer langsam: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804282 | Frontwischer, Wischer schnell: Kurzschluss nach Masse | 0 |
| 0x804283 | Frontwischer, Wischer schnell: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804286 | Scheinwerferreinigungsanlage: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804287 | Waschwasserpumpe hinten: Kurzschluss nach Masse | 0 |
| 0x804288 | Waschwasserpumpe hinten: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804289 | Waschwasserpumpe, vorne: Kurzschluss nach Masse | 0 |
| 0x80428A | Waschwasserpumpe vorn: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80428B | Scheinwerferreinigungsanlage: Kurzschluss nach Masse | 0 |
| 0x80428D | FuSi Wischer deaktiviert per Codierung | 0 |
| 0x80428E | Frontwischer: Fehler Motorstromüberwachung oder Wischer schwergängig | 0 |
| 0x80428F | Frontwischer, Rückstellkontakt: Fehler | 0 |
| 0x804291 | Frontwischer: Notbetrieb | 0 |
| 0x804293 | Frontwischer: Blockiert | 1 |
| 0x804295 | Waschwasserpumpe vorne: Kurzschluss nach Plus | 0 |
| 0x804296 | Waschwasserpumpe hinten: Kurzschluss nach Plus | 0 |
| 0x8042A0 | Frontwischer (LIN): Codierung ungültig | 0 |
| 0x8042A1 | Frontwischer (LIN), Beifahrerseite: Hardwarefehler | 0 |
| 0x8042A2 | Frontwischer (LIN), Wischermotor Beifahrerseite: Überlast | 0 |
| 0x8042A3 | Frontwischer (LIN), car code: Nicht codiert | 0 |
| 0x8042A4 | Frontwischer (LIN), Fahrerseite: Hardwarefehler | 0 |
| 0x8042A5 | Frontwischer (LIN), Alive-Zähler: Fehler | 0 |
| 0x8042A6 | Frontwischer (LIN), Fahrerseite: Blockierung | 0 |
| 0x8042A7 | Frontwischer (LIN): Unterspannung | 1 |
| 0x8042A8 | Frontwischer (LIN), Wischermotor Fahrerseite: Überlast | 0 |
| 0x8042A9 | Frontwischer (LIN), Beifahrerseite: Blockierung | 0 |
| 0x8042AA | Frontwischer (LIN): Überspannung | 1 |
| 0x8042AC | Frontwischer (LIN): Kommunikationsfehler zwischen Motoren Fahrerseite und Beifahrerseite | 0 |
| 0x8042C0 | Innenbeleuchtung 1: Kurzschluss | 0 |
| 0x8042C1 | Innenbeleuchtung 2: Kurzschluss | 0 |
| 0x8042C2 | Innenbeleuchtung 3: Kurzschluss | 0 |
| 0x8042C3 | Innenbeleuchtung 4: Kurzschluss | 0 |
| 0x8042C4 | Optische Vorfeld und Türerkennung (OVT): Kurzschluss | 0 |
| 0x8042C5 | Innenbeleuchtung 0: Kurzschluss | 0 |
| 0x8042C6 | Innenbeleuchtung 6: Kurzschluss | 0 |
| 0x8042C7 | Innenbeleuchtung 7: Kurzschluss | 0 |
| 0x8042C8 | Innenbeleuchtung 1: Defekt | 0 |
| 0x8042C9 | Innenbeleuchtung 2: Defekt | 0 |
| 0x8042CA | Innenbeleuchtung 3: Defekt | 0 |
| 0x8042CB | Innenbeleuchtung 4: Defekt | 0 |
| 0x8042CC | Optische Vorfeld und Türerkennung (OVT): Defekt oder Leitungsunterbrechung | 0 |
| 0x8042CE | Innenlichteinheit 2 (ILE2) oder Innenlichteinheit 3 (ILE3) oder Innenlichteinheit 4 (ILE4): Taster hängt oder Kurzschluss nach Masse | 0 |
| 0x8042CF | Innenlichteinheit 1 (ILE1): Taster hängt oder Kurzschluss nach Masse | 0 |
| 0x8042D0 | Innenbeleuchtung Warnblinklicht: Kurzschluss | 0 |
| 0x8042D1 | Innenbeleuchtung Warnblinklicht: Defekt | 0 |
| 0x8042D2 | Innenbeleuchtung 8: Kurzschluss | 0 |
| 0x8042D7 | Innenlichteinheit 1 (ILE1), Leselicht links: Taster hängt | 0 |
| 0x8042D8 | Innenlichteinheit 1 (ILE1), Leselicht rechts: Taster hängt | 0 |
| 0x8042DC | Innenlichteinheit 1 (ILE1): Interner Fehler oder Leuchtmittel defekt | 0 |
| 0x8042E1 | Innenbeleuchtung 0: Defekt | 0 |
| 0x8042E2 | Innenbeleuchtung 6: Defekt | 0 |
| 0x8042E3 | Innenbeleuchtung 7: Defekt | 0 |
| 0x8042E4 | Innenbeleuchtung 8: Defekt | 0 |
| 0x8042E5 | Innenlichteinheit 2 (ILE2): Interner Fehler oder Leuchtmittel defekt | 0 |
| 0x8042E6 | Innenlichteinheit 2 (ILE2), Leselicht links: Taster hängt | 0 |
| 0x8042E7 | Innenlichteinheit 2 (ILE2), Leselicht rechts: Taster hängt | 0 |
| 0x8042E8 | Innenlichteinheit 3 (ILE3): Interner Fehler oder Leuchtmittel defekt | 0 |
| 0x8042E9 | Innenlichteinheit 3 (ILE3), Leselicht links: Taster hängt | 0 |
| 0x8042EA | Innenlichteinheit 3 (ILE3), Leselicht rechts: Taster hängt | 0 |
| 0x8042EC | Innenlichteinheit 4 (ILE4): Interner Fehler oder Leuchtmittel defekt | 0 |
| 0x8042ED | Innenlichteinheit 4 (ILE4), Leselicht links: Taster hängt | 0 |
| 0x8042EE | Innenlichteinheit 4 (ILE4), Leselicht rechts: Taster hängt | 0 |
| 0x8042F0 | Innenlichteinheit 5 (ILE5): Interner Fehler oder Leuchtmittel defekt | 0 |
| 0x8042F1 | Innenlichteinheit 5 (ILE5), Leselicht links: Taster hängt | 0 |
| 0x8042F2 | Innenlichteinheit 5 (ILE5), Leselicht rechts: Taster hängt | 0 |
| 0x804340 | Außenspiegel links oder rechts, Heizung: Kurzschluss nach Masse | 0 |
| 0x804341 | Außenspiegel links oder rechts, Heizung: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804342 | Waschdüsenheizung: Kurzschluss nach Masse | 0 |
| 0x804343 | Waschdüsenheizung: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80435E | Heizventil: Kurzschluss nach Masse | 0 |
| 0x80435F | Heizventil: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804363 | Drucksensor: Kurzschluss nach Masse | 0 |
| 0x804364 | Drucksensor: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804365 | Fondschichtungspotentiometer: Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x804366 | Fondschichtungspotentiometer: Kurzschluss nach Plus | 0 |
| 0x80436B | Zusatzwasserpumpe: Kurzschluss nach Masse | 0 |
| 0x80436C | Zusatzwasserpumpe: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x80436E | Magnetkupplung oder Umschaltventil: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80436F | Magnetkupplung oder Umschaltventil: Kurzschluss nach Masse | 0 |
| 0x804370 | Kompressorventil: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804371 | Kompressorventil: Kurzschluss nach Masse | 0 |
| 0x80439A | AUC-Sensor: Kurzschluss, Unterbrechung oder fehlerhaftes PWM-Signal | 0 |
| 0x804414 | Fond-Fernbedienung (FFB):Unterspannung Batterie | 0 |
| 0x804415 | ID-Geber (IDG): Unterspannung Batterie | 0 |
| 0x804417 | Bewegungssensor im Schlüssel: Defekt | 1 |
| 0x804424 | Bedieneinheit Licht (BEL) (LIN): Funktionsbeleuchtung BEL-Taster defekt | 0 |
| 0x804425 | Bedieneinheit Licht (BEL) (LIN): Unplausibel Kombination mit RLSBS | 0 |
| 0x804426 | Armauflagenheizung FA (LIN): Interner Steuergerätefehler | 0 |
| 0x804427 | Armauflagenheizung FAH (LIN): Interner Steuergerätefehler | 0 |
| 0x804428 | Bedieneinheit Licht (BEL) (LIN): Taster Fahrlicht automatisch hängt | 0 |
| 0x804429 | Bedieneinheit Licht (BEL) (LIN): Taster Fahrlicht manuell hängt | 0 |
| 0x80442A | Bedieneinheit Licht (BEL) (LIN): Defekt | 0 |
| 0x80442B | Bedieneinheit Licht (BEL) (LIN): Taster Parklicht oder Funktionstaste hängt | 0 |
| 0x80442C | Bedieneinheit Licht (BEL) (LIN): Taster Nebelscheinwerfer oder Nebelschlusslicht hängt | 0 |
| 0x80442D | Bedieneinheit Licht (BEL) (LIN): Taster Licht OFF hängt | 0 |
| 0x80442E | Bedieneinheit Licht (BEL) (LIN): Taster Standlicht hängt | 0 |
| 0x804430 | Touch Command Snap In Adapter: Fehler am CE-Gerätestecker | 0 |
| 0x804431 | Touch Command Snap In Adapter: Fehlstellung Schalter | 0 |
| 0x804432 | Touch Command Snap In Adapter: Mechanik blockiert | 0 |
| 0x804433 | Touch Command Snap In Adapter: Motor defekt | 0 |
| 0x804434 | Touch Command Snap In Adapter: SIA Fertigungsmodus aktiv | 1 |
| 0x804435 | Touch Command Snap In Adapter: SIA FeTraFla-Modus aktiv | 1 |
| 0x804436 | Touch Command Snap In Adapter: SIA Lademodus aktiv | 1 |
| 0x804437 | Touch Command Snap In Adapter: SIA Messemodus aktiv | 1 |
| 0x804443 | Innenspiegel, Blendsensor: Fehlerhaft | 0 |
| 0x804444 | Innenspiegel, Umlichtsensor: Fehlerhaft | 0 |
| 0x804445 | Innenspiegel, Kompass: Fehler in Kompass-Anzeige | 0 |
| 0x804446 | Innenspiegel, Kompass: Fehler in Sensor Magnetfeld | 0 |
| 0x804447 | Innenspiegel: Interner Fehler | 0 |
| 0x804448 | Innenspiegel, Elektrochrom: Kurzschluss nach Plus | 0 |
| 0x804449 | Innenspiegel, Elektrochrom: Kurzschluss nach Masse | 0 |
| 0x80444A | Innenspiegel, Elektrochrom: Interner Fehler | 0 |
| 0x80444B | Innenspiegel, ETC: Kurzschluss nach Plus | 0 |
| 0x80444C | Innenspiegel, ETC: Kurzschluss nach Masse | 0 |
| 0x80444D | Innenspiegel: Unterspannung | 1 |
| 0x80444E | Innenspiegel: Überspannung | 1 |
| 0x80446F | ThermoCupholder (THCH): Interner LIN-Fehler | 0 |
| 0x804470 | Bedieneinheit Schaltzentrum Tür (SZT) (LIN): Interner Elektronikfehler | 0 |
| 0x804471 | Bedieneinheit Schaltzentrum Tür (SZT) (LIN), Spiegel: Taster hängt | 0 |
| 0x804472 | Bedieneinheit Schaltzentrum Tür (SZT) (LIN), Fenster: Taster ungültig | 0 |
| 0x804473 | Bedieneinheit Schaltzentrum Tür (SZT) (LIN), Spiegel : Taster ungültig | 0 |
| 0x804474 | Bedieneinheit Schaltzentrum Tür (SZT) (LIN), Fenster: Taster hängt | 0 |
| 0x804475 | Bedieneinheit Schaltzentrum Tür (SZT) (LIN): HK-Wippe hängt | 0 |
| 0x804483 | RLS (LIN), Beschlagsensor: Fehler | 0 |
| 0x804484 | RLS (LIN), Regensensor: Hardwarefehler | 0 |
| 0x804485 | RLS (LIN), Solarsensorik: Hardwarefehler | 0 |
| 0x804486 | RLS (LIN), Lichtsensor: Hardwarefehler | 0 |
| 0x804487 | RLS (LIN), Regensensor: Nicht auf Scheibe eingemessen | 0 |
| 0x804488 | RLS (LIN), Lichtsensor: Scheibentyp nicht festgelegt | 0 |
| 0x804489 | RLS (LIN): Überspannung | 1 |
| 0x80448A | RLS (LIN): Übertemperatur | 1 |
| 0x80448B | Regenschließen RLS: Keine Deaktivierung im erwarteten Zeitfenster | 1 |
| 0x80448C | Regenschließen BDC: Keine Deaktivierung vom FZD im erwarteten Zeitfenster | 1 |
| 0x8044A3 | Hupe: Kurzschluss nach Masse | 0 |
| 0x8044A4 | Hupe: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8044B0 | Schaltpaddles: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x8044B1 | Schaltpaddles: Überlast oder Kurzschluss nach Masse | 0 |
| 0x8044B3 | Schaltpaddles: Dauerbetätigung | 1 |
| 0x8044B5 | Schaltpaddles: Mehrfachbetätigung | 1 |
| 0x8044B8 | Frontlicht-Steuergerät links, Blinkfunktion: Unplausibler Zustand | 0 |
| 0x8044B9 | Frontlicht-Steuergerät rechts, Blinkfunktion: Unplausibler Zustand | 0 |
| 0x8044BA | Frontlicht-Steuergerät links, Abblendlichtfunktion: Unplausibler Zustand | 0 |
| 0x8044BB | Frontlicht-Steuergerät rechts, Abblendlichtfunktion: Unplausibler Zustand | 0 |
| 0x8044BC | Innenlicht Layering FI-LIN-1, LIN-Slave 1: Fehlerhaft | 0 |
| 0x8044BD | Innenlicht Layering FI-LIN-1, LIN-Slave 2: Fehlerhaft | 0 |
| 0x8044BE | Innenlicht Layering FI-LIN-1, LIN-Slave 3: Fehlerhaft | 0 |
| 0x8044BF | Innenlicht Layering FI-LIN-1, LIN-Slave 4: Fehlerhaft | 0 |
| 0x8044C0 | Innenlicht Layering FI-LIN-1, LIN-Slave 5: Fehlerhaft | 0 |
| 0x8044C1 | Innenlicht Layering FI-LIN-1, LIN-Slave 6: Fehlerhaft | 0 |
| 0x8044C2 | Innenlicht Layering FI-LIN-1, LIN-Slave 7: Fehlerhaft | 0 |
| 0x8044C3 | Innenlicht Layering FI-LIN-1, LIN-Slave 8: Fehlerhaft | 0 |
| 0x8044C4 | Innenlicht Layering FI-LIN-1, LIN-Slave 9: Fehlerhaft | 0 |
| 0x8044C5 | Innenlicht Layering FI-LIN-1, LIN-Slave 10: Fehlerhaft | 0 |
| 0x8044C6 | Innenlicht Layering FI-LIN-1, LIN-Slave 11: Fehlerhaft | 0 |
| 0x8044C7 | Innenlicht Layering FI-LIN-1, LIN-Slave 12: Fehlerhaft | 0 |
| 0x8044C8 | Innenlicht Layering FI-LIN-1, LIN-Slave 13: Fehlerhaft | 0 |
| 0x8044C9 | Innenlicht Layering FI-LIN-1, LIN-Slave 14: Fehlerhaft | 0 |
| 0x8044CA | Innenlicht Layering FI-LIN-1, LIN-Slave 15: Fehlerhaft | 0 |
| 0x8044CB | Innenlicht Layering FI-LIN-1, LIN-Slave 16: Fehlerhaft | 0 |
| 0x8044CC | Innenlicht Layering FI-LIN-1, LIN-Slave 17: Fehlerhaft | 0 |
| 0x8044CD | Innenlicht Layering FI-LIN-1, LIN-Slave 18: Fehlerhaft | 0 |
| 0x8044CE | Innenlicht Layering FI-LIN-1, LIN-Slave 19: Fehlerhaft | 0 |
| 0x8044CF | Innenlicht Layering FI-LIN-1, LIN-Slave 20: Fehlerhaft | 0 |
| 0x8044D0 | Innenlicht Layering FI-LIN-1, LIN-Slave 21: Fehlerhaft | 0 |
| 0x8044D1 | Innenlicht Layering FI-LIN-1, LIN-Slave 22: Fehlerhaft | 0 |
| 0x8044D2 | Innenlicht Layering FI-LIN-1, LIN-Slave 23: Fehlerhaft | 0 |
| 0x8044D3 | Innenlicht Layering FI-LIN-1, LIN-Slave 24: Fehlerhaft | 0 |
| 0x8044D4 | Innenlicht Layering FI-LIN-1, LIN-Slave 25: Fehlerhaft | 0 |
| 0x8044D5 | Innenlicht Layering FI-LIN-1, LIN-Slave 26: Fehlerhaft | 0 |
| 0x8044D6 | Innenlicht Layering FI-LIN-1: Fehler bei Autoadressierung aufgetreten | 0 |
| 0x8044D7 | Innenlicht Layering FI-LIN-1: Anzahl Layering Slaves nicht korrekt | 0 |
| 0x8044E1 | Innenlicht Layering FI-LIN-2, LIN-Slave 1: Fehlerhaft | 0 |
| 0x8044E2 | Innenlicht Layering FI-LIN-2, LIN-Slave 2: Fehlerhaft | 0 |
| 0x8044E3 | Innenlicht Layering FI-LIN-2, LIN-Slave 3: Fehlerhaft | 0 |
| 0x8044E4 | Innenlicht Layering FI-LIN-2, LIN-Slave 4: Fehlerhaft | 0 |
| 0x8044E5 | Innenlicht Layering FI-LIN-2, LIN-Slave 5: Fehlerhaft | 0 |
| 0x8044E6 | Innenlicht Layering FI-LIN-2, LIN-Slave 6: Fehlerhaft | 0 |
| 0x8044E7 | Innenlicht Layering FI-LIN-2, LIN-Slave 7: Fehlerhaft | 0 |
| 0x8044E8 | Innenlicht Layering FI-LIN-2, LIN-Slave 8: Fehlerhaft | 0 |
| 0x8044E9 | Innenlicht Layering FI-LIN-2, LIN-Slave 9: Fehlerhaft | 0 |
| 0x8044EA | Innenlicht Layering FI-LIN-2, LIN-Slave 10: Fehlerhaft | 0 |
| 0x8044EB | Innenlicht Layering FI-LIN-2, LIN-Slave 11: Fehlerhaft | 0 |
| 0x8044EC | Innenlicht Layering FI-LIN-2, LIN-Slave 12: Fehlerhaft | 0 |
| 0x8044ED | Innenlicht Layering FI-LIN-2, LIN-Slave 13: Fehlerhaft | 0 |
| 0x8044EE | Innenlicht Layering FI-LIN-2, LIN-Slave 14: Fehlerhaft | 0 |
| 0x8044EF | Innenlicht Layering FI-LIN-2, LIN-Slave 15: Fehlerhaft | 0 |
| 0x8044F0 | Innenlicht Layering FI-LIN-2, LIN-Slave 16: Fehlerhaft | 0 |
| 0x8044F1 | Innenlicht Layering FI-LIN-2, LIN-Slave 17: Fehlerhaft | 0 |
| 0x8044F2 | Innenlicht Layering FI-LIN-2, LIN-Slave 18: Fehlerhaft | 0 |
| 0x8044F3 | Innenlicht Layering FI-LIN-2, LIN-Slave 19: Fehlerhaft | 0 |
| 0x8044F4 | Innenlicht Layering FI-LIN-2, LIN-Slave 20: Fehlerhaft | 0 |
| 0x8044F5 | Innenlicht Layering FI-LIN-2, LIN-Slave 21: Fehlerhaft | 0 |
| 0x8044F6 | Innenlicht Layering FI-LIN-2, LIN-Slave 22: Fehlerhaft | 0 |
| 0x8044F7 | Innenlicht Layering FI-LIN-2, LIN-Slave 23: Fehlerhaft | 0 |
| 0x8044F8 | Innenlicht Layering FI-LIN-2, LIN-Slave 24: Fehlerhaft | 0 |
| 0x8044F9 | Innenlicht Layering FI-LIN-2, LIN-Slave 25: Fehlerhaft | 0 |
| 0x8044FA | Innenlicht Layering FI-LIN-2, LIN-Slave 26: Fehlerhaft | 0 |
| 0x8044FB | Innenlicht Layering FI-LIN-2: Fehler bei Autoadressierung aufgetreten | 0 |
| 0x8044FC | Innenlicht Layering FI_LIN-2: Anzahl Layering Slaves nicht korrekt | 0 |
| 0x80482E | Falsche HW-Variante | 0 |
| 0x804843 | Heckklappensensor: Defekt | 0 |
| 0x804844 | Türkontakt Fahrertür hinten oben: Leitungsunterbrechung oder defekt | 0 |
| 0x804847 | Türkontakt Beifahrertür hinten oben: Leitungsunterbrechung oder defekt | 0 |
| 0x80484A | Taster Heckklappe Außen (TOEHKA): Dauerbetätigung | 0 |
| 0x80484B | Taster Heckscheibe (TOEHS), Frontklappe (TOEFKI) oder Untere Heckklappe (TOEHKU): Dauerbetätigung | 0 |
| 0x80484C | Vorrastkontakt (VRK) der Soft-Close-Automatik (SCA): Kurzschluss oder Leitungsunterbrechung oder Soft-Close-Automatik klemmt oder Heckklappenkontakt defekt | 0 |
| 0x80484D | Öffnen Heckklappe: Blockiert, wegen fehlendem Status des Anhänger-Anschluss-Geräts (AAG) | 1 |
| 0x804850 | FBD-Empfänger: Initialisierung fehlgeschlagen (Auto-Init) | 0 |
| 0x804855 | NFC-Reader außen TAGE FAT: HW-Defekt | 0 |
| 0x804856 | NFC-Reader innen vorne: HW-Defekt | 1 |
| 0x804860 | Bremsdruckabhängige Bremsleuchten-Leuchtstärke (BFD) links: Kurzschluss | 0 |
| 0x804861 | Bremsdruckabhängige Bremsleuchten-Leuchtstärke (BFD) rechts: Kurzschluss | 0 |
| 0x804862 | Bremslicht (BL) links: Kurzschluss | 0 |
| 0x804863 | Bremslicht (BL) mitte: Kurzschluss | 0 |
| 0x804864 | Bremslicht (BL) rechts: Kurzschluss | 0 |
| 0x804865 | Fahrtrichtungsanzeiger hinten (FRA) links: Kurzschluss | 0 |
| 0x804866 | Fahrtrichtungsanzeiger hinten (FRA) rechts: Kurzschluss | 0 |
| 0x804867 | Kennzeichenleuchte: Kurzschluss | 0 |
| 0x804868 | Nebelschlusslicht (NSL) links: Kurzschluss | 0 |
| 0x804869 | Nebelschlusslicht (NSL) rechts: Kurzschluss | 0 |
| 0x80486A | Rückfahrscheinwerfer (RFS) links: Kurzschluss | 0 |
| 0x80486B | Rückfahrscheinwerfer (RFS) rechts: Kurzschluss | 0 |
| 0x80486C | Schlusslicht (SL) links: Kurzschluss | 0 |
| 0x80486D | Schlusslicht Kofferraumdeckel (SL_2) links: Kurzschluss | 0 |
| 0x80486E | Schlusslicht (SL) rechts: Kurzschluss | 0 |
| 0x80486F | Schlusslicht Kofferraumdeckel (SL_2) rechts: Kurzschluss | 0 |
| 0x804870 | Bremsdruckabhängige Bremsleuchten-Leuchtstärke (BFD) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804871 | Bremsdruckabhängige Bremsleuchten-Leuchtstärke (BFD) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804872 | Bremslicht (BL) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804873 | Bremslicht  (BL)mitte: Defekt oder Leitungsunterbrechung | 0 |
| 0x804874 | Bremslicht (BL) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804876 | Fahrtrichtungsanzeiger hinten (FRA) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804877 | Fahrtrichtungsanzeiger hinten (FRA) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804878 | Kennzeichenleuchte: Defekt oder Leitungsunterbrechung | 0 |
| 0x80487F | Nebelschlusslicht (NSL) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804880 | Nebelschlusslicht (NSL) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804881 | Rückfahrscheinwerfer (RFS) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804882 | Rückfahrscheinwerfer (RFS) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804883 | Schlusslicht (SL) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804884 | Schlusslicht Kofferraumdeckel (SL_2) links: Defekt oder Leitungsunterbrechung | 0 |
| 0x804885 | Schlusslicht (SL) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804886 | Schlusslicht Kofferraumdeckel (SL_2) rechts: Defekt oder Leitungsunterbrechung | 0 |
| 0x804887 | Ausgang LC_R0: Defekt oder Leitungsunterbrechung | 0 |
| 0x804888 | Ausgang LC_R0: Kurzschluss | 0 |
| 0x804889 | Ausgang LC_R1: Defekt oder Leitungsunterbrechung | 0 |
| 0x804890 | Ausgang LC_R1: Kurzschluss | 0 |
| 0x804891 | Ausgang LC_R2: Defekt oder Leitungsunterbrechung | 0 |
| 0x804892 | Ausgang LC_R2: Kurzschluss | 0 |
| 0x804893 | Ausgang LC_R3: Defekt oder Leitungsunterbrechung | 0 |
| 0x804894 | Ausgang LC_R3: Kurzschluss | 0 |
| 0x8048A0 | Heckwischer: Kurzschluss nach Masse | 0 |
| 0x8048A1 | Heckwischer: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8048A3 | Heckwischer: Defekt oder blockiert | 0 |
| 0x8048A4 | Heckwischer 2: Kurzschluss nach Masse | 0 |
| 0x8048A5 | Heckwischer 2: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x8048A6 | Heckwischer 2: Defekt oder blockiert | 0 |
| 0x8048B0 | RSU: Fehler während Aktivierungs-/Installationsphase, Fahrzeugsperre | 1 |
| 0x8048D2 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): EEPROM Fehler | 0 |
| 0x8048D4 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Überlastung PWM | 0 |
| 0x8048D5 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Taster hängt | 0 |
| 0x8048DA | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): EEPROM Fehler | 0 |
| 0x8048DC | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Überlastung PWM | 0 |
| 0x8048DD | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Taster hängt | 0 |
| 0x8048E0 | Sitzheizung BFH (LIN), Heizmatte Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048E2 | Sitzheizung BFH (LIN), Heizmatte Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048E4 | Sitzheizung BFH (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x8048E5 | Sitzheizung BFH (LIN), Temperatursensor Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048E7 | Sitzheizung BFH (LIN), Temperatursensor Kissen: Unplausibles Signal | 0 |
| 0x8048E8 | Sitzheizung BFH (LIN), Temperatursensor Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048EA | Sitzheizung BFH (LIN), Temperatursensor Lehne: Unplausibles Signal | 0 |
| 0x8048EB | Sitzheizung BFH (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x8048ED | Sitzheizung BFH  (LIN): Interner Steuergerätefehler | 0 |
| 0x8048EE | Sitzheizung BFH (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x8048F0 | Sitzheizung FAH (LIN), Heizmatte Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048F2 | Sitzheizung FAH (LIN), Heizmatte Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048F4 | Sitzheizung FAH (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x8048F5 | Sitzheizung FAH (LIN), Temperatursensor Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048F7 | Sitzheizung FAH (LIN), Temperatursensor Kissen: Unplausibles Signal | 0 |
| 0x8048F8 | Sitzheizung FAH (LIN), Temperatursensor Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x8048FA | Sitzheizung FAH (LIN), Temperatursensor Lehne: Unplausibles Signal | 0 |
| 0x8048FB | Sitzheizung FAH (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x8048FD | Sitzheizung FAH  (LIN): Interner Steuergerätefehler | 0 |
| 0x8048FE | Sitzheizung FAH (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804900 | Sitzheizung BF (LIN), Heizmatte Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804902 | Sitzheizung BF (LIN), Heizmatte Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804904 | Sitzheizung BF (LIN), Leiterplatte: Temperatur zu hoch | 1 |
| 0x804905 | Sitzheizung BF (LIN), Temperatursensor Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804907 | Sitzheizung BF (LIN), Temperatursensor Kissen: Unplausibles Signal | 0 |
| 0x804908 | Sitzheizung BF (LIN), Temperatursensor Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x80490A | Sitzheizung BF (LIN), Temperatursensor Lehne: Unplausibles Signal | 0 |
| 0x80490B | Sitzheizung BF (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x80490D | Sitzheizung BF  (LIN): Interner Steuergerätefehler | 0 |
| 0x80490E | Sitzheizung BF (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804910 | Sitzheizung FA (LIN), Heizmatte Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804912 | Sitzheizung FA (LIN), Heizmatte Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804914 | Sitzheizung FA (LIN), Leiterplatte Temperatur: Temperatur zu hoch | 1 |
| 0x804915 | Sitzheizung FA (LIN), Temperatursensor Kissen: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804917 | Sitzheizung FA (LIN), Temperatursensor Kissen: Unplausibles Signal | 0 |
| 0x804918 | Sitzheizung FA (LIN), Temperatursensor Lehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x80491A | Sitzheizung FA (LIN), Temperatursensor Lehne unplausibles Signal | 0 |
| 0x80491B | Sitzheizung FA (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x80491D | Sitzheizung FA  (LIN): Interner Steuergerätefehler | 0 |
| 0x80491E | Sitzheizung FA (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804920 | Sensorversorgung: Kurzschluss nach Masse | 0 |
| 0x804921 | Sensorversorgung: Kurzschluss nach Plus | 0 |
| 0x804943 | Sonnenrollo Heck: Leitungsunterbrechung | 0 |
| 0x804947 | Sonnenrollo Heck, Leitung öffnen: Kurzschluss nach Masse | 0 |
| 0x804948 | Sonnenrollo Heck, Leitung schließen: Kurzschluss nach Masse | 0 |
| 0x804949 | Sonnenrollo Heck, Leitung öffnen: Überlast | 0 |
| 0x80494A | Sonnenrollo Heck, Leitung schließen: Überlast | 0 |
| 0x80494B | Sonnenrollo Heck, Leitung öffnen: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x80494C | Sonnenrollo Heck, Leitung schließen: Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x804950 | Tanksensor links: Kurzschluss nach Masse | 0 |
| 0x804951 | Tanksensor links: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804953 | Tanksensor rechts: Kurzschluss nach Masse | 0 |
| 0x804954 | Tanksensor rechts: Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x804956 | Tanksensor links: Ausserhalb zulässigen Bereichs unten | 0 |
| 0x804957 | Tanksensor links: Ausserhalb zulässigen Bereichs oben | 0 |
| 0x804958 | Tanksensor rechts: Ausserhalb zulässigen Bereichs unten | 0 |
| 0x804959 | Tanksensor rechts: Ausserhalb zulässigen Bereichs oben | 0 |
| 0x804961 | Cargo-SG: Interner Hardware-Fehler | 0 |
| 0x804962 | Cargo-SG: Fehler Aktuator Links | 0 |
| 0x804963 | Cargo-SG: Fehler Aktuator Rechts | 0 |
| 0x804990 | Verriegelung 2. Sitzreihe linke Seite, EasyEntry-Schalter: Zustand Verriegelung nicht plausibel | 0 |
| 0x804991 | Verriegelung 2. Sitzreihe rechte Seite, EasyEntry-Schalter: Zustand Verriegelung nicht plausibel | 0 |
| 0x8049A0 | Schalterblock Sitz Extensions FA: Interner Fehler | 0 |
| 0x8049A1 | Schalterblock Sitz Extensions FA: Taster hängt | 0 |
| 0x8049A2 | Schalterblock Sitz Extensions FAH: Interner Fehler | 0 |
| 0x8049A3 | Schalterblock Sitz Extensions FAH: Taster hängt | 0 |
| 0x8049A4 | Schalterblock Sitz Extensions BF: Interner Fehler | 0 |
| 0x8049A5 | Schalterblock Sitz Extensions BF: Taster hängt | 0 |
| 0x8049A6 | Schalterblock Sitz Extensions BFH: Interner Fehler | 0 |
| 0x8049A7 | Schalterblock Sitz Extensions BFH: Taster hängt | 0 |
| 0x8049B0 | Sonnenrollo FA hinten (LIN): Interner Elektronikfehler | 0 |
| 0x8049B1 | Sonnenrollo FA hinten (LIN): Kurzschluss | 0 |
| 0x8049B2 | Sonnenrollo FA hinten (LIN): Leitungsunterbrechung | 0 |
| 0x8049B3 | Sonnenrollo FA hinten (LIN): Schalter hängt | 0 |
| 0x8049B4 | Sonnenrollo BF hinten (LIN): Interner Elektronikfehler | 0 |
| 0x8049B5 | Sonnenrollo BF hinten (LIN): Kurzschluss | 0 |
| 0x8049B6 | Sonnenrollo BF hinten (LIN): Leitungsunterbrechung | 0 |
| 0x8049B7 | Sonnenrollo BF hinten (LIN): Schalter hängt | 0 |
| 0x804A00 | Armauflagenheizung BF (LIN), Heizfeld Beifahrertür: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A01 | Armauflagenheizung BF (LIN), Heizfeld Mittelarmlehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A02 | Armauflagenheizung BF (LIN), Temperatursensor Beifahrertür: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A03 | Armauflagenheizung BF (LIN), Temperatursensor Beifahrertür: Unplausibles Signal | 0 |
| 0x804A04 | Armauflagenheizung BF (LIN), Temperatursensor Mittelarmlehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A05 | Armauflagenheizung BF (LIN), Temperatursensor Mittelarmlehne: Unplausibles Signal | 0 |
| 0x804A06 | Armauflagenheizung BF (LIN): Interner Steuergerätefehler | 0 |
| 0x804A07 | Armauflagenheizung BF (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804A08 | Armauflagenheizung BF (LIN), Leiterplatte: Temperatur zu hoch | 1 |
| 0x804A09 | Armauflagenheizung BF (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x804A0A | Armauflagenheizung BFH (LIN), Heizfeld Mittelarmlehne Fond: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A0B | Armauflagenheizung BFH (LIN), Heizfeld Tür Beifahrerseite hinten: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A0C | Armauflagenheizung BFH (LIN), Temperatursensor Mittelarmlehne Fond: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A0D | Armauflagenheizung BFH (LIN), Temperatursensor Mittelarmlehne Fond: Unplausibles Signal | 0 |
| 0x804A0E | Armauflagenheizung BFH (LIN), Temperatursensor Tür Beifahrerseite hinten: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A0F | Armauflagenheizung BFH (LIN), Temperatursensor Tür Beifahrerseite hinten: Unplausibles Signal | 0 |
| 0x804A10 | Armauflagenheizung BFH (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804A11 | Armauflagenheizung BFH (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x804A12 | Armauflagenheizung FA (LIN), Heizfeld Fahrertür: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A13 | Armauflagenheizung FA (LIN), Heizfeld Mittelarmlehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A14 | Armauflagenheizung FA (LIN), Temperatursensor Fahrertür: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A15 | Armauflagenheizung FA (LIN), Temperatursensor Fahrertür: Unplausibles Signal | 0 |
| 0x804A16 | Armauflagenheizung FA (LIN), Temperatursensor Mittelarmlehne: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A17 | Armauflagenheizung FA (LIN), Temperatursensor Mittelarmlehne: Unplausibles Signal | 0 |
| 0x804A18 | Armauflagenheizung FA (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804A19 | Armauflagenheizung BFH (LIN): Temperatur der Leiterplatte zu hoch | 1 |
| 0x804A1A | Armauflagenheizung FA (LIN): Temperatur der Leiterplatte zu hoch | 1 |
| 0x804A1B | Armauflagenheizung FA (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x804A1C | Armauflagenheizung FAH (LIN), Heizfeld Mittelarmlehne Fond: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A1D | Armauflagenheizung FAH (LIN), Heizfeld Tür Fahrerseite hinten: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A1E | Armauflagenheizung FAH (LIN), Temperatursensor Mittelarmlehne Fond: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A1F | Armauflagenheizung FAH (LIN), Temperatursensor Mittelarmlehne Fond: Unplausibles Signal | 0 |
| 0x804A20 | Armauflagenheizung FAH (LIN), Temperatursensor Tür Fahrerseite hinten: Leitungsunterbrechung oder Kurzschluss | 0 |
| 0x804A21 | Armauflagenheizung FAH (LIN), Temperatursensor Tür Fahrerseite hinten: Unplausibles Signal | 0 |
| 0x804A22 | Armauflagenheizung FAH (LIN): Kurzschluss nach Plus oder Relais klebt | 0 |
| 0x804A23 | Armauflagenheizung FAH (LIN): Versorgungsspannung außerhalb des gültigen Bereiches | 1 |
| 0x804A24 | Armauflagenheizung FAH (LIN): Temperatur der Leiterplatte zu hoch | 1 |
| 0x804A25 | Armauflagenheizung BFH (LIN): Interner Steuergerätefehler | 0 |
| 0x804A79 | Antennenleitung Antennenverstärker - WCA: Leitungsfehler | 0 |
| 0x804A7B | WCA: HW-Fehler | 0 |
| 0x804A7C | WCA: Falschverbau | 0 |
| 0x804A7D | Antennenverstärker: Fehler Spannungsversorgung | 0 |
| 0x804A7E | Antennenleitung Antennenverstärker - Dachantenne: Leitungsfehler | 0 |
| 0x804A7F | Antennenverstärker: HW-Fehler | 0 |
| 0xD9040A | FA-CAN Control Module Bus OFF | 0 |
| 0xD9050A | ZSG-CAN Control Module Bus OFF | 0 |
| 0xD90BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xD90C00 | LIN Master A: Kurzschluss | 0 |
| 0xD90C01 | LIN Master A: Keine Kommunikation | 0 |
| 0xD90C02 | LIN Master A: Kommunikation gestört | 0 |
| 0xD90C03 | LIN Master B: Kurzschluss | 0 |
| 0xD90C04 | LIN Master B: Keine Kommunikation | 0 |
| 0xD90C05 | LIN Master B: Kommunikation gestört | 0 |
| 0xD90C06 | LIN Master C: Kurzschluss | 0 |
| 0xD90C07 | LIN Master C: Keine Kommunikation | 0 |
| 0xD90C08 | LIN Master C: Kommunikation gestört | 0 |
| 0xD90C09 | LIN Master D: Kurzschluss | 0 |
| 0xD90C0A | LIN Master D: Keine Kommunikation | 0 |
| 0xD90C0B | LIN Master D: Kommunikation gestört | 0 |
| 0xD90C0C | LIN Master E: Kurzschluss | 0 |
| 0xD90C0D | LIN Master E: Keine Kommunikation | 0 |
| 0xD90C0E | LIN Master E: Kommunikation gestört | 0 |
| 0xD90C0F | LIN Master F: Kurzschluss | 0 |
| 0xD90C10 | LIN Master F: Keine Kommunikation | 0 |
| 0xD90C11 | LIN Master F: Kommunikation gestört | 0 |
| 0xD90C12 | LIN Master G: Kurzschluss | 0 |
| 0xD90C13 | LIN Master G: Keine Kommunikation | 0 |
| 0xD90C14 | LIN Master G: Kommunikation gestört | 0 |
| 0xD90C15 | LIN Master H: Kurzschluss | 0 |
| 0xD90C16 | LIN Master H: Keine Kommunikation | 0 |
| 0xD90C17 | LIN Master H: Kommunikation gestört | 0 |
| 0xD90C18 | LIN Master I: Kurzschluss | 0 |
| 0xD90C19 | LIN Master I: Keine Kommunikation | 0 |
| 0xD90C1A | LIN Master I: Kommunikation gestört | 0 |
| 0xD90C1B | LIN Master J: Kurzschluss | 0 |
| 0xD90C1C | LIN Master J: Keine Kommunikation | 0 |
| 0xD90C1D | LIN Master J: Kommunikation gestört | 0 |
| 0xD90C1E | LIN Master K: Kurzschluss | 0 |
| 0xD90C1F | LIN Master K: Keine Kommunikation | 0 |
| 0xD90C20 | LIN Master K: Kommunikation gestört | 0 |
| 0xD90C21 | Armauflagenheizung BF (LIN): Fehlender LIN-Slave | 0 |
| 0xD90C22 | LIN Master L: Keine Kommunikation | 0 |
| 0xD90C23 | Armauflagenheizung BFH (LIN): Fehlender LIN-Slave | 0 |
| 0xD90C24 | LIN Master M: Kurzschluss | 0 |
| 0xD90C25 | Armauflagenheizung FA (LIN): Fehlender LIN-Slave | 0 |
| 0xD90C26 | LIN Master M: Kommunikation gestört | 0 |
| 0xD90C27 | Armauflagenheizung FAH (LIN): Fehlender LIN-Slave | 0 |
| 0xD90C28 | LIN Master N: Keine Kommunikation | 0 |
| 0xD90C29 | LIN Master N: Kommunikation gestört | 0 |
| 0xD90C2A | LIN Master L: Kurzschluss | 0 |
| 0xD90C2B | LIN Master L: Kommunikation gestört | 0 |
| 0xD90C2C | LIN Master M: Keine Kommunikation | 0 |
| 0xD90C2D | LIN Master N: Kurzschluss | 0 |
| 0xD90C2E | LIN Master O: Kurzschluss | 0 |
| 0xD90C2F | LIN Master O: Keine Kommunikation | 0 |
| 0xD90C30 | LIN Master O: Kommunikation gestört | 0 |
| 0xD90D06 | Bedieneinheit Schaltzentrum Tür (SZT) (LIN): Falsche Variante verbaut | 0 |
| 0xD90D07 | Bedieneinheit Schaltzentrum Tür (SZT) (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D0A | Außenspiegel links (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D0B | Außenspiegel links (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D0D | Außenspiegel rechts (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D0F | Außenspiegel rechts (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D11 | SMO: Fehlender LIN-Slave | 0 |
| 0xD90D12 | SMO: Unerwarteter LIN-Slave | 0 |
| 0xD90D16 | Bedieneinheit Licht (BEL) (LIN): Falsche Variante verbaut | 0 |
| 0xD90D17 | Bedieneinheit Licht (BEL) (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D1A | Bedieneinheit Fahrerassistenzsysteme (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D1B | Bedieneinheit Fahrerassistenzsysteme (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D1C | Touch Command Snap In Adapter: Fehlender LIN-Slave | 0 |
| 0xD90D1D | Touch Command Snap In Adapter: Unerwarteter LIN-Slave | 0 |
| 0xD90D20 | Frontwischer (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D21 | Frontwischer (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D25 | Innenspiegel: Falsche Variante verbaut | 0 |
| 0xD90D26 | Innenspiegel: Fehlender LIN-Slave | 0 |
| 0xD90D27 | Innenspiegel: Unerwarteter LIN-Slave | 0 |
| 0xD90D28 | RLS (LIN): Falsche Variante verbaut | 0 |
| 0xD90D29 | RLS (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D2A | RLS (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D2C | UGDO: Fehlender LIN-Slave | 0 |
| 0xD90D2D | UGDO: Unerwarteter LIN-Slave | 0 |
| 0xD90D37 | Innenlichteinheit 1 (ILE1): Falsche Variante verbaut | 0 |
| 0xD90D38 | Innenlichteinheit 1 (ILE1): Fehlender LIN-Slave | 0 |
| 0xD90D39 | Innenlichteinheit 1 (ILE1): Unerwarteter LIN-Slave | 0 |
| 0xD90D3B | Sitzheizung FA (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D3C | Sitzheizung FA (LIN) oder Armauflagenheizung FA (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D3E | Sitzheizung BF (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D3F | Sitzheizung BF (LIN) oder Armauflagenheizung BF (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D41 | Sitzheizung FAH (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D42 | Sitzheizung FAH (LIN) oder Armauflagenheizung FAH (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D44 | Sitzheizung BFH (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D45 | Sitzheizung BFH (LIN) oder Armauflagenheizung BFH (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D47 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D48 | Sitzheizung Schalter Mittelkonsole hinten links (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D4A | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D4B | Sitzheizung Schalter Mittelkonsole hinten rechts (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D4F | Remote Software Update (RSU) : Alive-Nachricht Timeout | 1 |
| 0xD90D50 | NFC-Reader innen vorne: Fehlender CAN-Teilnehmer | 0 |
| 0xD90D51 | WCA: Fehlende WCA | 0 |
| 0xD90D52 | NFC-Reader außen TAGE FAT: Fehlender LIN-Slave | 0 |
| 0xD90D53 | NFC-Reader außen TAGE FAT: Unerwarteter LIN-Slave | 0 |
| 0xD90D54 | NFC-Reader innen vorne: Unerwarteter CAN-Teilnehmer | 1 |
| 0xD90D59 | Bedieneinheit Audio: Unerwarteter LIN-Slave | 0 |
| 0xD90D5A | ThermoCupholder (THCH): Fehlender LIN-Slave | 0 |
| 0xD90D5B | ThermoCupholder (THCH): Unerwarteter LIN-Slave | 0 |
| 0xD90D60 | Bedieneinheit Audio: Fehlender LIN-Slave | 0 |
| 0xD90D61 | Bedieneinheit Audio: Falsche Variante verbaut | 0 |
| 0xD90D62 | Bedieneinheit Audio: Taster hängt | 0 |
| 0xD90D63 | Innenlichteinheit 3 (ILE3):  Falsche Variante verbaut | 0 |
| 0xD90D64 | Innenlichteinheit 3 (ILE3): Fehlender LIN-Slave | 0 |
| 0xD90D65 | Innenlichteinheit 3 (ILE3): Unerwarteter LIN-Slave | 0 |
| 0xD90D66 | Innenlichteinheit 2 (ILE2): Falsche Variante verbaut | 0 |
| 0xD90D67 | Innenlichteinheit 2 (ILE2): Fehlender LIN-Slave | 0 |
| 0xD90D68 | Innenlichteinheit 2 (ILE2): Unerwarteter LIN-Slave | 0 |
| 0xD90D69 | Stromverteiler LIN-Modul (ISV): Falsche Variante verbaut | 1 |
| 0xD90D6A | Innenlichteinheit 4 (ILE4):  Falsche Variante verbaut | 0 |
| 0xD90D6B | Innenlichteinheit 4 (ILE4): Fehlender LIN-Slave | 0 |
| 0xD90D6C | Innenlichteinheit 4 (ILE4): Unerwarteter LIN-Slave | 0 |
| 0xD90D6D | Innenlichteinheit 5 (ILE5):  Falsche Variante verbaut | 0 |
| 0xD90D6E | Innenlichteinheit 5 (ILE5): Fehlender LIN-Slave | 0 |
| 0xD90D6F | Innenlichteinheit 5 (ILE5): Unerwarteter LIN-Slave | 0 |
| 0xD90D70 | Schalterblock Sitz Extensions FA: Falsche Variante verbaut | 0 |
| 0xD90D71 | Schalterblock Sitz Extensions FA: Fehlender LIN-Slave | 0 |
| 0xD90D72 | Schalterblock Sitz Extensions FA: Unerwarteter LIN-Slave | 0 |
| 0xD90D73 | Schalterblock Sitz Extensions FAH: Falsche Variante verbaut | 0 |
| 0xD90D74 | Schalterblock Sitz Extensions FAH: Fehlender LIN-Slave | 0 |
| 0xD90D75 | Schalterblock Sitz Extensions FAH: Unerwarteter LIN-Slave | 0 |
| 0xD90D76 | Schalterblock Sitz Extensions BF: Falsche Variante verbaut | 0 |
| 0xD90D77 | Schalterblock Sitz Extensions BF: Fehlender LIN-Slave | 0 |
| 0xD90D78 | Schalterblock Sitz Extensions BF: Unerwarteter LIN-Slave | 0 |
| 0xD90D79 | Schalterblock Sitz Extensions BFH: Falsche Variante verbaut | 0 |
| 0xD90D7A | Schalterblock Sitz Extensions BFH: Fehlender LIN-Slave | 0 |
| 0xD90D7B | Schalterblock Sitz Extensions BFH: Unerwarteter LIN-Slave | 0 |
| 0xD90D81 | Sonnenrollo FA hinten (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D82 | Sonnenrollo FA hinten (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D84 | Sonnenrollo BF hinten (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D85 | Sonnenrollo BF hinten (LIN): Unerwarteter LIN-Slave | 0 |
| 0xD90D8A | Cargo-SG: Unerwarteter LIN-Slave | 0 |
| 0xD90D8B | Cargo-SG: Fehlender LIN-Slave | 0 |
| 0xD90D90 | Bedieneinheit Mittelkonsole (LIN): Fehlender LIN-Slave | 0 |
| 0xD90D91 | Bedieneinheit Mittelkonsole (LIN): Unerwarteter LIN-slave | 0 |
| 0xD90D96 | Stromverteiler LIN-Modul (ISV): Fehlender LIN-Slave | 1 |
| 0xD91495 | CAN-Botschaft, Objektdaten Blendfreier Fernlicht-Assistent (OBJDT_NGL_MAB_ASST): Timeout | 1 |
| 0xD914A5 | CAN-Botschaft, Drehmoment Kurbelwelle 1 (TORQ_CRSH_1): Timeout | 1 |
| 0xD91573 | CAN-Botschaft, Status Stabilisierung DSC (ST_STAB_DSC): Timeout | 1 |
| 0xD91599 | CAN-Botschaft, Längsbeschleunigung Schwerpunkt (ACLNX_MASSCNTR): Timeout | 1 |
| 0xD9159F | CAN-Botschaft, Giergeschwindigkeit Fahrzeug (VYAW_VEH): Timeout | 1 |
| 0xD915A1 | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): Timeout | 1 |
| 0xD915B9 | CAN-Botschaft, Wärmemanagement Motorsteuerung (HT_MGT_ENG_CTR): Timeout | 1 |
| 0xD915C0 | CAN-Botschaft, Status Anzeige Fahrerassistenzsystem (ST_DISP_DRASY): Timeout | 1 |
| 0xD9161E | CAN-Botschaft, Status Night-Vision  (STAT_NIVI): Timeout | 1 |
| 0xD91681 | CAN-Botschaft, Bordnetz Spannungswert (BN_UVL): Timeout | 1 |
| 0xD91692 | CAN-Botschaft, Steuerung Fernlicht-Assistent (CTR_MAB_ASST): Timeout | 1 |
| 0xD91697 | CAN-Botschaft, Status Gurt Kontakt Sitzbelegung (ST_BLT_CT_SOCCU): Timeout | 1 |
| 0xD916C3 | CAN-Botschaft, Status Notruf (ST_ECAL): Timeout | 1 |
| 0xD916CA | CAN-Botschaft, Außentemperatur (A_TEMP): Timeout | 1 |
| 0xD916E4 | CAN-Botschaft, Status Anhänger (STAT_ANHAENGER): Timeout | 1 |
| 0xD916F8 | CAN-Botschaft, Uhrzeit-Datum (UHRZEIT_DATUM): Timeout | 1 |
| 0xD91701 | CAN-Botschaft, Ist Lenkwinkel Fahrer (AVL_STEA_DV): Timeout | 1 |
| 0xD91702 | CAN-Botschaft, Lenkwinkel Vorderachse Effektiv (STEA_FTAX_EFFV): Timeout | 1 |
| 0xD9170B | CAN-Botschaft, Status Motor Start Auto (STAT_ENG_STA_AUTO): Timeout | 1 |
| 0xD9171C | CAN-Botschaft, Anzeige Fahrerassistenzsystem (DISP_DRASY): Timeout | 1 |
| 0xD91728 | CAN-Botschaft, Relativzeit (RELATIVZEIT): Timeout | 1 |
| 0xD91730 | CAN-Botschaft, Kilometerstand-Reichweite (KILOMETERSTAND): Timeout | 1 |
| 0xD91742 | CAN-Botschaft, Status Cabrio Dach (ST_CABRF): Timeout oder CRC-Fehler | 1 |
| 0xD91793 | CAN-Botschaft, LCD Helligkeit Regelung (LCD_BRIG_CLCTR): Timeout | 1 |
| 0xD917A0 | CAN-Botschaft, Fahrzeugzustand (FZZSTD): Timeout | 1 |
| 0xD917B3 | CAN-Botschaft, Powermanagement Verbrauchersteuerung (POWERMGMT_CTR_COS): Timeout | 1 |
| 0xD917F9 | CAN-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): Timeout | 1 |
| 0xD91837 | CAN-Botschaft, Status Kamera Kalibrierung (ST_CAM_CAL): Timeout | 1 |
| 0xD91C83 | CAN-Botschaft, Höhenstand Fahrzeug 1 (HGLV_VEH_1): Timeout | 1 |
| 0xD91C93 | CAN-Botschaft, IPC Gateway (IPC_GW): Timeout | 1 |
| 0xD91CCD | CAN-Botschaft, Kamera Frontraumueberwachung 2 (CAM_HDWOBS_2): Timeout | 1 |
| 0xD91D3D | CAN-Botschaft, Radar Frontraumueberwachung 1 (RADA_HDWOBS_1): Timeout | 1 |
| 0xD91D4C | CAN-Botschaft, Anforderung Blinker FAS (RQ_DI_DRS): Timeout | 1 |
| 0xD91D98 | CAN-Botschaft, Kamera Frontraumueberwachung (CAM_HDWOBS): Timeout | 1 |
| 0xD91D9E | CAN-Botschaft, Steuerung Vibration Lenkrad Anzeige Aussenspiegel 2015 (CTR_VIB_STW_DISP_EXMI_SP2015): Timeout | 1 |
| 0xD91DE0 | CAN-Botschaft, Status Licht Außen Frontelektronik_1 Links (ST_LP_EX_FE_1_LH): Timeout | 1 |
| 0xD91DE6 | CAN-Botschaft, Status Licht Außen Frontelektronik_1 Rechts (ST_LP_EX_FE_1_RH): Timeout | 1 |
| 0xD91DFB | CAN-Botschaft, Status Licht Außen Frontelektronik_2 Links (ST_LP_EX_FE_2_LH): Timeout | 1 |
| 0xD91DFC | CAN-Botschaft, Soll Anzeige Vibration Warnung Fahrspurwechsel (TAR_DISP_VIB_WARN_LNCH): Timeout | 1 |
| 0xD91DFD | CAN-Botschaft, Status Licht Außen Frontelektronik_2 Rechts (ST_LP_EX_FE_2_RH): Timeout | 1 |
| 0xD91E14 | CAN-Botschaft, Status Licht Außen Heck_1 Links (ST_LP_EX_REAR_1_LH): Timeout | 1 |
| 0xD91E16 | CAN-Botschaft, Status Licht Außen Heck_1 Rechts (ST_LP_EX_REAR_1_RH): Timeout | 1 |
| 0xD91E2A | CAN-Botschaft, Status BFS (STAT_BFS): Timeout | 1 |
| 0xD91E31 | CAN-Botschaft, Status Gentleman FAS (STAT_GENT_FAS): Timeout | 1 |
| 0xD91E32 | CAN-Botschaft, Status FAS (STAT_FAS): Timeout | 1 |
| 0xD91E3F | CAN-Botschaft, Soll Haptik Warnung Fahrspurverlassen (TAR_FEEL_WARN_LNDP): Timeout | 1 |
| 0xD91E40 | CAN-Botschaft, Soll Haptik Warnung Querführungsassistenz (TAR_FEEL_WARN_LGA): Timeout | 1 |
| 0xD91E42 | CAN-Botschaft, Status Klima Front (STAT_KLIMA_FRONT): Timeout | 1 |
| 0xD91E46 | CAN-Botschaft, Status Klima Front Bedienteil (STAT_KLIMA_BEDIENTEIL): Timeout | 1 |
| 0xD91EBF | CAN-Botschaft, Steuerung Wasserventile (CTR_HVEH): Timeout | 1 |
| 0xD91EDA | CAN-Botschaft, Status Heckklappenlift (STAT_HKL): Timeout | 1 |
| 0xD91EF0 | CAN-Botschaft, Status Klima Standfunktionen (STAT_KLIMA_STAND): Timeout | 1 |
| 0xD91F0B | Flexray-Botschaft, Status Motor Start Auto (STAT_ENG_STA_AUTO): Timeout | 1 |
| 0xD91F44 | CAN-Botschaft, Steuerung Cabrio Dach (CTR_CABRF): Timeout | 1 |
| 0xD91F69 | CAN-Botschaft, Status Reifen (ST_TYR): Timeout | 1 |
| 0xD91FF9 | Flexray-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): Timeout | 1 |
| 0xD9201E | CAN-Botschaft, Status Powermanagement Gateway (ST_PWMG_GW): Timeout | 1 |
| 0xD94001 | CAN-Botschaft, Daten Antriebsstrang 2 (DT_PT_2): CRC-Fehler oder Alive | 1 |
| 0xD94002 | CAN-Botschaft, Drehmoment Kurbelwelle 1 (TORQ_CRSH_1): CRC-Fehler oder Alive | 1 |
| 0xD94004 | CAN-Botschaft, Anforderung Blinker FAS (RQ_DI_DRS): CRC-Fehler oder Alive | 1 |
| 0xD94006 | CAN-Botschaft, Status Motor Start Auto (STAT_ENG_STA_AUTO): CRC-Fehler oder Alive | 1 |
| 0xD94007 | CAN-Botschaft, Status Stabilisierung DSC (ST_STAB_DSC): CRC-Fehler oder Alive | 1 |
| 0xD94013 | CAN-Botschaft, Steuerung CAS Sicherheitsfahrzeug (CTR_CAS_SFYC): CRC-Fehler oder Alive | 1 |
| 0xD94015 | CAN-Botschaft, Geschwindigkeit Fahrzeug (V_VEH): CRC-Fehler oder Alive | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUSI_KLEMMEN_DEAKTIVIERUNGS_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x01 | PWF Fahren |
| 0x02 | PWF Fahrbereitschaft beenden |
| 0x03 | PWF Unbekannt und Geschwindihkeit |
| 0x04 | PWF Unbekannt und Geschwindihkeit Unbekannt |
| 0x05 | PWF Unbekannt und Geschwindihkeit nicht empfangen |
| 0x06 | PWF Unbekannt und Geschwindihkeit CRC Alive Fehler |
| 0x07 | StatusKlemme groessergleich KL30F |
| 0x08 | StatusKlemme groessergleich KL30B |
| 0x09 | StatusKlemme groessergleich KL15 |
| 0x0A | Interner Integritätsfehler |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4001 | ART DER ABSCHALTUNG BZW NICHTABSCHALTUNG KL30F | 0-n | High | 0xFF | TAB_CAS_ART_ABSCHALTUNG_KL30F | - | - | - |
| 0x4002 | BATTERIESPANNUNGSPANNUNG ENDE BEI FEHLERSPEICHEREINTRAG | mV | High | unsigned int | - | 15.0 | 1.0 | 0.0 |
| 0x4004 | PWF_ZUSTAND | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4005 | GRUND_ABSCHALTUNG_KL30F | 0-n | High | 0xFF | TAB_UW_GRUND_ABSCHALTUNG_KL30F | - | - | - |
| 0x4020 | TC_SIA_AUSWURF_SPERRE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4021 | TC_SIA_LADEMODUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4022 | TC_SIA_LADESCHALTUNG_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4023 | TC_SIA_VERRIEGELUNG_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4024 | TC_SIA_VERRIEGELUNGSVORGAENGE_ANZAHL | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4025 | TC_SIA_FERTIGUNGSMODUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4026 | TC_SIA_MESSEMODUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4027 | TC_SIA_GERAETESTECKER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4028 | FETRAFLA_STATUS | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4030 | INTERNER_FEHLER | 0-n | High | 0xFF | TAB_INTERNER_FEHLER | - | - | - |
| 0x4031 | STATUS_UNTERBRECHUNG | 0-n | High | 0xFF | TAB_STATUS_UNTERBRECHUNG | - | - | - |
| 0x4032 | TAB_STATUS_KURZSCHLUSS | 0-n | High | 0xFF | TAB_STATUS_UNTERBRECHUNG | - | - | - |
| 0x4033 | VERBAUORTTABELLE_LIN_SLAVES | 0-n | High | 0xFF | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - |
| 0x4034 | LIN_VERBAUORT_ANZAHL | Byte | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4035 | KURZSCHLUSS_TYP | 0/1 | High | 0xFF | - | - | - | - |
| 0x4036 | FEHLERSTATUS_HANDSOFFDETECTION | 0-n | High | 0xFF | TAB_HOD_ERROR | - | - | - |
| 0x4037 | FEHLERART_KURZSCHLUSS | 0-n | High | 0xFF | TAB_FEHLERART_HW | - | - | - |
| 0x4040 | SPANNUNG_BORDNETZ | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4041 | KLEMMEN_STATUS | 0-n | High | 0xFF | TAB_UW_KLEMMEN_STATUS | - | - | - |
| 0x4042 | LICHTSCHALTER_STELLUNG | 0-n | High | 0xFF | TAB_UW_LICHTSCHALTER | - | - | - |
| 0x4043 | GRUND_UNTERSPANNUNGS_ABSCHALTUNG | 0-n | High | 0xFF | TAB_UW_GRUND_UNTERSPG_ABSCHALTUNG | - | - | - |
| 0x4044 | LAMPENMAPPING_FEHLER_TYPE | 0-n | High | 0xFF | TAB_UW_LAMPENMAPPING_FEHLER_TYPE | - | - | - |
| 0x4045 | LAMPENMAPPING_INDEX | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4048 | SPANNUNG_TMS | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4050 | STAT_M_TASTER_FEHLER | 0-n | High | 0xFF | TAB_M_TASTER_FEHLER | - | - | - |
| 0x4051 | TAB_HECKKLAPPENSENSOR_DEFEKT | 0-n | High | 0xFF | TAB_HECKKLAPPENSENSOR_DEFEKT | - | - | - |
| 0x4070 | FEHLERART_ILE | 0-n | High | 0xFF | TAB_FEHLERART_ILE | - | - | - |
| 0x407E | SPANNUNG_KL30L4 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x407F | SPANNUNG_KL30L3 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x4080 | SPANNUNG_KL30L1 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x4081 | SPANNUNG_KL30L2 | V | High | unsigned int | - | 1.0 | 1000.0 | 0.0 |
| 0x40AC | UMWELTDATEN SPIELSCHUTZ | 0-n | High | 0xFF | TAB_ZSG_BF_WECK_GRUND | - | - | - |
| 0x40AD | UMWELTDATEN SPIELSCHUTZ | 0-n | High | 0xFF | TAB_ZSG_BF_WECK_GRUND | - | - | - |
| 0x40AE | UMWELTDATEN SPIELSCHUTZ | 0-n | High | 0xFF | TAB_ZSG_BF_WECK_GRUND | - | - | - |
| 0x40AF | UMWELTDATEN SPIELSCHUTZ | 0-n | High | 0xFF | TAB_ZSG_BF_WECK_GRUND | - | - | - |
| 0x40B0 | SHORTCUT_INFO | 0-n | High | 0xFF | TAB_UWB_LIN_SHORTCUT_INFO | - | - | - |
| 0x40B1 | LIN_FRAME_ERROR_INFO | 0-n | High | 0xFF | TAB_UWB_LIN_FRAME_ERROR_INFO | - | - | - |
| 0x40B2 | EXPECTED NODE VARIANT | HEX | High | unsigned char | - | - | - | - |
| 0x40B3 | NODE VARIANT OF LIN SLAVE | HEX | High | unsigned char | - | - | - | - |
| 0x40B4 | LIN NODE ACCESS | HEX | High | unsigned char | - | - | - | - |
| 0x40BE | LIN_EXPECTED_NODE_VARIANT2 | HEX | High | unsigned char | - | - | - | - |
| 0x40C0 | CRC_OR_ALIVE_FAILURE | 0-n | High | 0xFF | TAB_UW_CRC_OR_ALIVE_FAILURE | - | - | - |
| 0x40C1 | BE_AUDIO_TASTE | 0-n | High | 0xFF | BE_AUDIO_TASTE | - | - | - |
| 0x40C2 | FEHLERART_MULTIFUNKTIONS_LENKRAD | 0-n | High | 0xFF | TAB_MULTIFUNKTIONS_LENKRAD | - | - | - |
| 0x40C3 | FEHLERART_SZL_LENKSTOCK_BLINKER | 0-n | High | 0xFF | TAB_SZL_LENKSTOCK_BLINKER | - | - | - |
| 0x40C5 | KURZSCHLUSS_ODER_LEITUNGSABBRUCH | 0/1 | High | 0xFF | - | - | - | - |
| 0x40C6 | SPANNUNG_GUELTIGEN_BEREICH | 0/1 | High | 0xFF | - | - | - | - |
| 0x40C7 | INT_FEHLER_SITZHEIZUNG | 0/1 | High | 0xFF | - | - | - | - |
| 0x40C8 | SONNENROLLO_SCHALTER_HAENGT | 0-n | High | 0xFF | TAB_SONNENROLLO_SCHALTER_HAENGT | - | - | - |
| 0x40D0 | FH_FEHLER_URSACHE | 0-n | High | 0xFF | TAB_FH_FEHLER | - | - | - |
| 0x40D1 | WwSafeMech | 0-n | High | 0xFF | TAB_WWSAFEMECH | - | - | - |
| 0x40F6 | VERBAUORT_TAGE | 0-n | High | 0xFF | TAB_UW_VERBAUORT_TAGE | - | - | - |
| 0x40FA | UW_SCHLUESSELPOSITION | 0-n | High | 0xFF | TAB_UW_SCHLUESSEL_POSITION | - | - | - |
| 0x4100 | STATUS_GETRIEBE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4102 | TYP_FEHLER_HERSTELLUNG_FB | 0-n | High | 0xFF | TAB_TYP_FEHLER_HERSTELLUNG_FB | - | - | - |
| 0x4107 | LAMPENMAPPING_INDEX_2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4120 | _CARGO_LEITUNG_ZUSTAND | 0-n | High | 0xFF | TAB_CARGO_LEITUNGSZUSTAND | - | - | - |
| 0x4121 | LICHT_FUSI_KODIERPARAMETER | 0-n | High | 0xFF | TAB_LICHT_FUSI_KODIERPARAMETER | - | - | - |
| 0x413B | THERMOCUPHOLDER_FEHLERART | 0-n | High | 0xFF | TAB_THERMOCUPHOLDER_FEHLERART | - | - | - |
| 0x413C | LAST_TIME_BEL_KUNDENBEDIENUNG | s | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x413D | _LAST_BEL_KUNDENWUNSCH | 0-n | High | 0xFF | TAB_BEL_STATE | - | - | - |
| 0x413E | NFC_E_HW_FEHLER_TYP | 0-n | High | 0xFF | TAB_NFC_E_HW_INTERN_FEHLER | - | - | - |
| 0x413F | DRIVER_DIAG_STATE | 0-n | High | 0xFF | TAB_DRIVER_DIAG_STATE | - | - | - |
| 0x4140 | AUSSENTEMPERATUR | ° | High | unsigned char | - | 0.5 | 1.0 | -40.0 |
| 0x4141 | SENSE_STROM | mA | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4148 | NFC_INTERN_FEHLER | 0-n | High | 0xFF | TAB_NFC_HW_INTERN_FEHLER | - | - | - |
| 0x4149 | NFC_U_FEHLER | 0-n | High | 0xFF | TAB_NFC_I_VOLT_FEHLER | - | - | - |
| 0x414A | NFC_STM_FEHLER | 0-n | High | 0xFF | TAB_NFC_I_STM_FEHLER | - | - | - |
| 0x414B | NFC_STM_DATA | HEX | High | unsigned char | - | - | - | - |
| 0x4150 | NIV_TASTEN | 0-n | High | 0xFF | TAB_NIV_TASTE | - | - | - |
| 0x4151 | NIV_LEDS | 0-n | High | 0xFF | TAB_NIV_LED | - | - | - |
| 0x4152 | BEMIKO_HW_FEHLER | 0-n | High | 0xFF | TAB_BEMIKO_HW_FEHLER | - | - | - |
| 0x4153 | RSU_FLASHRESULT | 0-n | High | 0xFF | TAB_RSU_FLASHRESULT | - | - | - |
| 0xD6C0 | Taste | 0-n | High | 0xFF | TAB_TASTEN | - | - | - |
| 0xE373 | REMOTE_ENGINE_START_VERHINDERER | 0-n | High | 0xFF | TAB_RES_VERHINDERER | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### GRUND_NICHT_ERKENNUNG_ID_GEBER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Timeout versendeter LF Ping BDC |
| 0x02 | Timeout Antwort ID Geber |
| 0x03 | Fehlerhafte Antwort ID Geber |
| 0x04 | Interner Integritätsfehler im Sicherheitsrelevanten Speicherbereich erkannt |

### HW_MODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | D-Muster |
| 0xFF | Wert ungültig |

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
| 0x03001A | FH FA: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03001B | FH FA: Reversierung im Emergency-Modus | 1 |
| 0x03009A | FH BF: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03009B | FH BF: Reversierung im Emergency-Modus | 1 |
| 0x03009F | Fensterheber: Notbetrieb (Interner Fehler) | 0 |
| 0x03011A | FH FAH: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03011B | FH FAH: Reversierung im Emergency-Modus | 1 |
| 0x03019A | FH BFH: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03019B | FH BFH: Reversierung im Emergency-Modus | 1 |
| 0x030760 | FES Koordinator Innenraum Softwarefehler | 0 |
| 0x030761 | FES Master Softwarefehler | 0 |
| 0x400000 | DTC Inhibition Error 1 | 0 |
| 0x400001 | DTC Inhibition Error 2 | 0 |
| 0x400002 | DTC Inhibition Error 3 | 0 |
| 0x400003 | DTC Inhibition Error 4 | 0 |
| 0x400004 | DTC Inhibition Error 5 | 0 |
| 0x400005 | DTC Inhibition Error 6 | 0 |
| 0x400006 | DTC Inhibition Error 7 | 0 |
| 0x400007 | DTC Inhibition Error 8 | 0 |
| 0x400008 | DTC Inhibition Error 9 | 0 |
| 0x400009 | DTC Inhibition Error 10 | 0 |
| 0x400099 | DTC_ECC_FAILURE | 0 |
| 0x400100 | Software: OSEK OS Assert | 0 |
| 0x400101 | Software: OSEK OS ErrorHook | 0 |
| 0x400102 | Software: OSEK OS ShutdownHook | 0 |
| 0x400103 | Software: OSEK OS unknown ISR | 0 |
| 0x400104 | Software: OSEK OS Stackoverflow | 0 |
| 0x400105 | Software: Exception | 0 |
| 0x400106 | MCU_RESET_SELFTEST | 1 |
| 0x4002FE | Too frequent writing on the same FEE Block | 1 |
| 0x4002FF | Too frequent writing on the same EEPROM block | 1 |
| 0x400F00 | Application Startup Error | 0 |
| 0x804000 | Reset aus sonstigen Gründen | 0 |
| 0x804001 | Reset wegen Aufstart | 0 |
| 0x804002 | Reset durch Extern | 0 |
| 0x804003 | Reset wegen Loss Of Clock | 0 |
| 0x804004 | Reset durch PLL Überwachung | 0 |
| 0x804005 | Reset durch COP Watchdog | 0 |
| 0x804007 | Reset wegen internem SW-Fehler | 0 |
| 0x804008 | Reset Low Voltage | 0 |
| 0x80400C | Versorgungspannung kleiner 4,75V | 0 |
| 0x80400E | ECUM_RESET_LIFECYCLE | 0 |
| 0x80400F | Ungültiger Board-ISR | 0 |
| 0x804018 | SYSTEM_INTEGRITY_VIOLATION | 0 |
| 0x80401A | Übertemperatur in NTC Sensor erkannt | 0 |
| 0x80401B | CANIF_E_STOPPED | 0 |
| 0x80401E | NVM_E_INTEGRITY_FAILED | 0 |
| 0x804021 | Übertemperatur in externer Baustein erkannt | 1 |
| 0x804022 | WDG_E_SET_MODE | 0 |
| 0x804025 | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x804027 | NVM_E_REQ_FAILED | 0 |
| 0x80402B | LINIF_E_NC_NO_RESPONSE | 1 |
| 0x80402C | WDG_E_DISABLE_REJECTED | 0 |
| 0x80402D | SAFETY_CAF_CORRUPTED | 0 |
| 0x804030 | Allgemeiner FuSi Fehler | 0 |
| 0x804035 | WDG_E_ALIVE_SUPERVISION | 0 |
| 0x804036 | LINIF_E_RESPONSE | 1 |
| 0x804040 | Interface VAM-CLI: Timeout Crash-Entriegeln nach Rollover-Crash | 1 |
| 0x804044 | Interrupts deaktiviert aufgrund zu häufigem Aufruf | 0 |
| 0x804045 | ZV FUSI: Entsichern der Türen von FuSi Komponente ausgeführt | 1 |
| 0x804046 | ZV FUSI: Sichern der Türen nicht ausgeführt da anschließendes Entsichern nicht möglich | 1 |
| 0x804048 | CA-HW-Treiber: Temperaturüberlast | 0 |
| 0x804049 | CA-HW-Treiber: Vorwarnung Temperaturüberlast | 0 |
| 0x804051 | LINSM_CODING_ACCESS_FAILED | 0 |
| 0x804052 | LINSM_CODING_WRONG_DATA | 0 |
| 0x804057 | ISV, Ansteuerung Abschalten 15N1: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x804058 | ISV, Ansteuerleitung Abschalten 30B1 oder 30B2: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x804059 | ISV, Ansteuerleitung Abschalten HHS: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x80405A | ISV, Ansteuerleitung Abschalten 30F1 oder 30F2: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x80405B | ISV, Ansteuerleitung Einschalten 15N1: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x80405C | ISV, Ansteuerleitung Einschalten 30B1 or 30B2: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x80405D | ISV, Ansteuerleitung Einschalten HHS: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x80405E | ISV, Ansteuerleitung Einschalten 30F1 oder 30F2: Kurzschluss oder Leitungsunterbrechung | 0 |
| 0x80405F | ISV, Versorgungsspannung Relais hinten: Kurzschluss nach Masse | 0 |
| 0x8040BC | Intelligenter Batteriesensor (IBS) Wakeup: Wecksignal unplausibel | 1 |
| 0x8040BD | BMW Applikation: Fehlerhafter interner Software Status | 0 |
| 0x8040BE | BMW Applikation: Runtime Assert Fehler | 0 |
| 0x8040C1 | KL30F: Anforderung  Abschaltung  wegen Buswecker | 1 |
| 0x8040C2 | KL30F: Anforderung  Abschaltung  wegen Einschlafverhinderer | 1 |
| 0x8040C4 | KL30F: Anforderung Reset wegen Buswecker | 1 |
| 0x8040C5 | KL30F: Anforderung Reset wegen Einschlafverhinderer | 1 |
| 0x8040C7 | Intelligenter Batteriesensor (IBS): Nachladegrenze erreicht | 1 |
| 0x8040C8 | Intelligenter Batteriesensor (IBS): Obere Startfähigkeitsgrenze erreicht | 1 |
| 0x8040C9 | Intelligenter Batteriesensor (IBS): Ruhestromverletzung  erkannt | 1 |
| 0x8040CA | Intelligenter Batteriesensor (IBS): Untere Startfähigkeitsgrenze erreicht | 1 |
| 0x8040CC | PWF-Zustand Fahren: fehlerhaftes Abstellen Ende | 1 |
| 0x8040CE | Batterieloser Betrieb (12V) aktiv: KL15-Deaktivierung wird verzögert | 0 |
| 0x8040D1 | Fehlerspeicher Erreichen Startfähigkeitsgrenze | 1 |
| 0x8040D3 | Signal QU_ST_CON_VEH hat die Codierung: Signalwert eingeschränkt gültig. | 0 |
| 0x8040D4 | Fahrbereitschaft bei ZV sichern | 1 |
| 0x8040D5 | Zugang Heckklappe aufgrund aktivem Valet-Mode gesperrt | 0 |
| 0x8040D7 | Intelligenter Batteriesensor (IBS): Fremdladeerkennung 48V aktiv | 1 |
| 0x8040DA | Motorfernstart: Anforderung über Display-Key | 1 |
| 0x8040DB | Motorfernstart: Anforderung über 3-fach Druck Schlüssel | 1 |
| 0x8040EB | CAN_E_TIMEOUT | 0 |
| 0x8040F8 | HSM : Exception interuptable | 0 |
| 0x8040F9 | HSM : Assert | 0 |
| 0x8040FA | HSM : Fehlerhaft decrytion | 0 |
| 0x8040FB | HSM : Fehlerhaft signature | 0 |
| 0x8040FC | HSM : Zu häufiger Schreibzugriff auf Eprom-Emulation | 0 |
| 0x8040FD | HSM : Laufzeitverletzung | 0 |
| 0x8040FE | HSM : Unplausibel Konfiguration | 0 |
| 0x804137 | CKT: Degradierung auf CKT-ER-Zone | 0 |
| 0x804141 | RTE Buffer Tracer Running | 0 |
| 0x804148 | Remote Door Unlock (RDU): Erfolgreich durchgeführt | 1 |
| 0x804149 | Remote Door Unlock (RDU): Abbruch aufgrund von Kodieroption die RDU verhindert | 1 |
| 0x80414A | Remote Door Unlock (RDU): Abbruch aufgrund Motorstart | 1 |
| 0x80414B | Remote Door Unlock (RDU): Abbruch, da Fahrzeug fährt | 1 |
| 0x80414C | Remote Door Unlock (RDU): Ungültige Anforderung über CAN | 1 |
| 0x80414D | Remote Door Lock (RDL): Erfolgreich durchgeführt | 1 |
| 0x80414E | Remote Door Lock (RDL): Abbruch aufgrund von Kodieroption die RDL verhindert | 1 |
| 0x80414F | Remote Door Lock (RDL): Abbruch aufgrund Motorstart oder Fahrertüre offen | 1 |
| 0x804150 | Remote Door Lock (RDL): Abbruch, da Fahrzeug fährt | 1 |
| 0x804151 | Remote Door Lock (RDL): Ungültige Anforderung über CAN | 1 |
| 0x80416C | CarSharing-Mode (CSM) | 0 |
| 0x804171 | KL50-Anforderung (Primärstart oder MSA-/Zustart): DME-Requests fehlerhaft | 1 |
| 0x804173 | KM: RESULT_WRONG_PARAMETER | 1 |
| 0x804174 | KM: RESULT_BUFFER_FULL | 1 |
| 0x804175 | Codierung VAM_LID_VARIANT: Ungültig | 1 |
| 0x80417D | SMO: Status Ausführung letzte Aktion | 0 |
| 0x804188 | Notlauf FuSi Abblendlicht aktiv | 0 |
| 0x804189 | Notlauf Fusi Fahrtrichtungsanzeiger aktiv | 0 |
| 0x8041A6 | SPI Fehler Body - SPOC | 0 |
| 0x8041AC | Remote Bootlid Unlock (RBU): Abbruch, da Fahrzeug fährt | 0 |
| 0x8041AD | Remote Bootlid Unlock (RBU): Abbruch aufgrund Motorstart | 0 |
| 0x8041AE | Remote Bootlid Unlock (RBU): Abbruch aufgrund von Kodieroption die RBU verhindert | 0 |
| 0x8041AF | Remote Bootlid Unlock (RBU): Erfolgreich durchgeführt | 0 |
| 0x8041C4 | Notlauf FuSi Bremslicht aktiv | 0 |
| 0x8041C5 | Kodierung: Lampenmapping unplausibel | 0 |
| 0x8041C6 | Außenlicht, Rollenmodus aktiv | 0 |
| 0x8041C7 | Lampenmapping Innenlicht unplausibel | 0 |
| 0x8041ED | Retries Lichtausgang abgebrochen - Zu viele Retries | 0 |
| 0x804418 | IDG Positions Telegramm | 1 |
| 0x8044E0 | Schlüsseldaten-Service: Kein Schlüssel am Transponder erkannt | 0 |
| 0x804800 | Relais-Attacke erkannt | 0 |
| 0x804801 | CA, LF Antennen Problem 1 | 0 |
| 0x804802 | CA_LF_telegram_not_sent | 0 |
| 0x804803 | CA_E5_session_key_crypto_timeout | 0 |
| 0x804804 | CA_session_key_crypto_nok | 0 |
| 0x804805 | CA_challenge_crypto_timeout | 0 |
| 0x804806 | CA_challenge_crypto_nok | 0 |
| 0x804807 | CA_response_RCI_timeout | 0 |
| 0x804808 | CA_response_crypto_timeout | 0 |
| 0x804809 | CA_response_check_nok | 0 |
| 0x80480A | CA_response_crypto_nok | 0 |
| 0x80480B | CA_LF_key_crypto_nok | 0 |
| 0x80480C | CA, LF Antennen Problem 2 | 0 |
| 0x80480D | Schlüsselsuche abgebrochen wegen Unter- oder Überspannung | 0 |
| 0x80480E | CASS LF Treiber Problem | 0 |
| 0x80480F | WCA: Deaktiviert | 0 |
| 0x804811 | PWF: Zustandsrestaurierung | 0 |
| 0x804812 | PWF: KL15 Aktivierung durch Hardware | 0 |
| 0x804814 | PWF: Lange Wohndauer | 0 |
| 0x804815 | PWF: 30B-Abschaltung bei aktivem Bus | 0 |
| 0x804816 | PWF: 30F-Abschaltung bei aktivem Bus | 0 |
| 0x804817 | PWF: Fahrbereitschaft ausserhalb von Fahren | 0 |
| 0x804818 | PWF: Häufige Zustandswechsel | 0 |
| 0x80481A | PWF: Übergang Abschaltung_durch_Kunden | 0 |
| 0x80481B | PWF: Übergang Fahrbereitschaft_beenden nach Pruefen_Analyse_Diagnose | 0 |
| 0x80481C | PWF: Übergang FB_herstellen nach FB_beenden | 0 |
| 0x80481D | PWF: Übergang FB_herstellen nach Wohnen | 0 |
| 0x80481E | PWF: Übergang OSFG erreicht | 0 |
| 0x80481F | PWF: Übergang Pruefen_Analyse_Diagnose nach Fahren | 0 |
| 0x804820 | PWF: Übergang Virtuelle_Batterie_entleert | 0 |
| 0x804821 | PWF: Übergang Wohnen nach Pruefen_Analyse_Diagnose | 0 |
| 0x804826 | PWF: Ping Pong fehlerhaft, Ersatzreaktion | 0 |
| 0x804827 | PWF: CAS Montagemodus gesetzt, Anlassersperre aktiv | 0 |
| 0x804828 | PWF: Anforderung Standfunktion nicht durchgeführt | 0 |
| 0x80482A | PWF: Battery Guard Call ausgelöst | 0 |
| 0x80482F | Remote Software Update (RSU): Aktivierungsbedingungen nicht erfüllt | 1 |
| 0x804830 | Smart Access Debug Data Entry 1 | 0 |
| 0x804831 | Smart Access Debug Data Entry 2 | 0 |
| 0x804832 | Smart Access Debug Data Entry 3 | 0 |
| 0x804833 | Smart Access Debug Data Entry 4 | 0 |
| 0x804834 | Smart Access Debug Data Entry 5 | 0 |
| 0x804835 | ID-Geber IDG: Schlüssel eingesichert und gesperrt | 0 |
| 0x804854 | Smart Access Controller (SAC): Problem Detected | 1 |
| 0x804930 | Deaktivierung der KL30B wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x804931 | Deaktivierung der KL30F wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x804932 | Versenden der Fahrbereitschaftsanforderung wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x804933 | Deaktivierung der KL15 wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x804934 | Aktivierung der KL50 wurde aus sicherheitsrelevanten Gründen verhindert | 0 |
| 0x8049FC | IOHWAB_E_IO_SEQUENCE | 0 |
| 0xF00386 | ADC_E_TIMEOUT | 0 |
| 0xF00388 | MCU_E_TIMEOUT_TRANSITION | 0 |
| 0xF0038A | SPI_E_TIMEOUT | 0 |
| 0xF0038C | EEP_E_COM_FAILURE | 0 |
| 0xF00430 | GPT_E_TIMEOUT_TRANSITION | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | Text | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0x4002 | BATTERIESPANNUNGSPANNUNG ENDE BEI FEHLERSPEICHEREINTRAG | mV | High | unsigned int | - | 15.0 | 1.0 | 0.0 |
| 0x4004 | PWF_ZUSTAND | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4006 | PWF_ZUSTAND_NV_RAM | 0-n | High | 0xFF | PWF_ZUSTAND_FAHRZEUG_STATUS | - | - | - |
| 0x4007 | PWF_ZUSTAND_RESTAURIERT | 0-n | High | 0xFF | PWF_ZUSTAND_FAHRZEUG_STATUS | - | - | - |
| 0x4008 | PWF_SF_FUNKTION_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4009 | PWF_SF_GRUND | 0-n | High | 0xFF | TAB_PWF_SF_GRUND | - | - | - |
| 0x400B | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - |
| 0x400C | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - |
| 0x400D | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - |
| 0x400E | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - |
| 0x4010 | KeySearchMode | 0-n | High | 0xFF | TAB_KEYSEARCHMODE | - | - | - |
| 0x4011 | AuthType | 0-n | High | 0xFF | TAB_AUTHTYPE | - | - | - |
| 0x4012 | CheckAllIdg | 0-n | High | 0xFF | TAB_CHECKALLIDG | - | - | - |
| 0x4013 | CfResultType | 0-n | High | 0xFF | TAB_CFRESULTTYPE | - | - | - |
| 0x4015 | NumberOfHFM | HEX | High | unsigned char | - | - | - | - |
| 0x4016 | RfChannel | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4018 | SwcStatusPart1 | HEX | High | unsigned long | - | - | - | - |
| 0x4019 | SwcStatusPart2 | HEX | High | unsigned long | - | - | - | - |
| 0x401A | SwcStatusPart3 | HEX | High | unsigned long | - | - | - | - |
| 0x401B | SwcStatusPart4 | HEX | High | unsigned long | - | - | - | - |
| 0x4040 | SPANNUNG_BORDNETZ | V | High | unsigned char | - | 1.0 | 10.0 | 0.0 |
| 0x4044 | LAMPENMAPPING_FEHLER_TYPE | 0-n | High | 0xFF | TAB_UW_LAMPENMAPPING_FEHLER_TYPE | - | - | - |
| 0x4045 | LAMPENMAPPING_INDEX | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x404D | ERROR_SPI | 0-n | High | 0xFF | TAB_UW_ERROR_SPI | - | - | - |
| 0x404F | DEVICE_ID | 0-n | High | 0xFF | TAB_UW_DEVICE_ID | - | - | - |
| 0x4053 | CARSHARING_MODE | 0-n | High | 0xFF | TAB_CARSHARING_MODE | - | - | - |
| 0x4060 | CAN_AUSSENTEMPERATUR | °C | High | unsigned char | - | 1.0 | 2.0 | -40.0 |
| 0x4082 | Zustandswechsel_Verhinderer | 0-n | High | 0xFF | TAB_ZUSTANDSWECHSEL_VERHINDERER | - | - | - |
| 0x4083 | ZUSTANDSWECHSEL | 0-n | High | 0xFF | TAB_ZUSTANDSWECHSEL | - | - | - |
| 0x4090 | UW_BLOCK_ID | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4098 | ECC_FAILURE_TYPE | 0-n | High | 0xFFFFFFFF | TAB_ECC_FAILURE_TYPE | - | - | - |
| 0x40A1 | UW_ECUMA_RST_LIFECYCLE_RUNLEVEL | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x40A2 | UW_ECUMA_RST_LIFECYCLE_INDEX | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x40A3 | UW_ECUMA_RST_LIFECYCLE_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x40A6 | UW_EXCLUDED_DTC | - | High | motorola double | - | 1.0 | 1.0 | 0.0 |
| 0x40AB | UW_APP_STARTUP_FUNC_INDEX | HEX | High | unsigned int | - | - | - | - |
| 0x40B5 | LIN_VERBAUORT_ID | HEX | High | unsigned int | - | - | - | - |
| 0x40B6 | LIN_CODING_ERRORTYPE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x40B8 | INTERRUPTSOURCENUMBER | HEX | High | unsigned char | - | - | - | - |
| 0x40B9 | FUSISHELL 2 | HEX | High | signed long | - | - | - | - |
| 0x40D2 | ZV_SAFE_MECH | 0-n | High | 0xFF | TAB_ZV_SAFE_MECH | - | - | - |
| 0x40FA | UW_SCHLUESSELPOSITION | 0-n | High | 0xFF | TAB_UW_SCHLUESSEL_POSITION | - | - | - |
| 0x40FC | FusiShell 3 | HEX | High | signed long | - | - | - | - |
| 0x40FD | FUSI_SHELL 1 | HEX | High | signed long | - | - | - | - |
| 0x4100 | STATUS_GETRIEBE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4101 | FEHLERART_TC_FUSI_KL50_MSA | 0-n | High | 0xFF | TAB_ZSG_UW_TC_FUSI_KL50_MSA | - | - | - |
| 0x4103 | FUSI_FEHLERGRUND_PWF | 0-n | High | 0xFF | TAB_FUSI_FEHLERGRUND_PWF | - | - | - |
| 0x4104 | FUSI_FAHRBEREITSCHAFT_VERHINDERER | 0-n | High | 0xFF | TAB_FUSI_FAHRBEREITSCHAFT_VERHINDERER | - | - | - |
| 0x4105 | FUSI_KLEMMEN_AKTIVIERUNGS_VERHINDERER | 0-n | High | 0xFF | TAB_FUSI_KLEMMEN_AKTIVIERUNGS_VERHINDERER | - | - | - |
| 0x4106 | FUSI_KLEMMEN_DEAKTIVIERUNGS_VERHINDERER | 0-n | High | 0xFF | FUSI_KLEMMEN_DEAKTIVIERUNGS_VERHINDERER | - | - | - |
| 0x4107 | LAMPENMAPPING_INDEX_2 | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4108 | LAMP_PWM_CAF_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4109 | COLUMN_TURN_BLINKEN_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x410A | DRIVING_FAILSAFE_STATE | - | High | motorola double | - | 1.0 | 1.0 | 0.0 |
| 0x410D | LAMP_DIAGNOSIS_SPOC_FAILURE_CAF_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4110 | PWF_INDICATION_KL15_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4111 | PWF_STEERING_ANGLE_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4112 | FUNC_LAMP_VEHICLE_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4113 | DRIVER_FAS_RECUP_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4114 | PWM_PWF_CAF_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4115 | PWF_KL15_BATTERY_STATE | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x4116 | LAST_MOTORSTART | 0-n | High | 0xFF | TAB_UW_LAST_MOTORSTART | - | - | - |
| 0x4117 | STAT_FAHRBEREITSCHAFT | HEX | High | unsigned char | - | - | - | - |
| 0x4118 | ZEITDIFFENRENZ_MOTORSTART | s | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4123 | LF_ANTENNA_STATUS_1 | 0-n | High | 0xFF | TAB_UWB_LF_ANTENNA_STATUS | - | - | - |
| 0x4124 | LF_ANTENNA_STATUS_2 | 0-n | High | 0xFF | TAB_UWB_LF_ANTENNA_STATUS | - | - | - |
| 0x4125 | LF_ANTENNA_STATUS_3 | 0-n | High | 0xFF | TAB_UWB_LF_ANTENNA_STATUS | - | - | - |
| 0x4126 | LF_ANTENNA_STATUS_4 | 0-n | High | 0xFF | TAB_UWB_LF_ANTENNA_STATUS | - | - | - |
| 0x4127 | LF_ANTENNA_STATUS_5 | 0-n | High | 0xFF | TAB_UWB_LF_ANTENNA_STATUS | - | - | - |
| 0x4128 | LF_ANTENNA_STATUS_6 | 0-n | High | 0xFF | TAB_UWB_LF_ANTENNA_STATUS | - | - | - |
| 0x4129 | LF_ANTENNA_STATUS_7 | 0-n | High | 0xFF | TAB_UWB_LF_ANTENNA_STATUS | - | - | - |
| 0x412A | LF_ANTENNA_STATUS_8 | 0-n | High | 0xFF | TAB_UWB_LF_ANTENNA_STATUS | - | - | - |
| 0x412B | SW_CRITICAL_ERROR_UWB_1 | 0-n | High | 0xFFFFFFFF | TAB_SW_EXCEPTION_TYPE | - | - | - |
| 0x412C | SW_CRITICAL_ERROR_UWB_2 | HEX | High | unsigned long | - | - | - | - |
| 0x412D | SW_CRITICAL_ERROR_UWB_3 | HEX | High | unsigned long | - | - | - | - |
| 0x412E | SW_CRITICAL_ERROR_UWB_4 | HEX | High | unsigned long | - | - | - | - |
| 0x4131 | MC_RGM_DES | HEX | High | unsigned long | - | - | - | - |
| 0x4132 | MC_RGM_FES | HEX | High | unsigned long | - | - | - | - |
| 0x4133 | RESET_STATUS | HEX | High | unsigned long | - | - | - | - |
| 0x4134 | LIMP_HOME_STATUS | HEX | High | unsigned long | - | - | - | - |
| 0x4135 | HW_INTEGRITY_STATUS | HEX | High | unsigned long | - | - | - | - |
| 0x4137 | ALIVE_INTEGRITY_STATUS | HEX | High | unsigned long | - | - | - | - |
| 0x4142 | SAC_PROBLEM_SOURCE | 0-n | High | 0xFF | TAB_SAC_PROBLEM_SOURCE | - | - | - |
| 0x4143 | SAC_PROBLEM_TYPE | 0-n | High | 0xFF | TAB_SAC_PROBLEM_TYPE | - | - | - |
| 0x4144 | PWM_PWF_BATTERY_STATE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4145 | DYNO_LOWB_LIN_STATE | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x4146 | SMACC_DEBUG1 | - | High | motorola double | - | 1.0 | 1.0 | 0.0 |
| 0x4147 | SMACC_DEBUG2 | - | High | motorola double | - | 1.0 | 1.0 | 0.0 |
| 0x414C | FCCU_REGISTER_1 | HEX | High | unsigned long | - | - | - | - |
| 0x414D | FCCU_REGISTER_2 | HEX | High | unsigned long | - | - | - | - |
| 0x414E | FCCU_REGISTER_3 | HEX | High | unsigned long | - | - | - | - |
| 0x414F | INHALT_IDG_POSITIONS_TELEGRAMM | HEX | High | unsigned long | - | - | - | - |
| 0x4154 | HSM_EXCEPTION_TYPE | 0-n | High | 0xFF | TAB_HSM_EXCEPTION_TYPE | - | - | - |
| 0x4155 | HSM_EXCEPTION_ADDRESS | HEX | High | unsigned long | - | - | - | - |
| 0x4156 | HSM_EXCEPTION_POINTER | HEX | High | unsigned long | - | - | - | - |
| 0x4157 | HSM_DUMP_ADDRESS | HEX | High | unsigned long | - | - | - | - |
| 0x4158 | HSM_IFC_APPLICATION_ID | HEX | High | unsigned long | - | - | - | - |
| 0x4159 | LAMP_ID | 0-n | High | 0xFF | TAB_LAMP_ID | - | - | - |
| 0x415A | RETRY_NUMBER | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x415B | SMO_GRUND_NICHT_AUSGEFUEHRT | 0-n | High | 0xFF | TAB_SMO_GRUND_NICHT_AUSGEFUEHRT | - | - | - |
| 0x4FA0 | FES_MASTER_SW_FEHLER_INFO | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x4FA1 | FES_COORDINT_SW_FEHLER_INFO | - | High | signed long | - | 1.0 | 1.0 | 0.0 |
| 0x5052 | LF_DRIVER_STATUS | 0-n | High | 0xFF | TAB_UWB_LF_DRIVER_STATUS | - | - | - |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 01 | ERROR |
| 02 | ERROR_RANGE_ARGUMENT |
| 03 | ERROR_LENGHT |
| 04 | SERVICE_ERROR |
| 05 | ERROR_BAUREIHE |
| 06 | ERROR_ELEMENT |
| 07 | ERROR_BEWERTUNG |
| 0xXY | ERROR_UNKNOWN |

### PWF_MESSEMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | MESSEMODUS_NICHT_AKTIV |
| 0x01 | MESSEMODUS_AKTIV |
| 0xFF | Wert ungültig |

### PWF_ZUSTAND_FAHRZEUG_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | PARKEN_BN_NIO |
| 0x02 | PARKEN_BN_IO |
| 0x03 | STANDFUNKTIONEN_KUNDE_NICHT_IM_FZG |
| 0x05 | WOHNEN |
| 0x07 | PRUEFEN_ANALYSE_DIAGNOSE |
| 0x0C | FAHRBEREITSCHAFT_BEENDEN |
| 0x10 | PARKEN_BN_IO_VERK |

### PWF_ZUSTAND_FAHRZEUG_STATUS

| WERT | TEXT |
| --- | --- |
| 0x0 | reserviert |
| 0x1 | Parken_BN_niO |
| 0x2 | Parken_BN_iO |
| 0x3 | Standfunktionen_Kunde_nicht_im_FZG |
| 0x4 | reserviert |
| 0x5 | Wohnen |
| 0x6 | reserviert |
| 0x7 | Pruefen_Analyse_Diagnose |
| 0x8 | Fahrbereitschaft_herstellen |
| 0x9 | reserviert |
| 0xA | Fahren |
| 0xB | reserviert |
| 0xC | Fahrbereitschaft_beenden |
| 0xD | reserviert |
| 0xE | nicht verfügbar |
| 0xF | ungültig |

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
| 0xff | ungültig |

### RES_0X1001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLEMMEN_STATUS | + | - | - | 0-n | - | unsigned char | - | TAB_KLEMMEN_ZUSTAND | - | - | - | Das Result enthält den Klemmenzustand nach Ausführung des Jobs. Der Klemmenstatus wird nach erfolgtem Wechsel zurückgegeben. Falls der Wechsel nicht zulässig ist, so wird der vorherige (immer noch aktuelle) Klemmenstatus zurückgegeben.  Siehe Table TAB_KLEMMEN_ZUSTAND. |

### RES_0X1032_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASU_STATE | - | - | + | 0-n | high | unsigned char | - | TASU_STEUERN_STATUS | - | - | - | Steuerung der TAS-Nutzung |

### RES_0X2300_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZZEIT_BETRIEBSDAUER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zeit in der das BDC seit seiner Inbetriebnahme aktiv war. Zeit wird in Sekunden angegeben. Diese Zeit dient als Referenzzeit für die Betriebsdauern des LS/ambientes Licht und PaDa. |
| STAT_SA_LICHTSCHWERT_VERBAUT | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob die SA Lichtschwert konfiguriert ist. 0x00 nicht konfiguriert 0x01 konfiguriert |
| STAT_EIN_ODER_AUSSCHALTVORGAENGE_LS_UEBER_HU_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Ein- bzw. Ausschaltvorgänge des Lichtschwerts über die HU seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Einschaltvorgänge von aus nach ein. |
| STAT_EIN_ODER_AUSSCHALTVORGAENGE_UEBER_LS_TASTER_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Ein- bzw. Ausschaltvorgänge des Lichtschwerts über den Lichtschwerttaster seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. Registriert werden die Ausschaltvorgänge von ein nach aus. |
| STAT_LS_BETRIEBSDAUER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die aktuelle Betriebsdauer des Lichtschwerts. |
| STAT_SA_PADABELEUCHTUNG_VERBAUT | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob die SA Panoramadachbeleuchtung konfiguriert ist. 0x00 nicht konfiguriert 0x01 konfiguriert |
| STAT_EIN_ODER_AUSSCHALTVORGAENGE_PADA_UEBER_HU_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Ein- oder Ausschaltvorgänge (Aktivierungen durch den Benutzer über die HU) der Panoramadachbeleuchtung seit der erstmaligen Inbetriebnahme an. Dieser Wert wird permanent abgespeichert. |
| STAT_AMBIENTE_PADA_BETRIEBSDAUER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die aktuelle Betriebsdauer der ambienten Beleuchtung bzw. des PaDas. |
| STAT_REDUZIERT_BEI_FAHRT_BETRIEBSDAUER_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit wie lange das ambiente Licht im Zustand bei Fahrt reduziert aktiv ist.Signal ST_DYN_ITLI. |
| STAT_EVENTS_OVTMP_SLAVE_NAD1_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD2_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD3_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD4_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD5_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD6_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD7_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD8_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD9_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD10_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD11_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD12_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD13_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD14_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD15_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD16_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD17_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD18_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD19_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD20_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD21_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD22_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD23_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD24_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD25_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD26_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD27_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD28_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD29_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD30_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD31_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD32_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD33_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD34_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD35_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD36_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD37_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD38_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD39_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD40_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD41_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD42_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD43_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD44_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD45_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD46_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD47_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD48_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD49_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD50_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD51_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_EVENTS_OVTMP_SLAVE_NAD52_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Die Anzahl der Übertemperaturevents des Slaves mit der NAD X. Der Status, ob sich ein Slave im Übertemperaturzustand befindet wird permanent über per LIN-Bus-Kommunikation übermittelt. Der Zähler wird nicht nach jeder empfangenen LIN-Nachricht hoch gezählt, sondern nur beim Wechsel von -Übertemperatur nicht vorhanden- zu -Übertemperatur vorhanden-, mit Entprellung von 5 Nachrichten. Der Wert wird permanent abgespeichert und repräsentiert somit die Übertemperaturevents seit der erstmaligen Inbetriebnahme. |
| STAT_VERBAUORT_ID_SLAVE1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE9 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE10 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE11 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE12 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE13 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE14 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE15 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE16 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE17 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE18 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE19 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE20 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE21 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE22 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE23 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE24 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE25 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE26 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE27 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE28 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE29 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE30 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE31 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE32 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE33 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE34 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE35 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE36 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE37 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE38 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE39 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE40 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE41 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE42 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE43 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE44 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE45 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE46 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE47 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE48 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE49 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE50 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE51 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |
| STAT_VERBAUORT_ID_SLAVE52 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort ID Slave X |

### RES_0X2302_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WELCOME_LIGHT_ZONES_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Aktivierungen von welcome light über die Lichtzonen |
| STAT_BEL_ZUSTANDSAENDERUNGEN_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von BEL-Zustandsänderungen. |
| STAT_BEL_LWR_BEDIENUNGEN_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl von LWR-Rändelbedienungen |
| STAT_BEL_BEDIENUNGEN_DIMMUNG_ANZAHL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der BEL-Dimmungsrändelbedienungen. |
| STAT_BEL_ZUSTANDSAENDERUNG_FUSI_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der BEL-Zustandsänderungen verursacht durch FuSi-relevante Trigger |
| STAT_BEL_ZUSTANDSAENDERUNG_ZSTD_WECHSEL_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der BEL-Zustandsänderungen verursacht durch Fahrzeug-Zustandswechsel. |
| STAT_BEL_ZUSTANDSAENDERUNG_ENBN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der BEL-Zustandsänderungen verursacht durch EnBN-Trigger |
| STAT_BEL_ZUSTANDSAENDERUNG_KUNDENBEDIENNUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der BEL-Zustandsänderungen verursacht durch Kundenbedienung |
| STAT_BEL_STELLUNG_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit des Fahrzeugs in der BEL-Stellung 2 (man. Fahrlicht) |
| STAT_BEL_STELLUNG_A_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit des Fahrzeugs in der BEL-Stellung A (automat. Fahrlicht) |
| STAT_BEL_STELLUNG_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit des Fahrzeugs in der BEL-Stellung 1 (Standlicht) |
| STAT_BEL_STELLUNG_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit des Fahrzeugs in der BEL-Stellung 0 (Licht aus) |
| STAT_BEL_STELLUNG_PL_L_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit des Fahrzeugs in der BEL-Stellung PL_L (Parklicht links) |
| STAT_BEL_STELLUNG_PL_R_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Betriebszeit des Fahrzeugs in der BEL-Stellung PL_R (Parklicht rechts) |
| STAT_FAHRLICHT_EINSCHALTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert der Umgebungshelligkeit bei manuellem Einschalten Fahrlicht durch den Kunden |
| STAT_FAHRLICHT_AUSSCHALTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Mittelwert der Umgebungshelligkeit bei manuellem Ausschalten Fahrlicht durch den Kunden. |
| STAT_RESERVE_0 | 0/1 | high | unsigned int | - | - | - | - | - | Reserve Bytes für zusätzliche Ergebnisse |
| STAT_RESERVE_1 | 0/1 | high | unsigned int | - | - | - | - | - | Reserve Bytes für zusätzliche Ergebnisse |
| STAT_RESERVE_2 | 0/1 | high | unsigned int | - | - | - | - | - | Reserve Bytes für zusätzliche Ergebnisse |
| STAT_RESERVE_3 | 0/1 | high | unsigned int | - | - | - | - | - | Reserve Bytes für zusätzliche Ergebnisse |
| STAT_RESERVE_4 | 0/1 | high | unsigned int | - | - | - | - | - | Reserve Bytes für zusätzliche Ergebnisse |
| STAT_RESERVE_5 | 0/1 | high | unsigned int | - | - | - | - | - | Reserve Bytes für zusätzliche Ergebnisse |
| STAT_RESERVE_6 | 0/1 | high | unsigned int | - | - | - | - | - | Reserve Bytes für zusätzliche Ergebnisse |
| STAT_RESERVE_7 | 0/1 | high | unsigned int | - | - | - | - | - | Reserve Bytes für zusätzliche Ergebnisse |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X2533_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TRIGGER_ZUSTANDSWECHSEL_1 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_2 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_3 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_4 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_5 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_6 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_6_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_7 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_7_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_8 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_8_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_9 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_9_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_10 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_10_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_11 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_11_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_12 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_12_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_13 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_13_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_14 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_14_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_15 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_15_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_16 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_16_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_17 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_17_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_18 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_18_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_19 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_19_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |
| STAT_TRIGGER_ZUSTANDSWECHSEL_20 | 0-n | high | unsigned char | - | TAB_PWF_TRIGGER_ZUSTANDSWECHSEL | - | - | - | Das Result enthält den Anforderer bzw. die Ursache, die zum Zustandswechsel geführt hat. Hinweise: Zuordnung erfolg gemäß Tabelle TAB_PWF_TRIGGER_ZUSTANDSWECHSEL |
| STAT_ZEIT_RELATIV_20_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält das aktuelle Datum als relative Zeit in Sekunden seit 01.01.2000. Hinweise: Wertebereich 0-4,2 Milliarden Sekunden.  |

### RES_0X2536_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANFORDERER_01_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 01 Entertainmentfunktion |
| STAT_ANFORDERER_02_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 02 Remote Services.  |
| STAT_ANFORDERER_03_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 03 Restwärmefunktion / Ausbrennen der Standheizung.  |
| STAT_ANFORDERER_04_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 04 Standheizung / Standlüften.  |
| STAT_ANFORDERER_05_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 05 Verlängerung N-Haltephase, Getriebe nicht in Pos. P   |
| STAT_ANFORDERER_06_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen:  0x00 06 Betätigung Feststellbremse    |
| STAT_ANFORDERER_07_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen:  0x00 07 Nachlauf / Zuschaltung RSE    |
| STAT_ANFORDERER_08_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x00 08 Remote Hupen    |
| STAT_ANFORDERER_09_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 19 Einschalten / Verlängerung Klemme 30B CarSharing    |
| STAT_ANFORDERER_10_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2B Diebstahlwarnanlage  |
| STAT_ANFORDERER_11_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2C EMF-Taster     |
| STAT_ANFORDERER_12_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2D Rollüberwachung    |
| STAT_ANFORDERER_13_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2E Anforderung Außenbeleuchtung    |
| STAT_ANFORDERER_14_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 2F Umladefunktion    |
| STAT_ANFORDERER_15_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 33 KL15Wup-Signal   |
| STAT_ANFORDERER_16_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 35 Kühlmitteltemperaturabfrage durch Kombi    |
| STAT_ANFORDERER_17_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 00 36 Kombi-Anzeige |
| STAT_ANFORDERER_18_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 01 Einschlafverhinderer    |
| STAT_ANFORDERER_19_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 02 Weckerproblem |
| STAT_ANFORDERER_20_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 03 Abschaltung KL30F Standzeit    |
| STAT_ANFORDERER_21_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 04 Abschaltung KL30F CarSharing  |
| STAT_ANFORDERER_22_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 10 OBD-Diagnose    |
| STAT_ANFORDERER_23_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 11 Nachlauf elektrische Wasserpumpe Motor    |
| STAT_ANFORDERER_24_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 13 Nachlauf E-Lüfter    |
| STAT_ANFORDERER_25_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 14 Nachlauf elektrische Zusatzwasserpumpe Lagerstuhlkühlung Turbo   |
| STAT_ANFORDERER_26_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 15 Nachlauf elektr. Wasserpumpe Hybrid (HEWP)    |
| STAT_ANFORDERER_27_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 16 Standlüften    |
| STAT_ANFORDERER_28_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 18 Fremdladeerkennung Hybrid / Ladefunktion HVPM / Ladefunktion LIM    |
| STAT_ANFORDERER_29_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 19 Batteriewächter TSR    |
| STAT_ANFORDERER_30_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 20 Niveauregulierung    |
| STAT_ANFORDERER_31_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 21 Nachlauf Lüftung/Kühlung    |
| STAT_ANFORDERER_32_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 30 Anhängeranschluß AAG    |
| STAT_ANFORDERER_33_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen:  0x 01 31 Anforderung Industriekunde    |
| STAT_ANFORDERER_34_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 01 32 Anforderung Industriekunde OSFG    |
| STAT_ANFORDERER_35_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 02 01 Domänenmaster Verbrennungsmotor    |
| STAT_ANFORDERER_36_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 02 02 Domänenmaster Elektromotor    |
| STAT_ANFORDERER_37_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: 0x 02 03 Domänenmaster Unterhaltung    |
| STAT_ANFORDERER_38_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 02 04    |
| STAT_ANFORDERER_39_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 02 05    |
| STAT_ANFORDERER_40_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 03 01 |
| STAT_ANFORDERER_41_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 03 02 |
| STAT_ANFORDERER_42_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 03 03 |
| STAT_ANFORDERER_43_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 03 04 |
| STAT_ANFORDERER_44_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 03 05 |
| STAT_ANFORDERER_45_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Anforderer 0x 03 06 |
| STAT_ANFORDERER_46_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_ANFORDERER_47_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: Reserviert, immer 0    |
| STAT_ANFORDERER_48_ZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Zähler für die Standnutzungs-Nachlaufzeitenanforderungen: unbekannter Anforderer |
| STAT_PWF_ZUSTANDWECHSEL_FAHREN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Anzahl der Zustandswechsel von beliebigen PWF-Zustand in den PWF-Zustand Fahren.   |

### RES_0X4509_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_12H_TIMER_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 12h Timer |

### RES_0X4532_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERROR_STATE | 0-n | high | unsigned char | - | TAB_ERROR_STATE | - | - | - | Fehlerstatus der Leuchte |
| STAT_DIGITAL_DIAGNOSE_VALUE | 0-n | high | unsigned char | - | TAB_DIGITAL_DIAGNOSE_VALUE | - | - | - | Ergebnis der Digital Diagnose |
| STAT_OPEN_LOAD_DEBOUNCE_COUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktueller wert des OpenLoad Entrpellungszähler (debounce counter) |
| STAT_FORCED_SWITCH_OFF_SHORTCUT | 0/1 | high | unsigned char | - | - | - | - | - | Flag ob die Leuchte wegen Kurzschluss abgeschaltet werden muss. Hinweis: 0 = NotActive; 1 = Active |
| STAT_FORCED_SWITCH_OFF_XENON_WIEDERZUENDEN | 0-n | high | unsigned char | - | TAB_FORCED_SWITCH_OFF_XENON | - | - | - | Xenon nur für Tarnfahrzeuge (Sonst liefert immer 0x02 : Not Available). |
| STAT_REACTIVATION_TIMER_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Zeit bis zum Reaktivieren eines wegen Kurzschluss abegeschalteten Leuchtenausgangs |
| STAT_NVM_RESTARTS_IN_CURRENT_CL15_CYCLE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Restarts wegen Kurzschluss innerhalb des aktuellen Klemme 15 Zyklus |
| STAT_NVM_CL15_REACTIVATION_COUNTER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Klenme 15 Zyklen in denen der RestartsInCurrentCl15Cycle Zähler zurückgesetzt wurde |
| STAT_COLD_MONITORING_INHIBIT_DELAY_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Aktueller Wert des ColdMonitoringInhibitDelay |
| STAT_ACTIVATION_DELAY_TIMEOUT_WERT | ms | high | unsigned char | - | - | 10.0 | 1.0 | 0.0 | Aktueller Wert des ActivationDelayTimeout |
| STAT_CURRENT_STATE_OF_OP_STM | 0-n | high | unsigned char | - | TAB_CURRENT_STATE_OF_OP_STM | - | - | - | Aktueller Zustand der OutputProtection Statemachine |
| STAT_ANALOG_DIAGNOSE_VALUE_WERT | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Gemessener Stromwert |
| STAT_DRIVE_DUTY_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle vom Treiber angesteuerte Duty |
| STAT_RESERVED_BYTE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |
| STAT_RESERVED_BYTE_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |
| STAT_RESERVED_BYTE_3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |
| STAT_RESERVED_BYTE_4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |
| STAT_RESERVED_BYTE_5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserviert für zusätzliche Informationen |

### RES_0X4800_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENLICHT_WBL_LED_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_0_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_1_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_2_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_3_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_4_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_5_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_6_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_7_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_LCI_8_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_SPECIAL_FUNCTION_LED_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_SST_LED_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |
| STAT_INNENLICHT_MSA_LED_PWM_WERT | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWM-Wert |

### RES_0X4910_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRDAUER_WERT | h | high | unsigned int | - | - | 10.0 | 60.0 | 0.0 | Akkumulierte Fahrzeit (Fahrten < 10 min werden verworfen) |
| STAT_FAHRZYKLEN_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Fahrzyklen > 10 min |
| STAT_SARAH_TASTER_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl SARAH Tastendrücke |
| STAT_SARAH_CONFIG_WERT | Counts | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der SARAH Konfigurationen |
| STAT_SARAH_CONFIG_DIREKT_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der SARAH Konfigurationen über Einstellungsmenu (nicht aus dem SARAH popup) |
| STAT_SARAH_TASTER_LANG_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der SARAH Tasten Langdrücke |
| STAT_SARAH_MODUS_MMI_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der SARAH Moduswechsel via MMI Bedienung |
| STAT_SARAH_MODUS_TASTER_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der SARAH Moduswechsel von Individual zu On oder umgekehrt via Taster Bedienung |
| STAT_LENKRAD_CONFIG_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Lenkrad Konfigurationen |
| STAT_GESCHWINDIGKEITS_ASSISTENT_CONFIG_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Geschwindigkeitsassistent Konfigurationen und der Geschwindigkeitsoffset Konfigurationen |
| STAT_SPURWECHSEL_ASSISTENT_CONFIG_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Spurwechselassistent Konfigurationen |
| STAT_ENGSTELLEN_ASSISTENT_CONFIG_WERT | Counts | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Engstellenassistent Konfigurationen |
| STAT_RESERVE1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |
| STAT_RESERVE2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0X4A00_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DAUER_WISCHZYKLUS_1_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer der letzten Wischzyklen (t_mittel)  |
| STAT_DAUER_WISCHZYKLUS_2_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer der letzten Wischzyklen (t_mittel)  |
| STAT_DAUER_WISCHZYKLUS_3_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer der letzten Wischzyklen (t_mittel)  |

### RES_0X4F15_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_MSA_AKTIV | 0-n | - | unsigned char | - | TAB_CA_TASTER_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand für den Eingang Taster der Motor-Start-Automatik.  Siehe Table TAB_CA_TASTER_DIGITAL_EINGANG. |

### RES_0X4F16_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SSTA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_HALL_SENSOR | - | - | - | Das Result enthält den aktuellen Zustand des Sensors SST A. |
| STAT_SSTB_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_HALL_SENSOR | - | - | - | Das Result enthält den aktuellen Zustand des Sensors SST B. |

### RES_0X4FA2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPORT_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last button mode of Sport world |
| STAT_COMFORT_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last button mode of Comfort world |
| STAT_ECOPRO_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last button mode of ECOPRO world |
| STAT_ADAPTIVE_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last button mode of Adaptive world |
| STAT_FES_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last selected mode |
| STAT_OFFROAD_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last selected Offroad mode |
| STAT_BATTERY_CONTROL_LAST_MODE | 0-n | high | unsigned char | - | TAB_FES_MODE | - | - | - | Last selected Battery Control mode |
| STAT_FES_SLEEPTIME_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Solange der FES Master nicht aktiv ist liefert der Diag Job die erwartete Relativzeit. Diese ist nur relevant, wenn der FESMaster noch nicht aktiv ist, da sie zur Überprüfung des Verhaltens bei Aktivierung des FesMaster notwendig ist (Default FES-Modus oder LastUserMode). Ist der FESMaster aktiv, werden die Werte jeweils durch die aktuellen Werte (Modus und Zeitstempel) ersetzt. |

### RES_0X5020_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_HECKKLAPPE_NR | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Frontklappe Kontakt. Siehe Table TAB_CA_DIGITAL_EINGANG. |

### RES_0X5021_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_HECKSCHEIBE_NR | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Heckscheibe Kontakt.   Siehe Table TAB_CA_DIGITAL_EINGANG. |

### RES_0X5022_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_VORRAST_NR | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des SCA Vorrst Kontakt.  Siehe Table TAB_CA_DIGITAL_EINGANG. |

### RES_0X5023_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_FRONTKLAPPE | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Frontklappe in den Codierung aktiviert ist. 0 = Nicht aktiv 1 = Aktiv |
| STAT_CODIERUNG_HECKKLAPPE | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Heckklappe in den Codierung aktiviert ist. 0 = Nicht aktiv 1 = Aktiv |
| STAT_CODIERUNG_HECKSCHEIBE | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Heckscheibe in den Codierung aktiviert ist. 0 = Nicht aktiv 1 = Aktiv |
| STAT_CODIERUNG_MOTORHAUBE | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Motorhaube in den Codierung aktiviert ist. 0 = Nicht aktiv 1 = Aktiv |
| STAT_CODIERUNG_SPLITDOORS | 0/1 | high | unsigned char | - | - | - | - | - | Das Ergebnis gibt zurück ob die Split Doors in den Codierung aktiviert sind. 0 = Nicht aktiv 1 = Aktiv |

### RES_0X5024_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_FA | 0-n | high | unsigned char | - | TAB_KONTAKT_TUER_HW | - | - | - | Das Ergebnis enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür vorne.  Siehe Table TAB_KONTAKT_TUER_HW |

### RES_0X5025_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_FAH | 0-n | high | unsigned char | - | TAB_KONTAKT_TUER_HW | - | - | - | Das Ergebnis enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür vorne.  Siehe Table TAB_KONTAKT_TUER_HW |

### RES_0X5026_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_BF | 0-n | high | unsigned char | - | TAB_KONTAKT_TUER_HW | - | - | - | Das Ergebnis enthält den aktuellen Zustand des HW-Eingang Türkontakt Beifahrertür vorne.  Siehe Table TAB_KONTAKT_TUER_HW |

### RES_0X5027_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_BFH | 0-n | high | unsigned char | - | TAB_KONTAKT_TUER_HW | - | - | - | Das Ergebnis enthält den aktuellen Zustand des HW-Eingang Türkontakt Beifahrertür hinten.  Siehe Table TAB_KONTAKT_TUER_HW |

### RES_0X5030_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_CENTERLOCK_AKTIV | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Eingangs Centerlock-Taster. Siehe Table TAB_CA_DIGITAL_EINGANG. |

### RES_0X5031_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FRONTKLAPPE_NR | 0-n | high | unsigned char | - | TAB_CA_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Frontklappe Taster.  Siehe Table TAB_CA_DIGITAL_EINGANG. |

### RES_0X5032_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKSCHEIBE_NR | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG | - | - | - | The Result contains the current state of the input for the rear window button. See Table TAB_CA_DIGITAL_EINGANG. |

### RES_0X5033_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKKLAPPE_AUSSEN_NR | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Heckklappe-Taster Außen. Siehe Table TAB_CA_DIGITAL_EINGANG. |

### RES_0X5034_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_HECKKLAPPE_OEFFNEN_INNEN_NR | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Eingangs für den Taster zum Entriegeln der Heckklappe Innen (TOEHKI). Siehe Table TAB_CA_DIGITAL_EINGANG. |

### RES_0X5035_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_SICHERN_HECKKL_AKTIV | 0-n | - | unsigned char | - | TAB_CA_DIGITAL_EINGANG | - | - | - | Das Result enthält den aktuellen Zustand des Eingangs für den Taster zum Zentralsichern der Heckklappe.  Siehe Table TAB_CA_DIGITAL_EINGANG. |

### RES_0X5050_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_SAMPLE_VERSION_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält Version der HW. |
| STAT_CA_HW_VARIANT | 0-n | high | signed int | - | TAB_CA_HW_VARIANT | - | - | - | Das Result enthält die HW-Variante für CA/CG. |
| STAT_CA_CAR_CONFIG | 0-n | high | unsigned char | - | TAB_CA_CAR_CONFIG | - | - | - | Das Result enthält den codierte CA-Fahrzeugtyp. |
| STAT_ANTENNA1_LOCATION | 0-n | high | signed int | - | TAB_CA_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 1. |
| STAT_ANTENNA2_LOCATION | 0-n | high | signed int | - | TAB_CA_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 2. |
| STAT_ANTENNA3_LOCATION | 0-n | high | signed int | - | TAB_CA_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 3. |
| STAT_ANTENNA4_LOCATION | 0-n | high | signed int | - | TAB_CA_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 4. |
| STAT_ANTENNA5_LOCATION | 0-n | high | signed int | - | TAB_CA_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 5. |
| STAT_ANTENNA6_LOCATION | 0-n | high | signed int | - | TAB_CA_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 6. |
| STAT_ANTENNA7_LOCATION | 0-n | high | signed int | - | TAB_CA_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 7. |
| STAT_ANTENNA8_LOCATION | 0-n | high | signed int | - | TAB_CA_ANTENNA_LOCATION | - | - | - | Das Result enthält den Verbauort der Antenne 8. |

### RES_0X5053_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CKT_KEY_RESULT_01 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 1 gefunden wurde. |
| STAT_CKT_KEY_RESULT_02 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 2 gefunden wurde. |
| STAT_CKT_KEY_RESULT_03 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 3 gefunden wurde. |
| STAT_CKT_KEY_RESULT_04 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 4 gefunden wurde. |
| STAT_CKT_KEY_RESULT_05 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 5 gefunden wurde. |
| STAT_CKT_KEY_RESULT_06 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 6 gefunden wurde. |
| STAT_CKT_KEY_RESULT_07 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 7 gefunden wurde. |
| STAT_CKT_KEY_RESULT_08 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 8 gefunden wurde. |
| STAT_CKT_KEY_RESULT_09 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 9 gefunden wurde. |
| STAT_CKT_KEY_RESULT_10 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 10 gefunden wurde. |
| STAT_CKT_KEY_RESULT_11 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 11 gefunden wurde. |
| STAT_CKT_KEY_RESULT_12 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 12 gefunden wurde. |
| STAT_CKT_KEY_RESULT_13 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 13 gefunden wurde. |
| STAT_CKT_KEY_RESULT_14 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 14 gefunden wurde. |
| STAT_CKT_KEY_RESULT_15 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 15 gefunden wurde. |
| STAT_CKT_KEY_RESULT_16 | 0-n | high | unsigned char | - | TAB_CKT_KEY_POS | - | - | - | Gibt an, in welche Position der Schlüssel 16 gefunden wurde. |

### RES_0X5054_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CA_ANT_1 | 0-n | high | unsigned char | - | TAB_CA_SCHWINGKREIS | - | - | - | Das Result enthält den Schwingkreis der Antenne Nr. 1 |
| STAT_CA_ANT_2 | 0-n | high | unsigned char | - | TAB_CA_SCHWINGKREIS | - | - | - | Das Result enthält den Schwingkreis der Antenne Nr. 2 |
| STAT_CA_ANT_3 | 0-n | high | unsigned char | - | TAB_CA_SCHWINGKREIS | - | - | - | Das Result enthält den Schwingkreis der Antenne Nr. 3 |
| STAT_CA_ANT_4 | 0-n | high | unsigned char | - | TAB_CA_SCHWINGKREIS | - | - | - | Das Result enthält den Schwingkreis der Antenne Nr. 4 |
| STAT_CA_ANT_5 | 0-n | high | unsigned char | - | TAB_CA_SCHWINGKREIS | - | - | - | Das Result enthält den Schwingkreis der Antenne Nr. 5 |
| STAT_CA_ANT_6 | 0-n | high | unsigned char | - | TAB_CA_SCHWINGKREIS | - | - | - | Das Result enthält den Schwingkreis der Antenne Nr. 6 |
| STAT_CA_ANT_7 | 0-n | high | unsigned char | - | TAB_CA_SCHWINGKREIS | - | - | - | Das Result enthält den Schwingkreis der Antenne Nr. 7 |
| STAT_CA_ANT_8 | 0-n | high | unsigned char | - | TAB_CA_SCHWINGKREIS | - | - | - | Das Result enthält den Schwingkreis der Antenne Nr. 8 |

### RES_0X5101_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALM_LAST_HW_WAKEUP_ID | 0-n | high | unsigned long | - | - | - | - | - | ALM_LAST_HW_WAKEUP_ID |
| STAT_ALM_LAST_SW_WAKEUP_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | - | - | - | ALM_LAST_SW_WAKEUP_ID |
| STAT_ALM_LAST_BUS_WAKEUP_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | - | - | - | ALM_LAST_BUS_WAKEUP_ID |
| STAT_ALM_LAST_RESET_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | - | - | - | ALM_LAST_RESET_ID |
| STAT_ALM_CAN_WAKEUP_ID | 0-n | high | unsigned int | - | - | - | - | - | ALM_CAN_WAKEUP_ID |
| STAT_RESERVED_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | RESERVED |

### RES_0X5107_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EM_SPIELSCHUTZ_ANZAHL_ERGEBNISSAETZE | 0-n | high | unsigned char | - | - | - | - | - | Gesamtanzahl der Ergebnissätze |
| STAT_SPIELSCHUTZ_ID | 0-n | high | unsigned char | - | TAB_ZSG_BF_WECK_GRUND | - | - | - | ID einer Funktion laut Liste der Weckgründe |
| STAT_WAKEUP_BLOCKIERT | 0-n | high | unsigned char | - | TAB_ZSG_STAT_WECKSPERRE | - | - | - | 0x00 = Wakeup nicht blockiert  0x01 = Wakeup blockiert Siehe Table TAB_ZSG_STAT_WECKSPRERRE |

### RES_0X5116_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HSM_INIT | 0-n | high | unsigned char | - | TAB_HSM_INIT | - | - | - | Status Initialisierung |
| STAT_HASH_KEY_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Initialisierungsdaten Key |
| STAT_HASH_APPL_DATA | DATA | high | data[16] | - | - | 1.0 | 1.0 | 0.0 | Initialisierungsdaten Applikation |

### RES_0X5120_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MAC_ADRESS_BYTE_0_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 0 |
| STAT_MAC_ADRESS_BYTE_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 1 |
| STAT_MAC_ADRESS_BYTE_2_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 2 |
| STAT_MAC_ADRESS_BYTE_3_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 3 |
| STAT_MAC_ADRESS_BYTE_4_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 4 |
| STAT_MAC_ADRESS_BYTE_5_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Byte 5 |

### RES_0X5200_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SA_OWNER_COUNTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zählerstand Smart Access Owner Counter |
| STAT_SA_OWNER_COUNTER_ACTIVE | 0/1 | high | unsigned char | - | - | - | - | - | Aktivierungszustand des Owner Counters 0x00: inaktiv 0x01: aktiv |
| STAT_SA_ACC_CHALL | 0/1 | high | unsigned char | - | - | - | - | - | Verfügbarkeit der SA Access Challenge 0x00: nicht vorhanden 0x01: vorhanden |

### RES_0X6004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Liest aktuellen Status des Thermomonitors |

### RES_0X6005_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | - | - | - | Liest aktuellen Status des Thermomonitors |

### RES_0X6006_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Liest aktuellen Status des Thermomonitors |

### RES_0X6007_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | FH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Liest aktuellen Status des Thermomonitors |

### RES_0X6030_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FREIGABE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest aktuellen Status der Fensterheberfreigabe Freigabe nicht aktiv 0x00 Freigabe aktiv 0x01 |
| STAT_FH_PANIKFREIGABE_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liest aktuellen Status der Panikfreigabe Panik-Freigabe nicht aktiv 0x00 Panik-Freigabe aktiv 0x01 |

### RES_0X6031_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_KURZHUB_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Kurzhubfunktion gesperrt 1= Kurzhubfunktion freigeschaltet |

### RES_0XA10D_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZEN_KUEHLEN_LINKS | + | + | + | 0-n | high | unsigned char | - | TAB_THCH | - | - | - | Status des linken Thermo-Cupholders |
| STAT_THCH_TEMP_LINKS_WERT | + | + | + | ° | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liefert die aktuelle Temperatur des linken Thermocupholder |
| STAT_HEIZEN_KUEHLEN_RECHTS | + | + | + | 0-n | high | unsigned char | - | TAB_THCH | - | - | - | Status des rechten Thermo-Cupholders. |
| STAT_THCH_TEMP_RECHTS_WERT | + | + | + | ° | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liefert die aktuelle Temperatur des rechten Thermocupholders |

### RES_0XA10E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CORONA_LED_ROT_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der roten Corona-LED links |
| STAT_CORONA_LED_ROT_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der roten Corona-LED rechts |
| STAT_CORONA_LED_GRUEN_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der grünen Corona-LED links |
| STAT_CORONA_LED_GRUEN_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der grünen Corona-LED rechts |
| STAT_CORONA_LED_BLAU_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der blauen Corona-LED links |
| STAT_CORONA_LED_BLAU_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der bleuen Corona-LED rechts |
| STAT_TASTER_LED_KUEHLUNG_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der kühlen Taster-LED links |
| STAT_TASTER_LED_KUEHLUNG_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der kühlen Taster-LED rechts |
| STAT_TASTER_LED_HEIZUNG_LINKS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der heizen Taster-LED links |
| STAT_TASTER_LED_HEIZUNG_RECHTS | - | - | + | 0-n | high | unsigned char | - | TAB_THCH_LED | - | - | - | Status der heizen Taster-LED rechts |

### RES_0XA17B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus. Siehe Table TAB_FH_SHD_ESH_STATUS_ROUTINE. |
| STAT_FENSTERHEBER_FA_NORMIERUNG | + | - | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | - | - | - | Zuordnung. Siehe Table TAB_FH_SHD_EINLERNVORGANG |
| STAT_FENSTERHEBER_BF_NORMIERUNG | + | - | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | - | - | - | Zuordnung. Siehe Table TAB_FH_SHD_EINLERNVORGANG |
| STAT_FENSTERHEBER_FAH_NORMIERUNG | + | - | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | - | - | - | Zuordnung. Siehe Table TAB_FH_SHD_EINLERNVORGANG |
| STAT_FENSTERHEBER_BFH_NORMIERUNG | + | - | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | - | - | - | Zuordnung. Siehe Table TAB_FH_SHD_EINLERNVORGANG |
| STAT_FA_NORMIERUNG | - | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | - | - | - | Zuordnung. Siehe Table TAB_FH_SHD_NORMIERUNG |
| STAT_BF_NORMIERUNG | - | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | - | - | - | Zuordnung. Siehe Table TAB_FH_SHD_NORMIERUNG |
| STAT_FAH_NORMIERUNG | - | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | - | - | - | Zuordnung. Siehe Table TAB_FH_SHD_NORMIERUNG |
| STAT_BFH_NORMIERUNG | - | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | - | - | - | Zuordnung. Siehe Table TAB_FH_SHD_NORMIERUNG |

### RES_0XA17E_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus |

### RES_0XA17F_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus |

### RES_0XA192_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WCA_VERBAUT | - | - | + | 0-n | high | unsigned char | - | TAB_SENSOR_VERBAUT | - | - | - | Dieses Ergebnis liefert zurück, ob die WCA verbaut ist oder nicht. Hinweis: Verbauzustand wird anhand der internen ZSG-Codierung und der erfolgreichen Kommunikation mit der WCA ermittelt. |
| STAT_VERBAUORT | - | - | + | 0-n | high | unsigned int | - | TAB_ZSG_SENSOR_VERBAUORT | - | - | - | Sensor-Verbauort. Wert identisch zu SENSOREN_IDENT_LESEN-Block für WCA. Hinweis: Wenn WCA nicht antwortet, wird Statusanfrage mit Signal ungültig (0xFFFF) beantwortet. |
| STAT_SACHNUMMER_TEXT | - | - | + | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Die Sachnummer wird intern mittels der EDIABAS-Funktion BRstandard decodiert. Als Eingabe dient das 6-Byte-Signal RESP_WCA_ITN aus der Botschaft WCA_DIAG. Es werden ggf. führende Nullen ergänzt. Die Sachnummer muss identisch zum SENSOREN_IDENT_LESEN-Block für WCA sein. Hinweis: Wenn WCA nicht antwortet, wird Statusanfrage mit 000...000 beantwortet. |
| STAT_TEMPERATUR_WERT | - | - | + | °C | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Temperatur Hinweis: Wenn WCA nicht antwortet, wird Statusanfrage mit Signal ungültig (255) beantwortet. Wertebereich: 1 - 98 = Temperatur / 255 = Signal ungültig  |
| STAT_WCA_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_WCA_STATUS | - | - | - | Das Result enthält den aktuellen Status als Text Hinweise: 1.Wenn WCA nicht antwortet, wird Statusanfrage mit Signal ungültig (255) beantwortet. 2.Der Inhalt wird aus dem Signal ST_WCA der CAN-Botschaft WCA_ST (761h) ermittelt |
| STAT_ANT_STATUS | - | - | + | 0-n | high | unsigned char | - | TAB_WCA_ANT_STATUS | - | - | - | Das Result enthält den Antennenstatus. |
| STAT_WIRKUNGSGRAD_WERT | - | - | + | % | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Wirkungsgrad der Energieübertragung Hinweis: Wenn WCA nicht antwortet, wird Statusanfrage mit Signal ungültig (255) beantwortet. |

### RES_0XA322_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SELBSTTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_SPIEGELSELBSTTEST | 1.0 | 1.0 | 0.0 | Status Spiegeltest |
| STAT_SELBSTTEST_FC | - | - | + | 0-n | - | signed char | - | TAB_SPIEGELSELBSTTEST_INTERN | - | - | - | Ausgabe interner Fehler |

### RES_0XA3B7_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGENSENSOR_INIT_VORGANG_NR | - | - | + | 0-n | - | unsigned char | - | TAB_RLS_INIT | 1.0 | 1.0 | 0.0 | Status Initialisierungsvorgang Regensensor |

### RES_0XA533_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KURZSCHLUSSABSCHALTUNG_RESET | + | - | - | 0-n | high | unsigned char | - | TAB_LICHT_KURZSCHLUSSABSCHLATUNG_RESET | - | - | - | Ergebniss des Status des Rücksetzvorgangs |

### RES_0XA5AF_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_FA | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Fahrerseite Vorne codiert oder nicht.  Siehe table TAB_LIN_CODIERUNG. |
| STAT_IFE_FAH | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Fahrerseite Hinten codiert oder nicht. Siehe table TAB_LIN_CODIERUNG. |
| STAT_IFE_BF | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Beifahrerseite Vorne codiert oder nicht.  Siehe table TAB_LIN_CODIERUNG. |
| STAT_IFE_BFH | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Beifahrerseite Hinten codiert oder nicht.  Siehe table TAB_LIN_CODIERUNG. |
| STAT_RESERVE_0 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Bytes für zusätzliche IFE. |
| STAT_RESERVE_1 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Bytes für zusätzliche IFE. |
| STAT_RESERVE_2 | - | - | + | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Bytes für zusätzliche IFE. |

### RES_0XA5B0_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LIN_ROUTINE_IFE | - | - | + | 0-n | high | unsigned char | - | TAB_LIN_CODIERUNG | - | - | - | Das Ergebnis liefert zurück, ob die Routine erfolgreich durchgeführt wurde. Es überprüft insbesonders die Integrierte Fensterheberelektronik und die Kodierparameter. |
| STAT_RESERVE_0 | - | - | + | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | - | - | + | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | - | - | + | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XA5C0_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UPDATE | - | - | + | 0-n | high | unsigned char | - | TAB_SDS_UPDATE | - | - | - | Das Result gibt den Status des Updatevorgangs der Schlüsseldaten wieder. |

### RES_0XA5C1_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DATEN_BLOCK_WERT_DATA | + | - | - | DATA | - | data[32] | - | - | 1.0 | 1.0 | 0.0 | Das Ergebnis enthält den ausgelesen Datenblock mit den Schlüsseldaten des Service. Hinweise: - 32-Byte hex-Werte. |

### RES_0XA610_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSE_WERT | + | - | - | mA | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Wert des Leuchtmittels |

### RES_0XA621_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LESELICHT_KONFIGURIERT | + | - | - | 0/1 | - | unsigned char | - | - | - | - | - | Liefert zurück ob das rechte oder linke Leselicht vorhanden ist:  0= Leselicht nicht vorhanden;  1= Leselicht vorhanden |
| STAT_INNENLICHT_KONFIGURIERT | + | - | - | 0/1 | - | unsigned char | - | - | - | - | - | 0= Innenlicht nicht vorhanden;  1= Innenlicht vorhanden |
| STAT_INNENLICHT | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE, Innenlicht:  0 : OFF; 1 : ON |
| STAT_LESELICHT_LINKS | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE, Status Leselicht links:  0=OFF oder nicht verbaut; 1=ON |
| STAT_LESELICHT_RECHTS | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE, Status Leselicht rechts:  0=OFF oder nicht verbaut; 1=ON |
| STAT_WELCOMELIGHT | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE, Status Welcomelight:  0=OFF oder nicht verbaut; 1=ON |
| STAT_AMBIENTELICHT | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE, Status Ambientelicht: 0=OFF oder nicht verbaut; 1=ON |
| STAT_TASTER_LESELICHT_LINKS | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE, Status Taster Leselicht links: 0: OFF; 1: ON |
| STAT_TASTER_LESELICHT_RECHTS | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | LIN Status-Rückmeldung ILE, Status Taster Leselicht rechts:  0: OFF; 1: ON |
| STAT_RESERVE_0 | + | - | - | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | + | - | - | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | + | - | - | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XAA80_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SMO_AUSFUEHRUNGSSTATUS | - | - | + | 0-n | high | unsigned char | - | TAB_SMO_AUSFUEHRUNGSSTATUS | - | - | - | Das Result gibt an, ob die angeforderte Aktion erfolgreich durchgeführt wurde oder ein Fehler aufgetreten ist. Siehe Table TAB_SMO_AUSFUEHRUNGSSTATUS |

### RES_0XAC53_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMM_TEST_OKAY | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_CA_KOMM_TEST | - | - | - | Das Result enthält das Ergebnis des Kommunikationstests. Siehe Table TAB_CAS_CA_KOMM_TEST. |

### RES_0XAC54_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CA_SCHL_NUM1 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 1. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM2 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 2. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM3 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 3. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM4 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 4. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM5 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 5. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM6 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 6. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM7 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 7. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |
| STAT_CA_SCHL_NUM8 | + | - | - | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | 1.0 | 1.0 | 0.0 | Das Result enthält die Schlüssel-Nummer (0-19) des gefundenen Schlüssels Nr. 8. Hinweise: - 0-19= Nummer des Schlüssels in der Transpondertabelle. - 255= kein weiterer Schlüssel gefunden. - ACHTUNG: nicht zu verwechseln mit CA-Nummer (0-7). |

### RES_0XAC55_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CA_ANTENNEN_TEST_OKAY | + | - | - | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_TEST | - | - | - | Das Result enthält das Ergebnis des Antennentests. Siehe Table TAB_CA_ANTENNEN_TEST. |
| STAT_CA_ANTENNEN_VERBAUORT_1 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 1. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_2 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 2. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_3 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 3. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_4 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 4. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_5 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 5. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_6 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 6. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_7 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 7. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_VERBAUORT_8 | - | - | + | 0-n | - | unsigned char | - | TAB_CA_ANTENNEN_RES | - | - | - | Das Result enthält das Verbauort der 8. Antenne der Tabelle. |
| STAT_CA_ANTENNEN_STATUS_1 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_2 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_3 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_4 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_5 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_6 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_7 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |
| STAT_CA_ANTENNEN_STATUS_8 | - | - | + | 0-n | high | unsigned char | - | TAB_CA_ANTENNEN_STATUS | - | - | - | Das Result enthält das Ergebnis des Antennentests. |

### RES_0XAC57_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_STATUS | + | - | - | 0-n | - | unsigned char | - | TAB_ZV_ZUSTAND | - | - | - | Das Ergebnis enthält den aktuell auf den Bus gesendeten Zentralverriegelungsstatus.  Hinweise: - Dieser wird als globaler ZV-Zustand auf den CAN-Bus gesendet (Signal ST_CLSY). - Die Zuordnung erfolgt gemäß Tabelle TAB_ZV_ZUSTAND. |

### RES_0XAC58_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FBD_EMPFAENGER_INIT | + | - | - | 0-n | - | unsigned char | - | TAB_CAS_FBD_EMPFAENGER_INIT_STATUS | - | - | - | Initialiserungsstatus des FBD Empfängers. Siehe Table TAB_CAS_FBD_EMPFAENGER_INIT_STATUS. |

### RES_0XAC60_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSFUEHRUNGSSTATUS | + | - | - | 0-n | high | unsigned char | - | TAB_AUSFUEHRUNGSSTATUS | - | - | - | Das Result enthält den Ausführungsstatus des Jobs: Siehe Table TAB_AUSFUEHRUNGSSTATUS |

### RES_0XAFFC_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SENSOR_VERBAUORT_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Verbauort des Sensors table VerbauortTabelle ORTTEXT |
| STAT_SENSOR_VERBAUORT_NR_WERT | + | - | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Verbauort-Nummer des Sensors |
| STAT_SENSOR_BMW_NR_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | BMW-Teilenummer des Sensors |
| STAT_SENSOR_PART_NR_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Teilenummer des Sensors optional wenn SENSOR_BMW_NR gueltig wenn Teilenummer vom Sensor nicht verfuegbar dann '--' |
| STAT_SENSOR_LIN_2_0_FORMAT_WERT | + | - | - | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | 1: Die optionalen Daten des Sensors (Hersteller, Seriennummer, ...) werden in LIN_2_Format geliefert 0: Optionale Daten nicht im LIN_2_Format (nur Defaultwerte werden ausgegeben) |
| STAT_SENSOR_HERSTELLER_NR_WERT | + | - | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Lieferantennummer des Herstellers wenn Hersteller-Nummer nicht verfuegbar, dann 0 |
| STAT_SENSOR_HERSTELLER_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Textausgabe Lieferant wenn Lieferant nicht verfuegbar, dann 'Information nicht verfuegbar' |
| STAT_SENSOR_FUNKTIONS_NR_WERT | + | - | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Funktionsnummer des Sensors wenn Funktions-Nummer nicht verfuegbar, dann 0 |
| STAT_SENSOR_VARIANTEN_NR_WERT | + | - | - | - | high | signed long | - | - | 1.0 | 1.0 | 0.0 | Variantennummer des Sensors wenn Varianten-Nummer nicht verfuegbar, dann 0 |
| STAT_SENSOR_PROD_DATUM_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Produnktionsdatum (DD.MM.YY) des Sensors wenn Produktions-Datum nicht verfuegbar, dann '--'; |
| STAT_SENSOR_SERIEN_NR_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Seriennummer des Sensors wenn Serien-Nummer nicht verfuegbar, dann '--'; |
| STAT_SENSOR_SW_RELEASE_NR_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Softwarestand des Sensors wenn Softwarestand nicht verfuegbar, dann '--' |
| STAT_SENSOR_HW_RELEASE_NR_TEXT | + | - | - | TEXT | high | string | - | - | 1.0 | 1.0 | 0.0 | Hardwarestand des Sensors wenn Hardwarestand nicht verfuegbar, dann '--'; |

### RES_0XAFFD_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE_STATUS | + | + | + | 0-n | high | unsigned char | - | TAB_ROUTINE_STATUS_SENSOR_IDENT_DATEN_TRIGGER | - | - | - | Routine-Status |

### RES_0XD074_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRADHEIZUNG | 0/1 | - | signed char | - | - | - | - | - | Liefert ob die Lenkradheizung ein- oder ausgeschaltet ist: 0: Lenkradheizung OFF;  1: Lenkradheizung ON |
| STAT_LENKRADHEIZUNG_LED | 0/1 | - | signed char | - | - | - | - | - | Liefert ob die LED der Lenkradheizung ein- oder ausgeschaltet ist: 0: Lenkradheizung Status LED OFF;  1: Lenkradheizung Status LED ON |
| STAT_LENKRADHEIZUNG_STROM_WERT | A | - | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Stromaufnahme Lenkradheizung. |
| STAT_LENKRADHEIZUNG_AKTUATOR | 0-n | - | signed char | - | TAB_LIMIT | - | - | - | Zustand des Aktuators für die Lenkradheizung.  Siehe Table TAB_LIMIT |
| STAT_VORHANDEN_LENKRADHEIZUNG_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 1: Lenkradheizung codiert |

### RES_0XD089_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELSV_POS_HOEHE_WERT | Digit | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Realtivwert vertikale Achse |
| STAT_ELSV_POS_LAENGE_WERT | Digit | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktueller Realtivwert horizontale Achse |
| STAT_ELSV_BEWEGUNG_OBEN | 0/1 | - | signed char | - | - | - | - | - | 0: eLSV fährt nicht nach oben;  1: eLSV fährt nach oben |
| STAT_ELSV_BEWEGUNG_UNTEN | 0/1 | - | signed char | - | - | - | - | - | 0: eLSV fährt nicht nach unten;  1: eLSV fährt nach unten |
| STAT_ELSV_BEWEGUNG_EINGEFAHREN | 0/1 | - | signed char | - | - | - | - | - | 0: eLSV fährt nicht ein (vorne);  1: eLSV fährt ein (vorne) |
| STAT_ELSV_BEWEGUNG_AUSGEFAHREN | 0/1 | - | signed char | - | - | - | - | - | 0: eLSV fährt nicht aus (hinten)  1: eLSV fährt aus (hinten) |
| STAT_ELSV_SOFTSTOP_OBEN | 0/1 | - | signed char | - | - | - | - | - | 0: eLSV im Verfahrbereichsfenster  1: Softstop oben erreicht |
| STAT_ELSV_SOFTSTOP_UNTEN | 0/1 | - | signed char | - | - | - | - | - | 0: eLSV im Verfahrbereichsfenster  1: Softstop unten erreicht |
| STAT_ELSV_SOFTSTOP_EINGEFAHREN | 0/1 | - | signed char | - | - | - | - | - | 0: eLSV im Verfahrbereichsfenster  1: Softstop eingefahren erreicht |
| STAT_ELSV_SOFTSTOP_AUSGEFAHREN | 0/1 | - | signed char | - | - | - | - | - | 0: eLSV im Verfahrbereichsfenster;  1: Softstop ausgefahren erreicht |
| STAT_ELSV_NORMIERUNG | 0-n | high | signed char | - | TAB_ELSV_NORMIERUNG | - | - | - | Status ELSV Normierung. Siehe TAB_ELSV_NORMIERUNG. |

### RES_0XD0F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KM_STAND_1_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_ENBN_AEP_STATUS_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Energie Powermanagement |
| STAT_U_BATT_ANFANG_1_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versorgungsspannung 3 Minuten nach PWF!= (Fahrer oder Fahrbereitschaft herstellen oder Fahrbereitschaft beenden) aus |
| STAT_DAUER_1_WERT | min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer der Lichtaktivität im Stand |
| STAT_LICHT_1_NR | 0-n | - | unsigned char | - | TAB_LICHT_ENERGIE_BN | - | - | - | Beteiligte Beleuchtung |
| STAT_ABSCHALTUNG_LICHT_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltung Licht bei SFG (fand eine Abschaltung nach Ablauf 12h und Erreichen der Startfähigkeitsgrenze statt). |
| STAT_ABSCHALTVERHINDERER_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltverhinderergrund Licht (Erreichen obere Startfähigkeitsgrenze und 12h Timer nicht abgelaufen, kein Öffnen der Fahrertür, weitere tbd). |
| STAT_PWF_STATUS_1_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWF-Zustand (zum Zeitpunkt des Eintrags/Snapshots). |
| STAT_KM_STAND_2_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand |
| STAT_ENBN_AEP_STATUS_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Energie Powermanagement |
| STAT_U_BATT_ANFANG_2_WERT | V | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Versorgungsspannung 3 Minuten nach PWF!= (Fahrer oder Fahrbereitschaft herstellen oder Fahrbereitschaft beenden) |
| STAT_DAUER_2_WERT | min | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer der Lichtaktivität im Stand |
| STAT_LICHT_2_NR | 0-n | - | unsigned char | - | TAB_LICHT_ENERGIE_BN | - | - | - | Beteiligte Beleuchtung |
| STAT_ABSCHALTUNG_LICHT_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltung Licht bei SFG (fand eine Abschaltung nach Ablauf 12h und Erreichen der Startfähigkeitsgrenze statt). |
| STAT_ABSCHALTVERHINDERER_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Abschaltverhinderergrund Licht (Erreichen obere Startfähigkeitsgrenze und 12h Timer nicht abgelaufen, kein Öffnen der Fahrertür, weitere tbd). |
| STAT_PWF_STATUS_2_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PWF-Zustand (zum Zeitpunkt des Eintrags/Snapshots). |

### RES_0XD188_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SCHALTERBLOCK_TUER_TASTER_FA_FA | 0-n | - | unsigned char | - | TAB_FENSTERHEBER_VERFAHREN | - | - | - | Fensterheber Fahrerseite (Tastenblock): Taster für Fahrerseitefensterheber. Siehe Table TAB_FENSTERHEBER_VERFAHREN. |
| STAT_SCHALTERBLOCK_TUER_TASTER_FA_BF | 0-n | - | unsigned char | - | TAB_FENSTERHEBER_VERFAHREN | - | - | - | Fensterheber Fahrerseite (Tastenblock): Taster für Beifahrerseitefensterheber. Siehe Table TAB_FENSTERHEBER_VERFAHREN. |
| STAT_SCHALTERBLOCK_TUER_TASTER_FA_FAH | 0-n | - | unsigned char | - | TAB_FENSTERHEBER_VERFAHREN | - | - | - | Fensterheber Fahrerseite (Tastenblock): Taster für den hinteren Fahrerseitefensterheber. Siehe Table TAB_FENSTERHEBER_VERFAHREN. |
| STAT_SCHALTERBLOCK_TUER_TASTER_FA_BFH | 0-n | - | unsigned char | - | TAB_FENSTERHEBER_VERFAHREN | - | - | - | Fensterheber Fahrerseite (Tastenblock): Taster für den hinteren Fahrerseitefensterheber. Siehe Table TAB_FENSTERHEBER_VERFAHREN. |
| STAT_SCHALTERBLOCK_TUER_TASTER_FA_HS | 0-n | - | unsigned char | - | TAB_FENSTERHEBER_VERFAHREN | - | - | - | Fensterheber Fahrerseite (Tastenblock): Taster für Heckscheibe. Siehe Table TAB_FENSTERHEBER_VERFAHREN. |
| STAT_TASTER_FA_RESERVE | 0/1 | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD18C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KISI_TASTER_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster Kindersicherung nicht gedrückt 1: Taster Kindersicherung gedrückt |

### RES_0XD1A7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FA_INIT | 0-n | - | unsigned char | - | TAB_FH_INIT | - | - | - | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_FA_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | - | - | - | Aktuelle Bewegungsrichtung |
| STAT_FH_FA_POSITION | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_FA_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_FA_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_FA_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_FA_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_FA_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_FA_LAGE | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | - | - | - | 0xFF: Wert von Fensterheber nicht belegt! |
| STAT_FH_FA_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | - | - | - | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_FA_RESERVE_1_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Platzhalter |
| STAT_FH_FA_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve |

### RES_0XD1A8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BF_INIT | 0-n | - | unsigned char | - | TAB_FH_INIT | - | - | - | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_BF_BEWEGUNG | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | - | - | - | Aktuelle Bewegungsrichtung |
| STAT_FH_BF_POSITION | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_BF_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_BF_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_BF_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_BF_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_BF_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_BF_LAGE | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | - | - | - | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_BF_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_BF_RESERVE_1_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Platzhalter |
| STAT_FH_BF_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve |

### RES_0XD1A9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FAH_INIT | 0-n | - | unsigned char | - | TAB_FH_INIT | - | - | - | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_FAH_BEWEGUNG | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | - | - | - | Aktuelle Bewegungsrichtung |
| STAT_FH_FAH_POSITION | 0-n | - | unsigned char | - | TAB_FH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_FAH_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_FAH_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_FAH_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_FAH_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_FAH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_FAH_LAGE | 0-n | - | unsigned char | - | TAB_SHD_FH_LAGE_NR | - | - | - | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_FAH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_FAH_RESERVE_1_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Platzhalter |
| STAT_FH_FAH_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve |

### RES_0XD1AA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BFH_INIT | 0-n | - | unsigned char | - | TAB_FH_INIT | - | - | - | 0x01 - Fensterheber INIT vollständig IO 0x02 - 0x08 Ein oder mehrere Fehler sind aufgetreten |
| STAT_FH_BFH_BEWEGUNG | 0-n | - | unsigned char | - | TAB_FH_BEWEGUNG | - | - | - | Aktuelle Bewegungsrichtung |
| STAT_FH_BFH_POSITION | 0-n | - | unsigned char | - | TAB_FH_POSITION | - | - | - | Aktuelle Position des Fensterhebers |
| STAT_FH_BFH_POSITION_HALL_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Hall-Pulsen (0 bedeutet komplett geschlossen) |
| STAT_FH_BFH_POSITION_HALL_MAX_WERT | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Hall-Pulsen |
| STAT_FH_BFH_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Fensterheber-Position in Millimeter (0 bedeutet komplett geschlossen) |
| STAT_FH_BFH_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Fensterheber-Position in Millimeter |
| STAT_FH_BFH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg |
| STAT_FH_BFH_LAGE | 0-n | - | unsigned char | - | TAB_SHD_FH_LAGE_NR | - | - | - | 0xFF: Wert vom Fensterheber nicht belegt! |
| STAT_FH_BFH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. |
| STAT_FH_BFH_RESERVE_1_DATA | DATA | - | data[1] | - | - | 1.0 | 1.0 | 0.0 | Platzhalter |
| STAT_FH_BFH_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve |

### RES_0XD1B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FA_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | - | - | - | Status Motortemperatur |
| STAT_FH_FA_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_FA_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | - | - | - | Lieferant MT |
| STAT_FH_FA_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_FA_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_FA_EEPROM_PRUEFSUMME | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | - | - | - | Status EEPROM Checksumme |
| STAT_FH_FA_POSITION_DETAIL | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | - | - | - | Status Fensterposition |
| STAT_FH_FA_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_WACHHALTEN | - | - | - | Status Einschlaf-Verhinderung |
| STAT_FH_FA_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_FA_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_FA_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | - | - | - | Status Aktivierung Temperaturüberwachung |
| STAT_FH_FA_EKS_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Status Aktivierung EKS (Einklemmschutz) |
| STAT_FH_FA_RESERVE_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Platzhalter |
| STAT_FH_FA_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BF_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | - | - | - | Status Motortemperatur |
| STAT_FH_BF_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_BF_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | - | - | - | Lieferant MT |
| STAT_FH_BF_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_BF_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_BF_EEPROM_PRUEFSUMME | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | - | - | - | Status EEPROM Checksumme |
| STAT_FH_BF_POSITION_DETAIL | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | - | - | - | Status Fensterposition |
| STAT_FH_BF_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_WACHHALTEN | - | - | - | Status Einschlaf-Verhinderung |
| STAT_FH_BF_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_BF_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_BF_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | - | - | - | Status Aktivierung Temperaturüberwachung |
| STAT_FH_BF_EKS_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Status Aktivierung EKS (Einklemmschutz ) |
| STAT_FH_BF_RESERVE_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Platzhalter |
| STAT_FH_BF_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_FAH_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | 1.0 | 1.0 | 0.0 | Status Motortemperatur |
| STAT_FH_FAH_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_FAH_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant MT |
| STAT_FH_FAH_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_FAH_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_FAH_EEPROM_PRUEFSUMME | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | - | - | - | Status EEPROM Checksumme |
| STAT_FH_FAH_POSITION_DETAIL | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | - | - | - | Status Fensterposition |
| STAT_FH_FAH_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_WACHHALTEN | - | - | - | Status Einschlaf-Verhinderung |
| STAT_FH_FAH_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_FAH_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_FAH_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_FAH_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_FAH_RESERVE_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Platzhalter |
| STAT_FH_FAH_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1B8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FH_BFH_MOTORTEMPERATUR | 0-n | - | unsigned char | - | TAB_FH_MOTORTEMPERATUR | 1.0 | 1.0 | 0.0 | Status Motortemperatur |
| STAT_FH_BFH_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Fahrzeugaussentemperatur (über CAN) |
| STAT_FH_BFH_MT_LIEFERANT | 0-n | - | unsigned char | - | TAB_FH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant MT |
| STAT_FH_BFH_MT_SW_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Versionsnummer |
| STAT_FH_BFH_MT_PARAMETER_VERSION_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Beschreibung: Parameter-Versionsinfo |
| STAT_FH_BFH_EEPROM_PRUEFSUMME | 0-n | - | unsigned char | - | TAB_FH_STAT_EEPROM | - | - | - | Status EEPROM Checksumme |
| STAT_FH_BFH_POSITION_DETAIL | 0-n | - | unsigned char | - | TAB_FH_FENSTER_GS | - | - | - | Status Fensterposition |
| STAT_FH_BFH_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_WACHHALTEN | 1.0 | 1.0 | 0.0 | Status Einschlaf-Verhinderung |
| STAT_FH_BFH_FZG_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit über CAN |
| STAT_FH_BFH_RELATIVZEIT_WERT | s | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_FH_BFH_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung Temperaturüberwachung |
| STAT_FH_BFH_EKS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Aktivierung EKS |
| STAT_FH_BFH_RESERVE_1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Platzhalter |
| STAT_FH_BFH_RESERVE_DATA | DATA | - | data[3] | - | - | 1.0 | 1.0 | 0.0 | Reserve für Erweiterungen |

### RES_0XD1CA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZMEMORY_FA | 0-n | high | unsigned char | - | TAB_SITZMEMORY_TASTER | - | - | - | Übermittelter Signalwert für Memory-Taster |
| STAT_SITZMEMORY_BF | 0-n | high | unsigned char | - | TAB_SITZMEMORY_TASTER | - | - | - | Übermittelter Signalwert für Memory-Taster |
| STAT_SITZMEMORY_FAH | 0-n | high | unsigned char | - | TAB_SITZMEMORY_TASTER | - | - | - | Übermittelter Signalwert für Memory-Taster |
| STAT_SITZMEMORY_BFH | 0-n | high | unsigned char | - | TAB_SITZMEMORY_TASTER | - | - | - | Übermittelter Signalwert für Memory-Taster |
| STAT_MASSAGE_FA | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Übermittelter Signalwert für MASSAGE-Taster |
| STAT_MASSAGE_BF | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Übermittelter Signalwert für MASSAGE-Taster |
| STAT_MASSAGE_FAH | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Übermittelter Signalwert für MASSAGE-Taster |
| STAT_MASSAGE_BFH | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Übermittelter Signalwert für MASSAGE-Taster |
| STAT_FERNBEDIENUNG_FA | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Signalwert für Fernbedienungstaste-Taste an der Fahrertür |
| STAT_RESET_TASTE_BF | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Signalwert für Reset-Taste an BFT |
| STAT_SCHLAFPOSITION_TASTE_BFTH | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Signalwert der Taste Schlafposition an der Beifahrertür Fond |
| STAT_SITZPOSITION_TASTE_BFTH | 0-n | high | unsigned char | - | TAB_SITZEXT_TASTER | - | - | - | Signalwert für Fernbedienungstaste-Taste an der Fahrertür |

### RES_0XD1CB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZEXT_VORNE_VORHANDEN | 0-n | high | unsigned char | - | TAB_SITZEXT_VORHANDEN | - | - | - | SB_SitzExt vorhanden für Fahrerseite und Beifahrerseite. Siehe Table TAB_SITZEXT_VORHANDEN |
| STAT_SITZEXT_HINTEN_VORHANDEN | 0-n | high | unsigned char | - | TAB_SITZEXT_HINTEN_VORHANDEN | - | - | - | SB_SitzExt vorhanden für Fahrerseite hinten und Beifahrersite hinten.  Siehe Table TAB_SITZEXT_HINTEN_VORHANDEN |

### RES_0XD1F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_FA_SW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute SW-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FA_HW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Hardware-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FA_CD_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Codierdaten-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FA_SERIAL_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die Seriennummer der IFE zurück. [0.. 0xFFFFFFFE]: Seriennummer |
| STAT_IFE_FA_EKS_SUPPLIER_WERT | HEX | high | unsigned char | - | - | - | - | - | Gibt den Hersteller der IFE zurück. [0.. 0xFF]: EKS-Supplier |

### RES_0XD1F2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_BF_SW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute SW-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BF_HW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Hardware-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BF_CD_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Codierdaten-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BF_SERIAL_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die Seriennummer der IFE zurück. [0.. 0xFFFFFFFE]: Seriennummer |
| STAT_IFE_BF_EKS_SUPPLIER_WERT | HEX | high | unsigned char | - | - | - | - | - | Gibt den Hersteller der IFE zurück. [0.. 0xFF]: EKS-Supplier |

### RES_0XD1F3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_FAH_SW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute SW-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FAH_HW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Hardware-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FAH_CD_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Codierdaten-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_FAH_SERIAL_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die Seriennummer der IFE zurück. [0.. 0xFFFFFFFE]: Seriennummer |
| STAT_IFE_FAH_EKS_SUPPLIER_WERT | HEX | high | unsigned char | - | - | - | - | - | Gibt den Hersteller der IFE zurück. [0.. 0xFF]: EKS-Supplier |

### RES_0XD1F4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IFE_BFH_SW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute SW-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BFH_HW_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Hardware-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BFH_CD_VERSION_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die in der IFE verbaute Codierdaten-Version aus. Byte 0: [0.. 0x3E]: Major-Version               [0x3F]: ungültig Byte 1 : [0..0x3F]: Minor-Version Byte 2: [0..0xFF]: Patch-Level  |
| STAT_IFE_BFH_SERIAL_NUMBER_WERT | HEX | high | unsigned long | - | - | - | - | - | Gibt die Seriennummer der IFE zurück. [0.. 0xFFFFFFFE]: Seriennummer |
| STAT_IFE_BFH_EKS_SUPPLIER_WERT | HEX | high | unsigned char | - | - | - | - | - | Gibt den Hersteller der IFE zurück. [0.. 0xFF]: EKS-Supplier |

### RES_0XD220_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKSPOILER_TASTER | 0-n | high | unsigned char | - | TAB_ROLLO_VERFAHREN | - | - | - | Status Taster Heckspoiler |

### RES_0XD25D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LICHTSPERRE_AKTIV | 0-n | high | unsigned char | - | TAB_LICHT_MONTAGESPERRE | - | - | - | Rückgabewert, ob die Lichtsperre aktiv ist. Siehe Table TAB_LICHT_MONTAGESPERRE |

### RES_0XD26D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_M1_EIN | 0-n | high | unsigned char | - | TAB_LENKRAD_M_TASTER | - | - | - | Zustand der M-spezifischen Taste M1. Siehe Table TAB_LENKRAD_M_TASTER |
| STAT_TASTER_M2_EIN | 0-n | high | unsigned char | - | TAB_LENKRAD_M_TASTER | - | - | - | Zustand der M-spezifischen Taste M2.  Siehe Table TAB_LENKRAD_M_TASTER |

### RES_0XD298_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HUPE | 0/1 | - | unsigned char | - | - | - | - | - | Status von Hupe: 0: Hupe nicht aktiv 1: Hupe aktiv |

### RES_0XD30A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_HECK_BLOCK | 0/1 | - | unsigned char | - | - | - | - | - | Sonnenrollo Heckscheibe komplett ausgefahren:  0: Endpostion nicht erreicht;  1: Endposition erreicht |
| STAT_ROLLO_HECK_MOTOR_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | 0: Motor Sonnenrollo Heckscheibe inaktiv;  1: Motor Sonnenrollo Heckscheibe aktiv |
| STAT_ROLLO_HECK_LETZTE_MOTORLAUFZEIT_WERT | ms | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Dauer des letzten Motorlaufes von Start des Motors bis Verfahren in Block:   0: Ungültiger Wert;  1 - 65535: Gültige Laufzeiten |

### RES_0XD311_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_FAH_TASTER_BFH | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | Lokaler Taster FAH für Seitenrollo Beifahrerseite. Siehe Table TAB_TASTER_ROLLO |
| STAT_ROLLO_FAH_TASTER_FAH | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | Lokaler Taster FAH für Seitenrollo Fahrerseite hinten.  Siehe Table TAB_STANDARD_TASTER_DIGITAL |
| STAT_ROLLO_FAH_TASTER_HECK | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | Lokaler Taster FAH für Heckrollo. Siehe Table TAB_STANDARD_TASTER_DIGITAL |
| STAT_ROLLO_FAH_TASTER_PANORAMADACH | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | Lokaler Taster FAH für Abschaltung des Panoramadach. Siehe Table TAB_STANDARD_TASTER_DIGITAL |

### RES_0XD314_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_BFH_TASTER_BFH | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | Lokaler Taster BFH für Seitenrollo Beifahrerseite.  Kodierung SOROLLO_TUER_LIN.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG |
| STAT_ROLLO_BFH_TASTER_FAH | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | Lokaler Taster BFH für Seitenrollo Fahrerseite.  Kodierung SOROLLO_TUER_LIN. Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG |
| STAT_ROLLO_BFH_TASTER_HECK | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | Lokaler Taster BFH für Heckrollo.  Kodierung SOROLLO_TUER_LIN. Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG |
| STAT_ROLLO_BFH_TASTER_PANORAMADACH | 0-n | - | unsigned char | - | TAB_TASTER_ROLLO | - | - | - | Lokaler Taster BFH für Abschaltung des Panoramadach.  Kodierung SOROLLO_TUER_LIN ist gleich Schalterblock Rollo oder Tür, Laut kodierung nicht verbaut. Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |

### RES_0XD320_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_ABBLEND_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: nicht abgeblendet  1: abgeblendet |
| STAT_AUSSENSPIEGEL_ABBLEND_WERT | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Eingestellter Wert der Abblendstufe in %. |
| STAT_AUSSENSPIEGEL_ABBLEND_ZEIT_WERT | ms | - | signed int | - | - | 10.0 | 1.0 | 0.0 | Restliche Zeit in der der Spiegel noch abgeblendet ist |

### RES_0XD32D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_HEIZUNG_EIN | 0/1 | - | signed int | - | - | - | - | - | 0: Spiegelheizung ausgeschalten 1: Spiegelheizung eingeschalten |
| STAT_SPIEGEL_HEIZUNG_WERT | % | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Eingestellter Wert der Spiegelheizung in % |

### RES_0XD32F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_INNENSPIEGEL_ABBLEND_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Angabe des aktuellen Abblendgrads in % |

### RES_0XD331_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_BEIKLAPPEN_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster Spiegel Beiklappen nicht gedrückt  1: Taster Spiegel Beiklappen gedrückt |
| STAT_SPIEGEL_SCHALTER_FA_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Spiegelauswahl Fahrer / Beifahrer  0: Beifahrerspiegel  1: Fahrerspiegel |
| STAT_SPIEGEL_TASTER_LINKS_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_OBEN_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_RECHTS_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER_UNTEN_EIN | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | 0: Taster nicht gedrückt  1: Taster gedrückt |
| STAT_SPIEGEL_TASTER | 0-n | - | signed int | - | TAB_AUSSENSPIEGEL_RICHTUNG | - | - | - | VS-Result, siehe Table TAB_AUSSENSPIEGEL_RICHTUNG |

### RES_0XD347_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_HC2_LINKS_NR | 0-n | - | signed char | - | TAB_SPIEGEL_HC2 | 1.0 | 1.0 | 0.0 | Status HC2-Anzeige linker Spiegel |
| STAT_SPIEGEL_HC2_RECHTS_NR | 0-n | - | signed char | - | TAB_SPIEGEL_HC2 | 1.0 | 1.0 | 0.0 | Status HC2-Anzeige rechter Spiegel |

### RES_0XD34F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WISCHER_POS_AKTUELL_FAHRER_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liefert zurück die aktuelle Winkelposition des fahrerseiten Frontwischers. 255=Ungültig |
| STAT_WISCHER_POS_AKTUELL_BEIFAHRER_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Liefert zurück die aktuelle Winkelposition des beifahrerseiten Frontwischers.  Dieser Wert gilt für den zweiten Wischermotor, z.B. Schmetterlingswischer.   255=Ungültig |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XD350_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHDUESENHEIZUNG | 0-n | high | unsigned char | - | TAB_WASCHDUESENHEIZUNG | - | - | - | PWM-Wert: 0 = 0% 1 = 25% 2 = 50% 3 = 75% 4 = 100% |

### RES_0XD352_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHERPUMPE_HINTEN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Ansteuerung hintere Wascherpumpe nicht aktiv  1: Ansteuerung hintere Wascherpumpe aktiv |

### RES_0XD355_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTWISCHER_RSK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gibt an, ob der Frontscheibenwischer in Park-Position ist.  0= Frontscheibenwischer nicht in Park-Position;  1= Frontscheibenwischer in Park-Position |

### RES_0XD357_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHWASSERSTAND_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Waschwasserbehälter nicht ausreichend befüllt  1: Waschwasserbehälter ausreichend befüllt |
| STAT_WASCHWASSERSTAND_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Pegelwerts.  0xFFFF: ungültiger Wert oder Wert nicht unterstützt  |

### RES_0XD35C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WASCHERPUMPE_VORNE | 0/1 | - | unsigned char | - | - | - | - | - | 0: Waschwasserpumpe vorne nicht aktiv  1: Waschwasserpumpe vorne aktiv |

### RES_0XD35D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WISCHER_FRONT | 0/1 | - | unsigned char | - | - | - | - | - | Liefern den Status des Frontscheibenwischers: 0: Ansteuerung Frontscheibenwischer nicht aktiv 1: Ansteuerung Frontscheibenwischer aktiv |

### RES_0XD35F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WISCHER_HECK | 0/1 | - | unsigned char | - | - | - | - | - | 0: Ansteuerung Heckscheibenwischer nicht aktiv  1: Ansteuerung Heckscheibenwischer aktiv |

### RES_0XD3E9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TLC_AKTUATOR_STATUS_NR | 0-n | - | unsigned char | - | TAB_TLC_STATUS | - | - | - | aktueller Zustand TLC |
| STAT_TLC_AKTUATOR_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | 0: TLC nicht aktiv 1: TLC aktiv |

### RES_0XD3EF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANTIRUSCHMATTE | 0-n | high | unsigned char | - | TAB_CARGO_SG_ANTIRUTSCHMATTE | - | - | - | Gibt den Status der Antirutschmatte zurück: 0=Eingefahren (ST_SRMT_CSG_LIN=0);  1=Ausgefahren (ST_SRMT_CSG_LIN=1);  3=Signal unbefüllt (ST_SRMT_CSG_LIN=3);  0xFF wenn nicht kodiert |
| STAT_ANTIRUTSCHMATTE_VORHANDEN | 0/1 | high | unsigned char | - | - | - | - | - | Liefert ob den Cargo-Funktion aktiv kodiert ist |

### RES_0XD3F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CALC_THO_HOD_LIN_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Berechneter Wert des aktuellen imaginären Schwellwerts |
| STAT_CAPE_IMAG_HOD_LIN_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Imaginärteil des aktuell gemessenen komplexen Leitwerts |
| STAT_CAPE_REAL_HOD_LIN_WERT | - | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Realteil des aktuell gemessenen komplexen Leitwerts  |

### RES_0XD505_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_WISCHZYKLEN_WERT | - | high | unsigned int | - | - | 100.0 | 1.0 | 0.0 | Anzahl der Wischzyklen in 100er Schritten |
| STAT_CARCODE | 0-n | high | unsigned char | - | TAB_CARCODE_WISCHERMOTOR | - | - | - | Liefert den Carcode des Wischermotors |

### RES_0XD507_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WISCHER_HECK_2 | 0/1 | - | unsigned char | - | - | - | - | - | 0: Ansteuerung des zweites Heckscheibenwischers nicht aktiv  1: Ansteuerung des zweites Heckscheibenwischer aktiv |

### RES_0XD50D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_VERRIEGELUNG | 0-n | high | unsigned char | - | TAB_SIA_TABLET_VERRIEGELUNG | - | - | - | Gibt den Status der Verriegelung des Tablets wieder.  Siehe Table TAB_SIA_TABLET_VERRIEGELUNG |
| STAT_AUSWURFFUNKTION | 0/1 | high | unsigned char | - | - | - | - | - | Status der Sperre des Tasters EJECT:  0...Eject Taste gesperrt;  1...Eject Taste freigeschaltet |
| STAT_LADEERLAUBNIS | 0/1 | high | unsigned char | - | - | - | - | - | Status der Ladeschaltung. Die Ladeschaltung des Touch Command wird je nach Modi und Fahrzeugzustand aktiviert bzw. deaktiviert. Dieser Wert gibt den Status der Ladeschaltung im entsprechend aktiven TC-SIA Modus wieder.  0...Tablet laden aktiviert;  1...Tablet laden deaktiviert   |
| STAT_FETRAFLA_MODUS | 0-n | high | unsigned char | - | TAB_SIA_FETRAFLA_MODUS | - | - | - | Status des im Snap-In Adapter eingestellten Energiesparmodus:  Hinweis: Energiesparmodus seitens Steuergerät aktiv oder inaktiv |
| STAT_MESSEMODUS | 0/1 | high | unsigned char | - | - | - | - | - | Gibt den Status des Messemodus wieder:  1=Messemodus gesetzt;  0=Messemdodus nicht gesetzt  |
| STAT_SIA_FERTIGUNG_MODUS | 0-n | high | unsigned char | - | TAB_SIA_FERTIGUNGSMODUS | - | - | - | Gibt den Status des SIA spezifischen Fertigungsmodus wieder:  Siehe Table  |
| STAT_LADEMODUS | 0/1 | high | unsigned char | - | - | - | - | - | Gibt den Status des Lademodus wieder:  1...Lademodus aktiv;  0...Lademodus nicht aktiv  |
| STAT_ANZAHL_VERRIEGELUNGEN_TC_SIA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Verriegelungen des Touch Command Snap-In Adapters an. |

### RES_0XD542_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UNBELEGT_0 | 0/1 | high | unsigned char | - | - | - | - | - | Wegen Rückwärtkompatibilität soll dieser Bytes in dieser Zuordnung zu achten.  |
| STAT_FUNKTION_STANDLICHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Standlicht aus 1: Standlicht ein |
| STAT_FUNKTION_STANDLICHT_ES | 0/1 | - | unsigned char | - | - | - | - | - | 0: Standlicht EnergySave aus  1: Standlicht EnergySave ein |
| STAT_FUNKTION_ABBLENDLICHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Abblendlicht  aus 1: Abblendlicht  ein |
| STAT_FUNKTION_TAGFAHRLICHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Tagfahrlicht aus    1: Tagfahrlicht ein |
| STAT_FUNKTION_FERNLICHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Fernlicht/Lichthupe  aus 1: Fernlicht/Lichthupe ein |
| STAT_FUNKTION_BLINKER_LINKS | 0/1 | - | unsigned char | - | - | - | - | - | 0: Blinker links aus 1: Blinker links ein |
| STAT_FUNKTION_BLINKER_RECHTS | 0/1 | - | unsigned char | - | - | - | - | - | 0: Blinker rechts aus 1: Blinker rechts ein |
| STAT_FUNKTION_NEBELLICHT_VORN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Nebellicht vorn aus 1: Nebellicht vorn ein |
| STAT_FUNKTION_ABBIEGELICHT_VORN_LINKS | 0/1 | - | unsigned char | - | - | - | - | - | 0: Abbiegelicht vorn links aus 1: Abbiegelicht vorn links ein |
| STAT_FUNKTION_ABBIEGELICHT_VORN_RECHTS | 0/1 | - | unsigned char | - | - | - | - | - | 0: Abbiegelicht vorn rechts aus  1: Abbiegelicht vorn rechts ein |
| STAT_UNBELEGT_1 | 0/1 | high | unsigned char | - | - | - | - | - | Wegen Rückwärtkompatibilität soll dieser Bytes in dieser Zuordnung zu achten. |
| STAT_FUNKTION_BREMSLICHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Bremslicht aus 1: Bremslicht ein |
| STAT_FUNKTION_BFD_ESS | 0/1 | - | unsigned char | - | - | - | - | - | 0: Bremslicht Flächenerweiterung / Emergency Stop Signal aus 1: Bremslicht Flächenerweiterung / Emergency Stop Signal ein |
| STAT_FUNKTION_NEBELSCHLUSSLICHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Nebelschlusslicht aus 1: Nebelschlusslicht ein |
| STAT_FUNKTION_RUECKFAHRLICHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Rückfahrlicht aus 1: Rückfahrlicht ein |
| STAT_FUNKTION_PARKLICHT_LINKS | 0/1 | - | unsigned char | - | - | - | - | - | 0: Parklicht links aus 1: Parklicht links ein |
| STAT_FUNKTION_PARKLICHT_RECHTS | 0/1 | - | unsigned char | - | - | - | - | - | 0: Parklicht rechts aus 1: Parklicht rechts ein |
| STAT_FUNKTION_WARNBLINKEN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Standlicht aus 1: Standlicht ein |
| STAT_FUNKTION_ANNOUNCEMENT_INDICATOR_LIGHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Blinker aus;  1: Blinker ein |
| STAT_FUNKTION_FOLLOW_ME_HOME | 0/1 | - | unsigned char | - | - | - | - | - | 0: Follow Me Home aus;  1: Follow Me Home ein |
| STAT_FUNKTION_MANEUVERING_LIGHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: aus 1: ein |
| STAT_FUNKTION_OVT | 0/1 | - | unsigned char | - | - | - | - | - | 0: aus 1: ein |
| STAT_FUNKTION_REMOTE_LIGHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: aus 1: ein |
| STAT_FUNKTION_REVERSING_FLASH | 0/1 | - | unsigned char | - | - | - | - | - | 0: aus 1: ein |
| STAT_FUNKTION_SPECIAL_FUNCTION_FLASHING | 0/1 | - | unsigned char | - | - | - | - | - | 0: aus 1: ein |
| STAT_FUNKTION_WELCOME_LIGHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: aus 1: ein |
| STAT_FUNKTION_GOODBYE_LIGHT | 0/1 | high | unsigned char | - | - | - | - | - | 0= Aus; 1= Ein. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XD54D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BUS_IN_BELADUNGSSENSOR_VORNE_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Busnachricht Beladungssensor vorne in mm |
| STAT_BUS_IN_BELADUNGSSENSOR_HINTEN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Busnachricht Beladungssensor hinten in mm |
| STAT_SOURCE_HSS | 0-n | high | unsigned char | - | TAB_HSS_TYPE | - | - | - | Höhenstandssensor über CAN oder Diskrete (nur an BDC) |
| STAT_HSS_FRONT_REAR_QUALIFIER | 0-n | high | unsigned char | - | TAB_HSS_LA_QUALIFIER | - | - | - | RTE_Qualifier HSS Front and Rear |
| STAT_PITCH_ANGLE_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Statischer Nickwinkel |
| STAT_10MHDG_WERT | cm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Position unterhalb der Hell-Dunkelgrenze |
| STAT_VERT_POS_LEFT_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vertikale Scheinwerferpos. Links vom LaMaster |
| STAT_VERT_POS_RIGHT_WERT | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Vertikale Scheinwerferpos. Rechts vom LaMaster |

### RES_0XD555_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIA_FLA_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Dieses Ergebnis wird nicht mehr ab SP2018 verwenden.  PIA Fernlichtassistent 0: Aus  1: Ein |
| STAT_PIA_FOLLOW_ME_HOME_ZEIT_WERT | s | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Eingestellte Zeit für Follow Me Home |
| STAT_PIA_WELCOMELIGHT_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | PIA Welcomelight  0: Aus  1: Ein |

### RES_0XD55E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PIA_MIND_ANZAHL_BLINKZYKLEN_BEI_TIPP_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Mind.-Anzahl Blinkzyklen bei Tippblinken momentan |
| STAT_PIA_QUITT_BLINK_ENTRIEGELN_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Quittierungsblinken bei Entriegeln momentan  0: Aus 1: Ein |
| STAT_PIA_QUITT_BLINK_SICHERN_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Quittierungsblinken bei Sichern momentan  0: Aus   1: Ein |

### RES_0XD57E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KEINE_LWR_EIN | 0/1 | - | signed char | - | - | - | - | - | 0=LWR codiert  1=keine LWR codiert |
| STAT_MAN_LWR_EIN | 0/1 | - | signed char | - | - | - | - | - | 0=manuelle LWR nicht codiert  1=manuelle LWR codiert |
| STAT_DLS_VERBAUT | 0/1 | high | signed char | - | - | - | - | - | Aktivierung DLS Funktion: 0=Nicht verbaut;  1=Verbaut |
| STAT_ST_CLC_ENA | 0/1 | - | signed char | - | - | - | - | - | Aktivierung der CLC-Function:  0=Inaktiv;  1=Aktiv |
| STAT_ST_FLC_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivierung der LWR-Funktion:  0=Inaktiv;  1=Aktiv |
| STAT_ST_AFS_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivierung der AFS-Funktion:  0=Inaktiv;  1=Aktiv |
| STAT_ST_BLC_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivierung der Kurvenlicht-Funktion:  0=Inaktiv;  1=Aktiv |
| STAT_ST_GFHBA_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivieren des blendfreien Fernlicht Assistenten:  0=Inaktiv;  1=Aktiv |
| STAT_ST_HBA_ENA | 0/1 | high | signed char | - | - | - | - | - | Aktivierung der HBA-Funktion:  0=Inaktiv;  1=Aktiv |
| STAT_ST_ERRORINFORNATION | 0-n | high | unsigned char | - | TAB_LA_ERRORINFORMATION | - | - | - | Status der Checkcontrolmeldungen und Fehlerspeichereinträge |
| STAT_ST_ERRORCODE_FLC | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode für FLC Fehler |
| STAT_ST_ERRORCODE_BLC | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode für BLC Fehler |
| STAT_ST_ERRORCODE_CLC | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode für CLC Fehler |
| STAT_ST_ERRORCODE_HBA | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode für HBA Fehler |
| STAT_ST_ERRORCODE_GFHBA | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode für GFHBA Fehler |
| STAT_ST_ERRORCODE_DLS | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode für DLS Fehler |
| STAT_ST_ERRORCODE_DIM | 0-n | high | unsigned char | - | TAB_LA_ERRORBITS | - | - | - | Errorcode für DIM Fehler |
| STAT_ST_STATE_FLC | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der FLC-Funktion: gibt den Zustand der Leutchweitenregulierung seitenselectiv an   |
| STAT_ST_STATE_BLC | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der BLC-Funktion gibt den Zustand des Kurvenlichts seitenselectiv an   |
| STAT_ST_STATE_CLC | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der CLC-Funktion: gibt den Zustand des Abbigelichts seitenselectiv an    |
| STAT_ST_STATE_MLC | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der MLC-Funktion: gibt den Zustand der manuellenLeutchweitenregulierung seitenselectiv an     |
| STAT_ST_STATE_HBA | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der HBA-Funktion gibt den Zustand des Fernlichtsassistenten seitenselectiv an      |
| STAT_BLS | 0/1 | high | signed char | - | - | - | - | - | Bremslichtschalter |
| STAT_ST_STATE_GFHBA | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der GFHBA-Funktion gibt den Zustand des Funktion blendfreies Fernlicht an.  |
| STAT_ST_STATE_DLS | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der DLS-Funktion:  gibt den Zustand des Dynamic Light Spot seitenselectiv an |
| STAT_ST_STATE_DIM | 0-n | high | unsigned char | - | TAB_LA_FUNCTIONSTATE | - | - | - | Zustand der DIM-Funktion gibt den Zustand des Fernlicht-Dimmings  an |

### RES_0XD5DE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BELEGUNG_LCI_0 | 0-n | high | unsigned char | - | TAB_LICHT_MAPPING_KONFIGURATION | - | - | - | PIN 58G im Systemschaltplan |
| STAT_BELEGUNG_LCI_1 | 0-n | high | unsigned char | - | TAB_LICHT_MAPPING_KONFIGURATION | - | - | - | PIN IB_1 im Systemschaltplan |
| STAT_BELEGUNG_LCI_2 | 0-n | high | unsigned char | - | TAB_LICHT_MAPPING_KONFIGURATION | - | - | - | PIN Corona_LED im Systemschaltplan |
| STAT_BELEGUNG_LCI_3 | 0-n | high | unsigned char | - | TAB_LICHT_MAPPING_KONFIGURATION | - | - | - | PIN IB_4 im Systemschaltplan |
| STAT_BELEGUNG_LCI_4 | 0-n | high | unsigned char | - | TAB_LICHT_MAPPING_KONFIGURATION | - | - | - | PIN IB_5 im Systemschaltplan |
| STAT_BELEGUNG_LCI_6 | 0-n | high | unsigned char | - | TAB_LICHT_MAPPING_KONFIGURATION | - | - | - | PIN 58_Ambl_1 im Systemschaltplan |
| STAT_BELEGUNG_LCI_7 | 0-n | high | unsigned char | - | TAB_LICHT_MAPPING_KONFIGURATION | - | - | - | PIN 58_Ambl_2 im Systemschaltplan |
| STAT_BELEGUNG_LCI_8 | 0-n | high | unsigned char | - | TAB_LICHT_MAPPING_KONFIGURATION | - | - | - | PIN 58_Ambl_3 im Systemschaltplan |

### RES_0XD5E6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FAHRLICHTSITUATION_LINKS | 0-n | - | unsigned char | - | TAB_LICHT_FAHRLICHTSITUATION | - | - | - | Aktuelle Fahrlichtsituation links auslesen |
| STAT_FAHRLICHTSITUATION_RECHTS | 0-n | - | unsigned char | - | TAB_LICHT_FAHRLICHTSITUATION | - | - | - | Aktuelle Fahrlichtsituation rechts auslesen |

### RES_0XD601_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HOEHENSTAND_VORN_WERT | mm | - | signed int | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe Höhenstand  vorn |
| STAT_HOEHENSTAND_HINTEN_WERT | mm | - | signed int | - | - | 1000.0 | 1.0 | 0.0 | Ausgabe Höhenstand hinten |
| STAT_HOEHENSTAND_ROHWERT_VORN_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Sensor vorne |
| STAT_HOEHENSTAND_ROHWERT_HINTEN_WERT | V | - | signed int | - | - | 1.0 | 1000.0 | 0.0 | Spannung Sensor hinten |
| STAT_HOEHENSTAND_SENSOR_VORN | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Zustand Kalibrierung Sensor vorne |
| STAT_HSS_SENSOR_HINTEN | 0-n | - | unsigned char | - | TAB_HOEHENSTAND_ZUSTAND | - | - | - | Zustand Kalibrierung Sensor hinten |
| STAT_HSS_SENSORSPANNUNG_VORN | 0-n | - | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Fehler Sensorspannung vorne |
| STAT_HSS_SENSORSPANNUNG_HINTEN | 0-n | - | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Fehler Sensorspannung hinten |
| STAT_HSS_VERSORGUNGSSPANNUNG_VORN | 0-n | - | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Fehler Versorgungsspannung vorne |
| STAT_HSS_VERSORGUNGSSPANNUNG_HINTEN | 0-n | - | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Fehler Versorgungsspannung hinten |
| STAT_ERROR_SENSOR_VORN | 0-n | high | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Sensor Fehler vorne |
| STAT_ERROR_SENSOR_HINTEN | 0-n | high | unsigned char | - | TAB_HOHENSTAND_SENSOR | - | - | - | Zustand Sensor Fehler hinten |

### RES_0XD604_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GRADIENT_C0_VORN_WERT | mV/mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Codierung C0 vorn |
| STAT_GRADIENT_C0_HINTEN_WERT | mV/mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Codierung C0 hinten |
| STAT_S0_VORN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Codierung Offset S0 vorn |
| STAT_S0_HINTEN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Codierung Offset S0 hinten   |
| STAT_ABGLEICHWERT_VDP_VORN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Werksjustage Abgleichwert VDP vorn |
| STAT_ABGLEICHWERT_VDP_HINTEN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Werksjustage Abgleichwert VDP hinten |
| STAT_OFFSET_VORN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Werksjustage Offset  Licht vorn |
| STAT_OFFSET_HINTEN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Werksjustage Offset  Licht hinten |

### RES_0XD672_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KUEHLMITTELSTAND_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0= Kühlmittelbehälter nicht ausreichend befüllt; 1= Kühlmittelbehällter ausreichend befüllt |
| STAT_KUEHLMITTELSTAND_WERT | mV | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe des Pegelwerts.  0xFFFF: ungültiger Wert oder Wert nicht unterstützt |

### RES_0XD6C0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_1 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 1 : DTC-Taste |
| STAT_TASTE_2 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 2 : Sport-Taste. Für M-Fahrzeugen : Motor-Taste. |
| STAT_TASTE_3 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 3 : Comfort-Taste. Für M-Fahrzeugen : Fahrwerk-Taste. |
| STAT_TASTE_4 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 4 : EcoPro-Taste. Für M-Fahrzeugen Lenkung-Taste. |
| STAT_TASTE_5 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 5 : Adaptive-Taste. Für M-Fahrzeugen M-Menü-Taste. |
| STAT_TASTE_6 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 6 : Sport-Taste. Für M-Fahrzeugen Motor-Taste. |
| STAT_TASTE_7 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 7 : PDC-Taste |
| STAT_TASTE_8 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 8 : SideView-Taste |
| STAT_TASTE_9 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 9 : HDC-Taste |
| STAT_TASTE_10 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 10 : eDRIVE-Taste |
| STAT_TASTE_11 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 11 : Niveauregulierung-Taste |
| STAT_TASTE_12 | 0-n | high | unsigned char | - | TAB_TASTER_BEMIKO | - | - | - | Übermittelter Signalwert für Funktionstaste 12 : Taste Aktiver Heckspoiler  |

### RES_0XD763_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZWEITE_SITZREIHE_VERRIEGELUNG_LINKS | 0-n | high | unsigned char | - | TAB_VERRIEGELUNG_SITZSEITE | - | - | - | linke Seite der zweiten Sitzreihe verriegelt oder nicht verriegelt |
| STAT_ZWEITE_SITZREIHE_VERRIEGELUNG_RECHTS | 0-n | high | unsigned char | - | TAB_VERRIEGELUNG_SITZSEITE | - | - | - | rechte Seite der zweiten Sitzreihe verriegelt oder nicht verriegelt |

### RES_0XD81C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_THCH_TASTER_LINKS | 0-n | high | unsigned char | - | TAB_THCH_TASTER | - | - | - | Status der Bestätigung von dem linken Taster |
| STAT_THCH_TASTER_RECHTS | 0-n | high | unsigned char | - | TAB_THCH_TASTER | - | - | - | Status der Bestätigung von dem rechten Taster |

### RES_0XD83A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ARMLEHNENHEIZUNG_BF_STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Stufe von der Beifahrer Armlehnenheizung. Siehe Table TAB_SITZHEIZUNG_STUFE. |
| STAT_ARMLEHNENHEIZUNG_BF_TEMP_TUER_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Beifahrer Türlehne: -40..85, 87 = ungültig |
| STAT_ARMLEHNENHEIZUNG_BF_TEMP_MITTE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Beifahrer Mittelarmlehne: -40..85, 87 = ungültig |

### RES_0XD83B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ARMLEHNENHEIZUNG_BFH_STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Stufe Armlehnenheizung der Beifahrer hinten. Siehe Table TAB_SITZHEIZUNG_STUFE. |
| STAT_ARMLEHNENHEIZUNG_BFH_TEMP_TUER_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Beifahrer hinten Türlehne: -40..85, 87 = ungültig |
| STAT_ARMLEHNENHEIZUNG_BFH_TEMP_MITTE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Beifahrer hinten Mittelarmlehne: -40..85, 87 = ungültig |

### RES_0XD83C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ARMLEHNENHEIZUNG_FA_STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Stufe Armlehnenheizung des Fahrer. Siehe Table TAB_SITZHEIZUNG_STUFE |
| STAT_ARMLEHNENHEIZUNG_FA_TEMP_TUER_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Tür des Fahrer: -40..85, 87 = ungültig |
| STAT_ARMLEHNENHEIZUNG_FA_TEMP_MITTE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur von der Armauflage Fahrermittelarmlehne: -40..85, 87 = ungültig |

### RES_0XD83D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ARMLEHNENHEIZUNG_FAH_STUFE | 0-n | high | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Stufe von der Fahrer hinten Armlehnenheizung. Siehe Table TAB_SITZHEIZUNG_STUFE. |
| STAT_ARMLEHNENHEIZUNG_FAH_TEMP_TUER_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Fahrer hinten Türlehne: -40..85, 87 = ungültig |
| STAT_ARMLEHNENHEIZUNG_FAH_TEMP_MITTE_WERT | °C | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Armauflage Fahrer hinten Mittelarmlehne: -40..85, 87 = ungültig |

### RES_0XD842_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ARMLEHNENHEIZUNG_VORNE_VORHANDEN | 0-n | high | unsigned char | - | - | - | - | - | Gibt aus ob die Armauflagenheizung vorne kodiert ist.  |
| STAT_ARMLEHNENHEIZUNG_HINTEN_VORHANDEN | 0-n | high | unsigned char | - | TAB_ARMLEHNENHEIZUNG_HINTEN_VORHANDEN | - | - | - | Gibt aus ob die Armauflagenheizung hinten vorhanden und kodiert ist. Siehe  Table TAB_ARMLEHNENHEIZUNG_HINTEN_VORHANDEN |

### RES_0XD8B5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTE_ON_OFF_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status ON/OFF-Taste:  0 = Taste nicht gedrückt,  1 = Taste gedrückt. |
| STAT_TASTE_MODE_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status MODE-Taste:  0 = Taste nicht gedrückt,  1 = Taste gedrückt. |
| STAT_TASTE_EJECT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status EJECT-Taste:  0 = Taste nicht gedrückt,  1 = Taste gedrückt. |
| STAT_TASTE_TP_AM_FM_TRF_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status TP/AM/FM/TRF-Taste:  0 = Taste nicht gedrückt,  1 = Taste gedrückt. |
| STAT_SKIP_LINKS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status Skip-Taste links:  0 = Taste nicht gedrückt,  1 = Taste gedrückt. |
| STAT_SKIP_RECHTS_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Ausgabe Status Skip-Taste rechts:  0 = Taste nicht gedrückt,  1 = Taste gedrückt. |

### RES_0XD8DA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UMSCHALTVENTIL_EIN | 0/1 | - | signed char | - | - | - | - | - | 0: Umschaltventil offen 1: Umschaltventil geschlossen |

### RES_0XD8DC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHZ_ANZAHL_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungen Sitzheizung über IKF. |
| STAT_SBL_ANZAHL_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungen Sitzlüftung über IKF. |
| STAT_LHZ_ANZAHL_AKTIVIERUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Aktivierungen Lenkradheizung über IKF. |
| STAT_TEMP_SCHWELLE_SHZ_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Letzter eingestellter Temperaturschwellwert für die Aktivierung der Sitzheizung über IKF. 0-254, 255= ungültig, Einheit °C oder °F siehe STAT_TEMP_EINHEIT |
| STAT_TEMP_SCHWELLE_SBL_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Letzter eingestellter Temperaturschwellwert für die Aktivierung der Sitzlüftung über IKF. 0-254, 255= ungültig, Einheit °C oder °F siehe STAT_TEMP_EINHEIT |
| STAT_TEMP_SCHWELLE_LHZ_WERT | ° | high | unsigned char | - | - | 1.0 | 1.0 | -40.0 | Letzter eingestellter Temperaturschwellwert für die Aktivierung der Lenkradheizung über IKF. 0-254, 255= ungültig, Einheit °C oder °F siehe STAT_TEMP_EINHEIT |
| STAT_TEMP_EINHEIT | 0-n | high | unsigned char | - | TAB_IFK_TEMP_EINHEIT | - | - | - | Gibt die eingestellte Temperatureinheit für die Temperaturschwellwerte aus. Siehe Tabelle TAB_IFK_TEMP_EINHEIT |

### RES_0XD903_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSATZWASSERPUMPE_EIN | 0/1 | - | signed int | - | - | - | - | - | Zusatzwasserpumpenstatus:  0 = AUS;  1 = EIN. |

### RES_0XD906_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLIMAKOMPRESSOR_EIN | 0/1 | - | signed int | - | - | - | - | - | Klimakompressor:  0 = AUS;  1 = EIN. |
| STAT_KLIMAKOMPRESSOR_PWM_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Klimakompressor:  PWM-Signal |

### RES_0XD970_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKSCHEIBENHEIZUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Heckscheibenheizung:  0 = Aus;  1 = Ein. |

### RES_0XD971_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KOMPRESSOR_KUPPLUNG_EIN | 0/1 | - | signed char | - | - | - | - | - | 0: Kompressorkupplung offen 1: Kompressorkupplung geschlossen |

### RES_0XDA24_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKRAD_SCHALTPADDLE_NR | 0-n | - | unsigned char | - | TAB_TASTER_WIPPE_RAENDEL | - | - | - | Status Schaltpaddles |
| STAT_SCHALTPADDLES_AD_WERT | V | - | unsigned int | - | - | 1.0 | 10.0 | 0.0 | AD-Wert Schaltpaddles |

### RES_0XDA5F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE_VERBAUORT_NAD1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD9 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD10 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD11 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD12 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD13 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD14 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD15 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD16 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD17 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD18 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD19 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD20 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD21 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD22 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD23 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD24 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD25 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD26 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_METHODE_AUTOADRESSIERUNG | 0-n | high | unsigned char | - | TAB_LIN_METHODE_ADRESSIERUNG | - | - | - | Liefert den aktuellen Wert der verwendeten Autoadressierungsmethode. |

### RES_0XDAA0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HSM_ACTIVE | 0-n | high | unsigned char | - | TAB_HSM_ACTIVE | - | - | - | Status Aktivierung HSM |
| STAT_HSM_RUN_MODE | 0-n | high | unsigned char | - | TAB_HSM_RUN_MODE | - | - | - | HSM_RUN_MODE |
| STAT_HSM_HWID_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | HW ID des HSM, Format xx.xx.xxxx. 0xFFFFFFFF, falls HSM nicht aktiv |
| STAT_HSM_HW_VERSION_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | HW Version des HSM, Format xx.xx.xxxx. 0xFFFFFFFF, falls HSM nicht aktiv |
| STAT_HSM_SW_VERSION_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer der HSM Applikation, Format xx.xx.xxxx. 0xFFFFFFFF, falls HSM nicht aktiv |
| STAT_HSM_BL_VERSION_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer des HSM Bootloaders, Format xx.xx.xxxx. 0xFFFFFFFF, falls HSM nicht aktiv |
| STAT_HSM_UID_DATA | DATA | high | data[32] | - | - | 1.0 | 1.0 | 0.0 | UID des HSM. Alle Bytes 0xFF, falls HSM nicht aktiv |
| STAT_HSM_JTAG | 0-n | high | unsigned char | - | TAB_HSM_JTAG_SPERRSTATUS | - | - | - | Sperrstatus des HSM JTAG |

### RES_0XDAB3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KLEMMEN_SPANNUNG_30B_1_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30B_1 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_KLEMMEN_SPANNUNG_30B_2_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30B_2 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_KLEMMEN_SPANNUNG_30B_3_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 30B_3 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_KLEMMEN_SPANNUNG_15WUP | 0/1 | - | unsigned int | - | - | - | - | - | Das Result enthält die Information ob der ZSG-Ausgang 15WUP aktiv (=1) oder nicht aktiv (=0) ist. |
| STAT_KLEMMEN_SPANNUNG_15N1_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 15_N1 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_KLEMMEN_SPANNUNG_15N2_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 15_N2 am ZSG-Ausgang. Bei Codierung LIN-Stromverteiler oder nicht bestücktem Klemmen-Treiber bzw. -Relais wird das Ergebnis 65.535 = ungültig ausgegeben. |
| STAT_KLEMMEN_SPANNUNG_15_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 15 am ZSG-Ausgang. |
| STAT_KLEMMEN_STROM_15_50_WERT | A | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Stromwert an Klemme 15 und 50 am ZSG-Ausgang. |
| STAT_KLEMMEN_SPANNUNG_50_WERT | V | - | unsigned int | - | - | 1.0 | 1000.0 | 0.0 | Das Result enthält den Spannungswert Klemme 50 am ZSG-Ausgang. |

### RES_0XDAB9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CAS_MONTAGEMODUS | 0-n | - | unsigned char | - | TAB_CAS_MONTAGEMODUS | - | - | - | Das Result enthält den Status der CAS Montagesperren KL50-Sperre/Fahrbereitschafts-Sperre und Präsentations-Modus. Hinweise: - Zuordnung erfolgt über Tabelle TAB_CAS_MONTAGEMODUS |

### RES_0XDABA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KL15_EIN_VERHINDERER | 0-n | - | unsigned char | - | TAB_KLEMMEN_VERHINDERER | - | - | - | Das Result enthält die Ursache, die momentan ein Einschalten der KL15 verhindert, wenn eine Klemmenänderung zu KL15 über StartStop-Taster (SST) oder über Diagnose angefordert würde. In KL15-Ein wird immer 0 = Kein Hinderungsgrund vorliegend ausgegeben. Siehe Table TAB_KLEMMEN_VERHINDERER. |
| STAT_KL15_AUS_VERHINDERER | 0-n | - | unsigned char | - | TAB_KLEMMEN_VERHINDERER | - | - | - | Das Result enthält die Ursache, die momentan ein Ausschalten der KL15 verhindert, wenn eine Klemmenänderung über StartStop-Taster (SST-Normaldruck, kein Notaus) oder über Diagnose angefordert würde. In KL15-Aus  wird immer 0 = Kein Hinderungsgrund vorliegend ausgegeben. Siehe Table TAB_KLEMMEN_VERHINDERER. |
| STAT_FAHRBEREITSCHAFT_VERHINDERER | 0-n | - | unsigned char | - | TAB_KLEMMEN_VERHINDERER | - | - | - | Das Result enthält die Ursache, die momentan ein Versenden des Signals   RQ_FN_DRV:  '0x1'  an die DME verhindert, wenn die Herstellung der Fahrbereitschaft über StartStop-Taster (SST) angefordert würde.  Wenn RQ_FN_DRV: '0x1'   versendet wird,  wird immer '0 = Kein Hinderungsgrund vorliegend' ausgegeben  Hinweis:  0 = Kein Hinderungsgrund vorliegend   1 = Aktueller Schlüssel nicht gültig [ 3 ]  5 = Bremse nicht gedrückt [ 4 ]  7 = Kupplung nicht gedrückt [ 5 ]  9 = Keine Freigabe durch DME (ST_DRVG_RDI_DRV ungleich  'Keine Fahrbereitschaft' in KL15-Ein) [ 6 ]  13 = Montagemodus aktiv [ 1 ]  22 = Ladekabel gesteckt [ 2 ] |
| STAT_KL30F_AUS_VERHINDERER | 0-n | high | unsigned char | - | TAB_KLEMMEN_VERHINDERER | - | - | - | Das Result enthält die Ursache, die momentan ein Ausschalten der KL30F verhindert, wenn eine Abschaltgrund vorliegen würde oder über eine Abschaltung über Diagnose (STEUERN_KL30F oder STEUERN_ZUSTAND_FAHRZEUG) angefordert würde  Hinweise: - Zuordnung erfolgt gemäß Tabelle   0 = Kein Hinderungsgrund vorliegend  16 = KL30B ein (ST_KL:  0x6...0xD) 17 = Parklicht ein (ST_PLI_LH:  0x1, Ein  oder ST_PLI_RH:  0x1, Ein ) 18 = Standlicht ein (ST_POLI:  0x1, Ein ) 19 = Warnblinken ein (ST_IDC:  0x3, Beide Blinker ein ) 20 = Aktiver Notruf (ECAL_ACV:  0x1, Notruf aktiv ) oder Notruf im Standby (ECAL_STDBY:  0x1, Standby ein ) 21 = KL30F über Dienstenachricht mit Attribut  gesetzlich  angefordert - wird im BDC2015 nicht verwendet  |

### RES_0XDAEE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BETRIEBSZEIT_STANDLICHT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Standlicht |
| STAT_BETRIEBSZEIT_PARKLICHT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Parklicht |
| STAT_BETRIEBSZEIT_LESELICHT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Leselicht |
| STAT_BETRIEBSZEIT_WELCOMELEUCHTEN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Welcomeleuchten |
| STAT_BETRIEBSZEIT_SITZHEIZUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Sitzheizung |
| STAT_BETRIEBSZEIT_MASSAGEFUNKTION_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Massagefunktion |
| STAT_BETRIEBSZEIT_ARMLEHNENHEIZUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Armlehnenheizung |
| STAT_BETRIEBSZEIT_HECKSCHEIBENHEIZUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Heckscheibenheizung |
| STAT_BETRIEBSZEIT_LENKRADHEIZUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Lenkradheizung |
| STAT_BETRIEBSZEIT_AUSSENSPIEGELHEIZUNG_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Zaehlerstand Aussenspiegelheizung |

### RES_0XDB17_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RSU_FAHRFREIGABESPERRE | 0/1 | high | unsigned char | - | - | - | - | - | Endergebnis Fahrzeug gesperrt oder nicht (für Auswertung im Werk) 0x00: Fahrfreigabe 0x01: Fahrfreigabesperre |
| STAT_SPEICHERWERT_PERSISTENTER_STATUS_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Fahrzeug meldet den Wert des Speicherbereichs des persistenten Status zurück. (für Fehlersuche) Erwarteter Wert: binär 01010101 |
| STAT_SPEICHERWERT_RSU_MERKER_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Fahrzeug meldet den Wert des Speicherbereichs des RSU Merkers zurück. (für Fehlersuche) Erwarteter Wert: binär 00000000 |
| STAT_RSU_NVM | 0/1 | high | unsigned char | - | - | - | - | - | Fahrzeug meldet die Gültigkeit des RSU NvM Blocks. (für Fehlersuche) 0x00: Invalid 0x01: Valid |

### RES_0XDB41_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ISV_30F1_RELAY | 0-n | high | unsigned char | - | TAB_ISV_RELAY | - | - | - | Relaiszustand 30F1-Relais |
| STAT_ISV_30F2_RELAY | 0-n | high | unsigned char | - | TAB_ISV_RELAY | - | - | - | Relaiszustand 30F2-Relais |
| STAT_ISV_30B1_RELAY | 0-n | high | unsigned char | - | TAB_ISV_RELAY | - | - | - | Relaiszustand 30B1-Relais |
| STAT_ISV_30B2_RELAY | 0-n | high | unsigned char | - | TAB_ISV_RELAY | - | - | - | Relaiszustand 30B2-Relais |
| STAT_ISV_HHS_RELAY | 0-n | high | unsigned char | - | TAB_ISV_RELAY | - | - | - | Relaiszustand Hintere Heckscheibenheizung-Relais |
| STAT_ISV_30B5_RELAY | 0-n | high | unsigned char | - | TAB_ISV_RELAY | - | - | - | Relaiszustand 30B5-Relais |
| STAT_ISV_30B6_RELAY | 0-n | high | unsigned char | - | TAB_ISV_RELAY | - | - | - | Relaiszustand 30B6-Relais |
| STAT_ISV_30B7_RELAY | 0-n | high | unsigned char | - | TAB_ISV_RELAY | - | - | - | Relaiszustand 30B7-Relais |
| STAT_ISV_15N1_RELAY | 0-n | high | unsigned char | - | TAB_ISV_RELAY | - | - | - | Relaiszustand 15N1-Relais |

### RES_0XDC54_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HAENDLER_NUMMER_TEXT | TEXT | - | string[5] | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die 5-stellige Händlernummer. Im Werk wird dieser Wert auf 00000. |
| STAT_ERSTZULASSUNGSDATUM_TAG_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Tag des Erstzulassungsdatums. Im Werk wird dieser Wert auf den Tag der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_MONAT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Monat des Erstzulassungsdatums.  Im Werk wird dieser Wert auf den Monat der Schlüssel-Initialisierung gesetzt. |
| STAT_ERSTZULASSUNGSDATUM_JAHR_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den Jahr des Erstzulassungsdatums.  Im Werk wird dieser Wert auf das Jahr der Schlüssel-Initialisierung gesetzt. Wertebereich: 2000-9999. |

### RES_0XDC57_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODIERUNG_KL15_ABSCHALTUNG | 0/1 | - | unsigned char | - | - | - | - | - | Das Result gibt an, ob Abschaltung per Codierung freigeschaltet ist. Hinweise: - 0=nicht aktiv, 1=aktiv - ODER-Verknüpfung der einzelnen Codierungen für die KL15-Abschaltung (OSFG erreicht, Klappenwechsel, Gurt...) |
| STAT_ABSCHALTVERHINDERER_OBDKOMMUNIKATION_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer OBD-Kommunikation (OBD-relevante Diagnosekommunikation über D-CAN) gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_BREMSE_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Bremspedal betätigt ist gerade aktiv. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_MOTORLAUF_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Das Result gibt an, ob der Abschaltverhinderer Fahrbereitschaft (Motorlauf, MSA-Betrieb oder elektr. Fahrbereitschaft) gerade aktiv ist. Hinweis: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_KUPPLUNG_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Kupplungspedal betätigt gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_ENERGIESPARMODE_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Energiemode aktiv(FETRAFLA) gerade aktiv ist. Hinweis: Die KL15-Abschaltung ist hier aufgrund des Energymanager im FEM deaktiviert. |
| STAT_ABSCHALTVERHINDERER_GESCHWINDIGKEIT_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Geschwindigkeit gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_MSA_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | MSA ist aktuell (L6,L7) kein Abschaltverhinderer für die KL15. Dieses Result ist nur als Vorhalt vorhanden und wird immer mit ¿0¿ befüllt. |
| STAT_ABSCHALTVERHINDERER_ABBLENDLICHT_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Abblendlicht gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_WAEHLHEBEL_IN_N_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Wählhebel in N gerade aktiv ist (Waschstrassen-Funktion). Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_DIAGNOSE_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Diagnose (Geschwindigkeitsschwelle gesetzt) gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_FLA_MODE | 0/1 | - | unsigned char | - | - | - | - | - | Dieses Result ist nur als Vorhalt vorhanden und wird immer mit 0 befüllt. |
| STAT_ABSCHALTVERHINDERER_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob mindestens ein Abschaltverhinderer gerade aktiv ist. Hinweise: - 0=kein Abschaltverhinderer aktiv - 1=mindestens ein Abschaltverhinderer aktiv |
| STAT_AUTOMATISCHE_ABSCHALTUNG_DURCHGEFUEHRT | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob die letzte KL15-Abschaltung  eine automatische KL15-Abschaltung war oder nicht. Hinweise: - Der Wert wird auf aktiv gesetzt, sobald eine autom. KL15-Abschaltung durchgeführt wurde. - Der Wert wird auf nicht aktiv rückgesetzt, sobald eine nicht-automatische KL15-Abschaltung (z.B. per SST) durchgeführt wurde. 0 = automatische KL15-Abschaltung wurde nicht durchgeführt 1 = automatische KL15-Abschaltung wurde durchgeführt |
| STAT_ABSCHALTVERHINDERER_PRAESENTATIONSMODUS_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Präsentationsmodus(CAS-Montagemodus) gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_GESCHWINDIGKEIT_UNPLAUSIBEL_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Geschwindigkeit unplausibel (CAS hat sowohl über HW-Eingang als auch CAN einen unplausiblen Geschwindigkeitswert erhalten) gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_FREMDLADUNG_HYBRID_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Das Result gibt an, ob der Abschaltverhinderer Fremdladung bei Hybridfahrzeugen gerade aktiv ist. Hinweise: - 0=nicht aktiv, 1=aktiv Hinweis: Im SP2015 nicht verwendet und wird daher defaultmäßig mit 0 befüllt; Nur Vorhalt für RüKo. |
| STAT_ABSCHALTVERHINDERER_GURT_FAHRER_GESTECKT_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob der Abschaltverhinderer Gurt Fahrer gesteckt gerade aktiv ist. Hinweise: - 0=keine Abschaltung durchgeführt, 1=Abschaltung durchgeführt. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_GURT_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch Öffnen Fahrergurt per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_KLAPPENWECHSEL_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch Tür auf/zu per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_OSFG_ERREICHT_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch Erreichen der OSFG (Obere Startfähigkeitsgrenze) per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_TIMEOUT_OSFG_AKTIV | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 wegen OSFG mit oder ohne Timeout per Codierung freigeschaltet ist. |
| STAT_CODIERUNG_KL15_ABSCHALTUNG_ZV_SICHERN_AKTIV | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, ob Abschaltung der KL15 durch ZV Sichern per Codierung freigeschaltet ist. Hinweise: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_FAT_GESCHLOSSEN_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | Das Result gibt an, ob der Abschaltverhinderer Fahrertür geschlossen gerade aktiv ist. Hinweis: - 0=nicht aktiv, 1=aktiv |
| STAT_ABSCHALTVERHINDERER_PWF_ZUSTAND_FBH_PAD_AKTIV | 0/1 | high | unsigned char | - | - | - | - | - | Das Result gibt an, ob der Abschaltverhinderer PWF-Zustand  Fahrbereitschaft herstellen  oder  Prüfen-Analyse-Diagnose  gerade aktiv ist. Hinweis: - 0=nicht aktiv, 1=aktiv |

### RES_0XDC60_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SSTA_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_HALL_SENSOR | - | - | - | Das Result enthält den aktuellen Zustand des Sensors SST A. Siehe Table TAB_CAS_HALL_SENSOR. |
| STAT_SSTB_AKTIV | 0-n | - | unsigned char | - | TAB_CAS_HALL_SENSOR | - | - | - | Das Result enthält den aktuellen Zustand des Sensors SST B. Siehe Table TAB_CAS_HALL_SENSOR. |

### RES_0XDC83_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH | 0-n | high | unsigned char | - | TAB_SARAH_ZUSTAND | - | - | - | Zustand SARAH.  Siehe Table TAB_SARAH_ZUSTAND. |
| STAT_AUFFAHRWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | Individual Konfiguration Auffahrwarnung.   1=ON;  0=OFF. |
| STAT_AUFFAHRWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_SARAH_WARNZEITPUNKT_STUFE | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Auffahrwarnzeitpunkt.  Siehe Table TAB_SARAH_WARNZEITPUNKT_STUFE. |
| STAT_PERSONENWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Personenwarnung.  1=ON;  0=OFF. |
| STAT_GEZIELTES_ANLEUCHTEN | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Gezieltes Anleuchten.  1=ON;  0=OFF. |
| STAT_SPURVERLASSENSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurverlassenswarnung.  1=ON;  0=OFF. |
| STAT_SPURWECHSELWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurwechselwarnung.  1=ON;  0=OFF. |
| STAT_GESCHWINDIGKEITSASSISTENT | 0/1 | high | unsigned char | - | - | - | - | - | Konfiguration Geschwindigkeitsassistent Geschwindigkeitsoffset.  1=ON;  0=OFF. |
| STAT_GESCHWINDIGKEITSASSISTENT_OFFSET_WERT | km/h | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Konfiguration Geschwindigkeitsassistent Geschwindigkeitsoffset. |
| STAT_SEITENKOLLISIONSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Seitenkollisionswarnung.  1=ON;  0=OFF. |
| STAT_SPURVERLASSENSWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_SARAH_WARNZEITPUNKT_MODUS | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurverlassenswarnzeitpunkt.  Siehe Table TAB_SARAH_WARNZEITPUNKT_MODUS. |
| STAT_SPURWECHSELWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_SARAH_WARNZEITPUNKT_STUFE | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurwechselwarnzeitpunkt.  Siehe Table TAB_SARAH_WARNZEITPUNKT_STUFE. |
| STAT_LENKRADVIBRATION | 0-n | high | unsigned char | - | TAB_LENKRAD_VIBRATION_STUFE | - | - | - | Konfiguration Lenkradvibration.  Siehe Table TAB_LENKRAD_VIBRATION_STUFE. |
| STAT_SPURVERLASSENSLENKEINGRIFF | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurverlassenslenkeingriff.  1=ON;  0=OFF. |
| STAT_SPURWECHSELLENKEINGRIFF | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Spurwechsellenkeingriff.  1=ON;  0=OFF. |
| STAT_VORFAHRTSWARNUNG | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Vorfahrtswarnung.  1=ON;  0=OFF. |
| STAT_VORFAHRTSWARNZEITPUNKT | 0-n | high | unsigned char | - | TAB_SARAH_WARNZEITPUNKT_STUFE | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Vorwarnzeitpunkt.  Siehe Table TAB_SARAH_WARNZEITPUNKT_STUFE. |
| STAT_LENKRAD_LED | 0/1 | high | unsigned char | - | - | - | - | - | Konfiguration Lenkradleuchte LED:  1= ON;  0= OFF. |
| STAT_GESCHWINDIGKEITSASSISTENT_MODUS | 0-n | high | unsigned char | - | TAB_GESCHWINDIGKEITSASSISTENTMODUS | - | - | - | Konfiguration Geschwindigkeitsassistent Modus.  Siehe Table TAB_GESCHWINDIGKEITSASSISTENTMODUS |
| STAT_GESCHWINDIGKEITSASSISTENT_STRECKENVERLAUF | 0/1 | high | unsigned char | - | - | - | - | - | Konfiguration Geschwindigkeitsassistent Streckenverlauf:  0= ON;  1= OFF. |
| STAT_SPURWECHSELASSISTENT | 0/1 | high | unsigned char | - | - | - | - | - | Konfiguration Spurwechselassistent:  1= ON;  0= OFF. |
| STAT_SPURWECHSELASSISTENT_MODUS | 0-n | high | unsigned char | - | TAB_SARAH_SPURWECHSELASSISTENT_MODUS | - | - | - | Konfiguration Spurwechselassistent Modus:  Siehe Table TAB_SARAH_SPURWECHSELASSISTENT_MODUS. |
| STAT_ENGSTELLENASSISTENT | 0/1 | high | unsigned char | - | - | - | - | - | Konfiguration Engstellenassistent:  1= ON;  0= OFF. |
| STAT_ENGSTELLENASSISTENT_BREITE | 0-n | high | unsigned char | - | TAB_SARAH_ENGSTELLENASSISTENT_BREITE | - | - | - | Konfiguration Engstellenassistent Breite:  Siehe Table TAB_SARAH_ENGSTELLENASSISTENT_BREITE |
| STAT_ANFAHRVERHINDERUNG | 0/1 | high | unsigned char | - | - | - | - | - | Benutzerdefinierte gespeicherte Konfiguration Anfahrverhinderung:  1= ON;  0= OFF. |
| STAT_RESERVE_1_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_2_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_3_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_4_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |
| STAT_RESERVE_5_WERT | HEX | high | unsigned char | - | - | - | - | - | Reserve |

### RES_0XDC84_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH_TASTER | 0/1 | - | signed char | - | - | - | - | - | 0: nicht gedrückt 1: gedrückt |

### RES_0XDC85_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SARAH_TASTER_LED | 0-n | - | signed char | - | TAB_SARAH_LED | - | - | - | Gibt aus welche Farbe der SARAH-LED ist. Siehe Table TAB_SARAH_LED |

### RES_0XE371_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_KLEMME_30L1_WERT | mV | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert am Steuergerät an Klemme 30L1 (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). |
| STAT_SPANNUNG_KLEMME_30L2_WERT | mV | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert am Steuergerät an Klemme 30L2 (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). |
| STAT_SPANNUNG_KLEMME_30L3_WERT | mV | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert am Steuergerät an Klemme 30L3 (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). |
| STAT_SPANNUNG_KLEMME_30L4_WERT | mV | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Spannungswert am Steuergerät an Klemme 30L4 (auf eine Nachkommastelle genau) Hinweise: - Der vom Steuergerät gelieferte Wert wird von der SGBD durch 10 geteilt (eine Nachkommastelle). |
| STAT_RESERVE_0_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFD ausgegeben. |
| STAT_RESERVE_1_WERT | - | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFD ausgegeben. |

### RES_0XE372_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NACHLAUFZEIT_KLEMME_15N_WERT | s | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Nachlaufzeit der Klemme 15N in Sekunden.  Hinweis: Wert 0xFFFF = Dauer Ein, 0xFFFE = Nachlauf Fahrt/Motorlauf, 0x00 = Kein Nachlauf aktiv (KL15N aus). |
| STAT_NACHLAUFZEIT_KLEMME_30B_WERT | s | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält die Nachlaufzeit der Klemme 30B in Sekunden.  Hinweis: Wert 0xFFFF = Dauer Ein, 0xFFFE = Dauer Ein mit unspezifischer Nachlaufzeit, 0x00 = Kein Nachlauf aktiv (KL30B aus). |
| STAT_RESERVE_0_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFD ausgegeben. |
| STAT_RESERVE_1_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFD ausgegeben. |

### RES_0XE390_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SMO_SMART_OPENER_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Das Result gibt an ob die Funktion Smart Opener im Fahrzeug vorhanden ist.  Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_SMO_SMART_CLOSER_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Das Result gibt an ob die Funktion Smart Closer im Fahrzeug vorhanden ist.  See Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_SMO_FAHRZEUGTYP | 0-n | high | unsigned char | - | TAB_SMO_CAR_TYP | - | - | - | Das Result gibt an, welchen Fahrzeugtyp das SMO gerade eingestellt hat. Siehe Table TAB_SMO_CAR_TYP. |
| STAT_SMO_ANFORDERUNG | 0-n | high | unsigned char | - | TAB_SMO_REQUEST | - | - | - | Vom Zentralsteuergerät empfangene Anforderung Smart Opener/Closer zum Öffnen/Schliessen der Heckklappe.  Siehe Table TAB_SMO_REQUEST. |
| STAT_SMO_SPIELSCHUTZZAEHLER_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Das Result gibt an, wie oft der SMO-Sensor eine Auslösung erkannt hat, ohne das ein gültiger Schlüssel im Heck-Aussenraum erkannt wurde |
| STAT_SMO_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_SMO_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_SMO_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_SMO_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE392_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CKT_VORHANDEN | 0-n | high | unsigned char | - | TAB_CA_CKT_VORHANDEN | - | - | - | Das Ergebnis liefert ob den Comfort Keytraking option vorhanden ist.  Siehe Table TAB_CA_CKT_VORHANDEN. |
| STAT_CKT_DIAGNOSE_SPERRE | 0-n | high | unsigned char | - | TAB_CKT_DIAGNOSE_SPERRE | - | - | - | Das Ergebnis liefert ob der Comfort Keytraking gesperrt oder nicht ist.  Siehe Table TAB_CKT_DIAGNOSE_SPERRE. |
| STAT_ANZAHL_WECKVORGAENGE_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Zähler für das Fahrzeug-Wecken über CKT. |

### RES_0XE393_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TAGE_FT | 0-n | - | unsigned char | - | TAB_CA_TAGE | - | - | - | Das Result enthält den Status des CA-Tasters oder der TAGE Fahrertüre. Siehe Table TAB_CA_TAGE |
| STAT_TAGE_BFT | 0-n | - | unsigned char | - | TAB_CA_TAGE | - | - | - | Das Result enthält den Status des CA-Tasters oder der TAGE Beifahrertüre. Siehe Table TAB_CA_TAGE |
| STAT_TAGE_FTH | 0-n | - | unsigned char | - | TAB_CA_TAGE | - | - | - | Das Result enthält den Status des CA-Tasters oder der TAGE Hintertüre Fahreseite. Siehe Table TAB_CA_TAGE |
| STAT_TAGE_BFTH | 0-n | - | unsigned char | - | TAB_CA_TAGE | - | - | - | Das Result enthält den Status des CA-Tasters oder der TAGE Hintertüre Beifahreseite. Siehe Table TAB_CA_TAGE |
| STAT_TAGE_ER_FT | 0-n | - | unsigned char | - | TAB_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Status der Leitung zwischen ZSG und CA-Taster/TAGE in der  Fahrertür. Siehe Table TAB_CA_TAGE_ER_LEITUNG |
| STAT_TAGE_ER_BFT | 0-n | - | unsigned char | - | TAB_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Status der Leitung zwischen ZSG und CA-Taster/TAGE in der  Beifahrertür. Siehe Table TAB_CA_TAGE_ER_LEITUNG |
| STAT_TAGE_ER_FTH | 0-n | - | unsigned char | - | TAB_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Status der Leitung zwischen ZSG und CA-Taster/TAGE in der  Fahrertür hinten. Siehe Table TAB_CA_TAGE_ER_LEITUNG |
| STAT_TAGE_ER_BFTH | 0-n | - | unsigned char | - | TAB_CA_TAGE_ER_LEITUNG | - | - | - | Das Result enthält den Status der Leitung zwischen ZSG und CA-Taster/TAGE in der  Beifahrertür hinten. Siehe Table TAB_CA_TAGE_ER_LEITUNG |
| STAT_TAGE_FT_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status des CA-Taster oder der TAGE Entriegeln-Leitung der Fahrerseite vorne. Siehe Table TAB_CA_TAGE_SPERRSTATUS |
| STAT_TAGE_FT_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status der TAGE Daten-Leitung der Fahrerseite vorne. Siehe Table TAB_CA_TAGE_SPERRSTATUS |
| STAT_TAGE_BFT_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status des CA-Taster oder der TAGE Entriegeln-Leitung der Beifahrerseite vorne. Siehe Table TAB_CA_TAGE_SPERRSTATUS |
| STAT_TAGE_BFT_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status der TAGE Daten-Leitung der Beifahrerseite vorne. Siehe Table TAB_CA_TAGE_SPERRSTATUS |
| STAT_TAGE_FTH_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status des CA-Taster oder der TAGE Entriegeln-Leitung der Fahrerseite hinten. Siehe Table TAB_CA_TAGE_SPERRSTATUS |
| STAT_TAGE_FTH_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status der TAGE Daten-Leitung der Fahrerseite hinten. Siehe Table TAB_CA_TAGE_SPERRSTATUS |
| STAT_TAGE_BFTH_ER_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status des CA-Taster oder der TAGE Entriegeln-Leitung der Beifahrerseite hinten. Siehe Table TAB_CA_TAGE_SPERRSTATUS |
| STAT_TAGE_BFTH_DATA_SPERRSTATUS | 0-n | - | unsigned char | - | TAB_CA_TAGE_SPERRSTATUS | - | - | - | Das Result enthält den (Sperr-)Status der TAGE Daten-Leitung der Beifahrerseite hinten. Siehe Table TAB_CA_TAGE_SPERRSTATUS |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE394_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CA_TAGE_ER_FT | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle TAGE Fahrertür  - Entriegeln Leitung. |
| STAT_CA_TAGE_ER_BFT | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle TAGE Beifahrertür  - Entriegeln Leitung. |
| STAT_CA_TAGE_ER_FTH | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle TAGE Fahrertür hinten  - Entriegeln Leitung. |
| STAT_CA_TAGE_ER_BFTH | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle TAGE Beifahrertür hinten  - Entriegeln Leitung. |
| STAT_CA_TOGGLETASTER_FT | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle CA Toggletaster Fahrertür. |
| STAT_CA_TOGGLETASTER_BFT | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle CA Toggletaster Beifahrertür. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve bytes. Always returns 0xFD as long as the byte is used as reserve byte. |
| STAT_CA_TZSHK | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Taster Zentralsichern Heckklappe (TZSHK). |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve bytes. Always returns 0xFD as long as the byte is used as reserve byte. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve bytes. Always returns 0xFD as long as the byte is used as reserve byte. |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve bytes. Always returns 0xFD as long as the byte is used as reserve byte. |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve bytes. Always returns 0xFD as long as the byte is used as reserve byte. |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve bytes. Always returns 0xFD as long as the byte is used as reserve byte. |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve bytes. Always returns 0xFD as long as the byte is used as reserve byte. |
| STAT_RESERVE_8 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve bytes. Always returns 0xFD as long as the byte is used as reserve byte. |
| STAT_RESERVE_9 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve bytes. Always returns 0xFD as long as the byte is used as reserve byte. |

### RES_0XE395_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZV_STATUS | 0-n | - | unsigned char | - | TAB_ZV_ZUSTAND | - | - | - | Globaler ZV-Status des ZV-Masters.  Siehe Table TAB_ZV_ZUSTAND. |
| STAT_ZV_URSACHE | 0-n | - | unsigned char | - | TAB_ZV_URSACHEN | - | - | - | Quelle/Ursache der letzten ZV-Aktion. Siehe Table TAB_ZV_URSACHE. Nur den folgende Werte sind möglich: 0,1,2,3,4,5,6,7,8,9,10,14,15,16,17,18,19,20,21,22,23,25,28,29,30,31,32,34,35,36,37,38, 40,41,42,43,44,45,200,201,202,203,204,205,206,254 |
| STAT_ZV_AKTION | 0-n | - | unsigned char | - | TAB_ZV_AKTIONEN | - | - | - | Das Ergebnis enthält die zuletzt durchgeführte ZV-Aktion. Siehe Table TAB_ZV_AKTION. Folgende Werte sind möglich: 1,2,3,4,100,101,102,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,168,169,170,171,173,174,175,177,179,200,255 |
| STAT_TAB_INDEX | 0-n | - | unsigned char | - | TAB_CA_SCHLUESSEL_POSITION | - | - | - | Nummer des Schlüssels (Index in der Transponder-Tabelle), falls die ZV-Aktion durch Fahrerinteraktion ausgelöst wurde (z.B. Aktivierung Tage/Taste auf IDG betätigt) bei der ein gültiger Schlüssel vorliegen muss. Siehe Table TAB_CAS_SCHLUESSEL_POSITION. |
| STAT_ZV_FT | 0-n | - | unsigned char | - | TAB_ZV_STATUS | - | - | - | Das Result enthält den Wert für den Status der ZV der Fahrertüre. Siehe Table TAB_ZSG_ZV_STATUS. Nur den folgende Werte sind möglich:  0,1,2 und 255. |
| STAT_ZV_BFT | 0-n | - | unsigned char | - | TAB_ZV_STATUS | - | - | - | Das Result enthält den Wert für den Status der ZV der Beifahrertüre. Siehe Table TAB_ZSG_ZV_STATUS. Nur den folgende Werte sind möglich:  0,1,2 und 255. |
| STAT_ZV_FTH | 0-n | - | unsigned char | - | TAB_ZV_STATUS | - | - | - | Das Result enthält den Wert für den Status der ZV der Fahrertüre hinten. Siehe Table TAB_ZSG_ZV_STATUS. Nur den folgende Werte sind möglich:  0,1,2 und 255. |
| STAT_ZV_BFTH | 0-n | - | unsigned char | - | TAB_ZV_STATUS | - | - | - | Das Result enthält den Wert für den Status der ZV der Beifahrertüre hinten. Siehe Table TAB_ZSG_ZV_STATUS. Nur den folgende Werte sind möglich:  0,1,2 und 255. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE396_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ZUSTAND_CLT | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Centerlock-Taster. |
| STAT_ZUSTAND_CLW_FAT_ER | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Centerlock Wippe Fahrertür Richtung Entriegeln. Siehe Table TAB_TASTER_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_CLW_BFT_ER | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Centerlock Wippe Beifahrertür Richtung Entriegeln.  Siehe Table TAB_TASTER_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_CLW_FT_VR | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Centerlock Wippe Fahrertür Richtung Verriegeln.  Siehe Table TAB_TASTER_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_CLW_BFT_VR | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Centerlock Wippe Beifahrertür Richtung Verriegeln. Siehe Table TAB_TASTER_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_TOEHKI | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Taster Oeffnen Heckklappe Innen (TOEHKI).  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_TOEHKA | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der  Bedienstelle Außentaster um die Heckklappe zu öffnen (TOEHKA).  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_TOEHS | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Taster um die Heckscheibe zu öffnen (TOEHS).  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_TOEHKU | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Taster um die Heckklappe unten zu öffnen bzw. schließen (TOEHKU).  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_TOEFKI | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle Taster um die Frontklappe Innen zu öffnen (TOEFKI).  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_HOTEL | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Bedienstelle HOTEL-Schalter.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_HKW_OEFFNEN | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Heckklappe Wippe öffnen.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_ZUSTAND_HKW_SCHLIESSEN | 0-n | high | unsigned char | - | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den Zustand der Heckklappe Wippe schließen.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE39D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TUERKONTAKT_FAT | 0-n | high | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür. |
| STAT_TUERKONTAKT_BFT | 0-n | high | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Beifahrertür |
| STAT_TUERKONTAKT_FATH | 0-n | high | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür hinten |
| STAT_TUERKONTAKT_BFTH | 0-n | high | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Beifahrertür hinten |
| STAT_TUERKONTAKT_BFTH_OBEN | 0-n | high | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Beifahrertür oben |
| STAT_TUERKONTAKT_FATH_OBEN | 0-n | high | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Türkontakt Fahrertür hinten oben |
| STAT_KONTAKT_HECKKLAPPE | 0-n | - | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Heckklappen-Kontakt |
| STAT_KONTAKT_HECKKLAPPE_UNTEN | 0-n | - | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des Heckklappen-Kontakts unten. |
| STAT_KONTAKT_HECKKLAPPE_VORRAST | 0-n | - | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Heckklappen Vorrast-Kontakt |
| STAT_KONTAKT_HECKSCHEIBE | 0-n | - | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Heckscheibekontakt |
| STAT_KONTAKT_MOTORHAUBE | 0-n | high | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Motorhaube |
| STAT_KONTAKT_FRONTKLAPPE | 0-n | - | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang Frontklappen-Kontakt |
| STAT_KONTAKT_SPLITDOOR_LINKS | 0-n | - | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang links Splitdoor-Kontakt |
| STAT_KONTAKT_SPLITDOOR_RECHTS | 0-n | - | unsigned char | - | TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG | - | - | - | Das Result enthält den aktuellen Zustand des HW-Eingang rechts Splitdoor-Kontakt |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte muss immer 0xFD liefern |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte muss immer 0xFD liefern |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte muss immer 0xFD liefern |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte muss immer 0xFD liefern |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte muss immer 0xFD liefern |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte muss immer 0xFD liefern |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte muss immer 0xFD liefern |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte muss immer 0xFD liefern |

### RES_0XE3A0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_LICHT_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes.  |
| STAT_RESERVE_LICHT1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes.  |
| STAT_RESERVE_0 | 0-n | high | unsigned int | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_ACT_TC_TERM50_STARTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den Anlasser. |
| STAT_RESERVE_1 | 0-n | high | unsigned int | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_ACT_CL_BOOTLID_RELEASE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Heckklappenschloss. |
| STAT_ACT_CL_REARSCREEN_RELEASE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Heckscheibenschloss. |
| STAT_ACT_WW_FRONT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Frontwischer Sensor. |
| STAT_ACT_WW_FRONT_BREAK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den bremsen von dem Frontwischer. |
| STAT_ACT_WW_REAR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer. |
| STAT_ACT_WW_REAR_BREAK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer Bremse. |
| STAT_ACT_WW_REAR2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer_2 oder nach Codierung Heckscheibenheizung_2. |
| STAT_ACT_WW_REAR2_BREAK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer_2 oder nach Codierung Heckscheibenheizung_2 bremse. |
| STAT_ACT_WW_SUNBLIND_UP_HS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die öffnen Ansteuerung des hinteren Sonnenrollos schließen High Side. |
| STAT_ACT_WW_SUNBLIND_DOWN_HS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für schliessen Ansteuerung des hinteren Sonnenrollos öffnen High Side. |
| STAT_ACT_WW_SUNBLIND_UP_LS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die öffnen Ansteuerung des hinteren Sonnenrollos schliessen Low Side. |
| STAT_ACT_WW_SUNBLIND_DOWN_LS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für schliessen Ansteuerung des hinteren Sonnenrollos öffnen Low Side. |
| STAT_ACT_AC_MAGNETIC_CLUTCH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Klimakompressor Magnetkupplung. |
| STAT_RESERVE_2 | 0-n | high | unsigned int | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_ACT_AC_COMPRESSOR_VALVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Klima Kompressorventil. |
| STAT_ACT_AC_WATER_PUMP_ADD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Zusatzwasserpumpe. |
| STAT_ACT_AC_HEATING_VALVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Heizungsabsperrventil. |
| STAT_ACT_HC_JET_WASHER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Waschdüsenheizung. |
| STAT_ACT_HC_MIRROR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die diskrete Aussenspiegelheizung. |
| STAT_ACT_PF_5V0_SENSOR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die 5V0 Sensorausgänge. |
| STAT_ACT_WW_PUMP_LS_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des LS Ausgangs 1 für die Waschpumpe. |
| STAT_ACT_WW_PUMP_LS_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des LS Ausgangs 2 für die Waschpumpe. |
| STAT_ACT_WW_PUMP_HS_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des HS Ausgangs 1 für die Waschpumpe. |
| STAT_ACT_WW_PUMP_HS_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des HS Ausgangs 2 für die Waschpumpe. |
| STAT_ACT_WW_HEAD_LIGHT_CLEANING_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Scheinwerferreinigungspumpe. |
| STAT_ACT_PF_HORN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Hupe. |
| STAT_ACT_PF_H_BRIDGE_LS_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des LS Ausgangs 1 der Halbbrücke (z.B. Heckklappe). |
| STAT_ACT_PF_H_BRIDGE_LS_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des LS Ausgangs 2 der Halbbrücke (z.B. Heckklappe). |
| STAT_ACT_PF_H_BRIDGE_HS_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des HS Ausgangs 1 der Halbbrücke (z.B. Heckklappe). |
| STAT_ACT_PF_H_BRIDGE_HS_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des HS Ausgangs 2 der Halbbrücke (z.B. Heckklappe). |
| STAT_RESERVE_DATA | DATA | high | data[202] | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes.  |

### RES_0XE3A1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_LICHT_DATA | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes.  |
| STAT_RESERVE_LICHT1_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes.  |
| STAT_RESERVE_0 | 0-n | high | unsigned int | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_ACT_TC_TERM50_STARTER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den Anlasser. |
| STAT_RESERVE_1 | 0-n | high | unsigned int | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_ACT_CL_BOOTLID_RELEASE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Heckklappenschloss. |
| STAT_ACT_CL_REARSCREEN_RELEASE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Heckscheibenschloss. |
| STAT_ACT_WW_FRONT_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Frontwischer Sensor. |
| STAT_ACT_WW_FRONT_BREAK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den bremsen von dem Frontwischer. |
| STAT_ACT_WW_REAR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer. |
| STAT_ACT_WW_REAR_BREAK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer Bremse. |
| STAT_ACT_WW_REAR2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer_2 oder nach Codierung Heckscheibenheizung_2. |
| STAT_ACT_WW_REAR2_BREAK_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für den diskreten Heckwischer_2 oder nach Codierung Heckscheibenheizung_2 bremse. |
| STAT_ACT_WW_SUNBLIND_UP_HS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die öffnen Ansteuerung des hinteren Sonnenrollos schließen High Side. |
| STAT_ACT_WW_SUNBLIND_DOWN_HS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für schliessen Ansteuerung des hinteren Sonnenrollos öffnen High Side. |
| STAT_ACT_WW_SUNBLIND_UP_LS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die öffnen Ansteuerung des hinteren Sonnenrollos schliessen Low Side. |
| STAT_ACT_WW_SUNBLIND_DOWN_LS_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für schliessen Ansteuerung des hinteren Sonnenrollos öffnen Low Side. |
| STAT_ACT_AC_MAGNETIC_CLUTCH_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Klimakompressor Magnetkupplung. |
| STAT_RESERVE_2 | 0-n | high | unsigned int | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_ACT_AC_COMPRESSOR_VALVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für das Klima Kompressorventil. |
| STAT_ACT_AC_WATER_PUMP_ADD_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Zusatzwasserpumpe. |
| STAT_ACT_AC_HEATING_VALVE_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Heizungsabsperrventil. |
| STAT_ACT_HC_JET_WASHER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Waschdüsenheizung. |
| STAT_ACT_HC_MIRROR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die diskrete Aussenspiegelheizung. |
| STAT_ACT_PF_5V0_SENSOR_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die 5V0 Sensorausgänge. |
| STAT_ACT_WW_PUMP_LS_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des LS Ausgangs 1 für die Waschpumpe. |
| STAT_ACT_WW_PUMP_LS_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des LS Ausgangs 2 für die Waschpumpe. |
| STAT_ACT_WW_PUMP_HS_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des HS Ausgangs 1 für die Waschpumpe. |
| STAT_ACT_WW_PUMP_HS_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des HS Ausgangs 2 für die Waschpumpe. |
| STAT_ACT_WW_HEAD_LIGHT_CLEANING_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Scheinwerferreinigungspumpe. |
| STAT_ACT_PF_HORN_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters für die Hupe. |
| STAT_ACT_PF_H_BRIDGE_LS_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des LS Ausgangs 1 der Halbbrücke (z.B. Heckklappe). |
| STAT_ACT_PF_H_BRIDGE_LS_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des LS Ausgangs 2 der Halbbrücke (z.B. Heckklappe). |
| STAT_ACT_PF_H_BRIDGE_HS_1_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des HS Ausgangs 1 der Halbbrücke (z.B. Heckklappe). |
| STAT_ACT_PF_H_BRIDGE_HS_2_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Das Result enthält den aktuellen Status des Komfort Kurzschlusscounters des HS Ausgangs 2 der Halbbrücke (z.B. Heckklappe). |
| STAT_RESERVE_DATA | DATA | high | data[202] | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes.  |

### RES_0XE3B4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARNBLINKLICHT_TASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0: Taster Warnblinklicht nicht betätigt 1: Taster Warnblinklicht betätigt |
| STAT_BREMSLICHT_SCHALTER | 0-n | - | unsigned char | - | TAB_BREMSLICHT_SCHALTER | - | - | - | Das Result enthält den aktuellen Zustand des Bremslichtschalters.  Siehe Table TAB_BREMSLICHT_SCHALTER. |
| STAT_RUECKWAERTSGANG_SCHALTER | 0-n | - | unsigned char | - | TAB_RUECKWAERTSGANG_SCHALTER | - | - | - | Das Result enthält den aktuellen Zustand des Rückwärtsgangschalters.  Siehe Table TAB_RUECKWAERTSGANG_SCHALTER. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE3B6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UNBELEGT_0 | 0/1 | high | unsigned char | - | - | - | - | - | Diese Ergebnis wird für Rückwärtskompatibilität besetzt lassen. |
| STAT_AUSGANG_ABBLENDLICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_ABBLENDLICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_TAGFAHRLICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_TAGFAHRLICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_SEITENMARKIERUNGSLICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_SEITENMARKIERUNGSLICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_FERNLICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_FERNLICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_POSITIONLICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_POSITIONLICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_NEBELSCHEINWERFER_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_NEBELSCHEINWERFER_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_FAHRTRICHTUNGANZEIGER_VORNE_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_FAHRTRICHTUNGSANZEIGER_VORNE_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_UNBELEGT_1 | 0/1 | high | unsigned char | - | - | - | - | - | Diese Ergebnis wird für Rückwärtskompatibilität besetzt lassen. |
| STAT_AUSGANG_FAHRTRICHTUNGSANZEIGER_ZUZAETZLICH_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_FAHRTRICHTUNGSANZEIGER_ZUZAETZLICHL_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_UNBELEGT_2 | 0/1 | high | unsigned char | - | - | - | - | - | Diese Ergebnis wird für Rückwärtskompatibilität besetzt lassen. |
| STAT_UNBELEGT_3 | 0/1 | high | unsigned char | - | - | - | - | - | Diese Ergebnis wird für Rückwärtskompatibilität besetzt lassen. |
| STAT_AUSGANG_SCHLUSSLICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_SCHLUSSLICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_SCHLUSSLICHT_KOFFERRAUMDECKEL_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_SCHLUSSLICHT_KOFFERRAUMDECKEL_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_BREMSLICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_BREMSLICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_BREAK_FORCE_DISPLAY_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_BREAK_FORCE_DISPLAY_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_NEBELSCHLUSSLICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_NEBELSCHLUSSLICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_RUECKFAHRLICHT_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_RUECKFAHRLICHT_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_FAHRTRICHTUNGSANZEIGER_HINTEN_LINKS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_FAHRTRICHTUNGSANZEIGER_HINTEN_RECHTS | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_KENNZEICHENLICHT | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_BREMSLICHT_MITTE | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_UNBELEGT_4 | 0/1 | high | unsigned int | - | - | - | - | - | Diese Ergebnis wird für Rückwärtskompatibilität besetzt lassen. |
| STAT_AUSGANG_WARNBLINKLICHT_LED | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LCI_0 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LCI_1 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LCI_2 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LCI_3 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LCI_4 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LCI_5 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LCI_6 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LCI_7 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LCI_8 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LC_R0 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LC_R1 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LC_R2 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_LC_R3 | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_PDC_LED | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_HDC_LED | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_SPECIAL_FUNCTION_1_LED | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_AUSGANG_MSA_LED | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss  1: Kurzschluss liegt an |
| STAT_AUSGANG_SST_LED | 0/1 | high | unsigned char | - | - | - | - | - | 0: Kein Kurzschluss 1: Kurzschluss liegt an |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE3B7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UNBELEGT_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | In Abst. |
| STAT_BETRIEBSMINUTEN_AL_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten AL_L |
| STAT_BETRIEBSMINUTEN_AL_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten AL_R |
| STAT_BETRIEBSMINUTEN_TFL_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten TFL_L |
| STAT_BETRIEBSMINUTEN_TFL_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten TFL_R |
| STAT_BETRIEBSMINUTEN_SML_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten SML_L |
| STAT_BETRIEBSMINUTEN_SML_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten SML_R |
| STAT_BETRIEBSMINUTEN_FL_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten FL_L |
| STAT_BETRIEBSMINUTEN_FL_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten FL_R |
| STAT_BETRIEBSMINUTEN_POL_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten POL_L |
| STAT_BETRIEBSMINUTEN_POL_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten POL_R |
| STAT_BETRIEBSMINUTEN_NSW_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten NSW_L |
| STAT_BETRIEBSMINUTEN_NSW_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten NSW_R |
| STAT_BETRIEBSMINUTEN_FRA_V_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten FRA_V_L |
| STAT_BETRIEBSMINUTEN_FRA_V_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten FRA_V_R |
| STAT_UNBELEGT_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | In Abst. |
| STAT_BETRIEBSMINUTEN_FRA_Z_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten FRA_Z_L |
| STAT_BETRIEBSMINUTEN_FRA_Z_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten FRA_Z_R |
| STAT_BETRIEBSMINUTEN_BIX_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten BIX_L |
| STAT_BETRIEBSMINUTEN_BIX_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten BIX_R |
| STAT_BETRIEBSMINUTEN_SL_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten SL_L |
| STAT_BETRIEBSMINUTEN_SL_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten SL_R |
| STAT_BETRIEBSMINUTEN_SL_2_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten SL_2_L |
| STAT_BETRIEBSMINUTEN_SL_2_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten SL_2_R |
| STAT_BETRIEBSMINUTEN_BL_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten BL_L |
| STAT_BETRIEBSMINUTEN_BL_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten BL_R |
| STAT_BETRIEBSMINUTEN_BFD_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten BFD_L |
| STAT_BETRIEBSMINUTEN_BFD_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten BFD_R |
| STAT_BETRIEBSMINUTEN_NSL_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten NSL_L |
| STAT_BETRIEBSMINUTEN_NSL_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten NSL_R |
| STAT_BETRIEBSMINUTEN_RFS_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten RFS_L |
| STAT_BETRIEBSMINUTEN_RFS_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten RFS_R |
| STAT_BETRIEBSMINUTEN_FRA_H_L_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten FRA_H_L |
| STAT_BETRIEBSMINUTEN_FRA_H_R_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten FRA_H_R |
| STAT_BETRIEBSMINUTEN_KZL_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten KZL |
| STAT_BETRIEBSMINUTEN_BL_M_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten BL_M |
| STAT_UNBELEGT_3_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | In Abst. |
| STAT_BETRIEBSMINUTEN_WBL_LED_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten WBL_LED |
| STAT_BETRIEBSMINUTEN_LCI_0_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LCI_0 |
| STAT_BETRIEBSMINUTEN_LCI_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LCI_1 |
| STAT_BETRIEBSMINUTEN_LCI_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LCI_2 |
| STAT_BETRIEBSMINUTEN_LCI_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LCI_3 |
| STAT_BETRIEBSMINUTEN_LCI_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LCI_4 |
| STAT_BETRIEBSMINUTEN_LCI_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LCI_5 |
| STAT_BETRIEBSMINUTEN_LCI_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LCI_6 |
| STAT_BETRIEBSMINUTEN_LCI_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LCI_7 |
| STAT_BETRIEBSMINUTEN_LCI_8_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LCI_8 |
| STAT_BETRIEBSMINUTEN_LC_R0_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LC_R0 |
| STAT_BETRIEBSMINUTEN_LC_R1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LC_R1 |
| STAT_BETRIEBSMINUTEN_LC_R2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LC_R2 |
| STAT_BETRIEBSMINUTEN_LC_R3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten LC_R3 |
| STAT_BETRIEBSMINUTEN_PDC_LED_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten PDC_LED |
| STAT_BETRIEBSMINUTEN_HDC_LED_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten HDC_LED |
| STAT_BETRIEBSMINUTEN_SPECIAL_FUNCTION_1_LED_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten SPECIAL_FUNCTION_1_LED |
| STAT_BETRIEBSMINUTEN_MSA_LED_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten MSA_LED |
| STAT_BETRIEBSMINUTEN_SST_LED_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Anzahl Betriebsminuten SST_LED |
| STAT_RESERVE_0_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFD ausgegeben. |
| STAT_RESERVE_1_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFD ausgegeben. |
| STAT_RESERVE_2_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFD ausgegeben. |
| STAT_RESERVE_3_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFD ausgegeben. |
| STAT_RESERVE_4_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFD ausgegeben. |
| STAT_RESERVE_5_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFD ausgegeben. |
| STAT_RESERVE_6_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFD ausgegeben. |
| STAT_RESERVE_7_WERT | min | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFD ausgegeben. |

### RES_0XE3B8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NULLSTELLUNG | 0/1 | - | unsigned char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Nullstellung; 1: Lenkstock Blinker in Nullstellung |
| STAT_LINKS_TIPP | 0/1 | - | unsigned char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Stellung Blinker Tipp links; 1: Lenkstock Blinker in Stellung Blinker links |
| STAT_LINKS_DAUER | 0/1 | - | unsigned char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Stellung Blinker Dauer links; 1: Lenkstock Blinker in Stellung Blinker Dauer links |
| STAT_RECHTS_TIPP | 0/1 | - | unsigned char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Stellung Blinker Tipp rechts; 1: Lenkstock Blinker in Stellung Blinker rechts |
| STAT_RECHTS_DAUER | 0/1 | - | unsigned char | - | - | - | - | - | 0: Lenkstock Blinker nicht in Stellung Blinker Dauer rechts; 1: Lenkstock Blinker in Stellung Blinker Dauer rechts |
| STAT_BORDCOMPUTER | 0/1 | - | unsigned char | - | - | - | - | - | 0: Lenkstock Blinker Bordcomputer-Taster (BC) nicht betätigt; 1: Lenkstock Blinker Bordcomputer-Taster (BC) betätigt. |
| STAT_FERNLICHTASSISTENT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Lenkstock Blinker Fernlichtassistant-Taster (FLA) nicht betätigt; 1: Lenkstock Blinker Fernlichtassistant-Taster (FLA) betätigt. |
| STAT_FERNLICHT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Lenkstock Blinker Fernlicht nicht betätigt; 1: Lenkstock Blinker Fernlicht betätigt. |
| STAT_LICHTHUPE | 0/1 | - | unsigned char | - | - | - | - | - | 0: Lenkstock Blinker Lichthupe nicht betätigt; 1: Lenkstock Blinker Lichthupe betätigt. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE3B9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UNBELEGT_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Für Rückwärtskompatibilität mit BDC2015 |
| STAT_AUSGANG_AL_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_AL_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_TFL_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_TFL_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_SML_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_SML_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_FL_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_FL_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_POL_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_POL_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_NSW_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_NSW_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_FRA_V_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_FRA_V_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_UNBELEGT_2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Für Rückwärtskompatibilität mit BDC2015 |
| STAT_AUSGANG_FRA_Z_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_FRA_Z_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_BIX_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_BIX_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_SL_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_SL_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_SL_2_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_SL_2_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_BL_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_BL_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_BFD_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_BFD_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_NSL_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_NSL_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_RFS_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_RFS_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_FRA_H_L_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_FRA_H_R_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_KZL_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_BL_M_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_UNBELEGT_3_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Für Rückwärtskompatibilität mit BDC2015 |
| STAT_AUSGANG_WBL_LED_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LCI_0_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LCI_1_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LCI_2_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LCI_3_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LCI_4_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LCI_5_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LCI_6_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LCI_7_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LCI_8_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LC_R0_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LC_R1_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LC_R2_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_LC_R3_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_PDC_LED_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_HDC_LED_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_SPECIAL_FUNCTION_1_LED_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_MSA_LED_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_AUSGANG_SST_LED_EIN | 0/1 | high | unsigned char | - | - | - | - | - | 0: Lampenausgang aus; 1: Lampenausgang ein. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | - | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | - | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | - | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | - | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | - | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | - | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | - | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | - | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE3BA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NEBELSCHEINWERFER_TASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0= Taster Nebelscheinwerfer nicht betätigt;  1= Taster Nebelscheinwerfer betätigt. |
| STAT_NEBELSCHLUSSLICHT_TASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0= Taster Nebelschlussleuchte nicht betätigt;  1= Taster Nebelschlussleuchte betätigt. |
| STAT_PARKLICHT_TASTER_LINKS | 0/1 | - | unsigned char | - | - | - | - | - | 0= Taster Parklicht links nicht betätigt;  1= Taster Parklicht links betätigt. |
| STAT_PARKLICHT_TASTER_RECHTS | 0/1 | - | unsigned char | - | - | - | - | - | 0= Taster Parklicht rechts nicht betätigt;  1= Taster Parklicht rechts betätigt. |
| STAT_OFF_TASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0= Taster 0/OFF nicht betätigt;  1= Taster 0/OFF betätigt. |
| STAT_STANDLICHT_TASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0= Taster Standlicht nicht betätigt;  1= Taster Standlicht betätigt. |
| STAT_FAHRLICHT_AUTOMATIK_TASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0= Taster Fahrlichtkontrolle nicht betätigt;  1= Taster Fahrlichtkontrolle betätigt. |
| STAT_MANUELLES_FAHRLICHT_TASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0= Taster manuelles Fahrlicht nicht betätigt;  1= Taster manuelles Fahrlicht betätigt. |
| STAT_NIGHT_VISION_TASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0= Taster für night vision nicht betätigt;  1= Taster für night vision betätigt. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE3BB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEL_STELLUNG_MANUELL_FAHRLICHT | 0/1 | - | unsigned char | - | - | - | - | - | BEL-Stellung für Manuelles Fahrlicht (2):  0: Nicht aktiv; 1: Aktiv. |
| STAT_BEL_STELLUNG_FAHRLICHT_AUTOMATIK | 0/1 | - | unsigned char | - | - | - | - | - | BEL-Stellung für Fahrlicht automatik (A):  0: Nicht aktiv; 1: Aktiv. |
| STAT_BEL_STELLUNG_STANDLICHT | 0/1 | - | unsigned char | - | - | - | - | - | BEL-Stellung für Standlicht (1):  0: Nicht aktiv;  1: Aktiv. |
| STAT_BEL_STELLUNG_NEUTRALSTELLUNG | 0/1 | - | unsigned char | - | - | - | - | - | BEL-Stellung for 'Licht aus' bzw. Neutralstellung (0):  0: Nicht aktiv;  1: Aktiv. |
| STAT_BEL_STELLUNG_PARKLICHT_LINKS | 0/1 | - | unsigned char | - | - | - | - | - | BEL-Stellung für Parklicht links:  0: Nicht aktiv;  1: Aktiv. |
| STAT_BEL_STELLUNG_PARKLICHT_RECHTS | 0/1 | - | unsigned char | - | - | - | - | - | BEL-Stellung für Parklicht rechts:  0: Nicht aktiv;  1: Aktiv. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE3D0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEDIENSTELLE_POTI_DIMMUNG_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Potiwert des Suchbeleuchtungsrändels:  0 - 254: gültiger Wertebereich;  255: ungültig. |
| STAT_BEDIENSTELLEN_ILE1_INNENLICHTTASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0: Innenlichttaster ILE1 nicht betätigt;  1: Innenlichttaster ILE1 betätigt. |
| STAT_BEDIENSTELLEN_ILE2_3_4_INNENLICHTTASTER | 0/1 | - | unsigned char | - | - | - | - | - | 0: Innenlichttaster ILE2/3/4 nicht betätigt;  1: Innenlichttaster ILE2/3/4 betätigt.  Derzeit ist keine Unterscheidung zwischen Innenlichttaster ILE2/3/4 möglich |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE3D1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SLAVE_VERBAUORT_NAD1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD2_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD3_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD4_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD5_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD6_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD7_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD8_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD9 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD9_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD10 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD10_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD11 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD11_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD12 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD12_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD13 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD13_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD14 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD14_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD15 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD15_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD16 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD16_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD17 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD17_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD18 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD18_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD19 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD19_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD20 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD20_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD21 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD21_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD22 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD22_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD23 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD23_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD24 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD24_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD25 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD25_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_SLAVE_VERBAUORT_NAD26 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Lin Slave Verbauort aus Konfiguration ausgelesen. |
| STAT_LED_BLUE_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der Blauen  LED des LIN-Slaves |
| STAT_LED_GREEN_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der grünen LED des LIN-Slaves |
| STAT_LED_RED_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Rückgemeldeter Status der roten LED des LIN-Slaves |
| STAT_BRIGHTNESS_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Statuswert Helligkeit des LIN-Slaves |
| STAT_LED_WHITE_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status der weißen Fussraum LED |
| STAT_FEHLER_KURZSCHLUSS_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Kurzschlussfehler |
| STAT_FEHLER_OVERTEMP_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Übertemperaturfehler |
| STAT_FEHLER_OPEN_LOAD_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter Open Load Fehler |
| STAT_FEHLER_INTERN_NAD26_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Gemeldeter interer Fehler |
| STAT_METHODE_AUTOADRESSIERUNG | 0-n | high | unsigned char | - | TAB_LIN_METHODE_ADRESSIERUNG | - | - | - | Liefert den aktuellen Wert der verwendeten Autoadressierungsmethode. |

### RES_0XE3D3_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONFIG_CHECK_LIN_SLAVE_1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_9 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_9 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_10 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_10 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_11 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_11 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_12 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_12 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_13 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_13 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_14 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_14 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_15 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_15 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_16 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_16 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_17 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_17 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_18 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_18 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_19 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_19 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_20 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_20 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_21 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_21 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_22 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_22 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_23 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_23 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_24 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_24 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_25 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_25 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_26 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_26 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |

### RES_0XE3D4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONFIG_CHECK_LIN_SLAVE_1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_1 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_2 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_3 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_4 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_5 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_6 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_7 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_8 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_9 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_9 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_10 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_10 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_11 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_11 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_12 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_12 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_13 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_13 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_14 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_14 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_15 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_15 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_16 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_16 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_17 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_17 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_18 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_18 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_19 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_19 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_20 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_20 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_21 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_21 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_22 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_22 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_23 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_23 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_24 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_24 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_25 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_25 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |
| STAT_KONFIG_CHECK_LIN_SLAVE_26 | 0-n | high | unsigned char | - | TAB_INNENLICHT_DIGITAL | - | - | - | Überprüft ob die Konfiguration der LIN_Module zur Kodierung passen. Siehe Table TAB_INNENLICHT_DIGITAL. |
| STAT_VERBAUORT_LIN_SLAVE_26 | 0-n | high | unsigned char | - | TAB_INNENLICHT_VERBAUORT_LIN | - | - | - | Verbauort des LIN-Slaves |

### RES_0XE3EF_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LENKSTOCK_WISCHER_FRONTWASCHEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Frontwaschen;  1= Lenkstock Wischer in Stellung Frontwaschen |
| STAT_LENKSTOCK_WISCHER_HECKWASCHEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Heckwaschen;  1= Lenkstock Wischer in Stellung Heckwaschen |
| STAT_LENKSTOCK_WISCHER_HECKWISCHEN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= Lenkstock Wischer nicht in Stellung Heckwischen;  1= Lenkstock Wischer in Stellung Heckwischen |
| STAT_LENKSTOCK_WISCHER_POS_INTERVALL | 0/1 | - | unsigned char | - | - | - | - | - | 0= Lenkstock Wischer nicht in Stellung Intervall oder Automatik; 1= Lenkstock Wischer in Stellung Intervall oder Automatik |
| STAT_LENKSTOCK_WISCHER_POSITION | 0-n | - | unsigned char | - | TAB_LENKSTOCK_WISCHER_POSITION | - | - | - | Auslesen des Lenkstockwischer Position. Siehe Table TAB_LENKSTOCK_WISCHER_POSITION.  Hinweis: Bei einem Schalter entspricht die Nullstellung der Stufe aus, bei einem Taster entspricht die Nullstellung der Mittelstellung |
| STAT_LENKSTOCK_WISCHER_RAENDEL_NR | 0-n | - | unsigned char | - | TAB_WISCHER_RAENDEL | - | - | - | VS-Result Lenkstock Wischer;  0= Wischer Rändelrad Stufe 1;  1= Wischer Rändelrad Stufe 2;  2= Wischer Rändelrad Stufe 3;  3= Wischer Rändelrad Stufe 4;  4= Wischer Rändelrad ungültige Position; Hinweis: Numerierung bleibt erhalten, auch bei Entfall einer oder mehrerer Funktionen |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE3F0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONTWISCHER_LIN_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob der Frontwischer als LIN-Modul kodiert ist. |
| STAT_FRONTWISCHER_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob ein Frontwischer kodiert ist. |
| STAT_HECKWISCHER_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob ein Heckwischer kodiert ist. |
| STAT_HECKWISCHER_2_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob ein zweiter Heckwischmotor kodiert ist. |
| STAT_SRA_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob die Scheinwerferreinigungsanlage kodiert ist. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE3F1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FRONT_SCHEIBENWISCHER_POSITION | 0-n | - | unsigned char | - | TAB_WISCHER_POSITION | - | - | - | Status Position Frontscheibenwischer. Siehe Table TAB_WISCHER_POSITION. |

### RES_0XE3F2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HECKWISCHER_POSITION | 0-n | high | unsigned char | - | TAB_WISCHER_POSITION | - | - | - | Gibt aus in welche Modus bzw. Position den Frontscheibenwischer ist.  Siehe Table TAB_WISCHER_POSITION |

### RES_0XE430_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BF_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_BF_STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Status Heizungs Stufe der Sitzheizung. Siehe Table TAB_SITZHEIZUNG_STUFE |
| STAT_SITZHEIZUNG_BF_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Kissen Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_BF_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Lehne Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_BF_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_BF_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_BF_TIMEOUT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_BYTE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |

### RES_0XE431_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_BFH_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_BFH_STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Status Heizungs Stufe der Sitzheizung. Siehe Table TAB_SITZHEIZUNG_STUFE |
| STAT_SITZHEIZUNG_BFH_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Kissen Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_BFH_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Lehne Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_BFH_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_BFH_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_BFH_TIMEOUT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |
| STAT_RESERVE_BYTE | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |
| STAT_RESERVE_BYTE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |
| STAT_RESERVE_BYTE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |
| STAT_RESERVE_BYTE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |

### RES_0XE432_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FA_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_FA_STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Status Heizungs Stufe der Sitzheizung. Siehe Table TAB_SITZHEIZUNG_STUFE |
| STAT_SITZHEIZUNG_FA_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Kissen Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_FA_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Lehne Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_FA_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_FA_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_FA_TIMEOUT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |
| STAT_RESERVE_BYTE | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |
| STAT_RESERVE_BYTE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |
| STAT_RESERVE_BYTE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |
| STAT_RESERVE_BYTE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |

### RES_0XE433_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FAH_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung aus  1: Sitzheizung ein |
| STAT_SITZHEIZUNG_FAH_STUFE | 0-n | - | unsigned char | - | TAB_SITZHEIZUNG_STUFE | - | - | - | Status Heizungs Stufe der Sitzheizung. Siehe Table TAB_SITZHEIZUNG_STUFE |
| STAT_SITZHEIZUNG_FAH_TEMP_KISSEN_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Kissen Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_FAH_TEMP_LEHNE_WERT | °C | - | signed char | - | - | 1.0 | 1.0 | 0.0 | Messwert Temperatur Sitzheizung Lehne Wertebereich: -40 bis 85°C Wert 87 = ungültig oder Temperatur nicht bekannt, da Sitzheizung nicht eingeschaltet ist |
| STAT_SITZHEIZUNG_FAH_VERBRAUCHSREDUZIERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Verbrauchsreduzierung nicht aktiv  1: Verbrauchsreduzierung aktiv |
| STAT_SITZHEIZUNG_FAH_NOTBETRIEB_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sitzheizung nicht in Notbetrieb  1: Sitzheizung in Notbetrieb |
| STAT_SITZHEIZUNG_FAH_TIMEOUT_EIN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Kein Aus wegen Time-Out  1: Aus wegen Time-Out |
| STAT_RESERVE_BYTE | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |
| STAT_RESERVE_BYTE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |
| STAT_RESERVE_BYTE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |
| STAT_RESERVE_BYTE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Byte |

### RES_0XE434_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_FA_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus ob die Fahrer-Sitzheizung vorhanden und kodiert ist. Siehe Table TAB_AUSSTATTUNG_KODIERT |
| STAT_SITZHEIZUNG_BF_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus ob die Beifahrer-Sitzheizung vorhanden und kodiert ist. Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_SITZHEIZUNG_FAH_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus ob die Fahrer-Sitzheizung hinten vorhanden und kodiert ist. Siehe Table TAB_AUSSTATTUNG_KODIERT.  Entspricht in G07 der Sitzheizung von der Fahrerseite  in der 3. Sitzreihe. |
| STAT_SITZHEIZUNG_BFH_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus ob die Beifahrer-Sitzheizung hinten vorhanden und kodiert ist. Siehe Table TAB_AUSSTATTUNG_KODIERT. Entspricht in G07 der Sitzheizung von der Beifahrerseite  in der 3. Sitzreihe. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE435_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SITZHEIZUNG_HINTEN_TASTEN_VORHANDEN | 0-n | high | unsigned char | - | - | - | - | - | Gibt aus ob die beide Sitzheizungstasten hinten kodiert sind. Wenn nicht vorhanden sind die weitere Ergebnisse nicht sinnvoll. |
| STAT_SITZHEIZUNG_HINTEN_TASTER_LINKS | 0-n | - | unsigned char | - | - | - | - | - | Status des hinteren Taster links. |
| STAT_SITZHEIZUNG_HINTEN_TASTER_RECHTS | 0-n | - | unsigned char | - | - | - | - | - | Status des hinteren Taster rechts |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE440_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HEIZUNGSABSPERRVENTIL_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob ein Heizungs-Absperrventil kodiert ist.  Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_DRUCKSENSOR_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob ein Drucksensor kodiert ist.  Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_KOMPRESSORKUPPLUNG_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob eine Kompressorkupplung kodiert ist.  Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_AUC_SENSOR_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob eine AUC Sensor kodiert ist.  Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_UMSCHALTVENTIL_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob ein Kühlmittelumschaltventil kodiert ist..  Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_FONDSCHICHTUNG_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob eine Fondschichtung kodiert ist..  Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_KOMPRESSORVENTIL_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob ein Kompressorventil kodiert ist.  Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_ZUSATZWASSERPUMPE_VORHANDEN | 0-n | high | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Gibt aus, ob eine Zusatzwasserpumpe für Klimaanlage kodiert ist.  Siehe Table TAB_AUSSTATTUNG_KODIERT. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE442_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ABSPERRVENTIL | 0/1 | high | unsigned char | - | - | - | - | - | Gibt zurück ob die Heizungs- bzw. Külmittelsabsperrventil bestromt oder nicht. 0=Nicht bestromt;  1=Bestromt.  Derivatspezifische Ventiltypen beachten!  (Normally-Open- und Normally-Close-Ventile werden verbaut.) |

### RES_0XE450_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSSENSPIEGEL_LIN_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSENSPIEGEL_LIN_VORHANDEN | - | - | - | 0: Kein LIN-Aussenspiegel  1: LIN-Aussenspiegel |
| STAT_AUSSENSPIEGEL_ABBLENDEN_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSENSPIEGEL_ABBLENDEN | - | - | - | Welche Außenspiegel abblendbar sind. Siehe Table TAB_AUSSENSPIEGEL_ABBLENDEN. |
| STAT_AUSSENSPIEGEL_BEIKLAPPEN_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSENSPIEGEL_BEIKLAPPEN_VORHANDEN | - | - | - | Liefert ob die Außenspiegel beiklappen können. Siehe Table TAB_AUSSENSPIEGEL_BEIKLAPPEN_VORHANDEN |
| STAT_AUSSENSPIEGEL_HEIZUNG_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSENSPIEGEL_HEIZUNG_VORHANDEN | - | - | - | Liefert ob der Außenspiegelheizung kodiert ist. Siehe Table TAB_AUSSENSPIEGEL_HEIZUNG_VORHANDEN |
| STAT_AUSSENSPIEGEL_MEMORY_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSENSPIEGEL_MEMORY_VORHANDEN | - | - | - | Liefert ob der Außenspiegel memoryfunktion kodiert ist. Siehe Table TAB_AUSSENSPIEGEL_MEMORY_VORHANDEN |
| STAT_AUSSENSPIEGEL_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_AUSSENSPIEGEL_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_AUSSENSPIEGEL_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE451_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_KOMPASS_VORHANDEN | 0/1 | - | unsigned char | - | - | - | - | - | 0: Kompass-Spiegel nicht kodiert;  1: Kompass-Spiegel kodiert.  Wenn nicht kodiert liefern die folgende Ergebnisse keine sinnvolle Daten. |
| STAT_KOMPASS_MAGNET_ZONE | 0-n | - | unsigned char | - | TAB_KOMPASS_MAGNETZONE | - | - | - | Ausgabe Magnetzone (aus Slave).  Siehe Table TAB_KOMPASS_MAGNETZONE |
| STAT_KOMPASS_SPRACHE | 0-n | - | unsigned char | - | TAB_KOMPASS_SPRACHE | - | - | - | Kodierparameter aus dem Master für Spracheinstellung. Siehe Table TAB_KOMPASS_SPRACHE |
| STAT_KOMPASS_SPIEGEL_LENKUNG | 0-n | - | unsigned char | - | TAB_KOMPASS_LENKUNG | - | - | - | Kodierparameter aus dem Master welche Fahrerseite das Fahrzeug ist.  Siehe Table TAB_KOMPASS_LENKUNG |
| STAT_KOMPASS_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_KOMPASS_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE452_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_POSITION_HOR_LINKS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition links horizontal Bereich. |
| STAT_SPIEGEL_POSITION_VERT_LINKS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition links vertikal Bereich. |
| STAT_SPIEGEL_POSITION_HOR_RECHTS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition rechts horizontal Bereich. |
| STAT_SPIEGEL_POSITION_VERT_RECHTS_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spiegelposition rechts vertikal Bereich. |

### RES_0XE453_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSSENSPIEGEL_LINKS_RICHTUNG | 0-n | - | unsigned char | - | TAB_AUSSENSPIEGEL_RICHTUNG | - | - | - | Außenspiegel Links.   Siehe Table TAB_AUSSENSPIEGEL_RICHTUNG |
| STAT_AUSSENSPIEGEL_RECHTS_RICHTUNG | 0-n | - | unsigned char | - | TAB_AUSSENSPIEGEL_RICHTUNG | - | - | - | Außenspiegel rechts.  Siehe Table TAB_AUSSENSPIEGEL_RICHTUNG |

### RES_0XE454_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUSSENSPIEGEL_BEIGEKLAPPT | 0/1 | - | unsigned char | - | - | - | - | - | 0: Außenpiegel ausgeklappt  1: Außenpiegel beigeklappt |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE456_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPIEGEL_POS_RECHTS_AKTUELL_HOR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle horizontale Position des rechten Außenspiegels. |
| STAT_SPIEGEL_POS_RECHTS_AKTUELL_VERT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle verticale Position des rechten Außenspiegels. |
| STAT_SPIEGEL_POS_RECHTS_MEM_1_HOR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horizontale Position in memory 1 des rechten Außenspiegels. |
| STAT_SPIEGEL_POS_RECHTS_MEM_1_VERT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verticale Position in memory 1 des rechten Außenspiegels. |
| STAT_SPIEGEL_POS_RECHTS_MEM_2_HOR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horizontale Position in memory 2 des rechten Außenspiegels. |
| STAT_SPIEGEL_POS_RECHTS_MEM_2_VERT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verticale Position in memory 2 des rechten Außenspiegels. |
| STAT_SPIEGEL_POS_RECHTS_RESERVE_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFF ausgegeben. |
| STAT_SPIEGEL_POS_RECHTS_RESERVE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFF ausgegeben. |
| STAT_SPIEGEL_POS_LINKS_AKTUELL_HOR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle horizontale Position des linken Außenspiegels. |
| STAT_SPIEGEL_POS_LINKS_AKTUELL_VERT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aktuelle verticale Position des linken Außenspiegels. |
| STAT_SPIEGEL_POS_LINKS_MEM_1_HOR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horizontale Position in memory 1 des linken Außenspiegels. |
| STAT_SPIEGEL_POS_LINKS_MEM_1_VERT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verticale Position in memory 1 des linken Außenspiegels. |
| STAT_SPIEGEL_POS_LINKS_MEM_2_HOR_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Horizontale Position in memory 2 des linken Außenspiegels. |
| STAT_SPIEGEL_POS_LINKS_MEM_2_VERT_WERT | - | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Verticale Position in memory 2 des linken Außenspiegels. |
| STAT_SPIEGEL_POS_LINKS_RESERVE_0_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes.  Solang als reserve Byte verwendet wird immer 0xFF ausgegeben. |
| STAT_SPIEGEL_POS_LINKS_RESERVE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes.  Solang als reserve Byte verwendet wird immer 0xFF ausgegeben. |

### RES_0XE457_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_UGDO_VORHANDEN | 0/1 | - | unsigned char | - | - | - | - | - | 0: UGDO nicht kodiert;  1: UGDO kodiert.  Wenn nicht kodiert liefern die folgende Ergebnisse keine sinnvolle Daten. |
| STAT_UGDO_LAND | 0-n | - | unsigned char | - | TAB_UGDO_COUNTRY | - | - | - | Eingestelltes Land. Siehe Table TAB_UGDO_COUNTRY |

### RES_0XE460_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_HECK_VORHANDEN | 0-n | - | unsigned char | - | TAB_HECKROLLO_VORHANDEN | - | - | - | Gibt aus, wo der Heckrollosmotor kodiert ist. |
| STAT_ROLLO_SEITEN_VORHANDEN | 0/1 | - | unsigned char | - | - | - | - | - | Gibt aus, ob die Seitenrollosmotor kodiert oder nicht kodiert sind. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE461_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_MOTOR_BFH_BLOCK | 0-n | - | unsigned char | - | TAB_ROLLO_BLOCK | - | - | - | Gibt an in welchem Zustand sich der Sonnenrollo Motor befindet. |
| STAT_ROLLO_MOTOR_BFH_ERROR | 0/1 | - | unsigned char | - | - | - | - | - | Sonnenrollo Beifahrer hinten Fehlerbetrieb: 0: Wenn das Fensterheber geschlossen ist;  1: Wenn das Fensterheber offen ist. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE462_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROLLO_MOTOR_FAH_BLOCK | 0-n | - | unsigned char | - | TAB_ROLLO_BLOCK | - | - | - | Gibt an in welchem Zustand sich der Sonnenrollo Motor befindet. |
| STAT_ROLLO_MOTOR_FAH_ERROR | 0/1 | - | unsigned char | - | - | - | - | - | 0: Sonnenrollo Fahrer nicht im Fehlerbetrieb bei offener Scheibe;  1: Sonnenrollo Fahrer im Fehlerbetrieb bei offener Scheibe |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE466_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_FBM_1 | 0-n | - | unsigned char | - | TAB_TASTER_BERUEHRT_BETAETIGT | - | - | - | Gibt aus, ob der FBM Taster 1 berührt, betätigt oder gar nichts gedrückt ist. |
| STAT_TASTER_FBM_2 | 0-n | - | unsigned char | - | TAB_TASTER_BERUEHRT_BETAETIGT | - | - | - | Gibt aus, ob der FBM Taster 2 berührt, betätigt oder gar nichts gedrückt ist. |
| STAT_TASTER_FBM_3 | 0-n | - | unsigned char | - | TAB_TASTER_BERUEHRT_BETAETIGT | - | - | - | Gibt aus, ob der FBM Taster 3 berührt, betätigt oder gar nichts gedrückt ist. |
| STAT_TASTER_FBM_4 | 0-n | - | unsigned char | - | TAB_TASTER_BERUEHRT_BETAETIGT | - | - | - | Gibt aus, ob der FBM Taster 4 berührt, betätigt oder gar nichts gedrückt ist. |
| STAT_TASTER_FBM_5 | 0-n | - | unsigned char | - | TAB_TASTER_BERUEHRT_BETAETIGT | - | - | - | Gibt aus, ob der FBM Taster 5 berührt, betätigt oder gar nichts gedrückt ist. |
| STAT_TASTER_FBM_6 | 0-n | - | unsigned char | - | TAB_TASTER_BERUEHRT_BETAETIGT | - | - | - | Gibt aus, ob der FBM Taster 6 berührt, betätigt oder gar nichts gedrückt ist. |
| STAT_TASTER_FBM_7 | 0-n | - | unsigned char | - | TAB_TASTER_BERUEHRT_BETAETIGT | - | - | - | Gibt aus, ob der FBM Taster 7 berührt, betätigt oder gar nichts gedrückt ist. |
| STAT_TASTER_FBM_8 | 0-n | - | unsigned char | - | TAB_TASTER_BERUEHRT_BETAETIGT | - | - | - | Gibt aus, ob der FBM Taster 8 berührt, betätigt oder gar nichts gedrückt ist. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_4 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_5 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_6 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_7 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE468_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FES_MODUS | 0-n | high | unsigned char | - | TAB_FES_MODUS | - | - | - | Aktueller FES Modus. Siehe Table TAB_FES_MODUS. |

### RES_0XE469_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPORT_DYNAMIC_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Sport Dynamik Modus aktiviert war |
| STAT_SPORT_EXPERT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Sport Expert Modus aktiviert war |
| STAT_SPORT_INDIVIDUAL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Sport Individual Modus aktiviert war. |
| STAT_COMFORT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Comfort Modus aktiviert war.  |
| STAT_COMFORT_PLUS_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Comfort Plus Modus aktiviert war. |
| STAT_COMFORT_INDIVIDUAL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Comfort Individual Modus aktiviert war. |
| STAT_ECO_PRO_EFFICIENT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Eco Pro Efficient Modus aktiviert war. |
| STAT_ECO_PRO_PLUS_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Eco Pro Plus Modus aktiviert war. |
| STAT_ECO_PRO_INDIVIDUAL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Eco Pro Individual Modus aktiviert war. |
| STAT_ADAPTIVE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Adaptive Modus aktiviert war. |
| STAT_OFFROAD_ICE_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Offroad Ice mode aktiviert war. |
| STAT_OFFROAD_SMOOTH_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Offroad Ice Modus aktiviert war. |
| STAT_OFFROAD_GRIP_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Offroad Grip Modus aktiviert war. |
| STAT_OFFROAD_ROUGH_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Offroad Rough Modus aktiviert war. |
| STAT_PHEV_SPORT_STANDARD_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Phev Sport Standard Modus aktiviert war. |
| STAT_PHEV_SPORT_INDIVIDUAL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Phev Sport Individual Modus aktiviert war. |
| STAT_PHEV_HYBRID_STANDARD_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Phev Hybrid Standard Modus aktiviert war. |
| STAT_PHEV_HYBRID_ECO_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Phev Hybrid Eco Modus aktiviert war. |
| STAT_PHEV_HYBRID_COMFORT_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Phev Hybrid Comfort Modus aktiviert war. |
| STAT_PHEV_ELECTRIC_STANDARD_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Phev Electric Standard Modus aktiviert war. |
| STAT_PHEV_ELECTRIC_INDIVIDUAL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Phev Electric Individual Modus aktiviert war. |
| STAT_PHEV_BATTERY_CONTROL_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt an, wie lange der Battery Control Modus aktiviert war. |
| STAT_RESERVE_0_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFF ausgegeben. |
| STAT_RESERVE_1_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFF ausgegeben. |
| STAT_RESERVE_2_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFF ausgegeben. |
| STAT_RESERVE_3_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFF ausgegeben. |
| STAT_RESERVE_4_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFF ausgegeben. |
| STAT_RESERVE_5_WERT | s | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFFFFFF ausgegeben. |

### RES_0XE46E_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TANK_FUELLSTAND_VORHANDEN | 0-n | high | unsigned char | - | TAB_TANK_FUELLSTAND_VORHANDEN | - | - | - | Liefert ob die Tank-Füllstandssensoren vorhanden sind. Falls das Ergebnis 0x00 liefern sind die weitere Ergebnisse irrelevant. |
| STAT_TANK_FUELLSTAND_LINKS_WERT | Ohm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Füllstands des linken Tanksensors. Wenn Tank Füllstand sensor nicht kodiert ist wird 0xFFFF geliefert. |
| STAT_TANK_FUELLSTAND_RECHTS_WERT | Ohm | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Rückgabe des Füllstands des rechten Tanksensors. Wenn der rechtse Tank-Füllstandssensor nicht kodiert ist wird 0xFFFF geliefert. |
| STAT_RESERVE_WERT | Ohm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFFFD ausgegeben. |

### RES_0XE491_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RX_CTR_TC_SIA_CHGNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter empfangener Wert Control Ladezustand Touch Command SIA. |
| STAT_TX_ST_TC_SIA_CHGNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Letzter gesendeter Wert Status Ladezustand Touch Command SIA. |
| STAT_RESERVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes für Erweiterungen |
| STAT_RESERVE_1_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve Bytes für Erweiterungen |

### RES_0XE492_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SA_TOUCH_COMMAND_SIA | 0/1 | high | unsigned char | - | - | - | - | - | Auch klären ob wir die gleiche Tabelle für Entwicklung und Diagnose verwenden können. Gibt an, ob die SA Touch Command (und damit der Snap-In Adapter) verbaut ist (aus Codierung) 0: Nicht kodiert;  1: Kodiert. |
| STAT_ANZAHL_VERRIEGELUNGEN_TC_SIA_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Gibt die Anzahl der Verriegelungen des Touch Command Snap-In Adapters an. Der Wert wird über LIN-Bus-Kommunikation übermittelt.  |

### RES_0XE4B0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGENSENSOR_INIT | 0/1 | - | unsigned char | - | - | - | - | - | Auslesen ob der Regensensor eingemessen ist: 0=Regensensor nicht eingemessen; 1= Regensensor eingemessen. |
| STAT_REGENSENSOR_WERT | % | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Auslesen der Regenintensität des Regensensors. |
| STAT_FRONTLICHT_WERT | mW/m² | - | unsigned char | - | - | 6.7 | 1.0 | 0.0 | Auslesen des ungefiltertern Frontlichtwerts des Fahrlichtsensors. |
| STAT_FRONTLICHT_GEMITTELT_WERT | mW/m² | - | unsigned char | - | - | 6.7 | 1.0 | 0.0 | Auslesen des gemitteltern Frontlichtwerts des Fahrlichtsensors. |
| STAT_UMGEBUNGSLICHT_WERT | Lux | - | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Auslesen des ungefiltern Umgebungslichts des Fahrlichtsensors. |
| STAT_UMGEBUNGSLICHT_GEMITTELT_WERT | Lux | - | unsigned char | - | - | 100.0 | 1.0 | 0.0 | Auslesen des gemitteltern Umgebungslichtwerts des Fahrlichtsensors. |
| STAT_HUD_WERT | Digit | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Auslesen des ungefiltertern Werts der Hintergrund-Helligkeit. |
| STAT_SOLARSENSOR_FA_WERT | W/m² | - | unsigned char | - | - | 4.0158 | 1.0 | 0.0 | Auslesen der Solarsensorwert der Fahrerseite. |
| STAT_SOLARSENSOR_BF_WERT | W/m² | - | unsigned char | - | - | 4.0158 | 1.0 | 0.0 | Auslesen der Solarsensorwert der Beifahrerseite. |
| STAT_BESCHLAGSENSOR_WERT | % | - | unsigned char | - | - | 1.0 | 2.0 | 0.0 | Auslesen der relative Feuchte des Beschlagssensors. |
| STAT_BESCHLAGSENSOR_TEMP_WERT | °C | - | unsigned char | - | - | 1.0 | 2.0 | -40.0 | Auslesen des Temperaturs des Beschlagsensors. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_3 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE4B1_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REGENSENSOR_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Abfrage ob der Regensensor vorhanden bzw. kodiert ist. |
| STAT_FAHRLICHTSENSOR_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Abfrage ob der Fahrlichtsensor vorhanden bzw. kodiert ist. |
| STAT_SOLARSENSOR_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Abfrage ob der Solarsensor vorhanden bzw. kodiert ist. |
| STAT_BESCHLAGSENSOR_VORHANDEN | 0-n | - | unsigned char | - | TAB_AUSSTATTUNG_KODIERT | - | - | - | Abfrage ob der Beschlagsensor vorhanden bzw. kodiert ist. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XE4B4_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FGR_SET | 0-n | - | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der Fahrgeschwindigkeitsregelungstaster SET.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_FGR_TIPPRAENDEL | 0-n | high | unsigned char | - | TAB_TASTER_TIPPRAENDEL | - | - | - | Status der Fahrgeschwindigkeitsregelungstipprändeltaste. Siehe Table TAB_TASTER_TIPPRAENDEL |
| STAT_FGR_RES | 0-n | - | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der Fahrgeschwindigkeitsregelungstaste RES (Wiederaufnahme).  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_UMSCHALTUNG | 0-n | high | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der Umschalttaste ACC/DCC.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_ACC_ABSTAND | 0-n | high | unsigned char | - | TAB_MFL_TASTER_ACC_ABSTAND | - | - | - | Status der Taste ACC-Abstand.  Siehe Table TAB_MFL_TASTER_ACC_ABSTAND. |
| STAT_FGR_OFF | 0-n | high | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der Fahrgeschwindigkeitsregelungstaste OFF. Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_PUSH_TO_TALK | 0-n | high | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der Push-To-Talk-Taste. Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_MODE | 0-n | high | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der MFL-Modus-Taste.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_TIPPRAENDEL_BC | 0-n | high | unsigned char | - | TAB_MFL_TIPPRAENDEL | - | - | - | Status der Tipprändel Bordcomputer (BC) Taste.  Siehe Table TAB_MFL_TIPPRAENDEL |
| STAT_TEL | 0-n | high | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der Telefontaste. Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_VOL_MINUS | 0-n | high | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der Laustärketaste minus.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_VOL_PLUS | 0-n | high | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der Laustärketaste plus.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG. |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_2 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes. Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_FGR_LIM | 0-n | high | unsigned char | - | TAB_DIGITAL_EINGANG | - | - | - | Status der Fahrgeschwindigkeitsregelungstaste LIM. |
| STAT_LAG | 0-n | high | unsigned char | - | TAB_MFL_LAG | - | - | - | Status der Querführungstaste. |
| STAT_SKP | 0-n | high | unsigned char | - | TAB_MFL_SKP | - | - | - | Status der Skip-Taste. |

### RES_0XE4BA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ELSV_TASTER | 0-n | - | unsigned char | - | TAB_ELSV_TASTER | - | - | - | Status der vorne eLSV-Taste.  Siehe Table TAB_ELSV_TASTER |
| STAT_RESERVE_0 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes.  Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |
| STAT_RESERVE_1 | 0-n | high | unsigned char | - | TAB_RESERVE_RESULT | - | - | - | Reserve Bytes.  Solang als reserve Byte verwendet wird immer 0xFD ausgegeben. |

### RES_0XF010_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LF_DRIVER_STATUS | + | - | - | 0-n | high | unsigned char | - | TAB_CASS_LF_DRIVER_STATUS | - | - | - | Status des LF-Treiberchips |

### RES_0XF013_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_PARAMETER_LENGTH_WERT | + | - | - | Byte | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Länge des Parameters, in Byte |
| STAT_PARAMETER_VALUES_1_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 1 |
| STAT_PARAMETER_VALUES_2_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 2 |
| STAT_PARAMETER_VALUES_3_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 3 |
| STAT_PARAMETER_VALUES_4_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 4 |
| STAT_PARAMETER_VALUES_5_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 5 |
| STAT_PARAMETER_VALUES_6_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 6 |
| STAT_PARAMETER_VALUES_7_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 7 |
| STAT_PARAMETER_VALUES_8_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 8 |
| STAT_PARAMETER_VALUES_9_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 9 |
| STAT_PARAMETER_VALUES_10_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 10 |
| STAT_PARAMETER_VALUES_11_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 11 |
| STAT_PARAMETER_VALUES_12_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 12 |
| STAT_PARAMETER_VALUES_13_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 13 |
| STAT_PARAMETER_VALUES_14_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 14 |
| STAT_PARAMETER_VALUES_15_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 15 |
| STAT_PARAMETER_VALUES_16_DATA | + | - | - | DATA | high | data[255] | - | - | 1.0 | 1.0 | 0.0 | Wert des Parameters 16 |

### RES_0XF014_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IN_WELCOME_LIGHT_ZONE | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob der Schlüssel innerhalb der Welcome Light Zone gefunden wurde. 0: Schlüssel nicht gefunden; 1: Schlüssel gefunden. |
| STAT_IN_UNLOCK_ZONE | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob der Schlüssel innerhalb der Unlock Zone gefunden wurde. 0: Schlüssel nicht gefunden; 1: Schlüssel gefunden. |
| STAT_IN_WALK_AWAY_LOCKING_ZONE | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob der Schlüssel innerhalb der Walk Away Locking Zone gefunden wurde.  0: Schlüssel nicht gefunden; 1: Schlüssel gefunden. |
| STAT_IN_PREAUTHENTICATION_ZONE | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Gibt an, ob der Schlüssel innerhalb der Vorauthentisierungszone gefunden wurde |

### RES_0XF015_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MIN_CKT_CURRENT_WERT | + | - | - | mA | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Minimaler Strom, bei dem der Schlüssel an der aktuellen Position noch antwortet |

### RES_0XF030_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ID_DATA | + | - | - | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | ADEV ID |
| STAT_SA_DIENST_DP_ID_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | ID des Dienst DPs das die Schlüsselzeile zuletzt aktualisiert hat |
| STAT_ACTIVATION_DETAILS | + | - | - | 0-n | high | unsigned char | - | TAB_IM_SA_ACT | - | - | - | SA Aktivierungsdetails |
| STAT_ID_DATA_SA_ACT_DATA | + | - | - | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | ADEV ID des SA Aktivierungsdevices |
| STAT_SA_VEH_ACT_CNT_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | SA Fahrzeugaktionscounter |
| STAT_SA_KEY_TERMINATION | + | - | - | 0-n | high | unsigned char | - | TAB_IM_SA_KEY_TERM | - | - | - | Status SA Key Termination |

### RES_0XF101_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KALTUEBERWACHUNG_NR | - | - | + | 0-n | - | unsigned char | - | TAB_LEUCHTEN_ROUTINE | - | - | - | Ergebnis der Überwachungsroutine |

### RES_0XF102_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_WARMUEBERWACHUNG_NR | - | - | + | 0-n | - | unsigned char | - | TAB_LEUCHTEN_ROUTINE | - | - | - | Ergebnis der Überwachungsroutine |

### RES_0XF104_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POSITION_WERT | - | - | + | ° | high | signed int | - | - | 1.0 | 100.0 | 0.0 | Ansteuerung der LWR-Position. Reference point is the optical axis. |

### RES_0XF106_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_REFERENZ_RESULT | - | - | + | 0-n | high | unsigned char | - | TAB_LWR_REFERENZLAUF | - | - | - | Referenzergebnisse der Routine Job. |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### RES_0XF305_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BREAKPOINT_MEASURECOUNT_OVERALL_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_MEASURECOUNT_OVERALL |
| STAT_BREAKPOINT_RUNTIME_MIN_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_RUNTIME_MIN |
| STAT_BREAKPOINT_RUNTIME_MAX_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_RUNTIME_MAX |
| STAT_BREAKPOINT_RUNTIME_AVG_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_RUNTIME_AVG |
| STAT_BREAKPOINT_RUNTIME_JITTER_MIN_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_RUNTIME_JITTER_MIN |
| STAT_BREAKPOINT_RUNTIME_JITTER_MAX_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_RUNTIME_JITTER_MAX |
| STAT_BREAKPOINT_RUNTIME_JITTER_AVG_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_RUNTIME_JITTER_AVG |
| STAT_BREAKPOINT_RUNTIME_GROSS_MIN_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_RUNTIME_GROSS_MIN |
| STAT_BREAKPOINT_RUNTIME_GROSS_MAX_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_RUNTIME_GROSS_MAX |
| STAT_BREAKPOINT_RUNTIME_GROSS_AVG_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_RUNTIME_GROSS_AVG |
| STAT_BREAKPOINT_MEASURETIME_OVERALL_DATA | - | - | + | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | BREAKPOINT_MEASURETIME_OVERALL |

### RES_0XF307_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STACK_COUNT_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert zurück die Anzahl der Stacks. |
| STAT_CONFIGURED_STACK_SIZE_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert zurück die konfigurierte Stack-Größe. |
| STAT_USED_STACK_SIZE_WERT | + | - | - | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Liefert zurück die maximale verwendete Stack-Größe. |

### RES_0XF30B_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_STARTUP_TIME_WERT | + | - | - | ms | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aufstartzeit in Millisekunden (0 ¿ FFFFFFFF) |

### RES_0XF30C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DIAG_RETURN_CODE_OK_WERT | + | - | - | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Same value returned always.  Feedback about the status of the processing is communicated via other channels. |

### RES_0XF310_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT_WERT | + | - | - | HEX | high | unsigned int | - | - | - | - | - | Liefert das Ergebnis von der angesteuerte Arg. |
| STAT_RESERVE | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | Reserve Byte |
| - | + | - | - | Bit | high | BITFIELD | - | BF_SAFETY_MICRO_STATI | - | - | - | Lifert die Stati von der Safety Micro chip |

### RES_0XF700_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESULT | + | - | - | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: OK 0x01: NOK |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PIA_NR_AKTUELL | 0x0F27 | STAT_PIA_NR_AKTUELL | Das Result aktuell auf dem Bus gesendeten PIA Nummer.  Siehe Table TAB_IM_PIA_NUMMER. | 0-n | - | - | unsigned char | TAB_IM_PIA_NUMMER | - | - | - | - | 22 | - | - |
| KLEMMENSCHALTER | 0x1001 | - | Ändern des aktuellen Klemmenzustands im SG und damit im Fahrzeug per Diagnose. Hinweis: Muss nur vom SG implementiert werden. Alle Anforderungen zu Zustandswechseln über diesen Job werden im BDC-Fahrzeug-Zustand 'Motorlauf als Standfunktion' sowie im Modus RSU nicht durchgeführt. Jobresult:  'Conditions not correct' | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1001_R | RES_0x1001_R |
| STEUERN_PWF_MESSEMODUS | 0x102F | - | Dieser RID wird zum Setzden des Messemodus im PWF-Master verwendet. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x102F_R | - |
| TASU_STEUERN_STATUS | 0x1032 | - | RID zum Steuern des TASU bzw. Abfragen von dessen Status. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1032_R | RES_0x1032_R |
| TAS_REQUEST | 0x1033 | - | Der RID wird verwendet, um ein Steuergerät zu veranlassen, einen Auftrag an den TAS zu schicken. | - | - | - | - | - | - | - | - | - | 31 | ARG_0x1033_R | - |
| LOESCHEN_HISTORIENSPEICHER_FZG_ZUSTANDSANFORDERUNGEN | 0x1034 | - | Der Job dient zum Löschen des Historienspeichers für die Fahrzeugzustansanforderungen.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LOESCHEN_STANDNUTZUNG_HISTORIE | 0x1035 | - | Der Job dient zum Löschen des nicht-persistenten Datensatzes und des Häufigkeitszähler des Historienspeichers für die Standnutzungshistorie.  Spec: BDC2015 - Diagnosejob Standverbraucherhistorie V1.4 31102013.docx | - | - | - | - | - | - | - | - | - | 31 | - | - |
| STEUERN_STANDNUTZUNG_ZAEHLER_LOESCHEN | 0x1037 | - | Der RID dient zum Löschen des Standnutzungs-Nachlaufzeitenanforderungen-Histogramms. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| STATUS_ZUSTAND_FAHRZEUG | 0x2531 | STAT_ZUSTAND_FAHRZEUG | PWF-Zustand des Fahrzeugs. | 0-n | - | high | unsigned char | PWF_ZUSTAND_FAHRZEUG_STATUS | - | - | - | - | 22 | - | - |
| STATUS_PWF_MESSEMODUS | 0x2532 | STAT_PWF_MESSEMODUS | Das Result enthält den aktuellen PWF_Messemodus | 0-n | - | high | unsigned char | PWF_MESSEMODUS | - | - | - | - | 22 | - | - |
| STATUS_PWF_HISTORIE | 0x2533 | - | Diese DID dient zum Auslesen der PWF Historiendaten. Der Historienspeicher gibt den eingenommenen Fahrzeugzustand, das Transitionsereignise (d.h. anforderer bzw. Ursache für einen Zustandswechsel) sowie den Zeitpunkt des Zustandswechsels wieder. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2533_D |
| STATUS_STANDNUTZUNG_ZAEHLER | 0x2536 | - | Der DID dient zum Auslesen des Zählers für die Standnutzungs-Nachlaufzeitenanforderungen-Histogramm. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2536_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | high | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HOD_KALIBRIERUNG | 0xA093 | - | Die Routine dient zur Kalibrierung des Hands Off Detection und der Lenkradheizung | - | - | - | - | - | - | - | - | - | 31 | - | - |
| BATTERIEVORSCHAEDIGUNGSHISTORIE_LOESCHEN | 0xA099 | - | Löschen des nicht-persistenten Datensatzes und des Häufigkeitszähler des Historienspeichers für die Batterievorschädigunshistorie. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| THERMO_CUPHOLDER | 0xA10D | - | Routine der Heizen / Kühlen des Thermo-Cupholder | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA10D_R | RES_0xA10D_R |
| THERMO_CUPHOLDER_LED | 0xA10E | - | Routine Job für die Steuerung bzw. Abfrage der Status der LEDs des Thermo-Cupholders. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA10E_R |
| ENTSPERREN_TEMP_EINGESICHERT_SCHLUESSEL | 0xA13D | - | Dieser Job dient dazu einen temporär aufgrund einsichern gesperrten Schlüssel zu entsperren. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| FH_EINLERNEN | 0xA17B | - | Steuernaufruf zum Einlernen der Fensterheber 0x11: FH Fahrer  0x12: FH Beifahrer   0x13: FH Fahrer hinten  0x14: FH Beifahrer hinten  0x15: FH Heckscheibe 0x21: FH Fahrer und Beifahrer  0x22: FH Fahrer hinten und FH Beifahrer hinten  0x40: FH Fahrer, Beifahrer, FH Fahrer Beifahrer und FH Beifahrer hinten  0x50: FH Fahrer, Beifahrer, FH Fahrer Beifahrer, FH Beifahrer hinten und FH Heckscheibe | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17B_R | RES_0xA17B_R |
| FH_VERFAHREN_HALL | 0xA17E | - | Verfahren auf Hallposition | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17E_R | RES_0xA17E_R |
| FH_VERFAHREN_PROZENT | 0xA17F | - | Routine zum verfahren der ausgewählte Fensterheber auf einen bestimmten Prozentwert. Alle Jobs liefern ob die Routine erfolgreich war. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17F_R | RES_0xA17F_R |
| WCA_STATUS_ROUTINE | 0xA192 | - | Status des WCA-Sensors/Aktuators (Wireless Charging Ablage) | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA192_R |
| AUSSENSPIEGEL_SELBSTTEST | 0xA322 | - | Automatische Spiegelprüfung wird angestoßen. Wenn ein Fehler beim Selbsttest auftritt, dann erfolgt ein FS-Eintrag. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA322_R |
| REGENSENSOR_INITIALISIERUNG | 0xA3B7 | - | Routinejob für Neuadaption des RLS an der Windschutzscheibe. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA3B7_R |
| HOEHENSTAENDE_OFFSET_RESET | 0xA532 | - | Reset des Höhenstand Offsets | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA532_R | - |
| LICHT_KURZSCHLUSSABSCHALTUNG_RESET | 0xA533 | - | Rücksetzen der Kurzschlussabschaltung eines Lichtausgangs | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA533_R | RES_0xA533_R |
| LICHT_FLA_DEMO_MODUS | 0xA539 | - | Aktivierung und Steuerung des Fernlichtassistenten für Präsentationen und Diagnose | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA539_R | - |
| IFE_CODIERUNG | 0xA5AF | - | Routine Job um all IFEs zu kodieren. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA5AF_R |
| LIN_CODIERUNG | 0xA5B0 | - | Codierung der LIN-Slaves | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA5B0_R | RES_0xA5B0_R |
| SERVICE_SCHLUESSELDATEN_UPDATE | 0xA5C0 | - | Routine zum update der Schlüsseldaten Service | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA5C0_R | RES_0xA5C0_R |
| SCHLUESSELDATEN_SERVICE | 0xA5C1 | - | Routine zum Auslesen den Daten Block des Schlüssel | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA5C1_R | RES_0xA5C1_R |
| REMOTE_ENGINE_START | 0xA5F0 | - | Löschen des Historienspeichers für Remote-Engine-Start (RES) Anforderungen.  | - | - | - | - | - | - | - | - | - | 31 | - | - |
| LICHT_SENSE_LESEN | 0xA610 | - | Abfrage des Stromstärke des ausgewählte Licht. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA610_R | RES_0xA610_R |
| INNENLICHT_FI_LIN_2_AUTOADRESSIERUNG | 0xA620 | - | Es wird die Autoadressierung der FI-LIN-2-Layering-Slaves durchgeführt | - | - | - | - | - | - | - | - | - | 31 | - | - |
| INNENLICHT_ILE | 0xA621 | - | Routine job für ILE (Innenlichteinheit). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA621_R | RES_0xA621_R |
| TOUCH_COMMAND_SIA_EMERGENCY_EJECT | 0xA66A | - | Starten eines Service-Auswurfs des Tablets. Dazu sendet das BDC ein Signal zum Touch-Command SIA. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| TOUCH_COMMAND_SIA_SENSOR_KALIBRIEREN | 0xA66B | - | Starten des Kalibrier-Vorgangs der Hall-Sensorik im TC-SIA. Dazu sendet das BDC ein Signal zum Touch-Command SIA. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| INNENLICHT_FI_LIN_1_AUTOADRESSIERUNG | 0xA838 | - | Es wird die Autoadressierung der LIN-Layering-Slaves durchgeführt. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| SMO_SIMULATION_BEDIENUNG | 0xAA80 | - | Simuliert einer Bedienungsanforderung (Öffnen der Heckklappe) durch das SmartOpener-Steuergerät. Hierbei soll die gesamte Wirkkette vom Eingang der Bedienungsanforderung beim ZSG bis zum physikalischen Öffnen der Heckklappe ausgelöst werden. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAA80_R |
| STEUERN_KL15_ABSCHALTUNG | 0xAC51 | - | Dieser Job dient dazu per Diagnose die Schwelle festzulegen, bei welcher Geschindigkeit die Funktion automatische KL15-Abschaltung wieder aktiviert (default) werden soll. Die KL-15-Abschaltung wird bis zur Überschreitung dieser Geschwindigkeits-Schwelle verhindert. Diese Abschalt-Verhinderung bleibt auch über RESET und Spannungs-Reset hinaus bestehen (Ablage im EEPROM). Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STEUERN_ROUTINE mit Argument ARG,STEUERN_KL15_ABSCHALTUNG,STR,Argumente | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC51_R | - |
| STEUERN_CA_KOMM_TEST | 0xAC53 | - | Steuern der Kommunikation mit bestimmtem Schlüssel über bestimmte Antenne zum Testen der CA-Kommunikation (LF). | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC53_R | RES_0xAC53_R |
| STEUERN_CA_BROADCAST | 0xAC54 | - | Steuern der Schlüsselsuche per Broadcast Innenraum (Antennen Innenraum Vorne + Hinten). Alle im Innenraum befindlichen bereits bekannten Schlüssel werden ermittelt. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC54_R |
| STEUERN_CA_ANTENNEN_TEST | 0xAC55 | - | Ansteuern des CA-Antennen-Test. Dabei wird die interne Antennendiagnose angestossen und erkannte Fehler werden entsprechend in Fehlerspeicher eintragen. Hinweise:  - Trotz erkannter Fehler in der internen Diagnose kann u.U. kein Fehlerspeichereintrag aufgrund nichterfüllter Randbedingungen (z.B. Unterspannung) vorhanden sein. - Es werden nur Antennen getestet die codiert sind. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC55_R |
| STEUERN_ZV_MASTER | 0xAC57 | - | Ansteuerung der Zentralverriegelung per Diagnose | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC57_R | RES_0xAC57_R |
| STEUERN_FBD_EMPFAENGER_INIT | 0xAC58 | - | Dieser Service dient zum manuellen Ansteuern der FBD-Empfänger-Initialisierung. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAC58_R |
| STEUERN_FAHRZEUGNEUSTART_PWF | 0xAC60 | - | Fahrzeugneustart Parken, Wohnen, Fahren. Warten bis Busse eingeschlafen sind, maximal aber 30s. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAC60_R | RES_0xAC60_R |
| SENSOR_IDENT_DATEN_LESEN_SINGLE | 0xAFFC | - | Ermittelt die Ident-Daten eines einzelnen angeschlossenen intelligenten Sensors. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAFFC_R | RES_0xAFFC_R |
| SENSOR_IDENT_DATEN_TRIGGER | 0xAFFD | - | Ermittelt die Ident-Daten aller angeschlossenen intelligenten Sensoren und speichert sie im MasterSG-RAM ab. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xAFFD_R |
| LENKRADHEIZUNG_LED | 0xD071 | - | Statusabfrage oder Ansteuerung der Lenkradheizung-LEDs | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD071_D | - |
| ELSV | 0xD072 | - | Status / Steuern elektrische Lenksäulenverstellung | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD072_D | - |
| LENKRADHEIZUNG_TASTER | 0xD073 | STAT_TASTER_LENKRADHEIZUNG_EIN | 0: Lenkradheizung Taster nicht betätigt; 1: Lenkradheizung Taster betätigt | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| LENKRADHEIZUNG | 0xD074 | - | Status / Steuern Lenkradheizung (Aktiv, LED und analoger Wert) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD074_D | RES_0xD074_D |
| ELSV_VORHANDEN | 0xD07F | STAT_VORHANDEN_ELSV_EIN | Elektrische Lenksäulenverstellung 0: nicht vorhanden 1: vorhanden | 0/1 | - | - | signed int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| ELSV_POS | 0xD084 | - | Ansteuerung einer bestimmten ELSV-Position | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD084_D | - |
| ELSV_POS_STATUS | 0xD089 | - | Aktuelle Position und Bewegung der ELSV | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD089_D |
| LICHT_HISTORIESPEICHER_ENBN | 0xD0F1 | - | Detailinformation zum Energiebedarf für Licht | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD0F1_D |
| HANDBREMSE_KONTAKT | 0xD130 | STAT_HANDBREMSE_KONTAKT_EIN | 0: Handbremse gelöst; 1: Handbremse angezogen | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FH_FA_TASTER | 0xD188 | - | Statusabfrage des Fensterheber-Taster des Fahrers. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD188_D |
| FH_BF_TASTER | 0xD189 | STAT_SCHALTERBLOCK_TUER_TASTER_BF_BF | Fensterheber Beifahrerseite (lokaler Taster) : Taster Beifahrerseite. Siehe Table TAB_FENSTERHEBER_VERFAHREN. | 0-n | - | - | unsigned char | TAB_FENSTERHEBER_VERFAHREN | - | - | - | - | 22 | - | - |
| FH_FAH_TASTER | 0xD18A | STAT_SCHALTERBLOCK_TUER_TASTER_FAH_FAH | Fensterheber Fahrerseite hinten (lokaler Taster) : Taster fahrerseite hinten. Siehe Table TAB_FENSTERHEBER_VERFAHREN. | 0-n | - | - | unsigned char | TAB_FENSTERHEBER_VERFAHREN | - | - | - | - | 22 | - | - |
| FH_BFH_TASTER | 0xD18B | STAT_SCHALTERBLOCK_TUER_TASTER_BFH_BFH | Fensterheber Beifahrerseite hinten (lokaler Taster) : Taster Beifahrerseite hinten. Siehe Table TAB_FENSTERHEBER_VERFAHREN. | 0-n | - | - | unsigned char | TAB_FENSTERHEBER_VERFAHREN | - | - | - | - | 22 | - | - |
| FH_KISI_TASTER | 0xD18C | - | Statusabfrage bzw. Simualtion des Kindersicherungstasters, den am Schalterblock Tür hängt. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD18C_D | RES_0xD18C_D |
| FH_KISI_LED | 0xD18D | STAT_SCHALTERBLOCK_TUER_KISI_LED | 0: LED der Kindersicherung ist OFF; 1: LED der Kindersicherung ist ON | 0/1 | - | - | signed int | - | - | - | - | - | 22 | - | - |
| FH_FA_BEWEGUNG | 0xD1A7 | - | Auslesen der wesentlichen Informationen der Fahrerseite-Fensterheber. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A7_D |
| FH_BF_BEWEGUNG | 0xD1A8 | - | Auslesen der wesentlichen Informationen der Beifahrerseite-Fensterheber. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A8_D |
| FH_FAH_BEWEGUNG | 0xD1A9 | - | Auslesen der wesentlichen Informationen der hintere Fahrerseite-Fensterheber. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A9_D |
| FH_BFH_BEWEGUNG | 0xD1AA | - | Auslesen der wesentlichen Informationen der hintere Beifahrerseite-Fensterheber. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1AA_D |
| FH_FA_STATUS_DETAIL | 0xD1B5 | - | Auslesen der Detailinformationen  der Fahrerseite-Fensterheber. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B5_D |
| FH_BF_STATUS_DETAIL | 0xD1B6 | - | Auslesen der Detailinformationen  der Beifahrerseite-Fensterheber. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B6_D |
| FH_FAH_STATUS_DETAIL | 0xD1B7 | - | Auslesen der Detailinformationen  der hintere Fahrerseite-Fensterheber. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B7_D |
| FH_BFH_STATUS_DETAIL | 0xD1B8 | - | Auslesen der Detailinformationen  der hintere Beifahrerseite-Fensterheber. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B8_D |
| FH_TASTER_ALLE_FH | 0xD1C2 | STAT_FENSTERHEBER_ALLE_TASTER | Fahrerseite (Tastenblock): Taster für alle Fensterheber. Siehe Table TAB_FENSTERHEBER_VERFAHREN. | 0-n | - | high | unsigned char | TAB_FENSTERHEBER_VERFAHREN | - | - | - | - | 22 | - | - |
| STATUS_SITZEXT_TASTEN | 0xD1CA | - | Auslesen status sitzmemory Fahrerseite Taster | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1CA_D |
| SITZEXT_VORHANDEN | 0xD1CB | - | Auslesen ob der SitzExt-SB vorhanden ist. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1CB_D |
| SITZEXT_LED | 0xD1CC | - | Steuert die LEDs in den Sitzext LIN-Slaves | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1CC_D | - |
| IFE_FA_LOGISTIKDATEN_LESEN | 0xD1F1 | - | Auslesen der Logistikdaten der IFE auf der Fahrerseite | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1F1_D |
| IFE_BF_LOGISTIKDATEN_LESEN | 0xD1F2 | - | Auslesen der Logistikdaten der IFE auf der Beifahrerseite | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1F2_D |
| IFE_FAH_LOGISTIKDATEN_LESEN | 0xD1F3 | - | Auslesen der Logistikdaten der IFE auf der Fahrerseite hinten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1F3_D |
| IFE_BFH_LOGISTIKDATEN_LESEN | 0xD1F4 | - | Auslesen der Logistikdaten der IFE auf der Beifahrerseite hinten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1F4_D |
| TOUCH_COMMAND_SIA_LADEMODUS | 0xD210 | - | Setzen des Lademodus des SIA. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD210_D | - |
| TOUCH_COMMAND_SIA_FERTIGUNGSMODUS | 0xD211 | - | Setzen des SIA-spezifischen Fertigungsmodus | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD211_D | - |
| HECKSPOILER_TASTER | 0xD220 | - | Statusabfrage bzw. Steuerung des Heckspoilertasters. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD220_D | RES_0xD220_D |
| LICHTSPERRE_MONTAGE | 0xD25D | - | Aktivierung/Deaktivierung der Aussenlichtfunktionen für die Montageprozesse. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD25D_D | RES_0xD25D_D |
| IM_ADEV_SMACC_DATA | 0xD268 | - | Schreiben der Smart Access Device Data zu ECU in Ersatzschlüssel-Prozess. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD268_D | - |
| LENKRAD_LRE_M_TASTER | 0xD26D | - | Statusabfrage oder Ansteuerung der M-spezifischen Lenkradtasten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD26D_D |
| HUPE_TASTER | 0xD297 | STAT_TASTER_HUPE | Status der Hupetaste. | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| HUPE | 0xD298 | - | Statusabfrage bzw. Ansteuerung der Hupe. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD298_D | RES_0xD298_D |
| ROLLO_HECK_MOTOR | 0xD30A | - | Statusabfrage bzw. Aktivierung des Heckrollos. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD30A_D | RES_0xD30A_D |
| ROLLO_FAH_TASTER | 0xD311 | - | Statusabfrage der lokaler Taster Fahrertür für die seitlichen Sonnenrollos bzw. Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD311_D |
| ROLLO_BFH_TASTER | 0xD314 | - | Statusabfrage des lokalen Tasters Beifahrertür für die seitlichen Sonnenrollos bzw. Heckscheibe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD314_D |
| AUSSENSPIEGEL_ABBLENDEN | 0xD320 | - | Statusabfrage bzw. Ansteuerung des abblenden Außenspiegel. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD320_D | RES_0xD320_D |
| AUSSENSPIEGEL_THERMOSCHUTZ | 0xD321 | STAT_AUSSENSPIEGEL_SPIELSCHUTZ_AKTIV | 0=Nicht aktiv; 1=Aktiv | 0/1 | - | - | signed int | - | - | - | - | - | 22 | - | - |
| AUSSENSPIEGEL_HEIZUNG | 0xD32D | - | Statusabfrage bzw. Ansteuerung der Heizung des Außenspiegels. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD32D_D | RES_0xD32D_D |
| EC_SPIEGEL_ABBLENDEN | 0xD32F | - | Statusabrage der Elektrochrome-Innenspiegel (EC-Spiegel) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD32F_D | RES_0xD32F_D |
| EC_SPIEGEL_VORHANDEN | 0xD330 | STAT_INNENSPIEGEL_EC_VORHANDEN | 0: EC-Spiegel nicht vorhanden; 1: EC-Spiegel vorhanden | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| AUSSENSPIEGEL_TASTER | 0xD331 | - | Statusabfrage des Außenspiegeltasten für die Spiegelverstellung. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD331_D |
| AUSSENSPIEGEL_HC2 | 0xD347 | - | Statusabfrage bzw. Ansteuerung des Fahrspurwechselwarnung-Anzeige (HC2) von der Außenspiegel. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD347_D | RES_0xD347_D |
| WISCHER_LIN_INFOS | 0xD34F | - | Auslesen weitere Informationen der Frontwischer. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD34F_D |
| WASCHDUESENHEIZUNG | 0xD350 | - | Statusabfrage bzw. Aktivierung der Waschdüsenheizung. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD350_D | RES_0xD350_D |
| WASCHERPUMPE_HINTEN | 0xD352 | - | Statusabfrage bzw. Aktivierung der Waschwasserpumpe hinten. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD352_D | RES_0xD352_D |
| SRA_RELAIS | 0xD354 | STAT_SRA_STAUTS_ANSTEUERUNG | Liefert den Zustand ob den SW probiert, den SRA zu steuern.  0: Scheinwerferreinigungsanlage nicht aktiv  1: Scheinwerferreinigungsanlage aktiv | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| WISCHER_FRONT_RSK | 0xD355 | - | Status / Steuern Park-Position Frontscheibenwischer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD355_D | RES_0xD355_D |
| WASCHWASSERSTAND | 0xD357 | - | Statusabfrage des Waschwasserstands. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD357_D |
| WASCHWASSER_VORNE | 0xD35C | - | Statusabfrage bzw. Aktivierung der Waschwasserpumpe vorne. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD35C_D | RES_0xD35C_D |
| WISCHER_FRONT | 0xD35D | - | Statusabfrage bzw. Ansteuerung des Frontscheibenwischers. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD35D_D | RES_0xD35D_D |
| WISCHER_HECK | 0xD35F | - | Statusabfrage bzw. Bedienung der Ansteuerung des Heckscheibenwischers. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD35F_D | RES_0xD35F_D |
| SRA | 0xD360 | - | Statusabfrage bzw. Ansteuerung Scheinwerferreinigungsanlage | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD360_D | - |
| LENKSTOCK_WISCHER_RLS_LED | 0xD361 | - | Statusabfrage bzw. Aktivierung der LED Regensensor. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD361_D | - |
| TLC | 0xD3E9 | - | Timo to line crossing | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD3E9_D | RES_0xD3E9_D |
| CARGO_SG_ANTIRUTSCHMATTE | 0xD3EF | - | Auslesen und Steuerung der Antirutschmatte | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD3EF_D | RES_0xD3EF_D |
| HOD_LENKRAD | 0xD3F0 | STAT_HOD_STATUS | Liefert den Status des HOD Sensors | 0-n | - | high | unsigned char | TAB_HOD_STATUS | - | - | - | - | 22 | - | - |
| HOD_ZUSTAND_GAP | 0xD3F1 | - | Abstand bzw. Berührungsfläche zwischen Hand und Lenkrad (gemessener Wert am A/D-Wandler) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD3F1_D |
| HOD_AKTIVIERUNG | 0xD3F3 | - | Aktivierung der HOD-Elektronik | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD3F3_D | - |
| WISCHER_LIN_DATEN_LESEN | 0xD505 | - | Statusabfrage des LIN-Wischers Daten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD505_D |
| WISCHER_HECK_MOTOR_2 | 0xD507 | - | Statusabfrage bzw. Bedienung der Ansteuerung des 2. Heckscheibenwischers. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD507_D | RES_0xD507_D |
| TOUCH_COMMAND_SIA_VERRIEGELUNG | 0xD50C | - | Sperren und entsperren der Verriegelung des Snap-In-Adapters. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD50C_D | - |
| TOUCH_COMMAND_SIA_ABFRAGE | 0xD50D | - | Abfrage der aktuellen Statusinformationen des Touch Command Snap-In Adapters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD50D_D |
| INNENLICHT_HELLIGKEIT | 0xD519 | - | Offset der Helligkeit des Ambientlicht | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD519_D | - |
| LEUCHTEN_FUNKTION | 0xD542 | - | Statusabfrage bzw. Steuerung der Leuchtenfunktion. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD542_D | RES_0xD542_D |
| HOEHENSTAENDE_LWR_MODUS | 0xD54D | - | Status- und Wertabfrage von Busnachricht für die Beladungssensoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD54D_D |
| PIA_FLA_FOLLOW | 0xD555 | - | Status PIA (FollowMeHome) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD555_D |
| PIA_TIPPBLINKEN | 0xD55E | - | Status PIA-Einstellung Tippblinken | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD55E_D |
| PIA_TAGFAHRLICHT | 0xD573 | STAT_PIA_TAGFAHRLICHT | Tagfahrlicht momentan:  0: OFF;  1: ON | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| LWR_MODUS | 0xD57E | - | Welche Leuchtweitenregulierung (LWR) ist aktiv | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD57E_D |
| FBM_TASTEN_VORHANDEN | 0xD599 | STAT_FBM_TASTEN_VORHANDEN_WERT | Gibt aus, wieviele FBM-Tasten verbaut sind:  0 = keine FBM-Tasten verbaut,  1 = 1 Taste verbaut,  2 = 2 Tasten verbaut,  N = n Tasten verbaut,  255 = Anzahl unbekannt | Tasten | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| INNENLICHT_MAPPING | 0xD5DE | - | Ausgabe der Zuordnung von jede PIN zur Funktion. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD5DE_D |
| AHL_LWR_FAHRSITUATION | 0xD5E6 | - | Statusabfrage bzw. Ansteuerung der adaptive Fahrlichtsituation | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD5E6_D | RES_0xD5E6_D |
| HOEHENSTAENDE_SENSOREN | 0xD601 | - | Auslesen der Rohwerte der Höhenstandssensoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD601_D |
| HOEHENSTAENDE_KALIBRIERUNG_LESEN | 0xD604 | - | Auslesen der Kalibrierungswerte der Höhenstandssensoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD604_D |
| KUEHLMITTELSTAND | 0xD672 | - | Read the coolant level of the coolant tank. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD672_D |
| BEMIKO_LIN_TASTEN | 0xD6C0 | - | Statusabfrage bzw. Ansteuerung des Tasten im LIN-Slave des Bedieneinheit Mittelkonsole (Bemiko) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD6C0_D |
| BEMIKO_LIN_VORHANDEN | 0xD6C1 | STAT_VORHANDEN_BEMIKO | Gibt aus, ob der Bemiko LIN kodiert ist: 0= Nicht kodiert;  1= Kodiert. | 0/1 | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| BEMIKO_LIN_LED | 0xD6C2 | - | Statusabfrage bzw. Ansteuerung der LEDs im LIN-Slave des Bedieneinheit Mittelkonsole (Bemiko)  | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD6C2_D | - |
| BEMIKO_LIN_VARIANT_ID | 0xD6C3 | STAT_VARIANT_ID_WERT | Varianten ID der Bemiko (gültige Werte: 0x00 - 0xFF) | HEX | - | high | unsigned char | - | - | - | - | - | 22 | - | - |
| VORHANDEN_DRITTE_SITZREIHE_EIN | 0xD762 | STAT_DRITTE_SITZREIHE_VORHANDEN | Gibt an, ob die 3. Sitzreihe kodiert und verbaut ist. Siehe Table TAB_AUSSTATTUNG_KODIERT | 0-n | - | - | signed int | TAB_AUSSTATTUNG_KODIERT | - | - | - | - | 22 | - | - |
| VERRIEGELUNG_ZWEITE_SITZREIHE | 0xD763 | - | Abfrage Status Verriegelung zweite Sitzreihe | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD763_D |
| THERMO_CUPHOLDER_LUEFTER | 0xD81B | STAT_THCH_LUEFTER | Diese Ergebnis liefert den Lüfterstatus. | 0-n | - | high | unsigned char | TAB_THCH_LUEFTER | - | - | - | - | 22 | - | - |
| THERMO_CUPHOLDER_TASTER | 0xD81C | - | Auslesen der Bestätigung des Tasters für Kühlen bzw. Heizen des Thermo-Cupholders. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD81C_D |
| ARMAUFLAGENHEIZUNG_BF | 0xD83A | - | Betriebszustand Armauflagenheizung Beifahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD83A_D | RES_0xD83A_D |
| ARMAUFLAGENHEIZUNG_BFH | 0xD83B | - | Betriebszustand Armauflagenheizung Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD83B_D | RES_0xD83B_D |
| ARMAUFLAGENHEIZUNG_FA | 0xD83C | - | Betriebszustand Armauflagenheizung Fahrer | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD83C_D | RES_0xD83C_D |
| ARMAUFLAGENHEIZUNG_FAH | 0xD83D | - | Betriebszustand Armauflagenheizung Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD83D_D | RES_0xD83D_D |
| ARMAUFLAGENHEIZUNG_VORHANDEN | 0xD842 | - | Statusabfrage Armauflagenheizung vorhanden | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD842_D |
| AUDIO_TASTEN | 0xD8B5 | - | Statusabfrage bzw. Simulation der Tasten des Audiobedienfeld. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8B5_D |
| UMSCHALTVENTIL | 0xD8DA | - | Statusabfrage bzw. Ansteuerung des Umschaltventils. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD8DA_D | RES_0xD8DA_D |
| IKF_STATISTIK | 0xD8DC | - | Anzahl der IKF-Aktivierungen der IKF-Funktionen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD8DC_D |
| FENSTERHEBER_VORHANDEN | 0xD8FE | STAT_ANZAHL_FH_KODIERT | Auslesen der Anzahl von kodierten Fensterheber. | 0-n | - | high | unsigned char | TAB_FH_ANZAHL_VORHANDEN | - | - | - | - | 22 | - | - |
| ZUSATZWASSERPUMPE | 0xD903 | - | Statusabfrage bzw. Ansteuerung der Zusatzwasserpumpe. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD903_D | RES_0xD903_D |
| KLIMAKOMPRESSOR | 0xD906 | - | Statusabfrage bzw. Steuerung der Klimakompressor. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD906_D | RES_0xD906_D |
| AUC_SENSOR | 0xD963 | STAT_AUC_SENSOR_NR | Gibt aus, welche Schadstoffstufe der AUC-Sensor ermittelt hat. | 0-n | - | - | unsigned char | TAB_AUC_STUFE | - | - | - | - | 22 | - | - |
| DRUCKSENSOR | 0xD967 | STAT_DRUCK_WERT | Ausgabe Kältemitteldruck in bar : 0 - 125, 126 = Kurzschluss nach Masse, 127 = Kurzschluss nach Plus bzw. Leitungsunterbrechnung oder Signal ungültig | bar | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FONDSCHICHTUNGS_POTI | 0xD96E | STAT_FONDSCHICHTUNGS_POTI_WERT | Ausgabe der Einstellung des Fond-Schichtungspotentiometer: 0-100 %, 0xFF: Wert ungültig | % | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HECKSCHEIBENHEIZUNG | 0xD970 | - | Statusabfrage bzw. Ansteuerung der Heckscheibenheizung. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD970_D | RES_0xD970_D |
| KOMPRESSORKUPPLUNG | 0xD971 | - | Statusabfrage bzw. Ansteuerung der Kompressorkupplung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD971_D | RES_0xD971_D |
| AUDIOBEDIENTEIL_VARIANTE | 0xD9A0 | STAT_VARIANTE_AUDIOBEDIENTEIL | Variante Audiobedienteil.  Siehe Tabelle TAB_VARIANTE_AUDIOBEDIENTEIL | 0-n | - | - | unsigned char | TAB_VARIANTE_AUDIOBEDIENTEIL | - | - | - | - | 22 | - | - |
| DRUCKSENSOR_HOCHAUFLOESEND | 0xD9B8 | STAT_DRUCK_WERT | Wertebereich: 0.00 bar - 40.00 bar; Fehlercodes: 40,90 (0xFFA) = Kurzschluss nach Masse; 40,91 (0xFFB) = Leitungsunterbrechung oder Kurzschluss nach Batterie; 40,92 (0xFFC) = Nicht verbaut; 40,93 (0xFFD) = Funktionsschnittstelle nicht verfügbar; 40,94 (0xFFE) = Funktion melder Fehler; 40,95 (0xFFF) = Signal unbefüllt | bar | - | - | unsigned int | - | 1.0 | 100.0 | 0.0 | - | 22 | - | - |
| LENKRAD_SCHALTPADDLES | 0xDA24 | - | Status Schaltpaddles | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA24_D |
| STEUERN_KLEMMEN_HISTORIE | 0xDA4C | - | STEUERN_KLEMMEN_HISTORIE | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA4C_D | - |
| INNENLICHT_FI_LIN_1_LAYERING_STEUERN | 0xDA5E | - | Ansteuerung der FI_LIN-Layering Slaves. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDA5E_D | - |
| INNENLICHT_FI_LIN_1_LAYERING | 0xDA5F | - | Es wird der Status der LIN Slaves im Layering System abgefragt und ausgegeben. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDA5F_D |
| HECKKLAPPE_TASTER_AUSSEN | 0xDA7D | STAT_TASTER_HECKKLAPPE_AUSSEN_NR | Ergebnis siehe Tabelle TAB_CAS_DIGITAL_EINGANG | 0-n | - | - | unsigned char | TAB_CAS_DIGITAL_EINGANG | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| HSM | 0xDAA0 | - | Status des HSM (Hardware Security Modul) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAA0_D |
| SPANNUNG_KLEMMEN | 0xDAB3 | - | Auslesen analoger Spannungs- und Strom-Werte an den ZSG Ausgängen und Eingängen. Hinweise:  - Aufruf des Jobs erfolgt über Standardjob STATUS_LESEN mit Argument SPANNUNG_KLEMMEN. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDAB3_D |
| KEY_VALID_NR_AKTUELL | 0xDAB4 | STAT_KEY_VALID_NR_AKTUELL | Index des Authentisierungs-Devices, mit dem die Wegfahrsperre freigegeben worden ist. Falls die Wegfahrsperre nicht freigegeben ist, so wird 255 zurückgeliefert. | 0-n | - | - | unsigned char | TAB_IM_ADEV_VALID | - | - | - | - | 22 | - | - |
| STEUERN_FAHRPROFIL | 0xDAB8 | - | STEUERN_FAHRPROFIL | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAB8_D | - |
| CAS_MONTAGEMODUS | 0xDAB9 | - | Statusabfrage und Setzen des Montagemodus für ELV-Sperre, KL50-Sperre/Fahrbereitschafts-Sperre und Präsentations-Modus. Die ELV-Sperre (ELV-Montagemodus) ist ab SP2015 im BDC nicht mehr relevant, da die ELV eigensicher über das ELV-Steuergerät realisert ist. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDAB9_D | RES_0xDAB9_D |
| STATUS_KLEMMEN_VERHINDERER | 0xDABA | - | Auslesen der internen Verhinderungsgründe der Klemmensteuerungs-Statemachine für Klemmenwechsel:  Einschalten der KL15, Ausschalten der KL15, Anforderung Hersellung Fahrbereitschaft (RQ_FN_DRV) Hinweise: - Es wird jeweils nur ein Hinderungsgrund ausgegeben, auch wenn mehrere Hinderungsgründe vorliegen. - Abhängig vom betrachteten Klemmen-Wechsel sind jeweils nicht alle Werte aus der Tabelle TAB_ZSG_KLEMMEN_VERHINDERER möglich. Die Priorisierung bei mehreren Verhinderern ist in [] jeweils angegebn. (Prio-1 = höchste Priorität.). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDABA_D |
| CA_TAGE_SPERRSTATUS | 0xDAC4 | - | Der Job dient zum Auslesen des (Sperr-)Status der TAGE, der angibt, ob die TAGE gesperrt (z.B. aufgrund Dauerbetätigung oder sporadischer unmotivierter Aktivierung) oder freigegeben sind. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDAC4_D | - |
| ZSG_BETRIEBSZEIT_ZAEHLER | 0xDAEE | - | Dieser Job ließt den Betriebszeitzaehler aus und gibt die Werte zurueck bzw. setzt den Betriebszeitzaehler zurueck auf Null. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDAEE_D | RES_0xDAEE_D |
| HECKKLAPPENSENSOR | 0xDB16 | STAT_HECKKLAPPENSENSOR | Aktueller Zustand des Heckklappensensors | 0-n | - | high | unsigned char | TAB_HECKKLAPPENSSENSOR | - | - | - | - | 22 | - | - |
| RSU_FAHRFREIGABESPERRE | 0xDB17 | - | Auslesen der RSU Fahrfreigabesperre im BDC. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB17_D |
| ISV_VORHANDEN | 0xDB40 | STAT_ISV_VORHANDEN | Gibt aus, ob das Intelligente Stromverteilermodul ISV (LIN) kodiert ist.  Siehe Table TAB_AUSSTATTUNG_KODIERT. | 0-n | - | high | unsigned char | TAB_AUSSTATTUNG_KODIERT | - | - | - | - | 22 | - | - |
| ISV_RELAY_STATUS | 0xDB41 | - | Statusabfrage der zustand der bistabilen Relais. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDB41_D |
| HO_INFO | 0xDC54 | - | Auslesen und Setzen der folgenden im SG gespeicherten Daten für die Handelsorganisation: - Händlernummer - Erstzulassungsdatum | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC54_D | RES_0xDC54_D |
| STATUS_KLEMMEN | 0xDC56 | STAT_KLEMMENSTATUS | Das Result enthält den Status der Klemmen im ZSG-Steuergerät. Siehe Table TAB_KLEMMEN_ZUSTAND | 0-n | - | high | unsigned char | TAB_KLEMMEN_ZUSTAND | - | - | - | - | 22 | - | - |
| STATUS_KL15_ABSCHALTUNG | 0xDC57 | - | Dieser Job dient zum Auslesen des Status der Funktion automatische KL15-Abschaltung (Tür auf/zu, ZV sichern, OSFG). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC57_D |
| STEUERN_PIA_NR | 0xDC5B | - | Umdefinieren der PIA-Nummer eines Schlüssels in der Transponder Tabelle. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDC5B_D | - |
| START_STOP_TASTER_SENSOREN | 0xDC60 | - | Statusabfrage bzw. Setzen der Zustände der beiden Sensoren des Start-Stopp-Tasters.  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDC60_D |
| KUPPL_PN_SCHALTER | 0xDC63 | STAT_SCHALTER_KUPPL_AKTIV | Das Result enthält den aktuellen Zustand des Kupplungsschalters.  Siehe Table TAB_DIGITAL_EINGANG | 0-n | - | - | unsigned char | TAB_DIGITAL_EINGANG | - | - | - | - | 22 | - | - |
| MSA_TASTER | 0xDC67 | STAT_TASTER_MSA_AKTIV | Das Result enthält den aktuellen Zustand für den Eingang Taster der Motor-Start-Automatik.  Siehe Table TAB_TASTER_NICHT_DIAGNOSEFAEHIG.  | 0-n | - | - | unsigned char | TAB_TASTER_NICHT_DIAGNOSEFAEHIG | - | - | - | - | 22 | - | - |
| SARAH | 0xDC83 | - | Auslesen bzw. Steuerung der SARAH-Konfiguration. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC83_D | RES_0xDC83_D |
| SARAH_TASTER | 0xDC84 | - | Statusabfrage bzw. simulation des SARAH Tasters. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC84_D | RES_0xDC84_D |
| SARAH_TASTER_LED | 0xDC85 | - | Statusabfrage bzw. Steuerung der LED vom SARAH-Taster. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDC85_D | RES_0xDC85_D |
| IM_SCHLUESSEL_SPERRE | 0xE370 | - | Steuerung um die Schlüssel zu sperren oder freizugeben. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE370_D | - |
| KLEMMEN_SPANNUNG_30L | 0xE371 | - | Spannugsabfrage des Steuergerätklemmen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE371_D |
| KLEMMEN_NACHLAUFZEIT | 0xE372 | - | Auslesen im SG über Bus versendeten Nachlaufzeit der Klemmen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE372_D |
| SMO | 0xE390 | - | Statusabfrage des Smart Opener (SMO) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE390_D |
| SMO_CONTROL | 0xE391 | - | Rücksetzen des SMO-Options | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE391_D | - |
| CA_CKT | 0xE392 | - | Statusabfrage bzw. Steuerung des Comfort Keytrakings (2.0) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE392_D | RES_0xE392_D |
| CA_TAGE | 0xE393 | - | Statusabfrage bzw. Steuerung des TAGEs (Türaußengriff-Elektronik) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE393_D |
| CA_BEDIENSTELLE | 0xE394 | - | Statusabfrage der Bedienstelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE394_D |
| ZV_AKTUELL | 0xE395 | - | Statusabfrage des aktuelle Zentraleverriegelungsmasters | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE395_D |
| ZV_BEDIENSTELLE | 0xE396 | - | Statusabfrage des ZV-Bedienstelle | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE396_D |
| ZV_KONTAKT | 0xE39D | - | Auslesen der ZV-Kontakte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE39D_D |
| AKTUATOR_KURZSCHLUSSZAEHLER_SERVICE | 0xE3A0 | - | Auslesen und Rücksetzen der Kurzschlusszähler der Aktuatoren. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE3A0_D | RES_0xE3A0_D |
| AKTUATOR_KURZSCHLUSSZAEHLER_MAX | 0xE3A1 | - | Auslesen der maximalen Kurzschlüsse pro Aktuator. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3A1_D |
| LICHT_TASTER_SCHALTER | 0xE3B4 | - | Statusabfrage allen Tasten und Schalter der Licht-Umfang. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3B4_D |
| LICHT_AUSGANG_DIGITAL_STEUERN | 0xE3B5 | - | Statusabfrage bzw. Ansteuerung der digitalen Licht-Ausgänge | - | - | - | - | - | - | - | - | - | 2F | ARG_0xE3B5_D | - |
| LICHT_KURZSCHLUSSABSCHALTUNG | 0xE3B6 | - | Statusabfrage bzw. Rücksetzen der Kurzschlussabschaltung der Lichtausgänge. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3B6_D |
| LICHT_BETRIEBSDAUER | 0xE3B7 | - | Wertauslesen bzw. Ansteuerung der Betriebsminuten der Leuchtenausgänge. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3B7_D |
| LENKSTOCK_BLINKER | 0xE3B8 | - | Statusabfrage des Lenkstock blinkers  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3B8_D |
| LICHT_AUSGANG_DIGITAL | 0xE3B9 | - | Statusabfrage bzw. Aktivierung aller digitalen angeschlossenen Leuchtenausgänge. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3B9_D |
| LICHT_BEDIENEINHEIT_TASTEN | 0xE3BA | - | Auslesen der BEL-Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3BA_D |
| LICHT_BEDIENEINHEIT_BEL_STATE | 0xE3BB | - | Auslesen des aktuellen BEL-Status von der BEL-State-Machine um die Stellung 2 zu steuern. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3BB_D |
| INNENLICHT_BEDIENSTELLEN | 0xE3D0 | - | Statusabfrage der Innenlicht Tasten und Sensoren. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3D0_D |
| INNENLICHT_FI_LIN_2_LAYERING | 0xE3D1 | - | Innenlicht Andere Bus Layering | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE3D1_D | RES_0xE3D1_D |
| INNENLICHT_CONFIG_CHECK_FI_LIN_1 | 0xE3D3 | - | Überprüfung ob die Konfiguration der LED-Module zur Kodierung passen (FI-LIN-1). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3D3_D |
| INNENLICHT_CONFIG_CHECK_FI_LIN_2 | 0xE3D4 | - | Überprüfung ob die Konfiguration der LED-Module zur Kodierung passen (FI-LIN-2). | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3D4_D |
| LENKSTOCK_WISCHER_INFOS | 0xE3EF | - | Statusabfrage der Lenkstock Wischerstellungen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3EF_D |
| WISCHER_AUSSTATTUNG | 0xE3F0 | - | Statusabfrage welche Ausstattungen in BDC vorhanden sind. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE3F0_D |
| WISCHER_FRONT_POSITION | 0xE3F1 | - | Statusabfrage bzw. Ansteuern der Frontwischerposition | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE3F1_D | RES_0xE3F1_D |
| WISCHER_HECK_POSITION | 0xE3F2 | - | Positionabfrage bzw. Ansteuerung des Heckwischers. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE3F2_D | RES_0xE3F2_D |
| SITZHEIZUNG_BFS | 0xE430 | - | Statusabfrage bzw. Ansteuerung des Sitzheizung Beifahrerseite | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE430_D | RES_0xE430_D |
| SITZHEIZUNG_BFSH | 0xE431 | - | Statusabfrage bzw. Ansteuerung des Sitzheizung Beifahrerseite hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE431_D | RES_0xE431_D |
| SITZHEIZUNG_FAS | 0xE432 | - | Statusabfrage bzw. Ansteuerung des Sitzheizung Fahrerseite | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE432_D | RES_0xE432_D |
| SITZHEIZUNG_FASH | 0xE433 | - | Statusabfrage bzw. Ansteuerung des Sitzheizung Fahrerseite hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE433_D | RES_0xE433_D |
| SITZHEIZUNG_VORHANDEN | 0xE434 | - | Statusabfrage der Kodierung der Heizung von jeweilige Sitz. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE434_D |
| SITZHEIZUNG_HINTEN_TASTEN | 0xE435 | - | Statusabfragen der Tasten des hinteren Sitzheizungen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE435_D |
| KLIMA_AUSSTATTUNG_VORHANDEN | 0xE440 | - | Liefert zurück welche Aktuatoren vorhanden/kodiert sind. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE440_D |
| HEIZUNGSABSPERRVENTIL | 0xE442 | - | Absperrventil für Kühlmittelskreis | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE442_D | RES_0xE442_D |
| AUSSENSPIEGEL_AUSSTATTUNG | 0xE450 | - | Statusabfrage der Ausstattung von Außenspiegelfunktionen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE450_D |
| INNENSPIEGEL_KOMPASS | 0xE451 | - | Auslesen den Kompassinformationen von den Fahrzeug durch Innenspiegel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE451_D |
| AUSSENSPIEGEL_POSITION | 0xE452 | - | Statusabfrage bzw. Ansteuerung des Außenspiegel Position. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE452_D | RES_0xE452_D |
| AUSSENSPIEGEL_RICHTUNG | 0xE453 | - | Statusabfrage bzw. Ansteuerung der Richtung des Außenspiegels | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE453_D | RES_0xE453_D |
| AUSSENSPIEGEL_BEIKLAPPEN | 0xE454 | - | Statusabfrage bzw. Ansteuerung des Beiklappen Außenspiegels. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE454_D | RES_0xE454_D |
| AUSSENSPIEGEL_WRITE_MEMORY_POSITION | 0xE455 | - | Schreib in der Speicher eine definierte Außenspiegelposition. | - | - | - | - | - | - | - | - | - | 2E | ARG_0xE455_D | - |
| AUSSENSPIEGEL_MEMORY_POSITION | 0xE456 | - | Abfrage bzw. Steuerung der Außenspiegelposition. | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE456_D | RES_0xE456_D |
| UGDO | 0xE457 | - | Auslesen des eingestelltes Lands des UGDOs. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE457_D |
| ROLLO_VORHANDEN | 0xE460 | - | Statusabfrage des Sonnenrollos ob sie verbaut/codiert sind. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE460_D |
| ROLLO_BFH | 0xE461 | - | Statusabfrage bzw. Ansteuerung der Richtung des Beifahrerseite hinten Sonnenrollos | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE461_D | RES_0xE461_D |
| ROLLO_FAH | 0xE462 | - | Statusabfrage bzw. Ansteuerung der Richtung des Fahrerseite hinten Sonnenrollos | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE462_D | RES_0xE462_D |
| FBM_STATUS_TASTEN | 0xE466 | - | Statusabfrage der FBM-Tasten (Functionnal Bookmarks) von der Audiobedienelement. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE466_D |
| FES_MODUS | 0xE468 | - | Statusabfrage bzw. Ansteuerung des Fahrerlebnisschalter Modus (FES) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xE468_D | RES_0xE468_D |
| FES_STATISTIK | 0xE469 | - | Statistikdaten zum Benutzerverhalten des FES-Modus  | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE469_D |
| TANK_FUELLSTAND | 0xE46E | - | Abfrage der niveau des Tank-Füllstandsensors. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE46E_D |
| TOUCH_COMMAND_SIA_LESEN_CAN_SIGNALS | 0xE491 | - | Auslesen des Inhalt der relevanten CAN-Signals des Touch Commands SIA. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE491_D |
| TOUCH_COMMAND_SIA_FASTA_DATEN | 0xE492 | - | Auslesen die statistische Daten und die aktuelle Einstellungen über den Snap-In Adapter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE492_D |
| RLSBS | 0xE4B0 | - | Statusabfrage bzw. Ansteuerung des Regenlichtsolar- Beschlagsensor RLSBS | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4B0_D |
| RLSBS_VORHANDEN | 0xE4B1 | - | Auslesen ob die RLSBS-Sensoren vorhanden sind. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4B1_D |
| LENKRAD_MFL_TASTEN | 0xE4B4 | - | Statusabfrage der MFL-Tasten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4B4_D |
| ELSV_TASTE | 0xE4BA | - | Statusabfrage des eLSV-Taster. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xE4BA_D |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | high | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |
| INNENLICHT_FASTA_DATEN | 0x2300 | - | FASTA Daten des Lichtschwerts, der Panoramadachbeleuchtung und der ambienten Beleuchtung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2300_D |
| AUSSENLICHT_STATISTIK_DATEN | 0x2302 | - | Auslesen aller Außenbeleuchtungsstatistikdaten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2302_D |
| HECKSCHEIBENHEIZUNG_STATISTIK | 0x2303 | STAT_ZYKLEN_HHS_WERT | Gibt die Anzahl der Aktivierungszyklen der Heckscheibenheizung an | - | - | high | unsigned long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| RESET_COUNT_NSC_MIRRORHEATING_ACTIVATIONS | 0x2304 | - | RESET Counter Spiegelheizung Aktivierungen wegen NSC | - | - | - | - | - | - | - | - | - | 2E | ARG_0x2304_D | - |
| COUNT_NSC_MIRRORHEATING_ACTIVATIONS | 0x2305 | STAT_ANZAHL_AKTIVIERUNGEN_ASP_NSC_WERT | Anzahl der Aktivierungen der ASP-Heizung aufgrund NSC | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _LICHT_RESET_BETRIEBSDAUER | 0x4506 | - | Reset den Betriebsdauer von den Licht. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4506_D | - |
| _LICHT_UEBERSPANNUNGSCOUNTER | 0x4508 | STAT_LICHT_UESPANNUNG_COUNTER_WERT | Anzahl Licht Überspannungscounter Aktivierungen insgesamt | - | - | high | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _LICHT_12H_TIMER | 0x4509 | - | Lesen - und Schreiben des Licht 12h-Timers | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4509_D | RES_0x4509_D |
| _HOMOLOGATION_DYN_LICHT | 0x450A | - | Mit diesem Diagnosejob kann das Kurvenlicht und die Adaptive Lichtverteilung (AFS) im Stand realitätsgetreu angesteuert werden. Notwendig für Homologation dyn. Lichtfunktionen in China. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x450A_D | - |
| _LICHT_DISCO_PWM | 0x4530 | - | Dieser Job dient dazu per Diagnose all diskreten Lampenausgänge anzuschalten und dabei die PWM laufend zu ändern. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4530_D | - |
| _LEUCHTEN_DIAGNOSE_VALUES | 0x4532 | - | Dieser Job dient dazu per Diagnose detailierte Leuchten Diagnose Werte eines diskreten Leuchtenausganges zu bekommen | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4532_D | RES_0x4532_D |
| _INNENBELEUCHTUNG_PWM | 0x4800 | - | Ansteuerung und Auslesen den Innenlicht (PWM in %). | - | - | - | - | - | - | - | - | - | 22;2F | ARG_0x4800_D | RES_0x4800_D |
| _INNENLICHT_FUNKTIONSMODI | 0x4804 | - | Steuerung der Funktions-Modi für Innenlicht. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4804_D | - |
| _SARAH_STATISTIK | 0x4910 | - | Informationen zum SARAH Benutzerverhalten | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4910_D |
| _WISCHZYKLUS_DAUER | 0x4A00 | - | Wischzyklus Dauer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4A00_D |
| _IBS_WAKEUP_GRUND | 0x4F0E | STAT_IBS_WAKEUP | Das Result enthält den im ZSG-gespeicherten letzten Wakeupgrund vom IBS. | 0-n | - | high | unsigned char | TAB_IBS_WAKEUP_GRUND | - | - | - | - | 22 | - | - |
| _MSA_EV_TASTER | 0x4F15 | - | Dieser Job dient zum Auslesen des Zustands des ECU-Eingangs für den Taster der Motor-Start-Automatik (MSA) oder Electric Vehicle (EV). | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4F15_D | RES_0x4F15_D |
| _SST_SENSOREN | 0x4F16 | - | Dieser Job dient zum Auslesen und Setzen der Zustände der beiden Sensoren des Start-Stopp-Tasters durch ExtendedSession Service 0x2F. | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4F16_D | RES_0x4F16_D |
| _FES_MASTER_SW_FEHLER_INFO | 0x4FA0 | STAT_FES_MASTER_SW_FEHLER_INFO_WERT | FES Master SW Fehler | - | - | high | signed long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FES_COORDINT_SW_FEHLER_INFO | 0x4FA1 | STAT_FES_COORDINT_SW_FEHLER_INFO_WERT | FES COORDINT SW Fehler | - | - | high | signed long | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _FES_DATEN | 0x4FA2 | - | Auslesen des FES-Daten. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4FA2_D |
| _ZV_HISTORIE | 0x5010 | - | Historienspeicher des Zentraleverriegelungs | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5010_D | - |
| _HECKKLAPPE_KONTAKT | 0x5020 | - | Status / Simulation Heckklappenkontakt | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5020_D | RES_0x5020_D |
| _HECKSCHEIBE_KONTAKT | 0x5021 | - | Status / Simualtion Heckscheibenkontakt | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5021_D | RES_0x5021_D |
| _SCA_VORRAST_KONTAKT | 0x5022 | - | Status / Simulation  HW-Eingang Vorrastkontakt (VRK) der Soft-Close-Automatik (SCA) | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5022_D | RES_0x5022_D |
| _FAHRZEUGKLAPPEN_CODIERUNG_STATUS | 0x5023 | - | Auslesen der kodierten Fahrzeugklappen. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5023_D |
| _TUERKONTAKT_FA | 0x5024 | - | Status / Simulation HW-Eingang Türkontakt Fahrer  Dieser Job hat keinen Einfluss auf das FuSi-Signal ST_DSW_DRD_VRFD und ändert nicht dessen Wert. | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5024_D | RES_0x5024_D |
| _TUERKONTAKT_FAH | 0x5025 | - | Status / Simulation HW-Eingang Türkontakt Fahrer hinten | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5025_D | RES_0x5025_D |
| _TUERKONTAKT_BF | 0x5026 | - | Status / Simulation HW-Eingang Türkontakt Beifahrer | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5026_D | RES_0x5026_D |
| _TUERKONTAKT_BFH | 0x5027 | - | Status / Simulation HW-Eingang Türkontakt Beifahrer hinten | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5027_D | RES_0x5027_D |
| _CENTERLOCK_TASTER | 0x5030 | - | Auslesen und Setzen des Zustands des CAS-Eingangs für den Centerlock-Taster. | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5030_D | RES_0x5030_D |
| _FRONTKLAPPE_TASTER | 0x5031 | - | Status / Simulation Taster für Frontklappe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5031_D | RES_0x5031_D |
| _HECKSCHEIBE_TASTER | 0x5032 | - | Status / Simulation für Taster Heckscheibe | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5032_D | RES_0x5032_D |
| _HECKKLAPPE_TASTER_AUSSEN | 0x5033 | - | Status / Simulation für Taster Heckklappe aussen | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5033_D | RES_0x5033_D |
| _HECKKLAPPE_TASTER_OEFFNEN_INNEN | 0x5034 | - | Auslesen und Setzen des Zustands des CAS-Eingangs Taster zum Entriegeln der Heckklappe Innen (TOEHKI). | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5034_D | RES_0x5034_D |
| _HECKKLAPPE_TASTER_SICHERN | 0x5035 | - | Auslesen und Setzen des Zustands des Eingangs für den Taster zum Zentralsichern der Heckklappe. | - | - | - | - | - | - | - | - | - | 2F | ARG_0x5035_D | RES_0x5035_D |
| _HECKKLAPPE_WIPPE | 0x5036 | - | Heckklappen Wippe | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5036_D | - |
| _CASS_LF_HW_CONFIG | 0x5050 | - | Der Job dient zum Auslesen der CA HW Konfiguration | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5050_D |
| _CASS_CKT_KEY_POSITION | 0x5053 | - | Auslesen die Position in den verschiedenen Comfort Key Tracking Zonen von allen angelernten Schlüsseln im Auto. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5053_D |
| _CA_SCHWINGKREIS_ABSTIMMUNG | 0x5054 | - | Dieser Job dient zum Auslesen des Vorwiderstandes Schwingkreis CA-Antennen ein/aus im Fzg. mit CA SA322 (max. 8) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5054_D |
| _ALM_INTERN | 0x5101 | - | Diagnosejob Status-ALM-intern (Applicative Lifecycle Manager) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5101_D |
| _EM_SPIELSCHUTZ | 0x5107 | - | Aktueller Status der Weckfähigkeits-Sperre (Spielschutz) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5107_D |
| _ALM_DISABLE_WAKESRC | 0x5108 | - | Disablen von Weckquellen | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5108_D | - |
| _ALM_SLEEP_MODE_NRC | 0x5109 | STAT_SLEEP_MODE_NRC | Beinhaltet den Response auf Sleep Mode | 0-n | - | high | unsigned char | TAB_SLEEP_MODE_NRC | - | - | - | - | 22 | - | - |
| _HSM_DECRYPT | 0x5116 | - | Initialisieren und Status HSM | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x5116_D | RES_0x5116_D |
| _JTAG_HSM_UNLOCK | 0x5118 | - | Entsperren der JTAG Schnittstelle des HSM. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5118_D | - |
| _MAC_LESEN | 0x5120 | - | Mit diesem Diagnosebefehl wird die MAC Adresse geschrieben oder ausgelesen | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5120_D |
| _FUSI_SAFEMECH_INTERVENTION | 0x5121 | - | Der Entwicklerjob dient dazu, ein vergangenes Eingreifen des FuSi Safe-Mechanismus anzuzeigen. Zweck: Support zum Test/Validierung der Safety Mechanismen. | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5121_D | - |
| _SAFETY_MICRO | 0x5122 | - | FuSi Safety für Microcontroller | - | - | - | - | - | - | - | - | - | 2E | ARG_0x5122_D | - |
| _IM_DEV | 0x5200 | - | Globale Entwicklerresults für Immobilizer | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x5200_D |
| _FH_FA_THERMOMONITOR_AKTIV | 0x6004 | - | Thermomonitor Fensterheber | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6004_D | RES_0x6004_D |
| _FH_BF_THERMOMONITOR_AKTIV | 0x6005 | - | Thermomonitor Fensterheber | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6005_D | RES_0x6005_D |
| _FH_FAH_THERMOMONITOR_AKTIV | 0x6006 | - | Thermomonitor Fahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6006_D | RES_0x6006_D |
| _FH_BFH_THERMOMONITOR_AKTIV | 0x6007 | - | Thermomonitor Beifahrer hinten | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6007_D | RES_0x6007_D |
| _FH_FREIGABE_AKTIV | 0x6030 | - | Konfiguriert den Freigabestatus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6030_D | RES_0x6030_D |
| _FH_KURZHUB | 0x6031 | - | Statusabfrage bzw. Ansteuerung der Kurzhub den rahmenlose Scheibe | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6031_D | RES_0x6031_D |
| _SCHLUESSELSUCHEN_HISTORIE | 0xF002 | - | Aktionen und Auswertung der Schlüsselsuchen Historie | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF002_R | - |
| _JTAG_LOCK | 0xF006 | - | Der Diagnosejob sperrt die JTAG Schnittstelle. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF006_R | - |
| _JTAG_HSM_LOCK | 0xF007 | - | Sperren der JTAG Schnittstelle des HSM. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _INIT_EXT_EEPROM | 0xF00A | - | Dieser Entwicklerjob dient dazu per Diagnose das externe EEprom auf dem BDC neu zu initialisieren. | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _CASS_LF_HARDWARE_STATUS | 0xF010 | - | Dieser Job startet die interne Diagnose der LF Hardware und gibt den Zustand der LF-Hardware zurück. Bei erkannten Fehlern im LF-Treiber wird der IS-Eintrag: CASS LF Treiber Problem eingetragen. Bei erkannten Fehlern in einer LF-Antenne wird der IS-Eintrag: CASS LF Antennen Problem 1 oder 2 eingetragen. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF010_R |
| _CASS_READ_KEY_LOCALISATION_PARAMETERS | 0xF013 | - | Liest einen Parameter des Schlüssellokalisierungsalgorithmus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF013_R | RES_0xF013_R |
| _CASS_CKT_SEARCH | 0xF014 | - | Prüft in welcher CKT Zonen der Schlüssel sich aktuell befindet. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF014_R | RES_0xF014_R |
| _CASS_CKT_SETUP | 0xF015 | - | Startet das Setup für Comfort Key Tracking. Bestimmt den minimalen Strom durch die LF Antennen, bei denen der Schlüssel noch antwortet.  | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF015_R | RES_0xF015_R |
| _IM_ADEV_DATA_DEV | 0xF030 | - | ADEV Entwicklungsdaten | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF030_R | RES_0xF030_R |
| _LEUCHTEN_KALTUEBERWACHUNG | 0xF101 | - | Kaltlichtüberwachung per Diagnose. Gefundene Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF101_R |
| _LEUCHTEN_WARMUEBERWACHUNG | 0xF102 | - | Warmlichüberwachung per Diagnose. Gefundene Fehler werden im Fehlerspeicher eingetragen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF102_R |
| _LICHT_UEBERSPANNUNGSCOUNTER_RESET | 0xF103 | - | Rücksetzen des Überspannungsschutz-Zählers | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _LWR_POSITION | 0xF104 | - | Ansteuern der LWR-Position und Auslesen der aktuellen Position. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF104_R | RES_0xF104_R |
| _LWR_TESTMODE | 0xF105 | - | Routine um den LWR-Testmode zu starten bzw. stoppen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _LWR_REFERENZLAUF | 0xF106 | - | LWR-Referenzlauf aktivieren und die Ergebnisse der Routinejob auslesen | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF106_R |
| _AUSSENLICHT_STATISTIK_DATEN_RESET | 0xF108 | - | Rücksetzen alle Außenlichtzähler und Statistikdaten | - | - | - | - | - | - | - | - | - | 31 | - | - |
| _BREAKPOINT_CONTROL | 0xF305 | - | To control breakpoints of the cpu | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF305_R | RES_0xF305_R |
| _GET_STACK_INFO | 0xF307 | - | Auslesen Stack Informationen des Steuergeräts OS. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF307_R | RES_0xF307_R |
| _STARTUP_TIME | 0xF30B | - | Über diesen Job können die Aufstartzeiten des Body ausgelesen werden | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF30B_R | RES_0xF30B_R |
| _BDC_LOGGER | 0xF30C | - | Using this job the BDC Logger SWC can be controlled. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF30C_R | RES_0xF30C_R |
| _RTE_BUFFER_TRACING_EXT | 0xF30F | - | Start dem RTE-Pufferwerte Steuerung. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF30F_R | - |
| _SAFETY_MICRO_STATUS | 0xF310 | - | Safety Micro | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF310_R | RES_0xF310_R |
| _LIN_TRACING | 0xF400 | - | Einschalten/Ausschalten der LIN-Tracing. | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF400_R | - |
| _ENABLING_NETWORK_MIRRORING | 0xF700 | - | Enabling Network Mirroring of RTE buffers | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF700_R | RES_0xF700_R |
| SPECIAL_FLASH_TIMING_MODE_LIN | 0xF701 | - | aktivieren/deaktivieren special flash timing mode | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF701_R | - |

### STATE_RTE_BUFFER

| WERT | TEXT |
| --- | --- |
| 00 | Disable RTE buffer tracing |
| 01 | Enable RTE buffer tracing |
| 02 | Persistently enable RTE buffer tracing |

### TAB_AKTUATOREN_KURZSCHLUSS_COUNTER

| WERT | TEXT |
| --- | --- |
| 0x81 | ACT_TC_TERM50_STARTER |
| 0x83 | ACT_CL_BOOTLID_RELEASE |
| 0x84 | ACT_CL_REASCREEN_RELEASE |
| 0x85 | ACT_WW_FRONT |
| 0x86 | ACT_WW_FRONT_BREAK |
| 0x87 | ACT_WW_REAR |
| 0x88 | ACT_WW_REAR_BREAK |
| 0x89 | ACT_WW_REAR2 |
| 0x8A | ACT_WW_REAR2_BREAK |
| 0x8B | ACT_WW_SUNBLIND_UP_HS |
| 0x8C | ACT_WW_SUNBLIND_DOWN_HS |
| 0x8D | ACT_WW_SUNBLIND_UP_LS |
| 0x8E | ACT_WW_SUNBLIND_DOWN_LS |
| 0x8F | ACT_AC_MAGNITIC_CLUTCH |
| 0x91 | ACT_AC_COMPRESSOR_VALVE |
| 0x92 | ACT_AC_WATER_PUMP_ADD |
| 0x93 | ACT_AC_HEATING_VALVE |
| 0x94 | ACT_HC_JET_WASCHER |
| 0x95 | ACT_HC_MIRROR |
| 0x96 | ACT_PF_5V0_SENSOR |
| 0x97 | ACT_WW_PUMP_FRONT_HS |
| 0x98 | ACT_WW_PUMP_FRONT_LS |
| 0x99 | ACT_WW_PUMP_REAR_HS |
| 0x9A | ACT_WW_PUMP_REAR_LS |
| 0x9B | ACT_WW_HEAD_LIGHT_CLEANING |
| 0x9C | ACT_PF_HORN |
| 0x9D | ACT_PF_BRIDGE_UP_HS |
| 0x9E | ACT_PF_BRIDGE_UP_LS |
| 0x9F | ACT_PF_BRIDGE_DOWN_HS |
| 0xA0 | ACT_PF_BRIDGE_DOWN_LS |
| 0xFE | ACT_BODY_ALL |
| 0xFF | ACT_ALL |

### TAB_ANFORDERER_PWF_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x01 | Remote Controlled Parking |
| 0x02 | Deaktivierung Wohnen HMI |
| 0x03 | Energiediagnose |
| 0x04 | Telex |
| 0x05 | Remote Software Update |
| 0x06 | Weckerdiagnose |
| 0xFF | Wert ungültig |

### TAB_ANFORDERUNG_NACHLAUFZEIT

| WERT | TEXT |
| --- | --- |
| 0x0 | Keine Anforderung zur Nachlaufzeitverlängerung erfolgt |
| 0x1 | Anforderung zur Nachlaufzeitverlängerung ist erfolgt |

### TAB_ARMLEHNENHEIZUNG_HINTEN_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht vorhanden |
| 0x01 | vorhanden (2 getrennte Heizflächen in der Mittelarmlehne) |
| 0x02 | vorhanden (1 gemeinsame Heizfläche in der Mittelarmlehne, die am Beifahrer-Heizungsmodul angeschlossen ist) |
| 0x03 | vorhanden (2 gemeinsame Heizfläche in der Mittelarmlehne) |
| 0x04 | vorhanden (1 gemeinsame Heizfläche in der Mittelarmlehne, die am Fahrer-Heizungsmodul angeschlossen ist)  |
| 0x05 | vorhanden (nur Türverkleidungs-Heizmatten verbaut) |
| 0xFF | ungültiger Wert |

### TAB_AUC_STUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Luftgütestufe 0 |
| 0x01 | Luftgütestufe 1 |
| 0x02 | Luftgütestufe 2 |
| 0x03 | Luftgütestufe 3 |
| 0x04 | Luftgütestufe 4 |
| 0x05 | Luftgütestufe 5 |
| 0x06 | Luftgütestufe 6 |
| 0xFF | ungültiger Wert |

### TAB_AUFGETRETEN_NICHT_AUFGETRETEN

| WERT | TEXT |
| --- | --- |
| 0x0 |  nicht aufgetreten |
| 0x1 | aufgetreten |

### TAB_AUSFUEHRUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | NOK, kein Wechsel nach Pruefen_Analyse_Diagnose möglich (ELV verriegelt) |
| 0x02 | NOK, Verlassen von Pruefen_Analyse_Diagnose nicht möglich |
| 0x03 | NOK, kein Wechsel nach Parken_BN_niO möglich |
| 0x04 | Pruefen_Analyse_Diagnose ist nicht aktiv |
| 0xFF | Ungültiger Wert |

### TAB_AUSSENSPIEGEL_ABBLENDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Abblendenfunktion |
| 0x01 | Abblendfunktion beide Außenspiegel vorhanden |
| 0x02 | Abblendfunktion nur Außenspiegel Fahrerseite  vorhanden |
| 0xFF | Wert ungültig |

### TAB_AUSSENSPIEGEL_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | LEFT_MIRROR |
| 0x01 | RIGHT_MIRROR |

### TAB_AUSSENSPIEGEL_AUSWAHL_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_MIRROR |
| 0x01 | LEFT_MIRROR |
| 0x02 | RIGHT_MIRROR |

### TAB_AUSSENSPIEGEL_BEIKLAPPEN_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | EINKLAPPEN |
| 0x02 | AUSKLAPPEN |

### TAB_AUSSENSPIEGEL_BEIKLAPPEN_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Beiklappen nicht kodiert |
| 0x01 | Beiklappen kodiert |
| 0xFF | Wert ungültig |

### TAB_AUSSENSPIEGEL_HC2_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | NO_FLASHING |
| 0x02 | FLASHING_LVL_1 |
| 0x03 | FLASHING_LVL_2 |
| 0x04 | FLASHING_LVL_3 |

### TAB_AUSSENSPIEGEL_HEIZUNG_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Spiegelheizung nicht kodiert |
| 0x01 | Spiegelheizung kodiert |
| 0xFF | Wert ungültig |

### TAB_AUSSENSPIEGEL_LIN_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | LIN-Außenspiegel vorhanden |
| 0x01 | LIN-Außenspiegel nicht vorhanden |
| 0xFF | Wert ungültig |

### TAB_AUSSENSPIEGEL_MEMORY_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Außenspiegel memory nicht kodiert |
| 0x01 | Außenspiegel memory kodiert |
| 0xFF | Wert ungültig |

### TAB_AUSSENSPIEGEL_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Ansteuerung |
| 0x01 | Links |
| 0x02 | Rechts |
| 0x03 | Oben |
| 0x04 | Unten |
| 0xFF | ungültiger Wert |

### TAB_AUSSENSPIEGEL_RICHTUNG_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | LEFT |
| 0x02 | RIGHT |
| 0x03 | UP |
| 0x04 | DOWN |

### TAB_AUSSTATTUNG_KODIERT

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kodiert |
| 0x01 | Kodiert |
| 0xFF | Wert ungültig |

### TAB_AUTHTYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | AUTHTYPE_PING |
| 0x01 | AUTHTYPE_KEYPOS_NO_AUTH |
| 0x02 | AUTHTYPE_CL_AUTH |
| 0x03 | AUTHTYPE_EWS_AUTH |
| 0x0F | AUTHTYPE_INVALID |

### TAB_BEL_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Parklicht links |
| 0x01 | Parklicht rechts |
| 0x02 | Taster OFF |
| 0x03 | Standlicht |
| 0x04 | Fahrlicht automatik |
| 0x05 | Fahrlicht manuel |
| 0xFF | Wert ungültig |

### TAB_BEMIKO_FES_LED_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | ALL_LEDS_BUT_FES |
| 0x01 | FES_SPORT |
| 0x02 | FES_COMFORT |
| 0x03 | FES_ECOPRO |
| 0x04 | FES_ADAPTIVE |

### TAB_BEMIKO_HW_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x01 | Aktiv-Haptik |
| 0x02 | Spielschutz |
| 0x03 | interner Fehler (ROM, RAM, NVM, WDG) |
| 0xFF | ungültig |

### TAB_BETRIEBSZEITZAEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Betriebszeitzaehler |
| 0x01 | BETRIEBSZEIT_STANDLICHT |
| 0x02 | BETRIEBSZEIT_PARKLICHT |
| 0x03 | BETRIEBSZEIT_LESELICHT |
| 0x04 | BETRIEBSZEIT_WELCOMELEUCHTEN |
| 0x05 | BETRIEBSZEIT_SITZHEIZUNG |
| 0x06 | BETRIEBSZEIT_MASSAGEFUNKTION |
| 0x07 | BETRIEBSZEIT_ARMLEHNENHEIZUNG |
| 0x08 | BETRIEBSZEIT_HECKSCHEIBENHEIZUNG |
| 0x09 | BETRIEBSZEIT_LENKRADHEIZUNG |
| 0x0A | BETRIEBSZEIT_AUSSENSPIEGELHEIZUNG |

### TAB_BREMSLICHT_SCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor nicht verbaut/ nicht vorhanden (Open Load) |
| 0x01 | Schalter nicht betätigt |
| 0x02 | Schalter betätigt |
| 0x03 | Kurzschluss |
| 0xFF | ungültig |

### TAB_BSW_SAFETY_MICRO

| WERT | TEXT |
| --- | --- |
| 0x00 | SW-Version |
| 0x01 | Watchdog |
| 0x02 | LimpMode |
| 0x03 | Klemme 15 |
| 0x04 | Eingang Geschwindigkeit |
| 0x05 | Eingang analog Starttaster 1 |
| 0x06 | Eingang analog Starttaster 2 |
| 0x07 | Eingang analog Bremslichtschalter |
| 0x08 | Zähler Reset Default |
| 0x09 | Zähler Reset PowerOff |
| 0xFE | Read Memory Kommando mit Adresse |

### TAB_CARCODE_WISCHERMOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | F01 |
| 0x01 | F02 |
| 0x02 | F07 |
| 0x03 | F10 |
| 0x04 | F11 |
| 0x05 | F12 |
| 0x06 | F13 |
| 0x07 | RR4 |
| 0x08 | F03 |
| 0x09 | F04 |
| 0x0A | F25 |
| 0x0B | I01 LL |
| 0x0C | I01 RL |
| 0x0D | I12 LL |
| 0x0E | I12 RL |
| 0x0F | F26 |
| 0x10 | G11, G12 |
| 0x11 | G30, G31 |
| 0x12 | G29 |
| 0x13 | G32 |
| 0x14 | G05 |
| 0x15 | G06 |
| 0x16 | G14 |
| 0x17 | G16 |
| 0x18 | RR11 |
| 0x19 | RR31 |
| 0xFF | ungültig |

### TAB_CARGO_ANTIRUTSCHMATTE_MODE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | ANTIRUTSCHMATTE_EINFAHREN |
| 0x01 | ANTIRUTSCHMATTE_AUSFAHREN |
| 0x02 | KUNDENFUNKTION_AUTOMATIK |

### TAB_CARGO_LEITUNGSZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzschluss |
| 0x01 | Unterbrechung |
| 0xFF | Wert ungültig |

### TAB_CARGO_SG_ANTIRUTSCHMATTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Antirutschmatte eingefahren |
| 0x01 | Antirutschmatte ausgefahren |
| 0x03 | Signal unbefüllt |
| 0xFF | ungültiger Wert |

### TAB_CARSHARING_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | CarSharing-Modus nicht gesetzt |
| 0x01 | CarSharing-Modus gesetzt |
| 0xFD | Funktionsschnittstelle ist nicht verfügbar |
| 0xFE | Funktionsfehler |
| 0xFF | Signal ungültig |

### TAB_CAR_ON_DYNO_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Not On Dyno |
| 0x01 | On Dyno |
| 0xFFFF | Wert ungültig |

### TAB_CASS_LF_DRIVER_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | LF_DRIVER_OK |
| 0x01 | OVERTEMPERATURE |
| 0x02 | BOOST_CONVERTER_PROTECTION_ACTIVE |
| 0x03 | BOOST_CONVERTER_MALFUNCTION |
| 0x04 | CLASS_D_SUPPLY_MALFUNCTION |
| 0x05 | TRANSPONDER_ACTIVE |
| 0x06 | DIAG_MODE_ACTIVE |
| 0x07 | BATTERY_UNDERVOLTAGE |
| 0x08 | BATTERY_OVERVOLTAGE |
| 0xFF | INVALID |

### TAB_CAS_ART_ABSCHALTUNG_KL30F

| WERT | TEXT |
| --- | --- |
| 1 | KL30F Reset |
| 2 | KL30F dauerhafte Abschaltung |
| 3 | Befehl erhalten KL30F auszuschalten oder einen Reset durchzuführen, aber KL30F ist schon ausgeschaltet |
| 4 | Durchführung eines Resets oder Ausschalten ist nicht möglich ist, weil die Bedingungen nicht zutreffen |
| 255 | Ungültig / Unplausibel / Unbekannt |

### TAB_CAS_CA_KOMM_TEST

| WERT | TEXT |
| --- | --- |
| 0 | Kommunikation nicht möglich |
| 1 | Kommunikation okay, inkl. Authentisierung |
| 2 | Antenne nicht vorhanden (Codierdaten) |
| 3 | Antenne nicht in Ordnung oder nicht gesteckt |
| 255 | ungültig/unbekannt |

### TAB_CAS_DIGITAL_EINGANG

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv / nicht betätigt |
| 1 | aktiv / betätigt |
| 2 | nicht verbaut / Status nicht verfügbar |
| 255 | ungültig / Fehler erkannt |

### TAB_CAS_FBD_AKTION

| WERT | TEXT |
| --- | --- |
| 0 | Keine Taste gedrückt |
| 1 | Taste 1 - Entriegeln |
| 2 | Taste 2 - Verriegeln |
| 3 | Taste 3 - Kofferraum |
| 4 | Taste 4 |
| 5 | Taste 1 - Entriegeln Langdruck |
| 6 | Taste 2 - Verriegeln Langdruck |
| 7 | Taste 3 - Kofferraum Langdruck |
| 8 | Taste 4 - Langdruck |
| 20 | CA-Entriegeln |
| 21 | CA-Verriegeln |
| 22 | CA-Kofferraum |
| 23 | CG-Authentisierung |
| 50 | RCP - Aktivieren |
| 51 | RCP - Deaktivieren |
| 52 | RCP - Vorwärts |
| 53 | RCP - Rückwärts |
| 54 | RCP - Aktiv - keine Aktion |
| 55 | RCP - Sicherheitstaste losgelassen |
| 100 | THS-Init |
| 101 | Standheizung An |
| 102 | Standheizung Aus |
| 103 | Fernstart An |
| 104 | Fernstart Aus |
| 200 | FFB-Init |
| 203 | FFB Links Taste Lautstärke Runterregeln |
| 204 | FFB Links Taste Lautstärke Hochregeln |
| 205 | FFB Links Taste Suchlauf abwärts |
| 206 | FFB Links Taste Suchlauf aufwärts |
| 207 | FFB Links Taste Option |
| 208 | FFB Links Taste Zurück |
| 209 | FFB Links Taste Menü |
| 210 | FFB Links Taste Bordmonitor System Pfeil oben |
| 211 | FFB Links Taste Bordmonitor System Pfeil rechts |
| 212 | FFB Links Taste Bordmonitor System Pfeil unten |
| 213 | FFB Links Taste Bordmonitor System Pfeil links |
| 214 | FFB Links Taste Drehrad nach oben (in Gegenuhrzeigerrichtung) |
| 215 | FFB Links Taste Drehrad nach unten (in Uhrzeigerrichtung) |
| 216 | FFB Links Taste Drucktaste in Drehrad |
| 223 | FFB Rechts Taste Lautstärke Runterregeln |
| 224 | FFB Rechts Taste Lautstärke Hochregeln |
| 225 | FFB Rechts Taste Suchlauf abwärts |
| 226 | FFB Rechts Taste Suchlauf aufwärts |
| 227 | FFB Rechts Taste Option |
| 228 | FFB Rechts Taste Zurück |
| 229 | FFB Rechts Taste Menü |
| 230 | FFB Rechts Taste Bordmonitor System Pfeil oben |
| 231 | FFB Rechts Taste Bordmonitor System Pfeil rechts |
| 232 | FFB Rechts Taste Bordmonitor System Pfeil unten |
| 233 | FFB Rechts Taste Bordmonitor System Pfeil links |
| 234 | FFB Rechts Taste Drehrad nach oben (in Gegenuhrzeigerrichtung) |
| 235 | FFB Rechts Taste Drehrad nach unten (in Uhrzeigerrichtung) |
| 236 | FFB Rechts Taste Drucktaste in Drehrad |
| 255 | ungültiger Wert |

### TAB_CAS_FBD_EMPFAENGER_INIT_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung erfolgreich |
| 0x01 | LIN-Nachrichtenkatalog oder SW-Version falsch |
| 0x03 | WUP Aktualisierung im FBD-Empfänger fehlgeschlagen |
| 0x04 | WUP Aktualisierung der Fond-Fernbedienung fehlgeschlagen |
| 0x05 | WUP Aktualisierung im FBD-Empfänger und der Fond-Fernbedienung fehlgeschlagen |
| 0xFF | ungültiger Wert |

### TAB_CAS_FBD_EMPFAENGER_TYP

| WERT | TEXT |
| --- | --- |
| 0x01 | Diversity |
| 0x02 | Stand Alone Empfänger 2 |
| 0x03 | Stand Alone Empfänger 3 |
| 0x04 | Stand Alone Empfänger 4 |
| 0xFF | unbekannt / nicht ermittelbar |

### TAB_CAS_HALL_SENSOR

| WERT | TEXT |
| --- | --- |
| 0 | Sensor nicht verbaut/ nicht vorhanden (Open Load) |
| 2 | Sensor nicht aktiv |
| 4 | Sensor aktiv |
| 6 | Kurzschluss |
| 255 | ungültig / unplausibel / unbekannt |

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

### TAB_CAS_KLEMMEN_TRIGGER

| WERT | TEXT |
| --- | --- |
| 0 | Start-Stop-Taster (SST) |
| 1 | Anforderung Fahren über Dienst (RCP, RS) |
| 2 | DME-KL50-Anforderung (RQ_MSA_ENG_STA_1/_2) |
| 3 | Obere Startfähigkeitsgrenze (OSFG) erreicht |
| 4 | ZV sichern |
| 5 | Fahrertuer/Fahrergurt auf (KL15-Abschaltung) |
| 6 | Timeout (KL30B-Abschaltung) |
| 7 | Anforderung ueber Diagnosejob (STEUERN_KLEMMEN, STEUERN_KL30F, STEUERN_ZUSTAND_FAHRZEUG) |
| 8 | KL50-Hardwarefehler erkannt (Relaiskleber, Stromueberlast, KS) |
| 9 | Deaktivierung Waschstrasse nach 15/30min Timeout (nicht relevant für BDC2015) |
| 10 | Anforderung PAD über Dienst (ATM) |
| 255 | Ungueltig/Unbekannt |

### TAB_CAS_MONTAGEMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Normalbetrieb - Alle Montagemodi deaktiviert |
| 1 | KL50-Sperre/Fahrbereitschafts-Sperre  aktiv |
| 2 | ELV_KL50-Montagemodus - Entfällt ab SP2015 |
| 3 | Präsentations-Modus |
| 0xFF | Wert ungültig |

### TAB_CAS_MONTAGEMODUS_ARG

| WERT | TEXT |
| --- | --- |
| 0 | NORMAL |
| 1 | NO_START |
| 3 | PRESENTATION |

### TAB_CA_ANTENNA_LOCATION

| WERT | TEXT |
| --- | --- |
| 0x01 | Innenraum vorne |
| 0x02 | Innenraum hinten |
| 0x03 | Aussenraum links |
| 0x04 | Aussenraum rechts |
| 0x05 | Kofferraum mittig |
| 0x06 | Stossfänger hinten |
| 0x07 | Kofferraum links |
| 0x08 | Kofferraum rechts |
| 0x09 | Hutablage |
| 0xFF | Nicht verbaut |
| 0xFFFF | Wert ungültig |

### TAB_CA_ANTENNEN_ARG

| WERT | TEXT | BESCHREIBUNG |
| --- | --- | --- |
| 0x01 | IRV | Antenne Innenraum vorn |
| 0x02 | IRH | Antenne Innenraum hinten |
| 0x03 | TL | Antenne Tür links |
| 0x04 | TR | Antenne Tür rechts |
| 0x05 | KRL | Antenne Kofferraum links |
| 0x06 | KRR | Antenne Kofferaum rechts |
| 0x07 | SF | Antenne Stoßfänger |
| 0x08 | HAL | Antenne Hutablage |
| 0x09 | IR | Antenne Innenraum IRV+IRH |

### TAB_CA_ANTENNEN_RES

| WERT | TEXT |
| --- | --- |
| 0x01 | IRV (Antenne Innenraum vorn) |
| 0x02 | IRH (Antenne Innenraum hinten) |
| 0x03 | TL (Antenne Tür links) |
| 0x04 | TR (Antenne Tür rechts) |
| 0x05 | KRL (Antenne Kofferraum links) |
| 0x06 | KRR (Antenne Kofferaum rechts) |
| 0x07 | SF (Antenne Stoßfänger) |
| 0x08 | HAL (Antenne Hutablage) |
| 0xFF | ungültiger Wert |

### TAB_CA_ANTENNEN_STATUS

| WERT | TEXT |
| --- | --- |
| 1 | Antenne in Ordnung |
| 2 | Kurzschluss Masse |
| 3 | Kurzschluss Batteriespannung |
| 4 | Leitungsunterbrechung |
| 5 | Interner Antennendefekt |
| 6 | Antenne nicht verbaut (Codierung) |
| 255 | ungültiger Wert |

### TAB_CA_ANTENNEN_TEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehler sind aufgetreten (einer oder mehrere) |
| 0x01 | Alle Antennen okay |
| 0xFF | ungültiger Wert |

### TAB_CA_CAR_CONFIG

| WERT | TEXT |
| --- | --- |
| 0x01 | CG-only |
| 0x02 | CA - one trunk antenna -  short side antennas |
| 0x22 | CA - one trunk antenna -  long side antennas |
| 0x04 | CA+RCP - one trunk antenna - short side antennas |
| 0x24 | CA+RCP - one trunk antenna -  long side antennas |
| 0x06 | CA-  two trunk antennas - short side antennas |
| 0x26 | CA - two trunk antennas -  long side antennas |
| 0x07 | CA+RCP - two trunk antennas - short side antennas |
| 0x27 | CA+RCP - two trunk antennas -  long side antennas |
| 0xFF | Ungültig/Unbekannt |

### TAB_CA_CKT_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv verrigelt |
| 0x02 | Aktiv entriegelt |
| 0x03 | Aktiv ver- und entrriegelt |
| 0xFE | Funktion nicht vorhanden (codierung) |
| 0xFF | Ungültiger Wert |

### TAB_CA_DIGITAL_EINGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht betätigt / Not aktiv |
| 0x01 | Betätigt / Pressed |
| 0x02 | Nicht verbaut / Nicht verfügbar |
| 0xFF | Wert ungültig |

### TAB_CA_DIGITAL_EINGANG_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | NOT_ACTIVE |
| 0x01 | ACTIVE |

### TAB_CA_HISTORIENSPEICHER_SPERRE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | UNLOCK |
| 0x01 | LOCK |
| 0x02 | DELETE_NEW_INITIALIZATION |

### TAB_CA_HW_VARIANT

| WERT | TEXT |
| --- | --- |
| 0x00 | CG2 |
| 0x01 | CA5 |
| 0x02 | CA56 |
| 0x03 | CA57 |
| 0x04 | CA567 |
| 0x07 | undefined |
| 0xFF | invalid |
| 0xFFFF | Wert ungültig |

### TAB_CA_KEY_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | UNDEFINED |
| 0x01 | NOTFOUND |
| 0x03 | OS_DRD_DRDR |
| 0x04 | OS_PSD_PSDR |
| 0x05 | OS_TRUNK_REAR |
| 0x06 | IS_TRUNK_REAR |
| 0x07 | IS_FRONT |
| 0x08 | IS_REAR |
| 0x09 | IS_TRUNK_FRONT |
| 0x0A | OS_TRUNK_FRONT |
| 0x23 | OS_DRD_DRDR_FAR |
| 0x24 | OS_PSD_PSDR_FAR |
| 0x25 | OS_TRUNK_REAR_FAR |
| 0x2A | OS_TRUNK_FRONT_FAR |
| 0xFF | INVALID |

### TAB_CA_SCHLUESSEL_POSITION

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
| 255 | Keine Kommunikation möglich oder kein weiterer Schlüssel |

### TAB_CA_SCHLUESSEL_POSITION_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | KEY_0 |
| 0x01 | KEY_1 |
| 0x02 | KEY_2 |
| 0x03 | KEY_3 |
| 0x04 | KEY_4 |
| 0x05 | KEY_5 |
| 0x06 | KEY_6 |
| 0x07 | KEY_7 |
| 0x08 | KEY_8 |
| 0x09 | KEY_9 |
| 0x0A | KEY_10 |
| 0x0B | KEY_11 |
| 0x0C | KEY_12 |
| 0x0D | KEY_13 |
| 0x0E | KEY_14 |
| 0x0F | KEY_15 |
| 0x10 | KEY_16 |
| 0x11 | KEY_17 |
| 0x12 | KEY_18 |
| 0x13 | KEY_19 |
| 0xFF | NO_COMMUNICATION_POSSIBLE |

### TAB_CA_SCHWINGKREIS

| WERT | TEXT |
| --- | --- |
| 0x01 | Vorwiderstand ein |
| 0x02 | Vorwiderstand aus |
| 0x03 | Antenne nicht verbaut |
| 0xFF | Wert ungültig |

### TAB_CA_TAGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Status / Keine Betätigung |
| 0x01 | CA-Taster oder TAGE-Zugsensor (Hall) betätigt |
| 0x02 | TAGE-Sichern Sensor betätigt (VR-Kap-Sensor) |
| 0x03 | TAGE-Entriegeln Sensor betätigt (ER-Kap-Sensor) |
| 0x04 | CA-Taster oder TAGE nicht verbaut |
| 0xFF | Wert ungültig |

### TAB_CA_TAGE_ER_LEITUNG

| WERT | TEXT |
| --- | --- |
| 0 | Weder CA-Taster noch TAGE-ER verbaut  |
| 1 | CA-Taster oder TAGE-ER betätigt  |
| 2 | CA-Taster oder TAGE-ER nicht betätigt |
| 3 | CA-Taster oder TAGE-ER Kurzschluss |
| 255 | CA-Taster oder TAGE-ER ausserhalb Wertebereich |

### TAB_CA_TAGE_SPERRSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Gesperrt |
| 0x01 | Freigegeben |
| 0xFF | Wert ungültig |

### TAB_CA_TAGE_SPERRSTATUS_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | BLOCK |
| 0x01 | UNBLOCK |

### TAB_CA_TASTER_DIGITAL_EINGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht aktiv / nicht betätigt |
| 0x01 | aktiv / betätigt |
| 0x02 | nicht verbaut / Status nicht verfügbar |
| 0xFF | ungültig / Fehler erkannt |

### TAB_CFRESULTTYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | OK |
| 0x02 | NOK  (relevant for response check) |
| 0x03 | no authentication started (relevant for response check) |
| 0x04 | wrong authentication mode (relevant for response check) |
| 0x10 | communication error |
| 0x11 | no data |
| 0x12 | timeout |
| 0x30 | busy |
| 0x31 | not ready |
| 0x32 | no random available (relevant for challenge / session key) |

### TAB_CHECKALLIDG

| WERT | TEXT |
| --- | --- |
| 0x00 | AUTH_SINGLE_IDG |
| 0x0F | AUTH_ALL_IDG |

### TAB_CKT_ACTION

| WERT | TEXT |
| --- | --- |
| 0x01 | CKT_ER |
| 0x02 | CKT_VR |
| 0x03 | CKT_ZS |
| 0x04 | CKT_LICHTANFORDERUNG |
| 0x05 | CKT_AKTIVIERUNG |
| 0x06 | CKT_DEAKTIVIERUNG |
| 0xFF | Wert ungültig |

### TAB_CKT_DEAKTIVIERUNGSGRUND

| WERT | TEXT |
| --- | --- |
| 0x01 | OSFG |
| 0x02 | Tür auf |
| 0x03 | IDG-Taste betätigt |
| 0x04 | Standzeit überschritten |
| 0x05 | Motorlauf |
| 0x06 | CLT/CLW betätigt |
| 0x07 | Induktiv Laden |
| 0x08 | FeTraFla |
| 0xFF | Wert ungültig |

### TAB_CKT_DIAGNOSE_SPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | CKT nicht gesperrt |
| 0x01 | CKT per Diagnose gesperrt |
| 0xFF | Wert ungültig |

### TAB_CKT_DIAGNOSE_SPERRE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | CKT_ENABLE |
| 0x01 | CKT_DISABLE |

### TAB_CKT_KEY_POS

| WERT | TEXT |
| --- | --- |
| 0x01 | Driver Side: Light Zone |
| 0x02 | Driver Side: Light Zone, Pre-Auth Zone, Unlock Zone |
| 0x03 | Driver Side: Pre-Auth Zone, Unlock Zone |
| 0x04 | Driver Side: Unlock Zone |
| 0x05 | Driver Side: Lock Zone (=No Communication) |
| 0x06 | Driver Side: Light Zone, Lock Zone |
| 0x11 | Passenger Side: Light Zone |
| 0x12 | Passenger Side: Light Zone, Pre-Auth Zone, Unlock Zone |
| 0x13 | Passenger Side: Pre-Auth Zone, Unlock Zone |
| 0x14 | Passenger Side: Unlock Zone |
| 0x15 | Passenger Side: Lock Zone (=No Communication) |
| 0x16 | Passenger Side: Light Zone, Lock Zone |
| 0x20 | Interior Zone (Passenger and Trunk compartment) |
| 0xFF | Wert ungültig |

### TAB_CURRENT_STATE_OF_OP_STM

| WERT | TEXT |
| --- | --- |
| 0x00 | undefined |
| 0x01 | OutputPermanentlyDisabled |
| 0x02 | MeasurementPending |
| 0x03 | Healthy |
| 0x04 | ShortCircuit |
| 0x05 | Restarting |
| 0x06 | NoRestartBeforCl15 |
| 0x07 | OpenLoadDebouncing |
| 0x08 | LocalHealingOpenLoad |
| 0x09 | OpenLoad |

### TAB_DEV_FH_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Auswahl |
| 0x11 | Fenster Fahrer |
| 0x12 | Fenster Beifahrer |
| 0x13 | Fenster Fahrer hinten |
| 0x14 | Fenster Beifahrer hinten |
| 0x15 | Heckscheibe |
| 0x21 | Fenster Fahrer und Beifahrer |
| 0x22 | Fenster Fahrer hinten und Beifahrer hinten |
| 0x40 | Fenster Fahrer, Beifahrer, Fahrer hinten und Beifahrer hinten |
| 0x50 | Fenster Fahrer, Beifahrer, Fahrer hinten, Beifahrer hinten und Heckscheibe |
| 0xFF | ungültiger Wert |

### TAB_DEV_FH_SHD_ESH_MOTORSTOPREASON

| WERT | TEXT | BESCHREIBUNG |
| --- | --- | --- |
| 0x00 | NOT_STOPPED | Motor laeuft |
| 0x01 | POSITION_REACHED | Position erreicht |
| 0x02 | STOP_MOVE | Bewegung abgebrochen durch Bedienkonzept |
| 0x03 | NORM | Normierung gefunden |
| 0x04 | RENORM | Nachnormierung durchgeführt |
| 0x05 | PINCHING | Einklemmen erkannt |
| 0x06 | REV_POS_REACHED | Reversierposition erreicht |
| 0x07 | BLOCKED | Blockieren erkannt |
| 0x08 | NOT_MOVED | Motor steht |
| 0x09 | SAFETY_TIMER | Sicherheitszeitueberlauf |
| 0x0A | OPPOSITE_DIRECTION | Drehrichtung passt nicht zur Hallauswertung |
| 0x0B | INVALID_TARGET_POS_LOW | falsche Zielposition (zu niedrig) |
| 0x0C | INVALID_TARGET_POS_HIGH | falsche Zielposition (zu hoch) |
| 0x0D | STOP_MOVE_HIGH_TEMP | Motor zu warm |
| 0x0E | DRIVER_ERROR | Fehler in Motoransteuerungs-HW |
| 0x0F | MOTOR_SHORT | Motorkurzschluss |
| 0x10 | RESET | Reset während Motorbewegung |
| 0x11 | PULSE_LOST | HALL Puls verloren |
| 0x12 | MOTOR_VOLTAGE_RANGE | Motorspannung nicht im Betriebsbereich |
| 0x13 | HALL_ERROR | Fehler in Hallsensor-HW |
| 0x14 | ERR_MOTOR_OFF_CPU_OVERLOAD | keine OSEK Rechenzeit für Einklemmschutz-Algorithmus zugeteilt |
| 0x20 | AUTO_COND_LOST (Conti) | Wegfall Automatikfreigabe |
| 0x21 | CODING_FAIL (Conti) | Fehler Codierdaten Checksumme |
| 0x22 | WAITING_FOR_EE (Conti) | Warten auf EEPROM |
| 0x23 | EE_TIMEOUT (Conti) | Keine Antwort vom NVRAM Manager |
| 0x24 | NOT_POSSIBLE_TO_WRITE_EE (Conti) | Position kann nicht in EEPROM geschrieben werden |
| 0x25 | HALL_DISABLED (Conti) | Hall ausgeschaltet |
| 0x26 | CODING_SESSION (Conti) | Coding session aktiv |
| 0x27 | PANIC_NOT_VALID (Conti) | Panic Close nicht erlaubt |
| 0x28 | DIAGNOSTIC_SESSION_ACTIVE (Conti) | Für Brose und Conti gleich?? |
| 0x29 | SYSTEM_SIF_ERROR (Conti) | Sif Error vom Sif Modul gemeldet |
| 0x2A | SYSTEM_SHUTDOWN (Conti) | Basis SW initiert System Shutdown |
| 0x2B | HALL_QUEUE_ERROR (Conti) | Hall Queue Error erkannt |
| 0x40 | soft stop on bottom (Magna) | - |
| 0x41 | soft stop on top (Magna) | - |
| 0x42 | short drop position (Magna) | - |
| 0x43 | Hall Sensor Period FUSI Error (Magna) | - |
| 0x44 | Relay state FUSI Error (Magna) | - |
| 0x45 | SIF STATE FUSI Error (Magna) | - |
| 0x46 | Vehicle Speed FUSI Error (Magna) | - |
| 0x47 | Vehicle Speed Timeout (Magna) | - |
| 0x48 | stopped for safety in fully closed state (Magna) | - |
| 0x49 | stopped for safety in fully open state (Magna) | - |
| 0x4A | stopped for safety in short drop pos state (Magna) | - |
| 0x4B | stopped in window failure state (Magna) | - |
| 0x4C | stopped before sleep (Magna) | - |
| 0x4D | stopped while opening found not in opening (Magna) | - |
| 0x4E | Motor unit (Magna) | - |
| 0x4F | signature Interference Occurred (Magna) | - |
| 0x50 | position out of validity tolerances (Magna) | - |
| 0x51 | Motor voltage FuSi error (Magna) | - |
| 0x52 | stopped for safety in mid open state (Magna) | - |
| 0x53 | stopped in closing state because moving direction down (Magna) | - |
| 0x54 | stopped for stall up while closing (Magna) | - |
| 0x55 | stopped for stall down while opening (Magna) | - |
| 0x56 | stopped for diagnostic denorm (Magna) | - |
| 0x57 | stopped for hall puls counters different (Magna) | - |
| 0x58 | Stopped for hall A timeout (Magna) | - |
| 0x59 | Stopped for hall B timeout (Magna) | - |
| 0x5A | Stopped for hall A & B timeout (Magna) | - |
| 0x5B | Redundant Stop for Error in writingNvRam at end of movement (Magna) | - |
| 0x5C | Redundant motor stop for NvRam Block A Error (Magna) | - |
| 0x5D | Redundant stop for coding changed (Magna) | - |
| 0x5E | coding stated (Magna) | - |
| 0x5F | Opening/closing relay: output voltage on the wrong relay. Motor voltage opposite to the command from controller (Magna) | - |
| 0x60 | AUTO_COND_LOST (Brose) | Wegfall Automatikfreigabe |
| 0x61 | CODING_FAIL (Brose) | Fehler Codierdaten Checksumme |
| 0x62 | WAITING_FOR_EE (Brose) | Warten auf EEPROM |
| 0x63 | EE_TIMEOUT (Brose) | Keine Antwort vom NVRAM Manager |
| 0x64 | NOT_POSSIBLE_TO_WRITE_EE (Brose) | Position kann nicht in EEPROM geschrieben werden |
| 0x65 | HALL_DISABLED (Brose) | Hall ausgeschaltet |
| 0x66 | CODING_SESSION (Brose) | Coding session aktiv |
| 0x67 | PANIC_NOT_VALID (Brose) | Panic Close nicht erlaubt |
| 0x68 | DIAGNOSTIC_SESSION_ACTIVE (Brose) | Für Brose und Conti gleich?? |
| 0xFF | Ungültiger Wert | - |

### TAB_DEV_FH_SHD_ESH_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angenommen, aber noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0x07 | ungültiger Wert |

### TAB_DEV_FH_THERMOMONITOR_SETZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Thermoschwelle aktiv (Übersteuert) |
| 0x01 | Thermo 90 aktiv (Übersteuert) |
| 0x02 | Thermo 100 aktiv (Übersteuert) |
| 0x03 | Normalbetrieb Schwellen werden entsprechend dem Ergebnis der Berechnung gesetzt |

### TAB_DIGITAL_DIAGNOSE_VALUE

| WERT | TEXT |
| --- | --- |
| 0x00 | ShortcutOvertemperature |
| 0x01 | PreShortcutOvertemperature |
| 0x02 | LampOk |
| 0x03 | OpenLoad |
| 0x04 | DeviceError |

### TAB_DIGITAL_EINGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv / Nicht Betätigt |
| 0x01 | Aktiv / Betätigt |
| 0xFF | Wert ungültig |

### TAB_DRIVER_DIAG_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Ausgang OK |
| 0x01 | Kurzschluss nach Masse (Selbstschutz HW-Treiber) |
| 0x02 | Überlast (HW-Schutz durch SW-Schwelle) |
| 0x03 | Leitungsunterbrechung |
| 0x04 | Überlast wait (HW-Schutz durch SW-Schwelle) |
| 0x05 | Kurzschluss nach Masse wait (Selbstschutz HW-Treiber) |
| 0x06 | Ausgang dauerhaft aus |
| 0x07 | Keine Diagnose |
| 0x08 | Treiberfehler |
| 0x09 | Treibernotlauf |
| 0x0A | Kurzschluss nach Batterie |
| 0x0B | Überschreitung Retries bei Kurzschluss nach Masse |
| 0x0C | Überschreitung Retries bei Überlast |
| 0xFF | Wert ungültig |

### TAB_ECC_FAILURE_TYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | ECC error in Code flash |
| 0x02 | ECC error in RAM |
| 0x04 | Unidentified ECC error |
| 0x10 | Load Instruction ECC error |
| 0x20 | Store Instruction ECC error |
| 0x40 | Fetch Instruction ECC error |
| 0x80 | Unidentified instruction ECC error |

### TAB_ELSV_ACHSE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | STOP |
| 0x01 | LENGHT |
| 0x02 | HEIGHT |

### TAB_ELSV_HALL

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Problem |
| 0x01 | Unterbrechung |
| 0x02 | Kurzschluss |
| 0xFF | ungültiger Wert |

### TAB_ELSV_MOTOR

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor IO und nicht aktiv |
| 0x01 | Motor IO und aktiv |
| 0x02 | OpenLoad |
| 0x03 | Kurzschluss |
| 0x04 | Überstrom |
| 0xFF | ungültiger Wert |

### TAB_ELSV_NORMIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Initalisierung |
| 0x01 | ELSV normiert |
| 0x02 | ELSV teilnormiert Länge |
| 0x03 | ELSV teilnormiert Neigung |
| 0x04 | ELSV denormiert |
| 0x0F | Signal ungültig |

### TAB_ELSV_NORMIERVORGANG

| WERT | TEXT |
| --- | --- |
| 0x00 | Normierung nicht aktiv |
| 0x01 | Normierung aktiv |
| 0x02 | Normierung abgebrochen durch Befehl 'manuelles Verfahren der Lenksäule' |
| 0x03 | Normierung abgebrochen durch 'STEUERN_ELSV_NORMIERUNG - Stopp' |
| 0x04 | Normierung konnte nicht gestartet werden |
| 0x05 | Normierung erfolgreich beendet |
| 0x06 | Normierung unplausibel |
| 0xFF | Signal ungültig |

### TAB_ELSV_RESET_COUNTER_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | AXIAL_PULL _IN |
| 0x01 | AXIAL_PULL_OUT |
| 0x02 | VERTICAL_TOP |
| 0x03 | VERTICAL_BOTTOM |
| 0x04 | AXIAL_BOTH |
| 0x05 | VERTICAL_BOTH |
| 0x06 | ALL_BLOCKS |
| 0x07 | STASTISTIC_COUNTERS |
| 0x08 | BLOCKS_AND_STATISTIC |

### TAB_ELSV_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht betätigt |
| 0x01 | Oben |
| 0x02 | Unten |
| 0x03 | Hinten |
| 0x04 | Vorne |
| 0xFD | Nicht kodiert |
| 0xFF | Ungültiger Wert |

### TAB_ERKANNT_NICHT_ERKANNT

| WERT | TEXT |
| --- | --- |
| 0x0 | nicht erkannt / aufgetreten |
| 0x1 | erkannt / aufgetreten |

### TAB_ERROR_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Lamp_Ok |
| 0x01 | Lamp_OpenLoad |
| 0x02 | Lamp_ShortToGndSoft |
| 0x03 | Lamp_ShortToGndHard |
| 0x04 | Lamp_ShortToPlus |
| 0x05 | Lamp_Invalid |
| 0x06 | Lamp_Init |
| 0x07 | Lamp_DebounceOpenLoad |
| 0x08 | Lamp_DebounceShortToGndSoft |
| 0x09 | Lamp_DebounceShortToGndHard |
| 0x010 | Lamp_ShortToGndSoftReenable |
| 0x011 | Lamp_ShortToGndHardReenable |

### TAB_FAHRLICHTSITUATION_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_PARAMETER |
| 0x01 | DIRECTIVE_LIGHT_1 |
| 0x02 | DIRECTIVE_LIGHT_2 |
| 0x03 | LIGHT_IN_TOWN |
| 0x04 | SEMI_AUTONOMIOUS_PARK |
| 0x05 | COUNTRYROAD_LIGHT |
| 0x06 | HIGHWAY_LIGHT_E3 |
| 0x07 | HIGHWAY_LIGHT_E2 |
| 0x08 | HIGHWAY_LIGHT_E1 |
| 0x09 | HIGHWAY_LIGHT_E |
| 0x0A | DISPERSION_LIGHT_H_MINUS_2 |
| 0x0B | DISPERSION_LIGHT_H_MINUS_0 |
| 0x0C | DISPERSION_LIGHT_H_PLUS_2 |
| 0x0D | DISPERSION_LIGHT_H_PLUS_4 |
| 0x0E | ANTI_GLARE_BEAM |
| 0x0F | FULL_BEAM |
| 0x10 | MANUEL_HIGH_BEAM |
| 0x11 | HEADLIGHT_FLASHER |
| 0x12 | GLARE_FREE_BEAM_DIM_1 |
| 0x13 | GLARE_FREE_BEAM_DIM_2 |
| 0x14 | AUTOMATIC_FULL_BEAM_DIM_1 |
| 0x15 | AUTOMATIC_FULL_BEAM_DIM_2 |
| 0x16 | GLARE_FREE_BEAM_5 |
| 0x17 | GLARE_FREE_BEAM_6 |
| 0x18 | GLARE_FREE_BEAM_7 |
| 0x19 | GLARE_FREE_BEAM_8 |
| 0x1A | GLARE_FREE_BEAM_9 |
| 0x1B | GLARE_FREE_BEAM_10 |
| 0x1C | GLARE_FREE_BEAM_11 |
| 0x1D | LOW_BEAM_DLS_ACTIVE |
| 0x1E | PARTIAL_BEAM_DLS_ACTIVE |

### TAB_FBD4_BATTERIEZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Sehr schlecht - leer |
| 0x01 | Niedrig |
| 0x02 | Mittel |
| 0x03 | Sehr gut |
| 0xFF | ungültiger Wert |

### TAB_FBD_POWERMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | FBD im normalen Sleep |
| 0x01 | FBD wach - aktiv |
| 0x06 | FBD wach - Anlernmodus- alles durchlassen |
| 0x07 | FBD im Transportmode |
| 0xFF | ungültiger Wert |

### TAB_FBD_POWERMODE_ARG

| WERT | TEXT |
| --- | --- |
| 1 | NORMALMODUS |
| 6 | INITMODUS |

### TAB_FEHLERART_HW

| WERT | TEXT |
| --- | --- |
| 1 | Kurzschluss Masse (SIG_AN_SHORT_GND) |
| 2 | Kurzschluss Ubat (SIG_AN_SHORT_VBAT) |
| 3 | Unplausibler Zustand (SIG_AN_INVALID) |
| 4 | Leitungsunterbrechung (SIG_AN_OPEN) |
| 5 | Nicht verbaut (SIG_AN_NOTINSTALLED) |
| 6 | Unterspannung (SIG_AN_UNDERVOLTAGE) |
| 7 | Überspannung (SIG_AN_OVERVOLTAGE) |
| 8 | Fehler (SIG_AN_FAILURE) |
| 9 | Dauerbetätigung |
| 10 | Relaiskleber |
| 255 | Ungültig |

### TAB_FEHLERART_ILE

| WERT | TEXT |
| --- | --- |
| 0x01 | Interner Fehler |
| 0x02 | Leselicht links Leuchtmittel defekt |
| 0x03 | Leselicht rechts Leuchtmittel defekt |
| 0x04 | Innenlicht Leuchtmittel defekt |
| 0x05 | WelcomeLight Leuchtmittel defekt |
| 0x06 | Ambientes Licht Leuchtmittel defekt |
| 0xFF | Ungültig |

### TAB_FENSTERHEBER_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Öffnen |
| 0x02 | Schliessen |
| 0x03 | Maut öffnen |
| 0x04 | Maut schliessen |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_FES_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Sport Dynamic |
| 0x02 | Sport Expert |
| 0x03 | Sport Individual |
| 0x04 | Comfort |
| 0x05 | Comfort Plus |
| 0x06 | Comfort Individual |
| 0x07 | ECO PRO Efficient |
| 0x08 | ECO PRO Plus |
| 0x09 | ECO PRO Individual |
| 0x0A | Adaptive |
| 0x0B | Offroad Ice |
| 0x0C | Offroad Smooth |
| 0x0D | Offroad Grip |
| 0x0E | Offroad Rough |
| 0x0F | PHEV Sport Standard |
| 0x10 | PHEV Sport Individual |
| 0x11 | PHEV Hybrid Standard |
| 0x12 | PHEV Hybrid ECO |
| 0x13 | PHEV Hybrid Comfort |
| 0x14 | PHEV Electric Standard |
| 0x15 | PHEV Electric Individual |
| 0x16 | PHEV Battery Control |
| 0x3F | Signal ungültig |

### TAB_FES_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x01 | Sport Dynamic |
| 0x02 | Sport Expert |
| 0x03 | Sport Individual |
| 0x04 | Comfort |
| 0x05 | Comfort Plus |
| 0x06 | Comfort Individual |
| 0x07 | ECO PRO Efficient |
| 0x08 | ECO PRO Plus |
| 0x09 | ECO PRO Individual |
| 0x0A | Adaptive |
| 0x0B | Offroad Ice |
| 0x0C | Offroad Smooth |
| 0x0D | Offroad Grip |
| 0x0E | Offroad Rough |
| 0x0F | PHEV Sport Standard |
| 0x10 | PHEV Sport Individual |
| 0x11 | PHEV Hybrid Standard |
| 0x12 | PHEV Hybrid ECO |
| 0x13 | PHEV Hybrid Comfort |
| 0x14 | PHEV Electric Standard |
| 0x15 | PHEV Electric Individual |
| 0x16 | PHEV Battery Control |
| 0x3F | Wert ungültig |

### TAB_FES_MODUS_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | INITIALIZATION |
| 0x01 | SPORT_DYNAMIC |
| 0x02 | SPORT_EXPERT |
| 0x03 | SPORT_INDIVIDUAL |
| 0x04 | COMFORT |
| 0x05 | COMFORT_PLUS |
| 0x06 | COMFORT_INDIVIDUAL |
| 0x07 | ECO_PRO_EFFICIENT |
| 0x08 | ECO_PRO_PLUS |
| 0x09 | ECO_PRO_INDIVIDUAL |
| 0x0A | ADAPTIVE |
| 0x0B | OFFROAD_ICE |
| 0x0C | OFFROAD_SMOOTH |
| 0x0D | OFFROAD_GRIP |
| 0x0E | OFFROAD_ROUGH |
| 0x0F | PHEV_SPORT_STANDARD |
| 0x10 | PHEV_SPORT_INDIVIDUAL |
| 0x11 | PHEV_HYBRID_STANDARD |
| 0x12 | PHEV_HYBRID_ECO |
| 0x13 | PHEV_HYBRID_COMFORT |
| 0x14 | PHEV_ELECTRIC_STANDARD |
| 0x15 | PHEV_ELECTRIC_INDIVIDUAL |
| 0x16 | PHEV_BATTERY_CONTROL |

### TAB_FETRAFLA_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | EM_DEFAULT |
| 0x01 | EM_CCM_0x0430_ACT |
| 0x02 | EM_ECUMA_REDUCED_FCT_ACT |
| 0x10 | EM_TC_FLLUPTSHORT_R_ACT |
| 0x11 | EM_TC_FLLUPTSHORT_30B_ACT |
| 0x12 | EM_TC_FLLUPTSHORT_30F_ACT |
| 0x13 | EM_TC_LOGIC_15OFF_INH |
| 0x14 | EM_TC_LOGIC_ENGINESTOP30B_ACT |
| 0x15 | EM_TC_LOCIC_15ON_NOKEY_ACT |
| 0x16 | EM_TC_LOGIC_15OFF_DIAG_ACT |
| 0x17 | EM_PWF_TIMEOUT_WOHNEN_SHORT_ACT |
| 0x18 | EM_PWF_NO_WOHNEN_ACT |
| 0x19 | EM_PWF_NO_STANDFKT_ACT |
| 0x20 | EM_CA_DOORHANDLE_INH |
| 0x21 | EM_CA_COMFORT_KEY_TRACKING_INH |
| 0x30 | EM_CL_OPERATION_INH |
| 0x31 | EM_CL_OPEN_LID_IDG_INH |
| 0x40 | EM_RC_RECEIVER_INH |
| 0x50 | EM_LCE_GOODBYELIGHT_INH |
| 0x51 | EM_LCE_DAYRUNLIGHT_60KM_INH |
| 0x52 | EM_LCE_OVT_INH |
| 0x53 | EM_LCE_MANOUEVERINGLIGHT_INH |
| 0x54 | EM_LCE_POSITIONLIGHT_SWA2_INH |
| 0x55 | EM_LCE_PARKINGLIGHT_INH |
| 0x56 | EM_LCE_FOGLIGHT_INH |
| 0x57 | EM_LCE_FOLLOWMEHOME_INH |
| 0x58 | EM_LCE_WELCOME_INH |
| 0x59 | EM_LCE_HIGHBEAMASSIST_INH |
| 0x60 | EM_LCI_ALLOUTPUTS_INH |
| 0x70 | EM_LA_LIGHTASSIST_INH |
| 0x71 | EM_LA_ADAPTIVEHEADLIGHT_ACT |
| 0x80 | EM_PW_REAR_INH |
| 0x81 | EM_PW_FRONT_INH |
| 0x90 | EM_WW_WIPERFRONT_20KMH_INH |
| 0x91 | EM_WW_ASSEMBLYPOSITION_ACT |
| 0x92 | EM_WW_EMERGENCY_INH |
| 0x93 | EM_WW_WIPERREAR_INH |
| 0x94 | EM_WW_PUMPFRONT_INH |
| 0x95 | EM_WW_PUMPREAR_INH |
| 0x96 | EM_WW_PUMPHEADLIGHT_INH |
| 0xA0 | EM_AC_PUMPVALVESCLUTCH_INH |
| 0xB0 | EM_EXMI_MIRRORJET_INH |
| 0xB1 | EM_HC_DEFROSTER_INH |
| 0xB2 | EM_HC_SEATSTEERING_INH |
| 0xC0 | EM_PF_SUNBLIND_INH |

### TAB_FE_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | FE_MODE_INACTIVE |
| 0x01 | FE_MODE_ACTIVE |

### TAB_FH_ANZAHL_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Fensterheber vorhanden/kodiert |
| 0x01 | Fensterheber für FA und BF vorhanden/kodiert |
| 0x02 | Fensterheber für FA, BF und FAH, BFH vorhanden/kodiert |
| 0x03 | Fensterheber für FAH und BFH vorhanden/kodiert |

### TAB_FH_AUSWAHL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Auswahl |
| 0x11 | Fenster Fahrer |
| 0x12 | Fenster Beifahrer |
| 0x13 | Fenster Fahrer hinten |
| 0x14 | Fenster Beifahrer hinten |
| 0x21 | Fenster Fahrer und Beifahrer |
| 0x22 | Fenster Fahrer hinten und Beifahrer hinten |
| 0x40 | Alle |
| 0xFF | ungültiger Wert |

### TAB_FH_AUSWAHL_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_SELECTION |
| 0x11 | WINDOW_DRIVER |
| 0x12 | WINDOW_PASSENGER |
| 0x13 | WINDOW_DRIVER_REAR |
| 0x14 | WINDOW_PASSENGER_REAR |
| 0x21 | WINDOWS_DRIVER_AND_PASSENGER |
| 0x22 | WINDOWS_DRIVER_REAR_AND_PASSENGER_REAR |
| 0x40 | ALL_WINDOWS |

### TAB_FH_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Fenster steht |
| 0x01 | Fensterheber fährt auf |
| 0x02 | Reversieren Mautlauf |
| 0x03 | Reversieren Emergency-Mode |
| 0x04 | Fenster fährt zu |
| 0x05 | Fenster fährt zu Emergency-Mode |
| 0x06 | Fenster fährt zu Panic-Mode |
| 0x07 | Einlernvorgang aktiv |
| 0x08 | Stellt aus |
| 0xFF | ungültiger Wert |

### TAB_FH_DENORMIER_URSACHE

| WERT | TEXT |
| --- | --- |
| 0x00 | KEIN FEHLEREINTRAG / NORMIERT |
| 0x01 | EEPROMFEHLER BEIM STARTUP |
| 0x02 | INTERFACE WURDE BEIM STARTUP NICHT BEDIENT |
| 0x03 | ÜBERFAHREN DES OBEREN BLOCKS |
| 0x04 | ÜBERFAHREN DES UNTEREN BLOCKS |
| 0x05 | NICHT PLAUSIBLER ZUSTAND |
| 0x06 | FALSCHE POSITION ERKANNT |
| 0x07 | RELAISKLEBER_1 |
| 0x08 | RELAISKLEBER_2 |
| 0x09 | HALLFEHLER |
| 0x0A | EXPLIZITES DENORMIEREN (ASCET) |
| 0x0B | TASKS WURDEN NICHT RECHTZEITIG AUFGERUFEN |
| 0x0C | HALLUNTERABTASTUNG |
| 0x0D | START INITIALISIERUNGSLAUF |
| 0x0E | INITIALSIERUNGSLAUF ABGEBROCHEN |
| 0x0F | KEINE POSITION NACH RESET |
| 0x20 | SIF_ERROR (Conti) |
| 0x21 | SIGNATURE_ERROR (Conti) |
| 0x22 | HALL_SWITCHED_OFF (Conti) |
| 0x23 | HALL_QUEUE_ERROR (Conti) |
| 0x24 | NEW_SW_CODING_APPLIED (Conti) |
| 0x40 | No init data after reset (Magna) |
| 0x41 | Voltage on motor and relays not activa (Magna) |
| 0x42 | Voltage on motor and relays not activa (Magna) |
| 0x43 | no pulses from Hall A but pulses from Hall element B (Magna) |
| 0x44 | no pulses from Hall B but pulses from Hall element A (Magna) |
| 0x45 | Motor actuated; no pulses from Hall elements A+B (Magna) |
| 0x46 | Hall pulses not plausible (Magna) |
| 0x47 | Wrong motor direction (Magna) |
| 0x48 | Wrong motor unit (Magna) |
| 0x49 | Timeout Motor actuat (Magna) |
| 0x4A | Invalid MRC Logical failure: the MRC is invalid (Magna) |
| 0x4B | CPU Overload (Magna) |
| 0x4C | start of manual init (Magna) |
| 0x4D | Halls Not Ready Voltage Shut Down (Magna) |
| 0x4E | Halls Not Ready Open Load (Magna) |
| 0x4F | Halls Not Ready Short to ground (Magna) |
| 0x50 | Halls Not Ready Short to ubatt (Magna) |
| 0x51 | Different Software version stored in NvRam (Magna) |
| 0x52 | Different vendor code stored in NvRam (Magna) |
| 0x53 | Signature Interference Occurred (Magna) |
| 0x54 | No valid position CRC after reset (Magna) |
| 0x55 | Hall counters A and B value different (Magna) |
| 0x56 | Hall pulses and no motor actuation (Magna) |
| 0x57 | FUSI SIF state error (Magna) |
| 0x58 | Profile and norming erased by RTERunnable_SwcPwDriverMagna01_diag_diagJobWriteFhKennlinieLoeschen (Magna) |
| 0x59 | error saving NVRam after motor stop (Magna) |
| 0x5A | coding changed (Magna) |
| 0x5B | error in NvRam Block A (Magna) |
| 0x5C | error Opening/closing relay: output voltage on the wrong relay. Motor voltage opposite to the command from controller (Magna) |
| 0x60 | SIF_ERROR (Brose) |
| 0x61 | SIGNATURE_ERROR (Brose) |
| 0x62 | HALL_SWITCHED_OFF (Brose) |
| 0x63 | DENORM_QUEUE_OVERFLOW (Brose) |
| 0x64 | DENORM_SIF_PFM_NOK (Brose) |
| 0x65 | DENORM_SIF_TM_NOK (Brose) |
| 0x66 | DENORM_SIF_CRM_NOK (Brose) |
| 0x67 | DENORM_SIF_VMM_NOK (Brose) |
| 0x68 | DENORM_SIF_NVMM_NOK (Brose) |
| 0x69 | DENORM_RTE_LOST_DATA (Brose) |
| 0x6A | DENORM_DIAG (Brose) |
| 0x80 | NOT_YET_DEFINED (Küster) |
| 0x81 | CODING (Küster) |
| 0x82 | LOWERSTALL_TO_EARLY (Küster) |
| 0x83 | ERROR_MOTOR_RUNTIME (Küster) |
| 0x84 | ERROR PROGRAM (Küster) |
| 0x85 | ERROR MEMORY (Küster) |
| 0x89 | FEHLER_TSG_SEITE (Küster) |
| 0x8C | ErrorInUpperNormalization  (Küster) |
| 0x8E | ERROR_HALLSPEED_UP (Küster) |
| 0x8F | ERROR_HALLSPEED_DOWN (Küster) |
| 0x90 | ERROR_HALLDIR_UP (Küster) |
| 0x91 | ERROR_HALLDIR_DOWN (Küster) |
| 0x92 | ERROR_HIGH_HALLFREQ (Küster) |
| 0xFF | Ungültiger Wert |

### TAB_FH_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler |
| 1 | Keine Initialisierung möglich |
| 2 | Kennlinie ungültig |
| 3 | Codierung fehlerhaft |
| 4 | Normierung ungültig |
| 5 | Codierversion ungültig |
| 6 | HW-Version ungültig |
| 7 | Thermoschutz 90 |
| 8 | Thermoschutz 100 |
| 9 | Fehler Motoransteuerung |
| 10 | Allgemeiner Fehler |
| 11 | Hallfehler erkannt |
| 12 | Relaisfehler erkannt |
| 13 | Relaiskleber erkannt |
| 14 | Fehler Taster erkannt |
| 15 | Fehler Tasterbeleuchtung erkannt |
| 16 | Überspannung / Unterspannung erkannt |
| 17 | Speicherfehler (RAM/ROM/NVRAM) erkannt |
| 63 | Signal ungültig |

### TAB_FH_FENSTER_GS

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Teilweise geöffnet |
| 0x02 | Vollständig geöffnet |
| 0xFF | ungültig |

### TAB_FH_INIT

| WERT | TEXT |
| --- | --- |
| 0x01 | Fensterheber normiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken gültig |
| 0x02 | Fensterheber denormiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken gültig |
| 0x03 | Fensterheber normiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken gültig |
| 0x04 | Fensterheber denormiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken gültig |
| 0x05 | Fensterheber normiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken ungültig |
| 0x06 | Fensterheber denormiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken ungültig |
| 0x07 | Fensterheber normiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken ungültig |
| 0x08 | Fensterheber denormiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken ungültig |
| 0xFF | ungültiger Wert |

### TAB_FH_MOTORTEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x01 | Motortemperatur OK |
| 0x02 | Motortemperatur 90% des maximal zulässigen Wertes erreicht |
| 0x03 | Motortemperatur 100% des maximal zulässigen Wertes erreicht |
| 0xFF | Motortemperatur ungültig |

### TAB_FH_MT_LIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x1F | Brose |
| 0x02 | Küster |
| 0x03 | Magna |
| 0x04 | Webasto |
| 0x05 | Inalfa |
| 0x06 | Arvin Meritor |
| 0x07 | Lames |
| 0xFE | Dummy Motortreiber |
| 0xFF | ungültiger Hersteller |

### TAB_FH_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Fenster in Bewegung |
| 0x01 | Fenster komplett geschlossen |
| 0x02 | Fenster komplett offen |
| 0x03 | Fenster steht in Zwischenpositon |
| 0x04 | Fenster steht auf Position Kurzhub |
| 0x05 | Fenster steht auf Position Langhub |
| 0x06 | Fenster steht auf Position Cabrio |
| 0x07 | Fenster steht in Ausstellage |
| 0x0A | Fenster steht in Crash-Position |
| 0xA0 | Fenster steht in Demontageposition |
| 0xA1 | Fenster steht in Serviceposition A |
| 0xA2 | Fenster steht in Serviceposition B |
| 0xFF | ungültiger Wert |

### TAB_FH_REVERSIER_URSACHE

| WERT | TEXT |
| --- | --- |
| 0x00 | KEIN FEHLEREINTRAG |
| 0x01 | REVERS_ISR |
| 0x02 | REVERS_BLOCK |
| 0x03 | REVERS_ISRDIAG |
| 0x04 | REVERS_AT |
| 0x05 | REVERS_AT_DIAG |
| 0x20 | REVERS_AT_TIMEOUT (Conti) |
| 0x21 | REVERS_ATDIAGTIMEOUT (Conti) |
| 0x60 | REVERS_AT_TIMEOUT (Brose) |
| 0x61 | REVERS_ATDIAGTIMEOUT (Brose) |
| 0xFF | Ungültiger Wert |

### TAB_FH_SHD_ESH_EINLERNEN_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | TEACH_IN_WITHOUT_FORCE_CATCH |
| 0x03 | TEACH_IN_WITH_FORCE_CATCH_AND_NOT_STOP |
| 0x05 | NORMALIZATION_ONLY_FOR_WINDOW_LIFTER |

### TAB_FH_SHD_ESH_LAGE_NR

| WERT | TEXT |
| --- | --- |
| 0x01 | Ausstelllage |
| 0x02 | Schiebelage |
| 0xFF | Funktion nicht unterstützt |

### TAB_FH_SHD_ESH_MOTORSTOPREASON

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor läuft |
| 0x01 | Position erreicht |
| 0x02 | Bewegung abgebrochen durch Bedienkozept |
| 0x03 | Normierung gefunden |
| 0x04 | Nachnormierung durchgeführt |
| 0x05 | Einklemmen erkannt |
| 0x06 | Reversierposition erreicht |
| 0x07 | Blockieren erkannt |
| 0x08 | Motor steht |
| 0x09 | Sicherheitszeitüberlauf |
| 0x0A | Drehriuchtung passt nicht zur Hallauswertung |
| 0x0B | falsche Zielposition (zu niedrig) |
| 0x0C | falsche Zielposition (zu hoch) |
| 0x0D | Motor zu warm |
| 0x0E | Fehler in der Motoransteuerungs-HW |
| 0x0F | Motorkurzschluss |
| 0x10 | Reset während Motorbewegung |
| 0x11 | HALL Plus verloren |
| 0x12 | Motorspannung nicht im Betriebsbereich |
| 0x13 | Fehler in Hallsensoren-HW |
| 0x14 | keine OSEK-Rechenzeit für EkS-Algorithmus zugeteilt |
| 0x15 | Automove-Anforderung abgelehnt |
| 0x16 | Denormiert während Motorbewegung |
| 0x17 | NVRAM schreiben oder lesen für Block A Fehler verhindet ein Verfahren (Nach drei versuchen) |
| 0x18 | Bewegung gestoppt, Codierungvorgang gestartet |
| 0x19 | Zielposition vom Bedienkonzept unplausibel |
| 0x1A | Motorstart nicht möglich Timeout |
| 0x1B | Notfall stop |
| 0x1C | Motorbewegung Start-Zeit überschritten |
| 0x1D | Motor stoppt nach Emergency Reversierer |
| 0x1E | Hall Error |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_NORMIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung nicht gestartet |
| 0x01 | Initialisierung läuft |
| 0x02 | Initialisierung erfolgreich abgeschlossen |
| 0x03 | Abbruch durch Benutzer, Notstop |
| 0x04 | Abbruch durch Benutzer, Diagnose |
| 0x05 | Abbruch durch Reversieren |
| 0x06 | Fehler: Initialisierung |
| 0x07 | Fehler: keine FH-Freigabe |
| 0x08 | Fehler: Vorgang kann nicht gestartet werden, weil Tür offen |
| 0x09 | Fehler: Vorgang kann nicht gestartet werden, weil Verdeck/VHT offen |
| 0x0A | Fehler: Vorgang kann nicht gestartet werden, weil SG nicht codiert |
| 0xF0 | Fehler: allgemeiner Fehler |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Element in Bewegung |
| 0x01 | Element komplett geschlossen |
| 0x02 | Element komplett offen |
| 0x03 | Element steht in Zwischenpositon |
| 0x04 | Element steht auf Position Kurzhub  nur FH |
| 0x05 | Element steht auf Position Langhub  nur FH |
| 0x06 | Element steht auf Position Cabrio nur FH |
| 0x07 | Element steht in Ausstellage nur SHD/PDK |
| 0x08 | Element steht in Komfortposition nur PDK |
| 0x09 | Element steht in Anti-Wummer Position nur SHD |
| 0x0A | Element steht in Crash-Position |
| 0xA0 | Element steht in Demontageposition |
| 0xA1 | Element steht in Serviceposition A |
| 0xA2 | Element steht in Serviceposition B |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angenommen, aber noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_ZUSTAND_TUER

| WERT | TEXT |
| --- | --- |
| 0x00 | Tür geschlossen |
| 0x01 | Tür offen |
| 0x02 | Tür in Vorraste |
| 0x03 | Türstatus ungültig |
| 0xFF | Signal ungültig |

### TAB_FH_STAT_EEPROM

| WERT | TEXT |
| --- | --- |
| 0x01 | Checksumme IO |
| 0x02 | Checksumme NIO |
| 0xFF | ungültiger Wert |

### TAB_FH_WACHHALTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | aus |
| 0x01 | ein |
| 0x02 | ungültig |

### TAB_FH_ZUSTAND_TUER

| WERT | TEXT |
| --- | --- |
| 0x00 | Tür geschlossen |
| 0x01 | Tür offen |
| 0x02 | Türstatus unplausiebel |
| 0x03 | Türstatus ungültig |
| 0xFF | Signal ungültig |

### TAB_FORCED_SWITCH_OFF_XENON

| WERT | TEXT |
| --- | --- |
| 0x00 | NotActive |
| 0x01 | Active |
| 0x02 | NotAvailable |

### TAB_FUSI_FAHRBEREITSCHAFT_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x01 | KL15 nicht aktiv |
| 0x02 | ADC Fehler |
| 0x03 | Interner Integritätsfehler |

### TAB_FUSI_FEHLERGRUND_PWF

| WERT | TEXT |
| --- | --- |
| 0x01 | ST_DRVG_RDI_DRV CRC/Alive-Fehler |
| 0x02 | ST_DRVG_RDI_DRV ungültige Signalcodierung |
| 0x03 | ST_DRVG_RDI_DRV Timeout |
| 0x04 | ST_DRVG_RDI_DRV Safety-Fehler 1 |
| 0x05 | ST_DRVG_RDI_DRV Liveness-Fehler 1 |
| 0x06 | ST_DRVG_RDI_DRV Liveness-Fehler 2 |
| 0x07 | ST_DRVG_RDI_DRV Safety-Fehler 2 |
| 0x08 | Interner Integritätsfehler |

### TAB_FUSI_INTEGRITY

| WERT | TEXT |
| --- | --- |
| 0x00 | RTE_E_OK |
| 0x08 | RTE_E_INTEGRITY_VIOLATED |
| 0xFF | Ungültiger Wert |

### TAB_FUSI_KLEMMEN_AKTIVIERUNGS_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x01 | Anforderung MSA Motorstart1 ungleich Motor starten |
| 0x02 | Anforderung MSA Motorstart2 ungleich Motor starten |
| 0x03 | Status Motorstart Auto CRC/Alive Fehler |
| 0x04 | Aktivierungsanforderung Timeout |
| 0x05 | Interner Integritätsfehler |

### TAB_GESCHWINDIGKEITSASSISTENTMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Anzeigen |
| 0x02 | Manuell |
| 0x03 | Automatisch |
| 0xFF | Wert ungültig |

### TAB_GESCHWINDIGKEITSASSISTENT_MODUS_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | ANZEIGEN |
| 0x02 | MANUELL |
| 0x03 | AUTOMATISCH |

### TAB_HECKKLAPPENSENSOR_DEFEKT

| WERT | TEXT |
| --- | --- |
| 1 | Leitungsunterbrechung |
| 2 | Kurzschluss nach Masse |

### TAB_HECKKLAPPENSSENSOR

| WERT | TEXT |
| --- | --- |
| 0 | Geschlossen |
| 1 | Geöffnet |
| 2 | Fehler |
| 255 | Ungültig |

### TAB_HECKROLLO_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Heckrollo nicht vorhanden |
| 0x01 | Heckrollo über BDC |
| 0x02 | Heckrollo über HKFM |
| 0xFF | Ungültiger Wert |

### TAB_HISTORIENSPEICHER_SPERRE_ARG

| WERT | TEXT |
| --- | --- |
| 0 | HISTORY_ENABLE |
| 1 | HISTORY_DISABLE |
| 2 | DELETE_OR_INITIALIZATION |

### TAB_HK_WIPPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Taster gedrückt |
| 0x02 | Taster gezogen |
| 0x03 | Signal ungültig |

### TAB_HOD_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | EEPROM nicht verfügbar |
| 0x02 | ROM-Fehler |
| 0x03 | Watchdog Fehler |
| 0x04 | CPU-Fehler |
| 0x05 | Lenkrad, Unterbrechung Schirm |
| 0x06 | Lenkrad, Unterbrechung Messleitung |
| 0x07 | CPU defekt oder Sensor Kurzschluß |
| 0x08 | Unterspannung |
| 0x09 | Überspannung |
| 0x0A | Kodierfehler |
| 0x0B | Allgemeiner Systemfehler 2 |
| 0x0F | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_HOD_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Aktiv, Hände nicht am Lenkrad (QU_HOFF_RCOG_SEN_LIN = 0x9) |
| 0x01 | Aktiv, Hände am Lenkrad (QU_HOFF_RCOG_SEN_LIN = 0x1) |
| 0x02 | Nicht aktiv, fehlerhaft (QU_HOFF_RCOG_SEN_LIN = 0x5 oder 0xD oder 0xE oder 0xF) |
| 0xFF | Ungültiger Wert |

### TAB_HOEHENSTAND_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Kalibrierung Offset nicht erfolgreich |
| 1 | Kalibrierung Offset erfolgreich |
| 2 | Sensor ausstattungsbedingt nicht verbaut |
| 255 | unbekannter Zustand |

### TAB_HOHENSTAND_SENSOR

| WERT | TEXT |
| --- | --- |
| 0 | Sensor in Ordnung |
| 1 | Sensor fehlerhaft |
| 2 | Sensor ausstattungsbedingt nicht verbaut |
| 255 | Sensor fehlerhaft |

### TAB_HSM_ACTIVE

| WERT | TEXT |
| --- | --- |
| 0x00 | HSM nicht aktiv (alle anderen Results 0xFF) |
| 0x01 | HSM aktiv und nicht initialisiert |
| 0x02 | HSM aktiv und initialisiert |
| 0xFF | Wert ungültig |

### TAB_HSM_EXCEPTION_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | CRITICAL_INPUT_EXCEPTION |
| 0x01 | MACHINE_CHECK_EXCEPTION |
| 0x02 | DATA_STORAGE_EXCEPTION |
| 0x03 | INSTRUCTION_STORAGE_EXCEPTION |
| 0x04 | EXTERNAL_INPUT_EXCEPTION |
| 0x05 | ALIGNMENT_EXCEPTION |
| 0x06 | PROGRAM_EXCEPTION |
| 0x07 | SYSTEM_CALL_EXCEPTION |
| 0x08 | DEBUG_EXCEPTION |
| 0x09 | UNKNOWN (no information) |
| 0xFF | Wert ungültig |

### TAB_HSM_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | HSM Init OK (no error) |
| 0x01 | HSM Init Busy |
| 0x02 | Error JTAG unlocked |
| 0x03 | Error lifecycle (lifecycle is not 'In-Field') |
| 0x04 | Error HSM not active (HSM not enabled) |
| 0x05 | Error decrypting key |
| 0x06 | Error storing key |
| 0x07 | Error storing version number |
| 0x08 | Error transfer HSM-Appl |
| 0x09 | Error decrypt HSM-Appl |
| 0x0A | Error storing HSM-Appl |
| 0x0B | Error clearing HSM-Appl |
| 0xFF | Wert ungültig |

### TAB_HSM_JTAG_SPERRSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | HSM JTAG nicht gesperrt |
| 0x01 | HSM JTAG gesperrt |
| 0xFF | Wert ungültig |

### TAB_HSM_RUN_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | not installed |
| 0x01 | INIT |
| 0x02 | HSM Applikation aktiv |
| 0x03 | HSM Bootloader aktiv |
| 0x04 | HSM Bootloader Updater aktiv |
| 0x12 | HSM Applikation Startup aktiv |
| 0x13 | HSM Bootloader Startup aktiv |
| 0x14 | HSM Bootloader Updater Startup aktiv |
| 0xFF | Wert ungültig |

### TAB_HSS_LA_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 11 | Front und heck nicht aktiv |
| 12 | Front aktiv, heck nicht aktiv |
| 13 | Front Fehlerhaft, heck nicht aktiv |
| 21 | Front nicht aktiv, heck aktiv |
| 22 | Front und heck aktiv |
| 23 | Front fehlerhaft, heck aktiv |
| 31 | Front nicht aktiv, heck fehlerhaft |
| 32 | Front aktiv, heck fehlerhaft |
| 33 | Front und heck fehlerhaft |
| 0xFF | ungültiger Wert |

### TAB_HSS_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Höhenstandssensoren |
| 0x01 | Höhenstandssensorensignal von CAN |
| 0x02 | Höhenstandssensoren von BDC  |
| 0x03 | Hinterer Höhenstandssensoren von BDC |
| 0xFF | ungültiger Wert |

### TAB_IBS_WAKEUP_GRUND

| WERT | TEXT |
| --- | --- |
| 1 | Erreichen der Startfähigkeitsgrenze 1 |
| 2 | Erreichen der Startfähigkeitsgrenze 2 |
| 3 | Ruhestromverletzung |
| 4 | Nachladefunktion |
| 5 | Reserviert für zukünftige Werte |
| 255 | Ungültig/Unbekannt |

### TAB_IFK_TEMP_EINHEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Celsius |
| 0x01 | Fahrenheit |
| 0x03 | Ungültig |
| 0xFF | Ungültiger Wert |

### TAB_IM_ADEV_ANTICOLL

| WERT | TEXT |
| --- | --- |
| 0x00 | Normale Antikollision - Zeitslot 0 |
| 0x01 | Normale Antikollision - Zeitslot 1 |
| 0x02 | Normale Antikollision - Zeitslot 2 |
| 0x03 | Normale Antikollision - Zeitslot 3 |
| 0x04 | Normale Antikollision - Zeitslot 4 |
| 0x05 | Normale Antikollision - Zeitslot 5 |
| 0x06 | Normale Antikollision - Zeitslot 6 |
| 0x07 | Normale Antikollision - Zeitslot 7 |
| 0x08 | Stochastische bzw. erweiterte Antikollision - Zeitslot 8 |
| 0x09 | Stochastische bzw. erweiterte Antikollision - Zeitslot 9 |
| 0x0A | Stochastische bzw. erweiterte Antikollision - Zeitslot 10 |
| 0x0B | Stochastische bzw. erweiterte Antikollision - Zeitslot 11 |
| 0x0C | Stochastische bzw. erweiterte Antikollision - Zeitslot 12 |
| 0x0D | Stochastische bzw. erweiterte Antikollision - Zeitslot 13 |
| 0x0E | Stochastische bzw. erweiterte Antikollision - Zeitslot 14 |
| 0x0F | Stochastische bzw. erweiterte Antikollision - Zeitslot 15 |
| 0xFF | ungültig / kein Antikollision-Zeitslot zugeordnet |

### TAB_IM_ADEV_AUTH

| WERT | TEXT |
| --- | --- |
| 0x00 | ID unbekannt  / NA (z.B. bei unbekanntem Transponder) |
| 0x01 | Authentisierung läuft |
| 0x02 | Authentisierung erfolgreich (KEY_VALID) |
| 0x10 | Authentisierung nicht möglich (z.B. Kommunikationsfehler) |
| 0x11 | Authentisierung fehlgeschlagen (z.B. nicht authentisch) |
| 0x12 | Authentisierungs-Device ist gesperrt |
| 0xFF | ungültiger Wert |

### TAB_IM_ADEV_CONFIG

| WERT | TEXT |
| --- | --- |
| 0x00 | Unverriegelt, normale Anlieferung - anlernbar |
| 0x01 | Komplett Verriegelt - nicht mehr anlernbar |
| 0x02 | Teilweise Verriegelt - nicht mehr anlernbar |
| 0x04 | Kein normaler Anlieferzustand - trotzdem anlernbar |
| 0x10 | Fehlerhafte Segment-Konfiguration - nicht anlernbar |
| 0x11 | Fehlerhafte Rechte - Konfiguration - nicht anlernbar |
| 0x20 | unbekannter bzw. falscher Transpondertyp |
| 0xFF | ungültig / Kein Transponder erkannt |

### TAB_IM_ADEV_POS

| WERT | TEXT |
| --- | --- |
| 0x00 | Authentisierungs-Device 0 |
| 0x01 | Authentisierungs-Device 1 |
| 0x02 | Authentisierungs-Device 2 |
| 0x03 | Authentisierungs-Device 3 |
| 0x04 | Authentisierungs-Device 4 |
| 0x05 | Authentisierungs-Device 5 |
| 0x06 | Authentisierungs-Device 6 |
| 0x07 | Authentisierungs-Device 7 |
| 0x08 | Authentisierungs-Device 8 |
| 0x09 | Authentisierungs-Device 9 |
| 0x0A | Authentisierungs-Device 10 |
| 0x0B | Authentisierungs-Device 11 |
| 0x0C | Authentisierungs-Device 12 |
| 0x0D | Authentisierungs-Device 13 |
| 0x0E | Authentisierungs-Device 14 |
| 0x0F | Authentisierungs-Device 15 |
| 0x10 | Authentisierungs-Device 16 |
| 0x11 | Authentisierungs-Device 17 |
| 0x12 | Authentisierungs-Device 18 |
| 0x13 | Authentisierungs-Device 19 |
| 0x64 | THS 1 |
| 0x65 | THS 2 |
| 0xC8 | FFB |
| 0xFF | ungültiger Wert |

### TAB_IM_ADEV_POS_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | ADEV_0 |
| 0x01 | ADEV_1 |
| 0x02 | ADEV_2 |
| 0x03 | ADEV_3 |
| 0x04 | ADEV_4 |
| 0x05 | ADEV_5 |
| 0x06 | ADEV_6 |
| 0x07 | ADEV_7 |
| 0x08 | ADEV_8 |
| 0x09 | ADEV_9 |
| 0x0A | ADEV_10 |
| 0x0B | ADEV_11 |
| 0x0C | ADEV_12 |
| 0x0D | ADEV_13 |
| 0x0E | ADEV_14 |
| 0x0F | ADEV_15 |
| 0x10 | ADEV_16 |
| 0x11 | ADEV_17 |
| 0x12 | ADEV_18 |
| 0x13 | ADEV_19 |
| 0x14 | ADEV_20 |
| 0x15 | ADEV_21 |
| 0x16 | ADEV_22 |
| 0x17 | ADEV_23 |
| 0x18 | ADEV_24 |
| 0x19 | ADEV_25 |
| 0x1A | ADEV_26 |
| 0x1B | ADEV_27 |
| 0x1C | ADEV_28 |
| 0x1D | ADEV_29 |
| 0x1E | ADEV_30 |
| 0x1F | ADEV_31 |
| 0x20 | ADEV_32 |
| 0x21 | ADEV_33 |
| 0x22 | ADEV_34 |
| 0x23 | ADEV_35 |
| 0x24 | ADEV_36 |
| 0x25 | ADEV_37 |
| 0x26 | ADEV_38 |
| 0x27 | ADEV_39 |

### TAB_IM_ADEV_SMACC_POS_ARG

| WERT | TEXT |
| --- | --- |
| 0x14 | ADEV_20 |
| 0x15 | ADEV_21 |
| 0x16 | ADEV_22 |
| 0x17 | ADEV_23 |
| 0x18 | ADEV_24 |
| 0x19 | ADEV_25 |
| 0x1A | ADEV_26 |
| 0x1B | ADEV_27 |
| 0x1C | ADEV_28 |
| 0x1D | ADEV_29 |
| 0x1E | ADEV_30 |
| 0x1F | ADEV_31 |
| 0x20 | ADEV_32 |
| 0x21 | ADEV_33 |
| 0x22 | ADEV_34 |
| 0x23 | ADEV_35 |
| 0x24 | ADEV_36 |
| 0x25 | ADEV_37 |
| 0x26 | ADEV_38 |
| 0x27 | ADEV_39 |

### TAB_IM_ADEV_SPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | Authentisierungs-Device nicht gesperrt |
| 0x01 | Authentisierungs-Device gesperrt |
| 0x02 | Authentisierungs-Device gelöscht |
| 0xFF | ungültiger Wert |

### TAB_IM_ADEV_SPERRE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | ENABLED |
| 0x01 | DISABLED |

### TAB_IM_ADEV_TYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | Plug-In-Schnittstelle |
| 0x02 | Geldbörsenschlüssel |
| 0x05 | ID-Geber (Standard-Schlüssel) |
| 0x06 | ID-Geber mit Display |
| 0x10 | NFC-Device |
| 0xFF | ungültiger Wert |

### TAB_IM_ADEV_TYPE_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | PLUGIN |
| 0x02 | WALLET |
| 0x05 | IDG |
| 0x06 | DISPIDG |
| 0x10 | NFC_SMACC |
| 0x11 | NFC_SMACC_SAFE_SHARE |

### TAB_IM_ADEV_VALID

| WERT | TEXT |
| --- | --- |
| 0 | Authentisierungs-Device 0 |
| 1 | Authentisierungs-Device 1 |
| 2 | Authentisierungs-Device 2 |
| 3 | Authentisierungs-Device 3 |
| 4 | Authentisierungs-Device 4 |
| 5 | Authentisierungs-Device 5 |
| 6 | Authentisierungs-Device 6 |
| 7 | Authentisierungs-Device 7 |
| 8 | Authentisierungs-Device 8 |
| 9 | Authentisierungs-Device 9 |
| 10 | Authentisierungs-Device 10 |
| 11 | Authentisierungs-Device 11 |
| 12 | Authentisierungs-Device 12 |
| 13 | Authentisierungs-Device 13 |
| 14 | Authentisierungs-Device 14 |
| 15 | Authentisierungs-Device 15 |
| 16 | Authentisierungs-Device 16 |
| 17 | Authentisierungs-Device 17 |
| 18 | Authentisierungs-Device 18 |
| 19 | Authentisierungs-Device 19 |
| 0xFF | Wert ungültig |

### TAB_IM_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |
| 0xFF | Wert ungültig |

### TAB_IM_DATA_MODE

| WERT | TEXT |
| --- | --- |
| 0x0A | WRITE_TRANSPORT_A |
| 0x0B | WRITE_TRANSPORT_B |
| 0x14 | WRITE_ADEV_KEYS |
| 0x1E | WRITE_SERVER_KEYS |
| 0x1F | WRITE_ISN |
| 0x32 | WRITE_AC |

### TAB_IM_DATENABLAGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht vorhanden |
| 0x01 | Vorhanden und 100% konsistent und Mehrfachablage in Ordnung |
| 0x02 | Vorhanden und 100% konsistent, aber Mehrfachablage eingeschränkt |
| 0x03 | Vorhanden aber ggf. nicht konsistent |
| 0xFF | Wert ungültig |

### TAB_IM_E5_MODE

| WERT | TEXT |
| --- | --- |
| 0 | E5 nicht aktiv |
| 1 | E5 aktiv (DEFAULT) |
| 0xFF | Wert ungültig |

### TAB_IM_E6_MODE

| WERT | TEXT |
| --- | --- |
| 0 | E6 nicht aktiv |
| 1 | E6 aktiv  (DEFAULT) |
| 0xFF | Wert ungültig |

### TAB_IM_FBD_SUPPLIER

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein Lieferant (Wert unzulässig) |
| 0x0036 | Hella KGaA Hueck & Co. |
| 0x0037 | Continental Temic microelectronic GmbH |
| 0x003F | Marquardt GmbH |
| 0x0066 | Valeo SA |
| 0x0072 | Huf Hülsbeck & Fürst GmbH&Co KG |
| 0xFF10 | Conti Regensburg |
| 0xFF20 | HUF |
| 0xFF30 | Marquardt |
| 0xFFFF | ungültiger Wert |

### TAB_IM_FREQ

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Frequenz |
| 0x01 | Reserviert |
| 0x02 | Reserviert |
| 0x03 | 315 MHz LowPower |
| 0x04 | 315 MHz |
| 0x05 | 434 MHz |
| 0x06 | 868 MHz |
| 0x07 | 434 MHz (KOREA) |
| 0x08 | Reserviert |
| 0x09 | 434 MHz (US, Nur FBD-Empfänger) |
| 0x0A | 434 MHz (TAIWAN, Nur FBD-Empfänger) |
| 0xFF | ungültiger Wert |

### TAB_IM_FREQ_ARG

| WERT | TEXT |
| --- | --- |
| 0x03 | 315_LP |
| 0x04 | 315 |
| 0x05 | 434 |
| 0x06 | 868 |
| 0x07 | 434_KOREA |

### TAB_IM_HASHMODE

| WERT | TEXT |
| --- | --- |
| 2 | OLD_HASH: Alte Hashfunktionen verwenden (bis einschl. SOP 2013) RüKo |
| 8 | 35UP_HASH: (DEFAULT) Neue 35UP-Hashfunktionen (KeyLaws konform) |
| 255 | ungültig (noch nicht gesetzt) |

### TAB_IM_HASHMODE_ARG

| WERT | TEXT |
| --- | --- |
| 0x02 | OLD_HASH |
| 0x08 | 35UP_HASH |

### TAB_IM_INIT_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Anlernvorgang Fehler 1 |
| 0x02 | Anlernvorgang Fehler 2 |
| 0x03 | Anlernvorgang Fehler 3 |
| 0x04 | Anlernvorgang Fehler 4 |
| 0x05 | Anlernvorgang Fehler 5 |
| 0x06 | Anlernvorgang Fehler 6 |
| 0x07 | Anlernvorgang Fehler 7 |
| 0x08 | Anlernvorgang Fehler 8 |
| 0x09 | Anlernvorgang Fehler 9 |
| 0x0A | Anlernvorgang Fehler 10 |
| 0x0B | Anlernvorgang Fehler 11 |
| 0x0C | Anlernvorgang Fehler 12 |
| 0x0D | Anlernvorgang Fehler 13 |
| 0x0E | Anlernvorgang Fehler 14 |
| 0x0F | Anlernvorgang Fehler 15 |
| 0x10 | Anlernvorgang Fehler 16 |
| 0x11 | Anlernvorgang Fehler 17 |
| 0x12 | Anlernvorgang Fehler 18 |
| 0x13 | Anlernvorgang Fehler 19 |
| 0x14 | Anlernvorgang Fehler 20 |
| 0x15 | Anlernvorgang Fehler 21 |
| 0x16 | Anlernvorgang Fehler 22 |
| 0x17 | Anlernvorgang Fehler 23 |
| 0x18 | Anlernvorgang Fehler 24 |
| 0x19 | Anlernvorgang Fehler 25 |
| 0x1A | Anlernvorgang Fehler 26 |
| 0x1B | Anlernvorgang Fehler 27 |
| 0x1C | Anlernvorgang Fehler 28 |
| 0x1D | Anlernvorgang Fehler 29 |
| 0x1E | Anlernvorgang Fehler 30 |
| 0x1F | Anlernvorgang Fehler 31 |
| 0x20 | Anlernvorgang Fehler 32 |
| 0x21 | Anlernvorgang Fehler 33 |
| 0x22 | Anlernvorgang Fehler 34 |
| 0x23 | Anlernvorgang Fehler 35 |
| 0x24 | Anlernvorgang Fehler 36 |
| 0x25 | Anlernvorgang Fehler 37 |
| 0x26 | Anlernvorgang Fehler 38 |
| 0x27 | Anlernvorgang Fehler 39 |
| 0x28 | Anlernvorgang Fehler 40 |
| 0x29 | Anlernvorgang Fehler 41 |
| 0x2A | Anlernvorgang Fehler 42 |
| 0x2B | Anlernvorgang Fehler 43 |
| 0x2C | Anlernvorgang Fehler 44 |
| 0x2D | Anlernvorgang Fehler 45 |
| 0x2E | Anlernvorgang Fehler 46 |
| 0x2F | Anlernvorgang Fehler 47 |
| 0x30 | Anlernvorgang Fehler 48 |
| 0x31 | Anlernvorgang Fehler 49 |
| 0x32 | Anlernvorgang Fehler 50 |
| 0x33 | Anlernvorgang Fehler 51 |
| 0x34 | Anlernvorgang Fehler 52 |
| 0x35 | Anlernvorgang Fehler 53 |
| 0x36 | Anlernvorgang Fehler 54 |
| 0x37 | Anlernvorgang Fehler 55 |
| 0x38 | Anlernvorgang Fehler 56 |
| 0x39 | Anlernvorgang Fehler 57 |
| 0x3A | Anlernvorgang Fehler 58 |
| 0x3B | Anlernvorgang Fehler 59 |
| 0x3C | ACS Update Fehler 1 |
| 0x3D | ACS Update Fehler 2 |
| 0x3E | ACS Update Fehler 3 |
| 0x3F | ACS Update Fehler 4 |
| 0x40 | ACS Update Fehler 5 |
| 0x41 | ACS Update Fehler 6 |
| 0x42 | ACS Update Fehler 7 |
| 0x43 | ACS Update Fehler 8 |
| 0x44 | ACS Update Fehler 9 |
| 0x45 | ACS Update Fehler 10 |
| 0x46 | ACS Update Fehler 11 |
| 0x47 | ACS Update Fehler 12 |
| 0x48 | ACS Update Fehler 13 |
| 0x49 | ACS Update Fehler 14 |
| 0x4A | ACS Update Fehler 15 |
| 0x4B | ACS Update Fehler 16 |
| 0x4C | ACS Update Fehler 17 |
| 0x4D | ACS Update Fehler 18 |
| 0x4E | ACS Update Fehler 19 |
| 0x4F | ACS Update Fehler 20 |
| 0x50 | Fehler Start Anlernvorgang - Job Argument 'tab_pos' ungültig |
| 0x51 | Fehler Start Anlernvorgang - Job Argument 'mode' ungültig |
| 0x52 | Fehler Start Anlernvorgang - ADEV SK ist gesperrt |
| 0x53 | Fehler Start Anlernvorgang - NVM wird gerade gelöscht |
| 0x54 | Fehler Start Anlernvorgang - Anlernvorgang läuft bereits |
| 0x55 | Fehler Start Anlernvorgang - Job Argument 'id' ist nicht korrekt |
| 0x56 | Fehler Start Anlernvorgang - Job Argument 'id' falscher Prefix |
| 0x57 | Fehler Start Anlernvorgang - Lesevorgang noch nicht abgeschlossen |
| 0x58 | Fehler Start Anlernvorgang - Position ist bereits benutzt |
| 0x59 | Fehler Start Anlernvorgang - Transponder ist nicht unverriegelt |
| 0x5A | Fehler Start Anlernvorgang - Falsche Transpondergeneration |
| 0x5B | Fehler Start Anlernvorgang - ID wird bereits verwendet |
| 0x5C | Start Anlernvorgang Fehler 1 |
| 0x5D | Start Anlernvorgang Fehler 2 |
| 0x5E | Start Anlernvorgang Fehler 3 |
| 0x5F | Start Anlernvorgang Fehler 4 |
| 0x60 | Start Anlernvorgang Fehler 5 |
| 0x61 | Start Anlernvorgang Fehler 6 |
| 0x62 | Start Anlernvorgang Fehler 7 |
| 0x63 | Start Anlernvorgang Fehler 8 |
| 0x64 | Read Fehler - Falscher Transpondertyp |
| 0x65 | Read Fehler 1 |
| 0x66 | Read Fehler 2 |
| 0x67 | Read Fehler 3 |
| 0x68 | Read Fehler 4 |
| 0x69 | Read Fehler 5 |
| 0x6A | Read Fehler 6 |
| 0x6B | Read Fehler 7 |
| 0x6C | Read Fehler 8 |
| 0x6D | Read Fehler 9 |
| 0x6E | Read Fehler 10 |
| 0x6F | Read Fehler 11 |
| 0x70 | Read Fehler 12 |
| 0x71 | Read Fehler 13 |
| 0x72 | Read Fehler 14 |
| 0x73 | Read Fehler 15 |
| 0x74 | Read Fehler 16 |
| 0x75 | Read Fehler 17 |
| 0x76 | Read Fehler 18 |
| 0x77 | Read Fehler 19 |
| 0x78 | Read Fehler 20 |
| 0x79 | Read Fehler 21 |
| 0x7A | Read Fehler 22 |
| 0x7B | Read Fehler 23 |
| 0x7C | Read Fehler 24 |
| 0x7D | Read Fehler 25 |
| 0x7E | Read Fehler 26 |
| 0x7F | Read Fehler 27 |
| 0x80 | Read Fehler 28 |
| 0x81 | Read Fehler 29 |
| 0x82 | Auth Fehler Basestation |
| 0x83 | Auth Fehler Antenne |
| 0x84 | Auth Fehler RND |
| 0x85 | Auth Fehler 1 |
| 0x86 | Auth Fehler 2 |
| 0x87 | Auth Fehler 3 |
| 0x88 | Auth Fehler 4 |
| 0x89 | Auth Fehler 5 |
| 0x8A | Auth Fehler 6 |
| 0x8B | Auth Fehler 7 |
| 0x8C | Auth Fehler 8 |
| 0x8D | Auth Fehler 9 |
| 0x8E | Auth Fehler 10 |
| 0x8F | Auth Fehler 11 |
| 0x90 | Auth Fehler 12 |
| 0x91 | Auth Fehler 13 |
| 0x92 | Auth Fehler 14 |
| 0x93 | Auth Fehler 15 |
| 0x94 | Auth Fehler 16 |
| 0x95 | Auth Fehler 17 |
| 0x96 | Auth Fehler 18 |
| 0x97 | Auth Fehler 19 |
| 0x98 | Auth Fehler 20 |
| 0x99 | Auth Fehler 21 |
| 0x9A | Auth Fehler 22 |
| 0x9B | Auth Fehler 23 |
| 0x9C | Auth Fehler 24 |
| 0x9D | Auth Fehler 25 |
| 0x9E | Auth Fehler 26 |
| 0x9F | Auth Fehler 27 |
| 0xA0 | Ersatzschlüssel Fehler 1 |
| 0xA1 | Ersatzschlüssel Fehler 2 |
| 0xA2 | Ersatzschlüssel Fehler 3 |
| 0xA3 | Ersatzschlüssel Fehler 4 |
| 0xA4 | Ersatzschlüssel Fehler 5 |
| 0xA5 | Ersatzschlüssel Fehler 6 |
| 0xA6 | Ersatzschlüssel Fehler 7 |
| 0xA7 | Ersatzschlüssel Fehler 8 |
| 0xA8 | Ersatzschlüssel Fehler 9 |
| 0xA9 | Ersatzschlüssel Fehler 10 |
| 0xAA | Ersatzschlüssel Fehler 11 |
| 0xAB | Ersatzschlüssel Fehler 12 |
| 0xAC | Ersatzschlüssel Fehler 13 |
| 0xAD | Ersatzschlüssel Fehler 14 |
| 0xAE | Ersatzschlüssel Fehler 15 |
| 0xAF | Ersatzschlüssel Fehler 16 |
| 0xB0 | Ersatzschlüssel Fehler 17 |
| 0xB1 | Ersatzschlüssel Fehler 18 |
| 0xB2 | Ersatzschlüssel Fehler 19 |
| 0xB3 | Ersatzschlüssel Fehler 20 |
| 0xB4 | Ersatzschlüssel Fehler 21 |
| 0xB5 | Ersatzschlüssel Fehler 22 |
| 0xB6 | Ersatzschlüssel Fehler 23 |
| 0xB7 | Ersatzschlüssel Fehler 24 |
| 0xB8 | Ersatzschlüssel Fehler 25 |
| 0xB9 | Ersatzschlüssel Fehler 26 |
| 0xBA | Ersatzschlüssel Fehler 27 |
| 0xBB | Ersatzschlüssel Fehler 28 |
| 0xBC | Ersatzschlüssel Fehler 29 |
| 0xBD | Ersatzschlüssel Fehler 30 |
| 0xBE | Ersatzschlüssel Fehler 31 |
| 0xBF | Ersatzschlüssel Fehler 32 |
| 0xC0 | Ersatzschlüssel Fehler 33 |
| 0xC1 | Ersatzschlüssel Fehler 34 |
| 0xC2 | Ersatzschlüssel Fehler 35 |
| 0xC3 | Ersatzschlüssel Fehler 36 |
| 0xC4 | Ersatzschlüssel Fehler 37 |
| 0xC5 | Ersatzschlüssel Fehler 38 |
| 0xC6 | Ersatzschlüssel Fehler 39 |
| 0xC7 | Ersatzschlüssel Fehler 40 |
| 0xC8 | EOL Update Fehler 1 |
| 0xC9 | EOL Update Fehler 2 |
| 0xCA | EOL Update Fehler 3 |
| 0xCB | EOL Update Fehler 4 |
| 0xCC | EOL Update Fehler 5 |
| 0xCD | EOL Update Fehler 6 |
| 0xCE | EOL Update Fehler 7 |
| 0xCF | EOL Update Fehler 8 |
| 0xD0 | EOL Update Fehler 9 |
| 0xD1 | EOL Update Fehler 10 |
| 0xD2 | EOL Update Fehler 11 |
| 0xD3 | EOL Update Fehler 12 |
| 0xD4 | EOL Update Fehler 13 |
| 0xD5 | EOL Update Fehler 14 |
| 0xD6 | EOL Update Fehler 15 |
| 0xD7 | EOL Update Fehler 16 |
| 0xD8 | EOL Update Fehler 17 |
| 0xD9 | EOL Update Fehler 18 |
| 0xDA | EOL Update Fehler 19 |
| 0xDB | EOL Update Fehler 20 |
| 0xDC | COM Fehler im Anlernvorgang |
| 0xDD | COM Fehler im Ersatzablauf |
| 0xDE | COM Fehler im Leseablauf |
| 0xDF | COM Fehler beim EOL Update |
| 0xE0 | COM Fehler beim ACS Update |
| 0xE1 | COM Fehler Batteriezustand |
| 0xE2 | COM Fehler 1 |
| 0xE3 | COM Fehler 2 |
| 0xE4 | COM Fehler 3 |
| 0xE5 | COM Fehler 4 |
| 0xE6 | SDS Fehler - kein Transponder an der Spule |
| 0xE7 | SDS Fehler 1 |
| 0xE8 | SDS Fehler 2 |
| 0xE9 | SDS Fehler 3 |
| 0xEA | SDS Fehler 4 |
| 0xEB | SDS Fehler 5 |
| 0xEC | SDS Fehler 6 |
| 0xED | SDS Fehler 7 |
| 0xEE | SDS Fehler 8 |
| 0xEF | SDS Fehler 9 |
| 0xF0 | SDS Fehler 10 |
| 0xF1 | SDS Fehler 11 |
| 0xF2 | SDS Fehler 12 |
| 0xF3 | SDS Fehler 13 |
| 0xF4 | SDS Fehler 14 |
| 0xF5 | SDS Fehler 15 |
| 0xF6 | SDS Fehler 16 |
| 0xF7 | SDS Fehler 17 |
| 0xF8 | SDS Fehler 18 |
| 0xF9 | SDS Fehler 19 |
| 0xFA | SDS Fehler 20 |
| 0xFB | SDS Fehler 21 |
| 0xFC | SDS Fehler 22 |
| 0xFD | SDS Fehler 23 |
| 0xFE | SDS Fehler 24 |
| 0xFF | Ungültiger Fehler |

### TAB_IM_INIT_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Ungültiger Wert |
| 0x01 | Fertig angelernt |
| 0x02 | Anlernvorgang läuft - Position 2 |
| 0x03 | Anlernvorgang läuft - Position 3 |
| 0x04 | Anlernvorgang läuft - Position 4 |
| 0x05 | Anlernvorgang läuft - Position 5 |
| 0x06 | Anlernvorgang läuft - Position 6 |
| 0x07 | Anlernvorgang läuft - Position 7 |
| 0x08 | Anlernvorgang läuft - Position 8 |
| 0x09 | Anlernvorgang läuft - Position 9 |
| 0x0A | Anlernvorgang läuft - Position 10 |
| 0x0B | Anlernvorgang läuft - Position 11 |
| 0x0C | Anlernvorgang läuft - Position 12 |
| 0x0D | Anlernvorgang läuft - Position 13 |
| 0x0E | Anlernvorgang läuft - Position 14 |
| 0x0F | Anlernvorgang läuft - Position 15 |
| 0x10 | Anlernvorgang läuft - Position 16 |
| 0x11 | Anlernvorgang läuft - Position 17 |
| 0x12 | Anlernvorgang läuft - Position 18 |
| 0x13 | Anlernvorgang läuft - Position 19 |
| 0x14 | Anlernvorgang läuft - Position 20 |
| 0x15 | Anlernvorgang läuft - Position 21 |
| 0x16 | Anlernvorgang läuft - Position 22 |
| 0x17 | Anlernvorgang läuft - Position 23 |
| 0x18 | Anlernvorgang läuft - Position 24 |
| 0x19 | Anlernvorgang läuft - Position 25 |
| 0x1A | Anlernvorgang läuft - Position 26 |
| 0x1B | Anlernvorgang läuft - Position 27 |
| 0x1C | Anlernvorgang läuft - Position 28 |
| 0x1D | Anlernvorgang läuft - Position 29 |
| 0x1E | Anlernvorgang läuft - Position 30 |
| 0x1F | Anlernvorgang läuft - Position 31 |
| 0x20 | Anlernvorgang läuft - Position 32 |
| 0x21 | Anlernvorgang läuft - Position 33 |
| 0x22 | Anlernvorgang läuft - Position 34 |
| 0x23 | Anlernvorgang läuft - Position 35 |
| 0x24 | Anlernvorgang läuft - Position 36 |
| 0x25 | Anlernvorgang läuft - Position 37 |
| 0x26 | Anlernvorgang läuft - Position 38 |
| 0x27 | Anlernvorgang läuft - Position 39 |
| 0x28 | Anlernvorgang läuft - Position 40 |
| 0x29 | Anlernvorgang läuft - Position 41 |
| 0x2A | Anlernvorgang läuft - Position 42 |
| 0x2B | Anlernvorgang läuft - Position 43 |
| 0x2C | Anlernvorgang läuft - Position 44 |
| 0x2D | Anlernvorgang läuft - Position 45 |
| 0x2E | Anlernvorgang läuft - Position 46 |
| 0x2F | Anlernvorgang läuft - Position 47 |
| 0x30 | Anlernvorgang läuft - Position 48 |
| 0x31 | Anlernvorgang läuft - Position 49 |
| 0x32 | Anlernvorgang läuft - Position 50 |
| 0x33 | Anlernvorgang läuft - Position 51 |
| 0x34 | Anlernvorgang läuft - Position 52 |
| 0x35 | Anlernvorgang läuft - Position 53 |
| 0x36 | Anlernvorgang läuft - Position 54 |
| 0x37 | Anlernvorgang läuft - Position 55 |
| 0x38 | Anlernvorgang läuft - Position 56 |
| 0x39 | Anlernvorgang läuft - Position 57 |
| 0x3A | Anlernvorgang läuft - Position 58 |
| 0x3B | Anlernvorgang läuft - Position 59 |
| 0x3C | Anlernvorgang läuft - Position 60 |
| 0x3D | Anlernvorgang läuft - Position 61 |
| 0x3E | Anlernvorgang läuft - Position 62 |
| 0x3F | Anlernvorgang läuft - Position 63 |
| 0x40 | Anlernvorgang läuft - Position 64 |
| 0x41 | Anlernvorgang läuft - Position 65 |
| 0x42 | Anlernvorgang läuft - Position 66 |
| 0x43 | Anlernvorgang läuft - Position 67 |
| 0x44 | Anlernvorgang läuft - Position 68 |
| 0x45 | Anlernvorgang läuft - Position 69 |
| 0x46 | Anlernvorgang läuft - Position 70 |
| 0x47 | Anlernvorgang läuft - Position 71 |
| 0x48 | Anlernvorgang läuft - Position 72 |
| 0x49 | Anlernvorgang läuft - Position 73 |
| 0x4A | Anlernvorgang läuft - Position 74 |
| 0x4B | Anlernvorgang läuft - Position 75 |
| 0x4C | Anlernvorgang läuft - Position 76 |
| 0x4D | Anlernvorgang läuft - Position 77 |
| 0x4E | Anlernvorgang läuft - Position 78 |
| 0x4F | Anlernvorgang läuft - Position 79 |
| 0x50 | Anlernvorgang läuft - Position 80 |
| 0x51 | Anlernvorgang läuft - Position 81 |
| 0x52 | Anlernvorgang läuft - Position 82 |
| 0x53 | Anlernvorgang läuft - Position 83 |
| 0x54 | Anlernvorgang läuft - Position 84 |
| 0x55 | Anlernvorgang läuft - Position 85 |
| 0x56 | Anlernvorgang läuft - Position 86 |
| 0x57 | Anlernvorgang läuft - Position 87 |
| 0x58 | Anlernvorgang läuft - Position 88 |
| 0x59 | Anlernvorgang läuft - Position 89 |
| 0x5A | Anlernvorgang läuft - Position 90 |
| 0x5B | Anlernvorgang läuft - Position 91 |
| 0x5C | Anlernvorgang läuft - Position 92 |
| 0x5D | Anlernvorgang läuft - Position 93 |
| 0x5E | Anlernvorgang läuft - Position 94 |
| 0x5F | Anlernvorgang läuft - Position 95 |
| 0x60 | Anlernvorgang läuft - Position 96 |
| 0x61 | Anlernvorgang läuft - Position 97 |
| 0x62 | Anlernvorgang läuft - Position 98 |
| 0x63 | Anlernvorgang läuft - Position 99 |
| 0x64 | Anlernvorgang läuft - Position 100 |
| 0x65 | Anlernvorgang läuft - Position 101 |
| 0x66 | Anlernvorgang läuft - Position 102 |
| 0x67 | Anlernvorgang läuft - Position 103 |
| 0x68 | Anlernvorgang läuft - Position 104 |
| 0x69 | Anlernvorgang läuft - Position 105 |
| 0x6A | Anlernvorgang läuft - Position 106 |
| 0x6B | Anlernvorgang läuft - Position 107 |
| 0x6C | Anlernvorgang läuft - Position 108 |
| 0x6D | Anlernvorgang läuft - Position 109 |
| 0x6E | Anlernvorgang läuft - Position 110 |
| 0x6F | Anlernvorgang läuft - Position 111 |
| 0x70 | Anlernvorgang läuft - Position 112 |
| 0x71 | Anlernvorgang läuft - Position 113 |
| 0x72 | Anlernvorgang läuft - Position 114 |
| 0x73 | Anlernvorgang läuft - Position 115 |
| 0x74 | Anlernvorgang läuft - Position 116 |
| 0x75 | Anlernvorgang läuft - Position 117 |
| 0x76 | Anlernvorgang läuft - Position 118 |
| 0x77 | Anlernvorgang läuft - Position 119 |
| 0x78 | Anlernvorgang läuft - Position 120 |
| 0x79 | Anlernvorgang läuft - Position 121 |
| 0x7A | Anlernvorgang läuft - Position 122 |
| 0x7B | Anlernvorgang läuft - Position 123 |
| 0x7C | Anlernvorgang läuft - Position 124 |
| 0x7D | Anlernvorgang läuft - Position 125 |
| 0x7E | Anlernvorgang läuft - Position 126 |
| 0x7F | Anlernvorgang läuft - Position 127 |
| 0x80 | Anlernvorgang läuft - Position 128 |
| 0x81 | Anlernvorgang läuft - Position 129 |
| 0x82 | Anlernvorgang läuft - Position 130 |
| 0x83 | Anlernvorgang läuft - Position 131 |
| 0x84 | Anlernvorgang läuft - Position 132 |
| 0x85 | Anlernvorgang läuft - Position 133 |
| 0x86 | Anlernvorgang läuft - Position 134 |
| 0x87 | Anlernvorgang läuft - Position 135 |
| 0x88 | Anlernvorgang läuft - Position 136 |
| 0x89 | Anlernvorgang läuft - Position 137 |
| 0x8A | Anlernvorgang läuft - Position 138 |
| 0x8B | Anlernvorgang läuft - Position 139 |
| 0x8C | Anlernvorgang läuft - Position 140 |
| 0x8D | Anlernvorgang läuft - Position 141 |
| 0x8E | Anlernvorgang läuft - Position 142 |
| 0x8F | Anlernvorgang läuft - Position 143 |
| 0x90 | Anlernvorgang läuft - Position 144 |
| 0x91 | Anlernvorgang läuft - Position 145 |
| 0x92 | Anlernvorgang läuft - Position 146 |
| 0x93 | Anlernvorgang läuft - Position 147 |
| 0x94 | Anlernvorgang läuft - Position 148 |
| 0x95 | Anlernvorgang läuft - Position 149 |
| 0x96 | Anlernvorgang läuft - Position 150 |
| 0x97 | Anlernvorgang läuft - Position 151 |
| 0x98 | Anlernvorgang läuft - Position 152 |
| 0x99 | Anlernvorgang läuft - Position 153 |
| 0x9A | Anlernvorgang läuft - Position 154 |
| 0x9B | Anlernvorgang läuft - Position 155 |
| 0x9C | Anlernvorgang läuft - Position 156 |
| 0x9D | Anlernvorgang läuft - Position 157 |
| 0x9E | Anlernvorgang läuft - Position 158 |
| 0x9F | Anlernvorgang läuft - Position 159 |
| 0xA0 | Anlernvorgang läuft - Position 160 |
| 0xA1 | Anlernvorgang läuft - Position 161 |
| 0xA2 | Anlernvorgang läuft - Position 162 |
| 0xA3 | Anlernvorgang läuft - Position 163 |
| 0xA4 | Anlernvorgang läuft - Position 164 |
| 0xA5 | Anlernvorgang läuft - Position 165 |
| 0xA6 | Anlernvorgang läuft - Position 166 |
| 0xA7 | Anlernvorgang läuft - Position 167 |
| 0xA8 | Anlernvorgang läuft - Position 168 |
| 0xA9 | Anlernvorgang läuft - Position 169 |
| 0xAA | Anlernvorgang läuft - Position 170 |
| 0xAB | Anlernvorgang läuft - Position 171 |
| 0xAC | Anlernvorgang läuft - Position 172 |
| 0xAD | Anlernvorgang läuft - Position 173 |
| 0xAE | Anlernvorgang läuft - Position 174 |
| 0xAF | Anlernvorgang läuft - Position 175 |
| 0xB0 | Anlernvorgang läuft - Position 176 |
| 0xB1 | Anlernvorgang läuft - Position 177 |
| 0xB2 | Anlernvorgang läuft - Position 178 |
| 0xB3 | Anlernvorgang läuft - Position 179 |
| 0xB4 | Anlernvorgang läuft - Position 180 |
| 0xB5 | Anlernvorgang läuft - Position 181 |
| 0xB6 | Anlernvorgang läuft - Position 182 |
| 0xB7 | Anlernvorgang läuft - Position 183 |
| 0xB8 | Anlernvorgang läuft - Position 184 |
| 0xB9 | Anlernvorgang läuft - Position 185 |
| 0xBA | Anlernvorgang läuft - Position 186 |
| 0xBB | Anlernvorgang läuft - Position 187 |
| 0xBC | Anlernvorgang läuft - Position 188 |
| 0xBD | Anlernvorgang läuft - Position 189 |
| 0xBE | Anlernvorgang läuft - Position 190 |
| 0xBF | Anlernvorgang läuft - Position 191 |
| 0xC0 | Anlernvorgang läuft - Position 192 |
| 0xC1 | Anlernvorgang läuft - Position 193 |
| 0xC2 | Anlernvorgang läuft - Position 194 |
| 0xC3 | Anlernvorgang läuft - Position 195 |
| 0xC4 | Anlernvorgang läuft - Position 196 |
| 0xC5 | Anlernvorgang läuft - Position 197 |
| 0xC6 | Anlernvorgang läuft - Position 198 |
| 0xC7 | Anlernvorgang läuft - Position 199 |
| 0xC8 | Anlernvorgang läuft - Position 200 |
| 0xC9 | Anlernvorgang läuft - Position 201 |
| 0xCA | Anlernvorgang läuft - Position 202 |
| 0xCB | Anlernvorgang läuft - Position 203 |
| 0xCC | Anlernvorgang läuft - Position 204 |
| 0xCD | Anlernvorgang läuft - Position 205 |
| 0xCE | Anlernvorgang läuft - Position 206 |
| 0xCF | Anlernvorgang läuft - Position 207 |
| 0xD0 | Anlernvorgang läuft - Position 208 |
| 0xD1 | Anlernvorgang läuft - Position 209 |
| 0xD2 | Anlernvorgang läuft - Position 210 |
| 0xD3 | Anlernvorgang läuft - Position 211 |
| 0xD4 | Anlernvorgang läuft - Position 212 |
| 0xD5 | Anlernvorgang läuft - Position 213 |
| 0xD6 | Anlernvorgang läuft - Position 214 |
| 0xD7 | Anlernvorgang läuft - Position 215 |
| 0xD8 | Anlernvorgang läuft - Position 216 |
| 0xD9 | Anlernvorgang läuft - Position 217 |
| 0xDA | Anlernvorgang läuft - Position 218 |
| 0xDB | Anlernvorgang läuft - Position 219 |
| 0xDC | Anlernvorgang läuft - Position 220 |
| 0xDD | Anlernvorgang läuft - Position 221 |
| 0xDE | Anlernvorgang läuft - Position 222 |
| 0xDF | Anlernvorgang läuft - Position 223 |
| 0xE0 | Anlernvorgang läuft - Position 224 |
| 0xE1 | Anlernvorgang läuft - Position 225 |
| 0xE2 | Anlernvorgang läuft - Position 226 |
| 0xE3 | Anlernvorgang läuft - Position 227 |
| 0xE4 | Anlernvorgang läuft - Position 228 |
| 0xE5 | Anlernvorgang läuft - Position 229 |
| 0xE6 | Anlernvorgang läuft - Position 230 |
| 0xE7 | Anlernvorgang läuft - Position 231 |
| 0xE8 | Anlernvorgang läuft - Position 232 |
| 0xE9 | Anlernvorgang läuft - Position 233 |
| 0xEA | Anlernvorgang läuft - Position 234 |
| 0xEB | Anlernvorgang läuft - Position 235 |
| 0xEC | Anlernvorgang läuft - Position 236 |
| 0xED | Anlernvorgang läuft - Position 237 |
| 0xEE | Anlernvorgang läuft - Position 238 |
| 0xEF | Anlernvorgang läuft - Position 239 |
| 0xF0 | Anlernvorgang läuft - Position 240 |
| 0xF1 | Anlernvorgang läuft - Position 241 |
| 0xF2 | Anlernvorgang läuft - Position 242 |
| 0xF3 | Anlernvorgang läuft - Position 243 |
| 0xF4 | Anlernvorgang läuft - Position 244 |
| 0xF5 | Anlernvorgang läuft - Position 245 |
| 0xF6 | Anlernvorgang läuft - Position 246 |
| 0xF7 | Anlernvorgang läuft - Position 247 |
| 0xF8 | Anlernvorgang läuft - Position 248 |
| 0xF9 | Anlernvorgang läuft - Position 249 |
| 0xFA | Anlernvorgang läuft - Position 250 |
| 0xFB | Anlernvorgang läuft - Position 251 |
| 0xFC | Anlernvorgang läuft - Position 252 |
| 0xFD | Anlernvorgang läuft - Position 253 |
| 0xFE | Start Anlernvorgang |
| 0xFF | Default / nicht angelernt |

### TAB_IM_LOCKED_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Unverriegelt |
| 0x01 | Verriegelt |
| 0x02 | Effektiv verriegelt, da inkonsistent |
| 0xFF | Wert ungültig |

### TAB_IM_OP_MODE1

| WERT | TEXT |
| --- | --- |
| 110 | LOCK_TRANSPORT |
| 120 | LOCK_BASE |
| 130 | LOCK_SERVER |
| 210 | DEACTIVATE_E5 |

### TAB_IM_OP_MODE2

| WERT | TEXT |
| --- | --- |
| 145 | LOCK_TRANSPORT |
| 135 | LOCK_BASE |
| 125 | LOCK_SERVER |
| 45 | DEACTIVATE_E5 |

### TAB_IM_PIA_NUMMER

| WERT | TEXT |
| --- | --- |
| 0x00 | Personalisierungskonfiguration 0 |
| 0x01 | Personalisierungskonfiguration 1 |
| 0x02 | Personalisierungskonfiguration 2 |
| 0x0A | Gast (nur für einige Status-Jobs) |
| 0x0F | Keine Personalisierung zugewiesen - unpersonalisiertes Profil |
| 0xFF | ungültiger Wert |

### TAB_IM_PIA_NUMMER_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | PIA_CONF_0 |
| 0x01 | PIA_CONF_1 |
| 0x02 | PIA_CONF_2 |
| 0x0A | GUEST |
| 0x0F | NO_PROFIL |

### TAB_IM_PRNG_STATE

| WERT | TEXT |
| --- | --- |
| 0 | PRNG nicht initialisiert |
| 1 | PRNG initialisierung läuft |
| 2 | PRNG initialisiert |
| 0xFF | ungültig |

### TAB_IM_PROFILE_UPD

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Update / NA (z.B. bei unbekanntem Transponder) |
| 0x01 | Update läuft |
| 0x02 | Update erfolgreich durchgeführt - Daten erfolgreich übertragen |
| 0x03 | Update erfolgreich durchgeführt - keine Änderung notwendig |
| 0x10 | Update nicht möglich (z.B. Kommunikationsfehler) |
| 0xFF | ungültiger Wert |

### TAB_IM_RESET_MODE_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | IM |
| 0x03 | IM_VIN |
| 0x07 | IM_VIN_CONF |
| 0x3F | ALL |
| 0xFF | ALL_EXT |

### TAB_IM_SA_ACT

| WERT | TEXT |
| --- | --- |
| 0x00 | ungültig |
| 0x01 | nicht aktiviert, keine Aktivierungsoption |
| 0x02 | nicht aktiviert, Aktivierungsoption IDG/MSD |
| 0x03 | nicht aktiviert, Aktivierungsoption IDG/MSD oder PinTan |
| 0x08 | aktiviert über IDG |
| 0x09 | aktiviert über MSD |
| 0x0A | aktiviert über Pin/Tan |
| 0x0B | Direkt Phone 2 Phone |
| 0x0C | Direkt Ersatz |
| 0xFF | Wert ungültig |

### TAB_IM_SA_KEY_TERM

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht zutreffend |
| 0x01 | Pre Extension |
| 0x02 | Extended |
| 0x03 | Pre Deletion |
| 0xFF | Wert ungültig |

### TAB_IM_SERVER_LOCK_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Server gesperrt |
| 0x01 | Server entsperrt |
| 0x02 | Schlüsselsuche läuft |
| 0xFF | Ungültiger Wert |

### TAB_IM_SMACC_ACTIVATION

| WERT | TEXT |
| --- | --- |
| 0x00 | not activated (can be activated by IDG/Master Device) |
| 0x01 | not activated (can be activated by IDG/MasterDevice or Pin/TAN) |
| 0x10 | activated |
| 0xFF | Wert ungültig |

### TAB_IM_SMACC_SUBTYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | Master Key |
| 0x01 | Slave Key |
| 0xFF | Wert ungültig |

### TAB_IM_TRSP_COM_ERROR

| WERT | TEXT |
| --- | --- |
| 0x00 | ERR_OK - kein Fehler |
| 0x01 | ERR_BASESTATION - Kommunikation mit ATIC164 gestört oder Ressource anderweitig belegt |
| 0x02 | ERR_ANTENNA - Antenne Kurzschluss oder Leitungsunterbrechung |
| 0x03 | ERR_TXINT - Tx Interrupt abgeschaltet, unspezifischer Kommunikationsfehler |
| 0x04 | ERR_RD_IDE - keine IDE vom Transponder empfangen |
| 0x05 | ERR_RD_RISC_EN - nicht unterstützt, nur HITAG2 |
| 0x06 | ERR_HTPRO_CFG - Fehler beim Übergang WAIT => CFG |
| 0x07 | ERR_HTPRO_PLAIN - Fehler beim Übergang WAIT => PLAIN |
| 0x08 | ERR_HTP_AUTH_TSI - Fehler beim TSI Empfang |
| 0x09 | ERR_HTP_AUTH_RESP - Fehler beim Empfang der Response während der Authentisierung |
| 0x0A | ERR_HTP_RDPG_PLAIN - Fehler beim Lesen einer Page in PLAIN |
| 0x0B | ERR_HTP_WRPG_PLAIN - Fehler beim Schreiben einer Page in PLAIN |
| 0x0C | ERR_HTP_RDBY_PLAIN - Fehler beim Lesen eines Bytes in PLAIN |
| 0x0D | ERR_HTP_WRBY_PLAIN - Fehler beim Schreiben eines Bytes in PLAIN |
| 0x0E | ERR_HTP_SELB_PLAIN - Fehler Block Select in PLAIN |
| 0x0F | ERR_HTP_RDPG_CFG - Fehler beim Lesen einer Page in CFG |
| 0x10 | ERR_HTP_WRPG_CFG - Fehler beim Schreiben einer Page in CFG |
| 0x11 | ERR_HTP_RDBY_CFG - Fehler beim Lesen eines Bytes in CFG |
| 0x12 | ERR_HTP_WRBY_CFG - Fehler beim Schreiben eines Bytes in CFG |
| 0x13 | ERR_HTP_RDPG_CIPHER - Fehler beim Lesen einer Page in CIPHER |
| 0x14 | ERR_HTP_WRPG_CIPHER - Fehler beim Schreiben einer Page in CIPHER |
| 0x15 | ERR_HTP_RDBY_CIPHER - Fehler beim Lesen eines Bytes in CIPHER |
| 0x16 | ERR_HTP_WRBY_CIPHER - Fehler beim Schreiben eines Bytes in CIPHER |
| 0x17 | ERR_HTP_SELB_CIPHER - Fehler Block Select in CIPHER |
| 0xFF | ungültiger Wert |

### TAB_IM_TRSP_GEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Reserviert |
| 0x01 | HT2: HiTag2 (NOT_SUPPORTED_ANYMORE) |
| 0x02 | HTP1: HTPro Gen 1 (L6 bis einschl. SOP 2013) RüKo |
| 0x08 | HTP2: (DEFAULT) HTPro Gen 2 (Ab 35UP) |
| 0x10 | ungültig (noch nicht gesetzt) |

### TAB_IM_TRSP_GEN_ARG

| WERT | TEXT |
| --- | --- |
| 0x02 | HTP1 |
| 0x08 | HTP2 |

### TAB_IM_TRSP_INIT_MODE

| WERT | TEXT |
| --- | --- |
| 1 | NORMAL |
| 0 | DEVELOPMENT |
| 100 | FORCE_REREAD |
| 200 | SPECIAL_EMV_ON |
| 201 | SPECIAL_EMV_OFF |

### TAB_IM_TRSP_INTERFACE

| WERT | TEXT |
| --- | --- |
| 0x00 | CG-Antenne |
| 0x01 | TRSP-Spule |
| 0xFF | ungültiger Wert |

### TAB_IM_TRSP_READ

| WERT | TEXT |
| --- | --- |
| 0x00 | NA (z.B. bei unbekannter Transponderkonfiguration oder kein Transponder) |
| 0x01 | Read läuft |
| 0x02 | Read erfolgreich durchgeführt |
| 0x10 | Read nicht möglich (z.B. Kommunikationsfehler) |
| 0xFF | ungültiger Wert |

### TAB_IM_WRITE_MODE

| WERT | TEXT |
| --- | --- |
| 1 | Direktschreiben des SecretKey (L2, L3, L4) |
| 2 | Direktschreiben des SecretKey (L6) |
| 3 | Direktschreiben des SecretKey  |
| 10 | 35UP initial |
| 0xFF | Wert ungültig |

### TAB_INNENLICHT

| WERT | TEXT |
| --- | --- |
| 38 | INNENLICHT_WBL_LED |
| 39 | INNENLICHT_LCI_0 |
| 40 | INNENLICHT_LCI_1 |
| 41 | INNENLICHT_LCI_2 |
| 42 | INNENLICHT_LCI_3 |
| 43 | INNENLICHT_LCI_4 |
| 44 | INNENLICHT_LCI_5 |
| 45 | INNENLICHT_LCI_6 |
| 46 | INNENLICHT_LCI_7 |
| 47 | INNENLICHT_LCI_8 |
| 66 | SPECIAL_FUNCTION_LED |
| 67 | MSA_LED |
| 68 | SST_LED |

### TAB_INNENLICHT_DIGITAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht ok |
| 0x01 | Ok |
| 0xFF | Wert ungültig / Nicht verbaut |

### TAB_INNENLICHT_FUNKTIONSMODI

| WERT | TEXT |
| --- | --- |
| 0x01 | Vof_1SR_Fahrer - Kommunikationslicht |
| 0x02 | Vof_1SR_Fahrer - Innenlicht |
| 0x03 | Vof_1SR_Beifahrer - Kommunikationslicht |
| 0x04 | Vof_1SR_Beifahrer - Innenlicht |
| 0x05 | Vof_1SR_Mitte - Kommunikationslicht |
| 0x06 | Vof_1SR_Mitte - Innenlicht |
| 0x07 | Vof_2SR_Fahrer - Kommunikationslicht |
| 0x08 | Vof_2SR_Fahrer - Innenlicht |
| 0x09 | Vof_2SR_Beifahrer - Kommunikationslicht |
| 0x0A | Vof_2SR_Beifahrer - Innenlicht |
| 0x0B | Vof_2SR_Mitte - Kommunikationslicht |
| 0x0C | Vof_2SR_Mitte - Innenlicht |
| 0x0D | Vof_3SR_Fahrer - Kommunikationslicht |
| 0x0E | Vof_3SR_Fahrer - Innenlicht |
| 0x0F | Vof_3SR_Beifahrer - Kommunikationslicht |
| 0x10 | Vof_3SR_Beifahrer - Innenlicht |
| 0x11 | Vof_1SR_FRL - Innenlicht |
| 0x12 | Vof_2SR_FRL - Innenlicht |
| 0x13 | nicht benutzt |
| 0x14 | nicht benutzt |
| 0x15 | nicht benutzt |
| 0x16 | nicht benutzt |
| 0x17 | nicht benutzt |
| 0x18 | nicht benutzt |
| 0x19 | nicht benutzt |
| 0x1A | nicht benutzt |
| 0x1B | nicht benutzt |
| 0x1C | Ambient Light - On |
| 0x1D | Light Sword - On |
| 0x1E | Trunk substitute light - On |
| 0x1F | Incoming Call - On |
| 0x20 | Welcome Approaching Light - On |
| 0x21 | Welcome Unlock -On |
| 0x22 | Goodbye |
| 0x23 | Open Door Warning Driver 1SR - On |
| 0x24 | Open Door Warning Driver 2SR - On |
| 0x25 | Open Door Warning Passenger 1SR - On |
| 0x26 | Open Door Warning Passenger 2SR - On |
| 0x27 | Emergency Stop - HardOn |

### TAB_INNENLICHT_ILE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | ILE_1 |
| 0x01 | ILE_2 |
| 0x02 | ILE_3 |
| 0x03 | ILE_4 |
| 0x04 | ILE_5 |

### TAB_INNENLICHT_VERBAUORT_LIN

| WERT | TEXT |
| --- | --- |
| 0x01 | Innenbeleuchtung Fußraum Fahrer vorne |
| 0x02 | Innenbeleuchtung Fußraum Fahrer hinten |
| 0x03 | Innenbeleuchtung Fußraum Beifahrer vorne |
| 0x04 | Innenbeleuchtung Fußraum Beifahrer hinten |
| 0x05 | Innenbeleuchtung Konturlinie Fahrertür vorne |
| 0x06 | Innenbeleuchtung Dekor indirekt Fahrertür vorne |
| 0x07 | Innenbeleuchtung Türöffner Fahrertür vorne |
| 0x08 | Innenbeleuchtung Kartentasche Fahrertür vorne |
| 0x09 | Innenbeleuchtung Konturlinie Fahrertür hinten |
| 0x0A | Innenbeleuchtung Dekor indirekt Fahrertür hinten |
| 0x0B | Innenbeleuchtung Kartentasche Fahrertür hinten |
| 0x0C | Innenbeleuchtung Konturlinie Beifahrertür vorne |
| 0x0D | Innenbeleuchtung Dekor indirekt Beifahrertür vorne |
| 0x0E | Innenbeleuchtung Türöffner Beifahrertür vorne |
| 0x0F | Innenbeleuchtung Kartentasche Beifahrertür vorne |
| 0x10 | Innenbeleuchtung Konturlinie Beifahrertür hinten |
| 0x11 | Innenbeleuchtung Dekor indirekt Beifahrertür hinten |
| 0x12 | Innenbeleuchtung Kartentasche Beifahrertür hinten |
| 0x13 | Innenbeleuchtung Konturlinie I-Tafel Fahrer |
| 0x14 | Innenbeleuchtung Dekor indirekt I-Tafel Fahrer |
| 0x15 | Innenbeleuchtung Konturlinie I-Tafel Mitte |
| 0x16 | Innenbeleuchtung Dekor indirekt I-Tafel Mitte |
| 0x17 | Innenbeleuchtung Konturlinie I-Tafel Beifahrer |
| 0x18 | Innenbeleuchtung Dekor indirekt I-Tafel Beifahrer |
| 0x19 | Innenbeleuchtung B-Säule Fahrer |
| 0x1A | Innenbeleuchtung B-Säule Beifahrer |
| 0x1B | Innenbeleuchtung Backpanel Fahrersitz |
| 0x1C | Innenbeleuchtung Backpanel Beifahrersitz |
| 0x1D | Innenbeleuchtung Centerstack Ablagefach |
| 0x1E | Innenbeleuchtung Mittelkonsole Ablagefach |
| 0x1F | Innenbeleuchtung Gangwahlschalter links |
| 0x20 | Innenbeleuchtung Gangwahlschalter rechts |
| 0x21 | Innenbeleuchtung Türöffner Fahrertür hinten |
| 0x22 | Innenbeleuchtung Türöffner Beifahrertür hinten |
| 0x23 | Innenbeleuchtung Fußraum Fahrer 3SR |
| 0x24 | Innenbeleuchtung Fußraum Beifahrer 3SR |
| 0x25 | Innenbeleuchtung Kartentasche Fahrertür 3SR |
| 0x26 | Innenbeleuchtung Kartentasche Beifahrertür 3SR |
| 0x27 | Innenbeleuchtung Konturlinie Fahrertür 3SR |
| 0x28 | Innenbeleuchtung Konturlinie Beifahrertür 3SR |
| 0x29 | Innenbeleuchtung Dekor indirekt Fahrertür 3SR |
| 0x2A | Innenbeleuchtung Dekor indirekt Beifahrertür 3SR |
| 0x2B | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer vorne |
| 0x2C | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer hinten |
| 0x2D | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer vorne |
| 0x2E | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer hinten |
| 0x2F | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer vorne |
| 0x30 | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer hinten |
| 0x31 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer vorne |
| 0x32 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer hinten |
| 0x33 | Innenbeleuchtung Backpanel Fahrersitz 2SR |
| 0x34 | Innenbeleuchtung Backpanel Beifahrersitz 2SR |
| 0x35 | Innenbeleuchtung Panoramadach Glasdeckel front links vorne |
| 0x36 | Innenbeleuchtung Panoramadach Glasdeckel front links hinten |
| 0x37 | Innenbeleuchtung Panoramadach Glasdeckel front rechts vorne |
| 0x38 | Innenbeleuchtung Panoramadach Glasdeckel front rechts hinten |
| 0x39 | Innenbeleuchtung Panoramadach Glasdeckel fond links vorne |
| 0x3A | Innenbeleuchtung Panoramadach Glasdeckel fond links hinten |
| 0x3B | Innenbeleuchtung Panoramadach Glasdeckel fond rechts vorne |
| 0x3C | Innenbeleuchtung Panoramadach Glasdeckel fond rechts hinten |
| 0x3D | Innenbeleuchtung Lichtschwert links |
| 0x3E | Innenbeleuchtung Lichtschwert rechts |
| 0x3F | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne vorne |
| 0x40 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne hinten |
| 0x41 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten vorne |
| 0x42 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten hinten |
| 0x43 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne vorne |
| 0x44 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne hinten |
| 0x45 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten vorne |
| 0x46 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten hinten |
| 0x47 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer vorne |
| 0x48 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer hinten |
| 0x49 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer vorne |
| 0x4A | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer hinten |
| 0x4B | Innenbeleuchtung Cupholder vorne |
| 0x4C | Innenbeleuchtung Cupholder hinten |
| 0xFF | Wert ungültig |

### TAB_INTERNER_FEHLER

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler Keine Beschreibung vorhanden |
| 1 | RAM-Fehler Keine Beschreibung vorhanden |
| 2 | ROM-Fehler Keine Beschreibung vorhanden |
| 3 | Flash-Fehler Keine Beschreibung vorhanden |
| 4 | Fehler 4 aktiv Keine Beschreibung vorhanden |
| 5 | Fehler 5 aktiv Keine Beschreibung vorhanden |
| 6 | Fehler 6 aktiv Keine Beschreibung vorhanden |
| 7 | Signal ungültig Keine Beschreibung vorhanden |

### TAB_ISV_RELAY

| WERT | TEXT |
| --- | --- |
| 0x00 | Relais ausgeschaltet |
| 0x01 | Relais eingeschaltet |
| 0x02 | Relais nicht verbaut/diagnostiziert |
| 0xFF | ungültiger Wert |

### TAB_JTAG_LOCK_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | LOCK_SERIAL |
| 0x01 | LOCK_DEVELOPMENT |

### TAB_KEYSEARCHMODE

| WERT | TEXT |
| --- | --- |
| 0x03 | SEARCHMODE_CE_DRD |
| 0x04 | SEARCHMODE_CE_DRDR |
| 0x05 | SEARCHMODE_CE_PSD |
| 0x06 | SEARCHMODE_CE_PSDR |
| 0x07 | SEARCHMODE_TRUNK_OUTER |
| 0x0D | SEARCHMODE_TRUNK_INNER |
| 0x0E | SEARCHMODE_CG_FRONT |
| 0x0F | SEARCHMODE_CG_MIDDLE |
| 0x10 | SEARCHMODE_CG_REAR |
| 0x11 | SEARCHMODE_TRUNK_INNER_LEFT |
| 0x12 | SEARCHMODE_TRUNK_INNER_RIGHT |
| 0x15 | SEARCHMODE_COMPARTMENT |
| 0x16 | SEARCHMODE_TRUNK_OUTER_INNER |
| 0x18 | SEARCHMODE_FRONT_OUTER_INNER |
| 0x19 | SEARCHMODE_COMPARTMENT_BUMPER |
| 0x1A | SEARCHMODE_BUMPER |
| 0x1B | SEARCHMODE_CAR_LOWERING |
| 0x20 | SEARCHMODE_TRANSPORT_MODE |
| 0x21 | SEARCHMODE_SLEEP_RESPONSE_PING |
| 0x22 | SEARCHMODE_COMPARTMENT_TRUNK |
| 0x28 | SEARCHMODE_CKT_MOTION_SENSOR_CONFIG |
| 0x80 | SEARCHMODE_PING |
| 0x81 | SEARCHMODE_SD |
| 0x8D | SEARCHMODE_CKT_AUTH |
| 0x8E | SEARCHMODE_CASS_DIAG |
| 0x90 | SEARCHMODE_WEL_CKT_SHORT_WUP |
| 0x91 | SEARCHMODE_APU_CKT_SHORT_WUP |
| 0x92 | SEARCHMODE_WAL_CKT_SHORT_WUP |
| 0x93 | SEARCHMODE_PREAUTH_CKT_SHORT_WUP |
| 0x94 | SEARCHMODE_COMPARTMENT_FIND_ALL_IDG |

### TAB_KLAPPENKONTAKT_NICHT_DIAGNOSEFAEHIG

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Geöffnet |
| 0x0FD | Nicht kodiert |
| 0xFF | ungültiger Wert |

### TAB_KLEMMEN_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0 | Kein Hinderungsgrund vorliegend |
| 1 | Aktueller Schlüssel nicht gültig |
| 2 | Stillstand nicht erkannt (Signal DVCO_VEH) und kein Fe-Mode [für use-case Diagnose] |
| 3 | Geschwindigkeit superior als 10km/h nicht erkannt (Signal V_VEH_COG) [für use-case SST] |
| 4 | Geschwindigkeit superior als 10km/h ungültig (Signale V_VEH_COG/QU_V_VEH_COG)[für use-case SST] |
| 5 | Bremse nicht gedrückt |
| 7 | Kupplung nicht gedrückt |
| 9 | Keine Freigabe durch DME (ST_DRVG_RDI_DRV ungleich Keine Fahrbereitschaft in KL15-Ein) |
| 13 | Montagemodus aktiv |
| 16 | KL30B ein (ST_KL: 0x6...0xD) |
| 17 | Parklicht ein (ST_PLI_LH:  0x1, ein oder ST_PLI_RH:  0x1, ein) |
| 18 | Standlicht ein (ST_POLI:  0x1, ein) |
| 19 | Warnblinken ein (ST_IDC: 0x3, Beide Blinker ein) |
| 20 | Aktiver Notruf (ECAL_ACV: 0x1, Notruf aktiv) oder Notruf im Standby (ECAL_STDBY: 0x1 Standby ein) |
| 21 | KL30F über Dienstnachricht mit Attribut -gesetzlich- angefordet - wird im BDC2015 nicht verwendet |
| 22 | Ladekabel gesteckt |
| 255 | Unbekannt/Ungültig |

### TAB_KLEMMEN_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung |
| 0x02 | KL30 : Alle Klemmen aus |
| 0x04 | KL30F |
| 0x06 | KL30B |
| 0x09 | KL15-Änderung |
| 0x0A | KL15 |
| 0x0D | KL50 |
| 0x0E | Fehler |
| 0x0F | ungültiger Signal |
| 0xFF | Wert ungültig |

### TAB_KLEMMEN_ZUSTAND_ARG

| WERT | TEXT |
| --- | --- |
| 0x04 | KL30F_ON |
| 0x06 | KL30B_ON |
| 0x08 | KLR_ON |
| 0x0A | KL15_ON |
| 0x10 | KL30B_ON_SHORT |

### TAB_KOMPASS_LENKUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Rechtslenker |
| 0x01 | Linkslenker |
| 0xFF | ungültiger Wert |

### TAB_KOMPASS_MAGNETZONE

| WERT | TEXT |
| --- | --- |
| 0x00 | Zone 0 |
| 0x01 | Zone 1 |
| 0x02 | Zone 2 |
| 0x03 | Zone 3 |
| 0x04 | Zone 4 |
| 0x05 | Zone 5 |
| 0x06 | Zone 6 |
| 0x07 | Zone 7 |
| 0x08 | Zone 8 |
| 0x09 | Zone 9 |
| 0x0A | Zone 10 |
| 0x0B | Zone  11 |
| 0x0C | Zone 12 |
| 0x0D | Zone 13 |
| 0x0E | Zone 14 |
| 0x0F | Zone 15 |
| 0xFF | ungültiger Wert |

### TAB_KOMPASS_SPRACHE

| WERT | TEXT |
| --- | --- |
| 0x00 | Sprache Englisch |
| 0x01 | Sprache Deutsch |

### TAB_KONTAKT_TUER_HW

| WERT | TEXT |
| --- | --- |
| 0x00 | Leintungsbruch / Kurzschluss nach Batteriespannung |
| 0x02 | Tür geschlossen |
| 0x04 | Tür offen |
| 0x06 | Kurzschluss nach Masse |
| 0x08 | Kontakt nicht verbaut |
| 0xFF | ungültig / unplausibel / unbekannt |

### TAB_KONTAKT_TUER_HW_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | INACTIVE |
| 0x01 | ACTIVE |
| 0x02 | DOOR_CLOSED |
| 0x04 | DOOR_OPEN |

### TAB_LAMP_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | LMPMGR_LAMP_ID_AlL |
| 0x01 | LMPMGR_LAMP_ID_AlR |
| 0x02 | LMPMGR_LAMP_ID_TflL |
| 0x03 | LMPMGR_LAMP_ID_TflR |
| 0x04 | LMPMGR_LAMP_ID_FlL |
| 0x05 | LMPMGR_LAMP_ID_FlR |
| 0x06 | LMPMGR_LAMP_ID_PolL |
| 0x07 | LMPMGR_LAMP_ID_PolR |
| 0x08 | LMPMGR_LAMP_ID_NswL |
| 0x09 | LMPMGR_LAMP_ID_NswR |
| 0x0A | LMPMGR_LAMP_ID_FraVL |
| 0x0B | LMPMGR_LAMP_ID_FraVR |
| 0x0C | LMPMGR_LAMP_ID_SmlL |
| 0x0D | LMPMGR_LAMP_ID_SmlR |
| 0x0E | LMPMGR_LAMP_ID_FraZL |
| 0x0F | LMPMGR_LAMP_ID_FraZR |
| 0x10 | LMPMGR_LAMP_ID_BixL |
| 0x11 | LMPMGR_LAMP_ID_BixR |
| 0x12 | LMPMGR_LAMP_ID_SlL |
| 0x13 | LMPMGR_LAMP_ID_SlR |
| 0x14 | LMPMGR_LAMP_ID_Sl2L |
| 0x15 | LMPMGR_LAMP_ID_Sl2R |
| 0x16 | LMPMGR_LAMP_ID_BlL |
| 0x17 | LMPMGR_LAMP_ID_BlR |
| 0x18 | LMPMGR_LAMP_ID_BfdL |
| 0x19 | LMPMGR_LAMP_ID_BfdR |
| 0x1A | LMPMGR_LAMP_ID_NslL |
| 0x1B | LMPMGR_LAMP_ID_NslR |
| 0x1C | LMPMGR_LAMP_ID_RfsL |
| 0x1D | LMPMGR_LAMP_ID_RfsR |
| 0x1E | LMPMGR_LAMP_ID_FraHL |
| 0x1F | LMPMGR_LAMP_ID_FraHR |
| 0x20 | LMPMGR_LAMP_ID_Kzl |
| 0x21 | LMPMGR_LAMP_ID_BlM |
| 0x22 | LMPMGR_LAMP_ID_LC_R0 |
| 0x23 | LMPMGR_LAMP_ID_LC_R1 |
| 0x24 | LMPMGR_LAMP_ID_LC_R2 |
| 0x25 | LMPMGR_LAMP_ID_LC_R3 |
| 0x26 | LMPMGR_LAMP_ID_Lci0 |
| 0x27 | LMPMGR_LAMP_ID_Lci1 |
| 0x28 | LMPMGR_LAMP_ID_Lci2 |
| 0x29 | LMPMGR_LAMP_ID_Lci3 |
| 0x2A | LMPMGR_LAMP_ID_Lci4 |
| 0x2B | LMPMGR_LAMP_ID_Lci5 |
| 0x2C | LMPMGR_LAMP_ID_Lci6 |
| 0x2D | LMPMGR_LAMP_ID_Lci7 |
| 0x2E | LMPMGR_LAMP_ID_Lci8 |
| 0x2F | LMPMGR_LAMP_ID_LciSpecial1 |
| 0x30 | LMPMGR_LAMP_ID_WblLed |
| 0x31 | LMPMGR_LAMP_ID_SstLed |
| 0x32 | LMPMGR_LAMP_ID_MsaLed |
| 0x33 | LMPMGR_LAMP_ID_PdcLed |
| 0x34 | LMPMGR_LAMP_ID_HdcLed |
| 0xFF | Wert ungültig |

### TAB_LA_ERRORBITS

| WERT | TEXT |
| --- | --- |
| 0 | CONST_SM_ERROR_NO_ERROR |
| 1 | CONST_SM_ERROR_LEFT |
| 2 | CONST_SM_ERROR_RIGHT |
| 3 | CONST_SM_ERROR_BOTH_SIDES |
| 4 | CONST_SM_ERROR_HOR |
| 8 | CONST_SM_ERROR_VERT |
| 16 | CONST_SM_ERROR_FRONT |
| 32 | CONST_SM_ERROR_REAR |
| 64 | CONST_SM_ERROR_DEPENDENT |
| 128 | CONST_SM_ERROR_TOTAL |
| 0xFF | Wert ungültig |

### TAB_LA_ERRORINFORMATION

| WERT | TEXT |
| --- | --- |
| 0x01 | dtcHeadlightRangeAdjustment |
| 0x02 | ccmHeadlightRangeAdjustment |
| 0x03 | dtcccmHeadlightRangeAdjustement |
| 0x04 | dtcDynamicLightFunctions |
| 0x08 | ccmDynamicLightFunctions |
| 0x0C | dtcccmDynamicLightFunctions |
| 0x10 | dtcThumbWheel |
| 0x20 | ccmThumbWheel |
| 0x30 | dtcccmThumbWheel |
| 0x40 | dtcLceMainBeamAssistFailed |
| 0x80 | ccmLceMainBeamAssistFailed |
| 0xC0 | dtcccmLceMainBeamAssistFailed |

### TAB_LA_FUNCTIONSTATE

| WERT | TEXT |
| --- | --- |
| 0 | FUNCTIONSTATE_OFF |
| 1 | FUNCTIONSTATE_DISABLED |
| 2 | FUNCTIONSTATE_INIT |
| 3 | FUNCTIONSTATE_STANDBY |
| 4 | FUNCTIONSTATE_ACTIVE |
| 5 | FUNCTIONSTATE_DIAG |
| 6 | FUNCTIONSTATE_ERROR |
| 0xFF | Wert ungültig |

### TAB_LENKRAD_M_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht gedrückt |
| 0x01 | Gedrückt |
| 0xFF | Ungültig / Nicht verbaut |

### TAB_LENKRAD_VIBRATION_STUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Schwach |
| 0x01 | Mittel |
| 0x02 | Stark |
| 0xFF | ungültiger Wert |

### TAB_LENKRAD_VIBRATION_STUFE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | WEAK |
| 0x01 | MIDDLE |
| 0x02 | STRONG |

### TAB_LENKSTOCK_WISCHER_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Lenkstock Wischer in Nullstellung |
| 0x01 | Lenkstock Wischer in Postion 1 |
| 0x02 | Lenkstock Wischer in Position 2 |
| 0xFF | Wert ungültig |

### TAB_LEUCHTEN_AUSGANG_DIGITAL_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | AL_L |
| 0x02 | AL_R |
| 0x03 | TFL_L |
| 0x04 | TFL_R |
| 0x05 | SML_L |
| 0x06 | SML_R |
| 0x07 | FL_L |
| 0x08 | FL_R |
| 0x09 | POL_L |
| 0x0A | POL_R |
| 0x0B | NSW_L |
| 0x0C | NSW_R |
| 0x0D | FRA_V_L |
| 0x0E | FRA_V_R |
| 0x10 | FRA_Z_L |
| 0x11 | FRA_Z_R |
| 0x14 | SL_L |
| 0x15 | SL_R |
| 0x16 | SL_2_L |
| 0x17 | SL_2_R |
| 0x18 | BL_L |
| 0x19 | BL_R |
| 0x1A | BFD_L |
| 0x1B | BFD_R |
| 0x1C | NSL_L |
| 0x1D | NSL_R |
| 0x1E | RFS_L |
| 0x1F | RFS_R |
| 0x20 | FRA_H_L |
| 0x21 | FRA_H_R |
| 0x22 | KZL |
| 0x23 | BL_M |
| 0x26 | WBL_LED |
| 0x27 | LCI_0 |
| 0x28 | LCI_1 |
| 0x29 | LCI_2 |
| 0x2A | LCI_3 |
| 0x2B | LCI_4 |
| 0x2C | LCI_5 |
| 0x2D | LCI_6 |
| 0x2E | LCI_7 |
| 0x2F | LCI_8 |
| 0x36 | LC_R0 |
| 0x37 | LC_R1 |
| 0x38 | LC_R2 |
| 0x39 | LC_R3 |
| 0x40 | PDC_LED |
| 0x41 | HDC_LED |
| 0x42 | SPECIAL_FUNCTION_1_LED |
| 0x43 | MSA_LED |
| 0x44 | SST_LED |
| 0xFE | ALL_OUTPUTS |

### TAB_LEUCHTEN_FUNKTION_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | SIDE_LIGHT |
| 0x02 | SIDE_LIGHT_ES |
| 0x03 | LOW_BEAM_LIGHT |
| 0x04 | DAY_DRIVING_LIGHT |
| 0x05 | HIGH_BEAM |
| 0x06 | INDICATOR_LIGHT_LEFT |
| 0x07 | INDICATOR_LIGHT_RIGHT |
| 0x08 | FOGLIGHT_FRONT |
| 0x09 | CORNERING_LIGHT_FRONT_LEFT |
| 0x0A | CORNERING_LIGHT_FRONT_RIGHT |
| 0x0C | BREAK_LIGHT |
| 0x0D | BFD_ESS |
| 0x0E | REAR_FOGLIGHT |
| 0x0F | REVERSING_LIGHT |
| 0x10 | PARKING_LIGHT_LEFT |
| 0x11 | PARKING_LIGHT_RIGHT |
| 0x12 | HAZARD_LIGHT |
| 0x15 | LOCATOR_AND_FUNCTIONAL_LIGHTING |
| 0x16 | FOLLOW_ME_HOME |
| 0x17 | ANNOUNCEMENT_INDICATOR_LIGHT |
| 0x18 | MANEUVRING_LIGHT |
| 0x19 | OVT |
| 0x1A | REMOTE_LIGHT |
| 0x1B | REVERSING_FLASH |
| 0x1C | SPECIAL_FUNCTION_FLASHING |
| 0x1D | WELCOME_LIGHT |
| 0x1E | GOODBYE_LIGHT |

### TAB_LEUCHTEN_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Überwachung nicht gestartet |
| 0x01 | Überwachung läuft |
| 0x02 | Überwachung ohne Fehler abgeschlossen |
| 0x03 | Überwachung mit Lampendefekten abgeschlossen |
| 0x04 | Fehler: nicht bereit |
| 0x05 | Fehler: Abbruch durch Benutzer |
| 0xFF | Ungültiger Wert |

### TAB_LICHT_AUSGANG_DIGITAL_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | AL_L |
| 0x02 | AL_R |
| 0x03 | TFL_L |
| 0x04 | TFL_R |
| 0x05 | SML_L |
| 0x06 | SML_R |
| 0x07 | FL_L |
| 0x08 | FL_R |
| 0x09 | POL_L |
| 0x0A | POL_R |
| 0x0B | NSW_L |
| 0x0C | NSW_R |
| 0x0D | FRA_V_L |
| 0x0E | FRA_V_R |
| 0x10 | FRA_Z_L |
| 0x11 | FRA_Z_R |
| 0x14 | SL_L |
| 0x15 | SL_R |
| 0x16 | SL_2_L |
| 0x17 | SL_2_R |
| 0x18 | BL_L |
| 0x19 | BL_R |
| 0x1A | BFD_L |
| 0x1B | BFD_R |
| 0x1C | NSL_L |
| 0x1D | NSL_R |
| 0x1E | RFS_L |
| 0x1F | RFS_R |
| 0x20 | FRA_H_L |
| 0x21 | FRA_H_R |
| 0x22 | KZL |
| 0x23 | BL_M |
| 0x26 | WBL_LED |
| 0x27 | LCI_0 |
| 0x28 | LCI_1 |
| 0x29 | LCI_2 |
| 0x2A | LCI_3 |
| 0x2B | LCI_4 |
| 0x2C | LCI_5 |
| 0x2D | LCI_6 |
| 0x2E | LCI_7 |
| 0x2F | LCI_8 |
| 0x36 | LC_R0 |
| 0x37 | LC_R1 |
| 0x38 | LC_R2 |
| 0x39 | LC_R3 |
| 0x40 | PDC_LED |
| 0x41 | HDC_LED |
| 0x42 | SPECIAL_FUNCTION_1_LED |
| 0xFE | ALL_OUTPUTS |

### TAB_LICHT_DIGITAL_LIN

| WERT | TEXT |
| --- | --- |
| 0x00 | LightsOff |
| 0x01 | LightsOn |
| 0xFFFF | Wert ungültig |

### TAB_LICHT_ENERGIE_BN

| WERT | TEXT |
| --- | --- |
| 0x01 | Standlicht |
| 0x02 | Parklicht |
| 0x03 | Parklicht und Standlicht |
| 0x04 | Warnblinken |
| 0x05 | Warnblinken und Standlicht |
| 0x06 | Warnblinken und Parklicht |
| 0x07 | Warnblinken, Standlicht und Parklicht |
| 0xFF | Ungültig |

### TAB_LICHT_FAHRLICHTSITUATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Vorgabe |
| 0x01 | Schlechtwetter C1 |
| 0x02 | Schlechtwetter C2 |
| 0x03 | Stadt V |
| 0x04 | Touristenmodus  SAE - Semi-Autonomes Einparkenv |
| 0x05 | H-10 Landstraßenlicht C |
| 0x06 | H-8 Autobahnlicht E3 |
| 0x07 | H-6 Autobahnlicht E2 |
| 0x08 | H-5 Autobahnlicht E1 |
| 0x09 | H-4 Autobahnlicht E |
| 0x0A | Lichtverteilung H-2 |
| 0x0B | Lichtverteilung H-0 |
| 0x0C | Lichtverteilung H+2 |
| 0x0D | Lichtverteilung H+4 |
| 0x0E | Blendfreies Fernlicht |
| 0x0F | Automatisches Volles Fernlicht  |
| 0x10 | Manuelles Fernlicht  |
| 0x11 | Lichthupe |
| 0x12 | Blendfreies Fernlicht Dimmung 1 |
| 0x13 | Blendfreies Fernlicht Dimmung 2 |
| 0x14 | Automatisches Volles Fernlicht Dimmung 1 |
| 0x15 | Automatisches Volles Fernlicht Dimmung 2 |
| 0x16 | Blendfreies Fernlicht 5 |
| 0x17 | Blendfreies Fernlicht 6 |
| 0x18 | Blendfreies Fernlicht 7 |
| 0x19 | Blendfreies Fernlicht 8 |
| 0x1A | Blendfreies Fernlicht 9 |
| 0x1B | Blendfreies Fernlicht 10 |
| 0x1C | Blendfreies Fernlicht 11 |
| 0x1D | Abblendlicht bei DLS aktiv |
| 0x1E | Teilfernlicht bei DLS aktiv |
| 0xFF | ungültiger Wert |

### TAB_LICHT_FUSI_KODIERPARAMETER

| WERT | TEXT |
| --- | --- |
| 0x01 | FS_AL |
| 0x02 | FS_FRA_V |
| 0x03 | FS_BL |
| 0xFF | Wert ungültig |

### TAB_LICHT_KURZSCHLUSSABSCHLATUNG_RESET

| WERT | TEXT |
| --- | --- |
| 0x00 | Rücksetzen erfolgreich durchgeführt |
| 0x01 | Rücksetzen nicht möglich - Maximale Anzahl an Kurzschlüssen erreicht - SG-Tausch notwendig |
| 0xFF | ungültiger Wert |

### TAB_LICHT_MAPPING_KONFIGURATION

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht konfiguriert |
| 0x01 | Konfiguriert |
| 0xFF | Wert ungültig |

### TAB_LICHT_MONTAGESPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | Lichtsperre nicht aktiv |
| 0x01 | Lichtsperre aktiv |
| 0xFF | ungültiger Wert |

### TAB_LIMIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aussage |
| 0x01 | Unterhalb Limit |
| 0x02 | Normal Zustand |
| 0x03 | Oberhalb Limit |
| 0xFF | ungültiger Wert |

### TAB_LIN_CODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Service nicht angefordert Wird zurückgegeben, wenn ein RequestRoutineResult ohne vorheriges StopRoutine aufgerufen wird |
| 0x01 | Auftrag angenommen, aber noch nicht ausgeführt Auftrag durch BDC angenommen, aber noch nicht an IFE verschickt |
| 0x02 | Routine kann nicht ausgeführt werden Auftrag kann nicht an die IFE verschickt werden |
| 0x03 | Routine wird ausgeführt Auftrag angestossen, aber noch nicht beendet (CAF-ID ist erfolgreich -ungültig- in die IFE geschrieben worden. |
| 0x04 | Routine erfolgreich beendet Auftrag erfolgreich abgeschlossen, CAF-ID ist erfolgreich und gültig aus der IFE zurückgelesen |
| 0x05 | Routine beendet mit Fehler Auftrag fehlerhaft, nach Abarbeitung der LIN-TP-Codierung ist die CAF-ID -ungültig- aus der IFE zurückgelesen |
| 0xFF | Wert ungültig |

### TAB_LIN_METHODE_ADRESSIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Busshunt |
| 0x01 | extra wire daisy chain |
| 0x02 | Bus Shunt 2mA |
| 0xFF | Wert ungültig |

### TAB_LWR_REFERENZLAUF

| WERT | TEXT |
| --- | --- |
| 0x00 | Referenzlauf nicht gestartet |
| 0x01 | Referenzlauf aktiv |
| 0x02 | Referenzlauf ohne Fehler abgeschlossen |
| 0x03 | Referenzlauf mit Fehler abgeschlossen |
| 0xFF | ungültiger Wert |

### TAB_MFL_LAG

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x02 | Toggle betätigt |
| 0x03 | FAS_Mode aktiv |
| 0x04 | Assist betätigt |
| 0x07 | FAS_Mode und Assist betätigt |
| 0xFF | Wert ungültig |

### TAB_MFL_SKP

| WERT | TEXT |
| --- | --- |
| 0x00 | Skip nicht betätigt |
| 0x01 | Skip links betätigt |
| 0x02 | Skip rechts betätigt |
| 0xFF | Wert ungültig |

### TAB_MFL_TASTER_ACC_ABSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x02 | Taster / Wippe Abstand geringer betätigt |
| 0x04 | Taster / Wippe Abstand größer betätigt |
| 0x06 | Taster / Wippe Abstand größer und geringer betätigt |
| 0x08 | Taster Abstand toggle betätigt |
| 0xFF | Wert ungültig |

### TAB_MFL_TIPPRAENDEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Tipprändel BC nicht betätigt |
| 0x01 | Tipprändel BC gedrückt |
| 0x02 | Tipprändel nach unten |
| 0x03 | Tipprändel nach oben |
| 0xFF | ungültiger Wert |

### TAB_MIRRORING_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Mirroring off |
| 0x01 | Mirroring to port-mask enabled (until next reset) |
| 0x02 | Mirroring persistently to port-mask enabled (even after reset) |

### TAB_MIRROR_RTE_BUFFER

| WERT | TEXT |
| --- | --- |
| 0x00 | Explicit mirroring mask off |
| 0x01 | Explicit mirroring mask 0x01 |
| 0x02 | Explicit mirroring mask 0x02 |
| 0x04 | Explicit mirroring mask 0x04 |
| 0x08 | Explicit mirroring mask 0x08 |
| 0x10 | Explicit mirroring mask 0x10 |
| 0x20 | Explicit mirroring mask 0x20 |
| 0x40 | Explicit mirroring mask 0x40 |
| 0xFE | Explicit mirroring mask 0xFE |
| 0xFF | Automatic mirroring |

### TAB_MULTIFUNKTIONS_LENKRAD

| WERT | TEXT |
| --- | --- |
| 0x01 | Interner Elektronik Fehler |
| 0x02 | Tippraendel Widerspruch |
| 0x04 | Raendel Widerspruch |
| 0x08 | Wippe Widerspruch |

### TAB_M_TASTER_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x01 | Dauerbetätigung |
| 0x02 | Leitungsunterbrechung |
| 0x03 | Kurzschluss nach Masse |
| 0xFF | ungültig / unplausibel |

### TAB_NFC_ANTENNEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Antenne defekt |
| 1 | System i.O. |
| 2 | Antenne fehlt |
| 255 | ungültig |

### TAB_NFC_E_HW_INTERN_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x01 | NFC Digital Frontend nicht vorhanden (Keine Kommunikation mit dem NFC Chip möglich) (NFC_CLF_nicht_verfügbar, CLF=Contactless Frontend) |
| 0x02 | Init-APDUs konnten nicht geschrieben werden (INIT_APDU_Schreibfehler) |
| 0x03 | Keine Init-APDU-Bedatung durch den NFC-Master erfolgt (INIT_APDU_Bedatung_durch_NFC-Master_fehlt) |
| 0x04 | NFC Analog Frontend Fehler (Kein NFC-Feldaufbau möglich) (Antenne_defekt) |
| 0x05 | NFC Antenne kurzgeschlossen / offen (und damit fehlerhaft) (Antenne_Fehlt) |
| 0xFF | Wert ungültig |

### TAB_NFC_HW_INTERN_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | NFC nicht aktiv |
| 0x01 | NFC aktiv |
| 0x02 | NFC aktiv, Gerät erkannt |
| 0x03 | NFC aktiv, RF Fehler |
| 0xFD | Funktionsschnittstelle ist nicht verfügbar |
| 0xFE | Funktion meldet Fehler |
| 0xFF | Signal unbefüllt |

### TAB_NFC_I_STM_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler gemeldet |
| 0x01 | NFC Client Request Timeout |
| 0x02 | NFC CommandModeSwitch Request Unpassender Übergang |
| 0x03 | NFC CommandModeSwitch Request interne STM Steuerung aktiv |
| 0x04 | NFC CommandModeSwitch Request unterbricht aktuellen Vorgang |
| 0x05 | NFC CommandRecordRequest war nicht erfolgreich |
| 0x06 | NFC Client Request während NFC aus |
| 0xFD | Funktionsschnittstelle nicht verfügbar |
| 0xFE | Funktion meldet Fehler |
| 0xFF | Signal unbefüllt |

### TAB_NFC_I_VOLT_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Spannung OK |
| 0x01 | Überspannung erkannt |
| 0x02 | Unterspannung erkannt |
| 0x03 | Schreibzugriff während Spannungsfehler |
| 0xFD | Funktionsschnittstelle ist nicht verfügbar |
| 0xFE | Funktion meldet Fehler |
| 0xFF | Signal unbefüllt |

### TAB_NFC_READER_ID

| WERT | TEXT |
| --- | --- |
| 0x0D | READER_EXTERIOR_TAGE_FAT |
| 0x0E | READER_INNER_FRONT |

### TAB_NFC_READER_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | Reader nicht aktiv |
| 1 | Reader aktiv |
| 2 | Reader aktiv, Gerät bzw. Gegenstelle erkannt |
| 3 | Reader aktiv, RF-Fehler |
| 255 | ungültig |

### TAB_NIV_LED

| WERT | TEXT |
| --- | --- |
| 0x01 | NIV-LED |
| 0x02 | Offroad-LED |
| 0x03 | HDC-LED |
| 0xFF | ungültig |

### TAB_NIV_TASTE

| WERT | TEXT |
| --- | --- |
| 0x01 | HDC-Taste |
| 0x02 | Offroad-Taste |
| 0x03 | Offroad-Wippe |
| 0x04 | NIV-Wippe |
| 0xFF | ungültig |

### TAB_PORT_MASK

| WERT | TEXT |
| --- | --- |
| 0x01 | ETH_OABR_0 |
| 0x02 | ETH_OABR_1 |
| 0x04 | ETH_OABR_2 |
| 0x08 | ETH_OABR_3 |
| 0x10 | OBD/HSFZ |

### TAB_PWF_SF_GRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | OSFG |
| 0x01 | Diagnose Timeout |
| 0x02 | Sonstiges |
| 0xFF | Wert ungültig |

### TAB_PWF_TRIGGER_ZUSTANDSWECHSEL

| WERT | TEXT |
| --- | --- |
| 0x01 | Wohnen_durch_Betätigung_Schiebehebedach-Taster_PWF_MASTER_544 |
| 0x02 | Wohnen_durch_Betätigung_des_Innenlichttasters_PWF_MASTER_126 |
| 0x03 | Wohnen_durch_Betätigung_Cabrioverdeck-Taster_PWF_MASTER_553 |
| 0x04 | Wohnen_durch_Betätigung_Lenkstockhebel_links_PWF_MASTER_560 |
| 0x05 | Wohnen_durch_Betätigung_Fernlicht-Assistent-Taste_PWF_MASTER_564 |
| 0x06 | Wohnen_durch_Betätigung_Lenkstockhebel_rechts_PWF_MASTER_565 |
| 0x07 | Wohnen_durch_Betätigung_Drehschalter_Licht_PWF_MASTER_570 |
| 0x08 | Wohnen_durch_Betätigung_Nebelscheinwerfer_PWF_MASTER_571 |
| 0x09 | Wohnen_durch_Betätigung_Nebelschlussleuchte_PWF_MASTER_572 |
| 0x0A | Wohnen_durch_Betätigung_Leuchtweitenregulierung_PWF_MASTER_559 |
| 0x0B | Wohnen_durch_Bedienen_eines_Fensterhebers_PWF_MASTER_500 |
| 0x0C | Wohnen_durch_Betätigung_Rollo-Tasten_PWF_MASTER_573 |
| 0x0D | Wohnen_durch_Betätigung_Spiegelverstellung_PWF_MASTER_574 |
| 0x0E | Wohnen_durch_Betätigung_Spiegel-Beiklappen_PWF_MASTER_575 |
| 0x11 | Wohnen_durch_Bedienen_des_Sarah-Tasters_PWF_MASTER_497 |
| 0x12 | Wohnen_durch_Betätigung_Modus-Taste_PWF_MASTER_379 |
| 0x13 | Wohnen_durch_Betätigung_Eject-Button_PWF_MASTER_377 |
| 0x14 | Wohnen_durch_Betätigung_AM_FM_Verkehrsinformationen-Taste_PWF_MASTER_380 |
| 0x15 | Wohnen_durch_Betätigung_Functional-Bookmark-Taste_PWF_MASTER_381 |
| 0x18 | Wohnen_durch_Betätigung_einer_BE_MIKO-Taste_PWF_MASTER_628 |
| 0x19 | Wohnen_durch_Betätigung_Heckspoiler-Taster_PWF_MASTER_549 |
| 0x1A | Wohnen_durch_Betätigung_MSA-Taster_PWF_MASTER_552 |
| 0x1B | Wohnen_durch_Betätigung_ZBE-Taste_Front_PWF_MASTER_382 |
| 0x1C | Wohnen_durch_Betätigung_ZBE-Taste_Fond_PWF_MASTER_414 |
| 0x1D | Wohnen_durch_Schieben_des_ZBE-Drehstellers_Front_PWF_MASTER_383 |
| 0x1E | Wohnen_durch_Schieben_des_ZBE-Drehstellers_Fond_PWF_MASTER_415 |
| 0x1F | Wohnen_durch_Drehen_des_ZBE-Drehstellers_Front_PWF_MASTER_384 |
| 0x20 | Wohnen_durch_Drehen_des_ZBE-Drehstellers_Fond_PWF_MASTER_416 |
| 0x21 | Wohnen_durch_Betätigung_Lautstärke-Wippe_PWF_MASTER_554 |
| 0x22 | Wohnen_durch_Betätigung_Toggle-Taste_PWF_MASTER_555 |
| 0x23 | Wohnen_durch_Betätigung_Menu-Walze_PWF_MASTER_556 |
| 0x24 | Wohnen_durch_Betätigung_Telefon-Taste_PWF_MASTER_557 |
| 0x25 | Wohnen_durch_Betätigung_Push-to-talk-Taste_PWF_MASTER_558 |
| 0x26 | Wohnen_durch_Betätigung_Start-Stopp-Taster_PWF_MASTER_104 |
| 0x27 | Wohnen_durch_Betätigung_Entertainment-Button_(Kurzdruck)_PWF_MASTER_378 |
| 0x28 | Wohnen_durch_Betätigung_Zentralverriegelungstaster/-wippe_PWF_MASTER_625 |
| 0x29 | Wohnen_durch_Betätigung_Motorhaube_PWF_MASTER_124 |
| 0x2A | Standfunktion_durch_Betätigung_Motorhaube_PWF_MASTER_124 |
| 0x2B | Wohnen_durch_Änderung_des_Heckklappenkontakts_PWF_MASTER_114 |
| 0x2C | Wohnen_durch_Änderung_des_Heckklappenkontakts_PWF_MASTER_114 |
| 0x2D | Wohnen_durch_Betätigung_des_Heckscheibentasters_PWF_MASTER_116 |
| 0x2E | Wohnen_durch_Betätigung_des_Heckklappentasters_PWF_MASTER_117 |
| 0x2F | Wohnen_durch_Betätigung_des_Sichern-Schalters_an_der_Heckklappe_PWF_MASTER_125 |
| 0x30 | Wohnen_durch_Betätigung_Funkschlüssel_PWF_MASTER_118 |
| 0x31 | Wohnen_durch_ZV_entriegeln_PWF_MASTER_221 |
| 0x32 | Wohnen_durch_Öffnen_oder_Schließen_der_Fahrertür_hinten_PWF_MASTER_109 |
| 0x33 | Wohnen_durch_Öffnen_oder_Schließen_der_Beifahrertür_hinten_PWF_MASTER_110 |
| 0x34 | Wohnen_durch_Schließen_der_Fahrertür_PWF_MASTER_650 |
| 0x35 | Wohnen_durch_Schließen_der_Beifahrertür_PWF_MASTER_651 |
| 0x36 | Wohnen_durch_RCP-TasteBedienen_PWF_MASTER_652 |
| 0x37 | Wohnen_durch_Öffnen_der_Fahrertür_PWF_MASTER_107 |
| 0x38 | Wohnen_durch_Öffnen_der_Beifahrertür_PWF_MASTER_108 |
| 0x39 | Parken_durch_ZV_sichern_PWF_MASTER_130 |
| 0x3A | Standfunktion_durch_ZV_sichern_PWF_MASTER_130 |
| 0x3B | Fahren_durch_Fahrbereitschaft_hergestellt_PWF_MASTER_132 |
| 0x3C | Fahrbereitschaft_beenden_durch_Fahrbereitschaft_beendet_PWF_MASTER_275 |
| 0x3D | Pruefen_Analyse_Diagnose_durch_Analyse_starten_PWF_MASTER_134 |
| 0x3E | Wohnen_durch_Analyse_beenden_PWF_MASTER_285 |
| 0x3F | Fahrbereitschaft_herstellen_durch_Fahrwunsch_erkannt_PWF_MASTER_136 |
| 0x40 | Wohnen_durch_Fahrwunsch_zurueckgenommen_PWF_MASTER_278 |
| 0x41 | Fahrbereitschaft_beenden_durch_Fahrwunsch_zurueckgenommen_PWF_MASTER_278 |
| 0x42 | Standfunktion_durch_Timeout_Wohnen_Kunde_anwesend_PWF_MASTER_145 |
| 0x43 | Parken_BN_iO_durch_Timeout_Kunde_abwesend_abgelaufen_PWF_MASTER_146 |
| 0x44 | Standfunktion_durch_Nachladegrenze_erreicht_PWF_MASTER_507 |
| 0x45 | Parken_BN_niO_durch_Bordnetzfehler_erkannt_PWF_MASTER_238 |
| 0x46 | Parken_BN_iO_durch_Pruefung_BN_Fehler_PWF_MASTER_534 |
| 0x47 | Parken_BN_niO_durch_TimeOutTransportModus_PWF_MASTER_412 |
| 0x48 | Wohnen_durch_Erstes_Oeffnen_FAT_nach_Fahrt_PWF_MASTER_493 |
| 0x49 | Standfunktion_durch_Abschaltung_durch_Kunden_PWF_MASTER_517 |
| 0x4A | Standfunktion_durch_Insassenausstieg_PWF_MASTER_629 |
| 0x4B | Standfunktion_durch_OSFG_erreicht_PWF_MASTER_200 |
| 0x4C | Standfunktion_durch_Virtuelle_Batterie_entleert_PWF_MASTER_532 |
| 0x4D | Standfunktion_durch_Standfunktion_aktiv_PWF_MASTER_196 |
| 0x4E | Standfunktion_durch_Änderung_des_Heckklappenkontakts_PWF_MASTER_114 |
| 0x4F | Standfunktion_durch_Änderung_des_Heckscheibenkontakts_PWF_MASTER_115 |
| 0x50 | Standfunktion_durch_Betätigung_des_Heckscheibentasters_PWF_MASTER_116 |
| 0x51 | Standfunktion_durch_Betätigung_des_Heckklappentasters_PWF_MASTER_117 |
| 0x52 | Standfunktion_durch_Betätigung_des_Sichern-Schalters_an_der_Heckklappe_PWF_MASTER_125 |
| 0x53 | Standfunktion_durch_FunkschlüsselBedienen_PWF_MASTER_118 |
| 0x54 | Standfunktion_durch_ZV_entriegeln_PWF_MASTER_221 |
| 0x55 | Standfunktion_durch_Öffnen_oder_Schließen_der_Fahrertür_hinten_PWF_MASTER_109 |
| 0x56 | Standfunktion_durch_Öffnen_oder_Schließen_der_Beifahrertür_hinten_PWF_MASTER_110 |
| 0x57 | Standfunktion_durch_Schließen_der_Fahrertür_PWF_MASTER_650 |
| 0x58 | Standfunktion_durch_Schließen_der_Beifahrertür_PWF_MASTER_651 |
| 0x59 | Standfunktion_durch_RCP-TasteBedienen_PWF_MASTER_652 |
| 0x5A | Parken_BN_niO_durch_Diagnose_PWF_MASTER_403 |
| 0x5B | Parken_BN_iO_durch_Diagnose_PWF_MASTER_403 |
| 0x5C | Standfunktion_durch_Diagnose_PWF_MASTER_403 |
| 0x5D | Wohnen_durch_Diagnose_PWF_MASTER_403 |
| 0x5E | Pruefen_Analyse_Diagnose_durch_Diagnose_PWF_MASTER_403 |
| 0x61 | Fahrbereitschaft_beenden_durch_Diagnose_PWF_MASTER_403 |
| 0x62 | Parken_BN_niO_durch_Dienst_PWF_MASTER_430 |
| 0x63 | Parken_BN_iO_durch_Dienst_PWF_MASTER_430 |
| 0x64 | Standfunktion_durch_Dienst_PWF_MASTER_430 |
| 0x65 | Wohnen_durch_Dienst_PWF_MASTER_430 |
| 0x6A | Wohnen_durch_beenden_Fahrbereitschaft |
| 0x6B | Wohnen_durch_Klemme15HW_PWF_MASTER_750 |
| 0x6C | Wohnen_durch_Betätigung_Heckklappentaster_Fußraum_Fahrer_PWF_MASTER_744 |

### TAB_PWF_ZUSTAND_VOR_WARTEZEIT_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | PARKEN_BN_NIO |
| 0x01 | PARKEN_BN_IO |
| 0x02 | WOHNEN |

### TAB_RELAYS_ATTACK

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_RELAYS_ATTACK |
| 0x01 | RELAYS_ATTACK_DETECTED_METHOD_1 |
| 0x02 | RELAYS_ATTACK_DETECTED_METHOD_2 |
| 0x03 | RELAYS_ATTACK_DETECTED_METHOD_3 |
| 0x04 | RELAYS_ATTACK_DETECTED_METHOD_4 |

### TAB_RESERVE_0

| WERT | TEXT |
| --- | --- |
| 0x0 | reserviert |

### TAB_RESERVE_RESULT

| WERT | TEXT |
| --- | --- |
| 0xFD | Reserve Byte wegen SGBD-Kompatibilität. |
| 0xFF | Wert ungültig |

### TAB_RES_ANFORDERER

| WERT | TEXT |
| --- | --- |
| 0x00 | [IHKA] Auslöser unbekannt |
| 0x01 | [IHKA] Schlüssel-Taste (IDG oder DSK) |
| 0x02 | [IHKA] Display-Schlüssel |
| 0x03 | [IHKA] App/ATM |
| 0x04 | [IHKA] Timer in Fahrzeug |
| 0x05 | [IHKA] Reserve |
| 0x06 | [IHKA] Reserve |
| 0x07 | [IHKA] Reserve |
| 0x08 | [BDC] SST (Abschaltung) |
| 0x09 | [BDC] SST (Anforderung Fahrbereitschaft) |
| 0x0A | [BDC] Reserve |
| 0x0B | [BDC] Reserve |
| 0x0C | [DME] (Abschaltung) |
| 0xFF | Wert ungültig |

### TAB_RES_ANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | IHKA - Keine Anforderung Remote Start |
| 0x01 | IHKA - Anforderung Remote Start |
| 0x02 | BDC |
| 0x03 | DME |
| 0x04 | RQ_ENGR_PFN - TimeOut |
| 0xFF | Wert ungültig |

### TAB_RES_MOTORLAUF_STANDFKT

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Motorlauf als Standfunktion, (PWF: Standfunktionen) |
| 0x01 | Kein Motorlauf als Standfunktion, (PWF: Wohnen) |
| 0x02 | Kein Motorlauf als Standfunktion, (PWF: Fahren) |
| 0x04 | Motorlauf als Standfunktion, (PWF: Standfunktionen) |
| 0x05 | Motorlauf als Standfunktion, (PWF: Wohnen) |
| 0xFF | Wert ungültig |

### TAB_RES_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 0x01 | PWF-Startzustand nicht zulässig [2] |
| 0x02 | Montagemode aktiv  [3] |
| 0x03 | Timeout SV-LIN  [4] |
| 0x04 | Timeout RQ_ENGR_PFN (IHKA)  [6] |
| 0x05 | Timeout ST_DRVG_RDI_DRV (DME)  [7] |
| 0x06 | Startabbruch ST_DRVG_RDI_DRV (DME)  [8] |
| 0x07 | BDC RES-Funktion auscodiert  [1] |
| 0x08 | BDC KL50 HW-Fehler  [9] |
| 0x09 | keine gültige RES-Authentisierung  [10] |
| 0x0A | Treiber KL30B (DxE Versorgung) SV-LIN Fehler [5] |
| 0x0B | Reserve |
| 0x0C | Reserve |
| 0x0D | Kein Verhinderer |
| 0xFF | Wert ungültig |

### TAB_RLS_INIT

| WERT | TEXT |
| --- | --- |
| 0x00 | Regensensor eingemessen |
| 0x01 | Regensensor nicht eingemessen |
| 0x02 | Regensensor im Einmessvorgang |
| 0x03 | Vorgang nicht gestartet |
| 0x04 | Kommunikation unterbrochen |
| 0xFF | Wert ungültig |

### TAB_ROLLO_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | REAR_WINDOW_SUNBLIND_MOVE_TOGGLE |
| 0x02 | REAR_WINDOW_SUNBLIND_MOVE_UP |
| 0x03 | REAR_WINDOW_SUNBLIND_MOVE_DOWN |

### TAB_ROLLO_BLOCK

| WERT | TEXT |
| --- | --- |
| 0x00 | Unbekannt |
| 0x01 | Fährt nach oben |
| 0x02 | Nach oben gefahren Stillstand |
| 0x03 | Fährt nach unten |
| 0x04 | Nach unten gefahren Stillstand |
| 0xFF | Wert ungültig |

### TAB_ROLLO_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Betätigung |
| 0x01 | Betätigt |
| 0x07 | Signal ungültig |
| 0xFF | ungültiger Wert |

### TAB_ROUTINE_PARAMETER_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | START_ROUTINE |
| 0x02 | STOP_ROUTINE |
| 0x03 | REQUEST_ROUTINE_RESULTS |

### TAB_ROUTINE_STATUS_SENSOR_IDENT_DATEN_TRIGGER

| WERT | TEXT |
| --- | --- |
| 0x01 | Routine gestartet |
| 0x02 | Routine konnte nicht gestartet werden |
| 0x03 | Routine erfolgreich beendet |
| 0x04 | Routine mit Fehler abgebrochen |
| 0x05 | Routine läuft noch |
| 0x06 | Routine gestoppt und Identdaten im RAM gelöscht |
| 0xFF | Wert ungültig |

### TAB_RSU_FLASHRESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | Init |
| 0x01 | Reserve |
| 0x02 | Kom_Fehler |
| 0x03 | RSU_aktiv |
| 0x04 | Reserve |
| 0x05 | RSU_inaktiv |
| 0x06 | Flashfehler |
| 0x07 | Timeout_RSU_Master |
| 0x08 | Flash_ok |
| 0x09 | Reserve |
| 0x0A | Reserve |
| 0x0B | Reserve |
| 0x0C | Keine_SW_Aenderung |
| 0x0D | Reserve |
| 0x0E | Reserve |
| 0x0F | Fehler |
| 0x10 | Reserve |
| 0x11 | Reserve |
| 0x12 | Reserve |
| 0x13 | Reserve |
| 0x14 | Reserve |
| 0x15 | Reserve |
| 0x16 | Reserve |
| 0x17 | Reserve |
| 0x18 | Reserve |
| 0x19 | Reserve |
| 0x1A | Reserve |
| 0x1B | Reserve |
| 0x1C | Reserve |
| 0x1D | Reserviert_nicht_verfuegbar |
| 0x1E | Reserviert_Fehler |
| 0x1F | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_RUECKWAERTSGANG_SCHALTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Sensor nicht verbaut/ nicht vorhanden (Open Load) |
| 0x01 | Schalter nicht betätigt |
| 0x02 | Schalter betätigt |
| 0x03 | Kurzschluss |
| 0xFF | ungültig |

### TAB_SAC_PROBLEM_SOURCE

| WERT | TEXT |
| --- | --- |
| 0x01 | SAC |
| 0x02 | READER_EXT |
| 0x03 | READER_INT |
| 0x04 | CRYPTO_FN_CHALLENGE_ACC |
| 0x05 | CRYPTO_FN_CHALLENGE_DRV |
| 0x06 | CRYPTO_FN_CHECK_ACC |
| 0x07 | CRYPTO_FN_CHECK_DRV |
| 0x08 | INVALID_DATA |
| 0xFF | Wert ungültig |

### TAB_SAC_PROBLEM_TYPE

| WERT | TEXT |
| --- | --- |
| 0x01 | Timeout |
| 0x02 | UNKNOW_HANDLE |
| 0x03 | CMD_NOT_SUCCEFUL |
| 0x04 | UNEXPECTED_RESPONSE |
| 0x05 | NEGATIVE_RESPONSE |
| 0x06 | INVALID_RESPONSE |
| 0x07 | UNEXPECTED_DATA |
| 0xFF | Wert ungültig |

### TAB_SAFETY_MICRO_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Zündung |
| 0x01 | WatchDog |
| 0x02 | SleepMode |
| 0x03 | Notlauf |
| 0x04 | Notlauf licht |
| 0x05 | Notlauf Bremse |
| 0x06 | Notlauf Wischer |

### TAB_SARAH_ENGSTELLENASSISTENT_BREITE

| WERT | TEXT |
| --- | --- |
| 0x00 | Schmall |
| 0x01 | Mittel |
| 0x02 | Breit |
| 0xFF | Wert ungültig |

### TAB_SARAH_ENGSTELLENASSISTENT_BREITE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | SCHMALL |
| 0x01 | MITTEL |
| 0x02 | BREIT |

### TAB_SARAH_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Grün |
| 0x02 | Defekt |
| 0x03 | Orange |
| 0xFF | ungültiger Wert |

### TAB_SARAH_LED_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | GREEN |
| 0x02 | DEFECT |
| 0x03 | ORANGE |

### TAB_SARAH_SPURWECHSELASSISTENT_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Standard |
| 0x01 | Bedingt |
| 0xFF | Wert ungültig |

### TAB_SARAH_SPURWECHSELASSISTENT_MODUS_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | STANDARD |
| 0x01 | BEDINGT |

### TAB_SARAH_WARNZEITPUNKT_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Standard |
| 0x01 | Adaptiv |
| 0xFF | ungültiger Wert |

### TAB_SARAH_WARNZEITPUNKT_MODUS_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | STANDARD |
| 0x01 | ADAPTATIVE |

### TAB_SARAH_WARNZEITPUNKT_STUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Spät |
| 0x01 | Mittel |
| 0x02 | Früh |
| 0xFF | ungültiger Wert |

### TAB_SARAH_WARNZEITPUNKT_STUFE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | LATE |
| 0x01 | MIDDLE |
| 0x02 | EARLY |

### TAB_SARAH_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Alle Funktionen aus |
| 0x01 | Benutzerdefiniert |
| 0x02 | Alle Funktionen an |

### TAB_SARAH_ZUSTAND_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | ALL_FUNCTIONS_OFF |
| 0x01 | CUSTOMIZED |
| 0x02 | ALL_FUNCTIONS_ON |

### TAB_SCHLUESSELSPERRE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | ENABLE |
| 0x01 | DISABLE |
| 0x02 | DELETE |

### TAB_SDS_HISTORIENSPEICHER_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | HISTORY_UNLOCK |
| 0x01 | HISTORY_LOCK |
| 0x02 | HISTORY_CLEAR |

### TAB_SDS_UPDATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Update noch nicht abgeschlossen |
| 0x01 | Update fehlerfrei abgeschlossen |
| 0x02 | Update abgeschlossen, Fehler sind aufgetreten |
| 0xFF | ungültiger Wert |

### TAB_SDS_UPDATE_MODUS_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Vollständiges Update im Speicher / Vollständige Übertragung in Schlüssel |
| 0x01 | Vollständiges Update im Speicher / Inkrementelle Übertragung in Schlüssel |
| 0x02 | Kein Update im Speicher / Vollständige Übertragung in Schlüssel |
| 0x03 | Kein Update im Speicher / Inkrementelle Übertragung in Schlüssel |
| 0x0F | Vollständiges Update im Speicher / Keine Übertragung in Schlüssel |

### TAB_SEAT_EXT_LED_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | LED_SEAT_MEMORY |
| 0x01 | LED_1_ACT_SEAT_ALBV |
| 0x02 | LED_2_ACT_SEAT_ALBV |
| 0x03 | LED_3_ACT_SEAT_ALBV |
| 0x04 | LED_FERNBEDINGUNG_GENT |

### TAB_SENSOR_VERBAUT

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht verbaut (per Codierparameter als nicht vorhanden gekennzeichnet) |
| 0x01 | Verbaut & Antwort auf Statusanfrage erhalten |
| 0x02 | Keine Antwort auf Statusanfrage erhalten (per Codierparameter aber als vorhanden gekennzeichnet) |
| 0x03 | Fehlerhaft verbaut (per Codierparameter als nicht vorhanden gekennzeichnet, aber verbaut) |
| 0xFF | ungültiger Wert |

### TAB_SERVICE_SCHLUESSELDATEN_BLOCK_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | BLOCK_NR_0 |
| 0x01 | BLOCK_NR_1 |
| 0x02 | BLOCK_NR_2 |
| 0x03 | BLOCK_NR_3 |
| 0x04 | BLOCK_NR_4 |
| 0x05 | BLOCK_NR_5 |
| 0x06 | BLOCK_NR_6 |
| 0x07 | BLOCK_NR_7 |
| 0x08 | BLOCK_NR_8 |
| 0x09 | BLOCK_NR_9 |
| 0x0A | BLOCK_NR_10 |
| 0x0B | BLOCK_NR_11 |
| 0x0C | BLOCK_NR_12 |
| 0x0D | BLOCK_NR_13 |
| 0x0E | BLOCK_NR_14 |
| 0x0F | BLOCK_NR_15 |
| 0x10 | BLOCK_NR_16 |

### TAB_SHD_FH_LAGE_NR

| WERT | TEXT |
| --- | --- |
| 0x01 | Ausstelllage |
| 0x02 | Schiebelage |
| 0xFF | Funktion nicht unterstützt |

### TAB_SIA_FERTIGUNGSMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Fertigungsmodus nicht gesetzt |
| 0x01 | Fertigungsmodus mit Laden gesetzt |
| 0x02 | Fertigungsmodus ohne Laden gesetzt |
| 0x03 | Signal unbefüllt |

### TAB_SIA_FERTIGUNGSMODUS_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | ON_WITH_CHARGING_FUNCTION |
| 0x02 | ON_WITHOUT_CHARGING_FUNCTION |

### TAB_SIA_FETRAFLA_MODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | FeTraFla deaktiviert |
| 0x01 | Fertigungsmodus aktiviert |
| 0x02 | Transportmodus aktiviert |
| 0x03 | Signal unbefüllt |

### TAB_SIA_TABLET_VERRIEGELUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Tablet erkannt |
| 0x01 | Tablet erkannt aber nicht verriegelt |
| 0x02 | Tablet falsch eingelegt und verriegelt |
| 0x03 | Tablet korrekt eingelegt und verriegelt |
| 0x07 | Signal unbefüllt |

### TAB_SITZEXT_HINTEN_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kodiert (FAH und BFH) |
| 0x01 | Kodiert (FAH und BFH) |
| 0x02 | Nur FAH kodiert |
| 0x03 | Nur BFH kodiert |

### TAB_SITZEXT_STANDORT_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | SEAT_EXT_DRIVER |
| 0x01 | SEAT_EXT_PASSENGER |
| 0x02 | SEAT_EXT_DRIVER_REAR |
| 0x03 | SEAT_EXT_PASSENGER_REAR |

### TAB_SITZEXT_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht gedrückt |
| 0x01 | Gedrückt / Betätigt |
| 0x03 | Ungültig |

### TAB_SITZEXT_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kodiert (FA und BF) |
| 0x01 | Kodiert (FA und BF) |
| 0x02 | Nur FA kodiert |
| 0x03 | Nur BF kodiert |

### TAB_SITZHEIZUNG_STUFE

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Stufe 1 |
| 0x02 | Stufe 2 |
| 0x03 | Stufe 3 |
| 0xFF | ungültiger Wert |

### TAB_SITZHEIZUNG_STUFE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | LEVEL_1 |
| 0x02 | LEVEL_2 |
| 0x03 | LEVEL_3 |

### TAB_SITZMEMORY_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht gedrückt |
| 0x01 | Taster 1 |
| 0x02 | Taster 2 |
| 0x03 | Taster 3 |
| 0x04 | Taster M |
| 0x15 | Signal Ungültig/ Fehler / nicht vorhanden |

### TAB_SLEEP_MODE_NRC

| WERT | TEXT |
| --- | --- |
| 0x00 | Positive Response |
| 0x01 | Light Switch in Position 2 |
| 0x02 | Relay Stuck Hw Failure |
| 0x03 | Power Window Activated |
| 0xFF | Invalid |

### TAB_SMO_AUSFUEHRUNGSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Erfolgreich durchgeführt |
| 0x01 | Fahrzeuggeschwindigkeit größer Stillstand erkannt |
| 0x02 | Kein gültiger Schlüssel (im Heckbereich) erkannt |
| 0x03 | Codierung SmartOpener ist nicht aktiv |
| 0xFF | ungültiger Wert |

### TAB_SMO_CAR_TYP

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fahrzeugtyp definiert |
| 0xFE | Dynamische Parametrierung |
| 0xFF | Ungültiger Signal |

### TAB_SMO_GRUND_NICHT_AUSGEFUEHRT

| WERT | TEXT |
| --- | --- |
| 0x01 | Fahrzeuggeschwindigkeit größer Stillstand erkannt |
| 0x02 | Kein gültiger Schlüssel (im Heckbereich) erkannt |
| 0x03 | Codierung SmartOpener ist nicht aktiv |
| 0xFF | Wert ungültig |

### TAB_SMO_REQUEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderungsbotschaft von SMO erhaten |
| 0x01 | Anforderungsbotschaft von SMO erhaten |
| 0xFF | ungültiger Wert |

### TAB_SMO_STEUERN_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | RESET_PLAY_PROTECTION_COUNTER |
| 0x01 | SW_RESET |

### TAB_SONNENROLLO_SCHALTER_HAENGT

| WERT | TEXT |
| --- | --- |
| 0x00 | HL |
| 0x01 | HR |
| 0x02 | Heck |
| 0x03 | Panoramadach |
| 0xFF | Ungültig |

### TAB_SPIEGELMEM_POS_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | MEM_POSITION_1 |
| 0x02 | MEM_POSITION_2 |
| 0x03 | CURRENT_POSITION |

### TAB_SPIEGELSELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Spiegeltest nicht gestartet (seit letztem Klemmenwechsel) |
| 0x01 | Spiegeltest aktiv |
| 0x02 | Spiegeltest erfolgreich abgeschlossen |
| 0x03 | Spiegeltest mit Fehlern abgeschlossen |
| 0x04 | Spiegeltest mit internen Fehlern abgeschlossen |
| 0x05 | Spiegeltest abgebrochen durch Benutzer |
| 0x06 | Spiegeltest nicht gestartet aufgrund ungültiger Randbedingungen |
| 0xFF | ungültiger Wert |

### TAB_SPIEGELSELBSTTEST_INTERN

| WERT | TEXT |
| --- | --- |
| 0x00 | kein interner Fehler aufgetreten |
| 0x01 | Zentrieren linker Spiegel fehlerhaft |
| 0x02 | Nach oben fahren linker Spiegel fehlerhaft |
| 0x03 | Nach rechts fahren linker Spiegel fehlerhaft |
| 0x04 | Nach unten fahren linker Spiegel fehlerhaft |
| 0x05 | Nach links fahren linker Spiegel fehlerhaft |
| 0x06 | Zentrieren rechter Spiegel fehlerhaft |
| 0x07 | Nach oben fahren rechter Spiegel fehlerhaft |
| 0x08 | Nach rechts fahren rechter Spiegel fehlerhaft |
| 0x09 | Nach unten fahren rechter Spiegel fehlerhaft |
| 0x0A | Nach links fahren rechter Spiegel fehlerhaft |
| 0x0B | Memorystellung anfahren linker Spiegel fehlerhaft |
| 0x0C | Memorystellung anfahren rechter Spiegel fehlerhaft |
| 0xFF | ungültiger Wert |

### TAB_SPIEGEL_HC2

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | An Kein Blinken |
| 0x02 | An Blinken Stufe 1 |
| 0x03 | An Blinken Stufe 2 |
| 0x04 | An Blinken Stufe 3 |
| 0x0D | Anzeigefehler |
| 0xFF | Signal ungültig |

### TAB_SPIEGEL_HEIZUNG_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | 25_PERCENT |
| 0x02 | 50_PERCENT |
| 0x03 | 75_PERCENT |
| 0x04 | 100_PERCENT |

### TAB_STATUS_UNTERBRECHUNG

| WERT | TEXT |
| --- | --- |
| 0 | Fehler Keine Unterbrechung / kein Kurzschluss |
| 1 | Rote LED ausgefallen Keine Beschreibung vorhanden |
| 2 | Grüne LED ausgefallen Keine Beschreibung vorhanden |
| 3 | Blaue LED ausgefallen Keine Beschreibung vorhanden |
| 4 | Weiße LED ausgefallen Keine Beschreibung vorhanden |
| 7 | Signal ungültig Keine Beschreibung vorhanden |

### TAB_SUBFUNCTION_31

| WERT | TEXT |
| --- | --- |
| 0x01 | StartRoutine |
| 0x02 | StopRoutine |
| 0x03 | RequestRoutineResults |

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert 0 |
| 0x1 | Wert 1 |
| 0x2 | Wert 2 |
| 0x3 | Wert 3 |
| 0x4 | Wert 4 |
| 0x5 | Wert 5 |
| 0x6 | Wert 6 |
| 0x7 | Wert 7 |
| 0x8 | Wert 8 |
| 0x9 | Wert 9 |
| 0xA | Wert 10 |
| 0xB | Wert 11 |
| 0xC | Wert 12 |
| 0xD | Wert 13 |
| 0xE | Wert 14 |
| 0xF | Wert 15 |
| 0x10 | Wert 16 |
| 0x11 | Wert 17 |
| 0x12 | Wert 18 |
| 0x13 | Wert 19 |
| 0x14 | Wert 20 |
| 0x15 | Wert 21 |
| 0x16 | Wert 22 |
| 0x17 | Wert 23 |
| 0x18 | Wert 24 |
| 0x19 | Wert 25 |
| 0x1A | Wert 26 |
| 0x1B | Wert 27 |
| 0x1C | Wert 28 |
| 0x1D | Wert 29 |
| 0x1E | Wert 30 |
| 0x1F | Wert 31 |
| 0x20 | Wert 32 |
| 0x21 | Wert 33 |
| 0x22 | Wert 34 |
| 0x23 | Wert 35 |
| 0x24 | Wert 36 |
| 0x25 | Wert 37 |
| 0x26 | Wert 38 |
| 0x27 | Wert 39 |
| 0x28 | Wert 40 |
| 0x29 | Wert 41 |
| 0x2A | Wert 42 |
| 0x2B | Wert 43 |
| 0x2C | Wert 44 |
| 0x2D | Wert 45 |
| 0x2E | Wert 46 |
| 0x2F | Wert 47 |
| 0x30 | Wert 48 |
| 0x31 | Wert 49 |
| 0x32 | Wert 50 |
| 0x33 | Wert 51 |
| 0x34 | Wert 52 |
| 0x35 | Wert 53 |
| 0x36 | Wert 54 |
| 0x37 | Wert 55 |
| 0x38 | Wert 56 |
| 0x39 | Wert 57 |
| 0x3A | Wert 58 |
| 0x3B | Wert 59 |
| 0x3C | Wert 60 |
| 0x3D | Wert 61 |
| 0x3E | Wert 62 |
| 0xFF | Wert ungültig |

### TAB_SW_EXCEPTION_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | No information |
| 0x01 | Critical Input |
| 0x02 | Machine check |
| 0x03 | Machine check (NMI) |
| 0x04 | Data Storage |
| 0x05 | Instruction Storage |
| 0x06 | External Input |
| 0x07 | Alignment |
| 0x08 | Program |
| 0x09 | Performance Monitor |
| 0x0A | System Call |
| 0x0B | Debug |
| 0x0C | EFPU Data Exception |
| 0x0D | EFPU Round Exception |
| 0x0F | MPU violation |
| 0xFFFFFFFF | Wert ungültig |

### TAB_SZL_LENKSTOCK_BLINKER

| WERT | TEXT |
| --- | --- |
| 0x01 | Unzulaessiger Code |
| 0x02 | Unplausibles Signal BC/FLA-Taster |
| 0x03 | Taster haengt (FAS/ BC/FLA) |

### TAB_SZL_LENKSTOCK_WISCHER

| WERT | TEXT |
| --- | --- |
| 0x00 | Unzulaessiger Code |
| 0x01 | Intervall-Raendel defekt |
| 0x02 | Taster Regensensor unplausibles Signal |
| 0x03 | LED-Taster Regensensor hat Kurzschluss nach Masse |
| 0x04 | Taster haengt (SWS, AIC) |

### TAB_TANK_FUELLSTAND_VORHANDEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Tank Füllstandssensor kodiert |
| 0x01 | Tank Füllstandssensor recht kodiert, links nicht kodiert |
| 0x02 | Tank Füllstandssensor links kodiert, rechts nicht kodiert |
| 0x03 | Beide Füllstandssensoren kodiert |
| 0xFF | Wert ungültig |

### TAB_TASTEN

| WERT | TEXT |
| --- | --- |
| 0x01 | DTC Taste |
| 0x02 | FES Taste |
| 0x03 | SA Taste |
| 0xFE | andere Taste |
| 0xFF | nicht definiert |

### TAB_TASTER_BEMIKO

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht gedrückt |
| 0x01 | Gedrückt |
| 0x02 | Berührt |
| 0xFF | Wert ungültig |

### TAB_TASTER_BERUEHRT_BETAETIGT

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht betätigt / Nicht berührt |
| 0x01 | Berührt |
| 0x02 | Betätigt |
| 0xFF | Wert ungültig |

### TAB_TASTER_NICHT_DIAGNOSEFAEHIG

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht betätigt |
| 0x01 | Taster betätigt |
| 0xFD | Nicht kodiert |
| 0xFF | Wert ungültig |

### TAB_TASTER_ROLLO

| WERT | TEXT |
| --- | --- |
| 0x00 | Taster nicht gedrückt |
| 0x01 | Taster gedrückt |
| 0x03 | ungültig |

### TAB_TASTER_TIPPRAENDEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Bestätigung |
| 0x01 | Stellung aktiv vorne |
| 0x02 | Stellung aktiv vorne überdrückt |
| 0x05 | Stellung aktiv hinten |
| 0x06 | Stellung aktiv hinten überdrückt |
| 0xFF | ungültiger Wert |

### TAB_TASTER_WIPPE_RAENDEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht betätigt |
| 0x03 | Fehler - Spannung außerhalb gültigen Bereich |
| 0x05 | Minus betätigt |
| 0x06 | Plus betätigt |
| 0xFF | Ungültiger Wert |

### TAB_THCH

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Heizen |
| 0x02 | Kühlen |
| 0x03 | Sendefunktion nicht in Betrieb |
| 0xFF | Wert ungültig |

### TAB_THCH_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | HEATING |
| 0x02 | COOLING |
| 0x03 | Signal_unbefuellt |
| 0xFF | Wert ungültig |

### TAB_THCH_FARBE

| WERT | TEXT |
| --- | --- |
| 0x00 | OFF |
| 0x01 | BLUE |
| 0x02 | RED |
| 0x03 | GREEN |

### TAB_THCH_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | LED aus |
| 0x01 | LED an |
| 0x02 | LED Fehler |
| 0x03 | Sendefunktion nicht in Betrieb |
| 0xFF | Wert ungültig |

### TAB_THCH_LUEFTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Lüfter aus |
| 0x01 | Lüfter an |
| 0x02 | Lüfter blockiert |
| 0x03 | Sendefunktion nicht im Betrieb |
| 0xFF | Wert ungültig |

### TAB_THCH_TASTER

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht betätigt |
| 0x01 | Betätigt |
| 0x02 | Blockiert |
| 0x03 | Signal unbefüllt |
| 0xFF | Wert ungültig |

### TAB_THERMOCUPHOLDER_FEHLERART

| WERT | TEXT |
| --- | --- |
| 0x01 | Taster rechts blockiert |
| 0x02 | Taster links blockiert |
| 0x03 | Gebläse blockiert |
| 0x04 | Fehler LED Heizen rechts |
| 0x05 | Fehler LED Kühlen rechts |
| 0x06 | Fehler LED Heizen links |
| 0x07 | Fehler LED Kühlen links |
| 0x08 | Fehler Corona LED rot links |
| 0x09 | Fehler Corona LED rot rechts |
| 0x0A | Fehler Corona LED grün links |
| 0x0B | Fehler Corona LED grün rechts |
| 0x0C | Fehler Corona LED blau links |
| 0x0D | Fehler Corona LED blau rechts |
| 0x0E | Fehler Ambient LED |
| 0x0F | Fehler Peltierelement rechts |
| 0x10 | Fehler Peltierelement links |
| 0x11 | Allgemeiner Systemfehler |
| 0xFF | Wert ungültig |

### TAB_THERMOMONITOR_SETZEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Thermoschwelle aktiv (Übersteuert) |
| 0x01 | Thermo 90 aktiv (Übersteuert) |
| 0x02 | Thermo 100 aktiv (Übersteuert) |
| 0x03 | Normalbetrieb Schwellen werden entsprechend dem Ergebnis der Berechnung gesetzt |

### TAB_TLC_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aussage |
| 0x01 | Unterhalb Limit |
| 0x02 | Normalzustand |
| 0x03 | Oberhalb Limit |
| 0xFF | ungültiger Wert |

### TAB_TRIGGER_PWF_ZUSTANDSWECHSEL

| WERT | TEXT |
| --- | --- |
| 0x00 | reserviert |
| 0x01 | Parken_BN_niO |
| 0x02 | Parken_BN_iO |
| 0x03 | Standfunktionen_Kunde_nicht_im_FZG |
| 0x04 | reserviert |
| 0x05 | Wohnen |
| 0x06 | reserviert |
| 0x07 | Pruefen_Analyse_Diagnose |
| 0x08 | Fahrbereitschaft_herstellen |
| 0x09 | Parken_BN_niO_oNL |
| 0x0A | Fahren |
| 0x0B | reserviert |
| 0x0C | Fahrbereitschaft_beenden |
| 0x0D | reserviert |
| 0x0E | nicht verfügbar |
| 0xFF | Wert ungültig |

### TAB_TYP_FEHLER_HERSTELLUNG_FB

| WERT | TEXT |
| --- | --- |
| 0x01 | ST_DRVG_RDI_DRV nicht -FB Herstellen- nach 3000ms |
| 0x02 | ST_DRVG_RDI_DRV wechselt nach -Keine Fahrbereitschaft- |
| 0x03 | Schlüsselauthentisierung nicht gegeben |
| 0x04 | Montagemode aktiv |
| 0x05 | TCM_STARTLOCK_BRAKE und TCM_STARTLOCK_CLUTCH auscodiert |
| 0x06 | ST_DRVG_RDI_DRV nicht -Keine Fahrbereitschaft- in KL15-Ein |
| 0x07 | Ladekabel gesteckt (ST_CHGWR_PLGD) |
| 0xFF | Wert ungültig |

### TAB_UGDO_COUNTRY

| WERT | TEXT | BESCHREIBUNG |
| --- | --- | --- |
| 0x01 | Resteuropa | 433, 868 MHz: Rest Europa, Canaries, French Guyana, Guadeloupe, Iceland, Martinique, La Reunion, South Africa, Switzerland /Fürstentum Lichtenstein, Turkey |
| 0x02 | Kuwait | 433, 868 MHz LP: Kuwait, Saudi Arabia, Syria |
| 0x03 | U.K. | 418, 433, 868 MHz: Egypt, Gibraltar, U.K. |
| 0x05 | USA | 286 - 440 MHz: Barbados, Canada, Chile, Mexico, USA |
| 0x08 | Global | 433 MHz: Jordan, New Zealand, Russia, UAE |
| 0x09 | Australia | 315, 433 MHz: Australia |
| 0xFF | invalid value | invalid |

### TAB_UWB_LF_ANTENNA_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | NO_ANTENNA_ERROR |
| 0x01 | OPEN_CONNECTION |
| 0x02 | SHORTCUT_TO_GND |
| 0x03 | SHORTCUT_TO_BAT |
| 0x04 | ANTENNA_DETUNED |
| 0x05 | DRIVER_PROTECTION_ACTIVE |
| 0x06 | ANTENNA_NOT_CODED |
| 0xFF | Wert ungültig |

### TAB_UWB_LF_DRIVER_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | LF_DRIVER |
| 0x01 | OVERTEMPERATURE |
| 0x02 | BOOST_CONVERTER_PROTECTION_ACTIVE |
| 0x03 | BOOST_CONVERTER_MALFUNCTION |
| 0x04 | CLASS_D_SUPPLY_MALFUNCTION |
| 0x05 | TRANSPONDER_ACTIVE |
| 0x06 | DIAG_MODE_ACTIVE |
| 0x07 | BATTERY_UNDERVOLTAGE |
| 0x08 | BATTERY_OVERVOLTAGE |
| 0x09 | STATUSERROR |
| 0x0A | TIMEOUT |
| 0x0B | COMMUNICATION_WARNING |
| 0x0C | CALL_NOT_ACCEPTED |
| 0xFF | Wert ungültig |

### TAB_UWB_LIN_FRAME_ERROR_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | Physical Bus Error |
| 0x01 | Bit Error |
| 0x02 | Checksum Error |
| 0xFF | Wert ungültig |

### TAB_UWB_LIN_SHORTCUT_INFO

| WERT | TEXT |
| --- | --- |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Kurzschluss nach Plus |
| 0x03 | Kurzschlussfrei |
| 0xFF | Wert ungültig |

### TAB_UW_CRC_OR_ALIVE_FAILURE

| WERT | TEXT |
| --- | --- |
| 1 | CRC Failure |
| 2 | Alive Failure |
| 255 | Unbekannt/Ungültig |

### TAB_UW_DEVICE_ID

| WERT | TEXT |
| --- | --- |
| 0 | deviceIdU31006 Interior |
| 1 | deviceIdU31005 Rear |
| 2 | deviceIdU31009 Front |
| 3 | deviceIdU31012 Front |
| 4 | deviceIdU31008 Front Aux |
| 5 | deviceIdU31002 Rear |
| 6 | deviceIdU31010 Front |
| 7 | deviceIdU31007 Rear |

### TAB_UW_ERROR_SPI

| WERT | TEXT |
| --- | --- |
| 0 | Ok |
| 1 | Timeout |
| 2 | Kommunikationsfehler |
| 3 | Unterspannung |
| 4 | Reset |
| 5 | Nicht initialisiert |

### TAB_UW_GRUND_ABSCHALTUNG_KL30F

| WERT | TEXT |
| --- | --- |
| 1 | Zu viele Wecker |
| 2 | Einschlafverhinderer |
| 3 | Erreichen der unteren Startfähigkeitsgrenze |
| 4 | Ruhestromproblem |
| 5 | Abschaltverhinderer (Parklicht) vorliegend |
| 6 | Abschaltverhinderer (Standlicht) vorliegend |
| 7 | Abschaltverhinderer (Warnblinken) vorliegend |
| 9 | Abschaltverhinderer (Klemme 30B aktiv) vorliegend |
| 10 | Abschaltverhinderer (Relaiskleber Fensterheber) |
| 11 | Abschaltverhinderer (Nachricht Steuerung Stromanforderung KL_30F) ausgefallen (Licht defekt) |
| 12 | Abschaltverhinderer (Interner Fehler FEM) vorliegend (z.B. Bistabiles Relais nicht abschaltbar usw) |
| 13 | Standzeit erreicht (Kombi) |
| 14 | Abschaltverhinderer (ECall) vorliegend |
| 15 | PCU500 (Nachladefunktion) aktiv |
| 255 | Ungültig / Unplausibel / Unbekannt |

### TAB_UW_GRUND_UNTERSPG_ABSCHALTUNG

| WERT | TEXT |
| --- | --- |
| 0 | Batterietiefentladen |
| 1 | 12h-Abschaltung |
| 255 | ungültiges Signal |

### TAB_UW_KLEMMEN_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | INIT |
| 1 | Reserve |
| 2 | KL30 (alle Klemmen aus) |
| 3 | KL30F-Änderung (d.h. Änderung zur KL30Fhin) |
| 4 | KL30F-Ein |
| 5 | KL30B-Änderung (d.h. Änderung zur KL30B hin) |
| 6 | KL30B-Ein |
| 7 | KL30B-Ein |
| 8 | KLR-Ein |
| 9 | KL15-Änderung (d.h. Änderung zur KL15 hin) |
| 10 | KL15-Ein |
| 11 | KL50-Verzögerung (d.h. verzögertes Einschalten der KL50, bei z.B. Anlasserschutz) |
| 12 | KL50-Änderung (d.h. Änderung zur KL50 hin) |
| 13 | KL50-Ein |
| 14 | Fehler |
| 15 | Ungültig |

### TAB_UW_LAMPENMAPPING_FEHLER_TYPE

| WERT | TEXT |
| --- | --- |
| 0 | No error |
| 2 | Wrong CAF CRC |
| 3 | Wrong endianess |
| 4 | Initial Values unknown |
| 7 | Input not handled |
| 8 | Input Value not handled (Index: RulePropertyID, Value) |
| 9 | LogLamp Tree not found (Index: LogLampID) |
| 10 | No valid RampId from LogLamp (Index: LogLampID) |
| 11 | Ramp Parameters not found (Index: RampId) |
| 13 | No LogLamp = OutputChannel assignment (Index: LogLampID) |
| 15 | Flash Channel not found(Index: FlashChannelId) |
| 16 | Ramp not allocated in pool (Index: RampID, RampPoolID) |
| 17 | LogLamp ID out of range (Index: LogLampId, RulePropertyID) |
| 18 | Wrong DataSchema Version (Index: expected id, actual id) |
| 19 | Wrong CAF Key Lengths |
| 20 | Missing calprm parameter |
| 21 | Internal LIC Error 1 |
| 22 | Internal LIC Error 2 |
| 23 | Internal LIC Error 3 |
| 24 | Internal LIC Error 4 |
| 25 | Internal LIC Error 5 |
| 26 | Internal LIC Error 6 |
| 27 | Internal LIC Error 7 |
| 28 | Internal LIC Error 8 |
| 29 | Internal LIC Error 9 |
| 30 | Internal LIC Error 10 |
| 31 | Internal LIC Error 11 |
| 32 | Internal LIC Error 12 |
| 33 | Internal LIC Error 13 |
| 34 | Internal LIC Error 14 |
| 35 | Internal LIC Error 15 |
| 36 | Internal LIC Error 16 |
| 37 | Internal LIC Error 17 |
| 38 | Internal LIC Error 18 |
| 39 | Internal LIC Error 19 |
| 40 | Internal LIC Error 20 |
| 255 | ungueltiger Wert |

### TAB_UW_LAST_MOTORSTART

| WERT | TEXT |
| --- | --- |
| 0x00 | Default Wert, Es gab keinen Verbrennungsmotor-Start (E-Fahrzeug) |
| 0x09 | Zustart bei bestehender Elektrischer Fahrbereitschaft |
| 0x81 | SST-Start |
| 0x89 | MSA-Start |
| 0xFF | ungültiger Wert |

### TAB_UW_LICHTSCHALTER

| WERT | TEXT |
| --- | --- |
| 0x03 | Stellung Automatik |
| 0x07 | Stellung Automatik |
| 0x09 | Stellung 1 |
| 0x0B | Stellung 0 |
| 0x0C | Stellung 2 |
| 0x0D | Stellung 1 |
| 0x0E | Stellung 2 |
| 0x0F | Signal ungültig |
| 0xFF | ungültiges Signal |

### TAB_UW_SCHLUESSEL_POSITION

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

### TAB_UW_VERBAUORT_TAGE

| WERT | TEXT |
| --- | --- |
| 1 | Fahrertür/-seite (FT) |
| 2 | Beifahrertür/-seite (BFT) |
| 4 | Fahrertür/-seite hinten (FTH) |
| 8 | Beifahrertür/-seite hinten (BFTH) |
| 255 | unbekannt/ungültig |

### TAB_VARIANTE_AUDIOBEDIENTEIL

| WERT | TEXT |
| --- | --- |
| 0x00 | ohne FBM, TP |
| 0x01 | mit FBM, TP |
| 0x02 | ohne FBM, FM/AM |
| 0x03 | mit FBM, FM/AM |
| 0xFF | ungültiger Wert |

### TAB_VERBAUORTTABELLE

| WERT | TEXT |
| --- | --- |
| 1 | Innenbeleuchtung Fußraum Fahrer vorne |
| 2 | Innenbeleuchtung Fußraum Fahrer hinten |
| 3 | Innenbeleuchtung Fußraum Beifahrer vorne |
| 4 | Innenbeleuchtung Fußraum Beifahrer hinten |
| 5 | Innenbeleuchtung Fahrertür vorne oben |
| 6 | Innenbeleuchtung Fahrertür vorne Mitte |
| 7 | Innenbeleuchtung Fahrertür vorne unten |
| 8 | Innenbeleuchtung Fahrertür vorne Kartentasche |
| 9 | Innenbeleuchtung Fahrertür hinten oben |
| 10 | Innenbeleuchtung Fahrertür hinten unten |
| 11 | Innenbeleuchtung Fahrertür hinten Kartentasche |
| 12 | Innenbeleuchtung Beifahrertür vorne oben |
| 13 | Innenbeleuchtung Beifahrertür vorne Mitte |
| 14 | Innenbeleuchtung Beifahrertür vorne unten |
| 15 | Innenbeleuchtung Beifahrertür vorne Kartentasche |
| 16 | Innenbeleuchtung Beifahrertür hinten oben |
| 17 | Innenbeleuchtung Beifahrertür hinten unten |
| 18 | Innenbeleuchtung Beifahrertür hinten Kartentasche |
| 19 | Innenbeleuchtung I-Tafel Fahrer oben |
| 20 | Innenbeleuchtung I-Tafel Fahrer unten |
| 21 | Innenbeleuchtung I-Tafel oben Mitte |
| 22 | Innenbeleuchtung I-Tafel unten Mitte |
| 23 | Innenbeleuchtung I-Tafel oben Beifahrer |
| 24 | Innenbeleuchtung I-Tafel unten Beifahrer |
| 25 | Innenbeleuchtung B-Säule Fahrer |
| 26 | Innenbeleuchtung B-Säule Beifahrer |
| 27 | Innenbeleuchtung Lehne Fahrersitz |
| 28 | Innenbeleuchtung Lehne Beifahrersitz |
| 29 | Innenbeleuchtung Centerstack |
| 30 | Innenbeleuchtung Mittelkonsole Ablagefach |
| 31 | Innenbeleuchtung Gangwahlschalter links |
| 32 | Innenbeleuchtung Gangwahlschalter rechts |

### TAB_VERHINDERER_PWF_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Verhinderer |
| 0x01 | PWF-Start-Zustand nicht zulässig. Prio 5 |
| 0x02 | PWF-Start-Zustand ungleich PRUEFEN_ANALYSE_DIAGNOSE. Prio 4 |
| 0x03 | Keine gültige RCP-Schlüsselauthentisierung  im Außenraum. Prio 2 |
| 0x04 | Fahrbereitschaft gegeben. Prio 3 |
| 0x05 | Montagemode aktiv. Prio 1 |
| 0x06 | Timeout. Prio 6 |
| 0x07 | Interaktion oder Startabbruch. Prio 7 |
| 0x08 | Parken_BN_nio-Verhinderer aktiv |
| 0x09 | Keine gültige Schlüsselauthentisierung im Innenraum |
| 0x0A | kein Fahrzeugstillstand |
| 0x0B | Gesetzlicher KL30B/Standfunktionen Anforderer |
| 0xFF | Wert ungültig |

### TAB_VERRIEGELUNG_SITZSEITE

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht verriegelt |
| 0x01 | verriegelt |
| 0xFF | Wert ungültig |

### TAB_WASCHDUESENHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0 | PWM Wert 0% |
| 1 | PWM Wert 25% |
| 2 | PWM Wert 50% |
| 3 | PWM Wert 75% |
| 4 | PWM Wert 100% |
| 0xFF | Wert ungültig |

### TAB_WASCHDUESENHEIZUNG_ARG

| WERT | TEXT |
| --- | --- |
| 0 | 0_PERCENT |
| 1 | 25_PERCENT |
| 2 | 50_PERCENT |
| 3 | 75_PERCENT |
| 4 | 100_PERCENT |

### TAB_WCA_ANT_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | System in Ordnung |
| 1 | HF-Kabel WCA - Komepensator kurzgeschlossen |
| 2 | HF-Kabel Kompensator - Antenne kurzgeschlossen |
| 3 | HF-Kabel Kompensator - Antenne unterbrochen |
| 4 | Kompensator Defekt |
| 5 | ON Signal fehlt - Klemme KL30 fehlt |
| 9 | HF-Kabel Cradle - Kompensator unterbrochen |
| 15 | ungültig |

### TAB_WCA_STATUS

| WERT | TEXT |
| --- | --- |
| 0 | WCA nicht aktiv |
| 1 | WCA aktiv |
| 2 | WCA aktiv, Handy erkannt, aber keine Ladefunktion |
| 3 | WCA aktiv, Handy erkannt, wird geladen |
| 4 | WCA aktiv, Fremdkörper erkannt, keine Ladefunktion |
| 5 | WCA aktiv, Fremdkörper und Handy erkannt, wird geladen |
| 6 | WCA aktiv, Fremdkörper und Handy erkannt, keine Ladefunktion |
| 7 | WCA nicht aktiv, Fremdkörper oder Handy erkannt |
| 8 | WCA aktiv, Handy erkannt aber kein Laden wegen Übertemperatur |
| 9 | WCA defekt |
| 15 | ungültig |

### TAB_WISCHER_LEVEL_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | LEVEL_1 |
| 0x02 | LEVEL_2 |

### TAB_WISCHER_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | IN RSK/Parkposition |
| 0x01 | Ausserhalb RSK/Parkposition |
| 0xFF | Wert ungültig |

### TAB_WISCHER_POSITION_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | PARK_POSITION |
| 0x01 | SERVICE_POSITION |
| 0x02 | ASSEMBLY_POSITION |

### TAB_WISCHER_RAENDEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Rändel in Stufe 1 |
| 0x01 | Rändel in Stufe 2 |
| 0x02 | Rändel in Stufe 3 |
| 0x03 | Rändel in Stufe 4 |
| 0xFF | ungültiger Wert |

### TAB_WWSAFEMECH

| WERT | TEXT |
| --- | --- |
| 0x01 | SZL failure |
| 0x02 | QM application failure |

### TAB_ZSG_BF_WECK_GRUND

| WERT | TEXT |
| --- | --- |
| 0x00 | ALM_DEFAULT |
| 0x1B | ALM_BS_LIN_Q |
| 0x1C | ALM_BS_LIN_R |
| 0x1D | ALM_BS_CAN_CAS |
| 0x1E | ALM_BS_CAN_ZSG |
| 0x1F | ALM_BS_CAN_FA |
| 0x20 | ALM_BS_LIN_A |
| 0x21 | ALM_BS_LIN_B |
| 0x22 | ALM_BS_LIN_C |
| 0x23 | ALM_BS_LIN_D |
| 0x24 | ALM_BS_LIN_E |
| 0x25 | ALM_BS_LIN_F |
| 0x26 | ALM_BS_LIN_G |
| 0x27 | ALM_BS_LIN_H |
| 0x28 | ALM_BS_LIN_I |
| 0x29 | ALM_BS_LIN_J |
| 0x2A | ALM_BS_LIN_K |
| 0x2B | ALM_BS_LIN_L |
| 0x2C | ALM_BS_LIN_M |
| 0x2D | ALM_BS_LIN_N |
| 0x2E | ALM_BS_LIN_O |
| 0x2F | ALM_BS_LIN_P |
| 0x30 | ALM_TC_15WUP |
| 0x31 | ALM_TC_15_ON |
| 0x34 | ALM_TC_30F_REQ |
| 0x35 | ALM_TC_SSPA |
| 0x36 | ALM_TC_SSPB |
| 0x37 | ALM_TC_IBS_WUP |
| 0x39 | ALM_TC_CLUTCH |
| 0x3A | ALM_TC_BRAKE |
| 0x3C | ALM_TC_30B_ON |
| 0x3E | ALM_TC_TELEMATIC_ON |
| 0x3F | ALM_TC_PWF_STATE_CHANGE |
| 0x40 | ALM_TC_PWF_PERM |
| 0x41 | ALM_LC_WARNLIGHT_TN_LIGHT |
| 0x42 | ALM_LC_OP_WARNLIGHT |
| 0x43 | ALM_LC_WARNLIGHT |
| 0x44 | ALM_LC_LIGHTCLAMP |
| 0x45 | ALM_LC_OP_INDICATOR_LEFT |
| 0x46 | ALM_LC_OP_INDICATOR_RIGHT |
| 0x47 | ALM_LC_INDICATOR |
| 0x48 | ALM_LC_OP_HEADLIGHT_FLASHER |
| 0x49 | ALM_LC_HEADLIGHT_FLASHER |
| 0x4A | ALM_LC_OP_LIGHT_SWITCH |
| 0x4B | ALM_LC_POSITION |
| 0x4C | ALM_LC_LOW_BEAM_ACTIVE |
| 0x4D | ALM_LC_OP_PARKLIGHT |
| 0x4E | ALM_LC_PARKLIGHT |
| 0x4F | ALM_LC_GOODBYE |
| 0x50 | ALM_LC_FOLLOWMEHOME |
| 0x51 | ALM_LC_REMOTELIGHT |
| 0x52 | ALM_LC_WELCOME |
| 0x53 | ALM_LC_OP_FOG_LIGHT |
| 0x54 | ALM_LC_OP_REAR_FOG_LIGHT |
| 0x55 | ALM_LC_OP_INTERIORLIGHT_FRONT |
| 0x56 | ALM_LC_OP_INTERIORLIGHT_REAR |
| 0x57 | ALM_LC_LCI_ACTIVE |
| 0x58 | ALM_LC_LCE_ACTIVE |
| 0x59 | ALM_CE_NFC_DRD |
| 0x5A | ALM_CL_OP_CL_BUTTON |
| 0x5B | ALM_CL_OP_DRD |
| 0x5C | ALM_CL_OP_PSD |
| 0x5D | ALM_CL_OP_BOOTLID_INT |
| 0x5E | ALM_CL_OP_BOOTLID_EXT |
| 0x5F | ALM_CL_OP_BOOTLID_SEC |
| 0x60 | ALM_CL_OP_REARSCREEN |
| 0x61 | ALM_CL_OP_HOTEL_MODE |
| 0x62 | ALM_CL_SWITCH_DOOR_DRD |
| 0x63 | ALM_CL_SWITCH_DOOR_PSD |
| 0x64 | ALM_CL_SWITCH_DOOR_DRDR |
| 0x65 | ALM_CL_SWITCH_DOOR_PSDR |
| 0x66 | ALM_CL_SWITCH_BONNET |
| 0x67 | ALM_CL_SWITCH_BOOTLID |
| 0x68 | ALM_CL_SWITCH_REARSCREEN |
| 0x69 | ALM_CL_SWITCH_BOOTLID_PRECATCH |
| 0x6A | ALM_CL_PIA_LOCK_AT_TIMEOUT |
| 0x6B | ALM_CL_RELAYSTUCK_FAULT |
| 0x6C | ALM_CE_CAP_DRD |
| 0x6D | ALM_CE_CAP_PSD |
| 0x6E | ALM_CE_CAP_DRDR |
| 0x6F | ALM_CE_CAP_PSDR |
| 0x70 | ALM_CE_PULL_DRD |
| 0x71 | ALM_CE_PULL_PSD |
| 0x72 | ALM_CE_PULL_DRDR |
| 0x73 | ALM_CE_PULL_PSDR |
| 0x74 | ALM_CE_SMO_ACTIVE |
| 0x75 | ALM_PW_OP_SZT_LIN |
| 0x76 | ALM_LC_FOG_LIGHT_FRONT |
| 0x77 | ALM_LC_FOG_LIGHT_REAR |
| 0x78 | ALM_LC_FSFY_LOW_BEAM |
| 0x79 | ALM_LC_FSFY_BRAKE_LIGHT |
| 0x7A | ALM_PW_RELAYSTUCK_FAULT |
| 0x7B | ALM_LC_ATTACK_ALARM |
| 0x7C | ALM_CE_TAGE_HELP |
| 0x7D | ALM_PW_OP_LOCAL_DRDR |
| 0x7E | ALM_PW_OP_LOCAL_PSDR |
| 0x7F | ALM_CL_CKT_SLEEP |
| 0x80 | ALM_DSK_DATENUPDATE |
| 0x81 | ALM_TR_ACTIVE |
| 0x82 | ALM_RC_ACTIVE |
| 0x83 | ALM_EXMI_ACTIVE |
| 0x84 | ALM_PF_SZL_ESCA_ACTIVE |
| 0x85 | ALM_PF_OP_SARAH |
| 0x86 | ALM_PF_OP_FES |
| 0x87 | ALM_CL_OP_IDG_APPROACH |
| 0x88 | ALM_CL_OP_IDG_LEAVE |
| 0x89 | ALM_PF_OP_SPOILER |
| 0x8A | ALM_CL_RLS_LIGHTSCENARIO |
| 0x8B | ALM_PF_OP_MFL_M_TASTE |
| 0x8C | ALM_PF_OP_MFL_VOL |
| 0x8D | ALM_PF_OP_MFL_SONDERFUNKTION |
| 0x8E | ALM_PF_OP_MFL_RAENDEL |
| 0x8F | ALM_PF_OP_MFL_TEL |
| 0x90 | ALM_PF_OP_MFL_PTT |
| 0x91 | ALM_PF_OP_BEAUDIO |
| 0x92 | ALM_PF_OP_SH_DRD |
| 0x93 | ALM_PF_OP_SH_PSD |
| 0x94 | ALM_PF_OP_SH_FAH |
| 0x95 | ALM_PF_OP_SH_BFH |
| 0x96 | ALM_PF_OP_SEATMEM_FA |
| 0x97 | ALM_PF_OP_SEATMEM_BF |
| 0x98 | ALM_PF_OP_SEATMEM_FAH |
| 0x99 | ALM_PF_OP_SEATMEM_BFH |
| 0x9A | ALM_PF_OP_S_SVBF_FOND |
| 0x9B | ALM_PF_OP_RLS_CLOSEAUTOM |
| 0xA0 | ALM_CF_ACTIVE |
| 0xA1 | ALM_WW_PUMPDRIVER_FAULT |
| 0xA3 | ALM_AC_WATERPUMPADD_ACTIVE |
| 0xA4 | ALM_AC_WATERVALVE_ACTIVE |
| 0xA5 | ALM_PF_HORN |
| 0xA6 | ALM_WW_ACTIVE |
| 0xA7 | ALM_SH_ACTIVE |
| 0xA8 | ALM_HC_EXMI_ACTIVE |
| 0xA9 | ALM_PF_BB_ACTIVE |
| 0xAA | ALM_PF_SZT_SB |
| 0xAB | ALM_PF_SORO_SB |
| 0xAC | ALM_PF_SR_SB |
| 0xEC | ALM_ACTIVE_DIAG |
| 0xED | ALM_SAFEMECH_LIMPMODE |
| 0xEE | ALM_INT_UNDERVOLTAGE |
| 0xEF | ALM_INT_INVALID_ISR |
| 0xF0 | ALM_RESET_RESERVED0 |
| 0xF1 | ALM_RESET_RESERVED1 |
| 0xF2 | ALM_RESET_RESERVED2 |
| 0xF3 | ALM_RESET_RESERVED3 |
| 0xF4 | ALM_RESET_ILEGADR |
| 0xF5 | ALM_RESET_CODETRAP |
| 0xF6 | ALM_RESET_LVT |
| 0xF7 | ALM_RESET_SW |
| 0xF8 | ALM_RESET_CHKSTOP |
| 0xF9 | ALM_RESET_INT_WDG |
| 0xFA | ALM_RESET_LOSSOFPLL |
| 0xFB | ALM_RESET_OSCILLATOR |
| 0xFC | ALM_RESET_EXT |
| 0xFD | ALM_RESET_POWERON |
| 0xFE | ALM_RESET_UNKOWN |
| 0xFF | ALM_INVALID |

### TAB_ZSG_FBD_RDC_FEHLER

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler vorhanden |
| 0x01 | RDC-Empfangs-Funktion aktiviert aber FBD nicht im RDC-Mode |
| 0x03 | uC EEPROM Fehler |
| 0x04 | Transceiver Fehler |
| 0xD | reserviert |
| 0x0E | Spannungsreset |
| 0x0F | DTC vorhanden |
| 0xFF | Fehlerinformation nicht ermittelbar |

### TAB_ZSG_KM_AUTH_PATH

| WERT | TEXT |
| --- | --- |
| 0x01 | AUTH_PATH_CA - Schlüsselsuche nur über CA (HFM-Suche) |
| 0x02 | AUTH_PATH_TR - Schlüsselsuche über induktive Kopplung (Transponderspule) |
| 0x03 | AUTH_PATH_CA_TR - Schlüsselsuche über CA u. Transponder |
| 0x04 | AUTH_PATH_NFC - Schlüsselsuche über induktive Kopplung (NFC) |
| 0x05 | AUTH_PATH_CA_NFC - Schlüsselsuche über CA u. NFC |
| 0x06 | AUTH_PATH_TR_NFC - Schlüsselsuche über induktive Pfade TR u. NFC |
| 0x07 | AUTH_PATH_CA_TR_NFC - Schlüsselsuche über CA u. induktive Pfade TR u. NFC |
| 0x08 | AUTH_PATH_RESERVED - reserviert |
| 0xFF | AUTH_PATH_INVALID - Ungültig |

### TAB_ZSG_KM_AUTH_TYPE

| WERT | TEXT |
| --- | --- |
| 0x00 | AUTHTYPE_PING - IDG-Suche ohne Keyposition und ohne Authentisierung (nur AC) |
| 0x01 | AUTHTYPE_NO_AUTH - IDG-Suche ohne Authentisierung |
| 0x02 | AUTHTYPE_CL_AUTH - ZV-Authentisierung mit Chall/Resp |
| 0x03 | AUTHTYPE_EWS_AUTH - Authentisierung über EWS |
| 0xFF | AUTHTYPE_INVALID - Ungültig |

### TAB_ZSG_KM_IMMEDIATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Antwort erst nach erfolgter Schlüsselsuche |
| 0x01 | Sofortige Antwort |
| 0xFF | Ungültig |

### TAB_ZSG_KM_PWF_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Schlüssel sicher in Innenraum |
| 0x01 | Schlüssel sehr wahrscheinlich im Innenraum |
| 0x02 | Schlüsselanwesenheit unbekannt |
| 0x03 | Schlüssel nicht gefunden |
| 0x04 | Nachlauf aktiv |
| 0x05 | Nachlauf nicht aktiv |
| 0xFF | Ungültig |

### TAB_ZSG_KM_QOS

| WERT | TEXT |
| --- | --- |
| 0x00 | QOS_EXPLICIT - Schlüsselsuche wird über alle verfügbaren Resourcen ausgeführt |
| 0x01 | QOS_IMPLICIT_RELIABLE - Schlüsselsuche wird über alle verfügbare Resourcen ausgeführt, falls Position nicht bereits zuverlässig vorliegt |
| 0x02 | QOS_IMPLICIT_PROBABLE - Schlüsselsuche wird über alle verfügbaren Resourcen ausgeführt, falls Position nicht bereits zuverlässig oder wahrscheinlich vorliegt |
| 0xFF | QOS_INVALID - Ungültig |

### TAB_ZSG_KM_REQUESTER

| WERT | TEXT |
| --- | --- |
| 0x01 | ID_VAM - Keystatus Request durch VaMaster |
| 0x02 | ID_TCM - Keystatus Request durch TcMaster |
| 0x03 | ID_EWS - Keystatus Request durch IM/EWS |
| 0x04 | ID_DIAG - Keystatus Request durch Diagnosejob |
| 0x05 | ID_PWM - Keystatus Request durch PwMaster |
| 0x06 | ID_RCS - Keystatus Request durch RCS für LF-Ping |
| 0x08 | ID_SD - Keystatus Request durch SD |
| 0x10 | ID_KM - Keystatus Request durch Keymanager |
| 0x80 | ID_DIENSTE - Keystatus Request durch Dienstebotschaft Service-Handler |
| 0xF0 | ID_INTERN -  Keystatus Request wurde durch KM selbst gestartet |
| 0xFF | Ungültig/Unbekannt |

### TAB_ZSG_KM_SEARCHMODE

| WERT | TEXT |
| --- | --- |
| 0x03 | SEARCHMODE_CE_DRD - Schlüsselsuche FAT |
| 0x04 | SEARCHMODE_CE_DRDR - Schlüsselsuche FATH |
| 0x05 | SEARCHMODE_CE_PSD - Schlüsselsuche BFT |
| 0x06 | SEARCHMODE_CE_PSDR - Schlüsselsuche BFTH |
| 0x07 | SEARCHMODE_TRUNK_OUTER - Schlüsselsuche Elektrisch Öffnen/Schließen HK/HS |
| 0x0D | SEARCHMODE_TRUNK_INNER - Schlüsselsuche Kofferraum (verwendet für Diagnose COM Test) |
| 0x0E | SEARCHMODE_CG_FRONT - CG-Schlüsselsuche MiKo vorne (verwendet für Diagnose) |
| 0x0F | SEARCHMODE_CG_MIDDLE - CG-Schlüsselsuche MiKo hinten (verwendet für Dignose) |
| 0x10 | SEARCHMODE_CG_REAR - CG-Schlüsselsuche Hutablage (verwendet für Diagnose) |
| 0x11 | SEARCHMODE_TRUNK_INNER_LEFT - Schlüsselsuche Kofferraum linke Antenne (verwendet für Diagnose COM Test) |
| 0x12 | SEARCHMODE_TRUNK_INNER_RIGHT - Schlüsselsuche Kofferraum rechte Antenne (verwendet für Diagnose COM Test) |
| 0x15 | SEARCHMODE_COMPARTMENT  - CA-Schlüsselsuche Innenraum (Fahrgastraum oder Fahrgastraum/Kofferraum) |
| 0x16 | SEARCHMODE_TRUNK_OUTER_INNER - CA-Schlüsselsuche Schließen HK/HS (Kofferraum oder Kofferraum/Fahrgastraum) |
| 0x18 | SEARCHMODE_FRONT_OUTER_INNER - CA-Schlüsselsuche Schließen FK (Cable storage) |
| 0x19 | SEARCHMODE_COMPARTMENT_BUMPER |
| 0x1A | SEARCHMODE_BUMPER |
| 0x1B | SEARCHMODE_CAR_LOWERING |
| 0x20 | SEARCHMODE_TRANSPORT_MODE |
| 0x21 | SEARCHMODE_SLEEP_RESPONSE_PING |
| 0x22 | SEARCHMODE_COMPARTMENT_TRUNK |
| 0x28 | SEARCHMODE_CKT_MOTION_SENSOR_CONFIG |
| 0x80 | SEARCHMODE_PING - LF-Ping-Schlüsselsuche auf CE-Antennen (s. SEARCHMODE_PING_LB/RB/LR) |
| 0x81 | SEARCHMODE_SD - LF-Ping-Schlüsselsuche auf CG-Antennen |
| 0x8D | SEARCHMODE_CKT_AUTH |
| 0x8E | SEARCHMODE_CASS_DIAG |
| 0x90 | SEARCHMODE_WEL_CKT_SHORT_WUP |
| 0x91 | SEARCHMODE_APU_CKT_SHORT_WUP |
| 0x92 | SEARCHMODE_WAL_CKT_SHORT_WUP |
| 0x93 | SEARCHMODE_PREAUTH_CKT_SHORT_WUP |
| 0x94 | SEARCHMODE_COMPARTMENT_FIND_ALL_IDG |
| 0xFF | Ungültig/Unbekannt |

### TAB_ZSG_KM_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Idle |
| 0xFF | Ungültig |

### TAB_ZSG_SCHLUESSEL_POSITION

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
| 0x13 | Schlüssel 19 |
| 0xFF | keine Kommunikation möglich oder kein weiterer Schlüssel |

### TAB_ZSG_SENSOR_VERBAUORT

| WERT | TEXT |
| --- | --- |
| 0x5EA0 | Wireless Charging Ablage |
| 0x3200 | Funkempfänger |
| 0x7100 | NFC Leser Innenraum vorne |
| 0x7108 | NFC Leser TAGE FAT |
| 0xFFFF | unbekannter Verbauort |

### TAB_ZSG_STAT_WECKSPERRE

| WERT | TEXT |
| --- | --- |
| 0x00 | Wakeup nicht blockiert |
| 0x01 | Wakeup blockiert |
| 0xFF | Wert ungültig |

### TAB_ZSG_UTC_TYP

| WERT | TEXT |
| --- | --- |
| 0x00 | Manuell gestellt (Daten von der angezeigten Uhrzeit abgeleitet, keine UTC-basierte Uhrzeit!) |
| 0x01 | Ortszeit Werk (per Diagnose gesetzt) |
| 0x02 | Weltzeit UTC (von GPS abgeleitet) |
| 0xFF | Ungültiger Wert |

### TAB_ZSG_UW_TC_FUSI_KL50_MSA

| WERT | TEXT |
| --- | --- |
| 1 | RQ_MSA_ENG_STA_2 nicht 0x2 |
| 2 | RQ_MSA_ENG_STA_1 nicht 0x2 |
| 3 | STAT_ENG_STA_AUTO_CRC/Alive-Fehler |
| 4 | RQ_MSA_ENG_STA_1/2=0x2 fuer t>64s |

### TAB_ZSG_ZV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | Gesichert |
| 0x03 | Crash-Mode aktiv |
| 0x80 | Klappe/Scheibe geschlossen |
| 0x81 | Klappe/Scheibe geöffnet |
| 0xC8 | Klappe in Vorraststellung |
| 0xC9 | Klappe nicht in Vorraststellung |
| 0xFF | ungültig/unplausibel/nicht verbaut |

### TAB_ZUSTANDSWECHSEL

| WERT | TEXT |
| --- | --- |
| 0 | kein Zustandswechsel wegen Abschaltverhindere |
| 1 | Wechsel von Prüfen_Analyse_Diagnose nach Wohnen |
| 2 | Wechsel von Wohnen nach Standfunktion_Kunde_nicht_im_Fahrzeug |
| 3 | Wechsel von Wohnen nach Parken_BN_iO |
| 4 | Wechsel von Standfunktion_Kunde_nicht_im_Fahrzeug nach Parken_BN_iO |

### TAB_ZUSTANDSWECHSEL_VERHINDERER

| WERT | TEXT |
| --- | --- |
| 1 | Abschaltverhinderer (Parklicht) vorliegend |
| 2 | Abschaltverhinderer (Standlicht) vorliegend |
| 3 | Abschaltverhinderer (Warnblinken) vorliegend |
| 4 | Abschaltverhinderer (Klemme 30B aktiv) vorliegend |
| 5 | Abschaltverhinderer (Relaiskleber Fensterheber) |
| 6 | Abschaltverhinderer (Nachricht Steuerung Stromanforderung KL_30F) ausgefallen (Licht defekt) |
| 7 | Abschaltverhinderer (Interner Fehler FEM) vorliegend (z.B. Bistabiles Relais nicht abschaltbar usw) |
| 8 | Motor läuft |
| 9 | Fahrzeuggeschwindigkeit größer Stillstand |
| 10 | Entertainmentfunktion |
| 11 | Remote Services |
| 12 | Restwärme |
| 13 | Standheizung - Standlüften |
| 14 | Nachlauf RSE |
| 15 | Remote Hupen |
| 16 | Betätigung Feststellbremse,Rollüberwachung |
| 17 | Kühlmitteltemperaturanfrage durch Kombi |
| 18 | Tankleckdiagnose |
| 19 | Batteriewächter |
| 20 | Nachlauf E-Lüfter |
| 21 | elektr. Wasserpumpe für Turbo Lagerstuhl |
| 22 | Standlüften |
| 23 | Fremdladeerkennung Hybrid - Ladefunktion HVPM - Ladefunktion LIM |
| 24 | Außenbeleuchtung (Follow-Me-Home) |
| 25 | Nachlauf der elektrische Wasserpumpe für Hybrid |
| 26 | Nachlauf der elektrische Wasserpumpe |
| 27 | Wechsel_erlaubt nicht erfüllt |
| 254 | Kein Abschaltverhinderer oder Standverbraucher aktiv |
| 255 | Unbekannter Abschaltverhinderer oder Standverbraucher |

### TAB_ZV_AKTIONEN

| WERT | TEXT |
| --- | --- |
| 0 | keine Aktion |
| 1 | Entriegeln |
| 2 | Verriegeln |
| 3 | Sichern |
| 4 | Selektiv Entriegeln |
| 100 | elektr. Öffnen (Heckklappenlift) |
| 101 | Heckscheibe öffnen |
| 102 | Kofferraum schließen |
| 150 | ZV-Aktion nicht durchgeführt, aufgrund offener Tür |
| 151 | ZV-Aktion nicht durchgeführt, da Waschstraßenmodus aktiv |
| 152 | Heckklappe Öffnen/Schließen nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 153 | Heckscheibe Öffnen nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 154 | Frontklappe Öffnen nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 155 | ZV-Aktion nicht durchgeführt, da Vorbedingung Remote Door Lock nicht erfüllt |
| 156 | ZV-Aktion nicht durchgeführt, da Vorbedingung Remote Door Unlock nicht erfüllt |
| 157 | ZV-Aktion nicht durchgeführt, da Wiederholsperre aktiv |
| 158 | ZV-Aktion nicht durchgeführt, da Vorbedingung zum Entsichern per Center Lock Taster nicht erfüllt |
| 159 | Diagnose nicht durchgeführt, da Vorbedingung für Diagnoseansteuerung nicht erfüllt |
| 160 | Entriegeln während Crash nicht durchgeführt, da Fahrzeug gesichert |
| 161 | ZV-Aktion nicht durchgeführt, da Kofferraum nicht entriegelt |
| 162 | ZV-Aktion nicht durchgeführt, da falscher ZV-Zustand |
| 163 | Wiederverriegeln nach Zeit nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 164 | Tür Ent-/Verriegeltrigger wurde verworfen |
| 165 | Trigger Klappe Öffnen/Schließen wurde verworfen |
| 166 | ZV-Aktion nicht durchgeführt, da Codierdatenfehler |
| 168 | ZV-Aktion nicht durchgeführt, da FeTraFla-Modus aktiv |
| 169 | ZV-Aktion Sicherheitsfahrzeug nicht durchgeführt, da kein Sicherheitsfahrzeug codiert oder ZV-Master durch Anforderung vom Sicherheitsmodul gesperrt |
| 170 | ZV-Aktion nicht durchgeführt, da Fahrzeug in Crash |
| 171 | ZV-Aktion nicht durchgeführt, da kein Schlüssel gefunden |
| 172 | ZV-Aktion nicht durchgeführt, da Cabrio Verdeck geöffnet |
| 173 | ZV-Aktion nicht durchgeführt, da die Restauration des altes ZV-Zustand intern fehlgeschlagen |
| 174 | ZV-Aktion nicht durchgeführt, da interner Timeout |
| 175 | ZV-Aktion nicht durchgeführt, da ungültige Diagnoseanfrage empfangen |
| 177 | ZV-Aktion nicht durchgeführt, da KeyManager busy |
| 179 | ZV-Aktion nicht durchgeführt, da unerwartete Antwort vom KeyManager |
| 180 | Remote Entriegeln über App nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 181 | Remote Heckklappe Entriegeln über App nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 182 | Remote Verriegeln über App nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 183 | Remote Sichern über App nicht durchgeführt, da Vorbedingungen nicht erfüllt |
| 200 | Reserviert (GeÖ-Schlösser) |
| 201 | Elektr. Öffnen untere Heckklappe |
| 202 | Elektr. Öffnen untere Heckklappe nicht zulässig |
| 220 | ZV-Aktion nicht durchgeführt, da Schlüssel gesperrt |
| 255 | ungültig |

### TAB_ZV_AKTION_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | UNLOCK |
| 0x02 | LOCK |
| 0x04 | SELECT_DRIVERS_DOOR |
| 0x05 | SELECT_TRUNK_LID |
| 0x06 | SELECT_REAR_WINDOW |
| 0x07 | SELECT_LOWER_TRUNK_LID |

### TAB_ZV_SAFE_MECH

| WERT | TEXT |
| --- | --- |
| 1 | ZV Wippe defekt |
| 2 | Relais zur Ansteuerung der Sichern-Motoren defekt |
| 3 | Dauerhafte Ansteuerung der Sichern-Motoren erkannt (Schutz der Motoren vor Zerstörung durch Überhitzung) |
| 4 | Interner Integritätsfehler im sicherheitsrelevanten Speicherbereich erkannt |

### TAB_ZV_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Entriegelt |
| 0x01 | Verriegelt |
| 0x02 | Gesichert |
| 0x80 | Klappe/Scheibe geschlossen |
| 0x81 | Klappe/Scheibe geöffnet |
| 0xC8 | Klappe in Vorraststellung |
| 0xC9 | Klappe nicht in Vorraststellung |
| 0xFD | Klappe nicht verbaut |
| 0xFF | Ungültig/unplausibel |

### TAB_ZV_URSACHEN

| WERT | TEXT |
| --- | --- |
| 0 | Smart Opener |
| 1 | Fernbedienungstaste |
| 2 | ZV-Ansteuerung über Diagnose |
| 3 | Zentralverriegelungstaster - Centerlock |
| 4 | Geschwindigkeitsverriegeln |
| 5 | Entriegeln nach Fahrtende |
| 6 | Wiederverriegeln nach Zeit |
| 7 | CA-Anforderung Entriegeln (Reversieren) |
| 8 | Crash-Entriegeln |
| 9 | RemoteDoorUnlock |
| 10 | RemoteDoorLock |
| 11 | CA-Verriegeln (Reversieren bei IDG-Sichern im Innenraum) |
| 12 | Schließzylinder FAT entriegeln  (nicht relevant BDC 2015, 2018) |
| 13 | Schließzylinder FAT verriegeln (nicht relevant BDC 2015, 2018) |
| 14 | Fernbedienungstaste HK öffnen |
| 15 | Zustandsänd. Türkontakt - Reversieren aufgrund mechanischer Asynchronität |
| 16 | Sicherheitsfahrzeug Entriegeln (nicht relevant BDC 2015, 2018) |
| 17 | Sicherheitsfahrzeug Verriegeln (nicht relevant BDC 2015, 2018) |
| 18 | Sicherheitsfahrzeug Selektiv Entriegeln (nicht relevant BDC 2015, 2018) |
| 19 | Sicherheitsfahrzeug sichern (nicht relevant BDC 2015, 2018) |
| 20 | TAGE FT |
| 21 | TAGE BFT |
| 22 | TAGE FTH |
| 23 | TAGE BFTH |
| 24 | MANTRA - Manipulierter Transponder  (nicht relevant BDC 2015, 2018) |
| 25 | Übergang von Zustand Sichern in Verriegelt durch Fahrbereitschaft |
| 26 | Übergang von Zustand Sichern in Verriegelt durch Schlüssel an der Transponderspule |
| 27 | CA-Anforderung Sichern |
| 28 | CA-Anforderung Heckklappe/Heckscheibe (Reversieren) |
| 29 | Taster Entriegeln Heckklappe Innen (TOEHKI) |
| 30 | Taster Entriegeln Heckklappe Außen (TOEHKA) |
| 31 | CL-Wippe FT |
| 32 | Taster Zentralsichern Heckklappe (TZSHK) |
| 34 | Taster Entriegeln Frontklappe Innen (TOEFKI) |
| 35 | Taster Entriegeln Heckscheibe (TOEHS) |
| 36 | Fernbedienungstaste Frontklappe Öffnen |
| 37 | CA-Anforderung Sichern nicht zulässig |
| 38 | CA-Anforderung Heckklappe/-scheibe reversieren |
| 39 | CA-Anforderung Toggle-Taster  (nicht relevant BDC 2015, 2018) |
| 40 | Öffnen Heckklappe Sicherheitsfahrzeug  (nicht relevant BDC 2015, 2018) |
| 41 | HK-Wippe |
| 42 | Letzte Tür geschlossen |
| 43 | Letzte Klappe geschlossen |
| 44 | Fernbedienungstaster Sichern nicht zulässig |
| 45 | Türen oder Klappen |
| 46 | Taster Entriegeln Hecklappe Unten (TOEHKU) |
| 100 | vorherige ZV-Aktion noch nicht abgeschlossen |
| 200 | Fahrertür FAT |
| 201 | Beifahrertür BFT |
| 202 | Fahrertür hinten FATH |
| 203 | Beifahrertür hinten BFTH |
| 204 | Mehrere Türen |
| 205 | Remote Control Parking (RCP) |
| 206 | Sichern-Anfrage über Dienstenachricht |
| 207 | Coach Door Modul Verriegeln Anfrage |
| 208 | Taster Entriegeln Hecklappe Unten (TOEHKU) |
| 209 | Comfort Key Tracking (CKT) Annäherung Fahrerseite |
| 210 | Comfort Key Tracking (CKT) Annäherung Beifahrerseite |
| 211 | Comfort Key Tracking (CKT) Annäherung Heck |
| 212 | Smart Access |
| 220 | Remote selektiv Entriegeln über App |
| 221 | Remote global Entriegeln über App |
| 222 | Remote Heckklappe Entriegeln über App |
| 223 | Remote Verriegeln über App |
| 224 | Remote Sichern über App |
| 254 | Unbekannte Ursache |
| 255 | Ungültig/Unbekannt |

### TAB_ZV_ZUSTAND

| WERT | TEXT |
| --- | --- |
| 0 | Status noch unbekannt |
| 1 | Mindestens eine Tür entriegelt - keine Tür verriegelt oder gesichert |
| 2 | Mindestens eine Tür verriegelt - keine Tür entriegelt |
| 3 | Mindestens eine Tür entriegelt - mindestens eine Tür verriegelt |
| 4 | Alle Türen gesichert |
| 5 | Gesichert - mindestens eine Tür entriegelt |
| 6 | Teilweise gesichert - Zwischenzustand oder Fehlerzustand |
| 7 | Teilweise gesichert - Zwischenzustand oder Fehlerzustand |
| 255 | Ungültiger Wert |

### TAB_ZYKLUS_ZEIT

| WERT | TEXT |
| --- | --- |
| 0x00 | 10ms   Zykluszeit |
| 0x01 | 20ms   Zykluszeit |
| 0x02 | 30ms   Zykluszeit |
| 0x03 | 50ms   Zykluszeit |
| 0x04 | 100ms   Zykluszeit |

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
