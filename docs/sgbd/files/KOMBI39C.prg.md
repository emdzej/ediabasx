# KOMBI39C.prg

## General

|  |  |
| --- | --- |
| File | KOMBI39C.prg |
| Type | PRG |
| Jobs | 43 |
| Tables | 10 |
| Origin | BMW TI-431 Dennert |
| Revision | 2.19 |
| Author | BMW TP-422 Zender, BMW TI-431 Dennert, Siemens VDO Schneider |
| ECU Comment | CAN-Funktionalitaet ist erst ab PU 98 gegeben |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBI E39C, E53 |  |  |
| ORIGIN | string | BMW TI-431 Dennert |  |  |
| REVISION | string | 2.19 |  |  |
| AUTHOR | string | BMW TP-422 Zender, BMW TI-431 Dennert, Siemens VDO Schneider |  |  |
| COMMENT | string | CAN-Funktionalitaet ist erst ab PU 98 gegeben |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x9D) wird aktiviert |

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

### FS_LESEN

Fehlerspeicherinhalt aus SG lesen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### DIAGNOSE_AUFRECHT

Fortsetzen der Diagnose

_No arguments._

### SELBSTTEST

SG - Selbsttest ausloesen

_No arguments._

### STEUERN_SELBSTTEST

SG - Selbsttest ausloesen

_No arguments._

### SOFTWARE_RESET

Kombi loest selbststaendig einen Reset aus

_No arguments._

### SIA_RESET

Ruecksetzen der Service-Intervall-Anzeige

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | Oel/Weg oder Zeit - Reset |
| ARG2 | string | Oel/Weg oder Zeit - Reset |
| ARG3 | string | Oel/Weg oder Zeit - Reset |

### GWSZ_RESET

_No description._

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

### PROD_DATUM_LESEN

_No description._

_No arguments._

### STEUERN_ANZEIGE

Anzeigenkomponenten steuern

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Zu steuernde Komponente, siehe table Komponenten |
| WERT | int | Winkelgrade im Bereich von (10-90) Grad, Mit Spruengen von mehr als 90 Grad sollten die Messwerke nicht beaufschlagt werden |

### STEUERN_TACHO_A

TACHO_A steuern

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | Geschwindigkeit in km/h, Wertebereich (3 bis 300) km/h |

### STEUERN_EISWARNUNG

Anzeigenkomponenten steuern

_No arguments._

### STEUERN_LICHTSUMMER

Anzeigenkomponenten steuern

_No arguments._

### STEUERN_GONG3

Anzeigenkomponenten steuern

_No arguments._

### STEUERN_LEUCHTE

Leuchten in der Anzeigeeinheit steuern

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |
| BYTE4 | int | kann beliebig verwendet werden |
| BYTE5 | int | kann beliebig verwendet werden |
| BYTE6 | int | kann beliebig verwendet werden |
| BYTE7 | int | kann beliebig verwendet werden |
| BYTE8 | int | kann beliebig verwendet werden |
| BYTE9 | int | kann beliebig verwendet werden |

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

### EEPROM_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00) der Adresse ,ab der das EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### DPRAM_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00) der Adresse ,ab der das DPRAM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### STATUS_CAN_MOTORDREHZAHL_LESEN

_No description._

_No arguments._

### STATUS_CAN_KUEHLMITTELTEMP_LESEN

_No description._

_No arguments._

### STATUS_CAN_GETRIEBEINFO_LESEN

_No description._

_No arguments._

### STATUS_CAN_EINSPRITZMENGE_LESEN

_No description._

_No arguments._

### STATUS_CAN_SIGNALE_LESEN

_No description._

_No arguments._

### STATUS_CAN_FUNKTION_LESEN

Zeigt an, ob CAN-Funktionalitaet vorhanden ist

_No arguments._

### STATUS_SIA_FINISH

SIA-Daten auslesen zur Fertigungskontrolle

_No arguments._

### C_ZCS_LESEN

Anwenderinfofeld Block 4 auslesen

_No arguments._

### CLOCK_ADJUSTMENT_LESEN

Liest die Konstante zum Uhrenabgleich aus dem EEPROM

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
| ZEIT_RESET | 0x04 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xCD | Signal KVA1 |
| 0xC1 | Signal TWEG+ (Tacho) |
| 0xC3 | Signal TD (Drehzahl) |
| 0xD3 | Kuehlmitteltemperatur |
| 0xCE | Aussentemperatur |
| 0xC7 | Tank-Hebelgeber_1 |
| 0xD7 | Tank-Hebelgeber_2 |
| 0x8F | Ueberspannung (U>16V) |
| 0x8D | Signal AGS : Telegrammfehler oder kein Telegramm |
| 0x90 | Klemme 15 |
| 0x8C | Klemme R |
| 0xCF | SIA-Reset |
| 0x44 | Oeldruck |
| 0x8B | Gong_3 |
| 0x3F | Messwerktreiber |
| 0xBC | Bremsfluessigkeitsstand |
| 0xBD | EBV |
| 0xBE | Lichtmodul-EEPROM-Fehler |
| 0xBF | KOMBI-EEPROM-Fehler, Codierung fehlerhaft/unvollstaendig |
| 0x83 | Tacho A |
| 0x88 | I-Bus |
| 0x87 | K-Bus |
| 0xF0 | CAN BUS OFF |
| 0xF4 | keine CAN ID |
| 0xF5 | keine CAN ID ASC1 |
| 0xF6 | keine CAN ID DME1 |
| 0xF7 | keine CAN ID DME2 |
| 0xF8 | keine CAN ID DME4 |
| 0xFB | keine CAN ID EGS1 |
| 0xFC | kein CAN MST1 |
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
| 0x07 | Fehler durch externes Steuergeraet |
| 0xFF | unbekannte Fehlerart |

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
| 0x01 | 5-Gang Automatik (EGS) |
| 0x02 | 4-Gang Automatik (EGS) |
| 0x03 | 5-Gang Schrittschaltung |

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

### KOMPONENTEN

| ORT | BYTE |
| --- | --- |
| TACHO | 0x0A |
| DREHZAHL | 0x0B |
| TANKINHALT | 0x0C |
| KUEHLMITTELTEMPERATUR | 0x0D |
| VERBRAUCH | 0x0E |
| FEHLER | 0xFF |
