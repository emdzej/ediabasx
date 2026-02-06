# IHKA39.prg

## General

|  |  |
| --- | --- |
| File | IHKA39.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 3 |
| Origin | BMW TP-421 Drexel |
| Revision | 1.7 |
| Author | BMW TP-421 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrierte Heiz- Klimaautomatik E39 |  |  |
| ORIGIN | string | BMW TP-421 Drexel |  |  |
| REVISION | string | 1.07 |  |  |
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

Identifikation

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

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

Codierdaten Schreiben

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

### DIAGNOSE_TESTBIT

Ansteuern des Diagnosetest-Bits

| Name | Type | Description |
| --- | --- | --- |
| TESTBIT | string | 'EIN','AUS' |

### EICHLAUF_STARTEN

Anstossen der internen Eichlaufroutine

_No arguments._

### DISPLAY_TEST

Einschalten eines Testmusters in den Displays Es muss der Displaytest immer ausgeschalten werden

| Name | Type | Description |
| --- | --- | --- |
| TEST_MUSTER | int | 0    = Testmuster aus 1..4 = Testmuster 1..4 |

### STEUERN_RELAIS_HECKSCHEIBE

Ansteuern des Heckscheibenrelais

| Name | Type | Description |
| --- | --- | --- |
| RELAIS_HECKSCHEIBE | string | 'EIN','AUS' |

### STEUERN_SPRITZDUESENHEIZUNG

Ansteuern des Spritzduesenheizung

| Name | Type | Description |
| --- | --- | --- |
| SPRITZDUESENHEIZUNG | string | 'EIN','AUS' |

### STEUERN_RELAIS_ZUSATZLUEFTER

Ansteuern des Zusatzluefterrelais

| Name | Type | Description |
| --- | --- | --- |
| RELAIS_ZUSATZLUEFTER | string | 'EIN','AUS' |

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

### STEUERN_LWS_UMSCHALTVENTIL

Ansteuern des Umschaltventils

| Name | Type | Description |
| --- | --- | --- |
| LWS_UMSCHALTVENTIL | string | 'EIN','AUS' |

### STEUERN_LWS_ABSPERRVENTIL

Ansteuern des Absperrventils des Latentwaermespeichers

| Name | Type | Description |
| --- | --- | --- |
| LWS_ABSPERRVENTIL | string | 'EIN','AUS' |

### STEUERN_MOTOR_KLAPPENPOSITION

Ansteuern der Schrittmotoren

| Name | Type | Description |
| --- | --- | --- |
| FRISCHLUFT | int |  |
| FUSSRAUM | int |  |
| UMLUFT | int |  |
| BELUEFTUNG | int |  |
| ENTFROSTUNG | int |  |

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

### KOMPRESSOR_SPERRE

Ansteuern des Geblaeses

| Name | Type | Description |
| --- | --- | --- |
| SPERRE | string | 'EIN','AUS','1','0' |

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
| 0x01 | Reinshagen / Delphi |
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
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0x29 | DENSO |
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Belueftungsklappenmotor |
| 0x01 | Umluftklappenmotor |
| 0x02 | Fussraumklappenmotor |
| 0x03 | Entfrostungsklappenmotor |
| 0x04 | Fondraumklappenmotor |
| 0x05 | Frischluftklappenmotor |
| 0x06 | Latentwaermespeicher Temperaturfuehler |
| 0x07 | Waermetauscherfuehler links |
| 0x08 | Waermetauscherfuehler rechts |
| 0x09 | Verdampferfuehler |
| 0x0A | AUC Sensor |
| 0x0B | Klemme 30 |
| 0x0C | frei 0x0C |
| 0x0D | Innenraumtemperaturfuehler |
| 0x0E | AUC Heizung |
| 0x0F | Relais Zusatzluefter |
| 0x10 | Relais Spritzduesenheizung |
| 0x11 | Relais Heckscheibenheizung |
| 0x12 | Magnetkupplung Klimakompressor |
| 0x13 | DME-KO |
| 0x14 | DME-AC |
| 0x15 | Zusatzwasserpumpe |
| 0x16 | Wasserventil links |
| 0x17 | Wasserventil rechts |
| 0x18 | Standheizung Sperrventil, Latentwaermespeicher Umschaltventil |
| 0x19 | Standheizung Weckleitung |
| 0x1A | Geblaesesteuerspannung |
| 0x1B | Stellgroesse Y links |
| 0x1C | Stellgroesse Y rechts |
| 0x1D | Waermetauschersolltemperatur links |
| 0x1E | Waermetauschersolltemperatur rechts |
| 0x1F | Aussentemperatur |
| 0x20 | Fahrzeuggeschwindigkeit |
| 0x21 | Kuehlwassertemperatur |
| 0x22 | Motordrehzahl |
| 0x23 | Klemme 58g |
| 0x24 | LCD Hinterleuchtung |
| 0x25 | Latentwaermespeicher Absperrventil |
| 0x26 | Motor laeuft |
| 0x27 | Standlueftung ein/aus |
| 0x27 | Standheizung ein/aus |
| 0x29 | AUC Sensor |
| 0x2A | Innenfuehlergeblaese |
| 0x2B | frei 0x2B |
| 0x2C | frei 0x2C |
| 0x2D | frei 0x2D |
| 0x2E | frei 0x2E |
| 0x2F | unbekannter Fehlerort |
