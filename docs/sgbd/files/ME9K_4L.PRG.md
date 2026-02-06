# ME9K_4L.PRG

## General

|  |  |
| --- | --- |
| File | ME9K_4L.PRG |
| Type | PRG |
| Jobs | 68 |
| Tables | 18 |
| Origin | BMW EA-33 Matthes |
| Revision | 0.5 |
| Author | BMW EA-33 Matthes |
| ECU Comment | SGBD fuer E65 |

## Info

_No INFO results._

## Jobs

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

### VVT_ANSTEUER

Lernen der VVT-Anschlaege

_No arguments._

### VVT_SYSTEM

Status Lernen VVT-Anschlaege

_No arguments._

### VVT_ENDE

Ende von Lernen der VVT-Anschlaege

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### WINDS2_FS_LESEN

Fehlerspeicher auslesen

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

### STEUERN_LDP

Stellgliedansteuerung LDP

_No arguments._

### STEUERN_LDP_AUS

Stellgliedansteuerung LDP aus

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

### STOP_COMM

Ende von Comm

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

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0001 | CDKLDPE - Leckage Diagnosepumpe Endstufe |
| 0x0002 | CDKDMMVE - Magnetventil DM-TL Endstufe |
| 0x0003 | CDKLSVV - Vertauschte Lambdasonden |
| 0x0004 | CDKHSH2 - Lambdasonden-Heizung hinter Kat (Bank2) |
| 0x0005 | CDKHSV2 - Lambdasonden-Heizung vor Kat (Bank2) |
| 0x0006 | CDKHSHE - Endstufe Heizung Sonde hinter Kat |
| 0x0007 | CDKHSHE2 - Endstufe Heizung Sonde hinter Kat (Bank2) |
| 0x000A | CDKLSV - Lambda-Sonde vor Kat |
| 0x000C | CDKLSH - Lambda-Sonde hinter Kat |
| 0x000D | CDKHSV - Lambdasonden-Heizung vor Kat |
| 0x000E | CDKHSH - Lambdasonden-Heizung hinter Kat |
| 0x000F | CDKLATP - Lambda-Sondenalterung Periodendauer |
| 0x0010 | CDKLATV - Lambda-Sondenalterung TV |
| 0x0011 | CDKLASH - Lambda-Sondenalterung h. Kat |
| 0x0012 | CDKLSV2 - Lambda-Sonde2 vor Kat |
| 0x0014 | CDKLSH2 - Lambda-Sonde2 hinter Kat |
| 0x0015 | CDKLATP2 - Lambda-Sondenalterung Periodendauer Bank2 |
| 0x0016 | CDKLATV2 - Lambda-Sondenalterung TV Bank2 |
| 0x0017 | CDKLASH2 - Lambda-Sondenalterung h. Kat Bank2 |
| 0x0018 | CDKFRAO - LR-Adaption multiplikativ Bereich2 |
| 0x0019 | CDKFRAO2 - LR-Adaption multipl. Bereich2 (Bank2) |
| 0x001A | CDKFRAU - LR-Adaption multiplikativ Bereich1 |
| 0x001B | CDKFRAU2 - LR-Adaption multipl. Bereich1 (Bank2) |
| 0x001C | CDKRKAT - LR-Adaption additiv pro Zeit |
| 0x001D | CDKRKAT2 - LR-Adaption additiv pro Zeit (Bank2) |
| 0x001E | CDKRKAZ - LR-Adaption additiv pro Zuendung |
| 0x001F | CDKRKAZ2 - LR-Adaption additiv pro Zuendung Bank2 |
| 0x0020 | CDKLLR - Leerlaufregelung fehlerhaft |
| 0x0021 | CDKENWS - Nockenwellensteuerung Einlass |
| 0x0022 | CDKENWS2 - NW-Steuerung Einlass B2 (8zyl)/Auslass (4zyl) |
| 0x0027 | CDKWFS - EWS3.3 Manipulationsschutz |
| 0x0028 | CDKKAT - Katalysator-Konvertierung |
| 0x0029 | CDKKATSP - Katalysator-Konvertierung LSU |
| 0x002A | CDKKATSP2 - Katalysator-Konvertierung LSU Bank2 |
| 0x002D | CDKKAT2 - Katalysator-Konvertierung (Bank2) |
| 0x002E | CDKATS - Signal Temperaturfuehler Abgas 1 |
| 0x002F | CDKATS2 - Signal Temperaturfuehler Abgas 2 |
| 0x0032 | CDKMD00 - Aussetzererkennung Zyl.1 in Zuendreihenfolge |
| 0x0033 | CDKMD01 - Aussetzererkennung Zyl.2 in Zuendreihenfolge |
| 0x0034 | CDKMD02 - Aussetzererkennung Zyl.3 in Zuendreihenfolge |
| 0x0035 | CDKMD03 - Aussetzererkennung Zyl.4 in Zuendreihenfolge |
| 0x0036 | CDKMD04 - Aussetzererkennung Zyl.5 in Zuendreihenfolge |
| 0x0037 | CDKMD05 - Aussetzererkennung Zyl.6 in Zuendreihenfolge |
| 0x0038 | CDKMD06 - Aussetzererkennung Zyl.7 in Zuendreihenfolge |
| 0x0039 | CDKMD07 - Aussetzererkennung Zyl.8 in Zuendreihenfolge |
| 0x003A | CDKMD08 - Aussetzererkennung Zyl.9 in Zuendreihenfolge |
| 0x003B | CDKMD09 - Aussetzererkennung Zyl.10 in Zuendreihenfolge |
| 0x003C | CDKMD10 - Aussetzererkennung Zyl.11 in Zuendreihenfolge |
| 0x003D | CDKMD11 - Aussetzererkennung Zyl.12 in Zuendreihenfolge |
| 0x003E | CDKMD - Aussetzererkennung, Summenfehler |
| 0x003F | CDKMDK - Aussetzer, Summenfehler, kundendienstrelevant |
| 0x0043 | CDKDZKU0 - Ueberwachung Zuender 1 in Zuendreihenfolge |
| 0x0044 | CDKDZKU1 - Ueberwachung Zuender 2 in Zuendreihenfolge |
| 0x0045 | CDKDZKU2 - Ueberwachung Zuender 3 in Zuendreihenfolge |
| 0x0046 | CDKDZKU3 - Ueberwachung Zuender 4 in Zuendreihenfolge |
| 0x0047 | CDKDZKU4 - Ueberwachung Zuender 5 in Zuendreihenfolge |
| 0x0048 | CDKDZKU5 - Ueberwachung Zuender 6 in Zuendreihenfolge |
| 0x0049 | CDKDZKU6 - Ueberwachung Zuender 7 in Zuendreihenfolge |
| 0x004A | CDKDZKU7 - Ueberwachung Zuender 8 in Zuendreihenfolge |
| 0x004B | CDKDZKU8 - Ueberwachung Zuender 9 in Zuendreihenfolge |
| 0x004C | CDKDZKU9 - Ueberwachung Zuender 10 in Zuendreihenfolge |
| 0x004D | CDKDZKU10 - Ueberwachung Zuender 11 in Zuendreihenfolge |
| 0x004E | CDKDZKU11 - Ueberwachung Zuender 12 in Zuendreihenfolge |
| 0x0050 | CDKSLS - Sekundaerluftsystem |
| 0x0051 | CDKSLS2 - Sekundaerluftsystem Bank2 |
| 0x0052 | CDKSLV - Sekudaerluftventil |
| 0x0053 | CDKSLV2 - Sekudaerluftventil Bank2 |
| 0x0054 | CDKSLPE - Endstufe Relais Sekundaerluftpumpe |
| 0x0055 | CDKSLVE - Sekunduerluftventil Endstufe |
| 0x0059 | CDKDVEFO - Federpruefung DK-Steller oeffnende Feder |
| 0x005D | CDKTES - Tankentlueftung functional check |
| 0x0062 | CDKTEVE - Tankentlueftungsventil Endstufe |
| 0x0063 | CDKTEVE2 - Tankentlueftungsventil Endstufe Bank2 |
| 0x0065 | CDKUFMV - Ueberwachung Momentenvergleich Ebene 2 |
| 0x0066 | CDKMFL - Schnittstelle MFL |
| 0x0067 | CDKUFSKA - Ueberwachung Rechnerfunktion |
| 0x0068 | CDKKUPPL - Schalter Kupplung |
| 0x0069 | CDKURRAM - RAM-Test fehlerhaft |
| 0x006A | CDKBREMS - Schalter Bremse |
| 0x006B | CDKURROM - ROM-Test fehlerhaft |
| 0x006C | CDKURRST - Reset von Rechnerueberwachung |
| 0x006D | CDKUB - Batteriespannung |
| 0x006E | CDKMDB - Momentenbegrenzung Ebene 1 |
| 0x006F | CDKN - Kurbelwellengeber |
| 0x0070 | CDKBM - Bezugsmarkengeber |
| 0x0071 | CDKPH - Nockenwellengeber Einlass |
| 0x0072 | CDKPH2 - Nockenwellengeber Auslass |
| 0x0073 | CDKLM - Heissfilmluftmassenmesser |
| 0x0075 | CDKDK - DK-Potentiometer |
| 0x0076 | CDKDK1P - Drosselklappenpoti 1 |
| 0x0077 | CDKDK2P - Drosselklappenpoti 2 |
| 0x0078 | CDKVFZ - Fahrzeuggeschwindigkeit |
| 0x0079 | CDKSWE - Schlechtwegstreckenerkennung |
| 0x007A | CDKTUM - Umgebungstemperatur |
| 0x007B | CDKTM - Motortemperatur |
| 0x007C | CDKTA - Ansauglufttemperatur |
| 0x007D | CDKTKA - Temperaturfuehler Kuehleraustritt |
| 0x007E | CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x0080 | CDKTGET - Getriebetemperatur |
| 0x0081 | CDKDVET - Tauscherkennung ohne Adaption |
| 0x0082 | CDKDVEL - DK Positionsueberwachung |
| 0x0083 | CDKDVER - DK-Steller Regelbereich |
| 0x0084 | CDKDVEE - DK-Steller Ansteuerung |
| 0x0085 | CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x0086 | CDKDVEU - Pruefung unterer Anschlag |
| 0x0087 | CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x0088 | CDKDVEN - Pruefung Notluftpunkt |
| 0x0089 | CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x008A | CDKDVEUW - Abbruch bei UMA-Wiederlernen |
| 0x008B | CDKTHM - Thermostat klemmt |
| 0x008C | CDKETS - Endstufe Thermostat Kennfeldkuehlung |
| 0x008D | CDKMLE - Endstufe Motorluefter |
| 0x008E | CDKAKRE - Endstufe Abgasklappe |
| 0x008F | CDKLUEA - Endstufe LuefterA |
| 0x0094 | CDKDWA - EWS3.3 Schnittstelle DME-EWS |
| 0x0096 | CDKEV1 - EV1 in Zuendreihenfolge |
| 0x0097 | CDKEV2 - EV2 in Zuendreihenfolge |
| 0x0098 | CDKEV3 - EV3 in Zuendreihenfolge |
| 0x0099 | CDKEV4 - EV4 in Zuendreihenfolge |
| 0x009A | CDKEV5 - EV5 in Zuendreihenfolge |
| 0x009B | CDKEV6 - EV6 in Zuendreihenfolge |
| 0x009C | CDKEV7 - EV7 in Zuendreihenfolge |
| 0x009D | CDKEV8 - EV8 in Zuendreihenfolge |
| 0x009E | CDKEV9 - EV9 in Zuendreihenfolge |
| 0x009F | CDKEV10 - EV10 in Zuendreihenfolge |
| 0x00A0 | CDKEV11 - EV11 in Zuendreihenfolge |
| 0x00A1 | CDKEV12 - EV12 in Zuendreihenfolge |
| 0x00A2 | CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x00A3 | CDKEGFE - Diagnose DK/HFM-Abgleich |
| 0x00A4 | CDKDSU - Drucksensor Umgebung |
| 0x00A5 | CDKENWSE - Endstufe Einlass-VANOS |
| 0x00A6 | CDKENWSE2 - Endstufe Einlass-VANOS Bank2 |
| 0x00A7 | CDKKPE - Endstufe Kraftstoffpumpen-Relais |
| 0x00A8 | CDKDDSS - Differenzdrucksensor Saugrohr |
| 0x00AA | CDKKOS - Endstufe Klimakompressorfreigabe zum Klima-SG |
| 0x00AB | CDKANWS - Nockenwellensteuerung Auslass-VANOS0 |
| 0x00AC | CDKANWS2 - Nockenwellensteuerung Auslass-VANOS Bank2 |
| 0x00AD | CDKANWSE - Endstufe Auslass-VANOS |
| 0x00AE | CDKANWSE2 - Endstufe Auslass-VANOS Bank2 |
| 0x00AF | CDKPH3 - Nockenwellengeber Einlass Bank2 |
| 0x00B0 | CDKPH4 - Nockenwellengeber Auslass Bank2 |
| 0x00B1 | CDKPHM - Master Nockenwellengeber |
| 0x00B2 | CDKKOSE - Endstufe Klimakompressorsteuerung |
| 0x00B3 | CDKTOENS  |
| 0x00B6 | CDKTESK - LDP Diagnose Feinleck |
| 0x00B7 | CDKTESG - LDP Diagnose Grobleck |
| 0x00B8 | CDKTESB - LDP System |
| 0x00B9 | CDKLDP - LDP Modul |
| 0x00BA | CDKDMPME - DM-TL Pumpenmotor Endstufe |
| 0x00BB | CDKDMTG - DM-TL Grobleck |
| 0x00BC | CDKDMTK - DM-TL Feinleck |
| 0x00BD | CDKDMTL - DM-TL Modul |
| 0x00CC | CDKWCA - EWS3.3 Wechselcode-Abspeicherung |
| 0x00D2 | CDKKS1 - Klopfsensor1 |
| 0x00D3 | CDKKS2 - Klopfsensor2 |
| 0x00D4 | CDKKS3 - Klopfsensor3 |
| 0x00D5 | CDKKS4 - Klopfsensor4 |
| 0x00D6 | CDKKRNT - Klopfregelung Nulltest |
| 0x00D7 | CDKKROF - Klopfregelung Offset |
| 0x00D8 | CDKKRTP - Klopfregelung Testimpuls |
| 0x00D9 | CDKKRNT2 - Klopfregelung Nulltest Bank2 |
| 0x00DA | CDKCHDEV  - CAN-Timeout HDEV |
| 0x00DB | CDKCTCU  - CAN-Timeout TCU |
| 0x00DC | CDKCGE  - CAN-Timeout EGS |
| 0x00DD | CDKCAS  - CAN-Timeout ASC/DSC |
| 0x00DE | CDKCINS  - CAN-Timeout Instrumentenkombination |
| 0x00DF | CDKCACC  - CAN-Timeout ACC |
| 0x00E0 | CDKAS - Plausibilitaet MSR-Eingriff |
| 0x00E1 | CDKACC - Plausibilitaet ACC-Eingriff |
| 0x00E3 | CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x00E4 | CDKCVVT2 - CAN-Timeout VVT-Steuergeraet Bank2 |
| 0x00E5 | CDKCDME - CAN-Timeout DME-Steuergeraet |
| 0x00E6 | CDKFPP - Pedalwertgeber |
| 0x00E7 | CDKFP1P - Pedalwertgeber Poti1 |
| 0x00E8 | CDKFP2P - Pedalwertgeber Poti2 |
| 0x00E9 | CDKSTAE - Startautomatik Endstufe |
| 0x00EA | CDKSTS - Startautomatik Eingang |
| 0x00ED | CDKSTA - Startautomatik |
| 0x00EE | CDKKROF2 - Klopfregelung Offset Bank2 |
| 0x00EF | CDKKRTP2 - Klopfregelung Testimpuls Bank2 |
| 0x00FA | CDKNWKW - Zuordnung Nockenwelle zur Kurbelwelle |
| 0x0102 | CDKTOL - Oeltemperatur |
| 0x010E | CDKSUE - Endstufe DISA |
| 0x0113 | CDKHSVSA - Heizung Lambdasonde vor Kat |
| 0x0114 | CDKHSVSA2 - Heizung Lambdasonde vor Kat Bank2 |
| 0x0118 | CDKCARS  - CAN-Timeout ARS |
| 0x0119 | CDKCCAS  - CAN-Timeout CAS |
| 0x011A | CDKCIHKA  - CAN-Timeout IHKA |
| 0x011B | CDKCPWML  - CAN-Timeout PWML |
| 0x011C | CDKCSZL  - CAN-Timeout SZL |
| 0x0122 | Plausibilitaet ASR-Moment |
| 0x0131 | CDKLUVE - Luftumfasste Einspritzventile Endstufe |
| 0x0140 | CDKDVFFS - VVT-Fuehrungssensor |
| 0x0141 | CDKDVFFS2 - VVT-Fuehrungssensor (Bank2) |
| 0x0142 | CDKDVFRS - VVT-Referenzsensor |
| 0x0143 | CDKDVFRS2 - VVT-Referenzsensor (Bank2) |
| 0x0144 | CDKDVPLA - VVT-Sensorplausibilisierung |
| 0x0145 | CDKDVPLA2 - VVT-Sensorplausibilisierung (Bank2) |
| 0x0146 | CDKDVUSE - VVT-Versorgungsspannung Sensor |
| 0x0147 | CDKDVUSE2 - VVT-Versorgungsspannung Sensor (Bank2) |
| 0x0148 | CDKDVLRN - VVT-Lernfunktion Anschlag |
| 0x0149 | CDKDVLRN2 - VVT-Lernfunktion Anschlag (Bank2) |
| 0x014A | CDKDVSTE - VVT-Stellgliedueberwachung |
| 0x014B | CDKDVSTE2 - VVT-Stellgliedueberwachung (Bank2) |
| 0x014C | CDKDVCAN - VVT-CAN-Kommunikation |
| 0x014D | CDKDVCAN2 - VVT-CAN-Kommunikation (Bank2) |
| 0x014E | CDKDVFSG - VVT-Steuergeraet interner Fehler |
| 0x014F | CDKDVFSG2 - VVT-Steuergeraet interner Fehler (Bank2) |
| 0x0150 | CDKDVEST - VVT-Endstufe |
| 0x0151 | CDKDVEST2 - VVT-Endstufe (Bank2) |
| 0x0152 | CDKDVULV - VVT-Leistungsversorgung |
| 0x0153 | CDKDVULV2 - VVT-Leistungsversorgung (Bank2) |
| 0x015F | CDKAGRE - AGR Ventil Endstufe |
| 0x0160 | CDKAGRF - AGR Ventil Ueberwachung |
| 0x0161 | CDKAGRL - AGR Ventil Lagesensor |
| 0x0162 | CDKAGRV - Diagnose AGR Ventil |
| 0x016A | CDKDSV - Drucksteuerventil Endstufe |
| 0x016C | CDKDSS - Drucksensor Saugrohr |
| 0x016E | CDKDSV - Drucksteuerventil |
| 0x016F | CDKDSKV - Hochdrucksensortest |
| 0x0172 | CDKMSV - Mengensteuerventil Endstufe |
| 0x0173 | CDKHDR - Raildruckregelung |
| 0x0190 | CDKKUE - Kraftstoffkreislaufumschaltung Endstufe |
| 0x01B8 | CDKFRST - LR-Abweichung  |
| 0x01B9 | CDKFRST2 - LR-Abweichung Bank2 |
| 0x01C2 | CDKDSL - Drucksensor Ladedruck |
| 0x01C3 | CDKDSVLU - Plausibilisierung Umgebungs- zu Ladedruck |
| 0x01C4 | CDKLDE - Ladedrucksteuerventil Endstufe |
| 0x01C5 | CDKUVSE - Endstufe Umluftventil Turbo |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | ja |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0001 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x0002 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x0003 | 0x29 | 0x8C | 0x06 | 0x08 |
| 0x0004 | 0x79 | 0x30 | 0x7F | 0x34 |
| 0x0005 | 0x7B | 0x2E | 0x7D | 0x32 |
| 0x0006 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0007 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x000A | 0x29 | 0x8C | 0x31 | 0x16 |
| 0x000C | 0x2B | 0x8C | 0x33 | 0x17 |
| 0x000D | 0x7A | 0x2D | 0x7C | 0x31 |
| 0x000E | 0x78 | 0x2F | 0x7E | 0x33 |
| 0x000F | 0x0A | 0x29 | 0x31 | 0x36 |
| 0x0010 | 0x0A | 0x29 | 0x31 | 0x36 |
| 0x0011 | 0x0A | 0x2B | 0x33 | 0x17 |
| 0x0012 | 0x2A | 0x8C | 0x32 | 0x18 |
| 0x0014 | 0x2C | 0x8C | 0x34 | 0x19 |
| 0x0015 | 0x0A | 0x2A | 0x32 | 0x37 |
| 0x0016 | 0x0A | 0x2A | 0x32 | 0x37 |
| 0x0017 | 0x0A | 0x2C | 0x34 | 0x19 |
| 0x0018 | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x0019 | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x001A | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x001B | 0x0A | 0x1A | 0x13 | 0x3C |
| 0x001C | 0x0A | 0x1A | 0x3C | 0x05 |
| 0x001D | 0x0A | 0x1A | 0x3C | 0x07 |
| 0x001E | 0x0A | 0x1A | 0x3C | 0x05 |
| 0x001F | 0x0A | 0x1A | 0x3C | 0x07 |
| 0x0020 | 0x0A | 0x1A | 0x14 | 0x15 |
| 0x0021 | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x0022 | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x0027 | 0x0A | 0x14 | 0x00 | 0x00 |
| 0x0028 | 0x88 | 0x89 | 0x06 | 0x3C |
| 0x0029 | 0x16 | 0x05 | 0x06 | 0x3C |
| 0x002A | 0x18 | 0x07 | 0x08 | 0x3C |
| 0x002D | 0x87 | 0x8A | 0x08 | 0x3C |
| 0x002E | 0x0A | 0x8C | 0x29 | 0x2B |
| 0x002F | 0x0A | 0x8C | 0x2A | 0x2C |
| 0x0032 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x0033 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x0034 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x0035 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x0036 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x0037 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x0038 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x0039 | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x003A | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x003B | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x003C | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x003D | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x003E | 0x0A | 0x1A | 0x12 | 0x3C |
| 0x003F | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0043 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0044 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0045 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0046 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0047 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0048 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0049 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x004A | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x004B | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x004C | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x004D | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x004E | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0050 | 0x85 | 0x82 | 0x8B | 0x84 |
| 0x0051 | 0x86 | 0x83 | 0x8B | 0x84 |
| 0x0052 | 0x0A | 0x11 | 0x14 | 0x05 |
| 0x0053 | 0x0A | 0x11 | 0x14 | 0x07 |
| 0x0054 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0055 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x005D | 0x0A | 0x1A | 0x24 | 0x35 |
| 0x0059 | 0x14 | 0x13 | 0x15 | 0x64 |
| 0x0062 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x0063 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x0065 | 0x0A | 0x1A | 0x20 | 0x21 |
| 0x0066 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x0067 | 0x0A | 0x1A | 0x1F | 0x1E |
| 0x0068 | 0x0A | 0x12 | 0x0B | 0x14 |
| 0x0069 | 0x0A | 0x1A | 0x1F | 0x22 |
| 0x006A | 0x0A | 0x12 | 0x0B | 0x14 |
| 0x006B | 0x0A | 0x1A | 0x1F | 0x22 |
| 0x006C | 0x0A | 0x1A | 0x1F | 0x22 |
| 0x006D | 0x0A | 0x14 | 0x24 | 0x12 |
| 0x006E | 0x0A | 0x23 | 0x1A | 0x12 |
| 0x006F | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x0070 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x0071 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x0072 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x0073 | 0x0A | 0x13 | 0x15 | 0x71 |
| 0x0075 | 0x0A | 0x15 | 0x26 | 0x27 |
| 0x0076 | 0x0A | 0x28 | 0x24 | 0x27 |
| 0x0077 | 0x0A | 0x28 | 0x24 | 0x26 |
| 0x0078 | 0x0A | 0x1A | 0x70 | 0x14 |
| 0x0079 | 0x0A | 0x1A | 0x0B | 0x8C |
| 0x007A | 0x12 | 0x13 | 0x24 | 0x14 |
| 0x007B | 0x25 | 0x13 | 0x24 | 0x72 |
| 0x007C | 0x0A | 0x12 | 0x24 | 0x73 |
| 0x007D | 0x0A | 0x12 | 0x24 | 0x74 |
| 0x007E | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0080 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x0081 | 0x14 | 0x26 | 0x64 | 0x76 |
| 0x0082 | 0x14 | 0x13 | 0x15 | 0x28 |
| 0x0083 | 0x14 | 0x13 | 0x15 | 0x28 |
| 0x0084 | 0x14 | 0x12 | 0x15 | 0x28 |
| 0x0085 | 0x14 | 0x13 | 0x15 | 0x64 |
| 0x0086 | 0x14 | 0x13 | 0x26 | 0x65 |
| 0x0087 | 0x14 | 0x13 | 0x26 | 0x65 |
| 0x0088 | 0x14 | 0x13 | 0x64 | 0x76 |
| 0x0089 | 0x0A | 0x14 | 0x13 | 0x23 |
| 0x008A | 0x0A | 0x14 | 0x13 | 0x23 |
| 0x008B | 0x0A | 0x12 | 0x13 | 0x74 |
| 0x008C | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x008D | 0x0A | 0x12 | 0x14 | 0x6B |
| 0x008E | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x008F | 0x0A | 0x12 | 0x14 | 0x6B |
| 0x0094 | 0x0A | 0x12 | 0x14 | 0x8C |
| 0x0096 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x0097 | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x0098 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x0099 | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x009A | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x009B | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x009C | 0x0A | 0x12 | 0x14 | 0x07 |
| 0x009D | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x009E | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x009F | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x00A0 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x00A1 | 0x0A | 0x12 | 0x14 | 0x05 |
| 0x00A2 | 0x14 | 0x0A | 0x13 | 0x12 |
| 0x00A3 | 0x11 | 0x15 | 0x13 | 0x35 |
| 0x00A4 | 0x0A | 0x0B | 0x24 | 0x75 |
| 0x00A5 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x00A6 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x00A7 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x00A8 | 0x14 | 0x0A | 0x12 | 0x35 |
| 0x00AA | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x00AB | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x00AC | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x00AD | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x00AE | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x00AF | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x00B0 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x00B1 | 0x0A | 0x12 | 0x24 | 0x14 |
| 0x00B2 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x00B3 | 0x0A | 0x14 | 0x12 | 0x13 |
| 0x00B6 | 0x0A | 0x24 | 0x14 | 0x12 |
| 0x00B7 | 0x0A | 0x35 | 0x24 | 0x14 |
| 0x00B8 | 0x0A | 0x35 | 0x24 | 0x14 |
| 0x00B9 | 0x0A | 0x35 | 0x24 | 0x14 |
| 0x00BA | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x00BB | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x00BC | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x00BD | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x00CC | 0x0A | 0x14 | 0x00 | 0x00 |
| 0x00D2 | 0x0A | 0x1A | 0x14 | 0x13 |
| 0x00D3 | 0x0A | 0x1A | 0x14 | 0x13 |
| 0x00D4 | 0x0A | 0x1A | 0x14 | 0x13 |
| 0x00D5 | 0x0A | 0x1A | 0x14 | 0x13 |
| 0x00D6 | 0x0A | 0x1A | 0x14 | 0x80 |
| 0x00D7 | 0x0A | 0x1A | 0x14 | 0x81 |
| 0x00D8 | 0x0A | 0x1A | 0x77 | 0x81 |
| 0x00D9 | 0x0A | 0x1A | 0x14 | 0x80 |
| 0x00DA | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x00DB | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x00DC | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x00DD | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x00DE | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x00DF | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x00E0 | 0x0A | 0x1A | 0x14 | 0x0B |
| 000xE1 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x00E3 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x00E4 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x00E5 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x00E6 | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x00E7 | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x00E8 | 0x0A | 0x23 | 0x1B | 0x1D |
| 0x00E9 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x00EA | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x00ED | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x00EE | 0x0A | 0x1A | 0x14 | 0x81 |
| 0x00EF | 0x0A | 0x1A | 0x77 | 0x81 |
| 0x00FA | 0x0A | 0x12 | 0x1A | 0x00 |
| 0x0102 | 0x0A | 0x12 | 0x13 | 0x14 |
| 0x010E | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x0113 | 0x0A | 0x7A | 0x78 | 0x8C |
| 0x0114 | 0x0A | 0x7B | 0x79 | 0x8C |
| 0x0118 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x0119 | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x011A | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x011B | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x011C | 0x0A | 0x1A | 0x14 | 0x8C |
| 0x0122 | 0x0A | 0x1A | 0x14 | 0x0B |
| 0x0131 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x0140 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0141 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0142 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0143 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0144 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0145 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0146 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0147 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0148 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0149 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x014A | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x014B | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x014C | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x014D | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x014E | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x014F | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0150 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0151 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0152 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x0153 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x015F | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x0160 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x0161 | 0x0A | 0x12 | 0x14 | 0x8C |
| 0x0162 | 0x0A | 0x12 | 0x14 | 0x8C |
| 0x016A | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x016C | 0x0A | 0x14 | 0x12 | 0x35 |
| 0x016E | 0x0A | 0x12 | 0x1A | 0x35 |
| 0x016F | 0x0A | 0x0B | 0x24 | 0x75 |
| 0x0172 | 0x0A | 0x1A | 0x35 | 0x3C |
| 0x0173 | 0x0A | 0x1A | 0x3C | 0x35 |
| 0x0190 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x01B8 | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x01B9 | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x01C2 | 0x0A | 0x14 | 0x12 | 0x35 |
| 0x01C3 | 0x0A | 0x14 | 0x35 | 0x75 |
| 0x01C4 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x01C5 | 0x0A | 0x12 | 0x14 | 0x0B |
| default | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | ---                                    |   | - | unsigned char | - | 1 | 1 | 0 |
| 0x01 | Regelstatus Bank1                    | 1 | 0-n | unsigned char | Regel | 1 | 1 | 0 |
| 0x02 | Regelstatus Bank2                    | 1 | 0-n | unsigned char | Regel | 1 | 1 | 0 |
| 0x03 | Berechnete Last                      | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x04 | Motortemperatur                      | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x05 | Regelfaktor Bank1                    | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x06 | Adaptionsfaktor Bank1                | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x07 | Regelfaktor Bank2                    | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x08 | Adaptionsfaktor Bank2                | - | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x09 | ---                                    | - | - | unsigned char | - | 0 | 0 | 0 |
| 0x0A | Motordrehzahl                        | /min | - | unsigned char | - | 40 | 1 | 0 |
| 0x0B | Fahrzeuggeschwindigkeit              | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x0C | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x0D | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x0E | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x0F | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x10 | ---                                    | 1 | - | unsigned char | - | 0 | 0 | 0 |
| 0x11 | Luftmassenfluss                      | kg/h | - | unsigned char | - | 4 | 1 | 0 |
| 0x12 | Motortemperatur                      | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x13 | Ansauglufttemperatur                 | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x14 | Versorgungsspannung                  | V | - | unsigned char | - | 0.0942 | 1 | 0 |
| 0x15 | Winkel DK bez. auf DK-Anschl.        | % DK | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x16 | Sondenspannung v. Kat Bank1          | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x17 | Sondenspannung h. Kat Bank1          | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x18 | Sondenspannung v. Kat Bank2          | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x19 | Sondenspannung v. Kat Bank2          | V | - | unsigned char | - | 0.00522 | 1 | -0.2 |
| 0x1A | relative Luftfuellung (rl)           | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x1B | Spannung PWG Poti1                   | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1C | Spannung PWG Poti2                   | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1D | verdoppelte Spannung PWG Poti2       | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x1E | skapfad                              | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x1F | eagspfad                             | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | mpfad                                | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | mi_duf                               | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x22 | rstpfad                              | bin | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | normierter Fahrpedalwinkel           | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x24 | Umgebungstemperatur                  | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x25 | Motortemp.-Ersatzwert aus Modell     | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x26 | Spannung DK-Poti1                    | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x27 | Spannung DK-Poti2                    | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x28 | Sollwert DK bez. auf unteren Anschl. | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0x29 | Abgastemp. v. Kat aus Modell         | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2A | Abgastemp. v. Kat aus Modell Bank2   | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2B | Kat-Temperatur aus Modell            | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2C | Kat-Temperatur aus Modell Bank2      | Grd C | - | unsigned char | - | 5 | 1 | -50 |
| 0x2D | uhsv                                   | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x2E | uhsv2                                  | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x2F | uhsh                                   | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x30 | uhsh2                                  | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x31 | rinv                                   | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x32 | rinv2                                  | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x33 | rinh                                   | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x34 | rinh2                                  | Ohm | - | unsigned char | - | 64 | 1 | 0 |
| 0x35 | Umgebungdruck                        | hPa | - | unsigned char | - | 5 | 1 | 0 |
| 0x36 | tpsvkmf                                | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x37 | tpsvkmf2                               | s | - | unsigned char | - | 0.04 | 1 | 0 |
| 0x38 | fr                                     |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x39 | fra                                    |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3A | fr2                                    |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3B | fra2                                   |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x3C | Tankfuellstand                       | l | - | unsigned char | - | 1 | 1 | 0 |
| 0x3D | rl                                     | % | - | unsigned char | - | 0.75 | 1 | 0 |
| 0x64 | wdknlp                                 | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x65 | udkp1a_u                               | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x66 | igokr_u                                | V/s | - | signed char | - | 23.844 | 1 | 0 |
| 0x67 | uusvk_u                                | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x68 | uusvk2_u                               | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x69 | uushk_u                                | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x6A | uushk2_u                               | V | - | unsigned char | - | 0.0195 | 1 | 0 |
| 0x6B | taml                                   | % | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x6C | wnwi1_u                                | Grad KW | - | signed char | - | 1 | 1 | 0 |
| 0x6D | wnwi2_u                                | Grad KW | - | signed char | - | 1 | 1 | 0 |
| 0x6E | tanwrhf_0_A                            | % TV | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x6F | tanwrhf_1_A                            | % TV | - | unsigned char | - | 0.3922 | 1 | 0 |
| 0x70 | vfzg2                                  | km/h | - | unsigned char | - | 1.25 | 1 | 0 |
| 0x71 | ADC HFM                                | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x72 | ADC TM                                 | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x73 | ADC TA                                 | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x74 | ADC TKA                                | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x75 | ADC DSU                                | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x76 | Sollwert DK-Winkel in NLP-Stellung   | % DK | - | unsigned char | - | 0.3921 | 1 | 0 |
| 0x77 | ikrmet                                 | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x78 | tkatmf                                 | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x79 | tkatmf2                                | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7A | tabgmf                                 | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7B | tabgmf2                                | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0x7C | phlsnv                                 |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7D | phlsnv2                                |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7E | phlsnh                                 |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x7F | phlsnh2                                |   | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x80 | igod                                   | V/s | - | signed char | - | 23.844 | 1 | 0 |
| 0x81 | ikrma                                  | V | - | unsigned char | - | 0.0196 | 1 | 0 |
| 0x82 | lamsons                                |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0x83 | lamsons2                               |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0x84 | tmst                                   | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0x85 | frm                                    |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x86 | frm2                                   |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x87 | Mittelwert Sonde h. Kat (ahkat)      |   | - | unsigned char | - | 0.0039 | 1 | 0 |
| 0x88 | Mittelwert Sonde h. Kat Bank2(ahkat2)  |   | - | unsigned char | - | 0.0039 | 1 | 0 |
| 0x89 | I-Anteil verz. Reglerumsch.(tvlrhi)  | s | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x8A | I-Anteil verz. Reglerumsch.(tvlrhi2)  | s | - | unsigned char | - | 0.01 | 1 | 0 |
| 0x8B | Fakt. Luftdichte TANS Hoehe (frhol_u) |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0x8C | Zeit nach Start (tnse_u)             | s | - | unsigned char | - | 25.6 | 1 | 0 |
| 0xXY | unbekannte UW | 1 | - | unsigned char | - | 1 | 1 | 0 |

### REGEL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | --                                                                    |
| 0x01 | Regelung AUS, Einschaltbedingung noch nicht erfuellt |
| 0x02 | Regelung EIN                                         |
| 0x04 | Regelung AUS wegen Fahrbedingung                     |
| 0x08 | Regelung AUS wegen erkanntem Fehler                  |
| 0x10 | Regelung EIN mit Einschraenkung                      |
| 0xXY | ??                          |

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

### FARTSTATUSTEXTE

| BITNR | BITTEXT |
| --- | --- |
| 0x00 | --                                                                    |
| 0x01 | Fehler momentan vorhanden   |
| 0x02 | Fehler geprueft             |
| 0x11 | E-Flag entprellt            |
| 0x12 | CARB-entprellt              |
| 0x13 | SCATT-aktiv                 |
| 0x14 | MIL ein                     |
| 0x15 | MIL blink                   |
| 0x16 | Fehler sporadisch           |

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

| NAME | LNAME | TELEGRAMM | BYTE | DATA_TYPE | MASK | VALUE | COMPU_TYPE | FACT_A | FACT_B | ANZ | MEAS | POS_ADR | ADR | JOBNAME |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TI_W | Einspritzzeit EV1              | B812F103224000 | 7 | 5 | 0 | 0 | -- | 0.016 | 0 | 4.2 | ms |  |  |  |
| FR_W | Lambdaregler1                  | B812F103224000 | 9 | 5 | 0 | 0 | -- | 0.0000305 | 0 | 2.4 |   |  |  |  |
| FR2_W | Lambdaregler2                  | B812F103224000 | 11 | 5 | 0 | 0 | -- | 0.0000305 | 0 | 2.4 |   |  |  |  |
| VFZG | Fahrzeuggeschwindigkeit        | B812F103224000 | 13 | 2 | 0 | 0 | -- | 1.25 | 0 | 3.1 | km/h |  |  |  |
| NMOT_W | Motordrehzahl                  | B812F103224000 | 14 | 5 | 0 | 0 | -- | 0.25 | 0 | 5.1 | min-1 |  |  |  |
| NSOL | LL-Solldrehzahl                | B812F103224000 | 16 | 2 | 0 | 0 | -- | 10 | 0 | 5.1 | min-1 |  |  |  |
| WNWI_0 | Nockenwellenposition Bank1     | B812F103224000 | 17 | 7 | 0 | 0 | -- | 0.0039 | 0 | 3.2 | GradKW |  |  |  |
| WNWI_1 | Nockenwellenposition Bank2     | B812F103224000 | 19 | 7 | 0 | 0 | -- | 0.0039 | 0 | 3.2 | GradKW |  |  |  |
| TANS | Ansauglufttemperatur           | B812F103224000 | 21 | 2 | 0 | 0 | -- | 0.75 | -48 | 3.1 | Grad C |  |  |  |
| TMOT | Motortemperatur                | B812F103224000 | 22 | 2 | 0 | 0 | -- | 0.75 | -48 | 3.1 | Grad C |  |  |  |
| ZWOUT | Zuendwinkel Zyl1               | B812F103224000 | 23 | 2 | 0 | 0 | -- | 0.75 | 0 | 3.1 | Grad |  |  |  |
| WDKBA | DK-Winkel                      | B812F103224000 | 24 | 2 | 0 | 0 | -- | 0.39216 | 0 | 3.2 | % DK |  |  |  |
| MSHFM_W | Luftmasse                      | B812F103224000 | 25 | 5 | 0 | 0 | -- | 0.1 | 0 | 3.1 | kg/h |  |  |  |
| MIIST_W | MIIST                          | B812F103224000 | 27 | 5 | 0 | 0 | -- | 0.0015259 | 0 | 3.3 | % |  |  |  |
| UB | Ubatt                          | B812F103224000 | 29 | 2 | 0 | 0 | -- | 0.095 | 0 | 3.3 | V |  |  |  |
| UPWG_W | Fahrerwunsch                   | B812F103224000 | 30 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.3 | V |  |  |  |
| TKA | Temperatur Kuehleraustritt      | B812F103224000 | 32 | 2 | 0 | 0 | -- | 0.75 | -48 | 3.1 | Grad C |  |  |  |
| RKRN_W_0 | norm. Ref.pegel Klopfr. Zyl.1  | B812F103224000 | 33 | 5 | 0 | 0 | -- | 0.019531 | 0 | 3.3 | V |  |  |  |
| RKRN_W_1 | norm. Ref.pegel Klopfr. Zyl.2  | B812F103224000 | 35 | 5 | 0 | 0 | -- | 0.019531 | 0 | 3.3 | V |  |  |  |
| RKRN_W_2 | norm. Ref.pegel Klopfr. Zyl.3  | B812F103224000 | 37 | 5 | 0 | 0 | -- | 0.019531 | 0 | 3.3 | V |  |  |  |
| RKRN_W_3 | norm. Ref.pegel Klopfr. Zyl.4  | B812F103224000 | 39 | 5 | 0 | 0 | -- | 0.019531 | 0 | 3.3 | V |  |  |  |
| RKRN_W_4 | norm. Ref.pegel Klopfr. Zyl.5  | B812F103224000 | 41 | 5 | 0 | 0 | -- | 0.019531 | 0 | 3.3 | V |  |  |  |
| RKRN_W_5 | norm. Ref.pegel Klopfr. Zyl.6  | B812F103224000 | 43 | 5 | 0 | 0 | -- | 0.019531 | 0 | 3.3 | V |  |  |  |
| RKRN_W_6 | norm. Ref.pegel Klopfr. Zyl.7  | B812F103224000 | 45 | 5 | 0 | 0 | -- | 0.019531 | 0 | 3.3 | V |  |  |  |
| RKRN_W_7 | norm. Ref.pegel Klopfr. Zyl.8  | B812F103224000 | 47 | 5 | 0 | 0 | -- | 0.019531 | 0 | 3.3 | V |  |  |  |
| ILB | Integrator Ladebilanz Batterie | B812F103224001 | 7 | 7 | 0 | 0 | -- | 1 | 0 | 4.3 |   |  |  |  |
| B_NAC | B_NAC (LL-Anheb. bei KA)       | B812F103224001 | 9 | 1 | 0x80 | 0x80 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_FHZ | B_FHZ (Frontscheibenheiz.)     | B812F103224001 | 9 | 1 | 0x40 | 0x40 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_NFTEV | B_NFTEV(N-Anh. erh. TE-Spuelen) | B812F103224001 | 9 | 1 | 0x20 | 0x20 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_DKPU | B_DKPU (DK_Pos. falsch (SKA))  | B812F103224001 | 9 | 1 | 0x10 | 0x10 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_NSUB | B_NSUB (N-Anheb. niedr. UBatt) | B812F103224001 | 9 | 1 | 0x08 | 0x08 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_KO | B_KO                           | B812F103224002 | 7 | 1 | 0x80 | 0x80 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_LDPR | B_LDPR                         | B812F103224002 | 7 | 1 | 0x20 | 0x20 | -- | 1 | 0 | 1.0 |   |  |  |  |
| S_BRS | S_BRS                          | B812F103224002 | 7 | 1 | 0x10 | 0x10 | -- | 1 | 0 | 1.0 |   |  |  |  |
| S_BLS | S_BLS                          | B812F103224002 | 7 | 1 | 0x08 | 0x08 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_KUPPL | B_KUPPL                        | B812F103224002 | 7 | 1 | 0x04 | 0x04 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_ESTART | B_ESTART                       | B812F103224002 | 7 | 1 | 0x02 | 0x02 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_KL15 | B_KL15                         | B812F103224002 | 7 | 1 | 0x01 | 0x01 | -- | 1 | 0 | 1.0 |   |  |  |  |
| LUTSFI1 | gefilterte Laufunruhen Zyl1    | B812F103224003 | 7 | 7 | 0 | 0 | -- | 0.0027756 | 0 | 3.3 | sec-1 |  |  |  |
| LUTSFI2 | gefilterte Laufunruhen Zyl2    | B812F103224003 | 9 | 7 | 0 | 0 | -- | 0.0027756 | 0 | 3.3 | sec-1 |  |  |  |
| LUTSFI3 | gefilterte Laufunruhen Zyl3    | B812F103224003 | 11 | 7 | 0 | 0 | -- | 0.0027756 | 0 | 3.3 | sec-1 |  |  |  |
| LUTSFI4 | gefilterte Laufunruhen Zyl4    | B812F103224003 | 13 | 7 | 0 | 0 | -- | 0.0027756 | 0 | 3.3 | sec-1 |  |  |  |
| LUTSFI5 | gefilterte Laufunruhen Zyl5    | B812F103224003 | 15 | 7 | 0 | 0 | -- | 0.0027756 | 0 | 3.3 | sec-1 |  |  |  |
| LUTSFI6 | gefilterte Laufunruhen Zyl6    | B812F103224003 | 17 | 7 | 0 | 0 | -- | 0.0027756 | 0 | 3.3 | sec-1 |  |  |  |
| LUTSFI7 | gefilterte Laufunruhen Zyl7    | B812F103224003 | 19 | 7 | 0 | 0 | -- | 0.0027756 | 0 | 3.3 | sec-1 |  |  |  |
| LUTSFI8 | gefilterte Laufunruhen Zyl8    | B812F103224003 | 21 | 7 | 0 | 0 | -- | 0.0027756 | 0 | 3.3 | sec-1 |  |  |  |
| B_FOR11 | Adaption abgeschlossen (LL)    | B812F103224003 | 23 | 2 | 0 | 0 | -- | 1 | 0 | 1.0 |   |  |  |  |
| USVK | Lambdasondenspannung v Kat     | B812F103224003 | 24 | 5 | 0 | 0 | -- | 0.0048818 | -1.0 | 3.3 | V |  |  |  |
| USVK2 | Lambdasondenspannung v Kat 2   | B812F103224003 | 26 | 5 | 0 | 0 | -- | 0.0048818 | -1.0 | 3.3 | V |  |  |  |
| RKAT_W | Gemischadaption additiv 1      | B812F103224004 | 7 | 7 | 0 | 0 | -- | 0.046875 | 0 | 4.1 | % |  |  |  |
| RKAT2_W | Gemischadaption additiv 2      | B812F103224004 | 9 | 7 | 0 | 0 | -- | 0.046875 | 0 | 4.1 | % |  |  |  |
| FRA_W | Gemischadaption multipl. 1     | B812F103224004 | 11 | 5 | 0 | 0 | -- | 0.0000305 | 0 | 4.1 | % |  |  |  |
| FRA2_W | Gemischadaption multipl. 2     | B812F103224004 | 13 | 5 | 0 | 0 | -- | 0.0000305 | 0 | 4.1 | % |  |  |  |
| PHLSNV | norm. Heizleist. L-Sonde vKat1 | B812F103224004 | 15 | 2 | 0 | 0 | -- | 0.01 | 0 | 1.2 |   |  |  |  |
| PHLSNV2 | norm. Heizleist. L-Sonde vKat2 | B812F103224004 | 16 | 2 | 0 | 0 | -- | 0.01 | 0 | 1.2 |   |  |  |  |
| PHLSNH | norm. Heizleist. L-Sonde hKat1 | B812F103224004 | 17 | 2 | 0 | 0 | -- | 0.01 | 0 | 1.2 |   |  |  |  |
| PHLSNH2 | norm. Heizleist. L-Sonde hKat2 | B812F103224004 | 18 | 2 | 0 | 0 | -- | 0.01 | 0 | 1.2 |   |  |  |  |
| TPLRVK_W | PeridenDauer L-Sonde v Kat1    | B812F103224004 | 19 | 5 | 0 | 0 | -- | 0.01 | 0 | 3.3 | s |  |  |  |
| TPLRVK2_W | PeridenDauer L-Sonde v Kat2    | B812F103224004 | 21 | 5 | 0 | 0 | -- | 0.01 | 0 | 3.3 | s |  |  |  |
| TATEIST | Tastverhaeltnis TEV             | B812F103224005 | 7 | 2 | 0 | 0 | -- | 0.39062 | 0 | 3.3 | % |  |  |  |
| THVAIST | Auszeit Sondenheizung v. Kat   | B812F103224005 | 8 | 2 | 0 | 0 | -- | 0.01 | 0 | 3.3 | s |  |  |  |
| THVAIST2 | Auszeit Sondenheizung v. Kat2  | B812F103224005 | 9 | 2 | 0 | 0 | -- | 0.01 | 0 | 3.3 | s |  |  |  |
| TANWR_0 | Tastverhaeltnis Vanos 1         | B812F103224005 | 10 | 2 | 0 | 0 | -- | 0.39216 | 0 | 3.3 | %TV |  |  |  |
| TANWR_1 | Tastverhaeltnis Vanos 2         | B812F103224005 | 11 | 2 | 0 | 0 | -- | 0.39216 | 0 | 3.3 | %TV |  |  |  |
| TAML | Tastverhaeltnis E-Luefter        | B812F103224005 | 12 | 2 | 0 | 0 | -- | 0.39216 | 0 | 3.3 | % |  |  |  |
| B_HSHE | B_HSHE                         | B812F103224005 | 13 | 1 | 0x80 | 0x80 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_HSHE2 | B_HSHE2                        | B812F103224005 | 13 | 1 | 0x40 | 0x40 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_HSVE | B_HSVE                         | B812F103224005 | 13 | 1 | 0x20 | 0x20 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_HSVE2 | B_HSVE2                        | B812F103224005 | 13 | 1 | 0x10 | 0x10 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_KOE | B_KOE                          | B812F103224005 | 13 | 1 | 0x08 | 0x08 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_SLP | B_SLP                          | B812F103224005 | 13 | 1 | 0x04 | 0x04 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_SLV | B_SLV                          | B812F103224005 | 13 | 1 | 0x02 | 0x02 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_LDPEIN | B_LDPEIN                       | B812F103224005 | 13 | 1 | 0x01 | 0x01 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_STA | B_STA                          | B812F103224005 | 14 | 1 | 0x80 | 0x80 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_ETR | B_ETR                          | B812F103224005 | 14 | 1 | 0x40 | 0x40 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_EKP | B_EKP                          | B812F103224005 | 14 | 1 | 0x20 | 0x20 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_EBL | B_EBL                          | B812F103224005 | 14 | 1 | 0x10 | 0x10 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_AKR | B_AKR                          | B812F103224005 | 14 | 1 | 0x08 | 0x08 | -- | 1 | 0 | 1.0 |   |  |  |  |
| WNWSP_W0 | Adaptionswinkel NW 0           | B812F103224006 | 7 | 7 | 0 | 0 | -- | 0.0039062 | 0 | 3.3 | Grd KW |  |  |  |
| WNWSP_W1 | Adaptionswinkel NW 1           | B812F103224006 | 9 | 7 | 0 | 0 | -- | 0.0039062 | 0 | 3.3 | Grd KW |  |  |  |
| WNWSP_W2 | Adaptionswinkel NW 2           | B812F103224006 | 11 | 7 | 0 | 0 | -- | 0.0039062 | 0 | 3.3 | Grd KW |  |  |  |
| WNWSP_W3 | Adaptionswinkel NW 3           | B812F103224006 | 13 | 7 | 0 | 0 | -- | 0.0039062 | 0 | 3.3 | Grd KW |  |  |  |
| WNWSP_W4 | Adaptionswinkel NW 4           | B812F103224006 | 15 | 7 | 0 | 0 | -- | 0.0039062 | 0 | 3.3 | Grd KW |  |  |  |
| WNWSP_W5 | Adaptionswinkel NW 5           | B812F103224006 | 17 | 7 | 0 | 0 | -- | 0.0039062 | 0 | 3.3 | Grd KW |  |  |  |
| WNWSP_W6 | Adaptionswinkel NW 6           | B812F103224006 | 19 | 7 | 0 | 0 | -- | 0.0039062 | 0 | 3.3 | Grd KW |  |  |  |
| WNWSP_W7 | Adaptionswinkel NW 7           | B812F103224006 | 21 | 7 | 0 | 0 | -- | 0.0039062 | 0 | 3.3 | Grd KW |  |  |  |
| B_LR | B_LR                           | B812F103224007 | 7 | 1 | 0x80 | 0x80 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_LR2 | B_LR2                          | B812F103224007 | 7 | 1 | 0x40 | 0x40 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_SBBVK | B_SBBVK                        | B812F103224007 | 7 | 1 | 0x20 | 0x20 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_SBBVK2 | B_SBBVK2                       | B812F103224007 | 7 | 1 | 0x10 | 0x10 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_SBBHK | B_SBBHK                        | B812F103224007 | 7 | 1 | 0x08 | 0x08 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_SBBHK2 | B_SBBHK2                       | B812F103224007 | 7 | 1 | 0x04 | 0x04 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_VL | B_VL                           | B812F103224007 | 7 | 1 | 0x02 | 0x02 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_LL | B_LL                           | B812F103224007 | 7 | 1 | 0x01 | 0x01 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_UMAERF | B_UMAERF                       | B812F103224007 | 8 | 1 | 0x80 | 0x80 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_SA | B_SA                           | B812F103224007 | 8 | 1 | 0x40 | 0x40 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_TEHB | B_TEHB                         | B812F103224007 | 8 | 1 | 0x20 | 0x20 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_EWS_OK | B_EWS_OK                       | B812F103224007 | 8 | 1 | 0x10 | 0x10 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_PN | B_PN                           | B812F103224007 | 8 | 1 | 0x08 | 0x08 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_KD | B_KD                           | B812F103224007 | 8 | 1 | 0x04 | 0x04 | -- | 1 | 0 | 1.0 |   |  |  |  |
| TNWSFI_U | VANOS Fruehverstellzeit         | B812F1022113 | 8 | 2 | 0 | 0 | -- | 0.01 | 0 | 3.2 | s |  |  |  |
| TNWSFI2_U | VANOS Fruehverstellzeit Bank2   | B812F1022113 | 9 | 2 | 0 | 0 | -- | 0.01 | 0 | 3.2 | s |  |  |  |
| TNWSSI_U | VANOS Spaetverstellzeit         | B812F1022113 | 10 | 2 | 0 | 0 | -- | 0.01 | 0 | 3.2 | s |  |  |  |
| TNWSSI2_U | VANOS Spaetverstellzeit Bank2   | B812F1022113 | 11 | 2 | 0 | 0 | -- | 0.01 | 0 | 3.2 | s |  |  |  |
| NUEMAX | Motorueberdrehzahlgrenzwert     | B812F1022103 | 6 | 5 | 0x00 | 0x00 | -- | 0.25 | 0 | 3.3 | min-1 |  |  |  |
| NMAX | aktuelles Drehzahlmaximum      | B812F1022103 | 8 | 5 | 0x00 | 0x00 | -- | 0.15625 | 0 | 3.3 | min-1 |  |  |  |
| KMSTNMAX | Km-Stand bei Ueberdrehzahl      | B812F1022103 | 10 | 5 | 0x00 | 0x00 | -- | 10 | 0 | 3.3 | km |  |  |  |
| ANZNMAX | Anzahl NMAX-Ueberschreitungen   | B812F1022103 | 12 | 2 | 0x00 | 0x00 | -- | 1 | 0 | 3.3 |   |  |  |  |
| B_ACC | B_ACC                          | B812F1022107 | 6 | 1 | 0x80 | 0x80 | -- | 1 | 0 | 1.0 |   |  |  |  |
| L_FGR | L_FGR                          | B812F1022107 | 6 | 1 | 0x40 | 0x40 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_FGRTWA | B_FGRTWA                       | B812F1022107 | 6 | 1 | 0x20 | 0x20 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_FGRTVE | B_FGRTVE                       | B812F1022107 | 6 | 1 | 0x10 | 0x10 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_FGRTSE | B_FGRTSE                       | B812F1022107 | 6 | 1 | 0x08 | 0x08 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_FGRTBE | B_FGRTBE                       | B812F1022107 | 6 | 1 | 0x04 | 0x04 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_FGRHSA | B_FGRHSA                       | B812F1022107 | 6 | 1 | 0x02 | 0x02 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_FGRAT | B_FGRAT                        | B812F1022107 | 6 | 1 | 0x01 | 0x01 | -- | 1 | 0 | 1.0 |   |  |  |  |
| MSNDKO | norm. Leckluftmassenstr. ue. DK | B812F103224008 | 7 | 5 | 0 | 0 | -- | 0.1 | 0 | 4.1 | kg/h |  |  |  |
| FKMSDKA | FKMSDKA                        | B812F103224008 | 9 | 5 | 0 | 0 | -- | 0.00006103 | 0 | 1.3 |   |  |  |  |
| FKMSDK | FKMSDK                         | B812F103224008 | 11 | 5 | 0 | 0 | -- | 0.00006103 | 0 | 1.3 |   |  |  |  |
| B_CDAGR | B_CDAGR                        | B812F1022105 | 6 | 1 | 0x80 | 0x80 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_CDHSV | B_CDHSV                        | B812F1022105 | 6 | 1 | 0x40 | 0x40 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_CDLSV | B_CDLSV                        | B812F1022105 | 6 | 1 | 0x20 | 0x20 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_CDSLS | B_CDSLS                        | B812F1022105 | 6 | 1 | 0x08 | 0x08 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_CDTES | B_CDTES                        | B812F1022105 | 6 | 1 | 0x04 | 0x04 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_KATH | B_KATH                         | B812F1022105 | 6 | 1 | 0x02 | 0x02 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_KATFZ | B_KATFZ                        | B812F1022105 | 6 | 1 | 0x01 | 0x01 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_AGRRDY | B_AGRRDY                       | B812F1022105 | 7 | 1 | 0x80 | 0x80 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_HSRDY | B_HSRDY                        | B812F1022105 | 7 | 1 | 0x40 | 0x40 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_LSRDY | B_LSRDY                        | B812F1022105 | 7 | 1 | 0x20 | 0x20 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_SLSRDY | B_SLSRDY                       | B812F1022105 | 7 | 1 | 0x08 | 0x08 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_TESRDY | B_TESRDY                       | B812F1022105 | 7 | 1 | 0x04 | 0x04 | -- | 1 | 0 | 1.0 |   |  |  |  |
| B_KATRDY | B_KATRDY                       | B812F1022105 | 7 | 1 | 0x01 | 0x01 | -- | 1 | 0 | 1.0 |   |  |  |  |
| WTSG | ADC SG-Innentemperatur         | B812F103304101 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UDST_W | ADC Tankdruck                  | B812F103304201 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UREFSP1_W | ADC Fahrerwunschversorgung 1   | B812F103304301 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| USHK2_W | ADC Lambdasondensp. h. Kat2    | B812F103304501 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UPWG1_W | ADC Fahrerwunsch 1             | B812F103304701 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UPWG2_W | ADC Fahrerwunsch 2             | B812F103304601 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| USHK_W | ADC Lambdasondensp. h. Kat     | B812F103304801 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| USVK_W | ADC Lambdasondensp. v. Kat     | B812F103304901 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| WUB | ADC Batteriespannung           | B812F103304A01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| USVK2_W | ADC Lambdasondensp. v. Kat2    | B812F103304B01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UDKP2_W | ADC DK-Poti 2                  | B812F103304C01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UDKP1V_W | ADC DK-Poti 1 Versorgung       | B812F103304D01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UDKP1_W | ADC DK-Poti 1                  | B812F103304E01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UHFM_W | ADC Heissluftmassenmesser       | B812F103304F01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| WTMOT | ADC Motortemperatur            | B812F103305001 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| WTANS | ADC Ansauglufttemperatur       | B812F103305101 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| WTKA | ADC Kuehlmitteltemp. Kuehlerausg | B812F103305201 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UREFSP2_W | ADC Fahrerwunschversorgung 2   | B812F103305401 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| USP1PLAUS | ADC AD-Ueberwachung             | B812F103305B01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UHSV | ADC Lambdasondenheizsp. v Kat  | B812F103305C01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UHSV2 | ADC Lambdasondenheizsp. v Kat2 | B812F103305D01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UHSH | ADC Lambdasondenheizsp. h Kat  | B812F103305E01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| UHSH2 | ADC Lambdasondenheizsp. h Kat2 | B812F103305F01 | 7 | 5 | 0 | 0 | -- | 0.0048828 | 0 | 3.2 | V |  |  |  |
| ENDE | unbekannte Variable |  | 1 | 1 | 0 | 0 | -- | 1 | 0 | 1.0 |   |  |  |  |

### WINDS2VAR

| VARNR | VARIABLE |
| --- | --- |
| 0x01 | TI_W |
| 0x02 | FR_W |
| 0x03 | FR2_W |
| 0x04 | VFZG |
| 0x05 | NMOT_W |
| 0x06 | NSOL |
| 0x07 | WNWI_0 |
| 0x08 | WNWI_1 |
| 0x09 | TANS |
| 0x0A | TMOT |
| 0x0B | ZWOUT |
| 0x0C | WDKBA |
| 0x0D | MSHFM_W |
| 0x0E | MIIST_W |
| 0x0F | UB |
| 0x10 | UPWG_W |
| 0x11 | TKA |
| 0x12 | RKRN_W_0 |
| 0x13 | RKRN_W_1 |
| 0x14 | RKRN_W_2 |
| 0x15 | RKRN_W_3 |
| 0x16 | RKRN_W_4 |
| 0x17 | RKRN_W_5 |
| 0x18 | RKRN_W_6 |
| 0x19 | RKRN_W_7 |
| 0x21 | ILB |
| 0x22 | B_NAC |
| 0x23 | B_FHZ |
| 0x24 | B_NFTEV |
| 0x25 | B_DKPU |
| 0x26 | B_NSUB |
| 0x31 | B_KO |
| 0x32 | B_LDPR |
| 0x33 | S_BRS |
| 0x34 | S_BLS |
| 0x35 | B_KUPPL |
| 0x36 | B_ESTART |
| 0x37 | B_KL15 |
| 0x41 | LUTSFI1 |
| 0x42 | LUTSFI2 |
| 0x43 | LUTSFI3 |
| 0x44 | LUTSFI4 |
| 0x45 | LUTSFI5 |
| 0x46 | LUTSFI6 |
| 0x47 | LUTSFI7 |
| 0x48 | LUTSFI8 |
| 0x49 | B_FOR11 |
| 0x4A | USVK |
| 0x4B | USVK2 |
| 0x51 | RKAT_W |
| 0x52 | RKAT2_W |
| 0x53 | FRA_W |
| 0x54 | FRA2_W |
| 0x55 | PHLSNV |
| 0x56 | PHLSNV2 |
| 0x57 | PHLSNH |
| 0x58 | PHLSNH2 |
| 0x59 | TPLRVK_W |
| 0x5A | TPLRVK2_W |
| 0x60 | TATEIST |
| 0x61 | THVAIST |
| 0x62 | THVAIST2 |
| 0x63 | TANWR_0 |
| 0x64 | TANWR_1 |
| 0x65 | TAML |
| 0x66 | B_HSHE |
| 0x67 | B_HSHE2 |
| 0x68 | B_HSVE |
| 0x69 | B_HSVE2 |
| 0x6A | B_KOE |
| 0x6B | B_SLP |
| 0x6C | B_SLV |
| 0x6D | B_LDPEIN |
| 0x6E | B_STA |
| 0x6F | B_ETR |
| 0x70 | B_EKP |
| 0x71 | B_EBL |
| 0x72 | B_AKR |
| 0x75 | WNWSP_W0 |
| 0x76 | WNWSP_W1 |
| 0x77 | WNWSP_W2 |
| 0x78 | WNWSP_W3 |
| 0x79 | WNWSP_W4 |
| 0x7A | WNWSP_W5 |
| 0x7B | WNWSP_W6 |
| 0x7C | WNWSP_W7 |
| 0x81 | B_LR |
| 0x82 | B_LR2 |
| 0x83 | B_SBBVK |
| 0x84 | B_SBBVK2 |
| 0x85 | B_SBBHK |
| 0x86 | B_SBBHK2 |
| 0x87 | B_VL |
| 0x88 | B_LL |
| 0x89 | B_UMAERF |
| 0x8A | B_SA |
| 0x8B | B_TEHB |
| 0x8C | B_EWS_OK |
| 0x8D | B_PN |
| 0x8E | B_KD |
| 0x90 | NUEMAX |
| 0x91 | NMAX |
| 0x92 | KMSTNMAX |
| 0x93 | ANZNMAX |
| 0xA0 | B_ACC |
| 0xA1 | L_FGR |
| 0xA2 | B_FGRTWA |
| 0xA3 | B_FGRTVE |
| 0xA4 | B_FGRTSE |
| 0xA5 | B_FGRTBE |
| 0xA6 | B_FGRHSA |
| 0xA7 | B_FGRAT |
| 0xB0 | MSNDKO |
| 0xB1 | FKMSDKA |
| 0xB2 | FKMSDK |
| 0xC0 | B_CDAGR |
| 0xC1 | B_CDHSV |
| 0xC2 | B_CDLSV |
| 0xC3 | B_CDSLS |
| 0xC4 | B_CDTES |
| 0xC5 | B_KATH |
| 0xC6 | B_KATFZ |
| 0xC7 | B_AGRRDY |
| 0xC8 | B_HSRDY |
| 0xC9 | B_LSRDY |
| 0xCA | B_SLSRDY |
| 0xCB | B_TESRDY |
| 0xCC | B_KATRDY |
| 0xXY | ENDE |

### STAGEPOINTER

| STAGE | TEXT |
| --- | --- |
| 0x00 | S0      :    Close to Close Check |
| 0x01 | S1      :    Close to Open Check |
| 0x02 | S2      :    Open to Close Check |
| 0x03 | S3      :    Clambed Tube Check |
| 0x04 | S4      :    Fast-Puls (Druckaufbau) |
| 0x05 | S5      :    Natural-Frequency (Druckstabilisierung) |
| 0x06 | S6_1    :    Entscheidung kein Leck oder vermutlich Leck |
| 0x07 | S6_2    :    Ansteuerung wie fuer CTO Check |
| 0x08 | S6_3    :    Periodendauermessung |
| 0x09 | Auswertung : Entscheidung ob Grob- oder Feinleck |
| 0x0A | Abbruch    : Uebergang zum Idle Zustand |
| 0x0B | Idle    :    Funktion nicht aktiv |
| 0x0C | Wartezustand TANS-Monitor nach Fehlererkennung in S0 |
| 0x0D | Wartezustand TANS-Monitor nach Fehlererkennung in S1 |
| 0x0E | Wartezustand TANS-Monitor nach Fehlererkennung in S2 |
| 0x0F | Wartezustand TANS-Monitor nach Fehlererkennung in S3 |
| 0x10 | Wartezustand TANS-Monitor nach Fehlererkennung CTO in S5 und S6_2 |
| 0x11 | Wartezustand TANS-Monitor nach Fehlererkennung Grobleck aus Auswertung |
| 0x12 | Wartezustand TANS-Monitor nach Fehlererkennung Feinbleck aus Auswertung |
| 0xXY | Stagepointer wird noch nicht ausgegeben |

### TEVSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Systemtest TEV laeuft |
| 0x01 | Systemtest kann nicht gestartet werden |
| 0x05 | Systemtest ist nicht gestartet |
| 0x06 | Systemtest TEV ist beendet |
| 0xXY | Status Systemtest TEV kann nicht ausgegeben werden |

### VVTSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Initialisierungswert oder VVT-SG nicht vorhanden |
| 0x01 | Anschlaege erfolgreich gelernt |
| 0x02 | es sind Fehler aufgetreten |
| 0xXY | Fehlerhafter Status  |

### VVTSTATUSBG2

| STATI | TEXT |
| --- | --- |
| 0x00 | Initialisierungswert oder VVT-SG nicht vorhanden |
| 0x01 | Gueltiger Nullhubanschlag, aber kein gueltiger Vollhubanschlag |
| 0x02 | Anschlaege im geforderten Lernfenster |
| 0x03 | Anschlaglernroutine aktiv |
| 0x04 | Abbruch der ALR(Diagnosefunktion) |
| 0x05 | Abbruch wegen Timeout |
| 0x06 | Abbruch wegen Ubatt-Fehler |
| 0xXY | Fehlerhafter Status  |

### VVTSTATUSBG2_2

| STATI | TEXT |
| --- | --- |
| 0x00 | Anschlaege werden gerade gelernt |
| 0x01 | Lernen der Anschlaege nicht ausfuehrbar |
| 0x05 | Keine Anforderung zum Anschlaglernen |
| 0x06 | Anschlaege gelernt |
| 0xXY | Fehlerhafter Status  |

### EWSSTART

| STATI | TEXT |
| --- | --- |
| 0x00 | ME9.2 bereit |
| 0x01 | Startwert schon gespeichert |
| 0x02 | noch kein Startwert gespeichert |
| 0x03 | Startwert nicht plausibel |
| 0xXY | Fehlerhafter Status  |

### EWSEMPFANGSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Startwert verstanden und akzeptiert |
| 0x01 | Startwert verstanden aber nicht akzeptiert |
| 0x02 | Startwert nicht verstanden |
| 0x04 | Prozess laeuft |
| 0x05 | Startwert Programmierung/Synchronisation noch nicht ausgefuehrt |
| 0xXY | Fehlerhafter Status  |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
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
| 0x28 | DODUCO |
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
| 0xFF | unbekannter Hersteller |
