# ZUHEIZ_B.prg

## General

|  |  |
| --- | --- |
| File | ZUHEIZ_B.prg |
| Type | PRG |
| Jobs | 16 |
| Tables | 3 |
| Origin | BMW TP-423 Drexel |
| Revision | 1.3 |
| Author | BMW TP-423 Drexel, BMW TP-423 Teepe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zuheizer Backup Steuergeraet |  |  |
| ORIGIN | string | BMW TP-423 Drexel |  |  |
| REVISION | string | 1.03 |  |  |
| AUTHOR | string | BMW TP-423 Drexel, BMW TP-423 Teepe |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### KEY_BYTES

_No description._

_No arguments._

### IDENT

_No description._

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose Ende

_No arguments._

### STEUERN_KRAFTSTOFFPUMPE

Ansteuern der Kraftstoffpumpe

_No arguments._

### STEUERN_ZUHEIZER

Ansteuern des Zuheizers Der Ausgang kann ein- bzw. ausgeschaltet werden.

| Name | Type | Description |
| --- | --- | --- |
| ZUHEIZER | string | EIN, AUS |

### STATUS_MESSWERTE

Messwerteblock auswerten

_No arguments._

### EEPROM_LESEN

nur mit ADS moeglich

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0-255 bzw. 0x00-0xFF |
| ANZAHL | int | 0-255 bzw. 0x00-0xFF |

### EEPROM_SCHREIBEN

nur mit ADS moeglich

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | 0-255 bzw. 0x00-0xFF |
| WERT | int | 0-255 bzw. 0x00-0xFF |

### ZUHEIZER_NOT_AUS

nur mit ADS moeglich Zuheizer wird zwangsweise in den AUS-Zustand gebracht

_No arguments._

### BRENNDAUER_LESEN

nur mit ADS moeglich

_No arguments._

### STARTZAEHLER_LESEN

nur mit ADS moeglich

_No arguments._

### STARTZAEHLER_SPEICHERN

nur mit ADS moeglich

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0000FFFF | Steuergeraet defekt |
| 0x00000414 | Steuergeraet falsch codiert |
| 0x0000057E | keine Flammbildung |
| 0x0000057F | Flammabbruch |
| 0x00000214 | Versorgungsspannung Signal zu gross |
| 0x00000580 | Unterspannungsabschaltung |
| 0x00000581 | wiederholter Flammabbruch im Heizzyklus |
| 0x00000582 | Heizgeraet ueberhitzt |
| 0x00000583 | Temperaturfuehler defekt |
| 0x00000584 | Gluehstift Flammwaechter |
| 0x00000585 | Dosierpumpe |
| 0x00000586 | Verbrennungsluftgeblaese |
| 0x00000587 | Umwaelzpumpe |
| 0x00000588 | Ansteuerung Fahrzeuggeblaese |
| 0x00000000 | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x88 | kein Fehler |
| 0x00 | interner Fehler |
| 0x06 | Grenzwertueberschreitung |
| 0x1B | unplausibles Signal |
| 0x1C | Kurzschluss gegen U-Batt |
| 0x1D | Kurzschluss gegen Masse |
| 0x1E | Leitungsunterbrechung, Kurzschluss gegen U-Batt |
| 0x23 | ungueltiger Arbeitsbereich |
| 0x24 | Leitungsunterbrechung |
| 0x25 | Kurzschluss gegen Masse |
| 0xFF | unbekannte Fehlerart |

### MWTEXTE

| MW | MWTEXT |
| --- | --- |
| 0 |  |
| 6 | Teillast |
| 7 | Vollast |
| 30 | Start |
| 31 | Nachlauf |
| 32 | Regelpause |
| 33 | Stoerung |
| 135 | ein |
| 136 | aus |
| 19 | Heizung EIN |
| 20 | Heizung AUS |
| 21 | zuheizen |
| 22 | lueften |
| 23 | heizen |
| 24 | Geblaese EIN |
| 25 | Geblaese AUS |
| ?? | unbekannter Messwerttext |
