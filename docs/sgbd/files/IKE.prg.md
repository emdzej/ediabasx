# IKE.prg

## General

|  |  |
| --- | --- |
| File | IKE.prg |
| Type | PRG |
| Jobs | 34 |
| Tables | 10 |
| Origin | BMW TI-433 Dennert |
| Revision | 2.12 |
| Author | BMW TP-422 Zender, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Instrumenten-Kombination IKE |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 2.12 |  |  |
| AUTHOR | string | BMW TP-422 Zender, BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer IKE

_No arguments._

### IDENT

Default ident job

_No arguments._

### PRUEFSTEMPEL_LESEN

Default pruefstempel_lesen job

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### DIAGNOSE_AUFRECHT

Fortsetzen der Diagnose

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### RESET_IKE

SG Reset ausloesen

_No arguments._

### SELBSTTEST

SG - Selbsttest ausloesen

_No arguments._

### STEUERN_SELBSTTEST

SG - Selbsttest ausloesen

_No arguments._

### FS_LESEN

Fehlerspeicherinhalt aus SG lesen

_No arguments._

### AIF_GWSZ_LESEN

Gesamtwegstreckenzaehlers aus Anwenderinfofeld auslesen

_No arguments._

### GWSZ_MINUS_OFFSET_LESEN

Gesamtwegstreckenzaehler aus Anwenderinfofeld auslesen und Offset abziehen

_No arguments._

### AIF_FG_NR_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### AIF_SIA_DATEN_LESEN

Anwenderinfofeld Block 3 auslesen

_No arguments._

### AIF_ZENTRALCODE_LESEN

Anwenderinfofeld Block 4 auslesen

_No arguments._

### AIF_DATUM_FZ_LESEN

Auslesen des Herstelldatums des FZ

_No arguments._

### STEUERN_ANZEIGE

Anzeigenkomponenten steuern

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Zu steuernde Komponente, siehe table Komponenten |
| WERT | int | Winkelgrade im Bereich von (10-90)Grad, Mit Spruengen von mehr als 90 Grad sollten die Messwerke nicht beaufschlagt werden |

### STEUERN_TACHO_A

TACHO_A steuern

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | Geschwindigkeit in km/h, Wertebereich (3 bis 300) km/h |

### SIA_RESET

Ruecksetzen der Service-Intervall-Anzeige

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | Oel/Weg/AG-Oel oder Zeit - Reset |
| ARG2 | string | Oel/Weg/AG-Oel oder Zeit - Reset |
| ARG3 | string | Oel/Weg/AG-Oel oder Zeit - Reset |
| ARG4 | string | Oel/Weg/AG-Oel oder Zeit - Reset |

### STEUERN_GONG

Gong1, Gong2 oder Gong3 steuern

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Zu steuernde Komponente, siehe table Komponenten |

### STEUERN_GONG3

Anzeigenkomponenten steuern

_No arguments._

### STEUERN_GONG123

Gong1, Gong2 und Gong3 nacheinander fuer 2 sec. ansteuern

_No arguments._

### STEUERN_LEUCHTE

Leuchten in der Anzeigeeinheit steuern

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | Angesteuerte Leuchte, siehe table Leuchten1 |
| ORT2 | string | Angesteuerte Leuchte, siehe table Leuchten2 |
| ORT3 | string | Angesteuerte Leuchte, siehe table Leuchten3 |

### STATUS_IO_LESEN

Eingangs- und Ausgangsstati lesen

_No arguments._

### STATUS_ANALOG_LESEN

Spezielle Eingaenge lesen

_No arguments._

### STATUS_TANKINHALT_LESEN

Tankinhalt lesen

_No arguments._

### RAM_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| RAM_TYPE | string | "INTERN" oder "EXTERN" |
| ADRESSE | string | Hexwert (0x000) der Adresse ,ab der das Ram gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### ROM_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x0000) der Adresse ,ab der das Rom gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### EEPROM_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00) der Adresse ,ab der das EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### GWSZ_RESET

_No description._

_No arguments._

### PROD_DATUM_LESEN

_No description._

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0x02 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x02 |
| AG_OEL_RESET | 0x03 |
| ZEIT_RESET | 0x04 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xCD | Signal KVA1 |
| 0xDA | Signal KVA2 |
| 0xC1 | Signal TWEG+ (Tacho) |
| 0xC3 | Signal TD (Drehzahl) |
| 0xD3 | Kuehlmitteltemperatur |
| 0xD5 | Oeltemperatur |
| 0xCE | Aussentemperatur |
| 0xC7 | Tank-Hebelgeber_1 |
| 0xD7 | Tank-Hebelgeber_2 |
| 0x8F | Ueberspannung (U>16V) |
| 0x8D | Signal AGS : Telegrammfehler oder kein Telegramm |
| 0x90 | Klemme 15 |
| 0x8C | Klemme R |
| 0xCF | SIA-Reset |
| 0x44 | Oeldruck |
| 0x92 | Gong_1 |
| 0x91 | Gong_2 |
| 0x8B | Gong_3 |
| 0x3F | Messwerktreiber |
| 0xBE | Lichtmodul-EEPROM-Fehler |
| 0xBF | IKE-EEPROM-Fehler, Codierung fehlerhaft/unvollstaendig |
| 0x83 | Tacho A |
| 0x88 | I-Bus |
| 0x87 | K-Bus |
| 0x3E | Serielles Telegramm fuer Tacho, DZM, KVA, Tank, Temp. |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 |  |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | ungueltiger Arbeitsbereich |
| 0x05 | Fehler momentan vorhanden |
| 0x06 | sporadischer Fehler |
| 0xFF | unbekannte Fehlerart |

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

### GETRIEBETYPEN

| GETRIEBEART | GETRIEBETEXT |
| --- | --- |
| 0x00 | Schaltgetriebe |
| 0x01 | 5-Gang Automatik (AGS) |
| 0x02 | 4-Gang Automatik AGS |
| 0x03 | 5-Gang Schrittschaltung |

### KOMPONENTEN

| ORT | BYTE |
| --- | --- |
| TACHO | 0x0A |
| TACHO_AUSGANG | 0x08 |
| DREHZAHL | 0x0B |
| TANKINHALT | 0x0C |
| KUEHLMITTELTEMPERATUR | 0x0D |
| VERBRAUCH | 0x0E |
| GONG1 | 0x0F |
| GONG2 | 0x10 |
| GONG3 | 0x11 |
| Fehler | 0xFF |
| unbekannt | 0xEE |

### LEUCHTEN1

| ORT | BYTE |
| --- | --- |
| P_EIN | 0x01 |
| R_EIN | 0x02 |
| N_EIN | 0x04 |
| D_EIN | 0x08 |
| 4_EIN | 0x10 |
| 3_EIN | 0x20 |
| 2_EIN | 0x40 |
| H_EIN | 0x80 |
| AUS | 0x00 |
| ALLE | 0xFF |
| unbekannt | 0xEE |

### LEUCHTEN2

| ORT | BYTE |
| --- | --- |
| BL_EIN | 0x01 |
| BR_EIN | 0x02 |
| NV_EIN | 0x04 |
| NH_EIN | 0x08 |
| F_EIN | 0x10 |
| A_EIN | 0x20 |
| S_EIN | 0x40 |
| *_EIN | 0x80 |
| AUS | 0x00 |
| ALLE | 0xFF |
| unbekannt | 0xEE |

### LEUCHTEN3

| ORT | BYTE |
| --- | --- |
| SI_EIN | 0x01 |
| CC_EIN | 0x02 |
| WEG_EIN | 0x04 |
| GURT_EIN | 0x08 |
| BREMS_EIN | 0x10 |
| TANK_EIN | 0x20 |
| PARK_EIN | 0x40 |
| AUS | 0x00 |
| ALLE | 0xFF |
| unbekannt | 0xEE |
