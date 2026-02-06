# LCM.prg

## General

|  |  |
| --- | --- |
| File | LCM.prg |
| Type | PRG |
| Jobs | 22 |
| Tables | 5 |
| Origin | BMW TP-422 Teepe |
| Revision | 1.6 |
| Author | BMW TP-422 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | LCM E38 / E39 |  |  |
| ORIGIN | string | BMW TP-422 Teepe |  |  |
| REVISION | string | 1.06 |  |  |
| AUTHOR | string | BMW TP-422 Teepe |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### IDENT

Default ident job

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

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int |  |

### CODIERUNG_LESEN

Default CODIERUNG_LESEN job

_No arguments._

### CODIERUNG_LESEN_ALLES

Default CODIERUNG_LESEN_ALLES job

| Name | Type | Description |
| --- | --- | --- |
| BLOCKNUMMER | int | angeforderter Datenblock |

### CODIERUNG_BLOCK_1_LESEN

Default CODIERUNG_BLOCK_1_LESEN job

_No arguments._

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
| DIMMWERT | int | gewuenschter Wert der Helligkeit [%] |

### STEUERN_LWR_POTI

STEUERN_LWR_POTI job

| Name | Type | Description |
| --- | --- | --- |
| POTI_WERT | int | gewuenschter Wert in [%] |

### FG_NR_LESEN

Default FG_NR_LESEN job

_No arguments._

### SIA_LESEN

Default SIA_LESEN job

_No arguments._

### KALTABFRAGE_SCHREIBEN

Default KALTABFRAGE_SCHREIBEN job

| Name | Type | Description |
| --- | --- | --- |
| KALTABFRAGE_BYTE | int | gewuenschter Wert der Kaltabfrage (0 bis 255) |

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
| 0x19 | Reserve Block 2 |
| 0x1E | Fehler am Treiberbaustein LWR |
| 0x1F | Ansteuerung Q21/Q22 LWR |
| 0x20 | Ansteuerung Q11/Q12 LWR |
| 0x21 | Reserve Block 3 |
| 0x28 | thermischer Oelsensor defekt |
| 0x29 | Fehler ?????, Block 4 |
| 0x2A | Fehler ?????, Block 4 |
| 0x32 | eine Klemme 30 fehlt |
| 0x33 | Klemme R fehlt |
| 0x34 | Klemme 15 fehlt |
| 0x35 | Fehler ?????, Block 5 |
| 0x36 | Fehler ?????, Block 5 |
| 0x3C | Fehler ?????, Block 6 |
| 0x3D | Fehler ?????, Block 6 |
| 0x3E | Fehler ?????, Block 6 |
| 0x3F | Fehler ?????, Block 6 |
| 0x40 | Fehler ?????, Block 6 |
| 0x46 | sporadischer Fehler beim Ansteuern des LWR-Treibers |
| 0x47 | Fehler ?????, Block 7 |
| 0x48 | Fehler ?????, Block 7 |
| 0x49 | Fehler ?????, Block 7 |
| 0x4A | Fehler ?????, Block 7 |
| 0xFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
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
| 0x5E | Funkschluessel Batterie |
| 0x5F | Kuehlwasser pruefen |
| 0x60 | Oelstand Motor TOG |
| 0x61 | Reifen defekt |
| 0x62 | Fehler ?????, Block 9 |
| 0x63 | Fehler ?????, Block 9 |
| 0x64 | Fehler ?????, Block 9 |
| 0x65 | Fehler ?????, Block 9 |
| 0x66 | Fehler ?????, Block 9 |
| 0x67 | Fehler ?????, Block 9 |
| 0x68 | Fehler ?????, Block 9 |
| 0x69 | Fehler ?????, Block 9 |
| 0x6A | Fehler ?????, Block 9 |
| 0x6B | Fehler ?????, Block 9 |
| 0x6C | Fehler ?????, Block 9 |
| 0x6D | Fehler ?????, Block 9 |
| 0x6E | Fehler ?????, Block A |
| 0xFF | unbekannter Fehlerort |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
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
| 0xFF | unbekannter Hersteller |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| Kl30A | 0 | 0x01 |
| Kl30B | 0 | 0x02 |
| Kl15 | 0 | 0x04 |
| KlR | 0 | 0x08 |
| S2_AL | 0 | 0x10 |
| S2_SL | 0 | 0x20 |
| S2_BLK_R | 0 | 0x40 |
| S2_BLK_L | 0 | 0x80 |
| S1_BLK_L | 1 | 0x01 |
| S1_BLK_R | 1 | 0x02 |
| S1_SL | 1 | 0x04 |
| S1_AL | 1 | 0x08 |
| S_NSL | 1 | 0x10 |
| S_NSW | 1 | 0x20 |
| S_FL | 1 | 0x40 |
| S1_BLS | 1 | 0x80 |
| ZSK | 2 | 0x01 |
| GKFA | 2 | 0x02 |
| S_LH | 2 | 0x04 |
| WBL | 2 | 0x08 |
| S2_BLS | 2 | 0x10 |
| KFN | 2 | 0x20 |
| PANZTUE | 2 | 0x40 |
| BRFN | 2 | 0x80 |
| LUFTAN | 3 | 0x01 |
| LOESCHAN | 3 | 0x02 |
| VGLESP | 3 | 0x04 |
| CARB | 3 | 0x08 |
| MOTNOT | 3 | 0x10 |
| ALARM | 3 | 0x20 |
| WWN | 3 | 0x40 |
| REIF_DEF | 3 | 0x80 |
| KZL_L | 4 | 0x04 |
| BL_L | 4 | 0x08 |
| BL_R | 4 | 0x10 |
| AL_R | 4 | 0x20 |
| AL_L | 4 | 0x40 |
| SL_LV | 5 | 0x01 |
| SL_LHI | 5 | 0x02 |
| NSW_L | 5 | 0x04 |
| RFS_L | 5 | 0x08 |
| FL_L | 5 | 0x10 |
| FL_R | 5 | 0x20 |
| NSW_R | 5 | 0x40 |
| NSL_R | 5 | 0x80 |
| LWR | 6 | 0x02 |
| KZL_R | 6 | 0x04 |
| SL_LH | 6 | 0x08 |
| BL_M | 6 | 0x10 |
| SL_RV | 6 | 0x20 |
| BLK_RV | 6 | 0x40 |
| BLK_LH | 6 | 0x80 |
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
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |
