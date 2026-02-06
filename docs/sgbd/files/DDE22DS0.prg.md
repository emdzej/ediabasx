# DDE22DS0.prg

## General

|  |  |
| --- | --- |
| File | DDE22DS0.prg |
| Type | PRG |
| Jobs | 73 |
| Tables | 8 |
| Origin | BMW TI-433 Schiefer |
| Revision | 1.26 |
| Author | BMW TP-421 Weber, BMW TP-421 Teepe, BMW TP-421 Mellersh, BMW TI-433 Schiefer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DDE 2.2 fuer M51 E38 / E39 |  |  |
| ORIGIN | string | BMW TI-433 Schiefer |  |  |
| REVISION | string | 1.26 |  |  |
| AUTHOR | string | BMW TP-421 Weber, BMW TP-421 Teepe, BMW TP-421 Mellersh, BMW TI-433 Schiefer |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### EDIC_RESET

EDIC-Reset

_No arguments._

### initialisierung

Default Init-Job

_No arguments._

### INFO

Information SGBD

_No arguments._

### ISN_LESEN

_No description._

_No arguments._

### ISN_LESEN_ROH

_No description._

_No arguments._

### RAM_LESEN

Beliebige RAM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| RAM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### ROM_LESEN

Beliebige EPROM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| ROM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| ROM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### EEPROM_LESEN

Beliebige EPROM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| EEPROM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| EEPROM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### ADC_LESEN

Beliebigen ADC Kanal auslesen

| Name | Type | Description |
| --- | --- | --- |
| ADC_KANAL | int | Uebergabeparameter, Kanal fuer ADC Lesen |

### EEPROM_SCHREIBEN

Beliebige EEPROM Zellen mit 02 beschreiben

| Name | Type | Description |
| --- | --- | --- |
| EEPROM_SCHREIBEN_ADRESSE_DATEN | binary | Uebergabeparameter, Startadresse High-Middle-Low und Daten |

### IDENT

Ident-Daten fuer DME

_No arguments._

### ECU_CONFIG

Ident-Daten fuer DME

_No arguments._

### CODIER_VARIANTE_LESEN

Auslesen des Varianten - Steuerwort

_No arguments._

### ABGAS_VARIANTE_LESEN

Auslesen der Abgasvariante

_No arguments._

### STATUS_CODIER_CHECKSUMME

Codier - Checksumme abfragen

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

### FS_SHADOW_LESEN

Auslesen des SCHADOW Fehlerspeichers

_No arguments._

### STATUS_SPRITZBEGINN_SOLL

Job Spritzbeginn Soll

_No arguments._

### STATUS_SPRITZBEGINN_IST

Job Spritzbeginn IST

_No arguments._

### STATUS_MENGE_AKTUELL

Menge Aktuell

_No arguments._

### STATUS_PWG

PWG

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

PWG

_No arguments._

### STATUS_FGR

PWG

_No arguments._

### STATUS_LADEDRUCK

Ladedruck

_No arguments._

### STATUS_SCHIEBERWEG_IST

Schieberweg IST

_No arguments._

### STATUS_SCHIEBERWEG_SOLL

Schieberweg SOLL

_No arguments._

### STATUS_LUFTMASSE

LUFTMASSE

_No arguments._

### STATUS_LL_ABGLEICH

LL_Abgleich

_No arguments._

### STATUS_GM_ABGLEICH

Grundmengenabgleich

_No arguments._

### STATUS_SM_ABGLEICH

Startmengenabgleich

_No arguments._

### STATUS_KUEHLMITTELTEMPERATUR

Job Kuehlmitteltemperatur

_No arguments._

### STATUS_MOTORTEMPERATUR

Job Kuehlmitteltemperatur

_No arguments._

### STATUS_MOTORDREHZAHL

Motordrehzahl auslesen

_No arguments._

### STATUS_OELTEMPERATUR

LADELUFTtemperatur

_No arguments._

### STATUS_KRAFTSTOFFTEMPERATUR

Ansauglufttemperatur

_No arguments._

### STATUS_UBATT

Batteriespannung

_No arguments._

### STATUS_GESCHWINDIGKEIT

Fahrzeuggeschwindigkeit

_No arguments._

### STATUS_AGR_ABGLEICH

AGR - Abgleich

_No arguments._

### STATUS_FAHRVER_MENGE

Fahrverhalten Menge

_No arguments._

### STATUS_BEGRENZ_MENGE

Begrenzungsmenge

_No arguments._

### STATUS_SOLL_LL_DREHZ

Soll LL-Drehzahl

_No arguments._

### STATUS_ATMOS_DRUCK

Atmosphaerendruck

_No arguments._

### STATUS_MW1

Messwert BLock 1 auslesen

_No arguments._

### STATUS_MW2

Messwerte (einzelne RAM - Zellen) auslesen

_No arguments._

### STATUS_MW3

Messwerte (einzelne RAM - Zellen) auslesen

_No arguments._

### STATUS_MW4

Messwerte (einzelne RAM - Zellen) auslesen

_No arguments._

### STATUS_MW5

Messwerte (einzelne RAM - Zellen) auslesen

_No arguments._

### STATUS_DIGITAL

Status Schalteingaenge

_No arguments._

### STATUS_DIGITAL1

Status Schalteingaenge

_No arguments._

### STEUERN_ELAB

ELAB  ansteuern

_No arguments._

### STEUERN_SB_VENTIL

Magnetventil fuer Spritzbeginn ansteuern

_No arguments._

### STEUERN_AGR_STELLER

AGR Steller ansteuern

_No arguments._

### STEUERN_GLUEH_RELAIS

Glueg Relais ansteuern

_No arguments._

### STEUERN_DIAGNOSE_ANZEIGE

Diagnoseanzeige ansteuern

_No arguments._

### STEUERN_KLIMA_KOMP

Klimakompressor ansteuern

_No arguments._

### STEUERN_VORGLUEHLAMPE

Vorgluehlampe ansteuern

_No arguments._

### STEUERN_FGR_LAMPE

FGR - Lampe ansteuern

_No arguments._

### STEUERN_LADER

Lader ansteuern

_No arguments._

### STEUERN_MOTORLAGER

FGR - Lampe ansteuern

_No arguments._

### STEUERN_VORFOERDERPUMPE

Vorfoerderpumpe ansteuern

_No arguments._

### STEUERN_EKP

Vorfoerderpumpe ansteuern

_No arguments._

### DIAGNOSE_ENDE

Loeschen des Fehlerspeichers

_No arguments._

### LOGIN_REQUEST

Freigabe fuer EEP-Funktionen

_No arguments._

### ABGLEICHWERTE_SCHREIBEN

Beschreiben des internen Speichers mit den motorspezifischen Abgleichdaten

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_ANZAHL | int | Anzahl der zu schreibenden Abgleichdatenbytes ohne die Pruefziffer |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten in folgendem Format z.B. 01 02 AB FF ... <PZ> Datenbytes - 2-stellige Hex-Werte, jeweils gefolgt von einem (1) Leerzeichen - Wertebereich: 00 - FF - nur Grossbuchstaben A - F sind erlaubt Pruefziffer <PZ>: - 1-stelliges Zeichen - Wertebereich: 0 - 9, A - Z - nur Grossbuchstaben A - Z sind erlaubt |

### ABGLEICHWERTE_LESEN

Lesen des EEPROM-Speichers ab Adresse 0x8022

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_LESEN_ANZAHL | int | Anzahl der zu lesenden Bytes |

### ABGLEICHFLAG_SCHREIBEN

Beschreiben des internen Speichers mit den motorspezifischen Abgleichdaten

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHFLAG_SCHREIBEN_FLAG | string | ABGLEICH_IO : 0x01 ABGLEICH_NIO: 0xFF |

### ABGLEICHFLAG_LESEN

Lesen des EEPROM-Speichers ab Adresse 0x0032

_No arguments._

### ABGLEICH_LL_DREHZAHL_770

_No description._

_No arguments._

### STATUS_LL_DREHZAHL_770

_No description._

_No arguments._

### EEPROM_BYTE_AENDERN

Beliebige EPROM - Zellen aendern

| Name | Type | Description |
| --- | --- | --- |
| EEPROM_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| EEPROM_AENDERN_BYTE | int | Uebergabeparameter, BYTE zum verundern/verodern |
| EEPROM_AENDERN_OPER | string | Uebergabeparameter, Operator- "AND", "OR", "XOR" |

### EEPROM_BYTE_ABFRAGE

Beliebige EPROM - Zellen abfragen

| Name | Type | Description |
| --- | --- | --- |
| EEPROM_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |

## Tables

### BETRIEBSWMATRIX

| NAME | QUELLE | ZELLE | ORD | TYP | FAKT_A | FAKT_B | EINH |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nmot | RAM1E | 0x2FB61 | -- | 1 | 22.745 | 0 | 1/min |
| Sp_soll | RAM1E | 0x2FB62 | -- | 1 | 0.0784 | 0 | Grad KW |
| Sp_ist | RAM1E | 0x2FB63 | -- | 1 | 0.0784 | 0 | Grad KW |
| Geschwindigkeit | RAM1E | 0x2FB64 | -- | 1 | 0.9412 | 0 | km/h |
| Menge_ak | RAM1E | 0x2FB65 | -- | 1 | 0.1686 | 0 | mg/Hub |
| PWG_wunsch | RAM1E | 0x2FB5E | -- | 1 | 19.6078 | 0 | mV |
| PWG_wunsch_2 | RAM1E | 0x2FB5E | -- | 1 | 0.0196078 | 0 | V |
| FGR_wunsch | RAM1E | 0x2FB68 | -- | 1 | 0.39216 | 0 | % |
| Lade_druck | RAM1E | 0x2FB69 | -- | 1 | 9.80392 | 125 | hPa |
| Schieberweg_soll | RAM1E | 0x2FB6A | -- | 1 | 19.6078 | 0 | -- |
| Schieberweg_ist | RAM1E | 0x2FB6B | -- | 1 | 19.6078 | 0 | mV |
| Ubatt | RAM1E | 0x2FB76 | -- | 1 | 0.0647 | 0 | Volt |
| Kuehlm_temp | RAM1E | 0x2FB6F | -- | 1 | -0.6863 | 135 | -- |
| Oel_temp | RAM1E | 0x2FB71 | -- | 1 | 0.7647 | -40 | Grad C |
| Kraftst_temp | RAM1E | 0x2FB70 | -- | 1 | 0.4314 | 0 | Grad C |
| LUFTMASSE | RAM1E | 0x2FB67 | -- | 1 | 3.0 | 0 | kg/h |
| Leerlaufabgleich | RAM1E | 0x2FB7C | -- | 1 | 22.745 | -2911 | 1/min |
| Startme_abgleich | RAM1E | 0x2FB7E | -- | 1 | 0.0843 | -10.75 | mg/Hub |
| Volme_abgleich | RAM1E | 0x2FB7D | -- | 1 | 0.7818 | -100 | mg/Hub |
| AGR_abgleich | RAM1E | 0x2FB7F | -- | 1 | 5 | -640 | mg/Hub |
| Fahrver_menge | RAM1E | 0x2FB72 | -- | 1 | 0.2 | 0 | mg/Hub |
| Begrenz_menge | RAM1E | 0x2FB74 | -- | 1 | 0.2 | 0 | mg/Hub |
| Soll_ll_drehz | RAM1E | 0x2FB80 | -- | 1 | 22.745 | 0 | 1/min |
| Atm_druck | RAM1E | 0x2FB77 | -- | 1 | 9.8039 | 125 | hPa |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| S_PWGL | 0 | 0x40 | 0x40 |
| S_BRL | 0 | 0x80 | 0x80 |
| S_DWA | 1 | 0x02 | 0x02 |
| S_BRT | 1 | 0x20 | 0x20 |
| S_PN | 1 | 0x40 | 0x40 |
| A_KO | 3 | 0x20 | 0x20 |
| S_DIA | 3 | 0x08 | 0x08 |
| S_AC | 3 | 0x40 | 0x40 |
| S_KO | 3 | 0x80 | 0x80 |
| S_T_SCHA | 2 | 0x01 | 0x01 |
| S_T_AUS | 2 | 0x01 | 0x00 |
| S_T_EINP | 2 | 0x02 | 0x02 |
| S_T_EINM | 2 | 0x05 | 0x05 |
| S_T_WA | 2 | 0x08 | 0x08 |
| S_T_BRE | 2 | 0x20 | 0x20 |
| A_T_KUP | 2 | 0x40 | 0x40 |

### FORTTEXTE

| ORT | ORTTEXT | UW_1 | UW_2 |
| --- | --- | --- | --- |
| 0x00 | -- | 0x00 | 0x00 |
| 0x01 | Mengensteller | 0x01 | 0x02 |
| 0x03 | Elektrisches Abschaltventil (ELAB) | 0x01 | 0x03 |
| 0x05 | Nadelbewegungsfuehler | 0x01 | 0x03 |
| 0x06 | AGR-Regelung | 0x01 | 0x03 |
| 0x08 | Gluehzeitsteuerung | 0x01 | 0x03 |
| 0x0A | Spritzbeginnregelung | 0x01 | 0x05 |
| 0x10 | Batteriespannung | 0x01 | 0x03 |
| 0x15 | SWG | 0x01 | 0x02 |
| 0x1A | Bremsschalter | 0x01 | 0x03 |
| 0x1C | Kupplungsschalter | 0x01 | 0x03 |
| 0x1D | Fahrgeschwindigkeits-Signal | 0x01 | 0x03 |
| 0x20 | Bedienteil Fahrgeschwindigkeitsregelung FGR | 0x01 | 0x03 |
| 0x23 | Kraftstofftemperaturfuehler | 0x06 | 0x03 |
| 0x24 | Oeltemperaturfuehler | 0x01 | 0x04 |
| 0x25 | Pedalwertgeber | 0x01 | 0x03 |
| 0x26 | Heissfilmluftmassenmesser | 0x01 | 0x03 |
| 0x2D | Elektronische Wegfahrsicherung | 0x01 | 0x03 |
| 0x2F | Drehzahlgeber | 0x06 | 0x03 |
| 0x34 | Lufttemperaturfuehler | 0x01 | 0x04 |
| 0x35 | Wassertemperaturfuehler | 0x01 | 0x02 |
| 0x36 | Ladedruckfuehler | 0x01 | 0x05 |
| 0x65 | Laderregelung | 0x01 | 0x04 |
| 0x66 | Rechnerkopplung R1 / R2 | 0x01 | 0x03 |
| 0x67 | Rechnerkopplung R1 / R3 | 0x01 | 0x03 |
| 0x68 | U_ist Abgleichweite R1 defekt | 0x01 | 0x03 |
| 0x69 | U_ist Abgleichweite R2 defekt | 0x01 | 0x03 |
| 0x6A | Endstufenfehler | 0x01 | 0x03 |
| 0x6B | ADF | 0x01 | 0x08 |
| 0x6C | Variantenkodierung R1 | 0x01 | 0x03 |
| 0x6D | Variantenkodierung R2 | 0x01 | 0x03 |
| 0x6E | Luftmasse | 0x01 | 0x05 |
| 0x6F | EG2 Abgleich | 0x01 | 0x05 |
| 0x70 | CAN EGS | 0x01 | 0x07 |
| 0x71 | CAN ASR/MSR | 0x01 | 0x07 |
| 0x72 | CAN-Botschaft INSTR3 | 0x01 | 0x09 |
| 0xXY | unbekannter Fehlerort | 0x00 | 0x00 |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x15 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x03 | 0x00 | 0x00 | 0x00 | 0x16 | 0x00 | 0x00 | 0x00 | 0x17 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x05 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x18 | 0x00 | 0x19 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x06 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x20 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x08 | 0x00 | 0x21 | 0x00 | 0x22 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x0A | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x15 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x10 | 0x00 | 0x00 | 0x00 | 0x23 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x15 | 0x00 | 0x25 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x26 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x1A | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x27 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x1C | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x28 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x29 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x20 | 0x00 | 0x30 | 0x00 | 0x31 | 0x00 | 0x00 | 0x00 | 0x32 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x23 | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x24 | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x25 | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x33 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x26 | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x34 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x2D | 0x00 | 0x36 | 0x00 | 0x37 | 0x00 | 0x38 | 0x00 | 0x39 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x2F | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x40 | 0x00 | 0x41 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x34 | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x35 | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x36 | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x42 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x65 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x15 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x66 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x43 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x67 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x43 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x68 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x44 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x69 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x44 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x6A | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x45 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x6B | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x6C | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x46 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x6D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x46 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x6E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x47 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x6F | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x48 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x70 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x71 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x05 | 0x00 | 0x06 | 0x08 | 0x07 | 0x00 | 0x09 |
| 0x72 | 0x00 | 0x00 | 0x00 | 0x49 | 0x00 | 0x50 | 0x00 | 0x51 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | obere Grenze ueberschritten |
| 0x02 | untere Grenze unterschritten |
| 0x03 | Leitungsunterbrechung |
| 0x04 | Zustand nicht plausibel |
| 0x05 | abgasrelevant |
| 0x06 | fertig entprellt |
| 0x07 | Fehler momentan vorhanden |
| 0x08 | Fehler momentan nicht vorhanden |
| 0x09 | sporadischer Fehler |
| 0x15 | Regelkreis nicht plausibel |
| 0x16 | Endstufe defekt (Kurzschluss) |
| 0x17 | Fehler bei ELAB - Test im Start |
| 0x18 | Leitungsabfall |
| 0x19 | Drehzahl aus NBF nicht plausibel |
| 0x20 | Regelkreis nicht plausibel |
| 0x21 | Fehler bei Ansteuerung mit High |
| 0x22 | Fehler bei Ansteuerung mit Low |
| 0x23 | Unterspannung |
| 0x24 | obere Grenze ueberschritten |
| 0x25 | untere Grenze unterschritten |
| 0x26 | nicht plausibel mit Nadelbewegungsfuehler |
| 0x27 | Bremse und red. Bremse nicht plausibel |
| 0x28 | Signal nicht plausibel |
| 0x29 | zu viele Impulse oder nicht plausibel |
| 0x30 | analoges Bedienteil: obere Grenze ueberschritten |
| 0x31 | analoges Bedienteil: untere Grenze unterschritten |
| 0x32 | MFL: Togglebit aendert sich nicht (Leitungsabfall) |
| 0x33 | nicht plausibel zu Leergasschalter |
| 0x34 | Luftmasse zu klein |
| 0x35 | Steuergeraet im Auslieferungszustand |
| 0x36 | EWS-Mode 2 falscher Code angekommen |
| 0x37 | EWS-Mode 2 kein Code angekommen |
| 0x38 | EWS-Mode 2 EWS-Codes sporadisch gestoert |
| 0x39 | EWS Mode 1 falscher Pegel eingelesen |
| 0x40 | keine Drehzahl Impulse (Leitungsabfall) |
| 0x41 | Drehzahlimpulse nicht plausibel |
| 0x42 | nicht plausibel mit ADF |
| 0x43 | serielle Schnittstelle defekt |
| 0x44 | Abgleichwerte nicht plausibel (Checksumme) |
| 0x45 | Kurzschluss einer oder mehrer Endstufen |
| 0x46 | Fehler in der Variantencodierung |
| 0x47 | Mengenreduktion aufgrund zu hoher Luftmasse |
| 0x48 | EG2 Abgleich Checksummenfehler |
| 0x49 | CAN Dual Ported RAM defekt (SG-intern) |
| 0x50 | keine Botschaft empfangen, CAN Fehler |
| 0x51 | CAN Baustein ausgefallen |
| 0xFF | unbekannte Fehlerart |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | UWF_A | UWF_B |
| --- | --- | --- | --- | --- |
| 0x00 | -- | -- | 1 | 0 |
| 0x01 | Motordrehzahl | 1/min | 22.745 | 0 |
| 0x02 | Kraftstofftemperatur | Grad C | 0.4314 | 0 |
| 0x03 | Kuehlmitteltemperatur | Grad C | -0.6863 | 135 |
| 0x04 | Ladedruck | hPa | 9.8039 | 125 |
| 0x05 | Einspritzmenge | mg/Hub | 0.2 | 0 |
| 0x06 | Motordrehzahl NBF | 1/min | 22.745 | 0 |
| 0x07 | Geschwindigkeit | km/h | 0.9412 | 0 |
| 0x08 | Ansauglufttemperatur | Grad C | -0.6863 | 135 |
| 0x09 | Batteriespannung | V |  |  |
| 0xXY | unbekannte Umweltbedingung | -- | 1 | 0 |

### NULLEINSTEXTE

| SELECTOR | 0 | 1 |
| --- | --- | --- |
| AE | AUS | EIN |
| OZ | OFFEN | ZU |
| AA | AUS | AKTIV |
| XY | kein Text gefunden | kein Text gefunden |

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
