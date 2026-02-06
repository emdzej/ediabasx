# mraabs3.prg

## General

|  |  |
| --- | --- |
| File | mraabs3.prg |
| Type | PRG |
| Jobs | 45 |
| Tables | 14 |
| Origin | I+ME_Actia_GmbH R&D Keck |
| Revision | 1.090 |
| Author | I+ME Actia GmbH, Keck und BMW, Motorrad Kufer BMW |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ABS Steuergerät ABS3  |  |  |
| ORIGIN | string | I+ME_Actia_GmbH R&D Keck |  |  |
| REVISION | string | 1.090 |  |  |
| AUTHOR | string | I+ME Actia GmbH, Keck und BMW, Motorrad Kufer BMW |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.65 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### DIAGNOSEMODE_AUS

Diagnose Modus beenden

_No arguments._

### DIAGNOSEMODE_EIN

Diagnose Modus starten

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATEN_WERT | long | Baudrate default 10400, Baudrate 1200..156000 |

### DIAGNOSE_AUFRECHT

Diagnose Mode des Steuergerätes aufrecht erhalten TesterPresent (0x3E)

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler)

_No arguments._

### FS_LOESCHEN

Fehlerspeicher Löschen

_No arguments._

### IDENT

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### SECURITY_ACCESS

SG für erweiterte Diagnose freischalten Security Access (0x27)

_No arguments._

### START_KOMMUNIKATION

Kommunikation mit dem Steuergerät aufbauen

_No arguments._

### STATUS_AD_WERTE

AD-Werte lesen RDBLI 21, 01 bis 04

_No arguments._

### STATUS_ANALOG_RADGESCHWINDIGKEIT

_No description._

_No arguments._

### STATUS_ANALOG_SPANNUNG

analoge Spannungswerte auslesen

_No arguments._

### STATUS_DATE_OF_ECU_MANUFACTURING

Fahrzeughersteller Hardware Nr. Servcie 0x21, 0x9D

_No arguments._

### STATUS_DIGITAL

_No description._

_No arguments._

### STATUS_DRUCKWERTE

Druckwerte auslesen

_No arguments._

### STATUS_ECU_IDENTIFICATION_DATA_TABLE

Steuergeräte Identifikation lesen Service 0x21, 0x80

_No arguments._

### STATUS_EEPROM_VERSION

EEPROM Version lesen

_No arguments._

### STATUS_EEPROM_ZAEHLER

EEPROM Zähler lesen

_No arguments._

### STATUS_FAHRGESTELL_NR

Fahrgestell Nr. lesen, 7 letzte Stellen

_No arguments._

### STATUS_FAHRGESTELL_NR_EOL

Fahrgestell Nr. EOL 7 letzte Stellen lesen

_No arguments._

### STATUS_FTE_SERIENNUMMER

Hersteller (FTE) Serien Nr. auslesen

_No arguments._

### STATUS_FTE_SOFTWARE_NR

Security Access notwendig Job Hauptschleife anhalten notwendig

_No arguments._

### STATUS_GEHAEUSE_BARCODE

_No description._

_No arguments._

### STATUS_ICT_BARCODE

_No description._

_No arguments._

### STATUS_KODIERUNG_AD

Fahrzeugkodierung Ad Wert lesen SecurityKey notwendig Hardware Test Modus notwendig (job STEUERN_HAUPTSCHLEIFE_ANHALTEN)

_No arguments._

### STATUS_KODIERUNG_EEPROM

Fahrzeugkodierung aus dem Eeprom auslesen

_No arguments._

### STATUS_KODIERUNG_RAM

Fahrzeugkodierung aus dem RAM auslesen

_No arguments._

### STATUS_MAX_BAUDRATE

Zeit Hauptschleife lesen maximale Baudrate lesen

_No arguments._

### STATUS_MODULATOR

Version Modulator lesen

_No arguments._

### STATUS_SOFTWARE_VERSION

Software Version Hauptrechner lesen

_No arguments._

### STATUS_VEHICLE_MANUFACTURER_HW_NR

Fahrzeughersteller Hardware Nr. Servcie 0x21, 0x91

_No arguments._

### STATUS_ZULAESSIGE_KODIERUNGEN

zulässige Fahrzeugkodierungen auslesen

_No arguments._

### STEUERN_BREMSLICHT

Bremslicht einschalten Seed + HardwareTestModus integriert in Job Security Access notwendig Hardware Test Modus notwendig (job STEUERN_HAUPTSCHLEIFE_ANHALTEN)

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | 0 - ausgeschaltet, 1 - eingeschaltet |

### STEUERN_BREMSLICHT_GEDIMMT

Bremslicht gedimmt einschalten Security Access notwendig Normal Modus notwendig (kein Hardware Test Modus) Job STEUERN_HAUPTSCHLEIFE_STARTEN

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | 0 - ausgeschaltet, 1 - eingeschaltet |

### STEUERN_DEINIT_KLINE_KOMMUNIKATION

Beendet eine laufende K-Line Kommunikation

_No arguments._

### STEUERN_FAHRZEUGCODIERUNG_EEPROM

Fahrzeug Kodierung in das EEPROM schreiben zulässige Kodierungen mit dem Dienst STATUS_ZULAESSIGE_KODIEURNGEN auslesen Security Access notwendig

| Name | Type | Description |
| --- | --- | --- |
| KODIERUNG | int | mögliche Kodierungen, siehe Job: STATUS_ZULAESSIGE_KODIERUNGEN |

### STEUERN_HAUPTSCHLEIFE_ANHALTEN

Hauptschleife anhalten, Wechsel in den Hardware Test Modus Security Access notwendig

_No arguments._

### STEUERN_HAUPTSCHLEIFE_STARTEN

Hauptschleife starten, Wechsel in den Normal Modus Security Access notwendig

_No arguments._

### STEUERN_PUMPENMOTOR_HINTEN

Pumpenmotor hinten ansteuern, PWM Mode Seed + HardwareTestModus integriert in Job Security Access notwendig Hardware Test Modus notwendig (job STEUERN_HAUPTSCHLEIFE_ANHALTEN)

| Name | Type | Description |
| --- | --- | --- |
| PEGEL | int | PWM Pegel, gültig wenn PWM Mode = 1, mögliche Werte: 0, 1 |
| MODE | int | PWM Mode: 0 - normal, 1 - statisch |
| WERT | int | Motor: 0 - aus, 1 - ein |
| ZEIT | int | Zeit in Sekunden, max. 20 Sekunden |

### STEUERN_PUMPENMOTOR_VORN

Pumpenmotor vorn ansteuern, PWM Mode Seed + HardwareTestModus integriert in Job Security Access notwendig Hardware Test Modus notwendig (job STEUERN_HAUPTSCHLEIFE_ANHALTEN)

| Name | Type | Description |
| --- | --- | --- |
| PEGEL | int | PWM Pegel, gültig wenn PWM Mode = 1, mögliche Werte: 0, 1 |
| MODE | int | PWM Mode: 0 - normal, 1 - statisch |
| WERT | int | Motor: 0 - aus, 1 - ein |
| ZEIT | int | Zeit in Sekunden, max. 20 Sekunden |

### STEUERN_REGELVENTIL_HINTEN

Regelventil hinten ansteuern, PWM Mode Seed + HardwareTestModus integriert in Job Security Access notwendig Hardware Test Modus notwendig (job STEUERN_HAUPTSCHLEIFE_ANHALTEN)

| Name | Type | Description |
| --- | --- | --- |
| PWM_WERT | int | Bereich: 1..622 |

### STEUERN_REGELVENTIL_VORN

Regelventil vorn ansteuern, PWM Mode Seed + HardwareTestModus integriert in Job Security Access notwendig Hardware Test Modus notwendig (job STEUERN_HAUPTSCHLEIFE_ANHALTEN)

| Name | Type | Description |
| --- | --- | --- |
| PWM_WERT | int | Bereich: 1..622 |

### STEUERN_VIN_SCHREIBEN

Fahrgestell Nr. 7 letzte Stellen schreiben Security Access notwendig

| Name | Type | Description |
| --- | --- | --- |
| FIN | string | Fahrgestell Nr. |

### STOP_KOMMUNIKATION

Kommunikation mit dem Steuergerät beenden

_No arguments._

## Tables

### BAUDRATE

| BAUDRATENWERT | WERT |
| --- | --- |
| 9600 | 0x01 |
| 19200 | 0x02 |
| 38400 | 0x03 |
| 57600 | 0x04 |
| 115200 | 0x05 |
| 200000 | 0xFFFFFFFF |

### DIGITALARGUMENT

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | UNBEKANNT |

### DIGITALFEHLERSTATUS

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Nicht in Ordnung |
| 0x01 | in Ordnung |
| 0xFF | UNBEKANNT |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | - |
| 0x01 | Unterbrechung oder Kurzschluss nach Plus |
| 0x02 | Kurzschluss nach Masse |
| 0x04 | kein Signal |
| 0x08 | Signal unplausibel |
| 0xFF | unbekannte Fehlerart |
| 0x20 | NICHT VORHANDEN |
| 0x21 | SPORADISCH |
| 0x22 | MOMEMTAN VORHANDEN |
| 0x23 | MOMEMTAN VORHANDEN UND GESPEICHERT |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x4113 | Interner Steuergerätefehler (Rechenfehler) Übertragungsfehler zwischen Rechner |
| 0x4181 | Interner Steuergerätefehler Zu langer Schlupfeinlauf während Regelung |
| 0x4182 | ABS-Sensorfehler Vorn |
| 0x4183 | Interner Steuergerätefehler Regelventil vorne defekt |
| 0x4184 | Interner Steuergerätefehler Analogwert Steuerdrucksensor vorn |
| 0x4185 | Radgeschwindigkeit Vorn fehlerhaft |
| 0x4187 | Kontrollrechner liefert keine Frequenz, während Hauptrechner Frequenz sieht |
| 0x41FF | Fehler bei erkanntem Spannungseinbruch aufgetreten |
| 0x4213 | Interner Steuergerätefehler (Rechenfehler) Übertragungsfehler zwischen Rechner |
| 0x4281 | Interner Steuergerätefehler Zu langer Schlupfeinlauf während Regelung |
| 0x4282 | ABS-Sensorfehler Hinten |
| 0x4285 | Radgeschwindigkeit Hinten fehlerhaft |
| 0x4287 | Kontrollrechner liefert keine Frequenz, während Hauptrechner Frequenz sieht |
| 0x42FF | Fehler bei erkanntem Spannungseinbruch aufgetreten |
| 0x4301 | Interner Steuergerätefehler Unzulässiger Interrupt |
| 0x4303 | Interner Steuergerätefehler RAM-Fehler im Test erkannt |
| 0x4304 | Interner Steuergerätefehler ROM-Fehler im Test erkannt |
| 0x4307 | Interner Steuergerätefehler (Rechenfehler) Hauptrechner Loop to long |
| 0x4308 | Interner Steuergerätefehler Stack Fehler |
| 0x4309 | Unterspannungsfehler bei Systemstart |
| 0x430A | Interner Steuergerätefehler Staudruck > 5.5 bar Vorn |
| 0x430B | ABS-Motor vorn defekt |
| 0x430C | Interner Steuergerätefehler (Rechenfehler) Hauptrechner Loop to short |
| 0x430D | Interner Steuergerätefehler Kontrollrechner Loop to long |
| 0x430E | Interner Steuergerätefehler Analogwert Drucksensor vorne |
| 0x430F | Unzulässige Fahrzeugkodierung |
| 0x4312 | Interner Steuergerätefehler EEPROM Version passt nicht zum Hauptrechner |
| 0x4313 | Interner Steuergerätefehler (Rechenfehler) Übertragungsfehler zwischen Rechner |
| 0x4314 | Interner Steuergerätefehler (Rechenfehler) Timeout MainLoopStart |
| 0x4315 | Interner Steuergerätefehler Hauptrechner |
| 0x4316 | Interner Steuergerätefehler EEPROM defekt |
| 0x4317 | Interner Steuergerätefehler Kontrollrechner |
| 0x4318 | Interner Steuergerätefehler (Rechenfehler) Timeout Kommunikation Rechner |
| 0x431A | Interner Steuergerätefehler (Rechenfehler) Übertragungsfehler zwischen Rechner |
| 0x431B | Interner Steuergerätefehler Fehlerhafter Wert bei Berechnung |
| 0x431C | Interner Steuergerätefehler Fahrzeugparameter im EEPROM fehlerhaft |
| 0x431D | Zu geringer Druck im vorderen Radkreis |
| 0x431E | Zu hoher Druck im vorderen Radkreis |
| 0x431F | Interner Steuergerätefehler 2 mal AD-Wandlung unvollständig |
| 0x4320 | Interner Steuergerätefehler Kontrollrechner reagiert nicht auf Synchro |
| 0x437F | Fehler bei erkanntem Spannungseinbruch aufgetreten |
| 0x43FF | Fehler bei erkanntem Spannungseinbruch aufgetreten |
| 0x4401 | Interner Steuergerätefehler Unzulässiger Interrupt |
| 0x4403 | Interner Steuergerätefehler RAM-Fehler im Test erkannt |
| 0x4404 | Interner Steuergerätefehler ROM-Fehler im Test erkannt |
| 0x4407 | Interner Steuergerätefehler (Rechenfehler) Hauptrechner Loop to long |
| 0x4408 | Interner Steuergerätefehler Stack Fehler |
| 0x4409 | Unterspannungsfehler bei Systemstart |
| 0x440A | Interner Steuergerätefehler Staudruck > 5.5 bar Hinten |
| 0x440B | ABS-Motor hinten defekt |
| 0x440C | Interner Steuergerätefehler (Rechenfehler) Hauptrechner Loop to short |
| 0x440D | Interner Steuergerätefehler Kontrollrechner Loop to long |
| 0x440E | Interner Steuergerätefehler Analogwert Drucksensor hinten |
| 0x440F | Unzulässige Fahrzeugkodierung |
| 0x4410 | Interner Steuergerätefehler Analogwert Steuerdrucksensor hinten |
| 0x4411 | Interner Steuergerätefehler Regelventil hinten defekt |
| 0x4412 | Interner Steuergerätefehler EEPROM Version passt nicht zum Hauptrechner |
| 0x4413 | Interner Steuergerätefehler (Rechenfehler) Übertragungsfehler zwischen Rechner |
| 0x4414 | Interner Steuergerätefehler (Rechenfehler) Timeout MainLoopStart |
| 0x4415 | Interner Steuergerätefehler Hauptrechner |
| 0x4416 | Interner Steuergerätefehler EEPROM defekt |
| 0x4417 | Interner Steuergerätefehler Kontrollrechner |
| 0x4418 | Interner Steuergerätefehler (Rechenfehler) Timeout Kommunikation Rechner |
| 0x4419 | Zu geringer Druck im hinteren Radkreis |
| 0x441A | Interner Steuergerätefehler (Rechenfehler) Übertragungsfehler zwischen Rechner |
| 0x441B | Interner Steuergerätefehler Fehlerhafter Wert bei Berechnung |
| 0x441C | Interner Steuergerätefehler Fahrzeugparameter im EEPROM fehlerhaft |
| 0x441E | Zu hoher Druck im hinteren Radkreis |
| 0x441F | Interner Steuergerätefehler 2 mal AD-Wandlung unvollständig |
| 0x4420 | Interner Steuergerätefehler Kontrollrechner reagiert nicht auf Synchro |
| 0x447F | Fehler bei erkanntem Spannungseinbruch aufgetreten |
| 0x45F4 | zu viele Tracevariablen |
| 0x45F5 | Bremslicht defekt |
| 0x45F6 | Bremsflüssigkeitsstand zu tief |
| 0x45F7 | Rücklicht defekt |
| 0x45F9 | ABS-Taster unzulässig |
| 0x45FA | Spannungsversorgung Warnlampenrelais defekt |
| 0x45FB | Warnlampendefekt |
| 0x45FC | Interner Steuergerätefehler Kontrollrechner kann Warnlampe nicht bedienen |
| 0x45FD | Bremsschalter Hinten defekt |
| 0x45FE | Bremsschalter Vorn defekt |
| 0x45FF | Fehler bei erkanntem Spannungseinbruch aufgetreten |
| 0xFFFFFF | unbekannter Fehler |

### FEHLERSTATUS

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | NICHT VORHANDEN |
| 0x01 | SPORADISCH |
| 0x02 | MOMEMTAN VORHANDEN |
| 0x03 | MOMEMTAN VORHANDEN UND GESPEICHERT |
| 0xFF | STATUS: UNBEKANNT |

### FEHLERCODETEST

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | TEST VOLLSTAENDIG |
| 0x01 | TEST UNVOLLSTAENDIG |
| 0xFF | UNBEKANNT |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | FEHLER |
| 0x02 | FEHLER: ARGUMENTE |
| 0x03 | FEHLER: AUSSERHALB BEREICH |
| 0x04 | FEHLER: ZUGRIFF VERWEIGERT |
| 0x05 | FEHLER: FORMATFEHLER DATEN (NICHT HEX) |
| 0x06 | FEHLER: PAUSENZEIT ZU GERING |
| 0x07 | FEHLER: SG BEREITS FREIGESCHALTET |
| 0x08 | OKAY: SG FREIGESCHALTET |
| 0x09 | FEHLER: FREISCHALTUNG FEHLGESCHLAGEN |
| 0x0A | FEHLER: FALSCHER KEY |
| 0x0B | FEHLER: MAXIMALE ANZAHL DER VERSUCHE ERREICHT |
| 0xFF | FEHLER: UNBEKANNT |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### KODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Test/Produktion |
| 0x01 | K 1200 LT |
| 0x03 | R 1150 GS / R 1150 GS Adventure |
| 0x04 | K 1200 RS |
| 0x09 | R 850 RT / R 1150 RT |
| 0x0A | R 1200 C |
| 0x0B | R 1200 C Montauk |
| 0x0C | R 1200 CL |
| 0x0D | R 1150 RS |
| 0x1B | R 1100 S |
| 0x24 | R 850 R / R 1150 R / R 1150 R Rockster |
| 0xFF | UNBEKANNT |

### RESPONSECODE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | KEIN FEHLER |
| 0x10 | Fehler: 0x10 - ALLGEMEINER FEHLER |
| 0x11 | Fehler: 0x11 - SERVICE NICHT UNTERSTUETZT |
| 0x12 | Fehler: 0x12 - TEILFUNKTION NICHT UNTERSTUETZT, FORMATFEHLER |
| 0x21 | Fehler: 0x21 - BESCHAEFITGT, ANFRAGE WIEDERHOLEN |
| 0x31 | Fehler: 0x31 - ANFRAGE AUSSERHALB BEREICH |
| 0x33 | Fehler: 0x33 - ANFRAGE VERWEIGERT, SECURITY ACCESS NOTWENDIG |
| 0x35 | Fehler: 0x35 - UNGUELTIGER KEY |
| 0x80 | Fehler: 0x80 - ANFRAGE NICHT UNTERSTÜTZT |
| 0xFA | Fehler: 0xFA - ZU VIELE TRACE RECORDS |
| 0xFB | Fehler: 0xFB - INTERNER FEHLER |
| 0xFC | Fehler: 0xFC - KR FEHLER |
| 0xFD | Fehler: 0xFD - FALSCHER MODUS |
| 0xFF | UNBEKANNT |

### SYSTEMNAMEORENGINETYPE

| WERT | VK_BEZEICHNUNG | EW_BEZEICHNUNG |
| --- | --- | --- |
| 0x6B72 | K1200RS | K589RS |
| 0x6B6C | K1200LT | K589LT |
| 0x4B40 |  | K40 |
| 0x4B41 | K 1200RS | K41 |
| 0x7273 | R1100S | R259S |
| 0x7263 | R850/1200C | R259C |
| 0x5221 | R1150GS | R21 |
| 0x5222 | R850/1150RT | R22 |
| 0x5228 | R850/1150R | R28 |
| 0x4301 | C1 | C1 |
| 0x5213 | F650GS/GD | R13 |
| 0x4B14 | F650CS | K14 |
| 0x4B30 |  | K30 |
| 0x4B43 |  | K43 |
| 0x4B44 |  | K44 |
| 0x7201 | R1150RS | R259 RS MÜ |
| 0x4B25 |  | K25 |
| 0xFFFF | UNBEKANNT | UNBEKANNT |

### WARNLAMPE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0xFF | UNBEKANNT |

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
