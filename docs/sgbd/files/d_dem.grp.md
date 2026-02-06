# d_dem.grp

## General

|  |  |
| --- | --- |
| File | d_dem.grp |
| Type | GRP |
| Jobs | 2 |
| Tables | 4 |
| Origin | BMW TI-430 Drexel |
| Revision | 1.31 |
| Author | BMW TI-430 Drexel |
| ECU Comment | DEM_81 |

## Info

_No INFO results._

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### IDENTIFIKATION

!!! nur in Gruppendatei verwenden !!! Zuordnung von ADR_VAR_DIAG Steuergeräteadresse ADR  (Hex) Variantenindex      VAR  (Hex) = systemNameOrEngineType ( SNOET ) Diagnoseindex       DIAG (Hex) = vehicleManufacturerDiagnosticIndex ( VMDI  ) zu Steuergerätebeschreibungsdatei SGBD Gruppendatei                   GRUPPE Steuergeräteklartext           STEUERGERAET KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0D | KWP2000* |
| 0x0C | KWP2000 |
| 0x06 | DS2 |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED__INVALID_FORMAT |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0x23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED__SECURITY_ACCESS_REQUESTED |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0x40 | ERROR_ECU_DOWNLOAD_NOT_ACCEPTED |
| 0x41 | ERROR_ECU_IMPROPER_DOWNLOAD_TYPE |
| 0x42 | ERROR_ECU_CANNOT_DOWNLOAD_TO_SPECIFIED_ADDRESS |
| 0x43 | ERROR_ECU_CANNOT_DOWNLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0x50 | ERROR_ECU_UPLOAD_NOT_ACCEPTED |
| 0x51 | ERROR_ECU_IMPROPER_UPLOAD_TYPE |
| 0x52 | ERROR_ECU_CANNOT_UPLOAD_FROM_SPECIFIED_ADDRESS |
| 0x53 | ERROR_ECU_CANNOT_UPLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0x71 | ERROR_ECU_TRANSFER_SUSPENDED |
| 0x72 | ERROR_ECU_TRANSFER_ABORTED |
| 0x74 | ERROR_ECU_ILLEGAL_ADDRESS_IN_BLOCK_TRANSFER |
| 0x75 | ERROR_ECU_ILLEGAL_BYTE_COUNT_IN_BLOCK_TRANSFER |
| 0x76 | ERROR_ECU_ILLEGAL_BLOCK_TRANSFER_TYPE |
| 0x77 | ERROR_ECU_BLOCKTRANSFER_DATA_CHECKSUM_ERROR |
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0x80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIAGNOSTIC_MODE |
| ?00? | OKAY |
| ?02? | ERROR_ECU_INCORRECT_RESPONSE_ID |
| ?03? | ERROR_ECU_INCORRECT_LEN |
| ?10? | ERROR_F_CODE |
| ?11? | ERROR_TABLE |
| ?12? | ERROR_INTERPRETATION |
| ?13? | ERROR_F_POS |
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
| ?41? | ERROR_BAUDRATE |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_DATA_OUT_OF_RANGE |
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
| ?73? | ERROR_NO_BIN_BUFFER |
| ?74? | ERROR_BIN_BUFFER |
| ?75? | ERROR_DATA_TYPE |
| ?76? | ERROR_CHECKSUM |
| ?80? | ERROR_FLASH_SIGNATURE_CHECK |
| ?81? | ERROR_VIHICLE_IDENTFICATON_NR |
| ?82? | ERROR_PROGRAMMING_DATE |
| ?83? | ERROR_ASSEMBLY_NR |
| ?84? | ERROR_CALIBRATION_DATASET_NR |
| ?85? | ERROR_EXHAUST_REGULATION_OR_TYPE_APPROVAL_NR |
| ?86? | ERROR_REPAIR_SHOP_NR |
| ?87? | ERROR_TESTER_SERIAL_NR |
| ?88? | ERROR_MILAGE |
| ?89? | ERROR_PROGRAMMING_REFERENCE |
| ?8A? | ERROR_NO_FREE_UIF |
| ?8B? | ERROR_MAX_UIF |
| ?8C? | ERROR_SIZE_UIF |
| ?8D? | ERROR_LEVEL |
| ?8E? | ERROR_KEY |
| ?8F? | ERROR_AUTHENTICATION |
| ?90? | ERROR_NO_DREF |
| ?91? | ERROR_CHECK_PECUHN |
| ?92? | ERROR_CHECK_PRGREF |
| ?93? | ERROR_AIF_NR |
| ?94? | ERROR_CHECK_DREF |
| ?95? | ERROR_CHECK_HWREF |
| ?96? | ERROR_CHECK_HWREF |
| ?97? | ERROR_CHECK_PRGREFB |
| ?98? | ERROR_CHECK_VMECUH*NB |
| ?99? | ERROR_CHECK_PRGREFB |
| ?9A? | ERROR_CHECK_VMECUH*N |
| ?A0? | ERROR_DIAG_PROT |
| ?A1? | ERROR_SG_ADRESSE |
| ?A2? | ERROR_SG_MAXANZAHL_AIF |
| ?A3? | ERROR_SG_GROESSE_AIF |
| ?A4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?A5? | ERROR_SG_AUTHENTISIERUNG |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### ZUORDNUNGSTABELLE

| ADR_VAR_DIAG | SGBD | GRUPPE | STEUERGERAET |
| --- | --- | --- | --- |
| 00 ---- 0100 | ZGM_E65 | D_ZGM | Zentrales Gatewaymodul |
| 01 ---- 0110 | SIM | D_SIM | Sicherheits- Informationsmodul |
| 02 ---- 0120 | SZL | D_SZL | Satellit Lenksäule |
| 03 ---- 0130 | SASL | D_SASL | Satellit A-Säule links |
| 04 ---- 0140 | SASR | D_SASR | Satellit A-Säule rechts |
| 05 ---- 0150 | STVL | D_STVL | Satellit Tür vorne links |
| 06 ---- 0160 | STVR | D_STVR | Satellit Tür vorne rechts |
| 07 ---- 0170 | SSFA | D_SSFA | Satellit Sitz Fahrer |
| 08 ---- 0180 | SSBF | D_SSBF | Satellit Sitz Beifahrer |
| 09 ---- 0190 | SBSL | D_SBSL | Satellit B-Säule links |
| 0A ---- 01A0 | SBSR | D_SBSR | Satellit B-Säule rechts |
| 0D ---- 01D0 | SSH | D_SSH | Satellit Sitz hinten |
| 0E ---- 01E0 | SFZ | D_SFZ | Satellit Fahrzeugzentrum |
| 12 .0Q. 0001 | ME965_4 | D_MOTOR | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000A | ME9E65_5 | D_MOTOR | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000C | ME9E65_6 | D_MOTOR | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000D | ME9E65_6 | D_MOTOR | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000E | ME9E65_6 | D_MOTOR | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 0103 | ME9E65_6 | D_MOTOR | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0R. 0001 | ME965_4 | D_MOTOR | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .0R. 000A | ME9E6514 | D_MOTOR | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .0R. 000E | N73_R0 | D_MOTOR | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .0R. 000F | N73_R0 | D_MOTOR | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .CE. 0000 | MS450DS0 | D_MOTOR | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 0001 | MS450DS0 | D_MOTOR | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 000A | MS450DS0 | D_MOTOR | Motorelektronik MS 45 6 Zylinder M54 |
| 12 0059 0010 | D50M57A0 | D_MOTOR | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .59. 0010 | D50M57A0 | D_MOTOR | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 005A 0010 | D51MM670 | D_MOTOR | Dieselelektronik DDE 5 8 Zylinder M67 Master |
| 12 .5A. 0010 | D51MM670 | D_MOTOR | Dieselelektronik DDE 5 8 Zylinder M67 Master |
| 12 .5A. 0011 | D51MM670 | D_MOTOR | Dieselelektronik DDE 5 8 Zylinder M67 Master |
| 13 005A 0010 | D51SM670 | D_MOTOR2 | Dieselelektronik DDE 5 8 Zylinder M67 Slave |
| 13 .5A. 0010 | D51SM670 | D_MOTOR2 | Dieselelektronik DDE 5 8 Zylinder M67 Slave |
| 13 .5A. 0011 | D51SM670 | D_MOTOR2 | Dieselelektronik DDE 5 8 Zylinder M67 Slave |
| 13 .0R. 0001 | ME965_4L | D_MOTOR2 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 .0R. 000A | ME96514L | D_MOTOR2 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 .0R. 000E | N73_L0 | D_MOTOR2 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 .0R. 000F | N73_L0 | D_MOTOR2 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 18 ---- 0200 | GS19 | D_EGS | Getriebesteuergerät GS19 |
| 1B .91. 000A | VVT_B1_0 | D_VVT | Variabler Ventiltrieb Bank 1 4 Zylinder N42 |
| 1B .92. 000A | VVT_B1_0 | D_VVT | Variabler Ventiltrieb Bank 1 8 Zylinder N62 |
| 1B .92. 0014 | VVT_B1_0 | D_VVT | Variabler Ventiltrieb Bank 1 8 Zyl. N62, 12 Zyl. N73 |
| 1E .92. 000A | VVT_B2_0 | D_VVT2 | Variabler Ventiltrieb Bank 2 8 Zylinder N62 |
| 1E .92. 0014 | VVT_B2_0 | D_VVT2 | Variabler Ventiltrieb Bank 2 8 Zyl. N62, 12 Zyl. N73 |
| 20 ---- 0230 | RDC_E65 | D_RDC | Reifen Druck Control |
| 21 ---- 0240 | ACC_E65 | D_ACC | Adaptive Cruise Control |
| 23 ---- 0250 | ARS_E65 | D_ARS | Aktive Rollstabilisierung |
| 27 ---- 0260 | PGS_E65 | D_PGS | Passive Go System |
| 29 ---- 0270 | DSC_E65 | D_DSC | Dynamische Stabilitätskontrolle |
| 2A ---- 0280 | EMF_E65 | D_EMF | Elektromechanische Feststellbremse |
| 31 ---- 04F0 | MMC_E65 | D_MMC | Multimedia Changer |
| 35 ---- 0530 | SVS_E65 | D_SVS | Sprachverarbeitungssystem |
| 36 ---- 0290 | TEL_ECE | D_TEL | Telefon ECE Variante |
| 36 ---- 0298 | TEL_USA | D_TEL | Telefon US Variante |
| 37 ---- 02A0 | AMP_E65 | D_AMP | Top HIFI Verstärker |
| 38 ---- 02B0 | EHC_E65 | D_EHC | Luftfeder |
| 39 ---- 02C0 | EDC_K | D_EDC | Elektronische Dämpferkontrolle |
| 39 ---- 02C1 | EDCK65 | D_EDC | Elektronische Dämpferkontrolle |
| 3A ---- 02D0 | KHI_E65 | D_KHI | Kopfhöhrer Interface |
| 3B ---- 02E0 | NAV_E65 | D_NAV | Navigation ECE/US |
| 3C ---- 02F0 | CDC_E65 | D_CDC | Audio CD-Changer |
| 3F ---- 0300 | ASK_E65 | D_ASK | Audio System Kontroller |
| 40 ---- 0310 | CAS | D_CAS | Car Access System |
| 40 ---- 09C0 | CAS | D_CAS | Car Access System 2 |
| 41 ---- 0320 | DWA_E65 | D_DWA | Diebstahlwarnanlage |
| 42 ---- 0330 | CIM | D_CIM | Chassis Integration Modul |
| 42 ---- 0331 | CIM_2 | D_CIM | Chassis Integration Modul Redesign |
| 43 ---- 0340 | POW_E65 | D_POW | Powermodul bis I-6 |
| 43 ---- 0341 | POW_E65 | D_POW | Powermodul |
| 44 ---- 0350 | SHD_E65 | D_SHD | Schiebehebedach |
| 45 ---- 0360 | RLS_E65 | D_RLS | Regen- Lichtsensor |
| 46 ---- 0370 | WIM_E65 | D_WIM | Wischermodul |
| 47 ---- 0380 | ANT_E65 | D_ANTTU | Antennentuner |
| 4B ---- 0390 | VID_E65 | D_VIDEO | Videomodul ECE |
| 4B ---- 0391 | VID_E65 | D_VIDEO | Videomodul RGB ohne Navigation |
| 4B ---- 0392 | VID_E65 | D_VIDEO | Videomodul vorne und hinten |
| 4C ---- 03A0 | TMF_E65 | D_TMFT | Türmodul Fahrer |
| 4D ---- 03B0 | TMB_E65 | D_TMBT | Türmodul Beifahrer |
| 4E ---- 03C0 | TMFHE65 | D_TMFTH | Türmodul Fahrer hinten |
| 4F ---- 03D0 | TMBHE65 | D_TMBTH | Türmodul Beifahrer hinten |
| 50 ---- 03E0 | SINE_65 | D_SINE | DWA Sirene und Neigungsgeber |
| 60 ---- 03F0 | KOMBI65 | D_KOMBI | Instrumentenkombi |
| 60 ---- 03F1 | KOMBI65 | D_KOMBI | Instrumentenkombi ab 09/02 |
| 61 ---- 0520 | FBI_E65 | D_FBI | Flexible Bus Interface |
| 62 ---- 0400 | MC_GW | D_MOSTGW | MOST/CAN-Gateway (im MMI) |
| 63 ---- 0410 | MMI_GT | D_MMI | Mensch Maschine Interface Grafikteil |
| 64 ---- 0420 | PDC_E65 | D_PDC | Park Distance Control |
| 65 ---- 0430 | BZM_E65 | D_BZM | Bedienzentrum Mittelkonsole |
| 66 ---- 0440 | BZMF_E65 | D_BZMF | Bedienzentrum Mittelarmlehne |
| 67 ---- 0540 | EC_E65 | D_EC | Ergo Commander |
| 68 ---- 0540 | ECF_E65 | D_ECF | Ergo Commander Fond |
| 69 ---- 0451 | FAH_65_2 | D_FAH | Sitzmodul Fahrer hinten |
| 69 ---- 0450 | FAH_E65 | D_FAH | Sitzmodul Fahrer hinten |
| 6A ---- 0451 | BFH_65_2 | D_BFH | Sitzmodul Beifahrer hinten |
| 6A ---- 0450 | BFH_E65 | D_BFH | Sitzmodul Beifahrer hinten |
| 6B ---- 0470 | HKL_E65 | D_HKL | Heckklappenlift |
| 6D ---- 0451 | FAS_65_2 | D_FAS | Sitzmodul Fahrer |
| 6D ---- 0450 | FAS_E65 | D_FAS | Sitzmodul Fahrer |
| 6E ---- 0451 | BFS_65_2 | D_BFS | Sitzmodul Beifahrer |
| 6E ---- 0450 | BFS_E65 | D_BFS | Sitzmodul Beifahrer |
| 70 ---- 04A0 | LM_E65 | D_LM | Lichtmodul |
| 70 ---- 04A1 | LM_E65_2 | D_LM | Lichtmodul |
| 71 ---- 04B0 | AHM_E65 | D_AHM | Anhängermodul |
| 74 ---- 0980 | CIDF65 | D_CIDF | Zentrales Info Display hinten |
| 78 ---- 04C0 | IHKA65 | D_KLIMA | Klimabedienteil |
| 79 ---- 0510 | HKA_E65 | D_KLIMA2 | Heck Klimaautomatik |
| 7A ---- 04D0 | SHZH_E65 | D_SHZH | Standheizung, Zuheizer |
| 32 ---- 0660 | MMIFC | D_MMIFC | MOST/CAN-Gateway (im Fond MMI) |
| 34 ---- 0670 | MMI_GTF | D_MMIF | Mensch Maschine Interface Grafikteil Fond |
| 49 ---- 0890 | SECUR1 | D_SECUR1 | Sicherheitsfahrzeugmodul 1 |
| 4A ---- 08A0 | SECUR2 | D_SECUR2 | Sicherheitsfahrzeugmodul 2 |
| 01 ---- 01B0 | SGM_60 | D_SIM | Sicherheits-und Gatewaymodul |
| 01 ---- 0A70 | SGM_60_2 | D_SIM | Sicherheits-und Gatewaymodul |
| 02 ---- 01C0 | SZL | D_SZL | Satellit Lenksäule |
| 05 ---- 01F0 | TEFA60 | D_STVL | Satellit & Türelektronik Fahrer |
| 06 ---- 0210 | TEBF60 | D_STVR | Satellit & Türelektronik Beifahrer |
| 09 ---- 0220 | SBSL60 | D_SBSL | Satellit B-Säule links |
| 0A ---- 0460 | SBSR60 | D_SBSR | Satellit B-Säule rechts |
| 0E ---- 0480 | SFZ60 | D_SFZ | Satellit Fahrzeugzentrum |
| 12 .1C. 0000 | MS450DS0 | D_MOTOR | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 0001 | MS450DS0 | D_MOTOR | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 000A | MS450DS0 | D_MOTOR | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .2Q. 000E | ME9E65_6 | D_MOTOR | Motorelektronik ME 9  8 Zylinder N62 |
| 16 ---- 0500 | AFS_60 | D_AFS | Aktiv Front Steering |
| 17 ---- 0610 | EKP_60 | D_EKP | Elektrische Kraftstoffpumpe |
| 18 ---- 0490 | SSG_60 | D_EGS | Sequentielles Schaltgetriebe |
| 18 ---- 0201 | GS19A | D_EGS | Getriebesteuergerät GS19 |
| 20 ---- 0560 | RDC_60 | D_RDC | Reifen Druck Control |
| 22 ---- 05F0 | ALC_60 | D_ALC | Adaptive Lichtsteuerung |
| 23 ---- 0251 | ARS_60 | D_ARS | Aktive Rollstabilisierung |
| 29 ---- 0620 | DSC_60 | D_DSC | Dynamische Stabilitätskontrolle |
| 35 ---- 08F0 | SVS_60 | D_SVS | Sprachverarbeitungssystem (im CCC) |
| 36 ---- 0630 | TELE60 | D_TEL | Telefon ECE Variante |
| 36 ---- 0640 | TELE60 | D_TEL | Telefon US Variante |
| 36 ---- 0650 | TELE60 | D_TEL | Telefon Japan Variante |
| 36 ---- 0A80 | ULF_60 | D_TEL | Universelle Lade- Freisprecheinrichtung |
| 37 ---- 0670 | AMP_60 | D_AMP | Top HIFI Verstärker |
| 3B ---- 0870 | JNAV60 | D_NAV | Japan Navigation |
| 3B ---- 09F0 | NAV_60 | D_NAV | Navigation ECE/US (im CCC) |
| 3D ---- 0680 | HUD_60 | D_HUD | Head-Up-Display |
| 3F ---- 0A00 | ASK_60 | D_ASK | Audio System Kontroller (im CCC) |
| 40 ---- 0690 | CAS | D_CAS | Car Access System 2 |
| 41 ---- 06B0 | DWA_E65 | D_DWA | Diebstahlwarnanlage |
| 44 ---- 0351 | SD_KWP | D_SHD | Multi Drive Schiebehebedach |
| 47 ---- 06D0 | ANT_60 | D_ANTTU | Antennentuner im CCC |
| 54 ---- 0850 | DAB_60 | D_RADIO | Digital Radio ECE |
| 54 ---- 0860 | SAT_60 | D_RADIO | Satellitenradio US |
| 60 ---- 06E0 | KOMB60 | D_KOMBI | Intrumentenkombi |
| 62 ---- 09D0 | CCCG60 | D_MOSTGW | MOST/CAN-Gateway (im CCC) |
| 62 ---- 0590 | MCGW60 | D_MOSTGW | MOST/CAN-Gateway (im MASK) |
| 63 ---- 06F0 | CCC_60 | D_MMI | Car Comunication Computer |
| 63 ---- 0700 | MASK60 | D_MMI | MMI Audio System Kontroller |
| 90 ---- 0700 |  |  | MMI Audio System Kontroller nur für Flashen |
| 65 ---- 0710 | SZM_60 | D_BZM | Schaltzentrum Mittelkonsole |
| 67 ---- 0720 | ECL60 | D_EC | Ergo Commander Low |
| 67 ---- 07F0 | ECH60 | D_EC | Ergo Commander High |
| 70 ---- 07B0 | LM_60 | D_LM | Lichtmodul |
| 72 ---- 0730 | KBM_60 | D_KBM | Karosserie Basis Modul |
| 73 ---- 0740 | CID_60 | D_CID | Zentrales Info Display |
| 74 ---- 0770 | CIDF65 | D_CIDF | Zentrales Info Display hinten |
| 78 ---- 0790 | IHKA60 | D_KLIMA | Klimabedienteil |
| 7A ---- 0760 | SHZH60 | D_SHZH | Standheizung, Zuheizer |
| A1 ---- 0220 | SBSL85 | D_SBSL2 | Satellit B-Säule links |
| A2 ---- 0460 | SBSR85 | D_SBSR2 | Satellit B-Säule rechts |
| 12 .32. 0000 | MSV70 | D_MOTOR | Motorelektronik MS 70 6 Zylinder N51/N52 |
| 12 .33. 0000 | MSD70 | D_MOTOR | Motorelektronik MS 70 6 Zylinder N53 |
| 12 .34. 0000 | MSDA70 | D_MOTOR | Motorelektronik MS 70 6 Zylinder N54 |
| 41 ---- 0750 | DWA_63 | D_DWA | DWA Sirene und Neigungsgeber |
| 65 ---- 0990 | SZM_60 | D_BZM | Schaltzentrum Mittelkonsole |
| 24 ---- 0600 | CVM_64 | D_CVM | Cabrio Verdeck Modul |
| A1 ---- 0A50 | SBSL85 | D_SBSL2 | Satellit B-Säule links |
| A2 ---- 0A60 | SBSR85 | D_SBSR2 | Satellit B-Säule rechts |
| 34 ---- 0810 | MMI_GTF | D_MMIF | Mensch Maschine Interface hinten |
| 38 ---- 0840 | EHC2RR | D_EHC | 2-Achs Luftfeder |
| 3E ---- 07D0 | ADP_RR | D_ADP | Audio Display Panel |
| 62 ---- 0830 | MC_GW | D_MOSTGW | MOST/CAN-Gateway (im MMI) |
| 63 ---- 0800 | MMI_GT | D_MMI | Mensch Maschine Interface |
| 6C ---- 07A0 | KFS_RR | D_KFS | Kühlerfigursteuerung |
| 60 ---- 07C0 | KOMBRR | D_KOMBI | Instrumentenkombi |
| 73 ---- 07E0 | CID_60 | D_CID | Central Information Display |
| 74 ---- 09A0 | CIDF65 | D_CIDF | Zentrales Info Display hinten links |
| 75 ---- 09B0 | CIDF2RR | D_CIDF2 | Zentrales Info Display hinten rechts |
| 78 ---- 0660 | IHKARR | D_KLIMA | Klimabedienteil |
| 00 ---- 08C0 | JBBF81 | D_ZGM | Junction Box Beifahrer |
| 01 ---- 08E0 | MRS5 | D_SIM | Airbag Steuergerät |
| 29 ---- 05B0 | DSC_81 | D_DSC | Dynamische Stabilitätskontrolle |
| 40 ---- 06A0 | CAS | D_CAS | Car Access System 2 |
| 41 ---- 0780 | DWA_E65 | D_DWA | Diebstahlwarnanlage |
| 56 ---- 05A0 | DEM_81 | D_DEM | Dachelektronik Modul |
| 60 ---- 08D0 | KOMB81 | D_KOMBI | Instrumentenkombi |
| 63 ---- 0900 | RAD1 | D_MMI | Radio Stufe 1 |
| 63 ---- 0910 | RAD2 | D_MMI | Radio Stufe 2 |
| 64 ---- 09E0 | PDC_81 | D_PDC | Park Distance Control |
| 6D ---- 0920 | FAS_81 | D_FAS | Sitzmodul Fahrer |
| 6E ---- 0930 | BFS_81 | D_BFS | Sitzmodul Beifahrer |
| 72 ---- 05C0 | FRM_81 | D_KBM | Fussraum Modul Fahrerseite |
| 73 ---- 0A40 | CID_81 | D_CID | Zentrales Info Display |
| 78 ---- 05D0 | IHKA81 | D_KLIMA | Klimaautomatik |
| 78 ---- 0880 | IHKR81 | D_KLIMA | Klimaregelung |
| 78 ---- 08B0 | IHR_81 | D_KLIMA | Heizungsregelung |
| 1C ---- 0A90 | LDM_90 | D_LDM | Längs Dynamik Management |
| 1D ---- 0AA0 | FFP_90 | D_FFP | Force Feedback Paddle |
| 19 ---- 0950 | VGSG90 | D_VGSG | Verteilergetriebe Steuergerät |
| 30 ---- 0940 | EPS_90 | D_EPS | Elektrische Lenkung |
| 44 ---- 0970 | MDS_90 | D_SHD | Multi Drive Sunroof |
| 72 ---- 0960 | FRM_90 | D_KBM | Fussraum Modul Fahrerseite |
| 73 ---- 0A30 | CID_90 | D_CID | Zentrales Info Display |
| 29 ---- 0001 | DSC_MK60 | D_ABSKWP | DSC MK60 mit analogen DSC-Sensoren |
| 29 ---- 0002 | DSC_MK60 | D_ABSKWP | ASC MK60 |
| 29 ---- 0006 | DSC_MK60 | D_ABSKWP | DSC MK60 mit SensorCluster |
| 29 ---- 0003 | DSC_MK60 | D_ABSKWP | ABS MK60 |
| 29 ---- 0004 | DSC_MK60 | D_ABSKWP | ASC MK60 |
| 29 ---- 0005 | DSC_MK60 | D_ABSKWP | DSC MK60 mit SensorCluster |
| 29 ---- 0020 | DXC8 | D_ABSKWP | DSC8 Allradsystem |
| 29 ---- 0021 | DXC8 | D_ABSKWP | DSC8 Allradsystem |
| 32 .2M. 0550 | GS30 | D_0032 | Sequentielles Schaltgetriebe |
| 37 ---- 04E0 | EPS_E85 | D_EPS | Elektrische Lenkung |
| 37 ---- 04E1 | EPS_85_2 | D_EPS | Elektrische Lenkung |
| 46 ---- 0670 | CID_85 | D_CID | Zentrales Info Display |
| A1 ---- 0570 | SBSL85 | D_SBSL2 | Satellit B-Säule links |
| A2 ---- 0580 | SBSR85 | D_SBSR2 | Satellit B-Säule rechts |
| A4 ---- 0560 | SIM85 | D_SIM | Sicherheits- Informationsmodul |
| AD ---- 0A10 | STVL85 | D_STVL2 | Satellit Tür vorne links |
| AE ---- 0A20 | STVR85 | D_STVR2 | Satellit Tür vorne rechts |
| ?? ---- 0AB0 |  |  |  |
| ?? ---- 0AC0 |  |  |  |
| ?? ---- 0AD0 |  |  |  |
| ?? ---- 0AE0 |  |  |  |
| ?? ---- 0AF0 |  |  |  |

### ZUORDNUNGSTABELLEMOTORRAD

| ADR_VAR_DIAG | SGBD | GRUPPE | STEUERGERAET |
| --- | --- | --- | --- |
| 12 ---- 6000 | MRBMSK | D_MRMOT | Motorrad Motorsteuergerät |
| 60 ---- 6100 | MRKOMBI | D_MRKOMB | Motorrad Instrumentenkombi |
| 72 ---- 6200 | MRZFEL | D_MRZFE | Motorrad Zentrale Fahrgestellelektronik Low |
| 72 ---- 6300 | MRZFEH | D_MRZFE | Motorrad Zentrale Fahrgestellelektronik High |
| 29 ---- 6400 | MRIABS | D_MRABS | Motorrad Integral ABS |
| 41 ---- 6500 | MRDWA | D_MRDWA | Motorrad Diebstahlwarnanlage |
| ?? ---- 6600 |  |  |  |
| ?? ---- 6700 |  |  |  |
| ?? ---- 6800 |  |  |  |
| ?? ---- 6900 |  |  |  |
| ?? ---- 6A00 |  |  |  |
