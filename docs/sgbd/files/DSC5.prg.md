# DSC5.prg

## General

|  |  |
| --- | --- |
| File | DSC5.prg |
| Type | PRG |
| Jobs | 37 |
| Tables | 13 |
| Origin | BMW TP-421 Hirsch |
| Revision | 2.6 |
| Author | BMW TP-421 Hirsch |
| ECU Comment | Keine Diagnose bei V > 6 km/h |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Antiblockiersystem u. Dynamisches Stabilitaets Controll 5 E31,E38 |  |  |
| ORIGIN | string | BMW TP-421 Hirsch |  |  |
| REVISION | string | 2.06 |  |  |
| AUTHOR | string | BMW TP-421 Hirsch |  |  |
| COMMENT | string | Keine Diagnose bei V > 6 km/h |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer ABS_DSC5

_No arguments._

### IDENT

Ident-Daten fuer ABS_DSC5

_No arguments._

### FS_LESEN

Fehlerspeicher lesen fuer ABS_DSC5 High-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen fuer ABS_DSC5

_No arguments._

### STATUS_IO_LESEN

Status Eingaenge ABS_DSC5

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |

### COD_LESEN

Status Eingaenge ABS_DSC5

| Name | Type | Description |
| --- | --- | --- |
| ST_ADR | int | Startadresse |
| COD_ZAHL | int | Anzahl Codierdaten |

### COD_SCHREIBEN

Status Eingaenge ABS_DSC5

| Name | Type | Description |
| --- | --- | --- |
| ST_ADR | string | Startadresse |
| COD_WERT_1 | string | 1. Codierwert |
| COD_WERT_2 | string | 2. Codierwert |
| COD_WERT_3 | string | 3. Codierwert |
| COD_WERT_4 | string | 4. Codierwert |
| COD_WERT_5 | string | 5. Codierwert |
| COD_WERT_6 | string | 6. Codierwert |
| COD_WERT_7 | string | 7. Codierwert |
| COD_WERT_8 | string | 8. Codierwert |
| COD_WERT_9 | string | 9. Codierwert |
| COD_WERT_10 | string | 10. Codierwert |
| COD_WERT_11 | string | 11. Codierwert |
| COD_WERT_12 | string | 12. Codierwert |
| COD_WERT_13 | string | 13. Codierwert |
| COD_WERT_14 | string | 14. Codierwert |

### DOWNLOAD_STELLGLIED

Stellglied ansteuern ABS_DSC5

_No arguments._

### DOWNLOAD_D4_STELLGLIED

Stellglied ansteuern ABS_DSC5

_No arguments._

### DOWNLOAD_I_O_DIAGNOSE

I/O-Diagnose ABS_DSC5

_No arguments._

### DOWNLOAD_FUEHLER_EINZELN

Ansprechschwelle u. Impulsrad ABS_DSC5

_No arguments._

### DOWNLOAD_DREHZHAL

Drehzahl

_No arguments._

### DOWNLOAD_STATISCH

Statischer Test der Komponenten ABS_DSC5

_No arguments._

### DOWNLOAD_FUEHLER_ALLE

Alle Ansprechschwellen u. Impulsraeder ABS_DSC5

_No arguments._

### DOWNLOAD_VAKUUM_LINIE

Befuelroutine in Fertigungslinie ABS_DSC5

_No arguments._

### DOWNLOAD_VAKUUM_REPAIR

Befuelroutine in Nacharbeit ABS_DSC5

_No arguments._

### DOWNLOAD_FS_RESET

Fehlerspeicher zuruecksetzen ABS_DSC5

_No arguments._

### TEST_D_STELLGLIED

Digitale Stellglieder ansteuern ABS_DSC5

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

Digitale Stellglieder ansteuern ABS_DSC5

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

Digitale Stellglieder ansteuern ABS_DSC5

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

Test der Pumpenfoerderleistung ABS_DSC5

_No arguments._

### TEST_PUMPENLEISTUNG_HINTEN

Test der Pumpenfoerderleistung ABS_DSC5

_No arguments._

### TEST_A_STELLGLIED

Fuellung ABS_DSC5

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | int | Max. Stellung Fuellung in % |
| W_ZEIT | int | Wartezeit vor Ansteuerung 3. u. 4. Stellglied |
| BEFEHL_2 | int | Max. Stellung Fuellung in % |

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

Ansprechschwelle ABS_DSC5

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

### TEST_DREHZAHL

Test Drehzhal

| Name | Type | Description |
| --- | --- | --- |
| A_ZEIT | int | Ausfuehrungszeit |
| RAD_NR | string | Radnummer |
| GRENZ_SPRUNG | long | Grenzsprung |

### TEST_STATISCH

Statischer Test der Komponenten ABS_DSC5

_No arguments._

### TEST_FUEHLER_ALLE

Alle Ansprechschwellen u. Impulsraeder ABS_DSC5

| Name | Type | Description |
| --- | --- | --- |
| A_ZEIT | int | Ausfuehrungszeit |

### TEST_VAKUUM_LINIE

Befuelroutine in Fertigungslinie ABS_DSC5

| Name | Type | Description |
| --- | --- | --- |
| T_ON | int | Einschaltzeit |
| T_OFF | int | Ausschaltzeit |
| ZYKLEN | int | Schaltzyklen |
| ST_1 | string | Stellglied 1 |
| ST_2 | string | Stellglied 2 |
| ST_3 | string | Stellglied 3 |

### TEST_VAKUUM_REPAIR

Befuelroutine in Nacharbeit ABS_DSC5

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

### TEST_LENKWINKEL

Lenkwinkel Initialisierung ABS_DSC5

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
| 0x02 | EML Fehler |
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
| 0x19 | Bremslichtschalter Leitungsunterbrechung  |
| 0x1E | Drehzahlfuehler hinten links |
| 0x1F | Drehzahlfuehler hinten rechts |
| 0x20 | Drehzahlfuehler vorne rechts |
| 0x21 | Drehzahlfuehler vorne links |
| 0x22 | ASC Umschaltventil |
| 0x29 | Lenkwinkel |
| 0x37 | ASC Absperrventil |
| 0x38 | CAN Fehler |
| 0x17 | ASC Varianten Kodierung |
| 0x3A | EGS Botschafts-Fehler |
| 0x3B | DMER1 Botschafts-Fehler |
| 0x3F | V-Vergleich |
| 0x40 | Dauerregelung / Einsteuerung |
| 0x42 | Versorgungssp. Drehzahlf. (aktive DF), SG-Fehler (passive DF) |
| 0x45 | DMER2 Botschafts-Fehler |
| 0x46 | AHK Fehler |
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

### RAD_NR_TABELLE_2

| SIGNAL | BYTE |
| --- | --- |
| V_LINKS | 0x02 |
| V_RECHTS | 0x00 |
| H_RECHTS | 0x04 |
| H_LINKS | 0x06 |

### CODWERT

| WERT | VARIANTE |
| --- | --- |
| 0x00 | ASC-passiv -> Codierfehler! |
| 0x25 | M50 Schaltgetriebe |
| 0x35 | M50 Automatik |
| 0x06 | M60-B30 Schaltgetriebe |
| 0x16 | M60-B30 Automatik |
| 0x0B | M60-B40 Schaltgetriebe |
| 0x1B | M60-B40 Automatik |
| 0x1D | M73 Automatik |
| 0xXY | unbekannte Codiervariante |

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
