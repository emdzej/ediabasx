# EML3.prg

## General

|  |  |
| --- | --- |
| File | EML3.prg |
| Type | PRG |
| Jobs | 45 |
| Tables | 7 |
| Origin | BMW TI-433 Dennert |
| Revision | 1.69 |
| Author | BMW TP-421 Weber, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EML 3 Siemens |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 1.69 |  |  |
| AUTHOR | string | BMW TP-421 Weber, BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### EDIC_RESET

EDIC-Reset

_No arguments._

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default Init-Job

_No arguments._

### RAM_MC1_LESEN

Beliebige RAM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| RAM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### RAM_MC2_LESEN

Beliebige RAM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| RAM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### EPROM_LESEN

Beliebige EPROM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| EPROM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| EPROM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### IDENT

Ident-Daten fuer DME

_No arguments._

### FS_QUICK_LESEN

Auslesen des QUICK Fehlerspeichers

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### LOGIN

Schutzmechanismus LOGIN

_No arguments._

### SEED_KEY

Schutzmechanismus SEED_KEY

_No arguments._

### STATUS_VARIANTE

Programmierte Variante auslesen

_No arguments._

### PWG_ADAPTION_RESET

Adaptionswert PWG Reset

_No arguments._

### STAT_PWG_LERN

Status fuer PWG Lernvorgang auslesen

_No arguments._

### CODIER_VAR_1_SCHREIBEN

Variante 1 E31 programmieren

_No arguments._

### CODIER_VAR_2_SCHREIBEN

Variante 2 E31 programmieren

_No arguments._

### CODIER_VAR_3_SCHREIBEN

Variante 3 E31 programmieren

_No arguments._

### CODIER_VAR_4_SCHREIBEN

Variante 4 E38 Programmieren

_No arguments._

### CODIER_VAR_5_SCHREIBEN

Variante 5 E38 programmieren

_No arguments._

### CODIER_VAR_6_SCHREIBEN

Variante 6 E38 programmieren

_No arguments._

### CODIER_VAR_7_SCHREIBEN

Variante 7 E38 programmieren

_No arguments._

### CODIER_VAR_8_SCHREIBEN

Variante 8 E38 programmieren

_No arguments._

### CODIER_VAR_9_SCHREIBEN

Variante 9 E38 programmieren

_No arguments._

### CODIER_VAR_A_SCHREIBEN

Variante A E38 programmieren

_No arguments._

### CODIER_VAR_B_SCHREIBEN

Variante 11 E38 programmieren

_No arguments._

### CODIER_VAR_C_SCHREIBEN

Variante 12 E38 programmieren

_No arguments._

### CODIER_VAR_D_SCHREIBEN

Variante 13 E38 programmieren

_No arguments._

### CODIER_VAR_E_SCHREIBEN

Variante 14 E38 programmieren

_No arguments._

### CODIER_VAR_F_SCHREIBEN

Variante 15 E38 programmieren

_No arguments._

### CODIER_VAR_10_SCHREIBEN

Variante 16 E38 programmieren

_No arguments._

### STATUS_PEDALWINKEL

Pedalwinkel

_No arguments._

### STATUS_PWG_LERN_RESTZEIT

Lern Restzeit

_No arguments._

### STATUS_PWG_OLERN

PWG_OLERN

_No arguments._

### STATUS_PWG_ULERN

PWG_ULERN

_No arguments._

### STATUS_W_DK1

W_DK1

_No arguments._

### STATUS_W_DK2

W_DK2

_No arguments._

### STATUS_DK1_P1

DK1_P1

_No arguments._

### STATUS_DK1_P2

DK1_P1

_No arguments._

### STATUS_DK2_P1

DK2_P1

_No arguments._

### STATUS_DK2_P2

DK2_P2

_No arguments._

### STATUS_DIGITAL

Status Schalteingaenge

_No arguments._

### DIAGNOSE_ENDE

Loeschen des Fehlerspeichers

_No arguments._

### STATUS_DK1_FANGBETRIEB

DK1-Fangbetrieb

_No arguments._

### STATUS_DK2_FANGBETRIEB

DK1-Fangbetrieb

_No arguments._

## Tables

### BETRIEBSWMATRIX

| NAME | QUELLE | ZELLE | ORD | TYP | FAKT_A | FAKT_B | EINH |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PEDALWINKEL | RAM2E | 0xF8F5 | -- | 1 | 0.39 | 0 | [%] |
| PWG_T_REST | RAM2E | 0xF965 | -- | 1 | 0.16 | 0 | [s] |
| DK1_P1 | RAM1E | 0xF8A5 | -- | 1 | 0.0196 | 0 | [V] |
| DK1_P2 | RAM2E | 0xF8A5 | -- | 1 | 0.0196 | 0 | [V] |
| DK2_P1 | RAM1E | 0xF8A6 | -- | 1 | 0.0196 | 0 | [V] |
| DK2_P2 | RAM2E | 0xF8A4 | -- | 1 | 0.0196 | 0 | [V] |
| PWG_OLERN | RAM2E | 0xF942 | HL | 1 | 0.1 | 0 | [Grad Phi] |
| PWG_ULERN | RAM2E | 0xF940 | HL | 1 | 0.1 | 0 | [Grad Phi] |
| W_DK1 | RAM1E | 0xF874 | -- | 1 | 1 | 0 | [%] |
| W_DK2 | RAM1E | 0xF875 | -- | 1 | 1 | 0 | [%] |
| STAT_PWG_LERN_MC1 | RAM1E | 0xF960 | -- | 1 | 1 | 0 | HEX |
| STAT_PWG_LERN_MC2 | RAM2E | 0xF960 | -- | 1 | 1 | 0 | HEX |
| VarEEPROM1 | EEPROM1 | 0x01c9 | HL | 1 | 1 | 0 | HEX |
| VarEEPROM2 | EEPROM2 | 0x01c9 | HL | 1 | 1 | 0 | HEX |
| FANG_DK1_1 | EEPROM1 | 0x010A | HL | 1 | 1 | 0 | HEX |
| FANG_DK1_2 | EEPROM1 | 0x010C | HL | 1 | 1 | 0 | HEX |
| FANG_DK2_1 | EEPROM2 | 0x010A | HL | 1 | 1 | 0 | HEX |
| FANG_DK2_2 | EEPROM2 | 0x010C | HL | 1 | 1 | 0 | HEX |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| MC2_S_KD | 2 | 0x02 | 0x02 |
| MC2_S_LL | 2 | 0x01 | 0x01 |
| MC1_SIPFAD | 0 | 0x80 | 0x80 |
| MC2_SIPFAD | 0 | 0x80 | 0x80 |
| MC1_BTS | 0 | 0x40 | 0x40 |
| MC2_BLS | 0 | 0x40 | 0x40 |
| S_T_SCHA | 0 | 0x20 | 0x20 |
| S_T_AUS | 3 | 0x10 | 0x10 |
| S_T_EINP | 3 | 0x04 | 0x04 |
| S_T_EINM | 3 | 0x08 | 0x08 |
| S_T_WA | 3 | 0x02 | 0x02 |

### FORTTEXTE

| ORT | ORTTEXT | UW_1 | UW_2 | UW_3 |
| --- | --- | --- | --- | --- |
| 0x00 | -- | 0x00 | 0x00 | 0x00 |
| 0x01 | Minimalwertfehler bei DK 1, Poti 1 | 0x01 | 0x02 | 0x03 |
| 0x02 | Maximalwertfehler bei DK 1, Poti 1 | 0x01 | 0x02 | 0x03 |
| 0x03 | Minimalwertfehler bei DK 1, Poti 2 | 0x01 | 0x02 | 0x03 |
| 0x04 | Maximalwertfehler bei DK 1, Poti 2 | 0x01 | 0x02 | 0x03 |
| 0x05 | Minimalwertfehler bei DK 2, Poti 1 | 0x01 | 0x02 | 0x03 |
| 0x06 | Maximalwertfehler bei DK 2, Poti 1 | 0x01 | 0x02 | 0x03 |
| 0x07 | Minimalwertfehler bei DK 2, Poti 2 | 0x01 | 0x02 | 0x03 |
| 0x08 | Maximalwertfehler bei DK 2, Poti 2 | 0x01 | 0x02 | 0x03 |
| 0x09 | Differenz der DK-Poti Versorgungsspannung 1 | 0x01 | 0x02 | 0x03 |
| 0x0A | Differenz der DK-Poti Versorgungsspannung 2 | 0x01 | 0x02 | 0x03 |
| 0x0B | Vergleichsfehler Poti 1/2 bei DK 1, Minimalwert | 0x01 | 0x02 | 0x03 |
| 0x0C | Vergleichsfehler Poti 1/2 bei DK 1, Maximalwert | 0x01 | 0x02 | 0x03 |
| 0x0D | Vergleichsfehler Poti 1/2 bei DK 2, Minimalwert | 0x01 | 0x02 | 0x03 |
| 0x0E | Vergleichsfehler Poti 1/2 bei DK 2, Maximalwert | 0x01 | 0x02 | 0x03 |
| 0x14 | Fehler SG-Hardware bei PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x15 | Fehler SG-Hardware bei PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x16 | Fehler SG-Hardware bei PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x17 | Fehler SG-Hardware bei PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x18 | Fehler SG-Hardware bei PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x19 | Fehler SG-Hardware bei PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x1A | Fehler Komponente oder SG-Hardware bei PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x1B | Fehler Komponente oder SG-Hardware bei PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x1C | Fehler Komponente oder SG Hardware bei PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x1D | Fehler Komponente oder SG-Hardware bei PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x1E | Fehler Komponente oder SG-Hardware bei PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x1F | Fehler Komponente oder SG-Hardware bei PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x20 | Fehler Komponente od. SG-Hardware bei PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x21 | Fehler Komponente od. SG-Hardware bei PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x22 | Fehler Komponente od. SG-Hardware bei PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x23 | Fehler Komponente od. SG-Hardware bei PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x24 | Fehler Komponente od. SG-Hardware bei PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x25 | Fehler Komponente od. SG-Hardware bei PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x26 | Fehler lineare Unabhaengigkeit PWG 1, PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x27 | Fehler lineare Unabhaengigkeit PWG 1, PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x28 | Fehler lineare Unabhaengigkeit PWG 2, PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x29 | Fehler lineare Unabhaengigkeit PWG 1, PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x2A | Fehler lineare Unabhaengigkeit PWG 1, PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x2B | Fehler lineare Unabhaengigkeit PWG 2, PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x2C | Differenzfehler PWG 1/2 | 0x01 | 0x02 | 0x03 |
| 0x2D | Differenzfehler PWG 1/3 | 0x01 | 0x02 | 0x03 |
| 0x2E | Differenzfehler PWG 2/3 | 0x01 | 0x02 | 0x03 |
| 0x2F | Differenzfehler PWG 1/2 | 0x01 | 0x02 | 0x03 |
| 0x30 | Differenzfehler PWG 1/3 | 0x01 | 0x02 | 0x03 |
| 0x31 | Differenzfehler PWG 2/3 | 0x01 | 0x02 | 0x03 |
| 0x32 | ungueltige PWG Basisadaptionswerte im EEPROM 1 | 0x01 | 0x02 | 0x03 |
| 0x33 | ungueltige PWG Basisadaptionswerte im EEPROM 2 | 0x01 | 0x02 | 0x03 |
| 0x34 | Zuordnung PWG 3 fehlerhaft | 0x01 | 0x02 | 0x03 |
| 0x35 | Zuordnung PWG 3 fehlerhaft | 0x01 | 0x02 | 0x03 |
| 0x36 | unplausibler Spannungswert von PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x37 | unplausibler Spannungswert von PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x38 | unplausibler Spannungswert von PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x39 | unplausibler Spannungswert von PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x3A | unplausibler Spannungswert von PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x3B | unplausibler Spannungswert von PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x3C | unplausibles Oszillator-Signal von PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x3D | unplausibles Oszillator-Signal von PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x3E | unplausibles Oszillator-Signal von PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x3F | unplausibles Oszillator-Signal von PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x40 | unplausibles Oszillator-Signal von PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x41 | unplausibles Oszillator-Signal von PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x42 | Fehler redundante Oszillatorabschaltung (im SG)  PWG 1 | 0x01 | 0x02 | 0x03 |
| 0x43 | Fehler redundante Oszillatorabschaltung (im SG)  PWG 2 | 0x01 | 0x02 | 0x03 |
| 0x44 | Fehler redundante Oszillatorabschaltung (im SG)  PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x45 | Fehler redundante Oszillatorabschaltung (im SG)  PWG 3 | 0x01 | 0x02 | 0x03 |
| 0x50 | EML - CAN Sendefehler | 0x01 | 0x02 | 0x03 |
| 0x51 | DME_R2, DME_L2, EGS, ASC   CAN - Empfangsfehler | 0x01 | 0x02 | 0x03 |
| 0x52 | DME_R1, DME_L1, CAN Empfangsfehler od. fal. CAN Stand | 0x01 | 0x02 | 0x03 |
| 0x53 | CAN nicht betriebsbereit | 0x01 | 0x02 | 0x03 |
| 0x56 | Fehler beim DK1 Soll- Istvergleich | 0x01 | 0x02 | 0x03 |
| 0x57 | Fehler beim DK2 Soll- Istvergleich | 0x01 | 0x02 | 0x03 |
| 0x58 | Fehler beim DK2 Soll- Istvergleich | 0x01 | 0x02 | 0x03 |
| 0x59 | Fehler beim DK1 Soll- Istvergleich | 0x01 | 0x02 | 0x03 |
| 0x5A | Unplausible DK-Lernwerte | 0x01 | 0x02 | 0x03 |
| 0x5B | Unplausible DK-Lernwerte | 0x01 | 0x02 | 0x03 |
| 0x5C | Fehler beim Sollwertvrgleich | 0x01 | 0x02 | 0x03 |
| 0x5D | Fehler beim Sollwertvrgleich | 0x01 | 0x02 | 0x03 |
| 0x64 | Steuergeraetefehler Rechner 1 | 0x01 | 0x02 | 0x03 |
| 0x65 | Steuergeraetefehler Rechner 2 | 0x01 | 0x02 | 0x03 |
| 0x66 | MC1 EEPROM Fehler | 0x01 | 0x02 | 0x03 |
| 0x67 | MC2 EEPROM Fehler | 0x01 | 0x02 | 0x03 |
| 0x68 | Checksummenfehler im EEPROM - Fehlerspeicher | 0x01 | 0x02 | 0x03 |
| 0x69 | Datenaustauschfehler in der Initialisierung | 0x01 | 0x02 | 0x03 |
| 0x6A | Datenaustauschfehler im Normalbetrieb | 0x01 | 0x02 | 0x03 |
| 0x6B | Datenaustauschfehler in der Initialisierung | 0x01 | 0x02 | 0x03 |
| 0x6C | Datenaustauschfehler im Normalbetrieb | 0x01 | 0x02 | 0x03 |
| 0x70 | Fehler FGR-Bedienhebel oder Multifunktionslenkrad | 0x01 | 0x02 | 0x03 |
| 0x71 | Fehler FGR Geschwindigkeitswertvom ASC unplausibel | 0x01 | 0x02 | 0x03 |
| 0x72 | Kickdown Schalterzustand unplausibel | 0x01 | 0x02 | 0x03 |
| 0x73 | Fehler Bremsschalter (BLS d. BTS) | 0x01 | 0x02 | 0x03 |
| 0x74 | Fehler Bremsschalter (BTS d. BLS) | 0x01 | 0x02 | 0x03 |
| 0x75 | Fehler ext. Sicherheitspfad zur DME rechts | 0x01 | 0x02 | 0x03 |
| 0x76 | Fehler ext. Sicherheitspfad zur DME links | 0x01 | 0x02 | 0x03 |
| 0x77 | Fehler bei Leerlauf-Quittierung durch DME_R ueber CAN | 0x01 | 0x02 | 0x03 |
| 0x78 | Fehler bei Leerlauf-Quittierung durch DME_L ueber CAN | 0x01 | 0x02 | 0x03 |
| 0x79 | Fehler bei Sicherheitspfad-Quittierung durch DME_R ueber CAN | 0x01 | 0x02 | 0x03 |
| 0x7A | Fehler bei Sicherheitspfad-Quittierung durch DME_L ueber CAN | 0x01 | 0x02 | 0x03 |
| 0x7B | Fehler bei Quittierung Status Notabschaltung durch DME_R ueber CAN | 0x01 | 0x02 | 0x03 |
| 0x7C | Fehler bei Quittierung Status Notabschaltung durch DME_L ueber CAN | 0x01 | 0x02 | 0x03 |
| 0x7D | Umschaltung Leerlaufregelung oder Ersatzwert | 0x01 | 0x02 | 0x03 |
| 0x7E | Verknuepfung ASC-MSR unpausibel (ASC-SG Fehler | 0x01 | 0x02 | 0x03 |
| 0x80 | Poti-Offsetfehler DK 1 | 0x01 | 0x02 | 0x03 |
| 0x81 | Poti-Offsetfehler DK 2 | 0x01 | 0x02 | 0x03 |
| 0x82 | DK1-Sprungfehler (Sonderinitialisierung) | 0x01 | 0x02 | 0x03 |
| 0x83 | DK2-Sprungfehler (SM Notinitialisierung) | 0x01 | 0x02 | 0x03 |
| 0x84 | DK1-Federtestfehler (SM Sonderinitialisierung) | 0x01 | 0x02 | 0x03 |
| 0x85 | DK2-Federtestfehler (SM Notinitialisierung) | 0x01 | 0x02 | 0x03 |
| 0x86 | Freigabenfehler ueber Voterlogik (SG-Fehler)   | 0x01 | 0x02 | 0x03 |
| 0x87 | Ueberwacherfehler in der INI | 0x01 | 0x02 | 0x03 |
| 0x88 | Poti-Offsetfehler DK 2 | 0x01 | 0x02 | 0x03 |
| 0x89 | Poti-Offsetfehler DK 1 | 0x01 | 0x02 | 0x03 |
| 0x8A | DK1-Sprungfehler (Sonderinitialisierung) | 0x01 | 0x02 | 0x03 |
| 0x8B | DK2-Sprungfehler (SM Notinitialisierung) | 0x01 | 0x02 | 0x03 |
| 0x8C | DK1-Federtestfehler (SM Sonderinitialisierung) | 0x01 | 0x02 | 0x03 |
| 0x8D | DK2-Federtestfehler (SM Notinitialisierung) | 0x01 | 0x02 | 0x03 |
| 0x8E | Freigabenfehler ueber Voterlogik (SG-Fehler)   | 0x01 | 0x02 | 0x03 |
| 0x8F | Ueberwacherfehler in der INI | 0x01 | 0x02 | 0x03 |
| 0x90 | Fehler Variante bei MC 1 | 0x01 | 0x02 | 0x03 |
| 0x91 | Fehler Variante bei MC 2 | 0x01 | 0x02 | 0x03 |
| 0x98 | Fehler Diagnose Schrittmotor-IC | 0x01 | 0x02 | 0x03 |
| 0x99 | Fehler Diagnose Schrittmotor-IC | 0x01 | 0x02 | 0x03 |
| 0x9A | Fehler Diagnose Schrittmotor-IC | 0x01 | 0x02 | 0x03 |
| 0x9B | Fehler Diagnose Schrittmotor-IC | 0x01 | 0x02 | 0x03 |
| 0x9C | Fehler Diagnose Schrittmotor-IC | 0x01 | 0x02 | 0x03 |
| 0x9D | Fehler Diagnose Schrittmotor-IC | 0x01 | 0x02 | 0x03 |
| 0x9E | Fehler Diagnose Schrittmotor-IC | 0x01 | 0x02 | 0x03 |
| 0x9F | Fehler Diagnose Schrittmotor-IC | 0x01 | 0x02 | 0x03 |
| 0xXY | unbekannter Fehlerort | 0x00 | 0x00 | 0x00 |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0x04 | 0x00 | 0x05 | 0x06 | 0x07 | 0x00 | 0x00 | 0x09 | 0x08 |
| 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY | 0xXY |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x03 | Unterbrechung |
| 0x04 | Plausibilitaetsfehler |
| 0x05 | OBDII - relevant |
| 0x06 | Rohsignalueberwachung |
| 0x07 | Messamplitudenueberwachung |
| 0x08 | Fehler sporadisch |
| 0x09 | Fehler statisch |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | UWF_A | UWF_B |
| --- | --- | --- | --- | --- |
| 0x00 | -- | ---- | 0 | 0 |
| 0x01 | UM1 | [1] | 1 | 0 |
| 0x02 | UW2 | [1] | 1 | 0 |
| 0x03 | UW3 | [1] | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | -- | 1 | 99 |

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
