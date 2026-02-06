# D40TMCA.prg

## General

|  |  |
| --- | --- |
| File | D40TMCA.prg |
| Type | PRG |
| Jobs | 64 |
| Tables | 26 |
| Origin | BMW ZM-E-33 Lexmueller |
| Revision | 2.00 |
| Author | BMW ZM-E-33 Lexmueller |
| ECU Comment | SGBD fuer DDE40/Tojota Mini |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | DDE 4.0 fuer Tojota Mini |  |  |
| ORIGIN | string | BMW ZM-E-33 Lexmueller |  |  |
| REVISION | string | 2.00 |  |  |
| AUTHOR | string | BMW ZM-E-33 Lexmueller |  |  |
| COMMENT | string | SGBD fuer DDE40/Tojota Mini |  |  |
| PACKAGE | string | 1.13 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INTERFACETYPE

Interface-Typ bestimmen und ausgeben Es wird der Name des Interfaces übergeben Wichtig für Baudratenumschaltung weil bei ADS, EADS und OBD sind nur 115200 Baud möglich, bei EDIC nur 125000 Baud möglich

_No arguments._

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen KWP2000: $10 StartDiagnosticSession Modus  : einstellbar mit diesem Job  Wenn MODE = "ECUPM" ( ECUProgrammingMode ) muss nach dem Job die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |
| BAUDRATE | string | optionaler Parameter fuer die gewuenschte Baudrate table BaudRate BAUD |
| SPEZIFISCHE_BAUDRATE_WERT | long | Parameter nur fuer BAUDRATE = 'SB' ( spezifische Baudrate ) |

### DIAGNOSEPROTOKOLL_SETZEN

Wählt ein Diagnoseprotokoll aus

| Name | Type | Description |
| --- | --- | --- |
| DIAG_PROT | string | Diagnoseprotokoll table KONZEPT_TABELLE KONZEPT_TEXT |
| DIAG_ADR | string | Diagnoseadresse  |

### DIAGNOSEPROTOKOLL_LESEN

Gibt die möglichen Diagnoseprotokolle für eine Auswahl an den Aufrufer zurück

_No arguments._

### IDENT

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

_No arguments._

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

### FS_LOESCHEN

Fehlerspeicher loeschen KWP2000: $14 ClearDiagnosticInformation Modus  : Default

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

_No arguments._

### FS_LESEN_LANG

Auslesen des Fehlerspeichers

| Name | Type | Description |
| --- | --- | --- |
| SHADOW | string | Umschalten auf Shadowfehlerspeicher |

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### TEL_ROH

Ausfuehren eines Telegramms mit Uebergabe nur der Daten Format 00 11 22 ....

| Name | Type | Description |
| --- | --- | --- |
| REQUEST | binary | Daten ohne Header Format 00 11 22 .... |

### EWS_STARTWERT

EWS-Empfangsstatus auslesen KWP2000: $21 DefineDataByLocalIdentifier 

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | Parameter zur Initialisierung |

### EWS_EMPFANG

EWS-Empfangsstatus auslesen KWP2000: $21 DefineDataByLocalIdentifier 

_No arguments._

### ABGLEICH_VERSTELLEN

Verstellen eines EEPROM Abgleichwertes mit LABEL Verwendete Tabelle: ABGLEICH KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | string | Spalte LABEL aus Tabelle ABGLEICH |
| ABGLEICH_VERSTELLEN_WERT | real | Neuer Verstellwert |
| ABGLEICH_VERSTELLEN_WERT2 | real | Neuer Verstellwert 2 |
| ABGLEICH_VERSTELLEN_WERT_48 | string | Neuer Verstellwert für 48Pkte KF Format der Eingabe: Mengen in real, durch Blank getrennte 48 Punkte Format der Eingabe zB: 1.0 1.1 1.5 .... 1.5 Achtung: Es müssen alle Verstellwerte eingegben werden !!! |

### ABGLEICH_VERSTELLEN_X

Verstellen eines EEPROM Abgleichwertes mit LID Verwendete Tabelle: ABGLEICH KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | int | Spalte LID aus Tabelle ABGLEICH |
| ABGLEICH_VERSTELLEN_WERT | real | Neuer Verstellwert |
| ABGLEICH_VERSTELLEN_WERT2 | real | Neuer Verstellwert 2 |

### ABGLEICH_LESEN

Lesen eines EEPROM Abgleichwertes mit LABEL Verwendete Tabelle: ABGLEICH KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | string | Spalte LABEL aus Tabelle ABGLEICH |

### ABGLEICH_LESEN_X

Lesen eines EEPROM Abgleichwertes mit LID Verwendete Tabelle: ABGLEICH KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | int | Spalte LID aus Tabelle ABGLEICH |

### ABGLEICH_PROG

Prgrammieren eines EEPROM Abgleichwertes mit LABEL Abgleich muss vorher verstellt werden !! Verwendete Tabelle: ABGLEICH KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | string | Spalte LABEL aus Tabelle ABGLEICH |

### ABGLEICH_PROG_X

Prgrammieren eines EEPROM Abgleichwertes mit LID Abgleich muss vorher verstellt werden !! Verwendete Tabelle: ABGLEICH KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_ABGLEICH | int | Spalte LID aus Tabelle ABGLEICH |

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

### STEUERN_SELECTIV

Verstellen eines Stellerwertes KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_STELLER | string | Local Identifier |
| TASTVERHAELTNIS | real | Neuer Verstellwert |

### STEUERN_SELECTIV_X

Verstellen eines Stellerwertes KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_STELLER | int | Local Identifier |
| TASTVERHAELTNIS | real | Neuer Verstellwert |

### STEUERN_ENDE_SELECTIV

Beenden von Verstellen eines Stellerwertes KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_STELLER | string | Local Identifier |

### STEUERN_ENDE_SELECTIV_X

Beenden von Verstellen eines Stellerwertes KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_STELLER | int | Local Identifier |

### STEUERN_ZUHEIZER

Vorgeben eines Stellerwertes fuer Zuheizer KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier Verstellwert 5 - 95 %

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | real | Neuer Verstellwert |

### STEUERN_ZUHEIZER_AUS

Beenden von Vorgeben von Zuheizer ansteuern KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_E_LUEFTER1

Vorgeben eines Stellerwertes fuer E - Luefter KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier Verstellwert 5 - 90 %

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | real | Neuer Verstellwert |

### STEUERN_E_LUEFTER2

Vorgeben eines Stellerwertes fuer E - Luefter KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier Verstellwert 5 - 90 %

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | real | Neuer Verstellwert |

### STEUERN_E_LUEFTER_AUS

Beenden von Vorgeben von E-Luefter ansteuern KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

_No arguments._

### STEUERN_VFP

Vorgeben eines Stellerwertes fuer Vorfoerderpumpe KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier Verstellwert 5 - 95 %

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | real | Neuer Verstellwert |

### STEUERN_VFP_AUS

Beenden von Vorgeben von Vorfoerderpumpe ansteuern KWP2000 / KWP2000*: $30 InputOutputControlByLocalIdentifier

_No arguments._

### MW_SELECT_LESEN_NORM

Messwerteblock selectiv lesen Übergabe im Format Messagenummern zB.: 0F100F08 für N und V Messagenummern ADR aus Tabelle BETRIEBSWTAB KWP2000: $2C DefineDataByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Übergabe im Format Messagenummern zB.: 0F100F08 für N und V Messagenummern ADR aus Tabelle BETRIEBSWTAB |

### MW_SELECT_LESEN_NORM2

Messwerteblock selectiv lesen zB.: dzmNmit fgmFGAKT für N und V Bezeichner NAME aus Tabelle BETRIEBSWTAB KWP2000: $2C DefineDataByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | dzmNmit fgmFGAKT zB.: dzmNmit fgmFGAKT für N und V Bezeichner NAME aus Tabelle BETRIEBSWTAB |

### MW_SELECT_LESEN_NORM3

Messwerteblock selectiv lesen Wie MW_SELECT_LESEN_NORM aber Ergebnisse als Long Int Übergabe im Format Messagenummern zB.: 0F100F08 für N und V Messagenummern ADR aus Tabelle BETRIEBSWTAB KWP2000: $2C DefineDataByLocalIdentifier 

| Name | Type | Description |
| --- | --- | --- |
| MW_SELECT_LESEN_MNR | binary | Übergabe im Format Messagenummern zB.: 0F100F08 für N und V Messagenummern ADR aus Tabelle BETRIEBSWTAB |

### STATUS_UBATT

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_MOTORTEMPERATUR

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_LMM_MASSE

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_MOTORDREHZAHL

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_PEDALWERTGEBER_POTI_2

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_ATMOSPHAERENDRUCK

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_KUEHLMITTELTEMPERATUR

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_ANSAUGLUFTTEMPERATUR

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_LUFTMASSE_IST

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_PEDALWERTGEBER_POTI_1

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_LUFTMASSE_SOLL

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_KILOMETERSTAND

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_BETRIEBSSTUNDENZAEHLER

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_RAILDRUCK_IST

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_RAILDRUCK_SOLL

Messwert selectiv lesen KWP2000: $2C DefineDataByLocalIdentifier 

_No arguments._

### STATUS_MFL_KLI_VARIANTE_LESEN

Auslesen ob MFL oder KLI verbaut $30 InputOutputControlByLocalIndentifierer

_No arguments._

### LOESCHEN_KLI_FGR_VARIANTE

Loeschen der Varianten

_No arguments._

### STATUS_DIGITAL

_No description._

| Name | Type | Description |
| --- | --- | --- |
| TABELLE | string | Ausgabe mit/ohne Text |
| TEXTDIGITAL | string | Ausgabe mit/ohne Text |

### STATUS_LAUFUNRUHE_LLR_MENGE

Auslesen selektive Mengenkorrektur

_No arguments._

### STATUS_LAUFUNRUHE_DREHZAHL

Auslesen selektive Mengenkorrektur

_No arguments._

### START_SYSTEMCHECK_ZYL

Starten der Drehungleichfouermigleitsmessung LLR_AUS Starten der Laufruhe - Mengen Messung

| Name | Type | Description |
| --- | --- | --- |
| SWITCH_MENGEN_DREHZAHL | string | LLR_AUS |

### CHANGE_ECU_OLDINJ

Beim Tausch der ECU und beibehlaten der alten Injektoren KWP2000: $A5 $73

_No arguments._

### CHANGE_INJECTOR_OLDECU

Beim Tausch der Injektoren und beibehalten der alten ECU KWP2000: $A5 $71

_No arguments._

### CHANGE_ENGINE_RESET

Beim Tausch des Motors KWP2000: $A5 $72

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0D | KWP2000* |
| 0x0C | KWP2000 |
| 0x06 | DS2 |

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

### ABGLEICH

| LABEL | TEXT | LID | BYTES | FACT_A | FACT_B |
| --- | --- | --- | --- | --- | --- |
| AGR | Abgasrueckfuehrung | 0xA4 | 2 | 0,0001 | 0,0 |
| ASC | ASC Erkennung | 0xB4 | 2 | 1,0 | 0,0 |
| BEG | Begrenzungsmoment | 0xA2 | 2 | 0,0001 | 0,0 |
| MEN48CS | Checksumme Mengenabgleich 48 Pkt. | 0xAB | 1 | 1,0 | 0,0 |
| FGRMAIN | FGR/Mainswitch | 0xA8 | 2 | 1,0 | 0,0 |
| HFM | HFM Abgleich | 0xB3 | 2 | 0,1 | 0,0 |
| INJKL | Injektorklasse | 0xB1 | 2 | 1,0 | 0,0 |
| KDF | Rail-Sensor Abgleich | 0xB2 | 2 | 0,1 | 0,0 |
| LLA | Leerlaufdrehzahl | 0xA3 | 2 | 1,0 | 0,0 |
| MEN48 | Mengenabgleich 48 Pkt. | 0xAA | 48 | 0,1 | 0,0 |
| MENDRIFT | Mengendriftkompensation | 0xA6 | 2 | 0,1 | 0,0 |
| MENDRIFTCS | Mengendriftkompensation Checksum | 0xA7 | 1 | 1,0 | 0,0 |
| MENPROG | Mengenabgleich programmiert | 0xAC | 2 | 1,0 | 0,0 |
| SER | Serviceabgleich | 0xA5 | 2 | 0,0001 | 0,0 |
| SOND | Sonderabgleich | 0xAD | 2 | 0,1 | 0,0 |
| STA | Startmoment | 0xA1 | 2 | 0,01 | 0,0 |
| VER | Verbrauchsanzeigenkorrektur | 0xB0 | 2 | 1,0 | 0,0 |
| -- | - | 0x00 | 0 | 1,0 | 0,0 |

### DIG_MFLKLI

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_KLI | 3 | 0x01 | 0x01 |
| B_MFL | 3 | 0x02 | 0x02 |

### STELLER

| LABEL | TEXT | LID | BYTES | FACT_A | FACT_B |
| --- | --- | --- | --- | --- | --- |
| AGR | Abgasrueckfuehrung | 0xC2 | 1 | 1,0 | 0,0 |
| DRV | Kraftstoffdruck-Regelventil | 0xC9 | 1 | 1,0 | 0,0 |
| EL1 | Motorluefter Stufe1 | 0xC6 | 1 | 1,0 | 0,0 |
| EL2 | Motorluefter Stufe2 | 0xC7 | 1 | 1,0 | 0,0 |
| GEN | Generator | 0xCE | 1 | 1,0 | 0,0 |
| GLU | Gluehrelais | 0xC4 | 1 | 1,0 | 0,0 |
| KLI | Klimakompressor | 0xC5 | 1 | 1,0 | 0,0 |
| KWH | Zusatzheizer | 0xCD | 1 | 1,0 | 0,0 |
| LDK | Drosselklappe | 0xC8 | 1 | 1,0 | 0,0 |
| MRV | Zumesseinheit | 0xCA | 1 | 1,0 | 0,0 |
| VFP | Vorfoederpumpe | 0xC3 | 1 | 1,0 | 0,0 |
| ZWP | Zusatzwasserpumpe | 0xC1 | 1 | 1,0 | 0,0 |
| -- | - | 0x00 | 0 | 1,0 | 0,0 |

### DIG_MFL

| TELNAME | TELEGRAMM | NAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLWA | STAT_MFLWA_EIN | 5 | 0x09 | 0x09 | MFL Bedienteil WA Wiederaufnahme | nicht betaetigt | betaetigt |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLEINP | STAT_MFLEINP_EIN | 5 | 0x12 | 0x12 | MFL Bedienteil EIN + | nicht betaetigt | betaetigt |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLAUS | STAT_MFLAUS_EIN | 5 | 0x20 | 0x20 | MFL Bedienteil AUS | nicht betaetigt | betaetigt |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLEINM | STAT_MFLEINM_EIN | 5 | 0x40 | 0x40 | MFL Bedienteil EIN - | nicht betaetigt | betaetigt |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLTGL | STAT_MFLTGL_EIN | 5 | 0x80 | 0x80 | MFL Bedienteil Togglebit | Zustand 0 | Zustand 1 |

### DIG_FGR_AUS

| TELNAME | TELEGRAMM | NAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| mroFGR_ABN | DF08 | S_RFGRKUP | STAT_RFGRKUP_WERT | 3 | 0x01 | 0x01 | Kupplung betätigt (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_RFGRVNM | STAT_RFGRVNM_WERT | 3 | 0x02 | 0x02 | Durch Hochdrehen (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_RFGRBRK | STAT_RFGRBRK_WERT | 3 | 0x04 | 0x04 | Bremse betaetigt (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_RFGRVMN | STAT_RFGRVMN_WERT | 3 | 0x08 | 0x08 | Geschwindigkeit zu klein (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_RFGRVZG | STAT_RFGRVZG_WERT | 3 | 0x10 | 0x10 | Verzoegerung zu gross (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_RFGRUEB | STAT_RFGRUEB_WERT | 3 | 0x20 | 0x20 | Geschwindigkeit zu gross (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_RFGRVMR | STAT_RFGRVMR_WERT | 3 | 0x40 | 0x40 | Einschaltgeschwindigk. Zu gering (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_RFGRMSW | STAT_RFGRMSW_WERT | 3 | 0x80 | 0x80 | FGR Mainswitch nicht eingeschaltet (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_RFGRGNG | STAT_RFGRGNG_WERT | 2 | 0x01 | 0x01 | Kein gültiger Gang (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_RFGRABS | STAT_RFGRABS_WERT | 2 | 0x02 | 0x02 | DSC Eingriff (Reversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_ZGLR | STAT_ZGLR_WERT | 2 | 0x04 | 0x04 | Zwischengetriebe im Low Range (Irreversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_ABVOR | STAT_ABVOR_WERT | 2 | 0x08 | 0x08 | Abschaltbedingung vorhanden (Irreversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_IKUP | STAT_IKUP_WERT | 2 | 0x10 | 0x10 | Fehler Kupplung (Irreversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_IBRE | STAT_IBRE_WERT | 2 | 0x20 | 0x20 | Fehler Bremse (Irreversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_IMFLTGL | STAT_IMFLTGL_WERT | 2 | 0x40 | 0x40 | Fehler MFL-Togglebit (Irreversible Abschaltbdg) | aktiv | nicht aktiv |
| mroFGR_ABN | DF08 | S_IOPT | STAT_OPT_WERT | 2 | 0x80 | 0x80 | FGR nicht variantencodiert (Irreversibel Abschaltbdg) | aktiv | nicht aktiv |

### DIG_KWH_AUS

| TELNAME | TELEGRAMM | NAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| camS_HZL | E4D10FB7 | S_KLIANF | STAT_KLIANF_WERT | 3 | 0x01 | 0x01 | Anforderung Heizleistung von Klimasteuergeraet (CAN) | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_WTF | STAT_KWH_WTF_WERT | 5 | 0x01 | 0x01 | Wassertemperatur ausreichend | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_GEN1 | STAT_KWH_GEN1_WERT | 5 | 0x02 | 0x02 | Generatorlastfehler | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_UBATT | STAT_KWH_UBATT_WERT | 5 | 0x04 | 0x04 | Batteriespannung zu niedrig | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_N | STAT_KWH_N_WERT | 5 | 0x08 | 0x08 | Motordrehzahl zu niedrig | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_START | STAT_KWH_START_WERT | 5 | 0x10 | 0x10 | Startverzoegerung | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_SENSDEF | STAT_KWH_SENSDEF_WERT | 5 | 0x20 | 0x20 | WTF, LTF oder Endstufe defekt | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_ANHS | STAT_KWH_ANHS_WERT | 5 | 0x40 | 0x40 | keine Anforderung von Heizungssteuerung | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_IKHA | STAT_KWH_IKHA_WERT | 5 | 0x80 | 0x80 | keine Anforderung von Klimasteuerung | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_GENSRC | STAT_KWH_GENSRC_WERT | 4 | 0x08 | 0x08 | Generator Ladeabregelung | aktiv | nicht aktiv |
| khoNOR_AB | 0FB70FB7 | S_KWH_APPL | STAT_KWH_APPL_WERT | 4 | 0x80 | 0x80 | KWH nicht appliziert | aktiv | nicht aktiv |

### DIG_ALLG

| TELNAME | TELEGRAMM | NAME | ERGEBNIS | BYTE | MASK | VALUE | LNAME | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| camS_AC | 0F702F741C001F9A1FB01FB1DF01 | S_AC | STAT_AC_EIN | 13 | 0x01 | 0x01 | Schalter Klimabereitschaft AC (CAN) | betaetigt | nicht betaetigt |
| camS_KO | 0F702F741C001F9A1FB01FB1DF01 | S_KO | STAT_KO_EIN | 11 | 0x01 | 0x01 | Schalter Klimakompressor KO (CAN) | betaetigt | nicht betaetigt |
| comGTR_opt | 0F702F741C001F9A1FB01FB1DF01 | S_EGS | STAT_EGS_EIN | 7 | 0x01 | 0x01 | Getriebe | Handschalt | Automat |
| dimDIGprel | 0F702F741C001F9A1FB01FB1DF01 | S_BRL | STAT_BLS_EIN | 2 | 0x01 | 0x01 | Eingang Bremslichtschalter | Pedal betaetigt (Ubatt) | Pedal nicht betaetigt (Masse) |
| dimDIGprel | 0F702F741C001F9A1FB01FB1DF01 | S_BRT | STAT_BLTS_EIN | 2 | 0x02 | 0x02 | Eingang Bremslichttestschalter | Pedal betaetigt (Ubatt) | Pedal nicht betaetigt (Masse) |
| dimDIGprel | 0F702F741C001F9A1FB01FB1DF01 | S_BRT | STAT_BLTS_EIN | 2 | 0x02 | 0x02 | Eingang Bremslichttestschalter | Pedal betaetigt (Ubatt) | Pedal nicht betaetigt (Masse) |
| dimDIGprel | 0F702F741C001F9A1FB01FB1DF01 | S_KUP | STAT_KUP_EIN | 3 | 0x20 | 0x20 | Eingang Kupplungsschalter | Pedal betaetigt (Ubatt) | Pedal nicht betaetigt (Masse) |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLWA | STAT_MFLWA_EIN | 5 | 0x09 | 0x09 | MFL Bedienteil WA Wiederaufnahme | nicht betaetigt | betaetigt |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLEINP | STAT_MFLEINP_EIN | 5 | 0x12 | 0x12 | MFL Bedienteil EIN + | nicht betaetigt | betaetigt |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLAUS | STAT_MFLAUS_EIN | 5 | 0x20 | 0x20 | MFL Bedienteil AUS | nicht betaetigt | betaetigt |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLEINM | STAT_MFLEINM_EIN | 5 | 0x40 | 0x40 | MFL Bedienteil EIN - | nicht betaetigt | betaetigt |
| dimF_MFL | 0F702F741C001F9A1FB01FB1DF01 | S_MFLTGL | STAT_MFLTGL_EIN | 5 | 0x80 | 0x80 | MFL Bedienteil Togglebit | Zustand 1 | Zustand 0 |
| fbmDIA_C | 0F702F741C001F9A1FB01FB1DF01 | S_DIALA | STAT_DIALA_EIN | 15 | 0x01 | 0x01 | Status Diagnoselampe (CAN) | angesteuert | nicht angesteuert |
| mroKickDwn | 0F702F741C001F9A1FB01FB1DF01 | S_KD | STAT_KD_EIN | 9 | 0x01 | 0x01 | Kick Down | betaetigt | nicht betaetigt |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxx0 | 10 | -- |
| xxxxxxx1 | 11 | Diagnose aktiv |
| xxxxxx0x | 20 | -- |
| xxxxxx1x | 21 | Diagnose gestoppt |
| xxxxx0xx | 30 | -- |
| xxxxx1xx | 31 | Zyklus-Flag gesetzt |
| xxxx0xxx | 40 | -- |
| xxxx1xxx | 41 | Error-Flag gesetzt |
| xxx0xxxx | 50 | -- |
| xxx1xxxx | 51 | MIL ein |
| xx0xxxxx | 60 | -- |
| xx1xxxxx | 61 | Fehler in Entprellphase |

### FEHLERSTATUS_HIGH

| NAME | BYTE | MASK | VALUE | TEXT_1 | TEXT_0 |
| --- | --- | --- | --- | --- | --- |
| F_ABGAS | 0 | 0x01 | 0x01 | - | - |
| F_BIT1 | 0 | 0x02 | 0x02 | - | - |
| F_VORHANDEN | 0 | 0x04 | 0x04 | momentan vorhanden | momentan nicht vorhanden |
| F_SPORADISCH | 0 | 0x08 | 0x08 | sporadisch | - |
| F_BIT4 | 0 | 0x10 | 0x10 | - | - |
| F_BIT5 | 0 | 0x20 | 0x20 | - | - |
| F_MIL_ENTPRELLT | 2 | 0x40 | 0x40 | MIL entprellt | nicht MIL entprellt |
| F_BIT7 | 0 | 0x80 | 0x80 | - | - |

### BETRIEBSWTAB

| NAME | TELEGRAM | POS_ADR | LEN_ADR | ADR | BYTE | DATA_TYPE | COMPU_TYPE | FACT_A | FACT_B | MASK | VALUE | ANZ | MEAS | RANGE | JOBNAME | LNAME |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| admADF | B812F1042C100000 | 06 | 2 | 0x2041 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | mbar | -- | admADF | ADF Rohwert Atmosphaerendruck |
| admID2 | B812F1042C100000 | 06 | 2 | 0x0EA2 | 6 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | admID2 | ID2 Rohwert Istwert Stromregelung Mengeregelventil |
| admIDV | B812F1042C100000 | 06 | 2 | 0x2FFE | 6 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | admIDV | IDV Rohwert Istwert Stromregelung Druckregelventil |
| admKDF | B812F1042C100000 | 06 | 2 | 0x2FFC | 6 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | admKDF | KDF Rohwert Raildruck |
| admLMM | B812F1042C100000 | 06 | 2 | 0x2061 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admLMM | LMM Rohwert Luftmasse |
| admLTF | B812F1042C100000 | 06 | 2 | 0x2001 | 6 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | admLTF | LTF Rohwert Lufttemperatur |
| admPGS | B812F1042C100000 | 06 | 2 | 0x2FFA | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admPGS | PGS Rohwert Pedalwertgeber Poti 2 |
| admPWG | B812F1042C100000 | 06 | 2 | 0x2060 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | admPWG | PWG Rohwert Pedalwertgeber Poti 1 |
| admUBT | B812F1042C100000 | 06 | 2 | 0x2065 | 6 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | 0 | -- | admUBT | UBT Rohwert Batteriespannung |
| admUC1 | B812F1042C100000 | 06 | 2 | 0x2FF8 | 6 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUC1 | UC1 Rohwert Kondensatorspannung 1 fuer Zylinder 1,2,3 |
| admUG1 | B812F1042C100000 | 06 | 2 | 0x2FF6 | 6 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUG1 | UG1 Rohwert Speisespannung 1 fuer Pedalwertgeber 2,  Ladedruckfuehler, Luftmassenmesser |
| admUG2 | B812F1042C100000 | 06 | 2 | 0x2FF7 | 6 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | admUG2 | UG2 Rohwert Speisespannung 2 fuer Pedalwertgeber 1, Kraftstoff-, Vorfoerderdruckfuehler |
| admWTF | B812F1042C100000 | 06 | 2 | 0x2000 | 6 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | admWTF | WTF Rohwert Wassertemperatur |
| anmADF | B812F1042C100000 | 06 | 2 | 0x0F63 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | anmADF | ADF Atmosphaerendruck |
| anmID2 | B812F1042C100000 | 06 | 2 | 0x0FFF | 6 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | anmID2 | ID2 Istwert Stromregelung Mengeregelventil |
| anmIDV | B812F1042C100000 | 06 | 2 | 0x0FFE | 6 | 5 | -- | 4.995005 | 0 | 0x00 | 0x00 | 6.2f | mA | -- | anmIDV | IDV Istwert Stromregelung Druckregelventil |
| anmKDF | B812F1042C100000 | 06 | 2 | 0x0FFC | 6 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | anmKDF | KDF Raildruck |
| anmKDF | B812F1042C100000 | 06 | 2 | 0x0FFC | 6 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | RAILDRUCK | KDF Raildruck |
| anmLMM | B812F1042C100000 | 06 | 2 | 0x0F61 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmLMM | LMM Luftmasse |
| anmLTF | B812F1042C100000 | 06 | 2 | 0x0F01 | 6 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | AN_LUFTTEMPERATUR | LTF Lufttemperatur |
| anmLTF | B812F1042C100000 | 06 | 2 | 0x0F01 | 6 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | anmLTF | LTF Lufttemperatur |
| anmPAC | B812F1042C100000 | 06 | 2 | 0x0E81 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | anmPAC | PAC Freondruck |
| anmPGS | B812F1042C100000 | 06 | 2 | 0x0FFA | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmPGS | PGS Pedalwertgeber Poti 2 |
| anmPWG | B812F1042C100000 | 06 | 2 | 0x0F60 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | anmPWG | PWG Pedalwertgeber Poti 1 |
| anmPWG | B812F1042C100000 | 06 | 2 | 0x0F60 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | PWG_FAHRERWUNSCH | PWG Pedalwertgeber Poti 1 |
| anmUBT | B812F1042C100000 | 06 | 2 | 0x0F65 | 6 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUBT | UBT Batteriespannung |
| anmUBT | B812F1042C100000 | 06 | 2 | 0x0F65 | 6 | 5 | -- | 0.0236197458 | 0 | 0x00 | 0x00 | 6.2f | V | -- | UBATT | UBT Batteriespannung |
| anmUC1 | B812F1042C100000 | 06 | 2 | 0x0FF8 | 6 | 5 | -- | 0.0205718988 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUC1 | UC1 Kondensatorspannung 1 fuer Zylinder 1,2,3 |
| anmUG1 | B812F1042C100000 | 06 | 2 | 0x0FF6 | 6 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUG1 | UG1 Speisespannung 1 fuer Pedalwertgeber 2, Ladedruckfuehler,  Luftmassenmesser |
| anmUG2 | B812F1042C100000 | 06 | 2 | 0x0FF7 | 6 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anmUG2 | UG2 Speisespannung 2 fuer Pedalwertgeber 1,  Kraftstoff-, Vorfoerderdruckfuehler |
| anmWTF | B812F1042C100000 | 06 | 2 | 0x0F00 | 6 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | MOTORTEMPERATUR | WTF Wassertemperatur |
| anmWTF | B812F1042C100000 | 06 | 2 | 0x0F00 | 6 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | anmWTF | WTF Wassertemperatur |
| anoU_ADF | B812F1042C100000 | 06 | 2 | 0x3011 | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_ADF | ADF Spannung Atmosphaerendruckfuehler |
| anoU_ID2 | B812F1042C100000 | 06 | 2 | 0x0E9A | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_ID2 | ID2 Spannung zur Strommessung Mengeregelventil |
| anoU_IDV | B812F1042C100000 | 06 | 2 | 0x300C | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_IDV | IDV Spannung zur Strommessung Druckregelventil |
| anoU_KDF | B812F1042C100000 | 06 | 2 | 0x300A | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_KDF | KDF Spannung Raildruckfuehler |
| anoU_LMM | B812F1042C100000 | 06 | 2 | 0x0F34 | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LMM | LMM Spannung Luftmassenmesser |
| anoU_LTF | B812F1042C100000 | 06 | 2 | 0x300E | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_LTF | LTF Spannung Lufttemperaturfuehler |
| anoU_PGS | B812F1042C100000 | 06 | 2 | 0x3006 | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_PGS | PGS Spannung Pedalwertgeber Poti 2 |
| anoU_PWG | B812F1042C100000 | 06 | 2 | 0x0F35 | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | PWG_POTI_SPANNUNG | PWG Spannung Pedalwertgeber Poti 1 |
| anoU_PWG | B812F1042C100000 | 06 | 2 | 0x0F35 | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_PWG | PWG Spannung Pedalwertgeber Poti 1 |
| anoU_UBT | B812F1042C100000 | 06 | 2 | 0x3013 | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UBT | UBT Spannung Batteriespannung |
| anoU_UC1 | B812F1042C100000 | 06 | 2 | 0x3008 | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UC1 | UC1 Spannung Kondensatorspannung 1 fuer Zylinder 1,2,3 |
| anoU_UG1 | B812F1042C100000 | 06 | 2 | 0x3016 | 6 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UG1 | UG1 Spannung Speisespannung 1 fuer Pedalwertgeber 2,  Ladedruckfuehler, Luftmassenmesser |
| anoU_UG2 | B812F1042C100000 | 06 | 2 | 0x3017 | 6 | 5 | -- | 0.01764418377 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_UG2 | UG2 Spannung Speisespannung 2 fuer Pedalwertgeber 1,  Kraftstoff-, Vorfoerderdruckfuehler |
| anoU_WTF | B812F1042C100000 | 06 | 2 | 0x3002 | 6 | 5 | -- | 0.0048875855 | 0 | 0x00 | 0x00 | 6.2f | V | -- | anoU_WTF | WTF Spannung Wassertemperaturfuehler |
| armAR_MODE | B812F1042C100000 | 06 | 2 | 0xE4E4 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | armAR_MODE | Zustand ARF |
| armIST_4C | B812F1042C100000 | 06 | 2 | 0x0010 | 6 | 5 | -- | 0.0359929742 | 0 | 0x00 | 0x00 | 6.2f | kg/h | -- | aroIST_4 | MLt Luftmassenstrom n. Linearisierung u. Mittelung |
| armM_List | B812F1042C100000 | 06 | 2 | 0x0F30 | 6 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | armM_List | M_L aktuelle Luftmasse |
| armM_Lsoll | B812F1042C100000 | 06 | 2 | 0x0F32 | 6 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | armM_Lsoll | M_L Sollwert fuer AGR-Regelung |
| aroIST_5 | B812F1042C100000 | 06 | 2 | 0xDF0E | 6 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | aroIST_5 | M_L normierte Luftmasse (nicht T_L/P_ADF-korrig.) |
| aroSOLL_5 | B812F1042C100000 | 06 | 2 | 0x0F31 | 6 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | mg/Hub Luft | -- | aroSOLL_5 | M_L Luft-Sollwert nach Sollwertbegrenzung |
| camS_AC | B812F1042C100000 | 06 | 2 | 0x1FB1 | 6 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | camS_AC | Schalter Klimabereitschaft |
| camS_KO | B812F1042C100000 | 06 | 2 | 0x1FB0 | 6 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | camS_KO | Schalter Klimakompressor |
| camT_EVAP | B812F1042C100000 | 06 | 2 | 0xE4E5 | 6 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | °C | -- | camT_EVAP | Klimaanlageevaporatortemperature |
| camT_UMG | B812F1042C100000 | 06 | 2 | 0xE4D0 | 6 | 5 | -- | 0.1 | -273.14 | 0x00 | 0x00 | 6.2f | Grad C | -- | camT_UMG | Umgebungstemperatur aus CAN |
| caoVERB | B812F1042C100000 | 06 | 2 | 0x2160 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | ul | -- | caoVERB | Kraftstoffverbrauch fuer CAN DDE4-VERBRAUCH |
| comGTR_opt | B812F1042C100000 | 06 | 2 | 0x1C00 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | comGTR_opt | Identifikation Handschalter/Automatik |
| dimDIG_0 | B812F1042C100000 | 06 | 2 | 0x0F6C | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimDIG_0 | Auf logisch 0 erkannte Digitaleingaenge |
| dimDIG_1 | B812F1042C100000 | 06 | 2 | 0x0F6D | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimDIG_1 | Auf logisch 1 erkannte Digitaleingaenge |
| dimDIGprel | B812F1042C100000 | 06 | 2 | 0x0F70 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimDIGprel | Entprellte logische Zustaende der digitalen Eingaenge |
| dimF_MFL | B812F1042C100000 | 06 | 2 | 0x2F74 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | dimF_MFL | FGR Multifunktionslenkrad |
| dzmNakt | B812F1042C100000 | 06 | 2 | 0x0F12 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmNakt | N aktuelle Drehzahl aus letzter Periode |
| dzmNmit | B812F1042C100000 | 06 | 2 | 0x0F10 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmNmit | N Drehzahl |
| dzmNmit | B812F1042C100000 | 06 | 2 | 0x000C | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | MOTORDREHZAHL | N Drehzahl |
| dzmzMk1 | B812F1042C100000 | 06 | 2 | 0x0F19 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk1 | Selektive Mengenkorrektur Zylinder 1 |
| dzmzMk2 | B812F1042C100000 | 06 | 2 | 0x0F1A | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk2 | Selektive Mengenkorrektur Zylinder 2 |
| dzmzMk3 | B812F1042C100000 | 06 | 2 | 0x0F1B | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk3 | Selektive Mengenkorrektur Zylinder 3 |
| dzmzMk4 | B812F1042C100000 | 06 | 2 | 0x0F1C | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | dzmzMk4 | Selektive Mengenkorrektur Zylinder 4 |
| dzmzN1 | B812F1042C100000 | 06 | 2 | 0x0F13 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN1 | Selektive Drehzahl Zylinder 1 |
| dzmzN2 | B812F1042C100000 | 06 | 2 | 0x0F14 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN2 | Selektive Drehzahl Zylinder 2 |
| dzmzN3 | B812F1042C100000 | 06 | 2 | 0x0F15 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN3 | Selektive Drehzahl Zylinder 3 |
| dzmzN4 | B812F1042C100000 | 06 | 2 | 0x0F16 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | dzmzN4 | Selektive Drehzahl Zylinder 4 |
| edmRSTCD | B812F1042C100000 | 06 | 2 | 0x0E00 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | edmRSTCD | Restart Code |
| ehmFARS | B812F1042C100000 | 06 | 2 | 0x0E80 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFARS | Tastverhaeltnis Ansteuerung AGR-Steller |
| ehmFEKP | B812F1042C100000 | 06 | 2 | 0x0EA6 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFEKP | Tastverhaeltnis Ansteuerung Vorfoerderpumpe |
| ehmFGAZ | B812F1042C100000 | 06 | 2 | 0xE4E6 | 6 | 5 | -- | 1.0 | 0 | 0x00 | 0x00 | 6.2f | - | -- | ehmFGAZ | Zustand Gluhlampe |
| ehmFGRS | B812F1042C100000 | 06 | 2 | 0x0E87 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFGRS | Tastverhaeltnis Ansteuerung Gluehrelais |
| ehmFKDR | B812F1042C100000 | 06 | 2 | 0x0EA5 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFKDR | Tastverhaeltnis Ansteuerung Raildruckregelventil |
| ehmFKLI | B812F1042C100000 | 06 | 2 | 0x0E91 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFKLI | Tastverhaeltnis Ansteuerung Klimakompressor |
| ehmFKWH | B812F1042C100000 | 06 | 2 | 0x0E9B | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFKWH | Tastverhaeltnis Ansteuerung Kuehlwasserheizung |
| ehmFLDK | B812F1042C100000 | 06 | 2 | 0x0E9F | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFLDK | Tastverhaeltnis Ansteuerung Drosselklape |
| ehmFLF1 | B812F1042C100000 | 06 | 2 | 0x0F49 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFLF1 | Tastverhaeltnis Ansteuerung Lufter Stufe 1 |
| ehmFLF2 | B812F1042C100000 | 06 | 2 | 0x0F62 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFLF2 | Tastverhaeltnis Ansteuerung Lufter Stufe 2 |
| ehmFZME | B812F1042C100000 | 06 | 2 | 0x1E7F | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFZME | Tastverhaeltnis Ansteuerung Raildruckmengeventil |
| ehmFZWP | B812F1042C100000 | 06 | 2 | 0x0EA3 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | ehmFZWP | Tastverhaeltnis Ansteuerung Zusatzwasserpumpe |
| fbmBSTZ_UB | B812F1042C100000 | 06 | 2 | 0x1300 | 6 | 5 | -- | 0.1 | 0 | 0x00 | 0x00 | 6.2f | h | -- | fbmBSTZ_UB | UB Betriebsstunden |
| fbmDIA_C | B812F1042C100000 | 06 | 2 | 0xDF01 | 6 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fbmDIA_C | Diagnoselampe ueber CAN |
| fbmMIL_C | B812F1042C100000 | 06 | 2 | 0xDF02 | 6 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fbmMIL_C | MIL Malfunction Indikator Lamp ueber CAN |
| fbmSDIAL | B812F1042C100000 | 06 | 2 | 0x1000 | 6 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fbmSDIAL | Anforderung Diagnoselampe aus Fehlerbehandlung (0:Aus, 1:Ein, 2:Blinken) |
| fboDIALA | B812F1042C100000 | 06 | 2 | 0xDF00 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboDIALA | Diagnose - Lampe Status (255 = EIN) |
| fboS_00 | B812F1042C100000 | 06 | 2 | 0xDF70 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_00 | Defekte Pfade 1 bis 16 |
| fboS_02 | B812F1042C100000 | 06 | 2 | 0xDF72 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_02 | Defekte Pfade 17 bis 32 |
| fboS_04 | B812F1042C100000 | 06 | 2 | 0xDF74 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_04 | Defekte Pfade 33 bis 48 |
| fboS_06 | B812F1042C100000 | 06 | 2 | 0xDF76 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_06 | Defekte Pfade 49 bis 64 |
| fboS_08 | B812F1042C100000 | 06 | 2 | 0xDF78 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_08 | Defekte Pfade 65 bis 80 |
| fboS_10 | B812F1042C100000 | 06 | 2 | 0xDF7A | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | fboS_10 | Defekte Pfade 81 bis 96 |
| fgm_VzuN | B812F1042C100000 | 06 | 2 | 0x0F0B | 6 | 5 | -- | 0.0000391 | 0 | 0x00 | 0x00 | 6.2f | (km/h)/(1/min) | -- | fgm_VzuN | Verhaeltnis Geschwindigkeit/Drehzahl (V/N aktuell)  |
| fgmBESCH | B812F1042C100000 | 06 | 2 | 0x0F0A | 6 | 7 | -- | 0.0847711 | -10.8506944 | 0x00 | 0x00 | 6.2f | m/s^2 | -- | fgmBESCH | Beschleunigung |
| fgmFGAKT | B812F1042C100000 | 06 | 2 | 0x000D | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | km/h | -- | fgmFGAKT | aktuelle Geschwindigkeit |
| khoGENLAST | B812F1042C100000 | 06 | 2 | 0x0ECC | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | khoGENLAST | Generatorlast |
| khoNOR_AB | B812F1042C100000 | 06 | 2 | 0x0FB7 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | khoNOR_AB | Zustand und Abschaltbedingungen der Kuehlmittelheizung |
| klmKLI_GEF | B812F1042C100000 | 06 | 2 | 0xE4D2 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | klmKLI_GEF | Klimaanlage verbaut |
| mrmCASE_A | B812F1042C100000 | 06 | 2 | 0xDF21 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmCASE_A | ARD Zustand-Bits der aktiven Ruckeldaempfung |
| mrmCASE_L | B812F1042C100000 | 06 | 2 | 0xDF20 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmCASE_L | LLR Zustand-Bits der Leerlaufregelung |
| mrmF_GANG | B812F1042C100000 | 06 | 2 | 0x0F7E | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmF_GANG | FGR aktuelle Gangstufe |
| mrmFG_SOLL | B812F1042C100000 | 06 | 2 | 0x0F09 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | km/h | -- | mrmFG_SOLL | V Sollwert Fahrgeschwindigkeit von FGR |
| mrmKM_akt | B812F1042C100000 | 06 | 2 | 0x0FD0 | 6 | 5 | -- | 10 | 0 | 0x00 | 0x00 | 6.2f | km | -- | mrmKM_akt | aktueller km-Stand von Kombiinstrument |
| mrmL_FGR | B812F1042C100000 | 06 | 2 | 0x2F75 | 6 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmL_FGR | FGR-Status-Indicator-Lampe ueber CAN |
| mrmLLRIAnt | B812F1042C100000 | 06 | 2 | 0xDF13 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmLLRIAnt | M_E Menge aus I-Anteil des PI-Leerlaufreglers |
| mrmLLRPAnt | B812F1042C100000 | 06 | 2 | 0xDF14 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmLLRPAnt | M_E Menge aus P-Anteil des PI-Leerlaufreglers |
| mrmM_DXMSR | B812F1042C100000 | 06 | 2 | 0x0F89 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_DXMSR | M_E externer Momenteneingriff MSR |
| mrmM_EAKT | B812F1042C100000 | 06 | 2 | 0x0F80 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EAKT | M_E Aktuelle Einspritzmenge (ohne ARD) |
| mrmM_EARD | B812F1042C100000 | 06 | 2 | 0xDC88 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EARD | M_E Menge ARD - Gesamt vor Begrenzung |
| mrmM_EBEGR | B812F1042C100000 | 06 | 2 | 0x0F8A | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EBEGR | M_E resultierende Begrenzungsmenge |
| mrmM_EDELB | B812F1042C100000 | 06 | 2 | 0x1F8E | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EDELB | M_E begrenzte Abgleichmenge |
| mrmM_EFAHR | B812F1042C100000 | 06 | 2 | 0xDC86 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EFAHR | M_E Fahrmenge nach Laufruheregler |
| mrmM_EFGR | B812F1042C100000 | 06 | 2 | 0x0F85 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EFGR | M_E Wunschmenge aus Fahrgeschwindigkeitsregelung |
| mrmM_EKORR | B812F1042C100000 | 06 | 2 | 0x0F8E | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EKORR | M_E Fahrmenge korrigiert mit Vollast- und Mengenabgleich |
| mrmM_ELLR | B812F1042C100000 | 06 | 2 | 0x0F8D | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ELLR | M_E Menge aus Leerlaufregelung |
| mrmM_ELRR | B812F1042C100000 | 06 | 2 | 0xDC87 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ELRR | M_E Menge aus Laufruheregler |
| mrmM_EMOT | B812F1042C100000 | 06 | 2 | 0x0F8C | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EMOT | M_E Einspritzmenge nach ARD |
| mrmM_EPWG | B812F1042C100000 | 06 | 2 | 0x0F84 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EPWG | M_E Wunschmenge = f(PWG) aus Fahrverhaltenkennfeld |
| mrmM_ESTAR | B812F1042C100000 | 06 | 2 | 0x0F82 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_ESTAR | M_E resultierender Startmengen-Sollwert |
| mrmM_EWUN | B812F1042C100000 | 06 | 2 | 0x0F8B | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EWUN | M_E Fahrerwunschmenge nach externem Mengeneingriff |
| mrmM_EWUNF | B812F1042C100000 | 06 | 2 | 0x0F86 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mrmM_EWUNF | M_E Fahrerwunschmenge aus PWG oder FGR |
| mrmN_LLBAS | B812F1042C100000 | 06 | 2 | 0x0E02 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | mrmN_LLBAS | N Leerlaufsolldrehzahl |
| mrmPWGfi | B812F1042C100000 | 06 | 2 | 0x0F83 | 6 | 5 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | % | -- | mrmPWGfi | PWG gefilterte Pedalwertgeber-Position |
| mrmSTATUS | B812F1042C100000 | 06 | 2 | 0x0F7F | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mrmSTATUS | Status Motorbetriebsphase |
| mroFABZUST | B812F1042C100000 | 06 | 2 | 0x0F9A | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroFABZUST | Zustand Ablaufsteuerung |
| mroFGR_ABN | B812F1042C100000 | 06 | 2 | 0xDF08 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroFGR_ABN | FGR Abschalt-Bedingungen |
| mroKickDwn | B812F1042C100000 | 06 | 2 | 0x1F9A | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | mroKickDwn | Schalter Kickdown |
| mroLLRDAnt | B812F1042C100000 | 06 | 2 | 0xDF15 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mroLLRDAnt | M_E Menge aus Leerlaufregler-DT1-Vorsteuerung |
| mroLRRReg | B812F1042C100000 | 06 | 2 | 0xDC90 | 6 | 7 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | 1/min | -- | mroLRRReg | Nsegm Segmentdrehzahl-Regelabweichung fuer Laufruheregler |
| mroM_ARDFF | B812F1042C100000 | 06 | 2 | 0xDC89 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | mroM_ARDFF | M_E Menge ARD - Fuehrungsformer |
| mroMD_FAHR | B812F1042C100000 | 06 | 2 | 0x2211 | 6 | 5 | -- | 2 | 0 | 0x00 | 0x00 | 6.2f | Nm | -- | mroMD_FAHR | Fahrerwunschmoment |
| mroMD_REIB | B812F1042C100000 | 06 | 2 | 0x2212 | 6 | 5 | -- | 2 | 0 | 0x00 | 0x00 | 6.2f | Nm | -- | mroMD_REIB | Reibmoment |
| mroMD_SOLL | B812F1042C100000 | 06 | 2 | 0x2210 | 6 | 5 | -- | 2 | 0 | 0x00 | 0x00 | 6.2f | Nm | -- | mroMD_SOLL | Sollmoment |
| xcmZ_E | B812F1042C100000 | 06 | 2 | 0x0FAE | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | xcmZ_E | EWS Uebertragungsfehlerzaehler |
| zhoSYNC_ST | B812F1042C100000 | 06 | 2 | 0x1F50 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zhoSYNC_ST | Synchronisationsstatus des Zumesshandlers |
| zumAB_HE | B812F1042C100000 | 06 | 2 | 0x1F5A | 6 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zumAB_HE | Ansteuerbeginn Haupteinspritzung |
| zumAB_NE | B812F1042C100000 | 06 | 2 | 0x1F60 | 6 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zumAB_NE | Ansteuerbeginn Nacheinspritzung |
| zumAD_NE | B812F1042C100000 | 06 | 2 | 0x1F61 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | uS | -- | zumAD_NE | Ansteuerdauer Nacheinspritzung |
| zumMileage | B812F1042C100000 | 06 | 2 | 0xE4E9 | 6 | 5 | -- | 16.384 | 0 | 0x00 | 0x00 | 6.2f | Km | -- | zumMileage | Km-Stand |
| zumP_RAIL | B812F1042C100000 | 06 | 2 | 0x1F5D | 6 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | zumP_RAIL | Raildruck fuer Mengenzumessung |
| zumPQsoll | B812F1042C100000 | 06 | 2 | 0x1F5E | 6 | 5 | -- | 10.235414 | 0 | 0x00 | 0x00 | 6.2f | bar | -- | zumPQsoll | Raildruck Sollwert |
| zumQP_KDR | B812F1042C100000 | 06 | 2 | 0xE4E8 | 6 | 5 | -- | 10.0 | 0 | 0x00 | 0x00 | 6.2f | mm^3/sec | -- | zumQP_KDR | Durchfluss durch Mengeregelventil |
| zumRP_ZUST | B812F1042C100000 | 06 | 2 | 0xE029 | 6 | 2 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zumRP_ZUST | Zustand Raildruckregler |
| zuoAB_HEk | B812F1042C100000 | 06 | 2 | 0xE4E7 | 6 | 5 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zuoAB_HEk | Ansteuerbeginn Haupteinspritzung |
| zuoAB_VE1 | B812F1042C100000 | 06 | 2 | 0x1F51 | 6 | 7 | -- | 0.0234375 | 0 | 0x00 | 0x00 | 6.2f | Grad KW | -- | zuoAB_VE1 | Ansteuerbeginn Voreinspritzung |
| zuoAD_HE | B812F1042C100000 | 06 | 2 | 0x1F5B | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | uS | -- | zuoAD_HE | Ansteuerdauer Haupteinspritzung |
| zuoAD_VE1 | B812F1042C100000 | 06 | 2 | 0x1F52 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | uS | -- | zuoAD_VE1 | Ansteuerdauer Voreinspritzung |
| zuoME_VE | B812F1042C100000 | 06 | 2 | 0x1F53 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | zuoME_VE | M_E Menge Voreinspritzung |
| zuoMEHE | B812F1042C100000 | 06 | 2 | 0x1F5C | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | zuoMEHE | M_E Menge Haupteinspritzung |
| zuoMEVGW | B812F1042C100000 | 06 | 2 | 0x1F57 | 6 | 7 | -- | 0.01 | 0 | 0x00 | 0x00 | 6.2f | mm^3 | -- | zuoMEVGW | GW-Kennfeld Menge Voreinspritzung |
| zuoVE_STAT | B812F1042C100000 | 06 | 2 | 0x1F55 | 6 | 5 | -- | 1 | 0 | 0x00 | 0x00 | 6.2f | - | -- | zuoVE_STAT | Voreinspritzung - Schalter |

### FORTTEXTE

| ORT | ORTTEXT | UW_1 | UW_2 | UW_3 | UW_4 | UW_5 |
| --- | --- | --- | --- | --- | --- | --- |
| 0x3E90 | 3E90  Kurbelwellengeber | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x3EC0 | 3EC0  Nockenwellengeber | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x3EF0 | 3EF0  Kuehlmitteltemperatursensor Plausibilitaet | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x3F20 | 3F20  Fahrpedalmodul Potentiometer 2  | 0x01 | 0x05 | 0x07 | 0x09 | 0x30 |
| 0x3F25 | 3F25  Ladeluftschlauch-Ueberwachung | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x3F30 | 3F30  Raildrucksensor | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x3F60 | 3F60  Fahrgeschwindigkeitssignal ueber CAN | 0x01 | 0x02 | 0x03 | 0x09 | 0x30 |
| 0x3F80 | 3F80  Ansauglufttemperaturfuehler | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x3F85 | 3F85  Umgebungstemperaturfühler über CAN | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x3FB0 | 3FB0  Luftmassenmesser | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x4060 | 4060  Umgebungsdrucksensor (im Steuergeraet verbaut) | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4070 | 4070  Kupplungsschalter | 0x01 | 0x09 | 0x03 | 0x07 | 0x30 |
| 0x4080 | 4080  Bremslicht-/Bremstestschalter | 0x01 | 0x05 | 0x07 | 0x09 | 0x30 |
| 0x4090 | 4090  Fehlerpfad fuer Accel Pedal und BremsePlausibilitaet (nv) | 0x01 | 0x05 | 0x08 | 0x09 | 0x30 |
| 0x40A0 | 40A0  Generatorlastsignal | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x40B0 | 40B0  Klimaanlage Drucksensor | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x4100 | 4100  Klimaleistungsausgang | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4120 | 4120  DDE-Hauptrelais | 0x01 | 0x02 | 0x05 | 0x04 | 0x30 |
| 0x4160 | 4160  Relais Vorfoerderpumpe | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x41F0 | 41F0  Elektroluefter | 0x01 | 0x02 | 0x05 | 0x09 | 0x30 |
| 0x4200 | 4200  Gluehsteuergeraet | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x4330 | 4330  Raildruckregelventil | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4340 | 4340  DRV Stromregelung | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4350 | 4350  Mengenregelventil | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4375 | 4375  Fehler im NL beim Abstellen ueber OFF oder Nullmenge | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x43B0 | 43B0  Power Stage fault status for System lamp (nv) | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x43C0 | 43C0  Drosselklappe | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x43F0 | 43F0  Elektrischer Zuheizer | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x4410 | 4410  Injektor Zylinder 1 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4420 | 4420  Injektor Zylinder 2 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4430 | 4430  Injektor Zylinder 3 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4440 | 4440  Injektor Zylinder 4 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4500 | 4500  Abgasrueckfuehr-Regelung | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x4505 | 4505  Abgasrueckfuehr-Regelung | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x4560 | 4560  Raildruck-Plausibilitaet druckgeregelt | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4660 | 4660  Versorgungsspannung | 0x01 | 0x02 | 0x03 | 0x13 | 0x30 |
| 0x4670 | 4670  Speisespannung 1 | 0x01 | 0x20 | 0x05 | 0x08 | 0x30 |
| 0x4680 | 4680  Speisespannung 2 | 0x01 | 0x21 | 0x05 | 0x07 | 0x30 |
| 0x46D0 | 46D0  Steuergeraet intern 4 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x46E0 | 46E0  Steuergeraet intern 5 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x4730 | 4730  Mengenregelventil Stromregelung | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4780 | 4780  Steuergeraet intern 15 | 0x01 | 0x08 | 0x05 | 0x07 | 0x30 |
| 0x47A0 | 47A0  MFC error path for Misfire cylinder 0 (nv) | 0x01 | 0x02 | 0x04 | 0x03 | 0x30 |
| 0x48F0 | 48F0  PT-CAN Bus (A) | 0x01 | 0x05 | 0x03 | 0x09 | 0x30 |
| 0x4910 | 4910  CAN Bus B | 0x01 | 0x05 | 0x03 | 0x09 | 0x30 |
| 0x4A00 | 4A00  Klemme 15 | 0x01 | 0x02 | 0x06 | 0x05 | 0x30 |
| 0x4A30 | 4A30  Multifunktionslenkrad | 0x01 | 0x02 | 0x03 | 0x09 | 0x30 |
| 0x4A40 | 4A40  EWS Schnittstellenfehler | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4B10 | 4B10  Laufruheregler | 0x01 | 0x02 | 0x15 | 0x05 | 0x30 |
| 0x4B30 | 4B30  Elektroluefter 2 | 0x01 | 0x02 | 0x05 | 0x09 | 0x30 |
| 0x4E17 | 4E17  Generatorspannungsansteuerung | 0x01 | 0x05 | 0x02 | 0x09 | 0x30 |
| 0x4E18 | 4E18  Zusatzwasserpumpe | 0x01 | 0x02 | 0x05 | 0x03 | 0x30 |
| 0x4E19 | 4E19  Raildruck-Plausibilität mengengeregelt | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4E1B | 4E1B  Redundanter Notstopp | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4E1C | 4E1C  Kraftstoffdruckoffset | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4E1D | 4E1D  Stabi | 0x01 | 0x02 | 0x05 | 0x04 | 0x30 |
| 0x4E1E | 4E1E  CAN objects | 0x01 | 0x05 | 0x03 | 0x09 | 0x30 |
| 0x4E1F | 4E1F  Boosterspannungsüberwachung | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x0000 | 0000  Unbekannter Fehlerort | 0x01 | 0x05 | 0x02 | 0x09 | 0x30 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | MUL | ADD |
| --- | --- | --- | --- | --- | --- | --- |
| 0x00 | -- | ---- | - | unsigned char | 1 | 0 |
| 0x01 | Motordrehzahl | 1/min | - | unsigned char | 24,975025 | 0,0 |
| 0x02 | Kuehlmitteltemperatur | Grad C | - | unsigned char | 0,6826871 | -41,0264009 |
| 0x03 | Einspritzmenge | mm^3 | - | unsigned char | 0,5120328 | 0,0 |
| 0x04 | Raildruck | bar | - | unsigned char | 6,0240963855 | 0,0 |
| 0x05 | Versorgungsspannung | V | - | unsigned char | 0,1157263393 | 0,0 |
| 0x06 | Lufttemperatur | Grad C | - | unsigned char | 0,6826871 | -41,0264009 |
| 0x07 | Position Pedalwertgeber1 | % | - | unsigned char | 0,3938558 | 0,0 |
| 0x08 | Position Pedalwertgeber2 | % | - | unsigned char | 0,3938558 | 0,0 |
| 0x09 | Fahrgeschwindigkeit | km/h | - | unsigned char | 1,0235415 | 0,0 |
| 0x10 | Freondruck | bar | - | unsigned char | 0,249750249750249 | 0,0 |
| 0x11 | aktueller km-Stand | km | - | unsigned char | 10,0 | 0,0 |
| 0x12 | Restart-Code | - | - | unsigned char | 1,0 | 0,0 |
| 0x13 | Versorgungsspannung | V | - | unsigned char | 0,0967467 | 0,0 |
| 0x14 | Atmosphaerendruck | mbar | - | unsigned char | 16,0 | 0,0 |
| 0x15 | Einspritzmenge | mm^3 | - | unsigned char | 0,5120328 | 0,0 |
| 0x16 | Spannung ZME | mA | - | unsigned char | 1 | 0 |
| 0x17 | Tastverhaeltniss Drosselklappe | % | - | unsigned char | 0,3938558 | 0,0 |
| 0x18 | ARF Sollluftmasse | mg/hub | - | unsigned char | 7,8740157480315 | 0,0 |
| 0x19 | Luftmasse | mg/hub | - | unsigned char | 7,8740157480315 | 0,0 |
| 0x20 | Sensoren Versorgungsspannug 1 | mV | - | unsigned char | 20,0196 | 0,0 |
| 0x21 | Sensoren Versorgungsspannug 2 | mV | - | unsigned char | 20,0196 | 0,0 |
| 0x30 | Kilometerstand | km | - | unsigned int | 10.00 | 0,0 |
| 0xXY | unbekannte Umweltbedingung | ---- | - | unsigned char | 1 | 0 |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 | A8_0 | A8_1 | A9_0 | A9_1 | A10_0 | A10_1 | A11_0 | A11_1 | A12_0 | A12_1 | A13_0 | A13_1 | A14_0 | A14_1 | A15_0 | A15_1 | A16_0 | A16_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x3E90 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1032 | 0x00 | 0x1031 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3EC0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x102C | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x102D | 0x00 | 0x102E | 0x00 | 0x118A | 0x00 | 0x1030 |
| 0x3EF0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x100F | 0x00 | 0x100E | 0x00 | 0x1020 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3F20 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1017 | 0x00 | 0x1016 | 0x00 | 0x1018 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1019 |
| 0x3F25 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1042 | 0x00 | 0x00 |
| 0x3F30 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x100F | 0x00 | 0x102B | 0x00 | 0x1067 | 0x00 | 0x1062 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x3F60 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1250 | 0x00 | 0x105F | 0x00 | 0x00 | 0x00 | 0x1060 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1062 |
| 0x3F80 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x100F | 0x00 | 0x102B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x0000 | 0x00 | 0x00 |
| 0x3F85 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x0000 | 0x00 | 0x0000 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1066 | 0x00 | 0x00 |
| 0x3FB0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1006 | 0x00 | 0x00 | 0x00 | 0x100B | 0x00 | 0x100C | 0x00 | 0x124D | 0x00 | 0x124E |
| 0x4060 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1017 | 0x00 | 0x100E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4070 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1029 |
| 0x4080 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x101D |
| 0x4090 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1004 | 0x00 | 0x1005 | 0x00 | 0x1006 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1007 | 0x00 | 0x00 |
| 0x40A0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1188 | 0x00 | 0x00 |
| 0x40B0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x124A | 0x00 | 0x124B | 0x00 | 0x124C | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4100 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1001 | 0x00 | 0x1002 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4120 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1049 | 0x00 | 0x124F | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4160 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1001 | 0x00 | 0x1002 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x41F0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1001 | 0x00 | 0x1002 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4200 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1001 | 0x00 | 0x1002 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1034 |
| 0x4330 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1001 | 0x00 | 0x1068 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1018 |
| 0x4340 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1054 | 0x00 | 0x1055 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4350 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1001 | 0x00 | 0x1002 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4375 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1063 | 0x00 | 0x1064 |
| 0x43B0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x105D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x43C0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1001 | 0x00 | 0x1065 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x43F0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1012 | 0x00 | 0x1013 | 0x00 | 0x1001 | 0x00 | 0x1002 | 0x00 | 0x00 | 0x00 | 0x1014 | 0x00 | 0x1001 | 0x00 | 0x1002 |
| 0x4410 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1043 | 0x00 | 0x00 | 0x00 | 0x1044 | 0x00 | 0x1045 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1046 | 0x00 | 0x00 |
| 0x4420 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1043 | 0x00 | 0x00 | 0x00 | 0x1044 | 0x00 | 0x1045 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1046 | 0x00 | 0x00 |
| 0x4430 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1043 | 0x00 | 0x00 | 0x00 | 0x1044 | 0x00 | 0x1045 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1046 | 0x00 | 0x00 |
| 0x4440 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1043 | 0x00 | 0x00 | 0x00 | 0x1044 | 0x00 | 0x1045 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1046 | 0x00 | 0x00 |
| 0x4500 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x100D | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4505 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x100E | 0x00 | 0x100F | 0x00 | 0x1010 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4560 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1109 | 0x00 | 0x1057 | 0x00 | 0x1058 | 0x00 | 0x1059 | 0x00 | 0x105A | 0x00 | 0x105B | 0x00 | 0x105C | 0x00 | 0x00 |
| 0x4660 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x101A | 0x00 | 0x101B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x101C | 0x00 | 0x00 |
| 0x4670 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1015 | 0x00 | 0x1016 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4680 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1015 | 0x00 | 0x1016 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x46D0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x1035 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1036 | 0x00 | 0x1035 | 0x00 | 0x1035 | 0x00 | 0x00 |
| 0x46E0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1037 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1038 | 0x00 | 0x1039 | 0x00 | 0x103A | 0x00 | 0x103B | 0x00 | 0x103C |
| 0x4730 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1047 | 0x00 | 0x1048 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4780 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1008 | 0x00 | 0x1009 | 0x00 | 0x00 | 0x00 | 0x100A | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x47A0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1021 | 0x00 | 0x1022 | 0x00 | 0x1023 | 0x00 | 0x1024 | 0x00 | 0x1025 | 0x00 | 0x1026 | 0x00 | 0x1027 | 0x00 | 0x1028 |
| 0x48F0 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x104B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4910 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x104C | 0x00 | 0x104D | 0x00 | 0x104E | 0x00 | 0x104F | 0x00 | 0x1050 | 0x00 | 0x1051 | 0x00 | 0x1052 | 0x00 | 0x1053 |
| 0x4A00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x105E |
| 0x4A30 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x102A | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4A40 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x103D | 0x00 | 0x103E | 0x00 | 0x103F | 0x00 | 0x1040 | 0x00 | 0x1041 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4B10 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1033 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4B30 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1001 | 0x00 | 0x1002 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4E17 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x100E | 0x00 | 0x100F | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4E18 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1001 | 0x00 | 0x1002 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4E19 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x106F | 0x00 | 0x1070 | 0x00 | 0x1254 | 0x00 | 0x1072 | 0x00 | 0x118D | 0x00 | 0x1255 | 0x00 | 0x1075 | 0x00 | 0x00 |
| 0x4E1B | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x106E |
| 0x4E1C | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1252 | 0x00 | 0x1253 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4E1D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x106C | 0x00 | 0x106D | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4E1E | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x106B | 0x00 | 0x1251 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x4E1F | 0x00 | 0x00 | 0x00 | 0x00 | 0x00FA | 0x00FC | 0x00 | 0x00EE | 0x00 | 0x00 | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00ED | 0x00 | 0x1002 | 0x00 | 0x1001 | 0x00 | 0x00 | 0x00 | 0x00 | 0x00 | 0x1069 | 0x00 | 0x106A | 0x00 | 0x00 | 0x00 | 0x00 |
| 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |

### FARTTYP

| ORT | BIT0 | BIT1 | BIT2 | BIT3 | BIT4 | BIT5 | BIT6 | BIT7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x3E90 | 0x1032 | 0x1031 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x3EC0 | 0x0000 | 0x102C | 0x0000 | 0x0000 | 0x102D | 0x102E | 0x118A | 0x1030 |
| 0x3EF0 | 0x100F | 0x100E | 0x1020 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x3F20 | 0x1017 | 0x1016 | 0x1018 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x1019 |
| 0x3F25 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x1042 | 0x0000 |
| 0x3F30 | 0x100F | 0x102B | 0x1067 | 0x1062 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x3F60 | 0x1250 | 0x105F | 0x0000 | 0x1060 | 0x0000 | 0x0000 | 0x0000 | 0x1062 |
| 0x3F80 | 0x100F | 0x102B | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x3F85 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x1066 | 0x0000 |
| 0x3FB0 | 0x0000 | 0x0000 | 0x1006 | 0x0000 | 0x100B | 0x100C | 0x124D | 0x124E |
| 0x4060 | 0x1017 | 0x100E | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4070 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x1029 |
| 0x4080 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x101D |
| 0x4090 | 0x1004 | 0x1005 | 0x1006 | 0x0000 | 0x0000 | 0x0000 | 0x1007 | 0x0000 |
| 0x40A0 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x1188 | 0x0000 |
| 0x40B0 | 0x124A | 0x124B | 0x124C | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4100 | 0x0000 | 0x0000 | 0x1001 | 0x1002 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4120 | 0x1049 | 0x124F | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4160 | 0x0000 | 0x0000 | 0x1001 | 0x1002 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x41F0 | 0x0000 | 0x0000 | 0x1001 | 0x1002 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4200 | 0x0000 | 0x0000 | 0x1001 | 0x1002 | 0x0000 | 0x0000 | 0x0000 | 0x1034 |
| 0x4330 | 0x0000 | 0x0000 | 0x1001 | 0x1068 | 0x0000 | 0x0000 | 0x0000 | 0x1018 |
| 0x4340 | 0x1054 | 0x1055 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4350 | 0x0000 | 0x0000 | 0x1001 | 0x1002 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4375 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x1063 | 0x1064 |
| 0x43B0 | 0x105D | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x43C0 | 0x0000 | 0x0000 | 0x1001 | 0x1065 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x43F0 | 0x1012 | 0x1013 | 0x1001 | 0x1002 | 0x0000 | 0x1014 | 0x1001 | 0x1002 |
| 0x4410 | 0x1043 | 0x0000 | 0x1044 | 0x1045 | 0x0000 | 0x0000 | 0x1046 | 0x0000 |
| 0x4420 | 0x1043 | 0x0000 | 0x1044 | 0x1045 | 0x0000 | 0x0000 | 0x1046 | 0x0000 |
| 0x4430 | 0x1043 | 0x0000 | 0x1044 | 0x1045 | 0x0000 | 0x0000 | 0x1046 | 0x0000 |
| 0x4440 | 0x1043 | 0x0000 | 0x1044 | 0x1045 | 0x0000 | 0x0000 | 0x1046 | 0x0000 |
| 0x4500 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x100D | 0x0000 | 0x0000 |
| 0x4505 | 0x0000 | 0x0000 | 0x100E | 0x100F | 0x1010 | 0x0000 | 0x0000 | 0x0000 |
| 0x4560 | 0x1109 | 0x1057 | 0x1058 | 0x1059 | 0x105A | 0x105B | 0x105C | 0x0000 |
| 0x4660 | 0x101A | 0x101B | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x101C | 0x0000 |
| 0x4670 | 0x1015 | 0x1016 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4680 | 0x1015 | 0x1016 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x46D0 | 0x0000 | 0x1035 | 0x0000 | 0x0000 | 0x1036 | 0x1035 | 0x1035 | 0x0000 |
| 0x46E0 | 0x1037 | 0x0000 | 0x0000 | 0x1038 | 0x1039 | 0x103A | 0x103B | 0x103C |
| 0x4730 | 0x1047 | 0x1048 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4780 | 0x1008 | 0x1009 | 0x0000 | 0x100A | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x47A0 | 0x1021 | 0x1022 | 0x1023 | 0x1024 | 0x1025 | 0x1026 | 0x1027 | 0x1028 |
| 0x48F0 | 0x0000 | 0x104B | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4910 | 0x104C | 0x104D | 0x104E | 0x104F | 0x1050 | 0x1051 | 0x1052 | 0x1053 |
| 0x4A00 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x4A30 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x102A | 0x0000 | 0x0000 |
| 0x4A40 | 0x103D | 0x103E | 0x103F | 0x1040 | 0x1041 | 0x0000 | 0x0000 | 0x0000 |
| 0x4B10 | 0x1033 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4B30 | 0x0000 | 0x0000 | 0x1001 | 0x1002 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4E17 | 0x0000 | 0x0000 | 0x100E | 0x100F | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4E18 | 0x0000 | 0x0000 | 0x1001 | 0x1002 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4E19 | 0x106F | 0x1070 | 0x1254 | 0x1072 | 0x118D | 0x1255 | 0x1075 | 0x0000 |
| 0x4E1B | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x106E |
| 0x4E1C | 0x1252 | 0x1253 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4E1D | 0x106C | 0x106D | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4E1E | 0x106B | 0x1251 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |
| 0x4E1F | 0x1002 | 0x1001 | 0x0000 | 0x0000 | 0x1069 | 0x106A | 0x0000 | 0x0000 |
| 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 | 0x0000 |

### FARTTEXTEINDIVIDUELL

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
| 0xFA | Fehler momentan nicht vorhanden |
| 0xFC | Fehler momentan vorhanden |
| 0x00 | --- |
| 0x00ED | -- |
| 0x00EE | Sporadischer Fehler |
| 0x00FA | Fehler momentan nicht vorhanden |
| 0x00FC | Fehler momentan vorhanden |
| 0x1001 | Ansteuerung Kurzschluß nach Plus |
| 0x1002 | Ansteuerung Kurzschluss nach Masse |
| 0x1004 | Spannung zu niedrig |
| 0x1005 | Spannung zu hoch |
| 0x1006 | Versorgungsspannung fehlerhaft |
| 0x1007 | Plausibilitätsfehler |
| 0x1008 | Analog-/Digital-Wandler Spannung zu niedrig |
| 0x1009 | Analog-/Digital-Wandler Spannung zu hoch |
| 0x100A | Analog-/Digital-Wandler Testimpuls-Fehler |
| 0x100B | Luftmasse zu niedrig oder Signal Unterbrechung oder Kurzschluss nach Masse |
| 0x100C | Luftmasse zu hoch oder Signal Kurzschluss nach Plus |
| 0x100D | Negative Regelabweichung/Luftmasse zu hoch |
| 0x100E | Signal Kurzschluss nach Plus |
| 0x100F | Signal Kurzschluss nach Masse |
| 0x1010 | Positive Regelabweichung/Luftmasse zu niedrig |
| 0x1012 | Diagnose Fehler 1 |
| 0x1013 | Diagnose Fehler 2 |
| 0x1014 | Diagnose Fehler 3 |
| 0x1015 | Kurzschluss nach Masse |
| 0x1016 | Kurzschluss nach Plus |
| 0x1017 | Signal Unterbrechung oder Kurzschluss nach Masse |
| 0x1018 | Versorgungsspannungsfehler |
| 0x1019 | Plausibilitaet zwischen Poti 1 und 2 verletzt |
| 0x101A | Versorgungsspannung DDE unterschritten |
| 0x101B | Versorgungsspannung DDE ueberschritten |
| 0x101C | Raildruckabschrankung wegen zu geringer Batteriespannung |
| 0x101D | Bremssignale im Fahrbetrieb nicht plausibel |
| 0x1020 | kein Temperaturanstieg |
| 0x1021 | Aussetzer Zylinder 1 |
| 0x1022 | Aussetzer Zylinder 2 |
| 0x1023 | Aussetzer Zylinder 3 |
| 0x1024 | Aussetzer Zylinder 4 |
| 0x1025 | Aussetzer Zylinder 5 |
| 0x1026 | Aussetzer Zylinder 6 |
| 0x1027 | Aussetzer Zylinder 7 |
| 0x1028 | Aussetzer Zylinder 8 |
| 0x1029 | Signal nicht plausibel mit Gangwechsel |
| 0x102A | kein Signal oder MFL nicht verbaut |
| 0x102B | Signal Unterbrechung oder Kurzschluss nach Plus |
| 0x102C | Nockenwellengeber Frequenz zu hoch |
| 0x102D | falsches Signal |
| 0x102E | dynamisch unplausible |
| 0x1030 | Korrektur der Haupteinspritzung zu spät |
| 0x1031 | Drehzahl zu hoch |
| 0x1032 | Signal dynamisch unplausible |
| 0x1033 | Korrekturmenge zu hoch oder zu niedrig |
| 0x1034 | defekt |
| 0x1035 | Checksummenfehler |
| 0x1036 | Kommunikation mit EEPROM |
| 0x1037 | DDE Recovery aufgetreten |
| 0x1038 | ASCET Bypass Schnittstellenfehler |
| 0x1039 | redundante Schubueberwachung |
| 0x103A | Gate-Array Mengenstop |
| 0x103B | Microcontroller (Gate-Array Kommunikation) |
| 0x103C | Microcontroller (Gate-Array Kommunikation), nicht entprellt |
| 0x103D | Manipulationsversuch |
| 0x103E | Uebertragungsfehler |
| 0x103F | Timeout abgelaufen |
| 0x1040 | Urcode (UC) im EEPROM defekt |
| 0x1041 | Wechselcode (WC) im EEPROM defekt |
| 0x1042 | Ladeluftschlauch abgefallen |
| 0x1043 | Strom an Low Side zu gross |
| 0x1044 | Strom an High Side zu gross |
| 0x1045 | Lastabfall |
| 0x1046 | Schnell-Loeschfehler |
| 0x1047 | DDE ADC signal range check low error of metering unit AD-channel |
| 0x1048 | DDE ADC signal range check high error of metering unit AD-channel |
| 0x1049 | HRL Relais schaltet zu frueh ab |
| 0x104B | CAN-Bus Baustein defekt |
| 0x104C | EGS Signal(e) in Botschaft nicht gueltig |
| 0x104D | ASC1 Signal(e) in Botschaft nicht gueltig |
| 0x104E | INSTR3 Signal(e) in Botschaft nicht gueltig |
| 0x104F | INST2 Signal(e) in Botschaft nicht gueltig |
| 0x1050 | ASC2 Signal(e) in Botschaft nicht gueltig |
| 0x1051 | ASC3 Signal(e) in Botschaft nicht gueltig |
| 0x1052 | CAN Steuergeraet hat sich vom Bus abgeschaltet (Bus off) |
| 0x1053 | ASC4 Signal(e) in Botschaft nicht gueltig |
| 0x1054 | Strom zu klein |
| 0x1055 | Strom zu gross |
| 0x1057 | Minimaldruck zu niedrig |
| 0x1058 | Ansteuerung zu hoch oder Raildruck zu niedrig |
| 0x1059 | Raildruckregelventil klemmt |
| 0x105A | Leckage |
| 0x105B | Abweichung zu groß |
| 0x105C | P+I zu groß |
| 0x105D | Zusatzfehlerpfad Diagnoselampe |
| 0x105E | Zuendstellung 2 Plausibilitaet nach Steuergeraet-Initialisierung |
| 0x105F | obere Fahrgeschwindigkeitssignalgrenze ueberschritten |
| 0x1060 | Frequenz zu groß |
| 0x1062 | Plausibilitaet |
| 0x1063 | Fehler beim Abstellen ueber Nullmenge  |
| 0x1064 | Fehler beim Abstellen ueber Injektor Endstufe (OFF)  |
| 0x1065 | Ansteuerung Unterbrechung oder Kurzschluss nach B- |
| 0x1066 | Fehler |
| 0x1067 | Speisespannungsfehler |
| 0x1068 | Ansteuerung Unterbrechung |
| 0x1069 | Spannung am Boosterkondensator zu hoch |
| 0x106A | Spannung am Boosterkondensator zu niedrig |
| 0x106B | INSTR4 Signal(e) in Botschaft nicht gueltig |
| 0x106C | untere Stabischwelle |
| 0x106D | obere Stabischwelle |
| 0x106E | Plausibilitaet im Nachlauf  |
| 0x106F | Maximaldruck überschritten |
| 0x1070 | Kraftstoff unterhalb Minimaldruck |
| 0x1072 | Proportionalventil geöffnet |
| 0x1075 | Druckabfall im Leerlauf |
| 0x1109 | Maximaldruck ueberschritten |
| 0x1188 | Generatorlast 0% |
| 0x118A | Nockenwellengebersignal statisch falsch |
| 0x118D | Leckageerkennung im Schubbetrieb |
| 0x124A | Freondrucksensor Spannung zu hoch |
| 0x124B | Freondrucksensor Spannung zu niedrig |
| 0x124C | Freondrucksensor Versorgungsspannung fehlerhaft |
| 0x124D | Plausibilitaetsfehler: Luftmasse zu hoch |
| 0x124E | Plausibilitaetsfehler: Luftmasse zu niedrig |
| 0x124F | HRL Relais schaltet zu spaet ab |
| 0x1250 | Geschwindigkeit ueber CAN ungültig |
| 0x1251 | Vorderradgeschwindigkeitssensor defekt |
| 0x1252 | untere Schwelle unterschritten |
| 0x1253 | obere Schwelle ueberschritten |
| 0x1254 | Druckabfall während Leckageerkennung im Schubbetrieb  |
| 0x1255 | Druckabfall in Kombination mit positiver Regelabweichung |
| 0xXYXY | Unbekannte Fehlerart |
| 0xFFFF | unbekannte Fehlerart |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 0x0000 | 0x01 | 0x05 | 0x02 | 0x09 | 0x30 |
| 0x3E90 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x3EC0 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x3EF0 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x3F20 | 0x01 | 0x05 | 0x07 | 0x09 | 0x30 |
| 0x3F25 | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x3F30 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x3F60 | 0x01 | 0x02 | 0x03 | 0x09 | 0x30 |
| 0x3F80 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x3F85 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x3FB0 | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x4060 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4070 | 0x01 | 0x09 | 0x03 | 0x07 | 0x30 |
| 0x4080 | 0x01 | 0x05 | 0x07 | 0x09 | 0x30 |
| 0x4090 | 0x01 | 0x05 | 0x08 | 0x09 | 0x30 |
| 0x40A0 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x40B0 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x4100 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4120 | 0x01 | 0x02 | 0x05 | 0x04 | 0x30 |
| 0x4160 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x41F0 | 0x01 | 0x02 | 0x05 | 0x09 | 0x30 |
| 0x4200 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x4330 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4340 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4350 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4375 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x43B0 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x43C0 | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x43F0 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x4410 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4420 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4430 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4440 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4500 | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x4505 | 0x01 | 0x02 | 0x03 | 0x19 | 0x30 |
| 0x4560 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4660 | 0x01 | 0x02 | 0x03 | 0x13 | 0x30 |
| 0x4670 | 0x01 | 0x20 | 0x05 | 0x08 | 0x30 |
| 0x4680 | 0x01 | 0x21 | 0x05 | 0x07 | 0x30 |
| 0x46D0 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x46E0 | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0x4730 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4780 | 0x01 | 0x08 | 0x05 | 0x07 | 0x30 |
| 0x47A0 | 0x01 | 0x02 | 0x04 | 0x03 | 0x30 |
| 0x48F0 | 0x01 | 0x05 | 0x03 | 0x09 | 0x30 |
| 0x4910 | 0x01 | 0x05 | 0x03 | 0x09 | 0x30 |
| 0x4A00 | 0x01 | 0x02 | 0x06 | 0x05 | 0x30 |
| 0x4A30 | 0x01 | 0x02 | 0x03 | 0x09 | 0x30 |
| 0x4A40 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4B10 | 0x01 | 0x02 | 0x15 | 0x05 | 0x30 |
| 0x4B30 | 0x01 | 0x02 | 0x05 | 0x09 | 0x30 |
| 0x4E17 | 0x01 | 0x05 | 0x02 | 0x09 | 0x30 |
| 0x4E18 | 0x01 | 0x02 | 0x05 | 0x03 | 0x30 |
| 0x4E19 | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4E1B | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4E1C | 0x01 | 0x02 | 0x03 | 0x04 | 0x30 |
| 0x4E1D | 0x01 | 0x02 | 0x05 | 0x04 | 0x30 |
| 0x4E1E | 0x01 | 0x05 | 0x03 | 0x09 | 0x30 |
| 0x4E1F | 0x01 | 0x02 | 0x03 | 0x05 | 0x30 |
| 0xXYXY | 0x01 | 0x05 | 0x02 | 0x09 | 0x30 |

### PCODEMATRIX

| FCODE_BIT | PCODE | FEHLERORT | FEHLERART |
| --- | --- | --- | --- |
| 0x3EF0_0 | P0118 | Kuehlmitteltemperaturfuehler | Signal Kurzschluss nach B- |
| 0x3EF0_1 | P0117 | Kuehlmitteltemperaturfuehler | Signal Unterbrechung oder Kurzschluss nach B+ |
| 0x3EF0_2 | P0115 | Kuehlmitteltemperaturfuehler | Signal dynamisch unplausibel |
| 0x3F30_0 | P0192 | Raildrucksensor | Kurzschluss nach B- |
| 0x3F30_1 | P0193 | Raildrucksensor | Unterbrechung oder Kurzschluss nach B+ |
| 0x3F30_2 | P0191 | Raildrucksensor | Speisespannungsfehler |
| 0x3F60_1 | P0503 | Fahrgeschwindigkeitssignal | Geschwindigkeit zu gross |
| 0x3F60_5 | P0500 | Fahrgeschwindigkeitssignal | Fahrgeschwindigkeit von CAN ungueltig |
| 0x3F60_7 | P0501 | Fahrgeschwindigkeitssignal | Plausibilitaet mit Einspritzmenge und Motordrehzahl |
| 0x3F80_0 | P0113 | Ansauglufttemperaturfuehler | Signal Kurzschluss nach B- |
| 0x3F80_1 | P0112 | Ansauglufttemperaturfuehler | Signal Unterbrechung oder Kurzschluss nach B+ |
| 0x3FB0_2 | P0101 | Luftmassenmesser | Speisespannungsfehler |
| 0x3FB0_4 | P0102 | Luftmassenmesser | Signal Unterbrechung oder Kurzschluss nach B- |
| 0x3FB0_5 | P0103 | Luftmassenmesser | Signal Kurzschluss nach B+ |
| 0x3FB0_6 | P3263 | Luftmassenmesser | Luftmasse unplausibel hoch |
| 0x3FB0_7 | P3264 | Luftmassenmesser | Luftmasse zu gering |
| 0x4060_0 | P2228 | Atmosphaerendruckfuehler (im Steuergeraet verbaut) | Signal Unterbrechung oder Kurzschluss nach B- |
| 0x4060_1 | P2229 | Atmosphaerendruckfuehler (im Steuergeraet verbaut) | Signal Kurzschluss nach B+ |
| 0x43C0_2 | P2142 | Drosselklappe | Ansteuerung Kurzschluss nach B+ |
| 0x43C0_3 | P2141 | Drosselklappe | Ansteuerung Unterbrechung oder Kurzschluss nach B- |
| 0x4500_5 | P0401 | Abgasrueckfuehr-Regelung | Negative Regelabweichung / Luftmasse zu hoch |
| 0x4505_2 | P1212 | Abgasrueckfuehr-Regelung oder Abgasrueckfuehrsteller | Ansteuerung Kurzschluss nach B+ |
| 0x4505_3 | P3278 | Abgasrueckfuehr-Regelung oder Abgasrueckfuehrsteller | Ansteuerung Unterbrechung oder Kurzschluss nach B- |
| 0x4505_4 | P0402 | Abgasrueckfuehr-Regelung oder Abgasrueckfuehrsteller | Positive Regelabweichung / Luftmasse zu niedrig |
| 0x4560_0 | P3007 | Raildruck-Plausibilitaet | Maximaldruck ueberschritten |
| 0x4560_1 | P3091 | Raildruck-Plausibilitaet | Minimaldruck ueber Motordrehzahl zu klein |
| 0x4560_3 | P3006 | Raildruck-Plausibilitaet | Raildruckregelventil klemmt |
| 0x4560_5 | P3005 | Raildruck-Plausibilitaet | Regelabweichung ueber Motordrehzahl zu gross |
| 0x4670_0 | P0642 | Speisespannung fuer Pedalwertgeber, Ladedruckfuehler, Luftmassenmesser | Unterbrechung oder Kurzschluss nach B- |
| 0x4670_1 | P0643 | Speisespannung fuer Pedalwertgeber, Ladedruckfuehler, Luftmassenmesser | Kurzschluss nach B+ |
| 0x4680_0 | P0652 | Speisespannung fuer Pedalwertgeber, Raildrucksensor, Vorfoerderdruckfuehler | Unterbrechung oder Kurzschluss nach B- |
| 0x4680_1 | P0653 | Speisespannung fuer Pedalwertgeber, Raildrucksensor, Vorfoerderdruckfuehler | Kurzschluss nach B+ |
| 0x48F0_1 | P3200 | Steuergeraet DDE (CAN-Controller) | CAN-Bus Baustein defekt |
| 0x4E19_0 | P3004 | Raildruck-Plausibilität mengengeregelt | Maximaldruck überschritten |
| 0x4E19_1 | P3090 | Raildruck-Plausibilität mengengeregelt | Kraftstoff unterhalb Minimaldruck |
| 0x4E19_3 | P3003 | Raildruck-Plausibilität mengengeregelt | Proportionalventil geöffnet |
| 0x4E19_5 | P3002 | Raildruck-Plausibilität mengengeregelt | Druckabfall in Kombination mit positiver Regelabweichung |
| 0x4E1C_0 | P3001 | Kraftstoffdruckoffset | untere Schwelle unterschritten |
| 0x4E1C_1 | P3000 | Kraftstoffdruckoffset | obere Schwelle ueberschritten |
| 0xXXXX | PXXXX | Unbekannt | Unbekannt |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | 11220333 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### EWSEMPFANGSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Startwertprogrammierung bzw. -ruecksetzen war erfolgreich |
| 0x01 | falscher Startwert beim Ruecksetzen (EWS u. DDE passen ni. zusammen) |
| 0x02 | Telegramminhalt war kein Startwert (event. Wechselcode) |
| 0x03 | Schnittstellenfehler DWA: Frame o. Parity oder kein Signal (Timeout) |
| 0x04 | Prozess laeuft |
| 0x05 | Programmierung bzw. Ruecksetzen im Fahrzyklus noch nicht ausgefuehrt |
| 0x06 | gleiche Zufallszahl wie bei vorherigem Ruecksetzen trotz Weiterschaltung |
| 0x07 | noch kein Startwert programmiert |
| 0x10 | Startwert nicht korrekt in Flash programmiert |
| 0x11 | Wechselcode nicht korrekt in EEPROM-Spiegel programmiert |
| 0x21 | 2-aus-3-Startwertablage im Flash nicht in Ordnung |
| 0xXY | Fehlerhafter Status |

### EWSSTART

| STATI | TEXT |
| --- | --- |
| 0x00 | DDE bereit, Startwert zu empfangen |
| 0x01 | kein freier Startwert mit Freigabe vorhanden |
| 0x02 | noch kein Startwert gespeichert |
| 0x03 | Startwert nicht plausibel |
| 0xXY | Fehlerhafter Status |

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
