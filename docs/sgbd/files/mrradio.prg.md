# mrradio.prg

## General

|  |  |
| --- | --- |
| File | mrradio.prg |
| Type | PRG |
| Jobs | 40 |
| Tables | 2 |
| Origin | I+ME Actia GmbH, Keck |
| Revision | 1.021 |
| Author | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Radio |  |  |
| ORIGIN | string | I+ME Actia GmbH, Keck |  |  |
| REVISION | string | 1.021 |  |  |
| AUTHOR | string | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.52 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung

_No arguments._

### IDENT

Lesen der Teilenummer Byte 4-7

_No arguments._

### STATUS_TEILENUMMER

Lesen der Teilenummer Byte 4-7 BCD

_No arguments._

### STATUS_HARDWARESTAND

Lesen Hardwarestand Byte 8 BCD

_No arguments._

### STATUS_CODIERINDEX

Lesen der Codierbarkeit Byte 9

_No arguments._

### STATUS_DIAGNOSEINDEX

Lesen Diagnoseindex Byte 10 BCD

_No arguments._

### STATUS_BUSINDEX

Lesen BusIndex Byte 11 BCD

_No arguments._

### STATUS_HERSTELLUNGSKALENDERWOCHE

Lesen der Kalenderwoche Byte 12 BCD

_No arguments._

### STATUS_HERSTELLUNGSKALENDERJAHR

Lesen Kalenderjahr Byte 13 BCD

_No arguments._

### STATUS_ZULIEFERER

Lesen Zulieferer Byte 14 BCD

_No arguments._

### STATUS_SOFTWARESTAND

Lesen Softwarestand Byte 15 BCD

_No arguments._

### STATUS_AENDERUNGSINDEX

Lesen Änderungsindex Byte 16-17 in ASCII

_No arguments._

### STATUS_GAL_EINSTELLUNG

Einstellung Geschwindigkeits abhängige Lautstärke lesen

_No arguments._

### STATUS_VF_MINDESTLAUTSTAERKE

Mindestlautstärke Verkehrsfunk lesen

_No arguments._

### STATUS_GAL_SIGNAL_EINHEIT

Einheit Geschwindigkeits abhängige Lautstärke

_No arguments._

### STATUS_GAL_SIGNAL_WERT

Wert Geschwindigkeits abhängige Lautstärke

_No arguments._

### STATUS_FELDSTAERKE_WERT

Feldstärke Wert

_No arguments._

### STATUS_QUALITAET_WERT

Qualität Wert

_No arguments._

### STEUERN_LAUTSPRECHER_ALLE

alle Lautsprecher Kanäle ansteuern

_No arguments._

### STEUERN_LAUTSPRECHER_VL

Lautsprecher vorn links ansteuern

_No arguments._

### STEUERN_LAUTSPRECHER_VR

Lautsprecher vorn rechts ansteuern

_No arguments._

### STEUERN_LAUTSPRECHER_HR

Lautsprecher hinten rechts ansteuern

_No arguments._

### STEUERN_LAUTSPRECHER_HL

Lautsprecher hinten links ansteuern

_No arguments._

### STEUERN_LAUTSTARKE_ERHOEHEN

Lautstärke um 1 Schritt erhöhen

_No arguments._

### STEUERN_LAUTSTARKE_ERNIEDRIGEN

Lautstärke um 1 Schritt verringern

_No arguments._

### STEUERN_SUCHLAUF_TASTENDRUCK_VOR

Tastendruck auf Suchlauftaste > nachbilden

_No arguments._

### STEUERN_SUCHLAUF_TASTENDRUCK_ZURUECK

Tastendruck auf Suchlauftaste < nachbilden

_No arguments._

### STEUERN_MODE_WEITERSCHALTUNG

Mode weiterschalten (Tuner->Tape->CD)

_No arguments._

### STEUERN_FREQUENZ_EINSTELLEN

Empfangsfrequenz einstellen

| Name | Type | Description |
| --- | --- | --- |
| FREQUENZ | string | Frequenz in kHz als String 89,3MHz -> Eingabe 89300 als String |

### STEUERN_RADIO_EINSCHALTEN

Radio einschalten

_No arguments._

### STEUERN_RADIO_AUSSCHALTEN

Radio ausschalten

_No arguments._

### STEUERN_AUTOSTORE_AUSFUEHREN

Autostore ausführen

_No arguments._

### STEUERN_LAUSTAERKE_EINSTELLEN

Lautstärke einstellen

| Name | Type | Description |
| --- | --- | --- |
| LAUTSTAERKE | string | Lautstärke 0..99 Eingabe als String |

### STEUERN_GAL_KURVE_VERRINGERN

nächste niedrige Geschwindigkeits abhängige Laustärke Kurve wählen

_No arguments._

### STEUERN_GAL_KURVE_ERHOEHEN

nächste höhere Geschwindigkeits abhängige Lautstärke Kurve wählen

_No arguments._

### STEUERN_VF_MINDESTLAUTSTAERKE_VERRINGERN

Verkehrsfunk Mindestlautstärke um einen Schritt verringern

_No arguments._

### STEUERN_VF_MINDESTLAUTSTAERKE_ERHOEHEN

Verkehrsfunk Mindestlautstärke um einen Schritt erhöhen

_No arguments._

### STATUS_SERIENNUMMER

Lesen der Seriennummer

_No arguments._

### STEUERN_SELBSTTEST_AKTIVIEREN

Steuergeräte Test starten

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | FEHLER |
| 0x02 | FEHLER: ARGUMENTE |
| 0x03 | FEHLER: AUSSERHALB BEREICH |
| 0x04 | FEHLER: ZUGRIFF VERWEIGERT |
| 0x05 | FEHLER: FORMATFEHLER DATEN (NICHT HEX) |
| 0x08 | FEHLER: ZUGRIFF VERWEIGERT |
| 0xA0 | OKAY |
| 0xB0 | FEHLER: AUSFUEHRUNG NICHT MOEGLICH |
| 0xB1 | FEHLER: FUNKTION |
| 0xF1 | FEHLER: NO_RESPONE_FROM_CONTROL_UNIT |
| 0x00 | FEHLER: UNBEKANNT |

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
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0xFF | unbekannter Hersteller |
