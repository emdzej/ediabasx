# KOMBI46.prg

## General

|  |  |
| --- | --- |
| File | KOMBI46.prg |
| Type | PRG |
| Jobs | 53 |
| Tables | 13 |
| Origin | BMW TI-433 Dennert |
| Revision | 2.41 |
| Author | BMW TP-422 Zender, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBI E46 |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 2.41 |  |  |
| AUTHOR | string | BMW TP-422 Zender, BMW TI-433 Dennert |  |  |
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

### IDENT

Default ident job

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Pruefstempel 1. Byte (0-255), kann beliebig verwendet werden |
| BYTE2 | int | Pruefstempel 2. Byte (0-255), kann beliebig verwendet werden |
| BYTE3 | int | Pruefstempel 3. Byte (0-255), kann beliebig verwendet werden |

### GWSZ_OFFSET_LESEN

OFFSET-Wert des GWSZ aus EEPROM lesen

_No arguments._

### GWSZ_OFFSET_SCHREIBEN

OFFSET-Wert des GWSZ in EEPROM schreiben

| Name | Type | Description |
| --- | --- | --- |
| GWSZ_OFFSET_WERT | int | absoluter Offset-Wert des GWSZ |

### KALIBRIERFAKTOR_VERBRAUCH_LESEN

Kalibrierfaktor Verbrauch aus EEPROM W-Adr. 1B lesen

_No arguments._

### KALIBRIERFAKTOR_VERBRAUCH_SCHREIBEN

Kalibrierfaktor Verbrauch in EEPROM W-Adr. 1B schreiben

| Name | Type | Description |
| --- | --- | --- |
| KALIBRIERFAKTOR_WERT | long | Kalibrierfaktor Verbrauch (0-1000) |

### SIA_KORREKTUR_SCHREIBEN

Toggeln der SIA Inspektions- bzw. Oelservices

_No arguments._

### ZEITINSPEKTION_VORZIEHEN

Vorziehen der Zeitinspection vor der Zeitgrenze

| Name | Type | Description |
| --- | --- | --- |
| DATUM_MONAT | int | Monatsangabe [1-12], aktuelles Datum |
| DATUM_JAHR | int | Jahresangabe [0-99], akuelles Datum |

### ZEITINSPEKTIONSDATUM_SCHREIBEN

Beschreiben des Monats- u. Jahres-Bytes im EEPROM

| Name | Type | Description |
| --- | --- | --- |
| ZEITINSPEKTION_MONAT | int | Monatsangabe [1-12] |
| ZEITINSPEKTION_JAHR | int | Jahresangabe [0-99] |

### ZEITINSPEKTIONSDATUM_LESEN

Monats- u. Jahres-Byte des Zeitinspektionsdatums aus EEPROM WortAdr. 1C

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

### GWSZ_MINUS_OFFSET_LESEN

Gesamtwegstreckenzaehler aus Anwenderinfofeld auslesen und Offset abziehen

_No arguments._

### AIF_FG_NR_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### AIF_SIA_DATEN_LESEN

Anwenderinfofeld Block 3 auslesen

_No arguments._

### CODIERDATEN_LESEN

Codierdaten auslesen

_No arguments._

### TACHO_ENDWERT_LESEN

Auslesen des Tacho-Endausschlags aus dem EEPROM

_No arguments._

### STEUERN_SELBSTTEST

SG - Selbsttest ausloesen

_No arguments._

### STEUERN_ANZEIGE

Anzeigenkomponenten steuern

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Zu steuernde Komponente, siehe table Komponenten moegliche Uebergabeparamter: TACHO, DREHZAHL, TANKINHALT, KUEHLMITTELTEMPERATUR, VERBRAUCH |
| WERT | int | Winkelgrade im Bereich von (10-90) Grad, Mit Spruengen von mehr als 90 Grad sollten die Messwerke nicht beaufschlagt werden |

### STEUERN_GONG3

Gong3 ansteuern

_No arguments._

### STEUERN_PIEZO

interner Piezo ansteuern

_No arguments._

### STEUERN_TACHO_A

TACHO_A steuern

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | Geschwindigkeitwert in km/h, Wertebereich (3 bis 250) km/h |

### STEUERN_LEUCHTE

Leuchten in der Anzeigeeinheit ansteuern Es muessen 4 Argumente uebergeben werden. Die Belegung der Datenbytes ist separat beschrieben.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Belegung 1. Datenbytes: (0-0xFF) Bit0: RDKS Rot Bit1: RDKS Gelb Bit2: Gas Bit3: Bremsbelag Bit4: Tankverschluss Bit5: Allgem Bremsleuchte Bit6: frei Bit7: frei |
| BYTE2 | int | Belegung 2. Datenbytes: (0-0xFF) Bit0: CC-Kontur Bit1: CC-Tuer vorn rechts Bit2: CC-Tuer vorn links Bit3: CC-Tuer hinten rechts Bit4: CC-Tuer hinten links Bit5: CC-Heckklappe Bit6: CC-Abblendlicht links Bit7: CC-Abblendlicht rechts |
| BYTE3 | int | Belegung 3. Datenbytes: (0-0xFF) Bit0: Kuehlmittelstand Bit1: Check Engine CARB Bit2: ASC Bit3: Tempomat Bit4: Nebelscheinwerfer Bit5: CC-Ruecklicht links Bit6: CC-Ruecklicht rechts Bit7: Waschwasser |
| BYTE4 | int | Belegung 4. Datenbytes: (0-0xFF) Bit0: Tankreserve Bit1: Kuehlmitteluebertemperatur Bit2: Gurtwarnung Bit3: Oeldruck Rot Bit4: Oeldruck Gelb Bit5: Ladekontrolle Bit6: DDE Vorgluehen Bit7: Reserve1 |

### STEUERN_IO

I/O-Port-Ausgaenge steuern

| Name | Type | Description |
| --- | --- | --- |
| PORT6 | int | Belegung Datenbyte: (0-0x0F) Bit0: KL Blinker rechts Bit1: KL Blinker links Bit2: Kl Fernlicht Bit3: KL Nebelschlussleuchte Bit4: frei Bit5: frei Bit6: frei Bit7: frei1 |

### STATUS_IO_LESEN

Eingangs- und Ausgangsstati lesen

_No arguments._

### STATUS_ANALOG_LESEN

Spezielle analoge Eingaenge lesen

_No arguments._

### STATUS_TANKINHALT_LESEN

Tankinhalt lesen

_No arguments._

### STATUS_AUSSENTEMP_LESEN

Aussentemperatur lesen

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
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### STATUS_CAN_MOTORDREHZAHL_LESEN

Motordrehzahl ueber CAN auslesen

_No arguments._

### STATUS_CAN_KUEHLMITTELTEMP_LESEN

Kuehlmitteltemperatur ueber CAN auslesen

_No arguments._

### STATUS_CAN_GETRIEBEINFO_LESEN

Getriebeinformationen ueber CAN auslesen

_No arguments._

### STATUS_CAN_EINSPRITZMENGE_LESEN

Einspritzmenge (Verbrauch) ueber CAN auslesen

_No arguments._

### STATUS_CAN_SIGNALE_LESEN

weitere CAN-Signale auslesen

_No arguments._

### STATUS_TOENS_IO

Termischer Oelniveau Sensor Status I/O lesen

_No arguments._

### STATUS_TOENS_SG

Termischer Oelniveau Sensor Status SG lesen

_No arguments._

### ZCS_LESEN

Anwenderinfofeld Wortadr. 34-3D auslesen

_No arguments._

### STATUS_SIA_FINISH

SIA-Daten auslesen zur Fertigungskontrolle

_No arguments._

### C_FA_LESEN

Fahrzeugauftrag lesen Gueltiger Adressbereich: 0x10 - 0xDF (416 Bytes)

_No arguments._

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben Fahrzeugauftrag lesen Gueltiger Adressbereich: 0x10 - 0xDF (416 Bytes)

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

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

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x02 |
| ZEIT_RESET | 0x04 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x87 | K-Bus |
| 0x8F | Ueberspannung (U>16V) |
| 0xC7 | Tank-Hebelgeber_links |
| 0xD7 | Tank-Hebelgeber_rechts |
| 0xCE | Aussentemperatur |
| 0x8C | Klemme R |
| 0xCF | SIA-Reset |
| 0xBE | Lichtmodul-EEPROM-Fehler |
| 0xBF | KOMBI46-EEPROM, Codierung fehlerhaft/unvollstaendig |
| 0xC1 | Signal TWEG+ (Tacho) |
| 0x11 | TOG |
| 0x83 | Tacho A |
| 0xF0 | CAN BUS OFF |
| 0xF4 | keine CAN ID |
| 0xF5 | keine CAN ID ASC1 |
| 0xF6 | keine CAN ID DME1 |
| 0xF7 | keine CAN ID DME2 |
| 0xF8 | keine CAN ID DME4 |
| 0xF9 | keine CAN ID ASC3 |
| 0xFB | keine CAN ID EGS1 |
| 0xFC | keine CAN ID SMG1 |
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

### KOMPONENTEN

| ORT | BYTE |
| --- | --- |
| TACHO | 0x0A |
| DREHZAHL | 0x0B |
| TANKINHALT | 0x0C |
| KUEHLMITTELTEMPERATUR | 0x0D |
| VERBRAUCH | 0x0E |
| Fehler | 0xFF |
| unbekannt | 0xEE |

### TOENS_IO

| SOFTWARE | ADRESSE1 | ADRESSE2 | ADRESSE3 |
| --- | --- | --- | --- |
| 0x04 | 0x04A9 | 0x04C8 | 0x04B7 |
| 0x05 | 0x04A9 | 0x04C8 | 0x04B7 |
| 0x06 | 0x04A9 | 0x04C8 | 0x04B7 |
| 0x07 | 0x04A7 | 0x04C6 | 0x04B5 |
| 0xFF | 0xFFFF | 0xFFFF | 0xFFFF |

### TOENS_SG

| SOFTWARE | ADRESSE1 | ADRESSE2 | ADRESSE3 | ADRESSE4 | ADRESSE5 | ADRESSE6 | ADRESSE7 | ADRESSE8 | ADRESSE9 | ADRESSE10 | ADRESSE11 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x04 | 0x04A9 | 0x04C8 | 0x04B6 | 0x04CC | 0x04BD | 0x04B7 | 0x04D1 | 0x04FA | 0x04DD | 0x04DD | 0x04E3 |
| 0x05 | 0x04A9 | 0x04C8 | 0x04B6 | 0x04CC | 0x04BD | 0x04B7 | 0x04D1 | 0x04FA | 0x04DD | 0x04DD | 0x04E3 |
| 0x06 | 0x04A9 | 0x04C8 | 0x04B6 | 0x04CC | 0x04BD | 0x04B7 | 0x04D1 | 0x04FA | 0x04DD | 0x04DD | 0x04E3 |
| 0x07 | 0x04A7 | 0x04C6 | 0x04B4 | 0x04CA | 0x04BB | 0x04B5 | 0x04CF | 0x04F8 | 0x04DB | 0x04DB | 0x04E1 |
| 0xFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF |
