# RAD_83.PRG

## General

|  |  |
| --- | --- |
| File | RAD_83.PRG |
| Type | PRG |
| Jobs | 50 |
| Tables | 18 |
| Origin | BMW EI-41 Siglow |
| Revision | 1.004 |
| Author | BMW TI-431 Weber, Siemens EI-41 Niedermeier |
| ECU Comment | Radio |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Radio ZIS / BM / MIR  |  |  |
| ORIGIN | string | BMW EI-41 Siglow |  |  |
| REVISION | string | 1.004 |  |  |
| AUTHOR | string | BMW TI-431 Weber, Siemens EI-41 Niedermeier |  |  |
| COMMENT | string | Radio  |  |  |
| PACKAGE | string | 1.03 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

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

### DIAGNOSE_ENDE

Diagnose beenden

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

Switch radio ON/OFF

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | EIN/AUS,ON/OFF |

### HERSTELLDATEN_LESEN

Herstelldaten lesen

_No arguments._

### FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### COD_LESEN

Auslesen der Codierung Radio

_No arguments._

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

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

### STEUERN_RADIO_SCHALTEN

Ein-/Ausschalten des Radios KWP2000: $30 InputOutputControlByLocalIdentifier $0A inputOutputLocalIdentifier  - switch radio on or off $07 inputOutputControlParameter - ShortTermAdjustment Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SCHALTMODUS | string | Switch radio ON/OFF table TSchaltmodi NAME |

### STATUS_ANT_QFS

Auslesen des Status Quality Fieldstrength KWP2000: $30 InputOutputControlByLocalIdentifier $12 inputOutputLocalIdentifier  - status QFS $01 inputOutputControlParameter - reportCurrentState Modus  : Default

_No arguments._

### SER_NR_DOM_LESEN

Seriennummer 14-stellig lesen Neu für Entertainment-Komponenten ab 2003 Modus  : Default

_No arguments._

### STEUERN_RDS

Einstellen der RDS Optionen

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0 = AF aus, TP aus 1 = AF aus, TP ein 2 = AF ein, TP aus 3 = AF ein, TP ein |

### STEUERN_FOLDER_AND_TRACK_NUMBER

Select folder and track of internal drive

| Name | Type | Description |
| --- | --- | --- |
| FOLDER | int | Folder number |
| TRACK | int | Track Number |

### STEUERN_TRACK_NUMBER

select track of internal drive

| Name | Type | Description |
| --- | --- | --- |
| TRACK | int | Track Number |

### STATUS_CD_MD_CDC

responds drive status

_No arguments._

### STATUS_IBOC

responds IBOC status

_No arguments._

### STATUS_RDS

responds all RDS state of the radio

_No arguments._

### STATUS_NEXT_ENTSOURCE

responds current audio source

_No arguments._

### STEUERN_NEXT_ENTSOURCE

selection of audio source new for entertainment-devices from 2005 on Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| QUELLE | string | Quelle |

### STATUS_RADIO_SCHALTEN

ON/OFF status of the radio

_No arguments._

### STATUS_FREQUENZ

read frequency frequency in KHz 0 - 999999

_No arguments._

### STEUERN_VOLUMEAUDIO

Volume setting as hex-value from 0x00 to 0x3F

| Name | Type | Description |
| --- | --- | --- |
| ARG_LEVEL | string | setting of volume |
| ARG_AUDIO_SIGNAL | int | Default 0 (Entertainment) |

### STEUERN_AUDIOKANAELE

selects the speaker

| Name | Type | Description |
| --- | --- | --- |
| ARG_KANAL | int | speaker selection (0=all, 1=left front, 2=right front, 32=left back, 64=right back) |

### STATUS_ANT_DC

responds the status of antennea diversity

_No arguments._

### STEUERN_SINUSGENERATOR_EIN

activates the sinus generator:

| Name | Type | Description |
| --- | --- | --- |
| ARG_FREQUENZ | int | setting of frequency 40-20000 (CID) CD8x 20-17000 MIR, CD62, CD53 R50 0 = sinus generator off Default: 1000 |
| ARG_LEVEL | string | Volume setting as hex-value from 0x00 to 0x3F Default 0x10 |
| ARG_KANAL | int | speaker selection (0=all, 1=left front, 2=right front, 32=left back, 64=right back) Default: 0 |

### STEUERN_SINUSGENERATOR_AUS

stopps the sinus generator

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
| 0x72 | AISIN AW CO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0x81 | Tyco Electronics |
| 0x82 | Paragon AG |
| 0x83 | IEE S.A |
| 0x84 | TEMIC AUTOMOTIVE of NA |
| 0x85 | AKsys GmbH |
| 0x86 | META System |
| 0x87 | Hülsbeck & Fürst GmbH & Co KG |
| 0x88 | Mann & Hummel Automotive GmbH |
| 0x89 | Brose Fahrzeugteile GmbH & Co |
| 0x90 | Keihin |
| 0x91 | Vimercati S.p.A. |
| 0x92 | CRH |
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
| 0x00 | energy saving mode active |
| 0x01 | error CD-changer interface |
| 0x02 | error power-supply for antenna |
| 0x03 | Internal CD-drive: high temparature |
| 0x04 | Internal CD-drive: hardware problem |
| 0x05 | Internal CD-drive: read-error |
| 0xXY | unbekannter Fehlerort |

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
| 0x45 | CD53 E46 VDO | CD53_E46_VDO | 1 | 1 | 1 | 1 |
| 0x46 | CD53 E85 | CD53_E85 | 1 | 1 | 1 | 1 |
| 0x47 | MIR E85 | MIR_E85 | 1 | 1 | 1 | 1 |
| 0x48 | CD53 CID E85 | CD53_CID_E85 | 1 | 1 | 1 | 1 |
| 0x49 | MD53 CID E85 | MD53_CID_E85 | 1 | 1 | 1 | 1 |
| 0x4A | CD53 R50 VDO | CD53_R50_VDO | 1 | 1 | 1 | 1 |
| 0x50 | CD83 E85 VDO | CD83_E85_VDO | 1 | 1 | 1 | 1 |
| 0x51 | CD83 IBOC VDO | CD83_IBOC_VDO | 1 | 1 | 1 | 1 |
| 0x52 | CID-CD83 E85 VDO | CID-CD83_E85_VDO | 1 | 1 | 1 | 1 |
| 0x53 | CID-CD83 IBOC E85 VDO | CID-CD83_IBOC_E85_VDO | 1 | 1 | 1 | 1 |
| 0x54 | CID-MD83 E85 | CID-MD83_E85 | 1 | 1 | 1 | 1 |
| 0x55 | CID-CD84 E85 | CID-CD84_E85 | 1 | 1 | 1 | 1 |
| 0x56 | CD62 E85 | CD62_E85 | 1 | 1 | 1 | 1 |
| 0x57 | MIR E85 | MIR_E85 | 1 | 1 | 1 | 1 |
| 0x58 | CD53 R50 VDO | CD53_R50_VDO | 1 | 1 | 1 | 1 |
| 0xFF | unknown kind of radio | unknown kind of radio | 0 | 0 | 0 | 0 |

### LANDVAR

| HEX | LAND_TEXT |
| --- | --- |
| 0x00 | ECE |
| 0x01 | US |
| 0x02 | JAPAN |
| 0x03 | OCEANIEN |
| 0x04 | KANADA |
| 0xXY | UNBEKANNT |

### TSCHALTMODI

| NAME | MASKE | TEXT |
| --- | --- | --- |
| aus | 0x0B | Radio aus |
| ein | 0x0C | Radio ein |
| Aus | 0x0B | Radio aus |
| Ein | 0x0C | Radio ein |
| AUS | 0x0B | Radio aus |
| EIN | 0x0C | Radio ein |
| off | 0x0B | Radio aus |
| on | 0x0C | Radio ein |
| Off | 0x0B | Radio aus |
| On | 0x0C | Radio ein |
| OFF | 0x0B | Radio aus |
| ON | 0x0C | Radio ein |
| 0 | 0x0B | Radio aus |
| 1 | 0x0C | Radio ein |
| Fehler | 0xXY | Nicht definiert |

### TQUELLEN

| NUMMER | NAME_RAD | MASKE_RAD | NAME_SGBD | MASKE_SGBD |
| --- | --- | --- | --- | --- |
| 1 | NEXT | 0x00 | NEXT | 0x00 |
| 2 | NEXT | 0x00 | Next | 0x00 |
| 3 | NEXT | 0x00 | next | 0x00 |
| 4 | FM | 0x10 | FM | 0x01 |
| 5 | FM | 0x10 | Fm | 0x01 |
| 6 | FM | 0x10 | fm | 0x01 |
| 7 | WB | 0x11 | WB | 0x06 |
| 8 | WB | 0x11 | Wb | 0x06 |
| 9 | WB | 0x11 | wb | 0x06 |
| 10 | FM/IBOC | 0x14 | IBOC | 0x08 |
| 11 | FM/IBOC | 0x14 | Iboc | 0x08 |
| 12 | FM/IBOC | 0x14 | iboc | 0x08 |
| 13 | AM/MW | 0x20 | AM | 0x02 |
| 14 | AM/MW | 0x20 | Am | 0x02 |
| 15 | AM/MW | 0x20 | am | 0x02 |
| 16 | AM/LW | 0x21 | AM | 0x02 |
| 17 | AM/KW | 0x22 | AM | 0x02 |
| 18 | AM/IBOC | 0x24 | IBOC | 0x08 |
| 19 | CD intern | 0x30 | SCD | 0x03 |
| 20 | CD intern | 0x30 | SCd | 0x03 |
| 21 | CD intern | 0x30 | scd | 0x03 |
| 22 | CDC | 0x40 | CDC | 0x04 |
| 23 | CDC | 0x40 | Cdc | 0x04 |
| 24 | CDC | 0x40 | cdc | 0x04 |
| 25 | MD intern | 0x50 | MD | 0x05 |
| 26 | MD intern | 0x50 | Md | 0x05 |
| 27 | MD intern | 0x50 | md | 0x05 |
| 28 | SDARS | 0x74 | SDARS | 0x07 |
| 29 | SDARS | 0x74 | Sdars | 0x07 |
| 30 | SDARS | 0x74 | sdars | 0x07 |
| 31 | IBOC extern | 0x84 | IBOC | 0x08 |
| 32 | AUX | 0x90 | AUX | 0x09 |
| 33 | AUX | 0x90 | Aux | 0x09 |
| 34 | AUX | 0x90 | aux | 0x09 |
| 35 | DVD | 0xA0 | DVD | 0x0A |
| 36 | DVD | 0xA0 | Dvd | 0x0A |
| 37 | DVD | 0xA0 | dvd | 0x0A |
| 38 | TV | 0xB0 | TV | 0x0B |
| 39 | TV | 0xB0 | Tv | 0x0B |
| 40 | TV | 0xB0 | tv | 0x0B |
| 41 | AV-Aux | 0xC0 | AV-AUX | 0x0D |
| 42 | AV-Aux | 0xC0 | Av-Aux | 0x0D |
| 43 | AV-Aux | 0xC0 | av-aux | 0x0D |
| 44 | DAB | 0xD4 | DAB | 0x0E |
| 45 | DAB | 0xD4 | Dab | 0x0E |
| 46 | DAB | 0xD4 | dab | 0x0E |
| 47 | VIDEOTEXT | 0xFF | VIDEOTEXT | 0x0C |
| 48 | VIDEOTEXT | 0xFF | Videotext | 0x0C |
| 49 | VIDEOTEXT | 0xFF | videotext | 0x0C |
| 50 | NOT AVAILABLE | 0xFF | NOT AVAILABLE | 0xFF |

### TRDSSTATUS

| RDS_VALUE | RDS_STRING |
| --- | --- |
| 0 | AF-aus / TP-aus |
| 1 | AF-aus / TP-ein |
| 2 | AF-ein / TP-aus |
| 3 | AF-ein / TP-ein |

### TAUDIOVOLUME

| MASKE_LEVEL | MASKE_RAD |
| --- | --- |
| 0x00 | 0x00 |
| 0 | 0x00 |
| 0x01 | 0x01 |
| 1 | 0x01 |
| 0x02 | 0x02 |
| 2 | 0x02 |
| 0x03 | 0x03 |
| 3 | 0x03 |
| 0x04 | 0x04 |
| 4 | 0x04 |
| 0x05 | 0x05 |
| 5 | 0x05 |
| 0x06 | 0x06 |
| 6 | 0x06 |
| 0x07 | 0x07 |
| 7 | 0x07 |
| 0x08 | 0x08 |
| 8 | 0x08 |
| 0x09 | 0x09 |
| 9 | 0x09 |
| 0x0A | 0x10 |
| 10 | 0x10 |
| 0x0B | 0x11 |
| 11 | 0x11 |
| 0x0C | 0x12 |
| 12 | 0x12 |
| 0x0D | 0x13 |
| 13 | 0x13 |
| 0x0E | 0x14 |
| 14 | 0x14 |
| 0x0F | 0x15 |
| 15 | 0x15 |
| 0x10 | 0x16 |
| 16 | 0x16 |
| 0x11 | 0x17 |
| 17 | 0x17 |
| 0x12 | 0x18 |
| 18 | 0x18 |
| 0x13 | 0x19 |
| 19 | 0x19 |
| 0x14 | 0x20 |
| 20 | 0x20 |
| 0x15 | 0x21 |
| 21 | 0x21 |
| 0x16 | 0x22 |
| 22 | 0x22 |
| 0x17 | 0x23 |
| 23 | 0x23 |
| 0x18 | 0x24 |
| 24 | 0x24 |
| 0x19 | 0x25 |
| 25 | 0x25 |
| 0x1A | 0x26 |
| 26 | 0x26 |
| 0x1B | 0x27 |
| 27 | 0x27 |
| 0x1C | 0x28 |
| 28 | 0x28 |
| 0x1D | 0x29 |
| 29 | 0x29 |
| 0x1E | 0x30 |
| 30 | 0x30 |
| 0x1F | 0x31 |
| 31 | 0x31 |
| 0x20 | 0x32 |
| 32 | 0x32 |
| 0x21 | 0x33 |
| 33 | 0x33 |
| 0x22 | 0x34 |
| 34 | 0x34 |
| 0x23 | 0x35 |
| 35 | 0x35 |
| 0x24 | 0x36 |
| 36 | 0x36 |
| 0x25 | 0x37 |
| 37 | 0x37 |
| 0x26 | 0x38 |
| 38 | 0x38 |
| 0x27 | 0x39 |
| 39 | 0x39 |
| 0x28 | 0x40 |
| 40 | 0x40 |
| 0x29 | 0x41 |
| 41 | 0x41 |
| 0x2A | 0x42 |
| 42 | 0x42 |
| 0x2B | 0x43 |
| 43 | 0x43 |
| 0x2C | 0x44 |
| 44 | 0x44 |
| 0x2D | 0x45 |
| 45 | 0x45 |
| 0x2E | 0x46 |
| 46 | 0x46 |
| 0x2F | 0x47 |
| 47 | 0x47 |
| 0x30 | 0x48 |
| 48 | 0x48 |
| 0x31 | 0x49 |
| 49 | 0x49 |
| 0x32 | 0x50 |
| 50 | 0x50 |
| 0x33 | 0x51 |
| 51 | 0x51 |
| 0x34 | 0x52 |
| 52 | 0x52 |
| 0x35 | 0x53 |
| 53 | 0x53 |
| 0x36 | 0x54 |
| 54 | 0x54 |
| 0x37 | 0x55 |
| 55 | 0x55 |
| 0x38 | 0x56 |
| 56 | 0x56 |
| 0x39 | 0x57 |
| 57 | 0x57 |
| 0x3A | 0x58 |
| 58 | 0x58 |
| 0x3B | 0x59 |
| 59 | 0x59 |
| 0x3C | 0x60 |
| 60 | 0x60 |
| 0x3D | 0x61 |
| 61 | 0x61 |
| 0x3E | 0x62 |
| 62 | 0x62 |
| 0x3F | 0x63 |
| 63 | 0x63 |
| 0xFF | 0xFF |
