# T_GRTB.PRG

## General

|  |  |
| --- | --- |
| File | T_GRTB.PRG |
| Type | PRG |
| Jobs | 2 |
| Tables | 5 |
| Origin | BMW TI-430 Drexel |
| Revision | 1.392 |
| Author | BMW TI-430 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | externe Tabelle ZuordnungsTabelle |  |  |
| ORIGIN | string | BMW TI-430 Drexel |  |  |
| REVISION | string | 1.392 |  |  |
| AUTHOR | string | BMW TI-430 Drexel |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.392 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

## Tables

### ZUORDNUNGSTABELLE

| ADR_VAR_DIAG | SGBD | GRUPPE | BAUREIHE | STEUERGERAET |
| --- | --- | --- | --- | --- |
| 00 ---- 0100 | ZGM_E65 | D_ZGM | E65 | Zentrales Gatewaymodul |
| 00 ---- 08C0 | JBBF87 | D_ZGM | E87 | Junction Box Beifahrer |
| 00 ---- 0DD0 | JBBF70 | D_ZGM | E70 | Junction Box Beifahrer |
| 00 ---- 0BD0 | KGM_60 | D_ZGM | E60 | Karosserie Gatewaymodul |
| 00 ---- 0EB0 | SPEG56 | D_ZGM | R56 | Smart Power Electronics Gateway |
| 01 ---- 0110 | SIM | D_SIM | E65 | Sicherheits- Informationsmodul |
| 01 ---- 08E0 | MRS5 | D_SIM | E87 | Airbag Steuergerät |
| 01 ---- 08E4 | MRS5 | D_SIM | E87 | Airbag Steuergerät |
| 01 ---- 0A70 | SGM_60_2 | D_SIM | E60 | Sicherheits-und Gatewaymodul |
| 01 ---- 0B20 | ACSM60 | D_SIM | E60 | Airbag-Elektronik |
| 01 ---- 0E90 | ACSM60 | D_SIM | R56 | Airbag Steuergerät |
| 01 ---- 0CA0 | ACSM2 | D_SIM | E93 | Airbag-Elektronik |
| 01 ---- 0CA1 | ACSM2 | D_SIM | E88 | Airbag-Elektronik |
| 01 ---- 1080 | MRS7 | D_SIM | E89 | Airbag Steuergerät |
| 01 ---- 1085 | MRS8 | D_SIM | E82 | Airbag Steuergerät |
| 02 ---- 0120 | SZL | D_SZL | E65 | Satellit Lenksäule |
| 02 ---- 01C0 | SZL | D_SZL | E60 | Satellit Lenksäule |
| 02 ---- 01C8 | SZL_60 | D_SZL | E60 | Schaltzentrum Lenksäule |
| 02 ---- 0EF0 | SZL_56 | D_SZL | R56 | Schaltzentrum Lenksäule |
| 03 ---- 0130 | SASL | D_SASL | E65 | Satellit A-Säule links |
| 04 ---- 0140 | SASR | D_SASR | E65 | Satellit A-Säule rechts |
| 05 ---- 0150 | STVL | D_STVL | E65 | Satellit Tür vorne links |
| 05 ---- 01F0 | TEFA60 | D_STVL | E60 | Satellit & Türelektronik Fahrer |
| 06 ---- 0160 | STVR | D_STVR | E65 | Satellit Tür vorne rechts |
| 06 ---- 01F0 | TEBF60 | D_STVR | E60 | Satellit & Türelektronik Beifahrer |
| 06 ---- 0210 | TEBF60 | D_STVR | E60 | Satellit & Türelektronik Beifahrer |
| 06 ---- 1280 | TRSVC70 | D_TRSVC | E70 | Top-, Rear, Sideview Kamera |
| 07 ---- 0170 | SSFA | D_SSFA | E65 | Satellit Sitz Fahrer |
| 08 ---- 0180 | SSBF | D_SSBF | E65 | Satellit Sitz Beifahrer |
| 09 ---- 0190 | SBSL | D_SBSL | E65 | Satellit B-Säule links |
| 09 ---- 1110 | HIM_72 | D_HIM | E72 | Hybrid Interface Modul |
| 0A ---- 01A0 | SBSR | D_SBSR | E65 | Satellit B-Säule rechts |
| 0A ---- 10A0 | SBA_72 | D_SBA | E72 | Sensotronic Brake Actuation |
| 0D ---- 01D0 | SSH | D_SSH | E65 | Satellit Sitz hinten |
| 0E ---- 01E0 | SFZ | D_SFZ | E65 | Satellit Fahrzeugzentrum |
| 0E ---- 0480 | SFZ60 | D_SFZ | E60 | Satellit Fahrzeugzentrum |
| 0E ---- 12E0 | SVT_70 | D_SVT | E70 | Servotronic Steuergerät |
| 0F ---- 0FF0 | QSG_71 | D_QSG | E71 | QuerMomentenVerteilung-Hinterache-Steuergerät |
| 12 ---- 0BA0 | N73H_R0 | D_MOTOR | E68 | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .0Q. 000C | ME9E65_6 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000D | ME9E65_6 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000E | ME9E65_6 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000F | ME9E65_6 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 0014 | ME9N62 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 0103 | ME9E65_6 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0R. 000E | N73_R0 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .0R. 000F | N73_R0 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .0R. 0010 | N73_R0 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .0R. 0011 | N73_R0 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .1C. 0000 | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 0001 | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 000A | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 0010 | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 0011 | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1D. 0000 | MEV17N46 | D_MOTOR | E87 | Motorelektronik ME V17.2.1 4 Zylinder N46 |
| 12 .1D. 0001 | MEV17N46 | D_MOTOR | E87 | Motorelektronik ME V17.2.1 4 Zylinder N46 |
| 12 .1E. 0001 | ME17N45 | D_MOTOR | E87 | Motorelektronik ME 17.2.1 4 Zylinder N45 |
| 12 .2L. 0001 | MEV9N46L | D_MOTOR | E87 | Motorelektronik ME9.2 4 Zylinder N46 |
| 12 .2L. 0011 | MEV9N46L | D_MOTOR | E87 | Motorelektronik ME9.2 4 Zylinder N46 |
| 12 .2M. 0020 | ME9N62_2 | D_MOTOR | Morgan | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .2Q. 000E | ME9E65_6 | D_MOTOR | E60 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .2Q. 0014 | ME9N62 | D_MOTOR | E60 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .2Q. 0020 | ME9N62 | D_MOTOR | E60 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .2W. 000F | ME9N45 | D_MOTOR | E87 | Motorelektronik ME9.2 4 Zylinder N45 |
| 12 .32. 0000 | MSDA70 | D_MOTOR | E63 | Motorelektronik MS 70 6 Zylinder N54 |
| 12 .33. 0000 | MSD80 | D_MOTOR | E63 | Motorelektronik MS 80 6 Zylinder N53/N54 |
| 12 .34. 0000 | MSV70 | D_MOTOR | E63 | Motorelektronik MS 70 6 Zylinder N52 |
| 12 .34. 0100 | MSV70 | D_MOTOR | E63 | Motorelektronik MS 70 6 Zylinder N52 |
| 12 .3L. 0011 | MEV9N46L | D_MOTOR | E90 | Motorelektronik ME9.2 4 Zylinder N45 |
| 12 .44. 0001 | N73TU_R0 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master TUE |
| 12 .4Q. 0020 | ME9N62_2 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 OBD05 |
| 12 0059 0010 | D50M57A0 | D_MOTOR | E65 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .59. 0010 | D50M57A0 | D_MOTOR | E65 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 005A 0010 | D51MM670 | D_MOTOR | E65 | Dieselelektronik DDE 5 8 Zylinder M67 Master |
| 12 .5A. 0010 | D51MM670 | D_MOTOR | E65 | Dieselelektronik DDE 5 8 Zylinder M67 Master |
| 12 .5A. 0011 | D51MM670 | D_MOTOR | E65 | Dieselelektronik DDE 5 8 Zylinder M67 Master |
| 12 .5Q. 0020 | N62_TUE | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 TUE |
| 12 .66. 0000 | MSD80N43 | D_MOTOR | E60 | Motorelektronik MS 80 4 Zylinder N43 |
| 12 .66. 0010 | MSD80N43 | D_MOTOR | E60 | Motorelektronik MS 80 4 Zylinder N43 |
| 12 .67. 0000 | MSV80 | D_MOTOR | E90 | Motorelektronik MS 80 6 Zylinder N51 |
| 12 .72. 0001 | MSD85Y | D_MOTOR | E72 | Motorelektronik MS 85 8 Zylinder N63 Hybrid |
| 12 .7Q. 0020 | N62_TUE2 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 TUE2 |
| 12 .98. 0001 | MSD85 | D_MOTOR | E70 | Motorelektronik MS 85 8 Zylinder S63 |
| 12 .99. 0001 | MSD85 | D_MOTOR | E71 | Motorelektronik MS 85 8 Zylinder N63 |
| 12 .A1. 0000 | MSD80 | D_MOTOR | E70 | Motorelektronik MS 81 6 Zylinder N53/N54 |
| 12 .CE. 0000 | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 0001 | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 000A | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 0010 | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 0011 | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .DM. 0002 | MVD1722 | D_MOTOR | R56 | Motorelektronik ME VD17.2.2 4 Zylinder N18 |
| 12 .DV. 0020 | D60PSA0 | D_MOTOR | R56 | Dieselelektronik R56 PSA EU4 |
| 12 .DV. 0021 | D60PSA0 | D_MOTOR | R56 | Dieselelektronik R56 PSA EU4 |
| 12 .DV. 0022 | D60PSA0 | D_MOTOR | R56 | Dieselelektronik R56 PSA EU4 |
| 12 .JE. 0010 | D50M57C0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0011 | D50M57C0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0012 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0013 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0014 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0070 | D50M57D0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0071 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JF. 0010 | D50M57D0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JF. 0011 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JF. 0012 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JF. 0013 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JF. 0014 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JY. 0000 | MS_S65 | D_MOTOR | E60 | Motorelektronik MS S65 10 Zylinder S85 MJ2005 |
| 12 .JY. 0001 | MS_S65_2 | D_MOTOR | E60 | Motorelektronik MS S65 10 Zylinder S85 MJ2006 |
| 12 .JY. 0002 | MS_S65_3 | D_MOTOR | E60 | Motorelektronik MS S65 10 Zylinder S85 CO2 |
| 12 .JZ. 0000 | MSS60 | D_MOTOR | E90 | Motorelektronik MSS60 8 Zylinder S65 |
| 12 .LP. 0010 | D60M47A0 | D_MOTOR | E87 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 |
| 12 .LP. 0011 | D60M47A0 | D_MOTOR | E87 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 |
| 12 .LP. 0012 | D60M47A0 | D_MOTOR | E87 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 |
| 12 .LP. 0020 | D60M47A0 | D_MOTOR | E90 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 |
| 12 .LP. 0021 | D60M47A0 | D_MOTOR | E90 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 |
| 12 .LP. 0030 | D60M47A0 | D_MOTOR | E83 | Dieselelektronik DDE 6 4 Zylinder E83 M47 TÜ2 |
| 12 .LP. 0031 | D60M47A0 | D_MOTOR | E83 | Dieselelektronik DDE 6 4 Zylinder E83 M47 TÜ2 |
| 12 .LQ. 0010 | D60M47A0 | D_MOTOR | E87 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 uL |
| 12 .LQ. 0011 | D60M47A0 | D_MOTOR | E87 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 uL |
| 12 .LQ. 0012 | D60M47A0 | D_MOTOR | E87 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 uL |
| 12 .LQ. 0020 | D60M47A0 | D_MOTOR | E90 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 uL |
| 12 .LQ. 0021 | D60M47A0 | D_MOTOR | E90 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 uL |
| 12 .LQ. 0022 | D60M47A0 | D_MOTOR | E90 | Dieselelektronik DDE 6 4 Zylinder M47 TÜ2 uL |
| 12 .LR. 0010 | D60M57D0 | D_MOTOR | E60 | Dieselelektronik DDE 6 6 Zylinder M57 TOP |
| 12 .LR. 0011 | D60M57D0 | D_MOTOR | E60 | Dieselelektronik DDE 6 6 Zylinder M57 TOP |
| 12 .LR. 0020 | D60M57D0 | D_MOTOR | E53 | Dieselelektronik DDE 6 6 Zylinder M57 CSF |
| 12 .LR. 0060 | D60M57A0 | D_MOTOR | E90 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 uL |
| 12 .LS. 0010 | D62M57B0 | D_MOTOR | E65 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LS. 0011 | D62M57B0 | D_MOTOR | E60 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LS. 0012 | D62M57B0 | D_MOTOR | E90 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LS. 0020 | D62M57B0 | D_MOTOR | E60 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LS. 0030 | D62M57B0 | D_MOTOR | E90 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LS. 0050 | D62M57A0 | D_MOTOR | E90 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 TOP |
| 12 .LT. 0010 | D63MM670 | D_MOTOR | E65 | Dieselelektronik DDE 6 8 Zylinder M67 TÜ Master |
| 12 .LT. 0011 | D63MM670 | D_MOTOR | E65 | Dieselelektronik DDE 6 8 Zylinder M67 TÜ Master |
| 12 .M1. 0001 | MV1722 | D_MOTOR | R56 | Motorelektronik ME V 17.2.2 4 Zylinder N16 |
| 12 .MV. 0001 | MEVD17KW | D_MOTOR | E70 | Motorelektronik ME VD17.2 6 Zylinder N55 |
| 12 .MW. 0000 | MSV80 | D_MOTOR | E63 | Motorelektronik MS 80 6 Zylinder N51/N52K |
| 12 .NE. 0010 | D60TMCA | D_MOTOR | R50 | Dieselelektronik R50 TMC EU4 |
| 12 .NE. 0020 | D60PSA0 | D_MOTOR | R56 | Dieselelektronik R56 PSA EU4 |
| 12 .PL. 0001 | MEV17_2 | D_MOTOR | R56 | Motorelektronik ME V17 VVT |
| 12 .PL. 0002 | MEV17_2N | D_MOTOR | R56 | Motorelektronik ME V17 VVT |
| 12 .PL. 0010 | MEV17_2 | D_MOTOR | R56 | Motorelektronik ME V17 VVT |
| 12 .PK. 0001 | MED17_2 | D_MOTOR | R56 | Motorelektronik ME V17 GDI |
| 12 .PK. 0002 | MED17_2N | D_MOTOR | R56 | Motorelektronik ME V17 GDI |
| 12 .PK. 0010 | MED17_2 | D_MOTOR | R56 | Motorelektronik ME V17 GDI |
| 12 .TP. 0000 | MSD80N43 | D_MOTOR | E60 | Motorelektronik MS 81 4 Zylinder N43 |
| 12 .TP. 0010 | MSD80N43 | D_MOTOR | E60 | Motorelektronik MS 81 4 Zylinder N43 |
| 12 .VZ. 0001 | MSD85Y | D_MOTOR | E72 | Motorelektronik MS 85 8 Zylinder N63 Hybrid |
| 12 .WA. 0010 | D70N47A0 | D_MOTOR | E90 | Dieselelektronik DDE 7.0 4 Zylinder N47 uL |
| 12 .WA. 0011 | D70N47A0 | D_MOTOR | E90 | Dieselelektronik DDE 7.0 4 Zylinder N47 uL |
| 12 .WA. 0020 | D70N47B0 | D_MOTOR | E90 | Dieselelektronik DDE 7.0 4 Zylinder N47 uL EU5 |
| 12 .WB. 0010 | D71N47A0 | D_MOTOR | E90 | Dieselelektronik DDE 7.1 4 Zylinder N47 oL |
| 12 .WB. 0011 | D71N47A0 | D_MOTOR | E90 | Dieselelektronik DDE 7.1 4 Zylinder N47 oL |
| 12 .WB. 0020 | D71N47B0 | D_MOTOR | E83 | Dieselelektronik DDE 6 4 Zylinder N47 oL (11 hex) |
| 12 .WB. 0030 | D71N47A0 | D_MOTOR | E87 | Dieselelektronik DDE 7.1 4 Zylinder N47 TL |
| 12 .WB. 0040 | D71N47C0 | D_MOTOR | E90 | Dieselelektronik DDE 7.1 4 Zylinder N47 oL EU5 |
| 12 .WB. 0050 | D71N47D0 | D_MOTOR | E83 | Dieselelektronik DDE 7.1 4 Zylinder N47 oL EU5 |
| 12 .WB. 0060 | D71N47C0 | D_MOTOR | E87 | Dieselelektronik DDE 7.1 4 Zylinder N47 TL EU5 |
| 12 .WD. 0010 | D73N57B0 | D_MOTOR | E90 | Dieselelektronik DDE 7.3  6 Zylinder N57 |
| 12 .WD. 0030 | D73N57C0 | D_MOTOR | E90 | Dieselelektronik DDE 7.3  6 Zylinder M57TUE2US |
| 12 .WE. 0010 | D72N47B0 | D_MOTOR | E90 | Dieselelektronik DDE 7.21 4 Zylinder N47TÜ ol |
| 12 .XY. 0010 | D73N57D0 | D_MOTOR | E71 | Dieselelektronik DDE 7.31 6 Zylinder N57 |
| 12 .XY. 0020 | D73N57D0 | D_MOTOR | E84 | Dieselelektronik DDE 7.31  4 Zylinder N47TÜ TL |
| 12 .ZZ. 0010 | D72N47B0 | D_MOTOR | R56 | Dieselelektronik DDE 7.01 4 Zylinder N47C |
| 13 ---- 0BA0 | N73H_L0 | D_MOTOR2 | E68 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 .0R. 000E | N73_L0 | D_MOTOR2 | E65 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 .0R. 000F | N73_L0 | D_MOTOR2 | E65 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 .0R. 0010 | N73_L0 | D_MOTOR2 | E65 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 .0R. 0011 | N73_L0 | D_MOTOR2 | E65 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 .44. 0001 | N73TU_L0 | D_MOTOR2 | E65 | Motorelektronik ME 9 12 Zylinder N73 Slave TUE |
| 13 005A 0010 | D51SM670 | D_MOTOR2 | E65 | Dieselelektronik DDE 5 8 Zylinder M67 Slave |
| 13 .5A. 0010 | D51SM670 | D_MOTOR2 | E65 | Dieselelektronik DDE 5 8 Zylinder M67 Slave |
| 13 .5A. 0011 | D51SM670 | D_MOTOR2 | E65 | Dieselelektronik DDE 5 8 Zylinder M67 Slave |
| 13 .LT. 0010 | D63SM670 | D_MOTOR2 | E65 | Dieselelektronik DDE 6 8 Zylinder M67 TÜ Slave |
| 13 .LT. 0011 | D63SM670 | D_MOTOR2 | E65 | Dieselelektronik DDE 6 8 Zylinder M67 TÜ Slave |
| 14 ---- 0B50 | CEM_68 | D_CEM | E68 | Clean Energy Modul |
| 15 ---- 12B0 | LDM_70 | D_LDM2 | E70 | Längs Dynamik Management |
| 16 ---- 0500 | AFS_60 | D_AFS | E60 | Aktiv Front Steering |
| 16 ---- 0970 | AFS_90 | D_AFS | E90 | Aktiv Front Steering |
| 16 ---- 0C60 | AFS_70 | D_AFS | E70 | Aktiv Front Steering |
| 16 ---- 0FE0 | ASA_71 | D_AFS | E71 | Aktuator Steuergerät Aktivlenkung |
| 17 ---- 0610 | EKP_60 | D_EKP | E60 | Elektrische Kraftstoffpumpe |
| 17 ---- 0611 | EKPM60_2 | D_EKP | E60 | Elektrische Kraftstoffpumpe 2. Generation |
| 17 ---- 0612 | EKPM60_3 | D_EKP | E60 | Elektrische Kraftstoffpumpe 2. Generation |
| 17 ---- 1010 | EKP360 | D_EKP | E60 | Elektrische Kraftstoffpumpe 3. Generation |
| 18 ---- 0200 | GS19 | D_EGS | E65 | Getriebesteuergerät GS19 |
| 18 ---- 0201 | GS19A | D_EGS | E60 | Getriebesteuergerät GS19 |
| 18 ---- 0202 | GS19B | D_EGS | E60 | Getriebesteuergerät GS19 B |
| 18 ---- 0203 | GS19C | D_EGS | E70 | Getriebesteuergerät GS19 C |
| 18 ---- 0204 | GS19D | D_EGS | E90 | Getriebesteuergerät GS19 D |
| 18 ---- 0C80 | GS1912 | D_EGS | E83 | Getriebesteuergerät GS19.12 |
| 18 ---- 0490 | SSG_60 | D_EGS | E60 | Sequentielles Schaltgetriebe |
| 18 ---- 0960 | SMG_60 | D_EGS | E60 | Sequentielles M-Getriebe |
| 18 ---- 0D00 | GSF21 | D_EGS | R53 | Getriebesteuergerät AISIN |
| 18 ---- 0E20 | GSF21A | D_EGS | R56 | Getriebesteuergerät AISIN |
| 18 ---- 0F20 | DKG_90 | D_EGS | E90 | Doppelkupplungsgetriebe |
| 18 ---- 1220 | GSB233 | D_EGS | E70 | Getriebesteuergerät TCU 2.3.3 |
| 19 ---- 0950 | VGSG90 | D_VGSG | E90 | Verteilergetriebe Steuergerät |
| 19 ---- 0D60 | VGSG70 | D_VGSG | E70 | Verteilergetriebe Steuergerät |
| 19 ---- 1230 | LMV_84 | D_VGSG | E84 | Längsmomentverteilung |
| 19 ---- 1260 | LMVR60 | D_VGSG | R60 | Längsmomentverteilung |
| 1B .91. 000A | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 4 Zylinder N42 |
| 1B .92. 000A | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 8 Zylinder N62 |
| 1B .92. 0014 | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 8 Z. N62, 12 Zyl. N73 |
| 1C ---- 0A90 | LDM_90 | D_LDM | E90 | Längs Dynamik Management |
| 1C ---- 0D50 | LDM_60 | D_LDM | E60 | Längs Dynamik Management |
| 1C ---- 0FD0 | ICM_71 | D_LDM | E71 | Integriertes Chassis Management |
| 1D ---- 1180 | TFE1 | D_TFE | E72 | Tank Funktions Elektronik |
| 1E .92. 000A | VVT_B2_0 | D_VVT2 | E65 | Variabler Ventiltrieb Bank 2 8 Zylinder N62 |
| 1E .92. 0014 | VVT_B2_0 | D_VVT2 | E65 | Variabler Ventiltrieb Bank 2 8 Z. N62, 12 Zyl. N73 |
| 20 ---- 0230 | RDC_E65 | D_RDC | E65 | Reifen Druck Control |
| 20 ---- 0560 | RDC_60 | D_RDC | E60 | Reifen Druck Control |
| 20 ---- 1000 | RDC_CAN | D_RDC | E60 | Reifen Druck Control |
| 20 ---- 1001 | RDC_CAN | D_RDC | E60 | Reifen Druck Control 315MHz |
| 20 ---- 12C0 | RDCKWP | D_RDC | E90 | Reifen Druck Control Low Cost BN2000 |
| 21 ---- 0240 | ACC_E65 | D_ACC | E65 | Adaptive Cruise Control |
| 21 ---- 0B60 | ACC2 | D_ACC | E60 | Adaptive Cruise Control 2.Generation |
| 21 ---- 0D30 | LRR_60 | D_ACC | E60 | ACC Long Range Sensor |
| 21 ---- 12A0 | FRR_70 | D_ACC | E70 | ACC Full Range Radar |
| 22 ---- 05F0 | ALC_60 | D_ALC | E60 | Adaptive Lichtsteuerung |
| 23 ---- 0250 | ARS_E65 | D_ARS | E65 | Aktive Rollstabilisierung |
| 23 ---- 0251 | ARS_60 | D_ARS | E60 | Aktive Rollstabilisierung |
| 23 ---- 0252 | ARS_70 | D_ARS | E70 | Aktive Rollstabilisierung |
| 24 ---- 0600 | CVM_64 | D_CVM | E64 | Cabrio Verdeck Modul |
| 24 ---- 0CD0 | CTM_93 | D_CVM | E93 | Cabrio Top Modul nur JEX |
| 24 ---- 0CD1 | CTM_93_2 | D_CVM | E93 | Cabrio Top Modul nur PPP1 |
| 24 ---- 0CD2 | CTM_93_3 | D_CVM | E93 | Cabrio Top Modul nur PPP2 |
| 24 ---- 0CD3 | CTM_93_4 | D_CVM | E93 | Cabrio Top Modul |
| 24 ---- 0CD4 | CTM_93_5 | D_CVM | E93 | Cabrio Top Modul |
| 24 ---- 0F30 | CVM_88 | D_CVM | E88 | Cabrio Verdeck Modul |
| 24 ---- 0F31 | CVM_88_2 | D_CVM | E88 | Cabrio Verdeck Modul |
| 24 ---- 1120 | CVM_57 | D_CVM | R57 | Cabrio Verdeck Modul |
| 24 ---- 1060 | CTM_89 | D_CVM | E89 | Cabrio Top Modul |
| 26 ---- 0C70 | RSE_70 | D_RSE | E70 | Rear Seat Entertainment |
| 26 ---- 0C71 | RSE_MID | D_RSE | E70 | Rear Seat Entertainment |
| 26 ---- 11C0 | MMB2RR | D_RSE | RR1 | Multimediabox 2 |
| 27 ---- 0260 | PGS_E65 | D_PGS | E65 | Passive Go System |
| 27 ---- 0261 | PGS_65_2 | D_PGS | E65 | Passive Go System |
| 27 ---- 0ED0 | PGS_56 | D_PGS | R56 | Passive Go System 2 |
| 29 ---- 0270 | DSC_E65 | D_DSC | E65 | Dynamische Stabilitätskontrolle |
| 29 ---- 05B0 | DSC_87 | D_DSC | E87 | Dynamische Stabilitätskontrolle MK60 |
| 29 ---- 05B1 | DSC_87 | D_DSC | E87 | Dynamische Stabilitätskontrolle MK60E5 DSC+ |
| 29 ---- 05B2 | DSC_87 | D_DSC | E60 | Dynamische Stabilitätskontrolle MK60E5 M5 |
| 29 ---- 05B3 | DSC_87 | D_DSC | E90 | Dynamische Stabilitätskontrolle MK60E5 M3 |
| 29 ---- 0620 | DSC_60 | D_DSC | E60 | Dynamische Stabilitätskontrolle |
| 29 ---- 0621 | DSC_60 | D_DSC | E60 | Dynamische Stabilitätskontrolle mit AFS |
| 29 ---- 0EE0 | DSC_56 | D_DSC | R56 | Dynamische Stabilitätskontrolle TRWEBC450 |
| 29 ---- 0EE1 | DSC_56 | D_DSC | R56 | ASC TRWEBC450 |
| 29 ---- 0EE2 | DSC_56 | D_DSC | R56 | ABS TRWEBC450 |
| 29 ---- 0EE3 | DSC_56 | D_DSC | R56 | DSC TRWEBC450 BEV2008 |
| 29 ---- 0EE4 | DSC_56 | D_DSC | R56 | DSC TRWEBC450V |
| 29 ---- 0EE5 | DSC_56 | D_DSC | R60 | DSC TRWEBC450V Allrad |
| 29 ---- 0BC1 | DXC_90 | D_DSC | E90 | Dynamische Stabilitätskontrolle Allrad |
| 29 ---- 0BC2 | DXC8_P | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus mit Allrad |
| 29 ---- 0BC3 | DXC8_P | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus |
| 29 ---- 0BC4 | DXC8_P | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus mit AFS |
| 29 ---- 0BC5 | DXC_70 | D_DSC | E70 | Dynamische Stabilitätskontrolle EHB_3 Allrad |
| 29 ---- 0BC6 | DXC_90 | D_DSC | E90 | Dynamische Stabilitätskontrolle |
| 29 ---- 0BC7 | DXC_90 | D_DSC | E89 | Dynamische Stabilitätskontrolle DSC8_P |
| 29 ---- 0BC8 | DXC_70 | D_DSC | E72 | Dynamische Stabilitätskontrolle EHB_3 Allrad |
| 29 ---- 0BC9 | DXC_90 | D_DSC | E84 | Dynamische Stabilitätskontrolle DXC8 |
| 29 ---- 0BCA | DXC_90 | D_DSC | E84 | Dynamische Stabilitätskontrolle DXC8 Allrad |
| 29 ---- 0D10 | DSC_60PP | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus Plus EHB |
| 29 ---- 0D11 | DSC_60PP | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus Plus EHB Allrad |
| 2A ---- 0280 | EMF_E65 | D_EMF | E65 | Elektromechanische Feststellbremse |
| 2A ---- 0D10 | EMF_70 | D_EMF | E70 | Elektromechanische Feststellbremse |
| 2A ---- 1020 | EMF_89 | D_EMF | E89 | Elektromechanische Feststellbremse |
| 30 ---- 0940 | EPS_90 | D_EPS | E90 | Elektrische Lenkung |
| 30 ---- 0D20 | EPS_56 | D_EPS | R56 | Elektrische Lenkung |
| 30 ---- 0D21 | EPS_56 | D_EPS | R60 | Elektrische Lenkung |
| 30 ---- 10D0 | EPS_72 | D_EPS | E72 | Elektrische Lenkung |
| 31 ---- 04F0 | MMC_E65 | D_MMC | E65 | Multimedia Changer |
| 31 ---- 04F1 | MMC_65_2 | D_MMC | E65 | Multimedia Changer |
| 31 ---- 0F70 | MMCH70 | D_MMC | E70 | Multimedia Changer Host |
| 32 ---- 0660 | MMIFC | D_MMIFC | E66 | MOST/CAN-Gateway (im Fond MMI) |
| 34 ---- 0670 | MMI_GTF | D_MMIF | E66 | Mensch Maschine Interface Grafikteil Fond |
| 34 ---- 0810 | MMI_GTF | D_MMIF | RR1 | Mensch Maschine Interface hinten |
| 35 ---- 0530 | SVS_E65 | D_SVS | E65 | Sprachverarbeitungssystem |
| 35 ---- 08F0 | SVS_60 | D_SVS | E60 | Sprachverarbeitungssystem (im CCC) |
| 36 ---- 0290 | TEL_ECE | D_TEL | E65 | Telefon ECE Variante |
| 36 ---- 0298 | TEL_USA | D_TEL | E65 | Telefon US Variante |
| 36 ---- 0630 | TELE60 | D_TEL | E60 | Telefon ECE Variante |
| 36 ---- 0631 | TELE60_2 | D_TEL | E60 | Telematic Control Unit |
| 36 ---- 0632 | TELE60_3 | D_TEL | E60 | Telematic Control Unit |
| 36 ---- 0640 | TELE60 | D_TEL | E60 | Telefon US Variante |
| 36 ---- 0650 | TELE60 | D_TEL | E60 | Telefon Japan Variante |
| 36 ---- 0A80 | ULF_60 | D_TEL | E60 | Universelle Lade- Freisprecheinrichtung |
| 36 ---- 0A88 | ULF_60PB | D_TEL | E60 | Universelle Lade- Freisprecheinrichtung |
| 36 ---- 0F00 | ULF2_60 | D_TEL | E60 | Universelle Lade- Freisprecheinrichtung |
| 36 ---- 1200 | CMEDIAR | D_TEL | E70 | COMBOX Telefon Rüko |
| 37 ---- 02A0 | AMP_E65 | D_AMP | E65 | Top HIFI Verstärker |
| 37 ---- 0670 | AMP_60 | D_AMP | E60 | Top HIFI Verstärker |
| 37 ---- 0E40 | AMPT70 | D_AMP | E70 | Top HIFI Verstärker |
| 37 ---- 0E50 | AMPH70 | D_AMP | E70 | HIFI Verstärker |
| 37 ---- 0E58 | AMPH70 | D_AMP | F01 | HIFI Verstärker |
| 37 ---- 0D00 | AMPH56 | D_AMP | R56 | HIFI Verstärker |
| 37 ---- 12F0 | AMPHH2 | D_AMP | R56 | HIFI Verstärker |
| 38 ---- 02B0 | EHC_E65 | D_EHC | E65 | Luftfeder |
| 38 ---- 02B1 | EHC_70 | D_EHC | E70 | Luftfeder |
| 38 ---- 0840 | EHC2RR | D_EHC | RR1 | 2-Achs Luftfeder |
| 39 ---- 02C0 | EDC_K | D_EDC | E65 | Elektronische Dämpferkontrolle |
| 39 ---- 02C1 | EDCK65 | D_EDC | E65 | Elektronische Dämpferkontrolle |
| 39 ---- 02C2 | VDM_70 | D_EDC | E70 | Vertikaldynamik Management |
| 3A ---- 02D0 | KHI_E65 | D_KHI | E65 | Kopfhöhrer Interface |
| 3B ---- 02E0 | NAV_E65 | D_NAV | E65 | Navigation ECE/US |
| 3B ---- 0870 | JNAV60 | D_NAV | E60 | Japan Navigation |
| 3B ---- 0871 | JNAV60_2 | D_NAV | E60 | Japan Navigation |
| 3B ---- 0872 | JNAV60_3 | D_NAV | E60 | Japan Navigation |
| 3B ---- 0875 | KNAV60 | D_NAV | E60 | Korea Navigation |
| 3B ---- 087A | CNAV60 | D_NAV | E60 | China Navigation |
| 3B ---- 0B00 | NAVL60 | D_NAV | E60 | Navigation ECE/US Low (im MASK) |
| 3B ---- 0B30 | NAV_E65 | D_NAV | RR1 | Navigation ECE/US |
| 3B ---- 0DC0 | NAVMASK2 | D_NAV | E70 | Navigation (im MASK2) |
| 3C ---- 02F0 | CDC_E65 | D_CDC | E65 | Audio CD-Changer |
| 3C ---- 0F40 | M_IPOD | D_CDC | E60 | Most CDC IPOD Interface Nachrüstlösung |
| 3C ---- 0F50 | CDCH70 | D_CDC | E70 | Audio CD-Changer Host |
| 3D ---- 0680 | HUD_60 | D_HUD | E60 | Head-Up-Display |
| 3D ---- 0D50 | HUD_70 | D_HUD | E70 | Head-Up-Display |
| 3E ---- 07D0 | ADP_RR | D_ADP | RR1 | Audio Display Panel |
| 3F ---- 0300 | ASK_E65 | D_ASK | E65 | Audio System Kontroller |
| 3F ---- 0A00 | ASK_60 | D_ASK | E60 | Audio System Kontroller (im CCC) |
| 40 ---- 0310 | CAS | D_CAS | E65 | Car Access System |
| 40 ---- 0690 | CAS | D_CAS | E60 | Car Access System 2 |
| 40 ---- 06A0 | CAS | D_CAS | E87 | Car Access System 2 / 3 |
| 40 ---- 09C0 | CAS | D_CAS | E65 | Car Access System 2 |
| 40 ---- 0BE0 | CAS_RR | D_CAS | RR1 | Car Access System |
| 41 ---- 0320 | DWA_E65 | D_DWA | E65 | Diebstahlwarnanlage |
| 41 ---- 06B0 | DWA_E65 | D_DWA | E60 | Diebstahlwarnanlage |
| 41 ---- 0750 | DWA_63 | D_DWA | E63 | DWA Sirene und Neigungsgeber |
| 41 ---- 0780 | DWA_E65 | D_DWA | E87 | Diebstahlwarnanlage |
| 42 ---- 0330 | CIM | D_CIM | E65 | Chassis Integration Modul |
| 42 ---- 0331 | CIM_2 | D_CIM | E65 | Chassis Integration Modul Redesign |
| 43 ---- 0340 | POW_E65 | D_POW | E65 | Powermodul |
| 43 ---- 0341 | POW_E65 | D_POW | E65 | Powermodul |
| 43 ---- 0342 | POW_65_2 | D_POW | E65 | Powermodul |
| 43 ---- 0343 | POW_65_3 | D_POW | E65 | Powermodul |
| 43 ---- 0344 | POW_65_3 | D_POW | E65 | Powermodul |
| 43 ---- 0B10 | MPM_60 | D_POW | E60 | MicroPowerModul |
| 44 ---- 0350 | SHD_E65 | D_SHD | E65 | Schiebehebedach |
| 44 ---- 0351 | SD_KWP | D_SHD | E60 | Multi Drive Schiebehebedach |
| 44 ---- 0352 | SD_KWP | D_SHD | R56 | Schiebehebedach |
| 45 ---- 0360 | RLS_E65 | D_RLS | E65 | Regen- Lichtsensor |
| 45 ---- 0E70 | RLSS70 | D_RLS | E70 | Regen- Licht-, und Solarsensor |
| 46 ---- 0370 | WIM_E65 | D_WIM | E65 | Wischermodul |
| 47 ---- 0380 | ANT_E65 | D_ANTTU | E65 | Antennentuner |
| 47 ---- 06D0 | ANT_60 | D_ANTTU | E60 | Antennentuner im CCC |
| 48 ---- 0F10 | VSW_70 | D_VSW | E70 | Video Switch für Japan Kamera |
| 49 ---- 0890 | SECUR1 | D_SECUR1 | E67 | Sicherheitsfahrzeugmodul 1 |
| 49 ---- 0891 | SECUR1_2 | D_SECUR1 | E90 | Sicherheitsfahrzeugmodul 1 (für E60 / E90) |
| 49 ---- 1070 | ZBM_RR | D_SECUR1 | RR1 | Zwei-Batterien-Management |
| 4A ---- 08A0 | SECUR2 | D_SECUR2 | E67 | Sicherheitsfahrzeugmodul 2 |
| 4B ---- 0390 | VID_E65 | D_VIDEO | E65 | Videomodul ECE |
| 4B ---- 0391 | VID_E65 | D_VIDEO | E65 | Videomodul RGB ohne Navigation |
| 4B ---- 0392 | VID_E65 | D_VIDEO | E65 | Videomodul vorne und hinten |
| 4B ---- 0393 | VMSW65 | D_VIDEO | E65 | Videomodul Videoswitch |
| 4B ---- 0398 | VID_65_2 | D_VIDEO | E65 | Videomodul Hybrid FBAS |
| 4B ---- 0399 | VID_65_2 | D_VIDEO | E65 | Videomodul Hybrid vorne und hinten |
| 4B ---- 1130 | TVM_89 | D_VIDEO | E89 | TV-Modul DVB-T |
| 4B ---- 1140 | TVM_89 | D_VIDEO | E89 | TV-Modul DVB-T Rear Seat Entertainment |
| 4B ---- 1150 | TVM_89 | D_VIDEO | E89 | TV-Modul ISDB-T (Japan) |
| 4B ---- 1310 | TVM_89 | D_VIDEO | E70 | TV-Modul DTMB (China) |
| 4C ---- 03A0 | TMF_E65 | D_TMFT | E65 | Türmodul Fahrer |
| 4C ---- 03A1 | TMF_E65 | D_TMFT | E65 | Türmodul Fahrer |
| 4D ---- 03B0 | TMB_E65 | D_TMBT | E65 | Türmodul Beifahrer |
| 4D ---- 03B1 | TMB_E65 | D_TMBT | E65 | Türmodul Beifahrer |
| 4E ---- 03C0 | TMFHE65 | D_TMFTH | E65 | Türmodul Fahrer hinten |
| 4E ---- 03C1 | TMFHE65 | D_TMFTH | E65 | Türmodul Fahrer hinten |
| 4F ---- 03D0 | TMBHE65 | D_TMBTH | E65 | Türmodul Beifahrer hinten |
| 4F ---- 03D1 | TMBHE65 | D_TMBTH | E65 | Türmodul Beifahrer hinten |
| 4F ---- 1050 | EKK_72 | D_EKK | E72 | Elektrischer Klimakompressor |
| 50 ---- 03E0 | SINE_65 | D_SINE | E65 | DWA Sirene und Neigungsgeber |
| 53 ---- 0460 | IBOC60 | D_IBOC | E60 | Digital Tuner US |
| 54 ---- 0860 | SAT_60 | D_RADIO | E60 | Satellitenradio US |
| 54 ---- 1320 | SAT_RAD2 | D_RADIO | E90 | Satellitentuner Firmware |
| 55 ---- 0E10 | ISPB70 | D_ISPB | E70 | Sprachverarbeitungssystem |
| 55 ---- 1030 | ULF2_HI | D_ISPB | E60 | Plattform MULF2-High |
| 56 ---- 05A0 | FZD_87 | D_FZD | E87 | Funktionszentrum Dach |
| 56 ---- 0D70 | FZD_70 | D_FZD | E70 | Funktionszentrum Dach |
| 56 80 ---- 0B70 | RLS_87 | D_RLS | E87 | Regen- Lichtsensor |
| 56 80 ---- 0E70 | RLSS90 | D_RLS | E90 | Regen- Lichtsensor mit Beschlagsensor |
| 57 ---- 01B0 | NVE_65 | D_NVE | E65 | Night Vision Steuergerät |
| 58 ---- 0B40 | ADPFRR | D_ADPF | RR1 | Audio Display Panel hinten |
| 59 ---- 0B80 | ALBV60F | D_ALBVF | E60 | Aktive Lehnenbreitenverstellung Fahrer |
| 5A ---- 0B80 | ALBV60B | D_ALBVB | E60 | Aktive Lehnenbreitenverstellung Beifahrer |
| 5B ---- 0850 | DAB_60 | D_DAB | E60 | Digital Tuner ECE |
| 5C ---- 0C20 | BEHO60 | D_BEHO | E60 | Behördenmodul |
| 5D ---- 0FB0 | TLC_60 | D_TLC | E60 | Fahrspurerkennung Time to Line Crossing |
| 5D ---- 12D0 | KAFAS70 | D_TLC | E70 | Kamerabasiertes Fahrerassistenzsystem |
| 5E ---- 0E30 | GWS_70 | D_GWS | E70 | Gangwahlschalter |
| 5E ---- 0FC0 | GWS_60 | D_GWS | E60 | Gangwahlschalter |
| 5E ---- 0FC8 | GWS_60_2 | D_GWS | E60 | Gangwahlschalter |
| 5E ---- 1040 | GWS_90 | D_GWS | E90 | Gangwahlschalter M3 |
| 5F ---- 0C10 | FLA_65 | D_FLA | E65 | Fernlicht Assistent |
| 5F ---- 1290 | FLA_R | D_FLA | E70 | Fernlicht Assistent Rüko |
| 60 ---- 03F0 | KOMBI65 | D_KOMBI | E65 | Instrumentenkombi |
| 60 ---- 03F1 | KOMBI65 | D_KOMBI | E65 | Instrumentenkombi |
| 60 ---- 03F2 | KOMB65_2 | D_KOMBI | E65 | Instrumentenkombi |
| 60 ---- 03F3 | KOMB65_2 | D_KOMBI | E65 | Instrumentenkombi |
| 60 ---- 06E0 | KOMB60 | D_KOMBI | E60 | Intrumentenkombi |
| 60 ---- 07C0 | KOMBRR | D_KOMBI | RR1 | Instrumentenkombi |
| 60 ---- 07C1 | KOMBRR_2 | D_KOMBI | RR1 | Instrumentenkombi |
| 60 ---- 07C2 | KOMBRR_2 | D_KOMBI | RR1 | Instrumentenkombi |
| 60 ---- 08D0 | KOMB87 | D_KOMBI | E87 | Instrumentenkombi |
| 60 ---- 0CC0 | KOMB56 | D_KOMBI | R56 | Instrumentenkombi |
| 60 ---- 0CF0 | KOMB70 | D_KOMBI | E70 | Instrumentenkombi |
| 61 ---- 0520 | FBI_E65 | D_FBI | E65 | Flexible Bus Interface |
| 61 ---- 1210 | CECALLR | D_ECALL | E70 | COMBOX Notruf Rüko |
| 62 ---- 0400 | MC_GW | D_MOSTGW | E65 | MOST/CAN-Gateway (im MMI) |
| 62 ---- 0590 | MCGW60 | D_MOSTGW | E60 | MOST/CAN-Gateway (im MASK) |
| 62 ---- 0830 | MC_GW | D_MOSTGW | RR1 | MOST/CAN-Gateway (im MMI) |
| 62 ---- 09D0 | CCCG60 | D_MOSTGW | E60 | MOST/CAN-Gateway (im CCC) |
| 62 ---- 0AC0 | RAD2_GW | D_MOSTGW | E87 | MOST/CAN-Gateway (im Radio Stufe 2) |
| 62 ---- 0F90 | RAD2_GW | D_MOSTGW | E87 | MOST/CAN-Gateway (im Radio Stufe 2) |
| 62 ---- 0D80 | MASK2GW | D_MOSTGW | E70 | MOST/CAN-Gateway (im MASK2) |
| 62 ---- 0D90 | CHAMPGW | D_MOSTGW | E70 | MOST/CAN-Gateway (im Champ) |
| 62 ---- 10E0 | CICR_GW | D_MOSTGW | E70 | MOST/CAN-Gateway (im CIC Rüko) |
| 62 ---- 1190 | CHAMP2RG | D_MOSTGW | E70 | MOST/CAN-Gateway (im Champ2 Rüko) |
| 62 ---- 11E0 | CICMR_GW | D_MOSTGW | E70 | MOST/CAN-Gateway (im CIC MID Rüko) |
| 63 ---- 0410 | MMI_GT | D_MMI | E65 | Mensch Maschine Interface Grafikteil |
| 63 ---- 06F0 | CCC_60 | D_MMI | E60 | Car Comunication Computer |
| 63 ---- 0700 | MASK60 | D_MMI | E60 | MMI Audio System Kontroller |
| 63 ---- 0800 | MMI_GT | D_MMI | RR1 | Mensch Maschine Interface |
| 63 ---- 0900 | RAD1 | D_MMI | E87 | Radio Stufe 1 |
| 63 ---- 0908 | RAD12R | D_MMI | E90 | Radio 1.2 Rüko |
| 63 ---- 0910 | RAD2 | D_MMI | E87 | Radio Stufe 2 |
| 63 ---- 0FA0 | RAD2 | D_MMI | E87 | Radio Stufe 2 |
| 63 ---- 0FA8 | RAD2 | D_MMI | E90 | Radio Stufe 2 Plus |
| 63 ---- 0DA0 | MASK2 | D_MMI | E70 | Audio System Kontroller MASK2 |
| 63 ---- 0DB0 | CHAMP | D_MMI | E70 | Audio System Kontroller CHAMP |
| 63 ---- 10F0 | CICR | D_MMI | E70 | Car Infotainment Computer CIC Rüko |
| 63 ---- 11D0 | CICMR | D_MMI | E70 | Car Infotainment Computer CIC MID Rüko |
| 63 ---- 11A0 | CHAMP2R | D_MMI | E70 | Audio System Kontroller CHAMP2 Rüko |
| 64 ---- 0420 | PDC_E65 | D_PDC | E65 | Park Distance Control |
| 64 ---- 0421 | PDC_65_2 | D_PDC | E65 | Park Distance Control |
| 64 ---- 09E0 | PDC_87 | D_PDC | E87 | Park Distance Control |
| 64 ---- 1270 | PDCR3 | D_PDC | E70 | Park Distance Control Rüko |
| 65 ---- 0430 | BZM_E65 | D_BZM | E65 | Bedienzentrum Mittelkonsole |
| 65 ---- 0710 | SZM_60 | D_BZM | E60 | Schaltzentrum Mittelkonsole |
| 65 ---- 0718 | SZM_60 | D_BZM | E60 | Schaltzentrum Mittelkonsole |
| 65 ---- 0990 | SZM_60 | D_BZM | E63 | Schaltzentrum Mittelkonsole |
| 66 ---- 0440 | BZMF_E65 | D_BZMF | E65 | Bedienzentrum Mittelarmlehne |
| 67 ---- 0540 | EC_E65 | D_EC | E65 | Zentrale Bedieneinheit |
| 67 ---- 0541 | ZBE_65 | D_EC | E65 | Zentrale Bedieneinheit |
| 67 ---- 0720 | ECL60 | D_EC | E60 | Zentrale Bedieneinheit Low |
| 67 ---- 07F0 | ECH60 | D_EC | E60 | Zentrale Bedieneinheit High |
| 67 ---- 07F1 | ZBEH60 | D_EC | E60 | Zentrale Bedieneinheit High |
| 67 ---- 07F2 | ZBEH60 | D_EC | E60 | Zentrale Bedieneinheit High |
| 67 ---- 0AE0 | ZBEH87 | D_EC | E87 | Zentrale Bedieneinheit High |
| 67 ---- 0AF0 | ZBEL87 | D_EC | E87 | Zentrale Bedieneinheit Low |
| 67 ---- 0AF8 | ZBEL87_2 | D_EC | E87 | Zentrale Bedieneinheit Low |
| 67 ---- 0D20 | ZBE_56 | D_EC | R56 | Zentrale Bedieneinheit |
| 67 ---- 1090 | ZBE_60_2 | D_EC | E60 | Zentrale Bedieneinheit |
| 68 ---- 0540 | ECF_E65 | D_ECF | E65 | Zentrale Bedieneinheit Fond |
| 68 ---- 0541 | ZBEF65 | D_ECF | E65 | Zentrale Bedieneinheit Fond |
| 69 ---- 0450 | FAH_E65 | D_FAH | E65 | Sitzmodul Fahrer hinten |
| 69 ---- 0451 | FAH_65_2 | D_FAH | E65 | Sitzmodul Fahrer hinten |
| 69 ---- 0C30 | FAH_PLX | D_FAH | E90 | Sitzmodul Fahrer hinten |
| 69 ---- 0C40 | FAH_PLX | D_FAH | E65 | Sitzmodul Fahrer hinten |
| 69 ---- 0C50 | FAH_PLX | D_FAH | E65 | Sitzmodul Fahrer hinten |
| 6A ---- 0450 | BFH_E65 | D_BFH | E65 | Sitzmodul Beifahrer hinten |
| 6A ---- 0451 | BFH_65_2 | D_BFH | E65 | Sitzmodul Beifahrer hinten |
| 6A ---- 0C30 | BFH_PLX | D_BFH | E90 | Sitzmodul Beifahrer hinten |
| 6A ---- 0C40 | BFH_PLX | D_BFH | E65 | Sitzmodul Beifahrer hinten |
| 6A ---- 0C50 | BFH_PLX | D_BFH | E65 | Sitzmodul Beifahrer hinten |
| 6B ---- 0470 | HKL_E65 | D_HKL | E65 | Heckklappenlift |
| 6B ---- 0471 | HKL_65_2 | D_HKL | E65 | Heckklappenlift |
| 6B ---- 0D70 | HKL_70 | D_HKL | E70 | Heckklappenlift |
| 6C ---- 07A0 | KFS_RR | D_KFS | RR1 | Kühlerfigursteuerung |
| 6C ---- 07A1 | KFS_RR | D_KFS | RR1 | Kühlerfigursteuerung |
| 6D ---- 0450 | FAS_E65 | D_FAS | E65 | Sitzmodul Fahrer |
| 6D ---- 0451 | FAS_65_2 | D_FAS | E65 | Sitzmodul Fahrer |
| 6D ---- 0920 | FAS_87 | D_FAS | E87 | Sitzmodul Fahrer |
| 6D ---- 0C30 | FAS_PLX | D_FAS | E90 | Sitzmodul Fahrer |
| 6D ---- 0C40 | FAS_PLX | D_FAS | E65 | Sitzmodul Fahrer |
| 6D ---- 0C50 | FAS_PLX | D_FAS | E65 | Sitzmodul Fahrer |
| 6E ---- 0450 | BFS_E65 | D_BFS | E65 | Sitzmodul Beifahrer |
| 6E ---- 0451 | BFS_65_2 | D_BFS | E65 | Sitzmodul Beifahrer |
| 6E ---- 0920 | BFS_87 | D_BFS | E87 | Sitzmodul Beifahrer |
| 6E ---- 0C30 | BFS_PLX | D_BFS | E90 | Sitzmodul Beifahrer |
| 6E ---- 0C40 | BFS_PLX | D_BFS | E65 | Sitzmodul Beifahrer |
| 6E ---- 0C50 | BFS_PLX | D_BFS | E65 | Sitzmodul Beifahrer |
| 70 ---- 04A1 | LM_E65_2 | D_LM | E65 | Lichtmodul |
| 70 ---- 07B0 | LM_60 | D_LM | E60 | Lichtmodul |
| 70 ---- 07B8 | LM_AHL | D_LM | E60 | Lichtmodul mit Adaptiver Lichtsteuerung |
| 70 ---- 0D60 | LM_AHL_2 | D_LM | E60 | Lichtmodul mit Adaptiver Lichtsteuerung |
| 71 ---- 04B0 | AHM_E65 | D_AHM | E65 | Anhängermodul |
| 71 ---- 1170 | AHM_70 | D_AHM | E70 | Anhängermodul |
| 72 ---- 05C0 | FRM_87 | D_KBM | E87 | Fussraum Modul Fahrerseite |
| 72 ---- 05C1 | FRM_87 | D_KBM | E90 | Fussraum Modul Fahrerseite |
| 72 ---- 0E60 | FRM_70 | D_KBM | E70 | Fussraum Modul Fahrerseite |
| 72 ---- 0730 | KBM_60 | D_KBM | E60 | Karosserie Basis Modul |
| 73 ---- 0740 | CID_60 | D_CID | E60 | Zentrales Info Display |
| 73 ---- 07E0 | CID_60 | D_CID | RR1 | Central Information Display |
| 73 ---- 0A30 | CID_90 | D_CID | E90 | Zentrales Info Display |
| 73 ---- 0A40 | CID_87 | D_CID | E87 | Zentrales Info Display |
| 73 ---- 0CE0 | CID_70 | D_CID | E70 | Zentrales Info Display |
| 73 ---- 11B0 | CIDR_70 | D_CID | E70 | Zentrales Info Display Rüko |
| 73 ---- 11B1 | CIDR_70 | D_CID | E70 | Zentrales Info Display Rüko |
| 73 ---- 1160 | CID_89 | D_CID | E89 | Zentrales Info Display |
| 74 ---- 0770 | CIDF65 | D_CIDF | E60 | Zentrales Info Display hinten |
| 74 ---- 0980 | CIDF65 | D_CIDF | E65 | Zentrales Info Display hinten |
| 74 ---- 09A0 | CIDF65 | D_CIDF | RR1 | Zentrales Info Display hinten links |
| 74 ---- 09A1 | CIDF65_2 | D_CIDF | RR1 | Zentrales Info Display hinten links |
| 74 ---- 0CB0 | RSEH65 | D_CIDF | E65 | Rear Seat Entertainment |
| 74 ---- 0EC0 | FOMO70 | D_CIDF | E70 | Fondmonitor links |
| 75 ---- 0EC0 | FOMO2_70 | D_CIDF2 | E70 | Fondmonitor rechts |
| 75 ---- 09B0 | CIDF2RR | D_CIDF2 | RR1 | Zentrales Info Display hinten rechts |
| 75 ---- 09B1 | CIDF2RR2 | D_CIDF2 | RR1 | Zentrales Info Display hinten rechts |
| 77 ---- 0E80 | RFK_70 | D_RFK | E70 | Rückfahrkamera-System |
| 78 ---- 04C0 | IHKA65 | D_KLIMA | E65 | Klimabedienteil |
| 78 ---- 05D0 | IHKA87 | D_KLIMA | E87 | Klimaautomatik |
| 78 ---- 05D8 | IHKA87_2 | D_KLIMA | E84 | Klimaautomatik |
| 78 ---- 0660 | IHKARR | D_KLIMA | RR1 | Klimabedienteil |
| 78 ---- 0D40 | IHKARR2 | D_KLIMA | RR2 | Klimabedienteil |
| 78 ---- 0790 | IHKA60 | D_KLIMA | E60 | Klimabedienteil |
| 78 ---- 0791 | IHKA60 | D_KLIMA | E60 | Klimabedienteil |
| 78 ---- 0792 | IHKA60_2 | D_KLIMA | E60 | Klimabedienteil |
| 78 ---- 0880 | IHKR90 | D_KLIMA | E90 | Klimaregelung |
| 78 ---- 08B0 | IHR_87 | D_KLIMA | E87 | Heizungsregelung |
| 78 ---- 0D30 | IHKA70 | D_KLIMA | E70 | Klimaautomatik |
| 78 ---- 0DE0 | IHS_56 | D_KLIMA | R56 | Heizungssteuerung |
| 78 ---- 0DF0 | IHKS56 | D_KLIMA | R56 | Klimasteuerung |
| 78 ---- 0E00 | IHKA56 | D_KLIMA | R56 | Klimaautomatik |
| 78 ---- 10B0 | IHKA89 | D_KLIMA | E89 | Klimaautomatik |
| 78 ---- 10C0 | IHKR89 | D_KLIMA | E89 | Klimaregelung |
| 79 ---- 0510 | HKA_E65 | D_KLIMA2 | E65 | Heck Klimaautomatik |
| 79 ---- 0D40 | FKA_70 | D_KLIMA2 | E70 | Fond Klimaautomatik |
| 7A ---- 04D0 | SHZH_E65 | D_SHZH | E65 | Standheizung, Zuheizer |
| 7A ---- 0760 | SHZH_E65 | D_SHZH | E60 | Standheizung, Zuheizer |
| 8B ---- 0C90 | NVC_65 | D_NVC | E65 | Night Vision Kamera |
| A0 ---- 0930 | CCCA60 | D_CCC | E60 | CCC Applikation |
| A0 ---- 0938 | CCCA60J | D_CCC | E60 | CCC Applikation Japan |
| A0 ---- 1100 | CICR_HD | D_CCC | E70 | Festplatte im CIC Rüko |
| A0 ---- 11F0 | CICMR_SD | D_CCC | E70 | SD-Karte im CIC MID Rüko |
| A0 ---- 1250 | CHAMP2RS | D_CCC | E70 | SD-Karte im Champ2 Rüko |
| A1 ---- 0220 | SBSL85 | D_SBSL2 | E60 | Satellit B-Säule links |
| A1 ---- 0A50 | SBSL85 | D_SBSL2 | E64 | Satellit B-Säule links |
| A2 ---- 0460 | SBSR85 | D_SBSR2 | E60 | Satellit B-Säule rechts |
| A2 ---- 0A60 | SBSR85 | D_SBSR2 | E64 | Satellit B-Säule rechts |
| A5 ---- 0C00 | EDCSVL | D_EDCSVL | E70 | Elektronischer Dämpfersatellit vorne links |
| A6 ---- 0C00 | EDCSVR | D_EDCSVR | E70 | Elektronischer Dämpfersatellit vorne rechts |
| A7 ---- 0C00 | EDCSHL | D_EDCSHL | E70 | Elektronischer Dämpfersatellit hinten links |
| A8 ---- 0C00 | EDCSHR | D_EDCSHR | E70 | Elektronischer Dämpfersatellit hinten rechts |
| A9 ---- 0F60 | CDCD70 | D_CDCDSP | E70 | Audio CD-Changer DSP |
| AB ---- 0F80 | MMCD70 | D_MMCDSP | E70 | Multimedia Changer DSP |
| 12 .0W. 000F | ME9K_NG4 | D_MOTOR | E46 | Motorelektronik ME9.2 4 Zylinder N45 |
| 12 .0W. 0010 | ME9N45 | D_MOTOR | E46 | Motorelektronik ME9.2 4 Zylinder N45 |
| 12 .1L. 0001 | MEV9N46 | D_MOTOR | E46 | Motorelektronik ME9.2 4 Zylinder N46 |
| 12 0058 000A | DDE50K47 | D_MOTOR | E46 | Dieselelektronik DDE 5 4 Zylinder M47 TÜ |
| 12 0058 0012 | D50M47B1 | D_MOTOR | E83 | Dieselelektronik DDE 5 4 Zylinder M47 TÜ |
| 12 0058 0014 | DDE50K47 | D_MOTOR | E46 | Dieselelektronik DDE 5 4 Zylinder M47 TÜ |
| 12 0058 001E | D50M47A | D_MOTOR | E46 | Dieselelektronik DDE 5 4 Zylinder M47 TÜ |
| 12 0058 001F | D50M47A | D_MOTOR | E46 | Dieselelektronik DDE 5 4 Zylinder M47 TÜ |
| 12 0059 0020 | D50M57A1 | D_MOTOR | E46 | Dieselelektronik DDE 5 6 Zylinder M57 TÜ |
| 12 .59. 0020 | D50M57A1 | D_MOTOR | E46 | Dieselelektronik DDE 5 6 Zylinder M57 TÜ |
| 12 .59. 0040 | D50M57B1 | D_MOTOR | E53 | Dieselelektronik DDE 5 6 Zylinder M57 TÜ |
| 12 .59. 0041 | D50M57E1 | D_MOTOR | E83 | Dieselelektronik DDE 5 6 Zylinder M57 TÜ EU3-MT |
| 12 .JB. 0030 | D50M47B1 | D_MOTOR | E46 | Dieselelektronik DDE 5 4 Zylinder M47 TÜ EU4 |
| 12 .JB. 0040 | D50M47B1 | D_MOTOR | E46 | Dieselelektronik DDE 5 4 Zylinder M47 TÜ EU4 Cabrio |
| 12 .JC. 001E | D50M47A | D_MOTOR | E46 | Dieselelektronik DDE 5 4 Zylinder M47 TÜ uL |
| 12 .JC. 0030 | D50M47B1 | D_MOTOR | E46 | Dieselelektronik DDE 5 4 Zylinder M47 TÜ EU4 |
| 12 .JD. 0040 | D50M57B1 | D_MOTOR | E83 | Dieselelektronik DDE 5 6 Zylinder M57 TÜ EU3-AT EU4 |
| 12 .JD. 0041 | D50M57E1 | D_MOTOR | E83 | Dieselelektronik DDE 5 6 Zylinder M57 TÜ EU3-AT EU4 |
| 12 .JD. 0042 | D50M57E1 | D_MOTOR | E46 | Dieselelektronik DDE 5 6 Zylinder M57 TÜ EU4 |
| 12 .JD. 0050 | D50M57E1 | D_MOTOR | E46 | Dieselelektronik DDE 5 6 Zylinder M57 TÜ EU4 Cabrio |
| 12 .K1. 0000 | MSS70 | D_MOTOR | E85 | Motorelektronik MSS70  6 Zylinder S54 |
| 12 .K1. 0001 | MSS70 | D_MOTOR | E85 | Motorelektronik MSS70  6 Zylinder S54 |
| 29 ---- 0001 | DSC_MK60 | D_ABSKWP | E46 | DSC MK60 mit analogen DSC-Sensoren |
| 29 ---- 0002 | DSC_MK60 | D_ABSKWP | E46 | ASC MK60 |
| 29 ---- 0003 | DSC_MK60 | D_ABSKWP | R50 | ABS MK60 |
| 29 ---- 0004 | DSC_MK60 | D_ABSKWP | R50 | ASC MK60 |
| 29 ---- 0005 | DSC_MK60 | D_ABSKWP | R50 | DSC MK60 mit SensorCluster |
| 29 ---- 0006 | DSC_MK60 | D_ABSKWP | E46 | DSC MK60 mit SensorCluster |
| 29 ---- 0007 | DSC_MK60 | D_ABSKWP | R50 | ABS MK70 |
| 29 ---- 0020 | DXC8 | D_ABSKWP | E53 | DSC8 Allradsystem |
| 29 ---- 0021 | DXC8 | D_ABSKWP | E83 | DSC8 Allradsystem |
| 29 ---- 0022 | DXC_83 | D_ABSKWP | E83 | DXC8 Plus Allradsystem |
| 29 ---- 0023 | DXC8 | D_ABSKWP | E83 | DSC8 Allradsystem |
| 29 ---- 0030 | DSC_85 | D_ABSKWP | E85 | DSC MK60 E5 |
| 32 .2M. 0550 | GS30 | D_0032 | E85 | Sequentielles Schaltgetriebe |
| 34 ---- 0AD0 | VGSG83 | D_VGSG | E83 | Verteilergetriebe Steuergerät |
| 37 ---- 04E0 | EPS_E85 | D_EPS | E85 | Elektrische Lenkung |
| 37 ---- 04E1 | EPS_85_2 | D_EPS | E85 | Elektrische Lenkung |
| 46 ---- 0670 | CID_85 | D_CID | E85 | Zentrales Info Display |
| A1 ---- 0570 | SBSL85 | D_SBSL2 | E85 | Satellit B-Säule links |
| A2 ---- 0580 | SBSR85 | D_SBSR2 | E85 | Satellit B-Säule rechts |
| A4 ---- 0560 | SIM85 | D_SIM | E85 | Sicherheits- Informationsmodul |
| A4 ---- 0B20 | ACSM85 | D_SIM | E85 | Airbag-Elektronik |
| AD ---- 0A10 | STVL85 | D_STVL2 | E85 | Satellit Tür vorne links |
| AE ---- 0A20 | STVR85 | D_STVR2 | E85 | Satellit Tür vorne rechts |
| ?? ---- ???? |  |  | E?? |  |

### ZUORDNUNGSTABELLEMOTORRAD

| ADR_VAR_DIAG | SGBD | GRUPPE | STEUERGERAET |
| --- | --- | --- | --- |
| 12 ---- 6000 | MRBMSK | D_MRMOT | Motorrad Motorsteuergerät K24 |
| 12 ---- 6010 | MRBMSKP | D_MRMOT | Motorrad Motorsteuergerät K24 Plus |
| 12 ---- 6020 | MRBMSKP2 | D_MRMOT | Motorrad Motorsteuergerät K24 Drehzahlmodifiziert |
| 12 ---- 6050 | MRKMSK16 | D_MRMOT | Motorrad Motorsteuergerät K16 |
| 12 ---- 0001 | MRBMSC | D_MRMOT | Motorrad Motorsteuergerät BMSC |
| 12 ---- 0002 | MRBMSC | D_MRMOT | Motorrad Motorsteuergerät BMSC |
| 12 ---- 0003 | MRBMSC | D_MRMOT | Motorrad Motorsteuergerät BMSC |
| 12 ---- 0004 | MRBMSC | D_MRMOT | Motorrad Motorsteuergerät BMSC |
| 12 ---- 0005 | MRBMSC2 | D_MRMOT | Motorrad Motorsteuergerät 1 Zylinder |
| 29 ---- 6400 | MRIABS | D_MRABS | Motorrad Integral ABS |
| 29 ---- 6900 | MRABS | D_MRABS | Motorrad Bosch ABS |
| 29 ---- 6901 | MRABS1 | D_MRABS | Motorrad Bosch ABS K72/K29HP |
| 29 ---- 6B00 | MRIABS2 | D_MRABS | Motorrad Integral ABS2 |
| 29 ---- 6B10 | MRIABS3 | D_MRABS | Motorrad Integral ABS BOSCH 9ME |
| 29 ---- 6D00 | MRABS2 | D_MRABS | Motorrad Bosch ABS K15 |
| 41 ---- 6500 | MRDWA | D_MRDWA | Motorrad Diebstahlwarnanlage |
| 41 ---- 6508 | MRDWA | D_MRDWA | Motorrad Diebstahlwarnanlage mit RDC |
| 41 ---- 6510 | MRRDC | D_MRDWA | Motorrad Reifendruckkontrolle |
| 47 ---- 6700 | MRRAD | D_MRRAD | Motorrad Radio |
| 60 ---- 6100 | MRKOMBI | D_MRKOMB | Motorrad Instrumentenkombi |
| 60 ---- 6110 | MRKOMB46 | D_MRKOMB | Motorrad Instrumentenkombi K46 |
| 60 ---- 6800 | MRKOMB71 | D_MRKOMB | Motorrad Instrumentenkombi K7x |
| 60 ---- 6C00 | MRKOMB2D | D_MRKOMB | Motorrad Instrumentenkombi 2D/Preh |
| 63 ---- 6710 | MRAUDIO | D_MRAUD | Motorrad Audioplattform |
| 72 ---- 6200 | MRZFEL | D_MRZFE | Motorrad Zentrale Fahrgestellelektronik Low |
| 72 ---- 6300 | MRZFEH | D_MRZFE | Motorrad Zentrale Fahrgestellelektronik High |
| 72 ---- 6A00 | MRZFEB | D_MRZFE | Motorrad Zentrale Fahrgestellelektronik Basic |
| 73 ---- 6600 | MRRBT | D_MRRBT | Motorrad Radiobedienteil |
| ?? ---- ???? |  |  |  |

### ZUORDNUNGSTABELLEUDS

| ADR_INDEX | SGBD | GRUPPE | BAUREIHE | STEUERGERAET | VERANTWORTUNG |
| --- | --- | --- | --- | --- | --- |
| 00 0F1050 | JBBF3 | G_JBBF | F01 | Junction Box Beifahrer III | BMW EI-61 Klingseisen |
| 01 0F1020 | ACSM3 | G_AIRBAG | F01 | Airbag-Elektronik | BMW EI-62 Muhr |
| 01 0F16E0 | ACSM4 | G_AIRBAG | F20 | Airbag-Elektronik (Bosch) | BMW EI-622 Eisenmann |
| 01 0F16E5 | ACSM4 | G_AIRBAG | F25 | Airbag-Elektronik (Conti) | BMW EI-622 Muhr |
| 02 0F1280 | SZL_01 | G_SZL | F01 | Schaltzentrum Lenksäule (mit Lenkwinkelsensor) | BMW EI-63 King |
| 04 0F1030 | VOCS01 | G_VOCS | F01 | Innenraumkameras Insassenklassifizierung | BMW EI-62 Bauer |
| 05 0F1470 | CDM_RR4 | G_CDM | RR4 | Coach door module | BMW EK-414 Schmidbauer |
| 06 0F11E0 | TRSVC01 | G_TRSVC | F01 | Top-, Rear, Sideview Kamera | BMW EI-61 Zeller |
| 07 0F15A0 | SME_04 | G_SME | F04 | Speicher Management Elektronik | BMW EA-421 Ueberle |
| 07 0F1880 | SME_10 | G_SME | F10 | Speicher Management Elektronik | BMW TA-462 Mellersh |
| 08 0F1390 | HC2_01 | G_HC | F01 | Heading Control (Spurwechselwarnung) | BMW EF-622 Mauclair |
| 0B 0F1690 | SCR_01 | G_SCR | F01 | Selective Catalytic Reduction | BMW EK-542 Lersch |
| 0D 0F1730 | HKFM11 | G_HKFM | F11 | Heck- Funktionsmodul | BMW EK-542 Huth |
| 0E 0F1830 | SVT_01 | G_SVT | F01 | Servotronic Steuergerät | BMW EF-440 Hohmann |
| 0F 0F1720 | GHAS10 | G_GHAS | F10 | Geregelte HinterAchsSperre | BMW ZS-E32 Marcus Mueller |
| 10 0F1310 | ZGW_01 | G_ZGW | F01 | Zentrales Gateway | BMW EI-73 Königseder |
| 12 0F1090 | MSD85L6 | G_MOTOR | F01 | Motorelektronik MSD 85 8 Zylinder N63 | BMW EA-41 Mertl |
| 12 0F1370 | MSD87 | G_MOTOR | F01 | Motorelektronik MSD 87 6 Zylinder N54 | BMW EA-41 Mertl |
| 12 0F10A0 | D73N57A0 | G_MOTOR | F01 | Dieselelektronik DDE 7.3 6 Zylinder N57 | BMW ZM-E-34 Langeder |
| 12 0F17B0 | D73N57E0 | G_MOTOR | F10 | Dieselelektronik DDE 7.31 6 Zylinder N57 oL | BMW ZM-E-34 Zeintl |
| 12 0F1380 | MSD87_R0 | G_MOTOR | F01 | Motorelektronik MSD 87 12 Zylinder N74 Master | BMW EA-41 Mertl |
| 12 0F13E0 | MSV90 | G_MOTOR | F01 | Motorelektronik MS 90 6 Zylinder N52 TÜ | BMW EA-413 Ortner |
| 12 0F13F0 | MEVD172 | G_MOTOR | F01 | Motorelektronik ME V17.2 6 Zylinder N55 | BMW EA-413 Ortner |
| 12 0F1810 | MEVD1724 | G_MOTOR | F25 | Motorelektronik ME V17.2.4 4 Zylinder N20 | BMW EA-413 Ortner |
| 12 0F1740 | D72N47A0 | G_MOTOR | F25 | Dieselelektronik DDE 7.2 4 Zylinder N47 TÜ | BMW ZM-E-34 Zeintl |
| 12 0F18A0 | D72N47A0 | G_MOTOR | F25 | Dieselelektronik DDE 7.01 4 Zylinder N47 TÜ uL/oL | BMW ZM-E-34 Zeintl |
| 12 0F17F0 | MEVD1725 | G_MOTOR | F20 | Motorelektronik ME V17.25 4 Zylinder N13 | BMW EA-413 Ortner |
| 12 0F1780 | MSD85YL6 | G_MOTOR | F04 | Motorelektronik MSD 85 8 Zylinder N63 Hybrid | BMW EA-413 Ortner |
| 12 0F1850 | MSS08 | G_MOTOR | F10 | Motorelektronik MSS 08 8 Zylinder S63 | BMW ZS-E-45 Eggert |
| 13 0F1380 | MSD87_L0 | G_MOTOR2 | F01 | Motorelektronik MSD 87 12 Zylinder N74 Slave | BMW EA-41 Mertl |
| 16 0F1070 | ASA_01 | G_ASA | F01 | Aktuator Steuergerät Aktivlenkung | BMW EF-61 Einberger |
| 16 0F1640 | ASA_25 | G_ASA | F25 | Aktuator Steuergerät Aktivlenkung | BMW EF-611 Hohmann |
| 17 0F1180 | EKP301 | G_EKP | F01 | Elektrische Kraftstoffpumpe 3. Generation | BMW EA-71 Engelke |
| 18 0F1270 | GS100A | G_EGS | F01 | Getriebesteuergerät TC100 | BMW EA-715 Seifert |
| 18 0F14B0 | GSB231 | G_EGS | F07 | Getriebesteuergerät 8HPxx | BMW EA-715 Hezel |
| 18 0F1870 | DKG_10 | G_EGS | F10 | Doppelkupplungsgetriebe | BMW ZS-E-32 Kisch |
| 18 0F1890 | GKEHY23 | G_EGS | F10 | Getriebesteuergerät 8Pxx | BMW EA-715 Reuss |
| 19 0F1480 | LMV_01 | G_LMV | F01 | Längsmomentverteilung | BMW EA-514 Reuter |
| 1A 0F15C0 | EME_04 | G_EME | F04 | Elektromotor-Elektronik (Hybridfahrzeug) | BMW EA-541 Loeffler |
| 1C 0F10F0 | ICMQL | G_ICMQL | F01 | Längs und Querdynamik Management | BMW EF-61 Kothgasser |
| 1C 0F1650 | ICM_25 | G_ICMQL | F25 | Längs und Querdynamik Management | BMW EF-611 Singer |
| 20 0F13A0 | RDC_01 | G_RDC | F01 | Reifen Druck Control | BMW EF-442 Zucchetti |
| 20 0F1670 | RDC_03 | G_RDC | F03 | Reifen Druck Control Sicherheitsfahrzeug | BMW EF-442 Zucchetti |
| 20 0F1760 | RDCUDS | G_RDC | F25 | Reifen Druck Control Low Cost BN2020 | BMW EF-442 Zucchetti |
| 21 0F14F0 | FRR_10 | G_ACC | F10 | ACC Full Range Radar | BMW EF-622 Maier |
| 24 0F1710 | CVM_12 | G_CVM | F12 | Cabrio Verdeck Modul | BMW EI-60 Andy King |
| 26 0F1010 | RSE_01 | G_RSE | F01 | Rear Seat Entertainment Mid | BMW EI-41 Roettgermann |
| 26 0F13C0 | RSEH01 | G_RSE | F01 | Rear Seat Entertainment High | BMW EI-44 Mallinson |
| 29 0F1060 | DSC_01 | G_DSC | F01 | Dynamische Stabilitätskontrolle | BMW EF-62 Wanner |
| 29 0F1620 | DXC_25 | G_DSC | F25 | Dynamische Stabilitätskontrolle | BMW EF-623 Muennich |
| 29 0F1860 | DSC_20 | G_DSC | F20 | Dynamische Stabilitätskontrolle | BMW EF-520 Maier |
| 2A 0F1100 | EMF_01 | G_EMF | F01 | Elektromechanische Feststellbremse | BMW EF-62 Keil |
| 2A 0F14C0 | EMF_10 | G_EMF | F10 | Elektromechanische Feststellbremse | BMW EF-623 Hoedl |
| 2B 0F1080 | HSR_01 | G_HSR | F01 | Hinterachs-Schräglauf Regelung | BMW EF-61 Einberger |
| 2C 0F1560 | PMA_10 | G_PMA | F10 | Parkmanöver-Assistent | BMW EF-622 Freistadt |
| 2E 0F1550 | PCU_10 | G_PCU | F10 | Power Control Unit | BMW EI-630 Pröbstle |
| 30 0F1570 | EPS_01 | G_EPS | F01 | Elektrische Lenkung | BMW EF-612 Jungmann |
| 30 0F16A0 | EPS_25 | G_EPS | F25 | Elektrische Lenkung | BMW EF-612 Feldmann |
| 30 0F1800 | EPS_20 | G_EPS | F20 | Elektrische Lenkung | BMW EF-440 Schillitz |
| 31 0F1700 | MMC2 | G_MMC | F07 | Multimedia Changer 2 | BMW EI-41 Henkel |
| 36 0F15D0 | CMEDIA | G_TEL | F10 | COMBOX Telefon | BMW EI-43 Heckler |
| 37 0F14D0 | AMPT07 | G_AMP | F07 | Top HIFI Verstärker | BMW EI-41 Matthiesen |
| 37 0F14E0 | AMPH07 | G_AMP | F07 | HIFI Verstärker | BMW EI-41 Matthiesen |
| 37 0F1520 | AMPT10 | G_AMP | F10 | Top HIFI Verstärker | BMW EI-41 Matthiesen |
| 37 0F1530 | AMPH10 | G_AMP | F10 | HIFI Verstärker | BMW EI-41 Matthiesen |
| 38 0F1110 | EHC_01 | G_EHC | F01 | Luftfeder | BMW EF-63 Thasler |
| 38 0F1540 | EHC2RR4 | G_EHC | RR4 | Luftfeder | BMW EF-63 Thasler |
| 39 0F1120 | ICMV | G_ICMV | F01 | Vertikaldynamik Management | BMW EF-63 Gebhardt |
| 39 0F1660 | VDC_25 | G_ICMV | F25 | Vertikaldynamik Management unter 0x39 bur bis I300! | BMW EF-631 Augustin |
| 3A 0F17A0 | EME_10 | G_EME2 | F10 | Elektromotor-Elektronik Generation 2.0 (Hybridfahrzeug) | BMW EA-452 Stahl |
| 3D 0F1260 | HUD_01 | G_HUD | F01 | Head-Up-Display | BMW EI-42 Pilkington |
| 40 0F1000 | CAS4 | G_CAS | F01 | Car Access System 4 | BMW EI-731 Kratz |
| 40 0F1001 | CAS4_2 | G_CAS | F01 | Car Access System 4 | BMW EI-731 Kratz |
| 40 0F16B0 | FEM_20 | G_CAS | F20 | Front Electronic Module | BMW EI-640 Kaltenbrunner |
| 48 0F11D0 | VSW_01 | G_VSW | F01 | Videoswitch | BMW EI-41 Berthele |
| 49 0F1500 | SEC1 | G_SECUR1 | F03 | Sicherheitsfahrzeugmodul 1 | BMW EK-6 Birzle |
| 4A 0F1510 | SEC2 | G_SECUR2 | F03 | Sicherheitsfahrzeugmodul 2 | BMW EK-6 Birzle |
| 4B 0F1320 | TVM_01 | G_TVM | F01 | TV-Modul | BMW EI-41 Zitzmann |
| 4B 0F1790 | TVM_01 | G_TVM | F18 | TV-Modul DTMB (China) | BMW EI-41 Berthele |
| 4D 0F10B0 | EMA_LI | G_EMA_LI | F01 | Elektromotorischer Aufroller Links | BMW EI-62 Schuster |
| 4E 0F10C0 | EMA_RE | G_EMA_RE | F01 | Elektromotorischer Aufroller Rechts | BMW EI-62 Schuster |
| 50 0F1750 | DWA_12 | G_CANSIN | F12 | DWA mit Sirene / Neigungsgeber | BMW EI-613 Wehrs |
| 56 0F10E0 | FZD3 | G_FZD | F01 | Funktionszentrum Dach III | BMW EI-61 Herter |
| 56 0F16D0 | FZD_20 | G_FZD | F20 | Funktionszentrum Dach L7 | BMW EI-61 Herter |
| 57 0F11C0 | NIVI2 | G_NIVI | F01 | Nightvision Fernbereich | BMW EI-61 Russ |
| 57 0F1290 | NIVI2N | G_NIVI | F01 | Nightvision Nahbereich | BMW EI-61 Weidhaas |
| 5D 0F1350 | KAFAS01 | G_KAFAS | F01 | Kamerabasiertes Fahrerassistenzsystem | BMW EI-611 Discher |
| 5D 0F1840 | KAFAS20 | G_KAFAS | F20 | Kamerabasiertes Fahrerassistenzsystem | BMW EI-611 Fischer |
| 5E 0F12A0 | GWS_01 | G_GWS | F01 | Gangwahlschalter | BMW EI-63 Uzun |
| 5E 0F1580 | GW_RR4 | G_GWS | RR4 | Gangwahlhebel RR4 | BMW EI-630 King |
| 5F 0F1330 | FLA_01 | G_FLA | F01 | Fernlicht Assistent | BMW EI-611 Weidhaas |
| 5F 0F17E0 | FLA_20 | G_FLA | F20 | Fernlicht Assistent | BMW EI-611 Weidhaas |
| 60 0F1160 | KOMB01 | G_KOMBI | F01 | Instrumentenkombi | BMW EI-42 Jilg |
| 60 0F1630 | KOMB25 | G_KOMBI | F25 | Instrumentenkombi Basis | BMW EI-42 Jilg |
| 61 0F15E0 | CECALL | G_ECALL | F10 | COMBOX Notruf | BMW EI-43 Heckler |
| 63 0F12D0 | CIC | G_MMI | F01 | Car Infotainment Computer CIC | BMW EI-44 Mallinson |
| 63 0F1580 | CHAMP2 | G_MMI | F01 | Audio System Kontroller CHAMP2 | BMW EI-44 Mallinson |
| 63 0F15B0 | CICM | G_MMI | F01 | Car Infotainment Computer CIC MID | BMW EI-44 Mallinson |
| 63 0F1770 | RAD12 | G_MMI | F25 | Radio 1.2 | BMW EI-41 Kuhrau |
| 63 0F1820 | ENTRY | G_MMI | F20 | Entry HeadUnit | BMW EI-44 Mallinson |
| 64 0F13B0 | PDC_01 | G_PDC | F01 | Park Distance Control | BMW EI-612 Matters |
| 67 0F11F0 | ZBE_01 | G_ZBE | F01 | Zentrale Bedieneinheit | BMW EI-63 Doerrer |
| 67 0F18B0 | ZBEL20 | G_ZBE | F20 | Zentrale Bedieneinheit | BMW EI-541 Kuedde |
| 68 0F1200 | ZBEF01 | G_ZBEF | F01 | Zentrale Bedieneinheit Fond | BMW EI-63 Doerrer |
| 68 0F1590 | ACF_01 | G_ZBEF | F01 | Audio Control Fond | BMW EI-631 Clarke |
| 69 0F1220 | FAH_01 | G_FAH | F01 | Sitzmodul Fahrer hinten | BMW EI-61 Hellwig |
| 6A 0F1220 | BFH_01 | G_BFH | F01 | Sitzmodul Beifahrer hinten | BMW EI-61 Hellwig |
| 6B 0F1170 | HKL_01 | G_HKL | F01 | Heckklappenlift | BMW EK-414 Schmidbauer |
| 6D 0F1220 | FAS_01 | G_FAS | F01 | Sitzmodul Fahrer | BMW EI-61 Hellwig |
| 6E 0F1220 | BFS_01 | G_BFS | F01 | Sitzmodul Beifahrer | BMW EI-61 Hellwig |
| 71 0F1340 | AHM_01 | G_AHM | F01 | Anhängermodul | BMW EI-61 Brod |
| 72 0F10D0 | FRM3 | G_FRM | F01 | Fussraummodul III | BMW EI-63 Johnke |
| 72 0F16C0 | REM_20 | G_FRM | F20 | Rear Electronic Module | BMW EI-640 Roesler |
| 73 0F1150 | CID_01 | G_CID | F01 | Zentrales Info Display | BMW EI-42 Das |
| 73 0F13D0 | CID_01T | G_CID | F01 | Zentrales Info Display | BMW EI-42 Kar |
| 73 0F17D0 | CID_25 | G_CID | F25 | Zentrales Info Display | BMW EI-42 Weinberger |
| 74 0F1490 | CID_01R1 | G_CIDF | F01 | Zentrales Info Display hinten links | BMW EI-42 Das |
| 75 0F14A0 | CID_01R2 | G_CIDF2 | F01 | Zentrales Info Display hinten rechts | BMW EI-42 Das |
| 76 0F1660 | VDC_25 | G_VDC | F25 | Vertikaldynamik Management | BMW EF-631 Augustin |
| 77 0F1210 | RFK_01 | G_RFK | F01 | Rückfahrkamera-System | BMW EI-61 Augst |
| 78 0F1190 | IHKA01 | G_KLIMA | F01 | Klimaautomatik | BMW EI-63 Schusser |
| 78 0F1600 | IHKA25 | G_KLIMA | F25 | Klimaautomatik 1-zonig | BMW EI-541 Wendrock |
| 78 0F1610 | IHKA25 | G_KLIMA | F25 | Klimaautomatik 2-zonig | BMW EI-541 Wendrock |
| 78 0F1680 | IHKARR4 | G_KLIMA | RR4 | Klimaautomatik | BMW EI-541 Sapmaz |
| 78 0F17C0 | IHKA20 | G_KLIMA | F20 | Klimaautomatik | BMW EI-541 Wendrock |
| 79 0F11A0 | FKA_01 | G_KLIMA2 | F01 | Fond Klimaautomatik | BMW EI-63 Schusser |
| 7B 0F11B0 | HKA_02 | G_KLIMA3 | F02 | Heck Klimaautomatik | BMW EI-63 Schusser |
| A5 0F1130 | RK_VL | G_RK_VL | F01 | Radknoten vorne links | BMW EF-63 Hagl |
| A6 0F1130 | RK_VR | G_RK_VR | F01 | Radknoten vorne rechts | BMW EF-63 Hagl |
| A7 0F1130 | RK_HL | G_RK_HL | F01 | Radknoten hinten links | BMW EF-63 Hagl |
| A8 0F1130 | RK_HR | G_RK_HR | F01 | Radknoten hinten rechts | BMW EF-63 Hagl |
| ?? ?????? |  |  | F?? |  |  |

### ZUORDNUNGSTABELLEHYBRID

| ADR_INDEX | SGBD | GRUPPE | BAUREIHE | STEUERGERAET | VERANTWORTUNG |
| --- | --- | --- | --- | --- | --- |
| 18 8060 | TCM_72 | H_TCM | E72 | Transmission Control Module | BMW EA-410 Wohlwender |
| 1A 8030 | HCP_72 | H_HCP | E72 | Hybrid Control Processor | BMW EA-410 Wohlwender |
| 28 8000 | APM_72 | H_APM | E72 | Auxiliary Power Module | BMW EA-423 Lorscheid |
| 95 8070 | DSM_72 | H_DSM | E72 | Direct Shifter Module (Parksperrensteuergerät) | BMW EA-715 Blaß |
| 96 8040 | MCPA72 | H_MCPA | E72 | Motor Control Processor A | BMW EA-410 Wohlwender |
| 97 8050 | MCPB72 | H_MCPB | E72 | Motor Control Processor B | BMW EA-410 Wohlwender |
| 99 8020 | EMPI72 | H_EMPI | E72 | Electrical Motor Pump Inverter | BMW HT-A-2 Gehringer |
| 9A 8010 | BPCM72 | H_BPCM | E72 | Battery Pack Control Module | BMW HT-A-2 Jung |
| ?? ???? |  |  | E72 |  |  |

### ZUORDNUNGSTABELLEMOTORRADUDS

| ADR_INDEX | SGBD | GRUPPE | STEUERGERAET |
| --- | --- | --- | --- |
| 0E 0F8000 | X_FSA | G_MRFSA | Motorrad Funktionssatellit |
| 12 0F8B00 | X_BMSX | G_MRMOT | Motorrad Motorsteuerung BMSX |
| 20 0F8100 | X_RDC | G_MRRDC | Motorrad Reifendruckkontrolle |
| 22 0F8200 | X_ASW | G_MRASW | Motorrad Aktivscheinwerfer |
| 29 0F8300 | X_ABS | G_MRABS | Motorrad ABS |
| 38 0F8400 | X_ESA | G_MRESA | Motorrad Eektrische Federbeinverstellung |
| 39 0F8500 | X_SAF | G_MRSAF | Motorrad Semiaktives Fahrwerk |
| 40 0F8600 | X_SLZ | G_MRSLZ | Motorrad Schlüsselloses Zugangssystem |
| 41 0F8700 | X_DWA | G_MRDWA | Motorrad Diebstahlwarnanlage |
| 60 0F8800 | X_KOMBI | G_MRKOMB | Motorrad Instrumentenkombi |
| 63 0F8900 | X_AUDIO | G_MRAUD | Motorrad Audioplattform |
| 72 0F8A00 | X_BCO | G_MRBCO | Motorrad Body-Controller |
| ?? ?????? |  |  |  |
