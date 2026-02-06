# SD_DS2.prg

## General

|  |  |
| --- | --- |
| File | SD_DS2.prg |
| Type | PRG |
| Jobs | 52 |
| Tables | 26 |
| Origin | BMW EE-51 Robert Siwy |
| Revision | 3.000 |
| Author | BMW EE-51 Siwy, SiemensVDO SAA Roelevink, SiemensVDO SAA Szabo, SiemensVDO SAA Gross-Gottschall, BMW TI-430 Bendel, SiemensVDO SAA Boonstra, SiemensVDO SAA Prostejovsky |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | sd_ds2 MDS/SHD Steuergeraetefamilie fuer Schiebedaecher |  |  |
| ORIGIN | string | BMW EE-51 Robert Siwy |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | BMW EE-51 Siwy, SiemensVDO SAA Roelevink, SiemensVDO SAA Szabo, SiemensVDO SAA Gross-Gottschall, BMW TI-430 Bendel, SiemensVDO SAA Boonstra, SiemensVDO SAA Prostejovsky |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

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

### STEUERGERAETE_RESET

Steuergeraete Reset ausloesen

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

### WARTEN

Dieser Job bewirkt eine Wartezeit

| Name | Type | Description |
| --- | --- | --- |
| SEKUNDEN | int | minimale Wartezeit: <SEKUNDEN> -1 maximale Wartezeit: <SEKUNDEN> |

### STATUS_IODIGITAL

Auslesen der Stati von digitale Signale $35 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table IODigitalSignaleFuerLesen NAME TEXT |

### STATUS_ANALOG

Auslesen der Stati von analoge Signale $35 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table AnalogSignaleFuerLesen NAME EINHEIT TEXT |

### STEUERN_IODIGITAL

Ansteuern von I/O DigitalSignal mit DIGITALWERT $35 startRoutineByLocalIdentifier $17 ShortTermAdjustment Ohne DIGITALWERT->Return Control To ECU $35 startRoutineByLocalIdentifier $10 ReturnControlToECU

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table IODigitalSignaleFuerSchreiben NAME TEXT |
| DIGITALWERT | string | Werte: true, false, on, off,... table DigitalArgument TEXT Achtung: Ohne dem Arggumet DIGITALWERT wird die Kontrolle ueber den Input/Output der ECU zurueckgegeben! |

### STATUS_BATTERIESPANNUNG

Batteriespannung abfragen $35 startRoutineByLocalIdentifier

_No arguments._

### STATUS_MOTORTEMPERATUR

Motortemperatur abfragen $35 startRoutineByLocalIdentifier

_No arguments._

### WRITE_BMW_HWR_NR

Write BMW HWR NR in EPROM

| Name | Type | Description |
| --- | --- | --- |
| HARDWARENR | string | gewuenschte Hardware: MDS_K, MDS_CAN, E60, MDS_CAN_LASCHEN table HardwareNr HARDWARE_NR TEXT |

### READ_BMW_HWR_NR_FROM_EEPROM

Read BMW HW Number from EEPROM

_No arguments._

### ANLIEFERPOSITION_ANFAHREN

Dach fährt nach Anlieferposition $35 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente shd,sos oder ecu (shd und sos) table Geraet NAME_GERAET TEXT |

### READ_SERIAL

Siemens Seriennummer lesen

_No arguments._

### ALLE_PRUEFSTEMPEL_LESEN

Alle Pruefstempel abfragen $35 startRoutineByLocalIdentifier

_No arguments._

### KENNLINIE_LESEN

Auslesen der Kennlinien von SHD oder SoS $06 ReadMemoryByAddress $35 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | Argument table Geraet NAME_GERAET TEXT |
| KENNLINIE | string | gewuenschte Funktion table Kennlinie NAME_KENNLINIE TEXT |

### UEBERWACHUNGSBEREICHE_EINSTELLEN

Bereiche für Minimal- Maximal- und Mittelwertbildung der von der Software berechneten Kraefte einstellen. Max. 7 Bereiche moeglich DS2: $35 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | Gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| BEREICHE | string | Komma getrennte Liste der Positionen |

### MIN_MAX_MITTELWERTE_AUSLESEN

Minimal- Maximal- und Mittelwerte der von der Software berechneten Kraefte in den mit UEBERWACHUNGSBEREICHE_EINSTELLEN festegelegten Bereichen auslesen DS2: $35 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | Argument gewuenschte Komponente table Geraet NAME_GERAET TEXT |

### STATISTIKZAEHLER_LESEN

Statistikzaehler vom Bedienkonzeptes auslesen

_No arguments._

### BEDIENKONZEPTZUSTAENDE_LESEN

Statemachine-Zustaende des Bedienkonzeptes auslesen

_No arguments._

### STATUS_BEDIENSCHALTER

Auslesen der Status von Bedienschalter-Leitungen $35 startRoutineByLocalIdentifier

_No arguments._

### STATUS_FREISCHALTUNG

Auslesen der Stati von Klemmen und CAS-Freigabesignalen $35 startRoutineByLocalIdentifier

_No arguments._

### DENORM_REASON_LESEN

Denorm reason abfragen KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente shd,sos oder ecu (shd und sos) table Geraet NAME_GERAET TEXT |

### DENORM_REASON_LOESCHEN

Denorm reason LOESCHEN KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente shd,sos oder ecu (shd und sos) table Geraet NAME_GERAET TEXT |

### ZUSTANDS_WERTE_LESEN

Diverse Zustandswerte abfragen $35 startRoutineByLocalIdentifier

_No arguments._

### STATISTIKZAEHLER_LOESCHEN

Statistikzähler löschen

| Name | Type | Description |
| --- | --- | --- |
| ARG_WERT | int | Argumentswert 1 = Ja |

### WINDSCHOTT

Windschott aus und einfahren lassen

| Name | Type | Description |
| --- | --- | --- |
| ARG_WERT | string | Argumentswert WAW_AUS = Ausfahren WAW_EIN = einfahren |

### STATUS_CFL

Auslesen den Status von CFL

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| FUNKTION | string | Funktion see Table for the functions table Funktion_CFL CFL_FUNKTION TEXT |

### STEUERN_CFL

Steuern der CFL-modul

| Name | Type | Description |
| --- | --- | --- |
| GERAET | string | gewuenschte Komponente table Geraet NAME_GERAET TEXT |
| FUNKTION | string | gewuenschte Funktion table Funktion_CFL CFL_FUNKTION TEXT |
| FUNC_WERT | string | Funktionswert Werte in dezimal |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren Write and check codingdata

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten Codingdata |

### C_C_LESEN

Codierdaten lesen Read codingdata

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten Codingdata |

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $06 Speicher lesen Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### DIAGNOSE_START

Diagnose starten

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose Sonderfall: Laenge das Antworttelegramms ist konstant !

_No arguments._

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt) KWP2000: $07 Memory speicher Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### IS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### IS_LESEN

Infospeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose Sonderfall: Laenge das Antworttelegramms ist konstant !

_No arguments._

### IDENT

Identdaten

_No arguments._

### SOS_DATEN_AKTUALISIEREN

Aktualisierung der SOS Daten im sicheren Satz (gueltig fuer MDS SW Ver. 5.3.0) Update of SOS data for default data set (valid for MDS SW Ver. 5.3.0)

_No arguments._

### BB_HISTORY_LESEN

Bounce Back History lesen $06 ReadMemoryByAddress $35 startRoutineByLocalIdentifier

_No arguments._

### BB_HISTORY_LOESCHEN

Bounce Back History loeschen $06 ReadMemoryByAddress KWP2000: $31 startRoutineByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARG_WERT | int | Argumentswert 1 = Ja |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA088 | Fehler Bedienschalter |
| 0xA08A | Fehler Dimmung |
| 0xA08D | Fehler Kodierung |
| 0xA090 | Fehler Dacheinheit SHD |
| 0xA091 | Fehler Antrieb SHD |
| 0xA092 | Fehler Normierung SHD |
| 0xA0A0 | Fehler Dacheinheit SoS |
| 0xA0A1 | Fehler Antrieb SoS |
| 0xA0A2 | Fehler Normierung SoS |
| 0xA40D | Fehler Eeprom Schreibfehler |
| 0xA40E | Energiesparmode aktiv |
| 0xDA04 | Fehler K_CAN_LOW |
| 0xDA07 | Fehler CAN_Controller |
| 0xFFFF | unbekannter Fehlerort |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9400 | Oszillator |
| 0x9401 | Watchdog |
| 0x9402 | Opcode |
| 0x9403 | Kalibrierwerte ungueltig |
| 0x9404 | Versorgungsspannung unplausibel |
| 0x9405 | Temperatursensor unplausibel |
| 0x9406 | Checksumme ECU Konfiguration |
| 0x9440 | Aktivierung des Panik Modes |
| 0x9441 | Initialisierung Manuell |
| 0x9442 | Initialisierung Diagnose |
| 0x9443 | Initialisierung abgebrochen |
| 0x9444 | Dauerhafte Unterspannung |
| 0x9445 | Dauerhafte Ueberspannung |
| 0x9446 | Ueberspannung Lastabwurf oder Starthilfe |
| 0x9447 | Anzahl aller Kodierungen |
| 0x9448 | Anzahl ungueltiger Kodierungen |
| 0x9500 | SHD Hallsensor A Puls |
| 0x9501 | SHD Hallsensor B Puls |
| 0x9502 | SHD Hallsensor B Drehrichtung |
| 0x9503 | SHD Motorbruecke |
| 0x9504 | SHD Motorbruecke Kurzschluss |
| 0x9505 | SHD Motor Kurzschluss |
| 0x9506 | SHD Motorklemmenspannung Drehrichtung |
| 0x9507 | SHD Positionsverlust Spannungsausfall |
| 0x9508 | SHD Positionsverlust |
| 0x9509 | SHD Kennlinie Schieben |
| 0x950A | SHD Kennlinie Heben |
| 0x950B | SHD Checksumme SHD Konfiguration |
| 0x950C | SHD Hall A Ueberlast |
| 0x950D | SHD Hall B Ueberlast |
| 0x950E | SHD Hall A Leitungsbruch |
| 0x950F | SHD Hall B Leitungsbruch |
| 0x9510 | SHD Positionsverlust Bereichsueberschreitung |
| 0x9540 | SHD Manuelle Dachbewegung |
| 0x9541 | SHD Aktivierung der SKB |
| 0x9542 | SHD Motortemperatur Startverhinderung |
| 0x9543 | SHD Motortemperatur Bewegungsabbruch |
| 0x9600 | SoS Hallsensor A Puls |
| 0x9601 | SoS Hallsensor B Puls |
| 0x9602 | SoS Hallsensor B Drehrichtung |
| 0x9603 | SoS Motorbruecke |
| 0x9604 | SoS Motorbruecke Kurzschluss |
| 0x9605 | SoS Motor Kurzschluss |
| 0x9606 | SoS Motorklemmenspannung Drehrichtung |
| 0x9607 | SoS Positionsverlust Spannungsausfall |
| 0x9608 | SoS Positionsverlust |
| 0x9609 | SoS Kennlinie Schieben |
| 0x960A | SoS Kennlinie Heben |
| 0x960B | SoS Checksumme SHD Konfiguration |
| 0x960C | SoS Hall A Ueberlast |
| 0x960D | SoS Hall B Ueberlast |
| 0x960E | SoS Hall A Leitungsbruch |
| 0x960F | SoS Hall B Leitungsbruch |
| 0x9610 | SoS Positionsverlust Bereichsueberschreitung |
| 0x9640 | SoS Manuelle Dachbewegung |
| 0x9641 | SoS Aktivierung der SKB |
| 0x9642 | SoS Motortemperatur Startverhinderung |
| 0x9643 | SoS Motortemperatur Bewegungsabbruch |
| 0xFFFF | Unbekannter Fehlerort |

### FORTTEXTE2

| ORT2 | ORTTEXT2 |
| --- | --- |
| 0xFFFF | Unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### BITS

| ZELLE | BYTE | MASK | VALUE | NAME | TEXT |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0x01 | 0x01 | SSHDH | Schalter SHD Heben |
| 2 | 0 | 0x04 | 0x04 | SSHDZ | Schalter SHD Zu |
| 4 | 0 | 0x10 | 0x10 | SSHDA | Schalter SHD Auf |
| 11 | 1 | 0x08 | 0x08 | RSHDZ | Relais Zu (0)-Ansteuerung |
| 23 | 2 | 0x80 | 0x80 | NORM | SHD normiert |
| 25 | 3 | 0x02 | 0x02 | TIPP_H | Tipp Heben |
| 27 | 3 | 0x08 | 0x08 | TIPP_Z | Tipp Schieben Zu |
| 29 | 3 | 0x20 | 0x20 | TIPP_A | Tipp Schieben Auf |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |

### IODIGITALSIGNALEFUERLESEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x10 | IN_KBUSRXD_DISC1 | K-Bus RXD1 |
| 0x11 | IN_KBUSRXD_DISC | K-Bus RXD |
| 0x12 | SWITCH0 | Schalter 0 |
| 0x13 | SWITCH1 | Schalter 1 |
| 0x14 | SWITCH2 | Schalter 2 |
| 0x15 | HALL_SHD_A_STATE | Zustand Hallsensor A SHD |
| 0x16 | HALL_SHD_B_STATE | Zustand Hallsensor B SHD |
| 0x17 | HALL_SOS_A_STATE | Zustand Hallsensor A SoS |
| 0x18 | HALL_SOS_B_STATE | Zustand Hallsensor B SoS |
| 0x19 | SENSE_DIM | Rueckmeldeleitung Strombegrenzung KL58g |
| 0x1A | SENSE_HALL_A | Rueckmeldeleitung Strombegrenzung Freigabe Hallsensor A |
| 0x1B | SENSE_HALL_B | Rueckmeldeleitung Strombegrenzung Freigabe Hallsensor B |
| 0x1C | RXCAN | Empfangsleitung CAN-Bus |
| 0x1D | NERR0 | CAN-Bus Fehlersignal |
| 0x1E | HALL_SHD_A_IRQ | Interrupt Hallsensor A SHD |
| 0x1F | HALL_SHD_B_IRQ | Interrupt Hallsensor B SHD |
| 0x20 | HALL_SOS_A_IRQ | Interrupt Hallsensor A SoS |
| 0x21 | HALL_SOS_B_IRQ | Interrupt Hallsensor B SoS |
| 0x50 | OUT_KBUSTXD_DISC | K-Bus TXD |
| 0x51 | OUT_DME_KBUSHIGHDISC | K-Bus wird auf high geschaltet |
| 0x52 | POWERMGT_HOLD | Strommanagement Hold des Spannungsstabilisators |
| 0x53 | POWERMGT_HALL_A | Strommanagement Hallsensor A |
| 0x54 | POWERMGT_HALL_B | Strommanagement Hallsensor B |
| 0x55 | POWERMGT_TS | Strommanagement Temperatursensor |
| 0x56 | POWERMGT_KEYS |  |
| 0x57 | CANTX | Sendeleitung CAN-Bus |
| 0x58 | STB0 | Strobe des CAN-Bus Transceivers |
| 0x59 | EN0 | Enable des CAN-Bus Transceivers |
| 0x5A | MOTOR_SHD_A |  |
| 0x5B | MOTOR_SHD_B |  |
| 0x5C | MOTOR_SOS_A |  |
| 0x5D | MOTOR_SOS_B |  |
| 0x5E | LED | Led... |
| 0x5F | ROBEL | Robel... |
| 0x60 | POWERMGT_HOLDC |  |
| 0x61 | POWERMGT_HOLDK |  |

### ANALOGSIGNALEFUERLESEN

| IOLI | NAME | EINHEIT | MUL | DIV | ADD | TEXT |
| --- | --- | --- | --- | --- | --- | --- |
| 0xA0 | VBAT | Volt | 1 | 47.6 | 0 | Batteriespannung |
| 0xA1 | SHD_VMOT0 | Volt | 1 | 47.6 | 0 | Motorspannung 0 |
| 0xA2 | SHD_VMOT1 | Volt | 1 | 47.6 | 0 | Motorspannung 1 |
| 0xA3 | SOS_VMOT0 | Volt | 1 | 47.6 | 0 | Motorspannung 0 |
| 0xA4 | SOS_VMOT1 | Volt | 1 | 47.6 | 0 | Motorspannung 1 |
| 0xA5 | TEMP_SENS | ? | 1 | 1 | 0 | Temperatursensor |
| 0xA6 | SUM_IMOT | ? | 1 | 1 | 0 | Sum Imot |

### IODIGITALSIGNALEFUERSCHREIBEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x12 | SWITCH0 | Schalter 0 |
| 0x13 | SWITCH1 | Schalter 1 |
| 0x14 | SWITCH2 | Schalter 2 |
| 0x5A | MOTOR_SHD_A |  |
| 0x5B | MOTOR_SHD_B |  |
| 0x5C | MOTOR_SOS_A |  |
| 0x5D | MOTOR_SOS_B |  |

### GERAET

| IOLI | NAME_GERAET | TEXT |
| --- | --- | --- |
| 0xFA | ECU | Steuergeraet |
| 0xFB | SHD | SchiebeHebeDach |
| 0xFC | SOS | SonnenSchutz |

### SIGNALE_STATUS

| IOLI | SIGNAL_STATUS | TEXT |
| --- | --- | --- |
| 0x0001 | SWITCH2 | Schalter heben, 1 = aktiv rd/wr |
| 0x0002 | SWITCH1 | Schalter auf, 1 = aktiv rd/wr |
| 0x0004 | SWITCH0 | Schalter zu, 1 = aktiv rd/wr |
| 0x0100 | MOTOR_SHD_A | Motor 1 Relais A Ansteuerung, 1 = aktiv rd/wr |
| 0x0200 | MOTOR_SHD_B | Motor 1 Relais B Ansteuerung, 1 = aktiv rd/wr |
| 0x0400 | MOTOR_SOS_A | Motor 2 Relais A Ansteuerung, 1 = aktiv rd/wr |
| 0x0800 | MOTOR_SOS_B | Motor 1 Relais A Ansteuerung, 1 = aktiv rd/wr |

### FUNKTION_CFL

| IOLI | CFL_FUNKTION | TEXT |
| --- | --- | --- |
| 0x0000 | AUTOINIT | Laeuft Autoinit?                   / Autoinit starten |
| 0x0001 | CFL_AVAILABLE | Steht CFL zu Verfuegung?           / - |
| 0x0002 | KLEMME_R | Klemme R abfragen / setzen |
| 0x0003 | KLEMME_15 | Klemme 15 abfragen / setzen |
| 0x0004 | KLEMME_50 | Klemme 50 abfragen / setzen |
| 0x0005 | SPEED_VEHICLE | Fahrzeuggeschwindigkeit abfragen / setzen |
| 0x0006 | VBAT | Batteriespannung abfragen |
| 0x0007 | AMBIENT_TEMP | Umgebungstemperatur abfragen |
| 0x000B | FLASH_CRC | Programm-CRC abfragen |
| 0x000C | CONFIG_CHECKSUM | Konfigurationspruefsumme abfragen |
| 0x000D | PARAM_CHECKSUM | Parameterpruefsumme abfragen |
| 0x000E | CODING_CHECKSUM | Kodierungspruefsumme abfragen |
| 0x000F | CAL_CHECKSUM | Kalibrierungspruefsumme abfragen |
| 0x0010 | FLASH_CRC_CALC | Programm-CRC berechnet abfragen |
| 0x0012 | ROBTABADR | Robel-Tabelle Adresse abfragen |
| 0x0013 | RESET_REASON | Reset-Grund abfragen |
| 0x0016 | DIAGMOVE_KEY | Freigabe Links/Rechtslauf von Schalter abfragen/setzen |
| 0x0017 | SHDENABLED | CAS Freigabe |
| 0x0018 | WINDSCHOTT_AUF | Windschott oeffnen (existiert nicht in SW5.2.0) |
| 0x0020 | SIGNAL_STATUS | Diverse Signale abfragen / setzen |
| 0x0021 | HALL_STATUS | Hallsignale abfragen |
| 0x0022 | DACHTYP | Dachtyp abfragen |
| 0x0023 | SOFORT_SCHLAF | Geraet sofort einschlafen lassen |
| 0x0024 | FREIGABEZUSTAND | Freigabezustand auslesen / setzen |
| 0x0025 | WINDSCHOTT_AUS | Windschott ausfahren lassen |
| 0x0026 | WINDSCHOTT_AKTIV | Windschottzustand abfragen |
| 0x0027 | STATISTIKZAEHLER | Statistikzaehler loeschen |
| 0x0080 | CAL_CHK_VALID | Kalibrierwerte Pruefsumme Gueltigkeit abfragen / Defaultwerte setzen |
| 0x0081 | CAL_VOLT_MUL | Kalibrierwert (*) Spannung abfragen / setzen |
| 0x0082 | CAL_VOLT_ADD | Kalibrierwert (+) Spannung abfragen / setzen |
| 0x0083 | CAL_TEMP_MUL | Kalibrierwert (*) Umgebungstemperatur abfragen / setzen |
| 0x0084 | CAL_TEMP_ADD | Kalibrierwert (+) Umgebungstemperatur abfragen/setzen |
| 0x0102 | CHECK_IGNITIONK | Klemmenstatus beruecksichtigen |
| 0x0103 | CHECK_IGNITIONC | Freigabe Panikfreigabe beruecksichtigen |
| 0x0104 | TEMPSENSOR_ALLOWED | Tempsensor erlaubt (existiert nicht in SW5.2.0) |
| 0x0105 | CHECK_IGNITIONA | CAS Authentisierung Freigabe |
| 0x0108 | USESTATEENGINE | USESTATEENGINE (existiert nicht in SW5.2.0) |
| 0x010B | E9X_HIMMEL | Luefterstellung Himmel fuer e9x |
| 0x010C | WASSERSTOFF_FZG | Wasserstofffahrzeug |
| 0x010D | SICHERHEITS_FZG | Sicherheitsfahrzeug |
| 0x010E | HIMMEL_AUTO_ZU | Himmel automatisch Zufahren beim Sichern des Fzg. |
| 0x010F | HIMMEL_AUTO_AUF | Himmel automatisch Oeffnen beim Entriegeln des Fzg. |
| 0x0112 | DOPPELKLICK_AUF | Doppelklick Richtung Oeffnen |
| 0x0113 | DOPPELKLICK_ZU | Doppelklick Richtung schliessen erlaubt |
| 0x0114 | DOPPELKLICK_HEBEN | Doppelklick Richtung Heben |
| 0x0115 | POWER_ERR_LEN_OK | POWER_ERR_LEN_OK |
| 0x0116 | MEAS_VBAT_LOW | MEAS_VBAT_LOW |
| 0x0117 | VBATTOPLIMIT | VBATTOPLIMIT |
| 0x0118 | LOW_BAT_OFF | LOW_BAT_OFF |
| 0x0119 | LOW_BAT_ON | LOW_BAT_ON |
| 0x011A | LOAD_DUMP_ON | LOAD_DUMP_ON |
| 0x011B | LOAD_DUMP_OFF | LOAD_DUMP_OFF |
| 0x011C | LED_BAT_NORM | LED_BAT_NORM |
| 0x011D | LED_MIN | LED_MIN |
| 0x011E | LED_MAX | LED_MAX |
| 0x011F | MOTOROFFDELAYATLOADDUMP | MOTOROFFDELAYATLOADDUMP |
| 0x0140 | PREPANIC_START_TIME | PREPANIC_START_TIME (existiert nicht in SW5.2.0) |
| 0x0141 | PANICWAITTIME | PANICWAITTIME (existiert nicht in SW5.2.0) |
| 0x0142 | NO_RAIN_INTENSITY | Regenintensitaet untere Grenzwert |
| 0x0143 | RAIN_CLOSE_INTENSITY | Regenintensitaet obere Grenzwert |
| 0x0144 | MEAS_AMBIENT_TEMP_LOW | MEAS_AMBIENT_TEMP_LOW |
| 0x0145 | MEAS_AMBIENT_TEMP_HIGH | MEAS_AMBIENT_TEMP_HIGH |
| 0x0146 | BEDIENKONZEPT | Bedienkonzept |
| 0x0147 | USE_SOS | Schiebehimmel vorhanden |
| 0x0148 | TASTE_UEBER_CAN | Taste ueber CAN z.B. fuer E91 |
| 0x0149 | KOMFORT_POS_ZU | Komfortposition beim Schliessen verwenden |
| 0x014A | POWER_ERR_LEN_HIGH | POWER_ERR_LEN_HIGH |
| 0x014B | POWER_ERR_LEN_LOW | POWER_ERR_LEN_LOW |
| 0x0150 | PANIC_FREIGABE_KL15 | Panic-close nur bei Kl 15 |
| 0x0151 | PANIC_FREIGABE_CAS | Panic-close nur mit Freigabe vom CAS (CAN-Bus) |
| 0x0161 | BBHISTAREA | BBHISTAREA |
| 0x0170 | SET_CODE0 | Set Code0 (ab SW5.2.0) |
| 0x0171 | SET_CODE1 | Set Code1 (ab sw5.2.0) |
| 0x0172 | MSA_OPTION | MSA Option (ab MDS sw5.4.0 / Mini sw3.30.0) |
| 0x0180 | REGENSCHLIESSEN | Schliessen aus geoeffnet bei Regen |
| 0x0181 | REGENSCHLIESSENTILT | Schliessen aus gehoben bei Regen |
| 0x0182 | PANIC_CLOSE | Panic-close aus geoeffnet 1 oder 2 Phasen |
| 0x0183 | DOUBLE_PANIC | Doppel Panic-close aus geoeffnet |
| 0x0184 | KLEMME_15_NOTWENDIG | Bedienbar nur mit Enable UND Kl. 15 |
| 0x0186 | PANIC_CLOSE_TILT | Panic-close im Senken |
| 0x0187 | DOUBLE_PANIC_TILT | Doppel Panic-close Senken |
| 0x0188 | SCHIEBEHEBEDACH_TIPP_HEB | Tipp Bewegung heben |
| 0x0189 | SCHIEBEHEBEDACH_TIPP_SENK | Tipp Bewegung senken |
| 0x018A | SCHIEBEHEBEDACH_TIPP_AUF | Tipp Bewegung Oeffnen |
| 0x018B | SCHIEBEHEBEDACH_TIPP_ZU | Tipp Bewegung schliessen |
| 0x018C | HEBEN_AUS_GEOEFFNET | Heben aus geoeffnetem Zustand erlaubt |
| 0x018D | OEFFNEN_AUS_GEHOBEN | Oeffnen aus gehobenen Zustand erlaubt |
| 0x0190 | ANTI_WUMMER | Anti-Wummer-Position verwenden |
| 0x0191 | WINDSCHOTT | Windschott verwenden |
| 0x0192 | KOMFORT_POS_AUF | Komfortposition beim Oeffnen verwenden |
| 0x01B4 | FE_MODE | Fertigungsmode einschaltbar |
| 0x01B5 | TRA_MODE | Transportmode einschaltbar |
| 0x01B6 | WE_MODE | Werkstattmode einschaltbar |
| 0x01B7 | WINDSCHOTT_OPT | Deckelbewegung bei Windschott |
| 0x01B8 | VSCHOTT_AUF_HS | Geschw. bei der Windschott ausgefahren wird bei hochgeschw. |
| 0x01B9 | VDECKEL_ZU | Geschw. Bei der SHD zugefahren wird |
| 0x01BA | TDECKEL_ZU | Zeitverzoegerung  fuer SHD zufahren |
| 0x01BB | VDECKEL_AUF | Geschw. Bei der SHD aufgefahren wird |
| 0x01BC | TDECKEL_AUF | Zeitverzoegerung SHD auffahren |
| 0x01BD | TSCHOTT_AUF_HS | Zeitverzoegerung bei der Windschott ausgefahren wird bei hochgeschw. |
| 0x01C0 | VSCHOTT_AUF | Geschw. bei der Windschott ausgefahren wird |
| 0x01C1 | VSCHOTT_ZU | Geschw. bei der Windschott eingefahren wird |
| 0x01C2 | TSCHOTT_AUF | Zeitverzoegerung bei der Windschott ausgefahren wird |
| 0x01C3 | T_DOPPELKLICK | Zeitverzoegerung in der Doppelklick akzeptiert wird |
| 0x01C4 | DELTA_SOS_SHD | Vorlauf fuer Himmel *1,8 in (mm) |
| 0x01C5 | KOMFORT_OEFFNEN | Komfort-Oeffnen Option |
| 0x01C6 | T_PANIC1 | Timer 1 fuer Panikmode |
| 0x01C7 | T_PANIC2 | Timer 2 fuer Panikmode |
| 0x01C8 | VSCHOTT_ZU_HS | Geschw. bei der Windschott eingefahren wird bei hochgeschw. |
| 0x01C9 | KOMFORT_SCHLIESSEN | Komfort-Schliessen Option |
| 0x01CA | KOMFORT_HEBEN | Komfort-Heben Option |
| 0x01CB | T_SCHOTT_ZU | Zeitverzoegerung bei der Windschott eingefahren wird |
| 0x01CC | T_SCHOTT_ZU_HS | Zeitverzoegerung bei der Windschott eingefahren wird bei hochgeschw. |
| 0x01CD | PARAM1 | PARAM1 |
| 0x01CE | PARAM2 | PARAM2 |
| 0x01CF | PARAM3 | PARAM3 |
| 0x01D0 | TEMPTMONUSESENSOR | Thermomonitor mit interner Temperatur Sensor verwenden abfrage/setzen |
| 0x01D1 | TEMPTMONUSEOUTER | Thermomonitor mit externer Temperatur Sensor verwenden abfrage/setzen |
| 0x01D4 | TEMPCFLUSESENSOR | CFL Temperatur mit interner Temperatur Sensor verwenden abfrage/setzen |
| 0x01D5 | TEMPCFLUSEOUTER | CFL Temperatur mit interner Temperatur Sensor verwenden abfrage/setzen |
| 0x01D8 | NOTLAUF_IMMER | NOTLAUF_IMMER |
| 0x0200 | STOP_MOVE | Motor moving               / Motor stoppen |
| 0x0201 | POSITION | Position abfragen / anfahren |
| 0x0202 | NORMED | Normierung abfragen / loeschen |
| 0x0203 | RF_VALID | Kennlinie Schieben Gueltigkeit abfragen / loeschen |
| 0x0204 | RF_VALID_TILT | Kennlinie Heben Gueltigkeit abfragen / loeschen |
| 0x0205 | STOP_REASON | StopReason abfragen / loeschen |
| 0x0207 | ANLIEFERPOSITION | Anlieferposition abfragen / anfahren |
| 0x0208 | NORM | Normierung abfragen / anstossen |
| 0x0211 | RF_ADR | Kennlinie Speicheradresse abfragen |
| 0x0212 | RF_CHECKSUM | Kennlinie Pruefsumme abfragen  / generieren |
| 0x0213 | RF_CHECKSUM_TILTED | Kennlinie Hebebereich Pruefsumme abfragen / generieren |
| 0x0221 | ACTPOS | Position abfragen / einstellen |
| 0x0222 | ACTSPEED | Dachgeschwindigkeit abfragen |
| 0x0223 | VDIFF | Motorklemmenspannung abfragen |
| 0x0224 | FORCELOWPASS | Kraft abfragen |
| 0x0225 | TEMPCOIL | Wicklungstemperatur auslesen |
| 0x0226 | TEMPROTOR | Rotortemperatur abfragen |
| 0x0227 | TEMPCASE | Gehaeusetemperatur abfragen |
| 0x0228 | DENORMREASON | Grund fuer Normierungsverlust abfragen / loeschen |
| 0x022A | FORCEUSEROFFSET | Aendern der Einklemmschutzschwelle |
| 0x0230 | RFEEIDX | Eeprom Index der Kennlinie abfragen |
| 0x0231 | RFMAXLEN | Laenge des Kennlinienbereiches abfragen |
| 0x0232 | RFSTART | Kraft am Anfang der Schieben Kennlinie abfragen |
| 0x0233 | RFSTARTTILT | Kraft am Anfang der Heben Kennlinie abfragen |
| 0x0301 | POSITION_OPEN | Position Offen |
| 0x0302 | POSITION_CLOSED | Position Geschlossen |
| 0x0303 | POSITION_NORMED | Position Normiert |
| 0x0304 | POSITION_100MM | Position 100mm |
| 0x0305 | BBLENGTH | Reversierlaenge |
| 0x0306 | POSITION_TILTED | Position Gehoben |
| 0x0307 | QUARTER_TURN | Reversierlaenge bei Block |
| 0x0308 | TOLERANCE | TOLERANCE |
| 0x030A | POSITION_CLOUD | Position Ueberlauf fuer Schliessen |
| 0x030E | POS_SEAL | POS_SEAL (existiert nicht in SW5.2.0) |
| 0x030F | ANLIEFERPOSITION | Anlieferposition |
| 0x0310 | CAR_SPEED_THRESH | CAR_SPEED_THRESH |
| 0x0311 | RF_DISTANCE | Abstand CFL-Bereich -> geschossen. |
| 0x0312 | RF_DISTANCE_TILT | Abstand CFL-Bereich Geh.->Geschlossen. |
| 0x0313 | RF_LENGTH | Kennl.Schieben-laenge |
| 0x0315 | RF_LENGTH_TILT | Kennl.Heben-laenge |
| 0x0319 | FORCE_OFFSET_RESTART | Restartwert Anlauf-Ausl.-Offs. |
| 0x031C | TRACK_LIMIT_RESTART | TRACKLIMITRESTART |
| 0x031D | TRACK_LIMIT_MAX | TRACK_LIMIT_MAX |
| 0x031E | TRACKLIMITMIN | TRACKLIMITMIN |
| 0x031F | TRACK_LIMIT_MIN_TILT | TRACK_LIMIT_MIN_TILT |
| 0x0323 | MAXDVDT | dV/dt limit for motor pin voltage slope down |
| 0x0329 | OPPDIRVMOTLIMIT | OPPDIRVMOTLIMIT |
| 0x0349 | TC_ROTOR_CASE | Therm. Kond. Rotor->Gehaeuse |
| 0x034A | TC_CASE_AMBIENT | Therm. Kond. Gehaeuse->Umgebung |
| 0x034B | QCASE | Thermische Kapazitaet Gehaeuse |
| 0x034C | QROTOR | Thermische Kapazitaet Rotor abfrage. |
| 0x0350 | TEMPTHRESH1 | TEMPTHRESH1 |
| 0x0358 | QCOIL | Thermische Kapazitaet Windung |
| 0x0359 | TC_COIL_ROTOR | Therm. Kond. Windung->Rotor |
| 0x035A | LENGTH_NO_STOP | Position ohne Stopp |
| 0x035B | LENGTH_NO_STOP_TILT | Position ohne Stopp gehoben |
| 0x035C | TEMPTHRESH2 | TEMPTHRESH2 |
| 0x0360 | POWER_DISS_FACT | Waermedissipationsfaktor |
| 0x036A | THERMAL_MOTOR_CONST | Thermal Motor Konstante |
| 0x036F | POLEPAIRS | Anzahl der Polpaare |
| 0x0370 | POSPANICSREV | Reversierlaenge in Panik-Mode Phase 1 |
| 0x0371 | SET_CODE1 | Set Code1 (existiert nicht in SW5.2.0) |
| 0x0374 | SET_CODE_4 | SET_CODE_4 (existiert nicht in SW5.2.0) |
| 0x0375 | SET_CODE_6 | SET_CODE_6 (existiert nicht in SW5.2.0) |
| 0x0376 | SET_CODE_8 | SET_CODE_8 (existiert nicht in SW5.2.0) |
| 0x0377 | SET_CODE_A | SET_CODE_A (existiert nicht in SW5.2.0) |
| 0x0378 | SET_CODE_C | SET_CODE_C (existiert nicht in SW5.2.0) |
| 0x0379 | SET_CODE_E | SET_CODE_E (existiert nicht in SW5.2.0) |
| 0x037A | SET_CODE_10 | SET_CODE_10 (existiert nicht in SW5.2.0) |
| 0x037B | SET_CODE_12 | SET_CODE_12 (existiert nicht in SW5.2.0) |
| 0x0382 | MULVDIFFHIGHLIMIT | MULVDIFFHIGHLIMIT |
| 0x0383 | MULVDIFFLOWLIMIT | MULVDIFFLOWLIMIT |
| 0x038C | POSITION_5MM_TILT | 5 mm Weg in Hebebereich |
| 0x038D | POSITION_0MM_TILT | Oeffnungspunkt Heben |
| 0x038F | POSITION_0MM | Oeffnungspunkt Schieben |
| 0x0399 | POSSEAL2 | POSSEAL2 (existiert nicht in SW5.2.0) |
| 0x03A0 | TEMP_COIL_START | Temperaturaddition bei Start |
| 0x03A3 | BLOCK_TIME | BLOCK_TIME |
| 0x03A6 | OPPDIR_HALL | Hall Signal invers |
| 0x03A7 | OPPDIR_VMOT | Motorklemmenspannung invers |
| 0x03A8 | OPPDIR_DRIVER | Driver inverse |
| 0x03B0 | BRAKE_MUL | BRAKE_MUL |
| 0x03B1 | BRAKE_OFFSET | BRAKE_OFFSET |
| 0x03B2 | PRERUNLEARN | PRERUNLEARN |
| 0x03B3 | POSTRUNLEARN | POSTRUNLEARN |
| 0x03B4 | PRERUNACTU | PRERUNACTU |
| 0x03B5 | POSTRUNACTU | POSTRUNACTU |
| 0x03B6 | PRERUNFROMTILT | PRERUNFROMTILT |
| 0x03B7 | TRACKLIMITMAXOUTSIDE | TRACKLIMITMAXOUTSIDE |
| 0x03B8 | TRACKLIMITMINOUTSIDE | TRACKLIMITMINOUTSIDE |
| 0x03BB | TEMPIDLE | TEMPIDLE |
| 0x03BC | MINDIFFFORACTU | MINDIFFFORACTU |
| 0x03BE | EXOPENBEGIN | EXOPENBEGIN |
| 0x03BF | EXOPENEND | EXOPENEND |
| 0x03C0 | POS0 | Position 0 |
| 0x03C1 | POS1 | Position 1 |
| 0x03C2 | POS2 | Position 2 |
| 0x03C3 | POS3 | Position 3 |
| 0x03C4 | POS4 | Position 4 |
| 0x03C5 | POS5 | Position 5 |
| 0x03C6 | POS6 | Position 6 |
| 0x03C7 | POS7 | Position 7 |
| 0x03C8 | POS8 | Position 8 |
| 0x03C9 | POS9 | Position 9 |
| 0x03D0 | BOOTINGTIME | BOOTINGTIME |
| 0x03D1 | STARTUPTIME | STARTUPTIME |
| 0x03D2 | TURNTIME | TURNTIME |
| 0x03D3 | NORMINGBLOCKTIME | NORMINGBLOCKTIME |
| 0x03D4 | WRITEPOSTIME | WRITEPOSTIME |
| 0x03D5 | CLEARPOSTIME | CLEARPOSTIME |
| 0x03D6 | TIMEOUTTIME | TIMEOUTTIME |
| 0x03D7 | TIMEOUTLIMPHOMETIME | TIMEOUTLIMPHOMETIME |
| 0x03D8 | DRIVERILLEGALONTIME | DRIVERILLEGALONTIME |
| 0x03D9 | DRIVERBADTIME | DRIVERBADTIME |
| 0x03DA | MOTORSHORTTIME | MOTORSHORTTIME |
| 0x03DB | ERRMECHCOUNT | ERRMECHCOUNT |
| 0x03DC | OPPDIRCOUNT | OPPDIRCOUNT |
| 0x03DD | REVERSINGDELAYTIME | REVERSINGDELAYTIME |
| 0x03DE | FORCETHRESHEXOPEN | FORCETHRESHEXOPEN |
| 0x03DF | TRACKLIMITEXOPEN | TRACKLIMITEXOPEN |
| 0x03F0 | CFL_ALLOWED | SKB erlaubt |
| 0x03F1 | ACTU_ALLOWED | Aktualisieren erlaubt |
| 0x03F3 | RRD_ALLOWED | Ruettelerkennung erlaubt |
| 0x03F5 | TMON_ALLOWED | Temperaturmonitor |
| 0x03F6 | CLOUD_ALLOWED | Eine Richtung schliessen |
| 0x03F8 | LIMPHOMEALLOWED | LIMPHOMEALLOWED (existiert nicht in SW5.2.0) |
| 0x03F9 | LIMPHOME2DIR | LIMPHOME2DIR |
| 0x03FA | RESTARTALLOWED | RESTARTALLOWED |
| 0x03FD | SKB_OHNE_KL_OEFFNEN | SKB ohne Kennlinie bei Oeffnen erlaubt |
| 0x03FE | SKB_OHNE_KL_SCH | SKB ohne Kennlinie bei Heben erlaubt |

### NAME_MOTOR_COMMAND

| CODE | COMMAND | TEXT |
| --- | --- | --- |
| 0 | STOP | Motor anhalten |
| 1 | OPEN | Bewegen richtung oeffnen |
| 2 | CLOSE | Bewegen richtung schliessen |

### SCHALTER_TEXT

| NR | TEXT |
| --- | --- |
| 0 | Keine Betaetigung |
| 1 | oeffnen Manuell |
| 2 | Schliessen Manuell |
| 3 | Unplausibel |
| 4 | Heben |
| 5 | oeffnen Automatisch |
| 6 | Schliessen Automatisch |
| 7 | Unplausibel |

### STOP_REASON

| STOP_REASON_NR | STOP_REASON_TEXT | TEXT |
| --- | --- | --- |
| 0 | NOT_STOPPED | Motor laeuft |
| 1 | POSITION_REACHED | Position erreicht |
| 2 | STOP_MOVE | Bewegung abgebrochen |
| 3 | STOP_MOVE_INSTANTLY | Bewegung abgebrochen |
| 4 | NORM | Normiert |
| 5 | RENORM | Renormiert |
| 6 | PINCHING | Einklemmen erkannt |
| 7 | BLOCKING | Blockieren erkannt |
| 8 | DOUBLE_BLOCK | doppeltes Blockieren erkannt |
| 9 | NO_MOVE | keine Bewegung |
| 10 | EXCEPTION | Ausnahme |
| 11 | SAFETY_TIMER_OR_LIMPHOME | Sicherheitszeitueberlauf oder notlauf |
| 12 | OPPOSITE_DIRECTION | verkehrte Drehrichtung |
| 13 | INVALID_TARGET_POS | falsche Zielposition |
| 14 | INVALID_TARGET_POS_LOW | falsche Zielposition (zu niedrig) |
| 15 | INVALID_TARGET_POS_HIGH | falsche Zielposition (zu hoch) |
| 16 | WRONG_DIR_LIMPHOME | falsche Drehrichtung fuer Notlauf |
| 17 | WRONG_NR_VALUES | Lern fehler |
| 18 | CANT_WRITE | Lern fehler |
| 19 | FIFO_OVERRUN | Lern fehler |
| 20 | CFL_NUMERICAL_OV | Lern fehler |
| 21 | CANT_TILT | ungueltige Hebenaufforderung |
| 22 | POS_OPEN_LEARNED | Position open lernt |
| 23 | STOP_MOVE_HIGH_TEMP | Motor zu warm |
| 24 | DRIVER_BAD | Fehler in hardware treiber |
| 25 | MOTOR_SHORT | Motorkurzschluss |
| 26 | STARTUP_FAILED | Start nicht gelungen |
| 27 | RESET | Reset |
| 28 | UNEXPECTED STOP | Unerwartetes Anhalten |
| 29 | HARDWARE_DOWN | Hardware nicht freigeschaltet |
| 30 | REINIT | Erneute Intializieunrg (nach Hardware Down |
| 31 | PULSE_LOST | HALL Puls verloren |
| 32 | DOUBLE_PINCHED | doppelte Einklemmen erkannt |
| 33 | TRIPLE_PINCHED | dreifach Einklemmen erkannt |
| 34 | STARTUP_FAILED_TMON | Startup failed due to TMon veto |
| 35 | STARTUP_FAILED_VBAT | startup failed due to battery voltage |
| 36 | OPPOSITE_DIRECTION_VMOT | opposite direction was detected (motor pin voltage) |
| 37 | HALLA_ERROR | erroneous HallA |
| 38 | HALLB_ERROR | erroneous HallB |

### KENNLINIE

| IOLI | NAME_KENNLINIE | TEXT |
| --- | --- | --- |
| 0x10 | SHD | SchiebeHebeDach |
| 0x11 | SOS | SOnnenSchutz |
| 0x20 | SCHIEBEN | Schieben |
| 0x22 | HEBEN | Heben |

### MOTORLAUF

| IOLI | NAME_MOTORLAUF | TEXT |
| --- | --- | --- |
| 0x10 | SHD | SchiebeHebeDach |
| 0x11 | SOS | SOnnenSchutz |
| 0x20 | STOP | Anhalten |
| 0x24 | LINKS | Links drehen |
| 0x28 | RECHTS | Rechts drehen |

### DENORM_REASON

| IOLI | DENORM_TEXT | TEXT |
| --- | --- | --- |
| 0 | NORM | Normiert |
| 1 | INITSTART | Start Initialisierung |
| 2 | DIAGCOMMAND | Clear norm bit durch Diagnose |
| 3 | DIAGMOVECAN | Unbegrenzte links/rechts Lauf durch Diagnose |
| 4 | DIAGMOVEKEY | Unbegrenzte links/rechts Lauf durch taste |
| 5 | ERRCONFIG | Configuration Fehler |
| 6 | ERRCODING | Kodier Fehler |
| 7 | LOADDUMP | Load dump jump start bei laufende Motor |
| 8 | HALLOFF | Hall abgeschaltet bei laufende Motor |
| 9 | ERRHALLA | Ein Hall Sensor A Fehler entdeckt |
| 10 | POSITIONERRI | Ein falsche Position entdeckt bei stehende Motor |
| 11 | POSITIONERRM | Ein falsche Position entdeckt bei laufende Motor |
| 12 | AFTERRESET | Keine Positionen gefunden nach reset |
| 13 | RESERVED1 | Reserviert |
| 14 | RESERVED2 | Reserviert |
| 15 | IODIAG |  |
| 16 | HALLA_NOMOVE |  |
| 17 | ERRHALLB | Ein Hall Sensor B fehler entdeckt |
| 18 | PE | Ein Relais Kleber nach hochfahren entdeckt |
| 19 | EEPROM | EEPROM Fehler im Positionsspeicherbereich |
| 127 | UNKNOWN | Nach hochfahren war kein Normierung mehr da |
| 255 | EMPTY | Kein Eintrag |

### HARDWARENR

| IOLI | HARDWARE_NR | TEXT |
| --- | --- | --- |
| 0x00 | MDS_K | Hardware nummer KBUS |
| 0x01 | MDS_CAN | Hardware nummer CANBUS |
| 0x02 | E60 | Hardware nummer E60 |
| 0x03 | MDS_CAN_LASCHEN | Hardware nummer CANBus mit laschen |
| 0x04 | R56 | Hardware nummer R56 |

### WAWAUSEIN

| IOLI | WAW | TEXT |
| --- | --- | --- |
| 0x00 | WAW_EIN | Windschott einfahren |
| 0x01 | WAW_AUS | Windschott ausfahren |

### SPEICHERSEGMENT

| SEG_BYTE | SEG_NAME | SEG_TEXT |
| --- | --- | --- |
| 0x00 | LAR | linearAdressRange |
| 0x01 | ROMI | ROM / EPROM, internal |
| 0x02 | ROMX | ROM / EPROM, external |
| 0x03 | NVRAM | NV-RAM (characteristic zones, DTC memory |
| 0x04 | RAMIS | RAM, internal (short MOV) |
| 0x05 | RAMXX | RAM, external (x data MOV) |
| 0x06 | FLASH | Flash EPROM, internal |
| 0x07 | UIFM | User Info Field Memory |
| 0x08 | VODM | Vehicle Order Data Memory |
| 0x09 | FLASHX | Flash EPROM, external |
| 0x0B | RAMIL | RAM, internal (long MOV / Register) |
| 0xFF | ??? | unbekanntes Speichersegment |
