# SMG.prg

## General

|  |  |
| --- | --- |
| File | SMG.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 35 |
| Origin | BMW TP-421 Mellersh |
| Revision | 2.4 |
| Author | BMW TP-421 Mellersh, BMW-M ZS-E-53 J.Weber, BMW TP-421 Teepe |
| ECU Comment | Originalfile GS834.src geaendert fuer SMG |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Getriebesteuerung SMG |  |  |
| ORIGIN | string | BMW TP-421 Mellersh |  |  |
| REVISION | string | 2.04 |  |  |
| AUTHOR | string | BMW TP-421 Mellersh, BMW-M ZS-E-53 J.Weber, BMW TP-421 Teepe |  |  |
| COMMENT | string | Originalfile GS834.src geaendert fuer SMG |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Init-Job fuer EGS

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Ident-Daten fuer EGS

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen fuer EGS

_No arguments._

### CODIER_CS_PRUEFEN

Ueberpruefen der Codier-Checksumme fuer EGS

_No arguments._

### STATUS_IO_LESEN

Status Eingaenge SMG

_No arguments._

### SPEICHER_LESEN

Speicher Lesen

| Name | Type | Description |
| --- | --- | --- |
| SPEICHERART | string | Speicherart: FLASH, RAM, ROM, E2PROM |
| ADRESSE | long | Startadresse |
| ANZAHL | int | Anzahl zu lesender Bytes |

### STEUERN_STELLGLIED

Ansteuern der Stellglieder

| Name | Type | Description |
| --- | --- | --- |
| STELLGL | string | Anzusteuerndes Stellglied table Stellglieder STELLGLIED PIN |
| STEUERART1 | string | Steuerungsart: POSITIONSVORGABE STROMVORGABE INAKTIV AKTIV |
| STEUERART2 | int | Steuerungsart: abhaengig von Stellglied - siehe Lastenheft |

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### TESTPRG_STARTEN

Testprogramm starten

| Name | Type | Description |
| --- | --- | --- |
| TESTPRG_NR | int | Nummer des Testprogrammes |

### TEST_PRG_STOP

Beenden eines laufenden Testprogrammes

_No arguments._

### COD_ADAPT_LESEN

Codierdaten oder Adaptionswerte Lesen

| Name | Type | Description |
| --- | --- | --- |
| COD_ADAPT | int | Auswahl Codierdaten oder Adaptionswerte Lesen (00 oder 01) |

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
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT | UW_1 | UW_2 | UW_3 |
| --- | --- | --- | --- | --- |
| 0x01 | CAN fehlerhafter Wert | 0x06 | 0x01 | 0x00 |
| 0x03 | Getriebeoeltemperatur | 0x08 | 0x07 | 0x00 |
| 0x05 | Hydropumpe dauernd angesteuert | 0x0B | 0x0C | 0x00 |
| 0x07 | Raddrehzahl hinten links | 0x04 | 0x0D | 0x00 |
| 0x08 | Anlasserfreigabe | 0x09 | 0x0D | 0x00 |
| 0x0A | Magnetventil Kupplung | 0x0C | 0x09 | 0x00 |
| 0x0D | Motorhaubenkontakt bei Fahrt | 0x04 | 0x10 | 0x00 |
| 0x12 | Waehlhebel Schalter M | 0x0F | 0x0E | 0x00 |
| 0x13 | Tuerkontakt | 0x09 | 0x0D | 0x00 |
| 0x1A | Positionsgeber Gasse (Waehlwinkel) | 0x11 | 0x12 | 0x00 |
| 0x1B | Batteriespannung | 0x09 | 0x06 | 0x00 |
| 0x1D | Sensor Laengsbeschleunigung | 0x12 | 0x04 | 0x00 |
| 0x1E | Waehlhebel Positionsgeber Gasse A | 0x0F | 0x12 | 0x00 |
| 0x22 | Raddrehzahl vorne links | 0x04 | 0x0D | 0x00 |
| 0x28 | Magnetventil Gasse | 0x0C | 0x09 | 0x00 |
| 0x33 | Sensor Spannungsversorgung | 0x12 | 0x09 | 0x00 |
| 0x34 | Handbremse immer aktiv | 0x04 | 0x0D | 0x00 |
| 0x36 | Positionsgeber Gang (Schaltweg) | 0x11 | 0x12 | 0x00 |
| 0x37 | Positionsgeber Kupplung | 0x0C | 0x12 | 0x00 |
| 0x38 | Hydraulikdruck | 0x12 | 0x09 | 0x00 |
| 0x39 | Sensor Querbeschleunigung | 0x12 | 0x04 | 0x00 |
| 0x3A | Fahrpedal | 0x02 | 0x12 | 0x00 |
| 0x3E | Funktionsanzeige / Summer | 0x09 | 0x04 | 0x00 |
| 0x3F | Getriebeeingangsdrehzahl | 0x05 | 0x06 | 0x00 |
| 0x40 | Raddrehzahl vorne rechts | 0x04 | 0x0D | 0x00 |
| 0x41 | Raddrehzahl hinten rechts | 0x04 | 0x0D | 0x00 |
| 0x42 | Ganganzeige Protokollfehler | 0x15 | 0x15 | 0x00 |
| 0x46 | Kick Down Schalter | 0x13 | 0x12 | 0x00 |
| 0x48 | Magnetventil Gang vor | 0x0C | 0x09 | 0x00 |
| 0x49 | Waehlhebel Schalter Automatikgasse | 0x0F | 0x0E | 0x00 |
| 0x4C | Magnetventil Gang rueck | 0x0C | 0x09 | 0x00 |
| 0x4E | Signal Betriebsbremse | 0x0A | 0x09 | 0x00 |
| 0x4F | Schnittstelle FGR | 0x04 | 0x06 | 0x00 |
| 0x57 | Leerlauf-Schalter | 0x13 | 0x12 | 0x00 |
| 0x58 | Motordrehzahl | 0x06 | 0x03 | 0x00 |
| 0x64 | Steuergeraetefehler | 0x09 | 0x0D | 0x00 |
| 0x65 | CAN Bus Fehler | 0x06 | 0x01 | 0x00 |
| 0x69 | Hydropumpe Ausfall | 0x0B | 0x0C | 0x00 |
| 0x6B | Raddrehzahlen alle | 0x04 | 0x0D | 0x00 |
| 0x71 | Motorhaubenkontakt im Stehen | 0x04 | 0x10 | 0x00 |
| 0x82 | Waehlhebel Automatikgasse | 0x0F | 0x0E | 0x00 |
| 0x9C | Druckverlust im System | 0x0D | 0x06 | 0x00 |
| 0x9E | Fahrpedal und DK-Poti defekt | 0x06 | 0x12 | 0x00 |
| 0xBC | Motordrehzahl DME fehlerhaft | 0x06 | 0x05 | 0x00 |
| 0xC8 | Adaption unvollstaendig | 0x14 | 0x14 | 0x00 |
| 0xC9 | Getriebefehler | 0x15 | 0x16 | 0x00 |
| 0xCA | Anfahrgaenge | 0x15 | 0x16 | 0x00 |
| 0xFF | unbekannter Fehlerort | 0x06 | 0x08 | 0x00 |

### FUMWELTTEXTE

| LABEL | UWTEXT | UW_EINH | UW_MULT | UW_DIV | UW_ADD |
| --- | --- | --- | --- | --- | --- |
| 0x01 | Fehlerinfo CAN | - | 1 | 1 | 0 |
| 0x02 | Drosselklappenwinkel | % | 100 | 255 | 0 |
| 0x03 | Motordrehzahl ueber CAN | % | 100 | 255 | 0 |
| 0x04 | Fahrzeuggeschwindigkeit | km/h | 2 | 1 | 0 |
| 0x05 | Getriebeeingangsdrehzahl | 1/min | 40 | 1 | 0 |
| 0x06 | Motordrehzahl | 1/min | 40 | 1 | 0 |
| 0x07 | Motortemperatur | Grad C | 1 | 1 | -48 |
| 0x08 | Getriebeoeltemperatur | Grad C | 1 | 1 | -55 |
| 0x09 | Batteriespannung | mV | 16 | 198 | 0 |
| 0x0A | Status Betriebsbremse | - | 1 | 1 | 0 |
| 0x0B | Hydraulikstatus | - | 1 | 1 | 0 |
| 0x0C | Hydraulikdruck | bar | 255 | 128 | -26 |
| 0x0D | Ansauglufttemperatur | Grad C | 1 | 1 | -48 |
| 0x0E | Potispannung Waehlhebel | mV | 255 | 13 | 0 |
| 0x0F | Status Waehlhebel | - | 1 | 1 | 0 |
| 0x10 | Status Haubenkontakt | - | 1 | 1 | 0 |
| 0x11 | Gang Getriebeuebersetzung | - | 1 | 1 | 0 |
| 0x12 | Spannungsversorgung Sensor | mv | 235 | 6 | 0 |
| 0x13 | Analogwert Fahrpedal | mV | 255 | 13 | 0 |
| 0x14 | Testprogramm  | - | 1 | 1 | 0 |
| 0x15 | Zielgang/Gang | - | 1 | 1 | 0 |
| 0x16 | Gang Fehlerart | - | 1 | 1 | 0 |
| 0x17 | Keine Umweltbedingung | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | XY | 1 | 1 | 0 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | Fehler momentan vorhanden |
| 0xFF | unbekannte Fehlerart |

### SPEICHER

| SPEICHER | WERT |
| --- | --- |
| FLASH | 0x00 |
| RAM | 0x01 |
| ROM | 0x02 |
| E2PROM | 0x12 |

### STELLGLIEDER

| STELLGLIED | PIN |
| --- | --- |
| MAGNETVENTIL_KUPPLUNG | 0x0A |
| MAGNETVENTIL_GASSE | 0x28 |
| MAGNETVENTIL_GANG_VOR | 0x48 |
| MAGNETVENTIL_GANG_R | 0x4C |
| ANLASSER_FREIGABE | 0x08 |
| HYDROPUMPE | 0x05 |
| TEMPOMAT_AUS | 0x3B |
| GONG | 0x3D |
| WARNLAMPE | 0x3E |
| SHIFTLOCK | 0x21 |
| KOMBI | 0x42 |

### STATTESTTEXTE

| STB | TEST_STATUS_TEXT |
| --- | --- |
| 0x00 | Testbedingung nicht erfuellt |
| 0x01 | Testprogramm laeuft |
| 0x02 | Testprogramm beendet |
| 0x03 | Testprogramm nicht ordnungsgemaess beendet |
| 0xFF | Unbekannter Status |

### INFOTEXTE1A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE2A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE3A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE4A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Warten auf Waehlhebel A, Start der Pruefung mit Bremse |
| 0x01 | Hydroanschluss SWV 1. mal pruefen |
| 0x02 | Hydroanschluss SWR 1. mal pruefen |
| 0x03 | Hydroanschluss WW  1. mal pruefen |
| 0x04 | Hydroanschluss KU  1. mal pruefen |
| 0x05 | Hydroanschluss SWV 2. mal pruefen |
| 0x06 | Hydroanschluss SWR 2. mal pruefen |
| 0x07 | Hydroanschluss WW  2. mal pruefen |
| 0x08 | Hydroanschluss KU  2. mal pruefen |
| 0x09 | Ende der Anschlussplausibilitaet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE5A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Warten auf Waehlhebel A, Start des Entlueftens mit Bremse |
| 0x01 | Warten auf Betriebsdruck fuer 1. WW-Entlueftung |
| 0x02 | WW 1. mal entlueften |
| 0x03 | Warten auf Betriebsdruck fuer 1. SW-Entlueftung |
| 0x04 | SW 1. mal entlueften |
| 0x05 | Warten auf 2. Entlueftungszyklus |
| 0x06 | Warten auf Betriebsdruck fuer 2. WW-Entlueftung |
| 0x07 | WW 2. mal entlueften |
| 0x08 | Warten auf Betriebsdruck fuer 2. SW-Entlueftung |
| 0x09 | SW 2. mal entlueften |
| 0x0A | Warten auf 3. Entlueftungszyklus |
| 0x0B | Warten auf Betriebsdruck fuer 3. WW-Entlueftung |
| 0x0C | WW 3. mal entlueften |
| 0x0D | Warten auf Betriebsdruck fuer 3. SW-Entlueftung |
| 0x0E | SW 3. mal entlueften |
| 0x0F | Warten auf Entlueftungsventilpruefung |
| 0x10 | Warten auf Betriebsdruck fuer WW-Entlueftungsventilpruefung |
| 0x11 | WW-Entlueftungsventil pruefen |
| 0x12 | Warten auf Betriebsdruck fuer SW-Entlueftungsventilpruefung |
| 0x13 | SW-Entlueftungsventil pruefen |
| 0x14 | Ende der Aktuatorentlueftung |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE6A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0x01 | Kupplung oeffnen |
| 0x02 | Mittellage positionieren |
| 0x03 | Waehlhebelposition R einlernen, Start mit Bremse |
| 0x04 | Waehlhebelposition N einlernen, Start mit Bremse |
| 0x05 | Waehlhebelposition E einlernen, Start mit Bremse |
| 0x06 | in NV RAM schreiben |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE7A

| IB | INFO_TEXT |
| --- | --- |
| 0x01 | Kupplung oeffnen |
| 0x02 | Mittellage positionieren |
| 0x06 | in NV RAM schreiben |
| 0x07 | Waehlwinkeloffsetstromadaption |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE8A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0x01 | Kupplung oeffnen |
| 0x02 | Mittellage positionieren |
| 0x06 | in NV RAM schreiben |
| 0x07 | Waehlwinkeloffsetstromadaption |
| 0x08 | Waehlwinkel Verfahrweg testen |
| 0x09 | Vorwaertsgang E ist eingelegt- Start der Adaption mit Bremse |
| 0x0A | Waehlwinkel R einlegen - Start der Adaption mit Bremse |
| 0x0B | Gang 1 ausmessen |
| 0x0C | Gang 2 ausmessen |
| 0x0D | Gang 3 ausmessen |
| 0x0E | Gang 4 ausmessen |
| 0x0F | Gang 5 ausmessen |
| 0x10 | Gang 6 ausmessen |
| 0x11 | Gang R ausmessen |
| 0x12 | Neutralstellung einnehmen |
| 0x14 | Waehlwinkel N einlegen - Start mit Bremse |
| 0x15 | Bowdenzug testen |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE9A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0x28 | Kupplung ist geschlossen, wird geoeffnet |
| 0x29 | Kupplung ist offen, wird geschlossen |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE10A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0x20 | Fahrpedal durchtreten |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE11A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE12A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE13A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Adaption laeuft |
| 0x01 | Initialisierung |
| 0x02 | Initialisierung |
| 0x03 | Maximale Ueberdeckung einlernen |
| 0x04 | Minimale Ueberdeckung einlernen |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE14A

| IB | INFO_TEXT |
| --- | --- |
| 0x01 | SW auf Mittellage positionieren |
| 0x02 | Ende der Schaltwegmittellagepositionierung |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE1F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x22 | Fahrpedalnullstellung groesser 240 Bit (1,17V) |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft, oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE2F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0xA0 | Testbedingung nicht erfuellt (Motor oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE3F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x24 | Schleifpunkt zu klein |
| 0x25 | Schleifpunkt zu gross |
| 0x26 | keine Getriebedrehzahl |
| 0x27 | Schleifpunkt konnte nicht eingelernt werden |
| 0xA0 | Testbedingung nicht erfuellt (Motor ist aus, Gang eingelegt oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE4F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x0B | SWV hat keine Funktion |
| 0x0C | SWV ist an SWR angeschlossen |
| 0x0D | SWV ist an WW angeschlossen |
| 0x0F | SWR hat keine Funktion |
| 0x10 | SWR ist an SWV angeschlossen |
| 0x11 | SWR ist an WW angeschlossen |
| 0x13 | WW hat keine Funktion |
| 0x14 | WW ist an SWV angeschlossen |
| 0x15 | WW ist an SWR angeschlossen |
| 0x17 | KU ist an SWV angeschlossen |
| 0x18 | KU ist an SWR angeschlossen |
| 0x19 | KU ist an WW angeschlossen |
| 0x1B | Hydraulikanschluesse sind i.O. |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE5F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x1C | Betriebsdruck fuer WW-Entlueftung nicht erreicht |
| 0x1D | WW-Entlueftung n.i.O. / Entlueftungsventil oeffnet nicht richtig |
| 0x1E | WW-Entlueftungsventil schliesst nicht richtig |
| 0x1F | Betriebsdruck fuer SW-Entlueftung nicht erreicht |
| 0x20 | SW-Entlueftung n.i.O. / Entlueftungsventil oeffnet nicht richtig |
| 0x21 | SW-Entlueftungsventil schliesst nicht richtig |
| 0x22 | Aktuator ist entlueftet, Entlueftung i.O. |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE6F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x1E | Schaltwegposition nicht auf Mittellage positionierbar |
| 0x1F | Keine gueltige Mittellage gefunden |
| 0x28 | Die Bestaetigung der Waehlhebelposition geschah bei nicht aktiviertem Schalter |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE7F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x0A | Wert WW-offsetstrom zu gross |
| 0x14 | Speichern in NV-RAM nicht moeglich |
| 0x1E | Schaltwegposition nicht auf Mittellage positionierbar |
| 0x1F | Keine gueltige Mittellage gefunden |
| 0x20 | Kein gueltiger Waehlwinkeloffsetstrom |
| 0x28 | Die Bestaetigung der Waehlhebelposition geschah bei nicht aktiviertem Schalter |
| 0x3C | Waehlwinkelregler nicht adaptiert |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE8F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Minimaler Abstand li/re zu gering |
| 0x02 | Endstellung gerade Gaenge zu unterschiedlich |
| 0x03 | Endstellung ungerade Gaenge zu unterschiedlich |
| 0x04 | Endstellung R-Gang zu ungerade Gaenge zu unterschiedlich |
| 0x05 | Minimale Waehlwinkel-Fenstergroesse zu gering |
| 0x06 | mimimale Fenstergroesse fuer R unterschritten |
| 0x0A | Waehlwinkelstromoffset zu gross |
| 0x0B | Schaltwegendstellung gerade Gaenge zu gross |
| 0x0C | Schaltwegendstellung ungerade Gaenge zu gross |
| 0x0D | Schaltwegendstellung Neutral zu gross |
| 0x0E | Waehlwinkel Neutral zu gross |
| 0x0F | Waehlwinkel Gang 1 und 2 zu gross |
| 0x10 | Waehlwinkel Gang 3 und 4 zu gross |
| 0x11 | Waehlwinkel Gang 5 und 6 zu gross |
| 0x12 | Waehlwinkel Gang R zu gross |
| 0x14 | NVRAM Waehlwinkeloffsetstrom nicht gespeichert |
| 0x15 | NVRAM Schaltwegende gerade Gaenge nicht gespeichert |
| 0x16 | NVRAM Schaltwegende ungerade Gaenge nicht gespeichert |
| 0x17 | NVRAM Schaltweg Neutral nicht gespeichert |
| 0x18 | NVRAM Waehlwinkel Neutral nicht gespeichert |
| 0x19 | NVRAM Waehlwinkel Gasse 1-2 nicht gespeichert |
| 0x1A | NVRAM Waehlwinkel Gasse 3-4 nicht gespeichert |
| 0x1B | NVRAM Waehlwinkel Gasse 5-6 nicht gespeichert |
| 0x1C | NVRAM Waehlwinkel Gasse R nicht gespeichert |
| 0x1E | Schaltwegposition nicht auf Mittellage positionierbar |
| 0x1F | keine gueltige Mittellage gefunden |
| 0x20 | kein gueltiger Waehlwinkeloffsetstrom |
| 0x21 | Zeitueberschreitung Einregeln Waehlwinkelmitte |
| 0x22 | Zeitueberschreitung Einregeln Schaltwegmitte |
| 0x23 | Minimaler Abstand Schaltwegmitte Schaltwegende zu gering |
| 0x24 | Linke WW-Anschlag kleiner als der erlaubte elektrische Bereich |
| 0x25 | Rechte WW-Anschlag groesser als der erlaubte elektrische Bereich |
| 0x28 | Nicht aktivierte Schalter bei Bestaetigung der Waehlhebelposition |
| 0x32 | Gang 1 wurde substituiert |
| 0x33 | Gang 2 wurde substituiert |
| 0x34 | Gang 3 wurde substituiert |
| 0x35 | Gang 4 wurde substituiert |
| 0x36 | Gang 5 wurde substituiert |
| 0x37 | Gang 6 wurde substituiert |
| 0x38 | Gang R wurde substituiert |
| 0x3A | Verriegelung der Vorwaertsgaenge unwirksam |
| 0x3B | Verriegelung der Rueckwaertsgaenge unwirksam |
| 0x3C | Waehlwinkelregler nicht adaptierbar |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft, oder Zuendung ist aus) |
| 0xFF | unbekannter Infotext |

### INFOTEXTE9F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x28 | Platzhalter Error 0x28 (40) |
| 0x29 | Platzhalter Error 0x29 (41) |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft, oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE10F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE11F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x2A | Offset kleiner 1,6V oder groesser 2,0 V |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE12F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x2C | Offset kleiner 1,6V oder groesser 2,0 V |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE13F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x2F | EK oder AK Position der Kupplung ausserhalb der Toleranz |
| 0x31 | Ueberdeckung des Kupplungsventils ausserhalb der Toleranz |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE14F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x23 | Schaltweg laesst sich nicht positionieren |
| 0x24 | keine SW Mitte gefunden |
| 0x25 | SW-Mittellage erreicht |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |
