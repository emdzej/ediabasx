# emf_01s.prg

## General

|  |  |
| --- | --- |
| File | emf_01s.prg |
| Type | PRG |
| Jobs | 40 |
| Tables | 15 |
| Origin | BMW EF-623 Keil |
| Revision | 0.001 |
| Author | Siemens_VDO_Automotive_AG SV_C_BC_P1_AD_SW Thomas_Albrecht |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EMF_01S |  |  |
| ORIGIN | string | BMW EF-623 Keil |  |  |
| REVISION | string | 0.001 |  |  |
| AUTHOR | string | Siemens_VDO_Automotive_AG SV_C_BC_P1_AD_SW Thomas_Albrecht |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.11 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Identdaten UDS   : $22   ReadDataByIdentifier $F150 Sub-Parameter SGBD-Index

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS     : $19 ReadDTCInformation UDS     : $02 ReadDTCByStatusMask UDS     : $0C StatusMask (Bit2, Bit3) Modus   : Default

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (einzelner Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $06 reportDTCExtendedDataRecordByDTCNumber UDS  : $04 reportDTCSnapshotRecordByDTCNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Fehlercode |

### FS_LOESCHEN

Fehlerspeicher loeschen UDS   : $14 ClearDiagnosticInformation $FF DTCHighByte $FF DTCMiddleByte $FF DTCLowByte

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

### SVK_LESEN

Informationen zur SoftwareVerbauKennung UDS  : $22   ReadDataByIdentifier $F1xx Sub-Parameter fuer SVK $F101 SVK_AKTUELL (Default)

| Name | Type | Description |
| --- | --- | --- |
| SVK | string | table SVK_ID BEZEICHNUNG WERT default SVK_AKTUELL |

### STATUS_LESEN

Lesen eines oder mehrerer Stati UDS  : $22 ReadDataByIdentifier Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Er wird das zugehörige Result table SG_Funktionen ARG RESULTNAME erzeugt |

### STEUERN

Vorgeben eines Status UDS  : $2E WriteDataByIdentifier Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG bzw. ID bzw. LABEL |
| WERT | string | Es muss mindestens ein Argument übergeben werden Argumente siehe table SG_Funktionen ARG_TABELLE |

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten UDS     : $3E TesterPresent UDS     : $?0 suppressPosRspMsgIndication Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS   : $11 EcuReset $01 HardReset

_No arguments._

### STEUERN_MONTAGE_POS

Aktuator in montage_pos fahren KWP2000: $31 $01 20 00 Modus  : Default  montage_pos 

_No arguments._

### STEUERN_MONTAGE_MODE

Aktuator in montage_pos fahren KWP2000: $31 $01 21 00 Modus  : Default  montage_pos 

_No arguments._

### STEUERN_POWER_DOWN_MODE

Aktuator in montage_pos fahren KWP2000: $31 $01 $05 $xx Modus  : Default  montage_pos 

| Name | Type | Description |
| --- | --- | --- |
| ARG_1 | int | _MODE |

### STEUERN_RP_EIN_AUS

Aktuator in montage_pos fahren KWP2000: $31 $01 $23 $13 Modus  : Default  montage_pos 

| Name | Type | Description |
| --- | --- | --- |
| ARG_1 | int | _MODE |

### STATUS_FESTELLKRAFT_LESEN

Auslesen der erreichten Festellkraft (N) KWP2000: $22 ReadDataByCommonIdentifier $0001 F_ERREICHT Modus  : Default

_No arguments._

### STATUS_LETZTE_LOESEKRAFT

Auslesen der letzten Loesekraft (N) KWP2000: $22 ReadDataByCommonIdentifier $0014 F_LOESE Modus  : Default

_No arguments._

### STATUS_LETZTE_ANZUGSKRAFT

Auslesen der letzten Anzugskraft (N) KWP2000: $22 ReadDataByCommonIdentifier $0015 F_ANZ Modus  : Default

_No arguments._

### STATUS_AKTUELLE_ISTKRAFT

Auslesen der aktuellen Istkraft(N) KWP2000: $22 ReadDataByCommonIdentifier $0016 F_IST Modus  : Default

_No arguments._

### STATUS_BETAETIGUNGSZAEHLER_ANZ

Lesen des Betaetigungszaehlers Taster Richtung Anziehen KWP2000: $22 ReadDataByCommonIdentifier $0017 BETAET_ZAEHLER_ANZ Modus  : Default

_No arguments._

### STATUS_BETAETIGUNGSZAEHLER_LOES

Betaetigungszaehler Taster Richtung Loesen KWP2000: $22 ReadDataByCommonIdentifier $0018 BETAET_ZAEHLER_LOES Modus  : Default

_No arguments._

### STATUS_ANZAHL_FESTSTELLVORGAENGE

Anzahl der Feststellvorgaenge KWP2000: $22 ReadDataByCommonIdentifier $0019 ANZ_FESTSTELL_VORG Modus  : Default

_No arguments._

### STATUS_ANZAHL_NOTENTRIEGELUNGEN

Anzahl der Notentriegelungen KWP2000: $22 ReadDataByCommonIdentifier $0020 ANZ_NOTENTRIEG Modus  : Default

_No arguments._

### STATUS_ANZAHL_DEGRADED_MODI

Anzahl der Degraded Modi KWP2000: $22 ReadDataByCommonIdentifier $0021 ANZ_DEGRADED_MODE Modus  : Default

_No arguments._

### STATUS_ANZAHL_NACHZIEHEN_SOLL_IST

Anzahl Nachziehvorgaenge mit Soll Ist Vergleich KWP2000: $22 ReadDataByCommonIdentifier $0022 NB_TIGHTENING_CMP Modus  : Default

_No arguments._

### STATUS_ANZAHL_NACHZIEHEN_BOOST_LESEN

Auslesen Anzahl Boost KWP2000: $22 ReadDataByCommonIdentifier $0023 ANZ_NACHZIEHEN_BOOST Modus  : Default

_No arguments._

### STATUS_KALIBRIERDATEN_KRAFTSENSOR_LESEN

Auslesen der Kalibrierdaten des Kraftsensors KWP2000: $22 ReadDataByCommonIdentifier $3003 F_ERREICHT Modus  : Default

_No arguments._

### STATUS_SW_VERSION_SLAVE_LESEN

Auslesen Software Version SLAVE KWP2000: $21 ReadDataByLocalIdentifier $FE SW_VERSION_SLAVE Modus  : Default

_No arguments._

### STATUS_GESCHWINDIGKEIT

Auslesen Radgeschwindigkeit KWP2000: $30 InputOutputControlByLocalIdentifier $1001 WS Modus  : Default

_No arguments._

### STATUS_GESCHWINDIGKEIT_SLAVE

Auslesen Radgeschwindigkeit KWP2000: $30 InputOutputControlByLocalIdentifier $1001 WS Modus  : Default

_No arguments._

### STATUS_DIGITALEINGAENGE_BUTTON

Auslesen der Digitaleingänge KWP2000: $30 InputOutputControlByLocalIdentifier $1801 DIGIN Modus  : Default

_No arguments._

### STATUS_KRAFTSENSOR

Auslesen des Kraftsensors KWP2000: $30 InputOutputControlByLocalIdentifier $1901 FORCE Modus  : Default

_No arguments._

### STATUS_AD_MOTOR

Auslesen der AD-Werte des Motors KWP2000: $30 InputOutputControlByLocalIdentifier $2001 AD_MOT Modus  : Default

_No arguments._

### STATUS_AD_KLEMME_30_15

Auslesen der AD-Werte von KL30E, KL30P und KL15 KWP2000: $30 InputOutputControlByLocalIdentifier $2101 AD_KL Modus  : Default

_No arguments._

### STATUS_AD_S1_BIS_S4

Auslesen der AD-Werte der Tastereingänge S1 bis S4 KWP2000: $30 InputOutputControlByLocalIdentifier $2201 AD_S Modus  : Default

_No arguments._

### STATUS_AD_TEMP

Auslesen der AD-Werte des PCB Temperatursensors KWP2000: $30 InputOutputControlByLocalIdentifier $2301 AD_TEMP Modus  : Default

_No arguments._

### STATUS_EMF_BUTTON

Auslesen des Status der EMF-Taste KWP2000: $30 InputOutputControlByLocalIdentifier $30 STATUS_EMF_BUTTON Modus  : Default

_No arguments._

### STATUS_MOTORSTROM

Auslesen Motorstrom KWP2000: $30 InputOutputControlByLocalIdentifier $31 I_MOT $01 RCS Modus  : Default

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
| 0x000072 | ASIN AWCO.LTD |
| 0x000073 | Shorlock |
| 0x000074 | Schrader |
| 0x000075 | BERU Electronics GmbH |
| 0x000076 | CEL |
| 0xFFFFFF | unbekannter Hersteller |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | keine Fehlerart verfügbar |
| 0x04 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x05 | Fehler gespeichert |
| 0x08 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x09 | Fehler gespeichert |
| 0x0C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x0D | Fehler gespeichert |
| 0x44 | Fehler momentan vorhanden und bereits gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler momentan vorhanden und bereits gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler momentan vorhanden und bereits gespeichert |
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
| 0xA0 | VEHI | Vehicle Info Spec |
| 0xA1 | COMS | Comparam Spec |
| 0xA2 | DIAG | Diag-Layer Container |
| 0xA3 | FLCU | Flash Datei |
| 0xA4 | JAJO | Java-Jobs |
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
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x48050B | ECU_EEPROM_SOFT | 0 |
| 0x48050C | PER_BUTTON_RAW | 0 |
| 0x48050D | ECU_EEPROM_DATA | 0 |
| 0x48050E | ECU_RELAY_MOSFET | 0 |
| 0x48050F | ECU_TEMP_SENSOR | 0 |
| 0x480510 | ECU_SCS | 0 |
| 0x480511 | ECU_MOTOR_CIRCUIT | 0 |
| 0x480512 | ECU_FORCE | 0 |
| 0x480513 | ECU_TEMPERATURE | 0 |
| 0x480514 | ECU_MASTER | 0 |
| 0x480515 | ECU_SLAVE | 0 |
| 0x480516 | ECU_SLAVE_FLASH | 0 |
| 0x480517 | ECU_SPI | 0 |
| 0x480518 | ECU_SECURITY_ACCESS | 0 |
| 0x480519 | PER_BUTTON_APPLY | 0 |
| 0x48051A | ECU_SLAVE_CAN | 0 |
| 0x48051B | CAN_RX_SIGNAL_GESCHWINDIGKEIT | 0 |
| 0x48051C | CAN_RX_SIGNAL_GETRIEBEDATEN | 0 |
| 0x48051D | CAN_RX_SIGNAL_STAT_DSC | 0 |
| 0x48051E | CAN_RX_SIGNAL_STELLANF | 0 |
| 0x480520 | PER_BUTTON_RELEASE | 0 |
| 0x480521 | PER_IGN_WAKE | 0 |
| 0x480522 | PER_WHEEL_SPEED | 0 |
| 0x480523 | PER_POWER_ SUPPLY | 0 |
| 0x480524 | ECU_CODING | 0 |
| 0x480525 | ECU_WRONG_REQUEST | 0 |
| 0x480531 | MECH_MANUAL_MOVED | 0 |
| 0x480532 | MECH_FORCE | 0 |
| 0x480534 | MECH_MOTION_TIMEOUT | 0 |
| 0x480540 | ESP_DEFECT | 0 |
| 0x480541 | ESP_CAN_FAULT | 0 |
| 0x480542 | ESP_NACHZIEHEN | 0 |
| 0x480543 | ESP_SIGNAL | 0 |
| 0x480544 | KLEMME30G | 0 |
| 0x480545 | ESP_STAT_DSC_SOFT | 0 |
| 0xD38870 | CAN_BUS | 0 |
| 0xD38940 | CAN_GESCHWINDIGKEIT_416 | 0 |
| 0xD38950 | CAN_GETRIEBEDATEN_186 | 0 |
| 0xD38970 | CAN_KLEMMENSTATUS_304 | 0 |
| 0xD38980 | CAN_STAT_ DSC_414 | 0 |
| 0xD38990 | CAN_STELLANF_EMF_423 | 0 |
| 0xD389A0 | CAN_NACHLAUFZEIT_STROMVERSORGUNG_958 | 0 |
| 0x001001 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x001002 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT_ZGW | 0 |
| 0x002001 | NVM_E_WRITE_FAILED | 0 |
| 0x002002 | NVM_E_READ_FAILED | 0 |
| 0x002003 | NVM_E_CONTROL_FAILED | 0 |
| 0x002004 | NVM_E_ERASE_FAILED | 0 |
| 0x002006 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x002007 | NVM_E_READ_ALL_FAILED | 0 |
| 0x002010 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x002711 | CODING_EVENT_NOT_CODED | 0 |
| 0x002847 | PIA_E_IO_ERROR | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x8000 | UWB_01 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8001 | UWB_02 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8002 | UWB_03 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8003 | UWB_04 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8004 | UWB_05 | Hex | high | unsigned int | - | 1 | 1 | 0 |
| 0x8005 | UWB_06 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8006 | UWB_07 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8007 | UWB_08 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8008 | UWB_09 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x8009 | UWB_10 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x800A | UWB_11 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x800B | UWB_12 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x800C | UWB_13 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x800D | UWB_14 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x800E | UWB_15 | Hex | high | signed long | - | 1 | 1 | 0 |
| 0x800F | UWB_16 | Hex | - | unsigned char | - | 1 | 1 | 0 |

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
