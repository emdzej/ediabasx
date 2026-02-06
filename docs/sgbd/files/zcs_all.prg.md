# zcs_all.prg

## General

|  |  |
| --- | --- |
| File | zcs_all.prg |
| Type | PRG |
| Jobs | 10 |
| Tables | 3 |
| Origin | BMW VS-22 Waegner |
| Revision | 1.4 |
| Author | BMW VS-22 Waegner |
| ECU Comment | SGBD zur Fahrzeugidentifikation, zcs_all.b2s |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektronische Wegfahrsperre - alle Typen |  |  |
| ORIGIN | string | BMW VS-22 Waegner |  |  |
| REVISION | string | 1.04 |  |  |
| AUTHOR | string | BMW VS-22 Waegner |  |  |
| COMMENT | string | SGBD zur Fahrzeugidentifikation, zcs_all.b2s |  |  |
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

| GMZST | TYPSNR | BR | VERK | MOTOR | ANTR | GETR | HUBR | KAROS | LEIST | LENK | TUER | LAND | REIHE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 6511 | AL11 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | LL | 4 | EUR | 3 |
| 6512 | AL12 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | RL | 4 | EUR | 3 |
| 6518 | AL18 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | VNM | 3 |
| 6531 | AL31 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | EUR | 3 |
| 6532 | AL32 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | EUR | 3 |
| 6534 | AL34 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | MYS | 3 |
| 6535 | AL35 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | THA | 3 |
| 6536 | AL36 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | EGY | 3 |
| 6537 | AL37 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | IDN | 3 |
| 6539 | AL39 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | PHL | 3 |
| 6551 | AL51 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 75 | LL | 4 | EUR | 3 |
| 6555 | AL55 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 77 | LL | 4 | PHL | 3 |
| 6558 | AL58 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 85 | LL | 4 | RUS | 3 |
| 6771 | AL71 | E46 | 320D | M47 | HECK | MECH | 20.00 | LIM | 100 | LL | 4 | EUR | 3 |
| 6772 | AL72 | E46 | 320D | M47 | HECK | MECH | 20.00 | LIM | 100 | RL | 4 | EUR | 3 |
| 6781 | AL91 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | LL | 4 | EUR | 3 |
| 6782 | AL92 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | RL | 4 | EUR | 3 |
| 6611 | AM11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 6612 | AM12 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 6631 | AM31 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 6632 | AM32 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 6633 | AM33 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | USA | 3 |
| 6635 | AM35 | E46 | 323I | M52/TU | HECK | MECH | 24.00 | LIM | 135 | RL | 4 | THA | 3 |
| 6636 | AM36 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | VNM | 3 |
| 6637 | AM37 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | IDN | 3 |
| 6638 | AM38 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | MEX | 3 |
| 6639 | AM39 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | PHL | 3 |
| 6651 | AM51 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| 6652 | AM52 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| 6653 | AM53 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 6654 | AM54 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | MYS | 3 |
| 6657 | AM57 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | MEX | 3 |
| 6671 | AN11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 6672 | AN12 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 6661 | AN15 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 6662 | AN16 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 66A1 | AN31 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 66A2 | AN32 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 66A3 | AN33 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | USA | 3 |
| 66B1 | AN35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| 66B2 | AN36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| 66B3 | AN37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 66C1 | AN51 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| 66C2 | AN52 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| 66D1 | AN55 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| 66D2 | AN56 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| 6572 | AN72 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | RL | 4 | EUR | 3 |
| 6591 | AN91 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | EUR | 3 |
| 6592 | AN92 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | EUR | 3 |
| 6831 | AP31 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | TOUR | 87 | LL | 5 | EUR | 3 |
| 6832 | AP32 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | TOUR | 87 | RL | 5 | EUR | 3 |
| 67A1 | AP71 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| 67A2 | AP72 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 3 |
| 6891 | AP91 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | LL | 5 | EUR | 3 |
| 6892 | AP92 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | RL | 5 | EUR | 3 |
| 6911 | AR11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| 6933 | AR33 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | TOUR | 125 | LL | 5 | USA | 3 |
| 6951 | AR51 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | EUR | 3 |
| 6952 | AR52 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | RL | 5 | EUR | 3 |
| 67B1 | AS71 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 67B2 | AS72 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 6C11 | AT11 | E46 | 316TI | N40 | HECK | MECH | 16.00 | COMP | 85 | LL | 3 | EUR | 3 |
| 6C21 | AT31 | E46 | 325TI | M54 | HECK | MECH | 25.00 | COMP | 141 | LL | 3 | EUR | 3 |
| 6C22 | AT32 | E46 | 325TI | M54 | HECK | MECH | 25.00 | COMP | 141 | RL | 3 | EUR | 3 |
| 6C31 | AT51 | E46 | 316TI | N42 | HECK | MECH | 18.00 | COMP | 85 | LL | 3 | EUR | 3 |
| 6C32 | AT52 | E46 | 316TI | N42 | HECK | MECH | 18.00 | COMP | 85 | RL | 3 | EUR | 3 |
| 6C41 | AT71 | E46 | 320TD | M47/TU | HECK | MECH | 20.00 | COMP | 110 | LL | 3 | EUR | 3 |
| 6C42 | AT72 | E46 | 320TD | M47/TU | HECK | MECH | 20.00 | COMP | 110 | RL | 3 | EUR | 3 |
| 6C83 | AU33 | E46 | 325TI | M56 | HECK | MECH | 25.00 | COMP | 135 | LL | 3 | USA | 3 |
| 6C71 | AU51 | E46 | 318TI | N42 | HECK | MECH | 20.00 | COMP | 105 | LL | 3 | EUR | 3 |
| 6C72 | AU52 | E46 | 318TI | N42 | HECK | MECH | 20.00 | COMP | 105 | RL | 3 | EUR | 3 |
| 6621 | AV11 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 6622 | AV12 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 6623 | AV13 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | USA | 3 |
| 6628 | AV18 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | RUS | 3 |
| 6541 | AV31 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| 6542 | AV32 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| 6543 | AV33 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 6545 | AV35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | MYS | 3 |
| 6546 | AV36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | IDN | 3 |
| 6547 | AV37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | PHL | 3 |
| 6548 | AV38 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | VNM | 3 |
| 6549 | AV39 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | MEX | 3 |
| 6561 | AV51 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| 6562 | AV52 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| 6563 | AV53 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 3 |
| 6569 | AV59 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | MEX | 3 |
| 6722 | AV72 | E46 | 320D | M47 | HECK | MECH | 20.00 | LIM | 100 | RL | 4 | EUR | 3 |
| 6921 | AW11 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| 6922 | AW12 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| 6971 | AW31 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 3 |
| 6972 | AW32 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | RL | 5 | EUR | 3 |
| 6973 | AW33 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | USA | 3 |
| 6981 | AW51 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 3 |
| 6982 | AW52 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 3 |
| 6943 | AX13 | E46 | 325I | M56 | HECK | MECH | 25.00 | TOUR | 135 | LL | 5 | USA | 3 |
| 6841 | AX31 | E46 | 316I | N42 | HECK | MECH | 18.00 | TOUR | 0 | LL | 5 | EUR | 3 |
| 6842 | AX32 | E46 | 316I | N42 | HECK | MECH | 18.00 | TOUR | 0 | RL | 5 | EUR | 3 |
| 6851 | AX51 | E46 | 318I | N42 | HECK | MECH | 20.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| 6852 | AX52 | E46 | 318I | N42 | HECK | MECH | 20.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| 67C1 | AX71 | E46 | 320D | M47 | HECK | MECH | 20.00 | TOUR | 100 | LL | 5 | EUR | 3 |
| 67C2 | AX72 | E46 | 320D | M47 | HECK | MECH | 20.00 | TOUR | 100 | RL | 5 | EUR | 3 |
| 6521 | AY11 | E46 | 316I | N40 | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 6525 | AY15 | E46 | 316I | N40 | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | PHL | 3 |
| 6581 | AY31 | E46 | 316I | N42 | HECK | MECH | 18.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 6582 | AY32 | E46 | 316I | N42 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | EUR | 3 |
| 65B1 | AY71 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| 65B2 | AY72 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | EUR | 3 |
| 65B4 | AY74 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | MYS | 3 |
| 65B5 | AY75 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | THA | 3 |
| 65B6 | AY76 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EGY | 3 |
| 65B7 | AY77 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | IDN | 3 |
| 65B8 | AY78 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | VNM | 3 |
| 65B9 | AY79 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | PHL | 3 |
| 65BA | AY98 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 0 | LL | 4 | RUS | 3 |
| 67F2 | AZ12 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 66C3 | AZ33 | E46 | 325I | M56 | HECK | MECH | 25.00 | LIM | 135 | LL | 4 | USA | 3 |
| 66D3 | AZ53 | E46 | 330I | M56 | HECK | MECH | 30.00 | LIM | 165 | LL | 4 | USA | 3 |
| 1031 | BE11 | E36 | 316I | M43 | HECK | MECH | 16.00 | COUPE | 75 | LL | 2 | EUR | 3 |
| 1032 | BE12 | E36 | 316I | M43 | HECK | MECH | 16.00 | COUPE | 75 | RL | 2 | EUR | 3 |
| 1041 | BE21 | E36 | 316I | M43 | HECK | AUT | 16.00 | COUPE | 75 | LL | 2 | EUR | 3 |
| 1042 | BE22 | E36 | 316I | M43 | HECK | AUT | 16.00 | COUPE | 75 | RL | 2 | EUR | 3 |
| 1051 | BE51 | E36 | 318IS | M42 | HECK | MECH | 18.00 | COUPE | 103 | LL | 2 | ECE | 3 |
| 1052 | BE52 | E36 | 318IS | M42 | HECK | MECH | 18.00 | COUPE | 103 | RL | 2 | ECE | 3 |
| 1053 | BE53 | E36 | 318IS | M42 | HECK | MECH | 18.00 | COUPE | 103 | LL | 2 | USA | 3 |
| 1061 | BE61 | E36 | 318IS | M42 | HECK | AUT | 18.00 | COUPE | 103 | LL | 2 | ECE | 3 |
| 1062 | BE62 | E36 | 318IS | M42 | HECK | AUT | 18.00 | COUPE | 103 | RL | 2 | ECE | 3 |
| 1063 | BE63 | E36 | 318IS | M42 | HECK | AUT | 18.00 | COUPE | 103 | LL | 2 | USA | 3 |
| 1071 | BE71 | E36 | 318IS | M44 | HECK | MECH | 19.00 | COUPE | 103 | LL | 2 | EUR | 3 |
| 1072 | BE72 | E36 | 318IS | M44 | HECK | MECH | 19.00 | COUPE | 103 | RL | 2 | EUR | 3 |
| 1073 | BE73 | E36 | 318IS | M44 | HECK | MECH | 19.00 | COUPE | 103 | LL | 2 | USA | 3 |
| 1081 | BE81 | E36 | 318IS | M44 | HECK | AUT | 19.00 | COUPE | 103 | LL | 2 | EUR | 3 |
| 1082 | BE82 | E36 | 318IS | M44 | HECK | AUT | 19.00 | COUPE | 103 | RL | 2 | EUR | 3 |
| 1083 | BE83 | E36 | 318IS | M44 | HECK | AUT | 19.00 | COUPE | 103 | LL | 2 | USA | 3 |
| 1103 | BF03 | E36 | M3 | S50US | HECK | AUT | 30.00 | COUPE | 176 | LL | 2 | USA | 3 |
| 1111 | BF11 | E36 | 320I | M50 | HECK | MECH | 20.00 | COUPE | 110 | LL | 2 | ECE | 3 |
| 1112 | BF12 | E36 | 320I | M50 | HECK | MECH | 20.00 | COUPE | 110 | RL | 2 | ECE | 3 |
| 1121 | BF21 | E36 | 320I | M50 | HECK | AUT | 20.00 | COUPE | 110 | LL | 2 | ECE | 3 |
| 1122 | BF22 | E36 | 320I | M50 | HECK | AUT | 20.00 | COUPE | 110 | RL | 2 | ECE | 3 |
| 1131 | BF31 | E36 | 325I | M50 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | ECE | 3 |
| 1132 | BF32 | E36 | 325I | M50 | HECK | MECH | 25.00 | COUPE | 141 | RL | 2 | ECE | 3 |
| 1133 | BF33 | E36 | 325IS | M50 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | USA | 3 |
| 1138 | BF38 | E36 | 325I | M50 | HECK | MECH | 25.00 | COUPE | 141 | RL | 2 | ZAF | 3 |
| 1141 | BF41 | E36 | 325I | M50 | HECK | AUT | 25.00 | COUPE | 141 | LL | 2 | ECE | 3 |
| 1142 | BF42 | E36 | 325I | M50 | HECK | AUT | 25.00 | COUPE | 141 | RL | 2 | ECE | 3 |
| 1143 | BF43 | E36 | 325IS | M50 | HECK | AUT | 25.00 | COUPE | 141 | LL | 2 | USA | 3 |
| 1148 | BF48 | E36 | 325I | M50 | HECK | AUT | 25.00 | COUPE | 141 | RL | 2 | ZAF | 3 |
| 1151 | BF51 | E36 | 320I | M52 | HECK | MECH | 20.00 | COUPE | 110 | LL | 2 | EUR | 3 |
| 1161 | BF61 | E36 | 320I | M52 | HECK | AUT | 20.00 | COUPE | 110 | LL | 2 | EUR | 3 |
| 1171 | BF71 | E36 | 323I | M52 | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| 1172 | BF72 | E36 | 323I | M52 | HECK | MECH | 25.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| 1173 | BF73 | E36 | 323I | M52 | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | USA | 3 |
| 1181 | BF81 | E36 | 323I | M52 | HECK | AUT | 25.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| 1182 | BF82 | E36 | 323I | M52 | HECK | AUT | 25.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| 1183 | BF83 | E36 | 323I | M52 | HECK | AUT | 25.00 | COUPE | 125 | LL | 2 | USA | 3 |
| 1191 | BF91 | E36 | M3 | S50 | HECK | MECH | 30.00 | COUPE | 210 | LL | 2 | ECE | 3 |
| 1192 | BF92 | E36 | M3 | S50 | HECK | MECH | 30.00 | COUPE | 210 | RL | 2 | ECE | 3 |
| 1193 | BF93 | E36 | M3 | S50US | HECK | MECH | 30.00 | COUPE | 176 | LL | 2 | USA | 3 |
| 1198 | BF98 | E36 | M3 | S50 | HECK | MECH | 30.00 | COUPE | 210 | RL | 2 | ZAF | 3 |
| 1199 | BF99 | E36 | M3 | S50 | HECK | MECH | 30.00 | COUPE | 217 | LL | 2 | EUR | 3 |
| 11A1 | BG11 | E36 | 328I | M52 | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| 11A2 | BG12 | E36 | 328I | M52 | HECK | MECH | 28.00 | COUPE | 142 | RL | 2 | EUR | 3 |
| 11A3 | BG13 | E36 | 328I | M52 | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | USA | 3 |
| 11B1 | BG21 | E36 | 328I | M52 | HECK | AUT | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| 11B2 | BG22 | E36 | 328I | M52 | HECK | AUT | 28.00 | COUPE | 142 | RL | 2 | EUR | 3 |
| 11B3 | BG23 | E36 | 328I | M52 | HECK | AUT | 28.00 | COUPE | 142 | LL | 2 | USA | 3 |
| 11E1 | BG91 | E36 | M3 | S50 | HECK | MECH | 32.00 | COUPE | 236 | LL | 2 | EUR | 3 |
| 11E2 | BG92 | E36 | M3 | S50 | HECK | MECH | 32.00 | COUPE | 236 | RL | 2 | EUR | 3 |
| 11E3 | BG93 | E36 | M3 | S52 | HECK | MECH | 32.00 | COUPE | 179 | LL | 2 | USA | 3 |
| 13E1 | BH31 | E36 | 318I | M43 | HECK | MECH | 18.00 | CABRIO | 85 | LL | 2 | EUR | 3 |
| 13E2 | BH32 | E36 | 318I | M43 | HECK | MECH | 18.00 | CABRIO | 85 | RL | 2 | EUR | 3 |
| 1401 | BH41 | E36 | 318I | M43 | HECK | AUT | 18.00 | CABRIO | 85 | LL | 2 | EUR | 3 |
| 1402 | BH42 | E36 | 318I | M43 | HECK | AUT | 18.00 | CABRIO | 85 | RL | 2 | EUR | 3 |
| 14C3 | BH73 | E36 | 318IS | M44 | HECK | MECH | 19.00 | CABRIO | 103 | LL | 2 | USA | 3 |
| 14D3 | BH83 | E36 | 318IS | M44 | HECK | AUT | 19.00 | CABRIO | 103 | LL | 2 | USA | 3 |
| 1411 | BJ11 | E36 | 320I | M50 | HECK | MECH | 20.00 | CABRIO | 110 | LL | 2 | ECE | 3 |
| 1412 | BJ12 | E36 | 320I | M50 | HECK | MECH | 20.00 | CABRIO | 110 | RL | 2 | ECE | 3 |
| 1421 | BJ21 | E36 | 320I | M50 | HECK | AUT | 20.00 | CABRIO | 110 | LL | 2 | ECE | 3 |
| 1422 | BJ22 | E36 | 320I | M50 | HECK | AUT | 20.00 | CABRIO | 110 | RL | 2 | ECE | 3 |
| 1431 | BJ31 | E36 | 320I | M52 | HECK | MECH | 20.00 | CABRIO | 110 | LL | 2 | EUR | 3 |
| 1432 | BJ32 | E36 | 320I | M52 | HECK | MECH | 20.00 | CABRIO | 110 | RL | 2 | EUR | 3 |
| 1441 | BJ41 | E36 | 320I | M52 | HECK | AUT | 20.00 | CABRIO | 110 | LL | 2 | EUR | 3 |
| 1442 | BJ42 | E36 | 320I | M52 | HECK | AUT | 20.00 | CABRIO | 110 | RL | 2 | EUR | 3 |
| 1451 | BJ51 | E36 | 325I | M50 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | ECE | 3 |
| 1452 | BJ52 | E36 | 325I | M50 | HECK | MECH | 25.00 | CABRIO | 141 | RL | 2 | ECE | 3 |
| 1453 | BJ53 | E36 | 325I | M50 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | USA | 3 |
| 1461 | BJ61 | E36 | 325I | M50 | HECK | AUT | 25.00 | CABRIO | 141 | LL | 2 | ECE | 3 |
| 1462 | BJ62 | E36 | 325I | M50 | HECK | AUT | 25.00 | CABRIO | 141 | RL | 2 | ECE | 3 |
| 1463 | BJ63 | E36 | 325I | M50 | HECK | AUT | 25.00 | CABRIO | 141 | LL | 2 | USA | 3 |
| 1471 | BJ71 | E36 | 323I | M52 | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| 1472 | BJ72 | E36 | 323I | M52 | HECK | MECH | 25.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| 1473 | BJ73 | E36 | 323I | M52 | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | USA | 3 |
| 1481 | BJ81 | E36 | 323I | M52 | HECK | AUT | 25.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| 1482 | BJ82 | E36 | 323I | M52 | HECK | AUT | 25.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| 1483 | BJ83 | E36 | 323I | M52 | HECK | AUT | 25.00 | CABRIO | 125 | LL | 2 | USA | 3 |
| 1491 | BJ91 | E36 | M3 | S50 | HECK | MECH | 30.00 | CABRIO | 210 | LL | 2 | ECE | 3 |
| 1492 | BJ92 | E36 | M3 | S50 | HECK | MECH | 30.00 | CABRIO | 210 | RL | 2 | ECE | 3 |
| 1303 | BK03 | E36 | M3 | S52 | HECK | AUT | 32.00 | CABRIO | 179 | LL | 2 | USA | 3 |
| 14A3 | BK53 | E36 | 318I | M42 | HECK | MECH | 18.00 | CABRIO | 103 | LL | 2 | USA | 3 |
| 14B3 | BK63 | E36 | 318I | M42 | HECK | AUT | 18.00 | CABRIO | 103 | LL | 2 | USA | 3 |
| 14E1 | BK71 | E36 | 328I | M52 | HECK | MECH | 28.00 | CABRIO | 142 | LL | 2 | EUR | 3 |
| 14E2 | BK72 | E36 | 328I | M52 | HECK | MECH | 28.00 | CABRIO | 142 | RL | 2 | EUR | 3 |
| 14E3 | BK73 | E36 | 328I | M52 | HECK | MECH | 28.00 | CABRIO | 142 | LL | 2 | USA | 3 |
| 14F1 | BK81 | E36 | 328I | M52 | HECK | AUT | 28.00 | CABRIO | 142 | LL | 2 | EUR | 3 |
| 14F2 | BK82 | E36 | 328I | M52 | HECK | AUT | 28.00 | CABRIO | 142 | RL | 2 | EUR | 3 |
| 14F3 | BK83 | E36 | 328I | M52 | HECK | AUT | 28.00 | CABRIO | 142 | LL | 2 | USA | 3 |
| 1391 | BK91 | E36 | M3 | S50 | HECK | MECH | 32.00 | CABRIO | 236 | LL | 2 | EUR | 3 |
| 1392 | BK92 | E36 | M3 | S50 | HECK | MECH | 32.00 | CABRIO | 236 | RL | 2 | EUR | 3 |
| 1393 | BK93 | E36 | M3 | S52 | HECK | MECH | 32.00 | CABRIO | 179 | LL | 2 | USA | 3 |
| 6031 | BL31 | E46 | 318CI | M43/TU | HECK | MECH | 19.00 | COUPE | 87 | LL | 2 | EUR | 3 |
| 6032 | BL32 | E46 | 318CI | M43/TU | HECK | MECH | 19.00 | COUPE | 87 | RL | 2 | EUR | 3 |
| 6051 | BL51 | E46 | 316CI | M43/TU | HECK | MECH | 16.00 | COUPE | 77 | LL | 2 | EUR | 3 |
| 6191 | BL91 | E46 | M3 | S54 | HECK | MECH | 32.00 | COUPE | 252 | LL | 2 | EUR | 3 |
| 6192 | BL92 | E46 | M3 | S54 | HECK | MECH | 32.00 | COUPE | 252 | RL | 2 | EUR | 3 |
| 6193 | BL93 | E46 | M3 | S54 | HECK | MECH | 32.00 | COUPE | 252 | LL | 2 | USA | 3 |
| 6111 | BM11 | E46 | 320CI | M52/TU | HECK | MECH | 20.00 | COUPE | 110 | LL | 2 | EUR | 3 |
| 6131 | BM31 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| 6132 | BM32 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| 6133 | BM33 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | USA | 3 |
| 6151 | BM51 | E46 | 328CI | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| 6152 | BM52 | E46 | 328CI | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | RL | 2 | EUR | 3 |
| 6153 | BM53 | E46 | 328CI | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | USA | 3 |
| 6071 | BM71 | E46 | 316CI | N40 | HECK | MECH | 16.00 | COUPE | 85 | LL | 2 | EUR | 3 |
| 6121 | BN11 | E46 | 320CI | M54 | HECK | MECH | 22.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| 6122 | BN12 | E46 | 320CI | M54 | HECK | MECH | 22.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| 6141 | BN31 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | EUR | 3 |
| 6142 | BN32 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | RL | 2 | EUR | 3 |
| 6143 | BN33 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | USA | 3 |
| 6161 | BN51 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | EUR | 3 |
| 6162 | BN52 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | RL | 2 | EUR | 3 |
| 6163 | BN53 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | USA | 3 |
| 6113 | BN73 | E46 | 325CI | M56 | HECK | MECH | 25.00 | COUPE | 135 | LL | 2 | USA | 3 |
| 6173 | BN93 | E46 | 330CI | M56 | HECK | MECH | 30.00 | COUPE | 165 | LL | 2 | USA | 3 |
| 6331 | BP71 | E46 | 318CI | N42 | HECK | MECH | 20.00 | CABRIO | 105 | LL | 2 | EUR | 3 |
| 6332 | BP72 | E46 | 318CI | N42 | HECK | MECH | 20.00 | CABRIO | 105 | RL | 2 | EUR | 3 |
| 6431 | BR31 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| 6432 | BR32 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| 6433 | BR33 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | USA | 3 |
| 6491 | BR91 | E46 | M3 | S54 | HECK | MECH | 32.00 | CABRIO | 252 | LL | 2 | EUR | 3 |
| 6492 | BR92 | E46 | M3 | S54 | HECK | MECH | 32.00 | CABRIO | 252 | RL | 2 | EUR | 3 |
| 6493 | BR93 | E46 | M3 | S54 | HECK | MECH | 32.00 | CABRIO | 252 | LL | 2 | USA | 3 |
| 6421 | BS11 | E46 | 320CI | M54 | HECK | MECH | 22.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| 6422 | BS12 | E46 | 320CI | M54 | HECK | MECH | 22.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| 6441 | BS31 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | EUR | 3 |
| 6442 | BS32 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | RL | 2 | EUR | 3 |
| 6443 | BS33 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | USA | 3 |
| 6461 | BS51 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | EUR | 3 |
| 6462 | BS52 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | RL | 2 | EUR | 3 |
| 6463 | BS53 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | USA | 3 |
| 6423 | BS73 | E46 | 325CI | M56 | HECK | MECH | 25.00 | CABRIO | 135 | LL | 2 | USA | 3 |
| 6413 | BS93 | E46 | 330CI | M56 | HECK | MECH | 30.00 | CABRIO | 165 | LL | 2 | USA | 3 |
| 6081 | BV71 | E46 | 318CI | N42 | HECK | MECH | 20.00 | COUPE | 105 | LL | 2 | EUR | 3 |
| 6082 | BV72 | E46 | 318CI | N42 | HECK | MECH | 20.00 | COUPE | 105 | RL | 2 | EUR | 3 |
| 1501 | CA01 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 1502 | CA02 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | EUR | 3 |
| 1504 | CA04 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | MYS | 3 |
| 1505 | CA05 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | THA | 3 |
| 1508 | CA08 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1509 | CA09 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1511 | CA11 | E36 | 316I | M40 | HECK | MECH | 16.00 | LIM | 73 | LL | 4 | ECE | 3 |
| 1512 | CA12 | E36 | 316I | M40 | HECK | MECH | 16.00 | LIM | 73 | RL | 4 | ECE | 3 |
| 1521 | CA21 | E36 | 316I | M40 | HECK | AUT | 16.00 | LIM | 75 | LL | 4 | ECE | 3 |
| 1522 | CA22 | E36 | 316I | M40 | HECK | AUT | 16.00 | LIM | 73 | RL | 4 | ECE | 3 |
| 1531 | CA31 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | LL | 4 | ECE | 3 |
| 1532 | CA32 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | ECE | 3 |
| 1534 | CA34 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | MYS | 3 |
| 1535 | CA35 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | THA | 3 |
| 1537 | CA37 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | IDN | 3 |
| 1538 | CA38 | E36 | 316I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | ZAF | 3 |
| 1541 | CA41 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | LL | 4 | ECE | 3 |
| 1542 | CA42 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | ECE | 3 |
| 1544 | CA44 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | MYS | 3 |
| 1545 | CA45 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | THA | 3 |
| 1547 | CA47 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | IDN | 3 |
| 1548 | CA48 | E36 | 316I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | ZAF | 3 |
| 1551 | CA51 | E36 | 318IS | M42 | HECK | MECH | 18.00 | LIM | 103 | LL | 4 | ECE | 3 |
| 1552 | CA52 | E36 | 318IS | M42 | HECK | MECH | 18.00 | LIM | 103 | RL | 4 | ECE | 3 |
| 1553 | CA53 | E36 | 318I | M42 | HECK | MECH | 18.00 | LIM | 103 | LL | 4 | USA | 3 |
| 1558 | CA58 | E36 | 318I | M42 | HECK | MECH | 18.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 1561 | CA61 | E36 | 318IS | M42 | HECK | AUT | 18.00 | LIM | 103 | LL | 4 | ECE | 3 |
| 1562 | CA62 | E36 | 318IS | M42 | HECK | AUT | 18.00 | LIM | 103 | RL | 4 | ECE | 3 |
| 1563 | CA63 | E36 | 318I | M42 | HECK | AUT | 18.00 | LIM | 103 | LL | 4 | USA | 3 |
| 1568 | CA68 | E36 | 318I | M42 | HECK | AUT | 18.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 1571 | CA71 | E36 | 316I | M43 | HECK | MECH | 16.00 | LIM | 75 | LL | 4 | EUR | 3 |
| 1572 | CA72 | E36 | 316I | M43 | HECK | MECH | 16.00 | LIM | 75 | RL | 4 | EUR | 3 |
| 1579 | CA79 | E36 | 316I | M43 | HECK | MECH | 16.00 | LIM | 75 | LL | 4 | PHL | 3 |
| 1581 | CA81 | E36 | 316I | M43 | HECK | AUT | 16.00 | LIM | 75 | LL | 4 | EUR | 3 |
| 1582 | CA82 | E36 | 316I | M43 | HECK | AUT | 16.00 | LIM | 75 | RL | 4 | EUR | 3 |
| 1591 | CA91 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 1592 | CA92 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | EUR | 3 |
| 1594 | CA94 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | MYS | 3 |
| 1595 | CA95 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | THA | 3 |
| 1597 | CA97 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | IDN | 3 |
| 1598 | CA98 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1599 | CA99 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1611 | CB11 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | ECE | 3 |
| 1612 | CB12 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | ECE | 3 |
| 1613 | CB13 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | USA | 3 |
| 1617 | CB17 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | IDN | 3 |
| 1618 | CB18 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | ZAF | 3 |
| 1621 | CB21 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | ECE | 3 |
| 1622 | CB22 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | ECE | 3 |
| 1623 | CB23 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | USA | 3 |
| 1627 | CB27 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | IDN | 3 |
| 1628 | CB28 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | ZAF | 3 |
| 1631 | CB31 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | ECE | 3 |
| 1632 | CB32 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | ECE | 3 |
| 1633 | CB33 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 1634 | CB34 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | MYS | 3 |
| 1635 | CB35 | E36 | 325I | M50 | HECK | MECH | 24.00 | LIM | 0 | RL | 4 | THA | 3 |
| 1638 | CB38 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | ZAF | 3 |
| 1639 | CB39 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | URY | 3 |
| 1641 | CB41 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | ECE | 3 |
| 1642 | CB42 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | ECE | 3 |
| 1643 | CB43 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 1644 | CB44 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | MYS | 3 |
| 1645 | CB45 | E36 | 325I | M50 | HECK | AUT | 24.00 | LIM | 0 | RL | 4 | THA | 3 |
| 1647 | CB47 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | MEX | 3 |
| 1648 | CB48 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | ZAF | 3 |
| 1651 | CB51 | E36 | 320I | M52 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 1652 | CB52 | E36 | 320I | M52 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 1657 | CB57 | E36 | 320I | M52 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | IDN | 3 |
| 1659 | CB59 | E36 | 320I | M52 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | VNM | 3 |
| 1661 | CB61 | E36 | 320I | M52 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 1662 | CB62 | E36 | 320I | M52 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 1667 | CB67 | E36 | 320I | M52 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | IDN | 3 |
| 1669 | CB69 | E36 | 320I | M52 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | PHL | 3 |
| 1671 | CB71 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 1672 | CB72 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 1675 | CB75 | E36 | 323I | M52 | HECK | MECH | 24.00 | LIM | 140 | RL | 4 | THA | 3 |
| 1677 | CB77 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | IDN | 3 |
| 1678 | CB78 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | ZAF | 3 |
| 1681 | CB81 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 1682 | CB82 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 1685 | CB85 | E36 | 323I | M52 | HECK | AUT | 24.00 | LIM | 140 | RL | 4 | THA | 3 |
| 1687 | CB87 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | IDN | 3 |
| 1688 | CB88 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | ZAF | 3 |
| 1689 | CB89 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | MEX | 3 |
| 1691 | CB91 | E36 | M3 | S50 | HECK | MECH | 30.00 | LIM | 210 | LL | 4 | ECE | 3 |
| 1692 | CB92 | E36 | M3 | S50 | HECK | MECH | 30.00 | LIM | 210 | RL | 4 | ECE | 3 |
| 15D3 | CC03 | E36 | 318I | M44 | HECK | AUT | 19.00 | LIM | 103 | LL | 4 | USA | 3 |
| 1711 | CC11 | E36 | 325TD | M51 | HECK | MECH | 25.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 1712 | CC12 | E36 | 325TD | M51 | HECK | MECH | 25.00 | LIM | 85 | RL | 4 | EUR | 3 |
| 1721 | CC21 | E36 | 325TD | M51 | HECK | AUT | 25.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 1722 | CC22 | E36 | 325TD | M51 | HECK | AUT | 25.00 | LIM | 85 | RL | 4 | EUR | 3 |
| 1731 | CC31 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | LL | 4 | EUR | 3 |
| 1732 | CC32 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | RL | 4 | EUR | 3 |
| 1738 | CC38 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | RL | 4 | ZAF | 3 |
| 1741 | CC41 | E36 | 325TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | LL | 4 | EUR | 3 |
| 1742 | CC42 | E36 | 325TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | RL | 4 | EUR | 3 |
| 1751 | CC51 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | LIM | 66 | LL | 4 | EUR | 3 |
| 1752 | CC52 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | LIM | 66 | RL | 4 | EUR | 3 |
| 15A3 | CC73 | E36 | 318I | M42 | HECK | MECH | 18.00 | LIM | 103 | LL | 4 | USA | 3 |
| 15B3 | CC83 | E36 | 318I | M42 | HECK | AUT | 18.00 | LIM | 103 | LL | 4 | USA | 3 |
| 15C3 | CC93 | E36 | 318I | M44 | HECK | MECH | 19.00 | LIM | 103 | LL | 4 | USA | 3 |
| 16F3 | CD03 | E36 | M3 | S52 | HECK | AUT | 32.00 | LIM | 179 | LL | 4 | USA | 3 |
| 16A1 | CD11 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| 16A2 | CD12 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| 16A3 | CD13 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 16A8 | CD18 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 150 | RL | 4 | ZAF | 3 |
| 16B1 | CD21 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| 16B2 | CD22 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| 16B3 | CD23 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 16B4 | CD24 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | MYS | 3 |
| 16B7 | CD27 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | MEX | 3 |
| 16B8 | CD28 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | ZAF | 3 |
| 16C3 | CD33 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 16D3 | CD43 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 15E2 | CD52 | E36 | 318IS | M44 | HECK | MECH | 19.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 15F2 | CD62 | E36 | 318IS | M44 | HECK | AUT | 19.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 15C1 | CD71 | E36 | 318IS | M44 | HECK | MECH | 19.00 | LIM | 103 | LL | 4 | EUR | 3 |
| 15C2 | CD72 | E36 | 318IS | M44 | HECK | MECH | 19.00 | LIM | 103 | RL | 4 | EUR | 3 |
| 15C3 | CD73 | E36 | 318IS | M44 | HECK | MECH | 19.00 | LIM | 103 | LL | 4 | USA | 3 |
| 15C8 | CD78 | E36 | 318IS | M44 | HECK | MECH | 19.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 15D1 | CD81 | E36 | 318IS | M44 | HECK | AUT | 19.00 | LIM | 103 | LL | 4 | EUR | 3 |
| 15D2 | CD82 | E36 | 318IS | M44 | HECK | AUT | 19.00 | LIM | 103 | RL | 4 | EUR | 3 |
| 15D3 | CD83 | E36 | 318IS | M44 | HECK | AUT | 19.00 | LIM | 103 | LL | 4 | USA | 3 |
| 15D8 | CD88 | E36 | 318IS | M44 | HECK | AUT | 19.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 16E1 | CD91 | E36 | M3 | S50 | HECK | MECH | 32.00 | LIM | 236 | LL | 4 | EUR | 3 |
| 16E2 | CD92 | E36 | M3 | S50 | HECK | MECH | 32.00 | LIM | 236 | RL | 4 | EUR | 3 |
| 16E3 | CD93 | E36 | M3 | S52 | HECK | MECH | 32.00 | LIM | 179 | LL | 4 | USA | 3 |
| 16E8 | CD98 | E36 | M3 | S50 | HECK | MECH | 32.00 | LIM | 236 | RL | 4 | ZAF | 3 |
| 1811 | CE11 | E36 | 316I | M43 | HECK | MECH | 16.00 | TOUR | 75 | LL | 5 | EUR | 3 |
| 1812 | CE12 | E36 | 316I | M43 | HECK | MECH | 16.00 | TOUR | 75 | RL | 5 | EUR | 3 |
| 1821 | CE21 | E36 | 316I | M43 | HECK | AUT | 16.00 | TOUR | 75 | LL | 5 | EUR | 3 |
| 1822 | CE22 | E36 | 316I | M43 | HECK | AUT | 16.00 | TOUR | 75 | RL | 5 | EUR | 3 |
| 1831 | CE31 | E36 | 318I | M43 | HECK | MECH | 18.00 | TOUR | 85 | LL | 5 | EUR | 3 |
| 1832 | CE32 | E36 | 318I | M43 | HECK | MECH | 18.00 | TOUR | 85 | RL | 5 | EUR | 3 |
| 1841 | CE41 | E36 | 318I | M43 | HECK | AUT | 18.00 | TOUR | 85 | LL | 5 | EUR | 3 |
| 1842 | CE42 | E36 | 318I | M43 | HECK | AUT | 18.00 | TOUR | 85 | RL | 5 | EUR | 3 |
| 1851 | CE51 | E36 | 320I | M52 | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| 1852 | CE52 | E36 | 320I | M52 | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 3 |
| 1861 | CE61 | E36 | 320I | M52 | HECK | AUT | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| 1862 | CE62 | E36 | 320I | M52 | HECK | AUT | 20.00 | TOUR | 110 | RL | 5 | EUR | 3 |
| 1871 | CE71 | E36 | 323I | M52 | HECK | MECH | 25.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| 1872 | CE72 | E36 | 323I | M52 | HECK | MECH | 25.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| 1881 | CE81 | E36 | 323I | M52 | HECK | AUT | 25.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| 1882 | CE82 | E36 | 323I | M52 | HECK | AUT | 25.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| 17D1 | CF01 | E36 | 325TDS | M51 | HECK | AUT | 25.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| 17D2 | CF02 | E36 | 325TDS | M51 | HECK | AUT | 25.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| 18A1 | CF11 | E36 | 328I | M52 | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | EUR | 3 |
| 18A2 | CF12 | E36 | 328I | M52 | HECK | MECH | 28.00 | TOUR | 142 | RL | 5 | EUR | 3 |
| 18B1 | CF21 | E36 | 328I | M52 | HECK | AUT | 28.00 | TOUR | 142 | LL | 5 | EUR | 3 |
| 18B2 | CF22 | E36 | 328I | M52 | HECK | AUT | 28.00 | TOUR | 142 | RL | 5 | EUR | 3 |
| 17A1 | CF51 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | TOUR | 66 | LL | 5 | EUR | 3 |
| 17A2 | CF52 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | TOUR | 66 | RL | 5 | EUR | 3 |
| 17C1 | CF91 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| 17C2 | CF92 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| 1C11 | CG11 | E36 | 316I | M43 | HECK | MECH | 16.00 | COMP | 75 | LL | 3 | EUR | 3 |
| 1C12 | CG12 | E36 | 316I | M43 | HECK | MECH | 16.00 | COMP | 75 | RL | 3 | EUR | 3 |
| 1C21 | CG21 | E36 | 316I | M43 | HECK | AUT | 16.00 | COMP | 75 | LL | 3 | EUR | 3 |
| 1C22 | CG22 | E36 | 316I | M43 | HECK | AUT | 16.00 | COMP | 75 | RL | 3 | EUR | 3 |
| 1C31 | CG31 | E36 | 323TI | M52 | HECK | MECH | 25.00 | COMP | 125 | LL | 3 | EUR | 3 |
| 1C41 | CG41 | E36 | 323TI | M52 | HECK | AUT | 25.00 | COMP | 125 | LL | 3 | EUR | 3 |
| 1C51 | CG51 | E36 | 318TI | M42 | HECK | MECH | 18.00 | COMP | 103 | LL | 3 | ECE | 3 |
| 1C52 | CG52 | E36 | 318TI | M42 | HECK | MECH | 18.00 | COMP | 103 | RL | 3 | ECE | 3 |
| 1C53 | CG53 | E36 | 318TI | M42 | HECK | MECH | 18.00 | COMP | 103 | LL | 3 | USA | 3 |
| 1C61 | CG61 | E36 | 318TI | M42 | HECK | AUT | 18.00 | COMP | 103 | LL | 3 | ECE | 3 |
| 1C62 | CG62 | E36 | 318TI | M42 | HECK | AUT | 18.00 | COMP | 103 | RL | 3 | ECE | 3 |
| 1C63 | CG63 | E36 | 318TI | M42 | HECK | AUT | 18.00 | COMP | 103 | LL | 3 | USA | 3 |
| 1C71 | CG71 | E36 | 318TI | M44 | HECK | MECH | 19.00 | COMP | 103 | LL | 3 | EUR | 3 |
| 1C72 | CG72 | E36 | 318TI | M44 | HECK | MECH | 19.00 | COMP | 103 | RL | 3 | EUR | 3 |
| 1C73 | CG73 | E36 | 318TI | M44 | HECK | MECH | 19.00 | COMP | 103 | LL | 3 | USA | 3 |
| 1C81 | CG81 | E36 | 318TI | M44 | HECK | AUT | 19.00 | COMP | 103 | LL | 3 | EUR | 3 |
| 1C82 | CG82 | E36 | 318TI | M44 | HECK | AUT | 19.00 | COMP | 103 | RL | 3 | EUR | 3 |
| 1C83 | CG83 | E36 | 318TI | M44 | HECK | AUT | 19.00 | COMP | 103 | LL | 3 | USA | 3 |
| 1CA1 | CH11 | E36 | 316G | M43 | HECK | MECH | 16.00 | COMP | 65 | LL | 3 | EUR | 3 |
| 1E61 | CH31 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | ROADST | 142 | LL | 2 | EUR | 3 |
| 1E62 | CH32 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | ROADST | 142 | RL | 2 | EUR | 3 |
| 1E63 | CH33 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | ROADST | 142 | LL | 2 | USA | 3 |
| 1E11 | CH71 | E36 | Z3 | M44 | HECK | MECH | 19.00 | ROADST | 103 | LL | 2 | EUR | 3 |
| 1E12 | CH72 | E36 | Z3 | M44 | HECK | MECH | 19.00 | ROADST | 103 | RL | 2 | EUR | 3 |
| 1E13 | CH73 | E36 | Z3 | M44 | HECK | MECH | 19.00 | ROADST | 103 | LL | 2 | USA | 3 |
| 1E73 | CH93 | E36 | Z3 2.3 | M52/TU | HECK | MECH | 25.00 | ROADST | 125 | LL | 2 | USA | 3 |
| 1E31 | CJ11 | E36 | Z3 | M43 | HECK | MECH | 18.00 | ROADST | 85 | LL | 2 | EUR | 3 |
| 1E51 | CJ31 | E36 | Z3 | M52 | HECK | MECH | 28.00 | ROADST | 142 | LL | 2 | EUR | 3 |
| 1E52 | CJ32 | E36 | Z3 | M52 | HECK | MECH | 28.00 | ROADST | 142 | RL | 2 | EUR | 3 |
| 1E53 | CJ33 | E36 | Z3 | M52 | HECK | MECH | 28.00 | ROADST | 142 | LL | 2 | USA | 3 |
| 1D51 | CJ51 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | COMP | 66 | LL | 3 | EUR | 3 |
| 1D52 | CJ52 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | COMP | 66 | RL | 3 | EUR | 3 |
| 1EE1 | CK31 | E36 | Z3 | M52 | HECK | MECH | 28.00 | RCOUPE | 142 | LL | 2 | EUR | 3 |
| 1EF1 | CK51 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| 1EF3 | CK53 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | USA | 3 |
| 1ED1 | CK71 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | EUR | 3 |
| 1ED3 | CK73 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | USA | 3 |
| 1E91 | CK91 | E36 | M-ROADST | S50 | HECK | MECH | 32.00 | ROADST | 236 | LL | 2 | EUR | 3 |
| 1E92 | CK92 | E36 | M-ROADST | S50 | HECK | MECH | 32.00 | ROADST | 236 | RL | 2 | EUR | 3 |
| 1E93 | CK93 | E36 | M-ROADST | S52 | HECK | MECH | 32.00 | ROADST | 179 | LL | 2 | USA | 3 |
| 1E81 | CL31 | E36 | Z3 2.0 | M52/TU | HECK | MECH | 20.00 | ROADST | 110 | LL | 2 | EUR | 3 |
| 1E82 | CL32 | E36 | Z3 2.0 | M52/TU | HECK | MECH | 20.00 | ROADST | 110 | RL | 2 | EUR | 3 |
| 1E94 | CL91 | E36 | M-ROADST | S54 | HECK | MECH | 32.00 | ROADST | 239 | LL | 2 | EUR | 3 |
| 1E95 | CL92 | E36 | M-ROADST | S54 | HECK | MECH | 32.00 | ROADST | 239 | RL | 2 | EUR | 3 |
| 1E96 | CL93 | E36 | M-ROADST | S54 | HECK | MECH | 32.00 | ROADST | 239 | LL | 2 | USA | 3 |
| 1E41 | CM11 | E36 | Z3 1.8 | M43/TU | HECK | MECH | 19.00 | ROADST | 87 | LL | 2 | EUR | 3 |
| 1E42 | CM12 | E36 | Z3 1.8 | M43/TU | HECK | MECH | 19.00 | ROADST | 87 | RL | 2 | EUR | 3 |
| 1E01 | CM91 | E36 | M-COUPE | S50 | HECK | MECH | 32.00 | COUPE | 236 | LL | 2 | EUR | 3 |
| 1E02 | CM92 | E36 | M-COUPE | S50 | HECK | MECH | 32.00 | COUPE | 236 | RL | 2 | EUR | 3 |
| 1E03 | CM93 | E36 | M-COUPE | S52 | HECK | MECH | 32.00 | COUPE | 176 | LL | 2 | USA | 3 |
| 1EA1 | CN11 | E36 | Z3 2.2 | M54 | HECK | MECH | 22.00 | ROADST | 125 | LL | 2 | EUR | 3 |
| 1EA2 | CN12 | E36 | Z3 2.2 | M54 | HECK | MECH | 22.00 | ROADST | 125 | RL | 2 | EUR | 3 |
| 1EB3 | CN33 | E36 | Z3 2.5 | M54 | HECK | MECH | 25.00 | ROADST | 141 | LL | 2 | USA | 3 |
| 1EC1 | CN51 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | ROADST | 170 | LL | 2 | EUR | 3 |
| 1EC2 | CN52 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | ROADST | 170 | RL | 2 | EUR | 3 |
| 1EC3 | CN53 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | ROADST | 170 | LL | 2 | USA | 3 |
| 1E04 | CN91 | E36 | M-COUPE | S54 | HECK | MECH | 32.00 | COUPE | 239 | LL | 2 | EUR | 3 |
| 1E05 | CN92 | E36 | M-COUPE | S54 | HECK | MECH | 32.00 | COUPE | 239 | RL | 2 | EUR | 3 |
| 1E06 | CN93 | E36 | M-COUPE | S54 | HECK | MECH | 32.00 | COUPE | 239 | LL | 2 | USA | 3 |
| 1221 | CP21 | E36 | 316I | M43 | HECK | AUT | 16.00 | LIM | 75 | LL | 4 | ZAF | 3 |
| 1231 | CP31 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | LL | 4 | ZAF | 3 |
| 1232 | CP32 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1242 | CP42 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1271 | CP71 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | ZAF | 3 |
| 1272 | CP72 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | ZAF | 3 |
| 1281 | CP81 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | ZAF | 3 |
| 1282 | CP82 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | ZAF | 3 |
| 1D31 | CS11 | E36 | 316I | M43/TU | HECK | MECH | 19.00 | COMP | 77 | LL | 3 | EUR | 3 |
| 1D32 | CS12 | E36 | 316I | M43/TU | HECK | MECH | 19.00 | COMP | 77 | RL | 3 | EUR | 3 |
| 1D41 | CS21 | E36 | 316I | M43/TU | HECK | AUT | 19.00 | COMP | 77 | LL | 3 | EUR | 3 |
| 1D42 | CS22 | E36 | 316I | M43/TU | HECK | AUT | 19.00 | COMP | 77 | RL | 3 | EUR | 3 |
| 1D11 | CT31 | E36 | 323TI | M52 | HECK | MECH | 25.00 | COMP | 125 | LL | 3 | EUR | 3 |
| 1D21 | CT41 | E36 | 323TI | M52 | HECK | AUT | 25.00 | COMP | 125 | LL | 3 | EUR | 3 |
| 5311 | DD11 | E39 | 520I | M52 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 5 |
| 5312 | DD12 | E39 | 520I | M52 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 5 |
| 5321 | DD21 | E39 | 520I | M52 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | EUR | 5 |
| 5322 | DD22 | E39 | 520I | M52 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | EUR | 5 |
| 5324 | DD24 | E39 | 520I | M52 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | MYS | 5 |
| 5331 | DD31 | E39 | 523I | M52 | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5332 | DD32 | E39 | 523I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5337 | DD37 | E39 | 523I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5341 | DD41 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5342 | DD42 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5344 | DD44 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | MYS | 5 |
| 5345 | DD45 | E39 | 523I | M52 | HECK | AUT | 24.00 | LIM | 140 | RL | 4 | THA | 5 |
| 5346 | DD46 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EGY | 5 |
| 5347 | DD47 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5349 | DD49 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | PHL | 5 |
| 5351 | DD51 | E39 | 528I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5352 | DD52 | E39 | 528I | M52 | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5353 | DD53 | E39 | 528I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 5 |
| 5359 | DD59 | E39 | 528I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | VNM | 5 |
| 5361 | DD61 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5362 | DD62 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5363 | DD63 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | USA | 5 |
| 5366 | DD66 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | IDN | 5 |
| 5367 | DD67 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | MEX | 5 |
| 5411 | DE11 | E39 | 535I | M62 | HECK | MECH | 35.00 | LIM | 170 | LL | 4 | EUR | 5 |
| 5412 | DE12 | E39 | 535I | M62 | HECK | MECH | 35.00 | LIM | 170 | RL | 4 | EUR | 5 |
| 5421 | DE21 | E39 | 535I | M62 | HECK | AUT | 35.00 | LIM | 170 | LL | 4 | EUR | 5 |
| 5422 | DE22 | E39 | 535I | M62 | HECK | AUT | 35.00 | LIM | 170 | RL | 4 | EUR | 5 |
| 5451 | DE51 | E39 | 540I | M62 | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5452 | DE52 | E39 | 540I | M62 | HECK | MECH | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5453 | DE53 | E39 | 540I | M62 | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5461 | DE61 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5462 | DE62 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5463 | DE63 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5467 | DE67 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 5 |
| 5481 | DE81 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5482 | DE82 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5483 | DE83 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5487 | DE87 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 5 |
| 5491 | DE91 | E39 | M5 | S62 | HECK | MECH | 50.00 | LIM | 294 | LL | 4 | EUR | 5 |
| 5492 | DE92 | E39 | M5 | S62 | HECK | MECH | 50.00 | LIM | 294 | RL | 4 | EUR | 5 |
| 5493 | DE93 | E39 | M5 | S62 | HECK | MECH | 50.00 | LIM | 294 | LL | 4 | USA | 5 |
| 5551 | DF51 | E39 | 525TD | M51 | HECK | MECH | 25.00 | LIM | 85 | LL | 4 | EUR | 5 |
| 5571 | DF71 | E39 | 525TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | LL | 4 | EUR | 5 |
| 5572 | DF72 | E39 | 525TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | RL | 4 | EUR | 5 |
| 5581 | DF81 | E39 | 525TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | LL | 4 | EUR | 5 |
| 5582 | DF82 | E39 | 525TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | RL | 4 | EUR | 5 |
| 5671 | DG71 | E39 | 525TDS | M51 | HECK | MECH | 25.00 | TOUR | 105 | LL | 5 | EUR | 5 |
| 5672 | DG72 | E39 | 525TDS | M51 | HECK | MECH | 25.00 | TOUR | 105 | RL | 5 | EUR | 5 |
| 5681 | DG81 | E39 | 525TDS | M51 | HECK | AUT | 25.00 | TOUR | 105 | LL | 5 | EUR | 5 |
| 5682 | DG82 | E39 | 525TDS | M51 | HECK | AUT | 25.00 | TOUR | 105 | RL | 5 | EUR | 5 |
| 5711 | DH11 | E39 | 520I | M52 | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 5 |
| 5712 | DH12 | E39 | 520I | M52 | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 5 |
| 5721 | DH21 | E39 | 520I | M52 | HECK | AUT | 20.00 | TOUR | 110 | LL | 5 | EUR | 5 |
| 5722 | DH22 | E39 | 520I | M52 | HECK | AUT | 20.00 | TOUR | 110 | RL | 5 | EUR | 5 |
| 5731 | DH31 | E39 | 523I | M52 | HECK | MECH | 25.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5732 | DH32 | E39 | 523I | M52 | HECK | MECH | 25.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5741 | DH41 | E39 | 523I | M52 | HECK | AUT | 25.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5742 | DH42 | E39 | 523I | M52 | HECK | AUT | 25.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5751 | DH51 | E39 | 528I | M52 | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5752 | DH52 | E39 | 528I | M52 | HECK | MECH | 28.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5761 | DH61 | E39 | 528I | M52 | HECK | AUT | 28.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5762 | DH62 | E39 | 528I | M52 | HECK | AUT | 28.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5951 | DJ51 | E39 | 540I | M62 | HECK | MECH | 44.00 | TOUR | 210 | LL | 5 | EUR | 5 |
| 5952 | DJ52 | E39 | 540I | M62 | HECK | MECH | 44.00 | TOUR | 210 | RL | 5 | EUR | 5 |
| 5961 | DJ61 | E39 | 540I | M62 | HECK | AUT | 44.00 | TOUR | 210 | LL | 5 | EUR | 5 |
| 5962 | DJ62 | E39 | 540I | M62 | HECK | AUT | 44.00 | TOUR | 210 | RL | 5 | EUR | 5 |
| 5E01 | DL01 | E39 | 525D | M57 | HECK | AUT | 25.00 | LIM | 120 | LL | 4 | EUR | 5 |
| 5E02 | DL02 | E39 | 525D | M57 | HECK | AUT | 25.00 | LIM | 120 | RL | 4 | EUR | 5 |
| 5E38 | DL38 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | RUS | 5 |
| 5E48 | DL48 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | RUS | 5 |
| 5171 | DL71 | E39 | 530D | M57 | HECK | MECH | 30.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5172 | DL72 | E39 | 530D | M57 | HECK | MECH | 30.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5181 | DL81 | E39 | 530D | M57 | HECK | AUT | 30.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5182 | DL82 | E39 | 530D | M57 | HECK | AUT | 30.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5E91 | DL91 | E39 | 525D | M57 | HECK | MECH | 25.00 | LIM | 120 | LL | 4 | EUR | 5 |
| 5E92 | DL92 | E39 | 525D | M57 | HECK | MECH | 25.00 | LIM | 120 | RL | 4 | EUR | 5 |
| 5A11 | DM11 | E39 | 520I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 5 |
| 5A12 | DM12 | E39 | 520I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 5 |
| 5A21 | DM21 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | EUR | 5 |
| 5A22 | DM22 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | EUR | 5 |
| 5A24 | DM24 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | MYS | 5 |
| 5A26 | DM26 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | LIM | 100 | LL | 4 | EGY | 5 |
| 5A31 | DM31 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5A32 | DM32 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5A37 | DM37 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5A41 | DM41 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5A42 | DM42 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5A44 | DM44 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | MYS | 5 |
| 5A45 | DM45 | E39 | 523I | M52/TU | HECK | AUT | 24.00 | LIM | 135 | RL | 4 | THA | 5 |
| 5A46 | DM46 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EGY | 5 |
| 5A47 | DM47 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5A49 | DM49 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | PHL | 5 |
| 5A51 | DM51 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5A52 | DM52 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5A53 | DM53 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 5 |
| 5A58 | DM58 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | RUS | 5 |
| 5A61 | DM61 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5A62 | DM62 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5A63 | DM63 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | USA | 5 |
| 5A64 | DM64 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | MYS | 5 |
| 5A66 | DM66 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | IDN | 5 |
| 5A67 | DM67 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | MEX | 5 |
| 5A68 | DM68 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | RUS | 5 |
| 5A69 | DM69 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | VNM | 5 |
| 5A71 | DM71 | E39 | 520D | M47 | HECK | MECH | 20.00 | LIM | 100 | LL | 4 | EUR | 5 |
| 5A87 | DM87 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | MEX | 5 |
| 5B11 | DN11 | E39 | 535I | M62/TU | HECK | MECH | 35.00 | LIM | 180 | LL | 4 | EUR | 5 |
| 5B12 | DN12 | E39 | 535I | M62/TU | HECK | MECH | 35.00 | LIM | 180 | RL | 4 | EUR | 5 |
| 5B21 | DN21 | E39 | 535I | M62/TU | HECK | AUT | 35.00 | LIM | 180 | LL | 4 | EUR | 5 |
| 5B22 | DN22 | E39 | 535I | M62/TU | HECK | AUT | 35.00 | LIM | 180 | RL | 4 | EUR | 5 |
| 5B51 | DN51 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5B52 | DN52 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5B53 | DN53 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5B61 | DN61 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5B62 | DN62 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5B63 | DN63 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5B67 | DN67 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 5 |
| 5B81 | DN81 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5B82 | DN82 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5B83 | DN83 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5B87 | DN87 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 5 |
| 5C01 | DP01 | E39 | 525D | M57 | HECK | AUT | 25.00 | TOUR | 120 | LL | 5 | EUR | 5 |
| 5C02 | DP02 | E39 | 525D | M57 | HECK | AUT | 25.00 | TOUR | 120 | RL | 5 | EUR | 5 |
| 5C51 | DP51 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5C52 | DP52 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5C53 | DP53 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | USA | 5 |
| 5C61 | DP61 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5C62 | DP62 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5C63 | DP63 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | TOUR | 142 | LL | 5 | USA | 5 |
| 5871 | DP71 | E39 | 530D | M57 | HECK | MECH | 30.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5872 | DP72 | E39 | 530D | M57 | HECK | MECH | 30.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5881 | DP81 | E39 | 530D | M57 | HECK | AUT | 30.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5882 | DP82 | E39 | 530D | M57 | HECK | AUT | 30.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5C91 | DP91 | E39 | 525D | M57 | HECK | MECH | 25.00 | TOUR | 120 | LL | 5 | EUR | 5 |
| 5C92 | DP92 | E39 | 525D | M57 | HECK | MECH | 25.00 | TOUR | 120 | RL | 5 | EUR | 5 |
| 5C11 | DR11 | E39 | 520I | M52/TU | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 5 |
| 5C12 | DR12 | E39 | 520I | M52/TU | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 5 |
| 5C21 | DR21 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | TOUR | 110 | LL | 5 | EUR | 5 |
| 5C22 | DR22 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | TOUR | 110 | RL | 5 | EUR | 5 |
| 5C31 | DR31 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5C32 | DR32 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5C41 | DR41 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5C42 | DR42 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5D51 | DR51 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | TOUR | 210 | LL | 5 | EUR | 5 |
| 5D52 | DR52 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | TOUR | 210 | RL | 5 | EUR | 5 |
| 5D61 | DR61 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | TOUR | 210 | LL | 5 | EUR | 5 |
| 5D62 | DR62 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | TOUR | 210 | RL | 5 | EUR | 5 |
| 5D63 | DR63 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | TOUR | 210 | LL | 5 | USA | 5 |
| 5D71 | DR71 | E39 | 520D | M47 | HECK | MECH | 20.00 | TOUR | 100 | LL | 5 | EUR | 5 |
| 5E11 | DS11 | E39 | 520I | M54 | HECK | MECH | 22.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5E12 | DS12 | E39 | 520I | M54 | HECK | MECH | 22.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5E21 | DS21 | E39 | 520I | M54 | HECK | AUT | 22.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5E22 | DS22 | E39 | 520I | M54 | HECK | AUT | 22.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5E31 | DS31 | E39 | 525I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 5 |
| 5E32 | DS32 | E39 | 525I | M54 | HECK | MECH | 25.00 | TOUR | 141 | RL | 5 | EUR | 5 |
| 5E33 | DS33 | E39 | 525I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | USA | 5 |
| 5E41 | DS41 | E39 | 525I | M54 | HECK | AUT | 25.00 | TOUR | 141 | LL | 5 | EUR | 5 |
| 5E42 | DS42 | E39 | 525I | M54 | HECK | AUT | 25.00 | TOUR | 141 | RL | 5 | EUR | 5 |
| 5E43 | DS43 | E39 | 525I | M54 | HECK | AUT | 25.00 | TOUR | 141 | LL | 5 | USA | 5 |
| 5E51 | DS51 | E39 | 530I | M54 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 5 |
| 5E52 | DS52 | E39 | 530I | M54 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 5 |
| 5E61 | DS61 | E39 | 530I | M54 | HECK | AUT | 30.00 | TOUR | 170 | LL | 5 | EUR | 5 |
| 5E62 | DS62 | E39 | 530I | M54 | HECK | AUT | 30.00 | TOUR | 170 | RL | 5 | EUR | 5 |
| 5F11 | DT11 | E39 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5F12 | DT12 | E39 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5F21 | DT21 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5F22 | DT22 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5F24 | DT24 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | RL | 4 | MYS | 5 |
| 5F26 | DT26 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | LL | 4 | EGY | 5 |
| 5F23 | DT27 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5F31 | DT31 | E39 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 5 |
| 5F32 | DT32 | E39 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 5 |
| 5F33 | DT33 | E39 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 5 |
| 5F35 | DT35 | E39 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | RUS | 5 |
| 5F41 | DT41 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | EUR | 5 |
| 5F42 | DT42 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | EUR | 5 |
| 5F43 | DT43 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | USA | 5 |
| 5F44 | DT44 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | MYS | 5 |
| 5F45 | DT45 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | RUS | 5 |
| 5F46 | DT46 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | EGY | 5 |
| 5F47 | DT47 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | IDN | 5 |
| 5F48 | DT48 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | VNM | 5 |
| 5F49 | DT49 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | PHL | 5 |
| 5F51 | DT51 | E39 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 5 |
| 5F52 | DT52 | E39 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 5 |
| 5F53 | DT53 | E39 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 5 |
| 5F55 | DT55 | E39 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | RUS | 5 |
| 5F61 | DT61 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | EUR | 5 |
| 5F62 | DT62 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | EUR | 5 |
| 5F63 | DT63 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | USA | 5 |
| 5F65 | DT65 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | RUS | 5 |
| 5F66 | DT66 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | IDN | 5 |
| 5F68 | DT68 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | MYS | 5 |
| 7011 | EJ11 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | EUR | 8 |
| 9011 | EJ11 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | EUR | 8 |
| 7013 | EJ13 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | USA | 8 |
| 9013 | EJ13 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | USA | 8 |
| 67D1 | EL51 | E46 | 318D | M47 | HECK | MECH | 20.00 | TOUR | 85 | LL | 5 | EUR | 3 |
| 6891 | EL91 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | LL | 5 | EUR | 3 |
| 6892 | EL92 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | RL | 5 | EUR | 3 |
| 6911 | EM11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| 6943 | EM33 | E46 | 325XI | M56 | ALLR | MECH | 25.00 | TOUR | 132 | LL | 5 | USA | 3 |
| 68A1 | EM91 | E46 | 330D | M57/TU | HECK | MECH | 30.00 | TOUR | 0 | LL | 5 | EUR | 3 |
| 68A2 | EM92 | E46 | 330D | M57/TU | HECK | MECH | 30.00 | TOUR | 0 | RL | 5 | EUR | 3 |
| 6921 | EN11 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| 6922 | EN12 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| 6971 | EN31 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 3 |
| 6972 | EN32 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | RL | 5 | EUR | 3 |
| 6973 | EN33 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | USA | 3 |
| 6981 | EN51 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 3 |
| 6982 | EN52 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 3 |
| 6971 | EP31 | E46 | 325XI | M54 | ALLR | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 3 |
| 6973 | EP33 | E46 | 325XI | M54 | ALLR | MECH | 25.00 | TOUR | 141 | LL | 5 | USA | 3 |
| 6981 | EP51 | E46 | 330XI | M54 | ALLR | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 3 |
| 6891 | EP71 | E46 | 330XD | M57 | ALLR | MECH | 30.00 | TOUR | 135 | LL | 5 | EUR | 3 |
| 68C1 | EP91 | E46 | 330XD | M57/TU | ALLR | MECH | 30.00 | TOUR | 135 | LL | 5 | EUR | 3 |
| 6511 | ER11 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | LL | 4 | EUR | 3 |
| 6512 | ER12 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | RL | 4 | EUR | 3 |
| 6551 | ER51 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 75 | LL | 4 | EUR | 3 |
| 6555 | ER55 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 75 | LL | 4 | PHL | 3 |
| 6781 | ER91 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | LL | 4 | EUR | 3 |
| 6782 | ER92 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | RL | 4 | EUR | 3 |
| 6611 | ES11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 6635 | ES35 | E46 | 323I | M52/TU | HECK | MECH | 24.00 | LIM | 135 | RL | 4 | THA | 3 |
| 6784 | ES92 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | RL | 4 | EUR | 3 |
| 6661 | ET15 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 6662 | ET16 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 66B1 | ET35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| 66B2 | ET36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| 66B3 | ET37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 66D1 | ET55 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| 66D2 | ET56 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| 66C3 | EU13 | E46 | 325XI | M56 | ALLR | MECH | 25.00 | LIM | 132 | LL | 4 | USA | 3 |
| 6541 | EU31 | E46 | 325XI | M54 | ALLR | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| 6543 | EU33 | E46 | 325XI | M54 | ALLR | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 67E1 | EU51 | E46 | 318D | M47 | HECK | MECH | 20.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 68B1 | EU91 | E46 | 330D | M57/TU | HECK | MECH | 30.00 | LIM | 0 | LL | 4 | EUR | 3 |
| 68B2 | EU92 | E46 | 330D | M57/TU | HECK | MECH | 30.00 | LIM | 0 | RL | 4 | EUR | 3 |
| 6621 | EV11 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 6622 | EV12 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 6623 | EV13 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | USA | 3 |
| 6628 | EV18 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | RUS | 3 |
| 6541 | EV31 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| 6542 | EV32 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| 6543 | EV33 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 6545 | EV35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | MYS | 3 |
| 6546 | EV36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | IDN | 3 |
| 6547 | EV37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | PHL | 3 |
| 6548 | EV38 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | VNM | 3 |
| 6549 | EV39 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | MEX | 3 |
| 6561 | EV51 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| 6562 | EV52 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| 6563 | EV53 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 3 |
| 6569 | EV59 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | MEX | 3 |
| 6781 | EV91 | E46 | 330XD | M57 | ALLR | MECH | 30.00 | LIM | 135 | LL | 4 | EUR | 3 |
| 66D3 | EW13 | E46 | 330XI | M56 | ALLR | MECH | 30.00 | LIM | 160 | LL | 4 | USA | 3 |
| 6561 | EW51 | E46 | 330XI | M54 | ALLR | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| 6563 | EW53 | E46 | 330XI | M54 | ALLR | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 3 |
| 68D1 | EW91 | E46 | 330XD | M57/TU | ALLR | MECH | 30.00 | LIM | 135 | LL | 4 | EUR | 3 |
| 8051 | FA51 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 4 | EUR | 5 |
| 8052 | FA52 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | RL | 4 | EUR | 5 |
| 8053 | FA53 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 4 | USA | 5 |
| 8071 | FA71 | E53 | X5 3.0D | M57 | ALLR | MECH | 30.00 | GEFZG | 135 | LL | 4 | EUR | 5 |
| 8072 | FA72 | E53 | X5 3.0D | M57 | ALLR | MECH | 30.00 | GEFZG | 135 | RL | 4 | EUR | 5 |
| 8131 | FB31 | E53 | X5 4.4I | M62/TU | ALLR | MECH | 44.00 | GEFZG | 210 | LL | 4 | EUR | 5 |
| 8132 | FB32 | E53 | X5 4.4I | M62/TU | ALLR | MECH | 44.00 | GEFZG | 210 | RL | 4 | EUR | 5 |
| 8133 | FB33 | E53 | X5 4.4I | M62/TU | ALLR | MECH | 44.00 | GEFZG | 210 | LL | 4 | USA | 5 |
| 8191 | FB91 | E53 | X5 4.6IS | M62/TU | ALLR | MECH | 46.00 | GEFZG | 255 | LL | 4 | EUR | 5 |
| 8192 | FB92 | E53 | X5 4.6IS | M62/TU | ALLR | MECH | 46.00 | GEFZG | 255 | RL | 4 | EUR | 5 |
| 8193 | FB93 | E53 | X5 4.6IS | M62/TU | ALLR | MECH | 46.00 | GEFZG | 255 | LL | 4 | USA | 5 |
| 4001 | GE01 | E38 | 725TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | LL | 4 | EUR | 7 |
| 4011 | GE11 | E38 | 728I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4021 | GE21 | E38 | 728I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4022 | GE22 | E38 | 728I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 7 |
| 4031 | GE31 | E38 | 728I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4041 | GE41 | E38 | 728I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4042 | GE42 | E38 | 728I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 7 |
| 4061 | GE61 | E38 | 730D | M57 | HECK | AUT | 30.00 | LIM | 135 | LL | 4 | EUR | 7 |
| 4081 | GE81 | E38 | 740D | M67 | HECK | AUT | 39.00 | LIM | 180 | LL | 4 | EUR | 7 |
| 4091 | GE91 | E38 | 725TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | LL | 4 | EUR | 7 |
| 4111 | GF11 | E38 | 730I | M60/1 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 7 |
| 4121 | GF21 | E38 | 730I | M60/1 | HECK | AUT | 30.00 | LIM | 160 | LL | 4 | EUR | 7 |
| 4122 | GF22 | E38 | 730I | M60/1 | HECK | AUT | 30.00 | LIM | 160 | RL | 4 | EUR | 7 |
| 4125 | GF25 | E38 | 730I | M60/1 | HECK | AUT | 30.00 | LIM | 160 | RL | 4 | THA | 7 |
| 4131 | GF31 | E38 | 735I | M62 | HECK | MECH | 35.00 | LIM | 170 | LL | 4 | EUR | 7 |
| 4141 | GF41 | E38 | 735I | M62 | HECK | AUT | 35.00 | LIM | 170 | LL | 4 | EUR | 7 |
| 4142 | GF42 | E38 | 735I | M62 | HECK | AUT | 35.00 | LIM | 170 | RL | 4 | EUR | 7 |
| 4151 | GF51 | E38 | 740I | M60/2 | HECK | MECH | 40.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4161 | GF61 | E38 | 740I | M60/2 | HECK | AUT | 40.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4162 | GF62 | E38 | 740I | M60/2 | HECK | AUT | 40.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4163 | GF63 | E38 | 740I | M60/2 | HECK | AUT | 40.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4171 | GF71 | E38 | 740I | M62 | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4181 | GF81 | E38 | 740I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4182 | GF82 | E38 | 740I | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4183 | GF83 | E38 | 740I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4201 | GG01 | E38 | 750I | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4202 | GG02 | E38 | 750I | M73/TU | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4221 | GG21 | E38 | 750I | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4222 | GG22 | E38 | 750I | M73 | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4241 | GG41 | E38 | 735I | M62/TU | HECK | AUT | 35.00 | LIM | 175 | LL | 4 | EUR | 7 |
| 4242 | GG42 | E38 | 735I | M62/TU | HECK | AUT | 35.00 | LIM | 175 | RL | 4 | EUR | 7 |
| 4281 | GG81 | E38 | 740I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4282 | GG82 | E38 | 740I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4283 | GG83 | E38 | 740I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4301 | GH01 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4303 | GH03 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4321 | GH21 | E38 | 728IL | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4325 | GH25 | E38 | 728IL | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | THA | 7 |
| 4341 | GH41 | E38 | 728IL | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4345 | GH45 | E38 | 728IL | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | THA | 7 |
| 4361 | GH61 | E38 | 735IL | M62/TU | HECK | AUT | 35.00 | LIM | 175 | LL | 4 | EUR | 7 |
| 4362 | GH62 | E38 | 735IL | M62/TU | HECK | AUT | 35.00 | LIM | 175 | RL | 4 | EUR | 7 |
| 4367 | GH67 | E38 | 735IL | M62/TU | HECK | AUT | 35.00 | LIM | 173 | RL | 4 | IDN | 7 |
| 4381 | GH81 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4382 | GH82 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4383 | GH83 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4385 | GH85 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | THA | 7 |
| 4401 | GJ01 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 0 | LL | 4 | EUR | 7 |
| 4402 | GJ02 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 0 | RL | 4 | EUR | 7 |
| 4403 | GJ03 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 0 | LL | 4 | USA | 7 |
| 4411 | GJ11 | E38 | 730IL | M60/1 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 7 |
| 4421 | GJ21 | E38 | 730IL | M60/1 | HECK | AUT | 30.00 | LIM | 160 | LL | 4 | EUR | 7 |
| 4422 | GJ22 | E38 | 730IL | M60/1 | HECK | AUT | 30.00 | LIM | 160 | RL | 4 | EUR | 7 |
| 4427 | GJ27 | E38 | 730IL | M60/1 | HECK | AUT | 30.00 | LIM | 160 | RL | 4 | IDN | 7 |
| 4441 | GJ41 | E38 | 735IL | M62 | HECK | AUT | 35.00 | LIM | 170 | LL | 4 | EUR | 7 |
| 4442 | GJ42 | E38 | 735IL | M62 | HECK | AUT | 35.00 | LIM | 170 | RL | 4 | EUR | 7 |
| 4447 | GJ47 | E38 | 735IL | M62 | HECK | AUT | 35.00 | LIM | 170 | RL | 4 | IDN | 7 |
| 4461 | GJ61 | E38 | 740IL | M60/2 | HECK | AUT | 40.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4462 | GJ62 | E38 | 740IL | M60/2 | HECK | AUT | 40.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4463 | GJ63 | E38 | 740IL | M60/2 | HECK | AUT | 40.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4481 | GJ81 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4482 | GJ82 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4483 | GJ83 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4485 | GJ85 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | THA | 7 |
| 4487 | GJ87 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 7 |
| 4501 | GK01 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4502 | GK02 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4521 | GK21 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4522 | GK22 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4523 | GK23 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | USA | 7 |
| 4541 | GK41 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4542 | GK42 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4561 | GK61 | E38 | 750IXL | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4562 | GK62 | E38 | 750IXL | M73 | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4581 | GK81 | E38 | 750IXL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4582 | GK82 | E38 | 750IXL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4591 | GK91 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4593 | GK93 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | USA | 7 |
| GL21 | GL21 | E65 | 730I | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | EUR | 7 |
| GL22 | GL22 | E65 | 730I | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | EUR | 7 |
| GL41 | GL41 | E65 | 735I | N62 | HECK | AUT | 36.00 | LIM | 200 | LL | 4 | EUR | 7 |
| GL42 | GL42 | E65 | 735I | N62 | HECK | AUT | 36.00 | LIM | 200 | RL | 4 | EUR | 7 |
| GL61 | GL61 | E65 | 745I | N62 | HECK | AUT | 44.00 | LIM | 240 | LL | 4 | EUR | 7 |
| GL62 | GL62 | E65 | 745I | N62 | HECK | AUT | 44.00 | LIM | 240 | RL | 4 | EUR | 7 |
| GL63 | GL63 | E65 | 745I | N62 | HECK | AUT | 44.00 | LIM | 240 | LL | 4 | USA | 7 |
| GL81 | GL81 | E65 | 760I | N73 | HECK | AUT | 60.00 | LIM | 300 | LL | 4 | EUR | 7 |
| GL82 | GL82 | E65 | 760I | N73 | HECK | AUT | 60.00 | LIM | 300 | RL | 4 | EUR | 7 |
| GM21 | GM21 | E65 | 730D | M57/TU | HECK | AUT | 30.00 | LIM | 135 | LL | 4 | EUR | 7 |
| GM41 | GM41 | E65 | 740D | M67 | HECK | AUT | 40.00 | LIM | 180 | LL | 4 | EUR | 7 |
| GN21 | GN21 | E66 | 730LI | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | EUR | 7 |
| GN22 | GN22 | E66 | 730LI | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | EUR | 7 |
| GN41 | GN41 | E66 | 735LI | N62 | HECK | AUT | 36.00 | LIM | 200 | LL | 4 | EUR | 7 |
| GN42 | GN42 | E66 | 735LI | N62 | HECK | AUT | 36.00 | LIM | 200 | RL | 4 | EUR | 7 |
| GN61 | GN61 | E66 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 240 | LL | 4 | EUR | 7 |
| GN62 | GN62 | E66 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 240 | RL | 4 | EUR | 7 |
| GN63 | GN63 | E66 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 240 | LL | 4 | USA | 7 |
| GN81 | GN81 | E66 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 300 | LL | 4 | EUR | 7 |
| GN82 | GN82 | E66 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 300 | RL | 4 | EUR | 7 |
| GN83 | GN83 | E66 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 300 | LL | 4 | USA | 7 |
| GP61 | GP61 | E67 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 240 | LL | 4 | EUR | 7 |
| GP62 | GP62 | E67 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 240 | RL | 4 | EUR | 7 |
| GP81 | GP81 | E67 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 300 | LL | 4 | EUR | 7 |
| GP82 | GP82 | E67 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 300 | RL | 4 | EUR | 7 |
| GP83 | GP83 | E67 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 300 | LL | 4 | USA | 7 |
| B031 | RA31 | R50 | MINI | W10 | FRONT | MECH | 16.00 | COUPE | 66 | LL | 3 | EUR | M |
| B032 | RA32 | R50 | MINI | W10 | FRONT | MECH | 16.00 | COUPE | 66 | RL | 3 | EUR | M |
| B231 | RC31 | R50 | COOPER | W10 | FRONT | MECH | 16.00 | COUPE | 85 | LL | 3 | EUR | M |
| B232 | RC32 | R50 | COOPER | W10 | FRONT | MECH | 16.00 | COUPE | 85 | RL | 3 | EUR | M |
| B233 | RC33 | R50 | COOPER | W10 | FRONT | MECH | 16.00 | COUPE | 85 | LL | 3 | USA | M |
| B431 | RE31 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 115 | LL | 3 | EUR | M |
| B432 | RE32 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 115 | RL | 3 | EUR | M |
| B433 | RE33 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 115 | LL | 3 | USA | M |
| xxxx | xxxx | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | - | UNBEK | - | UNBEK | - | UNBEK | - |
