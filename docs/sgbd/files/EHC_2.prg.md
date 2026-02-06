# EHC_2.prg

## General

|  |  |
| --- | --- |
| File | EHC_2.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 10 |
| Origin | Stefan Reisinger, EE-230 |
| Revision | 1.0 |
| Author | IDS Schmidt (BS), Stefan Reisinger (SR) |
| ECU Comment | Kommentar |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | 2-Achs-Luftfederung EHC |  |  |
| ORIGIN | string | Stefan Reisinger, EE-230 |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | IDS Schmidt (BS), Stefan Reisinger (SR) |  |  |
| COMMENT | string | Kommentar |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer <SG> automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### INFO

Information bzgl. SGBD

_No arguments._

### IDENTIFIKATION

Ermittlung der SG-Variante

_No arguments._

### IDENT

Ident-Daten fuer EHC

_No arguments._

### FS_QUICK_LESEN

Fehlerspeicher quick lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### CODE_LESEN

gibt die Codierinformation als BYTE-STRING aus

| Name | Type | Description |
| --- | --- | --- |
| CODIERBLOCK | int | Codierblock Nr. |

### STATUS_LESEN

I/O Status lesen

_No arguments._

### STATUS_SETZEN

Hardward Zugriff

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | (0)MV_FR (1)MV_FL (2)MV_RR (3)MV_RL (4)MV_RES (5)MV_EX (6)C_SW [alle High Aktiv] |
| BYTE2 | int | (0)MV_CFR (1)MV_CFL (2)MV_CRR (3)MV_CRL [alle High Aktiv] |
| BYTE3 | int | (1)Access Static (3)Motorway Static (5)Standard Static (7)Offroad Static [alle High Aktiv] |
| BYTE4 | int | (1)Hold Static [alle High Aktiv] |
| BYTE5 | int | reserviert |

### SG_STATUS_LESEN

Software-Status lesen

_No arguments._

### SG_STATUS_VORGEBEN

Software Zugriff

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | (0)Dump Modus (1)Badn Modus (2)Verlademodus (3)Bypassmodus (4)EMV Kundenmodus (5)Handsteuermodus (6)NoPlausibilitymodus[alle High Aktiv] |
| BYTE2 | int | reserviert |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | nach Codierung soll hier ein Teil der Fahrgestell-Nr. stehenn |
| BYTE2 | int | nach Codierung soll hier ein Teil der Fahrgestell-Nr. stehen |
| BYTE3 | int | nach Codierung soll hier ein Teil der Fahrgestell-Nr. stehen |

### SPEICHER_LOESCHEN

EEPROM loeschen bis auf SG-Identifikation

_No arguments._

### SG_RESET

Reset des Steuergeraetes

_No arguments._

### FS_SHADOW_LESEN

auslesen des Fehlershadowspeichers

_No arguments._

### ABGLEICHWERT_LESEN

Hoehenstand lesen

_No arguments._

### ABGLEICHWERT_PROGRAMMIEREN

Offset fuer Hoehenstaende eingeben

| Name | Type | Description |
| --- | --- | --- |
| OFFSETBYTE_FL_A | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_FL_B | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_FR_A | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_FR_B | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_RL_A | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_RL_B | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_RR_A | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_RR_B | int | Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_FR_A | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_FR_B | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_FL_A | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_FL_B | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_RR_A | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_RR_B | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_RL_A | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_RL_B | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |

### HERSTELLDATEN_LESEN

Auslesen des Herstelldaten

_No arguments._

### HERSTELLDATEN_SCHREIBEN

Schreiben der Herstelldaten

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | zur Dokumentierung |
| BYTE2 | int | zur Dokumentierung |
| BYTE3 | int | zur Dokumentierung |
| BYTE4 | int | zur Dokumentierung |
| BYTE5 | int | zur Dokumentierung |
| BYTE6 | int | zur Dokumentierung |
| BYTE7 | int | zur Dokumentierung |
| BYTE8 | int | zur Dokumentierung |
| BYTE9 | int | zur Dokumentierung |
| BYTE10 | int | zur Dokumentierung |
| BYTE11 | int | zur Dokumentierung |
| BYTE12 | int | zur Dokumentierung |
| BYTE13 | int | zur Dokumentierung |
| BYTE14 | int | zur Dokumentierung |
| BYTE15 | int | zur Dokumentierung |
| BYTE16 | int | zur Dokumentierung |
| BYTE17 | int | zur Dokumentierung |
| BYTE18 | int | zur Dokumentierung |
| BYTE19 | int | zur Dokumentierung |
| BYTE20 | int | zur Dokumentierung |
| BYTE21 | int | zur Dokumentierung |
| BYTE22 | int | zur Dokumentierung |

### DIAGNOSEMODE_ERHALTEN

Zaehler fuer Diagnosemode zuruecksetzen

_No arguments._

### DIAGNOSEMODE_BEENDEN

beendet den Diagnosemode vorzeitig

_No arguments._

### SEED_HOLEN

meldet fuer eine Zugriffsebene an

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Zugriffsebene |

### KEY_SENDEN_NORMAL

Key an SG senden fuer Zugriffsebene 1

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Key LSB |
| BYTE2 | int | Key MSB |

### KEY_SENDEN_EXPERT

Key an SG senden fuer Zugriffsebene 2

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Key LSB |
| BYTE2 | int | Key MSB |

### FAHRZEUG_HOEHE_ABGLEICHEN

automatischer Hoehenabgleich

| Name | Type | Description |
| --- | --- | --- |
| DELTA_HOEHE_LINKS | int | mm |
| DELTA_HOEHE_RECHTS | int | mm |
| MINDEST_DELTA | int | mm |
| ACHSE | int | 1 Vorne und 2 Hinten |

### STATUS_VORGEBEN

Ansteuern eines digitalen Ein- Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente 1 |

### SG_STATUS_SETZEN

Ansteuern der SGs

| Name | Type | Description |
| --- | --- | --- |
| MODUS | string | gewuenschte Komponente 1 |

### SPEICHER_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | gewuenschtes Startsegment (0) |
| MIDDLE | int | gewuenschte Startadresse midle als Hexwert! |
| LOW | int | gewuenschte Startadresse low als Hexwert! |
| ANZAHL | int | gewuenschte Anzahl Bytes (2-28) |

### AKTOREN_VORGEBEN

Ansteuern der Modi

| Name | Type | Description |
| --- | --- | --- |
| MODI | string | gewuenschte Komponente |
| VORG1 | int | VorgabeByte |
| VORG2 | int | VorgabeByte |
| VORG3 | int | VorgabeByte |
| VORG4 | int | VorgabeByte |

### HOEHE_SPEICHERN

Hoehe in den leak-Bereich

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_REJECTED |
| 0xB0 | ERROR_PARAMETER |
| 0xB1 | ERROR_FUNCTION |
| 0xFF | ERROR_NOT_ACKNOWLEDGE |
| 0xXY | ERROR_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
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
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0x29 | DENSO |
| 0x43 | WABCO |
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Ventil vorne links |
| 0x02 | Ventil vorne rechts |
| 0x03 | Ventil hinten links |
| 0x04 | Ventil hinten rechts |
| 0x05 | Quersperrventil vorne links |
| 0x06 | Quersperrventil vorne rechts |
| 0x07 | Quersperrventil hinten links |
| 0x08 | Quersperrventil hinten rechts |
| 0x0A | Ablassventil |
| 0x0B | Speicherventil |
| 0x0C | Kompressorrelais |
| 0x14 | Hoehenstandssensor vorne links |
| 0x15 | Hoehenstandssensor vorne rechts |
| 0x16 | Hoehenstandssensor hinten links |
| 0x17 | Hoehenstandssensor hinten rechts |
| 0x18 | Speicherdrucksensor |
| 0x19 | Quersperrdrucksensor Vorderachse |
| 0x1A | Quersperrdrucksensor Hinterachse |
| 0x1E | CAN-Bus |
| 0xFF | unbekannter Fehlerort |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x02 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x03 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x04 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x05 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x06 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x07 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x08 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x0A | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x0B | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x0C | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x14 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x15 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x16 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x17 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x18 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x19 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x1A | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x00 | 0x06 | 0x00 | 0x07 |
| 0x1E | 0x00 | 0x0B | 0x00 | 0x0C | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF |
| 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | Plausibilitaet |
| 0x07 | Fehler momentan vorhanden |
| 0x08 | sporadischer Fehler |
| 0x0A | blockiert |
| 0x0B | Bus Off |
| 0x0C | mindestens eine Botschaft fehlt |
| 0x0D | Checksumme falsch |
| 0xFE | allg. Fehler |
| 0xFF | unbekannte Fehlerart |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- | --- | --- |
| 0x01 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x02 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x03 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x04 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x05 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x06 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x07 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x08 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x0A | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x0B | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x0C | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x14 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x15 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x16 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x17 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x18 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x19 | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x1A | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0x1E | 2 | 1 | 0x01 | 0x10 | 0x00 |
| 0xXY | 0 | 0 | 0xFF | 0xFF | 0xFF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | MASK | NAME | UW_MULT | UW_DIV | UW_ADD |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Kilometerstand | km | -- | -- | 10 | 1 | 0 |
| 0x10 | zusaetzliche UW Bedingungen | xxx | -- | -- | 1 | 1 | 0 |
| 0x11 | Motordrehzahl | 1/min | -- | -- | 32 | 1 | 0 |
| 0x12 | Fahrzeuggeschwindigkeit | km/h | -- | -- | 1 | 1 | 0 |
| 0x13 | Batteriespannung | Volt | -- | -- | 1 | 10 | 0 |
| 0xXY | unbekannte Umweltbedingung | XY | 1 | 1 | 1 | 1 | 0 |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| 1110 | 0 | 0x43 |
| 1101 | 0 | 0x44 |
| 1100 | 0 | 0x48 |
| 1011 | 0 | 0x47 |
| 1010 | 0 | 0x4B |
| 1001 | 0 | 0x4C |
| 1000 | 0 | 0x4F |
| 0111 | 0 | 0x23 |
| 0110 | 0 | 0x24 |
| 0101 | 0 | 0x28 |
| 0100 | 0 | 0x27 |
| 0011 | 0 | 0x2B |
| 0010 | 0 | 0x2C |
| 0001 | 0 | 0x2F |
| 0000 | 0 | 0x00 |
| XXX | Y | Z |

### AKTOREN

| AKTOREN | BYTE | BITWERT |
| --- | --- | --- |
| MV_FR | 0 | 0x01 |
| MV_FL | 0 | 0x02 |
| MV_RR | 0 | 0x04 |
| MV_RL | 0 | 0x08 |
| MV_RES | 0 | 0x10 |
| MV_EX | 0 | 0x20 |
| C_SW | 0 | 0x40 |
| Vent+Komp_OFF | 0 | 0x00 |
| MV_CFR | 1 | 0x01 |
| MV_CFL | 1 | 0x02 |
| MV_CRR | 1 | 0x04 |
| MV_CRL | 1 | 0x08 |
| Crosslk_OFF | 1 | 0x00 |
| ACCESS_STATIC | 2 | 0x02 |
| MOTORWAY_STATIC | 2 | 0x08 |
| STANDARD_STATIC | 2 | 0x20 |
| OFFROAD_STATIC | 2 | 0x80 |
| LED_OFF | 2 | 0x00 |
| HOLD_STATIC | 3 | 0x02 |
| HOLD_LED_OFF | 3 | 0x00 |
| ALLE_AUS | 4 | 0x00 |
| XXX | Y | Z |

### STEUERN_SG

| STEUER_SG | BYTE | BITWERT |
| --- | --- | --- |
| DUMP_MODUS | 0 | 0x01 |
| BAND_MODUS | 0 | 0x02 |
| VERLADEMODUS | 0 | 0x04 |
| BYPASSMODUS | 0 | 0x08 |
| EMV_KUNDENMODUS | 0 | 0x10 |
| HANDSTEUERMODUS | 0 | 0x20 |
| NOPLAUMODUS | 0 | 0x40 |
| ALLES_OFF | 0 | 0x00 |
| XXX | Y | Z |
