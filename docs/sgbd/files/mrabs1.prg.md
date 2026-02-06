# mrabs1.prg

## General

|  |  |
| --- | --- |
| File | mrabs1.prg |
| Type | PRG |
| Jobs | 76 |
| Tables | 29 |
| Origin | BMW UX-ER-4 Mayer Anton |
| Revision | 1.009 |
| Author | BMW_AG UX-EE-1 Krimmer |
| ECU Comment | Nur fuer ABS Bosch 8MPlus (K29_HP, K72, K73, K25_MegaMoto) und ABS 9M (K18/19) sowie ABS 9MPlus (K70, K71_Mue, K72_Mue, K73_Mue, H91, H61) wg. Logistikzaehler |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MRABS1 |  |  |
| ORIGIN | string | BMW UX-ER-4 Mayer Anton |  |  |
| REVISION | string | 1.009 |  |  |
| AUTHOR | string | BMW_AG UX-EE-1 Krimmer |  |  |
| COMMENT | string | Nur fuer ABS Bosch 8MPlus (K29_HP, K72, K73, K25_MegaMoto) und ABS 9M (K18/19) sowie ABS 9MPlus (K70, K71_Mue, K72_Mue, K73_Mue, H91, H61) wg. Logistikzaehler |  |  |
| PACKAGE | string | 1.58 |  |  |
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

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

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

### STEUERN_FG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob KWP2000: $3B WriteDataByLocalIdentifier $90 Vehicle Identification Number KWP2000: $1A ReadECUIdentification $90 Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (17-stellig) |

### SUPPLIER_SW_NUMBER

Reads the system supplier ECU software number KWP2000: $1A Ecu Identification $94 SystemSupplierECUSoftwareNumber Modus: Default

_No arguments._

### SUPPLIER_HW_NUMBER

Reads the system supplier ECU hardware number KWP2000: $1A Ecu Identification $92 SystemSupplierECUHardwareNumber Modus: Default

_No arguments._

### SUPPLIER_SW_VERSION_NUMBER

Reads the supplier software version number KWP2000: $1A Ecu Identification $95 Robert Bosch ECU software version number Modus: Default

_No arguments._

### STATUS_FLASH_COUNTER

Flashcounter counts the number of flash writes correctly completed or aborted KWP2000: $21 ReadDataByLocalIdentifier $10 FlashCounter Modus: Default

_No arguments._

### STATUS_WHEEL_SPEED

Reads front and rear wheel speed KWP2000: $21 ReadDataByLocalIdentifier $01 Wheel Speed Modus: Default

_No arguments._

### STATUS_DIGITAL_INPUT

Read digital input signals KWP2000: $21 ReadDataByLocalIdentifier $03 digital input Modus: Default

_No arguments._

### STATUS_CAN_INPUT

Reads CAN Input KWP2000: $21 ReadDataByLocalIdentifier $04 CAN Input Modus: Default

_No arguments._

### STEUERN_EVAC_AND_FILL

Note: The valve protection for the AVs is switched off during this test Therefore the test should not be repeated too often in case of a long control duration KWP2000: $30 InputOutputControlByLocalId $01 Local ID EvacAndFill $07 InputOutputControlParameter Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| ACT_TIME | unsigned char | 0..150 [s] time <= 150sec |
| DELAY_TIME | unsigned char | 0..254 [s] pump activation delay time the value 0 causes no pump activation |

### STATUS_EVAC_AND_FILL

Read status Evac and Fill KWP2000:      $33 RequestRoutingResultsByLocalId $01 EvacAndFill Modus:        Default

_No arguments._

### STEUERN_REPAIR_BLEEDING

Note: The phase must always begin with the 1.phase and be processed in ascending order It is permitted to repeat the same phase. However no phase may be skipped. If it is disregarded, the pump can be damaged by dry running. KWP2000: $30 InputOutputControlByLocalId $02 Local ID Repair Bleeding $07 InputOutputControlParameter Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| PHASE | unsigned char | Phase 1 - 4 |
| REPETITION | unsigned char | Repetition 3 - 5 times (only in phase 2 and 4) |

### STATUS_REPAIR_BLEEDING

Read status Repair Bleeding KWP2000:      $33 RequestRoutingResultsByLocalId $02 RepairBleeding Modus:        Default

_No arguments._

### STEUERN_SPEED_SENSOR_TEST

Activating of the speed sensor test KWP2000: $30 InputOutputControlByLocalId $03 Local ID speed sensor test $07 InputOutputControlParameter Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| DURATION | unsigned int | test duration 0..327 sec 100 = 1 sec, [10 msec] |

### STATUS_SPEED_SENSOR_TEST

Read status SpeedSensorTest KWP2000:      $33 RequestRoutingResultsByLocalId $03 SpeedSensorTest Modus:        Default

_No arguments._

### STEUERN_ACTUATOR_TEST

Activating of the acutator test KWP2000: $30 InputOutputControlByLocalId $04 Local ID actuator test $07 InputOutputControlParameter Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| DATA | binary | 18 DataBytes for Job control  *************************************************************** DATA_LAYOUT: ***************************************************************  \| Byte  \|  Contents                                \|  Value    \| --------------------------------------------------------------- 1,2      1.Activation value (HB,LB)                 xx xx (Hex) 3,4      1.Actuator number (HB,LB)                  xx xx (Hex) 5,6      2.Activation value (HB,LB)                 xx xx (Hex) 7,8      2.Actuator number (HB,LB)                  xx xx (Hex) 9,10     Waiting time between activations (HB,LB)   xx xx (Hex) .        resolution 10ms/Bit                        . 11,12    3.Activation value (HB,LB)                 xx xx (Hex) 13,14    3.Actuator number (HB,LB)                  xx xx (Hex) 15,16    4.Activation value (HB,LB)                 xx xx (Hex) 17,18    4.Actuator number (HB,LB)                  xx xx (Hex)    *************************************************************** ACTUATOR TABLE (see also Appendix A in specification): ***************************************************************  \|N°  \| Channel                     \| Resolution/Remarks (value) \| ---------------------------------------------------------------- 0000  No activation ---------------------------------------------------------------- 0022  Pump-motor relais             FFFF: on .     Return pump (MRA)             0000: off ---------------------------------------------------------------- 0028  Joint activation of all EVs   0 = not selected .     .                             1 = selected .     .                             Bit4: EV rear .     .                             Bit6: EV front .     .                             Bit8-15: Intensity in 1% per Bit .     .                                      00 = off .     .                                      01 - FF = on ---------------------------------------------------------------- 002A  Joint activation of all AVs   0 = not selected .     .                             1 = selected .     .                             Bit5: AV rear .     .                             Bit7: AV front .     .                             Bit8-15: Intensity in 1% per Bit .     .                                      00 = off .     .                                      01 - FF = on ---------------------------------------------------------------- 0030  EV front (EV-V)               0000: off .     .                             0001-FFF: on .     .                             Resolution: 1% per Bit ---------------------------------------------------------------- 0032  AV front (AV-V)               0000: off .     .                             0001-FFF: on .     .                             Resolution: 1% per Bit ---------------------------------------------------------------- 0038  EV rear (EV-H)                0000: off .     .                             0001-FFF: on .     .                             Resolution: 1% per Bit ---------------------------------------------------------------- 003A  AV rear (AV-H)                0000: off .     .                             0001-FFF: on .     .                             Resolution: 1% per Bit ---------------------------------------------------------------- 005E  Disable Valve-Protection      A5: disable shut down .     .                             00: enable shut down ---------------------------------------------------------------- 0064  Disable VR-shut down          A5: disable shut down .     .                             00: enable shut down ---------------------------------------------------------------- 0068  Disable abort of diagnosis    FF: disable shut down .     by speed limit                00: enable abort  Note: The AVs are used as a switch valve. When the activation value is not 0%, the software set it to 100% automatically |

### STATUS_ACTUATOR_TEST

Read status ActuatorTest KWP2000:      $33 RequestRoutineResultsByLocalId $04 ActuatorTest Modus:        Default

_No arguments._

### STEUERN_DYNAMIC_TEST

Activating of the dynamic test KWP2000: $30 InputOutputControlByLocalId $04 Local ID dynamic test $07 InputOutputControlParameter Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| DATA | binary | 20 (!) DataBytes for Job Argument  *************************************************************** DATA_LAYOUT: ***************************************************************  \| Byte  \|  Contents                                \|  Value    \| --------------------------------------------------------------- 1,2      1.Activation value (HB,LB)                 xx xx (Hex) 3,4      1.Actuator number (HB,LB)                  xx xx (Hex) 5,6      2.Activation value (HB,LB)                 xx xx (Hex) 7,8      2.Actuator number (HB,LB)                  xx xx (Hex) 9,10     Waiting time between activations (HB,LB)   xx xx (Hex) .        resolution 10ms/Bit                        . 11,12    3.Activation value (HB,LB)                 xx xx (Hex) 13,14    3.Actuator number (HB,LB)                  xx xx (Hex) 15,16    4.Activation value (HB,LB)                 xx xx (Hex) 17,18    4.Actuator number (HB,LB)                  xx xx (Hex) 19,20    Waiting time after 2.activation (HB,LB)    xx xx (Hex) .        resolution 10ms/Bit                        .    *************************************************************** ACTUATOR TABLE (see also Appendix A in specification): ***************************************************************  \|N°  \| Channel                     \| Resolution/Remarks (value) \| ---------------------------------------------------------------- 0000  No activation ---------------------------------------------------------------- 0022  Pump-motor relais             FFFF: on .     Return pump (MRA)             0000: off ---------------------------------------------------------------- 0028  Joint activation of all EVs   0 = not selected .     .                             1 = selected .     .                             Bit4: EV rear .     .                             Bit6: EV front .     .                             Bit8-15: Intensity in 1% per Bit .     .                                      00 = off .     .                                      01 - FF = on ---------------------------------------------------------------- 002A  Joint activation of all AVs   0 = not selected .     .                             1 = selected .     .                             Bit5: AV rear .     .                             Bit7: AV front .     .                             Bit8-15: Intensity in 1% per Bit .     .                                      00 = off .     .                                      01 - FF = on ---------------------------------------------------------------- 0030  EV front (EV-V)               0000: off .     .                             0001-FFF: on .     .                             Resolution: 1% per Bit ---------------------------------------------------------------- 0032  AV front (AV-V)               0000: off .     .                             0001-FFF: on .     .                             Resolution: 1% per Bit ---------------------------------------------------------------- 0038  EV rear (EV-H)                0000: off .     .                             0001-FFF: on .     .                             Resolution: 1% per Bit ---------------------------------------------------------------- 003A  AV rear (AV-H)                0000: off .     .                             0001-FFF: on .     .                             Resolution: 1% per Bit ---------------------------------------------------------------- 005E  Disable Valve-Protection      A5: disable shut down .     .                             00: enable shut down ---------------------------------------------------------------- 0064  Disable VR-shut down          A5: disable shut down .     .                             00: enable shut down ---------------------------------------------------------------- 0068  Disable abort of diagnosis    FF: disable shut down .     by speed limit                00: enable abort  Note: The AVs are used as a switch valve. When the activation value is not 0%, the software set it to 100% automatically |

### STATUS_DYNAMIC_TEST

Read status DynamicTest KWP2000:      $33 RequestRoutineResultsByLocalId $05 DynamicTest Modus:        Default

_No arguments._

### STEUERN_WSS_FRONT_MISSING_TEETH_TEST

Activating front missing teeth test KWP2000: $30 InputOutputControlByLocalId $06 Front missing teeth test $07 InputOutputControlParameter Modus:        Default

_No arguments._

### STATUS_WSS_FRONT_MISSING_TEETH_TEST

Status Missing teeth test KWP2000:      $33 RequestRoutingResultsByLocalId $06 WSSFrontMissingTeethTest Modus:        Default

_No arguments._

### STEUERN_WSS_REAR_MISSING_TEETH_TEST

Activating rear missing teeth test KWP2000: $30 InputOutputControlByLocalId $06 Rear missing teeth test $07 InputOutputControlParameter Modus:        Default

_No arguments._

### STATUS_WSS_REAR_MISSING_TEETH_TEST

Status Missing teeth test KWP2000:      $33 RequestRoutingResultsByLocalId $07 WSSRearMissingTeethTest Modus:        Default

_No arguments._

### STEUERN_STOP_ACTUATION

KWP2000: $30 InputOutputControlByLocalId $10 Local ID StopActuation $07 InputOutputControlParameter Modus:        Default

_No arguments._

### STEUERN_RETURN_PUMP

Activating the return pump KWP2000: $30 InputOutputControlByLocalId $04 Local ID actuator test $07 InputOutputControlParameter Implementation see Appendix B: Acutator Table Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_ALL_VALVES

Activating all valves KWP2000: $30 InputOutputControlByLocalId $04 Local ID actuator test $07 InputOutputControlParameter Implementation see Appendix B: Acutator Table Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_EV_FRONT

Activating EV front KWP2000: $30 InputOutputControlByLocalId $04 Local ID actuator test $07 InputOutputControlParameter Implementation see Appendix B: Acutator Table Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | int | Bereich: 0 bis 100 [%] |

### STEUERN_EV_REAR

Activating EV rear KWP2000: $30 InputOutputControlByLocalId $04 Local ID actuator test $07 InputOutputControlParameter Implementation see Appendix B: Acutator Table Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | int | Bereich: 0 bis 100 [%] |

### STEUERN_AV_FRONT

Activating AV front KWP2000: $30 InputOutputControlByLocalId $04 Local ID actuator test $07 InputOutputControlParameter Implementation see Appendix B: Acutator Table Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_AV_REAR

Activating AV rear KWP2000: $30 InputOutputControlByLocalId $04 Local ID actuator test $07 InputOutputControlParameter Implementation see Appendix B: Acutator Table Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| IO_VALUE | string | Werte: 0, 1 table DigitalArgument TEXT |

### STEUERN_RESET_VARIANT

Reset Coding Variant KWP2000: $2E $30 $00 $FF Default (Reset)

_No arguments._

### STATUS_VARIANT

Reading of the learnt Variant KWP2000:      $22 ReadDataByCommonId $00$01 internal variant value Modus:        Default

_No arguments._

### _STEUERN_TELEGRAMM_TEST

Activating of the acutator test KWP2000: $30 InputOutputControlByLocalId $XX $07 InputOutputControlParameter Modus:        Default

| Name | Type | Description |
| --- | --- | --- |
| DATA_STRING | binary |  |

### STATUS_ANALOG_INPUT

Read analog input signals KWP2000: $21 ReadDataByLocalIdentifier $02 Analog input signals Modus: Default

_No arguments._

### SUPPLIER_SERIAL_NUMBER

report supplier serialnumber KWP2000: $1A ReadECUIdentification $96 Robert Bosch ECU ID (serial number) Modus  : Default

_No arguments._

### STATUS_MU_JUMP_COUNTER

Return Mu-jump counter value It is incremented in case ABS recognized Hi-mu to Low mu surface transition KWP2000: $21 ReadDataByLocalIdentifier $05 Mu-Jump Counter Modus: Default

_No arguments._

### STATUS_OFFSET_PRESSURE_SENSOR

Read status Pressure Sensor Offset KWP2000:      $33 RequestRoutingResultsByLocalId $08 Pressure Sensor Offset Modus:        Default

_No arguments._

### _STEUERN_CALIBRATION_PRESSURE_SENSOR

1. During Pressure sensor calibration both brakes must be in released state and the hydraulic brake must be in a calm condition from minimum 1s before the pressure sensor calibration service is triggered and until this calibration service is successfully completed Note: Suppose If pressure sensor calibration process is disturbed ex: brake input, an incorrect pressure sensor calibration value might be recorded in our EEPROM 2. If the pressure value exceeds +15bar, test procedure is stopped and sends Negative Response KWP2000: $30 InputOutputControlByLocalId $08 Local ID Pressure Sensor Calibration $07 InputOutputControlParameter Modus:        Default

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| - | BMW-FAST |
| - | KWP2000* |
| 1 | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x6322 | Impulsgeber vorn, Signal: fehlt  |
| 0x6324 | Impulsgeber vorn, Signal: unplausibel |
| 0x6325 | Impulsgeber vorn, Luftspalt |
| 0x633E | Impulsgeber hinten, Signal: fehlt |
| 0x6340 | Impulsgeber hinten, Signal: unplausibel |
| 0x6341 | Impulsgeber hinten, Luftspalt |
| 0x6350 | Ventil Übertemperaturschutz |
| 0x635C | Radschlupf |
| 0x635E | Impulsgeber Spannungsversorgung, Kurzschluss nach + |
| 0x6360 | Drucksensor Offset Fehler |
| 0x6364 | Drucksensor Hardware Defekt |
| 0x638C | Pumpenmotor |
| 0x6390 | Ventilrelais |
| 0x6398 | Einlassventil vorn |
| 0x639D | Auslassventil vorn |
| 0x63B3 | Einlassventil hinten |
| 0x63B8 | Auslassventil hinten |
| 0x63BC | Bordnetz Ueberspannung |
| 0x63BD | Bordnetz Unterspannung |
| 0x63C0 | Variantenkodierung: fehlerhaft |
| 0x63C1 | Steuergerät: interner Fehler |
| 0x63C2 | ABS Taster |
| 0xE911 | CAN Initialisierung: fehlerhaft |
| 0xE921 | CAN Bus Off |
| 0xE931 | CAN Nachricht Sendefehler |
| 0xE932 | CAN Time Out KOMBI_DATA |
| 0xE933 | CAN Time Out ZFE_2 |
| 0xE934 | CAN Time Out ENGINE_1 |
| 0xE935 | CAN Time Out ENGINE_2 |
| 0xE936 | CAN Time Out MOD_VEH |
| 0xE937 | CAN Alive Zaehler Fehler MOD_VEH |
| 0xE938 | CAN Checksummen Fehler MOD_VEH |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | DIGITAL_1 | DIGITAL_2 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | - | unsigned char | - | 1 | 10 | 0 |
| 0x02 | Geschwindigkeit | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x03 | Gang | 0-n | - | 0x0F | Gang | 1 | 1 | 0 |
| 0x04 | Motordrehzahl(1/min) | 0-n | - | 0x70 | Drehzahl | 1 | 1 | 0 |
| 0x05 | Kupplung | 0/1 | - | 0x80 | - | 1 | 1 | 0 |
| 0x06 | ABS aktiv | 0/1 | - | 0x01 | - | 1 | 1 | 0 |
| 0x07 | ABS OFF Funktion aktiv | 0/1 | - | 0x02 | - | 1 | 1 | 0 |
| 0x08 | BLS vorne | 0/1 | - | 0x04 | - | 1 | 1 | 0 |
| 0x09 | BLS hinten | 0/1 | - | 0x08 | - | 1 | 1 | 0 |
| 0x0A | EV vorne | 0/1 | - | 0x10 | - | 1 | 1 | 0 |
| 0x0B | EV hinten | 0/1 | - | 0x20 | - | 1 | 1 | 0 |
| 0x0C | AV vorne | 0/1 | - | 0x40 | - | 1 | 1 | 0 |
| 0x0D | AV hinten | 0/1 | - | 0x80 | - | 1 | 1 | 0 |

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

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### DIGITAL_2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B | 0x0C | 0x0D |

### DIGITAL_1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x03 | 0x04 | 0x05 |

### GANG

| WERT | UWTEXT |
| --- | --- |
| 0x00 | reserviert |
| 0x01 | Gang: 1 |
| 0x02 | Neutral |
| 0x04 | Gang: 2 |
| 0x07 | Gang: 3 |
| 0x08 | Gang: 4 |
| 0x0B | Gang: 5 |
| 0x0D | Gang: 6 |
| 0xXY | ungültig |

### DREHZAHL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | 0 |
| 0x10 | 1-1000 |
| 0x20 | 1001-2000 |
| 0x30 | 2001-3000 |
| 0x40 | 3001-4000 |
| 0x50 | 4001-5000 |
| 0x60 | 5001-6000 |
| 0x70 | > 6000 |
| 0xXY | ungültig |

### BLS_STATUS

| WERT | TEXT |
| --- | --- |
| 0x01 | Schalter aktiv |
| 0x02 | Schalter nicht aktiv |
| 0x04 | Fehler Schalter |
| 0x07 | Signal ungültig |
| 0xXY | ungültig |

### STATUS_EVACFILL_AND_REPAIRBLEEDING

| WERT | TEXT |
| --- | --- |
| 0x00 | Funktion wurde initialisiert |
| 0x01 | Funktion noch nicht beendet |
| 0x02 | Funktion beendet |
| 0x04 | Funktion wurde unterbrochen |
| 0x08 | Fehler während Funktion |
| 0x10 | Initialisierung während Funktion |
| 0xXY | ungültig |

### VARIANTE_ABS

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Codierung |
| 0x12 | K18/K19 |
| 0x21 | K71 |
| 0x22 | K72 650 ccm und K70 |
| 0x23 | K73 |
| 0x24 | K72 StreetMoto |
| 0x25 | H91 |
| 0x26 | H91 R |
| 0x27 | H61 TE |
| 0x28 | H61 SM |
| 0x29 | K71 mit ABS Taster |
| 0x2A | K72 800 ccm und K75 ohne Modus |
| 0x2B | K73 mit ABS Taster |
| 0x2C | K72 800 ccm und K75 mit Modus |
| 0x41 | K25 / K25 HP |
| 0x42 | K26 |
| 0x43 | K28 |
| 0x44 | K29 |
| 0x45 | K27 |
| 0x46 | K25 Megamoto |
| 0x47 | K27 ABS abschaltbar |
| 0x48 | K25 Adventure |
| 0x49 | K25 ABS/ASC abschaltbar |
| 0x4A | K25 Adventure ABS/ASC abschaltbar |
| 0x4B | K21 |
| 0x4C | K29 HP |
| 0x4D | K26 ABS/ASC abschaltbar |
| 0x4E | K27 ABS/ASC abschaltbar |
| 0x4F | K28 ABS/ASC abschaltbar |
| 0x81 | K40 |
| 0x82 | K43 |
| 0x83 | K44 |
| 0x84 | K40 ABS/ASC abschaltbar |
| 0x85 | K43 ABS/ASC abschaltbar |
| 0x86 | K44 ABS/ASC abschaltbar |
| 0xA1 | K46 |
| 0xA2 | - |
| 0xFF | nicht gültig |

### STATUS_WSS_MISS_TEETH

| WERT | TEXT |
| --- | --- |
| 0x01 | Ergebnis nicht möglich |
| 0x02 | Ergebnis erfolgreich |
| 0x03 | Ergebnis fehlerhaft |
| 0xXY | ungültig |

### VARIANTE_DATENSATZ

| VAR_NR | VAR_TEXT |
| --- | --- |
| 0x01 | K29 |
| 0x02 | K71 mit ABS Taster |
| 0x03 | K71 ohne ABS Taster |
| 0x04 | K25 HP |
| 0x05 | K72 650 ccm und K70 |
| 0x06 | K72 800 ccm und K75 ohne Modus |
| 0x07 | K29 HP |
| 0x08 | K25 MegaMoto |
| 0x09 | K73 mit ABS Taster |
| 0x0A | K73 ohne ABS Taster |
| 0x0B | K18/19 |
| 0x0C | H91 |
| 0x0D | H91 R |
| 0x0E | K72 800 ccm und K75 mit Modus |
| 0x0F | H61 TE Enduro |
| 0x10 | H61 SM Street Motard |
| 0x11 | K21 |
| 0xFF | keine Variante codiert |
| 0xXY | ungültig |
