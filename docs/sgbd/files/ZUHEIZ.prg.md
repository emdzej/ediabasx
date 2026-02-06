# ZUHEIZ.prg

## General

|  |  |
| --- | --- |
| File | ZUHEIZ.prg |
| Type | PRG |
| Jobs | 20 |
| Tables | 11 |
| Origin | BMW TI-430 Drexel |
| Revision | 1.13 |
| Author | BMW TI-430 Drexel, BMW VS-22 Volk |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zuheizer, Standheizung E38 E39 E46 E53 |  |  |
| ORIGIN | string | BMW TI-430 Drexel |  |  |
| REVISION | string | 1.13 |  |  |
| AUTHOR | string | BMW TI-430 Drexel, BMW VS-22 Volk |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.04 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### EEPROM_LESEN

Lesen des EEPROM Speichers Als Argumente werden die Adresse, die Anzahl der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0100 - 0x01FF |
| ANZAHL | int | 1 - 12 |

### EEPROM_SCHREIBEN

Beschreiben des EEPROM Speichers Als Argumente werden die Adresse, und das Datenbyte uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0100 - 0x01FF |
| BYTE | int | 0-255 bzw. 0x00-0xFF |

### SPEICHER_LESEN

Lesen des Speichers Als Argumente werden die Adresse, die Anzahl der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0000 - 0x001F Register 0x0020 - 0x004F ROM 0x0050 - 0x00FF RAM near 0x0100 - 0x01FF EEPROM 0x0250 - 0x02FF RAM far |
| ANZAHL | int | 1 - 12 |

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### CODIERUNG_SCHREIBEN

Codierdaten Schreiben Es muss immer ein Argument uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE | int | 0x00: EINSCHALTEN_UEBER_KBUS='ja' 0x01: EINSCHALTEN_UEBER_KBUS='nein' |

### STATUS_IO

Status lesen

_No arguments._

### STEUERN_KRAFTSTOFFPUMPE

Ansteuern der Kraftstoffpumpe

| Name | Type | Description |
| --- | --- | --- |
| ANSTEUERZEIT | int | Zeit    =  30 - 120 s default =  70 s |

### STEUERN_ZUHEIZER

Ansteuern des Zuheizers Der Zuheizer kann ein- bzw. ausgeschaltet werden.

| Name | Type | Description |
| --- | --- | --- |
| ZUHEIZER | string | 'EIN','AUS','1','0' |

### BRENNDAUER_LESEN

_No description._

_No arguments._

### STARTZAEHLER_LESEN

_No description._

_No arguments._

### STARTZAEHLER_SPEICHERN

_No description._

_No arguments._

### STEUERN_HEIZGERAET_ENTRIEGELN

Stoerverriegelung aufheben

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | ERROR_ADRESSE |
| 0x02 | ERROR_ANZAHL |
| 0x03 | ERROR_BYTE |
| 0x?? | ERROR_ZUHEIZER |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Gluehstift Flammwaechter |
| 0x01 | Temperaturfuehler |
| 0x02 | Verbrennungsluftgeblaese |
| 0x03 | Umwaelzpumpe |
| 0x04 | Dosierpumpe |
| 0x05 | Ansteuerung Fahrzeuggeblaese |
| 0x06 | Heizgeraet ueberhitzt |
| 0x07 | Unterspannungsabschaltung |
| 0x08 | Versorgungsspannung Signal zu gross |
| 0x09 | Steuergeraet defekt |
| 0x0A | Steuergeraet falsch codiert |
| 0x0B | Flammabbruch |
| 0x0C | keine Flammbildung |
| 0x0D | wiederholter Flammabbruch im Heizzyklus |
| 0x0E | K-Bus Stoerung |
| 0x0F | Aussentemperatur nicht verfuegbar |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x04 | Leitungsunterbrechung |
| 0x08 | unplausibler Wert, ungueltiger Arbeitsbereich |
| 0x40 | Fehler momentan vorhanden |
| 0x80 | sporadischer Fehler |
| 0xFF | unbekannte Fehlerart |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x40 | 0x00 | 0x80 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x01 | Betriebszustand | 0-n |
| 0x02 | Kuehlmitteltemperatur | Grad Celsius |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR |
| --- | --- | --- | --- | --- |
| 0x01 | 0x02 | 0x01 | 0x01 | 0x02 |

### ZUSTANDTEXTE

| NR_DIESEL | NR_BENZIN | ABKUERZUNG | TEXT |
| --- | --- | --- | --- |
| 0x35 | 0x81 | ABR11 | Ausbrennen 11 |
| 0x36 | 0x82 | ABR12 | Ausbrennen 12 |
| 0x37 | 0x83 | ABR13 | Ausbrennen 13 |
| 0x38 | ---- | ABR14 | Ausbrennen 14 |
| 0x49 | 0x8A | ABR15 | Ausbrennen 15 |
| 0x4A | ---- | ABR16 | Ausbrennen 16 |
| 0x20 | 0x68 | ABR22 | Ausbrennen 22 |
| 0x21 | 0x69 | ABR23 | Ausbrennen 23 |
| 0x22 | 0x70 | ABR24 | Ausbrennen 24 |
| 0x48 | 0x89 | ABR25 | Ausbrennen 25 |
| 0x1B | ---- | ABR31 | Ausbrennen 31 |
| 0x1C | 0x67 | ABR32 | Ausbrennen 32 |
| 0x39 | ---- | ABR41 | Ausbrennen 41 |
| 0x3A | ---- | ABR42 | Ausbrennen 42 |
| 0x3B | ---- | ABR51 | Ausbrennen 51 |
| 0x3C | ---- | ABR61 | Ausbrennen 61 |
| 0x3D | ---- | ABR71 | Ausbrennen 71 |
| 0x40 | 0x85 | ABSCH | Abschaltung |
| 0x00 | 0x50 | AUS | Auszustand |
| 0x18 | 0x64 | BBTL | Brennbetrieb TL |
| 0x15 | 0x61 | BBVL | Brennbetrieb VL |
| 0x05 | 0x54 | BFOE11 | Brennstoffoerdern 11 |
| 0x06 | ---- | BFOE12 | Brennstoffoerdern 12 |
| 0x07 | ---- | BFOE13 | Brennstoffoerdern 13 |
| 0x0A | ---- | BFOE14 | Brennstoffoerdern 14 |
| 0x08 | ---- | BFOE15 | Brennstoffoerdern 15 |
| ---- | 0x58 | BFOE21 | Brennstoffoerdern 21 |
| 0x1E | ---- | BFOE25 | Brennstoffoerdern 25 |
| 0x2A | 0x75 | BFOE33 | Brennstoffoerdern 33 |
| 0x2C | ---- | BFOE34 | Brennstoffoerdern 34 |
| 0x29 | 0x8E | BFOE42 | Brennstoffoerdern 42 |
| 0x01 | 0x51 | FLA1 | Flammwaechterabfrage 1 |
| 0x10 | 0x5B | FLA2 | Flammwaechterabfrage 2 |
| 0x43 | 0x8B | FLA3 | Flammwaechterabfrage 3 |
| 0x4B | 0x8C | FLA4 | Flammwaechterabfrage 4 |
| 0x0B | 0x55 | FLM1 | Flammwaechtermessphase 1 |
| 0x2B | 0x60 | FLM2 | Flammwaechtermessphase 2 |
| 0x2D | 0x76 | FLM3 | Flammwaechtermessphase 3 |
| ---- | 0x8F | FLM4 | Flammwaechtermessphase 4 |
| 0x31 | ---- | GBU | Gebleaseunterbrechung |
| 0x0C | 0x5C | GSR1 | Gluehstift Rampe 1 |
| 0x11 | 0x6D | GSR2 | Gluehstift Rampe 2 |
| 0x12 | 0x7A | GSR3 | Gluehstift Rampe 3 |
| ---- | 0x7B | GSR4 | Gluehstift Rampe 4 |
| 0x34 | 0x80 | HGV | Heizungsverriegelung |
| 0x3F | 0x84 | KUEG1 | Kuehlung 1 |
| 0x32 | 0x78 | KUEG2 | Kuehlung 2 |
| 0x44 | 0x71 | KUEG3 | Kuehlung 3 |
| 0x45 | 0x73 | KUEG4 | Kuehlung 4 |
| 0x19 | 0x65 | LTV1 | Lastwechsel TL-VL1 |
| 0x1A | 0x66 | LTV2 | Lastwechsel TL-VL2 |
| 0x16 | 0x62 | LVT1 | Lastwechsel VL-TL1 |
| 0x17 | 0x63 | LVT2 | Lastwechsel VL-TL2 |
| 0x23 | ---- | RP1 | Regelpause 1 |
| 0x24 | 0x72 | RP2 | Regelpause 2 |
| 0x47 | 0x88 | RUA | Ruhezeitabspeicherung |
| 0x33 | 0x79 | STV | Stoerverriegelung |
| 0x09 | ---- | STZ | Stabilisierungszeit |
| 0x04 | 0x53 | VFOE1 | Vorfoerdern 1 |
| 0x28 | ---- | VFOE2 | Vorfoerdern 2 |
| 0x02 | 0x52 | VGL1 | Vorgluehen 1 |
| 0x46 | 0x59 | VGL10 | Vorgluehen 10 |
| 0x03 | 0x5A | VGL11 | Vorgluehen 11 |
| 0x1D | ---- | VGL21 | Vorgluehen 21 |
| ---- | 0x56 | VGL2 | Vorgluehen 2 |
| ---- | 0x57 | VGL3 | Vorgluehen 3 |
| 0x25 | 0x74 | VGL4 | Vorgluehen 4 |
| 0x26 | 0x8D | VGL5 | Vorgluehen 5 |
| 0x27 | ---- | VGL6 | Vorgluehen 6 |
| 0x30 | 0x77 | WPE | Wasserpumpe EIN |
| 0x?? | 0x?? | ??? | unbekannter Zustand |

### WASSERTEMPERATUR

| WERT | DEZIMALWERT | TEMPERATUR |
| --- | --- | --- |
| 0x00 |   0 | 150.0 |
| 0x01 |   1 | 150.0 |
| 0x02 |   2 | 150.0 |
| 0x03 |   3 | 150.0 |
| 0x04 |   4 | 150.0 |
| 0x05 |   5 | 150.0 |
| 0x06 |   6 | 150.0 |
| 0x07 |   7 | 150.0 |
| 0x08 |   8 | 150.0 |
| 0x09 |   9 | 150.0 |
| 0x0A |  10 | 150.0 |
| 0x0B |  11 | 150.0 |
| 0x0C |  12 | 150.0 |
| 0x0D |  13 | 150.0 |
| 0x0E |  14 | 150.0 |
| 0x0F |  15 | 145.0 |
| 0x10 |  16 | 142.5 |
| 0x11 |  17 | 140.0 |
| 0x12 |  18 | 137.5 |
| 0x13 |  19 | 135.0 |
| 0x14 |  20 | 132.5 |
| 0x15 |  21 | 130.0 |
| 0x16 |  22 | 128.3 |
| 0x17 |  23 | 126.7 |
| 0x18 |  24 | 125.0 |
| 0x19 |  25 | 123.3 |
| 0x1A |  26 | 121.7 |
| 0x1B |  27 | 120.0 |
| 0x1C |  28 | 118.3 |
| 0x1D |  29 | 116.7 |
| 0x1E |  30 | 115.0 |
| 0x1F |  31 | 113.8 |
| 0x20 |  32 | 112.5 |
| 0x21 |  33 | 111.3 |
| 0x22 |  34 | 110.0 |
| 0x23 |  35 | 108.8 |
| 0x24 |  36 | 107.5 |
| 0x25 |  37 | 106.3 |
| 0x26 |  38 | 105.0 |
| 0x27 |  39 | 103.8 |
| 0x28 |  40 | 102.5 |
| 0x29 |  41 | 101.3 |
| 0x2A |  42 | 100.0 |
| 0x2B |  43 |  99.0 |
| 0x2C |  44 |  98.0 |
| 0x2D |  45 |  97.0 |
| 0x2E |  46 |  96.0 |
| 0x2F |  47 |  95.0 |
| 0x30 |  48 |  94.2 |
| 0x31 |  49 |  93.3 |
| 0x32 |  50 |  92.5 |
| 0x33 |  51 |  91.7 |
| 0x34 |  52 |  90.8 |
| 0x35 |  53 |  90.0 |
| 0x36 |  54 |  89.3 |
| 0x37 |  55 |  88.6 |
| 0x38 |  56 |  87.9 |
| 0x39 |  57 |  87.1 |
| 0x3A |  58 |  86.4 |
| 0x3B |  59 |  85.7 |
| 0x3C |  60 |  85.0 |
| 0x3D |  61 |  84.3 |
| 0x3E |  62 |  83.6 |
| 0x3F |  63 |  82.9 |
| 0x40 |  64 |  82.1 |
| 0x41 |  65 |  81.4 |
| 0x42 |  66 |  80.7 |
| 0x43 |  67 |  80.0 |
| 0x44 |  68 |  79.4 |
| 0x45 |  69 |  78.8 |
| 0x46 |  70 |  78.1 |
| 0x47 |  71 |  77.5 |
| 0x48 |  72 |  76.9 |
| 0x49 |  73 |  76.3 |
| 0x4A |  74 |  75.6 |
| 0x4B |  75 |  75.0 |
| 0x4C |  76 |  74.4 |
| 0x4D |  77 |  73.8 |
| 0x4E |  78 |  73.1 |
| 0x4F |  79 |  72.5 |
| 0x50 |  80 |  71.9 |
| 0x51 |  81 |  71.3 |
| 0x52 |  82 |  70.6 |
| 0x53 |  83 |  70.0 |
| 0x54 |  84 |  69.4 |
| 0x55 |  85 |  68.9 |
| 0x56 |  86 |  68.3 |
| 0x57 |  87 |  67.8 |
| 0x58 |  88 |  67.2 |
| 0x59 |  89 |  66.7 |
| 0x5A |  90 |  66.1 |
| 0x5B |  91 |  65.6 |
| 0x5C |  92 |  65.0 |
| 0x5D |  93 |  64.5 |
| 0x5E |  94 |  64.0 |
| 0x5F |  95 |  63.5 |
| 0x60 |  96 |  63.0 |
| 0x61 |  97 |  62.5 |
| 0x62 |  98 |  62.0 |
| 0x63 |  99 |  61.5 |
| 0x64 | 100 |  61.0 |
| 0x65 | 101 |  60.5 |
| 0x66 | 102 |  60.0 |
| 0x67 | 103 |  59.5 |
| 0x68 | 104 |  59.0 |
| 0x69 | 105 |  58.5 |
| 0x6A | 106 |  58.0 |
| 0x6B | 107 |  57.5 |
| 0x6C | 108 |  57.0 |
| 0x6D | 109 |  56.5 |
| 0x6E | 110 |  56.0 |
| 0x6F | 111 |  55.5 |
| 0x70 | 112 |  55.0 |
| 0x71 | 113 |  54.5 |
| 0x72 | 114 |  54.1 |
| 0x73 | 115 |  53.6 |
| 0x74 | 116 |  53.2 |
| 0x75 | 117 |  52.7 |
| 0x76 | 118 |  52.3 |
| 0x77 | 119 |  51.8 |
| 0x78 | 120 |  51.4 |
| 0x79 | 121 |  50.9 |
| 0x7A | 122 |  50.5 |
| 0x7B | 123 |  50.0 |
| 0x7C | 124 |  49.5 |
| 0x7D | 125 |  49.1 |
| 0x7E | 126 |  48.6 |
| 0x7F | 127 |  48.2 |
| 0x80 | 128 |  47.7 |
| 0x81 | 129 |  47.3 |
| 0x82 | 130 |  46.8 |
| 0x83 | 131 |  46.4 |
| 0x84 | 132 |  45.9 |
| 0x85 | 133 |  45.5 |
| 0x86 | 134 |  45.0 |
| 0x87 | 135 |  44.5 |
| 0x88 | 136 |  44.1 |
| 0x89 | 137 |  43.6 |
| 0x8A | 138 |  43.2 |
| 0x8B | 139 |  42.7 |
| 0x8C | 140 |  42.3 |
| 0x8D | 141 |  41.8 |
| 0x8E | 142 |  41.4 |
| 0x8F | 143 |  40.9 |
| 0x90 | 144 |  40.5 |
| 0x91 | 145 |  40.0 |
| 0x92 | 146 |  39.5 |
| 0x93 | 147 |  39.1 |
| 0x94 | 148 |  38.6 |
| 0x95 | 149 |  38.2 |
| 0x96 | 150 |  37.7 |
| 0x97 | 151 |  37.3 |
| 0x98 | 152 |  36.8 |
| 0x99 | 153 |  36.4 |
| 0x9A | 154 |  35.9 |
| 0x9B | 155 |  35.5 |
| 0x9C | 156 |  35.0 |
| 0x9D | 157 |  34.5 |
| 0x9E | 158 |  34.1 |
| 0x9F | 159 |  33.6 |
| 0xA0 | 160 |  33.2 |
| 0xA1 | 161 |  32.7 |
| 0xA2 | 162 |  32.3 |
| 0xA3 | 163 |  31.8 |
| 0xA4 | 164 |  31.4 |
| 0xA5 | 165 |  30.9 |
| 0xA6 | 166 |  30.5 |
| 0xA7 | 167 |  30.0 |
| 0xA8 | 168 |  29.5 |
| 0xA9 | 169 |  29.0 |
| 0xAA | 170 |  28.5 |
| 0xAB | 171 |  28.0 |
| 0xAC | 172 |  27.5 |
| 0xAD | 173 |  27.0 |
| 0xAE | 174 |  26.5 |
| 0xAF | 175 |  26.0 |
| 0xB0 | 176 |  25.5 |
| 0xB1 | 177 |  25.0 |
| 0xB2 | 178 |  24.5 |
| 0xB3 | 179 |  24.0 |
| 0xB4 | 180 |  23.5 |
| 0xB5 | 181 |  23.0 |
| 0xB6 | 182 |  22.5 |
| 0xB7 | 183 |  22.0 |
| 0xB8 | 184 |  21.5 |
| 0xB9 | 185 |  21.0 |
| 0xBA | 186 |  20.5 |
| 0xBB | 187 |  20.0 |
| 0xBC | 188 |  19.4 |
| 0xBD | 189 |  18.9 |
| 0xBE | 190 |  18.3 |
| 0xBF | 191 |  17.8 |
| 0xC0 | 192 |  17.2 |
| 0xC1 | 193 |  16.7 |
| 0xC2 | 194 |  16.1 |
| 0xC3 | 195 |  15.6 |
| 0xC4 | 196 |  15.0 |
| 0xC5 | 197 |  14.4 |
| 0xC6 | 198 |  13.8 |
| 0xC7 | 199 |  13.1 |
| 0xC8 | 200 |  12.5 |
| 0xC9 | 201 |  11.9 |
| 0xCA | 202 |  11.3 |
| 0xCB | 203 |  10.6 |
| 0xCC | 204 |  10.0 |
| 0xCD | 205 |   9.3 |
| 0xCE | 206 |   8.6 |
| 0xCF | 207 |   7.9 |
| 0xD0 | 208 |   7.1 |
| 0xD1 | 209 |   6.4 |
| 0xD2 | 210 |   5.7 |
| 0xD3 | 211 |   5.0 |
| 0xD4 | 212 |   4.2 |
| 0xD5 | 213 |   3.3 |
| 0xD6 | 214 |   2.5 |
| 0xD7 | 215 |   1.7 |
| 0xD8 | 216 |   0.8 |
| 0xD9 | 217 |   0.0 |
| 0xDA | 218 |  -1.0 |
| 0xDB | 219 |  -2.0 |
| 0xDC | 220 |  -3.0 |
| 0xDD | 221 |  -4.0 |
| 0xDE | 222 |  -5.0 |
| 0xDF | 223 |  -6.0 |
| 0xE0 | 224 |  -7.0 |
| 0xE1 | 225 |  -8.0 |
| 0xE2 | 226 |  -9.0 |
| 0xE3 | 227 | -10.0 |
| 0xE4 | 228 | -11.7 |
| 0xE5 | 229 | -13.3 |
| 0xE6 | 230 | -15.0 |
| 0xE7 | 231 | -16.3 |
| 0xE8 | 232 | -17.5 |
| 0xE9 | 233 | -18.8 |
| 0xEA | 234 | -20.0 |
| 0xEB | 235 | -22.5 |
| 0xEC | 236 | -25.0 |
| 0xED | 237 | -27.5 |
| 0xEE | 238 | -30.0 |
| 0xEF | 239 | -32.5 |
| 0xF0 | 240 | -35.0 |
| 0xF1 | 241 | -40.0 |
| 0xF2 | 242 | -40.0 |
| 0xF3 | 243 | -40.0 |
| 0xF4 | 244 | -40.0 |
| 0xF5 | 245 | -40.0 |
| 0xF6 | 246 | -40.0 |
| 0xF7 | 247 | -40.0 |
| 0xF8 | 248 | -40.0 |
| 0xF9 | 249 | -40.0 |
| 0xFA | 250 | -40.0 |
| 0xFB | 251 | -40.0 |
| 0xFC | 252 | -40.0 |
| 0xFD | 253 | -40.0 |
| 0xFE | 254 | -40.0 |
| 0xFF | 255 | -40.0 |
