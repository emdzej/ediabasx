# mraabs2.prg

## General

|  |  |
| --- | --- |
| File | mraabs2.prg |
| Type | PRG |
| Jobs | 26 |
| Tables | 16 |
| Origin | I+ME Actia GmbH, Keck |
| Revision | 1.070 |
| Author | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ABS Steuergerät ABS2 |  |  |
| ORIGIN | string | I+ME Actia GmbH, Keck |  |  |
| REVISION | string | 1.070 |  |  |
| AUTHOR | string | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.52 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### START_KOMMUNIKATION

_No description._

_No arguments._

### STOP_KOMMUNIKATION

Beenden der Diagnose

_No arguments._

### DIAGNOSE_AUFRECHT

_No description._

_No arguments._

### BAUDRATE_SETZEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATEN_WERT | int |  |

### FS_LESEN

_No description._

_No arguments._

### FS_LOESCHEN

_No description._

_No arguments._

### IDENT

Steuergeräte Identifikation lesen

_No arguments._

### SG_SOFTWARESTAND

_No description._

_No arguments._

### STATUS_ABS_TASTER

Status ABS Quittiertaste auslesen

_No arguments._

### STATUS_CODIERUNG_KABELBAUM

Kodierung Kabelbaum auslesen

_No arguments._

### STATUS_CODIERUNG_EEPROM

Codierung EEPROM auslesen

_No arguments._

### STATUS_SENSORFREQUENZ

Raddrehzahlfrequenzen auslesen

_No arguments._

### STATUS_RADGESCHWINDIGKEIT

_No description._

_No arguments._

### STATUS_EEPROM_LESEN

_No description._

_No arguments._

### STATUS_ANALOG_WERTE

Auslesen von analogen Messwerten

_No arguments._

### STEUERN_WARNLAMPE_1

Testbrett Lampe W, Warnlampe 1, Warnlampen Relais (Öffner)

| Name | Type | Description |
| --- | --- | --- |
| WERT | string | Ein, Aus |

### STEUERN_WARNLAMPE_2

Testbrett Lampe K, Warnlampe 2

| Name | Type | Description |
| --- | --- | --- |
| WERT | string | Ein, Aus |

### STEUERN_WARNLAMPE_ZURUECKSETZEN

Hardware TestModus ausschalten, für Warnlampe 1, 2

_No arguments._

### STEUERN_WARNLAMPEN_TEST

Testbrett Lampe K, Warnlampe 2 Testbrett Lampe W, Warnlampe 1, Warnlampen Relais (Öffner)

_No arguments._

### STEUERN_FMW_TEST

FMW - Find Maximum Way Vorderrad und Hinterrad PWM/Weg Kennlinie, Spec Punkt 4.9.1

_No arguments._

### STEUERN_ELG_TEST

ELG - Entlastungsgradient Vorderrad und Hinterrad Spec Punkt 4.9.2

_No arguments._

### STEUERN_PUMPENMOTOR

Pumpenmotor ansteuern Messung der Batteriespannung unter Last Angabe Parameter Zeit ist optional Spec Punkt 4.5

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit in Sekunden, max. 20 Sekunden |

### STEUERN_ABS_RELAIS

Messung Motor Relais Schließzeit Spec Punkt 4.9.3

_No arguments._

### STEUERN_CODIERUNG_EEPROM_LOESCHEN

Codierung EEPROM löschen

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Warnlampen defekt |
| 0x02 | Sensor Vorderrad |
| 0x03 | Sensor Hinterrad |
| 0x04 | Laufzeit ABS-Motor zu lang |
| 0x05 | ISO defekt |
| 0x06 | Fahrzeugkodierung falsch |
| 0x07 | Interne Störung |
| 0x08 | Überlastung Modulator |
| 0x09 | Regelgüte Lageregler |
| 0x0A | ABS-Kolben Vorderrad |
| 0x0B | Sensorversorgung |
| 0x0C | ABS-Kolben Hinterrad |
| 0x0D | Plungertestfehler |
| 0x0E | Elektronikfehler |
| 0x0F | ABS-Relais |
| 0x10 | ABS-Kolbenfehler |
| 0x11 | Sensor Vorderrad |
| 0x12 | Vorderrad Elektronik |
| 0x13 | Sensor Vorderrad |
| 0x14 | ABS-Kolben Vorderrad |
| 0x15 | Sensor Hinterrad |
| 0x16 | Hinterrad-Elektronik |
| 0x17 | Sensor Hinterrad |
| 0x18 | ABS-Kolben Hinterrad |
| 0x19 | Elektronikfehler |
| 0x1A | ABS-Relais |
| 0x1B | ABS-Kolbenfehler |
| 0x1C | Radblockierer Vorn |
| 0x1D | - |
| 0x1E | Modulator defekt |
| 0x1F | Modulator defekt |
| 0x20 | Radblockierer Hinten |
| 0x21 | - |
| 0x22 | Elektronikfehler |
| 0x23 | EEPROM-Fehler |
| 0x24 | Unzulässige Fahrzeugkodierung |
| 0x25 | Batterieüberspannung |
| 0x26 | Interne Störung |
| 0x27 | Interne Störung |
| 0x28 | Interne Störung |
| 0x29 | Interne Störung |
| 0x2A | - |
| 0x2B | Interne Störung |
| 0x2C | Interne Störung |
| 0x2D | Interne Störung |
| 0x2E | Interne Störung |
| 0x2F | Interne Störung |
| 0x30 | Batterieunterspannung |
| 0x31 | Interne Störung |
| 0x32 | Interne Störung |
| 0x33 | Interne Störung |
| 0x34 | Interne Störung |
| 0x35 | Interne Störung |
| 0x36 | Interne Störung |
| 0x37 | Interne Störung |
| 0x38 | Interne Störung |
| 0xFF | unbekannter Fehler |

### FARTTEXTE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 |  |
| 0x01 | Unterbrechung oder Kurzschluss nach Plus |
| 0x02 | Kurzschluss nach Masse |
| 0x04 | kein Signal |
| 0x08 | Signal unplausibel |
| 0xFF | unbekannte Fehlerart |
| 0x21 | SPORADISCH |
| 0x22 | MOMEMTAN VORHANDEN |
| 0x23 | MOMEMTAN VORHANDEN |

### FEHLERCODETEST

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | TEST VOLLSTAENDIG |
| 0x01 | TEST UNVOLLSTAENDIG |
| 0xFF | UNBEKANNT |

### FEHLERSTATUS

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 |  |
| 0x01 | SPORADISCH |
| 0x02 | MOMEMTAN VORHANDEN |
| 0x03 | MOMEMTAN VORHANDEN |
| 0xFF | STATUS: UNBEKANNT |

### WARNLAMPE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0xFF | UNBEKANNT |

### JOBRESULT

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | FEHLER |
| 0x02 | FEHLER: ARGUMENTE |
| 0x03 | FEHLER: AUSSERHALB BEREICH |
| 0x04 | FEHLER: ZUGRIFF VERWEIGERT |
| 0x05 | FEHLER: FORMATFEHLER DATEN (NICHT HEX) |
| 0xFF | FEHLER: UNBEKANNT |

### FMW_TEST

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | FEHLER: FMW Test Vorderrad |
| 0x02 | FEHLER: FMW Test Hinterrad |
| 0x03 | FEHLER: FMW Test Vorderrad und Hinterrad |
| 0x04 | FEHLER: Baudrate nicht 10416 Baud |
| 0x08 | FEHLER: Motor nicht ein- oder ausgeschaltet |
| 0x0A | FEHLER: Kommunikationsfehler |
| 0xFF | FEHLER: UNBEKANNT |

### ELG_TEST

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | FEHLER: ELG Test Vorderrad |
| 0x02 | FEHLER: ELG Test Hinterrad |
| 0x03 | FEHLER: ELG Test Vorder- und Hinterrad |
| 0x04 | FEHLER: Baudrate nicht 10416 Baud |
| 0x08 | FEHLER: Motor nicht ausgeschaltet |
| 0xFF | FEHLER: UNBEKANNT |

### MOT_TEST

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | Fehler: Baudrate nicht 10416 Baud |
| 0x02 | Fehler: Relais nicht aus oder Motor ein |
| 0x03 | Fehler: Motor nicht ausgeschaltet |
| 0x04 | NICHT OK |
| 0xFF | FEHLER: UNBEKANNT |

### PUMPENMOTOR

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | Fehler: Baudrate nicht 10416 Baud |
| 0x02 | Fehler: Motor nicht ausgeschaltet |
| 0x03 | NICHT OK: Batteriespannung unter Last < 9 Volt |
| 0xFF | FEHLER: UNBEKANNT |

### STATUSWARNLAMPE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | Fehler: Warnlampe W, Relais defekt |
| 0x02 | Fehler: Warnlampe K |
| 0x03 | Fehler: Warnlampe K und Warnlampe W, Relais defekt |
| 0xFF | FEHLER: UNBEKANNT |

### KABELCODIERUNG

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Test/Produktion |
| 0x02 | R 1100 RS |
| 0x03 | K 1200 RS / K 1200 LT |
| 0x04 | R 850 GS / R 1100 GS / R 1150 GS |
| 0x06 | R 850 C / R 1200 C |
| 0x07 | K 1100 RS |
| 0x08 | R 850 RT / R 1100 RT |
| 0x09 | R 1100 S |
| 0x0B | K 1100 LT |
| 0x0C | R 850 R / R 1100 R |
| 0xFF | UNBEKANNT |

### BAUDRATE

| BAUDRATENWERT | WERT |
| --- | --- |
| 300 | 103 |
| 600 | 51 |
| 1201 | 25 |
| 2403 | 12 |
| 2604 | 11 |
| 2840 | 10 |
| 3125 | 9 |
| 3472 | 8 |
| 3906 | 7 |
| 4464 | 6 |
| 5208 | 5 |
| 6250 | 4 |
| 7812 | 3 |
| 10416 | 2 |
| 15625 | 1 |
| 31250 | 0 |
| 0xFFFF | 0xFF |

### DIGITALARGUMENT

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | UNBEKANNT |

### RESPONSECODE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | KEIN FEHLER |
| 0x11 | 0x11: SERVICE NICHT UNTERSTUETZT |
| 0x12 | 0x12: TEILFUNKTION NICHT UNTERSTUETZT |
| 0x22 | 0x22: BEDINGUNGEN NICHT KORREKT |
| 0x23 | 0x23: ANFORDERUNG NOCH NICHT BEENDET |
| 0x78 | 0x78: ANFORDERUNG NOCH NICHT BEENDET |
| 0xFF | UNBEKANNT |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | FTE |
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
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0xFF | unbekannter Hersteller |
