# LCM_IV.prg

## General

|  |  |
| --- | --- |
| File | LCM_IV.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 8 |
| Origin | BMW TI-432 Pichler |
| Revision | 3.00 |
| Author | BMW TI-433 Teepe, BMW TI-435 Drexel, LEAR C.Scheler, W.Hoffmann, ESG EI-63 Ramisch |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Lichtmodul LCM_IV E38 / E39 / E52 / E53 |  |  |
| ORIGIN | string | BMW TI-432 Pichler |  |  |
| REVISION | string | 3.00 |  |  |
| AUTHOR | string | BMW TI-433 Teepe, BMW TI-435 Drexel, LEAR C.Scheler, W.Hoffmann, ESG EI-63 Ramisch |  |  |
| COMMENT | string |  |  |  |
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

### FS_ZAEHLER

Default fs_zaehler job

_No arguments._

### IS_LESEN

infospeicherlesen job

_No arguments._

### FS_LESEN

fs_lesen job

_No arguments._

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### STATUS_LESEN

STATUS_LESEN job

_No arguments._

### STATUS_LESEN_LSS

Default ident job

_No arguments._

### STEUERN_IO

Ansteuern mehrerer (maximal 15) digitalen Ein- Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
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

### STATUS_VORGEBEN

Ansteuern mehrerer (maximal 15) digitalen Ein- Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
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

### STEUERN_DIMMER

STATUS_VORGEBEN_DIMMER job

| Name | Type | Description |
| --- | --- | --- |
| DIMMWERT | int | gewuenschter Wert der Helligkeit [%] |

### STEUERN_LWR_POTI

STATUS_VORGEBEN_LWR_POTI job

| Name | Type | Description |
| --- | --- | --- |
| POTI_WERT | int | gewuenschter Wert in [%] |

### STEUERN_LICHT_EIN

_No description._

_No arguments._

### STEUERN_SELBSTTEST

STATUS_VORGEBEN_SELBSTTEST job

_No arguments._

### HERSTELLER_LESEN

Default ident job

_No arguments._

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

### SIA_LESEN

Default SIA_LESEN job

_No arguments._

### C_FG_LESEN

Auslesen der Fahrgestellnummer aus der LCM

_No arguments._

### C_FG_AUFTRAG

Schreiben der 7-stelligen Fahrgestellnummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (7stellig) |

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

### CODIERUNG_LESEN_ALLES

Default CODIERUNG_LESEN_ALLES job

| Name | Type | Description |
| --- | --- | --- |
| BLOCKNUMMER | int | angeforderter Datenblock |

### STATUS_BFD

Status der zusätzl. Brake-Force-Display - Lampen

_No arguments._

### STEUERN_BFD

Steuern der zusätzl. Brake-Force-Display - Lampen

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Ort der BFD-Lampe: "L" -> links (left) "R" -> rechts (right), "B" -> beide (both) |

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0A | RAM-Fehler des Mikro-Prozessors |
| 0x0B | ROM-Fehler des Mikro-Prozessors |
| 0x0C | EEPROM-Fehler des Mikro-Prozessors |
| 0x0D | redundante Eingaenge melden Widerspruch |
| 0x0E | PowerMOS-Statusleitung 1 staendig aktiv |
| 0x0F | PowerMOS-Statusleitung 2 staendig aktiv |
| 0x10 | PowerMOS-Statusleitung 3 staendig aktiv |
| 0x11 | Reserve Block 1 |
| 0x14 | Bremslichtschalter, Leitung offen |
| 0x15 | Bremslichtschalter, Kurzschluss gegen Masse |
| 0x16 | LWR-Potentiometer offen |
| 0x17 | Dimmer-Potentiometer offen |
| 0x18 | Verbindung zum AHM ist gestoert |
| 0x19 | BLK-Schalter / Leitung, Kurzschluss gegen Masse |
| 0x1A | FL-/LH-Schalter, Kurzschluss gegen Masse |
| 0x1B | Reserve Block 2 |
| 0x1C | Reserve Block 2 |
| 0x1D | Reserve Block 2 |
| 0x1E | Fehler am Treiberbaustein LWR |
| 0x1F | Ansteuerung Q21/Q22 LWR |
| 0x20 | Ansteuerung Q11/Q12 LWR |
| 0x21 | Reserve Block 3 |
| 0x28 | thermischer Oelsensor defekt |
| 0x29 | Reserve Block 4 |
| 0x2A | Reserve Block 4 |
| 0xFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x32 | eine Klemme 30 fehlt |
| 0x33 | Klemme R fehlt |
| 0x34 | Klemme 15 fehlt |
| 0x35 | Reserve Block 5 |
| 0x36 | Reserve Block 5 |
| 0x3C | Fehler Kommunikation mit Regen/Licht - Sensor |
| 0x3D | Energiesparmode aktiv |
| 0x3E | Fehler ALC Steuergerät |
| 0x3F | Reserve Block 6 |
| 0x40 | Reserve Block 6 |
| 0x46 | sporadischer Fehler beim Ansteuern des LWR-Treibers |
| 0x47 | Reserve Block 7 |
| 0x48 | Reserve Block 7 |
| 0x49 | Reserve Block 7 |
| 0x50 | EEPROM CCM |
| 0x51 | Panzertuer offen |
| 0x52 | Bremsfluessigkeit pruefen |
| 0x53 | Oeldruck Motor |
| 0x54 | Kuehlwassertemperatur |
| 0x55 | Katalysator zu heiss |
| 0x56 | Einspritzanlage |
| 0x57 | Niveauregulierung |
| 0x58 | Motornotprogramm |
| 0x59 | Getriebenotprogramm |
| 0x5A | Bremsbelaege |
| 0x5B | Waschwasserstand |
| 0x5C | Luftanlage pruefen |
| 0x5D | Feuerloeschanlage pruefen |
| 0x5E | Funkschluessel-Batterie |
| 0x5F | Kuehlwasser pruefen |
| 0x60 | Oelstand Motor, TOG |
| 0x61 | Reifen defekt |
| 0x62 | SBE-MRS-Fehler |
| 0x63 | Getriebe ueberhitzt |
| 0x64 | Reserve Block 9 |
| 0x65 | Reserve Block 9 |
| 0x66 | Reserve Block 9 |
| 0x67 | Reserve Block 9 |
| 0x68 | Reserve Block 9 |
| 0x69 | Reserve Block 9 |
| 0x6A | Reserve Block 9 |
| 0x6B | Reserve Block 9 |
| 0x6C | Reserve Block 9 |
| 0x6D | Reserve Block 9 |
| 0x6E | Reserve Block A |
| 0x78 | Abblendlicht links defekt |
| 0x79 | Abblendlicht rechts defekt |
| 0x7A | Standlicht vorne links defekt |
| 0x7B | Standlicht vorne rechts defekt |
| 0x7C | Blinker vorne links defekt |
| 0x7D | Blinker vorne rechts defekt |
| 0x7E | Nebelscheinwerfer rechts defekt |
| 0x7F | Nebelscheinwerfer links defekt |
| 0x80 | Fernlicht links defekt |
| 0x81 | Fernlicht rechts defekt |
| 0x8C | Ruecklicht links defekt |
| 0x8D | Ruecklicht rechts defekt |
| 0x8E | Ruecklicht innen links defekt |
| 0x8F | Ruecklicht innen rechts defekt |
| 0x90 | Blinker hinten links defekt |
| 0x91 | Blinker hinten rechts defekt |
| 0x92 | Bremslicht links defekt |
| 0x93 | Bremslicht rechts defekt |
| 0x94 | Nebelschlusslicht links defekt |
| 0x95 | Nebelschlusslicht rechts defekt |
| 0x96 | Rueckfahrscheinwerfer links defekt |
| 0x97 | Rueckfahrscheinwerfer rechts defekt |
| 0x98 | Bremslicht mitte defekt |
| 0x99 | Kennzeichenlicht defekt |
| 0xFF | unbekannter Fehlerort |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| Kl30A | 0 | 0x01 |
| LOESCHAN | 0 | 0x02 |
| VGLESP | 0 | 0x04 |
| CARB | 0 | 0x10 |
| KlR | 0 | 0x40 |
| Kl30B | 0 | 0x80 |
| ZSK | 1 | 0x01 |
| GKFA | 1 | 0x02 |
| S_LH | 1 | 0x04 |
| WBL | 1 | 0x10 |
| KFN | 1 | 0x20 |
| PANZTUE | 1 | 0x40 |
| BRFN | 1 | 0x80 |
| S_BLS | 2 | 0x01 |
| S_FL | 2 | 0x02 |
| S_NSW | 2 | 0x04 |
| S_NSL | 2 | 0x10 |
| S_SL | 2 | 0x20 |
| S_BLK_R | 2 | 0x40 |
| S_BLK_L | 2 | 0x80 |
| LUFTAN | 3 | 0x01 |
| ALARM | 3 | 0x02 |
| WWN | 3 | 0x04 |
| S2_AL | 3 | 0x08 |
| S1_AL | 3 | 0x10 |
| Kl15 | 3 | 0x20 |
| MOTNOT | 3 | 0x40 |
| REIF_DEF | 3 | 0x80 |
| KZL_L | 4 | 0x04 |
| BL_L | 4 | 0x08 |
| BL_R | 4 | 0x10 |
| FL_R | 4 | 0x20 |
| FL_L | 4 | 0x40 |
| BLK_LZ | 4 | 0x80 |
| SL_LV | 5 | 0x01 |
| SL_LHI | 5 | 0x02 |
| NSW_L | 5 | 0x04 |
| RFS_L | 5 | 0x08 |
| AL_L | 5 | 0x10 |
| AL_R | 5 | 0x20 |
| NSW_R | 5 | 0x40 |
| NSL_R | 5 | 0x80 |
| LWR | 6 | 0x02 |
| KZL_R | 6 | 0x04 |
| SL_LH | 6 | 0x08 |
| BL_M | 6 | 0x10 |
| SL_RV | 6 | 0x20 |
| BLK_RV | 6 | 0x40 |
| BLK_LH | 6 | 0x80 |
| BLK_RZ | 7 | 0x01 |
| BLK_RH | 7 | 0x02 |
| NSL_L | 7 | 0x04 |
| SL_RHI | 7 | 0x08 |
| SL_RH | 7 | 0x10 |
| BLK_LV | 7 | 0x40 |
| RFS_R | 7 | 0x80 |
| NOTAKTIV | 8 | 0x01 |
| KL58_EIN | 8 | 0x02 |
| WBLSUCH_EIN | 8 | 0x04 |
| LSSUCH_EIN | 8 | 0x08 |
| NSL_AH_EIN | 8 | 0x10 |
| RFS_AH_EIN | 8 | 0x20 |
| SLEEPMODE | 8 | 0x40 |
| XXX | Y | Z |

### STEUERN_E52

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| Kl30A | 0 | 0x01 |
| NEON_BLK_VL | 0 | 0x02 |
| NEON_BLK_HL | 0 | 0x04 |
| NEON_BL_L | 0 | 0x10 |
| KlR | 0 | 0x40 |
| Kl30B | 0 | 0x80 |
| ZSK | 1 | 0x01 |
| GKFA | 1 | 0x02 |
| S_LH | 1 | 0x04 |
| WBL | 1 | 0x10 |
| NEON_BLK_RH | 1 | 0x20 |
| PANZTUE | 1 | 0x40 |
| BRFN | 1 | 0x80 |
| S_BLS | 2 | 0x01 |
| S_FL | 2 | 0x02 |
| S_NSW | 2 | 0x04 |
| S_NSL | 2 | 0x10 |
| S_SL | 2 | 0x20 |
| S_BLK_R | 2 | 0x40 |
| S_BLK_L | 2 | 0x80 |
| NEON_BLK_VR | 3 | 0x01 |
| ALARM | 3 | 0x02 |
| WWN | 3 | 0x04 |
| S2_AL | 3 | 0x08 |
| S1_AL | 3 | 0x10 |
| Kl15 | 3 | 0x20 |
| NEON_BL_R | 3 | 0x40 |
| REIF_DEF | 3 | 0x80 |
| KZL_L | 4 | 0x04 |
| BL_L | 4 | 0x08 |
| BL_R | 4 | 0x10 |
| FL_R | 4 | 0x20 |
| FL_L | 4 | 0x40 |
| Z_BLK_L | 5 | 0x01 |
| TWL_L | 5 | 0x02 |
| SL_LV | 5 | 0x04 |
| SIGNAL_RFS | 5 | 0x08 |
| AL_L | 5 | 0x10 |
| AL_R | 5 | 0x20 |
| BLK_RV | 5 | 0x40 |
| LWR | 6 | 0x02 |
| KZL_R | 6 | 0x04 |
| SL_LH | 6 | 0x08 |
| BL_M | 6 | 0x10 |
| Z_BLK_R | 6 | 0x20 |
| SL_RV | 6 | 0x40 |
| BLK_LH | 6 | 0x80 |
| BLK_RH | 7 | 0x02 |
| NSL_L | 7 | 0x04 |
| TWL_R | 7 | 0x08 |
| SL_RH | 7 | 0x10 |
| BLK_LV | 7 | 0x40 |
| RFS_R | 7 | 0x80 |
| NOTAKTIV | 8 | 0x01 |
| KL58_EIN | 8 | 0x02 |
| WBLSUCH_EIN | 8 | 0x04 |
| LSSUCH_EIN | 8 | 0x08 |
| NSL_AH_EIN | 8 | 0x10 |
| RFS_AH_EIN | 8 | 0x20 |
| SLEEPMODE | 8 | 0x40 |
| XXX | Y | Z |

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
