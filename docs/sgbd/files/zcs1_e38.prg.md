# zcs1_e38.prg

## General

|  |  |
| --- | --- |
| File | zcs1_e38.prg |
| Type | PRG |
| Jobs | 7 |
| Tables | 3 |
| Origin | BMW VK-22 Waegner |
| Revision | 3.11 |
| Author | BMW VK-22 Hillebrand, BMW TP-421 Drexel |
| ECU Comment | SGBD zur Fahrzeugidentifikation E38, zcs1_e38.b2v |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Instrumenten-Kombination IKE E38 |  |  |
| ORIGIN | string | BMW VK-22 Waegner |  |  |
| REVISION | string | 3.11 |  |  |
| AUTHOR | string | BMW VK-22 Hillebrand, BMW TP-421 Drexel |  |  |
| COMMENT | string | SGBD zur Fahrzeugidentifikation E38, zcs1_e38.b2v |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Init-Job fuer IKE

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Default ident job

_No arguments._

### ZCS_GM_LESEN

_No description._

_No arguments._

### PROD_DATUM_LESEN

_No description._

_No arguments._

### DIAGNOSE_FORTSETZEN

Fortsetzen der Diagnose

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x02 | OKAY |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_SG_REJECTED |
| 0xB0 | ERROR_SG_PARAMETER |
| 0xB1 | ERROR_SG_FUNCTION |
| 0xFF | ERROR_SG_NACK |
| 0x00 | ERROR_SG_UNBEKANNTES_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
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
| 4001 | GE01 | E38 | 725tds_A_M51_LIM | EUR_LL | X | X |
| 4011 | GE11 | E38 | 728i_M_M52_LIM | EUR_LL | X | X |
| 4021 | GE21 | E38 | 728i_A_M52_LIM | EUR_LL | X | X |
| 4022 | GE22 | E38 | 728i_A_M52_LIM | EUR_RL | X | X |
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
| 4221 | GG21 | E38 | 750i_A_M73_LIM | EUR_LL | X | X |
| 4222 | GG22 | E38 | 750i_A_M73_LIM | EUR_RL | X | X |
| 4321 | GH21 | E38 | 728iL_A_M52_LIM | EUR_LL | X | X |
| 4325 | GH25 | E38 | 728iL_A_M52_LIM | THA_RL | X | X |
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
| xxxx | xxxx | UNBEKANNT | UNBEKANNT | UNBEKANNT | - | - |
