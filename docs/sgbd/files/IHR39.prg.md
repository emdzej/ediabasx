# IHR39.prg

## General

|  |  |
| --- | --- |
| File | IHR39.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 3 |
| Origin | BMW TP-421 Drexel |
| Revision | 1.3 |
| Author | BMW TP-421 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Integrierte Heizregelung E39 |  |  |
| ORIGIN | string | BMW TP-421 Drexel |  |  |
| REVISION | string | 1.03 |  |  |
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

### DIAGNOSE_TESTBIT

Ansteuern des Diagnosetest-Bits

| Name | Type | Description |
| --- | --- | --- |
| TESTBIT | string | 'EIN','AUS' |

### SLEEP_MODE

SG in Power-Down-Mode versetzen

_No arguments._

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

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

### STATUS_REGLERGROESSEN

Status lesen

_No arguments._

### STATUS_MOTOR_KLAPPENPOSITION

Status lesen

_No arguments._

### STATUS_IO

Status lesen

_No arguments._

### STATUS_ANALOGEINGAENGE

Status lesen Analogeingaenge

_No arguments._

### STATUS_BEDIENTEIL

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

### STEUERN_ZUSATZWASSERPUMPE

Ansteuern der Zusatzwasserpumpe

| Name | Type | Description |
| --- | --- | --- |
| ZUSATZWASSERPUMPE | string | 'EIN','AUS' |

### STEUERN_SH_SPERRVENTIL

Ansteuern des Sperrventils

| Name | Type | Description |
| --- | --- | --- |
| SH_SPERRVENTIL | string | 'EIN','AUS' |

### STEUERN_SH_WECKEN

Ansteuern der Standheizung

| Name | Type | Description |
| --- | --- | --- |
| SH_WECKEN | string | 'EIN','AUS' |

### STEUERN_LWS_GEBLAESERELAIS

Ansteuern des Latentwaermespeicher Geblaeserelais.

| Name | Type | Description |
| --- | --- | --- |
| LWS_GEBLAESERELAIS | string | 'EIN','AUS' |

### STEUERN_LWS_UMSCHALTVENTIL

Ansteuern des Sperrventils

| Name | Type | Description |
| --- | --- | --- |
| LWS_UMSCHALTVENTIL | string | 'EIN','AUS' |

### STEUERN_LWS_ABSPERRVENTIL

Ansteuern des Absperrventils des Latentwaermespeichers

| Name | Type | Description |
| --- | --- | --- |
| LWS_ABSPERRVENTIL | string | 'EIN','AUS' |

### STEUERN_WASSERVENTIL

Ansteuern des linken und rechten Wasserventils

| Name | Type | Description |
| --- | --- | --- |
| WASSERVENTIL_LINKS | int | Einschaltdauer in Prozentschritten 0-100 % |
| WASSERVENTIL_RECHTS | int | Einschaltdauer in Prozentschritten 0-100 % |

### STEUERN_MOTOR

Ansteuern des Schrittmotors

| Name | Type | Description |
| --- | --- | --- |
| MOTOR | string | 0-100 % |

### STEUERN_TOGGLE_UMLUFT

Ansteuern des Schrittmotors

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
| 0x0B | Frischluftklappenmotor |
| 0x0D | Sollwertsteller links |
| 0x0E | Sollwertsteller rechts |
| 0x10 | Waermetauscherfuehler links |
| 0x11 | Waermetauscherfuehler rechts |
| 0x20 | Fussraumtemperaturfuehler links |
| 0x21 | Fussraumtemperaturfuehler rechts |
| 0x24 | Heckscheibenheizung Taste mit LED |
| 0x26 | Umluft Taste mit LED |
| 0x2A | Relais Spritzduesenheizung |
| 0x2B | Relais Heckscheibenheizung |
| 0x2D | Zusatzwasserpumpe |
| 0x2E | Wasserventil links |
| 0x2F | Wasserventil rechts |
| 0x30 | Standheizung Sperrventil, Latentwaermespeicher Umschaltventil |
| 0x31 | Standheizung Weckleitung, Latentwaermespeicher Geblaeserelais |
| 0x32 | Latentwaermespeicher Temperaturfuehler |
| 0x33 | Latentwaermespeicher Absperrventil |
| 0xFF | unbekannter Fehlerort |
