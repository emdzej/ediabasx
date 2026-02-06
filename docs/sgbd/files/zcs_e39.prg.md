# zcs_e39.prg

## General

|  |  |
| --- | --- |
| File | zcs_e39.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 3 |
| Origin | BMW VS-221 Waegner |
| Revision | 3.8 |
| Author | BMW TP-421 Huber, BMW TP-421 Drexel, BMW VS-221 Waegner |
| ECU Comment | SGBD zur Fahrzeugidentifikation E39, zcs_e39.b2v |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische Wegfahrsperre - alle Typen |  |  |
| ORIGIN | string | BMW VS-221 Waegner |  |  |
| REVISION | string | 3.08 |  |  |
| AUTHOR | string | BMW TP-421 Huber, BMW TP-421 Drexel, BMW VS-221 Waegner |  |  |
| COMMENT | string | SGBD zur Fahrzeugidentifikation E39, zcs_e39.b2v |  |  |
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
| 5091 | DA91 | E39 | 518i_M_N43_LIM | EUR_LL | X | O |
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
| 5691 | DG91 | E39 | 518i_M_N43_TOUR | EUR_LL | X | O |
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
| 5F67 | DT67 | E39 | 530i_A_M54_LIM | MEX_LL | X | X |
| 5F68 | DT68 | E39 | 530i_A_M54_LIM | MYS_RL | X | X |
| 5F87 | DT87 | E39 | 530i_A_M54_LIM_PL | MEX_LL | X | X |
| xxxx | xxxx | UNBEKANNT | UNBEKANNT | UNBEKANNT | - | - |
