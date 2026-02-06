# FZD_F40.prg

## General

|  |  |
| --- | --- |
| File | FZD_F40.prg |
| Type | PRG |
| Jobs | 135 |
| Tables | 244 |
| Origin | BMW EE-701 Markus_Mayer |
| Revision | 3.000 |
| Author | VALEO-KLIMASYSTEME-GMBH EE-254 SAVA |
| ECU Comment | Neue SGBD generieren (Änderungen an Entwicklerjobs) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Funktionszentrum Dach |  |  |
| ORIGIN | string | BMW EE-701 Markus_Mayer |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | VALEO-KLIMASYSTEME-GMBH EE-254 SAVA |  |  |
| COMMENT | string | Neue SGBD generieren (Änderungen an Entwicklerjobs) |  |  |
| PACKAGE | string | 1.992 |  |  |
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
| FEHLER_KLASSE | string | 'IGNORIERE_EREIGNIS_DTC': Wenn EREIGNIS_DTC = '1', DTC-Fehlereinträge werden ignoriert sonst: FEHLERKLASSE wird ausgewertet |

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

### STEUERN_IO

Vorgeben eines Status UDS  : $2F InputOutputControlByIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'RCTECU' = returnControlToECU 'RTD'    = resetToDefault 'FCS'    = freezeCurrentState 'STA'    = shortTermAdjustment optionales Argument Wenn nicht angegeben, dann kein InputOutputControlParameter im Request |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### STEUERN_ROUTINE

Vorgeben eines Status UDS  : $31 RoutineControl

| Name | Type | Description |
| --- | --- | --- |
| ARGUMENT_SPALTE | string | 'ARG', 'ID', 'LABEL' |
| STATUS | string | Siehe table SG_Funktionen ARG ID RES_TABELLE ARG_TABELLE |
| STEUERPARAMETER | string | 'STR'  = startRoutine 'STPR' = stopRoutine 'RRR'  = requestRoutineResults |
| WERT | string | Argumente siehe table SG_Funktionen ARG_TABELLE |

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers UDS  : $85 ControlDTCSetting UDS  : $?? Sperren ($02) / Freigabe ($01) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT Default: "ja" |

### IS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $17 ReadDTCByStatusMask UDS  : $0C StatusMask (Bit2, Bit3) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| IGNORIERE_EREIGNIS_DTC | string | 'IGNORIERE_EREIGNIS_DTC': Alle Ereignis DTC-Fehlereinträge werden ignoriert sonst: alle Fehlereinträge werden ausgegeben |

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $19 ReadDTCInformation UDS  : $18 reportDTCSnapshotRecordByDTCNumber UDS  : $19 reportDTCExtendedDataRecordByDTCNumber UDS  : $-- reportSeverityInformationOfDTC (nicht möglich!) Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode |

### IS_LOESCHEN

Infospeicher loeschen UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $0F06 ClearSecondaryDTCMemory Modus: Default

_No arguments._

### HERSTELLINFO_LESEN

Lieferant und Herstelldatum lesen UDS  : $22   ReadDataByIdentifier UDS  : $F18A SystemSupplierIdentifier UDS  : $F18B ECUManufactoringData Modus: Default

_No arguments._

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

### SLEEP_MODE

SG in Sleep-Mode versetzen UDS  : $11 ECUReset UDS  : $04 EnableRapidPowerShutDown Modus: Default

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes UDS   : $31   RoutineControlRequestServiceID UDS   : $01   startRoutine UDS   : $0F0C DataIdentifier ControlEnergySavingMode UDS   : $??   Mode Modus : Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | 0x00: Normalmode 0x01: Fertigungsmode 0x02: Transportmode 0x03: Flashmode |

### STATUS_ENERGIESPARMODE

Energy-Saving-Mode auslesen UDS  : $22   ReadDataByIdentifier UDS  : $100A DataIdentifier EnergySavingMode Modus: Default

_No arguments._

### STATUS_BETRIEBSMODE

Aktueller Betriebsmode SG muss sich im Energiersparmode befinden UDS  : $22   ReadDataByIdentifier UDS  : $100E Sub-Parameter Betriebsmode Modus: Default

_No arguments._

### STEUERN_BETRIEBSMODE

Betriebsmode setzen SG muss sich im Energiersparmode befinden UDS  : $31   RoutineControl UDS  : $01   startRoutine UDS  : $1003 DataIdentifier Betriebsmode UDS  : $0?   Betriebsmode Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| BETRIEBSMODE | int | Betriebsmode setzen table Betriebsmode WERT 0     : Kein Betriebsmode gesetzt 1 - 16: Erweiterter Betriebsmode (Bedeutung siehe Tabelle) |

### SENSOREN_ANZAHL_LESEN

Anzahl der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers Modus: Default

_No arguments._

### SENSOREN_IDENT_LESEN

Identifikation der intelligenten Subbussensoren lesen UDS  : $22   ReadDataByIdentifier UDS  : $1600 Identifier NumberofSubbusMembers UDS  : $16xx SubbusMemberSerialNumber Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| SENSOR_NR | long | optionales Argument gewuenschter Sensor xx (0x01 - 0xFF) oder VERBAUORT eines bestimmten Sensors (table VerbauortTabelle ORT) |

### STEUERGERAETE_RESET

Harter Reset des Steuergeraets UDS  : $11 EcuReset UDS  : $01 HardReset Modus: Default

_No arguments._

### STATUS_ROE_REPORT

Abfrage Status der Aktivierung der aktiven Fehlermeldung UDS: $86 ResponseOnEvent $04 report activated events $02 eventWindowTime - infinite (LH Diagnosemaster V11 oder höher, Umsetzung nach LH V6 - V10 wird jedoch toleriert)

_No arguments._

### STEUERN_ROE_PERSISTENT_STOP

Persistentes Deaktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $40 Stop persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### STEUERN_ROE_PERSISTENT_START

Persistentes Aktivieren der aktiven Fehlermeldung an den Diagnosemaster ueber TAS UDS   : $86 ResponseOnEvent $45 Start persistent $02 (EventWindowTime) gültig für LH Diagnosemaster V6 - V12 (Stand 2013)

_No arguments._

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### STATUS_SHD_ESH_BEWERTUNG_KENNLINIE

Auslesen der gespeicherten Kennlinien/Adaptionsdaten fuer den Einklemmschutz

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | 0xA1: Schiebedach 0xA2: Elektrischer Schiebehimmel |
| DERIVAT | string | Entwicklungsbezeichnung F25, F56, I01 |
| BEREICH | string | Argument siehe Tabelle TAB_FH_SHD_ESH_LAGE_NR_ARG_ENTW 0x01: Ausstelllage 0x02: Schiebelage |

### _USIS_ALARMCOUNTER_READ

Read the USIS alarm counter JobHeaderFormat 0x4501 _USIS_ALARMCOUNTER_READ

_No arguments._

### _USIS_ALARMMEMORY_READ

Read the USIS Alarm memory JobHeaderFormat 0x4502 _USIS_ALARMMEMORY_READ

_No arguments._

### _USIS_DTC_MEMORY_READ

Read the USIS DTC memory JobHeaderFormat 0x4503 _USIS_DTC_MEMORY_READ

_No arguments._

### _USIS_ECHODOPPLERCOUNTER_READ

Read the Echo/Doppler counters JobHeaderFormat 0x4504 _USIS_ECHODOPPLERCOUNTER_READ

_No arguments._

### _USIS_ENVIRONMENT_READ

Read USIS Environment JobHeaderFormat 0x4505 _USIS_ENVIRONMENT_READ

_No arguments._

### _USIS_ADAPTATION_READ

Read USIS Adaptation JobHeaderFormat 0x4506 _USIS_ADAPTATION_READ

_No arguments._

### _USIS_NVM_READ

Status Analog Input/Output JobHeaderFormat 0x4507 _USIS_NVM_READ

_No arguments._

### _USIS_VERSION_READ

Read USIS Library Version JobHeaderFormat 0x4508 _USIS_VERSION_READ

_No arguments._

### _USIS_NVM_DEBUG_READ

Status USIS NVM for debug JobHeaderFormat 0x4509 _USIS_NVM_DEBUG_READ

_No arguments._

### _READ_DIO

Status Digital Input/Output JobHeaderFormat 0x6000 _READ_DIO

_No arguments._

### _READ_AIO

Status Analog Input/Output JobHeaderFormat 0x6002 _READ_AIO

_No arguments._

### _READ_SLIDER_LED

Read the Slider Led BIN Pointer JobHeaderFormat 0x6005 _READ_SLIDER_LED

_No arguments._

### _READ_SLIDER_PWM

Read the table value JobHeaderFormat 0x6006 _READ_SLIDER_PWM

_No arguments._

### _READ_VALEO_TESTBYTE

Read the Valeo test byte JobHeaderFormat 0x6007 _READ_VALEO_TESTBYTE

_No arguments._

### _READ_VERSION

Status Version JobHeaderFormat 0x6008 _READ_VERSION

_No arguments._

### _READ_PCB_DATA

Status PCB JobHeaderFormat 0x6009 _READ_PCB_DATA

_No arguments._

### _READ_RUNIN

Read the Valeo RunIn JobHeaderFormat 0x600A _VALEO_RUNIN

_No arguments._

### _READ_ASSEMBLY_DATA

Status assembly JobHeaderFormat 0x600B _READ_ASSEMBLY_DATA

_No arguments._

### _READ_PRODUCTION_DATE

read production date JobHeaderFormat 0x600C _READ_PRODUCTION_DATE

_No arguments._

### _CHECK_LIN_SIREN

Check LIN Siren JobHeaderFormat 0x600D _CHECK_LIN_SIREN

_No arguments._

### _READ_BMW_TRACEABILITY

Read BMW Traceability JobHeaderFormat 0x600E _READ_BMW_TRACEABILITY

_No arguments._

### _STATUS_DWA_ALARMSPEICHER

Auslesen des Alarmspeichers der Diebstahlwarnlage JobHeaderFormat 0x6010 STATUS_DWA_ALARMSPEICHER

_No arguments._

### _READ_CPU_LOAD

Read USIS Selftest result JobHeaderFormat 0x6017 _READ_CPU_LOAD

_No arguments._

### _READ_RESET_COUNTER

Read resetcounter JobHeaderFormat 0x6018 _READ_RESET_COUNTER

_No arguments._

### _READ_TOTAL_ROOF_INT

Read number of Roof Interrupts JobHeaderFormat 0x6019 _READ_TOTAL_ROOF_INT

_No arguments._

### _READ_TASK_STACK

Read task stack JobHeaderFormat 0x601B _READ_TASK_STACK

_No arguments._

### _READ_EMS_TEST_BYTE

Read the EMS test byte JobHeaderFormat 0x6022 _READ_EMS_TEST_BYTE

_No arguments._

### _READ_BOOTLOADER_CHECKSUM

Read Bootloader Checksum JobHeaderFormat 0x6023 _READ_BOOTLOADER_CHECKSUM

_No arguments._

### _READ_APPLICATION_CHECKSUM

Read Application Checksum JobHeaderFormat 0x6024 _READ_APPLICATION_CHECKSUM

_No arguments._

### _READ_AD_30_F39_VBF

Status Analog Input/Output JobHeaderFormat 0x6040 _READ_AD_30_F39_VBF

_No arguments._

### _READ_AD_30_F108_VBF

Status Analog Input/Output JobHeaderFormat 0x6041 _READ_AD_30_F108_VBF

_No arguments._

### _READ_AD_30F_SW_HALL

Status Analog Input/Output JobHeaderFormat 0x6042 _READ_AD_30F_SW_HALL

_No arguments._

### _READ_AD_DIAG_DWA_LED

Status Analog Input/Output JobHeaderFormat 0x6043 _READ_AD_DIAG_DWA_LED

_No arguments._

### _READ_AD_TEMP

Status Analog Input/Output JobHeaderFormat 0x6044 _READ_AD_TEMP

_No arguments._

### _READ_AD_SENSOR_TEMP

Status Analog Input/Output JobHeaderFormat 0x6045 _READ_AD_SENSOR_TEMP

_No arguments._

### _READ_AD_LED_TEMP

Status Analog Input/Output JobHeaderFormat 0x6046 _READ_AD_LED_TEMP

_No arguments._

### _READ_AD_SENSE_RX

Status Analog Input/Output JobHeaderFormat 0x6047 _READ_AD_SENSE_RX

_No arguments._

### _READ_AD_SENSE_TX

Status Analog Input/Output JobHeaderFormat 0x6048 _READ_AD_SENSE_TX

_No arguments._

### _READ_AD_ECO1

Status Analog Input/Output JobHeaderFormat 0x6049 _READ_AD_ECO1

_No arguments._

### _READ_AD_ECO2

Status Analog Input/Output JobHeaderFormat 0x604A _READ_AD_ECO2

_No arguments._

### _READ_AD_R2PH90

Status Analog Input/Output JobHeaderFormat 0x604B _READ_AD_R2PH90

_No arguments._

### _READ_AD_R2PH0

Status Analog Input/Output JobHeaderFormat 0x604C _READ_AD_R2PH0

_No arguments._

### _READ_AD_R1PH90

Status Analog Input/Output JobHeaderFormat 0x604D _READ_AD_R1PH90

_No arguments._

### _READ_AD_R1PH0

Status Analog Input/Output JobHeaderFormat 0x604E _READ_AD_R1PH0

_No arguments._

### _READ_AD_DIAG_ESH_HALL1

Status Analog Input/Output JobHeaderFormat 0x604F _READ_AD_DIAG_ESH_HALL1

_No arguments._

### _READ_AD_DIAG_ESH_HALL2

Status Analog Input/Output JobHeaderFormat 0x6050 _READ_AD_DIAG_ESH_HALL2

_No arguments._

### _READ_AD_DIAG_SHD_HALL1

Status Analog Input/Output JobHeaderFormat 0x6051 _READ_AD_DIAG_SHD_HALL1

_No arguments._

### _READ_AD_DIAG_SHD_HALL2

Status Analog Input/Output JobHeaderFormat 0x6052 _READ_AD_DIAG_SHD_HALL2

_No arguments._

### _READ_VALEO_ENABLE

Read Valeo Enable JobHeaderFormat 0x6100 _READ_VALEO_ENABLE

_No arguments._

### STATUS_DWA_ALARMSPEICHER_FZD

Auslesen des Alarmspeichers der Diebstahlwarnlage JobHeaderFormat 0xDCB3 STATUS_DWA_ALARMSPEICHER_FZD

_No arguments._

### STATUS_DWA_DEAKTIVIERUNG_IRS_NG

Auslesen der Deaktivierungsspeicher-Einträge für IRS und NG JobHeaderFormat 0xDCB4 STATUS_DWA_DEAKTIVIERUNG_IRS_NG

_No arguments._

### STATUS_DWA_PANIKSPEICHER

Auslesen der Panikspeicher-Einträge der Diebstahlwarnlage JobHeaderFormat 0xDD15 STATUS_DWA_PANIKSPEICHER

_No arguments._

### _USIS_CMD_ALARMCOUNTER_RESET

USIS Alarm Counter Reset JobHeaderFormat 0x4501 _USIS_CMD_ALARMCOUNTER_RESET

| Name | Type | Description |
| --- | --- | --- |
| COUNTER | unsigned char | Couter A/B Reset 0x1 = reset Counter A (Bit 0) 0x2 = reset Counter B (Bit 1) 0x4 = reset Counter A+B (Bit 2) |

### _USIS_ECHODOPPLERCOUNTER_RESET

Delete USIS Counters JobHeaderFormat 0x4504 _USIS_ECHODOPPLERCOUNTER_RESET

| Name | Type | Description |
| --- | --- | --- |
| COUNTER | unsigned char | Couter A/B Reset 0x1 = reset USIS Echo Counter (Bit 0) 0x2 = reset USIS Doppler Counter (Bit 1) 0x4 = reset Doopler History (Bit 2) |

### _USIS_ENVIRONMENT_SET

USIS Environment set JobHeaderFormat 0x4505 _USIS_ENVIRONMENT_SET

| Name | Type | Description |
| --- | --- | --- |
| SENSITIVITY | unsigned char | USIS Sensitivity Value 0 = Unmodified/read from CAN Value 1 = Normal Value 2 = Open window Value 3 = Heater active Value 4 = Sunroof open |
| TEMPERATURE_BAND | unsigned char | Value 0 = Very low Value 1 = Low Value 2 = Normal Value 3 = High Value 4 = Very High Value 255 = Unmodified/read from CAN |

### _USIS_ADAPTATION_SET

USIS Adaptation set JobHeaderFormat 0x4506 _USIS_ADAPTATION_SET

| Name | Type | Description |
| --- | --- | --- |
| CHANNEL_A | unsigned char | Adaption Channel A |
| CHANNEL_B | unsigned char | Adaption Channel B |

### _USIS_NVM_WRITE

write USIS NVM Block JobHeaderFormat 0x4507 _USIS_NVMPARAMETERS_WRITE

| Name | Type | Description |
| --- | --- | --- |
| DATA | binary | Data 128 Bytes |

### _USIS_NVM_DEBUG_WRITE

Write USIS NVM for debug JobHeaderFormat 0x4509 _USIS_NVM_DEBUG_WRITE

| Name | Type | Description |
| --- | --- | --- |
| COMMAND | unsigned char | Deactivate/Activate 0x0 = deactivate 0x1 = activate |

### _WRITE_DIO

Steuern Digital Input/Output JobHeaderFormat 0x6000 _WRITE_DIO

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER | unsigned char | Port 0x00: reset 0x01: CMD_SHD_M1 0x02: CMD_SHD_M2 0x03: CMD_ESH_M1 0x04: CMD_ESH_M2 0x05: CMD_SLIDER 0x06: SHD_HALL_SUP 0x07: SBC_HS_DWA_LED 0x08: SBC_HS_SLIDER_BACKLIGHT_LED 0x09: CMD_DWA_LED 0x0A: CMD_OPEN_LOAD_DIAG_DWA_LED 0x0B: CMD_30_F39_VBF 0x0C: CMD_30_F108_VBF 0x0D: CMD_TXECO1 0x0E: CMD_TXECO2 0x0F: CMD_G1A 0x10: CMD_G1B 0x11: CMD_G1C 0x12: CMD_G2A 0x13: CMD_G2B 0x14: CMD_G2C 0x15: CMD_GDOP 0x16: CMD_RXENA 0x17: CMD_OPHFSUP 0x18: CMD_OPLFSUP 0x19: USIS_PWR_SEL 0x1A: ALARM_DEBUG 0x1B: CMD_LED_TEMP 0x1C: CMD_NTC 0x1D: CMD_SENSOR_TEMP 0x1E: CMD_POWER_EN2 0x1F: CMD_MCU_REQ 0x20: CMD_WK_SBC_GES 0x21: VCC2_SBC_BODY 0x22: VCC3_SBC_BODY 0x23: VCC2_SBC_I_UND_K 0x24: ESH_HALL_SUP 0xFF: All DIOs table _TAB_PORT_DIO_WRITE TEXT |
| VALUE | unsigned char | Only with subfunction 0x03 ShortThermAdjust Value to set 0x00  output low 0x01  output high |

### _WRITE_SVK_SUPPLIER

Write SVK SUPPLIER JobHeaderFormat 0x6001 _WRITE_SVK_SUPPLIER

| Name | Type | Description |
| --- | --- | --- |
| SVK_VERSION | unsigned char | SVK Version |
| PROG_DEPENDENCY | unsigned char | Programming Dependency |
| FINGERPRINT | binary | Fingerprint 13 Bytes |

### _WRITE_SILDER_LED

Write slider led JobHeaderFormat 0x6005 _WRITE_SILDER_LED

| Name | Type | Description |
| --- | --- | --- |
| SLIDER_LED_BIN_POINTER | unsigned char | Led Bin Pointer which is used 0x00: No bin set (default value) 0x01: BIN L2 is used 0x02: BIN L1 is used 0x03: BIN K2 is used |

### _WRITE_SLIDER_PWM

Write slider PWM JobHeaderFormat 0x6006 _WRITE_SLIDER_PWM

| Name | Type | Description |
| --- | --- | --- |
| SLIDER_PWM_ID | unsigned char | Slider PWM ID: 0x00: SLIDER_PWM_TABLE[0] is modified 0x01: SLIDER_PWM_TABLE[1] is modified 0x02: SLIDER_PWM_TABLE[2] is modified 0x03: SLIDER_PWM_TABLE[3] is modified |
| SLIDER_PWM_VALUE | unsigned char | Slider PWM Value (in 0.5%): 0x00: 0% --- 0xC8: 100% |

### _WRITE_VALEO_TESTBYTE

Write Valeo Test Byte JobHeaderFormat 0x6007 _WRITE_VALEO_TESTBYTE

| Name | Type | Description |
| --- | --- | --- |
| VALEO_TEST_BYTE | unsigned char | Valeo Test Byte |

### _WRITE_PCB_DATA

Steuern PCB JobHeaderFormat 0x6009 _WRITE_PCB_DATA

| Name | Type | Description |
| --- | --- | --- |
| PCBA_NO_REFERENCE | binary | PCBA_NO_reference |
| PCBA_NO_INDEX | unsigned int | PCBA No Index |
| PCBA_PLANT_LINE | unsigned int | PCBA Plant Line |
| PCBA_MANUFACTURING | binary | PCBA Manufacturing |
| PCBA_SERIAL_NUMBER | unsigned long | PCBA_SERIAL_NUMBER |
| PCBA_DEVIATION_NUMBER | unsigned char | Step Counter |
| ENGINEERING_SUBASSY_REFERENCE | binary | ENGINEERING_SUBASSY_REFERENCE |
| SUBASSY_INDEX | unsigned int | SUBASSY_INDEX |
| SUBASSY_PLANTLINE | unsigned int | SUBASSY_PLANTLINE |
| SUBASSY_MANUFACTURING_DATE | binary | SUBASSY_MANUFACTURING_DATE |
| SUBASSY_SERIAL_NUMBER | unsigned int | SUBASSY_SERIAL_NUMBER |
| SUBASSY_DEVIATION_NUMBER | unsigned char | SUBASSY_DEVIATION_NUMBER |

### _WRITE_RUNIN

Write Valeo RunIN JobHeaderFormat 0x600A _WRITE_RUNIN

| Name | Type | Description |
| --- | --- | --- |
| RUNIN | unsigned char | Valeo RunIN Byte: 0x00: No RunIn part 0x01: RunIn part 0x02: RunIn Test passed 0x03: RunIn Test failed |

### _WRITE_ASSEMBLY_DATA

Steuern assembly JobHeaderFormat 0x600B _WRITE_ASSEMBLY_DATA

| Name | Type | Description |
| --- | --- | --- |
| FINAL_PRODUCT_REFERENCE | binary | Product reference |
| FINAL_PRODUCT_INDEX | unsigned int | Product Index |
| VALEO_FINAL_PRODUCT_PLANT | unsigned long | Product plant |
| VALEO_FINAL_PRODUCT_LINE | unsigned char | Product line |
| VALEO_FINAL_PRODUCT_MANUFACTURING_DATE | binary | Product manufacturing date |
| FINAL_PRODUCT_SERIAL_NUMBER | unsigned int | Product Serial Number |
| VALEO_DEVIATION_NUMBER | unsigned char | Deviation number |

### _WRITE_PRODUCTION_DATE

Write Production Date JobHeaderFormat 0x600C _WRITE_PRODUCTION_DATE

| Name | Type | Description |
| --- | --- | --- |
| ECU_PRODUCTION_DATE_YY | unsigned char | Year |
| ECU_PRODUCTION_DATE_MM | unsigned char | Month |
| ECU_PRODUCTION_DATE_DD | unsigned char | Day |

### _WRITE_BMW_TRACEABLITY

write BMW Traceability JobHeaderFormat 0x600E _WRITE_BMW_TRACEABLITY

| Name | Type | Description |
| --- | --- | --- |
| BMW_PARTNUMBER | unsigned long | BMNW Partnumber |
| INDEX | unsigned int | Änderungsindex |

### _WRITE_EMS_TEST_BYTE

Write EMS Test Byte JobHeaderFormat 0x6022 _WRITE_EMS_TEST_BYTE

| Name | Type | Description |
| --- | --- | --- |
| EMS_TEST_BYTE | unsigned char | EMS Test Byte |

### _WRITE_VALEO_ENABLE

Write valeo Enable JobHeaderFormat 0x6100 _WRITE_VALEO_ENABLE

| Name | Type | Description |
| --- | --- | --- |
| VALEO_ENABLE | unsigned char | Valeo Enable |

### STEUERN_DWA_DEAKTIVIERUNG_IRS_NG_LOESCHEN

Löscht den Deaktivierungsspeicher des IRS und NG JobHeaderFormat 0x6016 STEUERN_DWA_DEAKTIVIERUNG_IRS_NG_LOESCHEN

_No arguments._

### STEUERN_DWA_PANIKSPEICHER_LOESCHEN

Löscht den Panikspeicher der Diebstahlwarnanlage JobHeaderFormat 0xAA82 STEUERN_DWA_PANIKSPEICHER_LOESCHEN

_No arguments._

### _WRITE_FIO_STOP

Stop FIO JobHeaderFormat 0xF010 _WRITE_FIO_STOP

_No arguments._

### _WRITE_FIO_START

Write a frequency output JobHeaderFormat 0xF010 _WRITE_FIO_START

| Name | Type | Description |
| --- | --- | --- |
| FOUT_ID | unsigned char | FOUT Port 0x00: K40_TX 0x01: NK40_TX 0x02: K40_RX 0x03: K40_90 table _TAB_FOUT_ID TEXT |
| FREQ_VALUE | unsigned char | Frequency value 2KHz resolution Values : 0 KHz -> 510 KHz |

### _WRITE_FIO_USIS_START

Write a frequency output for USIS (Write all PWM signals K40_TX, NK40_TX, K40_RX, K40_90 as in the MSY application) JobHeaderFormat 0xF011 _WRITE_FIO_USIS_START

_No arguments._

### _WRITE_FIO_USIS_STOP

Stop USIS FIO JobHeaderFormat 0xF011 _WRITE_FIO_USIS_STOP

_No arguments._

### _ERASE_EEP_DATA

erase EEPROM Data JobHeaderFormat 0xF012 _ERASE_EEP_DATA

_No arguments._

### _READ_EEP_DATA

Read EEPROM Erase status JobHeaderFormat 0xF012 _READ_EEP_DATA

_No arguments._

### _UART_PINS_TEST_START

Start UART Pins Test JobHeaderFormat 0xF013 _UART_PINS_TEST

| Name | Type | Description |
| --- | --- | --- |
| SOC_UART_TX_LEVEL | unsigned char | TX Level 0x00 : low 0x01 : high |
| SOC_UART_RX_LEVEL | unsigned char | RX Level 0x00 : low 0x01 : high |

### _UART_PINS_TEST_RESULTS

Read UART Pins Test Result JobHeaderFormat 0xF013 _UART_PINS_TEST

_No arguments._

### _UART_PINS_TEST_STOP

Stop UART Pins Test JobHeaderFormat 0xF013 _UART_PINS_TEST

_No arguments._

### _LOW_POWER_CONSUMPTION_TEST_STOP

Stop Low Power Consuption Test JobHeaderFormat 0xF014 _LOW_POWER_CONSUMPTION_TEST

_No arguments._

### _LOW_POWER_CONSUMPTION_TEST_START

Continous Relay Control Start JobHeaderFormat 0xF014 _LOW_POWER_CONSUMPTION_TEST

_No arguments._

### _BRIEF_SHUTDOWN_ECU

Brief Shutdown ECU JobHeaderFormat 0xF015 _BRIEF_SHUTDOWN_ECU

_No arguments._

### _RXPH0_RXPH90_ACQUISITION_READ

Read RXPH0 & RXPH90 Acquisition JobHeaderFormat 0xF016 _RXPH0_RXPH90_ACQUISITION_READ

_No arguments._

### _RXPH0_RXPH90_ACQUISITION_START

Start RXPH0 & RXPH90 Acquisition JobHeaderFormat 0xF016 _RXPH0_RXPH90_ACQUISITION_START

| Name | Type | Description |
| --- | --- | --- |
| NUMBER_OF_SAMPLES | unsigned char | Number of samples |
| CHANNEL_SELECTON | unsigned char | Channel selection 0x01  R1 0x02  R2 table _TAB_DEVELOP_CHANNEL_SELECTON |

### _RESET_CPU_LOAD

reset CPU Load JobHeaderFormat 0xF018 _RESET_CPU_LOAD

_No arguments._

### _RESET_RESET_COUNTER

reset Reset Counter JobHeaderFormat 0xF019 _RESET_RESET_COUNTER

_No arguments._

### _RESET_TOTAL_ROOF_INT

reset Roof Interrupt JobHeaderFormat 0xF01A _RESET_TOTAL_ROOF_INT

_No arguments._

### _SLIDER_STATE_MONITORING_START

start Slider State Monitoring JobHeaderFormat 0xF01B _SLIDER_STATE_MONITORING_START

_No arguments._

### _SLIDER_STATE_MONITORING_RESULTS

Monitors the slider and push state. Store the state transition and timing since beginning of routine JobHeaderFormat 0xF01B _SLIDER_STATE_MONITORING_RESULTS

_No arguments._

### _SLIDER_STATE_MONITORING_STOP

Monitors the slider and push state. Store the state transition and timing since beginning of routine JobHeaderFormat 0xF01B _SLIDER_STATE_MONITORING_STOP

_No arguments._

### _CONTINOUS_RELAY_CONTROL_START

Continous Relay Control Start JobHeaderFormat 0xF01C _CONTINOUS_RELAY_CONTROL

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | unsigned char | Element 0xA1 : SHD 0xA2 : ESH 0xB0 : SHD+ESH |
| ACTION | unsigned char | Action 0x00: Relay to Battery Voltage 0x01: Relay To Ground |
| RELAY | unsigned char | Relay 0x00: Relay 1 0x01: Relay 2 |

### _CONTINOUS_RELAY_CONTROL_RESULTS

Result of Continous Relay Control JobHeaderFormat 0xF01C _CONTINOUS_RELAY_CONTROL_RESULTS

_No arguments._

### _CONTINOUS_RELAY_CONTROL_STOP

Stop Continous Relay JobHeaderFormat 0xF01C _UART_PINS_TEST

_No arguments._

### _USIS_FUNCTIONALLOGGER_START

USIS Start functional logger JobHeaderFormat 0xF500 _USIS_FUNCTIONALLOGGER_START

| Name | Type | Description |
| --- | --- | --- |
| SENSITIVITY | unsigned char | USIS Sensitivity Value 0 = Unmodified/read from CAN Value 1 = Normal Value 2 = Open window Value 3 = Heater active Value 4 = Sunroof open |
| TEMPERATURE_BAND | unsigned char | Value 0 = Very low Value 1 = Low Value 2 = Normal Value 3 = High Value 4 = Very High Value 255 = Unmodified/read from CAN |

### _USIS_FUNCTIONALLOGGER_STOP

USIS Stop functional logger JobHeaderFormat 0xF500 _USIS_FUNCTIONALLOGGER

_No arguments._

### _USIS_CMD_SELFTEST_TRIGGER

perfrom USIS Selftest JobHeaderFormat 0xF501 _USIS_CMD_SELFTEST_TRIGGER

_No arguments._

### _USIS_SELFTEST_READ

Status Analog Input/Output JobHeaderFormat 0xF501 _USIS_SELFTEST_READ

_No arguments._

### _USIS_ALARMMEMORY_RESET

Delete USIS Alarm Memory JobHeaderFormat 0xF502 _USIS_ALARMMEMORY_RESET

_No arguments._

### _USIS_DTC_MEMORY_RESET

Delete USIS DTCs JobHeaderFormat 0xF503 _USIS_DTC_MEMORY_RESET

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
| 0x000001 | Reinshagen / Delphi |
| 0x000002 | Leopold Kostal GmbH & Co. KG |
| 0x000003 | Hella Fahrzeugkomponenten GmbH |
| 0x000004 | Siemens |
| 0x000005 | Eaton |
| 0x000006 | UTA |
| 0x000007 | Helbako GmbH |
| 0x000008 | Robert Bosch GmbH |
| 0x000009 | Lear Corporation |
| 0x000010 | VDO |
| 0x000011 | Valeo GmbH |
| 0x000012 | MBB |
| 0x000013 | Kammerer |
| 0x000014 | SWF |
| 0x000015 | Blaupunkt |
| 0x000016 | Philips |
| 0x000017 | Alpine Electronics GmbH |
| 0x000018 | Continental Teves AG & Co. OHG |
| 0x000019 | Elektromatik Südafrika |
| 0x000020 | Harman Becker Automotive Systems |
| 0x000021 | Preh GmbH |
| 0x000022 | Alps Electric Co. Ltd. |
| 0x000023 | Motorola |
| 0x000024 | Temic |
| 0x000025 | Webasto SE |
| 0x000026 | MotoMeter |
| 0x000027 | Delphi Automotive PLC |
| 0x000028 | DODUCO (Beru) |
| 0x000029 | DENSO |
| 0x000030 | NEC |
| 0x000031 | DASA |
| 0x000032 | Pioneer Corporation |
| 0x000033 | Jatco |
| 0x000034 | FUBA Automotive GmbH & Co. KG |
| 0x000035 | UK-NSI |
| 0x000036 | AABG |
| 0x000037 | Dunlop |
| 0x000038 | Sachs |
| 0x000039 | ITT |
| 0x000040 | FTE (Fahrzeugtechnik Ebern) |
| 0x000041 | Megamos |
| 0x000042 | TRW Automotive GmbH |
| 0x000043 | WABCO Fahrzeugsysteme GmbH |
| 0x000044 | ISAD Electronic Systems |
| 0x000045 | HEC Hella Electronics Corporation |
| 0x000046 | Gemel |
| 0x000047 | ZF Friedrichshafen AG |
| 0x000048 | GMPT |
| 0x000049 | Harman Becker Automotive Systems GmbH |
| 0x000050 | Remes GmbH |
| 0x000051 | ZF Lenksysteme GmbH |
| 0x000052 | Magneti Marelli S.p.A. |
| 0x000053 | Johnson Controls Inc. |
| 0x000054 | GETRAG Getriebe- und Zahnradf. Hermann Hagenmeyer GmbH & Co. KG |
| 0x000055 | Behr-Hella Thermocontrol GmbH |
| 0x000056 | Siemens VDO Automotive |
| 0x000057 | Visteon Innovation & Technology GmbH |
| 0x000058 | Autoliv AB |
| 0x000059 | Haberl Electronic GmbH & Co. KG |
| 0x000060 | Magna International Inc. |
| 0x000061 | Marquardt GmbH |
| 0x000062 | AB Elektronik GmbH |
| 0x000063 | SDVO/BORG |
| 0x000064 | Hirschmann Car Communication GmbH |
| 0x000065 | hoerbiger-electronics |
| 0x000066 | Thyssen Krupp Automotive |
| 0x000067 | Gentex Corporation |
| 0x000068 | Atena GmbH |
| 0x000069 | Magna-Donelly |
| 0x000070 | Koyo Steeting Europe |
| 0x000071 | NSI Beheer B.V. |
| 0x000072 | Aisin AW Co. Ltd. |
| 0x000073 | Schorlock |
| 0x000074 | Schrader Electronics Ltd. |
| 0x000075 | Huf-Electronics Bretten GmbH |
| 0x000076 | CEL |
| 0x000077 | AUDIO MOBIL Elektronik GmbH |
| 0x000078 | rd electronic |
| 0x000079 | iSYS RTS GmbH |
| 0x000080 | Westfalia-Automotive GmbH |
| 0x000081 | Tyco Electronics |
| 0x000082 | Paragon AG |
| 0x000083 | IEE S.A. |
| 0x000084 | TEMIC AUTOMOTIVE of NA |
| 0x000085 | Sonceboz S.A. |
| 0x000086 | Meta System S.p.A. |
| 0x000087 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x000088 | MANN+HUMMEL GmbH |
| 0x000089 | Brose Fahrzeugteile GmbH & Co. |
| 0x000090 | Keihin |
| 0x000091 | Vimercati S.p.a |
| 0x000092 | CRH |
| 0x000093 | TPO Display Corp |
| 0x000094 | Küster Automotive GmbH |
| 0x000095 | Hitachi Automotive |
| 0x000096 | Continental AG |
| 0x000097 | TI-Automotive |
| 0x000098 | Hydro |
| 0x000099 | Johnson Controls Inc. |
| 0x00009A | Takata-Petri |
| 0x00009B | Mitsubishi Electric B.V. (Melco) |
| 0x00009C | Autokabel |
| 0x00009D | GKN Plc |
| 0x00009E | Zollner Elektronik AG |
| 0x00009F | peiker acustic GmbH & Co. KG |
| 0x0000A0 | Bosal-Oris |
| 0x0000A1 | Cobasys |
| 0x0000A2 | Automotive Lighting Reutlingen GmbH |
| 0x0000A3 | CONTI VDO |
| 0x0000A4 | A.D.C. Automotive Distance Control Systems GmbH |
| 0x0000A5 | Novero Dabendorf GmbH |
| 0x0000A6 | LAMES S.p.a. |
| 0x0000A7 | Magna/Closures |
| 0x0000A8 | Harbin Wan Yu Technology Co |
| 0x0000A9 | ThyssenKrupp Presta AG |
| 0x0000AA | ArvinMeritor |
| 0x0000AB | Kongsberg Automotive GmbH |
| 0x0000AC | SMR Automotive Mirrors Stuttgart GmbH |
| 0x0000AD | So.Ge.Mi. |
| 0x0000AE | MTA S.p.A. |
| 0x0000AF | Alfmeier Präzision AG |
| 0x0000B0 | Eltek Deutechland GmbH |
| 0x0000B1 | OMRON Automotive Electronics Europe GmbH |
| 0x0000B2 | ASK Industries GmbH |
| 0x0000B3 | CML Innovative Technologies GmbH & Co. KG |
| 0x0000B4 | APAG Elektronik AG |
| 0x0000B5 | Nexteer Automotive |
| 0x0000B6 | Hans Widmaier Fernmelde- und Feinwerktechnik |
| 0x0000B7 | Robert Bosch Battery Systems GmbH |
| 0x0000B8 | Kyocera Display Europe GmbH |
| 0x0000B9 | Magna Powertrain AG & Co. KG |
| 0x0000BA | BorgWarner Beru Systems GmbH |
| 0x0000BB | BMW AG |
| 0x0000BC | Benteler Duncan Plant |
| 0x0000BD | U-Shin Deutschland Zugangssysteme GmbH |
| 0x0000BE | Schaeffler Technologies AG & Co. KG |
| 0x0000BF | JTEKT Corporation |
| 0x0000C0 | VLF |
| 0x0000C1 | Flextronics |
| 0x0000C2 | LG Chem |
| 0x0000C3 | Panasonic |
| 0x0000C4 | Alpitronic GmbH |
| 0x0000C5 | Telemotive AG |
| 0x0000C6 | Garmin |
| 0x0000C7 | RSG Elotech Elektronische Baugruppen GmbH |
| 0x0000C8 | KEBODA TECHNOLOGY CORP |
| 0x0000C9 | Aptiv |
| 0x0000CA | SEG Automotive Germany GmbH |
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
| 0x1750 | PWF_Basinetz | 0-n | - | 0xFF | - | 1 | 1 | 0.000000 |
| 0x1751 | PWF_Teilnetz | 0-n | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1768 | KM_STAND_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0x1769 | ABS_ZEIT_SUP | 0-n | - | 0xFFFFFFFF | - | 1 | 1 | 0.000000 |
| 0xFFFF | IDENTIFIER_UNKNOWN | - | - | 0xFFFFFF | - | 1 | 1 | 0.000000 |

### TAB_ZEIT_SYNCMETHOD

| WERT | TEXT |
| --- | --- |
| 0x00 | Combi-Time |
| 0x01 | DMCS |
| 0x02 | IEEE802.1AS |
| 0x03 | invalid |

### TAB_ZEIT_USER_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | out of sync, no time available |
| 0x01 | insync, ms ECU overall, not comparable |
| 0x02 | ms ECU overall, not comparable |
| 0x03 | ms ECU overall, comparable |
| 0x04 | ms ECU overall, not comparable |
| 0x05 | ms ECU overall, comparable |
| 0x06 | invalid |
| 0x07 | invalid |

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
| 0x44 | ECURSU | ECURsuSession |
| 0x4F | ECUDEVELOP | ECUDevelopmentSession |
| 0x5F | ECUGDM | ECUGarageDiagnoseMode |
| 0x61 | ECUSUPSPEC | ECUSupplierSpecificSession |
| 0xXY | -- | unbekannter Diagnose-Mode |

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x03A0 | Druck- Temperatursensor Tank | 1 |
| 0x03C0 | EAC-Sensor | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2210 | Aussenspiegel Fahrer | 1 |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2310 | Aussenspiegel Beifahrer | 1 |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x2D00 | Smart Opener | 1 |
| 0x2E00 | LED-Hauptlicht-Modul links | 1 |
| 0x2F00 | LED-Hauptlicht-Modul rechts | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B30 | Elektrische Wasserpumpe 22 | 1 |
| 0x3B40 | Elektrische Wasserpumpe 23 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3D10 | Aktiver Kühlluftklappensteller oberer Kühllufteinlass | 1 |
| 0x3D20 | Aktiver Kühlluftklappensteller unterer Kühllufteinlass | 1 |
| 0x3D80 | Lüfter | 1 |
| 0x3D88 | Lüfter 2 | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3E80 | DCDC Versorgung Zustartbatterie | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4600 | Nackenwärmer | 1 |
| 0x4610 | Nackenwärmer Fahrer | 1 |
| 0x4620 | Nackenwärmer Beifahrer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4C10 | Klimabedieneinheit | 1 |
| 0x4C20 | Klimabedieneinheit Ext | 1 |
| 0x4C80 | Klimabedienteil 3. Sitzreihe | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6180 | LIN-Zusatzwasserpumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
| 0x6700 | Hochdruck- Temperatursensor 1 | 1 |
| 0x6710 | Niederdruck- Temperatursensor 1 | 1 |
| 0x6720 | Elektrisches Expansionsventil | 1 |
| 0x6730 | Kältekreislauf Dreiwegeventil 1 | 1 |
| 0x6740 | Unbelüfteter Innenraumtemperaturfühler 1 | 1 |
| 0x6750 | Waschventilblock | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x570C | Satellit Upfront mitte | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor vorne links | 0 |
| 0x5770 | Fussgängerschutz Sensor vorne rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor vorne mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5782 | Fussgängerschutz Zusatzsensor Beschleunigung links | 0 |
| 0x5784 | Fussgängerschutz Zusatzsensor Beschleunigung rechts | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x57C0 | Satellit Drucksensor Schlauch PTS 1 vorne links p | 0 |
| 0x57C4 | Satellit Drucksensor Schlauch PTS 1 vorne rechts p | 0 |
| 0x57C8 | Satellit Drucksensor Schlauch PTS 2 vorne links p | 0 |
| 0x57CC | Satellit Drucksensor Schlauch PTS 2 vorne rechts p | 0 |
| 0x57D0 | Beschleunigungssensor vorne links X | 0 |
| 0x57D4 | Beschleunigungssensor vorne mitte X | 0 |
| 0x57D8 | Beschleunigungssensor vorne rechts X | 0 |
| 0x57DC | Beschleunigungssensor hinten mitte X | 0 |
| 0x57E0 | Sitzbelegungserkennung Beifahrer CIS/Bladder | 1 |
| 0x57E4 | Sitzbelegungserkennung 2. Sitzreihe links CIS/Bladder | 1 |
| 0x57E8 | Sitzbelegungserkennung 2. Sitzreihe rechts CIS/Bladder | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A01 | Innenbeleuchtung - Lichtschwert links | 1 |
| 0x5A02 | Innenbeleuchtung - Lichtschwert rechts | 1 |
| 0x5A03 | Innenbeleuchtung - Lautsprecher Hutablage rechts | 1 |
| 0x5A04 | Innenbeleuchtung - Lautsprecher Hutablage links | 1 |
| 0x5A05 | Innenbeleuchtung - Lautsprecher hinten links | 1 |
| 0x5A06 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne links | 1 |
| 0x5A07 | Innenbeleuchtung - Lautsprecher Hochtöner vorne links | 1 |
| 0x5A08 | Innenbeleuchtung - Lautsprecher hinten rechts | 1 |
| 0x5A09 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne rechts | 1 |
| 0x5A0A | Innenbeleuchtung - Lautsprecher Hochtöner vorne rechts | 1 |
| 0x5A0B | Innenbeleuchtung - Lautsprecher Centerspeaker | 1 |
| 0x5A0C | Innenbeleuchtung - Panoramadach LED Modul 1 (hinteres Glasfestelement) | 1 |
| 0x5A0D | Innenbeleuchtung - Panoramadach LED Modul 2 (hinteres Glasfestelement) | 1 |
| 0x5A0E | Innenbeleuchtung - Panoramadach LED Modul 3 (hinteres Glasfestelement) | 1 |
| 0x5A0F | Innenbeleuchtung - Panoramadach LED Modul 4 (hinteres Glasfestelement) | 1 |
| 0x5A10 | Innenbeleuchtung - Panoramadach LED Modul 5 (vorderes Glasschiebedach) | 1 |
| 0x5A11 | Innenbeleuchtung - Panoramadach LED Modul 6 (vorderes Glasschiebedach) | 1 |
| 0x5A12 | Innenbeleuchtung - Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A13 | Innenbeleuchtung - Panoramadach LED Modul 8 (vorderes Glasschiebedach) | 1 |
| 0x5A14 | Touch Command Snap-In Adapter - Mittelkonsole Fond | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5A40 | Innenlichteinheit 4 | 1 |
| 0x5A50 | Innenlichteinheit 5 | 1 |
| 0x5AFF | unbekannter Verbauort | - |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5B60 | Fondcontroller | 1 |
| 0x5B50 | AR (augmented reality) Kamera | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5C10 | Wasserstand Sensor 1 | 1 |
| 0x5C18 | Wasserstand Sensor 2 | 1 |
| 0x5C20 | Diebstahlschutz Client für Airbag | 1 |
| 0x5C28 | Diebstahlschutz Client für Lenkrad | 1 |
| 0x5C30 | zentrale Lenkrad Elektronik | 1 |
| 0x5C40 | Funkempfänger vorne links | 1 |
| 0x5C44 | Funkempfänger vorne rechts | 1 |
| 0x5C48 | Funkempfänger hinten links | 1 |
| 0x5C4C | Funkempfänger hinten rechts | 1 |
| 0x5C50 | Türgriffelektronik Fahrer | 1 |
| 0x5C54 | Türgriffelektronik Beifahrer | 1 |
| 0x5C58 | Türgriffelektronik Fahrer hinten | 1 |
| 0x5C5C | Türgriffelektronik Beifahrer hinten | 1 |
| 0x5C60 | Sitzheizung Fahrer dritte Sitzreihe | 1 |
| 0x5C68 | Sitzheizung Beifahrer dritte Sitzreihe | 1 |
| 0x5C70 | Armauflagenheizung mitte hinten | 1 |
| 0x5C78 | Armauflagenheizung + Infrarotheizung Mittelkonsole vorne | 1 |
| 0x5C80 | Infrarotheizung Fahrer | 1 |
| 0x5C84 | Infrarotheizung Beifahrer | 1 |
| 0x5C88 | Infrarotheizung vorne | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Konturlinie Fahrertür vorne | 1 |
| 0x5E06 | Innenbeleuchtung Dekor indirekt Fahrertür vorne | 1 |
| 0x5E07 | Innenbeleuchtung Türöffner Fahrertür vorne | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Konturlinie Fahrertür hinten | 1 |
| 0x5E0A | Innenbeleuchtung Dekor indirekt Fahrertür hinten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Konturlinie Beifahrertür vorne | 1 |
| 0x5E0D | Innenbeleuchtung Dekor indirekt Beifahrertür vorne | 1 |
| 0x5E0E | Innenbeleuchtung Türöffner Beifahrertür vorne | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Konturlinie Beifahrertür hinten | 1 |
| 0x5E11 | Innenbeleuchtung Dekor indirekt Beifahrertür hinten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung Konturlinie I-Tafel Fahrer | 1 |
| 0x5E14 | Innenbeleuchtung Dekor indirekt I-Tafel Fahrer | 1 |
| 0x5E15 | Innenbeleuchtung Konturlinie I-Tafel Mitte | 1 |
| 0x5E16 | Innenbeleuchtung Dekor indirekt I-Tafel Mitte | 1 |
| 0x5E17 | Innenbeleuchtung Konturlinie I-Tafel Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung Dekor indirekt I-Tafel Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack Ablagefach | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E21 | Innenbeleuchtung Türöffner Fahrertür hinten | 1 |
| 0x5E22 | Innenbeleuchtung Türöffner Beifahrertür hinten | 1 |
| 0x5E23 | Innenbeleuchtung Fußraum Fahrer 3SR | 1 |
| 0x5E24 | Innenbeleuchtung Fußraum Beifahrer 3SR | 1 |
| 0x5E25 | Innenbeleuchtung Kartentasche Fahrertür 3SR | 1 |
| 0x5E26 | Innenbeleuchtung Kartentasche Beifahrertür 3SR | 1 |
| 0x5E27 | Innenbeleuchtung Konturlinie Fahrertür 3SR | 1 |
| 0x5E28 | Innenbeleuchtung Konturlinie Beifahrertür 3SR | 1 |
| 0x5E29 | Innenbeleuchtung Dekor indirekt Fahrertür 3SR | 1 |
| 0x5E2A | Innenbeleuchtung Dekor indirekt Beifahrertür 3SR | 1 |
| 0x5E2B | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer vorne | 1 |
| 0x5E2C | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer hinten | 1 |
| 0x5E2D | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer vorne | 1 |
| 0x5E2E | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer hinten | 1 |
| 0x5E2F | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer vorne | 1 |
| 0x5E30 | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer hinten | 1 |
| 0x5E31 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer vorne | 1 |
| 0x5E32 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer hinten | 1 |
| 0x5E33 | Innenbeleuchtung Backpanel Fahrersitz 2SR | 1 |
| 0x5E34 | Innenbeleuchtung Backpanel Beifahrersitz 2SR | 1 |
| 0x5E35 | Innenbeleuchtung Panoramadach Glasdeckel Front links vorne | 1 |
| 0x5E36 | Innenbeleuchtung Panoramadach Glasdeckel Front links hinten | 1 |
| 0x5E37 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts vorne | 1 |
| 0x5E38 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts hinten | 1 |
| 0x5E39 | Innenbeleuchtung Panoramadach Glasdeckel Fond links vorne | 1 |
| 0x5E3A | Innenbeleuchtung Panoramadach Glasdeckel Fond links hinten | 1 |
| 0x5E3B | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts vorne | 1 |
| 0x5E3C | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts hinten | 1 |
| 0x5E3D | Innenbeleuchtung Lichtschwert links | 1 |
| 0x5E3E | Innenbeleuchtung Lichtschwert rechts | 1 |
| 0x5E3F | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne vorne | 1 |
| 0x5E40 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne hinten | 1 |
| 0x5E41 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten vorne | 1 |
| 0x5E42 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten hinten | 1 |
| 0x5E43 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne vorne | 1 |
| 0x5E44 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne hinten | 1 |
| 0x5E45 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten vorne | 1 |
| 0x5E46 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten hinten | 1 |
| 0x5E47 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer vorne | 1 |
| 0x5E48 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer hinten | 1 |
| 0x5E49 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer vorne | 1 |
| 0x5E4A | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer hinten | 1 |
| 0x5E4B | Innenbeleuchtung Cupholder vorne | 1 |
| 0x5E4C | Innenbeleuchtung Cupholder hinten | 1 |
| 0x5E4D | Innenbeleuchtung Kartentasche Fahrertür hinten 2 | 1 |
| 0x5E4E | Innenbeleuchtung Kartentasche Beifahrertür hinten 2 | 1 |
| 0x5E4F | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer oben | 1 |
| 0x5E50 | Innenbeleuchtung Dekor hinterleuchtet I-Tafel Beifahrer unten | 1 |
| 0x5E51 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne oben | 1 |
| 0x5E52 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne unten | 1 |
| 0x5E53 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten oben | 1 |
| 0x5E54 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten unten | 1 |
| 0x5E55 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne oben | 1 |
| 0x5E56 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne unten | 1 |
| 0x5E57 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten oben | 1 |
| 0x5E58 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten unten | 1 |
| 0x5E59 | Innenbeleuchtung Hochtöner Fahrertür vorne | 1 |
| 0x5E5A | Innenbeleuchtung Hochtöner Beifahrertür vorne | 1 |
| 0x5E5B | Innenbeleuchtung Mitteltöner Fahrertür vorne | 1 |
| 0x5E5C | Innenbeleuchtung Mitteltöner Beifahrertür vorne | 1 |
| 0x5E5D | Innenbeleuchtung Mitteltöner Fahrertür hinten | 1 |
| 0x5E5E | Innenbeleuchtung Mitteltöner Beifahrertür hinten | 1 |
| 0x5E5F | Innenbeleuchtung Centerspeaker | 1 |
| 0x5E60 | Innenbeleuchtung Fireplace Mittelkonsole vorne | 1 |
| 0x5E61 | Innenbeleuchtung Fireplace Mittelkonsole hinten | 1 |
| 0x5E62 | Innenbeleuchtung Konturlinie Fahrertür vorne hinten | 1 |
| 0x5E63 | Innenbeleuchtung Konturlinie Fahrertür hinten hinten | 1 |
| 0x5E64 | Innenbeleuchtung Konturlinie Beifahrertür vorne hinten | 1 |
| 0x5E65 | Innenbeleuchtung Konturlinie Beifahrertür hinten hinten | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5E90 | Stromverteiler vorne | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5EC0 | Thermocupholder | 1 |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
| 0x5FC0 | ABW-Türschloss Fahrer | 1 |
| 0x5FD0 | ABW-Türschloss Beifahrer | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7108 | NFC Leser Türgriff Fahrer | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
| 0x7300 | Tanksensor links | 1 |
| 0x7310 | Tanksensor rechts | 1 |
| 0x7400 | Cargo Steuergeraet | 1 |
| 0x7500 | CID-Klappe | 1 |
| 0x7600 | Handschuhkasten | 1 |
| 0x7620 | Sternenhimmel Steuergerät | 1 |
| 0x7640 | Partition Wall Steuergerät | 1 |
| 0x7680 | Durchreiche Partition Wall | 1 |
| 0x76A0 | Bedienelement Dach | 1 |
| 0x7700 | Booster | 1 |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
| 0x7A00 | Beschleunigungssensor vorne links | 1 |
| 0x7A08 | Beschleunigungssensor vorne rechts | 1 |
| 0x7A10 | Beschleunigungssensor hinten links | 1 |
| 0x7A18 | Beschleunigungssensor hinten rechts | 1 |
| 0x7A20 | Abdeckrollo-Steuergerät | 1 |
| 0x7A28 | Schalterblock Gepäckraum | 1 |
| 0x7A30 | Unteres Heckklappenschloss links | 1 |
| 0x7A38 | Unteres Heckklappenschloss rechts | 1 |
| 0x7A40 | Elektrische Getriebeoelpumpe | 1 |
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
| 0x7C00 | elektrischer Durchlaufheizer Hochvoltspeicher | 1 |
| 0x7D01 | Ultraschallsensor vorne Seite links | 1 |
| 0x7D02 | Ultraschallsensor vorne Aussen links | 1 |
| 0x7D03 | Ultraschallsensor vorne Mitte links | 1 |
| 0x7D04 | Ultraschallsensor vorne Mitte rechts | 1 |
| 0x7D05 | Ultraschallsensor vorne Aussen rechts | 1 |
| 0x7D06 | Ultraschallsensor vorne Seite rechts | 1 |
| 0x7D07 | Ultraschallsensor hinten Seite rechts | 1 |
| 0x7D08 | Ultraschallsensor hinten Aussen rechts | 1 |
| 0x7D09 | Ultraschallsensor hinten Mitte rechts | 1 |
| 0x7D0A | Ultraschallsensor hinten Mitte links | 1 |
| 0x7D0B | Ultraschallsensor hinten Aussen links | 1 |
| 0x7D0C | Ultraschallsensor hinten Seite links | 1 |
| 0xF000 | Motorrad Tachometer | 1 |
| 0xF010 | Motorrad Drehzahlmesser | 1 |
| 0xF020 | Motorrad Leistungsanzeige | 1 |
| 0xF030 | Motorrad Tankanzeige | 1 |
| 0xF040 | Motorrad 5Wege-Kombischalter links | 1 |
| 0xF050 | Motorrad Kombischalter rechts | 1 |
| 0xF060 | Motorrad Favoritentasterblock | 1 |
| 0xF070 | Motorrad Scheinwerfer | 1 |
| 0xF080 | Motorrad Radiobedienteil | 1 |
| 0xF090 | Motorrad Kombischalter links | 1 |
| 0xFFFF | unbekannter Verbauort | - |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

### LIEFERANTENLIN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x0001 | Audi |
| 0x0002 | BMW |
| 0x0003 | Daimler AG |
| 0x0004 | Motorola |
| 0x0005 | VCT/Mentor Graphics |
| 0x0006 | VW (VW-Group) |
| 0x0007 | Volvo Cars |
| 0x0008 | Ford Motor Company |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH (formerly Mitsubishi) |
| 0x0017 | Atmel Germany GmbH |
| 0x0018 | Magneti Marelli S.p. A |
| 0x0019 | NEC Electronics GmbH |
| 0x001A | Fujitsu Microelectronics Europe GmbH |
| 0x001B | Adam Opel AG |
| 0x001C | Infineon Technologies AG |
| 0x001D | AMI Semiconductor Belguim BVBA |
| 0x001E | Vector Informatik GmbH |
| 0x001F | Brose Fahrzeugteile GmbH & Co |
| 0x0020 | Zentrum Mikroelektronik Dresden AG |
| 0x0021 | ihr GmbH |
| 0x0022 | Visteon Deutschland GmbH |
| 0x0023 | Elmos Semiconductor AG |
| 0x0024 | ON Semiconductor Germany GmbH |
| 0x0025 | Denso Corporation |
| 0x0026 | C&S Group GmbH |
| 0x0027 | Renault SA |
| 0x0028 | Renesas Technology Europe Ltd (formerly Hitachi) |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroen |
| 0x002E | Forschungs - und Transferzentrum e.V. der Westsächsische Hochschule Zwickau |
| 0x002F | Micron Electronic Devices AG |
| 0x0030 | Delphi Deutschland GmbH |
| 0x0031 | Texas Instruments Deutschland GmbH |
| 0x0032 | Maxim Integrated Products |
| 0x0033 | Bertrandt GmbH |
| 0x0034 | PKC Group Oyi |
| 0x0035 | BayTech IKs |
| 0x0036 | Hella KGaA & Co. |
| 0x0037 | Continental Automotive |
| 0x0038 | Johnson Controls GmbH |
| 0x0039 | Toshiba Electronics Europe GmbH |
| 0x003A | Analog Devices |
| 0x003B | TRW Automotive Electronics & Components GmbH & Co. KG |
| 0x003C | Advanced Data Controls, Corp. |
| 0x003D | GÖPEL electronic GmbH |
| 0x003E | Dr. Ing. h.c. F. Porsche AG |
| 0x003F | Marquardt GmbH |
| 0x0040 | ETAS GmbH - Robert Bosch |
| 0x0041 | Micronas GmbH |
| 0x0042 | Preh GmbH |
| 0x0043 | GENTEX CORPORATION |
| 0x0044 | ZF Lenksysteme GmbH |
| 0x0045 | Nagares S.A. |
| 0x0046 | MAN Nutzfahrzeuge AG |
| 0x0047 | BITRON SpA BU Grugliasco |
| 0x0048 | Pierburg GmbH |
| 0x0049 | Alps Electrics Co., Ltd |
| 0x004A | Beru Electronics GmbH |
| 0x004B | Paragon AG |
| 0x004C | Silicon Laboratories |
| 0x004D | Sensata Technologies Holland B.V. |
| 0x004E | Meta System S.p.A |
| 0x004F | DST Dräxlmaier Systemtechnik GmbH |
| 0x0050 | Grupo Antolin Ingenieria, S.A. |
| 0x0051 | MAGNA-Donnelly GmbH&Co.KG |
| 0x0052 | IEE S.A. |
| 0x0053 | austriamicrosystems AG |
| 0x0054 | Agilent Technologies, Inc. |
| 0x0055 | Lear Corporation  |
| 0x0056 | KOSTAL Ireland GmbH |
| 0x0057 | LIPOWSKY Industrie-Elektronik GmbH  |
| 0x0058 | Sanken Electric Co.,Ltd |
| 0x0059 | Elektrobit Automotive GmbH |
| 0x005A | VIMERCATI S.p.A. |
| 0x005B | VOLVO Group Trucks |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC (formerly Arvinmeritor 2011-03-29) |
| 0x0066 | Valeo SA |
| 0x0067 | Defond Holding / BJAutomotive / DAC |
| 0x0068 | Industrie Saleri S. p. A. |
| 0x0069 | ROHM Semicon GmbH |
| 0x0070 | Alfmeier Präzision AG |
| 0x0071 | Sanden Corporation |
| 0x0072 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x0073 | ebm-papst St. Georgen GmbH & Co. KG |
| 0x0074 | CATEM |
| 0x0075 | OMRON Automotive Electronics Technology GmbH |
| 0x0076 | Johnson Electric International |
| 0x0077 | A123 Systems |
| 0x0078 | IPG Automotive GmbH, Karlsruhe |
| 0x0079 | Daesung Electric Co. Ltd. |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
| 0x007B | Bury GmbH & Co. KG |
| 0x007E | Measurement Specialties Inc (MEAS) |
| 0x007F | MRS Electronic GmbH |
| 0x0082 | Dale Electronics Inc |
| 0x0083 | Mirror Controls international |
| 0x0084 | Keboda Technology Co. Ltd. |
| 0x0085 | SPD Control Systems Corporation |
| 0x0087 | Röchling Automotive AG & Co. KG |
| 0x0088 | AEV s.r.o |
| 0x0089 | Kongsberg Automotive AB/Mullsjö Works |
| 0x008A | May & Scofield Ltd |
| 0x008C | C&S Technology Inc |
| 0x008D | RDC Semiconductor Co., Ltd |
| 0x008E | Webasto AG |
| 0x008F | Accel Elektronika UAB |
| 0x0090 | FICOSA International S.A. |
| 0x0091 | Mahle |
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x0099 | Thomson Linear Motion |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x009C | Methode Electronics, Inc |
| 0x009D | Danlaw, Inc. |
| 0x009E | Federal-Mogul Corporation |
| 0x009F | Fujikoki Corporation |
| 0x00A0 | MENTOR Gmbh & Co. Praezisions-Bauteile KG |
| 0x00A1 | Toyota Industries Corporation |
| 0x00A2 | Strattec Security Corp. |
| 0x00A3 | TE Connectivity |
| 0x00A4 | Westfalia Automotive GmbH |
| 0x00A5 | Woco Industrietechnik GmbH |
| 0x00A6 | Minebea Co., Ltd |
| 0x00A7 | Magna |
| 0x00A8 | Dong IL Technology |
| 0x00A9 | Wilo SE |
| 0x00AA | Remy International, Inc. |
| 0x00AB | ACCUmotive |
| 0x00AC | Carling Technologies |
| 0x00B0 | Hanon Systems Korea |
| 0x00B1 | Eberspächer Controls Esslingen GmbH & Co. KG |
| 0x00B2 | WABCO Development GmbH |
| 0x00B3 | Sensirion AG |
| 0x00B4 | OSHINO Electronics Estonia OÜ |
| 0x00B5 | Fishman Thermo Technologies  LTD |
| 0x00B6 | Novalog Ltd |
| 0x00B7 | Hanon Systems USA |
| 0x00B8 | Leggett & Platt Automotive Group |
| 0x00B9 | Tremec |
| 0x00BA | Check Corporation |
| 0x00BB | Federal-Mogul Corporation |
| 0x00BC | fischer automotive systems |
| 0x00BD | Hi-Lex Europe GmbH |
| 0x00BE | SGX Sensortech |
| 0x00BF | AGM Automotive |
| 0x00C0 | Melecs |
| 0x00C1 | Robertshaw Controls Company |
| 0x00D0 | Dometic |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0101 | Huber Automotive AG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x0103 | TK Holdings Inc., Electronics |
| 0x0104 | Cobra Automotive Technologies S.P.A. |
| 0x0105 | Embed Limited |
| 0x0106 | Kissling Elektrotechnik GmbH |
| 0x0107 | Autoliv B.V. & Co. KG |
| 0x0108 | PST Electronics |
| 0x0109 | BCA Leisure Ltd |
| 0x010A | APAG Elektronik AG |
| 0x010B | RAFI GmbH & Co. KG |
| 0x010C | Sonceboz AutomotiveSA |
| 0x010D | i2s Intelligente Sensorsysteme Dresden GmbH |
| 0x010E | AGM Automotive, Inc. |
| 0x010F | S&T Motiv |
| 0x0111 | UG Systems GmbH & Co. KG |
| 0x0113 | CHANGJIANG AUTOMOBILE ELECTRONIC SYSTEM CO.,LTD |
| 0x0114 | MES S.A. |
| 0x0115 | SL Corporation |
| 0x0116 | Dura Automotive Systems |
| 0x0118 | Delta Electronics, Inc. |
| 0x0119 | Penny and Giles Controls Ltd |
| 0x011A | Curtiss Wright Controls Industrial |
| 0x011B | HKR Seuffer Automotive GmbH & Co. KG |
| 0x011C | DMK U.S.A. Inc |
| 0x0120 | Littelfuse |
| 0x0121 | Hyundai MOBIS |
| 0x0122 | Alpine Electronics of America |
| 0x0123 | Ford Motor Company |
| 0x0124 | Hangzhou Sanhua Research Inst. Co, Ltd. |
| 0x0125 | Delvis |
| 0x0126 | Louko |
| 0x0127 | Etratech |
| 0x0128 | HiRain |
| 0x0129 | elobau GmbH & Co. KG |
| 0x012A | I.G.Bauerhin GmbH |
| 0x012B | HANS WIDMAIER  |
| 0x012C | Gentherm Inc |
| 0x012D | LINAK A/S |
| 0x012E | Casco Products Corporation |
| 0x012F | Bühler Motor GmbH |
| 0x0130 | SphereDesign GmbH |
| 0x0131 | Cooper Standard |
| 0x0132 | KÜSTER Automotive Control Systems GmbH |
| 0x0133 | SEWS-Components Europe B.V. |
| 0x0134 | OLHO tronic GmbH |
| 0x0135 | LG Electronics |
| 0x0136 | Eberspächer Controls GmbH & Co. KG |
| 0x0137 | AISIN Seiki Co., Ltd. |
| 0x0138 | Elektrosil Systeme der Elektronik GmbH |
| 0x0139 | Nidec Corporation |
| 0x013A | ISSI Integrated Silicon Solution Inc |
| 0x013B | Twin Disc, Incorporated |
| 0x013C | SPAL Automotive Srl |
| 0x013D | OTTO Engineering, Inc. |
| 0xFFFF | unbekannter Hersteller |

### IARTTEXTE

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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0X4000_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EMS_SENSOR_INFO_DATA | DATA | high | data[40] | - | - | 1.0 | 1.0 | 0.0 | - | - | All Sensor DATA |

### ARG_0X4001_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EMS_LED_INFO_CIRCUIT_DATA | DATA | high | data[40] | - | - | 1.0 | 1.0 | 0.0 | - | - | All LED Data |

### ARG_0X4002_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MMS_TRACEABILITY_CIRCUIT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Circuit / for Tuam |
| MMS_TRACEABILITY_PRODUCT_ID_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Product ID / for Tuam |
| MMS_TRACEABILITY_MANF_SITE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Manf. Site / for Tuam |
| MMS_TRACEABILITY_DIGIT_COUNTER_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | - | - | Digit Counter /for Tuam |
| MMS_TRACEABILITY_SERIAL_NUMBER_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | - | - | Serial number /for Annemasse |
| MMS_TRACEABILITY_HW_STATUS_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | HW status /for Annemasse |
| MMS_TRACEABILITY_SW_STATUS_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | SW status /for Annemasse |
| MMS_TRACEABILITY_PRODUCTION_YEAR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Production year /for Annemasse |
| MMS_TRACEABILITY_PRODUCTION_DAY_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | - | - | Production day /for Annemasse |
| MMS_TRACEABILITY_DAY_COUNTER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Day counter /for Annemasse |
| MMS_TRACEABILITY_ASSEMBLY_LINE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Assembly line /for Annemasse (optional - only needed if more than one ass. line) |
| MMS_TRACEABILITY_NO_REFERENCE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | Final Product reference |
| MMS_TRACEABILITY_NO_INDEX_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Final Product Index |
| MMS_TRACEABILITY_PLANT_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | - | - | Valeo Final Product Plant |
| MMS_TRACEABILITY_LINE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Valeo Final Product Line |
| MMS_TRACEABILITY_MANUFACTURING_TIME_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | - | - | Valeo Final Product Manufacturing year, month and day |
| MMS_TRACEABILITY_FINAL_SERIAL_NUMBER_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - |  Final Product Serial number |
| MMS_TRACEABILITY_VALEO_TEST_BYTE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Valeo Test byte |
| MMS_TRACEABILITY_VALEO_DEVIATION_NUMBER_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Valeo Deviation Number |
| MMS_TRACEABILITY_CALIBRATION_VALUE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | - | - | Product Calibration value (optional) |
| MMS_TRACEABILITY_SPARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | - | - | Spare |

### ARG_0X4004_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BOOT_PARTITION | 0-n | high | unsigned char | - | TAB_GESTIK_BOOT_PARTITION | - | - | - | - | - | SW BOOT PARTITION |

### ARG_0X4006_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SW_RESET | 0-n | high | unsigned char | - | TAB_SW_RESET | - | - | - | - | - | Reset Type |

### ARG_0X4008_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESTIK_CAMERA_SIMU_FAIL | 0-n | high | unsigned char | - | TAB_GESTIK_FAIL_ID | - | - | - | - | - | Select Failure |

### ARG_0X4009_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESTIK_MB_SIMU_DTC | 0-n | high | unsigned int | - | TAB_GESTIK_DTC_ID | - | - | - | - | - | Select DTC |

### ARG_0X400C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENABLE_GEST_RECO | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Gesture recognition Disabled 0x01: Gesture recognition Enabled |

### ARG_0X400E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_POWER_CAMERA | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00: Power OFF camera  0x01: Power ON camera |

### ARG_0X4013_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODE_GESTIK | 0-n | high | unsigned char | - | TAB_GESTIK_MODE_CAMERA | - | - | - | - | - | change the current mode of the camera  |
| STAT_MODE_MASK_GESTIK | 0-n | high | unsigned long | - | TAB_GESTIK_MODE_MASK | - | - | - | - | - | change the current mode of the camera  |

### ARG_0X401B_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DSHIFT_WERT | DATA | high | data[50] | - | - | 1.0 | 1.0 | 0.0 | - | - | Write FPGA parameter internal |

### ARG_0X401D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUTOKALIBRATION_AUTOCAL_OFFSET | mm | high | unsigned int | - | - | 1.0 | 1.0 | 65535.0 | - | - | Write Autocal-Offset into RAM (mm) |

### ARG_0X4100_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_SHD_ESH_ENTW | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle |
| AKTION | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV_ARG | - | - | - | - | - | Auswahl Thermomonitor aktiv siehe Tabelle TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV_ARG |

### ARG_0X4101_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FREIGABE_GLOBAL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auswahl Freigabe Global 0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |
| FREIGABE_PANIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auswahl Freigabe Panikl 0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |

### ARG_0X4103_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEREICH | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE_ARG | - | - | - | - | - | Modus siehe Tabelle TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE_ARG |

### ARG_0X6013_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen Alarmspeicher SINE 1:Löschen; 0:nicht Löschen |

### ARG_0X6014_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen Fehlerspeicher SINE 1:Löschen; 0:nicht Löschen |

### ARG_0X6015_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen Verpolzähler SINE 1:Löschen; 0:nicht Löschen |

### ARG_0XA17C_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH_STRICT | - | - | - | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| AKTION | + | - | 0-n | - | signed char | - | TAB_FH_SHD_ESH_EINLERNEN | - | - | - | - | - | Anlernart des Elements siehe Tabelle: TAB_FH_SHD_ESH_EINLERNEN |

### ARG_0XA183_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH | - | - | - | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| RICHTUNG | + | - | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00: Öffnen 0x01: Gehoben bzw. Zwangsspalt |
| ZEIT | + | - | ms | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 0.0 | 1000.0 | Angabe der Ansteuerzeit in ms |

### ARG_0XA184_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| FUNKTION | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_SFK1 | - | - | - | - | - | Sonderfunktionspositionen siehe Tabelle TAB_FH_SHD_ESH_SFK1 |

### ARG_0XA185_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH | - | - | - | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| POSITION | + | - | Ink | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert 500 für Schiebehebedach ist die Geschlossen-Position |

### ARG_0XA186_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| POSITION | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0%:offen 100%: geschlossen |
| BEREICH | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR_ARG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_FH_SHD_ESH_LAGE_NR_ARG |

### ARG_0XA188_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH_TASTER | - | - | - | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH_TASTER |
| RICHTUNG | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_TASTER_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Bewegungsrichtung des Elements siehe Tabelle TAB_FH_SHD_ESH_TASTER_RICHTUNG |
| ZEIT | + | - | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Angabe der Zeit in ms |

### ARG_0XAA76_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL | + | - | 0-n | - | signed char | - | TAB_DWA_SELBSTTEST | 1.0 | 1.0 | 0.0 | - | - | optionales Argument; 0: Abbruch; 1: Selbsttest komplettes DWA-System; 2: Selbsttest Innenraumschutz; 3 Selbsttest Neigungsgeber; DEFAULT: 1 |

### ARG_0XAA79_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0/1 | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 oder kein Argument: DWA entschärfen; 1: DWA schärfen |

### ARG_0XAA7B_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OPT_ENTSCHAERFEN | + | - | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| AKUST_ENTSCHAERFEN | + | - | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| OPT_SCHAERFEN | + | - | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| AKUST_SCHAERFEN | + | - | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| OPT_SCHAERFEN_KLAPPE | + | - | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| AKUST_SCHAERFEN_KLAPPE | + | - | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwerte zurücksetzen |

### ARG_0XD17C_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | - | - | - | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |

### ARG_0XD17D_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |

### ARG_0XD17E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| AKTION | 0-n | - | unsigned char | - | TAB_RELAIS_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Das Relais wird mit Schutzfunktion Timeout 4s direkt angesteuert siehe Tabelle TAB_RELAIS_RICHTUNG |
| RELAIS_NUMBER | 0-n | high | unsigned char | - | TAB_RELAIS_NUMBER | 1.0 | 1.0 | 0.0 | - | - | angesteuertes Relais siehe Tabelle TAB_RELAIS_NUMBER |

### ARG_0XD19E_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Steuern Hallversorgung 0x00: Aus 0x01: Ein |

### ARG_0XD1BF_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Statistikzähler löschen |

### ARG_0XD1C1_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Statistikzähler löschen |

### ARG_0XD1C6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GESTIK_ID | 0-n | high | unsigned char | - | TAB_GESTIK_ID | - | - | - | - | - | Simulation einer Gestikerkennung per Diagnose. Siehe Tabelle TAB_GESTIK_ID. |
| STAT_GESTIK_TIMESTAMP_WERT | HEX | high | unsigned long | - | - | - | - | - | - | - | Relativzeit. Not mandatory. |

### ARG_0XD1F5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |

### ARG_0XD1F6_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |

### ARG_0XD1F7_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |

### ARG_0XDCA8_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed int | - | TAB_DWA_LED_ARG | - | - | - | - | - | Ansteuerung der DWA-LED 0: Aus  1: Dauer-Ein  2: Blinken  3: Blitzen |
| ZEIT | ms | - | signed int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in ms |

### ARG_0XDCAA_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OPT_ENTSCHAERFEN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Optische Bestätigung bei entschärfen Aus  1= Optische Bestätigung bei entschärfen Ein |
| AKUST_ENTSCHAERFEN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Akustische Bestätigung bei entschärfen Aus  1= Akustische Bestätigung bei entschärfen Ein |
| OPT_SCHAERFEN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Optische Bestätigung bei schärfen Aus  1= Optische Bestätigung bei schärfen Ein |
| AKUST_SCHAERFEN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Akustische Bestätigung bei schärfen Aus  1= Akustische Bestätigung bei schärfen Ein |
| OPT_SCHAERFEN_KLAPPE | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Optische Bestätigung bei schärfen über Klappe Aus  1= Optische Bestätigung bei schärfen über Klappe Ein |
| AKUST_SCHAERFEN_KLAPPE | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Akustische Bestätigung bei schärfen über Klappe Aus  1= Akustische Bestätigung bei schärfen über Klappe Ein |

### ARG_0XDCB2_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EMPFINDLICHKEIT | 0-n | high | unsigned char | - | TAB_DWA_USIS_EMPF | - | - | - | - | - | Steuern der Empfindlichkeit des Sensors. Nach Klemmenwechsel sollte der Default-Wert wieder verwendet werden |

### ARG_0XDCB3_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x01 = Alarmspeicher im FZD löschen |

### ARG_0XDCB5_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | signed int | - | TAB_DWA_SCHNELLTEST | 1.0 | 1.0 | 0.0 | - | - | 0: Vorgang abbrechen; 1: Schnelltest leise 2: Schnelltest normal |

### ARG_0XDD16_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OBD_UEBERWACHUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = OBD-Überwachung nicht aktiv 1 = OBD-Überwachung aktiv |

### ARG_0XDE3F_D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0x00 = kein Reset ausführen 0x01 = Reset ausführen |

### ARG_0XF000_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_SHD_ESH | - | - | - | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| DEBUG_CHANNEL_1 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration CAN Debug Kanal1; 0 = Ausgabe SHD deaktiviert; 1 = Ausgabe SHD aktiviert |
| DEBUG_CHANNEL_2 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Konfiguration CAN Debug Kanal2; 0 = Ausgabe ESH deaktiviert; 1 = Ausgabe ESH aktiviert |

### ARG_0XF00A_R

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEPTH_MEASUREMENT_X | + | - | Pixel | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Target X-value ( 0..320) |
| STAT_DEPTH_MEASUREMENT_Y | + | - | Pixel | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | - | - | Target Y-value ( 0..240) |
| STAT_DEPTH_MEASUREMENT_MEAN | + | - | Pixel | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Target mean value (e.g. 5 = 5x5 pixel), Max 120 |

### ARG_6013

| WERT | TEXT |
| --- | --- |
| 0x44 | Spannungsmanipulation |
| 0x45 | Bus auf UBat |
| 0x46 | Bus auf Masse |
| 0x47 | Bus-Manipulation |
| 0x48 | Neigungsgeber-Alarm: keine Antwort von FZD |
| 0xFF | kein Eintrag |

### ARG_6014

| WERT | TEXT |
| --- | --- |
| 0x00 | DTC nicht aktiv |
| 0x01 | DTC aktiv in der Vergangenheit |
| 0x02 | DTC aktiv in der Vergangenheit |
| 0x03 | DTC aktiv in der Vergangenheit |
| 0x04 | DTC aktiv in der Vergangenheit |
| 0x05 | DTC aktiv in der Vergangenheit |
| 0x06 | DTC aktiv in der Vergangenheit |
| 0x07 | DTC aktiv in der Vergangenheit |
| 0x08 | DTC aktiv in der Vergangenheit |
| 0x09 | DTC aktiv in der Vergangenheit |
| 0x0A | DTC aktiv in der Vergangenheit |
| 0x0B | DTC aktiv in der Vergangenheit |
| 0x0C | DTC aktiv in der Vergangenheit |
| 0x0D | DTC aktiv in der Vergangenheit |
| 0x0E | DTC aktiv in der Vergangenheit |
| 0x0F | DTC aktiv in der Vergangenheit |
| 0x10 | DTC aktiv in der Vergangenheit |
| 0x11 | DTC aktiv in der Vergangenheit |
| 0x12 | DTC aktiv in der Vergangenheit |
| 0x13 | DTC aktiv in der Vergangenheit |
| 0x14 | DTC aktiv in der Vergangenheit |
| 0x15 | DTC aktiv in der Vergangenheit |
| 0x16 | DTC aktiv in der Vergangenheit |
| 0x17 | DTC aktiv in der Vergangenheit |
| 0x18 | DTC aktiv in der Vergangenheit |
| 0x19 | DTC aktiv in der Vergangenheit |
| 0x1A | DTC aktiv in der Vergangenheit |
| 0x1B | DTC aktiv in der Vergangenheit |
| 0x1C | DTC aktiv in der Vergangenheit |
| 0x1D | DTC aktiv in der Vergangenheit |
| 0x1E | DTC aktiv in der Vergangenheit |
| 0x1F | DTC aktiv in der Vergangenheit |
| 0x20 | DTC aktiv in der Vergangenheit |
| 0x21 | DTC aktiv in der Vergangenheit |
| 0x22 | DTC aktiv in der Vergangenheit |
| 0x23 | DTC aktiv in der Vergangenheit |
| 0x24 | DTC aktiv in der Vergangenheit |
| 0x25 | DTC aktiv in der Vergangenheit |
| 0x26 | DTC aktiv in der Vergangenheit |
| 0x27 | DTC aktiv in der Vergangenheit |
| 0x28 | DTC ist aktiv |
| 0xFF | unbekannter Wert |

### BF_22_F152_SUPPLIERINFO

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HWMODEL | 0-n | high | unsigned char | 0xC0 | HW_MODEL | - | - | - | hardware model |
| STAT_SUPPLIERINFOFIELD | 0-n | high | unsigned char | 0x3F | TAB_SUPPLIERINFO_FIELD | - | - | - | supplierInfo |

### BETRIEBSMODE

| WERT | TEXT | BEDEUTUNG |
| --- | --- | --- |
| 0x00 | Allgemeiner Fertigungs- und Energiesparmode | Hier deaktivierte Funktionen gemäß FeTra-Liste festhalten |
| 0x01 | Spezieller Energiesparmode | - |
| 0x02 | ECOS-Mode | - |
| 0x03 | MOST-Mode | - |
| 0x04 | Rollenmode | - |
| 0xFF | ungültiger Betriebsmode | ungültig |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |
| F_HLZ_VIEW | nein |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x025600 | Energiesparmode aktiv | 0 | - |
| 0x025608 | Codierung: Steuergerät ist nicht codiert | 0 | - |
| 0x025609 | Codierung: Fehler bei Codierdatentransaktion aufgetreten | 0 | - |
| 0x02560A | Codierung: Signatur der Codierdaten ungültig | 0 | - |
| 0x02560B | Codierung: Codierdaten passen nicht zum Fahrzeug | 0 | - |
| 0x02560C | Codierung: Unplausible Daten während Codierdatentransaktion | 0 | - |
| 0x02560D | Codierung: Codierdaten nicht qualifiziert | 0 | - |
| 0x02FF56 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 | - |
| 0x030200 | SHD, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 | - |
| 0x030201 | SHD, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 | - |
| 0x030202 | SHD, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 | - |
| 0x030203 | SHD, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 | - |
| 0x030204 | SHD_ESH: Schreiben der Daten im NVRAM nicht möglich (Position ungültig) | 0 | - |
| 0x030205 | SHD, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 | - |
| 0x030206 | SHD, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 | - |
| 0x030207 | SHD, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 | - |
| 0x030208 | SHD: Hallelemente A und B: Kurzschluss Motorzuleitung nach Ubatt oder Relaiskleber oder Einheit mechanisch bewegt | 0 | - |
| 0x030209 | SHD, Hallelemente A und B: Kurzschluss zwischen Zuleitung oder Motoreinheit defekt | 0 | - |
| 0x03020A | SHD, Hallelement A: Kurzschluss nach Masse | 0 | - |
| 0x03020B | SHD, Hallelement B: Kurzschluss nach Masse | 0 | - |
| 0x03020C | SHD, Hallelement A: Kurzschluss nach Ubatt | 0 | - |
| 0x03020D | SHD, Hallelement B: Kurzschluss nach Ubatt | 0 | - |
| 0x03020E | SHD, Hallelement A: Leitungsunterbrechung | 0 | - |
| 0x03020F | SHD, Hallelement B: Leitungsunterbrechung | 0 | - |
| 0x030210 | SHD: Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 | - |
| 0x030211 | SHD, Bewegung falscher Motor: Verpolung Stecker oder Kabelbaum | 0 | - |
| 0x030212 | SHD: Timeout Ansteuerung, keine Blockerkennung | 0 | - |
| 0x030214 | SHD: Nullposition überfahren, Normierungsverlust | 0 | - |
| 0x030215 | SHD: ungültige Kennlinie, keine Normierung vorhanden | 0 | - |
| 0x030216 | SHD: Motortemperatur 90% Schwelle überschritten | 1 | - |
| 0x030217 | SHD: Motorlauf wegen Übertemperatur unterbrochen | 1 | - |
| 0x030218 | SHD: Kein Motorstart wegen Überspannung oder Unterspannung | 1 | - |
| 0x030219 | SHD: Checksumme Codierung fehlerhaft | 0 | - |
| 0x03021C | SHD: Keine Initialisierung aufgrund ungültiger Randbedingungen (Motortreiber) | 1 | - |
| 0x03021D | SHD: Abschaltung Hallvorsorgung wegen Überspannung | 1 | - |
| 0x03021E | SHD: Motoransteuerung nicht möglich,  keine Spannung am Relaiseingang | 0 | - |
| 0x030220 | SHD: System nicht normiert | 0 | - |
| 0x03027F | SHD: keine Bewegung | 0 | - |
| 0x030280 | ESH, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 | - |
| 0x030281 | ESH, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 | - |
| 0x030282 | ESH, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 | - |
| 0x030283 | ESH, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 | - |
| 0x030285 | ESH, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 | - |
| 0x030286 | ESH, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 | - |
| 0x030287 | ESH, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 | - |
| 0x030288 | ESH: Hallelemente A und B: Kurzschluss Motorzuleitung nach Ubatt oder Relaiskleber oder Einheit mechanisch bewegt | 0 | - |
| 0x030289 | ESH, Hallelemente A und B: Kurzschluss zwischen Zuleitung oder Motoreinheit defekt | 0 | - |
| 0x03028A | ESH, Hallelement A: Kurzschluss nach Masse | 0 | - |
| 0x03028B | ESH, Hallelement B: Kurzschluss nach Masse | 0 | - |
| 0x03028C | ESH, Hallelement A: Kurzschluss nach Ubatt | 0 | - |
| 0x03028D | ESH, Hallelement B: Kurzschluss nach Ubatt | 0 | - |
| 0x03028E | ESH, Hallelement A: Leitungsunterbrechung | 0 | - |
| 0x03028F | ESH, Hallelement B: Leitungsunterbrechung | 0 | - |
| 0x030290 | ESH: Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 | - |
| 0x030291 | ESH, Bewegung falscher Motor: Verpolung Stecker oder Kabelbaum | 0 | - |
| 0x030292 | ESH: Timeout Ansteuerung, keine Blockerkennung | 0 | - |
| 0x030294 | ESH: Nullposition überfahren, Normierungsverlust | 0 | - |
| 0x030295 | ESH: ungültige Kennlinie, keine Normierung vorhanden | 0 | - |
| 0x030296 | ESH: Motortemperatur 90% Schwelle überschritten | 1 | - |
| 0x030297 | ESH: Motorlauf wegen Übertemperatur unterbrochen | 1 | - |
| 0x030298 | ESH: Kein Motorstart wegen Überspannung oder Unterspannung | 1 | - |
| 0x030299 | ESH: Checksumme Codierung fehlerhaft | 0 | - |
| 0x03029C | ESH: Keine Initialisierung aufgrund ungültiger Randbedingungen (Motortreiber) | 1 | - |
| 0x03029D | ESH: Abschaltung Hallvorsorgung wegen Überspannung | 1 | - |
| 0x03029E | ESH: Motoransteuerung nicht möglich,  keine Spannung am Relaiseingang | 0 | - |
| 0x0302A0 | ESH: System nicht normiert | 0 | - |
| 0x0302FF | ESH: keine Bewegung | 0 | - |
| 0x038303 | Gestik: Spannungsfehler SoC/ VMIX | 0 | - |
| 0x038306 | Gestik: Kommunikationsfehler zwischen Kamera und FZD | 0 | - |
| 0x038307 | Gestik: FPGA keine Reaktion | 0 | - |
| 0x038308 | Gestik: Sensor Platine Temperatur Limit überschritten | 1 | - |
| 0x03830A | Gestik: LED ungenügende Leistungsaufnahme | 0 | - |
| 0x03830B | Gestik: Funktionsstörung Carlib | 0 | - |
| 0x03830D | Gestik: FPGA kann nicht auf RAM zugreifen | 0 | - |
| 0x03830F | Gestik: SW Reset | 0 | - |
| 0x038310 | Gestik: Modulations-Signal fehlerfaft | 0 | - |
| 0x038331 | Gestik: Fehler während System Startphase | 0 | - |
| 0x801A00 | Diebstahlwarnanlage, Ultraschall-Senorik: ein oder zwei Kanäle defekt | 0 | - |
| 0x801A01 | Diebstahlwarnanlage: LED oder Leitung LED Kurzschluss nach Plus | 0 | - |
| 0x801A03 | Schiebedach, Bedienschalter: unzulässige Kombination der Schaltereingänge | 0 | - |
| 0x801A31 | Diebstahlwarnanlage, Ultraschall-Sensorik: Sensoren abgedeckt | 0 | - |
| 0x801A32 | Schiebedach, Bedienschalter: Taster hängt | 1 | - |
| 0x801A37 | Interner Steuergerätefehler | 0 | - |
| 0x801A38 | Unterspannung erkannt | 1 | - |
| 0x801A39 | Überspannung erkannt | 1 | - |
| 0x801A4A | Diebstahlwarnanlage: Neigungsgeber und Innenraumschutz deaktiviert | 1 | - |
| 0x801A4B | SINE: Externe Versorgung Unterspannung | 1 | - |
| 0x801A4C | SINE: Interne Versorgung Unterspannung | 1 | - |
| 0x801A4D | SINE: EEPROM fehlerhaft | 0 | - |
| 0x801A4E | SINE: Aktiver Schutz fehlerhaft | 0 | - |
| 0x801A4F | SINE: Aufweckzeit fehlerhaft | 0 | - |
| 0x801A50 | SINE: Sirenenschaltkreis defekt | 0 | - |
| 0x801A51 | SINE: Neigungsgeber defekt | 0 | - |
| 0x801A52 | SINE: Kodierdaten Schreibfehler | 0 | - |
| 0x801A53 | SINE: Selbsttest timeout | 0 | - |
| 0x801A54 | Diebstahlwarnanlage: DWA-LED: Kurzschluß nach Masse | 0 | - |
| 0x801A55 | Diebstahlwarnanlage: Alarm - Details im Alarmspeicher | 1 | - |
| 0x801A56 | Diebstahlwarnanlage: Panikalarm - Details im Panikspeicher | 1 | - |
| 0x801A58 | LIN-Bus Kurzschluss nach Masse | 0 | - |
| 0xDE841E | IuK-CAN Control Module Bus OFF | 0 | - |
| 0xDE8468 | BODY-CAN Control Module Bus OFF | 0 | - |
| 0xDE8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 | - |
| 0xDE8C5E | LIN: Sine antwortet nicht | 1 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### HW_MODEL

| WERT | TEXT |
| --- | --- |
| 0x00 | A-Muster |
| 0x40 | B-Muster |
| 0x80 | C-Muster |
| 0xC0 | D-Muster |
| 0xFF | Wert ungültig |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |
| F_SEVERITY | nein |
| F_UWB_SATZ | 2 |

### IORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC | FEHLERKLASSE |
| --- | --- | --- | --- |
| 0x03021A | SHD: Einklemmfall im Panik-Modus erkannt | 1 | - |
| 0x03021B | SHD: Reversierung im Emergency-Modus | 1 | - |
| 0x03021F | SHD: Keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt | 0 | - |
| 0x030221 | SHD: Initialisierungsvorgang | 1 | - |
| 0x030230 | SHD: Hallsensor A or B: Maximum number of interrupts exceeded | 0 | - |
| 0x030284 | ESH, Relais Öffnen oder schliessen: Ausgangsspannung am falschen Relais | 1 | - |
| 0x03029F | ESH: Keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt | 0 | - |
| 0x0302A1 | ESH: Initialisierungsvorgang | 1 | - |
| 0x0302B0 | ESH: Hallsensor A or B: Maximum number of interrupts exceeded | 0 | - |
| 0x038309 | Gestik: Sensor Platine Temperatur Limit unterschritten | 1 | - |
| 0x038330 | Gestik: Autokalibrierung nicht erfolgreich | 0 | - |
| 0x038332 | Gestik: CAF Kodierung Fehler | 0 | - |
| 0x038334 | Gestik: NAND Speicher Fehler | 0 | - |
| 0x930000 | DWA: USIS Disarm Operation failed : USIS Library not initialized | 0 | - |
| 0x930001 | DWA: USIS Disarm Operation failed : Operation refused by USIS Library | 0 | - |
| 0x930002 | DWA: USIS Disarm Operation failed : Timeout/Logical error | 0 | - |
| 0x930003 | DWA: USIS Arm Operation failed : USIS Library not initialized | 0 | - |
| 0x930004 | DWA: USIS Arm Operation failed : Operation refused by USIS Library | 0 | - |
| 0x930005 | DWA: USIS Arm Operation failed : Timeout/Logical error | 0 | - |
| 0x930006 | DWA: USIS Selftest Operation failed : USIS Library not initialized | 0 | - |
| 0x930007 | DWA: USIS Selftest Operation failed : Operation refused by USIS Library | 0 | - |
| 0x930008 | DWA: USIS Selftest Operation failed : Timeout/Logical error | 0 | - |
| 0x930009 | DWA: DWA Internal Block lost | 0 | - |
| 0x93000A | DWA : Bus Monitoring deactivated by Undervoltage | 1 | - |
| 0x930030 | NVM_E_INTEGRITY_FAILED | 0 | - |
| 0x930031 | NVM_E_LOSS_OF_REDUNDANCY | 0 | - |
| 0x930032 | NVM_E_QUEUE_OVERFLOW | 0 | - |
| 0x930033 | NVM_E_REQ_FAILED | 0 | - |
| 0x930034 | NVM_E_WRONG_BLOCK_ID | 0 | - |
| 0x930038 | CAN_E_TRANSITION | 0 | - |
| 0x93003B | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 | - |
| 0x93003C | ECUM_E_RAM_CHECK_FAILED | 0 | - |
| 0x93003D | WDGM_E_SUPERVISION | 0 | - |
| 0x93003F | WDGM_E_DISABLE_NOT_ALLOWED | 0 | - |
| 0x930040 | RAMTST_E_UNINIT | 0 | - |
| 0x930041 | LIN_E_TIMEOUT | 0 | - |
| 0x930042 | LINIF_E_RESPONSE | 0 | - |
| 0x930050 | SHD Slider: Maximum number of interrupts exceeded | 0 | - |
| 0xFFFFFF | unbekannter Fehlerort | 0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x170C | Batteriespannung | mV | High | unsigned int | - | 1.0 | 1.0 | 0.0 |
| 0x1750 | F_UW_BN | - | High | unsigned char | - | 1.0 | 1.0 | 0.0 |
| 0x1751 | F_UW_TN | TEXT | High | 3 | - | 1.0 | 1.0 | 0.0 |
| 0xXYXY | unbekannte Umweltbedingung | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RDBI_ADS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ISOSAEReserved_00 |
| 0x01 | defaultSession |
| 0x02 | programmingSession |
| 0x03 | extendedDiagnosticSession |
| 0x04 | safetySystemDiagnosticSession |
| 0x40 | vehicleManufacturerSpecific_40 |
| 0x41 | codingSession |
| 0x42 | SWTSession |
| 0x43 | HDDUpdateSession |
| 0xff | ungültig |

### RDBI_PC_PCS_DOP

| WERT | TEXT |
| --- | --- |
| 0x00 | ECU mehrmals programmierbar |
| 0x01 | ECU mindestens einmal vollstaendig programmierbar |
| 0x02 | ECU nicht mehr programmierbar |
| 0xff | ungültig |

### RES_0X2502_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RESERVE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reserve. Konstante = 0x00 |
| STAT_PROG_ZAEHLER_STATUS | 0-n | high | unsigned char | - | RDBI_PC_PCS_DOP | - | - | - | ProgrammingCounterStatus |
| STAT_PROG_ZAEHLER_WERT | - | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ProgrammingCounter |

### RES_0X2504_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ERASE_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | EraseMemoryTime, maximale SWE-Löschzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_CHECK_MEMORY_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | CheckMemoryTime (Bsp.: Signaturprüfung), maximale Speicherprüfzeit mit Ablaufkontrolle im Steuergerät. |
| STAT_BOOTLOADER_INSTALLATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | BootloaderInstallationTime Die Zeit, die nach dem Reset benötigt wird, damit der Hilfsbootloader gestartet wird, den Bootloader löscht, den neuen Bootloader kopiert, dessen Signatur prüf und der neue Bootloader gestartet wird bis er wieder diagnosefähig ist. Angabe ist verpflichtend für alle Steuergeräte, auch wenn das Steuergerät keinen Bootloader Update geplant hat. Ein Wert von 0x0000 ist verboten. |
| STAT_AUTHENTICATION_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | AuthenticationTime, die maximale Zeit, die das Steuergerät zur Prüfung der Authentisierung (sendKey) benötigt mit Ablaufkontrolle im Steuergerät. |
| STAT_RESET_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | ResetTime Die Zeitangabe bezieht sich auf den Übergang von der ApplicationExtendedSesssion in die ProgrammingSession bzw. bei Übergang von der ProgrammingSession in die DefaultSession. Es ist der Maximalwert auszugeben. Nach Ablauf der ResetTime ist das Steuergerät durch Diagnose ansprechbar. |
| STAT_TRANSFER_DATA_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | TransferDataTime Die Angabe hat sich zu beziehen auf einen TransferData mit maximaler Blocklänge auf die Zeitspanne vom vollständigen Empfang der Daten im Steuergerät über das ggf. erforderliche Dekomprimieren und dem vollständigen Speichern im nichtflüchtigen Speicher bis einschließlich dem Senden der positiven Response. |

### RES_0X4000_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EMS_SENSOR_INFO_DATA | DATA | high | data[40] | - | - | 1.0 | 1.0 | 0.0 | All Sensor DATA |

### RES_0X4001_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EMS_LED_INFO_CIRCUIT_DATA | DATA | high | data[40] | - | - | 1.0 | 1.0 | 0.0 | All LED Data |

### RES_0X4002_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MMS_TRACEABILITY_CIRCUIT_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Circuit / for Tuam |
| STAT_MMS_TRACEABILITY_PRODUCT_ID_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Product ID / for Tuam |
| STAT_MMS_TRACEABILITY_MANF_SITE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Manf. Site / for Tuam |
| STAT_MMS_TRACEABILITY_DIGIT_COUNTER_DATA | DATA | high | data[8] | - | - | 1.0 | 1.0 | 0.0 | Digit Counter /for Tuam |
| STAT_MMS_TRACEABILITY_SERIAL_NUMBER_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Serial number /for Annemasse |
| STAT_MMS_TRACEABILITY_HW_STATUS_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | HW status /for Annemasse |
| STAT_MMS_TRACEABILITY_SW_STATUS_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | SW status /for Annemasse |
| STAT_MMS_TRACEABILITY_PRODUCTION_YEAR_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Production year /for Annemasse |
| STAT_MMS_TRACEABILITY_PRODUCTION_DAY_DATA | DATA | high | data[3] | - | - | 1.0 | 1.0 | 0.0 | Production day /for Annemasse |
| STAT_MMS_TRACEABILITY_DAY_COUNTER_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Day counter /for Annemasse |
| STAT_MMS_TRACEABILITY_ASSEMBLY_LINE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Assembly line /for Annemasse (optional - only needed if more than one ass. line) |
| STAT_MMS_TRACEABILITY_NO_REFERENCE_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Final Product reference |
| STAT_MMS_TRACEABILITY_NO_INDEX_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Final Product Index |
| STAT_MMS_TRACEABILITY_PLANT_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Valeo Final Product Plant |
| STAT_MMS_TRACEABILITY_LINE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Valeo Final Product Line |
| STAT_MMS_TRACEABILITY_MANUFACTURING_TIME_DATA | DATA | high | data[5] | - | - | 1.0 | 1.0 | 0.0 | Valeo Final Product Manufacturing year, month and day |
| STAT_MMS_TRACEABILITY_FINAL_SERIAL_NUMBER_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 |  Final Product Serial number |
| STAT_MMS_TRACEABILITY_VALEO_TEST_BYTE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Valeo Test byte |
| STAT_MMS_TRACEABILITY_VALEO_DEVIATION_NUMBER_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Valeo Deviation Number |
| STAT_MMS_TRACEABILITY_CALIBRATION_VALUE_DATA | DATA | high | data[1] | - | - | 1.0 | 1.0 | 0.0 | Product Calibration value (optional) |
| STAT_MMS_TRACEABILITY_SPARE_DATA | DATA | high | data[2] | - | - | 1.0 | 1.0 | 0.0 | Spare |

### RES_0X4004_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BOOT_PARTITION | 0-n | high | unsigned char | - | TAB_GESTIK_BOOT_PARTITION | - | - | - | SW BOOT PARTITION |

### RES_0X4008_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESTIK_CAMERA_SIMU_FAIL | 0-n | high | unsigned char | - | TAB_GESTIK_FAIL_ID | - | - | - | Select Failure |

### RES_0X4009_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESTIK_MB_SIMU_DTC_1 | 0-n | high | unsigned int | - | TAB_GESTIK_DTC_ID | - | - | - | Select DTC |

### RES_0X400A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SGBM_ID_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Read SGBM-ID Number |
| STAT_SW_VERSION_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Read SW version number |

### RES_0X400C_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ENABLE_GEST_RECO | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Gesture recognition Disabled 0x01: Gesture recognition Enabled |

### RES_0X4012_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CEM_STATISTICS_CENTRAL_DEPTH_WERT | HEX | high | unsigned int | - | - | - | - | - | read the central depth value over 10 x 10 pixels |
| STAT_CEM_STATISTICS_SATURATION_WERT | HEX | high | unsigned char | - | - | - | - | - | Number of frames with saturation < 50% in the last second (Nr. of good frames) |

### RES_0X4013_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MODE_GESTIK | 0-n | high | unsigned char | - | TAB_GESTIK_MODE_CAMERA | - | - | - | Get the current mode of the camera  |
| STAT_MODE_MASK_GESTIK | 0-n | high | unsigned long | - | TAB_GESTIK_MODE_MASK | - | - | - | Get the current mode of the camera  |

### RES_0X4015_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HANDPOSE_RECOGNIZED_WERT | HEX | high | unsigned char | - | - | - | - | - | HANDPOSE |
| STAT_GESTURE_RECOGNIZED_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_GESTURE_X_COORDINATE_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_GESTURE_Y_COORDINATE_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_GESTURE_Z_COORDINATE_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_HANDPEAK_X_COORDINATE_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_HANDPEAK_Y_COORDINATE_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_HANDPEAK_Z_COORDINATE_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_BOUNDING_BOX_X_COORDINATE_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_BOUNDING_BOX_Y_COORDINATE_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_BOUNDING_BOX_Z_COORDINATE_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_BOUNDING_BOX_WIDTH_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_BOUNDING_BOX_LENGTH_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_INTERSECTION_COORDINATES_Z_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |
| STAT_INTERSECTION_COORDINATES_Y_WERT | HEX | high | unsigned char | - | - | - | - | - | gesture |

### RES_0X401A_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOCAL_INFO_TIME_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Time since last sucessfull Autocal execution (s) |
| STAT_AUTOCAL_INFO_ZDIFF_MEAN_WERT | mm | high | signed int | - | - | 1.0 | 1.0 | 0.0 | Offset value calculated by Autocal (Zdiff_mean in mm) |
| STAT_AUTOCAL_INFO_DSHIFT_USED_WERT | mm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Final DSHIFT calculated after last autocalibration (mm) |
| STAT_AUTOCAL_INFO_ZDIFF_1_VALID | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Zdiff_1 invalid 0x01: Zdiff_1 valid    |
| STAT_AUTOCAL_INFO_ZDIFF_2_VALID | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Zdiff_2 invalid 0x01: Zdiff_2 valid    |
| STAT_AUTOCAL_INFO_ZDIFF_3_VALID | 0/1 | high | unsigned char | - | - | - | - | - | 0x00: Zdiff_3 invalid 0x01: Zdiff_3 valid   |
| STAT_AUTOCAL_INFO_DIST_MEAS_1_WERT | mm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Measured distance for RefPoint 1 (mm)  |
| STAT_AUTOCAL_INFO_DIST_MEAS_2_WERT | mm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Measured distance for RefPoint 2 (mm)  |
| STAT_AUTOCAL_INFO_DIST_MEAS_3_WERT | mm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Measured distance for RefPoint 3 (mm)  |

### RES_0X401B_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DSHIFT_DATA | DATA | high | data[50] | - | - | 1.0 | 1.0 | 0.0 | Read FPGA Parameter Internal |

### RES_0X401D_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_AUTOKALIBRATION_AUTOCAL_OFFSET_WERT | mm | high | unsigned int | - | - | 1.0 | 1.0 | -65535.0 | Autocal_Offset in mm |

### RES_0X4100_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV | - | - | - | Status Thermomonitor aktiv siehe Tabelle TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV |
| STAT_ESH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV | - | - | - | Status Thermomonitor aktiv siehe Tabelle TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV |

### RES_0X4101_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_FREIGABE_GLOBAL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Freigabe Global  0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |
| STAT_ESH_FREIGABE_GLOBAL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Freigabe Global  0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |
| STAT_SHD_FREIGABE_PANIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Freigabe Panik  0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |
| STAT_ESH_FREIGABE_PANIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Freigabe Panik  0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |

### RES_0X4103_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEREICH | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE | - | - | - | Status Modus siehe Tabelle TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE |

### RES_0X4107_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNLINIENDATEN_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlwert über dem Verfahrweg erster Block |
| STAT_KENNLINIENDATEN_2_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlwert über dem Verfahrweg zweiter Block |
| STAT_SCHLIESSZEIT_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schliesszeit beim Initialisierungsvorgang. Auflösung 10ms Schritte |
| STAT_BN_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spannung die am Fensterheber während dem Initialisieren anliegt. Auflösung 100mV Schritte |
| STAT_SPIEL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hall Inkremente |
| STAT_GUELTIGKEIT | 0/1 | high | unsigned char | - | - | - | - | - | 0x00 Kennlinie ungültig 0x01 Kennlinie gültig |
| STAT_BEWERTUNG | 0/1 | high | unsigned char | - | - | - | - | - | 0x00 Kennlinie in Ordnung  0x01 Kennlinie nicht in Ordnung |
| STAT_REGELVERLETZUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | zu klären |

### RES_0X4108_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNLINIENDATEN_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlwert über dem Verfahrweg erster Block |
| STAT_KENNLINIENDATEN_2_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlwert über dem Verfahrweg zweiter Block |
| STAT_SCHLIESSZEIT_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schliesszeit beim Initialisierungsvorgang. Auflösung 10ms Schritte |
| STAT_BN_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spannung die am Fensterheber während dem Initialisieren anliegt. Auflösung 100mV Schritte |
| STAT_SPIEL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hall Inkremente |
| STAT_GUELTIGKEIT | 0/1 | high | unsigned char | - | - | - | - | - | 0x00 Kennlinie ungültig 0x01 Kennlinie gültig |
| STAT_BEWERTUNG | 0/1 | high | unsigned char | - | - | - | - | - | 0x00 Kennlinie in Ordnung 0x01 Kennlinie nicht in Ordnung |
| STAT_REGELVERLETZUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | zu klären |

### RES_0X4109_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KENNLINIENDATEN_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlwert über dem Verfahrweg erster Block |
| STAT_KENNLINIENDATEN_2_DATA | DATA | high | data[128] | - | - | 1.0 | 1.0 | 0.0 | Drehzahlwert über dem Verfahrweg zweiter Block |
| STAT_SCHLIESSZEIT_WERT | s | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Schliesszeit beim Initialisierungsvorgang. Auflösung 10ms Schritte |
| STAT_BN_SPANNUNG_WERT | V | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Spannung die am Fensterheber während dem Initialisieren anliegt. Auflösung 100mV Schritte |
| STAT_SPIEL_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Hall Inkremente |
| STAT_GUELTIGKEIT | 0/1 | high | unsigned char | - | - | - | - | - | 0x00 Kennlinie ungültig 0x01 Kennlinie gültig |
| STAT_BEWERTUNG | 0/1 | high | unsigned char | - | - | - | - | - | 0x00 Kennlinie in Ordnung 0x01 Kennlinie nicht in Ordnung |
| STAT_REGELVERLETZUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | zu klären |

### RES_0X600F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_MH | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Motorhaube |
| STAT_FT | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Fahrertür |
| STAT_BFT | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Beifahrertür |
| STAT_FTH | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Fehrertür Hinten |
| STAT_BFTH | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Beifahrertür Hinten |
| STAT_HK | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Heckklappe |
| STAT_HS | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Heckscheibe |
| STAT_VORHALT_TUER | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Vorhalt Tuer |
| STAT_LEITUNGSUEBERWACHUNG | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Leitungsüberwachung |
| STAT_EIGENUEBERWACHUNG | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status SINE Eingenüberwachung (Spannung SINE) |
| STAT_USIS | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status USIS |
| STAT_NGS | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Neigunsgeber |
| STAT_AUTHENTISIERUNG | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status Authentisierung |
| STAT_OBD_ETHERNET | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status OBD Ethernet |
| STAT_OBD_DCAN | 0-n | high | unsigned char | - | _TAB_DWA_TRIGGER_STATUS | - | - | - | Status OBD D-CAN |

### RES_0X6011_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_US_PE_COUNT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | total number of pulse-echo in alarm cycle |
| STAT_US_DPE_COUNT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | total number of double pulses in alarm cycle |
| STAT_US_CW_COUNT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | total number of Doppler in alarm cycle |
| STAT_US_PE_SLEEP_COUNT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | number of pulse-echo during sleep mode in alarm cycle |
| STAT_US_DPE_SLEEP_COUNT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | number of double pulses during sleep mode in alarm cycle |
| STAT_US_CW_SLEEP_COUNT_WERT | - | high | unsigned long | - | - | 1.0 | 1.0 | 0.0 | number of Doppler during sleep mode in alarm cycle |

### RES_0X6012_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FZD_ALARM_MOTORHAUBE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt MotorHaube |
| STAT_FZD_ALARM_FAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt FAhrerTür |
| STAT_FZD_ALARM_BFT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt BeiFahrerTür |
| STAT_FZD_ALARM_FATH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt FAhrerTür Hinten |
| STAT_FZD_ALARM_BFTH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt BeiFahrerTür Hinten |
| STAT_FZD_ALARM_HECKKLAPPE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Heckklappe |
| STAT_FZD_ALARM_HECKSCHEIBE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Heckscheibe |
| STAT_FZD_ALARM_VORHALT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme VORHALT |
| STAT_FZD_ALARM_LEITUNGSUEBERWACHUNG_SINE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Leitungsüberwachung LIN-SINE |
| STAT_FZD_ALARM_MANIPULATION_AUTH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Manipulationsschutz Authentifizierung |
| STAT_FZD_ALARM_USIS_KANAL_A_UND_B_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl USIS-Alarme gleichzeitig auf Kanal A und B (rechts + links) |
| STAT_FZD_ALARM_USIS_KANAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl USIS-Alarme nur auf Kanal A (rechts) |
| STAT_FZD_ALARM_USIS_KANAL_B_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl USIS-Alarme nur auf Kanal B (links) |
| STAT_SINE_ALARM_NEIGUNGSGEBER_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Neigungsgeber X-Achse |
| STAT_SINE_ALARM_NEIGUNGSGEBER_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Neigungsgeber Y-Achse |
| STAT_SINE_ALARM_NEIGUNGSGEBER_X_UND_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Neigungsgeber X- und Y-Achse |
| STAT_SINE_ALARM_SPANNUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Unterbrechung Spannungsversorgung der LIN-SINE |
| STAT_SINE_ALARM_LIN_TELEGRAMM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme LIN-Bus: kein Telegramm absetzbar |
| STAT_FZD_ALARM_PANIKALARM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Panikalarm |
| STAT_DWA_ALARM_USIS_ABDECKUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der durch Abdecken des USIS Gitters ausgelösten Alarme |
| STAT_DWA_ALARM_OBD_KOMMUNIKATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der durch OBD-Kommunikation ausgelösten Alarme |

### RES_0X6013_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALARM_1_ID | 0-n | high | unsigned char | - | ARG_6013 | - | - | - | Alarmcode LIN-SINE |
| STAT_ALARM_1_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |
| STAT_ALARM_2_ID | 0-n | high | unsigned char | - | ARG_6013 | - | - | - | Alarmcode LIN-SINE |
| STAT_ALARM_2_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |
| STAT_ALARM_3_ID | 0-n | high | unsigned char | - | ARG_6013 | 1.0 | 1.0 | 0.0 | Alarmcode LIN-SINE |
| STAT_ALARM_3_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |
| STAT_ALARM_4_ID | 0-n | high | unsigned char | - | ARG_6013 | 1.0 | 1.0 | 0.0 | Alarmcode LIN-SINE |
| STAT_ALARM_4_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |
| STAT_ALARM_5_ID | 0-n | high | unsigned char | - | ARG_6013 | 1.0 | 1.0 | 0.0 | Alarmcode LIN-SINE |
| STAT_ALARM_5_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |

### RES_0X6014_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOW_EXTERN_BAT_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D11  externe Spannung niedrig  |
| STAT_LOW_EXTERN_BAT_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D11  externe Spannung niedrig  |
| STAT_LOW_INTERN_BAT_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D12  interne Spannung niedrig  |
| STAT_LOW_INTERN_BAT_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D12  interne Spannung niedrig  |
| STAT_EEPROM_ID | 0-n | high | unsigned char | - | ARG_6014 | 1.0 | 1.0 | 0.0 | Status DTC 0x9D13  EEPROM KO  |
| STAT_EEPROM_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D13  EEPROM KO  |
| STAT_AKTIV_SCHUTZ_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D14  Aktiver Schutz KO  |
| STAT_AKTIV_SCHUTZ_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D14  Aktiver Schutz KO  |
| STAT_AUFWACHZEIT_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D15  falsche Aufstartzeit  |
| STAT_AUFSTARTZEIT_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D15  falsche Aufstartzeit  |
| STAT_KLANGSCHALTKREIS_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D16  Klangschaltkreis KO  |
| STAT_KLANGSCHALTKREIS_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D16  Klangschaltkreis KO  |
| STAT_NEIGUNGSGEBER_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D1F  Neigungsgeber KO  |
| STAT_NEIGUNGSGEBER_TEMP_WERT | ° | high | signed char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D1F  Neigungsgeber KO  |

### RES_0X6015_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MAXIMAL_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Aufgetretene Maximalspannung bei Verpolung |
| STAT_ZEIT_UNTER_1V_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit mit Spannung < -1V |
| STAT_ZEIT_UNTER_2V_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit mit Spannung < -2V |
| STAT_ZEIT_UNTER_3V_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit mit Spannung < -3V |
| STAT_ZEIT_UNTER_4V_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit mit Spannung < -4V |

### RES_0XA17C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |
| STAT_SHD_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_ESH_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_NORMIERUNG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |

### RES_0XA183_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA184_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA185_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA186_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA188_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA18A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE | - | - | - | Status Selbsttest Routine |

### RES_0XA18C_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RETURN_VALUE | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE_AUTOCAL | - | - | - | Return Status |

### RES_0XAA76_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_SELBSTTEST_NR | - | - | + | 0-n | - | signed char | - | TAB_DWA_SELBSTTEST_ERG | 1.0 | 1.0 | 0.0 | 0: Selbsttest NIO  1: Selbsstest IO 2: Selbsttest läuft |

### RES_0XD180_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall A Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall A Versorgung 0x00: Aus 0x01: Ein |
| STAT_HALL_A_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallanschluss siehe Tabelle TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall B Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_HALL_B_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall B Versorgung 0x00: Aus 0x01: Ein |
| STAT_HALL_B_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallanschluss siehe Tabelle TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND |

### RES_0XD192_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_SHD_ESH_NR | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_VERFAHREN | - | - | - | Tasteranforderung siehe Tabelle TAB_FH_ESH_VERFAHREN |
| STAT_TASTER_AED_NR | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_VERFAHREN | - | - | - | Tasteranforderung siehe Tabelle TAB_FH_ESH_VERFAHREN |
| STAT_TASTER_RESERVE_1 | 0-n | high | unsigned char | - | - | - | - | - | noch unbelegt |
| STAT_TASTER_RESERVE_2 | 0-n | high | unsigned int | - | - | - | - | - | noch unbelegt |

### RES_0XD196_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_INIT | 1.0 | 1.0 | 0.0 | Initialisierungsergebnis siehe Tabelle TAB_FH_SHD_ESH_INIT |
| STAT_SHD_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Bewegung des Elements siehe Tabelle TAB_FH_SHD_ESH_BEWEGUNG |
| STAT_SHD_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | 1.0 | 1.0 | 0.0 | Aktuelle Position des Glasdeckels siehe Tabelle TAB_FH_SHD_ESH_POSITION |
| STAT_SHD_POSITION_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position in Hall-Pulsen (500 bedeutet komplett geschlossen) |
| STAT_SHD_POSITION_HALL_MIN_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Position in Hall-Pulsen |
| STAT_SHD_POSITION_HALL_MAX_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Position in Hall-Pulsen |
| STAT_SHD_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Schlittenweg in mm zwischen MIN und MAX in Millimeter (0 bedeut komplett geschlossen) |
| STAT_SHD_POSITION_MM_MIN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Minimale Position in Millimeter |
| STAT_SHD_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Position in Millimeter |
| STAT_SHD_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg 0% bedeutet offen /100% bedeutet geschlossen |
| STAT_SHD_LAGE_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | 1.0 | 1.0 | 0.0 | Lage Glasdeckel siehe Tabelle TAB_FH_SHD_ESH_LAGE_NR |
| STAT_SHD_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. siehe Tabelle TAB_FH_SHD_ESH_ZUSTAND_TUER |
| STAT_SHD_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_FREIGABE | 1.0 | 1.0 | 0.0 | Freigabezustand siehe Tabelle TAB_FH_SHD_ESH_FREIGABE |
| STAT_SHD_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_SHD_RESERVE | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1A6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_RESERVE_1 | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Von SHD nicht benutzt! |
| STAT_SHD_MOTORTEMPERATUR_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORTEMPERATUR | - | - | - | Motortemperaturbereiche siehe Tabelle TAB_FH_SHD_ESH_MOTORTEMPERATUR |
| STAT_SHD_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_SHD_MT_LIEFERANT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant des Motortreibers siehe Tabelle TAB_FH_SHD_ESH_MT_LIEFERANT |
| STAT_SHD_MT_SW_VERSION | 0-n | - | unsigned long | - | - | - | - | - | SW-Version Byte 0 = Patchlevelnumber Byte 1 = Minorversionnumber Byte2 = Majorversionnumber Byte3 = unused |
| STAT_SHD_EEPROM_PRUEFSUMME_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STAT_EEPROM | 1.0 | 1.0 | 0.0 | Status EEPROM Checksumme siehe Tabelle TAB_FH_SHD_ESH_STAT_EEPROM |
| STAT_SHD_RESERVE_2 | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Von SHD vorerst nicht benutzt! |
| STAT_SHD_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_WACHHALTEN | - | - | - | Status Einschlaf-Verhinderung siehe Tabelle TAB_FH_SHD_ESH_WACHHALTEN |
| STAT_SHD_FZG_GESCHWINDIGKEIT | 0-n | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_SHD_RELATIVZEIT | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_SHD_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | - | - | - | Status Aktivierung Temperaturüberwachung  0x00: Aus 0x01: Ein |
| STAT_SHD_EKS_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Status Aktivierung EKS 0x00: Aus 0x01: Ein |
| STAT_SHD_FREIGABE_DEAKTIVIERT | 0/1 | - | unsigned char | - | - | - | - | - | Status Verknüpfung Freigabe 0x00: Aus 0x01: Ein |
| STAT_SHD_PANIKMODUS_DEAKTIVIERT | 0/1 | - | unsigned char | - | - | - | - | - | Status Verknüpfung Freigabe Panikmodus 0x00: Aus 0x01: Ein |
| STAT_SHD_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve für Erweiterungen |

### RES_0XD1B9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais A 0x00: Aus 0x01: Ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais A 0x00: Aus 0x01: Ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais B 0x00: Aus 0x01: Ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais B 0x00: Aus 0x01: Ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eingangsspannung am Relais (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_B_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eingangsspannung am Relais (Klemmenspannung des Motors) . Auflösung 0,01 V |

### RES_0XD1BA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ESH_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_INIT | 1.0 | 1.0 | 0.0 | Initialisierungsergebnis siehe Tabelle TAB_FH_SHD_ESH_INIT |
| STAT_ESH_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Bewegung des Elements siehe Tabelle TAB_FH_SHD_ESH_BEWEGUNG |
| STAT_ESH_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | 1.0 | 1.0 | 0.0 | Aktuelle Position des Schiebehimmels siehe Tabelle TAB_FH_SHD_ESH_POSITION |
| STAT_ESH_POSITION_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position in Hall-Pulsen (500 bedeutet komplett geschlossen) |
| STAT_ESH_POSITION_HALL_MIN_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Position in Hall-Pulsen |
| STAT_ESH_POSITION_HALL_MAX_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Position in Hall-Pulsen |
| STAT_ESH_POSITION_MM_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | liefert den Schlittenweg in mm zwischen MIN und MAX in Millimeter (0 bedeut komplett geschlossen) |
| STAT_ESH_POSITION_MM_MIN_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Minimale Position in Millimeter |
| STAT_ESH_POSITION_MM_MAX_WERT | mm | - | signed int | - | - | 1.0 | 1.0 | 0.0 | Maximale Position in Millimeter |
| STAT_ESH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg 0% offen / 100% geschlossen |
| STAT_ESH_LAGE_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | 1.0 | 1.0 | 0.0 | Lage Schiebehimmel siehe Tabelle TAB_FH_SHD_ESH_LAGE_NR |
| STAT_ESH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. siehe Tabelle TAB_FH_SHD_ESH_ZUSTAND_TUER |
| STAT_ESH_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_FREIGABE | 1.0 | 1.0 | 0.0 | Freigabezustand siehe Tabelle TAB_FH_SHD_ESH_FREIGABE |
| STAT_ESH_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_ESH_RESERVE | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1BB_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall A Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall A Versorgung 0x00: Aus 0x01: Ein |
| STAT_HALL_A_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallanschluss siehe Tabelle TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall B Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_HALL_B_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall B Versorgung 0x00: Aus 0x01: Ein |
| STAT_HALL_B_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallanschluss siehe Tabelle TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND |

### RES_0XD1BC_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Ansteuerung Relais A 0x00: Aus 0x01: Ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Rückleseleitung Relais A 0x00: Aus 0x01: Ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Ansteuerung Relais B 0x00: Aus 0x01: Ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Rückleseleitung Relais B 0x00: Aus 0x01: Ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eingangsspannung am Relais (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_B_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eingangsspannung am Relais (Klemmenspannung des Motors) . Auflösung 0,01 V |

### RES_0XD1BD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ESH_RESERVE_1 | 0-n | - | unsigned char | - | - | - | - | - | Von ESH nicht benutzt! |
| STAT_ESH_MOTORTEMPERATUR_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORTEMPERATUR | - | - | - | Motortemperaturbereiche, siehe Tabelle TAB_FH_SHD_ESH_MOTORTEMPERATUR |
| STAT_ESH_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_ESH_MT_LIEFERANT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MT_LIEFERANT | - | - | - | Lieferant des Motortreibers, siehe Tabelle TAB_FH_SHD_ESH_MT_LIEFERANT |
| STAT_ESH_MT_SW_VERSION | 0-n | - | unsigned long | - | - | - | - | - | SW-Version Byte 0 = Patchlevelnumber Byte 1 = Minorversionnumber Byte2 = Majorversionnumber Byte3 = unused |
| STAT_ESH_EEPROM_PRUEFSUMME_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STAT_EEPROM | - | - | - | Status EEPROM Checksumme, siehe Tabelle TAB_FH_SHD_ESH_STAT_EEPROM |
| STAT_ESH_RESERVE_2 | 0-n | - | unsigned char | - | - | - | - | - | Von SHD vorerst nicht benutzt! |
| STAT_ESH_WACHHALTEN | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_WACHHALTEN | - | - | - | Status Einschlaf-Verhinderung, siehe Tabelle TAB_FH_SHD_ESH_WACHHALTEN |
| STAT_ESH_FZG_GESCHWINDIGKEIT | 0-n | - | unsigned char | - | - | - | - | - | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_ESH_RELATIVZEIT | 0-n | - | unsigned long | - | - | - | - | - | Aktuelle Relativ-Zeit (wie vom Bus erhalten) |
| STAT_ESH_TEMPERATUR_UEBERWACHUNG | 0/1 | - | unsigned char | - | - | - | - | - | Status Aktivierung Temperaturüberwachung 0x00: Aus 0x01: Ein |
| STAT_ESH_EKS_AKTIV | 0/1 | - | unsigned char | - | - | - | - | - | Status Aktivierung EKS 0x00: Aus 0x01: Ein |
| STAT_ESH_FREIGABE_DEAKTIVIERT | 0/1 | - | unsigned char | - | - | - | - | - | Status Verknüpfung Freigabe 0x00: Aus 0x01: Ein |
| STAT_ESH_PANIKMODUS_DEAKTIVIERT | 0/1 | - | unsigned char | - | - | - | - | - | Status Verknüpfung Freigabe Panikmodus 0x00: Panikmodus aktiv 0x01: Panikmodus deaktiviert |
| STAT_ESH_RESERVE | 0-n | - | unsigned long | - | - | - | - | - | Reserve für Erweiterungen |

### RES_0XD1BE_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_INITIALISIERUNG | 0-n | - | unsigned int | - | - | - | - | - | Anzahl Initialisierungen per Taster oder Diagnose |
| STAT_NACHNORMIERUNG_MANUELL | 0-n | - | unsigned int | - | - | - | - | - | Anzahl der Nachnormierungen an Blockposition mit Taster |
| STAT_VERFAHREN_EMERGENCY | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verfahren im Emergnecy Close |
| STAT_PANIC | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Verfahren im Panic Mode |
| STAT_REVERSIER_NORMALMODUS | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Reversiervorgänge im Normalmode |
| STAT_REVERSIERER_EMERGENCY | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Reversiervorgänge im Emergency Mode |
| STAT_ABBRUCH_MOTORLAUF | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Abbrüche des Motorlaufs |
| STAT_VORGANG_OEFFNEN_80_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen im Bereich 0-80 km/h |
| STAT_VORGANG_HEBEN_80_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Heben/Lüfterposition im Bereich 0-80 km/h |
| STAT_VORGANG_SCHLIESSEN_80_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen im Bereich 0-80 km/h |
| STAT_VORGANG_OEFFNEN_120_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen im Bereich 80-120 km/h |
| STAT_VORGANG_HEBEN_120_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Heben/Lüfterposition im Bereich 80-120  km/h |
| STAT_VORGANG_SCHLIESSEN_120_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen im Bereich 80-120 km/h |
| STAT_VORGANG_OEFFNEN_160_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen im Bereich 120-160 km/h |
| STAT_VORGANG_HEBEN_160_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Heben/Lüfterposition im Bereich 120-160 km/h |
| STAT_VORGANG_SCHLIESSEN_160_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen im Bereich 120-160 km/h |
| STAT_VORGANG_OEFFNEN_300_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen im Bereich > 160 km/h |
| STAT_VORGANG_HEBEN_300_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Heben/Lüfterposition im Bereich > 160 km/h |
| STAT_VORGANG_SCHLIESSEN_300_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen im Bereich > 160 km/h |
| STAT_VORGANG_HEBEN_TOUCHCOMMAND | 0-n | - | unsigned int | - | - | - | - | - | Anzahl Vorgänge Heben/Lüfterposition durch TouchCommand |
| STAT_VORGANG_SCHLIESSEN_TOUCHCOMMAND | 0-n | - | unsigned int | - | - | - | - | - | Anzahl Vorgänge Schliessen durch TouchCommand |
| STAT_VORGANG_OEFFNEN_TOUCHCOMMAND | 0-n | - | unsigned int | - | - | - | - | - | Anzahl Vorgänge Öffnen durch TouchCommand |
| STAT_BETAETIGUNG_BEI_MINUS_10_GRAD | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betätigungen bei minus 10 Grad |
| STAT_REVERSIER_BEI_0_GRAD | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reversiervorgänge bei kleiner 0 Grad |
| STAT_RESERVE_1 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 1 |
| STAT_RESERVE_2 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 2 |
| STAT_RESERVE_3 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 3 |
| STAT_RESERVE_4 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 4 |

### RES_0XD1C0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ANZAHL_INITIALISIERUNG | 0-n | - | unsigned int | - | - | - | - | - | Anzahl Initialisierungen per Taster oder Diagnose |
| STAT_NACHNORMIERUNG_MANUELL | 0-n | - | unsigned int | - | - | - | - | - | Anzahl der Nachnormierungen an Blockposition mit Taster |
| STAT_RESERVE_7 | 0-n | - | unsigned int | - | - | - | - | - | Reserve 7 |
| STAT_RESERVE_8 | 0-n | - | unsigned int | - | - | - | - | - | Reserve 8 |
| STAT_VORGANG_OEFFNEN_TOUCHCOMMAND | 0-n | - | unsigned int | - | - | - | - | - | Anzahl Vorgänge Öffnen durch Touchcommand |
| STAT_VORGANG_SCHLIESSEN_TOUCHCOMMAND | 0-n | - | unsigned int | - | - | - | - | - | Anzahl Vorgänge Schließen durch Touchcommand |
| STAT_ABBRUCH_MOTORLAUF | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl der Abbrüche des Motorlaufs |
| STAT_VORGANG_OEFFNEN_80_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen im Bereich 0-80 km/h |
| STAT_VORGANG_HEBEN_80_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Heben/Lüfterposition im Bereich 0-80 km/h |
| STAT_VORGANG_SCHLIESSEN_80_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen im Bereich 0-80 km/h |
| STAT_VORGANG_OEFFNEN_120_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen im Bereich 80-120 km/h |
| STAT_VORGANG_HEBEN_120_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Heben/Lüfterposition im Bereich 80-120  km/h |
| STAT_VORGANG_SCHLIESSEN_120_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen im Bereich 80-120 km/h |
| STAT_VORGANG_OEFFNEN_160_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen im Bereich 120-160 km/h |
| STAT_VORGANG_HEBEN_160_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Heben/Lüfterposition im Bereich 120-160 km/h |
| STAT_VORGANG_SCHLIESSEN_160_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen im Bereich 120-160 km/h |
| STAT_VORGANG_OEFFNEN_300_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Öffnen im Bereich > 160 km/h |
| STAT_VORGANG_HEBEN_300_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Heben/Lüfterposition im Bereich > 160 km/h |
| STAT_VORGANG_SCHLIESSEN_300_KMH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl Vorgänge Schliessen im Bereich > 160 km/h |
| STAT_BETAETIGUNG_BEI_MINUS_10_GRAD | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betätigungen bei minus 10 Grad |
| STAT_REVERSIER_BEI_0_GRAD | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reversiervorgänge bei kleiner 0 Grad |
| STAT_RESERVE_1 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 1 |
| STAT_RESERVE_2 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 2 |
| STAT_RESERVE_3 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 3 |
| STAT_RESERVE_4 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 4 |
| STAT_RESERVE_5 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 5 |
| STAT_RESERVE_6 | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve 6 |

### RES_0XD1C6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_GESTIK_ID | 0-n | high | unsigned char | - | TAB_GESTIK_ID | - | - | - | Ausgabe der erkannten Gestik. Siehe Tabelle TAB_GESTIK_ID.  |
| STAT_GESTIK_TIMESTAMP_WERT | HEX | high | unsigned long | - | - | - | - | - | Relativzeit |

### RES_0XD1C7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KAMERA_STATUS | 0-n | high | unsigned char | - | TAB_GEK_KAMERA_STATUS | - | - | - | Ausgabe des Status der Kamera: Siehe Tabelle TAB_GEK_KAMERA_STATUS |
| STAT_GR_LIBRARY_ID_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer der Gestik-Bibliothek |
| STAT_FPGA_LIBRARY_ID_DATA | DATA | high | data[4] | - | - | 1.0 | 1.0 | 0.0 | Versionsnummer der FPGA-Bibliothek |
| STAT_ANZAHL_GESTEN_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl von implementierte Gesten |
| STAT_PRELOADER_ID_DATA | DATA | high | data[6] | - | - | 1.0 | 1.0 | 0.0 | Preloader Version |

### RES_0XD1F5_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_REVERSIEREN_ZAEHLER_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Reversierhäufigkeit wird bei jedem Reversier inkrementiert |
| STAT_SHD_REVERSIEREN_1_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_REVERSIER_URS | 1.0 | 1.0 | 0.0 | Reversierursache, siehe Tabelle TAB_SHD_ESH_REVERSIER_URS |
| STAT_SHD_REVERSIEREN_1_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_SHD_REVERSIEREN_1_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_SHD_REVERSIEREN_1_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_SHD_REVERSIEREN_1_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb) in 0,1 Volt-Schritten |
| STAT_SHD_REVERSIEREN_1_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_SHD_REVERSIEREN_2_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_REVERSIER_URS | 1.0 | 1.0 | 0.0 | Reversierursache, siehe Tabelle TAB_SHD_ESH_REVERSIER_URS |
| STAT_SHD_REVERSIEREN_2_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_SHD_REVERSIEREN_2_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_SHD_REVERSIEREN_2_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signall) |
| STAT_SHD_REVERSIEREN_2_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb)  in 0,1 Volt-Schritten |
| STAT_SHD_REVERSIEREN_2_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_SHD_REVERSIEREN_3_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_REVERSIER_URS | 1.0 | 1.0 | 0.0 | Reversierursache, siehe Tabelle TAB_SHD_ESH_REVERSIER_URS |
| STAT_SHD_REVERSIEREN_3_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_SHD_REVERSIEREN_3_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_SHD_REVERSIEREN_3_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_SHD_REVERSIEREN_3_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb)  in 0,1 Volt-Schritten |
| STAT_SHD_REVERSIEREN_3_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_SHD_REVERSIEREN_4_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_REVERSIER_URS | 1.0 | 1.0 | 0.0 | Reversierursache, siehe Tabelle TAB_SHD_ESH_REVERSIER_URS |
| STAT_SHD_REVERSIEREN_4_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_SHD_REVERSIEREN_4_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_SHD_REVERSIEREN_4_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_SHD_REVERSIEREN_4_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb) in 0,1 Volt-Schritten |
| STAT_SHD_REVERSIEREN_4_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_SHD_REVERSIEREN_5_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_REVERSIER_URS | 1.0 | 1.0 | 0.0 | Reversierursache, siehe Tabelle TAB_SHD_ESH_REVERSIER_URS |
| STAT_SHD_REVERSIEREN_5_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_SHD_REVERSIEREN_5_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_SHD_REVERSIEREN_5_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_SHD_REVERSIEREN_5_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb) in 0,1 Volt-Schritten |
| STAT_SHD_REVERSIEREN_5_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_ZAEHLER_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Reversierhäufigkeit wird bei jedem Reversier inkrementiert |
| STAT_ESH_REVERSIEREN_1_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_REVERSIER_URS | 1.0 | 1.0 | 0.0 | Reversierursache, siehe Tabelle TAB_SHD_ESH_REVERSIER_URS |
| STAT_ESH_REVERSIEREN_1_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_ESH_REVERSIEREN_1_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_ESH_REVERSIEREN_1_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_1_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb) in 0,1 Volt-Schritten |
| STAT_ESH_REVERSIEREN_1_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_2_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_REVERSIER_URS | 1.0 | 1.0 | 0.0 | Reversierursache, siehe Tabelle TAB_SHD_ESH_REVERSIER_URS |
| STAT_ESH_REVERSIEREN_2_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_ESH_REVERSIEREN_2_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_ESH_REVERSIEREN_2_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_2_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb) in 0,1 Volt-Schritten |
| STAT_ESH_REVERSIEREN_2_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_3_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_REVERSIER_URS | 1.0 | 1.0 | 0.0 | Reversierursache, siehe Tabelle TAB_SHD_ESH_REVERSIER_URS |
| STAT_ESH_REVERSIEREN_3_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_ESH_REVERSIEREN_3_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_ESH_REVERSIEREN_3_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_3_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb) in 0,1 Volt-Schritten |
| STAT_ESH_REVERSIEREN_3_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_4_URSACHE_NR | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Reversier-Ursache (1Byte); Liste erstellen mit vereinheitlichten Werten und nachfolgend einem Bereich der vom Lieferanten belegt werden kann. Tabellenname und Tabelle muss vom Lieferant festgelegt und befüllt werden |
| STAT_ESH_REVERSIEREN_4_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_ESH_REVERSIEREN_4_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_ESH_REVERSIEREN_4_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_4_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb) in 0,1 Volt-Schritten |
| STAT_ESH_REVERSIEREN_4_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_5_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_REVERSIER_URS | 1.0 | 1.0 | 0.0 | Reversierursache, siehe Tabelle TAB_SHD_ESH_REVERSIER_URS |
| STAT_ESH_REVERSIEREN_5_POS_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe Hallinkremente |
| STAT_ESH_REVERSIEREN_5_KM_WERT | km | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Angabe Kilometerstand |
| STAT_ESH_REVERSIEREN_5_ATEMP_WERT | °C | - | unsigned char | - | - | 0.5 | 1.0 | -40.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_ESH_REVERSIEREN_5_SPANNUNG_WERT | V | - | unsigned char | - | - | 1.0 | 10.0 | 0.3 | Betriebsspannung (Ausgang zu Antrieb) in 0,1 Volt-Schritten |
| STAT_ESH_REVERSIEREN_5_GESCHWINDIGKEIT_WERT | km/h | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Fahrzeuggeschwindigkeit (Codierung analog CAN-Signal) |

### RES_0XD1F6_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_DENORM_ZAEHLER_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Denormierhäufigkeit wird bei jedem Reversier inkrementiert |
| STAT_SHD_DENORM_1_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | - | - | - | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_SHD_DENORM_1_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_SHD_DENORM_1_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_SHD_DENORM_2_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | 1.0 | 1.0 | 0.0 | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_SHD_DENORM_2_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_SHD_DENORM_2_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_SHD_DENORM_3_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | 1.0 | 1.0 | 0.0 | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_SHD_DENORM_3_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_SHD_DENORM_3_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_SHD_DENORM_4_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | 1.0 | 1.0 | 0.0 | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_SHD_DENORM_4_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_SHD_DENORM_4_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_SHD_DENORM_5_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | 1.0 | 1.0 | 0.0 | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_SHD_DENORM_5_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_SHD_DENORM_5_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_ESH_DENORM_ZAEHLER_WERT | Ink | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Die Denormierhäufigkeit wird bei jedem Reversier inkrementiert |
| STAT_ESH_DENORM_1_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | 1.0 | 1.0 | 0.0 | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_ESH_DENORM_1_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_ESH_DENORM_1_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_ESH_DENORM_2_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | 1.0 | 1.0 | 0.0 | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_ESH_DENORM_2_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_ESH_DENORM_2_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_ESH_DENORM_3_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | 1.0 | 1.0 | 0.0 | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_ESH_DENORM_3_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_ESH_DENORM_3_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_ESH_DENORM_4_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | 1.0 | 1.0 | 0.0 | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_ESH_DENORM_4_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_ESH_DENORM_4_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |
| STAT_ESH_DENORM_5_URSACHE_NR | 0-n | - | unsigned char | - | TAB_SHD_ESH_DENORM_URS | 1.0 | 1.0 | 0.0 | Denormierungsursache, siehe Tabelle TAB_SHD_ESH_DENORM_URS |
| STAT_ESH_DENORM_5_POS_HALL_WERT | - | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Angabe der Hallinkremente (2-Byte) |
| STAT_ESH_DENORM_5_KM_WERT | - | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Kilometerstand (3-Byte) |

### RES_0XD1F7_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_STOPREASON_1_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_SHD_STOPREASON_2_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_SHD_STOPREASON_3_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_SHD_STOPREASON_4_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_SHD_STOPREASON_5_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_SHD_STOPREASON_6_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_SHD_STOPREASON_7_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_SHD_STOPREASON_8_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_SHD_STOPREASON_9_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_SHD_STOPREASON_10_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_1_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_2_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_3_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_4_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_5_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_6_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_7_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_8_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_9_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |
| STAT_ESH_STOPREASON_10_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORSTOPREASON | 1.0 | 1.0 | 0.0 | Grund des Motorstops siehe Tabelle TAB_FH_SHD_ESH_MOTORSTOPREASON |

### RES_0XDCA2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEITUNG_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status der Leitungsüberwachung |
| STAT_UNTERSPANNUNG_EXT_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Unterspannungsüberwachung der externen Batterie |
| STAT_EEPROM_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Überwachnung EEPROM |
| STAT_AKTIVER_SCHUTZ_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Aktiver Schutz |
| STAT_WAKE_UP_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Überwachung der WakeUp-Zeit |
| STAT_SIRENE_AKUSTIK_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Sirenenschaltkreis (Akustik) |
| STAT_TILT_NR | 0-n | - | signed char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Neigungsgeber |

### RES_0XDCA8_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_LED_NR | 0-n | - | signed char | - | TAB_DWA_LED | 1.0 | 1.0 | 0.0 | 0: Aus 1: Dauer-Ein 2: Blinken 3: Blitzen |

### RES_0XDCA9_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NEIGUNG_X_ACHSE_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Neigungswinkel X-Achse in Grad |
| STAT_NEIGUNG_Y_ACHSE_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Neigungswinkel Y-Achse in Grad |
| STAT_NEIGUNG_Z_ACHSE_WERT | ° | - | signed int | - | - | 1.0 | 10.0 | 0.0 | Neigungswinkel Z-Achse in Grad |

### RES_0XDCAA_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_CKM_OPT_ENTSCHAERFEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Optische Bestätigung bei entschärfen Aus; 1=  Optische Bestätigung bei entschärfen Ein |
| STAT_DWA_CKM_AKUST_ENTSCHAERFEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Akustische Bestätigung bei entschärfen Aus 1= Akustische Bestätigung bei entschärfen Ein |
| STAT_DWA_CKM_OPT_SCHAERFEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Optische Bestätigung bei schärfen Aus; 1=  Optische Bestätigung bei schärfen Ein |
| STAT_DWA_CKM_AKUST_SCHAERFEN_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Akustische Bestätigung bei schärfen Aus 1= Akustische Bestätigung bei schärfen Ein |
| STAT_DWA_CKM_OPT_SCHAERFEN_KLAPPE_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Optische Bestätigung bei schärfen über Klappe Aus; 1=  Optische Bestätigung bei schärfen über Klappe Ein |
| STAT_DWA_CKM_AKUST_SCHAERFEN_KLAPPE_EIN | 0/1 | - | signed char | - | - | 1.0 | 1.0 | 0.0 | 0= Akustische Bestätigung bei schärfen über Klappe Aus 1= Akustische Bestätigung bei schärfen über Klappe Ein |

### RES_0XDCB0_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_ALARM_MOTORHAUBE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Motorhaube; 1= DWA-Alarm ausgelöst durch Motorhaube |
| STAT_DWA_ALARM_FAT_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Fahrertür; 1= DWA-Alarm ausgelöst durch Fahrertür |
| STAT_DWA_ALARM_BFT_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Beifahrertür; 1= DWA-Alarm ausgelöst durch Beifahrertür |
| STAT_DWA_ALARM_FATH_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Fahrertür hinten; 1= DWA-Alarm ausgelöst durch Fahrertür hinten |
| STAT_DWA_ALARM_BFTH_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Beifahrertür hinten ; 1= DWA-Alarm ausgelöst durch Beifahrertür hinten |
| STAT_DWA_ALARM_HECKKLAPPE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Heckklappe; 1= DWA-Alarm ausgelöst durch Heckklappe |
| STAT_DWA_ALARM_HECKSCHEIBE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Heckscheibe; 1= DWA-Alarm ausgelöst durch Heckscheibe |
| STAT_DWA_ALARM_RESERVE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Reserve |
| STAT_DWA_ALARM_LEITUNGSUEBERWACHUNG_SINE_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Leitungsüberwachung SINE; 1= DWA-Alarm ausgelöst durch Leitungsüberwachung SINE |
| STAT_DWA_ALARM_MANIPULATION_AUTH_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Manipulation Authentisierung; 1= DWA-Alarm ausgelöst durch Manipulation Authentisierung |
| STAT_DWA_ALARM_USIS_A_UND_B_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz A und B; 1= DWA-Alarm ausgelöst durch Innenraumschutz A und B |
| STAT_DWA_ALARM_USIS_A_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz A; 1= DWA-Alarm ausgelöst durch Innenraumschutz A |
| STAT_DWA_ALARM_USIS_B_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz B; 1= DWA-Alarm ausgelöst durch Innenraumschutz B |
| STAT_DWA_ALARM_NEIGUNGSGEBER_X_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber X-Achse; 1= DWA-Alarm ausgelöst durch Neigungsgeber X-Achse |
| STAT_DWA_ALARM_NEIGUNGSGEBER_Y_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber Y-Achse; 1= DWA-Alarm ausgelöst durch Neigungsgeber Y-Achse |
| STAT_DWA_ALARM_NEIGUNGSGEBER_X_UND_Y_AUSGELOEST_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber X- und Y-Achse; 1= DWA-Alarm ausgelöst durch Neigungsgeber X- und Y-Achse |
| STAT_DWA_ALARM_SINE_SPANNUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch SINE Spannungsversorgung; 1= DWA-Alarm ausgelöst durch SINE Spannungsversorgung |
| STAT_DWA_ALARM_SINE_LIN_TELEGRAMM_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch SINE kein LIN-Telegramm absetzbar; 1= DWA-Alarm ausgelöst durch SINE kein LIN-Telegramm absetzbar |
| STAT_DWA_ALARM_PANIKALARM_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Panikalarm; 1= DWA-Alarm ausgelöst durch Panikalarm |
| STAT_DWA_ALARM_USIS_ABDECKUNG_EIN | 0/1 | high | unsigned char | - | - | - | - | - | Durch Abdecken des USIS Gitters wurde der Alarm ausgelöst. 0 = Keine Auslösung durch Abdeckung, 1 = Auslösung durch Abdeckung |
| STAT_DWA_ALARM_OBD_KOMMUNIKATION_EIN | 0/1 | high | unsigned char | - | - | - | - | - | OBD-Kommunikation wurde Alarm auslösen: 0 = Keine Auslösung durch OBD, 1 = OBD hat Alarm ausgelöst |

### RES_0XDCB2_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_IRS_SENS_EMPFINDLICHKEIT_NR | 0-n | high | unsigned char | - | TAB_DWA_USIS_EMPF | - | - | - | Aktuelle Empflindlichkeitsstufe |

### RES_0XDCDD_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_KONTAKT_FAHRERTUER_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Fahrertür |
| STAT_KONTAKT_BEIFAHRERTUER_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Beifahrertür |
| STAT_KONTAKT_FAHRERTUER_HINTEN_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Fahrertür hinten |
| STAT_KONTAKT_BEIFAHRERTUER_HINTEN_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Beifahrertür hinten |
| STAT_KONTAKT_MOTORHAUBE_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Motorhaube |
| STAT_KONTAKT_HECKKLAPPE_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Heckklappe |
| STAT_KONTAKT_HECKSCHEIBE_NR | 0-n | - | unsigned char | - | TAB_DWA_KLAPPENKONTAKT | 1.0 | 1.0 | 0.0 | Kontakt Heckscheibe |
| STAT_ZV_NR | 0-n | - | unsigned char | - | TAB_ZV_ST_CLSY | 1.0 | 1.0 | 0.0 | Status Zentralverriegelung |
| STAT_RESERVE_WERT | HEX | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve (noch nicht belegt) |

### RES_0XDD16_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OBD_UEBERWACHUNG | 0/1 | high | unsigned char | - | - | - | - | - | 0 = OBD-Überwachung nicht aktiv 1 = OBD-Überwachung aktiv |

### RES_0XDE3F_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FZD_ALARM_MOTORHAUBE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt MotorHaube |
| STAT_FZD_ALARM_FAT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt FAhrerTür |
| STAT_FZD_ALARM_BFT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt BeiFahrerTür |
| STAT_FZD_ALARM_FATH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt FAhrerTür Hinten |
| STAT_FZD_ALARM_BFTH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt BeiFahrerTür Hinten |
| STAT_FZD_ALARM_HECKKLAPPE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Heckklappe |
| STAT_FZD_ALARM_HECKSCHEIBE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Heckscheibe |
| STAT_FZD_ALARM_VORHALT_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme VORHALT |
| STAT_FZD_ALARM_LEITUNGSUEBERWACHUNG_SINE_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Leitungsüberwachung LIN-SINE |
| STAT_FZD_ALARM_MANIPULATION_AUTH_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Manipulationsschutz Authentifizierung |
| STAT_FZD_ALARM_USIS_KANAL_A_UND_B_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl USIS-Alarme gleichzeitig auf Kanal A und B (rechts + links) |
| STAT_FZD_ALARM_USIS_KANAL_A_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl USIS-Alarme nur auf Kanal A (rechts) |
| STAT_FZD_ALARM_USIS_KANAL_B_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl USIS-Alarme nur auf Kanal B (links) |
| STAT_SINE_ALARM_NEIGUNGSGEBER_X_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Neigungsgeber X-Achse |
| STAT_SINE_ALARM_NEIGUNGSGEBER_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Neigungsgeber Y-Achse |
| STAT_SINE_ALARM_NEIGUNGSGEBER_X_UND_Y_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Neigungsgeber X- und Y-Achse |
| STAT_SINE_ALARM_SPANNUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Unterbrechung Spannungsversorgung der LIN-SINE |
| STAT_SINE_ALARM_LIN_TELEGRAMM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme LIN-Bus: kein Telegramm absetzbar |
| STAT_FZD_ALARM_PANIKALARM_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Panikalarm |
| STAT_DWA_ALARM_USIS_ABDECKUNG_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der durch Abdecken des USIS Gitters ausgelösten Alarme |
| STAT_DWA_ALARM_OBD_KOMMUNIKATION_WERT | - | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl der durch OBD-Kommunikation ausgelösten Alarme |

### RES_0XF000_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XF001_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | - | - | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XF002_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_CODING_SINE_ERGEBNIS | - | - | + | 0-n | high | unsigned char | - | TAB_CODING_SINE_ERGEBNIS | - | - | - | Text |

### RES_0XF004_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HINTERGRUNDBILD_INIT | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE | - | - | - | tbd |

### RES_0XF009_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_EOL_IMAGE_TEST_RESULT | - | - | + | 0-n | high | unsigned char | - | TAB_ROUTINE | - | - | - | Result of EOL Test |

### RES_0XF00A_R

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DEPTH_VALUE_WERT | - | - | + | mm | high | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Measured depth, mean value |

### RES_0XF152_D

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HW_MODIFICATION_INDEX_WERT | HEX | high | unsigned char | - | - | - | - | - | Index of hardware modification:  FF: Not supported index |
| - | Bit | high | BITFIELD | - | BF_22_F152_SUPPLIERINFO | - | - | - | Tab Supplierinfo |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROGRAMMING_COUNTER | 0x2502 | - | Programming-Counter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2502_D |
| PROGRAMMING_COUNTER_MAX_VALUE | 0x2503 | STAT_PROG_MAX_WERT | maximalen Anzahl von Programmiervorgängen | - | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| FLASH_TIMING_PARAMETER | 0x2504 | - | Programmierspezifische Timing Parameter | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x2504_D |
| MILE_KM_EEPROM | 0x2540 | STAT_MILE_KM_EEPROM_DATA | Im EEPROM abgelegter Kilometerstand. | DATA | - | High | data[3] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _GESTIK_EMS_SENSOR_TRACEABILITY | 0x4000 | - | Read camera sensor  information | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4000_D | RES_0x4000_D |
| _GESTIK_EMS_LED_TRACEABILITY | 0x4001 | - | Read7wRITE camera LED board  information | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4001_D | RES_0x4001_D |
| _GESTIK_MMS_TRACEABILITY | 0x4002 | - | Read product information | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4002_D | RES_0x4002_D |
| _GESTIK_BOOT_PARTITION | 0x4004 | - | Set the boot partition | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4004_D | RES_0x4004_D |
| _GESTIK_RESTART | 0x4006 | - | Only gestik function reset | - | - | - | - | - | - | - | - | - | 2E | ARG_0x4006_D | - |
| _GESTIK_CAMERA_SIMU_FAIL | 0x4008 | - | Simulate a failure  on the camera | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4008_D | RES_0x4008_D |
| _GESTIK_MB_SIMU_DTC | 0x4009 | - | DTC simulation | - | - | - | - | - | - | - | - | - | 2F | ARG_0x4009_D | RES_0x4009_D |
| _GESTIK_SW_VERSION | 0x400A | - | Read SW version number | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x400A_D |
| _GESTIK_FPGA_VERSION | 0x400B | STAT_FPGA_VERSION_DATA | Read FPGA version number | DATA | - | High | data[4] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _GESTIK_ENABLE_GEST_RECO | 0x400C | - | enable/disable the gesture recognition | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x400C_D | RES_0x400C_D |
| _GESTIK_CARLIB_VERSION | 0x400D | STAT_CARLIB_VERSION_DATA | Read CarLIB version number | DATA | - | High | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _GESTIK_POWER_CAMERA | 0x400E | - | Kamera An-/ Ausschalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0x400E_D | - |
| _GESTIK_PRELOADER_VERSION | 0x400F | STAT_PRELOADER_VERSION_DATA | Read Preloader version number | DATA | - | High | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _GESTIK_LIVE_FPS_GESTURE_DETECTION | 0x4010 | STAT_LIVE_FPS_GESTURE_DETECTION_WERT | FPS output from Gesture recognition | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _GESTIK_LIVE_FPS_SENSOR | 0x4011 | STAT_LIVE_FPS_SENSOR_WERT | FPS output from sensor | HEX | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _GESTIK_CEM_STATISTICS | 0x4012 | - | CEM Statistics | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4012_D |
| _GESTIK_CHANGE_MODE | 0x4013 | - | Get and Set the current mode of the camera  | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4013_D | RES_0x4013_D |
| _GESTIK_LIVE_GESTURE_INFORMATION | 0x4015 | - | Read IPC gesture data | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4015_D |
| _GESTIK_AUTOKALIBRATION_OFFSET | 0x4016 | STAT_AUTOKALIBRIERUNG_OFFSET_WERT |  read the calculated DSHIFT offset from  gesture board | mm | - | High | unsigned int | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _GESTIK_BOOTLOADER_VERSION | 0x4017 | STAT_BOOTLOADER_VERSION_DATA | Bootloader Version  | DATA | - | High | data[6] | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| _GESTIK_AUTOCALIBRATION_INFO | 0x401A | - | _GESTIK_AUTOCALIBRATION_INFO | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x401A_D |
| _GESTIK_DSHIFT | 0x401B | - | Dshift | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401B_D | RES_0x401B_D |
| _GESTIK_ENABLED | 0x401C | STAT_GESTIK_ENABLE | 0x00: GB is OFF (PWR_EN2 = FALSE) 0x01: GB is ON (PWR_EN2 = TRUE) | 0/1 | - | High | unsigned char | - | - | - | - | - | 22 | - | - |
| _GESTIK_AUTOKALIBRATION_AUTOCAL_OFFSET | 0x401D | - | AUTOCAL_OFFSET  | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x401D_D | RES_0x401D_D |
| _SHD_ESH_THERMOMONITOR | 0x4100 | - | Konfiguriert die Thermomonitor Funktion | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4100_D | RES_0x4100_D |
| SHD_ESH_FREIGABE_AKTIV | 0x4101 | - | Status der Freigabe | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4101_D | RES_0x4101_D |
| _SHD_ESH_EMERGENCY_PANIC | 0x4103 | - | gezielter Einsatz des Emergency- oder Panik-Modus | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4103_D | RES_0x4103_D |
| _ESH_BEWERTUNG_KENNLINIE_SCHIEBELAGE | 0x4107 | - | ESH_BEWERTUNG_KENNLINIE_SCHIEBELAGE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4107_D |
| _SHD_BEWERTUNG_KENNLINIE_AUSSTELLLAGE_1 | 0x4108 | - | SHD_BEWERTUNG_KENNLINIE_AUSSTELLLAGE_1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4108_D |
| _SHD_BEWERTUNG_KENNLINIE_SCHIEBELAGE_1 | 0x4109 | - | SHD_BEWERTUNG_KENNLINIE_SCHIEBELAGE_1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4109_D |
| _DWA_TRIGGER | 0x600F | - | Status Alarm Trigger | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x600F_D |
| _DWA_PANIKSPEICHER | 0x6011 | - | Status/Steuern DWA_PANIKSPEICHER. Für Details siehe Sub-Tabelle(n) | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6011_D |
| _DWA_ALARM_ANZAHL | 0x6012 | - | Anzahl ausgelöster Alarme | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6012_D |
| _DWA_SINE_ALARMSPEICHER | 0x6013 | - | Lesen / schreiben des Alarmspeichers SINE | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6013_D | RES_0x6013_D |
| _DWA_SINE_FEHLERSPEICHER | 0x6014 | - | Lesen / Schreiben Fehlerspeicher SINE | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6014_D | RES_0x6014_D |
| _DWA_SINE_VERPOLZAEHLER | 0x6015 | - | Lesen / Schreiben SINE Verpolzähler | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6015_D | RES_0x6015_D |
| SHD_ESH_EINLERNEN | 0xA17C | - | Einlernen des Schiebedachs und elektrischer Schiebehimmel Argument siehe Sub-Tabelle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17C_R | RES_0xA17C_R |
| SHD_ESH_VERFAHREN_ZEIT | 0xA183 | - | Verfährt die angegebene Scheibe für eine bestimmte Zeit unter Berücksichtigung der angegebenen Funktionen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA183_R | RES_0xA183_R |
| SHD_ESH_VERFAHREN_SONDERFUNKTION | 0xA184 | - | Führt die angegebene Automatikfunktion aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA184_R | RES_0xA184_R |
| SHD_ESH_VERFAHREN_HALL | 0xA185 | - | Verfährt die angegebene Scheibe auf eine bestimmte Position unter Angabe der Zielposition in Hallinkrementen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA185_R | RES_0xA185_R |
| SHD_ESH_VERFAHREN_PROZENT | 0xA186 | - | Angabe der Zielposition in Prozent | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA186_R | RES_0xA186_R |
| SHD_ESH_TASTER_STEUERN | 0xA188 | - | Simulation des Tasters (Tastendruck) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA188_R | RES_0xA188_R |
| GESTIK_SELBSTTEST | 0xA18A | - | Selbsttest von Gestikkamera | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA18A_R |
| GESTIK_AUTOKALIBRATION_SCHNELL_LERNEN | 0xA18C | - | Startet das schnelle Einlernen der In-Car Autokalibrierung | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xA18C_R |
| DWA_SINE_ANSTEUERUNG | 0xAA70 | - | Ansteuerung der Sirene für maximal 5 Sekunden | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_SINE_BATT_LEVEL_RESET | 0xAA71 | - | Reset des Batterie-Levels. Nur nach Austausch der Batterie durchführen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_SELBSTTEST | 0xAA76 | - | Selbsttest DWA-System. Gefundene Fehler werden im Fehlerspeicher abgelegt | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA76_R | RES_0xAA76_R |
| DWA_SCHAERFEN | 0xAA79 | - | 0: DWA entschärfen 1: DWA schärfen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA79_R | - |
| DWA_CAR_KEY_MEMORY_RESET | 0xAA7B | - | Reset des CarKeyMemorys auf die ursprünglichen Codierwerte | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA7B_R | - |
| SHD_ESH_NORMIERUNG_LOESCHEN | 0xD17C | - | Denormiert die angebenen Motor | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD17C_D | - |
| SHD_ESH_KENNLINIE_LOESCHEN | 0xD17D | - | Löscht die Kennlinie. Es wird nur die Kennlinie gelöscht. Die Normierung bleibt erhalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD17D_D | - |
| SHD_ESH_RELAIS_STEUERN | 0xD17E | - | Steuert das/die Relais zum Verfahren des SHD / ESH an | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD17E_D | - |
| SHD_HALLSENSOREN | 0xD180 | - | Status der Hallsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD180_D |
| SHD_ESH_TASTER | 0xD192 | - | Status / Simulation Taster Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD192_D |
| ESH_VORHANDEN | 0xD193 | STAT_VORHANDEN_ESH | 0x00: elektrischer Schiebehimmel nicht vorhanden 0x01: elektrischer Schiebehimmel vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SHD_ESH_TASTER_VORHANDEN | 0xD194 | STAT_VORHANDEN_TASTER_SHD_ESH | 0x00: Kein SHD-Taster vorhanden 0x01: SHD-Taster vorhanden | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SHD_VORHANDEN | 0xD195 | STAT_VORHANDEN_SHD | 1: Schiebedach vorhanden | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SHD_BEWEGUNG | 0xD196 | - | Status Bewegung Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD196_D |
| SHD_ESH_HALLVERSORGUNG | 0xD19E | - | Schaltet die Hallversorgung ein / aus | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD19E_D | - |
| SHD_STATUS_DETAIL | 0xD1A6 | - | Erweiterter Status Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A6_D |
| SHD_RELAIS | 0xD1B9 | - | Status Relais Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B9_D |
| ESH_BEWEGUNG | 0xD1BA | - | Status elektrischer Schiebehimmel Bewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BA_D |
| ESH_HALLSENSOREN | 0xD1BB | - | Status Hallsensoren elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BB_D |
| ESH_RELAIS | 0xD1BC | - | Status Relais elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BC_D |
| ESH_STATUS_DETAIL | 0xD1BD | - | Erweiterte Informationen elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BD_D |
| SHD_STATISTIKZAEHLER_LESEN | 0xD1BE | - | Auslesen des Statistikzählers Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BE_D |
| SHD_STATISTIKZAEHLER_LOESCHEN | 0xD1BF | - | Löscht den Statistikzähler Schiebedach | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1BF_D | - |
| ESH_STATISTIKZAEHLER_LESEN | 0xD1C0 | - | Auslesen des Statistikzähler elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1C0_D |
| ESH_STATISTIKZAEHLER_LOESCHEN | 0xD1C1 | - | Löscht den Statistikzähler elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1C1_D | - |
| GESTIK_VALIDATE_GESTURE | 0xD1C6 | - | Gestikerkennung Test und Validierung | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD1C6_D | RES_0xD1C6_D |
| GESTIK_KAMERA_INFO | 0xD1C7 | - | Infos aus Gestikkamera | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1C7_D |
| GESTIK_KAMERA_CODIERT | 0xD1C9 | STAT_VORHANDEN_GESTIKKAMERA | 0x00: Gestikkamera nicht vorhanden 0x01: Gestikkamera vorhanden | 0/1 | - | - | unsigned char | - | - | - | - | - | 22 | - | - |
| SHD_ESH_REVERSIER_LOGGER | 0xD1F5 | - | Lesen/Löschen Reversierlogger | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xD1F5_D | RES_0xD1F5_D |
| SHD_ESH_DENORMIERUNGS_LOGGER | 0xD1F6 | - | Lesen/Löschen Denormierungslogger | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD1F6_D | RES_0xD1F6_D |
| SHD_ESH_MOTORSTOP_LOGGER | 0xD1F7 | - | Lesen/Löschen Motorstopplogger | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xD1F7_D | RES_0xD1F7_D |
| DWA_SINE_LIN | 0xDCA1 | STAT_VORHANDEN_LIN_SIRENE | 0: Keine LIN-Sirene verbaut 1: LIN-Sirene verbaut | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DWA_SINE | 0xDCA2 | - | Status der Sirene / Neigungsgeber | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCA2_D |
| DWA_SINE_BATT_LEVEL | 0xDCA3 | STAT_SIRENE_INTERNER_BATTERIE_LEVEL_NR | Status interne Batterie: Siehe Tabelle TAB_SINE_BATT_LEVEL | 0-n | - | High | unsigned char | TAB_SINE_BATT_LEVEL | - | - | - | - | 22 | - | - |
| DWA_LED | 0xDCA8 | - | Status/Steuern DWA-LED. Für Details siehe Sub-Tabelle(n) | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDCA8_D | RES_0xDCA8_D |
| DWA_SINE_NEIGUNG | 0xDCA9 | - | Neigungswinkel (X-, Y- und Z-Achse) des Fahrzeugs. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCA9_D |
| DWA_CAR_KEY_MEMORY | 0xDCAA | - | Status / Steuern CarKeyMemory-Funktionalität der DWA | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDCAA_D | RES_0xDCAA_D |
| DWA_INTERN | 0xDCAC | STAT_DWA_INTERN_NR | 0: entschärft; | 0-n | - | - | unsigned int | TAB_DWA_INTERN_2 | - | - | - | - | 22 | - | - |
| DWA_ALARM_AUSGELOEST | 0xDCB0 | - | Status, welcher Alarm ausgelöst hat | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCB0_D |
| DWA_VORHANDEN | 0xDCB1 | STAT_VORHANDEN_DWA | 0: Keine DWA verbaut 1: DWA verbaut | 0/1 | - | - | signed char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DWA_USIS_EMPFINDLICHKEIT | 0xDCB2 | - | aktuelle Empfindlichkeitsstufe Sensor Innenraumschutz | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDCB2_D | RES_0xDCB2_D |
| DWA_ALARMSPEICHER_FZD | 0xDCB3 | - | Alarmspeicher FZD | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCB3_D | - |
| DWA_SCHNELLTEST | 0xDCB5 | - | Aktiviert den DWA-Schnelltest Modus (Sensoren werden geschaerft) 0: Vorgang beenden 1: leise  2: normale Lautstärke | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCB5_D | - |
| DWA_TEMPERATUR | 0xDCBD | STAT_DWA_TEMPERATUR_WERT | Interne Temperatur der DWA | °C | - | - | signed int | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| DWA_SPANNUNG | 0xDCBF | STAT_DWA_SPANNUNG_WERT | Spannung der DWA | V | - | - | unsigned char | - | 1.0 | 10.0 | 0.0 | - | 22 | - | - |
| DWA_KLAPPENKONTAKTE | 0xDCDD | - | Status der eingelesenen Klappenkontakte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCDD_D |
| OBD_UEBERWACHUNG | 0xDD16 | - | Status der OBD-Überwachung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD16_D | RES_0xDD16_D |
| DWA_ALARMZAEHLER_FZD | 0xDE3F | - | Gibt die Anzahl der Alarme pro Alarmtrigger zurück. | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDE3F_D | RES_0xDE3F_D |
| _SHD_ESH_DEBUG_OUTPUT_KONF | 0xF000 | - | Umsetzung: MT | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000_R | RES_0xF000_R |
| _SHD_ESH_XCP_OUTPUT_KONF | 0xF001 | - | Umsetzung SRClient | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF001_R |
| DWA_SINE_CODIERDATEN_SCHREIBEN | 0xF002 | - | Veranlasst das Schreiben der Codierdaten vom FZD an die SINE. | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF002_R |
| _GESTIK_HINTERGRUNDBILD_INITIALISIEREN | 0xF004 | - | tbd | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF004_R |
| _GESTIK_EOL_IMAGE_TEST | 0xF009 | - | Get a Image for the EOL Test | - | - | - | - | - | - | - | - | - | 31 | - | RES_0xF009_R |
| _GESTIK_DEPTH_MEASUREMENT | 0xF00A | - | Measure depth value on any position in FoV | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF00A_R | RES_0xF00A_R |
| READHWMODIFICATIONINDEX | 0xF152 | - | Dieser Service kommt nur zum Einsatz, wenn es eine geringfügige Hardwareänderung an dem Steuergerät gegeben hat, die nicht zu einer Änderung der Sachnummer bzw. der Hardware SGBM-IDs geführt hat. Eine solche Änderung ist von außen nicht diagnostizierbar, daher wurde dieser Dienst dafür eingeführt. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xF152_D |
| ACTIVE_DIAGNOSTIC_SESSION | 0xF186 | STAT_ACTIVE_DIAGNOSTIC_SESSION | activeDiagnosticSession | 0-n | - | High | unsigned char | RDBI_ADS_DOP | - | - | - | - | 22 | - | - |

### TAB_BOOT_PARTITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Boot flag set to partition 1 |
| 0x01 | Boot flag set to partition 2 |

### TAB_CODING_SINE_ERGEBNIS

| WERT | TEXT |
| --- | --- |
| 0x00 | Codierung erfolgreich |
| 0x01 | Codierung fehlgeschlagen |
| 0x02 | Codierung läuft |
| 0xFF | Wert ungültig |

### TAB_DWA_ALARMSPEICHER

| WERT | TEXT |
| --- | --- |
| 0x00 | Alarm FZD: Klappenkontakt Motorhaube |
| 0x01 | Alarm FZD: Klappenkontakt Fahrertür |
| 0x02 | Alarm FZD: Klappenkontakt Beifahrertür |
| 0x03 | Alarm FZD: Klappenkontakt Fahrertür Hinten |
| 0x04 | Alarm FZD: Klappenkontakt Beifahrertür Hinten |
| 0x05 | Alarm FZD: Klappenkontakt Heckklappe |
| 0x06 | Alarm FZD: Klappenkontakt Heckscheibe |
| 0x07 | Alarm FZD: Klappenkontakt VORHALT |
| 0x08 | Alarm FZD: Leitungsüberwachung LIN-SINE |
| 0x09 | Alarm FZD: Manipulation Authentisierung |
| 0x0A | Alarm FZD: Ultraschall Kanal A + B (rechts + links) |
| 0x0B | Alarm FZD: Ultraschall Kanal A (rechts) |
| 0x0C | Alarm FZD: Ultraschall Kanal B (links) |
| 0x0D | Alarm SINE: Neigungssensor: Neigung X-Achse |
| 0x0E | Alarm SINE: Neigungssensor: Neigung Y-Achse |
| 0x0F | Alarm SINE: Neigungssensor: Neigung X/Y-Achse |
| 0x10 | Alarm SINE: Unterbrechung Spannungsversorgung |
| 0x11 | Alarm SINE: LIN-Bus: kein Telegramm absetzbar |
| 0x12 | Alarm FZD: USIS Abdeckung |
| 0x13 | Alarm FZD: OBD Kommunikation Ethernet |
| 0x14 | Alarm FZD: OBD Kommunikation D-CAN |
| 0xFF | Unbekannter Alarm |

### TAB_DWA_DEAKTIVIERUNG_USIS_NG_EREIGNIS_TYP

| WERT | TEXT |
| --- | --- |
| 0x00 | Deaktivierung über ID-Geber |
| 0x01 | Deaktivierung wegen Regenschließen |
| 0x02 | Aktiviert nach Regenschließen |
| 0x03 | Deaktivierung wegen Motorfernstart |
| 0x04 | Aktivierung nach Motorfernstart |
| 0x05 | Deaktivierung wegen Komfortschließen |
| 0x06 | Aktivierung nach Komfortschließen |
| 0x07 | Deaktivierung durch App |
| 0x08 | Aktivierung durch App |
| 0xFF | Ungültiger Wert |

### TAB_DWA_INTERN_2

| WERT | TEXT |
| --- | --- |
| 0x00 | DWA entschärft |
| 0x01 | DWA wird entschärft |
| 0x02 | DWA in Schärfung |
| 0x03 | DWA geschärft |
| 0x04 | DWA geschärft - Klappenkontakte noch ausgeblendet |
| 0x05 | DWA geschärft - nach RSU |
| 0x06 | DWA geschärft - IRS nicht aktiv |
| 0x07 | DWA geschärft - Neigungssensor nicht aktiv |
| 0x08 | DWA geschärft - IRS und Neigungsgebersensor nicht aktiv |
| 0x09 | DWA geschärft - IRS und Neigungsgebersensor durch Benutzer deaktiviert |
| 0x0A | DWA geschärft - nach RSU, IRS und Neigungsgebersensor durch Benutzer deaktiviert |
| 0x0B | DWA Alarm |
| 0x0C | DWA Pause nach Alarm |
| 0x0D | DWA Panik Alarm Mode |
| 0x0E | DWA Transportmode |
| 0x0F | DWA Werkstattmode |
| 0x10 | DWA Fertigungsmode |
| 0x11 | DWA Energiesparmode wird beendet |
| 0x12 | DWA Powerdown Mode |
| 0x13 | DWA Schnelltest aktiv |
| 0x14 | DWA Selbsttest aktiv |
| 0xFF | unbekannter Status |
| 0xFFFF | Wert ungültig |

### TAB_DWA_KLAPPENKONTAKT

| WERT | TEXT |
| --- | --- |
| 0x00 | geschlossen |
| 0x01 | offen |
| 0x02 | unplausibel |
| 0x03 | ungültig |

### TAB_DWA_LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Dauer-Ein |
| 0x02 | Blinken |
| 0x03 | Blitzen |
| 0xFF | unbekannter Zustand |

### TAB_DWA_LED_ARG

| WERT | TEXT |
| --- | --- |
| 0x0000 | Aus |
| 0x0001 | Dauer-Ein |
| 0x0002 | Blinken |
| 0x0003 | Blitzen |
| 0xFFFF | unbekannter Zustand |

### TAB_DWA_PRUEFUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | NEIN |
| 0x01 | JA |
| 0xFF | Signal ungültig |

### TAB_DWA_PRUEFUNG_INV

| WERT | TEXT |
| --- | --- |
| 0x00 | JA |
| 0x01 | NEIN |
| 0xFF | Signal ungültig |

### TAB_DWA_RQ_ENGR_PFN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Remote Start nicht aktiv |
| 0x02 | Remote Start aktiv |
| 0x03 | Signal unbefüllt |
| 0xFF | Ungueltig |

### TAB_DWA_RSU_ARM

| WERT | TEXT |
| --- | --- |
| 0x00 | DWA_nicht_schärfen |
| 0x01 | DWA_schärfen |
| 0x03 | Signal_unbefüllt |
| 0xFF | Wert ungültig |

### TAB_DWA_SCHNELLTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Abbrechen |
| 0x01 | Schnelltest leise |
| 0x02 | Schnelltest normal |

### TAB_DWA_SELBSTTEST

| WERT | TEXT |
| --- | --- |
| 0x00 | Abbruch |
| 0x01 | Selbsttest Komplettes DWA-System |
| 0x02 | Selbsttest Innenraumschutz |
| 0x03 | Selbsttest Neigungssgeber |

### TAB_DWA_SELBSTTEST_ERG

| WERT | TEXT |
| --- | --- |
| 0x00 | Selbsttest NIO |
| 0x01 | Selbsttest IO |
| 0x02 | Selbsttest läuft |

### TAB_DWA_SINE_INTERN

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Fehler aktiv |
| 0x02 | Fehler war aktiv |
| 0x03 | ungültig |
| 0x04 | nicht unterstüzt |

### TAB_DWA_STANDHEIZUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion / nicht verfügbar |
| 0x01 | Standheizung AUS |
| 0x02 | Standheizung EIN |
| 0x03 | Signal ungültig |

### TAB_DWA_STANDKLIMA

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion / nicht verfügbar |
| 0x01 | Standklimatisierung AUS |
| 0x02 | Standklimatisierung EIN |
| 0x03 | Signal ungültig |

### TAB_DWA_STANDLUEFTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion / nicht verfügbar |
| 0x01 | Standlüftung AUS |
| 0x02 | Standlüftung EIN |
| 0x03 | Signal ungültig |

### TAB_DWA_STATUS_FENSTER_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Fenster geschlossen |
| 0x01 | Zwischenstellung |
| 0x02 | Fenster offen |
| 0x03 | Signal ungültig |

### TAB_DWA_STATUS_GEBLAESE

| WERT | TEXT |
| --- | --- |
| 0x00 | Gebläse AUS |
| 0x01 | Gebläse EIN |
| 0x03 | Signal ungültig |

### TAB_DWA_STATUS_RESTWAERME

| WERT | TEXT |
| --- | --- |
| 0x00 | Restwärme AUS |
| 0x01 | Restwärme EIN |
| 0x03 | Signal ungültig |

### TAB_DWA_STATUS_SHD_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Geschlossen |
| 0x01 | Zwischenstellung |
| 0x02 | Geöffnet |
| 0x03 | Ungültiger Status |

### TAB_DWA_ST_CONN_HSFZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Verbindung besteht nicht |
| 0x01 | Verbindung besteht |
| 0xFF | Wert ungültig |

### TAB_DWA_ST_DCAN_COMM

| WERT | TEXT |
| --- | --- |
| 0x00 | Kommunikation nicht aktiv |
| 0x01 | Kommunikation ist aktiv vorhanden |
| 0x03 | Ungueltig |
| 0xFF | Wert ungültig |

### TAB_DWA_ST_ENGR_PFN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine_Aktion |
| 0x01 | Remote_Start_nicht_aktiv |
| 0x02 | Remote_Start_aktiv |
| 0x03 | Signal_unbefüllt |
| 0xFF | Ungültig |

### TAB_DWA_ST_RN_CLO

| WERT | TEXT |
| --- | --- |
| 0x00 | Regenschliessen_deaktiviert + Fehler |
| 0x01 | Regenschliessen_aktiviert + Fehler |
| 0x02 | Regenschliessen_deaktiviert |
| 0x03 | Regenschliessen_aktiviert |
| 0x0D | Funktionsschnittstelle_ist_nicht_verfuegbar |
| 0x0E | Funktion_meldet_Fehler |
| 0x0F | Signal_unbefüllt |
| 0xFF | Wert ungültig |

### TAB_DWA_UEBERWACHUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht überwacht |
| 0x01 | überwacht |
| 0xFF | Signal ungültig |

### TAB_DWA_USIS_EMPF

| WERT | TEXT |
| --- | --- |
| 0x00 | Innenraumschutz (IRS) inaktiv |
| 0x01 | IRS Normalmode |
| 0x02 | Min. 1 Fenster geöffnet oder SHD/PDK gekippt |
| 0x03 | Klimaanlage / Zuheizer |
| 0x04 | SHD/PDK geöffnet |
| 0xFF | ungültiger Wert |

### TAB_FH_PANIKMODUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Panikmodus nicht freigeschalten |
| 0x01 | Panikmodus freigeschalten |
| 0x03 | Freigabe Panikmodus ungültig |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_BEWEGUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Element steht |
| 0x01 | Element fährt auf |
| 0x02 | Reversieren Mautlauf |
| 0x03 | Reversieren Emergency-Mode |
| 0x04 | Element fährt zu |
| 0x05 | Element fährt zu Emergency-Mode |
| 0x06 | Element fährt zu Panic-Mode |
| 0x07 | Einlernvorgang aktiv |
| 0x08 | stellt aus |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_EINLERNEN

| WERT | TEXT |
| --- | --- |
| 0x01 | Einlernen ohne Kraftbegrenzung |
| 0x02 | Einlernen mit Kraftbegrenzung |
| 0x03 | Einlernen mit Kraftbegrenzung und Not Stop |
| 0x04 | Reserviert für Manuelles Einlernen |
| 0x05 | Normieren (nur für FH) |

### TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | normal Verfahren |
| 0x01 | Emergency Modus |
| 0x02 | Panic Modus |

### TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | normal verfahren |
| 0x01 | Emergency Modus |
| 0x02 | Panic Modus |

### TAB_FH_SHD_ESH_FREIGABE

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Freigabe |
| 0x01 | Freigabe vorhanden |
| 0x03 | Freigabe ungültig |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Leitungsunterbrechung |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Kurzschluss nach Ubatt |
| 0x04 | Kurzschluss nach Ubatt oder Leitungsunterbrechung |
| 0xFF | ungültiger Zustand |

### TAB_FH_SHD_ESH_INIT

| WERT | TEXT |
| --- | --- |
| 0x01 | Element normiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken gültig |
| 0x02 | Element denormiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken gültig |
| 0x03 | Element normiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken gültig |
| 0x04 | Element denormiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken gültig |
| 0x05 | Element normiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken ungültig |
| 0x06 | Element denormiert, Adaptionsdaten Schließen gültig, Adaptionsdaten Senken ungültig |
| 0x07 | Element normiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken ungültig |
| 0x08 | Element denormiert, Adaptionsdaten Schließen ungültig, Adaptionsdaten Senken ungültig |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_LAGE_NR

| WERT | TEXT |
| --- | --- |
| 0x01 | Ausstelllage |
| 0x02 | Schiebelage |
| 0xFF | Funktion nicht unterstützt |

### TAB_FH_SHD_ESH_LAGE_NR_ARG

| WERT | TEXT |
| --- | --- |
| 0x01 | Ausstelllage |
| 0x02 | Schiebelage |

### TAB_FH_SHD_ESH_LAGE_NR_ARG_ENTW

| WERT | TEXT |
| --- | --- |
| 0x01 | Ausstelllage |
| 0x02 | Schiebelage |

### TAB_FH_SHD_ESH_MOTORSTOPREASON

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor läuft |
| 0x01 | Position erreicht |
| 0x02 | Bewegung abgebrochen durch Bedienkozept |
| 0x03 | Normierung gefunden |
| 0x04 | Nachnormierung durchgeführt |
| 0x05 | Einklemmen erkannt |
| 0x06 | Reversierposition erreicht |
| 0x07 | Blockieren erkannt |
| 0x08 | Motor steht |
| 0x09 | Sicherheitszeitüberlauf |
| 0x0A | Drehriuchtung passt nicht zur Hallauswertung |
| 0x0B | falsche Zielposition (zu niedrig) |
| 0x0C | falsche Zielposition (zu hoch) |
| 0x0D | Motor zu warm |
| 0x0E | Fehler in der Motoransteuerungs-HW |
| 0x0F | Motorkurzschluss |
| 0x10 | Reset während Motorbewegung |
| 0x11 | HALL Plus verloren |
| 0x12 | Motorspannung nicht im Betriebsbereich |
| 0x13 | Fehler in Hallsensoren-HW |
| 0x14 | keine OSEK-Rechenzeit für EkS-Algorithmus zugeteilt |
| 0x15 | Automove-Anforderung abgelehnt |
| 0x16 | Denormiert während Motorbewegung |
| 0x17 | NVRAM schreiben oder lesen für Block A Fehler verhindet ein Verfahren (Nach drei versuchen) |
| 0x18 | Bewegung gestoppt, Codierungvorgang gestartet |
| 0x19 | Zielposition vom Bedienkonzept unplausibel |
| 0x1A | Motorstart nicht möglich Timeout |
| 0x1B | Notfall stop |
| 0x1C | Motorbewegung Start-Zeit überschritten |
| 0x1D | Motor stoppt nach Emergency Reversierer |
| 0x1E | Hall Error |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_MOTORTEMPERATUR

| WERT | TEXT |
| --- | --- |
| 0x01 | Motortemperatur OK |
| 0x02 | Motortemperatur 90% des maximal zulässigen Wertes erreicht |
| 0x03 | Motortemperatur 100% des maximal zulässigen Wertes erreicht |
| 0xFF | Motortemperatur ungültig |

### TAB_FH_SHD_ESH_MT_LIEFERANT

| WERT | TEXT |
| --- | --- |
| 0x01 | Brose |
| 0x02 | Conti |
| 0x03 | Magna |
| 0x04 | Webasto |
| 0x05 | Inalfa |
| 0x06 | Arvin Meritor |
| 0x07 | Lames |
| 0x08 | Inteva |
| 0xFE | Dummy Motortreiber |
| 0xFF | ungültiger Hersteller |

### TAB_FH_SHD_ESH_NORMIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Initialisierung nicht gestartet |
| 0x01 | Initialisierung läuft |
| 0x02 | Initialisierung erfolgreich abgeschlossen |
| 0x03 | Abbruch durch Benutzer, Notstop |
| 0x04 | Abbruch durch Benutzer, Diagnose |
| 0x05 | Abbruch durch Reversieren |
| 0x06 | Fehler: Initialisierung |
| 0x07 | Fehler: keine FH-Freigabe |
| 0x08 | Fehler: Vorgang kann nicht gestartet werden, weil Tür offen |
| 0x09 | Fehler: Vorgang kann nicht gestartet werden, weil Verdeck/VHT offen |
| 0x0A | Fehler: Vorgang kann nicht gestartet werden, weil SG nicht codiert |
| 0xF0 | Fehler: allgemeiner Fehler |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Element in Bewegung |
| 0x01 | Element komplett geschlossen |
| 0x02 | Element komplett offen |
| 0x03 | Element steht in Zwischenpositon |
| 0x04 | Element steht auf Position Kurzhub  nur FH |
| 0x05 | Element steht auf Position Langhub  nur FH |
| 0x06 | Element steht auf Position Cabrio nur FH |
| 0x07 | Element steht in Ausstellage nur SHD/PDK |
| 0x08 | Element steht in Komfortposition nur PDK |
| 0x09 | Element steht in Anti-Wummer Position nur SHD |
| 0x0A | Element steht in Crash-Position |
| 0xA0 | Element steht in Demontageposition |
| 0xA1 | Element steht in Serviceposition A |
| 0xA2 | Element steht in Serviceposition B |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_SFK1

| WERT | TEXT |
| --- | --- |
| 0x00 | Kurzhub |
| 0x01 | Langhub/Einstiegshilfe |
| 0x02 | Cabrio Position |
| 0x03 | Crash Position |
| 0x04 | Windabweiser |
| 0x05 | Komfort-Position |
| 0x06 | Anti-Wummer-Position |

### TAB_FH_SHD_ESH_STATUS_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angenommen, aber noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_STAT_EEPROM

| WERT | TEXT |
| --- | --- |
| 0x01 | Checksumme IO |
| 0x02 | Checksumme NIO |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_TASTER_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine Betätigung |
| 0x01 | Öffnen |
| 0x02 | Schliessen |
| 0x03 | Maut-Öffnen |
| 0x04 | Maut-Schliessen |
| 0x05 | Heben |

### TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalbetrieb |
| 0x01 | Thermo 90 aktiv (übersteuert) |
| 0x02 | Thermo 100 aktiv (übersteuert) |
| 0x03 | Keine Thermoschwelle aktiv (nicht übersteuert) |
| 0x04 | Thermo 90 aktiv (nicht übersteuert) |
| 0x05 | Thermo 100 aktiv (nicht übersteuert) |
| 0xFF | ungültig |

### TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalbetrieb |
| 0x01 | Thermo 90 aktiv |
| 0x02 | Thermo 100 aktiv |
| 0x03 | Keine Thermoschwelle aktiv |
| 0xFF | ungültig |

### TAB_FH_SHD_ESH_VERFAHREN

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Öffnen |
| 0x02 | Schliessen |
| 0x03 | Maut öffnen |
| 0x04 | Maut schliessen |
| 0x05 | Heben / Ausstellen |
| 0xFE | Element nicht unterstützt |
| 0xFF | ungültiger Wert |

### TAB_FH_SHD_ESH_WACHHALTEN

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |
| 0xFF | ungültig |

### TAB_FH_SHD_ESH_ZUSTAND_TUER

| WERT | TEXT |
| --- | --- |
| 0x00 | Tür geschlossen |
| 0x01 | Tür offen |
| 0x02 | Tür in Vorraste |
| 0x03 | Türstatus ungültig |
| 0xFF | Signal ungültig |

### TAB_GEK_KAMERA_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Kamera in Ordnung |
| 0x01 | Kamera inkompatibel |
| 0x02 | Kamera fehlerhaft |
| 0x03 | Keine Kamera |
| 0xFF | Ungültiger Wert |

### TAB_GESTIK_BOOT_PARTITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Boot flag set to partition 1 |
| 0x01 | Boot flag set to partition 2 |

### TAB_GESTIK_DTC_ID

| WERT | TEXT |
| --- | --- |
| 0x0000 | Kein Simulierte DTC |
| 0x0001 | 0x38310: Modulations-Signal fehlerfaft |
| 0x0002 | 0x38301: LED Platine Temperatur Limit überschritten |
| 0x0004 | 0x38302: LED Platine Temperatur Limit unterschritten |
| 0x0008 | 0x38303: Spannungsfehler SoC/ VMIX |
| 0x0010 | 0x38308: Sensor Platine Temperatur Limit überschritten |
| 0x0020 | 0x38309: Sensor Platine Temperatur Limit unterschritten |
| 0x0040 | 0x3830A: LED ungenügende Leistungsaufnahme |
| 0x0080 | 0x38306: Kommunikationsfehler zwischen Kamera und FZD |
| 0x0100 | 0x38331: Fehler während System Startphase |
| 0x0200 | 0x38332: CAF Kodierung Fehler |
| 0x01FF | Alle DTCs setzen |
| 0xFFFF | Wert ungültig |

### TAB_GESTIK_FAIL_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Simulierte Fehler |
| 0x01 | 0x38307: FPGA keine Reaktion |
| 0x02 | 0x3830F: SW reset |
| 0x04 | 0x3830B: Funktionsstörung Carlib |
| 0x08 | 0x38330: Autokalibrierung nicht erfolgreich |
| 0x10 | 0x3830C: Rom ECC Fehler |
| 0x20 | 0x3830D: FPGA kann nicht auf RAM zugreifen |
| 0x40 | 0x38334: NAND Speicher Fehler |
| 0x7F | Alle Fehler gesetzt |
| 0xFF | Wert ungültig |

### TAB_GESTIK_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Geste erkannt |
| 0x01 | Two_Swipe_left |
| 0x02 | Two_Swipe_right |
| 0x03 | Rotate im Uhrzeigersinn |
| 0x04 | Rotate gegen Uhrzeigersinn |
| 0x05 | TWO-Geste |
| 0x06 | FZD_approximation |
| 0x07 | Swipe right |
| 0x08 | Finger tap |
| 0x09 | Two_Swipe_Up |
| 0x0A | Two_Swipe_Down |
| 0x0b | Point_Zone_1 |
| 0x0c | Point_Zone_2 |
| 0x0d | Point_Zone_3 |
| 0x0E | Thumb_left |
| 0x0F | Thumb_right |
| 0x10 | TEN (Offene-Hand/Faust/offene-Hand Sequenz erkannt) |
| 0xFF | Wert ungültig |

### TAB_GESTIK_MODE_CAMERA

| WERT | TEXT |
| --- | --- |
| 0x00 | NORMAL |
| 0x01 | FLASH |
| 0x02 | OFF |
| 0x03 | STREAM |

### TAB_GESTIK_MODE_MASK

| WERT | TEXT |
| --- | --- |
| 0x00000001 | Depth & Confidence |
| 0x00000002 | I & Q |
| 0x00000008 | Projections |
| 0x00000010 | Gestures |
| 0x00000020 | FPGA Registers |
| 0x00000040 | Taps |
| 0x00000080 | Down samples |
| 0x00000100 | Temperature |
| 0x00000200 | CleanDepth |
| 0x00000400 | EOL Image |
| 0x00000800 | DSHIFT Final |
| 0x00010000 | ReducdStramOut |
| 0x00040000 | VideoStreamIn |
| 0x00080000 | GestureStreamIn |

### TAB_IMAGE_ACQUISITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Bildaufnahme |
| 0x01 | Normal Bildaufnahme |
| 0x02 | Testmuster als Eingabe des ADC |
| 0xFF | Wert ungültig |

### TAB_PARAM_GROUP_ID

| WERT | TEXT |
| --- | --- |
| 0x10 | FPGA parameters |
| 0x11 | Background paramters |
| 0x12 | Calibration parameters |
| 0x13 | Clipping parameters |
| 0x14 | Working space parameters |
| 0x15 | Camera intrinsic parameters |
| 0x16 | Gesture parameters |
| 0x17 | Circles parameters |
| 0x18 | Finger tap parameters |
| 0x19 | Open fist parameters |
| 0x1a | Open stance parameters |
| 0x1b | Slide right parameters |
| 0x1c | Hand management parameters |
| 0x1d | Hand parameters |
| 0x1e | Swipes parameters |
| 0x1f | Gesture Library other parameters |
| 0x20 | Saturation parameters |
| 0x21 | Projected point parameters |
| 0x22 | TemporareKodierungen |

### TAB_RELAIS_NUMBER

| WERT | TEXT |
| --- | --- |
| 0x01 | Relais 1 |
| 0x02 | Relais 2 |

### TAB_RELAIS_RICHTUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Relais auf Ubatt |
| 0x01 | Relais auf Masse |

### TAB_ROUTINE

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending (Auftrag angenommern, aber noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden |
| 0x03 | Routine wird ausgeführt |
| 0x04 | Routine erfolgreich beendet |
| 0x05 | Routine beendet mit Fehler |
| 0x06 | Routine abgebrochen |
| 0xFF | ungültiger Wert |

### TAB_ROUTINE_AUTOCAL

| WERT | TEXT |
| --- | --- |
| 0x00 | Service noch nicht angefordert |
| 0x01 | Pending Autokalibration nicht gestartet (Auftrag angenommern, aber noch nicht gestartet) |
| 0x02 | Routine kann nicht ausgeführt werden,  AutoCalibration gestoppt (Bedingungen für 300s nicht erfüllt oder AutoCal deaktiviert durch CAF) |
| 0x03 | Routine wird ausgeführt, Die Autokalibrierung lauft gerade |
| 0x04 | Routine erfolgreich beendet, Die Autokalibrierung wurde erfolgreich ausgeführt und beendet |
| 0x05 | Routine beendet mit Fehler, Autokalibrierung ausgeführt, aber fehlgeschlagen (kein gültiges Ergebnis) |
| 0x06 | Routine abgebrochen |
| 0xff | ungültiger Wert |
| 0xFF | Wert ungültig |

### TAB_SHD_ESH

| WERT | TEXT |
| --- | --- |
| 0xA1 | SHD |
| 0xA2 | ESH |
| 0xB0 | SHD + ESH |
| 0xFF | Wert ungültig |

### TAB_SHD_ESH_DENORM_URS

| WERT | TEXT |
| --- | --- |
| 0x00 | PDD_DIAG_NORMALIZED normiert |
| 0x01 | PDD_DIAG_INITSTART einlernen über Diagnose oder Taster |
| 0x02 | PDD_DIAG_DIAGCOMMAND Absichtliche Entnormierung über Diagnose |
| 0x03 | PDD_DIAG_ERRCODING Fehler in Codiedaten |
| 0x04 | PDD_DIAG_HALLOFF Hall abgeschaltet bei laufendem Motor |
| 0x05 | PDD_DIAG_POSITIONERRI Motortreiber wurde nicht ordnungsgemäß beendet |
| 0x06 | PDD_DIAG_POSITIONERRM Eine falsche Position entdeckt bei laufendem Motor |
| 0x07 | PDD_DIAG_AFTERRESET Beim Start des Motortreibers wurde keine gültige Position im EEPROM gefunden |
| 0x08 | PDD_DIAG_ERRHALL Notabschaltung wegen Überspannung an den Hallsensoren |
| 0x09 | PDD_DIAG_UNKNOWN |
| 0x0A | PDD_DIAG_HALLERRM Hall-Daten Schreibfehler |
| 0x0B | PDD_DIAG_ERR_FROM_ANTIPINCH_ALGO Einklemmschutz-Algorythmus identifiziert einen unbekannten Fehler |
| 0x0C | PDD_DIAG_ANTIPINCH_ALGO_UNCERTAINTY_TOO_HIGH Hallsignale ohne Bewegung des Daches |
| 0x0D | PDD_DIAG_ERR_TASK_SCHEDULE Einklemmschutzalgorithmus Schedule Fehler (Zu viele Hallsignale während eines Task, CPU overload) |
| 0x0E | PDD_DIAG_ERROR_ANTIPINCH_NUMBGER_OUT_OF_RANGE Einklemmschutz-Algorithmus Fehler |
| 0x0F | PDD_DIAG_RELAY_FAILURE Fehler am Relais erkannt |
| 0x10 | PDD_DIAG_ERR_MOTOR_ACTIVATION_SAFETY_TIMEOUT Timeout für den Motor (SHD 20 sek. PaDa 40 sek.) |
| 0xFF | PDD_DIAG_DENORM_INVALID ungültig (Initialisierungswert) |

### TAB_SHD_ESH_ENTW

| WERT | TEXT |
| --- | --- |
| 0xA1 | SHD |
| 0xA2 | ESH |
| 0xB0 | SHD + ESH |

### TAB_SHD_ESH_REVERSIER_URS

| WERT | TEXT |
| --- | --- |
| 0x00 | PDD_DIAG_NOT_REV nicht reversiert |
| 0x01 | PDD_DIAG_PINCH einklemmen erkannt |
| 0x02 | PDD_DIAG_EMERGENCY_PINCH einklemmen im Emergency Mode |
| 0x03 | PDD_DIAG_STALL blockieren erkannt |
| 0x04 | PDD_DIAG_PANIC_STALL blockieren im Panic Mode |
| 0xFF | PDD_DIAG_INVALID ungültig (Initialisierungswert) |

### TAB_SHD_ESH_STRICT

| WERT | TEXT |
| --- | --- |
| 0xB0 | SHD+ESH |

### TAB_SHD_ESH_TASTER

| WERT | TEXT |
| --- | --- |
| 0xB0 | SHD+ESH |

### TAB_SINE_BATT_LEVEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Batterie leer |
| 0x01 | Batterie gut |
| 0x02 | Batterie neu |
| 0xFF | Ungültiges Signal |

### TAB_STREAMOUT

| WERT | TEXT |
| --- | --- |
| 0x00000001 | Depth & Confidence |
| 0x00000002 | I & Q |
| 0x00000004 | AX |
| 0x00000008 | Projections |
| 0x00000010 | Gestures |
| 0x00000020 | FPGA Registers |
| 0x00000040 | Taps |
| 0x00000080 | Down samples |

### TAB_SUPPLIERINFO_FIELD

| WERT | TEXT |
| --- | --- |
| 0x00 | Wert 0 |
| 0x1 | Wert 1 |
| 0x2 | Wert 2 |
| 0x3 | Wert 3 |
| 0x4 | Wert 4 |
| 0x5 | Wert 5 |
| 0x6 | Wert 6 |
| 0x7 | Wert 7 |
| 0x8 | Wert 8 |
| 0x9 | Wert 9 |
| 0xA | Wert 10 |
| 0xB | Wert 11 |
| 0xC | Wert 12 |
| 0xD | Wert 13 |
| 0xE | Wert 14 |
| 0xF | Wert 15 |
| 0x10 | Wert 16 |
| 0x11 | Wert 17 |
| 0x12 | Wert 18 |
| 0x13 | Wert 19 |
| 0x14 | Wert 20 |
| 0x15 | Wert 21 |
| 0x16 | Wert 22 |
| 0x17 | Wert 23 |
| 0x18 | Wert 24 |
| 0x19 | Wert 25 |
| 0x1A | Wert 26 |
| 0x1B | Wert 27 |
| 0x1C | Wert 28 |
| 0x1D | Wert 29 |
| 0x1E | Wert 30 |
| 0x1F | Wert 31 |
| 0x20 | Wert 32 |
| 0x21 | Wert 33 |
| 0x22 | Wert 34 |
| 0x23 | Wert 35 |
| 0x24 | Wert 36 |
| 0x25 | Wert 37 |
| 0x26 | Wert 38 |
| 0x27 | Wert 39 |
| 0x28 | Wert 40 |
| 0x29 | Wert 41 |
| 0x2A | Wert 42 |
| 0x2B | Wert 43 |
| 0x2C | Wert 44 |
| 0x2D | Wert 45 |
| 0x2E | Wert 46 |
| 0x2F | Wert 47 |
| 0x30 | Wert 48 |
| 0x31 | Wert 49 |
| 0x32 | Wert 50 |
| 0x33 | Wert 51 |
| 0x34 | Wert 52 |
| 0x35 | Wert 53 |
| 0x36 | Wert 54 |
| 0x37 | Wert 55 |
| 0x38 | Wert 56 |
| 0x39 | Wert 57 |
| 0x3A | Wert 58 |
| 0x3B | Wert 59 |
| 0x3C | Wert 60 |
| 0x3D | Wert 61 |
| 0x3E | Wert 62 |
| 0xFF | Wert ungültig |

### TAB_SW_RESET

| WERT | TEXT |
| --- | --- |
| 0x00 | Cold reset |
| 0x01 | Warm reset |

### TAB_ZV_ST_CLSY

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Status empfangen |
| 0x01 | Mindestens eine Tür ist entriegelt |
| 0x02 | Mindestens eine Tür ist verriegelt |
| 0x03 | Mindestens eine Tür ist entriegelt und Mindestens eine Tür ist verriegelt |
| 0x04 | Interner ZV-Master ist gesichert |
| 0x05 | Interner ZV-Master ist gesichert und Mindestens eine Tür ist entriegelt |
| 0x06 | Interner ZV-Master ist gesichert und Mindestens eine Tür ist verriegelt |
| 0x07 | Interner ZV-Master ist gesichert und Mindestens eine Tür ist entriegelt und Mindestens eine Tür ist verriegelt |
| 0xFF | Signal ungültig |

### _FOUT_ID_USIS_TAB

| WERT | TEXT |
| --- | --- |
| 0x00 | K40_TX |
| 0x01 | NK40_TX |
| 0x02 | K40_RX |
| 0x03 | K40_90 |
| 0x04 | Set All |

### _TAB_DEVELOP_BIN_POINTER

| WERT | TEXT |
| --- | --- |
| 0x00 | No bin set (default value) |
| 0x01 | BIN L2 is used |
| 0x02 | BIN L1  is used |
| 0x03 | BIN K2 is used |
| 0xFF | Wert ungültig |

### _TAB_DEVELOP_CHANNEL_SELECTON

| WERT | TEXT |
| --- | --- |
| 0x01 | R1 |
| 0x02 | R2 |

### _TAB_DEVELOP_DIO_PORT

| WERT | TEXT |
| --- | --- |
| 0x00 | Reset control to ECU |
| 0x01 | CMD_SHD_M1 |
| 0x02 | CMD_SHD_M2 |
| 0x03 | CMD_ESH_M1 |
| 0x04 | CMD_ESH_M2 |
| 0x05 | CMD_SLIDER |
| 0x06 | SHD_HALL_SUP |
| 0x07 | SBC_HS_DWA_LED |
| 0x08 | SBC_HS_SLIDER_BACKLIGHT_LED |
| 0x09 | CMD_DWA_LED |
| 0x0A | CMD_OPEN_LOAD_DIAG_DWA_LED |
| 0x0B | CMD_30_F39_VBF |
| 0x0C | CMD_30_F108_VBF |
| 0x0D | CMD_TXECO1 |
| 0x0E | CMD_TXECO2 |
| 0x0F | CMD_G1A |
| 0x10 | CMD_G1B |
| 0x11 | CMD_G1C |
| 0x12 | CMD_G2A |
| 0x13 | CMD_G2B |
| 0x14 | CMD_G2C |
| 0x15 | CMD_GDOP |
| 0x16 | CMD_RXENA |
| 0x17 | CMD_OPHFSUP |
| 0x18 | CMD_OPLFSUP |
| 0x19 | USIS_PWR_SEL |
| 0x1A | ALARM_DEBUG |
| 0x1B | CMD_LED_TEMP |
| 0x1C | CMD_NTC |
| 0x1D | CMD_SENSOR_TEMP |
| 0x1E | CMD_POWER_EN2 |
| 0x1F | CMD_MCU_REQ |
| 0x20 | CMD_WK_SBC_GES |
| 0x21 | VCC2 SBC_BODY |
| 0x22 | VCC3_SBC_BODY |
| 0x23 | VCC2_SBC_I_UND_K |
| 0x24 | ESH_HALL_SUP |
| 0xFF | All DIOs |

### _TAB_DEVELOP_EEPROM_ERASED

| WERT | TEXT |
| --- | --- |
| 0x00 | EEPROM erased completely |
| 0x01 | EEPROM not erased |
| 0xFF | Wert ungültig |

### _TAB_DEVELOP_EMS_TEST_BYTE_RESULT

| WERT | TEXT |
| --- | --- |
| 0x01 | ICT OK |
| 0x03 | FCT OK |
| 0x07 | FCT Restest OK |
| 0xFF | Wert ungültig |

### _TAB_DEVELOP_RESET_REASON

| WERT | TEXT |
| --- | --- |
| 0x00 | Slot empty |
| 0x01 | Power ON reset |
| 0x02 | Watchdog reset |
| 0x03 | External Reset |
| 0x04 | SW Reset |
| 0x05 | Clock Fault Reset |
| 0x06 | Low Voltage PS Reset |
| 0x07 | Low Voltage on Core Reset |
| 0x08 | Multiple Reset |
| 0x09 | Corrupter Error |
| 0xFF | Invalid |

### _TAB_DEVELOP_RESET_USIS_COUNTER

| WERT | TEXT |
| --- | --- |
| 0x01 | Reset USIS Echo Counter |
| 0x02 | Reset USIS Doppler Counter |
| 0x04 | Reset USIS Doppler History |
| 0xFF | Reset everything |

### _TAB_DEVELOP_ROUTINE_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Not executed |
| 0x01 | Unable to start |
| 0x02 | Routine pending |
| 0x03 | Routine executing |
| 0x04 | Routine could not finish correctly |
| 0x05 | Routine finished |
| 0xFF | Wert ungültig |

### _TAB_DEVELOP_SLIDER_STATE

| WERT | TEXT |
| --- | --- |
| 0x00 | Rest position |
| 0x01 | Manual opening |
| 0x02 | Manual closing |
| 0x04 | Tilt Position |
| 0x11 | Automatic opening |
| 0x12 | Automatic closing |
| 0xFF | Wert ungültig |

### _TAB_DEVELOP_USIS_CHANNEL

| WERT | TEXT |
| --- | --- |
| 0x00 | No Alarm |
| 0x01 | Channel A |
| 0x02 | Channel B |
| 0x3 | Channel A+B |

### _TAB_DEVELOP_USIS_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Disarmed |
| 0x01 | Normal Mode |
| 0x02 | Windows Open or Roof tilted |
| 0x03 | Airconditioning On |
| 0x04 | Roof open |
| 0x07 | Invalid |

### _TAB_DEVELOP_USIS_SENSITIVITY

| WERT | TEXT |
| --- | --- |
| 0x00 | Unmodified, read from CAN |
| 0x01 | Normal |
| 0x02 | Opened Window |
| 0x03 | Heater/AC Active |
| 0x04 | Sunroof open |
| 0xFF | Wert ungültig |

### _TAB_DEVELOP_USIS_TEMPERATURE

| WERT | TEXT |
| --- | --- |
| 0x00 | Very Low ( -40 °C - -15 °C) |
| 0x01 | Low (-15 ° C - +5° C) |
| 0x02 | Normal (+5°C - +45 °C) |
| 0x03 | High (+45 °C - +65 °C) |
| 0x04 | Very High (+ 65 °C - +90 °C) |
| 0x07 | Invalid |

### _TAB_DEVELOP_USIS_TEMPERATURE_BAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Very Low |
| 0x01 | Low |
| 0x02 | Normal |
| 0x03 | High |
| 0x04 | Very High |
| 0xFF | Unmodified, read from CAN |

### _TAB_DEVELOP_VALEO_RUNIN

| WERT | TEXT |
| --- | --- |
| 0x00 | No RUN in Part |
| 0x01 | RUN in Part |
| 0x02 | RUN IN test pass |
| 0x03 | RUN IN test fail |
| 0xFF | Wert ungültig |

### _TAB_DWA_TRIGGER_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kodiert in EEPROM |
| 0x01 | Deaktiviert durch den Nutzer ueber den Funkschluessel |
| 0x02 | Deaktiviert wegen Unterspannung  |
| 0x03 | Nicht ueberwacht von der DWA  |
| 0x04 | Referenzierungsphase |
| 0x05 | Aktiviert und in der Alarmtabelle  |
| 0x06 | Fehler in der Referenzierungsphase  |
| 0xFF | Ungueliger Wert |

### _TAB_FOUT_ID

| WERT | TEXT |
| --- | --- |
| 0x00 | K40_TX |
| 0x01 | NK40_TX |
| 0x02 | K40_RX |
| 0x03 | K40_90 |

### _TAB_USIS_SELFTEST_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | no error |
| 0x01 | error |
