# ZKE3.prg

## General

|  |  |
| --- | --- |
| File | ZKE3.prg |
| Type | PRG |
| Jobs | 76 |
| Tables | 17 |
| Origin | BMW TI-435 Gerd Huber |
| Revision | 2.35 |
| Author | BMW TI-435 Gerd Huber, BMW TP-422 Frank Fannasch |
| ECU Comment | Ansteuern nur bei entsichertem Fahrzeug! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentrale Karosserie-Elektronik III  fuer E38, E39 |  |  |
| ORIGIN | string | BMW TI-435 Gerd Huber |  |  |
| REVISION | string | 2.35 |  |  |
| AUTHOR | string | BMW TI-435 Gerd Huber, BMW TP-422 Frank Fannasch |  |  |
| COMMENT | string | Ansteuern nur bei entsichertem Fahrzeug! |  |  |
| PACKAGE | string | 0.01 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

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

### INITIALISIERUNG

Default init job

_No arguments._

### IDENT

Ident-Daten fuer GM III

| Name | Type | Description |
| --- | --- | --- |
| P_MODUL | string | gewuenschtes Peripheriemodul table PeripherieModule PM_ABK PM_TEXT |

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

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

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

| Name | Type | Description |
| --- | --- | --- |
| P_MODUL | string | Name des gewuenschten Peripherie-Moduls table PeripherieModule_HD PM_ABK PM_TEXT |

### COD_LESEN_ALLGEMEIN

Auslesen der allgemeinen Codierdaten des GM III (Block 0)

_No arguments._

### COD_LESEN_SERVOTRONIK

Auslesen der Codierdaten des GM III (Block 1 und 2)

_No arguments._

### INFOSPEICHER_LESEN

Infospeicher lesen Info-Speicher ist im Aufbau identisch dem Fehlerspeicher Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### STATUS_DIGITAL_GM3_EA

Status der Digitalsignale des GM III Signalart: Ein-/Ausgaenge

_No arguments._

### STATUS_DIGITAL_GM3_KP

Status der Digitalsignale des GM III Signalart: K-Bus bzw. P-Bus

_No arguments._

### STATUS_DIGITAL_GM3_INT

Status der Digitalsignale des GM III Signalart: interne Signale

_No arguments._

### STATUS_ANALOG_GM3

Status der Analogsignale des GM III

_No arguments._

### STEUERN_DIGITAL_GM3

Ansteuern eines digitalen Ein- oder Ausgangs v. GM3

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STEUERN_ANALOG_GM3

Ansteuern eines analogen Ein- oder Ausgangs v. GM3

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente |
| WERT | long | Wert, mit welchen angesteuert werden soll |

### STATUS_DIGITAL_FT

Status der Digitalsignale der FT (Ein-/Ausgaenge)

_No arguments._

### STATUS_ANALOG_FT

Status der Analogsignale der FT

_No arguments._

### STEUERN_DIGITAL_FT

Ansteuern eines digitalen Ein- oder Ausgangs der FT

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_FT NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_DIGITAL_BT

Status der Digitalsignale der BT (Ein-/Ausgaenge)

_No arguments._

### STATUS_ANALOG_BT

Status der Analogsignale der BT

_No arguments._

### STEUERN_DIGITAL_BT

Ansteuern eines digitalen Ein- oder Ausgangs der BT

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_BT NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_DIGITAL_SHD

Status der Digitalsignale des SHD (Ein-/Ausgaenge) Der Wertebereich ist bei allen Results: Bereich: 0, wenn FALSE / 1, wenn TRUE

_No arguments._

### STATUS_ANALOG_SHD

Status der Analogsignale des SHD

_No arguments._

### STEUERN_DIGITAL_SHD

Ansteuern eines digitalen Ein- oder Ausgangs des SHD

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SHD NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_DIGITAL_SHD_NEU

Status der Digitalsignale des neuen SHD fuer E39 (Ein-/Ausgaenge) Der Wertebereich ist bei allen Results: Bereich: 0, wenn FALSE / 1, wenn TRUE

_No arguments._

### STATUS_ANALOG_SHD_NEU

Status der Analogsignale des neuen SHD fuer E39

_No arguments._

### STEUERN_DIGITAL_SHD_NEU

Ansteuern eines digitalen Ein- oder Ausgangs des neuen SHD fuer E39

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SHD_NEU NAME TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_DIGITAL_SB

Status der Digitalsignale des SB (Ein-/Ausgaenge) nur bei E38 / nicht bei E39

_No arguments._

### STEUERN_DIGITAL_SB

Ansteuern eines digitalen Ein- oder Ausgangs des SB nur bei E38 / nicht bei E39

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SB NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_DIGITAL_SM_LSM

Status der Digitalsignale des SM/LSM (Ein-/Ausgaenge) nur bei E38 / nicht bei E39

_No arguments._

### STATUS_ANALOG_SM

Status der Achsenposition des SM

_No arguments._

### STATUS_ANALOG_SMBF

Status der Achsenposition des SMBF

_No arguments._

### STATUS_ANALOG_LSM

Status der Achsenposition des LSM

_No arguments._

### STATUS_ANALOG_SM_LAENGS_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_HOEHE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_NEIGUNG_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_LEHNE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_KOPF_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_SITZTIEFE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SM_LEHNENKOPF_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_LSM_NEIGUNG_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_LSM_LAENGS_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_LAENGS_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_HOEHE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_NEIGUNG_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_LEHNE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_KOPF_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_SITZTIEFE_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STATUS_ANALOG_SMBF_LEHNENKOPF_MIN_MAX

Status des Schleppzeigerwertes der Achse

_No arguments._

### STEUERN_DIGITAL_SM_LSM

Ansteuern eines digitalen Ein- oder Ausgangs des SM_LSM nur bei E38 / nicht bei E39

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SM_LSM NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_DIGITAL_SMBF

Status der Digitalsignale des SMBF (Ein-/Ausgaenge) nur bei E38 / nicht bei E39

_No arguments._

### STEUERN_DIGITAL_SMBF

Ansteuern eines digitalen Ein- oder Ausgangs des SMBF nur bei E38 / nicht bei E39

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SMBF NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_DIGITAL_SMSFB

Status der Digitalsignale des SMSFB (Ein-/Ausgaenge) nur bei E38 / nicht bei E39

_No arguments._

### STEUERN_DIGITAL_SMSFB

Ansteuern eines digitalen Ein- oder Ausgangs des SMSFB nur bei E38 / nicht bei E39

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS_SMBF NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STEUERN_DIGITAL_NACHEINANDER

Ansteuern maximal 5 digitaler Signale des GM3 oder eines Peripheriemoduls NACHEINANDER

| Name | Type | Description |
| --- | --- | --- |
| P_MODUL | string | Name des gewuenschten Peripherie-Moduls table PeripherieModule PM_ABK PM_TEXT |
| SEKUNDEN | int | Pausenzeit am Ende in Sekunden ACHTUNG: Zeitangabe funktioniert nicht bei EDIABAS im EDIC |
| ORT1 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT2 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT3 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT4 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT5 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |

### STEUERN_SIMULTAN_GM3

Gleichzeitiges Ansteuern maximal 5 digitaler Signale des GM3 !!! ACHTUNG: ZKE III antwortet nicht !!!

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT2 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT3 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT4 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT5 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |

### STATUS_BYTES_GM3

Status der Digitalsignale des GM III Signalart: BYTE-weise, d.h. ohne Interpretation

_No arguments._

### STATUS_BYTES_FT

Status aller Signale des Peripheriemoduls FT Signalart: BYTE-weise, d.h. ohne Interpretation

_No arguments._

### STATUS_BYTES_BT

Status aller Signale des Peripheriemoduls BT Signalart: BYTE-weise, d.h. ohne Interpretation

_No arguments._

### STATUS_BYTES_SHD

Status aller Signale des Peripheriemoduls SHD Signalart: BYTE-weise, d.h. ohne Interpretation

_No arguments._

### STATUS_BYTES_SB

Status aller Signale des Peripheriemoduls SB Signalart: BYTE-weise, d.h. ohne Interpretation

_No arguments._

### STATUS_FH_FT

Status der FH-Signale der FT

_No arguments._

### STATUS_FH_BT

Status der FH-Signale der BT

_No arguments._

### STATUS_FH_HINTEN

Status der FH-Signale hinten (GM3)

_No arguments._

### STATUS_SHD

Status der SHD-Signale

_No arguments._

### IDENT_SW_NR_TUEREN

Vergleich der Softwarenummern der Tuermodule FT und BT

_No arguments._

### STATUS_INRS

1.) Ansteuern: NGAG - 2.) Status lesen: INRS

| Name | Type | Description |
| --- | --- | --- |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### SCHREIBEN_SHD_AW

ACHTUNG: nur fuer E39/2 mit SHD-Software-Stand < 5  !!! Umcodieren des SHD E39/2 wegen Antiwummerstellung

_No arguments._

### TESTEN_SHD_AW

ACHTUNG: nur fuer E39/2 mit SHD-Software-Stand < 5  !!! Testen der Daten des SHD E39/2 bzgl. Antiwummerstellung

_No arguments._

### STEUERN_START_AUTOINIT

Autoinit starten (SHD neu)

_No arguments._

### STEUERN_PRUEFMODUS_FREIGEBEN

Pruefmodus freigeben (SHD neu)

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
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| ?10? | ERROR_ARGUMENT |
| ?20? | ERROR_FEHLERANZAHL |
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
| 0x55 | BHTC |
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

### PERIPHERIEMODULE

| PM_NR | PM_ABK | PM_TEXT |
| --- | --- | --- |
| 0x00 | GM3 | Grundmodul III |
| 0x01 | FT | Fahrertuer |
| 0x02 | BT | Beifahrertuer |
| 0x03 | SHD | Schiebehebedach |
| 0x04 | SB | Schalterblock |
| 0x05 | SM_LSM | Sitz/Lenksaeulenmemory Fahrer |
| 0x08 | SM_BF | Sitzmemory Beifahrer |
| 0x09 | SM_SFB | Sitzmemory Fernbedienung Beifahrersitz |
| 0xXY | XY | ERROR_PM_UNBEKANNT |

### PERIPHERIEMODULE_HD

| PM_NR | PM_ABK | PM_TEXT |
| --- | --- | --- |
| 0x00 | GM3 | Grundmodul III |
| 0x01 | FT | Fahrertuer |
| 0x02 | BT | Beifahrertuer |
| 0x03 | SHD | Schiebehebedach |
| 0xXY | XY | ERROR_PM_NICHT_ERLAUBT |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Sicherung Fensterheber hinten |
| 0x02 | Sicherung Innenraumbeleuchtung |
| 0x03 | Sicherung DWA-Horn |
| 0x04 | Leitung Klemme R am GM III |
| 0x08 | Codierung Block 0 nicht erfolgt |
| 0x09 | Codierung Block 1 oder Block 2 nicht erfolgt |
| 0x0A | Codierung Block 0 nicht korrekt |
| 0x0B | Codierung Block 1 oder Block 2 nicht korrekt |
| 0x30 | Wischerschalter, Potentiometer |
| 0x31 | Wischermotor blockiert, Rueckstellkontakt, Wischerrelais |
| 0x33 | Kurzschluss Wascherpumpe |
| 0x34 | Unterbrechung ADV-Motor |
| 0x35 | Kurzschluss ADV-Motor |
| 0x36 | Nockenschalter |
| 0x37 | Unterbrechung Ansteuerung SIR, DRM 2 |
| 0x38 | Unterbrechung Ansteuerung SRA, DRM 2 |
| 0x39 | Relaiskleber nach U-Batt im DRM 2 |
| 0x48 | Leitung WI1 Kurzschluss gegen U-Batt oder Wischerrelais 1 |
| 0x49 | Leitung WI1 Unterbrechung oder Wischerrelais 1 |
| 0x4A | Leitung WI2 Kurzschluss gegen U-Batt oder Wischerrelais 2 |
| 0x4B | Leitung WI2 Unterbrechung oder Wischerrelais 2 |
| 0x40 | Leitungsunterbrechung Innenraumbeleuchtung |
| 0x41 | Kurzschluss Innenraumbeleuchtung |
| 0x44 | Leitungsunterbrechung Tuerschlossheizung |
| 0x45 | Kurzschluss Tuerschlossheizung |
| 0x50 | Relaiskleber Signal MER nach U-Batt im GM III |
| 0x51 | Relaiskleber Signal MER nach Masse im GM III |
| 0x52 | Relaiskleber Signal MVR nach U-Batt im GM III |
| 0x53 | Relaiskleber Signal MVR nach Masse im GM III |
| 0x54 | Relaiskleber Signal MZS nach U-Batt im GM III |
| 0x55 | Relaiskleber Signal MZS nach Masse im GM III |
| 0x56 | Relaiskleber Signal MERHK nach U-Batt im GM III |
| 0x57 | Relaiskleber Signal MERHK nach Masse im GM III |
| 0x58 | Crash-Sensor dauernd aktiv |
| 0x59 | ZV-Antrieb FT unterbrochen |
| 0x5A | ZV-Antrieb BT unterbrochen |
| 0x5B | ZV-Antrieb FT kurzgeschlossen |
| 0x5C | ZV-Antrieb BT kurzgeschlossen |
| 0x5D | ZV-Antrieb FT oder Leitung STZVFT defekt |
| 0x5E | ZV-Antrieb BT oder Leitung STZVBT defekt |
| 0x60 | Relaiskleber Signal MFFA nach U-Batt im PM FT |
| 0x61 | Relaiskleber Signal MFFA nach Masse im PM FT |
| 0x62 | Relaiskleber Signal MFFZ nach U-Batt im PM FT |
| 0x63 | Relaiskleber Signal MFFZ nach Masse im PM FT |
| 0x64 | Relaiskleber Signal MFBA nach U-Batt im PM BT |
| 0x65 | Relaiskleber Signal MFBA nach Masse im PM BT |
| 0x66 | Relaiskleber Signal MFBZ nach U-Batt im PM BT |
| 0x67 | Relaiskleber Signal MFBZ nach Masse im PM BT |
| 0x68 | Relaiskleber Signal MFFHA nach U-Batt im GM III |
| 0x69 | Relaiskleber Signal MFFHA nach Masse im GM III |
| 0x6A | Relaiskleber Signal MFFHZ nach U-Batt im GM III |
| 0x6B | Relaiskleber Signal MFFHZ nach Masse im GM III |
| 0x6C | Relaiskleber Signal MFBHA nach U-Batt im GM III |
| 0x6D | Relaiskleber Signal MFBHA nach Masse im GM III |
| 0x6E | Relaiskleber Signal MFBHZ nach U-Batt im GM III |
| 0x6F | Relaiskleber Signal MFBHZ nach Masse im GM III |
| 0x70 | PM Schalterblock |
| 0x7C | SHD-Motor blockiert oder PM SHD defekt |
| 0x7E | SHD-Schalter oder Zuleitungen NIO |
| 0x7F | PM SHD defekt (Relais) |
| 0x80 | Unterbrechung Servoventil oder Leitungen |
| 0x81 | Kurzschluss Servoventil oder Leitungen |
| 0x82 | Leitung Tacho A oder IKE fehlt |
| 0x83 | Leitung Tacho A oder IKE unplausibel |
| 0x91 | Kurzschluss Signal DWAH oder Leitungen |
| 0x92 | Neigungsgeber: Sicherung oder Leitung |
| 0x93 | DWA-LED: Kurzschluss gegen U-Batt oder Leitung DWAL |
| 0x94 | DWA-LED: Unterbrechung oder Leitung DWAL, KL30 |
| 0x95 | Innenraumschutz: Sicherung oder Leitung |
| 0x96 | Innenraumschutz hinten: Sicherung oder Leitung |
| 0xA0 | Unterbrechung Spiegelheizung FT oder Leitungen |
| 0xA1 | Kurzschluss Spiegelheizung FT oder Leitungen |
| 0xA2 | Unterbrechung Spiegelheizung BT oder Leitungen |
| 0xA3 | Kurzschluss Spiegelheizung BT oder Leitungen |
| 0xA4 | Spiegel FT, Potentiometer Vertikal oder Leitungen |
| 0xA5 | Spiegel FT, Potentiometer Horizontal oder Leitungen |
| 0xA6 | Spiegel BT, Potentiometer Vertikal oder Leitungen |
| 0xA7 | Spiegel BT, Potentiometer Horizontal oder Leitungen |
| 0xA8 | Unterbrechung Spiegelmotor FT Vertikal |
| 0xA9 | Kurzschluss Spiegelmotor FT Vertikal |
| 0xAA | Unterbrechung Spiegelmotor FT Horizontal |
| 0xAB | Kurzschluss Spiegelmotor FT Horizontal |
| 0xAC | Unterbrechung Spiegelmotor BT Vertikal |
| 0xAD | Kurzschluss Spiegelmotor BT Vertikal |
| 0xAE | Unterbrechung Spiegelmotor BT Horizontal |
| 0xAF | Kurzschluss Spiegelmotor BT Horizontal |
| 0xB0 | Unterbrechung Spiegelmotor FT Einklappen |
| 0xB1 | Kurzschluss Spiegelmotor FT Einklappen |
| 0xB2 | Unterbrechung Spiegelmotor BT Einklappen |
| 0xB3 | Kurzschluss Spiegelmotor BT Einklappen |
| 0xC0 | FS Laengsverstellung: Uebertragungsfehler |
| 0xC1 | FS Laengsverstellung: Kurzschluss |
| 0xC2 | FS Laengsverstellung: Blockierung vorne |
| 0xC3 | FS Laengsverstellung: Blockierung hinten |
| 0xC4 | FS Sitzhoehe: Uebertragungsfehler |
| 0xC5 | FS Sitzhoehe: Kurzschluss |
| 0xC6 | FS Sitzhoehe: Blockierung oben |
| 0xC7 | FS Sitzhoehe: Blockierung unten |
| 0xC8 | FS Sitzneigung: Uebertragungsfehler |
| 0xC9 | FS Sitzneigung: Kurzschluss |
| 0xCA | FS Sitzneigung: Blockierung oben |
| 0xCB | FS Sitzneigung: Blockierung unten |
| 0xCC | FS Sitzlehne: Uebertragungsfehler |
| 0xCD | FS Sitzlehne: Kurzschluss |
| 0xCE | FS Sitzlehne: Blockierung vorne |
| 0xCF | FS Sitzlehne: Blockierung hinten |
| 0xD0 | FS Kopfstuetze: Uebertragungsfehler |
| 0xD1 | FS Kopfstuetze: Kurzschluss |
| 0xD2 | FS Kopfstuetze: Blockierung oben |
| 0xD3 | FS Kopfstuetze: Blockierung unten |
| 0xD4 | FS Sitztiefe: Uebertragungsfehler |
| 0xD5 | FS Sitztiefe: Kurzschluss |
| 0xD6 | FS Sitztiefe: Blockierung oben |
| 0xD7 | FS Sitztiefe: Blockierung unten |
| 0xD8 | FS Lehnenkopf: Uebertragungsfehler |
| 0xD9 | FS Lehnenkopf: Kurzschluss |
| 0xDA | FS Lehnenkopf: Blockierung vorne |
| 0xDB | FS Lehnenkopf: Blockierung hinten |
| 0xDC | LS Neigung: Uebertragungsfehler |
| 0xDD | LS Neigung: Kurzschluss |
| 0xDE | LS Neigung: Blockierung oben |
| 0xDF | LS Neigung: Blockierung unten |
| 0xE0 | LS Laengsverstellung: Uebertragungsfehler |
| 0xE1 | LS Laengsverstellung: Kurzschluss |
| 0xE2 | LS Laengsverstellung: Blockierung vorne |
| 0xE3 | LS Laengsverstellung: Blockierung hinten |
| 0xE4 | BFS Laengsverstellung: Uebertragungsfehler |
| 0xE5 | BFS Laengsverstellung: Kurzschluss |
| 0xE6 | BFS Laengsverstellung: Blockierung vorne |
| 0xE7 | BFS Laengsverstellung: Blockierung hinten |
| 0xE8 | BFS Sitzhoehe: Uebertragungsfehler |
| 0xE9 | BFS Sitzhoehe: Kurzschluss |
| 0xEA | BFS Sitzhoehe: Blockierung oben |
| 0xEB | BFS Sitzhoehe: Blockierung unten |
| 0xEC | BFS Sitzneigung: Uebertragungsfehler |
| 0xED | BFS Sitzneigung: Kurzschluss |
| 0xEE | BFS Sitzneigung: Blockierung oben |
| 0xEF | BFS Sitzneigung: Blockierung unten |
| 0xF0 | BFS Sitzlehne: Uebertragungsfehler |
| 0xF1 | BFS Sitzlehne: Kurzschluss |
| 0xF2 | BFS Sitzlehne: Blockierung vorne |
| 0xF3 | BFS Sitzlehne: Blockierung hinten |
| 0xF4 | BFS Kopfstuetze: Uebertragungsfehler |
| 0xF5 | BFS Kopfstuetze: Kurzschluss |
| 0xF6 | BFS Kopfstuetze: Blockierung oben |
| 0xF7 | BFS Kopfstuetze: Blockierung unten |
| 0xF8 | BFS Sitztiefe: Uebertragungsfehler |
| 0xF9 | BFS Sitztiefe: Kurzschluss |
| 0xFA | BFS Sitztiefe: Blockierung oben |
| 0xFB | BFS Sitztiefe: Blockierung unten |
| 0xFC | BFS Lehnenkopf: Uebertragungsfehler |
| 0xFD | BFS Lehnenkopf: Kurzschluss |
| 0xFE | BFS Lehnenkopf: Blockierung vorne |
| 0xFF | BFS Lehnenkopf: Blockierung hinten |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x70 | Unterbrechung Servoventil oder Leitungen (SERV1, SERV2) |
| 0x71 | Kurzschluss Servoventil oder Leitungen (SERV1, SERV2) |
| 0x72 | Leitung Tacho A oder IKE fehlt |
| 0x73 | Leitung Tacho A oder IKE unplausibel |
| 0x80 | DWA-Alarm : Klemme R |
| 0x81 | DWA-Alarm : Klemme 15 |
| 0x82 | DWA-Alarm : Panik-Mode |
| 0x83 | DWA-Alarm : Tuerkontakt FT |
| 0x84 | DWA-Alarm : Tuerkontakt BT |
| 0x85 | DWA-Alarm : Tuerkontakt FTH |
| 0x86 | DWA-Alarm : Tuerkontakt BTH |
| 0x87 | DWA-Alarm : Heckklappenkontakt |
| 0x88 | DWA-Alarm : Handschuhfachkontakt |
| 0x89 | DWA-Alarm : Motorhaubenkontakt |
| 0x8A | DWA-Alarm : Neigungsgeber |
| 0x8B | DWA-Alarm : Heckscheibe oder Innenraumschutz |
| 0x8C | DWA-Alarm : Scheibenueberwachung FT |
| 0x8D | DWA-Alarm : Scheibenueberwachung BT |
| 0x8E | DWA-Alarm : Scheibenueberwachung FTH |
| 0x8F | DWA-Alarm : Scheibenueberwachung BTH |
| 0x93 | Power Up vom GM III |
| 0x94 | Power Up vom PM FT |
| 0x95 | Power Up vom PM BT |
| 0xA0 | Wiederholsperre ZV angesprochen |
| 0xA1 | Crash-Sensor hat angesprochen |
| 0xA2 | BC hat WFSI angesteuert |
| 0xA3 | BC hat DWA-Horn angesteuert |
| 0xA4 | Spiegel- u. ZV-Treiber in PM FT hat Uerbertemp.absch. angespr. |
| 0xA5 | Spiegel- u. ZV-Treiber in PM BT hat Uerbertemp.absch. angespr. |
| 0x60 | Fensterheber-Motor FT |
| 0x61 | Fensterheber-Motor BT |
| 0x62 | Fensterheber-Motor FTH |
| 0x63 | Fensterheber-Motor BTH |
| 0xXY | unbekannter Info-Ort |

### BITS

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| SFFHA | 1 | 0x01 | 0x01 | E | FH-Schalter FH auf |
| SFFHZ | 1 | 0x02 | 0x02 | E | FH-Schalter FH zu |
| SIR | 1 | 0x04 | 0x04 | E | Schalter Wischer Intensivpumpe |
| SFBHA | 1 | 0x08 | 0x08 | E | FH-Schalter BH auf |
| SFBHZ | 1 | 0x10 | 0x10 | E | FH-Schalter BH zu |
| SCAO | 1 | 0x20 | 0x20 | E | Schalter Softcloseautomatik offen |
| RSK | 1 | 0x40 | 0x40 | E | Rueckstellkontakt Wischer |
| NS | 1 | 0x80 | 0x80 | E | Nockenschalter ADV |
| TOEHS | 1 | 0x80 | 0x80 | E | Taster zum Oeffnen der Heckscheibe |
| TOEHKI | 2 | 0x01 | 0x01 | E | Taster zum Oeffnen der Heckklappe von Innen |
| TOEHK | 2 | 0x02 | 0x02 | E | Taster zum Oeffnen der Heckklappe |
| HKK | 2 | 0x04 | 0x04 | E | Heckklappenkontakt |
| TZV | 2 | 0x08 | 0x08 | E | Taste zum Umschalten der ZV |
| VRHK | 2 | 0x10 | 0x10 | E | Schalter Schliesszylinder Heckklappe Verriegeln |
| KLR | 2 | 0x20 | 0x20 | E | Klemme R |
| ERHK | 2 | 0x40 | 0x40 | E | Schalter Schliesszylinder Heckklappe Entriegeln |
| DSIR | 2 | 0x80 | 0x80 | E | Diagnoserueckmeldung MIP und MSRA |
| TKFT | 3 | 0x01 | 0x01 | E | Tuerkontakt FT (vorgesehen am GM III) |
| TKBT | 3 | 0x02 | 0x02 | E | Tuerkontakt BT (vorgesehen am GM III) |
| TKFH | 3 | 0x04 | 0x04 | E | Tuerkontakt FTH |
| TKBH | 3 | 0x08 | 0x08 | E | Tuerkontakt BTH |
| SW1 | 3 | 0x10 | 0x10 | E | Schalter Wischer INT, ST2 kodiert |
| SW2 | 3 | 0x20 | 0x20 | E | Schalter Wischer ST1, ST2 kodiert |
| SWP | 3 | 0x40 | 0x40 | E | Schalter Wischer Wascherpumpe |
| SIB | 3 | 0x80 | 0x80 | E | Schalter Innenraumbeleuchtung |
| MHK | 4 | 0x01 | 0x01 | E | Motorhaubenkontakt |
| REE2 | 4 | 0x02 | 0x02 | E | Reserve Eingang 2 |
| HFK | 4 | 0x04 | 0x04 | E | Handschuhfachkontakt |
| INRS | 4 | 0x08 | 0x08 | E | Innenraumschutz (Heckscheibe oder Innenraum) |
| SUEFH | 4 | 0x10 | 0x10 | E | Scheibenueberwachung Fahrer Hinten |
| SUEBH | 4 | 0x20 | 0x20 | E | Scheibenueberwachung Beifahrer Hinten |
| NGEG | 4 | 0x40 | 0x40 | E | Schnittstellle zum Neigungsgeber |
| REE1 | 4 | 0x80 | 0x80 | E | Reserve Eingang 1 |
| FIS2 | 4 | 0x10 | 0x10 | E | Funkinnenraumschutz Hinten |
| HSK | 4 | 0x20 | 0x20 | E | Heckscheibenkontakt |
| DMERHK | 5 | 0x01 | 0x01 | IE | interne Diagnoserueckfuehrung Motor ERHK |
| DMVR | 5 | 0x02 | 0x02 | IE | interne Diagnoserueckfuehrung Motor VR |
| DMER | 5 | 0x04 | 0x04 | IE | interne Diagnoserueckfuehrung Motor ER |
| DMZS | 5 | 0x08 | 0x08 | IE | interne Diagnoserueckfuehrung Motor ZS |
| DMFFHZ | 5 | 0x10 | 0x10 | IE | interne Diagnoserueckfuehrung Motor FFHZ |
| DMFFHA | 5 | 0x20 | 0x20 | IE | interne Diagnoserueckfuehrung Motor FFHA |
| DMFBHZ | 5 | 0x40 | 0x40 | IE | interne Diagnoserueckfuehrung Motor FBHZ |
| DMFBHA | 5 | 0x80 | 0x80 | IE | interne Diagnoserueckfuehrung Motor FBHA |
| KL30GM | 6 | 0x01 | 0x01 | E | Klemme 30 > 7V, keine Untersp. an GM III |
| CS | 6 | 0x04 | 0x04 | E | Crash-Sensor |
| DADV | 7 | 0x02 | 0x02 | IE | interne Diagnoserueckfuehrung ADV AUF und ZU |
| DVA | 7 | 0x04 | 0x04 | IE | interne Diagnoserueckfuehrung VA |
| DIB | 7 | 0x08 | 0x08 | IE | interne Diagnoserueckfuehrung IB |
| DSERVO | 7 | 0x10 | 0x10 | IE | interne Diagnoserueckfuehrung SERVO |
| DWP | 7 | 0x20 | 0x20 | IE | interne Diagnoserueckfuehrung WP |
| DDWAH | 7 | 0x40 | 0x40 | IE | interne Diagnoserueckfuehrung DWAH |
| WI1 | 8 | 0x01 | 0x01 | A | Relaisspule Wischer Stufe 1 |
| WI2 | 8 | 0x02 | 0x02 | A | Relaisspule Wischer Stufe 2 |
| SRA | 8 | 0x04 | 0x04 | A | Relais Scheinwerferreinigung |
| IP | 8 | 0x08 | 0x08 | A | Relais Scheibenintensivreinigung |
| DWAL | 8 | 0x10 | 0x10 | A | DWA Leuchtdiode |
| NGAG | 8 | 0x20 | 0x20 | A | Neigungsgeberausgang |
| ANLE | 8 | 0x40 | 0x40 | A | Anlasser Enable von Anlass-Sperr-Relais |
| RERHK | 8 | 0x80 | 0x80 | A | Relais Entriegelung Heckklappe E39/2 |
| RERHS | 8 | 0x40 | 0x40 | A | Relais Entriegelung Heckscheibe E39/2 |
| MHKER | 9 | 0x01 | 0x01 | A | Motor Heckklappe Entriegeln oder SCA |
| MVR | 9 | 0x02 | 0x02 | A | internes Relais ZV Verriegeln |
| MER | 9 | 0x04 | 0x04 | A | internes Relais ZV Entriegeln |
| MZS | 9 | 0x08 | 0x08 | A | internes Relais ZV Sichern |
| MFFHZ | 9 | 0x10 | 0x10 | A | internes Relais Fenster Fahrer Hinten Zu |
| MFFHA | 9 | 0x20 | 0x20 | A | internes Relais Fenster Fahrer Hinten Auf |
| MFBHZ | 9 | 0x40 | 0x40 | A | internes Relais Fenster Beifahrer Hinten Zu |
| MFBHA | 9 | 0x80 | 0x80 | A | internes Relais Fenster Beifahrer Hinten Auf |
| RXD | 10 | 0x01 | 0x01 | EN | K-Bus RxD |
| TXD | 10 | 0x02 | 0x02 | AN | K-Bus TxD |
| DWAH | 10 | 0x04 | 0x04 | A | DWA Horn |
| WP | 10 | 0x08 | 0x08 | A | Wascherpumpe |
| MADVZ | 10 | 0x10 | 0x10 | A | Anpressdruckverstellung Zu |
| MADVA | 10 | 0x20 | 0x20 | A | Anpressdruckverstellung Auf |
| VA | 11 | 0x01 | 0x01 | A | Verbraucherabschaltung |
| WFSI | 11 | 0x02 | 0x02 | A | Wegfahrsicherung |
| U2OFF | 11 | 0x04 | 0x04 | IA | VCC2 6,5V Off |
| IC6MM | 11 | 0x10 | 0x10 | IA | IC 6 Monitormode |
| SIRENE | 11 | 0x20 | 0x20 | A | DWA-Notstromsirene |
| K_KLR | 22 | 0x01 | 0x01 | KS | Klemme R (ueber K-Bus) |
| K_KL15 | 22 | 0x02 | 0x02 | KS | Klemme 15 (ueber K-Bus) |
| K_KL50 | 22 | 0x04 | 0x04 | KS | Klemme 50 (ueber K-Bus) |
| K_KL58 | 25 | 0x02 | 0x02 | KS | Klemme 58 (ueber K-Bus) |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |

### BITS_FT

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| ERFT | 1 | 0x01 | 0x01 | E | Schalterschliesszylinder FT entriegeln |
| TGK | 1 | 0x02 | 0x02 | E | Tuergriffkontakt FT |
| STZV | 1 | 0x04 | 0x04 | E | Stellung des ZV-Aggregates FT (High-Pegel) |
| VRFT | 1 | 0x08 | 0x08 | E | Schalterschliesszylinder FT verriegeln |
| SUEW | 1 | 0x10 | 0x10 | E | Scheibenueberwachung Fahrertuer |
| SFFZ | 1 | 0x20 | 0x20 | E | Schalter FH Fahrertuer ZU |
| SFFA | 1 | 0x40 | 0x40 | E | Schalter FH Fahrertuer AUF |
| TKFT | 1 | 0x80 | 0x80 | E | Tuerkontakt FT |
| SME1 | 2 | 0x01 | 0x01 | E | Schalter Memory 1 |
| SME2 | 2 | 0x02 | 0x02 | E | Schalter Memory 2 |
| SME3 | 2 | 0x04 | 0x04 | E | Schalter Memory 3 |
| SSFA | 2 | 0x08 | 0x08 | E | Schalter Spiegel ausgerastet Fahrer |
| STZVL | 2 | 0x80 | 0x80 | E | Stellung des ZV-Aggregates FT (Low-Pegel) |
| DSPEK | 3 | 0x02 | 0x02 | IE | Diagnosesignal fuer Spiegel-Einklappen |
| DTSH | 3 | 0x04 | 0x04 | IE | Diagnosesignal fuer Tuerschlossheizung |
| SBFTA | 4 | 0x01 | 0x01 | IE | Schalter FH Fahrer auf |
| SBFTZ | 4 | 0x02 | 0x02 | IE | Schalter FH Fahrer zu |
| SBFTT | 4 | 0x04 | 0x04 | IE | Schalter FH Fahrer Tipp |
| SBFHA | 4 | 0x08 | 0x08 | IE | Schalter FH Fahrer Hinten auf |
| SBFHZ | 4 | 0x10 | 0x10 | IE | Schalter FH Fahrer Hinten zu |
| SBFHT | 4 | 0x20 | 0x20 | IE | Schalter FH Fahrer Hinten Tipp |
| SKISI | 4 | 0x40 | 0x40 | IE | Schalter Kindersicherung |
| SBBTA | 5 | 0x01 | 0x01 | IE | Schalter Beifahrer auf |
| SBBTZ | 5 | 0x02 | 0x02 | IE | Schalter Beifahrer zu |
| SBBTT | 5 | 0x04 | 0x04 | IE | Schalter Beifahrer Tipp |
| SBBHA | 5 | 0x08 | 0x08 | IE | Schalter Beifahrer Hinten auf |
| SBBHZ | 5 | 0x10 | 0x10 | IE | Schalter Beifahrer Hinten zu |
| SBBHT | 5 | 0x20 | 0x20 | IE | Schalter Beifahrer Hinten Tipp |
| SBSO | 6 | 0x01 | 0x01 | IE | Schalterblock Spiegel oben |
| SBSU | 6 | 0x02 | 0x02 | IE | Schalterblock Spiegel unten |
| SBSR | 6 | 0x04 | 0x04 | IE | Schalterblock Spiegel rechts |
| SBSL | 6 | 0x08 | 0x08 | IE | Schalterblock Spiegel links |
| SBSFB | 6 | 0x10 | 0x10 | IE | Schalterblock Spiegel Beifahrer |
| SBSE | 6 | 0x20 | 0x20 | IE | Schalterblock Spiegel Einklappen |
| MSFA | 7 | 0x01 | 0x01 | A | Motor Spiegel Ausklappen |
| MFSE | 7 | 0x02 | 0x02 | A | Motor Spiegel Einklappen |
| RFHFZ | 7 | 0x04 | 0x04 | A | Relais Fensterheber Fahrertuer zu |
| U514MD | 7 | 0x08 | 0x08 | IA | Mode U514 |
| U514RD | 7 | 0x10 | 0x10 | IA | Read U514 |
| U514CS | 7 | 0x20 | 0x20 | IA | Chip Select U514 |
| RFHFA | 7 | 0x40 | 0x40 | A | Relais Fensterheber Fahrertuer auf |
| U2OFF | 7 | 0x80 | 0x80 | A | Versorgungsspannung U2 |
| BREMS | 8 | 0x01 | 0x01 | A | Motoren ZV und Spiegel bremsen |
| MVR | 8 | 0x02 | 0x02 | A | Motor ZV verriegeln |
| MER | 8 | 0x04 | 0x04 | A | Motor ZV entriegeln |
| SP_AB | 8 | 0x08 | 0x08 | A | Spiegel abwaerts |
| SP_AUF | 8 | 0x10 | 0x10 | A | Spiegel aufwaerts |
| SP_RE | 8 | 0x20 | 0x20 | A | Spiegel rechts |
| SP_LI | 8 | 0x40 | 0x40 | A | Spiegel links |
| SP_HZ | 8 | 0x80 | 0x80 | A | Spiegel heizen |
| TSH | 9 | 0x08 | 0x08 | A | Tuerschlossheizung |
| MELED | 9 | 0x10 | 0x10 | A | LED im Memoryschalter |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |

### BITS_BT

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| ERBT | 1 | 0x01 | 0x01 | E | Schalterschliesszylinder BT entriegeln |
| TGK | 1 | 0x02 | 0x02 | E | Tuergriffkontakt BT |
| STZV | 1 | 0x04 | 0x04 | E | Stellung des ZV-Aggregates BT (High-Pegel) |
| VRBT | 1 | 0x08 | 0x08 | E | Schalterschliesszylinder BT verriegeln |
| SUEW | 1 | 0x10 | 0x10 | E | Scheibenueberwachung Beifahrertuer |
| SFBZ | 1 | 0x20 | 0x20 | E | Schalter FH Beifahrertuer ZU |
| SFBA | 1 | 0x40 | 0x40 | E | Schalter FH Beifahrertuer AUF |
| TKBT | 1 | 0x80 | 0x80 | E | Tuerkontakt BT |
| SME1 | 2 | 0x01 | 0x01 | E | Schalter Memory 1 |
| SME2 | 2 | 0x02 | 0x02 | E | Schalter Memory 2 |
| SME3 | 2 | 0x04 | 0x04 | E | Schalter Memory 3 |
| SSBA | 2 | 0x08 | 0x08 | E | Schalter Spiegel ausgerastet Beifahrer |
| STZVL | 2 | 0x80 | 0x80 | E | Stellung des ZV-Aggregates BT (Low-Pegel) |
| DSPEK | 3 | 0x02 | 0x02 | IE | Diagnosesignal fuer Spiegel-Einklappen |
| SBFTA | 4 | 0x01 | 0x01 | IE | Schalter FH Fahrer auf |
| SBFTZ | 4 | 0x02 | 0x02 | IE | Schalter FH Fahrer zu |
| SBFTT | 4 | 0x04 | 0x04 | IE | Schalter FH Fahrer Tipp |
| SBFHA | 4 | 0x08 | 0x08 | IE | Schalter FH Fahrer Hinten auf |
| SBFHZ | 4 | 0x10 | 0x10 | IE | Schalter FH Fahrer Hinten zu |
| SBFHT | 4 | 0x20 | 0x20 | IE | Schalter FH Fahrer Hinten Tipp |
| SKISI | 4 | 0x40 | 0x40 | IE | Schalter Kindersicherung |
| SBBTA | 5 | 0x01 | 0x01 | IE | Schalter Beifahrer auf |
| SBBTZ | 5 | 0x02 | 0x02 | IE | Schalter Beifahrer zu |
| SBBTT | 5 | 0x04 | 0x04 | IE | Schalter Beifahrer Tipp |
| SBBHA | 5 | 0x08 | 0x08 | IE | Schalter Beifahrer Hinten auf |
| SBBHZ | 5 | 0x10 | 0x10 | IE | Schalter Beifahrer Hinten zu |
| SBBHT | 5 | 0x20 | 0x20 | IE | Schalter Beifahrer Hinten Tipp |
| SBSO | 6 | 0x01 | 0x01 | IE | Schalterblock Spiegel oben |
| SBSU | 6 | 0x02 | 0x02 | IE | Schalterblock Spiegel unten |
| SBSR | 6 | 0x04 | 0x04 | IE | Schalterblock Spiegel rechts |
| SBSL | 6 | 0x08 | 0x08 | IE | Schalterblock Spiegel links |
| SBSFB | 6 | 0x10 | 0x10 | IE | Schalterblock Spiegel Beifahrer |
| SBSE | 6 | 0x20 | 0x20 | IE | Schalterblock Spiegel Einklappen |
| MSFA | 7 | 0x01 | 0x01 | A | Motor Spiegel Ausklappen |
| MFSE | 7 | 0x02 | 0x02 | A | Motor Spiegel Einklappen |
| RFHBZ | 7 | 0x04 | 0x04 | A | Relais Fensterheber Beifahrertuer zu |
| U514MD | 7 | 0x08 | 0x08 | IA | Mode U514 |
| U514RD | 7 | 0x10 | 0x10 | IA | Read U514 |
| U514CS | 7 | 0x20 | 0x20 | IA | Chip Select U514 |
| RFHBA | 7 | 0x40 | 0x40 | A | Relais Fensterheber Beifahrertuer auf |
| U2OFF | 7 | 0x80 | 0x80 | A | Versorgungsspannung U2 |
| BREMS | 8 | 0x01 | 0x01 | A | Motoren ZV und Spiegel bremsen |
| MVR | 8 | 0x02 | 0x02 | A | Motor ZV verriegeln |
| MER | 8 | 0x04 | 0x04 | A | Motor ZV entriegeln |
| SP_AB | 8 | 0x08 | 0x08 | A | Spiegel abwaerts |
| SP_AUF | 8 | 0x10 | 0x10 | A | Spiegel aufwaerts |
| SP_RE | 8 | 0x20 | 0x20 | A | Spiegel rechts |
| SP_LI | 8 | 0x40 | 0x40 | A | Spiegel links |
| SP_HZ | 8 | 0x80 | 0x80 | A | Spiegel heizen |
| MELED | 9 | 0x10 | 0x10 | A | LED im Memoryschalter |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |

### BITS_SHD

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| UBLOW | 1 | 0x01 | 0x01 | IE | Unterspannung am PM SHD |
| DMSHDZ | 1 | 0x04 | 0x04 | IE | interne Diagnoserueckfuehrung Motor SHD ZU |
| DMSHDA | 1 | 0x08 | 0x08 | IE | interne Diagnoserueckfuehrung Motor SHD AUF |
| SSHDH | 1 | 0x20 | 0x20 | E | Schalter SHD HEBEN |
| SSHDZ | 1 | 0x40 | 0x40 | E | Schalter SHD ZU |
| SSHDA | 1 | 0x80 | 0x80 | E | Schalter SHD AUF |
| INKRA | 2 | 0x01 | 0x01 | IE | Inkrementalgeber A |
| INKRB | 2 | 0x02 | 0x02 | IE | Inkrementalgeber B |
| COE39 | 2 | 0x04 | 0x04 | PS | Kodierung E39 (ueber P-Bus) |
| NRM | 2 | 0x80 | 0x80 | IFN | SHD Normiert |
| ENIC2 | 3 | 0x04 | 0x04 | IA | Enable Eingangs-IC |
| MSHDA | 3 | 0x20 | 0x20 | IA | internes Relais SHD AUF |
| MSHDZ | 3 | 0x40 | 0x40 | IA | internes Relais SHD ZU |
| INKRV | 3 | 0x80 | 0x80 | IA | Inkrementalgeber Versorgung |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |

### BITS_SHD_NEU

| NAME | BYTE | MASK | VALUE | TEXT |
| --- | --- | --- | --- | --- |
| KEY_HEB | 1 | 0x01 | 0x01 | Taste Heben |
| KEY_AUF | 1 | 0x02 | 0x02 | Taste Oeffnen |
| KEY_ZU | 1 | 0x04 | 0x04 | Taste Schliessen |
| SHDI | 2 | 0x04 | 0x04 | GM-Signale 2: SHD inaktiv |
| XY | XY | 0xXY | 0xXY | nicht definiertes Signal |

### BITS_SB

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| SBFTA | 1 | 0x01 | 0x01 | IE | PM Schalterblock FT AUF |
| SBFTZ | 1 | 0x02 | 0x02 | IE | PM Schalterblock FT ZU |
| SBFTT | 1 | 0x04 | 0x04 | IE | PM Schalterblock FT TIPP |
| SBFHA | 1 | 0x08 | 0x08 | IE | PM Schalterblock FH AUF |
| SBFHZ | 1 | 0x10 | 0x10 | IE | PM Schalterblock FH ZU |
| SBFHT | 1 | 0x20 | 0x20 | IE | PM Schalterblock FH TIPP |
| SBKS | 1 | 0x40 | 0x40 | IE | PM Schalterblock Kindersicherung EIN |
| SBBTA | 2 | 0x01 | 0x01 | IE | PM Schalterblock BT AUF |
| SBBTZ | 2 | 0x02 | 0x02 | IE | PM Schalterblock BT ZU |
| SBBTT | 2 | 0x04 | 0x04 | IE | PM Schalterblock BT TIPP |
| SBBHA | 2 | 0x08 | 0x08 | IE | PM Schalterblock BH AUF |
| SBBHZ | 2 | 0x10 | 0x10 | IE | PM Schalterblock BH ZU |
| SBBHT | 2 | 0x20 | 0x20 | IE | PM Schalterblock BH TIPP |
| SBSO | 3 | 0x01 | 0x01 | IE | PM Schalterblock nach Oben |
| SBSU | 3 | 0x02 | 0x02 | IE | PM Schalterblock nach Unten |
| SBSR | 3 | 0x04 | 0x04 | IE | PM Schalterblock nach Rechts |
| SBSL | 3 | 0x08 | 0x08 | IE | PM Schalterblock nach Links |
| SBSFB | 3 | 0x10 | 0x10 | IE | PM Schalterblock Spiegel Fahrer/Beifahrer |
| SBSE | 3 | 0x20 | 0x20 | IE | PM Schalterblock Spiegel Einklappen |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |

### BITS_SM_LSM

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| MSLFAVO | 1 | 0x01 | 0x01 | E | Sitzschlitten vor |
| MSLFAZU | 1 | 0x02 | 0x02 | E | Sitzschlitten zurueck |
| MSHFAAF | 1 | 0x04 | 0x04 | E | Sitzhoehe auf |
| MSHFAAB | 1 | 0x08 | 0x08 | E | Sitzhoehe ab |
| MSNFAAF | 1 | 0x10 | 0x10 | E | Sitzneigung auf |
| MSNFAAB | 1 | 0x20 | 0x20 | E | Sitzneigung ab |
| MLNFAVO | 1 | 0x40 | 0x40 | E | Sitzlehne vor |
| MLNFAZU | 1 | 0x80 | 0x80 | E | Sitzlehne zurueck |
| MKFAAF | 2 | 0x01 | 0x01 | E | Kopfstuetze auf |
| MKFAAB | 2 | 0x02 | 0x02 | E | Kopfstuetze ab |
| MSOFAV | 2 | 0x04 | 0x04 | E | Sitztiefe vor |
| MSOFAZ | 2 | 0x08 | 0x08 | E | Sitztiefe zurueck |
| LKVFA | 2 | 0x10 | 0x10 | E | Lehnenkopf vor |
| LKZFA | 2 | 0x20 | 0x20 | E | Lehnenkopf zurueck |
| MLSNAF | 2 | 0x40 | 0x40 | E | Lenksaeule auf |
| MLSNAB | 2 | 0x80 | 0x80 | E | Lenksaeule ab |
| MLSLVO | 3 | 0x01 | 0x01 | E | Lenksaeule vor |
| MLSLZU | 3 | 0x02 | 0x02 | E | Lenksaeule zurueck |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |

### BITS_SMBF

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| MSLBFVO | 1 | 0x01 | 0x01 | E | Sitzschlitten vor |
| MSLBFZU | 1 | 0x02 | 0x02 | E | Sitzschlitten zurueck |
| MSHBFAF | 1 | 0x04 | 0x04 | E | Sitzhoehe auf |
| MSHBFAB | 1 | 0x08 | 0x08 | E | Sitzhoehe ab |
| MSNBFAF | 1 | 0x10 | 0x10 | E | Sitzneigung auf |
| MSNBFAB | 1 | 0x20 | 0x20 | E | Sitzneigung ab |
| MLNBFVO | 1 | 0x40 | 0x40 | E | Sitzlehne vor |
| MLNBFZU | 1 | 0x80 | 0x80 | E | Sitzlehne zurueck |
| MKBFAF | 2 | 0x01 | 0x01 | E | Kopfstuetze auf |
| MKBFAB | 2 | 0x02 | 0x02 | E | Kopfstuetze ab |
| MSOBFV | 2 | 0x04 | 0x04 | E | Sitztiefe vor |
| MSOBFZ | 2 | 0x08 | 0x08 | E | Sitztiefe zurueck |
| LKVBF | 2 | 0x10 | 0x10 | E | Lehnenkopf vor |
| LKZBF | 2 | 0x20 | 0x20 | E | Lehnenkopf zurueck |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |
