# ZAE.prg

## General

|  |  |
| --- | --- |
| File | ZAE.prg |
| Type | PRG |
| Jobs | 18 |
| Tables | 4 |
| Origin | BMW TP-421 Winkler |
| Revision | 1.8 |
| Author | BMW TP-421 Baumgartner, BMW TP-421 Winkler |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Airbag US |  |  |
| ORIGIN | string | BMW TP-421 Winkler |  |  |
| REVISION | string | 1.08 |  |  |
| AUTHOR | string | BMW TP-421 Baumgartner, BMW TP-421 Winkler |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer AIRBAG E38

_No arguments._

### IDENT

Ident-Daten fuer AIRBAG E38

_No arguments._

### STATUS_LESEN

Status des AIRBAG lesen

_No arguments._

### FS_QUICK_LESEN

Quicktest High-Konzept nach Lastenheft (mit Abwandlungen)

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### SG_LOGIN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| H_ADR | string | Login- Code High- Byte |
| L_ADR | string | Login- Code Low- Byte |

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SPEICHER_LESEN

Speicher lesen ZAE

| Name | Type | Description |
| --- | --- | --- |
| H_ADR | string | Startadresse High- Byte |
| L_ADR | string | Startadresse Low- Byte |
| ANZ_BYTE | string | Anzahl der zu lesenden Bytes |

### TYP_LESEN

Fahrzeugtyp lesen

_No arguments._

### DIAGNOSE_ERHALTEN

Diagnose aufrechterhalten

_No arguments._

### AUSSTATTUNG_SCHREIBEN

Ausstattung schreiben

| Name | Type | Description |
| --- | --- | --- |
| AB_F_VERB | string | 1 --> verbaut |
| GS_F_VERB | string | 1 --> verbaut |
| AB_BF_VERB | string | 1 --> verbaut |
| GS_BF_VERB | string | 1 --> verbaut |
| SCHLOSS_F_VERB | string | 1 --> verbaut |
| SCHLOSS_BF_VERB | string | 1 --> verbaut |
| SENSOR_F_VERB | string | 1 --> verbaut |
| SENSOR_BF_VERB | string | 1 --> verbaut |
| SITZ_ERKENNUNG_VERB | string | 1 --> verbaut |

### AUSSTATTUNG_LESEN

Ausstattung lesen ZAE

_No arguments._

### PARAMETER_LESEN

Algorithmus- Parameter ZAE auslesen

_No arguments._

### VERRIEGELUNG_LESEN

Auslesen des Pruefstempels

_No arguments._

### VERRIEGELUNG_SCHREIBEN

Verriegelungsbytes setzen

_No arguments._

### HERSTELLDATUM_LESEN

Herstelldatum des SG lesen

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | AD- Wandler; Steuergeraetefehler |
| 0x02 | Widerstand ZK0 -> Fahrer Airbag |
| 0x03 | Widerstand ZK1 -> Fahrer Gurtstrammer |
| 0x04 | Widerstand ZK2 -> Beifahrer Gurtstrammer |
| 0x05 | Widerstand ZK3 -> Beifahrer Airbag |
| 0x06 | EEPROM |
| 0x07 | SPI- Kommunikation |
| 0x0C | Zuendspannung ZK0 -> Fahrer Airbag |
| 0x0D | Zuendspannung ZK1 -> Fahrer Gurtstrammer |
| 0x0E | Zuendspannung ZK2 -> Beifahrer Gurtstrammer |
| 0x0F | Zuendspannung ZK3 -> Beifahrer Airbag |
| 0x10 | Spannung Autarkiekondensator |
| 0x11 | Versorgungsspannung |
| 0x12 | TZ- Sperrleitung |
| 0x13 | Fehlerlampe |
| 0x14 | Sitzbelegungserkennung Beifahrer |
| 0x15 | Drucksensor Fahrer |
| 0x16 | Drucksensor Beifahrer |
| 0x17 | Temperatur; Steuergeraetefehler |
| 0x18 | Gurtschloss Fahrer |
| 0x19 | Gurtschloss Beifahrer |
| 0x30 | Steuergeraetefehler Autarkiefallmerker |
| 0x31 | Steuergeraetefehler Sicherheitsschalter / Ueberwachung |
| 0x32 | Steuergeraetefehler Airbag F LSH |
| 0x33 | Steuergeraetefehler Airbag F LSL |
| 0x34 | Steuergeraetefehler TZ- Sperrleitung |
| 0x35 | Steuergeraetefehler Zuendkontakt Fusspunkt |
| 0x36 | Steuergeraetefehler Gurtstr. F LSH |
| 0x37 | Steuergeraetefehler Gurtstr. F LSL |
| 0x38 | Steuergeraetefehler Einschwingpruefung |
| 0x39 | Steuergeraetefehler Gurtstr. BF LSH |
| 0x3A | Steuergeraetefehler Gurtstr. BF LSL |
| 0x3B | Steuergeraetefehler Stromquellenfehler |
| 0x3C | Steuergeraetefehler Airbag BF LSH |
| 0x3D | Steuergeraetefehler Airbag BF LSL |
| 0x3E | Steuergeraetefehler Reedspule |
| 0x3F | Steuergeraetefehler Mutiplexer |
| 0x41 | Steuergeraetefehler Autarkiekondensator |
| 0x43 | Steuergeraetefehler Zuendkondensator Airbag Fahrer |
| 0x44 | Steuergeraetefehler Zuendkondensator Gstr. Fahrer |
| 0x45 | Steuergeraetefehler Zuendkondensator Gstr. Beifahrer |
| 0x46 | Steuergeraetefehler Zuendkondensator Airbag Beifahrer |
| 0x47 | Steuergeraetefehler Signalpfad M1 |
| 0x48 | Steuergeraetefehler Signalpfad M2 |
| 0x49 | Kurzschluss zwischen den Zuendpillen |
| 0x4C | allg. Fehler des Airbag- Steuergeraetes |
| 0x4D | Fehler Crashtelegramm |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Fehler nicht auswertbar |
| 0x02 | Fehler momentan vorhanden |
| 0x03 | Leitungsunterbrechung |
| 0x04 | Leckwiderstand oder Kurzschluss gegen Masse |
| 0x05 | Leckwiderstand oder Kurzschluss gegen U-Batt |
| 0x06 | Grenzwertunterschreitung |
| 0x07 | Grenzwertueberschreitung |
| 0x08 | sporadischer Fehler |
| 0xFF | nicht belegt |

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
| 0x30 | NEC |
| 0xFF | unbekannter Hersteller |
