# ABD5.prg

## General

|  |  |
| --- | --- |
| File | ABD5.prg |
| Type | PRG |
| Jobs | 30 |
| Tables | 11 |
| Origin | BMW TP-421 Hirsch |
| Revision | 2.6 |
| Author | BMW TP-421 Hirsch |
| ECU Comment | Keine Diagnose bei v > 6km/h |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Antiblockiersystem u. Autom. Stabilitaets Control 5 E34/16 |  |  |
| ORIGIN | string | BMW TP-421 Hirsch |  |  |
| REVISION | string | 2.06 |  |  |
| AUTHOR | string | BMW TP-421 Hirsch |  |  |
| COMMENT | string | Keine Diagnose bei v > 6km/h |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer ABS_ABD5

_No arguments._

### IDENT

Ident-Daten fuer ABS_ABD5

_No arguments._

### FS_LESEN

Fehlerspeicher lesen fuer ABS_ABD5 High-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen fuer ABS_ABD5

_No arguments._

### STATUS_IO_LESEN

Status Eingaenge ABS_ABD5

_No arguments._

### DOWNLOAD_STELLGLIED

Stellglied ansteuern ABS_ABD5

_No arguments._

### DOWNLOAD_D4_STELLGLIED

Stellglied ansteuern ABS_ASC5

_No arguments._

### DOWNLOAD_I_O_DIAGNOSE

I/O-Diagnose ABS_ABD5

_No arguments._

### DOWNLOAD_FUEHLER_EINZELN

Ansprechschwelle u. Impulsrad ABS_ABD5

_No arguments._

### DOWNLOAD_STATISCH

Statischer Test der Komponenten ABS_ABD5

_No arguments._

### DOWNLOAD_FUEHLER_ALLE

Alle Ansprechschwellen u. Impulsraeder ABS_ABD5

_No arguments._

### DOWNLOAD_VAKUUM_LINIE

Befuelroutine in Fertigungslinie ABS_ABD5

_No arguments._

### DOWNLOAD_VAKUUM_REPAIR

Befuelroutine in Nacharbeit ABS_ABD5

_No arguments._

### DOWNLOAD_FS_RESET

Fehlerspeicher zuruecksetzen ABS_ABD5

_No arguments._

### TEST_D_STELLGLIED

Digitale Stellglieder ansteuern ABS_ABD5

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

Digitale Stellglieder ansteuern ABS_ASC5

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

### TEST_PUMPENLEISTUNG_VORNE

Test der Pumpenfoerderleistung ABS_ASC5

_No arguments._

### TEST_PUMPENLEISTUNG_HINTEN

Test der Pumpenfoerderleistung ABS_ASC5

_No arguments._

### TEST_I_O_DIAGNOSE

I/O-Diagnose

| Name | Type | Description |
| --- | --- | --- |
| BEFEHL_1 | string | Ein = FF, Aus = 00 oder Analogwert |
| KANAL_1 | string | I/O Kanalnummer |
| BEFEHL_2 | string | Ein = FF, Aus = 00 oder Analogwert |
| KANAL_2 | string | I/O Kanalnummer |
| BEFEHL_3 | string | Ein = FF, Aus = 00 oder Analogwert |
| KANAL_3 | string | I/O Kanalnummer |
| BEFEHL_4 | string | Ein = FF, Aus = 00 oder Analogwert |
| KANAL_4 | string | I/O Kanalnummer |

### TEST_FUEHLER_EINZELN

Ansprechschwelle ABS_ABD5

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

Statischer Test der Komponenten ABS_ABD5

_No arguments._

### TEST_FUEHLER_ALLE

Alle Ansprechschwellen u. Impulsraeder ABS_ABD5

| Name | Type | Description |
| --- | --- | --- |
| A_ZEIT | int | Ausfuehrungszeit |

### TEST_VAKUUM_LINIE

Befuelroutine in Fertigungslinie ABS_ABD5

| Name | Type | Description |
| --- | --- | --- |
| T_ON | int | Einschaltzeit |
| T_OFF | int | Ausschaltzeit |
| ZYKLEN | int | Schaltzyklen |
| ST_1 | string | Stellglied 1 |
| ST_2 | string | Stellglied 2 |
| ST_3 | string | Stellglied 3 |

### TEST_VAKUUM_REPAIR

Befuelroutine in Nacharbeit ABS_ABD5

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

### TEST_FS_SCHREIBEN

Fehlerspeicher zuruecksetzen

_No arguments._

### ABS_SIMULATION_4_KANAL

Simulation ABS5

_No arguments._

### DIAGNOSE_WEITER

Diagnose beenden

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
| 0x02 | DKI Fehler |
| 0x04 | Drehzahlfuehler hinten links |
| 0x05 | Drehzahlfuehler hinten rechts |
| 0x06 | Drehzahlfuehler vorne rechts |
| 0x07 | Drehzahlfuehler vorne links |
| 0x2F | ABS Ventil Auslass hinten links oder Hinterachse |
| 0x30 | ABS Ventil Auslass hinten rechts |
| 0x31 | ABS Ventil Auslass vorne rechts |
| 0x32 | ABS Ventil Auslass vorne links |
| 0x33 | ABS Ventil Einlass hinten links oder Hinterachse |
| 0x34 | ABS Ventil Einlass hinten rechts |
| 0x35 | ABS Ventil Einlass vorne rechts |
| 0x36 | ABS Ventil Einlass vorne links |
| 0x0E | Ventilrelais Fehler |
| 0x0F | Rueckfoerderpumpen Fehler |
| 0x15 | Steuergeraete Fehler |
| 0x18 | Falsches Zahnrad an einem der 4 Raeder |
| 0x19 | Bremslichtschalter Leitungsunterbrechung |
| 0x1E | Drehzahlfuehler hinten links |
| 0x1F | Drehzahlfuehler hinten rechts |
| 0x20 | Drehzahlfuehler vorne rechts |
| 0x21 | Drehzahlfuehler vorne links |
| 0x03 | Zuendwinkel Verstellung |
| 0x16 | TD Signal Fehler |
| 0x1B | Leerlaufdrehzahlanhebung Rueckmeldung |
| 0x1D | Kupplungsschalter |
| 0x22 | ABD Umschaltventil |
| 0x23 | SN Schalter (Bremsfluessigkeitsniveau) |
| 0x24 | Zuendausblendung |
| 0x37 | ABD Absperrventil |
| 0x3F | V-Vergleich |
| 0x40 | Dauerregelung / Einsteuerung |
| 0x3C | Temperaturnachlauf |
| 0x3D | Zentralsperre |
| 0x3E | Ueberhitzung |
| 0x41 | EMS-Rueckmeldung |
| 0x42 | Versorgungssp. Drehzahlf. (aktive DF), SG-Fehler (passive DF) |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | ABS-Regelung aktiv |
| 0x01 | ABS-Regelung passiv |
| 0x02 | BLS betaetigt |
| 0x03 | BLS nicht betaetigt |
| 0x04 | ABD-Regelung aktiv |
| 0x05 | ABD-Regelung passiv |
| 0xFF | nicht belegt |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 |
| --- | --- | --- | --- | --- | --- | --- |
| 0x02 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x04 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x05 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x06 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x07 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x2F | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x30 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x31 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x32 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x33 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x34 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x35 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x36 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x0E | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x0F | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x15 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x18 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x1E | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x1F | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x20 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x21 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x03 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x16 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x1B | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x1D | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x22 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x23 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x24 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x37 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x3F | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x40 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x3C | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x3D | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x3E | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x41 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |
| 0x42 | 0x01 | 0x00 | 0x03 | 0x02 | 0x05 | 0x04 |

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
| 0x42 | 0x01 | 0x00 | 256 | 1 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x00 | Fahrzeuggeschwindigkeit | km/h |
| 0xXY | unbekannte Umweltbedingung | XY |

### STG_TABELLE

| SIGNAL | BYTE |
| --- | --- |
| MRA | 0x22 |
| EVVL | 0x30 |
| AVVL | 0x32 |
| EVVR | 0x34 |
| AVVR | 0x36 |
| EVHR | 0x38 |
| AVHR | 0x3A |
| EVHL | 0x3C |
| AVHL | 0x3E |
| USV | 0x4E |
| ASV | 0x52 |
| LDA | 0x70 |
| ZWV | 0x74 |
| ZA | 0x76 |
| EMS | 0x80 |

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
