# fzd_f15.prg

## General

|  |  |
| --- | --- |
| File | fzd_f15.prg |
| Type | PRG |
| Jobs | 86 |
| Tables | 162 |
| Origin | BMW EI-601 Herter |
| Revision | 6.000 |
| Author | Valeo EI-601 Veith, Valeo EI-601 Sava |
| ECU Comment | - |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Funktionszentrum Dach  56 0F1CF0 |  |  |
| ORIGIN | string | BMW EI-601 Herter |  |  |
| REVISION | string | 6.000 |  |  |
| AUTHOR | string | Valeo EI-601 Veith, Valeo EI-601 Sava |  |  |
| COMMENT | string | - |  |  |
| PACKAGE | string | 1.40 |  |  |
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

Sekundaerer Fehlerspeicher lesen (alle Fehler / Ort und Art) UDS  : $22   ReadDataByIdentifierRequestServiceID UDS  : $2000 DataIdentifier sekundaerer Fehlerspeicher Modus: Default

_No arguments._

### IS_LESEN_DETAIL

sekundären Fehlerspeicher lesen (Info-Meldungen / Ort und Art) UDS  : $22 ReadDataByIdentifier UDS  : $20 dataIdentifier UDS  : $00 alle Info-Meldungen anschließend UDS  : $20 dataIdentifier UDS  : $nn Details zur Info-Meldung an der Position n Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | long | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

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

### CPS_LESEN

Codierpruefstempel lesen UDS  : $22   ReadDataByIdentifier UDS  : $37FE DataIdentifier Codierpruefstempel Modus: Default

_No arguments._

### DIAG_SESSION_LESEN

Aktive Diagnose-Session auslesen UDS  : $22   ReadDataByIdentifier UDS  : $F186 ActiveDiagnosticSession Modus: Default

_No arguments._

### FLASH_TP_LESEN

Flash Timing Parameter auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2504 FlashTimingParameter Modus: Default

_No arguments._

### PROG_ZAEHLER_LESEN

Programmierzaehler lesen UDS  : $22   ReadDataByIdentifier UDS  : $2502 ProgrammingCounter Modus: Default

_No arguments._

### PROG_MAX_LESEN

Anzahl der maximal möglichen Programmiervorgänge auslesen UDS  : $22   ReadDataByIdentifier UDS  : $2503 ProgrammingCounter Modus: Default

_No arguments._

### STATUS_DWA_ALARMSPEICHER

Auslesen des Alarmspeichers der Diebstahlwarnlage JobHeaderFormat 0x6010 STATUS_DWA_ALARMSPEICHER

_No arguments._

### STEUERN_DWA_ALARMSPEICHER_LOESCHEN

Löscht den Alarmspeicher der Diebstahlwarnanlage JobHeaderFormat 0x6010 STEUERN_DWA_ALARMSPEICHER_LOESCHEN

_No arguments._

### STATUS_DWA_PANIKSPEICHER

Auslesen der Panikspeicher-Einträge der Diebstahlwarnlage JobHeaderFormat 0x6011 STATUS_DWA_PANIKSPEICHER

_No arguments._

### STEUERN_DWA_PANIKSPEICHER_LOESCHEN

Löscht den Panikspeicher der Diebstahlwarnanlage JobHeaderFormat 0x6011 STEUERN_DWA_PANIKSPEICHER_LOESCHEN

_No arguments._

### STATUS_DWA_DEAKTIVIERUNG_IRS_NG

Auslesen der Deaktivierungsspeicher-Einträge für IRS und NG JobHeaderFormat 0x6017 STATUS_DWA_DEAKTIVIERUNG_IRS_NG

_No arguments._

### STEUERN_DWA_DEAKTIVIERUNG_IRS_NG_LOESCHEN

Löscht den Deaktivierungsspeicher des IRS und NG JobHeaderFormat 0x6016 STEUERN_DWA_DEAKTIVIERUNG_IRS_NG_LOESCHEN

_No arguments._

### STATUS_SHD_ESH_DENORMIERUNGS_LOGGER_LESEN

Umsetzung: MT  STATUS_SHD_ESH_DENORMIERUNGS_LOGGER_LESEN

_No arguments._

### STEUERN_SHD_ESH_DENORMIERUNGS_LOGGER_LOESCHEN

Löscht die Denormierungslogger von Schiebedach und elektrischer Schiebehimmel Umsetzung: MT  STEUERN_SHD_ESH_DENORMIERUNGS_LOGGER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | unsigned char | Mögliche Parameter: (entsprechend table TAB_SHD_ESH) 0x00 kein Element löschen 0xA1 SHD löschen 0xA2 ESH löschen 0xB0 SHD + ESH löschen |

### STATUS_SHD_ESH_MOTORSTOP_LOGGER_LESEN

Liest die aufgezeichneten Daten des Loggers für Abbruch Motorlauf. Die letzten 10 Ereignisse werden für jeden Ort gespeichert Umsetzung: MT  STATUS_SHD_ESH_MOTORSTOP_LOGGER_LESEN

_No arguments._

### STEUERN_SHD_ESH_MOTORSTOP_LOGGER_LOESCHEN

Löscht den Logger für Abbruch / Ende Motorlauf Umsetzung: MT  STEUERN_SHD_ESH_MOTORSTOP_LOGGER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | unsigned char | Mögliche Parameter: (entsprechend table TAB_SHD_ESH) 0x00 kein Element löschen 0xA1 SHD löschen 0xA2 ESH löschen 0xB0 SHD + ESH löschen |

### STATUS_SHD_ESH_REVERSIER_LOGGER_LESEN

Auslesen der Reversierlogger Schiebedach und elektrischer Schiebehimmel Umsetzung: MT  STATUS_SHD_ESH_REVERSIER_LOGGER_LESEN

_No arguments._

### STEUERN_SHD_ESH_REVERSIER_LOGGER_LOESCHEN

Löscht die Logger von Schiebedach und / oder elektrsicher Schiebehimmel Umsetzung: MT  STEUERN_SHD_ESH_REVERSIER_LOGGER_LOESCHEN

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | unsigned char | Mögliche Parameter: (entsprechend table TAB_SHD_ESH) 0x00 kein Element löschen 0xA1 SHD löschen 0xA2 ESH löschen 0xB0 SHD + ESH löschen |

### _READ_RESETCOUNTER

Read resetcounter JobHeaderFormat 0x600D _READ_RESETCOUNTER

_No arguments._

### _RESET_RESETCOUNTER

Reset resetcounter JobHeaderFormat 0x600E _RESET_RESETCOUNTER

_No arguments._

### _DWA_TRIGGER_STATUS

Status Digital Input/Output JobHeaderFormat 0x600F _DWA_TRIGGER_STATUS

_No arguments._

### _WRITE_USIS_SERIAL_IO

Status Analog Input/Output JobHeaderFormat 0xF500 _WRITE_USIS_SERIAL_IO

| Name | Type | Description |
| --- | --- | --- |
| ROUTINE | unsigned char | Select routine subfunction: 0x01  start routine 0x02  stop routine 0x03  request routine |
| MODE | unsigned char | Select USIS-mode 0x01 echo mode 0x02 doppler mode 0x03 functional Logger Only with subfunction 0x01 start routine |
| ACTIVATION | unsigned char | Select Activation-mode 0x00 auto 0x01 normal 0x02 open windows 0x03 heater on Only with subfunction 0x01 start routine |

### _USIS_DATA_SELFTESTS_RESULT

Status USIS selftest results JobHeaderFormat 0x6020 _USIS_DATA_SELFTESTS_RESULT

_No arguments._

### _USIS_DATA_TOTALARMCOUNTER_READ

Status USIS total alarm counter JobHeaderFormat 0x6021 _USIS_DATA_TOTALARMCOUNTER_READ

_No arguments._

### _USIS_DATA_ALARMMEMORY_READ

Status USIS alarm memory JobHeaderFormat 0x6022 _USIS_DATA_ALARMMEMORY_READ

_No arguments._

### _USIS_DATA_ECHODOPPLERCOUNTER_READ

Status echo-doppler-counter JobHeaderFormat 0x6023 _USIS_DATA_ECHODOPPLERCOUNTER_READ

_No arguments._

### _USIS_DATA_ENVIRONMENT_READ

Status environment JobHeaderFormat 0x6024 _USIS_DATA_ENVIRONMENT_READ

_No arguments._

### _USIS_CMD_ALARMMEMORY_RESET

Reset alarmmemory JobHeaderFormat 0x6025 _USIS_CMD_ALARMMEMORY_RESET

_No arguments._

### _USIS_CMD_ECHODOPPLERCOUNTER_RESET

Reset echo-doppler-counter JobHeaderFormat 0x6026 _USIS_CMD_ECHODOPPLERCOUNTER_RESET

| Name | Type | Description |
| --- | --- | --- |
| CHANNEL_ID | unsigned char | Channel Possible parameters (according to table _TAB_USIS_CMD_ECHODOPPLERCOUNTER_RESET) 0x01 echo counter 0x02 doppler counter 0x03 echo/doppler transitions history |

### _USIS_CMD_ENVIRONMENT_SET

Write the environment JobHeaderFormat 0x6027 _USIS_CMD_ENVIRONMENT_SET

| Name | Type | Description |
| --- | --- | --- |
| ACTIVATION | unsigned char | Activation Possible parameters (according to table _TAB_USIS_DATA_ENVIRONMENT_READ_ACTIVATION) 0x00  no change 0x01  Normal mode 0x02  Window or roof opened 0x03  Air condition on |
| THERMAL_STEP | unsigned char | Thermal step Possible parameters (according to table _TAB_USIS_DATA_ENVIRONMENT_THERMAL_STEB) 0x00  -40°C .. -15°C 0x01  -15°C .. + 5°C 0x02  + 5°C .. +45°C 0x03  +45°C .. +65°C 0x04  +65°C .. +85°C |

### _USIS_DATA_ANPASSUNG_VALUE_READ

Read Adaptation USIS-Data JobHeaderFormat 0x6028 _USIS_DATA_ANPASSUNG_VALUE_READ

_No arguments._

### _USIS_DATA_ANPASSUNG_VALUE_SET

Write Adaptation USIS-Data JobHeaderFormat 0x6029 _USIS_DATA_ANPASSUNG_VALUE_SET

| Name | Type | Description |
| --- | --- | --- |
| SENSITIVITY_INDEX | unsigned char | Sensitivity index 0x00 bis 0xFF |

### _USIS_CMD_TOTALALARMCOUNTER_RESET

Reset total alarm counter JobHeaderFormat 0x602A _USIS_CMD_TOTALALARMCOUNTER_RESET

| Name | Type | Description |
| --- | --- | --- |
| CHANNEL | unsigned char | Channel Possible parameters (according to table _TAB_USIS_CMD_TOTALALARMCOUNTER_RESET) 0x01  A channel 0x02  B channel 0x03  both channel |

### _DISABLE_DTC

reset WD JobHeaderFormat 0xF501 _DISABLE_DTC

| Name | Type | Description |
| --- | --- | --- |
| ROUTINE | unsigned char | Select routine subfunction: 0x01  start routine |

### _SLIDER_DATA_OUTPUT

reset WD JobHeaderFormat 0xF502 _SLIDER_DATA_OUTPUT

| Name | Type | Description |
| --- | --- | --- |
| ROUTINE | unsigned char | Select routine subfunction: 0x01  start routine 0x02  stop routine |

### _READ_DIO

Status Digital Input/Output JobHeaderFormat 0x6000 _READ_DIO

_No arguments._

### _WRITE_DIO

Steuern Digital Input/Output JobHeaderFormat 0x6001 _WRITE_DIO

| Name | Type | Description |
| --- | --- | --- |
| ROUTINE | unsigned char | Select routine subfunction: 0x00  return control to ECU 0x03  short term adjustment |
| IDENTIFIER | unsigned char | Port 0x01  CMD_DWA_LED 0x02  CMD_OPEN_LOAD_DWA_LED 0x03  CMD_SHD_M1 0x04  CMD_SHD_M2 0x05  CMD_ESH_M1 0x06  CMD_ESH_M2 0x07  CMD_30F_SW_HALL 0x0A  CMD_TXON 0x0B  CMD_SHUNT 0x0C  CMD_TXD 12 0x0D  CMD_TXECO1 0x0E  CMD_TXECO2 0x0F  CMD_RXENA 0x10  CMD_GDOP 0x11  CMD_GH1 0x12  CMD_OPHFSUP 0x13  CMD_GH2 0x1E  CMD_CONF_VAR 0x1F  CMD_GL1 0x20  CMD_GL2 0x21  CMD_OPLFSUP table _TAB_PORT_DIO_WRITE TEXT |
| VALUE | unsigned char | Only with subfunction 0x03 ShortThermAdjust Value to set 0x00  output low 0x01  output high |

### _READ_AIO

Status Analog Input/Output JobHeaderFormat 0x6002 _READ_AIO

_No arguments._

### _READ_FIO

Status Frequenz Input/Output JobHeaderFormat 0x6003 _READ_FIO

_No arguments._

### _WRITE_FIO

Steuern Frequenz Input/Output JobHeaderFormat 0x6004 _SCHREIBEN_FIO

| Name | Type | Description |
| --- | --- | --- |
| ROUTINE | unsigned char | Select routine subfunction: 0x00  return control to ECU 0x03  short term adjustment |
| IDENTIFIER | unsigned char | Port 0x01  PWM_SLIDER_LED 0x02  F80 table _TAB_PORT_FIO_WRITE TEXT |
| VALUE | unsigned int | Only with subfunction 0x03 ShortThermAdjust Value to set |

### _READ_EEP

Status EEPROM JobHeaderFormat 0x6005 _READ_EEP

| Name | Type | Description |
| --- | --- | --- |
| ADDRESS | unsigned int | Address of data to read 0x0000 ... 0x1FFF |
| SIZE | unsigned char | Size of data to read 1 ... 32 |

### _WRITE_EEP

Steuern EEPROM JobHeaderFormat 0x6006 _WRITE_EEP

| Name | Type | Description |
| --- | --- | --- |
| ADDRESS | unsigned int | Start address of data to write 0x0000 ... 0x1FFF |
| DATA | unsigned char | Data to write |

### _CONTROL_EEP

Steuern EEPROM JobHeaderFormat 0x6007 _CONTROL_EEP

| Name | Type | Description |
| --- | --- | --- |
| MODE | unsigned char | Lock / unlock EEPROM 0x00  Unlock 0x01  Lock Default: 0x01 Lock table _TAB_SWITCH_EEP TEXT |

### _READ_VERSION

Status Version JobHeaderFormat 0x6008 _READ_VERSION

_No arguments._

### _READ_PCB_DATA

Status PCB JobHeaderFormat 0x6009 _READ_PCB_DATA

_No arguments._

### _WRITE_PCB_DATA

Steuern PCB JobHeaderFormat 0x600A _WRITE_PCB_DATA

| Name | Type | Description |
| --- | --- | --- |
| FACTORY_DATE_YY | unsigned char | production date: year |
| FACTORY_DATE_MM | unsigned char | production date: month |
| FACTORY_DATE_DD | unsigned char | production date: day |
| HW_VERSION | unsigned int | HW version |
| PCB_PART_REF | unsigned long | serial number of the PCB to be set at 000 at beginning of each day |
| PCB_SERIAL_NUMBER | unsigned long | serial number of the PCB to be set at 000 at beginning of each day |

### _READ_ASSEMBLY_DATA

Status assembly JobHeaderFormat 0x600B _READ_ASSEMBLY_DATA

_No arguments._

### _WRITE_ASSEMBLY_DATA

Steuern assembly JobHeaderFormat 0x600C _WRITE_ASSEMBLY_DATA

| Name | Type | Description |
| --- | --- | --- |
| FACTORY_DATE_YY | string | ECUSerialNumber: year ASCII 2 bytes - expample 11 = 2011 |
| FACTORY_DATE_DDD | string | ECUSerialNumber: day of the year ASCII 3 bytes - expample "121" |
| FACTORY_LINE_SHIFT | unsigned char | ECUSerialNumber: line/shift ASCII 1 byte: code with characters with 4 shifts: A = shift 1 / line 1 B = shift 2 / line 1 C = shift 3 / line 1 D = shift 4 / line 1 E = shift 1 / line 2 |
| FACTORY_DATE_COUNTER | string | ECUSerialNumber: counter ASCII 4 byte |
| STEP_COUNTER | unsigned char | Stepp counter |

### _READ_CPU_LOAD

Read CPU load JobHeaderFormat 0x6030 _READ_CPU_LOAD

_No arguments._

### _RESET_CPU_LOAD

Reset CPU load Job HeaderFormat 0x6031 _RESET_CPU_LOAD

_No arguments._

### _VALEO_WRITE_ENABLE

Enable write JobHeaderFormat 0x6032 _VALEO_WRITE_ENABLE

| Name | Type | Description |
| --- | --- | --- |
| KEY | unsigned int | enable all Valeo Diag Write jobs: _WRITE_xx until reset |

### _READ_TASK_STACK

Read task stack JobHeaderFormat 0x6034 _READ_TASK_STACK

_No arguments._

### STATUS_SHD_ESH_BEWERTUNG_KENNLINIE

Auslesen der gespeicherten Kennlinien/Adaptionsdaten fuer den Einklemmschutz

| Name | Type | Description |
| --- | --- | --- |
| ELEMENT | string | 0xA1: Schiebedach 0xA2: Elektrischer Schiebehimmel |
| DERIVAT | string | Entwicklungsbezeichnung F25, F56, I01 |
| BEREICH | string | Argument siehe Tabelle TAB_FH_SHD_ESH_LAGE_NR_ARG_ENTW 0x01: Ausstelllage 0x02: Schiebelage |

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
| 0x5F | ECUGDM | ECUGarageDiagnoseMode |
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
| 0x2300 | Aussenspiegel Beifahrer | - |
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
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
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
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
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
| 0x5768 | Fussgängerschutz Sensor links | 0 |
| 0x5770 | Fussgängerschutz Sensor rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Fahrertür vorne oben | 1 |
| 0x5E06 | Innenbeleuchtung Fahrertür vorne Mitte | 1 |
| 0x5E07 | Innenbeleuchtung Fahrertür vorne unten | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Fahrertür hinten oben | 1 |
| 0x5E0A | Innenbeleuchtung Fahrertür hinten unten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Beifahrertür vorne oben | 1 |
| 0x5E0D | Innenbeleuchtung Beifahrertür vorne Mitte | 1 |
| 0x5E0E | Innenbeleuchtung Beifahrertür vorne unten | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Beifahrertür hinten oben | 1 |
| 0x5E11 | Innenbeleuchtung Beifahrertür hinten unten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung I-Tafel Fahrer oben | 1 |
| 0x5E14 | Innenbeleuchtung I-Tafel Fahrer unten | 1 |
| 0x5E15 | Innenbeleuchtung I-Tafel oben Mitte | 1 |
| 0x5E16 | Innenbeleuchtung I-Tafel unten Mitte | 1 |
| 0x5E17 | Innenbeleuchtung I-Tafel oben Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung I-Tafel unten Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
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
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
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
| 0x0007 | Volvo Cars (Ford Group) |
| 0x000B | Freescale Semiconductor |
| 0x0011 | NXP Semiconductors |
| 0x0012 | ST Microelectronics |
| 0x0013 | Melexis GmbH |
| 0x0014 | Microchip Technology Inc |
| 0x0015 | Centro Ricerche FIAT |
| 0x0016 | Renesas Technology Europe GmbH - Mitsubishi |
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
| 0x0028 | Renesas Technology Europe Ltd  - Hitachi |
| 0x0029 | Yazaki Europe Ltd |
| 0x002A | Trinamic Microchips GmbH |
| 0x002B | Allegro Microsystems, Inc |
| 0x002C | Toyota Motor Engineering and Manufacturing Europe N.V / S.A |
| 0x002D | PSA Peugeot Citroën |
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
| 0x005B | VOLVO Technology Schweden |
| 0x005C | SMSC Europe GmbH |
| 0x0060 | Sitronic GmbH & Co. KG |
| 0x0061 | Flextronics / Sidler Automotive GmbH & Co. KG |
| 0x0062 | EAO Automotive GmbH & Co. KG |
| 0x0063 | helag-electronic gmbh |
| 0x0064 | Magna Electronics |
| 0x0065 | INTEVA Products, LLC |
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
| 0x007B | Bury GmbH & Co. KG |
| 0x007A | Kromberg & Schubert GmbH & Co. KG |
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
| 0x0093 | Phoenix International |
| 0x0094 | John Deere |
| 0x0095 | Grayhill Inc |
| 0x0096 | AppliedSensor GmbH |
| 0x0097 | UST Umweltsensortechnik GmbH |
| 0x0098 | Digades GmbH |
| 0x009A | TriMark Corporation |
| 0x009B | KB Auto Tech Co., Ltd. |
| 0x0099 | Thomson Linear Motion |
| 0x009C | Methode Electronics, Inc |
| 0x0101 | Huber Automotive AG |
| 0x009D | Danlaw, Inc. |
| 0x0100 | Isabellenhuette Heusler GmbH & Co. KG |
| 0x0102 | Precision Motors Deutsche Minebea GmbH |
| 0x009F | Fujikoki Corporation |
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

### UDS_TAB_ROE_AKTIV

| NR | TEXT |
| --- | --- |
| 0x00 | Aktive Fehlermeldung deaktiviert |
| 0x01 | Aktive Fehlermeldung aktiviert |
| 0xFF | Status der aktiven Fehlermeldung nicht feststellbar |

### ARG_0X4100

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_SHD_ESH_ENTW | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle |
| AKTION | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV_ARG | 1.0 | 1.0 | 0.0 | - | - | Auswahl Thermomonitor aktiv siehe Tabelle TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV_ARG |

### ARG_0X4101

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | high | unsigned char | - | TAB_SHD_ESH_ENTW | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle |
| FREIGABE_GLOBAL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auswahl Freigabe Global 0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |
| FREIGABE_PANIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Auswahl Freigabe Panikl 0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |

### ARG_0X4103

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BEREICH | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE_ARG | - | - | - | - | - | Modus siehe Tabelle TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE_ARG |

### ARG_0X6013

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen Alarmspeicher SINE 1:Löschen; 0:nicht Löschen |

### ARG_0X6014

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen Fehlerspeicher SINE 1:Löschen; 0:nicht Löschen |

### ARG_0X6015

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Löschen Verpolzähler SINE 1:Löschen; 0:nicht Löschen |

### ARG_0XA17C

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH_STRICT | - | - | - | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| AKTION | + | - | 0-n | - | char | - | TAB_FH_SHD_ESH_EINLERNEN | - | - | - | - | - | Anlernart des Elements siehe Tabelle: TAB_FH_SHD_ESH_EINLERNEN |

### ARG_0XA183

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| RICHTUNG | + | - | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00: Öffnen 0x01: Gehoben bzw. Zwangsspalt |
| ZEIT | + | - | ms | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | 0.0 | 1000.0 | Angabe der Ansteuerzeit in ms |

### ARG_0XA184

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| FUNKTION | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_SFK1 | 1.0 | 1.0 | 0.0 | - | - | Sonderfunktionspositionen siehe Tabelle TAB_FH_SHD_ESH_SFK1 |
| RICHTUNG | + | - | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | 0x00: Ursprungsposition anfahren 0x01: Position anfahren |

### ARG_0XA185

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| POSITION | + | - | Ink | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Wert 500 für Schiebehebedach ist die Geschlossen-Position |

### ARG_0XA186

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| POSITION | + | - | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 100.0 | 0%:offen 100%: geschlossen |
| BEREICH | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR_ARG | 1.0 | 1.0 | 0.0 | - | - | Argument siehe Tabelle TAB_FH_SHD_ESH_LAGE_NR_ARG |

### ARG_0XA187

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| POSITION | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_SERVICEPOSITION | 1.0 | 1.0 | 0.0 | - | - | Position des Elements siehe Tabelle TAB_FH_SHD_ESH_SERVICEPOSITION |

### ARG_0XA188

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | - | unsigned char | - | TAB_SHD_ESH_STRICT | - | - | - | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| RICHTUNG | + | - | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_TASTER_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Bewegungsrichtung des Elements siehe Tabelle TAB_FH_SHD_ESH_TASTER_RICHTUNG |
| ZEIT | + | - | ms | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | 0.0 | - | Angabe der Zeit in ms |

### ARG_0XAA76

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUSWAHL | + | - | 0-n | - | char | - | TAB_DWA_SELBSTTEST | 1.0 | 1.0 | 0.0 | - | - | optionales Argument; 0: Abbruch; 1: Selbsttest komplettes DWA-System; 2: Selbsttest Innenraumschutz; 3 Selbsttest Neigungsgeber; DEFAULT: 1 |

### ARG_0XAA79

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | + | - | 0/1 | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | 0 oder kein Argument: DWA entschärfen; 1: DWA schärfen |

### ARG_0XAA7B

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OPT_ENTSCHAERFEN | + | - | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| AKUST_ENTSCHAERFEN | + | - | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| OPT_SCHAERFEN | + | - | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| AKUST_SCHAERFEN | + | - | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| OPT_SCHAERFEN_KLAPPE | + | - | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwert zurücksetzen |
| AKUST_SCHAERFEN_KLAPPE | + | - | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0: keine Aktion  1: Auf Codierwerte zurücksetzen |

### ARG_0XD17C

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |

### ARG_0XD17D

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |

### ARG_0XD17E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| AKTION | 0-n | - | unsigned char | - | TAB_RELAIS_RICHTUNG | 1.0 | 1.0 | 0.0 | - | - | Das Relais wird mit Schutzfunktion Timeout 4s direkt angesteuert siehe Tabelle TAB_RELAIS_RICHTUNG |
| RELAIS_NUMBER | 0-n | high | unsigned char | - | TAB_RELAIS_NUMBER | 1.0 | 1.0 | 0.0 | - | - | angesteuertes Relais siehe Tabelle TAB_RELAIS_NUMBER |

### ARG_0XD19E

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | 0-n | - | unsigned char | - | TAB_SHD_ESH | 1.0 | 1.0 | 0.0 | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH |
| AKTION | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Steuern Hallversorgung 0x00: Aus 0x01: Ein |

### ARG_0XD1BF

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Statistikzähler löschen |

### ARG_0XD1C1

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | - | - | Statistikzähler löschen |

### ARG_0XDCA8

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | int | - | TAB_DWA_LED | 1.0 | 1.0 | 0.0 | 0.0 | 3.0 | Ansteuerung der DWA-LED 0: Aus  1: Dauer-Ein  2: Blinken  3: Blitzen |
| ZEIT | ms | - | int | - | - | 1.0 | 1.0 | 0.0 | - | - | Angabe der Zeit in ms |

### ARG_0XDCAA

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OPT_ENTSCHAERFEN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Optische Bestätigung bei entschärfen Aus  1= Optische Bestätigung bei entschärfen Ein |
| AKUST_ENTSCHAERFEN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Akustische Bestätigung bei entschärfen Aus  1= Akustische Bestätigung bei entschärfen Ein |
| OPT_SCHAERFEN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Optische Bestätigung bei schärfen Aus  1= Optische Bestätigung bei schärfen Ein |
| AKUST_SCHAERFEN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Akustische Bestätigung bei schärfen Aus  1= Akustische Bestätigung bei schärfen Ein |
| OPT_SCHAERFEN_KLAPPE | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Optische Bestätigung bei schärfen über Klappe Aus  1= Optische Bestätigung bei schärfen über Klappe Ein |
| AKUST_SCHAERFEN_KLAPPE | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0.0 | 1.0 | 0= Akustische Bestätigung bei schärfen über Klappe Aus  1= Akustische Bestätigung bei schärfen über Klappe Ein |

### ARG_0XDCB5

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AKTION | 0-n | - | int | - | TAB_DWA_SCHNELLTEST | 1.0 | 1.0 | 0.0 | - | - | 0: Vorgang abbrechen; 1: Schnelltest leise 2: Schnelltest normal |

### ARG_0XDD16

| ARG | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OBD_UEBERWACHUNG | 0/1 | high | unsigned char | - | - | - | - | - | - | - | 0 = OBD-Überwachung nicht aktiv 1 = OBD-Überwachung aktiv |

### ARG_0XF000

| ARG | STR | STPR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | MIN | MAX | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ELEMENT | + | - | 0-n | high | unsigned char | - | TAB_SHD_ESH_ENTW | - | - | - | - | - | Auswahl Element siehe Tabelle TAB_SHD_ESH_ENTW |
| AUSGABE_KONFIG_1 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ein- und Ausschalten der Debugausgabe über den CAN-Bus 0x00 = Ausgabe SHD deaktiviert 0x01 = Ausgabe SHD aktiviert |
| AUSGABE_KONFIG_2 | + | - | 0/1 | high | unsigned char | - | - | - | - | - | - | - | Ein- und Ausschalten der Debugausgabe über den CAN-Bus 0x00 = Ausgabe ESH deaktiviert 0x01 = Ausgabe ESH aktiviert |

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
| F_HLZ_VIEW | - |

### FORTTEXTE

| ORT | ORTTEXT | EREIGNIS_DTC |
| --- | --- | --- |
| 0x025600 | Energiesparmode aktiv | 0 |
| 0x02FF56 | Dummy-Fehlerspeichereintrag im Komponentenfehlerbereich nur für Testzwecke | 1 |
| 0x030200 | SHD, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030201 | SHD, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030202 | SHD, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030203 | SHD, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030205 | SHD, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030206 | SHD, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030207 | SHD, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x030208 | SHD: Hallelemente A und B: Kurzschluss Motorzuleitung nach Ubatt oder Relaiskleber oder Einheit mechanisch bewegt | 0 |
| 0x030209 | SHD, Hallelemente A und B: Kurzschluss zwischen Zuleitung oder Motoreinheit defekt | 0 |
| 0x03020A | SHD, Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03020B | SHD, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03020C | SHD, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03020D | SHD, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03020E | SHD, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03020F | SHD, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030210 | SHD: Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030211 | SHD, Bewegung falscher Motor: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030212 | SHD: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030214 | SHD: Nullposition überfahren, Normierungsverlust | 0 |
| 0x030215 | SHD: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030216 | SHD: Motortemperatur 90% Schwelle überschritten | 1 |
| 0x030217 | SHD: Motorlauf wegen Übertemperatur unterbrochen | 1 |
| 0x030218 | SHD: Kein Motorstart wegen Überspannung oder Unterspannung | 1 |
| 0x030219 | SHD: Checksumme Codierung fehlerhaft | 0 |
| 0x03021C | SHD: Keine Initialisierung aufgrund ungültiger Randbedingungen (Motortreiber) | 1 |
| 0x03021D | SHD: Abschaltung Hallvorsorgung wegen Überspannung | 1 |
| 0x03021E | SHD: Motoransteuerung nicht möglich,  keine Spannung am Relaiseingang | 0 |
| 0x030220 | SHD: System nicht normiert | 0 |
| 0x030280 | ESH, Relais Öffnen, fehlende Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030281 | ESH, Relais Schliessen, keine Aussgangsspannung: Relaiskleber oder Sicherung defekt oder Kurzschluss nach Masse | 0 |
| 0x030282 | ESH, Relais Öffnen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030283 | ESH, Relais Schliessen: Kurzschluss nach Ubatt oder Relaiskleber | 0 |
| 0x030285 | ESH, Hallelement A: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030286 | ESH, Hallelement B: Hallelement defekt oder Leitungsunterbrechung | 0 |
| 0x030287 | ESH, Hallelemente A und B: Motoreinheit defekt oder Leitungsunterbrechung | 0 |
| 0x030288 | ESH: Hallelemente A und B: Kurzschluss Motorzuleitung nach Ubatt oder Relaiskleber oder Einheit mechanisch bewegt | 0 |
| 0x030289 | ESH, Hallelemente A und B: Kurzschluss zwischen Zuleitung oder Motoreinheit defekt | 0 |
| 0x03028A | ESH, Hallelement A: Kurzschluss nach Masse | 0 |
| 0x03028B | ESH, Hallelement B: Kurzschluss nach Masse | 0 |
| 0x03028C | ESH, Hallelement A: Kurzschluss nach Ubatt | 0 |
| 0x03028D | ESH, Hallelement B: Kurzschluss nach Ubatt | 0 |
| 0x03028E | ESH, Hallelement A: Leitungsunterbrechung | 0 |
| 0x03028F | ESH, Hallelement B: Leitungsunterbrechung | 0 |
| 0x030290 | ESH: Hallelemente zeigen falsche Drehrichtung: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030291 | ESH, Bewegung falscher Motor: Verpolung Stecker oder Kabelbaum | 0 |
| 0x030292 | ESH: Timeout Ansteuerung, keine Blockerkennung | 0 |
| 0x030294 | ESH: Nullposition überfahren, Normierungsverlust | 0 |
| 0x030295 | ESH: ungültige Kennlinie, keine Normierung vorhanden | 0 |
| 0x030296 | ESH: Motortemperatur 90% Schwelle überschritten | 1 |
| 0x030297 | ESH: Motorlauf wegen Übertemperatur unterbrochen | 1 |
| 0x030298 | ESH: Kein Motorstart wegen Überspannung oder Unterspannung | 1 |
| 0x030299 | ESH: Checksumme Codierung fehlerhaft | 0 |
| 0x03029C | ESH: Keine Initialisierung aufgrund ungültiger Randbedingungen (Motortreiber) | 1 |
| 0x03029D | ESH: Abschaltung Hallvorsorgung wegen Überspannung | 1 |
| 0x03029E | ESH: Motoransteuerung nicht möglich,  keine Spannung am Relaiseingang | 0 |
| 0x0302A0 | ESH: System nicht normiert | 0 |
| 0x801A00 | Diebstahlwarnanlage, Ultraschall-Senorik: ein oder zwei Kanäle defekt | 0 |
| 0x801A01 | Diebstahlwarnanlage: LED oder Leitung LED Kurzschluss nach Plus | 0 |
| 0x801A02 | Codierung: Steuergerät ist nicht codiert | 0 |
| 0x801A03 | Schiebedach, Bedienschalter: unzulässige Kombination der Schaltereingänge | 0 |
| 0x801A05 | Codierung: Fehler bei Codierung aufgetreten | 0 |
| 0x801A06 | Codierung: Signatur für Daten ungültig | 0 |
| 0x801A07 | Codierung: Codierung passt nicht zum Fahrzeug | 0 |
| 0x801A08 | Codierung: Unplausible Daten während Transaktion | 0 |
| 0x801A32 | Schiebedach, Bedienschalter: Taster hängt | 1 |
| 0x801A38 | Unterspannung erkannt | 1 |
| 0x801A39 | Überspannung erkannt | 1 |
| 0x801A4B | SINE: Externe Versorgung Unterspannung | 1 |
| 0x801A4C | SINE: Interne Versorgung Unterspannung | 1 |
| 0x801A4D | SINE: EEPROM fehlerhaft | 0 |
| 0x801A4E | SINE: Aktiver Schutz fehlerhaft | 0 |
| 0x801A4F | SINE: Aufweckzeit fehlerhaft | 0 |
| 0x801A50 | SINE: Sirenenschaltkreis defekt | 0 |
| 0x801A51 | SINE: Neigungsgeber defekt | 0 |
| 0x801A52 | SINE: Kodierdaten Schreibfehler | 0 |
| 0x801A53 | SINE: Selbsttest timeout | 0 |
| 0x801A54 | Diebstahlwarnanlage: DWA-LED: Kurzschluß nach Masse | 0 |
| 0x801A55 | Diebstahlwarnanlage: Alarm - Details im Alarmspeicher | 1 |
| 0x801A56 | Diebstahlwarnanlage: Panikalarm - Details im Panikspeicher | 1 |
| 0xDE8468 | BODY-CAN Control Module Bus OFF | 0 |
| 0xDE8BFF | Dummy-Fehlerspeichereintrag im Netzwerkfehlerbereich nur für Testzwecke | 1 |
| 0xDE8C5E | LIN: Sine antwortet nicht | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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
| 0x03021A | SHD: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03021B | SHD: Reversierung im Emergency-Modus | 1 |
| 0x03021F | SHD: Keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt | 0 |
| 0x030221 | SHD: Manueller Initialisierungsvorgang | 1 |
| 0x030222 | SHD: Automatischer Initialisierungsvorgang | 1 |
| 0x03029A | ESH: Einklemmfall im Panik-Modus erkannt | 1 |
| 0x03029B | ESH: Reversierung im Emergency-Modus | 1 |
| 0x03029F | ESH: Keine OSEK Rechenzeit für Einklemmschutzalgorithmus zugeteilt, Motor gestoppt | 0 |
| 0x0302A1 | ESH: Manueller Initialisierungsvorgang | 1 |
| 0x0302A2 | ESH: Automatischer Initialisierungsvorgang | 1 |
| 0x801A09 | FZD: Überlauf Resetcounter (>100x) | 0 |
| 0x801A0A | FLS_E_ERASE_FAILED | 0 |
| 0x801A0B | FLS_E_READ_FAILED | 0 |
| 0x801A0C | FLS_E_WRITE_FAILED | 0 |
| 0x801A0D | FLS_E_COMPARE_FAILED | 0 |
| 0x801A0E | NVM_E_INTEGRITY_FAILED | 0 |
| 0x801A0F | NVM_E_REQ_FAILED | 0 |
| 0x801A10 | NVM_E_WRONG_CONFIG_ID | 0 |
| 0x801A11 | NVM_E_READ_FAILED | 0 |
| 0x801A12 | NVM_E_READ_ALL_FAILED | 0 |
| 0x801A13 | NVM_E_ERASE_FAILED | 0 |
| 0x801A14 | NVM_E_CONTROL_FAILED | 0 |
| 0x801A15 | NVM_E_WRITE_FAILED | 0 |
| 0x801A16 | NVM_E_WRITE_ALL_FAILED | 0 |
| 0x801A17 | COMM_E_NET_START_IND_CHANNEL_0 | 0 |
| 0x801A18 | COMM_E_START_Tx_TIMEOUT_C0 | 0 |
| 0x801A19 | COMM_E_STOP_Tx_TIMEOUT_C0 | 0 |
| 0x801A1A | IPDUM_E_TRANSMIT_FAILED | 0 |
| 0x801A1B | LINIF_E_NC_NO_RESPONSE | 0 |
| 0x801A1C | LINIF_E_RESPONSE | 0 |
| 0x801A1D | MCU_E_CLOCK_FAILURE | 0 |
| 0x801A1E | MCU_E_LOCK_FAILURE | 0 |
| 0x801A1F | ECUM_E_ALL_RUN_REQUESTS_KILLED | 0 |
| 0x801A20 | CAN_E_TIMEOUT | 0 |
| 0x801A21 | CANIF_E_FULL_TX_BUFFER | 0 |
| 0x801A22 | CANIF_E_INVALID_RXPDUID | 0 |
| 0x801A23 | CANIF_E_INVALID_TXPDUID | 0 |
| 0x801A24 | CANIF_E_STOPPED | 0 |
| 0x801A25 | CANNM_E_CANIF_TRANSMIT_ERROR | 0 |
| 0x801A26 | CANNM_E_INIT_FAILED | 0 |
| 0x801A27 | CANTP_E_COMM | 0 |
| 0x801A28 | CNM_E_NETWORK_TIMEOUT | 0 |
| 0x801A29 | CNM_E_TX_PATH_FAILED | 0 |
| 0x801A2A | WDG_E_DISABLE_REJECTED | 0 |
| 0x801A2B | WDG_E_MODE_SWITCH_FAILED | 0 |
| 0x801A2C | WDGM_E_ALIVE_SUPERVISION | 0 |
| 0x801A2D | WDGM_E_SET_MODE | 0 |
| 0x801A2E | DM_Queue_DELETED | 0 |
| 0x801A2F | DM_Queue_FULL | 0 |
| 0x801A30 | DM_EVENT_ZEITBOTSCHAFTTIMEOUT | 0 |
| 0x801A57 | Diebstahlwarnanlage: Deaktivierung IRS und Neigungsgeber per Kundenfunktion | 1 |
| 0x801A58 | EEPROM has an access error of type 1 | 1 |
| 0x801A59 | EEPROM has an access error of type 2 | 1 |
| 0x801A5A | EEPROM has an access error of type 3 | 1 |
| 0x801A5B | EEPROM has an access error of type 4 | 1 |
| 0xDE9500 | Botschaft (Fahrzeugzustand, 0x3A0) fehlt | 1 |
| 0xFFFFFF | unbekannter Fehlerort | 0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### RES_0X4100

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV | - | - | - | Status Thermomonitor aktiv siehe Tabelle TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV |
| STAT_ESH_THERMOMONITOR_AKTIV | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV | 1.0 | 1.0 | 0.0 | Status Thermomonitor aktiv siehe Tabelle TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV |

### RES_0X4101

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_FREIGABE_GLOBAL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Freigabe Global  0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |
| STAT_ESH_FREIGABE_GLOBAL | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Freigabe Global  0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |
| STAT_SHD_FREIGABE_PANIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Freigabe Panik  0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |
| STAT_ESH_FREIGABE_PANIK | 0/1 | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Freigabe Panik  0x00 Freigabe nicht aktiv 0x01 Freigabe aktiv |

### RES_0X4103

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_BEREICH | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE | - | - | - | Status Modus siehe Tabelle TAB_FH_SHD_ESH_EMERGENCY_PANIC_NR_MODE |

### RES_0X4107

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

### RES_0X4108

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

### RES_0X4109

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

### RES_0X6012

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_FZD_ALARM_MOTORHAUBE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt MotorHaube |
| STAT_FZD_ALARM_FAT_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt FAhrerTür |
| STAT_FZD_ALARM_BFT_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt BeiFahrerTür |
| STAT_FZD_ALARM_FATH_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt FAhrerTür Hinten |
| STAT_FZD_ALARM_BFTH_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Klappenkontakt BeiFahrerTür Hinten |
| STAT_FZD_ALARM_HECKKLAPPE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Heckklappe |
| STAT_FZD_ALARM_HECKSCHEIBE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Heckscheibe |
| STAT_FZD_ALARM_OBD_KOMMUNIKATION_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme OBD-Kommunikation |
| STAT_FZD_ALARM_LEITUNGSUEBERWACHUNG_SINE_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Leitungsüberwachung LIN-SINE |
| STAT_FZD_ALARM_MANIPULATION_AUTH_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Manipulationsschutz Authentifizierung |
| STAT_FZD_ALARM_USIS_KANAL_A_UND_B_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl USIS-Alarme gleichzeitig auf Kanal A und B (rechts + links) |
| STAT_FZD_ALARM_USIS_KANAL_A_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl USIS-Alarme nur auf Kanal A (rechts) |
| STAT_FZD_ALARM_USIS_KANAL_B_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl USIS-Alarme nur auf Kanal B (links) |
| STAT_SINE_ALARM_NEIGUNGSGEBER_X_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Neigungsgeber X-Achse |
| STAT_SINE_ALARM_NEIGUNGSGEBER_Y_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Neigungsgeber Y-Achse |
| STAT_SINE_ALARM_NEIGUNGSGEBER_X_UND_Y_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Neigungsgeber X- und Y-Achse |
| STAT_SINE_ALARM_SPANNUNG_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Unterbrechung Spannungsversorgung der LIN-SINE |
| STAT_SINE_ALARM_LIN_TELEGRAMM_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme LIN-Bus: kein Telegramm absetzbar |
| STAT_FZD_ALARM_PANIKALARM_WERT | count | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Anzahl Alarme Panikalarm |

### RES_0X6013

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ALARM_1_ID | 0-n | high | unsigned char | - | ARG_6013 | - | - | - | Alarmcode LIN-SINE |
| STAT_ALARM_1_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |
| STAT_ALARM_2_ID | 0-n | high | unsigned char | - | ARG_6013 | - | - | - | Alarmcode LIN-SINE |
| STAT_ALARM_2_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |
| STAT_ALARM_3_ID | 0-n | high | unsigned char | - | ARG_6013 | 1.0 | 1.0 | 0.0 | Alarmcode LIN-SINE |
| STAT_ALARM_3_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |
| STAT_ALARM_4_ID | 0-n | high | unsigned char | - | ARG_6013 | 1.0 | 1.0 | 0.0 | Alarmcode LIN-SINE |
| STAT_ALARM_4_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |
| STAT_ALARM_5_ID | 0-n | high | unsigned char | - | ARG_6013 | 1.0 | 1.0 | 0.0 | Alarmcode LIN-SINE |
| STAT_ALARM_5_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Alarm |

### RES_0X6014

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LOW_EXTERN_BAT_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D11  externe Spannung niedrig |
| STAT_LOW_EXTERN_BAT_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D11  externe Spannung niedrig |
| STAT_LOW_INTERN_BAT_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D12  interne Spannung niedrig |
| STAT_LOW_INTERN_BAT_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D12  interne Spannung niedrig |
| STAT_EEPROM_ID | 0-n | high | unsigned char | - | ARG_6014 | 1.0 | 1.0 | 0.0 | Status DTC 0x9D13  EEPROM KO |
| STAT_EEPROM_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D13  EEPROM KO |
| STAT_AKTIV_SCHUTZ_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D14  Aktiver Schutz KO |
| STAT_AKTIV_SCHUTZ_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D14  Aktiver Schutz KO |
| STAT_AUFWACHZEIT_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D15  falsche Aufstartzeit |
| STAT_AUFSTARTZEIT_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D15  falsche Aufstartzeit |
| STAT_KLANGSCHALTKREIS_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D16  Klangschaltkreis KO |
| STAT_KLANGSCHALTKREIS_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D16  Klangschaltkreis KO |
| STAT_NEIGUNGSGEBER_ID | 0-n | high | unsigned char | - | ARG_6014 | - | - | - | Status DTC 0x9D1F  Neigungsgeber KO |
| STAT_NEIGUNGSGEBER_TEMP_WERT | ° | high | char | - | - | 1.0 | 1.0 | 0.0 | Temperatur bei Eintragung DTC 0x9D1F  Neigungsgeber KO |

### RES_0X6015

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SPANNUNG_MAXIMAL_WERT | V | high | unsigned char | - | - | 1.0 | 10.0 | 0.0 | Aufgetretene Maximalspannung bei Verpolung |
| STAT_ZEIT_UNTER_1V_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit mit Spannung < -1V |
| STAT_ZEIT_UNTER_2V_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit mit Spannung < -2V |
| STAT_ZEIT_UNTER_3V_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit mit Spannung < -3V |
| STAT_ZEIT_UNTER_4V_WERT | s | high | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Zeit mit Spannung < -4V |

### RES_0XA17C

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |
| STAT_SHD_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |
| STAT_ESH_VORGANG_NR | + | - | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_EINLERNVORGANG | 1.0 | 1.0 | 0.0 | Zuordnung siehe Tabelle TAB_FH_SHD_EINLERNVORGANG |

### RES_0XA183

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA184

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA185

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA186

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA187

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XA188

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | 1.0 | 1.0 | 0.0 | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### RES_0XAA76

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_SELBSTTEST_NR | - | - | + | 0-n | - | char | - | TAB_DWA_SELBSTTEST_ERG | 1.0 | 1.0 | 0.0 | 0: Selbsttest NIO  1: Selbsstest IO 2: Selbsttest läuft |

### RES_0XD180

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall A Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall A Versorgung 0x00: Aus 0x01: Ein |
| STAT_HALL_A_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallanschluss siehe Tabelle TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall B Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_HALL_B_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall B Versorgung 0x00: Aus 0x01: Ein |
| STAT_HALL_B_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallanschluss siehe Tabelle TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND |

### RES_0XD192

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_TASTER_SHD_ESH_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_VERFAHREN | 1.0 | 1.0 | 0.0 | Tasteranforderung siehe Tabelle TAB_FH_ESH_VERFAHREN |
| STAT_TASTER_RESERVE | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | noch unbelgt |

### RES_0XD196

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_INIT | 1.0 | 1.0 | 0.0 | Initialisierungsergebnis siehe Tabelle TAB_FH_SHD_ESH_INIT |
| STAT_SHD_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Bewegung des Elements siehe Tabelle TAB_FH_SHD_ESH_BEWEGUNG |
| STAT_SHD_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | 1.0 | 1.0 | 0.0 | Aktuelle Position des Glasdeckels siehe Tabelle TAB_FH_SHD_ESH_POSITION |
| STAT_SHD_POSITION_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position in Hall-Pulsen (500 bedeutet komplett geschlossen) |
| STAT_SHD_POSITION_HALL_MIN_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Position in Hall-Pulsen |
| STAT_SHD_POSITION_HALL_MAX_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Position in Hall-Pulsen |
| STAT_SHD_POSITION_MM_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Schlittenweg in mm zwischen MIN und MAX in Millimeter (0 bedeut komplett geschlossen) |
| STAT_SHD_POSITION_MM_MIN_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Minimale Position in Millimeter |
| STAT_SHD_POSITION_MM_MAX_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Maximale Position in Millimeter |
| STAT_SHD_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg 0% bedeutet offen /100% bedeutet geschlossen |
| STAT_SHD_LAGE_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | 1.0 | 1.0 | 0.0 | Lage Glasdeckel siehe Tabelle TAB_FH_SHD_ESH_LAGE_NR |
| STAT_SHD_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. siehe Tabelle TAB_FH_SHD_ESH_ZUSTAND_TUER |
| STAT_SHD_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_FREIGABE | 1.0 | 1.0 | 0.0 | Freigabezustand siehe Tabelle TAB_FH_SHD_ESH_FREIGABE |
| STAT_SHD_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_SHD_RESERVE | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1A6

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_SHD_RESERVE_1 | 0-n | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Von SHD nicht benutzt! |
| STAT_SHD_MOTORTEMPERATUR_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MOTORTEMPERATUR | - | - | - | Motortemperaturbereiche siehe Tabelle TAB_FH_SHD_ESH_MOTORTEMPERATUR |
| STAT_SHD_AUSSENTEMPERATUR_WERT | °C | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Aussentemperatur (Codierung analog CAN-Signal) |
| STAT_SHD_MT_LIEFERANT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_MT_LIEFERANT | 1.0 | 1.0 | 0.0 | Lieferant des Motortreibers siehe Tabelle TAB_FH_SHD_ESH_MT_LIEFERANT |
| STAT_SHD_MT_SW_VERSION | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | SW-Version Byte 0 = Patchlevelnumber Byte 1 = Minorversionnumber Byte2 = Majorversionnumber Byte3 = unused |
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

### RES_0XD1B9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais A 0x00: Aus 0x01: Ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais A 0x00: Aus 0x01: Ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Ansteuerung Relais B 0x00: Aus 0x01: Ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Status Rückleseleitung Relais B 0x00: Aus 0x01: Ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eingangsspannung am Relais (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_B_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eingangsspannung am Relais (Klemmenspannung des Motors) . Auflösung 0,01 V |

### RES_0XD1BA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ESH_INIT_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_INIT | 1.0 | 1.0 | 0.0 | Initialisierungsergebnis siehe Tabelle TAB_FH_SHD_ESH_INIT |
| STAT_ESH_BEWEGUNG_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_BEWEGUNG | 1.0 | 1.0 | 0.0 | Bewegung des Elements siehe Tabelle TAB_FH_SHD_ESH_BEWEGUNG |
| STAT_ESH_POSITION_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_POSITION | 1.0 | 1.0 | 0.0 | Aktuelle Position des Schiebehimmels siehe Tabelle TAB_FH_SHD_ESH_POSITION |
| STAT_ESH_POSITION_HALL_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Aktuelle Position in Hall-Pulsen (500 bedeutet komplett geschlossen) |
| STAT_ESH_POSITION_HALL_MIN_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Minimale Position in Hall-Pulsen |
| STAT_ESH_POSITION_HALL_MAX_WERT | Ink | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Maximale Position in Hall-Pulsen |
| STAT_ESH_POSITION_MM_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | liefert den Schlittenweg in mm zwischen MIN und MAX in Millimeter (0 bedeut komplett geschlossen) |
| STAT_ESH_POSITION_MM_MIN_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Minimale Position in Millimeter |
| STAT_ESH_POSITION_MM_MAX_WERT | mm | - | int | - | - | 1.0 | 1.0 | 0.0 | Maximale Position in Millimeter |
| STAT_ESH_POSITION_PROZENT_WERT | % | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | % vom maximalen Verfahrweg 0% offen / 100% geschlossen |
| STAT_ESH_LAGE_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_LAGE_NR | 1.0 | 1.0 | 0.0 | Lage Schiebehimmel siehe Tabelle TAB_FH_SHD_ESH_LAGE_NR |
| STAT_ESH_ZUSTAND_TUER_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_ZUSTAND_TUER | 1.0 | 1.0 | 0.0 | Status Türkontakt, der den Motortreiber zur Verfügung steht. siehe Tabelle TAB_FH_SHD_ESH_ZUSTAND_TUER |
| STAT_ESH_FREIGABE_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_FREIGABE | 1.0 | 1.0 | 0.0 | Freigabezustand siehe Tabelle TAB_FH_SHD_ESH_FREIGABE |
| STAT_ESH_PANIKMODUS_AKTIV_NR | 0-n | - | unsigned char | - | TAB_FH_PANIKMODUS | 1.0 | 1.0 | 0.0 | Status Verknüpfung Freigabe Panikmodus |
| STAT_ESH_RESERVE | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve |

### RES_0XD1BB

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_HALL_A_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall A Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_HALL_A_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall A Versorgung 0x00: Aus 0x01: Ein |
| STAT_HALL_A_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallanschluss siehe Tabelle TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND |
| STAT_HALL_B_SCHALTZUSTAND_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall B Schaltzustand 0x00: Aus 0x01: Ein |
| STAT_HALL_B_VERSORGUNG_EIN | 0/1 | - | unsigned char | - | - | 1.0 | 1.0 | 0.0 | Hall B Versorgung 0x00: Aus 0x01: Ein |
| STAT_HALL_B_FEHLERZUSTAND_NR | 0-n | - | unsigned char | - | TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND | 1.0 | 1.0 | 0.0 | Fehlerzustand Hallanschluss siehe Tabelle TAB_FH_SHD_ESH_HALL_FEHLERZUSTAND |

### RES_0XD1BC

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_RELAIS_A_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Ansteuerung Relais A 0x00: Aus 0x01: Ein |
| STAT_RELAIS_A_RUECK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Rückleseleitung Relais A 0x00: Aus 0x01: Ein |
| STAT_RELAIS_B_ANSTEUERUNG_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Ansteuerung Relais B 0x00: Aus 0x01: Ein |
| STAT_RELAIS_B_RUECK_EIN | 0/1 | - | unsigned char | - | - | - | - | - | Status Rückleseleitung Relais B 0x00: Aus 0x01: Ein |
| STAT_RELAIS_A_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eingangsspannung am Relais (Klemmenspannung des Motors) . Auflösung 0,01 V |
| STAT_RELAIS_B_VERSORGUNG_WERT | V | - | unsigned int | - | - | 1.0 | 100.0 | 0.0 | Eingangsspannung am Relais (Klemmenspannung des Motors) . Auflösung 0,01 V |

### RES_0XD1BD

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

### RES_0XD1BE

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NACHNORMIERUNG_AUTOMATISCH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl automatische Nachnormierungen |
| STAT_NACHNORMIERUNG_MANUELL | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl manuelle Nachnormierungen |
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
| STAT_BETAETIGUNG_BEI_MINUS_10_GRAD | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betätigungen bei minus 10 Grad |
| STAT_REVERSIER_BEI_0_GRAD | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reversiervorgänge bei kleiner 0 Grad |
| STAT_RESERVE_1 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 1 |
| STAT_RESERVE_2 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 2 |
| STAT_RESERVE_3 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 3 |
| STAT_RESERVE_4 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 4 |
| STAT_RESERVE_5 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 5 |
| STAT_RESERVE_6 | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve 6 |

### RES_0XD1C0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NACHNORMIERUNG_AUTOMATISCH | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl automatische Nachnormierungen |
| STAT_NACHNORMIERUNG_MANUELL | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Anzahl manuelle Nachnormierungen |
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
| STAT_BETAETIGUNG_BEI_MINUS_10_GRAD | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Betätigungen bei minus 10 Grad |
| STAT_REVERSIER_BEI_0_GRAD | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reversiervorgänge bei kleiner 0 Grad |
| STAT_RESERVE_1 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 1 |
| STAT_RESERVE_2 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 2 |
| STAT_RESERVE_3 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 3 |
| STAT_RESERVE_4 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 4 |
| STAT_RESERVE_5 | 0-n | - | unsigned long | - | - | 1.0 | 1.0 | 0.0 | Reserve 5 |
| STAT_RESERVE_6 | 0-n | - | unsigned int | - | - | 1.0 | 1.0 | 0.0 | Reserve 6 |

### RES_0XDCA2

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_LEITUNG_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status der Leitungsüberwachung |
| STAT_UNTERSPANNUNG_EXT_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Unterspannungsüberwachung der externen Batterie |
| STAT_EEPROM_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Überwachnung EEPROM |
| STAT_AKTIVER_SCHUTZ_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Aktiver Schutz |
| STAT_WAKE_UP_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Überwachung der WakeUp-Zeit |
| STAT_SIRENE_AKUSTIK_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Sirenenschaltkreis (Akustik) |
| STAT_TILT_NR | 0-n | - | char | - | TAB_DWA_SINE_INTERN | 1.0 | 1.0 | 0.0 | Status Neigungsgeber |

### RES_0XDCA8

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_LED_NR | 0-n | - | char | - | TAB_DWA_LED | 1.0 | 1.0 | 0.0 | 0: Aus 1: Dauer-Ein 2: Blinken 3: Blitzen |

### RES_0XDCA9

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_NEIGUNG_X_ACHSE_WERT | Grad | - | int | - | - | 1.0 | 1.0 | 0.0 | Neigungswinkel X-Achse in Grad |
| STAT_NEIGUNG_Y_ACHSE_WERT | Grad | - | int | - | - | 1.0 | 1.0 | 0.0 | Neigungswinkel Y-Achse in Grad |

### RES_0XDCAA

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_CKM_OPT_ENTSCHAERFEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Optische Bestätigung bei entschärfen Aus; 1=  Optische Bestätigung bei entschärfen Ein |
| STAT_DWA_CKM_AKUST_ENTSCHAERFEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Akustische Bestätigung bei entschärfen Aus 1= Akustische Bestätigung bei entschärfen Ein |
| STAT_DWA_CKM_OPT_SCHAERFEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Optische Bestätigung bei schärfen Aus; 1=  Optische Bestätigung bei schärfen Ein |
| STAT_DWA_CKM_AKUST_SCHAERFEN_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Akustische Bestätigung bei schärfen Aus 1= Akustische Bestätigung bei schärfen Ein |
| STAT_DWA_CKM_OPT_SCHAERFEN_KLAPPE_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Optische Bestätigung bei schärfen über Klappe Aus; 1=  Optische Bestätigung bei schärfen über Klappe Ein |
| STAT_DWA_CKM_AKUST_SCHAERFEN_KLAPPE_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= Akustische Bestätigung bei schärfen über Klappe Aus 1= Akustische Bestätigung bei schärfen über Klappe Ein |

### RES_0XDCB0

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_DWA_ALARM_MOTORHAUBE_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Motorhaube; 1= DWA-Alarm ausgelöst durch Motorhaube |
| STAT_DWA_ALARM_FAT_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Fahrertür; 1= DWA-Alarm ausgelöst durch Fahrertür |
| STAT_DWA_ALARM_BFT_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Beifahrertür; 1= DWA-Alarm ausgelöst durch Beifahrertür |
| STAT_DWA_ALARM_FATH_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Fahrertür hinten; 1= DWA-Alarm ausgelöst durch Fahrertür hinten |
| STAT_DWA_ALARM_BFTH_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Beifahrertür hinten ; 1= DWA-Alarm ausgelöst durch Beifahrertür hinten |
| STAT_DWA_ALARM_HECKKLAPPE_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Heckklappe; 1= DWA-Alarm ausgelöst durch Heckklappe |
| STAT_DWA_ALARM_HECKSCHEIBE_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Heckscheibe; 1= DWA-Alarm ausgelöst durch Heckscheibe |
| STAT_DWA_ALARM_OBD_KOMMUNIKATION_EIN | 0/1 | - | char | - | - | - | - | - | 0= DWA-Alarm nicht ausgelöst durch OBD-Kommunikation; 1= DWA-Alarm ausgelöst durch OBD-Kommunikation |
| STAT_DWA_ALARM_LEITUNGSUEBERWACHUNG_SINE_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Leitungsüberwachung SINE; 1= DWA-Alarm ausgelöst durch Leitungsüberwachung SINE |
| STAT_DWA_ALARM_MANIPULATION_AUTH_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Manipulation Authentisierung; 1= DWA-Alarm ausgelöst durch Manipulation Authentisierung |
| STAT_DWA_ALARM_USIS_A_UND_B_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz A und B; 1= DWA-Alarm ausgelöst durch Innenraumschutz A und B |
| STAT_DWA_ALARM_USIS_A_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz A; 1= DWA-Alarm ausgelöst durch Innenraumschutz A |
| STAT_DWA_ALARM_USIS_B_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Innenraumschutz B; 1= DWA-Alarm ausgelöst durch Innenraumschutz B |
| STAT_DWA_ALARM_NEIGUNGSGEBER_X_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber X-Achse; 1= DWA-Alarm ausgelöst durch Neigungsgeber X-Achse |
| STAT_DWA_ALARM_NEIGUNGSGEBER_Y_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber Y-Achse; 1= DWA-Alarm ausgelöst durch Neigungsgeber Y-Achse |
| STAT_DWA_ALARM_NEIGUNGSGEBER_X_UND_Y_AUSGELOEST_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Neigungsgeber X- und Y-Achse; 1= DWA-Alarm ausgelöst durch Neigungsgeber X- und Y-Achse |
| STAT_DWA_ALARM_SINE_SPANNUNG_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch SINE Spannungsversorgung; 1= DWA-Alarm ausgelöst durch SINE Spannungsversorgung |
| STAT_DWA_ALARM_SINE_LIN_TELEGRAMM_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch SINE kein LIN-Telegramm absetzbar; 1= DWA-Alarm ausgelöst durch SINE kein LIN-Telegramm absetzbar |
| STAT_DWA_ALARM_PANIKALARM_EIN | 0/1 | - | char | - | - | 1.0 | 1.0 | 0.0 | 0= DWA-Alarm nicht ausgelöst durch Panikalarm; 1= DWA-Alarm ausgelöst durch Panikalarm |

### RES_0XDCDD

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

### RES_0XDD16

| RESULTNAME | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_OBD_UEBERWACHUNG | 0/1 | high | unsigned char | - | - | - | - | - | 0 = OBD-Überwachung nicht aktiv 1 = OBD-Überwachung aktiv |

### RES_0XF000

| RESULTNAME | STR | STPR | RRR | EINHEIT | L/H | DATENTYP | MASKE | NAME | MUL | DIV | ADD | INFO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STAT_ROUTINE | + | + | + | 0-n | high | unsigned char | - | TAB_FH_SHD_ESH_STATUS_ROUTINE | - | - | - | Ausführungsstatus siehe Tabelle TAB_FH_SHD_ESH_STATUS_ROUTINE |

### SG_FUNKTIONEN

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD | SG_ADR | SERVICE | ARG_TABELLE | RES_TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SHD_ESH_EINLERNEN | 0xA17C | - | Einlernen des Schiebedachs und elektrischer Schiebehimmel Argument siehe Sub-Tabelle | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA17C | RES_0xA17C |
| SHD_ESH_VERFAHREN_ZEIT | 0xA183 | - | Verfährt die angegebene Scheibe für eine bestimmte Zeit unter Berücksichtigung der angegebenen Funktionen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA183 | RES_0xA183 |
| SHD_ESH_VERFAHREN_SONDERFUNKTION | 0xA184 | - | Führt die angegebene Automatikfunktion aus | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA184 | RES_0xA184 |
| SHD_ESH_VERFAHREN_HALL | 0xA185 | - | Verfährt die angegebene Scheibe auf eine bestimmte Position unter Angabe der Zielposition in Hallinkrementen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA185 | RES_0xA185 |
| SHD_ESH_VERFAHREN_PROZENT | 0xA186 | - | Angabe der Zielposition in Prozent | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA186 | RES_0xA186 |
| SHD_ESH_VERFAHREN_SERVICE_POSITION | 0xA187 | - | Verfährt Scheibe bestimmte Position. Achtung! Nach Ausführen des Jobs ist das System denormiert! | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA187 | RES_0xA187 |
| SHD_ESH_TASTER_STEUERN | 0xA188 | - | Simulation des Tasters (Tastendruck) | - | - | - | - | - | - | - | - | - | 31 | ARG_0xA188 | RES_0xA188 |
| DWA_SINE_ANSTEUERUNG | 0xAA70 | - | Ansteuerung der Sirene für maximal 5 Sekunden | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_SINE_BATT_LEVEL_RESET | 0xAA71 | - | Reset des Batterie-Levels. Nur nach Austausch der Batterie durchführen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_SELBSTTEST | 0xAA76 | - | Selbsttest DWA-System. Gefundene Fehler werden im Fehlerspeicher abgelegt | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA76 | RES_0xAA76 |
| DWA_SCHAERFEN | 0xAA79 | - | 0: DWA entschärfen 1: DWA schärfen | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA79 | - |
| DWA_ALARM_ANZAHL_LOESCHEN | 0xAA7A | - | Anzahl Alarme löschen | - | - | - | - | - | - | - | - | - | 31 | - | - |
| DWA_CAR_KEY_MEMORY_RESET | 0xAA7B | - | Reset des CarKeyMemorys auf die ursprünglichen Codierwerte | - | - | - | - | - | - | - | - | - | 31 | ARG_0xAA7B | - |
| SHD_ESH_NORMIERUNG_LOESCHEN | 0xD17C | - | Denormiert die angebene Scheibe | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD17C | - |
| SHD_ESH_KENNLINIE_LOESCHEN | 0xD17D | - | Löscht die Kennlinie. Es wird nur die Kennlinie gelöscht. Die Normierung bleibt erhalten | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD17D | - |
| SHD_ESH_RELAIS_STEUERN | 0xD17E | - | Steuert das/die Relais zum Verfahren des SHD / ESH an | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD17E | - |
| SHD_HALLSENSOREN | 0xD180 | - | Status der Hallsensoren | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD180 |
| SHD_ESH_TASTER | 0xD192 | - | Status / Simulation Taster Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD192 |
| ESH_VORHANDEN | 0xD193 | STAT_VORHANDEN_ESH | 0x00: elektrischer Schiebehimmel nicht vorhanden 0x01: elektrischer Schiebehimmel vorhanden | 0/1 | - | - | unsigned char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SHD_ESH_TASTER_VORHANDEN | 0xD194 | STAT_VORHANDEN_TASTER_SHD_ESH | 0x00: Kein SHD-Taster vorhanden 0x01: SHD-Taster vorhanden | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SHD_VORHANDEN | 0xD195 | STAT_VORHANDEN_SHD | 1: Schiebedach vorhanden | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| SHD_BEWEGUNG | 0xD196 | - | Status Bewegung Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD196 |
| SHD_ESH_HALLVERSORGUNG | 0xD19E | - | Schaltet die Hallversorgung ein / aus | - | - | - | - | - | - | - | - | - | 2F | ARG_0xD19E | - |
| SHD_STATUS_DETAIL | 0xD1A6 | - | Erweiterter Status Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1A6 |
| SHD_RELAIS | 0xD1B9 | - | Status Relais Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1B9 |
| ESH_BEWEGUNG | 0xD1BA | - | Status elektrischer Schiebehimmel Bewegung | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BA |
| ESH_HALLSENSOREN | 0xD1BB | - | Status Hallsensoren elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BB |
| ESH_RELAIS | 0xD1BC | - | Status Relais elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BC |
| ESH_STATUS_DETAIL | 0xD1BD | - | Erweiterte Informationen elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BD |
| SHD_STATISTIKZAEHLER_LESEN | 0xD1BE | - | Auslesen des Statistikzählers Schiebedach | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1BE |
| SHD_STATISTIKZAEHLER_LOESCHEN | 0xD1BF | - | Löscht den Statistikzähler Schiebedach | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1BF | - |
| ESH_STATISTIKZAEHLER_LESEN | 0xD1C0 | - | Auslesen des Statistikzähler elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xD1C0 |
| ESH_STATISTIKZAEHLER_LOESCHEN | 0xD1C1 | - | Löscht den Statistikzähler elektrischer Schiebehimmel | - | - | - | - | - | - | - | - | - | 2E | ARG_0xD1C1 | - |
| DWA_SINE_LIN | 0xDCA1 | STAT_VORHANDEN_LIN_SIRENE | 0: Keine LIN-Sirene verbaut 1: LIN-Sirene verbaut | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DWA_SINE | 0xDCA2 | - | Status der Sirene / Neigungsgeber | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCA2 |
| DWA_SINE_BATT_LEVEL | 0xDCA3 | STAT_SIRENE_INTERNER_BATTERIE_LEVEL_NR | Status interne Batterie: Siehe Tabelle TAB_SINE_BATT_LEVEL | 0-n | - | high | unsigned char | TAB_SINE_BATT_LEVEL | - | - | - | - | 22 | - | - |
| DWA_LED | 0xDCA8 | - | Status/Steuern DWA-LED. Für Details siehe Sub-Tabelle(n) | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDCA8 | RES_0xDCA8 |
| DWA_SINE_NEIGUNG | 0xDCA9 | - | Neigungswinkel (X- und Y-Achse) des Fahrzeugs. | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCA9 |
| DWA_CAR_KEY_MEMORY | 0xDCAA | - | Status / Steuern CarKeyMemory-Funktionalität der DWA | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0xDCAA | RES_0xDCAA |
| DWA_INTERN | 0xDCAC | STAT_DWA_INTERN_NR | 0: entschärft; | 0-n | - | - | int | TAB_DWA_INTERN | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DWA_ALARM_AUSGELOEST | 0xDCB0 | - | Status, welcher Alarm ausgelöst hat | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCB0 |
| DWA_VORHANDEN | 0xDCB1 | STAT_VORHANDEN_DWA | 0: Keine DWA verbaut 1: DWA verbaut | 0/1 | - | - | char | - | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DWA_USIS_EMPFINDLICHKEIT | 0xDCB2 | STAT_IRS_SENS_EMPFINDLICHKEIT_NR | Aktuelle Empflindlichkeitsstufe | 0-n | - | - | int | TAB_DWA_USIS_EMPF | 1.0 | 1.0 | 0.0 | - | 22 | - | - |
| DWA_SCHNELLTEST | 0xDCB5 | - | Aktiviert den DWA-Schnelltest Modus (Sensoren werden geschaerft) 0: Vorgang beenden 1: leise 2: normale Lautstärke | - | - | - | - | - | - | - | - | - | 2E | ARG_0xDCB5 | - |
| DWA_KLAPPENKONTAKTE | 0xDCDD | - | Status der eingelesenen Klappenkontakte | - | - | - | - | - | - | - | - | - | 22 | - | RES_0xDCDD |
| OBD_UEBERWACHUNG | 0xDD16 | - | Status der OBD-Überwachung | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0xDD16 | RES_0xDD16 |
| SHD_ESH_THERMOMONITOR | 0x4100 | - | Konfiguriert die Thermomonitor Funktion | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4100 | RES_0x4100 |
| SHD_ESH_FREIGABE_AKTIV | 0x4101 | - | Status der Freigabe | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x4101 | RES_0x4101 |
| SHD_ESH_EMERGENCY_PANIC | 0x4103 | - | gezielter Einsatz des Emergency- oder Panik-Modus | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x4103 | RES_0x4103 |
| ESH_BEWERTUNG_KENNLINIE_SCHIEBELAGE | 0x4107 | - | ESH_BEWERTUNG_KENNLINIE_SCHIEBELAGE | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4107 |
| SHD_BEWERTUNG_KENNLINIE_AUSSTELLLAGE_1 | 0x4108 | - | SHD_BEWERTUNG_KENNLINIE_AUSSTELLLAGE_1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4108 |
| SHD_BEWERTUNG_KENNLINIE_SCHIEBELAGE_1 | 0x4109 | - | SHD_BEWERTUNG_KENNLINIE_SCHIEBELAGE_1 | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x4109 |
| DWA_ALARM_ANZAHL | 0x6012 | - | Anzahl ausgelöster Alarme | - | - | - | - | - | - | - | - | - | 22 | - | RES_0x6012 |
| DWA_SINE_ALARMSPEICHER | 0x6013 | - | Lesen / schreiben des Alarmspeichers SINE | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6013 | RES_0x6013 |
| DWA_SINE_FEHLERSPEICHER | 0x6014 | - | Lesen / Schreiben Fehlerspeicher SINE | - | - | - | - | - | - | - | - | - | 2E;22 | ARG_0x6014 | RES_0x6014 |
| DWA_SINE_VERPOLZAEHLER | 0x6015 | - | Lesen / Schreiben SINE Verpolzähler | - | - | - | - | - | - | - | - | - | 22;2E | ARG_0x6015 | RES_0x6015 |
| _SHD_ESH_DEBUG_OUTPUT_KONF | 0xF000 | - | Umsetzung: MT | - | - | - | - | - | - | - | - | - | 31 | ARG_0xF000 | RES_0xF000 |

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
| 0x12 | Alarm FZD: OBD-Kommunikation Ethernet |
| 0x13 | Alarm FZD: OBD-Kommunikation D-CAN |
| 0xFF | Unbekannter Alarm |

### TAB_DWA_INTERN

| WERT | TEXT |
| --- | --- |
| 0x00 | DWA entschärft |
| 0x01 | DWA wird entschärft |
| 0x02 | DWA in Schärfung |
| 0x03 | DWA geschärft |
| 0x04 | DWA geschärft - Klappenkontakte noch ausgeblendet |
| 0x05 | DWA geschärft - Hotelstellung aktiv |
| 0x06 | DWA geschärft - IRS nicht aktiv |
| 0x07 | DWA geschärft - Neigungssensor nicht aktiv |
| 0x08 | DWA geschärft - IRS und Neigungsgebersensor nicht aktiv |
| 0x09 | DWA geschärft - IRS und Neigungsgebersensor durch Benutzer deaktiviert |
| 0x0A | DWA geschärft - Distributionsmodus |
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

### TAB_DWA_REFERENZIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | nicht referenziert |
| 0x01 | referenziert |
| 0xFF | Signal ungültig |

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

### TAB_DWA_STATUS_GEBLAESE

| WERT | TEXT |
| --- | --- |
| 0x00 | Gebläse AUS |
| 0x01 | Gebläse EIN |
| 0x03 | Signal ungültig |

### TAB_DWA_STATUS_OBD_DIAGNOSE

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | aktiv |
| 0x03 | Ungültiger Wert |

### TAB_DWA_STATUS_OBD_HIGH_SPEED_CAN

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht aktiv |
| 0x01 | Aktiv |
| 0xFF | Ungültiger Wert |

### TAB_DWA_STATUS_RESTWAERME

| WERT | TEXT |
| --- | --- |
| 0x00 | Restwärme AUS |
| 0x01 | Restwärme EIN |
| 0x03 | Signal ungültig |

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
| 0x02 | Fenster / Dach offen |
| 0x03 | Klimaanlage / Zuheizer |
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

### TAB_FH_SHD_ESH_EINLERNVORGANG

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
| 0x14 | keine OSEK-Rechenzeit für EkS-Algorythmus zugeteilt |
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
| 0x02 | Küster |
| 0x03 | Magna |
| 0x04 | Webasto |
| 0x05 | Inalfa |
| 0x06 | Arvin Meritor |
| 0x07 | Lames |
| 0xFE | Dummy Motortreiber |
| 0xFF | ungültiger Hersteller |

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

### TAB_FH_SHD_ESH_SERVICEPOSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Montageposition |
| 0x01 | Demontageposition |
| 0x02 | Serviceposition A |
| 0x03 | Serviceposition B |

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
| 0x01 | Thermo 90 aktiv |
| 0x02 | Thermo 100 aktiv |
| 0xFF | ungültig |

### TAB_FH_SHD_ESH_THERMOMONITOR_AKTIV_ARG

| WERT | TEXT |
| --- | --- |
| 0x00 | Normalbetrieb |
| 0x01 | Thermo 90 aktiv |
| 0x02 | Thermo 100 aktiv |
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

### TAB_SHD_ESH

| WERT | TEXT |
| --- | --- |
| 0xA1 | SHD |
| 0xA2 | ESH |
| 0xB0 | SHD + ESH |

### TAB_SHD_ESH_DENORM_URS

| WERT | TEXT |
| --- | --- |
| 0x00 | PDD_DIAG_NORMALIZED normiert |
| 0x01 | PDD_DIAG_INITSTART einlernen über Diagnose oder Taster |
| 0x02 | PDD_DIAG_DIAGCOMMAND Absichtliche Entnormierung über Diagnose |
| 0x03 | PDD_DIAG_ERRCODING zur Zeit nicht benutzt |
| 0x04 | PDD_DIAG_HALLOFF zur Zeit nicht benutzt |
| 0x05 | PDD_DIAG_POSITIONERRI Motortreiber wurde nicht ordnungsgemäß beendet |
| 0x06 | PDD_DIAG_POSITIONERRM zur Zeit nicht benutzt |
| 0x07 | PDD_DIAG_AFTERRESET Beim Start des Motortreibers wurde keine gültige Position im EEPROM gefunden |
| 0x08 | PDD_DIAG_ERRHALL Notabschaltung wegen Überspannung an den Hallsensoren |
| 0x09 | PDD_DIAG_UNKNOWN |
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

### TAB_SINE_BATT_LEVEL

| WERT | TEXT |
| --- | --- |
| 0x00 | Batterie leer |
| 0x01 | Batterie gut |
| 0x02 | Batterie neu |
| 0xFF | Ungültiges Signal |

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

### _TAB_RESET_REASON

| WERT | TEXT |
| --- | --- |
| 0x00 | slot empty |
| 0x01 | power on reset |
| 0x02 | WD reset |
| 0xFF | invalid value |

### _TAB_DWA_TRIGGER_STATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht kodiert in EEPROM |
| 0x01 | Deaktiviert durch den Nutzer ueber den Funkschluessel |
| 0x02 | Deaktiviert wegen Unterspannung |
| 0x03 | Nicht ueberwacht in der DWA |
| 0x04 | Referenzierungsphase |
| 0x05 | Aktiviert und in der Alarmtabelle |
| 0x06 | Fehler in der Referenzierungsphase |
| 0xFF | Ungueliger Wert |

### TAB_DWA_STATUS_FENSTER_POSITION

| WERT | TEXT |
| --- | --- |
| 0x00 | Fenster geschlossen |
| 0x01 | Zwischenstellung |
| 0x02 | Fenster offen |
| 0x03 | Signal ungÃ¼ltig |

### _TAB_USIS_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | inactive |
| 0x01 | echo mode |
| 0x02 | doppler mode |
| 0xFF | invalid value |

### _TAB_SERIAL_INTERFACE

| WERT | TEXT |
| --- | --- |
| 0x00 | serial interface inactive |
| 0x01 | serial interface inactive (routine active) |
| 0xFF | invalid value |

### _TAB_USIS_SELFTEST_RESULT

| WERT | TEXT |
| --- | --- |
| 0x00 | no error |
| 0x01 | error |
| 0xFF | invalid value |

### _TAB_USIS_ALARM_TYPE_ALARM_SOURCE

| WERT | TEXT |
| --- | --- |
| 0x00 | no alarm |
| 0x01 | A channel |
| 0x02 | B channel |
| 0x03 | both channel |
| 0xFF | invalid value |

### _TAB_USIS_ALARM_TYPE_ACTIVATION_MODE

| WERT | TEXT |
| --- | --- |
| 0x00 | Not active |
| 0x01 | Normal mode |
| 0x02 | Window or roof open |
| 0x03 | Air conditioning on |
| 0xFF | invalid value |

### _TAB_USIS_DATA_ENVIRONMENT_THERMAL_STEB

| WERT | TEXT |
| --- | --- |
| 0x00 | -40°C .. -15°C |
| 0x01 | -15°C .. + 5°C |
| 0x02 | +5°C .. +45°C |
| 0x03 | +45°C .. +65°C |
| 0x04 | +65°C .. +85°C |
| 0xFF | invalid value |

### _TAB_USIS_DATA_ENVIRONMENT_READ_ACTIVATION

| WERT | TEXT |
| --- | --- |
| 0x00 | no change |
| 0x01 | Normal mode |
| 0x02 | Window or roof open |
| 0x03 | Air conditioning on |
| 0xFF | invalid value |

### _TAB_USIS_CMD_ECHODOPPLERCOUNTER_RESET

| WERT | TEXT |
| --- | --- |
| 0x01 | echo counter |
| 0x02 | doppler counter |
| 0x03 | echo/doppler transitions history |

### _TAB_USIS_CMD_TOTALALARMCOUNTER_RESET

| WERT | TEXT |
| --- | --- |
| 0x01 | A channel |
| 0x02 | B channel |
| 0x03 | both channels |

### _TAB_USIS_ECHO_DELTA_DRIFT_ZONE

| WERT | TEXT |
| --- | --- |
| 0x00 | near the FZD (Zone #1) |
| 0x01 | far away from FZD (Zone #2) |

### _TAB_USIS_GAIN

| WERT | TEXT |
| --- | --- |
| 0x00 | gain low |
| 0x01 | gain medium low |
| 0x02 | gain medium high |
| 0x03 | gain high |

### _TAB_PORT_DIO_WRITE

| WERT | TEXT |
| --- | --- |
| 0x01 | CMD_DWA_LED |
| 0x02 | CMD_OPEN_LOAD_DWA_LED |
| 0x03 | CMD_SHD_M1 |
| 0x04 | CMD_SHD_M2 |
| 0x05 | CMD_ESH_M1 |
| 0x06 | CMD_ESH_M2 |
| 0x07 | CMD_30F_SW_HALL |
| 0x0A | CMD_TXON |
| 0x0B | CMD_SHUNT |
| 0x0C | CMD_TXD 12 |
| 0x0D | CMD_TXECO1 |
| 0x0E | CMD_TXECO2 |
| 0x0F | CMD_RXENA |
| 0x10 | CMD_GDOP |
| 0x11 | CMD_GH1 |
| 0x12 | CMD_OPHFSUP |
| 0x13 | CMD_GH2 |
| 0x1E | CMD_CONF_VAR |
| 0x1F | CMD_GL1 |
| 0x20 | CMD_GL2 |
| 0x21 | CMD_OPLFSUP |

### _TAB_PORT_FIO_WRITE

| WERT | TEXT |
| --- | --- |
| 0x01 | PWM_SLIDER_LED |
| 0x02 | F80 |

### _TAB_SWITCH_EEP

| WERT | TEXT |
| --- | --- |
| 0x00 | Unlock |
| 0x01 | Lock |
