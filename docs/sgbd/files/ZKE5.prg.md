# ZKE5.prg

## General

|  |  |
| --- | --- |
| File | ZKE5.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 9 |
| Origin | BMW TI-430 Gerd Huber |
| Revision | 1.28 |
| Author | BMW TI-430 Gerd Huber, BMW MK-4 St. Frank, BMW TI-431 Lothar Dennert,EE-51 Alex Franckenstein |
| ECU Comment | Ansteuern nur bei entsichertem Fahrzeug! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentrale Karosserie-Elektronik V  fuer E46 |  |  |
| ORIGIN | string | BMW TI-430 Gerd Huber |  |  |
| REVISION | string | 1.28 |  |  |
| AUTHOR | string | BMW TI-430 Gerd Huber, BMW MK-4 St. Frank, BMW TI-431 Lothar Dennert,EE-51 Alex Franckenstein |  |  |
| COMMENT | string | Ansteuern nur bei entsichertem Fahrzeug! |  |  |
| PACKAGE | string | 0.12 |  |  |
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

### SLEEP_MODE

SG in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x9D) wird aktiviert |

### C_CI_LESEN

Codierindex lesen Standard Codierjob

_No arguments._

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob

_No arguments._

### C_FG_SCHREIBEN

Fahrgestellnummer schreiben Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_FG_AUFTRAG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer Grundmodul V automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### IDENT

Ident-Daten fuer Grundmodul V

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose Sonderfall: Loeschdatum (KW/Jahr) integriert !

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen Sonderfall: Loeschdatum (KW/Jahr) integriert !

| Name | Type | Description |
| --- | --- | --- |
| LOESCHDATUM_KW | int | aktuelle Kalenderwoche beim Loeschen des Fehlerspeichers |
| LOESCHDATUM_JAHR | int | aktuelles Kalenderjahr beim Loeschen des Fehlerspeichers |

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### STATUS_DIGITAL

Status der Digitalsignale des GM V (Ein-/Ausgaenge) Der Wertebereich ist bei fast allen Results: Bereich: 0, wenn FALSE / 1, wenn TRUE Andernfalls ist der Bereich gezielt spezifiziert.

_No arguments._

### STATUS_EKS

Status bzgl. Einklemmschutz bei Grundmodul V

_No arguments._

### STATUS_ANALOG

Status der Analogsignale des GM V

_No arguments._

### STEUERN_DIGITAL

Ansteuern eines digitalen Ein- oder Ausgangs v. GM5 ! erlaubte Namen des Arguments 'ORT' ueber Tool XTRACT.exe ! Aufruf 'XTRACT [-F] ZKE5.prg'

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS NAME TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### COD_LESEN

Auslesen der Codierdaten des GM V (Block 0) (Block 1 mit Parameter '1')

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | Blocknummer 0 bis n |

### IS_LESEN

Infospeicher lesen Info-Speicher ist im Aufbau analog zum Fehlerspeicher Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### IS_LESEN_ZV

Infospeicher lesen / Sonderfall: ZV-Ringspeicher Analog zu FS_LESEN gibt es mehrere (15+1) Ergebnis-Saetze Im Satz  1 steht die Information zum letzten ZV-Befehl. Im Satz 15 steht die aelteste Information. Im Satz 16 steht das Ergebnis JOB_STATUS.

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers der ZKE V Als Argumente werden die Anzahl und die Adresse der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | 1 - 32 |
| ADRESSE | int | 0x0000 - 0xFFFF |

### SPEICHER_SCHREIBEN

Speicherinhalt lesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Codierdaten |
| SPEICHER_DATEN | string | Speicherinhalt |

### STATUS_KEY_MEMORY

Auslesen der Nummer des Funkschluessels, mit dem zuletzt entriegelt wurde

_No arguments._

### STATUS_FUNKSCHLUESSEL

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!        A C H T U N G         !!! !!! Dieser Job ist abhaengig von !!! !!! der Softwarenummer des SG's. !!! !!! Es liegen derzeit nur Daten  !!! !!! fuer folgende SW-Nr. vor :   !!! !!! 1.1, 1.2, 1.4, 1.5, 1.6, 2.0 !!! !!! 3.0, 3.1, 3.3                     !!! !!! bzw. für folgende Diag.Index !!! !!! 41, 51, 42, 52               !!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Auslesen der Funkschluesseldaten aus dem internen Speicher der ZKE V

_No arguments._

### STEUERN_IB_AUS

dauerhaftes Ausschalten der Innenbeleuchtung Das Innenlicht kann nur manuell durch Druecken des Tasters wieder aktiviert werden.

_No arguments._

### FS_LESEN_DWA

Fehlerspeicher lesen (nur DWA-Fehler) Sonderjob für Hr. Mühlbauer, TR-443

_No arguments._

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

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
| 0x18 | Teves |
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
| 0xFF | unbekannter Hersteller |

### ROVERPARTNUMPREFIX

| ROVER_NR | PREFIX |
| --- | --- |
| 0xA0 | AMR |
| 0xA1 | HHF |
| 0xA2 | JFC |
| 0xA3 | MKC |
| 0xA4 | SCB |
| 0xA5 | SRB |
| 0xA6 | XQC |
| 0xA7 | XQD |
| 0xA8 | XQE |
| 0xA9 | XVD |
| 0xAA | YAC |
| 0xAB | YDB |
| 0xAC | YFC |
| 0xAD | YUB |
| 0xAE | YWC |
| 0xAF | YWQ |
| 0xB0 | EGQ |
| 0xB1 | YIB |
| 0xB2 | YIC |
| 0xB3 | YIE |
| 0xXY | ??? |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Interner Fehler im Grundmodul V: interne Spannung |
| 0x04 | Energiesparmode gesetzt |
| 0x20 | Interner Fehler im Grundmodul V: Prozessor Watchdog |
| 0x21 | Interner Fehler im Grundmodul V: Prozessor ROM |
| 0x22 | Interner Fehler im Grundmodul V: Taktgeber |
| 0x23 | Interner Fehler im Grundmodul V: EEPROM |
| 0x47 | Interner Fehler im Grundmodul V: Prozessor Interrupt |
| 0x24 | Zentralverriegelung Relais Verriegeln: Oeffnerkontakt unterbricht oder Schliesserkontakt klebt |
| 0x25 | Zentralverriegelung Relais Entriegeln: Oeffnerkontakt unterbricht oder Schliesserkontakt klebt |
| 0x26 | Zentralverriegelung Relais Sichern: Oeffnerkontakt unterbricht oder Schliesserkontakt klebt |
| 0x27 | Zentralverriegelung Relais Verriegeln Fahrertuer: Oeffnerkontakt unterbricht oder Schliesserkontakt klebt |
| 0x28 | Zentralverriegelung: Relais zieht nicht an bei Verriegeln |
| 0x29 | Zentralverriegelung: Relais zieht nicht an bei Entriegeln |
| 0x2A | Zentralverriegelung: Relais zieht nicht an bei Sichern |
| 0x2B | Zentralverriegelung: Relais zieht nicht an bei Verriegeln Fahrertuer |
| 0x2C | Fensterheber: Relais klebt bei Fahrertuer |
| 0x2D | Fensterheber: Relais klebt bei Beifahrertuer |
| 0x2E | Fensterheber: Relais klebt bei Fahrerseite hinten |
| 0x2F | Fensterheber: Relais klebt bei Beifahrerseite hinten |
| 0x30 | K-Bus oder Steuergeraet fuer Instrumenten-Kombination (Gateway) |
| 0x44 | Grundmodul V: uncodiert oder Codierung verloren |
| 0x4B | Interner Fehler im Grundmodul V: Checksum ROM |
| 0x31 | Wischerschalter (Potentiometer): Leitungsunterbrechung oder Kurzschluss gegen U-Batt |
| 0x32 | Wischerschalter (Potentiometer): Kurzschluss gegen Masse |
| 0x33 | Wischer: blockiert oder Rueckstellkontakt |
| 0x36 | Wischer: Relais oder Leitung fuer Wischer ein |
| 0x37 | Wischer: Relais fehlt oder Relais / Leitung fuer Wischerstufe 2 |
| 0x38 | Wischer: Pumpe fuer Scheibenwaschen oder Behaelter leer |
| 0x01 | Wischer: Sicherung fuer Pumpe, Innenlicht, Verbraucherabschaltung |
| 0x3A | Wischer: Relais Pumpe oder Leitung fuer Scheinwerferreinigung |
| 0x3B | Innenlicht: Kurzschluss |
| 0x48 | Innenlicht: Leitungsunterbrechung |
| 0x49 | Verbraucherabschaltung 2: Kurzschluss gegen U-Batt |
| 0x3c | Verbraucherabschaltung 2: Kurzschluss gegen Masse |
| 0x4A | Verbraucherabschaltung 1: Kurzschluss gegen Masse |
| 0x02 | Zentralverriegelung: Sicherung |
| 0x03 | Zentralverriegelung: Crash-Eingang dauernd aktiv |
| 0x45 | Zentralverriegelung: Schlosskontakt Fahrertuer |
| 0x46 | Zentralverriegelung: Schlosskontakt Beifahrertuer |
| 0x3D | Zentralverriegelung: Kurzschluss oder Leitungsunterbrechung bei Antrieb Heckklappe |
| 0x3F | Zentralverriegelung: Kurzschluss gegen Masse oder Leitungsunterbrechung bei Relais fuer Entriegeln Heckscheibe |
| 0x06 | Diebstahlwarnanlage: Sirene, Funkinnenraumschutz, Neigungsgeber oder Leitung STDWA Kurzschluss gegen U-Batt |
| 0x07 | Diebstahlwarnanlage: Sirene, Funkinnenraumschutz, Neigungsgeber oder Leitung STDWA Kurzschluss gegen Masse oder Leitungsunterbrechung |
| 0x41 | Diebstahlwarnanlage: Neigungsgeber |
| 0x42 | Diebstahlwarnanlage: Innenraumschutz |
| 0x43 | Diebstahlwarnanlage: Innenraumschutz hinten |
| 0x08 | Fensterheber: Sicherung |
| 0x09 | Fensterheber: Unterbrechung Motor oder Relais Fahrertuer |
| 0x0A | Fensterheber: Unterbrechung Motor oder Relais Beifahrertuer |
| 0x0D | Fensterheber: Unterbrechung Einklemmschutzleiste oder Denormierung/Fehler EKS-Elektronik Fahrertuer |
| 0x0E | Fensterheber: Unterbrechung Einklemmschutzleiste oder Denormierung/Fehler EKS-Elektronik Beifahrertuer |
| 0x0B | Fensterheber: Unterbrechung Motor oder Relais Fahrerseite hinten |
| 0x0C | Fensterheber: Unterbrechung Motor oder Relais Beifahrerseite hinten |
| 0x0F | Fensterheber: Unterbrechung Einklemmschutzleiste oder Denormierung/Fehler EKS-Elektronik Fahrerseite hinten |
| 0x10 | Fensterheber: Unterbrechung Einklemmschutzleiste oder Denormierung/Fehler EKS-Elektronik Beifahrerseite hinten |
| 0x4C | Beifahrerspiegel: Interner Fehler: Timer Watchdog |
| 0x4D | Beifahrerspiegel: Unterbrechung Heizung |
| 0x4E | Beifahrerspiegel: Kurzschluss Heizung |
| 0x4F | Beifahrerspiegel: Potentiometer Achse 1/3 |
| 0x50 | Beifahrerspiegel: Potentiometer Achse 2/4 |
| 0x51 | Beifahrerspiegel: Unterbrechung Motor Achse 1/3 |
| 0x52 | Beifahrerspiegel: Kurzschluss Motor Achse 1/3 |
| 0x53 | Beifahrerspiegel: Unterbrechung Motor Achse 2/4 |
| 0x54 | Beifahrerspiegel: Kurzschluss Motor Achse 2/4 |
| 0x55 | Beifahrerspiegel: Unterbrechung Motor Einklappen |
| 0x56 | Beifahrerspiegel: Kurzschluss Motor Einklappen |
| 0x5B | Fahrerspiegel: Interner Fehler: Timer Watchdog |
| 0x5C | Fahrerspiegel: Unterbrechung Heizung |
| 0x5D | Fahrerspiegel: Kurzschluss Heizung |
| 0x5E | Fahrerspiegel: Potentiometer Achse 1/3 |
| 0x5F | Fahrerspiegel: Potentiometer Achse 2/4 |
| 0x60 | Fahrerspiegel: Unterbrechung Motor Achse 1/3 |
| 0x61 | Fahrerspiegel: Kurzschluss Motor Achse 1/3 |
| 0x62 | Fahrerspiegel: Unterbrechung Motor Achse 2/4 |
| 0x63 | Fahrerspiegel: Kurzschluss Motor Achse 2/4 |
| 0x64 | Fahrerspiegel: Unterbrechung Motor Einklappen |
| 0x65 | Fahrerspiegel: Kurzschluss Motor Einklappen |
| 0x6A | keine Antwort Schalterblock |
| 0x6B | keine Antwort Beifahrerspiegel |
| 0x6C | keine Antwort Fahrerspiegel |
| 0x6D | Fensterheberschalter VL Signal ungültig |
| 0x6E | Fensterheberschalter VR Signal ungültig |
| 0x6F | Fensterheberschalter HL Signal ungültig |
| 0x70 | Fensterheberschalter HR Signal ungültig |
| 0x71 | Spiegelverstellschalter (Horizontal) Signal ungültig |
| 0x72 | Spiegelverstellschalter (Vertikal) Signal ungültig |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x80 | Alarmspeicher: Klemme R |
| 0x81 | Alarmspeicher: Tuerkontakt Fahrertuer |
| 0x82 | Alarmspeicher: Tuerkontakt Beifahrertuer |
| 0x83 | Alarmspeicher: Tuerkontakt Fahrerseite hinten / Verdeckklappe |
| 0x84 | Alarmspeicher: Tuerkontakt Beifahrerseite hinten |
| 0x85 | Alarmspeicher: Heckklappe |
| 0x86 | Alarmspeicher: Heckscheibe |
| 0x87 | Alarmspeicher: RDC |
| 0x88 | Alarmspeicher: Motorhaube |
| 0x89 | Alarmspeicher: Neigungsgeber |
| 0x8A | Alarmspeicher: Funkinnenraumschutz |
| 0x8B | Alarmspeicher: Funkinnenraumschutz hinten (E46/3) / Handschuhfach (E46/C) |
| 0x8C | Alarmspeicher: Reserve |
| 0x8D | Alarmspeicher: Schlosskontakt Fahrertuer |
| 0x8E | Alarmspeicher: Schlosskontakt Beifahrertuer |
| 0x8F | Alarmspeicher: Panik-Mode wurde ausgeloest |
| 0x98 | Beifahrerspiegel: Unterspannung SPM |
| 0x99 | Beifahrerspiegel: Überspannung SPM |
| 0x9A | Beifahrerspiegel: Unterspannung Spiegelheizung |
| 0x9B | Beifahrerspiegel: Übertemperatur Baustein Ud13 |
| 0x9C | Fahrerspiegel: Unterspannung SPM |
| 0x9D | Fahrerspiegel: Überspannung SPM |
| 0x9E | Fahrerspiegel: Unterspannung Spiegelheizung |
| 0x9F | Fahrerspiegel: Übertemperatur Baustein Ud13 |
| 0x90 | Batteriespannung: Unterbrechung |
| 0x91 | Crash: wurde ausgeloest |
| 0x92 | Wiederholsperre: Zentralverriegelung |
| 0x93 | Wiederholsperre: Entriegelung Heckklappe |
| 0x94 | Wiederholsperre: Entriegelung Heckscheibe |
| 0x95 | Wiederholsperre: Fensterheber |
| 0x97 | Wiederholsperre: Spiegelbeiklappen |
| 0xXY | unbekannter Info-Ort |

### IARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### BITS

| ZELLE | BYTE | MASK | VALUE | NAME | TEXT |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0x02 | 0x02 | SIB | Schalter Innenbeleuchtung |
| 2 | 0 | 0x04 | 0x04 | TOEHK | Taster Entriegeln Heckklappe |
| 3 | 0 | 0x08 | 0x08 | TZV | Taster Centerlock |
| 4 | 0 | 0x10 | 0x10 | TOEHS | Taster Entriegeln Heckscheibe |
| 5 | 0 | 0x20 | 0x20 | TOEHKI | Taster Entriegeln Heckklappe innen |
| 6 | 0 | 0x40 | 0x40 | HKK | Heckklappenkontakt |
| 7 | 0 | 0x80 | 0x80 | ERHK | Entriegeln Heckklappe |
| 9 | 1 | 0x02 | 0x02 | RSK | Rueckstellkontakt Wischer |
| 10 | 1 | 0x04 | 0x04 | SFFA | Schalter FH Fahrer auf |
| 11 | 1 | 0x08 | 0x08 | SFFZ | Schalter FH Fahrer zu |
| 12 | 1 | 0x10 | 0x10 | SFBA | Schalter FH Beifahrer auf |
| 13 | 1 | 0x20 | 0x20 | SFBZ | Schalter FH Beifahrer zu |
| 14 | 1 | 0x40 | 0x40 | SW2 | Wischerschalter 2 |
| 15 | 1 | 0x80 | 0x80 | KISI | Kindersicherung FH hinten |
| 17 | 2 | 0x02 | 0x02 | MHK | Motor-Hauben-Kontakt |
| 18 | 2 | 0x04 | 0x04 | HFK | Handschuhfach-Kontakt |
| 19 | 2 | 0x08 | 0x08 | HSK | Heck-Scheiben-Kontakt |
| 20 | 2 | 0x10 | 0x10 | INRS | Innenraumschutz |
| 21 | 2 | 0x20 | 0x20 | NG | Neigungsgebereingang |
| 22 | 2 | 0x40 | 0x40 | INRS2 | Innenraumschutz 2 |
| 23 | 2 | 0x80 | 0x80 | KL_R_HW | Klemme R (Hardware) |
| 25 | 3 | 0x02 | 0x02 | REE1 | Reserve Eingang 1 |
| 26 | 3 | 0x04 | 0x04 | REE3 | Reserve Eingang 3 |
| 27 | 3 | 0x08 | 0x08 | CS | Crash-Eingang |
| 28 | 3 | 0x10 | 0x10 | KL30BTS | Versorgung fuer IB, WP, MERHK und VA |
| 29 | 3 | 0x20 | 0x20 | KL30ZV | Versorgung fuer Zentral-Verriegelung |
| 30 | 3 | 0x40 | 0x40 | KL30FHV | Versorgung Klemme 30 FH vorne |
| 32 | 4 | 0x01 | 0x01 | SFFHA | Schalter FH Fahrer hinten auf |
| 33 | 4 | 0x02 | 0x02 | SFFHZ | Schalter FH Fahrer hinten zu |
| 34 | 4 | 0x04 | 0x04 | SFBHA | Schalter FH Beifahrer hinten auf |
| 35 | 4 | 0x08 | 0x08 | SFBHZ | Schalter FH Beifahrer hinten zu |
| 36 | 4 | 0x10 | 0x10 | SFFHA2 | Schalter 2 FH Fahrer hinten auf |
| 37 | 4 | 0x20 | 0x20 | SFFHZ2 | Schalter 2 FH Fahrer hinten zu |
| 38 | 4 | 0x40 | 0x40 | SFBHA2 | Schalter 2 FH Beifahrer hinten auf |
| 39 | 4 | 0x80 | 0x80 | SFBHZ2 | Schalter 2 FH Beifahrer hinten zu |
| 40 | 5 | 0x01 | 0x01 | REE2 | Reserve Eingang 2 |
| 41 | 5 | 0x02 | 0x02 | VRHK | Verriegeln Heckklappe |
| 42 | 5 | 0x04 | 0x04 | SWA | Schalter Waschen |
| 43 | 5 | 0x08 | 0x08 | SW1 | Schalter Wischerstufe 1 |
| 48 | 6 | 0x01 | 0x01 | TKFT | Tuerkontakt Fahrertuer |
| 49 | 6 | 0x02 | 0x02 | TKBT | Tuerkontakt Beifahrertuer |
| 50 | 6 | 0x04 | 0x04 | TKFH | Tuerkontakt Fahrertuer hinten |
| 51 | 6 | 0x08 | 0x08 | TKBH | Tuerkontakt Beifahrer hinten |
| 52 | 6 | 0x10 | 0x10 | VRFT | Verriegeln Fahrertuer |
| 53 | 6 | 0x20 | 0x20 | ERFT | Entriegeln Fahrertuer |
| 54 | 6 | 0x40 | 0x40 | VRBT | Verriegeln Beifahrertuer |
| 55 | 6 | 0x80 | 0x80 | ERBT | Entriegeln Beifahrertuer |
| 65 | 8 | 0x02 | 0x02 | MFFHA | Motor FH Fahrer hinten auf |
| 66 | 8 | 0x04 | 0x04 | MFFHZ | Motor FH Fahrer hinten zu |
| 67 | 8 | 0x08 | 0x08 | MFBHZ | Motor FH Beifahrer hinten zu |
| 68 | 8 | 0x10 | 0x10 | MFBHA | Motor FH Beifahrer hinten auf |
| 69 | 8 | 0x20 | 0x20 | MER | Motor Entriegeln |
| 70 | 8 | 0x40 | 0x40 | MZS | Motor Sichern |
| 71 | 8 | 0x80 | 0x80 | MVRFT | Motor Verriegeln Fahrertuer |
| 72 | 9 | 0x01 | 0x01 | REA3 | Reserve Ausgang 3 |
| 73 | 9 | 0x02 | 0x02 | WI1 | Wischerrelais Stufe 1 |
| 74 | 9 | 0x04 | 0x04 | WI2 | Wischerrelais Stufe 2 |
| 75 | 9 | 0x08 | 0x08 | SRA | Relais Scheinwerferreinigung |
| 76 | 9 | 0x10 | 0x10 | RERHS | Relais Entriegeln Heckscheibe |
| 77 | 9 | 0x20 | 0x20 | SIRENE | Sirene, bzw. Alarmhorn |
| 78 | 9 | 0x40 | 0x40 | DWAL | DWA-LED |
| 79 | 9 | 0x80 | 0x80 | MVR | Motor Verriegeln |
| 82 | 10 | 0x04 | 0x04 | MFFA | Motor FH Fahrer auf |
| 83 | 10 | 0x08 | 0x08 | MFFZ | Motor FH Fahrer zu |
| 84 | 10 | 0x10 | 0x10 | MFBA | Motor FH Beifahrer auf |
| 85 | 10 | 0x20 | 0x20 | MFBZ | Motor FH Beifahrer zu |
| 89 | 11 | 0x02 | 0x02 | STDWA | Status DWA |
| 90 | 11 | 0x04 | 0x04 | ENEKS | EKS-Schwelle aktiv |
| 91 | 11 | 0x08 | 0x08 | ENPU | Enable Pull Up |
| 92 | 11 | 0x10 | 0x10 | REA1 | Reserve Ausgang 1 |
| 93 | 11 | 0x20 | 0x20 | REA2 | Reserve Ausgang 2 |
| 95 | 11 | 0x80 | 0x80 | VA2 | Verbraucherabschaltung 2 EIN |
| 96 | 12 | 0x01 | 0x01 | IB | Innenbeleuchtung |
| 97 | 12 | 0x02 | 0x02 | VA | Verbraucherabschaltung EIN |
| 98 | 12 | 0x04 | 0x04 | WP | Waschpumpe |
| 99 | 12 | 0x08 | 0x08 | MERHK | Motor Entriegeln Heckklappe |
| 136 | 17 | 0x01 | 0x01 | SEND_L | Sender-Nummer (Low-Bit) |
| 137 | 17 | 0x02 | 0x02 | SEND_H | Sender-Nummer (High-Bit) |
| 138 | 17 | 0x04 | 0x04 | FZVSIG | Funksignal empfangen |
| 139 | 17 | 0x08 | 0x08 | FZVKEY | Funkschluesselsignale empfangen |
| 140 | 17 | 0x10 | 0x10 | TASTE1 | Fernbedienung Taste 1 betaetigt |
| 141 | 17 | 0x20 | 0x20 | TASTE2 | Fernbedienung Taste 2 betaetigt |
| 142 | 17 | 0x40 | 0x40 | TASTE3 | Fernbedienung Taste 3 betaetigt |
| 143 | 17 | 0x80 | 0x80 | FUINIT | Initialisierung Funkschluessel moeglich |
| 144 | 18 | 0x01 | 0x01 | LOBAT1 | Schluessel Sender 1 Batterie schwach |
| 145 | 18 | 0x02 | 0x02 | LOBAT2 | Schluessel Sender 2 Batterie schwach |
| 146 | 18 | 0x04 | 0x04 | LOBAT3 | Schluessel Sender 3 Batterie schwach |
| 147 | 18 | 0x08 | 0x08 | LOBAT4 | Schluessel Sender 4 Batterie schwach |
| 148 | 18 | 0x10 | 0x10 | FSIB | FS IB-Befehl |
| 149 | 18 | 0x20 | 0x20 | FSAHK | Heckklappentaste Entriegeln Heckklappe |
| 150 | 18 | 0x40 | 0x40 | ZV1FS | ZV-Befehl entriegeln |
| 151 | 18 | 0x80 | 0x80 | ZV0FS | ZV-Befehl verriegeln |
| 43 | 5 | 0x08 | 0x08 | SW1_2 | Schalter Wischerstufe 1 + 2 |
| 73 | 9 | 0x02 | 0x02 | WI1_2 | Wischerrelais Stufe 1 + 2 |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |
