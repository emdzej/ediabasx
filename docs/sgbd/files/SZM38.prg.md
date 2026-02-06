# SZM38.prg

## General

|  |  |
| --- | --- |
| File | SZM38.prg |
| Type | PRG |
| Jobs | 26 |
| Tables | 12 |
| Origin | BMW TI-433 Zhang |
| Revision | 1.06 |
| Author | BMW TI-430 Drexel, ESG TI-430 T.Müller |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Schaltzentrum Mittelkonsole E38 |  |  |
| ORIGIN | string | BMW TI-433 Zhang |  |  |
| REVISION | string | 1.06 |  |  |
| AUTHOR | string | BMW TI-430 Drexel, ESG TI-430 T.Müller |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
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

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### IS_LESEN

Infospeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden Beenden von Ansteuerbefehlen

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

### STATUS_IO

Status lesen

_No arguments._

### STATUS_INTERN

Auslesen der internen Zustaende

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers Als Argumente werden die Adresse, die Anzahl der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0000 - 0x3DFE |
| ANZAHL | int | 1 - 16 |

### SPEICHER_SCHREIBEN

Beschreiben des internen Speichers Als Argumente werden die Adresse, und das Datenbyte uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0000 - 0x02FF |
| BYTE | int | 0-255 bzw. 0x00-0xFF |

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### STEUERN_SITZHEIZUNG_STUFE

Ansteuern der Sitzheizungsstufe fuer links und rechts Stufe 0 : Heizung aus Stufe 1 : Heizung maximale Leistung Stufe 2 : Heizung mittlere Leistung Stufe 3 : Heizung minimale Leistung Es ist moeglich auch ein einzelnes Argument zu schreiben.

| Name | Type | Description |
| --- | --- | --- |
| LINKS_STUFE | int | Stufe 0,1,2,3 |
| RECHTS_STUFE | int | Stufe 0,1,2,3 |

### STEUERN_SITZHEIZUNG

Ansteuern des Sitzheizungsausgangs fuer links und rechts Es ist moeglich auch ein einzelnes Argument zu schreiben.

| Name | Type | Description |
| --- | --- | --- |
| LINKS | string | 'EIN','AUS','1','0' |
| RECHTS | string | 'EIN','AUS','1','0' |

### STEUERN_AKTIVSITZ

Ansteuern des Aktivsitzes fuer links und rechts. Jeder Aufruf schaltet den Aktivsitz um (ein bzw. aus). Es ist moeglich auch ein einzelnes Argument zu schreiben.

| Name | Type | Description |
| --- | --- | --- |
| LINKS | string | 'AKTIVIEREN','1' |
| RECHTS | string | 'AKTIVIEREN','1' |

### STEUERN_SONNENROLLO_TASTER

Ansteuern des Sonnenrollo

| Name | Type | Description |
| --- | --- | --- |
| TASTER | string | 'EIN','AUS','TIP','1','0' 'EIN','1' : Taste wird gedrueckt gehalten 'AUS','0' : Taste wird nicht betaetigt 'TIP'     : Taste wird kurz betaetigt |

### STEUERN_SONNENROLLO_MOTOR

Ansteuern des Sonnenrollomotors Jeder Aufruf aendert die Richtung der Laufrichtung nach erfolgtem Rolloanschlag ( Oben, Unten ). Nach beendeter Diagnose geht das Rollo nicht in seinen Ausgangszustand zurueck.

_No arguments._

### STEUERN_FUNKTIONSBELEUCHTUNG

Ansteuern des Funktionsbeleuchtung

| Name | Type | Description |
| --- | --- | --- |
| BELEUCHTUNG | string | 'EIN','AUS','1','0' |

### STEUERN_BELEUCHTUNG

Ansteuern des Beleuchtung Klemme 58g

| Name | Type | Description |
| --- | --- | --- |
| BELEUCHTUNG | string | 'EIN','AUS','1','0' |

### STEUERN_KLEMMENSTATUS

Vorgabe des Klemmenstatus Es muessen immer alle drei Argumente uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| KLEMME_R | string | 'EIN','AUS','1','0' |
| KLEMME_15 | string | 'EIN','AUS','1','0' |
| KLEMME_50 | string | 'EIN','AUS','1','0' |

### IDENT_SCHREIBEN

Identdaten schreiben fuer SZM E38

| Name | Type | Description |
| --- | --- | --- |
| DATEN | binary | Identdaten DB0-DB10 |

### CODIERUNG_SCHREIBEN

Codierdaten schreiben fuer SZM E38

| Name | Type | Description |
| --- | --- | --- |
| DATEN | binary | Codierdaten DB0-DB12 |

### BUGFIX_SITZHEIZUNG

Identdaten lesen und ggf. Speicher schreiben

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
| 0x70 | Koyo Steering Europe |
| 0x71 | NSI B.V |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_FEHLERANZAHL |
| 0x01 | ERROR_ARGUMENT |
| 0x02 | ERROR_BYTE1 |
| 0x03 | ERROR_BYTE2 |
| 0x04 | ERROR_BYTE3 |
| 0x05 | ERROR_ADRESSE |
| 0x06 | ERROR_ANZ |
| 0x07 | ERROR_BYTE |
| 0x08 | ERROR_LINKS_STUFE |
| 0x09 | ERROR_RECHTS_STUFE |
| 0x0A | ERROR_LINKS |
| 0x0B | ERROR_RECHTS |
| 0x0C | ERROR_TASTER |
| 0x0D | ERROR_BELECHTUNG |
| 0x0E | ERROR_KLEMME_R |
| 0x0F | ERROR_KLEMME_15 |
| 0x10 | ERROR_KLEMME_50 |
| 0x11 | ERROR_DATEN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Klemme 30 nicht vorhanden |
| 0x01 | Sitzheizung links Kurzschluss oder Leitungsunterbrechung |
| 0x02 | Sitzheizung rechts Kurzschluss oder Leitungsunterbrechung |
| 0x03 | Temperatursensor Sitzheizung links Kurzschluss gegen Masse |
| 0x04 | Temperatursensor Sitzheizung rechts Kurzschluss gegen Masse |
| 0x05 | Temperatursensor Sitzheizung links Leitungsunterbrechung |
| 0x06 | Temperatursensor Sitzheizung rechts Leitungsunterbrechung |
| 0x07 | Heizflaeche Sitzheizung links Leitungsunterbrechung |
| 0x08 | Heizflaeche Sitzheizung rechts Leitungsunterbrechung |
| 0x09 | Sonnenrollo Motor ab, Kurzschluss oder Leitungsunterbrechung |
| 0x0A | Fehler Leitung Aktivsitz links (keine Rueckmeldung vom SG) |
| 0x0B | Fehler Leitung Aktivsitz rechts (keine Rueckmeldung vom SG) |
| 0x0C | Aktivsitz links keine Quittung (Fehler im SZM) |
| 0x0D | Aktivsitz rechts keine Quittung (Fehler im SZM) |
| 0x0E | K-Bus Down |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x01 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |

### FARTMATRIX

| ORT | A1_0 | A1_1 |
| --- | --- | --- |
| 0x01 | 0x00 | 0x01 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0F | Platinentemperatur links > 95 Grad C |
| 0x10 | Platinentemperatur rechts > 95 Grad C |
| 0x11 | Taster Sitzheizung links dauernd betaetigt |
| 0x12 | Taster Sitzheizung rechts dauernd betaetigt |
| 0x13 | Taster Sonnenrollo Front dauernd betaetigt |
| 0x14 | Taster Sonnenrollo Fernbedienung dauernd betaetigt |
| 0x15 | Taster Aktivsitz links dauernd betaetigt |
| 0x16 | Taster Aktivsitz rechts dauernd betaetigt |
| 0x17 | Unterspannung erkannt |
| 0x18 | Toleranzueberschreitung Aktivsitz links |
| 0x19 | Toleranzueberschreitung Aktivsitz rechts |
| 0xFF | unbekannter Fehlerort |

### SITZTEMPERATUR

| WERT | TEMPERATUR |
| --- | --- |
| 0x00 | 150.0 |
| 0x01 | 150.0 |
| 0x02 | 150.0 |
| 0x03 | 150.0 |
| 0x04 | 150.0 |
| 0x05 | 150.0 |
| 0x06 | 150.0 |
| 0x07 | 150.0 |
| 0x08 | 150.0 |
| 0x09 | 150.0 |
| 0x0A | 150.0 |
| 0x0B | 150.0 |
| 0x0C | 150.0 |
| 0x0D | 150.0 |
| 0x0E | 150.0 |
| 0x0F | 150.0 |
| 0x10 | 150.0 |
| 0x11 | 150.0 |
| 0x12 | 150.0 |
| 0x13 | 100.0 |
| 0x14 |  98.3 |
| 0x15 |  96.6 |
| 0x16 |  95.0 |
| 0x17 |  93.3 |
| 0x18 |  91.6 |
| 0x19 |  90.0 |
| 0x1A |  88.8 |
| 0x1B |  87.5 |
| 0x1C |  86.3 |
| 0x1D |  85.0 |
| 0x1E |  84.0 |
| 0x1F |  83.0 |
| 0x20 |  82.0 |
| 0x21 |  81.0 |
| 0x22 |  80.0 |
| 0x23 |  79.1 |
| 0x24 |  78.3 |
| 0x25 |  77.5 |
| 0x26 |  76.7 |
| 0x27 |  75.8 |
| 0x28 |  75.0 |
| 0x29 |  74.1 |
| 0x2A |  73.3 |
| 0x2B |  72.5 |
| 0x2C |  71.7 |
| 0x2D |  70.8 |
| 0x2E |  70.0 |
| 0x2F |  69.4 |
| 0x30 |  68.8 |
| 0x31 |  68.1 |
| 0x32 |  67.5 |
| 0x33 |  66.9 |
| 0x34 |  66.3 |
| 0x35 |  65.6 |
| 0x36 |  65.0 |
| 0x37 |  64.4 |
| 0x38 |  63.8 |
| 0x39 |  63.1 |
| 0x3A |  62.5 |
| 0x3B |  61.9 |
| 0x3C |  61.3 |
| 0x3D |  60.6 |
| 0x3E |  60.0 |
| 0x3F |  59.5 |
| 0x40 |  59.0 |
| 0x41 |  58.5 |
| 0x42 |  58.0 |
| 0x43 |  57.5 |
| 0x44 |  57.0 |
| 0x45 |  56.5 |
| 0x46 |  56.0 |
| 0x47 |  55.5 |
| 0x48 |  55.0 |
| 0x49 |  54.5 |
| 0x4A |  54.0 |
| 0x4B |  53.6 |
| 0x4C |  53.1 |
| 0x4D |  52.7 |
| 0x4E |  52.2 |
| 0x4F |  51.8 |
| 0x50 |  51.3 |
| 0x51 |  50.9 |
| 0x52 |  50.4 |
| 0x53 |  50.0 |
| 0x54 |  49.5 |
| 0x55 |  49.0 |
| 0x56 |  48.6 |
| 0x57 |  48.1 |
| 0x58 |  47.7 |
| 0x59 |  47.2 |
| 0x5A |  46.8 |
| 0x5B |  46.3 |
| 0x5C |  45.9 |
| 0x5D |  45.4 |
| 0x5E |  45.0 |
| 0x5F |  44.6 |
| 0x60 |  44.2 |
| 0x61 |  43.8 |
| 0x62 |  43.4 |
| 0x63 |  43.0 |
| 0x64 |  42.6 |
| 0x65 |  42.3 |
| 0x66 |  41.9 |
| 0x67 |  41.5 |
| 0x68 |  41.1 |
| 0x69 |  40.7 |
| 0x6A |  40.3 |
| 0x6B |  40.0 |
| 0x6C |  39.6 |
| 0x6D |  39.2 |
| 0x6E |  38.9 |
| 0x6F |  38.5 |
| 0x70 |  38.2 |
| 0x71 |  37.8 |
| 0x72 |  37.4 |
| 0x73 |  37.1 |
| 0x74 |  36.7 |
| 0x75 |  36.4 |
| 0x76 |  36.0 |
| 0x77 |  35.7 |
| 0x78 |  35.3 |
| 0x79 |  35.0 |
| 0x7A |  34.6 |
| 0x7B |  34.2 |
| 0x7C |  33.9 |
| 0x7D |  33.5 |
| 0x7E |  33.2 |
| 0x7F |  32.8 |
| 0x80 |  32.4 |
| 0x81 |  32.1 |
| 0x82 |  31.7 |
| 0x83 |  31.4 |
| 0x84 |  31.0 |
| 0x85 |  30.7 |
| 0x86 |  30.3 |
| 0x87 |  30.0 |
| 0x88 |  29.6 |
| 0x89 |  29.2 |
| 0x8A |  28.9 |
| 0x8B |  28.5 |
| 0x8C |  28.2 |
| 0x8D |  27.8 |
| 0x8E |  27.4 |
| 0x8F |  27.1 |
| 0x90 |  26.7 |
| 0x91 |  26.4 |
| 0x92 |  26.0 |
| 0x93 |  25.7 |
| 0x94 |  25.3 |
| 0x95 |  25.0 |
| 0x96 |  24.6 |
| 0x97 |  24.2 |
| 0x98 |  23.9 |
| 0x99 |  23.5 |
| 0x9A |  23.2 |
| 0x9B |  22.8 |
| 0x9C |  22.4 |
| 0x9D |  22.1 |
| 0x9E |  21.7 |
| 0x9F |  21.4 |
| 0xA0 |  21.0 |
| 0xA1 |  20.7 |
| 0xA2 |  20.3 |
| 0xA3 |  20.0 |
| 0xA4 |  19.6 |
| 0xA5 |  19.2 |
| 0xA6 |  18.8 |
| 0xA7 |  18.4 |
| 0xA8 |  18.0 |
| 0xA9 |  17.6 |
| 0xAA |  17.3 |
| 0xAB |  16.9 |
| 0xAC |  16.5 |
| 0xAD |  16.1 |
| 0xAE |  15.7 |
| 0xAF |  15.3 |
| 0xB0 |  15.0 |
| 0xB1 |  14.6 |
| 0xB2 |  14.2 |
| 0xB3 |  13.8 |
| 0xB4 |  13.4 |
| 0xB5 |  13.0 |
| 0xB6 |  12.6 |
| 0xB7 |  12.3 |
| 0xB8 |  11.9 |
| 0xB9 |  11.5 |
| 0xBA |  11.1 |
| 0xBB |  10.7 |
| 0xBC |  10.3 |
| 0xBD |  10.0 |
| 0xBE |   9.5 |
| 0xBF |   9.1 |
| 0xC0 |   8.7 |
| 0xC1 |   8.3 |
| 0xC2 |   7.9 |
| 0xC3 |   7.5 |
| 0xC4 |   7.0 |
| 0xC5 |   6.6 |
| 0xC6 |   6.2 |
| 0xC7 |   5.8 |
| 0xC8 |   5.4 |
| 0xC9 |   5.0 |
| 0xCA |   4.5 |
| 0xCB |   4.0 |
| 0xCC |   3.5 |
| 0xCD |   3.0 |
| 0xCE |   2.5 |
| 0xCF |   2.0 |
| 0xD0 |   1.5 |
| 0xD1 |   1.0 |
| 0xD2 |   0.5 |
| 0xD3 |   0.0 |
| 0xD4 |  -0.5 |
| 0xD5 |  -1.1 |
| 0xD6 |  -1.6 |
| 0xD7 |  -2.2 |
| 0xD8 |  -2.7 |
| 0xD9 |  -3.3 |
| 0xDA |  -3.8 |
| 0xDB |  -4.4 |
| 0xDC |  -5.0 |
| 0xDD |  -5.6 |
| 0xDE |  -6.2 |
| 0xDF |  -6.8 |
| 0xE0 |  -7.5 |
| 0xE1 |  -8.1 |
| 0xE2 |  -8.7 |
| 0xE3 |  -9.3 |
| 0xE4 | -10.0 |
| 0xE5 | -10.8 |
| 0xE6 | -11.6 |
| 0xE7 | -12.4 |
| 0xE8 | -13.3 |
| 0xE9 | -14.1 |
| 0xEA | -15.0 |
| 0xEB | -16.0 |
| 0xEC | -17.0 |
| 0xED | -18.0 |
| 0xEE | -19.0 |
| 0xEF | -20.0 |
| 0xF0 | -21.2 |
| 0xF1 | -22.5 |
| 0xF2 | -23.7 |
| 0xF3 | -25.0 |
| 0xF4 | -26.6 |
| 0xF5 | -28.3 |
| 0xF6 | -30.0 |
| 0xF7 | -32.5 |
| 0xF8 | -35.0 |
| 0xF9 | -37.5 |
| 0xFA | -40.0 |
| 0xFB | -50.0 |
| 0xFC | -50.0 |
| 0xFD | -50.0 |
| 0xFE | -50.0 |
| 0xFF | -50.0 |

### PLATINENTEMPERATUR

| WERT | TEMPERATUR |
| --- | --- |
| 0x00 | 150.0 |
| 0x01 | 150.0 |
| 0x02 | 150.0 |
| 0x03 | 150.0 |
| 0x04 | 150.0 |
| 0x05 | 150.0 |
| 0x06 | 150.0 |
| 0x07 | 150.0 |
| 0x08 | 150.0 |
| 0x09 | 150.0 |
| 0x0A | 150.0 |
| 0x0B | 150.0 |
| 0x0C | 150.0 |
| 0x0D | 150.0 |
| 0x0E | 150.0 |
| 0x0F | 150.0 |
| 0x10 | 150.0 |
| 0x11 | 150.0 |
| 0x12 | 150.0 |
| 0x13 | 150.0 |
| 0x14 | 150.0 |
| 0x15 | 150.0 |
| 0x16 | 150.0 |
| 0x17 | 150.0 |
| 0x18 | 150.0 |
| 0x19 | 150.0 |
| 0x1A | 150.0 |
| 0x1B | 150.0 |
| 0x1C | 150.0 |
| 0x1D | 150.0 |
| 0x1E | 150.0 |
| 0x1F | 150.0 |
| 0x20 | 150.0 |
| 0x21 | 150.0 |
| 0x22 | 150.0 |
| 0x23 | 150.0 |
| 0x24 | 150.0 |
| 0x25 | 150.0 |
| 0x26 | 150.0 |
| 0x27 | 150.0 |
| 0x28 | 150.0 |
| 0x29 | 150.0 |
| 0x2A | 150.0 |
| 0x2B | 150.0 |
| 0x2C | 150.0 |
| 0x2D | 150.0 |
| 0x2E | 125.0 |
| 0x2F | 123.7 |
| 0x30 | 122.5 |
| 0x31 | 121.2 |
| 0x32 | 120.0 |
| 0x33 | 119.0 |
| 0x34 | 118.0 |
| 0x35 | 117.0 |
| 0x36 | 116.0 |
| 0x37 | 115.0 |
| 0x38 | 114.1 |
| 0x39 | 113.3 |
| 0x3A | 112.5 |
| 0x3B | 111.6 |
| 0x3C | 110.8 |
| 0x3D | 110.0 |
| 0x3E | 109.1 |
| 0x3F | 108.3 |
| 0x40 | 107.5 |
| 0x41 | 106.6 |
| 0x42 | 105.8 |
| 0x43 | 105.0 |
| 0x44 | 104.2 |
| 0x45 | 103.2 |
| 0x46 | 102.8 |
| 0x47 | 102.1 |
| 0x48 | 101.4 |
| 0x49 | 100.7 |
| 0x4A | 100.0 |
| 0x4B |  99.2 |
| 0x4C |  98.5 |
| 0x4D |  97.8 |
| 0x4E |  97.1 |
| 0x4F |  96.4 |
| 0x50 |  95.7 |
| 0x51 |  95.0 |
| 0x52 |  94.2 |
| 0x53 |  93.5 |
| 0x54 |  93.8 |
| 0x55 |  92.1 |
| 0x56 |  91.4 |
| 0x57 |  90.7 |
| 0x58 |  90.0 |
| 0x59 |  89.4 |
| 0x5A |  88.8 |
| 0x5B |  88.3 |
| 0x5C |  87.7 |
| 0x5D |  87.2 |
| 0x5E |  86.6 |
| 0x5F |  86.1 |
| 0x60 |  85.5 |
| 0x61 |  85.0 |
| 0x62 |  84.3 |
| 0x63 |  83.7 |
| 0x64 |  83.1 |
| 0x65 |  82.5 |
| 0x66 |  81.8 |
| 0x67 |  81.2 |
| 0x68 |  80.6 |
| 0x69 |  80.0 |
| 0x6A |  79.4 |
| 0x6B |  78.8 |
| 0x6C |  78.3 |
| 0x6D |  77.7 |
| 0x6E |  77.2 |
| 0x6F |  76.6 |
| 0x70 |  76.1 |
| 0x71 |  75.5 |
| 0x72 |  75.0 |
| 0x73 |  74.5 |
| 0x74 |  74.0 |
| 0x75 |  73.5 |
| 0x76 |  73.0 |
| 0x77 |  72.5 |
| 0x78 |  72.0 |
| 0x79 |  71.5 |
| 0x7A |  71.0 |
| 0x7B |  70.5 |
| 0x7C |  70.0 |
| 0x7D |  69.5 |
| 0x7E |  69.0 |
| 0x7F |  68.5 |
| 0x80 |  68.0 |
| 0x81 |  67.5 |
| 0x82 |  67.0 |
| 0x83 |  66.5 |
| 0x84 |  66.0 |
| 0x85 |  65.5 |
| 0x86 |  65.0 |
| 0x87 |  64.4 |
| 0x88 |  63.8 |
| 0x89 |  63.3 |
| 0x8A |  62.7 |
| 0x8B |  62.2 |
| 0x8C |  61.6 |
| 0x8D |  61.1 |
| 0x8E |  60.5 |
| 0x8F |  60.0 |
| 0x90 |  69.5 |
| 0x91 |  59.0 |
| 0x92 |  58.5 |
| 0x93 |  58.0 |
| 0x94 |  57.5 |
| 0x95 |  57.0 |
| 0x96 |  56.5 |
| 0x97 |  56.0 |
| 0x98 |  55.5 |
| 0x99 |  55.0 |
| 0x9A |  54.5 |
| 0x9B |  54.0 |
| 0x9C |  53.5 |
| 0x9D |  53.0 |
| 0x9E |  52.5 |
| 0x9F |  52.0 |
| 0xA0 |  51.5 |
| 0xA1 |  51.0 |
| 0xA2 |  50.5 |
| 0xA3 |  50.0 |
| 0xA4 |  49.5 |
| 0xA5 |  49.0 |
| 0xA6 |  48.5 |
| 0xA7 |  48.0 |
| 0xA8 |  47.5 |
| 0xA9 |  47.0 |
| 0xAA |  46.5 |
| 0xAB |  46.0 |
| 0xAC |  45.5 |
| 0xAD |  45.0 |
| 0xAE |  44.4 |
| 0xAF |  43.8 |
| 0xB0 |  43.3 |
| 0xB1 |  42.7 |
| 0xB2 |  42.2 |
| 0xB3 |  41.6 |
| 0xB4 |  41.1 |
| 0xB5 |  40.5 |
| 0xB6 |  40.0 |
| 0xB7 |  39.4 |
| 0xB8 |  38.8 |
| 0xB9 |  38.3 |
| 0xBA |  37.7 |
| 0xBB |  37.2 |
| 0xBC |  36.6 |
| 0xBD |  36.1 |
| 0xBE |  35.5 |
| 0xBF |  35.0 |
| 0xC0 |  34.4 |
| 0xC1 |  33.8 |
| 0xC2 |  33.3 |
| 0xC3 |  32.7 |
| 0xC4 |  32.2 |
| 0xC5 |  31.6 |
| 0xC6 |  31.1 |
| 0xC7 |  30.5 |
| 0xC8 |  30.0 |
| 0xC9 |  29.2 |
| 0xCA |  28.5 |
| 0xCB |  27.8 |
| 0xCC |  27.1 |
| 0xCD |  26.4 |
| 0xCE |  25.7 |
| 0xCF |  25.0 |
| 0xD0 |  23.7 |
| 0xD1 |  23.1 |
| 0xD2 |  22.5 |
| 0xD3 |  21.8 |
| 0xD4 |  21.2 |
| 0xD5 |  20.6 |
| 0xD6 |  20.0 |
| 0xD7 |  19.1 |
| 0xD8 |  18.3 |
| 0xD9 |  17.5 |
| 0xDA |  16.6 |
| 0xDB |  15.8 |
| 0xDC |  15.0 |
| 0xDD |  14.0 |
| 0xDE |  13.0 |
| 0xDF |  12.0 |
| 0xE0 |  11.0 |
| 0xE1 |  10.0 |
| 0xE2 |   9.0 |
| 0xE3 |   8.0 |
| 0xE4 |   7.0 |
| 0xE5 |   6.0 |
| 0xE6 |   5.0 |
| 0xE7 |   4.0 |
| 0xE8 |   3.0 |
| 0xE9 |   2.0 |
| 0xEA |   1.0 |
| 0xEB |   0.0 |
| 0xEC |  -1.6 |
| 0xED |  -3.3 |
| 0xEE |  -5.0 |
| 0xEF |  -6.6 |
| 0xF0 |  -8.3 |
| 0xF1 | -10.0 |
| 0xF2 | -11.6 |
| 0xF3 | -13.3 |
| 0xF4 | -15.0 |
| 0xF5 | -17.5 |
| 0xF6 | -20.0 |
| 0xF7 | -22.5 |
| 0xF8 | -25.0 |
| 0xF9 | -30.0 |
| 0xFA | -35.0 |
| 0xFB | -40.0 |
| 0xFC | -45.0 |
| 0xFD | -50.0 |
| 0xFE | -50.0 |
| 0xFF | -50.0 |

### SPEICHERDATEN

| ADRESSE | WERT |
| --- | --- |
| 0x0920 | 0xCA |
| 0x0921 | 0x01 |
| 0x0922 | 0xFF |
| 0x0923 | 0xFF |
| 0x0924 | 0x81 |
| 0x0925 | 0xC6 |
| 0x0926 | 0x01 |
| 0x0927 | 0x4A |
| 0x0928 | 0xC1 |
| 0x0929 | 0x01 |
| 0x092A | 0x4C |
| 0x092B | 0x26 |
| 0x092C | 0x09 |
| 0x092D | 0xC6 |
| 0x092E | 0x01 |
| 0x092F | 0x4C |
| 0x0930 | 0x27 |
| 0x0931 | 0x04 |
| 0x0932 | 0x4F |
| 0x0933 | 0xC7 |
| 0x0934 | 0x01 |
| 0x0935 | 0x4A |
| 0x0936 | 0xC6 |
| 0x0937 | 0x01 |
| 0x0938 | 0x49 |
| 0x0939 | 0xC1 |
| 0x093A | 0x01 |
| 0x093B | 0x4B |
| 0x093C | 0x26 |
| 0x093D | 0x09 |
| 0x093E | 0xC6 |
| 0x093F | 0x01 |
| 0x0940 | 0x4B |
| 0x0941 | 0x27 |
| 0x0942 | 0x04 |
| 0x0943 | 0x4F |
| 0x0944 | 0xC7 |
| 0x0945 | 0x01 |
| 0x0946 | 0x49 |
| 0x0947 | 0x81 |
| 0x0948 | 0xFF |
| 0x0949 | 0xFF |
| 0x094A | 0xFF |
| 0x094B | 0xFF |
| 0x094C | 0xFF |
| 0x094D | 0xFF |
| 0x094E | 0xFF |
| 0x094F | 0xFF |
| 0x0950 | 0xFF |
| 0x0951 | 0xFF |
| 0x0952 | 0xFF |
| 0x0953 | 0xFF |
| 0x0954 | 0xFF |
| 0x0955 | 0xFF |
| 0xFFFF | 0xFF |
