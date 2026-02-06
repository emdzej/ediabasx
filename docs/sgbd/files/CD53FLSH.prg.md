# CD53FLSH.prg

## General

|  |  |
| --- | --- |
| File | CD53FLSH.prg |
| Type | PRG |
| Jobs | 36 |
| Tables | 8 |
| Origin | BMW EE-42 Wiesmeier |
| Revision | 0.8 |
| Author | BMW TI-431 Krueger |
| ECU Comment | CD53FLSH |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CD53FLSH |  |  |
| ORIGIN | string | BMW EE-42 Wiesmeier |  |  |
| REVISION | string | 0.8 |  |  |
| AUTHOR | string | BMW TI-431 Krueger |  |  |
| COMMENT | string | CD53FLSH |  |  |
| PACKAGE | string | 0.05 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer das Radio

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### STATUS_LESEN

alle Stati des RADIO lesen

_No arguments._

### STEUERN_DEFAULT_SOUND

Balance, Fader und Volume Defaulteinstellung

_No arguments._

### STEUERN_FADER_LV

Ansteuerung des Kanals links vorne

_No arguments._

### STEUERN_FADER_RV

Ansteuerung des Kanals rechts vorne

_No arguments._

### STEUERN_FADER_RH

Ansteuerung des Kanals rechts hinten

_No arguments._

### STEUERN_FADER_LH

Ansteuerung des Kanals links hinten

_No arguments._

### STEUERN_VOL_UP

Lautstaerkeerhoehung um 11dB/s

| Name | Type | Description |
| --- | --- | --- |
| INKREMENTE | int | Anzahl der Telegramme die geschickt werden (default 1) |

### STEUERN_VOL_DOWN

Lautstaerkenabsenkung um 11dB/s

| Name | Type | Description |
| --- | --- | --- |
| INKREMENTE | int | Anzahl der Telegramme die geschickt werden (default 1) |

### STEUERN_SEEK_UP

Suchlauf aufwaerts

_No arguments._

### STEUERN_SEEK_DOWN

Suchlauf abwaerts

_No arguments._

### STEUERN_AUDIO_KEY

Audio-Taste betaetigen

_No arguments._

### STEUERN_GAL_DEK

GAL-WERT dekrementieren

_No arguments._

### STEUERN_GAL_INK

GAL-WERT inkrementieren

_No arguments._

### STEUERN_VF_DEK

VF-Mindestlautstaerke dekrementieren

_No arguments._

### STEUERN_VF_INK

VF-Mindestlautstaerke inkrementieren

_No arguments._

### STEUERN_FREQUENZ

einstellen der Radiofrequenz

| Name | Type | Description |
| --- | --- | --- |
| FREQUENZ | string | Frequenz in KHz 0 - 999999 |

### STEUERN_RADIO_POWER

Ein-/Ausschalten des Radios

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | EIN/AUS,ON/OFF |

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

### SERIALNUMBER

Herstelldaten lesen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### COD_LESEN

Auslesen der Codierung Radio

_No arguments._

### SET_PROG_MODE

Setzen des Programmiermodus

_No arguments._

### STEUERN_SPEICHER_LOESCHEN

Loescht den Speicher

_No arguments._

### STEUERN_SPEICHER_ADRESSE

Setzt Speicheradresse bei aktuellem Schritt

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Area Byte // Normalerweise 0x02 |
| BYTE2 | int | High address number |
| BYTE3 | int | Middle address number |
| BYTE4 | int | Low address number |

### STEUERN_PROGRAMMIEREN_START

Startet den Programmiervorgang

_No arguments._

### STEUERN_UEBERTRAGEN_PROGRAMM

Uebertraegt Speicherdaten bei aktuellem Schritt

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Area Byte // Normalerweise 0x02 |
| BYTE2 | int | High address number |
| BYTE3 | int | Middle address number |
| BYTE4 | int | Low address number |
| BYTE5 | int | 0x00 bedeutet normale Programmierdaten 0x00 oder 0xFF bedeutet leerer ROM Bereich 0x01 oder 0x20 bedeutet Datenlänge |
| BYTE6 | int | Programmdaten maximal 32Byte |
| BYTE7 | int | Programmdaten |
| BYTE8 | int | Programmdaten |
| BYTE9 | int | Programmdaten |
| BYTE10 | int | Programmdaten |
| BYTE11 | int | Programmdaten |
| BYTE12 | int | Programmdaten |
| BYTE13 | int | Programmdaten |
| BYTE14 | int | Programmdaten |
| BYTE15 | int | Programmdaten |
| BYTE16 | int | Programmdaten |
| BYTE17 | int | Programmdaten |
| BYTE18 | int | Programmdaten |
| BYTE19 | int | Programmdaten |
| BYTE20 | int | Programmdaten |
| BYTE21 | int | Programmdaten |
| BYTE22 | int | Programmdaten |
| BYTE23 | int | Programmdaten |
| BYTE24 | int | Programmdaten |
| BYTE25 | int | Programmdaten |
| BYTE26 | int | Programmdaten |
| BYTE27 | int | Programmdaten |
| BYTE28 | int | Programmdaten |
| BYTE29 | int | Programmdaten |
| BYTE30 | int | Programmdaten |
| BYTE31 | int | Programmdaten |
| BYTE32 | int | Programmdaten |
| BYTE33 | int | Programmdaten |
| BYTE34 | int | Programmdaten |
| BYTE35 | int | Programmdaten |
| BYTE36 | int | Programmdaten |
| BYTE37 | int | Programmdaten |
| BYTE38 | int | Programmdaten |

### VERIFY_CHECKSUM

Setzt Speicheradresse bei aktuellem Schritt

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | SumHi |
| BYTE2 | int | SumLo |

### STEUERN_RESET

Fuehrt einen Reset im Radio aus

_No arguments._

### FLASH_SCHREIBEN

Beliebige Flash Zellen beschreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten |

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
| 0x00 | Energiesparmode aktiviert |
| 0x01 | Fehler an der CD-Wechsler-Schnittstelle |
| 0x02 | Fehler an der Antennenstromversorgung |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |
| 0xXY | unbekannte Fehlerart |

### DIAGINDEX

| DIAG_NR | RADIO_NAME | RADIO_NAME_NEU | TASTE | SUCHSCHWELLE | VF | AN_AUS |
| --- | --- | --- | --- | --- | --- | --- |
| 0x00 | C23 MID ECE | C23_MID_ECE | 1 | 1 | 1 | 1 |
| 0x01 | C23 BM ECE | C23_BM_ECE | 0 | 1 | 1 | 1 |
| 0x02 | C23 MID US | C23_MID_US | 1 | 0 | 0 | 1 |
| 0x03 | C23 BM JPN | C23_BM_JPN | 0 | 0 | 0 | 1 |
| 0x04 | C33 JPN | C33_JPN | 1 | 0 | 0 | 0 |
| 0x05 | C23 BM OCN | C23_BM_OCN | 0 | 0 | 0 | 1 |
| 0x07 | CD23 | CD23 | 1 | 1 | 1 | 1 |
| 0x08 | C24 DIN | C24_DIN | 1 | 1 | 1 | 1 |
| 0x09 | C24 MID | C24_MID | 1 | 1 | 1 | 1 |
| 0x0A | C34 | C34 | 1 | 1 | 1 | 0 |
| 0x0B | C32 | C32 | 1 | 1 | 1 | 0 |
| 0x0C | CD33 | CD33 | 1 | 1 | 1 | 0 |
| 0x0D | C33 ECE | C33_ECE | 1 | 1 | 1 | 0 |
| 0x0E | C33 US | C33_US | 1 | 0 | 0 | 0 |
| 0x0F | C33 OCN | C33_OCN | 1 | 0 | 0 | 0 |
| 0x10 | C43 ECE | C43_ECE | 1 | 1 | 1 | 0 |
| 0x11 | CD43 | CD43 | 1 | 1 | 1 | 0 |
| 0x12 | C43 USA | C43_USA | 1 | 0 | 0 | 0 |
| 0x13 | C43 JPN | C43_JPN | 1 | 0 | 0 | 0 |
| 0x14 | C43 OCN | C43_OCN | 1 | 0 | 0 | 0 |
| 0x15 | C44 | C44 | 1 | 1 | 1 | 0 |
| 0x16 | C24 BM | C24_BM | 1 | 1 | 1 | 1 |
| 0x17 | C42 | C42 | 1 | 1 | 1 | 0 |
| 0x18 | C42R-RD1 Euro | C42R-RD1_Euro | 1 | 1 | 1 | 0 |
| 0x19 | RC42-Tempest US | RC42-Tempest_US | 1 | 1 | 0 | 0 |
| 0x1A | RD42-Tempest Ja | RD42-Tempest_Ja | 1 | 1 | 0 | 0 |
| 0x1B | RC43-RD1 Jap | RC43-RD1_Jap | 1 | 1 | 0 | 0 |
| 0x1C | RC43-RD1 Euro | RC43-RD1_Euro | 1 | 1 | 1 | 0 |
| 0x1D | RC43-Tempest US | RC43-Tempest_US | 1 | 1 | 0 | 0 |
| 0x1E | RC43-Tempest Ja | RC43-Tempest_Ja | 1 | 1 | 0 | 0 |
| 0x1F | RC43-Tempest Eu | RC43-Tempest_Eu | 1 | 1 | 1 | 0 |
| 0x20 | RC43-38a Euro | RC43-38a_Euro | 1 | 1 | 1 | 0 |
| 0x21 | RC43-38a US | RC43-38a_US | 1 | 1 | 0 | 0 |
| 0x22 | RC43-38a Jap | RC43-38a_Jap | 1 | 1 | 0 | 0 |
| 0x23 | C43 US E38 | C43_US_E38 | 1 | 1 | 0 | 0 |
| 0x24 | C43 US E39 | C43_US_E39 | 1 | 1 | 0 | 0 |
| 0x25 | C43 US BM | C43_US_BM | 1 | 1 | 0 | 0 |
| 0x26 | CD43 E39 | CD43_E39 | 1 | 1 | 1 | 0 |
| 0x27 | C42 R50 | C42_R50 | 1 | 1 | 1 | 1 |
| 0x28 | C53 MID L30 | C53_MID_L30 | 1 | 1 | 1 | 1 |
| 0x29 | CD53 L30 | CD53_L30 | 1 | 1 | 1 | 1 |
| 0x2A | MD53 L30 | MD53_L30 | 1 | 1 | 1 | 1 |
| 0x2B | CD54 L30 | CD54_L30 | 1 | 1 | 1 | 1 |
| 0x2C | CD54 E39 | CD54_E39 | 1 | 1 | 1 | 1 |
| 0x2D | CD54 E46 | CD54_E46 | 1 | 1 | 1 | 1 |
| 0x2E | C53 R50 | C53_R50 | 1 | 1 | 1 | 1 |
| 0x2F | CD53 R50 | CD53_R50 | 1 | 1 | 1 | 1 |
| 0x30 | MD53 R50 | MD53_R50 | 1 | 1 | 1 | 1 |
| 0x31 | C53 MID E39 | C53_MID_E39 | 1 | 1 | 1 | 1 |
| 0x32 | BM53 | BM53 | 1 | 1 | 1 | 1 |
| 0x33 | C53 E46 | C53_E46 | 1 | 1 | 1 | 1 |
| 0x34 | MD53 E46 | MD53_E46 | 1 | 1 | 1 | 1 |
| 0x35 | CD53 E46 | CD53_E46 | 1 | 1 | 1 | 1 |
| 0x36 | CD53 E39 | CD53_E39 | 1 | 1 | 1 | 1 |
| 0x37 | MD53 E39 | MD53_E39 | 1 | 1 | 1 | 1 |
| 0x39 | BM54 | BM54 | 1 | 1 | 1 | 1 |
| 0x3A | C53 MIR E46 | C53_MIR_E46 | 1 | 1 | 1 | 1 |
| 0x3B | MIR E52 | MIR_E52 | 1 | 1 | 1 | 1 |
| 0x3C | C33B E39 CKD | C33B_E39_CKD | 1 | 1 | 1 | 1 |
| 0x3D | C33B E46 CKD | C33B_E46_CKD | 1 | 1 | 1 | 1 |
| 0x3E | BM24 MMC | BM24_MMC | 1 | 1 | 1 | 1 |
| 0x3F | C52 E39 | C52_E39 | 1 | 1 | 1 | 1 |
| 0x40 | C52 E53 | C52_E53 | 1 | 1 | 1 | 1 |
| 0x41 | C53 E39 | C53_E39 | 1 | 1 | 1 | 1 |
| 0x42 | C53 E53 | C53_E53 | 1 | 1 | 1 | 1 |
| 0x43 | CD62 E85 | CD62_E85 | 1 | 1 | 1 | 1 |
| 0x44 | MD53 CID | MD53_CID | 1 | 1 | 1 | 1 |
| 0xFF | unbekannte Radioart | unbekannte Radioart | 0 | 0 | 0 | 0 |

### LANDVAR

| HEX | LAND_TEXT |
| --- | --- |
| 0x00 | ECE |
| 0x01 | US |
| 0x02 | JAPAN |
| 0x03 | OCEANIEN |
| 0x04 | KANADA |
| 0xXY | UNBEKANNT |

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
