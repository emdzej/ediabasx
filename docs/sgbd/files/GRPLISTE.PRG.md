# GRPLISTE.PRG

## General

|  |  |
| --- | --- |
| File | GRPLISTE.PRG |
| Type | PRG |
| Jobs | 5 |
| Tables | 2 |
| Origin | BMW TI-430 Drexel |
| Revision | 1.12 |
| Author | BMW TI-430 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Gruppendatei-Listen |  |  |
| ORIGIN | string | BMW TI-430 Drexel |  |  |
| REVISION | string | 1.12 |  |  |
| AUTHOR | string | BMW TI-430 Drexel |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.32 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung

_No arguments._

### GRUPPENDATEI_LISTE

Ausgabe der gesamten Gruppendatei-Liste Im letzten Satz steht der JOB_STATUS Im den vorigen Saetzen steht eine GRUPPENDATEI

_No arguments._

### GRUPPENDATEI_ERZEUGE_LISTE_AUS_DATEN

Gruppendatei-Daten nach Gruppendatei-Liste Im letzten Satz steht der JOB_STATUS Im den vorigen Saetzen steht eine GRUPPENDATEI Wird das Argument SINGLERESULTFLAG ubergeben wird nur ein Ergebnissatz erzeugt Die Gruppendateien werden dann durch ',' getrennt

| Name | Type | Description |
| --- | --- | --- |
| DATEN | string | Datenbeschreibung: 32 - Byte Daten 2-stellig hex Byte 0     : Versionshauptnummer beginnend mit 1 HEX Byte 1     : Versionsunternummer beginnend mit 0 HEX Byte 2     : Anzahl Gruppendateien (max 232=0xE8) HEX Byte 3..31 : Gruppendatei-Daten |
| SINGLERESULTFLAG | string | ja, wenn nicht '' |

### GRUPPENDATEI_ERZEUGE_DATEN_AUS_LISTE

Gruppendatei-Liste nach Gruppendatei-Daten

| Name | Type | Description |
| --- | --- | --- |
| GRUPPENDATEI | string | Gruppendateien getrennt durch ' ' oder ','" Gruppendatei_1,Gruppendatei_2 Gruppendatei_n |

## Tables

### GRUPPENLISTEVERSION1

| GRUPPE | NR |
| --- | --- |
| d_0000 | 0x00 |
| d_0008 | 0x01 |
| d_000d | 0x02 |
| d_0010 | 0x03 |
| d_0011 | 0x04 |
| d_0012 | 0x05 |
| d_0013 | 0x06 |
| d_0014 | 0x07 |
| d_0015 | 0x08 |
| d_0016 | 0x09 |
| d_0020 | 0x0A |
| d_0021 | 0x0B |
| d_0022 | 0x0C |
| d_0024 | 0x0D |
| d_0028 | 0x0E |
| d_002c | 0x0F |
| d_002e | 0x10 |
| d_0030 | 0x11 |
| d_0032 | 0x12 |
| d_0035 | 0x13 |
| d_0036 | 0x14 |
| d_003b | 0x15 |
| d_0040 | 0x16 |
| d_0044 | 0x17 |
| d_0045 | 0x18 |
| d_0050 | 0x19 |
| d_0056 | 0x1A |
| d_0057 | 0x1B |
| d_0059 | 0x1C |
| d_005a | 0x1D |
| d_005b | 0x1E |
| d_0060 | 0x1F |
| d_0068 | 0x20 |
| d_0069 | 0x21 |
| d_006a | 0x22 |
| d_006c | 0x23 |
| d_0070 | 0x24 |
| d_0071 | 0x25 |
| d_0072 | 0x26 |
| d_007f | 0x27 |
| d_0080 | 0x28 |
| d_0086 | 0x29 |
| d_0099 | 0x2A |
| d_009a | 0x2B |
| d_009b | 0x2C |
| d_009c | 0x2D |
| d_009d | 0x2E |
| d_009e | 0x2F |
| d_00a0 | 0x30 |
| d_00a4 | 0x31 |
| d_00a6 | 0x32 |
| d_00a7 | 0x33 |
| d_00ac | 0x34 |
| d_00b0 | 0x35 |
| d_00b9 | 0x36 |
| d_00bb | 0x37 |
| d_00c0 | 0x38 |
| d_00c8 | 0x39 |
| d_00cd | 0x3A |
| d_00d0 | 0x3B |
| d_00da | 0x3C |
| d_00e0 | 0x3D |
| d_00e8 | 0x3E |
| d_exx | 0x3F |
| d_00ed | 0x40 |
| d_00f0 | 0x41 |
| d_00f5 | 0x42 |
| d_00ff | 0x43 |
| d_b8_d0 | 0x44 |
| d_m60_10 | 0x45 |
| d_m60_12 | 0x46 |
| d_spmbt | 0x47 |
| d_spmft | 0x48 |
| d_szm | 0x49 |
| d_zke3bt | 0x4A |
| d_zke3ft | 0x4B |
| d_zke3pm | 0x4C |
| d_zke3sb | 0x4D |
| d_zke3sd | 0x4E |
| d_zke_gm | 0x4F |
| d_zuheiz | 0x50 |
| d_sitz_f | 0x51 |
| d_sitz_b | 0x52 |
| d_0047 | 0x53 |
| d_0048 | 0x54 |
| d_00ce | 0x55 |
| d_00ea | 0x56 |
| d_abskwp | 0x57 |
| d_0031 | 0x58 |
| d_0019 | 0x59 |
| d_smac | 0x5A |
| d_0081 | 0x5B |
| d_xen_l | 0x5C |
| d_xen_r | 0x5D |
| d_acc | 0x5E |
| d_afs | 0x5F |
| d_ahm | 0x60 |
| d_amp | 0x61 |
| d_anttu | 0x62 |
| d_ars | 0x63 |
| d_ask | 0x64 |
| d_bfh | 0x65 |
| d_bfs | 0x66 |
| d_bzm | 0x67 |
| d_bzmf | 0x68 |
| d_cas | 0x69 |
| d_cdc | 0x6A |
| d_cim | 0x6B |
| d_dsc | 0x6C |
| d_dwa | 0x6D |
| d_ec | 0x6E |
| d_edc | 0x6F |
| d_egs | 0x70 |
| d_ehc | 0x71 |
| d_emf | 0x72 |
| d_fah | 0x73 |
| d_fas | 0x74 |
| d_fbi | 0x75 |
| d_hkl | 0x76 |
| d_khi | 0x77 |
| d_klima | 0x78 |
| d_klima2 | 0x79 |
| d_kombi | 0x7A |
| d_lm | 0x7B |
| d_mmc | 0x7C |
| d_mmi | 0x7D |
| d_mostgw | 0x7E |
| d_motor | 0x7F |
| d_motor2 | 0x80 |
| d_muster | 0x81 |
| d_nav | 0x82 |
| d_pdc | 0x83 |
| d_pgs | 0x84 |
| d_pow | 0x85 |
| d_rdc | 0x86 |
| d_rls | 0x87 |
| d_sasl | 0x88 |
| d_sasr | 0x89 |
| d_sbsl | 0x8A |
| d_sbsr | 0x8B |
| d_sfz | 0x8C |
| d_shd | 0x8D |
| d_shzh | 0x8E |
| d_sim | 0x8F |
| d_sine | 0x90 |
| d_ssbf | 0x91 |
| d_ssfa | 0x92 |
| d_ssh | 0x93 |
| d_stvl | 0x94 |
| d_stvr | 0x95 |
| d_svs | 0x96 |
| d_szl | 0x97 |
| d_tel | 0x98 |
| d_tmbt | 0x99 |
| d_tmbth | 0x9A |
| d_tmft | 0x9B |
| d_tmfth | 0x9C |
| d_video | 0x9D |
| d_vvt | 0x9E |
| d_vvt2 | 0x9F |
| d_wim | 0xA0 |
| d_zgm | 0xA1 |
| d_0065 | 0xA2 |
| d_0076 | 0xA3 |
| d_adp | 0xA4 |
| d_alc | 0xA5 |
| d_canbus | 0xA6 |
| d_cid | 0xA7 |
| d_cidf | 0xA8 |
| d_cidf2 | 0xA9 |
| d_cvm | 0xAA |
| d_fzd | 0xAB |
| d_ecf | 0xAC |
| d_ekp | 0xAD |
| d_eps | 0xAE |
| d_ldm | 0xAF |
| d_hud | 0xB0 |
| d_kbm | 0xB1 |
| d_kfs | 0xB2 |
| d_mmif | 0xB3 |
| d_mmifc | 0xB4 |
| d_opps | 0xB5 |
| d_radio | 0xB6 |
| d_sbsl2 | 0xB7 |
| d_sbsr2 | 0xB8 |
| d_secur1 | 0xB9 |
| d_secur2 | 0xBA |
| d_stvl2 | 0xBB |
| d_stvr2 | 0xBC |
| d_vgsg | 0xBD |
| d_0066 | 0xBE |
| d_00c2 | 0xBF |
| d_mrabs | 0xC0 |
| d_mrdwa | 0xC1 |
| d_mrkomb | 0xC2 |
| d_mrmot | 0xC3 |
| d_mrzfe | 0xC4 |
| d_virt90 | 0xC5 |
| d_virt91 | 0xC6 |
| d_virt92 | 0xC7 |
| d_ccc | 0xC8 |
| d_ffp | 0xC9 |
| d_0074 | 0xCA |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | ERROR_ARGUMENT |
| 0x02 | ERROR_VERSION |
