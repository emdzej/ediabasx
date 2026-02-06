# 00swtkwp.prg

## General

|  |  |
| --- | --- |
| File | 00swtkwp.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 5 |
| Origin | BMW TI-533 Mark |
| Revision | 2.12 |
| Author | Secunet AG Karger(sk) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Spezial SGBD nur für SWT SG's |  |  |
| ORIGIN | string | BMW TI-533 Mark |  |  |
| REVISION | string | 2.12 |  |  |
| AUTHOR | string | Secunet AG Karger(sk) |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.58 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### SWT_PARAMETER_LESEN

Gibt die SG-spezifischen SWT-Parameter zurück

_No arguments._

### SWT_PARAMETER_SETZEN

Setzt die SG-spezifischen SWT-Parameter

| Name | Type | Description |
| --- | --- | --- |
| SG_ADRESSE | int | Steuergeräteadresse |

### SW_ID_FUNKTIONAL_LESEN

Software ID funktional lesen, mit NVC und JNav Workaround KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F9 SWTGetFunktionsSoftwareID

_No arguments._

### SOFTWARE_ID_LESEN

Software ID lesen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F8 SWTGetSoftwareID

_No arguments._

### SOFTWARE_SIGNATURE_LESEN

Software Signature im SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F7 SWTGetSigSID

_No arguments._

### STATUS_LESEN

Freischaltstatus einer Software lesen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F6 SWTGetStatus

_No arguments._

### ZERTIFIKAT_PRUEFEN

SigS-& FSCS- Zertifikat prüfen KWP2000:        $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F5 SWTCheckCert

| Name | Type | Description |
| --- | --- | --- |
| ZERTIFIKAT_TYP | string | SigS oder FSCS |
| SW_ID | string | string hex Format 4 Bytes |

### ZERTIFIKAT_LAENGE_LESEN

Lesen die Zertifikatlaenge im SG KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F4 SWTGetCertLength

| Name | Type | Description |
| --- | --- | --- |
| ZERTIFIKAT_TYP | string | "SigS" oder "FSCS" oder "Root" |
| SW_ID | string | string hex Format 4 Bytes |

### ZERTIFIKAT_LESEN

Lesen das Zertifikat im SG KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F3 SWTGetCert

| Name | Type | Description |
| --- | --- | --- |
| ZERTIFIKAT_TYP | string | "SigS" oder "FSCS" oder "Root" |
| TELEGRAMM_INDEX_AUFTRAG | unsigned int | 1 Byte Index des Telegramms, das an dem SG gesendet wird |
| CALL_ID | unsigned int | 2 Bytes: ID Nummer bei SG geliefert verbindet die 2 Funktionen $F4 und $F3 |

### FREISCHALTCODE_LAENGE_SCHREIBEN

Freischaltcode einer Software in dem SG einbrechen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F2 SWTSetFSCLength

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |
| FSC_LAENGE | unsigned int | 2 Bytes |

### FREISCHALTCODE_SCHREIBEN

Freischaltcode einer Software in dem SG einbrechen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F1 SWTStoreFSC

| Name | Type | Description |
| --- | --- | --- |
| FREISCHALTCODE | binary | 1023 Maxi Das erste Byte stellt den Index des gesendeten Telegramms dar  Die zwei naechsten Bytes stellen die CALL_ID dar und werden im data Format eingetragen ID Nummer bei SG geliefert verbindet die 2 Funktionen $F2 und $F1 |

### ZERTIFIKAT_LAENGE_SCHREIBEN

Zertifikat einer Software in das SG einschreiben KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $F0 SWTSetCertLength

| Name | Type | Description |
| --- | --- | --- |
| ZERTIFIKAT_TYP | string | 'SigS' oder 'FSCS' |
| FSCS_ZERT_LAENGE | unsigned int | Laenge des Zertifikats in Bytes |
| SW_ID | string | String hex Format 4 Bytes |

### ZERTIFIKAT_SCHREIBEN

Zertifikat einer Software in das SG einschreiben KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $EF SWTStoreCert

| Name | Type | Description |
| --- | --- | --- |
| ZERTIFIKAT | binary | 1023 Maxi Das erste Byte stellt den Index des gesendeten Telegramms dar  Die zwei naechste Byte stellen das Zertifikat_ID dar und werden im data Format eingetragen Die CALL_ID Nummer bei SG geliefert verbindet die 2 Funktionen $F0 und $EF dann fängt das Zertifikat an |

### FREISCHALTCODE_PRUEFEN

Freischaltcode nach dem Einspielen prüfen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $EE SWTCheckFSC

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |

### FREISCHALTCODE_STORNIEREN

Freischaltcode als ungültig/storniert kennzeichnen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $ED SWTDisableFSC

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |

### FREISCHALTCODE_LAENGE_LESEN

Freischaltcode laenge lesen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $EC SWTGetFSCLength

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |

### FREISCHALTCODE_LESEN

Freischaltcode lesen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $EB SWTGetFSC

| Name | Type | Description |
| --- | --- | --- |
| TELEGRAMM_INDEX_AUFTRAG | unsigned int | 1 Byte Index des Telegramms, das an dem SG gesendet wird |
| CALL_ID | unsigned int | ID Nummer an das SG gesendet verbindet die 2 Funktionen $EC und $EB |

### PERIODISCHE_PRUEFUNG

Zertifikate, FSCs und SWSignaturen regelmässig prüfen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $EA SWTPeriodicalChecks

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |

### FINGER_PRINT_MECHANISMUS

Finger Print Mechanismus KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $E9 SWTFingerPrintCheck

_No arguments._

### ZEIT_LESEN

Uhrzeit im Steuergeraet lesen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $E8 SWTGetTime

_No arguments._

### ZEIT_SCHREIBEN

Uhrzeit im Steuergeraet schreiben KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $E7 SWTSetTime

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | string | Direkt hintereinander schreiben 13 oder 17 Stellen 13 => XX...XXZ 17 = >XX...XX+XXXX 17 => XX...XX-XXXX |

### FAHRGESTELLNUMMER_LESEN

FGN lesen im Steuergeraet KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $E6 SWTGetFZG

_No arguments._

### FAHRGESTELLNUMMER_SCHREIBEN

FGN schreiben im Steuergeraet KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $E5 SWTSetFZG

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer 17 Bytes oder 7 Bytes |

### KEYFAKTOR_LAENGE_LESEN

Keyfaktor laenge lesen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $E4 SWTGetKeyfactorLength

_No arguments._

### KEYFAKTOR_LESEN

Key faktor lesen KWP2000: $31 StartRoutineByLocalIdentifier $1F SweepingTechnologies $E3 SWTGetKF

| Name | Type | Description |
| --- | --- | --- |
| TELEGRAMM_INDEX_AUFTRAG | unsigned int | 1 Byte Index des Telegramms, das an dem SG gesendet wird |
| CALL_ID | unsigned int | ID Nummer an das SG gesendet verbindet die 2 Funktionen $EC und $EB |

### getCertificate4fscClassic

Liefern eines passenden Zertifikates zu einem Freischaltcode

| Name | Type | Description |
| --- | --- | --- |
| FSC | binary | Freischaltcode zu dem das Zertifikat geliefert werden soll |

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

### FLASH_ZEITEN_LESEN

Auslesen der Flash Loeschzeit, Signaturtestzeit, Authentisierberechnungszeit und Resetzeit KWP2000: $22   ReadDataByCommonIdentifier $2501 Zeiten Modus  : Default

_No arguments._

### SERIENNUMMER_LESEN

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### STEUERGERAETE_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x10 | D-CAN |
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
| ?81? | ERROR_VEHICLE_IDENTIFICATION_NR |
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

### AUTHENTISIERUNG

| AUTH_NR | AUTH_TEXT |
| --- | --- |
| 0x01 | Simple |
| 0x02 | Symetrisch |
| 0x03 | Asymetrisch |
| 0xFF | Keine |

### SWTSTATUSTAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | NICHT_VORHANDEN |
| 0x01 | EINGESPIELT |
| 0x02 | AKZEPTIERT |
| 0x03 | ABGELEHNT |
| 0x04 | STORNIERT |
| 0xXY | ERROR_ECU_UNKNOWN_STATUS_RESPONSE |

### SWTFEHLER_TAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED__INVALID_FORMAT |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0x23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0x31 | UNZULAESSIGER_WERTEBEREICH |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED__SECURITY_ACCESS_REQUESTED |
| 0x72 | ERROR_ECU_TRANSFER_ABORTED |
| 0xCC | SCHLUESSELABLEITUNG_NICHT_AKTIVIERT |
| 0xCD | KEYFAKTOR_NICHT_VORHANDEN |
| 0xCE | FSC_NICHT_MASKIERT |
| 0xCF | FSC_MASKIERT |
| 0xD0 | FSC_ERWEITERUNG_PRUEFUNG_SCHLUG_FEHL |
| 0xD1 | FSC_UNGUELTIG |
| 0xD2 | FGN_ZUGRIFF_FEHLGESCHLAGEN |
| 0xD3 | KEIN_SPEICHERPLATZ_MEHR_VORHANDEN |
| 0xD4 | FALSCHER_ZERTIFIKATSINHALT_UNBEKANNTES_CRIT-ELEMENT |
| 0xD5 | FALSCHER_FSC_INHALT |
| 0xD6 | FALSCHE_PARAMETER |
| 0xD7 | FSCS_ZERTIFIKAT_ABGELEHNT |
| 0xD8 | KEINE_DATEN_ZU_ANGEGEBENEM_SG_VORHANDEN |
| 0xD9 | KEINE_AUTHENTISIERUNG |
| 0xDA | FINGER_PRINT_MECHANISMUS_NOT_OK |
| 0xDB | SIGS_ID_UND_ZERTIFIKAT_PASSEN_NICHT_ZUSAMMEN |
| 0xDC | GUELTIGKEITS_PRUEFUNG_SCHLUG_FEHL |
| 0xDD | FAHRGESTELLNUMMER_FEHLERHAFT |
| 0xDE | FGN_PRUEFUNG_SCHLUG_FEHL |
| 0xDF | FLASH_LESEFEHLER |
| 0xE0 | FLASH_SCHREIBFEHLER |
| 0xE1 | FALSCHER_ZERTIFIKATSINHALT_KEY_USAGE |
| 0xE2 | FALSCHER_ZERTIFIKATSINHALT_ISSUER |
| 0xE3 | FALSCHER_ZERTIFIKATSINHALT_VALIDITY |
| 0xE4 | FSCS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE5 | FSCS_ZERTIFIKAT_UNGUELTIG |
| 0xE6 | FSCS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xE7 | FSCS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xE8 | SIGS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE9 | SIGS_ZERTIFIKAT_UNGUELTIG |
| 0xEA | SIGS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xEB | SIGS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xEC | ROOT_ZERTIFIKAT_UNGUELTIG |
| 0xED | ROOT_ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xEE | ROOT_ZERTIFIKAT_FEHLERHAFT |
| 0xEF | ROOT_ZERTIFIKAT_NICHT_LESBAR |
| 0xF0 | ROOT_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF1 | ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xF2 | ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF3 | FSC_PRUEFUNG_SCHLUG_FEHL |
| 0xF4 | FSC_STORNIERT |
| 0xF5 | FSC_STATUS_ABGELEHNT |
| 0xF6 | FSC_NICHT_VORHANDEN |
| 0xF7 | FALSCHE_FSCS_ID_IM_FSC |
| 0xF8 | UNGUELTIGES_FSC_ERSTELLUNGSDDATUM |
| 0xF9 | SIGNATUR_PRUEFUNG_SCHLUG_FEHL |
| 0xFA | SW_SIGNATURPRUEFUNG_SCHLUG_FEHL |
| 0xFB | SW_SIG_STATUS_ABGELEHNT |
| 0xFC | SW_ID_PRUEFUNG_SCHLUG_FEHL |
| 0xFD | SW_NICHT_AKTIVIERT |
| 0xFE | SW_NICHT_EINGESPIELT |
| 0xFF | UNBEKANNTER_FEHLER |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |
