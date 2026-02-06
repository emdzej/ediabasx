# AIR_E36.PRG

## General

|  |  |
| --- | --- |
| File | AIR_E36.PRG |
| Type | PRG |
| Jobs | 3 |
| Tables | 5 |
| Origin | BMW ET-421 Teepe |
| Revision | 1.0 |
| Author | BMW ET-421 Teepe |
| ECU Comment | Dummy-SGBD fuer Prufeung von Airbag-Ausloeseeinheiten bei E36 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | AIR_E36 |  |  |
| ORIGIN | string | BMW ET-421 Teepe |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW ET-421 Teepe |  |  |
| COMMENT | string | Dummy-SGBD fuer Prufeung von Airbag-Ausloeseeinheiten bei E36 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### NUMMERN_CHECK

Sachnummern Airbag-Ausloeseeinheit

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Variante des Fahrzeugs E34, E31, E38, E36 |
| VARIANTE | string | Variante des Fahrzeugs US, ECE |
| SACHNUMMER1 | string | Sachnummer der Ausloseeinheit 1 |
| SACHNUMMER2 | string | Sachnummer der Ausloseeinheit 2 |

## Tables

### E38

| T_NR | TYP | ART |
| --- | --- | --- |
| 1162099 | ECE | F |
| 1162892 | ECE | F |
| 1162893 | ECE | F |
| 1162894 | ECE | F |
| 1162895 | ECE | F |
| 1162896 | ECE | F |
| 1162897 | ECE | F |
| 1161830 | US | F |
| XXXXXXX | unbekannt | Y |

### E39

| T_NR | TYP | ART |
| --- | --- | --- |
| 1162099 | ECE | F |
| 1162892 | ECE | F |
| XXXXXXX | unbekannt | Y |

### E31

| T_NR | TYP | ART |
| --- | --- | --- |
| 1161008 | ECE | F |
| 1162743 | ECE | F |
| 1162744 | ECE | F |
| 2227855 | ECE | F |
| 1161755 | US | F |
| 1161756 | US | F |
| 1162090 | US | F |
| 1161757 | ECE_US | F |
| 1161758 | ECE_US | F |
| XXXXXXX | unbekannt | Y |

### E34

| T_NR | TYP | ART |
| --- | --- | --- |
| 1161008 | ECE | F |
| 1162743 | ECE | F |
| 1162744 | ECE | F |
| 2227855 | ECE | F |
| 1161756 | US | F |
| 1161757 | US | F |
| 1161758 | US | F |
| 1162090 | US | F |
| 2227755 | US | F |
| XXXXXXX | unbekannt | Y |

### E36

| T_NR | TYP | ART | MODELL |
| --- | --- | --- | --- |
| 1092540 | ECE | F | F |
| 1093305 | ECE | F | F |
| 1092762 | ECE | F | F |
| 1093154 | US | F | B |
| 1093306 | US | F | B |
| 1161008 | ECE | F | 1 |
| 1162099 | ECE | F | F |
| 1162743 | ECE | F | 1 |
| 1162744 | ECE | F | 1 |
| 2227855 | ECE | F | F |
| 2228015 | ECE | F | F |
| 1162553 | US | F | 4 |
| 2227755 | US | F | 3 |
| 2228016 | US | F | 3 |
| 2227756 | US | F | 4 |
| 8146757 | LL | BF | 8 |
| 8146962 | RL | BF | 8 |
| 8162782 | LL | BF | 3 |
| 8182973 | RL | BF | 3 |
| 8209318 | LL | BF | 3 |
| 8209773 | RL | BF | 3 |
| 8162783 | LL | BF | 4 |
| 8182974 | RL | BF | 4 |
| 8209774 | LL | BF | 4 |
| 8209775 | RL | BF | 4 |
| XXXXXXX | unbekannt | Y | 0 |
