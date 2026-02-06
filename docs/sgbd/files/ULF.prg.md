# ULF.prg

## General

|  |  |
| --- | --- |
| File | ULF.prg |
| Type | PRG |
| Jobs | 28 |
| Tables | 6 |
| Origin | BMW TI-431 Weber |
| Revision | 1.01 |
| Author | Fa. Visteon, Afonso, BMW EE-43 Heigl, BMW EE-43 Villiers, BMW TI-431 Rochal, BMW TI-431 Weber |
| ECU Comment | Universelle Lade- und Freisprecheinrichtung |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ULF |  |  |
| ORIGIN | string | BMW TI-431 Weber |  |  |
| REVISION | string | 1.01 |  |  |
| AUTHOR | string | Fa. Visteon, Afonso, BMW EE-43 Heigl, BMW EE-43 Villiers, BMW TI-431 Rochal, BMW TI-431 Weber |  |  |
| COMMENT | string | Universelle Lade- und Freisprecheinrichtung |  |  |
| PACKAGE | string | 0.11 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Identdaten

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

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob

_No arguments._

### C_FG_AUFTRAG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

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

Steuergeraet in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | 500ms Inkrement |

### STEUERN_SELBSTTEST_AUDIO

Durchfuehrung des Selbsttests (Audio Loop back)

_No arguments._

### STATUS_IO_LESEN

Auslesen von Ein- und Ausgangsstati

_No arguments._

### MUTE_EIN

Activate audio mute

_No arguments._

### MUTE_AUS

Deactivate audio mute

_No arguments._

### NOTRUF_NR_LESEN

Notuf-Nummer lesen

_No arguments._

### NOTRUF_NR_SCHREIBEN

Notruf-Nummer schreiben

| Name | Type | Description |
| --- | --- | --- |
| NOTRUF_NR | string |  |

### BT_EIN

Activate Bluetooth

_No arguments._

### BT_AUS

Deactivate Bluetooth

_No arguments._

### BT_PASSKEY_LESEN

Lesen des Bluetooth Passkey

_No arguments._

### BT_PASSKEY_SCHREIBEN

Beschreiben des Bluetooth Passkey

| Name | Type | Description |
| --- | --- | --- |
| BT_PASSKEY | string |  |

### BT_GERAETEADRESSE_LESEN

Lesen der lokalen Bluetooth Geraeteadresse der ULF

_No arguments._

### BT_GERAETENAME_LESEN

Lesen der lokalen Bluetooth user-friendly name der ULF

_No arguments._

### RESET_TO_BASIC_STATE

Reset Bluetooth Passkey und Löschen gekoppelter Geräte

_No arguments._

### BT_ERKENNUNGSMODUS

Starten des Bluetooth Erkennungsmodus

_No arguments._

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x32 | Taste Handyhalterung klemmt |
| 0xAA | Interner Fehler / Speicherfehler |
| 0xBB | Interner Fehler / Bluetooth Fehler |
| 0xCC | Mikrofonfehler/Audiofehler |
| 0xEE | Interner Fehler / Speicherfehler (Selbsttest) |
| 0xFF | Interner Fehler / DSP-Fehler |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x40 | Fehler momentan vorhanden |
| 0xXY | unbekannte Fehlerart |

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
| 0xFF | unbekannter Hersteller |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
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
