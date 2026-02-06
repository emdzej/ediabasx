# ALC_DS2.prg

## General

|  |  |
| --- | --- |
| File | ALC_DS2.prg |
| Type | PRG |
| Jobs | 58 |
| Tables | 11 |
| Origin | BMW EI-63 Bilz |
| Revision | 3.01 |
| Author | BMW L. Dennert, LEAR W. Hoffmann, C. Ahrens |
| ECU Comment | SGBD fuer ALC_SG |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ALC E46 |  |  |
| ORIGIN | string | BMW EI-63 Bilz |  |  |
| REVISION | string | 3.01 |  |  |
| AUTHOR | string | BMW L. Dennert, LEAR W. Hoffmann, C. Ahrens |  |  |
| COMMENT | string | SGBD fuer ALC_SG |  |  |
| PACKAGE | string | 1.03 |  |  |
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

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### C_CI_LESEN

Codierindex lesen Standard Codierjob

_No arguments._

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob

_No arguments._

### C_FG_SCHREIBEN

Fahrgestellnummer schreiben Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_FG_AUFTRAG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_C_LESEN

Codierdaten lesen Read codingdata

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten Codingdata |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren Write and check codingdata

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten Codingdata |

### FS_ZAEHLER

Default fs_zaehler job

_No arguments._

### FS_LESEN

fs_lesen job

_No arguments._

### FS_LOESCHEN

Default FS_LOESCHEN job

_No arguments._

### IS_LESEN

infospeicherlesen job Liest NUR die Infospeichereintraege des ALC_SG

_No arguments._

### IS_LESEN_ALC_SG

infospeicherlesen job

_No arguments._

### IS_LESEN_SMC

infospeicherlesen job

_No arguments._

### IS_LOESCHEN

Default FS_LOESCHEN job Loescht NUR die Infospeichereintraege des ALC_SG

_No arguments._

### IS_LOESCHEN_ALC_SG

Default FS_LOESCHEN job

_No arguments._

### IS_LOESCHEN_SMC_L

Default FS_LOESCHEN job

_No arguments._

### IS_LOESCHEN_SMC_R

Default FS_LOESCHEN job

_No arguments._

### PRUEFSTEMPEL_LESEN

"Prüfstempel" lesen DS2:  $0E Prüfstempel lesen Modus = Default

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

"Prüfstempel" schreiben DS2:  $0F Prüfstempel schreiben Modus = Default

| Name | Type | Description |
| --- | --- | --- |
| JOB07_BYT0 | int | number 1 out of 3 valid:  0x00-0xFF |
| JOB07_BYT1 | int | number 2 out of 3 valid:  0x00-0xFF |
| JOB07_BYT2 | int | number 3 out of 3 valid:  0x00-0xFF |

### STATUS_ALC_SG_LESEN

STATUS_LESEN job

_No arguments._

### STATUS_BETR_H_ALC

Status von ALC lesen

_No arguments._

### STEUERN_BETR_H_ALC_LOESCHEN

Status von ALC schreiben

_No arguments._

### STATUS_CAN_SIGNALE

Status von ALC lesen

_No arguments._

### STATUS_CAN_SIGNALE_TIMEOUT

Status von ALC lesen

_No arguments._

### FGNR_ALC_LESEN

7Byte Fahrgestellnummer von ALC lesen

_No arguments._

### FGNR_ALC_SCHREIBEN

Status von ALC schreiben

| Name | Type | Description |
| --- | --- | --- |
| FGNR_ALC | string | 7stellige Fahrgestellnummer |

### BLOCK_SMC_ALC_LESEN

Block (Codierdaten, Herstellerdanten) lesen Read codingdata

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | Block fuer Codierdaten, Herstellerdaten |

### BLOCK_SMC_ALC_SCHREIBEN

Block (Codierdaten, Herstellerdanten) schreiben Read codingdata

| Name | Type | Description |
| --- | --- | --- |
| BLOCK_DATEN | string | Block+Daten Block+Daten (z.B. 300001020304...) |

### CODIERDATEN_ALC_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten vom ALC Modus  : Default

_No arguments._

### CODIERDATEN_SMC_LINKS_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten der SMC links Modus  : Default

_No arguments._

### CODIERDATEN_SMC_RECHTS_LESEN_KOMPLETT_LEAR

Auslesen der kompletten Codierdaten der SMC rechts Modus  : Default

_No arguments._

### STEUERGERAETE_RESET_ALC

Steuergeraete reset vom ALC-SG ausloesen

_No arguments._

### NUR_DATEN_SCHREIBEN_LEAR

Schreiben von Daten aus Datei

| Name | Type | Description |
| --- | --- | --- |
| DATEN_DATEI | string | Dateiname mit Daten Datei muss in ediabas/ecu liegen bei leerem Argument wird die Datei cod_lm.dat codiert letztes Zeichen muss ein LF sein |

### STATUS_SMC_LESEN

STATUS_LESEN job

_No arguments._

### STATUS_SMC_POSITION_LESEN

STATUS_LESEN job

_No arguments._

### STEUERN_REFERENZLAUF_SMC

Referenzlauf der SMC starten STATUS_SCHREIBEN job

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| REFERENZLAUF | string | Referenzlauf auswaehlen |

### STEUERN_POSITION_SMC

bestimmte Position der SMC anfahren STATUS_SCHREIBEN job

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| POS_KURVENLICHT | long | Winkel fuer Kurvenlicht |
| GESCHW_KURVENLICHT | unsigned char | Geschwindigkeit fuer Kurvenlicht |
| POS_LWR | long | Winkel fuer LWR |
| GESCHW_LWR | unsigned char | Geschwindigkeit fuer LWR |

### STATUS_BETR_H_SMC

Status von SMC lesen

_No arguments._

### STEUERN_BETR_H_SMC_LOESCHEN

STATUS_SCHREIBEN job

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STATUS_VERTEILUNG_WINKEL_ANSTEUERUNG_SMC

Status von SMC lesen

_No arguments._

### STEUERN_VERTEILUNG_WINKEL_ANSTEUERUNG_SMC_LOESCHEN

STATUS_SCHREIBEN job

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STATUS_TEMPERATURVERTEILUNG_SMC

Status von SMC lesen

_No arguments._

### STEUERN_TEMPERATURVERTEILUNG_SMC_LOESCHEN

STATUS_SCHREIBEN job

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### STATUS_SCHRITTVERLUSTE_SMC

Status von SMC lesen

_No arguments._

### STEUERN_SCHRITTVERLUSTE_SMC_LOESCHEN

STATUS_SCHREIBEN job

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### FAHRGESTELL_NR_SMC_SCHREIBEN

Schreiben der VIN in die linke SMC

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| FG_DATEN | string | 7stellige FG-Nr |

### FG_NR_SMC_LESEN

Fahrgestellnummer fuer SMC links und rechts lesen

_No arguments._

### ID_SMC_LESEN

ID SMC links und rechts lesen

_No arguments._

### SCHEINWERFERHERSTELLERDATEN_SCHREIBEN

Beschreiben der Scheinwerfer-Herstellerdaten

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| SCHEINWERFER_HERSTELLERDATEN | string | Herstellerdaten |

### SCHEINWERFERHERSTELLERDATEN_LESEN

Auslesen der Scheinwerfer-Herstellerdaten

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

### PRUEFSTEMPEL_SCHEINWERFER_SCHREIBEN

Beschreiben des Scheinwerfer-Pruefstempel

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |
| SCHEINWERFER_PRUEFSTEMPEL | string | Scheinwerfer-Pruefstempel |

### PRUEFSTEMPEL_SCHEINWERFER_LESEN

Auslesen der Scheinwerfer-Pruefstempel

| Name | Type | Description |
| --- | --- | --- |
| SMC | string | SMC links bzw. rechts |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | interner Fehler ALC-SG |
| 0x01 | Kommunikation mit StepperMotorBox 1 gestoert |
| 0x02 | Kommunikation mit StepperMotorBox 2 gestoert |
| 0x03 | Sensor Hoehenstand vorne defekt |
| 0x04 | Sensor Hoehenstand hinten defekt |
| 0x05 | Bremslichtschalter defekt |
| 0x06 | Energiesparmode aktiv |
| 0x07 | Fehler WAKE-Leitung |
| 0x08 | Achtung: Elektronik am linken Scheinwerfer (SMC) meldet Fehler |
| 0x09 | Achtung: Elektronik am rechten Scheinwerfer (SMC) meldet Fehler |
| 0x0A | Vergleich Fahrgestellnummer ALC mit SMC links unterschiedlich |
| 0x0B | Vergleich Fahrgestellnummer ALC mit SMC rechts unterschiedlich |
| 0xFF | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x10 | EEPROM SMC links defekt |
| 0x11 | Motor Kurvenlicht SMC links defekt |
| 0x12 | Motor LWR SMC links defekt |
| 0x13 | Treiber Kurvenlicht SMC links defekt |
| 0x14 | Spannungsversorgung Sensor SMC links defekt |
| 0x15 | Signal Sensor SMC links defekt |
| 0x16 | Flanke Sensor SMC links defekt |
| 0x17 | LIN SMC links defekt |
| 0x18 | Schrittverlust Grenze 1 SMC links |
| 0x19 | Schrittverlust Grenze 2 SMC links |
| 0x1A | Schrittverlust Grenze 3 SMC links |
| 0x1B | Schrittverlust Grenze 4 SMC links |
| 0x1C | Schrittverlust Grenze 5 SMC links |
| 0x1D | Schrittverlust Grenze 6 SMC links |
| 0x1E | Spike auf Sensor SMS links |
| 0x1F | Notlauf aktiv SMC links |
| 0x20 | unbekannter Fehler 2 SMC links |
| 0x21 | unbekannter Fehler 3 SMC links |
| 0x22 | unbekannter Fehler 4 SMC links |
| 0x23 | unbekannter Fehler 5 SMC links |
| 0x24 | EEPROM SMC rechts defekt |
| 0x25 | Motor Kurvenlicht SMC rechts defekt |
| 0x26 | Motor LWR SMC rechts defekt |
| 0x27 | Treiber Kurvenlicht SMC rechts defekt |
| 0x28 | Spannungsversorgung Sensor SMC rechts defekt |
| 0x29 | Signal Sensor SMC rechts defekt |
| 0x2A | Flanke Sensor SMC rechts defekt |
| 0x2B | LIN SMC rechts defekt |
| 0x2C | Schrittverlust Grenze 1 SMC rechts |
| 0x2D | Schrittverlust Grenze 2 SMC rechts |
| 0x2E | Schrittverlust Grenze 3 SMC rechts |
| 0x2F | Schrittverlust Grenze 4 SMC rechts |
| 0x31 | Schrittverlust Grenze 5 SMC rechts |
| 0x32 | Schrittverlust Grenze 6 SMC rechts |
| 0x33 | Spike auf Sensor SMS rechts |
| 0x34 | Notlauf aktiv SMC rechts |
| 0x35 | unbekannter Fehler 2 SMC rechts |
| 0x36 | unbekannter Fehler 3 SMC rechts |
| 0x37 | unbekannter Fehler 4 SMC rechts |
| 0x38 | unbekannter Fehler 5 SMC rechts |
| 0x39 | Telegramm Geschwindigkeit ungueltig |
| 0x3A | Telegramm Gierrate ungueltig |
| 0x3B | Telegramm Lenkwinkel ungueltig |
| 0x3C | Telegramm Lampenzustand ungueltig |
| 0x3D | Telegramm Klemmenstatus Timeout oder ungueltig |
| 0x3E | Telegramm Steuerung ALC Timeout oder ungueltig |
| 0x3F | ALC meldet Fehler an Lichtschaltzentrum |
| 0xFF | unbekannter Fehlerort |

### STEUERN_SMCS

| ST_SMC | NAME | TEXT |
| --- | --- | --- |
| 0x10 | ALC_SG | ALC-Steuergeraet |
| 0x89 | SMC_L | SMC links |
| 0x8A | SMC_R | SMC rechts |
| 0x00 | REF_ALC_MIT | Referenzlauf Kurvenlicht mit Sensor |
| 0x01 | REF_ALC_OHNE | Referenzlauf Kurvenlicht ohne Sensor |
| 0x02 | REF_LWR | Referenzlauf LWR |
