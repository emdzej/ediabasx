# IHKA38.prg

## General

|  |  |
| --- | --- |
| File | IHKA38.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 3 |
| Origin | BMW TP-421 Drexel |
| Revision | 1.13 |
| Author | BMW TP-421 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrierte Heiz- Klimaautomatik E38 |  |  |
| ORIGIN | string | BMW TP-421 Drexel |  |  |
| REVISION | string | 1.13 |  |  |
| AUTHOR | string | BMW TP-421 Drexel |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Kommunikationsparameter

_No arguments._

### IDENT

Identifikation fuer IHKA

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_TESTBIT

Ansteuern des Diagnosetest-Bits

| Name | Type | Description |
| --- | --- | --- |
| TESTBIT | string | 'EIN','AUS' |

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SLEEP_MODE

SG in Power-Down-Mode versetzen

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden 0x00-0xFF |
| BYTE2 | int | kann beliebig verwendet werden 0x00-0xFF |
| BYTE3 | int | kann beliebig verwendet werden 0x00-0xFF |

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### CODIERUNG_SCHREIBEN

Codierdaten Schreiben fuer IHKA

| Name | Type | Description |
| --- | --- | --- |
| CODE1 | int | kann beliebig verwendet werden 0x00-0xFF |
| CODE2 | int | kann beliebig verwendet werden 0x00-0xFF |
| CODE3 | int | kann beliebig verwendet werden 0x00-0xFF |
| CODE4 | int | kann beliebig verwendet werden 0x00-0xFF |

### STATUS_ANALOGEINGAENGE

Status lesen

_No arguments._

### STATUS_REGLERGROESSEN

Status lesen

_No arguments._

### STATUS_BEDIENTEIL

Status lesen

_No arguments._

### STATUS_AUSGAENGE

Status lesen

_No arguments._

### STATUS_MOTOR_KLAPPENPOSITION

Status lesen

_No arguments._

### STATUS_IO

Status lesen

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int |  |
| ANZAHL | int |  |

### RAM_SCHREIBEN

Beschreiben des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int |  |
| ANZAHL | int |  |
| DATEN | string |  |

### EEPROM_SCHREIBEN

Beschreiben des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int |  |
| ANZAHL | int |  |
| DATEN | string |  |

### EICHLAUF_STARTEN

Anstossen der internen Eichlaufroutine

_No arguments._

### DISPLAY_TEST

Einschalten eines Testmusters in den Displays Es muss der Displaytest immer ausgeschalten werden

| Name | Type | Description |
| --- | --- | --- |
| TEST_MUSTER | int | 0 = Testmuster aus 1 = Testmuster 1 2 = Testmuster 2 |
| GEBLAESE | int | ''    Geblaesepotiwert nicht aendern '1' = Geblaesepotiwert setzen '0' = Geblaesepotiwert loeschen |
| AUFRECHT | int | ''  Testbit nicht aendern '1' Testbit setzen '0' Testbit loeschen |

### STEUERN_RELAIS_HECKSCHEIBE

Ansteuern des Heckscheibenrelais

| Name | Type | Description |
| --- | --- | --- |
| RELAIS_HECKSCHEIBE | string | 'EIN','AUS' |

### STEUERN_RELAIS_FRONTSCHEIBE

Ansteuern des Frontscheibenrelais

| Name | Type | Description |
| --- | --- | --- |
| RELAIS_FRONTSCHEIBE | string | 'EIN','AUS' |

### STEUERN_RELAIS_ZUSATZLUEFTER

Ansteuern des Zusatzluefterrelais

| Name | Type | Description |
| --- | --- | --- |
| RELAIS_ZUSATZLUEFTER | string | 'EIN','AUS' |

### STEUERN_HEIZSPANNUNG_AUC

Ansteuern der AUC-Sensor-Heizspannung

| Name | Type | Description |
| --- | --- | --- |
| HEIZSPANNUNG_AUC | string | 'EIN','AUS' |

### STEUERN_ZUSATZWASSERPUMPE

Ansteuern der Zusatzwasserpumpe

| Name | Type | Description |
| --- | --- | --- |
| ZUSATZWASSERPUMPE | string | 'EIN','AUS' |

### STEUERN_DME_AC

Ansteuern des DME-AC-Signals

| Name | Type | Description |
| --- | --- | --- |
| DME_AC | string | 'EIN','AUS' |

### STEUERN_DME_KO

Ansteuern des DME-KO-Signals

| Name | Type | Description |
| --- | --- | --- |
| DME_KO | string | 'EIN','AUS' |

### STEUERN_KLIMAKOMPRESSOR

Ansteuern des Klimakompressors

| Name | Type | Description |
| --- | --- | --- |
| KLIMAKOMPRESSOR | string | 'EIN','AUS' |

### STEUERN_SPERRVENTIL

Ansteuern des Sperrventils

| Name | Type | Description |
| --- | --- | --- |
| SPERRVENTIL | string | 'EIN','AUS' |

### STEUERN_STANDHEIZUNG

Ansteuern der Standheizung

| Name | Type | Description |
| --- | --- | --- |
| STANDHEIZUNG | string | 'EIN','AUS' |

### STEUERN_MOTOR_KLAPPENPOSITION

Ansteuern der Schrittmotoren

| Name | Type | Description |
| --- | --- | --- |
| BELUEFTUNG_LI | int |  |
| BELUEFTUNG_RE | int |  |
| UMLUFT | int |  |
| ENTFROSTUNG | int |  |
| FUSSRAUM_LI | int |  |
| FUSSRAUM_RE | int |  |
| SCHICHTUNG_LI | int |  |
| SCHICHTUNG_RE | int |  |
| FONDRAUM | int |  |
| FRISCHLUFT | int |  |

### STEUERN_WASSERVENTIL

Ansteuern des linken und rechten Wasserventils

| Name | Type | Description |
| --- | --- | --- |
| WASSERVENTIL_LINKS | int | Einschaltdauer in Prozentschritten 0-100 % |
| WASSERVENTIL_RECHTS | int | Einschaltdauer in Prozentschritten 0-100 % |

### STEUERN_GEBLAESE

Ansteuern des Geblaeses

| Name | Type | Description |
| --- | --- | --- |
| GEBLAESE | int | 0 - 100 % |

### STEUERN_AUSGAENGE

Ansteuern der Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| AUSGAENGE | string | 'EIN','AUS','ENDE' |

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
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
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
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Belueftungsklappenmotor links |
| 0x01 | Belueftungsklappenmotor rechts |
| 0x02 | Umluftklappenmotor |
| 0x03 | Entfrostungsklappenmotor |
| 0x04 | Fussraumklappenmotor links |
| 0x05 | Fussraumklappenmotor rechts |
| 0x06 | Schichtungsklappenmotor links |
| 0x07 | Schichtungsklappenmotor rechts |
| 0x08 | Fondraumklappenmotor |
| 0x09 | frei 0x09 |
| 0x0A | Frischluftklappenmotor |
| 0x0B | Frischluftklappenmotor IHKR |
| 0x0C | Zentralantrieb IHKR |
| 0x0D | Geblaesepotentiometer links |
| 0x0E | Geblaesepotentiometer rechts |
| 0x0F | AUC Sensor |
| 0x10 | Waermetauscherfuehler links |
| 0x11 | Waermetauscherfuehler rechts |
| 0x12 | Verdampferfuehler |
| 0x13 | Innenraumtemperaturfuehler |
| 0x14 | Geblaesepotentiometer IHKR |
| 0x15 | Klemme 30 |
| 0x16 | Potentiometer Luftverteilung IHKR |
| 0x17 | Innenfuehlergeblaese |
| 0x18 | frei 0x18 |
| 0x19 | AUC Heizung |
| 0x1A | DME-KO |
| 0x1B | DME-AC |
| 0x1C | frei 0x1C |
| 0x1D | Fondraumschalter |
| 0x1E | frei 0x1E |
| 0x1F | frei 0x1F |
| 0x20 | Belueftungstemperaturfuehler links |
| 0x21 | Belueftungstemperaturfuehler rechts |
| 0x22 | Schichtungspotentiometer vorne |
| 0x23 | Schichtungspotentiometer hinten |
| 0x24 | LED Heckscheibenheizung IHKR |
| 0x25 | LED Klima IHKR |
| 0x26 | LED Umluft IHKR |
| 0x27 | frei 0x27 |
| 0x28 | AUC Heizung |
| 0x29 | Relais Zusatzluefter |
| 0x2A | Relais Frontscheibenheizung |
| 0x2B | Relais Heckscheibenheizung |
| 0x2C | Magnetkupplung Klimakompressor |
| 0x2D | Zusatzwasserpumpe |
| 0x2E | Wasserventil links |
| 0x2F | Wasserventil rechts |
| 0x30 | Standheizung Sperrventil |
| 0x31 | Standheizung Weckleitung |
| 0x32 | Stellgroesse Y links |
| 0x33 | Stellgroesse Y rechts |
| 0x34 | Waermetauschersolltemperatur links |
| 0x35 | Waermetauschersolltemperatur rechts |
| 0x36 | Aussentemperatur |
| 0x37 | Fahrzeuggeschwindigkeit |
| 0x38 | Kuehlwassertemperatur |
| 0x39 | Motordrehzahl |
| 0x3A | Klemme 58 g |
| 0x3B | Motorhaube offen |
| 0x3C | Rueckwaertsgang eingelegt |
| 0x3D | Motor laeuft |
| 0x3E | Standlueftung ein/aus |
| 0x3F | Standheizung ein/aus |
| 0x40 | AUC Sensor |
| 0x41 | Eichschalter IHKR |
| 0x42 | Geblaesesteuerspannung |
| 0xFF | unbekannter Fehlerort |
