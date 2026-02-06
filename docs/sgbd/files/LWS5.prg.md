# LWS5.prg

## General

|  |  |
| --- | --- |
| File | LWS5.prg |
| Type | PRG |
| Jobs | 24 |
| Tables | 6 |
| Origin | BMW EE-23 Schoenherr |
| Revision | 1.14 |
| Author | BMW TP-421 Gerd Huber, Kostal AVC3 Hillebrand |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Lenkradwinkel mit CAN-Schnittstelle |  |  |
| ORIGIN | string | BMW EE-23 Schoenherr |  |  |
| REVISION | string | 1.14 |  |  |
| AUTHOR | string | BMW TP-421 Gerd Huber, Kostal AVC3 Hillebrand |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.04 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer Lenkwinkelsensor 5 (CAN) automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### IDENT

Ident-Daten fuer Lenkwinkelsensor 5

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### DIAGNOSE_ENDE

Beenden der Diagnose Dummy-Job ohne Diagnosetelegramm (d.h. immer OKAY)

_No arguments._

### STATUS_DIGITAL

Auslesen der digitalen IO-Stati des Lenkwinkelsensors 5 Der Wertebereich ist bei allen Results gleich: Bereich: 0, wenn FALSE / 1, wenn TRUE

_No arguments._

### STATUS_ANALOG

Auslesen der Analogwerte

_No arguments._

### STEUERN_DIGITAL

Ansteuern eines digitalen Ein- oder Ausgangs v. LWS5 ! erlaubte Namen des Arguments 'FUNKTION' ueber Tool XTRACT.exe ! Aufruf 'XTRACT [-F] LWS5.prg'

| Name | Type | Description |
| --- | --- | --- |
| FUNKTION | string | gewuenschte Komponente table Steuern_Digital SIGNAL |
| EIN | int | "1", wenn einschalten / "0", wenn ausschalten |

### STATUS_SG_DIGITAL

Auslesen der digitalen SG-Stati des Lenkwinkelsensors 5 Der Wertebereich ist bei allen Results gleich: Bereich: 0, wenn FALSE / 1, wenn TRUE

_No arguments._

### STATUS_SG_ONLINE

Auslesen der analogen Online-Werte des LWS5

_No arguments._

### STATUS_SG_VIRTUELL

Auslesen der analogen Online-Werte / virtuelle Sensorik

_No arguments._

### ABGLEICH_LESEN

Auslesen der Abgleich-Werte

_No arguments._

### CODIERUNG_LESEN

Fahrzeugcodierung des LWS5 auslesen

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | Block der Codierdaten Bereich: derzeit 00 bis 06 |

### CODIERUNG_CHECK

Checksumme der Codierung des LWS5 auslesen

_No arguments._

### STATUS_KL30

Lesen des Unterspannungszählers

_No arguments._

### SPEICHER_LESEN

Lesen des ROM/RAM bzw. EEPROM-Speichers

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | Speichersegment Bereich: 01, 03, 04, 05 oder 0B |
| ADRESSE | long | Speicheradresse Bereich: 0x0000-0xFFFF |
| ANZAHL | int | Anzahl der Daten Bereich: 1 bis 256 |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### IDENT_E

Ident-Daten fuer Lenkwinkelsensor 5

_No arguments._

### CODIERUNG_SCHREIBEN_DATEI

Beschreiben der Codierdaten des LWS5 ueber Datei

| Name | Type | Description |
| --- | --- | --- |
| DATEI | string | Dateiname z.B.: "/EDIABAS/ECU/LWS5.cod" |

### ABGLEICH_SCHREIBEN

Programmieren der Abgleich-Werte

_No arguments._

### ABGLEICH_VORGEBEN

Vorgeben der Abgleichwerte

| Name | Type | Description |
| --- | --- | --- |
| ABGL_LRW_OFFSET | long | Abgleichwert: LRW-Offset Bereich: 0x0000-0xFFFF |
| ABGL_LWS_ID | int | Abgleichwert: LWS-ID Bereich: 0x00-0xFF |
| ABGL_FGSTNR | string | Abgleichwert: Fahrgestellnummer Bereich: ? String aus ? Zeichen / ACSII / rueckwaerts ? z.B.: ? |

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
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

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
| 0xXY | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Klemme 30 fehlerhaft |
| 0x02 | Sensorstrom ausserhalb Toleranz |
| 0x03 | 90 Grad-Differenz der Schleifer zu gross (Normalbetrieb) |
| 0x04 | 90 Grad-Differenz der Schleifer zu gross (Abgleichbetrieb) |
| 0x05 | EEPROM defekt |
| 0x06 | AD-Wandler defekt |
| 0x07 | ROM-Checkfehler |
| 0x08 | RAM-Checkfehler |
| 0x09 | keine ASC2-Botschaft |
| 0x0A | CAN-Stand falsch |
| 0x0B | LWS-ID falsch |
| 0x0C | CAN-Bus off |
| 0x0D | Lrw-Gradient zu gross |
| 0x0E | Lrw-Maximum ueberschritten |
| 0x0F | Stack-Fehler / Case-Fehler |
| 0x10 | Watchdog |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### STEUERN_DIGITAL

| SIGNAL | BYTE |
| --- | --- |
| B0 | 0x01 |
| KL87 | 0x02 |
| U_CAN | 0x04 |
| U_BAS | 0x08 |
| B4 | 0x10 |
| B5 | 0x20 |
| B6 | 0x40 |
| TAST | 0x80 |
| XY | 0xFF |

### ASCII

| ASCII_NR | ASCII_ZCH |
| --- | --- |
| 0x41 | A |
| 0x42 | B |
| 0x43 | C |
| 0x44 | D |
| 0x45 | E |
| 0x46 | F |
| 0x47 | G |
| 0x48 | H |
| 0x49 | I |
| 0x4A | J |
| 0x4B | K |
| 0x4C | L |
| 0x4D | M |
| 0x4E | N |
| 0x4F | O |
| 0x50 | P |
| 0x51 | Q |
| 0x52 | R |
| 0x53 | S |
| 0x54 | T |
| 0x55 | U |
| 0x56 | V |
| 0x57 | W |
| 0x58 | X |
| 0x59 | Y |
| 0x5A | Z |
| 0xXY | ? |
