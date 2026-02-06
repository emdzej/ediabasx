# ZKE6.PRG

## General

|  |  |
| --- | --- |
| File | ZKE6.PRG |
| Type | PRG |
| Jobs | 16 |
| Tables | 9 |
| Origin | BMW TI-431 Krueger |
| Revision | 1.0 |
| Author | Krueger TI-433, Crichton TI-435 |
| ECU Comment | Ansteuern nur bei entsichertem Fahrzeug! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentrale Karosserie-Elektronik VI fuer R40/R41 |  |  |
| ORIGIN | string | BMW TI-431 Krueger |  |  |
| REVISION | string | 1.0 |  |  |
| AUTHOR | string | Krueger TI-433, Crichton TI-435 |  |  |
| COMMENT | string | Ansteuern nur bei entsichertem Fahrzeug! |  |  |
| PACKAGE | string | 0.05 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

_No arguments._

### INFO

Information SGBD

_No arguments._

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

Fehlerspeicher lesen DS2-Low-Konzept mit Abweichungen Sonderfall: externer und interner Fehlerspeicher

_No arguments._

### FS_LOESCHEN

Alle Fehlerspeicher loeschen

_No arguments._

### diagnose_start

Start der Diagnose

_No arguments._

### reset

Grundeinstellung nach Diagnose

_No arguments._

### diagnose_restart

Start der Diagnose

_No arguments._

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### STATUS_DIGITAL

Status der Digitalsignale des GM VI (Ein-/Ausgaenge) Der Wertebereich ist bei fast allen Results: Bereich: 0, wenn FALSE / 1, wenn TRUE Andernfalls ist der Bereich gezielt spezifiziert.

_No arguments._

### STATUS_ANALOG

Status der Analogsignale des GM VI

_No arguments._

### STEUERN_DIGITAL

Ansteuern eines digitalen Ein- oder Ausgangs v. GM5 ! erlaubte Namen des Arguments 'ORT' ueber Tool XTRACT.exe ! Aufruf 'XTRACT [-F] ZKE6.prg'

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITSAUS NAME TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### SPEICHER_LESEN

Lesen des internen Speichers der ZKE VI Als Argumente werden die Anzahl und die Adresse der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | 1 - 32 |
| ADRESSE | int | 0x0000 - 0xFFFF |

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
| 0x55 | BHTC |
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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x06 | Interner Fehler im Grundmodul VI: Relais Treiber Fehler |
| 0x07 | Interner Fehler im Grundmodul VI: Relais Allgemein Fehler |
| 0x08 | Interner Fehler im Grundmodul VI: Relais  Fehler |
| 0x09 | Interner Fehler im Grundmodul VI: Leistungsrelais Fehler |
| 0x0A | Interner Fehler im Grundmodul VI: Relais Fensterhebermotor Fahrertuer Fehler |
| 0x0B | Interner Fehler im Grundmodul VI: Relais Fensterhebermotor Beifahrertuer Fehler |
| 0x0C | Interner Fehler im Grundmodul VI: Relais Fensterhebermotor Tuer hinten Rechts Fehler |
| 0x0D | Interner Fehler im Grundmodul VI: Relais Fensterhebermotor Tuer hinten Links Fehler |
| 0x80 | Fensterheber Fahrertuer Ausgang |
| 0x81 | Fensterheber Beifahrertuer Ausgang |
| 0x82 | Fensterheber Tuer Rechts hinten Ausgang |
| 0x83 | Fensterheber Tuer Links hinten Ausgang |
| 0xA2 | Fensterheber Heck Sicherung defekt |
| 0xA3 | Fensterheber Front Sicherung defekt |
| 0x84 | Wischer Front Ein Fehler |
| 0x8C | Wischer Front Aus Fehler |
| 0x85 | Wischer Front Geschwindigkeit Ein Fehler |
| 0x89 | Wischer Heck Ein Fehler |
| 0x8D | Wischer Front Geschwindigkeit Aus |
| 0x91 | Wischer Heck Aus Fehler |
| 0x94 | Wischer Front Feedback Fehler |
| 0x95 | Wischer Front blockiert |
| 0x96 | Wischer Heck blockiert |
| 0x9F | Wischer Front Intervall Potentiometer Masseschluss |
| 0xA0 | Wischer Front Intervall Potentiometer Kontakte offen |
| 0x86 | Lueftung Frischluft Ein Fehler |
| 0x87 | Umluft Ein Fehler |
| 0x8A | Lueftung Warmluft Ein Fehler |
| 0x8B | Heckscheibenheizung Ein Fehler |
| 0x8E | Lueftung Frischluft Aus |
| 0x8F | Umluft Aus |
| 0x92 | Lueftung Warmluft Aus Fehler |
| 0x93 | Heckscheibenheizung Aus Fehler |
| 0xA6 | Klimaanlage Kompressor defekt |
| 0x9A | Busfehler Fenster |
| 0xA4 | Zentralverriegelung Sicherung defekt |
| 0x9B | TRAP-Sensor Fahrertuer Fehler |
| 0x9C | TRAP-Sensor Beifahrertuer Fehler |
| 0x9D | TRAP-Sensor Tuer Links hinten Fehler |
| 0x9E | TRAP-Sensor Tuer Rechts hinten Fehler |
| 0xA1 | Regensensor Fehler |
| 0x88 | Hupe oder Waschduesen Ein Fehler |
| 0x90 | Hupe oder Waschduesen Aus Fehler |
| 0xA5 | Lampen Sicherung defekt |
| 0xA8 | Thermistor Checksumme falsch |
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
| 0x90 | Batteriespannung: Unterbrechung |
| 0x91 | Crash: wurde ausgeloest |
| 0x92 | Wiederholsperre: Zentralverriegelung |
| 0x93 | Wiederholsperre: Entriegelung Heckklappe |
| 0x94 | Wiederholsperre: Entriegelung Heckscheibe |
| 0x95 | Wiederholsperre: Fensterheber |
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
| 0 | 1 | 0x01 | 0x01 | ZVA | Schluesselschalter Auf |
| 1 | 1 | 0x02 | 0x02 | ZVZ | Schluesselschalter Zu |
| 2 | 1 | 0x04 | 0x04 | TFA | Tuer Fahrer Auf |
| 3 | 1 | 0x08 | 0x08 | TBA | Tuer Beifahrer Auf |
| 4 | 1 | 0x10 | 0x10 | THRA | Tuer Rechts hinten auf |
| 5 | 1 | 0x20 | 0x20 | THLA | Tuer Links hinten auf |
| 6 | 1 | 0x40 | 0x40 | SFHFZ | Schalter Fensterheber Fahrer zu |
| 7 | 1 | 0x80 | 0x80 | SFHFA | Schalter Fensterheber Fahrer auf |
| 0 | 2 | 0x01 | 0x01 | SFHBZ | Schalter Fensterheber Beifahrer zu |
| 1 | 2 | 0x02 | 0x02 | SFHBA | Schalter Fensterheber Beifahrer auf |
| 2 | 2 | 0x04 | 0x04 | LVS | Luftverschmutzungssensor |
| 3 | 2 | 0x08 | 0x08 | WPH | Waschmittelpumpe Heckwischer |
| 4 | 2 | 0x10 | 0x10 | STFHH | Sicherungstest Fensterheber Heck |
| 5 | 2 | 0x20 | 0x20 | STFHF | Sicherungstest Fensterheber Front |
| 6 | 2 | 0x40 | 0x40 | STZV | Sicherungstest ZV |
| 7 | 2 | 0x80 | 0x80 | STIB | Sicherungstest Innenbeleuchtung |
| 0 | 3 | 0x01 | 0x01 | SFHHRZ | Schalter Fensterheber Heck Rechts zu |
| 1 | 3 | 0x02 | 0x02 | SFHHRA | Schalter Fensterheber Heck Rechts auf |
| 2 | 3 | 0x04 | 0x04 | SFHHLZ | Schalter Fensterheber Heck Links zu |
| 3 | 3 | 0x08 | 0x08 | SFHHLA | Schalter Fensterheber Heck Links auf |
| 4 | 3 | 0x10 | 0x10 | RFHHRZ | Relais Fensterheber Heck Rechts zu |
| 5 | 3 | 0x20 | 0x20 | RFHHRA | Relais Fensterheber Heck Rechts auf |
| 6 | 3 | 0x40 | 0x40 | RFHHLZ | Relais Fensterheber Heck Links zu |
| 7 | 3 | 0x80 | 0x80 | RFHHLA | Relais Fensterheber Heck Links auf |
| 0 | 4 | 0x01 | 0x01 | ESFW | Wischer Endschalter Stopposition Front |
| 1 | 4 | 0x02 | 0x02 | ESHW | Wischer Endschalter Stopposition Heck |
| 2 | 4 | 0x04 | 0x04 | SWH | Wischermotor Schalter Heck |
| 3 | 4 | 0x08 | 0x08 | SAC | Schalter Klimaanlage |
| 4 | 4 | 0x10 | 0x10 | SUML | Schalter Umluftsteuerung |
| 5 | 4 | 0x20 | 0x20 | SS1 | Schalter1 Lenksaeule |
| 6 | 4 | 0x40 | 0x40 | SS2 | Schalter2 Lenksaeule |
| 0 | 5 | 0x01 | 0x01 | SHSH | Schalter Heckscheibenheizung |
| 1 | 5 | 0x02 | 0x02 | SZVPZ | Schalter ZV Panikschliessung zu |
| 2 | 5 | 0x04 | 0x04 | SZVPA | Schalter ZV Panikschliessung auf |
| 3 | 5 | 0x08 | 0x08 | SKS | Schalter Kofferraumschloss |
| 4 | 5 | 0x01 | 0x01 | SKA | Endschalter Kofferraum auf |
| 5 | 5 | 0x02 | 0x02 | SIB | Schalter Innenraumbeleuchtung |
| 6 | 5 | 0x04 | 0x04 | SMA | Endschalter Motorhaube auf |
| 0 | 6 | 0x01 | 0x01 | SKVA | Schalter Kofferraum Verriegelung auf |
| 1 | 6 | 0x02 | 0x02 | SKVHA | Schalter Kofferraum Scheibe Verriegelung auf |
| 2 | 6 | 0x04 | 0x04 | ERS1 | Ersatz 1 nicht benutzt |
| 4 | 6 | 0x10 | 0x10 | ERS2 | Ersatz 2 nicht benutzt |
| 0 | 7 | 0x01 | 0x01 | SWPFA | Schalter Waschmittelpumpe Front aktiv |
| 1 | 7 | 0x02 | 0x02 | FZVSIG | Funksignal empfangen |
| 2 | 7 | 0x04 | 0x04 | KIPPE | Kippsensor |
| 3 | 7 | 0x08 | 0x08 | POS1 | Zuendschluessel Position 1 |
| 4 | 7 | 0x10 | 0x10 | CRASH | Crashunterbrechung Benzinpumpe |
| 5 | 7 | 0x20 | 0x20 | KLES | Kuehlerluefter Ein Sensor |
| 6 | 7 | 0x40 | 0x40 | HIGH1 | Immer logisch 1 |
| 0 | 8 | 0x01 | 0x01 | RSF | Relais Kontakt Schloss Fahrer |
| 1 | 8 | 0x02 | 0x02 | RFHBZ | Relais Kontakt Fensterheber Beifahrer zu |
| 2 | 8 | 0x04 | 0x04 | RFHFZ | Relais Kontakt Fensterheber Fahrer zu |
| 3 | 8 | 0x08 | 0x08 | RFHBA | Relais Kontakt Fensterheber Beifahrer auf |
| 4 | 8 | 0x10 | 0x10 | RFHFA | Relais Kontakt Fensterheber Fahrer auf |
| 5 | 8 | 0x20 | 0x20 | RGZ | Relais Kontakt Gesamtfzg zu |
| 6 | 8 | 0x40 | 0x40 | RZVG | Relais Kontakt ZV +12V |
| 7 | 8 | 0x80 | 0x80 | RZVPZ | Relais Kontakt ZV Panikschliessung zu |
| 0 | 9 | 0x01 | 0x01 | IBD | Diagnose Innenbeleuchtung - nicht realisiert |
| 2 | 9 | 0x04 | 0x04 | KLD | Diagnose Kartenlampe - nicht realisiert |
| 5 | 9 | 0x20 | 0x20 | TANK | Tank u. Kofferraum Diagnose |
| 0 | 10 | 0x01 | 0x01 | MFHFA | Fahrertuermodul Schalter Fensterheber Fahrer auf |
| 1 | 10 | 0x02 | 0x02 | MFHFZ | Fahrertuermodul Schalter Fensterheber Fahrer zu |
| 2 | 10 | 0x04 | 0x04 | MFHFU | Fahrertuermodul Schalter Fensterheber Fahrer Automatik |
| 3 | 10 | 0x08 | 0x08 | MFHBA | Fahrertuermodul Schalter Fensterheber Beifahrer auf |
| 4 | 10 | 0x10 | 0x10 | MFHBZ | Fahrertuermodul Schalter Fensterheber Beifahrer zu |
| 5 | 10 | 0x20 | 0x20 | MFHBU | Fahrertuermodul Schalter Fensterheber Beifahrer Automatik |
| 0 | 11 | 0x01 | 0x01 | MFHHRA | Fahrertuermodul Schalter Fensterheber Rechts hinten auf |
| 1 | 11 | 0x02 | 0x02 | MFHHRZ | Fahrertuermodul Schalter Fensterheber Rechts hinten zu |
| 2 | 11 | 0x04 | 0x04 | MFHHRU | Fahrertuermodul Schalter Fensterheber Rechts hinten Automatik |
| 3 | 11 | 0x08 | 0x08 | MFHHLA | Fahrertuermodul Schalter Fensterheber Links hinten auf |
| 4 | 11 | 0x10 | 0x10 | MFHHLZ | Fahrertuermodul Schalter Fensterheber Links hinten zu |
| 5 | 11 | 0x20 | 0x20 | MFHHLU | Fahrertuermodul Schalter Fensterheber Links hinten Automaik |
| 6 | 11 | 0x40 | 0x40 | MFHHSP | Fahrertuermodul Schalter Fensterheber hinten gesperrt |
| 0 | 17 | 0x01 | 0x01 | FSHKA | Heckklappe oeffnen mit Funksignal |
| 1 | 17 | 0x02 | 0x02 | SCHLO | Zuendschluessel im Schloss |
| 2 | 17 | 0x04 | 0x04 | IGN | Status Zuendung |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |

### BITSAUS

| ZELLE | BYTE | MASK | VALUE | NAME | TEXT |
| --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0x01 | 0x01 | BBS | Batteriegepufferte Hupe |
| 1 | 1 | 0x02 | 0x02 | SFBZ | Schalter Fensterheber Beifahrer zu |
| 2 | 1 | 0x04 | 0x04 | SFBA | Schalter Fensterheber Beifahrer auf |
| 3 | 1 | 0x08 | 0x08 | SFLHA | Schalter Fensterheber Links Hinten auf |
| 4 | 1 | 0x10 | 0x10 | SFRHA | Schalter Fensterheber Rechts Hinten auf |
| 5 | 1 | 0x20 | 0x20 | SFRHZ | Schalter Fensterheber Rechts Hinten zu |
| 6 | 1 | 0x40 | 0x40 | SFLHZ | Schalter Fensterheber Links Hinten zu |
| 7 | 1 | 0x80 | 0x80 | ACLED | LED Klimaanlage |
| 0 | 2 | 0x01 | 0x01 | ERFT | Entriegeln Fahrertuer |
| 1 | 2 | 0x02 | 0x02 | ERFZG | Entriegeln restliches Fahrzeug |
| 2 | 2 | 0x04 | 0x04 | EGFZG | Entriegeln Gesamtfahrzeug |
| 3 | 2 | 0x08 | 0x08 | SFFZ | Schalter Fensterheber Fahrer zu |
| 4 | 2 | 0x10 | 0x10 | SFFA | Schalter Fensterheber Fahrer auf |
| 5 | 2 | 0x20 | 0x20 | PANIK | Panikschliessung |
| 6 | 2 | 0x40 | 0x40 | HSHLED | LED Heckscheibenheizung |
| 7 | 2 | 0x80 | 0x80 | UMLLED | LED Umluft |
| 0 | 3 | 0x01 | 0x01 | 5VFEED | Geschaltete 5V Quelle |
| 1 | 3 | 0x02 | 0x02 | IB | Innenbeleuchtung |
| 2 | 3 | 0x04 | 0x04 | BBSE | BBS sichern/entsichern |
| 3 | 3 | 0x08 | 0x08 | KL | Kartenbeleuchtung |
| 4 | 3 | 0x10 | 0x10 | ALVER | Alarm Spannungsversorgung |
| 5 | 3 | 0x20 | 0x20 | 12VFEE | Geschaltete 12V Quelle |
| 3 | 4 | 0x08 | 0x08 | FSAHK | Heckklappentaste Entriegeln Heckklappe |
| 4 | 4 | 0x10 | 0x10 | ADMUX | A/D Auswahl |
| 6 | 4 | 0x40 | 0x40 | FSAHS | Heckklappentaste Entriegeln Heckklappenscheibe |
| 7 | 4 | 0x80 | 0x80 | ALLED | Alarm LED |
| 0 | 5 | 0x01 | 0x01 | W1 | Frontwischer ein Geschwindigkeit 1 |
| 1 | 5 | 0x02 | 0x02 | W2 | Frontwischer ein Geschwindigkeit 2 |
| 2 | 5 | 0x04 | 0x04 | ZULUFT | Luefter Frischluft |
| 3 | 5 | 0x08 | 0x08 | UMLUFT | Luefter Umluft |
| 4 | 5 | 0x10 | 0x10 | HSWR | Hupe und Scheinwerferreinigung |
| 5 | 5 | 0x20 | 0x20 | HW | Heckscheibenrelais |
| 6 | 5 | 0x40 | 0x40 | HZG | Luefter Heizungrelais |
| 7 | 5 | 0x80 | 0x80 | HSH | Heckscheibenheizungrelais |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |
