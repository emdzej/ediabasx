# T_INPA.prg

## General

|  |  |
| --- | --- |
| File | T_INPA.prg |
| Type | PRG |
| Jobs | 4 |
| Tables | 2 |
| Origin | BMW TI-545 Rüdiger Gall |
| Revision | 1.102 |
| Author | BMW TI-544 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | externe Tabelle ZuordnungsTabelle |  |  |
| ORIGIN | string | BMW TI-545 Rüdiger Gall |  |  |
| REVISION | string | 1.102 |  |  |
| AUTHOR | string | BMW TI-544  |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.102 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### INPA_SONDERSCRIPT_ZUORDNUNG

Verantwortlich für diesen job: Rüdiger Gall, TI-544 Sonder-INPA-Scripte pro Baureihe auslesen. Es wird keine Kommunnikation mit dem Steuergerät aufgebaut Es wird nur die table InpaScriptZuordnung00 ausgelesen Die ausgelesenen Spalten über die Baureihe werden ab INPA 6.3.0, 64BIT in die Konfigurationsdatei INPASCR.INI, INPASCRAUT.INI, ... geschrieben Beim Start von INPALOAD.EXE werden die Inhalte in der Scriptauswahl angezeigt.

| Name | Type | Description |
| --- | --- | --- |
| BAUREIHE | string | Gewünschte Baureihe ab F01 Hinweis: E-Baureihen werden nicht unterstützt. table InpaScriptZuordnung00 BAUREIHE |

### INPA_SCRIPT_ZUORDNUNG

Verantwortlich für diesen Job: Rüdiger Gall, TI-544 INPA-Scripte pro Baureihe auslesen. Es wird keine Kommunnikation mit dem Steuergerät aufgebaut Es wird nur die table InpaScriptZuordnung01 ausgelesen Die ausgelesenen Spalten über die Baureihe werden ab INPA 6.5.1, 64-BIT in die Konfigurationsdatei INPASCR.INI, INPASCRAUT.INI, ... geschrieben Beim Start von INPALOAD.EXE werden die Inhalte zum angeschlossenem Fahrzeug in der Scriptauswahl angezeigt.

| Name | Type | Description |
| --- | --- | --- |
| SGBD_NAME | string | Gewünschte SGBD |

## Tables

### INPASCRIPTZUORDNUNG00

| BAUREIHE | INPA_ANZEIGE_EBENE | INPA_AUSWAHL | INPA_SCRIPT | INPA_BESCHREIBUNG | INPA_ABKUERZUNG |
| --- | --- | --- | --- | --- | --- |
| XXX | 1 |  | TD-530NA | Fahrzeug-Dokumentation Nacharbeit | FKT |
| XXX | 2 |  | TD-530 | Fahrzeug-Dokumentation Analyse | FKT |
| G05 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| G06 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| G06 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| G07 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| G14 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| G15 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| G16 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| F91 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| F92 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| F93 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| F95 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| F96 | 1,2,3,4 | FAHRWERK | RDC_2018 |  |  |
| ??? |  |  |  |  |  |

### INPASCRIPTZUORDNUNG01

| ECU_SGBD | ECU_ADRESSE | I_STUFE_HO_START | I_STUFE_HO_STOP | INPA_ANZEIGE_EBENE | INPA_AUSWAHL | INPA_SCRIPT | INPA_BESCHREIBUNG_DE | INPA_BESCHREIBUNG_EN | INPA_BESCHREIBUNG_ES | INPA_BESCHREIBUNG_HU | INPA_ABKUERZUNG | BAUREIHE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| JBBF3 | 00 |  |  | 1 | KAROSSERIE | JBBF3 | Junction Box Beifahrer | Junction Box Passenger |  |  | JBBF | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,F25,F26,RR4,RR5,RR6 |
| ACSM3 | 01 |  |  | 1 | KAROSSERIE | ACSM3 | Airbag Steuergerät | Airbag |  |  | ACSM | F01,F02,F03,F04,F06,F07,F10,F11,F18 |
| ACSM4 | 01 |  |  | 1 | KAROSSERIE | ACSM4 | Airbag Steuergerät | Airbag |  |  | ACSM | F01,F06,F07,F10,F11,F12,F13,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F85,F86,F87,RR4,RR5 |
| ACSM4I | 01 |  |  | 1 | KAROSSERIE | ACSM4I | Airbag Steuergerät | Airbag |  |  | ACSM | F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,I01,I12,I15,M13 |
| ACSM5 | 01 |  |  | 1 | KAROSSERIE | ACSM5 | Airbag Steuergerät | Airbag |  |  | ACSM | F40,F44,F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,G42,G43,J29,RR11,RR12,RR21,RR22,RR31 |
| ACSM6 | 01 |  |  | 1 | KAROSSERIE | ACSM6 | Airbag Steuergerät | Airbag |  |  | ACSM | I20 |
| SZL_01 | 02 |  |  | 1 | KAROSSERIE | SZL_01 | Lenksäule / Schaltzentrum | Steering Column / Control Center |  |  | SZL | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,RR6 |
| BATT48 | 02 |  |  | 1 | NIEDERVOLT | BATT48 | Batterie / Steuergerät 48V | Battery / Control Unit 48V |  |  | BATT48 | F95,F96,G01,G02,G05,G06,G07,G14,G15,G16,G20,G21,G22,G23,G26,G30,G31,G32 |
| BAT48FAR | 02 |  |  | 1 | NIEDERVOLT | BAT48FAR | Batterie / Steuergerät 48V / FAR | Battery / Control Unit 48V / FAR |  |  | BATT48 | U06,U11,U26 |
| EMARS_H1 | 04 |  |  | 1 | FAHRWERK | EMARS_H1 | Rollstabilisierung Hinten | Rolling Stabilisation Front |  |  | EMARS_H | F96,G05,G06,G07,G11,G12,G14,G15,G16,G30,G31,G32,RR11,RR12,RR21,RR22,RR31 |
| CDM_RR4 | 05 |  |  | 1 | KAROSSERIE | CDM_RR4 | Coach Door Modul | Coach Door Module |  |  | CDM | RR4,RR5,RR6 |
| CDM02 | 05 |  |  | 1 | KAROSSERIE | CDM02 | Coach Door Modul | Coach Door Module |  |  | CDM | RR11,RR12,RR31 |
| TRSVC01 | 06 |  |  | 1 | FAHRERASSISTENZ | TRSVC01 | Kamera / Top/Rear, Side View | Camera Based Assistent |  |  | TRSVC | F01,F01 HYBR,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,F20,F21,F22,F23,F25,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F87,RR4,RR5,RR6 |
| ICAM_F15 | 06 |  |  | 1 | FAHRERASSISTENZ | ICAM_F15 | Kamera / Top/Rear, Side View | Camera / Top/Rear, Side View |  |  | ICAM, TRSVC | F15,F16,F20,F21,F22,F23,F25,F26,F30,F32,F33,F34,F35,F36,F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,F80,F82,F83,F85,F86,G11,G12,I01,I12,I15,M13 |
| ICAM2 | 06 |  |  | 1 | FAHRERASSISTENZ | ICAM_F15 | Kamera / Surround, Rear View | Camera / Top/Rear, Side View |  |  | ICAM, TRSVC | F40,F40,F56,F90,F90,F91,F91,F92,F92,F93,F93,F95,F95,F96,F96,F97,F97,F98,F98,G01,G01,G02,G02,G05,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,G42,G43,RR11,RR12,RR21,R22,RR31 |
| RVC_30 | 06 |  |  | 1 | FAHRERASSISTENZ | ICAM_F15 | Kamera / Surround, Rear View | Camera / Top/Rear, Side View |  |  | ICAM, TRSVC | * |
| UCAP_10 | 06 |  |  | 1 | FAHRERASSISTENZ | UCAP_10 | Kamera / Ultraschall, Automatisches Parken | Camera / Ultrasonic, Automated Parking |  |  | UCAP | * |
| SME_04 | 07 |  |  | 1 | HOCHVOLT | SME_04 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | SME | F04 |
| SME_10 | 07 |  |  | 1 | HOCHVOLT | SME_10 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | SME | F01,F10,F30 |
| SME_I1 | 07 |  |  | 1 | HOCHVOLT | SME_I1 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | SME | F56,I01,I12,I15 |
| SME_82 | 07 |  |  | 1 | HOCHVOLT | - | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | SME | E82e |
| SME_F18 | 07 |  |  | 1 | HOCHVOLT | SME_F18 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | SME | F18 |
| SME_F15 | 07 |  |  | 1 | HOCHVOLT | SME_F15 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | SME | F15,F30,F45,F49,F60,G01,G05,G11,G12,G20,G21,G28,G30,G38,M13 |
| SME_M12 | 07 |  |  | 1 | HOCHVOLT | SME_M12 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | SME | M12 |
| HVS_01 | 07 |  |  | 1 | HOCHVOLT | HVS_01 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | HVS, SME | G08,I20 |
| HVS_01b | 07 |  |  | 1 | HOCHVOLT | HVS_01 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | HVS, SME | G08 |
| HVS_01c | 07 |  |  | 1 | HOCHVOLT | HVS_01 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | HVS, SME | G08 |
| HVS_01d | 07 |  |  | 1 | HOCHVOLT | HVS_01 | Batterie (Speicher Manag. Elektr) | Battery / High Voltage |  |  | HVS, SME | G08 |
| HC2_01 | 08 |  |  | 1 | FAHRERASSISTENZ | HC2_01 | Spurwechselwarnung | Heading Control |  |  | HC2 | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F15,F16,F18,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F85,F86,RR4,RR5,RR6 |
| HC2_G11 | 08 |  |  | 1 | FAHRERASSISTENZ | HC2_G11 | Spurwechselwarnung / Short-Range-Radar | Heading Control |  |  | HC2 | F90,G01,G02,G08,G11,G12,G20,G21,G22,G23,G26,G28,G30,G31,G32,G38,RR11,RR12,RR21,RR22,RR31 |
| SRR01_HR | 08 |  |  | 1 | FAHRERASSISTENZ | SRR | Radar / Short Range, Hinten Rechts, Spurwechsel | Heading Control |  |  | SRR, HC2 | F40,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G11,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,G42,G43,RR11,RR12 |
| RDME_I1 | 09 |  |  | 1 | MOTOR | RDME_I1 | Motor / Range Extender | Engine / Range Extender |  |  | RDME, REX | I01 |
| REME_I1 | 0A |  |  | 1 | MOTOR | REME_I1 | Motor / Range Extender | Engine / Range Extender, E-Maschine |  |  | REME, REX | I01 |
| REME_I12 | 0A |  |  | 1 | MOTOR | REME_I12 | Motor / Range Extender | Hochvolt / Startergenerator |  |  | HV-SGR | I12 |
| EME_Z | 0A |  |  | 3 | MOTOR | - | Generatorinverter F45 Hybrid | Generator / Inverter F45 Hybrid |  |  | EME | F45 |
| EME_ZPSA | 0A |  |  | 3 | MOTOR | - | Generatorinverter PSA Kooperation | Generator / Inverter PSA Cooperation |  |  | EME | PSA |
| SCR01 | 0B |  |  | 1 | MOTOR | SCR01 | Selective Catalytic Reduction | Selective Catalytic Reduction |  |  | SCR | F02,F06,F07,F10,F11,F12,F13,F15,F16,F25,F26,F30,F45,F46,F48,F54,F57,G11,G12 |
| SCR03 | 0B |  |  | 1 | MOTOR | SCR03 | Selective Catalytic Reduction | Selective Catalytic Reduction |  |  | SCR | F39,F40,F45,F46,F48,F54,F60,G01,G02,G05,G06,G07,G14,G15,G16,G20,G21,G22,G23,G26,G30,G31,G32,G42,G43 |
| SCR04 | 0B |  |  | 1 | MOTOR | SCR04 | Selective Catalytic Reduction | Selective Catalytic Reduction |  |  | SCR | G05,G20 |
| WSG_01 | 0B |  |  | 1 | MOTOR | WSG_01 | Wassersteuergerät | Water Control Unit |  |  | WSG | * |
| HKFM11 | 0D |  |  | 1 | KAROSSERIE | HKFM11 | Heckklappenlift | Tailgate Lift |  |  | HKFM, HKL | F11,F15,F16,F31,F34,F45,F46,F48,F49,F85,F86,M13 |
| HKFM_G11 | 0D |  |  | 1 | KAROSSERIE | HKFM_G11 | Heckklappenlift | Tailgate Lift |  |  | HKFM, HKL | F15,F16,F31,F36,F39,F40,F45,F46,F48,F49,F60,F85,F86,F90,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G15,G16,G20,G21,G22,G23,G26,G30,G31,G32,G38,G42,G43,RR11,RR12,RR21,RR22,RR31 |
| HKFM_I20 | 0D |  |  | 1 | KAROSSERIE | HKFM_I20 | Heckklappenlift | Tailgate Lift |  |  | HKFM, HKL | I20 |
| SVT_01 | 0E |  |  | 1 | FAHRWERK | SVT_01 | Lenkung / Servotronic | Steering / Servotronic |  |  | SVT | F01,F02,F03,F06,F07,F10,F11,F12,F13,F15,F16,RR4,RR5 |
| GHAS10 | 0F |  |  | 1 | FAHRWERK | GHAS10 | Differential / Hinterachssperre | Differential Lock Control |  |  | GHAS | F10,F80,F82,F83,F87 |
| QSG_F15 | 0F |  |  | 1 | FAHRWERK | QSG_F15 | Quermomentenverteilung Hinterachse | Torque Vectoring Rear Axle |  |  | QMVH | F15,F16,F85,F86 |
| GSD_F90 | 0F |  |  | 1 | FAHRWERK | GSD_F90 | Differential / Geregeltes Sperr- | Gateway / Central |  |  | GSD | F90,F91,F92,F93,F95,F96,F97,F98,G02,G05,G06,G07,G14,G15,G16,G20,G21,G22,G23,G26,G28 |
| ZGW_01 | 10 |  |  | 1 | KAROSSERIE | ZGW_01 | Gateway / Zentrales | Gateway / Central |  |  | ZGW | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,F80,F82,F83,F85,F86,F87,F90,F97,F98,G01,G02,G08,G11,G12,G30,G31,G32,G38,I01,I12,I15,M12,M13,RR0123,RR11,RR12,RR21,RR22,RR31,RR4,RR5 |
| ZGW_SP18 | 10 |  |  | 1 | KAROSSERIE | ZGW_SP18 | Gateway / Zentrales | Gateway / Central |  |  | ZGW | F40,F91,F92,F93,F95,F96,G05,G06,G07,G08,G11,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G42,G43,J29 |
| PIU_01 | 10 |  |  | 5 | INDUSTRIEKUNDE | - | Powertrain Integration Unit | Powertrain Integration Unit |  |  | ZGW | - |
| BCP_SP21 | 10 |  |  | 1 | KAROSSERIE | BCP_SP21 | Gateway / Zentrale Plattform | Central Ctrl Module / Central Platform |  |  | BCP/BDC/ZGW | I20 |
| ENS | 11 |  |  | 1 | KOMMUNIKATION | ENS | Ethernet / Switch | Ethernet / Switch |  |  | ENS | F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G14,G15,G16,G20,G21,G22,G23,G26,G28,G30,G31,G32,G38,J29 |
| ENS_SP21 | 11 |  |  | 1 | KOMMUNIKATION | ENS_SP21 | Ethernet / Switch | Ethernet / Switch |  |  | ENS |  |
| FCCU | 12 |  |  | 1 | MOTOR | FCCU | Motor | Engine |  |  | FCCU | * |
| MSD85L6 | 12 |  |  | 1 | MOTOR | MSD85L6 | Motor | Engine |  |  | DME | F01,F02,F03,F07,F10,F11,F12,F13,F18 |
| MSD87 | 12 |  |  | 1 | MOTOR | MSD87 | Motor | Engine |  |  | DME | F01,F02,F10,F11,F01,F02,F03,RR4,RR6,F01,F02,F03,RR4,RR6 |
| D73N57A0 | 12 |  |  | 1 | MOTOR | DDE7UDS | Motor | Engine |  |  | DDE/DME | F01,F02,F07 |
| D73N57E0 | 12 |  |  | 1 | MOTOR | DDE7UDS | Motor | Engine |  |  | DDE, DME | F01,F06,F07,F10,F11,F12,F13,F15,F16,F20,F21,F22,F25,F30,F31,F32,F33,F34,F36,F01,F06,F07,F10,F11,F12,F13,F15,F16,F20,F21,F22,F25,F30,F31,F32,F33,F34,F36,F01,F06,F07,F10,F11,F12,F13,F15,F16,F20,F21,F22,F25,F30,F31,F32,F33,F34,F36,F01,F06,F07,F10,F11,F12,F13,F15,F16,F20,F21,F22,F25,F30,F31,F32,F33,F34,F36,F01,F06,F07,F10,F11,F12,F13,F15,F16,F20,F21,F22,F25,F30,F31,F32,F33,F34,F36 |
| MSD87_R0 | 12 |  |  | 1 | MOTOR | MSD87_12 | Motor / Master | Engine  / Master |  |  | DME | F01,F02,F03,RR4,RR6 |
| MSV90 | 12 |  |  | 1 | MOTOR | MSV90 | Motor | Engine |  |  | DME | RR4,RR6 |
| MEVD172 | 12 |  |  | 1 | MOTOR | MEVD172 | Motor | Engine |  |  | DME | F07,F10,F11,F12,F13,F18,F25 |
| MEVD1724 | 12 |  |  | 1 | MOTOR | MEVD1724 | Motor | Engine |  |  | DME | Test |
| D72N47A0 | 12 |  |  | 1 | MOTOR | DDE7UDS | Motor | Engine |  |  | DDE, DME | * |
| MEVD1725 | 12 |  |  | 1 | MOTOR | MEVD1725 | Motor | Engine |  |  | DME | F20 |
| MEVD172Y | 12 |  |  | 1 | MOTOR | MEVD172 | Motor | Engine |  |  | DME | F10 |
| MSD85YL6 | 12 |  |  | 1 | MOTOR | MSD85L6 | Motor | Engine |  |  | DME | F04 |
| EDMEI1 | 12 |  |  | 1 | MOTOR | EDMEI1 | Motor | Engine |  |  | EDME, DME | I01 |
| S63TU_R0 | 12 |  |  | 1 | MOTOR | S63TU | Motor / Master | Engine  / Master |  |  | DME | F10 |
| N63TU_R0 | 12 |  |  | 1 | MOTOR | N63TU | Motor / Master | Engine  / Master |  |  | DME | F01 |
| DME_BX8 | 12 |  |  | 1 | MOTOR | DME_BX8 | Motor | Engine |  |  | DME | * |
| DME8FF_R | 12 |  |  | 1 | MOTOR | DME8FF | Motor / Master | Engine  / Master |  |  | DME | * |
| DME9X_CT | 12 |  |  | 1 | MOTOR | DUMMMMMY | Motor | Engine |  |  | DME | G05 |
| S55 | 12 |  |  | 1 | MOTOR | S55 | Motor | Engine |  |  | DME | F80 |
| N55_ALP | 12 |  |  | 1 | MOTOR | N55_ALP | Motor | Engine |  |  | DME | F30 |
| DXE9FF_R | 12 |  |  | 1 | MOTOR | DME9 | Motor | Engine |  |  | DME | U06 |
| D75BX7A0 | 12 |  |  | 1 | MOTOR | DDE7UDS | Motor | Engine |  |  | DDE/DME | * |
| D83BX7C0 | 12 |  |  | 1 | MOTOR | DDE8UDS | Motor | Engine |  |  | DDE/DME | * |
| DME8X_CT | 12 |  |  | 1 | MOTOR | DME8X_CT | Motor | Engine |  |  | DME | F00 |
| DME9FF_R | 12 |  |  | 1 | MOTOR | DME9FF_R | Motor | Engine |  |  | DME | I20,U06 |
| DME_BX8S | 13 |  |  | 1 | MOTOR | DME_BX8 | Motor / Slave | Engine / Slave |  |  | DME | G11,G12,G11,G12 |
| MSD87_L0 | 13 |  |  | 1 | MOTOR | MSD87_12 | Motor / Slave | Engine / Slave |  |  | DME | F01 |
| S63TU_L0 | 13 |  |  | 1 | MOTOR | S63TU | Motor / Slave | Engine / Slave |  |  | DME | F10 |
| N63TU_L0 | 13 |  |  | 1 | MOTOR | N63TU | Motor / Slave | Engine / Slave |  |  | DME | F01 |
| DME8FF_L | 13 |  |  | 1 | MOTOR | DME8FF | Motor / Slave | Engine / Slave |  |  | DME | * |
| LIM_I1 | 14 |  |  | 1 | HOCHVOLT | LIM_I1 | Ladeinterfacemodul | Charging / Intererface Modul |  |  | LIM | I01 |
| SLE_F15 | 14 |  |  | 1 | HOCHVOLT | SLE_F15 | Ladegerät inkl. Ladeinterfacemodul | Charging incl. Charging Interface Modul |  |  | SLE/LIM | F15 |
| OBC_G11 | 14 |  |  | 1 | HOCHVOLT | OBC_G11 | Ladegerät inkl. Ladeinterfacemodul 3,5kW | Charging incl. Charging Interface Modul 3.5kW |  |  | OBC/SLE/LIM | G11 |
| TEE1_01 | 14 |  |  | 1 | HOCHVOLT | TEE1_01 | E-Maschine / Elektronik 1 | Motor Elektronic 1 |  |  | TEE | * |
| TEE1_01B | 14 |  |  | 1 | HOCHVOLT | TEE1_01 | E-Maschine / Elektronik 1 | Motor Elektronic 1 |  |  | TEE | * |
| TEE1_01C | 14 |  |  | 1 | HOCHVOLT | TEE1_01 | E-Maschine / Elektronik 1 | Motor Elektronic 1 |  |  | TEE | * |
| TEE1_01D | 14 |  |  | 1 | HOCHVOLT | TEE1_01 | E-Maschine / Elektronik 1 | Motor Elektronic 1 |  |  | TEE | * |
| ASA_01 | 16 |  |  | 1 | FAHRWERK | ASA_01 | Lenkung / Aktiv | Steering / Active |  |  | ASA | F01,F02,F06,F07,F10,F11,F12,F13,F15,F16,F18,F85,F86 |
| EKP301 | 17 |  |  | 1 | MOTOR | EKP301 | Kraftstoff / Elektrische Kraftstoffpumpe | Fuel / Pump |  |  | EKP | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F85,F86,F87,RR0123,RR4,RR5,RR6 |
| RLM_1L | 17 |  |  | 1 | KAROSSERIE | RLM_1L | Licht / Rücklichtmodul Links Außen | Light / Rear Light, Left Outside |  |  | RLM | * |
| RLM2_1L | 17 |  |  | 1 | KAROSSERIE | RLM_1L | Licht / Rücklichtmodul Links Außen | Light / Rear Light, Left Outside |  |  | RLM | * |
| DKG_10 | 18 |  |  | 1 | GETRIEBE | DKG_10 | Getriebe / Doppelkupplung | Gearbox / Double Clutch |  |  | EGS, DKG | F06,F10,F12,F13,F80,F82,F83,F85,F86,F87 |
| GKEB23TU | 18 |  |  | 1 | GETRIEBE | GSB231 | Getriebe / 8HP TÜ | Gearbox / 8HP TUE |  |  | EGS | F01,F02,F06,F07,F10,F11,F12,F13,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,RR4,RR5,RR6 |
| GKEG3HY | 18 |  |  | 1 | GETRIEBE | GKEG3HY | Getriebe / Hybrid | Gearbox / Hybrid |  |  | EGS |  |
| GKEHY23 | 18 |  |  | 1 | GETRIEBE | GKEHY23 | Getriebe / Hybrid | Gearbox / Hybrid |  |  | EGS |  |
| GS100A | 18 |  |  | 1 | GETRIEBE | GS100A | Getriebe | Gearbox |  |  | EGS | F01,F18 |
| GSAW01 | 18 |  |  | 1 | GETRIEBE | GSAW01 | Getriebe | Gearbox |  |  | GWS | F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,I12,I15,M13 |
| GSAW02FH | 18 |  |  | 1 | GETRIEBE | GSLUTUE1 | Getriebe | Gearbox |  |  | EGS | F39,F45,F46,F48,F49,F54,F55,F56,F57,F60 |
| GSAW02FP | 18 |  |  | 1 | GETRIEBE | GSLUTUE1 | Getriebe | Gearbox |  |  | EGS | F40,F44,G42,G43 |
| GSB231 | 18 |  |  | 1 | GETRIEBE | GSB231 | Getriebe | Gearbox |  |  | EGS | F01,F02,F03,F06,F07,F10,F11,F12,F13,F15,F18,F20,F21,F22,F25,F26,F30,F31,F32,F33,F34,F35,F36,RR4,RR5 |
| GSGE01QT | 18 |  |  | 1 | GETRIEBE | GSLUTUE1 | Getriebe | Gearbox |  |  | EGS | F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60 |
| GSGE01QW | 18 |  |  | 1 | GETRIEBE | GSLUTUE1 | Getriebe | Gearbox |  |  | EGS | F40,F44,G42,G43 |
| GSGE02HY | 18 |  |  | 1 | GETRIEBE | unbekannt | Getriebe | Gearbox |  |  | EGS | U06 |
| GSGE02QZ | 18 |  |  | 1 | GETRIEBE | unbekannt | Getriebe | Gearbox |  |  | EGS | U06 |
| GSZFB1 | 18 |  |  | 1 | GETRIEBE | GSZFB1 | Getriebe | Gearbox |  |  | EGS | F90,F95,F96,F97,F98,G01,G02,G06,G08,G11,G12,G30,G31,G32,G38,RR11,RR12,RR21,RR22,RR24,RR31 |
| GSZFBCE | 18 |  |  | 1 | GETRIEBE | GSZFBCE | Getriebe | Gearbox |  |  | EGS | G05,G06,G07,G11,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,J29 |
| GSZFBHY1 | 18 |  |  | 1 | GETRIEBE | GSZFBHY1 | Getriebe | Gearbox |  |  | EGS | * |
| LMV_G11 | 19 |  |  | 1 | GETRIEBE | LMV_G11 | Getriebe / Verteiler 4x4 | Gearbox / Distribution 4 Wheel |  |  | LMV | * |
| EME_04 | 1A |  |  | 1 | HOCHVOLT | EME_04 | Elektrische-Maschine-Elektronik | Motor Electronic |  |  | AE, EME | F04 |
| EME_I01 | 1A |  |  | 1 | HOCHVOLT | EME_I01 | Elektrische-Maschine-Elektronik | Motor Electronic |  |  | AE, EME | I01,M12 |
| RLM_1R | 1A |  |  | 1 | KAROSSERIE | RLM_1R | Licht / Rücklichtmodul Rechts Außen | Light / Rear Light, Right Outside |  |  | RLM | * |
| RLM2_1R | 1A |  |  | 1 | KAROSSERIE | RLM_1R | Licht / Rücklichtmodul Rechts Außen | Light / Rear Light, Right Outside |  |  | RLM | * |
| CPM_G30 | 1B |  |  | 1 | HOCHVOLT | CPM_G30 | Ladegerät / Kabellos Grundmodul | Charging / Wireless Groundmodul |  |  | CPM | G30PHEV,G31PHEV,G38PHEV |
| RLM_2L | 1C |  |  | 1 | KAROSSERIE | RLM_2L | Licht / Rücklichtmodul Links Innen | Light / Rear Light, Left Inside |  |  | RLM | * |
| RLM2_2L | 1C |  |  | 1 | KAROSSERIE | RLM_2L | Licht / Rücklichtmodul Links Innen | Light / Rear Light, Left Inside |  |  | RLM | * |
| ICMQL | 1C |  |  | 1 | FAHRWERK | ICMQL | Integrated Chassis Modul / QL | Integrated Chassis Modul / QL |  |  | ICMQL | F01,F02,F03,F04,F06,F07,F10,F11,F18 |
| ICM_25 | 1C |  |  | 1 | FAHRWERK | ICM_25 | Integrated Chassis Management | Integrated Chassis Management |  |  | ICM | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F85,F86,F87,RR4,RR5,RR6 |
| HSSCU | 1D |  |  | 1 | MOTOR | HSSCU | Wasserstoff / Versorgungsystem | Hydrogen / Supply System Control Unit |  |  | HSSCU | G05 FCEV |
| IFM_01 | 1D |  |  | 1 | MOTOR | IFM_01 | Kraftstoff / Tank, Integrated Fuel Management | Fuel / Tank, Integrated Fuel Management |  |  | IFM | U06 |
| TFM_I1 | 1D |  |  | 1 | MOTOR | TFM_I1 | Kraftstoff / Tank, Funktionsmodul (PHEV) | Fuel / Tank, Fuel Modul (PHEV) |  |  | TFM | * |
| RLM_2R | 1E |  |  | 1 | KAROSSERIE | RLM_2R | Licht / Rücklichtmodul Rechts Innen | Light / Rear Light, Right Inside |  |  | RLM | * |
| RLM2_2R | 1E |  |  | 1 | KAROSSERIE | RLM_2R | Licht / Rücklichtmodul Rechts Innen | Light / Rear Light, Right Inside |  |  | RLM | * |
| SRR01_VR | 20 |  |  | 1 | FAHRERASSISTENZ | SRR | Radar / Short Range, Vorne Rechts, Spurwechsel | Radar / Short Range, Front Right |  |  | SRR | * |
| FRR_10 | 21 |  |  | 1 | FAHRERASSISTENZ | FRR_10 | Radar / Full Range, Sensor | Radar / Full Range, Sensor |  |  | FRR | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F85,F86,F87,RR4,RR5,RR6 |
| FRR_30V | 21 |  |  | 1 | FAHRERASSISTENZ | FRR_30V | Radar / Full Range, Vorne | Radar / Full Range, Front |  |  | FRR | * |
| FRR_G11 | 21 |  |  | 1 | FAHRERASSISTENZ | FRR_G11 | Radar / Full Range, Sensor | Radar / Full Range, Sensor |  |  | FRR | F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G30,G31,G32,G38,RR11,RR12,RR21,RR22,RR31 |
| MRR02 | 21 |  |  | 1 | FAHRERASSISTENZ | MRR02 | Radar / Mid Range | Radar / Mid Range |  |  | MRR | * |
| MRR_30 | 21 |  |  | 1 | FAHRERASSISTENZ | MRR_30 | Radar / Mid Range | Radar / Mid Range |  |  | MRR | * |
| MPAD_PP | 22 |  |  | 1 | FAHRERASSISTENZ | MPAD_PP | Autonomes Fahren / Prozessor : Leistung | Automated Driving / Processor : Performance |  |  | PAD | * |
| SAS_G05 | 22 |  |  | 1 | FAHRERASSISTENZ | SAS | Sonderausstattungs-Steuergerät | Accessories |  |  | SAS |  |
| SAS_G11 | 22 |  |  | 1 | FAHRERASSISTENZ | SAS | Sonderausstattungs-Steuergerät | Accessories |  |  | SAS |  |
| SAS_I1 | 22 |  |  | 1 | FAHRERASSISTENZ | SAS | Sonderausstattungs-Steuergerät | Accessories |  |  | SAS |  |
| CVMS_I15 | 23 |  |  | 1 | KAROSSERIE | CVMS_I15 | Cabrioverdeckmodul / Slave | Convertible Hard Top Module / Slave |  |  | CVMS | I15 |
| SAS_G05 | 23 |  |  | 1 | FAHRERASSISTENZ | SAS | Sonderausstattungs-Steuergerät | Accessories |  |  | SAS | * |
| CTM_F33 | 24 |  |  | 1 | KAROSSERIE | CTM_F33 | Cabrioverdeckmodul | Convertible Hard Top Module |  |  | CVM | F33,F83 |
| CVM_12 | 24 |  |  | 1 | KAROSSERIE | CVM_12 | Cabrioverdeckmodul | Convertible Hard Top Module |  |  | CVM | F12 |
| CVM_F23 | 24 |  |  | 1 | KAROSSERIE | CVM_F23 | Cabrioverdeckmodul | Convertible Hard Top Module |  |  | CVM | F23 |
| CVM_F57 | 24 |  |  | 1 | KAROSSERIE | CVM_F57 | Cabrioverdeckmodul | Convertible Hard Top Module |  |  | CVM | F57 |
| CVM_G14 | 24 |  |  | 1 | KAROSSERIE | CVM_G14 | Cabrioverdeckmodul | Convertible Hard Top Module |  |  | CVM | F91,G14 |
| CVM_G23 | 24 |  |  | 1 | KAROSSERIE | CVM_G23 | Cabrioverdeckmodul | Convertible Hard Top Module |  |  | CVM | G23 |
| CVM_G29 | 24 |  |  | 1 | KAROSSERIE | CVM_G29 | Cabrioverdeckmodul | Convertible Hard Top Module |  |  | CVM | G29 |
| CVM_I15 | 24 |  |  | 1 | KAROSSERIE | CVM_I15 | Cabrioverdeckmodul / Master | Convertible Hard Top Module / Master |  |  | CVM | I15 |
| CVM_RR6 | 24 |  |  | 1 | KAROSSERIE | CVM_RR6 | Cabrioverdeckmodul | Convertible Hard Top Module |  |  | CVM | RR6 |
| EMARS_V1 | 25 |  |  | 1 | FAHRWERK | EMARS_V1 | Rollstabilisierung Vorn | Rolling Stabilisation Front |  |  | EMARS_V | F90,F91,F92,F93,F95,F96,G05,G06,G07,G11,G12,G14,G15,G16,G30,G31,G32,RR11,RR12,RR21,RR22,RR31 |
| RSE_01 | 26 |  |  | 1 | KOMMUNIKATION | RSE_01 | Entertainment Rear | Entertainment Rear |  |  | RSE | * |
| RSEH01 | 26 |  |  | 1 | KOMMUNIKATION | RSE_01 | Entertainment Rear | Entertainment Rear |  |  | RSE | * |
| RSEH10 | 26 |  |  | 1 | KOMMUNIKATION | RSE_01 | Entertainment Rear | Entertainment Rear |  |  | RSE | * |
| RSEEVO | 26 |  |  | 1 | KOMMUNIKATION | RSE_01 | Entertainment Rear | Entertainment Rear |  |  | RSE | * |
| RSE_MGU | 26 |  |  | 1 | KOMMUNIKATION | RSE_01 | Entertainment Rear | Entertainment Rear |  |  | RSE | * |
| SRR01_VL | 28 |  |  | 1 | FAHRERASSISTENZ | SRR | Radar / Short Range, Vorne Links, Spurwechsel | Radar / Short Range Front Left |  |  | SRR | * |
| DSC_01 | 29 |  |  | 1 | FAHRWERK | DSC_01 | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC | F01,F02,F03,F04,F07,F10,F11,F12,F13,F18,RR4 |
| DSC_10 | 29 |  |  | 1 | FAHRWERK | DSC_01 | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC | F01,F02,F06,F07,F10,F11,F12,F13,F15,F16,F18,F85,F86,RR4,RR5,RR6 |
| DSC_25 | 29 |  |  | 1 | FAHRWERK | DXC_25 | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC | F06,F10,F12,F13,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F87,F06,F10,F12,F13,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F87,F06,F10,F12,F13,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F87,F06,F10,F12,F13,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F87 |
| DSC_G01 | 29 |  |  | 1 | FAHRWERK | unbekannt | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC | F00 |
| DSC_G11 | 29 |  |  | 1 | FAHRWERK | DSC_G11 | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC, RPA, CBS | F90,F97,F98,G01,G02,G08,G11,G12,G30,G31,G32,G38,RR11,RR12,RR21,RR22,RR31 |
| DSC_G20 | 29 |  |  | 1 | FAHRWERK | DSC_G20 | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC | F40,F44,G20,G21,G22,G23,G26,G28,G29,G42,G43,J29 |
| DSC_G30N | 29 |  |  | 1 | FAHRWERK | DSC_G11 | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC | G01,G02,G08,G30,G31,G32,G38 |
| DSC_I1 | 29 |  |  | 1 | FAHRWERK | DXC_25 | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC | F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,I01,I12,I15,M13,F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,I01,I12,I15,M13,F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,I01,I12,I15,M13 |
| IB_G05 | 29 |  |  | 1 | FAHRWERK | IB_G05 | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC, IB | F91,F92,F93,G05,G06,G07,G11,G14,G15,G16,G42,G43 |
| IB_G05 | 29 |  |  | 1 | FAHRWERK | IB_G05 | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC, IB | * |
| IB_I20 | 29 |  |  | 1 | FAHRWERK | unbekannt | Dynamische Stabilitätskontrolle | Dynamic Stability Control |  |  | DSC, IB | I20 |
| EMF_01 | 2A |  |  | 1 | FAHRWERK | EMF_I01 | Feststellbremse / Elektromechanisch | Parking Brake / Electromechanical |  |  | EMF | F01,F02,F03,F04,F07,F15,F16,F85,F86,RR4,RR5,RR6 |
| EMF_10 | 2A |  |  | 1 | FAHRWERK | EMF_10 | Feststellbremse / Elektromechanisch | Parking Brake / Electromechanical |  |  | EMF | F06,F10,F11,F12,F13,F18,F25,F26,I12,I15 |
| SRR01_HL | 2A |  |  | 1 | FAHRERASSISTENZ | SRR | Radar / Short Range, Hinten Links, Spurwechsel | Radar / Short Range Rear Left |  |  | SRR | * |
| HSR_01 | 2B |  |  | 1 | FAHRWERK | HSR_01 | Lenkung / Hinterachs Schräglaufregelung | Steering / Rear Axle |  |  | HSR | F01,F02,F06,F07,F10,F11,F12,F13,F18,RR4,RR5,RR6 |
| HSR_G11 | 2B |  |  | 1 | FAHRWERK | HSR_G11 | Lenkung / Hinterachs Schräglaufregelung | Steering / Rear Axle |  |  | HSR | F90,F91,F92,F93,F95,F96,G05,G06,G07,G11,G12,G14,G15,G16,G30,G31,G32,G38,RR11,RR12,RR31 |
| HSR_I20 | 2B |  |  | 1 | FAHRWERK | HSR_I20 | Lenkung / Hinterachs Schräglaufregelung | Steering / Rear Axle |  |  | HSR | I20 |
| PMA_15 | 2C |  |  | 1 | FAHRERASSISTENZ | PMA_15 | Parkmanöver-Assistent | Park Manoeuvre Assistent |  |  | PMA | * |
| USS_50 | 2C |  |  | 1 | FAHRERASSISTENZ | USS_50 | Ultraschall, Sensor | Ultrasonic, Sensor |  |  | USS | * |
| USS_G05 | 2C |  |  |  | FAHRERASSISTENZ | USS_G11 | Park Manöver Assistent | Park Manoeuvre Assistent |  |  | USS | * |
| USS_G11 | 2C |  |  |  | FAHRERASSISTENZ | USS_G11 | Park Manöver Assistent | Park Manoeuvre Assistent |  |  | USS | * |
| VSG_I01 | 2D |  |  | 1 | KAROSSERIE | VSG | Vehicle Sound Generator | Vehicle Sound Generator |  |  | VSG | * |
| PCU_G11 | 2E |  |  | 1 | NIEDERVOLT | PCU_G11 | Power Control Unit 48V | Power Control Unit 48V |  |  | PCU | * |
| EPS_10 | 30 |  |  | 1 | FAHRWERK | EPS_01 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | F01,F02,F06,F07,F10,F11,F12,F13,F18 |
| EPS_20 | 30 |  |  | 1 | FAHRWERK | EPS_25 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | F20,F21,F22,F23,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F87 |
| EPS_25 | 30 |  |  | 1 | FAHRWERK | EPS_25 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | F15,F20,F21,F22,F25,F26,F30,F31,F32,F33,F34,F35,F36 |
| EPS_G01 | 30 |  |  | 1 | FAHRWERK | EPS_25 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | G01,G02,G08,G20,G21,G22,G23,G26,G28,G42,G43 |
| EPS_G05 | 30 |  |  | 1 | FAHRWERK | EPS_25 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | F95,F96,F97,F98,G05,G06,G07,G20,G21,G22,G23,G26,G28,G29,G42,G43,J29 |
| EPS_G11 | 30 |  |  | 1 | FAHRWERK | EPS_25 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | F90,F91,F92,F93,G11,G12,G14,G15,G16,G30,G31,G32,G38,RR11,RR12,RR21,RR22,RR31 |
| EPS_I1 | 30 |  |  | 1 | FAHRWERK | EPS_25 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | F39,F40,F44,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,I01,M13 |
| EPS_I20 | 30 |  |  | 1 | FAHRWERK | EPS_25 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | I20 |
| EPS_TK02 | 30 |  |  | 1 | FAHRWERK | EPS_25 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | F15,F16,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F85,F86,I12,I15 |
| EPS_U06 | 30 |  |  | 1 | FAHRWERK | EPS_25 | Lenkung / Elektrisch | Steering / Electronic Power |  |  | EPS | U06 |
| BAT12HAF | 31 |  |  | 1 | NIEDERVOLT | BAT12HAF | Batterie / Steuergerät 12V, Hochautomatisiertes Fahren 12V | Battery / ECU 12V, Automated Driving High |  |  | BAT | I20 |
| CSM3 | 32 |  |  | 1 | KAROSSERIE | CSM3 | Car Sharing Modul | Car Sharing Module |  |  | CSM | F01,F02,F03,F04,F06,F07,F10,F11,F18 |
| CSM4 | 32 |  |  | 1 | KAROSSERIE | CSM4 | Car Sharing Modul | Car Sharing Module |  |  | CSM | Anzahl Baureihen ist zu hoch, ZEDIS prüfen!! |
| CSM4R | 32 |  |  | 1 | KAROSSERIE | CSM4R | Car Sharing Modul | Car Sharing Module |  |  | CSM | F45,F46,F48,F49,F55,F56,F57 |
| CHRO_F56 | 34 |  |  | 1 | KAROSSERIE | CHRO_F56 | Instrument / Zusatz | Instrument /Accessory |  |  | CHRO | F54,F55,F56,F57,F60 |
| TBX5_01 | 35 |  |  | 1 | KOMMUNIKATION | TBX5_01 | Touch Box | Touch Box |  |  | TBX | * |
| CMEDIA | 36 |  |  | 1 | KOMMUNIKATION_TELEFON | CMEDIA | Combox Media (CAN) | Combox Media (CAN) |  |  | TEL | F01,F02,F03,F04,F06,F07,F11,F12,F13,F20,F21,F22,F25,F30,F31,F32,F33,F34,RR0123,RR4 |
| AMPH07 | 37 |  |  | 1 | KOMMUNIKATION | AMPHUDS | Verstärker | Amplifier |  |  | AMP | F01,F02,F03,F04,F07,F25 |
| AMPH10 | 37 |  |  | 1 | KOMMUNIKATION | AMPHUDS | Verstärker | Amplifier |  |  | AMP | F10,F18 |
| AMPHHB20 | 37 |  |  | 1 | KOMMUNIKATION | AMPHHB20 | Verstärker | Amplifier |  |  | AMP | F20,F21,F22,F23,F39,F45,F46,F48,F49,F54,F55,F56,F57,F60,F83,F87,I01,I12,I15 |
| AMPT07 | 37 |  |  | 1 | KOMMUNIKATION | AMPTUDS | Verstärker | Amplifier |  |  | AMP | E70,E89,F01,F03,F07,F25 |
| AMPT10 | 37 |  |  | 1 | KOMMUNIKATION | AMPTUDS | Verstärker | Amplifier |  |  | AMP | F10,F11,F15,F16,F18,F25,F26,F30,F31,F32,F33,F34,F35,F36,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G30,G31,G32,G38,J29,RR0123,RR4,RR6 |
| AMPTHB10 | 37 |  |  | 1 | KOMMUNIKATION | AMPTUDS | Verstärker | Amplifier |  |  | AMP | F01,F10,F15,F16,F80,F82,F83,F85,F86,F90,F97,F98,G01,G02,G08,G11,G12,G30,G31,G32,G38,J29 |
| AMPTHB32 | 37 |  |  | 1 | KOMMUNIKATION | AMPTHB32 | Verstärker | Amplifier |  |  | AMP | F90,G11,G12,G30,G31,G32,G38,RR11,RR12,RR21,RR22,RR31 |
| AMPTLR13 | 37 |  |  | 1 | KOMMUNIKATION | AMPTLR13 | Verstärker | Amplifier |  |  | AMP | F01,F02,F03,F06,F07,F10,F12,F13,F15,F16,F18,F85,F86 |
| RAM01 | 37 |  |  | 1 | KOMMUNIKATION | RAM01 | Receiver Audio Modul | Receiver Audio Modul |  |  | RAM | * |
| CHC01 | 38 |  |  | 1 | FAHRWERK | CHC01 | Dämpfer / Luft./Comb. Height Ctrl | Damper / Air. / Comb. Height Ctrl |  |  | CHC | F95,F96,G05,G06,G07 |
| EHC2RR4 | 38 |  |  | 1 | FAHRWERK | EHC2RR4 | Luftfeder | Air Suspension |  |  | EHC | RR4,RR5,RR6 |
| EHC_01 | 38 |  |  | 1 | FAHRWERK | EHC_01 | Luftfeder | Air Suspension / 1-Axle |  |  | EHC | F01,F04,F07,F11,F15,F16,F85,F86 |
| ICMV | 39 |  |  | 1 | FAHRWERK | ICMV | Integrated Chassis Modul / V | Integrated Chassis Modul / V |  |  | ICMV | F01,F02,F04,F06,F07,F10,F11,F12,F13,F15,F16,F18,F85,F86,RR4,RR5,RR6 |
| VIP_G05 | 39 |  |  | 1 | FAHRWERK | VIP_G05 | Virtuelle Integrationsplattform | Virtual Integration Platform |  |  | VIP | * |
| EME_I12 | 3A |  |  | 1 | HOCHVOLT | EME_I12 | Elektrische-Maschine-Elektronik | Motor Electronic |  |  | AE, EME | I12,I15 |
| CCU_01 | 3A |  |  | 1 | HOCHVOLT | CCU_01 | Ladegerät / Kabel Fahrzeug | Charging / Compined Charging Unit |  |  | CCU | G08BEV,I20 |
| CCU_01B | 3A |  |  | 1 | HOCHVOLT | CCU_01 | Ladegerät / Kabel Fahrzeug | Charging / Compined Charging Unit |  |  | CCU | G08BEV,I20 |
| CCU_01C | 3A |  |  | 1 | HOCHVOLT | CCU_01 | Ladegerät / Kabel Fahrzeug | Charging / Compined Charging Unit |  |  | CCU | G08BEV,I20 |
| CCU_01D | 3A |  |  | 1 | HOCHVOLT | CCU_01 | Ladegerät / Kabel Fahrzeug | Charging / Compined Charging Unit |  |  | CCU | G08BEV,I20 |
| EME_10 | 3A |  |  | 1 | HOCHVOLT | EME_10 | Elektrische-Maschine-Elektronik | Motor Electronic |  |  | EME |  |
| EME_F18 | 3A |  |  | 1 | HOCHVOLT | EME_F18 | Elektrische-Maschine-Elektronik | Motor Electronic |  |  | AE, EME |  |
| EME_F30 | 3A |  |  | 1 | HOCHVOLT | EME_F30 | Elektrische-Maschine-Elektronik | Motor Electronic |  |  | AE, EME |  |
| EME_F45 | 3A |  |  | 1 | HOCHVOLT | EME_F45 | Elektrische-Maschine-Elektronik | Motor Electronic |  |  | EME | M13 |
| EME_G12 | 3A |  |  | 1 | HOCHVOLT | EME_G12 | Elektrische-Maschine-Elektronik | Motor Electronic |  |  | AE, EME |  |
| CDM02SL | 3C |  |  | 1 | KAROSSERIE | CDM02SL | Coach Door Modul / Links | Coach Door Module / Left |  |  | CDML | RR11,RR12,RR31 |
| CDM02SR | 3D |  |  | 1 | KAROSSERIE | CDM02SR | Coach Door Modul / Rechts | Coach Door Module / Right |  |  | CDMR | RR11,RR12,RR31 |
| HUD_01 | 3D |  |  | 1 | KOMMUNIKATION | HUD_01 | Display / Head Up | Display / Head Up |  |  | HUD | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,F25,F26,RR4,RR5,RR6 |
| ASD_10 | 3F |  |  | 1 | KOMMUNIKATION | ASD | Audio System / Active Sound Design | Audio System / Active Sound Design |  |  | ASD | F01,F02,F06,F10,F11,F12,F13,F15,F16,F21,F22,F23,F30,F31,F32,F33,F34,F35,F36,F39,F40,F44,F54,F55,F56,F57,F60,F80,F82,F83,F85,F86,F87,F90,F97,F98,G01,G02,G08,G11,G12,G29,G30,G31,G32,J29,RR5,RR6 |
| ASD_I12 | 3F |  |  | 1 | KOMMUNIKATION | ASD | Audio System / Active Sound Design | Audio System / Active Sound Design |  |  | ASD | I12,I15 |
| BDC | 40 |  |  | 1 | KAROSSERIE | BDC | Central Ctrl Module / Body Domain Controller | Central Ctrl Module / Body Domain Controller |  |  | BDC | F15,F16,F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,F85,F86,I01,I12,I15,M13 |
| BDC_G05 | 40 |  |  | 1 | KAROSSERIE | BDC_G05 | Central Ctrl Module / Body Domain Controller | Central Ctrl Module / Body Domain Controller |  |  | BDC | F40,F44,F52,F90,F91,F92,F93,F94,F95,F96,G05,G05 FCEV,G06,G07,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,G42,G43,G80,G82,G83,J29 |
| BDC_G11 | 40 |  |  | 1 | KAROSSERIE | BDC_G11 | Central Ctrl Module / Body Domain Controller | Central Ctrl Module / Body Domain Controller |  |  | BDC | F90,F97,F98,G01,G02,G08,G11,G12,G30,G31,G32,G38,RR11,RR12,RR21,RR22,RR31 |
| CAS4_2 | 40 |  |  | 1 | KAROSSERIE | CAS4 | Car Access System | Car Access System |  |  | CAS | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,F25,F26,RR4,RR5,RR6 |
| SRR40ECU | 42 |  |  | 1 | FAHRERASSISTENZ | SRR40ECU | Radar / Short Range | Radar / Short Range |  |  | SRR | * |
| FLE02_L | 43 |  |  | 1 | KAROSSERIE | FLE_02L | Licht / Frontlichtelektronik 2 Links | Light / Front Electronic Left |  |  | FLE | F06,F12,F13,F15,F16,F20,F21,F22,F23,F30,F31,F32,F33,F34,F35,F36,F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F80,F82,F83,F85,F86,F87,I01 |
| FLE_L | 43 |  |  | 1 | KAROSSERIE | FLE_L | Licht / Frontlichtelektronik Links | Front Electronic Left |  |  | FLE_L | F45,F46,F48,F49,F54,F55,F56,F57,F60,I01,I12,I15,M13 |
| FLM01_L | 43 |  |  | 1 | KAROSSERIE | FLM01_L | Licht / Frontlichtmodul Links | Light / Front Light Module Left |  |  | FLM_L | F90,G01,G02,G08,G11,G12,G30,G31,G32,G38,RR11,RR12 |
| FLM02_L | 43 |  |  | 1 | KAROSSERIE | FLM02_L | Licht / Frontlichtmodul 2 Links | Light / Front Light Module Left |  |  | FLM_L | F40,F44,F91,F92,F93,F95,F96,G05,G06,G07,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G42,G43,J29,RR21,RR22,RR31 |
| FLE_R | 44 |  |  | 1 | KAROSSERIE | FLE_R | Licht / Frontlichtelektronik Rechts | Light / Front Electronic Left |  |  | FLE_R | F45,F46,F48,F49,F54,F55,F56,F57,F60,I01,I12,I15,M13 |
| FLM01_R | 44 |  |  | 1 | KAROSSERIE | FLM01_R | Licht / Frontlichtmodul Rechts | Light / Front Light Module Right |  |  | FLM_R | F90,G01,G02,G08,G11,G12,G30,G31,G32,G38,RR11,RR12 |
| FLM02_R | 44 |  |  | 1 | KAROSSERIE | FLM02_R | Licht / Frontlichtmodul 2 Rechts | Light / Front Light Module Right |  |  | FLM_R | F40,F44,F91,F92,F93,F95,F96,G05,G06,G07,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G42,G43,J29,RR21,RR22,RR31 |
| FLE02_R | 44 |  |  | 1 | KAROSSERIE | FLE02_R | Licht / Frontlichtelektronik 2 Rechts | Light / Front Electronic Right |  |  | FLE_R | F06,F12,F13,F15,F16,F20,F21,F22,F23,F30,F31,F32,F33,F34,F35,F36,F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F80,F82,F83,F85,F86,F87,I01 |
| DCS01 | 45 |  |  | 1 | FAHRERASSISTENZ | DCS01 | Kamera / Fahrer Kamera System | Camera / Driver Camera System |  |  | DCS | F91,F92,F93,F95,F96,G05,G06,G07,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28 |
| GZAL01 | 46 |  |  | 1 | KAROSSERIE | GZAL01 | Licht / Gezieltes Anleuchten Links | Light / Directed Flash Left |  |  | GZA_L | F01,F02,F07,F10,F11,F15,F16,F18,F85,F86,RR4,RR5,RR6 |
| GZAR01 | 47 |  |  | 1 | KAROSSERIE | GZAR01 | Licht / Gezieltes Anleuchten Rechts | Light / Directed Flash Right |  |  | GZA_R | F01,F02,F07,F10,F11,F15,F16,F18,F85,F86,RR4,RR5,RR6 |
| FEM_20 | 40 |  |  | 1 | KAROSSERIE | FEM_20 | Front Electronic Module | Front Electronic Module |  |  | FEM | F20,F21,F22,F23,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F87 |
| TVM_01 | 4B |  |  | 1 | KOMMUNIKATION | TVM_01 | TV-Modul | TV-Module |  |  | TV-Modul | * |
| TVM2 | 4B |  |  | 1 | KOMMUNIKATION | TVM_01 | TV-Modul | TV-Module |  |  | TV-Modul | * |
| TVM2_T2 | 4B |  |  | 1 | KOMMUNIKATION | TVM_01 | TV-Modul | TV-Module |  |  | TV-Modul | * |
| EMA_LI | 4D |  |  | 1 | KAROSSERIE | EMA_LI | Gurt / Aufroller Elektromech. Links | Belt Retractor Left |  |  | EMA_LI | F01,F18 |
| EMA_RE | 4E |  |  | 1 | KAROSSERIE | EMA_RE | Gurt / Aufroller Elektromech. Links | Belt Retractor Right |  |  | EMA_R | F01,F18 |
| LEM_G11 | 4F |  |  | 1 | KAROSSERIE | LEM_G11 | Licht / Effect Manager | Light / Effect Manager |  |  | LEM_G11 | * |
| DWA_12 | 50 |  |  | 1 | KAROSSERIE | DWA_12 | Diebstahlwarnanlage | Alarm System |  |  | DWA | F12,F23,F33,F57,F83,I15,RR6 |
| DWA_G14 | 50 |  |  | 1 | KAROSSERIE | DWA_G14 | Diebstahlwarnanlage CANSINE II | Alarm System |  |  | DWA | F91,G14,G23,G29 |
| VSG_H | 51 |  |  | 1 | KAROSSERIE | VSG_H | Vehicle Sound Generator / Hinten | Vehicle Sound Generator / Rear |  |  | VSG | * |
| SPNM_VL | 53 |  |  | 1 | KAROSSERIE_SITZ | SPNM_G11 | Sitz / Pneumatik, Vorne Links | Seat / Pneumatic, Front Left |  |  | SPNM | * |
| SPNM02VL | 53 |  |  | 1 | KAROSSERIE_SITZ | SPNM02VL | Sitz / Pneumatik, Vorne Links | Seat / Pneumatic, Front Left |  |  | SPNM | * |
| PCU48 | 54 |  |  | 1 | NIEDERVOLT | PCU48 | Power Control Unit 48V | Power Control Unit 48V |  |  | PCU | * |
| PCU48_2 | 54 |  |  | 1 | NIEDERVOLT | PCU48 | Power Control Unit 48V | Power Control Unit 48V |  |  | PCU | * |
| LEZF04VB | 55 |  |  | 1 | NIEDERVOLT | LEZF04VB | Startergenerator / Leistungselektronik, 48V | Starter Generator / Power Electronic, 48V |  |  | SGE | * |
| SGE48V | 55 |  |  | 1 | NIEDERVOLT | SGE48V | Startergenerator / Leistungselektronik, 48V | Starter Generator / 48V |  |  | SGE | * |
| NIVI3 | 57 |  |  | 1 | KAROSSERIE | NIVI2 | Nachtsichtsystem | Night Vision |  |  | NIVI | * |
| FZD3 | 56 |  |  | 1 | KAROSSERIE | FZD3 | Dach / Funktionszentrum | Roof  / Function Center |  |  | FZD | F01,F02,F03,F04,F06,F07,F10,F11,F13,F18,F25,F26,RR4,RR5 |
| FZD_20 | 56 |  |  | 1 | KAROSSERIE | FZD_20 | Dach / Funktionszentrum | Roof  / Function Center |  |  | FZD | F20,F21,F22,F30,F31,F32,F34,F35,F36,F80,F82,F87 |
| FZD_F15 | 56 |  |  | 1 | KAROSSERIE | FZD_20 | Dach / Funktionszentrum | Roof  / Function Center |  |  | FZD | F15,F16,F39,F45,F46,F48,F49,F52,F54,F55,F56,F60,F85,F86,I01,I12,I15,J29,M13 |
| FZD_F40 | 56 |  |  | 1 | KAROSSERIE | FZD_F40 | Dach / Funktionszentrum | Roof  / Function Center |  |  | FZD | F40,F44 |
| FZD_G11 | 56 |  |  | 1 | KAROSSERIE | FZD_G11 | Dach / Funktionszentrum | Roof  / Function Center |  |  | FZD | F90,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G15,G16,G20,G21,G22,G23,G26,G28,G30,G31,G32,G38,G42,G43,RR11,RR12,RR21,RR22,RR31 |
| SPNM_VR | 59 |  |  | 1 | KAROSSERIE_SITZ | SPNM_G11 | Sitz / Pneumatik, Vorne Rechts | Seat / Pneumatic, Front Right |  |  | SPNM | * |
| SPNM02VR | 59 |  |  | 1 | KAROSSERIE_SITZ | SPNM02VR | Sitz / Pneumatik, Vorne Rechts | Seat / Pneumatic, Front Right |  |  | SPNM | * |
| SPNM_HL | 5A |  |  | 1 | KAROSSERIE_SITZ | SPNM_G11 | Sitz / Pneumatik, Hinten Links | Seat / Pneumatic, Rear Left |  |  | SPNM | * |
| SPNM_HR | 5B |  |  | 1 | KAROSSERIE_SITZ | SPNM_G11 | Sitz / Pneumatik, Hinten Rechts | Seat / Pneumatic, Rear Right |  |  | SPNM | * |
| KAFAS04 | 5D |  |  | 1 | FAHRERASSISTENZ | KAFASG11 | Kamera / Basiertes FAS | Camera / Based Assistent |  |  | KAFAS | * |
| KAFAS20 | 5D |  |  | 1 | FAHRERASSISTENZ | KAFAS20 | Kamera / Basiertes FAS | Camera / Based Assistent |  |  | KAFAS | * |
| KAFASG11 | 5D |  |  | 1 | FAHRERASSISTENZ | KAFASG11 | Kamera / Basiertes FAS | Camera / Based Assistent |  |  | KAFAS | * |
| ADCAM_L | 5D |  |  | 1 | FAHRERASSISTENZ | ADCAM_L | Autonomes Fahren / Kamera (LOW) | Autonomous Driving / Camera (LOW) |  |  | ADC | I20 |
| ADCAM_M | 5D |  |  | 1 | FAHRERASSISTENZ | ADCAM_M | Autonomes Fahren / Kamera (MID) | Autonomous Driving / Camera (MID) |  |  | ADC | I20 |
| TLC_60 | 5D |  |  | 1 | FAHRERASSISTENZ | TLC_60 | Time To Line Crossing | Time To Line Crossing |  |  | TLC | * |
| GWS2 | 5E |  |  | 1 | KAROSSERIE | GWS2 | Gangwahlschalter | Gear Lever |  |  | GWS | F04,F06,F10,F11,F12,F13,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F85,F86,F87,I12,I15,M12 |
| GWS_01 | 5E |  |  | 1 | KAROSSERIE | GWS_01 | Gangwahlschalter | Gear Lever |  |  | GWS | F01,F18,F25 |
| GWS_F15 | 5E |  |  | 1 | KAROSSERIE | GWS_F15 | Gangwahlschalter | Gear Lever |  |  | GWS | F15,F16 |
| GWS_G05 | 5E |  |  | 1 | KAROSSERIE | GWS_G11 | Gangwahlschalter | Gear Lever |  |  | GWS | F40,F44,F91,F92,F93,F95,F96,G05,G06,G07,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G42,G43 |
| GWS_G05K | 5E |  |  | 1 | KAROSSERIE | GWS_G11 | Gangwahlschalter | Gear Lever |  |  | GWS | F39,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60 |
| GWS_G11 | 5E |  |  | 1 | KAROSSERIE | GWS_G11 | Gangwahlschalter | Gear Lever |  |  | GWS | G11,G12,G11,G12 |
| GWS_G11B | 5E |  |  | 1 | KAROSSERIE | GWS_G11 | Gangwahlschalter | Gear Lever |  |  | GWS | F90,G01,G02,G08,G11,G12,G30,G31,G32,G38,J29 |
| GWS_I01 | 5E |  |  | 1 | KAROSSERIE | GWS_I01 | Gangwahlschalter | Gear Lever |  |  | GWS | I01 |
| GW_RR4 | 5E |  |  | 1 | KAROSSERIE | GW_RR4 | Gangwahlschalter | Gear Lever |  |  | GWS | RR11,RR12,RR21,RR22,RR31,RR4,RR5,RR6 |
| FLA_01 | 5F |  |  | 1 | KAROSSERIE | FLA_01 | Licht / Fernlicht Assistent | Light / Full Beam Assistent |  |  | FLA | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,F25 |
| FLA_20 | 5F |  |  | 1 | KAROSSERIE | FLA_20 | Licht / Fernlicht Assistent | Light / Full Beam Assistent |  |  | FLA | F01,F06,F07,F10,F11,F12,F13,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83,F85,F86,F87,F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,G42,G43,J29,RR5,RR6 |
| KOMB01 | 60 |  |  | 1 | KAROSSERIE | KOMB01 | Instrumentenkombi | Instrument Cluster |  |  | KOMBI | * |
| KOMB25 | 60 |  |  | 1 | KAROSSERIE | KOMB25 | Instrumentenkombi | Instrument Cluster |  |  | KOMBI | * |
| KOMB_G11 | 60 |  |  | 1 | KAROSSERIE | KOMB_G11 | Instrumentenkombi | Instrument Cluster |  |  | KOMBI | * |
| KOMBRDCT | 60 |  |  | 1 | KAROSSERIE | KOMB_G11 | Instrumentenkombi | Instrument Cluster |  |  | KOMBI | * |
| KOMBSP18 | 60 |  |  | 1 | KAROSSERIE | KOMB_G11 | Instrumentenkombi | Instrument Cluster |  |  | KOMBI | F40,F44,F54,F55,F56,F57,F60,F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,F40,F44,F54,F55,F56,F57,F60,F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38 |
| KOMBSP21 | 60 |  |  | 1 | KAROSSERIE | KOMBSP21 | Instrumentenkombi | Instrument Cluster |  |  | KOMBI | * |
| ATM | 61 |  |  | 1 | KOMMUNIKATION_TELEFON | CECALL | Telematik | Telematics |  |  | ATM, CEC | F06,F12,F13,F15,F16,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F39,F40,F44,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,F80,F82,F83,F85,F86,F87,F90,F91,F92,F93,F97,F98,G01,G02,G05,G07,G08,G11,G12,G14,G15,G16,G20,G28,G29,G30,G31,G32,G38,G42,G43,I01,I12,I15,J29,RR11,RR12,RR31,RR4,RR5 |
| ATM02 | 61 |  |  | 1 | KOMMUNIKATION_TELEFON | ATM02 | Telematik | Telematics |  |  | ATM, CEC | F40,F44,F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,G42,G43,RR11,RR12,RR21,RR22,RR24,RR25,RR31 |
| CECALL | 61 |  |  | 1 | KOMMUNIKATION_TELEFON | CECALL | Telematik (MOST) | Telematics (Most) |  |  | CEC | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F20,F21,F22,F25,F30,F31,F32,F33,F34,RR0123,RR4 |
| TCB1 | 61 |  |  | 1 | KOMMUNIKATION_TELEFON | CECALL | Telematik | Telematics |  |  | TCB | * |
| BIS01 | 63 |  |  | 1 | KOMMUNIKATION | BIS01 | Radio | Radio |  |  | BIS | F54,F55,F56,F57,F60 |
| CHAMP2 | 63 |  |  | 1 | KOMMUNIKATION | CIC | Headunit / CHAMP | Headunit / CHAMP |  |  | HU | F01,F04,F06,F10,F11,F12,F13,F18,F20,F21,F25,F30,F35 |
| CIC | 63 |  |  | 1 | KOMMUNIKATION | CIC | Headunit / CIC | Headunit / CIC |  |  | HU | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,F20,F21,F25,F30,RR0123 |
| CICM | 63 |  |  | 1 | KOMMUNIKATION | CIC | Headunit / CIC Media | Headunit / CIC Media |  |  | HU | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,F25 |
| ENAVEVO | 63 |  |  | 1 | KOMMUNIKATION | CIC | Headunit / Entry Nav Evo | Headunit / Entry Nav Evo |  |  | HU | F20,F21,F22,F23,F30,F31,F32,F33,F34,F35,F36,F39,F40,F44,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,F80,F82,F83,F87,F95,F96,G01,G02,G08,G20,G21,G28,G29,G30,G31,G32,G38,G42,G43,I01,J29 |
| ENTRY | 63 |  |  | 1 | KOMMUNIKATION | CIC | Headunit / Entry | Headunit / Entry |  |  | HU | F20,F21,F22,F23,F30,F31,F32,F33,F34,F35,F36,F80,F82,F83 |
| ENTRYNAV | 63 |  |  | 1 | KOMMUNIKATION | CIC | Headunit / Entry NAV | Headunit / Entry NAV |  |  | HU | F01,F02,F03,F06,F07,F10,F11,F12,F13,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F45,F46,F48,F49,F52,F54,F55,F56,F57,F60,F80,F82,F83,F85,F86,F87,I01,M13 |
| HU_MGU | 63 |  |  | 1 | KOMMUNIKATION | HU_MGU | Headunit / MGU | Headunit / MGU |  |  | HU | F40,F44,F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,G42,G43,G80,G82,G83,I20,U06 |
| NBT | 63 |  |  | 1 | KOMMUNIKATION | CIC | Headunit / NBT | Headunit / NBT |  |  | HU | * |
| NBTEVO | 63 |  |  | 1 | KOMMUNIKATION | CIC | Headunit / NBT EVO | Headunit / NBT EVO |  |  | HU | * |
| ELV_G30 | 65 |  |  | 1 | KAROSSERIE | ELV_G30 | Lenksäulenverriegelung / Elektr. | Steering Column Lock / Electric |  |  | ELV | F40,F44,F97,F98,G01,G02,G08,G20,G21,G22,G23,G26,G29,G30,G31,G32,G38,G42,G43 |
| ZBE_01 | 67 |  |  | 1 | KAROSSERIE | ZBE_01 | Zentrale Bedieneinheit | Central Control Operating Unit |  |  | ZBE | * |
| ZBE5_01 | 67 |  |  | 1 | KAROSSERIE | ZBE5_01 | Zentrale Bedieneinheit | Central Control Operating Unit |  |  | ZBE | * |
| ZBE6 | 67 |  |  | 1 | KAROSSERIE | ZBE6 | Zentrale Bedieneinheit | Central Control Operating Unit |  |  | ZBE | * |
| ZBE7 | 67 |  |  | 1 | KAROSSERIE | ZBE7 | Zentrale Bedieneinheit | Central Control Operating Unit |  |  | ZBE | * |
| ZBEL20 | 67 |  |  | 1 | KAROSSERIE | ZBE_01 | Zentrale Bedieneinheit | Central Control Operating Unit |  |  | ZBE | * |
| FAH_01 | 69 |  |  | 1 | KAROSSERIE | SM_01 | Sitzmodule | Seat Modules |  |  | SM | F01,F02,F03,F04,F07,RR4 |
| FAH_12 | 69 |  |  | 1 | KAROSSERIE_SITZE | SM_12 | Sitzmodule | Seat Modules |  |  | SM | F01,F02,F03,F04,F07,RR4 |
| FAH_G11 | 69 |  |  | 1 | KAROSSERIE_SITZE | SM_G11 | Sitzmodule | Seat Modules |  |  | SM | F95,F96,G05,G06,G07,G11,G12,G38,RR11,RR12,RR21,RR22,RR31 |
| HKL_01 | 6B |  |  | 1 | KAROSSERIE | HKL_01 | Heckklappenlift | Tailgate Lift |  |  | HKL | F01,F02,F03,F04,F07,F10,F12,F13,F18,F25,F26,RR4,RR5,RR6,F01,F02,F03,F04,F07,F10,F12,F13,F18,F25,F26,RR4,RR5,RR6 |
| FAS_01 | 6D |  |  | 1 | KAROSSERIE_SITZE | FAS_01 | Sitzmodul / Fahrer | Seat Module / Driver |  |  | FAS | F01,F02,F03,F04,F07,F10,F11,F18,F25,RR4 |
| FAS_12 | 6D |  |  | 1 | KAROSSERIE_SITZE | SM_12 | Sitzmodul / Fahrer | Seat Module / Driver |  |  | FAS | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F39,F45,F46,F48,F49,F52,F54,F60,F80,F82,F83,F85,F86,F87,I15,M13,RR4,RR5,RR6 |
| FAS_G11 | 6D |  |  | 1 | KAROSSERIE_SITZE | SM_G11 | Sitzmodul / Fahrer | Seat Module / Driver |  |  | FAS | F40,F44,F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,G42,G43,J29,RR11,RR12,RR21,RR22,RR31 |
| BFH_01 | 6A |  |  | 1 | KAROSSERIE | SM_01 | Sitzmodul / Beifahrer Hinten | Seat Module / Passenger Rear |  |  | SMBH | F01,F02,F03,F04,F07,RR4 |
| BFH_12 | 6A |  |  | 1 | KAROSSERIE | SM_12 | Sitzmodul / Beifahrer Hinten | Seat Module / Passenger Rear |  |  | SMBH | F01,F02,F03,F04,F07,RR4 |
| BFH_G11 | 6A |  |  | 1 | KAROSSERIE_SITZE | SM_G11 | Sitzmodul / Beifahrer Hinten | Seat Module / Passenger Rear |  |  | SMBH | F95,F96,G05,G06,G07,G11,G12,G38,RR11,RR12,RR21,RR22,RR31 |
| BFS_01 | 6E |  |  | 1 | KAROSSERIE_SITZE | SM_01 | Sitzmodul / Beifahrer | Seat Module / Passenger |  |  | BFS | F01,F02,F03,F04,F07,F10,F11,F25,RR4 |
| BFS_12 | 6E |  |  | 1 | KAROSSERIE_SITZE | SM_12 | Sitzmodul / Beifahrer | Seat Module / Passenger |  |  | SMFS | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F15,F16,F18,F21,F22,F23,F25,F26,F32,F33,F34,F35,F36,F39,F45,F46,F48,F49,F52,F80,F82,F83,F85,F86,F87,I15,M13,RR4,RR5,RR6 |
| BFS_G11 | 6E |  |  | 1 | KAROSSERIE_SITZE | SM_G11 | Sitzmodul / Beifahrer | Seat Module / Passenger |  |  | SMBF | F90,F91,F92,F93,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G14,G15,G16,G20,G21,G22,G23,G26,G28,G29,G30,G31,G32,G38,G42,G43,RR11,RR12,RR21,RR22,RR31 |
| LEZFVH | 55 |  |  | 1 | NIEDERVOLT | LEZFVH | Startergenerator / Leistungselektronik, 48V | Starter Generator / Power Electronic, 48V |  |  | LE | * |
| AAG_02 | 71 |  |  | 1 | KAROSSERIE | AAG_02 | Anhängermodul | Trailer Module |  |  | AHM | G70,I20,U01,U02,U06,U10,U11,U20,U25,U26 |
| AAG_F15 | 71 |  |  | 1 | KAROSSERIE | AAG_F15 | Anhängermodul | Trailer Module |  |  | AHM | F07,F10,F11,F15,F16,F18,F20,F21,F22,F23,F25,F26,F30,F31,F32,F33,F34,F35,F36,F39,F40,F44,F45,F46,F48,F54,F55,F56,F57,F60,F80,F82,F83,F85,F86,F87,F90,F95,F96,F97,F98,G01,G02,G05,G06,G07,G08,G11,G12,G20,G21,G22,G23,G26,G28,G30,G31,G32,G38,G42,G43,RR31 |
| AHM_01 | 71 |  |  | 1 | KAROSSERIE | AHM_01 | Anhängermodul | Trailer Module |  |  | AHM | F01,F02,F03,F04,F07,F10,F11,F18,F20,F21,F22,F25,F30,F31,F32,F33,F34,F35 |
| FRM3 | 72 |  |  | 1 | KAROSSERIE | FRM3 | Zentralsteuergerät / Fußraummodul | Central Ctrl Module / Footwell Module Driver |  |  | FRM | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,F25,F26,RR4,RR5,RR6 |
| TSG_FA | 72 |  |  | 1 | KAROSSERIE | TSG_FA | Tür / Fahrer | Door / Driver |  |  | TSG | * |
| CID_01 | 73 |  |  | 1 | KOMMUNIKATION | CID_01 | Display / Zentrales Info Display | Display / Central Informamtion |  |  | CID | F01,F02,F03,F06,F10,F12,F13,F18,RR4,RR5,RR6 |
| CID_01R1 | 74 |  |  | 1 | KOMMUNIKATION | CIDF | Display / Hinten links | Display / Rear Left |  |  | CID | F01,F18,RR4 |
| TSG_BF | 74 |  |  | 1 | KAROSSERIE | TSG_BF | Tür / Beifahrer | Door / Passenger |  |  | TSG | * |
| TSG_FAH | 75 |  |  | 1 | KAROSSERIE | TSG_FAH | Tür / Fahrer Hinten | Door / Driver Rear |  |  | TSG | * |
| CID_01R2 | 75 |  |  | 1 | KOMMUNIKATION | CIDF2 | Display / Hinten rechts | Display / Rear Right |  |  | CID_R | F01,F18,RR4 |
| CID_01T | 73 |  |  | 1 | KOMMUNIKATION | CID_01 | Display / Zentrales Info Display | Display / Central Informamtion |  |  | CID | F01,F02,F07,F10,F11,F12,F13,F18 |
| CID_25 | 73 |  |  | 1 | KOMMUNIKATION | CID_01 | Display / Zentrales Info Display | Display / Central Informamtion |  |  | CID | F25,F26,RR0123 |
| CVC_I20 | 76 |  |  | 1 | FAHRERASSISTENZ | CVC_I20 | Combined Vertical Control | Combined Vertical Control |  |  | CVC | * |
| VDP_G11 | 76 |  |  | 1 | FAHRWERK | VDP_G11 | Dämpfer / Vertikal Dyn. Plattform | Damper / Vertical Dyn. Plattform |  |  | VDP | * |
| TSG_BFH | 77 |  |  | 1 | KAROSSERIE | TSG_BFH | Tür / Beifahrer Hinten | Door / Passenger Rear |  |  | TSG | * |
| IHKA_G05 | 78 |  |  | 1 | KAROSSERIE | IHKA_G11 | Klimaautomatik | Air Conditioning / Control Panel |  |  | IHKA | * |
| IHKA_G11 | 78 |  |  | 1 | KAROSSERIE | IHKA_G11 | Klimaautomatik | Air Conditioning / Control Panel |  |  | IHKA | * |
| IHKA01 | 78 |  |  | 1 | KAROSSERIE | IHKA01 | Klimaautomatik | Air Conditioning / Control Panel |  |  | IHKA | F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18,F01,F02,F03,F04,F06,F07,F10,F11,F12,F13,F18 |
| IHKA1RR | 78 |  |  | 1 | KAROSSERIE | IHKA1RR | Klimaautomatik | Air Conditioning / Control Panel |  |  | IHKA | RR11,RR12,RR21,RR22,RR31 |
| IHKA20 | 78 |  |  | 1 | KAROSSERIE | IHKA20 | Klimaautomatik | Air Conditioning / Control Panel |  |  | IHKA | F20,F21,F22,F30,F31,F32,F34,F35 |
| IHKA25 | 78 |  |  | 1 | KAROSSERIE | IHKA25 | Klimaautomatik | Air Conditioning / Control Panel |  |  | IHKA | F25,F25 |
| FKA_01 | 79 |  |  | 1 | KAROSSERIE | FKA_01 | Klimaautomatik / Fond (Hinten) | Air Conditioning / Rear |  |  | FKA | F01,F02,F03,F04,F07,F10,F11,F18,RR4,RR5,F01,F02,F03,F04,F07,F10,F11,F18,RR4,RR5 |
| FKA_F15 | 79 |  |  | 1 | KAROSSERIE | FKA_01 | Klimaautomatik / Fond (Hinten) | Air Conditioning / Rear |  |  | FKA | F15,F16,F85,F86 |
| HKA_02 | 7B |  |  | 1 | KAROSSERIE | HKA_02 | Klimaautomatik / Heckklima | Air Conditioning / Rear Boot |  |  | IHKA | F02,RR4 |
| HKA_G07 | 7B |  |  | 1 | KAROSSERIE | HKA_G12 | Klimaautomatik / Heck | Air Conditioning / Rear Boot |  |  | HKA | G07 |
| HKA_G12 | 7B |  |  | 1 | KAROSSERIE | HKA_G12 | Klimaautomatik / Heck | Air Conditioning / Rear Boot |  |  | HKA | G12 |
| FRR_30HL | 80 |  |  | 1 | FAHRERASSISTENZ | FRR_30HL | Radar / Full Range, Hinten Links | Radar / Full Range, Rear Left |  |  | FRR | * |
| FRR_30HR | 81 |  |  | 1 | FAHRERASSISTENZ | FRR_30HR | Radar / Full Range, Hinten Rechts | Radar / Full Range, Rear Right |  |  | FRR | * |
| MPAD_FSC | 84 |  |  | 1 | FAHRERASSISTENZ | MPAD_FSC | Autonomes Fahren / Controller: Sicherheit 1 | Automated Driving / Controller: Safety |  |  | PAD | * |
| HPAD_SC | 90 |  |  | 1 | FAHRERASSISTENZ | HPAD_SC | Autonomes Fahren / Controller: Sicherheit | Automated Driving / Controller: Safety |  |  | PAD | I20 |
| HPAD_FPP | 91 |  |  | 1 | FAHRERASSISTENZ | HPAD_FPP | Autonomes Fahren / Prozessor : Leistung 1 | Automated Driving / Processor : Performance 1 |  |  | PAD | I20 |
| HPAD_SPP | 92 |  |  | 1 | FAHRERASSISTENZ | HPAD_SPP | Autonomes Fahren / Prozessor : Leistung 2 | Automated Driving / Processor : Performance 2 |  |  | PAD | I20 |
| HPAD_I1A | 93 |  |  | 1 | FAHRERASSISTENZ | HPAD_I1A | Autonomes Fahren / Prozessor : Image 1a | Automated Driving / Processor : Performance 1a |  |  | PAD | I20 |
| HPAD_I2A | 94 |  |  | 1 | FAHRERASSISTENZ | HPAD_I2A | Autonomes Fahren / Prozessor : Image 2a | Automated Driving / Processor : Performance 2a |  |  | PAD | I20 |
| LIDAR1VM | 99 |  |  | 1 | FAHRERASSISTENZ | LIDAR1VM | Autonomes Fahren / Licht - Erkennung und Bereichsanpassung (Vorne Mitte) | Automated Driving / Light detection and ranging (Front Center) |  |  | LID | * |
| LIDAR1VL | A0 |  |  | 1 | FAHRERASSISTENZ | LIDAR1VL | Autonomes Fahren / Licht - Erkennung und Bereichsanpassung (Vorne Links) | Automated Driving / Light Detection And Ranging (Front Left) |  |  | LID | * |
| LIDAR1VR | A1 |  |  | 1 | FAHRERASSISTENZ | LIDAR1VR | Autonomes Fahren / Licht - Erkennung und Bereichsanpassung (Vorne Rechts) | Automated Driving / Light Detection And Ranging (Rear Left) |  |  | LID | * |
| LIDAR1HL | A2 |  |  | 1 | FAHRERASSISTENZ | LIDAR1HL | Autonomes Fahren / Licht - Erkennung und Bereichsanpassung (Hinten Links) | Automated Driving / Light Detection And Ranging (Rear Right) |  |  | LID | * |
| LIDAR1HR | A3 |  |  | 1 | FAHRERASSISTENZ | LIDAR1HR | Autonomes Fahren / Licht - Erkennung und Bereichsanpassung (Hinten Rechts) | Automated Driving / Light Detection And Ranging (Rear Right) |  |  | LID | * |
|  ListEnde  |  |  |  |  |  |  |  |  |  |  |  |  |
