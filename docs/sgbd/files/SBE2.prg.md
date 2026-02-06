# SBE2.prg

## General

|  |  |
| --- | --- |
| File | SBE2.prg |
| Type | PRG |
| Jobs | 23 |
| Tables | 3 |
| Origin | BMW TI-433 Winkler H.-J. |
| Revision | 1.00 |
| Author | BMW TI-433 Winkler |
| ECU Comment | Sitzbelegungserkennung 2 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | SBE2 |  |  |
| ORIGIN | string | BMW TI-433 Winkler H.-J. |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW TI-433 Winkler |  |  |
| COMMENT | string | Sitzbelegungserkennung 2 |  |  |
| PACKAGE | string | 1.24 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer AIRBAG MRS3

_No arguments._

### IDENT

Ident-Daten fuer SBE2

_No arguments._

### FS_QUICK_LESEN

Quicktest auf Fehleranzahl

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | Speicheradresse Bereich: 0x0000-0xFFFF |
| ANZAHL | int | Anzahl der Daten Bereich: 1 bis 16 |

### KODIERDATEN_LESEN

Kodierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int | Speicheradresse Bereich: 0x00-0x3F |
| ANZAHL | int | Anzahl der Daten Bereich: 1 bis 16 |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### SG_RESET

Ausloesen des Controller-Reset

_No arguments._

### STATUS_KAP_CE

CE-Kapazitaet (Elektrode-Masse) Antennen

_No arguments._

### STATUS_PHI_CE

CE-Phasen (Elektrode-Masse) Antennen

_No arguments._

### STATUS_KAP_CGE

CGE-Kapazitaet (Elektrode-Guard) Antennen

_No arguments._

### STATUS_PHI_CGE

CGE-Phasen (Elektrode-Guard) Antennen

_No arguments._

### STATUS_IO

IO-Stati ausgeben

_No arguments._

### STATUS_INTERN

Interne IO-Stati ausgeben

_No arguments._

### STEUERN_DSP

(Temporaeres) Setzen der DSP-Bytes

| Name | Type | Description |
| --- | --- | --- |
| DSP_BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| DSP_BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| DSP_BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| DSP_BYTE4 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### STEUERN_SBE2

(Temporaeres) Setzen der Sitzbelegung

| Name | Type | Description |
| --- | --- | --- |
| BELEGUNG | int | 0x00 = Fehler 0x01 = Unbelegt 0x02 = Kindersitz 0x03 = Person 0x04 = Out-Of-Position (OOP) |

### STEUERN_OCE

(Temporaeres) Ein-/Ausschalten der OCE-Kommunikation

| Name | Type | Description |
| --- | --- | --- |
| KOMMUNIKATION_EIN | int | 0x00 = Aus, 0x01 = Ein |

### HERSTELLERDATEN_LESEN

Lesen der herstellerspez. Daten

_No arguments._

### DIAGNOSE_ERHALTEN

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
| 0xB1 | ERROR_ECU_FUNKTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Lehne: Elektrode-Guard Kurzschluss |
| 0x02 | Lehne: Stecker nicht gesteckt |
| 0x03 | Lehne: Guard am Stecker gebrochen |
| 0x04 | Lehne: Kurzschluss U-Batt |
| 0x05 | Lehne: Kurzschluss Elektrode-Masse |
| 0x06 | Lehne: Kurzschluss Guard-Masse |
| 0x07 | Lehne: Elektronikfehler bei Messung |
| 0x08 | Lehne: Unterbrechung Elektrode an der Antenne |
| 0x09 | Lehne: Unterbrechung Guard an der Antenne |
| 0x0A | Lehne: Phasenfehler |
| 0x0B | Lehne: Feuchtigkeit |
| 0x0C | Lehne: CGE zu gross |
| 0x0D | Sitz: Elektrode-Guard Kurzschluss |
| 0x0E | Sitz: Stecker nicht gesteckt |
| 0x0F | Sitz: Guard am Stecker gebrochen |
| 0x10 | Sitz: Kurzschluss U-Batt |
| 0x11 | Sitz: Kurzschluss Elektrode-Masse |
| 0x12 | Sitz: Kurzschluss Guard-Masse |
| 0x13 | Sitz: Elektronikfehler bei Messung |
| 0x14 | Sitz: Unterbrechung Elektrode an der Antenne |
| 0x15 | Sitz: Unterbrechung Guard an der Antenne |
| 0x16 | Sitz: Phasenfehler |
| 0x17 | Sitz: Feuchtigkeit |
| 0x18 | Sitz: CGE zu gross |
| 0x21 | OCE (Druckmatte): Kommunikationsfehler Empfang |
| 0x22 | OCE (Druckmatte): Kommunikationsfehler Senden |
| 0x23 | OCE (Druckmatte): Klassifikationsfehler |
| 0x24 | OCE (Druckmatte): Ungueltige Daten |
| 0x25 | OCE (Druckmatte): Unterspannung |
| 0x26 | DCA (Crashausgang): Timing-/Framefehler |
| 0x27 | DCA (Crashausgang): Kommunikationsfehler |
| 0x28 | SBE2: Signalfehler |
| 0x29 | OCE (Druckmatte) -> FDS (Antennensystem): Plausibilitaetsfehler |
| 0x2A | FDS (Antennensystem) -> OCE (Druckmatte): Plausibilitaetsfehler |
| 0x2B | SBE2: CS-Fehler Codierdaten |
| 0x2C | FDS (Antennensystem): Empfangsstoerung |
| 0x3F | SBE2: Interner Fehler |
| 0xFF | unbekannter Fehlerort |
