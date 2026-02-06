# ZAE2.prg

## General

|  |  |
| --- | --- |
| File | ZAE2.prg |
| Type | PRG |
| Jobs | 16 |
| Tables | 4 |
| Origin | BMW TP-421 Winkler H.-J. |
| Revision | 1.9 |
| Author | BMW TP-421 Baumgartner, BMW TP-421 Winkler |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | AIRBAG 2 |  |  |
| ORIGIN | string | BMW TP-421 Winkler H.-J. |  |  |
| REVISION | string | 1.09 |  |  |
| AUTHOR | string | BMW TP-421 Baumgartner, BMW TP-421 Winkler |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer AIRBAG ZAE II

_No arguments._

### IDENT

Ident-Daten fuer AIRBAG ZAE II

_No arguments._

### STATUS_LESEN

Status des AIRBAG II lesen

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

_No arguments._

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

### DIAGNOSE_ERHALTEN

Diagnose aufrechterhalten

_No arguments._

### AUSSTATTUNG_LESEN

Ausstattung lesen ZAE2

_No arguments._

### VERRIEGELUNG_LESEN

Auslesen des Pruefstempels

_No arguments._

### VERRIEGELUNG_SCHREIBEN

Verriegelungsbytes setzen

_No arguments._

### HERSTELLERDATEN_LESEN

Herstellerdaten des SG lesen

_No arguments._

### TYP_LESEN

Typ des Fzg. lesen

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
| 0x01 | interner Steuergeraetefehler |
| 0x02 | Fehlerlampe |
| 0x03 | Versorgungsspannung |
| 0x04 | Zuendkreis 0 -> Fahrer Airbag |
| 0x05 | Zuendkreis 1 -> Fahrer Gurtstrammer |
| 0x06 | Zuendkreis 2 -> Beifahrer Gurtstrammer |
| 0x07 | Zuendkreis 3 -> Beifahrer Airbag |
| 0x08 | Zuendkreis 4 -> Seitenairbag links |
| 0x09 | Zuendkreis 5 -> Seitenairbag rechts |
| 0x0A | Zuendkreis 6 -> Airbag Kopf links |
| 0x0B | Zuendkreis 7 -> Airbag Kopf rechts |
| 0x10 | Analoge Gurtschlossabfrage Fahrer |
| 0x11 | Analoge Gurtschlossabfrage Beifahrer |
| 0x12 | MRSA_LINKS Leitungsfehler |
| 0x13 | MRSA_LINKS falsche Algo- Parameter |
| 0x14 | MRSA_LINKS MRSA sendet Fehler |
| 0x15 | MRSA_RECHTS Leitungsfehler |
| 0x16 | MRSA_RECHTS falsche Algo- Parameter |
| 0x17 | MRSA_RECHTS MRSA sendet Fehler |
| 0x18 | Digitale Sitzbelegungserkennung |
| 0x1A | Plausibilitaet der Sitzbelegungserkennung |
| 0x1B | Digitale KSE |
| 0x1D | Plausibilitaet der KSE |
| 0x1F | Digitale KSE |
| 0x20 | MRSA_LINKS Kommunikationsfehler |
| 0x21 | MRSA_RECHTS Kommunikationsfehler |
| 0xFF | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | -- |
| 0x02 | -- |
| 0x03 | Leitungsunterbrechung oder Kurzschluss gegen Masse |
| 0x04 | Leckwiderstand oder Kurzschluss gegen Masse |
| 0x05 | Leckwiderstand oder Kurzschluss gegen U-Batt |
| 0x06 | Grenzwertunterschreitung |
| 0x07 | Grenzwertueberschreitung |
| 0x08 | -- |
| 0xFF | unbekannte Fehlerart |

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
