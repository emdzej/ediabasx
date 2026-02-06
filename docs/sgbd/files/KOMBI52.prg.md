# KOMBI52.prg

## General

|  |  |
| --- | --- |
| File | KOMBI52.prg |
| Type | PRG |
| Jobs | 42 |
| Tables | 8 |
| Origin | BMW TI-431 Dennert |
| Revision | 2.10 |
| Author | BMW TI-44 Zender, BMW TI-431 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBI E52 |  |  |
| ORIGIN | string | BMW TI-431 Dennert |  |  |
| REVISION | string | 2.10 |  |  |
| AUTHOR | string | BMW TI-44 Zender, BMW TI-431 Dennert |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

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

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### IDENT

Default ident job

_No arguments._

### FS_LESEN

Fehlerspeicherinhalt aus SG lesen

_No arguments._

### SIA_RESET

Ruecksetzen der Service-Intervall-Anzeige

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | moegliche Uebergabeparameter: Oel_Reset, Weg_Reset, Zeit_Reset |
| ARG2 | string | Oel/Weg oder Zeit - Reset |
| ARG3 | string | Oel/Wegs oder Zeit - Reset |

### GWSZ_RESET

_No description._

_No arguments._

### STATUS_IO_LESEN

Eingangs- und Ausgangsstati lesen

_No arguments._

### STEUERN_SELBSTTEST

SG - Selbsttest ausloesen

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
| WERT | int | Geschwindigkeit in km/h, Wertebereich (3 bis 250) km/h |

### STEUERN_GONG3

Anzeigenkomponenten steuern

_No arguments._

### STEUERN_LC_DISPLAY

Steuern LC-Display

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int |  |
| BYTE1 | int |  |
| BYTE2 | int |  |
| BYTE3 | int |  |
| BYTE4 | int |  |
| BYTE5 | int |  |
| BYTE6 | int |  |
| BYTE7 | int |  |
| BYTE8 | int |  |
| BYTE9 | int |  |

### STEUERN_LEUCHTE

Leuchten in der Anzeigeeinheit steuern

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### STEUERN_LICHTSUMMER

Anzeigenkomponenten steuern

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
| ADRESSE | string | Hexwert (0x000) der Adresse ,ab der das Ram gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### EEPROM_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00) der Adresse ,ab der das EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Worte (max. 16 !) die ausgelesen werden sollen |

### DPRAM_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00) der Adresse ,ab der das DPRAM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

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

### STATUS_CAN_MOTORDREHZAHL_LESEN

_No description._

_No arguments._

### STATUS_CAN_KUEHLMITTELTEMP_LESEN

_No description._

_No arguments._

### STATUS_CAN_EINSPRITZMENGE_LESEN

_No description._

_No arguments._

### STATUS_CAN_SIGNALE_LESEN

_No description._

_No arguments._

### PROD_DATUM_LESEN

_No description._

_No arguments._

### STATUS_ANALOG_LESEN

Spezielle Eingaenge lesen

_No arguments._

### STATUS_TANKINHALT_LESEN

Tankinhalt lesen

_No arguments._

### STATUS_VERRIEGELUNGSBITS_GESETZT

Verrieglungsbits gesetzt

_No arguments._

### STATUS_CAN_FUNKTION_LESEN

Zeigt an, ob CAN-Funktionalitaet vorhanden ist

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### SOFTWARE_RESET

Kombi loest selbststaendig einen Reset aus

_No arguments._

### SIA_KORREKTUR_SCHREIBEN

Toggeln der SIA Inspektions- bzw. Oelservices

_No arguments._

### C_ZCS_LESEN

Anwenderinfofeld Block 4 auslesen

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
| 0x3E | Messwerktreiberfehler |
| 0x3F | Messwerktreiber (latch up) |
| 0x83 | Tacho A |
| 0x87 | K-Bus |
| 0x8B | Gong_3 |
| 0x8C | Klemme R |
| 0x8F | Ueberspannung (U>16V) |
| 0x90 | Klemme 15 |
| 0xBC | Bremsfluessigkeitsstand |
| 0xBD | EBV |
| 0xBE | Lichtmodul-EEPROM-Fehler |
| 0xBF | KOMBI-EEPROM-Fehler, Codierung fehlerhaft/unvollstaendig |
| 0xC1 | Signal TWEG+ (Tacho) |
| 0xC7 | Tank-Hebelgeber_1 |
| 0xCE | Aussentemperatur |
| 0xCF | SIA-Reset |
| 0xD3 | Kuehlmitteltemperatur |
| 0xF0 | CAN BUS OFF |
| 0xF4 | keine CAN ID |
| 0xF5 | keine CAN ID ASC1 |
| 0xF6 | keine CAN ID DME1 |
| 0xF7 | keine CAN ID DME2 |
| 0xF8 | keine CAN ID DME4 |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | ungueltiger Arbeitsbereich |
| 0x05 | Fehler durch externes Steuergeraet |
| 0x06 | unbekannte Fehlerart |
| 0x07 | Fehler momentan vorhanden |
| 0x08 | sporadischer Fehler |
| 0xFF | unbekannte Fehlerart |

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x02 |
| ZEIT_RESET | 0x04 |

### KOMPONENTEN

| ORT | BYTE |
| --- | --- |
| TACHO | 0x0A |
| DREHZAHL | 0x0B |
| TANKINHALT | 0x0C |
| KUEHLMITTELTEMPERATUR | 0x0D |
| FEHLER | 0xFF |

### GETRIEBETYPEN

| GETRIEBEART | GETRIEBETEXT |
| --- | --- |
| 0x00 | Schaltgetriebe |
| 0xFF | unbekannte Getriebeinfo |
