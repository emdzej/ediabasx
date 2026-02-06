# zcs_gm.prg

## General

|  |  |
| --- | --- |
| File | zcs_gm.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 3 |
| Origin | BMW VS-22 Waegner |
| Revision | 1.2 |
| Author | BMW VS-22 Waegner |
| ECU Comment | SGBD zur Fahrzeugidentifikation, zcs_gm.b2s |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische Wegfahrsperre - alle Typen |  |  |
| ORIGIN | string | BMW VS-22 Waegner |  |  |
| REVISION | string | 1.02 |  |  |
| AUTHOR | string | BMW VS-22 Waegner |  |  |
| COMMENT | string | SGBD zur Fahrzeugidentifikation, zcs_gm.b2s |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Init-Job fuer EWS automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### INFO

Info fuer Anwender

_No arguments._

### IDENT

Ident-Daten fuer EWS

_No arguments._

### ZCS_GM_LESEN

_No description._

_No arguments._

### PROD_DATUM_LESEN

_No description._

_No arguments._

### FGNR_LESEN

Auslesen der Fahrgestellnummer aus der EWS

_No arguments._

### AIF_ZCS_LESEN

Auslesen des Zentralen Codierschluessels aus KD-Daten

_No arguments._

### KD_DATEN_LESEN

Auslesen der Kundendienstdaten aus der EWS

| Name | Type | Description |
| --- | --- | --- |
| BLOCK | int | 0 bis 11 |

### DIAGNOSE_FORTSETZEN

Diagnose mit EWS aufrecht erhalten

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
| 0xA2 | ERROR_SG_REJECTED |
| 0xB0 | ERROR_SG_PARAMETER |
| 0xB1 | ERROR_SG_FUNKTION |
| 0xFF | ERROR_SG_NACK |
| 0x00 | ERROR_SG_UNBEKANNTES_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
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
| 0xXY | unbekannter Hersteller |

### ZCS_TEXTE

| GM | TYP | BAUREIHE | MODELL | LA | TAIS | DESRS |
| --- | --- | --- | --- | --- | --- | --- |
| 1031 | BE11 | E36 | 316i_M43_COUPE | EUR_LL | X | X |
| 1032 | BE12 | E36 | 316i_M43_COUPE | EUR_RL | X | X |
| 1041 | BE21 | E36 | 316i_M43_COUPE | EUR_LL | X | X |
| 1042 | BE22 | E36 | 316i_M43_COUPE | EUR_RL | X | X |
| 1051 | BE51 | E36 | 318is_M42_COUPE | ECE_LL | X | O |
| 1052 | BE52 | E36 | 318is_M42_COUPE | ECE_RL | X | O |
| 1053 | BE53 | E36 | 318is_M42_COUPE | USA_LL | X | O |
| 1061 | BE61 | E36 | 318is_M42_COUPE | ECE_LL | X | O |
| 1062 | BE62 | E36 | 318is_M42_COUPE | ECE_RL | X | O |
| 1063 | BE63 | E36 | 318is_M42_COUPE | USA_LL | X | O |
| 1071 | BE71 | E36 | 318is_M44_COUPE | EUR_LL | X | X |
| 1072 | BE72 | E36 | 318is_M44_COUPE | EUR_RL | X | X |
| 1073 | BE73 | E36 | 318is_M44_COUPE | USA_LL | X | X |
| 1081 | BE81 | E36 | 318is_M44_COUPE | EUR_LL | X | X |
| 1082 | BE82 | E36 | 318is_M44_COUPE | EUR_RL | X | X |
| 1083 | BE83 | E36 | 318is_M44_COUPE | USA_LL | X | X |
| 1103 | BF03 | E36 | M3_S50US_COUPE | USA_LL | X | O |
| 1111 | BF11 | E36 | 320i_M50_COUPE | ECE_LL | X | O |
| 1112 | BF12 | E36 | 320i_M50_COUPE | ECE_RL | X | O |
| 1121 | BF21 | E36 | 320i_M50_COUPE | ECE_LL | X | O |
| 1122 | BF22 | E36 | 320i_M50_COUPE | ECE_RL | X | O |
| 1131 | BF31 | E36 | 325i_M50_COUPE | ECE_LL | X | O |
| 1132 | BF32 | E36 | 325i_M50_COUPE | ECE_RL | X | O |
| 1133 | BF33 | E36 | 325is_M50_COUPE | USA_LL | X | O |
| 1138 | BF38 | E36 | 325i_M50_COUPE | ZAF_RL | X | O |
| 1141 | BF41 | E36 | 325i_M50_COUPE | ECE_LL | X | O |
| 1142 | BF42 | E36 | 325i_M50_COUPE | ECE_RL | X | O |
| 1143 | BF43 | E36 | 325is_M50_COUPE | USA_LL | X | O |
| 1148 | BF48 | E36 | 325i_M50_COUPE | ZAF_RL | X | O |
| 1151 | BF51 | E36 | 320i_M52_COUPE | EUR_LL | X | X |
| 1161 | BF61 | E36 | 320i_M52_COUPE | EUR_LL | X | X |
| 1171 | BF71 | E36 | 323i_M52_COUPE | EUR_LL | X | X |
| 1172 | BF72 | E36 | 323i_M52_COUPE | EUR_RL | X | X |
| 1173 | BF73 | E36 | 323i_M52_COUPE | USA_LL | X | X |
| 1181 | BF81 | E36 | 323i_M52_COUPE | EUR_LL | X | X |
| 1182 | BF82 | E36 | 323i_M52_COUPE | EUR_RL | X | X |
| 1183 | BF83 | E36 | 323i_M52_COUPE | USA_LL | X | X |
| 1191 | BF91 | E36 | M3_S50_COUPE | ECE_LL | X | O |
| 1192 | BF92 | E36 | M3_S50_COUPE | ECE_RL | X | O |
| 1193 | BF93 | E36 | M3_S50US_COUPE | USA_LL | X | O |
| 1198 | BF98 | E36 | M3_S50_COUPE | ZAF_RL | X | O |
| 1199 | BF99 | E36 | M3_S50_COUPE | EUR_LL | X | X |
| 11A1 | BG11 | E36 | 328i_M52_COUPE | EUR_LL | X | X |
| 11A2 | BG12 | E36 | 328i_M52_COUPE | EUR_RL | X | X |
| 11A3 | BG13 | E36 | 328i_M52_COUPE | USA_LL | X | X |
| 11B1 | BG21 | E36 | 328i_M52_COUPE | EUR_LL | X | X |
| 11B2 | BG22 | E36 | 328i_M52_COUPE | EUR_RL | X | X |
| 11B3 | BG23 | E36 | 328i_M52_COUPE | USA_LL | X | X |
| 11E1 | BG91 | E36 | M3_S50_COUPE | EUR_LL | X | X |
| 11E2 | BG92 | E36 | M3_S50_COUPE | EUR_RL | X | X |
| 11E3 | BG93 | E36 | M3_S52_COUPE | USA_LL | X | X |
| 13E1 | BH31 | E36 | 318i_M43_CABRIO | EUR_LL | X | X |
| 13E2 | BH32 | E36 | 318i_M43_CABRIO | EUR_RL | X | X |
| 1401 | BH41 | E36 | 318i_M43_CABRIO | EUR_LL | X | X |
| 1402 | BH42 | E36 | 318i_M43_CABRIO | EUR_RL | X | X |
| 14C3 | BH73 | E36 | 318is_M44_CABRIO | USA_LL | X | X |
| 14D3 | BH83 | E36 | 318is_M44_CABRIO | USA_LL | X | X |
| 1411 | BJ11 | E36 | 320i_M50_CABRIO | ECE_LL | X | O |
| 1412 | BJ12 | E36 | 320i_M50_CABRIO | ECE_RL | X | O |
| 1421 | BJ21 | E36 | 320i_M50_CABRIO | ECE_LL | X | O |
| 1422 | BJ22 | E36 | 320i_M50_CABRIO | ECE_RL | X | O |
| 1431 | BJ31 | E36 | 320i_M52_CABRIO | EUR_LL | X | X |
| 1432 | BJ32 | E36 | 320i_M52_CABRIO | EUR_RL | X | O |
| 1441 | BJ41 | E36 | 320i_M52_CABRIO | EUR_LL | X | X |
| 1442 | BJ42 | E36 | 320i_M52_CABRIO | EUR_RL | X | O |
| 1451 | BJ51 | E36 | 325i_M50_CABRIO | ECE_LL | X | O |
| 1452 | BJ52 | E36 | 325i_M50_CABRIO | ECE_RL | X | O |
| 1453 | BJ53 | E36 | 325i_M50_CABRIO | USA_LL | X | O |
| 1461 | BJ61 | E36 | 325i_M50_CABRIO | ECE_LL | X | O |
| 1462 | BJ62 | E36 | 325i_M50_CABRIO | ECE_RL | X | O |
| 1463 | BJ63 | E36 | 325i_M50_CABRIO | USA_LL | X | O |
| 1471 | BJ71 | E36 | 323i_M52_CABRIO | EUR_LL | X | X |
| 1472 | BJ72 | E36 | 323i_M52_CABRIO | EUR_RL | X | X |
| 1473 | BJ73 | E36 | 323i_M52_CABRIO | USA_LL | X | X |
| 1481 | BJ81 | E36 | 323i_M52_CABRIO | EUR_LL | X | X |
| 1482 | BJ82 | E36 | 323i_M52_CABRIO | EUR_RL | X | X |
| 1483 | BJ83 | E36 | 323i_M52_CABRIO | USA_LL | X | X |
| 1491 | BJ91 | E36 | M3_S50_CABRIO | ECE_LL | X | O |
| 1492 | BJ92 | E36 | M3_S50_CABRIO | ECE_RL | X | O |
| 1303 | BK03 | E36 | M3_S52_CABRIO | USA_LL | X | X |
| 14A3 | BK53 | E36 | 318i_M42_CABRIO | USA_LL | X | O |
| 14B3 | BK63 | E36 | 318i_M42_CABRIO | USA_LL | X | O |
| 14E1 | BK71 | E36 | 328i_M52_CABRIO | EUR_LL | X | X |
| 14E2 | BK72 | E36 | 328i_M52_CABRIO | EUR_RL | X | X |
| 14E3 | BK73 | E36 | 328i_M52_CABRIO | USA_LL | X | X |
| 14F1 | BK81 | E36 | 328i_M52_CABRIO | EUR_LL | X | X |
| 14F2 | BK82 | E36 | 328i_M52_CABRIO | EUR_RL | X | X |
| 14F3 | BK83 | E36 | 328i_M52_CABRIO | USA_LL | X | X |
| 1391 | BK91 | E36 | M3_S50_CABRIO | EUR_LL | X | X |
| 1392 | BK92 | E36 | M3_S50_CABRIO | EUR_RL | X | X |
| 1393 | BK93 | E36 | M3_S52_CABRIO | USA_LL | X | X |
| 1501 | CA01 | E36 | 318i_M43_LIM | EUR_LL | X | X |
| 1502 | CA02 | E36 | 318i_M43_LIM | EUR_RL | X | X |
| 1504 | CA04 | E36 | 318i_M43_LIM | MYS_RL | X | O |
| 1505 | CA05 | E36 | 318i_M43_LIM | THA_RL | X | X |
| 1508 | CA08 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1509 | CA09 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1511 | CA11 | E36 | 316i_M40_LIM | ECE_LL | X | O |
| 1512 | CA12 | E36 | 316i_M40_LIM | ECE_RL | X | O |
| 1521 | CA21 | E36 | 316i_M40_LIM | ECE_LL | X | O |
| 1522 | CA22 | E36 | 316i_M40_LIM | ECE_RL | X | O |
| 1531 | CA31 | E36 | 318i_M40_LIM | ECE_LL | X | O |
| 1532 | CA32 | E36 | 318i_M40_LIM | ECE_RL | X | O |
| 1534 | CA34 | E36 | 318i_M40_LIM | MYS_RL | X | O |
| 1535 | CA35 | E36 | 318i_M40_LIM | THA_RL | X | O |
| 1537 | CA37 | E36 | 318i_M40_LIM | IDN_RL | X | O |
| 1538 | CA38 | E36 | 316i_M40_LIM | ZAF_RL | X | O |
| 1541 | CA41 | E36 | 318i_M40_LIM | ECE_LL | X | O |
| 1542 | CA42 | E36 | 318i_M40_LIM | ECE_RL | X | O |
| 1544 | CA44 | E36 | 318i_M40_LIM | MYS_RL | X | O |
| 1545 | CA45 | E36 | 318i_M40_LIM | THA_RL | X | O |
| 1547 | CA47 | E36 | 318i_M40_LIM | IDN_RL | X | O |
| 1548 | CA48 | E36 | 316i_M40_LIM | ZAF_RL | X | O |
| 1551 | CA51 | E36 | 318is_M42_LIM | ECE_LL | X | O |
| 1552 | CA52 | E36 | 318is_M42_LIM | ECE_RL | X | O |
| 1553 | CA53 | E36 | 318i_M42_LIM | USA_LL | X | O |
| 1558 | CA58 | E36 | 318i_M42_LIM | ZAF_RL | X | O |
| 1561 | CA61 | E36 | 318is_M42_LIM | ECE_LL | X | O |
| 1562 | CA62 | E36 | 318is_M42_LIM | ECE_RL | X | O |
| 1563 | CA63 | E36 | 318i_M42_LIM | USA_LL | X | O |
| 1568 | CA68 | E36 | 318i_M42_LIM | ZAF_RL | X | O |
| 1571 | CA71 | E36 | 316i_M43_LIM | EUR_LL | X | X |
| 1572 | CA72 | E36 | 316i_M43_LIM | EUR_RL | X | X |
| 1579 | CA79 | E36 | 316i_M43_LIM | PHL_LL | X | X |
| 1581 | CA81 | E36 | 316i_M43_LIM | EUR_LL | X | X |
| 1582 | CA82 | E36 | 316i_M43_LIM | EUR_RL | X | X |
| 1591 | CA91 | E36 | 318i_M43_LIM | EUR_LL | X | X |
| 1592 | CA92 | E36 | 318i_M43_LIM | EUR_RL | X | X |
| 1594 | CA94 | E36 | 318i_M43_LIM | MYS_RL | X | O |
| 1595 | CA95 | E36 | 318i_M43_LIM | THA_RL | X | X |
| 1597 | CA97 | E36 | 318i_M43_LIM | IDN_RL | X | X |
| 1598 | CA98 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1599 | CA99 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1611 | CB11 | E36 | 320i_M50_LIM | ECE_LL | X | O |
| 1612 | CB12 | E36 | 320i_M50_LIM | ECE_RL | X | O |
| 1613 | CB13 | E36 | 320i_M50_LIM | USA_LL | X | O |
| 1617 | CB17 | E36 | 320i_M50_LIM | IDN_RL | X | O |
| 1618 | CB18 | E36 | 320i_M50_LIM | ZAF_RL | X | O |
| 1621 | CB21 | E36 | 320i_M50_LIM | ECE_LL | X | O |
| 1622 | CB22 | E36 | 320i_M50_LIM | ECE_RL | X | O |
| 1623 | CB23 | E36 | 320i_M50_LIM | USA_LL | X | O |
| 1627 | CB27 | E36 | 320i_M50_LIM | IDN_RL | X | O |
| 1628 | CB28 | E36 | 320i_M50_LIM | ZAF_RL | X | O |
| 1631 | CB31 | E36 | 325i_M50_LIM | ECE_LL | X | O |
| 1632 | CB32 | E36 | 325i_M50_LIM | ECE_RL | X | O |
| 1633 | CB33 | E36 | 325i_M50_LIM | USA_LL | X | O |
| 1634 | CB34 | E36 | 325i_M50_LIM | MYS_RL | X | O |
| 1635 | CB35 | E36 | 325i_M50_LIM | THA_RL | X | O |
| 1638 | CB38 | E36 | 325i_M50_LIM | ZAF_RL | X | O |
| 1639 | CB39 | E36 | 325i_M50_LIM | URY_LL | X | O |
| 1641 | CB41 | E36 | 325i_M50_LIM | ECE_LL | X | O |
| 1642 | CB42 | E36 | 325i_M50_LIM | ECE_RL | X | O |
| 1643 | CB43 | E36 | 325i_M50_LIM | USA_LL | X | O |
| 1644 | CB44 | E36 | 325i_M50_LIM | MYS_RL | X | O |
| 1645 | CB45 | E36 | 325i_M50_LIM | THA_RL | X | O |
| 1647 | CB47 | E36 | 325i_M50_LIM | MEX_LL | X | O |
| 1648 | CB48 | E36 | 325i_M50_LIM | ZAF_RL | X | O |
| 1651 | CB51 | E36 | 320i_M52_LIM | EUR_LL | X | O |
| 1652 | CB52 | E36 | 320i_M52_LIM | EUR_RL | X | X |
| 1657 | CB57 | E36 | 320i_M52_LIM | IDN_RL | X | O |
| 1659 | CB59 | E36 | 320i_M52_LIM | VNM_LL | X | X |
| 1661 | CB61 | E36 | 320i_M52_LIM | EUR_LL | X | O |
| 1662 | CB62 | E36 | 320i_M52_LIM | EUR_RL | X | X |
| 1667 | CB67 | E36 | 320i_M52_LIM | IDN_RL | X | O |
| 1669 | CB69 | E36 | 320i_M52_LIM | PHL_LL | X | X |
| 1671 | CB71 | E36 | 323i_M52_LIM | EUR_LL | X | O |
| 1672 | CB72 | E36 | 323i_M52_LIM | EUR_RL | X | X |
| 1675 | CB75 | E36 | 323i_M52_LIM | THA_RL | X | X |
| 1677 | CB77 | E36 | 323i_M52_LIM | IDN_RL | X | X |
| 1678 | CB78 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1681 | CB81 | E36 | 323i_M52_LIM | EUR_LL | X | O |
| 1682 | CB82 | E36 | 323i_M52_LIM | EUR_RL | X | X |
| 1685 | CB85 | E36 | 323i_M52_LIM | THA_RL | X | X |
| 1687 | CB87 | E36 | 323i_M52_LIM | IDN_RL | X | X |
| 1688 | CB88 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1689 | CB89 | E36 | 323i_M52_LIM | MEX_LL | X | X |
| 1691 | CB91 | E36 | M3_S50_LIM | ECE_LL | X | O |
| 1692 | CB92 | E36 | M3_S50_LIM | ECE_RL | X | O |
| 15D3 | CC03 | E36 | 318i_M44_LIM | USA_LL | X | X |
| 1711 | CC11 | E36 | 325td_M51_LIM | EUR_LL | X | O |
| 1712 | CC12 | E36 | 325td_M51_LIM | EUR_RL | X | O |
| 1721 | CC21 | E36 | 325td_M51_LIM | EUR_LL | X | O |
| 1722 | CC22 | E36 | 325td_M51_LIM | EUR_RL | X | O |
| 1731 | CC31 | E36 | 325tds_M51_LIM | EUR_LL | X | O |
| 1732 | CC32 | E36 | 325tds_M51_LIM | EUR_RL | X | O |
| 1738 | CC38 | E36 | 325tds_M51_LIM | ZAF_RL | X | X |
| 1741 | CC41 | E36 | 325tds_M51_LIM | EUR_LL | X | O |
| 1742 | CC42 | E36 | 325tds_M51_LIM | EUR_RL | X | O |
| 1751 | CC51 | E36 | 318tds_M41_LIM | EUR_LL | X | O |
| 1752 | CC52 | E36 | 318tds_M41_LIM | EUR_RL | X | O |
| 15A3 | CC73 | E36 | 318i_M42_LIM | USA_LL | X | O |
| 15B3 | CC83 | E36 | 318i_M42_LIM | USA_LL | X | O |
| 15C3 | CC93 | E36 | 318i_M44_LIM | USA_LL | X | X |
| 16F3 | CD03 | E36 | M3_S52_LIM | USA_LL | X | X |
| 16A1 | CD11 | E36 | 328i_M52_LIM | EUR_LL | X | X |
| 16A2 | CD12 | E36 | 328i_M52_LIM | EUR_RL | X | O |
| 16A3 | CD13 | E36 | 328i_M52_LIM | USA_LL | X | X |
| 16A8 | CD18 | E36 | 328i_M52_LIM | ZAF_RL | X | X |
| 16B1 | CD21 | E36 | 328i_M52_LIM | EUR_LL | X | X |
| 16B2 | CD22 | E36 | 328i_M52_LIM | EUR_RL | X | O |
| 16B3 | CD23 | E36 | 328i_M52_LIM | USA_LL | X | X |
| 16B4 | CD24 | E36 | 328i_M52_LIM | MYS_RL | X | X |
| 16B7 | CD27 | E36 | 328i_M52_LIM | MEX_LL | X | X |
| 16B8 | CD28 | E36 | 328i_M52_LIM | ZAF_RL | X | X |
| 16C3 | CD33 | E36 | 328i_M52_LIM | USA_LL | X | X |
| 16D3 | CD43 | E36 | 328i_M52_LIM | USA_LL | X | X |
| 15E2 | CD52 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 15F2 | CD62 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 15C1 | CD71 | E36 | 318is_M44_LIM | EUR_LL | X | O |
| 15C2 | CD72 | E36 | 318is_M44_LIM | EUR_RL | X | O |
| 15C3 | CD73 | E36 | 318is_M44_LIM | USA_LL | X | O |
| 15C8 | CD78 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 15D1 | CD81 | E36 | 318is_M44_LIM | EUR_LL | X | O |
| 15D2 | CD82 | E36 | 318is_M44_LIM | EUR_RL | X | O |
| 15D3 | CD83 | E36 | 318is_M44_LIM | USA_LL | X | O |
| 15D8 | CD88 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 16E1 | CD91 | E36 | M3_S50_LIM | EUR_LL | X | O |
| 16E2 | CD92 | E36 | M3_S50_LIM | EUR_RL | X | O |
| 16E3 | CD93 | E36 | M3_S52_LIM | USA_LL | X | X |
| 16E8 | CD98 | E36 | M3_S50_LIM | ZAF_RL | X | X |
| 1811 | CE11 | E36 | 316i_M43_TOUR | EUR_LL | X | X |
| 1812 | CE12 | E36 | 316i_M43_TOUR | EUR_RL | X | X |
| 1821 | CE21 | E36 | 316i_M43_TOUR | EUR_LL | X | X |
| 1822 | CE22 | E36 | 316i_M43_TOUR | EUR_RL | X | X |
| 1831 | CE31 | E36 | 318i_M43_TOUR | EUR_LL | X | X |
| 1832 | CE32 | E36 | 318i_M43_TOUR | EUR_RL | X | X |
| 1841 | CE41 | E36 | 318i_M43_TOUR | EUR_LL | X | X |
| 1842 | CE42 | E36 | 318i_M43_TOUR | EUR_RL | X | X |
| 1851 | CE51 | E36 | 320i_M52_TOUR | EUR_LL | X | X |
| 1852 | CE52 | E36 | 320i_M52_TOUR | EUR_RL | X | O |
| 1861 | CE61 | E36 | 320i_M52_TOUR | EUR_LL | X | X |
| 1862 | CE62 | E36 | 320i_M52_TOUR | EUR_RL | X | O |
| 1871 | CE71 | E36 | 323i_M52_TOUR | EUR_LL | X | X |
| 1872 | CE72 | E36 | 323i_M52_TOUR | EUR_RL | X | X |
| 1881 | CE81 | E36 | 323i_M52_TOUR | EUR_LL | X | X |
| 1882 | CE82 | E36 | 323i_M52_TOUR | EUR_RL | X | X |
| 17D1 | CF01 | E36 | 325tds_M51_TOUR | EUR_LL | X | X |
| 17D2 | CF02 | E36 | 325tds_M51_TOUR | EUR_RL | X | X |
| 18A1 | CF11 | E36 | 328i_M52_TOUR | EUR_LL | X | X |
| 18A2 | CF12 | E36 | 328i_M52_TOUR | EUR_RL | X | X |
| 18B1 | CF21 | E36 | 328i_M52_TOUR | EUR_LL | X | X |
| 18B2 | CF22 | E36 | 328i_M52_TOUR | EUR_RL | X | X |
| 17A1 | CF51 | E36 | 318tds_M41_TOUR | EUR_LL | X | X |
| 17A2 | CF52 | E36 | 318tds_M41_TOUR | EUR_RL | X | X |
| 17C1 | CF91 | E36 | 325tds_M51_TOUR | EUR_LL | X | X |
| 17C2 | CF92 | E36 | 325tds_M51_TOUR | EUR_RL | X | X |
| 1C11 | CG11 | E36 | 316i_M43_COMP | EUR_LL | X | X |
| 1C12 | CG12 | E36 | 316i_M43_COMP | EUR_RL | X | X |
| 1C21 | CG21 | E36 | 316i_M43_COMP | EUR_LL | X | X |
| 1C22 | CG22 | E36 | 316i_M43_COMP | EUR_RL | X | X |
| 1C31 | CG31 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 1C41 | CG41 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 1C51 | CG51 | E36 | 318ti_M42_COMP | ECE_LL | X | O |
| 1C52 | CG52 | E36 | 318ti_M42_COMP | ECE_RL | X | O |
| 1C53 | CG53 | E36 | 318ti_M42_COMP | USA_LL | X | O |
| 1C61 | CG61 | E36 | 318ti_M42_COMP | ECE_LL | X | O |
| 1C62 | CG62 | E36 | 318ti_M42_COMP | ECE_RL | X | O |
| 1C63 | CG63 | E36 | 318ti_M42_COMP | USA_LL | X | O |
| 1C71 | CG71 | E36 | 318ti_M44_COMP | EUR_LL | X | X |
| 1C72 | CG72 | E36 | 318ti_M44_COMP | EUR_RL | X | X |
| 1C73 | CG73 | E36 | 318ti_M44_COMP | USA_LL | X | X |
| 1C81 | CG81 | E36 | 318ti_M44_COMP | EUR_LL | X | X |
| 1C82 | CG82 | E36 | 318ti_M44_COMP | EUR_RL | X | X |
| 1C83 | CG83 | E36 | 318ti_M44_COMP | USA_LL | X | X |
| 1CA1 | CH11 | E36 | 316g_M43_COMP | EUR_LL | X | X |
| 1E61 | CH31 | E36 | Z3_2.8_M52/TU_ROADST | EUR_LL | X | X |
| 1E62 | CH32 | E36 | Z3_2.8_M52/TU_ROADST | EUR_RL | X | X |
| 1E63 | CH33 | E36 | Z3_2.8_M52/TU_ROADST | USA_LL | X | X |
| 1E11 | CH71 | E36 | Z3_M44_ROADST | EUR_LL | X | O |
| 1E12 | CH72 | E36 | Z3_M44_ROADST | EUR_RL | X | O |
| 1E13 | CH73 | E36 | Z3_M44_ROADST | USA_LL | X | O |
| 1E73 | CH93 | E36 | Z3_2.3_M52/TU_ROADST | USA_LL | X | X |
| 1E31 | CJ11 | E36 | Z3_M43_ROADST | EUR_LL | X | O |
| 1E51 | CJ31 | E36 | Z3_M52_ROADST | EUR_LL | X | O |
| 1E52 | CJ32 | E36 | Z3_M52_ROADST | EUR_RL | X | O |
| 1E53 | CJ33 | E36 | Z3_M52_ROADST | USA_LL | X | O |
| 1D51 | CJ51 | E36 | 318tds_M41_COMP | EUR_LL | X | X |
| 1D52 | CJ52 | E36 | 318tds_M41_COMP | EUR_RL | X | X |
| 1EE1 | CK31 | E36 | Z3_M52_RCOUPE | EUR_LL | X | O |
| 1EF1 | CK51 | E36 | Z3_2.8_M52/TU_COUPE | EUR_LL | X | X |
| 1EF3 | CK53 | E36 | Z3_2.8_M52/TU_COUPE | USA_LL | X | X |
| 1ED1 | CK71 | E36 | Z3_3.0_M54_COUPE | EUR_LL | X | X |
| 1ED3 | CK73 | E36 | Z3_3.0_M54_COUPE | USA_LL | X | X |
| 1E91 | CK91 | E36 | Z3_S50_ROADST | EUR_LL | X | X |
| 1E92 | CK92 | E36 | Z3_S50_ROADST | EUR_RL | X | X |
| 1E93 | CK93 | E36 | Z3_S52_ROADST | USA_LL | X | X |
| 1E81 | CL31 | E36 | Z3_2.0_M52/TU_ROADST | EUR_LL | X | X |
| 1E82 | CL32 | E36 | Z3_2.0_M52/TU_ROADST | EUR_RL | X | X |
| 1E94 | CL91 | E36 | Z3_S54_ROADST | EUR_LL | X | X |
| 1E95 | CL92 | E36 | Z3_S54_ROADST | EUR_RL | X | X |
| 1E96 | CL93 | E36 | Z3_S54_ROADST | USA_LL | X | X |
| 1E41 | CM11 | E36 | Z3_1.8_M43/TU_ROADST | EUR_LL | X | X |
| 1E42 | CM12 | E36 | Z3_1.8_M43/TU_ROADST | EUR_RL | X | X |
| 1E01 | CM91 | E36 | Z3_S50_COUPE | EUR_LL | X | X |
| 1E02 | CM92 | E36 | Z3_S50_COUPE | EUR_RL | X | X |
| 1E03 | CM93 | E36 | Z3_S52_COUPE | USA_LL | X | X |
| 1EA1 | CN11 | E36 | Z3_2.2_M54_ROADST | EUR_LL | X | X |
| 1EA2 | CN12 | E36 | Z3_2.2_M54_ROADST | EUR_RL | X | X |
| 1EB3 | CN33 | E36 | Z3_2.5_M54_ROADST | USA_LL | X | X |
| 1EC1 | CN51 | E36 | Z3_3.0_M54_ROADST | EUR_LL | X | X |
| 1EC2 | CN52 | E36 | Z3_3.0_M54_ROADST | EUR_RL | X | X |
| 1EC3 | CN53 | E36 | Z3_3.0_M54_ROADST | USA_LL | X | X |
| 1E04 | CN91 | E36 | Z3_S54_COUPE | EUR_LL | X | X |
| 1E05 | CN92 | E36 | Z3_S54_COUPE | EUR_RL | X | X |
| 1E06 | CN93 | E36 | Z3_S54_COUPE | USA_LL | X | X |
| 1221 | CP21 | E36 | 316i_M43_LIM | ZAF_LL | X | X |
| 1231 | CP31 | E36 | 318i_M43_LIM | ZAF_LL | X | X |
| 1232 | CP32 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1242 | CP42 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1271 | CP71 | E36 | 323i_M52_LIM | ZAF_LL | X | X |
| 1272 | CP72 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1281 | CP81 | E36 | 323i_M52_LIM | ZAF_LL | X | X |
| 1282 | CP82 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1D31 | CS11 | E36 | 316i_M43/TU_COMP | EUR_LL | X | X |
| 1D32 | CS12 | E36 | 316i_M43/TU_COMP | EUR_RL | X | X |
| 1D41 | CS21 | E36 | 316i_M43/TU_COMP | EUR_LL | X | X |
| 1D42 | CS22 | E36 | 316i_M43/TU_COMP | EUR_RL | X | X |
| 1D11 | CT31 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 1D21 | CT41 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 4001 | GE01 | E38 | 725tds_A_M51_LIM | EUR_LL | X | X |
| 4011 | GE11 | E38 | 728i_M_M52_LIM | EUR_LL | X | X |
| 4021 | GE21 | E38 | 728i_A_M52_LIM | EUR_LL | X | X |
| 4022 | GE22 | E38 | 728i_A_M52_LIM | EUR_RL | X | X |
| 4031 | GE31 | E38 | 728i_M_M52/TU_LIM | EUR_LL | X | X |
| 4041 | GE41 | E38 | 728i_A_M52/TU_LIM | EUR_LL | X | X |
| 4042 | GE42 | E38 | 728i_A_M52/TU_LIM | EUR_RL | X | X |
| 4061 | GE61 | E38 | 730d_A_M57_LIM | EUR_LL | X | X |
| 4081 | GE81 | E38 | 740d_A_M67_LIM | EUR_LL | X | X |
| 4091 | GE91 | E38 | 725tds_M_M51_LIM | EUR_LL | X | X |
| 4111 | GF11 | E38 | 730i_M_M60/1_LIM | EUR_LL | X | X |
| 4121 | GF21 | E38 | 730i_A_M60/1_LIM | EUR_LL | X | X |
| 4122 | GF22 | E38 | 730i_A_M60/1_LIM | EUR_RL | X | X |
| 4125 | GF25 | E38 | 730i_A_M60/1_LIM | THA_RL | X | X |
| 4131 | GF31 | E38 | 735i_M_M62_LIM | EUR_LL | X | X |
| 4141 | GF41 | E38 | 735i_A_M62_LIM | EUR_LL | X | X |
| 4142 | GF42 | E38 | 735i_A_M62_LIM | EUR_RL | X | X |
| 4151 | GF51 | E38 | 740i_M_M60/2_LIM | EUR_LL | X | X |
| 4161 | GF61 | E38 | 740i_A_M60/2_LIM | EUR_LL | X | X |
| 4162 | GF62 | E38 | 740i_A_M60/2_LIM | EUR_RL | X | X |
| 4163 | GF63 | E38 | 740i_A_M60/2_LIM | USA_LL | X | X |
| 4171 | GF71 | E38 | 740i_M_M62_LIM | EUR_LL | X | X |
| 4181 | GF81 | E38 | 740i_A_M62_LIM | EUR_LL | X | X |
| 4182 | GF82 | E38 | 740i_A_M62_LIM | EUR_RL | X | X |
| 4183 | GF83 | E38 | 740i_A_M62_LIM | USA_LL | X | X |
| 4201 | GG01 | E38 | 750i_A_M73/TU_LIM | EUR_LL | X | X |
| 4202 | GG02 | E38 | 750i_A_M73/TU_LIM | EUR_RL | X | X |
| 4221 | GG21 | E38 | 750i_A_M73_LIM | EUR_LL | X | X |
| 4222 | GG22 | E38 | 750i_A_M73_LIM | EUR_RL | X | X |
| 4241 | GG41 | E38 | 735i_A_M62/TU_LIM | EUR_LL | X | X |
| 4242 | GG42 | E38 | 735i_A_M62/TU_LIM | EUR_RL | X | X |
| 4281 | GG81 | E38 | 740i_A_M62/TU_LIM | EUR_LL | X | X |
| 4282 | GG82 | E38 | 740i_A_M62/TU_LIM | EUR_RL | X | X |
| 4283 | GG83 | E38 | 740i_A_M62/TU_LIM | USA_LL | X | X |
| 4301 | GH01 | E38 | 740iL_A_M62/TU_LIM_PL | EUR_LL | X | X |
| 4303 | GH03 | E38 | 740iL_A_M62/TU_LIM_PL | USA_LL | X | X |
| 4321 | GH21 | E38 | 728iL_A_M52_LIM | EUR_LL | X | X |
| 4325 | GH25 | E38 | 728iL_A_M52_LIM | THA_RL | X | X |
| 4341 | GH41 | E38 | 728iL_A_M52/TU_LIM | EUR_LL | X | X |
| 4345 | GH45 | E38 | 728iL_A_M52/TU_LIM | THA_RL | X | X |
| 4361 | GH61 | E38 | 735iL_A_M62/TU_LIM | EUR_LL | X | X |
| 4362 | GH62 | E38 | 735iL_A_M62/TU_LIM | EUR_RL | X | X |
| 4367 | GH67 | E38 | 735iL_A_M62/TU_LIM | IDN_RL | X | X |
| 4381 | GH81 | E38 | 740iL_A_M62/TU_LIM | EUR_LL | X | X |
| 4382 | GH82 | E38 | 740iL_A_M62/TU_LIM | EUR_RL | X | X |
| 4383 | GH83 | E38 | 740iL_A_M62/TU_LIM | USA_LL | X | X |
| 4385 | GH85 | E38 | 740iL_A_M62/TU_LIM | THA_RL | X | X |
| 4401 | GJ01 | E38 | 750iL_A_M73/TU_LIM | EUR_LL | X | X |
| 4402 | GJ02 | E38 | 750iL_A_M73/TU_LIM | EUR_RL | X | X |
| 4403 | GJ03 | E38 | 750iL_A_M73/TU_LIM | USA_LL | X | X |
| 4411 | GJ11 | E38 | 730iL_M_M60/1_LIM | EUR_LL | X | X |
| 4421 | GJ21 | E38 | 730iL_A_M60/1_LIM | EUR_LL | X | X |
| 4422 | GJ22 | E38 | 730iL_A_M60/1_LIM | EUR_RL | X | X |
| 4427 | GJ27 | E38 | 730iL_A_M60/1_LIM | IDN_RL | X | X |
| 4441 | GJ41 | E38 | 735iL_A_M62_LIM | EUR_LL | X | X |
| 4442 | GJ42 | E38 | 735iL_A_M62_LIM | EUR_RL | X | X |
| 4447 | GJ47 | E38 | 735iL_A_M62_LIM | IDN_RL | X | X |
| 4461 | GJ61 | E38 | 740iL_A_M60/2_LIM | EUR_LL | X | X |
| 4462 | GJ62 | E38 | 740iL_A_M60/2_LIM | EUR_RL | X | X |
| 4463 | GJ63 | E38 | 740iL_A_M60/2_LIM | USA_LL | X | X |
| 4481 | GJ81 | E38 | 740iL_A_M62_LIM | EUR_LL | X | X |
| 4482 | GJ82 | E38 | 740iL_A_M62_LIM | EUR_RL | X | X |
| 4483 | GJ83 | E38 | 740iL_A_M62_LIM | USA_LL | X | X |
| 4485 | GJ85 | E38 | 740iL_A_M62_LIM | THA_RL | X | X |
| 4487 | GJ87 | E38 | 740iL_A_M62_LIM | MEX_LL | X | X |
| 4521 | GK21 | E38 | 750iL_A_M73_LIM | EUR_LL | X | X |
| 4522 | GK22 | E38 | 750iL_A_M73_LIM | EUR_RL | X | X |
| 4523 | GK23 | E38 | 750iL_A_M73_LIM | USA_LL | X | X |
| 4561 | GK61 | E38 | 750iXL_A_M73_LIM | EUR_LL | X | X |
| 4562 | GK62 | E38 | 750iXL_A_M73_LIM | EUR_RL | X | X |
| 4581 | GK81 | E38 | 750iXL_A_M73/TU_LIM | EUR_LL | X | X |
| 4582 | GK82 | E38 | 750iXL_A_M73/TU_LIM | EUR_RL | X | X |
| 4591 | GK91 | E38 | 750iL_A_M73/TU_LIM_PL | EUR_LL | X | X |
| 4593 | GK93 | E38 | 750iL_A_M73/TU_LIM_PL | USA_LL | X | X |
| 5311 | DD11 | E39 | 520i_M_M52_LIM | EUR_LL | X | X |
| 5312 | DD12 | E39 | 520i_M_M52_LIM | EUR_RL | X | X |
| 5321 | DD21 | E39 | 520i_A_M52_LIM | EUR_LL | X | X |
| 5322 | DD22 | E39 | 520i_A_M52_LIM | EUR_RL | X | X |
| 5324 | DD24 | E39 | 520i_A_M52_LIM | MYS_RL | X | X |
| 5331 | DD31 | E39 | 523i_M_M52_LIM | EUR_LL | X | X |
| 5332 | DD32 | E39 | 523i_M_M52_LIM | EUR_RL | X | X |
| 5337 | DD37 | E39 | 523i_M_M52_LIM | IDN_RL | X | X |
| 5341 | DD41 | E39 | 523i_A_M52_LIM | EUR_LL | X | X |
| 5342 | DD42 | E39 | 523i_A_M52_LIM | EUR_RL | X | X |
| 5344 | DD44 | E39 | 523i_A_M52_LIM | MYS_RL | X | X |
| 5345 | DD45 | E39 | 523i_A_M52_LIM | THA_RL | X | X |
| 5346 | DD46 | E39 | 523i_A_M52_LIM | EGY_LL | X | X |
| 5347 | DD47 | E39 | 523i_A_M52_LIM | IDN_RL | X | X |
| 5349 | DD49 | E39 | 523i_A_M52_LIM | PHL_LL | X | X |
| 5351 | DD51 | E39 | 528i_M_M52_LIM | EUR_LL | X | X |
| 5352 | DD52 | E39 | 528i_M_M52_LIM | EUR_RL | X | X |
| 5353 | DD53 | E39 | 528i_M_M52_LIM | USA_LL | X | X |
| 5359 | DD59 | E39 | 528i_M_M52_LIM | VNM_LL | X | X |
| 5361 | DD61 | E39 | 528i_A_M52_LIM | EUR_LL | X | X |
| 5362 | DD62 | E39 | 528i_A_M52_LIM | EUR_RL | X | X |
| 5363 | DD63 | E39 | 528i_A_M52_LIM | USA_LL | X | X |
| 5366 | DD66 | E39 | 528i_A_M52_LIM | IDN_RL | X | X |
| 5367 | DD67 | E39 | 528i_A_M52_LIM | MEX_LL | X | X |
| 5411 | DE11 | E39 | 535i_M_M62_LIM | EUR_LL | X | X |
| 5412 | DE12 | E39 | 535i_M_M62_LIM | EUR_RL | X | X |
| 5421 | DE21 | E39 | 535i_A_M62_LIM | EUR_LL | X | X |
| 5422 | DE22 | E39 | 535i_A_M62_LIM | EUR_RL | X | X |
| 5451 | DE51 | E39 | 540i_M_M62_LIM | EUR_LL | X | X |
| 5452 | DE52 | E39 | 540i_M_M62_LIM | EUR_RL | X | X |
| 5453 | DE53 | E39 | 540i_M_M62_LIM | USA_LL | X | X |
| 5461 | DE61 | E39 | 540i_A_M62_LIM | EUR_LL | X | X |
| 5462 | DE62 | E39 | 540i_A_M62_LIM | EUR_RL | X | X |
| 5463 | DE63 | E39 | 540i_A_M62_LIM | USA_LL | X | X |
| 5467 | DE67 | E39 | 540i_A_M62_LIM | MEX_LL | X | X |
| 5481 | DE81 | E39 | 540i_A_M62_LIM_PL | EUR_LL | X | X |
| 5482 | DE82 | E39 | 540i_A_M62_LIM_PL | EUR_RL | X | X |
| 5483 | DE83 | E39 | 540i_A_M62_LIM_PL | USA_LL | X | X |
| 5487 | DE87 | E39 | 540i_A_M62_LIM_PL | MEX_LL | X | X |
| 5491 | DE91 | E39 | M5_M_S62_LIM | EUR_LL | X | X |
| 5492 | DE92 | E39 | M5_M_S62_LIM | EUR_RL | X | X |
| 5493 | DE93 | E39 | M5_M_S62_LIM | USA_LL | X | X |
| 5551 | DF51 | E39 | 525td_M_M51_LIM | EUR_LL | X | X |
| 5571 | DF71 | E39 | 525tds_M_M51_LIM | EUR_LL | X | X |
| 5572 | DF72 | E39 | 525tds_M_M51_LIM | EUR_RL | X | X |
| 5581 | DF81 | E39 | 525tds_A_M51_LIM | EUR_LL | X | X |
| 5582 | DF82 | E39 | 525tds_A_M51_LIM | EUR_RL | X | X |
| 5671 | DG71 | E39 | 525tds_M_M51_TOUR | EUR_LL | X | X |
| 5672 | DG72 | E39 | 525tds_M_M51_TOUR | EUR_RL | X | X |
| 5681 | DG81 | E39 | 525tds_A_M51_TOUR | EUR_LL | X | X |
| 5682 | DG82 | E39 | 525tds_A_M51_TOUR | EUR_RL | X | X |
| 5711 | DH11 | E39 | 520i_M_M52_TOUR | EUR_LL | X | X |
| 5712 | DH12 | E39 | 520i_M_M52_TOUR | EUR_RL | X | X |
| 5721 | DH21 | E39 | 520i_A_M52_TOUR | EUR_LL | X | X |
| 5722 | DH22 | E39 | 520i_A_M52_TOUR | EUR_RL | X | X |
| 5731 | DH31 | E39 | 523i_M_M52_TOUR | EUR_LL | X | X |
| 5732 | DH32 | E39 | 523i_M_M52_TOUR | EUR_RL | X | X |
| 5741 | DH41 | E39 | 523i_A_M52_TOUR | EUR_LL | X | X |
| 5742 | DH42 | E39 | 523i_A_M52_TOUR | EUR_RL | X | X |
| 5751 | DH51 | E39 | 528i_M_M52_TOUR | EUR_LL | X | X |
| 5752 | DH52 | E39 | 528i_M_M52_TOUR | EUR_RL | X | X |
| 5761 | DH61 | E39 | 528i_A_M52_TOUR | EUR_LL | X | X |
| 5762 | DH62 | E39 | 528i_A_M52_TOUR | EUR_RL | X | X |
| 5951 | DJ51 | E39 | 540i_M_M62_TOUR | EUR_LL | X | X |
| 5952 | DJ52 | E39 | 540i_M_M62_TOUR | EUR_RL | X | X |
| 5961 | DJ61 | E39 | 540i_A_M62_TOUR | EUR_LL | X | X |
| 5962 | DJ62 | E39 | 540i_A_M62_TOUR | EUR_RL | X | X |
| 5E01 | DL01 | E39 | 525d_A_M57_LIM | EUR_LL | X | X |
| 5E02 | DL02 | E39 | 525d_A_M57_LIM | EUR_RL | X | X |
| 5E38 | DL38 | E39 | 523i_M_M52/TU_LIM | RUS_LL | X | X |
| 5E48 | DL48 | E39 | 523i_A_M52/TU_LIM | RUS_LL | X | X |
| 5171 | DL71 | E39 | 530d_M_M57_LIM | EUR_LL | X | X |
| 5172 | DL72 | E39 | 530d_M_M57_LIM | EUR_RL | X | X |
| 5181 | DL81 | E39 | 530d_A_M57_LIM | EUR_LL | X | X |
| 5182 | DL82 | E39 | 530d_A_M57_LIM | EUR_RL | X | X |
| 5E91 | DL91 | E39 | 525d_M_M57_LIM | EUR_LL | X | X |
| 5E92 | DL92 | E39 | 525d_M_M57_LIM | EUR_RL | X | X |
| 5A11 | DM11 | E39 | 520i_M_M52/TU_LIM | EUR_LL | X | X |
| 5A12 | DM12 | E39 | 520i_M_M52/TU_LIM | EUR_RL | X | X |
| 5A21 | DM21 | E39 | 520i_A_M52/TU_LIM | EUR_LL | X | X |
| 5A22 | DM22 | E39 | 520i_A_M52/TU_LIM | EUR_RL | X | X |
| 5A24 | DM24 | E39 | 520i_A_M52/TU_LIM | MYS_RL | X | X |
| 5A26 | DM26 | E39 | 520i_A_M52/TU_LIM | EGY_LL | X | X |
| 5A31 | DM31 | E39 | 523i_M_M52/TU_LIM | EUR_LL | X | X |
| 5A32 | DM32 | E39 | 523i_M_M52/TU_LIM | EUR_RL | X | X |
| 5A37 | DM37 | E39 | 523i_M_M52/TU_LIM | IDN_RL | X | X |
| 5A41 | DM41 | E39 | 523i_A_M52/TU_LIM | EUR_LL | X | X |
| 5A42 | DM42 | E39 | 523i_A_M52/TU_LIM | EUR_RL | X | X |
| 5A44 | DM44 | E39 | 523i_A_M52/TU_LIM | MYS_RL | X | X |
| 5A45 | DM45 | E39 | 523i_A_M52/TU_LIM | THA_RL | X | X |
| 5A46 | DM46 | E39 | 523i_A_M52/TU_LIM | EGY_LL | X | X |
| 5A47 | DM47 | E39 | 523i_A_M52/TU_LIM | IDN_RL | X | X |
| 5A49 | DM49 | E39 | 523i_A_M52/TU_LIM | PHL_LL | X | X |
| 5A51 | DM51 | E39 | 528i_M_M52/TU_LIM | EUR_LL | X | X |
| 5A52 | DM52 | E39 | 528i_M_M52/TU_LIM | EUR_RL | X | X |
| 5A53 | DM53 | E39 | 528i_M_M52/TU_LIM | USA_LL | X | X |
| 5A58 | DM58 | E39 | 528i_M_M52/TU_LIM | RUS_LL | X | X |
| 5A61 | DM61 | E39 | 528i_A_M52/TU_LIM | EUR_LL | X | X |
| 5A62 | DM62 | E39 | 528i_A_M52/TU_LIM | EUR_RL | X | X |
| 5A63 | DM63 | E39 | 528i_A_M52/TU_LIM | USA_LL | X | X |
| 5A64 | DM64 | E39 | 528i_A_M52/TU_LIM | MYS_RL | X | X |
| 5A66 | DM66 | E39 | 528i_A_M52/TU_LIM | IDN_RL | X | X |
| 5A67 | DM67 | E39 | 528i_A_M52/TU_LIM | MEX_LL | X | X |
| 5A68 | DM68 | E39 | 528i_A_M52/TU_LIM | RUS_LL | X | X |
| 5A69 | DM69 | E39 | 528i_A_M52/TU_LIM | VNM_LL | X | X |
| 5A71 | DM71 | E39 | 520d_M_M47_LIM | EUR_LL | X | X |
| 5A87 | DM87 | E39 | 528i_A_M52/TU_LIM_PL | MEX_LL | X | X |
| 5B11 | DN11 | E39 | 535i_M_M62/TU_LIM | EUR_LL | X | X |
| 5B12 | DN12 | E39 | 535i_M_M62/TU_LIM | EUR_RL | X | X |
| 5B21 | DN21 | E39 | 535i_A_M62/TU_LIM | EUR_LL | X | X |
| 5B22 | DN22 | E39 | 535i_A_M62/TU_LIM | EUR_RL | X | X |
| 5B51 | DN51 | E39 | 540i_M_M62/TU_LIM | EUR_LL | X | X |
| 5B52 | DN52 | E39 | 540i_M_M62/TU_LIM | EUR_RL | X | X |
| 5B53 | DN53 | E39 | 540i_M_M62/TU_LIM | USA_LL | X | X |
| 5B61 | DN61 | E39 | 540i_A_M62/TU_LIM | EUR_LL | X | X |
| 5B62 | DN62 | E39 | 540i_A_M62/TU_LIM | EUR_RL | X | X |
| 5B63 | DN63 | E39 | 540i_A_M62/TU_LIM | USA_LL | X | X |
| 5B67 | DN67 | E39 | 540i_A_M62/TU_LIM | MEX_LL | X | X |
| 5B81 | DN81 | E39 | 540i_A_M62/TU_LIM_PL | EUR_LL | X | X |
| 5B82 | DN82 | E39 | 540i_A_M62/TU_LIM_PL | EUR_RL | X | X |
| 5B83 | DN83 | E39 | 540i_A_M62/TU_LIM_PL | USA_LL | X | X |
| 5B87 | DN87 | E39 | 540i_A_M62/TU_LIM_PL | MEX_LL | X | X |
| 5C01 | DP01 | E39 | 525d_A_M57_TOUR | EUR_LL | X | X |
| 5C02 | DP02 | E39 | 525d_A_M57_TOUR | EUR_RL | X | X |
| 5C51 | DP51 | E39 | 528i_M_M52/TU_TOUR | EUR_LL | X | X |
| 5C52 | DP52 | E39 | 528i_M_M52/TU_TOUR | EUR_RL | X | X |
| 5C53 | DP53 | E39 | 528i_M_M52/TU_TOUR | USA_LL | X | X |
| 5C61 | DP61 | E39 | 528i_A_M52/TU_TOUR | EUR_LL | X | X |
| 5C62 | DP62 | E39 | 528i_A_M52/TU_TOUR | EUR_RL | X | X |
| 5C63 | DP63 | E39 | 528i_A_M52/TU_TOUR | USA_LL | X | X |
| 5871 | DP71 | E39 | 530d_M_M57_TOUR | EUR_LL | X | X |
| 5872 | DP72 | E39 | 530d_M_M57_TOUR | EUR_RL | X | X |
| 5881 | DP81 | E39 | 530d_A_M57_TOUR | EUR_LL | X | X |
| 5882 | DP82 | E39 | 530d_A_M57_TOUR | EUR_RL | X | X |
| 5C91 | DP91 | E39 | 525d_M_M57_TOUR | EUR_LL | X | X |
| 5C92 | DP92 | E39 | 525d_M_M57_TOUR | EUR_RL | X | X |
| 5C11 | DR11 | E39 | 520i_M_M52/TU_TOUR | EUR_LL | X | X |
| 5C12 | DR12 | E39 | 520i_M_M52/TU_TOUR | EUR_RL | X | X |
| 5C21 | DR21 | E39 | 520i_A_M52/TU_TOUR | EUR_LL | X | X |
| 5C22 | DR22 | E39 | 520i_A_M52/TU_TOUR | EUR_RL | X | X |
| 5C31 | DR31 | E39 | 523i_M_M52/TU_TOUR | EUR_LL | X | X |
| 5C32 | DR32 | E39 | 523i_M_M52/TU_TOUR | EUR_RL | X | X |
| 5C41 | DR41 | E39 | 523i_A_M52/TU_TOUR | EUR_LL | X | X |
| 5C42 | DR42 | E39 | 523i_A_M52/TU_TOUR | EUR_RL | X | X |
| 5D51 | DR51 | E39 | 540i_M_M62/TU_TOUR | EUR_LL | X | X |
| 5D52 | DR52 | E39 | 540i_M_M62/TU_TOUR | EUR_RL | X | X |
| 5D61 | DR61 | E39 | 540i_A_M62/TU_TOUR | EUR_LL | X | X |
| 5D62 | DR62 | E39 | 540i_A_M62/TU_TOUR | EUR_RL | X | X |
| 5D63 | DR63 | E39 | 540i_A_M62/TU_TOUR | USA_LL | X | X |
| 5D71 | DR71 | E39 | 520d_M_M47_TOUR | EUR_LL | X | X |
| 5E11 | DS11 | E39 | 520i_M_M54_TOUR | EUR_LL | X | X |
| 5E12 | DS12 | E39 | 520i_M_M54_TOUR | EUR_RL | X | X |
| 5E21 | DS21 | E39 | 520i_A_M54_TOUR | EUR_LL | X | X |
| 5E22 | DS22 | E39 | 520i_A_M54_TOUR | EUR_RL | X | X |
| 5E31 | DS31 | E39 | 525i_M_M54_TOUR | EUR_LL | X | X |
| 5E32 | DS32 | E39 | 525i_M_M54_TOUR | EUR_RL | X | X |
| 5E33 | DS33 | E39 | 525i_M_M54_TOUR | USA_LL | X | X |
| 5E41 | DS41 | E39 | 525i_A_M54_TOUR | EUR_LL | X | X |
| 5E42 | DS42 | E39 | 525i_A_M54_TOUR | EUR_RL | X | X |
| 5E43 | DS43 | E39 | 525i_A_M54_TOUR | USA_LL | X | X |
| 5E51 | DS51 | E39 | 530i_M_M54_TOUR | EUR_LL | X | X |
| 5E52 | DS52 | E39 | 530i_M_M54_TOUR | EUR_RL | X | X |
| 5E61 | DS61 | E39 | 530i_A_M54_TOUR | EUR_LL | X | X |
| 5E62 | DS62 | E39 | 530i_A_M54_TOUR | EUR_RL | X | X |
| 5F11 | DT11 | E39 | 520i_M_M54_LIM | EUR_LL | X | X |
| 5F12 | DT12 | E39 | 520i_M_M54_LIM | EUR_RL | X | X |
| 5F21 | DT21 | E39 | 520i_A_M54_LIM | EUR_LL | X | X |
| 5F22 | DT22 | E39 | 520i_A_M54_LIM | EUR_RL | X | X |
| 5F24 | DT24 | E39 | 520i_A_M54_LIM | MYS_RL | X | X |
| 5F26 | DT26 | E39 | 520i_A_M54_LIM | EGY_LL | X | X |
| 5F23 | DT27 | E39 | 520i_A_M54_LIM | IDN_RL | X | O |
| 5F31 | DT31 | E39 | 525i_M_M54_LIM | EUR_LL | X | X |
| 5F32 | DT32 | E39 | 525i_M_M54_LIM | EUR_RL | X | X |
| 5F33 | DT33 | E39 | 525i_M_M54_LIM | USA_LL | X | X |
| 5F35 | DT35 | E39 | 525i_M_M54_LIM | RUS_LL | X | X |
| 5F41 | DT41 | E39 | 525i_A_M54_LIM | EUR_LL | X | X |
| 5F42 | DT42 | E39 | 525i_A_M54_LIM | EUR_RL | X | X |
| 5F43 | DT43 | E39 | 525i_A_M54_LIM | USA_LL | X | X |
| 5F44 | DT44 | E39 | 525i_A_M54_LIM | MYS_RL | X | X |
| 5F45 | DT45 | E39 | 525i_A_M54_LIM | RUS_LL | X | X |
| 5F46 | DT46 | E39 | 525i_A_M54_LIM | EGY_LL | X | X |
| 5F47 | DT47 | E39 | 525i_A_M54_LIM | IDN_RL | X | X |
| 5F48 | DT48 | E39 | 525i_A_M54_LIM | VNM_LL | X | X |
| 5F49 | DT49 | E39 | 525i_A_M54_LIM | PHL_LL | X | X |
| 5F51 | DT51 | E39 | 530i_M_M54_LIM | EUR_LL | X | X |
| 5F52 | DT52 | E39 | 530i_M_M54_LIM | EUR_RL | X | X |
| 5F53 | DT53 | E39 | 530i_M_M54_LIM | USA_LL | X | X |
| 5F55 | DT55 | E39 | 530i_M_M54_LIM | RUS_LL | X | X |
| 5F61 | DT61 | E39 | 530i_A_M54_LIM | EUR_LL | X | X |
| 5F62 | DT62 | E39 | 530i_A_M54_LIM | EUR_RL | X | X |
| 5F63 | DT63 | E39 | 530i_A_M54_LIM | USA_LL | X | X |
| 5F65 | DT65 | E39 | 530i_A_M54_LIM | RUS_LL | X | X |
| 5F66 | DT66 | E39 | 530i_A_M54_LIM | IDN_RL | X | X |
| 5F68 | DT68 | E39 | 530i_A_M54_LIM | MYS_RL | X | X |
| 6511 | AL11 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| 6512 | AL12 | E46 | 316i_M43/TU_LIM | EUR_RL | X | X |
| 6518 | AL18 | E46 | 318i_M43/TU_LIM | VNM_LL | X | X |
| 6531 | AL31 | E46 | 318i_M43/TU_LIM | EUR_LL | X | X |
| 6532 | AL32 | E46 | 318i_M43/TU_LIM | EUR_RL | X | X |
| 6534 | AL34 | E46 | 318i_M43/TU_LIM | MYS_RL | X | X |
| 6535 | AL35 | E46 | 318i_M43/TU_LIM | THA_RL | X | X |
| 6536 | AL36 | E46 | 318i_M43/TU_LIM | EGY_LL | X | X |
| 6537 | AL37 | E46 | 318i_M43/TU_LIM | IDN_RL | X | X |
| 6539 | AL39 | E46 | 318i_M43/TU_LIM | PHL_LL | X | X |
| 6551 | AL51 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| 6555 | AL55 | E46 | 316i_M43/TU_LIM | PHL_LL | X | X |
| 6558 | AL58 | E46 | 318i_M43/TU_LIM | RUS_LL | X | X |
| 6771 | AL71 | E46 | 320d_M47_LIM | EUR_LL | X | X |
| 6772 | AL72 | E46 | 320d_M47_LIM | EUR_RL | X | X |
| 6781 | AL91 | E46 | 330d_M57_LIM | EUR_LL | X | X |
| 6782 | AL92 | E46 | 330d_M57_LIM | EUR_RL | X | X |
| 6611 | AM11 | E46 | 320i_M52/TU_LIM | EUR_LL | X | X |
| 6612 | AM12 | E46 | 320i_M52/TU_LIM | EUR_RL | X | X |
| 6631 | AM31 | E46 | 323i_M52/TU_LIM | EUR_LL | X | X |
| 6632 | AM32 | E46 | 323i_M52/TU_LIM | EUR_RL | X | X |
| 6633 | AM33 | E46 | 323i_M52/TU_LIM | USA_LL | X | X |
| 6635 | AM35 | E46 | 323i_M52/TU_LIM | THA_RL | X | X |
| 6636 | AM36 | E46 | 323i_M52/TU_LIM | VNM_LL | X | X |
| 6637 | AM37 | E46 | 323i_M52/TU_LIM | IDN_RL | X | X |
| 6638 | AM38 | E46 | 323i_M52/TU_LIM | MEX_LL | X | X |
| 6639 | AM39 | E46 | 323i_M52/TU_LIM | PHL_LL | X | X |
| 6651 | AM51 | E46 | 328i_M52/TU_LIM | EUR_LL | X | X |
| 6652 | AM52 | E46 | 328i_M52/TU_LIM | EUR_RL | X | X |
| 6653 | AM53 | E46 | 328i_M52/TU_LIM | USA_LL | X | X |
| 6654 | AM54 | E46 | 328i_M52/TU_LIM | MYS_RL | X | X |
| 6657 | AM57 | E46 | 328i_M52/TU_LIM | MEX_LL | X | X |
| 6671 | AN11 | E46 | 320i_M52/TU_LIM | EUR_LL | X | X |
| 6672 | AN12 | E46 | 320i_M52/TU_LIM | EUR_RL | X | X |
| 6661 | AN15 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| 6662 | AN16 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| 66A1 | AN31 | E46 | 323i_M52/TU_LIM | EUR_LL | X | X |
| 66A2 | AN32 | E46 | 323i_M52/TU_LIM | EUR_RL | X | X |
| 66A3 | AN33 | E46 | 323i_M52/TU_LIM | USA_LL | X | X |
| 66B1 | AN35 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| 66B2 | AN36 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| 66B3 | AN37 | E46 | 325i_M54_LIM | USA_LL | X | X |
| 66C1 | AN51 | E46 | 328i_M52/TU_LIM | EUR_LL | X | X |
| 66C2 | AN52 | E46 | 328i_M52/TU_LIM | EUR_RL | X | X |
| 66D1 | AN55 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| 66D2 | AN56 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| 6572 | AN72 | E46 | 316i_M43/TU_LIM | EUR_RL | X | X |
| 6591 | AN91 | E46 | 318i_M43/TU_LIM | EUR_LL | X | X |
| 6592 | AN92 | E46 | 318i_M43/TU_LIM | EUR_RL | X | X |
| 6831 | AP31 | E46 | 318i_M43/TU_TOUR | EUR_LL | X | X |
| 6832 | AP32 | E46 | 318i_M43/TU_TOUR | EUR_RL | X | X |
| 67A1 | AP71 | E46 | 320d_M47/TU_TOUR | EUR_LL | X | O |
| 67A2 | AP72 | E46 | 320d_M47/TU_TOUR | EUR_RL | X | O |
| 6891 | AP91 | E46 | 330d_M57_TOUR | EUR_LL | X | X |
| 6892 | AP92 | E46 | 330d_M57_TOUR | EUR_RL | X | X |
| 6911 | AR11 | E46 | 320i_M52/TU_TOUR | EUR_LL | X | X |
| 6933 | AR33 | E46 | 323i_M52/TU_TOUR | USA_LL | X | X |
| 6951 | AR51 | E46 | 328i_M52/TU_TOUR | EUR_LL | X | X |
| 6952 | AR52 | E46 | 328i_M52/TU_TOUR | EUR_RL | X | X |
| 67B1 | AS71 | E46 | 320d_M47/TU_LIM | EUR_LL | X | O |
| 67B2 | AS72 | E46 | 320d_M47/TU_LIM | EUR_RL | X | O |
| 6C11 | AT11 | E46 | 316ti_N40_COMP | EUR_LL | X | O |
| 6C21 | AT31 | E46 | 325ti_M54_COMP | EUR_LL | X | X |
| 6C22 | AT32 | E46 | 325ti_M54_COMP | EUR_RL | X | X |
| 6C31 | AT51 | E46 | 316ti_N42_COMP | EUR_LL | X | X |
| 6C32 | AT52 | E46 | 316ti_N42_COMP | EUR_RL | X | X |
| 6C41 | AT71 | E46 | 320td_M47/TU_COMP | EUR_LL | X | O |
| 6C42 | AT72 | E46 | 320td_M47/TU_COMP | EUR_RL | X | O |
| 6C83 | AU33 | E46 | 325ti_M56_COMP | USA_LL | X | O |
| 6C71 | AU51 | E46 | 318ti_N42_COMP | EUR_LL | X | O |
| 6C72 | AU52 | E46 | 318ti_N42_COMP | EUR_RL | X | O |
| 6621 | AV11 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| 6622 | AV12 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| 6623 | AV13 | E46 | 320i_M54_LIM | USA_LL | X | X |
| 6628 | AV18 | E46 | 320i_M54_LIM | RUS_LL | X | X |
| 6541 | AV31 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| 6542 | AV32 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| 6543 | AV33 | E46 | 325i_M54_LIM | USA_LL | X | X |
| 6545 | AV35 | E46 | 325i_M54_LIM | MYS_RL | X | X |
| 6546 | AV36 | E46 | 325i_M54_LIM | IDN_RL | X | X |
| 6547 | AV37 | E46 | 325i_M54_LIM | PHL_LL | X | X |
| 6548 | AV38 | E46 | 325i_M54_LIM | VNM_LL | X | X |
| 6549 | AV39 | E46 | 325i_M54_LIM | MEX_LL | X | X |
| 6561 | AV51 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| 6562 | AV52 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| 6563 | AV53 | E46 | 330i_M54_LIM | USA_LL | X | X |
| 6569 | AV59 | E46 | 330i_M54_LIM | MEX_LL | X | X |
| 6722 | AV72 | E46 | 320d_M47_LIM | EUR_RL | X | X |
| 6921 | AW11 | E46 | 320i_M54_TOUR | EUR_LL | X | X |
| 6922 | AW12 | E46 | 320i_M54_TOUR | EUR_RL | X | X |
| 6971 | AW31 | E46 | 325i_M54_TOUR | EUR_LL | X | X |
| 6972 | AW32 | E46 | 325i_M54_TOUR | EUR_RL | X | X |
| 6973 | AW33 | E46 | 325i_M54_TOUR | USA_LL | X | X |
| 6981 | AW51 | E46 | 330i_M54_TOUR | EUR_LL | X | X |
| 6982 | AW52 | E46 | 330i_M54_TOUR | EUR_RL | X | X |
| 6943 | AX13 | E46 | 325i_M56_TOUR | USA_LL | X | O |
| 6841 | AX31 | E46 | 316i_N42_TOUR | EUR_LL | X | O |
| 6842 | AX32 | E46 | 316i_N42_TOUR | EUR_RL | X | O |
| 6851 | AX51 | E46 | 318i_N42_TOUR | EUR_LL | X | O |
| 6852 | AX52 | E46 | 318i_N42_TOUR | EUR_RL | X | O |
| 67C1 | AX71 | E46 | 320d_M47_TOUR | EUR_LL | X | X |
| 67C2 | AX72 | E46 | 320d_M47_TOUR | EUR_RL | X | X |
| 6521 | AY11 | E46 | 316i_N40_LIM | EUR_LL | X | O |
| 6525 | AY15 | E46 | 316i_N40_LIM | PHL_LL | X | O |
| 6581 | AY31 | E46 | 316i_N42_LIM | EUR_LL | X | O |
| 6582 | AY32 | E46 | 316i_N42_LIM | EUR_RL | X | O |
| 65B1 | AY71 | E46 | 318i_N42_LIM | EUR_LL | X | O |
| 65B2 | AY72 | E46 | 318i_N42_LIM | EUR_RL | X | O |
| 65B4 | AY74 | E46 | 318i_N42_LIM | MYS_RL | X | O |
| 65B5 | AY75 | E46 | 318i_N42_LIM | THA_RL | X | O |
| 65B6 | AY76 | E46 | 318i_N42_LIM | EGY_LL | X | O |
| 65B7 | AY77 | E46 | 318i_N42_LIM | IDN_RL | X | O |
| 65B8 | AY78 | E46 | 318i_N42_LIM | VNM_LL | X | O |
| 65B9 | AY79 | E46 | 318i_N42_LIM | PHL_LL | X | O |
| 65BA | AY98 | E46 | 318i_N42_LIM | RUS_LL | X | O |
| 67F2 | AZ12 | E46 | 320d_M47/TU_LIM | EUR_RL | X | O |
| 66C3 | AZ33 | E46 | 325i_M56_LIM | USA_LL | X | O |
| 66D3 | AZ53 | E46 | 330i_M56_LIM | USA_LL | X | O |
| 6031 | BL31 | E46 | 318Ci_M43/TU_COUPE | EUR_LL | X | X |
| 6032 | BL32 | E46 | 318Ci_M43/TU_COUPE | EUR_RL | X | X |
| 6051 | BL51 | E46 | 316Ci_M43/TU_COUPE | EUR_LL | X | X |
| 6191 | BL91 | E46 | M3_S54_COUPE | EUR_LL | X | X |
| 6192 | BL92 | E46 | M3_S54_COUPE | EUR_RL | X | X |
| 6193 | BL93 | E46 | M3_S54_COUPE | USA_LL | X | X |
| 6111 | BM11 | E46 | 320Ci_M52/TU_COUPE | EUR_LL | X | X |
| 6131 | BM31 | E46 | 323Ci_M52/TU_COUPE | EUR_LL | X | X |
| 6132 | BM32 | E46 | 323Ci_M52/TU_COUPE | EUR_RL | X | X |
| 6133 | BM33 | E46 | 323Ci_M52/TU_COUPE | USA_LL | X | X |
| 6151 | BM51 | E46 | 328Ci_M52/TU_COUPE | EUR_LL | X | X |
| 6152 | BM52 | E46 | 328Ci_M52/TU_COUPE | EUR_RL | X | X |
| 6153 | BM53 | E46 | 328Ci_M52/TU_COUPE | USA_LL | X | X |
| 6071 | BM71 | E46 | 316Ci_N40_COUPE | EUR_LL | X | O |
| 6121 | BN11 | E46 | 320Ci_M54_COUPE | EUR_LL | X | X |
| 6122 | BN12 | E46 | 320Ci_M54_COUPE | EUR_RL | X | X |
| 6141 | BN31 | E46 | 325Ci_M54_COUPE | EUR_LL | X | X |
| 6142 | BN32 | E46 | 325Ci_M54_COUPE | EUR_RL | X | X |
| 6143 | BN33 | E46 | 325Ci_M54_COUPE | USA_LL | X | X |
| 6161 | BN51 | E46 | 330Ci_M54_COUPE | EUR_LL | X | X |
| 6162 | BN52 | E46 | 330Ci_M54_COUPE | EUR_RL | X | X |
| 6163 | BN53 | E46 | 330Ci_M54_COUPE | USA_LL | X | X |
| 6113 | BN73 | E46 | 325Ci_M56_COUPE | USA_LL | X | O |
| 6173 | BN93 | E46 | 330Ci_M56_COUPE | USA_LL | X | O |
| 6331 | BP71 | E46 | 318Ci_N42_CABRIO | EUR_LL | X | O |
| 6332 | BP72 | E46 | 318Ci_N42_CABRIO | EUR_RL | X | O |
| 6431 | BR31 | E46 | 323Ci_M52/TU_CABRIO | EUR_LL | X | X |
| 6432 | BR32 | E46 | 323Ci_M52/TU_CABRIO | EUR_RL | X | X |
| 6433 | BR33 | E46 | 323Ci_M52/TU_CABRIO | USA_LL | X | X |
| 6491 | BR91 | E46 | M3_S54_CABRIO | EUR_LL | X | X |
| 6492 | BR92 | E46 | M3_S54_CABRIO | EUR_RL | X | X |
| 6493 | BR93 | E46 | M3_S54_CABRIO | USA_LL | X | X |
| 6421 | BS11 | E46 | 320Ci_M54_CABRIO | EUR_LL | X | X |
| 6422 | BS12 | E46 | 320Ci_M54_CABRIO | EUR_RL | X | X |
| 6441 | BS31 | E46 | 325Ci_M54_CABRIO | EUR_LL | X | X |
| 6442 | BS32 | E46 | 325Ci_M54_CABRIO | EUR_RL | X | X |
| 6443 | BS33 | E46 | 325Ci_M54_CABRIO | USA_LL | X | X |
| 6461 | BS51 | E46 | 330Ci_M54_CABRIO | EUR_LL | X | X |
| 6462 | BS52 | E46 | 330Ci_M54_CABRIO | EUR_RL | X | X |
| 6463 | BS53 | E46 | 330Ci_M54_CABRIO | USA_LL | X | X |
| 6423 | BS73 | E46 | 325Ci_M56_CABRIO | USA_LL | X | O |
| 6413 | BS93 | E46 | 330Ci_M56_CABRIO | USA_LL | X | O |
| 6081 | BV71 | E46 | 318Ci_N42_COUPE | EUR_LL | X | O |
| 6082 | BV72 | E46 | 318Ci_N42_COUPE | EUR_RL | X | O |
| 67D1 | EL51 | E46 | 318d_M47_TOUR | EUR_LL | X | X |
| 6891 | EL91 | E46 | 330d_M57_TOUR | EUR_LL | X | X |
| 6892 | EL92 | E46 | 330d_M57_TOUR | EUR_RL | X | X |
| 6911 | EM11 | E46 | 320i_M52/TU_TOUR | EUR_LL | X | X |
| 6943 | EM33 | E46 | 325xi_M56_TOUR | USA_LL | X | O |
| 68A1 | EM91 | E46 | 330d_M57/TU_TOUR | EUR_LL | X | O |
| 68A2 | EM92 | E46 | 330d_M57/TU_TOUR | EUR_RL | X | O |
| 6921 | EN11 | E46 | 320i_M54_TOUR | EUR_LL | X | X |
| 6922 | EN12 | E46 | 320i_M54_TOUR | EUR_RL | X | X |
| 6971 | EN31 | E46 | 325i_M54_TOUR | EUR_LL | X | X |
| 6972 | EN32 | E46 | 325i_M54_TOUR | EUR_RL | X | X |
| 6973 | EN33 | E46 | 325i_M54_TOUR | USA_LL | X | X |
| 6981 | EN51 | E46 | 330i_M54_TOUR | EUR_LL | X | X |
| 6982 | EN52 | E46 | 330i_M54_TOUR | EUR_RL | X | X |
| 6971 | EP31 | E46 | 325xi_M54_TOUR | EUR_LL | X | O |
| 6973 | EP33 | E46 | 325xi_M54_TOUR | USA_LL | X | O |
| 6981 | EP51 | E46 | 330xi_M54_TOUR | EUR_LL | X | O |
| 6891 | EP71 | E46 | 330xd_M57_TOUR | EUR_LL | X | O |
| 68C1 | EP91 | E46 | 330xd_M57/TU_TOUR | EUR_LL | X | O |
| 6511 | ER11 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| 6512 | ER12 | E46 | 316i_M43/TU_LIM | EUR_RL | X | X |
| 6551 | ER51 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| 6555 | ER55 | E46 | 316i_M43/TU_LIM | PHL_LL | X | X |
| 6781 | ER91 | E46 | 330d_M57_LIM | EUR_LL | X | X |
| 6782 | ER92 | E46 | 330d_M57_LIM | EUR_RL | X | X |
| 6611 | ES11 | E46 | 320i_M52/TU_LIM | EUR_LL | X | X |
| 6635 | ES35 | E46 | 323i_M52/TU_LIM | THA_RL | X | X |
| 6784 | ES92 | E46 | 330d_M57_LIM | EUR_RL | X | X |
| 6661 | ET15 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| 6662 | ET16 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| 66B1 | ET35 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| 66B2 | ET36 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| 66B3 | ET37 | E46 | 325i_M54_LIM | USA_LL | X | X |
| 66D1 | ET55 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| 66D2 | ET56 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| 66C3 | EU13 | E46 | 325xi_M56_LIM | USA_LL | X | O |
| 6541 | EU31 | E46 | 325xi_M54_LIM | EUR_LL | X | O |
| 6543 | EU33 | E46 | 325xi_M54_LIM | USA_LL | X | O |
| 67E1 | EU51 | E46 | 318d_M47_LIM | EUR_LL | X | X |
| 68B1 | EU91 | E46 | 330d_M57/TU_LIM | EUR_LL | X | O |
| 68B2 | EU92 | E46 | 330d_M57/TU_LIM | EUR_RL | X | O |
| 6621 | EV11 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| 6622 | EV12 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| 6623 | EV13 | E46 | 320i_M54_LIM | USA_LL | X | X |
| 6628 | EV18 | E46 | 320i_M54_LIM | RUS_LL | X | X |
| 6541 | EV31 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| 6542 | EV32 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| 6543 | EV33 | E46 | 325i_M54_LIM | USA_LL | X | X |
| 6545 | EV35 | E46 | 325i_M54_LIM | MYS_RL | X | X |
| 6546 | EV36 | E46 | 325i_M54_LIM | IDN_RL | X | X |
| 6547 | EV37 | E46 | 325i_M54_LIM | PHL_LL | X | X |
| 6548 | EV38 | E46 | 325i_M54_LIM | VNM_LL | X | X |
| 6549 | EV39 | E46 | 325i_M54_LIM | MEX_LL | X | X |
| 6561 | EV51 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| 6562 | EV52 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| 6563 | EV53 | E46 | 330i_M54_LIM | USA_LL | X | X |
| 6569 | EV59 | E46 | 330i_M54_LIM | MEX_LL | X | X |
| 6781 | EV91 | E46 | 330xd_M57_LIM | EUR_LL | X | O |
| 66D3 | EW13 | E46 | 330xi_M56_LIM | USA_LL | X | O |
| 6561 | EW51 | E46 | 330xi_M54_LIM | EUR_LL | X | O |
| 6563 | EW53 | E46 | 330xi_M54_LIM | USA_LL | X | O |
| 68D1 | EW91 | E46 | 330xd_M57/TU_LIM | EUR_LL | X | O |
| 7011 | EJ11 | E52 | Z8_S62_ROADST | EUR_LL | X | X |
| 9011 | EJ11 | E52 | Z8_S62_ROADST | EUR_LL | X | X |
| 7013 | EJ13 | E52 | Z8_S62_ROADST | USA_LL | X | X |
| 9013 | EJ13 | E52 | Z8_S62_ROADST | USA_LL | X | X |
| 8051 | FA51 | E53 | X5_3.0i_M54_GEFZG | EUR_LL | X | X |
| 8052 | FA52 | E53 | X5_3.0i_M54_GEFZG | EUR_RL | X | X |
| 8053 | FA53 | E53 | X5_3.0i_M54_GEFZG | USA_LL | X | X |
| 8071 | FA71 | E53 | X5_3.0d_M57_GEFZG | EUR_LL | X | X |
| 8072 | FA72 | E53 | X5_3.0d_M57_GEFZG | EUR_RL | X | X |
| 8131 | FB31 | E53 | X5_4.4i_M62/TU_GEFZG | EUR_LL | X | X |
| 8132 | FB32 | E53 | X5_4.4i_M62/TU_GEFZG | EUR_RL | X | X |
| 8133 | FB33 | E53 | X5_4.4i_M62/TU_GEFZG | USA_LL | X | X |
| 8191 | FB91 | E53 | X5_4.6is_M62/TU_GEFZG | EUR_LL | X | O |
| 8192 | FB92 | E53 | X5_4.6is_M62/TU_GEFZG | EUR_RL | X | O |
| 8193 | FB93 | E53 | X5_4.6is_M62/TU_GEFZG | USA_LL | X | O |
| GL21 | GL21 | E65 | 730i_M54_LIM | EUR_LL | X | O |
| GL22 | GL22 | E65 | 730i_M54_LIM | EUR_RL | X | O |
| GL41 | GL41 | E65 | 735i_N62_LIM | EUR_LL | X | X |
| GL42 | GL42 | E65 | 735i_N62_LIM | EUR_RL | X | X |
| GL61 | GL61 | E65 | 745i_N62_LIM | EUR_LL | X | X |
| GL62 | GL62 | E65 | 745i_N62_LIM | EUR_RL | X | X |
| GL63 | GL63 | E65 | 745i_N62_LIM | USA_LL | X | X |
| GL81 | GL81 | E65 | 760i_N73_LIM | EUR_LL | X | O |
| GL82 | GL82 | E65 | 760i_N73_LIM | EUR_RL | X | O |
| GM21 | GM21 | E65 | 730d_M57/TU_LIM | EUR_LL | X | O |
| GM41 | GM41 | E65 | 740d_M67_LIM | EUR_LL | X | O |
| GN21 | GN21 | E66 | 730Li_M54_LIM | EUR_LL | X | O |
| GN22 | GN22 | E66 | 730Li_M54_LIM | EUR_RL | X | O |
| GN41 | GN41 | E66 | 735Li_N62_LIM | EUR_LL | X | O |
| GN42 | GN42 | E66 | 735Li_N62_LIM | EUR_RL | X | O |
| GN61 | GN61 | E66 | 745Li_N62_LIM | EUR_LL | X | O |
| GN62 | GN62 | E66 | 745Li_N62_LIM | EUR_RL | X | O |
| GN63 | GN63 | E66 | 745Li_N62_LIM | USA_LL | X | O |
| GN81 | GN81 | E66 | 760Li_N73_LIM | EUR_LL | X | O |
| GN82 | GN82 | E66 | 760Li_N73_LIM | EUR_RL | X | O |
| GN83 | GN83 | E66 | 760Li_N73_LIM | USA_LL | X | O |
| GP61 | GP61 | E67 | 745Li_N62_LIM | EUR_LL | X | O |
| GP62 | GP62 | E67 | 745Li_N62_LIM | EUR_RL | X | O |
| GP81 | GP81 | E67 | 760Li_N73_LIM | EUR_LL | X | O |
| GP82 | GP82 | E67 | 760Li_N73_LIM | EUR_RL | X | O |
| GP83 | GP83 | E67 | 760Li_N73_LIM | USA_LL | X | O |
| B031 | RA31 | R50 | MINI_ONE_W10_COUPE | EUR_LL | X | X |
| B032 | RA32 | R50 | MINI_ONE_W10_COUPE | EUR_RL | X | X |
| B231 | RC31 | R50 | COOPER_W10_COUPE | EUR_LL | X | X |
| B232 | RC32 | R50 | COOPER_W10_COUPE | EUR_RL | X | X |
| B233 | RC33 | R50 | COOPER_W10_COUPE | USA_LL | X | O |
| B431 | RE31 | R53 | COOPER_S_W11_COUPE | EUR_LL | X | X |
| B432 | RE32 | R53 | COOPER_S_W11_COUPE | EUR_RL | X | X |
| B433 | RE33 | R53 | COOPER_S_W11_COUPE | USA_LL | X | O |
| xxxx | xxxx | UNBEKANNT | UNBEKANNT | UNBEKANNT | - | - |
