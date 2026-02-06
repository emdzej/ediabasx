# DDE41KL0.prg

## General

|  |  |
| --- | --- |
| File | DDE41KL0.prg |
| Type | PRG |
| Jobs | 157 |
| Tables | 6 |
| Origin | BMW TI-433 Schiefer |
| Revision | 1.00 |
| Author | BMW ZM-E-31 Lexmueller, BMW TI-433 Schiefer, BMW TI-433 Schaller |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DDE 4.1 fuer M67 Slave |  |  |
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

### PRUEFSTEMPEL_LESEN

Kennung M_ABGLEICH_FLAG lesen

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Kennung M_ABGLEICH_FLAG lesen

| Name | Type | Description |
| --- | --- | --- |
| WERT | long | Aktuellen Abgleichwert |

### MW_SELECT_LESEN

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

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

### STATUS_SYNC_MODE

_No description._

_No arguments._

### STEUERN_SYNC_MODE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| MODE | int |  |

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

### ABGLEICH_VERSTELLEN_VOLL_MENGE_ROH

Vollastmenge-Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_VOLL_MENGE_ROH_WERT | int | Neuer Verstellwert |

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

### ABGLEICH_KIC_VERSTELLEN_PROGRAMMIEREN

Uebertragung KIC Ein- oder Ausschalten

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_KIC_VERSTELLEN_PROGRAMMIEREN_WERT | int |  |

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

### START_SYSTEMCHECK_ZYL_SEL_DREHZAHL

Start zylinderselektive Drehzhahlen lesen

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

### STATUS_ANMUBT

UBT Batteriespannung

_No arguments._

### STATUS_ANMVDF

VDF Vorfoerderdruck

_No arguments._

### STATUS_ANMWTF

WTF Wassertemperatur

_No arguments._

### STATUS_DZMNAKT

N aktuelle Drehzahl aus letzter Periode

_No arguments._

### STATUS_EHMFARS1

Tastverhaeltnis Ansteuerung Abgasrueckfuehrsteller 1

_No arguments._

### STATUS_EHMFARS2

Tastverhaeltnis Ansteuerung Abgasrueckfuehrsteller 2

_No arguments._

### STATUS_EHMFKDR

Tastverhaeltnis Ansteuerung Raildruckregelventil

_No arguments._

### STATUS_ZUMP_RAIL

Raildruck fuer Mengenzumessung

_No arguments._

### STATUS_ZUMPQSOLL

Raildruck Sollwert

_No arguments._

### STATUS_ADMIDV

IDV Rohwert Istwert Stromregelung Druckregelventil

_No arguments._

### STATUS_ADMKDF

KDF Rohwert Raildruck

_No arguments._

### STATUS_ADMLDF1

LDF Rohwert Ladedruck

_No arguments._

### STATUS_ADMLMM1

LMM1 Rohwert Luftmasse 1

_No arguments._

### STATUS_ADMLTF1

LTF1 Rohwert Lufttemperatur 1

_No arguments._

### STATUS_ADMUBT

UBT Rohwert Batteriespannung

_No arguments._

### STATUS_ADMUC1

UC1 Rohwert Kondensatorspannung 1 fuer Zylinder 1 und 6

_No arguments._

### STATUS_ADMUC2

UC2 Rohwert Kondensatorspannung 2 fuer Zylinder 4 und 7

_No arguments._

### STATUS_ADMUG1

UG1 Rohwert Speisespannung 1 fuer Luftmassenmesser 1, Ladedruckfuehler 1

_No arguments._

### STATUS_ADMUG2

UG2 Rohwert Speisespannung 2 fuer Raildrucksensor

_No arguments._

### STATUS_ANMIDV

IDV Istwert Stromregelung Druckregelventil

_No arguments._

### STATUS_ANMKDF

KDF Raildruck

_No arguments._

### STATUS_ANMLDF1

LDF Ladedruck

_No arguments._

### STATUS_ANMLMM1

LMM1 Luftmasse 1

_No arguments._

### STATUS_ANMLTF1

LTF1 Lufttemperatur 1

_No arguments._

### STATUS_ANMLTF2

LTF2 Lufttemperatur 2

_No arguments._

### STATUS_ANMUC1

UC1 Kondensatorspannung 1 fuer Zylinder 1 und 6

_No arguments._

### STATUS_ANMUC2

UC2 Kondensatorspannung 2 fuer Zylinder 4 und 7

_No arguments._

### STATUS_ANMUG1

UG1 Speisespannung 1 fuer Luftmassenmesser 1, Ladedruckfuehler 1

_No arguments._

### STATUS_ANMUG2

UG2 Speisespannung 2 fuer Raildrucksensor

_No arguments._

### STATUS_ANOU_IDV

IDV Spannung zur Strommessung Druckregelventil

_No arguments._

### STATUS_ANOU_KDF

KDF Spannung Raildruckfuehler

_No arguments._

### STATUS_ANOU_KTF

KTF Spannung Kraftstofftemperaturfuehler

_No arguments._

### STATUS_ANOU_LDF1

LDF1 Spannung Ladedruckfuehler

_No arguments._

### STATUS_ANOU_LMM1

LMM1 Spannung Luftmassenmesser 1

_No arguments._

### STATUS_ANOU_LTF1

LTF1 Spannung Lufttemperaturfuehler 1

_No arguments._

### STATUS_ANOU_UBT

UBT Spannung Batteriespannung

_No arguments._

### STATUS_ANOU_UC1

UC1 Spannung Kondensatorspannung 1 fuer Zylinder 1 und 6

_No arguments._

### STATUS_ANOU_UC2

UC2 Spannung Kondensatorspannung 2 fuer Zylinder 4 und 7

_No arguments._

### STATUS_ANOU_UG1

UG1 Spannung Speisespannung 1 fuer Luftmassenmesser 1, Ladedruckfuehler 1

_No arguments._

### STATUS_ANOU_UG2

UG2 Spannung Speisespannung 2 fuer Raildrucksensor

_No arguments._

### STATUS_COMGTR_OPT

Identifikation Handschalter/Automatik

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

### STATUS_DZMZMK7

Selektive Mengenkorrektur Zylinder 7

_No arguments._

### STATUS_DZMZMK8

Selektive Mengenkorrektur Zylinder 8

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

### STATUS_DZMZN7

Selektive Drehzahl Zylinder 7

_No arguments._

### STATUS_DZMZN8

Selektive Drehzahl Zylinder 8

_No arguments._

### STATUS_EDMRSTCD

Restart Code

_No arguments._

### STATUS_FBMBSTZ_UB

UB Betriebsstunden

_No arguments._

### STATUS_FBMSDIAL

Anforderung Diagnoselampe aus Fehlerbehandlung (0:Aus,1:Ein,2:Blinken)

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

### STATUS_FGMFGAKT

aktuelle Geschwindigkeit

_No arguments._

### STATUS_LDMADF

aktueller Atmosphaerendruck

_No arguments._

### STATUS_MRMCASE_A

ARD Zustand-Bits der aktiven Ruckeldaempfung

_No arguments._

### STATUS_MRMCASE_L

LLR Zustand-Bits der Leerlaufregelung

_No arguments._

### STATUS_MRMKM_AKT

aktueller KM-Stand von Kombiinstrument

_No arguments._

### STATUS_MRMLLRIANT

M_E Menge aus I-Anteil des PI-Leerlaufreglers

_No arguments._

### STATUS_MRMLLRPANT

M_E Menge aus P-Anteil des PI-Leerlaufreglers

_No arguments._

### STATUS_MRMM_EAKT

M_E Aktuelle Einspritzmenge (ohne ARD)

_No arguments._

### STATUS_MRMM_EARD

M_E Menge ARD - Gesamt vor Begrenzung

_No arguments._

### STATUS_MRMM_EDELB

M_E begrenzte Abgleichmenge

_No arguments._

### STATUS_MRMM_EFAHR

M_E Fahrmenge nach Laufruheregler

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

### STATUS_MRMM_ESTAR

M_E resultierender Startmengen-Sollwert

_No arguments._

### STATUS_MRMM_EWUN

M_E Fahrerwunschmenge nach externem Mengeneingriff

_No arguments._

### STATUS_MRMN_LLBAS

N Leerlaufsolldrehzahl

_No arguments._

### STATUS_MRMN_LLDIA

N Leerlaufsolldrehzahl fuer Diagnose

_No arguments._

### STATUS_MRMSTATUS

Status Motorbetriebsphase

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

### STATUS_MROM_ARDSR

M_E Menge ARD - Stoerregler

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

Ansteuerdauer Nacheinspritzung Abgastrakt 1

_No arguments._

### STATUS_ZUOAB_VE1

Ansteuerbeginn Voreinspritzung 1

_No arguments._

### STATUS_ZUOAD_HE

Ansteuerdauer Haupteinspritzung

_No arguments._

### STATUS_ZUOAD_VE1

Ansteuerdauer Voreinspritzung 1

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

### STATUS_AN_LUFTTEMPERATUR2

LTF2 Lufttemperatur 2

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

### STATUS_RAILDRUCK

KDF Raildruck

_No arguments._

### STATUS_UBATT

UBT Batteriespannung

_No arguments._

### STATUS_VORFOERDERDRUCK

VDF Vorfoerderdruck

_No arguments._

### STATUS_LMM_MASSE

LMM Luftmasse 2

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

LTF2 Lufttemperatur 2

_No arguments._

## Tables

### BETRIEBSWTAB

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
| zhmUM_ZA | B813F1042C100000 | 06 | 2 | 0x2F14 | 06 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zhmUM_ZA | Umdrehungszaehler (1 Tick = 2 Umdrehungen) |
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
| anmWTF | B813F1042C100000 | 06 | 2 | 0x0F00 | 06 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | MOTORTEMPERATUR | WTF Wassertemperatur |
| anmKDF | B813F1042C100000 | 06 | 2 | 0x2FFC | 06 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | RAILDRUCK | KDF Raildruck |
| anmUBT | B813F1042C100000 | 06 | 2 | 0x0F65 | 06 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | UBATT | UBT Batteriespannung |
| anmVDF | B813F1042C100000 | 06 | 2 | 0x1F06 | 06 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | VORFOERDERDRUCK | VDF Vorfoerderdruck |

### FORTTEXTE

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

### FARTMATRIX

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

### FARTTEXTE

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
| 0x16 | unbekannte Umweltbedingung | ---- | 1 | 0,0 |

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
