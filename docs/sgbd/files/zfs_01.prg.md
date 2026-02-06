# zfs_01.prg

## General

|  |  |
| --- | --- |
| File | zfs_01.prg |
| Type | PRG |
| Jobs | 46 |
| Tables | 52 |
| Origin | AKKA_RT_GmbH EI-23 Michael_Holzner |
| Revision | 1.003 |
| Author | BMW EI-31 Kraeker, BMW EI-643 Neff, AKKA_RT EI-23 Holzner |
| ECU Comment | spezielle Jobs zum Auslesen des Zentralen Fehlerspeichers, die in ZGW_01.prg nicht enthalten sind |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentraler Fehlerspeicher des Diagnosemaster |  |  |
| ORIGIN | string | AKKA_RT_GmbH EI-23 Michael_Holzner |  |  |
| REVISION | string | 1.003 |  |  |
| AUTHOR | string | BMW EI-31 Kraeker, BMW EI-643 Neff, AKKA_RT EI-23 Holzner |  |  |
| COMMENT | string | spezielle Jobs zum Auslesen des Zentralen Fehlerspeichers, die in ZGW_01.prg nicht enthalten sind |  |  |
| PACKAGE | string | 1.53 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### IDENT

Identdaten UDS  : $22   ReadDataByIdentifier UDS  : $F150 Sub-Parameter SGBD-Index Modus: Default

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $02 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

### FS_LESEN_DETAIL

Fehlerspeicher lesen (einzelner Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $04 reportDTCSnapshotRecordByDTCNumber UDS  : $06 reportDTCExtendedDataRecordByDTCNumber UDS  : $09 reportSeverityInformationOfDTC Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Fehlercode |

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

### SVK_LESEN

Informationen zur Steuergeraete-Verbau-Kennung UDS  : $22   ReadDataByIdentifier UDS  : $F1xx Sub-Parameter fuer SVK UDS  : $F101 SVK_AKTUELL (Default) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SVK | string | table SVK_ID BEZEICHNUNG WERT default SVK_AKTUELL |

### STATUS_LESEN

Lesen eines oder mehrerer Stati UDS  : $22 ReadDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Es muss mindestens ein Argument übergeben werden Es wird das zugehörige result erzeugt table SG_Funktionen ARG ID RESULTNAME RES_TABELLE ARG_TABELLE |

### STEUERN

Vorgeben eines Status UDS  : $2E WriteDataByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID LABEL ARG_TABELLE |
| WERT | string | Es muss mindestens ein Argument übergeben werden Argumente siehe table SG_Funktionen ARG ID ARG_TABELLE |

### SERIENNUMMER_LESEN

Seriennummer des Steuergeraets UDS  : $22   ReadDataByIdentifier UDS  : $F18C Sub-Parameter ECUSerialNumber Modus: Default

_No arguments._

### STEUERN_ROE_STOP

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events [$02 eventWindowTime - infinite (nur 35up)] 35up: LH Diagnosemaster V11 oder höher pre35up: LH Diagnosemaster V6 - V9

_No arguments._

### STEUERN_ROE_START

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime) gültig für LH Diagnosemaster V9 oder früher. (pre 35up)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STATUS_LISTE_LOCKABLE_DTCS

Abfrage der DTCs, die der Fehlerspeichersperre laut LH Diagnosemaster unterliegen UDS     : $22   ReadDataByIdentifierRequestServiceID UDS     : $1724 DataIdentifier DM_IS_DTC_LOCKABLE Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DIAG_ADRESSE | int | SG Diagnoseadresse. Bereich: 0-255 bzw. 0x00-0xFF |

### STATUS_LISTE_ACTIVE_RESPONSE

Abfrage der DTCs, die der Aktiven Fehlermeldung laut LH Diagnosemaster unterliegen UDS     : $22   ReadDataByIdentifierRequestServiceID UDS     : $1723 DataIdentifier DM_IS_DTC_ACTIVE_RESPONSE Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DIAG_ADRESSE | int | SG Diagnoseadresse. Bereich: 0-255 bzw. 0x00-0xFF |

### STATUS_LISTE_SUPPORTED_DTCS

Abfrage der DTCs, die vom SG unterstützt werden UDS     : $19   ReadDTCInformationRequestServiceID UDS     : $0A	subFunction reportSupportedDTCs  (liefert DTCs und Statusbytes) Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DIAG_ADRESSE | int | SG Diagnoseadresse. Bereich: 0-255 bzw. 0x00-0xFF |

### STEUERN_TRIGGER_DUMMY_DTC_FUNKTIONAL

Triggern eines Dummy-DTCs UDS   : $31 RoutineControl $01 StartRountine $03 RID Trigger_Dummy_DTC $04 RID Trigger_Dummy_DTC $00/01 Param Dummy_DTC_Type

| Name | Type | Description |
| --- | --- | --- |
| DUMMY_DTC_TYPE | long | optionales Argument 0 = "Dummy Application DTC" mit Nummer "0x02FF00 + ECUDiagnosticAddress" 1 = "Dummy Network DTC" mit Nummer "0xC90400 + (0x4000 * ECUDiagnosticAddress) + 0x07FF" Default: 0 |
| SUPPRESS_POS_RESPONSE | long | optionales Argument 0 = positive Antworten von SG anfordern 1 = positive Antworten von SG NICHT anfordern (SG antworten nur, falls neg. Response) Default: 0 |

### I_STUFE_LESEN

Auslesen der I-Stufe aus ZGW und CAS UDS:    $22   ReadDataByIdentifier UDS:    $100B DataIdentifier I-Level Byte     |0|1|2|3| 4| 5| 6| 7| | ASCII |    Byte   | IStufe   |F|0|0|1|09|08| 4 00|

_No arguments._

### STATUS_VCM_GET_ECU_LIST_ACTIVE_RESPONSE

Liste aller in der SVTSoll gespeicherte SGe UDS  : $22 ReadDataByIdentifier UDS  : $3F VcmGetEcuListActiveResponse UDS  : $08 VcmGetEcuListActiveResponse

_No arguments._

### STATUS_ROE_REPORT_FUNKTIONAL

Statusabfrage der aktiven Fehlermeldung mittels funktionaler Adressierung UDS   : $86 ResponseOnEvent $04 RoE_STATUS [$02 EventWindowTime (nur ab 35up)] Es werden beide Versionen des Requests der Reihe nach durchgeführt 86 04 (pre35up) und 86 04 02 (35up) jeweils mittels funktionaler Adressierung an 0xDF. Pro antwortendem SG ein Resultset.

_No arguments._

### STEUERN_ROE_START_FUNKTIONAL

Temporaeres Aktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $05 Start $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_STOP_FUNKTIONAL

Temporaeres Deaktivieren der aktiven Fehlermeldung UDS   : $86 ResponseOnEvent $00 Stop $02 (EventWindowTime)

_No arguments._

### STEUERN_ZFS_LOESCHEN

Loeschen des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock UDS     : $01   DM_Unlock UDS     : $05   DM_Clear Modus   : Default

_No arguments._

### STATUS_ZFS_LESEN_REDUZIERT

Lesen einer Teilmenge des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock UDS     : $01   DM_Unlock UDS     : $04   DM_ReadEvent Modus   : Default

_No arguments._

### STATUS_ZFS_EVENTS_WERK

Lesen einer Teilmenge des Zentralen Fehlerspeichers fuer Ablage in CASCADE UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock UDS     : $01   DM_Unlock UDS     : $04   DM_ReadEvent Modus   : Default

_No arguments._

### STATUS_ZFS_LESEN_GESAMT

Lesen des Zentralen Fehlerspeichers Kompatible Gateways: ZGW_01, ZGW_02, FEM, BDC-LR, BDC 35up Spec.: LH Diagnosemaster SAP 10000504 Es werden nur die Results zurückgeliefert, welche vom vorliegenden Gateway auch unterstützt werden. Pro Fehlereintrag ein Resultset. --------- UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     :     $00   DM_Lock UDS     :     $01   DM_Unlock UDS     :     $03   DM_ReadSysContext UDS     :     $04   DM_ReadEvent UDS     :     $F3   DM_ReadFormatVersion Mit SubFunction 0xF3 ReadFormatVersion wird geprüft, um welche ZFS-Version es sich handelt (Systemkontext-Version). Es wird im Jobverlauf ausserdem von jedem SG, zu welchem ein DTC eingetragen ist, der SGBD-Index mit UDS 22 F150 abgefragt. Um die SGBD-Namen korrekt zu bestimmen, wird die T_GRTB.PRG herangezogen. Aus den entsprechenden SGBDn werden die FOrtTexte der vorhandenen DTCs extrahiert.

_No arguments._

### STATUS_ANZAHL_SYSTEMKONTEXTE

Anzahl der Systemkontexte des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $F1   DM_AnzSysContext Modus   : Default

_No arguments._

### STATUS_ANZAHL_MAPPINGS

Anzahl der Mappings des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $F2   DM_AnzMapping Modus   : Default

_No arguments._

### STATUS_DM_VERSION_SYSKONTEXTE_MAPPINGS

MAPPING Version und Systemkontext Version auslesen UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $F3   Version Modus   : Default

_No arguments._

### STATUS_DM_ZFS_RINGSPEICHER_STATUSINDIKATOR

Statusindikator Ringspeicher (für ZFS Mappings/Systemkontexte) nach LH DM DMA_PA_9125 Es wird zurückgegeben, ob der ZFS bereits 'voll' ist, so dass bei weiteren Einträgen alte überschrieben werden Ausserdem der 'START' Zeitstempel, ab dem im laufenden LifeCycle der Ringspeicher wiederholt überschrieben wurde, so dass ZFS Einträge ab dann ganz geblockt wurden. Details im LH Diagnosemaster 4.1.3.2.2 Zentraler Fehlerspeicher / Central fault memory speziell: DMA_PA_9125 und DMA_PA_9137, DMA_PA_8688, DMA_PA_9139, DMA_PA_9140 UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $08   Statusindikator

_No arguments._

### STEUERN_ROE_INITIALISIERUNG

Persistentes Aktivieren der aktiven Fehlermeldung an alle Diagnosemasterclients ueber TAS UDS   : $86 ResponseOnEvent $C5 Start persistent, suppressPosRspMsg $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_INITIALISIERUNG_CHECK

Persistentes Aktivieren der aktiven Fehlermeldung an alle Diagnosemasterclients ueber TAS mittels funktionaler Adressierung UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

_No arguments._

### STEUERN_ROE_INITIALISIERUNG_CHECK2

Persistentes Aktivieren der aktiven Fehlermeldung an alle Diagnosemasterclients ueber TAS mit physikalischer Adressierung an SGs in VCM-Liste (falls VCM-Daten ungültig, wird ersatzweise RoE funktional aktiviert) UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime)

_No arguments._

### _STEUERN_DM_LOCK

Sperren des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $00   DM_Lock Modus   : Default

_No arguments._

### _STEUERN_DM_UNLOCK

Entsperren des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $01   DM_Unlock Modus   : Default

_No arguments._

### _STATUS_DM_LOCKSTATE

Sperrzustand des Zentralen Fehlerspeichers UDS     : $31   RoutineControlRequestServiceID UDS     : $01   startRoutine UDS     : $4000 DataIdentifier DM_Master_Syskontext UDS     : $02   DM_Lockstate Modus   : Default

_No arguments._

### STEUERN_DM_FSS_MASTER

Manipulation der Zentralen Fehlerspeichersperre nach LH Diagnosemaster 10000504 DMA_PA_8960 Der JOb gilt nur fürs FEM-GW PL7 und nicht fürs ZGW PL6 UDS    : $31   RoutineControl UDS    : $xx   01: StartRoutine, 02: StopRoutine UDS    : $0305 RID für Fehlerspeichersperre UDS    : $xx   Signalvorgabe per Argument (zur Statusabfrage vergleiche Job STATUS_DM_FSS_MASTER)

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | int | optionales Argument, wird nichts übergeben, wird Routine gestoppt und somit zur freilaufenden Betriebsart gewechselt Welches Signal Status_Sperre_Fehlerspeicher_FZM soll versendet werden? 0: Fehlerspeicherfreigabe 0b00 1: Fehlerspeichersperre 0b01 2: Reserve 0b10 3: Signal ungültig 0b11 4: Nachricht 0x3A0 stumm |

### STATUS_DM_FSS_MASTER

Gibt aktuellen Zustand der Zentralen Fehlerspeichersperre nach LH Diagnosemaster 10000504 DMA_PA_8960 Der JOb gilt nur fürs FEM-GW PL7 und nicht fürs ZGW PL6 UDS    : $22   ReadDataByIdentifier UDS    : $40   Byte #1 von SG-spez. DataIdentifier $4040 "Status_FSS" UDS    : $40   Byte #2 von SG-spez. DataIdentifier $4040 "Status_FSS"  Request 0x22,40,40 => liefert Antwort der Form 0x62,40,40,xx,yy Wertetabelle für xx: 0x00: Fehlerspeicherfreigabe 0x01: Fehlerspeichersperre 0x02: Reserve 0x03: Signal ungültig 0x04: Nachricht 0x3A0 stumm Wertetabelle für yy: 0x00: Freilaufend 0x01: Fest wie mittels Routine vorgegeben 0xFF: keine Angabe möglich

_No arguments._

### STEUERN_TAS

Tester Assistent - TAS wird Aktiviert oder Deaktiviert UDS   : $31   ResponseOnEvent $01   StartRoutine $100A DataIdentifier TAS Aktivieren/Deaktivieren

| Name | Type | Description |
| --- | --- | --- |
| TAS_STEUERN | int | 0x00 = TAS Deaktiviert, 0x01 = TAS Aktiviert |

### STEUERN_STOP_ROUTINE_TAS_BEAUFTRAGUNG

Tester Assistent - laufende TAS-Beauftragung wird gestoppt UDS   : $31   ResponseOnEvent $02   StopRoutine $0F0B DataIdentifier TAS Beauftragung

_No arguments._

### STEUERN_ROE_START_PERS_TAS_DF

Persistentes Aktivieren der aktiven Fehlermeldung ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_STOP_PERS_TAS_DF

Persistentes Deaktivieren der aktiven Fehlermeldung ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

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
| ?19? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_IDENTIFIER |
| ?1A? | ERROR_ECU_RESPONSE_INCORRECT_RESET_TYPE |
| ?1B? | ERROR_ECU_RESPONSE_INCORRECT_SERIAL_NUMBER_FORMAT |
| ?1C? | ERROR_ECU_RESPONSE_INCORRECT_DTC_BY_STATUS_MASK |
| ?1D? | ERROR_ECU_RESPONSE_INCORRECT_DTC_STATUS_AVAILABILITY_MASK |
| ?1E? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_IDENTIFIER |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_VERIFY |
| ?61? | ERROR_ECU_RESPONSE_ZGW |
| ?62? | ERROR_ECU_RESPONSE_BACKUP |
| ?70? | ERROR_CALID_CVN_INCORRECT_LEN |
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
| 0x0000AC | SMR Automotive Mirrors |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA |
| 0x0000AF | Alfmeier |
| 0x0000B0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0x0000B1 | Omron Automotive Electronics Europe Group |
| 0x0000B2 | ASK |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive World Headquarters |
| 0x0000B6 | Hans Widmaier |
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | KYOCERA Display Corporation |
| 0x0000B9 | MAGNA Powertrain AG & Co KG |
| 0x0000BA | BorgWarner |
| 0x0000BB | BMW - Fahrzeugsimulator |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin |
| 0x0000BE | Schaeffler Technologies |
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
| 0x20 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x21 | Fehler momentan vorhanden und bereits gespeichert |
| 0x24 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x25 | Fehler momentan vorhanden und bereits gespeichert |
| 0x28 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x29 | Fehler momentan vorhanden und bereits gespeichert |
| 0x2C | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x2D | Fehler momentan vorhanden und bereits gespeichert |
| 0x40 | unbekannte Fehlerart |
| 0x44 | Fehler gespeichert |
| 0x45 | Fehler gespeichert |
| 0x48 | Fehler gespeichert |
| 0x49 | Fehler gespeichert |
| 0x4C | Fehler gespeichert |
| 0x4D | Fehler gespeichert |
| 0x60 | Fehler gespeichert |
| 0x61 | Fehler gespeichert |
| 0x64 | Fehler gespeichert |
| 0x65 | Fehler gespeichert |
| 0x68 | Fehler gespeichert |
| 0x69 | Fehler gespeichert |
| 0x6C | Fehler gespeichert |
| 0x6D | Fehler gespeichert |
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
| 0xC0 | SWUP | Software-Update Package |
| 0xC1 | SWIP | Index Software-Update Package |
| 0xA0 | ENTD | Entertainment Daten |
| 0xA1 | NAVD | Navigation Daten |
| 0xA2 | FCFN | Freischaltcode Funktion |
| 0x04 | GWTB | Gateway-Tabelle |
| 0x0D | SWFK | BEGU: Detaillierung auf SWE-Ebene |
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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0XF190

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VIN | - | - | string[17] | - | - | 1 | 1 | 0 | - | - | Fahrgestellnummer / VIN (17 Byte) |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | kein Betriebsmode gesetzt | kein Betriebsmode |
| 0x01 | FlashEnabled | FlashEnabled |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | ja |
| F_UWB_SATZ | 8 |
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x021000 | Energiesparmode aktiv | 1 |
| 0x02FF10 | Primaerer Anwendungs-Dummy DTC | 1 |
| 0x801C00 | VcmErrorWriteVcmData - Schreibfehler: Schreibzugriff auf VCM-Daten | 0 |
| 0x801C01 | VcmErrorReadVcmData - Lesefehler: Lesezugriff auf VCM Daten | 0 |
| 0x801C02 | VcmErrorNoTasResponse - Testerassistent ist beschäftigt oder antwortet nicht | 0 |
| 0x801C03 | VcmErrorSignatureCheck - Signaturprüfung: Fehlerhafte Signatur beim Schreiben eines Datums | 0 |
| 0x801C04 | VcmErrorSignatureCreation - Signaturerzeugung: Es konnte keine Signatur für ein zu lesendes Datum erzeugt werden | 0 |
| 0x801C05 | VcmResultSvtCheck - Identitätskontrolle: Es sind Unterschiede zwischen der SVT-Ist und SVT-Soll erkannt worden. | 0 |
| 0x801C06 | VcmErrorSvtGeneration - SVT-Ist Generierung: SVT-ist konnte nicht erzeugt werden | 0 |
| 0x801C07 | VcmErrorGeneratingEcuList - Steuergerätetauscherkennung: Liste getauschter Steuergeräte konnte nicht erstellt werden | 0 |
| 0x801C10 | Anforderung Reset Klemme 30F Wecker | 1 |
| 0x801C11 | Anforderung Abschaltung Klemme 30F Wecker | 1 |
| 0x801C12 | Versenden Powerdown | 1 |
| 0x801C13 | Anforderung Reset Klemme 30F Einschlafen | 1 |
| 0x801C14 | Anforderung Abschaltung Klemme 30F Einschlafen | 1 |
| 0x801C15 | Fehlerhaftes Einschlafen bei 30B | 1 |
| 0x801C20 | Zentraler Fehlerspeicher voll | 1 |
| 0x801C21 | Softwarefehler im Modul Diagnosemaster | 0 |
| 0x801C22 | Verlust der persistenten abgelegten Daten des Zentralen Fehlerspeicher(CRC Fehler) | 0 |
| 0x801C31 | TAS-Softwarefehler | 0 |
| 0x801C60 | Flexray Autolern nicht in Ordnung | 1 |
| 0x801C71 | GW Tabelle nicht in Ordnung | 1 |
| 0x801C73 | Steuergerät internes Kommunikationsprotokoll zwischen Haupt- und Sekundärkontroller gestört | 0 |
| 0x801C74 | Bidirektionaler Messagetunnel Aktiv | 1 |
| 0x801C75 | Lifecycle Modus CODING ist aktiv | 1 |
| 0xCD040A | FaCanBusOff | 1 |
| 0xCD040B | KCanPhyError  | 0 |
| 0xCD0414 | KCanBusOff | 1 |
| 0xCD041F | Physikalischer Fehler auf Flexraybus Branch 0 | 0 |
| 0xCD0420 | Fehler des Flexraykontroller auf Flexraybus | 0 |
| 0xCD0421 | Physikalischer Fehler auf Flexraybus Branch 1 | 0 |
| 0xCD0423 | Physikalischer Fehler auf Flexraybus Branch 2 | 0 |
| 0xCD0425 | Physikalischer Fehler auf Flexraybus Branch 3 | 0 |
| 0xCD0427 | Physikalischer Fehler auf Flexraybus Branch 4 | 0 |
| 0xCD0429 | Physikalischer Fehler auf Flexraybus Branch 5 | 0 |
| 0xCD042B | Physikalischer Fehler auf Flexraybus Branch 6 | 0 |
| 0xCD042D | Physikalischer Fehler auf Flexraybus Branch 7 | 0 |
| 0xCD043F | NAK-Empfängerknoten:hat Nachricht nicht abgenommen;Puffer voll | 1 |
| 0xCD0440 | Überwachungsschaltung hat Reset ausgelöst | 0 |
| 0xCD0441 | MOST:Ringbruch | 1 |
| 0xCD0442 | TempShutdown-Sender/Empfängerbaustein(FOT):Temperatur übersteigt kritische Schwelle | 1 |
| 0xCD0443 | TempShutdownExtern-Sender/Empfängerbaustein(FOT):Temperatur übersteigt kritische Schwelle in anderem SG | 1 |
| 0xCD0445 | INIC Reset-Host hat bei fatalem Fehler vom INIC einen Reset ausgelöst | 0 |
| 0xCD0468 | BCanBusOff | 1 |
| 0xCD0487 | Synchronisationsvorgang fehlgeschlagen, CC war zum Zeitpunkt der Aufhebung der Fehlerspeichersperre noch nicht synchron | 1 |
| 0xCD0BFF | Primaerer Netzwerk-Dummy DTC | 1 |
| 0xCD1400 | Empfang keine Fehlerspeichersperre | 1 |
| 0xCD1410 | Empfang keine Systemzeit | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x1707 | DiagAdr | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x1709 | MOSTMesHeader | text | - | 6 | - | - | - | - |
| 0x170A | FOTTemp | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x170B | NPR | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4082 | Unterspannung an Vcc | 0-n | high | 0xFF | TabVccUndervoltage | 1 | 1 | 0 |
| 0x4083 | Unterspannung an Vio | 0-n | high | 0xFF | TabVioUndervoltage | 1 | 1 | 0 |
| 0x4084 | Unterspannung an Vbat. Keine Energieversorgung fuer interne Regler und keine Erkennung von Wakeup Symbole | 0-n | high | 0xFF | TabVbatUndervoltage | 1 | 1 | 0 |
| 0x4085 | Uebertemperatur | 0-n | high | 0xFF | TabOvertemperature | 1 | 1 | 0 |
| 0x4086 | TxEn ist permanent unten | 0-n | high | 0xFF | TabTxEnIsPermanentlyLow | 1 | 1 | 0 |
| 0x4087 | Bus Line Plus ist kurzgeschlossen mit GND | 0-n | high | 0xFF | TabBpLineShortedToGND | 1 | 1 | 0 |
| 0x4088 | Bus Line Plus ist kurzgeschlossen mit Versorgungsspannung | 0-n | high | 0xFF | TabBpLineShortedToSupplyVoltage | 1 | 1 | 0 |
| 0x4089 | Bus Line Minus ist kurzgeschlossen mit GND | 0-n | high | 0xFF | TabBmLineShortedToGND | 1 | 1 | 0 |
| 0x408A | Bus Line Minus ist kurzgeschlossen mit Versorgungsspannung | 0-n | high | 0xFF | TabBmLineShortedToSupplyVoltage | 1 | 1 | 0 |
| 0x408B | Bus Line Minus und Plus sind kurzgeschlossen | 0-n | high | 0xFF | TabBusLoadTooHigh | 1 | 1 | 0 |
| 0x408C | Physische Ende auf diesem Branch ist nicht abgeschlossen | 0-n | high | 0xFF | TabBusLoadTooLow | 1 | 1 | 0 |
| 0x408E | Flexray Learn Mode | 0-n | high | 0xFF | TabFlexRayLernMode | 1 | 1 | 0 |
| 0x408F | FlexRay DIAG+ | 0-n | high | 0xFF | TabFlexRayLernDiagPlus | 1 | 1 | 0 |
| 0x4100 | UBat - Betriebsspannung am SG | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4485 | Lesefehlercode | 0-n | high | 0xFF | TabVcmReadErrorCode | 1 | 1 | 0 |
| 0x4486 | Schreibfehlercode | 0-n | high | 0xFF | TabVcmWriteErrorCode | 1 | 1 | 0 |
| 0x4488 | RoutineId des fehlerhaften DiagnoseServices | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4489 | SubRoutineId des fehlerhaften DiagnoseServices | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x448A | ControlId des fehlerhaften DiagnoseServices | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448B | EcuStatus_0 - SGInfoFlagsByte2 des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448C | EcuStatus_1 - SGInfoFlagsByte2 des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448D | EcuStatus_2  - SGInfoFlagsByte2 des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448E | EcuStatus_3  - SGInfoFlagsByte2 des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x448F | EcuStatus_4  - SGInfoFlagsByte2 des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4490 | EcuId_0 - Steuergeraeteadresse des 1. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4491 | EcuId_1 - Steuergeraeteadresse des 2. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4492 | EcuId_2 - Steuergeraeteadresse des 3. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4493 | EcuId_3  - Steuergeraeteadresse des 4. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4494 | EcuId_4 - Steuergeraeteadresse des 5. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4495 | EcuId_5 - Steuergeraeteadresse des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4496 | EcuCounter - Anzahl der SGn mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4497 | SVT_Ist Generierung Fehlercode | 0-n | high | 0xFF | TabVcmSvtGenerationErrorCode | 1 | 1 | 0 |
| 0x4498 | Liste getauschter Steuergeräte Generierung Fehlercode | 0-n | high | 0xFF | TabVcmSerialGenerationErrorCode | 1 | 1 | 0 |
| 0x4499 | Diagnoseadresse der Anfrage | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x44A0 | EcuStatus_5  - SGInfoFlagsByte2 des 6. SGs mit Unterschieden | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4502 | Weckende SG - Diagnoseadresse des SGs, dass das Fahrzeug geweckt hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4503 | Weckgrund | 0-n | high | 0xFF | TabWeckgrund | 1 | 1 | 0 |
| 0x4504 | Wachhaltende SG_1 - Diagnoseadresse des 1. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4505 | Wachhaltende SG_2 - Diagnoseadresse des 2. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4506 | Wachhaltende SG_3 - Diagnoseadresse des 3. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4507 | Wachhaltende SG_4 - Diagnoseadresse des 4. SGs, dass das Fahrzeug wachgehalten hat | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4508 | Wachhaltegrund des 1. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4509 | Wachhaltegrund des 2. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450A | Wachhaltegrund des 3. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450B | Wachhaltegrund des 4. SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4581 | Steuergeraeteadresse des meldenden SGs | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4583 | Grund fuer nicht kompletten Systemkontext | 0-n | high | 0xFF | TabGrundSystemkontextNichtKomplett | 1 | 1 | 0 |
| 0x4584 | Fehlerhaftes Softwaremodul | 0-n | high | 0xFF | TabFehlerhaftesSoftwaremodul | 1 | 1 | 0 |
| 0x4602 | Fehlerhaftes Softwaremodul TAS | 0-n | high | 0xFF | TabFehlerhaftesSoftwaremodulTAS | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x100000 | VcmSoftwareError | 0 |
| 0x1000FF | VCM Logger Fehlerspeichereintrag | 0 |
| 0x100100 | Kontakt zu FZM Slave verloren | 0 |
| 0x100101 | Einschlafbestaetigungen nicht vollstaendig | 0 |
| 0x100102 | Ungueltige LocalSleepReadiness-Botschaft empfangen | 0 |
| 0x100103 | Shutdown abgebrochen - Durchstart erfolgt | 0 |
| 0x100105 | AliveMessageSender kann nicht auf FA Can schicken | 0 |
| 0x1001FF | FZM Logger Fehlerspeichereintrag | 0 |
| 0x100200 | Fehlermeldung mit falschem Format empfangen | 0 |
| 0x100201 | CC-Meldung mit falschem Format empfangen | 0 |
| 0x100202 | DM-Softwarefehler-Info kritisch | 0 |
| 0x100203 | DM-Softwarefehler-Info Warnung | 0 |
| 0x100204 | Botschaftsueberwachung: Systemkontextsignal ausgeblieben | 0 |
| 0x1002FF | Diagnose-Master Logger Fehlerspeichereintrag | 0 |
| 0x100300 | Beauftragung konnte nicht durchgeführt werden, da TAS bereits beschäftigt | 0 |
| 0x1003FF | TAS Logger Fehlerspeichereintrag | 0 |
| 0x100400 | Externes System versucht, F30 zu initiieren, ohne authentisiert zu sein | 0 |
| 0x100401 | CSM sendet bei F60 ungueltigen Fingerprint | 0 |
| 0x100403 | CSM sendet bei F60 ungueltige Response auf MSM-Challenge | 0 |
| 0x100404 | Externes System sendet bei F310 mit falschem Schluessel verschluesselte Liste | 0 |
| 0x100405 | Externes System sendet bei F310 ungueltige Liste | 0 |
| 0x100406 | CSM sendet bei F60 oder F70 keine Antwort | 0 |
| 0x100407 | Externes System sendet bei F210 ungueltiges Zertifikat | 0 |
| 0x100408 | Externes System sendet bei F210 oder F300 ungueltige Response auf MSMChallenge | 0 |
| 0x100409 | Zugangs-STG sendet bei F300 ungueltiges B2VSec-Zertifikat | 0 |
| 0x100410 | Zertifikate auf dem ZGW sind nicht gueltig | 0 |
| 0x1004FF | MSM Logger Fehlerspeichereintrag | 0 |
| 0x1005FF | HSFZ Logger Fehlerspeichereintrag | 0 |
| 0x100600 | Flexray Protokoll Startup Zeit ist zu hoch | 0 |
| 0x100601 | Unerwarteter asynchron Zustand auf Flexraybus | 0 |
| 0x100602 | Verletzung der Frame Slot Grenze wurde erkannt | 0 |
| 0x1006FF | FlexRay Logger Fehlerspeichereintrag | 0 |
| 0x100700 | Sekundaerer Anwendungs-Dummy DTC | 0 |
| 0x100701 | Sekundaerer Netzwerk-Dummy DTC | 0 |
| 0x1007FF | DEM Logger Fehlerspeichereintrag | 0 |
| 0x1009FF | Ethernet Logger Fehlerspeichereintrag | 0 |
| 0x100AFF | TP-Router Logger Fehlerspeichereintrag | 0 |
| 0x100BFF | MOST Logger Fehlerspeichereintrag | 0 |
| 0x100CFF | CAN Logger Fehlerspeichereintrag | 0 |
| 0x100DFF | Self-Diagnosis Logger Fehlerspeichereintrag | 0 |
| 0x100E00 | Komponente vom Lifecycle ausgeschlossen | 0 |
| 0x100EFF | Lifecycle Logger Fehlerspeichereintrag | 0 |
| 0x100FFF | EEPROM-Manager Logger Fehlerspeichereintrag | 0 |
| 0x101000 | OSEK OS ErrorHook Fehler | 0 |
| 0x101001 | OSEK OS Stack-Overflow Fehler | 0 |
| 0x101002 | OSEK OS Assertion | 0 |
| 0x101003 | OSEK OS Board Invalid | 0 |
| 0x1011FF | Logger Fehlerspeichereintrag fuer sonstige ZGW Komponente | 0 |
| 0x930001 | UnderVoltage Error-Versorgungsspannung: Mindestwert unterschritten  | 0 |
| 0x930006 | Sudden Light Off-MOST: Licht geht unerwartet aus | 0 |
| 0x930007 | Unlock Long-MOST: Synchronisation (PLL) arbeitet nicht korrekt | 0 |
| 0x930008 | ConfigOk not Time-Systemzustand Ok nicht fristgerecht erkannt | 0 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | Ubat | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4080 | Anzahl der Verletzungen | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4081 | Anzahl der Synchronisationsversuche | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x408D | Zeit der Startup Phase | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x40FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x417F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x41FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4281 | Runlevel of excluded lifecycle component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4282 | Index in runlevel of excluded lifecycle component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4283 | Lifecycle state of excluded component | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x42FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x437F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x43FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x447F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4481 | SoftwareModule | 0-n | high | 0xFF | TabSoftwareModul | 1 | 1 | 0 |
| 0x4482 | SoftwareErrorCode | 0-n | high | 0xFF | TabSoftwareError | 1 | 1 | 0 |
| 0x4483 | SoftwareErrorData | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x44FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4501 | FZM Slave ID | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450C | HW Weckgrund | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x450D | Error Counter Tx | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450E | Error Counter Rx | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x450F | Transceiver Software State | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4510 | Transceiver State | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4511 | Return Value | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4512 | HW address | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x457F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4581 | Steuergeraeteadresse | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4582 | illegales Format der Nachricht | 0-n | high | 0xFF | TabIllegalesNachrichtenformat | 1 | 1 | 0 |
| 0x4585 | allgemeiner Fehlercode fuer Softwarefehler | 0-n | high | 0xFF | TabSWFehlerCode | 1 | 1 | 0 |
| 0x4586 | Nachrichten-ID | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4587 | spezieller Fehlercode fuer Softwarefehler | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x45FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4601 | Aktiver Auftraggeber | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4603 | Neuer Auftraggeber | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x467F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4680 | FZGS-Fehlercode | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4681 | ID des fehler-meldenden SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x4682 | ID des fehlerhaften SGs | n/a | high | unsigned int | - | 1 | 1 | 0 |
| 0x46FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x477F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x47FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4800 | ErrorHook verursachender Task | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4801 | ErrorHook Callee | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4802 | ErrorHook Status | n/a | high | unsigned char | - | 1 | 1 | 0 |
| 0x4803 | Stack-Overflow verursachender Task | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4804 | Adresse der AssertionMessage | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4805 | Adresse des AssertionFile | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4806 | Adresse der AssertionZeile | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4807 | Board Invalid Stack Pointer | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4808 | Board Invalid SRR0 | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x4809 | Board Invalid Reason | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x48FF | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0x497F | Adresse der Fehlernachricht in der Binaerdatei | n/a | high | unsigned long | - | 1 | 1 | 0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SYSTEMZEIT_LESEN | 0x1701 | STAT_SYSTEMZEIT_WERT | resetgesicherter Sekundenzähler | sek | - | high | unsigned long | - | 1 | 1 | 0 | 0x10 | 22 | - | - |
| STEUERN_VIN_SCHREIBEN | 0xF190 | - | Setzen der VIN. | - | VIN_SCHREIBEN | - | - | - | - | - | - | 0x10 | 2E | ARG_0xF190 | - |

### TABBMLINESHORTEDTOGND

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBMLINESHORTEDTOSUPPLYVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBPLINESHORTEDTOGND

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBPLINESHORTEDTOSUPPLYVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBUSLOADTOOHIGH

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABBUSLOADTOOLOW

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABCCMSGS

| CC_NR | CC_MSG |
| --- | --- |
| 0x0001 | Sammelmeldung - Geschwindigkeits-reg. deaktiviert!  |
| 0x0002 | Geschwindigkeits-reg. deaktiviert!  |
| 0x0003 | Sammelmeldung - Geschwindigkeits-reg. ausgefallen!  |
| 0x000A | Sammelmeldung - Fahrwerk. Weiterfahrt möglich  |
| 0x000B | Sammelmeldung - Fahrwerk. Vorsichtig anhalten  |
| 0x000C | Mapping CCM 0x010 - Kurvenverhalten eingeschränkt  |
| 0x0015 | Anlasser/Zündung  |
| 0x0016 | Anlasser. Motor nicht abstellen  |
| 0x0018 | Sammelmeldung - Bremssystem. Weiterfahrt möglich.  |
| 0x001A | Geschwindigkeitsreg. ausgefallen!  |
| 0x001B | Öl am Minimum. Motoröl nachfüllen  |
| 0x001C | Öl unter Minimum! Umgehend nachfüllen  |
| 0x001D | Sammelmeldung - Antrieb. Weiterfahrt möglich  |
| 0x001E | Motor! Vorsichtig anhalten  |
| 0x001F | Erhöhte Emissionen!  |
| 0x0020 | Tankverschluss offen!  |
| 0x0021 | Motorstörung! Gemäßigt fahren  |
| 0x0023 | Sammelmeldung - Fahrstabilisierung. Gemäßigt fahren  |
| 0x0025 | Trigger %0  |
| 0x0026 | Fremde Fernbedienung!  |
| 0x0027 | Motor überhitzt! Vorsichtig halten  |
| 0x002A | Sammelmeldung- Bremssystem. Gemäßigt fahren  |
| 0x002B | Mapping CCM 0x00A - Kurvenverhalten eingeschränkt  |
| 0x002D | Mapping CCM 0x00A - Kurvenverhalten eingeschränkt  |
| 0x0030 |  (EMF: Tasterfehler)  |
| 0x0031 | Sammelmeldung - Antrieb. Demnächst prüfen  |
| 0x0032 | Reifen Pannen Anzeige ausgefallen! |
| 0x0034 | Fahrzeug gegen Wegrollen sichern! |
| 0x0035 | Automatic Hold. Selbst bremsen  |
| 0x0036 | Parkbremse. Weiterfahrt möglich  |
| 0x0038 | (Parkbremse mechanisch oder hydraulisch festgestellt.)  |
| 0x003C | Instrumentenkombination (nicht kodiert) |
| 0x003F | Mapping CCM 0x093 - Reifendruckverlust!  |
| 0x0042 | Fernbed. fehlt. Kein Motorstart  |
| 0x0043 | Batterie der Fernbedienung ersetzen!  |
| 0x0044 | Batterie Fernbedienung Standfunktionen leer!  |
| 0x0046 | Sammelmeldung - Lenkverhalten geändert!  |
| 0x0047 | Bremsbeläge ersetzen!  |
| 0x004A | Sammelmeldung - Bremssystem. Vorsichtig anhalten  |
| 0x004B | Elektrik Anhängerkupplung  |
| 0x0055 | Mapping CCM 0x001 - Geschwindigkeitsreg. deaktiviert!  |
| 0x005E | Rückhaltesystem Fond links gestört!  |
| 0x005F | Mapping CCM 0x05E - Rückhaltesystem Fond rechts gestört!  |
| 0x0061 | Rückhaltesysteme gestört!  |
| 0x0067 | Getriebe wird zu heiß!  |
| 0x006C | Rückhaltesystem Fahrer gestört!  |
| 0x006D | Rückhaltesystem Beifahrer gestört!  |
| 0x0090 | Sammelmeldung - Reifen Druck Control deaktiviert  |
| 0x0091 | Mapping CCM 0x095 - Reifen Druck Control ausgefallen  |
| 0x0093 | Sammelmeldung - Reifendruckverlust!  |
| 0x0094 | Bremslichtsteuerung defekt  |
| 0x0095 | Sammelmeldung - Reifen Druck Control ausgefallen!  |
| 0x0097 | Gaswarnung! Luftanlage ein  |
| 0x0099 | Waffenhalterung Fehler  |
| 0x009A | Fehler Reizgas-Sensor  |
| 0x009C | Luftanlage ohne Funktion  |
| 0x009D | Luftanlage aktiv  |
| 0x00A0 | Fensterheber Notfkt. verwenden!  |
| 0x00A1 | Startbatterie defekt  |
| 0x00A2 | Blitzleuchte, Lampe prüfen  |
| 0x00A3 | Feuerlöschanlage aktiv  |
| 0x00A6 | Kühlmittelstand zu niedrig!  |
| 0x00A7 | Uhrzeit und Datum einstellen  |
| 0x00AA | Getriebe gestört!  |
| 0x00AD | Getriebe gestört! Gemäßigt fahren  |
| 0x00AF | Fahrzeug gegen Wegrollen sichern  |
| 0x00B0 | Mapping CCM 0x003 - Geschwindigkeitsregelung gestört!  |
| 0x00B1 | Mapping CCM 0x1DF - Geschwindigkeitregelung gestört!  |
| 0x00B3 | Getriebe gestört! Gemäßigt fahren  |
| 0x00B4 | Mapping CCM 0x010 - Fahrkomfort eingeschränkt  |
| 0x00B6 | Ölstandssensor gestört!  |
| 0x00B7 | Scheibenwischer gestört!  |
| 0x00B9 | Ganganzeige ausgefallen!  |
| 0x00BA | Lenkradverriegelung defekt  |
| 0x00BB | ELV verspannt! Lenkrad bewegen  |
| 0x00C1 | Notausstieg gestört!  |
| 0x00C3 | PDC ausgefallen!  |
| 0x00C9 | Automatic Hold deaktiviert!  |
| 0x00CC | Kurvenverhalten eingeschränkt  |
| 0x00D0 | Komfortzugang eingeschränkt  |
| 0x00D2 | Mapping CCm 0x0F0 - Parkbremse ausgefallen!  |
| 0x00D4 | Motoröldruck! Vorsichtig anhalten  |
| 0x00D5 | Batterie wird nicht geladen!  |
| 0x00D8 | Kraftstoffpumpe! Gemäßigt fahren  |
| 0x00D9 | Mapping CCM 0x28C - Fernbedienung an Starttaste halten!  |
| 0x00DC | Erhöhte Batterieentladung!  |
| 0x00DD | Gaswarnung! Ort verlassen  |
| 0x00E0 | Isolationsfehler  |
| 0x00E1 | Frontscheibe entriegelt!  |
| 0x00E2 | Feuerlöschanlage Fehler!  |
| 0x00E5 | Batterie entladen. Motor starten  |
| 0x00E7 | Lichtanlage! Vorsichtig anhalten  |
| 0x00E8 | Schutzsysteme gestört!  |
| 0x00E9 | Kommunikation gestört!  |
| 0x00EA | Überfallalarm gestört!  |
| 0x00EC | Fahrstabilisierung. Gemäßigt fahren  |
| 0x00ED | Mapping CCM 0x023 - Fahrstabilisierung ausgefallen  |
| 0x00EF | Mapping CCM 0x0F0 - Parkbremse eingeschränkt verfügbar  |
| 0x00F0 | Sammelmeldung - Parkbremse ausgefallen!  |
| 0x00F1 | Mapping CCM 0x0F0 - Parkbremse defekt  |
| 0x00F2 | Mapping CCM 0x0F0 - Parkbremse eingeschränkt verfügbar  |
| 0x00F3 | Mapping CCM 0x0F0 - Parkbremse ausgefallen!  |
| 0x00F5 | Mapping CCM 0x010 - Fahrkomfort eingeschränkt  |
| 0x00F7 | Batterieüberwachung ausgefallen!  |
| 0x00FA | Zum Gangeinlegen Bremse treten - Gang ohne Bremse einlegbar  |
| 0x0100 | Leuchtweitenregulierung gestört!  |
| 0x0101 | Motor zu heiß! Gemäßigt fahren  |
| 0x0103 | Fensterheber-Einklemmschutz!  |
| 0x0104 | Schiebedach-Einklemmschutz!  |
| 0x0105 | Fensterheber-Einklemmschutz!  |
| 0x0106 | Regenschließen nicht möglich / Schiebedach- Einklemmschutz!  |
| 0x010A | Überrollschutz gestört!  |
| 0x0111 | Mapping CCM 0x046 - Lenkverhalten geändert!  |
| 0x0113 | Kraftstoffreserve!  |
| 0x0127 | Adaptive Lichtsysteme defekt  |
| 0x012B | Notruf-Systemfehler  |
| 0x012D | Sitzlehnen-Überwachung  |
| 0x0130 | Batterie wechseln  |
| 0x0131 | Energieversorgung gefährdet  |
| 0x0132 | Batterie stark entladen!  |
| 0x0135 | Kraftstoffsystem. Weiterfahrt möglich.  |
| 0x0141 | Sammelmeldung - Lenkung. Gemäßigt fahren  |
| 0x0146 | Sammelmeldung - Fahrzeug gegen Wegrollen sichern  |
| 0x0147 | Sammelmeldung - RDC Reset wird durchgeführt…  |
| 0x0148 | Anzeige Bremsbelag  |
| 0x014F | Zündung eingeschaltet  |
| 0x0151 | Geschwindigkeitsreg. ausgefallen  |
| 0x0153 | Mapping CCM 0x154 - Geschwindigkeitsreg. deaktiviert  |
| 0x0154 | Sammelmeldung - Geschwindigkeitsreg. deaktiviert  |
| 0x0155 | Mapping CCM 0x154 - Geschwindigkeitsreg. deaktiviert  |
| 0x015E | Mapping CCM 0x023 - Fahrstabilisierung Gemäßigt fahren  |
| 0x015F | Mapping CCM 0x023 - Fahrstabilisierung ausgefallen  |
| 0x0162 | Anfahrassistent inaktiv  |
| 0x0164 | Night Vision ausgefallen  |
| 0x016C | RPA Reset wird durchgeführt…  |
| 0x016F | Sammelmeldung - Antrieb Gemäßigt fahren  |
| 0x0171 | Mapping CCM 0x0EC - Fahrstabilisierung. Gemäßigt fahren  |
| 0x0172 | Mapping CCM 0x02A - Bremssystem Gemäßigt fahren  |
| 0x0174 | Zweistuf. Bremslicht links defekt  |
| 0x0175 | Zweistuf. Bremslicht rechts defekt  |
| 0x0176 | Kamerabasierende Assistenzsys. defekt  |
| 0x0178 | Kamerabasierende Systeme deaktiviert  |
| 0x017E | DSC eingeschränkt! Gemäßigt fahren  |
| 0x0189 | Wählhebel in Automatikgasse zurück  |
| 0x018A | Fahrstufenwechsel nicht möglich  |
| 0x018B | Fahrzeug gegen Wegrollen sichern  |
| 0x018D | Sammelmeldung - Auto Start Stop Funktion ausgefallen  |
| 0x0196 | Anhänger, elektr. Bremse prüfen  |
| 0x019A | Parkbremse eingeschränkt verfügbar  |
| 0x019F | Batterie. Entladung im Stand  |
| 0x01A3 | Mapping CCM 0x01D - Antrieb gestört  |
| 0x01A4 | Mapping CCM 0x01D - Getriebe gestört. Gemäßigt fahren  |
| 0x01A7 | Anhängervorrichtung. Vorsichtig anhalten  |
| 0x01A9 | Rückfahrkamera defekt  |
| 0x01AC | Side View Kamera ausgefallen  |
| 0x01AF | Hohe Bremsenbeanspruchung  |
| 0x01B2 | Sitzkalibrierung erforderlich  |
| 0x01B3 | Spurverlassenswarnung ausgefallen!  |
| 0x01B4 | Sitzpositionserkennung gestört!  |
| 0x01B7 | Mapping CCM 0x2DC - Parkbremse! Getriebe P einlegen |
| 0x01B9 | Geschwindigkeitsreg. Deaktiviert!  |
| 0x01BB | Geschwindigkeitsregelung, selbst bremsen |
| 0x01C0 | Mapping CCM 0x01D - Kraftstofffilter verstopft!  |
| 0x01C1 | Anhängervorrichtung. Vorsichtig anhalten  |
| 0x01C5 | Nahbereichs-Sensoren deaktiviert!  |
| 0x01C6 | Geschwindigkeitsreg. deaktiviert!  |
| 0x01C8 | P wird in Kürze eingelegt.  |
| 0x01C9 | Anhänger, Licht defekt  |
| 0x01CA | Fussgängerschutzsystem |
| 0x01CC | Batterie ersetzen!  |
| 0x01CD | Batterie! Ladezustand %0  |
| 0x01CE | Sitzbelegungssensor verschmutzt!  |
| 0x01D2 | Night Vision eingeschränkt  |
| 0x01D3 | Wählhebel  |
| 0x01D5 | Geschwindigkeitsreg. deaktiviert!  |
| 0x01D6 | Top View Kamera Objektiv überprüfen  |
| 0x01D7 | Kamerasystem  |
| 0x01D8 | Side View Kamera Objektiv prüfen |
| 0x01D9 | Side View defekt!  |
| 0x01DB | Notruf eingeschränkt! (Navi)  |
| 0x01DC | Sammelmeldung - Spurwechselwarnung ausgefallen!  |
| 0x01DD | Spurwechselwarnung deaktiviert!  |
| 0x01DE | Geschwindigkeitsreg. deaktiviert!  |
| 0x01DF | Sammelmeldung - Geschwindigkeitsreg. Auf Abstand achten |
| 0x01E3 | Mapping CCM 0x002 - Geschwindigkeitsreg. deaktiviert!  |
| 0x01E5 | Konfiguration inkons. Bitte prüfen lassen |
| 0x01E6 | Spurverlassenswarnung gestört!  |
| 0x01E7 | Spurverlassenswarnung gestört!  |
| 0x01EA | Parkassistent Selbst parken |
| 0x01EB | Mapping CCM 0x00B - Ölverlust! Vorsichtig halten  |
| 0x01EF | Fluchtgeschwindigkeit benutzt!  |
| 0x01F0 | Mapping CCM 0x046 - Lenkverhalten geändert!  |
| 0x01F1 | Mapping CCM 0x141 - Lenkverhalten geändert!  |
| 0x01F2 | Mapping CCM 0x046 - Lenkverhalten geändert!  |
| 0x01F5 | Lenkung. Weiterfahrt möglich  |
| 0x01F6 | Sammelmeldung - Lenkaufwand erhöht. Gemäßigt fahren  |
| 0x01F7 | Sammelmeldung - Lenkung, Gemäßigt fahren  |
| 0x01F8 | Mapping CCM 0x046 - Lenkverhalten geändert!  |
| 0x01F9 | Mapping CCM 0x00A - Fahrkomfort eingeschränkt!  |
| 0x01FB | Gefahr! Erhöhter CO2-Wert im Fahrz.!  |
| 0x0200 | Mapping CCM 0x018 - Bremskraftverstärkung eingeschränkt.  |
| 0x0208 | Service-Anzeige nicht verfügbar  |
| 0x0218 | Spurwechselwarnung deaktiviert!  |
| 0x0219 | Klimaautomatik  |
| 0x0233 | Belüftung  |
| 0x0234 | Tankverschluss offen!  |
| 0x0235 | Getriebeposition P nur im Stillstand!  |
| 0x0237 | Mapping CCM 0x01D - Motorlüfter, Gemäßigt fahren |
| 0x0238 | Antrieb, Vorsichtig anhalten |
| 0xFFFF | ungueltig |

### TABDIAGADRESSEN

| WERT | TEXT |
| --- | --- |
| 0x00 | JBBF |
| 0x01 | ACSM |
| 0x02 | SLZ_LWS |
| 0x04 | VOCS |
| 0x05 | CDM |
| 0x06 | TRSVC |
| 0x08 | HC2 |
| 0x0F | QSG |
| 0x10 | ZGW |
| 0x12 | DME1 |
| 0x13 | DME2 |
| 0x16 | ASA |
| 0x17 | EKP |
| 0x18 | DKG |
| 0x19 | LMV |
| 0x1A | EME |
| 0x1C | ICM Q/L |
| 0x20 | RDC |
| 0x21 | LRR |
| 0x24 | CVM |
| 0x26 | RSE_HIGH |
| 0x29 | DSC_Mod |
| 0x2A | EMF |
| 0x2B | HSR |
| 0x2C | PMA |
| 0x2E | PCU |
| 0x30 | EPS |
| 0x31 | MMC |
| 0x36 | TEL_MULF |
| 0x37 | AMP_HiFi |
| 0x38 | EHC1 |
| 0x39 | ICM-V |
| 0x3C | CDC |
| 0x3D | HUD |
| 0x40 | CAS |
| 0x48 | VSW |
| 0x49 | SEC1 |
| 0x4A | SEC2 |
| 0x4B | TVM |
| 0x4D | EMA_LI |
| 0x4E | EMA_RE |
| 0x50 | CAN-SINE |
| 0x54 | SDARS |
| 0x55 | TEL_MULF_HIGH |
| 0x56 | FZD |
| 0x57 | NiVi |
| 0x59 | aLBV_FA |
| 0x5A | aLBV_BF |
| 0x5D | KAFAS |
| 0x5E | GWS |
| 0x5F | FLA |
| 0x60 | KOMBI |
| 0x61 | COMBOX |
| 0x63 | CIC |
| 0x64 | PDC in JBBF |
| 0x67 | ZBE |
| 0x68 | ZBE Fond |
| 0x69 | SM_FAH |
| 0x6A | SM_BFH |
| 0x6B | HKL |
| 0x6D | SM_FA |
| 0x6E | SM_BF |
| 0x71 | AHM |
| 0x72 | FRMFA |
| 0x73 | CID |
| 0x74 | CID_R1 |
| 0x75 | CID_R2 |
| 0x78 | IHKA |
| 0x79 | FKA |
| 0x7B | HKA |
| 0x86 | KOMBI |
| 0xA5 | RK_VL |
| 0xA6 | RK_VR |
| 0xA7 | RK_HL |
| 0xA8 | RK_HR |
| 0xFF | SG unbekannt |

### TABFEHLERHAFTESSOFTWAREMODUL

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Diagnosemaster |
| 0x02 | TroubleTicketCreator |
| 0x03 | TesterRequestHandler |
| 0x04 | SystemContextMgmt |
| 0x05 | MemoryAccess |
| 0x06 | LifeCycle |
| 0x07 | EventMsgMgmt |
| 0x08 | ErrorHandlerAdapter |
| 0xFF | Ungueltiger Wert |

### TABFEHLERHAFTESSOFTWAREMODULTAS

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Tester Assistant |
| 0x02 | TAS_Activation - Tester Assistant Aktivierung |
| 0x03 | TAS_ErrorHandler - Tester Assistant Fehler-Manager |
| 0xFF | ungueltiger Wert |

### TABFLEXRAYLERNDIAGPLUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | DIAG+ ist aktiv.Es wurden manuel FlexRay Branches deaktiviert oder aktiviert |
| 0x01 | DIAG+ ist nicht aktiv. |
| 0xFF | ungueltiger Wert |

### TABFLEXRAYLERNMODE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | FlexRay Lern Mode wurde durchgeführt |
| 0x01 | FlexRay Lern Mode wurde noch nicht durchgeführt |
| 0xFF | ungueltiger Wert |

### TABGRUNDSYSTEMKONTEXTNICHTKOMPLETT

| WERT | UWTEXT |
| --- | --- |
| 0x01 | ErrorMessage-Queue für eingehende Fehler ist voll |
| 0x02 | DiagnoseMaster Fehlerspeicher voll: keine Zuordnung möglich |
| 0x03 | DiagnoseMaster Fehlerspeicher voll: keine Umweltbedingungsdaten möglich |
| 0x04 | Softwarefehler: NULL_ZEIGER |
| 0x05 | ErrorMessage-Queue für eingehende CC-Meldungen ist voll |
| 0xFF | ungueltiger Wert |

### TABILLEGALESNACHRICHTENFORMAT

| WERT | UWTEXT |
| --- | --- |
| 0x01 | MESSAGE_TOO_LONG |
| 0x02 | NULL_POINTER_FROM_ACTIVE_RESPONSE_HANDLER |
| 0x03 | ILLEGAL_SG_ID |
| 0x04 | NULL_POINTER_RECEIVED_CC_NUMBERS |
| 0x05 | NULL_POINTER_PAYLOAD |
| 0x06 | ILLEGAL_LENGTH_OF_CC_MSG_LIST |
| 0x07 | NO_MOST_OPTYPE_STATUS |
| 0x08 | FBLOCK_KOMBI_INTERFACE_NOT_AVAILABLE |
| 0x09 | FBLOCK_KOMBI_INTERFACE_INSTANCE_NOT_AVAILABLE |
| 0x0A | CC_ROLLE_KOMBI_NOT_AVAILABLE |
| 0x0B | NOTIFICATION_FCT_ID_ILLEGAL |
| 0x0C | PAYLOADLENGTH_ZERO |
| 0x0D | MOST_OPTYPE_ERROR |
| 0x0E | WRONG_CCMSG_MOST_FBLOCK_ID |
| 0x0F | NO_TEXT_STOP_BYTE_FOUND |
| 0x10 | NO_TEXT_START_BYTE_FOUND |
| 0x11 | MORE_CCMSGS_AS_MAX_CHECKCONTROL_ATSAMETIME |
| 0x12 | CCMSG_TO_SHORT |
| 0x13 | UNEXPECTED_CCMSG_HEADER |
| 0x14 | CCMSG_LENGTH_TOO_SMALL_FOR_HEADER |
| 0x15 | MOST_CONFIG_NOT_OK |
| 0x16 | NOTIFICATION_NOT_SEND_TO_KOMBI |
| 0x17 | ILLEGAL_DEVICE_ID |
| 0x18 | MOST_SEND_FAIL |
| 0xFF | Ungueltiger Wert |

### TABOVERTEMPERATURE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABROEINITFEHLER

| PROBLEMBYTE | PROBLEMBYTETEXT |
| --- | --- |
| 0x00 | SG hat nicht geantwortet |
| 0x01 | SG hat geantwortet, aber mit negative response |
| 0x02 | SG hat mit positive response geantwortet, obwohl es nicht in VCM-Liste steht |
| 0x03 | SG hat mit negative response geantwortet, obwohl es nicht in VCM-Liste steht |
| 0x04 | SG hat mit nicht interpretierbarer response geantwortet |
| 0x05 | SG hat mit nicht interpretierbarer response geantwortet, obwohl es nicht in VCM-Liste steht |

### TABSWFEHLERCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | ERROR_SCB_TIMEWINDOWERROR |
| 0x02 | ERROR_SCB_WINDOWBELOWBUFFERRANGE |
| 0x03 | ERROR_CMA_LOCK_CONFLICT |
| 0x04 | ERROR_TTH_LOCKDENIENDWHILETRYINGTOCREATEERROR |
| 0x05 | ERROR_CMA_ILLEGAL_UNLOCK_BLOCKED |
| 0x06 | ERROR_TTH_WRITELOCKCOULDNOTBERELEASED |
| 0x07 | ERROR_NA_READABOVERANGE |
| 0x08 | ERROR_SCM_RECEIVEDCONTEXTFORNOELEMENT |
| 0x09 | ERROR_SCM_SYSTEMCONTEXTLENGTHMAXVIOLATION |
| 0x0A | ERROR_SCM_SYSTEMCONTEXTLENGTHMINVIOLATION |
| 0x0B | ERROR_SCM_NOELEMENTACTIVATED |
| 0x0C | ERROR_SCE_MODENOTFOUND |
| 0x0D | ERROR_SCE_SIGNALTOOLONG |
| 0x0E | ERROR_SCM_SYSTEMCONTEXTLENGTHMINVIOLATION2 |
| 0x0F | ERROR_SCEH_HISTORYMODEERROR |
| 0x10 | ERROR_SCE_WRITECONTEXTLENGTHERROR |
| 0x11 | ERROR_SCM_NUMBEROFSYSCONTEXTELEMENTSVIOLATION |
| 0x12 | ERROR_SCE_NOSIGNALRECEIVEDYET |
| 0x13 | ERROR_NA_SETSYSCONTEXT_IN_MAPPING_AREA |
| 0x14 | ERROR_NA_WORNG_EVENTMSGMAPPING_ADDRESS_SET |
| 0x15 | ERROR_NA_WORNG_EVENTMSGMAPPING_ADDRESS |
| 0x16 | ERROR_SCM_NOTACTIVE |
| 0x17 | ERROR_NOSYSTEMCONTEXTFILTERGENERATED |
| 0x18 | ERROR_CANCONFIGURATORADDLISTENERFAILED |
| 0x19 | ERROR_NA_GETSYSTEMCONTEXTCOUNTFAILED |
| 0x1A | ERROR_NA_GETSYSTEMCONTEXTFAILED |
| 0x1B | ERROR_NA_SETSYSTEMCONTEXTFAILED |
| 0x1C | ERROR_NA_GETEVENTMSGMAPPINGCOUNTFAILED |
| 0x1D | ERROR_NA_SETEVENTMSGMAPPINGCOUNTFAILED |
| 0x1E | ERROR_NA_SETEVENTMSGMAPPINGFAILED |
| 0x1F | ERROR_SCCL_MSGPOOLERROR |
| 0x20 | ERROR_SCM_SYSTEMCONTEXTELEMENTZEROLENGTH |
| 0x21 | ERROR_CCMH_CCMSGRECEIVEDBUTNOSYSTIMEAVAILABLE |
| 0x22 | NULLPOINTER_INPUT |
| 0x23 | CCMNV_COULD_NOT_UNLOCK |
| 0x24 | WARNING_CLEARED_TROUBLETICKETQUEUE_IN_SHUTDOWN |
| 0x25 | TRH_CLEAR_CMA_RETURNED_FALSE |
| 0x26 | ERROR_NA_READCHECKSUMFAILED |
| 0x27 | ERROR_CMA_CHECKSUM_MISSMATCH_ON_STARTUP |
| 0x28 | ERROR_CMA_CHECKSUM_MISSMATCH_ON_STARTUP_INCORRECTABLE |
| 0x29 | ERROR_SHUTDOWN_CRC_MISSMATCH |
| 0x2A | ERROR_NA_ADDSYSCONTEXTANDMAPPINGERROR |
| 0x2B | ERROR_NA_ADDMAPPINGERROR |
| 0x2C | TRH_READSYSCONTEXTBLOCK_CMA_RETURNED_FALSE |
| 0x2D | LIFECYCLE_PREPARESHUTDOWNCALLEDWHILE_NOT_LEVELRUN |
| 0x2E | WARNING_NA_OCCURENCECOUNTERCACHEOVERFLOW |
| 0x2F | ERROR_THIS_MUST_NOT_HAPPEN |
| 0x30 | ERROR_NO_TRANSACTION |
| 0x31 | ERROR_CREATESYSTEMCONTEXTFAILED |
| 0x32 | ERROR_ADD_JOB_FAILED |
| 0x33 | ERROR_WRONG_INIT_STAGE |
| 0x34 | ERROR_SCM_SYSTEMCONTEXTLENGTHMINVIOLATION3 |
| 0x35 | ERROR_GET_NEWESTSYSTEMTIME |
| 0x36 | ERROR_ER_WRONGACTIVERESPONSELENGTH |
| 0xFF | Ungueltiger Wert |

### TABSOFTWAREERROR

| WERT | UWTEXT |
| --- | --- |
| 0x01 | allgemeine Fehler |
| 0xFF | ungueltiger Wert |

### TABSOFTWAREMODUL

| WERT | UWTEXT |
| --- | --- |
| 0x01 | VCM |
| 0xFF | ungueltiger Wert |

### TABTXENISPERMANENTLYLOW

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVBATUNDERVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVCCUNDERVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABVCMREADERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Leerer Speicher |
| 0x02 | Ungültige Datengröße |
| 0x03 | Fehlerhafte Datenlänge aus EEPROM |
| 0x04 | Fehlerhafte Datencontainer aus EEPROM |
| 0x05 | SVT-Stream-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x06 | SVT-Objekt-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x07 | EEPROM-Manager Fehler |
| 0xFF | ungueltiger Wert |

### TABVCMSERIALGENERATIONERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Generierung vollständig, getauschte SG vorhanden |
| 0x02 | Generierung ohne Ergebnis-Abbruch nach Deaktivierung von Klemme 15 |
| 0x03 | Generierung ohne Ergebnis-Abbruch nachGeneral Reject vom TAS |
| 0xFF | Ungueltiger Wert |

### TABVCMSVTGENERATIONERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Generierung ohne Ergebnis-Abbruch nach Deaktivierung von Klemme 15  (Abbruch durch KL15 nach Testerauftrag) |
| 0x02 | Generierung ohne Ergebnis-Abbruch nachGeneral Reject vom TAS (nach Testerauftrag) |
| 0xFF | Ungueltiger Wert |

### TABVCMWRITEERRORCODE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | EEPROM-Manager Fehler |
| 0x02 | SVT-Stream-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x03 | SVT-Objekt-Datenstruktur fehlerhaft / Speicherüberlauf |
| 0x04 | Maximale Datenlänge überschritten |
| 0x05 | Allgemeiner Fehler |
| 0xFF | ungueltiger Wert |

### TABVIOUNDERVOLTAGE

| WERT | UWTEXT |
| --- | --- |
| 0x01 | aufgetreten |
| 0x00 | nicht aufgetreten |
| 0xFF | ungueltiger Wert |

### TABWECKGRUND

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Reset |
| 0x01 | Diebstahlwarnanlage |
| 0x02 | Restwärme |
| 0x03 | CO2-Erkennung |
| 0x04 | Eject-Button |
| 0x05 | Abschaltung Klemme VA |
| 0x06 | Außenspiegel |
| 0x07 | Remote Services |
| 0x08 | Emergency call |
| 0x10 | Tuerkontakt vorne links |
| 0x11 | Tuerkontakt vorne rechts |
| 0x12 | Tuerkontakt hinten links |
| 0x13 | Tuerkontakt hinten rechts |
| 0x14 | Taster Fahrertuer (CA) |
| 0x15 | Taster Beifahrertuer (CA) |
| 0x16 | Taster Heckklappe oeffnen innen (TOEHKI) |
| 0x17 | Taster Oeffner Heckklappe (TOEHK) |
| 0x18 | Taster Oeffner Heckscheibe (TOEHS) |
| 0x19 | Heckklappenstatus (HKK) |
| 0x1A | Eingang Heckscheibenkontakt (HKK) |
| 0x1B | Motorhaubenkontakt |
| 0x1C | Tuerschloss entriegeln/Komfortoeffnen (Fahrertuer) |
| 0x1D | Tuerschloss verriegeln/Komfortschliessen (Fahrertuer) |
| 0x1E | Kurzschluss Klemme 30B |
| 0x20 | Start Stop Taster A |
| 0x21 | Start Stop Taster B |
| 0x22 | Hallsensor Eject |
| 0x23 | Center Lock/Unlock |
| 0x24 | Parkstellung Automatik |
| 0x25 | Lichtschalter ein (redundant) |
| 0x26 | Schalter Warnblinken |
| 0x27 | Lenkstocktaster in Richtung  Blinken links  |
| 0x28 | Lenkstocktaster in Richtung  Blinken rechts  |
| 0x29 | Lenkstocktaster in Richtung  Lichthupe  |
| 0x2A | Schalter Innenbeleuchtung (Dachmodul) |
| 0x2B | Klemme 15 |
| 0x2C | EMF-Taster |
| 0x2D | Entertainment |
| 0x2E | Lenksaeulenverstellschalter |
| 0x2F | Niveauregulierung Luftfeder |
| 0x30 | Fernbedienungsdienste / RKE |
| 0x31 | Wakeup-Signal von TCU |
| 0x32 | Hotelschalter |
| 0x33 | Intelligenter Batterie Sensor, via LIN |
| 0x34 | Ablauf Timer Standheizung/lueften/klima |
| 0x35 | Kuehlmittelabfrage durch Kombi |
| 0x36 | Klemme 15 Wakeupleitung |
| 0x37 | Taster Fahrertuer hinten entriegeln (CA) |
| 0x38 | Taster Beifahrertuer hinten entriegeln (CA) |
| 0x39 | Taster Fahrertuer entriegeln kapazitiv (CA) |
| 0x3A | Taster Beifahrertuer entriegeln kapazitiv (CA) |
| 0x3B | Taster Fahrertuer hinten entriegeln kapazitiv (CA) |
| 0x3C | Taster Beifahrertuer hinten entriegeln kapazitiv (CA) |
| 0x3D | Bremslichtschalter |
| 0x3E | Kupplungsschalter |
| 0x3F | ungueltiger Weckgrund, Weckgrund nicht gesetzt |

### GROBNAME

| ADR | GROBNAME |
| --- | --- |
| 0x00 | JBBF |
| 0x01 | AIRBAG |
| 0x02 | SZL |
| 0x04 | VOCS |
| 0x05 | CDM |
| 0x06 | TSVC |
| 0x07 | SME |
| 0x08 | HC |
| 0x0B | SCR |
| 0x0D | HKFM |
| 0x0E | SVT |
| 0x0F | QSG/GHAS |
| 0x10 | ZGW |
| 0x12 | DME/DDE |
| 0x13 | DME/DDE |
| 0x16 | ASA |
| 0x17 | EKP |
| 0x18 | EGS |
| 0x19 | LMV |
| 0x1A | EME |
| 0x1C | ICMQL |
| 0x20 | RDC |
| 0x21 | FRR |
| 0x24 | CVM |
| 0x26 | RSE |
| 0x29 | DSC |
| 0x2A | EMF |
| 0x2B | HSR |
| 0x2C | PMA |
| 0x2E | PCU |
| 0x30 | EPS |
| 0x31 | MMC |
| 0x36 | TELEFON |
| 0x37 | AMP |
| 0x38 | EHC |
| 0x39 | ICMV |
| 0x3A | EME |
| 0x3C | CDC |
| 0x3D | HUD |
| 0x40 | CAS |
| 0x41 | TMS_L |
| 0x42 | TMS_R |
| 0x43 | LHM_L |
| 0x44 | LHM_R |
| 0x46 | GZAL |
| 0x47 | GZAR |
| 0x48 | VSW |
| 0x49 | SECU1 |
| 0x4A | SECU2 |
| 0x4B | TVM |
| 0x4D | EMA_LI |
| 0x4E | EMA_RE |
| 0x50 | SINE |
| 0x54 | RADIO |
| 0x55 | MULF |
| 0x56 | FZD |
| 0x57 | NIVI |
| 0x59 | ALBVF |
| 0x5A | ALBVB |
| 0x5D | KAFAS |
| 0x5E | GWS |
| 0x5F | FLA |
| 0x60 | KOMBI |
| 0x61 | ECALL |
| 0x63 | HEADUNIT |
| 0x64 | PDC |
| 0x67 | ZBE |
| 0x68 | ZBEF |
| 0x69 | FAH |
| 0x6A | BFH |
| 0x6B | HKL |
| 0x6D | FAS |
| 0x6E | BFS |
| 0x71 | AHM |
| 0x72 | FRM |
| 0x73 | CID |
| 0x74 | CIDF |
| 0x75 | CIDF2 |
| 0x76 | VDC |
| 0x77 | RFK |
| 0x78 | IHKA |
| 0x79 | FKA |
| 0x7B | HKA |
| 0xA0 | CIC_HD |
| 0xA5 | RK_VL |
| 0xA6 | RK_VR |
| 0xA7 | RK_HL |
| 0xA8 | RK_HR |
| 0xA9 | CDCDSP |
| 0xAB | MMCDSP |
| 0xXY | ???? |

### TABDMFSSPERRESTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Fehlerspeicherfreigabe |
| 0x01 | Fehlerspeichersperre |
| 0x02 | Reserve |
| 0x03 | Signal ungültig |
| 0x04 | Nachricht 0x3A0 stumm |
| 0xFF | ungueltig |

### TABDMFSBETRIEBSARTSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Freilaufend |
| 0x01 | Fest wie mittels Routine vorgegeben |
| 0x02 | keine Angabe möglich |
| 0xFF | ungueltig |

### TABZFSSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | ZFS Ringspeicher noch nicht im Überschreibmodus |
| 0x01 | ZFS Ringspeicher bereits im Überschreibmodus |
| 0xFF | ZFS Ringspeicher noch nicht im Überschreibmodus |
