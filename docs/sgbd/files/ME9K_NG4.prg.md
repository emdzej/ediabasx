# ME9K_NG4.prg

## General

|  |  |
| --- | --- |
| File | ME9K_NG4.prg |
| Type | PRG |
| Jobs | 177 |
| Tables | 29 |
| Origin | BMW TI-431 Schaller |
| Revision | 1.05 |
| Author | Greppmair, BMW EA-33 Zaller, BMW TI-431 Schaller |
| ECU Comment | SGBD fuer ME9.2/N42 mit KWP2000* UND PCODES |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ME9.2 fuer NG-Motoren |  |  |
| ORIGIN | string | BMW TI-431 Schaller |  |  |
| REVISION | string | 1.05 |  |  |
| AUTHOR | string | Greppmair, BMW EA-33 Zaller, BMW TI-431 Schaller |  |  |
| COMMENT | string | SGBD fuer ME9.2/N42 mit KWP2000* UND PCODES |  |  |
| PACKAGE | string | 1.04 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### SERIENNUMMER_LESEN

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### DATEN_REFERENZ_LESEN

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier $2504 DREF Modus  : Default

_No arguments._

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

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### IDENT

Identdaten fuer DME auslesen

_No arguments._

### IDENT_AIF

Identdaten fuer DME auslesen

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### ADAP_SELEKTIV_LOESCHEN

Loeschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | gibt an was fuer ein Wert geloescht werden soll |
| AUSWAHLBYTE_2 | int | gibt an was fuer ein Wert geloescht werden soll |

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

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | die Nummer EINES zu loeschenden Fehlers, wenn 0 dann werden alle geloescht |

### SEED_KEY

Schutzmechanismus SEED_KEY

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

### STEUERN_E_LUEFTER

Stellgliedansteuerung E-Luefter

| Name | Type | Description |
| --- | --- | --- |
| TASTRATE | int | zwischen 0 und 100 % Ansteuerverhaeltins |

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

| Name | Type | Description |
| --- | --- | --- |
| ANSTEUERRATE | int | Sollwert 0 - 100% |

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

### STEUERN_LSU_TEST

Diagnosefunktion LSU-Test

_No arguments._

### STEUERN_LSU_TEST_ENDE

Diagnosefunktion LLSU-Test

_No arguments._

### STEUERN_KOMPR_TEST

Kompresionstest mit VVT und konstanntem DK-Winkel

_No arguments._

### STEUERN_KOMPR_TEST_ENDE

Beenden Kompresionstestt

_No arguments._

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

### FS_LESEN_DETAIL

Fehlerspeicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers im Fehlerspeicher uebergeben |

### STATUS_GEMISCH

Auslesen von Gemischwerten

_No arguments._

### STATUS_AUSGAENGE

Auslesen von Ausgaengen

_No arguments._

### STATUS_NWGADAPTION

Auslesen der NWG-Adaptionen

_No arguments._

### STATUS_FASTA1

Auslesen FASTA-Messwertblock 1

_No arguments._

### STATUS_FASTA2

Auslesen FASTA-Messwertblock 2

_No arguments._

### STATUS_FASTA3

Auslesen FASTA-Messwertblock 3

_No arguments._

### STATUS_FASTA4

Auslesen FASTA-Messwertblock 4

_No arguments._

### STATUS_FASTA5

Auslesen FASTA-Messwertblock 5

_No arguments._

### STATUS_FASTA6

Auslesen FASTA-Messwertblock 6

_No arguments._

### STATUS_ADC

Auslesen ADC-Werte

_No arguments._

### STATUS_FGR

FGR-Stati auslesen

_No arguments._

### STATUS_READINESS

READINESS - Flags lesen

_No arguments._

### STATUS_ZYKLUSFLAG

Loeschen des Fehlerspeichers

| Name | Type | Description |
| --- | --- | --- |
| TROUBLE_CODE | int | TroubleCodeNumber |

### STATUS_KVA

Lesen des KVA-Wertes

_No arguments._

### STEUERN_KVA

Loeschen des Fehlerspeichers

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | int | KVA-Wert |

### STATUS_MIL

Lesen des MIL-STatus

_No arguments._

### STEUERN_MIL

Loeschen des Fehlerspeichers

| Name | Type | Description |
| --- | --- | --- |
| MIL_WERT | int | KVA-Wert |

### STATUS_BATTERIEORT

Batteriort abfragen

_No arguments._

### STEUERN_BATTERIEORT

Batterieort programmieren

| Name | Type | Description |
| --- | --- | --- |
| BATTERIEORT_WERT | int | Wert |

### STEUERN_LLABG

LL-Abgleichswerte werden vorgegeben

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne FS |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne FS |
| DNSLBV | int | Abgleichswert LL aus %LLRUB, niedriger UBatt |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit FS |
| DNFSMV | int | Abgleichswert LL mit FS |

### STEUERN_LLABG_PROG

LL-Abgleichswerte werden programmiert

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne FS |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne FS |
| DNSLBV | int | Abgleichswert LL aus %LLRUB, niedriger UBatt |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit FS |
| DNFSMV | int | Abgleichswert LL mit FS |

### STATUS_LLABG

LL-Abgleichswerte werden gelesen

_No arguments._

### STATUS_VARIANTE

Auslesen der Variante

_No arguments._

### STATUS_MINHUB

Lesen des MINHUB-Wertes

_No arguments._

### STEUERN_MINHUB

Vorgeben des MINHUB-Wertes

| Name | Type | Description |
| --- | --- | --- |
| MINHUB_WERT | int | MINHUB-Wert in 1/1000mm |

### STEUERN_MINHUB_PROG

Vorgeben des MINHUB-Wertes

| Name | Type | Description |
| --- | --- | --- |
| MINHUB_WERT | int | MINHUB-Wert in 1/1000mm |

### STATUS_DBAW

Lesen des DBAW-Status, Zahlerwerte

_No arguments._

### STEUERN_GD_VOLLHUB

Umschaltung Motor auf gedrosselt mit Vollhub

| Name | Type | Description |
| --- | --- | --- |
| DBAW_WERT | char | DBAW-Wert (0=aus,1=ein) |

### STATUS_ZUHEIZEN

Lesen von Statuswerten über DIREKTES RAM-Lesen (nur fuer SW560 bzw. 570!!)

_No arguments._

### STATUS_GEBERRAD_ADAPTION

Auslesen der NWG-Adaptionen

_No arguments._

### STATUS_DIGITAL

Auslesen von SchalterStatusflags

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Auslesen des Pedalwertgebers

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Status Systemtest DMTL

_No arguments._

### STOP_SYSTEMCHECK_DMTL

Ende Systemtest DM-TL

_No arguments._

### START_SYSTEMCHECK_TEV_FUNC

Systemtest von TEV

_No arguments._

### STATUS_SYSTEMCHECK_TEV_FUNC

Status Systemtest TEV

_No arguments._

### STOP_SYSTEMCHECK_TEV_FUNC

Beenden von TEV-Systemtest

_No arguments._

### START_SYSTEMCHECK_LSU

Systemdiagnose LSU starten

_No arguments._

### STATUS_SYSTEMCHECK_LSU

Status Systemdiagnose LSU

_No arguments._

### STOP_SYSTEMCHECK_LSU

Ende Systemdiagnose LSU

_No arguments._

### START_SYSTEMCHECK_LSH

Start der Systemdiagnose LSH

_No arguments._

### STATUS_SYSTEMCHECK_LSH

Status LSH-Diagnose auslesen

_No arguments._

### STOP_SYSTEMCHECK_LSH

Ende der Systemdiagnose LSH

_No arguments._

### EWS_STARTWERT

EWS-Startwertinitialisierung

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | Parameter zur Initialisierung |

### EWS_EMPFANG

EWS-Empfangsstatus auslesen

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

### STATUS_L_SONDE_H

Auslesen der Lambdasonden Spg.

_No arguments._

### STATUS_L_SONDE_2_H

Auslesen der Lambdasonden Spg. Bank2

_No arguments._

### STATUS_INT

Auslesen der Lambdaregelung

_No arguments._

### STATUS_INT_2

Auslesen der Lambdaregelung Bank2

_No arguments._

### STATUS_ADD

Auslesen des additiven Lambdaregelung

_No arguments._

### STATUS_ADD_2

Auslesen des additiven Lambdaregelung Bank2

_No arguments._

### STATUS_MUL

Auslesen des multipikativen Lambdaregelung

_No arguments._

### STATUS_MUL_2

Auslesen des multipikativen Lambdaregelung Bank2

_No arguments._

### STATUS_UBATT

Auslesen der Batteriespg.

_No arguments._

### STATUS_MOTORLAUFUNRUHE

Auslesen von Laufunruhewerten

_No arguments._

### START_SYSTEMCHECK_SEK_LUFT

Systemdiagnose SLS

_No arguments._

### LESEN_SYSTEMCHECK_SEK_LUFT

Status Systemdiagnose SLS

_No arguments._

### STOP_SYSTEMCHECK_SEK_LUFT

Ende Systemdiagnose SLS

_No arguments._

### STATUS_RAM_LESEN

Beliebige RAM - Zellen auslesen

| Name | Type | Description |
| --- | --- | --- |
| RAM_LESEN_ADRESSE | long | Uebergabeparameter, Startadresse High-Middle-Low |

### STATUS_CO_ABGLEICH

Auslesen des LL-CO-Wertes

_No arguments._

### STEUERN_CO_ABGLEICH_VERSTELLEN

LL-CO-Wert vorgeben

| Name | Type | Description |
| --- | --- | --- |
| CO_WERT | int | LL CO-Abgleichswert |

### STEUERN_CO_ABGLEICH_PROGRAMMIEREN

LL-CO-WERT programmieren

| Name | Type | Description |
| --- | --- | --- |
| CO_FEST | int | LL CO-Abgleichswert |

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### STATUS_BETRIEBSSTUNDEN

Auslesen des Betriebsstudenzaehlers

_No arguments._

### VARIANTE_LOESCHEN

Loeschen der Varianten

_No arguments._

### SLP_CONFIG

Auslesen des Sekundaersystems anhand des Datenstandes

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0D | KWP2000* |
| 0x06 | DS2 |

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
| 0xFF | unbekannter Hersteller |

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
| ?A0? | ERROR_DIAG_PROT |
| ?A1? | ERROR_SG_ADRESSE |
| ?A2? | ERROR_SG_MAXANZAHL_AIF |
| ?A3? | ERROR_SG_GROESSE_AIF |
| ?A4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?A5? | ERROR_SG_AUTHENTISIERUNG |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x2711 | CDKLDPE - Leckage Diagnosepumpe Endstufe |
| 0x2712 | CDKDMMVE - Ansteuerung Magnetventil DM-TL |
| 0x2713 | CDKLSVV - Vertauschte Lambdasonden |
| 0x2714 | CDKHSH2 - Lambdasonden-Heizung hinter Kat (Bank2) |
| 0x2715 | CDKHSV2 - Lambdasonden-Heizung vor Kat (Bank2) |
| 0x2716 | CDKHSHE - Ansteuerung Heizung Sonde hinter Kat |
| 0x2717 | CDKHSHE2 - Ansteuerung Heizung Sonde hinter Kat (Bank2) |
| 0x2718 | CDKNZ - Drehzahlgeber Zahnfehler |
| 0x2719 | CDKDGZ - Drehzahlgeber Periodenzeit |
| 0x271A | CDKLSV - Lambda-Sonde vor Kat |
| 0x271B | CDKLSV - Lambda-Sonde vor Kat |
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
| 0x2728 | CDKFRAO - Adaption multiplikativ Bereich2 |
| 0x2729 | CDKFRAO2 - Adaption multipl. Bereich2 (Bank2) |
| 0x272A | CDKFRAU - Adaption multiplikativ Bereich1 |
| 0x272B | CDKFRAU2 - Adaption multipl. Bereich1 (Bank2) |
| 0x272C | CDKRKAT - Adaption additiv pro Zeit |
| 0x272D | CDKRKAT2 - Adaption additiv pro Zeit (Bank2) |
| 0x272E | CDKRKAZ - Adaption additiv pro Zuendung |
| 0x272F | CDKRKAZ2 - Adaption additiv pro Zuendung Bank2 |
| 0x2730 | CDKLLRP - Leerlaufregelung fehlerhaft |
| 0x2731 | CDKENWS - Nockenwellensteuerung Einlass - VANOS |
| 0x2732 | CDKENWS2 - NW-Steuerung Einlass B2 (8zyl)/Auslass (4zyl) |
| 0x2733 | CDKSNWDG - NW-KW Synchronfehler |
| 0x2734 | CDKLE - TPS/MAF Plausibilitaet |
| 0x2735 | CDKLE2 -TPS/MAF Plausibilitaet Bank2 |
| 0x2736 | CDKDVPWK - Drosselklappenregler PWM Kurztest |
| 0x2737 | CDKWFS - Wegfahrsperre-Manipulationsschutz |
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
| 0x2743 | CDKMD01 - Aussetzererkennung Zyl.3 |
| 0x2744 | CDKMD02 - Aussetzererkennung Zyl.4 |
| 0x2745 | CDKMD03 - Aussetzererkennung Zyl.2 |
| 0x2746 | CDKMD04 - Aussetzererkennung Zyl. |
| 0x2747 | CDKMD05 - Aussetzererkennung Zyl. |
| 0x2748 | CDKMD06 - Aussetzererkennung Zyl |
| 0x2749 | CDKMD07 - Aussetzererkennung Zyl |
| 0x274A | CDKMD08 - Aussetzererkennung Zyl |
| 0x274B | CDKMD09 - Aussetzererkennung Zyl |
| 0x274C | CDKMD10 - Aussetzererkennung Zyl |
| 0x274D | CDKMD11 - Aussetzererkennung Zyl |
| 0x274E | CDKMD - Aussetzererkennung, Summenfehler |
| 0x274F | CDKMDK - Aussetzer, Summenfehler, kundendienstrelevant |
| 0x2752 | CDKFPPH - Pedalwertgeber Halbplausibilitaet |
| 0x2753 | CDKDZKU0 - Ueberwachung Zuendspule 1 |
| 0x2754 | CDKDZKU1 - Ueberwachung Zuendspule 3 |
| 0x2755 | CDKDZKU2 - Ueberwachung Zuendspule 4 |
| 0x2756 | CDKDZKU3 - Ueberwachung Zuendspule 2 |
| 0x2757 | CDKDZKU4 - Ueberwachung Zuendspule |
| 0x2758 | CDKDZKU5 - Ueberwachung Zuendspule |
| 0x2759 | CDKDZKU6 - Ueberwachung Zuendspule |
| 0x275A | CDKDZKU7 - Ueberwachung Zuendspule |
| 0x275B | CDKDZKU8 - Ueberwachung Zuendspule |
| 0x275C | CDKDZKU9 - Ueberwachung Zuendspule |
| 0x275D | CDKDZKU10 - Ueberwachung Zuendspule |
| 0x275E | CDKDZKU11 - Ueberwachung Zuendspule |
| 0x275F | CDKFPD - Pedalwertgeber defekt |
| 0x2760 | CDKSLS - Sekundaerluftsystem |
| 0x2761 | CDKSLS2 - Sekundaerluftsystem Bank2 |
| 0x2762 | CDKSLV - Sekundaerluftventil |
| 0x2763 | CDKSLV2 - Sekundaerluftventil Bank2 |
| 0x2764 | CDKSLPE - Ansteuerung Relais Sekundaerluftpumpe |
| 0x2765 | CDKSLVE - Ansteuerung Sekundaerluftventil |
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
| 0x2772 | CDKTEVE - Ansteuerung Tankentlueftungsventil |
| 0x2773 | CDKTEVE2 - Tankentlueftungsventil Endstufe Bank2 |
| 0x2774 | CDKMEMUM - Ueberwachung zyklische Fehlerabspeicherung |
| 0x2775 | CDKUFMV - Motormomentueberwachung Ebene 2 |
| 0x2776 | CDKMFL - Schnittstelle-Multifunktionslenkrad |
| 0x2777 | CDKUFSKA - Ueberwachung Rechnerfunktion |
| 0x2778 | CDKKUPPL - Schalter Kupplung |
| 0x2779 | CDKURRAM - SG Selbsttest RAM |
| 0x277A | CDKBREMS - Schalter Bremse |
| 0x277B | CDKURROM - SG Selbsttest ROM |
| 0x277C | CDKURRST - SG Selbsttest Reset |
| 0x277D | CDKUB - Batteriespannung |
| 0x277E | CDKMDB - Momentenbegrenzung Ebene 1 |
| 0x277F | CDKN - Kurbelwellengeber |
| 0x2780 | CDKBM - Bezugsmarkengeber |
| 0x2781 | CDKPH - Nockenwellengeber Einlass |
| 0x2782 | CDKPH2 - Nockenwellengeber Auslass |
| 0x2783 | CDKLM - Heissfilmluftmassenmesser |
| 0x2784 | CDKTHM - Thermostatdiagnose THM |
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
| 0x2792 | CDKDVEL - Drosselklappe - Positionsüberwachung |
| 0x2793 | CDKDVER - DK-Steller Regelbereich |
| 0x2794 | CDKDVEE - DK-Steller Ansteuerung |
| 0x2795 | CDKDVEF - Federpruefung DK-Steller schliessende Feder |
| 0x2796 | CDKDVEU - Drosselklappe - Prüfung unterer Anschlag |
| 0x2797 | CDKDVEV - DK-Steller Fehler bei Verstaerkerabgleich |
| 0x2798 | CDKDVEN - Drosselklappe - Prüfung Notluftpunkt |
| 0x2799 | CDKDVEUB - Abbruch DV-Adaption wegen Umweltbedingungen |
| 0x279A | CDKDVEUW - Drosselklappenadaption - Abbruch bei Wiederlernen |
| 0x279B | CDKTHS - Thermostat klemmt |
| 0x279C | CDKETS - Ansteuerung Thermostat Kennfeldkuehlung |
| 0x279D | CDKMLE - Ansteuerung Motorluefter |
| 0x279E | CDKAKRE - Endstufe Abgasklappe |
| 0x279F | CDKLUEA - Endstufe LuefterA |
| 0x27A0 | CDKELS - Ansteuerung E-Box Luefter |
| 0x27A1 | CDKSLMM2 - Sekundaerluftmassenmesser2 fehlerhaft |
| 0x27A2 | CDKTMP - Temperaturfuehler Motor LR |
| 0x27A3 | CDKCHDEV2 - CAN Timeout HDEV2 SG |
| 0x27A4 | CDKDWA - EWS3.3 Schnittstelle EWS-DME |
| 0x27A6 | CDKEV1 - Ansteuerung Einspritzventil 1 |
| 0x27A7 | CDKEV2 - Ansteuerung Einspritzventil 3 |
| 0x27A8 | CDKEV3 - Ansteuerung Einspritzventil 4 |
| 0x27A9 | CDKEV4 - Ansteuerung Einspritzventil 2 |
| 0x27AA | CDKEV5 - Ansteuerung Einspritzventil |
| 0x27AB | CDKEV6 - Ansteuerung Einspritzventil |
| 0x27AC | CDKEV7 - Ansteuerung Einspritzventil |
| 0x27AD | CDKEV8 - Ansteuerung Einspritzventil |
| 0x27AE | CDKEV9 - Ansteuerung Einspritzventil |
| 0x27AF | CDKEV10 - Ansteuerung Einspritzventil |
| 0x27B0 | CDKEV11 - Ansteuerung Einspritzventil |
| 0x27B1 | CDKEV12 - Ansteuerung Einspritzventil |
| 0x27B3 | CDKEGFE - Diagnose DK/HFM-Abgleich |
| 0x27B4 | CDKDSU - Drucksensor Umgebung |
| 0x27B5 | CDKENWSE - Ansteuerung Einlass-VANOS |
| 0x27B6 | CDKENWSE2 - Ansteuerung Einlass-VANOS Bank2 |
| 0x27B7 | CDKKPE - Ansteuerung Kraftstoffpumpen-Relais |
| 0x27B8 | CDKPDDSS - Plausibilitaet Differenzdrucksensor |
| 0x27B9 | CDKVLS1 - BLS/BTS Plausibilitaet |
| 0x27BA | CDKVLS2 - Endstufe Klimakompressorfreigabe zum Klima-SG |
| 0x27BB | CDKANWS - Nockenwellensteuerung Auslass-VANOS |
| 0x27BC | CDKANWS2 - Nockenwellensteuerung Auslass-VANOS Bank2 |
| 0x27BD | CDKANWSE - Ansteuerung Auslass-VANOS |
| 0x27BE | CDKANWSE2 - Endstufe Auslass-VANOS Bank2 |
| 0x27BF | CDKPH3 - Nockenwellengeber Einlass Bank2 |
| 0x27C0 | CDKPH4 - Nockenwellengeber Auslass Bank2 |
| 0x27C1 | CDKPHM - Master Nockenwellengeber |
| 0x27C2 | CDKKOSE - Ansteuerung Klimakompressor-Relais |
| 0x27C3 | CDKTOENS - Signal Oelniveausensor (TOENS) |
| 0x27C6 | CDKTESK - LDP Diagnose Feinleck |
| 0x27C7 | CDKTESG - LDP Diagnose Grobleck |
| 0x27C8 | CDKLDP - LDP System |
| 0x27C9 | CDKLDP - Leckdiagnosemodul |
| 0x27CA | CDKDMPME - Ansteuerung DM-TL Pumpenmotor |
| 0x27CB | CDKDMTKNM - DM-TL Feinstleck (0,5mm) MIL aus |
| 0x27CC | CDKDMTK - DM-TL Grob & Feinleck |
| 0x27CE | CDKUFRLIP - Lastsensorueberwachung |
| 0x27CD | CDKDMTL - DM-TL Modul |
| 0x27CF | CDKZZ1 - Zuendzeit Zyl1 |
| 0x27D0 | CDKZZ2 - Zuendzeit Zyl3 |
| 0x27D1 | CDKZZ3 - Zuendzeit Zyl4 |
| 0x27D2 | CDKZZ4 - Zuendzeit Zyl2 |
| 0x27D5 | CDKLLR - Leerlaufregelung fehlerhaft |
| 0x27D6 | CDKISA2 - Endstufe Leerlaufregelung Steller Zu |
| 0x27D7 | DDKISA1 - Endstufe Leerlaufregelung Steller Auf |
| 0x27D8 | CDKVP - Fehler Unterdruckpumpe |
| 0x27D9 | CDKDHDMTE - Endstufe DM-TL Heizung |
| 0x27DA | CDKDGEN - Generatorfehler |
| 0x27DC | CDKWCA - EWS3.3 Wechselcode-Abspeicherung |
| 0x27E1 | CDKUFSPSC - Pedalwertgeberueberwachung |
| 0x27E2 | CDKKS1 - Klopfsensor1 |
| 0x27E3 | CDKKS2 - Klopfsensor2 Bank1 |
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
| 0x27EF | CDKCACC  - CAN ACC-Signalfehler |
| 0x27F0 | CDKAS - Plausibilitaet MSR-Eingriff |
| 0x27F1 | CDKACC - Plausibilitaet ACC-Eingriff |
| 0x27F3 | CDKCVVT - CAN-Timeout VVT-Steuergeraet |
| 0x27F4 | CDKCVVT2 - CAN-Timeout VVT-Steuergeraet Bank2 |
| 0x27F5 | CDKCDMEL - CAN-Timeout DME-Steuergeraet |
| 0x27F6 | CDKFPP - Pedalwertgeber |
| 0x27F7 | CDKFP1P - Pedalwertgeber Poti1 |
| 0x27F8 | CDKFP2P - Pedalwertgeber Poti2 |
| 0x27F9 | CDKSTAE - Startautomatik Ansteuerung |
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
| 0x2816 | CDKUFNC - Motordrehzahlüberwachung |
| 0x281E | CDKSUE - Ansteuerung DISA |
| 0x281F | CDKSUR - DISA-Lagerueckmeldung |
| 0x2823 | CDKHSVSA - Heizung Lambdasonde vor Kat (Schubspannung) |
| 0x2824 | CDKHSVSA2 - Heizung Lambdasonde v. Kat Bank2 (Schubspannung) |
| 0x2825 | CDKLAVH - Lambdasondenalterung h. Kat (VL-Prüfung) |
| 0x2826 | CDKLAVH2 - Lambdasondenalterung h. Kat Bank2 (VL-Prüfung) |
| 0x2828 | CDKCARS  - CAN ARS-Signalfehler |
| 0x2829 | CDKCCAS  - CAN CAS-Signalfehler |
| 0x282A | CDKCIHKA  - CAN IHKA-Signalfehler |
| 0x282B | CDKCPWML  - CAN PWML-Signalfehler |
| 0x282C | CDKCSZL  - CAN SZL-Signalfehler |
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
| 0x283E | CDKVVTE - VVT Enable Ansteuerung |
| 0x283F | CDKPOELS - Plausibilitaet Oeldruckschalter |
| 0x2841 | CDKLUVE - Luftumfasste Einspritzventile Ansteuerung |
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
| 0x2860 | CDKDVEST - VVT-Ansteuerung |
| 0x2861 | CDKDVEST2 - VVT-Ansteuerung (Bank2) |
| 0x2862 | CDKDVULV - VVT-Leistungsversorgung |
| 0x2863 | CDKDVULV2 - VVT-Leistungsversorgung (Bank2) |
| 0x2865 | CDKDVPMN - Leistungsbegrenzung VVT-Notlauf |
| 0x2866 | CDKDVAN - VVT-Anschlaege lernen notwendig |
| 0x2867 | CDKDVOVL - VVT-Systemüberlast |
| 0x2868 | CDKDVOVL2 - VVT-Systemüberlast (Bank2) |
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
| 0x2898 | CDKLS1SH - Lambdasonde nach Katalysator Bank 1: Signal |
| 0x28A0 | CDKKUE - Endstufe Kraftstoffkreislaufumschaltung |
| 0x28C8 | CDKFRST - Lambdaregelungs -Abweichung  |
| 0x28C9 | CDKFRST2 - Lambdaregelungs -Abweichung Bank2 |
| 0x28D2 | CDKDSL - Drucksensor Ladedruck |
| 0x28D3 | CDKDSVLU - Plausibilisierung Umgebungs- zu Ladedruck |
| 0x28D4 | CDKLDE - Ladedrucksteuerventil Ansteuerung |
| 0x28D5 | CDKUVSE - Endstufe Umluftventil Turbo |
| 0x28D6 | CDKCOD - HO-Prozessfehler, Codierung fehlt |
| 0x28D7 | CDKDGENBS - Generator Kommunikation |
| 0x28D8 | CDKNVRBUP - RAM Backup-Fehlerp |
| 0x28D9 | CDKEZH - Elektrischer Zusatzheizer |
| 0x28DA | CDKCEZ - CAN Timeout Elektrischer Zusatzheizer |
| 0x28DB | CDKMINHUB - Minhubadaption Anschlag mehrfach überschritten |
| 0x28DC | CDKDPL -   |
| 0x2906 | CDKAGRE - AGR Ventil Ueberwachung |
| 0x2907 | CDKAGRF - AGR Ventil Ueberwachung |
| 0x2972 | CDKBKVPE - Ansteuerung Saugstrahlpumpe für Bremskraftverstärker |
| 0xFFFF | unbekannter Fehlerort |

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
| 0x271B | 0x29 | 0x8C | 0x31 | 0x16 |
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
| 0x2731 | 0x0A | 0x12 | 0x1A | 0x6c |
| 0x2732 | 0x0A | 0x12 | 0x00 | 0x00 |
| 0x2733 | 0x0A | 0x14 | 0x1A | 0x15 |
| 0x2734 | 0x0A | 0x1B | 0x1C | 0x23 |
| 0x2735 | 0x0A | 0x1B | 0x1C | 0x23 |
| 0x2736 | 0x0A | 0x26 | 0x27 | 0x15 |
| 0x2737 | 0x0A | 0x12 | 0x14 | 0xBE |
| 0x2738 | 0xA3 | 0x1A | 0xC0 | 0xB2 |
| 0x2739 | 0xA3 | 0x1A | 0xC0 | 0xB2 |
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
| 0x2760 | 0xCC | 0xCD | 0xCE | 0xCF |
| 0x2761 | 0xD0 | 0xD1 | 0xD2 | 0xD3 |
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
| 0x2784 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x2785 | 0x0A | 0x15 | 0x26 | 0x27 |
| 0x2786 | 0x0A | 0x28 | 0x24 | 0x27 |
| 0x2787 | 0x0A | 0x28 | 0x24 | 0x26 |
| 0x2788 | 0x0A | 0x1A | 0xCB | 0x14 |
| 0x2789 | 0x0A | 0x1A | 0x0B | 0x8C |
| 0x278A | 0x12 | 0x13 | 0x24 | 0x14 |
| 0x278B | 0x25 | 0x13 | 0x0A | 0x72 |
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
| 0x27A4 | 0x0A | 0x12 | 0x14 | 0xBE |
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
| 0x27BB | 0x0A | 0x12 | 0x1A | 0x14 |
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
| 0x27C9 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27CA | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27CB | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x27CC | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x27CD | 0x3C | 0x35 | 0x24 | 0x14 |
| 0x27CE | 0x0A | 0x1A | 0x43 | 0x40 |
| 0x27CF | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D0 | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D1 | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D2 | 0x0A | 0x1A | 0x23 | 0x15 |
| 0x27D5 | 0x0A | 0x1A | 0x14 | 0x15 |
| 0x27D6 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27D7 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27D8 | 0x0A | 0x12 | 0x14 | 0x35 |
| 0x27D9 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x27DA | 0x14 | 0xBA | 0x0A | 0xBB |
| 0x27DC | 0x0A | 0x12 | 0x14 | 0xBE |
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
| 0x27EB | 0x0A | 0x1A | 0x14 | 0x0B |
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
| 0x2813 | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x2814 | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x2815 | 0x14 | 0x13 | 0x0A | 0x12 |
| 0x2816 | 0x0A | 0x15 | 0x1F | 0x23 |
| 0x281D | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x281E | 0x0A | 0x12 | 0x13 | 0x23 |
| 0x281F | 0x0A | 0x12 | 0x1A | 0x23 |
| 0x2820 | 0x0A | 0x12 | 0x1A | 0x23 |
| 0x2823 | 0x2D | 0xA8 | 0x29 | 0x0B |
| 0x2824 | 0x2E | 0xA9 | 0x2A | 0x0B |
| 0x2825 | 0x82 | 0xB2 | 0x2B | 0x17 |
| 0x2826 | 0x83 | 0xB3 | 0x2C | 0x19 |
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
| 0x283F | 0x0A | 0x12 | 0x1A | 0x8C |
| 0x2841 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x284F | 0x0A | 0x1A | 0x70 | 0x14 |
| 0x2850 | 0x0A | 0x14 | 0x12 | 0xC5 |
| 0x2851 | 0x0A | 0x14 | 0x12 | 0xC6 |
| 0x2852 | 0x0A | 0x14 | 0x12 | 0xC5 |
| 0x2853 | 0x0A | 0x14 | 0x12 | 0xC6 |
| 0x2854 | 0x0A | 0x14 | 0x12 | 0xC3 |
| 0x2855 | 0x0A | 0x14 | 0x12 | 0xC4 |
| 0x2856 | 0x0A | 0x14 | 0x12 | 0x24 |
| 0x2857 | 0x0A | 0x14 | 0x12 | 0x24 |
| 0x2858 | 0x0A | 0x14 | 0x12 | 0x24 |
| 0x2859 | 0x0A | 0x14 | 0x12 | 0x24 |
| 0x285A | 0x0A | 0x14 | 0x12 | 0xC5 |
| 0x285B | 0x0A | 0x14 | 0x12 | 0xC6 |
| 0x285C | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x285D | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x285E | 0x0A | 0x14 | 0x12 | 0x24 |
| 0x285F | 0x0A | 0x14 | 0x12 | 0x24 |
| 0x2860 | 0x0A | 0x14 | 0x12 | 0xC5 |
| 0x2861 | 0x0A | 0x14 | 0x12 | 0xC6 |
| 0x2862 | 0x0A | 0x14 | 0x12 | 0x24 |
| 0x2863 | 0x0A | 0x14 | 0x12 | 0x24 |
| 0x2865 | 0x0A | 0x14 | 0x12 | 0xC5 |
| 0x2866 | 0x0A | 0x14 | 0x12 | 0xBE |
| 0x2867 | 0x0A | 0x8c | 0x12 | 0xC5 |
| 0x2868 | 0x0A | 0x8c | 0x12 | 0xC6 |
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
| 0x2898 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x28A0 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x28C8 | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x28C9 | 0x0A | 0x14 | 0x12 | 0x8C |
| 0x28D2 | 0x0A | 0x14 | 0x12 | 0x35 |
| 0x28D3 | 0x0A | 0x14 | 0x35 | 0x75 |
| 0x28D4 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x28D5 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x28D6 | 0x14 | 0x0a | 0x8c | - |
| 0x28D7 | 0x0A | 0x14 | 0x13 | 0xBB |
| 0x28D8 | 0x0A | 0x14 | 0x12 | 0x00 |
| 0x28D9 | 0x12 | 0x25 | 0x0A | 0x14 |
| 0x28DA | 0x0A | 0x1A | 0x14 | 0x8c |
| 0x28DB | 0x12 | 0xBE | 0x0A | 0x1A |
| 0x28DC | 0x0A | 0x00 | 0x00 | 0x00 |
| 0x2906 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2907 | 0x0A | 0x12 | 0x14 | 0x0B |
| 0x2972 | 0x35 | 0x14 | 0x24 | 0x1A |
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
| 0xBA | Generatorsollspannung(ugen) | V | - | unsigned char | - | 0.1 | 1 | 10.6 |
| 0xBB | vom Generator empf. Lastsignal(dffgen) | % | - | unsigned char | - | 0.3921 | 1 | 0 |
| 0xBC | Generatortemperatur(gentemp) | Grad C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0xBD | Beladung des Aktivkohlefilters(ftead_u) |   | - | signed char | - | 0.5 | 1 | 0 |
| 0xBE | Betriebszeit (top_u) | min | - | unsigned char | - | 1536 | 1 | 0 |
| 0xBF | Abgastemp. Kat aus Modell(tikatm) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0xC0 | Abgastemp. Kat (tikatm2 / Mono tikatm) | Grad C | - | unsigned char | - | 5 | 1 | -50 |
| 0xC1 | LS-Istwert, korr. um Zamp(lamzak_u) |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xC2 | LS-Istwert, korr. um Zamp Bank2(lamzak2_u) |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xC3 | VVT-Sollw. bzgl.Verstell. (vvt_sw_u) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0xC4 | VVT-Sollw. bzgl.Verstellb.Bank2(vvt_sw2_u) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0xC5 | VVT-Istw. bzgl. Verstellb.(vvt_iw_u) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0xC6 | VVT-Istw. bzgl. Verstellb.Bank2(vvt_iw2_u) | % | - | unsigned char | - | 0.3906 | 1 | 0 |
| 0xC7 | Betriebsartenbyte (B_fe) |   | - | unsigned char | - | 1 | 1 | 0 |
| 0xC8 | Zähler v. Deltas RAM-Backup(dnvrbupctr) |   | - | unsigned char | - | 1.0 | 1 | 0 |
| 0xC9 | Fehlerstatus SSG-Diagnose (stssgerr) |   | - | unsigned char | - | 1.0 | 1 | 0 |
| 0xCA | Korrekturfaktor Höhe (fho_u) |   | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xCB | Fahrzeuggeschwindigkeit v1 CAN (vfzgv1_u) |   | - | unsigned char | - | 1.0 | 1 | 0 |
| 0xCC | Mittelwert Lambdaregelfaktor (frm) |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0xCD | Lambda-Sollwert (lamsons) |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xCE | Korrekturfaktor Höhe (fho_u) |   | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xCF | Motorstarttemperatur (tmst) | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
| 0xD0 | Mittelwert Lambdaregelfaktor B2(frm2) |   | - | unsigned char | - | 0.0078 | 1 | 0 |
| 0xD1 | Lambda-Sollwert Bank2 (lamsons2) |   | - | unsigned char | - | 0.0625 | 1 | 0 |
| 0xD2 | Korrekturfaktor Höhe B2(fho_u) |   | - | unsigned char | - | 0.015625 | 1 | 0 |
| 0xD3 | Motorstarttemperatur (tmst) | Grd C | - | unsigned char | - | 0.75 | 1 | -48 |
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
| 0x10 | Sekundärluftmindermasse erkannt |
| 0x11 | Sekundärluftmindermasse auf Bank2 erkannt |
| 0x12 | Sekundärluftmindermasse auf Bank1 und Bank2 erkannt |
| 0x13 | Sekundärluftdiagnoseergebnis n.i.O. |
| 0x14 | Sekundärluftdiagnoseergebnis Bank 2 n.i.O. |
| 0x15 | Sekundärluftdiagnoseergebnis Bank 1 + 2 n.i.O. |
| 0x16 | Sekundärluftdiagnoseergebnis i.O. |
| 0x20 | Sekundärluftwicklungstemperatur zu groß |
| 0x21 | Druckdifferenz, Batteriespg, Motorluftmasse außerhalb der Schwellen |
| 0x24 | Vorsteuerung auf Bank1 und Bank2 außerhalb der Schwellen |
| 0x25 | Vorsteuerung auf Bank1 außerhalb der Schwellen |
| 0x26 | Vorsteuerung auf Bank2 außerhalb der Schwellen |
| 0x22 | Messphase wurde abgebrochen |
| 0x23 | Offsetphase wurde abgebrochen |
| 0x30 | Motortemperatur ist noch zu gering |
| 0x31 | Wicklungstemperatur ist noch zu hoch |
| 0x32 | Fehler einer das Ergebnis beeinflussenden Komponente vorliegt |
| 0x33 | Motortemp., Ansauglufttemp. oder Kattemp, liegt außerhalb der Grenzen |
| 0x34 | Motorluftmasse liegt außerhalb der Grenzen |
| 0x35 | LSU(2) nicht Betriebsbereit, VVT umschaltet,... |
| 0x36 | Tankentlüftung aktiv ist |
| 0xFE | zusätzlicher Grund (noch nicht spezifiziert) |
| 0xFF | Ungültigkeitswert! |
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
| 0x2712 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2713 | 0x89 | 0x03 | 0x02 | 0x01 |
| 0x2714 | 0x7B | 0x22 | 0x07 | 0x08 |
| 0x2715 | 0x05 | 0x06 | 0x07 | 0x08 |
| 0x2716 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2717 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x271A | 0x15 | 0xC8 | 0xC7 | 0xC6 |
| 0x271C | 0x09 | 0xDC | 0x88 | 0xDD |
| 0x271D | 0x05 | 0x06 | 0x07 | 0x08 |
| 0x271E | 0x7B | 0x22 | 0x07 | 0x08 |
| 0x2721 | 0x82 | 0x83 | 0x84 | 0x85 |
| 0x2722 | 0x15 | 0xDB | 0xDA | 0xD9 |
| 0x2724 | 0xE0 | 0xDF | 0xDE | 0xE1 |
| 0x2727 | 0x82 | 0x83 | 0x84 | 0x85 |
| 0x2728 | 0x04 | 0x03 | 0x75 | 0x76 |
| 0x2729 | 0x04 | 0x03 | 0x75 | 0x76 |
| 0x272A | 0x04 | 0x03 | 0x96 | 0x97 |
| 0x272B | 0x04 | 0x03 | 0x96 | 0x97 |
| 0x272C | 0x04 | 0x03 | 0xCA | 0xC9 |
| 0x272D | 0x04 | 0x03 | 0xCA | 0xC9 |
| 0x2731 | 0x71 | 0x03 | 0x72 | 0x01 |
| 0x2732 | 0x72 | 0x03 | 0x71 | 0x01 |
| 0x2737 | 0x1B | 0x1C | 0x1D | 0x1E |
| 0x2738 | 0x04 | 0x03 | 0x7D | 0x01 |
| 0x2739 | 0x04 | 0x03 | 0x7D | 0x01 |
| 0x273A | 0x04 | 0x03 | 0x7D | 0x01 |
| 0x273D | 0x04 | 0x03 | 0x7D | 0x01 |
| 0x2742 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2743 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2744 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2745 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2746 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2747 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2748 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2749 | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x274E | 0x8B | 0x03 | 0x8C | 0x8A |
| 0x2753 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2754 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2755 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2756 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2757 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2758 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2759 | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x275A | 0xB7 | 0x6C | 0x6D | 0x6E |
| 0x2760 | 0x04 | 0x03 | 0x98 | 0x01 |
| 0x2761 | 0x04 | 0x03 | 0x98 | 0x01 |
| 0x2764 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2765 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2769 | 0x04 | 0x03 | 0x5D | 0x5E |
| 0x276B | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x276D | 0x04 | 0x03 | 0xA1 | 0x01 |
| 0x2772 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2773 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x2775 | 0xA4 | 0x03 | 0x02 | 0x01 |
| 0x2776 | 0xCD | 0xCC | 0xCB | 0x01 |
| 0x2778 | 0x04 | 0x81 | 0x02 | 0x01 |
| 0x2779 | 0xB1 | 0x03 | 0x02 | 0x01 |
| 0x277A | 0x2E | 0x03 | 0x02 | 0x01 |
| 0x277B | 0xB2 | 0x03 | 0x02 | 0x01 |
| 0x277C | 0xB3 | 0x03 | 0x02 | 0x01 |
| 0x277D | 0xA3 | 0x03 | 0x51 | 0x50 |
| 0x277E | 0x04 | 0x03 | 0x02 | 0x8D |
| 0x277F | 0x04 | 0xE7 | 0x02 | 0x01 |
| 0x2780 | 0x2D | 0x03 | 0x02 | 0x01 |
| 0x2781 | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x2782 | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x2783 | 0x04 | 0x03 | 0x39 | 0x38 |
| 0x2785 | 0x23 | 0x03 | 0x02 | 0x01 |
| 0x2786 | 0x26 | 0x03 | 0x25 | 0x24 |
| 0x2787 | 0x27 | 0x03 | 0x25 | 0x24 |
| 0x2788 | 0x04 | 0xB6 | 0x02 | 0x01 |
| 0x2789 | 0x04 | 0xCF | 0x02 | 0xCE |
| 0x278A | 0xA2 | 0x03 | 0x02 | 0x01 |
| 0x278B | 0x9E | 0x9F | 0x9C | 0x9D |
| 0x278C | 0x04 | 0x03 | 0x9C | 0x9D |
| 0x278D | 0x04 | 0x03 | 0x9C | 0x9D |
| 0x278E | 0x04 | 0x03 | 0x39 | 0x38 |
| 0x2791 | 0x63 | 0x03 | 0x02 | 0x01 |
| 0x2792 | 0x5F | 0x03 | 0x02 | 0x01 |
| 0x2793 | 0x04 | 0x03 | 0x61 | 0x62 |
| 0x2794 | 0x5C | 0x03 | 0x02 | 0x01 |
| 0x2795 | 0x04 | 0x03 | 0x5A | 0x5B |
| 0x2796 | 0x64 | 0x03 | 0x02 | 0x01 |
| 0x2797 | 0x68 | 0x03 | 0x02 | 0x01 |
| 0x2798 | 0x60 | 0x03 | 0x02 | 0x01 |
| 0x2799 | 0x04 | 0x03 | 0x65 | 0x66 |
| 0x279A | 0x67 | 0x03 | 0x02 | 0x01 |
| 0x279B | 0x04 | 0x03 | 0xA0 | 0x01 |
| 0x279C | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x279D | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x279E | 0x04 | 0x22 | 0xBD | 0x08 |
| 0x279F | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A0 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A4 | 0x18 | 0x19 | 0x1A | 0x01 |
| 0x27A6 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A7 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A8 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27A9 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27AA | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27AB | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27AC | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27AD | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27B3 | 0x04 | 0x03 | 0x6F | 0x70 |
| 0x27B4 | 0xE4 | 0x03 | 0xE3 | 0xE2 |
| 0x27B5 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27B6 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27B7 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27B8 | 0x04 | 0x03 | 0xE6 | 0xE5 |
| 0x27BA | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27BB | 0x2C | 0x03 | 0x2B | 0x2A |
| 0x27BC | 0x2C | 0x03 | 0x2B | 0x2A |
| 0x27BD | 0x2C | 0x22 | 0x2B | 0x08 |
| 0x27BE | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27BF | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x27C0 | 0x92 | 0x93 | 0x07 | 0x08 |
| 0x27C1 | 0x04 | 0x94 | 0x02 | 0x01 |
| 0x27C2 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27C3 | 0x15 | 0x16 | 0x17 | 0x01 |
| 0x27CA | 0x04 | 0x03 | 0x02 | 0x08 |
| 0x27CB | 0x04 | 0x03 | 0x3A | 0x01 |
| 0x27CC | 0x04 | 0x03 | 0x29 | 0x28 |
| 0x27CD | 0x3E | 0x3D | 0x3C | 0x3B |
| 0x27CE | 0xA6 | 0xA7 | 0xA8 | 0x01 |
| 0x27D5 | 0x04 | 0x03 | 0x86 | 0x87 |
| 0x27D9 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27DA | 0x0C | 0x0D | 0x02 | 0x0E |
| 0x27DC | 0x04 | 0x1F | 0x20 | 0x21 |
| 0x27E1 | 0xB0 | 0x03 | 0x02 | 0x01 |
| 0x27E2 | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x27E3 | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x27E4 | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x27E5 | 0x04 | 0x03 | 0x80 | 0x7F |
| 0x27E6 | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27E7 | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27E8 | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27E9 | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27EC | 0x04 | 0x03 | 0x02 | 0x01 |
| 0x27ED | 0x04 | 0x03 | 0x02 | 0x01 |
| 0x27EE | 0x04 | 0x03 | 0x02 | 0x01 |
| 0x27EF | 0x31 | 0x2F | 0x30 | 0x01 |
| 0x27F0 | 0xC4 | - | - | - |
| 0x27F2 | 0x77 | 0x78 | 0x79 | 0x7A |
| 0x27F3 | 0xD0 | 0x03 | 0x02 | 0x01 |
| 0x27F5 | 0x37 | 0x2F | 0x02 | 0x01 |
| 0x27F6 | 0x74 | 0x03 | 0x02 | 0x01 |
| 0x27F7 | 0x73 | 0x03 | 0xD2 | 0xD1 |
| 0x27F8 | 0x04 | 0x03 | 0xD2 | 0xD1 |
| 0x27F9 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27FA | 0x04 | 0x9A | 0x02 | 0x01 |
| 0x27FB | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x27FD | 0x04 | 0x99 | 0x02 | 0x01 |
| 0x27FE | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x27FF | 0x7E | 0x03 | 0x02 | 0x01 |
| 0x2811 | 0x35 | 0x03 | 0x34 | 0x33 |
| 0x2813 | 0xA9 | 0xAA | 0xAB | 0xAC |
| 0x2814 | 0xAD | 0xAE | 0xD4 | 0xD3 |
| 0x2815 | 0x04 | 0x03 | 0x02 | 0xAF |
| 0x2816 | 0xA5 | 0x03 | 0x02 | 0x01 |
| 0x281E | 0x9B | 0x03 | 0x02 | 0x01 |
| 0x2820 | 0xB8 | 0xB9 | 0xBA | 0xBB |
| 0x2821 | 0x04 | 0x03 | 0xBC | 0x01 |
| 0x2823 | 0x7C | 0x03 | 0x02 | 0x01 |
| 0x2824 | 0x7C | 0x03 | 0x02 | 0x01 |
| 0x2825 | - | - | - | 0xbe |
| 0x2826 | - | - | - | 0xbf |
| 0x2828 | 0x31 | 0x2F | 0x30 | 0x01 |
| 0x2829 | 0x32 | 0x2F | 0x02 | 0x01 |
| 0x282A | 0x04 | 0x2F | 0x02 | 0x01 |
| 0x282B | 0x04 | 0x2F | 0x02 | 0x01 |
| 0x282C | 0x31 | 0x2F | 0x30 | 0x01 |
| 0x283A | 0x11 | 0x12 | 0x13 | 0x14 |
| 0x283D | 0x35 | 0x03 | 0x34 | 0x33 |
| 0x283E | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x283F | 0x95 | 0x03 | 0x02 | 0x01 |
| 0x2841 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x284F | 0xB4 | 0x03 | 0x02 | 0xB5 |
| 0x2850 | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2851 | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2852 | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2853 | 0x43 | 0x42 | 0x41 | 0x40 |
| 0x2854 | 0x44 | 0x45 | 0x02 | 0x01 |
| 0x2855 | 0x44 | 0x45 | 0x02 | 0x01 |
| 0x2856 | 0x04 | 0x03 | 0x46 | 0x47 |
| 0x2857 | 0x04 | 0x03 | 0x46 | 0x47 |
| 0x2858 | 0x04 | 0x53 | 0x54 | 0x55 |
| 0x2859 | 0x04 | 0x53 | 0x54 | 0x55 |
| 0x285A | 0x56 | 0x57 | 0x58 | 0x01 |
| 0x285B | 0x56 | 0x57 | 0x58 | 0x01 |
| 0x285C | 0x49 | 0x48 | 0x02 | 0xDO |
| 0x285D | 0x32 | 0x48 | 0x02 | 0x49 |
| 0x285E | 0x4A | 0x4B | 0x4C | 0x4D |
| 0x285F | 0x4A | 0x4B | 0x4C | 0x4D |
| 0x2860 | 0x4F | 0x4E | 0x07 | 0x08 |
| 0x2861 | 0x4E | 0x4F | 0x07 | 0x08 |
| 0x2862 | 0x52 | 0x03 | 0xD6 | 0xD5 |
| 0x2863 | 0x52 | 0x03 | 0x51 | 0x50 |
| 0x2864 | 0x04 | 0x22 | 0x07 | 0x01 |
| 0x2865 | 0x04 | 0x69 | 0x6A | 0x6B |
| 0x2866 | 0x04 | 0x03 | 0x02 | 0x59 |
| 0x2867 | 0xC0 | 0xC1 | 0xC2 | 0xC3 |
| 0x2868 | 0xC0 | 0xC1 | 0xC2 | 0xC3 |
| 0x287C | 0x04 | 0x03 | 0xD8 | 0xD7 |
| 0x2898 | 0x00 | 0x00 | 0x00 | 0xE8 |
| 0x28C8 | 0x2E | 0x03 | 0x75 | 0x76 |
| 0x28C9 | 0x2E | 0x03 | 0x75 | 0x76 |
| 0x28D4 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x28D5 | 0x04 | 0x22 | 0x07 | 0x08 |
| 0x28D6 | 0x36 | 0x03 | 0x02 | 0x01 |
| 0x28D7 | 0x0F | 0x10 | 0x02 | 0x01 |
| 0x28D8 | 0x04 | 0x03 | 0x8E | 0x8F |
| 0x28DB | 0x04 | 0x03 | 0x02 | 0xC5 |
| 0x2907 | 0x15 | - | - | - |
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
| 0x09 | Heiztakteinkopplung auf Signal Bank1 Sonde2 |
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
| 0x18 | Mehr als 3 Parityfehler erkannt |
| 0x19 | Timeout EWS-Telegramm (kein Signal innerhalb 10s nach Kl.15 ein) |
| 0x1A | Empfangsfehler des EWS-Telegrams (Start-, Stop- oder Framefehler) |
| 0x1B | falscher Wechselcode |
| 0x1C | falscher Startwert |
| 0x1D | Kein Startwert programmiert |
| 0x1E | Startwert nicht eindeutig erkennbar (Fehler in 2-aus-3-Auswahl) |
| 0x1F | Schreiben auf die Wechselcodeablage im EEPROM fehlerhaft |
| 0x20 | Fehler Ablage |
| 0x21 | Lesen der Wechselcodeablage im EEPROM fehlerhaft |
| 0x22 | Leitungsunterbrechung |
| 0x23 | Fehler DK-Poti 1 oder DK-Poti 2 |
| 0x24 | Bereichsverletzung Poti nach oben |
| 0x25 | Bereichsverletzung Poti nach unten |
| 0x26 | Drosselklappenpotentiometer 1 unplausibel zu Ersatzwert aus Fuellung |
| 0x27 | Drosselklappenpotentiometer 2 unplausibel zu Ersatzwert aus Fuellung |
| 0x28 | Grobleck |
| 0x29 | Feinleck |
| 0x2A | VANOS hat Spaetposition nicht erreicht |
| 0x2B | Anschlagadaption außerhalb gültigem Bereich |
| 0x2C | Regelabweichung zu lange zu groß |
| 0x2D | Kurbelwellen-Zahnfehler oder Lueckenverlust |
| 0x2E | Pruefresultat unplausibel |
| 0x2F | Timeout abgelaufen |
| 0x30 | Alive-Fehler |
| 0x31 | Plausibilitaetfehler |
| 0x32 | Alive oder Plausibilitaetfehler |
| 0x33 | CAN Baustein im Zustand Passiv |
| 0x34 | DPRAM von CAN Baustein defekt |
| 0x35 | CAN Baustein Bus off oder Bus defekt |
| 0x36 | DME noch nicht codiert |
| 0x37 | fehlerhafte Botschaft |
| 0x38 | Signal oberhalb Schwelle oder Kurzschluss nach Plus |
| 0x39 | Signal unterhalb Schwelle oder Kurzschluss nach Minus |
| 0x3A | Kleinstleck erkannt  |
| 0x3B | obere Schwelle Pumpenstrom bei Referenzmessung |
| 0x3C | untere Schwelle Pumpenstrom bei Referenzmessung |
| 0x3D | Abbruch wegen Stromschwankungen bei Feinleckpruefung |
| 0x3E | Pumpenstromschwelle bei Ventilpruefung erreicht |
| 0x3F | Sensorwert unplausibel |
| 0x40 | Magnet los-Fehler |
| 0x41 | Resetfehler |
| 0x42 | Parityfehler |
| 0x43 | Gradientenfehler |
| 0x44 | Sensoren unplausibel |
| 0x45 | Datenkonfirmitaet |
| 0x46 | Sensorversorgungsspannung zu klein |
| 0x47 | Sensorversorgungsspannung zu hoch |
| 0x48 | Sollwertsbotschaften nicht empfangen |
| 0x49 | VVT-Botschaften nicht empfangen |
| 0x4A | ROM-Test Fehler |
| 0x4B | Stack-Test Fehler |
| 0x4C | RAM-Test Fehler |
| 0x4D | EEPROM-Test Fehler |
| 0x4E | Kurzschluss der Motorleitung |
| 0x4F | Ansteuerungsfehler allgemein |
| 0x50 | Spannung oberhalb Schwelle |
| 0x51 | Spannung unterhalb Schwelle |
| 0x52 | Relaisfehler |
| 0x53 | keine Anschlaege gelernt |
| 0x54 | Fehler unteres Lernfenster |
| 0x55 | Verstellbereich fehlerhaft |
| 0x56 | Drehrichtungserkennung |
| 0x57 | Lagerreglerueberwachung |
| 0x58 | Uebertemperatur |
| 0x59 | Vergleich Abstell- zur Startposition fehlerhaft |
| 0x5A | DVE-Fehler beim Oeffnen der Rueckstellfeder |
| 0x5B | Fehler bei Pruefung der Rueckstellfeder |
| 0x5C | DKS Ansteuerungsfehler, Endstufe abgeschaltet |
| 0x5D | Fehler bei Federpruefung oeffnen, Abbruch Feder oeffnet nicht |
| 0x5E | Fehler bei Federpruefung oeffnen |
| 0x5F | DKS Lageabweichung |
| 0x60 | Fehler bei NLP-Pruefung und Lernen |
| 0x61 | DK-Lageregelung klemmt kurzzeitig |
| 0x62 | DK-Lageregelung klemmt anhaltend |
| 0x63 | DKS-Tauscherkennung ohne Adaption Notluftpunkt |
| 0x64 | Fehler in Urinitialisierung des unteren mech. Anschlags (UMA) |
| 0x65 | Lernverbot Status Prüfbedingung = 27 |
| 0x66 | Lernverbot Status Prüfbedingung >0 aber nicht 27 |
| 0x67 | Fehler bei Wiederhollernen unterer mech. Anschlag (UMA) |
| 0x68 | Fehler bei Verstaerkerabgleich  |
| 0x69 | Exzenterwinkel Ueberlast erkennt Fehler |
| 0x6A | Exzenterwinkel faehrt nicht auf Vollhubposition |
| 0x6B | Drehzahlfuellungsbegrenzung |
| 0x6C | Uebertemperaturabschaltung oder Signalabfall |
| 0x6D | Uebergangswiederstabd oder Hochimpedanz |
| 0x6E | Kurzschluss nach Plus oder Nichtimpedanz  |
| 0x6F | Massenstromadaption zu klein |
| 0x70 | Massenstromadaption zu gross |
| 0x71 | Regelabweichung zu lange zu gross |
| 0x72 | Anschlagadaption ausserhalb gueltigen Bereich |
| 0x73 | Gleichlauffehler zwischen Poti1 und Poti2 |
| 0x74 | Poti1 oder Poti2 fehlerhaft oder ausserhalb der Toleranzen |
| 0x75 | untere Plausibilitaetsschwelle unterschritten |
| 0x76 | obere Plausibilitaetsschwelle ueberschritten |
| 0x77 | Fuellstandssignalwert zum Verbrauchswert unplausibel |
| 0x78 | CAN-Fehler Tankfuellstand |
| 0x79 | Tankfuellstandssignal Tank2 fehlerhaft |
| 0x7A | Tankfuellstandssignal Tank1 fehlerhaft |
| 0x7B | Sondenheizung defekt (Innenwiderstand) |
| 0x7C | zu geringe Schubsignalspannung |
| 0x7D | Katalysatorwirkungsgrad unter Schwellwert |
| 0x7E | Klopfbaustein defekt |
| 0x7F | Motor mechanisch zu laut oder Klopfsensor ausserhalb Toleranz |
| 0x80 | elektrischer Fehler Klopfsensor |
| 0x81 | Signal inaktiv |
| 0x82 | Sonde dynamisch zu langsam |
| 0x83 | Schubspannungsschwelle nicht erreicht |
| 0x84 | Sondenspannung unterschreitet Schwellwert nicht |
| 0x85 | Sondenspannung ueberschreitet Schwellwert nicht |
| 0x86 | LL-Steller Oeffnung zu gross oder Leckluft |
| 0x87 | LL-Steller Oeffnung zu gering |
| 0x88 | Adernschluss oder vergiftete Referenzluft (CSD) - Bank1 Sonde2 |
| 0x89 | vertauschte Lambdasonden |
| 0x8A | Katschädigende Aussetzer |
| 0x8B | Abgasschädigender Aussetzer, im 1. Intervall nach Start |
| 0x8C | Abgasschädigende Aussetzer nicht katschädigend |
| 0x8D | Maximal zulaessiges Sollmoment wird dauerhaft ueberschritten |
| 0x8E | Schreibfehler |
| 0x8F | Lesefehler |
| 0x90 | Differenzdruck zu klein |
| 0x91 | Differenzdruck zu gross |
| 0x92 | unplausible Phasenflankenanzahl |
| 0x93 | Lage der Phasenflanken oder Einbaulage ausserhalb Toleranz |
| 0x94 | keine Masternockenwelle vorhanden |
| 0x95 | Schalter unplausibel |
| 0x96 | Gemisch zu fett |
| 0x97 | Gemisch zu mager |
| 0x98 | Sekundaerluftdurchsatz zu gering |
| 0x99 | keine Drehzahlimpulse erkannt |
| 0x9A | Start in laufendem Motor |
| 0x9B | Fehler Ansteuerung DISA (Kurzschluesse nach Plus oder Minus) |
| 0x9C | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x9D | Kurzschluss nach Minus |
| 0x9E | Motortemperatursignal unplausibel gegenueber Modell |
| 0x9F | Motortemperaturschwelle fuer Lambdaregelungsfreigabe nicht erreicht |
| 0xA0 | Thermostat klemmt |
| 0xA1 | Funktionstest Tankentlueftung nicht in Ordnung |
| 0xA2 | Umgebungstemperatur vom Kombi fehlerhaft |
| 0xA3 | ADC Fehler |
| 0xA4 | Funktionsueberwachung Momentenvergleich |
| 0xA5 | Kurbelwellengeber-, Zuleitungs- oder Steuergeraetefehler |
| 0xA6 | Lastsensor-, Zuleitungs- oder Steuergeraetefehler |
| 0xA7 | VVT-Ventilplausibilisierung |
| 0xA8 | Drucksensorplausibilisierung |
| 0xA9 | Reaktionsueberwachung |
| 0xAA | ADC-Ueberwachung |
| 0xAB | Zuendwinkelueberwachung |
| 0xAC | RL-Ueberwachung |
| 0xAD | DK-Anschlagueberwachung |
| 0xAE | Variantencodierungsueberwachung |
| 0xAF | TPU-Ueberwachung |
| 0xB0 | Pedalwertgeber-, Zuleitungs- oder Steuergeraetefehler |
| 0xB1 | RAM-Fehler |
| 0xB2 | ROM-Fehler |
| 0xB3 | Reset-Fehler |
| 0xB4 | Geschwindigkeitssignal vom Kombi und DSC nicht kompatibel |
| 0xB5 | Geschwindigkeitssignal vom Kombi fehlerhaft |
| 0xB6 | fehlendes Geschwindigkeitssignal (Hardwaresignal) |
| 0xB7 | Signal nicht plausibel, Zündkreisüberwachung |
| 0xB8 | Reglerdifferenz zu gross |
| 0xB9 | Temperaturgrenzwert Motorschutzmodell ueberschritten |
| 0xBA | Potispannung im unteren Diagnosebereich |
| 0xBB | Potispannung im oberen Diagnosebereich |
| 0xBC | Temperaturwarnschwelle Motorschutzmodell |
| 0xBD | Kurzschluss nach Minus oder Motorlüfter defekt |
| 0xBE | Signal bei Vollast kleiner Schwelle |
| 0xBF | Signal bei Vollast kleiner Schwelle (Bank2) |
| 0xC0 | Überlastschutz VVT-System |
| 0xC1 | Steuergerätetemperatur zu hoch |
| 0xC2 | Temperatur E-Motor zu hoch |
| 0xC3 | Strom E-Motoransteuerung zu hoch |
| 0xC4 | Empfangene ASC/DSC-Botschaft unplausibel |
| 0xC5 | Maximale Anzahl Minhubanschläge überschritten |
| 0xC6 | Offset über Grenzwert Sonde1 Bank1 |
| 0xC7 | Langsame Sonde Sonde1 Bank1 |
| 0xC8 | Nebenschluss Sonde mit Heizer Sonde1 Bank1 |
| 0xC9 | System zu mager additiv pro Zeit zu gross |
| 0xCA | System zu fett additiv pro Zeit zu klein |
| 0xCB | Signalfehler |
| 0xCC | MFL-Signal Frequenzfehler |
| 0xCD | Toggle-Bit fehlerhaft |
| 0xCE | Radgeschwindigkeit zu hoch |
| 0xCF | Kein Raddrehzahlsignal erhalten |
| 0xD0 | Botschaftsueberwachung fehlerhaft |
| 0xD1 | Spannung oberhalb Max-Wert |
| 0xD2 | Spannung unterhalb Min-Wert |
| 0xD3 | GKC Kraftstoffkorrektur |
| 0xD4 | RKTI Plausibilisierung |
| 0xD5 | Spannung zu hoch |
| 0xD6 | Spannung zu niedrig |
| 0xD7 | Diagnoseschwelle ueberschritten |
| 0xD8 | Diagnoseschwelle unterschritten |
| 0xD9 | Offset über Grenzwert Sonde1 Bank2 |
| 0xDA | Langsame Sonde Sonde1 Bank2 |
| 0xDB | Nebenschluss Sonde mit Heizer Sonde1 Bank2 |
| 0xDC | Leitungsunterbrechung - Bank1 Sonde2 |
| 0xDD | Kurzschluss UBatt - Bank1 Sonde2 |
| 0xDE | Leitungsunterbrechung - Bank2 Sonde2 |
| 0xDF | Adernschluss oder vergiftete Referenzluft (CSD) - Bank2 Sonde2 |
| 0xE0 | Heiztakteinkopplung auf Signal Bank2 Sonde2 |
| 0xE1 | Kurzschluss UBatt - Bank2 Sonde2 |
| 0xE2 | Max-Fehler Umgebungsdrucksensor |
| 0xE3 | Min-Fehler Umgebungsdrucksensor |
| 0xE4 | Umgebungsdrucksensor unblausibel |
| 0xE5 | Drucksensor obere Schwelle ueberschritten |
| 0xE6 | Drucksensor unter Schwelle unterschritten |
| 0xE7 | Leitungsunterbrechung Drehzahlsignal |
| 0xE8 | Signal nach Wiedereinsetzen kleiner Schwelle |
| 0xFF | unbekannte Fehlerart |

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
| DFMONITOR | B812F103224001 | 0 | 0 | 0x00 | 7 | 2 | -- | 0,390625 | 0 | 0 | 0 | % |
| LUTSFI1 | B812F103224003 | 0 | 0 | 0x00 | 7 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI2 | B812F103224003 | 0 | 0 | 0x00 | 9 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI3 | B812F103224003 | 0 | 0 | 0x00 | 11 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI4 | B812F103224003 | 0 | 0 | 0x00 | 13 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI5 | B812F103224003 | 0 | 0 | 0x00 | 15 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI6 | B812F103224003 | 0 | 0 | 0x00 | 17 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI7 | B812F103224003 | 0 | 0 | 0x00 | 19 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| LUTSFI8 | B812F103224003 | 0 | 0 | 0x00 | 21 | 7 | -- | 0.0027756 | 0 | 0 | 0 | sec-1 |
| B_FOR11 | B812F103224003 | 0 | 0 | 0x00 | 23 | 2 | -- | 1 | 0 | 0 | 0 |   |
| USVK | B812F103224003 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.0048818 | 0 | 0 | 0 | V |
| USVK2 | B812F103224003 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.0048818 | 0 | 0 | 0 | V |
| MSNDKO | B812F103224008 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| FKMSDKA | B812F103224008 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.00006103 | 0 | 0 | 0 |   |
| FKMSDK | B812F103224008 | 0 | 0 | 0x00 | 11 | 5 | -- | 0.00006103 | 0 | 0 | 0 |   |
| VSAADP | B812F103224006 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSAADP2 | B812F103224006 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSEADP | B812F103224006 | 0 | 0 | 0x00 | 11 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSEADP2 | B812F103224006 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSAADPFL0 | B812F103224006 | 0 | 0 | 0x00 | 15 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADPFL1 | B812F103224006 | 0 | 0 | 0x00 | 16 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADPFL2 | B812F103224006 | 0 | 0 | 0x00 | 17 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADPFL3 | B812F103224006 | 0 | 0 | 0x00 | 18 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADP2FL0 | B812F103224006 | 0 | 0 | 0x00 | 19 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADP2FL1 | B812F103224006 | 0 | 0 | 0x00 | 20 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADP2FL2 | B812F103224006 | 0 | 0 | 0x00 | 21 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSAADP2FL3 | B812F103224006 | 0 | 0 | 0x00 | 22 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADPFL0 | B812F103224006 | 0 | 0 | 0x00 | 23 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADPFL1 | B812F103224006 | 0 | 0 | 0x00 | 24 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADPFL2 | B812F103224006 | 0 | 0 | 0x00 | 25 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADPFL3 | B812F103224006 | 0 | 0 | 0x00 | 26 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADP2FL0 | B812F103224006 | 0 | 0 | 0x00 | 27 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADP2FL1 | B812F103224006 | 0 | 0 | 0x00 | 28 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADP2FL2 | B812F103224006 | 0 | 0 | 0x00 | 29 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| VSEADP2FL3 | B812F103224006 | 0 | 0 | 0x00 | 30 | 3 | -- | 0.05 | 0 | 0 | 0 | Grd KW |
| KVA_KORR | B812F10221C1 | 0 | 0 | 0x00 | 6 | 3 | -- | 0.001 | 0 | 0 | 0 | % |
| DNLLMV | B812F10330A101 | 0 | 0 | 0x00 | 7 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| DNSACMV | B812F10330A101 | 0 | 0 | 0x00 | 8 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| DNSLBV | B812F10330A101 | 0 | 0 | 0x00 | 9 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| DNFSACMV | B812F10330A101 | 0 | 0 | 0x00 | 10 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| DNFSMV | B812F10330A101 | 0 | 0 | 0x00 | 11 | 3 | -- | 10 | 0 | 0 | 0 | min-1 |
| VVTSW | B812F10322400B | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTIW | B812F10322400B | 0 | 0 | 0x00 | 9 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTTV | B812F10322400B | 0 | 0 | 0x00 | 11 | 2 | -- | 0.392157 | 0 | 0 | 0 | % |
| VVTES | B812F10322400B | 0 | 0 | 0x00 | 12 | 2 | -- | 0.5 | -63.5 | 0 | 0 |   |
| VVTSW2 | B812F10322400B | 0 | 0 | 0x00 | 13 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTIW2 | B812F10322400B | 0 | 0 | 0x00 | 15 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTTV2 | B812F10322400B | 0 | 0 | 0x00 | 17 | 2 | -- | 0.392157 | 0 | 0 | 0 | % |
| VVTES2 | B812F10322400B | 0 | 0 | 0x00 | 18 | 2 | -- | 0.5 | -63.5 | 0 | 0 |   |
| BKRDWS | B812F10322400C | 0 | 0 | 0x00 | 8 | 2 | -- | 1 | 0 | 0 | 0 |   |
| DMVAD | B812F10322400C | 0 | 0 | 0x00 | 9 | 7 | -- | 0.00305185 | 0 | 0 | 0 | % |
| DPS | B812F10322400C | 0 | 0 | 0x00 | 11 | 7 | -- | 0.03906247 | 0 | 0 | 0 | hPa |
| DPSRAUS | B812F10322400C | 0 | 0 | 0x00 | 13 | 5 | -- | 0.03906247 | -1280 | 0 | 0 | hPa |
| FKMSVVT | B812F10322400C | 0 | 0 | 0x00 | 15 | 5 | -- | 0.00006104 | 0 | 0 | 0 |   |
| FPRSTEP | B812F10322400C | 0 | 0 | 0x00 | 17 | 2 | -- | 1 | 0 | 0 | 0 |   |
| LRNSTEP | B812F10322400C | 0 | 0 | 0x00 | 18 | 2 | -- | 1 | 0 | 0 | 0 |   |
| MSNVVTO | B812F10322400C | 0 | 0 | 0x00 | 23 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| NNW10 | B812F10322400C | 0 | 0 | 0x00 | 25 | 3 | -- | 1 | 0 | 0 | 0 |   |
| NNW11 | B812F10322400C | 0 | 0 | 0x00 | 26 | 3 | -- | 1 | 0 | 0 | 0 |   |
| NNW12 | B812F10322400C | 0 | 0 | 0x00 | 27 | 3 | -- | 1 | 0 | 0 | 0 |   |
| NNW20 | B812F10322400C | 0 | 0 | 0x00 | 28 | 3 | -- | 1 | 0 | 0 | 0 |   |
| NNW21 | B812F10322400C | 0 | 0 | 0x00 | 29 | 3 | -- | 1 | 0 | 0 | 0 |   |
| NNW22 | B812F10322400C | 0 | 0 | 0x00 | 30 | 3 | -- | 1 | 0 | 0 | 0 |   |
| NSOLFASTA | B812F10322400D | 0 | 0 | 0x00 | 7 | 5 | -- | 0.25 | 0 | 0 | 0 | min-1 |
| RL | B812F10322400D | 0 | 0 | 0x00 | 9 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| RLSOL | B812F10322400D | 0 | 0 | 0x00 | 11 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| TE | B812F10322400D | 0 | 0 | 0x00 | 13 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| TE2 | B812F10322400D | 0 | 0 | 0x00 | 15 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| VVTSTATUS | B812F10322400D | 0 | 0 | 0x00 | 17 | 5 | -- | 1 | 0 | 0 | 0 |   |
| WDKBAFASTA | B812F10322400D | 0 | 0 | 0x00 | 19 | 7 | -- | 0.02441406 | 0 | 0 | 0 | %DK |
| WDKS | B812F10322400D | 0 | 0 | 0x00 | 21 | 5 | -- | 0.00152588 | 0 | 0 | 0 | % |
| WPED | B812F10322400D | 0 | 0 | 0x00 | 23 | 5 | -- | 0.0015259 | 0 | 0 | 0 | %PED |
| ZWIST | B812F10322400D | 0 | 0 | 0x00 | 25 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad KW |
| BMIL | B812F10322400D | 0 | 0 | 0x00 | 26 | 2 | -- | 1 | 0 | 0 | 0 |   |
| DMLLRI | B812F10322400D | 0 | 0 | 0x00 | 27 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| MIMIN | B812F10322400D | 0 | 0 | 0x00 | 29 | 5 | -- | 0.00152588 | 0 | 0 | 0 | % |
| MDGEN | B812F10322400E | 0 | 0 | 0x00 | 7 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| MDKO | B812F10322400E | 0 | 0 | 0x00 | 8 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| DMRLLR | B812F10322400E | 0 | 0 | 0x00 | 9 | 5 | -- | 0.097647 | 0 | 0 | 0 | % |
| BFS | B812F10322400E | 0 | 0 | 0x00 | 11 | 2 | -- | 1 | 0 | 0 | 0 |   |
| MDWAN | B812F10322400E | 0 | 0 | 0x00 | 12 | 5 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DWKR | B812F10322400E | 0 | 0 | 0x00 | 14 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad KW |
| DZWS | B812F10322400E | 0 | 0 | 0x00 | 15 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad KW |
| DFFGEN | B812F10322400E | 0 | 0 | 0x00 | 16 | 2 | -- | 0.3921568 | 0 | 0 | 0 | % |
| TUMG | B812F10322400E | 0 | 0 | 0x00 | 17 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| DMVADFS | B812F10322400E | 0 | 0 | 0x00 | 18 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DMVADKO | B812F10322400E | 0 | 0 | 0x00 | 20 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DLAHI | B812F10322400E | 0 | 0 | 0x00 | 22 | 7 | -- | 0.000030518 | 0 | 0 | 0 |   |
| DLAHI2 | B812F10322400E | 0 | 0 | 0x00 | 24 | 7 | -- | 0.000030518 | 0 | 0 | 0 |   |
| RINH | B812F10322400E | 0 | 0 | 0x00 | 26 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RINH2 | B812F10322400E | 0 | 0 | 0x00 | 28 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RKATS | B812F10322400E | 0 | 0 | 0x00 | 30 | 7 | -- | 0,046875 | 0 | 0 | 0 |   |
| DPSSOL | B812F10322400E | 0 | 0 | 0x00 | 32 | 7 | -- | 0.03906247 | 0 | 0 | 0 | hPa |
| BATMTPA | B812F103224010 | 0 | 0 | 0x00 | 7 | 2 | -- | 1 | 0 | 0 | 0 |   |
| BATMTPK | B812F103224010 | 0 | 0 | 0x00 | 8 | 2 | -- | 1 | 0 | 0 | 0 |   |
| EVHUBI | B812F103224010 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBI2 | B812F103224010 | 0 | 0 | 0x00 | 11 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBS | B812F103224010 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| BKH | B812F103224010 | 0 | 0 | 0x00 | 17 | 2 | -- | 1 | 0 | 0 | 0 |   |
| BNSUB | B812F103224010 | 0 | 0 | 0x00 | 18 | 2 | -- | 1 | 0 | 0 | 0 |   |
| BTE | B812F103224010 | 0 | 0 | 0x00 | 19 | 2 | -- | 1 | 0 | 0 | 0 |   |
| DFSERESZ | B812F103224010 | 0 | 0 | 0x00 | 20 | 5 | -- | 1 | 0 | 0 | 0 |   |
| DMVADFK | B812F103224010 | 0 | 0 | 0x00 | 22 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| DMVADLL | B812F103224010 | 0 | 0 | 0x00 | 24 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| EXWINKI | B812F103224010 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKI2 | B812F103224010 | 0 | 0 | 0x00 | 28 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKS | B812F103224010 | 0 | 0 | 0x00 | 30 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| B_FE | B812F103224010 | 0 | 0 | 0x00 | 32 | 2 | -- | 1 | 0 | 0 | 0 |   |
| FKMSVVTA | B812F103224011 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.00006104 | 0 | 0 | 0 |   |
| FOFRESZ | B812F103224011 | 0 | 0 | 0x00 | 9 | 5 | -- | 1 | 0 | 0 | 0 |   |
| MSDIF | B812F103224011 | 0 | 0 | 0x00 | 11 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| TABGM | B812F103224011 | 0 | 0 | 0x00 | 13 | 2 | -- | 5 | -50 | 0 | 0 | Grad C |
| TNSE | B812F103224011 | 0 | 0 | 0x00 | 14 | 5 | -- | 0.1 | 0 | 0 | 0 | s |
| OZRWPERM | B812F103224011 | 0 | 0 | 0x00 | 16 | 7 | -- | 10 | 0 | 0 | 0 |   |
| OZRWKVB | B812F103224011 | 0 | 0 | 0x00 | 18 | 7 | -- | 10 | 0 | 0 | 0 |   |
| OZPERMLOW | B812F103224011 | 0 | 0 | 0x00 | 28 | 5 | -- | 0.00009155 | 0 | 0 | 0 |   |
| OZPERMEX | B812F103224011 | 0 | 0 | 0x00 | 30 | 5 | -- | 0.00009155 | 0 | 0 | 0 |   |
| OZPERMOFF | B812F103224011 | 0 | 0 | 0x00 | 32 | 7 | -- | 0.00018311 | 0 | 0 | 0 |   |
| OZKVBOG | B812F103224011 | 0 | 0 | 0x00 | 34 | 7 | -- | 1 | 0 | 0 | 0 |   |
| OZPERMBOG | B812F103224011 | 0 | 0 | 0x00 | 36 | 7 | -- | 0.00009155 | 0 | 0 | 0 |   |
| NADMTLL | B812F103224012 | 0 | 0 | 0x00 | 7 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NTGLM | B812F103224012 | 0 | 0 | 0x00 | 9 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NTKLM | B812F103224012 | 0 | 0 | 0x00 | 11 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NDIPFRO | B812F103224012 | 0 | 0 | 0x00 | 13 | 5 | -- | 1 | 0 | 0 | 0 |   |
| NKFL | B812F103224012 | 0 | 0 | 0x00 | 15 | 2 | -- | 1 | 0 | 0 | 0 |   |
| CO_POT | B812F10322400f | 0 | 0 | 0x00 | 9 | 5 | -- | 1 | 0 | 0 | 0 |   |
| UPWG | B812F10322400f | 0 | 0 | 0x00 | 11 | 5 | -- | 0.00488281 | 0 | 0 | 0 | V |
| MINHUB | B812F10322400f | 0 | 0 | 0x00 | 13 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| GVIST | B812F10322400f | 0 | 0 | 0x00 | 16 | 5 | -- | 1 | 0 | 0 | 0 |   |
| FTBR | B812F10322400f | 0 | 0 | 0x00 | 18 | 5 | -- | 0.00003051 | 0 | 0 | 0 |   |
| FHO | B812F10322400f | 0 | 0 | 0x00 | 20 | 5 | -- | 0.00006103 | 0 | 0 | 0 |   |
| FTVDK | B812F10322400f | 0 | 0 | 0x00 | 22 | 2 | -- | 0.0078125 | 0 | 0 | 0 |   |
| MSNVVTOLL | B812F10322400f | 0 | 0 | 0x00 | 24 | 5 | -- | 0.11 | 0 | 0 | 0 | kg/h |
| VSE_SPRS | B812F10322400F | 0 | 0 | 0x00 | 27 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSE2SPRS | B812F10322400F | 0 | 0 | 0x00 | 29 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSA_SPRS | B812F10322400F | 0 | 0 | 0x00 | 31 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSA2SPRS | B812F10322400F | 0 | 0 | 0x00 | 33 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| RKAT | B812F103224004 | 0 | 0 | 0x00 | 7 | 7 | -- | 0.0468749 | 0 | 0 | 0 | % |
| RKAT2 | B812F103224004 | 0 | 0 | 0x00 | 9 | 7 | -- | 0.0468749 | 0 | 0 | 0 | % |
| FRA | B812F103224004 | 0 | 0 | 0x00 | 11 | 5 | -- | 0.00003052 | 0 | 0 | 0 |   |
| FRA2 | B812F103224004 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.00003052 | 0 | 0 | 0 |   |
| TEDUB | B812F103224004 | 0 | 0 | 0x00 | 15 | 2 | -- | 0.01 | 0 | 0 | 0 | s |
| TEDUB2 | B812F103224004 | 0 | 0 | 0x00 | 16 | 2 | -- | 0.01 | 0 | 0 | 0 | s |
| DYNLSU | B812F103224004 | 0 | 0 | 0x00 | 17 | 5 | -- | 0.00024414 | 0 | 0 | 0 |   |
| DYNLSU2 | B812F103224004 | 0 | 0 | 0x00 | 19 | 5 | -- | 0.00024414 | 0 | 0 | 0 |   |
| LAMSONI | B812F103224004 | 0 | 0 | 0x00 | 21 | 5 | -- | 0.00024414 | 0 | 0 | 0 |   |
| LAMSONI2 | B812F103224004 | 0 | 0 | 0x00 | 23 | 5 | -- | 0.00024414 | 0 | 0 | 0 |   |
| TATEIST | B812F103224005 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| VSASPRI | B812F103224005 | 0 | 0 | 0x00 | 8 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSASPRI2 | B812F103224005 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSESPRI | B812F103224005 | 0 | 0 | 0x00 | 12 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSESPRI2 | B812F103224005 | 0 | 0 | 0x00 | 14 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSATV | B812F103224005 | 0 | 0 | 0x00 | 16 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSATV2 | B812F103224005 | 0 | 0 | 0x00 | 18 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSETV | B812F103224005 | 0 | 0 | 0x00 | 20 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSETV2 | B812F103224005 | 0 | 0 | 0x00 | 22 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| TAML | B812F103224005 | 0 | 0 | 0x00 | 24 | 2 | -- | 0.39215686 | 0 | 0 | 0 | % |
| WTSG | B812F103304101 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| USHK2 | B812F103304501 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| USHK2_14 | B812F103304501 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UPWG1 | B812F103304601 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| UPWG2 | B812F103304701 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| USHK | B812F103304801 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| USHK_14 | B812F103304801 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| WUB | B812F103304A01 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| UDKP2 | B812F103304C01 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.001222 | 0 | 0 | 0 | V |
| UDKP1V | B812F103304D01 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.00488828 | 0 | 0 | 0 | V |
| UDKP1 | B812F103304E01 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.001222 | 0 | 0 | 0 | V |
| UHFM | B812F103304F01 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| WTMOT | B812F103305001 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| WTANS | B812F103305101 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| WTKA | B812F103305201 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| UHSV | B812F103305C01 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| UHSV2 | B812F103305D01 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| UHSH | B812F103305E01 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| UHSH2 | B812F103305F01 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| WTOL | B812F103306901 | 0 | 0 | 0x00 | 7 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| DISA | B812F103306D01 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| UDDSS | B812F103306F01 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| UDSU | B812F103307001 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| ENDE |  |  |  |  | 1 | 1 | -- | 1 | 0 | 0 | 0 |   |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_FOFR1 | 23 | 0x01 | 0x01 |
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
| B_KRDWS | 8 | 0x01 | 0x01 |
| B_MIL | 26 | 0x01 | 0x01 |
| B_FS | 11 | 0x01 | 0x01 |
| B_ATMTPA | 7 | 0x01 | 0x01 |
| B_ATMTPK | 8 | 0x01 | 0x01 |
| B_KH | 17 | 0x01 | 0x01 |
| B_TE | 19 | 0x01 | 0x01 |
| B_SLV | 25 | 0x02 | 0x02 |
| B_SLP | 25 | 0x04 | 0x04 |
| B_KOE | 25 | 0x08 | 0x08 |
| B_HSVE2 | 25 | 0x10 | 0x10 |
| B_HSVE | 25 | 0x20 | 0x20 |
| B_HSHE2 | 25 | 0x40 | 0x40 |
| B_HSHE | 25 | 0x80 | 0x80 |
| B_AKR | 26 | 0x08 | 0x08 |
| B_EBL | 26 | 0x10 | 0x10 |
| B_EKP | 26 | 0x20 | 0x20 |
| B_ETR | 26 | 0x40 | 0x40 |
| B_STA | 26 | 0x80 | 0x80 |
| B_NOKATFZ | 7 | 0x01 | 0x01 |
| B_AUTGET | 7 | 0x02 | 0x02 |
| B_ACC | 7 | 0x04 | 0x04 |
| B_ASCPKW | 7 | 0x08 | 0x08 |
| B_ARSVAR | 7 | 0x10 | 0x10 |
| B_TXUGET | 7 | 0x20 | 0x20 |
| B_KOGER | 7 | 0x40 | 0x40 |
| B_AGR | 7 | 0x80 | 0x80 |
| B_MFL | 8 | 0x01 | 0x01 |
| B_AKRFZ | 8 | 0x02 | 0x02 |
| B_KFTVAR | 8 | 0x04 | 0x04 |
| B_KATFZ | 6 | 0x01 | 0x01 |
| B_CDTES | 6 | 0x04 | 0x04 |
| B_CDSLS | 6 | 0x08 | 0x08 |
| B_CDLSV | 6 | 0x20 | 0x20 |
| B_CDHSV | 6 | 0x40 | 0x40 |
| B_CDAGR | 6 | 0x80 | 0x80 |
| B_KATRDY | 7 | 0x01 | 0x01 |
| B_TESRDY | 7 | 0x04 | 0x04 |
| B_SLSRDY | 7 | 0x08 | 0x08 |
| B_LSRDY | 7 | 0x20 | 0x20 |
| B_HSRDY | 7 | 0x40 | 0x40 |
| B_AGRRDY | 7 | 0x80 | 0x80 |
| B_FGRAT | 6 | 0x01 | 0x01 |
| B_FGRHSA | 6 | 0x02 | 0x02 |
| B_FGRTBE | 6 | 0x04 | 0x04 |
| B_FGRTSE | 6 | 0x08 | 0x08 |
| B_FGRTVE | 6 | 0x10 | 0x10 |
| B_FGRTWA | 6 | 0x20 | 0x20 |
| L_FGR | 6 | 0x40 | 0x40 |
| B_ACC_FGR | 6 | 0x80 | 0x80 |
| Z_LSH | 4 | 0x02 | 0x02 |
| Z_LSH2 | 4 | 0x02 | 0x02 |

### FASTABITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_ECULOCK | 7 | 0xff | 0x01 |
| B_LRNRDY | 8 | 0xff | 0x01 |
| B_LLTD | 15 | 0xff | 0x01 |
| B_LLK | 23 | 0xff | 0x01 |
| B_TE | 26 | 0xff | 0x01 |
| B_VVTNOTL | 27 | 0xff | 0x01 |

### FGRBITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_FGRAT | 6 | 0x01 | 0x01 |
| B_FGRHSA | 6 | 0x02 | 0x02 |
| B_FGRTBE | 6 | 0x04 | 0x04 |
| B_FGRTSE | 6 | 0x08 | 0x08 |
| B_FGRTVE | 6 | 0x10 | 0x10 |
| B_FGRTWA | 6 | 0x20 | 0x20 |
| B_FGR | 6 | 0x40 | 0x40 |
| B_ACC | 6 | 0x80 | 0x80 |

### READINESSBITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_KATFZ | 6 | 0x01 | 0x01 |
| B_CDTES | 6 | 0x04 | 0x04 |
| B_CDSLS | 6 | 0x08 | 0x08 |
| B_CDLSV | 6 | 0x20 | 0x20 |
| B_HSV | 6 | 0x40 | 0x40 |
| B_CDAGR | 6 | 0x80 | 0x80 |
| B_KATRDY | 7 | 0x01 | 0x01 |
| B_TESRDY | 7 | 0x04 | 0x04 |
| B_SLSRDY | 7 | 0x08 | 0x08 |
| B_LSVRDY | 7 | 0x20 | 0x20 |
| B_HSRDY | 7 | 0x40 | 0x40 |
| B_AGRRDY | 7 | 0x80 | 0x80 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 00654321 |
| F_PCODE | ja |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### PCODETEXTE

| PCODE | STRING | TEXT |
| --- | --- | --- |
| 0x0000 | -- |  |
| 0x0001 | P0001 | P0001 Kraftstoffvolumenregler - Fehlfunktion oder Leitungsunterbrechung |
| 0x0002 | P0002 | P0002 Kraftstoffvolumenregler - Meßbereichs- oder Leistungsproblem |
| 0x0003 | P0003 | P0003 Kraftstoffvolumenregler - Input niedrig |
| 0x0004 | P0004 | P0004 Kraftstoffvolumenregler - Input hoch |
| 0x0005 | P0005 | P0005 Kraftstoffabsperrventil 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0006 | P0006 | P0006 Kraftstoffabsperrventil 1 - Input niedrig |
| 0x0007 | P0007 | P0007 Kraftstoffabsperrventil 1 - Input hoch |
| 0x0010 | P0010 | P0010 Nockenwellenversteller Einlass (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0011 | P0011 | P0011 Nockenwellensteuerung Einlass (Bank 1) - Adaptionswert Spätposition unplausibel oder Leistungsproblem |
| 0x0012 | P0012 | P0012 Nockenwellensteuerung Einlass (Bank 1) - Regelfehler, unplausible Position |
| 0x0013 | P0013 | P0013 Nockenwellenversteller Auslass (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0014 | P0014 | P0014 Nockenwellensteuerung Auslass (Bank 1) - Adaptionswert Frühposition unplausibel oder Leistungsproblem |
| 0x0015 | P0015 | P0015 Nockenwellensteuerung Auslass (Bank 1) - Regelfehler, unplausible Position |
| 0x0016 | P0016 | P0016 Kurbelwellenstellung - Nockenwellenstellung Einlass (Bank 1) - Korrelationsfehler |
| 0x0017 | P0017 | P0017 Kurbelwellenstellung - Nockenwellenstellung Auslass (Bank 1) - Korrelationsfehler |
| 0x0018 | P0018 | P0018 Kurbelwellenstellung - Nockenwellenstellung Einlass (Bank 2) - Korrelationsfehler |
| 0x0019 | P0019 | P0019 Kurbelwellenstellung - Nockenwellenstellung Auslass (Bank 2) - Korrelationsfehler |
| 0x0020 | P0020 | P0020 Nockenwellenversteller Einlass (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0021 | P0021 | P0021 Nockenwellensteuerung Einlass (Bank 2) - Adaptionswert Spätposition unplausibel oder Leistungsproblem |
| 0x0022 | P0022 | P0022 Nockenwellensteuerung Einlass (Bank 2) - Regelfehler, unplausible Position |
| 0x0023 | P0023 | P0023 Nockenwellenversteller Auslass (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0024 | P0024 | P0024 Nockenwellensteuerung Auslass (Bank 2) - Adaptionswert Frühposition unplausibel oder Leistungsproblem |
| 0x0025 | P0025 | P0025 Nockenwellensteuerung Auslass (Bank 2) - Regelfehler, unplausible Position |
| 0x0030 | P0030 | P0030 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x0031 | P0031 | P0031 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Input niedrig |
| 0x0032 | P0032 | P0032 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Input hoch |
| 0x0033 | P0033 | P0033 |
| 0x0034 | P0034 | P0034 |
| 0x0035 | P0035 | P0035 |
| 0x0036 | P0036 | P0036 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x0037 | P0037 | P0037 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Input niedrig |
| 0x0038 | P0038 | P0038 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Input hoch |
| 0x0040 | P0040 | P0040 Lambdasonden Signal Bank 1 vor Katalysator / Bank 2 vor Katalysator - vertauscht  |
| 0x0041 | P0041 | P0041 Lambdasonden Signal Bank 1 nach Katalysator / Bank 2 nach Katalysator - vertauscht  |
| 0x0042 | P0042 | P0042 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, Sonde 3)  - Fehlfunktion |
| 0x0043 | P0043 | P0043 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, Sonde 3) - Input niedrig |
| 0x0044 | P0044 | P0044 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, Sonde 3) - Input hoch |
| 0x0050 | P0050 | P0050 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x0051 | P0051 | P0051 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Input niedrig |
| 0x0052 | P0052 | P0052 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Input hoch |
| 0x0056 | P0056 | P0056 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x0057 | P0057 | P0057 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Input niedrig |
| 0x0058 | P0058 | P0058 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Input hoch |
| 0x0062 | P0062 | P0062 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, Sonde 3)  - Fehlfunktion |
| 0x0063 | P0063 | P0063 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, Sonde 3) - Input niedrig |
| 0x0064 | P0064 | P0064 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, Sonde 3) - Input hoch |
| 0x0065 | P0065 | P0065 Luftumfasstes Einspritzventil - Meßbereichs- oder Leistungsproblem |
| 0x0066 | P0066 | P0066 Luftumfasstes Einspritzventil - Fehlfunktion oder Input niedrig |
| 0x0067 | P0067 | P0067 Luftumfasstes Einspritzventil - Input hoch |
| 0x0069 | P0069 | P0069 Absoluter Druck im Saugrohr / barometrischer Druck - Korrelationsfehler |
| 0x0070 | P0070 | P0070 Umgebungstemperaturfühler -  Fehlfunktion |
| 0x0071 | P0071 | P0071 Umgebungstemperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0072 | P0072 | P0072 Umgebungstemperaturfühler - Input niedrig |
| 0x0073 | P0073 | P0073 Umgebungstemperaturfühler - Input hoch |
| 0x0074 | P0074 | P0074 Umgebungstemperaturfühler - Input sporadisch |
| 0x0075 | P0075 | P0075 |
| 0x0076 | P0076 | P0076 |
| 0x0077 | P0077 | P0077 |
| 0x0078 | P0078 | P0078 |
| 0x0079 | P0079 | P0079 |
| 0x0080 | P0080 | P0080 |
| 0x0081 | P0081 | P0081 |
| 0x0082 | P0082 | P0082 |
| 0x0083 | P0083 | P0083 |
| 0x0084 | P0084 | P0084 |
| 0x0085 | P0085 | P0085 |
| 0x0086 | P0086 | P0086 |
| 0x0089 | P0089 | P0089 Kraftstoffdruckregler 1 - Leistungsproblem |
| 0x0090 | P0090 | P0090 Kraftstoffdruckregler 1 - Fehlfunktion |
| 0x0091 | P0091 | P0091 Kraftstoffdruckregler 1 - Input niedrig |
| 0x0092 | P0092 | P0092 Kraftstoffdruckregler 1 - Input hoch |
| 0x0095 | P0095 | P0095 Ansauglufttemperaturfühler 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0096 | P0096 | P0096 Ansauglufttemperaturfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x0097 | P0097 | P0097 Ansauglufttemperaturfühler 2 - Input niedrig |
| 0x0098 | P0098 | P0098 Ansauglufttemperaturfühler 2 - Input hoch |
| 0x0099 | P0099 | P0099 Ansauglufttemperaturfühler 2 - Input sporadisch/unregelmäßig |
| 0x0100 | P0100 | P0100 Luftmassen- oder Luftmengendurchsatz - Fehlfunktion |
| 0x0101 | P0101 | P0101 Luftmassen- oder Luftmengendurchsatz - Meßbereichs- oder Leistungsproblem |
| 0x0102 | P0102 | P0102 Luftmassen- oder Luftmengendurchsatz - Input niedrig |
| 0x0103 | P0103 | P0103 Luftmassen- oder Luftmengendurchsatz - Input hoch |
| 0x0104 | P0104 | P0104 Luftmassen- oder Luftmengendurchsatz - Input sporadisch |
| 0x0105 | P0105 | P0105 Absoluter Druck im Saugrohr / barometrischer Druck - Fehlfunktion |
| 0x0106 | P0106 | P0106 Absoluter Druck im Saugrohr / barometrischer Druck - Meßbereichs- oder Leistungsproblem |
| 0x0107 | P0107 | P0107 Absoluter Druck im Saugrohr / barometrischer Druck - Input niedrig |
| 0x0108 | P0108 | P0108 Absoluter Druck im Saugrohr / barometrischer Druck - Input hoch |
| 0x0109 | P0109 | P0109 Absoluter Druck im Saugrohr / barometrischer Druck - Input sporadisch |
| 0x0110 | P0110 | P0110 Ansauglufttemperaturfühler 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0111 | P0111 | P0111 Ansauglufttemperaturfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0112 | P0112 | P0112 Ansauglufttemperaturfühler 1 - Input niedrig |
| 0x0113 | P0113 | P0113 Ansauglufttemperaturfühler 1 - Input hoch |
| 0x0114 | P0114 | P0114 Ansauglufttemperaturfühler 1 - Input sporadisch |
| 0x0115 | P0115 | P0115 Motorkühlmitteltemperatur - Fehlfunktion |
| 0x0116 | P0116 | P0116 Motorkühlmitteltemperatur - Meßbereichs- oder Leistungsproblem |
| 0x0117 | P0117 | P0117 Motorkühlmitteltemperatur - Input niedrig |
| 0x0118 | P0118 | P0118 Motorkühlmitteltemperatur - Input hoch |
| 0x0119 | P0119 | P0119 Motorkühlmitteltemperatur - Input sporadisch |
| 0x0120 | P0120 | P0120 Drosselklappenpotentiometer 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0121 | P0121 | P0121 Drosselklappenpotentiometer 1 - Meßbereichs- oder Leistungsproblem |
| 0x0122 | P0122 | P0122 Drosselklappenpotentiometer 1 - Input niedrig |
| 0x0123 | P0123 | P0123 Drosselklappenpotentiometer 1 - Input hoch |
| 0x0124 | P0124 | P0124 Drosselklappenpotentiometer 1 - Input sporadisch |
| 0x0125 | P0125 | P0125 Kühlmitteltemperatur - zu niedrig für Lambdaregelung |
| 0x0126 | P0126 | P0126 Kühlmitteltemperatur - zu niedrig für stetigen Betrieb |
| 0x0127 | P0127 | P0127 Ansauglufttemperatur - zu hoch |
| 0x0128 | P0128 | P0128 Kühlmittelthermostat (Kühlmitteltemperatur unterhalb Thermostat Regeltemperatur) |
| 0x0129 | P0129 | P0129 Barometrischer Druck zu niedrig |
| 0x0130 | P0130 | P0130 Lambdasonde (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x0131 | P0131 | P0131 Lambdasonde (Bank 1, vor Katalysator) - Spannung niedrig |
| 0x0132 | P0132 | P0132 Lambdasonde (Bank 1, vor Katalysator) - Spannung hoch |
| 0x0133 | P0133 | P0133 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion |
| 0x0134 | P0134 | P0134 Lambdasonde (Bank 1, vor Katalysator) - keine Aktivität festzustellen |
| 0x0135 | P0135 | P0135 Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x0136 | P0136 | P0136 Lambdasonde (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x0137 | P0137 | P0137 Lambdasonde (Bank 1, nach Katalysator) - Spannung niedrig |
| 0x0138 | P0138 | P0138 Lambdasonde (Bank 1, nach Katalysator) - Spannung hoch |
| 0x0139 | P0139 | P0139 Lambdasonde (Bank 1, nach Katalysator) - langsame Reaktion |
| 0x0140 | P0140 | P0140 Lambdasonde (Bank 1, nach Katalysator) - keine Aktivität festzustellen |
| 0x0141 | P0141 | P0141 Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x0142 | P0142 | P0142 Lambdasonde (Bank 1, Sensor 3) - Fehlfunktion |
| 0x0143 | P0143 | P0143 Lambdasonde (Bank 1, Sensor 3) - Spannung niedrig |
| 0x0144 | P0144 | P0144 Lambdasonde (Bank 1, Sensor 3) - Spannung hoch |
| 0x0145 | P0145 | P0145 Lambdasonde (Bank 1, Sensor 3) - langsame Reaktion |
| 0x0146 | P0146 | P0146 Lambdasonde (Bank 1, Sensor 3) - keine Aktivität festzustellen |
| 0x0147 | P0147 | P0147 Lambdasonde Heizungsschaltkreis (Bank 1, Sensor 3) - Fehlfunktion |
| 0x0150 | P0150 | P0150 Lambdasonde (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x0151 | P0151 | P0151 Lambdasonde (Bank 2, vor Katalysator) - Spannung niedrig |
| 0x0152 | P0152 | P0152 Lambdasonde (Bank 2, vor Katalysator) - Spannung hoch |
| 0x0153 | P0153 | P0153 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion |
| 0x0154 | P0154 | P0154 Lambdasonde (Bank 2, vor Katalysator) - keine Aktivität festzustellen |
| 0x0155 | P0155 | P0155 Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x0156 | P0156 | P0156 Lambdasonde (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x0157 | P0157 | P0157 Lambdasonde (Bank 2, nach Katalysator) - Spannung niedrig |
| 0x0158 | P0158 | P0158 Lambdasonde (Bank 2, nach Katalysator) - Spannung hoch |
| 0x0159 | P0159 | P0159 Lambdasonde (Bank 2, nach Katalysator) - langsame Reaktion |
| 0x0160 | P0160 | P0160 Lambdasonde (Bank 2, nach Katalysator) - keine Aktivität festzustellen |
| 0x0161 | P0161 | P0161 Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x0162 | P0162 | P0162 Lambdasonde (Bank 2, Sensor 3) - Fehlfunktion |
| 0x0163 | P0163 | P0163 Lambdasonde (Bank 2, Sensor 3) - Spannung niedrig |
| 0x0164 | P0164 | P0164 Lambdasonde (Bank 2, Sensor 3) - Spannung hoch |
| 0x0165 | P0165 | P0165 Lambdasonde (Bank 2, Sensor 3) - langsame Reaktion |
| 0x0166 | P0166 | P0166 Lambdasonde (Bank 2, Sensor 3) - keine Aktivität festzustellen |
| 0x0167 | P0167 | P0167 Lambdasonde Heizungsschaltkreis (Bank 2, Sonde 3) - Fehlfunktion |
| 0x0168 | P0168 | P0168 Kraftstofftemperatur - zu hoch |
| 0x0169 | P0169 | P0169 |
| 0x0170 | P0170 | P0170 Gemischregelung (Bank 1) - Fehlfunktion |
| 0x0171 | P0171 | P0171 Gemischregelung (Bank 1) - System zu mager |
| 0x0172 | P0172 | P0172 Gemischregelung (Bank 1) - System zu fett |
| 0x0173 | P0173 | P0173 Gemischregelung (Bank 2) - Fehlfunktion |
| 0x0174 | P0174 | P0174 Gemischregelung (Bank 2) - System zu mager |
| 0x0175 | P0175 | P0175 Gemischregelung (Bank 2) - System zu fett |
| 0x0176 | P0176 | P0176 Meßsonde Kraftstoffzusammensetzung - Fehlfunktion |
| 0x0177 | P0177 | P0177 Meßsonde Kraftstoffzusammensetzung - Meßbereichs- oder Leistungsproblem |
| 0x0178 | P0178 | P0178 Meßsonde Kraftstoffzusammensetzung - Input niedrig |
| 0x0179 | P0179 | P0179 Meßsonde Kraftstoffzusammensetzung - Input hoch |
| 0x0180 | P0180 | P0180 Kraftstofftemperaturfühler 1 - Fehlfunktion |
| 0x0181 | P0181 | P0181 Kraftstofftemperaturfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0182 | P0182 | P0182 Kraftstofftemperaturfühler 1 - Input niedrig |
| 0x0183 | P0183 | P0183 Kraftstofftemperaturfühler 1 - Input hoch |
| 0x0184 | P0184 | P0184 Kraftstofftemperaturfühler 1 - Input sporadisch |
| 0x0185 | P0185 | P0185 Kraftstofftemperaturfühler 2 - Fehlfunktion |
| 0x0186 | P0186 | P0186 Kraftstofftemperaturfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x0187 | P0187 | P0187 Kraftstofftemperaturfühler 2 - Input niedrig |
| 0x0188 | P0188 | P0188 Kraftstofftemperaturfühler 2 - Input hoch |
| 0x0189 | P0189 | P0189 Kraftstofftemperaturfühler 2 - Input sporadisch |
| 0x0190 | P0190 | P0190 Kraftstoffeinspritzleiste Drucksensor - Fehlfunktion |
| 0x0191 | P0191 | P0191 Kraftstoffeinspritzleiste Drucksensor - Meßbereichs- oder Leistungsproblem |
| 0x0192 | P0192 | P0192 Kraftstoffeinspritzleiste Drucksensor - Input niedrig |
| 0x0193 | P0193 | P0193 Kraftstoffeinspritzleiste Drucksensor - Input hoch |
| 0x0194 | P0194 | P0194 Kraftstoffeinspritzleiste Drucksensor - Input sporadisch |
| 0x0195 | P0195 | P0195 Motoröltemperaturfühler - Fehlfunktion |
| 0x0196 | P0196 | P0196 Motoröltemperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0197 | P0197 | P0197 Motoröltemperaturfühler - Input niedrig |
| 0x0198 | P0198 | P0198 Motoröltemperaturfühler - Input hoch |
| 0x0199 | P0199 | P0199 Motoröltemperaturfühler - Input sporadisch |
| 0x0200 | P0200 | P0200 Einspritzung - Fehlfunktion oder Leitungsunterbrechung |
| 0x0201 | P0201 | P0201 Einspritzung Zylinder 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0202 | P0202 | P0202 Einspritzung Zylinder 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0203 | P0203 | P0203 Einspritzung Zylinder 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0204 | P0204 | P0204 Einspritzung Zylinder 4 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0205 | P0205 | P0205 Einspritzung Zylinder 5 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0206 | P0206 | P0206 Einspritzung Zylinder 6 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0207 | P0207 | P0207 Einspritzung Zylinder 7 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0208 | P0208 | P0208 Einspritzung Zylinder 8 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0209 | P0209 | P0209 Einspritzung Zylinder 9 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0210 | P0210 | P0210 Einspritzung Zylinder 10 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0211 | P0211 | P0211 Einspritzung Zylinder 11 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0212 | P0212 | P0212 Einspritzung Zylinder 12 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0213 | P0213 | P0213 Kaltstarteinspritzung 1 - Fehlfunktion |
| 0x0214 | P0214 | P0214 Kaltstarteinspritzung 2 - Fehlfunktion |
| 0x0216 | P0216 | P0216 Einspritzzeitregelung - Fehlfunktion |
| 0x0217 | P0217 | P0217 Motorkühlmitteltemperatur - zu hoch |
| 0x0218 | P0218 | P0218 Getriebeöltemperatur - zu hoch |
| 0x0219 | P0219 | P0219 Motordrehzahl - zu hoch |
| 0x0220 | P0220 | P0220 Drosselklappenpotentiometer 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0221 | P0221 | P0221 Drosselklappenpotentiometer 2 - Meßbereichs- oder Leistungsproblem |
| 0x0222 | P0222 | P0222 Drosselklappenpotentiometer 2 - Input niedrig |
| 0x0223 | P0223 | P0223 Drosselklappenpotentiometer 2 - Input hoch |
| 0x0224 | P0224 | P0224 Drosselklappenpotentiometer 2 - Input sporadisch |
| 0x0225 | P0225 | P0225 Drosselklappenpotentiometer 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0226 | P0226 | P0226 Drosselklappenpotentiometer 3 - Meßbereichs- oder Leistungsproblem |
| 0x0227 | P0227 | P0227 Drosselklappenpotentiometer 3 - Input niedrig |
| 0x0228 | P0228 | P0228 Drosselklappenpotentiometer 3 - Input hoch |
| 0x0229 | P0229 | P0229 Drosselklappenpotentiometer 3 - Input sporadisch |
| 0x0230 | P0230 | P0230 Kraftststoffpumpe Primärkreis - Fehlfunktion |
| 0x0231 | P0231 | P0231 Kraftststoffpumpe Sekundärkreis - Input niedrig |
| 0x0232 | P0232 | P0232 Kraftststoffpumpe Sekundärkreis - Input hoch |
| 0x0233 | P0233 | P0233 Kraftststoffpumpe Sekundärkreis - Input sporadisch |
| 0x0234 | P0234 | P0234 |
| 0x0235 | P0235 | P0235 Turbolader/Verdichter Ladedrucksensor 1 - Fehlfunktion |
| 0x0236 | P0236 | P0236 Turbolader/Verdichter Ladedrucksensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0237 | P0237 | P0237 Turbolader/Verdichter Ladedrucksensor 1 - Input niedrig |
| 0x0238 | P0238 | P0238 Turbolader/Verdichter Ladedrucksensor 1 - Input hoch |
| 0x0239 | P0239 | P0239 Turbolader/Verdichter Ladedrucksensor 1 - Fehlfunktion |
| 0x0240 | P0240 | P0240 Turbolader/Verdichter Ladedrucksensor 2 - Meßbereichs- oder Leistungsproblem |
| 0x0241 | P0241 | P0241 Turbolader/Verdichter Ladedrucksensor 2 - Input niedrig |
| 0x0242 | P0242 | P0242 Turbolader/Verdichter Ladedrucksensor 2 - Input hoch |
| 0x0243 | P0243 | P0243 Turbolader, Abgassolenoid 'A' - Fehlfunktion |
| 0x0244 | P0244 | P0244 Turbolader, Abgassolenoid 'A' - Input niedrig |
| 0x0245 | P0245 | P0245 Turbolader, Abgassolenoid 'A' - Input hoch |
| 0x0246 | P0246 | P0246 Turbolader, Abgassolenoid 'A' - Input sporadisch |
| 0x0247 | P0247 | P0247 Turbolader, Abgassolenoid 'B' - Fehlfunktion |
| 0x0248 | P0248 | P0248 Turbolader, Abgassolenoid 'B' - Input niedrig |
| 0x0249 | P0249 | P0249 Turbolader, Abgassolenoid 'B' - Input hoch |
| 0x0250 | P0250 | P0250 Turbolader, Abgassolenoid 'B' - Input sporadisch |
| 0x0251 | P0251 | P0251 Einspritzpumpe 'A', Rotor/Nocke - Fehlfunktion |
| 0x0252 | P0252 | P0252 Einspritzpumpe 'A', Rotor/Nocke - Meßbereichs- oder Leistungsproblem |
| 0x0253 | P0253 | P0253 Einspritzpumpe 'A', Rotor/Nocke - Input niedrig |
| 0x0254 | P0254 | P0254 Einspritzpumpe 'A', Rotor/Nocke - Input hoch |
| 0x0255 | P0255 | P0255 Einspritzpumpe 'A', Rotor/Nocke - Input sporadisch |
| 0x0256 | P0256 | P0256 Einspritzpumpe 'B', Rotor/Nocke - Fehlfunktion |
| 0x0257 | P0257 | P0257 Einspritzpumpe 'B', Rotor/Nocke - Meßbereichs- oder Leistungsproblem |
| 0x0258 | P0258 | P0258 Einspritzpumpe 'B', Rotor/Nocke - Input niedrig |
| 0x0259 | P0259 | P0259 Einspritzpumpe 'B', Rotor/Nocke - Input hoch |
| 0x0260 | P0260 | P0260 Einspritzpumpe 'B', Rotor/Nocke - Input sporadisch |
| 0x0261 | P0261 | P0261 Einspritzung Zylinder 1 - Input niedrig |
| 0x0262 | P0262 | P0262 Einspritzung Zylinder 1 - Input hoch |
| 0x0263 | P0263 | P0263 |
| 0x0264 | P0264 | P0264 Einspritzung Zylinder 2 - Input niedrig |
| 0x0265 | P0265 | P0265 Einspritzung Zylinder 2 - Input hoch |
| 0x0266 | P0266 | P0266 |
| 0x0267 | P0267 | P0267 Einspritzung Zylinder 3 - Input niedrig |
| 0x0268 | P0268 | P0268 Einspritzung Zylinder 3 - Input hoch |
| 0x0269 | P0269 | P0269 |
| 0x0270 | P0270 | P0270 Einspritzung Zylinder 4 - Input niedrig |
| 0x0271 | P0271 | P0271 Einspritzung Zylinder 4 - Input hoch |
| 0x0272 | P0272 | P0272 |
| 0x0273 | P0273 | P0273 Einspritzung Zylinder 5 - Input niedrig |
| 0x0274 | P0274 | P0274 Einspritzung Zylinder 5 - Input hoch |
| 0x0275 | P0275 | P0275 |
| 0x0276 | P0276 | P0276 Einspritzung Zylinder 6 - Input niedrig |
| 0x0277 | P0277 | P0277 Einspritzung Zylinder 6 - Input hoch |
| 0x0278 | P0278 | P0278 |
| 0x0279 | P0279 | P0279 Einspritzung Zylinder 7 - Input niedrig |
| 0x0280 | P0280 | P0280 Einspritzung Zylinder 7 - Input hoch |
| 0x0281 | P0281 | P0281 |
| 0x0282 | P0282 | P0282 Einspritzung Zylinder 8 - Input niedrig |
| 0x0283 | P0283 | P0283 Einspritzung Zylinder 8 - Input hoch |
| 0x0284 | P0284 | P0284 |
| 0x0285 | P0285 | P0285 Einspritzung Zylinder 9 - Input niedrig |
| 0x0286 | P0286 | P0286 Einspritzung Zylinder 9 - Input hoch |
| 0x0287 | P0287 | P0287 |
| 0x0288 | P0288 | P0288 Einspritzung Zylinder 10 - Input niedrig |
| 0x0289 | P0289 | P0289 Einspritzung Zylinder 10 - Input hoch |
| 0x0290 | P0290 | P0290 |
| 0x0291 | P0291 | P0291 Einspritzung Zylinder 11 - Input niedrig |
| 0x0292 | P0292 | P0292 Einspritzung Zylinder 11 - Input hoch |
| 0x0293 | P0293 | P0293 |
| 0x0294 | P0294 | P0294 Einspritzung Zylinder 12 - Input niedrig |
| 0x0295 | P0295 | P0295 Einspritzung Zylinder 12 - Input hoch |
| 0x0296 | P0296 | P0296 |
| 0x0298 | P0298 | P0298 Motoröltemperatur - zu hoch |
| 0x0300 | P0300 | P0300 Verbrennungsaussetzer erkannt - mehrere Zylinder |
| 0x0301 | P0301 | P0301 Verbrennungsaussetzer erkannt - Zylinder 1 |
| 0x0302 | P0302 | P0302 Verbrennungsaussetzer erkannt - Zylinder 2 |
| 0x0303 | P0303 | P0303 Verbrennungsaussetzer erkannt - Zylinder 3 |
| 0x0304 | P0304 | P0304 Verbrennungsaussetzer erkannt - Zylinder 4 |
| 0x0305 | P0305 | P0305 Verbrennungsaussetzer erkannt - Zylinder 5 |
| 0x0306 | P0306 | P0306 Verbrennungsaussetzer erkannt - Zylinder 6 |
| 0x0307 | P0307 | P0307 Verbrennungsaussetzer erkannt - Zylinder 7 |
| 0x0308 | P0308 | P0308 Verbrennungsaussetzer erkannt - Zylinder 8 |
| 0x0309 | P0309 | P0309 Verbrennungsaussetzer erkannt - Zylinder 9 |
| 0x0310 | P0310 | P0310 Verbrennungsaussetzer erkannt - Zylinder 10 |
| 0x0311 | P0311 | P0311 Verbrennungsaussetzer erkannt - Zylinder 11 |
| 0x0312 | P0312 | P0312 Verbrennungsaussetzer erkannt - Zylinder 12 |
| 0x0313 | P0313 | P0313 Verbrennungsaussetzer erkannt bei niedrigem Kraftstoffstand |
| 0x0314 | P0314 | P0314 Verbrennungsaussetzer, Einzelzylinder (Zylinder nicht angegeben) |
| 0x0316 | P0316 | P0316 Verbrennungsaussetzer erkannt im Start (erste 1000 Umdrehungen) |
| 0x0317 | P0317 | P0317 Schlechtwegstreckenerkennung - Hardware nicht vorhanden |
| 0x0318 | P0318 | P0318 Schlechtwegstreckensensor A Signalstromkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0319 | P0319 | P0319 Schlechtwegstreckensensor B Signalstromkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0320 | P0320 | P0320 Zündverteiler, Eingangssignal Motordrehzahl - Fehlfunktion |
| 0x0321 | P0321 | P0321 Zündverteiler, Eingangssignal Motordrehzahl - Meßbereichs- oder Leistungsproblem |
| 0x0322 | P0322 | P0322 Zündverteiler, Eingangssignal Motordrehzahl - kein Signal |
| 0x0323 | P0323 | P0323 Zündverteiler, Eingangssignal Motordrehzahl -  Input sporadisch |
| 0x0324 | P0324 | P0324 Klopfregelsystem - Fehler |
| 0x0325 | P0325 | P0325 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Fehlfunktion |
| 0x0326 | P0326 | P0326 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Meßbereichs- oder Leistungsproblem |
| 0x0327 | P0327 | P0327 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Input niedrig |
| 0x0328 | P0328 | P0328 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Input hoch |
| 0x0329 | P0329 | P0329 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Input sporadisch |
| 0x0330 | P0330 | P0330 Klopfsensor 2 (Bank 2) - Fehlfunktion |
| 0x0331 | P0331 | P0331 Klopfsensor 2 (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0332 | P0332 | P0332 Klopfsensor 2 (Bank 2) - Input niedrig |
| 0x0333 | P0333 | P0333 Klopfsensor 2 (Bank 2) - Input hoch |
| 0x0334 | P0334 | P0334 Klopfsensor 2 (Bank 2) - Input sporadisch |
| 0x0335 | P0335 | P0335 Kurbelwellengeber 1 - Fehlfunktion |
| 0x0336 | P0336 | P0336 Kurbelwellengeber 1 - Meßbereichs- oder Leistungsproblem |
| 0x0337 | P0337 | P0337 Kurbelwellengeber 1 - Input niedrig |
| 0x0338 | P0338 | P0338 Kurbelwellengeber 1 - Input hoch |
| 0x0339 | P0339 | P0339 Kurbelwellengeber 1 - Input sporadisch |
| 0x0340 | P0340 | P0340 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Fehlfunktion |
| 0x0341 | P0341 | P0341 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Meßbereichs- oder Leistungsproblem |
| 0x0342 | P0342 | P0342 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Input niedrig |
| 0x0343 | P0343 | P0343 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Input hoch |
| 0x0344 | P0344 | P0344 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Input sporadisch |
| 0x0345 | P0345 | P0345 Nockenwellengeber Einlass (Bank 2) - Fehlfunktion |
| 0x0346 | P0346 | P0346 Nockenwellengeber Einlass (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0347 | P0347 | P0347 Nockenwellengeber Einlass (Bank 2) - Input niedrig |
| 0x0348 | P0348 | P0348 Nockenwellengeber Einlass (Bank 2) - Input hoch |
| 0x0349 | P0349 | P0349 Nockenwellengeber Einlass (Bank 2) - Input sporadisch |
| 0x0350 | P0350 | P0350 Zündspule, Primär-/Sekundäkreis - Fehlfunktion |
| 0x0351 | P0351 | P0351 Zündspule 1, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0352 | P0352 | P0352 Zündspule 2, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0353 | P0353 | P0353 Zündspule 3, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0354 | P0354 | P0354 Zündspule 4, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0355 | P0355 | P0355 Zündspule 5, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0356 | P0356 | P0356 Zündspule 6, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0357 | P0357 | P0357 Zündspule 7, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0358 | P0358 | P0358 Zündspule 8, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0359 | P0359 | P0359 Zündspule 9, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0360 | P0360 | P0360 Zündspule 10, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0361 | P0361 | P0361 Zündspule 11, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0362 | P0362 | P0362 Zündspule 12, Primär-/Sekundärkreis - Fehlfunktion |
| 0x0363 | P0363 | P0363 Verbrennungsaussetzer erkannt mit Kraftstoffabschaltung |
| 0x0365 | P0365 | P0365 Nockenwellengeber Auslass (Bank 1) - Fehlfunktion |
| 0x0366 | P0366 | P0366 Nockenwellengeber Auslass (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x0367 | P0367 | P0367 Nockenwellengeber Auslass (Bank 1) - Input niedrig |
| 0x0368 | P0368 | P0368 Nockenwellengeber Auslass (Bank 1) - Input hoch |
| 0x0369 | P0369 | P0369 Nockenwellengeber Auslass (Bank 1) - Input sporadisch |
| 0x0370 | P0370 | P0370 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - Fehlfunktion |
| 0x0371 | P0371 | P0371 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - zu viele Impulse |
| 0x0372 | P0372 | P0372 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - zu wenige Impulse |
| 0x0373 | P0373 | P0373 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - Impulse sporadisch/unregelmäßig |
| 0x0374 | P0374 | P0374 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - keine Impulse |
| 0x0375 | P0375 | P0375 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - Fehlfunktion |
| 0x0376 | P0376 | P0376 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - zu viele Impulse |
| 0x0377 | P0377 | P0377 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - zu wenige Impulse |
| 0x0378 | P0378 | P0378 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - Impulse sporadisch/unregelmäßig |
| 0x0379 | P0379 | P0379 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - keine Impulse |
| 0x0380 | P0380 | P0380 Glühkerzen-Heizung A -Fehlfunktion |
| 0x0381 | P0381 | P0381 Glühkerzen-Heizung, Anzeige - Fehlfunktion |
| 0x0382 | P0382 | P0382 Glühkerzen-Heizung B - Fehlfunktion |
| 0x0385 | P0385 | P0385 Kurbelwellengeber 2 - Fehlfunktion |
| 0x0386 | P0386 | P0386 Kurbelwellengeber 2 - Meßbereichs- oder Leistungsproblem |
| 0x0387 | P0387 | P0387 Kurbelwellengeber 2 - Input niedrig |
| 0x0388 | P0388 | P0388 Kurbelwellengeber 2 - Input hoch |
| 0x0389 | P0389 | P0389 Kurbelwellengeber 2 - Input sporadisch |
| 0x0390 | P0390 | P0390 Nockenwellengeber Auslass (Bank 2) - Fehlfunktion |
| 0x0391 | P0391 | P0391 Nockenwellengeber Auslass (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0392 | P0392 | P0392 Nockenwellengeber Auslass (Bank 2) - Input niedrig |
| 0x0393 | P0393 | P0393 Nockenwellengeber Auslass (Bank 2) - Input hoch |
| 0x0394 | P0394 | P0394 Nockenwellengeber Auslass (Bank 2) - Input sporadisch |
| 0x0400 | P0400 | P0400 Durchsatz der Abgas-Rückführung - Fehlfunktion |
| 0x0401 | P0401 | P0401 Abgasrückführung - Durchsatz zu gering |
| 0x0402 | P0402 | P0402 Abgasrückführung - Durchsatz zu groß |
| 0x0403 | P0403 | P0403 Abgasrückführung - Durchsatz Fehlfunktion |
| 0x0404 | P0404 | P0404 Abgas-Rückführung - Meßbereichs- oder Leistungsproblem |
| 0x0405 | P0405 | P0405 Abgasrückführungssensor 1 - Input niedrig |
| 0x0406 | P0406 | P0406 Abgasrückführungssensor 1 - Input hoch |
| 0x0407 | P0407 | P0407 Abgasrückführungssensor 2 - Input niedrig |
| 0x0408 | P0408 | P0408 Abgasrückführungssensor 2 - Input hoch |
| 0x0409 | P0409 | P0409 Abgasrückführungssensor 1 - Fehlfunktion |
| 0x0410 | P0410 | P0410 Sekundärluftsystem - Fehlfunktion |
| 0x0411 | P0411 | P0411 Sekundärluftsystem - Durchsatzfehler erkannt |
| 0x0412 | P0412 | P0412 Sekundärluftventil 1 - Fehlfunktion |
| 0x0413 | P0413 | P0413 Sekundärluftventil 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0414 | P0414 | P0414 Sekundärluftventil 1 - Schaltkreis kurzgeschlossen |
| 0x0415 | P0415 | P0415 Sekundärluftventil 2 - Fehlfunktion |
| 0x0416 | P0416 | P0416 Sekundärluftventil 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0417 | P0417 | P0417 Sekundärluftventil 2 - Schaltkreis kurzgeschlossen |
| 0x0418 | P0418 | P0418 Sekundärluftsystem 'A' - Fehlfunktion |
| 0x0419 | P0419 | P0419 Sekundärluftsystem 'B' - Fehlfunktion |
| 0x0420 | P0420 | P0420 Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0421 | P0421 | P0421 Katalysator (Bank 1) - Wirkungsgrad bei Aufheizzeit unter Schwellwert |
| 0x0422 | P0422 | P0422 Hauptkatalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0423 | P0423 | P0423 E-Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0424 | P0424 | P0424 E-Katalysator (Bank 1) - Temperatur unter Schwellwert |
| 0x0425 | P0425 | P0425 Katalysator Abgastemperaturfühler (Bank 1) - Fehlfunktion |
| 0x0426 | P0426 | P0426 Katalysator Abgastemperaturfühler (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x0427 | P0427 | P0427 Katalysator Abgastemperaturfühler (Bank 1) - Input niedrig |
| 0x0428 | P0428 | P0428 Katalysator Abgastemperaturfühler (Bank 1) - Input hoch |
| 0x0429 | P0429 | P0429 Katalysator Heizungsschaltkreis (Bank 1) - Fehlfunktion |
| 0x0430 | P0430 | P0430 Katalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0431 | P0431 | P0431 Katalysator (Bank 2) - Wirkungsgrad bei Aufheizzeit unter Schwellwert |
| 0x0432 | P0432 | P0432 Hauptkatalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0433 | P0433 | P0433 E-Katalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0434 | P0434 | P0434 E-Katalysator (Bank 2) - Temperatur unter Schwellwert |
| 0x0435 | P0435 | P0435 Katalysator Abgastemperaturfühler (Bank 2) - Fehlfunktion |
| 0x0436 | P0436 | P0436 Katalysator Abgastemperaturfühler (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0437 | P0437 | P0437 Katalysator Abgastemperaturfühler (Bank 2) - Input niedrig |
| 0x0438 | P0438 | P0438 Katalysator Abgastemperaturfühler (Bank 2) - Input hoch |
| 0x0439 | P0439 | P0439 Katalysator Heizungsschaltkreis (Bank 2) - Fehlfunktion |
| 0x0440 | P0440 | P0440 Tankentlüftungssystem - Fehlfunktion |
| 0x0441 | P0441 | P0441 Tankentlüftungssystem - fehlerhafter Durchfluss |
| 0x0442 | P0442 | P0442 Tankentlüftungssystem - kleines Leck erkannt |
| 0x0443 | P0443 | P0443 Tankentlüftungssystem, Tankentlüftungsventil - Fehlfunktion |
| 0x0444 | P0444 | P0444 Tankentlüftungssystem, Tankentlüftungsventil - Leitungsunterbrechung |
| 0x0445 | P0445 | P0445 Tankentlüftungssystem, Tankentlüftungsventil - Kurzschluss |
| 0x0446 | P0446 | P0446 Tankentlüftungssystem, Entlüftungskreislauf - Fehlfunktion |
| 0x0447 | P0447 | P0447 |
| 0x0448 | P0448 | P0448 |
| 0x0449 | P0449 | P0449 |
| 0x0450 | P0450 | P0450 Tankentlüftungssystem Drucksensor/-schalter - Fehlfunktion |
| 0x0451 | P0451 | P0451 Tankentlüftungssystem Drucksensor/-schalter - Meßbereichs- oder Leistungsproblem |
| 0x0452 | P0452 | P0452 Tankentlüftungssystem Drucksensor/-schalter - Input niedrig |
| 0x0453 | P0453 | P0453 Tankentlüftungssystem Drucksensor/-schalter - Input hoch |
| 0x0454 | P0454 | P0454 Tankentlüftungssystem Drucksensor/-schalter - Input sporadisch |
| 0x0455 | P0455 | P0455 Tankentlüftungssystem - großes Leck entdeckt |
| 0x0456 | P0456 | P0456 Tankentlüftungssystem - sehr kleines Leck entdeckt |
| 0x0457 | P0457 | P0457 Tankentlüftungssystem - Leck entdeckt (Tankdeckel lose/weg) |
| 0x0458 | P0458 | P0458 Tankentlüftungssystem, Tankentlüftungsventil - Input niedrig |
| 0x0459 | P0459 | P0459 Tankentlüftungssystem, Tankentlüftungsventil - Input hoch |
| 0x0460 | P0460 | P0460 Kraftstoff-Füllstandssensor 1 - Fehlfunktion |
| 0x0461 | P0461 | P0461 Kraftstoff-Füllstandssensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0462 | P0462 | P0462 Kraftstoff-Füllstandssensor 1 - Input niedrig |
| 0x0463 | P0463 | P0463 Kraftstoff-Füllstandssensor 1 - Input hoch |
| 0x0464 | P0464 | P0464 Kraftstoff-Füllstandssensor 1 - Input sporadisch |
| 0x0465 | P0465 | P0465 |
| 0x0466 | P0466 | P0466 |
| 0x0467 | P0467 | P0467 |
| 0x0468 | P0468 | P0468 |
| 0x0469 | P0469 | P0469 |
| 0x0470 | P0470 | P0470 Abgasdrucksensor - Fehlfunktion |
| 0x0471 | P0471 | P0471 Abgasdrucksensor Meßbereichs- oder Leistungsproblem |
| 0x0472 | P0472 | P0472 Abgasdrucksensor - Input niedrig |
| 0x0473 | P0473 | P0473 Abgasdrucksensor - Input hoch |
| 0x0474 | P0474 | P0474 Abgasdrucksensor - Input sporadisch |
| 0x0475 | P0475 | P0475 Abgasklappe - Fehlfunktion |
| 0x0476 | P0476 | P0476 Abgasklappe - Meßbereichs- oder Leistungsproblem |
| 0x0477 | P0477 | P0477 Abgasklappe - Input niedrig |
| 0x0478 | P0478 | P0478 Abgasklappe - Input hoch |
| 0x0479 | P0479 | P0479 Abgasklappe - Input sporadisch |
| 0x0480 | P0480 | P0480 Motorlüfter 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0481 | P0481 | P0481 Motorlüfter 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0482 | P0482 | P0482 Motorlüfter 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0483 | P0483 | P0483 Motorlüfter - Plausibilitätsfehler |
| 0x0484 | P0484 | P0484 Motorlüfter - Überstrom |
| 0x0485 | P0485 | P0485 Motorlüfter Haupstrom-/Masseschaltkreis - Fehlfunktion |
| 0x0486 | P0486 | P0486 Abgasrückführungssensor 2 - Fehlfunktion |
| 0x0487 | P0487 | P0487 |
| 0x0488 | P0488 | P0488 |
| 0x0491 | P0491 | P0491 Sekundärluftsystem (Bank 1) - Durchsatz zu gering |
| 0x0492 | P0492 | P0492 Sekundärluftsystem (Bank 2) - Durchsatz zu gering |
| 0x0493 | P0493 | P0493 Motorlüfter - Überdrehzahl |
| 0x0494 | P0494 | P0494 Motorlüfter - Drehzahl niedrig |
| 0x0495 | P0495 | P0495 Motorlüfter - Drehzahl hoch |
| 0x0496 | P0496 | P0496 Tankentlüftungssystem - Durchfluss hoch |
| 0x0497 | P0497 | P0497 Tankentlüftungssystem - Durchfluss niedrig |
| 0x0500 | P0500 | P0500 Fahrzeuggeschwindigkeitssensor 1 - Fehlfunktion |
| 0x0501 | P0501 | P0501 Fahrzeuggeschwindigkeitssensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0502 | P0502 | P0502 Fahrzeuggeschwindigkeitssensor 1 - Input niedrig |
| 0x0503 | P0503 | P0503 Fahrzeuggeschwindigkeitssensor 1 - sporadisch/unregelmäßig/zu hoch |
| 0x0504 | P0504 | P0504 Bremsschalter/Bremstestschalter Korrelation |
| 0x0505 | P0505 | P0505 Leerlaufregelsystem - Fehlfunktion |
| 0x0506 | P0506 | P0506 Leerlaufregelsystem - Drehzahl niedriger als erwartet |
| 0x0507 | P0507 | P0507 Leerlaufregelsystem - Drehzahl höher als erwartet |
| 0x0508 | P0508 | P0508 Leerlaufregelsystem - Input niedrig |
| 0x0509 | P0509 | P0509 Leerlaufregelsystem - Input hoch |
| 0x0510 | P0510 | P0510 Geschlossene Drosselklappe, Schalter - Fehlfunktion |
| 0x0512 | P0512 | P0512 Starterautomatik - Fehlfunktion |
| 0x0513 | P0513 | P0513 |
| 0x0515 | P0515 | P0515 Batterietemperaturfühler - Fehlfunktion |
| 0x0516 | P0516 | P0516 Batterietemperaturfühler - Input niedrig |
| 0x0517 | P0517 | P0517 Batterietemperaturfühler - Input hoch |
| 0x0520 | P0520 | P0520 Motoröldruck Sensor/Schalter - Fehlfunktion |
| 0x0521 | P0521 | P0521 Motoröldruck Sensor/Schalter - Meßbereichs- oder Leistungsproblem |
| 0x0522 | P0522 | P0522 Motoröldruck Sensor/Schalter - Spannung niedrig |
| 0x0523 | P0523 | P0523 Motoröldruck Sensor/Schalter - Spannung hoch |
| 0x0524 | P0524 | P0524 Motoröldruck - zu niedrig |
| 0x0526 | P0526 | P0526 Motorlüfter Drehzahlsensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0527 | P0527 | P0527 Motorlüfter Drehzahlsensor - Meßbereichs- oder Leistungsproblem |
| 0x0528 | P0528 | P0528 Motorlüfter Drehzahlsensor - kein Signal |
| 0x0529 | P0529 | P0529 Motorlüfter Drehzahlsensor - Input sporadisch |
| 0x0530 | P0530 | P0530 Klimaanlage, Kältemittelsensor 1 - Fehlfunktion |
| 0x0531 | P0531 | P0531 Klimaanlage, Kältemittelsensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0532 | P0532 | P0532 Klimaanlage, Kältemittelsensor 1 - Input niedrig |
| 0x0533 | P0533 | P0533 Klimaanlage, Kältemittelsensor 1 - Input hoch |
| 0x0534 | P0534 | P0534 |
| 0x0540 | P0540 | P0540 |
| 0x0541 | P0541 | P0541 |
| 0x0542 | P0542 | P0542 |
| 0x0544 | P0544 | P0544 Abgastemperaturfühler (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x0545 | P0545 | P0545 Abgastemperaturfühler (Bank 1, vor Katalysator) - Input niedrig |
| 0x0546 | P0546 | P0546 Abgastemperaturfühler (Bank 1, vor Katalysator) - Input hoch |
| 0x0547 | P0547 | P0547 Abgastemperaturfühler (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x0548 | P0548 | P0548 Abgastemperaturfühler (Bank 2, vor Katalysator) - Input niedrig |
| 0x0549 | P0549 | P0549 Abgastemperaturfühler (Bank 2, vor Katalysator) - Input hoch |
| 0x0550 | P0550 | P0550 Servolenkung, Drucksensor/-schalter - Fehlfunktion |
| 0x0551 | P0551 | P0551 Servolenkung, Drucksensor/-schalter - Meßbereichs- oder Leistungsproblem |
| 0x0552 | P0552 | P0552 Servolenkung, Drucksensor/-schalter - Input niedrig |
| 0x0553 | P0553 | P0553 Servolenkung, Drucksensor/-schalter - Input hoch |
| 0x0554 | P0554 | P0554 Servolenkung, Drucksensor/-schalter - Input sporadisch |
| 0x0560 | P0560 | P0560 Versorgungsspannung - Fehlfunktion |
| 0x0561 | P0561 | P0561 Versorgungsspannung - Instabil |
| 0x0562 | P0562 | P0562 Versorgungsspannung - niedrig |
| 0x0563 | P0563 | P0563 Versorgungsspannung - hoch |
| 0x0564 | P0564 | P0564 Geschwindigkeitsregler, Multifunktion Eingang 'A' - Fehlfunktion |
| 0x0565 | P0565 | P0565 Geschwindigkeitsregler, Signal 'an' - Fehlfunktion |
| 0x0566 | P0566 | P0566 Geschwindigkeitsregler, Signal 'aus' - Fehlfunktion |
| 0x0567 | P0567 | P0567 Geschwindigkeitsregler, Signal 'wiederaufnehmen' - Fehlfunktion |
| 0x0568 | P0568 | P0568 Geschwindigkeitsregler, Signal 'einstellen' - Fehlfunktion |
| 0x0569 | P0569 | P0569 Geschwindigkeitsregler, Signal 'ausrollen' - Fehlfunktion |
| 0x0570 | P0570 | P0570 Geschwindigkeitsregler, Signal 'beschleunigen' - Fehlfunktion |
| 0x0571 | P0571 | P0571 Bremsschalter 1 - Fehlfunktion |
| 0x0572 | P0572 | P0572 Bremsschalter 1 - Input niedrig |
| 0x0573 | P0573 | P0573 Bremsschalter 1 - Input hoch |
| 0x0574 | P0574 | P0574 Geschwindigkeitsregler - Fahrzeuggeschwindigkeit zu hoch |
| 0x0575 | P0575 | P0575 Geschwindigkeitsregler Eingangsschaltung - Fehlfunktion |
| 0x0576 | P0576 | P0576 Geschwindigkeitsregler Eingangsschaltung - Input niedrig |
| 0x0577 | P0577 | P0577 Geschwindigkeitsregler Eingangsschaltung - Input hoch |
| 0x0597 | P0597 | P0597 Thermostat Heizungsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0598 | P0598 | P0598 Thermostat Heizungsschaltkreis - Input niedrig |
| 0x0599 | P0599 | P0599 Thermostat Heizungsschaltkreis - Input hoch |
| 0x0600 | P0600 | P0600 Serielle Kommunikationsverbindung - Fehlfunktion |
| 0x0601 | P0601 | P0601 Steuergerät - interner Prüfsummenfehler |
| 0x0602 | P0602 | P0602 Steuergerät - Programmierfehler |
| 0x0603 | P0603 | P0603 Steuergerät - interner 'Keep Alive Memory' (KAM) Fehler |
| 0x0604 | P0604 | P0604 Steuergerät - interner 'Random Access Memory' (RAM) Fehler |
| 0x0605 | P0605 | P0605 Steuergerät - interner 'Read only Memory' (ROM) Fehler |
| 0x0606 | P0606 | P0606 Motorsteuergerät/Powerstrain Steuergerät - interner Prozessorfehler |
| 0x0607 | P0607 | P0607 |
| 0x0608 | P0608 | P0608 Steuergerät Fahrzeuggeschwindigkeitssensor Ausgang 'A' |
| 0x0609 | P0609 | P0609 |
| 0x0610 | P0610 | P0610 |
| 0x0613 | P0613 | P0613 Getriebesteuergerät - interner Prozessorfehler |
| 0x0614 | P0614 | P0614 Motorsteuergerät / Getriebesteuergerät - Kompatibilitätsfehler |
| 0x0615 | P0615 | P0615 Anlasserrelais - Fehlfunktion |
| 0x0616 | P0616 | P0616 Anlasserrelais - Input niedrig |
| 0x0617 | P0617 | P0617 Anlasserrelais - Input hoch |
| 0x0618 | P0618 | P0618 |
| 0x0619 | P0619 | P0619 |
| 0x0620 | P0620 | P0620 Generator - Fehlfunktion |
| 0x0621 | P0621 | P0621 |
| 0x0622 | P0622 | P0622 Generatorfeld/F Anschlussklemme - Fehlfunktion |
| 0x0623 | P0623 | P0623 |
| 0x0624 | P0624 | P0624 |
| 0x0625 | P0625 | P0625 Generatorfeld/F Anschlussklemme - Input niedrig |
| 0x0630 | P0630 | P0630 Motorsteuergerät / Getriebesteuergerät - Fahrgestellnummer nicht programmiert oder nicht kompatibel |
| 0x0631 | P0631 | P0631 Getriebesteuergerät - Fahrgestellnummer nicht programmiert oder nicht kompatibel |
| 0x0634 | P0634 | P0634 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät - Innentemperatur zu hoch |
| 0x0635 | P0635 | P0635 |
| 0x0636 | P0636 | P0636 |
| 0x0637 | P0637 | P0637 |
| 0x0638 | P0638 | P0638 Drosselklappensteller (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x0639 | P0639 | P0639 Drosselklappensteller (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0640 | P0640 | P0640 |
| 0x0641 | P0641 | P0641 Versorgungsspannung 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0642 | P0642 | P0642 Versorgungsspannung 1 - Input niedrig |
| 0x0643 | P0643 | P0643 Versorgungsspannung 1 - Input hoch |
| 0x0645 | P0645 | P0645 Klimakompressor-Kupplungsrelais - Fehlfunktion |
| 0x0646 | P0646 | P0646 Klimakompressor-Kupplungsrelais - Input niedrig |
| 0x0647 | P0647 | P0647 Klimakompressor-Kupplungsrelais - Input hoch |
| 0x0648 | P0648 | P0648 |
| 0x0649 | P0649 | P0649 |
| 0x0650 | P0650 | P0650 Malfunction Indicator Lamp (MIL) - Fehlfunktion |
| 0x0651 | P0651 | P0651 Versorgungsspannung 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0652 | P0652 | P0652 Versorgungsspannung 2 - Input niedrig |
| 0x0653 | P0653 | P0653 Versorgungsspannung 2 - Input hoch |
| 0x0654 | P0654 | P0654 |
| 0x0655 | P0655 | P0655 |
| 0x0656 | P0656 | P0656 |
| 0x0660 | P0660 | P0660 Ansaugklappe (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0661 | P0661 | P0661 Ansaugklappe (Bank 1) - Input niedrig |
| 0x0662 | P0662 | P0662 Ansaugklappe (Bank 1) - Input hoch |
| 0x0663 | P0663 | P0663 Ansaugklappe (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0664 | P0664 | P0664 Ansaugklappe (Bank 2) - Input niedrig |
| 0x0665 | P0665 | P0665 Ansaugklappe (Bank 2) - Input hoch |
| 0x0666 | P0666 | P0666 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler - Fehlfunktion |
| 0x0667 | P0667 | P0667 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0668 | P0668 | P0668 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler - Input niedrig |
| 0x0669 | P0669 | P0669 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler - Input hoch |
| 0x0685 | P0685 | P0685 Steuergerät/Powertrain Steuergerät Versorgungsspannungsrelais - Fehlfunktion oder Leitungsunterbrechung |
| 0x0686 | P0686 | P0686 Steuergerät/Powertrain Steuergerät Versorgungsspannungsrelais - Input niedrig |
| 0x0687 | P0687 | P0687 Steuergerät/Powertrain Steuergerät Versorgungsspannungsrelais - Input hoch |
| 0x0691 | P0691 | P0691 Motorlüfter 1 - Input niedrig |
| 0x0692 | P0692 | P0692 Motorlüfter 1 - Input hoch |
| 0x0693 | P0693 | P0693 Motorlüfter 2 - Input niedrig  |
| 0x0694 | P0694 | P0694 Motorlüfter 2 - Input hoch |
| 0x0695 | P0695 | P0695 Motorlüfter 3 - Input niedrig |
| 0x0696 | P0696 | P0696 Motorlüfter 3 - Input hoch |
| 0x0697 | P0697 | P0697 Versorgungsspannung 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0698 | P0698 | P0698 Versorgungsspannung 3 - Input niedrig |
| 0x0699 | P0699 | P0699 Versorgungsspannung 3 - Input hoch |
| 0x0700 | P0700 | P0700 Getriebesteuersystem (Malfunction Indicator Lamp (MIL) Anforderung) - Fehlfunktion  |
| 0x0701 | P0701 | P0701 Getriebesteuersystem - Meßbereichs- oder Leistungsproblem |
| 0x0702 | P0702 | P0702 Getriebesteuersystem - elektrischer Fehler |
| 0x0703 | P0703 | P0703 Bremstestschalter - Fehlfunktion |
| 0x0704 | P0704 | P0704 Eingangssignal Kupplungsschalter - Fehlfunktion |
| 0x0705 | P0705 | P0705 Getriebepositionssensor 1 (PRNDL) - Fehlfunktion |
| 0x0706 | P0706 | P0706 Getriebepositionssensor 1- Meßbereichs- oder Leistungsproblem |
| 0x0707 | P0707 | P0707 Getriebepositionssensor 1 - Input niedrig |
| 0x0708 | P0708 | P0708 Getriebepositionssensor 1 - Input hoch |
| 0x0709 | P0709 | P0709 Getriebepositionssensor 1 - Input sporadisch |
| 0x0710 | P0710 | P0710 Getriebeöltemperaturfühler 1 - Fehlfunktion |
| 0x0711 | P0711 | P0711 Getriebeöltemperaturfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0712 | P0712 | P0712 Getriebeöltemperaturfühler 1 - Input niedrig |
| 0x0713 | P0713 | P0713 Getriebeöltemperaturfühler 1 - Input hoch |
| 0x0714 | P0714 | P0714 Getriebeöltemperaturfühler 1 - Input sporadisch |
| 0x0715 | P0715 | P0715 Eingangsdrehzahlfühler 1 Turbine - Fehlfunktion |
| 0x0716 | P0716 | P0716 Eingangsdrehzahlfühler 1 Turbine - Meßbereichs- oder Leistungsproblem |
| 0x0717 | P0717 | P0717 Eingangsdrehzahlfühler 1 Turbine - kein Signal |
| 0x0718 | P0718 | P0718 Eingangsdrehzahlfühler 1 Turbine - Input sporadisch |
| 0x0719 | P0719 | P0719 Bremstestschalter - Input niedrig |
| 0x0720 | P0720 | P0720 Abtriebsdrehzahlfühler - Fehlfunktion |
| 0x0721 | P0721 | P0721 Abtriebsdrehzahlfühler - Meßbereichs- oder Leistungsproblem |
| 0x0722 | P0722 | P0722 Abtriebsdrehzahlfühler - kein Signal |
| 0x0723 | P0723 | P0723 Abtriebsdrehzahlfühler - Input sporadisch |
| 0x0724 | P0724 | P0724 Bremstestschalter - Input hoch |
| 0x0725 | P0725 | P0725 Eingangssignal Motordrehzahl - Fehlfunktion |
| 0x0726 | P0726 | P0726 Eingangssignal Motordrehzahl - Meßbereichs- oder Leistungsproblem |
| 0x0727 | P0727 | P0727 Eingangssignal Motordrehzahl - kein Signal |
| 0x0728 | P0728 | P0728 Eingangssignal Motordrehzahl - Input sporadisch |
| 0x0729 | P0729 | P0729 Falsches Übersetzungsverhältnis - 6. Gang |
| 0x0730 | P0730 | P0730 Falsches Übersetzungsverhältnis |
| 0x0731 | P0731 | P0731 Falsches Übersetzungsverhältnis - 1. Gang |
| 0x0732 | P0732 | P0732 Falsches Übersetzungsverhältnis - 2. Gang |
| 0x0733 | P0733 | P0733 Falsches Übersetzungsverhältnis - 3. Gang |
| 0x0734 | P0734 | P0734 Falsches Übersetzungsverhältnis - 4. Gang |
| 0x0735 | P0735 | P0735 Falsches Übersetzungsverhältnis - 5. Gang |
| 0x0736 | P0736 | P0736 Falsches Übersetzungsverhältnis - Rückwärtsgang |
| 0x0737 | P0737 | P0737 Getriebesteuergerät, Ausgangssignal Motordrehzahl - Fehlfunktion |
| 0x0738 | P0738 | P0738 Getriebesteuergerät, Ausgangssignal Motordrehzahl - Input niedrig |
| 0x0739 | P0739 | P0739 Getriebesteuergerät, Ausgangssignal Motordrehzahl - Input hoch |
| 0x0740 | P0740 | P0740 Wandlerüberbrückungskupplung - Fehlfunktion oder Leitungsunterbrechung |
| 0x0741 | P0741 | P0741 Wandlerüberbrückungskupplung - Leistungsproblem oder klemmt offen |
| 0x0742 | P0742 | P0742 Wandlerüberbrückungskupplung - klemmt geschlossen |
| 0x0743 | P0743 | P0743 Wandlerüberbrückungskupplung - elektrischer Fehler |
| 0x0744 | P0744 | P0744 Wandlerüberbrückungskupplung - Input sporadisch |
| 0x0745 | P0745 | P0745 Elektrischer Drucksteller 1 - Fehlfunktion |
| 0x0746 | P0746 | P0746 Elektrischer Drucksteller 1 - Leistungsproblem oder klemmt offen |
| 0x0747 | P0747 | P0747 Elektrischer Drucksteller 1 - klemmt geschlossen |
| 0x0748 | P0748 | P0748 Elektrischer Drucksteller 1 - elektrischer Fehler |
| 0x0749 | P0749 | P0749 Elektrischer Drucksteller 1 - Input sporadisch |
| 0x0750 | P0750 | P0750 Magnetventil 1 - Fehlfunktion |
| 0x0751 | P0751 | P0751 Magnetventil 1 - Leistungsproblem oder klemmt offen |
| 0x0752 | P0752 | P0752 Magnetventil 1 - klemmt geschlossen |
| 0x0753 | P0753 | P0753 Magnetventil 1 - elektrischer Fehler |
| 0x0754 | P0754 | P0754 Magnetventil 1 - Input sporadisch |
| 0x0755 | P0755 | P0755 Magnetventil 2 - Fehlfunktion |
| 0x0756 | P0756 | P0756 Magnetventil 2 - Leistungsproblem oder klemmt offen |
| 0x0757 | P0757 | P0757 Magnetventil 2 - klemmt geschlossen |
| 0x0758 | P0758 | P0758 Magnetventil 2 - elektrischer Fehler |
| 0x0759 | P0759 | P0759 Magnetventil 2 - Input sporadisch |
| 0x0760 | P0760 | P0760 Magnetventil 3 - Fehlfunktion |
| 0x0761 | P0761 | P0761 Magnetventil 3 - Leistungsproblem oder klemmt offen |
| 0x0762 | P0762 | P0762 Magnetventil 2 - klemmt geschlossen |
| 0x0763 | P0763 | P0763 Magnetventil 3 - elektrischer Fehler |
| 0x0764 | P0764 | P0764 Magnetventil 3 - Input sporadisch |
| 0x0765 | P0765 | P0765 Magnetventil 4 - Fehlfunktion |
| 0x0766 | P0766 | P0766 Magnetventil 4 - Leistungsproblem oder klemmt offen |
| 0x0767 | P0767 | P0767 Magnetventil 4 - klemmt geschlossen |
| 0x0768 | P0768 | P0768 Magnetventil 4 - elektrischer Fehler |
| 0x0769 | P0769 | P0769 Magnetventil 4 - Input sporadisch |
| 0x0770 | P0770 | P0770 Magnetventil 5 - Fehlfunktion |
| 0x0771 | P0771 | P0771 Magnetventil 5 - Leistungsproblem oder klemmt offen |
| 0x0772 | P0772 | P0772 Magnetventil 5 - klemmt geschlossen |
| 0x0773 | P0773 | P0773 Magnetventil 5 - elektrischer Fehler |
| 0x0774 | P0774 | P0774 Magnetventil 5 - Input sporadisch |
| 0x0775 | P0775 | P0775 Elektrischer Drucksteller 2 - Fehlfunktion |
| 0x0776 | P0776 | P0776 Elektrischer Drucksteller 2 - Leistungsproblem oder klemmt offen |
| 0x0777 | P0777 | P0777 Elektrischer Drucksteller 2 - klemmt geschlossen |
| 0x0778 | P0778 | P0778 Elektrischer Drucksteller 2 - elektrischer Fehler |
| 0x0779 | P0779 | P0779 Elektrischer Drucksteller 2 - Input sporadisch |
| 0x0780 | P0780 | P0780 Schaltvorgang - Fehler |
| 0x0781 | P0781 | P0781 Schaltvorgang 1./2. Gang - Fehlfunktion |
| 0x0782 | P0782 | P0782 Schaltvorgang 2./3. Gang - Fehlfunktion |
| 0x0783 | P0783 | P0783 Schaltvorgang 3./4. Gang - Fehlfunktion |
| 0x0784 | P0784 | P0784 Schaltvorgang 4./5. Gang - Fehlfunktion |
| 0x0790 | P0790 | P0790 Getriebeprogrammschalter - Fehlfunktion |
| 0x0791 | P0791 | P0791 Zwischenwelle Drehzahlfühler 1 - Fehlfunktion |
| 0x0792 | P0792 | P0792 Zwischenwelle Drehzahlfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0793 | P0793 | P0793 Zwischenwelle Drehzahlfühler 1 - kein Signal |
| 0x0794 | P0794 | P0794 Zwischenwelle Drehzahlfühler 1 - Input sporadisch |
| 0x0795 | P0795 | P0795 Elektrischer Drucksteller 3 - Fehlfunktion |
| 0x0796 | P0796 | P0796 Elektrischer Drucksteller 3 - Leistungsproblem oder klemmt offen |
| 0x0797 | P0797 | P0797 Elektrischer Drucksteller 3 - klemmt geschlossen |
| 0x0798 | P0798 | P0798 Elektrischer Drucksteller 3 - elektrischer Fehler |
| 0x0799 | P0799 | P0799 Elektrischer Drucksteller 3 - Input sporadisch |
| 0x0800 | P0800 | P0800 Verteilergetriebesteuersystem (Malfunction Indicator Lamp (MIL) Anforderung) - Fehlfunktion  |
| 0x0802 | P0802 | P0802 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion oder Leitungsunterbrechung |
| 0x0803 | P0803 | P0803 |
| 0x0804 | P0804 | P0804 |
| 0x0805 | P0805 | P0805 Kupplungspositionssensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0806 | P0806 | P0806 Kupplungspositionssensor - Meßbereichs- oder Leistungsproblem |
| 0x0807 | P0807 | P0807 Kupplungspositionssensor - Input niedrig |
| 0x0808 | P0808 | P0808 Kupplungspositionssensor - Input hoch |
| 0x0809 | P0809 | P0809 Kupplungspositionssensor - Input sporadisch |
| 0x0810 | P0810 | P0810 |
| 0x0811 | P0811 | P0811 |
| 0x0812 | P0812 | P0812 |
| 0x0813 | P0813 | P0813 |
| 0x0814 | P0814 | P0814 |
| 0x0815 | P0815 | P0815 Tip Up Schalter - Fehlfunktion |
| 0x0816 | P0816 | P0816 Tip Down Schalter - Fehlfunktion |
| 0x0817 | P0817 | P0817 |
| 0x0818 | P0818 | P0818 |
| 0x0820 | P0820 | P0820 |
| 0x0821 | P0821 | P0821 |
| 0x0822 | P0822 | P0822 |
| 0x0823 | P0823 | P0823 |
| 0x0824 | P0824 | P0824 |
| 0x0825 | P0825 | P0825 |
| 0x0829 | P0829 | P0829 Schaltvorgang 5./6. Gang - Fehlfunktion |
| 0x0830 | P0830 | P0830 Kupplungspedalschalter 1 - Fehlfunktion |
| 0x0831 | P0831 | P0831 Kupplungspedalschalter 1 - Input niedrig |
| 0x0832 | P0832 | P0832 Kupplungspedalschalter 1 - Input hoch |
| 0x0833 | P0833 | P0833 Kupplungspedalschalter 2 - Fehlfunktion |
| 0x0834 | P0834 | P0834 Kupplungspedalschalter 2 - Input niedrig |
| 0x0835 | P0835 | P0835 Kupplungspedalschalter 2 - Input hoch |
| 0x0836 | P0836 | P0836 |
| 0x0837 | P0837 | P0837 |
| 0x0838 | P0838 | P0838 |
| 0x0839 | P0839 | P0839 |
| 0x0840 | P0840 | P0840 Getriebeöldrucksensor/-schalter 1 - Fehlfunktion |
| 0x0841 | P0841 | P0841 Getriebeöldrucksensor/-schalter 1 - Meßbereichs- oder Leistungsproblem |
| 0x0842 | P0842 | P0842 Getriebeöldrucksensor/-schalter 1 - Input niedrig |
| 0x0843 | P0843 | P0843 Getriebeöldrucksensor/-schalter 1 - Input hoch |
| 0x0844 | P0844 | P0844 Getriebeöldrucksensor/-schalter 1 - Input sporadisch |
| 0x0845 | P0845 | P0845 Getriebeöldrucksensor/-schalter 2 - Fehlfunktion |
| 0x0846 | P0846 | P0846 Getriebeöldrucksensor/-schalter 2 - Meßbereichs- oder Leistungsproblem |
| 0x0847 | P0847 | P0847 Getriebeöldrucksensor/-schalter 2 - Input niedrig |
| 0x0848 | P0848 | P0848 Getriebeöldrucksensor/-schalter 2 - Input hoch |
| 0x0849 | P0849 | P0849 Getriebeöldrucksensor/-schalter 2 - Input sporadisch |
| 0x0863 | P0863 | P0863 Getriebesteuergerät Kommunikation - Fehlfunktion |
| 0x0864 | P0864 | P0864 Getriebesteuergerät Kommunikation - Meßbereichs- oder Leistungsproblem |
| 0x0865 | P0865 | P0865 Getriebesteuergerät Kommunikation - Input niedrig |
| 0x0866 | P0866 | P0866 Getriebesteuergerät Kommunikation - Input hoch |
| 0x0867 | P0867 | P0867 Getriebeöldruck - Fehlfunktion |
| 0x0868 | P0868 | P0868 Getriebeöldruck - niedrig |
| 0x0869 | P0869 | P0869 Getriebeöldruck - hoch |
| 0x0870 | P0870 | P0870 Getriebeöldrucksensor/-schalter 3 - Fehlfunktion |
| 0x0871 | P0871 | P0871 Getriebeöldrucksensor/-schalter 3 - Meßbereichs- oder Leistungsproblem |
| 0x0872 | P0872 | P0872 Getriebeöldrucksensor/-schalter 3 - Input niedrig |
| 0x0873 | P0873 | P0873 Getriebeöldrucksensor/-schalter 3 - Input hoch |
| 0x0874 | P0874 | P0874 Getriebeöldrucksensor/-schalter 3 - Input sporadisch |
| 0x0875 | P0875 | P0875 Getriebeöldrucksensor/-schalter 4 - Fehlfunktion |
| 0x0876 | P0876 | P0876 Getriebeöldrucksensor/-schalter 4 - Meßbereichs- oder Leistungsproblem |
| 0x0877 | P0877 | P0877 Getriebeöldrucksensor/-schalter 4 - Input niedrig |
| 0x0878 | P0878 | P0878 Getriebeöldrucksensor/-schalter 4 - Input hoch |
| 0x0879 | P0879 | P0879 Getriebeöldrucksensor/-schalter 4 - Input sporadisch |
| 0x0880 | P0880 | P0880 Getriebesteuergerät Versorgungsspannungssignal - Fehlfunktion |
| 0x0881 | P0881 | P0881 Getriebesteuergerät Versorgungsspannungssignal - Meßberichs- oder Leistungsproblem |
| 0x0882 | P0882 | P0882 Getriebesteuergerät Versorgungsspannungssignal - Input niedrig |
| 0x0883 | P0883 | P0883 Getriebesteuergerät Versorgungsspannungssignal - Input hoch |
| 0x0885 | P0885 | P0885 Getriebesteuergerät Versorgungsspannungsrelais - Fehlfunktion oder Leitungsunterbrechung |
| 0x0886 | P0886 | P0886 Getriebesteuergerät Versorgungsspannungsrelais - Input niedrig |
| 0x0887 | P0887 | P0887 Getriebesteuergerät Versorgungsspannungsrelais - Input hoch |
| 0x0895 | P0895 | P0895 Schaltzeit - zu kurz |
| 0x0896 | P0896 | P0896 Schaltzeit - zu lang |
| 0x0898 | P0898 | P0898 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung - Input niedrig |
| 0x0899 | P0899 | P0899 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung - Input hoch |
| 0x0932 | P0932 | P0932 Hydraulikdrucksensor - Fehlfunktion |
| 0x0933 | P0933 | P0933 Hydraulikdrucksensor - Meßbereichs- oder Leistungsproblem |
| 0x0934 | P0934 | P0934 Hydraulikdrucksensor - Input niedrig |
| 0x0935 | P0935 | P0935 Hydraulikdrucksensor - Input hoch |
| 0x0936 | P0936 | P0936 Hydraulikdrucksensor - Input sporadisch |
| 0x0937 | P0937 | P0937 Hydrauliköltemperaturfühler - Fehlfunktion |
| 0x0938 | P0938 | P0938 Hydrauliköltemperaturfühler - Meßbereichs- oder Leistungspoblem |
| 0x0939 | P0939 | P0939 Hydrauliköltemperaturfühler - Input niedrig |
| 0x0940 | P0940 | P0940 Hydrauliköltemperaturfühler - Input hoch |
| 0x0941 | P0941 | P0941 Hydrauliköltemperaturfühler - Input sporadisch |
| 0x0945 | P0945 | P0945 Hydraulikpumpenrelais - Fehlfunktion oder Leitungsunterbrechung |
| 0x0946 | P0946 | P0946 Hydraulikpumpenrelais - Meßbereichs- oder Leistungsproblem |
| 0x0947 | P0947 | P0947 Hydraulikpumpenrelais - Input niedrig |
| 0x0948 | P0948 | P0948 Hydraulikpumpenrelais - Input hoch |
| 0x0960 | P0960 | P0960 Elektrischer Drucksteller 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0961 | P0961 | P0961 Elektrischer Drucksteller 1 - Meßbereichs- oder Leistungsproblem |
| 0x0962 | P0962 | P0962 Elektrischer Drucksteller 1 - Input niedrig |
| 0x0963 | P0963 | P0963 Elektrischer Drucksteller 1 - Input hoch |
| 0x0964 | P0964 | P0964 Elektrischer Drucksteller 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0965 | P0965 | P0965 Elektrischer Drucksteller 2 - Meßbereichs- oder Leistungsproblem |
| 0x0966 | P0966 | P0966 Elektrischer Drucksteller 2 - Input niedrig |
| 0x0967 | P0967 | P0967 Elektrischer Drucksteller 2 - Input hoch |
| 0x0968 | P0968 | P0968 Elektrischer Drucksteller 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0969 | P0969 | P0969 Elektrischer Drucksteller 3 - Meßbereichs- oder Leistungsproblem |
| 0x0970 | P0970 | P0970 Elektrischer Drucksteller 3 - Input niedrig |
| 0x0971 | P0971 | P0971 Elektrischer Drucksteller 3 - Input hoch |
| 0x0972 | P0972 | P0972 Magnetventil 1 - Meßbereichs- oder Leistungsproblem |
| 0x0973 | P0973 | P0973 Magnetventil 1 - Input niedrig |
| 0x0974 | P0974 | P0974 Magnetventil 1 - Input hoch |
| 0x0975 | P0975 | P0975 Magnetventil 2 - Meßbereichs- oder Leistungsproblem |
| 0x0976 | P0976 | P0976 Magnetventil 2 - Input niedrig |
| 0x0977 | P0977 | P0977 Magnetventil 2 - Input hoch |
| 0x0978 | P0978 | P0978 Magnetventil 3 - Meßbereichs- oder Leistungsproblem |
| 0x0979 | P0979 | P0979 Magnetventil 3 - Input niedrig |
| 0x0980 | P0980 | P0980 Magnetventil 3 - Input hoch |
| 0x0981 | P0981 | P0981 Magnetventil 4 - Meßbereichs- oder Leistungsproblem |
| 0x0982 | P0982 | P0982 Magnetventil 4 - Input niedrig |
| 0x0983 | P0983 | P0983 Magnetventil 4 - Input hoch |
| 0x0984 | P0984 | P0984 Magnetventil 5 - Meßbereichs- oder Leistungsproblem |
| 0x0985 | P0985 | P0985 Magnetventil 5 - Input niedrig |
| 0x0986 | P0986 | P0986 Magnetventil 5 - Input hoch |
| 0x0987 | P0987 | P0987 Getriebeöldrucksensor/-schalter 5 - Fehlfunktion |
| 0x0988 | P0988 | P0988 Getriebeöldrucksensor/-schalter 5 - Meßbereichs- oder Leistungsproblem |
| 0x0989 | P0989 | P0989 Getriebeöldrucksensor/-schalter 5 - Input niedrig |
| 0x0990 | P0990 | P0990 Getriebeöldrucksensor/-schalter 5 - Input hoch |
| 0x0991 | P0991 | P0991 Getriebeöldrucksensor/-schalter 5 - Input sporadisch |
| 0x0992 | P0992 | P0992 Getriebeöldrucksensor/-schalter 6 - Fehlfunktion |
| 0x0993 | P0993 | P0993 Getriebeöldrucksensor/-schalter 6 - Meßbereichs- oder Leistungsproblem |
| 0x0994 | P0994 | P0994 Getriebeöldrucksensor/-schalter 6 - Input niedrig |
| 0x0995 | P0995 | P0995 Getriebeöldrucksensor/-schalter 6 - Input hoch |
| 0x0996 | P0996 | P0996 Getriebeöldrucksensor/-schalter 6 - Input sporadisch |
| 0x0997 | P0997 | P0997 Magnetventil 6 - Meßbereichs- oder Leistungsproblem |
| 0x0998 | P0998 | P0998 Magnetventil 6 - Input niedrig |
| 0x0999 | P0999 | P0999 Magnetventil 6 - Input hoch |
| 0x0A81 | P0A81 | P0A81 Hybridbatteriesatz Lüfter - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A82 | P0A82 | P0A82 Hybridbatteriesatz Lüfter - Leistungsproblem oder klemmt offen |
| 0x0A83 | P0A83 | P0A83 Hybridbatteriesatz Lüfter - klemmt geschlossen |
| 0x0A84 | P0A84 | P0A84 Hybridbatteriesatz Lüfter - Input niedrig |
| 0x0A85 | P0A85 | P0A85 Hybridbatteriesatz Lüfter - Input hoch |
| 0x1000 | P1000 | P1000 VVT-System Minhubadaption - Anschlaganzahl überschritten |
| 0x1001 | P1001 | P1001 VVT-Notlaufanforderung - Input hoch |
| 0x1002 | P1002 | P1002 VVT-Notlaufanforderung - Input niedrig |
| 0x1003 | P1003 | P1003 VVT-Notlaufanforderung - Leitungsunterbrechung |
| 0x1004 | P1004 | P1004 VVT-Führungssensor (Bank 1) - Magnetverlust |
| 0x1005 | P1005 | P1005 VVT-Führungssensor (Bank 1) - Resetfehler |
| 0x1006 | P1006 | P1006 VVT-Führungssensor (Bank 1) - Parityfehler |
| 0x1007 | P1007 | P1007 VVT-Führungssensor (Bank 1) - Gradientenfehler |
| 0x1008 | P1008 | P1008 VVT-Führungssensor (Bank 2) - Magnetverlust |
| 0x1009 | P1009 | P1009 VVT-Führungssensor (Bank 2) - Resetfehler |
| 0x1010 | P1010 | P1010 VVT-Führungssensor (Bank 2) - Parityfehler |
| 0x1011 | P1011 | P1011 VVT-Führungssensor (Bank 2) - Gradientenfehler |
| 0x1012 | P1012 | P1012 VVT-Referenzsensor (Bank 1) - Magnetverlust |
| 0x1013 | P1013 | P1013 VVT-Referenzsensor (Bank 1) - Resetfehler |
| 0x1014 | P1014 | P1014 VVT-Referenzsensor (Bank 1) - Parityfehler |
| 0x1015 | P1015 | P1015 VVT-Referenzsensor (Bank 1) - Gradientenfehler |
| 0x1017 | P1017 | P1017 VVT-Sensoren (Bank 1) - Plausibilitätsfehler |
| 0x1018 | P1018 | P1018 VVT-Sensoren (Bank 2) - Plausibilitätsfehler |
| 0x1019 | P1019 | P1019 VVT-Versorgungsspannung Sensoren (Bank 1) - Input hoch |
| 0x1020 | P1020 | P1020 VVT-Versorgungsspannung Sensoren (Bank 1) - Input niedrig |
| 0x1021 | P1021 | P1021 VVT-Versorgungsspannung Sensoren (Bank 2) - Input hoch |
| 0x1022 | P1022 | P1022 VVT-Versorgungsspannung Sensoren (Bank 2) - Input niedrig |
| 0x1023 | P1023 | P1023 VVT-Lernfunktion (Bank 1) - Verstellbereich fehlerhaft |
| 0x1024 | P1024 | P1024 VVT-Lernfunktion (Bank 1) - unteres Lernfenster im unzulässigen Bereich |
| 0x1025 | P1025 | P1025 VVT-Lernfunktion (Bank 1) - keine Positionen gespeichert |
| 0x1026 | P1026 | P1026 VVT-Lernfunktion (Bank 2) - Verstellbereich fehlerhaft |
| 0x1027 | P1027 | P1027 VVT-Lernfunktion (Bank 2) - unteres Lernfenster im unzulässigen Bereich |
| 0x1028 | P1028 | P1028 VVT-Lernfunktion (Bank 2) - keine Positionen gespeichert |
| 0x1029 | P1029 | P1029 VVT-Stellgliedüberwachung Stellmotortemperatur (Bank 1) - Input hoch |
| 0x1030 | P1030 | P1030 VVT-Stellglied Lagereglerüberwachung (Bank 1) - Regeldifferenz |
| 0x1031 | P1031 | P1031 VVT-Stellgliedüberwachung Drehrichtungserkennung (Bank 1) - Plausibilitätsfehler |
| 0x1033 | P1033 | P1033 VVT-Stellglied Lagereglerüberwachung (Bank 2) - Regeldifferenz |
| 0x1034 | P1034 | P1034 VVT-Stellgliedüberwachung Drehrichtungserkennung (Bank 2) - Plausibilitätsfehler |
| 0x1035 | P1035 | P1035 VVT-CAN-Botschaftsüberwachung (Bank 1) - Sollwertbotschaft fehlerhaft |
| 0x1036 | P1036 | P1036 VVT-CAN-Timeout (Bank 1) - VVT-Sollwertbotschaft |
| 0x1037 | P1037 | P1037 VVT-CAN-Timeout (Bank 1) - VVT-Botschaft |
| 0x1038 | P1038 | P1038 VVT-CAN-Botschaftsüberwachung (Bank 2) - Sollwertbotschaft fehlerhaft |
| 0x1039 | P1039 | P1039 VVT-CAN-Timeout (Bank 2) - VVT-Sollwertbotschaft |
| 0x1040 | P1040 | P1040 VVT-CAN-Timeout (Bank 2) - VVT-Botschaft |
| 0x1041 | P1041 | P1041 VVT-Steuergerät (Bank 1) - interner EEPROM Fehler |
| 0x1042 | P1042 | P1042 VVT-Steuergerät (Bank 1) - interner 'Random Access Memory' (RAM) Fehler |
| 0x1043 | P1043 | P1043 VVT-Steuergerät (Bank 1) - interner 'Read Only Memory' (ROM) Fehler |
| 0x1044 | P1044 | P1044 VVT-Steuergerät (Bank 2) - interner EEPROM-Fehler |
| 0x1045 | P1045 | P1045 VVT-Steuergerät (Bank 2) - interner 'Random Access Memory (RAM) Fehler |
| 0x1046 | P1046 | P1046 VVT-Steuergerät (Bank 2) - interner 'Read Only Memory' (ROM) Fehler |
| 0x1047 | P1047 | P1047 VVT-Ansteuerung (Bank 1) - Input hoch |
| 0x1048 | P1048 | P1048 VVT-Ansteuerung (Bank 1) - Input niedrig |
| 0x1049 | P1049 | P1049 VVT-Ansteuerung Motorleitungen (Bank 1) - Input niedrig |
| 0x1050 | P1050 | P1050 VVT-Ansteuerung (Bank 1) - Fehlfunktion |
| 0x1051 | P1051 | P1051 VVT-Ansteuerung (Bank 2) - Input hoch |
| 0x1052 | P1052 | P1052 VVT-Ansteuerung (Bank 2) - Input niedrig |
| 0x1053 | P1053 | P1053 VVT-Ansteuerung Motorleitungen (Bank 2) - Input niedrig |
| 0x1054 | P1054 | P1054 VVT-Ansteuerung (Bank 2) - Fehlfunktion |
| 0x1055 | P1055 | P1055 VVT-Versorgungsspannung Stellmotor (Bank 1) - Input hoch |
| 0x1056 | P1056 | P1056 VVT-Versorgungsspannung Stellmotor (Bank 1) - Input niedrig |
| 0x1057 | P1057 | P1057 VVT-Versorgungsspannung Stellmotor (Bank 1) - elektrischer Fehler |
| 0x1058 | P1058 | P1058 VVT-Versorgungsspannung Stellmotor (Bank 2) - Input hoch |
| 0x1059 | P1059 | P1059 VVT-Versorgungsspannung Stellmotor (Bank 2) - Input niedrig |
| 0x1060 | P1060 | P1060 VVT-Versorgungsspannung Stellmotor (Bank 2) - elektrischer Fehler |
| 0x1061 | P1061 | P1061 VVT-Notlaufanforderung - Drehzahl- und Füllungsbegrenzung |
| 0x1062 | P1062 | P1062 VVT-Notlaufanforderung - Vollhubposition nicht erreicht |
| 0x1063 | P1063 | P1063 VVT-Notlaufanforderung - Luftmassen-Plausibilitätsfehler |
| 0x1064 | P1064 | P1064 VVT-Wertevergleich Abstellposition/Startposition - Plausibilitätsfehler |
| 0x1065 | P1065 | P1065 VVT-CAN-Timeout - kein Signal |
| 0x1066 | P1066 | P1066 VVT-CAN-Botschaftsüberwachung - Istwert fehlerhaft |
| 0x1067 | P1067 | P1067 VVT-Referenzsensor (Bank 2) - Magnetverlust |
| 0x1068 | P1068 | P1068 VVT-Referenzsensor (Bank 2) - Resetfehler |
| 0x1069 | P1069 | P1069 VVT-Referenzsensor (Bank 2) - Parityfehler |
| 0x1070 | P1070 | P1070 VVT Referenzsensor (Bank 2) - Gradientenfehler |
| 0x1071 | P1071 | P1071 VVT-Steuergerät (Bank 1) - interner Watchdog oder Temperatursensorfehler |
| 0x1072 | P1072 | P1072 VVT-Steuergerät (Bank 2) - interner Watchdog oder Temperatursensorfehler |
| 0x1073 | P1073 | P1073 VVT-Sensoren (Bank 1) - Datenkonformität |
| 0x1074 | P1074 | P1074 VVT-Sensoren (Bank 2) - Datenkonformität |
| 0x1075 | P1075 | P1075 VVT-Überlastschutz (Bank 1) - Fehlfunktion |
| 0x1076 | P1076 | P1076 VVT-Überlastschutz SG-Temperatur (Bank 1) - Input hoch |
| 0x1077 | P1077 | P1077 VVT-Überlastschutz Stellmotortemperatur (Bank 1) - Input hoch |
| 0x1078 | P1078 | P1078 VVT-Überlastschutz Stellmotorstrom (Bank 1) - Input hoch |
| 0x1079 | P1079 | P1079 VVT-Überlastschutz (Bank 2) - Fehlfunktion |
| 0x1080 | P1080 | P1080 VVT-Überlastschutz SG-Temperatur (Bank 2) - Input hoch |
| 0x1081 | P1081 | P1081 VVT-Überlastschutz Stellmotortemperatur (Bank 2) - Input hoch |
| 0x1082 | P1082 | P1082 VVT-Überlastschutz Stellmotorstrom (Bank 2) - Input hoch |
| 0x1083 | P1083 | P1083 Gemischaufbereitung am Regelanschlag (Bank 1, vor Katalysator) - System zu mager |
| 0x1084 | P1084 | P1084 Gemischaufbereitung am Regelanschlag (Bank 1, vor Katalysator) - System zu fett |
| 0x1085 | P1085 | P1085 Gemischaufbereitung am Regelanschlag (Bank 2, vor Katalysator) - System zu mager |
| 0x1086 | P1086 | P1086 Gemischaufbereitung am Regelanschlag (Bank 2, vor Katalysator) - System zu fett |
| 0x1087 | P1087 | P1087 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion im Magerbereich der Regelschwingung |
| 0x1088 | P1088 | P1088 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion im Fettbereich der Regelschwingung |
| 0x1089 | P1089 | P1089 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion im Magerbereich der Regelschwingung |
| 0x1090 | P1090 | P1090 Gemischregelung (Bank 1, vor Katalysator) - System zu mager |
| 0x1091 | P1091 | P1091 Gemischregelung (Bank 2, vor Katalysator) - System zu mager |
| 0x1092 | P1092 | P1092 Gemischregelung (Bank 1, vor Katalysator) - System zu fett |
| 0x1093 | P1093 | P1093 Gemischregelung (Bank 2, vor Katalysator) - System zu fett |
| 0x1094 | P1094 | P1094 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion in Fettbereich der Regelschwingung |
| 0x1095 | P1095 | P1095 Lambdasonde Signalkreis (Bank 1, vor Katalysator) - Sprungzeit mager nach fett und fett nach Mager langsame Reaktion |
| 0x1096 | P1096 | P1096 Lambdasonde Signalkreis (Bank 2, vor Katalysator) - Sprungzeit mager nach fett und fett nach mager langsame Reaktion |
| 0x1097 | P1097 | P1097 Lambdasonde (Bank 1, nach Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x1098 | P1098 | P1098 Lambdasonde (Bank 2, nach Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x1100 | P1100 | P1100 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion nach Schubabschaltphase  (S62: Luftmassenmesser - Input hoch) |
| 0x1101 | P1101 | P1101 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x1102 | P1102 | P1102 Leerlaufregelsystem - Nebenluft Massenstromadaption zu klein |
| 0x1103 | P1103 | P1103 Leerlaufregelsystem - Nebenluft Massenstromadaption zu groß |
| 0x1104 | P1104 | P1104 Differenzdrucksensor Saugrohr - Druck zu niedrig |
| 0x1105 | P1105 | P1105 Differenzdrucksensor Saugrohr - Druck zu hoch |
| 0x1106 | P1106 | P1106 Drucksensor Saugrohr - Input zu niedrig bei stehendem Motor |
| 0x1107 | P1107 | P1107 Drucksensor Saugrohr - Input zu niedrig im Leerlauf |
| 0x1108 | P1108 | P1108 Drucksensor Saugrohr - Input zu niedrig bei Volllast bei niedriger Motordrehzahl |
| 0x1109 | P1109 | P1109 Drucksensor Saugrohr - Input zu hoch bei Schub |
| 0x1110 | P1110 | P1110 Motoröltemperatur - zu hoch |
| 0x1111 | P1111 | P1111 Temperaturfühler Kühleraustritt - Input niedrig |
| 0x1112 | P1112 | P1112 Temperaturfühler Kühleraustritt - Input hoch |
| 0x1113 | P1113 | P1113 Temperaturfühler Kühleraustritt - input sporadisch |
| 0x1114 | P1114 | P1114 Lambdasonde Signalkreis (Bank 2, vor Katalysator) - Sprungzeit mager nach fett langsame Reaktion |
| 0x1115 | P1115 | P1115 Umgebungstemperaturfühler - Fehlerwert empfangen (M52LEV, S54 bis 09/00: Kühlmitteltemperatursensor - Plausibilitätsfehler) |
| 0x1116 | P1116 | P1116 Luftmassen- oder Luftmengendurchsatz (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x1117 | P1117 | P1117 Luftmassen- oder Luftmengendurchsatz (Bank 2) - Input niedrig |
| 0x1118 | P1118 | P1118 Luftmassen- oder Luftmengendurchsatz (Bank 2) - Input hoch |
| 0x1119 | P1119 | P1119 Lambdasonde Signalkreis (Bank 1, vor Katalysator) - Sprungzeit mager nach fett langsame Reaktion |
| 0x1120 | P1120 | P1120 Pedalwertgeber - Fehlfunktion |
| 0x1121 | P1121 | P1121 Pedalwertgeber 1 - Meßbereichs- oder Leistungsproblem |
| 0x1122 | P1122 | P1122 Pedalwertgeber 1 - Input niedrig |
| 0x1123 | P1123 | P1123 Pedalwertgeber 1 - Input hoch |
| 0x1125 | P1125 | P1125 Drosselklappenpotentiometer 1 und 2 - Meßbereichs- oder Leistungsproblem (kleiner Fehler) |
| 0x1126 | P1126 | P1126 Drosselklappenpotentiometer 1 und 2 - Meßbereichs- oder Leistungsproblem (großer Fehler) |
| 0x1127 | P1127 | P1127 Ölniveausensor Signal - Plausibilitätsfehler |
| 0x1128 | P1128 | P1128 Ölniveausensor - kein Signal |
| 0x1129 | P1129 | P1129 Ölniveausensor Signal - Ölstand zu niedrig |
| 0x1130 | P1130 | P1130 Lambdasonde (Bank 1, nach Katalysator) - Dynamikprüfung |
| 0x1131 | P1131 | P1131 Lambdasonde (Bank 1, nach Katalysator) - Dynamikprüfung |
| 0x1132 | P1132 | P1132 Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x1133 | P1133 | P1133 Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x1134 | P1134 | P1134 Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Signal sporadisch |
| 0x1135 | P1135 | P1135 Lambdasonde Heizungschaltkreis (Bank 1 vor Katalysator) - Spannung niedrig |
| 0x1136 | P1136 | P1136 Lambdasonde Heizungschaltkreis (Bank 1 vor Katalysator) - Spannung hoch |
| 0x1137 | P1137 | P1137 Lambdasonde Heizungschaltkreis (Bank 1 nach Katalysator) - Signal sporadisch |
| 0x1138 | P1138 | P1138 Lambdasonde Heizungschaltkreis (Bank 1 nach Katalysator) - Spannung niedrig |
| 0x1139 | P1139 | P1139 Lambdasonde Heizungschaltkreis (Bank 1 nach Katalysator) - Spannung hoch |
| 0x1140 | P1140 | P1140 Luftmassen- oder Luftmengendurchsatz - Meßbereichs- oder Leistungsproblem |
| 0x1141 | P1141 | P1141 Wertevergleich Drosselklapenpotentiometer 1/Heißfilmluftmassenmesser |
| 0x1142 | P1142 | P1142 Wertevergleich Drosselklapenpotentiometer 2/Heißfilmluftmassenmesser |
| 0x1143 | P1143 | P1143 Lambdasonde Aktivitätsüberprüfung (Bank 1, nach Katalysator) - Signal zu hoch |
| 0x1144 | P1144 | P1144 Lambdasonde Aktivitätsüberprüfung (Bank 1, nach Katalysator) - Signal zu niedrig |
| 0x1145 | P1145 | P1145 Magnetventil Running Losses Ansteuerung - elektrischer Fehler |
| 0x1146 | P1146 | P1146 Magnetventil Running Losses Ansteuerung - Leitungsunterbrechung |
| 0x1147 | P1147 | P1147 Magnetventil Running Losses Ansteuerung - Input niedrig |
| 0x1148 | P1148 | P1148 Magnetventil Running Losses Ansteuerung - Input hoch |
| 0x1149 | P1149 | P1149 Lambdasonde Aktivitätsüberprüfung (Bank 2, nach Katalysator) - Signal zu hoch |
| 0x1150 | P1150 | P1150 Lambdasonde Aktivitätsüberprüfung (Bank 2, nach Katalysator) - Signal zu niedrig |
| 0x1151 | P1151 | P1151 Lambdasonde Heizungschaltkreis (Bank 2, vor Katalysator) - Signal sporadisch |
| 0x1152 | P1152 | P1152 Lambdasonde Heizungschaltkreis (Bank 2, vor Katalysator) - Spannung niedrig |
| 0x1153 | P1153 | P1153 Lambdasonde Heizungschaltkreis (Bank 2, vor Katalysator) - Spannung hoch |
| 0x1154 | P1154 | P1154 Differenzdrucksensor Saugrohr (Bank 2) - Input hoch |
| 0x1155 | P1155 | P1155 Lambdasonde Heizungschaltkreis (Bank 2, nach Katalysator) - Signal sporadisch |
| 0x1156 | P1156 | P1156 Lambdasonde Heizungschaltkreis (Bank 2, nach Katalysator) - Spannung niedrig |
| 0x1157 | P1157 | P1157 Lambdasonde Heizungschaltkreis (Bank 2, nach Katalysator) - Spannung hoch |
| 0x1158 | P1158 | P1158 Gemischregelung Adaption additiv pro Zeit (Bank 1) - zu klein |
| 0x1159 | P1159 | P1159 Gemischregelung Adaption additiv pro Zeit (Bank 1)  - zu groß |
| 0x1160 | P1160 | P1160 Gemischregelung Adaption additiv pro Zeit (Bank 2)  - zu klein |
| 0x1161 | P1161 | P1161 Gemischregelung Adaption additiv pro Zeit (Bank 2)  - zu groß (M52: Motoröltemperaturfühler - Fehlfunktion) |
| 0x1162 | P1162 | P1162 Gemischregelung Adaption additiv pro Zündung (Bank 1)  - zu klein |
| 0x1163 | P1163 | P1163 Gemischregelung Adaption additiv pro Zündung (Bank 1) - zu groß |
| 0x1164 | P1164 | P1164 Gemischregelung Adaption additiv pro Zündung (Bank 2) - zu klein |
| 0x1165 | P1165 | P1165 Gemischregelung Adaption additiv pro Zündung (Bank 2) - zu groß |
| 0x1166 | P1166 | P1166 Lambdasonden vertauscht |
| 0x1167 | P1167 | P1167 Lambdasonde Heizereinkopplung (Bank 1, vor Katalysator) - Signal zu hoch |
| 0x1168 | P1168 | P1168 Gemischfeinregelung (Bank 1) - Regler Korrekturwert über Schwellwert |
| 0x1169 | P1169 | P1169 Lambdasonde Heizereinkopplung (Bank 2, vor Katalysator) - Signal zu hoch |
| 0x1170 | P1170 | P1170 Gemischfeinregelung (Bank 2) - Regler Korrekturwert über Schwellwert |
| 0x1171 | P1171 | P1171 Umgebungsdrucksensor, Variantenerkennung - Wert im Bootbereich unplausibel |
| 0x1172 | P1172 | P1172 Umgebungsdrucksensor, Variantenerkennung - Fehlerwert im Bootbereich abgelegt |
| 0x1173 | P1173 | P1173 Umgebungsdrucksensor, Variantenerkennung - Lernen fehlgeschlagen |
| 0x1174 | P1174 | P1174 Gemischregelung Adaption additiv pro Zeit (Bank 1) - Fehlfunktion |
| 0x1175 | P1175 | P1175 Gemischregelung Adaption additiv pro Zeit (Bank 2) - Fehlfunktion |
| 0x1176 | P1176 | P1176 Lambdasondenalterung (Bank 1) - Zeitverzögerung |
| 0x1177 | P1177 | P1177 Lambdasondenalterung (Bank 2) - Zeitverzögerung |
| 0x1178 | P1178 | P1178 Lambdasonde Signalkreis (Bank 1, vor Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1179 | P1179 | P1179 Lambdasonde Signalkreis (Bank 2, vor Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1180 | P1180 | P1180 Lambdasonde Signalkreis (Bank 1, nach Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1181 | P1181 | P1181 Lambdasonde Signalkreis (Bank 1, nach Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1182 | P1182 | P1182 Lambdasonde (Bank 1, nach Katalysator) - Leitungsunterbrechung bei Schubabschaltung |
| 0x1183 | P1183 | P1183 Lambdasonde (Bank 2, nach Katalysator) - Leitungsunterbrechung bei Schubabschaltung |
| 0x1184 | P1184 | P1184 Beheizte Lambdasonde Spannungshub (Bank 1, vor Katalysator) - elektrischer Fehler |
| 0x1185 | P1185 | P1185 Beheizte Lambdasonde Spannungshub (Bank 2, vor Katalysator) - elektrischer Fehler |
| 0x1186 | P1186 | P1186 Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x1187 | P1187 | P1187 Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x1188 | P1188 | P1188 Gemischaufbereitung am Regelanschlag (Bank 1 , vor Katalysator) - Fehlfunktion |
| 0x1189 | P1189 | P1189 Gemischaufbereitung am Regelanschlag (Bank 2 , vor Katalysator) - Fehlfunktion |
| 0x1190 | P1190 | P1190 Gemischregelung (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x1191 | P1191 | P1191 Gemischregelung (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x1192 | P1192 | P1192 Gemischfeinregelung (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x1193 | P1193 | P1193 Gemischfeinregelung (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x1196 | P1196 | P1196 Differenzdrucksensor Saugrohr (Bank 2) - Input niedrig |
| 0x1197 | P1197 | P1197 Differenzdrucksensor Saugrohr - Input hoch |
| 0x1198 | P1198 | P1198 Differenzdrucksensor Saugrohr - Input niedrig |
| 0x1199 | P1199 | P1199 Differenzdrucksensor Saugrohr - Plausibilitätsfehler |
| 0x1200 | P1200 | P1200 Gemischregelung oberer Adaptionsbereich (Bank 1) - System zu mager |
| 0x1201 | P1201 | P1201 Gemischregelung oberer Adaptionsbereich (Bank 1) - System zu fett |
| 0x1202 | P1202 | P1202 Gemischregelung oberer Adaptionsbereich (Bank 2) - System zu mager |
| 0x1203 | P1203 | P1203 Gemischregelung oberer Adaptionsbereich (Bank 2) - System zu fett |
| 0x1204 | P1204 | P1204 Lambdasonde (Bank 1, nach Katalysator) Volllastprüfung - Signal zu niedrig |
| 0x1205 | P1205 | P1205 Lambdasonde (Bank 2, nach Katalysator) Volllastprüfung - Signal zu niedrig |
| 0x1206 | P1206 | P1206 Saugstrahlpumpe Absperrventil - Input niedrig |
| 0x1207 | P1207 | P1207 Saugstrahlpumpe Absperrventil - Input hoch |
| 0x1208 | P1208 | P1208 Saugstrahlpumpe Absperrventil - Leitungsunterbrechung |
| 0x1209 | P1209 | P1209 Suagstrahlpumpe Absperrventil - Plausibilitätsfehler |
| 0x1210 | P1210 | P1210 Lambdasonde (Bank 1, vor Katalysator) - begrenzter Spannungshub |
| 0x1211 | P1211 | P1211 Lambdasonde (Bank 2, vor Katalysator) - begrenzter Spannungshub |
| 0x1212 | P1212 | P1212 Abgasrückführsteller - Input hoch |
| 0x1213 | P1213 | P1213 Abgasrückführsteller - Input niedrig |
| 0x1214 | P1214 | P1214 Kraftstoffpumpe - Drehzahl zu hoch |
| 0x1215 | P1215 | P1215 Kraftstoffpumpe - Drehzahl zu niedrig |
| 0x1216 | P1216 | P1216 Kraftstoffpumpe - Notlauf |
| 0x1217 | P1217 | P1217 Kraftstoffpumpe - Übertemperatur |
| 0x1218 | P1218 | P1218 Drosselklappenpotentiometer 1 (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x1219 | P1219 | P1219 Drosselklappenpotentiometer 1 (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x1220 | P1220 | P1220 Drosselklappenpotentiometer 1 (Bank 2) - Input niedrig |
| 0x1221 | P1221 | P1221 Pedalwertgeber 2 - Meßbereichs- oder Leistungsproblem |
| 0x1222 | P1222 | P1222 Pedalwertgeber 2 - Input niedrig |
| 0x1223 | P1223 | P1223 Pedalwertgeber 2 - Input hoch |
| 0x1224 | P1224 | P1224 Pedalwertgeber 1 und 2 - Meßbereichs- oder Leistungsproblem |
| 0x1225 | P1225 | P1225 Drosselklappenpotentiometer 1 (Bank 2) - Input hoch |
| 0x1226 | P1226 | P1226 Drosselklappe - Fehlfunktion (Klappenfehlfunktion) |
| 0x1227 | P1227 | P1227 Drosselklappenpotentiometer 2 (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x1228 | P1228 | P1228 Drosselklappenpotentiometer 2 (Bank 2) - Input niedrig |
| 0x1229 | P1229 | P1229 Drosselklappenpotentiometer - Adaptionsfehler |
| 0x1230 | P1230 | P1230 Kraftstoffpumpen-Relais Primärkreis - Fehlfunktion |
| 0x1231 | P1231 | P1231 Kraftstoffpumpe 2 - Signal niedrig |
| 0x1232 | P1232 | P1232 Kraftstoffpumpe 2 - Signal hoch |
| 0x1233 | P1233 | P1233 Kraftstoffpumpe 2 - Signal sporadisch |
| 0x1234 | P1234 | P1234 Kraftstoffpumpen-Relais Primärkreis - Input niedrig |
| 0x1235 | P1235 | P1235 Drucksensor Saugrohr vor Kompressor - Input sporadisch |
| 0x1236 | P1236 | P1236 Kraftstoffpumpen-Relais Primärkreis - Input hoch |
| 0x1237 | P1237 | P1237 Drucksensor Saugrohr vor Kompressor - Input niedrig |
| 0x1238 | P1238 | P1238 Drucksensor Saugrohr vor Kompressor - Input  hoch |
| 0x1239 | P1239 | P1239 Drucksensor Saugrohr vor Kompressor - Input zu niedrig bei stehendem Motor |
| 0x1240 | P1240 | P1240 Drucksensor Saugrohr vor Kompressor - Input zu niedrig im Leerlauf |
| 0x1241 | P1241 | P1241 Drucksensor Saugrohr vor Kompressor - Input zu niedrig bei Volllast bei niedriger Motordrehzahl |
| 0x1242 | P1242 | P1242 Drucksensor Saugrohr vor Kompressor - Input zu hoch bei Schub |
| 0x1243 | P1243 | P1243 Drosselklappenpotentiometer 2 (Bank 2) - Input hoch |
| 0x1244 | P1244 | P1244 Kraftstoffpumpe - Notabschaltung |
| 0x1245 | P1245 | P1245 Ladelufttemperaturfuehler - Input hoch |
| 0x1246 | P1246 | P1246 Ladelufttemperaturfuehler - Input niedrig |
| 0x1247 | P1247 | P1247 Umgebungsdruck - Plausibilitätsfehler |
| 0x1249 | P1249 | P1249 Kraftstoffvolumenregler (Bank 2) - Leitungsunterbrechung |
| 0x1251 | P1251 | P1251 Ladedrucksteller - Input hoch |
| 0x1252 | P1252 | P1252 Ladedrucksteller - Input niedrig |
| 0x1253 | P1253 | P1253 Ladedrucksteller - Leitungsunterbrechung |
| 0x1254 | P1254 | P1254 Ladedrucksteller Endstufe - Übertemperatur |
| 0x1256 | P1256 | P1256 Ladedrucksteller (Bank 2) - Input hoch |
| 0x1257 | P1257 | P1257 Ladedrucksteller (Bank 2) - Input niedrig |
| 0x1258 | P1258 | P1258 Ladedrucksteller (Bank 2) - Leitungsunterbrechung |
| 0x1259 | P1259 | P1259 Ladedrucksteller Endstufe (Bank 2) - Übertemperatur |
| 0x1261 | P1261 | P1261 Luftmassen- oder Luftmengendurchsatz - zu groß im Leerlauf |
| 0x1262 | P1262 | P1262 Luftmassen- oder Luftmengendurchsatz - zu groß in Volllast |
| 0x1263 | P1263 | P1263 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu groß im Leerlauf |
| 0x1264 | P1264 | P1264 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu groß in Volllast |
| 0x1265 | P1265 | P1265 Abgasrückführsteller (Bank 2) - Input hoch |
| 0x1266 | P1266 | P1266 Abgasrückführsteller (Bank 2) - Input niedrig |
| 0x1267 | P1267 | P1267 Abgasrückführsteller (Bank 2) - Leitungsunterbrechung |
| 0x1268 | P1268 | P1268 Abgasrückführsteller Endstufe (Bank 2) - Übertemperatur |
| 0x1269 | P1269 | P1269 Abgasrückführsteller Endstufe - Übertemperatur |
| 0x1270 | P1270 | P1270 Steuergeräte-Selbsttest, Momentüberwachung (M73: Luftmassenmesser Bankvergleich - Plausibilitätsfehler) |
| 0x1271 | P1271 | P1271 Umgebungsdrucksensor - elektrischer Fehler (M73: Höhendrucksensor / Ladedrucksensor Wertevergleich - Plausibilitätsfehler) |
| 0x1278 | P1278 | P1278 Laufruheregler -  Korrekturmenge zu hoch |
| 0x1279 | P1279 | P1279 Laufruheregler - Korrekturmenge zu niedrig |
| 0x1280 | P1280 | P1280 Luftumfasstes Einspritzsystem (Bank 1) - Fehlfunktion |
| 0x1281 | P1281 | P1281 Kraftstoffvolumenregler (Bank 2) - Input niedrig |
| 0x1282 | P1282 | P1282 Kraftstoffvolumenregler (Bank 2) - Input hoch |
| 0x1283 | P1283 | P1283 Schaltventil für luftumfasste Einspritzventile (Bank 1) Ansteuerung - elektrischer Fehler |
| 0x1284 | P1284 | P1284 Schaltventil für luftumfasste Einspritzventile (Bank 1) Ansteuerung - Signal niedrig |
| 0x1285 | P1285 | P1285 Schaltventil für luftumfasste Einspritzventile (Bank 1) Ansteuerung - Signal hoch |
| 0x1286 | P1286 | P1286 Abgasrückführsteller - Leitungsunterbrechung |
| 0x1287 | P1287 | P1287 Schaltventil für luftumfasste Einspritzventile (Bank 2) Ansteuerung - elektrischer Fehler |
| 0x1288 | P1288 | P1288 Schaltventil für luftumfasste Einspritzventile (Bank 2) Ansteuerung - Signal niedrig |
| 0x1289 | P1289 | P1289 Schaltventil für luftumfasste Einspritzventile (Bank 2) Ansteuerung - Signal hoch |
| 0x1291 | P1291 | P1291 Kraftstoffvolumenregler Endstufe - Übertemperatur  |
| 0x1292 | P1292 | P1292 Füllungsbegrenzung - Plausibilitätsfehler |
| 0x1293 | P1293 | P1293 Füllungsbegrenzung - Lamda zu fett |
| 0x1294 | P1294 | P1294 Füllungsbegrenzung - Überlast Hochdruckpumpe |
| 0x1296 | P1296 | P1296 Ladedruckregelung - Ladedruck zu hoch |
| 0x1297 | P1297 | P1297 Ladedruckregelung - Ladedruck zu niedrig  |
| 0x1301 | P1301 | P1301 Zündkreisüberwachung Zyl. 1 - Brenndauer zu klein |
| 0x1302 | P1302 | P1302 Zündkreisüberwachung Zyl. 2 - Brenndauer zu klein |
| 0x1303 | P1303 | P1303 Zündkreisüberwachung Zyl. 3 - Brenndauer zu klein |
| 0x1304 | P1304 | P1304 Zündkreisüberwachung Zyl. 4 - Brenndauer zu klein |
| 0x1305 | P1305 | P1305 Zündkreisüberwachung Zyl. 5 - Brenndauer zu klein |
| 0x1306 | P1306 | P1306 Zündkreisüberwachung Zyl. 6 - Brenndauer zu klein |
| 0x1307 | P1307 | P1307 Zündkreisüberwachung Zyl. 7 - Brenndauer zu klein |
| 0x1308 | P1308 | P1308 Zündkreisüberwachung Zyl. 8 - Brenndauer zu klein |
| 0x1309 | P1309 | P1309 Zündkreisüberwachung Zyl. 9 - Brenndauer zu klein |
| 0x1310 | P1310 | P1310 Zündkreisüberwachung Zyl. 10 - Brenndauer zu klein |
| 0x1311 | P1311 | P1311 Zündkreisüberwachung Zyl. 11 - Brenndauer zu klein |
| 0x1312 | P1312 | P1312 Zündkreisüberwachung Zyl. 12 - Brenndauer zu klein |
| 0x1313 | P1313 | P1313 Nockenwellenversteller Einlass - Plausibilitätsfehler (S54 bis 09/00: Nockenwellengeber Auslass (Bank 1 ) - Input sporadisch) |
| 0x1314 | P1314 | P1314 Gemischabweichung entdeckt bei niedrigem Kraftstoffstand |
| 0x1315 | P1315 | P1315 Nockenwellengeber Einlass (Bank 1) - Signaldauer nach Initialisierung |
| 0x1316 | P1316 | P1316 Nockenwellengeber Einlass (Bank 1) - Signaldauer während Initialisierung |
| 0x1317 | P1317 | P1317 Nockenwellenversteller Auslass - Plausibilitätsfehler |
| 0x1318 | P1318 | P1318 Nockenwellengeber Auslass (Bank 1) - Signaldauer nach Initialisierung |
| 0x1319 | P1319 | P1319 Nockenwellengeber Auslass (Bank 1) - Signaldauer während Initialisierung |
| 0x1320 | P1320 | P1320 Schwungradadaption für Aussetzererkennung - Meßbereichsproblem |
| 0x1321 | P1321 | P1321 Schwungradadaption für Aussetzererkennung - Leistungsproblem |
| 0x1322 | P1322 | P1322 Nockenwelle Einlass (Bank 1) - Abstellposition nicht erreicht |
| 0x1323 | P1323 | P1323 Nockenwelle Einlass (Bank 1) - Startposition nicht erreicht |
| 0x1324 | P1324 | P1324 Nockenwelle Auslass (Bank 1) - Abstellposition nicht erreicht |
| 0x1325 | P1325 | P1325 Nockenwelle Auslass (Bank 1) - Startposition nicht erreicht |
| 0x1326 | P1326 | P1326 Nockenwellensteuerung Einlass (Bank 1) - Referenzposition außerhalb Gültigkeitsbereich |
| 0x1327 | P1327 | P1327 Klopfsensor 2 (Bank 1) - Input niedrig |
| 0x1328 | P1328 | P1328 Klopfsensor 2 (Bank 1) - Input hoch |
| 0x1329 | P1329 | P1329 Klopfsensor 3 - Input niedrig |
| 0x1330 | P1330 | P1330 Klopfsensor 3 - Input hoch |
| 0x1331 | P1331 | P1331 Nockenwellensteuerung Auslass (Bank 1) - Referenzposition außerhalb Gültigkeitsbereich |
| 0x1332 | P1332 | P1332 Klopfsensor 4 - Input niedrig |
| 0x1333 | P1333 | P1333 Klopfsensor 4 - Input hoch |
| 0x1334 | P1334 | P1334 Klopfsensor 5 - Input niedrig |
| 0x1335 | P1335 | P1335 Klopfsensor 5 - Input hoch |
| 0x1336 | P1336 | P1336 Klopfsensor 6 - Input niedrig |
| 0x1337 | P1337 | P1337 Klopfsensor 6 - Input hoch |
| 0x1338 | P1338 | P1338 Nockenwellengeber Einlass (Bank 1) - Phasenposition fehlerhaft |
| 0x1339 | P1339 | P1339 Nockenwellengeber Auslass (Bank 1) - Phasenposition fehlerhaft |
| 0x1340 | P1340 | P1340 Aussetzer im Start - Mehrfachfehler |
| 0x1341 | P1341 | P1341 Aussetzer mit Kraftstoffabschaltung - Mehrfachfehler |
| 0x1342 | P1342 | P1342 Aussetzer im Start Zylinder 1 |
| 0x1343 | P1343 | P1343 Aussetzer mit Kraftstoffabschaltung Zylinder 1 |
| 0x1344 | P1344 | P1344 Aussetzer im Start Zylinder 2 |
| 0x1345 | P1345 | P1345 Aussetzer mit Kraftstoffabschaltung Zylinder 2 |
| 0x1346 | P1346 | P1346 Aussetzer im Start Zylinder 3 |
| 0x1347 | P1347 | P1347 Aussetzer mit Kraftstoffabschaltung Zylinder 3 |
| 0x1348 | P1348 | P1348 Aussetzer im Start Zylinder 4 |
| 0x1349 | P1349 | P1349 Aussetzer mit Kraftstoffabschaltung Zylinder 4 |
| 0x1350 | P1350 | P1350 Aussetzer im Start Zylinder 5 |
| 0x1351 | P1351 | P1351 Aussetzer mit Kraftstoffabschaltung Zylinder 5 |
| 0x1352 | P1352 | P1352 Aussetzer im Start Zylinder 6 |
| 0x1353 | P1353 | P1353 Aussetzer mit Kraftstoffabschaltung Zylinder 6 |
| 0x1354 | P1354 | P1354 Aussetzer im Start Zylinder 7 |
| 0x1355 | P1355 | P1355 Aussetzer mit Kraftstoffabschaltung Zylinder 7 |
| 0x1356 | P1356 | P1356 Aussetzer im Start Zylinder 8 |
| 0x1357 | P1357 | P1357 Aussetzer mit Kraftstoffabschaltung Zylinder 8 |
| 0x1358 | P1358 | P1358 Aussetzer im Start Zylinder 9 |
| 0x1359 | P1359 | P1359 Aussetzer mit Kraftstoffabschaltung Zylinder 9 |
| 0x1360 | P1360 | P1360 Aussetzer im Start Zylinder 10 |
| 0x1361 | P1361 | P1361 Aussetzer mit Kraftstoffabschaltung Zylinder 10 |
| 0x1362 | P1362 | P1362 Aussetzer im Start Zylinder 11 |
| 0x1363 | P1363 | P1363 Aussetzer mit Kraftstoffabschaltung Zylinder 11 |
| 0x1364 | P1364 | P1364 Aussetzer im Start Zylinder 12 |
| 0x1365 | P1365 | P1365 Aussetzer mit Kraftstoffabschaltung Zylinder 12 |
| 0x1366 | P1366 | P1366 Zündspule 1 Primär-/Sekundärkreis - Input niedrig |
| 0x1367 | P1367 | P1367 Zündspule 2 Primär-/Sekundärkreis - Input niedrig |
| 0x1377 | P1377 | P1377 Nockenwellengeber - Masternockenwellengeber nicht definiert |
| 0x1378 | P1378 | P1378 Steuergeräte-Selbsttest, Klopfregelung Offset (Bank 2) |
| 0x1379 | P1379 | P1379 Steuergeräte-Selbsttest, Klopfregelung Testimpuls (Bank 2) |
| 0x1380 | P1380 | P1380 Steuergeräte-Selbsttest, Klopfregelung Nulltest (Bank 2) |
| 0x1381 | P1381 | P1381 Steuergeräte-Selbsttest, Klopfregelung Offset (Bank 1) |
| 0x1382 | P1382 | P1382 Steuergeräte-Selbsttest, Klopfregelung Testimpuls (Bank 1) |
| 0x1383 | P1383 | P1383 Zündkreisüberwachung - Fehlfunktion |
| 0x1384 | P1384 | P1384 Klopfsensor 3 - Fehlfunktion |
| 0x1385 | P1385 | P1385 Klopfsensor 4 - Fehlfunktion |
| 0x1386 | P1386 | P1386 Steuergeräte-Selbsttest, Klopfregelung Nulltest (Bank 1) |
| 0x1396 | P1396 | P1396 Kurbelwellengeber Segmentzeitmessung - Plausibilitätsfehler |
| 0x1397 | P1397 | P1397 Nockenwellengeber Auslass (Bank 1) - Fehlfunktion |
| 0x1400 | P1400 | P1400 E-Katalysator (Bank 1) - Batteriespannung oder Strom zu gering beim Heizen |
| 0x1401 | P1401 | P1401 E-Katalysator (Bank 1) - Strom zu groß beim Heizen |
| 0x1402 | P1402 | P1402 E-Katalysator Leistungsschalter (Bank 1) - Übertemperatur |
| 0x1403 | P1403 | P1403 Aktivkohlefilterabsperrventil Ansteuerung - elektrischer Fehler (M73: E-Katalysator (Bank 2) - Batteriespannung oder Strom zu gering beim Heizen) |
| 0x1404 | P1404 | P1404 E-Katalysator (Bank 2) - Strom zu groß beim Heizen |
| 0x1405 | P1405 | P1405 E-Katalysator Leistungsschalter (Bank 2) - Übertemperatur |
| 0x1406 | P1406 | P1406 E-Katalysator Steuergerät - interner Prüfsummenfehler/ROM |
| 0x1407 | P1407 | P1407 Kraftstofffüllstandssignal 1 - Signal fehlerhaft |
| 0x1408 | P1408 | P1408 Kraftstofffüllstandssignal 2 - Signal fehlerhaft |
| 0x1409 | P1409 | P1409 Kraftstofffüllstand - CAN Fehler |
| 0x140A | P140A | P140A Sekundärluftsystem - Durchsatz Summe (Bank 1 und Bank 2) zu gering |
| 0x140B | P140B | P140B Sekundärluftsystem - Durchsatz Summe (Bank 1 und Bank 2) zu gering und Durchsatz Bank 1 zu niedrig |
| 0x140C | P140C | P140C Sekundärluftsystem - Durchsatz Summe (Bank 1 und Bank 2) zu gering und Durchsatz Bank 2 zu niedrig |
| 0x1410 | P1410 | P1410 Kraftstofffüllstandssignal - Plausibilitätsfehler |
| 0x1411 | P1411 | P1411 Sekundärluftpumpe - keine Aktivität festzustellen |
| 0x1412 | P1412 | P1412 Sekundärluftpumpe/Sekundärluftventil - grobe Undichtigkeit |
| 0x1413 | P1413 | P1413 Sekundärluftpumpenrelais - Signal niedrig |
| 0x1414 | P1414 | P1414 Sekundärluftpumpenrelais - Signal hoch |
| 0x1415 | P1415 | P1415 Luftmassen- oder Luftmengendurchsatz - zu gering |
| 0x1416 | P1416 | P1416 Sekundärluftventil - klemmt offen |
| 0x1418 | P1418 | P1418 Sekundärluftventil/Sekundärluftschlauch - blockiert |
| 0x1419 | P1419 | P1419 Sekundärluftmassenmesser - Fehlfunktion |
| 0x141A | P141A | P141A Abgasklappe 2 - Fehlfunktion |
| 0x141B | P141B | P141B Abgasklappe 2 - Meßbereichs- oder Leistungsproblem |
| 0x141C | P141C | P141C Abgasklappe 2 - Input niedrig |
| 0x141D | P141D | P141D Abgasklappe 2 - Input hoch |
| 0x141E | P141E | P141E Abgasklappe 2 - Input sporadisch |
| 0x1420 | P1420 | P1420 Sekundärluftventil - elektrischer Fehler |
| 0x1421 | P1421 | P1421 Sekundärluftsystem System (Bank 2) - Fehlfunktion |
| 0x1423 | P1423 | P1423 Sekundärluftsystem System (Bank 1) - Fehlfunktion |
| 0x1425 | P1425 | P1425 Drallklappe - Input hoch |
| 0x1426 | P1426 | P1426 Drallklappe - Input niedrig |
| 0x1427 | P1427 | P1427 Drallklappe - Leitungsunterbrechung |
| 0x1428 | P1428 | P1428 Drallklappe Endstufe - Übertemperatur |
| 0x1429 | P1429 | P1429 Diagnosemodul Tankleckage (DM-TL) Heizung - Fehlfunktion |
| 0x1430 | P1430 | P1430 Diagnosemodul Tankleckage (DM-TL) Heizung - Input niedrig |
| 0x1431 | P1431 | P1431 Diagnosemodul Tankleckage (DM-TL) Heizung - Input hoch |
| 0x1432 | P1432 | P1432 Sekundärluftsystem - Durchsatzfehler erkannt |
| 0x1434 | P1434 | P1434 Diagnosemodul Tankleckage (DM-TL) - Fehlfunktion |
| 0x1436 | P1436 | P1436 Leckdiagnosepumpe - Leitungsunterbrechung |
| 0x1437 | P1437 | P1437 Leckdiagnosepumpe - Meßbereichs- oder Leistungsproblem |
| 0x1438 | P1438 | P1438 Tankentlüftungsventil - Leitungsunterbrechung |
| 0x1439 | P1439 | P1439 Tankentlüftungsventil - Signal niedrig |
| 0x1440 | P1440 | P1440 Tankentlüftungsventil - Signal hoch |
| 0x1441 | P1441 | P1441 Leckdiagnosepumpe - Leitungsunterbrechung |
| 0x1442 | P1442 | P1442 Leckdiagnosepumpe - Signal niedrig |
| 0x1443 | P1443 | P1443 Leckdiagnosepumpe - Signal hoch |
| 0x1444 | P1444 | P1444 Diagnosemodul Tankleckage (DM-TL) Pumpe - Leitungsunterbrechung |
| 0x1445 | P1445 | P1445 Diagnosemodul Tankleckage (DM-TL) Pumpe - Signal niedrig |
| 0x1446 | P1446 | P1446 Diagnosemodul Tankleckage (DM-TL) Pumpe - Signal hoch |
| 0x1447 | P1447 | P1447 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom bei Ventilprüfung zu groß |
| 0x1448 | P1448 | P1448 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom zu klein |
| 0x1449 | P1449 | P1449 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom zu groß |
| 0x1450 | P1450 | P1450 Diagnosemodul Tankleckage (DM-TL) Ventil - Leitungsunterbrechung |
| 0x1451 | P1451 | P1451 Diagnosemodul Tankleckage (DM-TL) Ventil - Signal niedrig |
| 0x1452 | P1452 | P1452 Diagnosemodul Tankleckage (DM-TL) Ventil - Signal hoch |
| 0x1453 | P1453 | P1453 Sekundärluftpumpenrelais - elektrischer Fehler |
| 0x1454 | P1454 | P1454 Sekundärluftpumpe mit Vorwiderstand - elektrischer Fehler |
| 0x1456 | P1456 | P1456 E-Katalysator Heizung Leistungspfad (Bank 1) - Leitungsunterbrechung |
| 0x1457 | P1457 | P1457 E-Katalysator Temperaturfühler Leistungsschalter (Bank 1) - elektrischer Fehler |
| 0x1459 | P1459 | P1459 E-Katalysator Heizung Leistungspfad (Bank 2) - Leitungsunterbrechung |
| 0x1460 | P1460 | P1460 E-Katalysator Temperaturfühler Leistungsschalter (Bank 2) - elektrischer Fehler |
| 0x1461 | P1461 | P1461 E-Katalysator Gatespannung - Signal niedrig |
| 0x1462 | P1462 | P1462 E-Katalysator Steuergerät - interner Prüfsummenfehler/EEPROM |
| 0x1463 | P1463 | P1463 E-Katalysator Batterietemperaturfühler 1 - elektrischer Fehler |
| 0x1464 | P1464 | P1464 E-Katalysator Batterietemperaturfühler 2 - elektrischer Fehler |
| 0x1465 | P1465 | P1465 E-Katalysator Batterietemperaturfühler 1 oder 2 - Plausibilitätsfehler |
| 0x1466 | P1466 | P1466 E-Katalysator Temperaturfühler Leistungsschalter - Plausibilitätsfehler |
| 0x1467 | P1467 | P1467 E-Katalysator Vergleich der Batteriespannungen der Leistungsschalter - Plausibilitätsfehler |
| 0x1468 | P1468 | P1468 E-Katalysator Batterietrennschalter - Plausibilitätsfehler |
| 0x1470 | P1470 | P1470 Leckdiagnosepumpe Ansteuerung - elektrischer Fehler |
| 0x1471 | P1471 | P1471 Leckdiagnosepumpe - Leitungsunterbrechung |
| 0x1472 | P1472 | P1472 Diagnosemodul Tankleckage (DM-TL) Ventil Ansteuerung - elektrischer Fehler |
| 0x1473 | P1473 | P1473 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom Plausibilitätsfehler |
| 0x1474 | P1474 | P1474 Leckdiagnosepumpe Reed Switch - schließt nicht |
| 0x1475 | P1475 | P1475 Leckdiagnosepumpe Reed Switch - nicht geschlossen |
| 0x1476 | P1476 | P1476 Leckdiagnosepumpe - blockierte Leitung (M52 MJ99/00: Leckdiagnosepumpe Reed Switch - Fehlfunktion) |
| 0x1477 | P1477 | P1477 Leckdiagnosepumpe Reed Switch - öffnet nicht |
| 0x1481 | P1481 | P1481 Motorlüfter Relais 1 - Input niedrig |
| 0x1482 | P1482 | P1482 Motorlüfter Relais 1 - Input hoch |
| 0x1483 | P1483 | P1483 Diagnosemodul Tankleckage (DM-TL) Heizung - Input hoch |
| 0x1484 | P1484 | P1484 Motorlüfter Relais 2 - Input niedrig |
| 0x1485 | P1485 | P1485 Motorlüfter Relais 2 - Input hoch |
| 0x1487 | P1487 | P1487 Motorlüfter Relais 3 - Input niedrig |
| 0x1488 | P1488 | P1488 Motorlüfter Relais 3 - Input hoch |
| 0x1490 | P1490 | P1490 Abgastemperaturfühler 1 - elektrischer Fehler |
| 0x1491 | P1491 | P1491 Abgasrückführung (Bank 2) - Durchsatz zu gering |
| 0x1492 | P1492 | P1492 Abgasrückführung (Bank 2) - Durchsatz zu groß |
| 0x1495 | P1495 | P1495 Umgebungsdrucksensor - elektrischer Fehler |
| 0x1497 | P1497 | P1497 Leckluft nach Drosselklappe |
| 0x1498 | P1498 | P1498 Leckluft nach Kompressor |
| 0x1499 | P1499 | P1499 Luftfilter Leckage |
| 0x1500 | P1500 | P1500 Leerlaufsteller - klemmt offen |
| 0x1501 | P1501 | P1501 Leerlaufsteller - klemmt geschlossen |
| 0x1502 | P1502 | P1502 Leerlaufsteller schließende Spule - Signal hoch |
| 0x1503 | P1503 | P1503 Leerlaufsteller schließende Spule - Signal niedrig |
| 0x1504 | P1504 | P1504 Leerlaufsteller schließende Spule - Leitungsunterbrechung |
| 0x1505 | P1505 | P1505 Leerlaufsteller schließende Spule - elektrischer Fehler |
| 0x1506 | P1506 | P1506 Leerlaufsteller öffnende Spule - Signal hoch |
| 0x1507 | P1507 | P1507 Leerlaufsteller öffnende Spule - Signal niedrig |
| 0x1508 | P1508 | P1508 Leerlaufsteller öffnende Spule - Leitungsunterbrechung |
| 0x1509 | P1509 | P1509 Leerlaufsteller öffnende Spule - elektrischer Fehler |
| 0x1510 | P1510 | P1510 Leerlaufsteller - klemmt offen oder geschlossen |
| 0x1511 | P1511 | P1511 DISA (differenzierte Sauganlage) - elektrischer Fehler |
| 0x1512 | P1512 | P1512 DISA (differenzierte Sauganlage) - Signal niedrig |
| 0x1513 | P1513 | P1513 DISA (differenzierte Sauganlage) - Signal hoch |
| 0x1514 | P1514 | P1514 Gas- und Bremspedal - Plausibilitätsfehler |
| 0x1517 | P1517 | P1517 Schlechtwegstreckenerkennung - Radrehzahl kein Signal |
| 0x1518 | P1518 | P1518 Schlechtwegstreckenerkennung - Raddrehzahl zu hoch |
| 0x1519 | P1519 | P1519 Ölzustandssensor Temperaturmessung - Fehlfunktion (M62/M52/S52: Nockenwellenversteller Einlass Bank 1 - Fehlfunktion) |
| 0x1520 | P1520 | P1520 Ölzustandssensor Niveaumessung - Fehlfunktion (M52: Nockenwellenversteller Auslass Bank 1 - Fehlfunktion) |
| 0x1521 | P1521 | P1521 Ölzustandssensor - Kommunikationsfehler |
| 0x1522 | P1522 | P1522 Ölzustandssensor Permeabilitätsmessung - Fehlfunktion (M62: Nockenwellenversteller Einlass Bank 2 - Fehlfunktion; M52: Nockenwellenversteller Einlass - schwergängig oder blockiert) |
| 0x1523 | P1523 | P1523 Nockenwellenversteller Einlass (Bank 1) - Signal niedrig (M52: Nockenwellenversteller Auslass - schwergängig oder blockiert) |
| 0x1524 | P1524 | P1524 Nockenwellenversteller Einlass (Bank 1) - Signal hoch |
| 0x1525 | P1525 | P1525 Nockenwellenversteller Einlass (Bank 1) - Leitungsunterbrechung |
| 0x1526 | P1526 | P1526 Nockenwellenversteller Einlass (Bank 2) - Leitungsunterbrechung |
| 0x1527 | P1527 | P1527 Nockenwellenversteller Einlass (Bank 2) - Signal niedrig |
| 0x1528 | P1528 | P1528 Nockenwellenversteller Einlass (Bank 2) - Signal hoch |
| 0x1529 | P1529 | P1529 Nockenwellenversteller Auslass (Bank 1) - Signal niedrig |
| 0x1530 | P1530 | P1530 Nockenwellenversteller Auslass (Bank 1) - Signal hoch (S54 bis 09/00: Drosselklappen Lageregelung - Regeldifferenz) |
| 0x1531 | P1531 | P1531 Nockenwellenversteller Auslass (Bank 1) - Leitungsunterbrechung |
| 0x1532 | P1532 | P1532 Nockenwellenversteller Auslass (Bank 2) - Leitungsunterbrechung (S54 bis 09/00: Drosselklappen Ansteuerung - Fehlfunktion) |
| 0x1533 | P1533 | P1533 Nockenwellenversteller Auslass (Bank 2) - Signal niedrig (S54 bis 09/00: SG - interner Prozessorfehler) |
| 0x1534 | P1534 | P1534 Nockenwellenversteller Auslass (Bank 2) - Signal hoch |
| 0x1535 | P1535 | P1535 DISA (differenzierte Sauganlage) - Wicklungstemperaturgrenzwert überschritten |
| 0x1536 | P1536 | P1536 DISA (differenzierte Sauganlage) Reglerüberwachung - Regeldifferenz |
| 0x1537 | P1537 | P1537 DISA (differenzierte Sauganlage) - Potentiometerspannung im unteren Diagnosebereich |
| 0x1538 | P1538 | P1538 DISA (differenzierte Sauganlage) - Potentiometerspannung im oberen Diagnosebereich |
| 0x1539 | P1539 | P1539 DISA (differenzierte Sauganlage) - Wicklungstemperaturschwellwert überschritten |
| 0x1540 | P1540 | P1540 Fahrdynamikkontrollschalter - Input hoch |
| 0x1541 | P1541 | P1541 Fahrdynamikkontrollschalter - Input niedrig |
| 0x1542 | P1542 | P1542 Pedalwertgeber - elektrischer Fehler |
| 0x1543 | P1543 | P1543 Drosselklappe 1 Potentiometer 1/2 - Input niedrig |
| 0x1544 | P1544 | P1544 Drosselklappe 1 Potentiometer 1/2 - Input hoch |
| 0x1545 | P1545 | P1545 Drosselklappe 1 Potentiometer 1/2 - Plausibilitätsfehler |
| 0x1550 | P1550 | P1550 Leerlaufsteller schließende Spule - elektrischer Fehler |
| 0x1552 | P1552 | P1552 Nockenwellenversteller Einlass (Bank 1) - Leitungsunterbrechung |
| 0x1555 | P1555 | P1555 Klimakompressor - Signal sporadisch |
| 0x1556 | P1556 | P1556 Klimakompressor - Signal niedrig (S54 bis 09/00: Nockenwellenversteller Einlass (Bank 1) - Leitungsunterbrechung) |
| 0x1557 | P1557 | P1557 Klimakompressor - Signal hoch |
| 0x1558 | P1558 | P1558 Drosselklappe Microchip Controller 1/2 - Fehlfunktion |
| 0x1560 | P1560 | P1560 Nockenwellenversteller Auslass (Bank 1) - Leitungsunterbrechung |
| 0x1563 | P1563 | P1563 Multifunktionslenkrad (MFL) - Wippschalter defekt |
| 0x1564 | P1564 | P1564 Steuergeräteauswahl - Plausibilitätsfehler |
| 0x1565 | P1565 | P1565 Multifunktionslenkrad (MFL) Schnittstelle - Bitfehler oder Tasten '+' und '-' gedrückt (S54 bis 09/00: Nockenwellenversteller Auslass (Bank 1) - Leitungsunterbrechung) |
| 0x1566 | P1566 | P1566 Multifunktionslenkrad (MFL) - Telegrammfrequenz falsch (M62/TU: MFL - Togglebitfehler) |
| 0x1567 | P1567 | P1567 Multifunktionslenkrad (MFL) - Togglebitfehler (M62/TU: MFL -Timeout Telegramm) |
| 0x1568 | P1568 | P1568 Multifunktionslenkrad (MFL) - Timeout Telegramm (M62/TU: MFL - Telegrammfrequenz falsch) |
| 0x1569 | P1569 | P1569 Nockenwellenversteller Einlass (Bank 2) - Leitungsunterbrechung |
| 0x1570 | P1570 | P1570 Steuergerät Sensorversorgung A - Output niedrig |
| 0x1571 | P1571 | P1571 Steuergerät Sensorversorgung A - Output hoch |
| 0x1572 | P1572 | P1572 Steuergerät Sensorversorgung A - Signal rauschend |
| 0x1573 | P1573 | P1573 Steuergerät Sensorversorgung B - Output niedrig (S54/S62: Nockenwellenversteller Einlass (Bank 2) - Signal niedrig) |
| 0x1574 | P1574 | P1574 Steuergerät Sensorversorgung B - Output hoch |
| 0x1575 | P1575 | P1575 Steuergerät Sensorversorgung B - Signal rauschend |
| 0x1577 | P1577 | P1577 Geschwindigkeitsanzeige Kombi - Signal fehlerhaft |
| 0x1578 | P1578 | P1578 Geschwindigkeitsanzeige Kombi - Signal Kombi / ASC nicht kompatibel |
| 0x1580 | P1580 | P1580 Drosselklappe - klemmt mechanisch (M73: Drosselklappe 1 Federtest - Fehlfunktion) |
| 0x1581 | P1581 | P1581 Nockenwellenversteller Auslass (Bank 2) - Leitungsunterbrechung (M73: Drosselklappe 2 Federtest - Fehlfunktion) |
| 0x1585 | P1585 | P1585 Verbrennungsaussetzer entdeckt bei niedrigem Kraftstoffstand |
| 0x1589 | P1589 | P1589 Steuergeräte-Selbsttest, Klopfregelung Testimpuls (Bank 1) |
| 0x1590 | P1590 | P1590 Drosselklappe 2 Potentiometer 1/2 - Input niedrig |
| 0x1591 | P1591 | P1591 Drosselklappe 2 Potentiometer 1/2 - Input hoch |
| 0x1592 | P1592 | P1592 Drosselklappe 2 Potentiometer 1/2 - Plausibilitätsfehler |
| 0x1593 | P1593 | P1593 DISA (differenzierte Sauganlage) - elektrischer Fehler |
| 0x1594 | P1594 | P1594 Nockenwellenversteller Auslass (Bank 2) - Leitungsunterbrechung |
| 0x1595 | P1595 | P1595 Steuergerätekopplung - interner Prüfsummenfehler |
| 0x1596 | P1596 | P1596 Steuergerätekopplung - CAN-Timeout |
| 0x1597 | P1597 | P1597 Steuergeräteauswahl - Entprellfehler |
| 0x1598 | P1598 | P1598 Steuergeräteauswahl Master/Slave - Plausibilitätsfehler |
| 0x1599 | P1599 | P1599 CAN-Timeout Getriebesteuergerät 2 |
| 0x1600 | P1600 | P1600 Steuergerät - externer 'Random Access Memory' (RAM) Fehler |
| 0x1601 | P1601 | P1601 Steuergeräte-Selbsttest, Sicherheitskraftstoffabschaltung (SKA) - Fehlfunktion |
| 0x1602 | P1602 | P1602 Steuergeräte-Selbsttest, Gerät defekt |
| 0x1603 | P1603 | P1603 Steuergeräte-Selbsttest, Momentüberwachung |
| 0x1604 | P1604 | P1604 Steuergeräte-Selbsttest, Drehzahlüberwachung |
| 0x1605 | P1605 | P1605 Sicherheitskonzept Momentbegrenzung Ebene 1 |
| 0x1606 | P1606 | P1606 Fehlerspeicher - Plausibilitätsfehler |
| 0x1607 | P1607 | P1607 CAN-Stand |
| 0x1608 | P1608 | P1608 Serielle Kommunikationsverbindung Steuergerät |
| 0x1609 | P1609 | P1609 Serielle Kommunikationsverbindung EML (elektronische Motorleistungsregelung) |
| 0x1610 | P1610 | P1610 Serielle Kommunikationsverbindung E-Katalysator |
| 0x1611 | P1611 | P1611 Serielle Kommunikationsverbindung Getriebesteuergerät |
| 0x1612 | P1612 | P1612 Serielle Kommunikationsverbindung Kombi |
| 0x1613 | P1613 | P1613 Serielle Kommunikationsverbindung ASC (Automatic Stability Control) |
| 0x1614 | P1614 | P1614 Serielle Kommunikationsverbindung ACC (Adaptive Cruise Control) |
| 0x1615 | P1615 | P1615 Steuergerät Prozessor SPI-Bus - Fehlfunktion |
| 0x1616 | P1616 | P1616 Steuergerät Kodierspeicher - Prüfsummenfehler |
| 0x1617 | P1617 | P1617 Steuergerät H-Brückentreiber |
| 0x1618 | P1618 | P1618 Steuergeräte-Selbsttest, AD-Wandler-Überwachung |
| 0x1619 | P1619 | P1619 Kennfeldkühlung Thermostat Ansteuerung - Signal niedrig |
| 0x161A | P161A | P161A Kraftstoffrücklaufbelüftungsventil - Input hoch |
| 0x161B | P161B | P161B Kraftstoffrücklaufbelüftungsventil - Input niedrig |
| 0x161C | P161C | P161C Kraftstoffrücklaufbelüftungsventil - Leitungsunterbrechung |
| 0x1620 | P1620 | P1620 Kennfeldkühlung Thermostat Ansteuerung - Signal hoch |
| 0x1621 | P1621 | P1621 Kennfeldkühlung Thermostat Ansteuerung - Signal sporadisch |
| 0x1622 | P1622 | P1622 Kennfeldkühlung Thermostat Ansteuerung - elektrischer Fehler |
| 0x1623 | P1623 | P1623 Pedalwertgeber Potentiometerversorgung - Fehlfunktion |
| 0x1624 | P1624 | P1624 Pedalwertgeber Potentiometerversorgung Kanal 1 - elektrischer Fehler (M52: Kühlmittelthermostat (Kühlmitteltemperatur unterhalb Thermostat Regeltemperatur)) |
| 0x1625 | P1625 | P1625 Pedalwertgeber Potentiometerversorgung Kanal 2 - elektrischer Fehler |
| 0x1626 | P1626 | P1626 Generator Lastsensor - Input niedrig |
| 0x1627 | P1627 | P1627 Generator Lastsensor - Input hoch |
| 0x1628 | P1628 | P1628 Drosselklappensteller Federtest - Fehlfunktion beim Öffnen |
| 0x1629 | P1629 | P1629 Drosselklappensteller Federtest - Abbruch, Feder öffnet nicht |
| 0x1631 | P1631 | P1631 Drosselklappensteller Federtest - Fehlfunktion |
| 0x1632 | P1632 | P1632 Drosselklappen-Adaption - Randbedingungen verletzt |
| 0x1633 | P1633 | P1633 Drosselklappen-Adaption - Notluftpunkt nicht adaptiert |
| 0x1634 | P1634 | P1634 Drosselklappen-Adaption - Federtest verfehlt |
| 0x1635 | P1635 | P1635 Drosselklappen-Adaption - unterer mechanischer Anschlag (UMA) nicht adaptiert |
| 0x1636 | P1636 | P1636 Drosselklappen Ansteuerung - Fehlfunktion |
| 0x1637 | P1637 | P1637 Drosselklappen Lageregelung - Regeldifferenz |
| 0x1638 | P1638 | P1638 Drosselklappen Lageregelung - klemmt kurzzeitig |
| 0x1639 | P1639 | P1639 Drosselklappen Lageregelung - klemmt anhaltend |
| 0x1640 | P1640 | P1640 Steuergerät - interner RAM/ROM Fehler |
| 0x1641 | P1641 | P1641 Drosselklappen-Adaption - Abbruch wegen Umweltbedingungen |
| 0x1642 | P1642 | P1642 Drosselklappen-Adaption - Abbruch wegen Umweltgrößen |
| 0x1643 | P1643 | P1643 Drosselklappensteller Startprüfung Verstärkerabgleich - Plausibilitätsfehler |
| 0x1644 | P1644 | P1644 Drosselklappen-Adaption - Abbruch unterer mechanischer Anschlag (UMA) Wiederlernen |
| 0x1645 | P1645 | P1645 Steuergerät - interner 'Random Access Memory' (RAM) Lesefehler |
| 0x1646 | P1646 | P1646 Anlasserrelais 2 Ansteuerung - Signal sporadisch |
| 0x1647 | P1647 | P1647 Anlasserrelais 2 Ansteuerung - Signal niedrig |
| 0x1648 | P1648 | P1648 Anlasserrelais 2 Ansteuerung - Signal hoch |
| 0x1649 | P1649 | P1649 Steuergerät - interner 'Random Access Memory' (RAM) Schreibfehler |
| 0x1650 | P1650 | P1650 Start in laufendem Motor |
| 0x1651 | P1651 | P1651 Malfunction Indicator Lamp (MIL) - Signal niedrig |
| 0x1652 | P1652 | P1652 Malfunction Indicator Lamp (MIL) - Signal hoch |
| 0x1653 | P1653 | P1653 Getriebemoment - Plausibilitätsfehler |
| 0x1654 | P1654 | P1654 CAN-Timeout Message Counter |
| 0x1655 | P1655 | P1655 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage Fehlfunktion |
| 0x1656 | P1656 | P1656 EWS (elektronische Wegfahrsperre) - falscher Code |
| 0x1657 | P1657 | P1657 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage im Flash fehlerhaft |
| 0x1658 | P1658 | P1658 EWS (elektronische Wegfahrsperre) - Wechselcode vorletztes Wort im Flash fehlerhaft |
| 0x1659 | P1659 | P1659 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage im RAM fehlerhaft |
| 0x1660 | P1660 | P1660 EWS (elektronische Wegfahrsperre) - Telegrammfehler |
| 0x1661 | P1661 | P1661 Timeout EWS (elektronische Wegfahrsperre)-Telegramm |
| 0x1662 | P1662 | P1662 EWS (elektronische Wegfahrsperre) - Telegrammparityfehler |
| 0x1663 | P1663 | P1663 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage im EEPROM fehlerhaft |
| 0x1664 | P1664 | P1664 EWS (elektronische Wegfahrsperre) - Schreib-/Lesefehler EEPROM |
| 0x1665 | P1665 | P1665 EWS (elektronische Wegfahrsperre) - Manipulation über Wechselcode |
| 0x1666 | P1666 | P1666 EWS (elektronische Wegfahrsperre) - Manipulation über KWP2000Ü* / Startwert nicht akzeptiert |
| 0x1667 | P1667 | P1667 EWS (elektronische Wegfahrsperre) - noch kein Startwert programmiert |
| 0x1668 | P1668 | P1668 EWS (elektronische Wegfahrsperre) - Startwert zerstört |
| 0x1669 | P1669 | P1669 EWS (elektronische Wegfahrsperre) - Startwertprogrammierung fehlerhaft |
| 0x1670 | P1670 | P1670 Getriebeeingriff - Plausibilitätsfehler |
| 0x1671 | P1671 | P1671 ASC (Automatic Stability Control)-Eingriff mit Zylinderabschaltung - Plausibilitätsfehler |
| 0x1672 | P1672 | P1672 MSR (MotorSchleppmomentRegelung)-Eingriff - Plausibilitätsfehler |
| 0x1673 | P1673 | P1673 ASC (Automatic Stability Control)-Eingriff - Plausibilitätsfehler |
| 0x1674 | P1674 | P1674 ASC (Automatic Stability Control) - keine Aktivität festzustellen |
| 0x1675 | P1675 | P1675 Drosselklappensteller Startprüfung - Neuadaption erforderlich |
| 0x1676 | P1676 | P1676 ACC (Adaptive Cruise Control) Signal - Plausibilitätsfehler |
| 0x1677 | P1677 | P1677 ACC (Adaptive Cruise Control) - keine Aktivität festzustellen |
| 0x1678 | P1678 | P1678 ACC (Adaptive Cruise Control) - keine Reaktion auf ACC Abschaltung |
| 0x1679 | P1679 | P1679 Elektronische Drosselklappenüberwachung Ebene 2/3 Verlustmomentberechung - Fehler |
| 0x1680 | P1680 | P1680 Elektronische Drosselklappenüberwachung Ebene 2/3 AD-Wandler -  Prozesserfehler |
| 0x1681 | P1681 | P1681 Elektronische Drosselklappenüberwachung Ebene 2/3 Drehzahl - Berechnungsfehler |
| 0x1682 | P1682 | P1682 Elektronische Drosselklappenüberwachung Ebene 2/3 Leerlaufdrehzahl 'A' - Berechnungsfehler |
| 0x1683 | P1683 | P1683 Elektronische Drosselklappenüberwachung Ebene 2/3 Leerlaufdrehzahl 'B' - Berechnungsfehler |
| 0x1684 | P1684 | P1684 Elektronische Drosselklappenüberwachung Ebene 2/3 Kupplungsmoment - Min-Fehler |
| 0x1685 | P1685 | P1685 Elektronische Drosselklappenüberwachung Ebene 2/3 Kupplungsmoment - Max-Fehler |
| 0x1686 | P1686 | P1686 Elektronische Drosselklappenüberwachung Ebene 2/3 Pedalwertgeber - Diagnosefehler |
| 0x1687 | P1687 | P1687 Elektronische Drosselklappenüberwachung Ebene 2/3 Drosselklappenpotentiometer - Diagnosefehler |
| 0x1688 | P1688 | P1688 Elektronische Drosselklappenüberwachung Ebene 2/3  Luftmassenberechnung - Fehler |
| 0x1689 | P1689 | P1689 Elektronische Drosselklappenüberwachung Ebene 2/3 Momentberechnung - Fehler |
| 0x1690 | P1690 | P1690 Malfunction Indicator Lamp (MIL) - elektrischer Fehler |
| 0x1691 | P1691 | P1691 Elektronische Drosselklappenüberwachung Ebene 2/3 Motordrehzahlbegrenzung - Fehler |
| 0x1692 | P1692 | P1692 Elektronische Drosselklappenüberwachung Ebene 2/3 Motordrosselklappe und Einspritzabschaltung 'A' |
| 0x1693 | P1693 | P1693 Elektronische Drosselklappenüberwachung Ebene 2/3 Motordrosselklappe und Einspritzabschaltung 'B' |
| 0x1694 | P1694 | P1694 Drosselklappensteller Startprüfung - Federtest und Notluftprüfung verfehlt |
| 0x1695 | P1695 | P1695 Hauptrelais - elektrischer Fehler |
| 0x1696 | P1696 | P1696 Hauptrelais Ansteuerung - Input niedrig |
| 0x1697 | P1697 | P1697 Hauptrelais Ansteuerung - Input hoch |
| 0x1698 | P1698 | P1698 Getriebesteuergerät - Steuerungsfehler |
| 0x1699 | P1699 | P1699 Getriebesteuergerät - Prüfsummenfehler |
| 0x16A0 | P16A0 | P16A0 Steuergerät - interner Prüfsummenfehler in Bootsoftware |
| 0x16A1 | P16A1 | P16A1 Steuergerät - interner Prüfsummenfehler in Applikatonssoftware |
| 0x16A2 | P16A2 | P16A2 Steuergerät - interner Prüfsummenfehler im Datenbereich |
| 0x16A3 | P16A3 | P16A3 Steuergerät - interner 'Non-Volatile Memory' (NVMY) Fehler |
| 0x16A4 | P16A4 | P16A4 Timeout Steuergerät Klopfsensor SPI-Bus |
| 0x16A5 | P16A5 | P16A5 Timeout Steuergerät Mehrfachendstufe SPI-Bus |
| 0x16A6 | P16A6 | P16A6 Steuergeräte-Selbsttest, Geschwindigkeitsreglerüberwachung |
| 0x16A7 | P16A7 | P16A7 Steuergeräte-Selbsttest, Heißfilmluftmassenmesser (HFM)-Überwachung |
| 0x16A8 | P16A8 | P16A8 Steuergeräte-Selbsttest, Drosselklappenstellungsüberwachung |
| 0x16B0 | P16B0 | P16B0 Steuergeräte-Selbsttest, Pedalwertüberwachung |
| 0x16B1 | P16B1 | P16B1 Steuergeräte-Selbsttest, Leerlaufregelsystemüberwachung integrierender Anteil - Plausibilitätsfehler |
| 0x16B2 | P16B2 | P16B2 Steuergeräte-Selbsttest, Leerlaufregelsystemüberwachung PD (Proportional-Differential)-Anteil - Plausibilitätsfehler |
| 0x16B3 | P16B3 | P16B3 Steuergeräte-Selbsttest, MSR (MotorSchleppmomentRegelung)-Überwachung |
| 0x16B4 | P16B4 | P16B4 Steuergeräte-Selbsttest, DCC (Distance Cruise Control)-Überwachung |
| 0x16B5 | P16B5 | P16B5 Steuergeräte-Selbsttest, SSG (sequentielles Schaltgetriebe)-Überwachung |
| 0x16B6 | P16B6 | P16B6 Steuergeräte-Selbsttest, EGS (elektronische Getriebesteuerung)-Überwachung |
| 0x16B7 | P16B7 | P16B7 Steuergeräte-Selbsttest, Kupplungsmomentüberwachung - Maximalwert Plausibilitätsfehler |
| 0x16B8 | P16B8 | P16B8 Steuergeräte-Selbsttest, Kupplungsmomentüberwachung - Minimalwert Plausibilitätsfehler |
| 0x16B9 | P16B9 | P16B9 Steuergeräte-Selbsttest, Verlustmomentüberwachung |
| 0x16C0 | P16C0 | P16C0 Steuergeräte-Selbsttest, Fahrdynamikkontrollschalter-Überwachung |
| 0x16C1 | P16C1 | P16C1 Steuergeräte-Selbsttest, Momentüberwachung - aktuell indizierter Wert Plausibilitätsfehler |
| 0x16C2 | P16C2 | P16C2 Steuergeräte-Selbsttest, Drehzahlbegrenzungsüberwachung |
| 0x16C3 | P16C3 | P16C3 Steuergeräte-Selbsttest, Drehzahlbegrenzung Reset |
| 0x16C4 | P16C4 | P16C4 Schaltphase - Drehmoment Plausibilitätsfehler |
| 0x16C5 | P16C5 | P16C5 Hauptrelais - Schaltverzögerung |
| 0x16C6 | P16C6 | P16C6 CAN-Timeout BSD (Bitserielle Datenschnittstelle) |
| 0x16C7 | P16C7 | P16C7 ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Sperrung wegen unplausibler Werte |
| 0x1700 | P1700 | P1700 Doppelfehler Abtriebsdrehzahl und Turbinendrehzahl |
| 0x1701 | P1701 | P1701 Doppelfehler Positionsinformation CAN / serielle Leitung |
| 0x1702 | P1702 | P1702 Kombination Ersatzfunktion |
| 0x1703 | P1703 | P1703 Getriebewahlschalter - Fehlfunktion |
| 0x1705 | P1705 | P1705 Getriebesteuergerät LED Output - Leitungsunterbrechung |
| 0x1706 | P1706 | P1706 Getriebesteuergerät LED Output - Kurzschluss |
| 0x1707 | P1707 | P1707 EGS (elektronische Getriebesteuerung) Sicherheitskonzept Getriebe - Fehlfunktion |
| 0x1708 | P1708 | P1708 EGS (elektronische Getriebesteuerung) Sicherheitskonzept Kupplung - Fehlfunktion |
| 0x1709 | P1709 | P1709 EGS (elektronische Getriebesteuerung) Sicherheitskonzept - Fehlfunktion |
| 0x1715 | P1715 | P1715 Hydraulikeinheit Drucküberwachung - Fehlfunktion |
| 0x1716 | P1716 | P1716 Hydraulikeinheit Einschalthäufigkeit - Fehlfunktion |
| 0x1717 | P1717 | P1717 Hydraulikeinheit Einschaltdauer - Fehlfunktion |
| 0x1719 | P1719 | P1719 CAN Stand Fehler |
| 0x1720 | P1720 | P1720 CAN-Timeout Steuergerät |
| 0x1721 | P1721 | P1721 CAN-Timeout ASC/DSC (Automatic Stability Control/Dynamic Stability Control) |
| 0x1727 | P1727 | P1727 CAN Motordrehzahl |
| 0x1728 | P1728 | P1728 Motorüberdrehzahl |
| 0x1729 | P1729 | P1729 Motor - hohe Drehungleichförmigkeit |
| 0x1731 | P1731 | P1731 Falsches Übersetzungsverhältnis - 1. Gang manuell |
| 0x1732 | P1732 | P1732 Gangüberwachung 4 bei elektrischem Ersatzprogramm |
| 0x1734 | P1734 | P1734 Elektrischer Drucksteller 2 - elektrischer Fehler |
| 0x1736 | P1736 | P1736 Falsches Übersetzungsverhältnis - 6. Gang |
| 0x1738 | P1738 | P1738 Elektrischer Drucksteller 3 - elektrischer Fehler |
| 0x1739 | P1739 | P1739 Kupplungsmagnet - Kommunikationsfehler |
| 0x1740 | P1740 | P1740 Kupplungsmagnet - Meßbereichs- oder Leistungsproblem |
| 0x1741 | P1741 | P1741 Kupplungsmagnet - Leitungsunterbrechung |
| 0x1742 | P1742 | P1742 Kupplungsmagnet - Kurzschluss |
| 0x1743 | P1743 | P1743 Elektrischer Drucksteller 5 - elektrischer Fehler (M44/M52: Bremsband - elektrischer Fehler) |
| 0x1744 | P1744 | P1744 Elektrischer Drucksteller 1 - elektrischer Fehler |
| 0x1745 | P1745 | P1745 Elektrischer Drucksteller 5 - Fehlfunktion |
| 0x1746 | P1746 | P1746 Getriebesteuergerät - Endstufenfehler |
| 0x1747 | P1747 | P1747 CAN-Bus Überwachung |
| 0x1748 | P1748 | P1748 Getriebesteuergerät Selbsttest - Fehlfunktion |
| 0x1749 | P1749 | P1749 Sekundär-Drucksteller - Kommunikationsfehler (M52: Getriebesteuergerät - interner Fehler) |
| 0x1750 | P1750 | P1750 Sekundär-Drucksteller - Meßbereichs- oder Leistungsproblem (M44/M52/S52/M62/M73: Versorgungsspannung - Input niedrig) |
| 0x1751 | P1751 | P1751 Sekundär-Drucksteller - Leitungsunterbrechung (M52: Versorgungsspannung - Input hoch) |
| 0x1752 | P1752 | P1752 Sekundär-Drucksteller - Kurzschluss |
| 0x1753 | P1753 | P1753 Elektrischer Drucksteller 4 - elektrischer Fehler |
| 0x1755 | P1755 | P1755 Elektrischer Drucksteller 4 - Fehlfunktion |
| 0x1756 | P1756 | P1756 Schaltvorgang X-Position Gang nicht einlegbar |
| 0x1757 | P1757 | P1757 Schaltvorgang Gangspringer |
| 0x1758 | P1758 | P1758 Schaltvorgang Y-Position nicht regelbar |
| 0x1759 | P1759 | P1759 Schaltvorgang X-Position Gang nicht auslegbar |
| 0x1761 | P1761 | P1761 Magnetventil Shiftlock - Fehlfunktion |
| 0x1762 | P1762 | P1762 Magnetventil Shiftlock - Input hoch |
| 0x1763 | P1763 | P1763 Magnetventil Shiftlock - Input niedrig |
| 0x1764 | P1764 | P1764 Magnetventil Shiftlock - Leitungsunterbrechung |
| 0x1765 | P1765 | P1765 CAN Drosselklappe - Fehlfunktion |
| 0x1766 | P1766 | P1766 Doppelfehler Motordrehzahl CAN / direkt verdrahtet |
| 0x1767 | P1767 | P1767 CAN Raddrehzahlen Hinterachse |
| 0x1770 | P1770 | P1770 CAN Momentenschnittstelle - Fehlfunktion |
| 0x1771 | P1771 | P1771 CAN Momentenschnittstelle - Plausibilitätsfehler |
| 0x1780 | P1780 | P1780 CAN Momentreduzierung - Fehlfunktion |
| 0x1782 | P1782 | P1782 CAN Bremssignal |
| 0x1785 | P1785 | P1785 Getriebeübersetzungssteller - Fehlfunktion |
| 0x1786 | P1786 | P1786 Getriebeübersetzungssteller - Meßbereichs- oder Leistungsproblem |
| 0x1787 | P1787 | P1787 Getriebeübersetzungssteller - Leitungsunterbrechung |
| 0x1788 | P1788 | P1788 Getriebeübersetzungssteller - Kurzschluss |
| 0x1789 | P1789 | P1789 Getriebeübersetzungssteller - Kommunikationsfehler |
| 0x1790 | P1790 | P1790 Getriebesteuergerät - interner Prüfsummenfehler/EPROM  |
| 0x1791 | P1791 | P1791 Getriebesteuergerät - interner Prüfsummenfehler/EEPROM |
| 0x1792 | P1792 | P1792 Getriebesteuergerät - interner Watchdogfehler |
| 0x1793 | P1793 | P1793 EGS (elektronische Getriebesteuerung) - Abschaltung wegen Übertemperatur |
| 0x1794 | P1794 | P1794 Getriebesteuergerät - interner Prüfsummenfehler |
| 0x1796 | P1796 | P1796 Getriebesteuergerät - interner Fehler 7 (High Side Treiber) |
| 0x1797 | P1797 | P1797 Getriebesteuergerät - interner 'Random Access Memory' (RAM) Fehler  |
| 0x1798 | P1798 | P1798 Getriebesteuergerät - Schreibfehler EEPROM |
| 0x1801 | P1801 | P1801 Magnetventil 1 - Input niedrig |
| 0x1802 | P1802 | P1802 Magnetventil 2 - Input niedrig |
| 0x1803 | P1803 | P1803 Magnetventil 3 - Input niedrig |
| 0x1804 | P1804 | P1804 Magnetventil 4 - Input niedrig |
| 0x1806 | P1806 | P1806 Magnetventil 1 oder 2 klemmt mechanisch |
| 0x1810 | P1810 | P1810 Eingangsdrehzahlfühler Turbine - Input hoch |
| 0x1811 | P1811 | P1811 Eingangsdrehzahlfühler Turbine - Input niedrig |
| 0x1812 | P1812 | P1812 Abtriebsdrehzahlfühler - Input hoch |
| 0x1813 | P1813 | P1813 Abtriebsdrehzahlfühler - Input niedrig |
| 0x1814 | P1814 | P1814 Abtriebsdrehzahlsensor - Gradient zu hoch |
| 0x1815 | P1815 | P1815 Getriebestufenschalter am Lenkrad Taste '+' - Input niedrig |
| 0x1816 | P1816 | P1816 Getriebestufenschalter am Lenkrad Taste '-' - Input niedrig |
| 0x1817 | P1817 | P1817 Wählhebel GSL0 Leitung - Input hoch |
| 0x1818 | P1818 | P1818 Wählhebel GSL0 Leitung - Input niedrig |
| 0x1819 | P1819 | P1819 Wählhebel GSL0 Leitung - Plausibilitätsfehler |
| 0x1820 | P1820 | P1820 Wählhebel GSL1 Leitung - Input hoch |
| 0x1821 | P1821 | P1821 Wählhebel GSL1 Leitung - Input niedrig |
| 0x1822 | P1822 | P1822 Wählhebel GSL1 Leitung - Plausibilitätsfehler |
| 0x1823 | P1823 | P1823 Wählhebel Digitalleitung - Plausibilitätsfehler |
| 0x1825 | P1825 | P1825 Shiftlock - Fehlfunktion |
| 0x1826 | P1826 | P1826 Shiftlock Relais (CVT) - Input niedrig |
| 0x1827 | P1827 | P1827 Shiftlock Relais (CVT) - Input hoch |
| 0x1830 | P1830 | P1830 Drucksteller - Stromfehler in P/R/N |
| 0x1831 | P1831 | P1831 Elektrischer Drucksteller 1 - Input hoch |
| 0x1832 | P1832 | P1832 Elektrischer Drucksteller 2 - Input hoch |
| 0x1833 | P1833 | P1833 Elektrischer Drucksteller 3 - Input hoch |
| 0x1834 | P1834 | P1834 Elektrischer Drucksteller 4 - Input hoch |
| 0x1835 | P1835 | P1835 Elektrischer Drucksteller 5 - Input hoch |
| 0x1836 | P1836 | P1836 Wandlerüberbrückungskupplung - Input hoch |
| 0x1841 | P1841 | P1841 Elektrischer Drucksteller 1 - Input niedrig |
| 0x1842 | P1842 | P1842 Elektrischer Drucksteller 2 - Input niedrig |
| 0x1843 | P1843 | P1843 Elektrischer Drucksteller 3 - Input niedrig |
| 0x1844 | P1844 | P1844 Elektrischer Drucksteller 4 - Input niedrig |
| 0x1845 | P1845 | P1845 Elektrischer Drucksteller 5 - Input niedrig |
| 0x1846 | P1846 | P1846 Wandlerüberbrückungskupplung - Input niedrig |
| 0x1848 | P1848 | P1848 Getriebepositionssensor - Fehlfunktion |
| 0x1850 | P1850 | P1850 Wählwinkel Sensor - Input hoch |
| 0x1851 | P1851 | P1851 Wählwinkel Sensor - Input niedrig |
| 0x1852 | P1852 | P1852 Wählwinkel Sensor - Plausibilitätsfehler |
| 0x1853 | P1853 | P1853 Kupplungsweg Sensor - Input hoch |
| 0x1854 | P1854 | P1854 Kupplungsweg Sensor - Input niedrig |
| 0x1855 | P1855 | P1855 Kupplungsweg Sensor - Plausibilitätsfehler |
| 0x1856 | P1856 | P1856 Hydraulikdrucksensor - Input hoch |
| 0x1857 | P1857 | P1857 Hydraulikdrucksensor - Input niedrig |
| 0x1858 | P1858 | P1858 Hydraulikdrucksensor - Plausibilitätsfehler |
| 0x1859 | P1859 | P1859 Kupplungsdrehzahl Sensor - Plausibilitätsfehler |
| 0x1860 | P1860 | P1860 Wählhebel Hallsensor Fehler 1 |
| 0x1861 | P1861 | P1861 Schaltvorgang 2./1. Gang - Fehlfunktion |
| 0x1862 | P1862 | P1862 Schaltvorgang 3./2. Gang - Fehlfunktion |
| 0x1863 | P1863 | P1863 Schaltvorgang 4./3. Gang - Fehlfunktion |
| 0x1864 | P1864 | P1864 Schaltvorgang 5./4. Gang - Fehlfunktion |
| 0x1865 | P1865 | P1865 Schaltvorgang 6./5. Gang - Fehlfunktion |
| 0x1866 | P1866 | P1866 Wählhebel GSL2 Leitung - Input hoch |
| 0x1867 | P1867 | P1867 Wählhebel GSL2 Leitung - Input niedrig |
| 0x1868 | P1868 | P1868 Wählhebel GSL2 Leitung - Plausibilität |
| 0x1869 | P1869 | P1869 Wählhebel GSL3 Leitung - Input hoch |
| 0x1870 | P1870 | P1870 Wählhebel GSL3 Leitung - Input niedrig |
| 0x1871 | P1871 | P1871 Schaltvorgang 2./1. Gang - Input hoch |
| 0x1872 | P1872 | P1872 Schaltvorgang 3./2. Gang - Input hoch |
| 0x1873 | P1873 | P1873 Schaltvorgang 4./3. Gang - Input hoch |
| 0x1874 | P1874 | P1874 Schaltvorgang 5./4. Gang - Input hoch |
| 0x1875 | P1875 | P1875 Schaltvorgang 6./5. Gang - Input hoch |
| 0x1876 | P1876 | P1876 Wählhebel GSL3 Leitung - Plausibilität |
| 0x1877 | P1877 | P1877 Wählhebel GSL4 Leitung - Input hoch |
| 0x1878 | P1878 | P1878 Wählhebel GSL4 Leitung - Input niedrig |
| 0x1879 | P1879 | P1879 Wählhebel GSL4 Leitung - Plausibilität |
| 0x1881 | P1881 | P1881 Schaltvorgang 1./2. Gang - Input hoch |
| 0x1882 | P1882 | P1882 Schaltvorgang 2./3. Gang - Input hoch |
| 0x1883 | P1883 | P1883 Schaltvorgang 3./4. Gang - Input hoch |
| 0x1884 | P1884 | P1884 Schaltvorgang 4./5. Gang - Input hoch |
| 0x1885 | P1885 | P1885 Schaltvorgang 5./6. Gang -Input hoch |
| 0x1886 | P1886 | P1886 Schaltvorgang 5./6. Gang - Fehlfunktion |
| 0x1887 | P1887 | P1887 Hydraulikpumpe - Fehlfunktion |
| 0x1888 | P1888 | P1888 CAN-Timeout Kombi bei Betätigung Parksperren-Notentriegelung |
| 0x1889 | P1889 | P1889 Versorgungsspannung - elektrischer Fehler |
| 0x1890 | P1890 | P1890 Versorgungsspannung - Fehlfunktion |
| 0x1891 | P1891 | P1891 Versorgungsspannung - Input hoch |
| 0x1892 | P1892 | P1892 Versorgungsspannung - Input niedrig |
| 0x1893 | P1893 | P1893 Versorgungsspannung Elektrischer Drucksteller/Magnetventil - Input hoch |
| 0x1894 | P1894 | P1894 Versorgungsspannung Elektrischer Drucksteller/Magnetventil - Input niedrig |
| 0x1895 | P1895 | P1895 Versorgungsspannung Elektrischer Drucksteller/Magnetventil - kein Signal |
| 0x1896 | P1896 | P1896 Versorgungsspannung Elektrischer Drucksteller/Magnetventil - Fehlfunktion |
| 0x1897 | P1897 | P1897 Versorgungsspannung Sensoren - Input hoch |
| 0x1898 | P1898 | P1898 Versorgungsspannung Sensoren - Input niedrig |
| 0x2000 | P2000 | P2000 NOx-Speicher (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x2001 | P2001 | P2001 NOx-Speicher (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x2002 | P2002 | P2002 Partikelfilter (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x2003 | P2003 | P2003 Partikelfilter (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x2088 | P2088 | P2088 Nockenwellenversteller Einlass (Bank 1) - Input niedrig |
| 0x2089 | P2089 | P2089 Nockenwellenversteller Einlass (Bank 1) - Input hoch |
| 0x2090 | P2090 | P2090 Nockenwellenversteller Auslass (Bank 1) - Input niedrig |
| 0x2091 | P2091 | P2091 Nockenwellenversteller Auslass (Bank 1) - Input hoch |
| 0x2092 | P2092 | P2092 Nockenwellenversteller Einlass (Bank 2) - Input niedrig |
| 0x2093 | P2093 | P2093 Nockenwellenversteller Einlass (Bank 2) - Input hoch |
| 0x2094 | P2094 | P2094 Nockenwellenversteller Auslass (Bank 2) - Input niedrig |
| 0x2095 | P2095 | P2095 Nockenwellenversteller Auslass (Bank 2) - Input hoch |
| 0x2096 | P2096 | P2096 Gemischfeinregelung (Bank 1, nach Katalysator) - System zu mager |
| 0x2097 | P2097 | P2097 Gemischfeinregelung (Bank 1, nach Katalysator) - System zu fett |
| 0x2098 | P2098 | P2098 Gemischfeinregelung (Bank 2, nach Katalysator) - System zu mager |
| 0x2099 | P2099 | P2099 Gemischfeinregelung (Bank 2, nach Katalysator) - System zu fett |
| 0x2120 | P2120 | P2120 Pedalwertgeber 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2121 | P2121 | P2121 Pedalwertgeber 1 - Meßbereichs- oder Leistungsproblem |
| 0x2122 | P2122 | P2122 Pedalwertgeber 1 - Input niedrig |
| 0x2123 | P2123 | P2123 Pedalwertgeber 1 - Input hoch |
| 0x2124 | P2124 | P2124 Pedalwertgeber 1 - Input sporadisch |
| 0x2125 | P2125 | P2125 Pedalwertgeber 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2126 | P2126 | P2126 Pedalwertgeber 2 - Meßbereichs- oder Leistungsproblem |
| 0x2127 | P2127 | P2127 Pedalwertgeber 2 - Input niedrig |
| 0x2128 | P2128 | P2128 Pedalwertgeber 2 - Input hoch |
| 0x2129 | P2129 | P2129 Pedalwertgeber 2 - Input sporadisch |
| 0x2130 | P2130 | P2130 Pedalwertgeber 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2131 | P2131 | P2131 Pedalwertgeber 3 - Meßbereichs- oder Leistungsproblem |
| 0x2132 | P2132 | P2132 Pedalwertgeber 3 - Input niedrig |
| 0x2133 | P2133 | P2133 Pedalwertgeber 3 - Input hoch |
| 0x2134 | P2134 | P2134 Pedalwertgeber 3 - Input sporadisch |
| 0x2135 | P2135 | P2135 Drosselklappenpotentiometer 1/2 Spannung - Korrelationsfehler |
| 0x2136 | P2136 | P2136 Drosselklappenpotentiometer 1/3 Spannung - Korrelationsfehler |
| 0x2137 | P2137 | P2137 Drosselklappenpotentiometer 2/3 Spannung - Korrelationsfehler |
| 0x2138 | P2138 | P2138 Pedalwertgeber 1/2 Spannung - Korrelationsfehler |
| 0x2139 | P2139 | P2139 Pedalwertgeber 1/3 Spannung - Korrelationsfehler |
| 0x2140 | P2140 | P2140 Pedalwertgeber 2/3 Spannung - Korrelationsfehler |
| 0x2158 | P2158 | P2158 Fahrzeuggeschwindigkeitssensor 2 - Fehlfunktion |
| 0x2159 | P2159 | P2159 Fahrzeuggeschwindigkeitssensor 2 - Meßbereichs- oder Leistungsproblem |
| 0x2160 | P2160 | P2160 Fahrzeuggeschwindigkeitssensor 2 - Input niedrig |
| 0x2161 | P2161 | P2161 Fahrzeuggeschwindigkeitssensor 2 - sporadisch/unregelmäßig/zu hoch |
| 0x2162 | P2162 | P2162 Fahrzeuggeschwindigkeitssensor 1/2 - Korrelationsfehler |
| 0x2177 | P2177 | P2177 Gemischregelung in Teillast (Bank 1) - Gemisch zu mager |
| 0x2178 | P2178 | P2178 Gemischregelung in Teillast (Bank 1) - Gemisch zu fett |
| 0x2179 | P2179 | P2179 Gemischregelung in Teillast (Bank 2) - Gemisch zu mager |
| 0x2180 | P2180 | P2180 Gemischregelung in Teillast (Bank 2) - Gemisch zu fett |
| 0x2187 | P2187 | P2187 Gemischregelung im Leerlauf (Bank 1) - Gemisch zu mager |
| 0x2188 | P2188 | P2188 Gemischregelung im Leerlauf (Bank 1) - Gemisch zu fett |
| 0x2189 | P2189 | P2189 Gemischregelung im Leerlauf (Bank 2) - Gemisch zu mager |
| 0x2190 | P2190 | P2190 Gemischregelung im Leerlauf (Bank 2) - Gemisch zu fett |
| 0x2191 | P2191 | P2191 Gemischregelung in Volllast (Bank 1) - Gemisch zu mager |
| 0x2192 | P2192 | P2192 Gemischregelung in Volllast (Bank 1) - Gemisch zu fett |
| 0x2193 | P2193 | P2193 Gemischregelung in Volllast (Bank 2) - Gemisch zu mager |
| 0x2194 | P2194 | P2194 Gemischregelung in Volllast (Bank 2) - Gemisch zu fett |
| 0x2195 | P2195 | P2195 Lambdasonde (Bank 1, vor Katalysator) - Signal festliegend auf Mager |
| 0x2196 | P2196 | P2196 Lambdasonde (Bank 1, vor Katalysator) - Signal festliegend auf Fett |
| 0x2197 | P2197 | P2197 Lambdasonde (Bank 2, vor Katalysator) - Signal festliegend auf Mager |
| 0x2198 | P2198 | P2198 Lambdasonde (Bank 2, vor Katalysator) - Signal festliegend auf Fett |
| 0x2199 | P2199 | P2199 Ansauglufttemperaturfühler 1/2 - Korrelationsfehler |
| 0x2200 | P2200 | P2200 NOx Sensor (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2201 | P2201 | P2201 NOx Sensor (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x2202 | P2202 | P2202 NOx Sensor (Bank 1) - Input niedrig |
| 0x2203 | P2203 | P2203 NOx Sensor (Bank 1) - Input hoch |
| 0x2204 | P2204 | P2204 NOx Sensor (Bank 1) - Input sporadisch |
| 0x2205 | P2205 | P2205 NOx Sensor Heizungsschaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2206 | P2206 | P2206 NOx Sensor Heizungsschaltkreis (Bank 1) - Input niedrig |
| 0x2207 | P2207 | P2207 NOx Sensor Heizungsschaltkreis (Bank 1) - Input hoch |
| 0x2213 | P2213 | P2213 NOx Sensor (Bank 2) - Fehlfunktion |
| 0x2214 | P2214 | P2214 NOx Sensor (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x2215 | P2215 | P2215 NOx Sensor (Bank 2) - Input niedrig |
| 0x2216 | P2216 | P2216 NOx Sensor (Bank 2) - Input hoch |
| 0x2217 | P2217 | P2217 NOx Sensor (Bank 2) - Input sporadisch |
| 0x2218 | P2218 | P2218 NOx Sensor Heizungsschaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2219 | P2219 | P2219 NOx Sensor Heizungsschaltkreis (Bank 2) - Input niedrig |
| 0x2220 | P2220 | P2220 NOx Sensor Heizungsschaltkreis (Bank 2) - Input hoch |
| 0x2226 | P2226 | P2226 Umgebungsdruckschaltkreis - Fehlfunktion |
| 0x2227 | P2227 | P2227 Umgebungsdruckschaltkreis - Leistungsproblem |
| 0x2228 | P2228 | P2228 Umgebungsdruckschaltkreis - Input niedrig |
| 0x2229 | P2229 | P2229 Umgebungsdruckschaltkreis - Input hoch |
| 0x2230 | P2230 | P2230 Umgebungsdruckschaltkreis - Input sporadisch |
| 0x2231 | P2231 | P2231 Lambdasonde (Bank 1, vor Katalysator) - Heizereinkopplung auf Signalpfad  |
| 0x2232 | P2232 | P2232 Lambdasonde (Bank 1, nach Katalysator) - Heizereinkopplung auf Signalpfad  |
| 0x2234 | P2234 | P2234 Lambdasonde (Bank 2, vor Katalysator) - Heizereinkopplung auf Signalpfad  |
| 0x2235 | P2235 | P2235 Lambdasonde (Bank 2, nach Katalysator) Heizereinkopplung auf Signalpfad  |
| 0x2237 | P2237 | P2237 Lambdasonde Pumpstromleitung (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2238 | P2238 | P2238 Lambdasonde Pumpstromleitung (Bank 1, vor Katalysator) - Input niedrig |
| 0x2239 | P2239 | P2239 Lambdasonde Pumpstromleitung (Bank 1, vor Katalysator) - Input hoch |
| 0x2240 | P2240 | P2240 Lambdasonde Pumpstromleitung (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2241 | P2241 | P2241 Lambdasonde Pumpstromleitung (Bank 2, vor Katalysator) - Input niedrig |
| 0x2242 | P2242 | P2242 Lambdasonde Pumpstromleitung (Bank 2, vor Katalysator) - Input hoch |
| 0x2243 | P2243 | P2243 Lambdasonde Nernstleitung (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2244 | P2244 | P2244 Lambdasonde Nernstleitung (Bank 1, vor Katalysator) - Leistungsproblem |
| 0x2245 | P2245 | P2245 Lambdasonde Nernstleitung (Bank 1, vor Katalysator) - Input niedrig |
| 0x2246 | P2246 | P2246 Lambdasonde Nernstleitung (Bank 1, vor Katalysator) - Input hoch |
| 0x2247 | P2247 | P2247 Lambdasonde Nernstleitung (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2248 | P2248 | P2248 Lambdasonde Nernstleitung (Bank 2, vor Katalysator) - Leistungsproblem |
| 0x2249 | P2249 | P2249 Lambdasonde Nernstleitung (Bank 2, vor Katalysator) - Input niedrig |
| 0x2250 | P2250 | P2250 Lambdasonde Nernstleitung (Bank 2, vor Katalysator) - Input hoch |
| 0x2251 | P2251 | P2251 Lambdasonde virtuelle Masse (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2252 | P2252 | P2252 Lambdasonde virtuelle Masse (Bank 1, vor Katalysator) - Input niedrig |
| 0x2253 | P2253 | P2253 Lambdasonde virtuelle Masse (Bank 1, vor Katalysator) - Input hoch |
| 0x2254 | P2254 | P2254 Lambdasonde virtuelle Masse (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2255 | P2255 | P2255 Lambdasonde virtuelle Masse (Bank 2, vor Katalysator) - Input niedrig |
| 0x2256 | P2256 | P2256 Lambdasonde virtuelle Masse (Bank 2, vor Katalysator) - Input hoch |
| 0x2270 | P2270 | P2270 Lambdasonde (Bank 1, nach Katalysator) - Signal festliegend auf Mager |
| 0x2271 | P2271 | P2271 Lambdasonde (Bank 1, nach Katalysator) - Signal festliegend auf Fett |
| 0x2272 | P2272 | P2272 Lambdasonde (Bank 2, nach Katalysator) - Signal festliegend auf Mager |
| 0x2273 | P2273 | P2273 Lambdasonde (Bank 2, nach Katalysator) - Signal festliegend auf Fett |
| 0x2297 | P2297 | P2297 Lambdasonde (Bank 1, vor Katalysator) - Spannungswert außerhalb Gültigkeitsbereich bei Schubabschaltung) |
| 0x2298 | P2298 | P2298 Lambdasonde (Bank 2, vor Katalysator) - Spannungswert außerhalb Gültigkeitsbereich bei Schubabschaltung) |
| 0x2299 | P2299 | P2299 Gas- und Bremspedalstellung - Kompatibilitätsfehler |
| 0x2300 | P2300 | P2300 Zündspule 1, Primärkreis - Input niedrig |
| 0x2301 | P2301 | P2301 Zündspule 1, Primärkreis - Input hoch |
| 0x2303 | P2303 | P2303 Zündspule 2, Primärkreis - Input niedrig |
| 0x2304 | P2304 | P2304 Zündspule 2, Primärkreis - Input hoch |
| 0x2400 | P2400 | P2400 Tankentlüftungssystem, Leckdiagnosepumpe - Fehlfunktion oder Leitungsunterbrechung |
| 0x2401 | P2401 | P2401 Tankentlüftungssystem, Leckdiagnosepumpe - Input niedrig |
| 0x2402 | P2402 | P2402 Tankentlüftungssystem, Leckdiagnosepumpe - Input hoch |
| 0x2414 | P2414 | P2414 Lambdasonde (Bank 1, vor Katalysator) - nicht angesteckt |
| 0x2415 | P2415 | P2415 Lambdasonde (Bank 2, vor Katalysator) - nicht angesteckt |
| 0x2418 | P2418 | P2418 Tankentlüftungssystem, Umschaltventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x2419 | P2419 | P2419 Tankentlüftungssystem, Umschaltventil - Input niedrig |
| 0x2420 | P2420 | P2420 Tankentlüftungssystem, Umschaltventil - Input hoch |
| 0x2423 | P2423 | P2423 HC-Speicherung Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x2424 | P2424 | P2424 HC-Speicherung Katalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x2430 | P2430 | P2430 Luftmassenmesser (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2431 | P2431 | P2431 Luftmassenmesser (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x2432 | P2432 | P2432 Luftmassenmesser (Bank 1) - Input niedrig |
| 0x2433 | P2433 | P2433 Luftmassenmesser (Bank 1) - Input hoch |
| 0x2434 | P2434 | P2434 Luftmassenmesser (Bank 1) - Input sporadisch/unregelmäßig |
| 0x2435 | P2435 | P2435 Luftmassenmesser (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2436 | P2436 | P2436 Luftmassenmesser (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x2437 | P2437 | P2437 Luftmassenmesser (Bank 2) - Input niedrig |
| 0x2438 | P2438 | P2438 Luftmassenmesser (Bank 2) - Input hoch |
| 0x2439 | P2439 | P2439 Luftmassenmesser (Bank 2) - Input sporadisch/unregelmäßig |
| 0x2440 | P2440 | P2440 Sekundärluftventil (Bank 1) - klemmt offen |
| 0x2441 | P2441 | P2441 Sekundärluftventil (Bank 1) - klemmt geschlossen |
| 0x2442 | P2442 | P2442 Sekundärluftventil (Bank 2) - klemmt offen |
| 0x2443 | P2443 | P2443 Sekundärluftventil (Bank 2) - klemmt geschlossen |
| 0x2444 | P2444 | P2444 Sekundärluftpumpe (Bank 1) - klemmt geschlossen |
| 0x2445 | P2445 | P2445 Sekundärluftpumpe (Bank 1) - klemmt offen |
| 0x2446 | P2446 | P2446 Sekundärluftpumpe (Bank 2) - klemmt geschlossen |
| 0x2447 | P2447 | P2447 Sekundärluftpumpe (Bank 2) - klemmt offen |
| 0x2448 | P2448 | P2448 Sekundärluftsystem (Bank 1) - hoher Durchsatz |
| 0x2449 | P2449 | P2449 Sekundärluftsystem (Bank 2) - hoher Durchsatz |
| 0x2577 | P2577 | P2577 Direkte Ozon-Reduzierung Katalysator - Wirkungsgrad unter Schwellwert |
| 0x2626 | P2626 | P2626 Lambdasonde Pumpstrom-Abgleichleitung (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2627 | P2627 | P2627 Lambdasonde Pumpstrom-Abgleichleitung (Bank 1, vor Katalysator) - Input niedrig |
| 0x2628 | P2628 | P2628 Lambdasonde Pumpstrom-Abgleichleitung (Bank 1, vor Katalysator) - Input hoch |
| 0x2629 | P2629 | P2629 Lambdasonde Pumpstrom-Abgleichleitung (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2630 | P2630 | P2630 Lambdasonde Pumpstrom-Abgleichleitung (Bank 2, vor Katalysator) - Input niedrig |
| 0x2631 | P2631 | P2631 Lambdasonde Pumpstrom-Abgleichleitung (Bank 2, vor Katalysator) - Input hoch |
| 0x2706 | P2706 | P2706 Magnetventil 6 - Fehlfunktion |
| 0x2707 | P2707 | P2707 Magnetventil 6 - Leistungsproblem oder klemmt offen |
| 0x2708 | P2708 | P2708 Magnetventil 6 - klemmt geschlossen |
| 0x2709 | P2709 | P2709 Magnetventil 6 - elektrischer Fehler |
| 0x2710 | P2710 | P2710 Magnetventil 6 - Input sporadisch |
| 0x2713 | P2713 | P2713 Elektrischer Drucksteller 4 - Fehlfunktion |
| 0x2714 | P2714 | P2714 Elektrischer Drucksteller 4 - Leistungsproblem oder klemmt offen |
| 0x2715 | P2715 | P2715 Elektrischer Drucksteller 4 - klemmt geschlossen |
| 0x2716 | P2716 | P2716 Elektrischer Drucksteller 4 - elektrischer Fehler |
| 0x2717 | P2717 | P2717 Elektrischer Drucksteller 4 - Input sporadisch |
| 0x2718 | P2718 | P2718 Elektrischer Drucksteller 4 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2719 | P2719 | P2719 Elektrischer Drucksteller 4 - Meßbereichs- oder Leistungsproblem |
| 0x2720 | P2720 | P2720 Elektrischer Drucksteller 4 - Input niedrig |
| 0x2721 | P2721 | P2721 Elektrischer Drucksteller 4 - Input hoch |
| 0x2722 | P2722 | P2722 Elektrischer Drucksteller 5 - Fehlfunktion |
| 0x2723 | P2723 | P2723 Elektrischer Drucksteller 5 - Leistungsproblem oder klemmt offen |
| 0x2724 | P2724 | P2724 Elektrischer Drucksteller 5 - klemmt geschlossen |
| 0x2725 | P2725 | P2725 Elektrischer Drucksteller 5 - elektrischer Fehler  |
| 0x2726 | P2726 | P2726 Elektrischer Drucksteller 5 - Input sporadisch |
| 0x2727 | P2727 | P2727 Elektrischer Drucksteller 5 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2728 | P2728 | P2728 Elektrischer Drucksteller 5 - Meßbereichs- oder Leistungsproblem |
| 0x2729 | P2729 | P2729 Elektrischer Drucksteller 5 - Input niedrig |
| 0x2730 | P2730 | P2730 Elektrischer Drucksteller 5 - Input hoch |
| 0x2731 | P2731 | P2731 Elektrischer Drucksteller 6 - Fehlfunktion |
| 0x2732 | P2732 | P2732 Elektrischer Drucksteller 6 - Leistungsproblem oder klemmt offen |
| 0x2733 | P2733 | P2733 Elektrischer Drucksteller 6 - klemmt geschlossen |
| 0x2734 | P2734 | P2734 Elektrischer Drucksteller 6 - elektrischer Fehler |
| 0x2735 | P2735 | P2735 Elektrischer Drucksteller 6 - Input sporadisch |
| 0x2736 | P2736 | P2736 Elektrischer Drucksteller 6 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2737 | P2737 | P2737 Elektrischer Drucksteller 6 - Meßbereichs- oder Leistungsproblem |
| 0x2738 | P2738 | P2738 Elektrischer Drucksteller 6 - Input niedrig |
| 0x2739 | P2739 | P2739 Elektrischer Drucksteller 6 - Input hoch |
| 0x2740 | P2740 | P2740 Getriebeöltemperaturfühler 2 - Fehlfunktion |
| 0x2741 | P2741 | P2741 Getriebeöltemperaturfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x2742 | P2742 | P2742 Getriebeöltemperaturfühler 2 - Input niedrig |
| 0x2743 | P2743 | P2743 Getriebeöltemperaturfühler 2 - Input hoch |
| 0x2744 | P2744 | P2744 Getriebeöltemperaturfühler 2 - Input sporadisch |
| 0x2745 | P2745 | P2745 Zwischenwelle Drehzahlfühler 2 - Fehlfunktion |
| 0x2746 | P2746 | P2746 Zwischenwelle Drehzahlfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x2747 | P2747 | P2747 Zwischenwelle Drehzahlfühler 2 - kein Signal |
| 0x2748 | P2748 | P2748 Zwischenwelle Drehzahlfühler 2 - Input sporadisch |
| 0x2749 | P2749 | P2749 Zwischenwelle Drehzahlfühler 3 - Fehlfunktion |
| 0x2750 | P2750 | P2750 Zwischenwelle Drehzahlfühler 3 - Meßbereichs- oder Leistungsproblem |
| 0x2751 | P2751 | P2751 Zwischenwelle Drehzahlfühler 3 - kein Signal |
| 0x2752 | P2752 | P2752 Zwischenwelle Drehzahlfühler 3 - Input sporadisch |
| 0x2753 | P2753 | P2753 Getriebeölkühler - Fehlfunktion oder Leitungsunterbrechung |
| 0x2754 | P2754 | P2754 Getriebeölkühler - Input niedrig |
| 0x2755 | P2755 | P2755 Getriebeölkühler - Input hoch |
| 0x2756 | P2756 | P2756 Wandlerüberbrückungskupplung elektrischer Drucksteller - Fehlfunktion |
| 0x2757 | P2757 | P2757 Wandlerüberbrückungskupplung elektrischer Drucksteller - Leistungsproblem oder klemmt offen |
| 0x2758 | P2758 | P2758 Wandlerüberbrückungskupplung elektrischer Drucksteller - klemmt geschlossen |
| 0x2759 | P2759 | P2759 Wandlerüberbrückungskupplung elektrischer Drucksteller - elektrischer Fehler |
| 0x2760 | P2760 | P2760 Wandlerüberbrückungskupplung elektrischer Drucksteller - Input sporadisch |
| 0x2761 | P2761 | P2761 Wandlerüberbrückungskupplung elektrischer Drucksteller - Fehlfunktion oder Leitungsunterbrechung |
| 0x2762 | P2762 | P2762 Wandlerüberbrückungskupplung elektrischer Drucksteller - Meßbereichs- oder Leistungsproblem |
| 0x2763 | P2763 | P2763 Wandlerüberbrückungskupplung elektrischer Drucksteller - Input hoch |
| 0x2764 | P2764 | P2764 Wandlerüberbrückungskupplung elektrischer Drucksteller - Input niedrig |
| 0x2765 | P2765 | P2765 Eingangsdrehzahlfühler 2 Turbine - Fehlfunktion |
| 0x2766 | P2766 | P2766 Eingangsdrehzahlfühler 2 Turbine - Meßbereichs- oder Leistungsproblem |
| 0x2767 | P2767 | P2767 Eingangsdrehzahlfühler 2 Turbine - kein Signal |
| 0x2768 | P2768 | P2768 Eingangsdrehzahlfühler 2 Turbine - Input sporadisch |
| 0x2769 | P2769 | P2769 Wandlerüberbrückungskupplung - Input niedrig |
| 0x2770 | P2770 | P2770 Wandlerüberbrückungskupplung - Input hoch |
| 0x2783 | P2783 | P2783 Wandler - Temperatur zu hoch |
| 0x2784 | P2784 | P2784 Eingangsdrehzahlfühler 1/2 Turbine - Korrelationsfehler |
| 0x2787 | P2787 | P2787 Kupplung - Temperatur zu hoch |
| 0x2800 | P2800 | P2800 Getriebepositionssensor 2 (PRNDL) - Fehlfunktion |
| 0x2801 | P2801 | P2801 Getriebepositionssensor 2- Meßbereichs- oder Leistungsproblem |
| 0x2802 | P2802 | P2802 Getriebepositionssensor 2 - Input niedrig |
| 0x2803 | P2803 | P2803 Getriebepositionssensor 2 - Input hoch |
| 0x2804 | P2804 | P2804 Getriebepositionssensor 1 - Input sporadisch |
| 0x2805 | P2805 | P2805 Getriebepositionssensor 1/2 - Korrelationsfehler |
| 0x2806 | P2806 | P2806 Getriebepositionssensor - mechanisch nicht ausgerichtet |
| 0x3000 | P3000 | P3000 Kraftstoffeinspritzleiste Drucksensor - Offset Maximum überschritten |
| 0x3001 | P3001 | P3001 Kraftstoffeinspritzleiste Drucksensor - Offset Minimum unterschritten |
| 0x3002 | P3002 | P3002 Kraftstoffeinspritzdruck mengengeregelt - Druck zu niedrig |
| 0x3003 | P3003 | P3003 Kraftstoffeinspritzdruck mengengeregelt - Druck zu hoch |
| 0x3004 | P3004 | P3004 Kraftstoffeinspritzdruck mengengeregelt - Maximaldruck überschritten |
| 0x3005 | P3005 | P3005 Kraftstoffeinspritzdruck druckgeregelt - Druck zu niedrig |
| 0x3006 | P3006 | P3006 Kraftstoffeinspritzdruck druckgeregelt - Druck zu hoch |
| 0x3007 | P3007 | P3007 Kraftstoffeinspritzdruck druckgeregelt - Maximaldruck überschritten |
| 0x3008 | P3008 | P3008 Lambdasonde (Bank 1, vor Katalysator) - Input niedrig nach Kaltstart |
| 0x3009 | P3009 | P3009 Lambdasonde (Bank 2, vor Katalysator) - Input niedrig nach Kaltstart |
| 0x3010 | P3010 | P3010 Lambdasonde (Bank 1, nach Katalysator) - Input niedrig nach Kaltstart |
| 0x3011 | P3011 | P3011 Lambdasonde (Bank 2, nach Katalysator) - Input niedrig nach Kaltstart |
| 0x3012 | P3012 | P3012 Lambdasonde Signalkreis (Bank 1, vor Katalysator) - Adaptionswert zu hoch |
| 0x3013 | P3013 | P3013 Lambdasonde Signalkreis (Bank 2, vor Katalysator) - Adaptionswert zu hoch |
| 0x3014 | P3014 | P3014 Lambdasonde (Bank 1, vor Katalysator) - WRAF-IC-Versorgungsspannung zu niedrig |
| 0x3015 | P3015 | P3015 Lambdasonde (Bank 2, vor Katalysator) - IC-Versorgungspannung zu niedrig |
| 0x3016 | P3016 | P3016 Lambdasonde Kalibrierwiderstand am WRAF-IC (Bank 1, vor Katalysator) - Plausibilitätsfehler |
| 0x3017 | P3017 | P3017 Lambdasonde Kalibrierwiderstand am WRAF-IC (Bank 2, vor Katalysator) - Plausibilitätsfehler |
| 0x3018 | P3018 | P3018 Lambdasonde (Bank 1, vor Katalysator) - Lambdareglerwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x3019 | P3019 | P3019 Lambdasonde (Bank 2, vor Katalysator) - Lambdareglerwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x3020 | P3020 | P3020 Lambdasonde (Bank 1, vor Katalysator) - Signalspannung bei Schubabschaltung zu klein infolge offener Pumpstromleitung |
| 0x3021 | P3021 | P3021 Lambdasonde (Bank 2, vor Katalysator) - Signalspannung bei Schubabschaltung zu klein infolge offener Pumpstromleitung |
| 0x3022 | P3022 | P3022 Lambdasonde (Bank 1, vor Katalysator) - SPI-Kommunikation zum WRAF-IC gestört |
| 0x3023 | P3023 | P3023 Lambdasonde (Bank 2, vor Katalysator) - SPI-Kommunikation zum WRAF-IC gestört |
| 0x3024 | P3024 | P3024 Lambdasonde (Bank 1, vor Katalysator) - Initialisierungsfehler WRAF-IC |
| 0x3025 | P3025 | P3025 Lambdasonde (Bank 2, vor Katalysator) - Initialisierungsfehler WRAF-IC |
| 0x3026 | P3026 | P3026 Lambdasonde (Bank 1, vor Katalysator) - Betriebstemperatur nicht erreicht |
| 0x3027 | P3027 | P3027 Lambdasonde (Bank 2, vor Katalysator) - Betriebstemperatur nicht erreicht |
| 0x3028 | P3028 | P3028 Lambdasonde Heizungsansteuerung (Bank 1, vor Katalysator) - keine Aktivität festzustellen |
| 0x3029 | P3029 | P3029 Lambdasonde Heizungsansteuerung (Bank 2, vor Katalysator) - keine Aktivität festzustellen |
| 0x3030 | P3030 | P3030 Lambdasonde Innenwiderstandsmesspfad (Bank 1, vor Katalysator) - Adaptionswert zu hoch |
| 0x3031 | P3031 | P3031 Lambdasonde Innenwiderstandsmesspfad (Bank 2, vor Katalysator) - Adaptionswert zu hoch |
| 0x3032 | P3032 | P3032 Lambdasonde Innenwiderstandsmesspfad (Bank 1, vor Katalysator) - Verstärkungsfaktor Plausibilitätsfehler |
| 0x3033 | P3033 | P3033 Lambdasonde Innenwiderstandsmesspfad (Bank 2, vor Katalysator) - Verstärkungsfaktor Plausibilitätsfehler |
| 0x3034 | P3034 | P3034 Lambdasonde (Bank 1, vor Katalysator) - Kennliniensteigung zu flach |
| 0x3035 | P3035 | P3035 Lambdasonde (Bank 2, vor Katalysator) - Kennliniensteigung zu flach |
| 0x3036 | P3036 | P3036 Lambdasonde (Bank 1, vor Katalysator) - Unterschiedliche Länge von Fett- und Magerphase in der Regelschwingung |
| 0x3037 | P3037 | P3037 Lambdasonde (Bank 2, vor Katalysator) - Unterschiedliche Länge von Fett- und Magerphase in der Regelschwingung |
| 0x3038 | P3038 | P3038 Lambdasonde (Bank 1, vor Katalysator) - Asymmetrie von Fett- und Magerschaltzeit |
| 0x3039 | P3039 | P3039 Lambdasonde (Bank 2, vor Katalysator) - Asymmetrie von Fett- und Magerschaltzeit |
| 0x3040 | P3040 | P3040 Lambdasonde (Bank 1, nach Katalysator) - Mager- und Fettspannungsschwellen nicht erreicht |
| 0x3041 | P3041 | P3041 Lambdasonde (Bank 2, nach Katalysator) - Mager- und Fettspannungsschwellen nicht erreicht |
| 0x3050 | P3050 | P3050 Hochdruckeinspritzventil (HDEV) Zylinder 1 - Leitungsunterbrechung |
| 0x3051 | P3051 | P3051 Hochdruckeinspritzventil (HDEV) Zylinder 1 - Input niedrig |
| 0x3052 | P3052 | P3052 Hochdruckeinspritzventil (HDEV) Zylinder 1 - Input hoch |
| 0x3053 | P3053 | P3053 Hochdruckeinspritzventil (HDEV) Zylinder 2 - Leitungsunterbrechung |
| 0x3054 | P3054 | P3054 Hochdruckeinspritzventil (HDEV) Zylinder 2 - Input niedrig |
| 0x3055 | P3055 | P3055 Hochdruckeinspritzventil (HDEV) Zylinder 2 - Input hoch |
| 0x3056 | P3056 | P3056 Hochdruckeinspritzventil (HDEV) Zylinder 3 - Leitungsunterbrechung |
| 0x3057 | P3057 | P3057 Hochdruckeinspritzventil (HDEV) Zylinder 3 - Input niedrig |
| 0x3058 | P3058 | P3058 Hochdruckeinspritzventil (HDEV) Zylinder 3 - Input hoch |
| 0x3059 | P3059 | P3059 Hochdruckeinspritzventil (HDEV) Zylinder 4 - Leitungsunterbrechung |
| 0x3060 | P3060 | P3060 Hochdruckeinspritzventil (HDEV) Zylinder 4 - Input niedrig |
| 0x3061 | P3061 | P3061 Hochdruckeinspritzventil (HDEV) Zylinder 4 - Input hoch |
| 0x3062 | P3062 | P3062 Hochdruckeinspritzventil (HDEV) Zylinder 5 - Leitungsunterbrechung |
| 0x3063 | P3063 | P3063 Hochdruckeinspritzventil (HDEV) Zylinder 5 - Input niedrig |
| 0x3064 | P3064 | P3064 Hochdruckeinspritzventil (HDEV) Zylinder 5 - Input hoch |
| 0x3065 | P3065 | P3065 Hochdruckeinspritzventil (HDEV) Zylinder 6 - Leitungsunterbrechung |
| 0x3066 | P3066 | P3066 Hochdruckeinspritzventil (HDEV) Zylinder 6 - Input niedrig |
| 0x3067 | P3067 | P3067 Hochdruckeinspritzventil (HDEV) Zylinder 6 - Input hoch |
| 0x3068 | P3068 | P3068 Hochdruckeinspritzventil (HDEV) Zylinder 7 - Leitungsunterbrechung |
| 0x3069 | P3069 | P3069 Hochdruckeinspritzventil (HDEV) Zylinder 7 - Input niedrig |
| 0x3070 | P3070 | P3070 Hochdruckeinspritzventil (HDEV) Zylinder 7 - Input hoch |
| 0x3071 | P3071 | P3071 Hochdruckeinspritzventil (HDEV) Zylinder 8 - Leitungsunterbrechung |
| 0x3072 | P3072 | P3072 Hochdruckeinspritzventil (HDEV) Zylinder 8 - Input niedrig |
| 0x3073 | P3073 | P3073 Hochdruckeinspritzventil (HDEV) Zylinder 8 - Input hoch |
| 0x3074 | P3074 | P3074 Hochdruckeinspritzventil (HDEV) Zylinder 9 - Leitungsunterbrechung |
| 0x3075 | P3075 | P3075 Hochdruckeinspritzventil (HDEV) Zylinder 9 - Input niedrig |
| 0x3076 | P3076 | P3076 Hochdruckeinspritzventil (HDEV) Zylinder 9 - Input hoch |
| 0x3077 | P3077 | P3077 Hochdruckeinspritzventil (HDEV) Zylinder 10 - Leitungsunterbrechung |
| 0x3078 | P3078 | P3078 Hochdruckeinspritzventil (HDEV) Zylinder 10 - Input niedrig |
| 0x3079 | P3079 | P3079 Hochdruckeinspritzventil (HDEV) Zylinder 10 - Input hoch |
| 0x3080 | P3080 | P3080 Hochdruckeinspritzventil (HDEV) Zylinder 11 - Leitungsunterbrechung |
| 0x3081 | P3081 | P3081 Hochdruckeinspritzventil (HDEV) Zylinder 11 - Input niedrig |
| 0x3082 | P3082 | P3082 Hochdruckeinspritzventil (HDEV) Zylinder 11 - Input hoch |
| 0x3083 | P3083 | P3083 Hochdruckeinspritzventil (HDEV) Zylinder 12 - Leitungsunterbrechung |
| 0x3084 | P3084 | P3084 Hochdruckeinspritzventil (HDEV) Zylinder 12 - Input niedrig |
| 0x3085 | P3085 | P3085 Hochdruckeinspritzventil (HDEV) Zylinder 12 - Input hoch |
| 0x3100 | P3100 | P3100 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 - Leitungsunterbrechung |
| 0x3101 | P3101 | P3101 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 - Input niedrig |
| 0x3102 | P3102 | P3102 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 - Input hoch |
| 0x3103 | P3103 | P3103 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 - Boosterzeitfehler |
| 0x3104 | P3104 | P3104 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 - Leitungsunterbrechung |
| 0x3105 | P3105 | P3105 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 - Input niedrig |
| 0x3106 | P3106 | P3106 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 - Input hoch |
| 0x3107 | P3107 | P3107 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 - Boosterzeitfehler |
| 0x3108 | P3108 | P3108 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 - Leitungsunterbrechung |
| 0x3109 | P3109 | P3109 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 - Input niedrig |
| 0x3110 | P3110 | P3110 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 - Input hoch |
| 0x3111 | P3111 | P3111 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 - Boosterzeitfehler |
| 0x3112 | P3112 | P3112 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 - Leitungsunterbrechung |
| 0x3113 | P3113 | P3113 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 - Input niedrig |
| 0x3114 | P3114 | P3114 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 - Input hoch |
| 0x3115 | P3115 | P3115 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 - Boosterzeitfehler |
| 0x3116 | P3116 | P3116 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 - Leitungsunterbrechung |
| 0x3117 | P3117 | P3117 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 - Input niedrig |
| 0x3118 | P3118 | P3118 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 - Input hoch |
| 0x3119 | P3119 | P3119 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 - Boosterzeitfehler |
| 0x3120 | P3120 | P3120 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 - Leitungsunterbrechung  |
| 0x3121 | P3121 | P3121 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 - Input niedrig |
| 0x3122 | P3122 | P3122 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 - Input hoch |
| 0x3123 | P3123 | P3123 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 - Boosterzeitfehler |
| 0x3124 | P3124 | P3124 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 - Leitungsunterbrechung |
| 0x3125 | P3125 | P3125 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 - Input niedrig |
| 0x3126 | P3126 | P3126 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 - Input hoch |
| 0x3127 | P3127 | P3127 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 - Boosterzeitfehler |
| 0x3128 | P3128 | P3128 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 - Leitungsunterbrechung |
| 0x3129 | P3129 | P3129 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 - Input niedrig |
| 0x3130 | P3130 | P3130 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 - Input hoch |
| 0x3131 | P3131 | P3131 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 - Boosterzeitfehler |
| 0x3132 | P3132 | P3132 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 - Leitungsunterbrechung |
| 0x3133 | P3133 | P3133 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 - Input niedrig |
| 0x3134 | P3134 | P3134 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 - Input hoch |
| 0x3135 | P3135 | P3135 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 - Boosterzeitfehler |
| 0x3136 | P3136 | P3136 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 - Leitungsunterbrechung |
| 0x3137 | P3137 | P3137 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 - Input niedrig |
| 0x3138 | P3138 | P3138 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 - Input hoch |
| 0x3139 | P3139 | P3139 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 - Boosterzeitfehler |
| 0x3140 | P3140 | P3140 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 - Leitungsunterbrechung |
| 0x3141 | P3141 | P3141 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 - Input niedrig |
| 0x3142 | P3142 | P3142 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 - Input hoch |
| 0x3143 | P3143 | P3143 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 - Boosterzeitfehler |
| 0x3144 | P3144 | P3144 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 - Leitungsunterbrechung |
| 0x3145 | P3145 | P3145 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 - Input niedrig |
| 0x3146 | P3146 | P3146 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 - Input hoch |
| 0x3147 | P3147 | P3147 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 - Boosterzeitfehler |
| 0x3148 | P3148 | P3148 Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 - Kurzschluss Spule |
| 0x3149 | P3149 | P3149 Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 - Input niedrig |
| 0x3150 | P3150 | P3150 Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 - Input hoch |
| 0x3151 | P3151 | P3151 Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 - Kurzschluss Spule |
| 0x3152 | P3152 | P3152 Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 - Input niedrig |
| 0x3153 | P3153 | P3153 Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 - Input hoch |
| 0x3154 | P3154 | P3154 Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 - Kurzschluss Spule |
| 0x3155 | P3155 | P3155 Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 - Input niedrig |
| 0x3156 | P3156 | P3156 Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 - Input hoch |
| 0x3157 | P3157 | P3157 Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 - Kurzschluss Spule |
| 0x3158 | P3158 | P3158 Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 - Input niedrig |
| 0x3159 | P3159 | P3159 Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 - Input hoch |
| 0x3160 | P3160 | P3160 Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 - Kurzschluss Spule |
| 0x3161 | P3161 | P3161 Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 - Input niedrig |
| 0x3162 | P3162 | P3162 Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 - Input hoch |
| 0x3163 | P3163 | P3163 Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 - Kurzschluss Spule |
| 0x3164 | P3164 | P3164 Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 - Input niedrig |
| 0x3165 | P3165 | P3165 Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 - Input hoch |
| 0x3166 | P3166 | P3166 Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 - Kurzschluss Spule |
| 0x3167 | P3167 | P3167 Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 - Input niedrig |
| 0x3168 | P3168 | P3168 Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 - Input hoch |
| 0x3169 | P3169 | P3169 Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 - Kurzschluss Spule |
| 0x3170 | P3170 | P3170 Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 - Input niedrig |
| 0x3171 | P3171 | P3171 Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 - Input hoch |
| 0x3172 | P3172 | P3172 Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 - Kurzschluss Spule |
| 0x3173 | P3173 | P3173 Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 - Input niedrig |
| 0x3174 | P3174 | P3174 Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 - Input hoch |
| 0x3175 | P3175 | P3175 Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 - Kurzschluss Spule |
| 0x3176 | P3176 | P3176 Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 - Input niedrig |
| 0x3177 | P3177 | P3177 Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 - Input hoch |
| 0x3178 | P3178 | P3178 Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 - Kurzschluss Spule |
| 0x3179 | P3179 | P3179 Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 - Input niedrig |
| 0x3180 | P3180 | P3180 Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 - Input hoch |
| 0x3181 | P3181 | P3181 Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 - Kurzschluss Spule |
| 0x3182 | P3182 | P3182 Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 - Input niedrig |
| 0x3183 | P3183 | P3183 Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 - Input hoch |
| 0x3184 | P3184 | P3184 HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 1) - Kommunikationsfehler |
| 0x3185 | P3185 | P3185 HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 2) - Kommunikationsfehler |
| 0x3186 | P3186 | P3186 Ansauglufttemperaturfühler (Bank 2) - Input niedrig |
| 0x3187 | P3187 | P3187 Ansauglufttemperaturfühler (Bank 2) - Input hoch |
| 0x3188 | P3188 | P3188 CAN-Timeout Hochdruckeinspritzventil (HDEV) Botschaft |
| 0x3189 | P3189 | P3189 CAN-Timeout Hochdruckeinspritzventil (HDEV) Botschaft (Bank 2) |
| 0x3198 | P3198 | P3198 Motorkühlmitteltemperatur - Gradient zu hoch |
| 0x3199 | P3199 | P3199 Motorkühlmitteltemperatur - Signal festliegend |
| 0x3200 | P3200 | P3200 Powertrain CAN, CAN-Baustein - defekt |
| 0x3201 | P3201 | P3201 Powertrain CAN, DPRAM-CAN-Baustein - defekt |
| 0x3202 | P3202 | P3202 Powertrain CAN, CAN-Baustein - Abschaltung |
| 0x3203 | P3203 | P3203 Local CAN, LoCAN-Baustein - defekt |
| 0x3204 | P3204 | P3204 Local CAN, DPRAM-LoCAN-Baustein - defekt |
| 0x3205 | P3205 | P3205 Local CAN, CAN-Baustein - Abschaltung |
| 0x3206 | P3206 | P3206 CAN-Timeout ARS (Active Roll Stabilisation) |
| 0x3207 | P3207 | P3207 CAN-Botschaftsüberwachung ARS (Active Roll Stabilisation) - kein Signal |
| 0x3208 | P3208 | P3208 CAN-Botschaftsüberwachung ARS (Active Roll Stabilisation) - Plausibilitätsfehler |
| 0x3209 | P3209 | P3209 CAN-Botschaftsüberwachung ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Aliveprüfung |
| 0x320E | P320E | P320E Generator 2 - Übertemperatur |
| 0x320F | P320F | P320F Generator 2 - Fehlfunktion |
| 0x3210 | P3210 | P3210 CAN-Botschaftsüberwachung ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Plausibilitätsfehler |
| 0x3211 | P3211 | P3211 CAN-Botschaftsüberwachung CAS (Car Access System) - kein Signal |
| 0x3212 | P3212 | P3212 CAN-Botschaftsüberwachung CAS (Car Access System) - Plausibilitätsfehler |
| 0x3213 | P3213 | P3213 CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Aliveprüfung |
| 0x3214 | P3214 | P3214 CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Plausibilitätsfehler |
| 0x3215 | P3215 | P3215 CAN-Botschaftsüberwachung IHKA (integrierte Heiz- und Klimaautomatik) - kein Signal |
| 0x3216 | P3216 | P3216 CAN-Timeout Instrumentenkombination |
| 0x3217 | P3217 | P3217 CAN-Botschaftsüberwachung Instrumentenkombination - Plausibilitätsfehler |
| 0x3218 | P3218 | P3218 CAN-Botschaftsüberwachung PWML (Powermodul) - kein Signal |
| 0x3219 | P3219 | P3219 CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - Aliveprüfung |
| 0x321A | P321A | P321A Generator 2 - mechanischer Fehler |
| 0x321B | P321B | P321B Generator 2 - Kommunikationsverlust |
| 0x321C | P321C | P321C Generator 2 - Kommunikationsfehler |
| 0x3220 | P3220 | P3220 CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - kein Signal |
| 0x3221 | P3221 | P3221 CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - Plausibilitätsfehler |
| 0x3222 | P3222 | P3222 Generator - Übertemperatur |
| 0x3223 | P3223 | P3223 Generator - mechanischer Fehler |
| 0x3224 | P3224 | P3224 Generator - Kommunikationsverlust |
| 0x3225 | P3225 | P3225 Generator - Kommunikationsfehler |
| 0x3226 | P3226 | P3226 E-Box Ansteuerung Lüfter - Input hoch |
| 0x3227 | P3227 | P3227 E-Box Ansteuerung Lüfter - Input niedrig |
| 0x3228 | P3228 | P3228 E-Box Ansteuerung Lüfter - Leitungsunterbrechung |
| 0x3229 | P3229 | P3229 Lastsensorüberwachung VVT-Ventilhub - Plausibilitätsfehler |
| 0x3230 | P3230 | P3230 Lastsensorüberwachung Drucksensor - Plausibilitätsfehler |
| 0x3231 | P3231 | P3231 Steuergeräteüberwachung Fehlerreaktion - Plausibilitätsfehler |
| 0x3232 | P3232 | P3232 Steuergeräteüberwachung Zündwinkel - Plausibilitätsfehler |
| 0x3233 | P3233 | P3233 Steuergeräteüberwachung relative Füllung - Plausibilitätsfehler |
| 0x3234 | P3234 | P3234 Steuergeräteüberwachung Drosselklappensteller Anschlagüberprüfung - Fehlfunktion |
| 0x3235 | P3235 | P3235 Steuergeräteüberwachung Variantencodierung - Plausibilitätsfehler |
| 0x3236 | P3236 | P3236 Steuergeräteüberwachung Einspritzzeit relative Kraftstoffmenge - Plausibilitätsfehler |
| 0x3237 | P3237 | P3237 Steuergeräteüberwachung Kraftstoffkorrektur - Fehler |
| 0x3238 | P3238 | P3238 Steuergeräteüberwachung TPU-Baustein - defekt |
| 0x3239 | P3239 | P3239 Steuergerät Kodierprozess - keine Kodierung |
| 0x3240 | P3240 | P3240 Kennfeldkühlung Thermostat Ansteuerung - Leitungsunterbrechung |
| 0x3241 | P3241 | P3241 Kennfeldkühlung Thermostat Ansteuerung - Input niedrig  |
| 0x3242 | P3242 | P3242 Kennfeldkühlung Thermostat Ansteuerung - Input hoch |
| 0x3243 | P3243 | P3243 CAN-Timeout elektrischer Zusatzheizer |
| 0x3244 | P3244 | P3244 Elektrischer Zusatzheizer - defekt |
| 0x3245 | P3245 | P3245 Elektrischer Zusatzheizer - Übertemperatur |
| 0x3246 | P3246 | P3246 Elektrischer Zusatzheizer - Fehlfunktion |
| 0x3247 | P3247 | P3247 Steuergerät - interner NVRAM Backup Fehler |
| 0x3248 | P3248 | P3248 Momentenvergleich - Bankabweichungen zu gross |
| 0x3249 | P3249 | P3249 Kraftstoffeinspritzleiste Drucksensor (Bank 2) - Fehlfunktion |
| 0x3250 | P3250 | P3250 Kraftstoffeinspritzleiste Drucksensor (Bank 2) - Input niedrig |
| 0x3251 | P3251 | P3251 Kraftstoffeinspritzleiste Drucksensor (Bank 2) - Input hoch |
| 0x3252 | P3252 | P3252 Tankentlüftungssystem, Tankentlüftungsventil 2 (Bank 2) - Fehlfunktion |
| 0x3253 | P3253 | P3253 Tankentlüftungssystem, Tankentlüftungsventil 2 (Bank 2) - Leitungsunterbrechung |
| 0x3254 | P3254 | P3254 Tankentlüftungssystem, Tankentlüftungsventil 2 (Bank 2) - Kurzschluss |
| 0x3255 | P3255 | P3255 Generator - Spannung in Startphase über Schwellwert |
| 0x3256 | P3256 | P3256 CAN-Timeout Lenkwinkelsensor (LWS) Steuergerät |
| 0x3269 | P3269 | P3269 Luftmassenmesser Versorgungsspannung - Input hoch |
| 0x3270 | P3270 | P3270 Luftmassenmesser Versorgungsspannung - Input niedrig |
| 0x3277 | P3277 | P3277 Ladedrucksteller - Fehlfunktion |
| 0x3278 | P3278 | P3278 Abgasrückführsteller - Fehlfunktion |
| 0x3279 | P3279 | P3279 Drallklappe - Fehlfunktion |
| 0x3280 | P3280 | P3280 Laufruheregler - Korrekturmenge zu hoch oder zu niedrig |
| 0x3300 | P3300 | P3300 Zündspule Zylinder 1 - Input hoch oder Nichtimpedanz |
| 0x3301 | P3301 | P3301 Zündspule Zylinder 1 - Übergangswiderstand oder Hochimpedanz |
| 0x3302 | P3302 | P3302 Zündspule Zylinder 1 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3303 | P3303 | P3303 Zündspule Zylinder 5 - Input hoch oder Nichtimpedanz |
| 0x3304 | P3304 | P3304 Zündspule Zylinder 5 - Übergangswiderstand oder Hochimpedanz |
| 0x3305 | P3305 | P3305 Zündspule Zylinder 5 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3306 | P3306 | P3306 Zündspule Zylinder 4 - Input hoch oder Nichtimpedanz |
| 0x3307 | P3307 | P3307 Zündspule Zylinder 4 - Übergangswiderstand oder Hochimpedanz |
| 0x3308 | P3308 | P3308 Zündspule Zylinder 4 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3309 | P3309 | P3309 Zündspule Zylinder 8 - Input hoch oder Nichtimpedanz |
| 0x3310 | P3310 | P3310 Zündspule Zylinder 8 - Übergangswiderstand oder Hochimpedanz |
| 0x3311 | P3311 | P3311 Zündspule Zylinder 8 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3312 | P3312 | P3312 Zündspule Zylinder 6 - Input hoch oder Nichtimpedanz |
| 0x3313 | P3313 | P3313 Zündspule Zylinder 6 - Übergangswiderstand oder Hochimpedanz |
| 0x3314 | P3314 | P3314 Zündspule Zylinder 6 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3315 | P3315 | P3315 Zündspule Zylinder 3 - Input hoch oder Nichtimpedanz |
| 0x3316 | P3316 | P3316 Zündspule Zylinder 3 - Übergangswiderstand oder Hochimpedanz |
| 0x3317 | P3317 | P3317 Zündspule Zylinder 3 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3318 | P3318 | P3318 Zündspule Zylinder 7 - Input hoch oder Nichtimpedanz |
| 0x3319 | P3319 | P3319 Zündspule Zylinder 7 - Übergangswiderstand oder Hochimpedanz |
| 0x3320 | P3320 | P3320 Zündspule Zylinder 7 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3321 | P3321 | P3321 Zündspule Zylinder 2 - Input hoch oder Nichtimpedanz |
| 0x3322 | P3322 | P3322 Zündspule Zylinder 2 - Übergangswiderstand oder Hochimpedanz |
| 0x3323 | P3323 | P3323 Zündspule Zylinder 2 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3324 | P3324 | P3324 Zündspule Zylinder 9 - Input hoch oder Nichtimpedanz |
| 0x3325 | P3325 | P3325 Zündspule Zylinder 9 - Übergangswiderstand oder Hochimpedanz |
| 0x3326 | P3326 | P3326 Zündspule Zylinder 9 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3327 | P3327 | P3327 Zündspule Zylinder 10 - Input hoch oder Nichtimpedanz |
| 0x3328 | P3328 | P3328 Zündspule Zylinder 10 - Übergangswiderstand oder Hochimpedanz |
| 0x3329 | P3329 | P3329 Zündspule Zylinder 10 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3330 | P3330 | P3330 Zündspule Zylinder 11 - Input hoch oder Nichtimpedanz |
| 0x3331 | P3331 | P3331 Zündspule Zylinder 11 - Übergangswiderstand oder Hochimpedanz |
| 0x3332 | P3332 | P3332 Zündspule Zylinder 11 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3333 | P3333 | P3333 Zündspule Zylinder 12 - Input hoch oder Nichtimpedanz |
| 0x3334 | P3334 | P3334 Zündspule Zylinder 12 - Übergangswiderstand oder Hochimpedanz |
| 0x3335 | P3335 | P3335 Zündspule Zylinder 12 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3336 | P3336 | P3336 Funktionsüberwachung - Steuergerätekommunikation Master/Slave |
| 0x3337 | P3337 | P3337 Funktionsüberwachung - Lamdaplausibilisierung |
| 0x3400 | P3400 | P3400 Zylinderabschaltungssystem - Fehlfunktion |
| 0x3401 | P3401 | P3401 Abschaltung Zylinder 1/Einlassventil - Leitungsunterbrechung |
| 0x3402 | P3402 | P3402 Abschaltung Zylinder 1/Einlassventil - Leistungsproblem |
| 0x3403 | P3403 | P3403 Abschaltung Zylinder 1/Einlassventil - Input niedrig |
| 0x3404 | P3404 | P3404 Abschaltung Zylinder 1/Einlassventil - Input hoch |
| 0x3405 | P3405 | P3405 Auslassventil Zylinder 1 - Leitungsunterbrechung |
| 0x3406 | P3406 | P3406 Auslassventil Zylinder 1 - Leistungsproblem |
| 0x3407 | P3407 | P3407 Auslassventil Zylinder 1 - Input niedrig |
| 0x3408 | P3408 | P3408 Auslassventil Zylinder 1 - Input hoch |
| 0x3409 | P3409 | P3409 Abschaltung Zylinder 2/Einlassventil - Leitungsunterbrechung |
| 0x3410 | P3410 | P3410 Abschaltung Zylinder 2/Einlassventil - Leistungsproblem |
| 0x3411 | P3411 | P3411 Abschaltung Zylinder 2/Einlassventil - Input niedrig |
| 0x3412 | P3412 | P3412 Abschaltung Zylinder 2/Einlassventil - Input hoch |
| 0x3413 | P3413 | P3413 Auslassventil Zylinder 2 - Leitungsunterbrechung |
| 0x3414 | P3414 | P3414 Auslassventil Zylinder 2 - Leistungsproblem |
| 0x3415 | P3415 | P3415 Auslassventil Zylinder 2 - Input niedrig |
| 0x3416 | P3416 | P3416 Auslassventil Zylinder 2 - Input hoch |
| 0x3417 | P3417 | P3417 Abschaltung Zylinder 3/Einlassventil - Leitungsunterbrechung |
| 0x3418 | P3418 | P3418 Abschaltung Zylinder 3/Einlassventil - Leistungsproblem |
| 0x3419 | P3419 | P3419 Abschaltung Zylinder 3/Einlassventil - Input niedrig |
| 0x3420 | P3420 | P3420 Abschaltung Zylinder 3/Einlassventil - Input hoch |
| 0x3421 | P3421 | P3421 Auslassventil Zylinder 3 - Leitungsunterbrechung |
| 0x3422 | P3422 | P3422 Auslassventil Zylinder 3 - Leistungsproblem |
| 0x3423 | P3423 | P3423 Auslassventil Zylinder 3 - Input niedrig |
| 0x3424 | P3424 | P3424 Auslassventil Zylinder 3 - Input hoch |
| 0x3425 | P3425 | P3425 Abschaltung Zylinder 4/Einlassventil - Leitungsunterbrechung |
| 0x3426 | P3426 | P3426 Abschaltung Zylinder 4/Einlassventil - Leistungsproblem |
| 0x3427 | P3427 | P3427 Abschaltung Zylinder 4/Einlassventil - Input niedrig |
| 0x3428 | P3428 | P3428 Abschaltung Zylinder 4/Einlassventil - Input hoch |
| 0x3429 | P3429 | P3429 Auslassventil Zylinder 4 - Leitungsunterbrechung |
| 0x3430 | P3430 | P3430 Auslassventil Zylinder 4 - Leistungsproblem |
| 0x3431 | P3431 | P3431 Auslassventil Zylinder 4 - Input niedrig |
| 0x3432 | P3432 | P3432 Auslassventil Zylinder 4 - Input hoch |
| 0x3433 | P3433 | P3433 Abschaltung Zylinder 5/Einlassventil - Leitungsunterbrechung |
| 0x3434 | P3434 | P3434 Abschaltung Zylinder 5/Einlassventil - Leistungsproblem |
| 0x3435 | P3435 | P3435 Abschaltung Zylinder 5/Einlassventil - Input niedrig |
| 0x3436 | P3436 | P3436 Abschaltung Zylinder 5/Einlassventil - Input hoch |
| 0x3437 | P3437 | P3437 Auslassventil Zylinder 5 - Leitungsunterbrechung |
| 0x3438 | P3438 | P3438 Auslassventil Zylinder 5 - Leistungsproblem |
| 0x3439 | P3439 | P3439 Auslassventil Zylinder 5 - Input niedrig |
| 0x3440 | P3440 | P3440 Auslassventil Zylinder 5 - Input hoch |
| 0x3441 | P3441 | P3441 Abschaltung Zylinder 6/Einlassventil - Leitungsunterbrechung |
| 0x3442 | P3442 | P3442 Abschaltung Zylinder 6/Einlassventil - Leistungsproblem |
| 0x3443 | P3443 | P3443 Abschaltung Zylinder 6/Einlassventil - Input niedrig |
| 0x3444 | P3444 | P3444 Abschaltung Zylinder 6/Einlassventil - Input hoch |
| 0x3445 | P3445 | P3445 Auslassventil Zylinder 6 - Leitungsunterbrechung |
| 0x3446 | P3446 | P3446 Auslassventil Zylinder 6 - Leistungsproblem |
| 0x3447 | P3447 | P3447 Auslassventil Zylinder 6 - Input niedrig |
| 0x3448 | P3448 | P3448 Auslassventil Zylinder 6 - Input hoch |
| 0x3449 | P3449 | P3449 Abschaltung Zylinder 7/Einlassventil - Leitungsunterbrechung |
| 0x3450 | P3450 | P3450 Abschaltung Zylinder 7/Einlassventil - Leistungsproblem |
| 0x3451 | P3451 | P3451 Abschaltung Zylinder 7/Einlassventil - Input niedrig |
| 0x3452 | P3452 | P3452 Abschaltung Zylinder 7/Einlassventil - Input hoch |
| 0x3453 | P3453 | P3453 Auslassventil Zylinder 7 - Leitungsunterbrechung |
| 0x3454 | P3454 | P3454 Auslassventil Zylinder 7 - Leistungsproblem |
| 0x3455 | P3455 | P3455 Auslassventil Zylinder 7 - Input niedrig |
| 0x3456 | P3456 | P3456 Auslassventil Zylinder 7 - Input hoch |
| 0x3457 | P3457 | P3457 Abschaltung Zylinder 8/Einlassventil - Leitungsunterbrechung |
| 0x3458 | P3458 | P3458 Abschaltung Zylinder 8/Einlassventil - Leistungsproblem |
| 0x3459 | P3459 | P3459 Abschaltung Zylinder 8/Einlassventil - Input niedrig |
| 0x3460 | P3460 | P3460 Abschaltung Zylinder 8/Einlassventil - Input hoch |
| 0x3461 | P3461 | P3461 Auslassventil Zylinder 8 - Leitungsunterbrechung |
| 0x3462 | P3462 | P3462 Auslassventil Zylinder 8 - Leistungsproblem |
| 0x3463 | P3463 | P3463 Auslassventil Zylinder 8 - Input niedrig |
| 0x3464 | P3464 | P3464 Auslassventil Zylinder 8 - Input hoch |
| 0x3465 | P3465 | P3465 Abschaltung Zylinder 9/Einlassventil - Leitungsunterbrechung |
| 0x3466 | P3466 | P3466 Abschaltung Zylinder 9/Einlassventil - Leistungsproblem |
| 0x3467 | P3467 | P3467 Abschaltung Zylinder 9/Einlassventil - Input niedrig |
| 0x3468 | P3468 | P3468 Abschaltung Zylinder 9/Einlassventil - Input hoch |
| 0x3469 | P3469 | P3469 Auslassventil Zylinder 9 - Leitungsunterbrechung |
| 0x3470 | P3470 | P3470 Auslassventil Zylinder 9 - Leistungsproblem |
| 0x3471 | P3471 | P3471 Auslassventil Zylinder 9 - Input niedrig |
| 0x3472 | P3472 | P3472 Auslassventil Zylinder 9 - Input hoch |
| 0x3473 | P3473 | P3473 Abschaltung Zylinder 10/Einlassventil - Leitungsunterbrechung |
| 0x3474 | P3474 | P3474 Abschaltung Zylinder 10/Einlassventil - Leistungsproblem |
| 0x3475 | P3475 | P3475 Abschaltung Zylinder 10/Einlassventil - Input niedrig |
| 0x3476 | P3476 | P3476 Abschaltung Zylinder 10/Einlassventil - Input hoch |
| 0x3477 | P3477 | P3477 Auslassventil Zylinder 10 - Leitungsunterbrechung |
| 0x3478 | P3478 | P3478 Auslassventil Zylinder 10 - Leistungsproblem |
| 0x3479 | P3479 | P3479 Auslassventil Zylinder 10 - Input niedrig |
| 0x3480 | P3480 | P3480 Auslassventil Zylinder 10 - Input hoch |
| 0x3481 | P3481 | P3481 Abschaltung Zylinder 11/Einlassventil - Leitungsunterbrechung |
| 0x3482 | P3482 | P3482 Abschaltung Zylinder 11/Einlassventil - Leistungsproblem |
| 0x3483 | P3483 | P3483 Abschaltung Zylinder 11/Einlassventil - Input niedrig |
| 0x3484 | P3484 | P3484 Abschaltung Zylinder 11/Einlassventil - Input hoch |
| 0x3485 | P3485 | P3485 Auslassventil Zylinder 11 - Leitungsunterbrechung |
| 0x3486 | P3486 | P3486 Auslassventil Zylinder 11 - Leistungsproblem |
| 0x3487 | P3487 | P3487 Auslassventil Zylinder 11 - Input niedrig |
| 0x3488 | P3488 | P3488 Auslassventil Zylinder 11 - Input hoch |
| 0x3489 | P3489 | P3489 Abschaltung Zylinder 12/Einlassventil - Leitungsunterbrechung |
| 0x3490 | P3490 | P3490 Abschaltung Zylinder 12/Einlassventil - Leistungsproblem |
| 0x3491 | P3491 | P3491 Abschaltung Zylinder 12/Einlassventil - Input niedrig |
| 0x3492 | P3492 | P3492 Abschaltung Zylinder 12/Einlassventil - Input hoch |
| 0x3493 | P3493 | P3493 Auslassventil Zylinder 12 - Leitungsunterbrechung |
| 0x3494 | P3494 | P3494 Auslassventil Zylinder 12 - Leistungsproblem |
| 0x3495 | P3495 | P3495 Auslassventil Zylinder 12 - Input niedrig |
| 0x3496 | P3496 | P3496 Auslassventil Zylinder 12 - Input hoch |
| 0x0101 | U0101 | U0101 Kommunikationsverlust mit Getriebesteuergerät |
| 0x0102 | U0102 | U0102 Kommunikationsverlust mit Verteilergetriebe Steuergerät |
| 0x0301 | U0301 | U0301 Software-Inkompatibilität mit Motorsteuergerät/Powertrain Steuergerät |
| 0x0302 | U0302 | U0302 Software-Inkompatibilität mit Getriebesteuergerät |
| 0x0303 | U0303 | U0303 Software-Inkompatibilität mit Verteilergetriebe Steuergerät |
| 0x0401 | U0401 | U0401 Ungültige Daten erhalten vom Motorsteuergerät/Powertrain Steuergerät |
| 0x0402 | U0402 | U0402 Ungültige Daten erhalten vom Getriebesteuergerät |
| 0x0403 | U0403 | U0403 Ungültige Daten erhalten vom Verteilergetriebe Steuergerät |
| 0xXYXY | ?? | unbekannter P-Code |
