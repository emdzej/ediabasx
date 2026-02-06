# ASCMK4G1.prg

## General

|  |  |
| --- | --- |
| File | ASCMK4G1.prg |
| Type | PRG |
| Jobs | 12 |
| Tables | 3 |
| Origin | BMW EF-73 Kusch |
| Revision | 1.10 |
| Author | BMW TP-421 Hirsch, BMW TP-423 Pollmann, BMW EF-73 Kusch |
| ECU Comment | Keine Diagnose bei V > 2.5 km/h |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Antiblockier- u. Aut.-Stabilitaets-Controll MK4G E36 K1 Protokoll |  |  |
| ORIGIN | string | BMW EF-73 Kusch |  |  |
| REVISION | string | 1.10 |  |  |
| AUTHOR | string | BMW TP-421 Hirsch, BMW TP-423 Pollmann, BMW EF-73 Kusch |  |  |
| COMMENT | string | Keine Diagnose bei V > 2.5 km/h |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer ABS_ASC_MK4G m. K1 Prot.

_No arguments._

### IDENT

Ident-Daten fuer ABS_ASC_MK4G m. K1 Prot.

_No arguments._

### FS_LESEN

Fehlerspeicher lesen fuer ABS_ASC_MK4G m. K1 Prot.

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen fuer ABS_ASC_MK4G m. K1 Prot.

_No arguments._

### STATUS_IO_LESEN

Status Eingaenge ABS_ASC_MK4G m. K1 Prot.

_No arguments._

### STEUERN_DIGITAL

Ansteuern mehrerer digitaler Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |
| ORT8 | string | gewuenschte Komponente 8 |
| ORT9 | string | gewuenschte Komponente 9 |
| ORT10 | string | gewuenschte Komponente 10 |
| ORT11 | string | gewuenschte Komponente 11 |
| ORT12 | string | gewuenschte Komponente 12 |
| ORT13 | string | gewuenschte Komponente 13 |

### STEUERN_ANALOG

Ansteuern Drosselklappe

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| WINKEL | int | gewuenschte Drosselklappenstellung in Winkelgrad |

### ABS_REGELSIMULATION

Ansteuern mehrerer digitaler Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL_WARTESCHLEIFEN | int | Anzahl Warteschleifen, wenn nicht angegeben == 3 |

### ASC

Steuern_Digital Drehzahlabsenkung

_No arguments._

### ASC_SIM_HA

Steuern_Digital ansteueren u. halten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0xFA | ERROR_ECU_FUNCTION |
| 0xFB | ERROR_ECU_FUNCTION |
| 0xF7 | ERROR_ECU_FUNCTION |
| 0xF8 | ERROR_ECU_FUNCTION |
| 0xF2 | ERROR_ECU_FUNCTION |
| 0x0A | ERROR_ECU_NACK |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x11 | ABS Ventil Einlass vorne links |
| 0x12 | ABS Ventil Auslass vorne links |
| 0x14 | ABS Ventil Einlass vorne rechts |
| 0x18 | ABS Ventil Auslass vorne rechts |
| 0x21 | ABS Ventil Einlass hinten links |
| 0x22 | ABS Ventil Auslass hinten links |
| 0x24 | ABS Ventil Einlass hinten rechts |
| 0x28 | ABS Ventil Auslass hinten rechts |
| 0x31 | Alle ABS Ventile |
| 0x38 | ASC-Trennventil |
| 0x32 | Drosselklappensteller oder Stellmechanismus |
| 0x41 | Bus od. Busprozessor |
| 0x42 | TD-Leitung |
| 0x44 | Bus od. Busprozessor |
| 0x48 | Interner IC-Fehler Motor-Control |
| 0x51 | Drehzahlfuehler Fehler VL, Triggersignal |
| 0x52 | Drehzahlfuehler Fehler VR, Triggersignal |
| 0x54 | Drehzahlfuehler Fehler HL, Triggersignal |
| 0x58 | Drehzahlfuehler Fehler HR, Triggersignal |
| 0x61 | Drehzahlfuehler Fehler VL, Kontinuitaet |
| 0x62 | Drehzahlfuehler Fehler VR, Kontinuitaet |
| 0x64 | Drehzahlfuehler Fehler HL, Kontinuitaet |
| 0x68 | Drehzahlfuehler Fehler HR, Kontinuitaet |
| 0x71 | Drehzahlfuehler Fehler VL, Anfahrerkennung |
| 0x72 | Drehzahlfuehler Fehler VR, Anfahrerkennung |
| 0x74 | Drehzahlfuehler Fehler HL, Anfahrerkennung |
| 0x78 | Drehzahlfuehler Fehler HR, Anfahrerkennung |
| 0x81 | Leitung DKG |
| 0x82 | DME Drosselklappenpoti |
| 0x91 | Pumpenmotor oder Kabelbaum |
| 0x92 | Fehlerhafte Codierung |
| 0x94 | Relais, Pumpenmotor, Zaehlerstand oder Taktzaehler |
| 0x98 | Bremslichtschalter |
| 0xA1 | ABS Ventil Auslass vorne links Hydraulik/Kabelbaum |
| 0xA2 | ABS Ventil Auslass vorne rechts Hydraulik/Kabelbaum |
| 0xA4 | ABS Ventil Auslass hinten links Hydraulik/Kabelbaum |
| 0xA8 | ABS Ventil Auslass hinten rechts Hydraulik/Kabelbaum |
| 0xC1 | UBatt. oder ZA-Leitung |
| 0xC2 | UBatt. oder ZWV-Leitung |
| 0xC3 | UBatt. |
| 0xC4 | MSR-Leitung |
| 0xC8 | ASCA-Leitung oder NVRAM |
| 0xD1 | ASC-Drosselklappenpotentiometer oder -leitung |
| 0xD4 | Drosselklappensteller oder -leitung |
| 0xD8 | Drosselklappe, Drosselklappensteller, Bowdenzug oder Kabelbaum |
| 0xFF | NV-RAM |
| 0xXY | unbekannter Fehlerort |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| EVVL | 0 | 0x01 |
| AVVL | 0 | 0x02 |
| EVVR | 0 | 0x04 |
| AVVR | 0 | 0x08 |
| EVHL | 0 | 0x10 |
| AVHL | 0 | 0x20 |
| EVHR | 0 | 0x40 |
| AVHR | 0 | 0x80 |
| Pumpe | 1 | 0x01 |
| EVASC | 1 | 0x04 |
| ZA | 1 | 0x08 |
| ZWV | 1 | 0x10 |
| XYZ | 2 | 0xFF |
