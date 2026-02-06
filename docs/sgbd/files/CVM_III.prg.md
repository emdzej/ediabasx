# CVM_III.prg

## General

|  |  |
| --- | --- |
| File | CVM_III.prg |
| Type | PRG |
| Jobs | 16 |
| Tables | 8 |
| Origin | BMW TI-431 Mellersh |
| Revision | 1.2 |
| Author | BMW TI-431 Teepe, Mellersh |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Cabrio-Verdeck-Modul III E52 |  |  |
| ORIGIN | string | BMW TI-431 Mellersh |  |  |
| REVISION | string | 1.2 |  |  |
| AUTHOR | string | BMW TI-431 Teepe, Mellersh |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

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

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### FS_ZAEHLER

Default fs_zaehler job

_No arguments._

### FS_LESEN

fs_lesen job

_No arguments._

### IS_LESEN

is_lesen job

_No arguments._

### STATUS_LESEN

STATUS_LESEN job

_No arguments._

### HERSTELLER_LESEN

Default ident job

_No arguments._

### STEUERN_DIGITAL

STEUERN_DIGITAL job

| Name | Type | Description |
| --- | --- | --- |
| AUSGANG | string | anzusteuerndes Ventil |
| PASSWORD | string | Passwort bei Verdeckbewegungen |

### CODIERUNG_LESEN

Codierung lesen job

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | Bereich: 0-255 bzw. 0x00-0xFF |

### SPEICHER_LESEN

Lesen des internen Speichers des CVM Als Argumente werden die Anzahl und die Adresse der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | 1 - 32 |
| ADRESSE | int | 0x0000 - 0xFFFF |

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
| 0x01 | Codierdatensatz ungueltig, nicht codiert |
| 0x02 | Codierung unplausibel, Zuordnung CVM II oder III |
| 0x03 | Checksummenfehler ROM |
| 0x04 | Checksummenfehler EEPROM |
| 0x05 | Checksummenfehler in den Codierdaten |
| 0x06 | RAM-Check fehlerhaft |
| 0x07 | Watchdog-Fehler |
| 0x08 | Opcode-Fehler |
| 0x09 | Clock-Monitor-Fehler |
| 0x0A | Kommunikationsfehler K-Bus-Schnittstelle |
| 0x10 | Versorgung der VSW im Fahrzeug ausser Toleranz |
| 0x11 | Versorgung der VSW am Verdeck ausser Toleranz |
| 0x12 | Bedientaster 'Oeffnen' permanent aktiv |
| 0x13 | Bedientaster 'Schliessen' permanent aktiv |
| 0x14 | Temperaturfuehlereingang, permanent auf Masse |
| 0x15 | Temperaturfuehlereingang, kein Sensor angeschlossen |
| 0x16 | Poti Hauptsaeule, abgerissene |
| 0x17 | Poti Hauptsaeule, an Masse |
| 0x18 | Poti Spannbuegel, abgerissene |
| 0x19 | Poti Spannbuegel, an Masse |
| 0x1A | VSW 1.2, Eingangsspannung >5 Volt |
| 0x1B | VSW 1.2, Eingangsspannung undefiniert |
| 0x1C | VSW 1.2, Eingang an Masse |
| 0x1D | VSW 4.1, Eingangsspannung >5 Volt |
| 0x1E | VSW 4.1, Eingangsspannung undefiniert |
| 0x1F | VSW 4.1, Eingang an Masse |
| 0x20 | VSW 4.2, Eingangsspannung >5 Volt |
| 0x21 | VSW 4.2, Eingangsspannung undefiniert |
| 0x22 | VSW 4.2, Eingang an Masse |
| 0x23 | VSW 7.1, Eingangsspannung >5 Volt |
| 0x24 | VSW 7.1, Eingangsspannung undefiniert |
| 0x25 | VSW 7.1, Eingang an Masse |
| 0x26 | VSW 7.2, Eingangsspannung >5 Volt |
| 0x27 | VSW 7.2, Eingangsspannung undefiniert |
| 0x28 | VSW 7.2, Eingang an Masse |
| 0x29 | VSW 8, Eingangsspannung >5 Volt |
| 0x2A | VSW 8, Eingangsspannung undefiniert |
| 0x2B | VSW 8, Eingang an Masse |
| 0x2C | VSW 9, Eingangsspannung >5 Volt |
| 0x2D | VSW 9, Eingangsspannung undefiniert |
| 0x2E | VSW 9, Eingang an Masse |
| 0x2F | VSW HTOP, Eingangsspannung >5 Volt |
| 0x30 | VSW HTOP, Eingangsspannung undefiniert |
| 0x31 | VSW HTOP, Eingang an Masse |
| 0x40 | Entriegeln, Motorstrom H-Bruecke zu hoch, Kurzschluss |
| 0x41 | Verriegeln, Motorstrom H-Bruecke zu hoch, Kurzschluss |
| 0x42 | Kurzschluss Motorbruecke oder Motor nach Ub+ |
| 0x43 | Offene Last beim Entriegeln |
| 0x44 | Offene Last beim Verriegeln |
| 0x45 | V4SBA, nicht angeschlossen |
| 0x46 | V4SBA, Kurzschluss nach Masse |
| 0x47 | V4SBA, Kurzschluss nach UBatt |
| 0x48 | V3SBE, nicht angeschlossen |
| 0x49 | V3SBE, Kurzschluss nach Masse |
| 0x4A | V3SBE, Kurzschluss nach UBatt |
| 0x4B | Ausgaenge V4SBA und V2_HAUPT, durch Kurzschluss verbunden |
| 0x4C | V2_HAUPT, nicht angeschlossen |
| 0x4D | V2_HAUPT, Kurzschluss nach Masse |
| 0x4E | V2_HAUPT, Kurzschluss nach UBatt |
| 0x50 | V5GO, nicht angeschlossen |
| 0x51 | V5GO, Kurzschluss nach Masse |
| 0x52 | V5GO, Kurzschluss nach UBatt |
| 0x67 | Windlauf faehrt nicht auf |
| 0x68 | Windlauf faehrt nicht zu |
| 0x69 | RPUMPEA, nicht angeschlossen |
| 0x6A | RPUMPEA, Kurzschluss nach Masse |
| 0x6B | RPUMPEA, Kurzschluss nach UBatt |
| 0x6C | RPUMPEZ, nicht angeschlossen |
| 0x6D | RPUMPEZ, Kurzschluss nach Masse |
| 0x6E | RPUMPEZ, Kurzschluss nach UBatt |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x70 | Unterspannung an Klemme 30 |
| 0x71 | Ueberspannung an Klemme 30 |
| 0x72 | interne 5V-Versorgung ausserhalb Toleranz |
| 0x74 | keine ZKE-Antwort 'Tueren- / Klappenstatus' |
| 0x77 | Absenken Seitenscheiben nicht zurueckgemeldet |
| 0x78 | Anheben Seitenscheiben nicht zurueckgemeldet |
| 0x79 | kein Kombistatus erhalten |
| 0x7A | Verdeckstecker nicht gesteckt |
| 0x7B | SW in undefiniertem Zustand, Hardwarefehler |
| 0x7C | SW in undefiniertem Zustand, unbekannte Verdeckstellung |
| 0xFF | unbekannter Fehlerort |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x00 | ----   | ---- |
| 0x01 | Aussentemperatur | Grad C |
| 0xXY | unbekannte Umweltbedingung | -- |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| VENTIL1 | 1 | 0x01 |
| VENTIL2 | 1 | 0x02 |
| VENTIL3 | 1 | 0x04 |
| VENTIL4 | 1 | 0x08 |
| VENTIL5 | 1 | 0x10 |
| PUMPE | 1 | 0x20 |
| HHS | 1 | 0x40 |
| XXX | Y | Z |
