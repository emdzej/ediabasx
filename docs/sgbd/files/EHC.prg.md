# EHC.prg

## General

|  |  |
| --- | --- |
| File | EHC.prg |
| Type | PRG |
| Jobs | 24 |
| Tables | 6 |
| Origin | BMW TI-431 Helmich |
| Revision | 1.34 |
| Author | BMW TP-422 Teepe, Helmich |
| ECU Comment | am Fahrzeug getestet |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | 1-Achs-Luftfederung EHC |  |  |
| ORIGIN | string | BMW TI-431 Helmich |  |  |
| REVISION | string | 1.34 |  |  |
| AUTHOR | string | BMW TP-422 Teepe, Helmich |  |  |
| COMMENT | string | am Fahrzeug getestet |  |  |
| PACKAGE | string | 0.11 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer EWS automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer EHC

_No arguments._

### FS_QUICK

Fehlerspeicher lesen

_No arguments._

### FS_LESEN

Fehlerspeicher lesen High-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### CODIERUNG_LESEN

Auslesen der Codierdaten des EHC

_No arguments._

### STATUS_DIGITAL_LESEN

digitale Statis (Statusbytes) des EHC

_No arguments._

### STATUS_ANALOG_LESEN

analoge Stati des EHC

_No arguments._

### STATUS_ONLINE_LESEN

Online-Stati des EHC

_No arguments._

### ABGLEICHWERTE_LESEN

Timer-Stati des EHC

_No arguments._

### FAHRZEUG_HOEHE_ABGLEICHEN

Timer-Stati des EHC

| Name | Type | Description |
| --- | --- | --- |
| DELTA_HOEHE_LINKS | int | mm |
| DELTA_HOEHE_RECHTS | int | mm |
| MINDEST_DELTA | int | mm |

### STATUS_TIMER_LESEN

Timer-Stati des EHC

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

### STATUS_VORGEBEN

Ansteuern eines digitalen Ein- Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente 1 |

### STEUERN_STATUS_VORGEBEN_LOOP

Ansteuern eines digitalen Ein- Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente 1 |
| TIME | int | Zeit in Sekunden |

### KOMPRESSOR_STEUERN

Ansteuern des Kompressors

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Ansteuerzeit in 100 ms |

### SPEICHER_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | gewuenschtes Startsegment (0 bis 3) |
| MIDDLE | int | gewuenschte Startadresse midle als Hexwert! |
| LOW | int | gewuenschte Startadresse low als Hexwert! |
| ANZAHL | int | gewuenschte Anzahl Bytes |

### MODUS_VORGEBEN

EINSCHALTUNG des TRANSPORT oder MONTAGEMODUS

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | TRANSPORT oder MONTAGE |
| SCHALT_WERT | string | EIN oder AUS |

### FASTFILTER_WERTE_LESEN_SCHREIBEN

Beschreiben des Pruefstempels

_No arguments._

### TIZKL15_SCHREIBEN

Timerzeit fuer Meldung nach KL 15 verändern

| Name | Type | Description |
| --- | --- | --- |
| WERT | int | gewuenschte Timerzeit (in Sekunden) |

### IS_LESEN

Fehlerspeicher lesen High-Konzept nach Lastenheft Codierung/Diagnose

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
| 0x01 | Sensor hinten links |
| 0x02 | Sensor hinten rechts |
| 0x03 | Kompressor-Relais |
| 0x04 | Magnetventil hinten links |
| 0x05 | Magnetventil hinten rechts |
| 0x06 | Ablassventil |
| 0x07 | Steuergeraet, EEPROM, A-/D-Wandler |
| 0x08 | Regelzeit, heben |
| 0x09 | Regelzeit, senken |
| 0x0A | Regelzeit, einseitig |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x02 | Kurzschluss gegen Masse |
| 0x05 | Kurzschluss gegen U-Batt oder Leitungsunterbrechung |
| 0x08 | ungueltiger Messbereich |
| 0x20 | Sensoraktivitaet |
| 0x21 | VDD oder beide defekt |
| 0x40 | Fehler momentan vorhanden |
| 0x70 | EEPROM defekt |
| 0x71 | A-/D-Wandler defekt |
| 0x80 | sporadischer Fehler |
| 0x90 | Fahrt |
| 0xA0 | rechte Seite |
| 0xA1 | linke Seite |
| 0xB0 | Stand |
| 0xB1 | Fahrt |
| 0xFF | -- |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x01 | Sensor Versorgungsspannung | mV |
| 0x03 | minimale Spannung am Relais | mV |
| 0x04 | minimale Spannung am Ventil | mV |
| 0x07 | Checksumme | - |
| 0x17 | AD Wert | - |
| 0x08 | Hoehenstand hoehere Seite | mm |
| 0x09 | Hoehenstand tiefere Seite | mm |
| 0x10 | Hoehenstand rechts | mm |
| 0x11 | Hoehenstand links | mm |
| 0xXY | unbekannte Umweltbedingung | XY |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| HA_H | 0 | 0x01 |
| HA_S | 0 | 0x02 |
| HL_H | 0 | 0x04 |
| HR_H | 0 | 0x08 |
| HL_S | 0 | 0x10 |
| HR_S | 0 | 0x20 |
| HAND_ENDE | 0 | 0x80 |
| VERLADE_EIN | 1 | 0x01 |
| VERLADE_AUS | 1 | 0x02 |
| BAND_EIN | 1 | 0x10 |
| BAND_AUS | 1 | 0x20 |
| XXX | Y | Z |
