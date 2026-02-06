# kombir40.prg

## General

|  |  |
| --- | --- |
| File | kombir40.prg |
| Type | PRG |
| Jobs | 34 |
| Tables | 9 |
| Origin | BMW TI-433 Dennert |
| Revision | 2.1 |
| Author | BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBI R40 |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 2.01 |  |  |
| AUTHOR | string | BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

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

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Default ident job

_No arguments._

### FS_LESEN

Fehlerspeicherinhalt aus SG lesen

_No arguments._

### SOFTWARE_RESET

Kombi loest selbststaendig einen Reset aus

_No arguments._

### SIA_RESET

Ruecksetzen der Service-Intervall-Anzeige

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | moegliche Uebergabeparameter: Oel_Reset, Weg_Reset, Zeit_Reset |

### GWSZ_RESET

GWSZ zuruecksetzen, nur moeglich wenn Km-Stand < 255

_No arguments._

### AIF_GWSZ_LESEN

Gesamtwegstreckenzaehler aus Anwenderinfofeld auslesen

_No arguments._

### AIF_ZENTRALCODE_LESEN

Anwenderinfofeld Block 4 auslesen

_No arguments._

### AIF_FG_NR_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### AIF_DATUM_FZ_LESEN

Auslesen des Herstelldatums des FZ

_No arguments._

### PROD_DATUM_LESEN

_No description._

_No arguments._

### AIF_SIA_DATEN_LESEN

Anwenderinfofeld Block 3 auslesen

_No arguments._

### STEUERN_ANZEIGE

Anzeigenkomponenten steuern

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Zu steuernde Komponente, siehe table Komponenten moegliche Uebergabeparamter: TACHO, DREHZAHL, TANKINHALT, KUEHLMITTELTEMPERATUR |
| WERT | int | Winkelgrade im Bereich von (10-90) Grad, Mit Spruengen von mehr als 90 Grad sollten die Messwerke nicht beaufschlagt werden |

### STEUERN_GONG

Gong ansteuern

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | 0 = Gong 'aus', 1 = Gong 'ein' |

### STEUERN_LEUCHTE

Leuchten in der Anzeigeeinheit ansteuern Es muessen 7 Argumente uebergeben werden. Die Belegung der Datenbytes ist separat beschrieben.

| Name | Type | Description |
| --- | --- | --- |
| BYTE0 | int | Belegung 0. Datenbytes: (0-0xFF) Bit0: Bulb Failure Bit1: Rear Fogs Bit2: Front Fogs Bit3: open Bit4: open Bit5: Check Engine Bit6: Overspeed Bit7: open |
| BYTE1 | int | Belegung 1. Datenbytes: (0-0xFF) Bit0: open Bit1: Trailer warning Bit2: Glow Plug Bit3: Brake Pad Wear Bit4: Traction Control Bit5: Low Engine Coolant Bit6: Door Open Bit7: Low Washer Level |
| BYTE2 | int | Belegung 2. Datenbytes: (0-0xFF) Bit0: open Bit1: Mil RED Bit2: Brake Failure Bit3: High Coolant Temp Bit4: MIL Yellow Bit5: Low Fuel Level Bit6: Cruise Control Bit7: High Beam |
| BYTE3 | int | Belegung 3. Datenbytes: (0-0xFF) Bit0: open Bit1: open Bit2: open Bit3: open Bit4: open Bit5: open Bit6: open Bit7: open |
| BYTE4 | int | Belegung 4. Datenbytes: (0-0xFF) Bit0: open Bit1: open Bit2: open Bit3: open Bit4: open Bit5: open Bit6: open Bit7: open |
| BYTE5 | int | Belegung 5. Datenbytes: (0-0xFF) Bit0: open Bit1: open Bit2: open Bit3: open Bit4: open Bit5: open Bit6: open Bit7: open |
| BYTE6 | int | Belegung 6. Datenbytes: (0-0xFF) Bit0: open Bit1: open Bit2: open Bit3: open Bit4: open Bit5: open Bit6: Left DI (inc. Tick tock) Bit7: Right DI (inc. Tick tock) |

### STEUERN_IO

I/O-Port-Ausgaenge steuern

| Name | Type | Description |
| --- | --- | --- |
| PORT4 | int | Belegung Datenbyte: (0-0x0F) Bit0: open Bit1: open Bit2: open Bit3: open Bit4: open Bit5: open Bit6: Flasher Left Bit7: Flasher Right |

### STATUS_IO_LESEN

Eingangs- und Ausgangsstati lesen

_No arguments._

### STATUS_ANALOG_LESEN

Spezielle analoge Eingaenge lesen

_No arguments._

### RAM_LESEN

RAM-Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_TYPE | string | "INTERN" ,"EXTERN" oder "DP_RAM" |
| ADRESSE | string | Hexwert (0x000-0xFFF) der Adresse ,ab der das Ram gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### ROM_LESEN

ROM-Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x0000-0xFFFF) der Adresse ,ab der das Rom gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### EEPROM_LESEN

EEPROM-Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00-0xFF) der WortAdresse ,ab der das EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der 2-Byte-Worte (max. 16 Worte = 32 Bytes), die ausgelesen werden koennen |

### DPRAM_LESEN

DPRAM-Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x80-0xDF) der Adresse ,ab der gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 16 !) die ausgelesen werden sollen |

### ZCS_LESEN

Anwenderinfofeld Wortadr. 34-3D auslesen

_No arguments._

### STEUERN_SELBSTTEST

SG - Selbsttest ausloesen

_No arguments._

### GWSZ_OFFSET_LESEN

OFFSET-Wert des GWSZ aus EEPROM lesen

_No arguments._

### GWSZ_OFFSET_SCHREIBEN

OFFSET-Wert des GWSZ in EEPROM schreiben

| Name | Type | Description |
| --- | --- | --- |
| GWSZ_OFFSET_WERT | int | absoluter Offset-Wert des GWSZ |

### STATUS_CAN_FUNKTION_LESEN

Zeigt an, ob CAN-Funktionalitaet vorhanden ist

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

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x02 |
| ZEIT_RESET | 0x04 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x87 | Kurzschluss gegen U-Batt oder Masse |
| 0x8C | Klemme R |
| 0x8F | Ueberspannung (U>16V) |
| 0xBE | Lichtmodul-EEPROM-Fehler |
| 0xBF | KOMBIR40-EEPROM, Codierung fehlerhaft/unvollstaendig |
| 0xC1 | Signal TWEG+ (Tacho) |
| 0xC3 | TD |
| 0xC7 | Tank-Hebelgeber |
| 0xCE | Aussentemperatur |
| 0xCF | SIA-Reset |
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
| 0x07 | Fehler momentan vorhanden |
| 0x08 | sporadischer Fehler |
| 0xFF | unbekannte Fehlerart |

### GETRIEBETYPEN

| GETRIEBEART | GETRIEBETEXT |
| --- | --- |
| 0x00 | Schaltgetriebe |
| 0x01 | Automatikgetriebe (EGS) |
| 0xFF | unbekannte Getriebeart |

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
| Fehler | 0xFF |
| unbekannt | 0xEE |
