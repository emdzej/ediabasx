# UEB2.prg

## General

|  |  |
| --- | --- |
| File | UEB2.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 5 |
| Origin | BMW TI-431 Mellersh |
| Revision | 1.01 |
| Author | BMW TP-422 Zender, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Ueberrollschutzssensor |  |  |
| ORIGIN | string | BMW TI-431 Mellersh |  |  |
| REVISION | string | 1.01 |  |  |
| AUTHOR | string | BMW TP-422 Zender, BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.12 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer UER2

_No arguments._

### IDENT

Ident-Daten fuer UEB2

_No arguments._

### FS_QUICK_LESEN

Fehlerzaehler lesen

_No arguments._

### FS_LESEN

Fehlerspeicher lesen bedingtes High-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### COD_LESEN

Auslesen der Codierdaten der UEB2

_No arguments._

### COD_AUSSTATTUNG_LESEN

Auslesen der Ausstattungsbytes des UEB2

_No arguments._

### COD_PARAMETERSATZ1_LESEN

Auslesen Parametersatz1 des UEB2

_No arguments._

### COD_PARAMETERSATZ2_LESEN

Auslesen Parametersatz2 des UEB2

_No arguments._

### COD_VERRIEGELUNG_LESEN

Auslesen der Verriegelungsbytes des UEB2

_No arguments._

### COD_KFZ_DATEN_LESEN

Auslesen Kfz-Herstellerdaten des UEB2

_No arguments._

### STATUS_FEHLERZUSTAENDE_LESEN

_No description._

_No arguments._

### STATUS_ANZAHL_AUSLOESUNGEN_LESEN

Anzahl der Ausloesungen

_No arguments._

### STATUS_BORDSPANNUNG_LESEN

_No description._

_No arguments._

### STATUS_G_SENSOR_LESEN

_No description._

_No arguments._

### STATUS_CRASHDATEN_G_SENSOR_LESEN

_No description._

_No arguments._

### STATUS_CRASHDATEN_LIBELLE1_LESEN

_No description._

_No arguments._

### STATUS_CRASHDATEN_LIBELLE2_LESEN

_No description._

_No arguments._

### STATUS_CRASHDATEN_DIAGNOSE_LESEN

_No description._

_No arguments._

### STATUS_TRANSPORTSICHERUNG_LESEN

Zustand der Transportsicherung

_No arguments._

### STEUERN_BUEGEL

Ausfahren des Buegels

_No arguments._

### STEUERN_TRANSPORTSICHERUNG_AN

Transportsicherung setzen

_No arguments._

### STEUERN_TRANSPORTSICHERUNG_AUS

Transportsicherung entfernen

_No arguments._

### LOGIN

login-procedure

_No arguments._

### LOGIN2

login-procedure

_No arguments._

### KFZ_DATEN_SCHREIBEN

KFZ-Herstellerdaten schreiben

| Name | Type | Description |
| --- | --- | --- |
| BYTE_ADRESSE | int | gibt Startbyte an [1-16] |
| ANZAHL_BYTES | int | gibt die Anzahl, der einzuschreibenden Bytes ein |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |
| BYTE4 | int | kann beliebig verwendet werden |
| BYTE5 | int | kann beliebig verwendet werden |
| BYTE6 | int | kann beliebig verwendet werden |
| BYTE7 | int | kann beliebig verwendet werden |
| BYTE8 | int | kann beliebig verwendet werden |
| BYTE9 | int | kann beliebig verwendet werden |
| BYTE10 | int | kann beliebig verwendet werden |
| BYTE11 | int | kann beliebig verwendet werden |
| BYTE12 | int | kann beliebig verwendet werden |
| BYTE13 | int | kann beliebig verwendet werden |
| BYTE14 | int | kann beliebig verwendet werden |
| BYTE15 | int | kann beliebig verwendet werden |
| BYTE16 | int | kann beliebig verwendet werden |

### VERRIEGELUNG_SETZEN

Verriegelung setzen

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

### DIAGNOSE_WEITER

Diagnose aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

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
| 0xFF | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | interner Fehler |
| 0x02 | Fehlerlampe |
| 0x03 | Versorgungsspannung |
| 0x04 | Magnet 1 und 2 |
| 0x05 | Magnet 1 |
| 0x06 | Magnet 2 |
| 0x07 | Zaehler fuer Ausloesungen |
| 0x08 | Libelle 1 |
| 0x09 | Libelle 1 |
| 0x0A | Libelle 1 Ausloeseschwelle |
| 0x0B | Libelle 2 |
| 0x0C | Libelle 2 |
| 0x0D | Libelle 2 Ausloeseschwelle |
| 0x0E | g-Sensor |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Leckwiderstand oder Kurzschluss gegen U-Batt |
| 0x02 | Leckwiderstand oder Kurzschluss gegen Masse |
| 0x04 | Leitungsunterbrechung |
| 0x08 | unbekannte Fehlerart |
| 0x10 | Grenzwertunterschreitung |
| 0x20 | Grenzwertueberschreitung |
| 0x40 | Fehler momentan vorhanden |
| 0x80 | sporadischer Fehler |
| 0xFF | -- |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x02 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x03 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x04 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x05 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x06 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x07 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x08 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x09 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x0A | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x0B | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x0C | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x0D | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |
| 0x0E | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x04 | 0x00 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |

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
