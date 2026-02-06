# rdc_kbus.prg

## General

|  |  |
| --- | --- |
| File | rdc_kbus.prg |
| Type | PRG |
| Jobs | 33 |
| Tables | 15 |
| Origin | BMW TI-431 Weber |
| Revision | 2.001 |
| Author | Beru_Electronics_GmbH BES Rapp, 3SOFT - Knop, IVM_Automotive_GmbH IE12 Trinkberger, BMW TI-431 Weber |
| ECU Comment | RDC-SGBD fuer E83, E85, R52 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Reifendruck Control (RDC)  |  |  |
| ORIGIN | string | BMW TI-431 Weber |  |  |
| REVISION | string | 2.001 |  |  |
| AUTHOR | string | Beru_Electronics_GmbH BES Rapp, 3SOFT - Knop, IVM_Automotive_GmbH IE12 Trinkberger, BMW TI-431 Weber |  |  |
| COMMENT | string | RDC-SGBD fuer E83, E85, R52 |  |  |
| PACKAGE | string | 1.03 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### POWER_DOWN_MODE

Versetzt das SG in den Power Down Mode

| Name | Type | Description |
| --- | --- | --- |
| WARTEZEIT | int | Zeit in 500ms Schritten Zeitintervall 2..20 Sekunden |

### INIT_EEPROM

Init - Datensatz ins EEProm laden !!!Nach Ausfuehrung macht das RDC einen Reset!!!

_No arguments._

### IDENT_SCHREIBEN

Beschreiben der Ident-Daten (nur Herstelldatum) fuer RDC

| Name | Type | Description |
| --- | --- | --- |
| ID_DATUM_KW | int | Herstelldatum KW Eingabeformat: Dezimal Wertebereich:  1 ... 53 Beispiel:      fuer KW15 ist 15 einzugeben |
| ID_DATUM_JAHR | int | Herstelldatum Jahr Eingabeformat: Dezimal Wertebereich:  0 ... 99 Beispiel:      fuer Jahr 2028 ist 28 einzugeben |

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | Speichersegmente HCS12 Mikrocontroller gueltige Bereiche : 0x00 bis 0x0A Bereich: 0x00 Registerbank ( Adresse 0x3000 .. 0x329F ) Bereich: 0x01 RAM          ( Adresse 0x0000 .. 0x1FFF ) Bereich: 0x02 EEPROM       ( Adresse 0x3800 .. 0x3FFF ) Adresse in den Flash Pages ( Adresse 0x8000 .. 0xBFFF ) Bereich: 0x03 FLASH Page 0x38 Bereich: 0x04 FLASH Page 0x39 Bereiche 0x05 bis Bereich: 0x0A FLASH Page 0x3F |
| ADRESSE | long | Speicheradresse Bereich: 0x0000-0xFFFF |
| ANZAHL | int | Anzahl der Daten Bereich: 1 bis 16 |

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### HERSTELLDATEN_SCHREIBEN

Beschreiben der Herstelldaten

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-9 bzw. 0x00-0x09 |
| BYTE2 | int | Bereich: 0-9 bzw. 0x00-0x09 |
| BYTE3 | int | Bereich: 0-9 bzw. 0x00-0x09 |
| BYTE4 | int | Bereich: 0-9 bzw. 0x00-0x09 |
| BYTE5 | int | Bereich: 0-9 bzw. 0x00-0x09 |
| BYTE6 | int | Bereich: 0-9 bzw. 0x00-0x09 |
| BYTE7 | int | Bereich: 0-9 bzw. 0x00-0x09 |
| BYTE8 | int | Bereich: 0-9 bzw. 0x00-0x09 |
| BYTE9 | int | Bereich: 0-9 bzw. 0x00-0x09 |

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### CODIERUNG_SCHREIBEN

Beschreiben der Codierdaten

| Name | Type | Description |
| --- | --- | --- |
| AREACODE | int | Gebiet Wertebereich: 0 => RDW / 1 => USA |
| REIFENTYP | int | Reifentyp Wertebereich: 0 => Standard Load / 1 => Extra Load |
| FREQUENZVARIANTE | int | Frequenzvariante Wertebereich: 0 => 433MHz / 2 => 315MHz |
| MDOFFSET | int | Offset auf Mindestdruck Wertebereich: 0 bis 60 (x 0,025 bar => entspricht 0 bis 1,5 bar) |
| BAUREIHE | int | Baureihe Wertebereich: 0 => E83, E85, R52 |

### STEUERN_DIGITAL

Aktiviert/Deaktiviert spezielle Dienste (Set == 1)  && ( Reset == 0 ) => Set (Set == 0)  && ( Reset == 1 ) => Reset

| Name | Type | Description |
| --- | --- | --- |
| SET_BANDMODE | unsigned char | 0: Bandmode unveraendert 1: Bandmode setzen |
| RESET_BANDMODE | unsigned char | 0: Bandmode unveraendert 1: Bandmode ruecksetzen |
| SET_ER_FAHRT | unsigned char | 0: Eigenraderkennung bei Fahrt unveraendert 1: Eigenraderkennung bei Fahrt setzen |
| RESET_ER_FAHRT | unsigned char | 0: Eigenraderkennung bei Fahrt unveraendert 1: Eigenraderkennung bei Fahrt ruecksetzen |
| SET_ER_STAND | unsigned char | 0: Eigenraderkennung im Stand unveraendert 1: Eigenraderkennung im Stand setzen |
| RESET_ER_STAND | unsigned char | 0: Eigenraderkennung im Stand unveraendert 1: Eigenraderkennung im Stand ruecksetzen |
| SET_CAL_REQUEST | unsigned char | 0: Kalibrieranforderung unveraendert 1: Kalibrieranforderung setzen |
| RESET_CAL_REQUEST | unsigned char | 0: Kalibrieranforderung unveraendert 1: Kalibrieranforderung ruecksetzen |
| SET_TEST_ER_FAHRT | unsigned char | 0: Empfang der Eigenraeder waehrend der Fahrt pruefen unveraendert 1: Empfang der Eigenraeder waehrend der Fahrt pruefen setzen |
| RESET_TEST_ER_FAHRT | unsigned char | 0: Empfang der Eigenraeder waehrend der Fahrt pruefen unveraendert 1: Empfang der Eigenraeder waehrend der Fahrt pruefen ruecksetzen |
| SET_RDCBUS_DIAG | unsigned char | 0: Stromdiagnose LIN-Teilnehmer unveraendert 1: Stromdiagnose LIN-Teilnehmer setzen |
| RESET_RDCBUS_DIAG | unsigned char | 0: Stromdiagnose LIN-Teilnehmer unveraendert 1: Stromdiagnose LIN-Teilnehmer ruecksetzen |
| SET_SOLLDRUCK_UEBERNEHMEN | unsigned char | 0: Solldruck unveraendert 1: Solldruckuebernahme setzen |
| RESET_SOLLDRUCK_UEBERNEHMEN | unsigned char | 0: Solldruck unveraendert 1: Solldruckuebernahme ruecksetzen |
| SET_TEST_ER_STAND | unsigned char | 0: Empfang der Eigenraeder im Stand pruefen unveraendert 1: Empfang der Eigenraeder im Stand pruefen setzen |
| RESET_TEST_ER_STAND | unsigned char | 0: Empfang der Eigenraeder im Stand pruefen unveraendert 1: Empfang der Eigenraeder im Stand pruefen ruecksetzen |
| SET_TASTER | unsigned char | 0: Reset-Taster unveraendert 1: Reset-Taster gedrückt |
| RESET_TASTER | unsigned char | 0: Reset-Taster unveraendert 1: Reset-Taster nicht gedrückt |

### STATUS_HS_INAKTIVEREIGNIS1_LESEN

Auslesen eines Inaktiveignisses des Historienspeichers

_No arguments._

### STATUS_HS_INAKTIVEREIGNIS2_LESEN

Auslesen eines Inaktiveignisses des Historienspeichers

_No arguments._

### STATUS_HS_KALIBRIEREREIGNIS1_LESEN

Auslesen eines Kalibrierereignisses des Historienspeichers

_No arguments._

### STATUS_HS_KALIBRIEREREIGNIS2_LESEN

Auslesen eines Kalibrierereignisses des Historienspeichers

_No arguments._

### STATUS_HS_WARNEREIGNIS1_LESEN

Auslesen eines Pannenereignisses des Historienspeichers

_No arguments._

### STATUS_HS_WARNEREIGNIS2_LESEN

Auslesen eines Pannenereignisses des Historienspeichers

_No arguments._

### STATUS_HS_WARNUNGSZAEHLER_LESEN

Auslesen der Warnungszaehler des Historienspeichers

_No arguments._

### STATUS_MESSDATEN_BLOCK1_LESEN

Auslesen der Rad-Daten

_No arguments._

### STATUS_MESSDATEN_BLOCK2_LESEN

Auslesen der Rad-Daten

_No arguments._

### STATUS_MESSDATEN_BLOCK3_LESEN

Auslesen der Rad-Daten

_No arguments._

### STATUS_MESSDATEN_BLOCK4_LESEN

Auslesen der Rad-Daten

_No arguments._

### STATUS_MESSDATEN_BLOCK5_LESEN

Auslesen der Rad-Daten

_No arguments._

### STEUERN_RADELEKTRONIK_VORGEBEN

Beschreiben der Rad-Kennung

| Name | Type | Description |
| --- | --- | --- |
| RE_ID | string | RE-Kennung RE-Kennung = 0 bewirkt eine komplette Loeschung der ZOM (Schnellloeschung) |
| RE_POS | int | 1. Radpos 1-5  ( VL, VR, HL, HR, RR ) 2. Radpos 6-10 ( ZOM-Spaltenposition ) |

### STATUS_IO_LESEN

Auslesen der Statusbytes

_No arguments._

### _FS_LESEN_OHNE_AUSB

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| ?10? | ERROR_ARGUMENT |
| ?20? | ERROR_FEHLERANZAHL |
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
| 0x?? | ERROR_ECU_UNKNOWN_STATUSBYTE |

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
| 0xFF | unbekannter Hersteller |

### ROVERPARTNUMPREFIX

| ROVER_NR | PREFIX |
| --- | --- |
| 0xA0 | AMR |
| 0xA1 | HHF |
| 0xA2 | JFC |
| 0xA3 | MKC |
| 0xA4 | SCB |
| 0xA5 | SRB |
| 0xA6 | XQC |
| 0xA7 | XQD |
| 0xA8 | XQE |
| 0xA9 | XVD |
| 0xAA | YAC |
| 0xAB | YDB |
| 0xAC | YFC |
| 0xAD | YUB |
| 0xAE | YWC |
| 0xAF | YWQ |
| 0xB0 | EGQ |
| 0xB1 | YIB |
| 0xB2 | YIC |
| 0xB3 | YIE |
| 0xXY | ??? |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | ja |
| SAE_CODE | nein |
| F_HLZ | nein |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x000 | Betriebsspannung AD-Wandler defekt |
| 0x002 | Schutzschaltung aktiv: Ueberspannung Antennen |
| 0x003 | Lernvorgang bei externer HF-Stoerung nicht moeglich |
| 0x004 | Eigenradstatus nicht erreicht |
| 0x007 | Hardwaredefekt: Speichercheck RAM |
| 0x009 | Hardwaredefekt: R/W-Check EEPROM |
| 0x00b | Hardwaredefekt: Speichercheck ROM |
| 0x00d | Hardwaredefekt: EEPROM-Fehler Kategorie A |
| 0x00f | Hardwaredefekt: EEPROM-Fehler Kategorie E |
| 0x027 | KBUS Timeout |
| 0x02a | Unterspannung Kl.30 |
| 0x02b | Ueberspannung Kl.30 |
| 0x02d | RE VL defekt: Sensorfehler |
| 0x02e | RE VL defekt: Kein Empfang |
| 0x030 | RE VR defekt: Sensorfehler |
| 0x031 | RE VR defekt: Kein Empfang |
| 0x033 | RE HL defekt: Sensorfehler |
| 0x034 | RE HL defekt: Kein Empfang |
| 0x036 | RE HR defekt: Sensorfehler |
| 0x037 | RE HR defekt: Kein Empfang |
| 0x03c | RE defekt: Sensorfehler |
| 0x03d | RE defekt: Kein Empfang |
| 0x065 | Externe HF-Stoerung |
| 0x073 | Kalibrierungszuordnung nicht moeglich |
| 0x07c | Bandmode aktiviert |
| 0x080 | Strom-Diagnose Kanal VL |
| 0x081 | Kurzschluß auf Kanal VL |
| 0x082 | TSS-Bus VL: Verbindungsaufbau gescheitert |
| 0x083 | Strom-Diagnose Kanal VR |
| 0x084 | Kurzschluß auf Kanal VR |
| 0x085 | TSS-Bus VR: Verbindungsaufbau gescheitert |
| 0x086 | Strom-Diagnose Kanal HL |
| 0x087 | Kurzschluß auf Kanal HL |
| 0x088 | TSS-Bus HL: Verbindungsaufbau gescheitert |
| 0x089 | Strom-Diagnose Kanal HR |
| 0x08a | Kurzschluß auf Kanal HR |
| 0x08b | TSS-Bus HR: Verbindungsaufbau gescheitert |
| 0x08c | Strom-Diagnose Kanal Ant |
| 0x08d | Kurzschluß auf Kanal Ant |
| 0x08e | TSS-Bus Ant: Verbindungsaufbau gescheitert |
| 0x08f | Trigger VL defekt: RAM-Fehler |
| 0x090 | Trigger VL defekt: ROM-Fehler |
| 0x095 | Trigger VR defekt: RAM-Fehler |
| 0x096 | Trigger VR defekt: ROM-Fehler |
| 0x09b | Trigger HL defekt: RAM-Fehler |
| 0x09c | Trigger HL defekt: ROM-Fehler |
| 0x0a1 | Trigger HR defekt: RAM-Fehler |
| 0x0a2 | Trigger HR defekt: ROM-Fehler |
| 0x0a7 | Digitalantenne defekt: RAM-Fehler |
| 0x0a8 | Digitalantenne defekt: ROM-Fehler |
| 0x0ad | Kanal VL: falsche Komponente |
| 0x0ae | Kanal VR: falsche Komponente |
| 0x0af | Kanal HL: falsche Komponente |
| 0x0b0 | Kanal HR: falsche Komponente |
| 0x0b1 | Kanal Digitalantenne: falsche Komponente |
| 0x0f0 | CRC HF-Telegramm n.i.O. (inkompatible Digitalantenne) |
| 0xXY | unbekannter Fehlerort |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Geschwindigkeit | km/h | high | unsigned int | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### REPOSITION

| NAME | WERT |
| --- | --- |
| VL | 0x00 |
| VR | 0x01 |
| HL | 0x02 |
| HR | 0x03 |
| RR | 0x04 |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR |
| --- | --- | --- | --- |
| 0xFF | 0x01 | 0x01 | 0x01 |

### TFORTIGNORE

| ORT | ORTTEXT |
| --- | --- |
| 0x027 | KBUS Timeout |
