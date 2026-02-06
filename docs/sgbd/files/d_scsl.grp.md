# d_scsl.grp

## General

|  |  |
| --- | --- |
| File | d_scsl.grp |
| Type | GRP |
| Jobs | 2 |
| Tables | 2 |
| Origin | BMW TI-433 Drexel |
| Revision | 0.11 |
| Author | BMW TI-433 Drexel |
| ECU Comment | SCSL |

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
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### ZUORDNUNGSTABELLE

| ADR_VAR_DIAG | SGBD | GRUPPE | BR | STEUERGERAET |
| --- | --- | --- | --- | --- |
| 00 0000 0100 | ZGM_E65 | D_ZGM | E65 | Zentrales Gatewaymodul |
| 01 0001 0110 | SIM | D_SIM | E65 | Sicherheits- Informationsmodul |
| 02 0001 0120 | SZL | D_SZL | E65 | Satellit Lenksäule |
| 03 0001 0130 | SASL | D_SASL | E65 | Satellit A-Säule links |
| 04 0001 0140 | SASR | D_SASR | E65 | Satellit A-Säule rechts |
| 05 0001 0150 | STVL | D_STVL | E65 | Satellit Tür vorne links |
| 06 0001 0160 | STVR | D_STVR | E65 | Satellit Tür vorne rechts |
| 07 0001 0170 | SSFA | D_SSFA | E65 | Satellit Sitz Fahrer |
| 08 0001 0180 | SSBF | D_SSBF | E65 | Satellit Sitz Beifahrer |
| 09 0001 0190 | SBSL | D_SBSL | E65 | Satellit B-Säule links |
| 0A 0001 01A0 | SBSR | D_SBSR | E65 | Satellit B-Säule rechts |
| 0B 0001 01B0 | SCSL | D_SCSL | E65 | Satellit C-Säule links |
| 0C 0001 01C0 | SCSR | D_SCSR | E65 | Satellit C-Säule rechts |
| 0D 0001 01D0 | SSH | D_SSH | E65 | Satellit Sitz hinten |
| 0E 0001 01E0 | SFZ | D_SFZ | E65 | Satellit Fahrzeugzentrum |
| 12 3051 0001 | ME965_4 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 3051 000A | ME9E6514 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 3052 0001 | ME965_4 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master |
| 12 3052 000A | ME9E6514 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master |
| 13 3052 0001 | ME965_4L | D_MOTOR2 | E65 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 13 3052 000A | ME96514L | D_MOTOR2 | E65 | Motorelektronik ME 9 12 Zylinder N73 Slave |
| 16 0001 0500 | AFS_E60 | D_AFS | E60 | Aktiv Front Steering |
| 18 0001 0200 | GS19 | D_EGS | E65 | Getriebesteuergerät GS19 |
| 1B 0091 0001 | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 4 Zylinder N42 |
| 1B 0092 0001 | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 8 Zylinder N62 |
| 1E 0092 0001 | VVT_B2_0 | D_VVT2 | E65 | Variabler Ventiltrieb Bank 2 8 Zylinder N62 |
| 20 0000 0230 | RDC_E65 | D_RDC | E65 | Reifen Druck Control |
| 21 0000 0240 | ACC_E65 | D_ACC | E65 | Adaptive Cruise Control |
| 23 FFFF 0250 | ARS_E65 | D_ARS | E65 | Aktive Rollstabilisierung |
| 27 FFFF 0260 | PGS_E65 | D_PGS | E65 | Passive Go System |
| 29 0001 0270 | DSC_E65 | D_DSC | E65 | Dynamische Stabilitätskontrolle |
| 2A 0001 0280 | EMF_E65 | D_EMF | E65 | Elektromechanische Feststellbremse |
| 31 FFFF 04F0 | MMC_E65 | D_MMC | E65 | Multimedia Changer |
| 36 0001 0290 | TEL_E65 | D_TEL | E65 | Telefon |
| 37 FFFF 02A0 | AMP_E65 | D_AMP | E65 | Top HIFI Verstärker |
| 38 FFFF 02B0 | EHC_E65 | D_EHC | E65 | Luftfeder |
| 39 FFFF 02C0 | EDC_K | D_EDC | E65 | Elektronische Dämpferkontrolle |
| 3A FFFF 02D0 | KHI_E65 | D_KHI | E65 | Kopfhöhrer Interface |
| 3B FFFF 02E0 | NAV_E65 | D_NAV | E65 | Navigation |
| 3C FFFF 02F0 | CDC_E65 | D_CDC | E65 | Audio CD-Changer |
| 3F FFFF 0300 | ASK_E65 | D_ASK | E65 | Audio System Kontroller |
| 40 0001 0310 | CAS | D_CAS | E65 | Car Access System |
| 41 0001 0320 | DWA_E65 | D_DWA | E65 | Diebstahlwarnanlage |
| 42 0001 0330 | CIM | D_CIM | E65 | Chassis Integration Modul |
| 43 0001 0340 | POW_E65 | D_POW | E65 | Powermodul |
| 44 FFFF 0350 | SHD_E65 | D_SHD | E65 | Schiebehebedach |
| 45 0001 0360 | AIC_E65 | D_AIC | E65 | Regensensor |
| 46 0001 0370 | WIM_E65 | D_WIM | E65 | Wischermodul |
| 47 FFFF 0380 | ANT_E65 | D_ANTTU | E65 | Antennentuner |
| 4B FFFF 0390 | VID_E65 | D_VIDEO | E65 | Videomodul |
| 4C 0001 03A0 | TMF_E65 | D_TMFT | E65 | Türmodul Fahrer |
| 4D 0001 03B0 | TMB_E65 | D_TMBT | E65 | Türmodul Beifahrer |
| 4E 0001 03C0 | TMFHE65 | D_TMFTH | E65 | Türmodul Fahrer hinten |
| 4F 0001 03D0 | TMBHE65 | D_TMBTH | E65 | Türmodul Beifahrer hinten |
| 50 0001 03E0 | SINE_65 | D_SINE | E65 | DWA Sirene und Neigungsgeber |
| 60 0001 03F0 | KOMBI65 | D_KOMBI | E65 | Intrumentenkombi |
| 62 0000 0400 | MC_GW | D_MOSTGW | E65 | MOST/CAN-Gateway (im MMI) |
| 63 0000 0410 | MMI_GT | D_MMI | E65 | Mensch Maschine Interface Grafikteil |
| 64 0001 0420 | PDC_E65 | D_PDC | E65 | Park Distance Control |
| 65 0001 0430 | BZM_E65 | D_BZM | E65 | Bedienzentrum Mittelkonsole |
| 66 0001 0440 | BZMF_E65 | D_BZMF | E65 | Bedienzentrum Mittelarmlehne |
| 69 0000 0450 | FAH_E65 | D_FAH | E65 | Sitzmodul Fahrer hinten |
| 6A 0000 0450 | BFH_E65 | D_BFH | E65 | Sitzmodul Beifahrer hinten |
| 6B FFFF 0470 | HKL_E65 | D_HKL | E65 | Heckklappenlift |
| 6D 0000 0450 | FAS_E65 | D_FAS | E65 | Sitzmodul Fahrer |
| 6E 0000 0450 | BFS_E65 | D_BFS | E65 | Sitzmodul Beifahrer |
| 70 0001 04A0 | LM_E65 | D_LM | E65 | Lichtmodul |
| 71 FFFF 04B0 | AHM_E65 | D_AHM | E65 | Anhängermodul |
| 78 0000 04C0 | IHKA65 | D_KLIMA | E65 | Klimabedienteil Basis-Variante |
| 78 0001 04C0 | IHKA65 | D_KLIMA | E65 | Klimabedienteil High-Variante |
| 79 0000 0510 | HKA_E65 | D_KLIMA2 | E65 | Heck Klimaautomatik |
| 7A 0000 04D0 | SHZH_E65 | D_SHZH | E65 | Standheizung, Zuheizer |
| 37 0001 04E0 | EPS_E85 | D_EPS | E85 | Elektrische Lenkung |
