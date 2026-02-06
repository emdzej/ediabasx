# tcm_72.prg

## General

|  |  |
| --- | --- |
| File | tcm_72.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 42 |
| Origin | BMW EA-412 Andreas_Glotz |
| Revision | 5.001 |
| Author | Micronova_AG EA-412 Martin_Flach, Hays_AG EA-412 Tilo_Grune, ES |
| ECU Comment | Erst ab EDIABAS Version 7.1 benutzbar, da zu viele STRING-Variable wegen  FSP_Detail_Lesen |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Transmission Control Module (TCM) |  |  |
| ORIGIN | string | BMW EA-412 Andreas_Glotz |  |  |
| REVISION | string | 5.001 |  |  |
| AUTHOR | string | Micronova_AG EA-412 Martin_Flach, Hays_AG EA-412 Tilo_Grune, ES |  |  |
| COMMENT | string | Erst ab EDIABAS Version 7.1 benutzbar, da zu viele STRING-Variable wegen  FSP_Detail_Lesen |  |  |
| PACKAGE | string | 1.13 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $02 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen UDS  : $14 ClearDiagnosticInformation UDS  : $FF DTCHighByte UDS  : $FF DTCMiddleByte UDS  : $FF DTCLowByte Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | 0x??????: Angabe eines einzelnen Fehlers Default: 0xFFFFFF: alle Fehler |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels UDS  : $22   ReadDataByIdentifier UDS  : $1000 TestStamp Modus: Default

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. UDS  : $2E   WriteDataByIdentifier UDS  : $1000 TestStamp Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten UDS  : $3E TesterPresent UDS  : $?0 suppressPosRspMsgIndication Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen UDS  : $10 StartDiagnosticSession Modus: einstellbar mit diesem Job

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen(einzelner Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $06 reportDTCExtendedDataRecordByDTCNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Fehlercode |

### IDENT

Identdaten auslesen UDS  : $22   ReadDataByIdentifier UDS  : $3F51 Sub-Parameter SGBD-Index UDS  : $3F3C Sub-Parameter SGBD-Index UDS  : $3F36 Sub-Parameter SGBD-Index UDS  : $3F38 Sub-Parameter SGBD-Index UDS  : $3F3A Sub-Parameter SGBD-Index UDS  : $3F30 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

_No arguments._

### ZIF_LESEN

Auslesen des Zulieferinfofeldes KWP2000: $22   ReadDataByCommonIdentifier $2503 ProgrammReferenz und KWP2000: $1A   ReadECUIdentification $91   VehicleManufacturerECUHardware*Number oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus: Default

_No arguments._

### DATEN_REFERENZ_LESEN

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier $2504 DREF Modus  : Default

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob Modus   : Default

_No arguments._

### STATUS_IO_LESEN

IO-Status und Messwerte fuer TCM $22   SID ReadDataByIdentifier Modus: Default

_No arguments._

### STATUS_DRUCKREGELVENTILE_LESEN

Status Druckregelventile $22     SID ReadDataByIdentifier $02 $06 DID Messwert Modus: Default

_No arguments._

### STATUS_PRESSURE_SWITCH_LESEN

Status Druckschalter $22     SID ReadDataByIdentifier $02 $05 DID Messwert Modus: Default

_No arguments._

### STATUS_X_VALVE

Status X-Ventil $22     SID ReadDataByIdentifier $02 $07 DID Messwert Modus: Default

_No arguments._

### STATUS_Y_VALVE

Status Sollwertposition Y-Ventil $22     SID ReadDataByIdentifier $02 $08 DID Messwert Modus: Default

_No arguments._

### STATUS_EWS_EGS_LESEN

Status EWS $22     SID ReadDataByIdentifier $02 $00 DID Messwert Modus: Default

_No arguments._

### STEUERN_EWS_EGS

Rücksetzen der ISN, wenn Randbedingungen erfüllt Keine Übergabeparameter $2E     SID WriteDataByIdentifier $F2 $00 DID Messwert Modus: Default

_No arguments._

### _STEUERN_EWS_ISN_ZAEHLER_RUECKSETZEN

Rücksetzen der Zähler für inhaltlich falsche ISN beider Übertragungspfade Keine Übergabeparameter $2E   SID WriteDataByIdentifier $F201 DID Messwert Modus: Default

_No arguments._

### STEUERN_RESET_ADAPTS

Rücksetzen aller Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Werttabelle 0 = Reset nicht ausfuehren 1 = Reset ausfuehren |

### STATUS_ADAPTS_LESEN

Auslesen der Adaptionswerte

_No arguments._

### STATUS_NOTLAUF_LESEN

Diagnose Job Status_Notlauf

_No arguments._

### STEUERN_RESET_RBM_RATIOS

Ruecksetzen aller RBM-Zaehler

_No arguments._

### STATUS_RBM_RATIOS_LESEN

Auslesen der Rate Based Monitoring Groessen

_No arguments._

### STATUS_CVN_LESEN

CVN-Nummer, die Software- und und Datenstand repraesentiert

_No arguments._

### STATUS_FOM_LESEN

Status Diagnose FOMs

_No arguments._

### STATUS_DIAGNOSEZAEHLER_LESEN

Status der Diagnosezaehler

_No arguments._

### STEUERN_EMPI_DREHZAHL_AKTIVIERUNG

Umschalten der EMPI-Drehzahlvorgabe auf manuellen Betrieb

| Name | Type | Description |
| --- | --- | --- |
| AKTION | string | Umschalten der EMPI-Drehzahlvorgabe auf manuellen Betrieb Werttabelle 0 = AUS 1 = EIN Erforderliche Vorbedingungen: - V=0 km/h - Fahrzeug steht - Kl15 ein - Verbrenner aus - E-Motoren drehen nicht |

### STEUERN_EMPI_DREHZAHL_PROZENT

Vorgeben der Drehzahl der EMPI in Prozent $2E           SID WriteDataByIdentifier $F2 $13       DID Messwert Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| PROZENT | unsigned int | Vorgeben der Drehzahl der EMPI in Prozent 0- 100 % entspricht 0-1250 U/min Aufloesung: 1 % |

### _BUILD_IDENT_LESEN

Auslesen der Build Informations Felder Standard Flashjob Modus   : Default

_No arguments._

### _STATUS_FLASHPROG_PRECONDITION_LESEN

Rückgabe der Vorbedingungen, die beim Flashen ueber WinKFP aktiv waren. Job darf nur unmittelbar nach dem Flashen aufgerufen werden, durch z.B. Klemmenwechsel werden die Preconditions nur wieder zurückgesetzt! WICHTIG: STAT_SPERRE_HOCHVOLT_AKTIV kann nur mittels gleichnamigen Job vom HCP festgestellt werden $22     SID ReadDataByIdentifier $03 $01 DID Messwert Modus: Default

_No arguments._

### _STATUS_PROZESSOR_LESEN_JOBS

Reset-Statistik, Resetursachen, Resetadressen Status der Level 3-Tests, NVM-Status/Checksummen Hoechste erreichte Anzahl von(Running-)Resets zwischen 2 PowerUp-Resets PowerUp-Reset setzt Wert zurueck Wert wird bei Klemme15- und Batteriewechsel nicht zurueckgesetzt $22     SID ReadDataByIdentifier $20 $4B DID Messwert Anzahl der Resets seit der letzten Neuprogrammierung Powerup-Resets(Watchdog) werden nicht erfasst Klemme15- und Batteriewechsel haben auf den Wert keinen Einfluss $22     SID ReadDataByIdentifier $20 $4A DID Messwert Ursache des letzten Resets $22     SID ReadDataByIdentifier $12 $DE DID Messwert Adresse, an der der letzte Resets aufgetreten  ist $22     SID ReadDataByIdentifier $12 $E7 DID Messwert Adresse, an der vom RAM-Test eine Fehler festgestellt wurde $22     SID ReadDataByIdentifier $20 $34 DID Messwert Status der Processorueberwachung FUSI-Level 3 $22     SID ReadDataByIdentifier $20 $39 DID Messwert Status der Checksummen- und Lesepruefung aller NVM-RAM Bereiche $22     SID ReadDataByIdentifier $20 $33 DID Messwert Modus: Default

_No arguments._

### _STATUS_RESET_URSACHE

Auslesen der Reset Ursache Es werden 6 Pakete zurückgeliefert  1 Paket: Reset der nicht durch einen PowerUp Reset verursacht wurde. 5 Pakete: Alle zuletzt aufgetretenen Resets Inhalt eines Pakets: - Sammelfehler für Prozessorhardware - Stack Overflow - ROM Fehler - RAM Fehler - PLD Komunikations Fehler - Force Controller Reset - Background-LoopMax Wert - km-Stand - ResetSourceAddress - ResetSource - Program/Datenstand  Beschreibung der Results wird hier nur an Hand des 1.Paket gemacht. Die anderen Pakete sind analog zu betrachten.

_No arguments._

### _STAY_IN_BOOT

Job bewirkt ein Hängenbleiben im Boot Senden des Jobs 11 01 (Reset) und dann 2 sec lang im 5ms Raster 10 02

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED |
| 0x13 | ERROR_ECU_INCORRECT_MESSAGE_LENGTH_OR_INVALID_FORMAT |
| 0x14 | ERROR_ECU_RESPONSE_TOO_LONG |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT |
| 0x24 | ERROR_ECU_REQUEST_SEQUENCE_ERROR |
| 0x25 | ERROR_ECU_NO_RESPONSE_FROM_SUBNET_COMPONENT |
| 0x26 | ERROR_ECU_FAILURE_PREVENTS_EXECUTION_OF_REQUESTED_ACTION |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED |
| 0x35 | ERROR_ECU_INVALID_KEY |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0x70 | ERROR_ECU_UPLOAD_DOWNLOAD_NOT_ACCEPTED |
| 0x71 | ERROR_ECU_TRANSFER_DATA_SUSPENDED |
| 0x72 | ERROR_ECU_GENERAL_PROGRAMMING_FAILURE |
| 0x73 | ERROR_ECU_WRONG_BLOCK_SEQUENCE_COUNTER |
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x7E | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x7F | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x81 | ERROR_ECU_RPM_TOO_HIGH |
| 0x82 | ERROR_ECU_RPM_TOO_LOW |
| 0x83 | ERROR_ECU_ENGINE_IS_RUNNING |
| 0x84 | ERROR_ECU_ENGINE_IS_NOT_RUNNING |
| 0x85 | ERROR_ECU_ENGINE_RUN_TIME_TOO_LOW |
| 0x86 | ERROR_ECU_TEMPERATURE_TOO_HIGH |
| 0x87 | ERROR_ECU_TEMPERATURE_TOO_LOW |
| 0x88 | ERROR_ECU_VEHICLE_SPEED_TOO_HIGH |
| 0x89 | ERROR_ECU_VEHICLE_SPEED_TOO_LOW |
| 0x8A | ERROR_ECU_THROTTLE_PEDAL_TOO_HIGH |
| 0x8B | ERROR_ECU_THROTTLE_PEDAL_TOO_LOW |
| 0x8C | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_NEUTRAL |
| 0x8D | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_GEAR |
| 0x8F | ERROR_ECU_BRAKE_SWITCH_NOT_CLOSED |
| 0x90 | ERROR_ECU_SHIFTER_LEVER_NOT_IN_PARK |
| 0x91 | ERROR_ECU_TORQUE_CONVERTER_CLUTCH_LOCKED |
| 0x92 | ERROR_ECU_VOLTAGE_TOO_HIGH |
| 0x93 | ERROR_ECU_VOLTAGE_TOO_LOW |
| ?00? | OKAY |
| ?01? | ERROR_ECU_NO_RESPONSE |
| ?02? | ERROR_ECU_INCORRECT_LEN |
| ?03? | ERROR_ECU_INCORRECT_RESPONSE_ID |
| ?04? | ERROR_ECU_TA_RESPONSE_NOT_SA_REQUEST |
| ?05? | ERROR_ECU_SA_RESPONSE_NOT_TA_REQUEST |
| ?06? | ERROR_ECU_RESPONSE_INCORRECT_DATA_IDENTIFIER |
| ?07? | ERROR_ECU_RESPONSE_TOO_MUCH_DATA |
| ?08? | ERROR_ECU_RESPONSE_TOO_LESS_DATA |
| ?09? | ERROR_ECU_RESPONSE_VALUE_OUT_OF_RANGE |
| ?0A? | ERROR_TABLE |
| ?10? | ERROR_F_CODE |
| ?12? | ERROR_INTERPRETATION |
| ?13? | ERROR_F_POS |
| ?14? | ERROR_ECU_RESPONSE_INCORRECT_IO_CONTROL_PARAMETER |
| ?15? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_TYPE |
| ?16? | ERROR_ECU_RESPONSE_INCORRECT_SUB_FUNCTION |
| ?17? | ERROR_ECU_RESPONSE_INCORRECT_DYNAMICALLY_DEFINED_DATA_IDENTIFIER |
| ?18? | ERROR_ECU_RESPONSE_NO_STRING_END_CHAR |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?80? | ERROR_SVK_INCORRECT_LEN |
| ?81? | ERROR_SVK_INCORRECT_FINGERPRINT |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x000001 | Reinshagen => Delphi |
| 0x000002 | Kostal |
| 0x000003 | Hella |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako |
| 0x000008 | Bosch |
| 0x000009 | Loewe => Lear |
| 0x000010 | VDO |
| 0x000011 | Valeo |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine |
| 0x000018 | Continental Teves |
| 0x000019 | Elektromatik Suedafrika |
| 0x000020 | Becker |
| 0x000021 | Preh |
| 0x000022 | Alps |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi PHI |
| 0x000028 | DODUCO => BERU |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer |
| 0x000033 | Jatco |
| 0x000034 | Fuba |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE |
| 0x000041 | Megamos |
| 0x000042 | TRW |
| 0x000043 | Wabco |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC (Hella Electronics Corporation) |
| 0x000046 | Gemel |
| 0x000047 | ZF |
| 0x000048 | GMPT |
| 0x000049 | Harman Kardon |
| 0x000050 | Remes |
| 0x000051 | ZF Lenksysteme |
| 0x000052 | Magneti Marelli |
| 0x000053 | Borg Instruments |
| 0x000054 | GETRAG |
| 0x000055 | BHTC (Behr Hella Thermocontrol) |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon |
| 0x000058 | Autoliv |
| 0x000059 | Haberl |
| 0x000060 | Magna Steyr |
| 0x000061 | Marquardt |
| 0x000062 | AB-Elektronik |
| 0x000063 | Siemens VDO Borg |
| 0x000064 | Hirschmann Electronics |
| 0x000065 | Hoerbiger Electronics |
| 0x000066 | Thyssen Krupp Automotive Mechatronics |
| 0x000067 | Gentex GmbH |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steering Europe |
| 0x000071 | NSI B.V |
| 0x000072 | AISIN AW CO.LTD |
| 0x000073 | Shorlock |
| 0x000074 | Schrader |
| 0x000075 | BERU Electronics GmbH |
| 0x000076 | CEL |
| 0x000077 | Audio Mobil |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | AKsys GmbH |
| 0x000086 | META System |
| 0x000087 | Hülsbeck & Fürst GmbH & Co KG |
| 0x000088 | Mann & Hummel Automotive GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.A. |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp. |
| 0x000094 | KÜSTER Automotive Control |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental Automotive |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls |
| 0x00009A | Takata- Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN-Driveline |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | PEIKER acustics GmbH |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | ADC Automotive Distance Control Systems GmbH |
| 0x0000A5 | Funkwerk Dabendorf GmbH |
| 0x0000A6 | Lame |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Wanyu |
| 0x0000A9 | Thyssen Krupp Presta |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0xFFFFFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler momentan vorhanden und bereits gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler momentan vorhanden und bereits gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler momentan vorhanden und bereits gespeichert |
| 0x40 | unbekannte Fehlerart |
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x80 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x81 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
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

### PROZESSKLASSEN

| WERT | PROZESSKLASSE | BEZEICHNUNG |
| --- | --- | --- |
| 0x00 | - | ungueltig |
| 0x01 | HWEL | Hardware (Elektronik) |
| 0x02 | HWAP | Hardwareauspraegung |
| 0x03 | HWFR | Hardwarefarbe |
| 0x05 | CAFD | Codierdaten |
| 0x06 | BTLD | Bootloader |
| 0x08 | SWFL | Software ECU Speicherimage |
| 0x09 | SWFF | Flash File Software |
| 0x0A | SWPF | Pruefsoftware |
| 0x0B | ONPS | Onboard Programmiersystem |
| 0x0F | FAFP | FA2FP |
| 0x1A | TLRT | Temporaere Loeschroutine |
| 0x1B | TPRG | Temporaere Programmierroutine |
| 0x07 | FLSL | Flashloader Slave |
| 0x0C | IBAD | Interaktive Betriebsanleitung Daten |
| 0x10 | FCFA | Freischaltcode Fahrzeug-Auftrag |
| 0x1C | BLUP | Bootloader-Update Applikation |
| 0x1D | FLUP | Flashloader-Update Applikation |
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
| 0xC0 | SWUP | Software-Update Package |
| 0xC1 | SWIP | Index Software-Update Package |
| 0xFF | - | ungueltig |

### SVK_ID

| WERT | BEZEICHNUNG |
| --- | --- |
| 0x01 | SVK_AKTUELL |
| 0x02 | SVK_SUPPLIER |
| 0x03 | SVK_WERK |
| 0x04 | SVK_BACKUP_01 |
| 0x05 | SVK_BACKUP_02 |
| 0x06 | SVK_BACKUP_03 |
| 0x07 | SVK_BACKUP_04 |
| 0x08 | SVK_BACKUP_05 |
| 0x09 | SVK_BACKUP_06 |
| 0x0A | SVK_BACKUP_07 |
| 0x0B | SVK_BACKUP_08 |
| 0x0C | SVK_BACKUP_09 |
| 0x0D | SVK_BACKUP_10 |
| 0x0E | SVK_BACKUP_11 |
| 0x0F | SVK_BACKUP_12 |
| 0x10 | SVK_BACKUP_13 |
| 0x11 | SVK_BACKUP_14 |
| 0x12 | SVK_BACKUP_15 |
| 0x13 | SVK_BACKUP_16 |
| 0x14 | SVK_BACKUP_17 |
| 0x15 | SVK_BACKUP_18 |
| 0x16 | SVK_BACKUP_19 |
| 0x17 | SVK_BACKUP_20 |
| 0x18 | SVK_BACKUP_21 |
| 0x19 | SVK_BACKUP_22 |
| 0x1A | SVK_BACKUP_23 |
| 0x1B | SVK_BACKUP_24 |
| 0x1C | SVK_BACKUP_25 |
| 0x1D | SVK_BACKUP_26 |
| 0x1E | SVK_BACKUP_27 |
| 0x1F | SVK_BACKUP_28 |
| 0x20 | SVK_BACKUP_29 |
| 0x21 | SVK_BACKUP_30 |
| 0x22 | SVK_BACKUP_31 |
| 0x23 | SVK_BACKUP_32 |
| 0x24 | SVK_BACKUP_33 |
| 0x25 | SVK_BACKUP_34 |
| 0x26 | SVK_BACKUP_35 |
| 0x27 | SVK_BACKUP_36 |
| 0x28 | SVK_BACKUP_37 |
| 0x29 | SVK_BACKUP_38 |
| 0x2A | SVK_BACKUP_39 |
| 0x2B | SVK_BACKUP_40 |
| 0x2C | SVK_BACKUP_41 |
| 0x2D | SVK_BACKUP_42 |
| 0x2E | SVK_BACKUP_43 |
| 0x2F | SVK_BACKUP_44 |
| 0x30 | SVK_BACKUP_45 |
| 0x31 | SVK_BACKUP_46 |
| 0x32 | SVK_BACKUP_47 |
| 0x33 | SVK_BACKUP_48 |
| 0x34 | SVK_BACKUP_49 |
| 0x35 | SVK_BACKUP_50 |
| 0x36 | SVK_BACKUP_51 |
| 0x37 | SVK_BACKUP_52 |
| 0x38 | SVK_BACKUP_53 |
| 0x39 | SVK_BACKUP_54 |
| 0x3A | SVK_BACKUP_55 |
| 0x3B | SVK_BACKUP_56 |
| 0x3C | SVK_BACKUP_57 |
| 0x3D | SVK_BACKUP_58 |
| 0x3E | SVK_BACKUP_59 |
| 0x3F | SVK_BACKUP_60 |
| 0x40 | SVK_BACKUP_61 |
| 0xXY | ERROR_UNKNOWN |

### DTCEXTENDEDDATARECORDNUMBER

| WERT | TEXT | ANZ_BYTE |
| --- | --- | --- |
| 0x00 | ISO_RESERVED | 0 |
| 0x01 | CONDITION_BYTE | 1 |
| 0x02 | HFK | 1 |
| 0x03 | HLZ | 1 |
| 0xFF | RECORD_UNKNOWN | 0 |

### DTCSNAPSHOTIDENTIFIER

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1700 | KM_STAND | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1701 | ABS_ZEIT | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1702 | SAE_CODE | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1731 | Fehlerklasse_DTC | - | - | u char | - | 1 | 1 | 0.000000 |
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### FEHLERKLASSE

| NR | TEXT |
| --- | --- |
| 0x00 | Keine Fehlerklasse verfuegbar |
| 0x01 | Ueberpruefung bei naechstem Werkstattbesuch |
| 0x02 | Ueberpruefung bei naechstem Halt |
| 0x04 | Ueberpruefung sofort erforderlich ! |
| 0xFF | unbekannte Fehlerklasse |

### DIAGMODE

| NR | MODE | MODE_TEXT |
| --- | --- | --- |
| 0x00 | UNGUELTIG | DefaultMode |
| 0x01 | DEFAULT | DefaultMode |
| 0x02 | ECUPM | ECUProgrammingMode |
| 0x03 | ECUEXTDIAG | ECUExtendedDiagnosticSession |
| 0x04 | ECUSSDS | ECUSafetySystemDiagnosticSession |
| 0x40 | ECUEOL | ECUEndOfLineSession |
| 0x41 | ECUCODE | ECUCodingSession |
| 0x42 | ECUSWT | ECUSwtSession |
| 0x43 | ECUHDD | ECUHDDDownloadSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0xXY | -- | unbekannter Diagnose-Mode |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x010218 | TCM: Getriebeöl Übertemperatur festgestellt | 0 |
| 0x010562 | TCM: Batterie Unterspannung erkannt  | 0 |
| 0x010563 | TCM: Batterie Überspannung erkannt  | 0 |
| 0x010604 | TCM: TCM-interner Steuergerätefehler RAM-Check fehlerhaft  | 0 |
| 0x010605 | TCM: TCM-interner Steuergerätefehler ROM-Check fehlerhaft  | 0 |
| 0x01060B | TCM: TCM-interner Steuergerätefehler Analog-Digital-Wandler fehlerhaft  | 0 |
| 0x01060C | TCM: TCM-interner Steuergerätefehler Prozessor Leistungsproblem | 0 |
| 0x010634 | TCM: TCM-interner Temperatursensor Steuergerätetemperatur (Platine) zu hoch | 0 |
| 0x010658 | TCM: Versorgungsspannung 1 Drucksteuerventile Kurzschluss nach Masse | 0 |
| 0x010659 | TCM: Versorgungsspannung 1 Drucksteuerventile Kurzschluss nach Plus | 0 |
| 0x010667 | TCM: TCM-interner Temperatursensor Leistungsproblem | 0 |
| 0x010668 | TCM: TCM-interner Temperatursensor Kurzschluss nach Masse | 0 |
| 0x010669 | TCM: TCM-interner Temperatursensor Kurzschluss nach Plus | 0 |
| 0x010711 | TCM: Temperatursensor 1 Getriebeöl Messbereichs- oder Plausibilitätsfehler | 0 |
| 0x010712 | TCM: Temperatursensor 1 Getriebeöl Kurzschluss nach Masse | 0 |
| 0x010713 | TCM: Temperatursensor 1  Getriebeöl Kurzschluss nach Plus | 0 |
| 0x010721 | TCM: Abtriebsdrehzahl-Sensor Messbereichs- oder Leistungsproblem | 0 |
| 0x010723 | TCM: Abtriebsdrehzahl-Sensor Signal unregelmäßig | 0 |
| 0x010751 | TCM: Magnetventil 1 fehlerhaft oder klemmt offen | 0 |
| 0x010752 | TCM: Magnetventil 1 fehlerhaft oder klemmt geschlossen | 0 |
| 0x010756 | TCM: Magnetventil 2 fehlerhaft oder klemmt offen | 0 |
| 0x010757 | TCM: Magnetventil 2 fehlerhaft oder klemmt geschlossen | 0 |
| 0x010776 | TCM: Elektronisches Drucksteuerventil 2 klemmt offen | 0 |
| 0x010777 | TCM: Elektronisches Drucksteuerventil 2 klemmt geschlossen | 0 |
| 0x01077C | TCM: Abtriebsdrehzahl-Sensor Leitungsunterbrechung oder Kurzschluss nach Masse | 0 |
| 0x01077E | TCM: Temperatursensorik Getriebe Messbereichs- oder Plausibilitätsfehler | 0 |
| 0x010796 | TCM: Elektronisches Drucksteuerventil 3 klemmt offen | 0 |
| 0x010797 | TCM: Elektronisches Drucksteuerventil 3 klemmt geschlossen | 0 |
| 0x01079A | TCM: Kupplungselement C1 Kupplungsschlupf vorhanden Zeitdauer höher als zulässig | 0 |
| 0x01079B | TCM: Kupplungselement C2 Kupplungsschlupf vorhanden Zeitdauer höher als zulässig | 0 |
| 0x01079C | TCM: Kupplungselement C3 Kupplungsschlupf vorhanden  Zeitdauer höher als zulässig | 0 |
| 0x01079D | TCM: Kupplungselement C4 Kupplungsschlupf vorhanden Zeitdauer höher als zulässig | 0 |
| 0x010961 | TCM: Elektronisches Drucksteuerventil 1 Messbereichs- oder Leistungsproblem | 0 |
| 0x010962 | TCM: Elektronisches Drucksteuerventil 1 Kurzschluss nach Masse | 0 |
| 0x010963 | TCM: Elektronisches Drucksteuerventil 1 Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x010965 | TCM: Elektronisches Drucksteuerventil 2 Messbereichs- oder Leistungsproblem | 0 |
| 0x010966 | TCM: Elektronisches Drucksteuerventil 2 Kurzschluss nach Masse | 0 |
| 0x010967 | TCM: Elektronisches Drucksteuerventil 2 Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x010969 | TCM: Elektronisches Drucksteuerventil 3 Messbereichs- oder Leistungsproblem | 0 |
| 0x010970 | TCM: Elektronisches Drucksteuerventil 3 Kurzschluss nach Masse | 0 |
| 0x010971 | TCM: Elektronisches Drucksteuerventil 3 Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x010973 | TCM: Magnetventil 1 Kurzschluss nach Masse | 0 |
| 0x010974 | TCM: Magnetventil 1 Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x010976 | TCM: Magnetventil 2 Kurzschluss nach Masse | 0 |
| 0x010977 | TCM: Magnetventil 2 Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x0116D9 | TCM: TCM-interner Steuergerätefehler Steuergerät wurde nicht programmiert | 0 |
| 0x0116E3 | TCM: TCM-interner Temperatursensor (Einschaltvorgangs-Sensor) Leistungsproblem | 0 |
| 0x0116E4 | TCM: TCM-interner Temperatursensor (Einschaltvorgangs-Sensor) Kurzschluss nach Masse | 0 |
| 0x0116E5 | TCM: TCM-interner Temperatursensor (Einschaltvorgangs-Sensor) Kurzschluss nach Plus | 0 |
| 0x0116F3 | TCM: TCM-interner Steuergerätefehler RAM Datenredundanz Fehler | 0 |
| 0x011798 | TCM: TCM-interner Steuergerätefehler EEPROM Schreibfehler  | 0 |
| 0x01179A | TCM: TCM-interner Steuergerätefehler EEPROM Lesefehler  | 0 |
| 0x011828 | TCM: Elektronische Drucksteuerventile Sollwerte falsch oder Werte nicht plausibel mit aktuellem Betriebszustand | 0 |
| 0x011829 | TCM: Kupplungs-Ansteuerung Sollwerte falsch oder Werte nicht plausibel mit aktuellem Betriebszustand | 0 |
| 0x01185F | TCM: TCM-interner Fehler EWS-Sperre aktuell aktiv | 0 |
| 0x01215C | TCM: Getriebe Ausgangsdrehzahl unplausibel mit Raddrehzahl | 0 |
| 0x012534 | TCM: Eingangssignal Zündung Kurzschluss nach Masse   | 0 |
| 0x012714 | TCM: Elektronisches Drucksteuerventil 4 klemmt offen | 0 |
| 0x012715 | TCM: Elektronisches Drucksteuerventil 4 klemmt geschlossen | 0 |
| 0x012719 | TCM: Elektronisches Drucksteuerventil 4 Messbereichs- oder Leistungsproblem | 0 |
| 0x012720 | TCM: Elektronisches Drucksteuerventil 4 Kurzschluss nach Masse | 0 |
| 0x012721 | TCM: Elektronisches Drucksteuerventil 4 Leitungsunterbrechung oder Kurzschluss nach Plus | 0 |
| 0x01C073 | TCM: HL-CAN Bus Leitungsfehler | 0 |
| 0x01C100 | TCM:  Botschaft vom Steuergerät DME fehlt | 0 |
| 0x01C293 | TCM:  Botschaft vom Steuergerät HCP (Hybrid Control Prozessor) fehlt | 0 |
| 0x01D1A8 | TCM: EWS-Botschaft vom CAS-Steuergerät fehlt | 0 |
| 0x01D809 | TCM:  Botschaft vom Steuergerät HIM  (Hybrid-Interface-Modul) über HL-CAN fehlt | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 53 |
| F_HLZ_VIEW | - |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### T_EGS_EWS_AUTHENTICATED_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | EWS- Freigabe (noch) nicht erteilt (noch kein ISN empfangen oder Kommunikation gestört). |
| 1 | EWS- Freigabe erteilt (z.B.: ISN nicht abgespeichert --> EGS jungfräulich) |
| 2 | EWS- Freigabe abgelehnt (falscher ISN) |
| 255 | Nicht definierter Wert |

### T_ISN_CAN_RECEIVED_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | Innerhalb der letzten 10 Sekunden wurde kein gültiges ISN-Telegramm über CAN empfangen. |
| 1 | Innerhalb der letzten 10 Sekunden wurde ein gültiges ISN-Telegramm über CAN empfangen. |

### T_KEIN_DRUCK_DRUCK_VORHANDEN_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | kein Druck |
| 1 | Druck vorhanden |

### T_ISN_K_RECEIVED_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | Innerhalb der letzten 10 Sekunden wurde kein gültiges ISN-Telegramm über K-Line empfangen. |
| 1 | Innerhalb der letzten 10 Sekunden wurde ein gültiges ISN-Telegramm über K-Line empfangen |

### T_AUS_AN_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | aus |
| 1 | an |

### T_NICHT_AKTIV_AKTIV_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | nicht aktiv |
| 1 | aktiv |

### T_ISN_PRESENT_TEXT

| WERT | TEXT |
| --- | --- |
| 0 | ISN noch nicht gelernt |
| 1 | ISN gelernt und im EEPROM dauerhaft abgelegt |

### T_SUPPLIERLIST_3_8

| WERT | TEXT |
| --- | --- |
| 0 | * |
| 1 | Becker |
| 2 | Blaupunkt |
| 3 | Bosch |
| 4 | MB |
| 5 | HuF |
| 6 | Kammerer |
| 7 | Kostal |
| 8 | Siemens |
| 9 | Stribel |
| 10 | MicroHeat |
| 11 | JATCO |
| 16 | SWF |
| 17 | VDO |
| 18 | Webasto |
| 19 | Dornier |
| 20 | TEG |
| 21 | Hella |
| 22 | Lucas |
| 23 | GKR |
| 24 | MBB |
| 25 | Motometer |
| 32 | Borg |
| 33 | Temic |
| 34 | Teves |
| 35 | Borg Warner |
| 36 | MED S.P.A |
| 37 | DENSO |
| 38 | ZF |
| 39 | TRW |
| 40 | Dunlop |
| 41 | LUK |
| 48 | Magneti Marelli |
| 49 | DODUCO |
| 50 | Alpine |
| 51 | AMC (AEG Mobile Com.) |
| 52 | Bose |
| 53 | Dasa |
| 54 | Motorola |
| 55 | Nokia |
| 56 | Panasonic |
| 57 | APAG |
| 58 | Rialtosoft |
| 59 | Applicom |
| 60 | Conti Temic |
| 61 | Cherry |
| 62 | TI Automotive |
| 63 | Kongsberg Automotive |
| 64 | Delphi |
| 65 | Alfmeier |
| 66 | Sidler |
| 67 | Marquardt |
| 68 | Wehrle |
| 69 | megamos |
| 70 | ADC |
| 71 | BERU |
| 72 | Valeo |
| 73 | Magna |
| 74 | Allison |
| 75 | Isringhausen |
| 76 | Grammer |
| 77 | Funkwerk Dabendorf |
| 78 | Hella-Behr |
| 79 | Pollak |
| 80 | AKG |
| 81 | Automotive Lighting |
| 82 | TAG |
| 83 | UNITED PARTS |
| 84 | catem |
| 85 | Alge |
| 86 | Pierburg |
| 87 | Brusa |
| 88 | Ecostar |
| 89 | Xcellsis |
| 90 | Wabco Automotive |
| 91 | Voith |
| 92 | Knorr |
| 93 | TVI |
| 94 | Stoneridge |
| 95 | Telma |
| 96 | STW |
| 97 | Koyo |
| 98 | Eberspächer |
| 99 | ADVICS |
| 100 | OMRON |
| 101 | Mitsubishi Heavy Industry |
| 102 | Methode |
| 103 | UNISIAJECS |
| 104 | UNISIA JKC Steering Systems |
| 105 | AISIN |
| 106 | Zexel Valeo |
| 107 | Schrader |
| 108 | Ballard |
| 109 | Alcoa Fujikura |
| 110 | Transtron |
| 111 | Iteris |
| 112 | SFT |
| 113 | Kieckert AG |
| 114 | Behr |
| 115 | MB Lenkungen |
| 117 | Sachs Automotive |
| 118 | Petri |
| 119 | Autoliv |
| 120 | Thien Electronic |
| 121 | Siemens VDO |
| 122 | Dornier Consulting GmbH |
| 123 | Alps |
| 124 | PREH |
| 125 | Hitachi Unisia |
| 126 | Hitachi |
| 128 | Huntsville |
| 129 | Yazaki |
| 130 | Lear |
| 131 | Johnson Controls |
| 132 | Harman / Becker |
| 133 | Mitsubishi Electric |
| 134 | Tokico USA Inc. |
| 135 | Nippon Seiki (NS Intl) |
| 136 | Inalfa |
| 137 | Nippon Seiki (UK) |
| 138 | GHSP |
| 139 | Vector |
| 140 | Gentex |
| 141 | Visteon |
| 142 | Tochigi Fuji |
| 143 | DCA |
| 144 | May and Scofield |
| 145 | DaimlerChrysler Hamburg Plant |
| 146 | AISIN AW |
| 147 | TOYODA MACHINE WORKS |
| 148 | Solectron-Invotronics |
| 149 | Kicker |
| 150 | American Axle Company |
| 151 | GETRAG |
| 152 | Promate |
| 153 | ArvinMeritor |
| 160 | Reserviert für MMC |
| 161 | Reserviert für MCC-SMART |
| 254 | Nachrüstungs Lieferant |
| 255 | Unidentifiziert |

### HYBRID_LIEF

| NR | TEXT |
| --- | --- |
| 0008 | Bosch |
| 0040 | Delphi |
| 007E | Hitachi |
| 009C | Cobasys |
| FFFF | undefinierter Lieferant |

### DATUM_MONAT

| KW | MON |
| --- | --- |
| 0x01 | 0x01 |
| 0x02 | 0x01 |
| 0x03 | 0x01 |
| 0x04 | 0x01 |
| 0x05 | 0x01 |
| 0x06 | 0x02 |
| 0x07 | 0x02 |
| 0x08 | 0x02 |
| 0x09 | 0x02 |
| 0x0A | 0x03 |
| 0x0B | 0x03 |
| 0x0C | 0x03 |
| 0x0D | 0x03 |
| 0x0E | 0x04 |
| 0x0F | 0x04 |
| 0x10 | 0x04 |
| 0x11 | 0x04 |
| 0x12 | 0x04 |
| 0x13 | 0x05 |
| 0x14 | 0x05 |
| 0x15 | 0x05 |
| 0x16 | 0x05 |
| 0x17 | 0x06 |
| 0x18 | 0x06 |
| 0x19 | 0x06 |
| 0x1A | 0x06 |
| 0x1B | 0x07 |
| 0x1C | 0x07 |
| 0x1D | 0x07 |
| 0x1E | 0x07 |
| 0x1F | 0x07 |
| 0x20 | 0x08 |
| 0x21 | 0x08 |
| 0x22 | 0x08 |
| 0x23 | 0x08 |
| 0x24 | 0x09 |
| 0x25 | 0x09 |
| 0x26 | 0x09 |
| 0x27 | 0x09 |
| 0x28 | 0x0A |
| 0x29 | 0x0A |
| 0x2A | 0x0A |
| 0x2B | 0x0A |
| 0x2C | 0x0A |
| 0x2D | 0x0B |
| 0x2E | 0x0B |
| 0x2F | 0x0B |
| 0x30 | 0x0B |
| 0x31 | 0x0C |
| 0x32 | 0x0C |
| 0x33 | 0x0C |
| 0x34 | 0x0C |
| 0xFF | 0x00 |

### T_TRANSMISSION_RANGE

| WERT | TEXT |
| --- | --- |
| 0 | Ungueltig |
| 1 |  P  Parken |
| 2 |  R  Rueckwaerts |
| 4 |  N  Neutral |
| 6 |  D  Drive 6 |
| 8 |  D  Drive 5 |
| 16 |  D  Drive 4 |
| 32 |  D  Drive 3 |
| 64 |  D  Drive 2 |
| 128 |  D  Drive 1 |

### T_PASS_FAIL_INDETERMINATE

| WERT | TEXT |
| --- | --- |
| 0 | Fail |
| 1 | Indeterminate |
| 3 | Pass |

### T_PROCESSOR_FAULT_REASON_CODE

| WERT | TEXT |
| --- | --- |
| 0 | No fault |
| 1 | MHC State of Health Fault |
| 2 | Secondary Not Running Seed/Key Test |
| 3 | Secondary Fails To Take Remedial Action |
| 4 | Main Seed/Key Timeout Fault |
| 5 | MAIN Detected SPI Fault |
| 6 | Seeds Received in Wrong Order Fault |
| 7 | Sensor Min Learn Corruption Fault |
| 8 | Processor Clock Fault |
| 9 | 12.5 ms Loop Completion Time Fault |
| 10 | 25 ms Loop Completion Time Fault |
| 11 | 50 ms Loop Completion Time Fault |
| 12 | 100 ms Loop Completion Time Fault |
| 13 | 250 ms Loop Completion Time Fault |
| 14 | RAM Diagnostic Completion Time Fault |
| 15 | ROM Diagnostic Completion Time Fault |
| 16 | MHC ALU Fault |
| 17 | MHC Configuration Register Fault |
| 18 | MHC Stack Fault |
| 19 | MHC Sequence Fault |
| 20 | MHC Detected MAIN Processor Fault |
| 21 | MHC Detected SPI Fault |
| 22 | Desired Throttle Rationality Fault |
| 23 | Secondary Received Incorrect Keys |
| 24 | Reserved |
| 25 | Reserved |
| 26 | Reserved |
| 27 | Reserved |
| 28 | Reserved |
| 29 | Reserved |
| 30 | Reserved |
| 31 | Reserved |
| 32 | MAIN ALU Fault |
| 33 | MAIN Configuration Register Fault |

### T_NEIN_JA_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | nein |
| 1 | ja |

### T_TRUE_FALSE

| WERT | TEXT |
| --- | --- |
| 0 | False |
| 1 | True |

### T_TEXT_PARKZUSTANDTCM

| WERT | TEXT |
| --- | --- |
| 0 | Park nicht eingelegt |
| 1 | Park eingelegt |
| 3 | Ungültig |

### T_T_ABTRIEBSRICHTUNG

| WERT | TEXT |
| --- | --- |
| 0 | Unbestimmt |
| 1 | Ungültig |
| 2 | Vorwärts |
| 3 | Rückwärts |

### T_T_RESETAUSFUEHREN

| WERT | TEXT |
| --- | --- |
| 0 | Reset Nicht ausfuehren |
| 1 | Reset ausfuehren |

### T_T_STATADAPTFUELLDRUCK

| WERT | TEXT |
| --- | --- |
| 1 | Nicht adaptiert |
| 2 | Adaptiert |
| 3 | in Adaption |

### T_T_STATNOTLAUFMASSNAHME

| WERT | TEXT |
| --- | --- |
| 0 | Massnahme nicht aktiv |
| 1 | Massnahme aktiv |

### T_AUS_EIN_1BYTE

| WERT | TEXT |
| --- | --- |
| 0 | AUS |
| 1 | EIN |

### FORTUMWELTNR

| ORT | F_UW1_NR | F_UW2_NR | F_UW3_NR | F_UW4_NR | F_UW5_NR | F_UW6_NR | F_UW7_NR | F_UW8_NR | F_UW9_NR | F_UW10_NR | F_UW11_NR | F_UW12_NR | F_UW13_NR | F_UW14_NR | F_UW15_NR | F_UW16_NR | F_UW17_NR | F_UW18_NR | F_UW19_NR | F_UW20_NR | F_UW21_NR | F_UW22_NR | F_UW23_NR | F_UW24_NR | F_UW25_NR | F_UW26_NR | F_UW27_NR | F_UW28_NR | F_UW29_NR | F_UW30_NR | F_UW31_NR | F_UW32_NR | F_UW33_NR | F_UW34_NR | F_UW35_NR | F_UW36_NR | F_UW37_NR | F_UW38_NR | F_UW39_NR | F_UW40_NR | F_UW41_NR | F_UW42_NR | F_UW43_NR | F_UW44_NR | F_UW45_NR | F_UW46_NR | F_UW47_NR | F_UW48_NR | F_UW49_NR | F_UW50_NR | F_UW51_NR | F_UW52_NR | F_UW53_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x010218 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010562 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010563 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010604 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010605 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01060B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01060C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010634 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010658 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010659 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010667 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010668 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010669 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010711 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010712 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010713 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010721 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010723 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010751 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010752 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010756 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010757 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010776 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010777 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01077C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01077E | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010796 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010797 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01079A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01079B | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01079C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01079D | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010961 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010962 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010963 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010965 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010966 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010967 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010969 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010970 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010971 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010973 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010974 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010976 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x010977 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x0116D9 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x0116E3 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x0116E4 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x0116E5 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x0116F3 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x011798 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01179A | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x011828 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x011829 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01185F | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01215C | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x012534 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x012714 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x012715 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x012719 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x012720 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x012721 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01C073 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01C100 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01C293 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01D1A8 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0x01D809 | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |
| 0xFFFFFF | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 |

### FORTUMWELTTEXTE

| UWNR | UW_EINH | MUL | DIV | ADD | UWTEXT | UW_LENGTH |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | - | 1 | 1 | 0 | Diagnose Fehler Code | 2 |
| 02 | km | 16 | 1 | 0 | Kilometerstand beim ersten Fehlerauftritt | 2 |
| 03 | km | 16 | 1 | 0 | Kilometerstand beim letzten Fehlerauftritt | 2 |
| 04 | - | 1 | 1 | 0 | Anzahl Fehler aufgetreten | 1 |
| 05 | - | 1 | 1 | 0 | Anzahl Fehler nicht aufgetreten | 1 |
| 06 | - | 1 | 1 | 0 | Anzahl Fehler nicht abgelaufen | 1 |
| 07 | % | 100 | 256 | 0 | Berechneter Lastwert - OBD | 1 |
| 08 | °C | 1 | 1 | -40 | Kuehlmitteltemperatur | 1 |
| 09 | U/min | 1 | 4 | 0 | Motordrehzahl | 2 |
| 10 | km/h | 1 | 1 | 0 | Fahrzeuggeschwindigkeit | 1 |
| 11 | °C | 1 | 1 | -40 | Ansauglufttemperatur | 1 |
| 12 | % | 100 | 255 | 0 | Absolute Drosselklappenposition | 1 |
| 13 | ? | 1 | 1 | 0 | Kraftuebertragungs Status | 1 |
| 14 | - | 1 | 1 | 0 | Anzahl der Aufwaermzyklen seit letzten Fehlerspeicher loeschen | 1 |
| 15 | km | 1 | 1 | 0 | km seit letzten Fehlerspeicher loeschen | 2 |
| 16 | V | 1 | 1000 | 0 | Spannung Steuergeraet | 2 |
| 17 | % | 100 | 255 | 0 | Relative Gaspedalposition | 1 |
| 18 | s | 1 | 1 | 0 | Motorlaufzeit in s | 2 |
| 19 | °C | 1 | 1 | -40 | Getriebeoeltemperatur | 1 |
| 20 | U/min | 1 | 8 | 0 | Getriebeeingangsdrehzahl | 2 |
| 21 | U/min | 1 | 8 | 0 | Getriebeausgangsdrehzahl | 2 |
| 22 | ? | 1 | 1 | 0 | Stellung des Gangwahlhebels | 1 |
| 23 | - | 1 | 1 | 0 | Getriebeuebertragunsbereich Status | 1 |
| 24 | - | 1 | 4096 | 0 | Verteilergetriebe - Uebersetzungsverhaeltnis | 2 |
| 25 | - | 1 | 1 | 0 | Status Manueller Fahrerwunsch | 1 |
| 26 | - | 1 | 64 | 0 | Berechnetes Getriebeuebersetzungsverhaeltnis | 1 |
| 27 | Nm | 1 | 4 | 0 | Aktuell eingestelltes Motormoment | 2 |
| 28 | - | 1 | 1 | 0 | Status High Side Driver 1 des TCM | 1 |
| 29 | - | 1 | 1 | 0 | Status High Side Driver 2 des TCM | 1 |
| 30 | °C | 1 | 1 | -40 | Substrattemperatur des TCM-SG | 1 |
| 31 | % | 100 | 256 | 0 | Aktuelle Gaspedalpostion | 1 |
| 32 | - | 1 | 1 | 0 | Status Druckregelung Solenoid 1 | 1 |
| 33 | - | 1 | 1 | 0 | Status Druckregelung Solenoid 2 | 1 |
| 34 | - | 1 | 1 | 0 | Status Druckregelung Solenoid 3 | 1 |
| 35 | - | 1 | 1 | 0 | Status Druckregelung Solenoid 4 | 1 |
| 36 | - | 1 | 1 | 0 | Status Druckregelung Solenoid 5 | 1 |
| 37 | kPa | 1 | 16 | 0 | Angefordeter Druck fuer Druckregelung Solenoid 1 | 2 |
| 38 | kPa | 1 | 16 | 0 | Angefordeter Druck fuer Druckregelung Solenoid 2 | 2 |
| 39 | kPa | 1 | 16 | 0 | Angefordeter Druck fuer Druckregelung Solenoid 3 | 2 |
| 40 | kPa | 1 | 16 | 0 | Angefordeter Druck fuer Druckregelung Solenoid 4 | 2 |
| 41 | kPa | 1 | 16 | 0 | Angefordeter Druck fuer Druckregelung Solenoid 5 | 2 |
| 42 | - | 1 | 1 | 0 | Status der Getriebe Fluessigkeitsdruckschalter 1-4 | 1 |
| 43 | - | 1 | 1 | 0 | Status Ueberwachungsschaltkreis Solenoid 1 | 1 |
| 44 | - | 1 | 1 | 0 | Status Ueberwachungsschaltkreis Solenoid 2 | 1 |
| 45 | - | 1 | 1 | 0 | Status der TISS/TOSS Spannungsversorgung | 1 |
| 46 | - | 1 | 1 | 0 | Drehrichtung der Getriebeausgangswelle | 1 |
| 47 | U/min | 1 | 8 | 0 | Kupplungsschlupf der Kupplung C1 | 2 |
| 48 | U/min | 1 | 8 | 0 | Kupplungsschlupf der Kupplung C2 | 2 |
| 49 | U/min | 1 | 8 | 0 | Kupplungsschlupf der Kupplung C3 | 2 |
| 50 | U/min | 1 | 8 | 0 | Kupplungsschlupf der Kupplung C4 | 2 |
| 51 | - | 1 | 1 | 0 | Status der Getriebekupplung | 1 |
| 52 | - | 1 | 1 | 0 | Status Druckregelung Solenoid 6 | 1 |
| 53 | kPa | 1 | 16 | 0 | Angefordeter Druck fuer Druckregelung Solenoid 6 | 2 |

### T_TEXTFLASHPRECONDITION

| WERT | TEXT |
| --- | --- |
| 0 | Keine Sperrung |
| 1 | Sperre aktiv |

### T_T_RESETURSACHE

| WERT | TEXT |
| --- | --- |
| 0 | CeHWIO_e_PwrUpRstIgn |
| 1 | CeHWIO_PwrUpRstSerial |
| 2 | CeHWIO_RunRstExtWDT |
| 3 | CeHWIO_RunRstIntWDT |
| 4 | CeHWIO_RunRstUnhndldExcptn |
| 5 | CeHWIO_RunRstEHRS |
| 6 | CeHWIO_RunRstESRS |
| 7 | CeHWIO_RunRstLLRS |
| 8 | CeHWIO_RunRstCSRS |
| 9 | CeHWIO_RunRstDBHRS |
| 10 | CeHWIO_RunRstDBSRS |
| 11 | CeHWIO_RunRstJTRS |
| 12 | CeHWIO_RunRstOCCS |
| 13 | CeHWIO_RunRstILBC |

### T_NOTACTIVEACTIVE_1BIT

| WERT | TEXT |
| --- | --- |
| 0 | not active |
| 1 | active |
