# DDE40KW0.prg

## General

|  |  |
| --- | --- |
| File | DDE40KW0.prg |
| Type | PRG |
| Jobs | 281 |
| Tables | 7 |
| Origin | BMW TI-431 Semmler |
| Revision | 1.61 |
| Author | BMW TP-421 Weber, BMW TI-433 Schiefer, BMW ZM-E-31 Lexmueller, BMW TI-433 Schaller, BMW TI-431 Semmler |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DDE 4.0 fuer M57 |  |  |
| ORIGIN | string | BMW TI-431 Semmler |  |  |
| REVISION | string | 1.61 |  |  |
| AUTHOR | string | BMW TP-421 Weber, BMW TI-433 Schiefer, BMW ZM-E-31 Lexmueller, BMW TI-433 Schaller, BMW TI-431 Semmler |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.11 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### initialisierung

Default Init-Job

_No arguments._

### INFO

Information SGBD

_No arguments._

### UPROG_EIN

Programmierspannung einschalten

_No arguments._

### UPROG_AUS

Programmierspannung ausschalten

_No arguments._

### BLOCKLAENGE_MAX

maximale Blocklaenge

_No arguments._

### DATEN_REFERENZ

Job DATEN-Referenz

_No arguments._

### HW_REFERENZ

Job HW-Referenz

_No arguments._

### ZIF

Job ZIF

_No arguments._

### ZIF_BACKUP

Job ZIF_BACKUP

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

_No arguments._

### IDENT_AIF

Ident und AIF zusammen lesen

_No arguments._

### ECU_CONFIG

Ident-Daten fuer DME

_No arguments._

### PRUEFCODE_LESEN

Indentifikation, AIF, FS_Codes ShadowFS_Codes, ShadowFS_lang

_No arguments._

### GET_CURRAIFADR

ermittelt die Adresse des Momentan gueltigen AIF-Eintrags

_No arguments._

### AIF_SCHREIBEN

ermittelt die Adresse des Momentan gueltigen AIF-Eintrags

| Name | Type | Description |
| --- | --- | --- |
| FAHRGESTELLNR | string |  |
| BMW_FERTIGUNGSDAT | string |  |
| BMW_SWNR | string |  |
| BMW_TYPPRUEFNR | long |  |
| BMW_ZBNR | long |  |
| PRG_GERAET_SER_NR | string |  |
| WERKSCODE | int |  |
| KM | int |  |
| PRG_STANDSNR | string |  |

### FLASH_LESEN

Beliebige FLASH - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| FLASH_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low HEX |
| FLASH_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### START_DIAGNOSTIC_SESSION

Status

_No arguments._

### FLASH_PROG_STATUS

Status

_No arguments._

### FLASH_LOESCHEN

Flash  - Zellen loeschen

| Name | Type | Description |
| --- | --- | --- |
| FLASH_LOESCHEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |

### FLASH_SCHREIBEN_ADRESSE

Beliebige Flash Zellen mit 02 beschreiben

| Name | Type | Description |
| --- | --- | --- |
| FLASH_SCHREIBEN_ADRESSE_ANFANG | long | Uebergabeparameter, Startadresse High-Middle-Low und Daten |
| FLASH_SCHREIBEN_ADRESSE_ENDE | long | Uebergabeparameter, Endadresse High-Middle-Low und Daten |

### FLASH_SCHREIBEN

Beliebige Flash Zellen  beschreiben

| Name | Type | Description |
| --- | --- | --- |
| FLASH_SCHREIBEN_DATEN | binary | Uebergabeparameter, Startadresse High-Middle-Low und Daten |

### FLASH_SCHREIBEN_ENDE

Beliebige EPROM - Zellen auslesen

_No arguments._

### SEED_KEY

Schutzmechanismus SEED_KEY

_No arguments._

### IDENT

Ident-Daten fuer DME

_No arguments._

### FS_LESEN_STATUS

Auslesen des Fehlerspeichers

_No arguments._

### FS_SELEKTIV_LOESCHEN

Auslesen des Fehlerspeichers

| Name | Type | Description |
| --- | --- | --- |
| FEHLER_0 | int | 0-65535 |
| FEHLER_1 | int | 0-65535 |
| FEHLER_2 | int | 0-65535 |
| FEHLER_3 | int | 0-65535 |
| FEHLER_4 | int | 0-65535 |
| FEHLER_5 | int | 0-65535 |
| FEHLER_6 | int | 0-65535 |
| FEHLER_7 | int | 0-65535 |
| FEHLER_8 | int | 0-65535 |
| FEHLER_9 | int | 0-65535 |

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_SHADOW_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### STATUS_CODIER_CHECKSUMME

Codier - Checksumme abfragen

_No arguments._

### ABGLEICH_LESEN_STARTMENGE

Startmengen-Abgleich lesen

_No arguments._

### ABGLEICH_LESEN_INJEKTOR_KLASSIERUNG

_No description._

_No arguments._

### ABGLEICH_VERSTELLEN_INJEKTOR_KLASSIERUNG

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_INJEKTOR_KLASSIERUNG_ROH_WERT | int | Neuer Verstellwert |

### ABGLEICH_PROG_INJEKTOR_KLASSIERUNG

_No description._

_No arguments._

### ABGLEICH_LESEN_VERBR_KORFAKTOR

_No description._

_No arguments._

### ABGLEICH_VERSTELLEN_VERBR_KORFAKTOR

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_VERBR_KORFAKTOR_WERT | real | Neuer Verstellwert |

### ABGLEICH_PROG_VERBR_KORFAKTOR

_No description._

_No arguments._

### ABGLEICH_VERSTELLEN_STARTMENGE

Startmenge Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_STARTMENGE_WERT | real | Neuer Verstellwert |

### ABGLEICH_PROG_STARTMENGE

Startmenge Abgleich programmieren

_No arguments._

### ABGLEICH_LESEN_BEGR_MENGE

BEGR_MENGEn-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_BEGR_MENGE

BEGR_MENGE Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_BEGR_MENGE_WERT | real | Neuer Verstellwert |

### ABGLEICH_PROG_BEGR_MENGE

BEGR_MENGE Abgleich programmieren

_No arguments._

### ABGLEICH_LESEN_BEGR_MENGE_ROH

BEGR_MENGEn-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_BEGR_MENGE_ROH

BEGR_MENGE Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_BEGR_MENGE_ROH_WERT | int | Neuer Verstellwert |

### ABGLEICH_LESEN_LL_REGELUNG

LL-Regelung-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_LL_REGELUNG

LL_REGELUNG Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_LL_REGELUNG_WERT | real | Neuer Verstellwert |

### ABGLEICH_PROG_LL_REGELUNG

LL_REGELUNG Abgleich programmieren

_No arguments._

### ABGLEICH_LESEN_LLPN_REGELUNG

LL-Regelung-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_LLPN_REGELUNG

LL_REGELUNG Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_LLPN_REGELUNG_WERT | real | Neuer Verstellwert |

### ABGLEICH_PROG_LLPN_REGELUNG

LL_REGELUNG Abgleich programmieren

_No arguments._

### ABGLEICH_LESEN_AGR_RUECK

AGR_RUECKn-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_AGR_RUECK

AGR_RUECK Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_AGR_RUECK_WERT | real | Neuer Verstellwert |

### ABGLEICH_PROG_AGR_RUECK

AGR_RUECK Abgleich programmieren

_No arguments._

### ABGLEICH_LESEN_VOLL_MENGE

BEGR_MENGEn-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_VOLL_MENGE

BEGR_MENGE Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_VOLL_MENGE_WERT | real | Neuer Verstellwert |

### ABGLEICH_PROG_VOLL_MENGE

BEGR_MENGE Abgleich programmieren

_No arguments._

### ABGLEICH_LESEN_ABGLEICHMENGE

LADEDRUCK-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_ABGLEICHMENGE

LADEDRUCK Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_1 | real | Neuer Verstellwert 1 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_2 | real | Neuer Verstellwert 2 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_3 | real | Neuer Verstellwert 3 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_4 | real | Neuer Verstellwert 4 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_5 | real | Neuer Verstellwert 5 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_6 | real | Neuer Verstellwert 6 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_7 | real | Neuer Verstellwert 7 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_8 | real | Neuer Verstellwert 8 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_9 | real | Neuer Verstellwert 9 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_10 | real | Neuer Verstellwert 10 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_11 | real | Neuer Verstellwert 11 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_12 | real | Neuer Verstellwert 12 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_13 | real | Neuer Verstellwert 13 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_14 | real | Neuer Verstellwert 14 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_15 | real | Neuer Verstellwert 15 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_16 | real | Neuer Verstellwert 16 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_17 | real | Neuer Verstellwert 17 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_18 | real | Neuer Verstellwert 18 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_19 | real | Neuer Verstellwert 19 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_20 | real | Neuer Verstellwert 20 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_21 | real | Neuer Verstellwert 21 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_22 | real | Neuer Verstellwert 22 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_23 | real | Neuer Verstellwert 23 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_24 | real | Neuer Verstellwert 24 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_25 | real | Neuer Verstellwert 25 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_26 | real | Neuer Verstellwert 26 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_27 | real | Neuer Verstellwert 27 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_28 | real | Neuer Verstellwert 28 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_29 | real | Neuer Verstellwert 29 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_30 | real | Neuer Verstellwert 30 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_31 | real | Neuer Verstellwert 31 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_32 | real | Neuer Verstellwert 32 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_33 | real | Neuer Verstellwert 33 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_34 | real | Neuer Verstellwert 34 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_35 | real | Neuer Verstellwert 35 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_36 | real | Neuer Verstellwert 36 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_37 | real | Neuer Verstellwert 37 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_38 | real | Neuer Verstellwert 38 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_39 | real | Neuer Verstellwert 39 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_40 | real | Neuer Verstellwert 40 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_41 | real | Neuer Verstellwert 41 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_42 | real | Neuer Verstellwert 42 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_43 | real | Neuer Verstellwert 43 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_44 | real | Neuer Verstellwert 44 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_45 | real | Neuer Verstellwert 45 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_46 | real | Neuer Verstellwert 46 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_47 | real | Neuer Verstellwert 47 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_48 | real | Neuer Verstellwert 48 |

### ABGLEICH_PROG_ABGLEICHMENGE

LADEDRUCK Abgleich programmieren

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_PROG_ABGLEICHMENGE_CS | int | Zum Programmieren muss die CS aus Abgleichwerte vorgeben mit uebergeben werden |

### ABGLEICH_LESEN_ABGLEICH_FLAG

Kennung M_ABGLEICH_FLAG lesen

_No arguments._

### ABGLEICH_VERSTELLEN_ABGLEICH_FLAG

Kennung M_ABGLEICH_FLAG verstellen, 0 = nicht verbaut, 0xff = verbaut

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_ABGLEICH_FLAG_WERT | int | Neuer Verstellwert |

### ABGLEICH_PROG_ABGLEICH_FLAG

Kennung M_ABGLEICH_FLAG programmieren

_No arguments._

### ABGLEICHWERTE_LESEN

Lesen der Motorabgleichwerte

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_LESEN_ANZAHL | int | Anzahl der zu lesenden Bytes, =12 |

### ABGLEICHWERTE_SCHREIBEN

Beschreiben des internen Speichers mit den motorspezifischen Abgleichdaten

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_ANZAHL | int | Anzahl der zu schreibenden Abgleichdatenbytes ohne die Pruefziffer |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten in folgendem Format z.B. 01 02 AB FF ... <PZ> Datenbytes - 2-stellige Hex-Werte, jeweils gefolgt von einem (1) Leerzeichen - Wertebereich: 00 - FF - nur Grossbuchstaben A - F sind erlaubt Pruefziffer <PZ>: - 1-stelliges Zeichen - Wertebereich: 0 - 9, A - Z - nur Grossbuchstaben A - Z sind erlaubt |

### ABGLEICHFLAG_SCHREIBEN

Beschreiben des internen Speichers mit den motorspezifischen Abgleichdaten

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHFLAG_SCHREIBEN_FLAG | string | ABGLEICH_IO : 0x01 ABGLEICH_NIO: 0xFF |

### ABGLEICHFLAG_LESEN

Lesen des EEPROM-Speichers ab Adresse 0x0032

_No arguments._

### ABGLEICH_LESEN_MENGENDRIFT

Mengendrift-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_MENGENDRIFT

Mengendrift Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_MENGENDRIFT_MIN_WERT | real | Neuer Verstellwert |
| ABGLEICH_VERSTELLEN_MENGENDRIFT_MAX_WERT | real | Neuer Verstellwert |

### ABGLEICH_PROG_MENGENDRIFT

LADEDRUCK Abgleich programmieren

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_PROG_MENGENDRIFT_CS | int | Zum Programmieren muss die CS aus Abgleichwerte vorgeben mit uebergeben werden |

### HOLE_EMA_FELD

_No description._

_No arguments._

### ABGLEICH_LESEN_FGR_KLIMA

Kennung M_ABGLEICH_FLAG lesen

_No arguments._

### ABGLEICH_PROG_FGR_KLIMA

Kennung M_ABGLEICH_FLAG programmieren

_No arguments._

### ABGLEICH_LESEN_FGR_VARIANTE

FGR-Variante-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_FGR_VARIANTE

FGR_VARIANTE_Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_FGR_VARIANTE_WERT | int | Neuer Verstellwert |

### ABGLEICH_PROG_FGR_VARIANTE

FGR_VARIANTE_Abgleich programmieren

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### STEUERN_SYNC_MODE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| MODE | int |  |

### WECHSELCODE_SYNC_DME

Wechselcodesynchronisation EWS 3 - DME anstossen

_No arguments._

### STATUS_SYNC_MODE

_No description._

_No arguments._

### STEUERN_AGR_STELLER

ARF - Steller  ansteuern ,  - - 10%%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

### STEUERN_EKP

ARF-Steller ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0=AUS oder 1=EIN |

### STEUERN_GLUEHRELAIS

Gluegrelais ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0=Aus oder 100=EIN |

### STEUERN_KLIMAKOMPRESSOR

StellerKlimakompressor ansteuern ,  0 oder 100

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0=Aus oder 100=Ein |

### STEUERN_LADEDRUCKSTELLER

Ladedrucksteller ansteuern ,  5-95%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

### STEUERN_E_LUEFTER

E-Luefter ansteuern ,  5-95%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

### STEUERN_MOTORLAGER

Motorlager ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0=Aus oder 100=Ein |

### STEUERN_OELDRUCKSCHALTER

Oeldruckschalteranzeige ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0=Aus oder 100=Ein |

### STEUERN_DRALLKLAPPE

Drallklappe ansteuern ,  ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0=Aus oder 100=Ein |

### STEUERN_KUEHLWASSERHEIZUNG

Elektrische Kuehlwasserheizung ,  5 bis 95%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int |  |

### STEUERN_KS_HDPUMPE_ABSCHALTUNG

Railhochdruckpumpe Elementabschaltung   ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

### STEUERN_ENDE_SELECTIV

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STELLGLIED | int | Stellglied |

### START_SYSTEMCHECK_ZYL_SEL_MENGENKOR

Start zylinderselektive Mengenkorrekturen

_No arguments._

### START_SYSTEMCHECK_ZYL_SEL_DREHZAHL

Start zylinderselektive Drehzhahlen lesen

_No arguments._

### STOP_SYSTEMCHECK

Stop Systemtest

_No arguments._

### MW_SELECT_LESEN

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### TEL_ROH

Rohtelegramm ohne Header lesen

| Name | Type | Description |
| --- | --- | --- |
| REQUEST | binary | Daten ohne Header |

### STATUS_DIGITAL

Status Schalteingaenge

_No arguments._

### STATUS_DIGITAL1

Status Schalteingaenge

_No arguments._

### STATUS_DIGITAL2

Status Schalteingaenge

_No arguments._

### STATUS_DIGITAL3

Status Schalteingaenge

_No arguments._

### STATUS_DIGITAL4

Status Schalteingaenge

_No arguments._

### STATUS_LAUFUNRUHE_LLR_MENGE

Auslesen selektive Mengenkorrektur

_No arguments._

### STATUS_LAUFUNRUHE_DREHZAHL

Auslesen selektive Mengenkorrektur

_No arguments._

### ABGLEICH_KIC_VERSTELLEN_PROGRAMMIEREN

FGR-Funktion und Mainswitch konfigurieren

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_KIC_VERSTELLEN_PROGRAMMIEREN_WERT | int |  |

### MW_SELECT_LESEN_NORM

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### MW_SELECT_LESEN_NORM_EINZEL

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### MW_SELECT_LESEN_NORM2

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### STATUS_ANMPWG

PWG Pedalwertgeber Poti 1

_No arguments._

### STATUS_ANMUBT

UBT Batteriespannung

_No arguments._

### STATUS_ANMVDF

VDF Vorfoerderdruck

_No arguments._

### STATUS_ANMWTF

WTF Wassertemperatur

_No arguments._

### STATUS_ARMM_LIST

M_L aktuelle Luftmasse

_No arguments._

### STATUS_ARMM_LSOLL

M_L Sollwert fuer AGR-Regelung

_No arguments._

### STATUS_DZMNMIT

N Drehzahl

_No arguments._

### STATUS_EHMFARS

Tastverhaeltnis Ansteuerung AGR-Steller

_No arguments._

### STATUS_EHMFEKP

Tastverhaeltnis Ansteuerung Vorfoerderpumpe

_No arguments._

### STATUS_EHMFGRS

Tastverhaeltnis Ansteuerung Gluehrelais

_No arguments._

### STATUS_EHMFKDR

Tastverhaeltnis Ansteuerung Raildruckregelventil

_No arguments._

### STATUS_EHMFKLI

Tastverhaeltnis Ansteuerung Klimakompressor

_No arguments._

### STATUS_EHMFLDS

Tastverhaeltnis Ansteuerung Ladedrucksteller

_No arguments._

### STATUS_EHMFMLS

Tastverhaeltnis Ansteuerung Elektroluefter

_No arguments._

### STATUS_EHMFMML

Tastverhaeltnis Ansteuerung Motorlager

_No arguments._

### STATUS_LDMP_LLIN

aktueller Ladedruck  / Luftdruck

_No arguments._

### STATUS_LDMP_LSOLL

Sollwert Ladedruck

_No arguments._

### STATUS_MRMM_EFAHR

M_E Fahrmenge nach Laufruheregler

_No arguments._

### STATUS_ZUMP_RAIL

Raildruck fuer Mengenzumessung

_No arguments._

### STATUS_ZUMPQSOLL

Raildruck Sollwert

_No arguments._

### STATUS_ADMADF

ADF Rohwert Atmosphaerendruck

_No arguments._

### STATUS_ADMIDV

IDV Rohwert Istwert Stromregelung Druckregelventil

_No arguments._

### STATUS_ADMKDF

KDF Rohwert Raildruck

_No arguments._

### STATUS_ADMLDF

LDF Rohwert Ladedruck

_No arguments._

### STATUS_ADMLMM

LMM Rohwert Luftmasse

_No arguments._

### STATUS_ADMLTF

LTF Rohwert Lufttemperatur

_No arguments._

### STATUS_ADMPGS

PGS Rohwert Pedalwertgeber Poti 2

_No arguments._

### STATUS_ADMPWG

PWG Rohwert Pedalwertgeber Poti 1

_No arguments._

### STATUS_ADMUBT

UBT Rohwert Batteriespannung

_No arguments._

### STATUS_ADMUC1

UC1 Rohwert Kondensatorspannung 1 fuer Zylinder 1,2,3

_No arguments._

### STATUS_ADMUC2

UC2 Rohwert Kondensatorspannung 2 fuer Zylinder 4,5,6

_No arguments._

### STATUS_ADMUG1

UG1 Rohwert Speisespannung 1 fuer Pedalwertgeber 2, Ladedruckfuehler, Luftmassenmesser

_No arguments._

### STATUS_ADMUG2

UG2 Rohwert Speisespannung 2 fuer Pedalwertgeber 1, Kraftstoff- ,Vorfoerderdruckfuehler

_No arguments._

### STATUS_ADMVDF

VDF Rohwert Vorfoerderdruck

_No arguments._

### STATUS_ADMWTF

WTF Rohwert Wassertemperatur

_No arguments._

### STATUS_ANMADF

ADF Atmosphaerendruck

_No arguments._

### STATUS_ANMIDV

IDV Istwert Stromregelung Druckregelventil

_No arguments._

### STATUS_ANMKDF

KDF Raildruck

_No arguments._

### STATUS_ANMLDF

LDF Ladedruck

_No arguments._

### STATUS_ANMLMM

LMM Luftmasse

_No arguments._

### STATUS_ANMLTF

LTF Lufttemperatur

_No arguments._

### STATUS_ANMPGS

PGS Pedalwertgeber Poti 2

_No arguments._

### STATUS_ANMUC1

UC1 Kondensatorspannung 1 fuer Zylinder 1,2,3

_No arguments._

### STATUS_ANMUC2

UC2 Kondensatorspannung 2 fuer Zylinder 4,5,6

_No arguments._

### STATUS_ANMUG1

UG1 Speisespannung 1 fuer Pedalwertgeber 2, Ladedruckfuehler, Luftmassenmesser

_No arguments._

### STATUS_ANMUG2

UG2 Speisespannung 2 fuer Pedalwertgeber 1, Kraftstoff- ,Vorfoerderdruckfuehler

_No arguments._

### STATUS_ANOU_ADF

ADF Spannung Atmosphaerendruckfuehler

_No arguments._

### STATUS_ANOU_IDV

IDV Spannung zur Strommessung Druckregelventil

_No arguments._

### STATUS_ANOU_KDF

KDF Spannung Raildruckfuehler

_No arguments._

### STATUS_ANOU_LDF

LDF Spannung Ladedruckfuehler

_No arguments._

### STATUS_ANOU_LMM

LMM Spannung Luftmassenmesser

_No arguments._

### STATUS_ANOU_LTF

LTF Spannung Lufttemperaturfuehler

_No arguments._

### STATUS_ANOU_PGS

PGS Spannung Pedalwertgeber Poti 2

_No arguments._

### STATUS_ANOU_PWG

PWG Spannung Pedalwertgeber Poti 1

_No arguments._

### STATUS_ANOU_UBT

UBT Spannung Batteriespannung

_No arguments._

### STATUS_ANOU_UC1

UC1 Spannung Kondensatorspannung 1 fuer Zylinder 1,2,3

_No arguments._

### STATUS_ANOU_UC2

UC2 Spannung Kondensatorspannung 2 fuer Zylinder 4,5,6

_No arguments._

### STATUS_ANOU_UG1

UG1 Spannung Speisespannung 1 fuer Pedalwertgeber 2, Ladedruckfuehler, Luftmassenmesser

_No arguments._

### STATUS_ANOU_UG2

UG2 Spannung Speisespannung 2 fuer Pedalwertgeber 1, Kraftstoff- ,Vorfoerderdruckfuehler

_No arguments._

### STATUS_ANOU_VDF

VDF Spannung Vorfoerderdruckfuehler

_No arguments._

### STATUS_ANOU_WTF

WTF Spannung Wassertemperaturfuehler

_No arguments._

### STATUS_AROIST_5

M_L normierte Luftmasse (nicht T_L/P_ADF-korrig.)

_No arguments._

### STATUS_AROREG_2

AGR-Status  Regelung / Steuerung / Abschaltung

_No arguments._

### STATUS_AROSOLL_5

M_L Luft-Sollwert nach Sollwertbegrenzung

_No arguments._

### STATUS_CAMN_EL

MLS Drehzahlstufe E-Luefter

_No arguments._

### STATUS_CAMS_AC

Schalter Klimabereitschaft

_No arguments._

### STATUS_CAMS_KO

Schalter Klimakompressor

_No arguments._

### STATUS_CAOVERB

Kraftstoffverbrauch fuer CAN DDE4-VERBRAUCH

_No arguments._

### STATUS_COMGTR_OPT

Identifikation Handschalter/Automatik

_No arguments._

### STATUS_DIMDIG_0

Auf logisch 0 erkannte Digitaleingaenge

_No arguments._

### STATUS_DIMDIG_1

Auf logisch 1 erkannte Digitaleingaenge

_No arguments._

### STATUS_DIMDIGPREL

Entprellte logische Zustaende der digitalen Eingaenge

_No arguments._

### STATUS_DIMF_MFL

FGR Multifunktionslenkrad

_No arguments._

### STATUS_DZMNAKT

N aktuelle Drehzahl aus letzter Periode

_No arguments._

### STATUS_DZMZMK1

Selektive Mengenkorrektur Zylinder 1

_No arguments._

### STATUS_DZMZMK2

Selektive Mengenkorrektur Zylinder 2

_No arguments._

### STATUS_DZMZMK3

Selektive Mengenkorrektur Zylinder 3

_No arguments._

### STATUS_DZMZMK4

Selektive Mengenkorrektur Zylinder 4

_No arguments._

### STATUS_DZMZMK5

Selektive Mengenkorrektur Zylinder 5

_No arguments._

### STATUS_DZMZMK6

Selektive Mengenkorrektur Zylinder 6

_No arguments._

### STATUS_DZMZN1

Selektive Drehzahl Zylinder 1

_No arguments._

### STATUS_DZMZN2

Selektive Drehzahl Zylinder 2

_No arguments._

### STATUS_DZMZN3

Selektive Drehzahl Zylinder 3

_No arguments._

### STATUS_DZMZN4

Selektive Drehzahl Zylinder 4

_No arguments._

### STATUS_DZMZN5

Selektive Drehzahl Zylinder 5

_No arguments._

### STATUS_DZMZN6

Selektive Drehzahl Zylinder 6

_No arguments._

### STATUS_EDMRSTCD

Restart Code

_No arguments._

### STATUS_FBMBSTZ_UB

UB Betriebsstunden

_No arguments._

### STATUS_FBMDIA_C

Diagnoselampe ueber CAN

_No arguments._

### STATUS_FBMMIL_C

MIL Malfunction Indikator Lamp ueber CAN

_No arguments._

### STATUS_FBMSDIAL

Anforderung Diagnoselampe aus Fehlerbehandlung (0:Aus,1:Ein,2:Blinken)

_No arguments._

### STATUS_FBODIALA

Diagnose - Lampe Status (255 = EIN)

_No arguments._

### STATUS_FBOS_00

Defekte Pfade 1 bis 16

_No arguments._

### STATUS_FBOS_02

Defekte Pfade 17 bis 32

_No arguments._

### STATUS_FBOS_04

Defekte Pfade 33 bis 48

_No arguments._

### STATUS_FBOS_06

Defekte Pfade 49 bis 64

_No arguments._

### STATUS_FBOS_08

Defekte Pfade 65 bis 80

_No arguments._

### STATUS_FGM_VZUN

Verhaeltnis Geschwindigkeit/Drehzahl (V/N aktuell)

_No arguments._

### STATUS_FGMBESCH

Beschleunigung

_No arguments._

### STATUS_FGMFGAKT

aktuelle Geschwindigkeit

_No arguments._

### STATUS_GSOGS_PHA

Gluehzeitsteuerung Gluehphase

_No arguments._

### STATUS_LDMADF

aktueller Atmosphaerendruck

_No arguments._

### STATUS_LDMT_LTGG

Errechnete Lufttemperatur

_No arguments._

### STATUS_LDOTVSTEU

Tastverhaeltnis Steuerung

_No arguments._

### STATUS_MRMCASE_A

ARD Zustand-Bits der aktiven Ruckeldaempfung

_No arguments._

### STATUS_MRMCASE_L

LLR Zustand-Bits der Leerlaufregelung

_No arguments._

### STATUS_MRMF_GANG

FGR aktuelle Gangstufe

_No arguments._

### STATUS_MRMFG_SOLL

V Sollwert Fahrgeschwindigkeit von FGR

_No arguments._

### STATUS_MRMKM_AKT

aktueller km-Stand von Kombiinstrument

_No arguments._

### STATUS_MRML_FGR

FGR-Status-Indicator-Lampe ueber CAN

_No arguments._

### STATUS_MRMLLRIANT

M_E Menge aus I-Anteil des PI-Leerlaufreglers

_No arguments._

### STATUS_MRMLLRPANT

M_E Menge aus P-Anteil des PI-Leerlaufreglers

_No arguments._

### STATUS_MRMM_DXMSR

M_E externer Momenteneingriff MSR

_No arguments._

### STATUS_MRMM_EAKT

M_E Aktuelle Einspritzmenge (ohne ARD)

_No arguments._

### STATUS_MRMM_EARD

M_E Menge ARD - Gesamt vor Begrenzung

_No arguments._

### STATUS_MRMM_EBEGR

M_E resultierende Begrenzungsmenge

_No arguments._

### STATUS_MRMM_EDELB

M_E begrenzte Abgleichmenge

_No arguments._

### STATUS_MRMM_EFGR

M_E Wunschmenge aus Fahrgeschwindigkeitsregelung

_No arguments._

### STATUS_MRMM_EKORR

M_E Fahrmenge korrigiert mit Vollast- und Mengenabgleich

_No arguments._

### STATUS_MRMM_ELLR

M_E Menge aus Leerlaufregelung

_No arguments._

### STATUS_MRMM_ELRR

M_E Menge aus Laufruheregler

_No arguments._

### STATUS_MRMM_EMOT

M_E Einspritzmenge nach ARD

_No arguments._

### STATUS_MRMM_EPWG

M_E Wunschmenge = f(PWG) aus Fahrverhaltenkennfeld

_No arguments._

### STATUS_MRMM_ESTAR

M_E resultierender Startmengen-Sollwert

_No arguments._

### STATUS_MRMM_EWUN

M_E Fahrerwunschmenge nach externem Mengeneingriff

_No arguments._

### STATUS_MRMM_EWUNF

M_E Fahrerwunschmenge aus PWG oder FGR

_No arguments._

### STATUS_MRMN_LLBAS

N Leerlaufsolldrehzahl

_No arguments._

### STATUS_MRMPWGFI

PWG gefilterte Pedalwertgeber-Position

_No arguments._

### STATUS_MRMSTATUS

Status Motorbetriebsphase

_No arguments._

### STATUS_MROFABZUST

Zustand Ablaufsteuerung

_No arguments._

### STATUS_MROFGR_ABN

FGR Abschalt-Bedingungen

_No arguments._

### STATUS_MROKICKDWN

Schalter Kickdown

_No arguments._

### STATUS_MROLLRDANT

M_E Menge aus Leerlaufregler-DT1-Vorsteuerung

_No arguments._

### STATUS_MROLRRREG

Nsegm Segmentdrehzahl-Regelabweichung fuer Laufruheregler

_No arguments._

### STATUS_MROM_ARDFF

M_E Menge ARD - Fuehrungsformer

_No arguments._

### STATUS_MROMD_FAHR

Fahrerwunschmoment

_No arguments._

### STATUS_MROMD_REIB

Reibmoment

_No arguments._

### STATUS_MROMD_SOLL

Sollmoment

_No arguments._

### STATUS_XCMZ_E

EWS Uebertragungsfehlerzaehler

_No arguments._

### STATUS_ZHOSYNC_ST

Synchronisationsstatus des Zumesshandlers

_No arguments._

### STATUS_ZUMAB_HE

Ansteuerbeginn Haupteinspritzung

_No arguments._

### STATUS_ZUMAB_NE

Ansteuerbeginn Nacheinspritzung

_No arguments._

### STATUS_ZUMAD_NE

Ansteuerdauer Nacheinspritzung

_No arguments._

### STATUS_ZUOAB_VE1

Ansteuerbeginn Voreinspritzung

_No arguments._

### STATUS_ZUOAD_HE

Ansteuerdauer Haupteinspritzung

_No arguments._

### STATUS_ZUOAD_VE1

Ansteuerdauer Voreinspritzung

_No arguments._

### STATUS_ZUOME_VE

M_E Menge Voreinspritzung

_No arguments._

### STATUS_ZUOMEHE

M_E Menge Haupteinspritzung

_No arguments._

### STATUS_ZUOMEVGW

GW-Kennfeld Menge Voreinspritzung

_No arguments._

### STATUS_ZUOVE_STAT

Voreinspritzung - Schalter

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

LTF Lufttemperatur

_No arguments._

### STATUS_LADEDRUCK

LDF Ladedruck

_No arguments._

### STATUS_MOTORDREHZAHL

N Drehzahl

_No arguments._

### STATUS_MOTORTEMPERATUR

WTF Wassertemperatur

_No arguments._

### STATUS_PWG_FAHRERWUNSCH

PWG Pedalwertgeber Poti 1

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

PWG Spannung Pedalwertgeber Poti 1

_No arguments._

### STEUERN_CHECK_ZUHEIZER

_No description._

_No arguments._

### STEUERN_CHECK_ZUHEIZER_ECOS

_No description._

_No arguments._

### STATUS_RAILDRUCK

KDF Raildruck

_No arguments._

### STATUS_UBATT

UBT Batteriespannung

_No arguments._

### STATUS_VORFOERDERDRUCK

VDF Vorfoerderdruck

_No arguments._

### STATUS_EHMFDRA

Tastverhaeltnis Ansteuerung Drallklappe

_No arguments._

### ABGLEICH_VERSTELLEN_VERBR_KORFAKTOR_ROH

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_VERBR_KORFAKTOR_ROH_WERT | int | Neuer Verstellwert |

### ABGLEICH_LESEN_KDF_KENNLINIE

Raildrucksensor Kennlinien -Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_KDF_KENNLINIE

Mengendrift Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_KDF_KENNLINIE_W1 | real | Neuer Verstellwert |
| ABGLEICH_VERSTELLEN_KDF_KENNLINIE_W2 | real | Neuer Verstellwert |

### ABGLEICH_VERSTELLEN_KDF_KENNLINIE_ROH

Mengendrift Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_KDF_KENNLINIE_W1_ROH | int | Neuer Verstellwert |
| ABGLEICH_VERSTELLEN_KDF_KENNLINIE_W2_ROH | int | Neuer Verstellwert |

### ABGLEICH_PROG_KDF_KENNLINIE

RAILDRUCHSENSOR Abgleich programmieren

_No arguments._

### ABGLEICH_LESEN_HFM

HFM-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_HFM

HFM Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_HFM_NULL_WERT | real | Neuer Verstellwert |
| ABGLEICH_VERSTELLEN_HFM_LL_WERT | real | Neuer Verstellwert |
| ABGLEICH_VERSTELLEN_HFM_LAST_WERT | real | Neuer Verstellwert |

### ABGLEICH_VERSTELLEN_HFM_ROH

HFM Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_HFM_NULL_WERT_ROH | int | Neuer Verstellwert |
| ABGLEICH_VERSTELLEN_HFM_LL_WERT_ROH | int | Neuer Verstellwert |
| ABGLEICH_VERSTELLEN_HFM_LAST_WERT_ROH | int | Neuer Verstellwert |

### ABGLEICH_PROG_HFM

HFM Abgleich programmieren

_No arguments._

### STATUS_LMM_MASSE

LMM Spannung Luftmassenmesser

_No arguments._

## Tables

### BETRIEBSWTAB

| NAME | TELEGRAM | POS_ADR | LEN_ADR | ADR | BYTE | DATA_TYPE | COMPU_TYPE | FACT_A | FACT_B | MASK | VALUE | ANZ | MEAS | RANGE | JOBNAME | LNAME |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| anmPWG | B812F1042C100000 | 06 | 2 | 0x0F60 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmPWG | PWG Pedalwertgeber Poti 1 |
| anmUBT | B812F1042C100000 | 06 | 2 | 0x0F65 | 06 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUBT | UBT Batteriespannung |
| anmVDF | B812F1042C100000 | 06 | 2 | 0x1F06 | 06 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | anmVDF | VDF Vorfoerderdruck |
| anmWTF | B812F1042C100000 | 06 | 2 | 0x0F00 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | anmWTF | WTF Wassertemperatur |
| armM_List | B812F1042C100000 | 06 | 2 | 0x0F30 | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | armM_List | M_L aktuelle Luftmasse |
| armM_Lsoll | B812F1042C100000 | 06 | 2 | 0x0F32 | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | armM_Lsoll | M_L Sollwert fuer AGR-Regelung |
| dzmNmit | B812F1042C100000 | 06 | 2 | 0x0F10 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmNmit | N Drehzahl |
| ehmFKLI | B812F1042C100000 | 06 | 2 | 0x0E91 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFKLI | Tastverhaeltnis Ansteuerung Klimakompressor |
| ehmFARS | B812F1042C100000 | 06 | 2 | 0x0E80 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFARS | Tastverhaeltnis Ansteuerung AGR-Steller |
| ehmFEKP | B812F1042C100000 | 06 | 2 | 0x0EA6 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFEKP | Tastverhaeltnis Ansteuerung Vorfoerderpumpe |
| ehmFDRA | B812F1042C100000 | 06 | 2 | 0x0E9A | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFDRA | Tastverhaeltnis Ansteuerung Drallklappe |
| ehmFGRS | B812F1042C100000 | 06 | 2 | 0x0E87 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFGRS | Tastverhaeltnis Ansteuerung Gluehrelais |
| ehmFKWH | B812F1042C100000 | 06 | 2 | 0x0E9B | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFKWH | Tastverhaeltnis Ansteuerung Kuehlwasserheizung |
| ehmFKDR | B812F1042C100000 | 06 | 2 | 0x0EA5 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFKDR | Tastverhaeltnis Ansteuerung Raildruckregelventil |
| ehmFLDS | B812F1042C100000 | 06 | 2 | 0x0E81 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFLDS | Tastverhaeltnis Ansteuerung Ladedrucksteller |
| ehmFMLS | B812F1042C100000 | 06 | 2 | 0x0EA2 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFMLS | Tastverhaeltnis Ansteuerung Elektroluefter |
| ehmFMML | B812F1042C100000 | 06 | 2 | 0x0E9F | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFMML | Tastverhaeltnis Ansteuerung Motorlager |
| ldmP_Llin | B812F1042C100000 | 06 | 2 | 0x0F40 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | ldmP_Llin | aktueller Ladedruck  / Luftdruck |
| ldmP_Lsoll | B812F1042C100000 | 06 | 2 | 0x0F42 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | ldmP_Lsoll | Sollwert Ladedruck |
| mrmM_EFAHR | B812F1042C100000 | 06 | 2 | 0xDC86 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EFAHR | M_E Fahrmenge nach Laufruheregler |
| zumP_RAIL | B812F1042C100000 | 06 | 2 | 0x1F5D | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | zumP_RAIL | Raildruck fuer Mengenzumessung |
| zumPQsoll | B812F1042C100000 | 06 | 2 | 0x1F5E | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | zumPQsoll | Raildruck Sollwert |
| admADF | B812F1042C100000 | 06 | 2 | 0x2041 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | admADF | ADF Rohwert Atmosphaerendruck |
| admIDV | B812F1042C100000 | 06 | 2 | 0x2FFE | 06 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | admIDV | IDV Rohwert Istwert Stromregelung Druckregelventil |
| admKDF | B812F1042C100000 | 06 | 2 | 0x2FFC | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | admKDF | KDF Rohwert Raildruck |
| admLDF | B812F1042C100000 | 06 | 2 | 0x2042 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | admLDF | LDF Rohwert Ladedruck |
| admLMM | B812F1042C100000 | 06 | 2 | 0x2061 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admLMM | LMM Rohwert Luftmasse |
| admLTF | B812F1042C100000 | 06 | 2 | 0x2001 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | admLTF | LTF Rohwert Lufttemperatur |
| admPGS | B812F1042C100000 | 06 | 2 | 0x2FFA | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admPGS | PGS Rohwert Pedalwertgeber Poti 2 |
| admPWG | B812F1042C100000 | 06 | 2 | 0x2060 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admPWG | PWG Rohwert Pedalwertgeber Poti 1 |
| admUBT | B812F1042C100000 | 06 | 2 | 0x2065 | 06 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUBT | UBT Rohwert Batteriespannung |
| admUC1 | B812F1042C100000 | 06 | 2 | 0x2FF8 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUC1 | UC1 Rohwert Kondensatorspannung 1 fuer Zylinder 1,2,3 |
| admUC2 | B812F1042C100000 | 06 | 2 | 0x2FF9 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUC2 | UC2 Rohwert Kondensatorspannung 2 fuer Zylinder 4,5,6 |
| admUG1 | B812F1042C100000 | 06 | 2 | 0x2FF6 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUG1 | UG1 Rohwert Speisespannung 1 fuer Pedalwertgeber 2, Ladedruckfuehler, Luftmassenmesser |
| admUG2 | B812F1042C100000 | 06 | 2 | 0x2FF7 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUG2 | UG2 Rohwert Speisespannung 2 fuer Pedalwertgeber 1, Kraftstoff- ,Vorfoerderdruckfuehler |
| admVDF | B812F1042C100000 | 06 | 2 | 0x2006 | 06 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | admVDF | VDF Rohwert Vorfoerderdruck |
| admWTF | B812F1042C100000 | 06 | 2 | 0x2000 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | admWTF | WTF Rohwert Wassertemperatur |
| anmADF | B812F1042C100000 | 06 | 2 | 0x0F63 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | anmADF | ADF Atmosphaerendruck |
| anmIDV | B812F1042C100000 | 06 | 2 | 0x0FFE | 06 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | anmIDV | IDV Istwert Stromregelung Druckregelventil |
| anmKDF | B812F1042C100000 | 06 | 2 | 0x0FFC | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | anmKDF | KDF Raildruck |
| anmLDF | B812F1042C100000 | 06 | 2 | 0x0F62 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | anmLDF | LDF Ladedruck |
| anmLMM | B812F1042C100000 | 06 | 2 | 0x0F61 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmLMM | LMM Luftmasse |
| anmLTF | B812F1042C100000 | 06 | 2 | 0x0F01 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | anmLTF | LTF Lufttemperatur |
| anmPGS | B812F1042C100000 | 06 | 2 | 0x0FFA | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmPGS | PGS Pedalwertgeber Poti 2 |
| anmUC1 | B812F1042C100000 | 06 | 2 | 0x0FF8 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUC1 | UC1 Kondensatorspannung 1 fuer Zylinder 1,2,3 |
| anmUC2 | B812F1042C100000 | 06 | 2 | 0x0FF9 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUC2 | UC2 Kondensatorspannung 2 fuer Zylinder 4,5,6 |
| anmUG1 | B812F1042C100000 | 06 | 2 | 0x0FF6 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUG1 | UG1 Speisespannung 1 fuer Pedalwertgeber 2, Ladedruckfuehler, Luftmassenmesser |
| anmUG2 | B812F1042C100000 | 06 | 2 | 0x0FF7 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUG2 | UG2 Speisespannung 2 fuer Pedalwertgeber 1, Kraftstoff- ,Vorfoerderdruckfuehler |
| anoU_ADF | B812F1042C100000 | 06 | 2 | 0x3011 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_ADF | ADF Spannung Atmosphaerendruckfuehler |
| anoU_IDV | B812F1042C100000 | 06 | 2 | 0x300C | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_IDV | IDV Spannung zur Strommessung Druckregelventil |
| anoU_KDF | B812F1042C100000 | 06 | 2 | 0x300A | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_KDF | KDF Spannung Raildruckfuehler |
| anoU_LDF | B812F1042C100000 | 06 | 2 | 0x3004 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LDF | LDF Spannung Ladedruckfuehler |
| anoU_LMM | B812F1042C100000 | 06 | 2 | 0x0F34 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LMM | LMM Spannung Luftmassenmesser |
| anoU_LTF | B812F1042C100000 | 06 | 2 | 0x300E | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LTF | LTF Spannung Lufttemperaturfuehler |
| anoU_PGS | B812F1042C100000 | 06 | 2 | 0x3006 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_PGS | PGS Spannung Pedalwertgeber Poti 2 |
| anoU_PWG | B812F1042C100000 | 06 | 2 | 0x0F35 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_PWG | PWG Spannung Pedalwertgeber Poti 1 |
| anoU_UBT | B812F1042C100000 | 06 | 2 | 0x3013 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UBT | UBT Spannung Batteriespannung |
| anoU_UC1 | B812F1042C100000 | 06 | 2 | 0x3008 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UC1 | UC1 Spannung Kondensatorspannung 1 fuer Zylinder 1,2,3 |
| anoU_UC2 | B812F1042C100000 | 06 | 2 | 0x3009 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UC2 | UC2 Spannung Kondensatorspannung 2 fuer Zylinder 4,5,6 |
| anoU_UG1 | B812F1042C100000 | 06 | 2 | 0x3016 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UG1 | UG1 Spannung Speisespannung 1 fuer Pedalwertgeber 2, Ladedruckfuehler, Luftmassenmesser |
| anoU_UG2 | B812F1042C100000 | 06 | 2 | 0x3017 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UG2 | UG2 Spannung Speisespannung 2 fuer Pedalwertgeber 1, Kraftstoff- ,Vorfoerderdruckfuehler |
| anoU_VDF | B812F1042C100000 | 06 | 2 | 0x301A | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_VDF | VDF Spannung Vorfoerderdruckfuehler |
| anoU_WTF | B812F1042C100000 | 06 | 2 | 0x3002 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_WTF | WTF Spannung Wassertemperaturfuehler |
| aroIST_4 | B812F1042C100000 | 06 | 2 | 0x0010 | 06 | 5 | -- | 0.0359929742 | 0 | 0x00 | 0x00 | 6.2f | kg/h | -- | aroIST_4 | MLt Luftmassenstrom n. Linearisierung u. Mittelung |
| aroIST_5 | B812F1042C100000 | 06 | 2 | 0xDF0E | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | aroIST_5 | M_L normierte Luftmasse (nicht T_L/P_ADF-korrig.) |
| aroREG_2 | B812F1042C100000 | 06 | 2 | 0x0EE0 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | aroREG_2 | AGR-Status  Regelung / Steuerung / Abschaltung |
| aroSOLL_5 | B812F1042C100000 | 06 | 2 | 0x0F31 | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | aroSOLL_5 | M_L Luft-Sollwert nach Sollwertbegrenzung |
| camN_EL | B812F1042C100000 | 06 | 2 | 0x2220 | 06 | 5 | -- | 0.0915555284 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | camN_EL | MLS Drehzahlstufe E-Luefter |
| camS_AC | B812F1042C100000 | 06 | 2 | 0x1FB1 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | camS_AC | Schalter Klimabereitschaft |
| camS_HZL | B812F1042C100000 | 06 | 2 | 0xE4D1 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | camS_HZL | Anforderung Heizleistung von Klimasteuergeraet |
| camS_KO | B812F1042C100000 | 06 | 2 | 0x1FB0 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | camS_KO | Schalter Klimakompressor |
| camT_UMG | B812F1042C100000 | 06 | 2 | 0xE4D0 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | camT_UMG | Umgebungstemperatur aus CAN |
| caoVERB | B812F1042C100000 | 06 | 2 | 0x2160 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | ul | -- | caoVERB | Kraftstoffverbrauch fuer CAN DDE4-VERBRAUCH |
| comGTR_opt | B812F1042C100000 | 06 | 2 | 0x1C00 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | comGTR_opt | Identifikation Handschalter/Automatik |
| dimDIG_0 | B812F1042C100000 | 06 | 2 | 0x0F6C | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimDIG_0 | Auf logisch 0 erkannte Digitaleingaenge |
| dimDIG_1 | B812F1042C100000 | 06 | 2 | 0x0F6D | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimDIG_1 | Auf logisch 1 erkannte Digitaleingaenge |
| dimDIGprel | B812F1042C100000 | 06 | 2 | 0x0F70 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimDIGprel | Entprellte logische Zustaende der digitalen Eingaenge |
| dimF_MFL | B812F1042C100000 | 06 | 2 | 0x2F74 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimF_MFL | FGR Multifunktionslenkrad |
| dzmNakt | B812F1042C100000 | 06 | 2 | 0x0F12 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmNakt | N aktuelle Drehzahl aus letzter Periode |
| dzmzMk1 | B812F1042C100000 | 06 | 2 | 0x0F19 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk1 | Selektive Mengenkorrektur Zylinder 1 |
| dzmzMk2 | B812F1042C100000 | 06 | 2 | 0x0F1A | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk2 | Selektive Mengenkorrektur Zylinder 2 |
| dzmzMk3 | B812F1042C100000 | 06 | 2 | 0x0F1B | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk3 | Selektive Mengenkorrektur Zylinder 3 |
| dzmzMk4 | B812F1042C100000 | 06 | 2 | 0x0F1C | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk4 | Selektive Mengenkorrektur Zylinder 4 |
| dzmzMk5 | B812F1042C100000 | 06 | 2 | 0x0F1D | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk5 | Selektive Mengenkorrektur Zylinder 5 |
| dzmzMk6 | B812F1042C100000 | 06 | 2 | 0x0F1E | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk6 | Selektive Mengenkorrektur Zylinder 6 |
| dzmzN1 | B812F1042C100000 | 06 | 2 | 0x0F13 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN1 | Selektive Drehzahl Zylinder 1 |
| dzmzN2 | B812F1042C100000 | 06 | 2 | 0x0F14 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN2 | Selektive Drehzahl Zylinder 2 |
| dzmzN3 | B812F1042C100000 | 06 | 2 | 0x0F15 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN3 | Selektive Drehzahl Zylinder 3 |
| dzmzN4 | B812F1042C100000 | 06 | 2 | 0x0F16 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN4 | Selektive Drehzahl Zylinder 4 |
| dzmzN5 | B812F1042C100000 | 06 | 2 | 0x0F17 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN5 | Selektive Drehzahl Zylinder 5 |
| dzmzN6 | B812F1042C100000 | 06 | 2 | 0x0F18 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN6 | Selektive Drehzahl Zylinder 6 |
| edmRSTCD | B812F1042C100000 | 06 | 2 | 0x0E00 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | edmRSTCD | Restart Code |
| fbmBSTZ_UB | B812F1042C100000 | 06 | 2 | 0x1300 | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | h | -- | fbmBSTZ_UB | UB Betriebsstunden |
| fbmDIA_C | B812F1042C100000 | 06 | 2 | 0xDF01 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fbmDIA_C | Diagnoselampe ueber CAN |
| fbmMIL_C | B812F1042C100000 | 06 | 2 | 0xDF02 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fbmMIL_C | MIL Malfunction Indikator Lamp ueber CAN |
| fbmSDIAL | B812F1042C100000 | 06 | 2 | 0x1000 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fbmSDIAL | Anforderung Diagnoselampe aus Fehlerbehandlung (0:Aus,1:Ein,2:Blinken) |
| fboDIALA | B812F1042C100000 | 06 | 2 | 0xDF00 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboDIALA | Diagnose - Lampe Status (255 = EIN) |
| fboS_00 | B812F1042C100000 | 06 | 2 | 0xDF70 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_00 | Defekte Pfade 1 bis 16 |
| fboS_02 | B812F1042C100000 | 06 | 2 | 0xDF72 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_02 | Defekte Pfade 17 bis 32 |
| fboS_04 | B812F1042C100000 | 06 | 2 | 0xDF74 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_04 | Defekte Pfade 33 bis 48 |
| fboS_06 | B812F1042C100000 | 06 | 2 | 0xDF76 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_06 | Defekte Pfade 49 bis 64 |
| fboS_08 | B812F1042C100000 | 06 | 2 | 0xDF78 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_08 | Defekte Pfade 65 bis 80 |
| fgm_VzuN | B812F1042C100000 | 06 | 2 | 0x0F0B | 06 | 5 | -- | 0.0000391 | 0 | 0x00 | 0x00 | 6.2f | (km/h)/(1/min) | -- | fgm_VzuN | Verhaeltnis Geschwindigkeit/Drehzahl (V/N aktuell)  |
| fgmBESCH | B812F1042C100000 | 06 | 2 | 0x0F0A | 06 | 7 | -- | 0.0847711 | -10.8506944 | 0x00 | 0x00 | 6.2f | m/s^2 | -- | fgmBESCH | Beschleunigung |
| fgmFGAKT | B812F1042C100000 | 06 | 2 | 0x0F08 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | km/h | -- | fgmFGAKT | aktuelle Geschwindigkeit |
| gsoGS_Pha | B812F1042C100000 | 06 | 2 | 0x2152 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | gsoGS_Pha | Gluehzeitsteuerung Gluehphase |
| khoGENLAST | B812F1042C100000 | 06 | 2 | 0x0ECC | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | khoGENLAST | Generatorlast |
| khoNOR_AB | B812F1042C100000 | 06 | 2 | 0x0FB7 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | khoNOR_AB | Zustand und Abschaltbedingungen der Kuehlmittelheizung |
| klmKLI_GEF | B812F1042C100000 | 06 | 2 | 0xE4D2 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | klmKLI_GEF | Klimaanlage verbaut |
| ldmADF | B812F1042C100000 | 06 | 2 | 0x0F41 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | ldmADF | aktueller Atmosphaerendruck |
| ldmT_LTGG | B812F1042C100000 | 06 | 2 | 0x0F48 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | ldmT_LTGG | Errechnete Lufttemperatur |
| ldoTVsteu | B812F1042C100000 | 06 | 2 | 0x0F49 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ldoTVsteu | LDR Tastverhaeltnis Steuerung |
| mrmCASE_A | B812F1042C100000 | 06 | 2 | 0xDF21 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmCASE_A | ARD Zustand-Bits der aktiven Ruckeldaempfung |
| mrmCASE_L | B812F1042C100000 | 06 | 2 | 0xDF20 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmCASE_L | LLR Zustand-Bits der Leerlaufregelung |
| mrmF_GANG | B812F1042C100000 | 06 | 2 | 0x0F7E | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmF_GANG | FGR aktuelle Gangstufe |
| mrmFG_SOLL | B812F1042C100000 | 06 | 2 | 0x0F09 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | km/h | -- | mrmFG_SOLL | V Sollwert Fahrgeschwindigkeit von FGR |
| mrmKM_akt | B812F1042C100000 | 06 | 2 | 0x0FD0 | 06 | 5 | -- | 10 | 0 | 0x00 | 0x00 | 6.2f | km | -- | mrmKM_akt | aktueller km-Stand von Kombiinstrument |
| mrmL_FGR | B812F1042C100000 | 06 | 2 | 0x2F75 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmL_FGR | FGR-Status-Indicator-Lampe ueber CAN |
| mrmLLRIAnt | B812F1042C100000 | 06 | 2 | 0xDF13 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmLLRIAnt | M_E Menge aus I-Anteil des PI-Leerlaufreglers |
| mrmLLRPAnt | B812F1042C100000 | 06 | 2 | 0xDF14 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmLLRPAnt | M_E Menge aus P-Anteil des PI-Leerlaufreglers |
| mrmM_DXMSR | B812F1042C100000 | 06 | 2 | 0x0F89 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_DXMSR | M_E externer Momenteneingriff MSR |
| mrmM_EAKT | B812F1042C100000 | 06 | 2 | 0x0F80 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EAKT | M_E Aktuelle Einspritzmenge (ohne ARD) |
| mrmM_EARD | B812F1042C100000 | 06 | 2 | 0xDC88 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EARD | M_E Menge ARD - Gesamt vor Begrenzung |
| mrmM_EBEGR | B812F1042C100000 | 06 | 2 | 0x0F8A | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EBEGR | M_E resultierende Begrenzungsmenge |
| mrmM_EDELB | B812F1042C100000 | 06 | 2 | 0x1F8E | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EDELB | M_E begrenzte Abgleichmenge |
| mrmM_EFGR | B812F1042C100000 | 06 | 2 | 0x0F85 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EFGR | M_E Wunschmenge aus Fahrgeschwindigkeitsregelung |
| mrmM_EKORR | B812F1042C100000 | 06 | 2 | 0x0F8E | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EKORR | M_E Fahrmenge korrigiert mit Vollast- und Mengenabgleich |
| mrmM_ELLR | B812F1042C100000 | 06 | 2 | 0x0F8D | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ELLR | M_E Menge aus Leerlaufregelung |
| mrmM_ELRR | B812F1042C100000 | 06 | 2 | 0xDC87 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ELRR | M_E Menge aus Laufruheregler |
| mrmM_EMOT | B812F1042C100000 | 06 | 2 | 0x0F8C | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EMOT | M_E Einspritzmenge nach ARD |
| mrmM_EPWG | B812F1042C100000 | 06 | 2 | 0x0F84 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EPWG | M_E Wunschmenge = f(PWG) aus Fahrverhaltenkennfeld |
| mrmM_ESTAR | B812F1042C100000 | 06 | 2 | 0x0F82 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ESTAR | M_E resultierender Startmengen-Sollwert |
| mrmM_EWUN | B812F1042C100000 | 06 | 2 | 0x0F8B | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EWUN | M_E Fahrerwunschmenge nach externem Mengeneingriff |
| mrmM_EWUNF | B812F1042C100000 | 06 | 2 | 0x0F86 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EWUNF | M_E Fahrerwunschmenge aus PWG oder FGR |
| mrmN_LLBAS | B812F1042C100000 | 06 | 2 | 0x0E02 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | mrmN_LLBAS | N Leerlaufsolldrehzahl |
| mrmPWGfi | B812F1042C100000 | 06 | 2 | 0x0F83 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | mrmPWGfi | PWG gefilterte Pedalwertgeber-Position |
| mrmSTATUS | B812F1042C100000 | 06 | 2 | 0x0F7F | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmSTATUS | Status Motorbetriebsphase |
| mroFABZUST | B812F1042C100000 | 06 | 2 | 0x0F9A | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroFABZUST | Zustand Ablaufsteuerung |
| mroFGR_ABN | B812F1042C100000 | 06 | 2 | 0xDF08 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroFGR_ABN | FGR Abschalt-Bedingungen |
| mroKickDwn | B812F1042C100000 | 06 | 2 | 0x1F9A | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroKickDwn | Schalter Kickdown |
| mroLLRDAnt | B812F1042C100000 | 06 | 2 | 0xDF15 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mroLLRDAnt | M_E Menge aus Leerlaufregler-DT1-Vorsteuerung |
| mroLRRReg | B812F1042C100000 | 06 | 2 | 0xDC90 | 06 | 7 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | mroLRRReg | Nsegm Segmentdrehzahl-Regelabweichung fuer Laufruheregler |
| mroM_ARDFF | B812F1042C100000 | 06 | 2 | 0xDC89 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mroM_ARDFF | M_E Menge ARD - Fuehrungsformer |
| mroMD_FAHR | B812F1042C100000 | 06 | 2 | 0x2211 | 06 | 5 | -- | 2 | 0 | 0x00 | 0x00 | 6.2f | Nm | -- | mroMD_FAHR | Fahrerwunschmoment |
| mroMD_REIB | B812F1042C100000 | 06 | 2 | 0x2212 | 06 | 5 | -- | 2 | 0 | 0x00 | 0x00 | 6.2f | Nm | -- | mroMD_REIB | Reibmoment |
| mroMD_SOLL | B812F1042C100000 | 06 | 2 | 0x2210 | 06 | 5 | -- | 2 | 0 | 0x00 | 0x00 | 6.2f | Nm | -- | mroMD_SOLL | Sollmoment |
| xcmZ_E | B812F1042C100000 | 06 | 2 | 0x0FAE | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | xcmZ_E | EWS Uebertragungsfehlerzaehler |
| zhoSYNC_ST | B812F1042C100000 | 06 | 2 | 0x1F50 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zhoSYNC_ST | Synchronisationsstatus des Zumesshandlers |
| zumAB_HE | B812F1042C100000 | 06 | 2 | 0x1F5A | 06 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zumAB_HE | Ansteuerbeginn Haupteinspritzung |
| zumAB_NE | B812F1042C100000 | 06 | 2 | 0x1F60 | 06 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zumAB_NE | Ansteuerbeginn Nacheinspritzung |
| zumAD_NE | B812F1042C100000 | 06 | 2 | 0x1F61 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | uS | -- | zumAD_NE | Ansteuerdauer Nacheinspritzung |
| zuoAB_VE1 | B812F1042C100000 | 06 | 2 | 0x1F51 | 06 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zuoAB_VE1 | Ansteuerbeginn Voreinspritzung |
| zuoAD_HE | B812F1042C100000 | 06 | 2 | 0x1F5B | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | uS | -- | zuoAD_HE | Ansteuerdauer Haupteinspritzung |
| zuoAD_VE1 | B812F1042C100000 | 06 | 2 | 0x1F52 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | uS | -- | zuoAD_VE1 | Ansteuerdauer Voreinspritzung |
| zuoME_VE | B812F1042C100000 | 06 | 2 | 0x1F53 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | zuoME_VE | M_E Menge Voreinspritzung |
| zuoMEHE | B812F1042C100000 | 06 | 2 | 0x1F5C | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | zuoMEHE | M_E Menge Haupteinspritzung |
| zuoMEVGW | B812F1042C100000 | 06 | 2 | 0x1F57 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | zuoMEVGW | GW-Kennfeld Menge Voreinspritzung |
| zuoVE_STAT | B812F1042C100000 | 06 | 2 | 0x1F55 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zuoVE_STAT | Voreinspritzung - Schalter |
| anmLTF | B812F1042C100000 | 06 | 2 | 0x0F01 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | AN_LUFTTEMPERATUR | LTF Lufttemperatur |
| anmLDF | B812F1042C100000 | 06 | 2 | 0x0F62 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | LADEDRUCK | LDF Ladedruck |
| dzmNmit | B812F1042C100000 | 06 | 2 | 0x0F10 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | MOTORDREHZAHL | N Drehzahl |
| anmWTF | B812F1042C100000 | 06 | 2 | 0x0F00 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | MOTORTEMPERATUR | WTF Wassertemperatur |
| anmPWG | B812F1042C100000 | 06 | 2 | 0x0F60 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | PWG_FAHRERWUNSCH | PWG Pedalwertgeber Poti 1 |
| anoU_PWG | B812F1042C100000 | 06 | 2 | 0x0F35 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | PWG_POTI_SPANNUNG | PWG Spannung Pedalwertgeber Poti 1 |
| anmKDF | B812F1042C100000 | 06 | 2 | 0x0FFC | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | RAILDRUCK | KDF Raildruck |
| anmUBT | B812F1042C100000 | 06 | 2 | 0x0F65 | 06 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | UBATT | UBT Batteriespannung |
| anmVDF | B812F1042C100000 | 06 | 2 | 0x1F06 | 06 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | VORFOERDERDRUCK | VDF Vorfoerderdruck |

### BITS

| TELNAME | TELEGRAMM | NAME | BYTE | MASK | VALUE | LNAME | TEXT_0 | TEXT_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| dimDIGprel | 0F70 | S_BRL | 6 | 0x01 | 0x01 | Eingang Bremslichtschalter | Pedal nicht betaetigt (Masse) | Pedal betaetigt (Ubatt) |
| dimDIGprel | 0F70 | S_BRT | 6 | 0x02 | 0x02 | Eingang Bremslichttestschalter | Pedal nicht betaetigt (Masse) | Pedal betaetigt (Ubatt) |
| dimDIGprel | 0F70 | S_GZS | 6 | 0x10 | 0x10 | Eingang Gluehzeitrelais Diagnose | HIGH (Ubatt) = GLUEHEN EIN wenn System ok | LOW (Masse) = GLUEHEN AUS wenn System ok |
| dimDIGprel | 0F70 | S_KUP | 7 | 0x20 | 0x20 | Eingang Kupplungsschalter | Pedal nicht betaetigt (Masse) | Pedal betaetigt (Ubatt) |
| dimDIGprel | 0F70 | S_ODS | 7 | 0x08 | 0x08 | Eingang Oeldruckschalter | Oeldruck io (Ubatt) | Oeldruck zu niedrig (Masse) |
| comGTR_opt | 1C00 | S_EGS | 9 | 0x01 | 0x01 | Getriebe | Automat | Handschalt |
| mroKickDwn | 1F9A | S_KD | 17 | 0x01 | 0x01 | Kick Down | nicht betaetigt | betaetigt |
| camS_KO | 1FB0 | S_KO | 19 | 0x01 | 0x01 | Schalter Klimakompressor KO (CAN) | nicht betaetigt | betaetigt |
| camS_AC | 1FB1 | S_AC | 21 | 0x01 | 0x01 | Schalter Klimabereitschaft AC (CAN) | nicht betaetigt | betaetigt |
| fbmDIA_C | DF01 | S_DIALA | 13 | 0x01 | 0x01 | Status Diagnoselampe (CAN) | nicht angesteuert | angesteuert |
| dimF_MFL | 2F74 | S_MFLWA | 11 | 0x09 | 0x09 | MFL Bedienteil WA Wiederaufnahme | betaetigt | nicht betaetigt |
| dimF_MFL | 2F74 | S_MFLEINP | 11 | 0x12 | 0x12 | MFL Bedienteil EIN + | betaetigt | nicht betaetigt |
| dimF_MFL | 2F74 | S_MFLAUS | 11 | 0x20 | 0x20 | MFL Bedienteil AUS | betaetigt | nicht betaetigt |
| dimF_MFL | 2F74 | S_MFLEINM | 11 | 0x40 | 0x40 | MFL Bedienteil EIN - | betaetigt | nicht betaetigt |
| dimF_MFL | 2F74 | S_MFLTGL | 11 | 0x80 | 0x80 | MFL Bedienteil Togglebit | Zustand 0 | Zustand 1 |
| mroFGR_ABN | DF08 | S_RFGRKUP | 15 | 0x01 | 0x01 | Reversible FGR Abschaltbedingung | io (Kupplung betaetigt) | durch Kupplung betaetigt |
| mroFGR_ABN | DF08 | S_RFGRVNM | 15 | 0x02 | 0x02 | Reversible FGR Abschaltbedingung | io (Hochdrehen) | durch Hochdrehen |
| mroFGR_ABN | DF08 | S_RFGRBRK | 15 | 0x04 | 0x04 | Reversible FGR Abschaltbedingung | io (Bremse betaetigt) | durch Bremse betaetigt |
| mroFGR_ABN | DF08 | S_RFGRVMN | 15 | 0x08 | 0x08 | Reversible FGR Abschaltbedingung | io (Geschwindigkeit zu klein) | durch Geschwindigkeit zu klein |
| mroFGR_ABN | DF08 | S_RFGRVZG | 15 | 0x10 | 0x10 | Reversible FGR Abschaltbedingung | io (Verzoegerung zu gross) | durch Verzoegerung zu gross |
| mroFGR_ABN | DF08 | S_RFGRUEB | 15 | 0x20 | 0x20 | Reversible FGR Abschaltbedingung | io (Geschwindigkeit zu gross) | durch  Geschwindigkeit zu gross |
| mroFGR_ABN | DF08 | S_RFGRVMR | 15 | 0x40 | 0x40 | Reversible FGR Abschaltbedingung | io (Einschaltgeschwindigkeit zu gering) | Einschaltgeschwindigkeit zu gering |
| mroFGR_ABN | DF08 | S_RFGRMSW | 15 | 0x80 | 0x80 | Reversible FGR Abschaltbedingung | io (Mainswitch) | Mainswitch nicht eingeschaltet |
| mroFGR_ABN | DF08 | S_RFGRGNG | 14 | 0x01 | 0x01 | Reversible FGR Abschaltbedingung | io (kein gueltiger Gang) | kein gueltiger Gang |
| mroFGR_ABN | DF08 | S_RFGRABS | 14 | 0x02 | 0x02 | Reversible FGR Abschaltbedingung | io (Abschaltung aktiv) | Abschaltung aktiv |
| mroFGR_ABN | DF08 | S_IKUP | 14 | 0x10 | 0x10 | Irreversible FGR Abschaltbedingung | io (Fehler Kupplung) | Fehler Kupplung |
| mroFGR_ABN | DF08 | S_IBRE | 14 | 0x20 | 0x20 | Irreversible FGR Abschaltbedingung | io (Fehler Bremse) | Fehler Bremse |
| mroFGR_ABN | DF08 | S_IMFLTGL | 14 | 0x40 | 0x40 | Irreversible FGR Abschaltbedingung | io (Fehler MFL Togglebit) | Fehler MFL Togglebit |
| mroFGR_ABN | DF08 | S_IOPT | 14 | 0x80 | 0x80 | Irreversible FGR Abschaltbedingung | io (FGR nicht variantencodiert) | FGR nicht variantencodiert |
| camS_HZL | E4D1 | S_KLIANF | 23 | 0x01 | 0x01 | Anforderung Heizleistung von Klimasteuergeraet (CAN) | keine angefordert | angefordert |
| khoNOR_AB | 0FB7 | S_KWH_WTF | 25 | 0x01 | 0x01 | Abschaltbedingung Kuehlmittelheizung | io (Wassertemperatur ausreichend) | Wassertemperatur ausreichend |
| khoNOR_AB | 0FB7 | S_KWH_GEN1 | 25 | 0x02 | 0x02 | Abschaltbedingung Kuehlmittelheizung | io (Generatorlastfehler) | Generatorlastfehler |
| khoNOR_AB | 0FB7 | S_KWH_UBATT | 25 | 0x04 | 0x04 | Abschaltbedingung Kuehlmittelheizung | io (Batteriespannung zu niedrig) | Batteriespannung zu niedrig |
| khoNOR_AB | 0FB7 | S_KWH_N | 25 | 0x08 | 0x08 | Abschaltbedingung Kuehlmittelheizung | io (Motordrehzahl zu niedrig) | Motordrehzahl zu niedrig |
| khoNOR_AB | 0FB7 | S_KWH_START | 25 | 0x10 | 0x10 | Abschaltbedingung Kuehlmittelheizung | io (Startverzoegerung aktiv) | Startverzoegerung aktiv |
| khoNOR_AB | 0FB7 | S_KWH_SENSDEF | 25 | 0x20 | 0x20 | Abschaltbedingung Kuehlmittelheizung | io (WTF, UTF oder Endstufe defekt) | WTF, UTF oder Endstufe defekt |
| khoNOR_AB | 0FB7 | S_KWH_IKHA | 25 | 0x80 | 0x80 | Abschaltbedingung Kuehlmittelheizung | io (keine Heizleistungsanforderung von IHKA) | keine Heizleistungsanforderung von IHKA |
| khoNOR_AB | 0FB7 | S_KWH_GENSRC | 24 | 0x08 | 0x08 | Abschaltbedingung Kuehlmittelheizung | io (Generatorlast Null Prozent) | Generatorlast Null Prozent |
| khoNOR_AB | 0FB7 | S_KWH_APPL | 24 | 0x80 | 0x80 | Abschaltbedingung Kuehlmittelheizung | io (Wegappliziert) | Wegappliziert |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0X00 | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0X10 | ERROR_ECU_GENERAL_REJECT |
| 0X11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0X12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED_INVALID_FORMAT |
| 0X21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0X22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0X23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0X31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0X33 | ERROR_ECU_SECURITY_ACCESS_DENIED_SECURITY_ACCESS_REQUESTED |
| 0X35 | ERROR_ECU_INVALID_KEY |
| 0X36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0X37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0X40 | ERROR_ECU_DOWNLOAD_NOT_ACCEPTED |
| 0X41 | ERROR_ECU_IMPROPER_DOWNLOAD_TYPE |
| 0X42 | ERROR_ECU_CANNOT_DOWNLOAD_TO_SPECIFIED_ADDRESS |
| 0X43 | ERROR_ECU_CANNOT_DOWNLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0X50 | ERROR_ECU_UPLOAD_NOT_ACCEPTED |
| 0X51 | ERROR_ECU_IMPROPER_UPLOAD_TYPE |
| 0X52 | ERROR_ECU_CANNOT_UPLOAD_FROM_SPECIFIED_ADDRESS |
| 0X53 | ERROR_ECU_CANNOT_UPLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0X71 | ERROR_ECU_TRANSFER_SUSPENDED |
| 0X72 | ERROR_ECU_TRANSFER_ABORTED |
| 0X74 | ERROR_ECU_ILLEGAL_ADDRESS_IN_BLOCK_TRANSFER |
| 0X75 | ERROR_ECU_ILLEGAL_BYTE_COUNT_IN_BLOCK_TRANSFER |
| 0X76 | ERROR_ECU_ILLEGAL_BLOCK_TRANSFER_TYPE |
| 0X77 | ERROR_ECU_BLOCKTRANSFER_DATA_CHECKSUM_ERROR |
| 0X78 | ERROR_ECU_REQ_CORRECTLY_RCVD_RSP_PENDING |
| 0X79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0X80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIGNOSTICMODE |
| 0XF9 | ERROR_ECU_VEHICLE_MANUFACTURER_SPECIFIC |
| 0XFE | ERROR_ECU_SYSTEM_SUPPLIER_SPECIFIC |
| 0XFF | ERROR_ECU_RESERVED_BY_DOCUMENT |
| ?01? | OKAY |
| ?02? | BUSY |
| ?03? | AIF_NICHT_PROGRAMMIERT |
| ?04? | KEIN AIF MEHR FREI |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT | UW_1 | UW_2 | UW_3 | UW_4 |
| --- | --- | --- | --- | --- | --- |
| 0x0100 | Luftmassenmesser | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0105 | Atmosphaerendruckfuehler (im Steuergeraet verbaut) | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0110 | Lufttemperaturfuehler | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0115 | Kuehlmitteltemperaturfuehler | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0120 | Pedalwertgeber | 0x01 | 0x05 | 0x09 | 0x10 |
| 0x0190 | Raildrucksensor | 0x01 | 0x11 | 0x03 | 0x04 |
| 0x0200 | Injektor Zylinder 1 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0201 | Injektor Zylinder 5 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0202 | Injektor Zylinder 3 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0203 | Injektor Zylinder 6 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0204 | Injektor Zylinder 2 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0205 | Injektor Zylinder 4 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0206 | Injektor 41(nicht verwendet) | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0220 | Pedalwertgeber PGS | 0x01 | 0x05 | 0x08 | 0x10 |
| 0x0235 | Ladedruckfuehler | 0x01 | 0x02 | 0x03 | 0x16 |
| 0x0335 | Drehzahl Kurbelwelle | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x0400 | Abgasrueckfuehr-Regelung oder Abgasrueckfuehrsteller | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0404 | Abgasrueckfuehr-Regelung | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0480 | Elektroluefter | 0x01 | 0x02 | 0x05 | 0x12 |
| 0x0500 | Fahrgeschwindigkeitssignal | 0x01 | 0x02 | 0x06 | 0x08 |
| 0x0560 | Referenzspannung intern | 0x01 | 0x02 | 0x05 | 0x04 |
| 0x0600 | Steuergeraet DDE (CAN-Controller) | 0x01 | 0x05 | 0x03 | 0x10 |
| 0x0605 | Steuergeraet DDE (Microcontroller) | 0x01 | 0x14 | 0x03 | 0x05 |
| 0x09F6 | Raildruckueberwachung im Start | 0x01 | 0x11 | 0x03 | 0x04 |
| 0x1190 | Raildruck-Plausibilitaet | 0x01 | 0x11 | 0x03 | 0x04 |
| 0x1195 | Raildruckregelventil | 0x01 | 0x11 | 0x05 | 0x04 |
| 0x1250 | Relais Vorfoerderpumpe | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1255 | Vorfoerderdruckfuehler | 0x01 | 0x06 | 0x03 | 0x04 |
| 0x1260 | Vorfoerderdruck-Ueberwachung | 0x01 | 0x06 | 0x03 | 0x11 |
| 0x1470 | Ladedruck-Regelung | 0x01 | 0x02 | 0x03 | 0x07 |
| 0x1612 | Diagnoselampe | 0x01 | 0x11 | 0x03 | 0x04 |
| 0x1613 | Laufruheregler | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1640 | Steuergeraet DDE (EEPROM und Konfiguration) | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x19E6 | Oeldruckkontrollampe | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1A04 | Kuehlmittelheizung | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1A0E | Generatorlastsignal | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1A18 | Umgebungstemperatur | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1A22 | Drallklappe           | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1DF5 | Elektronische Wegfahrsperre (EWS) | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1E00 | CAN-Bus           | 0x01 | 0x05 | 0x03 | 0x10 |
| 0x1E05 | Bedienteil Fahrgeschwindigkeitsregelung | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1E25 | Ueberwachung Drehzahlgeber | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1E30 | Ladedruck-Regelung oder Ladedrucksteller | 0x01 | 0x02 | 0x03 | 0x07 |
| 0x1E35 | Fehler im Nachlauf beim Abstellen ueber Off oder Nullmenge | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1E40 | Analog / Digital Wandler-Testspannung | 0x01 | 0x09 | 0x05 | 0x08 |
| 0x1E45 | Kondensatorspannung 1 fuer Zylinder 1,2,3 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1E50 | Kondensatorspannung 2 fuer Zylinder 4,5,6 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1E55 | Speisespannung fuer Pedalwertgeber, Ladedruckfuehler, Luftmassenmesser | 0x01 | 0x02 | 0x05 | 0x09 |
| 0x1E60 | Speisespannung fuer Pedalwertgeber, Raildrucksensor, Vorfoerderdruckfuehler | 0x01 | 0x02 | 0x05 | 0x08 |
| 0x2800 | Versorgungsspannung | 0x01 | 0x02 | 0x03 | 0x15 |
| 0x3000 | Bremslicht- / Bremstestschalter | 0x01 | 0x05 | 0x08 | 0x10 |
| 0x3005 | Klemme 15           | 0x01 | 0x02 | 0x06 | 0x05 |
| 0x3010 | Kupplungsschalter | 0x01 | 0x10 | 0x03 | 0x08 |
| 0x3505 | Gluehanlage           | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x3510 | DDE-Hauptrelais | 0x01 | 0x02 | 0x05 | 0x04 |
| 0x3515 | Klimaleistungsausgang | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x3520 | Motorlagersteuerung | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0000 | unbekannter Fehlerort | 0x00 | 0x00 | 0x00 | 0x00 |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 | A9_0 | A9_1 | A10_0 | A10_1 | A11_0 | A11_1 | A12_0 | A12_1 | A13_0 | A13_1 | A14_0 | A14_1 | A15_0 | A15_1 | A16_0 | A16_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0100 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x3 | 0x00 | 0x2 | 0x00 | 0x42 | 0x00 | 0x1 | 0x00 | 0x3F | 0x00 | 0x3C | 0x00 | 0x00 | 0x00 | 0x20 |
| 0x0105 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x3F | 0x00 | 0x3C | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0110 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x3D | 0x00 | 0x3E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0115 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x3D | 0x00 | 0x3E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0120 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x3C | 0x00 | 0x42 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0190 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x1C | 0x00 | 0x47 | 0x00 | 0x42 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0200 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x44 | 0x00 | 0x00 | 0x00 | 0x43 | 0x00 | 0x1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x39 | 0x00 | 0x00 |
| 0x0201 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x44 | 0x00 | 0x00 | 0x00 | 0x43 | 0x00 | 0x1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x39 | 0x00 | 0x00 |
| 0x0202 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x44 | 0x00 | 0x00 | 0x00 | 0x43 | 0x00 | 0x1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x39 | 0x00 | 0x00 |
| 0x0203 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x44 | 0x00 | 0x00 | 0x00 | 0x43 | 0x00 | 0x1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x39 | 0x00 | 0x00 |
| 0x0204 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x44 | 0x00 | 0x00 | 0x00 | 0x43 | 0x00 | 0x1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x39 | 0x00 | 0x00 |
| 0x0205 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x44 | 0x00 | 0x00 | 0x00 | 0x43 | 0x00 | 0x1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x39 | 0x00 | 0x00 |
| 0x0206 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x44 | 0x00 | 0x00 | 0x00 | 0x43 | 0x00 | 0x1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x39 | 0x00 | 0x00 |
| 0x0220 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x1B | 0x00 | 0x42 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x30 |
| 0x0235 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x3F | 0x00 | 0x3C | 0x00 | 0x42 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x2D |
| 0x0335 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x27 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x3A | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0400 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x5 | 0x00 | 0x6 | 0x00 | 0x32 | 0x00 | 0x29 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0404 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x29 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0480 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x52 | 0x00 | 0x53 | 0x00 | 0x5 | 0x00 | 0x6 | 0x00 | 0x00 | 0x00 | 0x54 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0500 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x15 | 0x00 | 0x00 | 0x00 | 0x3B | 0x00 | 0x00 | 0x00 | 0x50 | 0x00 | 0x00 | 0x00 | 0x2E |
| 0x0560 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x49 | 0x00 | 0x2B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0600 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0xA | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0605 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x34 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x55 | 0x00 | 0x35 | 0x00 | 0x13 | 0x00 | 0x25 | 0x00 | 0x00 |
| 0x09F6 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x5E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1190 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x22 | 0x00 | 0x26 | 0x00 | 0x00 | 0x00 | 0x33 | 0x00 | 0x1E | 0x00 | 0x36 | 0x00 | 0x00 | 0x00 | 0x5D |
| 0x1195 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1B | 0x00 | 0x48 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF |
| 0x1250 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1B | 0x00 | 0x48 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1255 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x1C | 0x00 | 0x47 | 0x00 | 0x42 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1260 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x24 | 0x00 | 0x00 | 0x00 | 0x4D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1470 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x28 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1612 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x58 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1613 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x51 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1640 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x4 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x19 | 0x00 | 0x17 | 0x00 | 0x23 | 0x00 | 0x00 |
| 0x19E6 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1B | 0x00 | 0x48 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1A04 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x59 | 0x00 | 0x5A | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x5B | 0x00 | 0x1B | 0x00 | 0x48 |
| 0x1A0E | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x14 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x14 | 0x00 | 0x00 |
| 0x1A18 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x12 | 0x00 | 0x00 |
| 0x1A22 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1B | 0x00 | 0x48 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1DF5 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x21 | 0x00 | 0x46 | 0x00 | 0x45 | 0x00 | 0x4A | 0x00 | 0x4E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0xC | 0x00 | 0xB | 0x00 | 0xE | 0x00 | 0xD | 0x00 | 0x56 | 0x00 | 0x57 | 0x00 | 0x9 | 0x00 | 0x00 |
| 0x1E05 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x18 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E25 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x2A | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x7 | 0x00 | 0x1A | 0x00 | 0x8 | 0x00 | 0x00 |
| 0x1E30 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x5 | 0x00 | 0x6 | 0x00 | 0x31 | 0x00 | 0x28 | 0x00 | 0x5C | 0x00 | 0x00 |
| 0x1E35 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x11 | 0x00 | 0x10 |
| 0x1E40 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x48 | 0x00 | 0x1B | 0x00 | 0x00 | 0x00 | 0x1F | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E45 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x40 | 0x00 | 0x41 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E50 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x40 | 0x00 | 0x41 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E55 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x48 | 0x00 | 0x1B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E60 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x48 | 0x00 | 0x1B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x2800 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x4C | 0x00 | 0x4B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3000 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x2C |
| 0x3005 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x4F |
| 0x3010 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x2F |
| 0x3505 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x5 | 0x00 | 0x6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x16 |
| 0x3510 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x37 | 0x00 | 0x38 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3515 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1B | 0x00 | 0x48 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3520 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0xF1 | 0xF2 | 0xF3 | 0xF4 | 0xF5 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x3C | 0x00 | 0x3F | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x1 | Abgleichfehler Lastabgleich |
| 0x2 | Abgleichfehler Leerlaufabgleich |
| 0x3 | Abgleichfehler Nullpunktabgleich |
| 0x4 | Allgemeine Abgleiche Checksumme |
| 0x5 | Ansteuerung Kurzschluss nach B+ |
| 0x6 | Ansteuerung Unterbrechung oder Kurzschluss nach B- |
| 0x7 | Ausfall Drehzahlgebersignal Kurbelwelle |
| 0x8 | Ausfall Nockenwellengebersignal |
| 0x9 | CAN-Bus abgeschaltet |
| 0xA | CAN-Bus Baustein defekt |
| 0xB | Empfangsfehler ASC |
| 0xC | Empfangsfehler Elektronische Getriebesteuerung (EGS) |
| 0xD | Empfangsfehler Kombi-Instrument (INSTR2) |
| 0xE | Empfangsfehler Kombi-Instrument (INSTR3) |
| 0xF | Endstufenfehler |
| 0x10 | Fehler beim Abstellen ueber Injektor Endstufe (OFF) |
| 0x11 | Fehler beim Abstellen ueber Nullmenge |
| 0x12 | Fehlererkennung |
| 0x13 | Gate-Array Mengenstop |
| 0x14 | Generatorlast 0% |
| 0x15 | Geschwindigkeit zu gross |
| 0x16 | Gluehsystem - Gluehkerzen oder Gluehrelais |
| 0x17 | Injektorabgleich Checksumme |
| 0x18 | kein Signal vom Multifunktionslenkrad |
| 0x19 | Kommunikation mit EEPROM |
| 0x1A | Kurbelwellengebersignal dynamisch unplausibel |
| 0x1B | Kurzschluss nach B+ |
| 0x1C | Kurzschluss nach B- |
| 0x1D | Lastabfall |
| 0x1E | Leckage |
| 0x1F | Leerlauf-Testimpuls-Fehler |
| 0x20 | Luftmasse zu gering |
| 0x21 | Manipulationsversuch |
| 0x22 | Maximaldruck ueberschritten |
| 0x23 | Mengendriftkompensation Checksumme |
| 0x24 | Mengenreduktion wegen geringem Vorfoerderdruck |
| 0x25 | Microcontroller (Gate-Array Kommunikation) |
| 0x26 | Minimaldruck ueber Motordrehzahl zu klein |
| 0x27 | Motor hat ueberdreht |
| 0x28 | Negative Regelabweichung / Ladedruck zu hoch |
| 0x29 | Negative Regelabweichung / Luftmasse zu hoch |
| 0x2A | Nockenwellengebersignal Frequenz zu hoch |
| 0x2B | obere Referenzspannungsgrenze ueberschritten |
| 0x2C | Plausibilitaet der Bremssignale im Fahrbetrieb |
| 0x2D | Plausibilitaet mit Atmosphaerendruckfuehler bei Leerlauf |
| 0x2E | Plausibilitaet mit Einspritzmenge und Motordrehzahl |
| 0x2F | Plausibilitaet mit Fahrgeschwindigkeit |
| 0x30 | Plausibilitaet zwischen Poti 1 und 2 verletzt |
| 0x31 | Positive Regelabweichung / Ladedruck zu niedrig |
| 0x32 | Positive Regelabweichung / Luftmasse zu niedrig |
| 0x33 | Raildruckregelventil klemmt |
| 0x34 | Recovery aufgetreten |
| 0x35 | redundante Schubueberwachung |
| 0x36 | Regelabweichung ueber Motordrehzahl zu gross |
| 0x37 | Relais schaltet zu frueh ab |
| 0x38 | Relais schaltet zu spaet ab |
| 0x39 | Schnell-Loeschfehler |
| 0x3A | Signal dynamisch unplausibel |
| 0x3B | Signal fehlerhaft |
| 0x3C | Signal Kurzschluss nach B+ |
| 0x3D | Signal Kurzschluss nach B- |
| 0x3E | Signal Unterbrechung oder Kurzschluss nach B+ |
| 0x3F | Signal Unterbrechung oder Kurzschluss nach B- |
| 0x40 | Spannung zu hoch |
| 0x41 | Spannung zu niedrig |
| 0x42 | Speisespannungsfehler |
| 0x43 | Strom an High Side zu gross |
| 0x44 | Strom an Low Side zu gross |
| 0x45 | Timeout abgelaufen |
| 0x46 | Uebertragungsfehler |
| 0x47 | Unterbrechung oder Kurzschluss nach B+ |
| 0x48 | Unterbrechung oder Kurzschluss nach B- |
| 0x49 | untere Referenzspannungsgrenze unterschritten |
| 0x4A | Urcode (UC) im EEPROM defekt |
| 0x4B | Versorgungsspannung DDE ueberschritten |
| 0x4C | Versorgungsspannung DDE unterschritten |
| 0x4D | Vorfoerderdruck unter Mindestwert fuer Motorstart |
| 0x4E | Wechselcode (WC) im EEPROM defekt |
| 0x4F | Zuendstellung 2 Plausibilitaet nach Steuergeraet-Initialisierung |
| 0x50 | Fahrgeschwindigkeit von CAN ungueltig |
| 0x51 | Korrekturmenge zu gross |
| 0x52 | Blockiererkennung |
| 0x53 | Blockiererkennung2 |
| 0x54 | Blockiererkennung3 |
| 0x55 | ASCET Bypass Schnittstellenfehler |
| 0x56 | Empfangsfehler Untersetzungsgetriebe (TXU1) |
| 0x57 | Empfangsfehler ASC3 |
| 0x58 | Ansteuerung wegen Fehler Raildruck-Plausibilitaet |
| 0x59 | Uebertemperaturerkennung |
| 0x5A | Uebertemperaturerkennung2 |
| 0x5B | Uebertemperaturerkennung3 |
| 0x5C | Abgefallener Ladeluftschlauch |
| 0x5D | Raildruckueberhoehung |
| 0x5E | Kein Raildruckaufbau |
| 0xEB | Fehler momentan nicht vorhanden |
| 0xEC | Fehler momentan vorhanden |
| 0xED | -- |
| 0xEE | sporadischer Fehler |
| 0xEF | -- |
| 0xF0 | -- |
| 0xF1 | -- |
| 0xF2 | -- |
| 0xF3 | -- |
| 0xF4 | -- |
| 0xF5 | -- |
| 0xF6 | -- |
| 0xFF | unbekannte Fehlerart |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | UWF_A | UWF_B |
| --- | --- | --- | --- | --- |
| 0x00 | -- | ---- | 1 | 0 |
| 0x01 | Motordrehzahl | 1/min | 24,975025 | 0,0 |
| 0x02 | Kuehlmitteltemperatur | Grad C | 0,6826871 | -41,0264009 |
| 0x03 | Einspritzmenge | mm^3 | 0,5120328 | 0,0 |
| 0x04 | Raildruck | bar | 6,0240963855 | 0,0 |
| 0x05 | Versorgungsspannung | V | 0,1157263393 | 0,0 |
| 0x06 | Lufttemperatur | Grad C | 0,6826871 | -41,0264009 |
| 0x07 | Ladedruck | mbar | 16,0 | 0,0 |
| 0x08 | Position Pedalwertgeber1 | % | 0,3938558 | 0,0 |
| 0x09 | Position Pedalwertgeber2 | % | 0,3938558 | 0,0 |
| 0x10 | Fahrgeschwindigkeit | km/h | 1,0235415 | 0,0 |
| 0x11 | Kraftstoffvorfoerderdruck | bar | 0,016 | 0,0 |
| 0x12 | Tastverhaeltnis Elektroluefteransteuerung | % | 0,3938558 | 0,0 |
| 0x13 | aktueller km-Stand | km | 10,0 | 0,0 |
| 0x14 | Restart-Code | - | 1,0 | 0,0 |
| 0x15 | Versorgungsspannung | V | 0,0967467 | 0,0 |
| 0x16 | Atmosphaerendruck | mbar | 16,0 | 0,0 |
| 0x17 | unbekannte Umweltbedingung | ---- | 1 | 0 |
