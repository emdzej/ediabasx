# ZKE3_GM6.prg

## General

|  |  |
| --- | --- |
| File | ZKE3_GM6.prg |
| Type | PRG |
| Jobs | 33 |
| Tables | 8 |
| Origin | BMW TI-430 Gerd Huber |
| Revision | 1.02 |
| Author | Softing AEC Thomas Wischer |
| ECU Comment | Ansteuern nur bei entsichertem Fahrzeug! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ZKE III: GM3 Redesign E53 (incl. SCA) |  |  |
| ORIGIN | string | BMW TI-430 Gerd Huber |  |  |
| REVISION | string | 1.02 |  |  |
| AUTHOR | string | Softing AEC Thomas Wischer |  |  |
| COMMENT | string | Ansteuern nur bei entsichertem Fahrzeug! |  |  |
| PACKAGE | string | 1.03 |  |  |
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

_No arguments._

### COD_LESEN_ALLGEMEIN

Auslesen der allgemeinen Codierdaten des GM III (Block 0)

_No arguments._

### COD_LESEN_SERVOTRONIK

Auslesen der Codierdaten des GM III (Block 1 und 2)

_No arguments._

### IS_LESEN

Infospeicher lesen Info-Speicher ist im Aufbau identisch dem Fehlerspeicher Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers der ZKE III Als Argumente werden die Anzahl, das Segment und die Adresse der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | 1 - 32 |
| SEGMENT | int | 0x00 - 0xFF |
| ADRESSE | long | 0x000000 - 0xFFFFFF |

### SPEICHER_LESEN_STRING

Lesen des internen Speichers der ZKE III Als Argumente werden die Anzahl, das Segment und die Adresse der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | 1 - 32 |
| SEGMENT | int | 0x00 - 0xFF |
| ADRESSE | long | 0x000000 - 0xFFFFFF |

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt) KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | 0x00 - 0xFF |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 26 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### STATUS_DIGITAL_GM3_EA

Status der Digitalsignale des GM III E53 Signalart: Ein-/Ausgaenge

_No arguments._

### STATUS_DIGITAL_GM3_KP

Status der Digitalsignale des GM III E53 Signalart: K-Bus bzw. P-Bus

_No arguments._

### STATUS_DIGITAL_GM3_INT

Status der Digitalsignale des GM III E53 Signalart: interne Signale

_No arguments._

### STATUS_ANALOG_GM3

Status der Analogsignale des GM III E53

_No arguments._

### STEUERN_DIGITAL_GM3

Ansteuern eines digitalen Ein- oder Ausgangs v. GM3

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS NAME PBADR ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STEUERN_ANALOG_GM3

Ansteuern eines analogen Ein- oder Ausgangs v. GM3

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente |
| WERT | long | Wert, mit welchen angesteuert werden soll |

### STEUERN_GENERIC_GM3

Ansteuern eines Statussignals

| Name | Type | Description |
| --- | --- | --- |
| PBADR | unsigned char | P-Bus-Adresse |
| ORT | unsigned char | gewuenschte Komponente |
| WERT | unsigned char | beliebiger Wert |

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

### STATUS_FH_HINTEN

Status der FH-Signale hinten (GM3)

_No arguments._

### STATUS_INRS

1.) Ansteuern: NGAG - 2.) Status lesen: INRS

| Name | Type | Description |
| --- | --- | --- |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STATUS_KEY_MEMORY

Auslesen der Nummer des Funkschluessels, mit dem zuletzt entriegelt wurde

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

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

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
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xB4 | Energiesparmode gesetzt |
| 0x01 | Sicherung Fensterheber hinten |
| 0x02 | Sicherung Innenraumbeleuchtung |
| 0x04 | Leitung Klemme R am GM III |
| 0x08 | Codierung Block 0 nicht erfolgt |
| 0x09 | Codierung Block 1 oder Block 2 nicht erfolgt |
| 0x0A | Codierung Block 0 nicht korrekt |
| 0x0B | Codierung Block 1 oder Block 2 nicht korrekt |
| 0x30 | Wischerschalter, Potentiometer |
| 0x32 | Wascherpumpe Unterbrechung |
| 0x31 | Wischermotor blockiert, Rueckstellkontakt, Wischerrelais |
| 0x33 | Kurzschluss Wascherpumpe |
| 0x38 | Leitung SRA Unterbrechung oder Relais SRA  |
| 0x39 | Relaiskleber nach U-Batt im DRM 2 |
| 0x48 | Leitung WI1 Kurzschluss gegen U-Batt oder Wischerrelais 1 |
| 0x49 | Leitung WI1 Unterbrechung oder Wischerrelais 1 |
| 0x4A | Leitung WI2 Kurzschluss gegen U-Batt oder Wischerrelais 2 |
| 0x4B | Leitung WI2 Unterbrechung oder Wischerrelais 2 |
| 0x40 | Leitungsunterbrechung Innenraumbeleuchtung |
| 0x41 | Kurzschluss Innenraumbeleuchtung |
| 0x42 | Kurzschluss VA |
| 0x46 | Unterbrechung OEH oder Zuleitung |
| 0x47 | Kurzschluss OEH oder Zuleitung |
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
| 0x82 | Leitung ABS-Signal oder IKE fehlt |
| 0x83 | Leitung ABS-Signal oder IKE unplausibel |
| 0x92 | Neigungsgeber: Sicherung oder Leitung |
| 0x93 | DWA-LED: Kurzschluss gegen U-Batt oder Leitung DWAL |
| 0x94 | DWA-LED: Unterbrechung oder Leitung DWAL, KL30 |
| 0x95 | Innenraumschutz: Sicherung oder Leitung |
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
| 0x72 | Servotronik: Leitung ABS-Signal oder IKE fehlt |
| 0x73 | Servotronik: Leitung ABS-Signal oder IKE unplausibel |
| 0x80 | DWA-Alarm : Klemme R |
| 0x81 | DWA-Alarm : Klemme 15 |
| 0x82 | DWA-Alarm : Panik-Mode |
| 0x83 | DWA-Alarm : Tuerkontakt FT |
| 0x84 | DWA-Alarm : Tuerkontakt BT |
| 0x85 | DWA-Alarm : Tuerkontakt FTH |
| 0x86 | DWA-Alarm : Tuerkontakt BTH |
| 0x87 | DWA-Alarm : Heckklappenkontakt |
| 0x89 | DWA-Alarm : Motorhaubenkontakt |
| 0x8A | DWA-Alarm : Neigungsgeber |
| 0x8B | DWA-Alarm : Innenraumschutz |
| 0x93 | Power Up vom GM III |
| 0x94 | Power Up vom PM FT |
| 0x95 | Power Up vom PM BT |
| 0xA0 | Wiederholsperre ZV angesprochen |
| 0xA1 | Crash-Sensor hat angesprochen |
| 0xA4 | Spiegel- u. ZV-Treiber in PM FT hat Uerbertemp.absch. angespr. |
| 0xA5 | Spiegel- u. ZV-Treiber in PM BT hat Uerbertemp.absch. angespr. |
| 0x60 | Fensterheber-Motor FT |
| 0x61 | Fensterheber-Motor BT |
| 0x62 | Fensterheber-Motor FTH |
| 0x63 | Fensterheber-Motor BTH |
| 0xXY | unbekannter Info-Ort |

### BITS

| NAME | PBADR | BYTE | MASK | VALUE | INV | ART | TEXT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SIB | 0x00 | 1 | 0x80 | 0x80 | 0 | E | Schalter Innenraumbeleuchtung |
| INRS | 0x00 | 2 | 0x04 | 0x04 | 0 | E | Innenraumschutz (Heckscheibe oder Innenraum) |
| NGEG | 0x00 | 2 | 0x08 | 0x08 | 0 | E | Schnittstelle zum Neigungsgeber |
| THKU | 0x00 | 2 | 0x20 | 0x20 | 0 | E | Taste Heckklappe unten Entriegeln |
| KLR | 0x00 | 2 | 0x40 | 0x40 | 0 | E | Klemme R (Radio) |
| TOEHKI | 0x00 | 3 | 0x01 | 0x01 | 0 | E | Taster Oeffnen Heckklappe Innen |
| REE2 | 0x00 | 3 | 0x04 | 0x04 | 0 | E | Reserve Eingang 2 |
| REE1 | 0x00 | 3 | 0x08 | 0x08 | 0 | E | Reserve Eingang 1 |
| TZV | 0x00 | 3 | 0x10 | 0x10 | 0 | E | Taste zum Umschalten der ZV |
| TOEHK | 0x00 | 3 | 0x20 | 0x20 | 0 | E | Taster Oeffnen Heckklappe |
| SW1 | 0x00 | 3 | 0x40 | 0x40 | 0 | E | Schalter Wischer INT, ,ST2 kodiert |
| SW2 | 0x00 | 3 | 0x80 | 0x80 | 0 | E | Schalter Wischer ,ST1,ST2 kodiert |
| SWP | 0x00 | 4 | 0x01 | 0x01 | 0 | E | Schalter Wischer Wascherpumpe |
| SFFHA | 0x00 | 4 | 0x02 | 0x02 | 0 | E | FH-Schalter FH hinten auf |
| SFFHZ | 0x00 | 4 | 0x04 | 0x04 | 0 | E | FH-Schalter FH hinten zu |
| SPZ | 0x00 | 4 | 0x08 | 0x08 | 0 | E | Schalter Wischer Intensivpumpe |
| SFBHA | 0x00 | 4 | 0x10 | 0x10 | 0 | E | FH-Schalter BH hinten auf |
| SFBHZ | 0x00 | 4 | 0x20 | 0x20 | 0 | E | FH-Schalter BH hinten zu |
| RSK | 0x00 | 4 | 0x80 | 0x80 | 1 | E | Rueckstellkontakt Wischer |
| DMERHK | 0x00 | 5 | 0x01 | 0x01 | 0 | IE | interne Diagnoserueckfuehrung Motor ERHK |
| DMVR | 0x00 | 5 | 0x02 | 0x02 | 0 | IE | interne Diagnoserueckfuehrung Motor VR |
| DMER | 0x00 | 5 | 0x04 | 0x04 | 0 | IE | interne Diagnoserueckfuehrung Motor ER |
| DMZS | 0x00 | 5 | 0x08 | 0x08 | 0 | IE | interne Diagnoserueckfuehrung Motor ZS |
| DMFFHZ | 0x00 | 5 | 0x10 | 0x10 | 0 | IE | interne Diagnoserueckfuehrung Motor FFHZ |
| DMFFHA | 0x00 | 5 | 0x20 | 0x20 | 0 | IE | interne Diagnoserueckfuehrung Motor FFHA |
| DMFBHZ | 0x00 | 5 | 0x40 | 0x40 | 0 | IE | interne Diagnoserueckfuehrung Motor FBHZ |
| DMFBHA | 0x00 | 5 | 0x80 | 0x80 | 0 | IE | interne Diagnoserueckfuehrung Motor FBHA |
| DWI1 | 0x00 | 6 | 0x01 | 0x01 | 0 | IE | intern belegt |
| DWI2 | 0x00 | 6 | 0x02 | 0x02 | 0 | IE | intern belegt |
| S_SRA | 0x00 | 6 | 0x04 | 0x04 | 0 | IE | intern belegt |
| DDWAL | 0x00 | 6 | 0x10 | 0x10 | 0 | IE | intern belegt |
| S_NGAG | 0x00 | 6 | 0x20 | 0x20 | 0 | IE | intern belegt |
| S_XB21 | 0x00 | 6 | 0x40 | 0x40 | 0 | IE | intern belegt |
| S_XB22 | 0x00 | 6 | 0x80 | 0x80 | 0 | IE | intern belegt |
| S_MZS_MERHK_ST | 0x00 | 7 | 0x01 | 0x01 | 0 | IE | interne Diagnoserückführung Treiber Status |
| S_MER_MVR_ST | 0x00 | 7 | 0x02 | 0x02 | 0 | IE | interne Diagnoserückführung Treiber Status |
| S_MZS_ST | 0x00 | 7 | 0x08 | 0x08 | 0 | IE | interne Diagnoserückführung Treiber Status |
| MFBHA | 0x00 | 8 | 0x01 | 0x01 | 0 | A | internes Relais Fenster Beifahrer Hinten AUF |
| MFBHZ | 0x00 | 8 | 0x02 | 0x02 | 0 | A | internes Relais Fenster Beifahrer Hinten ZU |
| MFFHA | 0x00 | 8 | 0x04 | 0x04 | 0 | A | internes Relais Fenster Fahrer Hinten AUF |
| MFFHZ | 0x00 | 8 | 0x08 | 0x08 | 0 | A | internes Relais Fenster Fahrer Hinten ZU |
| SIRENE | 0x00 | 8 | 0x10 | 0x10 | 0 | A | DWA-Notstromsirene |
| OUT_PRELAY | 0x00 | 8 | 0x40 | 0x40 | 0 | A | Verpolschutz Power Relay |
| WP | 0x00 | 8 | 0x80 | 0x80 | 0 | A | Wascherpumpe |
| OUT_MVR_GH | 0x00 | 9 | 0x01 | 0x01 | 0 | A | ZV Motor Verriegeln High Side |
| OUT_MVR_GL | 0x00 | 9 | 0x02 | 0x02 | 0 | A | ZV Motor Verriegeln Low Side |
| OUT_MER_GH | 0x00 | 9 | 0x04 | 0x04 | 0 | A | ZV Motor Entriegeln High Side |
| OUT_MER_GL | 0x00 | 9 | 0x08 | 0x08 | 0 | A | ZV Motor Entriegeln Low Side |
| OUT_MZS_GH | 0x00 | 9 | 0x10 | 0x10 | 0 | A | ZV Motor Zentralsichern High Side |
| OUT_MZS_GL | 0x00 | 9 | 0x20 | 0x20 | 0 | A | ZV Motor Zentralsichern Low Side |
| OUT_MERHK_GH | 0x00 | 9 | 0x40 | 0x40 | 0 | A | HK Motor Entriegeln High Side; 2. VA mit SCA |
| VA_2 | 0x00 | 9 | 0x40 | 0x40 | 0 | A | 2. Verbraucherabschaltung (mit SCA) |
| OUT_MERHK_GL | 0x00 | 9 | 0x80 | 0x80 | 0 | A | HK Motor Entriegeln Low Side |
| OUT_OEH | 0x00 | 10 | 0x01 | 0x01 | 0 | A | Ausgang Optische Einstiegs Hilfe |
| OUT_IB | 0x00 | 10 | 0x02 | 0x02 | 0 | A | Ausgang Innenbeleuchtung |
| VA | 0x00 | 10 | 0x08 | 0x08 | 0 | A | Verbraucherabschaltung |
| OUT_XC7_H1 | 0x00 | 10 | 0x10 | 0x10 | 0 | A | ADV H1 Anpressdruckverstellung High Side |
| OUT_MERHKU | 0x00 | 10 | 0x10 | 0x10 | 0 | A | MERHKU mit SCA |
| OUT_XC7_L1 | 0x00 | 10 | 0x20 | 0x20 | 0 | A | ADV L1 Anpressdruckverstellung Low Side |
| OUT_XC16_H2 | 0x00 | 10 | 0x40 | 0x40 | 0 | A | ADV H2 Anpressdruckverstellung High Side |
| OUT_XC16_L2 | 0x00 | 10 | 0x80 | 0x80 | 0 | A | ADV L2 Anpressdruckverstellung Low Side |
| WI1 | 0x00 | 11 | 0x01 | 0x01 | 0 | A | Motor Wischer Stufe 1 (langsam) |
| WI2 | 0x00 | 11 | 0x02 | 0x02 | 0 | A | Motor Wischer Stufe 2  (schnell) |
| SRA | 0x00 | 11 | 0x04 | 0x04 | 0 | A | Motor Scheinwerferreinigung EIN |
| DWAL | 0x00 | 11 | 0x10 | 0x10 | 0 | A | DWA Leuchtdiode EIN |
| NGAG | 0x00 | 11 | 0x20 | 0x20 | 0 | A | Neigungsgeberausgang EIN |
| OUT_XB21 | 0x00 | 11 | 0x40 | 0x40 | 0 | A | Output B21: Z_RSCA_Z, Z_RERHS, Z_ANLE |
| OUT_XB22 | 0x00 | 11 | 0x80 | 0x80 | 0 | A | Output B22: Z_RSCA_A, Z_RERHK, Z_MERHKU |
| RSCA_A | 0x00 | 11 | 0x80 | 0x80 | 0 | A | Soft Close Automatik Auf |
| RSCA_Z | 0x00 | 11 | 0x40 | 0x40 | 0 | A | Soft Close Automatik ZU |
| MERHKU | 0x00 | 11 | 0x80 | 0x80 | 0 | A | Output B22: MERHKU ohne SCA |
| K_KLR | 0x00 | 12 | 0x01 | 0x01 | 0 | KS | Klemme R (ueber K-Bus) |
| K_KL15 | 0x00 | 12 | 0x02 | 0x02 | 0 | KS | Klemme 15 (ueber K-Bus) |
| K_KL50 | 0x00 | 12 | 0x04 | 0x04 | 0 | KS | Klemme 50 (ueber K-Bus) |
| K_KL58 | 0x00 | 13 | 0x02 | 0x02 | 0 | KS | Klemme 58 (ueber K-Bus) |
| P_VRFT | 0x00 | 19 | 0x01 | 0x01 | 0 | PS | ZV-Schalterpaket FT Verriegeln |
| P_VRBT | 0x00 | 21 | 0x01 | 0x01 | 0 | PS | ZV-Schalterpaket BT Verriegeln |
| K_VRFS | 0x00 | 23 | 0x01 | 0x01 | 0 | KS | Verriegeln von FBZV |
| TKFT | 0x11 | 8 | 0x10 | 0x10 | 0 | E | Tuerkontakt Fahrertuere vorne FT (an GM III) |
| TKBT | 0x11 | 8 | 0x20 | 0x20 | 0 | E | Tuerkontakt Beifahrertuere vorne BT (an GM III) |
| TKFH | 0x11 | 8 | 0x40 | 0x40 | 0 | E | Tuerkontakt Fahrertuere FH hinten |
| TKBH | 0x11 | 8 | 0x80 | 0x80 | 0 | E | Tuerkontakt Beifahrertuere BH hinten |
| HKK | 0x11 | 16 | 0x08 | 0x08 | 0 | E | Heckklappenkontakt |
| MHK | 0x11 | 16 | 0x80 | 0x80 | 0 | E | Motorhaubenkontakt |
| RERHK | 0x11 | 17 | 0x04 | 0x04 | 0 | A | Entriegelung HK unten |
| ZRS | 0x11 | 19 | 0x01 | 0x01 | 0 | E | Zahnradsensor |
| RDC | 0x11 | 19 | 0x02 | 0x02 | 0 | E | Reifen Druck Control |
| VORA | 0x11 | 19 | 0x04 | 0x04 | 0 | E | Vorraste (bei SCA) |
| XY | 0x00 | XY | 0xXY | 0xXY | 0 | XY | nicht definiertes Signal |
