# d_pgo.grp

## General

|  |  |
| --- | --- |
| File | d_pgo.grp |
| Type | GRP |
| Jobs | 0 |
| Tables | 2 |

## Info

_No INFO results._

## Jobs

_No jobs._

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
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
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
| ?8A? | ERROR_LARGE_UIF_FOUND |
| ?8B? | ERROR_SMALL_UIF_FOUND |
| ?8C? | ERROR_NO_FREE_UIF |
| ?8D? | ERROR_MAX_UIF |
| ?8E? | ERROR_LEVEL |
| ?8F? | ERROR_KEY |
| ?90? | ERROR_AUTHENTICATION |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### GRUPPENDATEIIDENTIFIKATION

| ADR_DIAG | SGBD | GRUPPE | STEUERGERAET |
| --- | --- | --- | --- |
| 00  0100 | ZGM_E65 | D_ZGM | Zentrales Gatewaymodul |
| 01  0110 | SIM | D_SIM | Sicherheits- Informationsmodul |
| 02  0120 | SZL | D_SZL | Satellit Lenksäule |
| 03  0130 | SASL | D_SASL | Satellit A-Säule links |
| 04  0140 | SASR | D_SASR | Satellit A-Säule rechts |
| 05  0150 | STVL | D_STVL | Satellit Tür vorne links |
| 06  0160 | STVR | D_STVR | Satellit Tür vorne rechts |
| 07  0170 | SSFA | D_SSFA | Satellit Sitz Fahrer |
| 08  0180 | SSBF | D_SSBF | Satellit Sitz Beifahrer |
| 09  0190 | SBSL | D_SBSL | Satellit B-Säule links |
| 0A  01A0 | SBSR | D_SBSR | Satellit B-Säule rechts |
| 0B  01B0 | SCSL | D_SCSL | Satellit C-Säule links |
| 0C  01C0 | SCSR | D_SCSR | Satellit C-Säule rechts |
| 0D  01D0 | SSH | D_SSH | Satellit Sitz hinten |
| 0E  01E0 | SFZ | D_SFZ | Satellit Fahrzeugzentrum |
| 12  01F0 | ME9 | D_MOTOR | Motorelektronik ME 9 |
| 18  0200 | GS19 | D_EGS | Getriebesteuergerät GS19 |
| 1B  0210 | VVT_14 | D_VVT | Variabler Vertiltrieb Bank 1-4 |
| 1E  0220 | VVT_58 | D_VVT2 | Variabler Vertiltrieb Bank 5-8 |
| 20  0230 | RDC_E65 | D_RDC | Reifen Druck Control |
| 21  0240 | ACC_E65 | D_ACC | Adaptive Cruise Control |
| 23  0250 | ARS_E65 | D_ARS | Aktive Rollstabilisierung |
| 27  0260 | PGO_E65 | D_PGO | Passive Go |
| 29  0270 | DSC_E65 | D_DSC | Dynamische Stabilitätskontrolle |
| 2A  0280 | EMF_E65 | D_EMF | Elektromechanische Feststellbremse |
| 36  0290 | CCM_E65 | D_TEL | Telefon |
| 37  02A0 | AMP_E65 | D_AMP | Top HIFI Verstärker |
| 38  02B0 | LUF_E65 | D_EHC | Luftfeder |
| 39  02C0 | EDC_K | D_EDC | Elektronische Dämpferkontrolle |
| 3A  02D0 | KHI_E65 | D_KHI | Kopfhöhrer Interface |
| 3B  02E0 | NAV_E65 | D_NAV | Navigation |
| 3C  02F0 | CDC_E65 | D_CDC | Audio CD-Changer |
| 3F  0300 | ASK_E65 | D_ASK | Audio System Kontroller |
| 40  0310 | CAS | D_CAS | Car Access System |
| 41  0320 | DWA_E65 | D_DWA | Diebstahlwarnanlage |
| 42  0330 | CIM | D_CIM | Chassis Integration Modul |
| 43  0340 | POW_E65 | D_POW | Powermodul |
| 44  0350 | SHD_E65 | D_SHD | Schiebehebedach |
| 45  0360 | AIC_E65 | D_AIC | Regensensor |
| 46  0370 | WIM_E65 | D_WIM | Wischermodul |
| 47  0380 | ANT_E65 | D_ANTTU | Antennentuner |
| 4B  0390 | VID_E65 | D_VIDEO | Videomodul |
| 4C  03A0 | TMFT_E65 | D_TMFT | Türmodul Fahrer |
| 4D  03B0 | TMBT_E65 | D_TMBT | Türmodul Beifahrer |
| 4E  03C0 | TMFTHE65 | D_TMFTH | Türmodul Fahrer hinten |
| 4F  03D0 | TMBTHE65 | D_TMBTH | Türmodul Beifahrer hinten |
| 50  03E0 | SINE_65 | D_SINE | DWA Sirene und Neigungsgeber |
| 60  03F0 | KOMBI65 | D_KOMBI | Intrumentenkombi |
| 62  0400 | MC_GW | D_MOSTGW | MOST/CAN-Gateway (im MMI) |
| 63  0410 | MMI_GT | D_MMI | Mensch Maschine Interface Grafikteil |
| 64  0420 | PDC_E65 | D_PDC | Park Distance Control |
| 65  0430 | BZM_E65 | D_BZM | Bedienzentrum Mittelkonsole |
| 66  0440 | BZMF_65 | D_BZMF | Bedienzentrum Mittelarmlehne |
| 69  0450 | FAH_E65 | D_FAH | Sitzmodul Fahrer hinten |
| 6A  0460 | BFH_E65 | D_BFH | Sitzmodul Beifahrer hinten |
| 6B  0470 | HKL_E65 | D_HKL | Heckklappenlift |
| 6D  0480 | FAS_E65 | D_FAS | Sitzmodul Fahrer |
| 6E  0490 | BFS_E65 | D_BFS | Sitzmodul Beifahrer |
| 70  04A0 | LSM_E65 | D_LSM | Lichtschaltmodul |
| 71  04B0 | AHM_E65 | D_AHM | Anhängermodul |
| 78  04C0 | IHKA65 | D_KLIMA | Klimabedienteil |
| 7A  04D0 | SHZH_E65 | D_SHZH | Standheizung, Zuheizer |
