# RDC.prg

## General

|  |  |
| --- | --- |
| File | RDC.prg |
| Type | PRG |
| Jobs | 21 |
| Tables | 6 |
| Origin | BMW TI-431 Stadlhofer |
| Revision | 1.2 |
| Author | BMW TI-431 Krueger, BMW TI-433 Gerd Huber, BMW TI-433 Winkler, GTI Peter Gross-Grueber, BMW Ti-430 Gall, BMW TI-430 Mueller |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Reifendruckkontrolle |  |  |
| ORIGIN | string | BMW TI-431 Stadlhofer |  |  |
| REVISION | string | 1.2 |  |  |
| AUTHOR | string | BMW TI-431 Krueger, BMW TI-433 Gerd Huber, BMW TI-433 Winkler, GTI Peter Gross-Grueber, BMW Ti-430 Gall, BMW TI-430 Mueller |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer Reifendruck-Control automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### IDENT

Ident-Daten fuer RDC

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

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

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | Speichersegment Bereich: 0x00-0xFF |
| ADRESSE | long | Speicheradresse Bereich: 0x0000-0xFFFF |
| ANZAHL | int | Anzahl der Daten Bereich: 1 bis 16 |

### STATUS_RAD_IO

Auslesen der Raddaten wenn alle Raeder zugeordnet

| Name | Type | Description |
| --- | --- | --- |
| STAT_RADPOS | int | Radposition {1,..,5} == {vl,vr,hl,hr,rr} |

### STATUS_IO

Auslesen der Statusbytes

_No arguments._

### STEUERN_DIGITAL

Ansteuern einiger Signale

| Name | Type | Description |
| --- | --- | --- |
| TST_REQ | int | Vorgeben Kalibriertaster |
| TST_VAL | int | Wert |
| DWA_REQ | int | Vorgeben DWA-Ausgang |
| DWA_VAL | int | Wert |
| BM_REQ | int | Vorgeben BandMode |
| BM_VAL | int | Wert |
| AER_REQ | int | Vorgeben Automatische Eigenrad. |
| AER_VAL | int | Wert |
| ERK_REQ | int | Vorgeben Eigenraderkennung |
| ERK_VAL | int | Wert |
| CAL_REQ | int | Vorgeben Kalibrieren |
| CAL_VAL | int | Wert |
| ANT_REQ | int | Vorgeben Antennentest |
| ANT_VAL | int | Wert |

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

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### ABGLEICHWERT_LESEN

Auslesen der Rad-Daten

| Name | Type | Description |
| --- | --- | --- |
| STAT_RADNR | int | laufende Nummer des Rades |

### ABGLEICHWERT_SCHREIBEN

Beschreiben der Rad-Kennung

| Name | Type | Description |
| --- | --- | --- |
| RADPOS | int | Radposition |
| RADID | string | RE-Kennung |

### RE_TELEGRAMM_LESEN

Auslesen des letzten Rad-Telegramms

| Name | Type | Description |
| --- | --- | --- |
| RADNR | int | laufende Nummer des Rades |

### RE_TELEGRAMM_CLEAR

Loeschen des RE-Telegramm-Zwischenspeichers

_No arguments._

### SETZE_TEL_ANZ_BIS_ER

Anzahl der RE-Telegramme bis Eigenradstatus auf den Wert ANZ_TEL setzen. Die neuen Daten werden gegenge- lesen und bei Nichtuebereinstimmung erneut geschreiben

| Name | Type | Description |
| --- | --- | --- |
| ANZ_TEL | int | Bereich: 2-255 bzw. 0x02-0xFF |

### SLEEP_MODE

SG in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x9D) wird aktiviert |

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
| 0x00 | Hardware: Betriebsspannung defekt |
| 0x04 | Hardware: Eigenraderkennung nicht moeglich |
| 0x05 | Hardware: EEPROM-Fehler Systemprozessor |
| 0x06 | Hardware: EEPROM-Fehler Kommunikationsprozessor |
| 0x07 | Hardware: RAM-Fehler Systemprozessor |
| 0x08 | Hardware: RAM-Fehler Kommunikationsprozessor |
| 0x09 | Hardware: RAM-Fehler Timerprozessor |
| 0x0b | Hardware: ROM-Fehler Systemprozessor |
| 0x0c | Hardware: ROM-Fehler Kommunikationsprozessor |
| 0x0d | Hardware: ROM-Fehler Timerprozessor |
| 0x10 | Hardware: Betriebsspannung Empfaenger defekt |
| 0x11 | Hardware: Betriebsstrom Empfaenger defekt |
| 0x12 | Hardware: Schnittstellenfehler System- mit Komm.-Prozessor |
| 0x13 | Hardware: Schnittstellenfehler System- mit Timer-Prozessor |
| 0x14 | Fremdraeder: Zuviele Radsensoren |
| 0x19 | Hardware: DWA-Ausgang defekt |
| 0x1a | Hardware: RDC-Taster Schluss nach Masse |
| 0x1b | Hardware: RDC-Taster Schluss nach Ub |
| 0x29 | Hardware: kein KBUS Empfang |
| 0x68 | Antenne vorne links: falsche Variante, defekt oder nicht gesteckt |
| 0x69 | Antenne vorne rechts: falsche Variante, defekt oder nicht gesteckt |
| 0x6a | Antenne hinten links: falsche Variante, defekt oder nicht gesteckt |
| 0x6b | Antenne hinten rechts: falsche Variante, defekt oder nicht gesteckt |
| 0x73 | Kalibrierung nicht moeglich |
| 0x80 | KL30 defekt |
| 0x81 | KL15 unterschiedlich: Hardware = AUS <> KBUS-Klemme = EIN |
| 0x82 | KL15 unterschiedlich: Hardware = EIN <> KBUS-Klemme = AUS |
| 0x2c | Radsensor: Batterie low vorne links |
| 0x2d | Radsensor: Sensorfehler vorne links |
| 0x2e | Uebertragungskanal: vorne links defekt |
| 0x2f | Radsensor: Batterie low vorne rechts |
| 0x30 | Radsensor: Sensorfehler vorne rechts |
| 0x31 | Uebertragungskanal: vorne rechts defekt |
| 0x32 | Radsensor: Batterie low hinten links |
| 0x33 | Radsensor: Sensorfehler hinten links |
| 0x34 | Uebertragungskanal: hinten links defekt |
| 0x35 | Radsensor: Batterie low hinten rechts |
| 0x36 | Radsensor: Sensorfehler hinten rechts |
| 0x37 | Uebertragungskanal: hinten rechts defekt |
| 0x38 | Radsensor: Batterie low Reserverad |
| 0x39 | Radsensor: Sensorfehler Reserverad |
| 0x3a | Radsensor: Reserverad sendet nicht |
| 0x3b | Radsensor: Batterie low, Radposition unbekannt |
| 0x3c | Radsensor: Sensorfehler, Radposition unbekannt |
| 0x3d | Uebertragungskanal defekt, Position unbekannt |
| 0x0E | defektes 5-Radsystem |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR |
| --- | --- | --- | --- |
| 0xFF | 0x01 | 0x01 | 0x01 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x01 | Fahrzeuggeschwindigkeit | km/h |
| 0xXY | unbekannte Umweltbedingung | XY |
