# D_RLS.grp

## General

|  |  |
| --- | --- |
| File | D_RLS.grp |
| Type | GRP |
| Jobs | 2 |
| Tables | 5 |
| Origin | BMW TI-430 Gramer |
| Revision | 1.106 |
| Author | BMW TI-430 Gramer |
| ECU Comment | RLS_E65,RLS_87,RLSS70 |

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
| ?04? | ERROR_ECU_INCORRECT_LIN_RESPONSE_ID |
| ?05? | ERROR_ECU_INCORRECT_LIN_LEN |
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
| ?9B? | ERROR_MOST_CAN_GATEWAY_DISABLE |
| ?9C? | ERROR_NO_P2MIN |
| ?9D? | ERROR_NO_P2MAX |
| ?9E? | ERROR_NO_P3MIN |
| ?9F? | ERROR_NO_P3MAX |
| ?A0? | ERROR_NO_P4MIN |
| ?B0? | ERROR_DIAG_PROT |
| ?B1? | ERROR_SG_ADRESSE |
| ?B2? | ERROR_SG_MAXANZAHL_AIF |
| ?B3? | ERROR_SG_GROESSE_AIF |
| ?B4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?B5? | ERROR_SG_AUTHENTISIERUNG |
| ?C0? | ERROR_TELEGRAM_LEN_OUT_OFF_RANGE |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

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
| 01 ---- 0A70 | SGM_60_2 | D_SIM | E60 | Sicherheits-und Gatewaymodul |
| 01 ---- 0B20 | ACSM60 | D_SIM | E60 | Airbag-Elektronik |
| 01 ---- 0E90 | ACSM60 | D_SIM | R56 | Airbag Steuergerät |
| 01 ---- 0CA0 | ACSM2 | D_SIM | E93 | Airbag-Elektronik |
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
| 07 ---- 0170 | SSFA | D_SSFA | E65 | Satellit Sitz Fahrer |
| 08 ---- 0180 | SSBF | D_SSBF | E65 | Satellit Sitz Beifahrer |
| 09 ---- 0190 | SBSL | D_SBSL | E65 | Satellit B-Säule links |
| 0A ---- 01A0 | SBSR | D_SBSR | E65 | Satellit B-Säule rechts |
| 0D ---- 01D0 | SSH | D_SSH | E65 | Satellit Sitz hinten |
| 0E ---- 01E0 | SFZ | D_SFZ | E65 | Satellit Fahrzeugzentrum |
| 0E ---- 0480 | SFZ60 | D_SFZ | E60 | Satellit Fahrzeugzentrum |
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
| 12 .44. 0001 | N73TU_R0 | D_MOTOR | E65 | Motorelektronik ME 9 12 Zylinder N73 Master TUE |
| 12 .1C. 0000 | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 0001 | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 000A | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 0010 | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .1C. 0011 | MS450DS0 | D_MOTOR | E60 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .2L. 0001 | MEV9N46L | D_MOTOR | E87 | Motorelektronik ME9.2 4 Zylinder N46 |
| 12 .2L. 0011 | MEV9N46L | D_MOTOR | E87 | Motorelektronik ME9.2 4 Zylinder N46 |
| 12 .2M. 0020 | ME9N62_2 | D_MOTOR | Morgan | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .2Q. 000E | ME9E65_6 | D_MOTOR | E60 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .2Q. 0014 | ME9N62 | D_MOTOR | E60 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .2Q. 0020 | ME9N62 | D_MOTOR | E60 | Motorelektronik ME 9  8 Zylinder N62 |
| 12 .2W. 000F | ME9N45 | D_MOTOR | E87 | Motorelektronik ME9.2 4 Zylinder N45 |
| 12 .32. 0000 | MSDA70 | D_MOTOR | E63 | Motorelektronik MS 70 6 Zylinder N54 |
| 12 .33. 0000 | MSD80 | D_MOTOR | E63 | Motorelektronik MS 80 6 Zylinder N53 |
| 12 .34. 0000 | MSV70 | D_MOTOR | E63 | Motorelektronik MS 70 6 Zylinder N52 |
| 12 .34. 0100 | MSV70 | D_MOTOR | E63 | Motorelektronik MS 70 6 Zylinder N52 |
| 12 .4Q. 0020 | ME9N62_2 | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 OBD05 |
| 12 0059 0010 | D50M57A0 | D_MOTOR | E65 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .59. 0010 | D50M57A0 | D_MOTOR | E65 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 005A 0010 | D51MM670 | D_MOTOR | E65 | Dieselelektronik DDE 5 8 Zylinder M67 Master |
| 12 .5A. 0010 | D51MM670 | D_MOTOR | E65 | Dieselelektronik DDE 5 8 Zylinder M67 Master |
| 12 .5A. 0011 | D51MM670 | D_MOTOR | E65 | Dieselelektronik DDE 5 8 Zylinder M67 Master |
| 12 .5Q. 0020 | N62_TUE | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 TUE |
| 12 .7Q. 0020 | N62_TUE | D_MOTOR | E65 | Motorelektronik ME 9  8 Zylinder N62 TUE |
| 12 .CE. 0000 | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 0001 | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 000A | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 0010 | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .CE. 0011 | MS450DS0 | D_MOTOR | E65 | Motorelektronik MS 45 6 Zylinder M54 |
| 12 .DV. 0020 | D60PSA0 | D_MOTOR | R56 | Dieselelektronik R56 PSA EU4 |
| 12 .JE. 0010 | D50M57C0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0011 | D50M57C0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0012 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0013 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0070 | D50M57D0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JE. 0071 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JF. 0010 | D50M57D0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JF. 0011 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JF. 0012 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JF. 0013 | D50M57E0 | D_MOTOR | E60 | Dieselelektronik DDE 5 6 Zylinder M57 |
| 12 .JY. 0000 | MS_S65 | D_MOTOR | E60 | Motorelektronik MS S65 10 Zylinder S85 MJ2005 |
| 12 .JY. 0001 | MS_S65_2 | D_MOTOR | E60 | Motorelektronik MS S65 10 Zylinder S85 MJ2006 |
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
| 12 .LR. 0010 | D60M57D0 | D_MOTOR | E60 | Dieselelektronik DDE 6 6 Zylinder M57 TOP |
| 12 .LR. 0011 | D60M57D0 | D_MOTOR | E60 | Dieselelektronik DDE 6 6 Zylinder M57 TOP |
| 12 .LR. 0020 | D60M57D0 | D_MOTOR | E53 | Dieselelektronik DDE 6 6 Zylinder M57 CSF |
| 12 .LS. 0010 | D62M57B0 | D_MOTOR | E65 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LS. 0011 | D62M57B0 | D_MOTOR | E60 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LS. 0012 | D62M57B0 | D_MOTOR | E90 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LS. 0020 | D62M57B0 | D_MOTOR | E60 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LS. 0030 | D62M57B0 | D_MOTOR | E90 | Dieselelektronik DDE 6 6 Zylinder M57 TÜ2 |
| 12 .LT. 0010 | D63MM670 | D_MOTOR | E65 | Dieselelektronik DDE 6 8 Zylinder M67 TÜ Master |
| 12 .LT. 0011 | D63MM670 | D_MOTOR | E65 | Dieselelektronik DDE 6 8 Zylinder M67 TÜ Master |
| 12 .MW. 0000 | MSV80 | D_MOTOR | E63 | Motorelektronik MS 80 6 Zylinder N51 |
| 12 .NE. 0010 | D60TMCA | D_MOTOR | R50 | Dieselelektronik R50 TMC EU4 |
| 12 .NE. 0020 | D60PSA0 | D_MOTOR | R56 | Dieselelektronik R56 PSA EU4 |
| 12 .PL. 0001 | MEV17_2 | D_MOTOR | R56 | Motorelektronik ME V17 VVT |
| 12 .PL. 0010 | MEV17_2 | D_MOTOR | R56 | Motorelektronik ME V17 VVT |
| 12 .PK. 0001 | MED17_2 | D_MOTOR | R56 | Motorelektronik ME V17 GDI |
| 12 .PK. 0010 | MED17_2 | D_MOTOR | R56 | Motorelektronik ME V17 GDI |
| 12 .WA. 0010 | D71N47A0 | D_MOTOR | E90 | Dieselelektronik DDE 6 4 Zylinder N47 uL |
| 12 .WB. 0010 | D71N47A0 | D_MOTOR | E90 | Dieselelektronik DDE 6 4 Zylinder N47 oL |
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
| 16 ---- 0500 | AFS_60 | D_AFS | E60 | Aktiv Front Steering |
| 16 ---- 0970 | AFS_90 | D_AFS | E90 | Aktiv Front Steering |
| 16 ---- 0C60 | AFS_70 | D_AFS | E70 | Aktiv Front Steering |
| 17 ---- 0610 | EKP_60 | D_EKP | E60 | Elektrische Kraftstoffpumpe |
| 17 ---- 0611 | EKPM60_2 | D_EKP | E60 | Elektrische Kraftstoffpumpe 2. Generation |
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
| 19 ---- 0950 | VGSG90 | D_VGSG | E90 | Verteilergetriebe Steuergerät |
| 19 ---- 0D60 | VGSG70 | D_VGSG | E70 | Verteilergetriebe Steuergerät |
| 1B .91. 000A | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 4 Zylinder N42 |
| 1B .92. 000A | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 8 Zylinder N62 |
| 1B .92. 0014 | VVT_B1_0 | D_VVT | E65 | Variabler Ventiltrieb Bank 1 8 Z. N62, 12 Zyl. N73 |
| 1C ---- 0A90 | LDM_90 | D_LDM | E90 | Längs Dynamik Management |
| 1C ---- 0D50 | LDM_60 | D_LDM | E60 | Längs Dynamik Management |
| 1D ---- 0AA0 | FFP_90 | D_FFP | E90 | Force Feedback Paddle |
| 1E .92. 000A | VVT_B2_0 | D_VVT2 | E65 | Variabler Ventiltrieb Bank 2 8 Zylinder N62 |
| 1E .92. 0014 | VVT_B2_0 | D_VVT2 | E65 | Variabler Ventiltrieb Bank 2 8 Z. N62, 12 Zyl. N73 |
| 20 ---- 0230 | RDC_E65 | D_RDC | E65 | Reifen Druck Control |
| 20 ---- 0560 | RDC_60 | D_RDC | E60 | Reifen Druck Control |
| 21 ---- 0240 | ACC_E65 | D_ACC | E65 | Adaptive Cruise Control |
| 21 ---- 0B60 | ACC2 | D_ACC | E60 | Adaptive Cruise Control 2.Generation |
| 21 ---- 0D30 | LRR_60 | D_ACC | E60 | ACC Long Range Sensor |
| 22 ---- 05F0 | ALC_60 | D_ALC | E60 | Adaptive Lichtsteuerung |
| 23 ---- 0250 | ARS_E65 | D_ARS | E65 | Aktive Rollstabilisierung |
| 23 ---- 0251 | ARS_60 | D_ARS | E60 | Aktive Rollstabilisierung |
| 23 ---- 0252 | ARS_70 | D_ARS | E70 | Aktive Rollstabilisierung |
| 24 ---- 0600 | CVM_64 | D_CVM | E64 | Cabrio Verdeck Modul |
| 24 ---- 0CD0 | CTM_93 | D_CVM | E93 | Cabrio Top Modul nur JEX |
| 24 ---- 0CD1 | CTM_93_2 | D_CVM | E93 | Cabrio Top Modul nur PPP |
| 24 ---- 0CD2 | CTM_93_3 | D_CVM | E93 | Cabrio Top Modul |
| 26 ---- 0C70 | RSE_70 | D_RSE | E70 | Rear Seat Entertainment |
| 27 ---- 0260 | PGS_E65 | D_PGS | E65 | Passive Go System |
| 27 ---- 0261 | PGS_65_2 | D_PGS | E65 | Passive Go System |
| 27 ---- 0ED0 | PGS_56 | D_PGS | R56 | Passive Go System 2 |
| 29 ---- 0270 | DSC_E65 | D_DSC | E65 | Dynamische Stabilitätskontrolle |
| 29 ---- 05B0 | DSC_87 | D_DSC | E87 | Dynamische Stabilitätskontrolle MK60 |
| 29 ---- 05B1 | DSC_87 | D_DSC | E87 | Dynamische Stabilitätskontrolle MK60E5 DSC+ |
| 29 ---- 05B2 | DSC_87 | D_DSC | E60 | Dynamische Stabilitätskontrolle MK60E5 M5 |
| 29 ---- 0620 | DSC_60 | D_DSC | E60 | Dynamische Stabilitätskontrolle |
| 29 ---- 0621 | DSC_60 | D_DSC | E60 | Dynamische Stabilitätskontrolle mit AFS |
| 29 ---- 0EE0 | DSC_56 | D_DSC | R56 | Dynamische Stabilitätskontrolle TRWEBC450 |
| 29 ---- 0EE1 | DSC_56 | D_DSC | R56 | ASC TRWEBC450 |
| 29 ---- 0EE2 | DSC_56 | D_DSC | R56 | ABS TRWEBC450 |
| 29 ---- 0BC0 | DXC8_P | D_DSC | E60 | Dynamische Stabilitätskontrolle Allrad |
| 29 ---- 0BC1 | DXC_90 | D_DSC | E90 | Dynamische Stabilitätskontrolle Allrad |
| 29 ---- 0BC2 | DXC8_P | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus mit Allrad |
| 29 ---- 0BC3 | DXC8_P | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus |
| 29 ---- 0BC4 | DXC8_P | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus mit AFS |
| 29 ---- 0BC5 | DXC_70 | D_DSC | E70 | Dynamische Stabilitätskontrolle EHB_3 Allrad |
| 29 ---- 0BC6 | DXC_90 | D_DSC | E90 | Dynamische Stabilitätskontrolle |
| 29 ---- 0D10 | DSC_60PP | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus Plus EHB |
| 29 ---- 0D11 | DSC_60PP | D_DSC | E60 | Dynamische Stabilitätskontrolle Plus Plus EHB Allrad |
| 2A ---- 0280 | EMF_E65 | D_EMF | E65 | Elektromechanische Feststellbremse |
| 2A ---- 0D10 | EMF_70 | D_EMF | E70 | Elektromechanische Feststellbremse |
| 30 ---- 0940 | EPS_90 | D_EPS | E90 | Elektrische Lenkung |
| 30 ---- 0D20 | EPS_56 | D_EPS | R56 | Elektrische Lenkung |
| 31 ---- 04F0 | MMC_E65 | D_MMC | E65 | Multimedia Changer |
| 31 ---- 04F1 | MMC_65_2 | D_MMC | E65 | Multimedia Changer |
| 32 ---- 0660 | MMIFC | D_MMIFC | E66 | MOST/CAN-Gateway (im Fond MMI) |
| 34 ---- 0670 | MMI_GTF | D_MMIF | E66 | Mensch Maschine Interface Grafikteil Fond |
| 34 ---- 0810 | MMI_GTF | D_MMIF | RR1 | Mensch Maschine Interface hinten |
| 35 ---- 0530 | SVS_E65 | D_SVS | E65 | Sprachverarbeitungssystem |
| 35 ---- 08F0 | SVS_60 | D_SVS | E60 | Sprachverarbeitungssystem (im CCC) |
| 36 ---- 0290 | TEL_ECE | D_TEL | E65 | Telefon ECE Variante |
| 36 ---- 0298 | TEL_USA | D_TEL | E65 | Telefon US Variante |
| 36 ---- 0630 | TELE60 | D_TEL | E60 | Telefon ECE Variante |
| 36 ---- 0631 | TELE60_2 | D_TEL | E60 | Telefon ECE,US,Japan Variante |
| 36 ---- 0632 | TELE60_3 | D_TEL | E60 | Telefon ECE,US,Japan Variante |
| 36 ---- 0640 | TELE60 | D_TEL | E60 | Telefon US Variante |
| 36 ---- 0650 | TELE60 | D_TEL | E60 | Telefon Japan Variante |
| 36 ---- 0A80 | ULF_60 | D_TEL | E60 | Universelle Lade- Freisprecheinrichtung |
| 36 ---- 0F00 | ULF2_60 | D_TEL | E60 | Universelle Lade- Freisprecheinrichtung |
| 37 ---- 02A0 | AMP_E65 | D_AMP | E65 | Top HIFI Verstärker |
| 37 ---- 0670 | AMP_60 | D_AMP | E60 | Top HIFI Verstärker |
| 37 ---- 0E40 | AMPT70 | D_AMP | E70 | Top HIFI Verstärker |
| 37 ---- 0E50 | AMPH70 | D_AMP | E70 | HIFI Verstärker |
| 37 ---- 0D00 | AMPH56 | D_AMP | R56 | HIFI Verstärker |
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
| 3B ---- 0875 | KNAV60 | D_NAV | E60 | Korea Navigation |
| 3B ---- 087A | CNAV60 | D_NAV | E60 | China Navigation |
| 3B ---- 0B00 | NAVL60 | D_NAV | E60 | Navigation ECE/US Low (im MASK) |
| 3B ---- 0B30 | NAV_E65 | D_NAV | RR1 | Navigation ECE/US |
| 3B ---- 0DC0 | NAVMASK2 | D_NAV | E70 | Navigation (im MASK2) |
| 3C ---- 02F0 | CDC_E65 | D_CDC | E65 | Audio CD-Changer |
| 3D ---- 0680 | HUD_60 | D_HUD | E60 | Head-Up-Display |
| 3D ---- 0D50 | HUD_70 | D_HUD | E70 | Head-Up-Display |
| 3E ---- 07D0 | ADP_RR | D_ADP | RR1 | Audio Display Panel |
| 3F ---- 0300 | ASK_E65 | D_ASK | E65 | Audio System Kontroller |
| 3F ---- 0A00 | ASK_60 | D_ASK | E60 | Audio System Kontroller (im CCC) |
| 40 ---- 0310 | CAS | D_CAS | E65 | Car Access System |
| 40 ---- 0690 | CAS | D_CAS | E60 | Car Access System 2 |
| 40 ---- 06A0 | CAS | D_CAS | E87 | Car Access System 2 |
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
| 45 ---- 0B70 | RLS_56 | D_RLS | R56 | Regen- Lichtsensor |
| 46 ---- 0370 | WIM_E65 | D_WIM | E65 | Wischermodul |
| 47 ---- 0380 | ANT_E65 | D_ANTTU | E65 | Antennentuner |
| 47 ---- 06D0 | ANT_60 | D_ANTTU | E60 | Antennentuner im CCC |
| 48 ---- 0F10 | VSW_70 | D_VSW | E70 | Viedo Switch für Japan Kamera |
| 49 ---- 0890 | SECUR1 | D_SECUR1 | E67 | Sicherheitsfahrzeugmodul 1 |
| 4A ---- 08A0 | SECUR2 | D_SECUR2 | E67 | Sicherheitsfahrzeugmodul 2 |
| 4B ---- 0390 | VID_E65 | D_VIDEO | E65 | Videomodul ECE |
| 4B ---- 0391 | VID_E65 | D_VIDEO | E65 | Videomodul RGB ohne Navigation |
| 4B ---- 0392 | VID_E65 | D_VIDEO | E65 | Videomodul vorne und hinten |
| 4B ---- 0393 | VID_E65 | D_VIDEO | E65 | Videomodul Videoswitch |
| 4B ---- 0398 | VID_65_2 | D_VIDEO | E65 | Videomodul Hybrid FBAS |
| 4B ---- 0399 | VID_65_2 | D_VIDEO | E65 | Videomodul Hybrid vorne und hinten |
| 4C ---- 03A0 | TMF_E65 | D_TMFT | E65 | Türmodul Fahrer |
| 4C ---- 03A1 | TMF_E65 | D_TMFT | E65 | Türmodul Fahrer |
| 4D ---- 03B0 | TMB_E65 | D_TMBT | E65 | Türmodul Beifahrer |
| 4D ---- 03B1 | TMB_E65 | D_TMBT | E65 | Türmodul Beifahrer |
| 4E ---- 03C0 | TMFHE65 | D_TMFTH | E65 | Türmodul Fahrer hinten |
| 4E ---- 03C1 | TMFHE65 | D_TMFTH | E65 | Türmodul Fahrer hinten |
| 4F ---- 03D0 | TMBHE65 | D_TMBTH | E65 | Türmodul Beifahrer hinten |
| 4F ---- 03D1 | TMBHE65 | D_TMBTH | E65 | Türmodul Beifahrer hinten |
| 50 ---- 03E0 | SINE_65 | D_SINE | E65 | DWA Sirene und Neigungsgeber |
| 53 ---- 0460 | IBOC60 | D_IBOC | E60 | Digital Tuner US |
| 54 ---- 0860 | SAT_60 | D_RADIO | E60 | Satellitenradio US |
| 55 ---- 0E10 | ISPB70 | D_ISPB | E70 | Sprachverarbeitungssystem |
| 56 ---- 05A0 | FZD_87 | D_FZD | E87 | Funktionszentrum Dach |
| 56 ---- 0D70 | FZD_70 | D_FZD | E70 | Funktionszentrum Dach |
| 56 80 ---- 0B70 | RLS_87 | D_RLS | E87 | Regen- Lichtsensor |
| 57 ---- 01B0 | NVE_65 | D_NVE | E65 | Night Vision Steuergerät |
| 58 ---- 0B40 | ADPFRR | D_ADPF | RR1 | Audio Display Panel hinten |
| 59 ---- 0B80 | ALBV60F | D_ALBVF | E60 | Aktive Lehnenbreitenverstellung Fahrer |
| 5A ---- 0B80 | ALBV60B | D_ALBVB | E60 | Aktive Lehnenbreitenverstellung Beifahrer |
| 5B ---- 0850 | DAB_60 | D_DAB | E60 | Digital Tuner ECE |
| 5C ---- 0C20 | BEHO60 | D_BEHO | E60 | Behördenmodul |
| 5E ---- 0E30 | GWS_70 | D_GWS | E70 | Gangwahlschalter |
| 5F ---- 0C10 | FLA_65 | D_FLA | E65 | Fernlicht Assistent |
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
| 62 ---- 0400 | MC_GW | D_MOSTGW | E65 | MOST/CAN-Gateway (im MMI) |
| 62 ---- 0590 | MCGW60 | D_MOSTGW | E60 | MOST/CAN-Gateway (im MASK) |
| 62 ---- 0830 | MC_GW | D_MOSTGW | RR1 | MOST/CAN-Gateway (im MMI) |
| 62 ---- 09D0 | CCCG60 | D_MOSTGW | E60 | MOST/CAN-Gateway (im CCC) |
| 62 ---- 0AC0 | RAD2_GW | D_MOSTGW | E87 | MOST/CAN-Gateway (im Radio Stufe 2) |
| 62 ---- 0D80 | MASK2GW | D_MOSTGW | E70 | MOST/CAN-Gateway (im MASK2) |
| 62 ---- 0D90 | CHAMPGW | D_MOSTGW | E70 | MOST/CAN-Gateway (im Champ) |
| 63 ---- 0410 | MMI_GT | D_MMI | E65 | Mensch Maschine Interface Grafikteil |
| 63 ---- 06F0 | CCC_60 | D_MMI | E60 | Car Comunication Computer |
| 63 ---- 0700 | MASK60 | D_MMI | E60 | MMI Audio System Kontroller |
| 63 ---- 0800 | MMI_GT | D_MMI | RR1 | Mensch Maschine Interface |
| 63 ---- 0900 | RAD1 | D_MMI | E87 | Radio Stufe 1 |
| 63 ---- 0910 | RAD2 | D_MMI | E87 | Radio Stufe 2 |
| 63 ---- 0DA0 | MASK2 | D_MMI | E70 | Audio System Kontroller MASK2 |
| 63 ---- 0DB0 | CHAMP | D_MMI | E70 | Audio System Kontroller CHAMP |
| 64 ---- 0420 | PDC_E65 | D_PDC | E65 | Park Distance Control |
| 64 ---- 0421 | PDC_65_2 | D_PDC | E65 | Park Distance Control |
| 64 ---- 09E0 | PDC_87 | D_PDC | E87 | Park Distance Control |
| 65 ---- 0430 | BZM_E65 | D_BZM | E65 | Bedienzentrum Mittelkonsole |
| 65 ---- 0710 | SZM_60 | D_BZM | E60 | Schaltzentrum Mittelkonsole |
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
| 67 ---- 0D20 | ZBE_56 | D_EC | R56 | Zentrale Bedieneinheit |
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
| 72 ---- 05C0 | FRM_87 | D_KBM | E87 | Fussraum Modul Fahrerseite |
| 72 ---- 05C1 | FRM_87 | D_KBM | E90 | Fussraum Modul Fahrerseite |
| 72 ---- 0E60 | FRM_70 | D_KBM | E70 | Fussraum Modul Fahrerseite |
| 72 ---- 0730 | KBM_60 | D_KBM | E60 | Karosserie Basis Modul |
| 73 ---- 0740 | CID_60 | D_CID | E60 | Zentrales Info Display |
| 73 ---- 07E0 | CID_60 | D_CID | RR1 | Central Information Display |
| 73 ---- 0A30 | CID_90 | D_CID | E90 | Zentrales Info Display |
| 73 ---- 0A40 | CID_87 | D_CID | E87 | Zentrales Info Display |
| 73 ---- 0CE0 | CID_70 | D_CID | E70 | Zentrales Info Display |
| 74 ---- 0770 | CIDF65 | D_CIDF | E60 | Zentrales Info Display hinten |
| 74 ---- 0980 | CIDF65 | D_CIDF | E65 | Zentrales Info Display hinten |
| 74 ---- 09A0 | CIDF65 | D_CIDF | RR1 | Zentrales Info Display hinten links |
| 74 ---- 0CB0 | RSEH65 | D_CIDF | E65 | Rear Seat Entertainment |
| 74 ---- 0EC0 | FOMO70 | D_CIDF | E70 | Fondmonitor |
| 75 ---- 09B0 | CIDF2RR | D_CIDF2 | RR1 | Zentrales Info Display hinten rechts |
| 77 ---- 0E80 | RFK_70 | D_RFK | E70 | Rückfahrkamera-System |
| 78 ---- 04C0 | IHKA65 | D_KLIMA | E65 | Klimabedienteil |
| 78 ---- 05D0 | IHKA87 | D_KLIMA | E87 | Klimaautomatik |
| 78 ---- 0660 | IHKARR | D_KLIMA | RR1 | Klimabedienteil |
| 78 ---- 0D40 | IHKARR2 | D_KLIMA | RR2 | Klimabedienteil |
| 78 ---- 0790 | IHKA60 | D_KLIMA | E60 | Klimabedienteil |
| 78 ---- 0791 | IHKA60 | D_KLIMA | E60 | Klimabedienteil |
| 78 ---- 0880 | IHKR90 | D_KLIMA | E90 | Klimaregelung |
| 78 ---- 08B0 | IHR_87 | D_KLIMA | E87 | Heizungsregelung |
| 78 ---- 0D30 | IHKA70 | D_KLIMA | E70 | Klimaautomatik |
| 78 ---- 0DE0 | IHS_56 | D_KLIMA | R56 | Heizungssteuerung |
| 78 ---- 0DF0 | IHKS56 | D_KLIMA | R56 | Klimasteuerung |
| 78 ---- 0E00 | IHKA56 | D_KLIMA | R56 | Klimaautomatik |
| 79 ---- 0510 | HKA_E65 | D_KLIMA2 | E65 | Heck Klimaautomatik |
| 79 ---- 0D40 | FKA_70 | D_KLIMA2 | E70 | Fond Klimaautomatik |
| 7A ---- 04D0 | SHZH_E65 | D_SHZH | E65 | Standheizung, Zuheizer |
| 7A ---- 0760 | SHZH_E65 | D_SHZH | E60 | Standheizung, Zuheizer |
| 8B ---- 0C90 | NVC_65 | D_NVC | E65 | Night Vision Kamera |
| A0 ---- 0930 | CCCA60 | D_CCC | E60 | CCC Applikation |
| A0 ---- 0938 | CCCA60J | D_CCC | E60 | CCC Applikation Japan |
| A1 ---- 0220 | SBSL85 | D_SBSL2 | E60 | Satellit B-Säule links |
| A1 ---- 0A50 | SBSL85 | D_SBSL2 | E64 | Satellit B-Säule links |
| A2 ---- 0460 | SBSR85 | D_SBSR2 | E60 | Satellit B-Säule rechts |
| A2 ---- 0A60 | SBSR85 | D_SBSR2 | E64 | Satellit B-Säule rechts |
| A5 ---- 0C00 | EDCSVL | D_EDCSVL | E70 | Elektronischer Dämpfersatellit vorne links |
| A6 ---- 0C00 | EDCSVR | D_EDCSVR | E70 | Elektronischer Dämpfersatellit hinten rechts |
| A7 ---- 0C00 | EDCSHL | D_EDCSHL | E70 | Elektronischer Dämpfersatellit vorne links |
| A8 ---- 0C00 | EDCSHR | D_EDCSHR | E70 | Elektronischer Dämpfersatellit hinten rechts |
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
| ?? ---- 0F20 |  |  | E?? |  |
| ?? ---- 0F30 |  |  | E?? |  |
| ?? ---- 0F40 |  |  | E?? |  |
| ?? ---- 0F50 |  |  | E?? |  |
| ?? ---- 0F60 |  |  | E?? |  |
| ?? ---- 0F70 |  |  | E?? |  |
| ?? ---- 0F80 |  |  | E?? |  |
| ?? ---- 0F90 |  |  | E?? |  |
| ?? ---- 0FA0 |  |  | E?? |  |
| ?? ---- 0FB0 |  |  | E?? |  |
| ?? ---- 0FC0 |  |  | E?? |  |
| ?? ---- 0FD0 |  |  | E?? |  |
| ?? ---- 0FE0 |  |  | E?? |  |
| ?? ---- 0FF0 |  |  | E?? |  |
| ?? ---- 1000 |  |  | E?? |  |
| ?? ---- 1010 |  |  | E?? |  |
| ?? ---- 1020 |  |  | E?? |  |
| ?? ---- 1030 |  |  | E?? |  |
| ?? ---- 1040 |  |  | E?? |  |
| ?? ---- 1050 |  |  | E?? |  |
| ?? ---- 1060 |  |  | E?? |  |
| ?? ---- 1070 |  |  | E?? |  |
| ?? ---- 1080 |  |  | E?? |  |
| ?? ---- 1090 |  |  | E?? |  |
| ?? ---- 10A0 |  |  | E?? |  |
| ?? ---- 10B0 |  |  | E?? |  |
| ?? ---- 10C0 |  |  | E?? |  |
| ?? ---- 10D0 |  |  | E?? |  |
| ?? ---- 10E0 |  |  | E?? |  |
| ?? ---- 10F0 |  |  | E?? |  |

### ZUORDNUNGSTABELLEMOTORRAD

| ADR_VAR_DIAG | SGBD | GRUPPE | STEUERGERAET |
| --- | --- | --- | --- |
| 12 ---- 6000 | MRBMSK | D_MRMOT | Motorrad Motorsteuergerät K24 |
| 12 ---- 0005 | MRBMSC2 | D_MRMOT | Motorrad Motorsteuergerät 1 Zylinder |
| 60 ---- 6100 | MRKOMBI | D_MRKOMB | Motorrad Instrumentenkombi |
| 72 ---- 6200 | MRZFEL | D_MRZFE | Motorrad Zentrale Fahrgestellelektronik Low |
| 72 ---- 6300 | MRZFEH | D_MRZFE | Motorrad Zentrale Fahrgestellelektronik High |
| 72 ---- 6A00 | MRZFEB | D_MRZFE | Motorrad Zentrale Fahrgestellelektronik Basic |
| 29 ---- 6400 | MRIABS | D_MRABS | Motorrad Integral ABS |
| 29 ---- 6B00 | MRIABS2 | D_MRABS | Motorrad Integral ABS2 |
| 41 ---- 6500 | MRDWA | D_MRDWA | Motorrad Diebstahlwarnanlage |
| 47 ---- 6700 | MRRAD | D_MRRAD | Motorrad Radio |
| 73 ---- 6600 | MRRBT | D_MRRBT | Motorrad Radiobedienteil |
| 60 ---- 6800 | MRKOMB71 | D_MRKOMB | Motorrad Instrumentenkombi K7x |
| 29 ---- 6900 | MRABS | D_MRABS | Motorrad Bosch ABS |
| ?? ---- 6C00 |  |  |  |
| ?? ---- 6D00 |  |  |  |
| ?? ---- 6E00 |  |  |  |
| ?? ---- 6F00 |  |  |  |

### ZUORDNUNGSTABELLEUDS

| ADR_INDEX | SGBD | GRUPPE | BAUREIHE | STEUERGERAET |
| --- | --- | --- | --- | --- |
| 40 0F1000 | CAS4 | G_CAS | F01 | Car Access System 4 |
| ?? 0F1010 |  |  | F01 |  |
| ?? 0F1020 |  |  | F01 |  |
| ?? 0F1030 |  |  | F01 |  |
| ?? 0F1040 |  |  | F01 |  |
| ?? 0F1050 |  |  | F01 |  |
| ?? 0F1060 |  |  | F01 |  |
| ?? 0F1070 |  |  | F01 |  |
| ?? 0F1080 |  |  | F01 |  |
| ?? 0F1090 |  |  | F01 |  |
| ?? 0F10A0 |  |  | F01 |  |
| ?? 0F10B0 |  |  | F01 |  |
| ?? 0F10C0 |  |  | F01 |  |
| ?? 0F10D0 |  |  | F01 |  |
| ?? 0F10E0 |  |  | F01 |  |
| ?? 0F10F0 |  |  | F01 |  |
| ?? 0F1100 |  |  | F01 |  |
| ?? 0F1110 |  |  | F01 |  |
