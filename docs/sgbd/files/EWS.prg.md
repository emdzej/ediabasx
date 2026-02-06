# EWS.prg

## General

|  |  |
| --- | --- |
| File | EWS.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 5 |
| Origin | BMW TI-433 Guecker |
| Revision | 1.44 |
| Author | BMW TI-433 Gerd Huber, BMW TI-433 Mario Spoljarec, BMW TI-433 Andreas Guecker |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische Wegfahrsperre 2 - alle Typen |  |  |
| ORIGIN | string | BMW TI-433 Guecker |  |  |
| REVISION | string | 1.44 |  |  |
| AUTHOR | string | BMW TI-433 Gerd Huber, BMW TI-433 Mario Spoljarec, BMW TI-433 Andreas Guecker |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer EWS automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer EWS

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

Diagnose mit EWS aufrecht erhalten

_No arguments._

### COD_LESEN

Auslesen der Codierdaten der EWS

_No arguments._

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten der EWS

_No arguments._

### HERSTELLDATEN_SCHREIBEN

Beschreiben der Herstellerdaten

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |
| BYTE4 | int | kann beliebig verwendet werden |

### STATUS_LESEN

Stati der EWS

_No arguments._

### STEUERN_DIGITAL

Ansteuern / Vorgeben digitaler Stati der EWS

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

Schreiben der ISN-Nummer in die EWS

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
| SCHL_FREIGABE | int | 0 : gesperrt / >0 : freigeschaltet |

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
| VK_STRING | string | VK-Daten-String bis zu 222 Byte Laenge |

### FGNR_LESEN

Auslesen der Fahrgestellnummer aus der EWS

_No arguments._

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
| 0x01 | Reinshagen |
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
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | falsche Schluesselidentifikation bei Schluessel Nummer 0 |
| 0x10 | falsche Schluesselidentifikation bei Schluessel Nummer 1 |
| 0x20 | falsche Schluesselidentifikation bei Schluessel Nummer 2 |
| 0x30 | falsche Schluesselidentifikation bei Schluessel Nummer 3 |
| 0x40 | falsche Schluesselidentifikation bei Schluessel Nummer 4 |
| 0x50 | falsche Schluesselidentifikation bei Schluessel Nummer 5 |
| 0x60 | falsche Schluesselidentifikation bei Schluessel Nummer 6 |
| 0x70 | falsche Schluesselidentifikation bei Schluessel Nummer 7 |
| 0x80 | falsche Schluesselidentifikation bei Schluessel Nummer 8 |
| 0x90 | falsche Schluesselidentifikation bei Schluessel Nummer 9 |
| 0x01 | falsches Passwort bei Schluessel Nummer 0 |
| 0x11 | falsches Passwort bei Schluessel Nummer 1 |
| 0x21 | falsches Passwort bei Schluessel Nummer 2 |
| 0x31 | falsches Passwort bei Schluessel Nummer 3 |
| 0x41 | falsches Passwort bei Schluessel Nummer 4 |
| 0x51 | falsches Passwort bei Schluessel Nummer 5 |
| 0x61 | falsches Passwort bei Schluessel Nummer 6 |
| 0x71 | falsches Passwort bei Schluessel Nummer 7 |
| 0x81 | falsches Passwort bei Schluessel Nummer 8 |
| 0x91 | falsches Passwort bei Schluessel Nummer 9 |
| 0x02 | falscher Wechselcode bei Schluessel Nummer 0 |
| 0x12 | falscher Wechselcode bei Schluessel Nummer 1 |
| 0x22 | falscher Wechselcode bei Schluessel Nummer 2 |
| 0x32 | falscher Wechselcode bei Schluessel Nummer 3 |
| 0x42 | falscher Wechselcode bei Schluessel Nummer 4 |
| 0x52 | falscher Wechselcode bei Schluessel Nummer 5 |
| 0x62 | falscher Wechselcode bei Schluessel Nummer 6 |
| 0x72 | falscher Wechselcode bei Schluessel Nummer 7 |
| 0x82 | falscher Wechselcode bei Schluessel Nummer 8 |
| 0x92 | falscher Wechselcode bei Schluessel Nummer 9 |
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
| 0x04 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 0 |
| 0x14 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 1 |
| 0x24 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 2 |
| 0x34 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 3 |
| 0x44 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 4 |
| 0x54 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 5 |
| 0x64 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 6 |
| 0x74 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 7 |
| 0x84 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 8 |
| 0x94 | Datenkommunikationsfehler zum S/E-Modul bei Schluessel Nummer 9 |
| 0xFF | Reset allgemein |
| 0x0F | Power-On-Reset |
| 0x1F | Clock-Monitor-Reset |
| 0x2F | Watchdog-Reset |
| 0x7F | Software-Interrupt |
| 0x8F | Illegal-Opcode-Trap |
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
| ENT_V | 0x04 | Vorgabe Entriegeln |
| DME_A | 0x10 | Vorgabe DME-Leitung ausfuehren |
| ANL_A | 0x20 | Vorgabe Anlasserrelais ausfuehren |
| ENT_A | 0x40 | Vorgabe Entriegeln ausfuehren |
| USE_A | 0x80 | Vorgabe Gebrauchen ausfuehren |
| XY | 0xXY | nicht definiertes Signal |
