# IHKA46_3.prg

## General

|  |  |
| --- | --- |
| File | IHKA46_3.prg |
| Type | PRG |
| Jobs | 39 |
| Tables | 7 |
| Origin | BMW TI-430 Drexel |
| Revision | 1.04 |
| Author | BHTC EE-54 Urbanke, BMW TI-430 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrierte Heiz- Klimaautomatik E46 PU 03/2003 |  |  |
| ORIGIN | string | BMW TI-430 Drexel |  |  |
| REVISION | string | 1.04 |  |  |
| AUTHOR | string | BHTC EE-54 Urbanke, BMW TI-430 Drexel |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.12 |  |  |
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

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers Als Argumente werden die Adresse, die Anzahl der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0000 - 0xFFFF |
| ANZAHL | int | 1 - 32 |

### RAM_SCHREIBEN

Beschreiben des internen Speichers Als Argumente werden die Adresse, die Anzahl der Datenbytes und das Datenfeld uebergeben. Die Daten werden als String uebergeben und durch ein Komma getrennt.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0000 - 0x03DD |
| ANZAHL | int | 1 - 27 |
| DATEN | string | z.B. "1,2,03,0x04,0x05..." |

### EEPROM_SCHREIBEN

Beschreiben des internen EEPROM-Speichers Als Argumente werden die Adresse, die Anzahl der Datenbytes und das Datenfeld uebergeben. Die Daten werden als String uebergeben und durch ein Komma getrennt.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0C00 - 0x0FFF |
| ANZAHL | int | 1 - 27 |
| DATEN | string | z.B. "1,2,03,0x04,0x05..." |

### CODIERUNG_SCHREIBEN

Codierdaten Schreiben fuer IHKA E46 Es muessen immer alle vier Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| CODE1 | int | 0-255 bzw. 0x00-0xFF |
| CODE2 | int | 0-255 bzw. 0x00-0xFF |
| CODE3 | int | 0-255 bzw. 0x00-0xFF |
| CODE4 | int | 0-255 bzw. 0x00-0xFF |

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### STATUS_ANALOGEINGAENGE

Status lesen

_No arguments._

### STATUS_REGLERGROESSEN

Status lesen

_No arguments._

### STATUS_BEDIENTEIL

Status lesen

_No arguments._

### STATUS_IO

Status lesen

_No arguments._

### STATUS_MOTOR_KLAPPENPOSITION

Status lesen

_No arguments._

### DIAGNOSE_TESTBIT

Ansteuern des Diagnosetest-Bits Das Bit kann ein- bzw. ausgeschaltet werden.

| Name | Type | Description |
| --- | --- | --- |
| TESTBIT | string | 'EIN','AUS' |

### STEUERN_EICHLAUF

Anstossen des Schrittmotoreichlaufs Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_DISPLAY

Einschalten eines Testmusters in den Displays Es muss der Displaytest immer ausgeschalten werden Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| TEST_MUSTER | int | 0    = Testmuster aus 1..4 = Testmuster 1..4 |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_RELAIS_HECKSCHEIBE

Ansteuern des Heckscheibenrelais Das Relais kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| RELAIS_HECKSCHEIBE | string | EIN, AUS |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_TASTE_HECKSCHEIBE

Ansteuern der Taste Heckscheibenheizung Voraussetzung ist, dass der Motor laeuft.

_No arguments._

### STEUERN_ZUSATZWASSERPUMPE

Ansteuern der Zusatzwasserpumpe Der Ausgang kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| ZUSATZWASSERPUMPE | string | EIN, AUS |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_ZUHEIZER

Ansteuern des Zuheizers Der Ausgang kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen Identisch mit STEUERN_RELAIS_FRONTSCHEIBE, da gleicher Ausgang

| Name | Type | Description |
| --- | --- | --- |
| ZUHEIZER | string | EIN, AUS |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_MOTOR_KLAPPENPOSITION

Ansteuern der Schrittmotoren in Prozent 0-100 % Es ist moeglich auch nur einzelne Argumente zu schreiben. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| BELUEFTUNG | int | Belueftungsmotor 0 - 100 % oder '' |
| ENTFROSTUNG | int | Entfrostungsmotor 0 - 100 % oder '' |
| FUSSRAUM | int | Fussraummotor 0 - 100 % oder '' |
| FRISCHLUFT_LI | int | Frischluft- / Umluftmotor links 0 - 100 % oder '' |
| FRISCHLUFT_RE | int | Frischluft- / Umluftmotor rechts 0 - 100 % oder '' |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_WASSERVENTIL

Ansteuern des Wasserventils Das Wasserventil kann von 0-100 % angesteuert werden. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| WASSERVENTIL | int | Wasserventiltaktung 0-100 % |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_GEBLAESE

Ansteuern des Geblaeses Das Geblaese kann von 0-100 % angesteuert werden. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| GEBLAESE | int | Geblaesesteuerspannung 0 - 100 % |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_BELEUCHTUNG

Ansteuern der Displaybeleuchtung Die Displaybeleuchtung kann von 0-100 % angesteuert werden. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| BELEUCHTUNG | int | Beleuchtung 0 - 100 % |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_DREHZAHL

Vorgabe der Drehzahl Die Drehzahl kann von 0-8000 1/min vorgegeben werden. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| DREHZAHL | int | DREHZAHL 0-8000 1/min |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_GESCHWINDIGKEIT

Vorgabe der Geschwindigkeit vom K-Bus Die Geschwindigkeit kann von 0-200 km/h vorgegeben werden. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| GESCHWINDIGKEIT | int | GESCHWINDIGKEIT 0-200 km/h |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_AUSSENTEMPERATUR

Vorgabe der Aussentemperatur vom K-Bus Die Aussentemperatur kann von -45 - +40 Grad C vorgegeben werden. Vor dem Ansteuern den Job DIAGNOSE_AUFRECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| AUSSENTEMPERATUR | int | AUSSENTEMPERATUR -45 - +40 Grad C |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### STEUERN_REGLERGROESSE

Ansteuern der Reglergroesse Y 0-100 % Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| REGLERGROESSE | int | Reglergroesse Y 0-100 % |
| DIAGNOSE_AUFRECHT | string | ja, wenn nicht '' |

### KOMPRESSOR_SPERRE

Codieren der Kompressortransportsperre

| Name | Type | Description |
| --- | --- | --- |
| SPERRE | string | 'EIN','AUS','1','0' |

### STATUS_AUC_SENSOR

Status des AUC Sensors lesen

_No arguments._

### STATUS_TIMER_EINLAUFSCHUTZ

Lesen des Status des Kompressor-Einlaufschutzes

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
| 0x59 | Haberl |
| 0x60 | Magna Steyr |
| 0x61 | Marquardt |
| 0x62 | AB-Elektronik |
| 0x63 | Siemens VDO Borg |
| 0x64 | Hirschmann Electronics |
| 0x65 | Hoerbiger Electronics |
| 0x66 | Thyssen Krupp Automotive Mechatronics |
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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Belueftungsklappenmotor |
| 0x01 | Entfrostungsklappenmotor |
| 0x02 | Fussraumklappenmotor |
| 0x03 | Frischluft/Umluftklappenmotor links |
| 0x04 | Frischluft/Umluftklappenmotor rechts |
| 0x05 | Falsches Klimageraet IHKR |
| 0x06 | Drucksensor, AUC Versorgung |
| 0x0B | Verdampferfuehler |
| 0x0D | Waermetauscherfuehler |
| 0x12 | Innenraumtemperaturfuehler |
| 0x17 | Relais Heckscheibenheizung |
| 0x18 | Zuheizer Relais |
| 0x19 | Zusatzwasserpumpe |
| 0x1A | Wasserventil |
| 0x1B | Geblaesesteuerspannung |
| 0x1C | Innenfuehlergeblaese |
| 0x1D | Kommunikation mit dem Zuheizer |
| 0x1E | AUC Sensor |
| 0x1F | Drucksensor |
| 0x20 | AUC Heizung |
| 0x21 | Solarsensor |
| 0xFF | Energiesparmode aktiv |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x04 | Leitungsunterbrechung |
| 0x08 | unplausibler Wert, ungueltiger Arbeitsbereich |
| 0x40 | Fehler momentan vorhanden |
| 0x80 | sporadischer Fehler |
| 0xFF | unbekannte Fehlerart |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x40 | 0x00 | 0x80 |
