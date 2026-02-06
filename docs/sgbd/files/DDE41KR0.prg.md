# DDE41KR0.prg

## General

|  |  |
| --- | --- |
| File | DDE41KR0.prg |
| Type | PRG |
| Jobs | 232 |
| Tables | 12 |
| Origin | BMW TI-433 Schiefer |
| Revision | 1.00 |
| Author | BMW ZM-E-31 Lexmueller, BMW TI-433 Schiefer, BMW TI-433 Schaller |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DDE 4.1 fuer M67 Master |  |  |
| ORIGIN | string | BMW TI-433 Schiefer |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW ZM-E-31 Lexmueller, BMW TI-433 Schiefer, BMW TI-433 Schaller |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.24 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### initialisierung

Default Init-Job

_No arguments._

### IDENT

Ident-Daten fuer DME

_No arguments._

### IDENT_AIF

Ident und AIF zusammen lesen

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### TEL_ROH

Rohtelegramm ohne Header lesen

| Name | Type | Description |
| --- | --- | --- |
| REQUEST | binary | Daten ohne Header |

### SEED_KEY

Schutzmechanismus SEED_KEY

_No arguments._

### STATUS_SYNC_MODE

_No description._

_No arguments._

### STEUERN_SYNC_MODE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| MODE | int |  |

### WECHSELCODE_SYNC_DME

Wechselcodesynchronisation EWS 3 - DME anstossen

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_SHADOW_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### FS_LESEN_STATUS

Auslesen des Fehlerspeichers

_No arguments._

### FS_LESEN_sl

Auslesen des Fehlerspeichers

_No arguments._

### FS_SHADOW_LESEN_sl

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN_sl

Loeschen des Fehlerspeichers

_No arguments._

### FS_LESEN_STATUS_sl

Auslesen des Fehlerspeichers

_No arguments._

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

### MW_SELECT_LESEN

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### MW_SELECT_LESEN_NORM_SL

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### MW_SELECT_LESEN_NORM

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### ABGLEICH_VERSTELLEN_STARTMENGE

Startmenge Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_STARTMENGE_WERT | real | Neuer Verstellwert |

### ABGLEICH_LESEN_STARTMENGE

Startmengen-Abgleich lesen

_No arguments._

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

### ABGLEICH_LESEN_VOLL_MENGE

BEGR_MENGEn-Abgleich lesen

_No arguments._

### ABGLEICH_LESEN_VOLL_MENGE_ROH

Vollastmenge-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_VOLL_MENGE

BEGR_MENGE Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_VOLL_MENGE_WERT | real | Neuer Verstellwert |

### ABGLEICH_VERSTELLEN_VOLL_MENGE_ROH

Vollastmenge-Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_VOLL_MENGE_ROH_WERT | int | Neuer Verstellwert |

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

### HOLE_EMA_FELD

_No description._

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

### PRUEFSTEMPEL_LESEN

Kennung M_ABGLEICH_FLAG lesen

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Kennung M_ABGLEICH_FLAG lesen

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

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

### ABGLEICH_LESEN_FGR_KLIMA

Kennung M_ABGLEICH_FLAG lesen

_No arguments._

### ABGLEICH_PROG_FGR_KLIMA

Kennung M_ABGLEICH_FLAG programmieren

_No arguments._

### ABGLEICH_KIC_VERSTELLEN_PROGRAMMIEREN

FGR-Funktion und Mainswitch konfigurieren

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_KIC_VERSTELLEN_PROGRAMMIEREN_WERT | int |  |

### STEUERN_EKP

ARF-Steller ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

### STEUERN_GLUEHRELAIS1

Gluegrelais ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

### STEUERN_GLUEHRELAIS2

Gluegrelais ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

### STEUERN_LADEDRUCKSTELLER1

Ladedrucksteller ansteuern ,  5-95%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

### STEUERN_LADEDRUCKSTELLER2

Ladedrucksteller ansteuern ,  5-95%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

### STEUERN_KLIMAKOMPRESSOR

ARF-Steller ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 - 100 % |

### STEUERN_E_LUEFTER

E-Luefter ansteuern ,  5-95%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

### STEUERN_MOTORLAGER

Motorlager ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

### STEUERN_ZUHEIZER

Zuheizer ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

### STEUERN_AGR_STELLER1

ARF - Steller1  ansteuern ,  - - 10%%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

### STEUERN_AGR_STELLER2

ARF - Steller2  ansteuern ,  - - 10%%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

### STEUERN_KS_HDPUMPE_ABSCHALTUNG

Elektrisches Abschaltventil ansteuern ,  0 oder 1

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 1 |

### STEUERN_ENDE_SELECTIV_sl

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STELLGLIED | int | Stellglied |

### STEUERN_ENDE_SELECTIV

_No description._

| Name | Type | Description |
| --- | --- | --- |
| STELLGLIED | int | Stellglied |

### START_SYSTEMCHECK_ZYL_SEL_DREHZAHL

Start zylinderselektive Drehzhahlen lesen

_No arguments._

### START_SYSTEMCHECK_ZYL_SEL_DREHZAHL_SL

Start zylinderselektive Drehzhahlen lesen Slave

_No arguments._

### START_SYSTEMCHECK_ZYL_SEL_MENGENKOR

Start zylinderselektive Mengenkorrekturen

_No arguments._

### STOP_SYSTEMCHECK

Stop Systemtest

_No arguments._

### STATUS_LAUFUNRUHE_LLR_MENGE

Auslesen selektive Mengenkorrektur

_No arguments._

### STATUS_LAUFUNRUHE_DREHZAHL

Auslesen selektive Mengenkorrektur

_No arguments._

### ECU_CONFIG

Ident-Daten fuer DME

_No arguments._

### PRUEFCODE_LESEN

Indentifikation, AIF, FS_Codes ShadowFS_Codes, ShadowFS_lang

_No arguments._

### PRUEFCODE_LESEN_SL

Indentifikation, AIF, FS_Codes ShadowFS_Codes, ShadowFS_lang

_No arguments._

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

### STATUS_EHMFEKP

Tastverhaeltnis Ansteuerung Vorfoerderpumpe

_No arguments._

### STATUS_EHMFGRS

Tastverhaeltnis Ansteuerung Gluehrelais 1

_No arguments._

### STATUS_EHMFGRS2

Tastverhaeltnis Ansteuerung Gluehrelais 2

_No arguments._

### STATUS_EHMFKLI

Tastverhaeltnis Ansteuerung Klimakompressor

_No arguments._

### STATUS_EHMFZME

Tastverhaeltnis Ansteuerung elektrisches Abschaltventil

_No arguments._

### STATUS_EHMFLDS1

Tastverhaeltnis Ansteuerung Ladedrucksteller 1

_No arguments._

### STATUS_EHMFLDS2

Tastverhaeltnis Ansteuerung Ladedrucksteller 2

_No arguments._

### STATUS_EHMFMLS

Tastverhaeltnis Ansteuerung Elektroluefter

_No arguments._

### STATUS_LDMP_LLIN

aktueller Ladedruck  / Luftdruck

_No arguments._

### STATUS_EHMFMML1

Tastverhaeltnis Ansteuerung Motorlager 1

_No arguments._

### STATUS_LDMP_LSOLL

Sollwert Ladedruck

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

### STATUS_ADMIZE

IZE Rohwert Istwert Stromregelung Zumesseinheit

_No arguments._

### STATUS_ADMLMM2

LMM2 Rohwert Luftmasse 2

_No arguments._

### STATUS_ADMLTF2

LTF2 Rohwert Lufttemperatur 2

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

UC1 Rohwert Kondensatorspannung 1 fuer Zylinder 3 und 5

_No arguments._

### STATUS_ADMUC2

UC2 Rohwert Kondensatorspannung 2 fuer Zylinder 2 und 8

_No arguments._

### STATUS_ADMUG1

UG1 Rohwert Speisespannung 1 fuer Luftmassenmesser 2, Pedalwertgeber PGS

_No arguments._

### STATUS_ADMUG2

UG2 Rohwert Speisespannung 2 fuer Pedalwertgeber, Vorfoerderdruckfuehler

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

### STATUS_ANMIZE

IZE Istwert Stromregelung Zumesseinheit

_No arguments._

### STATUS_ANMLDF1

LDF Ladedruck

_No arguments._

### STATUS_ANMLMM1

LMM1 Luftmasse 1

_No arguments._

### STATUS_ANMLMM2

LMM2 Luftmasse 2

_No arguments._

### STATUS_ANMLTF1

LTF1 Lufttemperatur 1

_No arguments._

### STATUS_ANMLTF2

LTF2 Lufttemperatur 2

_No arguments._

### STATUS_ANMPGS

PGS Pedalwertgeber Poti 2

_No arguments._

### STATUS_ANMUC1

UC1 Kondensatorspannung 1 fuer Zylinder 3 und 5

_No arguments._

### STATUS_ANMUC2

UC2 Kondensatorspannung 2 fuer Zylinder 2 und 8

_No arguments._

### STATUS_ANMUG1

UG1 Speisespannung 1 fuer Luftmassenmesser 2, Pedalwertgeber PGS

_No arguments._

### STATUS_ANMUG2

UG2 Speisespannung 2 fuer Pedalwertgeber, Vorfoerderdruckfuehler

_No arguments._

### STATUS_ANOU_ADF

ADF Spannung Atmosphaerendruckfuehler

_No arguments._

### STATUS_ANOU_LMM2

LMM2 Spannung Luftmassenmesser 2

_No arguments._

### STATUS_ANOU_LTF2

LTF2 Spannung Lufttemperaturfuehler 2

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

UC1 Spannung Kondensatorspannung 1 fuer Zylinder 3 und 5

_No arguments._

### STATUS_ANOU_UC2

UC2 Spannung Kondensatorspannung 2 fuer Zylinder 2 und 8

_No arguments._

### STATUS_ANOU_UG1

UG1 Spannung Speisespannung 1 fuer Luftmassenmesser 2, Pedalwertgeber PGS

_No arguments._

### STATUS_ANOU_UG2

UG2 Spannung Speisespannung 2 fuer Pedalwertgeber, Vorfoerderdruckfuehler

_No arguments._

### STATUS_ANOU_VDF

VDF Spannung Vorfoerderdruckfuehler

_No arguments._

### STATUS_ANOU_WTF

WTF Spannung Wassertemperaturfuehler

_No arguments._

### STATUS_ARMM_LIST1

M_L aktuelle Luftmasse 1

_No arguments._

### STATUS_ARMM_LIST2

M_L aktuelle Luftmasse 2

_No arguments._

### STATUS_AROIST_51

M_L normierte Luftmasse 1 (nicht T_L/P_ADF-korrig.)

_No arguments._

### STATUS_AROIST_52

M_L normierte Luftmasse 2 (nicht T_L/P_ADF-korrig.)

_No arguments._

### STATUS_AROLMX

LMX Luftmassenindex = (M_L1 - M_L2) / (M_L1 + M_L2)

_No arguments._

### STATUS_AROREGSTAT

Status der ARF-Abschaltbedingungen

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

### STATUS_EDMRSTCD

Restart Code

_No arguments._

### STATUS_EHMFZHR

Tastverhaeltnis Ansteuerung Zusatzheizung

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

### STATUS_GSOEMBYTE

GZS empfangenes Byte

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

### STATUS_MRMM_EBEGR

M_E resultierende Begrenzungsmenge

_No arguments._

### STATUS_MRMM_EFGR

M_E Wunschmenge aus Fahrgeschwindigkeitsregelung

_No arguments._

### STATUS_MRMM_ELLR

M_E Menge aus Leerlaufregelung

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

### STATUS_MRMPWGFI

PWG gefilterte Pedalwertgeber-Position

_No arguments._

### STATUS_MRMSTATUS

Status Motorbetriebsphase

_No arguments._

### STATUS_MRMV_SOLHN

HGB nachg. v-Soll

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

### STATUS_ZUMAB_HE

Ansteuerbeginn Haupteinspritzung

_No arguments._

### STATUS_ZUMAB_NE

Ansteuerbeginn Nacheinspritzung

_No arguments._

### STATUS_ZUMAD_NE2

Ansteuerdauer Nacheinspritzung Abgastrakt 2

_No arguments._

### STATUS_AN_LUFTTEMPERATUR1

LTF1 Lufttemperatur 1

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

PWG Spannung Pedalwertgeber 1

_No arguments._

### STATUS_UBATT

UBT Batteriespannung

_No arguments._

### STATUS_VORFOERDERDRUCK

VDF Vorfoerderdruck

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

### START_SYSTEMCHECK_ZYL_SEL_MENGENKOR_SL

Start zylinderselektive Mengenkorrekturen

_No arguments._

### MW_SELECT_LESEN_NORM_EINZEL

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### MW_SELECT_LESEN_NORM_EINZEL_SL

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### ABGLEICH_VERSTELLEN_VERBR_KORFAKTOR_ROH

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_VERBR_KORFAKTOR_ROH_WERT | int | Neuer Verstellwert |

### STATUS_GASPEDAL

PWG Spannung Pedalwertgeber 1

_No arguments._

### STATUS_LMM_MASSE

LMM1 Luftmasse 1

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

LTF1 Ansauglufttemperatur 1

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
| ehmFEKP | B812F1042C100000 | 06 | 2 | 0x0EA6 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFEKP | Tastverhaeltnis Ansteuerung Vorfoerderpumpe |
| ehmFGRS | B812F1042C100000 | 06 | 2 | 0x0E87 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFGRS | Tastverhaeltnis Ansteuerung Gluehrelais 1 |
| ehmFGRS2 | B812F1042C100000 | 06 | 2 | 0x1E96 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFGRS2 | Tastverhaeltnis Ansteuerung Gluehrelais 2 |
| ehmFKLI | B812F1042C100000 | 06 | 2 | 0x0E91 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFKLI | Tastverhaeltnis Ansteuerung Klimakompressor |
| ehmFZME | B812F1042C100000 | 06 | 2 | 0x1E97 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFZME | Tastverhaeltnis Ansteuerung elektrisches Abschaltventil |
| ehmFLDS1 | B812F1042C100000 | 06 | 2 | 0x0E81 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFLDS1 | Tastverhaeltnis Ansteuerung Ladedrucksteller 1 |
| ehmFLDS2 | B812F1042C100000 | 06 | 2 | 0x0E8B | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFLDS2 | Tastverhaeltnis Ansteuerung Ladedrucksteller 2 |
| ehmFMLS | B812F1042C100000 | 06 | 2 | 0x0EA2 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFMLS | Tastverhaeltnis Ansteuerung Elektroluefter |
| ldmP_Llin | B812F1042C100000 | 06 | 2 | 0x0F40 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | ldmP_Llin | aktueller Ladedruck  / Luftdruck |
| ehmFMML1 | B812F1042C100000 | 06 | 2 | 0x0E9F | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFMML1 | Tastverhaeltnis Ansteuerung Motorlager 1 |
| ldmP_Lsoll | B812F1042C100000 | 06 | 2 | 0x0F42 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | ldmP_Lsoll | Sollwert Ladedruck |
| zumP_RAIL | B812F1042C100000 | 06 | 2 | 0x1F5D | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | zumP_RAIL | Raildruck fuer Mengenzumessung |
| zumPQsoll | B812F1042C100000 | 06 | 2 | 0x1F5E | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | zumPQsoll | Raildruck Sollwert |
| admADF | B812F1042C100000 | 06 | 2 | 0x2041 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | admADF | ADF Rohwert Atmosphaerendruck |
| admIZE | B812F1042C100000 | 06 | 2 | 0x2F25 | 06 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | admIZE | IZE Rohwert Istwert Stromregelung Zumesseinheit |
| admLMM2 | B812F1042C100000 | 06 | 2 | 0x2061 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admLMM2 | LMM2 Rohwert Luftmasse 2 |
| admLTF2 | B812F1042C100000 | 06 | 2 | 0x2001 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | admLTF2 | LTF2 Rohwert Lufttemperatur 2 |
| admPGS | B812F1042C100000 | 06 | 2 | 0x2FFA | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admPGS | PGS Rohwert Pedalwertgeber Poti 2 |
| admPWG | B812F1042C100000 | 06 | 2 | 0x2060 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admPWG | PWG Rohwert Pedalwertgeber Poti 1 |
| admUBT | B812F1042C100000 | 06 | 2 | 0x2065 | 06 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUBT | UBT Rohwert Batteriespannung |
| admUC1 | B812F1042C100000 | 06 | 2 | 0x2FF8 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUC1 | UC1 Rohwert Kondensatorspannung 1 fuer Zylinder 3 und 5 |
| admUC2 | B812F1042C100000 | 06 | 2 | 0x2FF9 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUC2 | UC2 Rohwert Kondensatorspannung 2 fuer Zylinder 2 und 8 |
| admUG1 | B812F1042C100000 | 06 | 2 | 0x2FF6 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUG1 | UG1 Rohwert Speisespannung 1 fuer Luftmassenmesser 2, Pedalwertgeber PGS |
| admUG2 | B812F1042C100000 | 06 | 2 | 0x2FF7 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUG2 | UG2 Rohwert Speisespannung 2 fuer Pedalwertgeber, Vorfoerderdruckfuehler |
| admVDF | B812F1042C100000 | 06 | 2 | 0x2006 | 06 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | admVDF | VDF Rohwert Vorfoerderdruck |
| admWTF | B812F1042C100000 | 06 | 2 | 0x2000 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | admWTF | WTF Rohwert Wassertemperatur |
| anmADF | B812F1042C100000 | 06 | 2 | 0x0F63 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | anmADF | ADF Atmosphaerendruck |
| anmIZE | B812F1042C100000 | 06 | 2 | 0x1F25 | 06 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | anmIZE | IZE Istwert Stromregelung Zumesseinheit |
| anmLDF1 | B812F1042C100000 | 06 | 2 | 0x1F26 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | anmLDF1 | LDF Ladedruck |
| anmLMM1 | B812F1042C100000 | 06 | 2 | 0x1F27 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmLMM1 | LMM1 Luftmasse 1 |
| anmLMM2 | B812F1042C100000 | 06 | 2 | 0x0F61 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmLMM2 | LMM2 Luftmasse 2 |
| anmLTF1 | B812F1042C100000 | 06 | 2 | 0x1F28 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | anmLTF1 | LTF1 Lufttemperatur 1 |
| anmLTF2 | B812F1042C100000 | 06 | 2 | 0x0F01 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | anmLTF2 | LTF2 Lufttemperatur 2 |
| anmPGS | B812F1042C100000 | 06 | 2 | 0x0FFA | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmPGS | PGS Pedalwertgeber Poti 2 |
| anmUC1 | B812F1042C100000 | 06 | 2 | 0x0FF8 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUC1 | UC1 Kondensatorspannung 1 fuer Zylinder 3 und 5 |
| anmUC2 | B812F1042C100000 | 06 | 2 | 0x0FF9 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUC2 | UC2 Kondensatorspannung 2 fuer Zylinder 2 und 8 |
| anmUG1 | B812F1042C100000 | 06 | 2 | 0x0FF6 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUG1 | UG1 Speisespannung 1 fuer Luftmassenmesser 2, Pedalwertgeber PGS |
| anmUG2 | B812F1042C100000 | 06 | 2 | 0x0FF7 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUG2 | UG2 Speisespannung 2 fuer Pedalwertgeber, Vorfoerderdruckfuehler |
| anoU_ADF | B812F1042C100000 | 06 | 2 | 0x3011 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_ADF | ADF Spannung Atmosphaerendruckfuehler |
| anoU_LMM2 | B812F1042C100000 | 06 | 2 | 0x0F34 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LMM2 | LMM2 Spannung Luftmassenmesser 2 |
| anoU_LTF2 | B812F1042C100000 | 06 | 2 | 0x300E | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LTF2 | LTF2 Spannung Lufttemperaturfuehler 2 |
| anoU_PGS | B812F1042C100000 | 06 | 2 | 0x3006 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_PGS | PGS Spannung Pedalwertgeber Poti 2 |
| anoU_PWG | B812F1042C100000 | 06 | 2 | 0x0F35 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_PWG | PWG Spannung Pedalwertgeber Poti 1 |
| anoU_UBT | B812F1042C100000 | 06 | 2 | 0x3013 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UBT | UBT Spannung Batteriespannung |
| anoU_UC1 | B812F1042C100000 | 06 | 2 | 0x3008 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UC1 | UC1 Spannung Kondensatorspannung 1 fuer Zylinder 3 und 5 |
| anoU_UC2 | B812F1042C100000 | 06 | 2 | 0x3009 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UC2 | UC2 Spannung Kondensatorspannung 2 fuer Zylinder 2 und 8 |
| anoU_UG1 | B812F1042C100000 | 06 | 2 | 0x3016 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UG1 | UG1 Spannung Speisespannung 1 fuer Luftmassenmesser 2, Pedalwertgeber PGS |
| anoU_UG2 | B812F1042C100000 | 06 | 2 | 0x3017 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UG2 | UG2 Spannung Speisespannung 2 fuer Pedalwertgeber, Vorfoerderdruckfuehler |
| anoU_VDF | B812F1042C100000 | 06 | 2 | 0x301A | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_VDF | VDF Spannung Vorfoerderdruckfuehler |
| anoU_WTF | B812F1042C100000 | 06 | 2 | 0x3002 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_WTF | WTF Spannung Wassertemperaturfuehler |
| armM_List1 | B812F1042C100000 | 06 | 2 | 0x0F2C | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | armM_List1 | M_L aktuelle Luftmasse 1 |
| armM_List2 | B812F1042C100000 | 06 | 2 | 0x0F2D | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | armM_List2 | M_L aktuelle Luftmasse 2 |
| aroIST_51 | B812F1042C100000 | 06 | 2 | 0xDF0E | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | aroIST_51 | M_L normierte Luftmasse 1 (nicht T_L/P_ADF-korrig.) |
| aroIST_52 | B812F1042C100000 | 06 | 2 | 0xDF24 | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | aroIST_52 | M_L normierte Luftmasse 2 (nicht T_L/P_ADF-korrig.) |
| aroLMX | B812F1042C100000 | 06 | 2 | 0xDF28 | 06 | 7 | -- | 0.0256 | 0 | 0x00 | 0x00 | 6.2f | - | -- | aroLMX | LMX Luftmassenindex = (M_L1 - M_L2) / (M_L1 + M_L2) |
| aroREGSTAT | B812F1042C100000 | 06 | 2 | 0x0EE0 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | aroREGSTAT | Status der ARF-Abschaltbedingungen |
| aroSOLL_5 | B812F1042C100000 | 06 | 2 | 0x0F31 | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | aroSOLL_5 | M_L Luft-Sollwert nach Sollwertbegrenzung |
| camN_EL | B812F1042C100000 | 06 | 2 | 0x2220 | 06 | 5 | -- | 0.0915555284 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | camN_EL | MLS Drehzahlstufe E-Luefter |
| camS_AC | B812F1042C100000 | 06 | 2 | 0x1FB1 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | camS_AC | Schalter Klimabereitschaft |
| camS_KO | B812F1042C100000 | 06 | 2 | 0x1FB0 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | camS_KO | Schalter Klimakompressor |
| caoVERB | B812F1042C100000 | 06 | 2 | 0x2160 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | ul | -- | caoVERB | Kraftstoffverbrauch fuer CAN DDE4-VERBRAUCH |
| comGTR_opt | B812F1042C100000 | 06 | 2 | 0x1C00 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | comGTR_opt | Identifikation Handschalter/Automatik |
| dimDIG_0 | B812F1042C100000 | 06 | 2 | 0x0F6C | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimDIG_0 | Auf logisch 0 erkannte Digitaleingaenge |
| dimDIG_1 | B812F1042C100000 | 06 | 2 | 0x0F6D | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimDIG_1 | Auf logisch 1 erkannte Digitaleingaenge |
| dimDIGprel | B812F1042C100000 | 06 | 2 | 0x0F70 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimDIGprel | Entprellte logische Zustaende der digitalen Eingaenge |
| dimF_MFL | B812F1042C100000 | 06 | 2 | 0x2F74 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimF_MFL | FGR Multifunktionslenkrad |
| edmRSTCD | B812F1042C100000 | 06 | 2 | 0x0E00 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | edmRSTCD | Restart Code |
| ehmFZHR | B812F1042C100000 | 06 | 2 | 0x0EA3 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFZHR | Tastverhaeltnis Ansteuerung Zusatzheizung |
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
| fgmBESCH | B812F1042C100000 | 06 | 2 | 0x0F0A | 06 | 7 | -- | 0.0847711 | -10.8507031 | 0x00 | 0x00 | 6.2f | m/s^2 | -- | fgmBESCH | Beschleunigung |
| fgmFGAKT | B812F1042C100000 | 06 | 2 | 0x0F08 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | km/h | -- | fgmFGAKT | aktuelle Geschwindigkeit |
| gsoEmByte | B812F1042C100000 | 06 | 2 | 0x2153 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | gsoEmByte | GZS empfangenes Byte |
| gsoGS_Pha | B812F1042C100000 | 06 | 2 | 0x2152 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | gsoGS_Pha | Gluehzeitsteuerung Gluehphase |
| ldmADF | B812F1042C100000 | 06 | 2 | 0x0F41 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | ldmADF | aktueller Atmosphaerendruck |
| ldmT_LTGG | B812F1042C100000 | 06 | 2 | 0x0F48 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | ldmT_LTGG | Errechnete Lufttemperatur |
| ldoTVsteu | B812F1042C100000 | 06 | 2 | 0x0F49 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ldoTVsteu | Tastverhaeltnis Steuerung |
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
| mrmM_EBEGR | B812F1042C100000 | 06 | 2 | 0x0F8A | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EBEGR | M_E resultierende Begrenzungsmenge |
| mrmM_EFGR | B812F1042C100000 | 06 | 2 | 0x0F85 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EFGR | M_E Wunschmenge aus Fahrgeschwindigkeitsregelung |
| mrmM_ELLR | B812F1042C100000 | 06 | 2 | 0x0F8D | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ELLR | M_E Menge aus Leerlaufregelung |
| mrmM_EMOT | B812F1042C100000 | 06 | 2 | 0x0F8C | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EMOT | M_E Einspritzmenge nach ARD |
| mrmM_EPWG | B812F1042C100000 | 06 | 2 | 0x0F84 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EPWG | M_E Wunschmenge = f(PWG) aus Fahrverhaltenkennfeld |
| mrmM_ESTAR | B812F1042C100000 | 06 | 2 | 0x0F82 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ESTAR | M_E resultierender Startmengen-Sollwert |
| mrmM_EWUN | B812F1042C100000 | 06 | 2 | 0x0F8B | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EWUN | M_E Fahrerwunschmenge nach externem Mengeneingriff |
| mrmM_EWUNF | B812F1042C100000 | 06 | 2 | 0x0F86 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EWUNF | M_E Fahrerwunschmenge aus PWG oder FGR |
| mrmPWGfi | B812F1042C100000 | 06 | 2 | 0x0F83 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | mrmPWGfi | PWG gefilterte Pedalwertgeber-Position |
| mrmSTATUS | B812F1042C100000 | 06 | 2 | 0x0F7F | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmSTATUS | Status Motorbetriebsphase |
| mrmV_SOLHN | B812F1042C100000 | 06 | 2 | 0x0F0C | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | km/h | -- | mrmV_SOLHN | HGB nachg. v-Soll |
| mroFABZUST | B812F1042C100000 | 06 | 2 | 0x0F9A | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroFABZUST | Zustand Ablaufsteuerung |
| mroFGR_ABN | B812F1042C100000 | 06 | 2 | 0xDF08 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroFGR_ABN | FGR Abschalt-Bedingungen |
| mroKickDwn | B812F1042C100000 | 06 | 2 | 0x1F9A | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroKickDwn | Schalter Kickdown |
| mroMD_FAHR | B812F1042C100000 | 06 | 2 | 0x2211 | 06 | 5 | -- | 3.137255 | 0 | 0x00 | 0x00 | 6.2f | Nm | -- | mroMD_FAHR | Fahrerwunschmoment |
| mroMD_REIB | B812F1042C100000 | 06 | 2 | 0x2212 | 06 | 5 | -- | 3.137255 | 0 | 0x00 | 0x00 | 6.2f | Nm | -- | mroMD_REIB | Reibmoment |
| mroMD_SOLL | B812F1042C100000 | 06 | 2 | 0x2210 | 06 | 5 | -- | 3.137255 | 0 | 0x00 | 0x00 | 6.2f | Nm | -- | mroMD_SOLL | Sollmoment |
| xcmZ_E | B812F1042C100000 | 06 | 2 | 0x0FAE | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | xcmZ_E | EWS Uebertragungsfehlerzaehler |
| zumAB_HE | B812F1042C100000 | 06 | 2 | 0x1F5A | 06 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zumAB_HE | Ansteuerbeginn Haupteinspritzung |
| zumAB_NE | B812F1042C100000 | 06 | 2 | 0x1F60 | 06 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zumAB_NE | Ansteuerbeginn Nacheinspritzung |
| zumAD_NE2 | B812F1042C100000 | 06 | 2 | 0x1F61 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | us | -- | zumAD_NE2 | Ansteuerdauer Nacheinspritzung Abgastrakt 2 |
| anmLTF1 | B812F1042C100000 | 06 | 2 | 0x1F28 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | AN_LUFTTEMPERATUR1 | LTF1 Lufttemperatur 1 |
| anmLTF2 | B812F1042C100000 | 06 | 2 | 0x0F01 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | AN_LUFTTEMPERATUR2 | LTF2 Lufttemperatur 2 |
| anmLDF1 | B812F1042C100000 | 06 | 2 | 0x1F26 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | LADEDRUCK | LDF Ladedruck |
| dzmNmit | B812F1042C100000 | 06 | 2 | 0x0F10 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | MOTORDREHZAHL | N Drehzahl |
| anmWTF | B812F1042C100000 | 06 | 2 | 0x0F00 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | MOTORTEMPERATUR | WTF Wassertemperatur |
| anmPWG | B812F1042C100000 | 06 | 2 | 0x0F60 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | PWG_FAHRERWUNSCH | PWG Pedalwertgeber Poti 1 |
| anoU_PWG | B812F1042C100000 | 06 | 2 | 0x0F35 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | PWG_POTI_SPANNUNG | PWG Spannung Pedalwertgeber Poti 1 |
| mroACC_ABB | B812F1042C100000 | 06 | 2 | 0x1C21 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroACC_ABB | Abbruchbedingung fuer Adaptive Cruise Control ACC |
| mroACC_ZST | B812F1042C100000 | 06 | 2 | 0x1C20 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroACC_ZST | ACC Zustand in der Motorsteuerung |
| zhmUM_ZA | B812F1042C100000 | 06 | 2 | 0x2F14 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zhmUM_ZA | Umdrehungszaehler (1 Tick = 2 Umdrehungen) |
| anmUBT | B812F1042C100000 | 06 | 2 | 0x0F65 | 06 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | UBATT | UBT Batteriespannung |
| anmVDF | B812F1042C100000 | 06 | 2 | 0x1F06 | 06 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | VORFOERDERDRUCK | VDF Vorfoerderdruck |

### BETRIEBSWTABSL

| NAME | TELEGRAM | POS_ADR | LEN_ADR | ADR | BYTE | DATA_TYPE | COMPU_TYPE | FACT_A | FACT_B | MASK | VALUE | ANZ | MEAS | RANGE | JOBNAME | LNAME |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| anmUBT | B813F1042C100000 | 06 | 2 | 0x0F65 | 06 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUBT | UBT Batteriespannung |
| anmVDF | B813F1042C100000 | 06 | 2 | 0x1F06 | 06 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | anmVDF | VDF Vorfoerderdruck |
| anmWTF | B813F1042C100000 | 06 | 2 | 0x0F00 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | anmWTF | WTF Wassertemperatur |
| dzmNakt | B813F1042C100000 | 06 | 2 | 0x0F10 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmNakt | N aktuelle Drehzahl aus letzter Periode |
| ehmFARS1 | B813F1042C100000 | 06 | 2 | 0x0E80 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFARS1 | Tastverhaeltnis Ansteuerung Abgasrueckfuehrsteller 1 |
| ehmFARS2 | B813F1042C100000 | 06 | 2 | 0x0E82 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFARS2 | Tastverhaeltnis Ansteuerung Abgasrueckfuehrsteller 2 |
| ehmFKDR | B813F1042C100000 | 06 | 2 | 0x0EA5 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFKDR | Tastverhaeltnis Ansteuerung Raildruckregelventil |
| zumP_RAIL | B813F1042C100000 | 06 | 2 | 0x1F5D | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | zumP_RAIL | Raildruck fuer Mengenzumessung |
| zumPQsoll | B813F1042C100000 | 06 | 2 | 0x1F5E | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | zumPQsoll | Raildruck Sollwert |
| admIDV | B813F1042C100000 | 06 | 2 | 0x2FFE | 06 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | admIDV | IDV Rohwert Istwert Stromregelung Druckregelventil |
| admKDF | B813F1042C100000 | 06 | 2 | 0x2FFC | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | admKDF | KDF Rohwert Raildruck |
| admLDF1 | B813F1042C100000 | 06 | 2 | 0x2F26 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | admLDF1 | LDF Rohwert Ladedruck |
| admLMM1 | B813F1042C100000 | 06 | 2 | 0x2F27 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admLMM1 | LMM1 Rohwert Luftmasse 1 |
| admLTF1 | B813F1042C100000 | 06 | 2 | 0x2F28 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | admLTF1 | LTF1 Rohwert Lufttemperatur 1 |
| admUBT | B813F1042C100000 | 06 | 2 | 0x2065 | 06 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUBT | UBT Rohwert Batteriespannung |
| admUC1 | B813F1042C100000 | 06 | 2 | 0x2FF8 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUC1 | UC1 Rohwert Kondensatorspannung 1 fuer Zylinder 1 und 6 |
| admUC2 | B813F1042C100000 | 06 | 2 | 0x2FF9 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUC2 | UC2 Rohwert Kondensatorspannung 2 fuer Zylinder 4 und 7 |
| admUG1 | B813F1042C100000 | 06 | 2 | 0x2FF6 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUG1 | UG1 Rohwert Speisespannung 1 fuer Luftmassenmesser 1, Ladedruckfuehler 1 |
| admUG2 | B813F1042C100000 | 06 | 2 | 0x2FF7 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUG2 | UG2 Rohwert Speisespannung 2 fuer Raildrucksensor |
| anmIDV | B813F1042C100000 | 06 | 2 | 0x0FFE | 06 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | anmIDV | IDV Istwert Stromregelung Druckregelventil |
| anmKDF | B813F1042C100000 | 06 | 2 | 0x0FFC | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | anmKDF | KDF Raildruck |
| anmLDF1 | B813F1042C100000 | 06 | 2 | 0x1F26 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | anmLDF1 | LDF Ladedruck |
| anmLMM1 | B813F1042C100000 | 06 | 2 | 0x1F27 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmLMM1 | LMM1 Luftmasse 1 |
| anmLTF1 | B813F1042C100000 | 06 | 2 | 0x1F28 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | anmLTF1 | LTF1 Lufttemperatur 1 |
| anmLTF2 | B813F1042C100000 | 06 | 2 | 0x0F01 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | anmLTF2 | LTF2 Lufttemperatur 2 |
| anmUC1 | B813F1042C100000 | 06 | 2 | 0x0FF8 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUC1 | UC1 Kondensatorspannung 1 fuer Zylinder 1 und 6 |
| anmUC2 | B813F1042C100000 | 06 | 2 | 0x0FF9 | 06 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUC2 | UC2 Kondensatorspannung 2 fuer Zylinder 4 und 7 |
| anmUG1 | B813F1042C100000 | 06 | 2 | 0x0FF6 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUG1 | UG1 Speisespannung 1 fuer Luftmassenmesser 1, Ladedruckfuehler 1 |
| anmUG2 | B813F1042C100000 | 06 | 2 | 0x0FF7 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUG2 | UG2 Speisespannung 2 fuer Raildrucksensor |
| anoU_IDV | B813F1042C100000 | 06 | 2 | 0x300C | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_IDV | IDV Spannung zur Strommessung Druckregelventil |
| anoU_KDF | B813F1042C100000 | 06 | 2 | 0x300A | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_KDF | KDF Spannung Raildruckfuehler |
| anoU_KTF | B813F1042C100000 | 06 | 2 | 0x300B | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_KTF | KTF Spannung Kraftstofftemperaturfuehler |
| anoU_LDF1 | B813F1042C100000 | 06 | 2 | 0x3026 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LDF1 | LDF1 Spannung Ladedruckfuehler |
| anoU_LMM1 | B813F1042C100000 | 06 | 2 | 0x3027 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LMM1 | LMM1 Spannung Luftmassenmesser 1 |
| anoU_LTF1 | B813F1042C100000 | 06 | 2 | 0x3028 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LTF1 | LTF1 Spannung Lufttemperaturfuehler 1 |
| anoU_UBT | B813F1042C100000 | 06 | 2 | 0x3013 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UBT | UBT Spannung Batteriespannung |
| anoU_UC1 | B813F1042C100000 | 06 | 2 | 0x3008 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UC1 | UC1 Spannung Kondensatorspannung 1 fuer Zylinder 1 und 6 |
| anoU_UC2 | B813F1042C100000 | 06 | 2 | 0x3009 | 06 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UC2 | UC2 Spannung Kondensatorspannung 2 fuer Zylinder 4 und 7 |
| anoU_UG1 | B813F1042C100000 | 06 | 2 | 0x3016 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UG1 | UG1 Spannung Speisespannung 1 fuer Luftmassenmesser 1, Ladedruckfuehler 1 |
| anoU_UG2 | B813F1042C100000 | 06 | 2 | 0x3017 | 06 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UG2 | UG2 Spannung Speisespannung 2 fuer Raildrucksensor |
| comGTR_opt | B813F1042C100000 | 06 | 2 | 0x1C00 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | comGTR_opt | Identifikation Handschalter/Automatik |
| dzmzMk1 | B813F1042C100000 | 06 | 2 | 0x0F19 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk1 | Selektive Mengenkorrektur Zylinder 1 |
| dzmzMk2 | B813F1042C100000 | 06 | 2 | 0x0F1A | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk2 | Selektive Mengenkorrektur Zylinder 2 |
| dzmzMk3 | B813F1042C100000 | 06 | 2 | 0x0F1B | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk3 | Selektive Mengenkorrektur Zylinder 3 |
| dzmzMk4 | B813F1042C100000 | 06 | 2 | 0x0F1C | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk4 | Selektive Mengenkorrektur Zylinder 4 |
| dzmzMk5 | B813F1042C100000 | 06 | 2 | 0x0F1D | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk5 | Selektive Mengenkorrektur Zylinder 5 |
| dzmzMk6 | B813F1042C100000 | 06 | 2 | 0x0F1E | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk6 | Selektive Mengenkorrektur Zylinder 6 |
| dzmzMk7 | B813F1042C100000 | 06 | 2 | 0x2F86 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk7 | Selektive Mengenkorrektur Zylinder 7 |
| dzmzMk8 | B813F1042C100000 | 06 | 2 | 0x2F87 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk8 | Selektive Mengenkorrektur Zylinder 8 |
| dzmzN1 | B813F1042C100000 | 06 | 2 | 0x0F13 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN1 | Selektive Drehzahl Zylinder 1 |
| dzmzN2 | B813F1042C100000 | 06 | 2 | 0x0F14 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN2 | Selektive Drehzahl Zylinder 2 |
| dzmzN3 | B813F1042C100000 | 06 | 2 | 0x0F15 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN3 | Selektive Drehzahl Zylinder 3 |
| dzmzN4 | B813F1042C100000 | 06 | 2 | 0x0F16 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN4 | Selektive Drehzahl Zylinder 4 |
| dzmzN5 | B813F1042C100000 | 06 | 2 | 0x0F17 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN5 | Selektive Drehzahl Zylinder 5 |
| dzmzN6 | B813F1042C100000 | 06 | 2 | 0x0F18 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN6 | Selektive Drehzahl Zylinder 6 |
| dzmzN7 | B813F1042C100000 | 06 | 2 | 0x2F80 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN7 | Selektive Drehzahl Zylinder 7 |
| dzmzN8 | B813F1042C100000 | 06 | 2 | 0x2F81 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN8 | Selektive Drehzahl Zylinder 8 |
| edmRSTCD | B813F1042C100000 | 06 | 2 | 0x0E00 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | edmRSTCD | Restart Code |
| fbmBSTZ_UB | B813F1042C100000 | 06 | 2 | 0x1300 | 06 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | h | -- | fbmBSTZ_UB | UB Betriebsstunden |
| fbmSDIAL | B813F1042C100000 | 06 | 2 | 0x1000 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fbmSDIAL | Anforderung Diagnoselampe aus Fehlerbehandlung (0:Aus,1:Ein,2:Blinken) |
| fboS_00 | B813F1042C100000 | 06 | 2 | 0xDF70 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_00 | Defekte Pfade 1 bis 16 |
| fboS_02 | B813F1042C100000 | 06 | 2 | 0xDF72 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_02 | Defekte Pfade 17 bis 32 |
| fboS_04 | B813F1042C100000 | 06 | 2 | 0xDF74 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_04 | Defekte Pfade 33 bis 48 |
| fgmFGAKT | B813F1042C100000 | 06 | 2 | 0x0F08 | 06 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | km/h | -- | fgmFGAKT | aktuelle Geschwindigkeit |
| ldmADF | B813F1042C100000 | 06 | 2 | 0x0F41 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | ldmADF | aktueller Atmosphaerendruck |
| mrmCASE_A | B813F1042C100000 | 06 | 2 | 0xDF21 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmCASE_A | ARD Zustand-Bits der aktiven Ruckeldaempfung |
| mrmCASE_L | B813F1042C100000 | 06 | 2 | 0xDF20 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmCASE_L | LLR Zustand-Bits der Leerlaufregelung |
| mrmKM_akt | B813F1042C100000 | 06 | 2 | 0x0FD0 | 06 | 5 | -- | 10 | 0 | 0x00 | 0x00 | 6.2f | km | -- | mrmKM_akt | aktueller KM-Stand von Kombiinstrument |
| mrmLLRIAnt | B813F1042C100000 | 06 | 2 | 0xDF13 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmLLRIAnt | M_E Menge aus I-Anteil des PI-Leerlaufreglers |
| mrmLLRPAnt | B813F1042C100000 | 06 | 2 | 0xDF14 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmLLRPAnt | M_E Menge aus P-Anteil des PI-Leerlaufreglers |
| mrmM_EAKT | B813F1042C100000 | 06 | 2 | 0x0F80 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EAKT | M_E Aktuelle Einspritzmenge (ohne ARD) |
| mrmM_EARD | B813F1042C100000 | 06 | 2 | 0xDC88 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EARD | M_E Menge ARD - Gesamt vor Begrenzung |
| mrmM_EDELB | B813F1042C100000 | 06 | 2 | 0x1F8E | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EDELB | M_E begrenzte Abgleichmenge |
| mrmM_EFAHR | B813F1042C100000 | 06 | 2 | 0xDC86 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EFAHR | M_E Fahrmenge nach Laufruheregler |
| mrmM_EKORR | B813F1042C100000 | 06 | 2 | 0x0F8E | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EKORR | M_E Fahrmenge korrigiert mit Vollast- und Mengenabgleich |
| mrmM_ELLR | B813F1042C100000 | 06 | 2 | 0x0F8D | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ELLR | M_E Menge aus Leerlaufregelung |
| mrmM_ELRR | B813F1042C100000 | 06 | 2 | 0xDC87 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ELRR | M_E Menge aus Laufruheregler |
| mrmM_EMOT | B813F1042C100000 | 06 | 2 | 0x0F8C | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EMOT | M_E Einspritzmenge nach ARD |
| mrmM_ESTAR | B813F1042C100000 | 06 | 2 | 0x0F82 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ESTAR | M_E resultierender Startmengen-Sollwert |
| mrmM_EWUN | B813F1042C100000 | 06 | 2 | 0x0F8B | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EWUN | M_E Fahrerwunschmenge nach externem Mengeneingriff |
| mrmN_LLBAS | B813F1042C100000 | 06 | 2 | 0x0E02 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | mrmN_LLBAS | N Leerlaufsolldrehzahl |
| mrmN_LLDIA | B813F1042C100000 | 06 | 2 | 0x0E08 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | mrmN_LLDIA | N Leerlaufsolldrehzahl fuer Diagnose |
| mrmSTATUS | B813F1042C100000 | 06 | 2 | 0x0F7F | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmSTATUS | Status Motorbetriebsphase |
| mroLLRDAnt | B813F1042C100000 | 06 | 2 | 0xDF15 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mroLLRDAnt | M_E Menge aus Leerlaufregler-DT1-Vorsteuerung |
| mroLRRReg | B813F1042C100000 | 06 | 2 | 0xDC90 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | mroLRRReg | Nsegm Segmentdrehzahl-Regelabweichung fuer Laufruheregler |
| mroM_ARDFF | B813F1042C100000 | 06 | 2 | 0xDC89 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mroM_ARDFF | M_E Menge ARD - Fuehrungsformer |
| mroM_ARDSR | B813F1042C100000 | 06 | 2 | 0xDC8A | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mroM_ARDSR | M_E Menge ARD - Stoerregler |
| zhoSYNC_ST | B813F1042C100000 | 06 | 2 | 0x1F50 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zhoSYNC_ST | Synchronisationsstatus des Zumesshandlers |
| zumAB_HE | B813F1042C100000 | 06 | 2 | 0x1F5A | 06 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zumAB_HE | Ansteuerbeginn Haupteinspritzung |
| zumAB_NE | B813F1042C100000 | 06 | 2 | 0x1F60 | 06 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zumAB_NE | Ansteuerbeginn Nacheinspritzung |
| zumAD_NE | B813F1042C100000 | 06 | 2 | 0x1F61 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | us | -- | zumAD_NE | Ansteuerdauer Nacheinspritzung Abgastrakt 1 |
| zuoAB_VE1 | B813F1042C100000 | 06 | 2 | 0x1F51 | 06 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zuoAB_VE1 | Ansteuerbeginn Voreinspritzung 1 |
| zuoAD_HE | B813F1042C100000 | 06 | 2 | 0x1F5B | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | us | -- | zuoAD_HE | Ansteuerdauer Haupteinspritzung |
| zuoAD_VE1 | B813F1042C100000 | 06 | 2 | 0x1F52 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | us | -- | zuoAD_VE1 | Ansteuerdauer Voreinspritzung 1 |
| zuoME_VE | B813F1042C100000 | 06 | 2 | 0x1F53 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | zuoME_VE | M_E Menge Voreinspritzung |
| zuoMEHE | B813F1042C100000 | 06 | 2 | 0x1F5C | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | zuoMEHE | M_E Menge Haupteinspritzung |
| zuoMEVGW | B813F1042C100000 | 06 | 2 | 0x1F57 | 06 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | zuoMEVGW | GW-Kennfeld Menge Voreinspritzung |
| zuoVE_STAT | B813F1042C100000 | 06 | 2 | 0x1F55 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zuoVE_STAT | Voreinspritzung - Schalter |
| anmLTF1 | B813F1042C100000 | 06 | 2 | 0x1F28 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | AN_LUFTTEMPERATUR1 | LTF1 Lufttemperatur 1 |
| anmLTF2 | B813F1042C100000 | 06 | 2 | 0x0F01 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | AN_LUFTTEMPERATUR2 | LTF2 Lufttemperatur 2 |
| anmLDF1 | B813F1042C100000 | 06 | 2 | 0x1F26 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | LADEDRUCK | LDF Ladedruck |
| dzmNmit | B813F1042C100000 | 06 | 2 | 0x0F10 | 06 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | MOTORDREHZAHL | N Drehzahl |
| zhmUM_ZA | B813F1042C100000 | 06 | 2 | 0x2F14 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zhmUM_ZA | Umdrehungszaehler (1 Tick = 2 Umdrehungen) |
| anmWTF | B813F1042C100000 | 06 | 2 | 0x0F00 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | MOTORTEMPERATUR | WTF Wassertemperatur |
| anmKDF | B813F1042C100000 | 06 | 2 | 0x2FFC | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | RAILDRUCK | KDF Raildruck |
| anmUBT | B813F1042C100000 | 06 | 2 | 0x0F65 | 06 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | UBATT | UBT Batteriespannung |
| anmVDF | B813F1042C100000 | 06 | 2 | 0x1F06 | 06 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | VORFOERDERDRUCK | VDF Vorfoerderdruck |

### BITS

| TELNAME | TELEGRAMM | NAME | BYTE | MASK | VALUE | LNAME | TEXT_0 | TEXT_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| dimDIGprel | 0F70 | S_BRL | 6 | 0x01 | 0x01 | Eingang Bremslichtschalter | Pedal nicht betaetigt (Masse) | Pedal betaetigt (Ubatt) |
| dimDIGprel | 0F70 | S_BRT | 6 | 0x02 | 0x02 | Eingang Bremslichttestschalter | Pedal nicht betaetigt (Masse) | Pedal betaetigt (Ubatt) |
| dimDIGprel | 0F70 | S_GZS_1 | 6 | 0x10 | 0x10 | Eingang Gluehzeitrelais 1 | HIGH (Ubatt) = GLUEHEN EIN wenn System ok | LOW (Masse) = GLUEHEN AUS wenn System ok |
| dimDIGprel | 0F70 | S_GZS_2 | 6 | 0x20 | 0x20 | Eingang Gluehzeitrelais 2 | HIGH (Ubatt) = GLUEHEN EIN wenn System ok | LOW (Masse) = GLUEHEN AUS wenn System ok |
| dimDIGprel | 0F70 | S_KUP | 7 | 0x20 | 0x20 | Eingang Kupplungsschalter | Pedal nicht betaetigt (Masse) | Pedal betaetigt (Ubatt) |
| comGTR_opt | 1C00 | S_EGS | 9 | 0x01 | 0x01 | Getriebe | Automat | Handschalt |
| dimF_MFL | 2F74 | S_MFLWA | 11 | 0x09 | 0x09 | MFL Bedienteil WA Wiederaufnahme | betaetigt | nicht betaetigt |
| dimF_MFL | 2F74 | S_MFLEINP | 11 | 0x12 | 0x12 | MFL Bedienteil EIN + | betaetigt | nicht betaetigt |
| dimF_MFL | 2F74 | S_MFLAUS | 11 | 0x20 | 0x20 | MFL Bedienteil AUS | betaetigt | nicht betaetigt |
| dimF_MFL | 2F74 | S_MFLEINM | 11 | 0x40 | 0x40 | MFL Bedienteil EIN - | betaetigt | nicht betaetigt |
| dimF_MFL | 2F74 | S_MFLTGL | 11 | 0x80 | 0x80 | MFL Bedienteil Togglebit | Zustand 0 | Zustand 1 |
| fbmDIA_C | DF01 | S_DIALA | 13 | 0x01 | 0x01 | Status Diagnoselampe (CAN) | nicht angesteuert | angesteuert |
| fbmMIL_C | DF02 | S_MILLA | 15 | 0x01 | 0x01 | Status MIL Diagnoselampe (CAN) | nicht angesteuert | angesteuert |
| mroFGR_ABN | DF08 | S_RFGRGNG | 16 | 0x01 | 0x01 | Reversible FGR Abschaltbedingung | io | kein gueltiger Gang |
| mroFGR_ABN | DF08 | S_RFGRABS | 16 | 0x02 | 0x02 | Reversible FGR Abschaltbedingung | io | Abschaltung aktiv |
| mroFGR_ABN | DF08 | S_IKUP | 16 | 0x10 | 0x10 | Irreversible FGR Abschaltbedingung | io | Fehler Kupplung |
| mroFGR_ABN | DF08 | S_IBRE | 16 | 0x20 | 0x20 | Irreversible FGR Abschaltbedingung | io | Fehler Bremse |
| mroFGR_ABN | DF08 | S_IMFLTGL | 16 | 0x40 | 0x40 | Irreversible FGR Abschaltbedingung | io | Fehler MFL Togglebit |
| mroFGR_ABN | DF08 | S_IOPT | 16 | 0x80 | 0x80 | Irreversible FGR Abschaltbedingung | io | FGR nicht variantencodiert |
| mroFGR_ABN | DF08 | S_RFGRKUP | 17 | 0x01 | 0x01 | Reversible FGR Abschaltbedingung | io | durch Kupplung betaetigt |
| mroFGR_ABN | DF08 | S_RFGRVNM | 17 | 0x02 | 0x02 | Reversible FGR Abschaltbedingung | io | durch Hochdrehen |
| mroFGR_ABN | DF08 | S_RFGRBRK | 17 | 0x04 | 0x04 | Reversible FGR Abschaltbedingung | io | durch Bremse betaetigt |
| mroFGR_ABN | DF08 | S_RFGRVMN | 17 | 0x08 | 0x08 | Reversible FGR Abschaltbedingung | io | durch Geschwindigkeit zu klein |
| mroFGR_ABN | DF08 | S_RFGRVZG | 17 | 0x10 | 0x10 | Reversible FGR Abschaltbedingung | io | durch Verzoegerung zu gross |
| mroFGR_ABN | DF08 | S_RFGRUEB | 17 | 0x20 | 0x20 | Reversible FGR Abschaltbedingung | io | durch  Geschwindigkeit zu gross |
| mroFGR_ABN | DF08 | S_RFGRVMR | 17 | 0x40 | 0x40 | Reversible FGR Abschaltbedingung | io | Einschaltgeschwindigkeit zu gering |
| mroFGR_ABN | DF08 | S_RFGRMSW | 17 | 0x80 | 0x80 | Reversible FGR Abschaltbedingung | io | Mainswitch nicht eingeschaltet |
| mroKickDwn | 1F9A | S_KD | 19 | 0x01 | 0x01 | Kick Down | nicht betaetigt | betaetigt |
| camS_KO | 1FB0 | S_KO | 21 | 0x01 | 0x01 | Schalter Klimakompressor KO (CAN) | nicht betaetigt | betaetigt |
| camS_AC | 1FB1 | S_AC | 23 | 0x01 | 0x01 | Schalter Klimabereitschaft AC (CAN) | nicht betaetigt | betaetigt |

### FORTTEXTE

| ORT | ORTTEXT | UW_1 | UW_2 | UW_3 | UW_4 |
| --- | --- | --- | --- | --- | --- |
| 0x0110 | Lufttemperaturfuehler 2 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0115 | Kuehlmitteltemperaturfuehler | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0120 | Pedalwertgeber | 0x01 | 0x05 | 0x09 | 0x10 |
| 0x0190 | Raildrucksensor | 0x01 | 0x11 | 0x03 | 0x04 |
| 0x0200 | Injektor Zylinder 5 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0201 | Injektor Zylinder 8 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0202 | Injektor Zylinder 3 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0203 | Injektor Zylinder 2 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0220 | Pedalwertgeber PGS | 0x01 | 0x05 | 0x08 | 0x10 |
| 0x0235 | Ladedruckfuehler | 0x01 | 0x02 | 0x03 | 0x16 |
| 0x0335 | Drehzahl Kurbelwelle | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x03E6 | Anlassersteuerung | 0x01 | 0x03 | 0x05 | 0x10 |
| 0x0400 | Abgasrueckfuehrung (AGR) 2 | 0x01 | 0x02 | 0x03 | 0x18 |
| 0x0404 | Abgasrueckfuehrung (AGR) 2 | 0x01 | 0x02 | 0x03 | 0x18 |
| 0x0480 | Elektroluefter | 0x01 | 0x02 | 0x05 | 0x12 |
| 0x0500 | Fahrgeschwindigkeitssignal | 0x01 | 0x02 | 0x05 | 0x08 |
| 0x0560 | Referenzspannung intern | 0x01 | 0x02 | 0x05 | 0x04 |
| 0x0600 | CAN-Bus privat | 0x01 | 0x05 | 0x03 | 0x10 |
| 0x0605 | Steuergeraet DDE (Microcontroller) | 0x01 | 0x14 | 0x03 | 0x05 |
| 0x1190 | Raildruck-Regelung | 0x01 | 0x11 | 0x03 | 0x04 |
| 0x1195 | Raildruckregelventil | 0x01 | 0x11 | 0x05 | 0x04 |
| 0x1250 | Relais Vorfoerderpumpe | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1255 | Vorfoerderdruckfuehler | 0x01 | 0x06 | 0x03 | 0x04 |
| 0x1260 | Vorfoerderdruck-Ueberwachung | 0x01 | 0x06 | 0x03 | 0x04 |
| 0x1470 | Ladedruck-Regelung | 0x01 | 0x19 | 0x03 | 0x07 |
| 0x1612 | Laufruheregler | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1640 | Steuergeraet DDE (EEPROM und Konfiguration) | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1DF0 | Redundanter Notstop | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1DF5 | Elektronische Wegfahrsperre (EWS) | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1E00 | CAN-Bus           | 0x01 | 0x05 | 0x03 | 0x10 |
| 0x1E05 | Fahrgeschwindigkeitsregelung | 0x01 | 0x02 | 0x05 | 0x10 |
| 0x1E25 | Ueberwachung Drehzahlgeber | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1E30 | Ladedruck-Regelung | 0x01 | 0x19 | 0x03 | 0x07 |
| 0x1E31 | Ladedruck-Regelung | 0x01 | 0x19 | 0x03 | 0x07 |
| 0x1E35 | Fehler im Nachlauf beim Abstellen | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1E40 | Analog / Digital Wandler-Testspannung | 0x01 | 0x09 | 0x05 | 0x08 |
| 0x1E45 | Kondensatorspannung 1 fuer Zylinder 3 und 5 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1E50 | Kondensatorspannung 2 fuer Zylinder 2 und 8 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1E55 | Speisespannung 1 fuer HFM 2 und PGS | 0x01 | 0x02 | 0x05 | 0x09 |
| 0x1E60 | Speisespannung 2 fuer PWG und VDF | 0x01 | 0x02 | 0x05 | 0x08 |
| 0x2800 | Versorgungsspannung | 0x01 | 0x02 | 0x03 | 0x15 |
| 0x3005 | Klemme 15           | 0x01 | 0x02 | 0x06 | 0x05 |
| 0x3505 | Gluehanlage 1 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x3506 | Gluehanlage 2 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x3510 | DDE-Hauptrelais | 0x01 | 0x02 | 0x05 | 0x04 |
| 0x3515 | Klimaleistungsausgang | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x3520 | Motorlagersteuerung | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x3565 | Strom Abschaltventil an Hochdruckpumpe (ELAB) | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x3580 | Abschaltventil an Hochdruckpumpe (ELAB) | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x3596 | Bremslicht- / Bremstestschalter | 0x01 | 0x05 | 0x08 | 0x10 |
| 0x3600 | Atmosphaerendruckfuehler | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x3605 | Luftmassenmesser 1 oder 2 | 0x01 | 0x03 | 0x17 | 0x18 |
| 0x3610 | Abgasrueckfuehrung (AGR) 1 | 0x01 | 0x02 | 0x03 | 0x17 |
| 0x3615 | Abgasrueckfuehrung (AGR) 1 | 0x01 | 0x02 | 0x03 | 0x17 |
| 0x3620 | Luftmassensystemfehler | 0x01 | 0x03 | 0x17 | 0x18 |
| 0x0000 | unbekannter Fehlerort | 0x00 | 0x00 | 0x00 | 0x00 |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 | A9_0 | A9_1 | A10_0 | A10_1 | A11_0 | A11_1 | A12_0 | A12_1 | A13_0 | A13_1 | A14_0 | A14_1 | A15_0 | A15_1 | A16_0 | A16_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0110 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x32 | 0x00 | 0x60 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0115 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x32 | 0x00 | 0x60 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0120 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x31 | 0x00 | 0x59 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0190 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x32 | 0x00 | 0x60 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0200 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x5B | 0x00 | 0x00 | 0x00 | 0x5A | 0x00 | 0x37 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x54 | 0x00 | 0x00 |
| 0x0201 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x5B | 0x00 | 0x00 | 0x00 | 0x5A | 0x00 | 0x37 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x54 | 0x00 | 0x00 |
| 0x0202 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x5B | 0x00 | 0x00 | 0x00 | 0x5A | 0x00 | 0x37 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x54 | 0x00 | 0x00 |
| 0x0203 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x5B | 0x00 | 0x00 | 0x00 | 0x5A | 0x00 | 0x37 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x54 | 0x00 | 0x00 |
| 0x0220 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x31 | 0x00 | 0x59 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x4C |
| 0x0235 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x61 | 0x00 | 0x31 | 0x00 | 0x59 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x48 |
| 0x0335 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x40 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x55 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x03E6 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x31 | 0x00 | 0x61 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x4B |
| 0x0400 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x5 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0404 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x9 | 0x00 | 0xA | 0x00 | 0x6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0480 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x75 | 0x00 | 0x76 | 0x00 | 0xC | 0x00 | 0xD | 0x00 | 0x00 | 0x00 | 0x77 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0500 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x22 | 0x00 | 0x00 | 0x00 | 0x56 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x49 |
| 0x0560 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x62 | 0x00 | 0x45 | 0x00 | 0x63 | 0x00 | 0x46 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0600 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0xF | 0x00 | 0x10 | 0x00 | 0x5C | 0x00 | 0x41 | 0x00 | 0x20 | 0x00 | 0x13 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0605 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x4F | 0x00 | 0x6F | 0x00 | 0x70 | 0x00 | 0x00 | 0x00 | 0x50 | 0x00 | 0x00 | 0x00 | 0x3E | 0x00 | 0x00 |
| 0x1190 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x3C | 0x00 | 0x3F | 0x00 | 0x00 | 0x00 | 0x4E | 0x00 | 0x38 | 0x00 | 0x51 | 0x00 | 0x00 | 0x00 | 0x79 |
| 0x1195 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x31 | 0x00 | 0x61 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x19 |
| 0x1250 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x31 | 0x00 | 0x61 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1255 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x32 | 0x00 | 0x60 | 0x00 | 0x59 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1260 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x3D | 0x00 | 0x00 | 0x00 | 0x67 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1470 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x44 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1612 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x2E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1640 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0xB | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x2D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1DF0 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x47 |
| 0x1DF5 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x3B | 0x00 | 0x5E | 0x00 | 0x5D | 0x00 | 0x64 | 0x00 | 0x68 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x11 | 0x00 | 0x12 | 0x00 | 0x00 | 0x00 | 0x14 | 0x00 | 0x16 | 0x00 | 0x15 | 0x00 | 0x18 | 0x00 | 0x17 |
| 0x1E05 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x6E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x2C | 0x00 | 0x1 | 0x00 | 0x2 |
| 0x1E25 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x30 | 0x00 | 0xE | 0x00 | 0x2F | 0x00 | 0x00 | 0x00 | 0x5F |
| 0x1E30 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x1E | 0x00 | 0x1A | 0x00 | 0x33 | 0x00 | 0x34 | 0x00 | 0x4D | 0x00 | 0x1B | 0x00 | 0x78 | 0x00 | 0x23 |
| 0x1E31 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x1F | 0x00 | 0x6C | 0x00 | 0x35 | 0x00 | 0x36 | 0x00 | 0x00 | 0x00 | 0x6D | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E35 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x71 | 0x00 | 0x72 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x73 | 0x00 | 0x74 | 0x00 | 0x00 |
| 0x1E40 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x61 | 0x00 | 0x31 | 0x00 | 0x00 | 0x00 | 0x39 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E45 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x57 | 0x00 | 0x58 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E50 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x57 | 0x00 | 0x58 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E55 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x32 | 0x00 | 0x31 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E60 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x32 | 0x00 | 0x31 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x2800 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x66 | 0x00 | 0x65 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3005 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x6B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3505 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xC | 0x00 | 0xD | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x25 |
| 0x3506 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xC | 0x00 | 0xD | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x24 |
| 0x3510 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x52 | 0x00 | 0x53 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3515 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x31 | 0x00 | 0x61 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3520 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x31 | 0x00 | 0x61 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3565 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x6A | 0x00 | 0x69 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3580 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x31 | 0x00 | 0x61 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3596 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x4A |
| 0x3600 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x61 | 0x00 | 0x31 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3605 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x2B | 0x00 | 0x28 | 0x00 | 0x2A | 0x00 | 0x27 | 0x00 | 0x00 | 0x00 | 0x26 | 0x00 | 0x00 | 0x00 | 0x29 |
| 0x3610 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x7 | 0x00 | 0x8 | 0x00 | 0x4 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3615 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x3 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3620 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x3A | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x1 | Adaptive Cruise Control ACC Alive - Fehler |
| 0x2 | Adaptive Cruise Control ACC Botschaften unplausibel |
| 0x3 | AGR 1 Negative Regelabweichung / Luftmasse zu hoch |
| 0x4 | AGR 1 Positive Regelabweichung / Luftmasse zu niedrig |
| 0x5 | AGR 2 Negative Regelabweichung / Luftmasse zu hoch |
| 0x6 | AGR 2 Positive Regelabweichung / Luftmasse zu niedrig |
| 0x7 | AGR-Steller 1 Kurzschluss nach B+ |
| 0x8 | AGR-Steller 1 Unterbrechung oder Kurzschluss nach B- |
| 0x9 | AGR-Steller 2 Kurzschluss nach B+ |
| 0xA | AGR-Steller 2 Unterbrechung oder Kurzschluss nach B- |
| 0xB | Allgemeine Abgleiche Checksumme |
| 0xC | Ansteuerung Kurzschluss nach B+ |
| 0xD | Ansteuerung Unterbrechung oder Kurzschluss nach B- |
| 0xE | Ausfall Drehzahlgebersignal Kurbelwelle |
| 0xF | Baustein defekt |
| 0x10 | Baustein offline |
| 0x11 | CAN-Bus Baustein defekt |
| 0x12 | CAN-Bus Baustein offline |
| 0x13 | Checksummenfehler |
| 0x14 | Empfangsfehler ACC |
| 0x15 | Empfangsfehler ASC |
| 0x16 | Empfangsfehler Elektronische Getriebesteuerung (EGS) |
| 0x17 | Empfangsfehler Kombi-Instrument (INSTR2) |
| 0x18 | Empfangsfehler Kombi-Instrument (INSTR3) |
| 0x19 | Endstufenfehler |
| 0x1A | Ansteuersignal Ladedrucksteller 1 unplausibel |
| 0x1B | Versorgungsspannung Ladedrucksteller 1 zu niedrig |
| 0x1C | Fehler beim Abstellen ueber Injektor Endstufe (OFF) |
| 0x1D | Fehler beim Abstellen ueber Nullmenge |
| 0x1E | elektrischer Ladedrucksteller 1 oder VNT 1 defekt |
| 0x1F | elektrischer Ladedrucksteller 2 oder VNT 2 defekt |
| 0x20 | GAD40 Quervergleich gestoert |
| 0x22 | Geschwindigkeit zu gross |
| 0x23 | Gleichstellungsregler |
| 0x24 | Gluehsystemfehler Zylinder 1, 4, 6, 7 |
| 0x25 | Gluehsystemfehler Zylinder 2, 3, 5, 8 |
| 0x26 | HFM1 Luftmasse zu gering |
| 0x27 | HFM1 Ueberwachung aus Slave |
| 0x28 | HFM2 Kurzschluss nach B+ |
| 0x29 | HFM2 Luftmasse zu gering |
| 0x2A | HFM2 Speisespannungsfehler |
| 0x2B | HFM2 Unterbrechung oder Kurzschluss nach B- |
| 0x2C | kein Signal vom Multifunktionslenkrad |
| 0x2D | Kommunikation mit EEPROM |
| 0x2E | Korrekturmenge zu gross |
| 0x2F | Kurbelwellengebersignal dynamisch unplausibel |
| 0x30 | Kurbelwellensignal-Leitung vom Slave zum Master defekt |
| 0x31 | Kurzschluss nach B+ |
| 0x32 | Kurzschluss nach B- |
| 0x33 | Ladedrucksteller 1 Kurzschluss nach B+ |
| 0x34 | Ladedrucksteller 1 Unterbrechung oder Kurzschluss nach B- |
| 0x35 | Ladedrucksteller 2 Kurzschluss nach B+ |
| 0x36 | Ladedrucksteller 2 Unterbrechung oder Kurzschluss nach B- |
| 0x37 | Lastabfall |
| 0x38 | Leckage |
| 0x39 | Leerlauf-Testimpuls-Fehler |
| 0x3A | Luftmassenabweichungsindex zu gross |
| 0x3B | Manipulationsversuch |
| 0x3C | Maximaldruck ueberschritten |
| 0x3D | Mengenreduktion wegen geringem Vorfoerderdruck |
| 0x3E | Microcontroller (Gate-Array Kommunikation) |
| 0x3F | Minimaldruck ueber Motordrehzahl zu klein |
| 0x40 | Motor hat ueberdreht |
| 0x41 | n-sync. Empfangsobjekte verzoegert |
| 0x44 | Negative Regelabweichung / Ladedruck zu hoch |
| 0x45 | obere Referenzspannungsgrenze im Master ueberschritten |
| 0x46 | obere Referenzspannungsgrenze im Slave ueberschritten |
| 0x47 | Plausibilitaet im Nachlauf |
| 0x48 | Plausibilitaet mit Atmosphaerendruckfuehler bei Leerlauf |
| 0x49 | Plausibilitaet mit Einspritzmenge und Motordrehzahl |
| 0x4A | Plausibilitaet mit redundantem Kontakt |
| 0x4B | Plausibilitaet Starterpfad |
| 0x4C | Plausibilitaet zwischen Poti 1 und 2 verletzt |
| 0x4D | Positive Regelabweichung / Ladedruck zu niedrig |
| 0x4E | Raildruckregelventil klemmt |
| 0x4F | Recovery aufgetreten |
| 0x50 | redundante Schubueberwachung |
| 0x51 | Regelabweichung ueber Motordrehzahl zu gross |
| 0x52 | Relais schaltet zu frueh ab |
| 0x53 | Relais schaltet zu spaet ab |
| 0x54 | Schnell-Loeschfehler |
| 0x55 | Signal dynamisch unplausibel |
| 0x56 | Signal fehlerhaft |
| 0x57 | Spannung zu hoch |
| 0x58 | Spannung zu niedrig |
| 0x59 | Speisespannungsfehler |
| 0x5A | Strom an High Side zu gross |
| 0x5B | Strom an Low Side zu gross |
| 0x5C | t-sync. Empfangsobjekte (teilweise) verzoegert |
| 0x5D | Timeout abgelaufen |
| 0x5E | Uebertragungsfehler |
| 0x5F | Ueberwachung aus Slave |
| 0x60 | Unterbrechung oder Kurzschluss nach B+ |
| 0x61 | Unterbrechung oder Kurzschluss nach B- |
| 0x62 | untere Referenzspannungsgrenze im Master unterschritten |
| 0x63 | untere Referenzspannungsgrenze im Slave unterschritten |
| 0x64 | Urcode (UC) im EEPROM defekt |
| 0x65 | Versorgungsspannung DDE ueberschritten |
| 0x66 | Versorgungsspannung DDE unterschritten |
| 0x67 | Vorfoerderdruck unter Mindestwert fuer Motorstart |
| 0x68 | Wechselcode (WC) im EEPROM defekt |
| 0x69 | zu gross |
| 0x6A | zu klein |
| 0x6B | Zuendstellung 2 Plausibilitaet nach Steuergeraet-Initialisierung |
| 0x6C | Ansteuersignal Ladedrucksteller 2 unplausibel |
| 0x6D | Versorgungsspannung Ladedrucksteller 2 zu niedrig |
| 0x6E | Adaptive Cruise Control ACC Reaktions / Rampen - Timeout |
| 0x6F | Nachlauftest Gate-Array Mengenstop im Master fehlgeschlagen |
| 0x70 | Nachlauftest Gate-Array Mengenstop im Slave fehlgeschlagen |
| 0x71 | Fehler beim Abstellen ueber Injektor Endstufe (OFF) im Master |
| 0x72 | Fehler beim Abstellen ueber Nullmenge im Master |
| 0x73 | Fehler beim Abstellen ueber Injektor Endstufe (OFF) im Slave |
| 0x74 | Fehler beim Abstellen ueber Nullmenge im Slave |
| 0x75 | Blockiererkennung |
| 0x76 | Blockiererkennung2 |
| 0x77 | Blockiererkennung3 |
| 0x78 | Abgefallener Ladeluftschlauch |
| 0x79 | Raildruckueberhoehung |
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
| 0x00 | ---- | ---- | 1 | 0,0 |
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
| 0x17 | Luftmasse 1 | mg/Hub Luft | 7,8740157 | 0,0 |
| 0x18 | Luftmasse 2 | mg/Hub Luft | 7,8740157 | 0,0 |
| 0x19 | Luftmassenindex | - | 0,0256 | 9999,0 |
| 0x20 | unbekannte Umweltbedingung | ---- | 1 | 0,0 |

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

### FORTTEXTE_SL

| ORT | ORTTEXT | UW_1 | UW_2 | UW_3 | UW_4 |
| --- | --- | --- | --- | --- | --- |
| 0x0101 | Luftmassenmesser 1 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x0111 | Lufttemperaturfuehler 1 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0116 | Kuehlmitteltemperaturfuehler | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0121 | Pedalwertgeber | 0x01 | 0x05 | 0x03 | 0x10 |
| 0x0191 | Raildrucksensor | 0x01 | 0x11 | 0x03 | 0x04 |
| 0x0208 | Injektor Zylinder 1 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0209 | Injektor Zylinder 4 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x020A | Injektor Zylinder 6 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x020B | Injektor Zylinder 7 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x0236 | Ladedruckfuehler | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x0336 | Drehzahl Kurbelwelle | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x0501 | Fahrgeschwindigkeitssignal | 0x01 | 0x02 | 0x06 | 0x03 |
| 0x0601 | CAN-Bus privat | 0x01 | 0x05 | 0x03 | 0x10 |
| 0x0606 | Steuergeraet DDE (Microcontroller) | 0x01 | 0x14 | 0x03 | 0x05 |
| 0x09F6 | Raildruckueberwachung im Start | 0x01 | 0x04 | 0x02 | 0x11 |
| 0x1191 | Raildruck-Regelung | 0x01 | 0x11 | 0x03 | 0x04 |
| 0x1196 | Raildruckregelventil | 0x01 | 0x11 | 0x05 | 0x04 |
| 0x1612 | Diagnoselampe | 0x01 | 0x11 | 0x03 | 0x04 |
| 0x1613 | Laufruheregler | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1641 | Steuergeraet DDE (EEPROM und Konfiguration) | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1DF1 | Redundanter Notstop | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x1E26 | Ueberwachung Drehzahlgeber | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1E46 | Kondensatorspannung 1 fuer Zylinder 1 und 6 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1E51 | Kondensatorspannung 2 fuer Zylinder 4 und 7 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x1E56 | Speisespannung 1 fuer HFM 1und LDF 1 | 0x01 | 0x02 | 0x05 | 0x03 |
| 0x1E61 | Speisespannung 2 fuer Raildrucksensor | 0x01 | 0x02 | 0x05 | 0x03 |
| 0x2801 | Versorgungsspannung | 0x01 | 0x02 | 0x03 | 0x15 |
| 0x3006 | Klemme 15           | 0x01 | 0x02 | 0x06 | 0x05 |
| 0x3511 | DDE-Hauptrelais | 0x01 | 0x02 | 0x05 | 0x04 |
| 0x3551 | Abgasrueckfuehrung (AGR) 2 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x3590 | Abgasrueckfuehrung (AGR) 1 | 0x01 | 0x02 | 0x03 | 0x05 |
| 0x3595 | Bremslicht- / Bremstestschalter | 0x01 | 0x05 | 0x03 | 0x10 |
| 0x0000 | unbekannter Fehlerort | 0x00 | 0x00 | 0x00 | 0x00 |

### FARTMATRIX_SL

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 | A9_0 | A9_1 | A10_0 | A10_1 | A11_0 | A11_1 | A12_0 | A12_1 | A13_0 | A13_1 | A14_0 | A14_1 | A15_0 | A15_1 | A16_0 | A16_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0101 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x26 | 0x00 | 0x00 | 0x00 | 0x2C | 0x00 | 0x10 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0111 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x11 | 0x00 | 0x2B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0116 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x11 | 0x00 | 0x2B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0121 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x10 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0191 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x11 | 0x00 | 0x2B | 0x00 | 0x26 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0208 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x28 | 0x00 | 0x00 | 0x00 | 0x27 | 0x00 | 0x12 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x22 | 0x00 | 0x00 |
| 0x0209 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x28 | 0x00 | 0x00 | 0x00 | 0x27 | 0x00 | 0x12 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x22 | 0x00 | 0x00 |
| 0x020A | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x28 | 0x00 | 0x00 | 0x00 | 0x27 | 0x00 | 0x12 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x22 | 0x00 | 0x00 |
| 0x020B | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x28 | 0x00 | 0x00 | 0x00 | 0x27 | 0x00 | 0x12 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x22 | 0x00 | 0x00 |
| 0x0236 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x2C | 0x00 | 0x10 | 0x00 | 0x26 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0336 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x18 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x23 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0501 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x2A |
| 0x0601 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x9 | 0x00 | 0x8 | 0x00 | 0x29 | 0x00 | 0x1A | 0x00 | 0x19 | 0x00 | 0xB | 0x00 | 0xA | 0x00 | 0x00 |
| 0x0606 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x16 | 0x00 | 0x00 |
| 0x09F6 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x32 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1191 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x14 | 0x00 | 0x17 | 0x00 | 0x00 | 0x00 | 0x1E | 0x00 | 0x13 | 0x00 | 0x1F | 0x00 | 0x00 | 0x00 | 0x30 |
| 0x1196 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x10 | 0x00 | 0x2C | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1612 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x31 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1613 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0xE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1641 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x5 | 0x00 | 0x00 | 0x00 | 0x15 | 0x00 | 0xD | 0x00 | 0xC | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1DF1 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1C |
| 0x1E26 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x1B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x6 | 0x00 | 0xF | 0x00 | 0x7 | 0x00 | 0x00 |
| 0x1E46 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E51 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x24 | 0x00 | 0x25 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E56 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x11 | 0x00 | 0x10 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x1E61 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x11 | 0x00 | 0x10 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x2801 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x2E | 0x00 | 0x2D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3006 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x2F |
| 0x3511 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x20 | 0x00 | 0x21 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3551 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x3 | 0x00 | 0x4 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3590 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1 | 0x00 | 0x2 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3595 | 0x00 | 0x00 | 0x00 | 0x00 | 0xEB | 0xEC | 0x00 | 0xEE | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0xF6 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1D |

### FARTTEXTE_SL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x1 | AGR-Steller 1 Kurzschluss nach B+ |
| 0x2 | AGR-Steller 1 Unterbrechung oder Kurzschluss nach B- |
| 0x3 | AGR-Steller 2 Kurzschluss nach B+ |
| 0x4 | AGR-Steller 2 Unterbrechung oder Kurzschluss nach B- |
| 0x5 | Allgemeine Abgleiche Checksumme |
| 0x6 | Ausfall Drehzahlgebersignal Kurbelwelle |
| 0x7 | Ausfall Nockenwellengebersignal |
| 0x8 | Baustein defekt |
| 0x9 | Baustein offline |
| 0xA | Checksummenfehler |
| 0xB | GAD40 Quervergleich gestoert |
| 0xC | Injektorabgleich Checksumme |
| 0xD | Kommunikation mit EEPROM |
| 0xE | Korrekturmenge zu gross |
| 0xF | Kurbelwellengebersignal dynamisch unplausibel |
| 0x10 | Kurzschluss nach B+ |
| 0x11 | Kurzschluss nach B- |
| 0x12 | Lastabfall |
| 0x13 | Leckage |
| 0x14 | Maximaldruck ueberschritten |
| 0x15 | Mengendriftkompensation Checksumme |
| 0x16 | Microcontroller (Gate-Array Kommunikation) |
| 0x17 | Minimaldruck ueber Motordrehzahl zu klein |
| 0x18 | Motor hat ueberdreht |
| 0x19 | n-sync. Empfangsobjekt verzoegert |
| 0x1A | n-sync. Objekt nicht versendet |
| 0x1B | Nockenwellengebersignal Freqenz zu hoch |
| 0x1C | Plausibilitaet im Nachlauf |
| 0x1D | Plausibilitaet mit redundantem Kontakt |
| 0x1E | Raildruckregelventil klemmt |
| 0x1F | Regelabweichung ueber Motordrehzahl zu gross |
| 0x20 | Relais schaltet zu frueh ab |
| 0x21 | Relais schaltet zu spaet ab |
| 0x22 | Schnell-Loeschfehler |
| 0x23 | Signal dynamisch unplausibel |
| 0x24 | Spannung zu hoch |
| 0x25 | Spannung zu niedrig |
| 0x26 | Speisespannungsfehler |
| 0x27 | Strom an High Side zu gross |
| 0x28 | Strom an Low Side zu gross |
| 0x29 | t-sync. Empfangsobjekte verzoegert |
| 0x2A | Ueberwachung aus Master |
| 0x2B | Unterbrechung oder Kurzschluss nach B+ |
| 0x2C | Unterbrechung oder Kurzschluss nach B- |
| 0x2D | Versorgungsspannung DDE ueberschritten |
| 0x2E | Versorgungsspannung DDE unterschritten |
| 0x2F | Zuendstellung 2 Plausibilitaet nach Steuergeraet-Initialisierung |
| 0x30 | Raildruckueberhoehung |
| 0x31 | Ansteuerung wegen Fehler Raildruck-Regelung |
| 0x32 | Kein Raildruckaufbau |
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

### FUMWELTTEXTE_SL

| UWNR | UWTEXT | UW_EINH | UWF_A | UWF_B |
| --- | --- | --- | --- | --- |
| 0x00 | ---- | ---- | 1 | 0,0 |
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
| 0x16 | unbekannte Umweltbedingung | ---- | 1 | 0,0 |
