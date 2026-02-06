# SPM46FT.prg

## General

|  |  |
| --- | --- |
| File | SPM46FT.prg |
| Type | PRG |
| Jobs | 16 |
| Tables | 9 |
| Origin | BMW EI-61 King |
| Revision | 1.00 |
| Author | BMW TI-433 Teepe, BMW TI-433 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Spiegel-Memory E46 Fahrertuere |  |  |
| ORIGIN | string | BMW EI-61 King |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TI-433 Teepe, BMW TI-433 Drexel |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.01 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

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

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### IS_LESEN

Infospeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### STATUS_LESEN

Auslesen der IO-Stati des Steuergeraetes Der Wertebereich fuer digitale Results: Bereich: 0, wenn FALSE / 1, wenn TRUE

_No arguments._

### STEUERN_DIGITAL

Ansteuern von Funktionen des Steuergeraetes

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | moeglich sind folgende Argumente, Liste: 'SPIEGEL_AUS' = Spiegelverstellung aus 'SPIEGEL_RECHTS' = Spiegelverstellung rechts 'SPIEGEL_LINKS ' = Spiegelverstellung links 'SPIEGEL_AUF' = Spiegelverstellung aufwaerts 'SPIEGEL_AB' = Spiegelverstellung abwaerts 'AUSKLAPPEN' = Spiegel ausklappen 'EINKLAPPEN' = Spiegel einklappen 'MEM1_ANFAHREN' = Memoryposition 1 anfahren 'MEM2_ANFAHREN' = Memoryposition 2 anfahren 'MEM3_ANFAHREN' = Memoryposition 3 anfahren 'MEM1_SPEICHERN' = Memoryposition 1 speichern 'MEM2_SPEICHERN' = Memoryposition 2 speichern 'MEM3_SPEICHERN' = Memoryposition 3 speichern 'FUNKSCHLUESSEL' = Funkschluesselmeldung, Achtung Schluesselnummer erforderlich 'FAHRERTUER_AUF' = Fahrertuer ist offen 'FAHRERTUER_ZU' = Fahrertuer ist geschlossen 'KOMFORTSCHL'   = Komforschliessen ausloesen 'HEIZUNG_EIN'   = Spiegelheizung fuer 2 Sec ansteuern 'RFSI_EIN'      = Rueckfahrsignal ein 'RFSI_AUS'      = Rueckfahrsignal aus 'SELBSTTEST' = Selbsttest ausloesen: alle Mem-Positonen anfahren, Spiegel bei- und abklappen, Heizung fuer 1,5 sec aktivieren |
| ORT2 | int | 'FUNKSCHL_NR' = Nummer des Funkschluessel als zweites Argument bei Argument 1 = Funkschluessel |

### CODIERUNG_LESEN

Auslesen der Codierung des Steuergeraetes Der Wertebereich fuer digitale Results: Bereich: 0, wenn FALSE / 1, wenn TRUE

_No arguments._

### SPEICHER_LESEN

Ansteuern von Funktionen des Steuergeraetes

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL_BYTES | int | Anzahl Bytes >=1 und <=32 |
| ADRESSE | long | Adresse High Bytes 0x0000 bis 0xFFFF |

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
| 0x67 | Gentex GmbH |
| 0x68 | Atena GmbH |
| 0x69 | Magna-Donelly |
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

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0x?? | unbekannte Fehlerart |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0x?? | unbekannte Fehlerart |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x001 | Timer Watchdog |
| 0x002 | EEPROM |
| 0x004 | Spiegelverstellschalter, Unterbrechung |
| 0x005 | Spiegelheizung Unterbrechung |
| 0x006 | Spiegelheizung Kurzschluss |
| 0x007 | Spiegelmotor, Potentiometer Vertikal |
| 0x008 | Spiegelmotor, Potentiometer Horizontal |
| 0x009 | Spiegelmotor Vertikal Unterbrechung |
| 0x00A | Spiegelmotor Vertikal Kurzschluss |
| 0x00B | Spiegelmotor Horizontal Unterbrechung |
| 0x00C | Spiegelmotor Horizontal Kurzschluss |
| 0x00D | Spiegelmotor Einklappen Unterbrechung |
| 0x00E | Spiegelmotor Einklappen Kurzschluss |
| 0x??? | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x000 | Unterspannung ( U < 8,5 Volt ) |
| 0x001 | Ueberspannung ( U > 16 Volt ) |
| 0x002 | Unterspannung Spiegelheizung |
| 0x003 | Wiederholsperre BK |
| 0x004 | Spiegelmotor, Potentiometer Plausibilitaet |
| 0x??? | unbekannter Fehlerort |

### STEUERN

| AUSGANG | BYTE | WERT |
| --- | --- | --- |
| SPIEGEL_AUS | 0x01 | 0x00 |
| SPIEGEL_RECHTS | 0x01 | 0x01 |
| SPIEGEL_LINKS | 0x01 | 0x02 |
| SPIEGEL_AUF | 0x01 | 0x03 |
| SPIEGEL_AB | 0x01 | 0x04 |
| AUSKLAPPEN | 0x01 | 0x05 |
| EINKLAPPEN | 0x01 | 0x06 |
| MEM1_ANFAHREN | 0x01 | 0x07 |
| MEM2_ANFAHREN | 0x01 | 0x08 |
| MEM3_ANFAHREN | 0x01 | 0x09 |
| MEM1_SPEICHERN | 0x01 | 0x0A |
| MEM2_SPEICHERN | 0x01 | 0x0B |
| MEM3_SPEICHERN | 0x01 | 0x0C |
| FUNKSCHLUESSEL | 0x01 | 0x0D |
| FAHRERTUER_AUF | 0x01 | 0x0E |
| FAHRERTUER_ZU | 0x01 | 0x0F |
| KOMFORTSCHL | 0x01 | 0x10 |
| HEIZUNG_EIN | 0x01 | 0x11 |
| RFSI_EIN | 0x01 | 0x12 |
| RFSI_AUS | 0x01 | 0x13 |
| SELBSTTEST | 0x01 | 0x1E |
| XYZ | 0x01 | 0xFF |
