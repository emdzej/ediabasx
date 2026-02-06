# gsf21a.prg

## General

|  |  |
| --- | --- |
| File | gsf21a.prg |
| Type | PRG |
| Jobs | 66 |
| Tables | 34 |
| Origin | BMW EA74 F.Gielisch/ S.Polter |
| Revision | 4.004 |
| Author | AWTC_EUROPE SOFTWARE_DEVELOPMENT NAUDTS, AWTC_EUROPE SOFTWARE_D |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EGS_AISIN_AW |  |  |
| ORIGIN | string | BMW EA74 F.Gielisch/ S.Polter |  |  |
| REVISION | string | 4.004 |  |  |
| AUTHOR | string | AWTC_EUROPE SOFTWARE_DEVELOPMENT NAUDTS, AWTC_EUROPE SOFTWARE_D |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.62 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

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

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

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

### DIAGNOSE_ENDE

Diagnosemode des SG beenden KWP2000: $20 StopDiagnosticSession Modus  : Default

_No arguments._

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen KWP2000: $10 StartDiagnosticSession Modus  : einstellbar mit diesem Job  Wenn MODE = "ECUPM" ( ECUProgrammingMode ) muss nach dem Job die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |
| BAUDRATE | string | optionaler Parameter fuer die gewuenschte Baudrate table BaudRate BAUD |
| SPEZIFISCHE_BAUDRATE_WERT | long | Parameter nur fuer BAUDRATE = 'SB' ( spezifische Baudrate ) |

### SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier a)       $0E Time controlled PowerDown oder b)       $05 PowerDown $00 all ECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x0E) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x05) wird aktiviert |

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

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

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### STEUERGERAETE_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

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

### STATUS_BYTE_1

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 01h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SHIFTLEV

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 14h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_ENG_SPEED

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 0Ch mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_VEHICLE_SPEED

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 13h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_REV_OUT_T_M

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 08h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_REV_IN_T_M

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 09h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_OIL_TEMP_ATF

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 0Ah mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_IG_VOLTAGE

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 0Bh mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_ENG_TORQUE

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 0Dh mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_ENG_TORQUE_DRIVER_REQUEST

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 0Eh mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_THROTTLE_POSITION

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 0Fh mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_TORQUE_CONTROL_REQUEST

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 10H mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_TORQUE_LIMIT_REQUEST

KWP2000: $21 ReadDataByLocalIdentifier  RLI =11h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_TORQUE_INCREASE_REQUEST

KWP2000: $21 ReadDataByLocalIdentifier   RLI =12h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLC1_OUT_CURRENT

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 02h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLC2_OUT_CURRENT

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 03h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLC3_OUT_CURRENT

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 04h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLT_OUT_CURRENT

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 06h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLU_OUT_CURRENT

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 07h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLB1_OUT_CURRENT

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 05h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BYTE_3

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 15h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BYTE_4

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 16h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BYTE_5

KWP2000: $21 ReadDataByLocalIdentifier RLI = 17h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BYTE_7

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 19h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_RAMDATA_READABLE

KWP2000: $21 ReadDataByLocalIdentifier  RLI = 7Fh mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_STATUS_SAFETY_AND_SUBSTITUTE_FUNCTIONS

KWP2000: $21 ReadDataByLocalIdentifier  RLI=1Ah mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BYTE_6

KWP2000: $21 ReadDataByLocalIdentifier RLI = 18h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_READ_LEARN_DATA1

KWP2000: $23 ReadDataByAddress mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_READ_LEARN_DATA2

KWP2000: $23 ReadDataByAddress mit dem SGBD-Generator erzeugt

_No arguments._

### CLEAR_MODE_COUNTERS

Clearance of all the Mode Counters KWP2000: $31 StartRoutineByLocalIdentifier LID $20 

_No arguments._

### STEUERN_ADAPTIONSWERTE_RUECKSETZEN

alle Adaptionswerte ruecksetzen KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### QUICKTEST

Anzahl Fehler / Kilometerstand KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### SPEICHER_LESEN_AISIN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes  !!! 3 address bytes instead of 4 address bytes !!!  KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment_aisin SEG_NAME |
| ADRESSE | unsigned long | 0x000000 - 0xFFFFFF (RAM variables: refer to STATUS_RBM_Tabel) |
| ANZAHL | int | 1 - n ( 254 ) |

### MODES_COUNTERS_LESEN

Status of the COUNTERs for M_MODE/ D_MODE/ SD_MODE/ MD_MODE Start_Address for the RBM job is equal to the address of STATUS_RBM_MMODE_10MS (issued from STATUS_RBM_Tabel)  KWP 2000: $23 ReadMemoryByAddress Modus   : Default

_No arguments._

### _RBM_RATIOS_AUSLESEN

RBM Inhalt ausgeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_SIGNAL_STELLGLIED

Status setzen der Signale/Stellglieder KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | string | Solenoid to be controlled S1,S2,SLC1,SLC2,SLC3,SLB1,SLT,SLU,SHIFTLOCK |
| ZUSTAND_STRING | string | ON, OFF (applicable for all solenoids) AUTOMATIC (automatic control sequence - applicable for all solenoids). This control is automatically stopped after 30sec RCTECU (ReturnControlToECU, then stop the control ongoing) |
| ZUSTAND_VALUE | int | Current treshold value for a permanent control (SLC1,SLC2,SLC3,SLB1,SLT,SLU,SHIFTLOCK) |

### STATUS_SIGNAL_STELLGLIED

Auslesen Status der Signale/Stellglieder KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | string | Solenoid considered S1,S2,SLC1,SLC2,SLC3,SLB1,SLT,SLU,SHIFTLOCK |

### DAFFILENAME_LESEN

DafFileName lesen KWP2000: $1A ReadECUIdentification $8A DAFfilename oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

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
| 0x72 | AISIN AW CO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
| 0x76 | CEL |
| 0x77 | Audio Mobil |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia Automotive GmbH |
| 0x81 | Tyco Electronics |
| 0x82 | Paragon AG |
| 0x83 | IEE S.A |
| 0x84 | TEMIC AUTOMOTIVE of NA |
| 0x85 | AKsys GmbH |
| 0x86 | META System |
| 0x87 | Hülsbeck & Fürst GmbH & Co KG |
| 0x88 | Mann & Hummel Automotive GmbH |
| 0x89 | Brose Fahrzeugteile GmbH & Co |
| 0x90 | Keihin |
| 0x91 | Vimercati S.p.A. |
| 0x92 | CRH |
| 0x93 | TPO Display Corp. |
| 0x94 | KÜSTER Automotive Control |
| 0x95 | Hitachi Automotive |
| 0x96 | Continental Automotive |
| 0x97 | TI-Automotive |
| 0x98 | Hydro |
| 0x99 | Johnson Controls |
| 0x9A | Takata- Petri |
| 0x9B | Mitsubishi Electric B.V. (Melco) |
| 0x9C | Autokabel |
| 0x9D | GKN-Driveline |
| 0x9E | Zollner Elektronik AG |
| 0x9F | PEIKER acustics GmbH |
| 0xA0 | Bosal-Oris |
| 0xA1 | Cobasys |
| 0xA2 | Lighting Reutlingen GmbH |
| 0xA3 | CONTI VDO |
| 0xA4 | ADC Automotive Distance Control Systems GmbH |
| 0xA5 | Funkwerk Dabendorf GmbH |
| 0xA6 | Lame |
| 0xA7 | Magna/Closures |
| 0xA8 | Wanyu |
| 0xA9 | Thyssen Krupp Presta |
| 0xAA | ArvinMeritor |
| 0xAB | Kongsberg Automotive GmbH |
| 0xAC | SMR Automotive Mirrors |
| 0xAD | So.Ge.Mi. |
| 0xAE | MTA |
| 0xAF | Alfmeier |
| 0xB0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0xB1 | Omron Automotive Electronics Europe Group |
| 0xB2 | ASK |
| 0xB3 | CML Innovative Technologies GmbH & Co. KG |
| 0xB4 | APAG Elektronik AG |
| 0xB5 | Nexteer Automotive World Headquarters |
| 0xB6 | Hans Widmaier |
| 0xB7 | SB LiMotive Germany GmbH |
| 0xB8 | KYOCERA Display Corporation |
| 0xB9 | MAGNA Powertrain AG & Co KG |
| 0xBA | BorgWarner |
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
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| 1 | BMW-FAST |
| 2 | KWP2000* |
| 3 | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x4E84 | S1 SOLENOID |
| 0x4E85 | S1 SOLENOID |
| 0x4E89 | S2 SOLENOID |
| 0x4E88 | S2 SOLENOID |
| 0x4E87 | SHIFT LOCK Magnet |
| 0x4E86 | SHIFT LOCK Magnet |
| 0x4E20 | LINEAR Haltemagnet ( SLT ) |
| 0x4E21 | LINEAR Haltemagnet ( SLT ) |
| 0x4E22 | LINEAR Haltemagnet ( SLT ) |
| 0x4E2A | LINEAR Haltemagnet  (SLU) |
| 0x4E2B | LINEAR Haltemagnet  (SLU) |
| 0x4E2C | LINEAR Haltemagnet  (SLU) |
| 0x4E34 | LINEAR Haltemagnet  (SLC1) |
| 0x4E35 | LINEAR Haltemagnet  (SLC1) |
| 0x4E36 | LINEAR Haltemagnet  (SLC1) |
| 0x4E3E | LINEAR Haltemagnet  (SLC2) |
| 0x4E3F | LINEAR Haltemagnet  (SLC2) |
| 0x4E40 | LINEAR Haltemagnet  (SLC2) |
| 0x4E48 | LINEAR Haltemagnet  (SLC3) |
| 0x4E49 | LINEAR Haltemagnet  (SLC3) |
| 0x4E4A | LINEAR Haltemagnet  (SLC3) |
| 0x4E52 | LINEAR Haltemagnet  (SLB1) |
| 0x4E53 | LINEAR Haltemagnet  (SLB1) |
| 0x4E54 | LINEAR Haltemagnet  (SLB1) |
| 0x4EEB | Ausgangs drehzahl sensor |
| 0x4EEC | Ausgangs drehzahl sensor |
| 0x4EED | Ausgangs drehzahl sensor |
| 0x4EE8 | Eingangs drehzal Sensor |
| 0x4EE9 | Eingangs drehzal Sensor |
| 0x4EEA | Eingangs drehzal Sensor |
| 0x5088 | INHIBITOR Schalter |
| 0x5089 | INHIBITOR Schalter |
| 0x523A | MANUALE Schaltung |
| 0x523B | MANUALE Schaltung |
| 0x4EF2 | OEL TEMPERATUR SENSOR |
| 0x4EF3 | OEL TEMPERATUR SENSOR |
| 0x4EF4 | OEL TEMPERATUR SENSOR |
| 0x5014 | Batterie Spannung |
| 0x5015 | Batterie Spannung |
| 0x4FB0 | FLASH ROM CHECK SUM |
| 0x4FB3 | RAM |
| 0x4FB1 | EEPROM |
| 0xCF07 | CAN Bus |
| 0xCF15 | CAN Bus |
| 0xCF18 | CAN Bus |
| 0xCF16 | CAN Bus |
| 0xCF2B | CAN Bus |
| 0xCF2C | CAN Bus |
| 0xCF2D | CAN Bus |
| 0x5105 | CAN Bus |
| 0xCF30 | CAN Bus |
| 0xCF31 | CAN Bus |
| 0xCF32 | CAN Bus |
| 0xCF33 | CAN Bus |
| 0xCF12 | CAN Bus |
| 0xCF13 | CAN Bus |
| 0xCF14 | CAN Bus |
| 0xCF39 | CAN Bus |
| 0xCF3A | CAN Bus |
| 0xCF3B | CAN Bus |
| 0xCF44 | CAN Bus |
| 0xCF17 | CAN Bus |
| 0xCF3C | CAN Bus |
| 0xCF3D | CAN Bus |
| 0xCF3E | CAN Bus |
| 0xCF37 | CAN Bus |
| 0xCF42 | CAN Bus |
| 0xCF43 | CAN Bus |
| 0xCF26 | CAN Bus |
| 0xCF20 | CAN Bus |
| 0xCF23 | CAN Bus |
| 0xCF21 | CAN Bus |
| 0xCF24 | CAN Bus |
| 0xCF22 | CAN Bus |
| 0xCF25 | CAN Bus |
| 0x5110 | CAN Bus |
| 0x5100 | CAN Bus |
| 0x4F90 | GEAR RATIO |
| 0x4F91 | GEAR RATIO |
| 0x4F92 | GEAR RATIO |
| 0x4F93 | GEAR RATIO |
| 0x4F94 | GEAR RATIO |
| 0x4F95 | GEAR RATIO |
| 0x4F96 | GEAR RATIO |
| 0x4F97 | GEAR RATIO |
| 0x4F81 | Neutral Bedingung |
| 0x4F83 | Neutral Bedingung |
| 0x526C | Ungewöhnlicher Schaltvorgang |
| 0x526D | Ungewöhnlicher Schaltvorgang |
| 0x526E | Ungewöhnlicher Schaltvorgang |
| 0x526F | Ungewöhnlicher Schaltvorgang |
| 0x4F9A | Neutral Ruhesteuerungsfunktion |
| 0x4F54 | Lock up Kupplung |
| 0x4F53 | Lock up Kupplung |
| 0xFFFF | Unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x4E84 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x4E85 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x4E89 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x4E88 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x4E87 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x4E86 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x4E20 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E21 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E22 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E2A | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E2B | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E2C | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E34 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E35 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E36 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E3E | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E3F | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E40 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E48 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E49 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E4A | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E52 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E53 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4E54 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4EEB | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4EEC | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4EED | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4EE8 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4EE9 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4EEA | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x5088 | 0x04 | 0x01 | 0x03 | Pin_Pattern |
| 0x5089 | 0x04 | 0x01 | 0x03 | Pin_Pattern |
| 0x523A | 0x04 | 0x01 | 0x03 | Pin_Pattern |
| 0x523B | 0x04 | 0x01 | 0x03 | Pin_Pattern |
| 0x4EF2 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x4EF3 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x4EF4 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x5014 | 0x04 | 0x01 | 0x03 | 0x10 |
| 0x5015 | 0x04 | 0x01 | 0x03 | 0x10 |
| 0x4FB0 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x4FB3 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x4FB1 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF07 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF15 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF18 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF16 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF2B | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF2C | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF2D | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x5105 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF30 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0xCF31 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0xCF32 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0xCF33 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0xCF12 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF13 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF14 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF39 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF3A | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF3B | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF44 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF17 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF3C | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF3D | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF3E | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF37 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF42 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF43 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF26 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF20 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF23 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF21 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF24 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF22 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF25 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x5110 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x5100 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x4F90 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F91 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F92 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F93 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F94 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F95 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F96 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F97 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F81 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F83 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x526C | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x526D | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x526E | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x526F | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F9A | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x4F54 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x4F53 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0xFFFF | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | TM Oel Temperatur | Grad Celsius | high | unsigned char | - | 4 | 1 | -50 |
| 0x02 | TM Sensor Oel Temperatur | Grad Celsius | high | signed int | - | 1 | 1 | 0 |
| 0x03 | Batterie Spannung | Spannung | high | unsigned char | - | 1 | 10 | 0 |
| 0x04 | Gang | 0-n | - | 0xFF | Gear_Information | - | - | - |
| 0x05 | TM Eingangsdrehzahl | RPM | high | unsigned char | - | 30 | 1 | 0 |
| 0x07 | Manget Rückgabetrom | mA | high | unsigned char | - | 10 | 1 | 0 |
| 0x08 | TM Ausgangs Revolution | RPM | high | unsigned char | - | 30 | 1 | 0 |
| 0x10 | Motordrehzahl | RPM | high | unsigned char | - | 30 | 1 | 0 |
| 0x11 | Zeitstempel | Min | high | unsigned int | - | 6 | 1 | 0 |
| 0x12 | S1 Magnet Ausgangsstatus      (1=EIN, 0=AUS) | 0/1 | - | 0x01 | - | - | - | - |
| 0x13 | S2 Magnet Ausgangsstatus      (1=EIN, 0=AUS) | 0/1 | - | 0x02 | - | - | - | - |
| 0x14 | Shift Lock Manget Ausgangsstatus      (1=EIN, 0=AUS) | 0/1 | - | 0x04 | - | - | - | - |
| 0x15 | PA Pin Status        (1=LOW, 0=HIGH) | 0/1 | - | 0x01 | - | - | - | - |
| 0x16 | C Pin Status        (1=LOW, 0=HIGH) | 0/1 | - | 0x02 | - | - | - | - |
| 0x17 | B Pin Status        (1=LOW, 0=HIGH) | 0/1 | - | 0x04 | - | - | - | - |
| 0x18 | A Pin Status        (1=LOW, 0=HIGH) | 0/1 | - | 0x08 | - | - | - | - |
| 0x19 | Tip+ Pin Status        (1=LOW, 0=HIGH) | 0/1 | - | 0x10 | - | - | - | - |
| 0x20 | Tip- Pin Status        (1=LOW, 0=HIGH) | 0/1 | - | 0x20 | - | - | - | - |
| 0x21 | Tip ON Pin Status        (1=LOW, 0=HIGH) | 0/1 | - | 0x40 | - | - | - | - |
| 0xFF | Unbekannt | 1 | - | unsigned char | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4E84 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0005 |
| 0x4E85 | 0xFFFF | 0xFFFF | 0x0002 | 0xFFFF |
| 0x4E89 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0005 |
| 0x4E88 | 0xFFFF | 0xFFFF | 0x0002 | 0xFFFF |
| 0x4E87 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0005 |
| 0x4E86 | 0xFFFF | 0xFFFF | 0x0002 | 0xFFFF |
| 0x4E20 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x4E21 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x4E22 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4E2A | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x4E2B | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x4E2C | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4E34 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x4E35 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x4E36 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4E3E | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x4E3F | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x4E40 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4E48 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x4E49 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x4E4A | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4E52 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x4E53 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x4E54 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4EEB | 0xFFFF | 0x0026 | 0xFFFF | 0xFFFF |
| 0x4EEC | 0xFFFF | 0x0008 | 0xFFFF | 0xFFFF |
| 0x4EED | 0x0028 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4EE8 | 0xFFFF | 0x0026 | 0xFFFF | 0xFFFF |
| 0x4EE9 | 0xFFFF | 0x0008 | 0xFFFF | 0xFFFF |
| 0x4EEA | 0x0028 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x5088 | 0x0019 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x5089 | 0xFFFF | 0x001A | 0xFFFF | 0xFFFF |
| 0x523A | 0x001B | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x523B | 0x001C | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4EF2 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0005 |
| 0x4EF3 | 0xFFFF | 0xFFFF | 0x0002 | 0xFFFF |
| 0x4EF4 | 0x0004 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x5014 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0007 |
| 0x5015 | 0xFFFF | 0xFFFF | 0x0003 | 0xFFFF |
| 0x4FB0 | 0x0035 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4FB3 | 0x0036 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4FB1 | 0x0036 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0xCF07 | 0xFFFF | 0x0071 | 0xFFFF | 0xFFFF |
| 0xCF15 | 0xFFFF | 0x0073 | 0xFFFF | 0xFFFF |
| 0xCF18 | 0xFFFF | 0x0074 | 0xFFFF | 0xFFFF |
| 0xCF16 | 0xFFFF | 0x0075 | 0xFFFF | 0xFFFF |
| 0xCF2B | 0xFFFF | 0x0076 | 0xFFFF | 0xFFFF |
| 0xCF2C | 0xFFFF | 0x0077 | 0xFFFF | 0xFFFF |
| 0xCF2D | 0xFFFF | 0x0078 | 0xFFFF | 0xFFFF |
| 0x5105 | 0xFFFF | 0x0119 | 0xFFFF | 0xFFFF |
| 0xCF30 | 0xFFFF | 0x0079 | 0xFFFF | 0xFFFF |
| 0xCF31 | 0xFFFF | 0x0080 | 0xFFFF | 0xFFFF |
| 0xCF32 | 0xFFFF | 0x0081 | 0xFFFF | 0xFFFF |
| 0xCF33 | 0xFFFF | 0x0082 | 0xFFFF | 0xFFFF |
| 0xCF12 | 0xFFFF | 0x0099 | 0xFFFF | 0xFFFF |
| 0xCF13 | 0xFFFF | 0x0100 | 0xFFFF | 0xFFFF |
| 0xCF14 | 0xFFFF | 0x0101 | 0xFFFF | 0xFFFF |
| 0xCF39 | 0xFFFF | 0x0102 | 0xFFFF | 0xFFFF |
| 0xCF3A | 0xFFFF | 0x0103 | 0xFFFF | 0xFFFF |
| 0xCF3B | 0xFFFF | 0x0104 | 0xFFFF | 0xFFFF |
| 0xCF44 | 0xFFFF | 0x0120 | 0xFFFF | 0xFFFF |
| 0xCF17 | 0xFFFF | 0x0121 | 0xFFFF | 0xFFFF |
| 0xCF3C | 0xFFFF | 0x0105 | 0xFFFF | 0xFFFF |
| 0xCF3D | 0xFFFF | 0x0106 | 0xFFFF | 0xFFFF |
| 0xCF3E | 0xFFFF | 0x0107 | 0xFFFF | 0xFFFF |
| 0xCF37 | 0xFFFF | 0x0122 | 0xFFFF | 0xFFFF |
| 0xCF42 | 0xFFFF | 0x0108 | 0xFFFF | 0xFFFF |
| 0xCF43 | 0xFFFF | 0x0109 | 0xFFFF | 0xFFFF |
| 0xCF26 | 0xFFFF | 0x0118 | 0xFFFF | 0xFFFF |
| 0xCF20 | 0xFFFF | 0x0111 | 0xFFFF | 0xFFFF |
| 0xCF23 | 0xFFFF | 0x0115 | 0xFFFF | 0xFFFF |
| 0xCF21 | 0xFFFF | 0x0112 | 0xFFFF | 0xFFFF |
| 0xCF24 | 0xFFFF | 0x0116 | 0xFFFF | 0xFFFF |
| 0xCF22 | 0xFFFF | 0x0113 | 0xFFFF | 0xFFFF |
| 0xCF25 | 0xFFFF | 0x0117 | 0xFFFF | 0xFFFF |
| 0x5110 | 0xFFFF | 0x0114 | 0xFFFF | 0xFFFF |
| 0x5100 | 0xFFFF | 0x0110 | 0xFFFF | 0xFFFF |
| 0x4F90 | 0x0083 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F91 | 0x0084 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F92 | 0x0085 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F93 | 0x0086 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F94 | 0x0087 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F95 | 0x0088 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F96 | 0x0089 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F97 | 0x0090 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F81 | 0x0091 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F83 | 0x0092 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x526C | 0x0093 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x526D | 0x0094 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x526E | 0x0095 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x526F | 0x0096 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F9A | 0x0123 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F54 | 0x0097 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x4F53 | 0x0098 | 0xFFFF | 0xFFFF | 0xFFFF |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0001 | +B kurz |
| 0x0002 | GND kurz |
| 0x0003 | niedrige Spannung |
| 0x0004 | Klebt |
| 0x0005 | +B kurz/Offen |
| 0x0006 | GND kurz/Offen |
| 0x0007 | Hochspannung |
| 0x0008 | elektrische Störung |
| 0x0019 | Multiple signal |
| 0x001A | kein Signal |
| 0x001B | Out of service M EIN |
| 0x001C | Out of service M AUS |
| 0x0026 | kein Impuls |
| 0x0028 | Fehlerhafter Impuls |
| 0x0034 | RAM Read/Write fehler |
| 0x0035 | Flash interner Checksummen fehler |
| 0x0036 | EEPROM Lese/Schreib-fehler |
| 0x0061 | Rückkopplung hängt |
| 0x0062 | AUS stuck |
| 0x0063 | EIN stuck |
| 0x0066 | Gang ratio Fehler |
| 0x0067 | Offset von Geschwindigkeits Sensor detektiert |
| 0x0068 | C1 Kupplung schleift |
| 0x0069 | C3 Kupplung schleift |
| 0x0071 | Bus off |
| 0x0072 | ECU keine Kommunikation |
| 0x0073 | ABS keine Kommunikation |
| 0x0074 | Ungültiges beschleunigungs Signal |
| 0x0075 | Ungültiges Motordrehmoment Signal |
| 0x0076 | Ungültiges Motordrehzal Signal |
| 0x0077 | Ungültiges Bremspedal Signal |
| 0x0078 | Ungültiges Motorkühlflüssigkeits Temperatur Signal |
| 0x0079 | Ungültiges Signal Drehzahl Rad links hinten |
| 0x0080 | Ungültiges Signal Drehzahl Rad links vorne |
| 0x0081 | Ungültiges Signal Drehzahl Rad links vorne |
| 0x0082 | Ungültiges Signal Drehzahl Rad rechts vorne |
| 0x0083 | Reverse Gang Ratio |
| 0x0084 | 1. Motor Break Gear Ratio |
| 0x0085 | 1. Gang Ratio |
| 0x0086 | 2. Gang Ratio |
| 0x0087 | 3. Gang Ratio |
| 0x0088 | 4. Gang Ratio |
| 0x0089 | 5. Gang Ratio |
| 0x0090 | 6. Gang Ratio |
| 0x0091 | D Reichweite - C1 Kupplung |
| 0x0092 | R Reichweite - C3 Kupplung |
| 0x0093 | Ungewöhnlicher Schaltvorgang |
| 0x0094 | S2 EIN Klebt |
| 0x0095 | SLT AUS Klebt |
| 0x0096 | S1 EIN Klebt |
| 0x0097 | Lock Up EIN Klebt |
| 0x0098 | Lock Up AUS Klebt |
| 0x0099 | Nachrichten Monitor Motorsteuerung Drehmoment 1 Alive Check |
| 0x0100 | Kommunikation verloren zur Motor steuerung Drehmoment 1 |
| 0x0101 | Nachrichten Monitor Motorsteuerung Drehmoment 1 Checksummenfehler |
| 0x0102 | Nachrichten Monitor Motorsteuerung Drehmoment 3 Alive Check |
| 0x0103 | Kommunikation verloren zur Motor steuerung Drehmoment 3 |
| 0x0104 | Nachrichten Monitor Motorsteuerung Drehmoment 3 Checksummenfehler |
| 0x0105 | Nachrichten Montior Terminial Status Alive Check |
| 0x0106 | Kommunikation verloren mit  Terminal Status |
| 0x0107 | Nachrichten Montior Terminal Status Checksummenfehler |
| 0x0108 | CAN Status Nachricht Status_Klemme_15 signal ungültig |
| 0x0109 | Kommunikation verloren zur Motor steuerung Motor 1 |
| 0x0110 | Ungültiges Bremsdruck Signal |
| 0x0111 | Kommunikation verloren mit Status DSC |
| 0x0112 | Nachrichten Montior Status DSC Alive Check |
| 0x0113 | Nachrichten Montior Status DSC Checksummen Fehler |
| 0x0114 | Ungültiges Signal Längsbeschleunigung |
| 0x0115 | Kommunikation verlohren zu Beschleunigungs |
| 0x0116 | Nachrichten Monitor Beschleunigungdaten Alive Check |
| 0x0117 | Nachrichten Monitor Beschleungungsdaten Checksummenfehler |
| 0x0118 | Kommunikation verloren mit Reifendrehzahl |
| 0x0119 | Ungültiges Signal warm-up switch signal |
| 0x0120 | Nachrichten Monitor Motorsteuerung 1 Alive Check |
| 0x0121 | Kommunikation verloren mit OBD_DT_MOTOR |
| 0x0122 | Kommunikation verloren mit STAT_ZV_KLAPPEN |
| 0x0123 | Kupplung C1 strang geschlossen und Neutral Idle Control führt zum Abbruch |
| 0xFFFF | Unbekannter Fehler |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### SHIFT_LEVER_POSITION

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine Auswhal aktiv oder verfügbar |
| 0x01 | Tip 1 Reichweite |
| 0x02 | Tip 2 Reichweite |
| 0x03 | Tip 3 Reichweite |
| 0x04 | Tip 4 Reichweite |
| 0x05 | D Reichweite |
| 0x06 | N Reichweite |
| 0x07 | R Reichweite |
| 0x08 | P Reichweite |
| 0x09 | Tip 5 Reichweite |
| 0x0A | Tip 6 Reichweite |
| 0x0B | L Reichweite |
| 0xYY | Not defined |

### TORQUE_CONVERTER_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | keine Lockup Kupplung angezogen |
| 0x40 | Lockup Kupplung schleift |
| 0x80 | Lockup Kupplung anezogen |
| 0xC0 | Status unbekannt |
| 0xYY | Not defined |

### ACTUAL_GEAR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | P oder N |
| 0x01 | 1. Gang |
| 0x02 | 2. Gang |
| 0x03 | 3. Gang |
| 0x04 | 4. Gang |
| 0x05 | 5. Gang |
| 0x06 | 6. Gang |
| 0x07 | Reverse Gang |
| 0xYY | Not defined |

### GEAR_ERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | kein Fehler |
| 0x01 | Reverse Gang Fehler |
| 0x02 | 1. E/G Bremse Gang Fehler |
| 0x03 | 1. Gang Fehler |
| 0x04 | 2. Gang Fehler |
| 0x05 | 3. Gang Fehler |
| 0x06 | 4. Gang Fehler |
| 0x07 | 5. Gang Fehler |
| 0x08 | 6. Gang Fehler |
| 0xYY | Not defined |

### SOLENOID_PATTERN

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x12 | 0x13 | 0x14 |
| 0xYY | - | - | - |

### PIN_PATTERN

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 | 0x20 | 0x21 |
| 0xYY | - | - | - | - | - | - | - |

### GEAR_INFORMATION

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Lockup AUS / 1-1EB |
| 0x02 | Lockup AUS / 1-2 |
| 0x04 | Lockup AUS / 1-3 |
| 0x05 | Lockup AUS / 2-3 |
| 0x06 | Lockup AUS / 2-4 |
| 0x07 | Lockup AUS / 2-6 |
| 0x08 | Lockup AUS / 3-4 |
| 0x03 | Lockup AUS / 3-5 |
| 0x09 | Lockup AUS / 4-5 |
| 0x0A | Lockup AUS / 4-6 |
| 0x0B | Lockup AUS / 5-6 |
| 0x0C | Lockup AUS / 1EB-1 |
| 0x0D | Lockup AUS / 2-1 |
| 0x0E | Lockup AUS / 3-1 |
| 0x0F | Lockup AUS / 3-2 |
| 0x10 | Lockup AUS / 4-2 |
| 0x11 | Lockup AUS / 6-2 |
| 0x12 | Lockup AUS / 4-3 |
| 0x13 | Lockup AUS / 5-3 |
| 0x14 | Lockup AUS / 5-4 |
| 0x15 | Lockup AUS / 6-4 |
| 0x16 | Lockup AUS / 6-5 |
| 0x17 | Lockup AUS / R |
| 0x18 | Lockup AUS / N |
| 0x19 | Lockup AUS / 1. |
| 0x1A | Lockup AUS / 2. |
| 0x1B | Lockup AUS / 3. |
| 0x1C | Lockup AUS / 4. |
| 0x1D | Lockup AUS / 5. |
| 0x1E | Lockup AUS / 6. |
| 0x1F | Lockup AUS / NR |
| 0x20 | Lockup AUS / ND1. |
| 0x21 | Lockup AUS / ND2. |
| 0x22 | Lockup AUS / ND3. |
| 0x23 | Lockup AUS / ND4. |
| 0x24 | Lockup AUS / ND5. |
| 0x25 | Lockup AUS / ND6. |
| 0x65 | Lockup EIN / 1-1EB |
| 0x66 | Lockup EIN / 1-2 |
| 0x67 | Lockup EIN / 1-3 |
| 0x68 | Lockup EIN / 2-3 |
| 0x69 | Lockup EIN / 2-4 |
| 0x6A | Lockup EIN / 2-6 |
| 0x6B | Lockup EIN / 3-4 |
| 0x6C | Lockup EIN / 3-5 |
| 0x6D | Lockup EIN / 4-5 |
| 0x6E | Lockup EIN / 4-6 |
| 0x6F | Lockup EIN / 5-6 |
| 0x70 | Lockup EIN / 1EB-1 |
| 0x71 | Lockup EIN / 2-1 |
| 0x72 | Lockup EIN / 3-1 |
| 0x73 | Lockup EIN / 3-2 |
| 0x74 | Lockup EIN / 4-2 |
| 0x75 | Lockup EIN / 6-2 |
| 0x76 | Lockup EIN / 4-3 |
| 0x77 | Lockup EIN / 5-3 |
| 0x78 | Lockup EIN / 5-4 |
| 0x79 | Lockup EIN / 6-4 |
| 0x7A | Lockup EIN / 6-5 |
| 0x7B | Lockup EIN / R |
| 0x7C | Lockup EIN / N |
| 0x7D | Lockup EIN / 1. |
| 0x7E | Lockup EIN / 2. |
| 0x7F | Lockup EIN / 3. |
| 0x80 | Lockup EIN / 4. |
| 0x81 | Lockup EIN / 5. |
| 0x82 | Lockup EIN / 6. |
| 0x83 | Lockup EIN / NR |
| 0x84 | Lockup EIN / ND1. |
| 0x85 | Lockup EIN / ND2. |
| 0x86 | Lockup EIN / ND3. |
| 0x87 | Lockup EIN / ND4. |
| 0x88 | Lockup EIN / ND5. |
| 0x89 | Lockup EIN / ND6. |
| 0xC9 | Lockup Schlupf / 1-1EB |
| 0xCA | Lockup Schlupf / 1-2 |
| 0XCB | Lockup Schlupf / 1-3 |
| 0xCC | Lockup Schlupf / 2-3 |
| 0xCD | Lockup Schlupf / 2-4 |
| 0XCE | Lockup Schlupf / 2-6 |
| 0xCF | Lockup Schlupf / 3-4 |
| 0xD0 | Lockup Schlupf / 3-5 |
| 0xD1 | Lockup Schlupf / 4-5 |
| 0xD2 | Lockup Schlupf / 4-6 |
| 0xD3 | Lockup Schlupf / 5-6 |
| 0xD4 | Lockup Schlupf / 1EB-1 |
| 0xD5 | Lockup Schlupf / 2-1 |
| 0xD6 | Lockup Schlupf / 3-1 |
| 0xD7 | Lockup Schlupf / 3-2 |
| 0xD8 | Lockup Schlupf / 4-2 |
| 0xD9 | Lockup Schlupf / 6-2 |
| 0xDA | Lockup Schlupf / 4-3 |
| 0xDB | Lockup Schlupf / 5-3 |
| 0xDC | Lockup Schlupf / 5-4 |
| 0xDD | Lockup Schlupf / 6-4 |
| 0xDE | Lockup Schlupf / 6-5 |
| 0xDF | Lockup Schlupf / R |
| 0xE0 | Lockup Schlupf / N |
| 0xE1 | Lockup Schlupf / 1. |
| 0xE2 | Lockup Schlupf / 2. |
| 0xE3 | Lockup Schlupf / 3. |
| 0xE4 | Lockup Schlupf / 4. |
| 0xE5 | Lockup Schlupf / 5. |
| 0xE6 | Lockup Schlupf / 6. |
| 0xE7 | Lockup Schlupf / NR |
| 0xE8 | Lockup Schlupf / ND1. |
| 0xE9 | Lockup Schlupf / ND2. |
| 0xEA | Lockup Schlupf / ND3. |
| 0xEB | Lockup Schlupf / ND4. |
| 0xEC | Lockup Schlupf / ND5. |
| 0xED | Lockup Schlupf / ND6. |
| 0xXY | Nicht plausible Gang Bedingung |

### STATUS_RBM_TABEL

| NAME | BYTE | ADDRESS |
| --- | --- | --- |
| STATUS_RBM_GEARERROR_2ND_NUMERATOR | 2 | 0xFF66F2 |
| STATUS_RBM_GEARERROR_2ND_DENOMINATOR | 2 | 0xFF66F4 |
| STATUS_RBM_GEARERROR_3RD_NUMERATOR | 2 | 0xFF66F6 |
| STATUS_RBM_GEARERROR_3RD_DENOMINATOR | 2 | 0xFF66F8 |
| STATUS_RBM_GEARERROR_4TH_NUMERATOR | 2 | 0xFF66FA |
| STATUS_RBM_GEARERROR_4TH_DENOMINATOR | 2 | 0xFF66FC |
| STATUS_RBM_GEARERROR_5TH_NUMERATOR | 2 | 0xFF66FE |
| STATUS_RBM_GEARERROR_5TH_DENOMINATOR | 2 | 0xFF6700 |
| STATUS_RBM_GEARERROR_6TH_NUMERATOR | 2 | 0xFF6702 |
| STATUS_RBM_GEARERROR_6TH_DENOMINATOR | 2 | 0xFF6704 |
| STATUS_RBM_SP_NOPULSE_NUMERATOR | 2 | 0xFF6706 |
| STATUS_RBM_SP_NOPULSE_DENOMINATOR | 2 | 0xFF6708 |
| STATUS_RBM_C1_NOPULSE_NUMERATOR | 2 | 0xFF670A |
| STATUS_RBM_C1_NOPULSE_DENOMINATOR | 2 | 0xFF670C |
| STATUS_RBM_LUP_OFF_STUCK_NUMERATOR | 2 | 0xFF670E |
| STATUS_RBM_LUP_OFF_STUCK_DENOMINATOR | 2 | 0xFF6710 |
| STATUS_RBM_SLC1_STUCK_NUMERATOR | 2 | 0xFF6712 |
| STATUS_RBM_SLC1_STUCK_DENOMINATOR | 2 | 0xFF6714 |
| STATUS_RBM_SLC2_STUCK_NUMERATOR | 2 | 0xFF6716 |
| STATUS_RBM_SLC2_STUCK_DENOMINATOR | 2 | 0xFF6718 |
| STATUS_RBM_SLC3_STUCK_NUMERATOR | 2 | 0xFF671A |
| STATUS_RBM_SLC3_STUCK_DENOMINATOR | 2 | 0xFF671C |
| STATUS_RBM_SLB1_STUCK_NUMERATOR | 2 | 0xFF671E |
| STATUS_RBM_SLB1_STUCK_DENOMINATOR | 2 | 0xFF6720 |
| STATUS_RBM_SLT_STUCK_NUMERATOR | 2 | 0xFF6722 |
| STATUS_RBM_SLT_STUCK_DENOMINATOR | 2 | 0xFF6724 |
| STATUS_RBM_SLU_STUCK_NUMERATOR | 2 | 0xFF6726 |
| STATUS_RBM_SLU_STUCK_DENOMINATOR | 2 | 0xFF6728 |
| STATUS_RBM_OIL_STUCK_NUMERATOR | 2 | 0xFF672A |
| STATUS_RBM_OIL_STUCK_DENOMINATOR | 2 | 0xFF672C |
| STATUS_RBM_C1_WRONGPULSE_NUMERATOR | 2 | 0xFF672E |
| STATUS_RBM_C1_WRONGPULSE_DENOMINATOR | 2 | 0xFF6730 |
| STATUS_RBM_SP_WRONGPULSE_NUMERATOR | 2 | 0xFF6732 |
| STATUS_RBM_SP_WRONGPULSE_DENOMINATOR | 2 | 0xFF6734 |
| STATUS_RBM_N_CONDITION_C1_NUMERATOR | 2 | 0xFF673A |
| STATUS_RBM_N_CONDITION_C1_DENOMINATOR | 2 | 0xFF673C |
| STATUS_RBM_NCTRL_C1_ENGAGE_NUMERATOR | 2 | 0xFF673E |
| STATUS_RBM_NCTRL_C1_ENGAGE_DENOMINATOR | 2 | 0xFF6740 |
| STATUS_RBM_Dmode_Week | 2 | 0xFF62BA |
| STATUS_RBM_Dmode_Day | 1 | 0xFF62B8 |
| STATUS_RBM_Dmode_Hour | 1 | 0xFF62B7 |
| STATUS_RBM_Dmode_Minute | 1 | 0xFF62B6 |
| STATUS_RBM_Dmode_10ms | 2 | 0xFF62B4 |
| STATUS_RBM_SDmode_Week | 2 | 0xFF62C2 |
| STATUS_RBM_SDmode_Day | 1 | 0xFF62C0 |
| STATUS_RBM_SDmode_Hour | 1 | 0xFF62BF |
| STATUS_RBM_SDmode_Minute | 1 | 0xFF62BE |
| STATUS_RBM_SDmode_10ms | 2 | 0xFF62BC |
| STATUS_RBM_MDmode_Week | 2 | 0xFF62CA |
| STATUS_RBM_MDmode_Day | 1 | 0xFF62C8 |
| STATUS_RBM_MDmode_Hour | 1 | 0xFF62C7 |
| STATUS_RBM_MDmode_Minute | 1 | 0xFF62C6 |
| STATUS_RBM_MDmode_10ms | 2 | 0xFF62C4 |
| STATUS_RBM_Mmode_Week | 2 | 0xFF62B2 |
| STATUS_RBM_Mmode_Day | 1 | 0xFF62B0 |
| STATUS_RBM_Mmode_Hour | 1 | 0xFF62AF |
| STATUS_RBM_Mmode_Minute | 1 | 0xFF62AE |
| STATUS_RBM_Mmode_10ms | 2 | 0xFF62AC |

### DRIVE_MODE_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | E Mode |
| 0x08 | M Mode |
| 0x10 | D Mode |
| 0x28 | Dunkel Mode |
| 0xYY | Not defined |

### SHIFTMAP_PATTERN

| WERT | UWTEXT |
| --- | --- |
| 0x00 | WUSP Mode |
| 0x10 | ECONOMY Mode |
| 0x20 | UP SLOPE1  Mode |
| 0x30 | UP SLOPE2  Mode |
| 0x40 | UP SLOPE3  Mode |
| 0x50 | SPORT Mode |
| 0x60 | HOT1 Mode |
| 0x70 | HOT2 Mode |
| 0x80 | SPORT SWITCH Mode |
| 0x90 | Einweg Kupplungsschutz Mode |
| 0xA0 | CAT Heizung Mode |
| 0xYY | Not defined |

### CONTROLSTATEUMRECHNUNG

| CONTROLSTATE | CS |
| --- | --- |
| AUS | 0x00 |
| EIN | 0xFF |
| AUTOMATIC | 0x03 |
| RCTECU | 0x04 |
|  | 0x05 |

### IDENTIFIER_LESEN

| IDENTIFIER | SIGNAL | 0X00 | 0XFF |
| --- | --- | --- | --- |
| 0x01 | S1 | AUS | EIN |
| 0x02 | S2 | AUS | EIN |
| 0x03 | SLC1 | <=100mA | >100mA |
| 0x04 | SLC2 | <=100mA | >100mA |
| 0x05 | SLC3 | <=100mA | >100mA |
| 0x06 | SLB1 | <=100mA | >100mA |
| 0x07 | SLT | <=100mA | >100mA |
| 0x08 | SLU | <=100mA | >100mA |
| 0x09 | SHIFTLOCK | AUS | EIN |
| 0x00 | Not used | - | - |

### IDENTIFIER_SETZEN

| IDENTIFIER | SIGNAL | 0X00 | 0X01 | 0X02 |
| --- | --- | --- | --- | --- |
| 0x01 | S1 | AUS | - | EIN |
| 0x02 | S2 | AUS | - | EIN |
| 0x03 | SLC1 | <=100mA | - | >100mA |
| 0x04 | SLC2 | <=100mA | - | >100mA |
| 0x05 | SLC3 | <=100mA | - | >100mA |
| 0x06 | SLB1 | <=100mA | - | >100mA |
| 0x07 | SLT | <=100mA | - | >100mA |
| 0x08 | SLU | <=100mA | - | >100mA |
| 0x09 | SHIFTLOCK | AUS | - | EIN |
| 0x00 | Not used |  |  |  |

### SPEICHERSEGMENT_AISIN

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
