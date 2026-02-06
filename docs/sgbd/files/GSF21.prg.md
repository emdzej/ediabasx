# GSF21.prg

## General

|  |  |
| --- | --- |
| File | GSF21.prg |
| Type | PRG |
| Jobs | 51 |
| Tables | 31 |
| Origin | BMW EA74 GUETER |
| Revision | 1.001 |
| Author | AWTC_Europe Software_Development NAUDTS, AWTC_Europe Software_Development TRIEST |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EGS AISIN WARNER |  |  |
| ORIGIN | string | BMW EA74 GUETER |  |  |
| REVISION | string | 1.001 |  |  |
| AUTHOR | string | AWTC_Europe Software_Development NAUDTS, AWTC_Europe Software_Development TRIEST |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.26 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

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
| BAUDRATE | string | optionaler Parameter fuer die gewuenschte Baudrate table BaudRate BAUD |
| SPEZIFISCHE_BAUDRATE_WERT | long | Parameter nur fuer BAUDRATE = 'SB' ( spezifische Baudrate ) |

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### SERIENNUMMER_LESEN

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

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

### STEUERGERAETE_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### STATUS_BYTE_1

RLI = 01h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SHIFTLEV

RLI = 14h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_ENG_SPEED

RLI = 0Ch mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_VEHICLE_SPEED

RLI = 13h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_REV_OUT_T_M

RLI = 08h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_REV_IN_T_M

RLI = 09h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_OIL_TEMP_ATF

RLI = 0Ah mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_IG_VOLTAGE

RLI = 0Bh mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_ENG_TORQUE

RLI = 0Dh mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_ENG_TORQUE_DRIVER_REQUEST

RLI = 0Eh mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_THROTTLE_POSITION

RLI = 0Fh mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_TORQUE_CONTROL_REQUEST

RLI = 10H mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_TORQUE_LIMIT_REQUEST

RLI =11h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_TORQUE_INCREASE_REQUEST

RLI =12h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLC1_OUT_CURRENT

RLI = 02h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLC2_OUT_CURRENT

RLI = 03h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLC3_OUT_CURRENT

RLI = 04h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLB1_OUT_CURRENT

RLI = 05h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLT_OUT_CURRENT

RLI = 06h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_SLU_OUT_CURRENT

RLI = 07h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BYTE_3

RLI = 15h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BYTE_4

RLI = 16h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BYTE_5

RLI = 17h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_BYTE_7

RLI = 19h mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_RAMDATA_READABLE

RLI = 7Fh mit dem SGBD-Generator erzeugt

_No arguments._

### STEUERN_ADAPTIONSWERTE_RUECKSETZEN

alle Adaptionswerte ruecksetzen KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### QUICKTEST

Anzahl Fehler / Kilometerstand KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_SIGNAL_STELLGLIED

Status setzen der Signale/Stellglieder KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | string | S1,S2,SLC1,SLC2,SLC3,SLB1,SLT,SLU,SHIFTLOCK |
| ZUSTAND_STRING | string | ON, OFF, AUTOMATIC, RCTECU (ReturnControlToECU)==> (default=Automatic)!!! ONLY ONE ZUSTAND ARGUMENT is permitted (String OR Value) !!! |
| ZUSTAND_VALUE | int | from 0 mA to 1000 mA (NOT USED FOR S1 and S2 SOLENOIDS)!!! ONLY ONE ZUSTAND ARGUMENT is permitted (String OR Value) !!! |

### STATUS_SIGNAL_STELLGLIED

Auslesen Status der Signale/Stellglieder KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | string | S1,S2,SLC1,SLC2,SLC3,SLB1,SLT,SLU,SHIFTLOCK |

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME |
| ADRESSE | unsigned long | 0x000000 - 0xFFFFFF (RAM variables: refer to STATUS_RBM_Tabel) |
| ANZAHL | int | 1 - n ( 254 ) |

## Tables

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| - | BMW-FAST |
| 1 | KWP2000* |
| - | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x2710 | S1 SOLENOID |
| 0x2711 | S1 SOLENOID |
| 0x2720 | S2 SOLENOID |
| 0x2721 | S2 SOLENOID |
| 0x2800 | SHIFT LOCK SOLENOID |
| 0x2801 | SHIFT LOCK SOLENOID |
| 0x2900 | LINEAR SOLENOID ( SLT ) |
| 0x2901 | LINEAR SOLENOID ( SLT ) |
| 0x2902 | LINEAR SOLENOID ( SLT ) |
| 0x2910 | LINEAR SOLENOID  (SLU) |
| 0x2911 | LINEAR SOLENOID  (SLU) |
| 0x2912 | LINEAR SOLENOID  (SLU) |
| 0x2920 | LINEAR SOLENOID  (SLC1) |
| 0x2921 | LINEAR SOLENOID  (SLC1) |
| 0x2922 | LINEAR SOLENOID  (SLC1) |
| 0x2930 | LINEAR SOLENOID  (SLC2) |
| 0x2931 | LINEAR SOLENOID  (SLC2) |
| 0x2932 | LINEAR SOLENOID  (SLC2) |
| 0x2940 | LINEAR SOLENOID  (SLC3) |
| 0x2941 | LINEAR SOLENOID  (SLC3) |
| 0x2942 | LINEAR SOLENOID  (SLC3) |
| 0x2950 | LINEAR SOLENOID  (SLB1) |
| 0x2951 | LINEAR SOLENOID  (SLB1) |
| 0x2952 | LINEAR SOLENOID  (SLB1) |
| 0x2A00 | OUTPUT REVOLUTION SENSOR |
| 0x2A01 | OUTPUT REVOLUTION SENSOR |
| 0x2A02 | OUTPUT REVOLUTION SENSOR |
| 0x2B00 | INPUT REVOLUTION SENSOR |
| 0x2B01 | INPUT REVOLUTION SENSOR |
| 0x2B02 | INPUT REVOLUTION SENSOR |
| 0x2C00 | INHIBITOR SWITCH |
| 0x2C01 | INHIBITOR SWITCH |
| 0x2C10 | MANUAL SWITCH |
| 0x2C11 | MANUAL SWITCH |
| 0x2D00 | OIL TEMPERATURE SENSOR |
| 0x2D01 | OIL TEMPERATURE SENSOR |
| 0x2D02 | OIL TEMPERATURE SENSOR |
| 0x2E00 | Battery voltage |
| 0x2E01 | Battery voltage |
| 0x2F00 | FLASH ROM CHECK SUM |
| 0x2F10 | RAM |
| 0x2F20 | EEPROM |
| 0xCF0B | CAN Bus |
| 0xCF14 | CAN Bus |
| 0xCF15 | CAN Bus |
| 0x3000 | CAN Bus |
| 0x3010 | CAN Bus |
| 0x3020 | CAN Bus |
| 0x3030 | CAN Bus |
| 0x3040 | CAN Bus |
| 0x3050 | CAN Bus |
| 0x3060 | CAN Bus |
| 0x3070 | CAN Bus |
| 0x3080 | CAN Bus |
| 0x3100 | GEAR RATIO |
| 0x3111 | GEAR RATIO |
| 0x3110 | GEAR RATIO |
| 0x3120 | GEAR RATIO |
| 0x3130 | GEAR RATIO |
| 0x3140 | GEAR RATIO |
| 0x3150 | GEAR RATIO |
| 0x3160 | GEAR RATIO |
| 0x3200 | Neutral Condition |
| 0x3210 | Neutral Condition |
| 0x3300 | Unusual shifting |
| 0x3310 | Unusual shifting |
| 0x3320 | Unusual shifting |
| 0x3330 | Unusual shifting |
| 0x3400 | Lock up clutch |
| 0x3410 | Lock up clutch |
| 0xFFFF | Unkonwn error |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x2710 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x2711 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x2720 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x2721 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x2800 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x2801 | 0x04 | 0x01 | 0x03 | Solenoid_Pattern |
| 0x2900 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2901 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2902 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2910 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2911 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2912 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2920 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2921 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2922 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2930 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2931 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2932 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2940 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2941 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2942 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2950 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2951 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2952 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x2A00 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x2A01 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x2A02 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x2B00 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x2B01 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x2B02 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x2C00 | 0x04 | 0x01 | 0x03 | Pin_Pattern |
| 0x2C01 | 0x04 | 0x01 | 0x03 | Pin_Pattern |
| 0x2C10 | 0x04 | 0x01 | 0x03 | Pin_Pattern |
| 0x2C11 | 0x04 | 0x01 | 0x03 | Pin_Pattern |
| 0x2D00 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x2D01 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x2D02 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x2E00 | 0x04 | 0x01 | 0x03 | 0x10 |
| 0x2E01 | 0x04 | 0x01 | 0x03 | 0x10 |
| 0x2F00 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x2F10 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x2F20 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF0B | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF14 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0xCF15 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x3000 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x3010 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x3020 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x3030 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x3040 | 0x04 | 0x01 | 0x03 | 0x11 |
| 0x3050 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3060 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3070 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3080 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3100 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3111 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3110 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3120 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3130 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3140 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3150 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3160 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3200 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3210 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3300 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3310 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3320 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3330 | 0x04 | 0x05 | 0x03 | 0x08 |
| 0x3400 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0x3410 | 0x04 | 0x01 | 0x03 | 0x07 |
| 0xFFFF | - | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | TM Oil Temperature | Degree C | high | unsigned char | - | 4 | 1 | -50 |
| 0x02 | TM Sensor Oil Temperature | Degree C | high | signed int | - | 1 | 1 | 0 |
| 0x03 | Battery Voltage | Voltage | high | unsigned char | - | 1 | 10 | 0 |
| 0x04 | Gear | 0-n | - | 0xFF | Gear_Information | - | - | - |
| 0x05 | TM Input Revolution | RPM | high | unsigned char | - | 30 | 1 | 0 |
| 0x07 | Solenoid Feedback Current | mA | high | unsigned char | - | 10 | 1 | 0 |
| 0x08 | TM Output Revolution | RPM | high | unsigned char | - | 30 | 1 | 0 |
| 0x10 | Engine Speed | RPM | high | unsigned char | - | 30 | 1 | 0 |
| 0x11 | Time Stamp | Min | high | unsigned int | - | 6 | 1 | 0 |
| 0x12 | S1 Solenoid Output State      (1=ON, 0=OFF) | 0/1 | - | 0x01 | - | - | - | - |
| 0x13 | S2 Solenoid Output State      (1=ON, 0=OFF) | 0/1 | - | 0x02 | - | - | - | - |
| 0x14 | Shift Lock Solenoid Output State      (1=ON, 0=OFF) | 0/1 | - | 0x04 | - | - | - | - |
| 0x15 | PA Pin Status        (1=Low, 0=High) | 0/1 | - | 0x01 | - | - | - | - |
| 0x16 | C Pin Status        (1=Low, 0=High) | 0/1 | - | 0x02 | - | - | - | - |
| 0x17 | B Pin Status        (1=Low, 0=High) | 0/1 | - | 0x04 | - | - | - | - |
| 0x18 | A Pin Status        (1=Low, 0=High) | 0/1 | - | 0x08 | - | - | - | - |
| 0x19 | Tip+ Pin Status        (1=Low, 0=High) | 0/1 | - | 0x10 | - | - | - | - |
| 0x20 | Tip- Pin Status        (1=Low, 0=High) | 0/1 | - | 0x20 | - | - | - | - |
| 0x21 | Tip ON Pin Status        (1=Low, 0=High) | 0/1 | - | 0x40 | - | - | - | - |
| 0xFF | Unknown | 1 | - | unsigned char | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2710 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0005 |
| 0x2711 | 0xFFFF | 0xFFFF | 0x0002 | 0xFFFF |
| 0x2720 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0005 |
| 0x2721 | 0xFFFF | 0xFFFF | 0x0002 | 0xFFFF |
| 0x2800 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0005 |
| 0x2801 | 0xFFFF | 0xFFFF | 0x0002 | 0xFFFF |
| 0x2900 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x2901 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x2902 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2910 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x2911 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x2912 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2920 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x2921 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x2922 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2930 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x2931 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x2932 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2940 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x2941 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x2942 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2950 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0001 |
| 0x2951 | 0xFFFF | 0xFFFF | 0x0006 | 0xFFFF |
| 0x2952 | 0x0061 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2A00 | 0xFFFF | 0x0026 | 0xFFFF | 0xFFFF |
| 0x2A01 | 0xFFFF | 0x0008 | 0xFFFF | 0xFFFF |
| 0x2A02 | 0x0028 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2B00 | 0xFFFF | 0x0026 | 0xFFFF | 0xFFFF |
| 0x2B01 | 0xFFFF | 0x0008 | 0xFFFF | 0xFFFF |
| 0x2B02 | 0x0028 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2C00 | 0x0019 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2C01 | 0xFFFF | 0x001A | 0xFFFF | 0xFFFF |
| 0x2C10 | 0x001B | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2C11 | 0x001C | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2D00 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0005 |
| 0x2D01 | 0xFFFF | 0xFFFF | 0x0002 | 0xFFFF |
| 0x2D02 | 0x0004 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2E00 | 0xFFFF | 0xFFFF | 0xFFFF | 0x0007 |
| 0x2E01 | 0xFFFF | 0xFFFF | 0x0003 | 0xFFFF |
| 0x2F00 | 0x0035 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2F10 | 0x0036 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x2F20 | 0x0036 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0xCF0B | 0xFFFF | 0x0071 | 0xFFFF | 0xFFFF |
| 0xCF14 | 0xFFFF | 0x0072 | 0xFFFF | 0xFFFF |
| 0xCF15 | 0xFFFF | 0x0073 | 0xFFFF | 0xFFFF |
| 0x3000 | 0xFFFF | 0x0074 | 0xFFFF | 0xFFFF |
| 0x3010 | 0xFFFF | 0x0075 | 0xFFFF | 0xFFFF |
| 0x3020 | 0xFFFF | 0x0076 | 0xFFFF | 0xFFFF |
| 0x3030 | 0xFFFF | 0x0077 | 0xFFFF | 0xFFFF |
| 0x3040 | 0xFFFF | 0x0078 | 0xFFFF | 0xFFFF |
| 0x3050 | 0xFFFF | 0x0079 | 0xFFFF | 0xFFFF |
| 0x3060 | 0xFFFF | 0x0080 | 0xFFFF | 0xFFFF |
| 0x3070 | 0xFFFF | 0x0081 | 0xFFFF | 0xFFFF |
| 0x3080 | 0xFFFF | 0x0082 | 0xFFFF | 0xFFFF |
| 0x3100 | 0x0083 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3111 | 0x0084 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3110 | 0x0085 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3120 | 0x0086 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3130 | 0x0087 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3140 | 0x0088 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3150 | 0x0089 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3160 | 0x0090 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3200 | 0x0091 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3210 | 0x0092 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3300 | 0x0093 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3310 | 0x0094 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3320 | 0x0095 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3330 | 0x0096 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3400 | 0x0097 | 0xFFFF | 0xFFFF | 0xFFFF |
| 0x3410 | 0x0098 | 0xFFFF | 0xFFFF | 0xFFFF |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0001 | +B short |
| 0x0002 | GND short |
| 0x0003 | Low voltage |
| 0x0004 | Stuck |
| 0x0005 | +B short/open |
| 0x0006 | GND short/open |
| 0x0007 | High voltage |
| 0x0008 | Electrical failure |
| 0x0019 | Multiple signal |
| 0x001A | No signal |
| 0x001B | Out of service M ON |
| 0x001C | Out of service M OFF |
| 0x0026 | No pulse |
| 0x0028 | Wrong pulse |
| 0x0034 | RAM Read/Write error |
| 0x0035 | Flash Internal check sum error |
| 0x0036 | EEPROM Read/Write error |
| 0x0061 | Feed back current stuck |
| 0x0062 | OFF stuck |
| 0x0063 | ON stuck |
| 0x0066 | Gear ratio error |
| 0x0067 | Offset of speed sensor signal detected |
| 0x0068 | C1 clutch slipping |
| 0x0069 | C3 clutch slipping |
| 0x0071 | Bus off |
| 0x0072 | ECU no communication |
| 0x0073 | ABS no communication |
| 0x0074 | Invalid accelerator signal |
| 0x0075 | Invalid engine torque signal |
| 0x0076 | Invalid engine speed signal |
| 0x0077 | Invalid brake pedal signal |
| 0x0078 | Invalid engine coolant temperature signal |
| 0x0079 | Invalid rear-left wheel speed signal |
| 0x0080 | Invalid rear-right wheel speed signal |
| 0x0081 | Invalid front-left wheel speed signal |
| 0x0082 | Invalid front-right wheel speed signal |
| 0x0083 | Reverse Gear Ratio |
| 0x0084 | 1st Engine Break Gear Ratio |
| 0x0085 | 1st Gear Ratio |
| 0x0086 | 2nd Gear Ratio |
| 0x0087 | 3rd Gear Ratio |
| 0x0088 | 4th Gear Ratio |
| 0x0089 | 5th Gear Ratio |
| 0x0090 | 6th Gear Ratio |
| 0x0091 | D Range - C1 Clutch |
| 0x0092 | R Range - C3 Clutch |
| 0x0093 | Unusual Shifting |
| 0x0094 | S2 ON Stuck |
| 0x0095 | SLT OFF Stuck |
| 0x0096 | S1 ON Stuck |
| 0x0097 | Lock Up ON Stuck |
| 0x0098 | Lock Up OFFStuck |
| 0xFFFF | Unknown error |

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
| 0x00 | No Selection active or available |
| 0x01 | 'Tip 1' range |
| 0x02 | 'Tip 2' range |
| 0x03 | 'Tip 3' range |
| 0x04 | 'Tip 4' range |
| 0x05 | 'D' range |
| 0x06 | 'N' range |
| 0x07 | 'R' range |
| 0x08 | 'P' range |
| 0x09 | 'Tip 5' range |
| 0x0A | 'Tip 6' range |
| 0x0B | 'L' range |
| 0xYY | Not defined |

### TORQUE_CONVERTER_STATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | No Lockup clutch applied |
| 0x40 | Lockup clutch is slipping |
| 0x80 | Lockup clutch applied |
| 0xC0 | Status Unknown |
| 0xYY | Not defined |

### ACTUAL_GEAR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | P or N |
| 0x01 | 1st Gear |
| 0x02 | 2nd Gear |
| 0x03 | 3rd Gear |
| 0x04 | 4th Gear |
| 0x05 | 5th Gear |
| 0x06 | 6th Gear |
| 0x07 | Reverse Gear |
| 0xYY | Not defined |

### GEAR_ERROR

| WERT | UWTEXT |
| --- | --- |
| 0x00 | No Error |
| 0x01 | Reverse Gear Error |
| 0x02 | 1st E/G Brake Gear Error |
| 0x03 | 1st Gear Error |
| 0x04 | 2nd Gear Error |
| 0x05 | 3rd Gear Error |
| 0x06 | 4th Gear Error |
| 0x07 | 5th Gear Error |
| 0x08 | 6th Gear Error |
| 0xYY | Not defined |

### SOLENOID_PATTERN

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x12 | 0x13 | 0x14 |
| 0xYY |  |  |  |

### PIN_PATTERN

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 | 0x20 | 0x21 |
| 0xYY |  |  |  |  |  |  |  |

### GEAR_INFORMATION

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Lockup OFF / 1-1EB |
| 0x02 | Lockup OFF / 1-2 |
| 0x04 | Lockup OFF / 1-3 |
| 0x05 | Lockup OFF / 2-3 |
| 0x06 | Lockup OFF / 2-4 |
| 0x07 | Lockup OFF / 2-6 |
| 0x08 | Lockup OFF / 3-4 |
| 0x03 | Lockup OFF / 3-5 |
| 0x09 | Lockup OFF / 4-5 |
| 0x0A | Lockup OFF / 4-6 |
| 0x0B | Lockup OFF / 5-6 |
| 0x0C | Lockup OFF / 1EB-1 |
| 0x0D | Lockup OFF / 2-1 |
| 0x0E | Lockup OFF / 3-1 |
| 0x0F | Lockup OFF / 3-2 |
| 0x10 | Lockup OFF / 4-2 |
| 0x11 | Lockup OFF / 6-2 |
| 0x12 | Lockup OFF / 4-3 |
| 0x13 | Lockup OFF / 5-3 |
| 0x14 | Lockup OFF / 5-4 |
| 0x15 | Lockup OFF / 6-4 |
| 0x16 | Lockup OFF / 6-5 |
| 0x17 | Lockup OFF / R |
| 0x18 | Lockup OFF / N |
| 0x19 | Lockup OFF / 1st |
| 0x1A | Lockup OFF / 2nd |
| 0x1B | Lockup OFF / 3rd |
| 0x1C | Lockup OFF / 4th |
| 0x1D | Lockup OFF / 5th |
| 0x1E | Lockup OFF / 6th |
| 0x1F | Lockup OFF / NR |
| 0x20 | Lockup OFF / ND1st |
| 0x21 | Lockup OFF / ND2nd |
| 0x22 | Lockup OFF / ND3rd |
| 0x23 | Lockup OFF / ND4th |
| 0x24 | Lockup OFF / ND5th |
| 0x25 | Lockup OFF / ND6th |
| 0x65 | Lockup ON / 1-1EB |
| 0x66 | Lockup ON / 1-2 |
| 0x67 | Lockup ON / 1-3 |
| 0x68 | Lockup ON / 2-3 |
| 0x69 | Lockup ON / 2-4 |
| 0x6A | Lockup ON / 2-6 |
| 0x6B | Lockup ON / 3-4 |
| 0x6C | Lockup ON / 3-5 |
| 0x6D | Lockup ON / 4-5 |
| 0x6E | Lockup ON / 4-6 |
| 0x6F | Lockup ON / 5-6 |
| 0x70 | Lockup ON / 1EB-1 |
| 0x71 | Lockup ON / 2-1 |
| 0x72 | Lockup ON / 3-1 |
| 0x73 | Lockup ON / 3-2 |
| 0x74 | Lockup ON / 4-2 |
| 0x75 | Lockup ON / 6-2 |
| 0x76 | Lockup ON / 4-3 |
| 0x77 | Lockup ON / 5-3 |
| 0x78 | Lockup ON / 5-4 |
| 0x79 | Lockup ON / 6-4 |
| 0x7A | Lockup ON / 6-5 |
| 0x7B | Lockup ON / R |
| 0x7C | Lockup ON / N |
| 0x7D | Lockup ON / 1st |
| 0x7E | Lockup ON / 2nd |
| 0x7F | Lockup ON / 3rd |
| 0x80 | Lockup ON / 4th |
| 0x81 | Lockup ON / 5th |
| 0x82 | Lockup ON / 6th |
| 0x83 | Lockup ON / NR |
| 0x84 | Lockup ON / ND1st |
| 0x85 | Lockup ON / ND2nd |
| 0x86 | Lockup ON / ND3rd |
| 0x87 | Lockup ON / ND4th |
| 0x88 | Lockup ON / ND5th |
| 0x89 | Lockup ON / ND6th |
| 0xC9 | Lockup Slip / 1-1EB |
| 0xCA | Lockup Slip / 1-2 |
| 0XCB | Lockup Slip / 1-3 |
| 0xCC | Lockup Slip / 2-3 |
| 0xCD | Lockup Slip / 2-4 |
| 0XCE | Lockup Slip / 2-6 |
| 0xCF | Lockup Slip / 3-4 |
| 0xD0 | Lockup Slip / 3-5 |
| 0xD1 | Lockup Slip / 4-5 |
| 0xD2 | Lockup Slip / 4-6 |
| 0xD3 | Lockup Slip / 5-6 |
| 0xD4 | Lockup Slip / 1EB-1 |
| 0xD5 | Lockup Slip / 2-1 |
| 0xD6 | Lockup Slip / 3-1 |
| 0xD7 | Lockup Slip / 3-2 |
| 0xD8 | Lockup Slip / 4-2 |
| 0xD9 | Lockup Slip / 6-2 |
| 0xDA | Lockup Slip / 4-3 |
| 0xDB | Lockup Slip / 5-3 |
| 0xDC | Lockup Slip / 5-4 |
| 0xDD | Lockup Slip / 6-4 |
| 0xDE | Lockup Slip / 6-5 |
| 0xDF | Lockup Slip / R |
| 0xE0 | Lockup Slip / N |
| 0xE1 | Lockup Slip / 1st |
| 0xE2 | Lockup Slip / 2nd |
| 0xE3 | Lockup Slip / 3rd |
| 0xE4 | Lockup Slip / 4th |
| 0xE5 | Lockup Slip / 5th |
| 0xE6 | Lockup Slip / 6th |
| 0xE7 | Lockup Slip / NR |
| 0xE8 | Lockup Slip / ND1st |
| 0xE9 | Lockup Slip / ND2nd |
| 0xEA | Lockup Slip / ND3rd |
| 0xEB | Lockup Slip / ND4th |
| 0xEC | Lockup Slip / ND5th |
| 0xED | Lockup Slip / ND6th |
| 0xXY | Not Plausible Gear Conditionl |

### STATUS_RBM_TABEL

| NAME | BYTE | ADDRESS |
| --- | --- | --- |
| STATUS_RBM_GEARERROR_1E_B_NUMERATOR | 2 | 0xFF79AE |
| STATUS_RBM_GEARERROR_1ST_NUMERATOR | 2 | 0xFF79B2 |
| STATUS_RBM_GEARERROR_2ND_NUMERATOR | 2 | 0xFF79B6 |
| STATUS_RBM_GEARERROR_3RD_NUMERATOR | 2 | 0xFF79BA |
| STATUS_RBM_GEARERROR_4TH_NUMERATOR | 2 | 0xFF79BE |
| STATUS_RBM_GEARERROR_5TH_NUMERATOR | 2 | 0xFF79C2 |
| STATUS_RBM_GEARERROR_5TH_DENOMINATOR | 2 | 0xFF79C4 |
| STATUS_RBM_GEARERROR_6TH_NUMERATOR | 2 | 0xFF79C6 |
| STATUS_RBM_GEARERROR_6TH_DENOMINATOR | 2 | 0xFF79C8 |
| STATUS_RBM_SP_NOPULSE_NUMERATOR | 2 | 0xFF79CA |
| STATUS_RBM_C1_NOPULSE_NUMERATOR | 2 | 0xFF79CE |
| STATUS_RBM_LUP_OFF_STUCK_NUMERATOR | 2 | 0xFF79D2 |
| STATUS_RBM_SLC1_STUCK_NUMERATOR | 2 | 0xFF79D6 |
| STATUS_RBM_SLC2_STUCK_NUMERATOR | 2 | 0xFF79DA |
| STATUS_RBM_SLC3_STUCK_NUMERATOR | 2 | 0xFF79DE |
| STATUS_RBM_SLB1_STUCK_NUMERATOR | 2 | 0xFF79E2 |
| STATUS_RBM_SLT_STUCK_NUMERATOR | 2 | 0xFF79E6 |
| STATUS_RBM_SLU_STUCK_NUMERATOR | 2 | 0xFF79EA |
| STATUS_RBM_OIL_STUCK_NUMERATOR | 2 | 0xFF79EE |
| STATUS_RBM_C1_WRONGPULSE_NUMERATOR | 2 | 0xFF79F2 |
| STATUS_RBM_SP_WRONGPULSE_NUMERATOR | 2 | 0xFF79F6 |

### CONTROLSTATEUMRECHNUNG

| CONTROLSTATE | CS |
| --- | --- |
| OFF | 0x00 |
| ON | 0xFF |
| AUTOMATIC | 0x03 |
| RCTECU | 0x04 |
|  | 0x05 |

### IDENTIFIER_LESEN

| IDENTIFIER | SIGNAL | 0X00 | 0XFF |
| --- | --- | --- | --- |
| 0x01 | S1 | OFF | ON |
| 0x02 | S2 | OFF | ON |
| 0x03 | SLC1 | <=100mA | >100mA |
| 0x04 | SLC2 | <=100mA | >100mA |
| 0x05 | SLC3 | <=100mA | >100mA |
| 0x06 | SLB1 | <=100mA | >100mA |
| 0x07 | SLT | <=100mA | >100mA |
| 0x08 | SLU | <=100mA | >100mA |
| 0x09 | SHIFTLOCK | OFF | ON |
| 0x00 | Not used | - | - |

### IDENTIFIER_SETZEN

| IDENTIFIER | SIGNAL | 0X00 | 0X01 | 0X02 |
| --- | --- | --- | --- | --- |
| 0x01 | S1 | OFF | - | ON |
| 0x02 | S2 | OFF | - | ON |
| 0x03 | SLC1 | <=100mA | - | >100mA |
| 0x04 | SLC2 | <=100mA | - | >100mA |
| 0x05 | SLC3 | <=100mA | - | >100mA |
| 0x06 | SLB1 | <=100mA | - | >100mA |
| 0x07 | SLT | <=100mA | - | >100mA |
| 0x08 | SLU | <=100mA | - | >100mA |
| 0x09 | SHIFTLOCK | OFF | - | ON |
| 0x00 | Not used |  |  |  |

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
