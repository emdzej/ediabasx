# KOMBI85.prg

## General

|  |  |
| --- | --- |
| File | KOMBI85.prg |
| Type | PRG |
| Jobs | 47 |
| Tables | 16 |
| Origin | BMW EE-42 Ramboeck |
| Revision | 2.200 |
| Author | BMW EI-42 Ramboeck, BMW TI-431 Dennert, Volke EI-42 Angerer, IAV EI-42 Wallmann |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | KOMBI E85  |  |  |
| ORIGIN | string | BMW EE-42 Ramboeck |  |  |
| REVISION | string | 2.200 |  |  |
| AUTHOR | string | BMW EI-42 Ramboeck, BMW TI-431 Dennert, Volke EI-42 Angerer, IAV EI-42 Wallmann |  |  |
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

Identdaten

_No arguments._

### IDENT_SW

Identdaten Software

_No arguments._

### FS_LESEN

Fehlerspeicherinhalt aus SG lesen

_No arguments._

### STATUS_GWSZ_OFFSET_LESEN

OFFSET-Wert des GWSZ aus EEPROM lesen

_No arguments._

### STEUERN_GWSZ_OFFSET_SCHREIBEN

OFFSET-Wert des GWSZ in EEPROM schreiben

| Name | Type | Description |
| --- | --- | --- |
| GWSZ_OFFSET_WERT | int | absoluter Offset-Wert des GWSZ |

### STATUS_KALIBRIERFAKTOR_VERBRAUCH_LESEN

Kalibrierfaktor Verbrauch aus EEPROM W-Adr. 1B lesen

_No arguments._

### STEUERN_KALIBRIERFAKTOR_VERBRAUCH_SCHREIBEN

Kalibrierfaktor Verbrauch in EEPROM W-Adr. 1B schreiben

| Name | Type | Description |
| --- | --- | --- |
| KALIBRIERFAKTOR_WERT | long | Kalibrierfaktor Verbrauch (0-1000) |

### STEUERN_SIA_KORREKTUR_SCHREIBEN

Toggeln der SIA Inspektions- bzw. Oelservices

_No arguments._

### STEUERN_ZEITINSPEKTION_DEAKTIVIEREN

Vorziehen der Zeitinspection vor der Zeitgrenze

| Name | Type | Description |
| --- | --- | --- |
| DATUM_MONAT | int | Monatsangabe [1-12], aktuelles Datum |
| DATUM_JAHR | int | Jahresangabe [0-99], akuelles Datum |

### STEUERN_ZEITINSPEKTIONSDATUM_SCHREIBEN

Beschreiben des Monats- u. Jahres-Bytes im EEPROM

| Name | Type | Description |
| --- | --- | --- |
| ZEITINSPEKTION_MONAT | int | Monatsangabe [1-12] |
| ZEITINSPEKTION_JAHR | int | Jahresangabe [0-99] |

### STATUS_ZEITINSPEKTIONSDATUM_LESEN

Monats- u. Jahres-Byte des Zeitinspektionsdatums aus EEPROM WortAdr. 1C

_No arguments._

### SOFTWARE_RESET

Kombi loest selbststaendig einen Reset aus

_No arguments._

### STEUERN_SIA_RESET

Ruecksetzen der Service-Intervall-Anzeige

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | moegliche Uebergabeparameter: Oel_Reset, Weg_Reset, Zeit_Reset, Liter_Reset |

### GWSZ_RESET

GWSZ zuruecksetzen, nur moeglich wenn Km-Stand < 255

_No arguments._

### STATUS_AIF_GWSZ_LESEN

Gesamtwegstreckenzaehler aus Anwenderinfofeld auslesen

_No arguments._

### STATUS_AIF_FG_NR_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### STATUS_AIF_SIA_DATEN_LESEN

Anwenderinfofeld Block 3 auslesen

_No arguments._

### STATUS_AIF_TANKDATEN_LESEN

Tankdaten aus Anwenderinfofeld auslesen

_No arguments._

### STATUS_AIF_AUSSENTEMP_LESEN

Tankdaten aus Anwenderinfofeld auslesen

_No arguments._

### STATUS_AIF_DATUM_UHRZEIT_LESEN

Eingestelltes Datum und Uhrzeit aus Anwenderinfofeld auslesen

_No arguments._

### STATUS_AIF_V_KMT_DZ_CON_LESEN

Auslesen von Fahrgeschwindigkeit, Kuehlmitteltemperatur, Drehzahl und Verbrauch aus dem Anwenderinfofeld

_No arguments._

### STATUS_TACHO_ENDWERT_LESEN

Auslesen des Tacho-Endausschlags aus dem EEPROM

_No arguments._

### STEUERN_SELBSTTEST

SG - Selbsttest ausloesen

_No arguments._

### STEUERN_ANZEIGE

Anzeigenkomponenten steuern

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Zu steuernde Komponente, siehe table Komponenten moegliche Uebergabeparamter: TACHO, DREHZAHL, TANKINHALT, .                            KUEHLMITTELTEMPERATUR |
| WERT | int | Winkelgrade im Bereich von (10-195) Grad, Mit Spruengen beaufschlagt werden |

### STEUERN_PIEZO

interner Piezo ansteuern

_No arguments._

### STEUERN_LEUCHTE

Details zur SW-Version mit JOB_IDENT_SW auslesen. Leuchten in der Anzeigeeinheit ansteuern. Zum Aufruf 4 Parameter in Folge mit Semikolon getrennt und ohne Leerzeichen i.d. Form dez (0..255), hex (0x00..0xFF) oder bin (0y00000000..0y11111111) uebergeben. Die Belegung der Datenbytes ist separat beschrieben. 

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Belegung 1. Datenbytes: (0..0xFF) Bit0: Kuehlmittelstand Bit1: Reifenluftdruck Bit2: Reifenpanne Bit3: Nebelschlussleuchte Bit4: EGS-Notprogramm Bit5: EPS Bit6: ASC_DSC Bit7: Kuehlmitteltbertemperatur |
| BYTE2 | int | Belegung 2. Datenbytes: (0..0xFF) Bit0: Check Control Bit1: Tank-Reserve Bit2: EML Bit3: E83/E85 SW<=7.1  --> nicht belegt, Reserve 1 .             SW>=7.52 --> Tueren-/Klappenstatus Bit4: E83              --> nicht belegt, Reserve 2 .         E85 SW>=7.1  --> DTC Bit5: Tankdeckel offen Bit6: Service Engine Soon (MIL) Bit7: Bremswarnleuchte |
| BYTE3 | int | Belegung 3. Datenbytes: (0..0xFF) Bit0: Airbag Bit1: Ladekontrolle Bit2: DBC Bit3: Fernlicht Bit4: Sicherheitsgurt Bit5: Oelstand Bit6: Bremsbelagverschleiss Bit7: Oeldruck |
| BYTE4 | int | Belegung 4. Datenbytes: (0..0xFF) Bit0: Blinker links Bit1: Blinker rechts Bit2: Nebelscheinwerfer Bit3: Tempomat Bit4: frei Bit5: frei Bit6: frei Bit7: frei |

### STATUS_IO_LESEN

Eingangs- und Ausgangsstati lesen

_No arguments._

### STATUS_ANALOG_LESEN

Spezielle analoge Eingaenge lesen

_No arguments._

### RAM_LESEN

Internen RAM-Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x000-0xFFF) der Adresse ,ab der das Ram gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der Bytes (max. 32 !) die ausgelesen werden sollen |

### EEPROM_LESEN

EEPROM-Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | string | Hexwert (0x00-0x3FF) der WortAdresse ,ab der das EEPROM gelesen werden soll |
| BYTE_ANZAHL | int | Anzahl der 2-Byte-Worte (max. 16 Worte = 32 Bytes), die ausgelesen werden koennen |

### STATUS_KOMBI_VERRIEGELT

_No description._

_No arguments._

### C_FA_LESEN

Fahrzeugauftrag lesen Gueltiger Adressbereich: 0x100 - 0x1BF (384 Bytes, 192 words)

_No arguments._

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben Fahrzeugauftrag lesen Gueltiger Adressbereich: 0x100 - 0x1BF (384 Bytes)

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### C_S_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_S_SCHREIBEN

Codierdaten schreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_S_LESEN

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_FG_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### C_CHECKSUM

Berechnung und Speicherung der Checksumme

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### STEUERN_BREMSLICHT

Steuern des Bremslichtes ueber Diagnose Nach Ausfuehren des Jobs wird das Bremslicht ueber K-Line im Lichtschaltzentrum angesteuert

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
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x11 | Oelstandssensor defekt |
| 0x20 | Airbag |
| 0x21 | SMG |
| 0x83 | Tacho A |
| 0x87 | K-Bus |
| 0x8C | Klemme R |
| 0x8F | Ueberspannung (U>16V) |
| 0xBB | KOMBI-EEPROM Checksumme 2 falsch |
| 0xBE | Lichtmodul-EEPROM-Fehler |
| 0xBF | KOMBI-EEPROM Checksumme 1 falsch, Codierung unvollstaendig |
| 0xC1 | Signal TWEG+ (Tacho) |
| 0xC7 | Tank-Hebelgeber_links |
| 0xCE | Aussentemperatur |
| 0xCF | SIA-Zaehlerstaende nicht plausibel |
| 0xD7 | Tank-Hebelgeber_rechts |
| 0xF0 | CAN BUS OFF |
| 0xF4 | keine CAN ID |
| 0xF5 | keine CAN ID ASC1 |
| 0xF6 | keine CAN ID DME1_DDE1 |
| 0xF7 | keine CAN ID DME2_DDE2 |
| 0xF8 | keine CAN ID DME4_DDE4 |
| 0xF9 | keine CAN ID ASC3 |
| 0xFA | keine CAN ID EPS1 |
| 0xFB | keine CAN ID EGS1 |
| 0xFC | keine CAN ID SMG1 |
| 0xFD | keine CAN ID DME3_DDE3 |
| 0xFF | unbekannter Fehlerort |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG_RESET | 0x02 |
| ZEIT_RESET | 0x04 |
| LITER_RESET | 0x08 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | ungültiger Arbeitsbereich |
| 0x05 | Fehler momentan vorhanden |
| 0x06 | sporadischer Fehler |
| 0xFF | unbekannte Fehlerart |

### FARTTEXTEERWEITERT_AIRBAG

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xx00xxxx | 0x00 | unbekannte Fehlerart (Maske 00) |
| xx01xxxx | 0x10 | Alive-Counter steht (Maske 01) |
| xx10xxxx | 0x20 | K-Bus Telegramm 70h ausgefallen (Maske 10) |
| xx11xxxx | 0x30 | Airbag-SG sendet waehrend Betrieb 'LED ein' (Maske 11) |
| xxxxxxxx | 0x00 | -- |

### GETRIEBETYPEN

| GETRIEBEART | GETRIEBETEXT |
| --- | --- |
| 0x00 | Schaltgetriebe |
| 0x02 | Automatikgetriebe |
| 0x03 | SMG Getriebe |
| 0xFF | unbekannte Getriebeart |

### GANGINFO

| GANGINFO | GANGTEXT |
| --- | --- |
| 0x01 | 1. Gang |
| 0x02 | 2. Gang |
| 0x03 | 3. Gang |
| 0x04 | 4. Gang |
| 0x05 | D |
| 0x06 | N |
| 0x07 | Rueckwaertsgang |
| 0x08 | P |
| 0x09 | 5. Gang |
| 0x0A | 6. Gang |
| 0xFF | unbekannte Getriebeinfo |

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
| unbekannt | 0xFF |

### OELINFO

| MASKE | INFOTEXT |
| --- | --- |
| 0x00 | Oelsensor i.O. |
| 0x01 | Oel unter Normalstand |
| 0x02 | Oelniveau Minimum |
| 0x03 | Oelniveau Minimum |
| 0x04 | Oelsensor defekt |
| 0x05 | Oelniveau i.O. |
| 0xFF | unbekannte Oelinfo |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
| an | 1 |
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
| up | 1 |
| down | 0 |
| true | 1 |
| false | 0 |
| 1 | 1 |
| 0 | 0 |
