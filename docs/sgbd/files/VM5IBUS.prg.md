# VM5IBUS.prg

## General

|  |  |
| --- | --- |
| File | VM5IBUS.prg |
| Type | PRG |
| Jobs | 34 |
| Tables | 7 |
| Origin | BMW EE-41 Lamberty |
| Revision | 1.04 |
| Author | Lear DCS Bayreuther,BMW TI-431 Rochal, |
| ECU Comment | Videomodul VM5IBUS VM_HYBRID_IBUS VM5_IBUS_CAM |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Videomodul VM5IBus VM_Hybrid_Ibus VM5_IBus_Cam |  |  |
| ORIGIN | string | BMW EE-41 Lamberty |  |  |
| REVISION | string | 1.04 |  |  |
| AUTHOR | string | Lear DCS Bayreuther,BMW TI-431 Rochal, |  |  |
| COMMENT | string | Videomodul VM5IBUS VM_HYBRID_IBUS VM5_IBUS_CAM |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### POWERDOWN_MODE

SG in PowerDown-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert |

### INITIALISIERUNG

Init-Job Videomodul TV-Teil

_No arguments._

### IDENT

Ident-Daten fuer Videomodul TV-Teil

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low Konzept ohne Umweltbedingung

_No arguments._

### IS_LESEN

Shadowspeicher lesen

_No arguments._

### Pruefstempel_lesen

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Daten in den Pruefstempel schreiben

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### Speicher_lesen

Lesen, welche Parameter geladen sind

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT_AUSWAHL | int | Angabe, welches Speichermedium ausgelesen werden soll |
| START_ADRESSE_HIGH | int | Startadresse high als Hexwert |
| START_ADRESSE_MIDDLE | int | Startadresse middle als Hexwert |
| START_ADRESSE_LOW | int | Startadresse low als Hexwert |
| ANZAHL_BYTE | int | Angabe, wieviele Bytes ausgelesen werden sollen maximale Anzahl 27 Byte, entspricht 1B Hex |

### FS_LOESCHEN

Fehlerspeicher loeschen im Videomodul TV-Teil

_No arguments._

### STEUERN_SELBSTTEST

Selbsttest des Videomoduls Uebergabe eines Arguments nur bei VM5IBus ab SW12 und VM_HYBRID_IBUS Bei VM_HYBRID_IBUS und bei VM5IBUS ab SW16 (VM5_IBUS_CAM) sind waehrend diesen Tests weitere Diagnosefunktionen moeglich.

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_1 | int | 0 = Rueckgabe des Acknowledge vor Testbeginn (Test 0) 1 = Rueckgabe des Acknowledge nach Testende (Test 1) wenn kein Argument uebergeben wird, wird Test 0 durchgefuehrt |

### SG_STATUS_LESEN

Stati lesen am Videomodul TV-Teil

_No arguments._

### STEUERN_EINZELTEST_ANTENNEN

Job nur fuer VM_HYBRID_IBUS Pruefung der Fernspeisung des Videomoduls Pruefung des Antennenstroms  des Videomoduls

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_1 | int | 0 = Fernspeisespannung / -Strom  Ackn. vor Testbeginn 1 = Fernspeisespannung / -Strom  Ackn. nach Testende bei Test 0 erfolgt bei Messbeginn ein Acknowledge bei Test 1 erfolgt nach Messende ein Acknowledge wenn kein Argument uebergeben wird, wird Test 0 durchgefuehrt |

### SG_STATUS_EINZELTEST_ANTENNEN

Job nur fuer VM_HYBRID_IBUS Ergebnis des Antennentests

_No arguments._

### SG_ST_MESSWERTE_LESEN

SG Lesen der aktuellen Messwerte nach Selbsttest

| Name | Type | Description |
| --- | --- | --- |
| TESTAUSWAHL | int | Testauswahl 0x91 oder 145 dezimal = RGB Messwerte Testauswahl 0x92 oder 146 dezimal = CVBS Messwerte Testauswahl 0x93 oder 147 dezimal = TON Messwerte Testauswahl 0x94 oder 148 dezimal = FSU/I Messwerte (nur Hybrid) |

### SG_VORGABE_ANALOG_TV_KANAL

Umschalten eines analogen Kanals und dessen Norm Job fuer VM5Ibus ab SW 11 und VM_HYBRID_IBUS Argument_1 Kanal (Bereich von 1 bis 99) Argument_2 Norm  (Bereich von 2 bis 21)  Wird Argument 2 (Norm) nicht uebergeben, dann ist automatisch PAL BG eingestellt. Es muss vor Aufruf des Jobs auf TV umgeschaltet werden. Jetzt darf das VM_Hybrid_IBus nicht auf einem digitalen Kanal stehen, da mit diesem Job nur analoge Kanaele umgeschaltet werden koennen.  Argument 1  Kanal 1..99 Argument 2  TV-Norm 2     NTSC_M 3     NTSC JAPAN 4     PAL_BG 5     PAL_BG (default) 6     PAL_I 7     PAL_M 8     PAL_N 9     PAL_DK 10    PAL AUSTRALIA 11    PAL ITALIA 12    PAL MOROCCO 13    PAL_DK OIRT 14    PAL NEWZEALAND 15    PAL CHINA 16    SECAM_BG 17    SECAM_DK 18    SECAM_K1 19    SECAM_L FRANCE 20    SECAM MOROCCO 21    PAL_BG OIRT 

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_1 | int | Argument entspricht dem einzustellenden Kanal zulaessiger Bereich von 1 bis 99 |
| ARGUMENT_2 | int | Argument entspricht der länderabhängigen Norm zulaessiger Bereich von 2 bis 21 |

### STEUERN_CHANNEL_SET

Aufschalten eines analogen oder digitalen Kanals Job nur fuer VM_HYBRID_IBUS ab SW 18 Kanal (Bereich von 1 bis 99)  Hinweis: kann bis zu mehreren Sekunden andauern mit STATUS_CHANNEL_SET abfragen ob Abstimmung fertig Argument Kanal 1..99

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_1 | int | Argument entspricht dem einzustellenden Kanal zulaessiger Bereich von 1 bis 99 |

### STATUS_CHANNEL_SET

Abfrage Tunerabstimmung Job nur fuer VM_HYBRID_IBUS ab SW 18

_No arguments._

### STATUS_BITERROR_RATE

Abfrage BER nach Viterbi Job nur fuer VM_HYBRID_IBUS ab SW 18 Die Ausgabe erfolgt in 4 Empfangsstufen VM muss auf einen digitalem Kanal eingestellt werden BER-Werte nur für Digitalempfang

_No arguments._

### STEUERN_TESTBILD

Job fuer VM_HYBRID_IBUS ab SW18 und fuer VM5IBUS (VM5_IBUS_CAM) ab SW 16 Starten des Testbilds fuer 1..30 Sekunden Valid Time Argument: Argument: 0 = Testbild aus Argument: 1...30  = Testbild 1...30 Sekunden

| Name | Type | Description |
| --- | --- | --- |
| TIME | int | value 00 to 30 |

### CODIERUNG_LAENDERVARIANTE_LESEN

Speicher lesen EEPROM

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### C_S_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_S_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### CS_BILDEN

_No description._

_No arguments._

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### MODUL_INFO

MODUL-Info-Daten fuer Videomodul TV-Teil

_No arguments._

### NEC_MONITOR_TYP_BASISBETRIEB

NEC-Monitor-Typ Umschaltung (4:3 Monitor). Job nur bei Anzeigeproblemen mit GT-BASIS-Konfiguration. Bei Problemen wg. Helligkeitspumpen und Ruecklauflinien im Hauptmenue

| Name | Type | Description |
| --- | --- | --- |
| TYPE | int | Type: 00  = Neuer Monitor (Default-Einstellung) Type: 01  = Alter Monitor |

### STEUERN_JMC_BLANKING

Schwarzes Fenster links oder rechts des Bildes Kamera muss zugeschaltet sein Job nur fuer VM5IBUS (VM5_IBUS_CAM) ab SW 16  Argument1: schwarzer Balken links erhoehen    = 1 Argument1: schwarzer Balken links verringern  = 2 Argument1: schwarzer Balken rechts erhoehen   = 3 Argument1: schwarzer Balken rechts verringern = 4 Argument1: Normalstellung links               = 5 Argument1: Normalstellung rechts              = 6

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_1 | int | Argument EINSTELLUNG Bereich von 1 bis 6 |

### STEUERN_JMC_SETTINGS

Aendern von Kontrast, Helligkeit, Farbe oder Tint Job nur fuer VM5IBUS (VM5_IBUS_CAM) ab SW 16 JMC muss eingeschaltet sein Argument1: Kontrast           = 1 Argument1: Helligkeit         = 2 Argument1: Farbe              = 3 Argument1: Tint (bei NTSC)    = 4 Argument1: Werte lesen        = 5 ( Kein Argument2 notwendig) Argument1: Grundeinstellung   = 6 ( Kein Argument2 notwendig) Argument2: Bereich von 1 bis 100 Prozent

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_1 | int | Argument EINSTELLUNG Bereich von 1 bis 6 |
| ARGUMENT_2 | int | Argument Wert in Prozent Bereich von 1 bis 100 |

### STEUERN_JMCTEST

MirrorCam-Test des Videomoduls Uebergabe eines Arguments Abfrage der Ergebnisse mit STATUS_JMCTEST Job nur fuer VM5IBUS (VM5_IBUS_CAM) ab SW16

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_1 | int | 0 = Rueckgabe des Acknowledge vor Testbeginn (Test 0) 1 = Rueckgabe des Acknowledge nach Testende (Test 1) wenn kein Argument uebergeben wird, wird Test 0 durchgeführt |

### STATUS_JMCTEST

Job nur fuer VM5IBUS (VM5_IBUS_CAM) ab SW 16 Ergebnisse des MirrorCam-Tests STEUERN_JMCTEST oder STEUERN_SELBSTTEST muss vorher gesendet werden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| ?10? | ERROR_ARGUMENT |
| ?20? | ERROR_FEHLERANZAHL |
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
| 0x?? | ERROR_ECU_UNKNOWN_STATUSBYTE |

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

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen => Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe => Lear |
| 0x10 | VDO |
| 0x11 | Valeo |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine |
| 0x18 | Continental Teves |
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | DODUCO => BERU |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer |
| 0x33 | Jatco |
| 0x34 | Fuba |
| 0x35 | UK-NSI |
| 0x36 | AABG |
| 0x37 | Dunlop |
| 0x38 | Sachs |
| 0x39 | ITT |
| 0x40 | FTE |
| 0x41 | Megamos |
| 0x42 | TRW |
| 0x43 | Wabco |
| 0x44 | ISAD Electronic Systems |
| 0x45 | HEC (Hella Electronics Corporation) |
| 0x46 | Gemel |
| 0x47 | ZF |
| 0x48 | GMPT |
| 0x49 | Harman Kardon |
| 0x50 | Remes |
| 0x51 | ZF Lenksysteme |
| 0x52 | Magneti Marelli |
| 0x53 | Borg Instruments |
| 0x54 | GETRAG |
| 0x55 | BHTC (Behr Hella Thermocontrol) |
| 0x56 | Siemens VDO Automotive |
| 0x57 | Visteon |
| 0x58 | Autoliv |
| 0x59 | Haberl |
| 0x60 | Magna Steyr |
| 0x61 | Marquardt |
| 0x62 | AB-Elektronik |
| 0x63 | Siemens VDO Borg |
| 0x64 | Hirschmann Electronics |
| 0x65 | Hoerbiger Electronics |
| 0x66 | Thyssen Krupp Automotive Mechatronics |
| 0x67 | Gentex GmbH |
| 0x68 | Atena GmbH |
| 0x69 | Magna-Donelly |
| 0x70 | Koyo Steering Europe |
| 0x71 | NSI B.V |
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0xFF | unbekannter Hersteller |

### SEGMENTAUSWAHL

| SEGMENT | AUSWAHLTEXT |
| --- | --- |
| 0x02 | EPROM |
| 0x03 | EEPROM |
| 0x04 | internes RAM DATA |
| 0x05 | externes RAM XDATA |
| 0x0B | internes RAM IDATA |
| 0xXY | Unbekanntes Segment |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | IBus Dauerhigh Abschaltung |
| 0x02 | Watchdog ausgeloest |
| 0x03 | FeTraWe aktiviert |
| 0xXY | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | IBus-Pufferueberlauf |
| 0x02 | I2C Fehler zum Graphikteil |
| 0x03 | I2C Fehler vom Graphikteil |
| 0x04 | Uebertemperatur im Videomodul |
| 0x05 | Audio-Fehler |
| 0x06 | RGB-Fehler |
| 0x07 | Video-Fehler |
| 0x08 | Sonstige-Fehler |
| 0x09 | EEPROM read Fehler |
| 0x0A | EEPROM write Fehler |
| 0x0B | EEPROM Checksumfehler |
| 0x0C | EEPROM Neuinitialisierung |
| 0x0D | TV-Tunerinitialisierungs-Fehler |
| 0xXY | unbekannte Fehlerart |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler nicht aktiv |
| 0x20 | Fehler aktiv |
| 0xXY | unbekannte Fehlerart |
