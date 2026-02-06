# MSS52DS0.prg

## General

|  |  |
| --- | --- |
| File | MSS52DS0.prg |
| Type | PRG |
| Jobs | 203 |
| Tables | 13 |
| Origin | BMW TI-433 Dennert |
| Revision | 1.8 |
| Author | BMW EE-32 Schaffert, BMW TP-421 Weber, BMW TI-433 Schiefer, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MSS52 fuer S52B32/S62B50 |  |  |
| ORIGIN | string | BMW TI-433 Dennert |  |  |
| REVISION | string | 1.08 |  |  |
| AUTHOR | string | BMW EE-32 Schaffert, BMW TP-421 Weber, BMW TI-433 Schiefer, BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### STEUERN_AVANOS1_SPAET_VENTIL

Auslass-VANOS Bank 1 Spaetventil ansteuern

_No arguments._

### STEUERN_AVANOS2_SPAET_VENTIL

Auslass-VANOS Bank 2 Spaetventil ansteuern

_No arguments._

### STEUERN_AVANOS1_FRUEH_VENTIL

Auslass-VANOS Bank 1 Fruehventil ansteuern

_No arguments._

### STEUERN_AVANOS2_FRUEH_VENTIL

Auslass-VANOS Bank 2 Fruehventil ansteuern

_No arguments._

### STEUERN_EVANOS1_SPAET_VENTIL

Einlass-VANOS Bank 1 Spaetventil ansteuern

_No arguments._

### STEUERN_EVANOS2_SPAET_VENTIL

Einlass-VANOS Bank 2 Spaetventil ansteuern

_No arguments._

### STEUERN_EVANOS1_FRUEH_VENTIL

Einlass-VANOS Bank 1 Fruehventil ansteuern

_No arguments._

### STEUERN_EVANOS2_FRUEH_VENTIL

Einlass-VANOS Bank 2 Fruehventil ansteuern

_No arguments._

### STEUERN_LSHV2

Lambdasondenheizung vor Kat Bank 2 ansteuern

_No arguments._

### STEUERN_LSHN1

Lambdasondenheizung nach Kat Bank 1 ansteuern

_No arguments._

### STEUERN_LSHN2

Lambdasondenheizung nach Kat Bank 2 ansteuern

_No arguments._

### STEUERN_LSHV1

Lambdasondenheizung vor Kat Bank 1 ansteuern

_No arguments._

### STEUERN_ZS8

Zuendspule Zyl. 8 ansteuern

_No arguments._

### STEUERN_ZS7

Zuendspule Zyl. 7 ansteuern

_No arguments._

### STEUERN_ZS6

Zuendspule Zyl. 6 ansteuern

_No arguments._

### STEUERN_ZS5

Zuendspule Zyl. 5 ansteuern

_No arguments._

### STEUERN_ZS4

Zuendspule Zyl. 4 ansteuern

_No arguments._

### STEUERN_ZS3

Zuendspule Zyl. 3 ansteuern

_No arguments._

### STEUERN_ZS2

Zuendspule Zyl. 2 ansteuern

_No arguments._

### STEUERN_ZS1

Zuendspule Zyl. 1 ansteuern

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

### STEUERN_EV8

Einspritzventil 8 ansteuern

_No arguments._

### STEUERN_EV7

Einspritzventil 7 ansteuern

_No arguments._

### STEUERN_EV6

Einspritzventil 6 ansteuern

_No arguments._

### STEUERN_EV5

Einspritzventil 5 ansteuern

_No arguments._

### STEUERN_EV4

Einspritzventil 4 ansteuern

_No arguments._

### STEUERN_EV3

Einspritzventil 3 ansteuern

_No arguments._

### STEUERN_EV2

Einspritzventil 2 ansteuern

_No arguments._

### STEUERN_EV1

Einspritzventil 1 ansteuern

_No arguments._

### STOP_SYSTEMCHECK_SEK_LUFT

SLS Funktionstest Stop

_No arguments._

### START_SYSTEMCHECK_SEK_LUFT

Funktionsueberpruefung SLS anstossen - erwarte Ergebnis ausserhalb Job

_No arguments._

### LESEN_SYSTEMCHECK_SEK_LUFT

Ergebnis Funktionsueberpruefung SLS abrufen

_No arguments._

### STEUERN_E_LUEFTER

Elektroluefterrelais ansteuern

_No arguments._

### STEUERN_OEKV2

Oelkreisumschaltventil 2 (links) ansteuern

_No arguments._

### STEUERN_OEKV1

Oelkreisumschaltventil 1 (rechts) ansteuern

_No arguments._

### STEUERN_START

Startrelais ansteuern

_No arguments._

### STEUERN_EKP

Kraftstoffpumpenrelais ansteuern

_No arguments._

### STEUERN_SERVOV

Servotronikventil ansteuern

_No arguments._

### STEUERN_TEV

Tankentlueftungsventil ansteuern

_No arguments._

### STEUERN_AKL

Abgasklappe ansteuern

_No arguments._

### STEUERN_VDSV

VANOS-Druckspeicherventil ansteuern

_No arguments._

### STEUERN_SLV

Sekundaerluftventil ansteuern

_No arguments._

### STEUERN_KO

Klimakompressorrelais ansteuern

_No arguments._

### STEUERN_SLP

Sekundaerluftpumpenrelais ansteuern

_No arguments._

### EDIC_RESET

EDIC-Reset

_No arguments._

### initialisierung

Default Init-Job

_No arguments._

### INFO

Information SGBD

_No arguments._

### FS_LESEN_TEXT

Auslesen des Fehlerspeichers (nur die F.-Namen)

| Name | Type | Description |
| --- | --- | --- |
| FS_KONZEPT | int | Uebergabeparameter, 0 fuer 1 Satz / 1 oder keine Uebergabe fuer 3 Saetze Umweltbed. |

### ISN_LESEN

liefert fertig formatierte ISN fuer MSS50

_No arguments._

### RAM_LESEN

Beliebige RAM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |
| RAM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### ROM_LESEN

Beliebige FLASH - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| ROM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse Segment-High-Middle-Low |
| ROM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### EEPROM_LESEN

Beliebige EEPROM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| EEPROM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse Segment-High-Middle-Low |
| EEPROM_LESEN_ANZAHL_BYTE | int | Uebergabeparameter, Anzahl der auszulesenden BYTES |

### IDENT

Ident-Daten fuer DME

_No arguments._

### ECU_CONFIG

Ident-Daten fuer DME

_No arguments._

### ABGAS_VARIANTE_LESEN

Auslesen der Abgasvariante

_No arguments._

### EWS3_GET_STATUS

EWS3 Synchonisierungsstatus abfragen

_No arguments._

### EWS3_INITIALISIEREN

EWS3 initialisieren/abgleichen

| Name | Type | Description |
| --- | --- | --- |
| EWS3_MODE | int |  |

### EWS3_SYNC

EWS3-Steuergeraet ruecksetzen

_No arguments._

### ADAPT_LOESCHEN

alle Adaptionen gleichzeitig loeschen

_No arguments._

### ADAPT_SELEKTIV_LOESCHEN

Adaptionen bitweise loeschen und Zustaende bitweise setzen

| Name | Type | Description |
| --- | --- | --- |
| STATUS_ADAPT | int |  |

### STEUERN_LAMBDAREGLER_SPERREN

LA-Regler ueber Adaptionstelegramm loeschen

_No arguments._

### STEUERN_LLS_TESTDREHZAHL

feste Leerlaufanhebung fuer VANOS-Test

_No arguments._

### STATUS_CODIER_CHECKSUMME

Codier - Checksumme abfragen

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

_No arguments._

### FS_QUICK_LESEN

Auslesen des QUICK Fehlerspeichers

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LESEN_OLD

Auslesen des Fehlerspeichers

| Name | Type | Description |
| --- | --- | --- |
| FS_KONZEPT | int | Uebergabeparameter, 0 fuer 1 Satz / 1 oder keine Uebergabe fuer 3 Saetze Umweltbed. |

### FS_SHADOW_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### FS_LOESCHEN

Loeschen des Fehlerspeichers

_No arguments._

### STATUS_DIGITAL

Status Schalteingaenge

_No arguments._

### STEUERN_AVANOS1

AVANOS1 ansteuern

_No arguments._

### STEUERN_EVANOS1

EVANOS1 ansteuern

_No arguments._

### STEUERN_EVANOS1_VERSTELLZEIT

Verstellzeitmessung EVANOS1 anstossen

_No arguments._

### STEUERN_AVANOS1_VERSTELLZEIT

Verstellzeitmessung AVANOS1 anstossen

_No arguments._

### STEUERN_EVANOS1_DICHTHEIT

Dichtheitmessung EVANOS1 anstossen

_No arguments._

### STEUERN_AVANOS1_DICHTHEIT

Dichtheitmessung AVANOS1 anstossen

_No arguments._

### STEUERN_EVANOS1_FRUEHANSCHLAG

Fruehanschlag EVANOS1 anfahren

_No arguments._

### STEUERN_EVANOS1_SPAETANSCHLAG

Spaetanschlag EVANOS1 anfahren

_No arguments._

### STEUERN_AVANOS1_FRUEHANSCHLAG

Fruehanschlag AVANOS1 anfahren

_No arguments._

### STEUERN_AVANOS1_SPAETANSCHLAG

Spaetanschlag AVANOS1 anfahren

_No arguments._

### STEUERN_AVANOS2

AVANOS2 ansteuern

_No arguments._

### STEUERN_EVANOS2

EVANOS2 ansteuern

_No arguments._

### STEUERN_EVANOS2_VERSTELLZEIT

Verstellzeitmessung EVANOS2 anstossen

_No arguments._

### STEUERN_AVANOS2_VERSTELLZEIT

Verstellzeitmessung AVANOS2 anstossen

_No arguments._

### STEUERN_EVANOS2_DICHTHEIT

Dichtheitmessung EVANOS2 anstossen

_No arguments._

### STEUERN_AVANOS2_DICHTHEIT

Dichtheitmessung AVANOS2 anstossen

_No arguments._

### STEUERN_EVANOS2_FRUEHANSCHLAG

Fruehanschlag EVANOS2 anfahren

_No arguments._

### STEUERN_EVANOS2_SPAETANSCHLAG

Spaetanschlag EVANOS2 anfahren

_No arguments._

### STEUERN_AVANOS2_FRUEHANSCHLAG

Fruehanschlag AVANOS2 anfahren

_No arguments._

### STEUERN_AVANOS2_SPAETANSCHLAG

Spaetanschlag AVANOS2 anfahren

_No arguments._

### STEUERN_LL_STELLER

Leerlaufsteller ansteuern (nur Stellglied)

_No arguments._

### CO_EINZELABGLEICH_LESEN

CO-Abgleich Einzelwert lesen (MSS50 je 1 Wort)

| Name | Type | Description |
| --- | --- | --- |
| ZYLINDER_NR | int | Uebergabeparameter, Index fuer Zylinder |

### CO_EINZELABGLEICH_VERSTELLEN

CO-Abgleich Einzelwert verstellen im RAM (MSS50 je 1 Wort)

| Name | Type | Description |
| --- | --- | --- |
| ZYLINDER_NR | int | Uebergabeparameter, Index fuer Zylinder |
| CO_VERSTELL_WERT | int | Neuer Verstellwert |

### CO_EINZELABGLEICH_PROGRAMMIEREN

CO-Abgleich Einzelwert programmieren (von RAM ins EEPROM schreiben)

| Name | Type | Description |
| --- | --- | --- |
| ZYLINDER_NR | int | Uebergabeparameter, Index fuer Zylinder |

### DIAGNOSE_ENDE

Beendet ALLE Diagnoseaktivitaeten, Neueinstieg sofort moeglich

_No arguments._

### DIAGNOSE_ERHALTEN

_No description._

_No arguments._

### SPEICHER_LESEN

Lese Bytes ueber direkte Adressierung Maximallaenge ist begrenzt

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | Segment oder Speicher |
| ADR | unsigned long | Adresse |
| ANZ_BYTE | int | Anzahl der zu lesenden Bytes |

### SPEICHER_SCHREIBEN

Schreibe binaere Bytes ueber direkte Adressierung Maximallaenge ist begrenzt

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | unsigned int | Segment oder Speicher |
| ADR | unsigned long | Adresse |
| ANZ_BYTE | unsigned int | Anzahl der zu schreibenden Bytes |
| DATEN | string | Inhalte von Byte 1 bis n in ASCII-Code |

### IO_STATUS_VORGEBEN

direkte Stellgliedansteuerung ueber Pin/Tastv./Periode

| Name | Type | Description |
| --- | --- | --- |
| PIN_NUMMER | int |  |
| TASTVERHAELTNIS | int | 00 Stellglied nicht angesteuert, ff staendig angesteuert |
| PERIODENDAUER | int | 00 ungueltig |

### SYS_ADR_LESEN

Dient zum Auslesen systemspezifischer Adressen

_No arguments._

### HERSTELLER_DATEN_LESEN

Dient zum Auslesen herstellerspezifischer Adressen

_No arguments._

### HERSTELLER_SELBSTTEST

Dient zum Aufruf einer herstellerspezifischen Testroutine (benoetigt spezielles Pruefumfeld - nicht fuer VK/HO)

_No arguments._

### SG_RESET

Dient zum Software-Reset, Adaptionen/FS nicht gesichert!

_No arguments._

### IO_STATUS_LESEN

Direktes Anfordern der IO-Bloecke ueber deren Index

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHL | int | Auswahl der Groessen, die man auslesen moechte |

### MCS_AKTIVIEREN

MCS-Modus einschalten (derzeit nicht implementiert)

_No arguments._

### LOGIN_REQUEST

Schutzmechanismus SEED_KEY

_No arguments._

### SEED_KEY

Schutzmechanismus SEED_KEY

_No arguments._

### ABGLEICH_LOGIN_REQUEST

Schutzmechanismus nur fuer Abgleich, direkte Entriegelung

_No arguments._

### CODIER_CHECKSUM

Steuergeraet prueft CRC16 Boot/Daten/Programm Master/Slave

_No arguments._

### ABGLEICHWERTE_SCHREIBEN

Beschreiben des internen Speichers mit den motorspezifischen Abgleichdaten im Standardverfahren (ASCII)

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_SCHREIBEN_ANZAHL | int | Anzahl der zu schreibenden Abgleichdatenbytes ohne die Pruefziffer |
| ABGLEICHWERTE_SCHREIBEN_DATEN | string | Abgleichdaten in folgendem Format z.B. 01 02 AB FF ... <PZ> Datenbytes - 2-stellige Hex-Werte, jeweils gefolgt von einem (1) Leerzeichen - Wertebereich: 00 - FF - nur Grossbuchstaben A - F sind erlaubt Pruefziffer <PZ>: - 1-stelliges Zeichen - Wertebereich: 0 - 9, A - Z - nur Grossbuchstaben A - Z sind erlaubt |

### ABGLEICHWERTE_LESEN

Lesen der aktuellen Abgleichwerte im Standardverfahren (ASCII)

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHWERTE_LESEN_ANZAHL | int | Anzahl der zu lesenden Abgleichwerte |

### ABGLEICHFLAG_SCHREIBEN

Beschreiben des internen Speichers mit den motorspezifischen Abgleichdaten

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICHFLAG_SCHREIBEN_FLAG | string | ABGLEICH_IO ABGLEICH_NIO |

### ABGLEICHFLAG_LESEN

_No description._

_No arguments._

### SPEICHER_SCHREIBEN_BINAER

Schreibe binaere Bytes ueber direkte Adressierung Maximallaenge ist begrenzt

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | unsigned int | Segment oder Speicher |
| ADR | unsigned long | Adresse |
| ANZ_BYTE | unsigned int | Anzahl der zu schreibenden Bytes |
| DATEN | string | Inhalte von Byte 1 bis n in ASCII-Code |

### STEUERN_TI_ABGLEICH_STARTEN

Anstossen der automatischen Einzeldrosselklappenkorrektur (Prueflauf)

_No arguments._

### STEUERN_TI_ABGLEICH_STOPPEN

Unterbrechen der automatischen Einzeldrosselklappenkorrektur (Prueflauf)

_No arguments._

### SG_PRUEFLAUF

Prueflauftelegramm mit freien Parametern abschicken

| Name | Type | Description |
| --- | --- | --- |
| TEST_NUMMER | int | Testnummer 0-255 |
| TEST_PAR1 | int | 1. freier Testparameter 0-255 Integer-Wert |
| TEST_PAR2 | int | 2. freier Testparameter 0-255 Integer-Wert |
| TEST_DATA | string | 3. Datenblock in ASCII (bis maximale Telegrammlaenge) |

### STEUERN_SG_AUTOSYNC

automatische Leerlaufsynchronisation durchfuehren

_No arguments._

### STEUERN_SYNC_MODE

Synchronisation EWS

| Name | Type | Description |
| --- | --- | --- |
| MODE | int |  |

### STATUS_SYNC_MODE

Status EWS auslesen

_No arguments._

### STATUS_ADD

Adaption Additiv Bank 1 (Lambdaadaptionsoffset 1) MW_ADD1

_No arguments._

### STATUS_LAMBDA_ADD_1

Adaption Additiv Bank 1 (Lambdaadaptionsoffset 1) MW_ADD1

_No arguments._

### STATUS_ADD_2

Adaption Additiv Bank 2 (Lambdaadaptionsoffset 2) MW_ADD2

_No arguments._

### STATUS_LAMBDA_ADD_2

Adaption Additiv Bank 2 (Lambdaadaptionsoffset 2) MW_ADD2

_No arguments._

### STATUS_VANOS_NW_LAGE_EINLASS_BANK_1

Auslass-VANOS Bank 1 ist MW_AVANOS1_IST

_No arguments._

### STATUS_VANOS_NW_LAGE_EINLASS_BANK_2

Auslass-VANOS Bank 2 ist MW_AVANOS2_IST

_No arguments._

### STATUS_AVANOS1_SOLL

Auslass-VANOS Bank 1 soll MW_AVANOS1_SOLL

_No arguments._

### STATUS_AVANOS2_SOLL

Auslass-VANOS Bank 2 soll MW_AVANOS2_SOLL

_No arguments._

### STATUS_AQREL

relativer Oeffnungsquerschnitt MW_AQREL

_No arguments._

### STATUS_ANALOG_GM3

Strom fuer Servotronikventil 

_No arguments._

### STATUS_SYSTEMCHECK_LAUFUNRUHE

Laufunruhe lesen

_No arguments._

### LESEN_SYSTEMCHECK_LAUFUNRUHE

Laufunruhe lesen

_No arguments._

### STATUS_SERVO_I_IST

Strom fuer Servotronikventil 

_No arguments._

### STATUS_SERVO_I_SOLL

Strom fuer Servotronikventil 

_No arguments._

### STATUS_DKP_WINKEL

Drosselklappensteller Istwert MW_DKIST

_No arguments._

### STATUS_DKP_WINKEL_SOLL

Drosselklappensteller Sollwert MW_DKSOLL

_No arguments._

### STATUS_EVANOS1_IST

Einlass-VANOS Bank 1 ist MW_EVANOS1_IST

_No arguments._

### STATUS_EVANOS2_IST

Einlass-VANOS Bank 2 ist MW_EVANOS2_IST

_No arguments._

### STATUS_EVANOS1_SOLL

Einlass-VANOS Bank 1 soll MW_EVANOS1_SOLL

_No arguments._

### STATUS_EVANOS2_SOLL

Einlass-VANOS Bank 2 soll MW_EVANOS2_SOLL

_No arguments._

### STATUS_PWG_POTI_WINKEL

Fahrpedalwertgeber Kanal 1 MW_FWG1

_No arguments._

### STATUS_PWG_POTI_WINKEL_2

Fahrpedalwertgeber Kanal 2 MW_FWG2

_No arguments._

### STATUS_LAMBDA_INTEGRATOR_1

Lambdaregler 1 Regelfaktor MW_LAMBDA1

_No arguments._

### STATUS_INT

Lambdaregler 1 Regelfaktor MW_LAMBDA1

_No arguments._

### STATUS_LAMBDA_INTEGRATOR_2

Lambdaregler 2 Regelfaktor MW_LAMBDA2

_No arguments._

### STATUS_INT_2

Lambdaregler 2 Regelfaktor MW_LAMBDA2

_No arguments._

### STATUS_LFR_KO

Leerlaufregleradaption mit Kompressor MW_LFR_KO

_No arguments._

### STATUS_LFR

Leerlaufregleradaption ohne Kompressor MW_LFR

_No arguments._

### STATUS_LS_NKAT_SIGNAL_1

Lambdasonde 1 nach Kat MW_LSH1

_No arguments._

### STATUS_L_SONDE_H

Lambdasonde 1 nach Kat MW_LSH1

_No arguments._

### STATUS_LS_NKAT_SIGNAL_2

Lambdasonde 2 nach Kat MW_LSH2

_No arguments._

### STATUS_L_SONDE_2_H

Lambdasonde 2 nach Kat MW_LSH2

_No arguments._

### STATUS_LS_VKAT_SIGNAL_1

Lambdasonde 1 vor Kat MW_LSV1

_No arguments._

### STATUS_L_SONDE

Lambdasonde 1 vor Kat MW_LSV1

_No arguments._

### STATUS_LS_VKAT_SIGNAL_2

Lambdasonde 2 vor Kat MW_LSV2

_No arguments._

### STATUS_L_SONDE_2

Lambdasonde 2 vor Kat MW_LSV2

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Spannung PWG Kanal 1 MW_UPWG1M

_No arguments._

### STATUS_LMM_MASSE

Luftmasse MW_ML

_No arguments._

### STATUS_LMM

Luftmasse MW_ML

_No arguments._

### STATUS_LAMBDA_MUL_1

Adaption Multiplikativ Bank 1 (Lambdaadaptionsfaktor 1) MW_MUL1

_No arguments._

### STATUS_MUL

Adaption Multiplikativ Bank 1 (Lambdaadaptionsfaktor 1) MW_MUL1

_No arguments._

### STATUS_LAMBDA_MUL_2

Adaption Multiplikativ Bank 2 (Lambdaadaptionsfaktor 2) MW_MUL2

_No arguments._

### STATUS_MUL_2

Adaption Multiplikativ Bank 2 (Lambdaadaptionsfaktor 2) MW_MUL2

_No arguments._

### STATUS_MOTORDREHZAHL

Drehzahl n MW_N

_No arguments._

### STATUS_NMAX

Maximaldrehzahl n MW_NMAX

_No arguments._

### STATUS_N_LL_SOLL

Leerlaufregler Solldrehzahl MW_N_LL_SOLL

_No arguments._

### STATUS_PUMG_INTERN

Umgebungsdruck (intern) MW_PUMG_INTERN

_No arguments._

### STATUS_RF

relative Fuellung MW_RF

_No arguments._

### STATUS_TABG

Abgastemperatur MW_TABG

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

Ansauglufttemperatursensor MW_TANS

_No arguments._

### STATUS_EINSPRITZZEIT

Einspritzzeit Zylinder 1 MW_TI1

_No arguments._

### STATUS_TI2

Einspritzzeit Zylinder 2 MW_TI2

_No arguments._

### STATUS_TI3

Einspritzzeit Zylinder 3 MW_TI3

_No arguments._

### STATUS_TI4

Einspritzzeit Zylinder 4 MW_TI4

_No arguments._

### STATUS_TI5

Einspritzzeit Zylinder 5 MW_TI5

_No arguments._

### STATUS_TI6

Einspritzzeit Zylinder 6 MW_TI6

_No arguments._

### LESEN_SYSTEMCHECK_DMTL

Ergebnis Funktionsueberpruefung DMTL abrufen

_No arguments._

### STATUS_TI7

Einspritzzeit Zylinder 7 MW_TI7

_No arguments._

### STATUS_TI8

Einspritzzeit Zylinder 8 MW_TI8

_No arguments._

### STATUS_TI_AUS_IST

Ausblendzaehler Einspritzung Ist MW_TI_AUS_IST

_No arguments._

### STATUS_KUEHLW_AUSL_TEMPERATUR

Kuehleraustrittstemperatur MW_TKA

_No arguments._

### STATUS_LAST

Lastsignal MW_TL

_No arguments._

### STATUS_MOTORTEMPERATUR

Motortemperatursensor MW_TMOT

_No arguments._

### STATUS_TNMAX

Gesamtzeit Ueberdrehzahl n MW_TNMAX

_No arguments._

### STATUS_OEL_TEMPERATUR

Oeltemperatur (TOG) MW_TOEL

_No arguments._

### STATUS_TUMG

Umgebungstemperatur MW_TUMG

_No arguments._

### STATUS_TV_TEV

Tastverhaeltnis Tankentlueftungsventil MW_TV_TEV

_No arguments._

### STATUS_TZ1

Zuendwinkel Zylinder 1 MW_TZ1

_No arguments._

### STATUS_TZ2

Zuendwinkel Zylinder 2 MW_TZ2

_No arguments._

### STATUS_TZ3

Zuendwinkel Zylinder 3 MW_TZ3

_No arguments._

### STATUS_TZ4

Zuendwinkel Zylinder 4 MW_TZ4

_No arguments._

### STATUS_TZ5

Zuendwinkel Zylinder 5 MW_TZ5

_No arguments._

### STATUS_TZ6

Zuendwinkel Zylinder 6 MW_TZ6

_No arguments._

### STATUS_TZ7

Zuendwinkel Zylinder 7 MW_TZ7

_No arguments._

### STATUS_TZ8

Zuendwinkel Zylinder 8 MW_TZ8

_No arguments._

### STATUS_UBATT

Bordnetzspannung Hauptrelais MW_UBHR

_No arguments._

### STATUS_UEXT1

Sensorversorgung 1 (Master) MW_UEXT1

_No arguments._

### STATUS_UEXT2

Sensorversorgung 2 (Slave) MW_UEXT2

_No arguments._

### STATUS_GESCHWINDIGKEIT

Geschwindigkeit v MW_V

_No arguments._

### STATUS_V_CAN

Fahrzeuggeschwindigkeit v_asc (CAN) MW_V_CAN

_No arguments._

### STATUS_VMAX

Maximalgeschwindigkeit v MW_VMAX

_No arguments._

### STATUS_GEBERRAD_ADAPTION

Geberradadaption

_No arguments._

## Tables

### BETRIEBSWTAB

| NAME | TELEGRAM | POS_ADR | LEN_ADR | ADR | BYTE | DATA_TYPE | COMPU_TYPE | FACT_A | FACT_B | MASK | VALUE | ANZ | MEAS | RANGE | JOBNAME | LNAME |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| mw_add1 | 12050B06 | 04 | 0 | 0x00 | 11 | 7 | -- | 0.002 | 0 | 0x00 | 0x00 | 6.2f | ms |   | ADD | Adaption Additiv Bank 1 (Lambdaadaptionsoffset 1) |
| mw_add1 | 12050B06 | 04 | 0 | 0x00 | 11 | 7 | -- | 0.002 | 0 | 0x00 | 0x00 | 6.2f | ms |   | LAMBDA_ADD_1 | Adaption Additiv Bank 1 (Lambdaadaptionsoffset 1) |
| mw_add2 | 12050B06 | 04 | 0 | 0x00 | 13 | 7 | -- | 0.002 | 0 | 0x00 | 0x00 | 6.2f | ms |   | ADD_2 | Adaption Additiv Bank 2 (Lambdaadaptionsoffset 2) |
| mw_add2 | 12050B06 | 04 | 0 | 0x00 | 13 | 7 | -- | 0.002 | 0 | 0x00 | 0x00 | 6.2f | ms |   | LAMBDA_ADD_2 | Adaption Additiv Bank 2 (Lambdaadaptionsoffset 2) |
| mw_avanos1_ist | 12050B23 | 04 | 0 | 0x00 | 9 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | AVANOS1_IST | Auslass-VANOS Bank 1 ist |
| mw_avanos2_ist | 12050B23 | 04 | 0 | 0x00 | 17 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | AVANOS2_IST | Auslass-VANOS Bank 2 ist |
| mw_avanos1_soll | 12050B23 | 04 | 0 | 0x00 | 11 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | AVANOS1_SOLL | Auslass-VANOS Bank 1 soll |
| mw_avanos2_soll | 12050B23 | 04 | 0 | 0x00 | 19 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | AVANOS2_SOLL | Auslass-VANOS Bank 2 soll |
| mw_aqrel | 12050B03 | 04 | 0 | 0x00 | 23 | 5 | -- | 0.003051757 | 0 | 0x00 | 0x00 | 6.2f | % |   | AQREL | relativer Oeffnungsquerschnitt |
| mw_dkist | 12050B03 | 04 | 0 | 0x00 | 30 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | % |   | DKP_WINKEL | Drosselklappensteller Istwert |
| mw_dksoll | 12050B03 | 04 | 0 | 0x00 | 34 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | % |   | DKP_WINKEL_SOLL | Drosselklappensteller Sollwert |
| mw_evanos1_ist | 12050B23 | 04 | 0 | 0x00 | 5 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | EVANOS1_IST | Einlass-VANOS Bank 1 ist |
| mw_evanos2_ist | 12050B23 | 04 | 0 | 0x00 | 13 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | EVANOS2_IST | Einlass-VANOS Bank 2 ist |
| mw_evanos1_soll | 12050B23 | 04 | 0 | 0x00 | 7 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | EVANOS1_SOLL | Einlass-VANOS Bank 1 soll |
| mw_evanos2_soll | 12050B23 | 04 | 0 | 0x00 | 15 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | EVANOS2_SOLL | Einlass-VANOS Bank 2 soll |
| mw_fwg1 | 12050B03 | 04 | 0 | 0x00 | 26 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | % |   | PWG_POTI_WINKEL | Fahrpedalwertgeber Kanal 1 |
| mw_fwg2 | 12050B03 | 04 | 0 | 0x00 | 28 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | % |   | PWG_POTI_WINKEL_2 | Fahrpedalwertgeber Kanal 2 |
| mw_lambda1 | 12050B13 | 04 | 0 | 0x00 | 43 | 5 | -- | 0.000030517 | 0 | 0x00 | 0x00 | 6.2f | [1] |   | LAMBDA_INTEGRATOR_1 | Lambdaregler 1 Regelfaktor |
| mw_lambda1 | 12050B13 | 04 | 0 | 0x00 | 43 | 5 | -- | 0.000030517 | 0 | 0x00 | 0x00 | 6.2f | [1] |   | INT | Lambdaregler 1 Regelfaktor |
| mw_lambda2 | 12050B13 | 04 | 0 | 0x00 | 45 | 5 | -- | 0.000030517 | 0 | 0x00 | 0x00 | 6.2f | [1] |   | LAMBDA_INTEGRATOR_2 | Lambdaregler 2 Regelfaktor |
| mw_lambda2 | 12050B13 | 04 | 0 | 0x00 | 45 | 5 | -- | 0.000030517 | 0 | 0x00 | 0x00 | 6.2f | [1] |   | INT2 | Lambdaregler 2 Regelfaktor |
| mw_lfr_ko | 12050B06 | 04 | 0 | 0x00 | 40 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Nm |   | LFR_KO | Leerlaufregleradaption mit Kompressor |
| mw_lfr | 12050B06 | 04 | 0 | 0x00 | 38 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Nm |   | LFR | Leerlaufregleradaption ohne Kompressor |
| mw_lsh1 | 12050B02 | 04 | 0 | 0x00 | 53 | 5 | -- | 0.001088 | 0 | 0x00 | 0x00 | 6.2f | V |   | LS_NKAT_SIGNAL_1 | Lambdasonde 1 nach Kat |
| mw_lsh1 | 12050B02 | 04 | 0 | 0x00 | 53 | 5 | -- | 0.001088 | 0 | 0x00 | 0x00 | 6.2f | V |   | L_SONDE_H | Lambdasonde 1 nach Kat |
| mw_lsh2 | 12050B02 | 04 | 0 | 0x00 | 55 | 5 | -- | 0.001088 | 0 | 0x00 | 0x00 | 6.2f | V |   | LS_NKAT_SIGNAL_2 | Lambdasonde 2 nach Kat |
| mw_lsh2 | 12050B02 | 04 | 0 | 0x00 | 55 | 5 | -- | 0.001088 | 0 | 0x00 | 0x00 | 6.2f | V |   | L_SONDE_2_H | Lambdasonde 2 nach Kat |
| mw_lsv1 | 12050B02 | 04 | 0 | 0x00 | 49 | 5 | -- | 0.001088 | 0 | 0x00 | 0x00 | 6.2f | V |   | LS_VKAT_SIGNAL_1 | Lambdasonde 1 vor Kat |
| mw_lsv1 | 12050B02 | 04 | 0 | 0x00 | 49 | 5 | -- | 0.001088 | 0 | 0x00 | 0x00 | 6.2f | V |   | L_SONDE | Lambdasonde 1 vor Kat |
| mw_lsv2 | 12050B02 | 04 | 0 | 0x00 | 51 | 5 | -- | 0.001088 | 0 | 0x00 | 0x00 | 6.2f | V |   | LS_VKAT_SIGNAL_2 | Lambdasonde 2 vor Kat |
| mw_lsv2 | 12050B02 | 04 | 0 | 0x00 | 51 | 5 | -- | 0.001088 | 0 | 0x00 | 0x00 | 6.2f | V |   | L_SONDE_2 | Lambdasonde 2 vor Kat |
| mw_upwg1m | 12050B02 | 04 | 0 | 0x00 | 21 | 5 | -- | 0.004883 | 0 | 0x00 | 0x00 | 6.2f | V |   | PWG_POTI_SPANNUNG | Spannung PWG Kanal 1 |
| mw_ml | 12050B03 | 04 | 0 | 0x00 | 7 | 5 | -- | 0.25 | 0 | 0x00 | 0x00 | 6.2f | kg/h |   | LMM_MASSE | Luftmasse |
| mw_mul1 | 12050B06 | 04 | 0 | 0x00 | 7 | 5 | -- | 0.000030517 | 0 | 0x00 | 0x00 | 6.2f | [1] |   | LAMBDA_MUL_1 | Adaption Multiplikativ Bank 1 (Lambdaadaptionsfaktor 1) |
| mw_mul1 | 12050B06 | 04 | 0 | 0x00 | 7 | 5 | -- | 0.000030517 | 0 | 0x00 | 0x00 | 6.2f | [1] |   | MUL | Adaption Multiplikativ Bank 1 (Lambdaadaptionsfaktor 1) |
| mw_mul2 | 12050B06 | 04 | 0 | 0x00 | 9 | 5 | -- | 0.000030517 | 0 | 0x00 | 0x00 | 6.2f | [1] |   | LAMBDA_MUL_2 | Adaption Multiplikativ Bank 2 (Lambdaadaptionsfaktor 2) |
| mw_mul2 | 12050B06 | 04 | 0 | 0x00 | 9 | 5 | -- | 0.000030517 | 0 | 0x00 | 0x00 | 6.2f | [1] |   | MUL_2 | Adaption Multiplikativ Bank 2 (Lambdaadaptionsfaktor 2) |
| mw_n | 12050B03 | 04 | 0 | 0x00 | 3 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min |   | MOTORDREHZAHL | Drehzahl n |
| mw_nmax | 12050B06 | 04 | 0 | 0x00 | 19 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | km/h |   | NMAX | Maximaldrehzahl n |
| mw_n_ll_soll | 12050B03 | 04 | 0 | 0x00 | 5 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min |   | N_LL_SOLL | Leerlaufregler Solldrehzahl |
| mw_pumg_intern | 12050B03 | 04 | 0 | 0x00 | 22 | 2 | -- | 3 | 500 | 0x00 | 0x00 | 6.2f | mbar |   | PUMG_INTERN | Umgebungsdruck (intern) |
| mw_rf | 12050B03 | 04 | 0 | 0x00 | 11 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | % |   | RF | relative Fuellung |
| mw_tabg | 12050B03 | 04 | 0 | 0x00 | 17 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | Grad C |   | TABG | Abgastemperatur |
| mw_tans | 12050B03 | 04 | 0 | 0x00 | 13 | 2 | -- | 1 | -48 | 0x00 | 0x00 | 6.2f | Grad C |   | AN_LUFTTEMPERATUR | Ansauglufttemperatursensor |
| mw_ti1 | 12050B13 | 04 | 0 | 0x00 | 9 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | ms |   | EINSPRITZZEIT | Einspritzzeit Zylinder 1 |
| mw_ti2 | 12050B13 | 04 | 0 | 0x00 | 11 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | ms |   | TI2 | Einspritzzeit Zylinder 2 |
| mw_ti3 | 12050B13 | 04 | 0 | 0x00 | 13 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | ms |   | TI3 | Einspritzzeit Zylinder 3 |
| mw_ti4 | 12050B13 | 04 | 0 | 0x00 | 15 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | ms |   | TI4 | Einspritzzeit Zylinder 4 |
| mw_ti5 | 12050B13 | 04 | 0 | 0x00 | 17 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | ms |   | TI5 | Einspritzzeit Zylinder 5 |
| mw_ti6 | 12050B13 | 04 | 0 | 0x00 | 19 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | ms |   | TI6 | Einspritzzeit Zylinder 6 |
| mw_ti7 | 12050B13 | 04 | 0 | 0x00 | 21 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | ms |   | TI7 | Einspritzzeit Zylinder 7 |
| mw_ti8 | 12050B13 | 04 | 0 | 0x00 | 23 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | ms |   | TI8 | Einspritzzeit Zylinder 8 |
| mw_ti_aus_ist | 12050B13 | 04 | 0 | 0x00 | 7 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | [1] |   | TI_AUS_IST | Ausblendzaehler Einspritzung Ist |
| servo_i_ist | 12050B13 | 04 | 0 | 0x00 | 51 | 5 | -- | 0.89 | 0 | 0x00 | 0x00 | 6.2f | mA |   | STATUS_ANALOG_GM3 | Ist Strom Servotronikventil |
| servo_i_soll | 12050B13 | 04 | 0 | 0x00 | 55 | 5 | -- | 0.89 | 0 | 0x00 | 0x00 | 6.2f | mA |   | STATUS_ANALOG_GM3 | Soll Strom Servotronikventil |
| ll_abw | 12050B15 | 04 | 0 | 0x00 | 33 | 7 | -- | 0.001525878906 | 0 | 0x00 | 0x00 | 6.2f | % |   | STATUS_ANALOG_GM3 | Soll Strom Servotronikventil |
| mw_tka | 12050B03 | 04 | 0 | 0x00 | 16 | 2 | -- | 1 | -48 | 0x00 | 0x00 | 6.2f | GradC |   | KUEHLW_AUSL_TEMPERATUR | Kuehleraustrittstemperatur |
| mw_tl | 12050B03 | 04 | 0 | 0x00 | 9 | 5 | -- | 0.001 | 0 | 0x00 | 0x00 | 6.2f | ms |   | LAST | Lastsignal |
| mw_tmot | 12050B03 | 04 | 0 | 0x00 | 14 | 2 | -- | 1 | -48.0 | 0x00 | 0x00 | 6.2f | Grad C |   | MOTORTEMPERATUR | Motortemperatursensor |
| mw_tnmax | 12050B06 | 04 | 0 | 0x00 | 21 | 5 | -- | 0.000976562 | 0 | 0x00 | 0x00 | 6.2f | s |   | TNMAX | Gesamtzeit Ueberdrehzahl n |
| mw_toel | 12050B03 | 04 | 0 | 0x00 | 15 | 2 | -- | 1 | -48.0 | 0x00 | 0x00 | 6.2f | Grad C |   | OEL_TEMPERATUR | Oeltemperatur (TOG) |
| mw_tumg | 12050B03 | 04 | 0 | 0x00 | 18 | 2 | -- | 1 | -48 | 0x00 | 0x00 | 6.2f | Grad C |   | TUMG | Umgebungstemperatur |
| mw_tv_tev | 12050B13 | 04 | 0 | 0x00 | 41 | 5 | -- | 0.002 | 0 | 0x00 | 0x00 | 6.2f | ms |   | TV_TEV | Tastverhaeltnis Tankentlueftungsventil |
| mw_tz1 | 12050B13 | 04 | 0 | 0x00 | 25 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | TZ1 | Zuendwinkel Zylinder 1 |
| mw_tz2 | 12050B13 | 04 | 0 | 0x00 | 27 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | TZ2 | Zuendwinkel Zylinder 2 |
| mw_tz3 | 12050B13 | 04 | 0 | 0x00 | 29 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | TZ3 | Zuendwinkel Zylinder 3 |
| mw_tz4 | 12050B13 | 04 | 0 | 0x00 | 31 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | TZ4 | Zuendwinkel Zylinder 4 |
| mw_tz5 | 12050B13 | 04 | 0 | 0x00 | 33 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | TZ5 | Zuendwinkel Zylinder 5 |
| mw_tz6 | 12050B13 | 04 | 0 | 0x00 | 35 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | TZ6 | Zuendwinkel Zylinder 6 |
| mw_tz7 | 12050B13 | 04 | 0 | 0x00 | 37 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | TZ7 | Zuendwinkel Zylinder 7 |
| mw_tz8 | 12050B13 | 04 | 0 | 0x00 | 39 | 7 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | Grad KW |   | TZ8 | Zuendwinkel Zylinder 8 |
| mw_ubhr | 12050B03 | 04 | 0 | 0x00 | 19 | 2 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | V |   | UBATT | Bordnetzspannung Hauptrelais |
| mw_uext1 | 12050B03 | 04 | 0 | 0x00 | 20 | 2 | -- | 0.0391 | 0 | 0x00 | 0x00 | 6.2f | V |   | UEXT1 | Sensorversorgung 1 (Master) |
| mw_uext2 | 12050B03 | 04 | 0 | 0x00 | 21 | 2 | -- | 0.0391 | 0 | 0x00 | 0x00 | 6.2f | V |   | UEXT2 | Sensorversorgung 2 (Slave) |
| mw_v | 12050B13 | 04 | 0 | 0x00 | 3 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | km/h |   | GESCHWINDIGKEIT | Geschwindigkeit v |
| mw_v_can | 12050B13 | 04 | 0 | 0x00 | 5 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | km/h |   | V_CAN | Fahrzeuggeschwindigkeit v_asc (CAN) |
| mw_vmax | 12050B06 | 04 | 0 | 0x00 | 17 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | km/h |   | VMAX | Maximalgeschwindigkeit v |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| BA | 22 | 0x0f | 0x00 |
| SA | 21 | 0x08 | 0x08 |
| LSHV1 | 15 | 0x02 | 0x02 |
| LSHV2 | 16 | 0x02 | 0x02 |
| LSHN1 | 17 | 0x02 | 0x02 |
| LSHN2 | 18 | 0x02 | 0x02 |
| TZ1 | 19 | 0x01 | 0x01 |
| TZ2 | 19 | 0x02 | 0x02 |
| TZ3 | 19 | 0x04 | 0x04 |
| TZ4 | 19 | 0x08 | 0x08 |
| TZ5 | 19 | 0x10 | 0x10 |
| TZ6 | 19 | 0x20 | 0x20 |
| TZ7 | 19 | 0x40 | 0x40 |
| TZ8 | 19 | 0x80 | 0x80 |
| AKL | 10 | 0x40 | 0x40 |
| ELU | 9 | 0x40 | 0x40 |
| EKP | 8 | 0x40 | 0x40 |
| SLP | 6 | 0x40 | 0x40 |
| SLV | 7 | 0x40 | 0x40 |
| KKOS | 1 | 0x40 | 0x40 |
| KLOPF | 14 | 0x02 | 0x02 |
| SCHUTZ | 14 | 0x01 | 0x01 |
| REGEL | 14 | 0x04 | 0x04 |
| NOISE | 23 | 0x80 | 0x80 |
| S_GANG | 24 | 0x08 | 0x00 |
| S_KL15 | 24 | 0x20 | 0x20 |
| M_SS | 0 | 0x01 | 0x01 |
| M_STRT | 0 | 0x02 | 0x02 |
| M_LL | 0 | 0x04 | 0x04 |
| M_TL | 0 | 0x08 | 0x08 |
| M_VL | 0 | 0x10 | 0x10 |
| M_ZA | 0 | 0x20 | 0x20 |
| M_NL | 0 | 0x40 | 0x20 |
| KATH | 3 | 0x0f | 0x00 |
| S_KL50 | 30 | 0x80 | 0x80 |
| S_BLS | 24 | 0x10 | 0x10 |
| S_BLTS | 24 | 0x04 | 0x04 |
| S_KUP | 24 | 0x08 | 0x08 |
| EWS3 | 27 | 0x80 | 0x80 |
| S_FDYN | 30 | 0x01 | 0x01 |
| MIL | 26 | 0x80 | 0x80 |
| SMFL1 | 32 | 0x01 | 0x01 |
| SMFL2 | 32 | 0x02 | 0x02 |
| SMFL3 | 32 | 0x03 | 0x03 |
| SMFL4 | 32 | 0x04 | 0x04 |
| LLR | 13 | 0x01 | 0x01 |
| LDR1 | 35 | 0x01 | 0x01 |
| LDR2 | 36 | 0x01 | 0x01 |
| FGR | 12 | 0x01 | 0x01 |

### FORTTEXTE

| ORT | ORTTEXT | UW_1 | UW_2 | UW_3 | UW_4 |
| --- | --- | --- | --- | --- | --- |
| 0xF7 | VANOS Druckspeicherventil | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x83 | DSC-Eingriff unplausibel | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x84 | Timeout DSC-Botschaft | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x85 | Timeout LWS-Botschaft | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x86 | Timeout KOMBI-Botschaft | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x87 | Beide V-Signalquellen | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x8D | Fuellstandsplausibilisierung | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x8E | interner Index 7 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x8F | E-Box-Luefter | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x69 | Plausibilisierung Motortemperatur | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x02 | Schliesserwicklung Leerlaufsteller | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x1D | Oeffnerwicklung Leerlaufsteller | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x9B | intern: Adaptions-EEPROM Master | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x96 | intern: Speichertest Master | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x6A | Bremslichtschalter | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x09 | Klopfsensor 1 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x46 | Klopfsensor 2 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x45 | Klopfsensor 3 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x47 | Klopfsensor 4 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x2A | Geschwindigkeitseingang direkt | 0x00 | 0x01 | 0x04 | 0x03 |
| 0x97 | intern: Treiberdiagnosekette | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x98 | intern: Kommunikation Master | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x56 | CAN-Bus DME | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x88 | Leerlaufregler | 0x00 | 0x01 | 0x07 | 0x06 |
| 0x4F | Abgastemperatursensor | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x89 | Saugstrahlpumpe | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x8A | Differentialsperre | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x8B | Tempomatsystem | 0x00 | 0x01 | 0x0A | 0x03 |
| 0x8C | Motorgeraeusch | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x9F | Klopfbaustein 1 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA0 | Klopfbaustein 2 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA1 | intern: Klopfsignalpfad | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA2 | NW-Geber 2 Synchronisation gegen KW | 0x00 | 0x01 | 0x08 | 0x09 |
| 0x4C | intern: Umgebungsdrucksensor | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA3 | intern: SG-Resets | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x14 | Startrelais | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x4D | Ansauglufttemperaturfuehler | 0x00 | 0x01 | 0x0A | 0x03 |
| 0x4E | Kuehlwassertemperaturfuehler | 0x00 | 0x01 | 0x0B | 0x03 |
| 0x49 | Luftmasse zu DKG-Stellung unplausibel | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x6B | EGAS-Steller Selbsttest | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x3A | Sensorversorgung 1 Master | 0x00 | 0x01 | 0x0D | 0x03 |
| 0x3B | Sensorversorgung 2 Master | 0x00 | 0x01 | 0x0E | 0x03 |
| 0x30 | Klimakompressorrelais | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x29 | Luftmassenmesser 1 | 0x00 | 0x01 | 0x12 | 0x03 |
| 0x39 | Luftmassenmesser 2 | 0x00 | 0x01 | 0x12 | 0x03 |
| 0x6C | Oelkreisventil links | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x6D | Oelkreisventil rechts | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x08 | EVANOS2-Hallgeber | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x0B | AVANOS2-Hallgeber | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x4A | EVANOS2-Fruehventil | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x4B | EVANOS2-Spaetventil | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x53 | AVANOS2-Fruehventil | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x54 | AVANOS2-Spaetventil | 0x00 | 0x11 | 0x02 | 0x03 |
| 0xAC | Vanos-Druckspeicherventil | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x51 | MFL-Schnittstelle | 0x10 | 0x04 | 0x0A | 0x03 |
| 0x6F | Pedalwert 1 Vergleich | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x70 | Pedalwert 2 Vergleich | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x71 | EVANOS2-Regelung | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x72 | AVANOS2-Regelung | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x73 | intern: Steuergeraetetemperatur | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x74 | Servotronikventil Strommessung | 0x00 | 0x04 | 0x02 | 0x03 |
| 0x75 | Servotronik Geschwindigkeitssignal | 0x00 | 0x04 | 0x02 | 0x03 |
| 0x76 | Drosselklappenpoti 1 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x77 | Drosselklappenpoti 2 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x78 | Vergleich Drosselklappenpoti 1 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x79 | Vergleich Drosselklappenpoti 2 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x13 | Relais Sekundaerluftpumpe | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x3F | Sekundaerluftventil | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xAA | Sekundaerluft Mindestdurchfluss | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xAB | Sekundaerluft Ventil klemmt | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x52 | Abgasklappe | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xAD | KL50 Anlasserschalter0 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x80 | Abweichung Leerlaufdrehzahl | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x81 | interner Index 73 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xDE | interner Index 74 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xDF | interner Index 75 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xE0 | interner Index 76 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xE1 | interner Index 77 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xE2 | interner Index 78 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xE3 | interner Index 79 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xE4 | EGAS-Steller | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xE5 | EGAS-Regelung | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xE6 | EGAS-Soll-Ist-Vergleich | 0x0F | 0x10 | 0x02 | 0x03 |
| 0xE7 | intern: Prozessorkontrolle Slave | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xE8 | interner Index 84 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xE9 | interner Index 85 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x68 | interner Index 86 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x99 | interner Index 87 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x9A | interner Index 88 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xDD | interner Index 89 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x3C | Pedalwertgeber 1 | 0x00 | 0x01 | 0x0D | 0x03 |
| 0x3D | Pedalwertgeber 2 | 0x00 | 0x01 | 0x0E | 0x03 |
| 0x55 | EDK-Geber | 0x00 | 0x01 | 0x17 | 0x03 |
| 0x2D | EDK-Hardware | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x2C | Signal aktiver Oelniveaugeber | 0x00 | 0x01 | 0x02 | 0x12 |
| 0x31 | interner Index 95 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x38 | interner Index 96 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x3E | interner Index 97 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x40 | interner Index 98 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA4 | interner Index 99 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA5 | interner Index 100 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA6 | interner Index 101 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA7 | interner Index 102 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA8 | interner Index 103 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xA9 | interner Index 104 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xAA | interner Index 105 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xAB | interner Index 106 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xAC | interner Index 107 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x35 | Elektroluefter | 0x00 | 0x0A | 0x0B | 0x03 |
| 0x82 | EWS-Signalmanipulation | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x10 | KW-Induktivgeber | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x9C | intern: Adaptions-EEPROM Slave | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x9D | intern: Speichertest Slave | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x2B | Kuehleraustrittstemperaturfuehler | 0x00 | 0x18 | 0x02 | 0x03 |
| 0x1E | Ueberwachung AD-Wandler | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x01 | Relais Kraftstoffpumpe | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x7A | intern: Prozessorkontrolle Master | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x36 | Bordnetzspannung Hauptrelais | 0x00 | 0x01 | 0x02 | 0x0D |
| 0x7E | EKP-Crash-Abschaltung | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x0D | Lambdasonde 1 vor Kat | 0x00 | 0x01 | 0x1C | 0x03 |
| 0x0C | Lambdasonde 2 vor Kat | 0x00 | 0x01 | 0x1D | 0x03 |
| 0x24 | Tankentlueftungsventil | 0x00 | 0x01 | 0x19 | 0x35 |
| 0x41 | Drosselklappenpoti 2 Slave | 0x00 | 0x01 | 0x17 | 0x03 |
| 0x90 | Lambdaregler 1 | 0x00 | 0x01 | 0x2B | 0x2D |
| 0x91 | Lambdaregler 2 | 0x00 | 0x01 | 0x2C | 0x2E |
| 0x7B | Bus-Off lokaler SMG-CAN | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x07 | EVANOS1-Hallgeber | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x0A | AVANOS1-Hallgeber | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x43 | EVANOS1-Fruehventil | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x48 | EVANOS1-Spaetventil | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x16 | AVANOS1-Fruehventil | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x15 | AVANOS1-Spaetventil | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x7C | Aktives Motorlager | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x7D | Spoilerverstellung | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x6E | LED Fahrdynamikschalter | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x7F | Tankleckdiagnosepumpe | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x2E | Verbrauchssignalausgang KVA | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x2F | Drehzahlsignalausgang TD | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x06 | Timeout SMG-CAN | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x42 | EWS-Schnittstelle | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x03 | Einspritzventil 1 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x05 | Einspritzventil 2 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x04 | Einspritzventil 3 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x21 | Einspritzventil 4 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x1F | Einspritzventil 5 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x20 | Einspritzventil 6 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x22 | Einspritzventil 7 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x23 | Einspritzventil 8 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x50 | Schalterkette Kraftschluss | 0x00 | 0x01 | 0x05 | 0x03 |
| 0x9E | intern: Kommunikation Slave | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x1B | Tankleckdiagnoseventil | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xAE | Kraftstoffsystem LA-Faktor 1 | 0x00 | 0x01 | 0x02 | 0x2D |
| 0xAF | Kraftstoffsystem LA-Faktor 2 | 0x00 | 0x01 | 0x02 | 0x2E |
| 0xB0 | Kraftstoffsystem LA-Offset 1 | 0x00 | 0x01 | 0x02 | 0x29 |
| 0xB1 | Kraftstoffsystem LA-Offset 2 | 0x00 | 0x01 | 0x02 | 0x2A |
| 0xB2 | KAT-Konvertierung 1 | 0x00 | 0x01 | 0x2F | 0x33 |
| 0xB3 | KAT-Konvertierung 2 | 0x00 | 0x01 | 0x30 | 0x34 |
| 0xB4 | Tankleck | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xB5 | interner Index 179 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x1C | Regelung Kennfeldkuehlung | 0x00 | 0x0C | 0x02 | 0x03 |
| 0x12 | Steller Kennfeldkuehlung | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x57 | Lambdasonde 1 nach Kat | 0x00 | 0x01 | 0x1E | 0x03 |
| 0x58 | Lambdasonde 2 nach Kat | 0x00 | 0x01 | 0x1F | 0x03 |
| 0x25 | Lambdasondenhzg. 1 vor Kat | 0x00 | 0x01 | 0x20 | 0x03 |
| 0x26 | Lambdasondenhzg. 2 vor Kat | 0x00 | 0x01 | 0x21 | 0x03 |
| 0x27 | Lambdasondenhzg. 1 nach Kat | 0x00 | 0x01 | 0x22 | 0x03 |
| 0x28 | Lambdasondenhzg. 2 nach Kat | 0x00 | 0x01 | 0x23 | 0x03 |
| 0x0E | interner Index 188 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x5A | Lambdasondenalt. 1 vor Kat | 0x00 | 0x01 | 0x24 | 0x26 |
| 0x5B | Lambdasondenalt. 2 vor Kat | 0x00 | 0x01 | 0x25 | 0x27 |
| 0x5C | Lambdasondenalt. 1 nach Kat | 0x00 | 0x01 | 0x1E | 0x31 |
| 0x5D | Lambdasondenalt. 2 nach Kat | 0x00 | 0x01 | 0x1F | 0x32 |
| 0xB6 | Uebertemp. EV-Treiber 1 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xB7 | Uebertemp. EV-Treiber 2 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x64 | Reifendruck vorn links | 0x00 | 0x01 | 0x02 | 0x05 |
| 0x65 | Reifendruck vorn rechts | 0x00 | 0x01 | 0x02 | 0x05 |
| 0x66 | Reifendruck hinten rechts | 0x00 | 0x01 | 0x02 | 0x05 |
| 0x67 | Reifendruck hinten links | 0x00 | 0x01 | 0x02 | 0x05 |
| 0xB8 | EVANOS1-Regelung | 0x00 | 0x11 | 0x02 | 0x03 |
| 0xB9 | AVANOS1-Regelung | 0x00 | 0x11 | 0x02 | 0x03 |
| 0x19 | Zuendspule 1 | 0x00 | 0x01 | 0x11 | 0x03 |
| 0x17 | Zuendspule 2 | 0x00 | 0x01 | 0x11 | 0x03 |
| 0x18 | Zuendspule 3 | 0x00 | 0x01 | 0x11 | 0x03 |
| 0x32 | Zuendspule 4 | 0x00 | 0x01 | 0x11 | 0x03 |
| 0x34 | Zuendspule 5 | 0x00 | 0x01 | 0x11 | 0x03 |
| 0x33 | Zuendspule 6 | 0x00 | 0x01 | 0x11 | 0x03 |
| 0x37 | Zuendspule 7 | 0x00 | 0x01 | 0x11 | 0x03 |
| 0x1A | Zuendspule 8 | 0x00 | 0x01 | 0x11 | 0x03 |
| 0xC2 | interner Index 209 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xC3 | Ueberwachung Momentenmanager | 0x00 | 0x01 | 0x02 | 0x28 |
| 0xC4 | Aussetzer Zyl.1 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xC5 | Aussetzer Zyl.2 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xC6 | Aussetzer Zyl.3 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xC7 | Aussetzer Zyl.4 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xC8 | Aussetzer Zyl.5 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xC9 | Aussetzer Zyl.6 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xCA | Aussetzer Zyl.7 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xCB | Aussetzer Zyl.8 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xCC | Aussetzer mehr Zylinder | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xCD | Aussetzer Zyl.1 Warmlauf | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xCE | Aussetzer Zyl.2 Warmlauf | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xCF | Aussetzer Zyl.3 Warmlauf | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD0 | Aussetzer Zyl.4 Warmlauf | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD1 | Aussetzer Zyl.5 Warmlauf | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD2 | Aussetzer Zyl.6 Warmlauf | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD3 | Aussetzer Zyl.7 Warmlauf | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD4 | Aussetzer Zyl.8 Warmlauf | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD5 | Aussetzer mehr Zylinder Warmlauf | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD6 | interner Index 229 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD7 | interner Index 230 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD8 | interner Index 231 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xD9 | interner Index 232 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xDA | interner Index 233 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xDB | interner Index 234 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xDC | interner Index 235 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x95 | interner Index 236 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x0F | interner Index 237 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x11 | interner Index 238 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x44 | interner Index 239 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x59 | interner Index 240 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x5E | interner Index 241 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x5F | interner Index 242 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x60 | interner Index 243 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x61 | interner Index 244 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x62 | interner Index 245 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0x63 | interner Index 246 | 0x00 | 0x01 | 0x02 | 0x03 |
| 0xXY | unbekannter Fehlerort | 0xFF | 0xFF | 0xFF | 0xFF |

### PROGRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | Programmierung in Ordnung |
| 0x02 | Programmierung nicht in Ordnung |
| 0x03 | Speicherzelle nicht geloescht |
| 0x04 | Kopieren bzw. Sichern AIF nicht moeglich |
| 0x05 | Kopieren bzw. Sichern ZIF nicht moeglich |
| 0x06 | Programmierspannung zu niedrig/Bootmode-Feld voll |
| 0x07 | Programmprogrammiersitzung aktiv |
| 0x08 | Datenprogrammiersitzung aktiv |
| 0x09 | BRIF Hardwarereferenz unplausibel |
| 0x0A | ZIF Programmreferenz unplausibel |
| 0x0B | Programm- und Hardwarereferenz passen nicht zueinander |
| 0x0C | Programm unvollstaendig |
| 0x0D | DIF Datenreferenz unplausibel |
| 0x0E | Programm- und Datenreferenz passen nicht zueinander |
| 0x0F | Daten unvollstaendig |
| 0xXY | Kein vereinbartes Verify-Byte! |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x83 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x0B | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x84 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x0C | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x85 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x0C | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x86 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x0C | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x9B | 0x00 | 0xF6 | 0x00 | 0xF0 | 0x00 | 0xF1 | 0x00 | 0xF2 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x96 | 0x00 | 0xF3 | 0x00 | 0xF4 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x09 | 0x00 | 0x06 | 0x00 | 0x16 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x46 | 0x00 | 0x06 | 0x00 | 0x16 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x45 | 0x00 | 0x06 | 0x00 | 0x16 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x47 | 0x00 | 0x06 | 0x00 | 0x16 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x97 | 0x00 | 0xF5 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x98 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0xFA | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x56 | 0x00 | 0x0D | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x88 | 0x00 | 0xE0 | 0x00 | 0xE1 | 0x00 | 0xE2 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x8B | 0x00 | 0xE9 | 0x00 | 0xE9 | 0x00 | 0xE9 | 0x00 | 0xE9 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x9F | 0x00 | 0x17 | 0x00 | 0x07 | 0x00 | 0xF7 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xA0 | 0x00 | 0x17 | 0x00 | 0x07 | 0x00 | 0xF7 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xA1 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x0E | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xA2 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xE3 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xA3 | 0x00 | 0xF8 | 0x00 | 0xF9 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x4E | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xE4 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x49 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xE5 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x6B | 0x00 | 0x06 | 0x00 | 0xE6 | 0x00 | 0xE7 | 0x00 | 0xFA | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x6F | 0x00 | 0x06 | 0x00 | 0xE8 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x70 | 0x00 | 0x06 | 0x00 | 0xE8 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x71 | 0x00 | 0x18 | 0x00 | 0x19 | 0x00 | 0x1A | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x72 | 0x00 | 0x18 | 0x00 | 0x19 | 0x00 | 0x1A | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x75 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0xE9 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x78 | 0x00 | 0x06 | 0x00 | 0xE8 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x79 | 0x00 | 0x06 | 0x00 | 0xE8 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xAA | 0x00 | 0x06 | 0x00 | 0xEA | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xAB | 0x00 | 0xEB | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xAD | 0x00 | 0xEC | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xE7 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0xFA | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x2C | 0x00 | 0xED | 0x00 | 0xEE | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x7A | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0xFA | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x90 | 0x00 | 0x1B | 0x00 | 0x1C | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x91 | 0x00 | 0x1B | 0x00 | 0x1C | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x50 | 0x00 | 0x1D | 0x00 | 0x07 | 0x00 | 0x1E | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x9E | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0xFA | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xAE | 0x00 | 0x1B | 0x00 | 0x1C | 0x00 | 0xFA | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xAF | 0x00 | 0x1B | 0x00 | 0x1C | 0x00 | 0xFA | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xB0 | 0x00 | 0x1B | 0x00 | 0x1C | 0x00 | 0xFA | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xB1 | 0x00 | 0x1B | 0x00 | 0x1C | 0x00 | 0xFA | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xB2 | 0x00 | 0xD7 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xB3 | 0x00 | 0xD7 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x1C | 0x00 | 0xE0 | 0x00 | 0xE1 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x12 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xFB | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x25 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xEF | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x26 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xEF | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x27 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xEF | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x28 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xEF | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x5A | 0x00 | 0xD0 | 0x00 | 0xD1 | 0x00 | 0xD2 | 0x00 | 0xD3 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x5B | 0x00 | 0xD0 | 0x00 | 0xD1 | 0x00 | 0xD2 | 0x00 | 0xD3 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x5C | 0x00 | 0xD4 | 0x00 | 0xD5 | 0x00 | 0xD6 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0x5D | 0x00 | 0xD4 | 0x00 | 0xD5 | 0x00 | 0xD6 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xB6 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xFB | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xB7 | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xFB | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xB8 | 0x00 | 0x18 | 0x00 | 0x19 | 0x00 | 0x1A | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xB9 | 0x00 | 0x18 | 0x00 | 0x19 | 0x00 | 0x1A | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xC4 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xC5 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xC6 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xC7 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xC8 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xC9 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xCA | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xCB | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xCC | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xCD | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xCE | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xCF | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xD0 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xD1 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xD2 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xD3 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xD4 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xD5 | 0x00 | 0xC1 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0xC0 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |
| 0xXY | 0x00 | 0x06 | 0x00 | 0x07 | 0x00 | 0x08 | 0x00 | 0x09 | 0x00 | 0x0A | 0x00 | 0x01 | 0x03 | 0x02 | 0x04 | 0x05 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Fehler nach Entprellung abgespeichert |
| 0x02 | Fehler momentan vorhanden |
| 0x03 | Fehler momentan nicht vorhanden |
| 0x04 | statischer Fehler |
| 0x05 | sporadischer Fehler |
| 0x06 | Kurzschluss nach UBatt / Wert zu gross |
| 0x07 | Kurzschluss nach Masse / Wert zu klein |
| 0x08 | Leitungsbruch / Wert fehlt |
| 0x09 | Zustand / Wert unplausibel / Uebertemperatur |
| 0x0A | Fehler abgasrelevant OBD |
| 0x0B | Telegramminhalt unplausibel |
| 0x0C | Telegramm nicht empfangen |
| 0x0D | zu viele Botschaften |
| 0x0E | Timeout |
| 0x16 | Signalpegel zu niedrig |
| 0x17 | Signalpegel zu gross |
| 0x18 | Istwert zu gross |
| 0x19 | Istwert zu klein |
| 0x1A | Sollwert nicht erreicht |
| 0x1B | Oberer Regleranschlag |
| 0x1C | Unterer Regleranschlag |
| 0x1D | Kraftschluss im Stillstand |
| 0x1E | Kein Kraftschluss bei Fahrt |
| 0xC0 | KAT schaedigend |
| 0xC1 | Abgas verschlechternd |
| 0xD0 | TV-Verschiebung nach KAT zu gross |
| 0xD1 | TV-Verschiebung vor KAT zu gross |
| 0xD2 | Periodendauer zu gross |
| 0xD3 | Periodendauer zu klein |
| 0xD4 | kein positiver Gradient |
| 0xD5 | kein negativer Gradient |
| 0xD6 | Sondenspannung im Schub unplausibel |
| 0xD7 | Grenzwert ueberschritten |
| 0xE0 | klemmt offen |
| 0xE1 | klemmt geschlossen |
| 0xE2 | Leckluft |
| 0xE3 | Signallage unplausibel |
| 0xE4 | Anstiegsrampe unplausibel |
| 0xE5 | Signal unplausibel gegen Fuellung |
| 0xE6 | Lageregler reagiert nicht |
| 0xE7 | Adaptionslauf erfolgt nicht |
| 0xE8 | Abweichung gegen zweites Poti zu gross |
| 0xE9 | DSC meldet V-Fehler |
| 0xEA | Durchfluss zu klein |
| 0xEB | Ventil klemmt |
| 0xEC | Schalter klemmt |
| 0xED | Pulsbreite zu gross |
| 0xEE | Pulsbreite zu klein |
| 0xEF | Heizung defekt |
| 0xF0 | Keine Adaptionen und Abgleichwerte gespeichert |
| 0xF1 | Fehlerspeicher Pruefsumme falsch |
| 0xF2 | Kein Fehlerspeicher gespeichert |
| 0xF3 | RAM-Fehler |
| 0xF4 | ROM-Fehler |
| 0xF5 | Pruefwort nicht erkannt |
| 0xF6 | Kein EWS-Wechselcode gespeichert |
| 0xF7 | internes Interface gestoert |
| 0xF8 | Watchdog-Reset |
| 0xF9 | Software-Reset |
| 0xFA | Kontrollprozessor antwortet nicht |
| 0xFB | Treiberabschaltung wegen Ueberlast |
| 0xXY | unbekannte Fehlerart |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | UWF_A | UWF_B |
| --- | --- | --- | --- | --- |
| 0x00 | Motordrehzahl | 1/min | 40 | 0 |
| 0x01 | relative Fuellung | % | 0.8 | 0 |
| 0x02 | Kuehlwassertemp. | Grad C | 1 | -48 |
| 0x03 | Versorgungsspannung HR | V | 0.1 | 0 |
| 0x04 | Geschwindigkeit CAN | km/h | 2.0 | 0 |
| 0x05 | Geschwindigkeit diskret | km/h | 4.0 | 0 |
| 0x06 | Leerlauf Verlustadapt. | Nm | 0.4 | 0 |
| 0x07 | Leerlaufsolldrehzahl | 1/min | 64 | 0 |
| 0x08 | AVANOS 2 Soll | GradKW | 0.8 | 0 |
| 0x09 | AVANOS 2 Ist | GradKW | 0.8 | 0 |
| 0x0A | Umgebungstemp. CAN | Grad C | 1 | -48 |
| 0x0B | Ansauglufttemperatur | Grad C | 1 | -48 |
| 0x0C | Kuehleraustrittstemp. | Grad C | 1 | -48 |
| 0x0D | Sensorversorgung 1 | V | 0.0391 | 0 |
| 0x0E | Sensorversorgung 2 | V | 0.0391 | 0 |
| 0x0F | Zustand EGAS | - | 1 | 0 |
| 0x10 | EDK-Steller Istwert | % | 0.1 | 0 |
| 0x11 | Oeltemperatur TOG | Grad C | 1 | -48 |
| 0x12 | Gesamtluftmasse | kg/h | 4 | 0 |
| 0x17 | Drosselklappenwinkel | % | 3.2 | 0 |
| 0x18 | KFK-Steller Istwert | % | 0.4 | 0 |
| 0x19 | Tastverh. Tankentlueftung | % | 0.78125 | 0 |
| 0x1A | Adaptionsfaktor Einspr. 1 | - | 0.0078125 | 0 |
| 0x1B | Adaptionsfaktor Einspr. 2 | - | 0.0078125 | 0 |
| 0x1C | Spg. Lambdasonde 1 v. Kat | mV | 8.0 | 0 |
| 0x1D | Spg. Lambdasonde 2 v. Kat | mV | 8.0 | 0 |
| 0x1E | Spg. Lambdasonde 1 n. Kat | mV | 8.0 | 0 |
| 0x1F | Spg. Lambdasonde 2 n. Kat | mV | 8.0 | 0 |
| 0x20 | Sondenheizwiderst. 1 v. Kat | Ohm | 25.6 | 0 |
| 0x21 | Sondenheizwiderst. 2 v. Kat | Ohm | 25.6 | 0 |
| 0x22 | Sondenheizwiderst. 1 n. Kat | Ohm | 25.6 | 0 |
| 0x23 | Sondenheizwiderst. 2 n. Kat | Ohm | 25.6 | 0 |
| 0x24 | Zustand Sonden-Messung 1 | - | 1.0 | 0 |
| 0x25 | Zustand Sonden-Messung 2 | - | 1.0 | 0 |
| 0x26 | Integral TV-Versch. n. Kat 1 | ms | 10 | 0 |
| 0x27 | Integral TV-Versch. n. Kat 2 | ms | 10 | 1 |
| 0x28 | Status Sicherheitsueberw. | - | 1.0 | 0 |
| 0x29 | Lambda-Adaptionsoffset 1 | ms | 0.016 | 0 |
| 0x2A | Lambda-Adaptionsoffset 2 | ms | 0.016 | 0 |
| 0x2B | Lambda-Regelfaktor 1 | - | 0.0078125 | 0 |
| 0x2C | Lambda-Regelfaktor 2 | - | 0.0078125 | 0 |
| 0x2D | Lambda-Adaptionsfaktor 1 | - | 0.0078125 | 0 |
| 0x2E | Lambda-Adaptionsfaktor 2 | - | 0.0078125 | 0 |
| 0x2F | Guete KAT-Konvertierung 1 | - | 127.5 | 0 |
| 0x30 | Guete KAT-Konvertierung 2 | - | 127.5 | 0 |
| 0x31 | Zustand Nach-Kat-Sonde 1 | - | 1.0 | 0 |
| 0x32 | Zustand Nach-Kat-Sonde 2 | - | 1.0 | 0 |
| 0x33 | Grenzwertueberschreitungen 1 | - | 1.0 | 0 |
| 0x34 | Grenzwertueberschreitungen 2 | - | 1.0 | 0 |
| 0x35 | Zustand Tankentlueftung | - | 1.0 | 0 |
| 0x36 | Umgebungsdruck | mbar | 3.0 | 500.0 |
| 0x37 | LDP-Referenzstrom | mA | 0.576 | 0 |
| 0x38 | LDP-Messstrom | mA | 0.576 | 0 |
| 0x39 | Tankfuelstand (CAN) | l | 1.0 | 0 |
| 0x3A | Status NKAT-Alterung | - | 1.0 | 0 |
| 0x3B | KAT-Temperatur | Grad C | 16.0 | 0 |
| 0x3C | Tankentlueftungsadaption 1 | -C | 0.0078125 | 0 |
| 0x3D | Tankentlueftungsadaption 2 | -C | 0.0078125 | 0 |
| 0x3E | Sondenhub 1 (max-min) | mV | 8.0 | 0 |
| 0x3F | Sondenhub 2 (max-min) | mV | 8.0 | 0 |
| 0x40 | P-Sprungzaehler 1 | - | 1.0 | 0 |
| 0x41 | P-Sprungzaehler 2 | - | 1.0 | 0 |
| 0x42 | Magersprungzeitguete 1 | - | 0.5 | 0 |
| 0x43 | Magersprungzeitguete 2 | - | 0.5 | 0 |
| 0x44 | Fettsprungzeitguete 1 | - | 0.5 | 0 |
| 0x45 | Fettsprungzeitguete 2 | - | 0.5 | 0 |
| 0x46 | LDP-Minimalstrom | mA | 0.576 | 0 |
| 0x47 | LDP-Messzeit | s | 25.6 | 0 |
| 0x48 | Abweich. Adaptionsoffset 1 | - | 0.0078125 | 0 |
| 0x49 | Abweich. Adaptionsoffset 2 | - | 0.0078125 | 0 |
| 0x4A | Laengsbeschleunigung | m/s^2 | 0.1 | 0 |
| 0x4B | Querbeschleunigung | m/s^2 | 0.1 | 0 |
| 0x4E | Tankfuellstand | l | 1 | 0 |
| 0xFF | Umweltbed. unbekannt | - | 1 | 0 |
| 0xXY | ---- | ---- | 1 | 0 |

### NULLEINSTEXTE

| SELECTOR | 0 | 1 |
| --- | --- | --- |
| AE | AUS | EIN |
| OZ | AUF | ZU |
| AA | AUS | AKTIV |
| XY | --?-- | --?-- |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_SG_REJECTED |
| 0xB0 | ERROR_SG_PARAMETER |
| 0xB1 | ERROR_SG_FUNCTION |
| 0xB2 | ERROR_SG_NUMBER |
| 0xFF | ERROR_SG_NACK |
| 0x00 | ERROR_SG_UNBEKANNTES_STATUSBYTE |

### IORESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Ansteuerung erfolgt |
| 0x01 | Keine Ansteuerung fuer diese Nummer |
| 0x02 | Tastverhaeltnis ungueltig |
| 0x03 | Periodendauer ungueltig |
| 0x04 | Ansteuerbedingung nicht erfuellt |
| 0xXY | Kein vereinbartes Verify-Byte! |

### CODIER_CS

| MASK | MESS |
| --- | --- |
| 0x00 | Bootsektor Master |
| 0x01 | Programm Master |
| 0x02 | Daten Master |
| 0x03 | (unbenutzt) |
| 0x04 | Bootsektor Slave |
| 0x05 | Programm Slave |
| 0x06 | Daten Slave |
| 0x07 | (unbenutzt) |

### LDPSTATUS

| SB | COND | STATUS_TEXT |
| --- | --- | --- |
| 0x00 | BRK | 0 ABBRUCH_GRUNDZUSTAND |
| 0x01 | WAIT | 1_WARTEN_BEREIT |
| 0x02 | WAIT | 2_WARTEN_ZUENDUNG_EIN |
| 0x03 | WAIT | 3_WARTEN_GESCHWINDIGKEIT |
| 0x04 | WAIT | 4_WARTEN_DREHZAHL |
| 0x05 | WAIT | 5_WARTEN_BORDNETZSPANNUNG |
| 0x06 | WAIT | 6_WARTEN_MINIMALDRUCK |
| 0x07 | WAIT | 7_WARTEN_TEMPERATUR |
| 0x08 | WAIT | 8_WARTEN_FUELLSTAND |
| 0x09 | WAIT | 9_WARTEN_TANKENTLUEFTUNG |
| 0x0A | WAIT | 10_WARTEN_DIAGNOSEBEFEHL |
| 0x0B | WAIT | 11_WARTEN_FEHLER_LOESCHEN |
| 0x0C | WAIT | 12_WARTEN_VENTIL_FEHLER |
| 0x0D | WAIT | 13_WARTEN |
| 0x0E | WAIT | 14_WARTEN |
| 0x0F | WAIT | 15_WARTEN |
| 0x10 | WAIT | 16_WARTEN |
| 0x11 | WAIT | 17_WARTEN |
| 0x12 | WAIT | 18_WARTEN |
| 0x13 | WAIT | 19_WARTEN |
| 0x14 | STATE | 20_STATUS_START |
| 0x15 | STATE | 21_STATUS_REFERENZLECK |
| 0x16 | STATE | 22_STATUS_VENTILCHECK |
| 0x17 | STATE | 23_STATUS_TANKDECKELTEST |
| 0x18 | STATE | 24_STATUS_GROBLECKTEST |
| 0x19 | STATE | 25_STATUS_FEINLECKTEST |
| 0x1A | STATE | 26_STATUS_TANKDECKELTEST2 |
| 0x1B | STATE | 27_STATUS_GROBLECKTEST2 |
| 0x1C | STATE | 28_STATUS_FEINLECKTEST2 |
| 0x1D | STATE | 29_STATUS |
| 0x1E | STATE | 30_STATUS |
| 0x1F | STATE | 31_STATUS |
| 0x20 | RSLT | 32_ERGEBNIS_DECKEL_DICHT |
| 0x21 | RSLT | 33_ERGEBNIS_GROB_DICHT |
| 0x22 | RSLT | 34_ERGEBNIS_FEIN_DICHT |
| 0x23 | RSLT | 35_ERGEBNIS_DECKEL_FEHLT |
| 0x24 | RSLT | 36_ERGEBNIS_GROBLECK |
| 0x25 | RSLT | 37_ERGEBNIS_FEINLECK |
| 0x26 | RSLT | 38_ERGEBNIS |
| 0x27 | RSLT | 39_ERGEBNIS |
| 0x28 | BRK | 40_ABBRUCH_UB_INSTABIL |
| 0x29 | BRK | 41_ABBRUCH_I_INSTABIL |
| 0x2A | BRK | 42_ABBRUCH_TEV_FEHLER |
| 0x2B | BRK | 43_ABBRUCH_KL15_EIN |
| 0x2C | BRK | 44_ABBRUCH_DREHZAHL |
| 0x2D | BRK | 45_ABBRUCH_GESCHWINDIGKEIT |
| 0x2E | BRK | 46_ABBRUCH_PUMPENKURZSCHLUSS |
| 0x2F | BRK | 47_ABBRUCH_DIAGNOSEBEFEHL |
| 0x30 | BRK | 48_ABBRUCH_REFERENZSTROM_HI |
| 0x31 | BRK | 49_ABBRUCH_REFERENZSTROM_LO |
| 0x32 | BRK | 50_ABBRUCH_VERSTOPFT |
| 0x33 | BRK | 51_ABBRUCH_NACHTANKEN |
| 0x34 | BRK | 52_ABBRUCH_TANKDECKEL_FEHLT |
| 0x35 | BRK | 53_ABBRUCH_EKP_CRASH_OFF |
| 0x36 | BRK | 54_ABBRUCH_SPANNUNGSCHWANKUNG |
| 0x37 | BRK | 55_ABBRUCH |
| 0x38 | BRK | 56_ABBRUCH |
| 0x39 | BRK | 57_ABBRUCH |
| 0xXY | BRK | STATUS_UNBEKANNT |

### SLSSTATUS

| SB | COND | STATUS_TEXT |
| --- | --- | --- |
| 0x00 | BRK | 0 ABBRUCH_GRUNDZUSTAND |
| 0x01 | RSLT | 1_SLS_OK |
| 0x02 | RSLT | 2_SLS_FEHLER |
| 0x04 | RSLT | 4_ABBRUCH |
| 0x40 | STATE | 32_TEST_LAEUFT |
| 0xXY | BRK | STATUS_UNBEKANNT |
