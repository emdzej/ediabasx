# SMG2.prg

## General

|  |  |
| --- | --- |
| File | SMG2.prg |
| Type | PRG |
| Jobs | 46 |
| Tables | 57 |
| Origin | BMW TI-430 Gall |
| Revision | 1.101 |
| Author | BMW-M ZS-E-53 Th.Gey, TI-430 Gall |
| ECU Comment | Originalfile smg.b2s geaendert fuer SMG MK II |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Getriebesteuerung SMG MK II / M3 |  |  |
| ORIGIN | string | BMW TI-430 Gall |  |  |
| REVISION | string | 1.101 |  |  |
| AUTHOR | string | BMW-M ZS-E-53 Th.Gey, TI-430 Gall |  |  |
| COMMENT | string | Originalfile smg.b2s geaendert fuer SMG MK II |  |  |
| PACKAGE | string | 0.12 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Init-Job fuer EGS

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Ident-Daten fuer EGS

_No arguments._

### FS_QUICK_LESEN

Auslesen des QUICK Fehlerspeichers

_No arguments._

### FS_LESEN

Fehlerspeicher lesen High-Konzept nach Lastenheft Codierung/Diagnose E39 Ausgabe 05

_No arguments._

### FS_SHADOW_LESEN

Shadowspeicher lesen High-Konzept nach Lastenheft Codierung/Diagnose E39 Ausgabe 05

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen fuer EGS

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### STATUS_LESEN

Beliebige EPROM - Zellen auslesen

_No arguments._

### SPEICHER_LESEN

Speicher Lesen

| Name | Type | Description |
| --- | --- | --- |
| SPEICHERART | string | Speicherart: FLASH, RAM, ROM, E2PROM --Speicherart kann beliebig angegeben werden-- --da laut Lastenh. keine Auswahl vorgesehen.-- --Auswahl aus Kompatibilitaetsgruenden beibehalten.-- |
| ADRESSE | long | Startadresse (dezimal eingeben) |
| ANZAHL | int | Anzahl zu lesender Bytes |

### SPEICHER_SCHREIBEN

Beschreiben von beliebigen Speicherzellen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten |

### ZIF

Job ZIF

_No arguments._

### ZIF_BACKUP

Job ZIF_BACKUP

_No arguments._

### HERSTELLER_DATEN_LESEN

Herstellerdaten lesen (Kontrollbyte 53)

_No arguments._

### SG_RESET

Zuruecksetzen des SG Nur nach einer Neuprogrammierung durchführbar!

_No arguments._

### FLASH_LESEN

Beliebige FLASH - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| FLASH_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low HEX |
| FLASH_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### FLASH_LOESCHEN

Flash - Zellen loeschen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten |

### FLASH_SCHREIBEN

Beliebige Flash Zellen mit 02 beschreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten |

### FLASH_SCHREIBEN_ENDE

Beliebige EPROM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten |

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | Nummer des zu lesenden AIF's >=1. 0 bedeutet aktuelles AIF, auf das ein freies AIF folgt |

### AIF_SCHREIBEN

Beschreiben des Anwender-Info-Feldes

| Name | Type | Description |
| --- | --- | --- |
| AIF_ADRESSE | string | AIF Adresse, naechste freie |
| AIF_FG_NR | string | Fahrgestellnummer |
| AIF_DATUM | string | Fertigungsdatum |
| AIF_AENDERUNGS_INDEX | string | Aenderungsindex |
| AIF_SW_NR | string | Softwarenummer |
| AIF_BEHOERDEN_NR | string | Behoerdennummer |
| AIF_ZB_NR | string | Zusammenbaunummer |
| AIF_SERIEN_NR | string | Seriennummer |
| AIF_HAENDLER_NR | string | Haendlernummer |
| AIF_KM | string | Kilometerstand |
| AIF_PROG_NR | string | Programmstandsnummer |

### STATUS_CODIER_CHECKSUMME

Codier - Checksumme abfragen

_No arguments._

### BAUDRATEN_LESEN

Baudratentabelle auslesen

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATE_NUMMER | int | Nummer der zu lesenden Baudrate |

### BAUDRATEN_UMSTELLUNG

Baudrate veraendern

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATE | long | Baudrate 0....125000 |
| BLOCKZWISCHENZEIT | int | 0... |

### EDIC_RESET

EDIC-Reset

_No arguments._

### SET_EDIC_BAUDRATE

EDIC-Parameter auf 125 KBd oder 9600Bd

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATE | string | Baudrate "9600" oder "125000" |

### BLOCKLAENGE_MAX

maximale Blocklaenge

_No arguments._

### DATEN_REFERENZ

Job DATEN-Referenz

_No arguments._

### HW_REFERENZ

Job HW-Referenz

_No arguments._

### SEED_KEY

Schutzmechanismus SEED_KEY

_No arguments._

### ANSTEUERUNG_VORBEREITEN

Vorbereiten STEUERN_STELLGLIED, (Zeit-Zaehler auf null setzen) Achtung: Fuer Anlasserfreigabe, Hydropumpe, Stoeranzeige und Shiftlock muss dieser Job vorab gesendet werden! (Steuergeraete-Timeout: 10s!) Wird die Diagnose zum nachtriggern des SG-Timeouts aufrechterhalten, so bleibt die Ansteuerung max. 60s erhalten. Diese Groessen werden ueber INAKTIV ausgeschaltet. Fuer ansteuerbare Groessen siehe immer aktuelles Lastenheft!

_No arguments._

### STEUERN_STELLGLIED

Ansteuern der Stellglieder

| Name | Type | Description |
| --- | --- | --- |
| STELLGL | string | Anzusteuerndes Stellglied Argument siehe: table STELLGLIEDER  STELLGLIED aus Spalte: STELLGLIED Achtung: Fuer Anlasserfreigabe, Hydropumpe, Stoeranzeige und Shiftlock muss vorab ANSTEUERUNG_VORBEREITEN gesendet werden! Diese Groessen werden ueber INAKTIV ausgeschaltet. Fuer ansteuerbare Groessen siehe immer aktuelles Lastenheft! --ACHTUNG------------------------------------------------------------------ Hydropumpe schaltet nicht automatisch ab! Bei 100 bar oeffnet das Ueberdruckventil --Pumpe wird vorgeschaedigt, wenn mehrfach ueber Ventil abgeblasen wird.--- Wird Diagnose aufrechterhalten, wird die Pumpe maximal 60 sek. angesteuert!  (Steuergeraete-Timeout: 10s!)  --Fuer Soll-Ist-Vergleich z.B. bei MAGNETVENTIL_GANG_VOR------------------------ muss Job mehrfach angestossen werden, um endgueltige Position auszugeben (Z.B. einmaliges ausfuehren gibt nur momentane Pos. beim Einregeln zurueck) (Staendiges anstossen ist natuerlich auch moeglich.) (Sollposition=Adaptionswert) |
| STEUERART1 | string | Argument Steuerungsart: POSITIONSVORGABE STROMVORGABE INAKTIV AKTIV |
| STEUERART2 | int | Argument Steuerungsart: (dezimal eingeben) bei KOMBIANZEIGE_KOMFORTINDEX: 1-6 bei GANGANZEIGE_WAHLHEBEL: GANGANZEIGE: 0-9 WAHLHEBEL: 16,32,48,64,80,96,112,128,144,160,176,240 Fuer alle anderen ansteuerbare Groessen siehe immer aktuelles Lastenheft! (unter Ansteuerbyte 2) |

### TESTPRG_STOP

Beenden eines laufenden Testprogrammes Muss VOR TESTPRG_STARTEN geschickt werden! (Steuergeraete-Timeout: 10s!)

_No arguments._

### TESTPRG_STARTEN

Testprogramm starten Hinweis: Zuvor TESTPRG_STOP schicken!

| Name | Type | Description |
| --- | --- | --- |
| TESTPRG_NR | int | Argument: siehe: table Testprg  TESTPRG_NR TESTPRG_NAME aus Spalte: TESTPRG_NR |
| AUSWAHLBYTE | int | Argument: Nur fuer (Testprg:0x0A hex) bel. Gang einlegen: 0 = Neutral, 1-6 = Gang 1-6, 7 = Rueckwaertsgang Alle anderen Testprg benoetigen kein Auswahlbyte Siehe Lastenheft Spalte: -Auswahlbyte- (ob vorhanden) |

### CODIERDATEN_LESEN

Codierdaten lesen Kontrollbyte (0x08)

_No arguments._

### CODIERDATEN_SCHREIBEN

Codierung schreiben

| Name | Type | Description |
| --- | --- | --- |
| CODIERUNG | string | Codierdaten fuer Auswahl: Argument: ROLLENBETRIEB oder    : RADABRISS  Rollenbetrieb (Nur Hinterachse in Rolle fuer Motorpruefstand) Hinweis: Schaltet sich bei v=35 km/h wieder ab Radabrissfunktionsabschaltung Bei Adaption des Geberrades (DME) in der Line kann es zum Radabriss kommen. Deshalb abschalten |
| AKTIVIERUNG | int | Argument: 0=inaktiv 1=aktiv |

### GETRIEBEDATEN_LESEN

Abgleichwerte lesen (Kontrollbyte 0x40)  Getriebedaten lesen ohne Argument fuer VS-21 (vgl. ADAPTIONSWERTE_LESEN)

_No arguments._

### ADAPTIONSWERTE_LESEN

Adaptionswerte lesen Abgleichwerte lesen (Kontrollbyte 0x40)

| Name | Type | Description |
| --- | --- | --- |
| ADAPTION_LESEN | int | Adaptionswerte Kupplung lesen, Argument: 0 Adaptionswerte Getriebe lesen, Argument: 1 Getriebedaten lesen,           Argument: 2 |

### ADAPTIONSWERTE_LOESCHEN

Adaptionswerte loeschen (Kontrollbyte 0x43)

| Name | Type | Description |
| --- | --- | --- |
| ADAPTIONSWERT_LOESCHEN | int | Kupplungskennlinie loeschen, Argument: 0 Getriebedaten loeschen,      Argument: 1 Hinweis: Kupplungswerte werden auf Defaultwerte zurueckgesetzt Getriebedaten werden auf null gesetzt. |

### STATUS_HARDWARE_STATI_LESEN

Hardwarestati SMG

_No arguments._

### STATUS_IO_LESEN

Status Eingaenge SMG

_No arguments._

### STATUS_IO_STATI_LESEN

Status Eingaenge SMG

_No arguments._

### STATUS_FAHRZEUGTESTER_LESEN

I/O Status lesen (Kontrollbyte 0x0B) Fahrzeugtester   (Auswahlbyte  0x05) Status der Ein- u. Ausgaenge GETRAG und VS21 spezifischer Job (Nicht fuer INPA gedacht.)

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x22 | Getriebetemperatur |
| 0x27 | Hydrauliktemperatur |
| 0x23 | Auswertung Hydraulikdrucksensor |
| 0x35 | Druckbandunterschreitung HE |
| 0x36 | Druckbandueberschreitung HE |
| 0x33 | Auswertung Motorhaubenkontakt im Fahrbetrieb |
| 0x34 | Auswertung Motorhaubenkontakt im Stand |
| 0x72 | Auswertung Waehlhebel |
| 0x24 | Auswertung Positionsgeber Waehlwinkel |
| 0x25 | Auswertung Positionsgeber Schaltweg |
| 0x26 | Auswertung Laengsbeschleunigung |
| 0x61 | Spannungsversorgung |
| 0x62 | Sensorspannungsversorgung A |
| 0x63 | Sensorspannungsversorgung B |
| 0x20 | Auswertung Getriebeeingangsdrehzahl |
| 0x21 | Auswertung Motordrehzahl (Sensor) |
| 0x96 | Auswertung Motordrehzahl (CAN) |
| 0x28 | Auswertung PLCD-Sensor fuer Kupplungsposition |
| 0x80 | Fehlerhafte CAN Botschaft / CAN Busfehler |
| 0x81 | CAN Fehler |
| 0x91 | Auswertung Geschwindigkeit hinten links |
| 0x92 | Auswertung Geschwindigkeit hinten rechts |
| 0x93 | Auswertung Geschwindigkeit vorne links |
| 0x94 | Auswertung Geschwindigkeit vorne rechts |
| 0x95 | Auswertung Geschwindigkeiten (mehr als ein Signal) |
| 0x97 | Auswertung Betriebsbremssignale ueber CAN |
| 0x9B | Auswertung Fahrpedalwert ueber CAN |
| 0x98 | Auswertung Lenkwinkel ueber CAN |
| 0x99 | Auswertung Querbeschleunigung ueber CAN |
| 0x9A | Auswertung Laengsbeschleunigung ueber CAN |
| 0x90 | Auswertung Tuerkontakt ueber CAN |
| 0x13 | Ansteuerung Shift Lock |
| 0x14 | Anlasserfreigabe |
| 0x15 | Ansteuerung Hydraulikpumpenrelais |
| 0x16 | Ansteuerung Rueckfahrlichtschalter |
| 0x10 | Ansteuerung Magnetventil Schaltweg Vor |
| 0x11 | Ansteuerung Magnetventil Schaltweg Rueck |
| 0x12 | Ansteuerung Magnetventil Waehlwinkel |
| 0x17 | Ansteuerung Magnetventil Kupplung |
| 0x50 | SMG Steuergeraet interner Fehler |
| 0xB0 | Sicherheitskonzept Ebene 2 Getriebe |
| 0xB1 | Sicherheitskonzept Ebene 2 Kupplung |
| 0xB2 | Sicherheitskonzept Ebene 3 |
| 0x53 | Getriebeadaption |
| 0x54 | Allgemeine Adaption |
| 0x55 | Adaption der Kupplung |
| 0x30 | Gang nicht einlegbar |
| 0x31 | Gangspringer |
| 0x32 | Waehlwinkel nicht einregelbar |
| 0x73 | Auswertung Verbraucherabschaltung VA |
| 0x74 | Auswertung Programmwahlschalter Plus |
| 0x75 | Auswertung Programmwahlschalter Minus |
| 0x76 | Auswertung Lenkradschalter + |
| 0x77 | Auswertung Lenkradschalter - |
| 0x37 | Einschalthaeufigkeit Hydraulikeinheit |
| 0x38 | Einschaltdauer Hydraulikeinheit |
| 0x39 | Missbrauch Hydraulikeinheit |
| 0x64 | Spannungsversorgung Magnetventile Schaltweg |
| 0x65 | Spannungsversorgung Magnetventile Kupplung und Waehlwinkel |
| 0x56 | Entlueftungen |
| 0x57 | Aktionsmodi |
| 0x78 | Auswertung Zuendschloss-Signal |
| 0x51 | Auswertung ESTATE |
| 0xB3 | Sicherheitskonzept Ebene 2 RAM |
| 0xB4 | Sicherheitskonzept Ebene 2 INPUT |
| 0x3A | Gang nicht auslegbar |
| 0x3B | Ansteuerung Kupplung |
| 0x58 | Adaptionswerte Getriebe |
| 0xFF | unbekannter Fehlerort |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXY | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x07 | 0x00 | 0x08 |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW_1NR | UW_2NR | UW_3NR | UW_4NR | UW_5NR | UW_6NR | UW_7NR | UW_8NR | UW_9NR | UW_10NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x22 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x1D | 0x1E | 0x00 | 0x3E | 0x00 | 0x00 | 0x1F |
| 0x27 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x1D | 0x1E | 0x44 | 0x00 | 0x3F | 0x00 | 0x00 |
| 0x23 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x07 | 0x0C | 0x1E | 0x25 | 0x38 | 0x5B | 0x00 |
| 0x35 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x07 | 0x1E | 0x25 | 0x31 | 0x30 | 0x00 | 0x00 |
| 0x36 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x07 | 0x1E | 0x25 | 0x31 | 0x30 | 0x00 | 0x00 |
| 0x33 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x09 | 0x00 | 0x00 | 0x00 | 0x3A | 0x00 | 0x00 |
| 0x34 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x09 | 0x00 | 0x00 | 0x00 | 0x3A | 0x00 | 0x00 |
| 0x72 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x08 | 0x15 | 0x24 | 0x00 | 0x00 | 0x3B | 0x00 |
| 0x24 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0B | 0x2D | 0x2E | 0x41 | 0x00 | 0x37 | 0x38 |
| 0x25 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0B | 0x2B | 0x2C | 0x40 | 0x00 | 0x37 | 0x38 |
| 0x26 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x71 | 0x73 | 0x14 | 0x00 | 0x38 | 0x3A | 0x01 |
| 0x61 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x1B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x62 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x37 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x63 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x00 | 0x38 | 0x66 | 0x00 | 0x00 | 0x00 |
| 0x20 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0B | 0x18 | 0x1B | 0x5F | 0x30 | 0x31 | 0x39 |
| 0x21 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x18 | 0x1A | 0x1B | 0x31 | 0x42 | 0x00 | 0x00 |
| 0x96 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x18 | 0x1A | 0x1B | 0x31 | 0x42 | 0x00 | 0x00 |
| 0x28 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x2A | 0x00 |
| 0x80 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x45 | 0x00 | 0x46 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x81 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x45 | 0x00 | 0x46 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x91 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0B | 0x18 | 0x20 | 0x21 | 0x22 | 0x23 | 0x31 |
| 0x92 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0B | 0x18 | 0x20 | 0x21 | 0x22 | 0x23 | 0x31 |
| 0x93 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0B | 0x18 | 0x20 | 0x21 | 0x22 | 0x23 | 0x31 |
| 0x94 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0B | 0x18 | 0x20 | 0x21 | 0x22 | 0x23 | 0x31 |
| 0x95 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0B | 0x18 | 0x20 | 0x21 | 0x22 | 0x23 | 0x31 |
| 0x97 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x71 | 0x73 | 0x14 | 0x16 | 0x38 | 0x3A | 0x01 |
| 0x9B | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x49 | 0x00 | 0x1A | 0x00 | 0x00 | 0x00 |
| 0x98 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x45 | 0x00 | 0x46 | 0x00 | 0x00 | 0x00 | 0x5C |
| 0x99 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x45 | 0x00 | 0x46 | 0x00 | 0x00 | 0x02 | 0x00 |
| 0x9A | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x45 | 0x00 | 0x46 | 0x00 | 0x3D | 0x00 | 0x00 |
| 0x90 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x35 | 0x3A | 0x45 | 0x00 | 0x46 | 0x00 | 0x00 |
| 0x13 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x04 | 0x15 | 0x24 | 0x00 | 0x00 | 0x00 | 0x89 |
| 0x14 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x06 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x89 |
| 0x15 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x07 | 0x0C | 0x1E | 0x25 | 0x00 | 0x5B | 0x00 |
| 0x16 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x05 | 0x15 | 0x24 | 0x00 | 0x00 | 0x00 | 0x89 |
| 0x10 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x10 | 0x11 | 0x25 | 0x28 | 0x75 | 0x40 | 0x60 |
| 0x11 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0E | 0x0F | 0x25 | 0x28 | 0x75 | 0x40 | 0x61 |
| 0x12 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x12 | 0x13 | 0x25 | 0x62 | 0x29 | 0x75 | 0x41 |
| 0x17 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x75 | 0x0C | 0x0D | 0x25 | 0x27 | 0x26 | 0x63 |
| 0x50 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x64 | 0x65 | 0x6A | 0x6B | 0x6C | 0x6D | 0x6E |
| 0xB0 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x72 | 0x76 | 0x77 | 0x85 | 0x79 | 0x80 | 0x81 |
| 0xB1 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x82 | 0x69 | 0x84 | 0x85 | 0x87 | 0x88 | 0x77 |
| 0xB2 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x59 | 0x5A | 0x67 | 0x68 | 0x79 | 0x77 | 0x76 |
| 0x53 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x32 | 0x33 | 0x34 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x54 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x32 | 0x33 | 0x34 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x55 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x32 | 0x33 | 0x34 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x30 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x26 | 0x40 | 0x28 | 0x41 | 0x29 | 0x3B | 0x1D |
| 0x31 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x26 | 0x40 | 0x28 | 0x41 | 0x29 | 0x3B | 0x1D |
| 0x32 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x26 | 0x40 | 0x28 | 0x41 | 0x29 | 0x3B | 0x1D |
| 0x73 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x56 |
| 0x74 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x54 | 0x00 | 0x24 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x75 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x55 | 0x00 | 0x24 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x76 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x00 | 0x24 | 0x00 | 0x00 | 0x00 | 0x52 |
| 0x77 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x00 | 0x24 | 0x00 | 0x00 | 0x00 | 0x53 |
| 0x37 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x07 | 0x1E | 0x25 | 0x31 | 0x30 | 0x1A | 0x38 |
| 0x38 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x07 | 0x1E | 0x25 | 0x31 | 0x30 | 0x1A | 0x38 |
| 0x39 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x07 | 0x1E | 0x25 | 0x31 | 0x30 | 0x1A | 0x38 |
| 0x64 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x75 | 0x25 | 0x0C | 0x12 | 0x0E | 0x10 | 0x2A |
| 0x65 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x75 | 0x25 | 0x0C | 0x12 | 0x0E | 0x10 | 0x2A |
| 0x56 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x32 | 0x33 | 0x34 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x57 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x32 | 0x33 | 0x34 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x78 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1B | 0x48 | 0x00 |
| 0x51 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x72 | 0x76 | 0x77 | 0x85 | 0x79 | 0x80 | 0x81 |
| 0xB3 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x72 | 0x76 | 0x77 | 0x85 | 0x79 | 0x80 | 0x81 |
| 0xB4 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x72 | 0x76 | 0x77 | 0x85 | 0x79 | 0x80 | 0x81 |
| 0x3A | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x26 | 0x40 | 0x28 | 0x41 | 0x29 | 0x3B | 0x1D |
| 0x3B | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x0C | 0x73 | 0x1E | 0x25 | 0x2A | 0x27 | 0x1A |
| 0x58 | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0xXY | 10 | 3 | 0x17 | 0x1C | 0x36 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_TYP | UW_EINH | MASK | NAME | UW_MULT | UW_DIV | UW_ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | nicht relevant | sshort | - | -- | -- | 1 | 1 | 0 |
| 0x01 | Laengsbeschleunigung | sshort | g | -- | -- | 625 | 100000 | 0 |
| 0x02 | Querbeschleunigung (CAN) | sshort | m/s^2 | -- | -- | 48 | 1000 | -24.576 |
| 0x03 | Querbeschleunigung Rohwert | ushort | g | -- | -- | 625 | 100000 | 0 |
| 0x04 | Status Shift Lock | ushort | 0/1 | 0x0001 | -- | 1 | 1 | 0 |
| 0x05 | Status Rueckfahrlichtschalter | ushort | 0/1 | 0x0002 | -- | 1 | 1 | 0 |
| 0x06 | Status Anlasserfreigabe | ushort | 0/1 | 0x0080 | -- | 1 | 1 | 0 |
| 0x07 | Status Hydraulikpumpe | ushort | 0/1 | 0x0100 | -- | 1 | 1 | 0 |
| 0x08 | Waehlhebelsignale | ushort | 0/1 | 0x03FC | -- | 1 | 1 | 0 |
| 0x09 | Motorhaubenkontakte | ushort | 0-n | 0xC000 | FUmweltTexte15 | 1 | 1 | 0 |
| 0x0B | Aktueller Gang | ubyte | 0-n | -- | FUmweltTexte1 | 1 | 1 | 0 |
| 0x0C | Iststrom Magnetventil Kupplung | ushort | mA | -- | -- | 1 | 1 | 0 |
| 0x0D | Sollstrom Magnetventil Kupplung | ushort | mA | -- | -- | 1 | 1 | 0 |
| 0x0E | Iststrom Magnetventil Schaltweg Rueck | ushort | mA | -- | -- | 1 | 1 | 0 |
| 0x0F | Sollstrom Magnetventil Schaltweg Rueck | ushort | mA | -- | -- | 1 | 1 | 0 |
| 0x10 | Iststrom Magnetventil Schaltweg Vor | ushort | mA | -- | -- | 1 | 1 | 0 |
| 0x11 | Sollstrom Magnetventil Schaltweg Vor | ushort | mA | -- | -- | 1 | 1 | 0 |
| 0x12 | Iststrom Magnetventil Waehlwinkel | ushort | mA | -- | -- | 1 | 1 | 0 |
| 0x13 | Sollstrom Magnetventil Waehlwinkel | ushort | mA | -- | -- | 1 | 1 | 0 |
| 0x14 | Bremssignale | ubyte | 0-n | -- | FUmweltTexte6 | 1 | 1 | 0 |
| 0x15 | Fahrtrichtung | ubyte | 0-n | -- | FUmweltTexte2 | 1 | 1 | 0 |
| 0x16 | Fahrpedalwert | sshort | % | -- | -- | 1 | 10 | 0 |
| 0x17 | Kilometerstand | ushort | km | -- | -- | 10 | 1 | 0 |
| 0x18 | Getriebeeingangsdrehzahl | sshort | 1/min | -- | -- | 1 | 1 | 0 |
| 0x19 | Getriebeausgangsdrehzahl | sshort | 1/min | -- | -- | 1 | 1 | 0 |
| 0x1A | Motordrehzahl von CAN | sshort | 1/min | -- | -- | 1 | 1 | 0 |
| 0x1B | Motordrehzahl Istwert | sshort | 1/min | -- | -- | 1 | 1 | 0 |
| 0x1C | Umgebungstemperatur | ubyte | Grad C | -- | -- | 1 | 1 | -48 |
| 0x1D | Getriebetemperatur Istwert | ubyte | Grad C | -- | -- | 1 | 1 | -48 |
| 0x1E | Hydrauliktemperatur Istwert | ubyte | Grad C | -- | -- | 1 | 1 | -48 |
| 0x1F | Motoroeltemperatur von CAN | ubyte | Grad C | -- | -- | 1 | 1 | -48 |
| 0x20 | Radgeschwindigkeit hinten links | sshort | km/h | -- | -- | 1 | 16 | 0 |
| 0x21 | Radgeschwindigkeit hinten rechts | sshort | km/h | -- | -- | 1 | 16 | 0 |
| 0x22 | Radgeschwindigkeit vorne links | sshort | km/h | -- | -- | 1 | 16 | 0 |
| 0x23 | Radgeschwindigkeit vorne rechts | sshort | km/h | -- | -- | 1 | 16 | 0 |
| 0x24 | Waehlhebelposition | ubyte | 0-n | -- | FUmweltTexte5 | 1 | 1 | 0 |
| 0x25 | Hydraulikdruck Rohwert | ushort | bar | -- | -- | 0.122 | 1 | -12.481 |
| 0x26 | Kupplungsposition Istwert | sshort | Ink | -- | -- | 1 | 1 | 0 |
| 0x27 | Sollposition Kupplung | sshort | Ink | -- | -- | 1 | 1 | 0 |
| 0x28 | Sollposition Schaltweg | sshort | Ink | -- | -- | 1 | 1 | 0 |
| 0x29 | Sollposition Waehlwinkel | sshort | Ink | -- | -- | 1 | 1 | 0 |
| 0x2A | Kupplungsposition Rohwert | ushort | Ink | -- | -- | 1 | 1 | 0 |
| 0x2B | Schaltwegposition 1 Rohwert | ushort | Ink | -- | -- | 1 | 1 | 0 |
| 0x2C | Schaltwegposition 2 Rohwert | ushort | Ink | -- | -- | 1 | 1 | 0 |
| 0x2D | Waehlwinkelposition 1 Rohwert | ushort | Ink | -- | -- | 1 | 1 | 0 |
| 0x2E | Waehlwinkelposition 2 Rohwert | ushort | Ink | -- | -- | 1 | 1 | 0 |
| 0x30 | Getriebestatus | ubyte | 0-n | -- | FUmweltTexte3 | 1 | 1 | 0 |
| 0x31 | Kupplungsstatus | ubyte | 0-n | -- | FUmweltTexte4 | 1 | 1 | 0 |
| 0x32 | Adaptions- bzw. Testprogramm-Nr. | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x33 | Fehlermeldung der Adaption | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x34 | Adaptionszustand | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x35 | Tuerkontakt | ushort | 0/1 | 0x0080 | -- | 1 | 1 | 0 |
| 0x36 | Spannungsversorgung Ubatt | ushort | V | -- | -- | 25 | 1000 | 0 |
| 0x37 | Sensorversorgung A Rohwert | ushort | V | -- | -- | 9766 | 1000000 | 0 |
| 0x38 | Sensorversorgung B Rohwert | ushort | V | -- | -- | 9766 | 1000000 | 0 |
| 0x39 | Radgeschwindigkeit der Hinterachse | sshort | km/h | -- | -- | 1 | 16 | 0 |
| 0x3A | Fahrzeuggeschwindigkeit | sshort | km/h | -- | -- | 1 | 16 | 0 |
| 0x3B | Gewuenschter Gang | ubyte | 0-n | -- | FUmweltTexte1 | 1 | 1 | 0 |
| 0x3C | Variablen Sicherheitskonzept Getriebe | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x3D | Laengsbeschleunigung von CAN | sshort | m/s^2 | -- | -- | 1 | 10 | -12.7 |
| 0x3E | Getriebetemperatur Rohwert | ushort | Ink | -- | -- | 1 | 1 | 0 |
| 0x3F | Hydrauliktemperatur | ushort | Ink | -- | -- | 1 | 1 | 0 |
| 0x40 | Schaltwegposition Istwert | sshort | Ink | -- | -- | 1 | 1 | 0 |
| 0x41 | Waehlwinkelposition Istwert | sshort | Ink | -- | -- | 1 | 1 | 0 |
| 0x42 | Motordrehzahl Rohwert | ushort | 1/min | -- | -- | 1 | 1 | 0 |
| 0x44 | Motortemperatur (Kuehlwasser) | ubyte | Grad C | -- | -- | 1 | 1 | -48 |
| 0x45 | Byte - CAN-Botschaft-Fehler | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x46 | Byte - CAN-Empfangs-Sende-Fehler | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x48 | Zuendungssignale | ubyte | 0-n | -- | FUmweltTexte9 | 1 | 1 | 0 |
| 0x49 | Fahrpedalwert (CAN) | sshort | % | -- | -- | 1 | 10 | 0 |
| 0x52 | Lenkradschalter SH + | ushort | 0/1 | 0x0020 | -- | 1 | 1 | 0 |
| 0x53 | Lenkradschalter SH - | ushort | 0/1 | 0x0080 | -- | 1 | 1 | 0 |
| 0x54 | Programmwahlschalter + | ushort | 0/1 | 0x0800 | -- | 1 | 1 | 0 |
| 0x55 | Programmwahlschalter - | ushort | 0/1 | 0x1000 | -- | 1 | 1 | 0 |
| 0x56 | Status VA | ushort | 0/1 | 0x0001 | -- | 1 | 1 | 0 |
| 0x57 | Status Anlasser KL50 | ushort | 0/1 | 0x0002 | -- | 1 | 1 | 0 |
| 0x58 | Status KL15 | ushort | 0/1 | 0x0008 | -- | 1 | 1 | 0 |
| 0x59 | Fehlercode MU | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x5A | Fehlercode MC | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x5B | Hydraulikdruck AD-Wert | ushort | Ink | -- | -- | 1 | 1 | 0 |
| 0x5C | Lenkwinkel (CAN) | sshort | Grad | -- | -- | 1 | 1 | -2047 |
| 0x5D | Gradient Motordrehzahl | sshort | 1/min | -- | -- | 1 | 1 | 0 |
| 0x5E | Gradient Getriebeeingangsdrehzahl | sshort | 1/min | -- | -- | 1 | 1 | 0 |
| 0x5F | Getriebeeingangsdrehzahl Rohwert | ushort | 1/min | -- | -- | 1 | 1 | 0 |
| 0x60 | Duty Cycle Ventil Schaltweg Vor | ushort | % | -- | -- | 1 | 100 | 0 |
| 0x61 | Duty Cycle Ventil Schaltweg Rueck | ushort | % | -- | -- | 1 | 100 | 0 |
| 0x62 | Duty Cycle Ventil Waehlwinkel | ushort | % | -- | -- | 1 | 100 | 0 |
| 0x63 | Duty Cycle Ventil Kupplung | ushort | % | -- | -- | 1 | 100 | 0 |
| 0x64 | Duty Cycle Signal OSC_IN | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x65 | Periodendauer Signal OSC_IN | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x66 | Port 7 | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x67 | Reset-Counter MC | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x68 | Reset-Counter MU | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x69 | Variablen Sicherheitskonzept Kupplung | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x6A | SPI Timeout | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x6B | SPI Hardwarefehler | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x6C | Status BIOS SW | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x6D | Variable fuers Abschalten | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x6E | Variable fuers Initialisieren | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x6F | Lifetime-Zaehler SG obere 2 Bytes | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x70 | Lifetime-Zaehler SG untere 2 Bytes | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x71 | Laengsbeschleunigung Rohwert | ushort | Ink | -- | -- | 1 | 1 | 0 |
| 0x72 | Byte - Digitaleingang 1 | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x73 | Bremssignale Rohwert | ubyte | 0-n | -- | FUmweltTexte6 | 1 | 1 | 0 |
| 0x74 | Statusbyte Digitalausgang 2 | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x75 | Statusbyte Digitalausgang | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x76 | Motordrehzahl Rohwert im resetfesten Bereich | ushort | 1/min | -- | -- | 1 | 1 | 0 |
| 0x77 | Byte - Gewuenschter und aktueller Gang im resetfesten Bereich | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x78 | Radgeschwindigkeit im resetfesten Bereich | sshort | km/h | -- | -- | 1 | 16 | 0 |
| 0x79 | Byte - Betriebsbremse und Getriebestatus im resetfesten Bereich | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x80 | Byte - Fehlervariable des Sicherheitskonzept Getriebe | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x81 | Resetzaehler Sicherheitskonzept Getriebe | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x82 | Byte - Fehlerursache Sicherheitskonzept Kupplung | ubyte | - | -- | -- | 1 | 1 | 0 |
| 0x83 | Byte - Umgebungsvariable | ushort | - | -- | -- | 1 | 1 | 0 |
| 0x84 | Radgeschwindigkeit der Vorderachse im resetfesten Bereich | sshort | km/h | -- | -- | 1 | 16 | 0 |
| 0x85 | Radgeschwindigkeit der Hinterachse im resetfesten Bereich | sshort | km/h | -- | -- | 1 | 16 | 0 |
| 0x87 | Sollposition der Kupplung im resetfesten Bereich | sshort | Ink | -- | -- | 1 | 1 | 0 |
| 0x88 | Istposition der Kupplung im resetfesten Bereich | sshort | Ink | -- | -- | 1 | 1 | 0 |
| 0x89 | Byte - Digitaleingang 2 | ushort | - | -- | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | - | XY | -- | -- | 1 | 1 | 0 |

### FUMWELTTEXTE1

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0/Neutral |
| 0x01 | 1.Gang |
| 0x02 | 2.Gang |
| 0x03 | 3.Gang |
| 0x04 | 4.Gang |
| 0x05 | 5.Gang |
| 0x06 | 6.Gang |
| 0x07 | Rueckwaertsgang |
| 0xXY | nicht definiert |

### FUMWELTTEXTE2

| WERT | UWTEXT |
| --- | --- |
| 0x01 | vorwaerts |
| 0x02 | neutral |
| 0x03 | rueckwaerts |
| 0xFF | ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE3

| WERT | UWTEXT |
| --- | --- |
| 0x00 | geschaltet |
| 0x01 | aktiv |
| 0x02 | Zwischenkuppeln |
| 0x03 | Synchronisation |
| 0x04 | Schaltweg Neutral |
| 0x05 | Waehlwinkel einregeln |
| 0x06 | Vorspannen |
| 0x07 | Waehlwinkel ablegen aus |
| 0x08 | Getriebe init aktiv |
| 0x09 | Synchronisation fertig |
| 0x0A | vor Synchronisation |
| 0xXY | nicht definiert |

### FUMWELTTEXTE4

| WERT | UWTEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | oeffnet |
| 0x03 | schliesst |
| 0x04 | Zwischenkuppeln aktiv |
| 0xXY | nicht definiert |

### FUMWELTTEXTE5

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Waehlhebel in P (Parken) |
| 0x02 | Waehlhebel in R (Rueckwaerts) |
| 0x03 | Waehlhebel in 0 (Neutral) |
| 0x04 | Waehlhebel in A (Automatik) |
| 0x05 | Waehlhebel in S (Sequentiell) |
| 0x06 | Waehlhebel in + (Gang hoch) |
| 0x07 | Waehlhebel in - (Gang runter) |
| 0xFF | Waehlhebelposition nicht definiert |

### FUMWELTTEXTE6

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Bremse nicht betätigt |
| 0x01 | Bremslichtschalter |
| 0x02 | Bremslichttestschalter |
| 0x03 | Bremslicht- und -test-schalter |
| 0xFF | nicht definiert |

### FUMWELTTEXTE7

| WERT | UWTEXT |
| --- | --- |
| 0x00 | CAN Alivezaehler DME 10 nicht korrekt |
| 0x01 | CAN Alivezaehler DME 11 nicht korrekt |
| 0x02 | CAN Alivezaehler DME 12 nicht korrekt |
| 0x03 | CAN Alivezaehler DME 13 nicht korrekt |
| 0x04 | CAN Alivezaehler DME 14 nicht korrekt |
| 0x05 | CAN Alivezaehler DME 15 nicht korrekt |
| 0x06 | nicht belegt |
| 0x07 | nicht belegt |
| 0x08 | CAN Sicherheitsvariable DME 10 nicht korrekt |
| 0x09 | CAN Sicherheitsvariable DME 11 nicht korrekt |
| 0x0A | CAN Sicherheitsvariable DME 12 nicht korrekt |
| 0x0B | CAN Sicherheitsvariable DME 13 nicht korrekt |
| 0x0C | CAN Sicherheitsvariable DME 14 nicht korrekt |
| 0x0D | CAN Sicherheitsvariable DME 15 nicht korrekt |
| 0x0E | nicht belegt |
| 0x0F | nicht belegt |
| 0xFF | nicht definiert |

### FUMWELTTEXTE8

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Nachricht SMG 10 nicht korrekt gesendet |
| 0x01 | Nachricht SMG 11 nicht korrekt gesendet |
| 0x02 | Nachricht SMG 12 nicht korrekt gesendet |
| 0x03 | nicht belegt |
| 0x04 | nicht belegt |
| 0x05 | nicht belegt |
| 0x06 | nicht belegt |
| 0x07 | nicht belegt |
| 0x08 | Nachricht DME 10 nicht korrekt empfangen |
| 0x09 | Nachricht DME 11 nicht korrekt empfangen |
| 0x0A | Nachricht DME 12 nicht korrekt empfangen |
| 0x0B | Nachricht DME 13 nicht korrekt empfangen |
| 0x0C | Nachricht DME 14 nicht korrekt empfangen |
| 0x0D | Nachricht DME 15 nicht korrekt empfangen |
| 0x0E | Nachricht DME 16 nicht korrekt empfangen |
| 0x0F | nicht belegt |
| 0xFF | nicht definiert |

### FUMWELTTEXTE9

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Zuendung aus |
| 0x01 | Radio Ein-Stellung |
| 0x02 | Fahrtstellung |
| 0x03 | Anlassen |
| 0xFF | nicht definiert |

### FUMWELTTEXTE15

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | geschlossen |
| 0x4000 | (1) links offen |
| 0x8000 | (2) rechts offen |
| 0xC000 | (1+2) links + rechts offen |
| 0xFFFF | nicht definiert |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | KS gegen UBatt |
| 0x02 | KS gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | unplausibler Wert |
| 0x05 | SG spezifisch |
| 0x06 | SG spezifisch |
| 0x07 | Fehler momentan vorhanden |
| 0x08 | sporadischer Fehler |
| 0xFF | unbekannte Fehlerart |

### SPEICHER

| SPEICHER | WERT |
| --- | --- |
| FLASH | 0x00 |
| RAM | 0x00 |
| ROM | 0x00 |
| E2PROM | 0x00 |

### STELLGLIEDER

| STELLGLIED | PIN |
| --- | --- |
| MAGNETVENTIL_KUPPLUNG | 0x0A |
| MAGNETVENTIL_GASSE | 0x28 |
| MAGNETVENTIL_GANG_VOR | 0x48 |
| MAGNETVENTIL_GANG_R | 0x4C |
| ANLASSER_FREIGABE | 0x08 |
| HYDROPUMPE | 0x05 |
| STOERANZEIGE | 0x3E |
| SHIFTLOCK | 0x3F |
| GANG_WAHLHEBEL_ANZEIGE | 0x42 |
| KOMBIANZEIGE_KOMFORTINDEX | 0x43 |

### TESTPRG

| TESTPRG_NR | TESTPRG_NAME | DAUER TYP. | DAUER MAX. |
| --- | --- | --- | --- |
| 0x01 | Entlueftung Kuppl.-Nehmerzyl./Hydraulikleit. | 2 min | 2 min |
| 0x02 | Kupplungsschleifpunkt einlernen | 5 sek | 10 sek |
| 0x03 | Kupplungsventilkennwerte einlernen | 1 min | 2 min |
| 0x04 | Speichervorspanndruck ermitteln | 8 sek | 30 sek |
| 0x05 | Entlueftung Getriebeakuator | 16 min | 16 min |
| 0x06 | Stromoffset Waehlwinkel (Gasse) einlernen |  |  |
| 0x07 | Getriebe komplett adaptieren | 2,30 min | 3,0 min |
| 0x08 | Offset Laengsbeschleunigungssensor einlernen | 5 sek | 20 sek |
| 0x09 | Schaltwegmittellage positionieren |  |  |
| 0x0A | Beliebigen Gang einlegen |  |  |
| 0x0B | Getriebe einlernen |  |  |
| 0x0C | Schaltwegmitte und Waehlwinkelsenor testen |  |  |
| 0x0D | Gangerkennung Waehlwinkel einlernen |  |  |
| 0x15 | Startbedingungen fuer Motor herstellen |  |  |

### STATTESTTEXTE

| STB | TEST_STATUS_TEXT |
| --- | --- |
| 0x00 | Testbedingung nicht erfuellt |
| 0x01 | Testprogramm laeuft |
| 0x02 | Testprogramm beendet |
| 0x03 | Testprogramm nicht ordnungsgemaess beendet |
| 0xFF | Unbekannter Status |

### INFOTEXTE1A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung |
| 0x01 | Kupplungsentlueftung |
| 0x7F | Entlueftung beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE1F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Nehmerzylinder-Mindesthub nicht erreicht |
| 0x7F | Abbruch durch Benutzer |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft, oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE2A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung und Pruefung der Eintrittsbedingungen |
| 0x01 | Adaption Kupplungsschleifpunkt |
| 0x7F | Schleifpunktadaption beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE2F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler erkannt |
| 0x24 | Getriebedrehzahl beim Anfahren des Einlernbereichs oder Schleifpunkt zu niedrig |
| 0x25 | Keine Getriebedrehzahl bei geschlossener Kupplung |
| 0x26 | Interner Ablauffehler |
| 0x27 | Getriebedrehzahl nach Kupplungsoeffnen nicht in der geforderten Zeit auf Null |
| 0x7F | Abbruch durch Benutzer |
| 0xA0 | Testbedingung nicht erfuellt (Motor ist aus, Gang eingelegt oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE3A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung und Pruefung der Eintrittsbedingungen |
| 0x01 | Ermittlung Ventilkennwerte |
| 0x02 | Ermittlung Kupplungs-Lagereglerverstaerkung |
| 0x7F | Adaption Kupplungskennwerte beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE3F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler erkannt |
| 0x7F | Abbruch durch Benutzer |
| 0x81 | Einkuppelposition ausserhalb der zulaessigen Toleranz |
| 0x82 | Auskuppelposition ausserhalb der zulaessigen Toleranz |
| 0x83 | Kupplungsventil-Nullstrom ausserhalb der zulaessigen Toleranz |
| 0x84 | Zeitueberschreitung bei Ermittlung der Ventilueberdeckung |
| 0x85 | Ventilueberdeckung ausserhalb der zulaessigen Toleranz |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE4A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung |
| 0x01 | Speicher leeren |
| 0x02 | Speicher geleert |
| 0x03 | Speicher befuellen |
| 0x04 | Vorspanndruck bestimmen |
| 0x7F | Vorspanndruchermittlung beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE4F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | HE-Temperatur bei Vorspanndruckermittlung ausserhalb der zulaessigen Grenzen |
| 0x02 | Druck beim Speicher leeren nicht in der vorgeschriebenen Zeit unter Mindestschwelle |
| 0x03 | Druck beim Pumpen nicht in der vorgesehenen Zeit ueber Abschaltschwelle |
| 0x7F | Abbruch durch Benutzer |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE5A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x14 | Druckaufbau fuer den Ventiltest |
| 0x15 | Es werden die Schaltventile getestet, ob der noetige Strom zum spuelen der Hydraulikleitungen fliessen kann |
| 0x16 | Ermittlung des Leckagedruckabfalls |
| 0x17 | Verringern des Hydraulikdrucks |
| 0x18 | Getriebe in Endlage (5. Gang) bringen |
| 0x19 | Druckaufbau fuer die Waehlwinkelentlueftung |
| 0x1A | Waehlwinkel entlueften |
| 0x1B | Druckaufbau fuer die Schaltwegentlueftung |
| 0x1D | Wartezeit verbringen um Oelverschaeumung abklingen zu lassen |
| 0x1E | Verschlusspruefung des Druckbegrenzungsventils am Waehlwinkelzylinder |
| 0x20 | Schaltwegzylinder fuellen |
| 0x21 | Entlueftung beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE5F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Der Ablauf des Automatismus ist nicht korrekt |
| 0x0F | Kein oder zu geringer Hydraulikdruck |
| 0x16 | Hydraulikdruck zu hoch |
| 0x17 | Druckregelventile sind zu warm und der fuer die Entlueftung notwendige Strom kann nicht fliessen |
| 0x18 | Die Endlage (5.Gang) ist nicht einlegbar |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE6A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Kupplung oeffnen |
| 0x28 | Schaltwegmittellage einregeln |
| 0x29 | Schaltwegmittellage ueberpruefen |
| 0x2A | Schaltwegmittellage einlegen beendet |
| 0x02 | Waehlwinkeloffsetstromadaption |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE6F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Der Ablauf des Automatismus ist nicht korrekt |
| 0x46 | Die Schaltwegmittellage laesst sich nicht einregeln |
| 0x47 | Der Waehlwinkel laesst sich nicht vom rechten zum linken Anschlag bewegen |
| 0x48 | Der minimale Abstand zwischen linker und rechter Endstellung des Waehlwinkels ist unterschritten |
| 0x49 | Der Wert des WW-Hauptsensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4A | Der Wert des redundanten WW-Sensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4C | Grenzwert fuer Wiederholgenauigkeit der WW-Sensoren ueberschritten |
| 0x1E | Kein gueltiger Waehlwinkeloffsetstrom eingelernt |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE7A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Kupplung oeffnen |
| 0x28 | Schaltwegmittellage einregeln |
| 0x29 | Schaltwegmittellage ueberpruefen |
| 0x2A | Schaltwegmittellage einlegen beendet |
| 0x02 | Waehlwinkeloffsetstromadaption |
| 0x03 | Waehlwinkelregler adaptieren |
| 0x04 | Gang 1 ausmessen |
| 0x05 | Gang 2 ausmessen |
| 0x06 | Gang 3 ausmessen |
| 0x07 | Gang 4 ausmessen |
| 0x08 | Gang 5 ausmessen |
| 0x09 | Gang 6 ausmessen |
| 0x0A | Gang R ausmessen |
| 0x0B | Neutralstellung einnehmen |
| 0x0C | In NV-RAM schreiben |
| 0x0D | Einlegehaenger nachbearbeiten |
| 0x0E | Getriebeparameter verarbeiten |
| 0x0F | Getriebe einlernen beenden |
| 0x10 | Gangerkennungssensor adaptieren |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE7F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler im Ablauf |
| 0x28 | Die Schaltwegendstellungen der geraden Gaenge sind zu unterschiedlich |
| 0x29 | Die Schaltwegendstellungen der ungeraden Gaenge sind zu unterschiedlich |
| 0x2A | Die Schaltwegendstellung des Rueckwaertsganges zu den anderen ungeraden Gaengen ist zu unterschiedlich |
| 0x2B | Die minimale Fenstergroesse des Rueckeaertsganges wurde unterschritten |
| 0x2C | Die minimale Fenstergroesse des 6.Ganges wurde unterschritten |
| 0x2D | Die minimale Fenstergroesse des 5.Ganges wurde unterschritten |
| 0x2E | Die minimale Fenstergroesse des 4.Ganges wurde unterschritten |
| 0x2F | Die minimale Fenstergroesse des 3.Ganges wurde unterschritten |
| 0x30 | Die minimale Fenstergroesse des 2.Ganges wurde unterschritten |
| 0x31 | Die minimale Fenstergroesse des 1.Ganges wurde unterschritten |
| 0x32 | Die Zeit zum Einregeln der Waehlwinkelmitte ist ueberschritten |
| 0x33 | Minimaler Abstand zwischen Schaltweg gerade Gaenge und ungerade Gaenge ist unterschritten |
| 0x34 | Der Hydraulikdruck ist zu gering |
| 0x35 | Einlegehaenger erkannt |
| 0x36 | Einlegehaenger in Gang 1 vorhanden / Werte wurden substituiert |
| 0x37 | Einlegehaenger in Gang 2 vorhanden / Werte wurden substituiert |
| 0x38 | Einlegehaenger in Gang 3 vorhanden / Werte wurden substituiert |
| 0x39 | Einlegehaenger in Gang 4 vorhanden / Werte wurden substituiert |
| 0x3A | Einlegehaenger in Gang 5 vorhanden / Werte wurden substituiert |
| 0x3B | Einlegehaenger in Gang 6 vorhanden / Werte wurden substituiert |
| 0x3C | Einlegehaenger in Rueckwaertsgang vorhanden / Werte wurden substituiert |
| 0x3D | Mindestens einer der eingelernten Parameter liegt ausserhalb des erlaubten Toleranzbereiches |
| 0x3E | Schaltweg zu weit ausgerueckt |
| 0x40 | Der SW-Hauptsensor liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x41 | Der redundante SW-Sensor liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x46 | Die Schaltwegmitte laesst sich nicht einregeln |
| 0x47 | Der Waehlwinkel laesst sich nicht vom rechten zum linken Anschlag bewegen |
| 0x48 | Der minimale Abstand zwischen linker und rechter Endstellung des Waehlwinkels ist unterschritten |
| 0x49 | Der WW-Wert des Hauptsensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4A | Der WW-Wert des redundanten Hauptsensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4C | Grenzwerte fuer Wiederholgenaugikeit der WW-Sensoren ueberschritten |
| 0x64 | Bereichsfehler des gemittelten Deltas zwischen den Schaltwegspuren |
| 0x65 | Deltafehler zwischen den Waehlwinkelspuren |
| 0x66 | Bereichsfehler des gemittelten Deltas zwischen den Schaltwegspuren |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE8A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Initialisierung |
| 0x02 | Ersten Wert ermitteln |
| 0x03 | Zeit zwischen zwei Werten abwarten |
| 0x04 | Folgewerte mit 1. Wert vergleichen |
| 0x05 | Offset berechnen |
| 0x06 | Offsetermittlung beenden |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE8F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x5A | Eingelernter Wert ausserhalb des fuer Laengsbeschleunigung zulaessigen Bereichs |
| 0x5B | Offset des Laengsbeschleunigungssensors in vorgesehener Zeit nicht erfolgreich eingelernt |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE9A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Kupplung oeffnen |
| 0x28 | Schaltwegmittellage einregeln |
| 0x29 | Schaltwegmittellage ueberpruefen |
| 0x2A | Schaltwegmittellage einlegen beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE9F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Der Ablauf des Automatismus ist nicht korrekt |
| 0x46 | Die Schaltwegmittellage laesst sich nicht einregeln |
| 0x47 | Der Waehlwinkel laesst sich nicht vom rechten zum linken Anschlag bewegen |
| 0x48 | Der minimale Abstand zwischen linker und rechter Endstellung des Waehlwinkels ist unterschritten |
| 0x49 | Der WW-Wert des Hauptsensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4A | Der WW-Wert des redundanten Sensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4C | Grenzwerte fuer Wiederholgenaugikeit der WW-Sensoren ueberschritten |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE10A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x3D | Initialisierung der Funktion |
| 0x3E | Gewuenschten Gang als Zielgang setzen |
| 0x3F | Zeit zum Gangeinlegen abwarten |
| 0x40 | Beliebigen Gang einlegen ist beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE10F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x50 | Das Einlegen des gewuenschten Ganges ist gescheitert |
| 0x51 | Ungueltige Gangvorgabe |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE11A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Kupplung oeffnen |
| 0x28 | Schaltwegmittellage einregeln |
| 0x29 | Schaltwegmittellage ueberpruefen |
| 0x2A | Schaltwegmittellage einlegen beendet |
| 0x04 | Gang 1 ausmessen |
| 0x05 | Gang 2 ausmessen |
| 0x06 | Gang 3 ausmessen |
| 0x07 | Gang 4 ausmessen |
| 0x08 | Gang 5 ausmessen |
| 0x09 | Gang 6 ausmessen |
| 0x0A | Gang R ausmessen |
| 0x0B | Neutralstellung einnehmen |
| 0x0C | Adaptionswerte in NV-RAM schreiben |
| 0x0D | Einlegehaenger nachbearbeiten |
| 0x0E | Getriebeparameter verarbeiten |
| 0x0F | Getriebe einlernen beenden |
| 0x10 | Gangerkennungssensor adaptieren |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE11F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler im Ablauf |
| 0x28 | Die Schaltwegendstellungen der geraden Gaenge sind zu unterschiedlich |
| 0x29 | Die Schaltwegendstellungen der ungeraden Gaenge sind zu unterschiedlich |
| 0x2A | Die Schaltwegendstellung des Rueckwaertsganges zu den anderen ungeraden Gaengen ist zu unterschiedlich |
| 0x2B | Die minimale Fenstergroesse des Rueckeaertsganges wurde unterschritten |
| 0x2C | Die minimale Fenstergroesse des 6.Ganges wurde unterschritten |
| 0x2D | Die minimale Fenstergroesse des 5.Ganges wurde unterschritten |
| 0x2E | Die minimale Fenstergroesse des 4.Ganges wurde unterschritten |
| 0x2F | Die minimale Fenstergroesse des 3.Ganges wurde unterschritten |
| 0x30 | Die minimale Fenstergroesse des 2.Ganges wurde unterschritten |
| 0x31 | Die minimale Fenstergroesse des 1.Ganges wurde unterschritten |
| 0x32 | Die Zeit zum Einregeln der Waehlwinkelmitte ist ueberschritten |
| 0x33 | Minimaler Abstand zwischen Schaltweg gerade Gaenge und ungerade Gaenge ist unterschritten |
| 0x34 | Der Hydraulikdruck ist zu gering |
| 0x35 | Einlegehaenger erkannt |
| 0x36 | Einlegehaenger in Gang 1 vorhanden / Werte wurden substituiert |
| 0x37 | Einlegehaenger in Gang 2 vorhanden / Werte wurden substituiert |
| 0x38 | Einlegehaenger in Gang 3 vorhanden / Werte wurden substituiert |
| 0x39 | Einlegehaenger in Gang 4 vorhanden / Werte wurden substituiert |
| 0x3A | Einlegehaenger in Gang 5 vorhanden / Werte wurden substituiert |
| 0x3B | Einlegehaenger in Gang 6 vorhanden / Werte wurden substituiert |
| 0x3C | Einlegehaenger in Rueckwartsgang vorhanden / Werte wurden substituiert |
| 0x3D | Mindestens einer der eingelernten Parameter liegt ausserhalb des erlaubten Toleranzbereiches |
| 0x3E | Schaltweg zu weit ausgerueckt |
| 0x40 | Schaltweg Haupsensorwert ausserhalb der Grenze fuer elektrischen Bereich |
| 0x41 | Schaltweg red. Sensorwert ausserhalb der Grenze fuer elektrischen Bereich |
| 0x46 | Die Schaltwegmitte laesst sich nicht einregeln |
| 0x47 | Der Waehlwinkel laesst sich nicht vom rechten zum linken Anschlag bewegen |
| 0x48 | Der Minimale Abstand zwischen linker und rechter Endstellung des Waehlwinkels ist unterschritten |
| 0x49 | Waehlwinkel Hauptsensorwert ausserhalb der Grenze fuer elektrischen Bereich |
| 0x4A | Waehlwinkel red. Sensorwert ausserhalb der Grenze fuer elektrischen Bereich |
| 0x4C | Potiwerte Waehlwinkel Haupt- und red. Sensor passen nich zueinander |
| 0x64 | 0x64 Fehler einlernen Gangerkennungs Sensor |
| 0x65 | 0x65 Fehler einlernen Gangerkennungs Sensor |
| 0x66 | Bereichsfehler des gemittelten Deltas zwischen den Schaltwegspuren |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE12A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x29 | Schaltwegmittellage ueberpruefen |
| 0x2A | Schaltwegmittellage ueberpruefen beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE12F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler im Ablauf |
| 0x48 | Abstand zw. Waehlwinkelanschlag links und rechts zu klein |
| 0x49 | Der WW-Wert des Hauptsensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4A | WW-Wert des redundanten Sensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4C | Grenzwert fuer Wiederholgenauigkeit der WW-Sensoren ueberschritten |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE13A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Kupplung oeffnen |
| 0x28 | Schaltwegmittellage einregeln |
| 0x29 | Schaltwegmittellage ueberpruefen |
| 0x2A | Schaltwegmittellage ueberpruefen beendet |
| 0x10 | Gangerkennung Waehlwinkel einregeln |
| 0x11 | Gangerkennung Waehlwinkel einregeln Ende |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE13F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Der Ablauf des Automatismus ist nicht korrekt |
| 0x46 | Die Schaltwegmittellage laesst sich nicht einregeln |
| 0x47 | Der Waehlwinkel laesst sich nicht vom rechten zum linken Anschlag bewegen |
| 0x48 | Der minimale Abstand zwischen linker und rechter Endstellung des Waehlwinkels ist unterschritten |
| 0x49 | Der WW-Wert des Hauptsensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4A | Der WW-Wert des redundanten Sensors liegt ausserhalb des erlaubten elektrischen Bereiches |
| 0x4C | Grenzwert fuer Wiederholgenauigkeit der WW-Sensoren ueberschritten |
| 0x64 | Bereichsfehler des gemittelten Deltas zwischen den Waehlwinkelspuren |
| 0x65 | Deltafehler zwischen den Waehlwinkelspuren |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE21A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung und Pruefung der Eintrittsbedingungen |
| 0x01 | Ermittlung Ventilkennwerte |
| 0x7F | Adaption Kupplungskennwerte beendet, Startbedingung fuer Motor hergestellt |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE21F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x81 | Einkuppelposition ausserhalb der zulaessigen Toleranz |
| 0x82 | Auskuppelposition ausserhalb der zulaessigen Toleranz |
| 0x83 | Kupplungsventil-Nullstrom ausserhalb der zulaessigen Toleranz |
| 0x84 | Zeitueberschreitung bei Ermittlung der Ventilueberdeckung |
| 0x85 | Ventilueberdeckung ausserhalb der zulaessigen Toleranz |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### HINTERACHSUEBERSETZUNG

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Hinterachsuebersetzung 1; Standard: 1:3,64 |
| 0x01 | Hinterachsuebersetzung 2 |
| 0x02 | Hinterachsuebersetzung 3 |
| 0x03 | Hinterachsuebersetzung 4 |
| 0x04 | Hinterachsuebersetzung 5 |
| 0x05 | Hinterachsuebersetzung 6 |
| 0x06 | Hinterachsuebersetzung 7 |
| 0x07 | Hinterachsuebersetzung 8 |
| 0x08 | Hinterachsuebersetzung 9 |
| 0x09 | Hinterachsuebersetzung 10 |
| 0x0A | Hinterachsuebersetzung 11 |
| 0x0B | Hinterachsuebersetzung 12 |
| 0x0C | Hinterachsuebersetzung 13 |
| 0x0D | Hinterachsuebersetzung 14 |
| 0x0E | Hinterachsuebersetzung 15 |
| 0x0F | Hinterachsuebersetzung 16 |
| 0xXY | nicht definiert |

### INFOTEXTEFAHRZEUGZUSTAND

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Keine Systemfreigabe |
| 0x01 | Motor aus, Fahrzeug steht |
| 0x02 | Eingekuppelt |
| 0x03 | Abwuergen |
| 0x04 | Anhalten |
| 0x05 | Anschleppen |
| 0x06 | Abschalten |
| 0x07 | Antiblockiersystem |
| 0x08 | Antriebsschlupfregelung |
| 0x09 | Nebenantrieb |
| 0x0A | Keine Druckluft |
| 0x0B | Starten |
| 0x0C | Abschalten ohne Systemfreigabe |
| 0x10 | Einkuppeln, Schub |
| 0x11 | Einkuppeln, Zug |
| 0x12 | Einkuppeln, Synchron |
| 0x13 | Einkuppeln, Ueberdrehzahl |
| 0x14 | Einkuppeln, Zug, Sport |
| 0x15 | Einkuppeln, Schub, Sport |
| 0x16 | Einkuppeln, Radabriss |
| 0x17 | Einkuppeln, Schub, Eingriff |
| 0x18 | Einkuppeln, Eingriff |
| 0x20 | Anfahren, Vorweg |
| 0x21 | Anfahren, Normal |
| 0x22 | Anfahren, Kick Down |
| 0x23 | Anfahren, Synchron |
| 0x24 | Anfahren, Rennstart |
| 0x25 | Anfahrhilfe |
| 0x26 | Rennstart vorbereiten |
| 0x27 | Anfahren, Moment |
| 0x30 | Schalten |
| 0x40 | Neutral ohne Einlernen, GW |
| 0x41 | Neutral Einlernen, GW |
| 0x42 | Neutral Einlernen GW beendet |
| 0x43 | Neutral, Fahrzeug steht |
| 0x50 | Verschalten, Zug Normal |
| 0x51 | Verschalten, Zug Extrem |
| 0x52 | Verschalten, Zug Synchron |
| 0x60 | Anrollen |
| 0x70 | Notfahr FP Kuppeln |
| 0x71 | Notfahr N Mot Kuppeln |
| 0x72 | System abschalten |
| 0x80 | Schlupf |
| 0x90 | Ansynchronisieren |
| 0x91 | Ansynchronisieren beendet |
| 0xA0 | KKL Einlernen |
| 0xA1 | KKL Einlernen beendet |
| 0xFF | Unbekannter Infotext |

### FGR

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | FGR passiv |
| 0x01 | FGR aktiv, Konstantfahrt |
| 0x02 | ACC-Regelung Standard |
| 0x03 | FGR aktiv, Wiederaufnahme |
| 0x04 | ACC-Regelung erhoehte Dynamik |
| 0x05 | FGR aktiv, Setzen/Beschleunigen |
| 0x06 | FGR/ACC-Abschaltung |
| 0x07 | FGR aktiv, Verzoegern |
| 0xXY | nicht definiert |

### FREEZE_FRAME_REFERENZ

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Kein Freeze Frame gespeichert |
| 0x01 | Freeze Frame wird verwaltet fuer DME (Master) |
| 0x02 | Freeze Frame wird verwaltet fuer EGS od. SMG |
| 0x03 | Freeze Frame wird verwaltet fuer EML |
| 0x04 | Freeze Frame wird verwaltet fuer DME links |
| 0xXY | nicht definiert |

### PROGRAMMINFO

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x01 | 1. Programm |
| 0x02 | 2. Programm |
| 0x03 | 3. Programm |
| 0x04 | 4. Programm |
| 0x05 | 5. Programm |
| 0x06 | 6. Programm |
| 0xXY | nicht definiert |

### KOMFORTINDEX

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | komfortabel |
| 0x01 | komfortabel+1 |
| 0x02 | komfortabel+2 |
| 0x03 | komfortabel+3 |
| 0x04 | komfortabel+4 |
| 0x05 | komfortabel+5 |
| 0x06 | normal |
| 0x07 | sportiv-5 |
| 0x08 | sportiv-4 |
| 0x09 | sportiv-3 |
| 0x0A | sportive-2 |
| 0x0B | sportiv-1 |
| 0x0C | sportiv |
| 0xXY | nicht definiert |

### GANGANZEIGE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | 0/Neutral |
| 0x01 | 1.Gang |
| 0x02 | 2.Gang |
| 0x03 | 3.Gang |
| 0x04 | 4.Gang |
| 0x05 | 5.Gang |
| 0x06 | 6.Gang |
| 0x07 | Rueckwaertsgang |
| 0x08 | Anzeige dunkel |
| 0x09 | Automat |
| 0x0F | Testfunktion (alle an) |
| 0xFF | nicht definiert |

### WAEHLHEBELANZEIGE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Anzeige dunkel |
| 0x01 | 0 |
| 0x02 | R |
| 0x03 | A+ |
| 0x04 | A- |
| 0x05 | A+/- |
| 0x06 | S+ |
| 0x07 | S- |
| 0x08 | S+/- |
| 0x09 | + |
| 0x0A | - |
| 0x0B | +/- |
| 0x0C | A (Automat) |
| 0x0F | Testfunktion (alle an) |
| 0xFF | nicht definiert |

### LED

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Keine LED |
| 0x01 | 1. LED |
| 0x02 | 1. und 2. LED |
| 0xXY | nicht definiert |
