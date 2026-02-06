# dia_dose.prg

## General

|  |  |
| --- | --- |
| File | dia_dose.prg |
| Type | PRG |
| Jobs | 9 |
| Tables | 9 |
| Origin | BMW VK-22 Siefermann |
| Revision | 1.01 |
| Author | BMW VK-22 Siefermann, BMW TP-421 Drexel,  Fa. Softing R.Marziw |
| ECU Comment | Einstellung der U_Prog |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sonderfunktionen an der Diagnosesteckdose |  |  |
| ORIGIN | string | BMW VK-22 Siefermann |  |  |
| REVISION | string | 1.01 |  |  |
| AUTHOR | string | BMW VK-22 Siefermann, BMW TP-421 Drexel,  Fa. Softing R.Marziw |  |  |
| COMMENT | string | Einstellung der U_Prog |  |  |
| PACKAGE | string | 1.15 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### SPANNUNG_KL30_ABFRAGEN

Abfragen des Hardwareinterface-Typs (ADS, EDIC usw.) Ermittlung der HW-Board-Kennung bei HW-Interface EDIC oder EDICC Ermittlung des Status der Klemmenspannung gemäß dem erkannten HW-Interface Abfragen der Spannung an Klemme 30 (Versorgungsspannung - UBatt), wenn Status der Klemmenspannung != -1

_No arguments._

### SPANNUNG_KL15_ABFRAGEN

Abfragen des Hardwareinterface-Typs (ADS, EDIC usw.) Ermittlung der HW-Board-Kennung bei HW-Interface EDIC oder EDICC Ermittlung des Status der Klemmenspannung gemäß dem erkannten HW-Interface Abfragen der Spannung an Klemme 15 (Zündung), wenn Status der Klemmenspannung != -1

_No arguments._

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung

_No arguments._

### ENDE

Stoppen des wiederholten Senden und Empfangen

_No arguments._

### DIAGNOSE_ENDE

Beenden der Diagnose

_No arguments._

### U_PROG

Einstellung der U_Prog

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | Der einzustellende Spannungswert |

### GET_VOLTAGE

KL30 oder KL 15 analog einlesen

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string |  |

### SIA_RESET

Ruecksetzen der Service-Intervall-Anzeige

| Name | Type | Description |
| --- | --- | --- |
| ARG1 | string | OEL_RESET, WEG/ZEIT_RESET |

## Tables

### U_PRG

| SELECTOR | FAKT |
| --- | --- |
| 0 | 0x01 |
| 5 | 0x02 |
| 10 | 0x03 |
| 12 | 0x04 |
| 15 | 0x05 |
| 18 | 0x06 |
| 10 | 0x07 |
| 25 | 0x08 |
| 33 | 0x09 |
| 33 | 0x0A |

### KL_SPG

| KL_BEZ | BED |
| --- | --- |
| KL15 | Kl15 |
| KL30 | Kl30 |
| KL61 | KL61 |
| KL50 | KL50 |
| KLR | KLR |
| CARB | CARB |

### SIARESET

| SELECTOR | RESET |
| --- | --- |
| OEL_RESET | 0x01 |
| WEG/ZEIT_RESET | 0x02 |

### IF_KL30_STAT_TAB

| INTERFACE | STAT_TAB |
| --- | --- |
| EDIC | EDICBoardNr_Kl30Stat |
| EDICC | EDICBoardNr_Kl30Stat |
| FUNK | Andere_Kl30Stat |
| ADS | Andere_Kl30Stat |
| EADS | Andere_Kl30Stat |
| OPPS | Andere_Kl30Stat |
| OBD | Andere_Kl30Stat |

### IF_KL15_STAT_TAB

| INTERFACE | STAT_TAB |
| --- | --- |
| EDIC | EDICBoardNr_Kl15Stat |
| EDICC | EDICBoardNr_Kl15Stat |
| FUNK | Andere_Kl15Stat |
| ADS | Andere_Kl15Stat |
| EADS | Andere_Kl15Stat |
| OPPS | Andere_Kl15Stat |
| OBD | Andere_Kl15Stat |

### EDICBOARDNR_KL30STAT

| INTERFACE_TYP | KL30_STATUS |
| --- | --- |
| 0101 | -1 |
| 0102 | -1 |
| 0104 | -1 |
| 0105 | -1 |
| 0120 | 1 |
| 0200 | 1 |
| 0130 | 1 |
| 0131 | 1 |

### EDICBOARDNR_KL15STAT

| INTERFACE_TYP | KL15_STATUS |
| --- | --- |
| 0101 | 0 |
| 0102 | 0 |
| 0104 | 0 |
| 0105 | 0 |
| 0120 | 1 |
| 0200 | 1 |
| 0130 | 1 |
| 0131 | 1 |

### ANDERE_KL30STAT

| INTERFACE_TYP | KL30_STATUS |
| --- | --- |
| FUNK | 0 |
| ADS | 0 |
| EADS | 0 |
| OPPS | 0 |
| OBD | 0 |

### ANDERE_KL15STAT

| INTERFACE_TYP | KL15_STATUS |
| --- | --- |
| FUNK | 0 |
| ADS | 0 |
| EADS | 0 |
| OPPS | 0 |
| OBD | 0 |
