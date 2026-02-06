# DSC_MK60.prg

## General

|  |  |
| --- | --- |
| File | DSC_MK60.prg |
| Type | PRG |
| Jobs | 64 |
| Tables | 15 |
| Origin | BMW EF-73 Kusch |
| Revision | 1.15 |
| Author | BMW EF-73 Kusch, BMW TI-433 Pollmann |
| ECU Comment | Version Conti_Teves MK60 DSC3 E46(ASC/DSC), R50(ABS/ASC/DSC), E85 DSC |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitaets Control DSC E46,R50,E85 |  |  |
| ORIGIN | string | BMW EF-73 Kusch |  |  |
| REVISION | string | 1.15 |  |  |
| AUTHOR | string | BMW EF-73 Kusch, BMW TI-433 Pollmann |  |  |
| COMMENT | string | Version Conti_Teves MK60 DSC3 E46(ASC/DSC), R50(ABS/ASC/DSC), E85 DSC |  |  |
| PACKAGE | string | 1.03 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer SG automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### IDENT

KWP2000: $1A $80 ReadECUIdentification Auslesen der Ident-Daten des Steuergeraetes

_No arguments._

### FS_LOESCHEN

KWP2000: $14 ClearDiagnosticInformation Fehlerspeicher loeschen Job DIAGNOSE_MODE ist integriert

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus    : Default

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### DIAGNOSE_MODE

Starten eines Diagnose-Modus

_No arguments._

### DIAGNOSE_ENDE

Stop des aktuellen Diagnose-Modus

_No arguments._

### DIAGNOSE_WEITER

_No description._

_No arguments._

### SEED

Status Eingaenge ASC_MK20

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### IDENT_PRODUCTION_DATA

KWP2000: $1A,$8F ReadECUIdentification Ident-Daten des SG ...

_No arguments._

### IDENT_VIN

KWP2000: $1A,$90 ReadECUIdentification Ident-Daten des SG ...

_No arguments._

### IDENT_TEVES_ECU_SW_NR

KWP2000: $1A,$94 ReadECUIdentification Ident-Daten des SG ...

_No arguments._

### IDENT_PROGRAMMING_DATE

KWP2000: $1A,$99 ReadECUIdentification Ident-Daten des SG ...

_No arguments._

### STATUS_RADGESCHWINDIGKEIT

KWP2000: $21,$07 ReadDataByLocalIdentifier service Radgeschwindigkeiten auslesen

_No arguments._

### STATUS_SCHALTER

KWP2000: $21,$05 ReadDataByLocalIdentifier service

_No arguments._

### STATUS_SENSOREN

KWP2000: $21,$06 ReadDataByLocalIdentifier service

_No arguments._

### STATUS_SENSOREN_OFFSET

KWP2000: $21,$02 ReadDataByLocalIdentifier service

_No arguments._

### DRUCKSENSOR_DSC_ABGLEICHEN

KWP2000: $31,$20 StartRoutineByLocalIdentifier service

_No arguments._

### LENKWINKEL_DSC_ABGLEICHEN

KWP2000: $31,$21 StartRoutineByLocalIdentifier service

_No arguments._

### QUERBESCHLEUNIGUNG_DSC_ABGLEICHEN

KWP2000: $31,$22 StartRoutineByLocalIdentifier service

_No arguments._

### BET_AKTIV

Bandendetest aktivieren KWP2000: $31 StartRoutineByLocalIdentifier service $23 BET BET_AKTIV beinhaltet den Job DIAGNOSE_MODE

_No arguments._

### BET_PASSIV

Bandendetest passiv schalten KWP2000: $31 StartRoutineByLocalIdentifier service $23 BET BET_PASSIV beinhaltet den Job DIAGNOSE_MODE

_No arguments._

### STEUERN_DIGITAL

KWP2000:$30,$10,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern Parameterliste: (mit Strichpunkt getrennt) E or W EVVL AVVL EVVR AVVR EVHL AVHL EVHR AVHR PUMPE SV1 SV2 EUV1 EUV2

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |
| ORT8 | string | gewuenschte Komponente 8 |
| ORT9 | string | gewuenschte Komponente 9 |
| ORT10 | string | gewuenschte Komponente 10 |
| ORT11 | string | gewuenschte Komponente 11 |
| ORT12 | string | gewuenschte Komponente 12 |
| ORT13 | string | gewuenschte Komponente 13 |

### STEUERN_DIGITAL_WARNLAMPEN

KWP2000:$30,$20,$07 InputOutputControlByLocalIdentifier service Ansteuerung Warnlampen ueber CAN Parameterliste: E or W,

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |

### STEUERN_ANALOG_CAN_MSR

KWP2000: $30,$30,$07 InputOutputControlByLocalIdentifier service Ansteuern MSR ueber CAN Parameterliste: E or W,MD_MSR (0 ...100)%

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| MD_MSR | int | gewuenschter wert in % |

### STEUERN_ANALOG_CAN_ASC_LM

KWP2000: $30,$30,$07 InputOutputControlByLocalIdentifier service Ansteuern MSR ueber CAN Parameterliste: E or W,MD_ASC (0 ...100)%, MD_LM (0 ...100)%

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| MD_ASC | int | gewuenschter wert in % |
| MD_LM | int | gewuenschter wert in % |

### NA_ENTLUEFTUNG_RE

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### NA_ENTLUEFTUNG_LI

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### R50_ASC_DSC_BLEEDMASTER_FA

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### R50_ASC_DSC_BLEEDMASTER_RA

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### R50_ABS_BLEEDMASTER_FA

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### R50_ABS_BLEEDMASTER_RA

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### COD_LESEN

Auslesen der Codierdaten KWP2000: $22 ReadDataByCommonIdentifier $3000 Codierdaten lesen Modus    : Default

_No arguments._

### COD_SCHREIBEN

KWP2000: $2E WriteDataByCommonIdentifier $3000 Codierdaten schreiben Es muessen 14 Codierdaten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 14 die CS wird automatisch berechnet Job DIAGNOSE_MODE ist integriert

| Name | Type | Description |
| --- | --- | --- |
| C_BYTES | string | Bereich: 0-255 bzw. 0x00-0xFF |

### IDENT_SCHREIBEN_18_Bytes

KWP2000: $3B WriteDataByLocalIdentifier $80 BMW Identifikation schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 18 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### IDENT_SCHREIBEN_29_Bytes

KWP2000: $3B WriteDataByLocalIdentifier $80 BMW Identifikation schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 29 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### IDENT_VIN_SCHREIBEN

KWP2000:$3B,$90 WriteDataByLocalIdentifier service Ident-Daten des SG schreiben

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) Es muss 1 String mit 18 Zeichen uebergeben werden das letzte Zeichen ist ein Dummy z.B. WBAAX71010JR250001 FG_NR: WBAAX71010JR25000 |

### IDENT_PROGRAMMING_DATE_SCHREIBEN

KWP2000:$3B,$99 WriteDataByLocalIdentifier service Ident-Daten des SG schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 4 Ident_Daten als ein Hex_String uebergeben werden: z.B. 19,99,12,27 Datum: 27.12.1999 Bereich:  0x00-0xFF |

### IDENT_PRODUCTION_DATA_SCHREIBEN

KWP2000:$3B,$8F WriteDataByLocalIdentifier service Ident-Daten des SG schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 12 Ident_Daten als ein Hex_String uebergeben werden: z.B. 01,02,03,04,05 ... 12 Bereich:  0x00-0xFF |

### STATUS_CAN_DME_1_LESEN

Auslesen der CAN Botschaft DME_1 KWP2000: $22 ReadDataByCommonIdentifier $0316 CAN_DDE_1 Modus    : Default

_No arguments._

### STATUS_CAN_DME_2_LESEN

Auslesen der CAN Botschaft DME_2 KWP2000: $22 ReadDataByCommonIdentifier $0329 CAN_DME_2 Modus    : Default

_No arguments._

### STATUS_CAN_DME_4_LESEN

Auslesen der CAN Botschaft DME_4 KWP2000: $22 ReadDataByCommonIdentifier $0235 CAN_DME_4 Modus    : Default

_No arguments._

### STATUS_CAN_LWS_1_LESEN

Auslesen der CAN Botschaft LWS_1 KWP2000: $22 ReadDataByCommonIdentifier $01F5 CAN_LWS_1 Modus    : Default

_No arguments._

### STATUS_CAN_EGS_1_LESEN

Auslesen der CAN Botschaft EGS_1 KWP2000: $22 ReadDataByCommonIdentifier $043F CAN_EGS_1 Modus    : Default

_No arguments._

### STATUS_LESEN_RPA

_No description._

_No arguments._

### RPA_RESET

_No description._

_No arguments._

### RPA_EOL_PASSIV

_No description._

_No arguments._

### FS_LESEN_SAR

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus    : Default

_No arguments._

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

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels KWP2000: $22 ReadDataByCommonIdentifier $1000 TestStamp Modus    : Default

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus    : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### STEUERN_DIGITAL_BLS

KWP2000:$30,$10,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern Parameterliste: (mit Strichpunkt getrennt) E or W EVVL AVVL EVVR AVVR EVHL AVHL EVHR AVHR PUMPE SV1 SV2 EUV1 EUV2 BLS

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |
| ORT8 | string | gewuenschte Komponente 8 |
| ORT9 | string | gewuenschte Komponente 9 |
| ORT10 | string | gewuenschte Komponente 10 |
| ORT11 | string | gewuenschte Komponente 11 |
| ORT12 | string | gewuenschte Komponente 12 |
| ORT13 | string | gewuenschte Komponente 13 |

### VAKUUM

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### VAKUUM_PUMPE

Steuern_Digital ansteuern u. ruecksetzen Job DIAGNOSE_MODE ist integriert

_No arguments._

### STEUERN_DIGITAL_SEQ

KWP2000:$30,$10,$07 InputOutputControlByLocalIdentifier service Ventile ansteuern Parameterliste: (mit Strichpunkt getrennt) 

| Name | Type | Description |
| --- | --- | --- |
| S1 | string | gewuenschte Komponente 1 |
| S2 | string | gewuenschte Komponente 2 |
| S3 | string | gewuenschte Komponente 3 |
| S4 | string | gewuenschte Komponente 4 |
| S5 | string | gewuenschte Komponente 5 |
| S6 | string | gewuenschte Komponente 6 |

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Start-Adresse und Anzahl der Datenbytes Bsp: 0x000162 Strichpunkt 3 KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 4 ) |

### FASTA_EINSPURMODELL

Auslesen des Steuergeraete-Speichers keine Argumente erforderlich KWP 2000: $23 ReadMemoryByAddress Modus   : Default

_No arguments._

### STATUS_LWS_LI_RE_MAX

Auslesen der CAN Botschaft LWS_1 KWP2000: $22 ReadDataByCommonIdentifier $01F5 CAN_LWS_1 Job laeuft max. 16 sec: werden die Max-Werte vorher erreicht, wird der Job abgebrochen

_No arguments._

### FAKTOR_SCHREIBEN

generiert max. 4 Results (Integer) zur Weiterverarbeitung auf den ABS Pruefstaenden Musterparamentersatz:"24,100,10,200" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| FAKTOR1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| FAKTOR2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| FAKTOR3 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| FAKTOR4 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### PRUEFFLAG_SCHREIBEN

Beschreiben des 1 Bytes des Pruefstempels Es muss nur das erste Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. Byte2-3(Codierung) wird nicht ueberschrieben. KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus    : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |

## Tables

### DIAGMODE

| NR | ACCESS_NR | MODE | MODE_TEXT |
| --- | --- | --- | --- |
| 0x81 | - | DEFAULT | DefaultMode |
| 0x82 | - | PT | PeriodicTransmissions |
| 0x84 | 5 | EOLSSM | Fertigung und Service |
| 0x85 | - | ECUPM | ECUProgrammingMode |
| 0x86 | 9 | ECUDM | Entwicklung |
| 0x87 | - | ECUAM | ECUAdjustmentMode |
| 0x88 | - | ECUVCM | ECUVariantCodingMode |
| 0x89 | - | ECUSM | ECUSafetyMode |
| 0xXY | - | --- | unknown Diagnostic-Mode |

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
| 0xFF | unbekannter Hersteller |

### JOBRESULT_DS2

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5D8C | Sensor-Cluster Timeout CAN |
| 0x5D8E | falscher Sensorcluster |
| 0x5D8F | Sensorcluster Fehler intern |
| 0x5D96 | Sensor-Cluster CAN Bus-Off |
| 0x5D97 | Sensorcluster Versorgungsspannung ausserhalb gueltigem Bereich |
| 0x5D99 | Sensor-Cluster CAN Fehler |
| 0x5D90 | Drehzahlfuehler vorne links elektrisch defekt |
| 0x5D91 | Drehzahlfuehler vorne links Extrapolation |
| 0x5D92 | Drehzahlfuehler Impulsrad vorne links periodische Ueberwachung |
| 0x5D93 | Drehzahlfuehler vorne links Anfahrerkennung v_Vergleich |
| 0x5D94 | Drehzahlfuehler vorne links Langzeitueberwachung |
| 0x5D95 | Drehzahlfuehler vorne links Check auf doppelte Impulsradfrequenz |
| 0x5DA0 | Drehzahlfuehler vorne rechts elektrisch defekt |
| 0x5DA1 | Drehzahlfuehler vorne rechts Extrapolation |
| 0x5DA2 | Drehzahlfuehler Impulsrad vorne rechts periodische Ueberwachung |
| 0x5DA3 | Drehzahlfuehler vorne rechts Anfahrerkennung v_Vergleich |
| 0x5DA4 | Drehzahlfuehler vorne rechts Langzeitueberwachung |
| 0x5DA5 | Drehzahlfuehler vorne rechts Check auf doppelte Impulsradfrequenz |
| 0x5DB0 | Drehzahlfuehler hinten links elektrisch defekt |
| 0x5DB1 | Drehzahlfuehler hinten links Extrapolation |
| 0x5DB2 | Drehzahlfuehler Impulsrad hinten links periodische Ueberwachung |
| 0x5DB3 | Drehzahlfuehler hinten links Anfahrerkennung v_Vergleich |
| 0x5DB4 | Drehzahlfuehler hinten links Langzeitueberwachung |
| 0x5DB5 | Drehzahlfuehler hinten links Check auf doppelte Impulsradfrequenz |
| 0x5DC0 | Drehzahlfuehler hinten rechts elektrisch defekt |
| 0x5DC1 | Drehzahlfuehler hinten rechts Extrapolation |
| 0x5DC2 | Drehzahlfuehler Impulsrad hinten rechts periodische Ueberwachung |
| 0x5DC3 | Drehzahlfuehler hinten rechts Anfahrerkennung v_Vergleich |
| 0x5DC4 | Drehzahlfuehler hinten rechts Langzeitueberwachung |
| 0x5DC5 | Drehzahlfuehler hinten rechts Check auf doppelte Impulsradfrequenz |
| 0x5DF0 | Pumpenmotor |
| 0x5DF2 | Ventil/ECU_Hardware Fehler,ROM/RAM_Check Fehler |
| 0x5DF4 | Bordnetzspannung < 9 Volt |
| 0x5DF5 | Steuergeraet Fehler intern |
| 0x5DF7 | Bordnetzspannung > 18 Volt |
| 0x5E00 | Bandendetest aktiv |
| 0x5E01 | Bandendetest Timeout |
| 0x5E02 | Bandendetest Gierraten Sensor Justierung Fehler |
| 0x5E03 | Bandendetest Gierraten Sensor Fehler |
| 0x5E04 | Bandendetest Querbeschleunigung Sensor Fehler |
| 0x5E05 | Bandendetest Querbeschleunigung und Gierraten Fehler |
| 0x5E06 | Bandendetest Gierraten Sensor falsch montiert |
| 0x5E07 | Bandendetest Querbeschleunigung und Gierraten Sensor falsch montiert |
| 0x5E08 | Bandendetest Lenkwinkel Sensor Fehler |
| 0x5E11 | CAN-Bus Off, Interner Fehler CAN-Controller |
| 0x5E14 | CAN Timeout DME/DDE |
| 0x5E15 | CAN Timeout EGS |
| 0x5E16 | CAN Timeout Instrumentenkombi |
| 0x5E18 | CAN DME/DDE Botschaft unplausibel |
| 0x5E19 | CAN DME/DDE, Motormoment nicht einstellbar |
| 0x5E1A | CAN DME/DDE Signal Fehler |
| 0x5E1E | CAN Timeout LWS |
| 0x5E1F | ABS/ASC/DSC: VIN nicht initialisiert, LWS-Abgleich durchfuehren |
| 0x5E20 | Druck Sensor 1 elektrisch defekt |
| 0x5E21 | Druck Sensor 2 elektrisch defekt |
| 0x5E24 | Druck Sensor 1/2 unplausibel |
| 0x5E26 | Spannungsversorgung Sensoren |
| 0x5E2F | Temperatur Sensor |
| 0x5E30 | Querbeschleunigung Sensor elektrisch defekt |
| 0x5E32 | Querbeschleunigung Sensor unplausibel |
| 0x5E38 | Gierraten Sensor elektrisch defekt |
| 0x5E3C | Gierraten Sensor unplausibel |
| 0x5E40 | Lenkwinkel Sensor Signal unplausibel,Offset |
| 0x5E43 | Lenkwinkel Sensor intern |
| 0x5E4E | DSC Sensor Offset Check |
| 0x5E4F | DSC Dauerregelung |
| 0x5E58 | ASC ECU empfaengt LWS CAN Botschaft |
| 0x5E59 | Codierfehler |
| 0x5E5B | DSC Taster laenger als 10sec gedrueckt oder Fehler |
| 0x5E5C | RPA Taster Fehler |
| 0x5E5D | Bremsfluessigkeitsniveau Schalter Fehler |
| 0x5E5E | Bremslichtschalter Fehler |
| 0x5E5F | Fehler DSC_Sport Taster am Lenkrad (nur Motorsport) |
| 0xXY | unbekannter Fehlerort |

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
| 0x22 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler wuerde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler wuerde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | DIGITAL1 | DIGITAL2 | - |

### DIGITAL1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x02 | 0x03 | 0x04 | 0x05 |

### DIGITAL2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B | 0x0C | 0x0D | 0x0E | 0x0F | 0x10 | 0x11 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x02 | Bremslichtschalter | 0/1 | - | 0x01 | - | 1 | 1 | 0 |
| 0x03 | Bremsfluessigkeitsschalter | 0/1 | - | 0x04 | - | 1 | 1 | 0 |
| 0x04 | ASC/DSC_aktiv (Tasterfunktion) | 0/1 | - | 0x08 | - | 1 | 1 | 0 |
| 0x05 | Bremsdruck erkannt | 0/1 | - | 0x20 | - | 1 | 1 | 0 |
| 0x06 | ABS-Regelung | 0/1 | high | 0x0100 | - | 1 | 1 | 0 |
| 0x07 | ASC-Regelung (BMR) | 0/1 | high | 0x0200 | - | 1 | 1 | 0 |
| 0x08 | ASC-Regelung (AMR) | 0/1 | high | 0x0400 | - | 1 | 1 | 0 |
| 0x09 | GMR-Regelung (GMR) | 0/1 | high | 0x0800 | - | 1 | 1 | 0 |
| 0x0A | GMR-Regelung (MMR) | 0/1 | high | 0x1000 | - | 1 | 1 | 0 |
| 0x0B | CBC-Regelung | 0/1 | high | 0x2000 | - | 1 | 1 | 0 |
| 0x0C | MSR-Regelung | 0/1 | high | 0x4000 | - | 1 | 1 | 0 |
| 0x0D | TDR-Regelung  | 0/1 | high | 0x8000 | - | 1 | 1 | 0 |
| 0x0E | SDR-Regelung | 0/1 | high | 0x0001 | - | 1 | 1 | 0 |
| 0x0F | DBC-Regelung | 0/1 | high | 0x0002 | - | 1 | 1 | 0 |
| 0x10 | RTA aktiv | 0/1 | high | 0x0004 | - | 1 | 1 | 0 |
| 0x11 | Run-Up Mode | 0/1 | high | 0x0008 | - | 1 | 1 | 0 |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| EVVL | 0 | 0x01 |
| AVVL | 0 | 0x02 |
| EVVR | 0 | 0x04 |
| AVVR | 0 | 0x08 |
| EVHL | 0 | 0x10 |
| AVHL | 0 | 0x20 |
| EVHR | 0 | 0x40 |
| AVHR | 0 | 0x80 |
| SV1 | 1 | 0x01 |
| SV2 | 1 | 0x02 |
| EUV1 | 1 | 0x04 |
| EUV2 | 1 | 0x08 |
| PUMPE | 1 | 0x10 |
| XYZ | 1 | 0x00 |

### WARNLAMPEN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| ABS | 0 | 0x01 |
| DSC | 0 | 0x02 |
| BWL | 0 | 0x04 |
| HBA | 0 | 0x08 |
| L_ABS | 0 | 0x0E |
| L_DSC | 0 | 0x0D |
| L_BWL | 0 | 0x0B |
| L_HBA | 0 | 0x07 |

### STEUERN_TEL

| TEL_NR | FRAME |
| --- | --- |
| S1 | B8,29,F1,05,30,10,07,00,1A |
| S2 | B8,29,F1,05,30,10,07,01,1A |
| S3 | B8,29,F1,05,30,10,07,00,15 |
| S4 | B8,29,F1,05,30,10,07,04,15 |
| S5 | B8,29,F1,05,30,10,07,54,1F |
| S6 | B8,29,F1,05,30,10,07,55,1F |
| S7 | B8,29,F1,05,30,10,07,52,1F |
| S8 | B8,29,F1,05,30,10,07,56,1F |
| S9 | B8,29,F1,05,30,10,07,45,1F |
| S10 | B8,29,F1,05,30,10,07,15,1F |
| S11 | B8,29,F1,05,30,10,07,50,0A |
| S12 | B8,29,F1,05,30,10,07,40,1A |
| S13 | B8,29,F1,05,30,10,07,10,1A |
| S14 | B8,29,F1,05,30,10,07,05,05 |
