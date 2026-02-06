# MSV70.prg

## General

|  |  |
| --- | --- |
| File | MSV70.prg |
| Type | PRG |
| Jobs | 331 |
| Tables | 77 |
| Origin | BMW EA-41 Mertl |
| Revision | 5.16 |
| Author | Unisoft MuellerWiebus EA-33, ValleyForge-T.I.S. Wieser EA-41 |
| ECU Comment | SGBD für MSV70 Serie mit SW 0901 an ZGM oder K-Line |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MSV70 fuer N52 mit EWS3 oder CAS |  |  |
| ORIGIN | string | BMW EA-41 Mertl |  |  |
| REVISION | string | 5.16 |  |  |
| AUTHOR | string | Unisoft MuellerWiebus EA-33, ValleyForge-T.I.S. Wieser EA-41 |  |  |
| COMMENT | string | SGBD für MSV70 Serie mit SW 0901 an ZGM oder K-Line |  |  |
| PACKAGE | string | 1.29 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INNENTEMP_LESEN

0x301001     Steuergeraete-Innentemperatur auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_AGK

0x30C101     Abgasklappe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

0x300A01     Ansauglufttemperatur 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ANWS

0x30EE01     Vanos Auslass Ventil auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_BLS

0x300201     Bremslichtschalter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_BLTS

0x300301     Bremslichttestschalter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_CO_ABGLEICH

0x225FF1     Abgleichwert CO (Kohlenmonoxid) auslesen

_No arguments._

### STATUS_DISA

0x30C601     Variable Sauganlage (DISA) Klappe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_DISA2

0x30AE01     Variable Sauganlage (DISA) Klappe2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_DKP_VOLT

0x302A01     Drosselklappe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_DMTL_HEIZUNG

0x30CE01     Diagnosemodul-Tank Leckage Heizung auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_DMTL_P

0x30CC01     Diagnosemodul-Tank Leckage Pumpe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_DMTL_V

0x30CD01     Diagnosemodul-Tank Leckage Ventil auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_E_LUEFTER

0x30DA01     E-Luefter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EBL

0x30C801     E-Box-Luefter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EISYGD

0x33E1     Auslesen Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403)

_No arguments._

### STATUS_EISYUGD

0x33E0     Auslesen Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403)

_No arguments._

### STATUS_EKP

0x30D801     Elektrische Kraftstoffpumpe 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EML

0x30D601     EML (Engine Malfunction Lamp) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ENWS

0x30ED01     Vanos Einlass Ventil auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV1

0x30E101     Einspritzventil 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV2

0x30E201     Einspritzventil 2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV3

0x30E301     Einspritzventil 3 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV4

0x30E401     Einspritzventil 4 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV5

0x30E501     Einspritzventil 5 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EV6

0x30E601     Einspritzventil 6 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_EWAP

0x30BF01     elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_FGRL

0x30D501     Fahrgeschwindigkeitsregler-Lampe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_FWV1

0x301E01     Fahrerwunschversorgung 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_FWV2

0x301F01     Fahrerwunschversorgung 2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_GLF

0x30C301     Gesteuerte Luftfuehrung auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_HFMS

0x302E01     Sekundaerluft HFM (Heissfilm Luftmassenmesser) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KB1

0x303001     Klopfbaustein 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KB2

0x303101     Klopfbaustein 2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KFT

0x30C901     Kennfeldthermostat auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KGEH

0x30AD01     Kurbelgehaeuseentlueftungsheizung auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KOREL

0x30C701     Klimakompressor-Relais auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_KRANN

0x33E3     Auslesen Krann-Adaptionswerte (Anforderung aus CP5404)

_No arguments._

### STATUS_KUP

0x300401     Kupplungsschalter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_L_SONDE

0x302101     Lambdasonde vor Kat Bank1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_L_SONDE_2

0x302301     Lambdasonde vor Kat Bank2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_L_SONDE_2_H

0x302401     Lambdasonde hinter Kat Bank2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_L_SONDE_H

0x302201     Lambdasonde hinter Kat Bank1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LMM_MASSE

0x302501     Luftmassenmesser 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LRP

0x225FF7     Laufruhepruefung auslesen

_No arguments._

### STATUS_LSH1

0x30D001     Lambdasondenheizung vor Kat Bank1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LSH2

0x30D101     Lambdasondenheizung hinter Kat Bank1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LSH3

0x30D201     Lambdasondenheizung vor Kat Bank2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_LSH4

0x30D301     Lambdasondenheizung hinter Kat Bank2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_MESSWERTE_LRP

0x22402D     Messwerte Laufruhepruefung auslesen

_No arguments._

### STATUS_MIL

0x30D401     MIL (Malfunction Indicator Lamp) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_MOTORTEMPERATUR

0x300C01     Motortemperatur auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_ODS

0x300501     Oeldruckschalter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_OEL

0x300E01     Oelsensor auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

0x302801     Fahrerwunsch 1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_PWG2

0x302901     Fahrerwunsch 2 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_RBMMODE9

0x224026     Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9)   Typ1 Gesetz

_No arguments._

### STATUS_RBMMS1

0x224027     Rate Based Monitoring Motorsteuerung MSV70 Type1 detailiert auslesen

_No arguments._

### STATUS_RBMMS2

0x224028     Rate Based Monitoring Motorsteuerung MSV70 Type2 auslesen

_No arguments._

### STATUS_SDF1

0x301801     Saugrohrdruck1 / Ladedruck1 auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_SLP

0x30CB01     Sekundaerluftpumpe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_SLV

0x30CA01     Sekundarluftventil auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_SOK

0x30C201     Soundklappe auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_SPT

0x300601     Sporttaster auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_SR

0x30C401     Startrelais auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_TEV

0x30CF01     Tankentlueftungsventil auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_TKA

0x300D01     Kuehlerauslasstemperatur auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_TTEMP

0x302F01     Taster Tempomat auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UBAT

0x302701     Batteriesensor auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UBATT

0x301C01     Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UDF

0x301701     Umgebungsdruck auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UGEN

0x303201     Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UKL15

0x301B01     Kl.15 Spannung auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_UVLSS

0x302001     Versorgungsspannung Lastsignal-Sensor auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_VVT

0x30DD01     VVT auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_VVTR

0x30DC01     VVT-Entlastungsrelais auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_AGK

0x30C107     Abgasklappe ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK_WERT | unsigned long | Sollwert LV_ACT_EF_EXT_ADJ |
| SW_TO_AGK_WERT | unsigned long | Timeout 0 bis 508s 1BYTE in 0 bis 510s |

### STEUERN_ANWS

0x30EE07     Vanos Auslass Ventil ansteuern CON_N_MIN nur bei erhoeter Motordrehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS_WERT | real | Sollwert Vanos_A Ventil CAM_SP_EX_EXT_ADJ |
| SW_TO_ANWS_WERT | unsigned long | Timeout Vanos_A Ventil 1BYTE in 0 bis 510s |

### STEUERN_CO_ABGLEICH_PROGRAMMIEREN

0x2E5FF108     Abgleichwert CO (Kohlenmonoxid) programmieren NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_CO_ABGLEICH_RESET

0x2E5FF104     Abgleichwert CO (Kohlenmonoxid) loeschen NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_CO_ABGLEICH_VERSTELLEN

0x2E5FF107     Abgleichwert CO (Kohlenmonoxid) vorgeben NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| STAT_CO_ABGLEICH_WERT | real | Abgleichwert CO (Kohlenmonoxid) FAC_MFF_ADD_EXT_ADJ |

### STEUERN_DISA

0x30C607     Variable Sauganlage (DISA) Klappe ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DISA_WERT | unsigned long | Sollwert Variable Sauganlage (DISA) Klappe LV_VIM_1_EXT_ADJ |
| SW_TO_DISA_WERT | unsigned long | Timeout Variable Sauganlage (DISA) Klappe 1BYTE in 0 bis 510s |

### STEUERN_DISA2

0x30AE07     Variable Sauganlage (DISA) Klappe2 ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DISA2_WERT | unsigned long | Sollwert Variable Sauganlage (DISA) Klappe2 LV_ACT_VIM_2_EXT_ADJ |
| SW_TO_DISA2_WERT | unsigned long | Timeout Variable Sauganlage (DISA) Klappe2 1BYTE in 0 bis 510s |

### STEUERN_DK

0x302A07     Drosselklappe ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK_WERT | real | Sollwert Drosselklappe TPS_SP_EXT_ADJ |
| SW_TO_DK_WERT | unsigned long | Timeout Drosselklappe 1BYTE in 0 bis 510s |

### STEUERN_DMTL_HEIZUNG

0x30CE07     Diagnosemodul-Tank Leckage Heizung ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTLH_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Heizung LV_ACT_DMTLH_EXT_ADJ |
| SW_TO_DMTLH_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Heizung 1BYTE in 0 bis 510s |

### STEUERN_DMTL_P

0x30CC07     Diagnosemodul-Tank Leckage Pumpe ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_P_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Pumpe LV_ACT_DMTL_PUMP_EXT_ADJ |
| SW_TO_DMTL_P_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Pumpe 1BYTE in 0 bis 510s |

### STEUERN_DMTL_V

0x30CD07     Diagnosemodul-Tank Leckage Ventil ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DMTL_V_WERT | unsigned long | Sollwert Diagnosemodul-Tank Leckage Ventil LV_ACT_DMTLS_EXT_ADJ |
| SW_TO_DMTL_V_WERT | unsigned long | Timeout Diagnosemodul-Tank Leckage Ventil 1BYTE in 0 bis 510s |

### STEUERN_E_LUEFTER

0x30DA07     E-Luefter ansteuern CON_ELUE nur bei Motortemperatur TMOT kleiner 115gradCelsius

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ELUE_WERT | real | Tastverhaeltniss E-Luefter ECFPWM_ECF_EXT_ADJ |
| SW_TO_ELUE_WERT | unsigned long | Timeout E-Luefter 1BYTE in 0 bis 510s |

### STEUERN_EBL

0x30C807     E-Box-Luefter ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EBL_WERT | unsigned long | Sollwert E-Box-Luefter LV_ACT_EBOX_CFA_EXT_ADJ |
| SW_TO_EBL_WERT | unsigned long | Timeout E-Box-Luefter 1BYTE in 0 bis 510s |

### STEUERN_EISYGD

0x31E1     Ansteuern Eisy-Adaptionswerte (gedrosselt) (Anforderung aus CP5403)

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW |
| VSE_SPRI_WERT | real | Istwert Einlassspreizung variable NWS VSE_SPRI |
| VSA_SPRI_WERT | real | Istwert Auslassspreizung variable NWS VSA_SPRI |
| WDK_IST_WERT | real | Aktueller Drosselklappenwinkel WDK_IST |

### STEUERN_EISYUGD

0x31E0     Ansteuern Eisy-Adaptionswerte (ungedrosselt) (Anforderung aus CP5403)

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW |
| VSE_SPRI_WERT | real | Istwert Einlassspreizung variable NWS VSE_SPRI |
| VSA_SPRI_WERT | real | Istwert Auslassspreizung variable NWS VSA_SPRI |
| HUBEV_IST_WERT | real | Istwert Einlassventilhub HUBEV_IST |

### STEUERN_EKP

0x30D807     Elektrische Kraftstoffpumpe 1 ansteuern     Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EKP1_WERT | unsigned long | Sollwert Elektrische Kraftstoffpumpe 1  (Ausnahme fuer Rueckwaertskompatibilitaet SGBD MSV70) 1BYTE 0x00-0xFF in 0 oder 1 |
| SW_TO_EKP1_WERT | unsigned long | Timeout Elektrische Kraftstoffpumpe 1 1BYTE in 0 bis 510s |

### STEUERN_EML

0x30D607     EML (Engine Malfunction Lamp) ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EML_WERT | unsigned long | Sollwert EML (Engine Malfunction Lamp) LV_ACT_WAL_1_EXT_ADJ |
| SW_TO_EML_WERT | unsigned long | Timeout EML (Engine Malfunction Lamp) 1BYTE in 0 bis 510s |

### STEUERN_ENDE_AGK

0x30C100     Abgasklappe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ANWS

0x30EE00     Vanos Auslass Ventil Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DISA

0x30C600     Variable Sauganlage (DISA) Klappe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DISA2

0x30AE00     Variable Sauganlage (DISA) Klappe2 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DK

0x302A00     Drosselklappe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DMTL_HEIZUNG

0x30CE00     Diagnosemodul-Tank Leckage Heizung Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DMTL_P

0x30CC00     Diagnosemodul-Tank Leckage Pumpe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_DMTL_V

0x30CD00     Diagnosemodul-Tank Leckage Ventil Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_E_LUEFTER

0x30DA00     E-Luefter Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EBL

0x30C800     E-Box-Luefter Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EKP

0x30D800     Elektrische Kraftstoffpumpe 1 Ansteuerung beenden     Elektrische Kraftstoffpumpe 1 Deaktivierung aufheben NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EML

0x30D600     EML (Engine Malfunction Lamp) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_ENWS

0x30ED00     Vanos Einlass Ventil Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV1

0x30E100     Einspritzventil 1 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV2

0x30E200     Einspritzventil 2 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV3

0x30E300     Einspritzventil 3 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV4

0x30E400     Einspritzventil 4 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV5

0x30E500     Einspritzventil 5 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EV6

0x30E600     Einspritzventil 6 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_EWAP

0x30BF00     elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_FGRL

0x30D500     Fahrgeschwindigkeitsregler-Lampe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_GLF

0x30C300     Gesteuerte Luftfuehrung Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_KFT

0x30C900     Kennfeldthermostat Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_KGEH

0x30AD00     Kurbelgehaeuseentlueftungsheizung Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_KOREL

0x30C700     Klimakompressor-Relais Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LRP

0x2E5FF700     Laufruhepruefung Vorgeben beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LSH1

0x30D000     Lambdasondenheizung vor Kat Bank1 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LSH2

0x30D100     Lambdasondenheizung hinter Kat Bank1 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LSH3

0x30D200     Lambdasondenheizung vor Kat Bank2 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_LSH4

0x30D300     Lambdasondenheizung hinter Kat Bank2 Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_MIL

0x30D400     MIL (Malfunction Indicator Lamp) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_SLP

0x30CB00     Sekundaerluftpumpe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_SLV

0x30CA00     Sekundarluftventil Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_SOK

0x30C200     Soundklappe Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_SR

0x30C400     Startrelais Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_TEV

0x30CF00     Tankentlueftungsventil Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_UGEN

0x303200     Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_UVSG

0x301C00     Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_VVT

0x30DD00     VVT Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENDE_VVTR

0x30DC00     VVT-Entlastungsrelais Ansteuerung beenden NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_ENWS

0x30ED07     Vanos Einlass Ventil ansteuern CON_N_MIN nur bei erhoeter Motordrehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ENWS_WERT | real | Sollwert Vanos_E Ventil CAM_SP_IN_EXT_ADJ |
| SW_TO_ENWS_WERT | unsigned long | Timeout Vanos_E Ventil 1BYTE in 0 bis 510s |

### STEUERN_EV1

0x30E107     Einspritzventil 1 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV1_WERT | unsigned long | Periodendauer Einspritzventil 1 1BYTE in 0 bis 2550ms |
| SW_TV_EV1_WERT | real | Sollwert Einspritzventil 1 IV_EXT_ADJ[0] |
| SW_TO_EV1_WERT | unsigned long | Timeout Einspritzventil 1 1BYTE in 0 bis 510s |

### STEUERN_EV2

0x30E207     Einspritzventil 2 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV2_WERT | unsigned long | Periodendauer Einspritzventil 2 1BYTE in 0 bis 2550ms |
| SW_TV_EV2_WERT | real | Sollwert Einspritzventil 2 IV_EXT_ADJ[4] |
| SW_TO_EV2_WERT | unsigned long | Timeout Einspritzventil 2 1BYTE in 0 bis 510s |

### STEUERN_EV3

0x30E307     Einspritzventil 3 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV3_WERT | unsigned long | Periodendauer Einspritzventil 3 1BYTE in 0 bis 2550ms |
| SW_TV_EV3_WERT | real | Sollwert Einspritzventil 3 IV_EXT_ADJ[2] |
| SW_TO_EV3_WERT | unsigned long | Timeout Einspritzventil 3 1BYTE in 0 bis 510s |

### STEUERN_EV4

0x30E407     Einspritzventil 4 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV4_WERT | unsigned long | Periodendauer Einspritzventil 4 1BYTE in 0 bis 2550ms |
| SW_TV_EV4_WERT | real | Sollwert Einspritzventil 4 IV_EXT_ADJ[5] |
| SW_TO_EV4_WERT | unsigned long | Timeout Einspritzventil 4 1BYTE in 0 bis 510s |

### STEUERN_EV5

0x30E507     Einspritzventil 5 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV5_WERT | unsigned long | Periodendauer Einspritzventil 5 1BYTE in 0 bis 2550ms |
| SW_TV_EV5_WERT | real | Sollwert Einspritzventil 5 IV_EXT_ADJ[1] |
| SW_TO_EV5_WERT | unsigned long | Timeout Einspritzventil 5 1BYTE in 0 bis 510s |

### STEUERN_EV6

0x30E607     Einspritzventil 6 ansteuern CON_EV nur bei Motordrehzahl n=0 und EKP aus

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EV6_WERT | unsigned long | Periodendauer Einspritzventil 6 1BYTE in 0 bis 2550ms |
| SW_TV_EV6_WERT | real | Sollwert Einspritzventil 6 IV_EXT_ADJ[3] |
| SW_TO_EV6_WERT | unsigned long | Timeout Einspritzventil 6 1BYTE in 0 bis 510s |

### STEUERN_EWAP

0x30BF07     elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) ansteuern CON_EWAP nur bei Fahrzeuggeschwindigkeit v=0 und Motortemperatur TMOT kleiner 115gradCelsius und Batteriespannung UBAT groesser 10Volt

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWAP_WERT | real | Sollwert elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) N_REL_CWP_SP_EXT_ADJ |
| SW_TO_EWAP_WERT | unsigned long | Timeout elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s |

### STEUERN_EWAP_SF

0x30BF07     Sonderfunktionen elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) ansteuern CON_EWAP nur bei Fahrzeuggeschwindigkeit v=0 und Motortemperatur TMOT kleiner 115gradCelsius und Batteriespannung UBAT groesser 10Volt

| Name | Type | Description |
| --- | --- | --- |
| SW_PD_EWAP_WERT | unsigned long | Periodendauer elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 2550ms |
| SW_TV_EWAP_SF_WERT | string | Sonderfunktionen elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE EWAP SF |
| SW_TO_EWAP_WERT | unsigned long | Timeout elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s |

### STEUERN_FGRL

0x30D507     Fahrgeschwindigkeitsregler-Lampe ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_FGRL_WERT | unsigned long | Sollwert Fahrgeschwindigkeitsregler-Lampe LV_ACT_CRU_EXT_ADJ |
| SW_TO_FGRL_WERT | unsigned long | Timeout Fahrgeschwindigkeitsregler-Lampe 1BYTE in 0 bis 510s |

### STEUERN_GLF

0x30C307     Gesteuerte Luftfuehrung ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF_WERT | unsigned long | Sollwert Gesteuerte Luftfuehrung LV_ACT_ECRAS_EXT_ADJ |
| SW_TO_GLF_WERT | unsigned long | Timeout Gesteuerte Luftfuehrung 1BYTE in 0 bis 510s |

### STEUERN_KFT

0x30C907     Kennfeldthermostat ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KFT_WERT | real | Sollwert Kennfeldthermostat ECTPWM_EXT_ADJ |
| SW_TO_KFT_WERT | unsigned long | Timeout Kennfeldthermostat 1BYTE in 0 bis 510s |

### STEUERN_KGEH

0x30AD07     Kurbelgehaeuseentlueftungsheizung ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KGEH_WERT | unsigned long | Sollwert Kurbelgehaeuseentlueftungsheizung LV_VIM_2_EXT_ADJ |
| SW_TO_KGEH_WERT | unsigned long | Timeout Kurbelgehaeuseentlueftungsheizung 1BYTE in 0 bis 510s |

### STEUERN_KOREL

0x30C707     Klimakompressor-Relais ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KOREL_WERT | unsigned long | Sollwert Klimakompressor-Relais LV_ACT_ACCOUT_RLY_EXT_ADJ |
| SW_TO_KOREL_WERT | unsigned long | Timeout Klimakompressor-Relais 1BYTE in 0 bis 510s |

### STEUERN_KRANN

0x31E3     Ansteuern Krann-Adaptionswerte (Anforderung aus CP5404)

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW |
| RF_WERT | real | Relative Luftfuellung RF |
| TANS_WERT | real | Ansauglufttemperatur TANS |
| TMOT_WERT | real | Kuehlwassertemperatur TMOT |
| BA_IST_WERT | string | Istbetriebsart BA_IST |

### STEUERN_LRP

0x2E5FF707     Laufruhepruefung vorgeben NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_GEMISCHEINGRIFF_INAKTIV_WERT | unsigned long | Gemischeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_ZUENDWINKELEINGRIFF_INAKTIV_WERT | unsigned long | Zuendwinkeleingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_MINHUBEINGRIFF_INAKTIV_WERT | unsigned long | Minhubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_HUBEINGRIFF_INAKTIV_WERT | unsigned long | zylinderselektiver Hubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_LRP_BIT4_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT5_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT6_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT7_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |

### STEUERN_LSH1

0x30D007     Lambdasondenheizung vor Kat Bank1 ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH1_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank1 LSHPWM_UP_EXT_ADJ[1] |
| SW_TO_LSH1_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank1 1BYTE in 0 bis 510s |

### STEUERN_LSH2

0x30D107     Lambdasondenheizung hinter Kat Bank1 ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH2_WERT | real | Tastverhaeltniss Lambdasondenheizung hinter Kat Bank1 LSHPWM_DOWN_EXT_ADJ[1] |
| SW_TO_LSH2_WERT | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank1 1BYTE in 0 bis 510s |

### STEUERN_LSH3

0x30D207     Lambdasondenheizung vor Kat Bank2 ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH3_WERT | real | Tastverhaeltniss Lambdasondenheizung vor Kat Bank2 LSHPWM_UP_EXT_ADJ[2] |
| SW_TO_LSH3_WERT | unsigned long | Timeout Lambdasondenheizung vor Kat Bank2 1BYTE in 0 bis 510s |

### STEUERN_LSH4

0x30D307     Lambdasondenheizung hinter Kat Bank2 ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_LSH4_WERT | real | Tastverhaeltniss Lambdasondenheizung hinter Kat Bank2 LSHPWM_DOWN_EXT_ADJ[2] |
| SW_TO_LSH4_WERT | unsigned long | Timeout Lambdasondenheizung hinter Kat Bank2 1BYTE in 0 bis 510s |

### STEUERN_MIL

0x30D407     MIL (Malfunction Indicator Lamp) ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL_WERT | unsigned long | Sollwert MIL (Malfunction Indicator Lamp) LV_ACT_MIL_EXT_ADJ |
| SW_TO_MIL_WERT | unsigned long | Timeout MIL (Malfunction Indicator Lamp) 1BYTE in 0 bis 510s |

### STEUERN_PROGRAMM_LRP

0x2E5FF708     Laufruhepruefung programmieren NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_GEMISCHEINGRIFF_INAKTIV_WERT | unsigned long | Gemischeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_ZUENDWINKELEINGRIFF_INAKTIV_WERT | unsigned long | Zuendwinkeleingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_MINHUBEINGRIFF_INAKTIV_WERT | unsigned long | Minhubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_HUBEINGRIFF_INAKTIV_WERT | unsigned long | zylinderselektiver Hubeingriff (1= deaktivieren  0=aktivieren) 1BYTE IDENTICAL HEX |
| SW_LRP_BIT4_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT5_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT6_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |
| SW_LRP_BIT7_WERT | unsigned long | not used 1BYTE IDENTICAL HEX |

### STEUERN_SLP

0x30CB07     Sekundaerluftpumpe ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SLP_WERT | unsigned long | Sollwert Sekundaerluftpumpe LV_ACT_SAP_EXT_ADJ |
| SW_TO_SLP_WERT | unsigned long | Timeout Sekundaerluftpumpe 1BYTE in 0 bis 510s |

### STEUERN_SLV

0x30CA07     Sekundarluftventil ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SLV_WERT | unsigned long | Sollwert Sekundarluftventil LV_ACT_SAV_EXT_ADJ |
| SW_TO_SLV_WERT | unsigned long | Timeout Sekundarluftventil 1BYTE in 0 bis 510s |

### STEUERN_SOK

0x30C207     Soundklappe ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SOK_WERT | unsigned long | Sollwert Soundklappe LV_ACT_SOF_EXT_ADJ |
| SW_TO_SOK_WERT | unsigned long | Timeout Soundklappe 1BYTE in 0 bis 510s |

### STEUERN_SR

0x30C407     Startrelais ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_SR_WERT | unsigned long | Sollwert Startrelais LV_ACT_RLY_ST_EXT_ADJ |
| SW_TO_SR_WERT | unsigned long | Timeout Startrelais 1BYTE in 0 bis 510s |

### STEUERN_TEV

0x30CF07     Tankentlueftungsventil ansteuern NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_TEV_WERT | real | TastverhaeltnissTankentlueftungsventil CPPWM_EXT_ADJ |
| SW_TO_TEV_WERT | unsigned long | Timeout Tankentlueftungsventil 1BYTE in 0 bis 510s |

### STEUERN_UGEN

0x303207     Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) ansteuern N_LL nur bei Leerlauf-Drehzahl

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_UGEN_WERT | real | Spannung Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) V_ALTER_SP_EXT_ADJ |
| SW_TO_UGEN_WERT | unsigned long | Timeout Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s |

### STEUERN_UVSG

0x301C07     Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) ansteuern V_N_EQ_ZERO nur bei Fahrzeuggeschwindigkeit v=0 und Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_UVSG_WERT | unsigned long | Sollwert Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) LV_RLY_MAIN_EXT_ADJ |
| SW_TO_UVSG_WERT | unsigned long | Timeout Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) 1BYTE in 0 bis 510s |

### STEUERN_VVT

0x30DD07     VVT ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_VVT_WERT | real | Stellbereich VVT ANG_SP_EXT_ADJ_VVL |
| SW_TO_VVT_WERT | unsigned long | Timeout VVT 1BYTE in 0 bis 510s |

### STEUERN_VVTR

0x30DC07     VVT-Entlastungsrelais ansteuern N_EQ_ZERO nur bei Motordrehzahl n=0

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_VVTR_WERT | unsigned long | Sollwert VVT-Entlastungsrelais LV_RLY_VVL_EXT_ADJ |
| SW_TO_VVTR_WERT | unsigned long | Timeout VVT-Entlastungsrelais 1BYTE in 0 bis 510s |

### _STATUS_FASTA_EISYUGD

0x31E0 & 0x33E0    Ansteuern und Auslesen Eisy-Adaptionswerte (ungedrosselt)

_No arguments._

### _STATUS_FASTA_EISYGD

0x31E1 & 0x33E1    Ansteuern und Auslesen Eisy-Adaptionswerte (gedrosselt)

_No arguments._

### _STATUS_FASTA_KRANN

0x31E3 & 0x33E3    Ansteuern und Auslesen Krann-Adaptionswerte

_No arguments._

### _STATUS_INPA_EISYUGD

0x31E0 & 0x33E0    Ansteuern und Auslesen Eisy-Adaptionswerte (ungedrosselt)

_No arguments._

### _STATUS_INPA_EISYGD

0x31E1 & 0x33E1    Ansteuern und Auslesen Eisy-Adaptionswerte (gedrosselt)

_No arguments._

### _STATUS_INPA_KRANN

0x31E3 & 0x33E3    Ansteuern und Auslesen Krann-Adaptionswerte

_No arguments._

### _STATUS_FASTA_TECU

0x23 Auslesen der DME-Temperaturstatistik

_No arguments._

### STATUS_MESSWERTBLOCK_LESEN

Lesen eines Messwertblockes Es muss immer das BlockSchreibenFlag und mindestens ein MESSWERT uebergeben werden. KWP2000: $2C DynamicallyDefinedLocalIdentifier $F0 DynamicallyDefinedLocalIdentifier $04 ClearDynamicallyDefinedLocalIdentifier KWP2000: $2C DynamicallyDefinedLocalIdentifier $F0 DynamicallyDefinedLocalIdentifier $02 DefineByCommonIdentifier KWP2000: $21 ReadDataByLocalIdentifier $F0 DynamicallyDefinedLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Wenn 'JA' wird der Messwertblock im SG gelöscht neu ins SG geschrieben und dann gelesen Wenn 'NEIN' wird der Messwertblock im SG nicht gelöscht Es wird der im SG gespeicherte Messwertblock gelesen table MesswerteMode TEXT KOMMENTAR |
| MESSWERT | string | Dynamische Argumente Es können bis zu 42 Argumente übergeben werden Es muss mindestens ein Argument übergeben werden Er wird das zugehörige Result table MesswerteTab ARG RESULTNAME erzeugt |

### _STATUS_OBD_MODE_01

Auslesen der Motor-Diagnosedaten nach Mode 01 PID 01  

_No arguments._

### _STATUS_OBD_MODE_03

Auslesen der P-Codes nach Mode 3  

_No arguments._

### _STATUS_OBD_MODE_07

Auslesen der P-Codes nach Mode 7  

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### SET_BAUDRATE

Initialisierung der Kommunikationsparameter mit bestimmter Baudrate

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATE | string | die gewuenschte Baudrate |

### SET_PARAMETER

Aenderung der Kommunikationsparameter bei Long-Parametersätzen

| Name | Type | Description |
| --- | --- | --- |
| KONZEPT | string | Konzept |
| BAUDRATE | string | Baudrate |
| TIMEOUT | string | Timeout in ms |
| REGENERATIONSZEIT | string | Regenerationszeit in ms |
| TELEGRAMMENDEZEIT | string | Telegrammendezeit in ms |

### INTERFACETYPE

Interface-Typ bestimmen und ausgeben Es wird der Name des Interfaces übergeben Wichtig für Baudratenumschaltung weil bei ADS, EADS und OBD sind nur 115200 Baud möglich, bei EDIC nur 125000 Baud möglich

_No arguments._

### ACCESS_TIMING_PARAMETER

Aenderung der Timingparameter im SG

| Name | Type | Description |
| --- | --- | --- |
| P2MIN | int | P2min, Einheit: 0.5 ms |
| P2MAX | int | P2max, Einheit: 25 ms |
| P3MIN | int | P3min, Einheit: 0.5 ms |
| P3MAX | int | P3max, Einheit: 250 ms |
| P4MIN | int | P4min, Einheit: 0.5 ms |

### ACCESS_TIMING_PARAMETER_DEFAULT

Default-Timingparameter im SG

_No arguments._

### FS_LESEN_HEX

Fehlerspeicher auslesen als Hex Dump

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | Eingabe der FehlerNummer |

### MESSWERTBLOCK_LESEN

$2C F0 02 DDLI Messwerte aus Übergabestring definieren

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### STATUS_MESSWERTE_VANOS

$2C F0 02 DDLI Messwerte CAM_IN und CAM_EX auf Wunsch von VS-22

_No arguments._

### FS_LESEN_FREEZE_FRAME

Fehlerspeicher auslesen mit SAE Werten Umwelt und P-Code

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | die Nummer des zu lesenden Fehlers eingeben |

### STATUS_MESSWERTE_KD

$2C F0 02 DDLI Messwerte nach Wunsch VS-22

_No arguments._

### IDENT_AIF

Identdaten mit KWP2000: $1A ReadECUIdentification Anwender Informations Felder mit KWP 2000: $23 ReadMemoryByAddress

_No arguments._

### STATUS_OBD

$21 05 Monitoring Funktionen und Status Bits

_No arguments._

### STATUS_READINESS

$21 05 Monitoring Funktionen und Status Bits

_No arguments._

### EWS_EMPFANG

EWS-Empfangsstatus auslesen

_No arguments._

### STATUS_FGR

$21 07 MFL MultiFunktionsLekrad STATE_MSW_CAN

_No arguments._

### DISTANCE_MIL_ON

Auslesen Fahrstrecke mit MIL-eingeschaltet KWP 2000* $21 09 DIST_ACT_MIL ReadDataByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_SEK_LUFT

Stand der Diagnose KWP 2000* $21 20 Status Systemtest SLS SekundärLuftSystem

_No arguments._

### STATUS_SYSTEMCHECK_TEV_FUNC

Status und Messströme KWP 2000* $21 22 RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_TEV

Stand der Diagnose KWP 2000* $21 22 TEV ReadDataByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_EVAUSBL

welches EV-Ventil ist abgeschaltet KWP 2000* $21 25 RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_VVT_ANSCHLAG

Stand der Diagnose KWP 2000* $21 27 VVT ReadDataByLocalIdentifier

_No arguments._

### STATUS_DIGITAL_3

Statusbit KOmpressorRELais KWP 2000* $21 36 LV_ACCOUT_RLY ReadDataByLocalIdentifier

_No arguments._

### STATUS_DIGITAL_4

Statusbit LeerLauf KWP 2000* $21 3F LV_IS ReadDataByLocalIdentifier

_No arguments._

### STATUS_L_SONDE_HEIZUNG_H_2

Auslesen des Reglerzustands der Sondenheizung KWP 2000* $21 41 STATE_LSH_DOWN_2 ReadDataByLocalIdentifier

_No arguments._

### STATUS_L_SONDE_HEIZUNG_H_1

Auslesen des Reglerzustands der Sondenheizung KWP 2000* $21 42 STATE_LSH_DOWN_1 ReadDataByLocalIdentifier

_No arguments._

### STATUS_L_SONDE_HEIZUNG_V_2

Auslesen des Reglerzustands der Sondenheizung KWP 2000* $21 43 STATE_LSH_UP_2 ReadDataByLocalIdentifier

_No arguments._

### STATUS_L_SONDE_HEIZUNG_V_1

Auslesen des Reglerzustands der Sondenheizung KWP 2000* $21 44 STATE_LSH_UP_1 ReadDataByLocalIdentifier

_No arguments._

### STATUS_EWS_LOCK

Statusbit LV_LOCK_IMOB = 1 blockt Zündung und Einspritzung KWP 2000* $21 49 ReadDataByLocalIdentifier

_No arguments._

### STATUS_ZEIT_EINSPRITZ

Auslesen der Einspritzzeit Zyl. 1 KWP 2000* $21 4C BIOS_TI_0

_No arguments._

### STATUS_ZUENDWINKEL

Auslesen des Zündwinkels Zylinder 1 KWP 2000* $21 56 IGA_IGC_0 ReadDataByLocalIdentifier

_No arguments._

### STATUS_DROSSELKLAPPE

Auslesen des Drosselklappen Winkels KWP 2000* $21 57 TPS_AV ReadDataByLocalIdentifier

_No arguments._

### STATUS_KLOPFEN

Auslesen des Status Klopfen erkannt 0/1 KWP 2000* $21 71 LV_KNK ReadDataByLocalIdentifier

_No arguments._

### STATUS_KVA

Auslesen Faktor KVA KWP 2000* $21 C1 kva-faktor ReadDataByLocalIdentifier

_No arguments._

### STATUS_BETRIEBSSTUNDENZAEHLER

$ 21 C3 Status Betriebsstundenzaehler auslesen

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Stand der Diagnose KWP 2000* $21 DA DMTL ReadDataByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_L_SONDE

Stand der Diagnose KWP 2000* $21 DF vertauschte L-Sonden ReadDataByLocalIdentifier

_No arguments._

### HS_LESEN

Historyspeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2100 HistoryMemory

_No arguments._

### STATUS_LEISTUNGSSTUFE

Auslesen der Codierung Obere/Untere Leistungsstufe KWP2000: $22 ReadDataByCommonIdentifier $3020 RecordCommonIdentifier

_No arguments._

### STATUS_MOTORDREHZAHL

Auslesen der Motordrehzahl und LL-Sollwert KWP 2000* $22 40 00 Auszug

_No arguments._

### STATUS_DFMONITOR

Generator Belastung KWP2000: $22 40 01 ReadDataByCommonIdentifier dfmonitor

_No arguments._

### STATUS_DIGITAL_1

Status Schaltzustaende

_No arguments._

### STATUS_MOTORLAUFUNRUHE

$22 40 03 Laufunruhe fuer 6 Zylinder lesen

_No arguments._

### STATUS_GEBERRAD_ADAPTION

$2C F0 02 DDLI Messwerte für NWG-Adaptionen auslesen

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

$22 40 06 Nockenwellen Adaptionen

_No arguments._

### STATUS_DIGITAL_0

Status Schaltzustaende $22 40 07 Betriebszustaende

_No arguments._

### STATUS_FUNKTIONS

Status Schaltzustaende $22 40 07 Betriebszustaende

_No arguments._

### STATUS_ADAPTION_DK

$22 40 08 Adaption DK lesen

_No arguments._

### STATUS_ADAPTION_GEMISCH

$22 40 0A Adaption Lambda Regelung lesen

_No arguments._

### STATUS_FASTA_COMMON

Messwerteblock lesen KWP2000: $2C F0 02 DynamicallyDefinedLocalIdentifier

_No arguments._

### ECU_CONFIG

$22 5F F2 Fahrzeug Varianten lesen

_No arguments._

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### SPEICHER_LESEN_ASCII

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### ECU_CONFIG_RESET

$22 5F F2 04 gelernte FahrzeugVarianten löschen

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_4 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_5 | int | Bit=1 löscht Bit=0 behält alten Wert |

### STATUS_ADD

Auslesen der additiven Korrektur Bank 1 KWP 2000*  MFF_AD_ADD_MMV_REL[1]

_No arguments._

### STATUS_ADD_2

Auslesen der additiven Korrektur Bank 2 KWP 2000*  MFF_AD_ADD_MMV_REL[2]

_No arguments._

### STATUS_MUL

Auslesen des Korrekturfaktors Bank 1 KWP 2000*  MFF_AD_FAC_MMV_REL[1]

_No arguments._

### STATUS_MUL_2

Auslesen des Korrekturfaktors Bank 1 KWP 2000*  MFF_AD_FAC_MMV_REL[2]

_No arguments._

### STATUS_INT

Auslesen des Integrator Bank 1 KWP 2000*  TI_LAM_COR[1]

_No arguments._

### STATUS_INT_2

Auslesen des Integrator Bank 1 KWP 2000*  TI_LAM_COR[1]

_No arguments._

### STATUS_LL_ABGLEICH

LL-Abgleichswerte lesen

_No arguments._

### STEUERN_LL_ABGLEICH

LL-Abgleich vorgegeben -256 bis +254

| Name | Type | Description |
| --- | --- | --- |
| STAT_OFS_ACC_DRI | int | Abgleichswert LL mit Klima und Fahrbedingung |
| STAT_OFS_DRI | int | Abgleichswert LL mit Fahrstufe |
| STAT_OFS | int | Abgleichswert LL |
| STAT_OFS_ACC | int | Abgleichswert LL mit Klimaanlage |
| STAT_OFS_VB | int | Abgleichswert LL mit niedriger UBatt |

### STEUERN_LLABG_PROG

LL-Abgleichswerte werden vorgegeben

| Name | Type | Description |
| --- | --- | --- |
| STAT_OFS_ACC_DRI | int | Abgleichswert LL mit Klima und Fahrbedingung |
| STAT_OFS_DRI | int | Abgleichswert LL mit Fahrstufe |
| STAT_OFS | int | Abgleichswert LL |
| STAT_OFS_ACC | int | Abgleichswert LL mit Klimaanlage |
| STAT_OFS_VB | int | Abgleichswert LL mit niedriger UBatt |

### FLASH_CRC_PRUEFEN

Codier Checksumme pruefen KWP2000: $31 StartRoutineByLocalIdentifier $01 Checksum

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | Zeit in Sekunden |

### HS_LOESCHEN

Historyspeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $03 ClearHistoryMemory Modus  : Default

_No arguments._

### DME_STARTWERT_ABGLEICH

Kopiert die ISN auf beide Wechselcodes KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $20 Modus  : Default

_No arguments._

### START_SYSTEMCHECK_SEK_LUFT

$31 20 Systemdiagnose SLS SekundärLuftSystem starten

_No arguments._

### START_SYSTEMCHECK_TEV_FUNC

$31 22 Systemdiagnose TEVstarten

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

$31 25 Systemdiagnose Einspritzventil abschalten

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | Zylinder 1 bis 6 Ventil ausgeblenden oder 63 alle |

### START_SYSTEMCHECK_LLERH

$31 26 Systemdiagnose EOL LL-Erhöhen starten

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | LL-Sollwert 0 bis 2000 1/min |

### START_SYSTEMCHECK_VVT_ANSCHLAG

$31 27 Systemdiagnose VVT-Anschläge lernen starten

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | 1 unten lernen, 6 beide lernen, 2 Byte Befehl sonst |

### EWS_STARTWERT

EWS-Startwertinitialisierung

_No arguments._

### EWS_STARTWERTPROGRAMMIERUNG

EWS-Startwertinitialisierung

_No arguments._

### EWS_STARTWERTRUECKSETZUNG

EWS-Startwertinitialisierung

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

$31 D9 01 Systemdiagnose LambdaRegelung abschalten

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

$31 D9 01 Systemdiagnose LambdaRegelung einschalten

_No arguments._

### START_SYSTEMCHECK_DMTL

$31 DA Systemdiagnose DMTL starten

_No arguments._

### START_SYSTEMCHECK_L_SONDE

$31 DF Systemdiagnose vertauschte L-Sonden starten

_No arguments._

### RESET_CRU_OFF

$31 F4 STATE_CRU_OFF_IRR und STATE_CRU_OFF_REV löschen

_No arguments._

### START_SYSTEMCHECK_VVT_SOLLWERT

$31 FE Systemdiagnose VVT Steuerung ueber CAN freigeben

_No arguments._

### STOP_SYSTEMCHECK_VVT_SOLLWERT

$31 FE Systemdiagnose VVT Steuerung ueber CAN freigeben

_No arguments._

### STOP_SYSTEMCHECK_SEK_LUFT

$32 20 Systemdiagnose SekundärLuftSystem beenden

_No arguments._

### STOP_SYSTEMCHECK_TEV_FUNC

$32 22 Systemdiagnose TEV beenden

_No arguments._

### STOP_SYSTEMCHECK_EVAUSBL

$32 25 Ende Systemtest Ventil Abschalten

_No arguments._

### STOP_SYSTEMCHECK_LLERH

$32 26 EOL-Test LL-Anheben beenden

_No arguments._

### STOP_SYSTEMCHECK_VVT_ANSCHLAG

$32 27 Systemdiagnose VVT-Anschläge lernen starten

_No arguments._

### STOP_SYSTEMCHECK_DMTL

$32 DA Systemdiagnose DMTL beenden

_No arguments._

### STOP_SYSTEMCHECK_L_SONDE

$32 DF Systemdiagnose vertauschte L-Sonden beenden

_No arguments._

### STATUS_SYSTEMCHECK_SEK_LAMBDA_WERT

Status und Luftmassen KWP 2000* $33 20 RequestRoutineResultsByLocalIdentifier 

_No arguments._

### STATUS_SYSTEMCHECK_TEV_WERT

Status und Messströme KWP 2000* $33 22 RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_LLERH_WERT

aktuelle Drehzahl N KWP 2000* $33 26 RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_DMTL_WERT

Status und Messströme KWP 2000* $33 DA RequestRoutineResultsByLocalIdentifier

_No arguments._

### STATUS_SYSTEMCHECK_L_SONDE_WERTE

Status und Messwerte KWP 2000* $33 DF RequestRoutineResultsByLocalIdentifier

_No arguments._

### STEUERN_KVA

Faktor KVA Korrektur vorgeben KWP 2000* $3B C1 kva-faktor WriteDataByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | int | Faktor KVA 80 - 7F = -0,128 - 0,127 |

### STATUS_ANALOG

Analogen Messwert periodisch lesen KWP2000: $2C F0 02 DynamicallyDefinedLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| DEVICE | string | Nummer nach DDLI Liste |

### STATUS_FASTA2

$2C F0 02 DDLI Messwerte nach Wunsch EA-36

_No arguments._

### STATUS_MESSWERTE_NL

$2C F0 02 DDLI Messwerte Klopfen nach Wunsch VS-22

_No arguments._

### STATUS_MESSWERTBLOCK_ADC

$21 F0 DDLI Messwerteblock lesen der zuletzt mit $2C F0 definiert wurde

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### DIAGNOSEPROTOKOLL_LESEN

Gibt die möglichen Diagnoseprotokolle für eine Auswahl an den Aufrufer zurück

_No arguments._

### DIAGNOSEPROTOKOLL_SETZEN

Wählt ein Diagnoseprotokoll aus

| Name | Type | Description |
| --- | --- | --- |
| DIAG_PROT | string | Diagnoseprotokoll table KONZEPT_TABELLE KONZEPT_TEXT |

### IDENT

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen KWP2000: $14 ClearDiagnosticInformation Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | 0x????: Angabe eines einzelnen Fehlers 0xFFFB: alle Antriebsfehler 0xFFFC: alle Fahrwerkfehler 0xFFFD: alle Karosseriefehler 0xFFFE: alle Netzwerkfehler Default: 0xFFFF: alle Fehler |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels KWP2000: $22 ReadDataByCommonIdentifier $1000 TestStamp Modus  : Default

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### NORMALER_DATENVERKEHR

Sperren bzw. Freigeben des normalen Datenverkehrs KWP2000: $28 DisableNormalMessageTransmission KWP2000: $29 EnableNormalMessageTransmission Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FREIGEBEN | string | "ja"   -> normalen Datenverkehr freigeben "nein" -> normalen Datenverkehr sperren table DigitalArgument TEXT |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |
| FUNKTIONAL | string | "ja"   -> Funktionale Adresse 0xEF wird benutzt nur in Verbindung mit SG_ANTWORT="nein" "nein" -> SG Adresse wird benutzt table DigitalArgument TEXT Default:  SG Adresse wird benutzt |

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten KWP2000: $3E TesterPresent Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |
| FUNKTIONAL | string | "ja"   -> Funktionale Adresse 0xEF wird benutzt nur in Verbindung mit SG_ANTWORT="nein" "nein" -> SG Adresse wird benutzt table DigitalArgument TEXT Default:  SG Adresse wird benutzt |

### SERIENNUMMER_LESEN

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### ZIF_LESEN

Auslesen des Zulieferinfofeldes KWP2000: $22   ReadDataByCommonIdentifier $2503 ProgrammReferenz und KWP2000: $1A   ReadECUIdentification $91   VehicleManufacturerECUHardware*Number oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### ZIF_BACKUP_LESEN

Auslesen des Backups des Zulieferinfofeldes ProgrammReferenzBackup         PRGREFB vehicleManufECUHW*NumberBackup VMECUH*NB KWP2000: $22   ReadDataByCommonIdentifier $2500 PRBHW*B oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### PHYSIKALISCHE_HW_NR_LESEN

Auslesen der physikalischen Hardwarenummer KWP2000: $1A ReadECUIdentification $87 physicalECUHardwareNumber (PECUHN) oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### HARDWARE_REFERENZ_LESEN

Auslesen der Hardware Referenz KWP2000: $22   ReadDataByCommonIdentifier $2502 HWREF oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### DATEN_REFERENZ_LESEN

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier $2504 DREF Modus  : Default

_No arguments._

### FLASH_ZEITEN_LESEN

Auslesen der Flash Loeschzeit, Signaturtestzeit, Authentisierberechnungszeit und Resetzeit KWP2000: $22   ReadDataByCommonIdentifier $2501 Zeiten Modus  : Default

_No arguments._

### FLASH_BLOCKLAENGE_LESEN

Auslesen des maximalen Blocklaenge beim Flashen KWP2000: $22   ReadDataByCommonIdentifier $2506 MaximaleBlockLaenge Modus  : Default

_No arguments._

### AUTHENTISIERUNG_ZUFALLSZAHL_LESEN

Authentisierung Zufallszahl des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $07 RequestForAuthentication Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| LEVEL | int |  |
| USER_ID | long | optional |

### AUTHENTISIERUNG_START

Authentisierung pruefen KWP2000: $31 StartRoutineByLocalIdentifier $08 ReleaseAuthentication Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Authentisierungszeit in Sekunden Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Schluesseldaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### FLASH_SIGNATUR_PRUEFEN

Flash Signatur pruefen KWP2000: $31 StartRoutineByLocalIdentifier $09 CheckSignature Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BEREICH | string | 'Programm' 'Daten' |
| SIGNATURTESTZEIT | int | Zeit in Sekunden |

### STEUERGERAETE_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

### FLASH_LOESCHEN

Flash loeschen Standard Flashjob KWP2000: $31 StartRoutineByLocalIdentifier $02 ClearMemory Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Loeschzeit in Sekunden (Byteparameter 1) Byte 5,6            : Loeschzeit in Sekunden (WordParameter 1 (low/high)) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_SCHREIBEN_ADRESSE

Vorbereitung fuer Flash schreiben Standard Flashjob KWP2000: $34 RequestDownload Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_SCHREIBEN

Flash Daten schreiben Standard Flashjob KWP2000: $36 TransferData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_SCHREIBEN_ENDE

Flashprogrammierung abschliessen Standard Flashjob KWP2000: $37 RequestTransferExit Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### AIF_SCHREIBEN

Schreiben des Anwender Informations Feldes Standard Flashjob KWP 2000: $3D WriteMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_FG_NR | string | Fahrgestellnummer 7-stellig oder 17-stellig |
| AIF_DATUM | string | Datum der SG-Programmierung in der Form TT.MM.JJJJ oder TTMMJJ |
| AIF_ZB_NR | string | BMW/Rover Zusammenbaunummer |
| AIF_SW_NR | string | BMW/Rover Datensatznummer - Softwarenummer |
| AIF_BEHOERDEN_NR | string | BMW/Rover Behoerdennummer |
| AIF_HAENDLER_NR | string | Haendlernummer |
| AIF_SERIEN_NR | string | Tester Seriennummer |
| AIF_KM | long | km-Stand bei der Programmierung |
| AIF_PROG_NR | string | Programmstandsnummer |

### FLASH_PARAMETER_LESEN

Gibt die SG-spezifischen Flash-Parameter zurück

_No arguments._

### FLASH_PARAMETER_SETZEN

Setzt die SG-spezifischen Flash-Parameter

| Name | Type | Description |
| --- | --- | --- |
| SG_ADRESSE | int | Steuergeräteadresse |
| SG_MAXANZAHL_AIF | int | Anzahl der Anwender-Infofelder 0x00  Nicht zulässig sonst Anzahl der AIF |
| SG_GROESSE_AIF | int | Grösse des Anwender-Infofeldes 0x12  18 dez kleines AIF 0x33  51 dez grosses AIF 0x40  64 dez grosses AIF ( gilt nur für Power-Pc ) sonst Nicht zulässig |
| SG_ENDEKENNUNG_AIF | int | Offset für letztes Anwender-Infofeld 0xFE  Letztes AIF nicht überschreibbar 0x01  Letztes AIF ist überschreibbar sonst Nicht zulässig |
| SG_AUTHENTISIERUNG | string | Authentisierungsart table Authentisierung AUTH_TEXT |
| DIAG_PROT | string | optionaler Parameter Diagnoseprotokoll table KONZEPT_TABELLE KONZEPT_TEXT |

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen KWP2000: $10 StartDiagnosticSession Modus  : einstellbar mit diesem Job  Wenn MODE = "ECUPM" ( ECUProgrammingMode ) muss nach dem Job die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |
| BAUDRATE | string | optionaler Parameter fuer die gewuenschte Baudrate table BaudRate BAUD |
| SPEZIFISCHE_BAUDRATE_WERT | long | Parameter nur fuer BAUDRATE = 'SB' ( spezifische Baudrate ) |

### DIAGNOSE_ENDE

Diagnosemode des SG beenden KWP2000: $20 StopDiagnosticSession Modus  : Default

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier a)       $0E Time controlled PowerDown oder b)       $05 PowerDown $00 all ECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x0E) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x05) wird aktiviert |

### SLEEP_MODE_FUNKTIONAL

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| OHNE_POWERMODUL | string | Power Down ohne Powermodul Werte: JA, NEIN table DigitalArgument TEXT Defaultwert: NEIN |

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### IDENT_IBS

$22 40 21 BMW Nr, Seriennummer, SW/HW Index

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_1

$22 40 22 Bytefeld 1 Batterie Powermanagement lesen

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_2

$22 40 23 Bytefeld 2 Batterie Powermanagement lesen

_No arguments._

### STEUERN_PM_HISTOGRAM_RESET

$30 F5 04 Loeschen von pminfo1 index 23-30

_No arguments._

### ADAP_SELEKTIV_LOESCHEN

Löschen von Adaptionen und gelernte Varianten KWP 2000 $31 30 xx xx xx Loeschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

KWP 2000 $31 30 00 10 00 Bit setzen Batterietausch registrieren

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

$31 F6 Systemdiagnose BatterieSensor reset

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

$32 F6 Systemdiagnose BatterieSensor reset beenden

_No arguments._

### CBS_INFO

Ausgabe der CBS-Version

_No arguments._

### CBS_DATEN_LESEN

CBS Daten auslesen (fuer CBS-Version 4) KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### CBS_RESET

CBS Daten Zuruecksetzen (fuer CBS-Version 4) KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default Musterparametersatz fuer Bremsbelagverschleiss Vorder/Hinterachse br_v,100,1,0,0,0,1,0,0 br_h,100,1,0,0,0,1,0,0 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma!)

| Name | Type | Description |
| --- | --- | --- |
| CBS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU, Ueb Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG Defaultwert: 0x00 (ungueltig) |
| CBS_VERFUEGBARKEIT | int | gewuenschte Verfuegbarkeit in Prozent: 0-100 Schalter, keine Aenderung: 255 Defaultwert: 100 |
| CBS_ANZAHL_SERVICE | int | Anzahl der durchgefuehrten Services: 0-30 Schalter, Erhoehung der Anzahl um +1: 31 Defaultwert: 31 |
| CBS_ZIEL_MONAT | int | Ziel-Monat (HU/AU) Januar-Dezember: 1-12 Schalter, keine Aenderung: 255 Defaultwert: 255 |
| CBS_ZIEL_JAHR | int | Ziel-Jahr (HU/AU) 2000-2239: 0-239 Schalter, keine Aenderung: 255 Defaultwert: 255 |
| RMM_CBS_WERT | int | Restlaufleistung in km oder % (siehe Argument Einheit) Schalter, keine Aenderung: 8000h Defaultwert: 8000h |
| ST_UN_CBS_RSTG | int | Einheit Restlaufleistung 0hex -> % 1hex -> km*10 Fhex -> d.c. Defaultwert: Fh |
| FRC_INTM_WAY_CBS_MESS | int | Prognose Wegintervall Umrechnung 1-254*1000km Schalter, setzt auf Defaultwert zurueck: 0h Schalter, keine Aenderung: FFh Defaultwert: FFh |
| FRC_INTM_T_CBS_MESS | int | Prognose Zeitintervall 0-254 Monate Schalter, keine Aenderung: FFh Defaultwert: FFh |
| Res_Byte | int | Reserve Byte (noch unbenutzt) Defaultwert: 00h |

### C_CI_LESEN

Codierindex lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $9B Vehicle Manufacturer Coding Index oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $90 Vehicle Identification Number Modus  : Default

_No arguments._

### C_FG_SCHREIBEN

Fahrgestellnummer schreiben Standard Codierjob KWP2000: $3B WriteDataByLocalIdentifier $90 Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_FG_AUFTRAG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob KWP2000: $3B WriteDataByLocalIdentifier $90 Vehicle Identification Number KWP2000: $1A ReadECUIdentification $90 Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_AEI_LESEN

Aenderungsindex der Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

_No arguments._

### C_AEI_SCHREIBEN

Aenderungsindex der Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII inkl. Ziffern 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_AUFTRAG

Aenderungsindex der Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII inkl. Ziffern 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_C_LESEN

Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_SCHREIBEN

Codierdaten schreiben Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### C_C_AUFTRAG

Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

## Tables

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| 1 | BMW-FAST |
| 2 | KWP2000* |
| 3 | KWP2000 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x29CC | 29CC Verbrennungsaussetzer, mehrere Zylinder |
| 0x29CD | 29CD Verbrennungsaussetzer, Zylinder 1 |
| 0x29CE | 29CE Verbrennungsaussetzer, Zylinder 2 |
| 0x29CF | 29CF Verbrennungsaussetzer, Zylinder 3 |
| 0x29D0 | 29D0 Verbrennungsaussetzer, Zylinder 4 |
| 0x29D1 | 29D1 Verbrennungsaussetzer, Zylinder 5 |
| 0x29D2 | 29D2 Verbrennungsaussetzer, Zylinder 6 |
| 0x29D9 | 29D9 Verbrennungsaussetzer bei geringem Tankfüllstand |
| 0x29DA | 29DA Kurbelwellensensor, Segmentadaption |
| 0x29DB | 29DB Laufunruhe, Segmentzeitmessung |
| 0x29DC | 29DC Zylindereinspritzabschaltung |
| 0x29E0 | 29E0 Gemischregelung |
| 0x29E1 | 29E1 Gemischregelung 2 |
| 0x29F4 | 29F4 Katalysatorkonvertierung |
| 0x29F5 | 29F5 Katalysatorkonvertierung 2 |
| 0x29FF | 29FF Sekundärluftsystem |
| 0x2A00 | 2A00 Sekundärluftsystem |
| 0x2A01 | 2A01 Sekundärluftventil, Mechanik |
| 0x2A02 | 2A02 Sekundärluftventil, Ansteuerung |
| 0x2A03 | 2A03 Sekundärluftpumpenrelais, Ansteuerung |
| 0x2A04 | 2A04 Sekundärluftmassenmesser, Plausibilität |
| 0x2A07 | 2A07 Sekundärluftventil, Mechanik |
| 0x2A12 | 2A12 DMTL-Magnetventil, Ansteuerung |
| 0x2A13 | 2A13 DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x2A15 | 2A15 DMTL, Feinleck |
| 0x2A16 | 2A16 DMTL, Feinstleck |
| 0x2A17 | 2A17 DMTL, Systemfehler |
| 0x2A18 | 2A18 DMTL, Heizung: Ansteuerung |
| 0x2A19 | 2A19 Tankentlüftungsventil, Ansteuerung |
| 0x2A1A | 2A1A Tankentlüftungssystem, Funktion |
| 0x2A1B | 2A1B Tankdeckel |
| 0x2A1C | 2A1C Tankfüllstand, Plausibilität |
| 0x2A2E | 2A2E Gemischregelung |
| 0x2A2F | 2A2F Gemischregelung 2 |
| 0x2A30 | 2A30 Valvetronic, Exzenterwellensensor: Spannungsversorgung |
| 0x2A31 | 2A31 Valvetronic, Exzenterwellensensor: Führung |
| 0x2A32 | 2A32 Valvetronic, Exzenterwellensensor: Referenz |
| 0x2A33 | 2A33 Valvetronic, Exzenterwellensensor: Führung |
| 0x2A34 | 2A34 Valvetronic, Exzenterwellensensor: Referenz |
| 0x2A35 | 2A35 Valvetronic, Exzenterwellensensor: Führung |
| 0x2A36 | 2A36 Valvetronic, Exzenterwellensensor: Referenz |
| 0x2A37 | 2A37 Valvetronic, Exzenterwellensensor: Plausibilität |
| 0x2A38 | 2A38 Valvetronic, Überwachung Schwergängigkeit |
| 0x2A39 | 2A39 Valvetronic, Verstellbereich |
| 0x2A3A | 2A3A Valvetronic, interner Fehler |
| 0x2A3B | 2A3B Valvetronic, Stellmotor: Drehrichtung |
| 0x2A3C | 2A3C Valvetronic-Relais, Ansteuerung |
| 0x2A3D | 2A3D Valvetronic, Stellmotor: Ansteuerung |
| 0x2A3E | 2A3E Valvetronic, Stellmotor: Überlastung |
| 0x2A3F | 2A3F Valvetronic, Stellmotor: Spannungsversorgung |
| 0x2A40 | 2A40 Valvetronic, thermischer Überlastschutz |
| 0x2A41 | 2A41 Valvetronic, elektrischer Überlastschutz |
| 0x2A42 | 2A42 Valvetronic, Position bei Neustart: Plausibilität |
| 0x2A43 | 2A43 Valvetronic, thermischer Überlastschutz: Warnschwelle |
| 0x2A44 | 2A44 Valvetronic, Leistungsbegrenzung |
| 0x2A45 | 2A45 Valvetronic, Stellmotor: Plausibilität |
| 0x2A46 | 2A46 Valvetronic, Adaption |
| 0x2A47 | 2A47 Valvetronic, Exzenterwellensensor: Plausibilität |
| 0x2A80 | 2A80 Einlass-VANOS, Ansteuerung |
| 0x2A82 | 2A82 Einlass-VANOS |
| 0x2A85 | 2A85 Auslass-VANOS, Ansteuerung |
| 0x2A87 | 2A87 Auslass-VANOS, Mechanik |
| 0x2A94 | 2A94 Kurbelwellensensor, Signal |
| 0x2A95 | 2A95 Kurbelwellensensor, Synchronisation |
| 0x2A96 | 2A96 Kurbelwellensensor, Zahnfehler |
| 0x2A97 | 2A97 Kurbelwellensensor, Lückenfehler |
| 0x2A98 | 2A98 Kurbelwelle - Einlassnockenwelle, Korrelation |
| 0x2A99 | 2A99 Kurbelwelle - Auslassnockenwelle, Korrelation |
| 0x2A9A | 2A9A Nockenwellensensor Einlass, Signal |
| 0x2A9B | 2A9B Nockenwellensensor Auslass, Signal |
| 0x2A9E | 2A9E Nockenwellensensor Einlass, Synchonisation |
| 0x2A9F | 2A9F Nockenwellensensor Auslass, Synchronisation |
| 0x2AA0 | 2AA0 Nockenwellensensor Einlass, Signal |
| 0x2AA1 | 2AA1 Nockenwellensensor Auslass, Signal |
| 0x2AA2 | 2AA2 Nockenwellensensor Einlass, Lückenverlust |
| 0x2AA3 | 2AA3 Nockenwellengeber Auslass, Lückenverlust |
| 0x2AA8 | 2AA8 Variable Sauganlage Stellmotor: Ansteuerung |
| 0x2AA9 | 2AA9 Variable Sauganlage Stellmotor 2: Ansteuerung |
| 0x2AAA | 2AAA Variable Sauganlage, Plausibilität |
| 0x2AAB | 2AAB Variable Sauganlage, Eigendiagnose |
| 0x2AAC | 2AAC Variable Sauganlage 2, Eigendiagnose |
| 0x2AAD | 2AAD Kraftstoffpumpe, Notabschaltung |
| 0x2AAE | 2AAE Kraftstoffpumpe |
| 0x2AB2 | 2AB2 Steuergerät, interner Fehler: RAM |
| 0x2AB3 | 2AB3 Steuergerät, interner Fehler: Checksumme |
| 0x2AB4 | 2AB4 Steuergerät, interner Fehler: RAM-Checksumme |
| 0x2AB5 | 2AB5 Steuergerät, interner Fehler: Klopfsensorbaustein |
| 0x2AB6 | 2AB6 Steuergerät, interner Fehler: Mehrfachendstufenbaustein |
| 0x2AC1 | 2AC1 Soundklappe, Ansteuerung |
| 0x2AC6 | 2AC6 Taster Fahrdynamik-Control (SPORT-Taste), Signal |
| 0x2ACB | 2ACB DME-Hauptrelais, Ansteuerung |
| 0x2ACC | 2ACC DME-Hauptrelais, Schaltverzögerung |
| 0x2AD0 | 2AD0 Getriebesteuerung |
| 0x2ADF | 2ADF Leerlaufregelung, Drehzahl |
| 0x2AE0 | 2AE0 Leerlaufregelung bei Kaltstart, Plausibilität |
| 0x2AE1 | 2AE1 Leistungsbedarf im Leerlauf zu hoch |
| 0x2AE4 | 2AE4 Motorentlüftungs-Heizungsrelais, Ansteuerung |
| 0x2C24 | 2C24 Lambdasonden vor Katalysator, vertauscht |
| 0x2C27 | 2C27 Lambdasonde vor Katalysator, Systemcheck |
| 0x2C28 | 2C28 Lambdasonde vor Katalysator 2, Systemcheck |
| 0x2C2B | 2C2B Lambdasonde vor Katalysator, Systemcheck |
| 0x2C2C | 2C2C Lambdasonde vor Katalysator 2, Systemcheck |
| 0x2C2D | 2C2D Lambdasonde vor Katalysator, Schubprüfung |
| 0x2C2E | 2C2E Lambdasonde vor Katalysator 2, Schubprüfung |
| 0x2C31 | 2C31 Lambdasonde vor Katalysator, Trimmregelung |
| 0x2C32 | 2C32 Lambdasonde vor Katalysator 2, Trimmregelung |
| 0x2C37 | 2C37 Lambdasonde vor Katalysator, Heizereinkopplung |
| 0x2C38 | 2C38 Lambdasonde vor Katalysator 2, Heizereinkopplung |
| 0x2C39 | 2C39 Lambdasonde vor Katalysator, Dynamik |
| 0x2C3A | 2C3A Lambdasonde vor Katalysator 2, Dynamik |
| 0x2C3B | 2C3B Lambdasonde vor Katalysator, nicht angesteckt |
| 0x2C3C | 2C3C Lambdasonde vor Katalysator 2, nicht angesteckt |
| 0x2C3D | 2C3D Lambdasonde vor Katalysator, Leitungsfehler |
| 0x2C3E | 2C3E Lambdasonde vor Katalysator 2, Leitungsfehler |
| 0x2C3F | 2C3F Steuergerät, interner Fehler: Lambdasonde, Auswertebaustein |
| 0x2C40 | 2C40 Steuergerät, interner Fehler: Lambdasonde 2, Auswertebaustein |
| 0x2C41 | 2C41 Steuergerät, interner Fehler: Lambdasonde |
| 0x2C42 | 2C42 Steuergerät, interner Fehler: Lambdasonde 2 |
| 0x2C6A | 2C6A Lambdasonden nach Katalysator, vertauscht |
| 0x2C6B | 2C6B Lambdasonde nach Katalysator, Systemcheck |
| 0x2C6C | 2C6C Lambdasonde nach Katalysator 2, Systemcheck |
| 0x2C6D | 2C6D Lambdasonde nach Katalysator, Alterung |
| 0x2C6E | 2C6E Lambdasonde nach Katalysator 2, Alterung |
| 0x2C6F | 2C6F Lambdasonde nach Katalysator, Signal bei Volllast |
| 0x2C70 | 2C70 Lambdasonde nach Katalysator 2, Signal bei Volllast |
| 0x2C73 | 2C73 Lambdasonde nach Katalysator, Signal |
| 0x2C74 | 2C74 Lambdasonde nach Katalysator 2, Signal |
| 0x2C75 | 2C75 Lambdasonde nach Katalysator, Signal |
| 0x2C76 | 2C76 Lambdasonde nach Katalysator 2, Signal |
| 0x2C77 | 2C77 Lambdasonde nach Katalysator, Signal |
| 0x2C78 | 2C78 Lambdasonde nach Katalysator 2, Signal |
| 0x2C79 | 2C79 Lambdasonde nach Katalysator, Signal |
| 0x2C7A | 2C7A Lambdasonde nach Katalysator 2, Signal |
| 0x2C7B | 2C7B Lambdasonde nach Katalysator, Signal |
| 0x2C7C | 2C7C Lambdasonde nach Katalysator 2, Signal |
| 0x2C7E | 2C7E Lambdasonde nach Katalysator, Trimmregelung |
| 0x2C7F | 2C7F Lambdasonde nach Katalysator 2, Trimmregelung |
| 0x2C9C | 2C9C Lambdasondenbeheizung vor Katalysator, Ansteuerung |
| 0x2C9D | 2C9D Lambdasondenbeheizung vor Katalysator 2, Ansteuerung |
| 0x2C9E | 2C9E Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2C9F | 2C9F Lambdasondenbeheizung nach Katalysator 2, Ansteuerung |
| 0x2CA6 | 2CA6 Lambdasondenbeheizung vor Katalysator, Funktion |
| 0x2CA7 | 2CA7 Lambdasondenbeheizung vor Katalysator 2, Funktion |
| 0x2CA8 | 2CA8 Lambdasondenbeheizung nach Katalysator, Funktion |
| 0x2CA9 | 2CA9 Lambdasondenbeheizung nach Katalysator 2, Funktion |
| 0x2CEC | 2CEC Drosselklappensteller, klemmt kurzzeitig |
| 0x2CED | 2CED Drosselklappensteller, klemmt dauerhaft |
| 0x2CEE | 2CEE Drosselklappensteller, schwergängig |
| 0x2CEF | 2CEF Drosselklappensteller, Ansteuerung |
| 0x2CF6 | 2CF6 Drosselklappenpotenziometer 1, Plausibilität zu Luftmasse |
| 0x2CF7 | 2CF7 Drosselklappenpotenziometer 2, Plausibilität zu Luftmasse |
| 0x2CF9 | 2CF9 Drosselklappenpotenziometer 1 |
| 0x2CFA | 2CFA Drosselklappenpotenziometer 2 |
| 0x2CFB | 2CFB Drosselklappen-Adaptionswert |
| 0x2CFC | 2CFC Drosselklappe, Startprüfung |
| 0x2CFD | 2CFD Drosselklappen-Adaptionswert fehlt |
| 0x2CFE | 2CFE Drosselklappe, kontinuierliche Adaption |
| 0x2D06 | 2D06 Luftmassensystem |
| 0x2D07 | 2D07 Drosselklappe |
| 0x2D09 | 2D09 Drosselklappe |
| 0x2D0F | 2D0F Luftmassenmesser, Signal |
| 0x2D1B | 2D1B Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2D1C | 2D1C Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2D1D | 2D1D Fahrpedalmodul, Pedalwertgeber 1, Spannungsversorgung |
| 0x2D1E | 2D1E Fahrpedalmodul, Pedalwertgeber 2, Spannungsversorgung |
| 0x2D1F | 2D1F Fahrpedalmodul, Pedalwertgeber Potentiometer, Signal |
| 0x2D20 | 2D20 Fahrpedalmodul, Pedalwertgeber, Plausibilität zwischen Signal 1 und Signal 2 |
| 0x2D28 | 2D28 Differenzdrucksensor, Saugrohr: Signal |
| 0x2D29 | 2D29 Differenzdrucksensor, Saugrohr: Plausibilität |
| 0x2D2A | 2D2A Differenzdrucksensor, Saugrohr: Adaption |
| 0x2D50 | 2D50 DME, interner Fehler:  Überwachung Fahrgeschwindigkeitsregelung |
| 0x2D51 | 2D51 Überwachung Luftpfad |
| 0x2D52 | 2D52 DME, interner Fehler: Überwachung Motordrehzahl |
| 0x2D53 | 2D53 DME, interner Fehler: Überwachung Drehzahlbegrenzung |
| 0x2D54 | 2D54 DME, interner Fehler: Überwachung  Drehzahlbegrenzung Reset |
| 0x2D55 | 2D55 DME, interner Fehler: Überwachung Fahrpedalmodul |
| 0x2D56 | 2D56 DME, interner Fehler: Überwachung Leerlaufregelung |
| 0x2D57 | 2D57 DME, interner Fehler: Überwachung externe Momentenanforderung |
| 0x2D58 | 2D58 DME, interner Fehler: Überwachung Sollmoment |
| 0x2D59 | 2D59 DME, interner Fehler: Überwachung Istmoment |
| 0x2D5A | 2D5A Überwachung Motordrehmoment-Begrenzung |
| 0x2D5B | 2D5B DME, interner Fehler: Momentenüberwachung |
| 0x2D5C | 2D5C DME, interner Fehler: Überwachung Hardware |
| 0x2D5F | 2D5F Reset |
| 0x2DB5 | 2DB5 Fahrgeschwindigkeitsregelung, Signal |
| 0x2DB6 | 2DB6 Fahrgeschwindigkeitsregelung,Schalter Multifunktionslenkrad |
| 0x2DB7 | 2DB7 Fahrgeschwindigkeitsregelung, Zeitlimit der Datenübertragung erreicht |
| 0x2DBE | 2DBE Aktive Geschwindigkeitsregelung, gesperrt für Fahrzyklus |
| 0x2DC0 | 2DC0 Längsdynamikmanagement |
| 0x2DC3 | 2DC3 Überwachung Klemme 15 |
| 0x2DC5 | 2DC5 Momentenanforderung über CAN, Plausibilität |
| 0x2DC6 | 2DC6 Tankfüllstandswert, Plausibilität |
| 0x2DC8 | 2DC8 Botschaft vom EGS fehlt, EGS 1 |
| 0x2DC9 | 2DC9 Botschaft vom EGS fehlt, EGS 2 |
| 0x2DCC | 2DCC Botschaft vom ASC/DSC fehlt, ASC 1 |
| 0x2DCD | 2DCD Botschaft vom ASC/DSC fehlt, ASC 3 |
| 0x2DCE | 2DCE Botschaft vom ASC/DSC fehlt, ASC 4 |
| 0x2DD0 | 2DD0 Botschaft von der Instrumentenkombination fehlt, I-Kombi 2 |
| 0x2DD1 | 2DD1 Botschaft von der Instrumentenkombination fehlt, I-Kombi 3 |
| 0x2DD2 | 2DD2 Botschaft vom LWS-Steuergerät fehlt, LWS |
| 0x2DD3 | 2DD3 Botschaft vom SMG-Steuergerät fehlt,  SMG 1 |
| 0x2DD4 | 2DD4 Botschaft (TxU) fehlt |
| 0x2DD5 | 2DD5 Botschaft von der EKP fehlt |
| 0x2DE0 | 2DE0 Botschaft von der elektrischen Kraftstoffpumpe fehlt, EKP |
| 0x2DE1 | 2DE1 Tankfüllstandssensor, links |
| 0x2DE2 | 2DE2 Tankfüllstandssensor, rechts |
| 0x2DE3 | 2DE3 Botschaft von der Instrumentenkombination fehlt, I-Kombi 7 |
| 0x2DEB | 2DEB Powermanagement, Bordnetzüberwachung |
| 0x2DEC | 2DEC Powermanagement, Batterieüberwachung |
| 0x2DED | 2DED Powermanagement, Ruhestromüberwachung |
| 0x2E18 | 2E18 Zündung, Zylinder 1 |
| 0x2E19 | 2E19 Zündung, Zylinder 2 |
| 0x2E1A | 2E1A Zündung, Zylinder 3 |
| 0x2E1B | 2E1B Zündung, Zylinder 4 |
| 0x2E1C | 2E1C Zündung, Zylinder 5 |
| 0x2E1D | 2E1D Zündung, Zylinder 6 |
| 0x2E24 | 2E24 Zündspule Zylinder 1 |
| 0x2E25 | 2E25 Zündspule Zylinder 2 |
| 0x2E26 | 2E26 Zündspule Zylinder 3 |
| 0x2E27 | 2E27 Zündspule Zylinder 4 |
| 0x2E28 | 2E28 Zündspule Zylinder 5 |
| 0x2E29 | 2E29 Zündspule Zylinder 6 |
| 0x2E30 | 2E30 Einspritzventil Zylinder 1, Ansteuerung |
| 0x2E31 | 2E31 Einspritzventil Zylinder 2, Ansteuerung |
| 0x2E32 | 2E32 Einspritzventil Zylinder 3, Ansteuerung |
| 0x2E33 | 2E33 Einspritzventil Zylinder 4, Ansteuerung |
| 0x2E34 | 2E34 Einspritzventil Zylinder 5, Ansteuerung |
| 0x2E35 | 2E35 Einspritzventil Zylinder 6, Ansteuerung |
| 0x2E68 | 2E68 Klopfsensorsignal 1 |
| 0x2E69 | 2E69 Klopfsensorsignal 2 |
| 0x2E77 | 2E77 Zündung, Spannungsversorgung |
| 0x2E7C | 2E7C Bitserielle Datenschnittstelle, Signal |
| 0x2E81 | 2E81 Elektrische Wasserpumpe, Drehzahlabweichung |
| 0x2E82 | 2E82 Elektrische Wasserpumpe, Abschaltung |
| 0x2E83 | 2E83 Elektrische Wasserpumpe, leistungsreduzierter Betrieb |
| 0x2E84 | 2E84 Elektrische Wasserpumpe, Kommunikation |
| 0x2E85 | 2E85 Elektrische Wasserpumpe, Kommunikation |
| 0x2E8B | 2E8B Intelligenter Batteriesensor, Signal |
| 0x2E8C | 2E8C Intelligenter Batteriesensor, Funktion |
| 0x2E8D | 2E8D Intelligenter Batteriesensor, Signalübertragung |
| 0x2E8E | 2E8E Intelligenter Batteriesensor, Kommunikation |
| 0x2E96 | 2E96 Generator, Untererregung |
| 0x2E97 | 2E97 Generator |
| 0x2E98 | 2E98 Generator, Kommunikation |
| 0x2E9F | 2E9F Ölzustandssensor |
| 0x2EA1 | 2EA1 Ölzustandssensor, Kommunikation |
| 0x2EE0 | 2EE0 Kühlmitteltemperatursensor, Signal |
| 0x2EE1 | 2EE1 Kühlmitteltemperatursensor, Plausibilität |
| 0x2EE2 | 2EE2 Kühlmitteltemperatursensor, Plausibilität, Signal konstant |
| 0x2EE3 | 2EE3 Kühlmitteltemperatursensor, Plausibilität, Gradient |
| 0x2EEA | 2EEA Temperatursensor Kühleraustritt, Signal |
| 0x2EEB | 2EEB Temperatursensor Kühleraustritt, Plausibilität, Gradient |
| 0x2EEC | 2EEC Temperatursensor Kühleraustritt, Plausibilität |
| 0x2EF4 | 2EF4 Kennfeldthermostat, Mechanik |
| 0x2EF5 | 2EF5 Kennfeldthermostat, Ansteuerung |
| 0x2EFE | 2EFE Elektrolüfter, Ansteuerung |
| 0x2EFF | 2EFF Elektrolüfter, Eigendiagnose |
| 0x2F08 | 2F08 Ansauglufttemperatursensor, Signal |
| 0x2F09 | 2F09 Ansauglufttemperatursensor, Plausibilität |
| 0x2F0D | 2F0D Kühlerjalousie, Ansteuerung, (GLF) |
| 0x2F0F | 2F0F Kühlerjalousie, Eigendiagnose (ALKS) |
| 0x2F12 | 2F12 Klimakompressor, Ansteuerung |
| 0x2F44 | 2F44 EWS Manipulationsschutz |
| 0x2F45 | 2F45 Schnittstelle EWS-DME |
| 0x2F46 | 2F46 EWS Wechselcode-Abspeicherng |
| 0x2F47 | 2F47 EWS Irreversibler Steuergerätefehler |
| 0x2F4E | 2F4E Fahrzeuggeschwindigkeit, Signal |
| 0x2F4F | 2F4F Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F58 | 2F58 Startautomatik, Ansteuerung |
| 0x2F63 | 2F63 Bremslichtschalter, Plausibilität |
| 0x2F64 | 2F64 Bremslichttestschalter, Plausibilität |
| 0x2F67 | 2F67 Kupplungsschalter, Signal |
| 0x2F6C | 2F6C Abgasklappe, Ansteuerung |
| 0x2F71 | 2F71 E-Box-Lüfter, Ansteuerung |
| 0x2F76 | 2F76 Umgebungsdrucksensor, Signal |
| 0x2F77 | 2F77 Umgebungsdrucksensor, Plausibilität |
| 0x2F7B | 2F7B Öldruckschalter, Plausibilität |
| 0x2F80 | 2F80 Motorabstellzeit, Plausibilität |
| 0x2F85 | 2F85 DME, interner Fehler: Innentemperatursensor, Signal |
| 0x2F8F | 2F8F Fahrpedalmodul und Bremspedal, Plausibilität |
| 0x2F94 | 2F94 Kraftstoffpumpenrelais, Ansteuerung |
| 0x2F99 | 2F99 Umgebungstemperatursensor, Plausibilität |
| 0x2F9A | 2F9A Umgebungstemperatursensor, Kommunikation |
| 0x2F9E | 2F9E Thermischer Ölniveausensor |
| 0x2FA3 | 2FA3 Codierung fehlt |
| 0x2FA4 | 2FA4 Falscher Datensatz |
| 0x2FC6 | 2FC6 Energiesparmodus aktiv |
| 0xCD87 | CD87 PT-CAN Kommunikationsfehler |
| 0xCD8B | CD8B Local-CAN Kommunikationsfehler |
| 0xCD8F | CD8F PT-CAN Kommunikationsfehler |
| 0xCD94 | CD94 Botschaft (Außentemperatur/Relativzeit, 310) |
| 0xCD95 | CD95 Botschaft (Bedienung Tempomat/ACC, 194) |
| 0xCD96 | CD96 Botschaft (Drehmomentanforderung ACC, B7) |
| 0xCD97 | CD97 Botschaft (Drehmomentanforderung AFS, B9) |
| 0xCD98 | CD98 Botschaft (Drehmomentanforderung DSC, B6) |
| 0xCD99 | CD99 Botschaft (Drehmomentanforderung EGS, B5) |
| 0xCD9A | CD9A Botschaft (Drehmomentanforderung SMG, BD) |
| 0xCD9B | CD9B Botschaft (Fahrzeugmodus, 315) |
| 0xCD9C | CD9C Botschaft (Geschwindigkeit, 1A0) |
| 0xCD9D | CD9D Botschaft (Getriebedaten, BA) |
| 0xCD9E | CD9E Botschaft (Getriebedaten2, 1A2) |
| 0xCD9F | CD9F Botschaft (Kilometerstand/Reichweite, 330) |
| 0xCDA0 | CDA0 Botschaft (Klemmenstatus, 130) |
| 0xCDA1 | CDA1 Botschaft (Lenkradwinkel, C4) |
| 0xCDA2 | CDA2 Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0xCDA3 | CDA3 Botschaft (Powermanagement Ladespannung, 334) |
| 0xCDA4 | CDA4 Botschaft (Status ARS-Modul, 1AC) |
| 0xCDA5 | CDA5 Botschaft (Status DSC, 19E) |
| 0xCDA6 | CDA6 Botschaft (Status Elektrische Kraftstoffpumpe, 335) |
| 0xCDA7 | CDA7 Botschaft (Status Rückwärtsgang, 3B0) |
| 0xCDA8 | CDA8 Botschaft (Status Kombi, 1B4) |
| 0xCDA9 | CDA9 Botschaft (Wärmestrom/Lastmoment Klima, 1B5) |
| 0xCDAA | CDAA Botschaft (Status Crashabschaltung EKP, 135) |
| 0xCDAB | CDAB Botschaft (Lampenzustand,  21A) |
| 0xCDAC | CDAC Botschaft (Status Wasserventil,  3B5) |
| 0xCDAD | CDAD Botschaft (Anforderung Radmoment Antriebstrang,  BF) |
| 0xCDAE | CDAE Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDAF | CDAF Botschaft (Status Anhänger, 2E4) |
| 0xCDB0 | CDB0 Botschaft (Anzeige Getriebedaten) |
| 0xFFFF | unbekannter Fehlerort |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0003 |  Tankfüllstand zu gering |
| 0x0004 | kein Signal oder Wert |
| 0x0005 | 1. Startwert im Flash zerstört. 2- aus 3-Auswahl fehlgeschlagen oder 2. Fehlerrückmeldung: Startwertprogrammierroutine |
| 0x0006 | ALIVE-Fehler |
| 0x0007 | Abbruch wegen Stromschwankungen bei Feinleckprüfung |
| 0x0008 | unplausibles Signal oder Wert |
| 0x0009 | Abgas nach Katalysator zu fett |
| 0x000A | Abgas nach Katalysator zu mager |
| 0x000B | Abgasschädigend |
| 0x000C | Abgasschädigend nach Startvorgang |
| 0x000D | Aktualisierungszähler inkrementiert nicht (Alive-Zähler) |
| 0x000E | Anforderung AMT unplausibel |
| 0x000F | Anforderung EGS unplausibel |
| 0x0010 | Anforderung I-Anteil unplausibel |
| 0x0011 | Anforderung MSR unplausibel |
| 0x0012 | Anforderung PD-Anteil unplausibel |
| 0x0013 | Ansteuerung fehlerhaft |
| 0x0014 | Applikationssoftware |
| 0x0015 | Arbeitstemperatur Sonde nicht erreicht |
| 0x0016 | BSD-Fehler |
| 0x0017 | Betriebsbereitschaft Sonde zu spät erreicht |
| 0x0018 | Bootsoftware |
| 0x0019 | CAN Baustein im Zustand passiv |
| 0x001A | CAN Bus off |
| 0x001B | CAN Timeout |
| 0x001C | CAN Wert unplausibel |
| 0x001D | CAS-Fehler |
| 0x001E | Checksumme |
| 0x001F | Codierdaten im EEPROM fehlerhaft |
| 0x0020 | DISA 1: Schalter defekt |
| 0x0021 | DISA 2: Schalter defekt |
| 0x0022 | Datenbereich |
| 0x0023 | Differenz Stop-/Startposition |
| 0x0024 | Doppelfehler |
| 0x0025 | Drehrichtungserkennung |
| 0x0026 | Drehzahl außerhalb der Toleranz |
| 0x0027 | Drehzahl zu hoch |
| 0x0028 | Drehzahl zu niedrig |
| 0x0029 | Drosselklappenstellung unplausibel |
| 0x002A | EBSD-Fehler |
| 0x002B | Eigendiagnose / Mechanischer- oder Hardwaredefekt |
| 0x002C | Elektrisch |
| 0x002D | Empfangsfehler des EWS-Telegramms (Start-, Stopbit- oder Framefehler) |
| 0x002E | Exzenterwinkel fährt nicht auf Vollhubposition |
| 0x002F | Falsche EWS-Telegramme empfangen. Die Fangbereichsrechnung ist für mindestens 5 Telegrammauswertungen fehlgeschlagen. |
| 0x0030 | Federtest |
| 0x0031 | Federtest und Notluftprüfung verfehlt  |
| 0x0032 | Fehler Ablage |
| 0x0033 | Fehler beim Programmieren oder rücksetzen des Startwertes |
| 0x0034 | Fehlerverwaltung Getriebe |
| 0x0035 | Funktionstest |
| 0x0036 | Funktionstest Bandende |
| 0x0037 | Füllstandssignalwert zum Verbrauchswert unplausibel |
| 0x0038 | Gemisch zu fett |
| 0x0039 | Gemisch zu mager |
| 0x003A | Gleichlauffehler |
| 0x003B | Grobe Undichtigkeit zwischen Sekundärluftpumpe und -Ventil |
| 0x003C | Hardware |
| 0x003D | Heiztakteinkopplung auf Signal |
| 0x003E | IST Wert zu hoch |
| 0x003F | IST Wert zu niedrig |
| 0x0040 | Initialisierungsfehler |
| 0x0041 | Innenwiderstand des Signalkreises zu hochohmig |
| 0x0042 | Klemmt offen |
| 0x0043 | Kommunikationsfehler |
| 0x0044 | Kurzschluss der Motorleitungen |
| 0x0045 | Kurzschluss nach Minus |
| 0x0046 | Kurzschluss nach Minus oder Leitungsunterbrechung |
| 0x0047 | Kurzschluss nach Plus |
| 0x0048 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x0049 | Lagereglerüberwachung |
| 0x004A | Leckage grösser 0,5 mm |
| 0x004B | Leckage grösser 1,0 mm |
| 0x004C | Leitungsunterbrechung |
| 0x004D | Leitungsunterbrechung  |
| 0x004E | Lesefehler im EEPROM: Wechselcode Ablage |
| 0x004F | Luftzufuhr nicht korrekt |
| 0x0050 | Mechanisch |
| 0x0051 | Mechanischer- oder Hardwaredefekt |
| 0x0052 | Mehr als 3 Parity-Fehler erkannt |
| 0x0053 | Messwert HFM zu hoch |
| 0x0054 | Messwert HFM zu niedrig |
| 0x0055 | Momentenanforderung vom ACC/DCC unplausibel |
| 0x0056 | Momentenanforderung vom LDM trotzt Bremssignal |
| 0x0057 | Momentenanforderung vom LDM unplausibel |
| 0x0058 | Momentenanforderung vom Tempomat trotz Bremssignal |
| 0x0059 | Motor mechanisch zu laut |
| 0x005A | Motor mechanisch zu laut  |
| 0x005B | Motor mechanisch zu leise |
| 0x005C | Neuadaption erforderlich |
| 0x005D | Niveaumessung  |
| 0x005E | Notabschaltung |
| 0x005F | Notlauf |
| 0x0060 | Notluftprüfung |
| 0x0061 | Notluftpunkt nicht adaptiert |
| 0x0062 | Offset Maximum überschritten |
| 0x0063 | Parity-Fehler |
| 0x0064 | Pedalwert zu Bremspedal |
| 0x0065 | Permittivitätsmessung |
| 0x0066 | Plausibilitaet zwischen Poti 1 und 2 verletzt |
| 0x0067 | Poti 1 unplausibel zu MAF |
| 0x0068 | Poti 2 unplausibel zu MAF |
| 0x0069 | Powermanagement |
| 0x006A | Prüfsumme ungleich errechnetem Wert |
| 0x006B | Pumpenstromschwelle bei Ventilprüfung erreicht |
| 0x006C | RAM-Überprüfung |
| 0x006D | Randbedingungen verletzt |
| 0x006E | Relais-Fehler |
| 0x006F | Ruhestromverletzung |
| 0x0070 | SPI-Fehler |
| 0x0071 | Schalter defekt |
| 0x0072 | Schreib-/Lesefehler im EEPROM |
| 0x0073 | Schreibfehler im EEPROM: Wechselcode Ablage |
| 0x0074 | Segmentadaption am  Anschlag |
| 0x0075 | Segmentzeit |
| 0x0076 | Sekundärluftmasse zu gering |
| 0x0077 | Sekundärluftmenge zu gering Bank 1 |
| 0x0078 | Sekundärluftmenge zu gering Bank 1 und Bank 2 |
| 0x0079 | Sekundärluftmenge zu gering Bank 2 |
| 0x007A | Sekundärluftpumpe nicht aktiv |
| 0x007B | Sekundärluftventil oder -schlauch blockiert |
| 0x007C | Sensordiagnose |
| 0x007D | Sensorsignal |
| 0x007E | Sensorsignale zueinander unplausibel |
| 0x007F | Sicherheitsabschaltung |
| 0x0080 | Sicherheitsrechner RAM |
| 0x0081 | Signal fehlt |
| 0x0082 | Signal nicht plausibel |
| 0x0083 | Signal oberhalb Schwelle |
| 0x0084 | Signal ungültig für Synchronisation |
| 0x0085 | Signal unplausibel |
| 0x0086 | Signal unterhalb Schwelle |
| 0x0087 | Signal während Schubabschaltung  oberhalb Schwelle |
| 0x0088 | Signal während Schubabschaltung unterhalb Schwelle |
| 0x0089 | Signalamplitude zu gering |
| 0x008A | Signalfehler |
| 0x008B | Software |
| 0x008C | Software-Fehler |
| 0x008D | Sonde nicht angesteckt |
| 0x008E | Sondensignal zu träge |
| 0x008F | Sondensignal zu träge nach Schubphase |
| 0x0090 | Sondentemperatur  ungültig |
| 0x0091 | Spannung |
| 0x0092 | Spannungsregler 1 |
| 0x0093 | Spannungsregler 2 |
| 0x0094 | Sporttastersignal unplausibel |
| 0x0095 | Startphase |
| 0x0096 | Steuergerät defekt |
| 0x0097 | Strom |
| 0x0098 | Synchronisation |
| 0x0099 | Systemfehler |
| 0x009A | Temperatur |
| 0x009B | Temperaturgradient zu steil |
| 0x009C | Temperaturmessung |
| 0x009D | Temperaturschwelle 1 überschritten |
| 0x009E | Temperaturschwelle 2 überschritten |
| 0x009F | Temperatursignal konstant |
| 0x00A0 | Tiefentladung |
| 0x00A1 | Timeout |
| 0x00A2 | Timeout  |
| 0x00A3 | Timeout SPI Bus |
| 0x00A4 | Timeoutfehler: 10 Sekunden nach Kl.15 EIN noch kein EWS-Telegramm empfangen, evtl. Leitungsunterbrechung oder Kurzschluss nach Minus |
| 0x00A5 | Toggle-Bit |
| 0x00A6 | Trockenlauf |
| 0x00A7 | Unterbrechung Abgleichsleitung |
| 0x00A8 | Unterbrechung Nernstleitung |
| 0x00A9 | Unterbrechung Pumpstrompfad |
| 0x00AA | Unterbrechung virtuelle Masse |
| 0x00AB | Unterspannung |
| 0x00AC | Variantenüberwachung |
| 0x00AD | Verbrennungsaussetzer an mehreren Zylindern |
| 0x00AE | Verlustmoment unplausibel |
| 0x00AF | Wakeupleitung Masseschluss |
| 0x00B0 | Wakeupleitung Pegel unplausibel |
| 0x00B1 | Warnschwelle Stellmotor Temperatur |
| 0x00B2 | Warnschwelle Strom |
| 0x00B3 | Wert außerhalb Referenzbereich |
| 0x00B4 | Wirkungsgrad unter Schwellwert |
| 0x00B5 | Zahnfehler |
| 0x00B6 | Zahnfehler Kurbelwellengeber |
| 0x00B7 | Zahnzeitfehler |
| 0x00B8 | Zündkreisüberwachung |
| 0x00B9 | Zündzeit Zylinder 1 zu gering |
| 0x00BA | Zündzeit Zylinder 2 zu gering |
| 0x00BB | Zündzeit Zylinder 3 zu gering |
| 0x00BC | Zündzeit Zylinder 4 zu gering |
| 0x00BD | Zündzeit Zylinder 5 zu gering |
| 0x00BE | Zündzeit Zylinder 6 zu gering |
| 0x00BF | batterieloser Betrieb |
| 0x00C0 | defekt |
| 0x00C1 | gelernter Bereich ausserhalb der Toleranzen |
| 0x00C2 | interne Temperatur zu hoch |
| 0x00C3 | interner RAM-Baustein |
| 0x00C4 | irreversibel aus |
| 0x00C5 | kein Signal |
| 0x00C6 | kein Startwert programmiert |
| 0x00C7 | keine Anschläge gelernt |
| 0x00C8 | keine Codierung erfolgt (nach Programmierung) |
| 0x00C9 | keine Kommunikation über BSD-Schnittstelle |
| 0x00CA | keine Spannung am Notlauf-Eingang der Pumpe |
| 0x00CB | klemmt dauerhaft |
| 0x00CC | klemmt kurzzeitig |
| 0x00CD | klemmt offen |
| 0x00CE | kurzschluss nach Plus |
| 0x00CF | maximales Kupplungsmoment unplausibel |
| 0x00D0 | minimales Kupplungsmoment unplausibel |
| 0x00D1 | mit Kraftstoffabschaltung |
| 0x00D2 | nicht abgefallen |
| 0x00D3 | nicht angezogen  |
| 0x00D4 | nicht korrekt geschlossen |
| 0x00D5 | obere Schwelle Pumpenstrom bei Referenzmessung |
| 0x00D6 | oberer Anschlag nicht gelernt |
| 0x00D7 | reversibel aus |
| 0x00D8 | schaltet zu spät |
| 0x00D9 | schwergängig zu langsam |
| 0x00DA | schwergängig, klemmt mechanisch |
| 0x00DB | unplausibel bezüglich Lambdaregelung |
| 0x00DC | untere Schwelle Pumpenstrom bei Referenzmessung |
| 0x00DD | unteren Anschlag lernen während Urinitialisierung abgebrochen |
| 0x00DE | unterer Anschlag nicht gelernt |
| 0x00DF | vertauschte Lambdasonden nach Katalysator |
| 0x00E0 | vertauschte Lambdasonden vor Katalysator |
| 0x00E1 | Überlast |
| 0x00E2 | Überlast Strom |
| 0x00E3 | Überspannung |
| 0x00E4 | Überstrom |
| 0x00E5 | Überstrom zu lange |
| 0x00E6 | Übertemperatur |
| 0x00E7 | Übertemperatur Endstufe |
| 0x00E8 | Warnschwelle Steuergerät Temperatur (VVT-Endstufe) |
| 0x00E9 | Ventil öffnet nicht |
| 0x00EA | Sensor defekt |
| 0x00EB | Zahnsprung |
| 0x00EC | Unterbrechung Pumpstrompfad oder virtuelle Masse |
| 0x00ED | Signal magerer als erwartet |
| 0x00EE | Signal fetter als erwartet |
| 0x00EF | Spannungsversorgung fehlt |
| 0x00F0 | Temperaturgradient zu hoch |
| 0x00F1 | Timeout (Ungültigkeitswert vom Kombi) |
| 0x00F2 | Oelniveau zu niedrig |
| 0x00F3 | Fertigungsmodus |
| 0x00F4 | Transportmodus |
| 0x00F5 | Werkstattmodus |
| 0x00F6 | Prüfsumme |
| 0x00F7 | Valvetronic öffnet nicht |
| 0x00F8 | Integrierte Momentenreserve nicht erreicht |
| 0x00F9 | Motorkühlmitteltemperatur - Signal festliegend hoch |
| 0x00FA | Tankfüllstand zu gering |
| 0xFFFF | unbekannte Fehlerart |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x29CC | 0x00AD | 0x000B | 0x000C | 0x00D1 |
| 0x29CD | 0x0000 | 0x000B | 0x000C | 0x00D1 |
| 0x29CE | 0x0000 | 0x000B | 0x000C | 0x00D1 |
| 0x29CF | 0x0000 | 0x000B | 0x000C | 0x00D1 |
| 0x29D0 | 0x0000 | 0x000B | 0x000C | 0x00D1 |
| 0x29D1 | 0x0000 | 0x000B | 0x000C | 0x00D1 |
| 0x29D2 | 0x0000 | 0x000B | 0x000C | 0x00D1 |
| 0x29D9 | 0x0000 | 0x0000 | 0x0003 | 0x0000 |
| 0x29DA | 0x0000 | 0x0000 | 0x0074 | 0x0000 |
| 0x29DB | 0x0000 | 0x0000 | 0x00B6 | 0x0000 |
| 0x29DC | 0x0003 | 0x0000 | 0x0000 | 0x0000 |
| 0x29E0 | 0x0000 | 0x0000 | 0x0038 | 0x0039 |
| 0x29E1 | 0x0000 | 0x0000 | 0x0038 | 0x0039 |
| 0x29F4 | 0x0000 | 0x0000 | 0x00B4 | 0x00B4 |
| 0x29F5 | 0x0000 | 0x0000 | 0x00B4 | 0x00B4 |
| 0x29FF | 0x003B | 0x0076 | 0x007A | 0x007B |
| 0x2A00 | 0x0000 | 0x0078 | 0x0079 | 0x0077 |
| 0x2A01 | 0x0042 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A02 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2A03 | 0x0000 | 0x004D | 0x0045 | 0x0047 |
| 0x2A04 | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A07 | 0x00CD | 0x0000 | 0x0000 | 0x0000 |
| 0x2A12 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2A13 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2A15 | 0x0000 | 0x0000 | 0x0000 | 0x004B |
| 0x2A16 | 0x0000 | 0x0000 | 0x004A | 0x0000 |
| 0x2A17 | 0x006B | 0x0007 | 0x00DC | 0x00D5 |
| 0x2A18 | 0x0000 | 0x004C | 0x0045 | 0x00CE |
| 0x2A19 | 0x0000 | 0x004C | 0x0045 | 0x00CE |
| 0x2A1A | 0x0035 | 0x0036 | 0x0000 | 0x0000 |
| 0x2A1B | 0x0000 | 0x0000 | 0x0000 | 0x00D4 |
| 0x2A1C | 0x0037 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A2E | 0x0000 | 0x0000 | 0x0038 | 0x0039 |
| 0x2A2F | 0x0000 | 0x0000 | 0x0038 | 0x0039 |
| 0x2A30 | 0x0000 | 0x0000 | 0x0045 | 0x0047 |
| 0x2A31 | 0x0000 | 0x0063 | 0x0000 | 0x0000 |
| 0x2A32 | 0x0000 | 0x0063 | 0x0000 | 0x0000 |
| 0x2A33 | 0x0000 | 0x0000 | 0x007C | 0x0000 |
| 0x2A34 | 0x0000 | 0x0000 | 0x007C | 0x0000 |
| 0x2A35 | 0x0000 | 0x0000 | 0x0000 | 0x007D |
| 0x2A36 | 0x0000 | 0x0000 | 0x0000 | 0x007D |
| 0x2A37 | 0x007E | 0x0000 | 0x0000 | 0x0000 |
| 0x2A38 | 0x0049 | 0x0049 | 0x0000 | 0x0000 |
| 0x2A39 | 0x0000 | 0x00C7 | 0x00DE | 0x00C1 |
| 0x2A3A | 0x0072 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A3B | 0x0025 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A3C | 0x006E | 0x0000 | 0x0000 | 0x0000 |
| 0x2A3D | 0x0000 | 0x0044 | 0x0045 | 0x0047 |
| 0x2A3E | 0x0000 | 0x0000 | 0x00E1 | 0x0000 |
| 0x2A3F | 0x0000 | 0x0000 | 0x00AB | 0x00E3 |
| 0x2A40 | 0x0000 | 0x00E7 | 0x0000 | 0x0000 |
| 0x2A41 | 0x0000 | 0x0000 | 0x0000 | 0x00E2 |
| 0x2A42 | 0x0000 | 0x0000 | 0x0000 | 0x0023 |
| 0x2A43 | 0x0000 | 0x00E8 | 0x00B1 | 0x00B2 |
| 0x2A44 | 0x0000 | 0x002E | 0x00F7 | 0x0000 |
| 0x2A45 | 0x0000 | 0x0000 | 0x0000 | 0x00E5 |
| 0x2A46 | 0x0000 | 0x0000 | 0x00DE | 0x00D6 |
| 0x2A47 | 0x00EA | 0x0000 | 0x0000 | 0x0000 |
| 0x2A80 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2A82 | 0x00DA | 0x0000 | 0x0000 | 0x0000 |
| 0x2A85 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2A87 | 0x00DA | 0x0000 | 0x0000 | 0x0000 |
| 0x2A94 | 0x0000 | 0x0000 | 0x0085 | 0x0081 |
| 0x2A95 | 0x0000 | 0x0000 | 0x0000 | 0x0098 |
| 0x2A96 | 0x0000 | 0x0000 | 0x0000 | 0x00B5 |
| 0x2A97 | 0x0000 | 0x0000 | 0x0000 | 0x00B7 |
| 0x2A98 | 0x0000 | 0x0000 | 0x00EB | 0x00B3 |
| 0x2A99 | 0x0000 | 0x0000 | 0x00EB | 0x00B3 |
| 0x2A9A | 0x0000 | 0x0000 | 0x0000 | 0x0084 |
| 0x2A9B | 0x0000 | 0x0000 | 0x0000 | 0x0084 |
| 0x2A9E | 0x0000 | 0x0000 | 0x0000 | 0x0098 |
| 0x2A9F | 0x0000 | 0x0000 | 0x0000 | 0x0098 |
| 0x2AA0 | 0x0000 | 0x0000 | 0x0000 | 0x0081 |
| 0x2AA1 | 0x0000 | 0x0000 | 0x0000 | 0x0081 |
| 0x2AA2 | 0x0000 | 0x0000 | 0x0000 | 0x0075 |
| 0x2AA3 | 0x0000 | 0x0000 | 0x0000 | 0x0075 |
| 0x2AA8 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2AA9 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2AAA | 0x0000 | 0x0000 | 0x0020 | 0x0021 |
| 0x2AAB | 0x002B | 0x0000 | 0x0000 | 0x0000 |
| 0x2AAC | 0x002B | 0x0000 | 0x0000 | 0x0000 |
| 0x2AAD | 0x0000 | 0x005E | 0x0000 | 0x0000 |
| 0x2AAE | 0x00E6 | 0x005F | 0x0028 | 0x0027 |
| 0x2AB2 | 0x0000 | 0x0000 | 0x0080 | 0x00C3 |
| 0x2AB3 | 0x0000 | 0x0022 | 0x0014 | 0x0018 |
| 0x2AB4 | 0x0000 | 0x0000 | 0x0000 | 0x006C |
| 0x2AB5 | 0x0000 | 0x00A3 | 0x0000 | 0x0000 |
| 0x2AB6 | 0x0000 | 0x00A3 | 0x0000 | 0x0000 |
| 0x2AC1 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2AC6 | 0x0000 | 0x0000 | 0x0045 | 0x0048 |
| 0x2ACB | 0x0000 | 0x0000 | 0x00D3 | 0x00D2 |
| 0x2ACC | 0x0000 | 0x0000 | 0x0000 | 0x00D8 |
| 0x2AD0 | 0x0034 | 0x0000 | 0x0000 | 0x0000 |
| 0x2ADF | 0x0000 | 0x0000 | 0x0028 | 0x0027 |
| 0x2AE0 | 0x0000 | 0x0000 | 0x0028 | 0x0027 |
| 0x2AE1 | 0x0000 | 0x0000 | 0x0000 | 0x00F8 |
| 0x2AE4 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2C24 | 0x00E0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C27 | 0x0000 | 0x0000 | 0x0000 | 0x0039 |
| 0x2C28 | 0x0000 | 0x0000 | 0x0000 | 0x0039 |
| 0x2C2B | 0x0000 | 0x0000 | 0x0000 | 0x0038 |
| 0x2C2C | 0x0000 | 0x0000 | 0x0000 | 0x0038 |
| 0x2C2D | 0x0000 | 0x0000 | 0x0000 | 0x0088 |
| 0x2C2E | 0x0000 | 0x0000 | 0x0000 | 0x0088 |
| 0x2C31 | 0x0000 | 0x0000 | 0x000A | 0x0009 |
| 0x2C32 | 0x0000 | 0x0000 | 0x000A | 0x0009 |
| 0x2C37 | 0x0000 | 0x0000 | 0x0000 | 0x003D |
| 0x2C38 | 0x0000 | 0x0000 | 0x0000 | 0x003D |
| 0x2C39 | 0x0000 | 0x0000 | 0x0000 | 0x0089 |
| 0x2C3A | 0x0000 | 0x0000 | 0x0000 | 0x0089 |
| 0x2C3B | 0x0000 | 0x0000 | 0x0000 | 0x008D |
| 0x2C3C | 0x0000 | 0x0000 | 0x0000 | 0x008D |
| 0x2C3D | 0x00A7 | 0x00EC | 0x00EC | 0x00A8 |
| 0x2C3E | 0x00A7 | 0x00EC | 0x00EC | 0x00A8 |
| 0x2C3F | 0x0000 | 0x0000 | 0x0045 | 0x0047 |
| 0x2C40 | 0x0000 | 0x0000 | 0x0045 | 0x0047 |
| 0x2C41 | 0x0000 | 0x0000 | 0x0043 | 0x0040 |
| 0x2C42 | 0x0000 | 0x0000 | 0x0043 | 0x0040 |
| 0x2C6A | 0x00DF | 0x0000 | 0x0000 | 0x0000 |
| 0x2C6B | 0x0000 | 0x0000 | 0x00ED | 0x00EE |
| 0x2C6C | 0x0000 | 0x0000 | 0x00ED | 0x00EE |
| 0x2C6D | 0x008E | 0x0000 | 0x0000 | 0x0000 |
| 0x2C6E | 0x008E | 0x0000 | 0x0000 | 0x0000 |
| 0x2C6F | 0x0082 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C70 | 0x0082 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C73 | 0x0000 | 0x0000 | 0x0000 | 0x0047 |
| 0x2C74 | 0x0000 | 0x0000 | 0x0000 | 0x0047 |
| 0x2C75 | 0x0000 | 0x0000 | 0x0045 | 0x0000 |
| 0x2C76 | 0x0000 | 0x0000 | 0x0045 | 0x0000 |
| 0x2C77 | 0x0000 | 0x004C | 0x0000 | 0x0000 |
| 0x2C78 | 0x0000 | 0x004C | 0x0000 | 0x0000 |
| 0x2C79 | 0x008F | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7A | 0x008F | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7B | 0x0087 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7C | 0x0087 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C7E | 0x0000 | 0x0000 | 0x000A | 0x0009 |
| 0x2C7F | 0x0000 | 0x0000 | 0x000A | 0x0009 |
| 0x2C9C | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2C9D | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2C9E | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2C9F | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2CA6 | 0x0000 | 0x0090 | 0x0017 | 0x0015 |
| 0x2CA7 | 0x0000 | 0x0090 | 0x0017 | 0x0015 |
| 0x2CA8 | 0x0000 | 0x0000 | 0x0000 | 0x0041 |
| 0x2CA9 | 0x0000 | 0x0000 | 0x0000 | 0x0041 |
| 0x2CEC | 0x0000 | 0x0000 | 0x0000 | 0x00CC |
| 0x2CED | 0x0000 | 0x0000 | 0x0000 | 0x00CB |
| 0x2CEE | 0x0000 | 0x0000 | 0x0000 | 0x00D9 |
| 0x2CEF | 0x0000 | 0x0013 | 0x0000 | 0x0000 |
| 0x2CF6 | 0x0067 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF7 | 0x0068 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF9 | 0x0000 | 0x0000 | 0x0045 | 0x0048 |
| 0x2CFA | 0x0000 | 0x0000 | 0x0046 | 0x0047 |
| 0x2CFB | 0x00DD | 0x0031 | 0x0061 | 0x006D |
| 0x2CFC | 0x0000 | 0x0000 | 0x0060 | 0x0030 |
| 0x2CFD | 0x0000 | 0x0000 | 0x0000 | 0x005C |
| 0x2CFE | 0x0000 | 0x0000 | 0x0000 | 0x00DE |
| 0x2D06 | 0x0000 | 0x0000 | 0x0054 | 0x0053 |
| 0x2D07 | 0x0066 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D09 | 0x0000 | 0x004F | 0x0000 | 0x0000 |
| 0x2D0F | 0x0000 | 0x0000 | 0x0046 | 0x0047 |
| 0x2D1B | 0x0000 | 0x0000 | 0x0046 | 0x0047 |
| 0x2D1C | 0x0000 | 0x0000 | 0x0046 | 0x0047 |
| 0x2D1D | 0x0092 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1E | 0x0093 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1F | 0x0024 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D20 | 0x003A | 0x0000 | 0x0000 | 0x0000 |
| 0x2D28 | 0x0000 | 0x0000 | 0x0045 | 0x0048 |
| 0x2D29 | 0x0000 | 0x0000 | 0x003F | 0x003E |
| 0x2D2A | 0x0062 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D50 | 0x0000 | 0x0057 | 0x0055 | 0x0058 |
| 0x2D51 | 0x0000 | 0x0000 | 0x0029 | 0x0085 |
| 0x2D52 | 0x00C0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D53 | 0x00C0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D54 | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D55 | 0x00C0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D56 | 0x0000 | 0x0000 | 0x0012 | 0x0010 |
| 0x2D57 | 0x000F | 0x000E | 0x0000 | 0x0011 |
| 0x2D58 | 0x0094 | 0x00AE | 0x00D0 | 0x00CF |
| 0x2D59 | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5A | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5B | 0x0000 | 0x0000 | 0x0000 | 0x0085 |
| 0x2D5C | 0x00C0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5F | 0x0070 | 0x003C | 0x007F | 0x008B |
| 0x2DB5 | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB6 | 0x0071 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB7 | 0x00A5 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DBE | 0x0000 | 0x0000 | 0x00D7 | 0x00C4 |
| 0x2DC0 | 0x0057 | 0x0000 | 0x0000 | 0x0056 |
| 0x2DC3 | 0x0085 | 0x001D | 0x0045 | 0x0047 |
| 0x2DC5 | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DC6 | 0x001C | 0x0000 | 0x0000 | 0x0000 |
| 0x2DC8 | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DC9 | 0x00F6 | 0x00C5 | 0x0006 | 0x0000 |
| 0x2DCC | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DCD | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DCE | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DD0 | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DD1 | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DD2 | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DD3 | 0x001E | 0x00C5 | 0x0006 | 0x0000 |
| 0x2DD4 | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DD5 | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DE0 | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0x2DE1 | 0x001C | 0x0000 | 0x0045 | 0x0048 |
| 0x2DE2 | 0x001C | 0x0000 | 0x0045 | 0x0048 |
| 0x2DE3 | 0x0000 | 0x00C5 | 0x0000 | 0x0000 |
| 0x2DEB | 0x0000 | 0x00BF | 0x00AB | 0x00E3 |
| 0x2DEC | 0x0069 | 0x0000 | 0x00A0 | 0x0000 |
| 0x2DED | 0x006F | 0x0000 | 0x0000 | 0x0000 |
| 0x2E18 | 0x0000 | 0x0000 | 0x00B9 | 0x0000 |
| 0x2E19 | 0x0000 | 0x0000 | 0x00BA | 0x0000 |
| 0x2E1A | 0x0000 | 0x0000 | 0x00BB | 0x0000 |
| 0x2E1B | 0x0000 | 0x0000 | 0x00BC | 0x0000 |
| 0x2E1C | 0x0000 | 0x0000 | 0x00BD | 0x0000 |
| 0x2E1D | 0x0000 | 0x0000 | 0x00BE | 0x0000 |
| 0x2E24 | 0x0000 | 0x0000 | 0x0000 | 0x00B8 |
| 0x2E25 | 0x0000 | 0x0000 | 0x0000 | 0x00B8 |
| 0x2E26 | 0x0000 | 0x0000 | 0x0000 | 0x00B8 |
| 0x2E27 | 0x0000 | 0x0000 | 0x0000 | 0x00B8 |
| 0x2E28 | 0x0000 | 0x0000 | 0x0000 | 0x00B8 |
| 0x2E29 | 0x0000 | 0x0000 | 0x0000 | 0x00B8 |
| 0x2E30 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2E31 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2E32 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2E33 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2E34 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2E35 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2E68 | 0x0085 | 0x0000 | 0x005B | 0x005A |
| 0x2E69 | 0x0085 | 0x0000 | 0x005B | 0x0059 |
| 0x2E77 | 0x0000 | 0x00EF | 0x0000 | 0x0000 |
| 0x2E7C | 0x0000 | 0x0043 | 0x0000 | 0x0000 |
| 0x2E81 | 0x0000 | 0x0000 | 0x0000 | 0x0026 |
| 0x2E82 | 0x0000 | 0x00E4 | 0x00E3 | 0x00C2 |
| 0x2E83 | 0x009E | 0x009D | 0x00AB | 0x00A6 |
| 0x2E84 | 0x0000 | 0x0043 | 0x0000 | 0x0000 |
| 0x2E85 | 0x00CA | 0x0000 | 0x0000 | 0x0000 |
| 0x2E8B | 0x008C | 0x0016 | 0x0000 | 0x002A |
| 0x2E8C | 0x0097 | 0x0091 | 0x0000 | 0x009A |
| 0x2E8D | 0x00B0 | 0x0099 | 0x0000 | 0x00AF |
| 0x2E8E | 0x0000 | 0x00C9 | 0x0000 | 0x0000 |
| 0x2E96 | 0x0000 | 0x0000 | 0x0000 | 0x0095 |
| 0x2E97 | 0x0050 | 0x002C | 0x0000 | 0x00E6 |
| 0x2E98 | 0x0000 | 0x00C9 | 0x0000 | 0x0000 |
| 0x2E9F | 0x0065 | 0x0043 | 0x005D | 0x009C |
| 0x2EA1 | 0x0000 | 0x00C9 | 0x0000 | 0x0000 |
| 0x2EE0 | 0x0000 | 0x0000 | 0x0045 | 0x0048 |
| 0x2EE1 | 0x00DB | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE2 | 0x009F | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE3 | 0x009B | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEA | 0x0000 | 0x0000 | 0x0045 | 0x0048 |
| 0x2EEB | 0x00F0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEC | 0x0085 | 0x0000 | 0x0000 | 0x0083 |
| 0x2EF4 | 0x00CD | 0x0000 | 0x0000 | 0x0000 |
| 0x2EF5 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2EFE | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2EFF | 0x0051 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F08 | 0x0000 | 0x0000 | 0x0045 | 0x0048 |
| 0x2F09 | 0x0085 | 0x0000 | 0x0086 | 0x0083 |
| 0x2F0D | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2F0F | 0x0051 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F12 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2F44 | 0x002F | 0x0033 | 0x00C6 | 0x0005 |
| 0x2F45 | 0x0052 | 0x00A4 | 0x002D | 0x0000 |
| 0x2F46 | 0x0000 | 0x0073 | 0x0032 | 0x004E |
| 0x2F47 | 0x0000 | 0x0000 | 0x0096 | 0x0096 |
| 0x2F4E | 0x0000 | 0x0081 | 0x0000 | 0x0000 |
| 0x2F4F | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F58 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2F63 | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F64 | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F67 | 0x0000 | 0x0000 | 0x0045 | 0x0048 |
| 0x2F6C | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2F71 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2F76 | 0x0000 | 0x0000 | 0x0045 | 0x0048 |
| 0x2F77 | 0x0000 | 0x0000 | 0x0086 | 0x0083 |
| 0x2F7B | 0x0000 | 0x004C | 0x0000 | 0x0000 |
| 0x2F80 | 0x0085 | 0x00F1 | 0x0000 | 0x00F9 |
| 0x2F85 | 0x0000 | 0x0000 | 0x0045 | 0x0048 |
| 0x2F8F | 0x0064 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F94 | 0x0000 | 0x004C | 0x0045 | 0x0047 |
| 0x2F99 | 0x0085 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F9A | 0x0000 | 0x008A | 0x0045 | 0x0048 |
| 0x2F9E | 0x0085 | 0x0081 | 0x00F2 | 0x0000 |
| 0x2FA3 | 0x00C8 | 0x001F | 0x0000 | 0x0000 |
| 0x2FA4 | 0x00AC | 0x001B | 0x0000 | 0x0000 |
| 0x2FC6 | 0x0000 | 0x00F5 | 0x00F4 | 0x00F3 |
| 0xCD87 | 0x0019 | 0x001A | 0x0000 | 0x0000 |
| 0xCD8B | 0x0000 | 0x001A | 0x0000 | 0x0000 |
| 0xCD8F | 0x0019 | 0x001A | 0x0000 | 0x0000 |
| 0xCD94 | 0x0000 | 0x00A2 | 0x0000 | 0x0000 |
| 0xCD95 | 0x006A | 0x00A2 | 0x000D | 0x0000 |
| 0xCD96 | 0x006A | 0x00A1 | 0x000D | 0x0000 |
| 0xCD97 | 0x006A | 0x00A1 | 0x000D | 0x0000 |
| 0xCD98 | 0x006A | 0x00A1 | 0x000D | 0x0000 |
| 0xCD99 | 0x006A | 0x00A1 | 0x000D | 0x0000 |
| 0xCD9A | 0x006A | 0x00A1 | 0x000D | 0x0000 |
| 0xCD9B | 0x006A | 0x00A1 | 0x000D | 0x0000 |
| 0xCD9C | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCD9D | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCD9E | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCD9F | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDA0 | 0x006A | 0x00A1 | 0x000D | 0x0000 |
| 0xCDA1 | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDA2 | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDA3 | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDA4 | 0x0000 | 0x00A1 | 0x000D | 0x0000 |
| 0xCDA5 | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDA6 | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDA7 | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDA8 | 0x0000 | 0x00A1 | 0x000D | 0x0000 |
| 0xCDA9 | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDAA | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDAB | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDAC | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDAD | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDAE | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDAF | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |
| 0xCDB0 | 0x0000 | 0x00A1 | 0x0000 | 0x0000 |

### FUMWELTTEXTE

| UWNR | L/H | UWTYP | NAME | UWTEXT | ADD | MUL | UW_EINH | DIV |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | - | unsigned char | - | Ansauglufttemperatur 1 | -47,9999985694886 | 0,75 | °C | 1 |
| 0x4201 | - | unsigned integer | - | Umgebungsdruck | 0,0 | 0,0829175263643265 | hPa | 1 |
| 0x4202 | - | unsigned integer | - | Saugrohrdruck | 0,0 | 0,0829175263643265 | hPa | 1 |
| 0x4203 | - | unsigned integer | - | Massenstrom vom HFM | 0,0 | 0,03125 | kg/h | 1 |
| 0x4204 | - | unsigned char | - | Umgebungstemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x4205 | - | unsigned integer | - | Saugrohrdruck 1 / Ladedruck 1 | 0,0 | 0,0829175263643265 | hPa | 1 |
| 0x4300 | - | unsigned char | - | Kühlwassertemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x4301 | - | unsigned char | - | Kuehlerauslasstemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x4302 | - | unsigned char | - | Wasserpumpe Leistung ueber BSD | 0,0 | 0,390625 | % | 1 |
| 0x4303 | - | unsigned char | - | Wasserpumpe Elektronik Temperatur | -50,0 | 1,0 | °C | 1 |
| 0x4304 | - | unsigned char | - | Wasserpumpe Strom | 0,0 | 0,5 | A | 1 |
| 0x4305 | - | unsigned char | - | Wasserpumpe Drehzahl Ist | 0,0 | 1,0 | - | 1 |
| 0x4306 | - | unsigned char | - | Wasserpumpe Drehzahl Soll | 0,0 | 1,0 | - | 1 |
| 0x4400 | - | unsigned char | - | Ölstand Mittelwert Langzeit | 0,0 | 0,29296875 | - | 1 |
| 0x4401 | - | unsigned char | - | Füllstand Motoröl | 0,0 | 1,0 | % | 1 |
| 0x4402 | - | signed integer | - | Öltemperatur | 0,0 | 0,100000001490116 | °C | 1 |
| 0x4403 | - | unsigned long | - | Kraftstoff-Verbrauch seit letztem Service | 0,0 | 1,220703125E-4 | - | 1 |
| 0x4404 | - | unsigned integer | - | km seit letztem Service | 0,0 | 10,0 | km | 1 |
| 0x4405 | - | unsigned char | - | Oelsensor Niveau Rohwert | 0,0 | 1,0 | - | 1 |
| 0x4406 | - | unsigned integer | - | Oelsensor Qualität Rohwert | 0,0 | 1,0 | - | 1 |
| 0x4407 | - | unsigned char | - | Oelsensor Temperatur Rohwert | 0,0 | 1,0 | - | 1 |
| 0x4408 | - | signed integer | - | Oelsensor Temperatur | 0,0 | 0,100000001490116 | °C | 1 |
| 0x4409 | - | unsigned char | - | Oelsensor Niveau | 0,0 | 0,29296875 | - | 1 |
| 0x440A | - | unsigned integer | - | Oelsensor Qualität | 0,0 | 9,1552734375E-5 | - | 1 |
| 0x440B | - | unsigned char | - | Länderfaktor 1 codiert | 0,0 | 0,00999999977648258 | - | 1 |
| 0x440C | - | unsigned char | - | Länderfaktor 2 codiert | 0,0 | 0,00999999977648258 | - | 1 |
| 0x440D | - | unsigned char | - | Länderfaktor 1 | 0,0 | 0,00999999977648258 | - | 1 |
| 0x440E | - | unsigned char | - | Länderfaktor 2 | 0,0 | 0,00999999977648258 | - | 1 |
| 0x440F | - | unsigned char | - | Kurzmittelwert-Niveau für den Tester | 0,0 | 0,29296875 | - | 1 |
| 0x4410 | - | signed integer | - | Restweg aus Permittivität abgeleitet | 0,0 | 10,0 | km | 1 |
| 0x4411 | - | signed integer | - | Restweg aus Kraftstoffverbrauch abgeleitet | 0,0 | 10,0 | km | 1 |
| 0x4412 | - | unsigned integer | - | Öl-Alter in Monate | 0,0 | 1,0 | - | 1 |
| 0x4413 | - | unsigned integer | - | aufbereitete Permittivität bei letztem Ölwechsel | 0,0 | 9,1552734375E-5 | - | 1 |
| 0x4414 | - | unsigned integer | - | Permittivität für Bewertung aufbereitet (extrapoliert) | 0,0 | 9,1552734375E-5 | - | 1 |
| 0x4415 | - | unsigned integer | - | Offset für Permittivitätskorrektur | 0,0 | 9,1552734375E-5 | - | 1 |
| 0x4416 | - | unsigned integer | - | zugeteilte Bonuskraftstoffmenge | 0,0 | 1,0 | - | 1 |
| 0x4417 | - | unsigned integer | - | zugeteilter Permittivitätsbonus | 0,0 | 9,1552734375E-5 | - | 1 |
| 0x4500 | - | unsigned integer | - | VVT-Excenter Istwert | 0,0 | 0,021973192691803 | Grad | 1 |
| 0x4501 | - | unsigned integer | - | VVT-Excenter Sollwert | 0,0 | 0,021973192691803 | ° | 1 |
| 0x4502 | - | unsigned integer | - | Mechanischer Verstellbereich VVT aus Lernroutine | 0,0 | 0,021973192691803 | Grad | 1 |
| 0x4503 | - | unsigned integer | - | Sollwert für Lageregler | 0,0 | 0,021973192691803 | ° | 1 |
| 0x4504 | - | unsigned char | - | Sollwert für Lageregler vom Tester | 0,0 | 0,70579606294632 | Grad | 1 |
| 0x4505 | - | signed integer | - | Sollwert Einlassspreizung | 0,0 | 0,100000001490116 | °CRK | 1 |
| 0x4506 | - | unsigned integer | - | Nockenwellenposition Einlass | -95,9999971389771 | 0,375 | °CRK | 1 |
| 0x4507 | - | unsigned integer | - | Nockenwellenposition Auslass | -95,9999971389771 | 0,375 | °CRK | 1 |
| 0x4508 | - | signed integer | - | Istwert Einlassspreizung | 0,0 | 0,100000001490116 | °CRK | 1 |
| 0x4509 | - | unsigned char | - | Istwert Auslassspreizung | -39,9999978542329 | -0,375 | °CRK | 1 |
| 0x450A | - | signed integer | - | Normspreizung Auslass | 0,0 | 0,0234375 | °CRK | 1 |
| 0x450B | - | signed integer | - | Normspreizung Einlass | 0,0 | 0,0234375 | °CRK | 1 |
| 0x4600 | - | unsigned integer | - | aktueller Drosselklappenwinkel | 0,0 | 0,00729414634406567 | °TPS | 1 |
| 0x4601 | - | unsigned integer | - | Drosselklappe Sollwert | 0,0 | 0,00729414634406567 | °TPS | 1 |
| 0x4602 | - | unsigned long | - | Generator Sollspannung ueber BSD | 10,6 | 0,100000001490116 | V | 1 |
| 0x4603 | - | signed integer | - | Chiptemperatur Generator 1 | 0,0 | 0,100000001490116 | °C | 1 |
| 0x4604 | - | unsigned char | - | Generator Strom | 0,0 | 1,0 | - | 1 |
| 0x4605 | - | unsigned char | - | Chipversion Generator 1 | 0,0 | 1,0 | - | 1 |
| 0x4606 | - | unsigned char | - | Reglerversion Generator 1 | 0,0 | 1,0 | - | 1 |
| 0x4607 | - | unsigned char | - | Herstellercode Generator 1 | 0,0 | 1,0 | - | 1 |
| 0x4608 | - | unsigned char | - | Kennung Generatortyp Generator 1 | 0,0 | 1,0 | - | 1 |
| 0x4609 | - | unsigned char | - | Kl.87 Spannung / Versorgung DME | 0,0 | 0,101562492549419 | V | 1 |
| 0x460A | - | unsigned integer | - | Batteriespannung aktuell | 0,0 | 0,0149999996647239 | V | 1 |
| 0x460B | - | unsigned integer | - | Batteriespannung von IBS gemessen | 6,0 | 2,50000011874363E-4 | - | 1 |
| 0x460C | - | unsigned integer | - | Batteriespannung vom AD-Wandler DME | 0,0 | 0,0048828125 | V | 1 |
| 0x460D | - | signed integer | - | Korrekturwert Abschaltung | 0,0 | 0,00152587890625 | - | 1 |
| 0x460E | - | signed integer | - | Abstand zur Startfähigkeitsgrenze | 0,0 | 0,0030517578125 | - | 1 |
| 0x460F | - | unsigned char | - | Batterielast | 0,0 | 0,390625 | % | 1 |
| 0x4610 | - | unsigned integer | - | aktuelle Position Disaklappen | 0,0 | 0,00305175711400807 | % | 1 |
| 0x4611 | - | unsigned char | - | Sollwert E-Lüfter als PWM Wert | 0,0 | 0,390625 | % | 1 |
| 0x4612 | - | unsigned char | - | Erregerstrom Generator 1 | 0,0 | 0,125 | A | 1 |
| 0x4613 | - | unsigned integer | - | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | 0,0 | 0,100000001490116 | V | 1 |
| 0x4614 | - | unsigned char | - | Auslastungsgrad Generator 1 | 0,0 | 0,390625 | % | 1 |
| 0x4615 | - | unsigned char | - | Kopie begrenzter Erregerstrom Generator 1 | 0,0 | 0,125 | A | 1 |
| 0x4616 | - | unsigned char | - | Kopie Generator 1 LR Vorgabe auf Bus gelegt | 0,0 | 0,100000001490116 | s | 1 |
| 0x4617 | - | signed integer | - | gefiltertes Generatormoment absolut Ausgang | 0,0 | 0,100000001490116 | Nm | 1 |
| 0x4618 | - | 0xFF | - | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0 | 1 | 0/1 | 1 |
| 0x4700 | - | 0xFF | - | Status Lambdasonde betriebsbereit Vorkat Bank 1 | 0 | 1 | 0/1 | 1 |
| 0x4701 | - | 0xFF | - | Status Lambdasonde betriebsbereit Vorkat Bank 2 | 0 | 1 | 0/1 | 1 |
| 0x4702 | - | unsigned integer | - | Spannung Lambdasonde Vorkat Bank 1 mit Offsetkorrektur | 0,0 | 0,0048828125 | V | 1 |
| 0x4703 | - | unsigned integer | - | Spannung Lambdasonde Vorkat Bank 2 mit Offsetkorrektur | 0,0 | 0,0048828125 | V | 1 |
| 0x4704 | - | unsigned integer | - | Lambda Sollwert Bank 1 | 0,0 | 9,765625E-4 | - | 1 |
| 0x4705 | - | unsigned integer | - | Lambda Sollwert Bank 2 | 0,0 | 9,765625E-4 | - | 1 |
| 0x4800 | - | 0xFF | - | Kupplungsschalter Status | 0 | 1 | 0/1 | 1 |
| 0x4801 | - | 0xFF | - | Kupplungsschalter vorhanden | 0 | 1 | 0/1 | 1 |
| 0x4802 | - | 0xFF | - | Sporttaster aktiv | 0 | 1 | 0/1 | 1 |
| 0x4803 | - | unsigned char | - | Status Klima ein | 0,0 | 1,0 | - | 1 |
| 0x4804 | - | 0xFF | - | Sekundärluft Pumpe aktiv | 0 | 1 | 0/1 | 1 |
| 0x4805 | - | 0xFF | - | Startrelais über CAN aktiv | 0 | 1 | 0/1 | 1 |
| 0x4806 | - | unsigned char | - | Steuergeraete-Innentemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x4807 | - | unsigned integer | - | Motor Drehzahl | 0,0 | 1,0 | rpm | 1 |
| 0x4808 | - | unsigned integer | - | Leerlauf Solldrehzahl | 0,0 | 1,0 | rpm | 1 |
| 0x4809 | - | 0xFF | - | Status LL | 0 | 1 | 0/1 | 1 |
| 0x480A | - | unsigned long | - | Kilometerstand Auflösung 1 km | 0,0 | 1,0 | km | 1 |
| 0x480B | - | unsigned char | - | Pedalwert Fahrerwunsch in % | 0,0 | 0,390625 | % | 1 |
| 0x5800 | - | unsigned char | - | Zeit nach Start | 0,0 | 256,0 | s | 1 |
| 0x5801 | - | unsigned char | - | Umgebungsdruck | 0,0 | 1,0 | kPa | 1 |
| 0x5802 | - | 0xFF | _CNV_S_5_LACO_RANGE_765 | Zustand Lambdaregelung Bank 1 | 0 | 1 | 0-n | 1 |
| 0x5803 | - | 0xFF | _CNV_S_5_LACO_RANGE_765 | Zustand Lambdaregelung Bank 2 | 0 | 1 | 0-n | 1 |
| 0x5804 | - | unsigned char | - | Berechneter Lastwert | 0,0 | 0,390625 | % | 1 |
| 0x5805 | - | unsigned char | - | Kühlmitteltemperatur OBD | -40,0 | 1,0 | °C | 1 |
| 0x5806 | - | unsigned char | - | Lambda Integrator Gruppe 1 | -100,000002235174 | 0,78125 | % | 1 |
| 0x5807 | - | unsigned char | - | Lambda Adaption Summe mul. & add. Gruppe 1 | -100,000002235174 | 0,78125 | % | 1 |
| 0x5808 | - | unsigned char | - | Lambda Integrator Gruppe 2 | -100,000002235174 | 0,78125 | % | 1 |
| 0x5809 | - | unsigned char | - | Lambda Adaption Summe mul. & add. Gruppe 2 | -100,000002235174 | 0,78125 | % | 1 |
| 0x580A | - | unsigned char | - | Kraftstoffdruck | 0,0 | 3,0 | kPa | 1 |
| 0x580B | - | unsigned char | - | Saugrohrdruck | 0,0 | 1,0 | kPa | 1 |
| 0x580C | - | unsigned char | - | Drehzahl | 0,0 | 64,0 | rpm | 1 |
| 0x580D | - | unsigned char | - | Geschwindigkeit | 0,0 | 1,0 | km/h | 1 |
| 0x580E | - | unsigned char | - | Zündzeitpunkt Zylinder 1 | -64,0 | 0,5 | °CRK | 1 |
| 0x580F | - | unsigned char | - | Ansauglufttemperatur | -40,0 | 1,0 | °C | 1 |
| 0x5810 | - | unsigned char | - | Luftdurchsatz OBD | 0,0 | 2,5599999427795406 | g/s | 1 |
| 0x5811 | - | unsigned char | - | Motordrehzahl | 0,0 | 32,0 | rpm | 1 |
| 0x5812 | - | unsigned char | - | Luftmasse gemessen | 0,0 | 8,0 | kg/h | 1 |
| 0x5813 | - | signed char | - | Relative Last | 0,0 | 2,5599999427795406 | % | 1 |
| 0x5814 | - | unsigned char | - | Fahrpedalwert | 0,0 | 0,390625 | % | 1 |
| 0x5815 | - | unsigned char | - | Batteriespannung | 0,0 | 0,2560000121593472 | V | 1 |
| 0x5816 | - | unsigned char | - | Lambda Setpoint | 0,0 | 0,0078125 | - | 1 |
| 0x5817 | - | unsigned char | - | Umgebungstemperatur | -40,0 | 1,0 | °C | 1 |
| 0x5818 | - | unsigned char | - | Luftmasse gerechnet | 0,0 | 5,425863742828365 | mg/stk | 1 |
| 0x5819 | - | unsigned char | - | Drehzahl OBD Byte | 0,0 | 64,0 | rpm | 1 |
| 0x581A | - | unsigned char | - | Nockenwelle Einlass | 50,0 | 0,400000005960464 | °CRK | 1 |
| 0x581B | - | unsigned char | - | Nockenwelle Einlass Sollwert | 50,0 | 0,400000005960464 | °CRK | 1 |
| 0x581C | - | unsigned char | - | Nockenwelle Auslass | -39,9999978542329 | -0,375 | °CRK | 1 |
| 0x581D | - | unsigned char | - | Nockenwelle Auslass Sollwert | -39,9999978542329 | -0,375 | °CRK | 1 |
| 0x581E | - | unsigned char | - | Ansauglufttemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x581F | - | unsigned char | - | Motortemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5820 | - | unsigned char | - | Kühlmitteltemperatur Kühlerausgang | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5821 | - | unsigned char | - | Steuergerät Innentemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5822 | - | unsigned char | - | ( Motor ) - Öltemperatur | -40,0 | 1,0 | °C | 1 |
| 0x5823 | - | unsigned char | - | Zeit Motor steht | 0,0 | 256,0 | min | 1 |
| 0x5824 | - | unsigned char | - | Umgebungstemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5825 | - | unsigned char | - | Abstellzeit | 0,0 | 4,0 | min | 1 |
| 0x5826 | - | unsigned char | - | Drosselklappe Sensor 1 | 0,0 | 1,8673014640808114 | °TPS | 1 |
| 0x5827 | - | unsigned char | - | Lambdasonden Heizung Vorkat 1 | 0,0 | 0,390625 | % | 1 |
| 0x5828 | - | unsigned char | - | Lambdasonden Heizung Vorkat 2 | 0,0 | 0,390625 | % | 1 |
| 0x5829 | - | unsigned char | - | Lambdasonden Heizung Hinterkat 1 | 0,0 | 0,390625 | % | 1 |
| 0x582A | - | unsigned char | - | Lambdasonden Heizung Hinterkat 2 | 0,0 | 0,390625 | % | 1 |
| 0x582B | - | unsigned char | - | Drehmomenteingriff über CAN | 0,0 | 1,0 | - | 1 |
| 0x582C | - | unsigned char | - | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Kat Bank 1 | 0,0 | 1,0 | - | 1 |
| 0x582D | - | unsigned char | - | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Kat Bank 2 | 0,0 | 1,0 | - | 1 |
| 0x582E | - | unsigned char | - | Adaptionsfaktor Sensor Zeitkonstante vor Kat Bank 1 | 0,0 | 0,25 | - | 1 |
| 0x582F | - | unsigned char | - | Adaptionsfaktor Sensor Zeitkonstante vor Kat Bank 2 | 0,0 | 0,25 | - | 1 |
| 0x5830 | - | unsigned char | - | Mittelwert der normierten Signalamplitude der Lambdasonde vor Kat Bank 1 | 0,0 | 0,25 | - | 1 |
| 0x5831 | - | unsigned char | - | Mittelwert der normierten Signalamplitude der Lambdasonde vor Kat Bank 2 | 0,0 | 0,25 | - | 1 |
| 0x5832 | - | 0xFF | _CNV_S_6_RANGE_STAT_146 | Motor Status | 0 | 1 | 0-n | 1 |
| 0x5833 | - | unsigned char | - | Umgebungstemperatur beim Start | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5834 | - | unsigned char | - | Umgebungsdruck | 0,0 | 21,226886749267585 | hPa | 1 |
| 0x5836 | - | signed char | - | Drehzahlgradient | 0,0 | 32,0 | rpm/s | 1 |
| 0x5837 | - | 0xFF | _CNV_S_11_EGCP_RANGE_728 | Status OBD-I Fehler vor Kat Bank 1 | 0 | 1 | 0-n | 1 |
| 0x5838 | - | 0xFF | _CNV_S_11_EGCP_RANGE_728 | Status OBD-I Fehler vor Kat Bank 2 | 0 | 1 | 0-n | 1 |
| 0x5839 | - | 0xFF | _CNV_S_6_RANGE_STAT_305 | Status Drosselklappe Notlauf | 0 | 1 | 0-n | 1 |
| 0x583A | - | unsigned char | - | Ansauglufttemperatur beim Start | -47,9999985694886 | 0,75 | °C | 1 |
| 0x583B | - | unsigned char | - | Kraftstofftank Füllstand | 0,0 | 1,0 | l | 1 |
| 0x583C | - | unsigned char | - | Spannung Kl. 87 | 0,0 | 0,101562492549419 | V | 1 |
| 0x583D | - | unsigned char | - | Reset: Quelle | 0,0 | 1,0 | - | 1 |
| 0x583E | - | unsigned char | - | Motordrehzahl bei Reset | 0,0 | 256,0 | rpm | 1 |
| 0x583F | - | unsigned char | - | Drosselklappe Sollwert | 0,0 | 1,8673014640808114 | °TPS | 1 |
| 0x5840 | - | unsigned char | - | CPU Last bei Reset | 0,0 | 25,0 | % | 1 |
| 0x5841 | - | unsigned char | - | SG-Innentemperatur Rohwert | 0,0 | 0,01953125 | V | 1 |
| 0x5843 | - | unsigned char | - | Versorgung FWG 1 | 0,0 | 0,0390625037252903 | V | 1 |
| 0x5845 | - | unsigned char | - | Spannung Lambdasonde VorKat 1 | 0,0 | 0,01953125 | V | 1 |
| 0x5846 | - | unsigned char | - | Spannung Pedalwertgeber 1 | 0,0 | 0,01953125 | V | 1 |
| 0x5847 | - | unsigned char | - | Spannung Pedalwertgeber 2 | 0,0 | 0,01953125 | V | 1 |
| 0x5848 | - | unsigned char | - | Spannung Lambdasonde VorKat 2 | 0,0 | 0,01953125 | V | 1 |
| 0x5849 | - | unsigned char | - | Spannung Lambdasonde HinterKat 1 | 0,0 | 0,01953125 | V | 1 |
| 0x584A | - | unsigned char | - | Spannung Kl. 15 Rohwert | 0,0 | 0,01953125 | V | 1 |
| 0x584B | - | unsigned char | - | Spannung Lambdasonde HinterKat 2 | 0,0 | 0,01953125 | V | 1 |
| 0x584C | - | unsigned char | - | Spannung Drosselklappe Poti 2 | 0,0 | 0,01953125 | V | 1 |
| 0x584D | - | unsigned char | - | korrigierter Sollwert Durchfluss Tankentlüftung | 0,0 | 0,03125 | kg/h | 1 |
| 0x584E | - | unsigned char | - | Spannung Drosselklappe Poti 1 | 0,0 | 0,01953125 | V | 1 |
| 0x584F | - | unsigned char | - | Spannung Luftmasse | 0,0 | 0,0196000002324581 | V | 1 |
| 0x5850 | - | unsigned char | - | Spannung Motortemperatur | 0,0 | 0,01953125 | V | 1 |
| 0x5851 | - | unsigned char | - | Spannung Ansauglufttemperatur | 0,0 | 0,0196000002324581 | - | 1 |
| 0x5852 | - | unsigned char | - | Kühlmitteltemperatur Kühlerausgang Rohwert | 0,0 | 0,01953125 | V | 1 |
| 0x5853 | - | unsigned char | - | Spannung Kl.87 Rohwert | 0,0 | 0,01953125 | V | 1 |
| 0x5854 | - | unsigned char | - | Versorgung FWG 2 | 0,0 | 0,0390625037252903 | V | 1 |
| 0x5855 | - | signed char | - | Mittelwert Bank 1 | 2,22044609888115E-14 | 0,390625 | % | 1 |
| 0x5856 | - | signed char | - | Mittelwert Bank 2 | 2,22044609888115E-14 | 0,390625 | % | 1 |
| 0x5858 | - | unsigned char | - | Drosselklappe aktueller Wert | 0,0 | 1,8673014640808114 | °TPS | 1 |
| 0x5859 | - | unsigned char | - | DMTL Strom Referenzleck | 0,0 | 0,195312470197678 | mA | 1 |
| 0x585A | - | unsigned char | - | DMTL Strom Grobleck | 0,0 | 0,195312470197678 | mA | 1 |
| 0x585B | - | unsigned char | - | DMTL Strom Diagnoseende | 0,0 | 0,195312470197678 | mA | 1 |
| 0x585C | - | unsigned char | - | Widerstand Lambdasonde NK 1 | 0,0 | 256,0 | ohm | 1 |
| 0x585D | - | unsigned char | - | Widerstand Lambdasonde NK 2 | 0,0 | 256,0 | ohm | 1 |
| 0x585E | - | unsigned char | - | unteres Byte Widerstand Lambdasonde NK 1 | 0,0 | 1,0 | ohm | 1 |
| 0x585F | - | unsigned char | - | unteres Byte Widerstand Lambdasonde NK 2 | 0,0 | 1,0 | ohm | 1 |
| 0x5860 | - | unsigned char | - | Widerstand Lambdasonde VK 1 | 0,0 | 64,0 | ohm | 1 |
| 0x5861 | - | unsigned char | - | Widerstand Lambdasonde VK 2 | 0,0 | 64,0 | ohm | 1 |
| 0x5863 | - | unsigned char | - | untere Byte Widerstand Lambdasonde VK 1 | 0,0 | 0,25 | ohm | 1 |
| 0x5864 | - | unsigned char | - | untere Byte Widerstand Lambdasonde VK 2 | 0,0 | 0,25 | ohm | 1 |
| 0x5865 | - | unsigned char | - | Oelstand Mittelwert Langzeit | 0,0 | 0,29296875 | - | 1 |
| 0x5866 | - | unsigned char | - | Füllstand Motoröl | 0,0 | 1,0 | - | 1 |
| 0x5867 | - | unsigned char | - | Kilometerstand | 0,0 | 2560,0 | km | 1 |
| 0x5868 | - | unsigned char | - | Status Standverbraucher registriert Teil 1 | 0,0 | 1,0 | - | 1 |
| 0x5869 | - | unsigned char | - | Status Standverbraucher registriert Teil 2 | 0,0 | 1,0 | - | 1 |
| 0x586A | - | unsigned char | - | Batteriespannung von IBS gemessen | 6,0 | 0,06400000303983693 | - | 1 |
| 0x586B | - | unsigned char | - | Zeit mit Ruhestrom 80 - 200 mA | 0,0 | 14,9333333969116 | min | 1 |
| 0x586C | - | unsigned char | - | Zeit mit Ruhestrom 200 - 1000 mA | 0,0 | 14,9333333969116 | min | 1 |
| 0x586D | - | unsigned char | - | Zähler Erkennung schlechte Strasse | 0,0 | 256,0 | - | 1 |
| 0x586E | - | unsigned char | - | Zeit mit Ruhestrom >1000 mA | 0,0 | 14,9333333969116 | min | 1 |
| 0x5870 | - | unsigned char | - | Spannung DME Umgebungsdruck | 0,0 | 0,01953125 | V | 1 |
| 0x5871 | - | unsigned char | - | Lambda-Sollwert Gruppe 1 | 0,0 | 0,0078125 | - | 1 |
| 0x5873 | - | unsigned char | - | Lambda-Sollwert Gruppe 2 | 0,0 | 0,0078125 | - | 1 |
| 0x5874 | - | unsigned char | - | Spannung Strommessung DMTL | 0,0 | 0,01953125 | V | 1 |
| 0x5876 | - | unsigned char | - | Mittlere Diagnosewert minimale Luftmasse | 0,0 | 1,0 | kg/h | 1 |
| 0x5877 | - | unsigned char | - | Differenz zwischen Maximum und Minimum SAF | 0,0 | 4,0 | kg/h | 1 |
| 0x5878 | - | signed char | - | Lambdaverschiebung Rückführregler 1 | 0,0 | 9,765625E-4 | - | 1 |
| 0x5879 | - | signed char | - | Lambdaverschiebung Rückführregler 2 | 0,0 | 9,765625E-4 | - | 1 |
| 0x587A | - | 0xFF | _CNV_S_6_RANGE_STAT_106 | Status FGR | 0 | 1 | 0-n | 1 |
| 0x587C | - | 0xFF | _CNV_S_7_RANGE_ECU__142 | Status Motorsteuerung | 0 | 1 | 0-n | 1 |
| 0x587D | - | 0xFF | _CNV_S_4_EGCP_RANGE_739 | Symptom bei Schubabschaltung Sonde vor Kat Bank 1 | 0 | 1 | 0-n | 1 |
| 0x587E | - | 0xFF | _CNV_S_4_EGCP_RANGE_739 | Symptom bei Schubabschaltung Sonde vor Kat Bank 2 | 0 | 1 | 0-n | 1 |
| 0x587F | - | unsigned char | - | Tastverhaeltnis E-Lüfter | 0,0 | 0,390625 | % | 1 |
| 0x5880 | - | unsigned char | - | Tastverhältnis: Luftklappe | 0,0 | 0,390625 | % | 1 |
| 0x5881 | - | unsigned char | - | berechneter Gang | 0,0 | 1,0 | - | 1 |
| 0x5882 | - | unsigned char | - | Motortemperatur beim Start | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5883 | - | unsigned char | - | Spannung Klopfwerte Zylinder 1 | 0,0 | 0,01953125 | V | 1 |
| 0x5885 | - | unsigned char | - | Spannung Klopfwerte Zylinder 3 | 0,0 | 0,01953125 | V | 1 |
| 0x5886 | - | unsigned char | - | Spannung Klopfwerte Zylinder 6 | 0,0 | 0,01953125 | V | 1 |
| 0x5888 | - | unsigned char | - | Spannung Klopfwerte Zylinder 4 | 0,0 | 0,01953125 | V | 1 |
| 0x5889 | - | unsigned char | - | Lambda-Istwert Gruppe 1 | 0,0 | 0,0078125 | - | 1 |
| 0x588A | - | unsigned char | - | Lambda-Istwert Gruppe 2 | 0,0 | 0,0078125 | - | 1 |
| 0x588B | - | unsigned char | - | Zeit seit Startende | 0,0 | 25,600000381469695 | s | 1 |
| 0x588C | - | signed char | - | Keramiktemperatur Lambdasonde VK 1 | 0,0 | 16,0 | °C | 1 |
| 0x588D | - | unsigned char | - | aktuelle Zeit DMTL Leckmessung | 0,0 | 25,600000381469695 | s | 1 |
| 0x588E | - | unsigned char | - | Pumpenstrom bei DMTL Pumpenprüfung | 0,0 | 1,5625238418579097 | mA | 1 |
| 0x588F | - | signed char | - | Keramiktemperatur Lambdasonde VK 2 | 0,0 | 16,0 | °C | 1 |
| 0x5891 | - | signed char | - | Momentanforderung an der Kupplung | 0,0 | 8,0 | Nm | 1 |
| 0x5893 | - | signed char | - | Drehmomentabfall schnell bei Gangwechsel | 0,0 | 8,0 | Nm | 1 |
| 0x5894 | - | 0xFF | _CNV_S_4_EGCP_RANGE_732 | Symptom Lambdasondenheizung vor Kat Bank 1 | 0 | 1 | 0-n | 1 |
| 0x5895 | - | 0xFF | _CNV_S_4_EGCP_RANGE_732 | Symptom Lambdasondenheizung vor Kat Bank 2 | 0 | 1 | 0-n | 1 |
| 0x5896 | - | unsigned char | - | Abgastemperatur nach Kat Bank 1 | 0,0 | 16,0 | °C | 1 |
| 0x5897 | - | unsigned char | - | Abgastemperatur nach Kat Bank 2 | 0,0 | 16,0 | °C | 1 |
| 0x5898 | - | unsigned char | - | Generator Sollspannung | 0,0 | 0,100000001490116 | V | 1 |
| 0x5899 | - | unsigned char | - | Istwert DISA-Position | 0,0 | 0,7812498211860659 | % | 1 |
| 0x589B | - | signed char | - | Spannungsoffset Signalpfad CJ120 1 | -3,60784326466368E-6 | 0,00488278456032276 | V | 1 |
| 0x589C | - | signed char | - | Spannungsoffset Signalpfad CJ120 2 | -3,60784326466368E-6 | 0,00488278456032276 | V | 1 |
| 0x589E | - | 0xFF | _CNV_S_3_STATE_RLY__374 | Status VVT- Entlastungsrelais | 0 | 1 | 0-n | 1 |
| 0x589F | - | unsigned char | - | VVT Istwinkel | 0,0 | 0,78125 | ° | 1 |
| 0x58A0 | - | unsigned char | - | VVT Sollwinkel | 0,0 | 0,390625 | % | 1 |
| 0x58A1 | - | unsigned char | - | Ausgegeben Tastverhältnis | 0,0 | 0,390625 | % | 1 |
| 0x58A2 | - | signed char | - | VVT Motorstrom | 0,0 | 1,0 | A | 1 |
| 0x58A3 | - | signed char | - | VVT Motortemperatur | 0,0 | 2,0 | °C | 1 |
| 0x58A4 | - | unsigned char | - | VVT Spannungsversorgung | 0,0 | 0,100000001490116 | V | 1 |
| 0x58A5 | - | unsigned char | - | VVT Sensorversorgungsspannung | 0,0 | 0,100000001490116 | V | 1 |
| 0x58A6 | - | unsigned char | - | VVT Sensordifferenz | 0,0 | 0,703125 | ° | 1 |
| 0x58A7 | - | signed char | - | VVT Endstufentemperatur | 0,0 | 2,0 | °C | 1 |
| 0x58A8 | - | unsigned char | - | Motorabstellzeit | 0,0 | 4,0 | min | 1 |
| 0x58A9 | - | unsigned char | - | Reset Zähler Überwachungsrechner | 0,0 | 1,0 | - | 1 |
| 0x58AA | - | unsigned char | - | Reset Zähler Hauptrechner | 0,0 | 1,0 | - | 1 |
| 0x58AB | - | unsigned char | - | Abweichung DK-Ersatzwert und DK-Poti 1 | 0,0 | 5,425863742828365 | mg/stk | 1 |
| 0x58AC | - | unsigned char | - | Abweichung DK-Ersatzwert und DK-Poti 2 | 0,0 | 5,425863742828365 | mg/stk | 1 |
| 0x58AD | - | unsigned char | - | Pedalwertgeber 1 | 0,0 | 0,390625 | % | 1 |
| 0x58AF | - | unsigned char | - | Kraftstoff Anforderung an Pumpe | 0,0 | 1,0 | l/h | 1 |
| 0x58B0 | - | unsigned char | - | DK-Adaptionsschritt | 0,0 | 1,0 | - | 1 |
| 0x58B1 | - | unsigned char | - | Funkenbrenndauer Zylinder 1 | 0,0 | 1,0240000486373915 | ms | 1 |
| 0x58B2 | - | unsigned char | - | Funkenbrenndauer Zylinder 5 | 0,0 | 1,0240000486373915 | ms | 1 |
| 0x58B3 | - | unsigned char | - | Funkenbrenndauer Zylinder 3 | 0,0 | 1,0240000486373915 | ms | 1 |
| 0x58B4 | - | unsigned char | - | Funkenbrenndauer Zylinder 6 | 0,0 | 1,0240000486373915 | ms | 1 |
| 0x58B5 | - | unsigned char | - | Funkenbrenndauer Zylinder 2 | 0,0 | 1,0240000486373915 | ms | 1 |
| 0x58B6 | - | unsigned char | - | Funkenbrenndauer Zylinder 4 | 0,0 | 1,0240000486373915 | ms | 1 |
| 0x58B7 | - | unsigned char | - | Bremsdruck | 0,0 | 1,0 | bar | 1 |
| 0x58B8 | - | unsigned char | - | Drehzahl Überwachung | 0,0 | 32,0 | rpm | 1 |
| 0x58B9 | - | unsigned char | - | Pedalwert Überwachung | 0,0 | 0,390625 | % | 1 |
| 0x58BC | - | unsigned char | - | Luftmasse Überwachung | 0,0 | 5,44705867767334 | mg/stk | 1 |
| 0x58BD | - | unsigned char | - | Modellluftmasse Überwachung tiefpassgefiltert | 0,0 | 5,44705867767334 | mg/stk | 1 |
| 0x58BF | - | unsigned char | - | relative Momentenforderung von MSR über CAN | 0,0 | 0,390625 | % | 1 |
| 0x58C0 | - | unsigned char | - | Motordrehzahl Eratztwert Überwachung | 0,0 | 32,0 | rpm | 1 |
| 0x58C1 | - | unsigned char | - | Laufunruhe Segmentzeit | 0,0 | 256,0 | µs | 1 |
| 0x58C7 | - | unsigned char | - | LL-Solldrehzahlabweichung Überwachung | -4096,0 | 32,0 | rpm | 1 |
| 0x58C8 | - | signed char | - | I-Anteil Momentdifferenz Überwachung und Modell | 0,0 | 8,0 | Nm | 1 |
| 0x58C9 | - | 0xFF | - | I-Anteil LL passive Rampe aktiv | 0 | 1 | 0/1 | 1 |
| 0x58CA | - | signed char | - | PD-Anteil langsam Leerlaufregelung | 0,0 | 8,0 | Nm | 1 |
| 0x58CB | - | signed char | - | PD-Anteil schnell Leerlaufregelung | 0,0 | 8,0 | Nm | 1 |
| 0x58CC | - | signed char | - | Verlustmoment Überwachung | 0,0 | 8,0 | Nm | 1 |
| 0x58CD | - | signed char | - | Verlustmomentabweichung Überwachung | 0,0 | 2,0 | Nm | 1 |
| 0x58CE | - | unsigned char | - | Carrierbyte Schalterstati | 0,0 | 1,0 | - | 1 |
| 0x58CF | - | unsigned char | - | Motormoment Sollwert Überwachung | 0,0 | 2,0 | Nm | 1 |
| 0x58D0 | - | unsigned char | - | Motormoment Istwert Überwachung | 0,0 | 2,0 | Nm | 1 |
| 0x58D1 | - | signed char | - | Moment aktueller Wert | 0,0 | 8,0 | Nm | 1 |
| 0x58D4 | - | signed char | - | Abweichung maximales Moment an Kupplung Überwachung | 0,0 | 2,0 | Nm | 1 |
| 0x58D6 | - | signed char | - | Abweichung minimales Moment an Kupplung Überwachung | 0,0 | 8,0 | Nm | 1 |
| 0x58D9 | - | 0xFF | _CNV_S_14_TMO3_ERR_C_422 | Fehler Hauptrechner | 0 | 1 | 0-n | 1 |
| 0x58DA | - | 0xFF | _CNV_S_21_TMO3_ERR_C_423 | Fehler Überwachungsrechner | 0 | 1 | 0-n | 1 |
| 0x58DB | - | unsigned char | - | Fehler Bitfeld high Byte | 0,0 | 1,0 | - | 1 |
| 0x58DC | - | unsigned char | - | Fehler Bitfeld low Byte | 0,0 | 1,0 | - | 1 |
| 0x58DF | - | unsigned char | - | Spannung Sportschalter | 0,0 | 0,01953125 | V | 1 |
| 0x58E0 | - | unsigned char | - | Abgleich Drosselklappenmodell (Faktor) | 0,0 | 0,0078125 | - | 1 |
| 0x58E1 | - | signed char | - | Abgleich Drosselklappenmodell (Offset) | 0,0 | 8,0 | kg/h | 1 |
| 0x58E2 | - | unsigned char | - | Abgleich Einlassventilmodell (Faktor) | 0,0 | 0,0078125 | - | 1 |
| 0x58E3 | - | signed char | - | Abgleich Einlassventilmodell (Offset) | 0,0 | 8,0 | kg/h | 1 |
| 0x58E4 | - | 0xFF | _CNV_S_7_Def_ba_467 | Betriebsart Istwert | 0 | 1 | 0-n | 1 |
| 0x58E5 | - | unsigned char | - | Maximale Drehzahl bei Zündaussetzern | 0,0 | 32,0 | rpm | 1 |
| 0x58E6 | - | unsigned char | - | Maximale relative Last bei Zündaussetzern | 0,0 | 0,390625 | % | 1 |
| 0x58E7 | - | unsigned char | - | Minimale relative Last bei Zündaussetzern | 0,0 | 0,390625 | % | 1 |
| 0x58E8 | - | unsigned char | - | Minimale Drehzahl bei Zündaussetzern | 0,0 | 32,0 | rpm | 1 |
| 0x58E9 | - | unsigned char | - | Wasserpumpe Spannung | 0,0 | 0,100000001490116 | V | 1 |
| 0x58EA | - | unsigned char | - | Wasserpumpe Drehzahl | 0,0 | 1,0 | - | 1 |
| 0x58EB | - | unsigned char | - | Wasserpumpe Drehzahl Soll-Ist-Differenz | 0,0 | 1,0 | - | 1 |
| 0x58EC | - | unsigned char | - | Wasserpumpe Temperatur Elektronik | -50,0 | 1,0 | °C | 1 |
| 0x58ED | - | unsigned char | - | Wasserpumpe Stromaufnahme | 0,0 | 0,5 | A | 1 |
| 0x58EE | - | unsigned char | - | Wasserpumpe leistungsreduziert | 0,0 | 0,390625 | % | 1 |
| 0x58F1 | - | 0xFF | _CNV_S_8_RANGE_STAT_326 | DME - Losnummer | 0 | 1 | 0-n | 1 |
| 0x58F5 | - | signed char | - | Eingangssignal Rückführregler 1 | -3,60784326466368E-6 | 0,00488278456032276 | V | 1 |
| 0x58F6 | - | signed char | - | Eingangssignal Rückführregler 2 | -3,60784326466368E-6 | 0,00488278456032276 | V | 1 |
| 0x58F8 | - | signed char | - | Segmentadaption Laufunruhe Zyl. 5 | 1,92095835817427E-5 | 0,06103530898690227 | %. | 1 |
| 0x58F9 | - | signed char | - | Segmentadaption Laufunruhe Zyl. 3 | 1,92095835817427E-5 | 0,06103530898690227 | %. | 1 |
| 0x58FA | - | unsigned char | - | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | 0,0 | 0,0078125 | - | 1 |
| 0x58FB | - | unsigned char | - | Zähler Drehzahlerhöhungen TEV- Funktionstest | 0,0 | 1,0 | cyc | 1 |
| 0x5A00 | - | unsigned integer | - | Versorgung FWG 1 | 0,0 | 0,00976559147238731 | V | 1 |
| 0x5A01 | - | unsigned integer | - | Versorgung FWG 2 | 0,0 | 0,00976559147238731 | V | 1 |
| 0x5A02 | - | unsigned integer | - | Versorgung VVT Rohwert | 0,0 | 0,0048828125 | V | 1 |
| 0x5A03 | - | unsigned integer | - | Versorgung VVT | 0,0 | 0,0078125 | V | 1 |
| 0x5A04 | - | unsigned integer | - | Spannung Pedalwertgeber 1 | 0,0 | 0,0048828125 | V | 1 |
| 0x5A05 | - | unsigned integer | - | Spannung Pedalwertgeber 2 | 0,0 | 0,0048828125 | V | 1 |
| 0x5A06 | - | unsigned integer | - | Spannung Drosselklappe Poti 1 | 0,0 | 0,0048828125 | V | 1 |
| 0x5A07 | - | unsigned integer | - | Spannung Drosselklappe Poti 2 | 0,0 | 0,0048828125 | V | 1 |
| 0x5A08 | - | unsigned char | - | Spannung Ansauglufttemperatur | 0,0 | 0,0196000002324581 | - | 1 |
| 0x5A09 | - | unsigned integer | - | Spannung Motortemperatur | 0,0 | 0,0048828125 | V | 1 |
| 0x5A0A | - | unsigned integer | - | Spannung Kühlmitteltemperatur Kühlerausgang | 0,0 | 0,0048828125 | V | 1 |
| 0x5A0B | - | unsigned integer | - | Spannung DME Umgebungsdruck | 0,0 | 0,0048828125 | V | 1 |
| 0x5A0C | - | unsigned char | - | Spannung Luftmasse | 0,0 | 0,0196000002324581 | V | 1 |
| 0x5A0D | - | unsigned char | - | Spannung Sekundärluft | 0,0 | 0,0196000002324581 | V | 1 |
| 0x5A0E | - | unsigned integer | - | Spannung SG-Innentemperatur | 0,0 | 0,0048828125 | V | 1 |
| 0x5A0F | - | unsigned integer | - | Spannung Kl.15 | 0,0 | 0,0048828125 | V | 1 |
| 0x5A10 | - | unsigned integer | - | Spannung Kl15 | 0,0 | 0,0280601158738136 | V | 1 |
| 0x5A11 | - | unsigned integer | - | Spannung Lambdasonde vor Kat 1 | 0,0 | 0,0048828125 | V | 1 |
| 0x5A12 | - | unsigned integer | - | Spannung Lambdasonde vor Kat 2 | 0,0 | 0,0048828125 | V | 1 |
| 0x5A13 | - | unsigned integer | - | Spannung Lambdasonde hinter Kat 1 | 0,0 | 0,0048828125 | V | 1 |
| 0x5A14 | - | unsigned integer | - | Spannung Lambdasonde hinter Kat 2 | 0,0 | 0,0048828125 | V | 1 |
| 0x5A17 | - | unsigned integer | - | Spannung Strommessung DMTL | 0,0 | 0,0048828125 | V | 1 |
| 0x5A21 | - | unsigned char | - | Kühlmitteltemperatur Kühlerausgang | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5A22 | - | unsigned char | - | Steuergerät Innentemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5A24 | - | unsigned integer | - | Drosselklappe Sollwert | 0,0 | 0,00729414634406567 | °TPS | 1 |
| 0x5A26 | - | unsigned integer | - | Umgebungsdruck | 0,0 | 0,0829175263643265 | hPa | 1 |
| 0x5A27 | - | unsigned char | - | Pedalwertgeber Poti 1 | 0,0 | 0,390625 | % | 1 |
| 0x5A28 | - | unsigned char | - | Pedalwertgeber Poti 2 | 0,0 | 0,390625 | % | 1 |
| 0x5A29 | - | unsigned char | - | Fahrpedalwert | 0,0 | 0,390625 | % | 1 |
| 0x5A2A | - | unsigned integer | - | Luftmasse Sekundärluft | 0,0 | 0,015625 | kg/h | 1 |
| 0x5A30 | - | signed integer | - | Laufunruhe Zylinder 1 | 0,0 | 1,0 | µs | 1 |
| 0x5A31 | - | signed integer | - | Laufunruhe Zylinder 2 | 0,0 | 1,0 | µs | 1 |
| 0x5A32 | - | signed integer | - | Laufunruhe Zylinder 3 | 0,0 | 1,0 | µs | 1 |
| 0x5A33 | - | signed integer | - | Laufunruhe Zylinder 4 | 0,0 | 1,0 | µs | 1 |
| 0x5A34 | - | signed integer | - | Laufunruhe Zylinder 5 | 0,0 | 1,0 | µs | 1 |
| 0x5A35 | - | signed integer | - | Laufunruhe Zylinder 6 | 0,0 | 1,0 | µs | 1 |
| 0x5A36 | - | 0xFF | - | Status Klopfen | 0 | 1 | 0/1 | 1 |
| 0x5A37 | - | unsigned integer | - | Spannung Klopfwerte Zylinder 1 | 0,0 | 7,62939453125E-5 | V | 1 |
| 0x5A38 | - | unsigned integer | - | Spannung Klopfwerte Zylinder 2 | 0,0 | 7,62939453125E-5 | V | 1 |
| 0x5A39 | - | unsigned integer | - | Spannung Klopfwerte Zylinder 3 | 0,0 | 7,62939453125E-5 | V | 1 |
| 0x5A3A | - | unsigned integer | - | Spannung Klopfwerte Zylinder 4 | 0,0 | 7,62939453125E-5 | V | 1 |
| 0x5A3B | - | unsigned integer | - | Spannung Klopfwerte Zylinder 5 | 0,0 | 7,62939453125E-5 | V | 1 |
| 0x5A3C | - | unsigned integer | - | Spannung Klopfwerte Zylinder 6 | 0,0 | 7,62939453125E-5 | V | 1 |
| 0x5A3D | - | unsigned integer | - | Klopfsignal Zylinder 1 | 0,0 | 7,62939453125E-5 | V | 1 |
| 0x5A3E | - | unsigned integer | - | Klopfsignal Zylinder 1 relativ | 0,0 | 1,52587890625E-5 | - | 1 |
| 0x5A3F | - | unsigned integer | - | Klopfsignal Zylinder 6 | 0,0 | 7,62939453125E-5 | V | 1 |
| 0x5A40 | - | unsigned integer | - | Klopfsignal Zylinder 6 relativ | 0,0 | 1,52587890625E-5 | - | 1 |
| 0x5A42 | - | unsigned integer | - | Einspritzzeit Zylinder 1 | 0,0 | 0,00400000018998981 | ms | 1 |
| 0x5A43 | - | unsigned integer | - | Einspritzzeit Zylinder 2 | 0,0 | 0,00400000018998981 | ms | 1 |
| 0x5A44 | - | unsigned integer | - | Einspritzzeit Zylinder 3 | 0,0 | 0,00400000018998981 | ms | 1 |
| 0x5A45 | - | unsigned integer | - | Einspritzzeit Zylinder 4 | 0,0 | 0,00400000018998981 | ms | 1 |
| 0x5A46 | - | unsigned integer | - | Einspritzzeit Zylinder 5 | 0,0 | 0,00400000018998981 | ms | 1 |
| 0x5A47 | - | unsigned integer | - | Einspritzzeit Zylinder 6 | 0,0 | 0,00400000018998981 | ms | 1 |
| 0x5A49 | - | unsigned char | - | Zündwinkel Zylinder 1 | -35,6249989382923 | 0,375 | °CRK | 1 |
| 0x5A4B | - | unsigned char | - | Berechneter Lastwert | 0,0 | 0,390625 | % | 1 |
| 0x5A4E | - | 0xFF | - | Klimakompressorrelais Ein | 0 | 1 | 0/1 | 1 |
| 0x5A4F | - | 0xFF | - | VVT- Entlastungsrelais Ein | 0 | 1 | 0/1 | 1 |
| 0x5A50 | - | unsigned integer | - | Lambdawert vor Kat Bank 1 | 0,0 | 9,765625E-4 | - | 1 |
| 0x5A51 | - | unsigned integer | - | Lambdawert vor Kat Bank 2 | 0,0 | 9,765625E-4 | - | 1 |
| 0x5A52 | - | 0xFF | - | Status LS nach Kat Bank 1 | 0 | 1 | 0/1 | 1 |
| 0x5A53 | - | 0xFF | - | Status LS nach Kat Bank 2 | 0 | 1 | 0/1 | 1 |
| 0x5A54 | - | 0xFF | _CNV_S_7_EGCP_RANGE_710 | Status LS Heizung nach Kat Bank 1 | 0 | 1 | 0-n | 1 |
| 0x5A55 | - | 0xFF | _CNV_S_7_EGCP_RANGE_710 | Status LS Heizung nach Kat Bank 2 | 0 | 1 | 0-n | 1 |
| 0x5A56 | - | 0xFF | _CNV_S_7_EGCP_RANGE_710 | Status LS Heizung vor Kat Bank 1 | 0 | 1 | 0-n | 1 |
| 0x5A57 | - | 0xFF | _CNV_S_7_EGCP_RANGE_710 | Status LS Heizung vor Kat Bank 2 | 0 | 1 | 0-n | 1 |
| 0x5A58 | - | unsigned char | - | Lambdasondenheizung PWM vor Kat Bank 1 | 0,0 | 0,390625 | % | 1 |
| 0x5A59 | - | unsigned char | - | Lambdasondenheizung PWM nach Kat Bank 1 | 0,0 | 0,390625 | % | 1 |
| 0x5A5A | - | unsigned char | - | Lambdasondenheizung PWM vor Kat Bank 2 | 0,0 | 0,390625 | % | 1 |
| 0x5A5B | - | unsigned char | - | Lambdasondenheizung PWM nach Kat Bank 2 | 0,0 | 0,390625 | % | 1 |
| 0x5A60 | - | 0xFF | - | Bremslichtschalter Ein | 0 | 1 | 0/1 | 1 |
| 0x5A61 | - | 0xFF | - | Bremslichttestschalter Ein | 0 | 1 | 0/1 | 1 |
| 0x5A62 | - | 0xFF | - | Öldruckschalter Ein | 0 | 1 | 0/1 | 1 |
| 0x5A63 | - | 0xFF | - | E-Boxlüfter Ein | 0 | 1 | 0/1 | 1 |
| 0x5A64 | - | 0xFF | - | Kühlerjalousie | 0 | 1 | 0/1 | 1 |
| 0x5A65 | - | 0xFF | - | Abgasklappe Ein | 0 | 1 | 0/1 | 1 |
| 0x5A66 | - | 0xFF | - | DMTL Pumpe Ein | 0 | 1 | 0/1 | 1 |
| 0x5A67 | - | 0xFF | - | DMTL Ventil Ein | 0 | 1 | 0/1 | 1 |
| 0x5A68 | - | 0xFF | - | DMTL Heizung Ein | 0 | 1 | 0/1 | 1 |
| 0x5A69 | - | 0xFF | - | MIL Lampe Ein | 0 | 1 | 0/1 | 1 |
| 0x5A6A | - | 0xFF | - | Lampe FGR Ein | 0 | 1 | 0/1 | 1 |
| 0x5A6B | - | 0xFF | - | Lampe Check Engine Ein | 0 | 1 | 0/1 | 1 |
| 0x5A6D | - | 0xFF | _CNV_S_8_RANGE_STAT_19 | Status Taste FGR | 0 | 1 | 0-n | 1 |
| 0x5A70 | - | 0xFF | - | Soundklappe Zustand | 0 | 1 | 0/1 | 1 |
| 0x5A71 | - | signed integer | - | DISA1 PWM (große/obere Klappe) | 0,0 | 0,0030517578125 | % | 1 |
| 0x5A72 | - | signed integer | - | DISA2 PWM (kleine/untere Klappe) | 0,0 | 0,0030517578125 | % | 1 |
| 0x5A73 | - | 0xFF | - | Kurbelgehäuseentlüftungsheizung | 0 | 1 | 0/1 | 1 |
| 0x5A74 | - | unsigned integer | - | Beheizter Thermostat PWM | 0,0 | 0,00152587890625 | % | 1 |
| 0x5A75 | - | 0xFF | - | Sekundärluft Ventil | 0 | 1 | 0/1 | 1 |
| 0x5A76 | - | unsigned integer | - | Adaption Öffnungspunkt Tankentlüftungsventil | 0,0 | 0,00152587890625 | % | 1 |
| 0x5A77 | - | unsigned char | - | TankEntlüftungsVentil TEV PWM | 0,0 | 0,390625 | % | 1 |
| 0x5A78 | - | 0xFF | - | Abgasklappe Ansteuerung | 0 | 1 | 0/1 | 1 |
| 0x5A79 | - | unsigned char | - | E-Lüfter PWM | 0,0 | 0,390625 | % | 1 |
| 0x5A7A | - | unsigned integer | - | VANOS PWM Wert Einlass | 0,0 | 0,00152587890625 | % | 1 |
| 0x5A7B | - | unsigned integer | - | VANOS PWM Wert Auslass | 0,0 | 0,00152587890625 | % | 1 |
| 0x5A81 | - | signed integer | - | Integrator Bank 1 | 2,22044609888115E-14 | 0,00152587890625 | % | 1 |
| 0x5A82 | - | signed integer | - | Integrator Bank 2 | 2,22044609888115E-14 | 0,00152587890625 | % | 1 |
| 0x5A83 | - | signed integer | - | Adaption Offset Lambda Bank 1 | 3,08424652517705E-13 | 0,0211947802454233 | mg/stk | 1 |
| 0x5A84 | - | signed integer | - | Adaption Offset Lambda Bank 2 | 3,08424652517705E-13 | 0,0211947802454233 | mg/stk | 1 |
| 0x5A85 | - | signed integer | - | Adaption Multiplikation Lambda Bank 1 | 2,22044609888115E-14 | 0,00152587890625 | % | 1 |
| 0x5A86 | - | signed integer | - | Adaption Multiplikation Lambda Bank 2 | 2,22044609888115E-14 | 0,00152587890625 | % | 1 |
| 0x5A87 | - | signed integer | - | Adaptionswert Trimregelung Bank 1 | 0,0 | 6,103515625E-5 | - | 1 |
| 0x5A88 | - | signed integer | - | Adaptionswert Trimregelung Bank 2 | 0,0 | 6,103515625E-5 | - | 1 |
| 0x5A89 | - | signed integer | - | multiplikative Gemischadaption hohe Last Bank 1 | 2,22044609888115E-14 | 0,00152587890625 | % | 1 |
| 0x5A8A | - | signed integer | - | multiplikative Gemischadaption hohe Last Bank 2 | 2,22044609888115E-14 | 0,00152587890625 | % | 1 |
| 0x5A8B | - | signed integer | - | multiplikative Gemischadaption niedrige Last Bank 1 | 2,22044609888115E-14 | 0,00152587890625 | % | 1 |
| 0x5A8C | - | signed integer | - | multiplikative Gemischadaption niedrige Last Bank 2 | 2,22044609888115E-14 | 0,00152587890625 | % | 1 |
| 0x5A8D | - | signed integer | - | additive Gemischadaption Leerlauf Bank 1 | 3,08424652517705E-13 | 0,0211947802454233 | mg/stk | 1 |
| 0x5A8E | - | signed integer | - | additive Gemischadaption Leerlauf Bank 2 | 3,08424652517705E-13 | 0,0211947802454233 | mg/stk | 1 |
| 0x5A91 | - | unsigned char | - | Katalysatordiagnosewert Bank 1 | 0,0 | 0,015625 | - | 1 |
| 0x5A92 | - | unsigned char | - | Katalysatordiagnosewert Bank 2 | 0,0 | 0,015625 | - | 1 |
| 0x5A94 | - | unsigned char | - | Nockenwelle Auslass Sollwert | -39,9999978542329 | -0,375 | °CRK | 1 |
| 0x5A95 | - | unsigned char | - | Adaptionswert Nockenwelle Auslaß | -47,9999985694886 | 0,375 | °CRK | 1 |
| 0x5A96 | - | unsigned char | - | Adaptionswert Nockenwelle Einlaß | -47,9999985694886 | 0,375 | °CRK | 1 |
| 0x5A97 | - | 0xFF | - | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0 | 1 | 0/1 | 1 |
| 0x5A99 | - | 0xFF | - | Kurbelwellen Adaption beendet | 0 | 1 | 0/1 | 1 |
| 0x5AA1 | - | 0xFF | _CNV_S_10_STATE_EOL__354 | Status Diagnose TEV | 0 | 1 | 0-n | 1 |
| 0x5AA2 | - | 0xFF | _CNV_S_10_STATE_EOL__354 | Status Diagnose DMTL | 0 | 1 | 0-n | 1 |
| 0x5AA3 | - | 0xFF | _CNV_S_10_STATE_EOL__354 | Status Diagnose Lambdasonden | 0 | 1 | 0-n | 1 |
| 0x5AA4 | - | 0xFF | _CNV_S_10_STATE_EOL__354 | Status Diagnose Leerlaufdrehzahlverstellung | 0 | 1 | 0-n | 1 |
| 0x5AA5 | - | 0xFF | _CNV_S_10_STATE_EOL__354 | Status Diagnose Sekundärluft | 0 | 1 | 0-n | 1 |
| 0x5AA6 | - | 0xFF | _CNV_S_10_STATE_EOL__354 | Status Diagnose VVT Anschläge lernen | 0 | 1 | 0-n | 1 |
| 0x5AB1 | - | unsigned char | - | Geschwindigkeit | 0,0 | 1,0 | km/h | 1 |
| 0x5AB3 | - | unsigned integer | - | Fahrstrecke mit MIL an | 0,0 | 1,0 | km | 1 |
| 0x5AB4 | - | unsigned long | - | Betriebsstundenzähler | 0,0 | 2,77777780866018E-5 | h | 1 |
| 0x5AB5 | - | 0xFF | - | Variante Sekundärluftpumpe | 0 | 1 | 0/1 | 1 |
| 0x5AB6 | - | unsigned char | - | Rohwert Ansauglufttemperatur 1 | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5AB7 | - | unsigned char | - | Rohwert Kühlwassertemperatur | -47,9999985694886 | 0,75 | °C | 1 |
| 0x5AB8 | - | unsigned integer | - | Spannung Saugrohrdruck | 0,0 | 0,0048828125 | V | 1 |
| 0x5AB9 | - | unsigned integer | - | Spannung Sportschalter | 0,0 | 0,0048828125 | V | 1 |
| 0x5ABA | - | unsigned char | - | PWM Kraftstoffpumpe | 0,0 | 0,390625 | % | 1 |
| 0x5ABB | - | unsigned integer | - | Ausgewählter VVT Istwinkel | 0,0 | 0,01220703125 | % | 1 |
| 0x5ABC | - | unsigned integer | - | Luftmasse | 0,0 | 0,03125 | kg/h | 1 |
| 0x5ABD | - | 0xFF | - | Starterrelais aktiv | 0 | 1 | 0/1 | 1 |
| 0x5AC0 | - | unsigned integer | - | Reset Status Hardware-Register | 0,0 | 1,0 | - | 1 |
| 0x5AC1 | - | unsigned long | - | Reset Status Software-Register | 0,0 | 1,0 | - | 1 |
| 0x5AC2 | - | unsigned long | - | Reset Adresse | 0,0 | 1,0 | - | 1 |
| 0x5AC3 | - | unsigned integer | - | Fehler Segmentzähler | 0,0 | 1,0 | - | 1 |
| 0x5AE0 | - | unsigned integer | - | TM_1 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AE1 | - | unsigned integer | - | TM_2 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AE2 | - | unsigned integer | - | TM_3 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AE3 | - | unsigned integer | - | TM_4 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AE4 | - | unsigned integer | - | TM_5 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AE5 | - | unsigned integer | - | TO_1 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AE6 | - | unsigned integer | - | TO_2 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AE7 | - | unsigned integer | - | TO_3 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AE8 | - | unsigned integer | - | TO_4 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AE9 | - | unsigned integer | - | TO_5 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AEA | - | unsigned integer | - | TG_1 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AEB | - | unsigned integer | - | TG_2 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AEC | - | unsigned integer | - | TG_3 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AED | - | unsigned integer | - | TG_4 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AEE | - | unsigned integer | - | TG_5 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AEF | - | unsigned integer | - | TU_1 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AF0 | - | unsigned integer | - | TU_2 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AF1 | - | unsigned integer | - | TU_3 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AF2 | - | unsigned integer | - | TU_4 | 0,0 | 0,00152587890625 | % | 1 |
| 0x5AF3 | - | unsigned integer | - | TU_5 | 0,0 | 0,00152587890625 | % | 1 |
| 0x58FF | - | unsigned char | - | Umweltbedingung unbekannt | 0 | 1 | - | 1 |

### _CNV_S_10_STATE_EOL__354

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ACT |
| 0x01 | ST_INH |
| 0x02 | PAR_NOT_PLAUS |
| 0x03 | WAIT_REL |
| 0x04 | UNDEF |
| 0x05 | NOT_START |
| 0x06 | END_WOUT_RESULT |
| 0x07 | ABORTED |
| 0x08 | END_WOUT_ERR |
| 0x09 | END_WITH_ERR |
| 0xFF | undefiniert |

### _CNV_S_11_EGCP_RANGE_728

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_FAULT |
| 0x01 | SCG_LINE_RCD |
| 0x02 | SCG_LINE_VIP |
| 0x03 | SCG_LINE_VG |
| 0x04 | SCG_LINE_VN |
| 0x05 | SCG |
| 0x06 | SCBAT_LINE_RCD |
| 0x07 | SCBAT_LINE_VIP |
| 0x08 | SCBAT_LINE_VG |
| 0x09 | SCBAT_LINE_VN |
| 0x0A | SCBAT |
| 0xFF | undefiniert |

### _CNV_S_14_TMO3_ERR_C_422

| WERT | UWTEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | COMM_CKS_ERR |
| 0x02 | COMM_HD_ERR |
| 0x03 | PRDR_CHK_ERR |
| 0x04 | SW_VERS_ERR |
| 0x05 | SW_VAR_ERR |
| 0x06 | ABC_MON2_MU_ERR |
| 0x07 | IDX_MON2_MU_ERR |
| 0x08 | SYN_PFM_MU_ERR |
| 0x09 | ROM_LVL2_ERR |
| 0x0A | RAM_LVL2_ERR |
| 0x0B | ROM_LVL1_ERR |
| 0x0C | RAM_LVL1_ERR |
| 0x0D | RST_LOOP_ERR |
| 0xFF | undefiniert |

### _CNV_S_21_TMO3_ERR_C_423

| WERT | UWTEXT |
| --- | --- |
| 0x00 | OK |
| 0x01 | COMM_HD_ERR |
| 0x02 | COMM_CKS_ERR |
| 0x03 | PIN_CONF_ERR |
| 0x04 | SW_VERS_ERR |
| 0x05 | COMM_TOUT_MAX_ERR |
| 0x06 | COMM_TOUT_MIN_ERR |
| 0x07 | RAM_CHK_MU_ERR |
| 0x08 | ROM_CHK_MU_ERR |
| 0x09 | RESP_MON2_MC_ERR |
| 0x0A | RED_SWI_OFF_PATH |
| 0x0B | PFM_1_MC_ERR |
| 0x0C | PFM_2_MC_ERR |
| 0x0D | PFM_3_MC_ERR |
| 0x0E | PFM_4_MC_ERR |
| 0x0F | PFM_5_MC_ERR |
| 0x10 | PFM_6_MC_ERR |
| 0x11 | PFM_7_MC_ERR |
| 0x12 | PFM_8_MC_ERR |
| 0x13 | WDG_MU_ERR |
| 0x14 | ENA_BYTE_ERR |
| 0xFF | undefiniert |

### _CNV_S_3_STATE_RLY__374

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Request cannot be executed |
| 0x01 | relay open |
| 0x02 | relay close |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_732

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_SYM |
| 0x01 | TTIP_ERR |
| 0x02 | READY_ERR |
| 0x04 | TTIP_MES_ERR |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_739

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VLS_OK |
| 0x01 | VLS_L |
| 0x02 | VLS_H_OC |
| 0x03 | VLS_AFS_OC |
| 0xFF | undefiniert |

### _CNV_S_5_LACO_RANGE_765

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 1:OL_CDN |
| 0x02 | 2:CL |
| 0x04 | 4:OL_INTR |
| 0x08 | 8:OL_ERR |
| 0x10 | 10:CL_ERR |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_106

| WERT | UWTEXT |
| --- | --- |
| 0x00 | PASSIVE |
| 0x01 | CONST_DRIVE |
| 0x03 | RESUME |
| 0x05 | SET_ACC |
| 0x07 | RETARD |
| 0x09 | TIP |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_146

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ES |
| 0x01 | ST |
| 0x02 | IS |
| 0x03 | PL |
| 0x04 | PU |
| 0x05 | PUC |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_305

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ETC_NO_LIH |
| 0x01 | ETC_LIH_1 |
| 0x02 | ETC_LIH_2_REV |
| 0x04 | ETC_LIH_2 |
| 0x08 | ETC_LIH_3 |
| 0x10 | ETC_LIH_4 |
| 0xFF | undefiniert |

### _CNV_S_7_DEF_BA_467

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | UGD |
| 0x02 | GD |
| 0x03 | GD_KLEINER_HUB |
| 0x06 | DKNOTL |
| 0x07 | VVTNOTL1 |
| 0x08 | VVTNOTL |
| 0xFF | undefiniert |

### _CNV_S_7_EGCP_RANGE_710

| WERT | UWTEXT |
| --- | --- |
| 0x00 | LSH_OFF |
| 0x01 | LSH_POW_RISE |
| 0x02 | LSH_POW_RED |
| 0x03 | LSH_POW_FALL |
| 0x04 | LSH_POW_CTL |
| 0x05 | LSH_VB_PROT |
| 0x06 | LSH_TEMP_PROT |
| 0xFF | undefiniert |

### _CNV_S_7_RANGE_ECU__142

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ENG_STOP |
| 0x01 | RUN_ENG |
| 0x02 | SYN_ENG_IGK_ON |
| 0x03 | SYN_ENG_IGK_OFF |
| 0x04 | PWL |
| 0x05 | ENG_LOCK |
| 0x06 | WAKE_UP |
| 0xFF | undefiniert |

### _CNV_S_8_RANGE_STAT_19

| WERT | UWTEXT |
| --- | --- |
| 0x00 | None |
| 0x01 | Set-Acc-TipUp |
| 0x02 | Decelerate-TipDown |
| 0x03 | Resume |
| 0x04 | Off |
| 0x05 | - |
| 0x06 | - |
| 0x07 | Error |
| 0xFF | undefiniert |

### _CNV_S_8_RANGE_STAT_326

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | VAR_ECU_ROM_NOT_PLAUS |
| 0x5A5A | VAR_ECU_LOT1 |
| 0xA5A5 | VAR_ECU_LOT2 |
| 0xAEAE | VAR_ECU_LOT4 |
| 0xBCBC | VAR_ECU_SERIAL_ECU |
| 0xCBCB | VAR_ECU_LOT6 |
| 0xEAEA | VAR_ECU_LOT3 |
| 0xFFFF | VAR_ECU_NOT_LEARNED |
| 0xFFFF | undefiniert |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0000 | 0x58FF | 0x58FF | 0x58FF | 0x58FF |
| 0x29CC | 0x5824 | 0x5834 | 0x583C | 0x586D |
| 0x29CD | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29CE | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29CF | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29D0 | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29D1 | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29D2 | 0x581F | 0x58E5 | 0x58E6 | 0x58E7 |
| 0x29D9 | 0x5811 | 0x586D | 0x581F | 0x583B |
| 0x29DA | 0x5811 | 0x583C | 0x58F8 | 0x58F9 |
| 0x29DB | 0x5811 | 0x581F | 0x5818 | 0x583C |
| 0x29DC | 0x581F | 0x5818 | 0x5811 | 0x583B |
| 0x29E0 | 0x581F | 0x5818 | 0x5811 | 0x5855 |
| 0x29E1 | 0x581F | 0x5818 | 0x5811 | 0x5856 |
| 0x29F4 | 0x5811 | 0x5818 | 0x581F | 0x581E |
| 0x29F5 | 0x5811 | 0x5818 | 0x581F | 0x581E |
| 0x29FF | 0x5824 | 0x5882 | 0x5877 | 0x5876 |
| 0x2A00 | 0x5824 | 0x5882 | 0x5811 | 0x583C |
| 0x2A01 | 0x5824 | 0x5882 | 0x5811 | 0x5812 |
| 0x2A02 | 0x5811 | 0x5821 | 0x5832 | 0x583C |
| 0x2A03 | 0x5811 | 0x5821 | 0x5832 | 0x583C |
| 0x2A04 | 0x5824 | 0x5882 | 0x5877 | 0x583C |
| 0x2A07 | 0x5824 | 0x5882 | 0x5811 | 0x583C |
| 0x2A12 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A13 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A15 | 0x583B | 0x5859 | 0x585A | 0x588D |
| 0x2A16 | 0x583B | 0x5859 | 0x585B | 0x588D |
| 0x2A17 | 0x583B | 0x5859 | 0x5867 | 0x5824 |
| 0x2A18 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A19 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A1A | 0x581F | 0x5818 | 0x5811 | 0x584D |
| 0x2A1B | 0x583B | 0x5859 | 0x585B | 0x588D |
| 0x2A1C | 0x580D | 0x5815 | 0x583B | 0x5867 |
| 0x2A2E | 0x581F | 0x5818 | 0x5811 | 0x58E2 |
| 0x2A2F | 0x581F | 0x5818 | 0x5811 | 0x58E2 |
| 0x2A30 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A31 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A32 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A33 | 0x5811 | 0x58A5 | 0x589F | 0x58A6 |
| 0x2A34 | 0x5811 | 0x58A5 | 0x589F | 0x58A6 |
| 0x2A35 | 0x5811 | 0x58A5 | 0x589F | 0x58A6 |
| 0x2A36 | 0x5811 | 0x58A5 | 0x589F | 0x58A6 |
| 0x2A37 | 0x58A5 | 0x589F | 0x58A6 | 0x581F |
| 0x2A38 | 0x5811 | 0x58A2 | 0x589F | 0x58A0 |
| 0x2A39 | 0x58A2 | 0x583C | 0x58A7 | 0x5824 |
| 0x2A3A | 0x583C | 0x58A7 | 0x581F | 0x5824 |
| 0x2A3B | 0x5811 | 0x583C | 0x589F | 0x58A0 |
| 0x2A3C | 0x589E | 0x58A4 | 0x58A5 | 0x58A7 |
| 0x2A3D | 0x5811 | 0x583C | 0x58A4 | 0x58A7 |
| 0x2A3E | 0x5811 | 0x583C | 0x58A4 | 0x58A2 |
| 0x2A3F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A40 | 0x5811 | 0x583C | 0x58A4 | 0x58A2 |
| 0x2A41 | 0x5811 | 0x58A7 | 0x58A2 | 0x580D |
| 0x2A42 | 0x58A4 | 0x589F | 0x58A0 | 0x58A1 |
| 0x2A43 | 0x5811 | 0x580D | 0x58A7 | 0x58A2 |
| 0x2A44 | 0x58A4 | 0x58A2 | 0x58A3 | 0x58A1 |
| 0x2A45 | 0x58A7 | 0x58A2 | 0x589F | 0x58A0 |
| 0x2A46 | 0x5811 | 0x5813 | 0x581F | 0x580B |
| 0x2A47 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0x2A80 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A82 | 0x5811 | 0x581A | 0x581B | 0x581F |
| 0x2A85 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A87 | 0x5811 | 0x581C | 0x581D | 0x581F |
| 0x2A94 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A95 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A96 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A97 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A98 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A99 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9A | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9B | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9E | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A9F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AA0 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AA1 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AA2 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AA3 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2AA8 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2AA9 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2AAA | 0x5811 | 0x581F | 0x5832 | 0x587C |
| 0x2AAB | 0x583C | 0x580C | 0x5818 | 0x5824 |
| 0x2AAC | 0x583C | 0x580C | 0x5818 | 0x5824 |
| 0x2AAD | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AAE | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AB2 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB3 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB4 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB5 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB6 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AC1 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2AC6 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2ACB | 0x588B | 0x584A | 0x587C | 0x583C |
| 0x2ACC | 0x5843 | 0x584A | 0x587C | 0x583C |
| 0x2AD0 | 0x5832 | 0x5881 | 0x587C | 0x583C |
| 0x2ADF | 0x5811 | 0x5812 | 0x5813 | 0x5814 |
| 0x2AE0 | 0x5811 | 0x5812 | 0x5882 | 0x5815 |
| 0x2AE1 | 0x5811 | 0x5818 | 0x580E | 0x58D1 |
| 0x2AE4 | 0x5824 | 0x583A | 0x588B | 0x587C |
| 0x2C24 | 0x5805 | 0x588B | 0x5845 | 0x5848 |
| 0x2C27 | 0x588C | 0x5849 | 0x5871 | 0x5845 |
| 0x2C28 | 0x588F | 0x584B | 0x5873 | 0x5848 |
| 0x2C2B | 0x588C | 0x5849 | 0x5871 | 0x5845 |
| 0x2C2C | 0x588F | 0x584B | 0x5873 | 0x5848 |
| 0x2C2D | 0x580B | 0x5845 | 0x587D | 0x588C |
| 0x2C2E | 0x580B | 0x5848 | 0x587E | 0x588F |
| 0x2C31 | 0x5849 | 0x5845 | 0x5878 | 0x58F5 |
| 0x2C32 | 0x584B | 0x5848 | 0x5879 | 0x58F6 |
| 0x2C37 | 0x5815 | 0x5845 | 0x583B | 0x588C |
| 0x2C38 | 0x5815 | 0x5848 | 0x583B | 0x588F |
| 0x2C39 | 0x582E | 0x5845 | 0x5830 | 0x588C |
| 0x2C3A | 0x582F | 0x5848 | 0x5831 | 0x588F |
| 0x2C3B | 0x588B | 0x5849 | 0x5845 | 0x588C |
| 0x2C3C | 0x588B | 0x584B | 0x5848 | 0x588F |
| 0x2C3D | 0x5871 | 0x589B | 0x5845 | 0x588C |
| 0x2C3E | 0x5873 | 0x589C | 0x5848 | 0x588F |
| 0x2C3F | 0x5837 | 0x5815 | 0x5845 | 0x5827 |
| 0x2C40 | 0x5838 | 0x5815 | 0x5848 | 0x5828 |
| 0x2C41 | 0x589B | 0x582C | 0x5845 | 0x5815 |
| 0x2C42 | 0x589C | 0x582D | 0x5848 | 0x5815 |
| 0x2C6A | 0x581F | 0x588B | 0x5849 | 0x584B |
| 0x2C6B | 0x5845 | 0x585C | 0x5811 | 0x5849 |
| 0x2C6C | 0x5848 | 0x585D | 0x5811 | 0x584B |
| 0x2C6D | 0x5896 | 0x585C | 0x5811 | 0x5849 |
| 0x2C6E | 0x5897 | 0x585D | 0x5811 | 0x584B |
| 0x2C6F | 0x5896 | 0x5849 | 0x5816 | 0x5845 |
| 0x2C70 | 0x5897 | 0x584B | 0x5816 | 0x5848 |
| 0x2C73 | 0x5896 | 0x585C | 0x5849 | 0x588B |
| 0x2C74 | 0x5897 | 0x585D | 0x584B | 0x588B |
| 0x2C75 | 0x5896 | 0x585C | 0x5849 | 0x588B |
| 0x2C76 | 0x5897 | 0x585D | 0x584B | 0x588B |
| 0x2C77 | 0x5896 | 0x585C | 0x5849 | 0x588B |
| 0x2C78 | 0x5897 | 0x585D | 0x584B | 0x588B |
| 0x2C79 | 0x5896 | 0x585C | 0x5806 | 0x5849 |
| 0x2C7A | 0x5897 | 0x585D | 0x5808 | 0x584B |
| 0x2C7B | 0x5896 | 0x585C | 0x5849 | 0x5845 |
| 0x2C7C | 0x5897 | 0x585D | 0x584B | 0x5848 |
| 0x2C7E | 0x5849 | 0x5845 | 0x5878 | 0x58F5 |
| 0x2C7F | 0x584B | 0x5848 | 0x5879 | 0x58F6 |
| 0x2C9C | 0x588C | 0x588B | 0x5815 | 0x5827 |
| 0x2C9D | 0x588F | 0x588B | 0x5815 | 0x5828 |
| 0x2C9E | 0x5896 | 0x585C | 0x5849 | 0x5829 |
| 0x2C9F | 0x5897 | 0x585D | 0x584B | 0x582A |
| 0x2CA6 | 0x5894 | 0x5815 | 0x5827 | 0x588C |
| 0x2CA7 | 0x5895 | 0x5815 | 0x5828 | 0x588F |
| 0x2CA8 | 0x5896 | 0x585C | 0x5829 | 0x5849 |
| 0x2CA9 | 0x5897 | 0x585D | 0x582A | 0x584B |
| 0x2CEC | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CED | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CEE | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CEF | 0x5858 | 0x583F | 0x587C | 0x583C |
| 0x2CF6 | 0x58AB | 0x5812 | 0x584C | 0x584E |
| 0x2CF7 | 0x58AC | 0x5812 | 0x584C | 0x584E |
| 0x2CF9 | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFA | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFB | 0x584E | 0x584C | 0x58B0 | 0x583C |
| 0x2CFC | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFD | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFE | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2D06 | 0x5811 | 0x589F | 0x5899 | 0x5812 |
| 0x2D07 | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2D09 | 0x5811 | 0x581E | 0x581F | 0x587C |
| 0x2D0F | 0x584F | 0x5811 | 0x5858 | 0x589F |
| 0x2D1B | 0x5846 | 0x5847 | 0x5843 | 0x583C |
| 0x2D1C | 0x5846 | 0x5847 | 0x5854 | 0x583C |
| 0x2D1D | 0x5843 | 0x5854 | 0x5846 | 0x583C |
| 0x2D1E | 0x5843 | 0x5854 | 0x5847 | 0x583C |
| 0x2D1F | 0x5843 | 0x5854 | 0x5846 | 0x5847 |
| 0x2D20 | 0x5846 | 0x5847 | 0x5843 | 0x5814 |
| 0x2D28 | 0x580B | 0x5811 | 0x581F | 0x587C |
| 0x2D29 | 0x5811 | 0x5826 | 0x580B | 0x5812 |
| 0x2D2A | 0x581E | 0x581F | 0x5820 | 0x583C |
| 0x2D50 | 0x58B8 | 0x580D | 0x58B7 | 0x5881 |
| 0x2D51 | 0x58BD | 0x5818 | 0x58CF | 0x58B8 |
| 0x2D52 | 0x58B8 | 0x58C0 | 0x58C1 | 0x5832 |
| 0x2D53 | 0x58B8 | 0x58B9 | 0x587C | 0x5839 |
| 0x2D54 | 0x58D9 | 0x58DA | 0x58DB | 0x58DC |
| 0x2D55 | 0x58B8 | 0x5814 | 0x5846 | 0x5847 |
| 0x2D56 | 0x58C7 | 0x58C8 | 0x58C9 | 0x58CA |
| 0x2D57 | 0x58BF | 0x5881 | 0x5893 | 0x583C |
| 0x2D58 | 0x58D4 | 0x58D6 | 0x58CD | 0x5832 |
| 0x2D59 | 0x58B8 | 0x5832 | 0x58CF | 0x58D0 |
| 0x2D5A | 0x5811 | 0x5832 | 0x58CF | 0x58D1 |
| 0x2D5B | 0x5811 | 0x580D | 0x5891 | 0x5893 |
| 0x2D5C | 0x58B8 | 0x5847 | 0x5854 | 0x583C |
| 0x2D5F | 0x5867 | 0x583D | 0x583E | 0x5840 |
| 0x2DB5 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DB6 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DB7 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DBE | 0x580D | 0x5811 | 0x5832 | 0x587C |
| 0x2DC0 | 0x5811 | 0x5813 | 0x5832 | 0x5891 |
| 0x2DC3 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0x2DC5 | 0x5811 | 0x582B | 0x583C | 0x587C |
| 0x2DC6 | 0x580D | 0x5815 | 0x583B | 0x5867 |
| 0x2DC8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DC9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DCC | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DCD | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DCE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD2 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD4 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DD5 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DE0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DE1 | 0x580D | 0x5815 | 0x583B | 0x5867 |
| 0x2DE2 | 0x580D | 0x5815 | 0x583B | 0x5867 |
| 0x2DE3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DEB | 0x5811 | 0x586A | 0x5898 | 0x583C |
| 0x2DEC | 0x5868 | 0x5869 | 0x586A | 0x58A8 |
| 0x2DED | 0x586B | 0x586C | 0x586E | 0x583C |
| 0x2E18 | 0x5811 | 0x5812 | 0x58B1 | 0x583C |
| 0x2E19 | 0x5811 | 0x5812 | 0x58B5 | 0x583C |
| 0x2E1A | 0x5811 | 0x5812 | 0x58B3 | 0x583C |
| 0x2E1B | 0x5811 | 0x5812 | 0x58B6 | 0x583C |
| 0x2E1C | 0x5811 | 0x5812 | 0x58B2 | 0x583C |
| 0x2E1D | 0x5811 | 0x5812 | 0x58B4 | 0x583C |
| 0x2E24 | 0x5811 | 0x5812 | 0x58B1 | 0x583C |
| 0x2E25 | 0x5811 | 0x5812 | 0x58B5 | 0x583C |
| 0x2E26 | 0x5811 | 0x5812 | 0x58B3 | 0x583C |
| 0x2E27 | 0x5811 | 0x5812 | 0x58B6 | 0x583C |
| 0x2E28 | 0x5811 | 0x5812 | 0x58B2 | 0x583C |
| 0x2E29 | 0x5811 | 0x5812 | 0x58B4 | 0x583C |
| 0x2E30 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E31 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E32 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E33 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E34 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E35 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E68 | 0x5811 | 0x5812 | 0x5883 | 0x5885 |
| 0x2E69 | 0x5811 | 0x5812 | 0x5886 | 0x5888 |
| 0x2E77 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0x2E7C | 0x5811 | 0x583C | 0x5867 | 0x587C |
| 0x2E81 | 0x5805 | 0x58E9 | 0x58EA | 0x58EB |
| 0x2E82 | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x2E83 | 0x5805 | 0x58E9 | 0x58EC | 0x58EE |
| 0x2E84 | 0x5811 | 0x5805 | 0x587C | 0x583C |
| 0x2E85 | 0x5811 | 0x5805 | 0x587C | 0x583C |
| 0x2E8B | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8C | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8D | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8E | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E96 | 0x588B | 0x5832 | 0x587C | 0x583C |
| 0x2E97 | 0x5811 | 0x5898 | 0x587C | 0x583C |
| 0x2E98 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2E9F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2EA1 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2EE0 | 0x5850 | 0x581F | 0x5824 | 0x581E |
| 0x2EE1 | 0x581F | 0x5820 | 0x583C | 0x58EC |
| 0x2EE2 | 0x581F | 0x5820 | 0x5824 | 0x5882 |
| 0x2EE3 | 0x581F | 0x5820 | 0x5824 | 0x587F |
| 0x2EEA | 0x5852 | 0x5820 | 0x5824 | 0x581E |
| 0x2EEB | 0x5820 | 0x581F | 0x5824 | 0x58EA |
| 0x2EEC | 0x5820 | 0x5882 | 0x581F | 0x5832 |
| 0x2EF4 | 0x5824 | 0x5882 | 0x5820 | 0x5811 |
| 0x2EF5 | 0x581F | 0x5820 | 0x5832 | 0x583C |
| 0x2EFE | 0x5820 | 0x587F | 0x5832 | 0x583C |
| 0x2EFF | 0x5824 | 0x587F | 0x583C | 0x5820 |
| 0x2F08 | 0x5851 | 0x581E | 0x5824 | 0x583C |
| 0x2F09 | 0x581E | 0x583A | 0x5824 | 0x581F |
| 0x2F0D | 0x5811 | 0x580D | 0x583C | 0x5880 |
| 0x2F0F | 0x5824 | 0x580D | 0x583C | 0x5880 |
| 0x2F12 | 0x5811 | 0x580D | 0x581F | 0x583C |
| 0x2F44 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F45 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F46 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F47 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2F4E | 0x5811 | 0x5832 | 0x583C | 0x5881 |
| 0x2F4F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2F58 | 0x588B | 0x584A | 0x5853 | 0x583C |
| 0x2F63 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F64 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F67 | 0x5811 | 0x580D | 0x5832 | 0x5818 |
| 0x2F6C | 0x580D | 0x588B | 0x58AD | 0x583C |
| 0x2F71 | 0x5811 | 0x581E | 0x5821 | 0x580D |
| 0x2F76 | 0x5821 | 0x5834 | 0x5870 | 0x587C |
| 0x2F77 | 0x5834 | 0x5870 | 0x5833 | 0x5824 |
| 0x2F7B | 0x5811 | 0x5822 | 0x581F | 0x583C |
| 0x2F80 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2F85 | 0x5841 | 0x5821 | 0x5824 | 0x583C |
| 0x2F8F | 0x58B7 | 0x580D | 0x5814 | 0x58CE |
| 0x2F94 | 0x5811 | 0x580D | 0x581F | 0x583C |
| 0x2F99 | 0x5824 | 0x5833 | 0x5882 | 0x5820 |
| 0x2F9A | 0x5824 | 0x5833 | 0x581E | 0x587C |
| 0x2F9E | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2FA3 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FA4 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FC6 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCD87 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0xCD8B | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD8F | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0xCD94 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD95 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD96 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD97 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD98 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD99 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9A | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9B | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9C | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9D | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9E | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCD9F | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA2 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA4 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA5 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA6 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAA | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCDAB | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAC | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAD | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAF | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB0 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xFFFF | 0x58FF | 0x58FF | 0x58FF | 0x58FF |

### MESSWERTETAB

| ARG | ID | RESULTNAME | KOMMENTAR | LABEL | L/H | DATENTYP | NAME | ADD | MUL | EINHEIT | DIV |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ITANS | 0x4200 | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansauglufttemperatur 1 | TIA | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| - | 0x4201 | STAT_0x4201_WERT | Umgebungsdruck | AMP_MES | - | unsigned integer | - | 0 | 0,082917526 | hPa | 1 |
| IPSAU | 0x4202 | STAT_SAUGROHRDRUCK_WERT | Saugrohrdruck | MAP_MES | - | unsigned integer | - | 0 | 0,082917526 | hPa | 1 |
| ILMKG | 0x4203 | STAT_LUFTMASSE_WERT | Massenstrom vom HFM | MAF_KGH_MES | - | unsigned integer | - | 0 | 0,03125 | kg/h | 1 |
| ITUMG | 0x4204 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | TAM | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Saugrohrdruck 1 / Ladedruck 1 | MAP_DIP_MES_BAS | - | unsigned integer | - | 0 | 0,082917526 | hPa | 1 |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Kühlwassertemperatur | TCO | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| - | 0x4301 | STAT_0x4301_WERT | Kuehlerauslasstemperatur | TCO_2 | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| IPWAB | 0x4302 | STAT_WASSERPUMPENLEISTUNG_BSD_WERT | Wasserpumpe Leistung ueber BSD | REL_CWP_PWR | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| ITWAE | 0x4303 | STAT_WASSERPUMPE_ELEKTRONIK_TEMPERATUR_WERT | Wasserpumpe Elektronik Temperatur | TEMP_EL_CWP | - | unsigned char | - | -50 | 1 | °C | 1 |
| IIWAP | 0x4304 | STAT_WASSERPUMPE_STROM_WERT | Wasserpumpe Strom | CUR_CNS_CWP | - | unsigned char | - | 0 | 0,5 | A | 1 |
| INWAP | 0x4305 | STAT_WASSERPUMPE_DREHZAHL_WERT | Wasserpumpe Drehzahl Ist | N_REL_CWP | - | unsigned char | - | 0 | 1 | - | 1 |
| SNWAP | 0x4306 | STAT_WASSERPUMPE_DREHZAHL_SOLL_WERT | Wasserpumpe Drehzahl Soll | N_REL_CWP_SP | - | unsigned char | - | 0 | 1 | - | 1 |
| IMLOE | 0x4400 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Ölstand Mittelwert Langzeit | OZ_NIVLANGT | - | unsigned char | - | 0 | 0,29296875 | mm manuell | 1 |
| IFSOE | 0x4401 | STAT_FUELLSTAND_MOTOROEL_KURZZEIT_WERT | Füllstand Motoröl | OZ_LP | - | unsigned char | - | 0 | 1 | % | 1 |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Öltemperatur | TOEL | - | signed integer | - | 0 | 0,1 | °C | 1 |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoff-Verbrauch seit letztem Service | OZ_KVBSM_UL | - | unsigned long | - | 0 | 1,22E-04 | l manuell | 1 |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | km seit letztem Service | OZ_OELKM | - | unsigned integer | - | 0 | 10 | km | 1 |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Oelsensor Niveau Rohwert | OZ_NIVR | - | unsigned char | - | 0 | 1 | - | 1 |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Oelsensor Qualität Rohwert | OZ_PERMR | - | unsigned integer | - | 0 | 1 | - | 1 |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Oelsensor Temperatur Rohwert | OZ_TEMPR | - | unsigned char | - | 0 | 1 | - | 1 |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Oelsensor Temperatur | OZ_TEMPAKT | - | signed integer | - | 0 | 0,1 | °C | 1 |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Oelsensor Niveau | OZ_NIVAKT | - | unsigned char | - | 0 | 0,29296875 | mm manuell | 1 |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Oelsensor Qualität | OZ_PERMAKT | - | unsigned integer | - | 0 | 9,16E-05 | - | 1 |
| - | 0x440B | STAT_0x440B_WERT | Länderfaktor 1 codiert | OZ_LF1C | - | unsigned char | - | 0 | 0,01 | - | 1 |
| - | 0x440C | STAT_0x440C_WERT | Länderfaktor 2 codiert | OZ_LF2C | - | unsigned char | - | 0 | 0,01 | - | 1 |
| - | 0x440D | STAT_0x440D_WERT | Länderfaktor 1 | OZ_LF1T | - | unsigned char | - | 0 | 0,01 | - | 1 |
| - | 0x440E | STAT_0x440E_WERT | Länderfaktor 2 | OZ_LF2T | - | unsigned char | - | 0 | 0,01 | - | 1 |
| - | 0x440F | STAT_0x440F_WERT | Kurzmittelwert-Niveau für den Tester | OZ_NIVKRZT | - | unsigned char | - | 0 | 0,29296875 | mm manuell | 1 |
| - | 0x4410 | STAT_0x4410_WERT | Restweg aus Permittivität abgeleitet | OZ_RWPERM | - | signed integer | - | 0 | 10 | km | 1 |
| - | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | OZ_RWKVB | - | signed integer | - | 0 | 10 | km | 1 |
| - | 0x4412 | STAT_0x4412_WERT | Öl-Alter in Monate | OZ_OELZEIT | - | unsigned integer | - | 0 | 1 | - | 1 |
| - | 0x4413 | STAT_0x4413_WERT | aufbereitete Permittivität bei letztem Ölwechsel | OZ_PERMLOW | - | unsigned integer | - | 0 | 9,16E-05 | - | 1 |
| - | 0x4414 | STAT_0x4414_WERT | Permittivität für Bewertung aufbereitet (extrapoliert) | OZ_PERMEX | - | unsigned integer | - | 0 | 9,16E-05 | - | 1 |
| - | 0x4415 | STAT_0x4415_WERT | Offset für Permittivitätskorrektur | OZ_PERMOFF | - | unsigned integer | - | 0 | 9,16E-05 | - | 1 |
| - | 0x4416 | STAT_0x4416_WERT | zugeteilte Bonuskraftstoffmenge | OZ_KVBOG | - | unsigned integer | - | 0 | 1 | - | 1 |
| - | 0x4417 | STAT_0x4417_WERT | zugeteilter Permittivitätsbonus | OZ_PERMBOG | - | unsigned integer | - | 0 | 9,16E-05 | - | 1 |
| IWVEX | 0x4500 | STAT_VVT_EXCENTER_WERT | VVT-Excenter Istwert | ANG_EXC_VVL | - | unsigned integer | - | 0 | 0,021973193 | Grad | 1 |
| SWVEX | 0x4501 | STAT_VVT_EXCENTER_SOLL_WERT | VVT-Excenter Sollwert | ANG_SP_VVL | - | unsigned integer | - | 0 | 0,021973193 | ° | 1 |
| IWVVB | 0x4502 | STAT_VVT_VERSTELLBEREICH_LERNROUTINE_WERT | Mechanischer Verstellbereich VVT aus Lernroutine | ANG_STK_VVL | - | unsigned integer | - | 0 | 0,021973193 | Grad | 1 |
| SWVLR | 0x4503 | STAT_VVT_LAGEREGLER_SOLL_WERT | Sollwert für Lageregler | ANG_SP_VVL_CUS | - | unsigned integer | - | 0 | 0,021973193 | ° | 1 |
| SWVLT | 0x4504 | STAT_VVT_LAGEREGLER_SOLL_VON_TESTER_WERT | Sollwert für Lageregler vom Tester | ANG_SP_EXT_ADJ_VVL | - | unsigned char | - | 0 | 0,705796063 | Grad | 1 |
| SSPEI | 0x4505 | STAT_VVT_EINLASSSPREIZUNG_SOLL_WERT | Sollwert Einlassspreizung | CAM_SP_IVVT_IN | - | signed integer | - | 0 | 0,1 | °CRK | 1 |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Nockenwellenposition Einlass | PSN_CAM_IN_1 | - | unsigned integer | - | -96 | 0,375 | °CRK | 1 |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Nockenwellenposition Auslass | PSN_CAM_EX_1 | - | unsigned integer | - | -96 | 0,375 | °CRK | 1 |
| ISNWE | 0x4508 | STAT_NW_EINLASSSPREIZUNG_WERT | Istwert Einlassspreizung | CAM_IN[1] | - | signed integer | - | 0 | 0,1 | °CRK | 1 |
| ISNWA | 0x4509 | STAT_NW_AUSLASSSPREIZUNG_WERT | Istwert Auslassspreizung | CAM_EX[1] | - | unsigned char | - | -40 | -0,375 | °CRK | 1 |
| NSNWA | 0x450A | STAT_NW_NORMSPREIZUNG_AUSLASS_WERT | Normspreizung Auslass | CAM_SP_REF_EX | - | signed integer | - | 0 | 0,0234375 | °CRK | 1 |
| NSNWE | 0x450B | STAT_NW_NORMSPREIZUNG_EINLASS_WERT | Normspreizung Einlass | CAM_SP_REF_IN | - | signed integer | - | 0 | 0,0234375 | °CRK | 1 |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | aktueller Drosselklappenwinkel | TPS_AV | - | unsigned integer | - | 0 | 0,007294146 | °TPS | 1 |
| SWDKL | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Drosselklappe Sollwert | TPS_SP_MDL | - | unsigned integer | - | 0 | 0,007294146 | °TPS | 1 |
| SUGEB | 0x4602 | STAT_GENERATOR_SPANNUNG_BSD_SOLL_WERT | Generator Sollspannung ueber BSD | V_ALTER_SP | - | unsigned long | - | 10,6 | 0,1 | V | 1 |
| ITGEE | 0x4603 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur Generator 1 | TCHIP | - | signed integer | - | 0 | 0,1 | °C | 1 |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generator Strom | I_GEN | - | unsigned char | - | 0 | 1 | A manuell | 1 |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator 1 | BSDGENCV | - | unsigned char | - | 0 | 1 | - | 1 |
| VGENR | 0x4606 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion Generator 1 | BSDGENREGV | - | unsigned char | - | 0 | 1 | - | 1 |
| VGENH | 0x4607 | STAT_GENERATOR_HERSTELLERCODE_WERT | Herstellercode Generator 1 | GEN_MANUFAK | - | unsigned char | - | 0 | 1 | - | 1 |
| VGTYP | 0x4608 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp Generator 1 | GEN_TYPKENN | - | unsigned char | - | 0 | 1 | - | 1 |
| IUK87 | 0x4609 | STAT_KL87_SPANNUNG_WERT | Kl.87 Spannung / Versorgung DME | VB | - | unsigned char | - | 0 | 0,101562493 | V | 1 |
| IUBAT | 0x460A | STAT_UBATT_WERT | Batteriespannung aktuell | UBT | - | unsigned integer | - | 0 | 0,015 | V | 1 |
| IUIBS | 0x460B | STAT_UBATT_IBS_WERT | Batteriespannung von IBS gemessen | U_BATT | - | unsigned integer | - | 6 | 2,50E-04 | V manuell | 1 |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung vom AD-Wandler DME | VB_BAS | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| - | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | ABSCH_KORR | - | signed integer | - | 0 | 0,001525879 | - | 1 |
| - | 0x460E | STAT_0x460E_WERT | Abstand zur Startfähigkeitsgrenze | D_SOC | - | signed integer | - | 0 | 0,003051758 | - | 1 |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | Batterielast | LOAD_BAT | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IPDIS | 0x4610 | STAT_DISAKLAPPEN_POSITION_WERT | aktuelle Position Disaklappen | VIM_AV | - | unsigned integer | - | 0 | 0,003051757 | % | 1 |
| STELU | 0x4611 | STAT_E_LUEFTER_PWM_SOLL_WERT | Sollwert E-Lüfter als PWM Wert | N_PERC_ECF | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x4612 | STAT_0x4612_WERT | Erregerstrom Generator 1 | IERR | - | unsigned char | - | 0 | 0,125 | A | 1 |
| - | 0x4613 | STAT_0x4613_WERT | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | U_FGEN | - | unsigned integer | - | 0 | 0,100000001 | V | 1 |
| - | 0x4614 | STAT_0x4614_WERT | Auslastungsgrad Generator 1 | DFSIGGEN | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x4615 | STAT_0x4615_WERT | Kopie begrenzter Erregerstrom Generator 1 | IERRFGRENZ | - | unsigned char | - | 0 | 0,125 | A | 1 |
| - | 0x4616 | STAT_0x4616_WERT | Kopie Generator 1 LR Vorgabe auf Bus gelegt | TLRFGEN | - | unsigned char | - | 0 | 0,100000001 | s | 1 |
| - | 0x4617 | STAT_0x4617_WERT | gefiltertes Generatormoment absolut Ausgang | MD_GENNM | - | signed integer | - | 0 | 0,100000001 | Nm | 1 |
| - | 0x4618 | STAT_0x4618_WERT | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | B_LRFOFF | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Status Lambdasonde betriebsbereit Vorkat Bank 1 | LV_INH_LSCL[1] | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISBV2 | 0x4701 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK2 | Status Lambdasonde betriebsbereit Vorkat Bank 2 | LV_INH_LSCL[2] | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Spannung Lambdasonde Vorkat Bank 1 mit Offsetkorrektur | VLS_COR_LSL[1] | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUSO2 | 0x4703 | STAT_SONDENSPANNUNG_VORKAT_BANK2_MIT_OFFSET_WERT | Spannung Lambdasonde Vorkat Bank 2 mit Offsetkorrektur | VLS_COR_LSL[2] | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambda Sollwert Bank 1 | LAMB_BAS[1] | - | unsigned integer | - | 0 | 9,77E-04 | - | 1 |
| SINT2 | 0x4705 | STAT_LAMBDA_BANK2_SOLL_WERT | Lambda Sollwert Bank 2 | LAMB_BAS[2] | - | unsigned integer | - | 0 | 9,77E-04 | - | 1 |
| ISKUB | 0x4800 | STAT_KUPPLUNGSSCHALTER_BETAETIGT_WERT | Kupplungsschalter Status | LV_CS | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISKUV | 0x4801 | STAT_KUPPLUNGSSCHALTER_VORHANDEN_WERT | Kupplungsschalter vorhanden | LV_CS_CUS | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISSPO | 0x4802 | STAT_SPORTTASTER_BETAETIGT_WERT | Sporttaster aktiv | LV_SOF_SWI | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISKLI | 0x4803 | STAT_KLIMA_EIN | Status Klima ein | STATE_ACIN_CAN | - | unsigned char | - | 0 | 1 | - | 1 |
| ISSLP | 0x4804 | STAT_SEKUNDAERLUFTPUMPE_WERT | Sekundärluft Pumpe aktiv | LV_SAP | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISSRC | 0x4805 | STAT_STARTRELAIS_UEBER_CAN_WERT | Startrelais über CAN aktiv | LV_RLY_ST_CAN | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| - | 0x4806 | STAT_0x4806_WERT | Steuergeraete-Innentemperatur | TECU | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| INMOT | 0x4807 | STAT_MOTORDREHZAHL_WERT | Motor Drehzahl | N | - | unsigned integer | - | 0 | 1 | rpm | 1 |
| SNLLD | 0x4808 | STAT_LEERLAUFDREHZAHL_SOLL_WERT | Leerlauf Solldrehzahl | N_SP_IS | - | unsigned integer | - | 0 | 1 | rpm | 1 |
| ISLLA | 0x4809 | STAT_LEERLAUF_AKTIV | Status LL | LV_IS | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISKME | 0x480A | STAT_KILOMETERSTAND_WERT | Kilometerstand Auflösung 1 km | CTR_KM_BN | - | unsigned long | - | 0 | 1 | km | 1 |
| IFPWG | 0x480B | STAT_FAHRERWUNSCH_PEDAL_WERT | Pedalwert Fahrerwunsch in % | PV_AV | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IUPV1 | 0x5A00 | STAT_PWG1_VERSORGUNGSSPANNUNG_WERT | Versorgung FWG 1 | VCC_PVS_1 | - | unsigned integer | - | 0 | 0,009765591 | V | 1 |
| IUPV2 | 0x5A01 | STAT_PWG2_VERSORGUNGSSPANNUNG_WERT | Versorgung FWG 2 | VCC_PVS_2 | - | unsigned integer | - | 0 | 0,009765591 | V | 1 |
| RUVVV | 0x5A02 | STAT_VVT_VERSORGUNGSSPANNUNG_ROH_WERT | Versorgung VVT Rohwert | V_VCC_SENS_VVL_RAW | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUVVV | 0x5A03 | STAT_VVT_VERSORGUNGSSPANNUNG_WERT | Versorgung VVT | V_VCC_SENS_VVL | - | unsigned integer | - | 0 | 0,0078125 | V | 1 |
| IUPW1 | 0x5A04 | STAT_PWG1_SPANNUNG_WERT | Spannung Pedalwertgeber 1 | V_PVS_1 | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUPW2 | 0x5A05 | STAT_PWG2_SPANNUNG_WERT | Spannung Pedalwertgeber 2 | V_PVS_2 | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUDK1 | 0x5A06 | STAT_DK1_SPANNUNG_WERT | Spannung Drosselklappe Poti 1 | V_TPS_1 | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUDK2 | 0x5A07 | STAT_DK2_SPANNUNG_WERT | Spannung Drosselklappe Poti 2 | V_TPS_2 | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUANS | 0x5A08 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannung Ansauglufttemperatur | V_TIA | - | unsigned char | - | 0 | 0,0196 | V manuell | 1 |
| IUKUM | 0x5A09 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Spannung Motortemperatur | V_TCO | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUKUA | 0x5A0A | STAT_KUEHLERAUSLASSTEMPERATUR_SPANNUNG_WERT | Spannung Kühlmitteltemperatur Kühlerausgang | V_TCO_2 | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUUMG | 0x5A0B | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung DME Umgebungsdruck | V_AMP | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IULMM | 0x5A0C | STAT_LUFTMASSE_SPANNUNG_WERT | Spannung Luftmasse | V_MAF | - | unsigned char | - | 0 | 0,0196 | V | 1 |
| IUSLS | 0x5A0D | STAT_SEKUNDAERLUFT_SPANNUNG_WERT | Spannung Sekundärluft | V_SAF | - | unsigned char | - | 0 | 0,0196 | V | 1 |
| IUSGI | 0x5A0E | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Spannung SG-Innentemperatur | V_TECU | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| - | 0x5A0F | STAT_0x5A0F_WERT | Spannung Kl.15 | V_IGK_BAS | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUK15 | 0x5A10 | STAT_KL15_SPANNUNG_WERT | Spannung Kl15 | V_IGK_MES | - | unsigned integer | - | 0 | 0,028060116 | V | 1 |
| IUSV1 | 0x5A11 | STAT_SONDENSPANNUNG_VORKAT_BANK1_WERT | Spannung Lambdasonde vor Kat 1 | VLS_UP[1] | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUSV2 | 0x5A12 | STAT_SONDENSPANNUNG_VORKAT_BANK2_WERT | Spannung Lambdasonde vor Kat 2 | VLS_UP[2] | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUSN1 | 0x5A13 | STAT_SONDENSPANNUNG_NACHKAT_BANK1_WERT | Spannung Lambdasonde hinter Kat 1 | VLS_DOWN[1] | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUSN2 | 0x5A14 | STAT_SONDENSPANNUNG_NACHKAT_BANK2_WERT | Spannung Lambdasonde hinter Kat 2 | VLS_DOWN[2] | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUDMT | 0x5A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Strommessung DMTL | V_DMTL | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| ITKUA | 0x5A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur Kühlerausgang | TCO_2_MES | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| ITSGI | 0x5A22 | STAT_STEUERGERAETE_INNENTEMPERATUR_WERT | Steuergerät Innentemperatur | TECU | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| SWDKL | 0x5A24 | STAT_DK_WINKEL_SOLL_WERT | Drosselklappe Sollwert | TPS_SP | - | unsigned integer | - | 0 | 0,007294146 | °TPS | 1 |
| IPUMG | 0x5A26 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | MAP | - | unsigned integer | - | 0 | 0,082917526 | hPa | 1 |
| IPPW1 | 0x5A27 | STAT_PWG1_WERT | Pedalwertgeber Poti 1 | PV_AV_1 | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IPPW2 | 0x5A28 | STAT_PWG2_WERT | Pedalwertgeber Poti 2 | PV_AV_2 | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| RFPWG | 0x5A29 | STAT_FAHRERWUNSCH_PEDAL_ROH_WERT | Fahrpedalwert | PV_AV_RAW | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| ILMSL | 0x5A2A | STAT_LUFTMASSE_SEKUNDAERLUFT_WERT | Luftmasse Sekundärluft | SAF_KGH_MES_BAS | - | unsigned integer | - | 0 | 0,015625 | kg/h | 1 |
| ILUZ1 | 0x5A30 | STAT_LAUFUNRUHE_ZYL1_WERT | Laufunruhe Zylinder 1 | ER_CYL[0] | - | signed integer | - | 0 | 1 | µs | 1 |
| ILUZ2 | 0x5A31 | STAT_LAUFUNRUHE_ZYL2_WERT | Laufunruhe Zylinder 2 | ER_CYL[4] | - | signed integer | - | 0 | 1 | µs | 1 |
| ILUZ3 | 0x5A32 | STAT_LAUFUNRUHE_ZYL3_WERT | Laufunruhe Zylinder 3 | ER_CYL[2] | - | signed integer | - | 0 | 1 | µs | 1 |
| ILUZ4 | 0x5A33 | STAT_LAUFUNRUHE_ZYL4_WERT | Laufunruhe Zylinder 4 | ER_CYL[5] | - | signed integer | - | 0 | 1 | µs | 1 |
| ILUZ5 | 0x5A34 | STAT_LAUFUNRUHE_ZYL5_WERT | Laufunruhe Zylinder 5 | ER_CYL[1] | - | signed integer | - | 0 | 1 | µs | 1 |
| ILUZ6 | 0x5A35 | STAT_LAUFUNRUHE_ZYL6_WERT | Laufunruhe Zylinder 6 | ER_CYL[3] | - | signed integer | - | 0 | 1 | µs | 1 |
| ISKLO | 0x5A36 | STAT_STATUS_KLOPFEN_WERT | Status Klopfen | LV_KNK | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| IUKZ1 | 0x5A37 | STAT_KLOPFWERT_ZYL1_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 1 | NL[0] | - | unsigned integer | - | 0 | 7,63E-05 | V | 1 |
| IUKZ2 | 0x5A38 | STAT_KLOPFWERT_ZYL2_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 2 | NL[4] | - | unsigned integer | - | 0 | 7,63E-05 | V | 1 |
| IUKZ3 | 0x5A39 | STAT_KLOPFWERT_ZYL3_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 3 | NL[2] | - | unsigned integer | - | 0 | 7,63E-05 | V | 1 |
| IUKZ4 | 0x5A3A | STAT_KLOPFWERT_ZYL4_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 4 | NL[5] | - | unsigned integer | - | 0 | 7,63E-05 | V | 1 |
| IUKZ5 | 0x5A3B | STAT_KLOPFWERT_ZYL5_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 5 | NL[1] | - | unsigned integer | - | 0 | 7,63E-05 | V | 1 |
| IUKZ6 | 0x5A3C | STAT_KLOPFWERT_ZYL6_SPANNUNG_WERT | Spannung Klopfwerte Zylinder 6 | NL[3] | - | unsigned integer | - | 0 | 7,63E-05 | V | 1 |
| IKSZ1 | 0x5A3D | STAT_KLOPFSIGNAL_ZYL1_WERT | Klopfsignal Zylinder 1 | KNKS[0] | - | unsigned integer | - | 0 | 7,63E-05 | V | 1 |
| IKRZ1 | 0x5A3E | STAT_KLOPFSIGNAL_ZYL1_RELATIV_WERT | Klopfsignal Zylinder 1 relativ | KNKS_REL_NL_0 | - | unsigned integer | - | 0 | 1,53E-05 | - | 1 |
| IKSZ6 | 0x5A3F | STAT_KLOPFSIGNAL_ZYL6_WERT | Klopfsignal Zylinder 6 | KNKS[5] | - | unsigned integer | - | 0 | 7,63E-05 | V | 1 |
| IKRZ6 | 0x5A40 | STAT_KLOPFSIGNAL_ZYL6_RELATIV_WERT | Klopfsignal Zylinder 6 relativ | KNKS_REL_NL_5 | - | unsigned integer | - | 0 | 1,53E-05 | - | 1 |
| IZEZ1 | 0x5A42 | STAT_EINSPRITZZEIT_ZYL1_WERT | Einspritzzeit Zylinder 1 | ti_1_0 | - | unsigned integer | - | 0 | 0,004 | ms | 1 |
| IZEZ2 | 0x5A43 | STAT_EINSPRITZZEIT_ZYL2_WERT | Einspritzzeit Zylinder 2 | ti_1_4 | - | unsigned integer | - | 0 | 0,004 | ms | 1 |
| IZEZ3 | 0x5A44 | STAT_EINSPRITZZEIT_ZYL3_WERT | Einspritzzeit Zylinder 3 | ti_1_2 | - | unsigned integer | - | 0 | 0,004 | ms | 1 |
| IZEZ4 | 0x5A45 | STAT_EINSPRITZZEIT_ZYL4_WERT | Einspritzzeit Zylinder 4 | ti_1_5 | - | unsigned integer | - | 0 | 0,004 | ms | 1 |
| IZEZ5 | 0x5A46 | STAT_EINSPRITZZEIT_ZYL5_WERT | Einspritzzeit Zylinder 5 | ti_1_1 | - | unsigned integer | - | 0 | 0,004 | ms | 1 |
| IZEZ6 | 0x5A47 | STAT_EINSPRITZZEIT_ZYL6_WERT | Einspritzzeit Zylinder 6 | ti_1_3 | - | unsigned integer | - | 0 | 0,004 | ms | 1 |
| IZWZ1 | 0x5A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Zündwinkel Zylinder 1 | IGA_IGC[0] | - | unsigned char | - | -35,625 | 0,375 | °CRK | 1 |
| ILASB | 0x5A4B | STAT_BERECHNETE_LAST_WERT | Berechneter Lastwert | LOAD_CLC | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| ISACR | 0x5A4E | STAT_KLIMAKOMPRESSORRELAIS_EIN | Klimakompressorrelais Ein | LV_ACCOUT_RLY | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISVVR | 0x5A4F | STAT_VVT_ENTLASTUNGSRELAIS_EIN_WERT | VVT- Entlastungsrelais Ein | LV_STATE_RLY_VVL | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ILAB1 | 0x5A50 | STAT_LAMBDA_BANK1_WERT | Lambdawert vor Kat Bank 1 | LAMB_LS_UP[1] | - | unsigned integer | - | 0 | 9,77E-04 | - | 1 |
| ILAB2 | 0x5A51 | STAT_LAMBDA_BANK2_WERT | Lambdawert vor Kat Bank 2 | LAMB_LS_UP[2] | - | unsigned integer | - | 0 | 9,77E-04 | - | 1 |
| IRNK1 | 0x5A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Status LS nach Kat Bank 1 | LV_LS_DOWN_READY[1] | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| IRNK2 | 0x5A53 | STAT_READINESS_SONDE_NACHKAT_BANK2_WERT | Status LS nach Kat Bank 2 | LV_LS_DOWN_READY[2] | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISHN1 | 0x5A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Status LS Heizung nach Kat Bank 1 | STATE_LSH_DOWN[1] | - | 0xFF | _CNV_S_7_EGCP_RANGE_710 | 0 | 1 | 0-n | 1 |
| ISHN2 | 0x5A55 | STAT_SONDENHEIZUNG_NACHKAT_BANK2_WERT | Status LS Heizung nach Kat Bank 2 | STATE_LSH_DOWN[2] | - | 0xFF | _CNV_S_7_EGCP_RANGE_710 | 0 | 1 | 0-n | 1 |
| ISHV1 | 0x5A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Status LS Heizung vor Kat Bank 1 | STATE_LSH_UP[1] | - | 0xFF | _CNV_S_7_EGCP_RANGE_710 | 0 | 1 | 0-n | 1 |
| ISHV2 | 0x5A57 | STAT_SONDENHEIZUNG_VORKAT_BANK2_WERT | Status LS Heizung vor Kat Bank 2 | STATE_LSH_UP[2] | - | 0xFF | _CNV_S_7_EGCP_RANGE_710 | 0 | 1 | 0-n | 1 |
| IAHV1 | 0x5A58 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Lambdasondenheizung PWM vor Kat Bank 1 | LSHPWM_UP[1] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IAHN1 | 0x5A59 | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | Lambdasondenheizung PWM nach Kat Bank 1 | LSHPWM_DOWN[1] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IAHV2 | 0x5A5A | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK2_WERT | Lambdasondenheizung PWM vor Kat Bank 2 | LSHPWM_UP[2] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IAHN2 | 0x5A5B | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK2_WERT | Lambdasondenheizung PWM nach Kat Bank 2 | LSHPWM_DOWN[2] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| ISBLS | 0x5A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bremslichtschalter Ein | LV_IM_BLS | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISBLT | 0x5A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bremslichttestschalter Ein | LV_IM_BTS | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISOED | 0x5A62 | STAT_OELDRUCKSCHALTER_EIN_WERT | Öldruckschalter Ein | LV_POIL_SWI | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISEBO | 0x5A63 | STAT_E_BOXLUEFTER_EIN_WERT | E-Boxlüfter Ein | LV_EBOX_CFA | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| - | 0x5A64 | STAT_0x5A64_WERT | Kühlerjalousie | LV_ECRAS | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISAGK | 0x5A65 | STAT_ABGASKLAPPE_EIN_WERT | Abgasklappe Ein | LV_EF | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISDMP | 0x5A66 | STAT_DMTL_PUMPE_EIN_WERT | DMTL Pumpe Ein | LV_DMTL_PUMP | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISDMV | 0x5A67 | STAT_DMTL_VENTIL_EIN_WERT | DMTL Ventil Ein | LV_DMTLS | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISDMH | 0x5A68 | STAT_DMTL_HEIZUNG_EIN_WERT | DMTL Heizung Ein | LV_HDMTL_ON | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISMIL | 0x5A69 | STAT_MIL_EIN_WERT | MIL Lampe Ein | LV_MIL_CAN | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISFGL | 0x5A6A | STAT_LAMPE_FGR_EIN_WERT | Lampe FGR Ein | LV_CRU_MAIN_SWI | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISCEL | 0x5A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Lampe Check Engine Ein | LV_WAL_1_CAN | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| ISTFG | 0x5A6D | STAT_TASTE_FGR_EIN_WERT | Status Taste FGR | STATE_MSW_CAN | - | 0xFF | _CNV_S_8_RANGE_STAT_19 | 0 | 1 | 0-n | 1 |
| IASOU | 0x5A70 | STAT_SOUNDKLAPPE_PWM_WERT | Soundklappe Zustand | LV_SOF | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| IADS1 | 0x5A71 | STAT_DISA1_PWM_WERT | DISA1 PWM (große/obere Klappe) | VIMPWM_1 | - | signed integer | - | 0 | 0,003051758 | % | 1 |
| IADS2 | 0x5A72 | STAT_DISA2_PWM_WERT | DISA2 PWM (kleine/untere Klappe) | VIMPWM_2 | - | signed integer | - | 0 | 0,003051758 | % | 1 |
| - | 0x5A73 | STAT_0x5A73_WERT | Kurbelgehäuseentlüftungsheizung | LV_RLY_CRCV_HEAT | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| IAKFT | 0x5A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Beheizter Thermostat PWM | ECTPWM | - | unsigned integer | - | 0 | 0,001525879 | % | 1 |
| IASEV | 0x5A75 | STAT_SEKUNDAERLUFT_VENTIL_PWM_WERT | Sekundärluft Ventil | LV_SAV | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| - | 0x5A76 | STAT_0x5A76_WERT | Adaption Öffnungspunkt Tankentlüftungsventil | CPPWM_ADD_AD_MEM | - | unsigned integer | - | 0 | 0,001525879 | % | 1 |
| IATEV | 0x5A77 | STAT_TEV_PWM_WERT | TankEntlüftungsVentil TEV PWM | CPPWM_CPS | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IAAGK | 0x5A78 | STAT_ABGASKLAPPE_ANSTEUERUNG_WERT | Abgasklappe Ansteuerung | LV_EF | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| IAELUE | 0x5A79 | STAT_E_LUEFTER_PWM_WERT | E-Lüfter PWM | ECFPWM[0] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IAVEP | 0x5A7A | STAT_VANOS_EINLASS_PWM_WERT | VANOS PWM Wert Einlass | IVVTPWM_0 | - | unsigned integer | - | 0 | 0,001525879 | % | 1 |
| IAVAP | 0x5A7B | STAT_VANOS_AUSLASS_PWM_WERT | VANOS PWM Wert Auslass | IVVTPWM_1 | - | unsigned integer | - | 0 | 0,001525879 | % | 1 |
| IINT1 | 0x5A81 | STAT_INTEGRATOR_BANK1_WERT | Integrator Bank 1 | FAC_LAM_LIM[1] | - | signed integer | - | 0 | 0,001525879 | % | 1 |
| IINT2 | 0x5A82 | STAT_INTEGRATOR_BANK2_WERT | Integrator Bank 2 | FAC_LAM_LIM[2] | - | signed integer | - | 0 | 0,001525879 | % | 1 |
| IADD1 | 0x5A83 | STAT_ADAPTION_ADDITIV_BANK1_WERT | Adaption Offset Lambda Bank 1 | MFF_ADD_LAM_AD_OUT[1] | - | signed integer | - | 0 | 0,02119478 | mg/stk | 1 |
| IADD2 | 0x5A84 | STAT_ADAPTION_ADDITIV_BANK2_WERT | Adaption Offset Lambda Bank 2 | MFF_ADD_LAM_AD_OUT[2] | - | signed integer | - | 0 | 0,02119478 | mg/stk | 1 |
| IMUL1 | 0x5A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | Adaption Multiplikation Lambda Bank 1 | FAC_LAM_AD_OUT[1] | - | signed integer | - | 0 | 0,001525879 | % | 1 |
| IMUL2 | 0x5A86 | STAT_ADAPTION_MULTIPLIKATIV_BANK2_WERT | Adaption Multiplikation Lambda Bank 2 | FAC_LAM_AD_OUT[2] | - | signed integer | - | 0 | 0,001525879 | % | 1 |
| - | 0x5A87 | STAT_0x5A87_WERT | Adaptionswert Trimregelung Bank 1 | LAMB_DELTA_AD_LAM_ADJ[1] | - | signed integer | - | 0 | 6,103515625E-5 | - | 1 |
| - | 0x5A88 | STAT_0x5A88_WERT | Adaptionswert Trimregelung Bank 2 | LAMB_DELTA_AD_LAM_ADJ[2] | - | signed integer | - | 0 | 6,103515625E-5 | - | 1 |
| - | 0x5A89 | STAT_0x5A89_WERT | multiplikative Gemischadaption hohe Last Bank 1 | FAC_H_RNG_LAM_AD[1] | - | signed integer | - | 0 | 0,001525879 | % | 1 |
| - | 0x5A8A | STAT_0x5A8A_WERT | multiplikative Gemischadaption hohe Last Bank 2 | FAC_H_RNG_LAM_AD[2] | - | signed integer | - | 0 | 0,001525879 | % | 1 |
| - | 0x5A8B | STAT_0x5A8B_WERT | multiplikative Gemischadaption niedrige Last Bank 1 | FAC_L_RNG_LAM_AD[1] | - | signed integer | - | 0 | 0,001525879 | % | 1 |
| - | 0x5A8C | STAT_0x5A8C_WERT | multiplikative Gemischadaption niedrige Last Bank 2 | FAC_L_RNG_LAM_AD[2] | - | signed integer | - | 0 | 0,001525879 | % | 1 |
| - | 0x5A8D | STAT_0x5A8D_WERT | additive Gemischadaption Leerlauf Bank 1 | MFF_ADD_LAM_AD[1] | - | signed integer | - | 0 | 0,0211947802454233 | mg/stk | 1 |
| - | 0x5A8E | STAT_0x5A8E_WERT | additive Gemischadaption Leerlauf Bank 2 | MFF_ADD_LAM_AD[2] | - | signed integer | - | 0 | 0,0211947802454233 | mg/stk | 1 |
| - | 0x5A91 | STAT_0x5A91_WERT | Katalysatordiagnosewert Bank 1 | CAT_DIAG_1 | - | unsigned char | - | 0,0 | 0,015625 | - | 1 |
| - | 0x5A92 | STAT_0x5A92_WERT | Katalysatordiagnosewert Bank 2 | CAT_DIAG_2 | - | unsigned char | - | 0,0 | 0,015625 | - | 1 |
| SANWA | 0x5A94 | STAT_NW_AUSLASS_SOLL_WERT | Nockenwelle Auslass Sollwert | CAM_SP_IVVT_EX | - | unsigned char | - | -40 | -0,375 | °CRK | 1 |
| IGEADA | 0x5A95 | STAT_GEBERRAD_ADAPTION_VSA_WERT | Adaptionswert Nockenwelle Auslaß | PSN_AD_CAM_EX_1 | - | unsigned char | - | -48 | 0,375 | °CRK | 1 |
| IGEADE | 0x5A96 | STAT_GEBERRAD_ADAPTION_VSE_WERT | Adaptionswert Nockenwelle Einlaß | PSN_AD_CAM_IN_1 | - | unsigned char | - | -48 | 0,375 | °CRK | 1 |
| - | 0x5A97 | STAT_0x5A92_WERT | Bedingung EVANOS im Anschlag beim letzten Abstellen | B_VSEAN_LOC | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| IAKWF | 0x5A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Kurbelwellen Adaption beendet | LV_SEG_AD_AVL_ER | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| IDSLS | 0x5AA1 | STAT_SLS_DIAGNOSE_WERT | Status Diagnose TEV | STATE_EOL_KWP_CPS | - | 0xFF | _CNV_S_10_STATE_EOL__354 | 0 | 1 | 0-n | 1 |
| IDTEV | 0x5AA2 | STAT_TEV_DIAGNOSE_WERT | Status Diagnose DMTL | STATE_EOL_KWP_DMTL | - | 0xFF | _CNV_S_10_STATE_EOL__354 | 0 | 1 | 0-n | 1 |
| IDDMT | 0x5AA3 | STAT_DMTL_DIAGNOSE_WERT | Status Diagnose Lambdasonden | STATE_EOL_KWP_VLS | - | 0xFF | _CNV_S_10_STATE_EOL__354 | 0 | 1 | 0-n | 1 |
| IDLSS | 0x5AA4 | STAT_LS_DIAGNOSE_WERT | Status Diagnose Leerlaufdrehzahlverstellung | STATE_EOL_KWP_N_SP_IS | - | 0xFF | _CNV_S_10_STATE_EOL__354 | 0 | 1 | 0-n | 1 |
| - | 0x5AA5 | STAT_0x5AA5_WERT | Status Diagnose Sekundärluft | STATE_EOL_KWP_SA | - | 0xFF | _CNV_S_10_STATE_EOL__354 | 0 | 1 | 0-n | 1 |
| - | 0x5AA6 | STAT_0x5AA6_WERT | Status Diagnose VVT Anschläge lernen | STATE_EOL_KWP_VVL_AD | - | 0xFF | _CNV_S_10_STATE_EOL__354 | 0 | 1 | 0-n | 1 |
| IVKMH | 0x5AB1 | STAT_GESCHWINDIGKEIT_WERT | Geschwindigkeit | VS | - | unsigned char | - | 0 | 1 | km/h | 1 |
| IWMIL | 0x5AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Fahrstrecke mit MIL an | DIST_ACT_MIL | - | unsigned integer | - | 0 | 1 | km | 1 |
| IZBST | 0x5AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler | TRT | - | unsigned long | - | 0 | 2,78E-05 | h | 1 |
| IVSLP | 0x5AB5 | STAT_VARIANTE_SEKUNDAERLUFTPUMPE_WERT | Variante Sekundärluftpumpe | LV_VAR_SAP | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| RTANS | 0x5AB6 | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Rohwert Ansauglufttemperatur 1 | TIA_MES | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| RTKWA | 0x5AB7 | STAT_KUEHLWASSERTEMPERATUR_ROH_WERT | Rohwert Kühlwassertemperatur | TCO_MES | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| IUSAU | 0x5AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Saugrohrdruck | V_MAP | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IUSST | 0x5AB9 | STAT_SPORTSCHALTER_SPANNUNG_WERT | Spannung Sportschalter | V_SOF_SWI | - | unsigned integer | - | 0 | 0,004882813 | V | 1 |
| IAKSP | 0x5ABA | STAT_KRAFTSTOFFPUMPE_PWM_WERT | PWM Kraftstoffpumpe | EFPPWM | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IWVVW | 0x5ABB | STAT_VVT_WINKEL_AUSWAHL_WERT | Ausgewählter VVT Istwinkel | ANG_REL_VVL | - | unsigned integer | - | 0 | 0,012207031 | % | 1 |
| IMLUF | 0x5ABC | STAT_LUFTMASSE_WERT | Luftmasse | MAF_KGH_MES_BAS | - | unsigned integer | - | 0 | 0,03125 | kg/h | 1 |
| IASRE | 0x5ABD | STAT_STARTRELAIS_AKTIV_WERT | Starterrelais aktiv | LV_RLY_ST | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| - | 0x5AC0 | STAT_0x5AC0_WERT | Reset Status Hardware-Register | RST_HW_STATUS | - | unsigned integer | - | 0 | 1 | - | 1 |
| - | 0x5AC1 | STAT_0x5AC1_WERT | Reset Status Software-Register | RST_SW_STATUS | - | unsigned long | - | 0 | 1 | - | 1 |
| - | 0x5AC2 | STAT_0x5AC2_WERT | Reset Adresse | RST_LPRC_RESET_ADDRESS | - | unsigned long | - | 0 | 1 | - | 1 |
| - | 0x5AC3 | STAT_0x5AC3_WERT | Fehler Segmentzähler | CTR_ENG_PSN_CHK_ERR | - | unsigned integer | - | 0,0 | 1,0 | - | 1 |
| - | 0x5AE0 | STAT_0x5AE0_WERT | TM_1 | TMOT_B1 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AE1 | STAT_0x5AE1_WERT | TM_2 | TMOT_B2 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AE2 | STAT_0x5AE2_WERT | TM_3 | TMOT_B3 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AE3 | STAT_0x5AE3_WERT | TM_4 | TMOT_B4 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AE4 | STAT_0x5AE4_WERT | TM_5 | TMOT_B5 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AE5 | STAT_0x5AE5_WERT | TO_1 | TOEL_B1 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AE6 | STAT_0x5AE6_WERT | TO_2 | TOEL_B2 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AE7 | STAT_0x5AE7_WERT | TO_3 | TOEL_B3 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AE8 | STAT_0x5AE8_WERT | TO_4 | TOEL_B4 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AE9 | STAT_0x5AE9_WERT | TO_5 | TOEL_B5 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AEA | STAT_0x5AEA_WERT | TG_1 | TGET_B1 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AEB | STAT_0x5AEB_WERT | TG_2 | TGET_B2 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AEC | STAT_0x5AEC_WERT | TG_3 | TGET_B3 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AED | STAT_0x5AED_WERT | TG_4 | TGET_B4 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AEE | STAT_0x5AEE_WERT | TG_5 | TGET_B5 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AEF | STAT_0x5AEF_WERT | TU_1 | TUMG_B1 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AF0 | STAT_0x5AF0_WERT | TU_2 | TUMG_B2 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AF1 | STAT_0x5AF1_WERT | TU_3 | TUMG_B3 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AF2 | STAT_0x5AF2_WERT | TU_4 | TUMG_B4 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5AF3 | STAT_0x5AF3_WERT | TU_5 | TUMG_B5 | - | unsigned integer | - | 0,0 | 0,00152587890625 | % | 1 |
| - | 0x5800 | STAT_0x5800_WERT | Zeit nach Start | OBD_T_AST | - | unsigned char | - | 0 | 256 | s | 1 |
| - | 0x5801 | STAT_0x5801_WERT | Umgebungsdruck | OBD_AMP | - | unsigned char | - | 0 | 1 | kPa | 1 |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | Zustand Lambdaregelung Bank 1 | STATE_LS[1] | - | 0xFF | _CNV_S_5_LACO_RANGE_765 | 0 | 1 | 0-n | 1 |
| ICLR2 | 0x5803 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK2_WERT | Zustand Lambdaregelung Bank 2 | STATE_LS[2] | - | 0xFF | _CNV_S_5_LACO_RANGE_765 | 0 | 1 | 0-n | 1 |
| SLAST | 0x5804 | STAT_LASTWERT_BERECHNET_WERT | Berechneter Lastwert | LOAD_CLC | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x5805 | STAT_0x5805_WERT | Kühlmitteltemperatur OBD | OBD_TCO | - | unsigned char | - | -40 | 1 | °C | 1 |
| ILIN1 | 0x5806 | STAT_LAMBDA_INTEGRATOR_GRUPPE1_WERT | Lambda Integrator Gruppe 1 | OBD_LAM_COR[1] | - | unsigned char | - | -100 | 0,78125 | % | 1 |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Lambda Adaption Summe mul. & add. Gruppe 1 | OBD_LAM_AD[1] | - | unsigned char | - | -100 | 0,78125 | % | 1 |
| ILIN2 | 0x5808 | STAT_LAMBDA_INTEGRATOR_GRUPPE2_WERT | Lambda Integrator Gruppe 2 | OBD_LAM_COR[2] | - | unsigned char | - | -100 | 0,78125 | % | 1 |
| ILAM2 | 0x5809 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE2_WERT | Lambda Adaption Summe mul. & add. Gruppe 2 | OBD_LAM_AD[2] | - | unsigned char | - | -100 | 0,78125 | % | 1 |
| IPKRS | 0x580A | STAT_KRAFTSTOFFDRUCK_WERT | Kraftstoffdruck | OBD_FUP | - | unsigned char | - | 0 | 3 | kPa | 1 |
| IPSA2 | 0x580B | STAT_SAUGROHRDRUCK_2_WERT | Saugrohrdruck | OBD_MAP | - | unsigned char | - | 0 | 1 | kPa | 1 |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Drehzahl | OBD_N | - | unsigned char | - | 0 | 64 | rpm | 1 |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Geschwindigkeit | VS | - | unsigned char | - | 0 | 1 | km/h | 1 |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündzeitpunkt Zylinder 1 | OBD_IGA_IGC | - | unsigned char | - | -64 | 0,5 | °CRK | 1 |
| ITANL | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_LAW_WERT | Ansauglufttemperatur | OBD_TIA | - | unsigned char | - | -40 | 1 | °C | 1 |
| ILMGS | 0x5810 | STAT_LUFTMASSE_GRAMM_PRO_SEKUNDE_WERT | Luftdurchsatz OBD | OBD_MAF | - | unsigned char | - | 0 | 2,56 | g/s | 1 |
| INM32 | 0x5811 | STAT_MOTORDREHZAHL_N32_WERT | Motordrehzahl | N_32 | - | unsigned char | - | 0 | 32 | rpm | 1 |
| - | 0x5812 | STAT_0x5812_WERT | Luftmasse gemessen | MAF_KGH_MES_BAS | - | unsigned char | - | 0 | 8 | kg/h | 1 |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | Relative Last | RF | - | signed char | - | 0 | 2,56 | % | 1 |
| - | 0x5814 | STAT_0x5814_WERT | Fahrpedalwert | PV_AV_RAW | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x5815 | STAT_0x5815_WERT | Batteriespannung | OBD_VB | - | unsigned char | - | 0 | 0,256 | V | 1 |
| - | 0x5816 | STAT_0x5816_WERT | Lambda Setpoint | OBD_LAMB_SP | - | unsigned char | - | 0 | 0,0078125 | - | 1 |
| - | 0x5817 | STAT_0x5817_WERT | Umgebungstemperatur | OBD_TAM | - | unsigned char | - | -40 | 1 | °C | 1 |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmasse gerechnet | MAF | - | unsigned char | - | 0 | 5,425863743 | mg/stk | 1 |
| - | 0x5819 | STAT_0x5819_WERT | Drehzahl OBD Byte | N_SAE_BYTE_KWP | - | unsigned char | - | 0 | 64 | rpm | 1 |
| - | 0x581A | STAT_0x581A_WERT | Nockenwelle Einlass | CAM_IN_KWP | - | unsigned char | - | 50,0 | 0,400000005960464 | °CRK | 1 |
| - | 0x581B | STAT_0x581B_WERT | Nockenwelle Einlass Sollwert | CAM_SP_IVVT_IN_KWP | - | unsigned char | - | 50,0 | 0,400000005960464 | °CRK | 1 |
| - | 0x581C | STAT_0x581C_WERT | Nockenwelle Auslass | CAM_EX[1] | - | unsigned char | - | -40 | -0,375 | °CRK | 1 |
| - | 0x581D | STAT_0x581D_WERT | Nockenwelle Auslass Sollwert | CAM_SP_IVVT_EX | - | unsigned char | - | -40 | -0,375 | °CRK | 1 |
| - | 0x581E | STAT_0x581E_WERT | Ansauglufttemperatur | TIA_MES | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| - | 0x581F | STAT_0x581F_WERT | Motortemperatur | TCO_MES | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| - | 0x5820 | STAT_0x5820_WERT | Kühlmitteltemperatur Kühlerausgang | TCO_2_MES | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| - | 0x5821 | STAT_0x5821_WERT | Steuergerät Innentemperatur | TECU | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| - | 0x5822 | STAT_0x5822_WERT | ( Motor ) - Öltemperatur | TOIL_MES | - | unsigned char | - | -40 | 1 | °C | 1 |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Zeit Motor steht | T_ES | - | unsigned char | - | 0 | 256 | min | 1 |
| - | 0x5824 | STAT_0x5824_WERT | Umgebungstemperatur | TAM | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| - | 0x5825 | STAT_0x5825_WERT | Abstellzeit | T_ES_CUS_KWP | - | unsigned char | - | 0 | 4 | min | 1 |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappe Sensor 1 | TPS_AV_1 | - | unsigned char | - | 0 | 1,867301464 | °TPS | 1 |
| - | 0x5827 | STAT_0x5827_WERT | Lambdasonden Heizung Vorkat 1 | LSHPWM_UP[1] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x5828 | STAT_0x5828_WERT | Lambdasonden Heizung Vorkat 2 | LSHPWM_UP[2] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x5829 | STAT_0x5829_WERT | Lambdasonden Heizung Hinterkat 1 | LSHPWM_DOWN[1] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x582A | STAT_0x582A_WERT | Lambdasonden Heizung Hinterkat 2 | LSHPWM_DOWN[2] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IDRCA | 0x582B | STAT_DREHMOMENTEINGRIFF_CAN_WERT | Drehmomenteingriff über CAN | STATE_TQ_CAN_PLAUS | - | unsigned char | - | 0 | 1 | - | 1 |
| - | 0x582C | STAT_0x582C_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Kat Bank 1 | CTR_ERR_LSL_IF_SPI_WR[1] | - | unsigned char | - | 0 | 1 | - | 1 |
| - | 0x582D | STAT_0x582D_WERT | Anzahl ungültiger Schreibüberprüfungszyklen am SPI-Interface der Lambdasonde vor Kat Bank 2 | CTR_ERR_LSL_IF_SPI_WR[2] | - | unsigned char | - | 0 | 1 | - | 1 |
| - | 0x582E | STAT_0x582E_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Kat Bank 1 | FAC_DIAG_DYN_LSL_UP[1] | - | unsigned char | - | 0 | 0,25 | - | 1 |
| - | 0x582F | STAT_0x582F_WERT | Adaptionsfaktor Sensor Zeitkonstante vor Kat Bank 2 | FAC_DIAG_DYN_LSL_UP[2] | - | unsigned char | - | 0 | 0,25 | - | 1 |
| - | 0x5830 | STAT_0x5830_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Kat Bank 1 | FAC_MV_DIAG_DYN_LSL_UP[1] | - | unsigned char | - | 0 | 0,25 | - | 1 |
| - | 0x5831 | STAT_0x5831_WERT | Mittelwert der normierten Signalamplitude der Lambdasonde vor Kat Bank 2 | FAC_MV_DIAG_DYN_LSL_UP[2] | - | unsigned char | - | 0 | 0,25 | - | 1 |
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Motor Status | STATE_ENG | - | 0xFF | _CNV_S_6_RANGE_STAT_146 | 0 | 1 | 0-n | 1 |
| - | 0x5833 | STAT_0x5833_WERT | Umgebungstemperatur beim Start | TAM_ST | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| - | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck | AMP_MES | - | unsigned char | - | 0 | 21,22688675 | hPa | 1 |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | Drehzahlgradient | N_GRD | - | signed char | - | 0 | 32 | rpm/s | 1 |
| - | 0x5837 | STAT_0x5837_WERT | Status OBD-I Fehler vor Kat Bank 1 | STATE_ERR_EL_LSL_UP[1] | - | 0xFF | _CNV_S_11_EGCP_RANGE_728 | 0 | 1 | 0-n | 1 |
| - | 0x5838 | STAT_0x5838_WERT | Status OBD-I Fehler vor Kat Bank 2 | STATE_ERR_EL_LSL_UP[2] | - | 0xFF | _CNV_S_11_EGCP_RANGE_728 | 0 | 1 | 0-n | 1 |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Status Drosselklappe Notlauf | STATE_ETC_LIH | - | 0xFF | _CNV_S_6_RANGE_STAT_305 | 0 | 1 | 0-n | 1 |
| - | 0x583A | STAT_0x583A_WERT | Ansauglufttemperatur beim Start | TIA_ST | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Kraftstofftank Füllstand | FTL | - | unsigned char | - | 0 | 1 | l | 1 |
| - | 0x583C | STAT_0x583C_WERT | Spannung Kl. 87 | VB | - | unsigned char | - | 0 | 0,101562493 | V | 1 |
| - | 0x583D | STAT_0x583D_WERT | Reset: Quelle | RST_DET | - | unsigned char | - | 0 | 1 | - | 1 |
| - | 0x583E | STAT_0x583E_WERT | Motordrehzahl bei Reset | N_RST_DET | - | unsigned char | - | 0 | 256 | rpm | 1 |
| - | 0x583F | STAT_0x583F_WERT | Drosselklappe Sollwert | TPS_SP | - | unsigned char | - | 0 | 1,867301464 | °TPS | 1 |
| - | 0x5840 | STAT_0x5840_WERT | CPU Last bei Reset | CPU_LOAD_RST_DET | - | unsigned char | - | 0 | 25 | % | 1 |
| RTSGR | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_ROH_WERT | SG-Innentemperatur Rohwert | V_TECU_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5843 | STAT_0x5843_WERT | Versorgung FWG 1 | VCC_PVS_1_KWP | - | unsigned char | - | 0 | 0,039062504 | V | 1 |
| - | 0x5845 | STAT_0x5845_WERT | Spannung Lambdasonde VorKat 1 | VLS_UP_KWP[1] | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5846 | STAT_0x5846_WERT | Spannung Pedalwertgeber 1 | V_PVS_1_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5847 | STAT_0x5847_WERT | Spannung Pedalwertgeber 2 | V_PVS_2_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5848 | STAT_0x5848_WERT | Spannung Lambdasonde VorKat 2 | VLS_UP_KWP[2] | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5849 | STAT_0x5849_WERT | Spannung Lambdasonde HinterKat 1 | VLS_DOWN_KWP[1] | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| RUK15 | 0x584A | STAT_KL15_SPANNUNG_ROH_WERT | Spannung Kl. 15 Rohwert | V_IGK_BAS_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x584B | STAT_0x584B_WERT | Spannung Lambdasonde HinterKat 2 | VLS_DOWN_KWP[2] | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x584C | STAT_0x584C_WERT | Spannung Drosselklappe Poti 2 | V_TPS_2_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | korrigierter Sollwert Durchfluss Tankentlüftung | FLOW_COR_CPS | - | unsigned char | - | 0 | 0,03125 | kg/h | 1 |
| - | 0x584E | STAT_0x584E_WERT | Spannung Drosselklappe Poti 1 | V_TPS_1_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x584F | STAT_0x584F_WERT | Spannung Luftmasse | V_MAF | - | unsigned char | - | 0 | 0,0196 | V | 1 |
| - | 0x5850 | STAT_0x5850_WERT | Spannung Motortemperatur | V_TCO_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5851 | STAT_0x5851_WERT | Spannung Ansauglufttemperatur | V_TIA | - | unsigned char | - | 0 | 0,0196 | - | 1 |
| - | 0x5852 | STAT_0x5852_WERT | Kühlmitteltemperatur Kühlerausgang Rohwert | V_TCO_2_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5853 | STAT_0x5853_WERT | Spannung Kl.87 Rohwert | VB_BAS_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5854 | STAT_0x5854_WERT | Versorgung FWG 2 | VCC_PVS_2_KWP | - | unsigned char | - | 0 | 0,039062504 | V | 1 |
| - | 0x5855 | STAT_0x5855_WERT | Mittelwert Bank 1 | FAC_LAM_MV_MMV[1] | - | signed char | - | 0 | 0,390625 | % | 1 |
| - | 0x5856 | STAT_0x5856_WERT | Mittelwert Bank 2 | FAC_LAM_MV_MMV[2] | - | signed char | - | 0 | 0,390625 | % | 1 |
| - | 0x5858 | STAT_0x5858_WERT | Drosselklappe aktueller Wert | TPS_AV | - | unsigned char | - | 0 | 1,867301464 | °TPS | 1 |
| - | 0x5859 | STAT_0x5859_WERT | DMTL Strom Referenzleck | CUR_DMTL_REF_LEAK_KWP | - | unsigned char | - | 0 | 0,19531247 | mA | 1 |
| - | 0x585A | STAT_0x585A_WERT | DMTL Strom Grobleck | CUR_DMTL_ROUGH_LEAK_MIN_KWP | - | unsigned char | - | 0 | 0,19531247 | mA | 1 |
| - | 0x585B | STAT_0x585B_WERT | DMTL Strom Diagnoseende | CUR_DMTL_COR_FIL_KWP | - | unsigned char | - | 0 | 0,19531247 | mA | 1 |
| - | 0x585C | STAT_0x585C_WERT | Widerstand Lambdasonde NK 1 | R_IT_LS_DOWN_KWP_H[1] | - | unsigned char | - | 0 | 256 | ohm | 1 |
| IRLN2 | 0x585D | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_WERT | Widerstand Lambdasonde NK 2 | R_IT_LS_DOWN_KWP_H[2] | - | unsigned char | - | 0 | 256 | ohm | 1 |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde NK 1 | R_IT_LS_DOWN_KWP_L[1] | - | unsigned char | - | 0 | 1 | ohm | 1 |
| IRUN2 | 0x585F | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde NK 2 | R_IT_LS_DOWN_KWP_L[2] | - | unsigned char | - | 0 | 1 | ohm | 1 |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Widerstand Lambdasonde VK 1 | R_IT_LS_UP_KWP_H[1] | - | unsigned char | - | 0 | 64 | ohm | 1 |
| IRLV2 | 0x5861 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_WERT | Widerstand Lambdasonde VK 2 | R_IT_LS_UP_KWP_H[2] | - | unsigned char | - | 0 | 64 | ohm | 1 |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde VK 1 | R_IT_LS_UP_KWP_L[1] | - | unsigned char | - | 0 | 0,25 | ohm | 1 |
| IRUV2 | 0x5864 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde VK 2 | R_IT_LS_UP_KWP_L[2] | - | unsigned char | - | 0 | 0,25 | ohm | 1 |
| - | 0x5865 | STAT_0x5865_WERT | Oelstand Mittelwert Langzeit | OZ_NIVLANGT | - | unsigned char | - | 0 | 0,29296875 | mm manuell | 1 |
| - | 0x5866 | STAT_0x5866_WERT | Füllstand Motoröl | OZ_LP | - | unsigned char | - | 0 | 1 | - | 1 |
| - | 0x5867 | STAT_0x5867_WERT | Kilometerstand | CTR_KM_CAN | - | unsigned char | - | 0 | 2560 | km | 1 |
| ISSR1 | 0x5868 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL1_WERT | Status Standverbraucher registriert Teil 1 | STAT_SV_REG1 | - | unsigned char | - | 0 | 1 | - | 1 |
| ISSR2 | 0x5869 | STAT_STANDVERBRAUCHER_REGISTRIERT_TEIL2_WERT | Status Standverbraucher registriert Teil 2 | STAT_SV_REG2 | - | unsigned char | - | 0 | 1 | - | 1 |
| - | 0x586A | STAT_0x586A_WERT | Batteriespannung von IBS gemessen | U_BATT | - | unsigned char | - | 6 | 0,064 | V manuell | 1 |
| IZR82 | 0x586B | STAT_ZEIT_MIT_RUHESTROM_80_200_WERT | Zeit mit Ruhestrom 80 - 200 mA | T2HISTSHORT | - | unsigned char | - | 0 | 14,9333334 | min | 1 |
| IZR21 | 0x586C | STAT_ZEIT_MIT_RUHESTROM_200_1000_WERT | Zeit mit Ruhestrom 200 - 1000 mA | T3HISTSHORT | - | unsigned char | - | 0 | 14,9333334 | min | 1 |
| IZSST | 0x586D | STAT_ZAEHLER_ERKENNUNG_SCHLECHTE_STRASSE_WERT | Zähler Erkennung schlechte Strasse | SUM_RR | - | unsigned char | - | 0 | 256 | - | 1 |
| IZRG1 | 0x586E | STAT_ZEIT_MIT_RUHESTROM_GROESER_1000_WERT | Zeit mit Ruhestrom >1000 mA | T4HISTSHORT | - | unsigned char | - | 0 | 14,9333334 | min | 1 |
| - | 0x5870 | STAT_0x5870_WERT | Spannung DME Umgebungsdruck | V_AMP_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| SLAG1 | 0x5871 | STAT_LAMBDA_SOLLWERT_GRUPPE1_WERT | Lambda-Sollwert Gruppe 1 | LAMB_SP_KWP[1] | - | unsigned char | - | 0 | 0,0078125 | - | 1 |
| SLAG2 | 0x5873 | STAT_LAMBDA_SOLLWERT_GRUPPE2_WERT | Lambda-Sollwert Gruppe 2 | LAMB_SP_KWP[2] | - | unsigned char | - | 0 | 0,0078125 | - | 1 |
| - | 0x5874 | STAT_0x5874_WERT | Spannung Strommessung DMTL | V_DMTL_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| ILMMM | 0x5876 | STAT_LUFTMASSE_MITTLERE_MINIMALE_WERT | Mittlere Diagnosewert minimale Luftmasse | SAF_DIAG_MIN | - | unsigned char | - | 0 | 1 | kg/h | 1 |
| IDMMS | 0x5877 | STAT_DIFFERENZ_MAX_MIN_SAF_WERT | Differenz zwischen Maximum und Minimum SAF | SAF_KGH_DIF | - | unsigned char | - | 0 | 4 | kg/h | 1 |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | Lambdaverschiebung Rückführregler 1 | LAMB_DELTA_I_LAM_ADJ_KWP[1] | - | signed char | - | 0 | 9,765625E-4 | - | 1 |
| ILRR2 | 0x5879 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER2_WERT | Lambdaverschiebung Rückführregler 2 | LAMB_DELTA_I_LAM_ADJ_KWP[2] | - | signed char | - | 0 | 9,765625E-4 | - | 1 |
| ISFGR | 0x587A | STAT_FGR_WERT | Status FGR | STATE_CRU | - | 0xFF | _CNV_S_6_RANGE_STAT_106 | 0 | 1 | 0-n | 1 |
| ISMST | 0x587C | STAT_MOTORSTEUERUNG_WERT | Status Motorsteuerung | ECU_STATE | - | 0xFF | _CNV_S_7_RANGE_ECU__142 | 0 | 1 | 0-n | 1 |
| - | 0x587D | STAT_0x587D_WERT | Symptom bei Schubabschaltung Sonde vor Kat Bank 1 | STATE_SYM_DIAG_PUC_LSL_UP[1] | - | 0xFF | _CNV_S_4_EGCP_RANGE_739 | 0 | 1 | 0-n | 1 |
| - | 0x587E | STAT_0x587E_WERT | Symptom bei Schubabschaltung Sonde vor Kat Bank 2 | STATE_SYM_DIAG_PUC_LSL_UP[2] | - | 0xFF | _CNV_S_4_EGCP_RANGE_739 | 0 | 1 | 0-n | 1 |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhaeltnis E-Lüfter | ECFPWM[0] | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x5880 | STAT_0x5880_WERT | Tastverhältnis: Luftklappe | ECRASPWM | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | berechneter Gang | GEAR | - | unsigned char | - | 0 | 1 | - | 1 |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motortemperatur beim Start | TCO_ST | - | unsigned char | - | -48 | 0,75 | °C | 1 |
| - | 0x5883 | STAT_0x5883_WERT | Spannung Klopfwerte Zylinder 1 | NL[0] | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5885 | STAT_0x5885_WERT | Spannung Klopfwerte Zylinder 3 | NL[2] | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5886 | STAT_0x5886_WERT | Spannung Klopfwerte Zylinder 6 | NL[3] | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x5888 | STAT_0x5888_WERT | Spannung Klopfwerte Zylinder 4 | NL[5] | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert Gruppe 1 | LAMB_KWP[1] | - | unsigned char | - | 0 | 0,0078125 | - | 1 |
| ILAG2 | 0x588A | STAT_LAMBDA_ISTWERT_GRUPPE2_WERT | Lambda-Istwert Gruppe 2 | LAMB_KWP[2] | - | unsigned char | - | 0 | 0,0078125 | - | 1 |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit seit Startende | T_AST | - | unsigned char | - | 0 | 25,6 | s | 1 |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur Lambdasonde VK 1 | TTIP_MES_LS_UP[1] | - | signed char | - | 0 | 16 | °C | 1 |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit DMTL Leckmessung | T_ACT_LEAK_MES | - | unsigned char | - | 0 | 25,6 | s | 1 |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom bei DMTL Pumpenprüfung | CUR_DMTL_DMTLS_TEST | - | unsigned char | - | 0 | 1,562523842 | mA | 1 |
| ITKV2 | 0x588F | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT2_WERT | Keramiktemperatur Lambdasonde VK 2 | TTIP_MES_LS_UP[2] | - | signed char | - | 0 | 16 | °C | 1 |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Momentanforderung an der Kupplung | TQ_REQ_CLU | - | signed char | - | 0 | 8 | Nm | 1 |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Drehmomentabfall schnell bei Gangwechsel | TQI_GS_FAST_DEC | - | signed char | - | 0 | 8 | Nm | 1 |
| - | 0x5894 | STAT_0x5894_WERT | Symptom Lambdasondenheizung vor Kat Bank 1 | STATE_SYM_OBD_LSL_LSH_UP[1] | - | 0xFF | _CNV_S_4_EGCP_RANGE_732 | 0 | 1 | 0-n | 1 |
| - | 0x5895 | STAT_0x5895_WERT | Symptom Lambdasondenheizung vor Kat Bank 2 | STATE_SYM_OBD_LSL_LSH_UP[2] | - | 0xFF | _CNV_S_4_EGCP_RANGE_732 | 0 | 1 | 0-n | 1 |
| - | 0x5896 | STAT_0x5896_WERT | Abgastemperatur nach Kat Bank 1 | TEG_CAT_DOWN_MDL[1] | - | unsigned char | - | 0 | 16 | °C | 1 |
| - | 0x5897 | STAT_0x5897_WERT | Abgastemperatur nach Kat Bank 2 | TEG_CAT_DOWN_MDL[2] | - | unsigned char | - | 0 | 16 | °C | 1 |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | Generator Sollspannung | V_ALTER_SP_KWP | - | unsigned char | - | 0 | 0,100000001 | V | 1 |
| - | 0x5899 | STAT_0x5899_WERT | Istwert DISA-Position | VIM_AV | - | unsigned char | - | 0 | 0,781249821 | % | 1 |
| IUOS1 | 0x589B | STAT_SPANNUNGSOFFSET_SIGNALPFAD1_WERT | Spannungsoffset Signalpfad CJ120 1 | VLS_OFS_LSL_KWP[1] | - | signed char | - | 0 | 0,004882785 | V | 1 |
| IUOS2 | 0x589C | STAT_SPANNUNGSOFFSET_SIGNALPFAD2_WERT | Spannungsoffset Signalpfad CJ120 2 | VLS_OFS_LSL_KWP[2] | - | signed char | - | 0 | 0,004882785 | V | 1 |
| - | 0x589E | STAT_0x589E_WERT | Status VVT- Entlastungsrelais | STATE_RLY_VVL_ADJ_EXT | - | 0xFF | _CNV_S_3_STATE_RLY__374 | 0 | 1 | 0-n | 1 |
| IWVVT | 0x589F | STAT_VVT_ISTWINKEL_WERT | VVT Istwinkel | ANG_EXC_VVL_KWP | - | unsigned char | - | 0 | 0,78125 | ° | 1 |
| SWVVT | 0x58A0 | STAT_VVT_SOLLWINKEL_WERT | VVT Sollwinkel | ANG_SP_CTL_VVL_KWP | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x58A1 | STAT_0x58A1_WERT | Ausgegeben Tastverhältnis | PWM_DR_OUT_SET_VVL_KWP | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IIVVM | 0x58A2 | STAT_VVT_MOTORSTROM_WERT | VVT Motorstrom | CUR_MOT_VVL_3_KWP | - | signed char | - | 0 | 1 | A | 1 |
| ITVVM | 0x58A3 | STAT_VVT_MOTORTEMPERATUR_WERT | VVT Motortemperatur | TEMP_MOT_VVL_KWP | - | signed char | - | 0 | 2 | ° | 1 |
| IUVVT | 0x58A4 | STAT_VVT_SPANNUNGSVERSORGUNG_WERT | VVT Spannungsversorgung | VCC_DR_VVL_KWP | - | unsigned char | - | 0 | 0,1 | V | 1 |
| IUVVS | 0x58A5 | STAT_VVT_SENSORVERSORGUNGSSPANNUNG_WERT | VVT Sensorversorgungsspannung | V_VCC_SENS_VVL_KWP | - | unsigned char | - | 0 | 0,1 | V | 1 |
| IDVVS | 0x58A6 | STAT_VVT_SENSORDIFFERENZ_WERT | VVT Sensordifferenz | ANG_DE_ABSV_PLAUS_CHK_VVL_KWP | - | unsigned char | - | 0 | 0,703125 | ° | 1 |
| ITVVE | 0x58A7 | STAT_VVT_ENDSTUFENTEMPERATUR_WERT | VVT Endstufentemperatur | TEMP_SWI_MES_MAX_VVL_KWP | - | signed char | - | 0 | 2 | °C | 1 |
| IZMAB | 0x58A8 | STAT_MOTORABSTELLZEIT_WERT | Motorabstellzeit | T_ES_KWP | - | unsigned char | - | 0 | 4 | min | 1 |
| - | 0x58A9 | STAT_0x58A9_WERT | Reset Zähler Überwachungsrechner | RST_CTR_MU_SAVE | - | unsigned char | - | 0 | 1 | - | 1 |
| - | 0x58AA | STAT_0x58AA_WERT | Reset Zähler Hauptrechner | RST_CTR_MC_SAVE | - | unsigned char | - | 0 | 1 | - | 1 |
| IADK1 | 0x58AB | STAT_ABWEICHUNG_DK_POTI1_WERT | Abweichung DK-Ersatzwert und DK-Poti 1 | TPS_MAF_DIF_INT_1 | - | unsigned char | - | 0 | 5,425863743 | mg/stk | 1 |
| IADK2 | 0x58AC | STAT_ABWEICHUNG_DK_POTI2_WERT | Abweichung DK-Ersatzwert und DK-Poti 2 | TPS_MAF_DIF_INT_2 | - | unsigned char | - | 0 | 5,425863743 | mg/stk | 1 |
| IPWG1 | 0x58AD | STAT_PEDALWERTGEBER1_WERT | Pedalwertgeber 1 | PV_AV_1 | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | Kraftstoff Anforderung an Pumpe | VFF_EFP | - | unsigned char | - | 0 | 1 | l/h | 1 |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | DK-Adaptionsschritt | TPS_AD_STEP_KWP | - | unsigned char | - | 0 | 1 | - | 1 |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Funkenbrenndauer Zylinder 1 | V_DUR_IGC_0 | - | unsigned char | - | 0 | 1,024 | ms | 1 |
| IZFZ5 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL5_WERT | Funkenbrenndauer Zylinder 5 | V_DUR_IGC_1 | - | unsigned char | - | 0 | 1,024 | ms | 1 |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Funkenbrenndauer Zylinder 3 | V_DUR_IGC_2 | - | unsigned char | - | 0 | 1,024 | ms | 1 |
| IZFZ6 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL6_WERT | Funkenbrenndauer Zylinder 6 | V_DUR_IGC_3 | - | unsigned char | - | 0 | 1,024 | ms | 1 |
| IZFZ2 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | Funkenbrenndauer Zylinder 2 | V_DUR_IGC_4 | - | unsigned char | - | 0 | 1,024 | ms | 1 |
| IZFZ4 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Funkenbrenndauer Zylinder 4 | V_DUR_IGC_5 | - | unsigned char | - | 0 | 1,024 | ms | 1 |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | Bremsdruck | BRAKE_PRS | - | unsigned char | - | 0 | 1 | bar | 1 |
| - | 0x58B8 | STAT_0x58B8_WERT | Drehzahl Überwachung | N_32_MON | - | unsigned char | - | 0 | 32 | rpm | 1 |
| - | 0x58B9 | STAT_0x58B9_WERT | Pedalwert Überwachung | PV_AV_MON | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x58BC | STAT_0x58BC_WERT | Luftmasse Überwachung | MAF_MON | - | unsigned char | - | 0 | 5,447058678 | mg/stk | 1 |
| - | 0x58BD | STAT_0x58BD_WERT | Modellluftmasse Überwachung tiefpassgefiltert | MAF_SUB_COR_MMV_MON | - | unsigned char | - | 0 | 5,447058678 | mg/stk | 1 |
| IMMSR | 0x58BF | STAT_MOMENTENANFORDERUNG_VON_MSR_RELATIV_WERT | relative Momentenforderung von MSR über CAN | TQI_MSR_CAN | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| - | 0x58C0 | STAT_0x58C0_WERT | Motordrehzahl Eratztwert Überwachung | N_32_SUB_MON | - | unsigned char | - | 0 | 32 | rpm | 1 |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Laufunruhe Segmentzeit | SEG_T_MES | - | unsigned char | - | 0 | 256 | µs | 1 |
| INSUE | 0x58C7 | STAT_LEERLAUF_SOLLDREHZAHLABWEICHUNG_WERT | LL-Solldrehzahlabweichung Überwachung | N_DIF_SP_IS_MON | - | unsigned char | - | -4096 | 32 | rpm | 1 |
| - | 0x58C8 | STAT_0x58C8_WERT | I-Anteil Momentdifferenz Überwachung und Modell | TQ_DIF_I_IS_MON | - | signed char | - | 0 | 8 | Nm | 1 |
| - | 0x58C9 | STAT_0x58C9_WERT | I-Anteil LL passive Rampe aktiv | LV_PAS_RAMP_ACT_I_IS | - | 0xFF | - | 0 | 1 | 0/1 | 1 |
| - | 0x58CA | STAT_0x58CA_WERT | PD-Anteil langsam Leerlaufregelung | TQ_DIF_P_D_SLOW_IS | - | signed char | - | 0 | 8 | Nm | 1 |
| - | 0x58CB | STAT_0x58CB_WERT | PD-Anteil schnell Leerlaufregelung | TQ_DIF_P_D_FAST_IS | - | signed char | - | 0 | 8 | Nm | 1 |
| - | 0x58CC | STAT_0x58CC_WERT | Verlustmoment Überwachung | TQ_LOSS_MON | - | signed char | - | 0 | 8 | Nm | 1 |
| - | 0x58CD | STAT_0x58CD_WERT | Verlustmomentabweichung Überwachung | TQ_LOSS_DIF_MON | - | signed char | - | 0 | 2 | Nm | 1 |
| - | 0x58CE | STAT_0x58CE_WERT | Carrierbyte Schalterstati | STATE_BYTE_SWI_KWP | - | unsigned char | - | 0 | 1 | - | 1 |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Motormoment Sollwert Überwachung | TQI_SP_MON | - | unsigned char | - | 0 | 2 | Nm | 1 |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Motormoment Istwert Überwachung | TQI_AV_MON | - | unsigned char | - | 0 | 2 | Nm | 1 |
| IMOAK | 0x58D1 | STAT_MOTORMOMENT_AKTUELL_WERT | Moment aktueller Wert | TQI_AV | - | signed char | - | 0 | 8 | Nm | 1 |
| - | 0x58D4 | STAT_0x58D4_WERT | Abweichung maximales Moment an Kupplung Überwachung | TQ_MAX_CLU_DIF_MON | - | signed char | - | 0 | 2 | Nm | 1 |
| - | 0x58D6 | STAT_0x58D6_WERT | Abweichung minimales Moment an Kupplung Überwachung | TQ_MIN_CLU_DIF_MON | - | signed char | - | 0 | 8 | Nm | 1 |
| - | 0x58D9 | STAT_0x58D9_WERT | Fehler Hauptrechner | ERR_COD_MC_SAVE | - | 0xFF | _CNV_S_14_TMO3_ERR_C_422 | 0 | 1 | 0-n | 1 |
| - | 0x58DA | STAT_0x58DA_WERT | Fehler Überwachungsrechner | ERR_COD_MU_SAVE | - | 0xFF | _CNV_S_21_TMO3_ERR_C_423 | 0 | 1 | 0-n | 1 |
| - | 0x58DB | STAT_0x58DB_WERT | Fehler Bitfeld high Byte | STATE_N_MAX_MON_HIGH_KWP | - | unsigned char | - | 0 | 1 | - | 1 |
| - | 0x58DC | STAT_0x58DC_WERT | Fehler Bitfeld low Byte | STATE_N_MAX_MON_LOW_KWP | - | unsigned char | - | 0 | 1 | - | 1 |
| IUSPS | 0x58DF | STAT_SPORTSCHALTER_SPANNUNG_WERT | Spannung Sportschalter | V_SOF_SWI_KWP | - | unsigned char | - | 0 | 0,01953125 | V | 1 |
| - | 0x58E0 | STAT_0x58E0_WERT | Abgleich Drosselklappenmodell (Faktor) | EISYDK_KORFAK_B | - | unsigned char | - | 0,0 | 0,0078125 | - | 1 |
| - | 0x58E1 | STAT_0x58E1_WERT | Abgleich Drosselklappenmodell (Offset) | EISYDK_KOROFF_B | - | signed char | - | 0,0 | 8,0 | kg/h | 1 |
| - | 0x58E2 | STAT_0x58E2_WERT | Abgleich Einlassventilmodell (Faktor) | EISYEV_KORFAK_B | - | unsigned char | - | 0,0 | 0,0078125 | - | 1 |
| - | 0x58E3 | STAT_0x58E3_WERT | Abgleich Einlassventilmodell (Offset) | EISYEV_KOROFF_B | - | signed char | - | 0,0 | 8,0 | kg/h | 1 |
| - | 0x58E4 | STAT_0x58E4 | Betriebsart Istwert | BA_IST | - | 0xFF | _CNV_S_7_Def_ba_467 | 0 | 1 | 0-n | 1 |
| INMAZ | 0x58E5 | STAT_DREHZAHL_MAXIMAL_BEI_ZUENDAUSSETZER_WERT | Maximale Drehzahl bei Zündaussetzern | N_MAX_SCDN_MIS_32_KWP | - | unsigned char | - | 0 | 32 | rpm | 1 |
| ILMAZ | 0x58E6 | STAT_LAST_MAXIMAL_BEI_ZUENDAUSSETZER_RELATIV_WERT | Maximale relative Last bei Zündaussetzern | LOAD_MAX_SCDN_MIS | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| ILMIZ | 0x58E7 | STAT_LAST_MINIMAL_BEI_ZUENDAUSSETZER_RELATIV_WERT | Minimale relative Last bei Zündaussetzern | LOAD_MIN_SCDN_MIS | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| INMIZ | 0x58E8 | STAT_DREHZAHL_MINIMAL_BEI_ZUENDAUSSETZER_WERT | Minimale Drehzahl bei Zündaussetzern | N_MIN_SCDN_MIS_32_KWP | - | unsigned char | - | 0 | 32 | rpm | 1 |
| IUWAP | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | Wasserpumpe Spannung | V_CWP | - | unsigned char | - | 0 | 0,1 | V | 1 |
| - | 0x58EA | STAT_0x58EA_WERT | Wasserpumpe Drehzahl | N_REL_CWP | - | unsigned char | - | 0 | 1 | - | 1 |
| INWSI | 0x58EB | STAT_WASSERPUMPE_DREHZAHL_SOLL_IST_DIFFERENZ_WERT | Wasserpumpe Drehzahl Soll-Ist-Differenz | N_REL_CWP_DIF | - | unsigned char | - | 0 | 1 | - | 1 |
| - | 0x58EC | STAT_0x58EC_WERT | Wasserpumpe Temperatur Elektronik | TEMP_EL_CWP | - | unsigned char | - | -50 | 1 | °C | 1 |
| - | 0x58ED | STAT_0x58ED_WERT | Wasserpumpe Stromaufnahme | CUR_CNS_CWP | - | unsigned char | - | 0 | 0,5 | A | 1 |
| ILWAP | 0x58EE | STAT_WASSERPUMPE_LEISTUNGSREDUZIERT_WERT | Wasserpumpe leistungsreduziert | REL_CWP_PWR | - | unsigned char | - | 0 | 0,390625 | % | 1 |
| IDMEL | 0x58F1 | STAT_DME_LOSNUMMER_WERT | DME - Losnummer | STATE_LRN_ECU | - | 0xFF | _CNV_S_8_RANGE_STAT_326 | 0 | 1 | 0-n | 1 |
| - | 0x58F5 | STAT_0x58F5_WERT | Eingangssignal Rückführregler 1 | VLS_DIF_LAM_ADJ_KWP[1] | - | signed char | - | 0 | 0,004882785 | V | 1 |
| - | 0x58F6 | STAT_0x58F6_WERT | Eingangssignal Rückführregler 2 | VLS_DIF_LAM_ADJ_KWP[2] | - | signed char | - | 0 | 0,004882785 | V | 1 |
| ILSA5 | 0x58F8 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL5_WERT | Segmentadaption Laufunruhe Zyl. 5 | SEG_AD_MMV_ER[1] | - | signed char | - | 0 | 0,061035309 | %. | 1 |
| ILSA3 | 0x58F9 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL3_WERT | Segmentadaption Laufunruhe Zyl. 3 | SEG_AD_MMV_ER[2] | - | signed char | - | 0 | 0,061035309 | %. | 1 |
| - | 0x58FA | STAT_0x58FA_WERT | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | CL_MMV_SAE | - | unsigned char | - | 0 | 0,0078125 | - | 1 |
| - | 0x58FB | STAT_0x58FB_WERT | Zähler Drehzahlerhöhungen TEV- Funktionstest | SUM_DIAG_DIAGCPS_SAE | - | unsigned char | - | 0 | 1 | cyc | 1 |
| - | 0x58FF | - | Umweltbedingung unbekannt | - | - | unsigned char | - | 0 | 1 | - | 1 |

### MESSWERTETAB_RK

| ARG | ID | RESULTNAME | KOMMENTAR | LABEL | L/H | DATENTYP | NAME | ADD | MUL | EINHEIT | DIV |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SSPEI | 0x4505 | STAT_VVT_EINLASSSPREIZUNG_SOLL_WERT | Sollwert Einlassspreizung | CAM_SP_IVVT_IN | - | unsigned char | - | 60 | 0,375 | °CRK | 1 |
| ISNWE | 0x4508 | STAT_NW_EINLASSSPREIZUNG_WERT | Istwert Einlassspreizung | CAM_IN[1] | - | unsigned char | - | 60 | 0,375 | °CRK | 1 |
| SUGEB | 0x4602 | STAT_GENERATOR_SPANNUNG_BSD_SOLL_WERT | Generator Sollspannung ueber BSD | V_ALTER_SP | - | unsigned char | - | 10,6 | 0,1 | V | 1 |
| - | 0x581A | STAT_0x581A_WERT | Nockenwelle Einlass | CAM_IN[1] | - | unsigned char | - | 60 | 0,375 | °CRK | 1 |
| - | 0x581B | STAT_0x581B_WERT | Nockenwelle Einlass Sollwert | CAM_SP_IVVT_IN | - | unsigned char | - | 60 | 0,375 | °CRK | 1 |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | Lambdaverschiebung Rückführregler 1 | LAMB_DELTA_I_LAM_ADJ[1] | - | signed char | - | 0 | 0,015625 | - | 1 |
| ILRR2 | 0x5879 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER2_WERT | Lambdaverschiebung Rückführregler 2 | LAMB_DELTA_I_LAM_ADJ[2] | - | signed char | - | 0 | 0,015625 | - | 1 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | 00654301 |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxx0 | 10 | Diagnose läuft nicht |
| xxxxxxx1 | 11 | Diagnose läuft |
| xxxxx0xx | 30 | Zyklus-Flag nicht gesetzt |
| xxxxx1xx | 31 | Zyklus-Flag gesetzt |
| xxxx0xxx | 40 | kein Fehler durch Tester |
| xxxx1xxx | 41 | Fehler durch Tester |
| xxx0xxxx | 50 | MIL aus |
| xxx1xxxx | 51 | MIL ein |
| xx0xxxxx | 60 | Fehler in Entprellphase |
| xx1xxxxx | 61 | Fehler entprellt, keine Scan Tool Ausgabe |
| xxxxxxxx | 0 | -- |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FARTSTATUSTEXTE

| BITNR | BITTEXT |
| --- | --- |
| 0x00 | nicht aktiv |
| 0x01 | Fehler momentan vorhanden |
| 0x02 | Fehler geprueft |
| 0x11 | E-Flag entprellt |
| 0x12 | CARB-entprellt |
| 0x13 | SCATT-aktiv |
| 0x14 | MIL ein |
| 0x15 | MIL blink |
| 0x16 | Fehler sporadisch |

### FARTERWTEXTE

| BITNR | BITTEXT |
| --- | --- |
| 0x00 | nicht aktiv             |
| 0x11 | Diagnose aktiv          |
| 0x12 | Diagnose gestoppt       |
| 0x13 | Zyklus-Flag gesetzt     |
| 0x14 | Error-Flag gesetzt      |
| 0x15 | MIL ein                 |
| 0x16 | Fehler in Entprellphase |
| 0xXY | Status unbekannt |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| STAT_KL15_EIN | 0 | 0x01 | 0x01 |
| STAT_MOTOR_AUS | 0 | 0x02 | 0x02 |
| STAT_KUPPL_EIN | 0 | 0x04 | 0x04 |
| STAT_BLS_EIN | 0 | 0x08 | 0x08 |
| STAT_BTS_EIN | 0 | 0x10 | 0x10 |
| STAT_KO_EIN | 0 | 0x80 | 0x80 |
| OBD_MIL | 0 | 0x80 | 0x80 |
| OBD_VERBRENNUNGSAUSSETZER_MONITOR | 1 | 0x01 | 0x01 |
| OBD_KRAFTSTOFFSYSTEM_MONITOR | 1 | 0x02 | 0x02 |
| OBD_KOMPONENTEN_MONITOR | 1 | 0x04 | 0x04 |
| OBD_VERBRENNUNGSAUSSETZER_READINESS | 1 | 0x10 | 0x10 |
| OBD_KRAFTSTOFFSYSTEM_READINESS | 1 | 0x20 | 0x20 |
| OBD_KOMPONENTEN_READINESS | 1 | 0x40 | 0x40 |
| OBD_KAT_UEBERWACHUNG_MONITOR | 2 | 0x01 | 0x01 |
| OBD_KAT_HEIZUNG_MONITOR | 2 | 0x02 | 0x02 |
| OBD_TANKENTLUEFTUNG_MONITOR | 2 | 0x04 | 0x04 |
| OBD_SEKUNDAERLUFTSYSTEM_MONITOR | 2 | 0x08 | 0x08 |
| OBD_KLIMA_MONITOR | 2 | 0x10 | 0x10 |
| OBD_LAMBDASONDE_MONITOR | 2 | 0x20 | 0x20 |
| OBD_LAMBDASONDENHEIZUNG_MONITOR | 2 | 0x40 | 0x40 |
| OBD_ABGASRUECKFUEHRUNG_MONITOR | 2 | 0x80 | 0x80 |
| OBD_KAT_UEBERWACHUNG_READINESS | 3 | 0x01 | 0x01 |
| OBD_KAT_HEIZUNG_READINESS | 3 | 0x02 | 0x02 |
| OBD_TANKENTLUEFTUNG_READINESS | 3 | 0x04 | 0x04 |
| OBD_SEKUNDAERLUFTSYSTEM_READINESS | 3 | 0x08 | 0x08 |
| OBD_KLIMA_READINESS | 3 | 0x10 | 0x10 |
| OBD_LAMBDASONDE_READINESS | 3 | 0x20 | 0x20 |
| OBD_LAMBDASONDENHEIZUNG_READINESS | 3 | 0x40 | 0x40 |
| OBD_ABGASRUECKFUEHRUNG_READINESS | 3 | 0x80 | 0x80 |
| OBD_MISSFIRE_MONITOR | 0 | 0x01 | 0x01 |
| OBD_FUEL_MONITOR | 0 | 0x02 | 0x02 |
| OBD_COMPREHENSIVE_MONITOR | 0 | 0x04 | 0x04 |
| OBD_MISSFIRE | 0 | 0x10 | 0x10 |
| OBD_FUELSYSTEM | 0 | 0x20 | 0x20 |
| OBD_COMPREHENSIVE | 0 | 0x40 | 0x40 |
| OBD_KAT_UEBERWACHUNG | 1 | 0x01 | 0x01 |
| OBD_KAT_HEIZUNG | 1 | 0x02 | 0x02 |
| OBD_EVAPORATE | 1 | 0x04 | 0x04 |
| OBD_SEC_AIR | 1 | 0x08 | 0x08 |
| OBD_AC_SYSTEM | 1 | 0x10 | 0x10 |
| OBD_LAMBDA | 1 | 0x20 | 0x20 |
| OBD_LAMBDA_HEATER | 1 | 0x40 | 0x40 |
| OBD_EGR | 1 | 0x80 | 0x80 |
| OBD_KAT_UEBERWACHUNG_MONITOR | 2 | 0x01 | 0x01 |
| OBD_KAT_HEIZUNG_MONITOR | 2 | 0x02 | 0x02 |
| OBD_EVAPORATE_MONITOR | 2 | 0x04 | 0x04 |
| OBD_SEC_AIR_MONITOR | 2 | 0x08 | 0x08 |
| OBD_AC_SYSTEM_MONITOR | 2 | 0x10 | 0x10 |
| OBD_LAMBDA_MONITOR | 2 | 0x20 | 0x20 |
| OBD_LAMBDA_HEATER_MONITOR | 2 | 0x40 | 0x40 |
| OBD_EGR_MONITOR | 2 | 0x80 | 0x80 |
| STAT_STATE_MSW_CAN_PLUS | 0 | 0x03 | 0x01 |
| STAT_STATE_MSW_CAN_MINUS | 0 | 0x03 | 0x02 |
| STAT_STATE_MSW_CAN_SET | 0 | 0x03 | 0x03 |
| STAT_STATE_MSW_CAN_OFF | 0 | 0x04 | 0x04 |
| STAT_LL_EIN | 0 | 0x01 | 0x01 |
| STAT_TEILLAST_EIN | 0 | 0x03 | 0x00 |
| STAT_VL_EIN | 0 | 0x02 | 0x02 |
| STAT_LSHK2_EIN | 0 | 0x04 | 0x04 |
| STAT_LSHK1_EIN | 0 | 0x08 | 0x08 |
| STAT_LSVK2_EIN | 0 | 0x10 | 0x10 |
| STAT_LSVK1_EIN | 0 | 0x20 | 0x20 |
| STAT_LS2_REGELUNG | 0 | 0x40 | 0x40 |
| STAT_LS1_REGELUNG | 0 | 0x80 | 0x80 |
| STAT_KICKDOWN | 1 | 0x04 | 0x04 |
| STAT_FAHRSTUFE | 1 | 0x08 | 0x08 |
| STAT_SCHUBAB | 1 | 0x40 | 0x40 |
| STAT_DK_ABGLEICH | 1 | 0x80 | 0x80 |
| STAT_DYN_LIM_1 | 2 | 0x01 | 0x01 |
| STAT_DYN_LIM_2 | 2 | 0x02 | 0x02 |
| STAT_FEHLER_CLSW | 2 | 0x04 | 0x04 |
| STAT_FEHLER_MFL | 2 | 0x08 | 0x08 |
| STAT_TIMEOUT_EGS1 | 2 | 0x10 | 0x10 |
| STAT_FEHLER_BREMSE | 2 | 0x20 | 0x20 |
| STAT_MON_LEVEL2 | 3 | 0x01 | 0x01 |
| STAT_V_PLAUSIBEL | 3 | 0x02 | 0x02 |
| STAT_NOTLAUF_LL | 3 | 0x04 | 0x04 |
| STAT_NOTLAUF_DK | 3 | 0x08 | 0x08 |
| STAT_FEHLER_VS | 3 | 0x10 | 0x10 |
| STAT_ASR_TIMEOUT | 3 | 0x20 | 0x20 |
| STAT_EGAS_NOTLAUF | 3 | 0x40 | 0x40 |
| STAT_VS_DIF_HOCH | 4 | 0x01 | 0x01 |
| STAT_UEBERN_LANG | 4 | 0x02 | 0x02 |
| STAT_VS_SP_MAX | 4 | 0x04 | 0x04 |
| STAT_EXT_MOMENT | 4 | 0x08 | 0x08 |
| STAT_MFL_AUS | 4 | 0x10 | 0x10 |
| STAT_VS_CAN_LANG | 5 | 0x01 | 0x01 |
| STAT_BESCHL_MON | 5 | 0x02 | 0x02 |
| STAT_HOCHDREH_S | 5 | 0x04 | 0x04 |
| STAT_TAKEOVER_VS | 5 | 0x08 | 0x08 |
| STAT_VS_FIL_LOW | 5 | 0x10 | 0x10 |
| STAT_DREHZAHL_BEG | 5 | 0x20 | 0x20 |
| STAT_BREMSE_AKTIV | 5 | 0x40 | 0x40 |
| STAT_MFL_HARD_OFF | 5 | 0x80 | 0x80 |
| STAT_FS | 1 | 0x04 | 0x04 |

### LAMBDASTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | 1 Regelung AUS, Einschaltbedingung noch nicht erfuellt |
| 0x02 | 2 Regelung EIN |
| 0x04 | 3 Regelung AUS wegen Fahrbedingung |
| 0x08 | 4 Regelung AUS wegen erkanntem Fehler |
| 0x10 | 5 Regelung EIN mit Einschraenkung (Sensor Fehler) |
| 0xXY | Status unbekannt |

### BETRIEBSSTUNDENSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Betriebsstundenzaehler verstanden und akzeptiert (top_w < 10h) |
| 0x01 | Betriebsstundenzaehler verstanden aber nicht akzeptiert (top_w > 10h) |
| 0x02 | Betriebsstundenzaehler nicht verstanden und nicht akzeptiert |
| 0xXY | Betriebsstundenzaehler kann nicht ausgegeben werden |

### STATE_GEAR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Neutral oder Park/Neutral |
| 0x01 | 1. Gang |
| 0x02 | 2. Gang |
| 0x03 | 3. Gang |
| 0x04 | 4. Gang |
| 0x05 | 5. Gang |
| 0x06 | 6. Gang |
| 0x07 | R  Rückwärtsgang |
| 0xFF | FF unbekanntes Getriebe |

### STATE_TQ_CAN_PLAUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 00 kein externer Eingriff |
| 0x01 | 01 Traktionskontrolle |
| 0x02 | 02 Sequentielles Manuelles Getriebe |
| 0x04 | 04 Getriebesteuerung |
| 0x08 | 08 Abstandsregelung |
| 0x10 | 10 Anti Roll Stabilisierung |
| 0x20 | 20 Servolenkung Typ 2 |
| 0xFF | FF unbekannter Eingriff |

### TPS_AD_STEP

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 Position Notlauf 1 |
| 0x01 |  1 Position oberer Anschlag |
| 0x02 |  2 Position Notlauf 2 |
| 0x03 |  3 Positionen Ende |
| 0x04 |  4 Adaption Notlauf 1 |
| 0x05 |  5 Adaption oberer Anschlag |
| 0x06 |  6 Adaption Notlauf 2 |
| 0x07 |  7 Adaption unterer Ansschlag |
| 0x08 |  8 Adaption Notlauf |
| 0x09 |  9 Adaption Notlauf 3 |
| 0x0A | 10 Adaption Ende |
| 0xFF | FF Status unbekannt |

### _CNV_S_3_STATE_RLY__396

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  Was soll ich hier nur ausgeben ? |
| 0x01 | Relais offen |
| 0x02 | Relais geschlossen |
| 0xFF | FF Status unbekannt |

### STATE_CP

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 Tankentlüftung nicht aktiv |
| 0x01 |  1 Tankentlüftung keine |
| 0x02 |  2 Tankentlüftung Minimum |
| 0x03 |  3 Tankentlüftung öffnen |
| 0x04 |  4 Tankentlüftung schnell öffnen |
| 0x05 |  5 Tankentlüftung Maximum |
| 0x06 |  6 Tankentlüftung schliessen |
| 0x07 |  7 Tankentlüftung warten auf offen |
| 0xFF | FF Status unbekannt |

### STATE_SA

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 Systemtest Sekundärluft nicht aktiv |
| 0x01 |  1 Systemtest Sekundärluft verzögert |
| 0x02 |  2 Systemtest Sekundärluft aktiv |
| 0x03 |  3 Systemtest Sekundärluft Unterbrechung |
| 0x04 |  4 Systemtest Sekundärluft Pumpe verzögert |
| 0x05 |  5 Systemtest Sekundärluft nicht aktiv |
| 0x06 |  6 Systemtest Sekundärluft abgebrochen |
| 0x07 |  7 Sekundärluft externe Ansteuerung |
| 0x08 |  8 Sekundärluft externe Ansteuerung beendet |
| 0x09 |  9 Bandendetest Sekundärluft aktiv |
| 0x0A | 10 Bandendetest Sekundärluft Pumpe |
| 0x0B | 11 Bandendetest Sekundärluft  Ende |
| 0xFF | FF Status unbekannt |

### VAL_MO3_ERR_CODE_MU

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 kein Fehler |
| 0x01 |  1 Falscher Header in der Kommunikation |
| 0x02 |  2 Fehler Prüfsumme in Kommunikation |
| 0x03 |  3 Fehler Ausgang Extension |
| 0x04 |  4 MU passt nicht zu MC Software |
| 0x05 |  5 Timeout Fehler Maximum |
| 0x06 |  6 Timeout Fehler Minimum |
| 0x07 |  7 RAM Fehler |
| 0x08 |  8 ROM Fehler |
| 0x09 |  9 Fehler Level 2 |
| 0x0A | 10 Redundant switch off path was triggerd by MC |
| 0x0B | 11 Programmablauf Überwachung 1 |
| 0x0C | 12 Programmablauf Überwachung 2 |
| 0x0D | 13 Programmablauf Überwachung 3 |
| 0x0E | 14 Programmablauf Überwachung 4 |
| 0x0F | 15 Programmablauf Überwachung 5 |
| 0x10 | 16 Programmablauf Überwachung 6 |
| 0x11 | 17 Programmablauf Überwachung 7 |
| 0x12 | 18 Programmablauf Überwachung 8 |
| 0x13 | 19 Watchdog Fehler |
| 0x14 | 20 Fehler Kommunikation, falsches enable Byte |
| 0xFF | FF Status unbekannt |

### VAL_MO3_ERR_CODE_MC

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 kein Fehler |
| 0x01 |  1 Fehler Prüfsumme in Kommunikation |
| 0x02 |  2 Falscher Header von MU |
| 0x03 |  3 Predrive Check: MU schaltet Endstufen nicht ab |
| 0x04 |  4 SW Referenz: MU sendet falsche SW Version |
| 0x05 |  5 SW Referenz: MU sendet falschen Varianten code |
| 0x06 |  6 Kopie Prozessüberwachung: MU incrementiert nicht ABC_CPM_MU |
| 0x07 |  7 Kopie Prozessüberwachung: MU incrementiert nicht Frage |
| 0x08 |  8 Programmablauf: MU ändert nicht die Kontrollbits |
| 0x09 |  9 ROM Test Level 2 |
| 0x0A | 10 RAM Test Level 2 |
| 0x0B | 11 ROM Test Level 1 |
| 0x0C | 12 ROM Test Level 2 |
| 0xFF | FF Status unbekannt |

### CONF_SOF_SWI

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 kein Sporttaster |
| 0x01 | 1 Sporttaster vorhanden |
| 0x02 | 2 Sporttaster mit SSG |
| 0xFF | FFStatus unbekannt |

### STATE_MSW_CAN

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 keine Taste gedrückt |
| 0x01 | 1 Beschleunigen / Taste+ |
| 0x02 | 2 Verlangsamen / Taste- |
| 0x03 | 3 Taste Setzen / Wiederaufnahme |
| 0x04 | 4 Taste I/O |
| 0x06 | 6 Fehler |
| 0x07 | 7 kein Text in Spec |
| 0xFF | FFStatus unbekannt |

### EWSSTART

| WERT | UWTEXT |
| --- | --- |
| 0x00 | DME bereit Startwert zu empfangen |
| 0x01 | kein freier Startwert Speicherplatz vorhanden |
| 0x02 | noch kein Startwert gespeichert |
| 0x03 | Startwert nicht plausibel |
| 0xXY | unbekannter Status |

### EWSEMPFANGSSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Startwert verstanden und akzeptiert |
| 0x01 | Startwert verstanden aber nicht akzeptiert |
| 0x02 | Startwert nicht verstanden |
| 0x03 | Interfacefehler: Frame oder Parity oder Timeout |
| 0x04 | Prozess laeuft |
| 0x05 | Startwert Programmierung/Synchronisation wird nicht ausgefuehrt in diesem Zyklus |
| 0x06 | Dieselbe Zufallszahl wie beim letzten Start |
| 0x07 | Kein Startwert programmiert |
| 0x21 | 2 aus 3 Startwert im Flasch nicht ok |
| 0xXY | unbekannter Status |

### STATE_DIAGCPS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 00 Systemtest TEV Initialisierung |
| 0x01 | 01 Systemtest TEV Schritt 1 |
| 0x02 | 02 Systemtest TEV Schritt 2 |
| 0x03 | 03 Systemtest TEV Schritt 3 |
| 0x04 | 04 Systemtest TEV Rampe |
| 0x05 | 05 Systemtest TEV abgeschlossen LOCK_STEP |
| 0xXY | FF Systemtest TEV unbekannter Wert |

### FUNKTIONSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Funktion nicht aktiv |
| 0x01 | 1 Systemtest kann nicht gestartet werden |
| 0x05 | 5 Systemtest ist nicht gestartet |
| 0x06 | 6 Systemtest ist beendet |
| 0x07 | 7 Externe Ansteuerung gestartet |
| 0x08 | 8 Externe Ansteuerung beendet |
| 0xXY | Status kann nicht ausgegeben werden |

### DIAGNOSE_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 01 Systemtest läuft |
| 0x03 | 03 Systemtest beendet, Messwerte gültig |
| 0x06 | 06 Systemtest Start nicht möglich |
| 0x07 | 07 Systemtest nicht gestartet |
| 0xXY | FF Systemtest unbekannter Wert |

### DIAGNOSE_DMTL_WERT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Start |
| 0x01 | 1 Referenzleck Messung |
| 0x02 | 2 Grobleck Messung Start |
| 0x03 | 3 Grobleck Messung erweitert |
| 0x04 | 4 Grobleck Messung beendet |
| 0x05 | 5 Feinleck Messung Start |
| 0x06 | 6 Feinleck Messung erweitert |
| 0x07 | 7 2. Referenzleck Messung |
| 0x08 | 8 Tank geprüft |
| 0x09 | 9 Feinleck |
| 0x0A | A Grobleck |
| 0x0B | B Modulfehler |
| 0x0C | C Ende |
| 0x11 | 11 Batteriespannung aus gültigem Bereich |
| 0x12 | 12 elektrischer Fehler |
| 0x21 | 21 Tank Nachfüllen festgestellt |
| 0x22 | 22 Tankverschluss offen |
| 0x23 | 23 Batteriespannung Fluktuation zu hoch |
| 0x24 | 24 Diagnose maximale Zeit erreicht |
| 0x25 | 25 Fluktuationen Referenzstrom zu hoch |
| 0x26 | 26 Pumpenstrom abgefallen während der Messung |
| 0x0100 | 1 Funktion läuft |
| 0x0300 | 3 Werte gültig |
| 0x0600 | 6 Start verhindert |
| 0x0700 | 7 nicht gestartet |
| 0xXY | XY Status kann nicht ausgegeben werden |

### STATUS_EOL

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 01 Systemtest läuft |
| 0x03 | 03 Systemtest beendet, Messwerte gültig |
| 0x05 | 05 Systemtest abgebrochen, keine Werte |
| 0x06 | 06 Systemtest Start nicht möglich |
| 0x07 | 07 Systemtest nicht gestartet |
| 0xXY | FF Systemtest unbekannter Wert |

### EOL_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Funktionstest läuft |
| 0x01 | 1 Startbedingungen nicht erfüllt |
| 0x02 | 2 Übergabeparameter nicht plausibel |
| 0x03 | 3 Funktion wartet auf Freigabe |
| 0x05 | 5 Funktion noch nicht gestartet |
| 0x06 | 6 Funktion beendet |
| 0x07 | 7 Funktion abgebrochen |
| 0x08 | 8 Funktion durchlaufen und kein Fehler erkannt |
| 0x09 | 9 Funktion durchlaufen und Fehler erkannt |
| 0xFF | FF Status kann nicht ausgegeben werden |

### SYSTEMCHECK_STATE_CHK_LS

| WERT | UWTEXT |
| --- | --- |
| 0x00 |  0 Diagnose Anfang |
| 0x01 |  1 Diagnose Schritt FETT |
| 0x02 |  2 Diagnose Schritt MAGER |
| 0x03 |  3 Diagnose Ende |
| 0xFF | XY Status kann nicht ausgegeben werden |

### STATE_DIAG_SA_LS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Systemtest SLS nicht aktiv |
| 0x01 | 1 Systemtest SLS wartet |
| 0x02 | 2 Systemtest SLS Luftmassen Überwachung |
| 0x03 | 3 Systemtest SLS Diagnose unterbrochen |
| 0x04 | 4 Systemtest SLS wartet auf Ventil Diagnose |
| 0x05 | 5 Systemtest SLS Ventil Diagnose |
| 0x06 | 6 Systemtest SLS in Prüfung |
| 0x07 | 7 Systemtest SLS beendet |
| 0x08 | 8 Systemtest SLS abgebrochen |
| 0xFF | XY Status kann nicht ausgegeben werden |

### STATE_VLS_EOL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 Diagnose nicht aktiv |
| 0x01 | 1 Diagnose Schritt 1 |
| 0x02 | 2 Diagnose Schritt 2 |
| 0x10 | 10 Diagnose beendet, Sonden OK |
| 0x11 | 11 Diagnose beendet, Sonden vor Kat vertauscht |
| 0x12 | 12 Diagnose beendet, Sonden nach Kat vertauscht |
| 0x13 | 13 Diagnose beendet, Sonden vor und nach Kat vertauscht |
| 0x14 | 14 Diagnose beendet, Sonden vor Kat Bank 1 nicht plausibel |
| 0x15 | 15 Diagnose beendet, Sonden vor Kat Bank 2 nicht plausibel |
| 0x16 | 16 Diagnose beendet, Sonden nach Kat Bank 1 nicht plausibel |
| 0x17 | 17 Diagnose beendet, Sonden nach Kat Bank 2 nicht plausibel |
| 0x18 | 18 Diagnose beendet, keine brauchbaren Ergebnisse |
| 0xFF | FF Status kann nicht ausgegeben werden |

### STATUS_REGLER_LSH_DOWN

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 00 Heizung aus |
| 0x01 | 01 Heizung Vorheizphase |
| 0x02 | 02 Heizung langsam herunterregeln |
| 0x03 | 03 Heizung schnell herunterregelm |
| 0x04 | 04 Heizung langsam heraufregeln |
| 0x05 | 05 Batteriespannung Schutz |
| 0xXY | FF Heizung unbekannter Wert |

### STATUS_REGLER_LSH_UP

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 00 Heizung aus |
| 0x01 | 01 Heizung langsam heraufregeln |
| 0x02 | 02 Heizung schnell herunterregelm |
| 0x03 | 03 Heizung langsam herunterregeln |
| 0x04 | 04 Heizung Regelung aktiv |
| 0x05 | 05 Batteriespannung Schutz |
| 0x06 | 06 Temperatur Schutz |
| 0xXY | FF Heizung unbekannter Wert |

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
| 0x18 | Continental Teves |
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
| 0x54 | GETRAG |
| 0x55 | BHTC (Behr Hella Thermocontrol) |
| 0x56 | Siemens VDO Automotive |
| 0x57 | Visteon |
| 0x58 | Autoliv |
| 0x59 | Haberl |
| 0x60 | Magna Steyr |
| 0x61 | Marquardt |
| 0x62 | AB-Elektronik |
| 0x63 | Siemens VDO Borg |
| 0x64 | Hirschmann Electronics |
| 0x65 | Hoerbiger Electronics |
| 0x66 | Thyssen Krupp Automotive Mechatronics |
| 0x67 | Gentex GmbH |
| 0x68 | Atena GmbH |
| 0x69 | Magna-Donelly |
| 0x70 | Koyo Steering Europe |
| 0x71 | NSI B.V |
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0xFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x20 | Fehler momentan nicht vorhanden, nicht OBD-entprellt |
| 0x21 | Fehler momentan nicht vorhanden, OBD-entprellt |
| 0x22 | Fehler momentan vorhanden, noch nicht OBD-entprellt |
| 0x23 | Fehler momentan vorhanden, OBD-entprellt |
| 0x30 | Fehler verursacht kein Aufleuchten der Warnlampe (MIL) |
| 0x31 | Fehler wuerde das Aufleuchten der Warnlampe (MIL) verursachen |
| 0xFF | unbekannte Fehlerart |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| auf | 1 |
| ab | 0 |
| an | 1 |
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
| up | 1 |
| down | 0 |
| true | 1 |
| false | 0 |
| 1 | 1 |
| 0 | 0 |

### AUTHENTISIERUNG

| AUTH_NR | AUTH_TEXT |
| --- | --- |
| 0x01 | Simple |
| 0x02 | Symetrisch |
| 0x03 | Asymetrisch |
| 0xFF | Keine |

### SPEICHERSEGMENT

| SEG_BYTE | SEG_NAME | SEG_TEXT |
| --- | --- | --- |
| 0x00 | LAR | linearAdressRange |
| 0x01 | ROMI | ROM / EPROM, internal |
| 0x02 | ROMX | ROM / EPROM, external |
| 0x03 | NVRAM | NV-RAM (characteristic zones, DTC memory |
| 0x04 | RAMIS | RAM, internal (short MOV) |
| 0x05 | RAMXX | RAM, external (x data MOV) |
| 0x06 | FLASH | Flash EPROM, internal |
| 0x07 | UIFM | User Info Field Memory |
| 0x08 | VODM | Vehicle Order Data Memory |
| 0x09 | FLASHX | Flash EPROM, external |
| 0x0B | RAMIL | RAM, internal (long MOV / Register) |
| 0xFF | ??? | unbekanntes Speichersegment |

### CBSKENNUNG

| NR | CBS_K | CBS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Motoroel |
| 0x02 | Br_v | Bremsbelag vorne |
| 0x03 | Brfl | Bremsfluessigkeit |
| 0x04 | Filt | Mikrofilter |
| 0x06 | Br_h | Bremsbelag hinten |
| 0x07 | CSF | Dieselpartikelfilter |
| 0x08 | Batt | Batterie |
| 0x09 | VTG | Verteilergetriebeoel |
| 0x10 | ZKrz | Zuendkerzen |
| 0x11 | Sic | Sichtpruefung/Fahrzeug-Check |
| 0x12 | Kfl | Kuehlfluessigkeit |
| 0x13 | H2 | H2-Check |
| 0x14 | Ueb | Uebergabedurchsicht |
| 0x16 | DAD | Additiv fuer Partikelfilter |
| 0x20 | TUV | §Fahrzeuguntersuchung |
| 0x21 | AU | §Abgasuntersuchung |

### STAT_RUHESTROM

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 keine Ruhestromverletzung, keine Standverbraucher aktiv |
| 0x01 | 1 Ruhestrom 80 bis 200mA aktiv, keine Standverbraucher aktiv |
| 0x02 | 2 Ruhestrom 200 bis 1000mA aktiv, keine Standverbraucher aktiv |
| 0x03 | 3 Ruhestrom über 1000mA aktiv, keine Standverbraucher aktiv |
| 0x04 | 4 keine Ruhestromverletzung, Standverbraucher Licht aktiv |
| 0x05 | 5 Ruhestrom 80 bis 200mA aktiv, Standverbraucher Licht aktiv |
| 0x06 | 6 Ruhestrom 200 bis 1000mA aktiv, Standverbraucher Licht aktiv |
| 0x07 | 7 Ruhestrom über 1000mA aktiv, Standverbraucher Licht aktiv |
| 0x08 | 8 keine Ruhestromverletzung, Standverbraucher Standheizung aktiv |
| 0x09 | 9 Ruhestrom 80 bis 200mA aktiv, Standverbraucher Standheizung aktiv |
| 0x0A | 10 Ruhestrom 200 bis 1000mA aktiv, Standverbraucher Standheizung aktiv |
| 0x0B | 11 Ruhestrom über 1000mA aktiv, Standverbraucher Standheizung aktiv |
| 0x0C | 12 keine Ruhestromverletzung, Standverbraucher Sonstige aktiv |
| 0x0D | 13 Ruhestrom 80 bis 200mA aktiv, Standverbraucher Sonstige aktiv |
| 0x0E | 14 Ruhestrom 200 bis 1000mA aktiv, Standverbraucher Sonstige aktiv |
| 0x0F | 15 Ruhestrom über 1000mA aktiv, Standverbraucher Sonstige aktiv |
| 0xFF | 255 Status unbekannt |

### _EISYUGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | HUBEV_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 85.00 | 110.0 | 0.35 |
| 0x01 | 1000 | 90.00 | 105.0 | 6.50 |
| 0x02 | 1500 | 80.00 | 117.0 | 0.50 |
| 0x03 | 2000 | 51.00 | 69.00 | 2.70 |
| 0x04 | 2500 | 81.00 | 117.0 | 0.78 |
| 0x05 | 2500 | 70.00 | 100.0 | 9.70 |
| 0x06 | 4000 | 62.00 | 76.00 | 4.10 |
| 0x07 | 6000 | 115.0 | 105.0 | 9.70 |
| 0xFF | 0 | 0 | 0 | 0 |

### _EISYGD_FASTA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 115.0 | 3.00 |
| 0x01 | 1000 | 100.0 | 90.00 | 8.00 |
| 0x02 | 1500 | 85.00 | 80.00 | 15.0 |
| 0x03 | 3000 | 90.00 | 100.0 | 30.0 |
| 0xFF | 0 | 0 | 0 | 0 |

### _KRANN_FASTA

| NR | NKW_WERT | RF_WERT | TANS_WERT |
| --- | --- | --- | --- |
| 0x00 | 1000 | 60 | 30 |
| 0x01 | 2000 | 85 | 30 |
| 0x02 | 2500 | 40 | 30 |
| 0x03 | 2900 | 85 | 30 |
| 0x04 | 5000 | 80 | 30 |
| 0x05 | 6000 | 80 | 30 |
| 0xFF | 0 | 0 | 0 |

### _EISYUGD_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | HUBEV_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 84.8000 | 114.470 | 0.295467 |
| 0x01 | 720 | 84.4127 | 113.987 | 0.311767 |
| 0x02 | 900 | 80.9271 | 111.686 | 0.381667 |
| 0x03 | 1200 | 74.1944 | 107.850 | 0.506900 |
| 0x04 | 1500 | 68.7327 | 105.293 | 0.646500 |
| 0x05 | 2000 | 69.2935 | 105.293 | 0.861500 |
| 0x06 | 2500 | 71.4243 | 103.589 | 1.027500 |
| 0x07 | 3000 | 72.2243 | 101.032 | 1.254750 |
| 0x08 | 4000 | 76.5657 | 102.452 | 1.567060 |
| 0x09 | 5000 | 78.0336 | 106.998 | 1.919500 |
| 0x0A | 6000 | 78.0336 | 108.277 | 2.325500 |
| 0x0B | 7000 | 80.1645 | 108.703 | 2.401500 |
| 0x0C | 660 | 84.1067 | 105.653 | 0.408600 |
| 0x0D | 720 | 82.8800 | 104.160 | 0.428533 |
| 0x0E | 900 | 72.8000 | 98.4000 | 0.532333 |
| 0x0F | 1200 | 62.0000 | 90.4000 | 0.734000 |
| 0x10 | 1500 | 55.6000 | 84.0000 | 0.950000 |
| 0x11 | 2000 | 53.6000 | 82.4000 | 1.550000 |
| 0x12 | 2500 | 53.6000 | 82.4000 | 1.900000 |
| 0x13 | 3000 | 57.2000 | 78.0000 | 2.055000 |
| 0x14 | 4000 | 62.9333 | 80.3556 | 2.255560 |
| 0x15 | 5000 | 68.8000 | 86.4000 | 2.607000 |
| 0x16 | 6000 | 68.8000 | 87.2000 | 3.000000 |
| 0x17 | 7000 | 76.0000 | 88.0000 | 3.070000 |
| 0x18 | 660 | 76.0533 | 96.2667 | 0.548600 |
| 0x19 | 720 | 74.1867 | 94.6667 | 0.579333 |
| 0x1A | 900 | 65.0667 | 89.8667 | 0.708333 |
| 0x1B | 1200 | 56.4000 | 82.8000 | 0.956000 |
| 0x1C | 1500 | 52.4000 | 77.2000 | 1.450000 |
| 0x1D | 2000 | 51.2000 | 71.2000 | 2.141000 |
| 0x1E | 2500 | 52.8000 | 70.4000 | 2.551000 |
| 0x1F | 3000 | 54.4000 | 70.8000 | 2.805000 |
| 0x20 | 4000 | 60.0889 | 72.7111 | 2.917560 |
| 0x21 | 5000 | 64.8000 | 84.8000 | 3.042000 |
| 0x22 | 6000 | 67.2000 | 88.0000 | 3.400000 |
| 0x23 | 7000 | 75.2000 | 88.0000 | 3.457000 |
| 0x24 | 660 | 68.0533 | 91.7867 | 0.674533 |
| 0x25 | 720 | 66.5067 | 89.4933 | 0.726667 |
| 0x26 | 900 | 60.2667 | 81.3333 | 0.966667 |
| 0x27 | 1200 | 54.8000 | 74.0000 | 1.260000 |
| 0x28 | 1500 | 52.0000 | 70.0000 | 1.700000 |
| 0x29 | 2000 | 51.2000 | 68.8000 | 2.715000 |
| 0x2A | 2500 | 51.2000 | 68.8000 | 3.231000 |
| 0x2B | 3000 | 53.6000 | 66.4000 | 3.660000 |
| 0x2C | 4000 | 55.2000 | 73.1556 | 3.772110 |
| 0x2D | 5000 | 63.2000 | 86.4000 | 3.554000 |
| 0x2E | 6000 | 68.8000 | 88.8000 | 4.057000 |
| 0x2F | 7000 | 74.4000 | 88.8000 | 4.057000 |
| 0x30 | 660 | 63.1467 | 91.6800 | 0.865867 |
| 0x31 | 720 | 62.0267 | 89.4933 | 0.926667 |
| 0x32 | 900 | 58.6667 | 81.3333 | 1.166670 |
| 0x33 | 1200 | 54.8000 | 73.6000 | 1.540000 |
| 0x34 | 1500 | 52.8000 | 70.0000 | 2.000000 |
| 0x35 | 2000 | 52.8000 | 68.8000 | 3.075000 |
| 0x36 | 2500 | 54.4000 | 68.8000 | 3.865000 |
| 0x37 | 3000 | 53.6000 | 66.4000 | 4.092500 |
| 0x38 | 4000 | 59.5556 | 75.5556 | 3.979890 |
| 0x39 | 5000 | 64.8000 | 88.0000 | 3.950000 |
| 0x3A | 6000 | 75.2000 | 87.2000 | 4.420000 |
| 0x3B | 7000 | 78.4000 | 87.2000 | 4.420000 |
| 0x3C | 660 | 60.6400 | 91.5733 | 1.114530 |
| 0x3D | 720 | 59.7867 | 89.4933 | 1.203330 |
| 0x3E | 900 | 57.8667 | 81.3333 | 1.683330 |
| 0x3F | 1200 | 56.0000 | 73.2000 | 2.070000 |
| 0x40 | 1500 | 54.8000 | 69.2000 | 2.150000 |
| 0x41 | 2000 | 56.0000 | 68.0000 | 3.500000 |
| 0x42 | 2500 | 56.0000 | 70.4000 | 4.268000 |
| 0x43 | 3000 | 57.6000 | 68.0000 | 4.301000 |
| 0x44 | 4000 | 63.4667 | 77.0667 | 4.194670 |
| 0x45 | 5000 | 70.4000 | 89.6000 | 4.132000 |
| 0x46 | 6000 | 79.2000 | 88.8000 | 4.663000 |
| 0x47 | 7000 | 80.8000 | 88.8000 | 4.663000 |
| 0x48 | 660 | 66.7745 | 94.2034 | 1.744750 |
| 0x49 | 720 | 66.5081 | 92.9241 | 1.867950 |
| 0x4A | 900 | 66.5081 | 88.6071 | 2.430140 |
| 0x4B | 1200 | 66.0075 | 81.9584 | 2.822470 |
| 0x4C | 1500 | 65.2566 | 76.8075 | 2.942470 |
| 0x4D | 2000 | 60.4025 | 71.8038 | 3.901520 |
| 0x4E | 2500 | 63.4063 | 71.4013 | 4.658550 |
| 0x4F | 3000 | 64.9547 | 71.0528 | 4.746730 |
| 0x50 | 4000 | 70.0931 | 80.1129 | 4.406960 |
| 0x51 | 5000 | 74.3019 | 94.3019 | 4.660330 |
| 0x52 | 6000 | 79.7987 | 94.0025 | 5.242290 |
| 0x53 | 7000 | 80.8981 | 94.0025 | 5.242290 |
| 0x54 | 660 | 76.2503 | 98.7295 | 2.421350 |
| 0x55 | 720 | 76.2141 | 98.2628 | 2.580020 |
| 0x56 | 900 | 76.2141 | 97.2856 | 3.180620 |
| 0x57 | 1200 | 75.6784 | 91.5499 | 3.697140 |
| 0x58 | 1500 | 72.6285 | 83.8356 | 3.757640 |
| 0x59 | 2000 | 63.7142 | 79.4141 | 4.171430 |
| 0x5A | 2500 | 67.9857 | 80.4569 | 4.954070 |
| 0x5B | 3000 | 75.1284 | 79.0070 | 5.094960 |
| 0x5C | 4000 | 80.0173 | 83.0333 | 4.686980 |
| 0x5D | 5000 | 80.4856 | 97.3142 | 5.136140 |
| 0x5E | 6000 | 82.8999 | 96.7857 | 5.655360 |
| 0x5F | 7000 | 84.7570 | 96.7857 | 5.785710 |
| 0x60 | 660 | 85.9559 | 102.562 | 3.433330 |
| 0x61 | 720 | 85.9559 | 102.413 | 3.580000 |
| 0x62 | 900 | 85.9559 | 102.413 | 4.300000 |
| 0x63 | 1200 | 85.7972 | 97.7779 | 5.020000 |
| 0x64 | 1500 | 78.9018 | 88.4954 | 5.000000 |
| 0x65 | 2000 | 67.2128 | 83.8477 | 4.620000 |
| 0x66 | 2500 | 69.7651 | 84.8000 | 5.300000 |
| 0x67 | 3000 | 80.6477 | 84.3303 | 5.582500 |
| 0x68 | 4000 | 91.1665 | 86.7162 | 5.233780 |
| 0x69 | 5000 | 92.8513 | 99.3651 | 5.770000 |
| 0x6A | 6000 | 95.8990 | 98.5651 | 6.250000 |
| 0x6B | 7000 | 100.712 | 98.5651 | 6.500000 |
| 0x6C | 660 | 90.4000 | 104.296 | 4.700000 |
| 0x6D | 720 | 90.4000 | 104.219 | 4.753330 |
| 0x6E | 900 | 90.4000 | 104.219 | 5.233330 |
| 0x6F | 1200 | 90.4000 | 100.109 | 5.660000 |
| 0x70 | 1500 | 81.6000 | 91.8209 | 6.050000 |
| 0x71 | 2000 | 69.2372 | 87.6417 | 6.000000 |
| 0x72 | 2500 | 70.4000 | 88.9533 | 5.950000 |
| 0x73 | 3000 | 81.7093 | 88.7696 | 6.282500 |
| 0x74 | 4000 | 96.4294 | 92.9135 | 6.311780 |
| 0x75 | 5000 | 99.4186 | 101.312 | 6.750000 |
| 0x76 | 6000 | 106.479 | 100.730 | 7.100000 |
| 0x77 | 7000 | 112.442 | 100.730 | 7.400000 |
| 0x78 | 660 | 90.4000 | 104.623 | 4.800000 |
| 0x79 | 720 | 90.4000 | 104.596 | 4.880000 |
| 0x7A | 900 | 90.4000 | 104.596 | 5.600000 |
| 0x7B | 1200 | 90.4000 | 100.298 | 6.160000 |
| 0x7C | 1500 | 81.6000 | 94.2748 | 7.770000 |
| 0x7D | 2000 | 69.9923 | 92.5497 | 8.000000 |
| 0x7E | 2500 | 70.4000 | 96.1265 | 7.870000 |
| 0x7F | 3000 | 81.8981 | 94.2439 | 7.945000 |
| 0x80 | 4000 | 97.4781 | 100.632 | 7.341110 |
| 0x81 | 5000 | 99.7961 | 103.577 | 8.000000 |
| 0x82 | 6000 | 112.142 | 103.373 | 8.500000 |
| 0x83 | 7000 | 117.350 | 103.373 | 8.900000 |
| 0x84 | 660 | 90.4000 | 104.800 | 4.899900 |
| 0x85 | 720 | 90.4000 | 104.800 | 5.006540 |
| 0x86 | 900 | 90.4000 | 104.800 | 5.966300 |
| 0x87 | 1200 | 90.4000 | 100.400 | 6.899260 |
| 0x88 | 1500 | 81.6000 | 95.6000 | 8.998770 |
| 0x89 | 2000 | 70.4000 | 95.2000 | 9.698300 |
| 0x8A | 2500 | 70.4000 | 100.000 | 9.698170 |
| 0x8B | 3000 | 82.0000 | 97.2000 | 9.698250 |
| 0x8C | 4000 | 98.0444 | 104.800 | 9.697640 |
| 0x8D | 5000 | 100.000 | 104.800 | 9.698300 |
| 0x8E | 6000 | 115.200 | 104.800 | 9.698800 |
| 0x8F | 7000 | 120.000 | 104.800 | 9.699200 |
| 0xFF | 0 | 0 | 0 | 0 |

### _EISYGD_INPA

| NR | NKW_WERT | VSE_SPRI_WERT | VSA_SPRI_WERT | WDK_IST_WERT |
| --- | --- | --- | --- | --- |
| 0x00 | 660 | 120.0 | 105.0 | 2.00 |
| 0x01 | 720 | 120.0 | 105.0 | 3.00 |
| 0x02 | 900 | 120.0 | 105.0 | 4.00 |
| 0x03 | 1200 | 120.0 | 104.0 | 5.00 |
| 0x04 | 1500 | 120.0 | 103.0 | 6.00 |
| 0x05 | 2000 | 119.0 | 100.0 | 7.00 |
| 0x06 | 2500 | 118.0 | 98.0 | 8.00 |
| 0x07 | 3000 | 116.0 | 98.0 | 9.00 |
| 0x08 | 4000 | 112.0 | 95.0 | 10.0 |
| 0x09 | 5000 | 107.0 | 91.0 | 11.0 |
| 0x0A | 6000 | 107.0 | 86.0 | 12.0 |
| 0x0B | 7000 | 107.0 | 84.0 | 13.0 |
| 0x0C | 660 | 118.0 | 103.0 | 5.0 |
| 0x0D | 720 | 118.0 | 103.0 | 6.0 |
| 0x0E | 900 | 118.0 | 101.0 | 7.0 |
| 0x0F | 1200 | 116.0 | 95.0 | 8.0 |
| 0x10 | 1500 | 113.0 | 91.0 | 9.0 |
| 0x11 | 2000 | 111.0 | 95.0 | 10.0 |
| 0x12 | 2500 | 109.0 | 92.0 | 11.0 |
| 0x13 | 3000 | 108.0 | 95.0 | 12.0 |
| 0x14 | 4000 | 102.0 | 97.0 | 13.0 |
| 0x15 | 5000 | 91.0 | 95.0 | 14.0 |
| 0x16 | 6000 | 99.0 | 94.0 | 15.0 |
| 0x17 | 7000 | 103.0 | 81.0 | 16.0 |
| 0x18 | 660 | 113.0 | 98.0 | 7.0 |
| 0x19 | 720 | 112.0 | 98.0 | 8.0 |
| 0x1A | 900 | 111.0 | 97.0 | 10.0 |
| 0x1B | 1200 | 109.0 | 92.0 | 11.0 |
| 0x1C | 1500 | 108.0 | 88.0 | 12.0 |
| 0x1D | 2000 | 105.0 | 95.0 | 13.0 |
| 0x1E | 2500 | 104.0 | 92.0 | 15.0 |
| 0x1F | 3000 | 98.0 | 98.0 | 17.0 |
| 0x20 | 4000 | 92.0 | 95.0 | 18.0 |
| 0x21 | 5000 | 91.0 | 96.0 | 19.0 |
| 0x22 | 6000 | 97.0 | 96.0 | 22.0 |
| 0x23 | 7000 | 101.0 | 95.0 | 24.0 |
| 0x24 | 660 | 109.0 | 98.0 | 9.0 |
| 0x25 | 720 | 108.0 | 98.0 | 10.0 |
| 0x26 | 900 | 107.0 | 97.0 | 12.0 |
| 0x27 | 1200 | 103.0 | 92.0 | 13.0 |
| 0x28 | 1500 | 101.0 | 88.0 | 15.0 |
| 0x29 | 2000 | 99.0 | 95.0 | 17.0 |
| 0x2A | 2500 | 97.0 | 92.0 | 18.0 |
| 0x2B | 3000 | 95.0 | 98.0 | 19.0 |
| 0x2C | 4000 | 94.0 | 95.0 | 22.0 |
| 0x2D | 5000 | 102.0 | 96.0 | 24.0 |
| 0x2E | 6000 | 108.0 | 96.0 | 25.0 |
| 0x2F | 7000 | 113.0 | 95.0 | 27.0 |
| 0x30 | 660 | 109.0 | 98.0 | 13.0 |
| 0x31 | 720 | 108.0 | 98.0 | 14.0 |
| 0x32 | 900 | 107.0 | 97.0 | 16.0 |
| 0x33 | 1200 | 103.0 | 92.0 | 17.0 |
| 0x34 | 1500 | 101.0 | 88.0 | 19.0 |
| 0x35 | 2000 | 99.0 | 95.0 | 21.0 |
| 0x36 | 2500 | 97.0 | 92.0 | 22.0 |
| 0x37 | 3000 | 95.0 | 98.0 | 23.0 |
| 0x38 | 4000 | 94.0 | 95.0 | 26.0 |
| 0x39 | 5000 | 102.0 | 96.0 | 28.0 |
| 0x3A | 6000 | 108.0 | 96.0 | 29.0 |
| 0x3B | 7000 | 113.0 | 95.0 | 30.0 |
| 0x3C | 660 | 109.0 | 98.0 | 15.0 |
| 0x3D | 720 | 108.0 | 98.0 | 16.0 |
| 0x3E | 900 | 107.0 | 97.0 | 18.0 |
| 0x3F | 1200 | 103.0 | 92.0 | 19.0 |
| 0x40 | 1500 | 101.0 | 88.0 | 20.0 |
| 0x41 | 2000 | 99.0 | 95.0 | 22.0 |
| 0x42 | 2500 | 97.0 | 92.0 | 24.0 |
| 0x43 | 3000 | 95.0 | 98.0 | 25.0 |
| 0x44 | 4000 | 94.0 | 95.0 | 28.0 |
| 0x45 | 5000 | 102.0 | 96.0 | 30.0 |
| 0x46 | 6000 | 108.0 | 96.0 | 31.0 |
| 0x47 | 7000 | 113.0 | 95.0 | 32.0 |
| 0x48 | 660 | 109.0 | 98.0 | 17.0 |
| 0x49 | 720 | 108.0 | 98.0 | 18.0 |
| 0x4A | 900 | 107.0 | 97.0 | 20.0 |
| 0x4B | 1200 | 103.0 | 92.0 | 21.0 |
| 0x4C | 1500 | 101.0 | 88.0 | 22.0 |
| 0x4D | 2000 | 99.0 | 95.0 | 24.0 |
| 0x4E | 2500 | 97.0 | 92.0 | 26.0 |
| 0x4F | 3000 | 95.0 | 98.0 | 27.0 |
| 0x50 | 4000 | 94.0 | 95.0 | 30.0 |
| 0x51 | 5000 | 102.0 | 96.0 | 32.0 |
| 0x52 | 6000 | 108.0 | 96.0 | 34.0 |
| 0x53 | 7000 | 113.0 | 95.0 | 36.0 |
| 0x54 | 660 | 109.0 | 98.0 | 20.0 |
| 0x55 | 720 | 108.0 | 98.0 | 21.0 |
| 0x56 | 900 | 107.0 | 97.0 | 23.0 |
| 0x57 | 1200 | 103.0 | 92.0 | 24.0 |
| 0x58 | 1500 | 101.0 | 88.0 | 25.0 |
| 0x59 | 2000 | 99.0 | 95.0 | 27.0 |
| 0x5A | 2500 | 97.0 | 92.0 | 29.0 |
| 0x5B | 3000 | 95.0 | 98.0 | 30.0 |
| 0x5C | 4000 | 94.0 | 95.0 | 33.0 |
| 0x5D | 5000 | 102.0 | 96.0 | 35.0 |
| 0x5E | 6000 | 108.0 | 96.0 | 37.0 |
| 0x5F | 7000 | 113.0 | 95.0 | 39.0 |
| 0x60 | 660 | 109.0 | 98.0 | 22.0 |
| 0x61 | 720 | 108.0 | 98.0 | 23.0 |
| 0x62 | 900 | 107.0 | 97.0 | 25.0 |
| 0x63 | 1200 | 103.0 | 92.0 | 26.0 |
| 0x64 | 1500 | 101.0 | 88.0 | 27.0 |
| 0x65 | 2000 | 99.0 | 95.0 | 29.0 |
| 0x66 | 2500 | 97.0 | 92.0 | 31.0 |
| 0x67 | 3000 | 95.0 | 98.0 | 32.0 |
| 0x68 | 4000 | 94.0 | 95.0 | 35.0 |
| 0x69 | 5000 | 102.0 | 96.0 | 37.0 |
| 0x6A | 6000 | 108.0 | 96.0 | 39.0 |
| 0x6B | 7000 | 113.0 | 95.0 | 41.0 |
| 0x6C | 660 | 109.0 | 98.0 | 25.0 |
| 0x6D | 720 | 108.0 | 98.0 | 26.0 |
| 0x6E | 900 | 107.0 | 97.0 | 27.0 |
| 0x6F | 1200 | 103.0 | 92.0 | 28.0 |
| 0x70 | 1500 | 101.0 | 88.0 | 29.0 |
| 0x71 | 2000 | 99.0 | 95.0 | 31.0 |
| 0x72 | 2500 | 97.0 | 92.0 | 33.0 |
| 0x73 | 3000 | 95.0 | 98.0 | 34.0 |
| 0x74 | 4000 | 94.0 | 95.0 | 37.0 |
| 0x75 | 5000 | 102.0 | 96.0 | 39.0 |
| 0x76 | 6000 | 108.0 | 96.0 | 41.0 |
| 0x77 | 7000 | 113.0 | 95.0 | 43.0 |
| 0x78 | 660 | 109.0 | 98.0 | 30.0 |
| 0x79 | 720 | 108.0 | 98.0 | 30.0 |
| 0x7A | 900 | 107.0 | 97.0 | 32.0 |
| 0x7B | 1200 | 103.0 | 92.0 | 33.0 |
| 0x7C | 1500 | 101.0 | 88.0 | 34.0 |
| 0x7D | 2000 | 99.0 | 95.0 | 35.0 |
| 0x7E | 2500 | 97.0 | 92.0 | 38.0 |
| 0x7F | 3000 | 95.0 | 98.0 | 39.0 |
| 0x80 | 4000 | 94.0 | 95.0 | 42.0 |
| 0x81 | 5000 | 102.0 | 96.0 | 45.0 |
| 0x82 | 6000 | 108.0 | 96.0 | 47.0 |
| 0x83 | 7000 | 113.0 | 95.0 | 50.0 |
| 0x84 | 660 | 99.9 | 101.0 | 100.0 |
| 0x85 | 720 | 108.0 | 98.0 | 100.0 |
| 0x86 | 900 | 107.0 | 97.0 | 100.0 |
| 0x87 | 1200 | 103.0 | 92.0 | 100.0 |
| 0x88 | 1500 | 101.0 | 88.0 | 100.0 |
| 0x89 | 2000 | 99.0 | 95.0 | 100.0 |
| 0x8A | 2500 | 97.0 | 92.0 | 100.0 |
| 0x8B | 3000 | 95.0 | 98.0 | 100.0 |
| 0x8C | 4000 | 94.0 | 95.0 | 100.0 |
| 0x8D | 5000 | 102.0 | 96.0 | 100.0 |
| 0x8E | 6000 | 108.0 | 96.0 | 100.0 |
| 0x8F | 7000 | 113.0 | 95.0 | 100.0 |
| 0xFF | 0 | 0 | 0 | 0 |

### _KRANN_INPA

| NR | NKW_WERT | RF_WERT | TANS_WERT |
| --- | --- | --- | --- |
| 0x00 | 660 | 15  | 30 |
| 0x01 | 720 | 15  | 30 |
| 0x02 | 900 | 15  | 30 |
| 0x03 | 1200 | 15  | 30 |
| 0x04 | 1500 | 15  | 30 |
| 0x05 | 2000 | 15  | 30 |
| 0x06 | 2500 | 15  | 30 |
| 0x07 | 3000 | 15  | 30 |
| 0x08 | 4000 | 15  | 30 |
| 0x09 | 5000 | 15  | 30 |
| 0x0A | 6000 | 15  | 30 |
| 0x0B | 7000 | 15  | 30 |
| 0x0C | 660 | 20  | 30 |
| 0x0D | 720 | 20  | 30 |
| 0x0E | 900 | 20  | 30 |
| 0x0F | 1200 | 20  | 30 |
| 0x10 | 1500 | 20  | 30 |
| 0x11 | 2000 | 20  | 30 |
| 0x12 | 2500 | 20  | 30 |
| 0x13 | 3000 | 20  | 30 |
| 0x14 | 4000 | 20  | 30 |
| 0x15 | 5000 | 20  | 30 |
| 0x16 | 6000 | 20  | 30 |
| 0x17 | 7000 | 20  | 30 |
| 0x18 | 660 | 25  | 30 |
| 0x19 | 720 | 25  | 30 |
| 0x1A | 900 | 25  | 30 |
| 0x1B | 1200 | 25  | 30 |
| 0x1C | 1500 | 25  | 30 |
| 0x1D | 2000 | 25  | 30 |
| 0x1E | 2500 | 25  | 30 |
| 0x1F | 3000 | 25  | 30 |
| 0x20 | 4000 | 25  | 30 |
| 0x21 | 5000 | 25  | 30 |
| 0x22 | 6000 | 25  | 30 |
| 0x23 | 7000 | 25  | 30 |
| 0x24 | 660 | 30  | 30 |
| 0x25 | 720 | 30  | 30 |
| 0x26 | 900 | 30  | 30 |
| 0x27 | 1200 | 30  | 30 |
| 0x28 | 1500 | 30  | 30 |
| 0x29 | 2000 | 30  | 30 |
| 0x2A | 2500 | 30  | 30 |
| 0x2B | 3000 | 30  | 30 |
| 0x2C | 4000 | 30  | 30 |
| 0x2D | 5000 | 30  | 30 |
| 0x2E | 6000 | 30  | 30 |
| 0x2F | 7000 | 30  | 30 |
| 0x30 | 660 | 35  | 30 |
| 0x31 | 720 | 35  | 30 |
| 0x32 | 900 | 35  | 30 |
| 0x33 | 1200 | 35  | 30 |
| 0x34 | 1500 | 35  | 30 |
| 0x35 | 2000 | 35  | 30 |
| 0x36 | 2500 | 35  | 30 |
| 0x37 | 3000 | 35  | 30 |
| 0x38 | 4000 | 35  | 30 |
| 0x39 | 5000 | 35  | 30 |
| 0x3A | 6000 | 35  | 30 |
| 0x3B | 7000 | 35  | 30 |
| 0x3C | 660 | 40  | 30 |
| 0x3D | 720 | 40  | 30 |
| 0x3E | 900 | 40  | 30 |
| 0x3F | 1200 | 40  | 30 |
| 0x40 | 1500 | 40  | 30 |
| 0x41 | 2000 | 40  | 30 |
| 0x42 | 2500 | 40  | 30 |
| 0x43 | 3000 | 40  | 30 |
| 0x44 | 4000 | 40  | 30 |
| 0x45 | 5000 | 40  | 30 |
| 0x46 | 6000 | 40  | 30 |
| 0x47 | 7000 | 40  | 30 |
| 0x48 | 660 | 50  | 30 |
| 0x49 | 720 | 50  | 30 |
| 0x4A | 900 | 50  | 30 |
| 0x4B | 1200 | 50  | 30 |
| 0x4C | 1500 | 50  | 30 |
| 0x4D | 2000 | 50  | 30 |
| 0x4E | 2500 | 50  | 30 |
| 0x4F | 3000 | 50  | 30 |
| 0x50 | 4000 | 50  | 30 |
| 0x51 | 5000 | 50  | 30 |
| 0x52 | 6000 | 50  | 30 |
| 0x53 | 7000 | 50  | 30 |
| 0x54 | 660 | 60  | 30 |
| 0x55 | 720 | 60  | 30 |
| 0x56 | 900 | 60  | 30 |
| 0x57 | 1200 | 60  | 30 |
| 0x58 | 1500 | 60  | 30 |
| 0x59 | 2000 | 60  | 30 |
| 0x5A | 2500 | 60  | 30 |
| 0x5B | 3000 | 60  | 30 |
| 0x5C | 4000 | 60  | 30 |
| 0x5D | 5000 | 60  | 30 |
| 0x5E | 6000 | 60  | 30 |
| 0x5F | 7000 | 60  | 30 |
| 0x60 | 660 | 70  | 30 |
| 0x61 | 720 | 70  | 30 |
| 0x62 | 900 | 70  | 30 |
| 0x63 | 1200 | 70  | 30 |
| 0x64 | 1500 | 70  | 30 |
| 0x65 | 2000 | 70  | 30 |
| 0x66 | 2500 | 70  | 30 |
| 0x67 | 3000 | 70  | 30 |
| 0x68 | 4000 | 70  | 30 |
| 0x69 | 5000 | 70  | 30 |
| 0x6A | 6000 | 70  | 30 |
| 0x6B | 7000 | 70  | 30 |
| 0x6C | 660 | 80  | 30 |
| 0x6D | 720 | 80  | 30 |
| 0x6E | 900 | 80  | 30 |
| 0x6F | 1200 | 80  | 30 |
| 0x70 | 1500 | 80  | 30 |
| 0x71 | 2000 | 80  | 30 |
| 0x72 | 2500 | 80  | 30 |
| 0x73 | 3000 | 80  | 30 |
| 0x74 | 4000 | 80  | 30 |
| 0x75 | 5000 | 80  | 30 |
| 0x76 | 6000 | 80  | 30 |
| 0x77 | 7000 | 80  | 30 |
| 0x78 | 660 | 120 | 30 |
| 0x79 | 720 | 120 | 30 |
| 0x7A | 900 | 120 | 30 |
| 0x7B | 1200 | 120 | 30 |
| 0x7C | 1500 | 120 | 30 |
| 0x7D | 2000 | 120 | 30 |
| 0x7E | 2500 | 120 | 30 |
| 0x7F | 3000 | 120 | 30 |
| 0x80 | 4000 | 120 | 30 |
| 0x81 | 5000 | 120 | 30 |
| 0x82 | 6000 | 120 | 30 |
| 0x83 | 7000 | 120 | 30 |
| 0x84 | 660 | 150 | 30 |
| 0x85 | 720 | 150 | 30 |
| 0x86 | 900 | 150 | 30 |
| 0x87 | 1200 | 150 | 30 |
| 0x88 | 1500 | 150 | 30 |
| 0x89 | 2000 | 150 | 30 |
| 0x8A | 2500 | 150 | 30 |
| 0x8B | 3000 | 150 | 30 |
| 0x8C | 4000 | 150 | 30 |
| 0x8D | 5000 | 150 | 30 |
| 0x8E | 6000 | 150 | 30 |
| 0x8F | 7000 | 150 | 30 |
| 0xFF | 0 | 0 | 0 |

### _TECU_FASTA

| NR | SPEICHERADRESSE | ANZAHL |
| --- | --- | --- |
| 0x00 | 0x7faed8 | 4 |
| 0x01 | 0x7faedc | 4 |
| 0x02 | 0x7faee0 | 4 |
| 0x03 | 0x7faee4 | 4 |
| 0x04 | 0x7faee8 | 4 |
| 0x05 | 0x7faeec | 4 |
| 0x06 | 0x7faef0 | 4 |
| 0x07 | 0x7faef4 | 4 |
| 0x10 | 0x7fac14 | 4 |
| 0x11 | 0x7fac18 | 4 |
| 0x12 | 0x7fac1c | 4 |
| 0x13 | 0x7fac20 | 4 |
| 0x14 | 0x7fac24 | 4 |
| 0x15 | 0x7fac28 | 4 |
| 0x16 | 0x7fac2c | 4 |
| 0x17 | 0x7fac30 | 4 |
| 0x20 | 0x7fac14 | 4 |
| 0x21 | 0x7fac18 | 4 |
| 0x22 | 0x7fac1c | 4 |
| 0x23 | 0x7fac20 | 4 |
| 0x24 | 0x7fac24 | 4 |
| 0x25 | 0x7fac28 | 4 |
| 0x26 | 0x7fac2c | 4 |
| 0x27 | 0x7fac30 | 4 |
| 0x30 | 0x7fabe4 | 4 |
| 0x31 | 0x7fabe8 | 4 |
| 0x32 | 0x7fabec | 4 |
| 0x33 | 0x7fabf0 | 4 |
| 0x34 | 0x7fabf4 | 4 |
| 0x35 | 0x7fabf8 | 4 |
| 0x36 | 0x7fabfc | 4 |
| 0x37 | 0x7fac00 | 4 |
| 0x40 | 0x7fabe4 | 4 |
| 0x41 | 0x7fabe8 | 4 |
| 0x42 | 0x7fabec | 4 |
| 0x43 | 0x7fabf0 | 4 |
| 0x44 | 0x7fabf4 | 4 |
| 0x45 | 0x7fabf8 | 4 |
| 0x46 | 0x7fabfc | 4 |
| 0x47 | 0x7fac00 | 4 |
| 0x50 | 0x7fabfc | 4 |
| 0x51 | 0x7fac00 | 4 |
| 0x52 | 0x7fac04 | 4 |
| 0x53 | 0x7fac08 | 4 |
| 0x54 | 0x7fac0c | 4 |
| 0x55 | 0x7fac10 | 4 |
| 0x56 | 0x7fac14 | 4 |
| 0x57 | 0x7fac18 | 4 |
| 0xFF | 0 | 0 |

### DIAGMODE

| NR | MODE | MODE_TEXT |
| --- | --- | --- |
| 0x81 | DEFAULT | DefaultMode |
| 0x82 | PT | PeriodicTransmissions |
| 0x84 | EOLSSM | EndOfLineSystemSupplierMode |
| 0x85 | ECUPM | ECUProgrammingMode |
| 0x86 | ECUDM | ECUDevelopmentMode |
| 0x87 | ECUAM | ECUAdjustmentMode |
| 0x88 | ECUVCM | ECUVariantCodingMode |
| 0x89 | ECUSM | ECUSafetyMode |
| 0xFA | SSS_A | SystemSupplierSpecific (A) |
| 0xFB | SSS_B | SystemSupplierSpecific (B) |
| 0xFC | SSS_C | SystemSupplierSpecific (C) |
| 0xFD | SSS_D | SystemSupplierSpecific (D) |
| 0xFE | SSS_E | SystemSupplierSpecific (E) |
| 0xXY | -- | unbekannter Diagnose-Mode |

### BAUDRATE

| NR | BAUD | BAUD_TEXT |
| --- | --- | --- |
| 0x01 | PC9600 | Baudrate 9.6 kBaud |
| 0x02 | PC19200 | Baudrate 19.2 kBaud |
| 0x03 | PC38400 | Baudrate 38.4 kBaud |
| 0x04 | PC57600 | Baudrate 57.6 kBaud |
| 0x05 | PC115200 | Baudrate 115.2 kBaud |
| 0x06 | SB | Specific Baudrate |
| 0xXY | -- | unbekannte Baudrate |

### PROGRAMMIERSTATUS

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Anlieferzustand |
| 0x01 | Normalbetrieb |
| 0x02 | nicht benutzt |
| 0x03 | Speicher gelöscht |
| 0x04 | nicht benutzt |
| 0x05 | Signaturprüfung PAF nicht durchgeführt |
| 0x06 | Signaturprüfung DAF nicht durchgeführt |
| 0x07 | Programmprogrammiersitzung aktiv |
| 0x08 | Datenprogrammiersitzung aktiv |
| 0x09 | Hardwarereferenzeintrag fehlerhaft |
| 0x0A | Programmreferenzeintrag fehlerhaft |
| 0x0B | Referenzierungsfehler Hardware -> Programm |
| 0x0C | Programm nicht vorhanden oder nicht vollständig |
| 0x0D | Datenreferenzeintrag fehlerhaft |
| 0x0E | Referenzierungsfehler Programm -> Daten |
| 0x0F | Daten nicht vorhanden oder nicht vollständig |
| 0x10 | Reserviert fuer BMW |
| 0x80 | Reserviert fuer Zulieferer |
| 0xXY | unbekannter Programmierstatus |

### FUNKTIONALEADRESSE

| NR | F_ADR | F_ADR_TEXT |
| --- | --- | --- |
| 0xE6 | VD-FLEXRAY | Vertikaldynamik Flexray Steuergeräte |
| 0xE7 | SWT | Sweeping technologies Steuergeräte |
| 0xE8 | LIN | LIN-Bus Master Steuergeräte |
| 0xE9 | K-CAN | Karosserie-CAN Steuergeräte |
| 0xEA | PT-CAN | Powertrain-CAN Steuergeräte |
| 0xEB | SI | Sicherheits-BUS Steuergeräte |
| 0xEC | MOST | MOST-BUS Steuergeräte |
| 0xED | BOS | Bedarfsorientierter Service |
| 0xED | CBS | Bedarfsorientierter Service |
| 0xEE | PERSONAL | Personalisierung |
| 0xEF | ALL | alle Steuergeräte |

### MESSWERTEMODE

| TEXT | WERT | KOMMENTAR |
| --- | --- | --- |
| ein | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| aus | 0 | Argument ARG.   Messwertblock nur lesen |
| ja | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| nein | 0 | Argument ARG.   Messwertblock nur lesen |
| yes | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| no | 0 | Argument ARG.   Messwertblock nur lesen |
| on | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| off | 0 | Argument ARG.   Messwertblock nur lesen |
| 1 | 1 | Argument ARG.   Messwertblock im SG löschen, neu schreiben und lesen |
| 0 | 0 | Argument ARG.   Messwertblock nur lesen |
| 3 | 3 | Argument ID.    Messwertblock im SG löschen, neu schreiben und lesen |
| 2 | 2 | Argument ID.    Messwertblock nur lesen |
| 5 | 5 | Argument LABEL. Messwertblock im SG löschen, neu schreiben und lesen |
| 4 | 4 | Argument LABEL. Messwertblock nur lesen |

### GROBNAME

| ADR | GROBNAME |
| --- | --- |
| 0x00 | JBBF |
| 0x01 | MRS |
| 0x12 | DME/DDE |
| 0x13 | DME/DDE |
| 0x16 | AFS |
| 0x17 | EKP |
| 0x18 | EGS |
| 0x19 | VGSG |
| 0x1C | LDM |
| 0x1D | FFP |
| 0x20 | RDC |
| 0x21 | ACC |
| 0x24 | CVM |
| 0x27 | PGS |
| 0x29 | DSC |
| 0x30 | EPS |
| 0x35 | SVS |
| 0x36 | TEL |
| 0x37 | AMP |
| 0x38 | EHC |
| 0x3B | NAV |
| 0x3C | CDC |
| 0x3F | ASK |
| 0x40 | CAS |
| 0x41 | DWA |
| 0x44 | SHD/MDS |
| 0x47 | ANTTU |
| 0x4B | VIDEO |
| 0x50 | SINE |
| 0x54 | RADIO |
| 0x56 | FZD |
| 0x60 | KOMBI |
| 0x61 | FBI |
| 0x62 | MOSTGW |
| 0x63 | MASK/CCC |
| 0x64 | PDC |
| 0x67 | ZBE |
| 0x6D | FAS |
| 0x6E | BFS |
| 0x71 | AHM |
| 0x72 | FRM |
| 0x73 | CID |
| 0x78 | KLIMA |
| 0xA0 | CCC |
| 0x90 | VIRTSG90 |
| 0x91 | VIRTSG91 |
| 0x92 | VIRTSG92 |
| 0xXY | ???? |
