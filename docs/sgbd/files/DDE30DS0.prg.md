# DDE30DS0.prg

## General

|  |  |
| --- | --- |
| File | DDE30DS0.prg |
| Type | PRG |
| Jobs | 177 |
| Tables | 9 |
| Origin | BMW TI-433 Schiefer |
| Revision | 1.36 |
| Author | BMW TP-421 Weber, BMW TI-433 Schiefer, ZM-E-31 Lexmueller, BMW TI-433 Schaller |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DDE 3.0 fuer M47 |  |  |
| ORIGIN | string | BMW TI-433 Schiefer |  |  |
| REVISION | string | 1.36 |  |  |
| AUTHOR | string | BMW TP-421 Weber, BMW TI-433 Schiefer, ZM-E-31 Lexmueller, BMW TI-433 Schaller |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### EDIC_RESET

EDIC-Reset

_No arguments._

### initialisierung

Default Init-Job

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Ident-Daten fuer DME

_No arguments._

### EEPROM_LESEN

Beliebige EPROM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| EEPROM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| EEPROM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### SEED_KEY

Schutzmechanismus SEED_KEY

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

_No arguments._

### IDENT_AIF

Ident und AIF zusammen lesen

_No arguments._

### CODIER_VARIANTE_LESEN

Auslesen des Varianten - Steuerwort

_No arguments._

### STATUS_CODIER_CHECKSUMME

Codier - Checksumme abfragen

_No arguments._

### FS_QUICK_LESEN

Auslesen des QUICK Fehlerspeichers

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### FS_SHADOW_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### STATUS_MW2

Messwerte (einzelne RAM - Zellen) auslesen

_No arguments._

### STATUS_MW3

Messwerte (einzelne RAM - Zellen) auslesen

_No arguments._

### STATUS_MW4

Messwerte (einzelne RAM - Zellen) auslesen

_No arguments._

### STATUS_MW5

Messwerte (einzelne RAM - Zellen) auslesen

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

### STATUS_DIGITAL4

Status Schalteingaenge

_No arguments._

### STEUERN_CHECK_ZUHEIZER

_No description._

_No arguments._

### STEUERN_CHECK_ZUHEIZER_ECOS

_No description._

_No arguments._

### STEUERN_ABLUFTKLAPPE

Abluftklappe ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

### STEUERN_AGR_STELLER

ARF - Steller  ansteuern ,  5-95%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

### STEUERN_GLUEHRELAIS

Gluegrelais ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

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

### STEUERN_KLIMAKOMPRESSOR

ARF-Steller ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 - 100 % |

### STEUERN_EKP

ARF-Steller ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

### STEUERN_SPRITZVERSTELLER

ARF-Steller ansteuern ,  -12.5 Grad KW bis 51,25 Grad KW

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | real | Verstellwert   -12.5 Grad KW bis 51,25 Grad KW |

### DIAGNOSE_ENDE

Loeschen des Fehlerspeichers

_No arguments._

### DIAGNOSE_ERHALTEN

Diagnose erhalten

_No arguments._

### ABGLEICH_LESEN_STARTMENGE

Startmengen-Abgleich lesen

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

BEGR_MENGEn-Abgleich lesen (Rohwert)

_No arguments._

### ABGLEICH_VERSTELLEN_BEGR_MENGE_ROH

BEGR_MENGE Abgleich verstellen (Rohwert)

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

### ABGLEICH_LESEN_LADEDRUCK

LADEDRUCK-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_LADEDRUCK

LADEDRUCK Abgleich verstellen

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_LADEDRUCK_WERT | real | Neuer Verstellwert |

### ABGLEICH_PROG_LADEDRUCK

LADEDRUCK Abgleich programmieren

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
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_11 | real | Neuer Verstellwert 12 |
| ABGLEICH_VERSTELLEN_ABGLEICHMENGE_WERT_12 | real | Neuer Verstellwert |

### ABGLEICH_PROG_ABGLEICHMENGE

LADEDRUCK Abgleich programmieren

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_PROG_ABGLEICHMENGE_CS | int | Zum Programmieren muss die CS aus Abgleichwerte vorgeben mit uebergeben werden |

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

### ABGLEICH_LESEN_FGR_VERBAUT

FGR-Abgleich lesen

_No arguments._

### ABGLEICH_VERSTELLEN_FGR_VERBAUT

FGR-Funktion und Mainswitch konfigurieren

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_FGR_VERBAUT_WERT | int | 1= FGR vorhanden ,  0= FGR nicht vorhanden, |

### ABGLEICH_PROG_FGR

LADEDRUCK Abgleich programmieren

_No arguments._

### ABGLEICH_LESEN_KENNUNG_KLIMAANLAGE

Kennung Klimaanlage lesen: 1 = Kliamaanlage vorhanden,  0 = Klimaanlage nicht vorhanden 0xff = Fehler

_No arguments._

### ABGLEICH_VERSTELLEN_KENNUNG_KLIMAANLAGE

Kennung Klimaanlage verstellen, 0 = nicht verbaut, 1 = verbaut

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_KENNUNG_KLIMAANLAGE_WERT | int | Neuer Verstellwert |

### ABGLEICH_PROG_KENNUNG_KLIMAANLAGE

Kennung Klimaanlage programmieren

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

FGR-Funktion und Mainswitch konfigurieren

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_KIC_VERSTELLEN_PROGRAMMIEREN_WERT | int |  |

### ABGLEICH_TIMER_VERSTELLEN_PROGRAMMIEREN

FGR-Funktion und Mainswitch konfigurieren

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_TIMER_VERSTELLEN_PROGRAMMIEREN_WERT | int |  |

### ABGLEICH_LESEN_PUMPENABGLEICH_FLAG

Kennung M_ABGLEICH_FLAG lesen

_No arguments._

### ABGLEICH_VERSTELLEN_PUMPENABGLEICH_FLAG

Kennung M_ABGLEICH_FLAG verstellen, 0 = nicht verbaut, 0xff = verbaut

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_VERSTELLEN_PUMPENABGLEICH_FLAG_WERT | int | Neuer Verstellwert |

### ABGLEICH_PROG_PUMPENABGLEICH_FLAG

Kennung M_ABGLEICH_FLAG programmieren

_No arguments._

### STEUERN_SYNC_MODE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| MODE | int |  |

### STATUS_SYNC_MODE

_No description._

_No arguments._

### HOLE_EMA_FELD

_No description._

_No arguments._

### STATUS_PHI_SV_IST

Spritzverstellerwinkel Pumpe

_No arguments._

### STATUS_TV_SV

Tastverhaeltnis Spritzversteller Pumpe

_No arguments._

### STATUS_T_MV_ON

Einschaltzeitpunkt fuer Mengenmagnetventil

_No arguments._

### STATUS_T_MV_OFF

Ausschaltzeitpunkt fuer Mengenmagnetventil

_No arguments._

### STATUS_SV_SOLL

Spritzversteller - Sollwinkel

_No arguments._

### STATUS_AE_IWZ

Ansteuerende

_No arguments._

### STATUS_AB_IWZ

Ansteuerbeginn

_No arguments._

### STATUS_ME_SOLL

Sollmenge - Eingang aus MSG

_No arguments._

### STATUS_FB_SOLL

Foerderbeginn Nockenwellen-Sollwinkel

_No arguments._

### STATUS_D_AD_TK_N

Dyn. TKR-Kompensation

_No arguments._

### STATUS_D_AD_NW_N

Dyn. Ansteuerdauerkorrektur

_No arguments._

### STATUS_ATMOSPHAERENDRUCK

ADF Atmosphaerendruck ANMADF

_No arguments._

### STATUS_LADEDRUCK

LDF Lade- / Saugrohr-Druck ANMLDF

_No arguments._

### STATUS_LMM_MASSE

LMM  Analogwert Luftmassenmesser HFM ANMLMM

_No arguments._

### STATUS_PWG_FAHRERWUNSCH_UNGEF

PWG Pedalwertgeber  - Position (ungefiltert) ANMPWG

_No arguments._

### STATUS_PWG_WINKEL

_No description._

_No arguments._

### STATUS_UBATT

UBT Batteriespannung ANMUBATT

_No arguments._

### STATUS_UREF

URF Referenzspannung ANMU_REF

_No arguments._

### STATUS_MOTORTEMPERATUR

WTF Wassertemperatur ANMWTF

_No arguments._

### STATUS_PWG_FAHRERWUNSCH_V

PWG Rohwert Pedalwertgeber ANOU_PWG

_No arguments._

### STATUS_LAST

M_L aktuelle Luftmasse ARMM_LIST

_No arguments._

### STATUS_ARF_SOLLWERT

M_L Sollwert fuer ARF-Regelung ARMM_LSOLL

_No arguments._

### STATUS_DIMDIGPREL_LOW

Entprellte logische Zustaende d. digit. Eingaenge DIMDIGPREL_L

_No arguments._

### STATUS_DIMDIGPREL_HIGH

Entprellte logische Zustaende d. digit. Eingaenge high DIMDIGPREL_H

_No arguments._

### STATUS_MOTORDREHZAHL

N Drehzahl (einfach gemittelt) DZMNMIT

_No arguments._

### STATUS_ABLUFTKLAPPE_TV

TV Ansteuerung Abluftlappensteuerung EHMFAKS

_No arguments._

### STATUS_ARF_STELLER_TV

TV Ansteuerung ARF-Steller EHMFARS

_No arguments._

### STATUS_LADEDRUCKSTELLER_TV

TV Ansteuerung Ladedrucksteller EHMFLD_DK

_No arguments._

### STATUS_E_LUEFTER_TV

TV Ansteuerung El.Motorluefter EHMFMLS

_No arguments._

### STATUS_V_ZU_N

V/N aktuelles Verhaeltnis Geschwindigkeit/Drehzahl FGM_VZUN

_No arguments._

### STATUS_BESCHLEUNIGUNG

Beschleunigung FGMBESCH

_No arguments._

### STATUS_GESCHWINDIGKEIT

V aktuelle Geschwindigkeit FGMFGAKT

_No arguments._

### STATUS_MSR_EINGRIFF

M_E externer Momenteneingriff MSR MRMM_EXMSR

_No arguments._

### STATUS_EINSPRITZMENGE

M_E Aktuelle Einspritzmenge (ohne ARD) MRMM_EAKT

_No arguments._

### STATUS_BEGRENZUNGSMENGE

M_E resultierende Begrenzungsmenge MRMM_EBEGR

_No arguments._

### STATUS_WUNSCHMENGE_FGR

M_E Wunschmenge aus FGR MRMM_EFGR

_No arguments._

### STATUS_EINSPRITZMENGE_LLR

M_E Menge aus Leerlaufreglung MRMM_ELLR

_No arguments._

### STATUS_EINSPRITZMENGE_ARD

M_E Einspritzmenge nach ARD MRMM_EMOT

_No arguments._

### STATUS_WUNSCHMENGE_PWG

M_E Wunschmenge = f(PWG) aus Fahrverhaltenkennfeld MRMM_EPWG

_No arguments._

### STATUS_STARTMENGE_SOLLWERT

M_E resultierender Startmengen-Sollwert MRMM_ESTAR

_No arguments._

### STATUS_FAHRERWUNSCHMENGE_N_EX_EINGRIFF

M_E Fahrerwunschmenge nach externem Mengeneingriff MRMM_EWUN

_No arguments._

### STATUS_FAHRERWUNSCHMENGE_PWG_FGR

M_E Fahrerwunschmenge aus PWG oder FGR MRMM_EWUNF

_No arguments._

### STATUS_MOTORDREHZAHL_SOLL

N Leerlaufsolldrehzahl MRMN_LLBAS

_No arguments._

### STATUS_PWG_FAHRERWUNSCH

PWG gefilterte Pedalwertgeber-Position MRMPWGFI

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

_No description._

_No arguments._

### STATUS_GESCHWINDIGKEIT_SOLLWERT

V Sollwert Fahrgeschwindigkeit fuer Diagnose MRMFG_SOLL

_No arguments._

### STATUS_MOTORDREHZAHL_SEK

N Drehzahl aus Sekundaergeber DZMN_SEK

_No arguments._

### STATUS_LADEDRUCK_KORR

P_L T_L-abhaengig korregierter Ladedruck ARMPKORR

_No arguments._

### STATUS_LADEDRUCK_SOLLWERT

P_L Sollwert fuer Ladedruck LDMP_LSOLL

_No arguments._

### STATUS_SB_SOLLWERT

SB Spritzbeginn-Sollwert SBMPHISOLL

_No arguments._

### STATUS_SB_ISTWERT

SB Spritzbeginn-Istwert SBMPHIIST

_No arguments._

### STATUS_WTF_SGR

T_W Wassertemperatur fuer SBR SBMWTF

_No arguments._

### STATUS_FB_KW_SW

FB-KW-Sollwinkel FNMFBKWSW

_No arguments._

### STATUS_FB_NW_SW

FB-NW-Sollwinkel FNMFBNWSW

_No arguments._

### STATUS_PI_REGLER

SBR: PI-Regler-Ausgangswert SBONAPI

_No arguments._

### STATUS_SIGNAL_NBF

U_NBF Spannungssignal aus NBF ANMST_NBF

_No arguments._

### STATUS_STARTMENGEN_AGL

M_E Abgleichwert fuer Startmengenkorrektur MRMSTA_AGL

_No arguments._

### STATUS_BEGRENZUNGSMENGE_AGL_FAKTOR

F_ME Abgleichfaktor fuer Begrenzungsmenge MRMBEG_AGL

_No arguments._

### STATUS_UMSCH_BEG_K

Ext. Umschaltung auf Begrenzungs-Kl. MRMBM_EAKT

_No arguments._

### STATUS_PUMPENMENGE_UNKOR

Pumpenmenge unkorregiert MRMM_EFAHR

_No arguments._

### STATUS_DUESENMENGE_KOR

Duesenkorrekturmenge MRMM_EKORR

_No arguments._

### STATUS_SOLLMENGE_VOR_UEB

M_E Soll-Menge vor Ueberwachung MRMM_EPUMP

_No arguments._

### STATUS_SOLLMENGE_AN_PSG

M_E Soll-Menge an PSG MRMM_ESOLL

_No arguments._

### STATUS_ME_KOR_ABW

Mengenkorrekturkennfeld.Abweichung MRMMK_KL

_No arguments._

### STATUS_DREHZAHLANHEBUNG_KO

Anhebung der Leerlaufdrehzahl bei Klimakompressor ein KLMN_LLKLM

_No arguments._

### STATUS_DREHZAHL_PSG

Drehzahl NW-bezogen (PSG-Drehzahl) PKMDZNW

_No arguments._

### STATUS_TEMPERATUR_PUMPE

Pumpentemperatur PKMT_PUMP

_No arguments._

### STATUS_PSG_STATUSWORT

PSG Statuswort PKMPSGSTA

_No arguments._

### STATUS_PSG_SELBSTTEST

PSG Selbsttestergebnis PKMPSG_ST

_No arguments._

### STATUS_ANSTEUERDAUER_MV

Ansteuerdauer MV-Endstufe PKMADAUER

_No arguments._

### STATUS_TIMEOUT_CAN

n-Timeoutzaehler fuer Senden CAN zeitsync. PKMTOCNT

_No arguments._

### STATUS_KD_ANT_1

Kundendienst-Antwort 1 PKMKDANT_1

_No arguments._

### STATUS_KD_ANT_2

Kundendienst-Antwort 2 PKMKDANT_2

_No arguments._

### STATUS_KD_ANT_3

Kundendienst-Antwort 3 PKMKDANT_3

_No arguments._

### STATUS_KD_ANT_4

Kundendienst-Antwort 4 PKMKDANT_4

_No arguments._

### STATUS_ANST_GLUEHREL_TV

TV Ansteuerung Gluehrelaissteller EHMFGRS

_No arguments._

### STATUS_ANST_VOR_PUMPE_TV

TV Ansteuerung - Vorfoerderpumpe EHMFVFP

_No arguments._

### STATUS_ANST_GLUEHANZ_TV

TV Anteuerung Gluehanzeige EHMFGAZ

_No arguments._

### STATUS_ANST_DIG_LAMPE_TV

TV Ansteuerung Diagnoselampe EHMFDIA

_No arguments._

### STATUS_ANST_KO_TV

TV Ansteuerung Klimakompressor EHMFSKOREL

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### STATUS_PWG_ANSCHLAG_MAX

Auslesen des oberen Gaspedalanschlags

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### STATUS_REIBMENGE_N_KL_L_KOMP

Reibmenge nach Klimalastmomentkompensation MROM_ERBK

_No arguments._

### STEUERN_TESTPLATZ

Freischaltung fuer SG-Befundung ansteuern

_No arguments._

### ECU_CONFIG

Ident-Daten fuer DME

_No arguments._

### STATUS_BETR_STUNDENZAEHLER

UB akt. Betriebsstundenzaehler FBMBSTZ_UB

_No arguments._

### MWBLOCK_ROH

Messwerteblock roh ausgeben

_No arguments._

### MW_SELECT_LESEN

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### PRUEFCODE_LESEN

Indentifikation, AIF, FS_Codes ShadowFS_Codes, ShadowFS_lang

_No arguments._

### MW_SELECT_LESEN_NORM

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### STEUERN_ENDE_SELECTIV

Steller Steuern selektiv ausschalten

| Name | Type | Description |
| --- | --- | --- |
| STELLERMESSAGENR | binary |  |

### STATUS_DIMDIG_2

MFL und CAN Digitaleingaenge DIMDIG_2

_No arguments._

### STATUS_MENGE_VE

Voreinspritzmenge MRMM_E_VE

_No arguments._

### STATUS_ANST_MOTORLAGER_TV

TV Ansteuerung - Motorlager EHMFDSL

_No arguments._

### STATUS_ANST_KUEHLWASSERHEIZUNG_TV

TV Ansteuerung Kuehlwasserheizung EHMFKWH

_No arguments._

### STATUS_KWH_AB

Abbruchbedingungen Kuehlwasserheizung KHONOR_AB

_No arguments._

### STATUS_MRMM_EDELB

M_E begrenzte Abgleichmenge MRMM_EDELB

_No arguments._

### STATUS_COMGTR_OPT

Identifikation Handschalter/Automatik COMGTR_OPT

_No arguments._

### MW_SELECT_LESEN_NORM_EINZEL

Messwerteblock selectiv lesen

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Telegrammaufbau MSG - Nr |

### STEUERN_MOTORLAGER

MOTORLAGER ansteuern ,  0 oder 100%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 0 oder 100 % |

### STEUERN_KUEHLWASSERHEIZUNG

KUEHLWASSERHEIZUNG ansteuern ,  5-95%

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Verstellwert 5 - 95 % |

## Tables

### BETRIEBSWTAB

| NAME | TELEGRAM | POS_ADR | ADR | LEN_ADR | BYTE | DATA_TYPE | COMPU_TYPE | FACT_A | FACT_B | MASK | VALUE | ANZ | MEAS | RANGE | JOBNAME | LNAME |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| anmADF | 12070B100F63 | 04 | 0x0F63 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | hPa |   | ATMOSPHAERENDRUCK | ADF Atmosphaerendruck |
| anmLDF | 12070B100F62 | 04 | 0x0F62 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | hPa |   | LADEDRUCK | LDF Lade- / Saugrohr-Druck |
| anmLMM | 12070B100F61 | 04 | 0x0F61 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | LMM_MASSE | LMM  Analogwert Luftmassenmesser HFM |
| anmPWG | 12070B100F60 | 04 | 0x0F60 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | PWG_FAHRERWUNSCH_UNGEF | PWG Pedalwertgeber  - Position (ungefiltert) |
| anmUBATT | 12070B100F65 | 04 | 0x0F65 | 0x00 | 05 | 5 | -- | 0,02037243 | 0 | 0x00 | 0x00 | 6.2f | V |   | UBATT | UBT Batteriespannung |
| anmU_REF | 12070B100F93 | 04 | 0x0F93 | 0x00 | 05 | 5 | -- | 4,88759 | 0 | 0x00 | 0x00 | 6.2f | mV |   | UREF | URF Referenzspannung |
| anmWTF | 12070B100F00 | 04 | 0x0F00 | 0x00 | 05 | 5 | -- | 0,1 | -273,14 | 0x00 | 0x00 | 6.2f | Grad C |   | MOTORTEMPERATUR | WTF Wassertemperatur |
| anoU_PWG | 12070B100F67 | 04 | 0x0F67 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mV |   | PWG_FAHRERWUNSCH_V | PWG Rohwert Pedalwertgeber |
| anoU_PWG1 | 12070B100F67 | 04 | 0x0F67 | 0x00 | 05 | 5 | -- | 0,001 | 0 | 0x00 | 0x00 | 6.2f | V |   | PWG_FAHRERWUNSCH_V | PWG Rohwert Pedalwertgeber |
| armM_List | 12070B100F30 | 04 | 0x0F30 | 0x00 | 05 | 5 | -- | 0,1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft |   | LAST | M_L aktuelle Luftmasse |
| armM_Lsoll | 12070B100F32 | 04 | 0x0F32 | 0x00 | 05 | 5 | -- | 0,1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft |   | ARF_SOLLWERT | M_L Sollwert fuer ARF-Regelung |
| dimDIGprel_l | 12070B100F70 | 04 | 0x0F70 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | DIMDIGPREL_LOW | Entprellte logische Zustaende d. digit. Eingaenge |
| dimDIGprel_h | 12070B100F71 | 04 | 0x0F71 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | DIMDIGPREL_HIGH | Entprellte logische Zustaende d. digit. Eingaenge high |
| dzmNmit | 12070B100F10 | 04 | 0x0F10 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min |   | MOTORDREHZAHL | N Drehzahl (einfach gemittelt) |
| ehmFAKS | 12070B100E9A | 04 | 0x0E9A | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | ABLUFTKLAPPE_TV | TV Ansteuerung Abluftlappensteuerung |
| ehmFARS | 12070B100E80 | 04 | 0x0E80 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | ARF_STELLER_TV | TV Ansteuerung ARF-Steller |
| ehmFLD_DK | 12070B100E81 | 04 | 0x0E81 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | LADEDRUCKSTELLER_TV | TV Ansteuerung Ladedrucksteller |
| ehmFMLS | 12070B100E98 | 04 | 0x0E98 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | E_LUEFTER_TV | TV Ansteuerung El.Motorluefter |
| fgm_VzuN | 12070B100F0B | 04 | 0x0F0B | 0x00 | 05 | 5 | -- | 0,00004 | 0 | 0x00 | 0x00 | 6.2f | (km/h)/(1/min) |   | V_ZU_N | V/N aktuelles Verhaeltnis Geschwindigkeit/Drehzahl |
| fgmBESCH | 12070B100F0A | 04 | 0x0F0A | 0x00 | 05 | 7 | -- | 0,08477 | 0 | 0x00 | 0x00 | 6.2f | m/s^2 |   | BESCHLEUNIGUNG | Beschleunigung |
| fgmFGAKT | 12070B100F08 | 04 | 0x0F08 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | km/h |   | GESCHWINDIGKEIT | V aktuelle Geschwindigkeit |
| ldmADF | 12070B100F41 | 04 | 0x0F41 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | hPa |   | ATMOSPHAERENDRUCK_?? | P_ADF aktueller Atmosphaerendruck (aus ADF oder LDF) |
| ldmP_Llin | 12070B100F40 | 04 | 0x0F40 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | hPa |   | LADEDRUCK_?? | P_L aktueller Ladedruck (gefiltert) / Luftdruck |
| mrmM_EXMSR | 12070B100F89 | 04 | 0x0F89 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | MSR_EINGRIFF | M_E externer Momenteneingriff MSR |
| mrmM_EAKT | 12070B100F80 | 04 | 0x0F80 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | EINSPRITZMENGE | M_E Aktuelle Einspritzmenge (ohne ARD) |
| mrmM_EBEGR | 12070B100F8A | 04 | 0x0F8A | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | BEGRENZUNGSMENGE | M_E resultierende Begrenzungsmenge |
| mrmM_EFGR | 12070B100F85 | 04 | 0x0F85 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | WUNSCHMENGE_FGR | M_E Wunschmenge aus FGR |
| mrmM_ELLR | 12070B100F8D | 04 | 0x0F8D | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | EINSPRITZMENGE_LLR | M_E Menge aus Leerlaufreglung |
| mrmM_EMOT | 12070B100F8C | 04 | 0x0F8C | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | EINSPRITZMENGE_ARD | M_E Einspritzmenge nach ARD |
| mrmM_EPWG | 12070B100F84 | 04 | 0x0F84 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | WUNSCHMENGE_PWG | M_E Wunschmenge = f(PWG) aus Fahrverhaltenkennfeld |
| mrmM_ESTAR | 12070B100F82 | 04 | 0x0F82 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | STARTMENGE_SOLLWERT | M_E resultierender Startmengen-Sollwert |
| mrmM_EWUN | 12070B100F8B | 04 | 0x0F8B | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | FAHRERWUNSCHMENGE_N_EX_EINGRIFF | M_E Fahrerwunschmenge nach externem Mengeneingriff |
| mrmM_EWUNF | 12070B100F86 | 04 | 0x0F86 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | FAHRERWUNSCHMENGE_PWG_FGR | M_E Fahrerwunschmenge aus PWG oder FGR |
| mrmN_LLBAS | 12070B100E02 | 04 | 0x0E02 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min |   | MOTORDREHZAHL_SOLL | N Leerlaufsolldrehzahl |
| mrmPWGfi | 12070B100F83 | 04 | 0x0F83 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | PWG_FAHRERWUNSCH | PWG gefilterte Pedalwertgeber-Position |
| mrmFG_SOLL | 12070B100F09 | 04 | 0x0F09 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | km/h |   | GESCHWINDIGKEIT_SOLLWERT | V Sollwert Fahrgeschwindigkeit fuer Diagnose |
| dzmN_SEK | 12070B100F11 | 04 | 0x0F11 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min |   | MOTORDREHZAHL_SEK | N Drehzahl aus Sekundaergeber |
| armPkorr | 12070B100F33 | 04 | 0x0F33 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | hPa |   | LADEDRUCK_KORR | P_L T_L-abhaengig korregierter Ladedruck |
| ldmP_Lsoll | 12070B100F34 | 04 | 0x0F34 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | hPa |   | LADEDRUCK_SOLLWERT | P_L Sollwert fuer Ladedruck |
| sbmPHIsoll | 12070B100F52 | 04 | 0x0F52 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | SB_SOLLWERT | SB Spritzbeginn-Sollwert |
| sbmPHIist | 12070B100F53 | 04 | 0x0F53 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | SB_ISTWERT | SB Spritzbeginn-Istwert |
| sbmWTF | 12070B100F54 | 04 | 0x0F54 | 0x00 | 05 | 5 | -- | 0,1 | -273,14 | 0x00 | 0x00 | 6.2f | Grad C |   | WTF_SGR | T_W Wassertemperatur fuer SBR |
| fnmFBKWSW | 12070B100F55 | 04 | 0x0F55 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | FB_KW_SW | FB-KW-Sollwinkel |
| fnmFBNWSW | 12070B100F56 | 04 | 0x0F56 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | Grad NW |   | FB_NW_SW | FB-NW-Sollwinkel |
| sboNAPI | 12070B100F57 | 04 | 0x0F57 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | PI_REGLER | SBR: PI-Regler-Ausgangswert |
| anmST_NBF | 12070B100F66 | 04 | 0x0F66 | 0x00 | 05 | 5 | -- | 53,37248 | 0 | 0x00 | 0x00 | 6.2f | mV |   | SIGNAL_NBF | U_NBF Spannungssignal aus NBF |
| mrmSTA_AGL | 12070B100F94 | 04 | 0x0F94 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | STARTMENGEN_AGL | M_E Abgleichwert fuer Startmengenkorrektur |
| mrmBEG_AGL | 12070B100F95 | 04 | 0x0F95 | 0x00 | 05 | 5 | -- | 0,0001 | 0 | 0x00 | 0x00 | 6.2f | - |   | BEGRENZUNGSMENGE_AGL_FAKTOR | F_ME Abgleichfaktor fuer Begrenzungsmenge |
| mrmBM_EAKT | 12070B100F96 | 04 | 0x0F96 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | UMSCH_BEG_K | Ext. Umschaltung auf Begrenzungs-Kl. |
| mrmM_EFAHR | 12070B100F97 | 04 | 0x0F97 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | PUMPENMENGE_UNKOR | Pumpenmenge unkorregiert |
| mrmM_EKORR | 12070B100F98 | 04 | 0x0F98 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | DUESENMENGE_KOR | Duesenkorrekturmenge |
| mrmM_EPUMP | 12070B100F99 | 04 | 0x0F99 | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | SOLLMENGE_VOR_UEB | M_E Soll-Menge vor Ueberwachung |
| mrmM_ESOLL | 12070B100F9A | 04 | 0x0F9A | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | SOLLMENGE_AN_PSG | M_E Soll-Menge an PSG |
| mrmMK_KL | 12070B100F9B | 04 | 0x0F9B | 0x00 | 05 | 5 | -- | 0,00391 | 0 | 0x00 | 0x00 | 6.2f | - |   | ME_KOR_ABW | Mengenkorrekturkennfeld.Abweichung |
| klmN_LLKLM | 12070B100E05 | 04 | 0x0E05 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min |   | DREHZAHLANHEBUNG_KO | Anhebung der Leerlaufdrehzahl bei Klimakompressor ein |
| pkmDZNW | 12070B100E10 | 04 | 0x0E10 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min NW |   | DREHZAHL_PSG | Drehzahl NW-bezogen (PSG-Drehzahl) |
| pkmT_PUMP | 12070B100E11 | 04 | 0x0E10 | 0x00 | 05 | 5 | -- | 0,1 | -273,14 | 0x00 | 0x00 | 6.2f | Grad C |   | TEMPERATUR_PUMPE | Pumpentemperatur |
| pkmPSGSTA | 12070B100E12 | 04 | 0x0E12 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | PSG_STATUSWORT | PSG Statuswort |
| pkmPSG_ST | 12070B100E13 | 04 | 0x0E13 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | PSG_SELBSTTEST | PSG Selbsttestergebnis |
| pkmADAUER | 12070B100E14 | 04 | 0x0E14 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | Grad NW |   | ANSTEUERDAUER_MV | Ansteuerdauer MV-Endstufe |
| pkmTOCNT | 12070B100E15 | 04 | 0x0E16 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | KD_ANT_1 | Kundendienst-Antwort 1 |
| pkmKDANT_2 | 12070B100E17 | 04 | 0x0E17 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | KD_ANT_2 | Kundendienst-Antwort 2 |
| pkmKDANT_3 | 12070B100E18 | 04 | 0x0E18 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | KD_ANT_3 | Kundendienst-Antwort 3 |
| pkmKDANT_4 | 12070B100E19 | 04 | 0x0E19 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | KD_ANT_4 | Kundendienst-Antwort 4 |
| ehmFGRS | 12070B100E87 | 04 | 0x0E87 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | ANST_GLUEHREL_TV | TV Ansteuerung Gluehrelaissteller |
| ehmFVFP | 12070B100E91 | 04 | 0x0E91 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | ANST_VOR_PUMPE_TV | TV Ansteuerung - Vorfoerderpumpe |
| ehmFGAZ | 12070B100E94 | 04 | 0x0E94 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | ANST_GLUEHANZ_TV | TV Anteuerung Gluehanzeige |
| ehmFDIA | 12070B100E96 | 04 | 0x0E96 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | ANST_DIG_LAMPE_TV | TV Ansteuerung Diagnoselampe |
| ehmFSKOREL | 12070B100E99 | 04 | 0x0E99 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | ANST_KO_TV | TV Ansteuerung Klimakompressor |
| mroM_ERBK | 12070B100ECB | 04 | 0x0ECB | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | REIBMENGE_N_KL_L_KOMP | Reibmenge nach Klimalastmomentkompensation |
| fbmBSTZ_UB | 12070B10FFFE | 04 | 0xFFFE | 0x00 | 05 | 5 | -- | 0,1 | 0 | 0x00 | 0x00 | 6.2f | h |   | BETR_STUNDENZAEHLER | UB akt. Betriebsstundenzaehler |
| dimDIG_2 | 12070B100F72 | 04 | 0x0F72 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | DIMDIG_2 | MFL und CAN Digitaleingaenge |
| mrmM_E_VE | 12070B100F9C | 04 | 0x0F9C | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | MENGE_VE | M_E Voreinspritzmenge |
| ehmFDSL | 12070B100E93 | 04 | 0x0E93 | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | ANST_MOTORLAGER_TV | TV Ansteuerung - Motorlager |
| ehmFKWH | 12070B100E9B | 04 | 0x0E9B | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | ANST_KUEHLWASSERHEIZUNG_TV | TV Ansteuerung - Kuehlwasserheizung |
| khoNOR_AB | 12070B100FB7 | 04 | 0x0FB7 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | KWH_AB | Abbruchbedingungen Kuehlwasserheizung |
| mrmM_EDELB | 12070B101F8E | 04 | 0x1F8E | 0x00 | 05 | 7 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub |   | MRMM_EDELB | M_E begrenzte Abgleichmenge |
| comGTR_opt | 12070B101C00 | 04 | 0x1C00 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | COMGTR_OPT | Identifikation Handschalter/Automatik |
| mroFGR_ABN | 12070B10DF08 | 04 | 0xDF08 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | MROFGR_ABN | FGR Abschalt-Bedingungen |
| khoGENLAST | 12070B100ECC | 04 | 0x0ECC | 0x00 | 05 | 5 | -- | 0,01 | 0 | 0x00 | 0x00 | 6.2f | % |   | KHOGENLAST | Generatorlast |
| aroREG_2 | 12070B100EE0 | 04 | 0x0EE0 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | AROREG_2 | AGR-Status  Regelung / Steuerung / Abschaltung |
| ldoRG_BER | 12070B100F45 | 04 | 0x0F45 | 0x00 | 05 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - |   | LDORG_BER | Status Ladedruckregelung |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| S_PWGL | 0 | 0x01 | 0x01 |
| S_BRL | 1 | 0x80 | 0x80 |
| S_BRT | 0 | 0x10 | 0x10 |
| S_PN | 1 | 0x40 | 0x40 |
| S_DIA | 0 | 0x40 | 0x40 |
| S_AC | 2 | 0x01 | 0x01 |
| S_KO | 2 | 0x02 | 0x02 |
| S_MFLAUS | 3 | 0x20 | 0x20 |
| S_MFLTGL | 3 | 0x80 | 0x80 |
| S_MFLEINP | 3 | 0x12 | 0x12 |
| S_MFLEINM | 3 | 0x40 | 0x40 |
| S_MFLWA | 3 | 0x09 | 0x09 |

### FORTTEXTE

| ORT | ORTTEXT | UW_1 | UW_2 |
| --- | --- | --- | --- |
| 0x00 | -- | 0x00 | 0x00 |
| 0x01 | Mengensteller (wird z. Zt. nicht verwendet) | 0x01 | 0x02 |
| 0x03 | Elektrisches Abschaltventil ELAB (wird z. Zt. nicht verwendet) | 0x01 | 0x03 |
| 0x05 | Nadelbewegungsfuehler | 0x02 | 0x07 |
| 0x06 | Abgasrueckfuehr-Regelung | 0x02 | 0x07 |
| 0x08 | Gluehanlage | 0x02 | 0x07 |
| 0x0A | Regelung Spritzbeginn | 0x02 | 0x01 |
| 0x10 | Versorgungsspannung | 0x02 | 0x07 |
| 0x11 | Steuergeraet DDE (U_REF 2.5V) | 0x02 | 0x08 |
| 0x12 | Klemme 15 | 0x02 | 0x08 |
| 0x13 | DDE-Hauptrelais | 0x02 | 0x08 |
| 0x1A | Bremslicht / Bremstestschalter | 0x02 | 0x07 |
| 0x1B | Kuehlmittelheizung | 0x02 | 0x08 |
| 0x1C | Kupplungsschalter | 0x02 | 0x07 |
| 0x1D | Fahrgeschwindigkeitssignal | 0x02 | 0x07 |
| 0x20 | Bedienteil Fahrgeschwindigkeitsregelung | 0x02 | 0x07 |
| 0x23 | Fuehler Kraftstofftemperatur (in Einspritzpumpe verbaut) | 0x02 | 0x01 |
| 0x24 | Temperaturfuehler Motoroel (wird z. Zt. nicht verwendet) | 0x02 | 0x04 |
| 0x25 | Pedalwertgeber | 0x02 | 0x07 |
| 0x26 | Luftmassenmesser | 0x02 | 0x07 |
| 0x2D | Elektronische Wegfahrsperre (EWS) | 0x08 | 0x09 |
| 0x2E | Drehzahlgeber Einspritzpumpe (in Pumpe, nicht extra zu tauschen) | 0x02 | 0x06 |
| 0x2F | Drehzahlgeber Kurbelwelle | 0x03 | 0x07 |
| 0x34 | Fuehler Lufttemperatur (wird z. Zt. nicht verwendet) | 0x02 | 0x04 |
| 0x35 | Fuehler Motorkuehlmitteltemperatur | 0x02 | 0x06 |
| 0x36 | Ladedruckfuehler | 0x02 | 0x01 |
| 0x40 | Steuergeraet DDE (Microcontroller) | 0x02 | 0x07 |
| 0x41 | Einspritzpumpe Magnet-Abschalt-Ventil (MAB) | 0x02 | 0x06 |
| 0x42 | Steuergeraet DDE (EEPROM und Konfiguration) | 0x02 | 0x07 |
| 0x43 | Steuergeraet Einspritzpumpe | 0x02 | 0x06 |
| 0x44 | Magnetventil Einspritzmenge | 0x02 | 0x06 |
| 0x45 | Steuergeraet DDE (CAN-Controller) | 0x02 | 0x08 |
| 0x46 | Steuergeraet Einspritzpumpe (Kommunikation) | 0x02 | 0x06 |
| 0x47 | Synchronitaet der Drehzahlgeber | 0x02 | 0x06 |
| 0x48 | Spritzversteller-Regelung | 0x02 | 0x01 |
| 0x49 | Drehzahlgeber Einspritzpumpe (IWZ-System) | 0x02 | 0x06 |
| 0x50 | Motorlagersteuerung | 0x02 | 0x07 |
| 0x52 | Elektroluefter | 0x08 | 0x07 |
| 0x56 | Kuehlerjalousie | 0x08 | 0x07 |
| 0x65 | Lader-Regelung | 0x02 | 0x04 |
| 0x6B | Atmosphaerendruckfuehler (im Steuergeraet verbaut) | 0x02 | 0x05 |
| 0x72 | CAN-Bus | 0x02 | 0x08 |
| 0x73 | Kraftstoffvorfoerderpumpe | 0x07 | 0x08 |
| 0x74 | Relais Klimakompressor | 0x07 | 0x08 |
| 0x75 | Generatorlastsignal | 0x02 | 0x08 |
| 0x76 | Tankfuellstandsinfo | 0x02 | 0x08 |
| 0x77 | Umgebungstemperatur | 0x02 | 0x08 |
| 0xXY | unbekannter Fehlerort | 0x00 | 0x00 |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x01 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x03 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x05 | 0x00 | 0x00 | 0x00 | 0x76 | 0x00 | 0x75 | 0x00 | 0x89 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x06 | 0x00 | 0x85 | 0x00 | 0x00 | 0x00 | 0x86 | 0x00 | 0x27 | 0x00 | 0x28 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x08 | 0x00 | 0x83 | 0x00 | 0x00 | 0x00 | 0x84 | 0x00 | 0x32 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x0A | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x81 | 0x00 | 0x82 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x10 | 0x00 | 0x00 | 0x00 | 0x74 | 0x00 | 0x73 | 0x00 | 0x14 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x11 | 0x00 | 0x00 | 0x00 | 0x79 | 0x00 | 0x80 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x12 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x48 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x13 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x37 | 0x00 | 0x00 | 0x00 | 0x38 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x1A | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x33 | 0x00 | 0x00 | 0x00 | 0x34 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x1B | 0x00 | 0x83 | 0x00 | 0x00 | 0x00 | 0x84 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x1C | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x70 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x69 | 0x00 | 0x25 | 0x00 | 0x94 | 0x00 | 0x26 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x20 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x78 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x23 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x57 | 0x00 | 0x58 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x24 | 0x00 | 0x00 | 0x00 | 0x02 | 0x00 | 0x01 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x25 | 0x00 | 0x02 | 0x00 | 0x01 | 0x00 | 0x12 | 0x00 | 0x13 | 0x00 | 0x19 | 0x00 | 0x20 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x26 | 0x00 | 0x00 | 0x00 | 0x02 | 0x00 | 0x01 | 0x00 | 0x23 | 0x00 | 0x12 | 0x00 | 0x13 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x2D | 0x00 | 0x64 | 0x00 | 0x65 | 0x00 | 0x66 | 0x00 | 0x67 | 0x00 | 0x68 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x2E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x15 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x2F | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x15 | 0x00 | 0x16 | 0x00 | 0x17 | 0x00 | 0x18 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x34 | 0x00 | 0x00 | 0x00 | 0x02 | 0x00 | 0x01 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x35 | 0x00 | 0x00 | 0x00 | 0x76 | 0x00 | 0x75 | 0x00 | 0x21 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x36 | 0x00 | 0x00 | 0x00 | 0x02 | 0x00 | 0x01 | 0x00 | 0x22 | 0x00 | 0x12 | 0x00 | 0x13 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x40 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x95 | 0x00 | 0x24 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x41 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x29 | 0x00 | 0x30 | 0x00 | 0x96 | 0x00 | 0x31 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x42 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x90 | 0x00 | 0x35 | 0x00 | 0x77 | 0x00 | 0x36 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x43 | 0x00 | 0x39 | 0x00 | 0x40 | 0x00 | 0x41 | 0x00 | 0x42 | 0x00 | 0x43 | 0x00 | 0x44 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x44 | 0x00 | 0x00 | 0x00 | 0x47 | 0x00 | 0x00 | 0x00 | 0x46 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x45 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x49 | 0x00 | 0x00 | 0x00 | 0x50 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x46 | 0x00 | 0x00 | 0x00 | 0x51 | 0x00 | 0x00 | 0x00 | 0x52 | 0x00 | 0x00 | 0x00 | 0x53 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x47 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x54 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x48 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x55 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x49 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x56 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x50 | 0x00 | 0x83 | 0x00 | 0x00 | 0x00 | 0x84 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x52 | 0x00 | 0x83 | 0x00 | 0x00 | 0x00 | 0x84 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x56 | 0x00 | 0x83 | 0x00 | 0x00 | 0x00 | 0x84 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x65 | 0x00 | 0x85 | 0x00 | 0x00 | 0x00 | 0x86 | 0x00 | 0x87 | 0x00 | 0x88 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x6B | 0x00 | 0x00 | 0x00 | 0x02 | 0x00 | 0x01 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x72 | 0x00 | 0x59 | 0x00 | 0x60 | 0x00 | 0x61 | 0x00 | 0x62 | 0x00 | 0x63 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x73 | 0x00 | 0x83 | 0x00 | 0x84 | 0x00 | 0x84 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x74 | 0x00 | 0x83 | 0x00 | 0x84 | 0x00 | 0x84 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x75 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x92 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x76 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x93 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |
| 0x77 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x97 | 0x00 | 0x00 | 0x00 | 0x00 | 0x06 | 0x05 | 0x00 | 0x07 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Signal Kurzschluss nach B+ |
| 0x02 | Signal Unterbrechung oder KS nach B- |
| 0x03 | Unterbrechung |
| 0x04 | Zustand nicht plausibel |
| 0x05 | Fehler momentan vorhanden |
| 0x06 | Fehler momentan nicht vorhanden |
| 0x07 | Fehler sporadisch |
| 0x08 | Signal-Range-Check nach unten verletzt |
| 0x09 | Signal-Range-Check nach oben verletzt |
| 0x10 | Schleifer Signal-Range-Check nach unten verletzt |
| 0x11 | Schleifer Signal-Range-Check nach oben verletzt |
| 0x12 | Versorgungsspannung Kurzschluss nach B- |
| 0x13 | Versorgungsspannung Kurzschluss nach B+ |
| 0x14 | Versorgungsspannung Einspritzpumpe ueber- / unterschritten |
| 0x15 | Ueberdrehzahlerkennung |
| 0x16 | Plausibilitaet mit Ladedruck |
| 0x17 | Drehzahlaenderung unplausibel |
| 0x18 | Plausibilitaet mit Drehzahlgeber Einspritzpumpe |
| 0x19 | PWG Plausibilitaet mit Bremssignal (wegappliziert) |
| 0x20 | PWG Plausibilitaet mit Leergasschalter |
| 0x21 | Kuehlmitteltemperatur nicht erreicht (wegappliziert) |
| 0x22 | Plausibilitaet mit Atmosphaerendruckfuehler bei Leerlauf |
| 0x23 | Luftmasse zu gering |
| 0x24 | Microcontroller (Gate-Array) |
| 0x25 | Signal fehlerhaft |
| 0x26 | Plausibilitaet mit Einspritzmenge und Motordrehzahl |
| 0x27 | Positive Regelabweichung / Luftmasse zu niedrig |
| 0x28 | Negative Regelabweichung / Luftmasse zu hoch |
| 0x29 | Abschaltung defekt |
| 0x30 | dauernd freigeschaltet |
| 0x31 | dauernd gesperrt |
| 0x32 | Gluehkerzen bzw. Gluehrelais defekt |
| 0x33 | Plausibilitaet der Bremssignale nach Zuendung Ein |
| 0x34 | Plausibilitaet der Bremssignale im Fahrbetrieb |
| 0x35 | Allgemeine Abgleich Checksumme |
| 0x36 | Kommunikation mit EEPROM |
| 0x37 | Relais schaltet zu frueh ab |
| 0x38 | Relais schaltet zu spaet ab |
| 0x39 | Ansteuerdauer-Ueberwachung |
| 0x40 | Vergleich der Drehzahl Kurbelwelle zu Drehzahl Einspritzpumpe |
| 0x41 | Kein Pumpenkennfeld programmiert oder PSG-RAM defekt |
| 0x42 | Pumpensteuergeraet-EEPROM oder ADC defekt |
| 0x43 | Mengenendstufe fehlerhaft |
| 0x44 | CAN Botschaft - Pumpensteuergeraet Timeout |
| 0x46 | allgemeiner Fehler |
| 0x47 | dauernd bestromt |
| 0x48 | Zuendstellung 2 Plausibilitaet nach Steuergeraet-Initialisierung |
| 0x49 | CAN-Bus abgeschaltet |
| 0x50 | CAN-Bus Baustein defekt |
| 0x51 | CAN-Bus allgemeiner Fehler |
| 0x52 | CAN-Bus Empfangsfehler |
| 0x53 | CAN-Bus Sendefehler |
| 0x54 | Drehzahlgeber Kurbelwelle und Einspritzpumpe nicht synchron zueinander |
| 0x55 | Lageregelung um +/- 3 Grad KW falsch |
| 0x56 | Drehzahlgeber Einspritzpumpe defekt |
| 0x57 | Uebertemperatur im Pumpensteuergeraet erkannt |
| 0x58 | Signal-Range-Fehler |
| 0x59 | Empfangsfehler Elektronische Getriebesteuerung (EGS) |
| 0x60 | Empfangsfehler Antriebsschlupfregelung (ASR) |
| 0x61 | Empfangsfehler Motorschleppmomentregelung (MSR) |
| 0x62 | Empfangsfehler Combi-Instrument |
| 0x63 | Timeout Botschaft Antriebsschlupfregelung (ASR) |
| 0x64 | EWS -Signal plausibel, jedoch Wechselcode (WC) falsch |
| 0x65 | EWS -Signal nicht plausibel |
| 0x66 | kein EWS-Signal vorhanden |
| 0x67 | Urcode (UC) im EEPROM defekt |
| 0x68 | Wechselcode (WC) im EEPROM defekt |
| 0x69 | Geschwindigkeit zu gross |
| 0x70 | Plausibilitaet mit Fahrgeschwindigkeit |
| 0x71 | PWG Plausibilitaet mit Leergasschalter (wegappliziert) |
| 0x72 | PWG Plausibilitaet mit Poti (wegappliziert) |
| 0x73 | Versorgungsspannung DDE ueberschritten |
| 0x74 | Versorgungsspannung DDE unterschritten |
| 0x75 | Signal Unterbrechung oder KS nach B+ |
| 0x76 | Signal Kurzschluss nach B- |
| 0x77 | Mengenabgleich Checksumme |
| 0x78 | Signal von Multifunktions-Lenkrad fehlerhaft |
| 0x79 | Referenzspannung Unterbrechung oder KS nach B- |
| 0x80 | Referenzspannung Kurzschluss nach B+ |
| 0x81 | Positive Regelabweichung / Spritzbeginn ist um mehr als 2 Grad KW zu frueh |
| 0x82 | Negative Regelabweichung / Spritzbeginn ist um mehr als 2 Grad KW zu spaet |
| 0x83 | Ansteuerung Kurzschluss nach B+ |
| 0x84 | Ansteuerung Unterbrechung oder KS nach B- |
| 0x85 | Ansteuerung Magnetventil Kurzschluss nach B+ |
| 0x86 | Ansteuerung Magnetventil Unterbrechung oder KS nach B- |
| 0x87 | Positive Regelabweichung / Ladedruck zu niedrig |
| 0x88 | Negative Regelabweichung / Ladedruck zu hoch |
| 0x89 | Plausibilitaet mit Drehzahlgeber-Impulsen |
| 0x90 | Mengendriftkompensation(EEPROM Checksumme) |
| 0x92 | Generatorlast 0% |
| 0x93 | Tankfuellstandsinfo von CAN |
| 0x94 | Fahrgeschwindigkeit von CAN ungueltig |
| 0x95 | Redundante Schubueberwachung |
| 0x96 | Microcontroller - GateArray Abschaltung defekt |
| 0x97 | Fehlererkennung |
| 0xFF | unbekannte Fehlerart |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | UWF_A | UWF_B |
| --- | --- | --- | --- | --- |
| 0x00 | ----   | ---- | 1 | 0 |
| 0x01 | Einspritzmenge | [mg/Hub] | 0.3922 | 0 |
| 0x02 | Motordrehzahl | [1/min] | 23.5 | 0 |
| 0x03 | Motordrehzahl Einspritzpumpe | [1/min] | 23.5 | 0 |
| 0x04 | Ladedruck | [mbar] | 13.725 | 0 |
| 0x05 | Lufttemperatur | [Grad C] | 1 | -40 |
| 0x06 | Kraftstofftemperatur Einspritzpumpe | [Grad C] | 1 | -40 |
| 0x07 | Kuehlmitteltemperatur | [Grad C] | 1 | -40 |
| 0x08 | Batteriespannung | [V] | 0.09986 | 0 |
| 0x09 | Anzahl fehlerhafte EWS-Uebertragungen | [1] | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | -- | 1 | 0 |

### SHADOWFEHLER

| SH_FE | SH_0 | SH_1 | SH_2 |
| --- | --- | --- | --- |
| 0x20 | 0x04 | 0x00 | 0x00 |
| 0x13 | 0x08 | 0x20 | 0x00 |
| 0x41 | 0x04 | 0x08 | 0x00 |
| 0x2D | 0x04 | 0x00 | 0x00 |
| 0x08 | 0x08 | 0x00 | 0x00 |
| 0x73 | 0x01 | 0x04 | 0x00 |
| 0x44 | 0x02 | 0x00 | 0x00 |
| 0x74 | 0x01 | 0x04 | 0x00 |
| 0x42 | 0x04 | 0x10 | 0x00 |
| 0x12 | 0x08 | 0x20 | 0x00 |
| 0x43 | 0x02 | 0x08 | 0x10 |
| 0xXY | 0xFF | 0xFF | 0xFF |

### BITSKHO

| TELNAME | TELEGRAMM | NAME | BYTE | MASK | VALUE | LNAME | TEXT_0 | TEXT_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| khoNOR_AB | 0FB7 | S_KWH_WTF | 6 | 0x01 | 0x01 | Abschaltbedingung Kuehlmittelheizung | io | Wassertemperatur ausreichend |
| khoNOR_AB | 0FB7 | S_KWH_GEN1 | 6 | 0x02 | 0x02 | Abschaltbedingung Kuehlmittelheizung | io | Generatorlastfehler |
| khoNOR_AB | 0FB7 | S_KWH_UBATT | 6 | 0x04 | 0x04 | Abschaltbedingung Kuehlmittelheizung | io | Batteriespannung zu niedrig |
| khoNOR_AB | 0FB7 | S_KWH_N | 6 | 0x08 | 0x08 | Abschaltbedingung Kuehlmittelheizung | io | Motordrehzahl zu niedrig |
| khoNOR_AB | 0FB7 | S_KWH_START | 6 | 0x10 | 0x10 | Abschaltbedingung Kuehlmittelheizung | io | Startverzoegerung aktiv |
| khoNOR_AB | 0FB7 | S_KWH_SENSDEF | 6 | 0x20 | 0x20 | Abschaltbedingung Kuehlmittelheizung | io | WTF, UTF oder Endstufe defekt |
| khoNOR_AB | 0FB7 | S_KWH_IKHA | 6 | 0x80 | 0x80 | Abschaltbedingung Kuehlmittelheizung | io | keine Heizleistungsanforderung von IHKA |
| khoNOR_AB | 0FB7 | S_KWH_GENSRC | 5 | 0x08 | 0x08 | Abschaltbedingung Kuehlmittelheizung | io | Generatorlast Null Prozent |
| khoNOR_AB | 0FB7 | S_KWH_APPL | 5 | 0x80 | 0x80 | Abschaltbedingung Kuehlmittelheizung | io | Wegappliziert |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0x01 | AIF_NICHT_PROGRAMMIERT |
| 0x02 | ERROR_ANSTEUERARGUMENT_FEHLT |
| 0x03 | ERROR_ECU_ABGLEICHMENGE_PROGRAMMIEREN |
| 0x04 | ERROR_ECU_ABGLEICHMENGE_CHECKSUMME_VORGEBEN |
| 0x05 | ERROR_ECU_ABGLEICHMENGE_CHECKSUMME_PROGRAMMIEREN |
| 0x06 | ERROR_ANZAHL_OUT_OF_RANGE |
| 0x07 | ERROR_ARGUMENT_ANZAHL |
| 0x08 | ERROR_DATEN_WRONG_FORMAT |
| 0x09 | ERROR_DATEN_OUT_OF_RANGE |
| 0x0A | ERROR_PZ_IN_WRONG_FORMAT |
| 0x0B | ERROR_WRONG_PZ |
| 0x0C | ERROR_ARGUMENT_DATEN_LAENGE |
| 0x0D | ERROR_ARGUMENT_DATEN |
| 0x0F | ERROR_ECU_ABGLEICHMENGE_CHECKSUMME_VORGEBEN |
| 0x10 | ERROR_ECU_ABGLEICHMENGE_CHECKSUMME_PROGRAMMIEREN |
| 0x11 | ERROR_WRONG_ARGUMENT |
| 0x12 | ERROR_WRONG_VALUE |
| 0x13 | ERROR_NO_ARGUMENT |
| 0x14 | ERROR_PARAMETER_ABGLEICH_VERSTELLEN_FGR_VERBAUT |
| 0x15 | ERROR_PARAMETER_ABGLEICH_VERSTELLEN_KLIMAANLAGE_VERBAUT |
| 0x16 | ERROR_ECU_MENGENDRIFT_PROGRAMMIEREN |
| 0x17 | ERROR_ECU_MENGENDRIFT_CHECKSUMME_VORGEBEN |
| 0x18 | ERROR_ECU_MENGENDRIFT_CHECKSUMME_PROGRAMMIEREN |
| 0x19 | ERROR_PARAMETER_ABGLEICH_TIMER_VERSTELLEN_PROGRAMMIEREN_VERBAUT |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| 0x55 | ERROR_ECU_FUNCTION_EINZELNE_STELLGLIEDANSTEUERUNG_WIRD_AUFGEHOBEN |
| 0xAA | ERROR_ECU_FUNCTION_ALLE_STELLGLIEDANSTEUERUNGEN_WERDEN_AUFGEHOBEN |
| 0xF0 | ERROR_ECU_FUNCTION_UEBERGABEPARAMETER_UNGUELTIG |
| 0xF1 | ERROR_ECU_FUNCTION_MESSAGE_NR_UNGUELTIG |
| 0xF2 | ERROR_ECU_FUNCTION_ANSTEUERBEDINGUNG_NICHT_ERFUELLT |
| 0xF3 | ERROR_ECU_FUNCTION_ZU_VIELE_STELLGLIED_EINGRIFFE_AKTIV |
| 0xF4 | ERROR_ECU_FUNCTION_TASTVERHAELTNIS_UNGUELTIG |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |
