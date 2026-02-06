# NAVMK4_2.prg

## General

|  |  |
| --- | --- |
| File | NAVMK4_2.prg |
| Type | PRG |
| Jobs | 41 |
| Tables | 15 |
| Origin | BMW EI-44 Bernd Biechele |
| Revision | 2.000 |
| Author | BMW EI-44 Biechele |
| ECU Comment | NAVMK4_2 fuer Diagnoseindex 06 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Navigationsrechner MK3 / Roadrunner |  |  |
| ORIGIN | string | BMW EI-44 Bernd Biechele |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | BMW EI-44 Biechele |  |  |
| COMMENT | string | NAVMK4_2 fuer Diagnoseindex 06 |  |  |
| PACKAGE | string | 1.03 |  |  |
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

Init-Job Navigationsrechner

_No arguments._

### STATUS_LESEN

_No description._

_No arguments._

### IDENT

Ident-Daten fuer Navigationsrechner

_No arguments._

### FS_LESEN

Fehlerspeicher lesen High Konzept nach LH Codierung/Diagnose mit Umweltbeding

_No arguments._

### IS_LESEN

Fehlerspeicher lesen High Konzept nach LH Codierung/Diagnose mit Umweltbeding

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### SPEICHER_LESEN

Lesen, welche Software geladen ist

_No arguments._

### SPEICHER_SCHREIBEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| SPRACHE_1 | int | Sprache 1 der Sprachauswahl |
| SPRACHE_2 | int | Sprache 2 der Sprachauswahl |
| SPRACHE_3 | int | Sprache 3 der Sprachauswahl |

### SPEICHER_LOESCHEN

Sprachen loeschen

_No arguments._

### READ_CODING_DATA

Auslesen der Codierdaten

_No arguments._

### WRITE_CODING_DATA

Schreiben der configuration data

| Name | Type | Description |
| --- | --- | --- |
| COD_LAENDERVARIANTE_WERT | string | Wert des Bytes Laendervariante 0-2 |
| COD_SPEED_MAPS_WERT | string | Wert des Bytes SPEED_MAPS, derzeit unbenutzt |
| COD_SPEED_ROUTE_WERT | string | Wert des Bytes ROUTE_MAPS, derzeit unbenutzt |
| COD_USER_INPUT_WERT | string | Wert des Bytes USER_INPUT, derzeit unbenutzt |
| COD_VIN_WERT | string | Vin Wert = 7 Byte lang |
| COD_CAR_TYPE_WERT | string | Wert des Bytes CAR_TYPE |
| COD_NOT_RUF | string | Wert des Bytes COD_NOT_RUF |

### STEUERN_SELBSTTEST

Selbsttest Navigationsrechner

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen im Navigationsrechner

_No arguments._

### QUICK_ERASE

Fehlerspeicher loeschen ohne BUSY abzuwarten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### DIAGNOSE_ERHALTEN

Diagnose aufrechterhalten

_No arguments._

### SYSTEM_PARAMETER_LESEN

_No description._

_No arguments._

### SW_DEMAND_FLAG_SETZEN

Herstellen des Auslieferzustandes

_No arguments._

### WRITE_CONFIGURATION_DATA

Schreiben der configuration data

| Name | Type | Description |
| --- | --- | --- |
| KONFIG_CUSTOMER | string | Customer, z.B. BMW |
| KONFIG_SWDISPLAYTYPE | string | SW/Display type, z.B. C01 oder M01 |
| KONFIG_NAVIGATIONS_MODE | string | Navigation mode, z.B. S |

### READ_CONFIGURATION_DATA

Auslesen der configuration data

_No arguments._

### READ_PRODUCTION_STAMP_RECORD

Production stamp record lesen

_No arguments._

### WRITE_PRODUCTION_STAMP_RECORD

Schreiben der configuration data

| Name | Type | Description |
| --- | --- | --- |
| GOOD_BAD_STATUS | string | Good/Bad Status |
| LAST_PRODUCT_PROCESS | string | Last product process |
| TYPE_SERIAL_NUMBER | string | Ty serial number |

### READ_PRODUCTION_STAMP_TABLE

Production stamp table lesen

| Name | Type | Description |
| --- | --- | --- |
| PAGENR | string | Auswahl der Infopage |

### READ_PRODUCTION_STAMP_TABLE_QUICK_INFO

Production stamp table lesen

_No arguments._

### SET_NO_SAVE_NVR

Speicherungs Verbot

_No arguments._

### REMOVE_NO_SAVE_NVR

Speicherungs Freigabe

_No arguments._

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_SCHREIBEN

Codierdaten schreiben ohne Verifikation

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### STATUS_GPS_ANTENNA

_No description._

_No arguments._

### SPRACHAUSGABE

Sprachausgabe Navigationsrechner

_No arguments._

### FORCE_EJECT

Freigabe der Eject Taste

_No arguments._

### SCHREIBEN_NAVDVDPIN

Freigabecode zum Eject

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | datenbereich 0x30 - 0x39 |
| BYTE2 | int | datenbereich 0x30 - 0x39 |
| BYTE3 | int | datenbereich 0x30 - 0x39 |
| BYTE4 | int | datenbereich 0x30 - 0x39 |

### NAVDVDPIN_LESEN

Auslesen der 4 Stellen des CD eject Freigabecodes

_No arguments._

### STEUERN_FLOTTENMODUS

Flottenmodus Status

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | datenbereich 0x00 - 0x02 |

### STATUS_FLOTTENMODUS

Auslesen des Stati des Flottenmodus

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
| 0x76 | CEL |
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

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Navigationsrechner |
| 0x02 | Radsensor |
| 0x03 | Eingaenge Peripherie |
| 0x04 | GPS Receiver reagiert nicht auf Initialisierung von NavMk3 |
| 0x05 | Temperatur zu hoch |
| 0x06 | Anwendungs Software |
| 0x07 | Display |
| 0x08 | Audio |
| 0x09 | CD-Fehler |
| 0xFF | unbekannter Fehlerort |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x3B | CARIN CD in MK3 fehlt |
| 0x4B | Video |
| 0x4F | Audio |
| 0x51 | CD Lesen |
| 0x52 | Checksum Instruction EEPROM |
| 0x53 | Checksum Sprach EEPROM |
| 0x54 | Checksum Datei Verwaltung EEPROM |
| 0x55 | Kommunikation Display Bus |
| 0x62 | Gyro Wert nicht im Toleranzbereich |
| 0x63 | Schnittstelle Temperatur Sensor |
| 0x64 | Initialisierung GPS-Empfaenger |
| 0x65 | Luefterfuntion |
| 0x68 | 5V Spannungsversorgung CD-Player |
| 0x69 | 5V Spannungsversorgung |
| 0x6A | 12V Spannungsversorgung CD-Player |
| 0x6B | Spannungsversorgung Sensoren |
| 0x6C | Interne Temperatur zu hoch |
| 0x70 | Interne Temperatur CD-Player zu hoch |
| 0x71 | CD-Player |
| 0x72 | Slave memory |
| 0x73 | Bootcode memory |
| 0x74 | DRAM memory |
| 0x7C | CD-Player |
| 0x7D | CD-Player |
| 0x7E | CD-Player |
| 0x98 | Unerwartetes Software Ereignis, Reset Navigationsrechner |
| 0x99 | Unerwartetes Software Ereignis, Reset Navigationsrechner |
| 0xB5 | Busfehler, Reset Navigationsrechner |
| 0xB6 | Adressfehler, Reset Navigationsrechner |
| 0xFF | Unbekannter Fehlercode im Shadowspeicher |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x40 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |

### LAENDERCODEZIELLAND

| CODE | ZIELLAND |
| --- | --- |
| 0x00 | Deutschland |
| 0x01 | englisch UK |
| 0x02 | englisch US |
| 0x03 | Italien |
| 0x04 | Spanien |
| 0x05 | englisch Japan |
| 0x06 | Frankreich |
| 0x07 | CDN |
| 0x08 | Aus/Golf/ZA |
| 0xFF | unbekanntes Land |

### CODESPRACHEN

| CODE | SPRACHEN |
| --- | --- |
| 0x00 | deutsch maennlich |
| 0x80 | deutsch weiblich |
| 0x01 | englisch UK maennlich |
| 0x81 | englisch UK weiblich |
| 0x02 | englisch US maennlich |
| 0x82 | englisch US weiblich |
| 0x03 | italienisch maennlich |
| 0x83 | italienisch weiblich |
| 0x04 | spanisch maennlich |
| 0x84 | spanisch weiblich |
| 0x05 | englisch UK maennlich |
| 0x85 | englisch UK weiblich |
| 0x06 | franzoesisch maennlich |
| 0x86 | franzoesisch weiblich |
| 0x07 | englisch US maennlich |
| 0x87 | englisch US weiblich |
| 0x08 | englisch UK maennlich |
| 0x88 | englisch UK weiblich |
| 0x89 | hollaendisch weiblich |
| 0x8A | russisch weiblich |
| 0xFF | keine Sprache |

### CODESOFTWARELADENTEXT

| CODE | TEXT |
| --- | --- |
| 0x00 | Software erfolgreich geladen |
| 0x01 | Software laden erforderlich |
| 0xFF | unplausibler Wert |

### FLOTTENMODUS

| CODE | FLOTTENMODUS |
| --- | --- |
| 0x00 | keine NAVI-DVD Sperrung |
| 0x01 | NAVI-DVD ist mit PIN-Code gesperrt |
| 0x02 | NAVI-DVD ist immer gesperrt |
