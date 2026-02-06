# ZKE2.prg

## General

|  |  |
| --- | --- |
| File | ZKE2.prg |
| Type | PRG |
| Jobs | 19 |
| Tables | 4 |
| Origin | BMW ET-421 Gerd Huber |
| Revision | 1.12 |
| Author | Pioneer Martin Moll, BMW ET-421 Teepe, BMW ET-421 Gerd Huber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentrale Karosserie-Elektronik II |  |  |
| ORIGIN | string | BMW ET-421 Gerd Huber |  |  |
| REVISION | string | 1.12 |  |  |
| AUTHOR | string | Pioneer Martin Moll, BMW ET-421 Teepe, BMW ET-421 Gerd Huber |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung

_No arguments._

### IDENT

Auslesen der Identifikationsdaten

_No arguments._

### FEHLERZAEHLER_LESEN

Auslesen des Fehlerzaehlers

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### DIAGNOSE_ENDE

Abbruch der Diagnose-Kommunikation

_No arguments._

### STATUS_GRUPPE_0_LESEN

Auslesen des Statusfelds Gruppe 0

_No arguments._

### STATUS_GRUPPE_1_LESEN

Auslesen des Statusfelds Gruppe 1

_No arguments._

### STATUS_GRUPPE_2_LESEN

Auslesen des Statusfelds Gruppe 2

_No arguments._

### STATUS_GRUPPE_3_LESEN

Auslesen des Statusfelds Gruppe 3

_No arguments._

### STATUS_GRUPPE_4_LESEN

Auslesen des Statusfelds Gruppe 4

_No arguments._

### STATUS_GRUPPE_5_LESEN

Auslesen des Statusfelds Gruppe 5

_No arguments._

### STATUS_GRUPPE_6_LESEN

Auslesen des Statusfelds Gruppe 6

_No arguments._

### STATUS_GRUPPE_7_LESEN

Auslesen des Statusfelds Gruppe 7

_No arguments._

### STATUS_GRUPPE_8_LESEN

Auslesen des Statusfelds Gruppe 8

_No arguments._

### STATUS_GRUPPE_9_LESEN

Auslesen des Statusfelds Gruppe 9

_No arguments._

### CODIERUNG_LESEN

Codierdaten

_No arguments._

### STEUERN_DIGITAL

Ansteuern der Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table SteuerParameter AUSGANG |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | GM II |
| 0x01 | TM FT, Verbindung zu GM II |
| 0x02 | TM BT, Verbindung zu GM II |
| 0x03 | TM FTH, Verbindung zu GM II |
| 0x04 | TM BTH, Verbindung zu GM II |
| 0x05 | SHDM, Verbindung zu GM II |
| 0x06 | TM FT |
| 0x07 | TM BT |
| 0x08 | TM FTH |
| 0x09 | TM BTH |
| 0x0A | SHDM |
| 0x0B | RM1, Verbindung zu GM II |
| 0x0C | RM2, Verbindung zu GM II |
| 0x0D | FH Schalter FA, Verbindung zu GM II |
| 0x3E | Klemme R an GM II fehlerhaft |
| 0x0E | Wischerschalter, Zuleitung |
| 0x0F | Wischermotor, Zuleitung, Rueckstellkontakte |
| 0x10 | ADV-Motor, Zuleitung, Nockenschalter |
| 0x11 | Relais Wischermotor I, Zuleitung, Sicherung, RM1 |
| 0x12 | Relais Wischermotor II, Zuleitung, Sicherung, RM1 |
| 0x13 | Relais Wischermotor III, Zuleitung, Sicherung, RM1 |
| 0x14 | Relais Wasserpumpe, Zuleitung, Sicherung, RM1 |
| 0x15 | Relais SIR, Zuleitung, Sicherung, RM1 |
| 0x16 | DRM 2 ADV, Zuleitung, Sicherung, RM1 |
| 0x17 | DRM 2 SRA, Zuleitung, Sicherung, RM1 |
| 0x27 | TM FT, TSH, Zuleitung |
| 0x1E | Schlossschalter FT, Zuleitung |
| 0x1F | Schlossschalter BT, Zuleitung |
| 0x20 | Antrieb ZV FT, Schalter ZV FT, Zuleitung |
| 0x21 | Antrieb ZV BFT, Schalter ZV BFT, Zuleitung |
| 0x22 | Antrieb ZV Heckklappe, Schalter ZV Heckklappe, Zuleitung |
| 0x23 | RM1 (Relais ZS), Sicherungsrelais I |
| 0x24 | RM1 (Relais VR), Sicherungsrelais I |
| 0x25 | RM1 (Relais ER), Sicherungsrelais I |
| 0x26 | CRASH-Stromschalter, Zuleitung |
| 0x28 | FH Schalter FT, Zuleitung |
| 0x29 | FH Schalter BT, Zuleitung |
| 0x2A | FH Schalter FTH,Zuleitung |
| 0x2B | FH Schalter BTH, Zuleitung |
| 0x2C | FH Motor FT, Zuleitung, Inkrementgeber |
| 0x2D | FH Motor BT, Zuleitung, Inkrementgeber |
| 0x2E | FH Motor BTH, Fensterkontakt FAH, Zuleitung, RM1 |
| 0x2F | FH Motor BTH, Fensterkontakt BFH, Zuleitung, RM1 |
| 0x18 | RM1 (Relais Fensterheber FT auf, FFA), Sicherungsrelais I |
| 0x19 | RM1 (Relais Fensterheber BT auf, FBA), Sicherungsrelais II |
| 0x1A | RM1 (Relais Fensterheber FTH auf, FFHA), Sicherungsrelais I |
| 0x1B | RM1 (Relais Fensterheber BTH auf, FBHA), Sicherungsrelais II |
| 0x1C | RM1 (Relais Fensterheber FT zu, FFZ), Sicherungsrelais I |
| 0x1D | RM1 (Relais Fensterheber BT zu, FBZ), Sicherungsrelais II |
| 0x3C | RM1 (Relais Fensterheber FTH zu, FFHZ), Sicherungsrelais I |
| 0x3D | RM1 (Relais Fensterheber BTH zu, FBHZ), Sicherungsrelais II |
| 0x41 | FT Verbindungsleitung RM1 - FH Motor |
| 0x42 | BT Verbindungsleitung RM1 - FH Motor |
| 0x43 | FTH Verbindungsleitung RM1 - FH Motor |
| 0x44 | BTH Verbindungsleitung RM1 - FH Motor |
| 0x30 | SHD Schalter, Zuleitung |
| 0x31 | SHD Motor, SHD-Modul (Inkrementgeber) |
| 0x32 | SHD Motor (Relais), Sicherungsrelais I, Dachzuleitung |
| 0x33 | Positionsgeber Motor, Zuleitung, Sicherung FT |
| 0x34 | Positionsgeber Motor, Zuleitung, Sicherung BT |
| 0x35 | Positionsgeber Motor, Zuleitung, Sicherung FTH |
| 0x36 | Positionsgeber Motor, Zuleitung, Sicherung BTH |
| 0x37 | Positionsgeber Motor, Zuleitung, Sicherung Heckklappe |
| 0x38 | RM 2 (Relais 1-2), Sicherung FT |
| 0x39 | RM 2 (Relais 3 - 7), Sicherung, BT, BHT, FHT, Heckklappe |
| 0x3A | Ueberstromzaehler Sicherungsrelais I, zu hoher Strom an MFFA, MFFZ, MFFHA, MFFHZ, MER, MVR, MZS, 3OESL |
| 0x3B | Ueberstromzaehler Sicherungsrelais II, zu hoher Strom an MFBA, MFBZ, MFBHZ, MFBHA |
| 0x3F | zu hoher Strom an GMII RESL, RESR, IB, GRA, GRB, WB, RA1 - RA5, DTX, RMDA, RMLD, RMTR |
| 0x40 | zu hoher Strom an RM1 WI1, WI2, WI3, WP, SIR, VA, ERHK |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Kurzschluss gegen U-Batt |
| 0x01 | Kurzschluss gegen Masse |
| 0x02 | Leitungsunterbrechung |
| 0x03 | ungueltiger Arbeitsbereich |
| 0xFF | unbekannte Fehlerart |

### STEUERPARAMETER

| ZELLE | AUSGANG |
| --- | --- |
| 0x00 | RS |
| 0x01 | NS |
| 0x03 | RSK |
| 0x04 | SSSSHK |
| 0x05 | SSSHK |
| 0x06 | SSPHK |
| 0x07 | SSOHK |
| 0x08 | WWNM |
| 0x0A | KL15 |
| 0x0B | KLR |
| 0x0C | KL50 |
| 0x0D | SWA |
| 0x0E | SWI |
| 0x0F | SWS1 |
| 0x10 | SWS2 |
| 0x11 | SIRS |
| 0x12 | SW |
| 0x13 | NSW |
| 0x14 | TKBH |
| 0x15 | TKFH |
| 0x16 | TKBT |
| 0x17 | TKFT |
| 0x18 | FKBH |
| 0x19 | FKFH |
| 0x1B | IRFB |
| 0x1C | IRFA |
| 0x1D | VRHK |
| 0x1E | ERHK |
| 0x1F | TBH |
| 0x20 | FBHZ |
| 0x21 | FBHA |
| 0x22 | TFH |
| 0x23 | FFHZ |
| 0x24 | FFHA |
| 0x25 | DSRA |
| 0x26 | DSIR |
| 0x27 | DWP |
| 0x28 | DWI3 |
| 0x29 | DWI2 |
| 0x2A | DWI1 |
| 0x2B | DKS |
| 0x2D | DADV |
| 0x31 | FSTBH |
| 0x32 | FSZBH |
| 0x33 | FSABH |
| 0x35 | FSTFH |
| 0x36 | FSZFH |
| 0x37 | FSAFH |
| 0x38 | FSKS |
| 0x39 | FSTFT |
| 0x3A | FSZFT |
| 0x3B | FSAFT |
| 0x3D | FSTBT |
| 0x3E | FSZBT |
| 0x3F | FSABT |
| 0x40 | RADVA |
| 0x41 | RADVZ |
| 0x43 | WPK |
| 0x44 | RKSA |
| 0x45 | RKSZ |
| 0x46 | RWI1 |
| 0x47 | RWI2 |
| 0x48 | RWI3 |
| 0x49 | RWP |
| 0x4A | RSIR |
| 0x4B | RSRA1 |
| 0x4C | RSRA2 |
| 0x4D | RMFFA |
| 0x4E | RMFFZ |
| 0x4F | RMFFHA |
| 0x50 | RMFFHZ |
| 0x51 | RMFBA |
| 0x52 | RMFBZ |
| 0x53 | RMFBHA |
| 0x54 | RMFBHZ |
| 0x55 | RMZS |
| 0x56 | RMVR |
| 0x57 | RMER |
| 0x59 | RMSFT |
| 0x5A | RMSFTR |
| 0x5B | RMSR |
| 0x5C | RMSBT |
| 0x5D | RMSFH |
| 0x5E | RMSBH |
| 0x5F | RMSHK |
| 0x60 | RHKA |
| 0x61 | RVA |
| 0x62 | RESL |
| 0x63 | RESR |
| 0x67 | ZS1 |
| 0x68 | ZS1N |
| 0x69 | RWB |
| 0x6F | RIB |
| 0x70 | SSHDA |
| 0x71 | SSHDZ |
| 0x72 | SSHDH |
| 0x73 | RSHDA |
| 0x74 | RSHDZ |
| 0x75 | MSHDA |
| 0x76 | MSHDZ |
| 0x79 | QZSHD |
| 0x7C | SFHAFH |
| 0x7D | SFHZFH |
| 0x7E | SFHTFH |
| 0x81 | MAFAFH |
| 0x82 | MAFZFH |
| 0x83 | SSPFH |
| 0x84 | SSSSFH |
| 0x8B | TGIFH |
| 0x8C | QZFH |
| 0x8D | ZVERFH |
| 0x8E | ZVVRFH |
| 0x8F | TGAFH |
| 0x90 | SFHABH |
| 0x91 | SFHZBH |
| 0x92 | SFHTBH |
| 0x95 | MAFABH |
| 0x96 | MAFZBH |
| 0x97 | SSPBH |
| 0x98 | SSSSBH |
| 0x9F | TGIBH |
| 0xA0 | QZBH |
| 0xA1 | ZVERBH |
| 0xA2 | ZVVRBH |
| 0xA3 | TGKBH |
| 0xA4 | SFHAFT |
| 0xA5 | SFHZFT |
| 0xA6 | SFHTFT |
| 0xA8 | TSHFT |
| 0xA9 | MAFAFT |
| 0xAA | MAFZFT |
| 0xAB | SSPFT |
| 0xAC | SSSSFT |
| 0xB5 | TGIFT |
| 0xB6 | QZFT |
| 0xB7 | ZVERFT |
| 0xB8 | ZVVRFT |
| 0xB9 | TGKFT |
| 0xBA | TSAFT |
| 0xBB | TSBFT |
| 0xBC | TSBNFT |
| 0xBD | TSCFT |
| 0xBE | SFHABT |
| 0xBF | SFHZBT |
| 0xC0 | SFHTBT |
| 0xC3 | MAFABT |
| 0xC4 | MAFZBT |
| 0xC5 | SSPBT |
| 0xC6 | SSSSBT |
| 0xCF | TGIBT |
| 0xD0 | QZBT |
| 0xD1 | ZVERBT |
| 0xD2 | ZVVRBT |
| 0xD3 | TGKBT |
| 0xD4 | TSABT |
| 0xD5 | TSBBT |
| 0xD6 | TSBNBT |
| 0xD7 | TSCBT |
| 0xE6 | STDCON |
| 0xF0 | SLP |
| 0xFF | ERROR_UNBEKANNTER_PARAMETER |

### LAENDER

| LV | LAENDERVARIANTE |
| --- | --- |
| 0x00 | ECE |
| 0x01 | US |
| 0x02 | Australien |
| 0x03 | Finnland |
| 0x04 | Reserve 1 |
| 0x05 | Reserve 2 |
