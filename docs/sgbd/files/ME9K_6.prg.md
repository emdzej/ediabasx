# ME9K_6.prg

## General

|  |  |
| --- | --- |
| File | ME9K_6.prg |
| Type | PRG |
| Jobs | 111 |
| Tables | 22 |
| Origin | BMW EA-33 Matthes |
| Revision | 0.16 |
| Author | BMW EA-33 Matthes |
| ECU Comment | SGBD fuer ME9.2 mit KWP2000* |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ME9.2 fuer NG-Motoren |  |  |
| ORIGIN | string | BMW EA-33 Matthes |  |  |
| REVISION | string | 0.16 |  |  |
| AUTHOR | string | BMW EA-33 Matthes |  |  |
| COMMENT | string | SGBD fuer ME9.2 mit KWP2000* |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### initialisierung

Default Init-Job

_No arguments._

### IDENT

Identdaten fuer DME auslesen

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers im Fehlerspeicher uebergeben |

### FS_LESEN_LANG

Fehlerspeicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers uebergeben |

### FS_LESEN

Fehlerspeicher auslesen

_No arguments._

### DIAGNOSE_ENDE

_No description._

_No arguments._

### FS_HEX_LESEN

Fehlerspeicher auslesen als Hex Dump

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers im Fehlerspeicher uebergeben |

### STEUERN_VVT_ANSCHLAG

Lernen der VVT-Anschlaege

_No arguments._

### STATUS_VVT_ANSCHLAG

Status Lernen VVT-Anschlaege

_No arguments._

### ENDE_VVT_ANSCHLAG

Ende von Lernen der VVT-Anschlaege

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### SEED_KEY

Schutzmechanismus SEED_KEY

_No arguments._

### EWS_STARTWERT

EWS-Startwertinitialisierung

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | Parameter zur Initialisierung |

### EWS_EMPFANG

EWS-Empfangsstatus auslesen

_No arguments._

### WECHSELCODE_SYNC_DME

EWS zuruecksetzen

_No arguments._

### STEUERN_EV_1

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_2

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_3

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_4

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_5

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_6

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_7

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_8

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_1_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_2_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_3_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_4_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_5_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_6_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_7_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_EV_8_AUS

Stellgliedansteuerung Einspritzventile

_No arguments._

### STEUERN_E_LUEFTER

Stellgliedansteuerung E-Luefter

| Name | Type | Description |
| --- | --- | --- |
| TASTRATE | int | gibt an, welches EV angesteuert werden soll |

### STEUERN_E_LUEFTER_AUS

Stellgliedansteuerung E-Luefter

_No arguments._

### STEUERN_SLP

Stellgliedansteuerung SLP

_No arguments._

### STEUERN_SLP_AUS

Stellgliedansteuerung SLP

_No arguments._

### STEUERN_TEV

Stellgliedansteuerung TEV

_No arguments._

### STEUERN_TEV_AUS

Stellgliedansteuerung TEV

_No arguments._

### STEUERN_KFK

Stellgliedansteuerung KFK

_No arguments._

### STEUERN_KFK_AUS

Stellgliedansteuerung KFK

_No arguments._

### STEUERN_SLV

Stellgliedansteuerung SLV

_No arguments._

### STEUERN_SLV_AUS

Stellgliedansteuerung SLV

_No arguments._

### STEUERN_EKP

Stellgliedansteuerung EKP

_No arguments._

### STEUERN_EKP_AUS

Stellgliedansteuerung EKP

_No arguments._

### STEUERN_HLS1

Stellgliedansteuerung Lambdasondenheizung1

_No arguments._

### STEUERN_HLS1_AUS

Stellgliedansteuerung Lambdasondeheizung 1 aus

_No arguments._

### STEUERN_HLS2

Stellgliedansteuerung Lambdasondenheizung 2

_No arguments._

### STEUERN_HLS2_AUS

Stellgliedansteuerung Lambdasondeheizung 2 aus

_No arguments._

### STEUERN_HLS3

Stellgliedansteuerung Lambdasondenheizung3

_No arguments._

### STEUERN_HLS3_AUS

Stellgliedansteuerung Lambdasondeheizung 3 aus

_No arguments._

### STEUERN_HLS4

Stellgliedansteuerung Lambdasondenheizung 4

_No arguments._

### STEUERN_HLS4_AUS

Stellgliedansteuerung Lambdasondeheizung 4 aus

_No arguments._

### STEUERN_STA

Stellgliedansteuerung Startrelais

_No arguments._

### STEUERN_STA_AUS

Stellgliedansteuerung Startrelais aus

_No arguments._

### STEUERN_KOE

Stellgliedansteuerung KOREL

_No arguments._

### STEUERN_KOE_AUS

Stellgliedansteuerung KOREL aus

_No arguments._

### STEUERN_EBL

Stellgliedansteuerung E-Box-Luefter

_No arguments._

### STEUERN_EBL_AUS

Stellgliedansteuerung E-Box-Luefter aus

_No arguments._

### STEUERN_AGK

Stellgliedansteuerung Abgasklappe

_No arguments._

### STEUERN_AGK_AUS

Stellgliedansteuerung Abgasklappe aus

_No arguments._

### STEUERN_DMTLP

Stellgliedansteuerung DM-TL Pumpe

_No arguments._

### STEUERN_DMTLP_AUS

Stellgliedansteuerung DM-TL Pumpe aus

_No arguments._

### STEUERN_DMTLV

Stellgliedansteuerung DM-TL Ventil

_No arguments._

### STEUERN_DMTLV_AUS

Stellgliedansteuerung DM-TL Ventil aus

_No arguments._

### STEUERN_VANOS_EINLASS

Stellgliedansteuerung Einlass-VANOS

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt den Verstellwinkel an (-102..102) |

### STEUERN_VANOS_EINLASS_AUS

Stellgliedansteuerung Einlass-VANOS freigeben

_No arguments._

### STEUERN_VANOS_AUSLASS

Stellgliedansteuerung Auslass-VANOS

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt den Verstellwinkel an (-102..102) |

### STEUERN_VANOS_AUSLASS_AUS

Stellgliedansteuerung Auslass-VANOS freigeben

_No arguments._

### STEUERN_DISA

Stellgliedansteuerung DISA

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt den Verstellwinkel an (0..100) |

### STEUERN_DISA_AUS

Stellgliedansteuerung DISA freigeben

_No arguments._

### RAM_LESEN

Beliebige RAM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| RAM_LESEN_ANZAHL_BYTE | long | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### DATA_ID_LESEN

Data-ID des SG auslesen

_No arguments._

### STOP_COMM

Ende von Comm

_No arguments._

### RAM_BACKUP

Loeschen der RAM-Backup-Werte

_No arguments._

### START_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | gesetzter LL-Sollwert |

### LESEN_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung Status lesen

_No arguments._

### ENDE_SYSTEMCHECK_LLERH

Diagnosefunktion LL-Erhoehung Status lesen

_No arguments._

### START_SYSTEMCHECK_SLS

Systemdiagnose SLS

_No arguments._

### LESEN_SYSTEMCHECK_SLS

Status Systemdiagnose SLS

_No arguments._

### ENDE_SYSTEMCHECK_SLS

Ende Systemdiagnose SLS

_No arguments._

### START_SYSTEMCHECK_TEVSYS

Systemtest von TEV

_No arguments._

### LESEN_SYSTEMCHECK_TEVSYS

Status Systemtest TEV

_No arguments._

### ENDE_SYSTEMCHECK_TEVSYS

Beenden von TEV-Systemtest

_No arguments._

### START_SYSTEMCHECK_DMTL

Start Systemtest DMTL

_No arguments._

### LESEN_SYSTEMCHECK_DMTL

Status Systemtest DMTL

_No arguments._

### ENDE_SYSTEMCHECK_DMTL

Ende Systemtest DM-TL

_No arguments._

### STEUERN_EVAUSBL

Systemdiagnose Einspritzventile ausblenden

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt die Ventile (binaer, jedes Bit ein EV) an, die ausgeblendet werden |

### STEUERN_EVAUSBL_AUS

Ende Systemtest DM-TL

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt die Ventile (binaer, jedes Bit ein EV) an, die ausgeblendet werden |

### STATUS_MESSWERTE

Auslesen von Messwerten

_No arguments._

### STATUS_BATTERIEINTEGRATOR

Auslesen von Messwertenund Statusflags

_No arguments._

### STATUS_SCHALTERSTATI

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_FUNKTIONSSTATI

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_LAUFUNRUHE

Auslesen von Laufunruhewerten

_No arguments._

### STATUS_DKHFM

Auslesen von DK/HFM-Abgleichswerten

_No arguments._

### STEUERN_VVT

Stellgliedansteuerung VVT

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt einen absoluten Verstellwinkel an (0..180 Grd) |
| RAMPE | int | eine definierte Rampe wird automatisch abgefahren (VS-21 Funktion) |

### STEUERN_VVT_AUS

beenden Stellgliedansteuerung VVT

_No arguments._

### STATUS_CO

Auslesen des LL-CO-Wertes

_No arguments._

### STEUERN_CO

LL-CO-Wert vorgeben

| Name | Type | Description |
| --- | --- | --- |
| CO_WERT | int | LL CO-Abgleichswert |

### STEUERN_CO_PROGRAMM

LL-CO-WERT programmieren

| Name | Type | Description |
| --- | --- | --- |
| CO_FEST | int | LL CO-Abgleichswert |

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### STEUERN_SYNC_MODE

EWS-Startwertinitialisierung

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Parameter zur Initialisierung |

### STATUS_SYNC_MODE

EWS-Empfangsstatus auslesen

_No arguments._

### STATUS_MOTORTEMPERATUR

Auslesen der Motortemperatur

_No arguments._

### STATUS_MOTORDREHZAHL

Auslesen der Motordrehzahl

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

Auslesen der Lufttemperatur

_No arguments._

### STATUS_LMM_MASSE

Auslesen der Luftmasse

_No arguments._

### STATUS_L_SONDE

Auslesen der Lambdasonden Spg.

_No arguments._

### STATUS_L_SONDE_2

Auslesen der Lambdasonden Spg. 2

_No arguments._

### STATUS_UBATT

Auslesen der Batteriespg.

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

## Tables

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen => Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe => Lear |
| 0x10 | VDO |
| 0x11 | Valeo |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine |
| 0x18 | Teves |
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0x27 | Delphi PHI |
| 0x28 | DODUCO => BERU |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer |
| 0x33 | Jatco |
| 0x34 | Fuba |
| 0x35 | UK-NSI |
| 0x36 | AABG |
| 0x37 | Dunlop |
| 0x38 | Sachs |
| 0x39 | ITT |
| 0x40 | FTE |
| 0x41 | Megamos |
| 0x42 | TRW |
| 0x43 | Wabco |
| 0x44 | ISAD Electronic Systems |
| 0x45 | HEC (Hella Electronics Corporation) |
| 0x46 | Gemel |
| 0x47 | ZF |
| 0x48 | GMPT |
| 0x49 | Harman Kardon |
| 0x50 | Remes |
| 0x51 | ZF Lenksysteme |
| 0x52 | Magneti Marelli |
| 0x53 | Borg Instruments |
| 0xFF | unbekannter Hersteller |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x2711 | CDKLDPE - Leckage Diagnosepumpe Endstufe |
| 0x2712 | CDKDMMVE - Magnetventil DM-TL Endstufe |
| 0x2713 | CDKLSVV - Vertauschte Lambdasonden |
| 0x2714 | CDKHSH2 - Lambdasonden-Heizung hinter Kat (Bank2) |
| 0x2715 | CDKHSV2 - Lambdasonden-Heizung vor Kat (Bank2) |
| 0x2716 | CDKHSHE - Endstufe Heizung Sonde hinter Kat |
| 0x2717 | CDKHSHE2 - Endstufe Heizung Sonde hinter Kat (Bank2) |
| 0x2718 | CDKNZ - Drehzahlgeber Zahnfehler |
| 0x2719 | CDKDGZ - Drehzahlgeber Periodenzeit |
| 0x271A | CDKLSV - Lambda-Sonde vor Kat |
| 0x271C | CDKLSH - Lambda-Sonde hinter Kat |
| 0x271D | CDKHSV - Lambdasonden-Heizung vor Kat |
| 0x271E | CDKHSH - Lambdasonden-Heizung hinter Kat |
| 0x271F | CDKLATP - Lambda-Sondenalterung Periodendauer |
| 0x2720 | CDKLATV - Lambda-Sondenalterung TV |
| 0x2721 | CDKLASH - Lambda-Sondenalterung h. Kat |
| 0x2722 | CDKLSV2 - Lambda-Sonde2 vor Kat |
| 0x2724 | CDKLSH2 - Lambda-Sonde2 hinter Kat |
| 0x2725 | CDKLATP2 - Lambda-Sondenalterung Periodendauer Bank2 |
| 0x2726 | CDKLATV2 - Lambda-Sondenalterung TV Bank2 |
| 0x2727 | CDKLASH2 - Lambda-Sondenalterung h. Kat Bank2 |
| 0x2728 | CDKFRAO - LR-Adaption multiplikativ Bereich2 |
| 0x2729 | CDKFRAO2 - LR-Adaption multipl. Bereich2 (Bank2) |
| 0x272A | CDKFRAU - LR-Adaption multiplikativ Bereich1 |
| 0x272B | CDKFRAU2 - LR-Adaption multipl. Bereich1 (Bank2) |
| 0x272C | CDKRKAT - LR-Adaption additiv pro Zeit |
| 0x272D | CDKRKAT2 - LR-Adaption additiv pro Zeit (Bank2) |
| 0x272E | CDKRKAZ - LR-Adaption additiv pro Zuendung |
| 0x272F | CDKRKAZ2 - LR-Adaption additiv pro Zuendung Bank2 |
| 0x2730 | CDKLLRP - Leerlaufregelung fehlerhaft |
| 0x2731 | CDKENWS - Nockenwellensteuerung Einlass |
| 0x2732 | CDKENWS2 - NW-Steuerung Einlass B2 (8zyl)/Auslass (4zyl) |
| 0x2733 | CDKSNWDG - NW-KW Synchronfehler |
| 0x2734 | CDKLE - TPS/MAF Plausibilitaet |
| 0x2735 | CDKLE2 -TPS/MAF Plausibilitaet Bank2 |
| 0x2736 | CDKDVPWK - Drosselklappenregler PWM Kurztest |
| 0x2737 | CDKWFS - EWS3.3 Manipulationsschutz |
| 0x2738 | CDKKAT - Katalysator-Konvertierung |
| 0x2739 | CDKKATSP - Katalysator-Konvertierung LSU |
| 0x273A | CDKKATSP2 - Katalysator-Konvertierung LSU Bank2 |
| 0x273B | CDKDVPWL - Drosselklappenregler PWM Langtest |
| 0x273C | CDKDVRD - Drosselklappenregler Differenz |
| 0x273D | CDKKAT2 - Katalysator-Konvertierung (Bank2) |
| 0x273E | CDKATNV - Signal Temperaturfuehler Abgas 1 |
| 0x273F | CDKATNV2 - Signal Temperaturfuehler Abgas 2 |
| 0x2740 | CDKFPV - Pedalwertgeber1 Dauer |
| 0x2741 | CDKFPV2 - Pedalwertgeber2 Dauer |
| 0x2742 | CDKMD00 - Aussetzererkennung Zyl.1 |
| 0x2743 | CDKMD01 - Aussetzererkennung Zyl.2 |
| 0x2744 | CDKMD02 - Aussetzererkennung Zyl.3 |
| 0x2745 | CDKMD03 - Aussetzererkennung Zyl.4 |
| 0x2746 | CDKMD04 - Aussetzererkennung Zyl.5 |
| 0x2747 | CDKMD05 - Aussetzererkennung Zyl.6 |
| 0x2748 | CDKMD06 - Aussetzererkennung Zyl.7 |
| 0x2749 | CDKMD07 - Aussetzererkennung Zyl.8 |
| 0x274A | CDKMD08 - Aussetzererkennung Zyl.9 |
| 0x274B | CDKMD09 - Aussetzererkennung Zyl.10 |
| 0x274C | CDKMD10 - Aussetzererkennung Zyl.11 |
| 0x274D | CDKMD11 - Aussetzererkennung Zyl.12 |
| 0x274E | CDKMD - Aussetzererkennung, Summenfehler |
| 0x274F | CDKMDK - Aussetzer, Summenfehler, kundendienstrelevant |
| 0x2752 | CDKFPPH - Pedalwertgeber Halbplausibilitaet |
| 0x2753 | CDKDZKU0 - Ueberwachung Zuender 1 in Zuendreihenfolge |
| 0x2754 | CDKDZKU1 - Ueberwachung Zuender 2 in Zuendreihenfolge |
| 0x2755 | CDKDZKU2 - Ueberwachung Zuender 3 in Zuendreihenfolge |
| 0x2756 | CDKDZKU3 - Ueberwachung Zuender 4 in Zuendreihenfolge |
| 0x2757 | CDKDZKU4 - Ueberwachung Zuender 5 in Zuendreihenfolge |
| 0x2758 | CDKDZKU5 - Ueberwachung Zuender 6 in Zuendreihenfolge |
| 0x2759 | CDKDZKU6 - Ueberwachung Zuender 7 in Zuendreihenfolge |
| 0x275A | CDKDZKU7 - Ueberwachung Zuender 8 in Zuendreihenfolge |
| 0x275B | CDKDZKU8 - Ueberwachung Zuender 9 in Zuendreihenfolge |
| 0x275C | CDKDZKU9 - Ueberwachung Zuender 10 in Zuendreihenfolge |
| 0x275D | CDKDZKU10 - Ueberwachung Zuender 11 in Zuendreihenfolge |
| 0x275E | CDKDZKU11 - Ueberwachung Zuender 12 in Zuendreihenfolge |
| 0x275F | CDKFPD - Pedalwertgeber defekt |
| 0x2760 | CDKSLS - Sekundaerluftsystem |
| 0x2761 | CDKSLS2 - Sekundaerluftsystem Bank2 |
| 0x2762 | CDKSLV - Sekundaerluftventil |
| 0x2763 | CDKSLV2 - Sekundaerluftventil Bank2 |
| 0x2764 | CDKSLPE - Endstufe Relais Sekundaerluftpumpe |
| 0x2765 | CDKSLVE - Sekundaerluftventil Endstufe |
| 0x2766 | CDKPHS - Phasengeber1 Signal Zeitdauer |
| 0x2767 | CDKPHS2 - Phasengeber2 Signal Zeitdauer |
| 0x2768 | CDKPHP - Phasengeber1 Positionfehler |
| 0x2769 | CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x276A | CDKSGA - Steuergeraeteauswahl |
| 0x276B | CDKSLVE2 - Sekundaerluftventil Endstufe Bank2 |
| 0x276C | CDKPHP2 - Phasengeber2 Positionfehler |
| 0x276D | CDKTES - Tankentlueftung functional check |
| 0x276E | CDKTES2 - Tankentlueftung funktional check Bank2 |
| 0x276F | CDKSLMM - Sekundaerluftmassenmesser fehlerhaft |
| 0x2770 | CDKSLM - Sekundaerluftmasse fehlerhaft |
| 0x2771 | CDKSLG - Sekundaerluftsystem gesperrt |
| 0x2772 | CDKTEVE - Tankentlueftungsventil Endstufe |
| 0x2773 | CDKTEVE2 - Tankentlueftungsventil Endstufe Bank2 |
| 0x2774 | CDKMEMUM - Ueberwachung zyklische Fehlerabspeicherung |
| 0x2775 | CDKUFMV - Motormomentueberwachung Ebene 2 |
| 0x2776 | CDKMFL - Schnittstelle MFL |
| 0x2777 | CDKUFSKA - Ueberwachung Rechnerfunktion |
| 0x2778 | CDKKUPPL - Schalter Kupplung |
| 0x2779 | CDKURRAM - SG Selbsttest RAM |
| 0x277A | CDKBREMS - Schalter Bremse |
| 0x277B | CDKURROM - SG Selbsttest ROM |
| 0x277C | CDKURRST - SG Selbsttest RESET |
| 0x277D | CDKUB - Batteriespannung |
| 0x277E | CDKMDB - Momentenbegrenzung Ebene 1 |
| 0x277F | CDKN - Kurbelwellengeber |
| 0x2780 | CDKBM - Bezugsmarkengeber |
| 0x2781 | CDKPH - Nockenwellengeber Einlass |
| 0x2782 | CDKPH2 - Nockenwellengeber Auslass |
| 0x2783 | CDKLM - Heissfilmluftmassenmesser |
| 0x2785 | CDKDK - DK-Potentiometer |
| 0x2786 | CDKDK1P - Drosselklappenpoti 1 |
| 0x2787 | CDKDK2P - Drosselklappenpoti 2 |
| 0x2788 | CDKVFZ - Fahrzeuggeschwindigkeit |
| 0x2789 | CDKSWE - Schlechtwegstreckenerkennung |
| 0x278A | CDKTUM - Umgebungstemperatur |
| 0x278B | CDKTM - Motortemperatur |
| 0x278C | CDKTA - Ansauglufttemperatur |
| 0x278D | CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x278E | CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x278F | CDKGLOR - LowRange Signal unplausibel  |
| 0x2790 | CDKTGET - Getriebetemperatur |
| 0x2791 | CDKDVET - Tauscherkennung ohne Adaption |
| 0x2792 | CDKDVEL - DK Positionsueberwachung |
| 0x2793 | CDKDVER - DK-Steller Regelbereich |
| 0x2794 | CDKDVEE - DK-Steller Ansteuerung |
| 0x2795 | CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2796 | CDKDVEU - Pruefung unterer Anschlag |
| 0x2797 | CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2798 | CDKDVEN - Pruefung Notluftpunkt |
| 0x2799 | CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x279A | CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x279B | CDKTHS - Thermostat klemmt |
| 0x279C | CDKETS - Endstufe Thermostat Kennfeldkuehlung |
| 0x279D | CDKMLE - Endstufe Motorluefter |
| 0x279E | CDKAKRE - Endstufe Abgasklappe |
| 0x279F | CDKLUEA - Endstufe LuefterA |
| 0x27A0 | CDKELS - Endstufe E-Box Luefter |
| 0x27A1 | CDKSLMM2 - Sekundaerluftmassenmesser2 fehlerhaft |
| 0x27A2 | CDKTMP - Temperaturfuehler Motor LR |
| 0x27A3 | CDKCHDEV2 - CAN Timeout HDEV2 SG |
| 0x27A4 | CDKDWA - EWS3.3 Schnittstelle DME-EWS |
| 0x27A6 | CDKEV1 - EV1 in Zuendreihenfolge |
| 0x27A7 | CDKEV2 - EV2 in Zuendreihenfolge |
| 0x27A8 | CDKEV3 - EV3 in Zuendreihenfolge |
| 0x27A9 | CDKEV4 - EV4 in Zuendreihenfolge |
| 0x27AA | CDKEV5 - EV5 in Zuendreihenfolge |
| 0x27AB | CDKEV6 - EV6 in Zuendreihenfolge |
| 0x27AC | CDKEV7 - EV7 in Zuendreihenfolge |
| 0x27AD | CDKEV8 - EV8 in Zuendreihenfolge |
| 0x27AE | CDKEV9 - EV9 in Zuendreihenfolge |
| 0x27AF | CDKEV10 - EV10 in Zuendreihenfolge |
| 0x27B0 | CDKEV11 - EV11 in Zuendreihenfolge |
| 0x27B1 | CDKEV12 - EV12 in Zuendreihenfolge |
| 0x27B3 | CDKEGFE - Diagnose DK/HFM-Abgleich |
| 0x27B4 | CDKDSU - Drucksensor Umgebung |
| 0x27B5 | CDKENWSE - Endstufe Einlass-VANOS |
| 0x27B6 | CDKENWSE2 - Endstufe Einlass-VANOS Bank2 |
| 0x27B7 | CDKKPE - Endstufe Kraftstoffpumpen-Relais |
| 0x27B8 | CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x27B9 | CDKVLS1 - BLS/BTS Plausibilitaet |
| 0x27BA | CDKVLS2 - Endstufe Klimakompressorfreigabe zum Klima-SG |
| 0x27BB | CDKANWS - Nockenwellensteuerung Auslass-VANOS0 |
| 0x27BC | CDKANWS2 - Nockenwellensteuerung Auslass-VANOS Bank2 |
| 0x27BD | CDKANWSE - Endstufe Auslass-VANOS |
| 0x27BE | CDKANWSE2 - Endstufe Auslass-VANOS Bank2 |
| 0x27BF | CDKPH3 - Nockenwellengeber Einlass Bank2 |
| 0x27C0 | CDKPH4 - Nockenwellengeber Auslass Bank2 |
| 0x27C1 | CDKPHM - Master Nockenwellengeber |
| 0x27C2 | CDKKOSE - Endstufe Klimakompressorsteuerung |
| 0x27C3 | CDKTOENS - Fehler Oelzustandssensor |
| 0x27C6 | CDKTESK - LDP Diagnose Feinleck |
| 0x27C7 | CDKTESG - LDP Diagnose Grobleck |
| 0x27C8 | CDKLDP - LDP System |
| 0x27C9 | CDKLDP - LDP Modul |
| 0x27CA | CDKDMPME - DM-TL Pumpenmotor Endstufe |
| 0x27CB | CDKDMTKNM - DM-TL Feinstleck (0,5mm) MIL aus |
| 0x27CC | CDKDMTK - DM-TL Feinleck |
| 0x27CE | CDKUFRLIP - Lastsensorueberwachung |
| 0x27CD | CDKDMTL - DM-TL Modul |
| 0x27CF | CDKZZ1 - Zuendzeit Zyl1 |
| 0x27D0 | CDKZZ2 - Zuendzeit Zyl2 |
| 0x27D1 | CDKZZ3 - Zuendzeit Zyl3 |
| 0x27D2 | CDKZZ4 - Zuendzeit Zyl4 |
| 0x27D3 | CDKZZ5 - Zuendzeit Zyl5 |
| 0x27D4 | CDKZZ6 - Zuendzeit Zyl6 |
| 0x27D5 | CDKLLR - Leerlaufregelung fehlerhaft |
| 0x27D6 | CDKISA2 - Endstufe Leerlaufregelung Steller Zu |
| 0x27D7 | DDKISA1 - Endstufe Leerlaufregelung Steller Auf |
| 0x27D8 | CDKVP - Fehler Unterdruckpumpe |
| 0x27D9 | CDKDHDMTE - Endstufe DM-TL Heizung |
| 0x27DA | CDKDGEN - Generatorfehler |
| 0x27DC | CDKWCA - EWS3.3 Wechselcode-Abspeicherung |
| 0x27E1 | CDKUFSPSC - Pedalwertgeberueberwachung |
| 0x27E2 | CDKKS1 - Klopfsensor1 |
| 0x27E3 | CDKKS2 - Klopfsensor2 |
| 0x27E4 | CDKKS3 - Klopfsensor3 |
| 0x27E5 | CDKKS4 - Klopfsensor4 |
| 0x27E6 | CDKKRNT - Klopfregelung Nulltest |
| 0x27E7 | CDKKROF - Klopfregelung Offset |
| 0x27E8 | CDKKRTP - Klopfregelung Testimpuls |
| 0x27E9 | CDKKRNT2 - Klopfregelung Nulltest Bank2 |
| 0x27EA | CDKCHDEV  - CAN-Timeout HDEV |
| 0x27EB | CDKCTXU  - CAN-Timeout TCU |
| 0x27EC | CDKCGE  - CAN-Timeout EGS |
| 0x27ED | CDKCAS  - CAN-Timeout ASC/DSC |
| 0x27EE | CDKCINS  - CAN-Timeout Instrumentenkombination |
| 0x27EF | CDKCACC  - CAN-Timeout ACC |
| 0x27F0 | CDKAS - Plausibilitaet MSR-Eingriff |
| 0x27F1 | CDKACC - Plausibilitaet ACC-Eingriff |
| 0x27F2 | CDKFST - Plausibilitaet Tankfuellstand |
| 0x27F3 | CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x27F4 | CDKCVVT2 - CAN-Timeout VVT-Steuergeraet Bank2 |
| 0x27F5 | CDKCDMEL - CAN-Timeout DME-Steuergeraet |
| 0x27F6 | CDKFPP - Pedalwertgeber |
| 0x27F7 | CDKFP1P - Pedalwertgeber Poti1 |
| 0x27F8 | CDKFP2P - Pedalwertgeber Poti2 |
| 0x27F9 | CDKSTAE - Startautomatik Endstufe |
| 0x27FA | CDKSTS - Startautomatik Eingang |
| 0x27FB | CDKGLFE - Endstufe gesteuerte Luftfuehrung |
| 0x27FD | CDKSTA - Startautomatik |
| 0x27FE | CDKKROF2 - Klopfregelung Offset Bank2 |
| 0x27FF | CDKKRTP2 - Klopfregelung Testimpuls Bank2 |
| 0x280A | CDKNWKW - Zuordnung Nockenwelle zur Kurbelwelle |
| 0x280D | CDKSGB- Steuergeräteüberwachung |
| 0x280E | CDKSGC- Steuergeräteüberwachung |
| 0x280F | CDKNWS - Nockenwellensteuerung |
| 0x2810 | CDKUFNC - Motordrehzahlueberwachung |
| 0x2811 | CDKCANB - Local CAN Bus Off |
| 0x2812 | CDKTOL - Oeltemperatur |
| 0x2813 | CDKUFSGA - Steuergeraeteueberwachung Gruppe A |
| 0x2814 | CDKUFSGB - Steuergeraeteueberwachung Gruppe B |
| 0x2815 | CDKUFSGC - Steuergeraeteueberwachung Gruppe C |
| 0x2816 | CDKUFNC - Funktionsüberwachung: Drehzahlgeber-, Zuleitung- oder SG-Fehler |
| 0x281E | CDKSUE - Endstufe DISA |
| 0x281F | CDKSUR - DISA-Lagerueckmeldung |
| 0x2820 | CDKSUP - DISA-Plausibiltaet |
| 0x2823 | CDKHSVSA - Heizung Lambdasonde vor Kat |
| 0x2824 | CDKHSVSA2 - Heizung Lambdasonde vor Kat Bank2 |
| 0x2828 | CDKCARS  - CAN-Timeout ARS |
| 0x2829 | CDKCCAS  - CAN-Timeout CAS |
| 0x282A | CDKCIHKA  - CAN-Timeout IHKA |
| 0x282B | CDKCPWML  - CAN-Timeout PWML |
| 0x282C | CDKCSZL  - CAN-Timeout SZL |
| 0x282E | CDKBWF  - PWG-Bewegung |
| 0x2832 | CDKASR - Plausibilitaet ASR-Moment |
| 0x2833 | CDKCAS - Plausibilitaet CAS |
| 0x2834 | CDKIHKA - Plausibilitaet IHKA |
| 0x2835 | CDKPWML - Plausibilitaet PWML |
| 0x2836 | CDKSZL - Plausibilitaet SZL |
| 0x2837 | CDKEMF - Plausibilitaet EMF |
| 0x2838 | CDKAAVE - Endstufe AAV |
| 0x2839 | CDKAAV -  AAV Funktionalitaet |
| 0x283A | CDKOEZS - Fehler Oelqualitaetssensor |
| 0x283B | CDKNWSE2 - Nockenwellensteuerung Endstufe Bank2 |
| 0x283C | CDKNWSE - Nockenwellensteuerung Endstufe |
| 0x283D | CDKCANA - PT - CAN Bus Off |
| 0x283E | CDKVVTE - VVT-Enable-Leitung Endstufe |
| 0x2841 | CDKLUVE - Luftumfasste Einspritzventile Endstufe |
| 0x284F | CDKVAT -   |
| 0x2850 | CDKDVFFS - VVT-Fuehrungssensor |
| 0x2851 | CDKDVFFS2 - VVT-Fuehrungssensor (Bank2) |
| 0x2852 | CDKDVFRS - VVT-Referenzsensor |
| 0x2853 | CDKDVFRS2 - VVT-Referenzsensor (Bank2) |
| 0x2854 | CDKDVPLA - VVT-Sensorplausibilisierung |
| 0x2855 | CDKDVPLA2 - VVT-Sensorplausibilisierung (Bank2) |
| 0x2856 | CDKDVUSE - VVT-Versorgungsspannung Sensor |
| 0x2857 | CDKDVUSE2 - VVT-Versorgungsspannung Sensor (Bank2) |
| 0x2858 | CDKDVLRN - VVT-Lernfunktion Anschlag |
| 0x2859 | CDKDVLRN2 - VVT-Lernfunktion Anschlag (Bank2) |
| 0x285A | CDKDVSTE - VVT-Stellgliedueberwachung |
| 0x285B | CDKDVSTE2 - VVT-Stellgliedueberwachung (Bank2) |
| 0x285C | CDKDVCAN - VVT-CAN-Kommunikation |
| 0x285D | CDKDVCAN2 - VVT-CAN-Kommunikation (Bank2) |
| 0x285E | CDKDVFSG - VVT-Steuergeraet interner Fehler |
| 0x285F | CDKDVFSG2 - VVT-Steuergeraet interner Fehler (Bank2) |
| 0x2860 | CDKDVEST - VVT-Endstufe |
| 0x2861 | CDKDVEST2 - VVT-Endstufe (Bank2) |
| 0x2862 | CDKDVULV - VVT-Leistungsversorgung |
| 0x2863 | CDKDVULV2 - VVT-Leistungsversorgung (Bank2) |
| 0x2865 | CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2866 | CDKDVAN - VVT-Anschlaege lernen notwendig |
| 0x286F | CDKAGRE - AGR Ventil Endstufe |
| 0x2870 | CDKAGRF - AGR Ventil Ueberwachung |
| 0x2871 | CDKAGRL - AGR Ventil Lagesensor |
| 0x2872 | CDKAGRV - Diagnose AGR Ventil |
| 0x2873 | CDKHDEVEA1 - Endstufe HDEV-SG1 Bank1 |
| 0x2874 | CDKHDEVEA2 - Endstufe HDEV-SG1 Bank2 |
| 0x2875 | CDKHDEVEA3 - Endstufe HDEV-SG1 Bank3 |
| 0x2876 | CDKHDEVEB1 - Endstufe HDEV-SG2 Bank1 |
| 0x2877 | CDKHDEVEB2 - Endstufe HDEV-SG2 Bank2 |
| 0x2878 | CDKHDEVEB3 - Endstufe HDEV-SG2 Bank3 |
| 0x2879 | CDKATS4 - Signal Abgastemperaturfuehler 4 |
| 0x287A | CDKDSVE - Drucksteuerventil Endstufe |
| 0x287B | CDKATS3 - Signal Abgastemperaturfuehler 3 |
| 0x287C | CDKDSS - Drucksensor Saugrohr |
| 0x287D | CDKRDS - Signal Raildrucksensor |
| 0x287E | CDKDSV - Drucksteuerventil |
| 0x287F | CDKDSKV - Hochdrucksensortest |
| 0x2880 | CDKAGRS - AGR System |
| 0x2881 | CDKBKE Endstufe Drallerzeugungssteller |
| 0x2882 | CDKMSVE - Endstufe Drucksteuerventil |
| 0x2883 | CDKHDR - Raildruckregelung |
| 0x28A0 | CDKKUE - Endstufe Kraftstoffkreislaufumschaltung |
| 0x28C8 | CDKFRST - LR-Abweichung  |
| 0x28C9 | CDKFRST2 - LR-Abweichung Bank2 |
| 0x28D2 | CDKDSL - Drucksensor Ladedruck |
| 0x28D3 | CDKDSVLU - Plausibilisierung Umgebungs- zu Ladedruck |
| 0x28D4 | CDKLDE - Ladedrucksteuerventil Endstufe |
| 0x28D5 | CDKUVSE - Endstufe Umluftventil Turbo |
| 0x28D7 | CDKDGENBS - Generatorkommunikation |
| 0x28D8 | CDKNVRBUP - RAM Backup |
| 0x28D9 | CDKEZH - Elektrischer Zusatzheizer (EZH) |
| 0x28DA | CDKCEZH - CAN Timeout EZH |
| 0x28DC | CDKDPL -   |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 00654321 |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxx0 | 10 | --                                                                    |
| xxxxxxx1 | 11 | Diagnose aktiv            |
| xxxxxx0x | 20 | --                                                                    |
| xxxxxx1x | 21 | Diagnose gestoppt         |
| xxxxx0xx | 30 | --                                                                    |
| xxxxx1xx | 31 | Zyklus-Flag gesetzt       |
| xxxx0xxx | 40 | --                                                                    |
| xxxx1xxx | 41 | Error-Flag gesetzt        |
| xxx0xxxx | 50 | --                                                                    |
| xxx1xxxx | 51 | MIL ein                   |
| xx0xxxxx | 60 | --                                                                    |
| xx1xxxxx | 61 | Fehler in Entprellphase   |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x2711 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2712 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2713 | 0x12 | 0x8C | 0x06 | 0x08 |
| 0x2714 | 0x79 | 0x30 | 0x2C | 0x34 |
| 0x2715 | 0x2E | 0x8C | 0x14 | 0x0B |
| 0x2716 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2717 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2718 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2719 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x271A | 0xA1 | 0xA8 | 0x29 | 0x17 |
| 0x271C | 0x2B | 0x8C | 0x33 | 0x17 |
| 0x271D | 0x2D | 0x8C | 0x14 | 0x0B |
| 0x271E | 0x78 | 0x2F | 0x2B | 0x33 |
| 0x271F | 0x0A | 0x29 | 0x31 | 0x36 |
| 0x2720 | 0x0A | 0x29 | 0x31 | 0x36 |
| 0x2721 | 0x0A | 0x2B | 0x33 | 0x17 |
| 0x2722 | 0xA2 | 0xA9 | 0x2A | 0x19 |
| 0x2724 | 0x2C | 0x8C | 0x34 | 0x19 |
| 0x2725 | 0x0A | 0x2A | 0x32 | 0x37 |
| 0x2726 | 0x0A | 0x2A | 0x32 | 0x37 |
| 0x2727 | 0x0A | 0x2C | 0x34 | 0x19 |
| 0x2728 | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x2729 | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x272A | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x272B | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x272C | 0x0A | 0x1A | 0x3C | 0x05 |
| 0x272D | 0x0A | 0x1A | 0x3C | 0x07 |
| 0x272E | 0x0A | 0x1A | 0x3C | 0x05 |
| 0x272F | 0x0A | 0x1A | 0x3C | 0x07 |
| 0x2730 | 0x0A | 0x1A | 0x14 | 0x15 |
| 0x2731 | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x2732 | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x2733 | 0x0A | 0x14 | 0x1A | 0x15 |
| 0x2734 | 0x0A | 0x1B | 0x1C | 0x23 |
| 0x2735 | 0x0A | 0x1B | 0x1C | 0x23 |
| 0x2736 | 0x0A | 0x26 | 0x27 | 0x15 |
| 0x2737 | 0x0A | 0x12 | 0x14 | 0x8C |
| 0x2738 | 0x88 | 0x89 | 0x06 | 0x3C |
| 0x2739 | 0x16 | 0x05 | 0x06 | 0x3C |
| 0x273A | 0x18 | 0x07 | 0x08 | 0x3C |
| 0x273B | 0x0A | 0x26 | 0x27 | 0x15 |
| 0x273C | 0x0A | 0x26 | 0x27 | 0x15 |
| 0x273D | 0x87 | 0x8A | 0x08 | 0x3C |
| 0x273E | 0x0A | 0x8C | 0x29 | 0x2B |
| 0x273F | 0x0A | 0x8C | 0x2A | 0x2C |
| 0x2740 | 0x0A | 0x1B | 0x1C | 0x23 |
| 0x2741 | 0x0A | 0x1B | 0x1C | 0x23 |
| 0x2742 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x2743 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x2744 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x2745 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x2746 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x2747 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x2748 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x2749 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x274A | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x274B | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x274C | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x274D | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x274E | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x274F | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2752 | 0x0A | 0x1B | 0x1C | 0x23 |
| 0x2753 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2754 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2755 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2756 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2757 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2758 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x2759 | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x275A | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x275B | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x275C | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x275D | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x275E | 0x0A | 0x12 | 0x03 | 0x14 |
| 0x275F | 0x0A | 0x1B | 0x1C | 0x23 |
| 0x2760 | 0x85 | 0x82 | 0x8B | 0x84 |
| 0x2761 | 0x86 | 0x83 | 0x8B | 0x84 |
| 0x2762 | 0x0A | 0x11 | 0x14 | 0x05 |
| 0x2763 | 0x0A | 0x11 | 0x14 | 0x07 |
| 0x2764 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2765 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2766 | 0x0A | 0x14 | 0x12 | 0x13 |
| 0x2767 | 0x0A | 0x14 | 0x12 | 0x13 |
| 0x2768 | 0x0A | 0x14 | 0x12 | 0x13 |
| 0x2769 | 0x14 | 0x13 | 0x15 | 0x64 |
| 0x276A | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x276B | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x276C | 0x0A | 0x14 | 0x12 | 0x13 |
| 0x276D | 0x0A | 0x1A | 0x24 | 0x35 |
| 0x276E | 0x0A | 0x1A | 0x24 | 0x35 |
| 0x276F | 0x85 | 0x82 | 0x8B | 0x84 |
| 0x2770 | 0x85 | 0x82 | 0x8B | 0x84 |
| 0x2771 | 0x85 | 0x82 | 0x8B | 0x84 |
| 0x2772 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2773 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2774 | 0x0A | 0x14 | 0x8C | 0x22 |
| 0x2775 | 0x0A | 0x1A | 0x20 | 0x21 |
| 0x2776 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2777 | 0x0A | 0x1A | 0x1F | 0x1E |
| 0x2778 | 0x0A | 0x12 | 0x0B | 0x14 |
| 0x2779 | 0x0A | 0x1A | 0x1F | 0x22 |
| 0x277A | 0x0A | 0x12 | 0x0B | 0x14 |
| 0x277B | 0x0A | 0x1A | 0x1F | 0x22 |
| 0x277C | 0x0A | 0x1A | 0x1F | 0x22 |
| 0x277D | 0x0A | 0x14 | 0x24 | 0x12 |
| 0x277E | 0x0A | 0x23 | 0x1A | 0x12 |
| 0x277F | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x2780 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x2781 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x2782 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x2783 | 0x0A | 0x13 | 0x15 | 0x71 |
| 0x2785 | 0x0A | 0x15 | 0x26 | 0x27 |
| 0x2786 | 0x0A | 0x28 | 0x24 | 0x27 |
| 0x2787 | 0x0A | 0x28 | 0x24 | 0x26 |
| 0x2788 | 0x0A | 0x1A | 0x70 | 0x14 |
| 0x2789 | 0x0A | 0x1A | 0x0B | 0x8C |
| 0x278A | 0x12 | 0x13 | 0x24 | 0x14 |
| 0x278B | 0x25 | 0x13 | 0x24 | 0x72 |
| 0x278C | 0x0A | 0x12 | 0x24 | 0x73 |
| 0x278D | 0x0A | 0x12 | 0x24 | 0x74 |
| 0x278E | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x278F | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x2790 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2791 | 0x14 | 0x26 | 0x64 | 0x76 |
| 0x2792 | 0x14 | 0x13 | 0x15 | 0x28 |
| 0x2793 | 0x14 | 0x13 | 0x15 | 0x28 |
| 0x2794 | 0x14 | 0x12 | 0x15 | 0x28 |
| 0x2795 | 0x14 | 0x13 | 0x15 | 0x64 |
| 0x2796 | 0x14 | 0x13 | 0x26 | 0x65 |
| 0x2797 | 0x14 | 0x13 | 0x26 | 0x65 |
| 0x2798 | 0x14 | 0x13 | 0x64 | 0x76 |
| 0x2799 | 0x0A | 0x14 | 0x13 | 0x23 |
| 0x279A | 0x0A | 0x14 | 0x13 | 0x23 |
| 0x279B | 0x0A | 0x12 | 0x13 | 0x74 |
| 0x279C | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x279D | 0x0A | 0x12 | 0x14 | 0x6B |
| 0x279E | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x279F | 0x0A | 0x12 | 0x14 | 0x6B |
| 0x27A0 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27A1 | 0x85 | 0x82 | 0x8B | 0x84 |
| 0x27A2 | 0x25 | 0x13 | 0x24 | 0x72 |
| 0x27A3 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27A4 | 0x0A | 0x12 | 0x14 | 0x8C |
| 0x27A6 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x27A7 | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x27A8 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x27A9 | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x27AA | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x27AB | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x27AC | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x27AD | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x27AE | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x27AF | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x27B0 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x27B1 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x27B3 | 0x11 | 0x15 | 0x13 | 0x35 |
| 0x27B4 | 0x0A | 0x0B | 0x24 | 0x75 |
| 0x27B5 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27B6 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27B7 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27B8 | 0x14 | 0x0A | 0x12 | 0x35 |
| 0x27B9 | 0x0A | 0x12 | 0x0B | 0x14 |
| 0x27BA | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27BB | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x27BC | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x27BD | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27BE | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27BF | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x27C0 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x27C1 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x27C2 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27C3 | 0x0A | 0x14 | 0x12 | 0x13 |
| 0x27C6 | 0x0A | 0x24 | 0x14 | 0x12 |
| 0x27C7 | 0x0A | 0x35 | 0x24 | 0x14 |
| 0x27C8 | 0x0A | 0x35 | 0x24 | 0x14 |
| 0x27C9 | 0x0A | 0x35 | 0x24 | 0x14 |
| 0x27CA | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27CB | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x27CC | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x27CD | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x27CE | 0x0A | 0x1A | 0x43 | 0x40 |
| 0x27CF | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D0 | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D1 | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D2 | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D3 | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D4 | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D5 | 0x0A | 0x1A | 0x14 | 0x15 |
| 0x27D6 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27D7 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27D8 | 0x0A | 0x12 | 0x14 | 0x35 |
| 0x27D9 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27DA | 0x14 | 0xBA | 0x0A | 0x13 |
| 0x27DC | 0x0A | 0x12 | 0x14 | 0x8C |
| 0x27E1 | 0x1B | 0x1C | 0x23 | 0x1F |
| 0x27E2 | 0x0A | 0x1A | 0x8D | 0x90 |
| 0x27E3 | 0x0A | 0x1A | 0x8E | 0x8F |
| 0x27E4 | 0x0A | 0x1A | 0x8D | 0x90 |
| 0x27E5 | 0x0A | 0x1A | 0x8E | 0x8F |
| 0x27E6 | 0x0A | 0x1A | 0x14 | 0x80 |
| 0x27E7 | 0x0A | 0x1A | 0x14 | 0x81 |
| 0x27E8 | 0x0A | 0x1A | 0x77 | 0x81 |
| 0x27E9 | 0x0A | 0x1A | 0x14 | 0x80 |
| 0x27EA | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27EB | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27EC | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27ED | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27EE | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27EF | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27F0 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x27F1 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x27F2 | 0x0A | 0x3C | 0x14 | 0x0B |
| 0x27F3 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27F4 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27F5 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x27F6 | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x27F7 | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x27F8 | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x27F9 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27FA | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x27FB | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27FD | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x27FE | 0x0A | 0x1A | 0x14 | 0x81 |
| 0x27FF | 0x0A | 0x1A | 0x77 | 0x81 |
| 0x280A | 0x0A | 0x12 | 0x1A | 0x00 |
| 0x280D | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x280E | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x280F | 0x0A | 0x12 | 0x6C | 0x6E |
| 0x2810 | 0x0A | 0x15 | 0x1F | 0x23 |
| 0x2811 | 0x0A | 0x14 | 0x13 | 0x0B |
| 0x2812 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x2814 | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x2815 | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x2816 | 0x0A | 0x15 | 0x1F | 0x23 |
| 0x281D | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x281E | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x281F | 0x0A | 0x12 | 0x1A | 0x23 |
| 0x2820 | 0x0A | 0x12 | 0x1A | 0x23 |
| 0x2823 | 0x2D | 0xA8 | 0x29 | 0x0B |
| 0x2824 | 0x2E | 0xA9 | 0x2A | 0x0B |
| 0x2828 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x2829 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x282A | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x282B | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x282C | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x282E | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x2832 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x2833 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x2834 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x2835 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x2836 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x2837 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x2838 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2839 | 0x0A | 0x14 | 0x3C | 0x35 |
| 0x283A | 0x0A | 0x14 | 0x12 | 0x3C |
| 0x283B | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x283C | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x283D | 0x0A | 0x14 | 0x13 | 0x0B |
| 0x283E | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2841 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x284F | 0x0A | 0x1A | 0x70 | 0x14 |
| 0x2850 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2851 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2852 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2853 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2854 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2855 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2856 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2857 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2858 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2859 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x285A | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x285B | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x285C | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x285D | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x285E | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x285F | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2860 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2861 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2862 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2863 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2865 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x2866 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x286F | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2870 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2871 | 0x0A | 0x12 | 0x14 | 0x8C |
| 0x2872 | 0x0A | 0x12 | 0x14 | 0x8C |
| 0x2873 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2874 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2875 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2876 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2877 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2878 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2879 | 0x0A | 0x12 | 0x2C | 0x2A |
| 0x287A | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x287B | 0x0A | 0x12 | 0x2B | 0x29 |
| 0x287C | 0x0A | 0x14 | 0x12 | 0x35 |
| 0x287D | 0x0A | 0x12 | 0x14 | 0x3C |
| 0x287E | 0x0A | 0x12 | 0x1A | 0x35 |
| 0x287F | 0x0A | 0x0B | 0x24 | 0x75 |
| 0x2880 | 0x0A | 0x14 | 0x1A | 0x29 |
| 0x2881 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2882 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2883 | 0x0A | 0x1A | 0x3C | 0x35 |
| 0x28A0 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x28C8 | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x28C9 | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x28D2 | 0x0A | 0x14 | 0x12 | 0x35 |
| 0x28D3 | 0x0A | 0x14 | 0x35 | 0x75 |
| 0x28D4 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x28D5 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x28D7 | 0x0A | 0x14 | 0x13 | 0x0B |
| 0x28D8 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x28D9 | - | - | - | - |
| 0x28DA | - | - | - | - |
| 0x28DC | - | - | - | - |
| default | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | ---                                    |   | - | unsigned char | - | 1 | 1 | 0 |
| 0x01 | Regelstatus Bank1 (flglrs)           | 1 | 0-n | unsigned char | Regel | 1 | 1 | 0 |
| 0x02 | Regelstatus Bank2 (flglrs2)          | 1 | 0-n | unsigned char | Regel | 1 | 1 | 0 |
| 0x03 | Berechnete Last (rml)                | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x04 | Motortemperatur  (tmot)              | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x05 | Regelfaktor Bank1 (fr_u)             | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x06 | Adaptionsfaktor Bank1 (fra_u)        | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x07 | Regelfaktor Bank2 (fr2_u)            | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x08 | Adaptionsfaktor Bank2 (fra_u2)       | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x09 | ---                                    | - | - | unsigned char | - | 0 | 0 | 0 |
| 0x0A | Motordrehzahl (nmot)                 | /min | - | unsigned char | - | 40 | 1 | 0 |
| 0x0B | Fahrzeuggeschwindigkeit (vfzg_u)     | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x0C | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x0D | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x0E | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x0F | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x10 | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x11 | Luftmassenfluss (ml)                 | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0x12 | Motortemperatur (tmot)               | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x13 | Ansauglufttemperatur (tans)          | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x14 | Versorgungsspannung (ub)             | V | - | unsigned char | - | 0.0942 | 1 | 0 |
| 0x15 | Winkel DK bez. auf DK-Anschl. (wdkba) | % DK | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x16 | Sondenspannung v. Kat Bank1  (usvk)  | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x17 | Sondenspannung h. Kat Bank1  (ushk)  | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x18 | Sondenspannung v. Kat Bank2  (usvk2) | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x19 | Sondenspannung v. Kat Bank2  (ushk2) | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x1A | relative Luftfuellung (rl)           | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x1B | Spannung PWG Poti1 (upwg1_u)         | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1C | Spannung PWG Poti2 (upwg2_u)         | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1D | verdoppelte Spannung PWG Poti2 (upwg2d_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1E | skapfad                              | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x1F | eagspfad                             | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | mpfad                                | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | Istmoment bei M.-vergleich (mi_duf)  | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x22 | rstpfad                              | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | normierter Fahrpedalwinkel (wped)    | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x24 | Umgebungstemperatur (tumg)           | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x25 | Motortemp.-Ersatzwert aus Modell (tmew) | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x26 | Spannung DK-Poti1 (udkp1_u)          | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x27 | Spannung DK-Poti2 (udkp2_u)          | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x28 | Sollwert DK bez. auf unteren Anschl.(wdks) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x29 | Abgastemp. v. Kat aus Modell (tabgm) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2A | Abgastemp. v. Kat aus Modell Bank2(tabgm2) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2B | Kat-Temperatur aus Modell (tkatm)    | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2C | Kat-Temperatur aus Modell Bank2(tkatm2) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2D | Spannung LS-Heizung v. Kat (uhsv)    | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x2E | Spannung LS-Heizung v. Kat Bank2 (uhsv2) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x2F | Spannung LS-Heizung h. Kat (uhsh)    | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x30 | Spannung LS-Heizung h. Kat Bank2 (uhsh2) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x31 | Innerwiderstand LS v. Kat (rinv)     | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x32 | Innerwiderstand LS v. Kat Bank2 (rinv2) | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x33 | Innerwiderstand LS h. Kat (rinh)     | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x34 | Innerwiderstand LS v. Kat Bank2 (rinh2) | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x35 | Umgebungdruck (pu)                   | hPa | - | unsigned char | - | 5 | 1 | 0 |
| 0x36 | gef Periodendauer LS v. Kat (tpsvkmf) | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x37 | gef Periodendauer LS v. Kat B2 (tpsvkmf2) | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x38 | fr                                     |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x39 | fra                                    |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3A | fr2                                    |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3B | fra2                                   |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3C | Tankfuellstand (tfst)                | l | - | unsigned char | - | 1 | 1 | 0 |
| 0x3D | rl                                     | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x3E | Motortemperatur linear. (tmotlin)    | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x3F | Motortemp. Referenz aus Modell (tmrm) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x40 | Ist-Moment der Fkt-ueberwachung (mi-um) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x41 | Ist-Gang (gangi) |   | - | unsigned char | - | 1 | 1 | 0 |
| 0x42 | zul. ind. Moment vor Filter (mizuvfil) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x43 | ind. Sollmoment vor Begrenzung (mizsolv) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x64 | Winkel DK in Notluftpunkt (wdknlp)   | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x65 | Spannung Dk-Poti1 unt. Anschlag (udkp1a_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x66 | Integratorgradient Offset KR (igokr_u) | V/s | - | signed char | - | 23.844 | 1 | 0 |
| 0x67 | ADC-Spannung LS v. Kat (uusvk_u)     | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x68 | ADC-Spannung LS v. Kat Bank2 (uusvk2_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x69 | ADC-Spannung LS h. Kat (uushk_u)     | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x6A | ADC-Spannung LS h. Kat Bank2 (uushk2_u) | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x6B | Tastverhaelnis E-Luefter (taml)      | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x6C | wnwi1_u                                | Grad KW | - | signed char | - | 1 | 1 | 0 |
| 0x6D | wnwi2_u                                | Grad KW | - | signed char | - | 1 | 1 | 0 |
| 0x6E | adapt. Haltetastung NW (tanwrhf_0)   | % TV | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x6F | adapt. Haltetastung NW Bank2 (tanwrhf_1) | % TV | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x70 | vfzg2                                  | km/h | - | unsigned char | - | 1.25 | 1 | 0 |
| 0x71 | ADC HFM (adhfm)                        | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x72 | ADC TM  (adtm)                         | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x73 | ADC TA  (adta)                         | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x74 | ADC TKA (adtka)                        | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x75 | ADC DSU (addsu)                        | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x76 | Sollwert DK in NLP-Stellung (wdknlpr) | % DK | - | unsigned char | - | 0.3921 | 1 | 0 |
| 0x77 | Integratorw. KR Testimpuls (ikrmet)  | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x78 | gef. Kat-Temperatur aus Modell (tkatm) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x79 | gef. Kat-Temperatur aus Modell B2(tkatm2) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7A | gef. Abgastemperatur aus Modell (tabgmf) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7B | gef. Abgastemperatur aus Modell B2(tabgmf2) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7C | phlsnv                                 |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7D | phlsnv2                                |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7E | norm. Heizleistung LS h. Kat (phlsnh) |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7F | norm. Heizleistung LS h. Kat B2 (phlsnh2) |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x80 | Integratorgradient Nulltest KR (igod) | V/s | - | signed char | - | 23.844 | 1 | 0 |
| 0x81 | Integratorwert KR Messanfang (ikrma) | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x82 | Lambda-Sollwert (lamsons)            |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0x83 | Lambda-Sollwert Bank2 (lamsons2)     |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0x84 | Motorstarttemperatur (tmst)          | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x85 | Mittelwert Lambdaregelfaktor (frm)    |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x86 | Mittelwert Lambdaregelfaktor Bank2 (frm2) |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x87 | Mittelwert Sonde h. Kat (ahkat)      |   | - | unsigned char | - | 0.0039 | 1 | 0 |
| 0x88 | Mittelwert Sonde h. Kat Bank2(ahkat2)  |   | - | unsigned char | - | 0.0039 | 1 | 0 |
| 0x89 | I-Anteil verz. Reglerumsch.(tvlrhi)  | s | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x8A | I-Anteil verz. Reglerumsch.(tvlrhi2)  | s | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x8B | Fakt. Luftdichte TANS Hoehe (frhol_u) |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x8C | Zeit nach Start (tnse_u)             | s | - | unsigned char | - | 25.6 | 1 | 0 |
| 0x8D | norm. Referenzpegel KR SW-Zyl0 (rkrn_u_0) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x8E | norm. Referenzpegel KR SW-Zyl1 (rkrn_u_1) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x8F | norm. Referenzpegel KR SW-Zyl2 (rkrn_u_2) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x90 | norm. Referenzpegel KR SW-Zyl3 (rkrn_u_3) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x91 | norm. Referenzpegel KR SW-Zyl4 (rkrn_u_4) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x92 | norm. Referenzpegel KR SW-Zyl5 (rkrn_u_5) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x93 | norm. Referenzpegel KR SW-Zyl6 (rkrn_u_6) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x94 | norm. Referenzpegel KR SW-Zyl7 (rkrn_u_7) | V | - | unsigned char | - | 0.625 | 1 | 0 |
| 0x95 | Statusflag ti-Abschaltung (flgtiab)  |   | - | unsigned char | - | 1 | 1 | 0 |
| 0x96 | Fuellstand Kraftstofftank (fstt)     | l | - | unsigned char | - | 1 | 1 | 0 |
| 0x97 | Pumpenstrom Referenzleck (iptref)    | mA | - | unsigned char | - | 0.1953 | 1 | 0 |
| 0x98 | aktuelle Zeit Leckmessung (tdmlka)   | s | - | unsigned char | - | 1.6 | 1 | 0 |
| 0x99 | Pumpenstrom DM-TL Ventilpruefung (iptumv) | mA | - | unsigned char | - | 0.1953 | 1 | 0 |
| 0x9A | Differenz Pumpenstrom (iptgh)        | mA | - | unsigned char | - | 0.1953 | 1 | 0 |
| 0x9D | I-Anteil der stetigen LRHK (dlahi_u) |   | - | signed char | - | 0.000488 | 1 | 0 |
| 0x9E | I-Anteil der stetigen LRHK Bank2(dlahi2_u) |   | - | signed char | - | 0.000488 | 1 | 0 |
| 0x9F | Korrekturfak. LSU-Spannung (kusvk_u) | V | - | signed char | - | 0.004883 | 1 | 0 |
| 0xA0 | Korrekturfak. LSU-Spannung Bank2(kusvk2_u) | V | - | signed char | - | 0.004883 | 1 | 0 |
| 0xA1 | StatusByte LSU unplausibel (lsunpstat) | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0xA2 | StatusByte LSU unplausibel B2(lsunpstat2) | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0xA3 | Abgasmassenfluss gefiltert (msabg) | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0xA4 | Abgasmassenfluss gefiltert Bank2(msabg2) | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0xA5 | Abstellzeit (tabst_u)   | s | - | unsigned char | - | 256 | 1 | 0 |
| 0xA6 | LSU-Spannung vKat korr. (usvkk_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xA7 | LSU-Spannung vKat korr. Bank2(usvkk2_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xA8 | LSU-Spannung vKat (ADC) (uulsuv_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xA9 | LSU-Spannung vKat Bank2 (ADC)(uulsuv2_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xAA | Dynamikwert LSU-Sonde (dynlsu_u) |   | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xAB | Dynamikwert LSU-Sonde Bank2(dynlsu2_u) |   | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xAC | mult. Gemischadapt.fakt. unt.Ber.(frau_u) |   | - | unsigned char | - | 0.0078125 | 1 | 0 |
| 0xAD | mult. Gemischadapt.fakt. u.Ber. B2(frau2_u) |   | - | unsigned char | - | 0.0078125 | 1 | 0 |
| 0xAE | Regelabweichung Lambda (ladiff_u) |   | - | signed char | - | 0.00195 | 1 | 0 |
| 0xAF | Regelabweichung Lambda Bank2(ladiff2_u) |   | - | signed char | - | 0.00195 | 1 | 0 |
| 0xB0 | Lambdaamplitude nach Filterung (lamsam_u) |   | - | signed char | - | 0.00195 | 1 | 0 |
| 0xB1 | Lambdaamplitude n. Filter. Bank2(lamsam2_u) |   | - | signed char | - | 0.00195 | 1 | 0 |
| 0xB2 | Lambda-Istwert vKat (lamsoni_u) |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xB3 | Lambda-Istwert vKat Bank2(lamsoni2_u) |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xB4 | Absolutdruck Abgassystem (palsu_u) | hPa | - | unsigned char | - | 10 | 1 | 0 |
| 0xB5 | Absolutdruck Abgassystem Bank2(palsu2_u) | hPa | - | unsigned char | - | 10 | 1 | 0 |
| 0xB6 | gefilt. Abgastemperatur aus Modell (talsuf) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xB7 | gef. Abgastemperatur aus Modell B2(talsuf2) | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0xB8 | gef. LSU-Spannung vKat (uulsuf_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xB9 | gef. LSU-Spannung vKat Bank2 (uulsuf2_u) | V | - | unsigned char | - | 0.01953 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### VVTSTATUSBG2_2

| STATI | TEXT |
| --- | --- |
| 0x00 | Anschlaege werden gerade gelernt |
| 0x01 | Lernanforderung durch VVT-SG zurueckgewiesen |
| 0x02 | Lernen durch DME abgebrochen |
| 0x03 | Lernen durch VVT abgebrochen |
| 0x05 | Keine Anforderung zum Anschlaglernen |
| 0x06 | Lernvorgang beendet |
| 0x06 | Signal ungueltig |
| 0xXY | Fehlerhafter Status |

### EWSSTART

| STATI | TEXT |
| --- | --- |
| 0x00 | ME9.2 bereit, Startwert zu empfangen |
| 0x01 | kein freier Startwert mit Freigabe vorhanden |
| 0x02 | noch kein Startwert gespeichert |
| 0x03 | Startwert nicht plausibel (wie im DS2-LH definiert) |
| 0xXY | Fehlerhafter Status |

### EWSEMPFANGSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Startwertprogrammierung bzw. -ruecksetzen war erfolgreich |
| 0x01 | falscher Startwert beim Ruecksetzen (EWS u. DME passen ni. zusammen)  |
| 0x02 | Telegramminhalt war kein Startwert (event. Wechselcode) |
| 0x03 | Schnittstellenfehler DWA: Frame o. Parity oder kein Signal (Timeout) |
| 0x04 | Prozess laeuft |
| 0x05 | Programmierung bzw. Ruecksetzen im Fahrzyklus noch nicht ausgefuehrt |
| 0x06 | gleiche Zufallszahl wie bei vorherigem Ruecksetzen trotz Weiterschaltung |
| 0x07 | noch kein Startwert programmiert |
| 0x10 | Startwert nicht korrekt in Flash programmiert |
| 0x11 | Wechselcode nicht korrekt in EEPROM-Spiegel programmiert |
| 0x12 | Zufallszahl nicht korrekt in EEPROM-Spiegel programmiert |
| 0x20 | Fehler bei Startwertprogrammierroutine |
| 0x21 | 2-aus-3-Startwertablage im Flash nicht in Ordnung |
| 0x22 | Ablage im EEPROM-Spiegel nicht in Ordnung |
| 0xXY | Fehlerhafter Status |

### REGEL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | --                                                                    |
| 0x01 | Regelung AUS, Einschaltbedingung noch nicht erfuellt |
| 0x02 | Regelung EIN |
| 0x04 | Regelung AUS wegen Fahrbedingung |
| 0x08 | Regelung AUS wegen erkanntem Fehler |
| 0x10 | Regelung EIN mit Einschraenkung |
| 0xXY | ??                          |

### SLSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Systemtest SLS laeuft |
| 0x01 | Systemtest kann nicht gestartet werden |
| 0x02 | Funktionsanforderung vorhanden |
| 0x05 | Systemtest ist nicht gestartet |
| 0x06 | Systemtest SLS ist beendet |
| 0xXY | Status Systemtest SLS kann nicht ausgegeben werden |

### TEVSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Systemtest TEV laeuft |
| 0x01 | Systemtest kann nicht gestartet werden |
| 0x05 | Systemtest ist nicht gestartet |
| 0x06 | Systemtest TEV ist beendet |
| 0xXY | Status Systemtest TEV kann nicht ausgegeben werden |

### STAGEDMTL

| STAGE | TEXT |
| --- | --- |
| 0x00 | Funktion laeuft |
| 0x01 | Referenzleckmessung laeuft |
| 0x02 | Grobleckpruefung laeuft |
| 0x03 | Feinstleckpruefung laeuft |
| 0x04 | Referenzleckmessung 2 laeuft |
| 0x05 | Funktion nicht aktiv |
| 0x06 | Funktion beendet |
| 0x0A | Funktion kann nicht gestartet werden |
| 0x0B | Funktion nicht startbar  --> Ubatt ausserhalb Bereich |
| 0x0C | Funktion nicht startbar  --> Schwankung Referenzstrom zu gross |
| 0x0D | Funktion nicht startbar  --> Elektrische Fehler liegen vor |
| 0x0E | Funktion nicht startbar  --> max. Diagnosedauer erreicht |
| 0x14 | Funktion wurde abgebrochen |
| 0x15 | Abbruch  -->  Betankung erkannt |
| 0x16 | Abbruch  -->  Tankdeckel geoeffnet |
| 0x17 | Abbruch  -->  Ubatt-Schwankung zu gross |
| 0x18 | Abbruch  -->  Bedingung Kl.15 AUS/EIN erkannt |
| 0xXY | Stagepointer unbekannt |

### STAGEDMTLFREEZE

| STAGE | TEXT |
| --- | --- |
| 0x00 | Funktion laeuft |
| 0x01 | Referenzleckmessung |
| 0x02 | Grobleckpruefung |
| 0x03 | Feinstleckpruefung |
| 0x04 | Referenzleckmessung 2 |
| 0x05 | Funktion nicht aktiv |
| 0x06 | Funktion beendet |
| 0x0A | Funktion kann nicht gestartet werden |
| 0x0B | Funktion war nicht startbar  --> Ubatt ausserhalb Bereich |
| 0x0C | Funktion war nicht startbar  --> Schwankung Referenzstrom zu gross |
| 0x0D | Funktion war nicht startbar  --> Elektrische Fehler liegen vor |
| 0x0E | Funktion war nicht startbar  --> max. Diagnosedauer erreicht |
| 0x0F | Funktion war nicht startbar  --> keine Grobleckfreigabe |
| 0x14 | Funktion wurde abgebrochen |
| 0x15 | Abbruch  -->  Betankung erkannt |
| 0x16 | Abbruch  -->  Tankdeckel geoeffnet |
| 0x17 | Abbruch  -->  Ubatt-Schwankung zu gross |
| 0x18 | Abbruch  -->  Bedingung Kl.15 AUS/EIN erkannt |
| 0x1E | Funktion beendet, Dicht erkannt |
| 0x1F | Funktion beendet, Feinleck erkannt |
| 0x20 | Funktion beendet, Grobleck erkannt |
| 0x21 | Funktion beendet, Modulfehler erkannt |
| 0x22 | Funktion beendet, kein Grobleck erkannt |
| 0xXY | Stagepointer unbekannt |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x2713 | 0x04 | 0x03 | 0x02 | 0x01 |
| 0x2715 | 0x05 | 0x06 | 0x07 | 0x08 |
| 0x271A | 0x04 | 0x09 | 0x0A | 0x0B |
| 0x271D | 0x05 | 0x06 | 0x07 | 0x08 |
| 0x2722 | 0x04 | 0x09 | 0x0A | 0x0B |
| 0x2737 | 0x1B | 0x1C | 0x1D | 0x1E |
| 0x27A4 | 0x18 | 0x19 | 0x1A | 0x01 |
| 0x27C3 | 0x15 | 0x16 | 0x17 | 0x01 |
| 0x27DA | 0x0C | 0x0D | 0x02 | 0x0E |
| 0x27DC | 0x04 | 0x1F | 0x20 | 0x21 |
| 0x2823 | 0x04 | 0x03 | 0x02 | 0x01 |
| 0x2824 | 0x04 | 0x03 | 0x02 | 0x01 |
| 0x283A | 0x11 | 0x12 | 0x13 | 0x14 |
| 0x28D7 | 0x0F | 0x10 | 0x02 | 0x01 |
| 0xFFFF | 0x04 | 0x03 | 0x02 | 0x01 |

### FARTTXT_ERW

| ARTNR | TEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x03 | kein Signal oder Wert |
| 0x04 | unplausibles Signal oder Wert |
| 0x05 | mangelnde Signalbereitschaft |
| 0x06 | Lastabfall |
| 0x07 | Kurzschluss Masse |
| 0x08 | Kurzschluss UBatt |
| 0x09 | Heizereinkopplung Signalpfad |
| 0x0A | geringe Signaldynamik |
| 0x0B | Signal-Offset |
| 0x0C | Fehler mechanisch |
| 0x0D | Fehler elektrisch |
| 0x0E | Uebertemperatur |
| 0x0F | Generatortyp unplausibel |
| 0x10 | Kommunikationsverlust |
| 0x11 | Messfehler Oelzustand |
| 0x12 | Kommunikationsfehler BSD |
| 0x13 | Messfehler Oelniveau |
| 0x14 | Messfehler Oeltemperatur |
| 0x15 | Signal unplausibel |
| 0x16 | Signal abgefallen |
| 0x17 | Warnschwelle Oelverlust ausgeloest |
| 0x18 | Empfangsfehler serielle Schnittstelle (Paritybit > 3x) |
| 0x19 | Timeout EWS-Telegramm (kein Signal innerhalb 10s nach Kl.15 ein) |
| 0x1A | Empfangsfehler serielle Schnittstelle (Frame- oder Stopbit > 3x) |
| 0x1B | WC passt nicht zum erwarteten WC (Fangbereichsueberschreitung) |
| 0x1C | falscher Startwert vorhanden (Manipulation bei STW Progr./Ruecksetzen) |
| 0x1D | noch kein Startwert programmiert |
| 0x1E | Startwert nicht eindeutig erkennbar (Fehler in 2-aus-3-Auswahl) |
| 0x1F | Schreibfehler EEPROM (3 Fehlversuche beim Schreiben ins EEPROM) |
| 0x20 | WC-Ablage fehlerhaft im EXRAM (2-aus-3-Auswahl) |
| 0x21 | Lesefehler EEPROM (3 Fehlversuche beim Lesen aus EEPROM) |
| 0xFF | unbekannte Fehlerart |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x10 | Testbedingungen erfuellt |
| 0x11 | Testbedingungen noch nicht erfuellt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

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
| ?A0? | ERROR_KONCEPT |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### FEHLERCODES

| CODE | FEHLERTEXT |
| --- | --- |
| 0x00 | ---                                          |
| 0x10 | generalReject                                |
| 0x11 | ServiceNotSupported                          |
| 0x12 | subFunctionNotSupported-invalidFormat        |
| 0x21 | busy-repeatRequest                           |
| 0x22 | conditionsNotCorrectOrRequestSequenceError   |
| 0x23 | routineNotComplete                           |
| 0x31 | requestOutOfRange                            |
| 0x33 | SecurityAccessDenied-securityAccessRequested |
| 0x35 | invalidKey                                   |
| 0x36 | exeedNumberOfAttempts                        |
| 0x37 | requiredTimeDelayNotExpired                  |
| 0x40 | downloadNotAccepted                          |
| 0x41 | improperDownloadType                         |
| 0x42 | canNotDownloadToSpecifiedAddress             |
| 0x43 | canNotDownloadNumberOfBytesRequested         |
| 0x50 | uploadNotAccepted                            |
| 0x51 | improperUploadType                           |
| 0x52 | canNotUploadFromSpecifiedAddress             |
| 0x53 | canNotUploadNumberOfBytesRequested           |
| 0x71 | tranferSuspended                             |
| 0x72 | tranferAborted                               |
| 0x74 | illegalAddressInBlockTransfer                |
| 0x75 | illegalByteCountInBlockTransfer              |
| 0x76 | illegalBlockTransferType                     |
| 0x77 | blockTransferDataChecksumError               |
| 0x78 | requestCorrectlyReceived-ResponsePending     |
| 0x79 | incorrectByteCountDuringBlockransfer         |
| 0x80 | serviceNotSupportedInActiveDiagnosticMode    |
| 0xXY | unbekannter Rueckgabewert (ResponseCode)      |

### BETRIEBSWTAB

| NAME | TELEGRAM | POS_ADR | LEN_ADR | ADR | BYTE | DATA_TYPE | COMPU_TYPE | FACT_A | FACT_B | MASK | VALUE | MEAS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TI_W | B812F103224000 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.016 | 0 | 0 | 0 | ms |
| FR_W | B812F103224000 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.0000305 | 0 | 0 | 0 |   |
| FR2_W | B812F103224000 | 0 | 0 | 0x00 | 11 | 5 | -- | 0.0000305 | 0 | 0 | 0 |   |
| VFZG | B812F103224000 | 0 | 0 | 0x00 | 13 | 2 | -- | 1.25 | 0 | 0 | 0 | km/h |
| NMOT_W | B812F103224000 | 0 | 0 | 0x00 | 14 | 5 | -- | 0.25 | 0 | 0 | 0 | min-1 |
| NSOL | B812F103224000 | 0 | 0 | 0x00 | 16 | 2 | -- | 10 | 0 | 0 | 0 | min-1 |
| WNWI_0 | B812F103224000 | 0 | 0 | 0x00 | 17 | 7 | -- | 0.0039 | 0 | 0 | 0 | GradKW |
| WNWI_1 | B812F103224000 | 0 | 0 | 0x00 | 19 | 7 | -- | 0.0039 | 0 | 0 | 0 | GradKW |
| TANS | B812F103224000 | 0 | 0 | 0x00 | 21 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| TMOT | B812F103224000 | 0 | 0 | 0x00 | 22 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| ZWOUT | B812F103224000 | 0 | 0 | 0x00 | 23 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad |
| WDKBA | B812F103224000 | 0 | 0 | 0x00 | 24 | 2 | -- | 0.39216 | 0 | 0 | 0 | % DK |
| MSHFM_W | B812F103224000 | 0 | 0 | 0x00 | 25 | 5 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| MIIST_W | B812F103224000 | 0 | 0 | 0x00 | 27 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| UB | B812F103224000 | 0 | 0 | 0x00 | 29 | 2 | -- | 0.095 | 0 | 0 | 0 | V |
| UPWG_W | B812F103224000 | 0 | 0 | 0x00 | 30 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| TKA | B812F103224000 | 0 | 0 | 0x00 | 32 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| RKRN_W_0 | B812F103224000 | 0 | 0 | 0x00 | 33 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_1 | B812F103224000 | 0 | 0 | 0x00 | 35 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_2 | B812F103224000 | 0 | 0 | 0x00 | 37 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_3 | B812F103224000 | 0 | 0 | 0x00 | 39 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_4 | B812F103224000 | 0 | 0 | 0x00 | 41 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_5 | B812F103224000 | 0 | 0 | 0x00 | 43 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_6 | B812F103224000 | 0 | 0 | 0x00 | 45 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| RKRN_W_7 | B812F103224000 | 0 | 0 | 0x00 | 47 | 5 | -- | 0.019531 | 0 | 0 | 0 | V |
| ILB | B812F103224001 | 0 | 0 | 0x00 | 7 | 7 | -- | 1 | 0 | 0 | 0 |   |
| LUTSFI1 | B812F103224003 | 0 | 0 | 0x00 | 7 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI2 | B812F103224003 | 0 | 0 | 0x00 | 9 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI3 | B812F103224003 | 0 | 0 | 0x00 | 11 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI4 | B812F103224003 | 0 | 0 | 0x00 | 13 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI5 | B812F103224003 | 0 | 0 | 0x00 | 15 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI6 | B812F103224003 | 0 | 0 | 0x00 | 17 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI7 | B812F103224003 | 0 | 0 | 0x00 | 19 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI8 | B812F103224003 | 0 | 0 | 0x00 | 21 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| B_FOR11 | B812F103224003 | 0 | 0 | 0x00 | 23 | 2 | -- | 1 | 0 | 0 | 0 |   |
| USVK | B812F103224003 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.0048818 | -1.0 | 0 | 0 | V |
| USVK2 | B812F103224003 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.0048818 | -1.0 | 0 | 0 | V |
| MSNDKO | B812F103224008 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| FKMSDKA | B812F103224008 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.00006103 | 0 | 0 | 0 |   |
| FKMSDK | B812F103224008 | 0 | 0 | 0x00 | 11 | 5 | -- | 0.00006103 | 0 | 0 | 0 |   |
| ENDE |  |  |  |  | 1 | 1 | -- | 1 | 0 | 0 | 0 |   |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_NSUB | 9 | 0x08 | 0x08 |
| B_DKPU | 9 | 0x10 | 0x10 |
| B_NFTEV | 9 | 0x20 | 0x20 |
| B_FHZ | 9 | 0x40 | 0x40 |
| B_NAC | 9 | 0x80 | 0x80 |
| B_KL15 | 7 | 0x01 | 0x01 |
| B_ESTART | 7 | 0x02 | 0x02 |
| B_KUPPL | 7 | 0x04 | 0x04 |
| B_BLS | 7 | 0x08 | 0x08 |
| B_BRS | 7 | 0x10 | 0x10 |
| B_LDPR | 7 | 0x20 | 0x20 |
| B_KO | 7 | 0x80 | 0x80 |
| B_LL | 7 | 0x01 | 0x01 |
| B_VL | 7 | 0x02 | 0x02 |
| B_SBBHK2 | 7 | 0x04 | 0x04 |
| B_SBBHK | 7 | 0x08 | 0x08 |
| B_SBBVK2 | 7 | 0x10 | 0x10 |
| B_SBBVK | 7 | 0x20 | 0x20 |
| B_LR2 | 7 | 0x40 | 0x40 |
| B_LR | 7 | 0x80 | 0x80 |
| B_KD | 8 | 0x04 | 0x04 |
| B_PN | 8 | 0x08 | 0x08 |
| B_EWS_OK | 8 | 0x10 | 0x10 |
| B_TEHB | 8 | 0x20 | 0x20 |
| B_SA | 8 | 0x40 | 0x40 |
| B_UMAERF | 8 | 0x80 | 0x80 |
