# DSC3.prg

## General

|  |  |
| --- | --- |
| File | DSC3.prg |
| Type | PRG |
| Jobs | 42 |
| Tables | 11 |
| Origin | BMW TP-421 Hirsch |
| Revision | 1.9 |
| Author | BMW TP-421 Hirsch |
| ECU Comment | Keine Diagnose bei V > 6 km/h |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Antiblockiersystem u. Dynamisches Stabilitaets Controll 3 E38-M73 |  |  |
| ORIGIN | string | BMW TP-421 Hirsch |  |  |
| REVISION | string | 1.09 |  |  |
| AUTHOR | string | BMW TP-421 Hirsch |  |  |
| COMMENT | string | Keine Diagnose bei V > 6 km/h |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer ABS_DSC3

_No arguments._

### IDENT

Ident-Daten fuer ABS_DSC3

_No arguments._

### LOGIN

Erweiterter Diagnosebereich

_No arguments._

### FS_LESEN

Fehlerspeicher lesen fuer ABS_DSC3 High-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen fuer ABS_DSC3

_No arguments._

### STATUS_IO_LESEN_GESCHW

Status Eingaenge ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |

### STATUS_IO_LESEN_ANALOG

Status Eingaenge ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |

### STATUS_4_DRUCKWERTE

4 aufeinanderfolgende Druckwerte

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |

### STATUS_IO_LESEN_DIGITAL

Status Eingaenge ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |

### STATUS_IO_LESEN_CAN

Status CAN ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |

### DOWNLOAD_STELLGLIED

Stellglied ansteuern ABS_DSC3

_No arguments._

### DOWNLOAD_D4_STELLGLIED

Stellglied ansteuern ABS_DSC3

_No arguments._

### DOWNLOAD_FUEHLER_EINZELN

Ansprechschwelle u. Impulsrad ABS_DSC3

_No arguments._

### DOWNLOAD_STATISCH

Statischer Test der Komponenten ABS_DSC3

_No arguments._

### DOWNLOAD_FUEHLER_ALLE

Alle Ansprechschwellen u. Impulsraeder ABS_DSC3

_No arguments._

### DOWNLOAD_VAKUUM_LINIE

Befuelroutine in Fertigungslinie ABS_DSC3

_No arguments._

### DOWNLOAD_VAKUUM_REPAIR

Befuelroutine in Nacharbeit ABS_DSC3

_No arguments._

### DOWNLOAD_AKTUATORIK

Aktuatorik Test ABS_DSC3

_No arguments._

### DOWNLOAD_EEPROM

Aktuatorik Test ABS_DSC3

_No arguments._

### DOWNLOAD_FS_RESET

Fehlerspeicher zuruecksetzen ABS_ASC5

_No arguments._

### TEST_D_STELLGLIED

Digitale Stellglieder ansteuern ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | string | Ein = FF, Aus = 00 |
| ST_1 | string | Stellglied 1 |
| BEFEHL_2 | string | Ein = FF, Aus = 00 |
| ST_2 | string | Stellglied 2 |
| W_ZEIT | int | Wartezeit vor Ansteuerung 3. u. 4. Stellglied |
| BEFEHL_3 | string | Ein = FF, Aus = 00 |
| ST_3 | string | Stellglied 3 |
| BEFEHL_4 | string | Ein = FF, Aus = 00 |
| ST_4 | string | Stellglied 4 |

### TEST_D4_STELLGLIED

Digitale Stellglieder ansteuern ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | string | Ein = 01, Aus = 00 |
| ST_1 | string | Stellglied 1 |
| BEFEHL_2 | string | Ein = 01, Aus = 00 |
| ST_2 | string | Stellglied 2 |
| BEFEHL_3 | string | Ein = 01, Aus = 00 |
| ST_3 | string | Stellglied 3 |
| BEFEHL_4 | string | Ein = 01, Aus = 00 |
| ST_4 | string | Stellglied 4 |
| W_ZEIT | int | Wartezeit vor Ansteuerung 3. u. 4. Stellglied |
| BEFEHL_5 | string | Ein = 01, Aus = 00 |
| ST_5 | string | Stellglied 5 |
| BEFEHL_6 | string | Ein = 01, Aus = 00 |
| ST_6 | string | Stellglied 6 |
| BEFEHL_7 | string | Ein = 01, Aus = 00 |
| ST_7 | string | Stellglied 7 |
| BEFEHL_8 | string | Ein = 01, Aus = 00 |
| ST_8 | string | Stellglied 8 |

### TEST_ZUENDWINKEL

Digitale Stellglieder ansteuern ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | string | Ein = FF, Aus = 00 |
| ST_1 | string | Stellglied 1 |
| BEFEHL_2 | string | Ein = FF, Aus = 00 |
| ST_2 | string | Stellglied 2 |
| W_ZEIT | int | Wartezeit vor Ansteuerung 3. u. 4. Stellglied |
| BEFEHL_3 | string | Ein = FF, Aus = 00 |
| ST_3 | string | Stellglied 3 |
| BEFEHL_4 | string | Ein = FF, Aus = 00 |
| ST_4 | string | Stellglied 4 |

### TEST_PUMPENLEISTUNG_VORNE

Test der Pumpenfoerderleistung ABS_DSC3

_No arguments._

### TEST_PUMPENLEISTUNG_HINTEN

Test der Pumpenfoerderleistung ABS_DSC3

_No arguments._

### TEST_A_STELLGLIED

Fuellung ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | int | Max. Stellung Fuellung in % |
| W_ZEIT | int | Wartezeit vor Ansteuerung 3. u. 4. Stellglied |
| BEFEHL_2 | int | Max. Stellung Fuellung in % |

### TEST_FUEHLER_EINZELN

Ansprechschwelle ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| RAD_NR | string | Radnummer |
| A_ZEIT | int | Ausfuehrungszeit |

### TEST_FUEHLER_IMPULS

Test Fuehler u. Impulsrad

| Name | Type | Description |
| --- | --- | --- |
| RAD_NR | string | Radnummer |
| A_ZEIT | int | Ausfuehrungszeit |

### TEST_STATISCH

Statischer Test der Komponenten ABS_DSC3

_No arguments._

### TEST_FUEHLER_ALLE

Alle Ansprechschwellen u. Impulsraeder ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| A_ZEIT | int | Ausfuehrungszeit |

### TEST_VAKUUM_LINIE

Befuelroutine in Fertigungslinie ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| T_ON | int | Einschaltzeit |
| T_OFF | int | Ausschaltzeit |
| ZYKLEN | int | Schaltzyklen |
| ST_1 | string | Stellglied 1 |
| ST_2 | string | Stellglied 2 |
| ST_3 | string | Stellglied 3 |

### TEST_VAKUUM_REPAIR

Befuelroutine in Nacharbeit ABS_DSC3

| Name | Type | Description |
| --- | --- | --- |
| T_ON | int | Einschaltzeit |
| T_OFF | int | Ausschaltzeit |
| ZYKLEN | int | Schaltzyklen |
| A_VENTIL | string | Stellglied 1 |
| ST_1 | string | Stellglied 1 |
| ST_2 | string | Stellglied 2 |
| ST_3 | string | Stellglied 3 |
| ST_4 | string | Stellglied 4 |

### TEST_AKTUATORIK

Statischer Test der Komponenten ABS_DSC3

_No arguments._

### TEST_LENKWINKEL

Lenkwinkel Initialisierung DSC3

| Name | Type | Description |
| --- | --- | --- |
| LFD_NR | int | Laufende Nummer fuer Eintrag in LW-SG und DSC3-SG |

### TEST_EEPROM_LESEN

Schreiben, Lesesn EEPROM

| Name | Type | Description |
| --- | --- | --- |
| INPUT | string | Adresse u. Anzahl |

### TEST_EEPROM_SCHREIBEN

Schreiben, EEPROM

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | Adresse,Anzahl,Daten |

### TEST_FS_SCHREIBEN

Fehlerspeicher zuruecksetzen

_No arguments._

### ABS_SIMULATION_4_KANAL

Simulation ABS5

_No arguments._

### DIAGNOSE_WEITER

Diagnose beenden

_No arguments._

### TEST_DROSSELKLAPPE

Drosselklappen-Reduzierung ABS_ASC5

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
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x02 | CAN Motorleistungssteuerung |
| 0x04 | Drehzahlfuehler hinten links |
| 0x05 | Drehzahlfuehler hinten rechts |
| 0x06 | Drehzahlfuehler vorne rechts |
| 0x07 | Drehzahlfuehler vorne links |
| 0x0E | Ventilrelais Fehler |
| 0x0F | Rueckfoerderpumpen Fehler |
| 0x15 | Steuergeraete Fehler |
| 0x18 | Falsches Zahnrad |
| 0x19 | Bremslichtschalter Leitungsunterbrechung |
| 0x1E | Drehzahlfuehler hinten links |
| 0x1F | Drehzahlfuehler hinten rechts |
| 0x20 | Drehzahlfuehler vorne rechts |
| 0x21 | Drehzahlfuehler vorne links |
| 0x22 | ASC Umschaltventil Vorderachse |
| 0x25 | Steuergeraete Fehler ADS-Teil |
| 0x26 | Positions-Regler ADS-Teil |
| 0x27 | Stellmotor ADS-Teil |
| 0x28 | Drosselklappen-Potentiometer ADS-Teil |
| 0x29 | Lenkwinkel |
| 0x2F | Ventil Auslass hinten links |
| 0x30 | Ventil Auslass hinten rechts |
| 0x31 | Ventil Auslass vorne rechts |
| 0x32 | Ventil Auslass vorne links |
| 0x33 | Ventil Einlass hinten links |
| 0x34 | Ventil Einlass hinten rechts |
| 0x35 | Ventil Einlass vorne rechts |
| 0x36 | Ventil Einlass vorne links |
| 0x37 | Vorlade Ventil Vorderachse |
| 0x38 | CAN Fehler |
| 0x3A | Getriebesteuerung Botschaftsfehler |
| 0x3B | DMER1 Botschaftsfehler |
| 0x3F | V-Vergleich |
| 0x40 | Dauerregelung |
| 0x42 | Spannungsfehler aktive DF |
| 0x45 | DMER2 Botschaftsfehler |
| 0x47 | Lebensdauerueberwachung Motorrelais |
| 0x51 | Druck Sensor Leitung |
| 0x52 | Drehraten Sensor Leitung |
| 0x53 | Querbeschleunigung Sensor Leitung |
| 0x54 | Drehraten Sensor Plausibilitaet |
| 0x55 | Ladekolbeneinheit |
| 0x56 | ASC Umschaltventil Hinterachse |
| 0x57 | Vorlade Ventil Hinterachse |
| 0x58 | Vorlade Pumpe |
| 0x59 | Unterspannung |
| 0x5A | Passivschaltung |
| 0x5B | Lenkwinkel Botschaftsfehler |
| 0x5C | Druck Sensor Plausibilitaet |
| 0x5E | Drehraten Sensor  |
| 0x5F | Einstreuung |
| 0x60 | Aktuatorik |
| 0x61 | Lenkwinkelabgleich notwendig |
| 0x62 | Notbremse drucklos |
| 0x63 | Regler Dauereingriff |
| 0x64 | Querbeschleunigung Sensor |
| 0x67 | Lenkwinkel Berechnung |
| 0x68 | Fehler Lenkwinkel Steuergeraet  |
| 0x69 | Bremslichtschalter Plausibilitaet |
| 0x6A | Querbeschleunigung Sensor |
| 0x6B | Drehraten Sensor |
| 0x6C | SN-Ueberwachung |
| 0x6D | Bandendetest |
| 0x6E | Ueberspannung |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | ASC nicht passiv geschaltet |
| 0x01 | ASC passiv geschaltet |
| 0x02 | ABS-Regelung aktiv |
| 0x03 | ABS-Regelung passiv |
| 0x04 | BLS betaetigt |
| 0x05 | BLS nicht betaetigt |
| 0x06 | ASC-Regelung aktiv |
| 0x07 | ASC-Regelung passiv |
| 0xFF | nicht belegt |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x04 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x05 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x06 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x07 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x2F | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x30 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x31 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x32 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x33 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x34 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x35 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x36 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x0E | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x0F | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x15 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x18 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x1E | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x1F | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x20 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x21 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x03 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x14 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x16 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x1B | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x22 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x23 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x24 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x25 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x26 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x27 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x28 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x39 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x37 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |
| 0x17 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 | 0x07 | 0x06 |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW1_NR | UW1_A | UW1_B |
| --- | --- | --- | --- | --- |
| 0x04 | 0x01 | 0x00 | 256 | 1 |
| 0x05 | 0x01 | 0x00 | 256 | 1 |
| 0x06 | 0x01 | 0x00 | 256 | 1 |
| 0x07 | 0x01 | 0x00 | 256 | 1 |
| 0x2F | 0x01 | 0x00 | 256 | 1 |
| 0x30 | 0x01 | 0x00 | 256 | 1 |
| 0x31 | 0x01 | 0x00 | 256 | 1 |
| 0x32 | 0x01 | 0x00 | 256 | 1 |
| 0x33 | 0x01 | 0x00 | 256 | 1 |
| 0x34 | 0x01 | 0x00 | 256 | 1 |
| 0x35 | 0x01 | 0x00 | 256 | 1 |
| 0x36 | 0x01 | 0x00 | 256 | 1 |
| 0x0E | 0x01 | 0x00 | 256 | 1 |
| 0x0F | 0x01 | 0x00 | 256 | 1 |
| 0x15 | 0x01 | 0x00 | 256 | 1 |
| 0x18 | 0x01 | 0x00 | 256 | 1 |
| 0x1E | 0x01 | 0x00 | 256 | 1 |
| 0x1F | 0x01 | 0x00 | 256 | 1 |
| 0x20 | 0x01 | 0x00 | 256 | 1 |
| 0x21 | 0x01 | 0x00 | 256 | 1 |
| 0x03 | 0x01 | 0x00 | 256 | 1 |
| 0x14 | 0x01 | 0x00 | 256 | 1 |
| 0x16 | 0x01 | 0x00 | 256 | 1 |
| 0x1B | 0x01 | 0x00 | 256 | 1 |
| 0x22 | 0x01 | 0x00 | 256 | 1 |
| 0x23 | 0x01 | 0x00 | 256 | 1 |
| 0x24 | 0x01 | 0x00 | 256 | 1 |
| 0x25 | 0x01 | 0x00 | 256 | 1 |
| 0x26 | 0x01 | 0x00 | 256 | 1 |
| 0x27 | 0x01 | 0x00 | 256 | 1 |
| 0x28 | 0x01 | 0x00 | 256 | 1 |
| 0x39 | 0x01 | 0x00 | 256 | 1 |
| 0x37 | 0x01 | 0x00 | 256 | 1 |
| 0x17 | 0x01 | 0x00 | 256 | 1 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x00 | Fahrzeuggeschwindigkeit | km/h |
| 0xXY | unbekannte Umweltnummer | XY |

### STG_TABELLE

| SIGNAL | BYTE |
| --- | --- |
| MRA | 0x22 |
| VLP1 | 0x24 |
| EVVL | 0x30 |
| AVVL | 0x32 |
| EVVR | 0x34 |
| AVVR | 0x36 |
| EVHR | 0x38 |
| AVHR | 0x3A |
| EVHL | 0x3C |
| AVHL | 0x3E |
| USV1 | 0x4E |
| USV2 | 0x50 |
| VLV1 | 0x52 |
| VLV2 | 0x54 |
| VLP2 | 0x84 |
| SILGK | 0x64 |
| NF-ASC | 0x78 |

### A_VENTIL_TABELLE

| SIGNAL | BYTE |
| --- | --- |
| AVVL | 0x32 |
| AVVR | 0x36 |
| AVHR | 0x3A |
| AVHL | 0x3E |

### E_A_STATUS

| SIGNAL | BYTE |
| --- | --- |
| EIN | 0xFF |
| AUS | 0x00 |

### RAD_NR_TABELLE

| SIGNAL | BYTE |
| --- | --- |
| V_LINKS | 0xA0 |
| V_RECHTS | 0xA2 |
| H_RECHTS | 0xA4 |
| H_LINKS | 0xA6 |

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
