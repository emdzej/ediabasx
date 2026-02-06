# d_did.grp

## General

|  |  |
| --- | --- |
| File | d_did.grp |
| Type | GRP |
| Jobs | 2 |
| Tables | 3 |
| Origin | BMW TI-430 Drexel |
| Revision | 0.77 |
| Author | BMW TI-430 Drexel |
| ECU Comment | CID_RR |

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
| ?A0? | ERROR_DIAG_PROT |
| ?A1? | ERROR_SG_ADRESSE |
| ?A2? | ERROR_SG_MAXANZAHL_AIF |
| ?A3? | ERROR_SG_GROESSE_AIF |
| ?A4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?A5? | ERROR_SG_AUTHENTISIERUNG |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### ZUORDNUNGSTABELLE

| ADR_VAR_DIAG | SGBD | GRUPPE | BR | STEUERGERAET |
| --- | --- | --- | --- | --- |
| 00 .C5. 0100 | ZGM_E65 | D_ZGM | E65 | Zentrales Gatewaymodul |
| 01 .DA. 0110 | SIM | D_SIM | E65 | Sicherheits- Informationsmodul |
| 02 .DB. 0120 | SZL | D_SZL | E65 | Satellit Lenksäule |
| 03 .DC. 0130 | SASL | D_SASL | E65 | Satellit A-Säule links |
| 04 .DD. 0140 | SASR | D_SASR | E65 | Satellit A-Säule rechts |
| 05 .DE. 0150 | STVL | D_STVL | E65 | Satellit Tür vorne links |
| 06 .DF. 0160 | STVR | D_STVR | E65 | Satellit Tür vorne rechts |
| 07 .DG. 0170 | SSFA | D_SSFA | E65 | Satellit Sitz Fahrer |
| 08 .DH. 0180 | SSBF | D_SSBF | E65 | Satellit Sitz Beifahrer |
| 09 .DI. 0190 | SBSL | D_SBSL | E65 | Satellit B-Säule links |
| 0A .DJ. 01A0 | SBSR | D_SBSR | E65 | Satellit B-Säule rechts |
| 0D .DM. 01D0 | SSH | D_SSH | E65 | Satellit Sitz hinten |
| 0E .DN. 01E0 | SFZ | D_SFZ | E65 | Satellit Fahrzeugzentrum |
| 12 .0Q. 0001 | ME965_4 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000A | ME9E65_5 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000C | ME9E65_6 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000D | ME9E65_6 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 000E | ME9E65_6 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0Q. 0103 | ME9E65_6 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .0R. 0001 | ME965_4 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 .0R. 000A | ME9E6514 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master |
| 13 .0R. 0001 | ME965_4L | D_MOTOR2 | E65 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 .0R. 000A | ME96514L | D_MOTOR2 | E65 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 18 .2K. 0200 | GS19 | D_EGS | E65 | Getriebesteuergerät GS19 |
| 18 .2L. 0200 | GS19 | D_EGS | E65 | Getriebesteuergerät GS19 |
| 1B .91. 000A | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 4 Zylinder N42 |
| 1B .92. 000A | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 8 Zylinder N62 |
| 1B .92. 0014 | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 8 Zylinder N62 |
| 1E .92. 000A | VVT_B2_0 | D_VVT2 | E65 | Variabler Ventiltrieb Bank 2 8 Zylinder N62 |
| 1E .92. 0014 | VVT_B2_0 | D_VVT2 | E65 | Variabler Ventiltrieb Bank 2 8 Zylinder N62 |
| 20 .B6. 0230 | RDC_E65 | D_RDC | E65 | Reifen Druck Control |
| 21 .A7. 0240 | ACC_E65 | D_ACC | E65 | Adaptive Cruise Control |
| 23 .A1. 0250 | ARS_E65 | D_ARS | E65 | Aktive Rollstabilisierung |
| 27 .B2. 0260 | PGS_E65 | D_PGS | E65 | Passive Go System |
| 29 0001 0270 | DSC_E65 | D_DSC | E65 | Dynamische Stabilitätskontrolle |
| 2A .A2. 0280 | EMF_E65 | D_EMF | E65 | Elektromechanische Feststellbremse |
| 31 .AY. 04F0 | MMC_E65 | D_MMC | E65 | Multimedia Changer |
| 32 .AX. 0400 | MMIFC | D_MMIFC | E66 | MOST/CAN-Gateway (im Fond MMI) |
| 34 .AZ. 0410 | MMI_GTF | D_MMIF | E66 | Mensch Maschine Interface Grafikteil Fond |
| 35 .BF. 0530 | SVS_E65 | D_SVS | E65 | Sprachverarbeitungssystem |
| 36 .BE. 0290 | TEL_ECE | D_TEL | E65 | Telefon ECE Variante |
| 36 .CD. 0298 | TEL_USA | D_TEL | E65 | Telefon US Variante |
| 37 .AA. 02A0 | AMP_E65 | D_AMP | E65 | Top HIFI Verstärker |
| 38 .AP. 02B0 | EHC_E65 | D_EHC | E65 | Luftfeder |
| 39 .A6. 02C0 | EDC_K | D_EDC | E65 | Elektronische Dämpferkontrolle |
| 3A .CH. 02D0 | KHI_E65 | D_KHI | E65 | Kopfhöhrer Interface |
| 3B .B1. 02E0 | NAV_E65 | D_NAV | E65 | Navigation |
| 3C .DP. 02F0 | CDC_E65 | D_CDC | E65 | Audio CD-Changer |
| 3F .AB. 0300 | ASK_E65 | D_ASK | E65 | Audio System Kontroller Kassette |
| 3F .AC. 0300 | ASK_E65 | D_ASK | E65 | Audio System Kontroller CD |
| 3F .AD. 0300 | ASK_E65 | D_ASK | E65 | Audio System Kontroller Mini Disc |
| 40 .AH. 0310 | CAS | D_CAS | E65 | Car Access System |
| 41 .AM. 0320 | DWA_E65 | D_DWA | E65 | Diebstahlwarnanlage |
| 42 .AI. 0330 | CIM | D_CIM | E65 | Chassis Integration Modul |
| 43 .B4. 0340 | POW_E65 | D_POW | E65 | Powermodul bis I-6 |
| 43 .B4. 0341 | POW_E65 | D_POW | E65 | Powermodul |
| 44 .BI. 0350 | SHD_E65 | D_SHD | E65 | Schiebehebedach |
| 45 .A9. 0360 | RLS_E65 | D_RLS | E65 | Regen- Lichtsensor |
| 46 .C4. 0370 | WIM_E65 | D_WIM | E65 | Wischermodul |
| 47 .AE. 0380 | ANT_E65 | D_ANTTU | E65 | Antennentuner 1 |
| 47 .AF. 0380 | ANT_E65 | D_ANTTU | E65 | Antennentuner 2 |
| 49 .F3. 0890 | SECUR1 | D_SECUR1 | E67 | Sicherheitsfahrzeugmodul 1 |
| 4A .F4. 08A0 | SECUR2 | D_SECUR2 | E67 | Sicherheitsfahrzeugmodul 2 |
| 4B .C2. 0390 | VID_E65 | D_VIDEO | E65 | Videomodul ECE |
| 4B .CG. 0391 | VID_E65 | D_VIDEO | E65 | Videomodul Japan |
| 4C .C0. 03A0 | TMF_E65 | D_TMFT | E65 | Türmodul Fahrer High |
| 4C .C8. 03A0 | TMF_E65 | D_TMFT | E65 | Türmodul Fahrer Low |
| 4D .BY. 03B0 | TMB_E65 | D_TMBT | E65 | Türmodul Beifahrer High |
| 4D .C6. 03B0 | TMB_E65 | D_TMBT | E65 | Türmodul Beifahrer Low |
| 4E .C1. 03C0 | TMFHE65 | D_TMFTH | E65 | Türmodul Fahrer hinten High |
| 4E .C9. 03C0 | TMFHE65 | D_TMFTH | E65 | Türmodul Fahrer hinten Low |
| 4F .BZ. 03D0 | TMBHE65 | D_TMBTH | E65 | Türmodul Beifahrer hinten High |
| 4F .C7. 03D0 | TMBHE65 | D_TMBTH | E65 | Türmodul Beifahrer hinten Low |
| 50 0001 03E0 | SINE_65 | D_SINE | E65 | DWA Sirene und Neigungsgeber |
| 60 .A3. 03F0 | KOMBI65 | D_KOMBI | E65 | Instrumentenkombi |
| 61 .BD. 0520 | FBI_E65 | D_FBI | E65 | Flexible Bus Interface |
| 62 .AX. 0400 | MC_GW | D_MOSTGW | E65 | MOST/CAN-Gateway (im MMI) |
| 63 .AZ. 0410 | MMI_GT | D_MMI | E65 | Mensch Maschine Interface Grafikteil |
| 64 .B3. 0420 | PDC_E65 | D_PDC | E65 | Park Distance Control |
| 65 .BW. 0430 | BZM_E65 | D_BZM | E65 | Bedienzentrum Mittelkonsole |
| 66 .BX. 0440 | BZMF_E65 | D_BZMF | E65 | Bedienzentrum Mittelarmlehne |
| 67 .AN. 0540 | EC_E65 | D_EC | E65 | Ergo Commander |
| 68 .AN. 0540 | ECF_E65 | D_ECF | E65 | Ergo Commander Fond |
| 69 .BL. 0451 | FAH_65_2 | D_FAH | E65 | Sitzmodul Fahrer hinten |
| 69 .BL. 0450 | FAH_E65 | D_FAH | E65 | Sitzmodul Fahrer hinten |
| 69 .BM. 0450 | FAH_E65 | D_FAH | E65 | Sitzmodul Fahrer hinten nur Vorserie1 |
| 69 .BN. 0450 | FAH_E65 | D_FAH | E65 | Sitzmodul Fahrer hinten nur Vorserie1 |
| 69 .BO. 0450 | FAH_E65 | D_FAH | E65 | Sitzmodul Fahrer hinten nur Vorserie1 |
| 69 .BP. 0450 | FAH_E65 | D_FAH | E65 | Sitzmodul Fahrer hinten nur Vorserie1 |
| 69 .CC. 0450 | FAH_E65 | D_FAH | E65 | Sitzmodul Fahrer hinten nur Vorserie1 |
| 6A .BL. 0451 | BFH_65_2 | D_BFH | E65 | Sitzmodul Beifahrer hinten |
| 6A .BL. 0450 | BFH_E65 | D_BFH | E65 | Sitzmodul Beifahrer hinten |
| 6A .BM. 0450 | BFH_E65 | D_BFH | E65 | Sitzmodul Beifahrer hinten nur Vorserie1 |
| 6A .BN. 0450 | BFH_E65 | D_BFH | E65 | Sitzmodul Beifahrer hinten nur Vorserie1 |
| 6A .BO. 0450 | BFH_E65 | D_BFH | E65 | Sitzmodul Beifahrer hinten nur Vorserie1 |
| 6A .BP. 0450 | BFH_E65 | D_BFH | E65 | Sitzmodul Beifahrer hinten nur Vorserie1 |
| 6A .CC. 0450 | BFH_E65 | D_BFH | E65 | Sitzmodul Beifahrer hinten nur Vorserie1 |
| 6B .AT. 0470 | HKL_E65 | D_HKL | E65 | Heckklappenlift |
| 6D .BL. 0451 | FAS_65_2 | D_FAS | E65 | Sitzmodul Fahrer |
| 6D .BL. 0450 | FAS_E65 | D_FAS | E65 | Sitzmodul Fahrer |
| 6D .BM. 0450 | FAS_E65 | D_FAS | E65 | Sitzmodul Fahrer nur Vorserie1 |
| 6D .BN. 0450 | FAS_E65 | D_FAS | E65 | Sitzmodul Fahrer nur Vorserie1 |
| 6D .BO. 0450 | FAS_E65 | D_FAS | E65 | Sitzmodul Fahrer nur Vorserie1 |
| 6D .BP. 0450 | FAS_E65 | D_FAS | E65 | Sitzmodul Fahrer nur Vorserie1 |
| 6D .CC. 0450 | FAS_E65 | D_FAS | E65 | Sitzmodul Fahrer nur Vorserie1 |
| 6E .BL. 0451 | BFS_65_2 | D_BFS | E65 | Sitzmodul Beifahrer |
| 6E .BL. 0450 | BFS_E65 | D_BFS | E65 | Sitzmodul Beifahrer |
| 6E .BM. 0450 | BFS_E65 | D_BFS | E65 | Sitzmodul Beifahrer nur Vorserie1 |
| 6E .BN. 0450 | BFS_E65 | D_BFS | E65 | Sitzmodul Beifahrer nur Vorserie1 |
| 6E .BO. 0450 | BFS_E65 | D_BFS | E65 | Sitzmodul Beifahrer nur Vorserie1 |
| 6E .BP. 0450 | BFS_E65 | D_BFS | E65 | Sitzmodul Beifahrer nur Vorserie1 |
| 6E .CC. 0450 | BFS_E65 | D_BFS | E65 | Sitzmodul Beifahrer nur Vorserie1 |
| 70 0001 04A0 | LM_E65 | D_LM | E65 | Lichtmodul |
| 70 .A0. 04A1 | LM_E65_2 | D_LM | E65 | Lichtmodul |
| 71 .A8. 04B0 | AHM_E65 | D_AHM | E65 | Anhängermodul |
| 78 .A4. 04C0 | IHKA65 | D_KLIMA | E65 | Klimabedienteil |
| 79 .AS. 0510 | HKA_E65 | D_KLIMA2 | E65 | Heck Klimaautomatik |
| 7A .BJ. 04D0 | SHZH_E65 | D_SHZH | E65 | Standheizung, Zuheizer |
| 00 .??. 01B0 | SGM_60 | D_ZGM | E60 | Sicherheits-und Gatewaymodul |
| 02 .??. 01C0 | SZL_60 | D_SZL | E60 | Satellit Lenksäule |
| 05 .??. 01F0 | TEVL60 | D_STVL | E60 | Türelektronik vorne links |
| 06 .??. 0210 | TEVR60 | D_STVR | E60 | Türelektronik vorne rechts |
| 09 .??. 0220 | SBSL60 | D_SBSL | E60 | Satellit B-Säule links |
| 0A .??. 0460 | SBSR60 | D_SBSR | E60 | Satellit B-Säule rechts |
| 0E .??. 0480 | SFZ60 | D_SFZ | E60 | Satellit Fahrzeugzentrum |
| 16 0001 0500 | AFS_60 | D_AFS | E60 | Aktiv Front Steering |
| 17 .??. 0610 | EKP_60 | D_EKP | E60 | Elektrische Kraftstoffpumpe |
| 18 .??. 0490 | SSG_60 | D_EGS | E60 | Sequentielles Schaltgetriebe |
| 1E .??. 05E0 | HDEV43 | D_HDV | E60 | Hochdruck Einspritzventile N43 |
| 20 .EG. 0660 | RDC_60 | D_RDC | E60 | Reifen Druck Control |
| 22 .EX. 05F0 | ALC_60 | D_ALC | E60 | Adaptive Lichtsteuerung |
| 24 .??. 0600 | CVM_60 | D_CVM | E60 | Cabrio Verdeck Modul |
| 29 .EK. 0620 | DSC_60 | D_DSC | E60 | Dynamische Stabilitätskontrolle ohne AFS |
| 29 .EL. 0620 | DSC_60 | D_DSC | E60 | Dynamische Stabilitätskontrolle mit AFS |
| 36 .??. 0630 | TELE60 | D_TEL | E60 | Telefon ECE Variante |
| 36 .??. 0640 | TELU60 | D_TEL | E60 | Telefon US Variante |
| 36 .??. 0650 | TELJ60 | D_TEL | E60 | Telefon Japan Variante |
| 37 .??. 0670 | AMP_60 | D_AMP | E60 | Top HIFI Verstärker |
| 3B .??. 0870 | JNAV60 | D_NAV | E60 | Japan Navigation |
| 3D .??. 0680 | HUD_60 | D_HUD | E60 | Head-Up-Display |
| 40 .AH. 0690 | CAS | D_CAS | E60 | Car Access System Low |
| 40 .AH. 06A0 | CAS | D_CAS | E60 | Car Access System High |
| 41 .??. 06B0 | DWA_60 | D_DWA | E60 | Diebstahlwarnanlage |
| 47 .??. 06D0 | ANT_60 | D_ANTTU | E60 | Antennentuner im CCC |
| 54 .??. 0850 | DAB_60 | D_RADIO | E60 | Digital Radio ECE |
| 54 .??. 0860 | SAT_60 | D_RADIO | E60 | Satellitenradio US |
| 60 .??. 06E0 | KOMB60 | D_KOMBI | E60 | Intrumentenkombi |
| 63 .??. 06F0 | CCC_60 | D_MMI | E60 | Car Comunication Computer |
| 63 .??. 0700 | MASK60 | D_MMI | E60 | MMI Audio System Kontroller |
| 65 .DU. 0710 | SZM_60 | D_BZM | E60 | Schaltzentrum Mittelkonsole |
| 67 .??. 0720 | ECL60 | D_EC | E60 | Ergo Commander Low |
| 67 .??. 07F0 | ECH60 | D_EC | E60 | Ergo Commander High |
| 70 .DT. 07B0 | LM_60 | D_LM | E60 | Lichtmodul |
| 72 .??. 0730 | KBM_60 | D_KBM | E60 | Karosserie Basis Modul |
| 73 .??. 0740 | CID_60 | D_CID | E60 | Zentrales Info Display |
| 73 .??. 0750 | CIDH60 | D_CID | E60 | Zentrales Info Display High |
| 73 .??. 0760 | CIDM60 | D_CID | E60 | Zentrales Info Display Monochrom |
| 74 .??. 0770 | CIDR60 | D_CID | E60 | Zentrales Info Display hinten |
| 76 .??. 0780 | LSM_60 | D_LSM | E60 | Lenksäulenmodul |
| 78 .DW. 0790 | IHKA60 | D_KLIMA | E60 | Klimabedienteil High |
| 78 .DV. 0790 | IHKA60 | D_KLIMA | E60 | Klimabedienteil Basis |
| 38 .EU. 0840 | EHC2RR | D_EHC | RR1 | 2-Achs Luftfeder |
| 6C .RR. 07A0 | KFS_RR | D_KFS | RR1 | Kühlerfigursteuerung |
| 60 .EA. 07C0 | KOMBRR | D_KOMBI | RR1 | Instrumentenkombi |
| 3E .EB. 07D0 | ADP_RR | D_ADP | RR1 | Audio Display Panel |
| 73 .DZ. 07E0 | CID_RR | D_DID | RR1 | Central Information Display |
| 63 .EC. 0800 | MMI_RR | D_MMI | RR1 | Mensch Maschine Interface |
| 34 .EH. 0810 | MMIHRR | D_MMIF | RR1 | Mensch Maschine Interface hinten |
| 3B .??. 0820 | NAV_RR | D_NAV | RR1 | Navigation ECE/US |
| 62 .AX. 0830 | MCGWRR | D_MOSTGW | RR1 | MOST/CAN-Gateway (im MMI) |
| 78 .??. 0660 | IHKARR | D_KLIMA | RR1 | Klimabedienteil |
| 29 0001 0001 | DSC_MK60 | D_ABSKWP | E46 | DSC MK60 mit analogen DSC-Sensoren |
| 29 0002 0002 | DSC_MK60 | D_ABSKWP | E46 | ASC MK60 |
| 29 0012 0002 | DSC_MK60 | D_ABSKWP | E46 | ASC MK60 mit RPA |
| 29 0006 0006 | DSC_MK60 | D_ABSKWP | E46 | DSC MK60 mit SensorCluster |
| 29 0016 0006 | DSC_MK60 | D_ABSKWP | E46 | DSC MK60 mit SensorCluster/RPA |
| 29 0003 0003 | DSC_MK60 | D_ABSKWP | R50 | ABS MK60 |
| 29 0013 0003 | DSC_MK60 | D_ABSKWP | R50 | ABS MK60 mit RPA |
| 29 0004 0004 | DSC_MK60 | D_ABSKWP | R50 | ASC MK60 |
| 29 0014 0004 | DSC_MK60 | D_ABSKWP | R50 | ASC MK60 mit RPA |
| 29 0005 0005 | DSC_MK60 | D_ABSKWP | R50 | DSC MK60 mit SensorCluster |
| 29 0015 0005 | DSC_MK60 | D_ABSKWP | R50 | DSC MK60 mit SensorCluster/RPA |
| 29 0020 0020 | DXC8 | D_ABSKWP | E53 | DSC8 Allradsystem |
| 29 0021 0021 | DXC8 | D_ABSKWP | E83 | DSC8 Allradsystem |
| 29 0016 0006 | DSC_MK60 | D_ABSKWP | E85 | DSC MK60 mit SensorCluster/RPA |
| 32 .2M. 0550 | GS30 | D_0032 | E85 | Sequentielles Schaltgetriebe |
| 37 0001 04E0 | EPS_E85 | D_EPS | E85 | Elektrische Lenkung |
| 46 .??. 0670 | CID_85 | D_CID | E85 | Zentrales Info Display |
| A4 0001 0560 | SIM85 | D_SIM | E85 | Sicherheits- Informationsmodul |
| A1 0001 0570 | SBSL85 | D_SBSL | E85 | Satellit B-Säule links |
| A2 0001 0580 | SBSR85 | D_SBSR | E85 | Satellit B-Säule rechts |
| ?? .??. 0590 |  |  | E?? |  |
| ?? .??. 05A0 |  |  | E?? |  |
| ?? .??. 05B0 |  |  | E?? |  |
| ?? .??. 05C0 |  |  | E?? |  |
| ?? .??. 05D0 |  |  | E?? |  |
| ?? .??. 0880 |  |  | E?? |  |
| ?? .??. 08B0 |  |  | E?? |  |
| ?? .??. 08C0 |  |  | E?? |  |
| ?? .??. 08D0 |  |  | E?? |  |
| ?? .??. 08E0 |  |  | E?? |  |
| ?? .??. 08F0 |  |  | E?? |  |
