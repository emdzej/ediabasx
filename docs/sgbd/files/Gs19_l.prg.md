# Gs19_l.prg

## General

|  |  |
| --- | --- |
| File | Gs19_l.prg |
| Type | PRG |
| Jobs | 64 |
| Tables | 26 |
| Origin | BMW EA-71 Burkhardt |
| Revision | 0.8 |
| Author | BMW EA-71 Burkhardt |
| ECU Comment | SGBD fuer Integrationsstufe 5 9600 kBaud |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | GS19.0 9600 kBaud C Muster |  |  |
| ORIGIN | string | BMW EA-71 Burkhardt |  |  |
| REVISION | string | 0.08 |  |  |
| AUTHOR | string | BMW EA-71 Burkhardt |  |  |
| COMMENT | string | SGBD fuer Integrationsstufe 5 9600 kBaud |  |  |
| PACKAGE | string | 0.12 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### FS_LOESCHEN

Fehlerspeicher loeschen KWP2000: $14 ClearDiagnosticInformation Modus  : Default

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

### DIAGNOSE_ENDE

Diagnosemode des SG beenden KWP2000: $20 StopDiagnosticSession Modus  : Default

_No arguments._

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen KWP2000: $10 StartDiagnosticSession Modus  : einstellbar mit diesem Job  Wenn MODE = "ECUPM" ( ECUProgrammingMode ) muss nach dem Job die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown Modus  : Default

_No arguments._

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt) KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### STATUS_GETRIEBETEMPERATUR

Auslesen der Getriebetemperatur KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MOTORTEMPERATUR

Auslesen der Motortemperatur KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_FAHRPEDALWINKEL

Auslesen des Fahrpedalwinkels KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ABTRIEBSDREHZAHL

Auslesen der Abtriebsdrehzahl KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_TURBINENDREHZAHL

Auslesen der Turbinendrehzahl KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MOTORDREHZAHL

Auslesen der Motordrehzahl KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_RADGESCHWINDIGKEITEN

Auslesen der mittleren Radgeschwindigkeiten KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MOTORISTMOMENT

Auslesen des Motoristmoments KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MOTORSOLLMOMENT

Auslesen des Motorsollmoments KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ISTGANG

Auslesen des ISTGANGS KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_WK

Auslesen des Wandlerkupplung KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_BATTERIESPANNUNG

Auslesen der Batteriespannung KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_DR_MV_SPANNUNG

Auslesen des DR/MV Versorgungsspannung KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MAGNETVENTILE

Auslesen des Sollzustandes der MV KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_INPUTPEGEL

Auslesen der Inputpegel KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SIGNAL_0

Auslesen der Signalstati 0 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SIGNAL_1

Auslesen der Signalstati 1 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SIGNAL_2

Auslesen der Signalstati 2 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SIGNAL_3

Auslesen der Signalstati 3 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GEAR

Auslesen Status Wandlerkupplung Schaltart KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_STEPTRONIC

Auslesen Zustand der aktuellen Steptronictaster KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_WH_POSITION

Auslesen Status aktuelle Waehlhebelposition KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GETRIEBEPOSITION

Auslesen  aktuelle Getriebeposition KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_AGS

Auslesen  AGS Schaltdiagramm/Kurvenfahrt KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ALLE_MESSWERTE_AUSGEBEN

Auslesen aller Messwerte 0x01..0x7E KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### RESET_EGS

EGS fuehrt Reset aus KWP2000: $11 EcuResetService Modus  : Default

_No arguments._

### AIF_AKTUELL_LESEN

aktuelles Anwenderinfofeld lesen KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### AUSLESEN_PHYSICAL_ECU_HW_NR

Auslesen der PHYSICAL_ECU_HW_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### AUSLESEN_SYSTEM_SUPPLIER_ECU_SERIAL_NR

Auslesen der SYSTEM_SUPPLIER_ECU_SERIAL_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### AUSLESEN_SW_STAND_ENTWICKLUNG

Auslesen der SYSTEM_SUPPLIER_ECU_SOFTWARE_VERSION_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### AUSLESEN_SYSTEM_SUPPLIER_ECU_HW_NR

Auslesen der SYSTEM_SUPPLIER_ECU_HW_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### GANGANZEIGE_STARTEN

Anzeige Gang im Kombi KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### GANGANZEIGE_STOPPEN

Anzeige Gang im Kombi beenden KWP2000: $32 StopRoutineByLocalIdentifier Modus  : Default

_No arguments._

### BACKUPFEHLERSPEICHER_LESEN

Backup-Fehlerspeicher lesen KWP2000:  ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_SIGNAL_STELLGLIED

Status setzen der Signale/Stellglieder KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | string | MV1,MV2,MV3,EDS1,EDS2,EDS3,EDS4,EDS5,EDS6,SHIFTLOCK,INTERLOCK,KOMBI |
| ZUSTAND | string | EIN,EIN/AUS,AUS |

### STATUS_SIGNAL_STELLGLIED

Auslesen Status der Signale/Stellglieder KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | string | MV1,MV2,MV3,EDS1,EDS2,EDS3,EDS4,EDS5,EDS6,L1,L2,L3,L4,P_LEITUNG,SHIFTLOCK,INTERLOCK |

### SEKUNDAERFEHLERSPEICHER_LESEN_1

Auslesen Sekundaerfehlerspeicher KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### SEKUNDAERFEHLERSPEICHER_LESEN_2

Auslesen Sekundaerfehlerspeicher KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ADAPTIONSWERTE_LESEN_FLARE

Auslesen der Adaptionswerte Flare KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ADAPTIONSWERTE_LESEN_GLUE

Auslesen der Adaptionswerte GLUE KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ADAPTIONSWERTE_LESEN_GLS

Auslesen der Adaptionswerte GLS KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ADAPTIONSWERTE_LESEN_SLZ

Auslesen der Adaptionswerte SLZ KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ADAPTIONSWERTE_LESEN_SF

Auslesen der Adaptionswerte SF KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ADAPTIONSWERTE_LESEN_PF

Auslesen der Adaptionswerte PF KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ADAPTIONSWERTE_LESEN_GWK

Auslesen der Adaptionswerte GWK KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ADAPTIONSWERTE_LESEN_SBC

Auslesen der Adaptionswerte SBC KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### ADAPTIONSWERTE_RUECKSETZEN

alle Adaptionswerte ruecksetzen KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### QUICKTEST

Anzahl Fehler / Kilometerstand KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### EGS_DIAGNOSE_TESTJOB

Job fuer EGS Diagnosetest KWP2000: Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL_DATEN | int | Anzahl Datenbytes |
| DATEN_1 | int | Daten Byte 1 |
| DATEN_2 | int | Daten Byte 2 |
| DATEN_3 | int | Daten Byte 3 |
| DATEN_4 | int | Daten Byte 4 |
| DATEN_5 | int | Daten Byte 5 |
| DATEN_6 | int | Daten Byte 6 |

## Tables

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### CONTROLSTATEUMRECHNUNG

| CONTROLSTATE | CS |
| --- | --- |
| EIN | 0x02 |
| EIN/AUS | 0x01 |
| AUS | 0x00 |
|  | 0x03 |

### IDENTIFIER_LESEN

| IDENTIFIER | SIGNAL | 0X00 | 0X01 | 0X02 |
| --- | --- | --- | --- | --- |
| 0x01 | MV1 | AUS | - | EIN |
| 0x02 | MV2 | AUS | - | EIN |
| 0x03 | MV3 | AUS | - | EIN |
| 0x10 | EDS1 | <=100mA | - | >100mA |
| 0x11 | EDS2 | <=100mA | - | >100mA |
| 0x12 | EDS3 | <=100mA | - | >100mA |
| 0x13 | EDS4 | <=100mA | - | >100mA |
| 0x14 | EDS5 | <=100mA | - | >100mA |
| 0x15 | EDS6 | <=100mA | - | >100mA |
| 0x20 | L1 | L-Leitung LOW | - | L-Leitung HIGH |
| 0x21 | L2 | L-Leitung LOW | - | L-Leitung HIGH |
| 0x22 | L3 | L-Leitung LOW | - | L-Leitung HIGH |
| 0x23 | L4 | L-Leitung LOW | - | L-Leitung HIGH |
| 0x24 | P_Leitung | AUS | - | EIN |
| 0x30 | Shiftlock | AUS | - | EIN |
| 0x31 | Interlock | AUS | - | EIN |
| 0x00 |  | - | - | - |

### IDENTIFIER_SETZEN

| IDENTIFIER | SIGNAL | 0X00 | 0X01 | 0X02 |
| --- | --- | --- | --- | --- |
| 0x01 | MV1 | AUS | AUS/EIN 1s | EIN |
| 0x02 | MV2 | AUS | AUS/EIN 1s | EIN |
| 0x03 | MV3 | AUS | AUS/EIN 1s | EIN |
| 0x10 | EDS1 | 50mA | AUS/EIN 1s | EIN |
| 0x11 | EDS2 | 50mA | 50mA/800mA 1s | 800mA |
| 0x12 | EDS3 | 50mA | 50mA/800mA 1s | 800mA |
| 0x13 | EDS4 | 50mA | 50mA/800mA 1s | 800mA |
| 0x14 | EDS5 | 50mA | 50mA/800mA 1s | 800mA |
| 0x15 | EDS6 | 50mA | 50mA/800mA 1s | 800mA |
| 0x24 | P_Leitung | AUS | AUS/EIN 1s | EIN |
| 0x30 | Shiftlock | AUS | AUS/EIN 1s | EIN |
| 0x31 | Interlock | AUS | AUS/EIN 1s | EIN |
| 0x40 | Kombi | Kombi dunkel | - | Kombi an |
| 0x00 |  |  |  |  |

### FORTRBBMW

| RB | BMW |
| --- | --- |
| 0x00 | 0x0000 |
| 0x01 | 0x5096 |
| 0x02 | 0x5090 |
| 0x03 | 0x5080 |
| 0x04 | 0x5022 |
| 0x05 | 0x50B0 |
| 0x06 | 0x5051 |
| 0x07 | 0x5050 |
| 0x08 | 0x5091 |
| 0x09 | 0x5020 |
| 0x0A | 0x5020 |
| 0x0B | 0x5021 |
| 0x0C | 0x503D |
| 0x0D | 0x50A5 |
| 0x0E | 0x50A4 |
| 0x0F | 0x50A9 |
| 0x10 | 0x5060 |
| 0x11 | 0x50B1 |
| 0x12 | 0x5062 |
| 0x13 | 0x5052 |
| 0x14 | 0x503F |
| 0x15 | 0x5001 |
| 0x16 | 0x5001 |
| 0x17 | 0x5002 |
| 0x18 | 0x5002 |
| 0x19 | 0x5003 |
| 0x1A | 0x5003 |
| 0x1B | 0x5004 |
| 0x1C | 0x5004 |
| 0x1D | 0x5005 |
| 0x1E | 0x5005 |
| 0x1F | 0x5006 |
| 0x20 | 0x5006 |
| 0x21 | 0x5010 |
| 0x22 | 0x5010 |
| 0x23 | 0x5011 |
| 0x24 | 0x5011 |
| 0x25 | 0x5012 |
| 0x26 | 0x5012 |
| 0x27 | 0x5013 |
| 0x28 | 0x5013 |
| 0x29 | 0x5030 |
| 0x2A | 0x5031 |
| 0x2B | 0x5032 |
| 0x2C | 0x5033 |
| 0x2D | 0x5034 |
| 0x2E | 0x5035 |
| 0x2F | 0x5036 |
| 0x30 | 0x5040 |
| 0x31 | 0x5041 |
| 0x32 | 0x5041 |
| 0x33 | 0x5042 |
| 0x34 | 0x5042 |
| 0x35 | 0x5043 |
| 0x36 | 0x5043 |
| 0x37 | 0x5044 |
| 0x38 | 0x5044 |
| 0x39 | 0x5045 |
| 0x3A | 0x5046 |
| 0x3B | 0x5046 |
| 0x3C | 0x5047 |
| 0x3D | 0x5048 |
| 0x3E | 0x5049 |
| 0x3F | 0x5049 |
| 0x40 | 0x504A |
| 0x41 | 0x504A |
| 0x42 | 0x5088 |
| 0x43 | 0x5083 |
| 0x44 | 0x5089 |
| 0x45 | 0x5081 |
| 0x46 | 0x5086 |
| 0x47 | 0x5087 |
| 0x48 | 0x5082 |
| 0x49 | 0x50A0 |
| 0x4A | 0x50A1 |
| 0x4B | 0x50A2 |
| 0x4C | 0x50A3 |
| 0x4D | 0x5023 |
| 0x4E | 0x5063 |
| 0x4F | 0x5053 |
| 0x50 | 0x50AA |
| 0x51 | 0x50A7 |
| 0x52 | 0x50A8 |
| 0x53 | 0x50A6 |
| 0X?? | ERROR_UNKNOWN |

### ERSTELLER

| ASCII | NAME |
| --- | --- |
| 0 | Vorbelegung ZF TE-H |
| 1 | Wiest ZF ES32 |
| 2 | Zwingenberger ZF ES32 |
| 3 | Buohlert ZF ES32 |
| 4 | Zimmermann ZF ES32 |
| 5 | Cueppers ZF ES32 |
| 6 | Bader ZF ES22 |
| A | Steinke BMW EA-71 |
| B | Mischnik BMW EA-71 |
| C | Noack BMW EA-71 |
| D | Schmeling BMW EA-71 |
| E | Smirnow BMW EA-71 |
| F | Boeker BMW EA-71 |
| G | Daieff BMW EA-71 |
| H | Meyer BMW EA-71 |
| I | Burkhardt BMW EA-71 |
| 0x?? | ERROR_UNKNOWN |

### FARTRBBMW

| RB | BMW |
| --- | --- |
| 0x00 | 0x00 |
| 0x01 | 0x08 |
| 0x02 | 0x01 |
| 0x03 | 0x02 |
| 0x04 | 0x04 |
| 0x05 | 0x00 |
| 0x06 | 0x00 |
| 0x07 | 0x01 |
| 0x08 | 0x02 |
| 0x09 | 0x00 |
| 0x0A | 0x00 |
| 0x0B | 0x00 |
| 0x?? | ERROR_UNKNOWN |

### JOBRESULTEXTENDED

| SB |  STATUS_TEXT |
| --- | --- |
| 0XXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5001 | EDS 1 |
| 0x5002 | EDS 2 |
| 0x5003 | EDS 3 |
| 0x5004 | EDS 4 |
| 0x5005 | EDS 5 |
| 0x5006 | EDS 6 |
| 0x5010 | MV 1 |
| 0x5011 | MV 2 |
| 0x5012 | MV 3 |
| 0x5013 | MV 4 |
| 0x5020 | N_Abtrieb |
| 0x5021 | N_Turbine |
| 0x5022 | Getriebeoeltemperatursensor |
| 0x5023 | Substrattemperatursensor |
| 0x5030 | Symptom Gangueberwachung |
| 0x5031 | Gangueberwachung 1 |
| 0x5032 | Gangueberwachung 2 |
| 0x5033 | Gangueberwachung 3 |
| 0x5034 | Gangueberwachung 4 |
| 0x5035 | Gangueberwachung 5 |
| 0x5036 | Gangueberwachung 6 |
| 0x503d | Oelalterungsschwelle |
| 0x503f | WK fehlerhaft geoeffnet |
| 0x5040 | Symptom Schaltungsueberwachung |
| 0x5041 | Schaltungsueberwachung 12 |
| 0x5042 | Schaltungsueberwachung 23 |
| 0x5043 | Schaltungsueberwachung 34 |
| 0x5044 | Schaltungsueberwachung 45 |
| 0x5045 | Schaltungsueberwachung 56 |
| 0x5046 | Schaltungsueberwachung 21 |
| 0x5047 | Schaltungsueberwachung 32 |
| 0x5048 | Schaltungsueberwachung 43 |
| 0x5049 | Schaltungsueberwachung 54 |
| 0x504A | Schaltungsueberwachung 65 |
| 0x5050 | Interner Fehler EPROM |
| 0x5051 | Interner Fehler EEPROM |
| 0x5052 | Interner Fehler Watchdog |
| 0x5053 | Interner Fehler VRAM |
| 0x5060 | Batteriespannung |
| 0x5062 | Druckregler/Magnetventil Versorgungsspannung |
| 0x5063 | Sensorversorgungsspannung |
| 0x5080 | Ueberwachung CAN-Bus |
| 0x5081 | CAN Timeout DME |
| 0x5082 | CAN Timeout DSC |
| 0x5083 | CAN Timeout Kombi |
| 0x5086 | CAN Timeout ACC |
| 0x5087 | CAN Timeout CAS |
| 0x5088 | CAN Timeout EMF |
| 0x5089 | CAN Timeout SSV |
| 0x5090 | CAN Stand-Fehler  |
| 0x5091 | CAN Momentenschnittstelle |
| 0x5096 | CAN Motordrehzahl |
| 0x50A0 | CAN Timeout SZL |
| 0x50A1 | Serielle Leitung Timeout |
| 0x50A2 | SZL Positionsinfo CAN |
| 0x50A3 | SZL Positionsinfo serielle Ltg. |
| 0x50A4 | Doppelfehler Positionsinfo CAN SZL |
| 0x50A5 | Parksperrensensoren unplausibel |
| 0x50A6 | CAN SZL P-Taster Fehler  |
| 0x50A7 | Parksperre fehlerhaft eingelegt |
| 0x50A8 | Parksperre fehlerhaft ausgelegt |
| 0x50A9 | CAN Schluessel-Steckt |
| 0x50AA | Fehler Steptronic |
| 0x50B0 | Doppelfehler Ersatzfunktion |
| 0x50B1 | Fehler KFC_EGSOFF |
| 0x???? | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x5001 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x5002 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x5003 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x5004 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x5005 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x5006 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x5010 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x5011 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x5012 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x5013 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x5020 | sgt_Gear0 | 0x01 | 0x04 | 0x0E |
| 0x5021 | sgt_Gear0 | 0x01 | 0x04 | 0x05 |
| 0x5022 | 0x04 | 0x05 | 0x06 | 0x03 |
| 0x5023 | 0x04 | 0x05 | 0x01 | 0x03 |
| 0x5030 | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x5031 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5032 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5033 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5034 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5035 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5036 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x503D | 0x01 | 0x01 | 0x01 | 0x01 |
| 0x503F | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x5040 | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x5041 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5042 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5043 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5044 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5045 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5046 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5047 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5048 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5049 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x504A | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x5050 | 0x01 | 0xFE | 0x04 | 0x04 |
| 0x5051 | 0x01 | 0xFE | 0x04 | 0x04 |
| 0x5052 | 0x01 | 0xFE | 0x04 | 0x04 |
| 0x5053 | 0xFE | 0xFE | 0xFE | 0xFE |
| 0x5060 | 0x04 | 0x05 | 0x01 | 0x03 |
| 0x5062 | 0x04 | 0x05 | 0x01 | 0x03 |
| 0x5063 | 0x04 | 0x05 | 0x01 | 0x03 |
| 0x5080 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5081 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5082 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5083 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5086 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5087 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5088 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5089 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5090 | 0x0C | 0x04 | 0x01 | 0x0D |
| 0x5091 | 0x0D | 0x05 | 0x08 | 0x04 |
| 0x5096 | 0x0D | 0x0B | 0x08 | 0x04 |
| 0x50A0 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x50A1 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x50A2 | 0x0C | 0x04 | 0xFE | 0xFE |
| 0x50A3 | 0x0C | 0x04 | 0xFE | 0xFE |
| 0x50A4 | sgt_Inp0 | 0x04 | 0x01 | 0x05 |
| 0x50A5 | sgt_Inp0 | 0x04 | 0x01 | 0x05 |
| 0x50A6 | sgt_Sig3 | 0x04 | 0xFE | 0xFE |
| 0x50A7 | sgt_sig0 | sgt_Inp0 | 0x01 | 0x05 |
| 0x50A8 | sgt_sig0 | sgt_Inp0 | 0x01 | 0x05 |
| 0x50A9 | 0x04 | 0x04 | 0x0C | 0x0C |
| 0x50AA | sgt_Inp0 | 0x04 | 0x05 | 0xFE |
| 0x50B0 | 0xFE | 0xFE | 0xFE | 0xFE |
| 0x50B1 | 0xFE | 0xFE | 0xFE | 0xFE |
| default | 0xFF | 0xFF | 0xFF | 0xFF |

### SGT_OUT0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x22 | 0x23 | 0x24 | 0x25 | 0x26 |

### SGT_INP0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x30 | 0x31 | 0x32 | 0x33 | 0x34 | 0x35 | 0x36 |

### SGT_GEAR0

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x20 | 0x21 |

### SGT_SIG0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x40 | 0x41 | 0x42 | 0x43 | 0x44 |

### SGT_SIG1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x50 | 0x51 | 0x52 | 0x53 |

### SGT_SIG2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x60 | 0x61 | 0x62 | 0x63 | 0x64 | 0x65 |

### SGT_SIG3

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x70 | 0x71 | 0x72 | 0x73 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Getriebeoeltemperatur | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x02 | Versorgungsspannung DR/MV | Volt | - | unsigned char | - | 0.08 | 1 | 0 |
| 0x03 | Abbtriebsdrehzahl | 1/min | - | unsigned char | - | 32 | 1 | 0 |
| 0x04 | Batteriespannung | Volt | - | unsigned char | - | 0.08 | 1 | 0 |
| 0x05 | Motordrehzahl | 1/min | - | unsigned char | - | 32 | 1 | 0 |
| 0x06 | Substrattemperatur | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x07 | Turbinendrehzahl | 1/min | - | unsigned char | - | 32 | 1 | 0 |
| 0x08 | Motortemperatur | Grad C | - | unsigned char | - | 1 | 1 | -48 |
| 0x0A | Sollmoment Motoreingriff | Nm | - | unsigned char | - | 4 | 1 | 0 |
| 0x0B | Motoristmoment | Nm | - | unsigned char | - | 4 | 1 | 0 |
| 0x0C | Zeit Reset | min | - | unsigned char | - | 1 | 1 | 0 |
| 0x0D | rcn_Stand | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x0E | Mittl. Radgeschw. ang. | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x0F | Mittl. Radgeschw. nicht ang. | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x10 | Mittl. Radgeschw. alle Raeder | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x20 | Zustand WK | 0-n | - | 0x60 | WK_TAB | - | - | - |
| 0x21 | Schaltart | 0-n | - | 0x1F | SA_TAB | - | - | - |
| 0x22 | Sollzustand M1 (0/1 aus/an) | 0/1 | - | 0x80 | - | - | - | - |
| 0x23 | Sollzustand M2 (0/1 aus/an) | 0/1 | - | 0x40 | - | - | - | - |
| 0x24 | Sollzustand M3 (0/1 kein Peak/Peak) | 0/1 | - | 0x20 | - | - | - | - |
| 0x25 | Sollzustand M3 (0/1 kein Hold/Hold) | 0/1 | - | 0x10 | - | - | - | - |
| 0x26 | Sollzustand M4 (0/1 aus/an) | 0/1 | - | 0x08 | - | - | - | - |
| 0x30 | Pegel an L1 Pin (0/1 low/high) | 0/1 | - | 0x80 | - | - | - | - |
| 0x31 | Pegel an L2 Pin (0/1 low/high) | 0/1 | - | 0x40 | - | - | - | - |
| 0x32 | Pegel an L3 Pin (0/1 low/high) | 0/1 | - | 0x20 | - | - | - | - |
| 0x33 | Pegel an L4 Pin ((0/1 low/high) | 0/1 | - | 0x10 | - | - | - | - |
| 0x34 | Pegel an Tip+ Pin (0/1 low/high) | 0/1 | - | 0x08 | - | - | - | - |
| 0x35 | Pegel an Tip- Pin (0/1 low/high) | 0/1 | - | 0x04 | - | - | - | - |
| 0x36 | Pegel an M-Gassen Pin (0/1 low/high) | 0/1 | - | 0x02 | - | - | - | - |
| 0x40 | Status Getriebeoeltemp.  (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x41 | Status Parksperrensensor (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x42 | Status Positionssensor   (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x43 | Status Turbinendrehzahl  (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x44 | Status Abtriebsdrehzahl  (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x50 | Status Motordrehzahl     (0=iO, 1=F/ES) | 0/1 | - | 0x80 | - | - | - | - |
| 0x51 | Status Drosselklappe     (0=iO, 1=F/ES) | 0/1 | - | 0x40 | - | - | - | - |
| 0x52 | Status Parksperrenanf.   (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x53 | Status Moment 1 (MMM)    (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x60 | Status Bremssignal       (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x61 | Status Drehrichtung | 0/1 | - | 0x10 | - | - | - | - |
| 0x62 | Status Radgeschw HL      (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x63 | Status Radgeschw HR      (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x64 | Status Radgeschw VL      (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x65 | Status Radgeschw VR      (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x70 | Status S-Taster CAN      (0=iO, 1=F/ES) | 0/1 | - | 0x80 | - | - | - | - |
| 0x71 | Status Tip-Taster CAN    (0=iO, 1=F/ES) | 0/1 | - | 0x40 | - | - | - | - |
| 0x72 | Status Position ser. Ltg (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x73 | Status Position CAN      (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0xFE | nicht definiert | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xFF | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte UW | 1 | - | unsigned char | - | 1 | 1 | 0 |

### WK_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Wandlerkupplung offen |
| 0x20 | Wandlerkupplung geregelt |
| 0x40 | Wandlerkupplung zu |
| 0xXY | Wandlerkupplung unplausibel |

### SA_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Schaltart nicht definiert |
| 0x01 | Schaltart 1 nach 1 |
| 0x02 | Schaltart 2 nach 2 |
| 0x03 | Schaltart 3 nach 3 |
| 0x04 | Schaltart 4 nach 4 |
| 0x05 | Schaltart 5 nach 5 |
| 0x06 | Schaltart 6 nach 6 |
| 0x07 | Schaltart R nach R |
| 0x0A | Schaltart 1 nach 2 |
| 0x0B | Schaltart 2 nach 3 |
| 0x0C | Schaltart 3 nach 4 |
| 0x0D | Schaltart 4 nach 5 |
| 0x0E | Schaltart 5 nach 6 |
| 0x11 | Schaltart 2 nach 1 |
| 0x12 | Schaltart 3 nach 2 |
| 0x13 | Schaltart 4 nach 3 |
| 0x14 | Schaltart 5 nach 4 |
| 0x15 | Schaltart 6 nach 5 |
| 0x16 | Schaltart 3 nach 1 |
| 0x17 | Schaltart 4 nach 2 |
| 0x18 | Schaltart 5 nach 3 |
| 0x19 | Schaltart 6 nach 4 |
| 0x1A | Schaltart  P/N nach D |
| 0x1B | Schaltart  P/N nach R |
| 0xXY | Schaltart unplausibel |

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
| ?8A? | ERROR_LARGE_UIF_FOUND |
| ?8B? | ERROR_SMALL_UIF_FOUND |
| ?8C? | ERROR_NO_FREE_UIF |
| ?8D? | ERROR_MAX_UIF |
| ?8E? | ERROR_LEVEL |
| ?8F? | ERROR_KEY |
| ?90? | ERROR_AUTHENTICATION |
| ?91? | ERROR_FLASH_SIGNATURE_METHOD |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

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
| 0x28 | BERU (DODUCO) |
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

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
| true | 1 |
| false | 0 |
| 1 | 1 |
| 0 | 0 |

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

### SPEICHERSEGMENT

| SEG_BYTE | SEG_NAME | SEG_TEXT |
| --- | --- | --- |
| 0x00 | LAR | linearAdressRange |
| 0x01 | ROMI | ROM / EPROM, internal |
| 0x02 | ROMX | ROM / EPROM, external |
| 0x03 | NVRAM | NV-RAM (characteristic zones, DTC memory |
| 0x04 | RAMIS | RAM, internal (short MOV) |
| 0x05 | RAMXX | RAM, external (x data MOV) |
| 0x06 | FLASH | Flash EPROM |
| 0x07 | UIFM | User Info Field Memory |
| 0x0B | RAMIL | RAM, internal (long MOV / Register) |
| 0xFF | ??? | unbekanntes Speichersegment |
