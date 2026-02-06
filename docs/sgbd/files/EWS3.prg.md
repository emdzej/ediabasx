# EWS3.prg

## General

|  |  |
| --- | --- |
| File | EWS3.prg |
| Type | PRG |
| Jobs | 47 |
| Tables | 12 |
| Origin | BMW EI-61 Christian Röhrig |
| Revision | 2.000 |
| Author | BMW EI-61 Christian Roehrig |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische Wegfahrsperre Entwicklungs SGBD |  |  |
| ORIGIN | string | BMW EI-61 Christian Röhrig |  |  |
| REVISION | string | 2.000 |  |  |
| AUTHOR | string | BMW EI-61 Christian Roehrig |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.03 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### IDENT

Identdaten

_No arguments._

### INITIALISIERUNG

Init-Job fuer EWS3 automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### DIAGNOSE_FORTSETZEN

Diagnose mit EWS3 aufrecht erhalten

_No arguments._

### COD_LESEN

Auslesen der Codierdaten der EWS3

_No arguments._

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten der EWS3

_No arguments._

### HERSTELLDATEN_SCHREIBEN

Beschreiben der Herstellerdaten

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |
| BYTE4 | int | kann beliebig verwendet werden |

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

### STATUS_LESEN

Stati der EWS

_No arguments._

### STEUERN_DIGITAL

Ansteuern / Vorgeben digitaler Stati der EWS3

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | 1. Signal table BITS NAME ART TEXT |
| ORT2 | string | 2. Signal |
| ORT3 | string | 3. Signal |
| ORT4 | string | 4. Signal |

### ISN_LESEN

Auslesen der ISN-Nummer aus der EWS

_No arguments._

### ISN_SCHREIBEN

Schreiben der ISN-Nummer in die EWS

| Name | Type | Description |
| --- | --- | --- |
| ISN | string | 16 Bit |

### WECHSELCODE_SYNC_DME

Wechselcodesynchronisation EWS 3 - DME anstossen

_No arguments._

### SCHL_SPERREN_FREIGEBEN

Schluessel freischalten und sperren

| Name | Type | Description |
| --- | --- | --- |
| NUMMER | int | 0 bis 9 |
| FREIGABE | int | 0 : sperren / >0 : freischalten |

### PASSWORT_LESEN

Auslesen des Passworts aus der EWS

_No arguments._

### PASSWORT_SCHREIBEN

Schreiben des Passworts in die EWS

| Name | Type | Description |
| --- | --- | --- |
| PASSWORT | string | 6 Byte |

### SCHL_DATEN_LESEN

Auslesen der Schluesseldaten aus der EWS

| Name | Type | Description |
| --- | --- | --- |
| NUMMER | int | 0 bis 9 |

### SCHL_DATEN_SCHREIBEN

Schreiben der Schluesseldaten in die EWS

| Name | Type | Description |
| --- | --- | --- |
| SCHL_NUMMER | int | 0 bis 9 |
| SCHL_IDENT | string | 8 Byte |
| SCHL_FREIGABE | int | Bit 1 : freischalten / Bit 2 K-Bus-Telegramm / Bit 7 selbstinit |

### KD_DATEN_LESEN

Auslesen der Kundendienstdaten aus der EWS

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | 0 bis 11 |

### KD_DATEN_SCHREIBEN

Schreiben der Kundendienst in die EWS

| Name | Type | Description |
| --- | --- | --- |
| KD_BLOCK | int | 0 bis 11 |
| KD_DATEN | string | 16 Byte |

### KD_INIT

Schreiben der VK-Daten in das EWS

| Name | Type | Description |
| --- | --- | --- |
| VK_STRING | string | VK-Daten-String bis zu 222 Byte Laenge, es erfolgt derzeit keine Bearbeitung |

### KD_INIT_R50

Schreiben der VK-Daten in das EWS

| Name | Type | Description |
| --- | --- | --- |
| VK_STRING | string | VK-Daten-String bis zu 222 Byte Laenge, es erfolgt derzeit keine Bearbeitung |

### FGNR_LESEN

Auslesen der Fahrgestellnummer aus der EWS

_No arguments._

### FGNR_SCHREIBEN

Schreiben der 17-stelligen Fahrgestellnummer inkl. PZ

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (17-stellig) |

### FGNR_K_SCHREIBEN

Schreiben der 7-stelligen Fahrgestellnummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (7-stellig) |

### ZCS_LESEN

Auslesen des Zentralen Codierschluessels aus KD-Daten

_No arguments._

### SCHLUESSEL_DATEN_0_BIS_3_LESEN

Auslesen der Schluesseldaten aus der EWS

_No arguments._

### COD_ZEIT_WS_SCHREIBEN

Schreiben der Schaerfzeit der WS

| Name | Type | Description |
| --- | --- | --- |
| ZEIT_WS | int | Schaerfzeit der WS in Sekunden |

### COD_EWS_DME3_SCHREIBEN

Schreiben der Schaerfzeit der WS

_No arguments._

### STEUERN_SELBSTTEST

Schreibzugriff auf den Transponder via EWS-SG

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | 0 bis 7, Transponderblocknummer |
| POSITION | int | 0 bis 15, Byteposition innerhalb des Blocks |
| DATENBYTE | int | Datenbyte fuer den Transponder |

### STATUS_SW_VERSION

Ermittlung der internen SG-SW

_No arguments._

### C_FG_LESEN

Auslesen der Fahrgestellnummer aus der EWS

_No arguments._

### C_FG_AUFTRAG

Schreiben der 17-stelligen Fahrgestellnummer (incl. Pruefziffer)

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_ZCS_LESEN

Auslesen des Zentralen Codierschluessels aus KD-Daten

_No arguments._

### C_ZCS_AUFTRAG

Schreiben des Zentralen Codierschluessels in die KD-Daten

| Name | Type | Description |
| --- | --- | --- |
| GM | string | Zentralcode C1 - Grundmerkmal |
| SA | string | Zentralcode C2 - Sonderausstattung |
| VN | string | Zentralcode C3 - Versionsmerkmal |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_AZCS_LESEN

Read out ADDITIONAL ZCS data from Customer-data area

_No arguments._

### C_AZCS_AUFTRAG

Write the Rover Additional ZCS into customer-data block

| Name | Type | Description |
| --- | --- | --- |
| AGM | string | Additional Zentralcode C1 - Not used (9 chars = 8 chars + 1 char csum) |
| ASA | string | Additional Zentralcode C2 = 17-chars = 6 chars(unused) + 10  FEATURES chars + 1 char csum(unused) |
| AVN | string | Additional Zentralcode C3 = 11-chars = 6 chars(unused) + 4  MARKET chars + 1 char csum(unused) |

### KD_POLSTER_LACK_SCHREIBEN

Schreiben der Kundendienstdaten POLSTER und LACK in die EWS3

| Name | Type | Description |
| --- | --- | --- |
| POLSTER | string | Polstercode |
| LACK | string | Lackcode |

### STATUS_EWS

Informationen über das EWS4 Steuergerät anzeigen

_No arguments._

### STATUS_EWS4_SK

EWS4.4 Steuergeraet SK lesen

_No arguments._

### STEUERN_EWS4_SK

SK in das EWS4.3 Steuergeraet schreiben

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | WRITE_SERVER_SK  or LOCK_SERVER_SK |
| DATA | string | Byte1...16 separated by blanks or commas 16 Byte Daten (SecretKey), if MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK no DATA necessary if MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |

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
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Schluessel Nr.0 ungueltig wegen fehlerhafter Identifikation |
| 0x10 | Schluessel Nr.1 ungueltig wegen fehlerhafter Identifikation |
| 0x20 | Schluessel Nr.2 ungueltig wegen fehlerhafter Identifikation |
| 0x30 | Schluessel Nr.3 ungueltig wegen fehlerhafter Identifikation |
| 0x40 | Schluessel Nr.4 ungueltig wegen fehlerhafter Identifikation |
| 0x50 | Schluessel Nr.5 ungueltig wegen fehlerhafter Identifikation |
| 0x60 | Schluessel Nr.6 ungueltig wegen fehlerhafter Identifikation |
| 0x70 | Schluessel Nr.7 ungueltig wegen fehlerhafter Identifikation |
| 0x80 | Schluessel Nr.8 ungueltig wegen fehlerhafter Identifikation |
| 0x90 | Schluessel Nr.9 ungueltig wegen fehlerhafter Identifikation |
| 0x01 | Schluessel Nr.0 ungueltig wegen fehlerhaftem Passwort |
| 0x11 | Schluessel Nr.1 ungueltig wegen fehlerhaftem Passwort |
| 0x21 | Schluessel Nr.2 ungueltig wegen fehlerhaftem Passwort |
| 0x31 | Schluessel Nr.3 ungueltig wegen fehlerhaftem Passwort |
| 0x41 | Schluessel Nr.4 ungueltig wegen fehlerhaftem Passwort |
| 0x51 | Schluessel Nr.5 ungueltig wegen fehlerhaftem Passwort |
| 0x61 | Schluessel Nr.6 ungueltig wegen fehlerhaftem Passwort |
| 0x71 | Schluessel Nr.7 ungueltig wegen fehlerhaftem Passwort |
| 0x81 | Schluessel Nr.8 ungueltig wegen fehlerhaftem Passwort |
| 0x91 | Schluessel Nr.9 ungueltig wegen fehlerhaftem Passwort |
| 0x02 | Schluessel Nr.0 ungueltig wegen fehlerhaftem Wechselcode |
| 0x12 | Schluessel Nr.1 ungueltig wegen fehlerhaftem Wechselcode |
| 0x22 | Schluessel Nr.2 ungueltig wegen fehlerhaftem Wechselcode |
| 0x32 | Schluessel Nr.3 ungueltig wegen fehlerhaftem Wechselcode |
| 0x42 | Schluessel Nr.4 ungueltig wegen fehlerhaftem Wechselcode |
| 0x52 | Schluessel Nr.5 ungueltig wegen fehlerhaftem Wechselcode |
| 0x62 | Schluessel Nr.6 ungueltig wegen fehlerhaftem Wechselcode |
| 0x72 | Schluessel Nr.7 ungueltig wegen fehlerhaftem Wechselcode |
| 0x82 | Schluessel Nr.8 ungueltig wegen fehlerhaftem Wechselcode |
| 0x92 | Schluessel Nr.9 ungueltig wegen fehlerhaftem Wechselcode |
| 0x03 | WC-Toleranz erhoeht bei Schluessel Nummer 0 |
| 0x13 | WC-Toleranz erhoeht bei Schluessel Nummer 1 |
| 0x23 | WC-Toleranz erhoeht bei Schluessel Nummer 2 |
| 0x33 | WC-Toleranz erhoeht bei Schluessel Nummer 3 |
| 0x43 | WC-Toleranz erhoeht bei Schluessel Nummer 4 |
| 0x53 | WC-Toleranz erhoeht bei Schluessel Nummer 5 |
| 0x63 | WC-Toleranz erhoeht bei Schluessel Nummer 6 |
| 0x73 | WC-Toleranz erhoeht bei Schluessel Nummer 7 |
| 0x83 | WC-Toleranz erhoeht bei Schluessel Nummer 8 |
| 0x93 | WC-Toleranz erhoeht bei Schluessel Nummer 9 |
| 0xFF | Reset allgemein |
| 0x0F | Power-On-Reset |
| 0x1F | Clock-Monitor-Reset |
| 0x2F | Watchdog-Reset |
| 0x3F | Illegal-Opcode-Trap |
| 0x7F | Software-Interrupt |
| 0x0E | DME-Wechselcode XOR-Fehler |
| 0x1E | DME-Wechselcode verloren |
| 0xXY | unbekannter Fehlerort |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0A | Kein Motorstart bei laufendem Anlasser |
| 0x1A | Keine Anlasserfreigabe durch EWS-Steuergeraet |
| 0x2A | Fangbereichszaehler fuer Weiterschaltung erhoeht |
| 0x3A | Automatische Konfiguration eines Schluessels schlug fehl |
| 0xEA | Übertraungsfehler auf Datenleitung zur DME D_EWS |
| 0xFFFF | unbekannter Fehlerort |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |

### BITS

| NAME | MASK | TEXT |
| --- | --- | --- |
| DME_V | 0x01 | Vorgabe DME-Leitung |
| ANL_V | 0x02 | Vorgabe Anlasserrelais |
| TRP_V | 0x04 | Vorgabe Transponder |
| USE_V | 0x08 | Vorgabe Gebrauchen |
| DME_A | 0x10 | Vorgabe DME-Leitung ausfuehren |
| ANL_A | 0x20 | Vorgabe Anlasserrelais ausfuehren |
| TRP_A | 0x40 | Vorgabe Transponder ausfuehren |
| USE_A | 0x80 | Vorgabe Gebrauchen ausfuehren |
| XY | 0xXY | nicht definiertes Signal |
