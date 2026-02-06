# LSZ_2.prg

## General

|  |  |
| --- | --- |
| File | LSZ_2.prg |
| Type | PRG |
| Jobs | 43 |
| Tables | 16 |
| Origin | BMW EI-63 Herrling (BMW-Partner) |
| Revision | 4.000 |
| Author | BMW TI-431 Schaller, LEAR DCS Scheler, BMW TI-430 Bendel, LEAR DCS Schmidt |
| ECU Comment | LSZ fuer E46 PU 09 / 2001, E85, E83 bis MÜ 09 / 2006 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | LSZ_2  |  |  |
| ORIGIN | string | BMW EI-63 Herrling (BMW-Partner) |  |  |
| REVISION | string | 4.000 |  |  |
| AUTHOR | string | BMW TI-431 Schaller, LEAR DCS Scheler, BMW TI-430 Bendel, LEAR DCS Schmidt |  |  |
| COMMENT | string | LSZ fuer E46 PU 09 / 2001, E85, E83 bis MÜ 09 / 2006  |  |  |
| PACKAGE | string | 1.03 |  |  |
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

### FS_ZAEHLER

Default fs_zaehler job

_No arguments._

### FS_LESEN

fs_lesen job

| Name | Type | Description |
| --- | --- | --- |
| ALL_BLOCKS | string |  |

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### IS_LESEN

is_lesen job

_No arguments._

### CODIERUNG_LESEN_ALLES

Default CODIERUNG_LESEN_ALLES job

| Name | Type | Description |
| --- | --- | --- |
| BLOCKNUMMER | int | angeforderter Datenblock |

### STATUS_LESEN

STATUS_LESEN job

_No arguments._

### HERSTELLER_LESEN

Default ident job

_No arguments._

### DIAGNOSE_WEITER

DIAGNOSE_WEITER job

_No arguments._

### DIAGNOSE_ENDE

DIAGNOSE_ENDE job

_No arguments._

### STEUERN_IO

Ansteuern mehrerer (maximal 15) digitalen Ein- Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente 1 moeglich sind bis  zu 15 Argumente, Liste: 'KLR' = Klemme R aktivieren (Radio-Stellung) 'Kl15' = Klemme 15 aktivieren (Zuendung ein) 'KL58_EIN' = Klemme 58 ein (Suchbeleuchtung) 'NOTAKTIV' = Notfunktion aktivieren 'WBLSUCH_EIN' = Suchbeleuchtung am Warnblinkschalter aktivieren 'LSSUCH_EIN' = Suchbeleuchtung am Lenkstockschalter aktivieren 'SLEEP_MODE' = Steruergeraet in Sleepmode versetzen 'START_PRUEF' = Start des Selbsttestmodes 'QUICK_NACHF' = schnelle Scheinwerfernachfuehrung (nur SW2.0, CI29) 'S_WBL' = Schalter Warnblinklicht 'S2_BLS' = 2.Bremslichtschalter 'S2_AL' = 2.Schalter Abblendlicht 'S_SL' = Schalter Standlicht 'S_AL' = Schalter Abblendlicht 'T_NSW' = Taster Nebelscheinwerfer 'T_NSL' = Taster Nebelschlusslicht 'S_BLS' = Bremslichtschalter 'S_FL' = Schalter Fernlicht 'S_LH' = Schalter Lichthupe, 'S_F_AUS' = Schalter Fernlicht aus 'S_BLK_L' = Schalter Blinker links 'S_BLK_R' = Schalter Blinker rechts 'S_BLK_AUS' = Schalter Blinker aus 'BL_M' = Ausgang Bremslicht mitte 'SL_RV' = Ausg. Positionsl. vorn (E85US: Sidemarker hinten, E83US: AHM Blink-Bremslicht) rechts 'SL2_LH' = Ausgang Schlusslicht 3 (E85: Blinker 2 vorn) links 'BL_L' = Ausgang Bremslicht (E46/5>09/01: Schlusslicht) links 'BL_R' = Ausgang Bremslicht (E46/5>09/01: Schlusslicht) rechts 'BLK_LV' = Ausgang Blinker links vorn (schaltet Dauerlicht) 'BLK_RV' = Ausgang Blinker rechts vorn (schaltet Dauerlicht) 'BLK_ZU_R' = Ausgang seitl. Blinker rechts (schaltet Dauerlicht) 'SL2_RH' = Ausgang Schlusslicht 3 rechts 'AL_R' = Ausgang Abblendlicht rechts 'AL_L' = Ausgang Abblendlicht links 'SL_LV' = Ausg. Positionsl. vorn (E85US: Sidemarker hinten, E83US: AHM Blink-Bremsl.) links 'FL_L' = Ausgang Fernlicht links 'FL_R' = Ausgang Fernlicht rechts 'SL_LH' = Ausgang Schlusslicht 1 (E46/5>09/01: Bremslicht) links 'SL1_RH' = Ausgang Schlusslicht 2 (E85: Blinker 2 vorn) rechts 'REL_NSW' = Relais Nebelscheinwerfer 'KZL' = Kennzeichenbeleuchtung 'BLK_ZU_L' = Ausgang seitl. Blinker links (schaltet Dauerlicht) 'SL_RH' = Ausgang Schlusslicht 1 (E46/5>09/01: Bremslicht) rechts 'NSL' = Ausgang Nebelschlusslicht (E46/4>09/01: Schlusslicht 2 links) 'BLK_LH' = Ausgang Blinker links hinten (schaltet Dauerlicht) 'BIXENON' = Ausgang BiXenonklappe 'BLK_RH' = Ausgang Blinker rechts hinten (schaltet Dauerlicht) 'NSL_AH_EIN' = Nebelschlusslicht am Anhaenger einschalten Argumente koennen sich gegenseitig over-rulen Rueckkehr in den normalen Betriebszustand mit Job 'DIAGNOSE_ENDE' |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 moegliche Argumente: |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |
| ORT8 | string | gewuenschte Komponente 8 |
| ORT9 | string | gewuenschte Komponente 9 |
| ORT10 | string | gewuenschte Komponente 10 |
| ORT11 | string | gewuenschte Komponente 11 |
| ORT12 | string | gewuenschte Komponente 12 |
| ORT13 | string | gewuenschte Komponente 13 |
| ORT14 | string | gewuenschte Komponente 14 |
| ORT15 | string | gewuenschte Komponente 15 |

### SPEICHER_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| HIGH | int | gewuenschte Startadresse high als Hexwert! |
| LOW | int | gewuenschte Startadresse low als Hexwert! |

### SPEICHER_SCHREIBEN

Schreiben des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_HIGH | int | gewuenschte Adresse high als Hexwert! |
| ADRESSE_LOW | int | gewuenschte Adresse low als Hexwert! |
| WERT | int | gewuenschter Wert als Hexwert! |

### STEUERN_DIMMER

STEUERN_DIMMER job

| Name | Type | Description |
| --- | --- | --- |
| DIMMWERT | int | gewuenschter Spannungswert in Volt |

### STEUERN_LWR_POTI

STEUERN_LWR_POTI job

| Name | Type | Description |
| --- | --- | --- |
| POTI_WERT | int | gewuenschter Wert in Volt |

### STEUERN_SCHALTERSPANNUNG_FL_LH

STEUERN_SCHALTERSPANNUNG_FL_LH job

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | gewuenschter Wert in [Volt] |

### STEUERN_SCHALTERSPANNUNG_BLINKER

STEUERN_SCHALTERSPANNUNG_BLINKER job

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | gewuenschter Wert in [Volt] |

### STEUERN_FOTOZELLE

STEUERN_FOTOZELLE job

| Name | Type | Description |
| --- | --- | --- |
| FOTO_WERT | int | gewuenschter Wert in Volt |

### STEUERN_BELADUNGSSENSOR_VORN

STEUERN_BELADUNGSSENSOR_VORN job

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | gewuenschter Wert in [Volt] |

### FG_NR_LESEN

Default FG_NR_LESEN job

_No arguments._

### SIA_LESEN

Default SIA_LESEN job

_No arguments._

### BETRIEBSSTUNDENZAEHLER_LESEN

Default BETRIEBSSTUNDENZAEHLER_LESEN job

_No arguments._

### BETRIEBSSTUNDENZAEHLER_LOESCHEN

Default BETRIEBSSTUNDENZAEHLER_LOESCHEN job

| Name | Type | Description |
| --- | --- | --- |
| ZAEHLER | int | 0x01 bis 0x0b zum loeschen einzelner Zaehler 0xFF zum loeschen aller Zaehler |

### XENON_VORHANDEN

Default XENON_VORHANDEN job

_No arguments._

### LWR_VORHANDEN

Default LWR_VORHANDEN job

_No arguments._

### LAENDERCODIERUNG

Default CODIERUNG_BLOCK_5_LESEN job

_No arguments._

### C_FA_LESEN

Fahrzeugauftrag lesen Gueltiger Adressblockbereich: 0x00 - 0x0D (219 Bytes in total)

_No arguments._

### C_FG_LESEN

Auslesen der FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben der red. Datenablage mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

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

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben mit Gegenverifikation Gueltiger Adressblockbereich: 0x00 - 0x11 (288 Bytes in total)

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### C_FA_LOESCHEN

Fahrzeugauftrag Löschen mit Gegenverifikation Gueltiger Adressblockbereich: 0x00 - 0x11 (288 Bytes in total)

_No arguments._

### STEUERN_BFD_LED

E46/2,C - Steuern des Brake-Force-Display

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Ort der BFD-Lampen: "L" -> links (left) "R" -> rechts (right) "B" -> beide (both) |

### STEUERN_DYN_LWR

Fertigungsmodus schnelle Scheinwerfernachregelung

_No arguments._

### SLEEPINSTRUCTION_IHKA

PD-Telegramm über K-Bus vom LSZ an IHKA

_No arguments._

### FS_LESEN_GESAMT

fs_lesen_gesamt job

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
| 0x76 | CEL |
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
| 0xXY | ERROR_UNKNOWN |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0A | RAM-Fehler des Mikro-Prozessors |
| 0x0B | ROM-Fehler des Mikro-Prozessors |
| 0x0C | EEPROM-Fehler des Mikro-Prozessors |
| 0x0D | Diagnose-Leitung U12/2 defekt |
| 0x0E | Diagnose-Leitung U12/1 defekt |
| 0x0F | Diagnose-Leitung U11/2 defekt |
| 0x10 | Kl. 30 A fehlerhaft |
| 0x11 | Kl. 30 B fehlerhaft |
| 0x12 | Diagnose-Leitung U11/1 defekt |
| 0x13 | Diagnose-Leitung U10 defekt |
| 0x14 | Leitung Bremslichtschalter, Unterbrechung |
| 0x15 | Leitung Bremslichtschalter, Kurzschluss gegen Masse |
| 0x16 | Leitung / Schalter Blinker, Kurzschluss gegen Masse |
| 0x17 | Leitung / Schalter Fernlicht/Lichthupe, Kurzschluss gegen Masse |
| 0x18 | Verbindung zum AHM ist gestoert |
| 0x19 | Abblendlichtschalter- Eingaenge widerspruechlich |
| 0x1A | Reserve Block 2 |
| 0x1B | Reserve Block 2 |
| 0x1E | Steuergeraetefehler im LWR-Teil |
| 0x1F | Spulen Schrittmotoren defekt |
| 0x20 | Reserve Block 3 |
| 0x21 | LWR, vorderer Beladungssensor Unterbrechung |
| 0x22 | LWR, vorderer Beladungssensor Kurzschluss nach Masse |
| 0x23 | LWR, hinterer Beladungssensor Unterbrechung |
| 0x24 | LWR, hinterer Beladungssensor Kurzschluss nach Masse |
| 0x25 | Reserve Block 3 |
| 0x28 | Klemme R fehlt |
| 0x29 | Klemme 15 fehlt |
| 0x2A | LWR-Poti defekt |
| 0x2B | Dimmer-Poti defekt |
| 0x2C | Reserve Block 4 |
| 0x2D | Reserve Block 4 |
| 0x2E | Reserve Block 4 |
| 0x2F | Reserve Block 4 |
| 0x32 | Bremslicht Mitte defekt |
| 0x33 | Positionslicht rechts vorn defekt |
| 0x34 | Bremslicht (E46/5 > 09/01: Schlusslicht) links defekt |
| 0x35 | Bremslicht (E46/5 > 09/01: Schlusslicht) rechts defekt |
| 0x36 | Blinker links vorn defekt |
| 0x37 | Blinker rechts vorn defekt |
| 0x38 | Positionslicht links vorn defekt |
| 0x39 | Fernlicht  (E85 > 01/06: Positionslicht vorn) links defekt |
| 0x3A | Fernlicht  (E85 > 01/06: Positionslicht vorn) rechts defekt |
| 0x3B | Schlusslicht (E46/5 > 09/01: Bremslicht) links defekt |
| 0x3C | Kennzeichenlicht defekt |
| 0x3D | Schlusslicht (E46/5 > 09/01: Bremslicht) rechts defekt |
| 0x3E | Nebelschlusslicht (E46/4 > 09/01: Schlusslicht 2 links,  E85US > 01/06: zweistufiges Bremslicht links) defekt |
| 0x3F | Blinker links hinten defekt |
| 0x40 | Blinker rechts hinten defekt |
| 0x41 | Abblendlicht rechts defekt |
| 0x42 | Abblendlicht links defekt |
| 0x43 | Zusatzblinker links defekt |
| 0x44 | Zusatzblinker rechts defekt |
| 0x45 | Schlusslicht 2 (E85: Blinker vorn) rechts defekt |
| 0x46 | Schlusslicht 3 (E85: Blinker vorn) links defekt |
| 0x47 | Schlusslicht 3 (E85 > 01/06: zweistufiges Bremslicht) rechts defekt |
| 0x48 | ein Scheinwerfer nicht aktiviert wegen Blendgefahr durch Kurvenlicht |
| 0x49 | Reserve Block 7 |
| 0x4A | Anhaenger, Blinker links defekt |
| 0x4B | Anhaenger, Blinker rechts defekt |
| 0x4C | Reserve Block 7 |
| 0x4D | Reserve Block 7 |
| 0x50 | sporadischer Fehler bei Ansteuerung LWR-Treiber |
| 0x51 | FWT-Mode |
| 0xFF | unbekannter Fehlerort |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |
| 0xXY | unbekannte Fehlerart |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| Kl15 | 0 | 0x10 |
| S_WBL | 0 | 0x20 |
| S2_BLS | 0 | 0x40 |
| S2_AL | 0 | 0x80 |
| S_SL | 1 | 0x01 |
| S_AL | 1 | 0x02 |
| T_NSW | 1 | 0x04 |
| T_NSL | 1 | 0x08 |
| S_BLS | 1 | 0x10 |
| KLR | 1 | 0x40 |
| S_FL | 2 | 0x50 |
| S_LH | 2 | 0x80 |
| S_F_AUS | 2 | 0xFF |
| S_BLK_L | 3 | 0x50 |
| S_BLK_R | 3 | 0x80 |
| S_BLK_AUS | 3 | 0xFF |
| BL_M | 4 | 0x01 |
| SL_RV | 4 | 0x02 |
| SL2_LH | 4 | 0x04 |
| BL_L | 4 | 0x08 |
| BL_R | 4 | 0x10 |
| BLK_LV | 4 | 0x20 |
| BLK_RV | 4 | 0x40 |
| BLK_ZU_R | 4 | 0x80 |
| SL2_RH | 5 | 0x01 |
| AL_R | 5 | 0x02 |
| AL_L | 5 | 0x04 |
| SL_LV | 5 | 0x08 |
| FL_L | 5 | 0x10 |
| FL_R | 5 | 0x20 |
| SL_LH | 5 | 0x40 |
| SL1_RH | 5 | 0x80 |
| REL_NSW | 6 | 0x01 |
| KZL | 6 | 0x02 |
| BLK_ZU_L | 6 | 0x04 |
| SL_RH | 6 | 0x08 |
| NSL | 6 | 0x10 |
| BLK_LH | 6 | 0x20 |
| BIXENON | 6 | 0x40 |
| BLK_RH | 6 | 0x80 |
| NOTAKTIV | 8 | 0x01 |
| KL58_EIN | 8 | 0x02 |
| WBLSUCH_EIN | 8 | 0x04 |
| LSSUCH_EIN | 8 | 0x08 |
| NSL_AH_EIN | 8 | 0x10 |
| SLEEP_MODE | 8 | 0x20 |
| START_PRUEF | 8 | 0x40 |
| QUICK_NACHF | 8 | 0x80 |
| XXX | Y | Z |

### LEUCHTKAMMERSTATI

| STATUS | ABKUERZUNG | BEDEUTUNG |
| --- | --- | --- |
| 0 | AUS | AUS |
| 1 | SL | Stand-/Schlusslicht |
| 2 | BL | Bremslicht |
| 3 | FRA | Fahrtrichtungsanzeiger |
| 4 | NSL | Nebelschlusslicht |
| 5 | RFSW | Rückfahrscheinwerfer |
| 6 | BL+SL | Bremslicht+Stand-/Schlusslicht |
| 7 | FRA+BL | Fahrtrichtungsanzeiger+Bremslicht |
| 8 | FRA+SL | Fahrtrichtungsanzeiger+Stand-/Schlusslicht |
| 9 | FRA+BL+SL | Fahrtrichtungsanzeiger+Bremslicht+Stand-/Schlusslicht |
| 10 | NSL+SL | Nebelschlusslicht+Stand-/Schlusslicht |
| 11 | SM_US | Sidemarker US |
| 12 | AL | Abblendlicht |
| 13 | AL+BiX | Abblendlicht+BiXenon-Fernlicht |
| 14 | FL | Halogen-Fernlicht |
| 15 | LH | Lichthupe |
| 16 | DRL_US | Daytime-Running-Light US |
| 17 | NSW | Nebelscheinwerfer |
| 18 | SM_US+FRA | Sidemarker US+Fahrtrichtungsanzeiger |
| 19 | KZL | Kennzeichenlicht |
| 20 | SL+BFD | Schlusslicht+BrakeForceDisplay |
| 21 | BFD | BrakeForceDisplay |
| 22 | NSL+BFD | Nebelschlusslicht+BrakeForceDisplay |
| 90 | uncodiert | Uncodiert bzw. Auslieferungszustand |
| 95 | unbenutzt | Leuchtkammer ohne LSZ-Funktion |
| 99 | defekt | defekt |
| 0xXY | unbekannt | unbekannter Leuchtkammerstatus |

### VARIANTEFZG

| WERT | INT_VARIANTE | VARIANTE_FZG |
| --- | --- | --- |
| 0x00 | 0 | nicht kodiert bzw. Auslieferzustand |
| 0x01 | 1 | E46/4 > PU 09.01 |
| 0x02 | 2 | E46/2,3,C + (E46/4 + !PU 09.01) |
| 0x03 | 3 | E46/5 + !PU 09.01 |
| 0x04 | 4 | E46/5 > PU 09.01 |
| 0x05 | 5 | E85 |
| 0x06 | 6 | E83 |
| 0x07 | 7 | E85 >PU 01/06 |
| 0xXY | 255 | unbekannte Fahrzeug-Variante |

### LAENDERVARIANTEFZG

| WERT | INT_L_VARIANTE | L_VARIANTE_FZG |
| --- | --- | --- |
| 0x00 | 1 | ECE |
| 0x01 | 2 | US |
| 0xXY | 255 | unbekannte Fahrzeug-Laendervariante |
