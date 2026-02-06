# KOMBI36C.prg

## General

|  |  |
| --- | --- |
| File | KOMBI36C.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 12 |
| Origin | BMW TI-433 Dennert |
| Revision | 2.5 |
| Author | BMW TP-422 Zender, BMW TI-433 Dennert |
| ECU Comment | CAN-Kombi fuer E36/5/7 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBI E36C |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 2.05 |  |  |
| AUTHOR | string | BMW TP-422 Zender, BMW TI-433 Dennert |  |  |
| COMMENT | string | CAN-Kombi fuer E36/5/7 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Init-Job fuer Kombi 36 CAN

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Default ident job

_No arguments._

### AIF_GWSZ_LESEN

Gesamtwegstreckenzaehler aus Anwenderinfofeld auslesen

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

Auslesen des Herstelldatums aus dem Anwenderinfofeld

_No arguments._

### VERRIEGELUNG_LESEN

Auslesen der Verriegelungsbits aus dem EEPROM

_No arguments._

### TACHO_ENDWERT_LESEN

Auslesen des Tacho-Endausschlags aus dem EEPROM

_No arguments._

### FS_LESEN

Fehlerspeicherinhalt aus SG lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### RAM_LESEN

RAM-Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_TYPE | string | "INTERN" oder "EXTERN" |
| ADRESSE | string | Hexwert (0x000-0xFFF) der Adresse ,ab der das Ram gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der auszulesenden Bytes (max. 32 !) |

### EEPROM_LESEN

EEPROM-Daten auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00-0xBF) der Wortadresse ,ab der das EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der 2-Byte-Worte (max. 16 Worte = 32 Bytes), die ausgelesen werden koennen |

### DPRAM_LESEN

DPRAM des CAN-Controllers auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x80-0xDF) der Adresse ,ab der das DPRAM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### STATUS_IO_LESEN

Eingangs- und Ausgangsstati lesen

_No arguments._

### STATUS_ANALOG_LESEN

Spezielle analoge Eingaenge lesen

_No arguments._

### STATUS_TANKINHALT_LESEN

Tankinhalt aus RAM lesen

_No arguments._

### STEUERN_ANZEIGE

Anzeigenkomponenten steuern

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Zu steuernde Komponente, siehe table Komponenten moegliche Komponenten: TACHO, DREHZAHL, TANKINHALT, KUEHLMITTELTEMPERATUR, ALLE |
| WERT | int | Winkelgrade im Bereich von (10-90) Grad, Mit Spruengen von mehr als 90 Grad sollten die Messwerke nicht beaufschlagt werden |

### STEUERN_LEUCHTE

Leuchten in der Anzeigeeinheit steuern

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bitbelegung des 1. Datenbytes: Bit 0: SIA-Beleuchtung Bit 1: Tankreserve Bit 2: Tempomat Bit 3: Vorgluehen/Diesel-Diagnose Bit 4: EGS Bit 5: Check-Engine Bit 6: frei Bit 7: frei |
| BYTE2 | int | Bitbelegung des 2. Datenbytes: Bit 0: Kuehlmitteluebertemperatur Bit 1: Feststellbremse Bit 2: Bremsfluessigkeitsniveau Bit 3: ASC Kontrolleuchte Bit 4: BVA Kontrolleuchte Bit 5: Oelstandsniveau Bit 6: Gurtwarnung Bit 7: frei |

### STEUERN_GONG3

Ausgang Gong T3 ansteuern

_No arguments._

### STEUERN_SCHNARRE

Schnarre (Relais) einschalten

_No arguments._

### SIA_GWSZ_RESET

Ruecksetzen der Service-Intervall-Anzeige u. des GWSZ Es koennen 1 bis 4 Parameter uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | Oel_Reset, Inspektion_Reset, Zeit_Reset oder GWSZ_Reset |
| ARG2 | string | Oel_Reset, Inspektion_Reset, Zeit_Reset oder GWSZ_Reset |
| ARG3 | string | Oel_Reset, Inspektion_Reset, Zeit_Reset oder GWSZ_Reset |
| ARG4 | string | Oel_Reset, Inspektion_Reset, Zeit_Reset oder GWSZ_Reset |

### STEUERN_TACHO_A

TACHO_A ansteuern

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | Geschwindigkeit in km/h, Wertebereich (3 bis 250) km/h |

### PRUEFSTEMPEL_LESEN

Default pruefstempel_lesen job

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden (0x00-0xFF) |
| BYTE2 | int | kann beliebig verwendet werden (0x00-0xFF) |
| BYTE3 | int | kann beliebig verwendet werden (0x00-0xFF) |

### SELBSTTEST

SG - Selbsttest ausloesen

_No arguments._

### STEUERN_SELBSTTEST

SG - Selbsttest ausloesen

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### DIAGNOSE_AUFRECHT

Fortsetzen der Diagnose

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SOFTWARE_RESET

Kombi loest selbststaendig einen Reset aus

_No arguments._

### STATUS_CAN_MOTORDREHZAHL_LESEN

DUAL PORT RAM des CAN-Controllers auslesen und Motordrehzahl ausgeben

_No arguments._

### STATUS_CAN_KUEHLMITTELTEMP_LESEN

DUAL PORT RAM des CAN-Controllers auslesen Kuehlmitteltemperatur u. Status der Kuehlmitteltemperaturleuchte ausgeben

_No arguments._

### STATUS_CAN_GETRIEBEINFO_LESEN

DUAL PORT RAM des CAN-Controllers auslesen Zielgang, Positionswaehlhebelanzeige, Programminformations- anzeige und Stoeranzeige ausgeben

_No arguments._

### STATUS_CAN_EINSPRITZMENGE_LESEN

DUAL PORT RAM des CAN-Controllers auslesen und Einspritzmenge ausgeben

_No arguments._

### STATUS_CAN_SIGNALE_LESEN

DUAL PORT RAM des CAN-Controllers auslesen und Kontrollsignale ausgeben

_No arguments._

### SIA_ZEIT_MAX_USA

Umkodierung der SIA

_No arguments._

### SERVICE_STATUS

_No description._

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
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

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
| 0xFF | unbekannter Hersteller |

### GETRIEBETYPEN

| GETRIEBEART | GETRIEBETEXT |
| --- | --- |
| 0x00 | Schaltgetriebe |
| 0x01 | Automatikgetriebe |
| 0xFF | unbekannte Getriebeart |

### GANGINFO

| GANGINFO | GANGTEXT |
| --- | --- |
| 0x00 | N oder P |
| 0x01 | 1. Gang |
| 0x02 | 2. Gang |
| 0x03 | 3. Gang |
| 0x04 | 4. Gang |
| 0x05 | 5. Gang |
| 0x06 | 6. Gang |
| 0x07 | Rueckwaertsgang |
| 0xFF | unbekannte Getriebeinfo |

### WAEHLHEBELINFO

| WAEHLHEBELINFO | WAEHLHEBELTEXT |
| --- | --- |
| 0x00 | Zwischenstellung |
| 0x01 | 1 |
| 0x02 | 2 |
| 0x03 | 3 |
| 0x04 | 4 |
| 0x05 | D |
| 0x06 | N |
| 0x07 | R |
| 0x08 | P |
| 0x09 | 5 |
| 0x0A | 6 |
| 0xFF | unbekannte Waehlhebelinfo |

### PROGRAMMINFO

| PROGRAMMINFO | PROGRAMMTEXT |
| --- | --- |
| 0x00 | E |
| 0x01 | M |
| 0x02 | S |
| 0x03 | W |
| 0x04 | A |
| 0x05 | Anzeige aus |
| 0xFF | unbekannte Programminfo |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xC1 | Signal TWEG+ (Tacho) |
| 0xC3 | Signal TD (Drehzahl) |
| 0xD3 | Kuehlmitteltemperatur |
| 0xC7 | Tank-Hebelgeber_1 |
| 0x8F | Ueberspannung (U>16V) |
| 0x8C | Klemme R |
| 0xCF | SIA-Reset |
| 0x8B | Gong_T3 |
| 0x3E | Messwerktreiber |
| 0x3F | Latch-Up Messwerktreiber |
| 0x83 | Tacho A |
| 0xF0 | CAN BUS OFF |
| 0xF4 | keine CAN ID |
| 0xF5 | keine CAN ID ASC1 |
| 0xF6 | keine CAN ID DME1 |
| 0xF7 | keine CAN ID DME2 |
| 0xF8 | keine CAN ID DME4 |
| 0xFB | keine CAN ID EGS1 |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | ungueltiger Arbeitsbereich |
| 0x05 | Fehler momentan vorhanden |
| 0x06 | sporadischer Fehler |
| 0xFF | unbekannte Fehlerart |

### KOMPONENTEN

| ORT | BYTE |
| --- | --- |
| TACHO | 0x0A |
| Tacho | 0x0A |
| tacho | 0x0A |
| DREHZAHL | 0x0B |
| Drehzahl | 0x0B |
| drehzahl | 0x0B |
| TANKINHALT | 0x0C |
| Tankinhalt | 0x0C |
| tankinhalt | 0x0C |
| KUEHLMITTELTEMPERATUR | 0x0D |
| Kuehlmitteltemperatur | 0x0D |
| kuehlmitteltemperatur | 0x0D |
| ALLE | 0x20 |
| Alle | 0x20 |
| alle | 0x20 |
| FEHLER | 0xFF |

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| INSPEKTION_RESET | 0x02 |
| ZEIT_RESET | 0x04 |
| GWSZ_RESET | 0x08 |
| FEHLER | 0x00 |

### ZEITINSPINFO

| ZEITINFO | ZEITTEXT |
| --- | --- |
| 0x00 | Vorgezogene Zeitinspektion durchfuehren |
| 0x01 | Vorgezogene Zeitinspektion nicht durchfuehren |
| 0x02 | Keine Zeitinspektion durchfuehren |
| 0xFF | Unbekannte Anzeigevorgabe |

### SERVICEINFO

| SINFO | STEXT |
| --- | --- |
| 0x00 | Oelservice |
| 0x01 | Inspektion |
| 0xFF | Unbekannte Serviceinfo |
