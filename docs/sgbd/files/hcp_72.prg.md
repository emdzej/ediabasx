# hcp_72.prg

## General

|  |  |
| --- | --- |
| File | hcp_72.prg |
| Type | PRG |
| Jobs | 113 |
| Tables | 107 |
| Origin | BMW EA-412 Andreas_Glotz |
| Revision | 7.002 |
| Author | Micronova_AG EA-412 Martin_Flach, Hays_AG EA-412 Tilo_Grune, ES |
| ECU Comment | Erst ab EDIABAS-Version 7.1 benutzbar, da zu viele STRING-Variable im Job FSP_Detail_Lesen |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Hybrid Control Processor (HCP) |  |  |
| ORIGIN | string | BMW EA-412 Andreas_Glotz |  |  |
| REVISION | string | 7.002 |  |  |
| AUTHOR | string | Micronova_AG EA-412 Martin_Flach, Hays_AG EA-412 Tilo_Grune, ES |  |  |
| COMMENT | string | Erst ab EDIABAS-Version 7.1 benutzbar, da zu viele STRING-Variable im Job FSP_Detail_Lesen |  |  |
| PACKAGE | string | 1.15 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $02 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

_No arguments._

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

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen(einzelner Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $06 reportDTCExtendedDataRecordByDTCNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Fehlercode |

### IDENT

Identdaten auslesen UDS  : $22   ReadDataByIdentifier UDS  : $3F51 Sub-Parameter SGBD-Index UDS  : $3F3C Sub-Parameter SGBD-Index UDS  : $3F36 Sub-Parameter SGBD-Index UDS  : $3F38 Sub-Parameter SGBD-Index UDS  : $3F3A Sub-Parameter SGBD-Index UDS  : $3F30 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob Modus: Default

_No arguments._

### DATEN_REFERENZ_LESEN

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier $2504 DREF Modus  : Default

_No arguments._

### ZIF_LESEN

Auslesen des Zulieferinfofeldes KWP2000: $22   ReadDataByCommonIdentifier $2503 ProgrammReferenz und KWP2000: $1A   ReadECUIdentification $91   VehicleManufacturerECUHardware*Number oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus: Default

_No arguments._

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

_No arguments._

### STATUS_ABSCHALTVERHINDERER

Lese den aktuellen Aussschaltverhinderer $22     SID ReadDataByIdentifier $02 $00 DID Messwert Modus: Default

_No arguments._

### STATUS_MOMENTENAUFTEILUNG_BESCHLEUNIGEN

Anteil des verbrennungsmotorischen Momentes am gesamten Antriebsmoment $22     SID ReadDataByIdentifier $02 $01 DID Messwert Modus: Default

_No arguments._

### STATUS_AKTIVIERUNG_LADEN_HV_BATTERIE

Status des Ladevorgangs $22   SID ReadDataByIdentifier $02 $02 DID Messwert Modus: Default

_No arguments._

### STATUS_APM_JUMPASSIST

Zustände des Jump Assist $22     SID ReadDataByIdentifier $02 $03 DID Messwert Modus: Default

_No arguments._

### STATUS_EKK_ABSCHALTBEDINGUNG

Grund fuer die Abschaltung des Klimakompressors $22     SID ReadDataByIdentifier $02 $07 DID Messwert Modus: Default

_No arguments._

### STATUS_EKK_LEISTUNGSLIMITIERUNG_BOOST

Leistungslimitierung als Grund fuer die Abschaltung des Klimakompressor $22     SID ReadDataByIdentifier $02 $08 DID Messwert Modus: Default

_No arguments._

### STATUS_EKK_LEISTUNGSLIMITIERUNG_REVGRADE

Rueckwaertssteigfaehigkeit als Grund fuer die Abschaltung des Klimakompressor $22     SID ReadDataByIdentifier $02 $09 DID Messwert Modus: Default

_No arguments._

### STATUS_MOMENTENAUFTEILUNG_BREMSEN

TO-Anteil der Mechanischen Bremse Reku-Anteil wäre der Kehrwert $22     SID ReadDataByIdentifier $02 $05 DID Messwert Modus: Default

_No arguments._

### STATUS_EMPI

EMPI HV Stromwert, EMPI Mode, Drehzahl absolut/relativ $22     SID ReadDataByIdentifier $02 $0A DID HV Stromwert $02 $0B DID EMPI Mode Modus: Default

_No arguments._

### STATUS_HCP_ANTRIEBSART

Rückmeldung der aktuell anliegenden Antriebsart z.B.: E-Fahren, Rekuperation, Boost etc. $22     SID ReadDataByIdentifier $02 $13 DID Messwert Modus: Default

_No arguments._

### STATUS_HPMR_STATE

Status des HPMR auslesen $22 SID ReadDataByIdentifier $02 $13 DID Messwert Modus: Default

_No arguments._

### STATUS_RECUPERATIONSMOMENT

Ist-Wert Reku-Moment $22     SID ReadDataByIdentifier $02 $21 DID Messwert Ist-Wert zusätzliches Schubmoment $22     SID ReadDataByIdentifier $02 $0C DID Messwert Modus: Default

_No arguments._

### STATUS_WAKE_UP

Gibt den Status der WakeUp-Leitung aus $22     SID ReadDataByIdentifier $02 $12 DID Messwert Modus: Default

_No arguments._

### STATUS_HV_ISOLATION

Liest Isolationsstatus Batterie aus $22     SID ReadDataByIdentifier $02 $16 DID Messwert Liest Isolationsstatus des MCP A aus $22     SID ReadDataByIdentifier $02 $17 DID Messwert Liest Isolationsstatus des MCP B aus $22     SID ReadDataByIdentifier $02 $18 DID Messwert Modus: Default

_No arguments._

### STATUS_HVIL

Auslesen des HVIL-Zustandes (falls HVIL unterbrochen, dann n.i.O.) $22     SID ReadDataByIdentifier $02 $19 DID Messwert Auslesen des HVIL-Zustandes aus Sicht der PEB fuer MCP A $22     SID ReadDataByIdentifier $02 $1B DID Messwert Auslesen des HVIL-Zustandes aus Sicht der PEB fuer MCP B $22     SID ReadDataByIdentifier $02 $1C DID Messwert Auslesen des HVIL-Zustandes aus Sicht der Batterie $22     SID ReadDataByIdentifier $02 $1A DID Messwert Modus: Default

_No arguments._

### STATUS_KL_15

Gibt den Status der Klemme 15 aus $22     SID ReadDataByIdentifier $02 $23 DID Messwert Gibt den Spannungswert der Klemme 15 aus $22     SID ReadDataByIdentifier $02 $24 DID Messwert Modus: Default

_No arguments._

### STEUERN_ANTRIEBSART

Auswahl: Forciertes E-Fahren, explizites Nicht E-Fahren, normal $2E     SID ReadDataByIdentifier $F2 $2  DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| ANTRIEBSART | unsigned char | Werttabelle 0 = Geregelte Einstellung 1 = Nur elektrisches Fahren 2 = Nur mit Verbrennungsmotor fahren |

### STEUERN_APM

Setzen das APM in einen bestimmten Betriebsmodus HV-Sicherheitskonzept wird nicht überstimmt!! Eingangsbedingungen werden über CCM im Kombi angezeigt $2E       SID ReadDataByIdentifier $F2 $0  DID Messwert Steuern der LV-Output-Spannung der APM. Eingabe der Spannung in Volt. $2E       SID ReadDataByIdentifier $F2 $4  DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | unsigned char | Wertetabelle 0= AUS 1= Buck 2= Boost |

### STEUERN_APM_LIMIT

Aktivierung/Deaktivieren der Limitierung $2E     SID ReadDataByIdentifier $F2 $3  DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION | unsigned char | Werttabelle 0 = inaktiv 1 = aktiv |

### STEUERN_ENERGIESPARMODE

Steuern der des Energiesparmodes (FETRAWE) Ist Klemmensicher und mit DTC-Eintrag verbunden $2E     SID ReadDataByIdentifier $F2 $5  DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION | unsigned char | Werttabelle 0 = inaktiv 1 = Fertigungsmode 2 = Transportmode 3 = FE+TRA 4 = Werkstattmode 5 = FE+WE 6 = WE+TRA 7 = FE+TRA+W |

### STEUERN_ENGDSRD

Externe Steuerung des Motorstatus Hinweis: ENERGIESPARMODE muss aktiviert sein und STEUERN_COMPLETECONTROL_SCHALTER ausgeführt werden. $2E     SID ReadDataByIdentifier $F2 $6  DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION | unsigned char | Werttabelle 0 = kein Zugriff 1 = an 2 = aus |

### STEUERN_LADEN_HV_BATTERIE

Einschalten/Ausschalten der Ladefunktion $2E     SID ReadDataByIdentifier $F2 $1  DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION | unsigned char | Einschalten/Ausschalten der Ladefunktion Wertetabelle 0 = aus 1 = START 2 = Standby 3 = Neustart 4 = Laden unterdruecken |

### STEUERN_LL_DREHZAHL

Sollvorgabe Verbrennungsmotor-Drehzahl in Neutral $2E     SID ReadDataByIdentifier $F2 $8  DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DREHZAHL | real | Verbrennungsmotor-Drehzahl in Neutral 0 = AUS/OFF 0 U/min bis 8000 U/min Aufloesung: 10 U/min |

### STEUERN_NI_MODE_1

Sollvorgabe Verbrennungsmotor-Drehzahl in Mode 1 Hinweis: ENERGIESPARMODE muss aktiviert sein und STEUERN_COMPLETECONTROL_SCHALTER ausgeführt werden. $2E     SID ReadDataByIdentifier $F2 $0A DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DREHZAHL | real | Verbrennungsmotor-Drehzahl in Mode 1 0 = AUS/OFF 0 U/min bis 8000 U/min Aufloesung: 10 U/min |

### STEUERN_NI_MODE_2

Sollvorgabe Verbrennungsmotor-Drehzahl in Mode 2 Hinweis: ENERGIESPARMODE muss aktiviert sein und STEUERN_COMPLETECONTROL_SCHALTER ausgeführt werden. $2E     SID ReadDataByIdentifier $F2 $0B ADID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DREHZAHL | real | Verbrennungsmotor-Drehzahl in Mode 2 0 = AUS/OFF 0 U/min bis 8000 U/min Aufloesung: 10 U/min |

### STEUERN_RNGDSRD

Vorgabe Gang für OHSR-Schnittstelle Hinweis: ENERGIESPARMODE muss aktiviert sein und STEUERN_COMPLETECONTROL_SCHALTER ausgeführt werden. $2E     SID ReadDataByIdentifier $F2 $0D DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| GANG | unsigned char | Werttabelle 0 = N0 1 = M1 2 = M2 3 = G1 4 = G2 5 = G3 6 = G4 7 = M1Off 8 = N |

### STATUS_ANTRIEBSART_ZUGRIFF

Gibt den Status der aktuell anliegenden extern eingesteuerten Antriebsart an. $22     SID ReadDataByIdentifier $02 $31 DID Messwert Modus: Default

_No arguments._

### STATUS_BATT_CONN

Gibt an ob das Batterie-Schütz /Relais betätigt ist. $22     SID ReadDataByIdentifier $02 $29 DID Messwert Modus: Default

_No arguments._

### STATUS_E_MOTOR_CONTROL_CHECK

Liest die erzielte E-Maschinen Drehzahl nach E-Motor Control Check aus. $22   SID ReadDataByIdentifier $02 $30 DID Messwert Modus: Default

_No arguments._

### STATUS_ENERGIESPARMODE

Rückgabe des aktuell anliegenenden FETRAWE-Status. Hinweis: Nur in Verbindung mit Energiesparmode Werkstatt. Fehlereintrag wird beim Setzen angelegt. $22     SID ReadDataByIdentifier $02 $XX DID Messwert Modus: Default

_No arguments._

### STATUS_IO_LESEN

Rückgabe des aktuellen Ist- Ganges. $22     SID ReadDataByIdentifier $02 $2C DID Messwert Modus: Default

_No arguments._

### STATUS_LESEN_PWRLNCH_COUNTER

Job liest die Anzahl der durchgeführten PowerLunches und die Anzahl der PowerLaunches nach dem letzten Reset aus. $22     SID ReadDataByIdentifier $02 $3F DID Messwert Modus: Default

_No arguments._

### STATUS_LL_REGELUNG

Rückmeldung ob Leerlaufregelung i.O. ist $22     SID ReadDataByIdentifier $02 $35 DID Messwert Modus: Default

_No arguments._

### STATUS_PARKSENSOREN

Liest den plausibilitierten Zustand der Parksensoren (TCM und DSM) aus. $22     SID ReadDataByIdentifier $02 $27 DID Messwert Modus: Default

_No arguments._

### STATUS_SOC_ACC_LESEN

Rückgabe der Güte des SOC-Wertes. $22     SID ReadDataByIdentifier $02 $2D DID Messwert Modus: Default

_No arguments._

### STEUERN_COMPLETECONTROL_SCHALTER

Schalter für Completecontrol Darf nicht im Service ausgeführt werden $2E     SID WriteDataByIdentifier $F2 $18 DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SCHALTER_COMPLETECONTROL | unsigned char | Schalter für Completecontrol Werttabelle 0 = AUS 1 = EIN |

### STEUERN_ERZWUNGENE_SCHUBABSCHALTUNG

Kann die Schubabschaltung erzwingen. FETRAWE-Mode muss gesetzt sein $2E     SID WriteDataByIdentifier $F2 $19 DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION | unsigned char | Kann die Schubabschaltung erzwingen. Werttabelle 0 = AUS 1 = EIN(Schubabschaltung erzwingen) |

### STATUS_KOMPRESSIONSTEST

Liest die Variablen zum Kompressionstest aus. $22   SID ReadDataByIdentifier $02 $52 DID Messwert Modus: Default

_No arguments._

### STEUERN_KOMPRESSIONSTEST

Schaltet Kompressionstest VM an ENERGIEPARMODE muss an sein $2E       SID WriteDataByIdentifier $F2 $1D   DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION | unsigned char | Schaltet Kompressionstest VM an ENERGIEPARMODE muss an sein Werttabelle 0= AUS 1= EIN |

### STEUERN_PWRLNCH_CNT_RESET

Job zum Resettieren/Zurücksetzen des PowerLaunch Zählers. Hinweis: Nur in Verbindung mit Energiesparmode Werkstatt Keine Übergabeparameter $2E     SID WriteDataByIdentifier $F2 $15 DID Messwert Modus: Default

_No arguments._

### STEUERN_SOC_SOLL

Schaltet SOC Vorgabe an ENERGIEPARMODE muss an sein Aus nach 300s $2E      SID WriteDataByIdentifier $F2 $1C  DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION | unsigned char | Schaltet SOC Vorgabe an Werttabelle 0 = AUS 1 = EIN |

### STEUERN_SOC_SOLL_WERT

Sollvorgabe SOC, nur innerhalb der i.O. Grenzen, nur in Verbindung mit FETRAWE Vorher muss der Job STEUERN_SOC_SOLL ausgeführt werden 0=AUS oder nach 1200s $22     SID ReadDataByIdentifier $02 $1B DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| PROZENT | unsigned char | Sollvorgabe SOC, nur innerhalb der i.O. Grenzen ENERGIEPARMODE muss an sein Bereich: 34- 75 % Aufloesung:  1 % |

### STATUS_DEGRADATION_SOURCE

Rückmeldung Ursache der aktuellen Degradation im Fzg

_No arguments._

### STATUS_STRSTP_ZAEHLER

Liest den Historienspeicher der HCP hinsichtlich der Anzahl der absolvierten Starts aus.

_No arguments._

### STATUS_HISR_HOS

Der Job gibt die Energieanteile und die Zeitanteile der verschieden Usecases /Modies an. Zusätzlich werden die Gesamtenergiemenge und die Gesamtzeit ausgegeben. Die Gesamtwerte können nicht zurückgesetzt werden.

_No arguments._

### STATUS_HISR_RING

Ließt den Historyspeicher der HCP Betriebsstatisitik aus. Es werden maximal 40 Einträge zurückgeliefert. Es werden immer alle Results zurückgegeben, auch wenn weniger als 40 Fehler gespeichert sind.

_No arguments._

### STATUS_HISR_AUSLESEN_01

HISR Werte01 auslesen (Übersicht)

_No arguments._

### STATUS_HISR_AUSLESEN_02

HISR Werte02 auslesen (Zeitangaben)

_No arguments._

### STATUS_HISR_AUSLESEN_03

HISR Werte03 auslesen (Counter)

_No arguments._

### STATUS_HISR_AUSLESEN_04

HISR Werte04 auslesen

_No arguments._

### STEUERN_HISR_AV_RESET_HAEUFIGKEIT

Löscht die Häufigkeit des Ausschaltverhinderer (AV) Historienspeicher

_No arguments._

### STEUERN_HISR_AV_RESET_KM_UND_AKTIV

Löscht beide Kilometerstände und Aktiv-Status des Ausschaltverhinderer (AV) Historienspeicher

_No arguments._

### STEUERN_SOC_STIMUL

Job schaltet die SOC Stimmulierung ein. Batterie wird entladen und gelanden um den SOC-Wert zu bestimmen. AUS nach 1200s $2E     SID WriteDataByIdentifier $F2 $14 DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| TRIGGER | unsigned char | Werttabelle 0 = Stimmulierung AUS 1 = Stimmulierung EIN |

### STATUS_ADAPTIONSWERTE_LESEN

Liest die Adaptionswerte von PyroFuse(integriert in der SBK - SicherheitsBatterieKlemme), Batterie, CC-Meldung aus. Siehe Argumente. $22      SID WriteDataByIdentifier $02 $32  DID Messwert Modus: Default

_No arguments._

### STEUERN_ADAPTIONSWERTE_LOESCHEN

Löscht die Adaptionswerte. Siehe Argumente. $2E     SID WriteDataByIdentifier $F2 $1A DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION | unsigned char | Löscht die Adaptionswerte Werttabelle 0= alle löschen 1= Pyrofuse (integriert in der SBK - SicherheitsBatterieKlemme) wird zurückgesetzt(Klemme 41) 2= Batterie wird nicht mehr unterstützt - siehe Steuern_Batterie_Adaptionswerte_Loeschen 3= CC-Meldung 4= HISR- Betriebsstrategie-Analyse wir zurückgesetzt |

### STEUERN_BATTERIE_ADAPTIONSWERTE_LOESCHEN

Löscht die Adaptionswerte in der HV-Batterie. Ausschließlich im Werkstattmode möglich. $2E     SID WriteDataByIdentifier $F2 $27 DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | 0= keine Aktion 7= Adaptionswerte der Batterie löschen |

### STEUERN_COMPLETECONTROL_PIN

Freigabe Code für Steuern Antriebsart Complete Control Es muss der entsprechenden Freigabecode übergeben werden, damit keine Beschädigungen im Getriebe auftreten können. $2E     SID WriteDataByIdentifier $F2 $17 DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| FREIGABECODE | unsigned long | Freigabe Code für Steuern Antriebsart Complete Control Darf nicht im Service ausgeführt werden Es muss der entsprechenden Freigabecode übergeben werden, damit keine Beschädigungen im Getriebe auftreten können. Es wird eine 9-stellige Zahl eingegeben! |

### STEUERN_E_MOTOR_CONTROL_CHECK

Anstossen des E-Motor Control Check Zur Überprüfung der E-Maschinen. Die E-Maschinen werden für max. 60s gedreht Service Hinweise: Nur in Verbindung mit Energiesparmode Werkstatt. WÄHREND TEST KEINESFALLS START-STOP-TASTER DRÜCKEN!!! BAUTEILSCHÄDIGUNG.  $2E       SID WriteDataByIdentifier $F2 $16   DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| MOTOR | unsigned char | Die E-Maschinen werden kurz gedreht bis 0=AUS/OFF bzw. max. 60s Wertetabelle: 0 = AUS/OFF 1 = E-Maschine A 2 = E-Maschine B |

### STATUS_CRASH_DETECTION_SIGNAL

Gibt den Status der Crash Detection Leitung aus $22     SID ReadDataByIdentifier $02 $26 DID Messwert Modus: Default

_No arguments._

### STATUS_GESAMTFZG_DEGRADATION

Auslesen der strategischen EM-A Degradation $22     SID ReadDataByIdentifier $02 $0F DID Messwert Auslesen der strategischen EM-B Degradation $22     SID ReadDataByIdentifier $02 $10 DID Messwert Auslesen der strategischen Verbrennungsmotordegradation $22     SID ReadDataByIdentifier $02 $11 DID Messwert Auslesen der strategischen Batterieladedegradation $22     SID ReadDataByIdentifier $02 $0E DID Messwert Auslesen der strategischen Batterieentladedegradation $22     SID ReadDataByIdentifier $02 $0D DID Messwert Modus: Default

_No arguments._

### STATUS_AKTUELLE_GETRIEBEPOSITION

Status der Getriebeposition P / R / N / D $22     SID ReadDataByIdentifier $02 $28 DID Messwert Modus: Default

_No arguments._

### STATUS_EMF_HILFERUF

Lese Anzahl der EMF Hilferufe in D/S/M/R/N

_No arguments._

### STATUS_VOLTAGE_HCP_HV_SIDE

Auslesen der Hochvolt-Spannung und des Interlock Status ACHTUNG: Die Spannungsfreiheit wird nicht durch diesen Aufruf garantiert! Bitte Hochvolt-Sicherheits-Maßnahmen beachten. $22     SID ReadDataByIdentifier $02 $25 DID Messwert Modus: Default

_No arguments._

### STATUS_HCP_TELESERVICE_MONITORING

Results folgender Jobs hintereinander: STATUS_LESEN_PWRLNCH_COUNTER STATUS_ABSCHALTVERHINDERER STATUS_DEGRATIONS_SOURCE STATUS_EMF_HILFERUF STATUS_HCP_RBM_RATIO

_No arguments._

### STATUS_BATTERIE_KUEHLUNG

Job ließt die Daten der Batteriekühlung aus.

_No arguments._

### STEUERN_BATTERIE_KUEHLUNG

Job zum Ansteuern der Kühlsystemkonfiguration

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT | string | Werttabelle 0 = Keine Vorgabe Kühlungsmodus 1 = Vorgabe Kühlung im Chillermodus 2 = Vorgabe Kühlung im HeatExchangermodus 3 = Vorgabe Kühlung im Duplexmodus 4 = Vorgabe Befüllung Chillerkreis 5 = Vorgabe Befüllung HeatExchangerkreis 6 = Vorgabe Befüllung beide Kreise 7 = Vorgabe Kühlung aus |

### STATUS_HCP_RBM_RATIOS

Auslesen der Ratios vom HCP

_No arguments._

### STATUS_BATTERIE_EQUILIBRIERUNG

Zustand Batterie-Equilibrierung

_No arguments._

### STEUERN_BATTERIE_EQUILIBRIERUNG

Steuern der Batterie-Equilibrierung.

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Werttabelle 0 = AUS 1 = AKTIV 2 = beendet |

### STATUS_BATTERIE_NUTZUNG

Liest die Variablen der Batterienutzung aus.

_No arguments._

### STEUERN_KURZSCHLUSS_UVW_EMP

Steuert aktiven Kurzschluss an EMP

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | 0 = inaktiv (Kurzschluss UVW gegen DC-Minus inaktiv) 1 = aktiv (Kurzschluss UVW gegen DC-Minus aktiv) 2 = beendet (Kurzschluss UVW gegen DC-Minus von Benutzer beendet) |

### STEUERN_TIMER_BATTERIE_KUEHLUNG

Job zum Vorgeben der maximalen Laufzeit des JOBS STEUERN_BATTERIE_KUEHLUNG

| Name | Type | Description |
| --- | --- | --- |
| LAUFZEIT | unsigned long | maximalen Laufzeit fuer den Job STEUERN_BATTERIE_KUEHLUNG Bereich: 0-65000s |

### STATUS_BATTERIE_ADAPTIONSWERTE_LESEN

Batterie Adaptionswert lesen Daten muessen vor dem Flashen gesichert werden.

_No arguments._

### STATUS_BATTERIE_ADAPTIONSWERTE_GESCHRIEBEN

Ließt den Status nach dem Adaptionswerte schreiben aus.

_No arguments._

### STEUERN_BATTERIE_ADAPTIONSWERTE_SCHREIBEN

Daten muessen nach dem Flashen geschrieben werden. SG muss vorher in Werkstattmode gesetzt werden

| Name | Type | Description |
| --- | --- | --- |
| BATTERIE_ACK_LADE_AMPERESTUNDEN | real | Ackumulierte Ladeamperstunden der HV-Batterie in Ah Auflösung=1 |
| BATTERIE_ACK_ENTLADE_AMPERESTUNDEN | real | Ackumulierte Entladeamperstunden der HV-Batterie in Ah Auflösung=1 |
| BATTERIE_WH | string | Batterienutzung in Wh Auflösung=0,1 |
| BATTERIE_KM_STAND_AUSTAUSCH | string | Kilometerstand des Fahrzeuges beim Batterietausch in km Auflösung=0,1 |
| SOC_STIMM_WERT | real | HV-Batterie SOC der an HOS gesendet wird in % Auflösung 1 |
| BATTERIE_ADAPT_RUECKSCHREIBEN_IO | string | Werttabelle 0 = Rueckschreiben nicht erlaubt 1 = Rueckschreiben erlaubt |

### STATUS_VM_LEISTUNGSMESSUNG

Rückmeldung des Status Motorleistungstest

_No arguments._

### STATUS_VM_LEISTUNG_LESEN

Rückgabe der VM-Werte

_No arguments._

### STEUERN_VM_LEISTUNGSMESSUNG

Für Motorleistungstest müssen elektrische Antriebskomponenten neutralisiert werden. Fzg. fährt rein verbrennungsmotorisch. 1= nur Verbrennungsmotor 0= VM und E-Motor ENERGIEPARMODE muss an sein Job ist 10 Minuten aktiv und kann nicht ausgeschalten werden!

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Werttabelle 0 = AUS 1 = EIN |

### STATUS_BATTERIE_EQUIL_HISTORIE

Historie der Batterie Equilibrierung

_No arguments._

### STEUERN_HISR_HOS_RESET

Erwirkt einen Reset der Betriebsstrategieanalyse ENERGIEPARMODE muss an sein

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Werttabelle 0 = AUS 1 = RESET |

### STATUS_VITAL_VARIABLES_DREHZAHLEN

Liest die Werte von charakteristischen Drehzahlen und Geschwindigkeiten aus

_No arguments._

### STATUS_VITAL_VARIABLES_LEISTUNGEN

Liest die Werte von charakteristischen Leistungen, Spannungen, Stroemen und Ladezustaenden aus

_No arguments._

### STATUS_VITAL_VARIABLES_MOMENTE

Liest die Werte von charakteristischen Momenten aus

_No arguments._

### STATUS_VITAL_VARIABLES_STATUS

Liest die Werte von charakteristischen Status aus

_No arguments._

### STATUS_VITAL_VARIABLES_TEMPERATUREN

Liest die Werte von charakteristischen Temperaturen aus

_No arguments._

### LESEN_INDIVIDUALDATA_LISTE

Lesen eines Listeneintrags der Individualisierungsdaten KWP2000: $21 ReadDataByLocalIdentifier (not used) $01 recordLocalIdentifier (not used)

| Name | Type | Description |
| --- | --- | --- |
| ARG_LISTENTRY | unsigned int | Nummer des angeforderten Listenelements (0,1,2,...) 0x0000 = Anforderung, das 1. Listelement zu senden 0x0001 = Anforderung, das 2. Listelement zu senden |

### LESE_INDIVIDUALDATA

Lesen von Individualisierungsdaten Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_KEYID | unsigned char | 0x00       CarMemory 0x01..0x04 Schlüsselnummer dem der RET_DATA zugeordnet ist 0xFF       Aktuell gesteckter Schlüssel ist RET_DATA zugeordnet (not used) |
| ARG_BLOCKNR | unsigned long | Zu übertragende Blocknummer (Zähler) bei langen Datenstreams z.B. 0x01020304 (4 Bytes) falls nicht verwendet als Dummy mitschleifen |
| ARG_FROMWHERE | unsigned char | Strategienummer 0x01    = Batterie Recovery |
| ARG_INQY_LEN | unsigned char | Länge des folgenden Anfragedatenstreams (not used) z.B. 0x02 für 2 Byte |
| ARG_INQY_DATA | string | ASCII-codiert Anfrage Individualdatenstream (not used) |
| ARG_RESP_LEN | unsigned char | Länge der folgenden Information wie die Antwort erhalten wird. Also ein Antwortfilter bzw. -hinweis (not used) |
| ARG_RESP_DATA | string | ASCII-codiert Information wie die Antwort erhalten wird: Also ein Antwortfilter bzw. -hinweis (not used) |

### SCHREIBEN_INDIVIDUALDATA

Schreiben von Individualisierungsdaten Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_KEYID | unsigned char | 0x00       CarMemory 0x01..0x04 Schlüsselnummer dem der ARG_DATA zugeordnet ist 0xFF       Aktuell gesteckter Schlüssel ist ARG_DATA zugeordnet (not used) |
| ARG_BLOCKNR | unsigned long | Zu übertragende Blocknummer (Zähler) bei langen Datenstreams z.B. 0x01020304 (4 Bytes) falls nicht verwendet als Dummy mitschleifen |
| ARG_FROMWHERE | unsigned char | Strategienummer 0x01    = Batterie Recovery |
| ARG_STATUS | unsigned char | 0xFF letztes oder einziges element des Datenstreams 0x00 es folgen weitere Datenstreamstücke |
| ARG_WRITE_LEN | unsigned char | Länge des folgenden Schreibauftrags z.B. 0x02 für 2 Byte |
| ARG_WRITE_DATA | string | ASCII-codiert Schreibauftrag für Individualdatenstream (not used) |
| ARG_W_RESP_LEN | unsigned char | Optional, Laenge des folgenden Antwortfilters  (not used) z.B. 0x02 für 2 Byte |
| ARG_W_RESP_DATA | string | ASCII-codiert, Optional, Antwortfilter des Schreibauftrags (not used) |
| ARG_LEN | int | Länge des Individualisierungs Datenstream oder -streamstücks |
| ARG_DATA | string | ASCII-codiert Datenstream |

### _STATUS_FLASHPROG_PRECONDITION_LESEN

Status der Vorbedingungen fuer das Flashen ueber WinKFP $22     SID ReadDataByIdentifier $03 $01 DID Messwert Modus: Default

_No arguments._

### _STATUS_PROZESSOR_LESEN_JOBS

Reset-Statistik, Resetursachen, Resetadressen Status der Level 3-Tests, NVM-Status/Checksummen Hoechste erreichte Anzahl von(Running-)Resets zwischen 2 PowerUp-Resets PowerUp-Reset setzt Wert zurueck Wert wird bei Klemme15- und Batteriewechsel nicht zurueckgesetzt $22     SID ReadDataByIdentifier $20 $4B DID Messwert Anzahl der Resets seit der letzten Neuprogrammierung Powerup-Resets(Watchdog) werden nicht erfasst Klemme15- und Batteriewechsel haben auf den Wert keinen Einfluss $22     SID ReadDataByIdentifier $20 $4A DID Messwert Ursache des letzten Resets $22     SID ReadDataByIdentifier $12 $DE DID Messwert Adresse, an der der letzte Resets aufgetreten  ist $22     SID ReadDataByIdentifier $12 $E7 DID Messwert Adresse, an der vom RAM-Test eine Fehler festgestellt wurde $22     SID ReadDataByIdentifier $20 $34 DID Messwert Status der Processorueberwachung FUSI-Level 3 $22     SID ReadDataByIdentifier $20 $39 DID Messwert Status der Checksummen- und Lesepruefung aller NVM-RAM Bereiche $22     SID ReadDataByIdentifier $20 $33 DID Messwert Modus: Default

_No arguments._

### _STATUS_REMEDIAL_ACTION_HISTORY

Gibt den Fehler bitkodiert zurück

_No arguments._

### _STATUS_REMEDIAL_ACTION

Gibt die letzten Fehler bitcodiert zurueck $22     SID ReadDataByIdentifier $03 $02 DID Messwert Modus: Default

_No arguments._

### _STEUERN_REMEDIAL_ACTION_RESET

Löschen des Historienspeichers RA Energiesparmode Werkstatt muss gesetzt sein

_No arguments._

### _BUILD_IDENT_LESEN

Auslesen der Build Informations Felder Standard Flashjob Modus   : Default

_No arguments._

### _STEUERN_STANDLOAD_VERFUEGBAR

Entwicklerjob zur Bereitstellung der Standloadfunktion mit Gas&Bremspedal

| Name | Type | Description |
| --- | --- | --- |
| STANDLOAD_AVAIL | string | Werttabelle 0 = AUS 1 = EIN |

### _STATUS_BATTERIE_AKTIVE_LEISTUNG

Liest Status der Batterieleistung aus. Gibt an von welchem Kriterium die Leistung im Moment begrenzt ist.

_No arguments._

### _STATUS_SOCR_USECASE

Rückgabe des aktuellen Betriebszustandes der HV-Speicherladestrategie

_No arguments._

### _STATUS_RESET_URSACHE

Auslesen der Reset Ursache Es werden 6 Pakete zurückgeliefert  1 Paket: Reset der nicht durch einen PowerUp Reset verursacht wurde. 5 Pakete: Alle zuletzt aufgetretenen Resets Inhalt eines Pakets: - SOC der HV-Batterie - Spannung RunCrank - Background-LoopMax Wert - PLD Feedback-Wert - Sammelfehler für Processorhardware - E-MotorA Temperatur - E-MotorA-Inverter Temperatur - km-Stand - ResetSourceAddress - ResetSource - Program/Datenstand  Beschreibung der Results wird hier nur an Hand des 1.Paket gemacht. Die anderen Pakete sind analog zu betrachten.

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
| 0x010219 | HCP:  Drehzahl Verbrennungsmotor kurzzeitig höher als zulässig.  | 0 |
| 0x010506 | HCP: Leerlaufregelsystem. Drehzahl zu niedrig  | 0 |
| 0x010507 | HCP: Leerlaufregelsystem. Drehzahl zu hoch  | 0 |
| 0x010562 | HCP: Batterie Unterspannung erkannt | 0 |
| 0x010563 | HCP: Batterie Überspannung erkannt | 0 |
| 0x01061A | HCP: Rückmeldung der Momente vom Bremssteuergerät (SBA)  via CAN Bus HCP unplausibel | 0 |
| 0x01061B | HCP: Unplausibilität Drehhmoment Fahranforderung mit HCP-intern berechnetem Moment. | 0 |
| 0x0107A3 | HCP: Getriebe. Kupplung C1 im stufenlosen Getriebesystem unberechtigt geschlossen in Betriebsart EVT2 | 0 |
| 0x0107A5 | HCP: Getriebe. Kupplung C2 im stufenlosen Getriebesystem unberechtigt geschlossen in Betriebsart EVT1 | 0 |
| 0x0107A7 | HCP: Getriebe. Kupplung C3 im stufenlosen Getriebesystem unberechtigt geschlossen in Betriebsart EVT2 | 0 |
| 0x0107A9 | HCP: Getriebe. Kupplung C4 im stufenlosen Getriebesystem unberechtigt geschlossen in Betriebsart EVT2 | 0 |
| 0x010A02 | HIM: Kühlkreislauf PEB, Temperatursensor Kühlmittelaustritt, Kurzschluss nach Masse | 0 |
| 0x010A03 | HIM: Kühlkreislauf PEB, Temperatursensor Kühlmittelaustritt, Kurzschluss nach Plus | 0 |
| 0x010A0C | BPCM: Hochvoltkontaktüberwachung (High Voltage Interlock Loop), Kurzschluss nach Masse oder Leitungsunterbrechung | 0 |
| 0x010A0D | BPCM: Hochvoltkontaktüberwachung (High Voltage Interlock Loop), Kurzschluss nach Plus | 0 |
| 0x010A1B | MCPB: PEB-interner Steuergerätefehler Prozessorhardware. Abschaltung der Elektromaschinen | 0 |
| 0x010A1C | MCPA: PEB-interner Steuergerätefehler Prozessorhardware. Abschaltung der Elektromaschinen | 0 |
| 0x010A1F | BPCM: Steuergerät interner Hardwarefehler (Mikroprozessor) | 0 |
| 0x010A2A | MCPB: Temperatursensor Getriebeinterne Elektromaschine 1  Leitungsunterbrechung oder Untertemperatur   | 0 |
| 0x010A2B | MCPB: Signal Temperatursensor Getriebeinterne Elektromaschine 1  unplausibel/ ausserhalb zulässiger Bereich  | 0 |
| 0x010A2C | MCPB: Temperatursensor Getriebeinterne Elektromaschine 1  Kurzschluss nach Masse oder Übertemperatur.  | 0 |
| 0x010A2F | MCPB: Getriebeinterne Elektromaschine 1  Überhitzungsfehler | 0 |
| 0x010A30 | MCPA: Temperatursensor Getriebeinterne Elektromaschine 2 Leitungsunterbrechung oder Untertemperatur   | 0 |
| 0x010A31 | MCPA: Signal Temperatursensor Getriebeinterne Elektromaschine 2 unplausibel/ ausserhalb zulässiger Bereich  | 0 |
| 0x010A32 | MCPA: Temperatursensor Getriebeinterne Elektromaschine 2 Kurzschluss nach Masse oder Übertemperatur.  | 0 |
| 0x010A35 | MCPA: Getriebeinterne Elektromaschine 2 Überhitzungsfehler | 0 |
| 0x010A3F | MCPB: Getriebeinterne Elektromaschine 1  Verlust/ Störung Positionssignal Resolver. Abschaltung der Elektromaschinen  | 0 |
| 0x010A40 | MCPB: Getriebeinterne Elektromaschine 1  Resolver Toleranzüberschreitung Positionssignal | 0 |
| 0x010A44 | MCPB: Getriebeinterne Elektromaschine 1  Überdrehzahl des Resolvers. Abschaltung der Elektromaschinen | 0 |
| 0x010A45 | MCPA: Getriebeinterne Elektromaschine 2 Verlust/ Störung Positionssignal Resolver. Abschaltung der Elektromaschinen  | 0 |
| 0x010A46 | MCPA: Getriebeinterne Elektromaschine 2 Resolver Toleranzüberschreitung Positionssignal | 0 |
| 0x010A4A | MCPA: Getriebeinterne Elektromaschine 2 Überdrehzahl des Resolvers. Abschaltung der Elektromaschinen | 0 |
| 0x010A7D | HCP: Ladezustand Hochvoltbatterie niedrig.  | 0 |
| 0x010A7E | HCP: Hochvoltbatterie Übertemperatur  erkannt  | 0 |
| 0x010A80 | BPCM: Hochvoltbatterie defekt, Innenwiderstand über Schwellenwert | 0 |
| 0x010A93 | MCPA: PEB-interner Kühlkreislauf Fehler Kühlmittelfluss | 0 |
| 0x010A95 | BPCM: Hochvoltbatterie Sicherung defekt | 0 |
| 0x010A9C | BPCM:Temperatursensor 1, Wert unplausibel | 0 |
| 0x010A9D | BPCM:Temperatursensor 1, Wert unter Sollwert | 0 |
| 0x010A9E | BPCM:Temperatursensor 1, Wert über Sollwert | 0 |
| 0x010AA6 | BPCM: Isolationsüberwachung Fehler | 0 |
| 0x010ABB | BPCM: interne Spannungsmessung, Wert unplausibel | 0 |
| 0x010ABC | BPCM: interne Spannungsmessung, Wert unter Sollwert | 0 |
| 0x010ABD | BPCM: interne Spannungsmessung, Wert über Sollwert | 0 |
| 0x010AC0 | BPCM: interne Strommessung, Wert unplausibel | 0 |
| 0x010AC1 | BPCM: interne Strommessung, Wert unter Sollwert | 0 |
| 0x010AC2 | BPCM: interne Strommessung, Wert über Sollwert | 0 |
| 0x010AC6 | BPCM:Temperatursensor 2, Wert unplausibel | 0 |
| 0x010AC7 | BPCM:Temperatursensor 2, Wert unter Sollwert | 0 |
| 0x010AC8 | BPCM:Temperatursensor 2, Wert über Sollwert | 0 |
| 0x010ACB | BPCM:Temperatursensor 3, Wert unplausibel | 0 |
| 0x010ACC | BPCM:Temperatursensor 3, Wert unter Sollwert | 0 |
| 0x010ACD | BPCM:Temperatursensor 3, Wert über Sollwert | 0 |
| 0x010ADC | BPCM: Hochvoltbatterie Pluspol Schütz, 12-V-Treiber, Kurzschluß nach 12-V-Versorgung | 0 |
| 0x010AE0 | BPCM: Hochvoltbatterie Minuspol Schütz, 12-V-Treiber, Kurzschluß nach 12-V-Versorgung | 0 |
| 0x010AE7 | BPCM: Hochvoltbatterie Vorbelastung Schütz, 12-V-Treiber, Kurzschluß nach 12-V-Versorgung | 0 |
| 0x010AE9 | BPCM:Temperatursensor 4, Wert unplausibel | 0 |
| 0x010AEA | BPCM:Temperatursensor 4, Wert unter Sollwert | 0 |
| 0x010AEB | BPCM:Temperatursensor 4, Wert über Sollwert | 0 |
| 0x010AEE | MCPA: PEB-interner Inverter Phase U Leistungstransistor Temperatur Bereichsunter-/ überschreitung | 0 |
| 0x010AEF | MCPA: PEB-interner Inverter Phase U Leistungstransistor Temperatursensor Kurzschluss nach Masse | 0 |
| 0x010AF0 | MCPA: PEB-interner Inverter Phase U Leistungstransistor Temperatursensor Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x010AF3 | MCPB: PEB-interner Inverter Phase U Leistungstransistor Temperatur Bereichsunter-/ überschreitung | 0 |
| 0x010AF4 | MCPB: PEB-interner Inverter Phase U Leistungstransistor Temperatursensor Kurzschluss nach Masse | 0 |
| 0x010AF5 | MCPB: PEB-interner Inverter Phase U Leistungstransistor Temperatursensor Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x010AFA | BPCM: Hochvoltbatterie, Unterspannung | 0 |
| 0x010AFB | BPCM: Hochvoltbatterie, Überspannung | 0 |
| 0x010B0A | EMPI: Spannungsversorgung (14V) Spannung zu niedrig.   | 0 |
| 0x010B0B | EMPI: Spannungsversorgung (14V) Spannung zu hoch.  | 0 |
| 0x010B0D | EMPI: PEB-interner Steuergerätefehler Inverter Hardware oder Treiberlogik defekt. | 0 |
| 0x010B15 | BPCM: externe Spannungsmessung, Wert unplausibel | 0 |
| 0x010B16 | BPCM: externe Spannungsmessung, Wert unter Sollwert | 0 |
| 0x010B17 | BPCM: externe Spannungsmessung, Wert über Sollwert | 0 |
| 0x010B3C | BPCM: Hochvoltbatterie Zellenblock 1, Spannungswert unplausibel | 0 |
| 0x010B3D | BPCM: Hochvoltbatterie Zellenblock 1, Spannungswert unter Sollwert | 0 |
| 0x010B3E | BPCM: Hochvoltbatterie Zellenblock 1, Spannungswert über Sollwert | 0 |
| 0x010B41 | BPCM: Hochvoltbatterie Zellenblock 2, Spannungswert unplausibel | 0 |
| 0x010B42 | BPCM: Hochvoltbatterie Zellenblock 2, Spannungswert unter Sollwert | 0 |
| 0x010B43 | BPCM: Hochvoltbatterie Zellenblock 2, Spannungswert über Sollwert | 0 |
| 0x010B46 | BPCM: Hochvoltbatterie Zellenblock 3, Spannungswert unplausibel | 0 |
| 0x010B47 | BPCM: Hochvoltbatterie Zellenblock 3, Spannungswert unter Sollwert | 0 |
| 0x010B48 | BPCM: Hochvoltbatterie Zellenblock 3, Spannungswert über Sollwert | 0 |
| 0x010B4B | BPCM: Hochvoltbatterie Zellenblock 4, Spannungswert unplausibel | 0 |
| 0x010B4C | BPCM: Hochvoltbatterie Zellenblock 4, Spannungswert unter Sollwert | 0 |
| 0x010B4D | BPCM: Hochvoltbatterie Zellenblock 4, Spannungswert über Sollwert | 0 |
| 0x010B50 | BPCM: Hochvoltbatterie Zellenblock 5, Spannungswert unplausibel | 0 |
| 0x010B51 | BPCM: Hochvoltbatterie Zellenblock 5, Spannungswert unter Sollwert | 0 |
| 0x010B52 | BPCM: Hochvoltbatterie Zellenblock 5, Spannungswert über Sollwert | 0 |
| 0x010B55 | BPCM: Hochvoltbatterie Zellenblock 6, Spannungswert unplausibel | 0 |
| 0x010B56 | BPCM: Hochvoltbatterie Zellenblock 6, Spannungswert unter Sollwert | 0 |
| 0x010B57 | BPCM: Hochvoltbatterie Zellenblock 6, Spannungswert über Sollwert | 0 |
| 0x010B5A | BPCM: Hochvoltbatterie Zellenblock 7, Spannungswert unplausibel | 0 |
| 0x010B5B | BPCM: Hochvoltbatterie Zellenblock 7, Spannungswert unter Sollwert | 0 |
| 0x010B5C | BPCM: Hochvoltbatterie Zellenblock 7, Spannungswert über Sollwert | 0 |
| 0x010B5F | BPCM: Hochvoltbatterie Zellenblock 8, Spannungswert unplausibel | 0 |
| 0x010B60 | BPCM: Hochvoltbatterie Zellenblock 8, Spannungswert unter Sollwert | 0 |
| 0x010B61 | BPCM: Hochvoltbatterie Zellenblock 8, Spannungswert über Sollwert | 0 |
| 0x010B64 | BPCM: Hochvoltbatterie Zellenblock 9, Spannungswert unplausibel | 0 |
| 0x010B65 | BPCM: Hochvoltbatterie Zellenblock 9, Spannungswert unter Sollwert | 0 |
| 0x010B66 | BPCM: Hochvoltbatterie Zellenblock 9, Spannungswert über Sollwert | 0 |
| 0x010B69 | BPCM: Hochvoltbatterie Zellenblock 10, Spannungswert unplausibel | 0 |
| 0x010B6A | BPCM: Hochvoltbatterie Zellenblock 10, Spannungswert unter Sollwert | 0 |
| 0x010B6B | BPCM: Hochvoltbatterie Zellenblock 10, Spannungswert über Sollwert | 0 |
| 0x010B6E | BPCM: Hochvoltbatterie Zellenblock 11, Spannungswert unplausibel | 0 |
| 0x010B6F | BPCM: Hochvoltbatterie Zellenblock 11, Spannungswert unter Sollwert | 0 |
| 0x010B70 | BPCM: Hochvoltbatterie Zellenblock 11, Spannungswert über Sollwert | 0 |
| 0x010B73 | BPCM: Hochvoltbatterie Zellenblock 12, Spannungswert unplausibel | 0 |
| 0x010B74 | BPCM: Hochvoltbatterie Zellenblock 12, Spannungswert unter Sollwert | 0 |
| 0x010B75 | BPCM: Hochvoltbatterie Zellenblock 12, Spannungswert über Sollwert | 0 |
| 0x010B78 | BPCM: Hochvoltbatterie Zellenblock 13, Spannungswert unplausibel | 0 |
| 0x010B79 | BPCM: Hochvoltbatterie Zellenblock 13, Spannungswert unter Sollwert | 0 |
| 0x010B7A | BPCM: Hochvoltbatterie Zellenblock 13, Spannungswert über Sollwert | 0 |
| 0x010B7D | BPCM: Hochvoltbatterie Zellenblock 14, Spannungswert unplausibel | 0 |
| 0x010B7E | BPCM: Hochvoltbatterie Zellenblock 14, Spannungswert unter Sollwert | 0 |
| 0x010B7F | BPCM: Hochvoltbatterie Zellenblock 14, Spannungswert über Sollwert | 0 |
| 0x010B82 | BPCM: Hochvoltbatterie Zellenblock 15, Spannungswert unplausibel | 0 |
| 0x010B83 | BPCM: Hochvoltbatterie Zellenblock 15, Spannungswert unter Sollwert | 0 |
| 0x010B84 | BPCM: Hochvoltbatterie Zellenblock 15, Spannungswert über Sollwert | 0 |
| 0x010B87 | BPCM: Hochvoltbatterie Zellenblock 16, Spannungswert unplausibel | 0 |
| 0x010B88 | BPCM: Hochvoltbatterie Zellenblock 16, Spannungswert unter Sollwert | 0 |
| 0x010B89 | BPCM: Hochvoltbatterie Zellenblock 16, Spannungswert über Sollwert | 0 |
| 0x010B8C | BPCM: Hochvoltbatterie Zellenblock 17, Spannungswert unplausibel | 0 |
| 0x010B8D | BPCM: Hochvoltbatterie Zellenblock 17, Spannungswert unter Sollwert | 0 |
| 0x010B8E | BPCM: Hochvoltbatterie Zellenblock 17, Spannungswert über Sollwert | 0 |
| 0x010B91 | BPCM: Hochvoltbatterie Zellenblock 18, Spannungswert unplausibel | 0 |
| 0x010B92 | BPCM: Hochvoltbatterie Zellenblock 18, Spannungswert unter Sollwert | 0 |
| 0x010B93 | BPCM: Hochvoltbatterie Zellenblock 18, Spannungswert über Sollwert | 0 |
| 0x010B96 | BPCM: Hochvoltbatterie Zellenblock 19, Spannungswert unplausibel | 0 |
| 0x010B97 | BPCM: Hochvoltbatterie Zellenblock 19, Spannungswert unter Sollwert | 0 |
| 0x010B98 | BPCM: Hochvoltbatterie Zellenblock 19, Spannungswert über Sollwert | 0 |
| 0x010B9B | BPCM: Hochvoltbatterie Zellenblock 20, Spannungswert unplausibel | 0 |
| 0x010B9C | BPCM: Hochvoltbatterie Zellenblock 20, Spannungswert unter Sollwert | 0 |
| 0x010B9D | BPCM: Hochvoltbatterie Zellenblock 20, Spannungswert über Sollwert | 0 |
| 0x010BA0 | BPCM: Hochvoltbatterie Zellenblock 21, Spannungswert unplausibel | 0 |
| 0x010BA1 | BPCM: Hochvoltbatterie Zellenblock 21, Spannungswert unter Sollwert | 0 |
| 0x010BA2 | BPCM: Hochvoltbatterie Zellenblock 21, Spannungswert über Sollwert | 0 |
| 0x010BA5 | BPCM: Hochvoltbatterie Zellenblock 22, Spannungswert unplausibel | 0 |
| 0x010BA6 | BPCM: Hochvoltbatterie Zellenblock 22, Spannungswert unter Sollwert | 0 |
| 0x010BA7 | BPCM: Hochvoltbatterie Zellenblock 22, Spannungswert über Sollwert | 0 |
| 0x010BAA | BPCM: Hochvoltbatterie Zellenblock 23, Spannungswert unplausibel | 0 |
| 0x010BAB | BPCM: Hochvoltbatterie Zellenblock 23, Spannungswert unter Sollwert | 0 |
| 0x010BAC | BPCM: Hochvoltbatterie Zellenblock 23, Spannungswert über Sollwert | 0 |
| 0x010BAF | BPCM: Hochvoltbatterie Zellenblock 24, Spannungswert unplausibel | 0 |
| 0x010BB0 | BPCM: Hochvoltbatterie Zellenblock 24, Spannungswert unter Sollwert | 0 |
| 0x010BB1 | BPCM: Hochvoltbatterie Zellenblock 24, Spannungswert über Sollwert | 0 |
| 0x010BB4 | BPCM: Hochvoltbatterie Zellenblock 25, Spannungswert unplausibel | 0 |
| 0x010BB5 | BPCM: Hochvoltbatterie Zellenblock 25, Spannungswert unter Sollwert | 0 |
| 0x010BB6 | BPCM: Hochvoltbatterie Zellenblock 25, Spannungswert über Sollwert | 0 |
| 0x010BB9 | BPCM: Hochvoltbatterie Zellenblock 26, Spannungswert unplausibel | 0 |
| 0x010BBA | BPCM: Hochvoltbatterie Zellenblock 26, Spannungswert unter Sollwert | 0 |
| 0x010BBB | BPCM: Hochvoltbatterie Zellenblock 26, Spannungswert über Sollwert | 0 |
| 0x010BBD | BPCM: Hochvoltbatterie, Spannungsabweichung zwischen den Zellenblöcken über Sollwert | 0 |
| 0x010BD2 | MCPA: PEB-interner Inverter Phase V Leistungstransistor Temperatur Bereichsunter-/ überschreitung | 0 |
| 0x010BD3 | MCPA: PEB-interner Inverter Phase V Leistungstransistor Temperatursensor Kurzschluss nach Masse | 0 |
| 0x010BD4 | MCPA: PEB-interner Inverter Phase V Leistungstransistor Temperatursensor Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x010BD7 | MCPB: PEB-interner Inverter Phase V Leistungstransistor Temperatur Bereichsunter-/ überschreitung | 0 |
| 0x010BD8 | MCPB: PEB-interner Inverter Phase V Leistungstransistor Temperatursensor Kurzschluss nach Masse | 0 |
| 0x010BD9 | MCPB: PEB-interner Inverter Phase V Leistungstransistor Temperatursensor Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x010BDC | MCPA: PEB-interner Inverter Phase W Leistungstransistor Temperatur Bereichsunter-/ überschreitung | 0 |
| 0x010BDD | MCPA: PEB-interner Inverter Phase W Leistungstransistor Temperatursensor Kurzschluss nach Masse | 0 |
| 0x010BDE | MCPA: PEB-interner Inverter Phase W Leistungstransistor Temperatursensor Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x010BE1 | MCPB: PEB-interner Inverter Phase W Leistungstransistor Temperatur Bereichsunter-/ überschreitung | 0 |
| 0x010BE2 | MCPB: PEB-interner Inverter Phase W Leistungstransistor Temperatursensor Kurzschluss nach Masse | 0 |
| 0x010BE3 | MCPB: PEB-interner Inverter Phase W Leistungstransistor Temperatursensor Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x010BE6 | MCPB: PEB-interner Inverter Phase U Stromsensor unzulässige Grundabweichung | 0 |
| 0x010BE7 | MCPB: PEB-interner Inverter Phase U Stromsensor Kurzschluss nach Masse. Abschaltung der Elektromaschinen | 0 |
| 0x010BE8 | MCPB: PEB-interner Inverter Phase U Stromsensor Kurzschluss nach Plus oder Leitungsunterbrechung. Abschaltung der Elektromaschinen | 0 |
| 0x010BEA | MCPB: PEB-interner Inverter Phase V Stromsensor unzulässige Grundabweichung | 0 |
| 0x010BEB | MCPB: PEB-interner Inverter Phase V Stromsensor Kurzschluss nach Masse. Abschaltung der Elektromaschinen | 0 |
| 0x010BEC | MCPB: PEB-interner Inverter Phase V Stromsensor Kurzschluss nach Plus oder Leitungsunterbrechung. Abschaltung der Elektromaschinen | 0 |
| 0x010BEE | MCPB: PEB-interner Inverter Phase W Stromsensor unzulässige Grundabweichung | 0 |
| 0x010BEF | MCPB: PEB-interner Inverter Phase W Stromsensor Kurzschluss nach Masse. Abschaltung der Elektromaschinen | 0 |
| 0x010BF0 | MCPB: PEB-interner Inverter Phase W Stromsensor Kurzschluss nach Plus oder Leitungsunterbrechung. Abschaltung der Elektromaschinen | 0 |
| 0x010BF2 | MCPA: PEB-interner Inverter Phase U Stromsensor unzulässige Grundabweichung | 0 |
| 0x010BF3 | MCPA: PEB-interner Inverter Phase U Stromsensor Kurzschluss nach Masse. Abschaltung der Elektromaschinen | 0 |
| 0x010BF4 | MCPA: PEB-interner Inverter Phase U Stromsensor Kurzschluss nach Plus oder Leitungsunterbrechung. Abschaltung der Elektromaschinen | 0 |
| 0x010BF6 | MCPA: PEB-interner Inverter Phase V Stromsensor unzulässige Grundabweichung | 0 |
| 0x010BF7 | MCPA: PEB-interner Inverter Phase V Stromsensor Kurzschluss nach Masse. Abschaltung der Elektromaschine | 0 |
| 0x010BF8 | MCPA: PEB-interner Inverter Phase V Stromsensor Kurzschluss nach Plus oder Leitungsunterbrechung. Abschaltung der Elektromaschinen | 0 |
| 0x010BFA | MCPA: PEB-interner Inverter Phase W Stromsensor unzulässige Grundabweichung | 0 |
| 0x010BFB | MCPA: PEB-interner Inverter Phase W Stromsensor Kurzschluss nach Masse. Abschaltung der Elektromaschinen | 0 |
| 0x010BFC | MCPA: PEB-interner Inverter Phase W Stromsensor Kurzschluss nach Plus oder Leitungsunterbrechung. Abschaltung der Elektromaschinen | 0 |
| 0x010BFD | MCPB: Getriebeinterne Elektromaschine 1  Hochvoltleitungen Versorgung Stromsensor Korrelationsfehler. | 0 |
| 0x010BFE | MCPA: Getriebeinterne Elektromaschine 2 Hochvoltleitungen Versorgung Stromsensor Korrelationsfehler. | 0 |
| 0x010BFF | MCPB: Getriebeinterne Elektromaschine 1  Hochvoltleitungen Versorgung Elektromotorströme asymmetrisch. Leitungsfehler, Isolationsfehler, interne Messfehler | 0 |
| 0x010C01 | MCPB: Getriebeinterne Elektromaschine 1  Hochvoltleitungen Versorgung Elektromotorströme Phasenlage falsch oder Leitungen vertauscht. Strom zu hoch Abschaltung der Elektromaschinen | 0 |
| 0x010C02 | MCPA: Getriebeinterne Elektromaschine 2 Hochvoltleitungen Versorgung Elektromotorströme asymmetrisch. Leitungsfehler, Isolationsfehler, interne Messfehler | 0 |
| 0x010C04 | MCPA: Getriebeinterne Elektromaschine 2 Hochvoltleitungen Versorgung Elektromotorströme Phasenlage falsch oder Leitungen vertauscht. Strom zu hoch. Abschaltung der Elektromaschinen | 0 |
| 0x010C05 | MCPB: Getriebeinterne Elektromaschine 1  Hochvoltleitungen Versorgung Elektromotorströme Leitungsunterbrechung. Abschaltung der Elektromaschinen | 0 |
| 0x010C08 | MCPA: Getriebeinterne Elektromaschine 2 Hochvoltleitungen Versorgung Elektromotorströme Leitungsunterbrechung. Abschaltung der Elektromaschinen | 0 |
| 0x010C0B | MCPB: PEB-interner Inverterfehler. Spannungsversorgung Leistungselektronik ausgefallen. Abschaltung der Elektromaschinen | 0 |
| 0x010C0E | MCPA: PEB-interner Inverter fehlerhaft. Spannungsversorgung Leistungselektronik ausgefallen. Abschaltung der Elektromaschinen | 0 |
| 0x010C11 | MCPB: PEB-interner Inverter Phase U Leistungstransistor Übertemperatur | 0 |
| 0x010C12 | MCPB: PEB-interner Inverter Phase V Leistungstransistor Übertemperatur | 0 |
| 0x010C13 | MCPB: PEB-interner Inverter Phase W Leistungstransistor Übertemperatur | 0 |
| 0x010C14 | MCPA: PEB-interner Inverter Phase U Leistungstransistor Übertemperatur | 0 |
| 0x010C15 | MCPA: PEB-interner Inverter Phase V Leistungstransistor Übertemperatur | 0 |
| 0x010C16 | MCPA: PEB-interner Inverter Phase W Leistungstransistor Übertemperatur | 0 |
| 0x010C17 | MCPB: Getriebeinterne Elektromaschine 1  Resolver Grundwerte nicht eingelernt | 0 |
| 0x010C18 | MCPA: Getriebeinterne Elektromaschine 2 Resolver Grundwerte nicht eingelernt | 0 |
| 0x010C1E | EMPI: PEB-interner Steuergerätefehler Bereichsunterschreitung Sensorwert Temperatursensor. Leitungsunterbrechung oder Kurzschluß nach Masse. | 0 |
| 0x010C1F | EMPI: PEB-interner Steuergerätefehler Bereichsüberschreitung Sensorwert Temperatursensor. Leitungsunterbrechung oder Kurzschluss nach Plus. | 0 |
| 0x010C26 | EMPI: Überstrom fließt durch Hybrid-Ölpumpe. Strom (gemessen im Steuergerät) höher als Schwellwert.  | 0 |
| 0x010C2A | EMPI: Hybrid Ölpumpe Motor blockiert | 0 |
| 0x010C2F | HCP: Verbrennungsmotordrehzahl von Kurbelwellensensor und über Motor A Resolver bestimmte Verbrennungsmotordrehzahl weichen voneinander ab | 0 |
| 0x010C30 | HCP: Ladezustand Hochvoltbatterie hoch.  | 0 |
| 0x010C31 | MCPB: PEB-interner Kühlkreislauf Fehler Kühlmittelfluss | 0 |
| 0x010C43 | BPCM: Kühlmitteleintritt, Kühlmitteltemperatursensor, Wert unplausibel | 0 |
| 0x010C44 | BPCM: Kühlmitteleintritt, Kühlmitteltemperatursensor, Wert unter Sollwert | 0 |
| 0x010C45 | BPCM: Kühlmitteleintritt, Kühlmitteltemperatursensor, Wert über Sollwert | 0 |
| 0x010C4C | BPCM: Kühlmittelpumpe Versorgungspannung, Unterspannung | 0 |
| 0x010C4D | BPCM: Kühlmittelpumpe Versorgungspannung, Überspannung | 0 |
| 0x010C4E | MCPB: Getriebeinterne Elektromaschine 1  Resolver Grundwerte einlernen misslungen. Abschaltung der Elektromaschinen | 0 |
| 0x010C4F | MCPA: Getriebeinterne Elektromaschine 2 Resolver Grundwerte einlernen fehlgeschlagen. Abschaltung der Elektromaschinen | 0 |
| 0x010C52 | MCPB: Getriebeinterne Elektromaschine 1  Resolver Spur A Kurzschluss nach Masse | 0 |
| 0x010C53 | MCPB: Getriebeinterne Elektromaschine 1   Resolver Spur A Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x010C57 | MCPA: Getriebeinterne Elektromaschine 2 Resolver Spur A Kurzschluss nach Masse | 0 |
| 0x010C58 | MCPA: Getriebeinterne Elektromaschine 2 Resolver Spur A Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x010C5C | MCPB: Getriebeinterne Elektromaschine 1  Resolver Spur B Kurzschluss nach Masse  | 0 |
| 0x010C5D | MCPB: Getriebeinterne Elektromaschine 1  Resolver Spur B Leitungsunterbrechung oder Kurzschluss nach Plus  | 0 |
| 0x010C61 | MCPA: Getriebeinterne Elektromaschine 2  Resolver Spur B Kurzschluss nach Masse  | 0 |
| 0x010C62 | MCPA: Getriebeinterne Elektromaschine 2  Resolver Spur B Leitungsunterbrechung oder Kurzschluss nach Plus  | 0 |
| 0x010C76 | BPCM: aktive Entladung zu langsam | 0 |
| 0x010C77 | BPCM: Aktivierung des Hochvoltbordnetzs fehlgeschlagen, Vorbelastung zu schnell | 0 |
| 0x010C78 | HCP: Aktivierung des Hochvoltbordnetzs nach SchLießung der Schütze fehlgeschlagen, Vorbelastung zu langsam | 0 |
| 0x01139F | HCP:  Drehzahl Signal Elektromaschine A: Rückwärtsdrehender Verbrennungsmotor erkannt | 0 |
| 0x0115A9 | Energiesparmodus - Transportmodus | 0 |
| 0x011828 | HCP: Elektronische Drucksteuerventile Sollwerte falsch oder Werte nicht plausibel mit aktuellem Betriebszustand | 0 |
| 0x011829 | HCP: Kupplungs-Ansteuerung Sollwerte falsch oder Werte nicht plausibel mit aktuellem Betriebszustand | 0 |
| 0x011A00 | HCP:  Drehmoment Signal Verbrennungsmotor aktuell geringer als angefordert. Verbrennungsmotor startet trotz Aufforderung nicht. Problemverursachung ggfs. Verbrennungsmotor | 0 |
| 0x011A01 | BPCM: Steuergerät interner Hardwarefehler (EEPROM) | 0 |
| 0x011A02 | HCP: Steckverbindung PEB fehlerhaft. Batteriekontakt offen. Mögliche Ursache Steckerkontakt oder Kabelbaum | 0 |
| 0x011A03 | HCP: Steckverbindung PEB fehlerhaft. Kurzschluss nach Masse festgestellt. Mögliche Ursache Steckerkontakt oder Kabelbaum | 0 |
| 0x011A04 | HCP: Steckverbindung PEB fehlerhaft. Kurzschluss nach Versorgungsspannung festgestellt. Mögliche Ursache Steckerkontakt oder Kabelbaum | 0 |
| 0x011A05 | BPCM: Steuergerät interner Hardwarefehler (RAM) | 0 |
| 0x011A06 | BPCM: Steuergerät interner Hardwarefehler (ROM) | 0 |
| 0x011A07 | BPCM: Stromsensor, Versorgungspannung außerhalb Sollbereich | 0 |
| 0x011A08 | BPCM: Hochvoltbatterie Schütze, Kontakte kleben | 0 |
| 0x011A09 | HCP:  Airbag Auslösung erkannt. Abschaltung der Hochspannung durch Pyrofuse (integriert in der SBK - SicherheitsBatterieKlemme). | 0 |
| 0x011A0A | HCP: Eingangssignal liegt ausserhalb des gültigen Spannungsbereiches | 0 |
| 0x011A0B | BPCM: Hochvoltbatterie, Summe der einzelnen Sensorspannungen unplausibel | 0 |
| 0x011A0C | BPCM: Steuergerät, Versorgungspannung Unterspannung | 0 |
| 0x011A0D | BPCM: Steuergerät, Versorgungspannung Überspannung | 0 |
| 0x011A0E | MCPB: Verifikationsfehler getriebeinterne Elektromaschine 1. Kalibrierdaten für Hochvolt-Sensorik ungültig   | 0 |
| 0x011A0F | MCPA: Verifikationsfehler getriebeinterne Elektromaschine 2. Kalibrierdaten für Hochvolt-Sensorik ungültig   | 0 |
| 0x011A10 | MCPB: Temperatursensorwert Kühlmitteltemperatur PEB unplausibel | 0 |
| 0x011A11 | MCPA: Temperatursensorwert Kühlmitteltemperatur PEB unplausibel   | 0 |
| 0x011A12 | BPCM: Schütze, Versorgungspannung Unterspannung | 0 |
| 0x011A13 | BPCM: Schütze, Versorgungspannung Überspannung | 0 |
| 0x011A19 | BPCM: Hochvoltbatterie, mehrere Temperatursensoren ausgefallen | 0 |
| 0x011A20 | BPCM: Aktivierung des Hochvoltbordnetzs fehlgeschlagen, Vorbelastung zu langsam | 0 |
| 0x011A21 | HCP: Hochvoltbordnetz Schütze unaufgefordert offen erkannt. Betriebsstörung. Kommentar | 0 |
| 0x011A25 | MCPB: PEB-interner Inverterfehler Überstrom am Umrichter. Abschaltung der Elektromaschinen | 0 |
| 0x011A26 | MCPA: PEB-interner Inverter fehlerhaft. Überstrom am Umrichter. Abschaltung der Elektromaschinen | 0 |
| 0x011A2A | MCPA: PEB-interne Logikspannung (5V) zu hoch Ursache im Bordnetz (Niederspannungsseite) | 0 |
| 0x011A2B | MCPA: PEB-interne Logikspannung (5V) zu niedrig Ursache im Bordnetz (Niederspannungsseite) | 0 |
| 0x011A2C | MCPB: PEB-interne Logikspannung (5V) zu hoch Ursache im Bordnetz (Niederspannungsseite) | 0 |
| 0x011A2D | MCPB: PEB-interne Logikspannung (5V) zu niedrig Ursache im Bordnetz (Niederspannungsseite) | 0 |
| 0x011A30 | BPCM: Weckleitung 1, Kurzschluss nach Masse | 0 |
| 0x011A31 | BPCM: Weckleitung 1, Kurzschluss nach Plus | 0 |
| 0x011A32 | BPCM: Weckleitung 2, Kurzschluss nach Plus | 0 |
| 0x011A33 | MCPA: PEB-interne Spannungsversorgung (15V) zu hoch Ursache PEB-intern | 0 |
| 0x011A34 | MCPA: PEB-interne Spannungsversorgung (15V) zu niedrig Ursache PEB-intern | 0 |
| 0x011A35 | MCPB: PEB-interne Spannungsversorgung (15V) zu hoch Ursache PEB-intern | 0 |
| 0x011A36 | MCPB: PEB-interne Spannungsversorgung (15V) zu niedrig Ursache PEB-intern | 0 |
| 0x011A37 | MCPA: PEB-interne Steuerung Drehmomentüberwachung unplausibel | 0 |
| 0x011A38 | MCPB: PEB-interne Steuerung Drehmomentüberwachung unplausibel | 0 |
| 0x011A40 | HCP: HCP-interner Steuergerätefehler ROM-Check fehlerhaft  | 0 |
| 0x011A41 | HCP: HCP-interner Steuergerätefehler RAM-Check fehlerhaft | 0 |
| 0x011A42 | HCP: HCP-interner Steuergerätefehler EEPROM Schreibfehler | 0 |
| 0x011A43 | HCP: HCP-interner Steuergerätefehler Prozessor Hardware: Externer Überwachungsrechner fehlerhaft | 0 |
| 0x011A44 | HCP: HCP-interner Steuergerätefehler Prozessor Hardware. Abschalten im Fehlerfalle nicht gewährleistet  | 0 |
| 0x011A45 | HCP: HCP-interner Steuergerätefehler Steuergerät wurde nicht programmiert  | 0 |
| 0x011A46 | HCP: HCP-interner Steuergerätefehler EEPROM Lesefehler   | 0 |
| 0x011A47 | HCP: HCP-interner Steuergerätefehler Prozessor Leistungsproblem | 0 |
| 0x011A48 | HCP: HCP-interner Steuergerätefehler RAM Datenredundanz Fehler | 0 |
| 0x011A4F | MCPB: PEB-interne Steuerung Softwarefehler oder Steuergerät nicht programmiert. Abschaltung der Elektromaschinen | 0 |
| 0x011A50 | MCPB: PEB-interne Steuerung RAM Arbeitsspeicher Fehler | 0 |
| 0x011A51 | MCPB: PEB-interne Steuerung ROM Lesespeicher Fehler | 0 |
| 0x011A52 | MCPA: PEB-interne Steuerung Softwarefehler oder Steuergerät nicht programmiert. Abschaltung der Elektromaschinen | 0 |
| 0x011A53 | MCPA: PEB-interne Steuerung RAM Arbeitsspeicher Fehler | 0 |
| 0x011A54 | MCPA: PEB-interne Steuerung ROM Lesespeicher Fehler | 0 |
| 0x011A55 | EMPI: PEB-interner Steuergerätefehler Übertemperatur Hybrid-Ölpumpenansteuerung.  | 0 |
| 0x011A5A | BPCM: Hochvoltbatterie, Überwachung Leitungsunterbrechung, Fehlfunktion | 0 |
| 0x011A69 | EMPI: Spannung aus Hochvoltbatterie zu gering. Spannungsschwelle unterschritten. Problemverursachung ggfs. in Hochvoltbatterie | 0 |
| 0x011A6A | EMPI: Spannung aus Hochvoltbatterie zu hoch. Spannungsschwelle überschritten. | 0 |
| 0x011A6B | EMPI: Hochvolt Spannungssensor Phase U allgemeiner Fehler. Sensorbereich unterschritten oder überschritten | 0 |
| 0x011A6C | EMPI: Hochvolt Spannungssensor Phase V allgemeiner Fehler. Sensorbereich unterschritten oder überschritten | 0 |
| 0x011A6D | EMPI: Hochvolt Spannungssensor Phase W allgemeiner Fehler. Sensorbereich unterschritten oder überschritten | 0 |
| 0x011A6E | EMPI: Überdrehzahl Hybrid- Ölpumpe. Drehzahl höher als Schwellenwert.  | 0 |
| 0x011A6F | EMPI: Isolationsfehler Isolationsverlust Elektrische Leitung oder Isolationsverlust Hybrid-Ölpumpe | 0 |
| 0x011A70 | EMPI: PEB-interner Steuergerätefehler Bereichsunterschreitung Sensorwert Stromsensor. Leitungsunterbrechung oder Kurzschluss nach Masse. | 0 |
| 0x011A71 | EMPI: PEB-interner Steuergerätefehler Bereichsüberschreitung Sensorwert Stromsensor. Leitungsunterbrechung oder Kurzschluss nach Plus. | 0 |
| 0x011A74 | EMPI: PEB-interner Steuergerätefehler Bereichsunterschreitung Sensorwert Spannungssensor. Leitungsunterbrechung oder Kurzschluß nach Masse. | 0 |
| 0x011A75 | EMPI: PEB-interner Steuergerätefehler Bereichsüberschreitung Sensorwert Spannungssensor. Leitungsunterbrechung oder Kurzschluss nach Plus. | 0 |
| 0x011ABE | BPCM: Übertemperatur, 2. Schwellenwert überschritten | 0 |
| 0x011AC6 | MCPA: Verlust Drehzahlsignal des Kurbelwellensensor im Verbrennungsmotor (Signal benötigt von Komfortfunktion Aufstartverhalten) | 0 |
| 0x011AC7 | MCPA:  Unplausibilität Drehzahlsignal des Kurbelwellensensor im Verbrennungsmotor (Signal benötigt von Komfortfunktion Aufstartverhalten) | 0 |
| 0x011ADC | MCPB: PEB-interne Steuerung EEPROM Fehler | 0 |
| 0x011ADD | MCPA: PEB-interne Steuerung EEPROM Fehler | 0 |
| 0x011ADE | MCPA: PEB-interne Steuerung Spannungsversorgung (14V) Spannung zu niedrig. Ursache im Bordnetz. Abschaltung der Elektromaschinen | 0 |
| 0x011ADF | MCPA: PEB-interne Steuerung Spannungsversorgung (14V) Spannung zu hoch. Ursache im Bordnetz. Abschaltung der Elektromaschinen | 0 |
| 0x011AE0 | MCPB: PEB-interne Steuerung Spannungsversorgung (14V) Spannung zu niedrig. Ursache im Bordnetz. Abschaltung der Elektromaschinen | 0 |
| 0x011AE1 | MCPB: PEB-interne Steuerung Spannungsversorgung (14V) Spannung zu hoch. Ursache im Bordnetz. Abschaltung der Elektromaschinen | 0 |
| 0x011AE5 | BPCM: Schützsteuerung, Signal von HCP unplausibel | 0 |
| 0x011AE7 | BPCM: Hochvoltbatterie, interner Isolationswiderstand unter 2. Schwellenwert | 0 |
| 0x011AE8 | MCPB: PEB-interne Steuerung getriebeinterne Elektromaschine 1  Hochvolt Spannungssensor Kurzschluss nach Masse | 0 |
| 0x011AE9 | MCPB: PEB-interne Steuerung getriebeinterne Elektromaschine 1  Hochvolt Spannungssensor Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x011AEA | MCPA: PEB-interne Steuerung getriebeinterne Elektromaschine 2 Hochvolt Spannungssensor Kurzschluss nach Masse | 0 |
| 0x011AEB | MCPA: PEB-interne Steuerung getriebeinterne Elektromaschine 2 Hochvolt Spannungssensor Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x011AEC | MCPB: PEB-interne Steuerung getriebeinterne Elektromaschine 1 Hochvolt Spannungssensoren Plausibilitätsfehler. Abschaltung der Elektromaschinen  | 0 |
| 0x011AED | MCPA: PEB-interne Steuerung getriebeinterne Elektromaschine 2 Hochvolt Spannungssensoren Plausibilitätsfehler. Abschaltung der Elektromaschinen  | 0 |
| 0x011AEE | MCPB: PEB-interne Steuerung getriebeinterne Elektromaschine 1 Bereichsüberschreitung Hochvoltspannung aus Hochvoltbatterie zu hoch | 0 |
| 0x011AEF | MCPA: PEB-interne Steuerung getriebeinterne Elektromaschine 2 Bereichsüberschreitung Hochvoltspannung aus Hochvoltbatterie zu hoch | 0 |
| 0x011AF0 | MCPB: PEB-interne Steuerung getriebeinterne Elektromaschine 1  Versorgung Hochvoltleitungen Fehler Isolationswiderstand zu gering | 0 |
| 0x011AF1 | MCPB: PEB-interne Steuerung getriebeinterne Elektromaschine 1 Versorgung Hochvoltleitungen Warnung Isolationswiderstand zu gering | 0 |
| 0x011AF2 | MCPA: PEB-interne Steuerung getriebeinterne Elektromaschine 2 Versorgung Hochvoltleitungen Fehler Isolationswiderstand zu gering | 0 |
| 0x011AF3 | MCPA: PEB-interne Steuerung getriebeinterne Elektromaschine 2 Versorgung Hochvoltleitungen Warnung Isolationswiderstand zu gering | 0 |
| 0x011AF4 | MCPB: PEB-interne Steuerung getriebeinterne Elektromaschine 1 Isolationsüberwachung Kurzschluss nach Masse | 0 |
| 0x011AF5 | MCPB: PEB-interne Steuerung getriebeinterne Elektromaschine 1  Isolationsüberwachung Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x011AF6 | MCPA: PEB-interne Steuerung getriebeinterne Elektromaschine 2 Isolationsüberwachung Kurzschluss nach Masse | 0 |
| 0x011AF7 | MCPA: PEB-interne Steuerung getriebeinterne Elektromaschine 2 Isolationsüberwachung Kurzschluss nach Plus oder Leitungsunterbrechung | 0 |
| 0x011AF8 | MCPB: PEB-interner Inverter fehlerhaft Störung Steuerung Elektromaschine 1, Abschaltpfadtest | 0 |
| 0x011AF9 | MCPB: PEB-interner Inverter fehlerhaft Störung Steuerung Elektromaschine 1, Einschaltvorgang | 0 |
| 0x011AFA | MCPA: PEB-interner Steuergerätefehler Programmierung Initialisierung ungültig. Abschaltung der Elektromaschinen | 0 |
| 0x011AFB | MCPB: PEB-interner Softwarefehler, Programmablaufkontrolle ungültig. Abschaltung der Leitsungselektronik. | 0 |
| 0x011AFE | MCPA: PEB-interner Inverter fehlerhaft Störung Steuerung Elektromaschine 2, Abschaltpfadtest | 0 |
| 0x011AFF | MCPA: PEB-interner Inverter fehlerhaft Störung Steuerung Elektromaschine 2, Einschaltvorgang | 0 |
| 0x011B01 | MCPA: PEB-interner Softwarefehler, Programmablaufkontrolle ungültig. Abschaltung der Leistungselektronik | 0 |
| 0x011B03 | MCPB: Getriebeinterne Elektromaschine 1  Verlust/ Störung Spurinformation Resolver. Abschaltung der Elektromaschinen | 0 |
| 0x011B04 | MCPA: Getriebeinterne Elektromaschine 2 Verlust/ Störung Spurinformation Resolver. Abschaltung der Elektromaschinen | 0 |
| 0x011B05 | MCPA: PEB-externer Fehler getriebeinterne Elektromaschine 1 High Voltage Interlock Loop betätigt/ Hochvoltkontaktüberwachung unterbrochen.  | 0 |
| 0x011B06 | MCPA: PEB-externer Fehler getriebeinterne Elektromaschine 2 High Voltage Interlock Loop betätigt/ Hochvoltkontaktüberwachung unterbrochen.  | 0 |
| 0x011B07 | MCPB: PEB-interne Steuerung getriebeinterne Elektromaschine 1 Bereichsüberschreitung Hochvoltspannung aus Hochvoltbatterie zu niedrig | 0 |
| 0x011B08 | MCPA: PEB-interne Steuerung getriebeinterne Elektromaschine 2 Bereichsüberschreitung Hochvoltspannung aus Hochvoltbatterie zu niedrig | 0 |
| 0x011B09 | MCPB: PEB-interne Steuerung: Spannungsversorgung (14V) zu gering für Betrieb des Steuergerätes | 0 |
| 0x011B0A | MCPA: PEB-interne Steuerung: Spannungsversorgung (14V) zu gering für Betrieb des Steuergerätes | 0 |
| 0x011B0F | MCPB: Getriebeinterne Elektromaschine 1  Fehler Resolver einlernen mislungen. Abschaltung der Elektromaschinen | 0 |
| 0x011B10 | MCPA: Getriebeinterne Elektromaschine 2 Fehler Resolver einlernen fehlgeschlagen. Abschaltung der Elektromaschinen | 0 |
| 0x011B11 | HCP: Unplausibilität Drehmomenterfassung. Gemessener Wert geringer als berechnetes Moment. | 0 |
| 0x011B12 | HCP: Unplausibilität Drehmomenterfassung. Gemessener Wert höher als berechnetes Moment. | 0 |
| 0x011B18 | HCP: Hybrid Ölpumpe Regelzustand fehlerhaft festgestellt | 0 |
| 0x011B20 | BPCM: Authentifizierung der Kühlpumpe noch gesperrt durch Batterie-Control-Modul | 0 |
| 0x011B21 | HCP: Unplausibilität zwischen Dynamisches Verlustmoment und HCP-intern berechnetem Verlustmoment | 0 |
| 0x011B22 | BPCM: Hochvoltbatterie, interner  Isolationswiderstand unter 1. Schwellenwert | 0 |
| 0x011B27 |  HCP: Kühlung Hochvoltbatterie,  Kühlleistung Kühlaggregat unzureichend | 0 |
| 0x011B28 | BPCM: Kühlmittelpumpe eingeschränkter Betrieb | 0 |
| 0x011B29 | BPCM: Kühlmittelpumpe, Betrieb ohne Kühlmittel | 0 |
| 0x011B2A | BPCM: Kühlmittelpumpe, Überspannung oder Überstrom | 0 |
| 0x011B2B | BPCM: Kühlmittelpumpe defekt | 0 |
| 0x011B2D | BPCM: Leitungsanschluss Hochvoltbordnetz, Leitungsunterbrechung | 0 |
| 0x011B2F | BPCM: Aktivierung Hochvoltbordnetz fehlgeschlagen, Schütze offen | 0 |
| 0x011B30 | HCP: HCP-interne Getriebeüberwachung. Parkposition aktuell eingelegt. Aktuell kein Fahrerwunsch Parken vorhanden. | 0 |
| 0x011B31 | HCP: HCP-interne Getriebeüberwachung. Parkposition aktuell nicht eingelegt. Aktuell Fahrerwunsch Parken vorhanden. | 0 |
| 0x011B32 | HCP: HCP-interne Getriebeüberwachung. Aktuelle Parkposition nicht detektierbar. | 0 |
| 0x011B33 | HCP: HCP-interne Getriebeüberwachung. Aktuelle Parkposition nicht detektierbar oder unplausibel. | 0 |
| 0x011B34 | HIM: Kühlkreislauf Hochvoltbatterie, Duo-Wasserventil zum Wärmetauscher Leitung Kurzschluss nach Plus | 0 |
| 0x011B35 | HIM: Kühlkreislauf Hochvoltbatterie, Duo-Wasserventil zum Wärmetauscher, Leitung Kurzschluss nach Masse | 0 |
| 0x011B36 | HIM: Kühlkreislauf Hochvoltbatterie, Duo-Wasserventil zum Wärmetauscher, Leitungsunterbrechung | 0 |
| 0x011B37 | HIM: Kühlkreislauf Hochvoltbatterie, Duo-Wasserventil zum Kühlaggregat, Leitung Kurzschluss nach Plus | 0 |
| 0x011B38 | HIM: Kühlkreislauf Hochvoltbatterie, Duo-Wasserventil zum Kühlaggregat, Leitung Kurzschluss nach Masse | 0 |
| 0x011B39 | HIM: Kühlkreislauf Hochvoltbatterie, Duo-Wasserventil zum Kühlaggregat, Leitungsunterbrechung | 0 |
| 0x011B3F | BPCM: Hochvoltbordnetz, Überstrom | 0 |
| 0x011B40 | BPCM: Hochvoltsicherheitsschalter (Service Disconnect) abgezogen | 0 |
| 0x011B41 | BPCM: Schütze wegen internes Fehlers oder Kommunikationsfehler geöffnet | 0 |
| 0x011B42 | BPCM: Vorbelastungswiderstand, Überhitzungsschutz aktiv | 0 |
| 0x011B43 | BPCM: Hochvoltbordnetz, Isolationswiderstand unter 2. Schwellwert | 0 |
| 0x011B44 | BPCM: Hochvoltbordnetz, Isolationswiderstand unter 1. Schwellwert | 0 |
| 0x011B45 | BPCM: Hochvoltbatterie Pluspol- und Vorbelastungs-Schütz, Kontakte kleben | 0 |
| 0x011B46 | BPCM: Hochvoltbatterie Minuspol Schütz, Kontakt klebt  | 0 |
| 0x011B47 | BPCM: Hochvoltsicherheit, Diagnosefunktion deaktiviert  | 0 |
| 0x011B48 | BPCM: Kühlmittelpumpe, Drehzahl unplausibel | 0 |
| 0x011B4A | HCP: Hybridantriebs-Steuergerät, interner Fehler Shift by Wire Überwachung | 0 |
| 0x011B4B | HCP: Unterspannung Hochvoltbordnetz erkannt. Mögliche Ursache in Hochvoltbatterie   | 0 |
| 0x011B4C | HCP: Überspannung Hochvoltbordnetz erkannt. Mögliche Ursache in Hochvoltbatterie  | 0 |
| 0x011B4D | HCP: Hybridantriebs-Steuergeraet, interne Getriebeueberwachung - falsche Anweisung | 0 |
| 0x011B4E | HCP: Hybridantriebs-Steuergeraet, interne Getriebeueberwachung - Signalfehler Getriebeposition | 0 |
| 0x011B4F | HCP: Hybridantriebs-Steuergeraet, interne Getriebeueberwachung - falsche Getriebeposition | 0 |
| 0x011B50 | HCP: Hybridantriebs-Steuergeraet, interne Getriebeueberwachung - Fahrzeuggeschwindigkeit | 0 |
| 0x011B51 | HCP: HCP-interne Getriebeüberwachung Unplausibilität Fahrzeug Geschwindigkeit mit aktuellem Gang. | 0 |
| 0x011B5F | HCP: Unplausibilität zwischen berechnetem Istmoment Ebene1 und Istmoment Ebene2 | 0 |
| 0x011B71 | HCP: System-Shutdown durch Batteriesteuerung verursacht | 0 |
| 0x011B72 | HCP: System-Shutdown durch E-Maschinensteuerung verursacht | 0 |
| 0x011B73 | HCP: System-Shutdown durch fehlerhafte Sensorik verursacht | 0 |
| 0x011B74 | HCP: System-Shutdown durch Notlauf-Ersatzreaktion verursacht | 0 |
| 0x011C43 | BPCM: Kühlmittelaustritt, Kühlmitteltemperatursensor, Wert unplausibel | 0 |
| 0x011C44 | BPCM: Kühlmittelaustritt, Kühlmitteltemperatursensor, Wert unter Sollwert | 0 |
| 0x011C45 | BPCM: Kühlmittelaustritt, Kühlmitteltemperatursensor, Wert über Sollwert | 0 |
| 0x01215C | HCP: Getriebe Ausgangsdrehzahl unplausibel mit Raddrehzahl | 0 |
| 0x012533 | HCP: Eingangssignal Zündung offen | 0 |
| 0x012797 | HCP: Hybrid Ölpumpe Abweichung zur Solldrehzahl festgestellt | 0 |
| 0x015001 | SBA: Bremskraftverstärker Druck Plausibilität | 0 |
| 0x015002 | SBA: Bremskraftverstärker Spule Fehler elektrisch | 0 |
| 0x015003 | SBA: Bremskraftverstaerker  Unterdruck Versorgung | 0 |
| 0x015010 | SBA: Tandemhauptzylinder Druck Sensor 1 Signal Offset, Plausibilität | 0 |
| 0x015011 | SBA: Tandemhauptzylinder Druck Sensor 2 Signal Offset, Plausibilität | 0 |
| 0x015012 | SBA: Tandemhauptzylinder Druck Sensor 1 Fehler elektrisch | 0 |
| 0x015013 | SBA: Tandemhauptzylinder Druck Sensor 2 Fehler elektrisch | 0 |
| 0x015016 | SBA: Tandemhauptzylinder Bremsdrucksensoren Initialisierung | 0 |
| 0x015020 | SBA: Bremskraftverstärker Wegsensor Signal Plausibilitaet | 0 |
| 0x015021 | SBA: Bremskraftverstärker Wegsensor Fehler elektrisch  | 0 |
| 0x015030 | SBA: Unterdrucksensor Fehler elektrisch Kanal1 | 0 |
| 0x015031 | SBA: Unterdrucksensor Fehler elektrisch Kanal 2 | 0 |
| 0x015032 | SBA Unterdrucksensor Signalwerte Plausibilität | 0 |
| 0x01503F | SBA: Sensoren Versorgungsspannung | 0 |
| 0x015040 | SBA: Vakuum Pumpe Fehler elektrisch | 0 |
| 0x015050 | SBA: Bremssystem Simulator Einheit - elektrischer Fehler des Drucksensors | 0 |
| 0x015051 | SBA: Bremssystem Simulator Einheit - elektrischer Fehler des Ventils | 0 |
| 0x015052 | SBA: Bremssystem Simulator Einheit - allgemeiner Fehler | 0 |
| 0x015062 | SBA: Bremspedalwinkelsensor - Kurzschluss nach Masse | 0 |
| 0x015063 | SBA: Bremspedalwinkelsensor, Kurzschluss nach Plus  | 0 |
| 0x015067 | SBA: Bremspedalwinkelsensor  Überspannung   | 0 |
| 0x015068 | SBA: Bremspedalwinkelsensor  Unterspannung  | 0 |
| 0x015069 | SBA: Bremspedalwinkelsensor Initialisierung | 0 |
| 0x015070 | SBA: Bandendetest Initialisierung  | 0 |
| 0x015071 | SBA: Rekuperatives Bremsen Bremsmomente Plausibilität | 0 |
| 0x015072 | SBA: Überwachung DSC | 0 |
| 0x015073 | SBA: Fahrgestellnummer ungültig  | 0 |
| 0x015080 | SBA: Steuergerät Unterspannung  | 0 |
| 0x015081 | SBA: Steuergerät Überspannung | 0 |
| 0x015082 | SBA: Steuergerät: Interner Fehler (Hardware) | 0 |
| 0x01C073 | HCP: HL-CAN Bus Leitungsfehler | 0 |
| 0x01C074 | HCP: HS-CAN Bus Leitungsfehler  | 0 |
| 0x01D800 | BPCM: Kühlmittelpumpe, Kommunikationsverlust | 0 |
| 0x01D801 | HCP:  Botschaft vom Steuergerät DME über HL-CAN fehlt | 0 |
| 0x01D802 | HCP:  Botschaft vom Steuergerät TCM  (Hybrid-Getriebesteuerung) fehlt | 0 |
| 0x01D803 | HCP:  Botschaft vom Steuergerät BPCM (Hybrid-Hochvoltbatterie) fehlt | 0 |
| 0x01D804 | HCP:  Botschaft vom Steuergerät HIM  (Hybrid-Interface-Modul) über HL-CAN fehlt | 0 |
| 0x01D805 | HCP:  Botschaft vom Steuergerät EMPI (Hybrid-Ölpumpenansteuerung) fehlt | 0 |
| 0x01D806 | HCP:  Botschaft vom Steuergerät DSM  (Hybrid-Parksperre) fehlt | 0 |
| 0x01D807 | HCP:  Botschaft vom Steuergerät HIM  (Hybrid-Interface-Modul) über HS-CAN fehlt | 0 |
| 0x01D808 | HCP:  Botschaft vom Steuergerät APM (Hybrid-DC/DC-Wandler) fehlt | 0 |
| 0x01D80A | SBA: Kommunikation mit DSC fehlerhaft | 0 |
| 0x01D80B | SBA: Kommunikation mit HCP-Prozessor fehlerhaft | 0 |
| 0x01D80C | SBA: PT-Can Bus Off Fehler | 0 |
| 0x01D80D | SBA: HS-Can Bus Off Fehler | 0 |
| 0x01D80E | SBA: Kommunikation mit Steuergerät DME fehlerhaft | 0 |
| 0x01D815 | HCP:  Kommunikationsfehler mit MCPA oder MCPB (Hybrid-Elektromotorsteuerung 1 oder 2)  | 0 |
| 0x01D818 | HCP: HS-CAN Bus Kommunikationsfehler mit DME-Steuergerät   | 0 |
| 0x01D820 | HCP: HS-CAN Bus Kommunikationsfehler mit SBA-Steuergerät (Hybrid-Bremsbetätigungsumschaltung)    | 0 |
| 0x01D870 | MCPB: Botschaft vom Steuergerät DME über HS-CAN-Bus fehlt.  | 0 |
| 0x01D871 | MCPA: Botschaft vom Steuergerät DME über HS-CAN-Bus fehlt | 0 |
| 0x01D872 | MCPA: Botschaft vom Steuergerät MCPB (Hybrid-Elektromotorsteuerung 2) über PEB-interne Busverbindung fehlt | 0 |
| 0x01D875 | MCPB: Botschaft vom Steuergerät BPCM (Hybrid-Hochvoltbatterie) über CAN-Bus fehlt | 0 |
| 0x01D876 | MCPB: Botschaft vom Steuergerät DME über HL-CAN-Bus fehlt  | 0 |
| 0x01D878 | MCPA: Botschaft vom Steuergerät BPCM (Hybrid-Hochvoltbatterie) über CAN-Bus fehlt  | 0 |
| 0x01D879 | MCPA: Botschaft vom Steuergerät DME über HL-CAN-Bus fehlt  | 0 |
| 0x01D880 | MCPB: Botschaft vom Steuergerät HCP (Hybrid-Master-Steuergerät) über PEB-interne Busverbindung fehlt  | 0 |
| 0x01D881 | MCPA: Botschaft vom Steuergerät HCP (Hybrid-Master-Steuergerät) über PEB-interne Busverbindung fehlt  | 0 |
| 0x01D885 | BPCM: Kommunikationsverlust mit HCP | 0 |
| 0x01D886 | BPCM: Kommunikationsverlust mit HIM | 0 |
| 0x01D891 | EMPI: Botschaft vom Steuergerät HCP (Hybrid-Master-Steuergerät) auf HL-CAN fehlt    | 0 |
| 0x01D892 | EMPI: Botschaft vom Steuergerät TCM  (Hybrid-Getriebesteuerung) auf HL-CAN fehlt  | 0 |
| 0x01D89B | MCPB: Botschaft vom Steuergerät TCM (Hybrid-Getriebesteuerung) über CAN-Bus fehlt | 0 |
| 0x01D89C | MCPA: Botschaft vom Steuergerät TCM (Hybrid-Getriebesteuerung) über CAN-Bus fehlt   | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 24 |
| F_HLZ_VIEW | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### T_SUPPLIERLIST_3_8

| WERT | TEXT |
| --- | --- |
| 0 | * |
| 1 | Becker |
| 2 | Blaupunkt |
| 3 | Bosch |
| 4 | MB |
| 5 | HuF |
| 6 | Kammerer |
| 7 | Kostal |
| 8 | Siemens |
| 9 | Stribel |
| 10 | MicroHeat |
| 11 | JATCO |
| 16 | SWF |
| 17 | VDO |
| 18 | Webasto |
| 19 | Dornier |
| 20 | TEG |
| 21 | Hella |
| 22 | Lucas |
| 23 | GKR |
| 24 | MBB |
| 25 | Motometer |
| 32 | Borg |
| 33 | Temic |
| 34 | Teves |
| 35 | Borg Warner |
| 36 | MED S.P.A |
| 37 | DENSO |
| 38 | ZF |
| 39 | TRW |
| 40 | Dunlop |
| 41 | LUK |
| 48 | Magneti Marelli |
| 49 | DODUCO |
| 50 | Alpine |
| 51 | AMC (AEG Mobile Com.) |
| 52 | Bose |
| 53 | Dasa |
| 54 | Motorola |
| 55 | Nokia |
| 56 | Panasonic |
| 57 | APAG |
| 58 | Rialtosoft |
| 59 | Applicom |
| 60 | Conti Temic |
| 61 | Cherry |
| 62 | TI Automotive |
| 63 | Kongsberg Automotive |
| 64 | Delphi |
| 65 | Alfmeier |
| 66 | Sidler |
| 67 | Marquardt |
| 68 | Wehrle |
| 69 | megamos |
| 70 | ADC |
| 71 | BERU |
| 72 | Valeo |
| 73 | Magna |
| 74 | Allison |
| 75 | Isringhausen |
| 76 | Grammer |
| 77 | Funkwerk Dabendorf |
| 78 | Hella-Behr |
| 79 | Pollak |
| 80 | AKG |
| 81 | Automotive Lighting |
| 82 | TAG |
| 83 | UNITED PARTS |
| 84 | catem |
| 85 | Alge |
| 86 | Pierburg |
| 87 | Brusa |
| 88 | Ecostar |
| 89 | Xcellsis |
| 90 | Wabco Automotive |
| 91 | Voith |
| 92 | Knorr |
| 93 | TVI |
| 94 | Stoneridge |
| 95 | Telma |
| 96 | STW |
| 97 | Koyo |
| 98 | Eberspächer |
| 99 | ADVICS |
| 100 | OMRON |
| 101 | Mitsubishi Heavy Industry |
| 102 | Methode |
| 103 | UNISIAJECS |
| 104 | UNISIA JKC Steering Systems |
| 105 | AISIN |
| 106 | Zexel Valeo |
| 107 | Schrader |
| 108 | Ballard |
| 109 | Alcoa Fujikura |
| 110 | Transtron |
| 111 | Iteris |
| 112 | SFT |
| 113 | Kieckert AG |
| 114 | Behr |
| 115 | MB Lenkungen |
| 117 | Sachs Automotive |
| 118 | Petri |
| 119 | Autoliv |
| 120 | Thien Electronic |
| 121 | Siemens VDO |
| 122 | Dornier Consulting GmbH |
| 123 | Alps |
| 124 | PREH |
| 125 | Hitachi Unisia |
| 126 | Hitachi |
| 128 | Huntsville |
| 129 | Yazaki |
| 130 | Lear |
| 131 | Johnson Controls |
| 132 | Harman / Becker |
| 133 | Mitsubishi Electric |
| 134 | Tokico USA Inc. |
| 135 | Nippon Seiki (NS Intl) |
| 136 | Inalfa |
| 137 | Nippon Seiki (UK) |
| 138 | GHSP |
| 139 | Vector |
| 140 | Gentex |
| 141 | Visteon |
| 142 | Tochigi Fuji |
| 143 | DCA |
| 144 | May and Scofield |
| 145 | DaimlerChrysler Hamburg Plant |
| 146 | AISIN AW |
| 147 | TOYODA MACHINE WORKS |
| 148 | Solectron-Invotronics |
| 149 | Kicker |
| 150 | American Axle Company |
| 151 | GETRAG |
| 152 | Promate |
| 153 | ArvinMeritor |
| 160 | Reserviert für MMC |
| 161 | Reserviert für MCC-SMART |
| 254 | Nachrüstungs Lieferant |
| 255 | Unidentifiziert |

### T_NEIN_JA_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### T_NICHT_AKTIV_AKTIV_1BYTE

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv |
| 1 | aktiv |

### T_JUMP_ASSIST_STATE

| WERT | TEXT |
| --- | --- |
| 0 | Funktion nicht verfügbar oder angefordert |
| 1 | Funktion angefordert |
| 2 | KL15 geschaltet/ Ladegerät auf 12V Seite angeschlossen Ladespannung >13,2V |
| 3 | Ladung der HV Batterie läuft |
| 4 | Ladung abgeschlossen |
| 5 | Abgebrochen weil Netztteil zu klein/ Klemmenzustand geändert |

### T_APM_LADEMODUS_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | KEIN_BOOSTMODE (Laden von 12V nach 300V aktiviert) |
| 1 | KEIN_BUCKMODE (Laden von 300V nach 12V aktiviert |
| 2 | KEIN_LADUNG (HV Batterie wird nicht geladen) |
| 3 | GEREGELT |
| 4 | Buckmode (Laden von 300V nach 12V) |
| 5 | Boostmode (Laden von 12V nach 300V) |

### T_DEGRADATION_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | novalue |
| 1 | no_degrad (keine Degardation) |
| 2 | Batt_hot  (HV-Batterie zu heiss) |
| 3 | Batt_cold (HV-Batterie zu kalt) |
| 4 | EM_hot    (E-Maschinen zu heiss) |
| 5 | CE_hot    (Combustion Engine-Verbrennungsmotor zu heiss) |
| 6 | SOC_low   (SOC: Ladezustand-HV-Speicher zu gering) |
| 7 | SOC_high  (SOC: Ladezustand-HV-Speicher zu hoch) |
| 8 | HV_low    (HV-Unterspannung) |
| 9 | HV_high   (HV-Überspannung) |
| 10 | SOH_high  (SOH-HV-Speicher überaltert) |

### T_HCP_ANTRIEBSART_TEXT

| WERT | TEXT |
| --- | --- |
| 1 | kein Wert |
| 2 | Energierückgewinnung durch Rekuperation |
| 3 | Lastpunktanhebung |
| 4 | Elektrisches Fahren |
| 5 | Elektrisches Boosten |
| 6 | Lastpunktabsenkung |
| 7 | Motorstopautomatik |
| 8 | Batteriestandladen |
| 9 | Regeneratives Bremsen |

### T_HPMR_STATE_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | POWERUP |
| 1 | EVAL_BP_CLOSE (Evaluation Batteriepack Contactors Close) |
| 2 | DET_BP_CLOSED (Determine Batteriepack Contactors Closed) |
| 3 | EVAL_INV_ENABLE (Evaluation Inverter Enable) |
| 4 | DET_INV_ENABLED (Determine Inverter Enabled) |
| 5 | EVAL_ENG_SYS (Evaluation Engine System) |
| 6 | EVAL_REKEY_ALLOWED (Evaluatio Rekey Allowed) |
| 7 | OPERATIONAL |
| 8 | DET_ENG_STOPPED  (Determine Engine Stopped) |
| 9 | DET_INV_DISABLED (Determine Inverter Disabled) |
| 10 | EVAL_BP_OPEN (Evaluation Batteripack Open) |
| 11 | DET_BP_OPENED  (Determine Batteripack Opened) |
| 12 | DET_BUS_DISCHARGED (Determine Highvoltage Bus Discharged) |
| 13 | SHUTDOWN |
| 14 | JUMP_ASSIST |

### T_HVIL_GESAMT

| WERT | TEXT |
| --- | --- |
| 0 | HVIL wird nicht bestromt oder initialer Zustand des BPCM (HV Zustand unklar) |
| 1 | HVIL ist geschlossen (HV kann aktiv sein) |
| 2 | HVIL ist offen (Service kann an HV Arbeiten wenn Service Disconnect entfernt und gegen Widereinschalten gesichert ist |

### T_HVIL_MCPA_B

| WERT | TEXT |
| --- | --- |
| 0 | HVIL ist aus Sicht PEB geschlossen |
| 1 | HVIL ist aus Sicht PEB offen |

### T_HVIL_BATTERIE

| WERT | TEXT |
| --- | --- |
| 0 | HVIL wird aus Sicht der Batterie nicht bestromt |
| 1 | HVIL ist aus Sicht der Batterie geschlossen (HV kann aktiv sein) |
| 2 | HVIL ist aus Sicht der Batterie offen (Service kann an HV Arbeiten wenn Service Disconnect entfernt und gegen widereinschalten gesichert ist |

### T_STATUS_ISOL_BATTERIE

| WERT | TEXT |
| --- | --- |
| 0 | Initialer Zustand der Batterie Zustand unklar |
| 1 | Kein Isolationsfehler aus Sicht der Batterie |
| 2 | Isolationsfehler aus Sicht der Batterie |
| 255 | Undefinierter Wert |

### T_LADEN_HV_BATTERIE

| WERT | TEXT |
| --- | --- |
| 5 | D |
| 6 | N |
| 7 | R |
| 8 | P |
| 15 | init |

### T_STATUS_ISOL_PEB

| WERT | TEXT |
| --- | --- |
| 0 | Initialer Zustand der PEB, d.h. Zustand unklar |
| 1 | Kein Isolationsfehler aus Sicht der PEB  |
| 2 | Isolationsfehler aus Sicht der PEB |

### T_STEUERN_ANTRIEBSART_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | geregelte Einstellung |
| 1 | Nur elektrisches Fahren |
| 2 | Nur mit Verbrennungsmotor fahren |

### T_INAKTIV_AKTIV_1BYTE

| WERT | TEXT |
| --- | --- |
| 0 | inaktiv |
| 1 | aktiv |

### T_EMPI_MODE_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | Off mode |
| 1 | Speed control mode |
| 2 | Standby mode |
| 3 | Fault mode |
| 4 | Not Used |
| 5 | Not Used |
| 6 | Not Used |
| 7 | Signal Not Available |

### T_VOLTAGE_HV_SIDE_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | Spannungsfreiheit nicht diagnostizierbar (Spannungsfreiheit ist vom Fachmann zu prüfen oder Diagnosefähigkeit ist herzustellen) |
| 1 | Spannungsfreiheit |

### T_RESET_SOURCE

| WERT | TEXT |
| --- | --- |
| 0 | Power Up |
| 2 | External Watchdog |
| 3 | Internal Watchdog |
| 4 | Unhandled Exception |
| 5 | Secondary forced a main running reset |
| 6 | Controller Specific Exceptions |

### T_PASS_FAIL_INDETERMINATE

| WERT | TEXT |
| --- | --- |
| 0 | Fehler |
| 1 | Unbestimmt |
| 3 | Durchgeführt |

### T_TEXTAKTUELLEGETRIEBEPOSITION

| WERT | TEXT |
| --- | --- |
| 5 | D |
| 6 | N |
| 7 | R |
| 8 | P |
| 15 | init |

### T_TEXTANTRIEBSARTZUGRIFF

| WERT | TEXT |
| --- | --- |
| 0 | kein Wert |
| 1 | Sicher AUS/OFF |
| 2 | Vollzugriff |
| 3 | exclusiv E-Fahren bzw. Verbrennen |

### T_TEXTBATTCONN

| WERT | TEXT |
| --- | --- |
| 0 | Schütz offen |
| 1 | Vorladung aktiv |
| 2 | geschlossen |
| 3 | Vorladung fehlgeschlagen |
| 4 | Vorladung verboten |
| 7 | Signal nicht vorhanden |
| 255 | Ungültig |

### T_TEXTCRASHDETECTIONSIGNAL

| WERT | TEXT |
| --- | --- |
| 0 | kein Crash detektiert (AUS) |
| 1 | Crash detektiert (EIN) |

### T_TEXTENERGIESPARMODE

| WERT | TEXT |
| --- | --- |
| 0 | inaktiv |
| 1 | Fertigungsmode |
| 2 | Transportmode |
| 3 | FE+TRA |
| 4 | Werkstattmode |
| 5 | FE+WE |
| 6 | WE+TRA |
| 7 | FE+TRA+W |
| 255 | Ungültig |

### T_TEXTLLREGELUNG

| WERT | TEXT |
| --- | --- |
| 0 | Diagnose noch nicht abgeschlossen |
| 1 | LL-Drehzahl zu hoch |
| 2 | LL-Drehzahl zu niedrig |
| 3 | Diagnose i.O. abgeschlossen |

### T_TEXTPARKSENSOREN

| WERT | TEXT |
| --- | --- |
| 0 | Zustand unbestimmt |
| 1 | Park eingelegt |
| 2 | Park ausgelegt |
| 3 | Ungültig |

### T_TEXTREMEDIALACTIONHISTROY

| WERT | TEXT |
| --- | --- |
| 1 | Keine Bremsenergierückgewinnung |
| 2 | Getriebelistung reduziert |
| 4 | Antrieb kann nur kriechen |
| 8 | Getriebe-Gangwahl eingeschränkt |
| 16 | V-Motor aus und bleibt abgestellt |
| 32 | V-Motor läuft immer und wird nicht abgestellt |
| 64 | System Shutdown verzögert |
| 128 | System Shutdown mit HV-Schütze zu |
| 256 | System Shutdown mit HV-Schütze auf |
| 65535 | undefinierter Wert |

### T_TEXTDEGRADATIONSOURCE2

| WERT | TEXT |
| --- | --- |
| 1 | STAT_RESERVE_2_0_AKTIV |
| 2 | STAT_RESERVE_2_1_AKTIV |
| 4 | STAT_RESERVE_2_2_AKTIV |
| 8 | STAT_RESERVE_2_3_AKTIV |
| 16 | STAT_RESERVE_2_4_AKTIV |
| 32 | STAT_RESERVE_2_5_AKTIV |
| 64 | STAT_RESERVE_2_6_AKTIV |
| 128 | STAT_DEGR_MOMENT_GETR_TEMP_EMOT_A_AKTIV |
| 256 | STAT_DEGR_MOMENT_GETR_TEMP_EMOT_B_AKTIV |
| 512 | STAT_DEGR_MOMENT_GETR_TEMP_GETR_OEL_AKTIV |
| 1024 | STAT_DEGR_MOMENT_GETR_TEMP_VMOT_KUEHLM_AKTIV |
| 2048 | STAT_DEGR_MOMENT_GETR_TEMP_VMOT_OEL_AKTIV |
| 4096 | STAT_DEGR_MOMENT_GETR_TEMP_HV_SPEICHER_AKTIV |
| 8192 | STAT_DEGR_SOCR_TEMP_EMOT_A_AKTIV |
| 16384 | STAT_DEGR_SOCR_TEMP_EMOT_B_AKTIV |
| 32768 | STAT_DEGR_SOCR_TEMP_INVERTER_EMOT_A_AKTIV |
| 65536 | STAT_DEGR_SOCR_TEMP_INVERTER_EMOT_B_AKTIV |
| 131072 | STAT_DEGR_SOCR_TEMP_VMOT_KUEHLM_AKTIV |
| 262144 | STAT_DEGR_SOCR_TEMP_VMOT_OEL_AKTIV |
| 524288 | STAT_DEGR_SOCR_TEMP_GETR_OEL_AKTIV |
| 1048576 | STAT_RESERVE_2_20_AKTIV |
| 2097152 | STAT_DEGR_SOCR_TEMP_AMP_AKTIV |
| 4194304 | STAT_DEGR_REKU_TEMP_EMOT_A_AKTIV |
| 8388608 | STAT_DEGR_REKU_TEMP_EMOT_B_AKTIV |
| 16777216 | STAT_DEGR_REKU_TEMP_GETR_OEL_AKTIV |
| 33554432 | STAT_DEGR_REKU_TEMP_VMOT_KUEHLM_AKTIV |
| 67108864 | STAT_DEGR_REKU_TEMP_VMOT_OEL_AKTIV |
| 134217728 | STAT_DEGR_REKU_TEMP_HV_SPEICHER_AKTIV |
| 268435456 | STAT_DEGR_REKU_SOC_AKTIV |
| 536870912 | STAT_DEGR_REKU_TEMP_INVERTER_EMOT_A_AKTIV |
| 1073741824 | STAT_DEGR_REKU_TEMP_INVERTER_EMOT_B_AKTIV |
| 2147483648 | STAT_DEGR_REKU_TEMP_APM_AKTIV |
| 4294967295 | ungültiger Wert |

### T_TEXTDEGRADATIONSOURCE1

| WERT | TEXT |
| --- | --- |
| 1 | STAT_DEGR_MOMENT_EMOT_A_TEMP_EMOT_A_AKTIV |
| 2 | STAT_DEGR_MOMENT_EMOT_A_TEMP_INVERTER_EMOT_A_AKTIV |
| 4 | STAT_DEGR_MOMENT_EMOT_A_TEMP_GETR_OEL_AKTIV |
| 8 | STAT_RESERVE_1_3_AKTIV |
| 16 | STAT_DEGR_MOMENT_EMOT_A_TEMP_APM_AKTIV |
| 32 | STAT_DEGR_MOMENT_EMOT_B_TEMP_EMOT_B_AKTIV |
| 64 | STAT_DEGR_MOMENT_EMOT_B_TEMP_INVERTER_EMOT_B_AKTIV |
| 128 | STAT_RESERVE_1_7_AKTIV |
| 256 | STAT_DEGR_MOMENT_EMOT_B_TEMP_APM_AKTIV |
| 512 | STAT_DEGR_MOMENT_EMOT_B_TEMP_GETR_OEL_AKTIV |
| 1024 | STAT_DEGR_BAT_ENTLADELEISTUNG_FAHRMODUS_AKTIV |
| 2048 | STAT_DEGR_BAT_ENTLADELEISTUNG_TEMP_HV_SPEICHER_AKTIV |
| 4096 | STAT_DEGR_BAT_ENTLADELEISTUNG_SOC_AKTIV |
| 8192 | STAT_DEGR_BAT_ENTLADELEISTUNG_FAHRMODUS_AKTIV |
| 16384 | STAT_DEGR_BAT_ENTLADELEISTUNG_TEMP_HV_SPEICHER_E_DRIVE_AKTIV |
| 32768 | STAT_DEGR_BAT_ENTLADELEISTUNG_SOC_E_DRIVE_AKTIV |
| 65536 | STAT_DEGR_BAT_LADELEISTUNG_TEMP_HV_SPEICHER_AKTIV |
| 131072 | STAT_DEGR_BAT_LADELEISTUNG_SOC_AKTIV |
| 262144 | STAT_DEGR_MOMENT_VMOT_TEMP_EMOT_A_AKTIV |
| 524288 | STAT_DEGR_MOMENT_VMOT_TEMP_EMOT_B_AKTIV |
| 1048576 | STAT_RESERVE_1_20_AKTIV |
| 2097152 | STAT_DEGR_MOMENT_VMOT_TEMP_INVERTER_EMOT_A_AKTIV |
| 4194304 | STAT_DEGR_MOMENT_VMOT_TEMP_INVERTER_EMOT_B_AKTIV |
| 8388608 | STAT_DEGR_MOMENT_VMOT_TEMP_WMK_AKTIV |
| 16777216 | STAT_DEGR_EKK_TEMP_WMK_AKTIV |
| 33554432 | STAT_DEGR_EKK_TEMP_EMOT_A_AKTIV |
| 67108864 | STAT_DEGR_EKK_TEMP_EMOT_B_AKTIV |
| 134217728 | STAT_DEGR_EKK_TEMP_GETR_OEL_AKTIV |
| 268435456 | STAT_DEGR_EKK_TEMP_VMOT_KUEHLM_AKTIV |
| 536870912 | STAT_DEGR_EKK_TEMP_VMOT_OEL_AKTIV |
| 1073741824 | STAT_RESERVE_1_30_AKTIV |
| 2147483648 | STAT_DEGR_EKK_TEMP_HV_SPEICHER_AKTIV |
| 4294967295 | ungültiger Wert |

### T_DEGRADATION_AKT_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | Degradation nicht aktiv |
| 1 | Degradation aktiv |

### T_TEXTSOCSTIMUL

| WERT | TEXT |
| --- | --- |
| 0 | Stimmulierung AUS |
| 1 | Stimmulierung EIN |

### T_NOT_AKTIV_AKTIV

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv |
| 1 | aktiv |

### T_TRUE_FALSE

| WERT | TEXT |
| --- | --- |
| 0 | False |
| 1 | True |

### T_TEXTADAPTIONSWERTELESENPYRO

| WERT | TEXT |
| --- | --- |
| 0 | Kein HV Shutdown |
| 1 | HV Shutdown |

### T_TEXTLASTSTARTTYPE

| WERT | TEXT |
| --- | --- |
| 0 | Kein Wert |
| 1 | Schlüsselstart normal |
| 2 | Schlüsselstart geringe Batterieleistung |
| 3 | Schlüsselstart geringe Batterieleistung (Applikation B) |
| 4 | Jungfernstart (Werk) |
| 5 | Schlüsselstart Typ Vorhalt |
| 6 | Autostart sanft |
| 7 | Autostart normal |
| 8 | Autostart aggressiv |
| 9 | Autostart vorhalt |
| 10 | Motorstart Kompressionstest |

### T_TEXTLASTSTOPTYPE

| WERT | TEXT |
| --- | --- |
| 0 | Kein Wert |
| 11 | Geregelter Stop |
| 12 | Schlüssel- oder Notstop |

### T_TEXTSTEUERNKURZSCHLUVWEMP

| WERT | TEXT |
| --- | --- |
| 0 | inaktiv |
| 1 | aktiv |
| 2 | beendet |

### T_TEXTDEGRADATIONBIT

| WERT | TEXT |
| --- | --- |
| 0 | Degradation nicht aktiv |
| 1 | Degradation aktiv |

### T_LUEFTERSTUFEN_1_15

| WERT | TEXT |
| --- | --- |
| 0 | Stufe 0 |
| 1 | Stufe 1 |
| 2 | Stufe 2 |
| 3 | Stufe 3 |
| 4 | Stufe 4 |
| 5 | Stufe 5 |
| 6 | Stufe 6 |
| 7 | Stufe 7 |
| 8 | Stufe 8 |
| 9 | Stufe 9 |
| 10 | Stufe 10 |
| 11 | Stufe 11 |
| 12 | Stufe 12 |
| 13 | Stufe 13 |
| 14 | Stufe 14 |
| 15 | ungültig |

### T_EIN_AUSSCHALTANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 0 | keine Anforderung |
| 1 | Einschaltaufforderung |
| 2 | Ausschaltaufforderung |
| 3 | ungültig |

### T_FEHLERVORHANDEN_KEINFEHLERVORHANDEN

| WERT | TEXT |
| --- | --- |
| 0 | kein Fehler vorhanden |
| 1 | Fehler vorhanden |

### T_OK_NICHTOK

| WERT | TEXT |
| --- | --- |
| 0 | OK |
| 1 | nicht OK |

### T_GESCHLOSSEN_OFFEN

| WERT | TEXT |
| --- | --- |
| 0 | geschlossen |
| 1 | offen |

### T_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0 | keine Freigabe |
| 1 | Freigabe |
| 2 | Systemfehler erkannt |
| 3 | ungültig |

### T_GUELTIG_UNGUELTIG

| WERT | TEXT |
| --- | --- |
| 0 | ungültig |
| 1 | gültig |

### T_TEXTSTEUERNBATTKUEHL

| WERT | TEXT |
| --- | --- |
| 0 | Keine Vorgabe Kühlungsmodus |
| 1 | Vorgabe Kühlung im Chillermodus |
| 2 | Vorgabe Kühlung im HeatExchangermodus |
| 3 | Vorgabe Kühlung im Duplexmodus |
| 4 | Vorgabe Befüllung Chillerkreis |
| 5 | Vorgabe Befüllung HeatExchangerkreis |
| 6 | Vorgabe Befüllung beide Kreise |
| 7 | Vorgabe Kühlung aus |

### T_AUS_ACTIVE_BEENDET

| WERT | TEXT |
| --- | --- |
| 0 | AUS |
| 1 | AKTIV |
| 2 | beendet |

### T_TEXTBATTLADELEISTBE

| WERT | TEXT |
| --- | --- |
| 0 | Leistung wird von minimaler Grenze begrenzt |
| 1 | Leistung wird von BPCM begrenzt |
| 2 | Leistung wird von Remedial Action begrenzt |
| 3 | Leistung wird von maximaler Grenze begrenzt |
| 4 | Leistung wird von mismatch begrenzt |
| 5 | Leistung wird vom Applikationswert vorgegeben |

### T_TEXTBATTENTLLEISTST

| WERT | TEXT |
| --- | --- |
| 0 | Leistung wird von maximaler Grenze begrenzt |
| 1 | Leistung wird von BPCM begrenzt |
| 2 | Leistung wird von Remedial Action begrenzt |
| 3 | Leistung wird von SOC begrenzt |
| 4 | Leistung wird von Batt. Nutzung begrenzt |
| 5 | Leistung wird von minimaler Grenze begrenzt |
| 6 | Leistung wird von Unterspannung begrenzt |
| 7 | Leistung wird von mismatch begrenzt |
| 8 | Leistung wird von Battery Estimated Leistung begrenzt |
| 9 | Leistung wird vom Applikationswert vorgegeben |
| 10 | Leistung wird von Rev Grade begrenzt |
| 11 | Leistung wird von Power Launch begrenzt |

### T_TEXTBATTLADELEISTLT

| WERT | TEXT |
| --- | --- |
| 0 | Leistung wird von minimaler Grenze begrenzt |
| 1 | Leistung wird von BPCM begrenzt |
| 2 | Leistung wird von Remedial Action begrenzt |
| 3 | Leistung wird von SOC begrenzt |
| 4 | Leistung wird von Batt. Nutzung begrenzt |
| 5 | Leistung wird von maximaler Grenze begrenzt |
| 6 | Leistung wird von Überspannung begrenzt |
| 7 | Leistung wird von mismatch begrenzt |
| 8 | Leistung wird von Short Term Leistung begrenzt |
| 9 | Leistung wird vom Applikationswert vorgegeben |

### T_TEXTBATTLADELEISTBP

| WERT | TEXT |
| --- | --- |
| 0 | Leistung wird von minimaler Grenze begrenzt |
| 1 | Leistung wird von BPCM begrenzt |
| 2 | Leistung wird von Remedial Action begrenzt |
| 3 | Leistung wird von SOC begrenzt |
| 4 | Leistung wird von Batt. Nutzung begrenzt |
| 5 | Leistung wird von maximaler Grenze begrenzt |
| 6 | Leistung wird von mismatch begrenzt |
| 7 | Leistung wird von Long Term Leistung begrenzt |
| 8 | Leistung wird vom Applikationswert vorgegeben |

### T_TEXTBATTENTLLEISTBP

| WERT | TEXT |
| --- | --- |
| 0 | Leistung wird von maximaler Grenze begrenzt |
| 1 | Leistung wird von BPCM begrenzt |
| 2 | Leistung wird von Remedial Action begrenzt |
| 3 | Leistung wird von SOC begrenzt |
| 4 | Leistung wird von Batt. Nutzung begrenzt |
| 5 | Leistung wird von minimaler Grenze begrenzt |
| 6 | Leistung wird von mismatch begrenzt |
| 7 | Leistung wird von Long Term Leistung begrenzt |
| 8 | Leistung wird vom Applikationswert vorgegeben |

### T_TEXTBATTLADELEISTST

| WERT | TEXT |
| --- | --- |
| 0 | Leistung wird von minimaler Grenze begrenzt |
| 1 | Leistung wird von BPCM begrenzt |
| 2 | Leistung wird von Remedial Action begrenzt |
| 3 | Leistung wird von SOC begrenzt |
| 4 | Leistung wird von Batt. Nutzung begrenzt |
| 5 | Leistung wird von maximaler Grenze begrenzt |
| 6 | Leistung wird von Überspannung begrenzt |
| 7 | Leistung wird von mismatch begrenzt |
| 8 | Leistung wird von Battery Estimated Leistung begrenzt |
| 9 | Leistung wird vom Applikationswert vorgegeben |

### T_TEXTBATTENTLLEISTBE

| WERT | TEXT |
| --- | --- |
| 0 | Leistung wird von maximaler Grenze begrenzt |
| 1 | Leistung wird von BPCM begrenzt |
| 2 | Leistung wird von Remedial Action begrenzt |
| 3 | Leistung wird von minimaler Grenze begrenzt |
| 4 | Leistung wird von mismatch begrenzt |
| 5 | Leistung wird vom Applikationswert vorgegeben |
| 6 | Leistung wird vom Powerlaunch vorgegeben |

### T_TEXTBATTENTLLEISTLT

| WERT | TEXT |
| --- | --- |
| 0 | Leistung wird von maximaler Grenze begrenzt |
| 1 | Leistung wird von BPCM begrenzt |
| 2 | Leistung wird von Remedial Action begrenzt |
| 3 | Leistung wird von SOC begrenzt |
| 4 | Leistung wird von Batt. Nutzung begrenzt |
| 5 | Leistung wird von minimaler Grenze begrenzt |
| 6 | Leistung wird von Unterspannung begrenzt |
| 7 | Leistung wird von mismatch begrenzt |
| 8 | Leistung wird von Short Term Leistung begrenzt |
| 9 | Leistung wird vom Applikationswert vorgegeben |
| 10 | Leistung wird von Rev Grade begrenzt |
| 11 | Leistung wird von Power Launch begrenzt |

### T_TEXTFLASHPRECONDITION

| WERT | TEXT |
| --- | --- |
| 0 | Keine Sperrung |
| 1 | Sperre aktiv |

### FORTUMWELTNR

| ORT | F_UW1_NR | F_UW2_NR | F_UW3_NR | F_UW4_NR | F_UW5_NR | F_UW6_NR | F_UW7_NR | F_UW8_NR | F_UW9_NR | F_UW10_NR | F_UW11_NR | F_UW12_NR | F_UW13_NR | F_UW14_NR | F_UW15_NR | F_UW16_NR | F_UW17_NR | F_UW18_NR | F_UW19_NR | F_UW20_NR | F_UW21_NR | F_UW22_NR | F_UW23_NR | F_UW24_NR | F_UW25_NR | F_UW26_NR | F_UW27_NR | F_UW28_NR | F_UW29_NR | F_UW30_NR | F_UW31_NR | F_UW32_NR | F_UW33_NR | F_UW34_NR | F_UW35_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x010219 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010506 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010507 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010562 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010563 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01061A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01061B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x0107A3 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x0107A5 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x0107A7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x0107A9 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A02 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A03 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A0C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A0D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A1B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A1C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A1F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A2A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A2B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A2C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A2F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A30 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A31 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A32 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A35 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A3F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A40 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A44 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A45 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A46 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A4A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A7D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A7E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A80 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A93 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A95 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A9C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A9D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010A9E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AA6 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010ABB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010ABC | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010ABD | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AC0 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AC1 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AC2 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AC6 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AC7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AC8 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010ACB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010ACC | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010ACD | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010ADC | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AE0 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AE7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AE9 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AEA | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AEB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AEE | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AEF | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AF0 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AF3 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AF4 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AF5 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AFA | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010AFB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B0D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B15 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B16 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B17 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B3C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B3D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B3E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B41 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B42 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B43 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B46 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B47 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B48 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B4B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B4C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B4D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B50 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B51 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B52 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B55 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B56 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B57 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B5A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B5B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B5C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B5F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B60 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B61 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B64 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B65 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B66 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B69 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B6A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B6B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B6E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B6F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B70 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B73 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B74 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B75 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B78 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B79 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B7A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B7D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B7E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B7F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B82 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B83 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B84 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B87 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B88 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B89 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B8C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B8D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B8E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B91 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B92 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B93 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B96 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B97 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B98 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B9B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B9C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010B9D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BA0 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BA1 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BA2 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BA5 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BA6 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BA7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BAA | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BAB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BAC | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BAF | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BB0 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BB1 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BB4 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BB5 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BB6 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BB9 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BBA | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BBB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BBD | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BD2 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BD3 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BD4 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BD7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BD8 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BD9 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BDC | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BDD | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BDE | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BE1 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BE2 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BE3 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BE6 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BE7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BE8 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BEA | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BEB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BEC | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BEE | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BEF | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BF0 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BF2 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BF3 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BF4 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BF6 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BF7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BF8 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BFA | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BFB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BFC | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BFD | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BFE | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010BFF | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C01 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C02 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C04 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C05 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C08 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C0B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C0E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C11 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C12 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C13 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C14 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C15 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C16 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C17 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C18 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C1E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C1F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C26 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C2F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C30 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C31 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C43 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C44 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C45 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C4C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C4D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C4E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C4F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C52 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C53 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C57 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C58 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C5C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C5D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C61 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C62 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C76 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C77 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x010C78 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01139F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x0115A9 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011828 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011829 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A00 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A01 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A02 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A03 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A04 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A05 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A06 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A07 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A08 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A09 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A0A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A0C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A0D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A0E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A0F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A10 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A11 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A12 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A13 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A20 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A21 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A25 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A26 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A2A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A2B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A2C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A2D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A30 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A31 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A32 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A33 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A34 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A35 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A36 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A37 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A38 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A40 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A41 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A42 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A43 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A44 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A45 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A46 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A47 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A48 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A4F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A50 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A51 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A52 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A53 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A54 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A55 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A5A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A69 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A6A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A6B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A6C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A6D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A6E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A6F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A70 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A71 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A74 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011A75 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011ABE | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AC6 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AC7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011ADC | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011ADD | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011ADE | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011ADF | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AE0 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AE1 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AE5 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AE7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AE8 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AE9 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AEA | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AEB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AEC | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AED | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AEE | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AEF | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF0 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF1 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF2 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF3 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF4 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF5 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF6 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF7 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF8 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AF9 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AFA | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AFB | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AFE | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011AFF | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B01 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B03 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B04 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B05 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B06 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B07 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B08 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B09 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B0A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B0F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B10 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B11 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B12 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B18 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B20 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B21 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B22 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B27 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B28 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B29 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B2A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B2B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B2D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B2F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B30 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B31 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B32 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B33 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B34 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B35 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B36 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B37 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B38 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B39 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B3F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B40 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B41 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B42 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B43 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B44 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B45 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B46 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B47 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B48 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B4A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B4B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B4C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B51 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B5F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B71 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B72 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B73 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011B74 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011C43 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011C44 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x011C45 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01215C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x012533 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x012797 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015001 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015002 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015003 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015010 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015011 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015012 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015013 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015016 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015020 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015021 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015030 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015031 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015032 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01503F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015040 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015050 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015051 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015052 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015062 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015063 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015067 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015068 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015069 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015070 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015071 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015072 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015073 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015080 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015081 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x015082 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01C073 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01C074 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D800 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D801 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D802 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D803 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D804 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D805 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D806 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D807 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D808 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D80A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D80B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D80C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D80D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D80E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D815 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D818 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D820 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D870 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D871 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D872 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D875 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D876 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D878 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D879 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D880 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D881 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D885 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D886 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D891 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D892 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D89B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0x01D89C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
| 0xFFFFFF | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |

### FORTUMWELTTEXTE

| UWNR | UW_EINH | MUL | DIV | ADD | UWTEXT | UW_LENGTH |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | - | 1 | 1 | 0 | Diagnose Fehler Code | 2 |
| 02 | km | 16 | 1 | 0 | Kilometerstand beim ersten Fehlerauftritt | 2 |
| 03 | km | 16 | 1 | 0 | Kilometerstand beim letzten Fehlerauftritt | 2 |
| 04 | - | 1 | 1 | 0 | Anzahl Fehler aufgetreten | 1 |
| 05 | - | 1 | 1 | 0 | Anzahl Fehler nicht aufgetreten | 1 |
| 06 | - | 1 | 1 | 0 | Anzahl Fehler nicht abgelaufen | 1 |
| 07 | % | 100 | 256 | 0 | Berechneter Lastwert - OBD | 1 |
| 08 | °C | 1 | 1 | -40 | Kuehlmitteltemperatur | 1 |
| 09 | U/min | 1 | 4 | 0 | Motordrehzahl | 2 |
| 10 | km/h | 1 | 1 | 0 | Fahrzeuggeschwindigkeit | 1 |
| 11 | °C | 1 | 1 | -40 | Ansauglufttemperatur | 1 |
| 12 | % | 100 | 256 | 0 | Absolute Drosselklappenposition | 1 |
| 13 | ? | 1 | 1 | 0 | Kraftuebertragungs Status | 1 |
| 14 | - | 1 | 1 | 0 | Anzahl der Aufwaermzyklen seit letzten Fehlerspeicher loeschen | 1 |
| 15 | km | 1 | 1 | 0 | km seit letzten Fehlerspeicher loeschen | 2 |
| 16 | kPa | 1 | 1 | 0 | Lufdruck in kPa | 1 |
| 17 | V | 1 | 1000 | 0 | Spannung Steuergeraet | 2 |
| 18 | °C | 1 | 1 | -40 | Umgebungstemperatur | 1 |
| 19 | % | 100 | 256 | 0 | Relative Gaspedalposition | 1 |
| 20 | s | 1 | 1 | 0 | Motorlaufzeit in s | 2 |
| 21 | U/min | 1 | 8 | 0 | Getriebeausgangsdrehzahl | 2 |
| 22 | - | 1 | 64 | 0 | Berechnetes Getriebeuebersetzungsverhaeltnis | 1 |
| 23 | Nm | 1 | 4 | 0 | Aktuell eingestelltes Motormoment | 2 |
| 24 | % | 100 | 256 | 0 | Aktuelle Gaspedalpostion | 1 |
| 25 | - | 1 | 1 | 0 | Status der TISS/TOSS Spannungsversorgung | 1 |
| 26 | % | 1 | 2 | 0 | SOC | 1 |
| 27 | % | 1 | 2 | 0 | SOC Genauigkeit | 1 |
| 28 | kW | 1 | 1 | -127 | ST Ladeleistungsgrenzen | 1 |
| 29 | kW | 1 | 1 | -127 | LT Ladeleistungsgrenzen | 1 |
| 30 | kW | 1 | 1 | -127 | ST Entladeleistungsgrenzen | 1 |
| 31 | kW | 1 | 1 | -127 | LT Entladeleistungsgrenzen | 1 |
| 32 | V | 2 | 1 | 0 | HV Spannung | 1 |
| 33 | kW | 1 | 10 | -3277 | Momentane HV Leistung | 2 |
| 34 | Nm | 1 | 1 | -32767 | Getriebeausgangsmoment | 2 |
| 35 | % | 1 | 2 | 0 | Aktuelle Gaspedalposition | 1 |

### T_TEXTISTRANGE

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | Neutral |
| 2 | Mode 1 |
| 3 | Mode 2 |
| 4 | Gang 1 |
| 5 | Gang 2 |
| 6 | Gang 3 |
| 7 | Gang 4 |
| 8 | G1 zu G2 (Drehzahl) |
| 9 | G1 zu G2 (Drehmoment) |
| 10 | G2 zu G1 (Drehzahl) |
| 11 | G2 zu G1 (Drehmoment) |
| 12 | G2 zu G3 (Drehzahl) |
| 13 | G2 zu G3 (Drehmoment) |
| 14 | G3 zu G2 (Drehzahl) |
| 15 | G3 zu G2 (Drehmoment) |
| 16 | G3 zu G4 (Drehzahl) |
| 17 | G3 zu G4 (Drehmoment) |
| 18 | G4 zu G3 (Drehzahl) |
| 19 | G4 zu G3 (Drehmoment) |
| 20 | M1 zu G1 |
| 21 | M1 zu G2 |
| 22 | M2 zu G2 |
| 23 | M2 zu G3 |
| 24 | M2 zu G4 |
| 25 | N zu M1 |
| 26 | N zu M2 |
| 27 | Neutralschaltung |
| 28 | M1 zu M2 wenig Drehmoment |
| 29 | M2 zu M1 wenig Drehmoment |
| 30 | M1 Abbruch |
| 31 | M2 Abbruch |
| 32 | G1 Abbruch |
| 33 | G2 Abbruch |
| 34 | G3 Abbruch |
| 35 | G2 Abbruch |
| 36 | G3 Abbruch |
| 37 | G4 Abbruch |

### T_TEXTREMEDIALACTIONINPUT2

| WERT | TEXT |
| --- | --- |
| 1 | VeESMR_b_HV_BatMaxModTmpSFA |
| 2 | VeESMR_b_HV_BatPackSOC_SFA |
| 4 | VeESMR_b_HV_BatCurrSFA |
| 8 | VeESMR_b_HV_BatVoltModMaxSFA |
| 16 | VeINVR_b_MtrA_TempFA |
| 32 | VeMSPR_b_MtrB_SpdFA |
| 64 | VeMTQR_b_MtrA_TorqAchievedFA |
| 128 | VeETQR_b_EngActualTorqSS_Flt |
| 256 | VeEPCR_b_TransInAng720EstErr |
| 512 | VeCCMR_b_Clch1To4CmdFlt |
| 1024 | VeSRAR_b_Inhibit_Mode1 |
| 2048 | VeSRAR_b_Inhibit_Mode2 |
| 4096 | VeSRAR_b_Inhibit_Gear1 |
| 8192 | VeSRAR_b_Inhibit_Gear2 |
| 16384 | VeSRAR_b_Inhibit_Gear3 |
| 32768 | VeSRAR_b_Inhibit_Gear4 |
| 65536 | VeECMR_b_AxleTorqReqImmedFA |
| 131072 | VeAXLR_b_CmndPrdtAxleTorqFA |
| 262144 | VeTOSR_e_OutputSpdDfltSource |
| 524288 | VeTOSR_e_TOS_Direction |
| 1048576 | VeSRAR_b_EngOnReqBrk |
| 2097152 | VeTFTR_b_TransOilFA |
| 4194304 | VeSRAR_b_EngSysLowFuel |
| 8388608 | VeEPSR_e_EngSpdStat |
| 16777216 | VeTITR_b_EngTrqHVBattLoFA |
| 33554432 | VeTITR_b_EngTrqHVBattHiFA |
| 67108864 | VeBPCR_b_BPCMOverCurrentDTC |
| 134217728 | VeSRAR_b_ECM_LAN_CommFltSum |
| 268435456 | VeSRAR_b_ECM_DPT_CommFltSum |
| 536870912 | VeSRAR_b_HIM_CommFltSum |
| 1073741824 | VeSRAR_b_EMPI_CommFltSum |
| 2147483648 | VeSRAR_b_EngineRAModeFlt |

### T_TEXTREMEDIALACTION

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler |
| 1 | Keine Bremsenergierückgewinnung |
| 2 | Getriebelistung reduziert |
| 4 | Antrieb kann nur kriechen |
| 8 | Getriebe-Gangwahl eingeschränkt |
| 16 | V-Motor aus und bleibt abgestellt |
| 32 | V-Motor läuft immer und wird nicht abgestellt |
| 64 | System Shutdown verzögert |
| 128 | System Shutdown mit HV-Schütze zu |
| 256 | System Shutdown mit HV-Schütze auf |

### T_TEXTREMEDIALACTIONINPUT1

| WERT | TEXT |
| --- | --- |
| 1 | VeSSRR_b_EngOvrSpdFltDtct |
| 2 | VeHVTR_b_HVOverVoltFltDtct |
| 4 | VeHVTR_b_HVUnderVoltFltDtct |
| 8 | VeESMR_b_SOCHighFltDtct |
| 16 | VeESMR_b_SOCLowFltDtct |
| 32 | VeESMR_b_BattOverTempFltDtct |
| 64 | VeSSRR_b_EngNegSpdFltDtct |
| 128 | VeSPCR_b_SerialCommFlt |
| 256 | VePMDR_b_SysVoltHighFA |
| 512 | VePMDR_b_SysVoltLowFA |
| 1024 | VeMEMR_b_MainProcessorFlt |
| 2048 | VeSTMR_b_TransOutTrqCmdFlt |
| 4096 | VeTRMR_b_PRNDL_MontrFlt |
| 8192 | VeSSRR_b_SpdRatlFlt_FltDtct |
| 16384 | VeMPMR_b_CPU_MntrFailed |
| 32768 | VeSTMR_b_RgnEstMntrFlt |
| 65536 | VeSRAR_b_RBS_CommFltSum |
| 131072 | VeSRAR_b_TCM_CommFltSum |
| 262144 | VeSRAR_b_BPCM_CommFltSum |
| 524288 | VeSRAR_b_EngSysDsbld |
| 1048576 | VeSRAR_b_ShutDown |
| 2097152 | VeSRAR_b_TransCritFltRdcSpd |
| 4194304 | VeINVR_b_MtrA_DC_CrntFA |
| 8388608 | VeINVR_b_MtrA_DC_VoltFA |
| 16777216 | VeINVR_b_MtrA_InvrtrTempFA |
| 33554432 | VeMSPR_b_MtrA_SpdFA |
| 67108864 | VeINVR_b_MtrB_DC_CrntFA |
| 134217728 | VeINVR_b_MtrB_DC_VoltFA |
| 268435456 | VeINVR_b_MtrB_InvrtrTempFA |
| 536870912 | VeINVR_b_MtrB_TempFA |
| 1073741824 | VeMTQR_b_MtrB_TorqAchievedFA |
| 2147483648 | VeSTMR_b_RngStValidationFlt |

### T_TEXTRUECKSCHREIBENIO

| WERT | TEXT |
| --- | --- |
| 0 | Rueckschreiben nicht erlaubt |
| 1 | Rueckschreiben erlaubt |

### T_NICHTOK_OK

| WERT | TEXT |
| --- | --- |
| 0 | nicht OK |
| 1 | OK |

### T_TEXTMOTORLEISTUNGSMESSUNG

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | an |
| 2 | gesperrt |
| 3 | Testzeitraum abgelaufen |
| 4 | kein Wert |

### T_EIN_AUS

| WERT | TEXT |
| --- | --- |
| 0 | AUS |
| 1 | EIN |

### T_TEXTSTATUSKUPPLUNG

| WERT | TEXT |
| --- | --- |
| 0 | Ungueltig |
| 1 | Offen |
| 2 | Betaetigt |
| 3 | Fast Synchronisiert |
| 4 | Synchronisiert |
| 5 | Gesperrt |

### T_TEXT_GEFORDERTNICHTGEFORDERT

| WERT | TEXT |
| --- | --- |
| 0 | Nicht gefordert |
| 1 | Gefordert |

### T_TEXTRANGESTATE

| WERT | TEXT |
| --- | --- |
| 0 | Init |
| 1 | Neutral |
| 2 | Mode 1 |
| 3 | Mode 2 |
| 4 | Gear 1 |
| 5 | Gear 2 |
| 6 | Gear 3 |
| 7 | Gear 4 |
| 8 | G1 zu G2 (Drehzahl) |
| 9 | G1 zu G2 (Drehmoment) |
| 10 | G2 zu G1 (Drehzahl) |
| 11 | G2 zu G1 (Drehmoment) |
| 12 | G2 zu G3 (Drehzahl) |
| 13 | G2 zu G3 (Drehmoment) |
| 14 | G3 zu G2 (Drehzahl) |
| 15 | G3 zu G2 (Drehmoment) |
| 16 | G3 zu G4 (Drehzahl) |
| 17 | G3 zu G4 (Drehmoment) |
| 18 | G4 zu G3 (Drehzahl) |
| 19 | G4 zu G3 (Drehmoment) |
| 20 | M1 zu G1 |
| 21 | M1 zu G2 |
| 22 | M2 zu G2 |
| 23 | M2 zu G3 |
| 24 | M2 zu G4 |
| 25 | N zu M1 |
| 26 | N zu M2 |
| 27 | Neutralschaltung |
| 28 | M1 zu M2 wenig Drehmoment |
| 29 | M2 zu M1 wenig Drehmoment |
| 30 | M1 Abbruch |
| 31 | M2 Abbruch |
| 32 | G1 Abbruch |
| 33 | G2 Abbruch |
| 34 | G3 Abbruch |
| 35 | G2 Abbruch |
| 36 | G3 Abbruch |
| 37 | G4 Abbruch |

### T_TEXTUSECASES

| WERT | TEXT |
| --- | --- |
| 0 | nicht definiert |
| 1 | Battery zu heiss |
| 2 | Battery Equilibrierung |
| 3 | Standladen |
| 4 | Kat-heiz-modus |
| 5 | Batterieheizen laden |
| 6 | Batterieheizen entladen |
| 7 | Produktionsmodus |
| 8 | Sportmodus |
| 9 | Rückwärts |
| 10 | Neutral |
| 11 | Park |
| 12 | Drive |
| 13 | Produktionsmodus ohne Ladeunterdrückung |
| 14 | Warmlauf |
| 15 | Batterie Stimulus Laden |
| 16 | Batterie Stimulus Entladen |
| 17 | SOC Overwrite Tester |
| 18 | Limiterbetrieb |
| 19 | Efficient Drive |
| 20 | SOC SFA |
| 21 | Default |

### T_TEXTGETRIEBERANGE

| WERT | TEXT |
| --- | --- |
| 0 | POWERUP |
| 1 | EVAL_BP_CLOSE (Evaluation Batteriepack Contactors Close) |
| 2 | DET_BP_CLOSED (Determine Batteriepack Contactors Closed) |
| 3 | EVAL_INV_ENABLE (Evaluation Inverter Enable) |
| 4 | DET_INV_ENABLED (Determine Inverter Enabled) |
| 5 | EVAL_ENG_SYS (Evaluation Engine System) |
| 6 | EVAL_REKEY_ALLOWED (Evaluatio Rekey Allowed) |
| 7 | OPERATIONAL |
| 8 | DET_ENG_STOPPED (Determine Engine Stopped) |
| 9 | DET_INV_DISABLED (Determine Inverter Disabled) |
| 10 | EVAL_BP_OPEN (Evaluation Batteripack Open) |
| 11 | DET_BP_OPENED (Determine Batteripack Opened) |
| 12 | DET_BUS_DISCHARGED (Determine Highvoltage Bus Discharged) |
| 13 | SHUTDOWN |
| 14 | JUMP_ASSIST |

### T_TEXTRESETURSACHE

| WERT | TEXT |
| --- | --- |
| 0 | CeHWIO_e_PwrUpRstIgn |
| 1 | CeHWIO_e_PwrUpRstSerial |
| 2 | CeHWIO_e_RunRstExtWDT |
| 3 | CeHWIO_e_RunRstIntWDT |
| 4 | CeHWIO_e_RunRstUnhndldExcptn |
| 5 | CeHWIO_e_RstBattConnect |
| 6 | CeHWIO_e_RstUnident |

### T_OK_NICHT_OK

| WERT | TEXT |
| --- | --- |
| 0 | nicht OK |
| 1 | OK |

### T_TEXTSTATEQUROUTINEAKTIV

| WERT | TEXT |
| --- | --- |
| 0 | EQU-Routine nicht aktiv |
| 1 | EQU-Routine aktiv |

### T_TEXTSTATEQUROUTINEABBRUCH

| WERT | TEXT |
| --- | --- |
| 0 | EQU-Routine nicht abgebrochen |
| 1 | EQU-Routine abgebrochen |

### T_TEXTSTATSPERRBED

| WERT | TEXT |
| --- | --- |
| 0 | Sperrbed.liegt nicht an |
| 1 | Sperrbed.liegt an |

### T_TEXTSTATBATTEQUIL

| WERT | TEXT |
| --- | --- |
| 0 | AUS |
| 1 | Entladepahse SOC >30% |
| 2 | Entladepahse SOC >20% |
| 3 | Entladephase SOC >10% |
| 4 | Stabilisierungsphase |
| 5 | Equlibrierungspahse |
| 6 | Erholungsphase |
| 7 | Ladephase SOC <20% |
| 8 | Ladephase SOC <30% |
| 9 | Equilibrierung beendet |

### T_TEXTSOCRUSECASE

| WERT | TEXT |
| --- | --- |
| 0 | nicht definiert |
| 1 | Battery zu heiss |
| 2 | Battery Equilibrierung |
| 3 | Standladen |
| 4 | Kat-heiz-modus |
| 5 | Batterieheizen laden |
| 6 | Batterieheizen entladen |
| 7 | Produktionsmodus |
| 8 | Sportmodus |
| 9 | Rückwärts |
| 10 | Neutral |
| 11 | Park |
| 12 | Drive |
| 13 | Produktionsmodus ohne Ladeunterdrückung |
| 14 | Warmlauf |
| 15 | Batterie Stimulus Laden |
| 16 | Batterie Stimulus Entladen |
| 17 | SOC Overwrite Tester |
| 18 | Limiterbetrieb |
| 19 | Efficient Drive |
| 20 | SOC SFA |
| 21 | Default |

### T_TEXTADAPTIONSWERTELOESCHEN

| WERT | TEXT |
| --- | --- |
| 0 | alle löschen |
| 1 | Pyrofuse wird zurückgesetzt (Klemme 41) |
| 3 | CC-Meldung |
| 4 | HISR- Betriebsstrategie-Analyse wir zurückgesetzt |

### T_TEXTBATTLOESCHEN

| WERT | TEXT |
| --- | --- |
| 0 | keine Aktion |
| 7 | Adaptionswerte der Batterie löschen |

### T_GEAR

| WERT | TEXT |
| --- | --- |
| 0 | ungueltig |
| 1 | 1.Gang |
| 2 | 2.Gang |
| 3 | 3.Gang |
| 4 | 4.Gang |
| 5 | 5.Gang |
| 6 | 6.Gang |
| 7 | 7.Gang |
| 60 | Neutral |
| 70 | Rueckwaerts |
| 80 | Park |
| 255 | unbekannter Gang |

### T_AUS_RESET

| WERT | TEXT |
| --- | --- |
| 0 | AUS |
| 1 | RESET |

### T_TEXTAV

| WERT | TEXT |
| --- | --- |
| 1 | VM läuft wegen Batterieladezustand |
| 2 | VM läuft wegen geringer Temperatur Hochvoltbatterie |
| 3 | VM läuft systembedingt |
| 4 | VM läuft wegen Batterieladezustand |
| 5 | keine Anzeige (nicht BMW relevant) |
| 6 | keine Anzeige (nicht BMW relevant) |
| 7 | wird auf DME definiert |
| 8 | VM läuft wegen Batterieladezustand |
| 9 | VM läuft systembedingt |
| 10 | VM läuft systembedingt |
| 11 | VM läuft systembedingt |
| 12 | keine Anzeige (nicht BMW relevant) |
| 13 | VM läuft systembedingt |
| 14 | VM läuft wegen hoher Temperatur im Hybridsystem |
| 15 | VM läuft wegen hoher Temperatur im Hybridsystem |
| 16 | VM läuft wegen niedriger Motortemperatur |
| 17 | VM läuft systembedingt |
| 18 | VM läuft systembedingt |
| 19 | VM läuft systembedingt |
| 20 | VM läuft systembedingt |
| 21 | VM läuft systembedingt |
| 22 | VM läuft wegen Komfortanforderung |
| 23 | keine Anzeige (nicht BMW relevant) |
| 24 | VM läuft wegen geringer Temperatur Hochvoltbatterie  |
| 25 | VM läuft systembedingt |
| 26 | VM läuft wegen hoher Motortemperatur |
| 27 | - |
| 28 | VM läuft wegen geringer Temperatur Hochvoltbatterie  |
| 29 | VM läuft wegen hoher Motortemperatur |
| 30 | VM läuft wegen hoher Temperatur im Hybridsystem |
| 31 | VM läuft wegen niedriger Motortemperatur |
| 32 | VM läuft systembedingt |
| 33 | keine Anzeige |
| 34 | VM läuft wegen Batterieladezustand |
| 35 | Motorstart wurde durch Fahrer erzwungen |
| 36 | Motorstart wurde durch Fahrer erzwungen |
| 37 | Motorstart wurde durch Fahrer erzwungen |
| 38 | VM läuft wegen Batterieladezustand |
| 39 | VM läuft systembedingt |
| 40 | VM läuft wg.Steigung/Gefälle |

### T_UNGUELTIG1_GUELTIG0

| WERT | TEXT |
| --- | --- |
| 0 | gültig |
| 1 | ungültig |

### T_TEXTBATTKUEHLBETRIEBSMODUS

| WERT | TEXT |
| --- | --- |
| 0 | Kühlung aus |
| 1 | Zirkulation zur Homogenisierung |
| 3 | Vorkühlung |
| 4 | Kühlung über Radiator |
| 5 | Duplex Kühlung über Radiator und Chiller |
| 6 | Kühlung über Chiller |
| 8 | Vorkühlung Variante 1 |
| 9 | Vorkühlung Variante 2 |
| 11 | Kühlung über Radiator Variante 1 |
| 12 | Kühlung über Radiator Variante 2 |
| 14 | Duplex Kühlung Variante 1 |
| 15 | Duplex Kühlung Variante 2 |
| 17 | Kühlung über Chiller Variante 1 |
| 18 | Kühlung über Chiller Variante 2 |
| 19 | Kühlung über Chiller Variante 3 |
| 21 | Chiller keine Freigabe/defekt, Kühlung über Radiator |
| 22 | Chiller keine Freigabe/defekt, Kühlung über Radiator Variante 1 |
| 23 | Chiller keine Freigabe/defekt, Kühlung über Radiator Variante 2 |
| 24 | Chiller keine Freigabe/defekt, keine Kühlung über Radiator möglich |
| 25 | Duplexmodus, Chiller keine Freigabe/defekt, Kühlung über Radiator |
| 26 | Duplexmodus, Chiller keine Freigabe/defekt, Kühlung über Radiator Variante 1 |
| 27 | Duplexmodus, Chiller keine Freigabe/defekt, Kühlung über Radiator Variante 2 |
| 28 | Duplexmodus, Chiller keine Freigabe/defekt, keine Kühlung über Radiator möglich |
| 29 | Zirkulation zur Nachkühlung |
| 30 | Ventil Radiator defekt, keine Kühlung über Chiller möglich |
| 31 | Ventil Radiator defekt, Kühlung über Chiller |

### T_TEXTDRRMODE

| WERT | TEXT |
| --- | --- |
| 0 | AUTOMATIC |
| 1 | SPORT |
| 2 | MAN |
| 3 | INVALID |
| 4 | LIMIT |
| 5 | INVALID |
| 6 | INVALID |
| 7 | INVALID |
| 8 | CITY |
| 15 | INVALID |

### TINDIVIDUALDATALISTE

| ENTRYNR | ISLAST | FROMWHERE | DIAG | CARORKEY | USECASE | TESTER_ALGO | RESERVED | INQY_LEN | INQY_DATA | RESP_LEN | RESP_DATA | WRITE_LEN | WRITE_DATA | W_RESP_LEN | W_RESP_DATA | COMMENT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0000 | 0xFF | 01 | 1A | 02 | 000F | 01 | 00 | 00 | - | 00 | - | 00 | - | 00 | - | Batterie.Recovery |

### T_TEXTIONIO

| WERT | TEXT |
| --- | --- |
| 0 | Kein Ergebnis |
| 1 | i.O |
| 2 | n.i.O |

### HYBRID_LIEF

| NR | TEXT |
| --- | --- |
| 0003 | Bosch |
| 0040 | Delphi |
| 007E | Hitachi |
| 009C | Cobasys |
| 0008 | Siemens |
| FFFF | undefinierter Lieferant |

### DATUM_MONAT

| KW | MON |
| --- | --- |
| 0x01 | 0x01 |
| 0x02 | 0x01 |
| 0x03 | 0x01 |
| 0x04 | 0x01 |
| 0x05 | 0x01 |
| 0x06 | 0x02 |
| 0x07 | 0x02 |
| 0x08 | 0x02 |
| 0x09 | 0x02 |
| 0x0A | 0x03 |
| 0x0B | 0x03 |
| 0x0C | 0x03 |
| 0x0D | 0x03 |
| 0x0E | 0x04 |
| 0x0F | 0x04 |
| 0x10 | 0x04 |
| 0x11 | 0x04 |
| 0x12 | 0x04 |
| 0x13 | 0x05 |
| 0x14 | 0x05 |
| 0x15 | 0x05 |
| 0x16 | 0x05 |
| 0x17 | 0x06 |
| 0x18 | 0x06 |
| 0x19 | 0x06 |
| 0x1A | 0x06 |
| 0x1B | 0x07 |
| 0x1C | 0x07 |
| 0x1D | 0x07 |
| 0x1E | 0x07 |
| 0x1F | 0x07 |
| 0x20 | 0x08 |
| 0x21 | 0x08 |
| 0x22 | 0x08 |
| 0x23 | 0x08 |
| 0x24 | 0x09 |
| 0x25 | 0x09 |
| 0x26 | 0x09 |
| 0x27 | 0x09 |
| 0x28 | 0x0A |
| 0x29 | 0x0A |
| 0x2A | 0x0A |
| 0x2B | 0x0A |
| 0x2C | 0x0A |
| 0x2D | 0x0B |
| 0x2E | 0x0B |
| 0x2F | 0x0B |
| 0x30 | 0x0B |
| 0x31 | 0x0C |
| 0x32 | 0x0C |
| 0x33 | 0x0C |
| 0x34 | 0x0C |
| 0xFF | 0x00 |
