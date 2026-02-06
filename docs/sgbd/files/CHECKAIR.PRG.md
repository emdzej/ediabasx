# CHECKAIR.PRG

## General

|  |  |
| --- | --- |
| File | CHECKAIR.PRG |
| Type | PRG |
| Jobs | 3 |
| Tables | 5 |
| Origin | BMW TP-422 Teepe |
| Revision | 1.4 |
| Author | BMW TP-422 Teepe |
| ECU Comment | Dummy SGBD fuer Airbag-Ausloseeinheiten |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DUMMY |  |  |
| ORIGIN | string | BMW TP-422 Teepe |  |  |
| REVISION | string | 1.04 |  |  |
| AUTHOR | string | BMW TP-422 Teepe |  |  |
| COMMENT | string | Dummy SGBD fuer Airbag-Ausloseeinheiten |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

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

### INFO

Information SGBD

_No arguments._

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
| 1094446 | ECE | F |
| 1094447 | ECE | F |
| 1094448 | ECE | F |
| 1094449 | ECE | F |
| 1161830 | US | F |
| 1093311 | US | F |
| 1093310 | US | F |
| 1093246 | US | F |
| 1094256 | US | F |
| 1094258 | US | F |
| 1095510 | US | F |
| 1095512 | US | F |
| XXXXXXX | unbekannt | Y |

### E39

| T_NR | TYP | ART |
| --- | --- | --- |
| 1094255 | US | F |
| 1094257 | US | F |
| 1094444 | ECE | F |
| 1094446 | ECE | F |
| 1094447 | ECE | F |
| 1094448 | ECE | F |
| 1094449 | ECE | F |
| 1094823 | US | F |
| 1094824 | US | F |
| 1094454 | US | F |
| 1094455 | US | F |
| 1094843 | US | F |
| 1094844 | US | F |
| 1162099 | ECE | F |
| 1162892 | ECE | F |
| 1095509 | US | F |
| 1095510 | US | F |
| 1095511 | US | F |
| 1095512 | US | F |
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
| 1161757 | ECE_US | F |
| 1161758 | ECE_US | F |
| 1162090 | US | F |
| 2227755 | US | F |
| 1093308 | US | F |
| 2228016 | US | F |
| 1093307 | US | F |
| 1094444 | ECE | F |
| 1093306 | US | F |
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
| 1092539 | US | F |
| 1093306 | US | F |
| 2228016 | US | F |
| XXXXXXX | unbekannt | Y |

### E36

| T_NR | TYP | ART |
| --- | --- | --- |
| 1161008 | ECE | F |
| 1162743 | ECE | F |
| 1162744 | ECE | F |
| 2227855 | ECE | F |
| 1161756 | US | F |
| 1161757 | US | F |
| 1161758 | US | F |
| 1162553 | US | F |
| 2227755 | US | F |
| 2227756 | US | F |
| 8146757 | LL | BF |
| 8146962 | RL | BF |
| 8162782 | LL | BF |
| 8162783 | LL_CABRIO | BF |
| 8182973 | RL | BF |
| 8182974 | RL_CABRIO | BF |
| XXXXXXX | unbekannt | Y |
