# mraabsn.prg

## General

|  |  |
| --- | --- |
| File | mraabsn.prg |
| Type | PRG |
| Jobs | 23 |
| Tables | 9 |
| Origin | I+ME Actia GmbH, Keck |
| Revision | 1.050 |
| Author | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ABS Steuergerät ABS-N |  |  |
| ORIGIN | string | I+ME Actia GmbH, Keck |  |  |
| REVISION | string | 1.050 |  |  |
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

_No description._

_No arguments._

### STEUERN_REINIT_KLINE_ICOM

KLine-Kommunikation abbauen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher Löschen

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler)

_No arguments._

### IDENT

_No description._

_No arguments._

### SG_IDENTIFIKATION_ECU_LESEN

_No description._

_No arguments._

### STATUS_RADGESCHWINDIGKEIT

_No description._

_No arguments._

### STATUS_UBATT

Batteriespannung auslesen

_No arguments._

### STATUS_DIGITAL

_No description._

_No arguments._

### STEUERN_STATICTEST_DOWNLOAD

Download Modul Static Test zum Steuergerät senden

_No arguments._

### STEUERN_DLM14311_DOWNLOAD

Download Modul DLM14311 zum Steuergerät senden

_No arguments._

### STEUERN_STATIC_TEST_START

Statischen Test starten vorher Job STEUERN_STATICTEST_DOWNLOAD notwendig Dauer ca. 6,5 Sekunden Ergebnis siehe Job STATUS_ANSTEUERUNG

_No arguments._

### STATUS_ANSTEUERUNG

Anforderung der Ergebnisse der Ansteuerung 0x33 RequestRoutineResultsbyLocalIdentifier

_No arguments._

### STEUERN_PUMPENMOTOR

Pumpenmotor eine definierte Zeit ansteuern vorher Job STEUERN_DLM14311_DOWNLOAD notwendig Ergebnis siehe Job STATUS_ANSTEUERUNG

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Ansteuerung in Sekunden minimal 1 Sekunde maximal 20 Sekunden |

### STEUERN_WARNLAMPE

Warnlampe eine definierte Zeit ansteuern vorher Job STEUERN_DLM14311_DOWNLOAD notwendig Ergebnis siehe Job STATUS_ANSTEUERUNG

| Name | Type | Description |
| --- | --- | --- |
| WERT | string | Ein - einschalten, Aus - ausschalten |

### STEUERN_REGELVENTIL_EV

Einlassventil vorn ansteuern vorher Job STEUERN_DLM14311_DOWNLOAD notwendig Ergebnis siehe Job STATUS_ANSTEUERUNG

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Ansteuerung in Sekunden minimal 1 Sekunde maximal 20 Sekunden |

### STEUERN_REGELVENTIL_AV

Auslassventil vorn ansteuern vorher Job STEUERN_DLM14311_DOWNLOAD notwendig Ergebnis siehe Job STATUS_ANSTEUERUNG

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Ansteuerung in Sekunden minimal 1 Sekunde maximal 20 Sekunden |

### STEUERN_REGELVENTIL_EH

Einlassventil hinten ansteuern vorher Job STEUERN_DLM14311_DOWNLOAD notwendig Ergebnis siehe Job STATUS_ANSTEUERUNG

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Ansteuerung in Sekunden minimal 1 Sekunde maximal 20 Sekunden |

### STEUERN_REGELVENTIL_AH

Auslassventil hinten ansteuern vorher Job STEUERN_DLM14311_DOWNLOAD notwendig Ergebnis siehe Job STATUS_ANSTEUERUNG

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit der Ansteuerung in Sekunden minimal 1 Sekunde maximal 20 Sekunden |

### DIAGNOSE_AUFRECHT

Diagnose Mode des Steuergerätes aufrecht erhalten TesterPresent (0x3E)

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
| 0x06 | FEHLER: PAUSENZEIT ZU GERING |
| 0x07 | FEHLER: SG BEREITS FREIGESCHALTET |
| 0x08 | OKAY: SG FREIGESCHALTET |
| 0x09 | FEHLER: FREISCHALTUNG FEHLGESCHLAGEN |
| 0x0A | FEHLER: FALSCHER KEY |
| 0x0B | FEHLER: MAXIMALE ANZAHL DER VERSUCHE ERREICHT |
| 0xFF | FEHLER: UNBEKANNT |

### DIGITALARGUMENT

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | UNBEKANNT |

### FORTTEXTE

| ORT | SYMPTOM_HEX | ORTTEXT |
| --- | --- | --- |
| 0x4005A4 | 05A4 | Sensorfehler Hinten (Signal unplausibel, momentan nicht vorhanden) |
| 0x4005E4 | 05E4 | Sensorfehler Hinten (Signal unplausibel) |
| 0x4005F4 | 05F4 | Sensorfehler Hinten (Signal unplausibel) |
| 0x4007A4 | 07A4 | Sensorfehler Vorn (Signal unplausibel, momentan nicht vorhanden) |
| 0x4007E4 | 07E4 | Sensorfehler Vorn (Signal unplausibel) |
| 0x4007F4 | 07F4 | Sensorfehler Vorn (Signal unplausibel) |
| 0x4014A0 | 14A0 | Ventil-Relais (momentan nicht vorhanden) |
| 0x4014E0 | 14E0 | Ventil-Relais |
| 0x4014F0 | 14F0 | Ventil-Relais |
| 0x4015A2 | 15A2 | Pumpenmotor (momentan nicht vorhanden) |
| 0x4015E2 | 15E2 | Pumpenmotor |
| 0x4015F2 | 15F2 | Pumpenmotor |
| 0x4021A0 | 21A0 | Interner Steuergerätefehler (momentan nicht vorhanden) |
| 0x4021E0 | 21E0 | Interner Steuergerätefehler |
| 0x4021F0 | 21F0 | Interner Steuergerätefehler |
| 0x4024A1 | 24A1 | Unterschiedliche Radgeschwindigkeit (momentan nicht vorhanden) |
| 0x4024E1 | 24E1 | Unterschiedliche Radgeschwindigkeit |
| 0x4024F1 | 24F1 | Unterschiedliche Radgeschwindigkeit |
| 0x4025A4 | 25A4 | Bremslichtschalterleitung Vorn und Bremslicht (momentan nicht vorhanden) |
| 0x4025E4 | 25E4 | Bremslichtschalterleitung Vorn und Bremslicht |
| 0x4025F4 | 25F4 | Bremslichtschalterleitung Vorn und Bremslicht |
| 0x4026A4 | 26A4 | Bremslichtschalterleitung Hinten (momentan nicht vorhanden) |
| 0x4026E4 | 26E4 | Bremslichtschalteleitung Hinten |
| 0x4026F4 | 26F4 | Bremslichtschalteleitung Hinten |
| 0x4031A4 | 31A4 | Sensorfehler Hinten (ohmisch, momentan nicht vorhanden) |
| 0x4031E4 | 31E4 | Sensorfehler Hinten (ohmisch) |
| 0x4031F4 | 31F4 | Sensorfehler Hinten (ohmisch) |
| 0x4033A4 | 33A4 | Sensorfehler Vorn (ohmisch, momentan nicht vorhanden) |
| 0x4033E4 | 33E4 | Sensorfehler Vorn (ohmisch) |
| 0x4033F4 | 33F4 | Sensorfehler Vorn (ohmisch) |
| 0x4048A4 | 48A4 | Auslassventil Hinten defekt (momentan nicht vorhanden) |
| 0x4048E4 | 48E4 | Auslassventil Hinten defekt |
| 0x4048F4 | 48F4 | Auslassventil Hinten defekt |
| 0x4050A4 | 50A4 | Auslassventil Vorn defekt (momentan nicht vorhanden) |
| 0x4050E4 | 50E4 | Auslassventil Vorn defekt |
| 0x4050F4 | 50F4 | Auslassventil Vorn defekt |
| 0x4052A4 | 52A4 | Einlassventil Hinten defekt (momentan nicht vorhanden) |
| 0x4052E4 | 52E4 | Einlassventil Hinten defekt |
| 0x4052F4 | 52F4 | Einlassventil Hinten defekt |
| 0x4054A4 | 54A4 | Einlassventil Vorn defekt (momentan nicht vorhanden) |
| 0x4054E4 | 54E4 | Einlassventil Vorn defekt |
| 0x4054F4 | 54F4 | Einlassventil Vorn defekt |
| 0x4058A2 | 58A2 | Über-/ Unterspannungsfehler im Fahrbetrieb (momentan nicht vorhanden) |
| 0x4058E2 | 58E2 | Über-/ Unterspannungsfehler im Fahrbetrieb |
| 0x4058F2 | 58F2 | Über-/ Unterspannungsfehler im Fahrbetrieb |
| 0xFFFFFF | FFFF | unbekannter Fehler |

### FARTTEXTE

| WERT | ARTTEXT |
| --- | --- |
| 0x00 |  |
| 0x01 | Unterbrechung oder Kurzschluss nach Plus |
| 0x02 | Kurzschluss nach Masse |
| 0x04 | kein Signal |
| 0x08 | Signal unplausibel |
| 0xFF | unbekannte Fehlerart |
| 0x20 | NICHT VORHANDEN |
| 0x21 | GESPEICHERT |
| 0x23 | AKTUELL VORHANDEN |

### FEHLERCODETEST

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | TEST VOLLSTAENDIG |
| 0x01 | TEST UNVOLLSTAENDIG |
| 0xFF | UNBEKANNT |

### FEHLERSTATUS

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | NICHT VORHANDEN |
| 0x01 | GESPEICHERT |
| 0x03 | AKTUELL |
| 0xFF | STATUS: UNBEKANNT |

### WARNLAMPE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
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
