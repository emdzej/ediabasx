# IHKA39_5.prg

## General

|  |  |
| --- | --- |
| File | IHKA39_5.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 7 |
| Origin | BMW TI-433 Drexel |
| Revision | 1.1 |
| Author | BMW TI-433 Drexel, BMW TI-433 Mellersh |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrierte Heiz- Klimaautomatik E39 09/2000 |  |  |
| ORIGIN | string | BMW TI-433 Drexel |  |  |
| REVISION | string | 1.1 |  |  |
| AUTHOR | string | BMW TI-433 Drexel, BMW TI-433 Mellersh |  |  |
| COMMENT | string |  |  |  |
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

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### CODIERUNG_SCHREIBEN

Codierdaten Schreiben Es muessen immer alle vier Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| CODE1 | int | 0-255 bzw. 0x00-0xFF |
| CODE2 | int | 0-255 bzw. 0x00-0xFF |
| CODE3 | int | 0-255 bzw. 0x00-0xFF |
| CODE4 | int | 0-255 bzw. 0x00-0xFF |

### STATUS_ANALOGEINGAENGE

Status lesen

_No arguments._

### STATUS_REGLERGROESSEN

Status lesen

_No arguments._

### STATUS_BEDIENTEIL

Status lesen

_No arguments._

### STATUS_MOTOR_KLAPPENPOSITION

Status lesen

_No arguments._

### STATUS_IO

Status lesen

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers Als Argumente werden die Adresse, die Anzahl der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0000 - 0x0FFF |
| ANZAHL | int | 1 - 32 |

### RAM_SCHREIBEN

Beschreiben des internen Speichers Als Argumente werden die Adresse, die Anzahl der Datenbytes und das Datenfeld uebergeben. Die Daten werden als String uebergeben und durch ein Komma getrennt.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0000 - 0x03FF |
| ANZAHL | int | 1 - 27 |
| DATEN | string | z.B. "1,2,03,0x04,0x05..." |

### EEPROM_SCHREIBEN

Beschreiben des internen EEPROM-Speichers Als Argumente werden die Adresse, die Anzahl der Datenbytes und das Datenfeld uebergeben. Die Daten werden als String uebergeben und durch ein Komma getrennt.

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0x0D80 - 0x0FFF |
| ANZAHL | int | 1 - 27 |
| DATEN | string | z.B. "1,2,03,0x04,0x05..." |

### DIAGNOSE_TESTBIT

Ansteuern des Diagnosetest-Bits Das Bit kann ein- bzw. ausgeschaltet werden.

| Name | Type | Description |
| --- | --- | --- |
| TESTBIT | string | 'EIN','AUS' |

### STEUERN_EICHLAUF

Anstossen des Schrittmotoreichlaufs

_No arguments._

### STEUERN_DISPLAY

Einschalten eines Testmusters in den Displays Es muss der Displaytest immer ausgeschalten werden Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| TEST_MUSTER | int | 0    = Testmuster aus 1..4 = Testmuster 1..4 |

### STEUERN_RELAIS_HECKSCHEIBE

Ansteuern des Heckscheibenrelais Das Relais kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| RELAIS_HECKSCHEIBE | string | 'EIN','AUS' |

### STEUERN_SPRITZDUESENHEIZUNG

Ansteuern des Spritzduesenheizung Der Ausgang kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| SPRITZDUESENHEIZUNG | string | 'EIN','AUS' |

### STEUERN_RELAIS_ZUSATZLUEFTER

Ansteuern des Zusatzluefterrelais Der Ausgang kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| RELAIS_ZUSATZLUEFTER | string | 'EIN','AUS' |

### STEUERN_ZUSATZWASSERPUMPE

Ansteuern der Zusatzwasserpumpe Der Ausgang kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| ZUSATZWASSERPUMPE | string | 'EIN','AUS' |

### STEUERN_KLIMAKOMPRESSOR

Ansteuern des Klimakompressors Der Ausgang kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| KLIMAKOMPRESSOR | string | 'EIN','AUS' |

### STEUERN_SPERRVENTIL

Ansteuern des Sperrventils Der Ausgang kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| SPERRVENTIL | string | 'EIN','AUS' |

### STEUERN_LWS_UMSCHALTVENTIL

Ansteuern des Umschaltventils Der Ausgang kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| LWS_UMSCHALTVENTIL | string | 'EIN','AUS' |

### STEUERN_LWS_ABSPERRVENTIL

Ansteuern des Absperrventils des Latentwaermespeichers Der Ausgang kann ein- bzw. ausgeschaltet werden. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| LWS_ABSPERRVENTIL | string | 'EIN','AUS' |

### STEUERN_MOTOR_KLAPPENPOSITION

Ansteuern der Schrittmotoren in Prozent 0-100 % Es ist moeglich auch nur einzelne Argumente zu schreiben. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| FRISCHLUFT | int | Frischluftmotor 0 - 100 % oder '' |
| FUSSRAUM | int | Fussraummotor 0 - 100 % oder '' |
| STAUDRUCK | int | Staudruckmotor 0 - 100 % oder '' |
| BELUEFTUNG | int | Belueftungsmotor 0 - 100 % oder '' |
| ENTFROSTUNG | int | Entfrostungsmotor 0 - 100 % oder '' |
| FONDRAUM | int | Fondraummotor 0 - 100 % oder '' |

### STEUERN_WASSERVENTIL

Ansteuern des linken und rechten Wasserventils 0-100 % Es ist moeglich auch nur einzelne Argumente zu schreiben. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| WASSERVENTIL_LINKS | int | Einschaltdauer in Prozentschritten 0-100 % |
| WASSERVENTIL_RECHTS | int | Einschaltdauer in Prozentschritten 0-100 % |

### STEUERN_GEBLAESE

Ansteuern des Geblaeses Das Geblaese kann von 0-100 % angesteuert werden. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| GEBLAESE | int | Geblaesesteuerspannung 0 - 100 % |

### STEUERN_REGLERGROESSE

Ansteuern der linken und rechten Reglergroesse Y 0-100 % Es ist moeglich auch nur einzelne Argumente zu schreiben. Vor dem Ansteuern den Job DIAGNOSE_AUFECHT aufrufen Nach dem Ansteuern den Job DIAGNOSE_ENDE aufrufen

| Name | Type | Description |
| --- | --- | --- |
| REGLERGROESSE_LINKS | int | Reglergroesse Y links 0-100 % |
| REGLERGROESSE_RECHTS | int | Reglergroesse Y rechts 0-100 % |

### KOMPRESSOR_SPERRE

Codieren der Kompressortransportsperre

| Name | Type | Description |
| --- | --- | --- |
| SPERRE | string | 'EIN','AUS','1','0' |

### UNTERSPANNUNG_ABSCHALTZAEHLER_LESEN

Sonder-Job fuer FASTA Er dient zum Auslesen des Unterspannungs- Abschaltzaehlers.

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Belueftungsklappenmotor |
| 0x01 | Staudruckklappenmotor |
| 0x02 | Fussraumklappenmotor |
| 0x03 | Entfrostungsklappenmotor |
| 0x04 | Fondraumklappenmotor |
| 0x05 | Frischluft/Umluftklappenmotor |
| 0x06 | Reserve-Motor |
| 0x07 | Geblaesesteuerspannung |
| 0x08 | Innenraumtemperaturfuehler im Bedienteil |
| 0x09 | Phototransistor im Bedienteil |
| 0x0A | AUC Sensor |
| 0x0B | Waermetauscherfuehler rechts |
| 0x0C | Latentwaermespeicher Temperaturfuehler |
| 0x0D | Beschlagsensor |
| 0x0E | Fondraumpotentiometer |
| 0x0F | Fondgeblaese |
| 0x10 | Klemme 30 |
| 0x11 | Solarsensor rechts |
| 0x12 | Verdampferfuehler |
| 0x13 | Waermetauscherfuehler links |
| 0x14 | Solarsensor links |
| 0x15 | Drucksensor |
| 0x16 | Versorgungsspannung Fondraumpotentiometer |
| 0x17 | AUC Heizung |
| 0x18 | Relais Zusatzluefter |
| 0x19 | Relais Spritzduesenheizung |
| 0x1A | Relais Heckscheibenheizung |
| 0x1B | Magnetkupplung Klimakompressor |
| 0x1C | frei 28 |
| 0x1D | frei 29 |
| 0x1E | Zusatzwasserpumpe |
| 0x1F | Wasserventil links |
| 0x20 | Wasserventil rechts |
| 0x21 | Standheizung Sperrventil, Latentwaermespeicher Umschaltventil |
| 0x22 | frei 34 |
| 0x23 | Geblaesesteuerspannung |
| 0x24 | Stellgroesse Y links |
| 0x25 | Stellgroesse Y rechts |
| 0x26 | Waermetauschersolltemperatur links |
| 0x27 | Waermetauschersolltemperatur rechts |
| 0x27 | Aussentemperatur |
| 0x29 | Fahrzeuggeschwindigkeit |
| 0x2A | Kuehlwassertemperatur |
| 0x2B | Motordrehzahl |
| 0x2C | Klemme 58g |
| 0x2D | LCD Hinterleuchtung |
| 0x2E | Latentwaermespeicher Absperrventil |
| 0x2F | Motor laeuft |
| 0x30 | Standlueftung ein/aus |
| 0x31 | Standheizung ein/aus |
| 0x32 | Zuheizer |
| 0x33 | Innenfuehlergeblaese |
| 0x34 | Energiesparmode aktiviert |
| 0x35 | unbekannter Fehlerort |

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
