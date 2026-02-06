# zcs_e36.prg

## General

|  |  |
| --- | --- |
| File | zcs_e36.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 3 |
| Origin | BMW VS-221 Waegner |
| Revision | 1.7 |
| Author | BMW TP-421 Huber, BMW TP-421 Drexel, BMW VS-221 Waegner |
| ECU Comment | SGBD zur Fahrzeugidentifikation E36, zcs_e36.b2v |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische Wegfahrsperre - alle Typen |  |  |
| ORIGIN | string | BMW VS-221 Waegner |  |  |
| REVISION | string | 1.07 |  |  |
| AUTHOR | string | BMW TP-421 Huber, BMW TP-421 Drexel, BMW VS-221 Waegner |  |  |
| COMMENT | string | SGBD zur Fahrzeugidentifikation E36, zcs_e36.b2v |  |  |
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
| 1303 | BK03 | E36 | M3_S52_CABRIO | USA_LL | X | X |
| 1393 | BK93 | E36 | M3_S52_CABRIO | USA_LL | X | X |
| 1501 | CA01 | E36 | 318i_M43_LIM | EUR_LL | X | X |
| 1502 | CA02 | E36 | 318i_M43_LIM | EUR_RL | X | X |
| 1242 | CP42 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
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
| 1221 | CP21 | E36 | 316i_M43_LIM | ZAF_LL | X | X |
| 1582 | CA82 | E36 | 316i_M43_LIM | EUR_RL | X | X |
| 1591 | CA91 | E36 | 318i_M43_LIM | EUR_LL | X | X |
| 1231 | CP31 | E36 | 318i_M43_LIM | ZAF_LL | X | X |
| 1592 | CA92 | E36 | 318i_M43_LIM | EUR_RL | X | X |
| 1232 | CP32 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
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
| 1271 | CP71 | E36 | 323i_M52_LIM | ZAF_LL | X | X |
| 1672 | CB72 | E36 | 323i_M52_LIM | EUR_RL | X | X |
| 1272 | CP72 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1675 | CB75 | E36 | 323i_M52_LIM | THA_RL | X | X |
| 1677 | CB77 | E36 | 323i_M52_LIM | IDN_RL | X | X |
| 1678 | CB78 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1681 | CB81 | E36 | 323i_M52_LIM | EUR_LL | X | O |
| 1281 | CP81 | E36 | 323i_M52_LIM | ZAF_LL | X | X |
| 1682 | CB82 | E36 | 323i_M52_LIM | EUR_RL | X | X |
| 1282 | CP82 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1685 | CB85 | E36 | 323i_M52_LIM | THA_RL | X | X |
| 1687 | CB87 | E36 | 323i_M52_LIM | IDN_RL | X | X |
| 1688 | CB88 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1689 | CB89 | E36 | 323i_M52_LIM | MEX_LL | X | X |
| 1691 | CB91 | E36 | M3_S50_LIM | ECE_LL | X | O |
| 1692 | CB92 | E36 | M3_S50_LIM | ECE_RL | X | O |
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
| 15C1 | CD71 | E36 | 318is_M44_LIM | EUR_LL | X | O |
| 15C2 | CD72 | E36 | 318is_M44_LIM | EUR_RL | X | O |
| 15E2 | CD52 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 15C3 | CD73 | E36 | 318is_M44_LIM | USA_LL | X | O |
| 15C8 | CD78 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 15D1 | CD81 | E36 | 318is_M44_LIM | EUR_LL | X | O |
| 15D2 | CD82 | E36 | 318is_M44_LIM | EUR_RL | X | O |
| 15F2 | CD62 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
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
| 1D11 | CT31 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 1D21 | CT41 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 1D31 | CS11 | E36 | 316i_M43/TU_COMP | EUR_LL | X | X |
| 1D32 | CS12 | E36 | 316i_M43/TU_COMP | EUR_RL | X | X |
| 1D41 | CS21 | E36 | 316i_M43/TU_COMP | EUR_LL | X | X |
| 1D42 | CS22 | E36 | 316i_M43/TU_COMP | EUR_RL | X | X |
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
| 1D51 | CJ51 | E36 | 318tds_M41_COMP | EUR_LL | X | X |
| 1D52 | CJ52 | E36 | 318tds_M41_COMP | EUR_RL | X | X |
| 1E11 | CH71 | E36 | Z3_1.9_M44_ROADST | EUR_LL | X | X |
| 1E12 | CH72 | E36 | Z3_1.9_M44_ROADST | EUR_RL | X | X |
| 1E13 | CH73 | E36 | Z3_1.9_M44_ROADST | USA_LL | X | X |
| 1E31 | CJ11 | E36 | Z3_1.8_M43_ROADST | EUR_LL | X | X |
| 1E41 | CM11 | E36 | Z3_1.8_M43/TU_ROADST | EUR_LL | X | X |
| 1E42 | CM12 | E36 | Z3_1.8_M43/TU_ROADST | EUR_RL | X | X |
| 1E51 | CJ31 | E36 | Z3_2.8_M52_ROADST | EUR_LL | X | X |
| 1E52 | CJ32 | E36 | Z3_2.8_M52_ROADST | EUR_RL | X | X |
| 1E53 | CJ33 | E36 | Z3_2.8_M52_ROADST | USA_LL | X | X |
| 1E81 | CL31 | E36 | Z3_2.0_M52/TU_ROADST | EUR_LL | X | X |
| 1E82 | CL32 | E36 | Z3_2.0_M52/TU_ROADST | EUR_RL | X | X |
| 1E61 | CH31 | E36 | Z3_2.8_M52/TU_ROADST | EUR_LL | X | X |
| 1E62 | CH32 | E36 | Z3_2.8_M52/TU_ROADST | EUR_RL | X | X |
| 1E63 | CH33 | E36 | Z3_2.8_M52/TU_ROADST | USA_LL | X | X |
| 1E73 | CH93 | E36 | Z3_2.3_M52/TU_ROADST | USA_LL | X | X |
| 1EA1 | CN11 | E36 | Z3_2.2_M54_ROADST | EUR_LL | X | X |
| 1EA2 | CN12 | E36 | Z3_2.2_M54_ROADST | EUR_RL | X | X |
| 1EA3 | CN13 | E36 | Z3_2.2_M54_ROADST | USA_LL | X | X |
| 1EB3 | CN33 | E36 | Z3_2.5_M54_ROADST | USA_LL | X | X |
| 1EC1 | CN51 | E36 | Z3_3.0_M54_ROADST | EUR_LL | X | X |
| 1EC2 | CN52 | E36 | Z3_3.0_M54_ROADST | EUR_RL | X | X |
| 1EC3 | CN53 | E36 | Z3_3.0_M54_ROADST | USA_LL | X | X |
| 1ED1 | CK71 | E36 | Z3_3.0_M54_COUPE | EUR_LL | X | X |
| 1ED3 | CK73 | E36 | Z3_3.0_M54_COUPE | USA_LL | X | X |
| 1EE1 | CK31 | E36 | Z3_2.8_M52_COUPE | EUR_LL | X | X |
| 1E01 | CM91 | E36 | Z3_S50_COUPE | EUR_LL | X | X |
| 1E02 | CM92 | E36 | Z3_S50_COUPE | EUR_RL | X | X |
| 1E03 | CM93 | E36 | Z3_S52_COUPE | USA_LL | X | X |
| 1E04 | CN91 | E36 | Z3_S54_COUPE | EUR_LL | X | X |
| 1E05 | CN92 | E36 | Z3_S54_COUPE | EUR_RL | X | X |
| 1E06 | CN93 | E36 | Z3_S54_COUPE | USA_LL | X | X |
| 1EF1 | CK51 | E36 | Z3_2.8_M52/TU_COUPE | EUR_LL | X | X |
| 1EF3 | CK53 | E36 | Z3_2.8_M52/TU_COUPE | USA_LL | X | X |
| 1E91 | CK91 | E36 | Z3_S50_ROADST | EUR_LL | X | X |
| 1E92 | CK92 | E36 | Z3_S50_ROADST | EUR_RL | X | X |
| 1E93 | CK93 | E36 | Z3_S52_ROADST | USA_LL | X | X |
| 1E94 | CL91 | E36 | Z3_S54_ROADST | EUR_LL | X | X |
| 1E95 | CL92 | E36 | Z3_S54_ROADST | EUR_RL | X | X |
| 1E96 | CL93 | E36 | Z3_S54_ROADST | USA_LL | X | X |
| xxxx | xxxx | UNBEKANNT | UNBEKANNT | UNBEKANNT | - | - |
